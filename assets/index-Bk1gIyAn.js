function _2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var e1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ei(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t1={exports:{}},Gl={},n1={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=Symbol.for("react.element"),z2=Symbol.for("react.portal"),L2=Symbol.for("react.fragment"),M2=Symbol.for("react.strict_mode"),O2=Symbol.for("react.profiler"),R2=Symbol.for("react.provider"),I2=Symbol.for("react.context"),D2=Symbol.for("react.forward_ref"),N2=Symbol.for("react.suspense"),V2=Symbol.for("react.memo"),F2=Symbol.for("react.lazy"),uh=Symbol.iterator;function B2(e){return e===null||typeof e!="object"?null:(e=uh&&e[uh]||e["@@iterator"],typeof e=="function"?e:null)}var r1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i1=Object.assign,a1={};function Zi(e,t,n){this.props=e,this.context=t,this.refs=a1,this.updater=n||r1}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function o1(){}o1.prototype=Zi.prototype;function ff(e,t,n){this.props=e,this.context=t,this.refs=a1,this.updater=n||r1}var pf=ff.prototype=new o1;pf.constructor=ff;i1(pf,Zi.prototype);pf.isPureReactComponent=!0;var fh=Array.isArray,s1=Object.prototype.hasOwnProperty,hf={current:null},l1={key:!0,ref:!0,__self:!0,__source:!0};function c1(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)s1.call(t,r)&&!l1.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:So,type:e,key:a,ref:o,props:i,_owner:hf.current}}function $2(e,t){return{$$typeof:So,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mf(e){return typeof e=="object"&&e!==null&&e.$$typeof===So}function U2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ph=/\/+/g;function Cc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?U2(""+e.key):t.toString(36)}function ds(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case So:case z2:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Cc(o,0):r,fh(i)?(n="",e!=null&&(n=e.replace(ph,"$&/")+"/"),ds(i,t,n,"",function(d){return d})):i!=null&&(mf(i)&&(i=$2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",fh(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Cc(a,s);o+=ds(a,t,n,l,i)}else if(l=B2(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Cc(a,s++),o+=ds(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Io(e,t,n){if(e==null)return e;var r=[],i=0;return ds(e,r,"","",function(a){return t.call(n,a,i++)}),r}function H2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},us={transition:null},q2={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:us,ReactCurrentOwner:hf};function d1(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Io,forEach:function(e,t,n){Io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Io(e,function(){t++}),t},toArray:function(e){return Io(e,function(t){return t})||[]},only:function(e){if(!mf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Zi;ae.Fragment=L2;ae.Profiler=O2;ae.PureComponent=ff;ae.StrictMode=M2;ae.Suspense=N2;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q2;ae.act=d1;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=i1({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=hf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)s1.call(t,l)&&!l1.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:So,type:e.type,key:i,ref:a,props:r,_owner:o}};ae.createContext=function(e){return e={$$typeof:I2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:R2,_context:e},e.Consumer=e};ae.createElement=c1;ae.createFactory=function(e){var t=c1.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:D2,render:e}};ae.isValidElement=mf;ae.lazy=function(e){return{$$typeof:F2,_payload:{_status:-1,_result:e},_init:H2}};ae.memo=function(e,t){return{$$typeof:V2,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=us.transition;us.transition={};try{e()}finally{us.transition=t}};ae.unstable_act=d1;ae.useCallback=function(e,t){return gt.current.useCallback(e,t)};ae.useContext=function(e){return gt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return gt.current.useEffect(e,t)};ae.useId=function(){return gt.current.useId()};ae.useImperativeHandle=function(e,t,n){return gt.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return gt.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return gt.current.useReducer(e,t,n)};ae.useRef=function(e){return gt.current.useRef(e)};ae.useState=function(e){return gt.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return gt.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return gt.current.useTransition()};ae.version="18.3.1";n1.exports=ae;var j=n1.exports;const te=ei(j),W2=_2({__proto__:null,default:te},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y2=j,K2=Symbol.for("react.element"),X2=Symbol.for("react.fragment"),Q2=Object.prototype.hasOwnProperty,J2=Y2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z2={key:!0,ref:!0,__self:!0,__source:!0};function u1(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Q2.call(t,r)&&!Z2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:K2,type:e,key:a,ref:o,props:i,_owner:J2.current}}Gl.Fragment=X2;Gl.jsx=u1;Gl.jsxs=u1;t1.exports=Gl;var c=t1.exports,f1={exports:{}},Mt={},p1={exports:{}},h1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,V){var $=M.length;M.push(V);e:for(;0<$;){var X=$-1>>>1,ee=M[X];if(0<i(ee,V))M[X]=V,M[$]=ee,$=X;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var V=M[0],$=M.pop();if($!==V){M[0]=$;e:for(var X=0,ee=M.length,be=ee>>>1;X<be;){var me=2*(X+1)-1,Te=M[me],pe=me+1,de=M[pe];if(0>i(Te,$))pe<ee&&0>i(de,Te)?(M[X]=de,M[pe]=$,X=pe):(M[X]=Te,M[me]=$,X=me);else if(pe<ee&&0>i(de,$))M[X]=de,M[pe]=$,X=pe;else break e}}return V}function i(M,V){var $=M.sortIndex-V.sortIndex;return $!==0?$:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],d=[],u=1,f=null,p=3,v=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var V=n(d);V!==null;){if(V.callback===null)r(d);else if(V.startTime<=M)r(d),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(d)}}function b(M){if(y=!1,m(M),!g)if(n(l)!==null)g=!0,Z(S);else{var V=n(d);V!==null&&K(b,V.startTime-M)}}function S(M,V){g=!1,y&&(y=!1,x(A),A=-1),v=!0;var $=p;try{for(m(V),f=n(l);f!==null&&(!(f.expirationTime>V)||M&&!P());){var X=f.callback;if(typeof X=="function"){f.callback=null,p=f.priorityLevel;var ee=X(f.expirationTime<=V);V=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&r(l),m(V)}else r(l);f=n(l)}if(f!==null)var be=!0;else{var me=n(d);me!==null&&K(b,me.startTime-V),be=!1}return be}finally{f=null,p=$,v=!1}}var C=!1,T=null,A=-1,G=5,E=-1;function P(){return!(e.unstable_now()-E<G)}function z(){if(T!==null){var M=e.unstable_now();E=M;var V=!0;try{V=T(!0,M)}finally{V?I():(C=!1,T=null)}}else C=!1}var I;if(typeof h=="function")I=function(){h(z)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,q=D.port2;D.port1.onmessage=z,I=function(){q.postMessage(null)}}else I=function(){w(z,0)};function Z(M){T=M,C||(C=!0,I())}function K(M,V){A=w(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Z(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var $=p;p=V;try{return M()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=p;p=M;try{return V()}finally{p=$}},e.unstable_scheduleCallback=function(M,V,$){var X=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?X+$:X):$=X,M){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=$+ee,M={id:u++,callback:V,priorityLevel:M,startTime:$,expirationTime:ee,sortIndex:-1},$>X?(M.sortIndex=$,t(d,M),n(l)===null&&M===n(d)&&(y?(x(A),A=-1):y=!0,K(b,$-X))):(M.sortIndex=ee,t(l,M),g||v||(g=!0,Z(S))),M},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(M){var V=p;return function(){var $=p;p=V;try{return M.apply(this,arguments)}finally{p=$}}}})(h1);p1.exports=h1;var eb=p1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tb=j,zt=eb;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m1=new Set,Ka={};function ti(e,t){Di(e,t),Di(e+"Capture",t)}function Di(e,t){for(Ka[e]=t,e=0;e<t.length;e++)m1.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,nb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hh={},mh={};function rb(e){return Gd.call(mh,e)?!0:Gd.call(hh,e)?!1:nb.test(e)?mh[e]=!0:(hh[e]=!0,!1)}function ib(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ab(e,t,n,r){if(t===null||typeof t>"u"||ib(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function vt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var gf=/[\-:]([a-z])/g;function vf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gf,vf);nt[t]=new vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gf,vf);nt[t]=new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gf,vf);nt[t]=new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new vt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function xf(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ab(t,n,i,r)&&(n=null),r||i===null?rb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qn=tb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),ui=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),yf=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),g1=Symbol.for("react.provider"),v1=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),x1=Symbol.for("react.offscreen"),gh=Symbol.iterator;function fa(e){return e===null||typeof e!="object"?null:(e=gh&&e[gh]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,kc;function Ta(e){if(kc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kc=t&&t[1]||""}return`
`+kc+e}var Tc=!1;function Ac(e,t){if(!e||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ta(e):""}function ob(e){switch(e.tag){case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return e=Ac(e.type,!1),e;case 11:return e=Ac(e.type.render,!1),e;case 1:return e=Ac(e.type,!0),e;default:return""}}function Md(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fi:return"Fragment";case ui:return"Portal";case _d:return"Profiler";case yf:return"StrictMode";case zd:return"Suspense";case Ld:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case v1:return(e.displayName||"Context")+".Consumer";case g1:return(e._context.displayName||"Context")+".Provider";case wf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bf:return t=e.displayName||null,t!==null?t:Md(e.type)||"Memo";case Jn:t=e._payload,e=e._init;try{return Md(e(t))}catch{}}return null}function sb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Md(t);case 8:return t===yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function y1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lb(e){var t=y1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function No(e){e._valueTracker||(e._valueTracker=lb(e))}function w1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=y1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Is(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Od(e,t){var n=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function vh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function b1(e,t){t=t.checked,t!=null&&xf(e,"checked",t,!1)}function Rd(e,t){b1(e,t);var n=gr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Id(e,t.type,n):t.hasOwnProperty("defaultValue")&&Id(e,t.type,gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Id(e,t,n){(t!=="number"||Is(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Aa=Array.isArray;function Pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Dd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Aa(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gr(n)}}function S1(e,t){var n=gr(t.value),r=gr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function j1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?j1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vo,C1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cb=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(e){cb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),La[t]=La[e]})});function k1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||La.hasOwnProperty(e)&&La[e]?(""+t).trim():t+"px"}function T1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=k1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var db=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vd(e,t){if(t){if(db[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Fd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $d=null,Gi=null,_i=null;function bh(e){if(e=ko(e)){if(typeof $d!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Ol(t),$d(e.stateNode,e.type,t))}}function A1(e){Gi?_i?_i.push(e):_i=[e]:Gi=e}function E1(){if(Gi){var e=Gi,t=_i;if(_i=Gi=null,bh(e),t)for(e=0;e<t.length;e++)bh(t[e])}}function P1(e,t){return e(t)}function G1(){}var Ec=!1;function _1(e,t,n){if(Ec)return e(t,n);Ec=!0;try{return P1(e,t,n)}finally{Ec=!1,(Gi!==null||_i!==null)&&(G1(),E1())}}function Qa(e,t){var n=e.stateNode;if(n===null)return null;var r=Ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Ud=!1;if(Fn)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){Ud=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{Ud=!1}function ub(e,t,n,r,i,a,o,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Ma=!1,Ds=null,Ns=!1,Hd=null,fb={onError:function(e){Ma=!0,Ds=e}};function pb(e,t,n,r,i,a,o,s,l){Ma=!1,Ds=null,ub.apply(fb,arguments)}function hb(e,t,n,r,i,a,o,s,l){if(pb.apply(this,arguments),Ma){if(Ma){var d=Ds;Ma=!1,Ds=null}else throw Error(F(198));Ns||(Ns=!0,Hd=d)}}function ni(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function z1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sh(e){if(ni(e)!==e)throw Error(F(188))}function mb(e){var t=e.alternate;if(!t){if(t=ni(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Sh(i),e;if(a===r)return Sh(i),t;a=a.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function L1(e){return e=mb(e),e!==null?M1(e):null}function M1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=M1(e);if(t!==null)return t;e=e.sibling}return null}var O1=zt.unstable_scheduleCallback,jh=zt.unstable_cancelCallback,gb=zt.unstable_shouldYield,vb=zt.unstable_requestPaint,Re=zt.unstable_now,xb=zt.unstable_getCurrentPriorityLevel,jf=zt.unstable_ImmediatePriority,R1=zt.unstable_UserBlockingPriority,Vs=zt.unstable_NormalPriority,yb=zt.unstable_LowPriority,I1=zt.unstable_IdlePriority,_l=null,xn=null;function wb(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(_l,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:jb,bb=Math.log,Sb=Math.LN2;function jb(e){return e>>>=0,e===0?32:31-(bb(e)/Sb|0)|0}var Fo=64,Bo=4194304;function Ea(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Ea(s):(a&=o,a!==0&&(r=Ea(a)))}else o=n&~i,o!==0?r=Ea(o):a!==0&&(r=Ea(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),i=1<<n,r|=e[n],t&=~i;return r}function Cb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-en(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Cb(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function qd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function D1(){var e=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),e}function Pc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function Tb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-en(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Cf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-en(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function N1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var V1,kf,F1,B1,$1,Wd=!1,$o=[],or=null,sr=null,lr=null,Ja=new Map,Za=new Map,er=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ch(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ja.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(t.pointerId)}}function ha(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ko(t),t!==null&&kf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Eb(e,t,n,r,i){switch(t){case"focusin":return or=ha(or,e,t,n,r,i),!0;case"dragenter":return sr=ha(sr,e,t,n,r,i),!0;case"mouseover":return lr=ha(lr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ja.set(a,ha(Ja.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Za.set(a,ha(Za.get(a)||null,e,t,n,r,i)),!0}return!1}function U1(e){var t=Mr(e.target);if(t!==null){var n=ni(t);if(n!==null){if(t=n.tag,t===13){if(t=z1(n),t!==null){e.blockedOn=t,$1(e.priority,function(){F1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bd=r,n.target.dispatchEvent(r),Bd=null}else return t=ko(n),t!==null&&kf(t),e.blockedOn=n,!1;t.shift()}return!0}function kh(e,t,n){fs(e)&&n.delete(t)}function Pb(){Wd=!1,or!==null&&fs(or)&&(or=null),sr!==null&&fs(sr)&&(sr=null),lr!==null&&fs(lr)&&(lr=null),Ja.forEach(kh),Za.forEach(kh)}function ma(e,t){e.blockedOn===t&&(e.blockedOn=null,Wd||(Wd=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,Pb)))}function eo(e){function t(i){return ma(i,e)}if(0<$o.length){ma($o[0],e);for(var n=1;n<$o.length;n++){var r=$o[n];r.blockedOn===e&&(r.blockedOn=null)}}for(or!==null&&ma(or,e),sr!==null&&ma(sr,e),lr!==null&&ma(lr,e),Ja.forEach(t),Za.forEach(t),n=0;n<er.length;n++)r=er[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)U1(n),n.blockedOn===null&&er.shift()}var zi=qn.ReactCurrentBatchConfig,Bs=!0;function Gb(e,t,n,r){var i=fe,a=zi.transition;zi.transition=null;try{fe=1,Tf(e,t,n,r)}finally{fe=i,zi.transition=a}}function _b(e,t,n,r){var i=fe,a=zi.transition;zi.transition=null;try{fe=4,Tf(e,t,n,r)}finally{fe=i,zi.transition=a}}function Tf(e,t,n,r){if(Bs){var i=Yd(e,t,n,r);if(i===null)Nc(e,t,r,$s,n),Ch(e,r);else if(Eb(i,e,t,n,r))r.stopPropagation();else if(Ch(e,r),t&4&&-1<Ab.indexOf(e)){for(;i!==null;){var a=ko(i);if(a!==null&&V1(a),a=Yd(e,t,n,r),a===null&&Nc(e,t,r,$s,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Nc(e,t,r,null,n)}}var $s=null;function Yd(e,t,n,r){if($s=null,e=Sf(r),e=Mr(e),e!==null)if(t=ni(e),t===null)e=null;else if(n=t.tag,n===13){if(e=z1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $s=e,null}function H1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xb()){case jf:return 1;case R1:return 4;case Vs:case yb:return 16;case I1:return 536870912;default:return 16}default:return 16}}var nr=null,Af=null,ps=null;function q1(){if(ps)return ps;var e,t=Af,n=t.length,r,i="value"in nr?nr.value:nr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ps=i.slice(e,1<r?1-r:void 0)}function hs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function Th(){return!1}function Ot(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Uo:Th,this.isPropagationStopped=Th,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=Ot(ea),Co=_e({},ea,{view:0,detail:0}),zb=Ot(Co),Gc,_c,ga,zl=_e({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ga&&(ga&&e.type==="mousemove"?(Gc=e.screenX-ga.screenX,_c=e.screenY-ga.screenY):_c=Gc=0,ga=e),Gc)},movementY:function(e){return"movementY"in e?e.movementY:_c}}),Ah=Ot(zl),Lb=_e({},zl,{dataTransfer:0}),Mb=Ot(Lb),Ob=_e({},Co,{relatedTarget:0}),zc=Ot(Ob),Rb=_e({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Ib=Ot(Rb),Db=_e({},ea,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nb=Ot(Db),Vb=_e({},ea,{data:0}),Eh=Ot(Vb),Fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$b={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ub(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$b[e])?!!t[e]:!1}function Pf(){return Ub}var Hb=_e({},Co,{key:function(e){if(e.key){var t=Fb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qb=Ot(Hb),Wb=_e({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=Ot(Wb),Yb=_e({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),Kb=Ot(Yb),Xb=_e({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qb=Ot(Xb),Jb=_e({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zb=Ot(Jb),e4=[9,13,27,32],Gf=Fn&&"CompositionEvent"in window,Oa=null;Fn&&"documentMode"in document&&(Oa=document.documentMode);var t4=Fn&&"TextEvent"in window&&!Oa,W1=Fn&&(!Gf||Oa&&8<Oa&&11>=Oa),Gh=" ",_h=!1;function Y1(e,t){switch(e){case"keyup":return e4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pi=!1;function n4(e,t){switch(e){case"compositionend":return K1(t);case"keypress":return t.which!==32?null:(_h=!0,Gh);case"textInput":return e=t.data,e===Gh&&_h?null:e;default:return null}}function r4(e,t){if(pi)return e==="compositionend"||!Gf&&Y1(e,t)?(e=q1(),ps=Af=nr=null,pi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return W1&&t.locale!=="ko"?null:t.data;default:return null}}var i4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i4[e.type]:t==="textarea"}function X1(e,t,n,r){A1(r),t=Us(t,"onChange"),0<t.length&&(n=new Ef("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ra=null,to=null;function a4(e){sv(e,0)}function Ll(e){var t=gi(e);if(w1(t))return e}function o4(e,t){if(e==="change")return t}var Q1=!1;if(Fn){var Lc;if(Fn){var Mc="oninput"in document;if(!Mc){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),Mc=typeof Lh.oninput=="function"}Lc=Mc}else Lc=!1;Q1=Lc&&(!document.documentMode||9<document.documentMode)}function Mh(){Ra&&(Ra.detachEvent("onpropertychange",J1),to=Ra=null)}function J1(e){if(e.propertyName==="value"&&Ll(to)){var t=[];X1(t,to,e,Sf(e)),_1(a4,t)}}function s4(e,t,n){e==="focusin"?(Mh(),Ra=t,to=n,Ra.attachEvent("onpropertychange",J1)):e==="focusout"&&Mh()}function l4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(to)}function c4(e,t){if(e==="click")return Ll(t)}function d4(e,t){if(e==="input"||e==="change")return Ll(t)}function u4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:u4;function no(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gd.call(t,i)||!rn(e[i],t[i]))return!1}return!0}function Oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rh(e,t){var n=Oh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function Z1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Z1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ev(){for(var e=window,t=Is();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Is(e.document)}return t}function _f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function f4(e){var t=ev(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Z1(n.ownerDocument.documentElement,n)){if(r!==null&&_f(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Rh(n,a);var o=Rh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p4=Fn&&"documentMode"in document&&11>=document.documentMode,hi=null,Kd=null,Ia=null,Xd=!1;function Ih(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xd||hi==null||hi!==Is(r)||(r=hi,"selectionStart"in r&&_f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ia&&no(Ia,r)||(Ia=r,r=Us(Kd,"onSelect"),0<r.length&&(t=new Ef("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hi)))}function Ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mi={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},Oc={},tv={};Fn&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Ml(e){if(Oc[e])return Oc[e];if(!mi[e])return e;var t=mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tv)return Oc[e]=t[n];return e}var nv=Ml("animationend"),rv=Ml("animationiteration"),iv=Ml("animationstart"),av=Ml("transitionend"),ov=new Map,Dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(e,t){ov.set(e,t),ti(t,[e])}for(var Rc=0;Rc<Dh.length;Rc++){var Ic=Dh[Rc],h4=Ic.toLowerCase(),m4=Ic[0].toUpperCase()+Ic.slice(1);wr(h4,"on"+m4)}wr(nv,"onAnimationEnd");wr(rv,"onAnimationIteration");wr(iv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(av,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g4=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function Nh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hb(r,t,void 0,e),e.currentTarget=null}function sv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Nh(i,s,d),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,d=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Nh(i,s,d),a=l}}}if(Ns)throw e=Hd,Ns=!1,Hd=null,e}function ve(e,t){var n=t[tu];n===void 0&&(n=t[tu]=new Set);var r=e+"__bubble";n.has(r)||(lv(t,e,2,!1),n.add(r))}function Dc(e,t,n){var r=0;t&&(r|=4),lv(n,e,r,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[qo]){e[qo]=!0,m1.forEach(function(n){n!=="selectionchange"&&(g4.has(n)||Dc(n,!1,e),Dc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,Dc("selectionchange",!1,t))}}function lv(e,t,n,r){switch(H1(t)){case 1:var i=Gb;break;case 4:i=_b;break;default:i=Tf}n=i.bind(null,t,n,e),i=void 0,!Ud||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Nc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Mr(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}_1(function(){var d=a,u=Sf(n),f=[];e:{var p=ov.get(e);if(p!==void 0){var v=Ef,g=e;switch(e){case"keypress":if(hs(n)===0)break e;case"keydown":case"keyup":v=qb;break;case"focusin":g="focus",v=zc;break;case"focusout":g="blur",v=zc;break;case"beforeblur":case"afterblur":v=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Kb;break;case nv:case rv:case iv:v=Ib;break;case av:v=Qb;break;case"scroll":v=zb;break;case"wheel":v=Zb;break;case"copy":case"cut":case"paste":v=Nb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ph}var y=(t&4)!==0,w=!y&&e==="scroll",x=y?p!==null?p+"Capture":null:p;y=[];for(var h=d,m;h!==null;){m=h;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,x!==null&&(b=Qa(h,x),b!=null&&y.push(io(h,b,m)))),w)break;h=h.return}0<y.length&&(p=new v(p,g,null,n,u),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Bd&&(g=n.relatedTarget||n.fromElement)&&(Mr(g)||g[Bn]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=d,g=g?Mr(g):null,g!==null&&(w=ni(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=d),v!==g)){if(y=Ah,b="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ph,b="onPointerLeave",x="onPointerEnter",h="pointer"),w=v==null?p:gi(v),m=g==null?p:gi(g),p=new y(b,h+"leave",v,n,u),p.target=w,p.relatedTarget=m,b=null,Mr(u)===d&&(y=new y(x,h+"enter",g,n,u),y.target=m,y.relatedTarget=w,b=y),w=b,v&&g)t:{for(y=v,x=g,h=0,m=y;m;m=si(m))h++;for(m=0,b=x;b;b=si(b))m++;for(;0<h-m;)y=si(y),h--;for(;0<m-h;)x=si(x),m--;for(;h--;){if(y===x||x!==null&&y===x.alternate)break t;y=si(y),x=si(x)}y=null}else y=null;v!==null&&Vh(f,p,v,y,!1),g!==null&&w!==null&&Vh(f,w,g,y,!0)}}e:{if(p=d?gi(d):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=o4;else if(zh(p))if(Q1)S=d4;else{S=l4;var C=s4}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=c4);if(S&&(S=S(e,d))){X1(f,S,n,u);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Id(p,"number",p.value)}switch(C=d?gi(d):window,e){case"focusin":(zh(C)||C.contentEditable==="true")&&(hi=C,Kd=d,Ia=null);break;case"focusout":Ia=Kd=hi=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,Ih(f,n,u);break;case"selectionchange":if(p4)break;case"keydown":case"keyup":Ih(f,n,u)}var T;if(Gf)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else pi?Y1(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(W1&&n.locale!=="ko"&&(pi||A!=="onCompositionStart"?A==="onCompositionEnd"&&pi&&(T=q1()):(nr=u,Af="value"in nr?nr.value:nr.textContent,pi=!0)),C=Us(d,A),0<C.length&&(A=new Eh(A,e,null,n,u),f.push({event:A,listeners:C}),T?A.data=T:(T=K1(n),T!==null&&(A.data=T)))),(T=t4?n4(e,n):r4(e,n))&&(d=Us(d,"onBeforeInput"),0<d.length&&(u=new Eh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:d}),u.data=T))}sv(f,t)})}function io(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Us(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Qa(e,n),a!=null&&r.unshift(io(e,a,i)),a=Qa(e,t),a!=null&&r.push(io(e,a,i))),e=e.return}return r}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vh(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,d=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&d!==null&&(s=d,i?(l=Qa(n,a),l!=null&&o.unshift(io(n,l,s))):i||(l=Qa(n,a),l!=null&&o.push(io(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var v4=/\r\n?/g,x4=/\u0000|\uFFFD/g;function Fh(e){return(typeof e=="string"?e:""+e).replace(v4,`
`).replace(x4,"")}function Wo(e,t,n){if(t=Fh(t),Fh(e)!==t&&n)throw Error(F(425))}function Hs(){}var Qd=null,Jd=null;function Zd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,y4=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,w4=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(e){return Bh.resolve(null).then(e).catch(b4)}:eu;function b4(e){setTimeout(function(){throw e})}function Vc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);eo(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ta=Math.random().toString(36).slice(2),mn="__reactFiber$"+ta,ao="__reactProps$"+ta,Bn="__reactContainer$"+ta,tu="__reactEvents$"+ta,S4="__reactListeners$"+ta,j4="__reactHandles$"+ta;function Mr(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$h(e);e!==null;){if(n=e[mn])return n;e=$h(e)}return t}e=n,n=e.parentNode}return null}function ko(e){return e=e[mn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Ol(e){return e[ao]||null}var nu=[],vi=-1;function br(e){return{current:e}}function we(e){0>vi||(e.current=nu[vi],nu[vi]=null,vi--)}function ge(e,t){vi++,nu[vi]=e.current,e.current=t}var vr={},ut=br(vr),bt=br(!1),qr=vr;function Ni(e,t){var n=e.type.contextTypes;if(!n)return vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function qs(){we(bt),we(ut)}function Uh(e,t,n){if(ut.current!==vr)throw Error(F(168));ge(ut,t),ge(bt,n)}function cv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,sb(e)||"Unknown",i));return _e({},n,r)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,qr=ut.current,ge(ut,e),ge(bt,bt.current),!0}function Hh(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=cv(e,t,qr),r.__reactInternalMemoizedMergedChildContext=e,we(bt),we(ut),ge(ut,e)):we(bt),ge(bt,n)}var _n=null,Rl=!1,Fc=!1;function dv(e){_n===null?_n=[e]:_n.push(e)}function C4(e){Rl=!0,dv(e)}function Sr(){if(!Fc&&_n!==null){Fc=!0;var e=0,t=fe;try{var n=_n;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_n=null,Rl=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),O1(jf,Sr),i}finally{fe=t,Fc=!1}}return null}var xi=[],yi=0,Ys=null,Ks=0,Nt=[],Vt=0,Wr=null,zn=1,Ln="";function Gr(e,t){xi[yi++]=Ks,xi[yi++]=Ys,Ys=e,Ks=t}function uv(e,t,n){Nt[Vt++]=zn,Nt[Vt++]=Ln,Nt[Vt++]=Wr,Wr=e;var r=zn;e=Ln;var i=32-en(r)-1;r&=~(1<<i),n+=1;var a=32-en(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-en(t)+i|n<<i|r,Ln=a+e}else zn=1<<a|n<<i|r,Ln=e}function zf(e){e.return!==null&&(Gr(e,1),uv(e,1,0))}function Lf(e){for(;e===Ys;)Ys=xi[--yi],xi[yi]=null,Ks=xi[--yi],xi[yi]=null;for(;e===Wr;)Wr=Nt[--Vt],Nt[Vt]=null,Ln=Nt[--Vt],Nt[Vt]=null,zn=Nt[--Vt],Nt[Vt]=null}var Gt=null,Pt=null,Ce=!1,Jt=null;function fv(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,Pt=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wr!==null?{id:zn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Gt=e,Pt=null,!0):!1;default:return!1}}function ru(e){return(e.mode&1)!==0&&(e.flags&128)===0}function iu(e){if(Ce){var t=Pt;if(t){var n=t;if(!qh(e,t)){if(ru(e))throw Error(F(418));t=cr(n.nextSibling);var r=Gt;t&&qh(e,t)?fv(r,n):(e.flags=e.flags&-4097|2,Ce=!1,Gt=e)}}else{if(ru(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ce=!1,Gt=e}}}function Wh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function Yo(e){if(e!==Gt)return!1;if(!Ce)return Wh(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zd(e.type,e.memoizedProps)),t&&(t=Pt)){if(ru(e))throw pv(),Error(F(418));for(;t;)fv(e,t),t=cr(t.nextSibling)}if(Wh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=Gt?cr(e.stateNode.nextSibling):null;return!0}function pv(){for(var e=Pt;e;)e=cr(e.nextSibling)}function Vi(){Pt=Gt=null,Ce=!1}function Mf(e){Jt===null?Jt=[e]:Jt.push(e)}var k4=qn.ReactCurrentBatchConfig;function va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yh(e){var t=e._init;return t(e._payload)}function hv(e){function t(x,h){if(e){var m=x.deletions;m===null?(x.deletions=[h],x.flags|=16):m.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function r(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=pr(x,h),x.index=0,x.sibling=null,x}function a(x,h,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<h?(x.flags|=2,h):m):(x.flags|=2,h)):(x.flags|=1048576,h)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function s(x,h,m,b){return h===null||h.tag!==6?(h=Yc(m,x.mode,b),h.return=x,h):(h=i(h,m),h.return=x,h)}function l(x,h,m,b){var S=m.type;return S===fi?u(x,h,m.props.children,b,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Jn&&Yh(S)===h.type)?(b=i(h,m.props),b.ref=va(x,h,m),b.return=x,b):(b=bs(m.type,m.key,m.props,null,x.mode,b),b.ref=va(x,h,m),b.return=x,b)}function d(x,h,m,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Kc(m,x.mode,b),h.return=x,h):(h=i(h,m.children||[]),h.return=x,h)}function u(x,h,m,b,S){return h===null||h.tag!==7?(h=Fr(m,x.mode,b,S),h.return=x,h):(h=i(h,m),h.return=x,h)}function f(x,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yc(""+h,x.mode,m),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Do:return m=bs(h.type,h.key,h.props,null,x.mode,m),m.ref=va(x,null,h),m.return=x,m;case ui:return h=Kc(h,x.mode,m),h.return=x,h;case Jn:var b=h._init;return f(x,b(h._payload),m)}if(Aa(h)||fa(h))return h=Fr(h,x.mode,m,null),h.return=x,h;Ko(x,h)}return null}function p(x,h,m,b){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(x,h,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:return m.key===S?l(x,h,m,b):null;case ui:return m.key===S?d(x,h,m,b):null;case Jn:return S=m._init,p(x,h,S(m._payload),b)}if(Aa(m)||fa(m))return S!==null?null:u(x,h,m,b,null);Ko(x,m)}return null}function v(x,h,m,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(m)||null,s(h,x,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Do:return x=x.get(b.key===null?m:b.key)||null,l(h,x,b,S);case ui:return x=x.get(b.key===null?m:b.key)||null,d(h,x,b,S);case Jn:var C=b._init;return v(x,h,m,C(b._payload),S)}if(Aa(b)||fa(b))return x=x.get(m)||null,u(h,x,b,S,null);Ko(h,b)}return null}function g(x,h,m,b){for(var S=null,C=null,T=h,A=h=0,G=null;T!==null&&A<m.length;A++){T.index>A?(G=T,T=null):G=T.sibling;var E=p(x,T,m[A],b);if(E===null){T===null&&(T=G);break}e&&T&&E.alternate===null&&t(x,T),h=a(E,h,A),C===null?S=E:C.sibling=E,C=E,T=G}if(A===m.length)return n(x,T),Ce&&Gr(x,A),S;if(T===null){for(;A<m.length;A++)T=f(x,m[A],b),T!==null&&(h=a(T,h,A),C===null?S=T:C.sibling=T,C=T);return Ce&&Gr(x,A),S}for(T=r(x,T);A<m.length;A++)G=v(T,x,A,m[A],b),G!==null&&(e&&G.alternate!==null&&T.delete(G.key===null?A:G.key),h=a(G,h,A),C===null?S=G:C.sibling=G,C=G);return e&&T.forEach(function(P){return t(x,P)}),Ce&&Gr(x,A),S}function y(x,h,m,b){var S=fa(m);if(typeof S!="function")throw Error(F(150));if(m=S.call(m),m==null)throw Error(F(151));for(var C=S=null,T=h,A=h=0,G=null,E=m.next();T!==null&&!E.done;A++,E=m.next()){T.index>A?(G=T,T=null):G=T.sibling;var P=p(x,T,E.value,b);if(P===null){T===null&&(T=G);break}e&&T&&P.alternate===null&&t(x,T),h=a(P,h,A),C===null?S=P:C.sibling=P,C=P,T=G}if(E.done)return n(x,T),Ce&&Gr(x,A),S;if(T===null){for(;!E.done;A++,E=m.next())E=f(x,E.value,b),E!==null&&(h=a(E,h,A),C===null?S=E:C.sibling=E,C=E);return Ce&&Gr(x,A),S}for(T=r(x,T);!E.done;A++,E=m.next())E=v(T,x,A,E.value,b),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?A:E.key),h=a(E,h,A),C===null?S=E:C.sibling=E,C=E);return e&&T.forEach(function(z){return t(x,z)}),Ce&&Gr(x,A),S}function w(x,h,m,b){if(typeof m=="object"&&m!==null&&m.type===fi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:e:{for(var S=m.key,C=h;C!==null;){if(C.key===S){if(S=m.type,S===fi){if(C.tag===7){n(x,C.sibling),h=i(C,m.props.children),h.return=x,x=h;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Jn&&Yh(S)===C.type){n(x,C.sibling),h=i(C,m.props),h.ref=va(x,C,m),h.return=x,x=h;break e}n(x,C);break}else t(x,C);C=C.sibling}m.type===fi?(h=Fr(m.props.children,x.mode,b,m.key),h.return=x,x=h):(b=bs(m.type,m.key,m.props,null,x.mode,b),b.ref=va(x,h,m),b.return=x,x=b)}return o(x);case ui:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(x,h.sibling),h=i(h,m.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=Kc(m,x.mode,b),h.return=x,x=h}return o(x);case Jn:return C=m._init,w(x,h,C(m._payload),b)}if(Aa(m))return g(x,h,m,b);if(fa(m))return y(x,h,m,b);Ko(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(x,h.sibling),h=i(h,m),h.return=x,x=h):(n(x,h),h=Yc(m,x.mode,b),h.return=x,x=h),o(x)):n(x,h)}return w}var Fi=hv(!0),mv=hv(!1),Xs=br(null),Qs=null,wi=null,Of=null;function Rf(){Of=wi=Qs=null}function If(e){var t=Xs.current;we(Xs),e._currentValue=t}function au(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Li(e,t){Qs=e,Of=wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function $t(e){var t=e._currentValue;if(Of!==e)if(e={context:e,memoizedValue:t,next:null},wi===null){if(Qs===null)throw Error(F(308));wi=e,Qs.dependencies={lanes:0,firstContext:e}}else wi=wi.next=e;return t}var Or=null;function Df(e){Or===null?Or=[e]:Or.push(e)}function gv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Df(t)):(n.next=i.next,i.next=n),t.interleaved=n,$n(e,r)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zn=!1;function Nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$n(e,n)}return i=r.interleaved,i===null?(t.next=t,Df(r)):(t.next=i.next,i.next=t),r.interleaved=t,$n(e,n)}function ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cf(e,n)}}function Kh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Js(e,t,n,r){var i=e.updateQueue;Zn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,d=l.next;l.next=null,o===null?a=d:o.next=d,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,u=d=l=null,s=a;do{var p=s.lane,v=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(p=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(v,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(v,f,p):g,p==null)break e;f=_e({},f,p);break e;case 2:Zn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=v,l=f):u=u.next=v,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Kr|=o,e.lanes=o,e.memoizedState=f}}function Xh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var To={},yn=br(To),oo=br(To),so=br(To);function Rr(e){if(e===To)throw Error(F(174));return e}function Vf(e,t){switch(ge(so,t),ge(oo,e),ge(yn,To),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nd(t,e)}we(yn),ge(yn,t)}function Bi(){we(yn),we(oo),we(so)}function xv(e){Rr(so.current);var t=Rr(yn.current),n=Nd(t,e.type);t!==n&&(ge(oo,e),ge(yn,n))}function Ff(e){oo.current===e&&(we(yn),we(oo))}var Ae=br(0);function Zs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bc=[];function Bf(){for(var e=0;e<Bc.length;e++)Bc[e]._workInProgressVersionPrimary=null;Bc.length=0}var gs=qn.ReactCurrentDispatcher,$c=qn.ReactCurrentBatchConfig,Yr=0,Ge=null,$e=null,Ye=null,el=!1,Da=!1,lo=0,T4=0;function rt(){throw Error(F(321))}function $f(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function Uf(e,t,n,r,i,a){if(Yr=a,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gs.current=e===null||e.memoizedState===null?G4:_4,e=n(r,i),Da){a=0;do{if(Da=!1,lo=0,25<=a)throw Error(F(301));a+=1,Ye=$e=null,t.updateQueue=null,gs.current=z4,e=n(r,i)}while(Da)}if(gs.current=tl,t=$e!==null&&$e.next!==null,Yr=0,Ye=$e=Ge=null,el=!1,t)throw Error(F(300));return e}function Hf(){var e=lo!==0;return lo=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ge.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ut(){if($e===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Ye===null?Ge.memoizedState:Ye.next;if(t!==null)Ye=t,$e=e;else{if(e===null)throw Error(F(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ye===null?Ge.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function co(e,t){return typeof t=="function"?t(e):t}function Uc(e){var t=Ut(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=$e,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,d=a;do{var u=d.lane;if((Yr&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,Ge.lanes|=u,Kr|=u}d=d.next}while(d!==null&&d!==a);l===null?o=r:l.next=s,rn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ge.lanes|=a,Kr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hc(e){var t=Ut(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);rn(a,t.memoizedState)||(wt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function yv(){}function wv(e,t){var n=Ge,r=Ut(),i=t(),a=!rn(r.memoizedState,i);if(a&&(r.memoizedState=i,wt=!0),r=r.queue,qf(jv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,uo(9,Sv.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(F(349));Yr&30||bv(n,t,i)}return i}function bv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sv(e,t,n,r){t.value=n,t.getSnapshot=r,Cv(t)&&kv(e)}function jv(e,t,n){return n(function(){Cv(t)&&kv(e)})}function Cv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function kv(e){var t=$n(e,1);t!==null&&tn(t,e,1,-1)}function Qh(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=e,e=e.dispatch=P4.bind(null,Ge,e),[t.memoizedState,e]}function uo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tv(){return Ut().memoizedState}function vs(e,t,n,r){var i=pn();Ge.flags|=e,i.memoizedState=uo(1|t,n,void 0,r===void 0?null:r)}function Il(e,t,n,r){var i=Ut();r=r===void 0?null:r;var a=void 0;if($e!==null){var o=$e.memoizedState;if(a=o.destroy,r!==null&&$f(r,o.deps)){i.memoizedState=uo(t,n,a,r);return}}Ge.flags|=e,i.memoizedState=uo(1|t,n,a,r)}function Jh(e,t){return vs(8390656,8,e,t)}function qf(e,t){return Il(2048,8,e,t)}function Av(e,t){return Il(4,2,e,t)}function Ev(e,t){return Il(4,4,e,t)}function Pv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gv(e,t,n){return n=n!=null?n.concat([e]):null,Il(4,4,Pv.bind(null,t,e),n)}function Wf(){}function _v(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$f(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zv(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$f(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lv(e,t,n){return Yr&21?(rn(n,t)||(n=D1(),Ge.lanes|=n,Kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function A4(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=$c.transition;$c.transition={};try{e(!1),t()}finally{fe=n,$c.transition=r}}function Mv(){return Ut().memoizedState}function E4(e,t,n){var r=fr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ov(e))Rv(t,n);else if(n=gv(e,t,n,r),n!==null){var i=ht();tn(n,e,r,i),Iv(n,t,r)}}function P4(e,t,n){var r=fr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ov(e))Rv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,rn(s,o)){var l=t.interleaved;l===null?(i.next=i,Df(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=gv(e,t,i,r),n!==null&&(i=ht(),tn(n,e,r,i),Iv(n,t,r))}}function Ov(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function Rv(e,t){Da=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cf(e,n)}}var tl={readContext:$t,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},G4={readContext:$t,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:$t,useEffect:Jh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vs(4194308,4,Pv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return vs(4,2,e,t)},useMemo:function(e,t){var n=pn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=E4.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:Qh,useDebugValue:Wf,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=Qh(!1),t=e[0];return e=A4.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=pn();if(Ce){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Xe===null)throw Error(F(349));Yr&30||bv(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Jh(jv.bind(null,r,a,e),[e]),r.flags|=2048,uo(9,Sv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=pn(),t=Xe.identifierPrefix;if(Ce){var n=Ln,r=zn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=T4++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_4={readContext:$t,useCallback:_v,useContext:$t,useEffect:qf,useImperativeHandle:Gv,useInsertionEffect:Av,useLayoutEffect:Ev,useMemo:zv,useReducer:Uc,useRef:Tv,useState:function(){return Uc(co)},useDebugValue:Wf,useDeferredValue:function(e){var t=Ut();return Lv(t,$e.memoizedState,e)},useTransition:function(){var e=Uc(co)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:yv,useSyncExternalStore:wv,useId:Mv,unstable_isNewReconciler:!1},z4={readContext:$t,useCallback:_v,useContext:$t,useEffect:qf,useImperativeHandle:Gv,useInsertionEffect:Av,useLayoutEffect:Ev,useMemo:zv,useReducer:Hc,useRef:Tv,useState:function(){return Hc(co)},useDebugValue:Wf,useDeferredValue:function(e){var t=Ut();return $e===null?t.memoizedState=e:Lv(t,$e.memoizedState,e)},useTransition:function(){var e=Hc(co)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:yv,useSyncExternalStore:wv,useId:Mv,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ou(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dl={isMounted:function(e){return(e=e._reactInternals)?ni(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ht(),i=fr(e),a=On(r,i);a.payload=t,n!=null&&(a.callback=n),t=dr(e,a,i),t!==null&&(tn(t,e,i,r),ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ht(),i=fr(e),a=On(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=dr(e,a,i),t!==null&&(tn(t,e,i,r),ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ht(),r=fr(e),i=On(n,r);i.tag=2,t!=null&&(i.callback=t),t=dr(e,i,r),t!==null&&(tn(t,e,r,n),ms(t,e,r))}};function Zh(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!no(n,r)||!no(i,a):!0}function Dv(e,t,n){var r=!1,i=vr,a=t.contextType;return typeof a=="object"&&a!==null?a=$t(a):(i=St(t)?qr:ut.current,r=t.contextTypes,a=(r=r!=null)?Ni(e,i):vr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function e0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dl.enqueueReplaceState(t,t.state,null)}function su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nf(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=$t(a):(a=St(t)?qr:ut.current,i.context=Ni(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ou(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Dl.enqueueReplaceState(i,i.state,null),Js(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $i(e,t){try{var n="",r=t;do n+=ob(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function qc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function lu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var L4=typeof WeakMap=="function"?WeakMap:Map;function Nv(e,t,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,xu=r),lu(e,t)},n}function Vv(e,t,n){n=On(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){lu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){lu(e,t),typeof r!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function t0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new L4;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=W4.bind(null,e,t,n),t.then(e,e))}function n0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function r0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=On(-1,1),t.tag=2,dr(n,t,1))),n.lanes|=1),e)}var M4=qn.ReactCurrentOwner,wt=!1;function ft(e,t,n,r){t.child=e===null?mv(t,null,n,r):Fi(t,e.child,n,r)}function i0(e,t,n,r,i){n=n.render;var a=t.ref;return Li(t,i),r=Uf(e,t,n,r,a,i),n=Hf(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Un(e,t,i)):(Ce&&n&&zf(t),t.flags|=1,ft(e,t,r,i),t.child)}function a0(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!tp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Fv(e,t,a,r,i)):(e=bs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(o,r)&&e.ref===t.ref)return Un(e,t,i)}return t.flags|=1,e=pr(a,r),e.ref=t.ref,e.return=t,t.child=e}function Fv(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(no(a,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Un(e,t,i)}return cu(e,t,n,r,i)}function Bv(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Si,At),At|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(Si,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ge(Si,At),At|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ge(Si,At),At|=r;return ft(e,t,i,n),t.child}function $v(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,n,r,i){var a=St(n)?qr:ut.current;return a=Ni(t,a),Li(t,i),n=Uf(e,t,n,r,a,i),r=Hf(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Un(e,t,i)):(Ce&&r&&zf(t),t.flags|=1,ft(e,t,n,i),t.child)}function o0(e,t,n,r,i){if(St(n)){var a=!0;Ws(t)}else a=!1;if(Li(t,i),t.stateNode===null)xs(e,t),Dv(t,n,r),su(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=$t(d):(d=St(n)?qr:ut.current,d=Ni(t,d));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==d)&&e0(t,o,r,d),Zn=!1;var p=t.memoizedState;o.state=p,Js(t,r,o,i),l=t.memoizedState,s!==r||p!==l||bt.current||Zn?(typeof u=="function"&&(ou(t,n,u,r),l=t.memoizedState),(s=Zn||Zh(t,n,s,r,p,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vv(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Xt(t.type,s),o.props=d,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$t(l):(l=St(n)?qr:ut.current,l=Ni(t,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==l)&&e0(t,o,r,l),Zn=!1,p=t.memoizedState,o.state=p,Js(t,r,o,i);var g=t.memoizedState;s!==f||p!==g||bt.current||Zn?(typeof v=="function"&&(ou(t,n,v,r),g=t.memoizedState),(d=Zn||Zh(t,n,d,r,p,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return du(e,t,n,r,a,i)}function du(e,t,n,r,i,a){$v(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Hh(t,n,!1),Un(e,t,a);r=t.stateNode,M4.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fi(t,e.child,null,a),t.child=Fi(t,null,s,a)):ft(e,t,s,a),t.memoizedState=r.state,i&&Hh(t,n,!0),t.child}function Uv(e){var t=e.stateNode;t.pendingContext?Uh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uh(e,t.context,!1),Vf(e,t.containerInfo)}function s0(e,t,n,r,i){return Vi(),Mf(i),t.flags|=256,ft(e,t,n,r),t.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function fu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hv(e,t,n){var r=t.pendingProps,i=Ae.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(Ae,i&1),e===null)return iu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Fl(o,r,0,null),e=Fr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=fu(n),t.memoizedState=uu,e):Yf(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return O4(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=pr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=pr(s,a):(a=Fr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=uu,r}return a=e.child,e=a.sibling,r=pr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yf(e,t){return t=Fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xo(e,t,n,r){return r!==null&&Mf(r),Fi(t,e.child,null,n),e=Yf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function O4(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=qc(Error(F(422))),Xo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Fl({mode:"visible",children:r.children},i,0,null),a=Fr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Fi(t,e.child,null,o),t.child.memoizedState=fu(o),t.memoizedState=uu,a);if(!(t.mode&1))return Xo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(F(419)),r=qc(a,r,void 0),Xo(e,t,o,r)}if(s=(o&e.childLanes)!==0,wt||s){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,$n(e,i),tn(r,e,i,-1))}return ep(),r=qc(Error(F(421))),Xo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Y4.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Pt=cr(i.nextSibling),Gt=t,Ce=!0,Jt=null,e!==null&&(Nt[Vt++]=zn,Nt[Vt++]=Ln,Nt[Vt++]=Wr,zn=e.id,Ln=e.overflow,Wr=t),t=Yf(t,r.children),t.flags|=4096,t)}function l0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),au(e.return,t,n)}function Wc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function qv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ft(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l0(e,n,t);else if(e.tag===19)l0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wc(t,!0,n,null,a);break;case"together":Wc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=pr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function R4(e,t,n){switch(t.tag){case 3:Uv(t),Vi();break;case 5:xv(t);break;case 1:St(t.type)&&Ws(t);break;case 4:Vf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(Xs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?Hv(e,t,n):(ge(Ae,Ae.current&1),e=Un(e,t,n),e!==null?e.sibling:null);ge(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Bv(e,t,n)}return Un(e,t,n)}var Wv,pu,Yv,Kv;Wv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pu=function(){};Yv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rr(yn.current);var a=null;switch(n){case"input":i=Od(e,i),r=Od(e,r),a=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),a=[];break;case"textarea":i=Dd(e,i),r=Dd(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hs)}Vd(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ka.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var l=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&ve("scroll",e),a||s===l||(a=[])):(a=a||[]).push(d,l))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Kv=function(e,t,n,r){n!==r&&(t.flags|=4)};function xa(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function I4(e,t,n){var r=t.pendingProps;switch(Lf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return St(t.type)&&qs(),it(t),null;case 3:return r=t.stateNode,Bi(),we(bt),we(ut),Bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&(bu(Jt),Jt=null))),pu(e,t),it(t),null;case 5:Ff(t);var i=Rr(so.current);if(n=t.type,e!==null&&t.stateNode!=null)Yv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return it(t),null}if(e=Rr(yn.current),Yo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[mn]=t,r[ao]=a,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Pa.length;i++)ve(Pa[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":vh(r,a),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ve("invalid",r);break;case"textarea":yh(r,a),ve("invalid",r)}Vd(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Wo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Wo(r.textContent,s,e),i=["children",""+s]):Ka.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":No(r),xh(r,a,!0);break;case"textarea":No(r),wh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Hs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=j1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[mn]=t,e[ao]=r,Wv(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fd(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pa.length;i++)ve(Pa[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":vh(e,r),i=Od(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ve("invalid",e);break;case"textarea":yh(e,r),i=Dd(e,r),ve("invalid",e);break;default:i=r}Vd(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?T1(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&C1(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xa(e,l):typeof l=="number"&&Xa(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ka.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ve("scroll",e):l!=null&&xf(e,a,l,o))}switch(n){case"input":No(e),xh(e,r,!1);break;case"textarea":No(e),wh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Pi(e,!!r.multiple,a,!1):r.defaultValue!=null&&Pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Kv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Rr(so.current),Rr(yn.current),Yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[mn]=t,(a=r.nodeValue!==n)&&(e=Gt,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=t,t.stateNode=r}return it(t),null;case 13:if(we(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Pt!==null&&t.mode&1&&!(t.flags&128))pv(),Vi(),t.flags|=98560,a=!1;else if(a=Yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[mn]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),a=!1}else Jt!==null&&(bu(Jt),Jt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ue===0&&(Ue=3):ep())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Bi(),pu(e,t),e===null&&ro(t.stateNode.containerInfo),it(t),null;case 10:return If(t.type._context),it(t),null;case 17:return St(t.type)&&qs(),it(t),null;case 19:if(we(Ae),a=t.memoizedState,a===null)return it(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)xa(a,!1);else{if(Ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zs(e),o!==null){for(t.flags|=128,xa(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(Ae,Ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&Re()>Ui&&(t.flags|=128,r=!0,xa(a,!1),t.lanes=4194304)}else{if(!r)if(e=Zs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ce)return it(t),null}else 2*Re()-a.renderingStartTime>Ui&&n!==1073741824&&(t.flags|=128,r=!0,xa(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Re(),t.sibling=null,n=Ae.current,ge(Ae,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Zf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function D4(e,t){switch(Lf(t),t.tag){case 1:return St(t.type)&&qs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(),we(bt),we(ut),Bf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ff(t),null;case 13:if(we(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ae),null;case 4:return Bi(),null;case 10:return If(t.type._context),null;case 22:case 23:return Zf(),null;case 24:return null;default:return null}}var Qo=!1,ot=!1,N4=typeof WeakSet=="function"?WeakSet:Set,H=null;function bi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function hu(e,t,n){try{n()}catch(r){ze(e,t,r)}}var c0=!1;function V4(e,t){if(Qd=Bs,e=ev(),_f(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,d=0,u=0,f=e,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++d===i&&(s=o),p===a&&++u===r&&(l=o),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jd={focusedElem:e,selectionRange:n},Bs=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:Xt(t.type,y),w);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){ze(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return g=c0,c0=!1,g}function Na(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&hu(t,n,a)}i=i.next}while(i!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xv(e){var t=e.alternate;t!==null&&(e.alternate=null,Xv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[ao],delete t[tu],delete t[S4],delete t[j4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qv(e){return e.tag===5||e.tag===3||e.tag===4}function d0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hs));else if(r!==4&&(e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var Ze=null,Qt=!1;function Yn(e,t,n){for(n=n.child;n!==null;)Jv(e,t,n),n=n.sibling}function Jv(e,t,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:ot||bi(n,t);case 6:var r=Ze,i=Qt;Ze=null,Yn(e,t,n),Ze=r,Qt=i,Ze!==null&&(Qt?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Qt?(e=Ze,n=n.stateNode,e.nodeType===8?Vc(e.parentNode,n):e.nodeType===1&&Vc(e,n),eo(e)):Vc(Ze,n.stateNode));break;case 4:r=Ze,i=Qt,Ze=n.stateNode.containerInfo,Qt=!0,Yn(e,t,n),Ze=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&hu(n,t,o),i=i.next}while(i!==r)}Yn(e,t,n);break;case 1:if(!ot&&(bi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ze(n,t,s)}Yn(e,t,n);break;case 21:Yn(e,t,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Yn(e,t,n),ot=r):Yn(e,t,n);break;default:Yn(e,t,n)}}function u0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new N4),t.forEach(function(r){var i=K4.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ze=s.stateNode,Qt=!1;break e;case 3:Ze=s.stateNode.containerInfo,Qt=!0;break e;case 4:Ze=s.stateNode.containerInfo,Qt=!0;break e}s=s.return}if(Ze===null)throw Error(F(160));Jv(a,o,i),Ze=null,Qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){ze(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zv(t,e),t=t.sibling}function Zv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),cn(e),r&4){try{Na(3,e,e.return),Nl(3,e)}catch(y){ze(e,e.return,y)}try{Na(5,e,e.return)}catch(y){ze(e,e.return,y)}}break;case 1:Yt(t,e),cn(e),r&512&&n!==null&&bi(n,n.return);break;case 5:if(Yt(t,e),cn(e),r&512&&n!==null&&bi(n,n.return),e.flags&32){var i=e.stateNode;try{Xa(i,"")}catch(y){ze(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&b1(i,a),Fd(s,o);var d=Fd(s,a);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?T1(i,f):u==="dangerouslySetInnerHTML"?C1(i,f):u==="children"?Xa(i,f):xf(i,u,f,d)}switch(s){case"input":Rd(i,a);break;case"textarea":S1(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Pi(i,!!a.multiple,v,!1):p!==!!a.multiple&&(a.defaultValue!=null?Pi(i,!!a.multiple,a.defaultValue,!0):Pi(i,!!a.multiple,a.multiple?[]:"",!1))}i[ao]=a}catch(y){ze(e,e.return,y)}}break;case 6:if(Yt(t,e),cn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){ze(e,e.return,y)}}break;case 3:if(Yt(t,e),cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(y){ze(e,e.return,y)}break;case 4:Yt(t,e),cn(e);break;case 13:Yt(t,e),cn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Qf=Re())),r&4&&u0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ot=(d=ot)||u,Yt(t,e),ot=d):Yt(t,e),cn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(f=H=u;H!==null;){switch(p=H,v=p.child,p.tag){case 0:case 11:case 14:case 15:Na(4,p,p.return);break;case 1:bi(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ze(r,n,y)}}break;case 5:bi(p,p.return);break;case 22:if(p.memoizedState!==null){p0(f);continue}}v!==null?(v.return=p,H=v):p0(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=k1("display",o))}catch(y){ze(e,e.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){ze(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yt(t,e),cn(e),r&4&&u0(e);break;case 21:break;default:Yt(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xa(i,""),r.flags&=-33);var a=d0(e);vu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=d0(e);gu(e,s,o);break;default:throw Error(F(161))}}catch(l){ze(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function F4(e,t,n){H=e,ex(e)}function ex(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Qo;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ot;s=Qo;var d=ot;if(Qo=o,(ot=l)&&!d)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?h0(i):l!==null?(l.return=o,H=l):h0(i);for(;a!==null;)H=a,ex(a),a=a.sibling;H=i,Qo=s,ot=d}f0(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,H=a):f0(e)}}function f0(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ot||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Xh(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&eo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ot||t.flags&512&&mu(t)}catch(p){ze(t,t.return,p)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function p0(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function h0(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(l){ze(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ze(t,i,l)}}var a=t.return;try{mu(t)}catch(l){ze(t,a,l)}break;case 5:var o=t.return;try{mu(t)}catch(l){ze(t,o,l)}}}catch(l){ze(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var B4=Math.ceil,nl=qn.ReactCurrentDispatcher,Kf=qn.ReactCurrentOwner,Bt=qn.ReactCurrentBatchConfig,le=0,Xe=null,Ve=null,et=0,At=0,Si=br(0),Ue=0,fo=null,Kr=0,Vl=0,Xf=0,Va=null,yt=null,Qf=0,Ui=1/0,Pn=null,rl=!1,xu=null,ur=null,Jo=!1,rr=null,il=0,Fa=0,yu=null,ys=-1,ws=0;function ht(){return le&6?Re():ys!==-1?ys:ys=Re()}function fr(e){return e.mode&1?le&2&&et!==0?et&-et:k4.transition!==null?(ws===0&&(ws=D1()),ws):(e=fe,e!==0||(e=window.event,e=e===void 0?16:H1(e.type)),e):1}function tn(e,t,n,r){if(50<Fa)throw Fa=0,yu=null,Error(F(185));jo(e,n,r),(!(le&2)||e!==Xe)&&(e===Xe&&(!(le&2)&&(Vl|=n),Ue===4&&tr(e,et)),jt(e,r),n===1&&le===0&&!(t.mode&1)&&(Ui=Re()+500,Rl&&Sr()))}function jt(e,t){var n=e.callbackNode;kb(e,t);var r=Fs(e,e===Xe?et:0);if(r===0)n!==null&&jh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jh(n),t===1)e.tag===0?C4(m0.bind(null,e)):dv(m0.bind(null,e)),w4(function(){!(le&6)&&Sr()}),n=null;else{switch(N1(r)){case 1:n=jf;break;case 4:n=R1;break;case 16:n=Vs;break;case 536870912:n=I1;break;default:n=Vs}n=lx(n,tx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tx(e,t){if(ys=-1,ws=0,le&6)throw Error(F(327));var n=e.callbackNode;if(Mi()&&e.callbackNode!==n)return null;var r=Fs(e,e===Xe?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=al(e,r);else{t=r;var i=le;le|=2;var a=rx();(Xe!==e||et!==t)&&(Pn=null,Ui=Re()+500,Vr(e,t));do try{H4();break}catch(s){nx(e,s)}while(!0);Rf(),nl.current=a,le=i,Ve!==null?t=0:(Xe=null,et=0,t=Ue)}if(t!==0){if(t===2&&(i=qd(e),i!==0&&(r=i,t=wu(e,i))),t===1)throw n=fo,Vr(e,0),tr(e,r),jt(e,Re()),n;if(t===6)tr(e,r);else{if(i=e.current.alternate,!(r&30)&&!$4(i)&&(t=al(e,r),t===2&&(a=qd(e),a!==0&&(r=a,t=wu(e,a))),t===1))throw n=fo,Vr(e,0),tr(e,r),jt(e,Re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:_r(e,yt,Pn);break;case 3:if(tr(e,r),(r&130023424)===r&&(t=Qf+500-Re(),10<t)){if(Fs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ht(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=eu(_r.bind(null,e,yt,Pn),t);break}_r(e,yt,Pn);break;case 4:if(tr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-en(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*B4(r/1960))-r,10<r){e.timeoutHandle=eu(_r.bind(null,e,yt,Pn),r);break}_r(e,yt,Pn);break;case 5:_r(e,yt,Pn);break;default:throw Error(F(329))}}}return jt(e,Re()),e.callbackNode===n?tx.bind(null,e):null}function wu(e,t){var n=Va;return e.current.memoizedState.isDehydrated&&(Vr(e,t).flags|=256),e=al(e,t),e!==2&&(t=yt,yt=n,t!==null&&bu(t)),e}function bu(e){yt===null?yt=e:yt.push.apply(yt,e)}function $4(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!rn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tr(e,t){for(t&=~Xf,t&=~Vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function m0(e){if(le&6)throw Error(F(327));Mi();var t=Fs(e,0);if(!(t&1))return jt(e,Re()),null;var n=al(e,t);if(e.tag!==0&&n===2){var r=qd(e);r!==0&&(t=r,n=wu(e,r))}if(n===1)throw n=fo,Vr(e,0),tr(e,t),jt(e,Re()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_r(e,yt,Pn),jt(e,Re()),null}function Jf(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Ui=Re()+500,Rl&&Sr())}}function Xr(e){rr!==null&&rr.tag===0&&!(le&6)&&Mi();var t=le;le|=1;var n=Bt.transition,r=fe;try{if(Bt.transition=null,fe=1,e)return e()}finally{fe=r,Bt.transition=n,le=t,!(le&6)&&Sr()}}function Zf(){At=Si.current,we(Si)}function Vr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,y4(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qs();break;case 3:Bi(),we(bt),we(ut),Bf();break;case 5:Ff(r);break;case 4:Bi();break;case 13:we(Ae);break;case 19:we(Ae);break;case 10:If(r.type._context);break;case 22:case 23:Zf()}n=n.return}if(Xe=e,Ve=e=pr(e.current,null),et=At=t,Ue=0,fo=null,Xf=Vl=Kr=0,yt=Va=null,Or!==null){for(t=0;t<Or.length;t++)if(n=Or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Or=null}return e}function nx(e,t){do{var n=Ve;try{if(Rf(),gs.current=tl,el){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}el=!1}if(Yr=0,Ye=$e=Ge=null,Da=!1,lo=0,Kf.current=null,n===null||n.return===null){Ue=1,fo=t,Ve=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=et,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=n0(o);if(v!==null){v.flags&=-257,r0(v,o,s,a,t),v.mode&1&&t0(a,d,t),t=v,l=d;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){t0(a,d,t),ep();break e}l=Error(F(426))}}else if(Ce&&s.mode&1){var w=n0(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),r0(w,o,s,a,t),Mf($i(l,s));break e}}a=l=$i(l,s),Ue!==4&&(Ue=2),Va===null?Va=[a]:Va.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=Nv(a,l,t);Kh(a,x);break e;case 1:s=l;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ur===null||!ur.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Vv(a,s,t);Kh(a,b);break e}}a=a.return}while(a!==null)}ax(n)}catch(S){t=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function rx(){var e=nl.current;return nl.current=tl,e===null?tl:e}function ep(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Xe===null||!(Kr&268435455)&&!(Vl&268435455)||tr(Xe,et)}function al(e,t){var n=le;le|=2;var r=rx();(Xe!==e||et!==t)&&(Pn=null,Vr(e,t));do try{U4();break}catch(i){nx(e,i)}while(!0);if(Rf(),le=n,nl.current=r,Ve!==null)throw Error(F(261));return Xe=null,et=0,Ue}function U4(){for(;Ve!==null;)ix(Ve)}function H4(){for(;Ve!==null&&!gb();)ix(Ve)}function ix(e){var t=sx(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?ax(e):Ve=t,Kf.current=null}function ax(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=D4(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ve=null;return}}else if(n=I4(n,t,At),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);Ue===0&&(Ue=5)}function _r(e,t,n){var r=fe,i=Bt.transition;try{Bt.transition=null,fe=1,q4(e,t,n,r)}finally{Bt.transition=i,fe=r}return null}function q4(e,t,n,r){do Mi();while(rr!==null);if(le&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Tb(e,a),e===Xe&&(Ve=Xe=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,lx(Vs,function(){return Mi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Bt.transition,Bt.transition=null;var o=fe;fe=1;var s=le;le|=4,Kf.current=null,V4(e,n),Zv(n,e),f4(Jd),Bs=!!Qd,Jd=Qd=null,e.current=n,F4(n),vb(),le=s,fe=o,Bt.transition=a}else e.current=n;if(Jo&&(Jo=!1,rr=e,il=i),a=e.pendingLanes,a===0&&(ur=null),wb(n.stateNode),jt(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rl)throw rl=!1,e=xu,xu=null,e;return il&1&&e.tag!==0&&Mi(),a=e.pendingLanes,a&1?e===yu?Fa++:(Fa=0,yu=e):Fa=0,Sr(),null}function Mi(){if(rr!==null){var e=N1(il),t=Bt.transition,n=fe;try{if(Bt.transition=null,fe=16>e?16:e,rr===null)var r=!1;else{if(e=rr,rr=null,il=0,le&6)throw Error(F(331));var i=le;for(le|=4,H=e.current;H!==null;){var a=H,o=a.child;if(H.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:Na(8,u,a)}var f=u.child;if(f!==null)f.return=u,H=f;else for(;H!==null;){u=H;var p=u.sibling,v=u.return;if(Xv(u),u===d){H=null;break}if(p!==null){p.return=v,H=p;break}H=v}}}var g=a.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}H=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,H=o;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Na(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,H=x;break e}H=a.return}}var h=e.current;for(H=h;H!==null;){o=H;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,H=m;else e:for(o=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Nl(9,s)}}catch(S){ze(s,s.return,S)}if(s===o){H=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,H=b;break e}H=s.return}}if(le=i,Sr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(_l,e)}catch{}r=!0}return r}finally{fe=n,Bt.transition=t}}return!1}function g0(e,t,n){t=$i(n,t),t=Nv(e,t,1),e=dr(e,t,1),t=ht(),e!==null&&(jo(e,1,t),jt(e,t))}function ze(e,t,n){if(e.tag===3)g0(e,e,n);else for(;t!==null;){if(t.tag===3){g0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ur===null||!ur.has(r))){e=$i(n,e),e=Vv(t,e,1),t=dr(t,e,1),e=ht(),t!==null&&(jo(t,1,e),jt(t,e));break}}t=t.return}}function W4(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(et&n)===n&&(Ue===4||Ue===3&&(et&130023424)===et&&500>Re()-Qf?Vr(e,0):Xf|=n),jt(e,t)}function ox(e,t){t===0&&(e.mode&1?(t=Bo,Bo<<=1,!(Bo&130023424)&&(Bo=4194304)):t=1);var n=ht();e=$n(e,t),e!==null&&(jo(e,t,n),jt(e,n))}function Y4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ox(e,n)}function K4(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),ox(e,n)}var sx;sx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,R4(e,t,n);wt=!!(e.flags&131072)}else wt=!1,Ce&&t.flags&1048576&&uv(t,Ks,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xs(e,t),e=t.pendingProps;var i=Ni(t,ut.current);Li(t,n),i=Uf(null,t,r,e,i,n);var a=Hf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(a=!0,Ws(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nf(t),i.updater=Dl,t.stateNode=i,i._reactInternals=t,su(t,r,e,n),t=du(null,t,r,!0,a,n)):(t.tag=0,Ce&&a&&zf(t),ft(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Q4(r),e=Xt(r,e),i){case 0:t=cu(null,t,r,e,n);break e;case 1:t=o0(null,t,r,e,n);break e;case 11:t=i0(null,t,r,e,n);break e;case 14:t=a0(null,t,r,Xt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),o0(e,t,r,i,n);case 3:e:{if(Uv(t),e===null)throw Error(F(387));r=t.pendingProps,a=t.memoizedState,i=a.element,vv(e,t),Js(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=$i(Error(F(423)),t),t=s0(e,t,r,n,i);break e}else if(r!==i){i=$i(Error(F(424)),t),t=s0(e,t,r,n,i);break e}else for(Pt=cr(t.stateNode.containerInfo.firstChild),Gt=t,Ce=!0,Jt=null,n=mv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===i){t=Un(e,t,n);break e}ft(e,t,r,n)}t=t.child}return t;case 5:return xv(t),e===null&&iu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Zd(r,i)?o=null:a!==null&&Zd(r,a)&&(t.flags|=32),$v(e,t),ft(e,t,o,n),t.child;case 6:return e===null&&iu(t),null;case 13:return Hv(e,t,n);case 4:return Vf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fi(t,null,r,n):ft(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),i0(e,t,r,i,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ge(Xs,r._currentValue),r._currentValue=o,a!==null)if(rn(a.value,o)){if(a.children===i.children&&!bt.current){t=Un(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=On(-1,n&-n),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),au(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(F(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),au(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ft(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Li(t,n),i=$t(i),r=r(i),t.flags|=1,ft(e,t,r,n),t.child;case 14:return r=t.type,i=Xt(r,t.pendingProps),i=Xt(r.type,i),a0(e,t,r,i,n);case 15:return Fv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),xs(e,t),t.tag=1,St(r)?(e=!0,Ws(t)):e=!1,Li(t,n),Dv(t,r,i),su(t,r,i,n),du(null,t,r,!0,e,n);case 19:return qv(e,t,n);case 22:return Bv(e,t,n)}throw Error(F(156,t.tag))};function lx(e,t){return O1(e,t)}function X4(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new X4(e,t,n,r)}function tp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q4(e){if(typeof e=="function")return tp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wf)return 11;if(e===bf)return 14}return 2}function pr(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")tp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fi:return Fr(n.children,i,a,t);case yf:o=8,i|=8;break;case _d:return e=Ft(12,n,t,i|2),e.elementType=_d,e.lanes=a,e;case zd:return e=Ft(13,n,t,i),e.elementType=zd,e.lanes=a,e;case Ld:return e=Ft(19,n,t,i),e.elementType=Ld,e.lanes=a,e;case x1:return Fl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g1:o=10;break e;case v1:o=9;break e;case wf:o=11;break e;case bf:o=14;break e;case Jn:o=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Ft(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Fr(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function Fl(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=x1,e.lanes=n,e.stateNode={isHidden:!1},e}function Yc(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Kc(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function J4(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function np(e,t,n,r,i,a,o,s,l){return e=new J4(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(a),e}function Z4(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cx(e){if(!e)return vr;e=e._reactInternals;e:{if(ni(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(St(n))return cv(e,n,t)}return t}function dx(e,t,n,r,i,a,o,s,l){return e=np(n,r,!0,e,i,a,o,s,l),e.context=cx(null),n=e.current,r=ht(),i=fr(n),a=On(r,i),a.callback=t??null,dr(n,a,i),e.current.lanes=i,jo(e,i,r),jt(e,r),e}function Bl(e,t,n,r){var i=t.current,a=ht(),o=fr(i);return n=cx(n),t.context===null?t.context=n:t.pendingContext=n,t=On(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dr(i,t,o),e!==null&&(tn(e,i,o,a),ms(e,i,o)),o}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function v0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rp(e,t){v0(e,t),(e=e.alternate)&&v0(e,t)}function e5(){return null}var ux=typeof reportError=="function"?reportError:function(e){console.error(e)};function ip(e){this._internalRoot=e}$l.prototype.render=ip.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Bl(e,t,null,null)};$l.prototype.unmount=ip.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xr(function(){Bl(null,e,null,null)}),t[Bn]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=B1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<er.length&&t!==0&&t<er[n].priority;n++);er.splice(n,0,e),n===0&&U1(e)}};function ap(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function x0(){}function t5(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=ol(o);a.call(d)}}var o=dx(t,r,e,0,null,!1,!1,"",x0);return e._reactRootContainer=o,e[Bn]=o.current,ro(e.nodeType===8?e.parentNode:e),Xr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=ol(l);s.call(d)}}var l=np(e,0,!1,null,null,!1,!1,"",x0);return e._reactRootContainer=l,e[Bn]=l.current,ro(e.nodeType===8?e.parentNode:e),Xr(function(){Bl(t,l,n,r)}),l}function Hl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=ol(o);s.call(l)}}Bl(t,o,e,i)}else o=t5(n,t,e,i,r);return ol(o)}V1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ea(t.pendingLanes);n!==0&&(Cf(t,n|1),jt(t,Re()),!(le&6)&&(Ui=Re()+500,Sr()))}break;case 13:Xr(function(){var r=$n(e,1);if(r!==null){var i=ht();tn(r,e,1,i)}}),rp(e,1)}};kf=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=ht();tn(t,e,134217728,n)}rp(e,134217728)}};F1=function(e){if(e.tag===13){var t=fr(e),n=$n(e,t);if(n!==null){var r=ht();tn(n,e,t,r)}rp(e,t)}};B1=function(){return fe};$1=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};$d=function(e,t,n){switch(t){case"input":if(Rd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ol(r);if(!i)throw Error(F(90));w1(r),Rd(r,i)}}}break;case"textarea":S1(e,n);break;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}};P1=Jf;G1=Xr;var n5={usingClientEntryPoint:!1,Events:[ko,gi,Ol,A1,E1,Jf]},ya={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r5={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=L1(e),e===null?null:e.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||e5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{_l=Zo.inject(r5),xn=Zo}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n5;Mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ap(t))throw Error(F(200));return Z4(e,t,null,n)};Mt.createRoot=function(e,t){if(!ap(e))throw Error(F(299));var n=!1,r="",i=ux;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=np(e,1,!1,null,null,n,!1,r,i),e[Bn]=t.current,ro(e.nodeType===8?e.parentNode:e),new ip(t)};Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=L1(t),e=e===null?null:e.stateNode,e};Mt.flushSync=function(e){return Xr(e)};Mt.hydrate=function(e,t,n){if(!Ul(t))throw Error(F(200));return Hl(null,e,t,!0,n)};Mt.hydrateRoot=function(e,t,n){if(!ap(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=ux;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dx(t,null,e,1,n??null,i,!1,a,o),e[Bn]=t.current,ro(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $l(t)};Mt.render=function(e,t,n){if(!Ul(t))throw Error(F(200));return Hl(null,e,t,!1,n)};Mt.unmountComponentAtNode=function(e){if(!Ul(e))throw Error(F(40));return e._reactRootContainer?(Xr(function(){Hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Jf;Mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ul(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Hl(e,t,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fx)}catch(e){console.error(e)}}fx(),f1.exports=Mt;var i5=f1.exports,px,y0=i5;px=y0.createRoot,y0.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}var ir;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ir||(ir={}));const w0="popstate";function a5(e){e===void 0&&(e={});function t(i,a){let{pathname:o="/",search:s="",hash:l=""}=ri(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Su("",{pathname:o,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let o=i.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=i.location.href,d=l.indexOf("#");s=d===-1?l:l.slice(0,d)}return s+"#"+(typeof a=="string"?a:sl(a))}function r(i,a){op(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return s5(t,n,r,e)}function Fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function op(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function o5(){return Math.random().toString(36).substr(2,8)}function b0(e,t){return{usr:e.state,key:e.key,idx:t}}function Su(e,t,n,r){return n===void 0&&(n=null),po({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ri(t):t,{state:n,key:t&&t.key||r||o5()})}function sl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ri(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function s5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=ir.Pop,l=null,d=u();d==null&&(d=0,o.replaceState(po({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function f(){s=ir.Pop;let w=u(),x=w==null?null:w-d;d=w,l&&l({action:s,location:y.location,delta:x})}function p(w,x){s=ir.Push;let h=Su(y.location,w,x);n&&n(h,w),d=u()+1;let m=b0(h,d),b=y.createHref(h);try{o.pushState(m,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(b)}a&&l&&l({action:s,location:y.location,delta:1})}function v(w,x){s=ir.Replace;let h=Su(y.location,w,x);n&&n(h,w),d=u();let m=b0(h,d),b=y.createHref(h);o.replaceState(m,"",b),a&&l&&l({action:s,location:y.location,delta:0})}function g(w){let x=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:sl(w);return h=h.replace(/ $/,"%20"),Fe(x,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,x)}let y={get action(){return s},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(w0,f),l=w,()=>{i.removeEventListener(w0,f),l=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let x=g(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:v,go(w){return o.go(w)}};return y}var S0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(S0||(S0={}));function l5(e,t,n){return n===void 0&&(n="/"),c5(e,t,n,!1)}function c5(e,t,n,r){let i=typeof t=="string"?ri(t):t,a=sp(i.pathname||"/",n);if(a==null)return null;let o=hx(e);d5(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let d=b5(a);s=y5(o[l],d,r)}return s}function hx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=hr([r,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(Fe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),hx(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:v5(d,a.index),routesMeta:u})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of mx(a.path))i(a,o,l)}),t}function mx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=mx(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function d5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:x5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const u5=/^:[\w-]+$/,f5=3,p5=2,h5=1,m5=10,g5=-2,j0=e=>e==="*";function v5(e,t){let n=e.split("/"),r=n.length;return n.some(j0)&&(r+=g5),t&&(r+=p5),n.filter(i=>!j0(i)).reduce((i,a)=>i+(u5.test(a)?f5:a===""?h5:m5),r)}function x5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function y5(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let l=r[s],d=s===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=C0({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},u),p=l.route;if(!f&&d&&n&&!r[r.length-1].route.index&&(f=C0({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:hr([a,f.pathname]),pathnameBase:k5(hr([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=hr([a,f.pathnameBase]))}return o}function C0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=w5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((d,u,f)=>{let{paramName:p,isOptional:v}=u;if(p==="*"){let y=s[f]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const g=s[f];return v&&!g?d[p]=void 0:d[p]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function w5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),op(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function b5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return op(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function S5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ri(e):e;return{pathname:n?n.startsWith("/")?n:j5(n,t):t,search:T5(r),hash:A5(i)}}function j5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function C5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gx(e,t){let n=C5(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vx(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ri(e):(i=po({},e),Fe(!i.pathname||!i.pathname.includes("?"),Xc("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Xc("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Xc("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=S5(i,s),d=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||u)&&(l.pathname+="/"),l}const hr=e=>e.join("/").replace(/\/\/+/g,"/"),k5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),T5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,A5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function E5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const xx=["post","put","patch","delete"];new Set(xx);const P5=["get",...xx];new Set(P5);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}const lp=j.createContext(null),G5=j.createContext(null),ii=j.createContext(null),ql=j.createContext(null),ai=j.createContext({outlet:null,matches:[],isDataRoute:!1}),yx=j.createContext(null);function _5(e,t){let{relative:n}=t===void 0?{}:t;Ao()||Fe(!1);let{basename:r,navigator:i}=j.useContext(ii),{hash:a,pathname:o,search:s}=bx(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hr([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Ao(){return j.useContext(ql)!=null}function Sn(){return Ao()||Fe(!1),j.useContext(ql).location}function wx(e){j.useContext(ii).static||j.useLayoutEffect(e)}function Wl(){let{isDataRoute:e}=j.useContext(ai);return e?U5():z5()}function z5(){Ao()||Fe(!1);let e=j.useContext(lp),{basename:t,future:n,navigator:r}=j.useContext(ii),{matches:i}=j.useContext(ai),{pathname:a}=Sn(),o=JSON.stringify(gx(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return wx(()=>{s.current=!0}),j.useCallback(function(d,u){if(u===void 0&&(u={}),!s.current)return;if(typeof d=="number"){r.go(d);return}let f=vx(d,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:hr([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,o,a,e])}function bx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(ii),{matches:i}=j.useContext(ai),{pathname:a}=Sn(),o=JSON.stringify(gx(i,r.v7_relativeSplatPath));return j.useMemo(()=>vx(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function L5(e,t){return M5(e,t)}function M5(e,t,n,r){Ao()||Fe(!1);let{navigator:i}=j.useContext(ii),{matches:a}=j.useContext(ai),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=Sn(),u;if(t){var f;let w=typeof t=="string"?ri(t):t;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||Fe(!1),u=w}else u=d;let p=u.pathname||"/",v=p;if(l!=="/"){let w=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=l5(e,{pathname:v}),y=N5(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:hr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:hr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,r);return t&&y?j.createElement(ql.Provider,{value:{location:ho({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ir.Pop}},y):y}function O5(){let e=$5(),t=E5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const R5=j.createElement(O5,null);class I5 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(ai.Provider,{value:this.props.routeContext},j.createElement(yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D5(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(lp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ai.Provider,{value:t},r)}function N5(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);u>=0||Fe(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=u),f.route.id){let{loaderData:p,errors:v}=n,g=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||g){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,f,p)=>{let v,g=!1,y=null,w=null;n&&(v=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||R5,l&&(d<0&&p===0?(g=!0,w=null):d===p&&(g=!0,w=f.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,p+1)),h=()=>{let m;return v?m=y:g?m=w:f.route.Component?m=j.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=u,j.createElement(D5,{match:f,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?j.createElement(I5,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:h(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):h()},null)}var Sx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sx||{}),ll=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ll||{});function V5(e){let t=j.useContext(lp);return t||Fe(!1),t}function F5(e){let t=j.useContext(G5);return t||Fe(!1),t}function B5(e){let t=j.useContext(ai);return t||Fe(!1),t}function jx(e){let t=B5(),n=t.matches[t.matches.length-1];return n.route.id||Fe(!1),n.route.id}function $5(){var e;let t=j.useContext(yx),n=F5(ll.UseRouteError),r=jx(ll.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function U5(){let{router:e}=V5(Sx.UseNavigateStable),t=jx(ll.UseNavigateStable),n=j.useRef(!1);return wx(()=>{n.current=!0}),j.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ho({fromRouteId:t},a)))},[e,t])}function fn(e){Fe(!1)}function H5(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ir.Pop,navigator:a,static:o=!1,future:s}=e;Ao()&&Fe(!1);let l=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:l,navigator:a,static:o,future:ho({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=ri(r));let{pathname:u="/",search:f="",hash:p="",state:v=null,key:g="default"}=r,y=j.useMemo(()=>{let w=sp(u,l);return w==null?null:{location:{pathname:w,search:f,hash:p,state:v,key:g},navigationType:i}},[l,u,f,p,v,g,i]);return y==null?null:j.createElement(ii.Provider,{value:d},j.createElement(ql.Provider,{children:n,value:y}))}function q5(e){let{children:t,location:n}=e;return L5(ju(t),n)}new Promise(()=>{});function ju(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let a=[...t,i];if(r.type===j.Fragment){n.push.apply(n,ju(r.props.children,a));return}r.type!==fn&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ju(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cu(){return Cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cu.apply(this,arguments)}function W5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Y5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function K5(e,t){return e.button===0&&(!t||t==="_self")&&!Y5(e)}const X5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Q5="6";try{window.__reactRouterVersion=Q5}catch{}const J5="startTransition",k0=W2[J5];function Z5(e){let{basename:t,children:n,future:r,window:i}=e,a=j.useRef();a.current==null&&(a.current=a5({window:i,v5Compat:!0}));let o=a.current,[s,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},u=j.useCallback(f=>{d&&k0?k0(()=>l(f)):l(f)},[l,d]);return j.useLayoutEffect(()=>o.listen(u),[o,u]),j.createElement(H5,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const e9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",t9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cx=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:d,preventScrollReset:u,viewTransition:f}=t,p=W5(t,X5),{basename:v}=j.useContext(ii),g,y=!1;if(typeof d=="string"&&t9.test(d)&&(g=d,e9))try{let m=new URL(window.location.href),b=d.startsWith("//")?new URL(m.protocol+d):new URL(d),S=sp(b.pathname,v);b.origin===m.origin&&S!=null?d=S+b.search+b.hash:y=!0}catch{}let w=_5(d,{relative:i}),x=n9(d,{replace:o,state:s,target:l,preventScrollReset:u,relative:i,viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||x(m)}return j.createElement("a",Cu({},p,{href:g||w,onClick:y||a?r:h,ref:n,target:l}))});var T0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(T0||(T0={}));var A0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(A0||(A0={}));function n9(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,l=Wl(),d=Sn(),u=bx(e,{relative:o});return j.useCallback(f=>{if(K5(f,n)){f.preventDefault();let p=r!==void 0?r:sl(d)===sl(u);l(e,{replace:p,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[d,l,u,r,i,n,e,a,o,s])}function r9(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function Yl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ku=e=>Array.isArray(e);function kx(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function mo(e){return typeof e=="string"||Array.isArray(e)}function E0(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function cp(e,t,n,r){if(typeof t=="function"){const[i,a]=E0(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=E0(r);t=t(n!==void 0?n:e.custom,i,a)}return t}function Kl(e,t,n){const r=e.getProps();return cp(r,t,n!==void 0?n:r.custom,e)}const dp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],up=["initial",...dp],Eo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],oi=new Set(Eo),Rn=e=>e*1e3,In=e=>e/1e3,i9={type:"spring",stiffness:500,damping:25,restSpeed:10},a9=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),o9={type:"keyframes",duration:.8},s9={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},l9=(e,{keyframes:t})=>t.length>2?o9:oi.has(e)?e.startsWith("scale")?a9(t[1]):i9:s9;function fp(e,t){return e?e[t]||e.default||e:void 0}const c9={skipAnimations:!1,useManualTiming:!1},d9=e=>e!==null;function Xl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(d9),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const tt=e=>e;function u9(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(d){a.has(d)&&(l.schedule(d),e()),d(o)}const l={schedule:(d,u=!1,f=!1)=>{const v=f&&r?t:n;return u&&a.add(d),v.has(d)||v.add(d),d},cancel:d=>{n.delete(d),a.delete(d)},process:d=>{if(o=d,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(d))}};return l}const es=["read","resolveKeyframes","update","preRender","render","postRender"],f9=40;function Tx(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=es.reduce((x,h)=>(x[h]=u9(a),x),{}),{read:s,resolveKeyframes:l,update:d,preRender:u,render:f,postRender:p}=o,v=()=>{const x=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(x-i.timestamp,f9),1),i.timestamp=x,i.isProcessing=!0,s.process(i),l.process(i),d.process(i),u.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},g=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:es.reduce((x,h)=>{const m=o[h];return x[h]=(b,S=!1,C=!1)=>(n||g(),m.schedule(b,S,C)),x},{}),cancel:x=>{for(let h=0;h<es.length;h++)o[es[h]].cancel(x)},state:i,steps:o}}const{schedule:se,cancel:an,state:He,steps:Qc}=Tx(typeof requestAnimationFrame<"u"?requestAnimationFrame:tt,!0),Ax=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,p9=1e-7,h9=12;function m9(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Ax(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>p9&&++s<h9);return o}function Po(e,t,n,r){if(e===t&&n===r)return tt;const i=a=>m9(a,0,1,e,n);return a=>a===0||a===1?a:Ax(i(a),t,r)}const Ex=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Px=e=>t=>1-e(1-t),Gx=Po(.33,1.53,.69,.99),pp=Px(Gx),_x=Ex(pp),zx=e=>(e*=2)<1?.5*pp(e):.5*(2-Math.pow(2,-10*(e-1))),hp=e=>1-Math.sin(Math.acos(e)),Lx=Px(hp),Mx=Ex(hp),Ox=e=>/^0[^.\s]+$/u.test(e);function g9(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ox(e):!0}let v9=tt,Tu=tt;const Rx=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Ix=e=>t=>typeof t=="string"&&t.startsWith(e),Dx=Ix("--"),x9=Ix("var(--"),mp=e=>x9(e)?y9.test(e.split("/*")[0].trim()):!1,y9=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,w9=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function b9(e){const t=w9.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Nx(e,t,n=1){const[r,i]=b9(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return Rx(o)?parseFloat(o):o}return mp(i)?Nx(i,t,n+1):i}const xr=(e,t,n)=>n>t?t:n<e?e:n,na={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},go={...na,transform:e=>xr(0,1,e)},ts={...na,default:1},Go=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Kn=Go("deg"),wn=Go("%"),W=Go("px"),S9=Go("vh"),j9=Go("vw"),P0={...wn,parse:e=>wn.parse(e)/100,transform:e=>wn.transform(e*100)},C9=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),G0=e=>e===na||e===W,_0=(e,t)=>parseFloat(e.split(", ")[t]),z0=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return _0(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?_0(a[1],e):0}},k9=new Set(["x","y","z"]),T9=Eo.filter(e=>!k9.has(e));function A9(e){const t=[];return T9.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Hi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:z0(4,13),y:z0(5,14)};Hi.translateX=Hi.x;Hi.translateY=Hi.y;const Vx=e=>t=>t.test(e),E9={test:e=>e==="auto",parse:e=>e},Fx=[na,W,wn,Kn,j9,S9,E9],L0=e=>Fx.find(Vx(e)),Br=new Set;let Au=!1,Eu=!1;function Bx(){if(Eu){const e=Array.from(Br).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=A9(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var s;(s=r.getValue(a))===null||s===void 0||s.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Eu=!1,Au=!1,Br.forEach(e=>e.complete()),Br.clear()}function $x(){Br.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Eu=!0)})}function P9(){$x(),Bx()}class gp{constructor(t,n,r,i,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Br.add(this),Au||(Au=!0,se.read($x),se.resolveKeyframes(Bx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Br.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Br.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ba=e=>Math.round(e*1e5)/1e5,vp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function G9(e){return e==null}const _9=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xp=(e,t)=>n=>!!(typeof n=="string"&&_9.test(n)&&n.startsWith(e)||t&&!G9(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ux=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,s]=r.match(vp);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},z9=e=>xr(0,255,e),Jc={...na,transform:e=>Math.round(z9(e))},Ir={test:xp("rgb","red"),parse:Ux("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Jc.transform(e)+", "+Jc.transform(t)+", "+Jc.transform(n)+", "+Ba(go.transform(r))+")"};function L9(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Pu={test:xp("#"),parse:L9,transform:Ir.transform},ji={test:xp("hsl","hue"),parse:Ux("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+wn.transform(Ba(t))+", "+wn.transform(Ba(n))+", "+Ba(go.transform(r))+")"},at={test:e=>Ir.test(e)||Pu.test(e)||ji.test(e),parse:e=>Ir.test(e)?Ir.parse(e):ji.test(e)?ji.parse(e):Pu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ir.transform(e):ji.transform(e)},M9=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function O9(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(vp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(M9))===null||n===void 0?void 0:n.length)||0)>0}const Hx="number",qx="color",R9="var",I9="var(",M0="${}",D9=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function vo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const s=t.replace(D9,l=>(at.test(l)?(r.color.push(a),i.push(qx),n.push(at.parse(l))):l.startsWith(I9)?(r.var.push(a),i.push(R9),n.push(l)):(r.number.push(a),i.push(Hx),n.push(parseFloat(l))),++a,M0)).split(M0);return{values:n,split:s,indexes:r,types:i}}function Wx(e){return vo(e).values}function Yx(e){const{split:t,types:n}=vo(e),r=t.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=t[o],i[o]!==void 0){const s=n[o];s===Hx?a+=Ba(i[o]):s===qx?a+=at.transform(i[o]):a+=i[o]}return a}}const N9=e=>typeof e=="number"?0:e;function V9(e){const t=Wx(e);return Yx(e)(t.map(N9))}const yr={test:O9,parse:Wx,createTransformer:Yx,getAnimatableNone:V9},F9=new Set(["brightness","contrast","saturate","opacity"]);function B9(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(vp)||[];if(!r)return e;const i=n.replace(r,"");let a=F9.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const $9=/\b([a-z-]*)\(.*?\)/gu,Gu={...yr,getAnimatableNone:e=>{const t=e.match($9);return t?t.map(B9).join(" "):e}},U9={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,backgroundPositionX:W,backgroundPositionY:W},H9={rotate:Kn,rotateX:Kn,rotateY:Kn,rotateZ:Kn,scale:ts,scaleX:ts,scaleY:ts,scaleZ:ts,skew:Kn,skewX:Kn,skewY:Kn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:go,originX:P0,originY:P0,originZ:W},O0={...na,transform:Math.round},yp={...U9,...H9,zIndex:O0,size:W,fillOpacity:go,strokeOpacity:go,numOctaves:O0},q9={...yp,color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,filter:Gu,WebkitFilter:Gu},wp=e=>q9[e];function Kx(e,t){let n=wp(e);return n!==Gu&&(n=yr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const W9=new Set(["auto","none","0"]);function Y9(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!W9.has(a)&&vo(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=Kx(n,i)}class Xx extends gp{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let d=t[l];if(typeof d=="string"&&(d=d.trim(),mp(d))){const u=Nx(d,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!C9.has(r)||t.length!==2)return;const[i,a]=t,o=L0(i),s=L0(a);if(o!==s)if(G0(o)&&G0(s))for(let l=0;l<t.length;l++){const d=t[l];typeof d=="string"&&(t[l]=parseFloat(d))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)g9(t[i])&&r.push(i);r.length&&Y9(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Hi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=Hi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,d])=>{n.getValue(l).set(d)}),this.resolveNoneKeyframes()}}function bp(e){return typeof e=="function"}let Ss;function K9(){Ss=void 0}const bn={now:()=>(Ss===void 0&&bn.set(He.isProcessing||c9.useManualTiming?He.timestamp:performance.now()),Ss),set:e=>{Ss=e,queueMicrotask(K9)}},R0=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(yr.test(e)||e==="0")&&!e.startsWith("url("));function X9(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Q9(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=R0(i,t),s=R0(a,t);return!o||!s?!1:X9(e)||(n==="spring"||bp(n))&&r}const J9=40;class Qx{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=bn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>J9?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&P9(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=bn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:o,onComplete:s,onUpdate:l,isGenerator:d}=this.options;if(!d&&!Q9(t,r,i,a))if(o)this.options.duration=0;else{l==null||l(Xl(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Sp(e,t){return t?e*(1e3/t):0}const Z9=5;function Jx(e,t,n){const r=Math.max(t-Z9,0);return Sp(n-e(r),t-r)}const Zc=.001,e8=.01,t8=10,n8=.05,r8=1;function i8({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,a,o=1-t;o=xr(n8,r8,o),e=xr(e8,t8,In(e)),o<1?(i=d=>{const u=d*o,f=u*e,p=u-n,v=_u(d,o),g=Math.exp(-f);return Zc-p/v*g},a=d=>{const f=d*o*e,p=f*n+n,v=Math.pow(o,2)*Math.pow(d,2)*e,g=Math.exp(-f),y=_u(Math.pow(d,2),o);return(-i(d)+Zc>0?-1:1)*((p-v)*g)/y}):(i=d=>{const u=Math.exp(-d*e),f=(d-n)*e+1;return-Zc+u*f},a=d=>{const u=Math.exp(-d*e),f=(n-d)*(e*e);return u*f});const s=5/e,l=o8(i,a,s);if(e=Rn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(l,2)*r;return{stiffness:d,damping:o*2*Math.sqrt(r*d),duration:e}}}const a8=12;function o8(e,t,n){let r=n;for(let i=1;i<a8;i++)r=r-e(r)/t(r);return r}function _u(e,t){return e*Math.sqrt(1-t*t)}const s8=["duration","bounce"],l8=["stiffness","damping","mass"];function I0(e,t){return t.some(n=>e[n]!==void 0)}function c8(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!I0(e,l8)&&I0(e,s8)){const n=i8(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Zx({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],a=e[e.length-1],o={done:!1,value:i},{stiffness:s,damping:l,mass:d,duration:u,velocity:f,isResolvedFromDuration:p}=c8({...r,velocity:-In(r.velocity||0)}),v=f||0,g=l/(2*Math.sqrt(s*d)),y=a-i,w=In(Math.sqrt(s/d)),x=Math.abs(y)<5;n||(n=x?.01:2),t||(t=x?.005:.5);let h;if(g<1){const m=_u(w,g);h=b=>{const S=Math.exp(-g*w*b);return a-S*((v+g*w*y)/m*Math.sin(m*b)+y*Math.cos(m*b))}}else if(g===1)h=m=>a-Math.exp(-w*m)*(y+(v+w*y)*m);else{const m=w*Math.sqrt(g*g-1);h=b=>{const S=Math.exp(-g*w*b),C=Math.min(m*b,300);return a-S*((v+g*w*y)*Math.sinh(C)+m*y*Math.cosh(C))/m}}return{calculatedDuration:p&&u||null,next:m=>{const b=h(m);if(p)o.done=m>=u;else{let S=0;g<1&&(S=m===0?Rn(v):Jx(h,m,b));const C=Math.abs(S)<=n,T=Math.abs(a-b)<=t;o.done=C&&T}return o.value=o.done?a:b,o}}}function D0({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:d=.5,restSpeed:u}){const f=e[0],p={done:!1,value:f},v=A=>s!==void 0&&A<s||l!==void 0&&A>l,g=A=>s===void 0?l:l===void 0||Math.abs(s-A)<Math.abs(l-A)?s:l;let y=n*t;const w=f+y,x=o===void 0?w:o(w);x!==w&&(y=x-f);const h=A=>-y*Math.exp(-A/r),m=A=>x+h(A),b=A=>{const G=h(A),E=m(A);p.done=Math.abs(G)<=d,p.value=p.done?x:E};let S,C;const T=A=>{v(p.value)&&(S=A,C=Zx({keyframes:[p.value,g(p.value)],velocity:Jx(m,A,p.value),damping:i,stiffness:a,restDelta:d,restSpeed:u}))};return T(0),{calculatedDuration:null,next:A=>{let G=!1;return!C&&S===void 0&&(G=!0,b(A),T(A)),S!==void 0&&A>=S?C.next(A-S):(!G&&b(A),p)}}}const d8=Po(.42,0,1,1),u8=Po(0,0,.58,1),ey=Po(.42,0,.58,1),f8=e=>Array.isArray(e)&&typeof e[0]!="number",jp=e=>Array.isArray(e)&&typeof e[0]=="number",N0={linear:tt,easeIn:d8,easeInOut:ey,easeOut:u8,circIn:hp,circInOut:Mx,circOut:Lx,backIn:pp,backInOut:_x,backOut:Gx,anticipate:zx},V0=e=>{if(jp(e)){Tu(e.length===4);const[t,n,r,i]=e;return Po(t,n,r,i)}else if(typeof e=="string")return Tu(N0[e]!==void 0),N0[e];return e},p8=(e,t)=>n=>t(e(n)),Dn=(...e)=>e.reduce(p8),Qr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ee=(e,t,n)=>e+(t-e)*n;function ed(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function h8({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=ed(l,s,e+1/3),a=ed(l,s,e),o=ed(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function cl(e,t){return n=>n>0?t:e}const td=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},m8=[Pu,Ir,ji],g8=e=>m8.find(t=>t.test(e));function F0(e){const t=g8(e);if(!t)return!1;let n=t.parse(e);return t===ji&&(n=h8(n)),n}const B0=(e,t)=>{const n=F0(e),r=F0(t);if(!n||!r)return cl(e,t);const i={...n};return a=>(i.red=td(n.red,r.red,a),i.green=td(n.green,r.green,a),i.blue=td(n.blue,r.blue,a),i.alpha=Ee(n.alpha,r.alpha,a),Ir.transform(i))},zu=new Set(["none","hidden"]);function v8(e,t){return zu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function x8(e,t){return n=>Ee(e,t,n)}function Cp(e){return typeof e=="number"?x8:typeof e=="string"?mp(e)?cl:at.test(e)?B0:b8:Array.isArray(e)?ty:typeof e=="object"?at.test(e)?B0:y8:cl}function ty(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>Cp(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function y8(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Cp(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function w8(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[a]=l,i[o]++}return r}const b8=(e,t)=>{const n=yr.createTransformer(t),r=vo(e),i=vo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?zu.has(e)&&!i.values.length||zu.has(t)&&!r.values.length?v8(e,t):Dn(ty(w8(r,i),i.values),n):cl(e,t)};function ny(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ee(e,t,n):Cp(e)(e,t)}function S8(e,t,n){const r=[],i=n||ny,a=e.length-1;for(let o=0;o<a;o++){let s=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||tt:t;s=Dn(l,s)}r.push(s)}return r}function kp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(Tu(a===t.length),a===1)return()=>t[0];if(a===2&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=S8(t,r,i),s=o.length,l=d=>{let u=0;if(s>1)for(;u<e.length-2&&!(d<e[u+1]);u++);const f=Qr(e[u],e[u+1],d);return o[u](f)};return n?d=>l(xr(e[0],e[a-1],d)):l}function j8(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Qr(0,t,r);e.push(Ee(n,1,i))}}function ry(e){const t=[0];return j8(t,e.length-1),t}function C8(e,t){return e.map(n=>n*t)}function k8(e,t){return e.map(()=>t||ey).splice(0,e.length-1)}function dl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=f8(r)?r.map(V0):V0(r),a={done:!1,value:t[0]},o=C8(n&&n.length===t.length?n:ry(t),e),s=kp(o,t,{ease:Array.isArray(i)?i:k8(t,i)});return{calculatedDuration:e,next:l=>(a.value=s(l),a.done=l>=e,a)}}const $0=2e4;function T8(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<$0;)t+=n,r=e.next(t);return t>=$0?1/0:t}const A8=e=>{const t=({timestamp:n})=>e(n);return{start:()=>se.update(t,!0),stop:()=>an(t),now:()=>He.isProcessing?He.timestamp:bn.now()}},E8={decay:D0,inertia:D0,tween:dl,keyframes:dl,spring:Zx},P8=e=>e/100;class Tp extends Qx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,o=(i==null?void 0:i.KeyframeResolver)||gp,s=(l,d)=>this.onKeyframesResolved(l,d);this.resolver=new o(a,s,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=this.options,s=bp(n)?n:E8[n]||dl;let l,d;s!==dl&&typeof t[0]!="number"&&(l=Dn(P8,ny(t[0],t[1])),t=[0,100]);const u=s({...this.options,keyframes:t});a==="mirror"&&(d=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=T8(u));const{calculatedDuration:f}=u,p=f+i,v=p*(r+1)-i;return{generator:u,mirroredGenerator:d,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:A}=this.options;return{done:!0,value:A[A.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:d,totalDuration:u,resolvedDuration:f}=r;if(this.startTime===null)return a.next(0);const{delay:p,repeat:v,repeatType:g,repeatDelay:y,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const x=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?x<0:x>u;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let m=this.currentTime,b=a;if(v){const A=Math.min(this.currentTime,u)/f;let G=Math.floor(A),E=A%1;!E&&A>=1&&(E=1),E===1&&G--,G=Math.min(G,v+1),!!(G%2)&&(g==="reverse"?(E=1-E,y&&(E-=y/f)):g==="mirror"&&(b=o)),m=xr(0,1,E)*f}const S=h?{done:!1,value:l[0]}:b.next(m);s&&(S.value=s(S.value));let{done:C}=S;!h&&d!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&i!==void 0&&(S.value=Xl(l,this.options,i)),w&&w(S.value),T&&this.finish(),S}get duration(){const{resolved:t}=this;return t?In(t.calculatedDuration):0}get time(){return In(this.currentTime)}set time(t){t=Rn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=In(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=A8,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const G8=new Set(["opacity","clipPath","filter","transform"]),_8=10,z8=(e,t)=>{let n="";const r=Math.max(Math.round(t/_8),2);for(let i=0;i<r;i++)n+=e(Qr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Ap(e){let t;return()=>(t===void 0&&(t=e()),t)}const L8={linearEasing:void 0};function M8(e,t){const n=Ap(e);return()=>{var r;return(r=L8[t])!==null&&r!==void 0?r:n()}}const ul=M8(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function iy(e){return!!(typeof e=="function"&&ul()||!e||typeof e=="string"&&(e in Lu||ul())||jp(e)||Array.isArray(e)&&e.every(iy))}const Ga=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Lu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ga([0,.65,.55,1]),circOut:Ga([.55,0,1,.45]),backIn:Ga([.31,.01,.66,-.59]),backOut:Ga([.33,1.53,.69,.99])};function ay(e,t){if(e)return typeof e=="function"&&ul()?z8(e,t):jp(e)?Ga(e):Array.isArray(e)?e.map(n=>ay(n,t)||Lu.easeOut):Lu[e]}function O8(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s,times:l}={}){const d={[t]:n};l&&(d.offset=l);const u=ay(s,i);return Array.isArray(u)&&(d.easing=u),e.animate(d,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function U0(e,t){e.timeline=t,e.onfinish=null}const R8=Ap(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),fl=10,I8=2e4;function D8(e){return bp(e.type)||e.type==="spring"||!iy(e.ease)}function N8(e,t){const n=new Tp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<I8;)r=n.sample(a),i.push(r.value),a+=fl;return{times:void 0,keyframes:i,duration:a-fl,ease:"linear"}}const oy={anticipate:zx,backInOut:_x,circInOut:Mx};function V8(e){return e in oy}class H0 extends Qx{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new Xx(a,(o,s)=>this.onKeyframesResolved(o,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:a,ease:o,type:s,motionValue:l,name:d,startTime:u}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&ul()&&V8(o)&&(o=oy[o]),D8(this.options)){const{onComplete:p,onUpdate:v,motionValue:g,element:y,...w}=this.options,x=N8(t,w);t=x.keyframes,t.length===1&&(t[1]=t[0]),i=x.duration,a=x.times,o=x.ease,s="keyframes"}const f=O8(l.owner.current,d,t,{...this.options,duration:i,times:a,ease:o});return f.startTime=u??this.calcStartTime(),this.pendingTimeline?(U0(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:p}=this.options;l.set(Xl(t,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:a,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return In(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return In(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Rn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return tt;const{animation:r}=n;U0(r,t)}return tt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:d,onUpdate:u,onComplete:f,element:p,...v}=this.options,g=new Tp({...v,keyframes:r,duration:i,type:a,ease:o,times:s,isGenerator:!0}),y=Rn(this.time);d.setWithVelocity(g.sample(y-fl).value,g.sample(y).value,fl)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:o,type:s}=t;return R8()&&r&&G8.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&a!=="mirror"&&o!==0&&s!=="inertia"}}const sy=Ap(()=>window.ScrollTimeline!==void 0);class F8{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>sy()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function B8({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:l,elapsed:d,...u}){return!!Object.keys(u).length}const Ep=(e,t,n,r={},i,a)=>o=>{const s=fp(r,e)||{},l=s.delay||r.delay||0;let{elapsed:d=0}=r;d=d-Rn(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-d,onUpdate:p=>{t.set(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};B8(s)||(u={...u,...l9(e,u)}),u.duration&&(u.duration=Rn(u.duration)),u.repeatDelay&&(u.repeatDelay=Rn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!a&&t.get()!==void 0){const p=Xl(u.keyframes,s);if(p!==void 0)return se.update(()=>{u.onUpdate(p),u.onComplete()}),new F8([])}return!a&&H0.supports(u)?new H0(u):new Tp(u)},$8=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),U8=e=>ku(e)?e[e.length-1]||0:e;function Pp(e,t){e.indexOf(t)===-1&&e.push(t)}function Gp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class _p{constructor(){this.subscriptions=[]}add(t){return Pp(this.subscriptions,t),()=>Gp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const q0=30,H8=e=>!isNaN(parseFloat(e)),$a={current:void 0};class q8{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=bn.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=bn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=H8(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new _p);const r=this.events[t].add(n);return t==="change"?()=>{r(),se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return $a.current&&$a.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=bn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>q0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,q0);return Sp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gn(e,t){return new q8(e,t)}function W8(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,gn(n))}function Y8(e,t){const n=Kl(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const s=U8(a[o]);W8(e,o,s)}}const zp=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),K8="framerAppearId",ly="data-"+zp(K8);function cy(e){return e.props[ly]}const ct=e=>!!(e&&e.getVelocity);function X8(e){return!!(ct(e)&&e.add)}function Mu(e,t){const n=e.getValue("willChange");if(X8(n))return n.add(t)}function Q8({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function dy(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const d=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(a=e.latestValues[f])!==null&&a!==void 0?a:null),v=l[f];if(v===void 0||u&&Q8(u,f))continue;const g={delay:n,...fp(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const x=cy(e);if(x){const h=window.MotionHandoffAnimation(x,f,se);h!==null&&(g.startTime=h,y=!0)}}Mu(e,f),p.start(Ep(f,p,v,e.shouldReduceMotion&&oi.has(f)?{type:!1}:g,e,y));const w=p.animation;w&&d.push(w)}return s&&Promise.all(d).then(()=>{se.update(()=>{s&&Y8(e,s)})}),d}function Ou(e,t,n={}){var r;const i=Kl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(dy(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=a;return J8(e,t,u+d,f,p,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[d,u]=l==="beforeChildren"?[o,s]:[s,o];return d().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function J8(e,t,n=0,r=0,i=1,a){const o=[],s=(e.variantChildren.size-1)*r,l=i===1?(d=0)=>d*r:(d=0)=>s-d*r;return Array.from(e.variantChildren).sort(Z8).forEach((d,u)=>{d.notify("AnimationStart",t),o.push(Ou(d,t,{...a,delay:n+l(u)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(o)}function Z8(e,t){return e.sortNodePosition(t)}function e3(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>Ou(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=Ou(e,t,n);else{const i=typeof t=="function"?Kl(e,t,n.custom):t;r=Promise.all(dy(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const t3=up.length;function uy(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?uy(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<t3;n++){const r=up[n],i=e.props[r];(mo(i)||i===!1)&&(t[r]=i)}return t}const n3=[...dp].reverse(),r3=dp.length;function i3(e){return t=>Promise.all(t.map(({animation:n,options:r})=>e3(e,n,r)))}function a3(e){let t=i3(e),n=W0(),r=!0;const i=l=>(d,u)=>{var f;const p=Kl(e,u,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:v,transitionEnd:g,...y}=p;d={...d,...y,...g}}return d};function a(l){t=l(e)}function o(l){const{props:d}=e,u=uy(e.parent)||{},f=[],p=new Set;let v={},g=1/0;for(let w=0;w<r3;w++){const x=n3[w],h=n[x],m=d[x]!==void 0?d[x]:u[x],b=mo(m),S=x===l?h.isActive:null;S===!1&&(g=w);let C=m===u[x]&&m!==d[x]&&b;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...v},!h.isActive&&S===null||!m&&!h.prevProp||Yl(m)||typeof m=="boolean")continue;const T=o3(h.prevProp,m);let A=T||x===l&&h.isActive&&!C&&b||w>g&&b,G=!1;const E=Array.isArray(m)?m:[m];let P=E.reduce(i(x),{});S===!1&&(P={});const{prevResolvedValues:z={}}=h,I={...z,...P},D=K=>{A=!0,p.has(K)&&(G=!0,p.delete(K)),h.needsAnimating[K]=!0;const M=e.getValue(K);M&&(M.liveStyle=!1)};for(const K in I){const M=P[K],V=z[K];if(v.hasOwnProperty(K))continue;let $=!1;ku(M)&&ku(V)?$=!kx(M,V):$=M!==V,$?M!=null?D(K):p.add(K):M!==void 0&&p.has(K)?D(K):h.protectedKeys[K]=!0}h.prevProp=m,h.prevResolvedValues=P,h.isActive&&(v={...v,...P}),r&&e.blockInitialAnimation&&(A=!1),A&&(!(C&&T)||G)&&f.push(...E.map(K=>({animation:K,options:{type:x}})))}if(p.size){const w={};p.forEach(x=>{const h=e.getBaseTarget(x),m=e.getValue(x);m&&(m.liveStyle=!0),w[x]=h??null}),f.push({animation:w})}let y=!!f.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function s(l,d){var u;if(n[l].isActive===d)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var v;return(v=p.animationState)===null||v===void 0?void 0:v.setActive(l,d)}),n[l].isActive=d;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=W0(),r=!0}}}function o3(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!kx(t,e):!1}function Pr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function W0(){return{animate:Pr(!0),whileInView:Pr(),whileHover:Pr(),whileTap:Pr(),whileDrag:Pr(),whileFocus:Pr(),exit:Pr()}}class jr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class s3 extends jr{constructor(t){super(t),t.animationState||(t.animationState=a3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Yl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let l3=0;class c3 extends jr{constructor(){super(...arguments),this.id=l3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const d3={animation:{Feature:s3},exit:{Feature:c3}},fy=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ql(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const u3=e=>t=>fy(t)&&e(t,Ql(t));function Mn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Nn(e,t,n,r){return Mn(e,t,u3(n),r)}const Y0=(e,t)=>Math.abs(e-t);function f3(e,t){const n=Y0(e.x,t.x),r=Y0(e.y,t.y);return Math.sqrt(n**2+r**2)}class py{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=rd(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,v=f3(f.offset,{x:0,y:0})>=3;if(!p&&!v)return;const{point:g}=f,{timestamp:y}=He;this.history.push({...g,timestamp:y});const{onStart:w,onMove:x}=this.handlers;p||(w&&w(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=nd(p,this.transformPagePoint),se.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:v,onSessionEnd:g,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=rd(f.type==="pointercancel"?this.lastMoveEventInfo:nd(p,this.transformPagePoint),this.history);this.startEvent&&v&&v(f,w),g&&g(f,w)},!fy(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Ql(t),s=nd(o,this.transformPagePoint),{point:l}=s,{timestamp:d}=He;this.history=[{...l,timestamp:d}];const{onSessionStart:u}=n;u&&u(t,rd(s,this.history)),this.removeListeners=Dn(Nn(this.contextWindow,"pointermove",this.handlePointerMove),Nn(this.contextWindow,"pointerup",this.handlePointerUp),Nn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),an(this.updatePoint)}}function nd(e,t){return t?{point:t(e.point)}:e}function K0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function rd({point:e},t){return{point:e,delta:K0(e,hy(t)),offset:K0(e,p3(t)),velocity:h3(t,.1)}}function p3(e){return e[0]}function hy(e){return e[e.length-1]}function h3(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=hy(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Rn(t)));)n--;if(!r)return{x:0,y:0};const a=In(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function my(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const X0=my("dragHorizontal"),Q0=my("dragVertical");function gy(e){let t=!1;if(e==="y")t=Q0();else if(e==="x")t=X0();else{const n=X0(),r=Q0();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function vy(){const e=gy(!0);return e?(e(),!1):!0}function Ci(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const xy=1e-4,m3=1-xy,g3=1+xy,yy=.01,v3=0-yy,x3=0+yy;function Lt(e){return e.max-e.min}function y3(e,t,n){return Math.abs(e-t)<=n}function J0(e,t,n,r=.5){e.origin=r,e.originPoint=Ee(t.min,t.max,e.origin),e.scale=Lt(n)/Lt(t),e.translate=Ee(n.min,n.max,e.origin)-e.originPoint,(e.scale>=m3&&e.scale<=g3||isNaN(e.scale))&&(e.scale=1),(e.translate>=v3&&e.translate<=x3||isNaN(e.translate))&&(e.translate=0)}function Ua(e,t,n,r){J0(e.x,t.x,n.x,r?r.originX:void 0),J0(e.y,t.y,n.y,r?r.originY:void 0)}function Z0(e,t,n){e.min=n.min+t.min,e.max=e.min+Lt(t)}function w3(e,t,n){Z0(e.x,t.x,n.x),Z0(e.y,t.y,n.y)}function em(e,t,n){e.min=t.min-n.min,e.max=e.min+Lt(t)}function Ha(e,t,n){em(e.x,t.x,n.x),em(e.y,t.y,n.y)}function b3(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ee(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ee(n,e,r.max):Math.min(e,n)),e}function tm(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function S3(e,{top:t,left:n,bottom:r,right:i}){return{x:tm(e.x,n,i),y:tm(e.y,t,r)}}function nm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function j3(e,t){return{x:nm(e.x,t.x),y:nm(e.y,t.y)}}function C3(e,t){let n=.5;const r=Lt(e),i=Lt(t);return i>r?n=Qr(t.min,t.max-r,e.min):r>i&&(n=Qr(e.min,e.max-i,t.min)),xr(0,1,n)}function k3(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ru=.35;function T3(e=Ru){return e===!1?e=0:e===!0&&(e=Ru),{x:rm(e,"left","right"),y:rm(e,"top","bottom")}}function rm(e,t,n){return{min:im(e,t),max:im(e,n)}}function im(e,t){return typeof e=="number"?e:e[t]||0}const am=()=>({translate:0,scale:1,origin:0,originPoint:0}),ki=()=>({x:am(),y:am()}),om=()=>({min:0,max:0}),Me=()=>({x:om(),y:om()});function Dt(e){return[e("x"),e("y")]}function wy({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function A3({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function E3(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function id(e){return e===void 0||e===1}function Iu({scale:e,scaleX:t,scaleY:n}){return!id(e)||!id(t)||!id(n)}function zr(e){return Iu(e)||by(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function by(e){return sm(e.x)||sm(e.y)}function sm(e){return e&&e!=="0%"}function pl(e,t,n){const r=e-n,i=t*r;return n+i}function lm(e,t,n,r,i){return i!==void 0&&(e=pl(e,i,r)),pl(e,n,r)+t}function Du(e,t=0,n=1,r,i){e.min=lm(e.min,t,n,r,i),e.max=lm(e.max,t,n,r,i)}function Sy(e,{x:t,y:n}){Du(e.x,t.translate,t.scale,t.originPoint),Du(e.y,n.translate,n.scale,n.originPoint)}const cm=.999999999999,dm=1.0000000000001;function P3(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:l}=a.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ai(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Sy(e,o)),r&&zr(a.latestValues)&&Ai(e,a.latestValues))}t.x<dm&&t.x>cm&&(t.x=1),t.y<dm&&t.y>cm&&(t.y=1)}function Ti(e,t){e.min=e.min+t,e.max=e.max+t}function um(e,t,n,r,i=.5){const a=Ee(e.min,e.max,i);Du(e,t,n,a,r)}function Ai(e,t){um(e.x,t.x,t.scaleX,t.scale,t.originX),um(e.y,t.y,t.scaleY,t.scale,t.originY)}function jy(e,t){return wy(E3(e.getBoundingClientRect(),t))}function G3(e,t,n){const r=jy(e,n),{scroll:i}=t;return i&&(Ti(r.x,i.offset.x),Ti(r.y,i.offset.y)),r}const Cy=({current:e})=>e?e.ownerDocument.defaultView:null,_3=new WeakMap;class z3{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Me(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ql(u,"page").point)},a=(u,f)=>{const{drag:p,dragPropagation:v,onDragStart:g}=this.getProps();if(p&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=gy(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Dt(w=>{let x=this.getAxisMotionValue(w).get()||0;if(wn.test(x)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[w];m&&(x=Lt(m)*(parseFloat(x)/100))}}this.originPoint[w]=x}),g&&se.postRender(()=>g(u,f)),Mu(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:g,onDrag:y}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:w}=f;if(v&&this.currentDirection===null){this.currentDirection=L3(w),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,w),this.updateAxis("y",f.point,w),this.visualElement.render(),y&&y(u,f)},s=(u,f)=>this.stop(u,f),l=()=>Dt(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new py(t,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:Cy(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&se.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!ns(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=b3(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&Ci(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=S3(i.layoutBox,n):this.constraints=!1,this.elastic=T3(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Dt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=k3(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ci(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=G3(r,i.root,this.visualElement.getTransformPagePoint());let o=j3(i.layout.layoutBox,a);if(n){const s=n(A3(o));this.hasMutatedConstraints=!!s,s&&(o=wy(s))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},d=Dt(u=>{if(!ns(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const p=i?200:1e6,v=i?40:1e7,g={type:"inertia",velocity:r?t[u]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(d).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Mu(this.visualElement,t),r.start(Ep(t,r,0,n,this.visualElement,!1))}stopAnimation(){Dt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Dt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Dt(n=>{const{drag:r}=this.getProps();if(!ns(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:s}=i.layout.layoutBox[n];a.set(t[n]-Ee(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ci(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Dt(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const l=s.get();i[o]=C3({min:l,max:l},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Dt(o=>{if(!ns(o,t,null))return;const s=this.getAxisMotionValue(o),{min:l,max:d}=this.constraints[o];s.set(Ee(l,d,i[o]))})}addListeners(){if(!this.visualElement.current)return;_3.set(this.visualElement,this);const t=this.visualElement.current,n=Nn(t,"pointerdown",l=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ci(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),se.read(r);const o=Mn(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:d})=>{this.isDragging&&d&&(Dt(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=Ru,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function ns(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function L3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class M3 extends jr{constructor(t){super(t),this.removeGroupControls=tt,this.removeListeners=tt,this.controls=new z3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tt}unmount(){this.removeGroupControls(),this.removeListeners()}}const fm=e=>(t,n)=>{e&&se.postRender(()=>e(t,n))};class O3 extends jr{constructor(){super(...arguments),this.removePointerDownListener=tt}onPointerDown(t){this.session=new py(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Cy(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:fm(t),onStart:fm(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&se.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=Nn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Jl=j.createContext(null);function R3(){const e=j.useContext(Jl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=j.useId();j.useEffect(()=>r(i),[]);const a=j.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,a]:[!0]}const Lp=j.createContext({}),ky=j.createContext({}),js={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function pm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wa={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=pm(e,t.target.x),r=pm(e,t.target.y);return`${n}% ${r}%`}},I3={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=yr.parse(e);if(i.length>5)return r;const a=yr.createTransformer(e),o=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=l;const d=Ee(s,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=d),typeof i[3+o]=="number"&&(i[3+o]/=d),a(i)}},hl={};function D3(e){Object.assign(hl,e)}const{schedule:Mp,cancel:Lz}=Tx(queueMicrotask,!1);class N3 extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;D3(V3),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),js.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,o=r.projection;return o&&(o.isPresent=a,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||se.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Mp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Ty(e){const[t,n]=R3(),r=j.useContext(Lp);return c.jsx(N3,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(ky),isPresent:t,safeToRemove:n})}const V3={borderRadius:{...wa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wa,borderTopRightRadius:wa,borderBottomLeftRadius:wa,borderBottomRightRadius:wa,boxShadow:I3},Ay=["TopLeft","TopRight","BottomLeft","BottomRight"],F3=Ay.length,hm=e=>typeof e=="string"?parseFloat(e):e,mm=e=>typeof e=="number"||W.test(e);function B3(e,t,n,r,i,a){i?(e.opacity=Ee(0,n.opacity!==void 0?n.opacity:1,$3(r)),e.opacityExit=Ee(t.opacity!==void 0?t.opacity:1,0,U3(r))):a&&(e.opacity=Ee(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<F3;o++){const s=`border${Ay[o]}Radius`;let l=gm(t,s),d=gm(n,s);if(l===void 0&&d===void 0)continue;l||(l=0),d||(d=0),l===0||d===0||mm(l)===mm(d)?(e[s]=Math.max(Ee(hm(l),hm(d),r),0),(wn.test(d)||wn.test(l))&&(e[s]+="%")):e[s]=d}(t.rotate||n.rotate)&&(e.rotate=Ee(t.rotate||0,n.rotate||0,r))}function gm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const $3=Ey(0,.5,Lx),U3=Ey(.5,.95,tt);function Ey(e,t,n){return r=>r<e?0:r>t?1:n(Qr(e,t,r))}function vm(e,t){e.min=t.min,e.max=t.max}function It(e,t){vm(e.x,t.x),vm(e.y,t.y)}function xm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function ym(e,t,n,r,i){return e-=t,e=pl(e,1/n,r),i!==void 0&&(e=pl(e,1/i,r)),e}function H3(e,t=0,n=1,r=.5,i,a=e,o=e){if(wn.test(t)&&(t=parseFloat(t),t=Ee(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=Ee(a.min,a.max,r);e===a&&(s-=t),e.min=ym(e.min,t,n,s,i),e.max=ym(e.max,t,n,s,i)}function wm(e,t,[n,r,i],a,o){H3(e,t[n],t[r],t[i],t.scale,a,o)}const q3=["x","scaleX","originX"],W3=["y","scaleY","originY"];function bm(e,t,n,r){wm(e.x,t,q3,n?n.x:void 0,r?r.x:void 0),wm(e.y,t,W3,n?n.y:void 0,r?r.y:void 0)}function Sm(e){return e.translate===0&&e.scale===1}function Py(e){return Sm(e.x)&&Sm(e.y)}function jm(e,t){return e.min===t.min&&e.max===t.max}function Y3(e,t){return jm(e.x,t.x)&&jm(e.y,t.y)}function Cm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Gy(e,t){return Cm(e.x,t.x)&&Cm(e.y,t.y)}function km(e){return Lt(e.x)/Lt(e.y)}function Tm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class K3{constructor(){this.members=[]}add(t){Pp(this.members,t),t.scheduleRender()}remove(t){if(Gp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function X3(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:u,rotateX:f,rotateY:p,skewX:v,skewY:g}=n;d&&(r=`perspective(${d}px) ${r}`),u&&(r+=`rotate(${u}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),v&&(r+=`skewX(${v}deg) `),g&&(r+=`skewY(${g}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const Q3=(e,t)=>e.depth-t.depth;class J3{constructor(){this.children=[],this.isDirty=!1}add(t){Pp(this.children,t),this.isDirty=!0}remove(t){Gp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Q3),this.isDirty=!1,this.children.forEach(t)}}function Cs(e){const t=ct(e)?e.get():e;return $8(t)?t.toValue():t}function Z3(e,t){const n=bn.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(an(r),e(a-t))};return se.read(r,!0),()=>an(r)}function e6(e){return e instanceof SVGElement&&e.tagName!=="svg"}function t6(e,t,n){const r=ct(e)?e:gn(e);return r.start(Ep("",r,t,n)),r.animation}const Lr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},_a=typeof window<"u"&&window.MotionDebug!==void 0,ad=["","X","Y","Z"],n6={visibility:"hidden"},Am=1e3;let r6=0;function od(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function _y(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=cy(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",se,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&_y(r)}function zy({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},s=t==null?void 0:t()){this.id=r6++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,_a&&(Lr.totalNodes=Lr.resolvedTargetDeltas=Lr.recalculatedProjection=0),this.nodes.forEach(o6),this.nodes.forEach(u6),this.nodes.forEach(f6),this.nodes.forEach(s6),_a&&window.MotionDebug.record(Lr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new J3)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new _p),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const l=this.eventHandlers.get(o);l&&l.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=e6(o),this.instance=o;const{layoutId:l,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(d||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Z3(p,250),js.hasAnimatedSinceResize&&(js.hasAnimatedSinceResize=!1,this.nodes.forEach(Pm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||d)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:v,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||v6,{onLayoutAnimationStart:w,onLayoutAnimationComplete:x}=u.getProps(),h=!this.targetLayout||!Gy(this.targetLayout,g)||v,m=!p&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const b={...fp(y,"layout"),onPlay:w,onComplete:x};(u.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||Pm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,an(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(p6),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_y(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Em);return}this.isUpdating||this.nodes.forEach(c6),this.isUpdating=!1,this.nodes.forEach(d6),this.nodes.forEach(i6),this.nodes.forEach(a6),this.clearAllSnapshots();const s=bn.now();He.delta=xr(0,1e3/60,s-He.timestamp),He.timestamp=s,He.isProcessing=!0,Qc.update.process(He),Qc.preRender.process(He),Qc.render.process(He),He.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Mp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(l6),this.sharedNodes.forEach(h6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Py(this.projectionDelta),l=this.getTransformTemplate(),d=l?l(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&(s||zr(this.latestValues)||u)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return o&&(l=this.removeTransform(l)),x6(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return Me();const l=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(y6))){const{scroll:u}=this.root;u&&(Ti(l.x,u.offset.x),Ti(l.y,u.offset.y))}return l}removeElementScroll(o){var s;const l=Me();if(It(l,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:f,options:p}=u;u!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&It(l,o),Ti(l.x,f.offset.x),Ti(l.y,f.offset.y))}return l}applyTransform(o,s=!1){const l=Me();It(l,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ai(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),zr(u.latestValues)&&Ai(l,u.latestValues)}return zr(this.latestValues)&&Ai(l,this.latestValues),l}removeTransform(o){const s=Me();It(s,o);for(let l=0;l<this.path.length;l++){const d=this.path[l];if(!d.instance||!zr(d.latestValues))continue;Iu(d.latestValues)&&d.updateSnapshot();const u=Me(),f=d.measurePageBox();It(u,f),bm(s,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return zr(this.latestValues)&&bm(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==He.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==l;if(!(o||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=He.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),Ha(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),It(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Me(),this.targetWithTransforms=Me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),w3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):It(this.target,this.layout.layoutBox),Sy(this.target,this.targetDelta)):It(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),Ha(this.relativeTargetOrigin,this.target,v.target),It(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}_a&&Lr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Iu(this.parent.latestValues)||by(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let d=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(d=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===He.timestamp&&(d=!1),d)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;It(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;P3(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Me());const{target:g}=s;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(xm(this.prevProjectionDelta.x,this.projectionDelta.x),xm(this.prevProjectionDelta.y,this.projectionDelta.y)),Ua(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!Tm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Tm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),_a&&Lr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ki(),this.projectionDelta=ki(),this.projectionDeltaWithTransform=ki()}setAnimationOrigin(o,s=!1){const l=this.snapshot,d=l?l.latestValues:{},u={...this.latestValues},f=ki();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=Me(),v=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=v!==g,w=this.getStack(),x=!w||w.members.length<=1,h=!!(y&&!x&&this.options.crossfade===!0&&!this.path.some(g6));this.animationProgress=0;let m;this.mixTargetDelta=b=>{const S=b/1e3;Gm(f.x,o.x,S),Gm(f.y,o.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ha(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),m6(this.relativeTarget,this.relativeTargetOrigin,p,S),m&&Y3(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Me()),It(m,this.relativeTarget)),y&&(this.animationValues=u,B3(u,d,this.latestValues,S,h,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(an(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=se.update(()=>{js.hasAnimatedSinceResize=!0,this.currentAnimation=t6(0,Am,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Am),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:l,layout:d,latestValues:u}=o;if(!(!s||!l||!d)){if(this!==o&&this.layout&&d&&Ly(this.options.animationType,this.layout.layoutBox,d.layoutBox)){l=this.target||Me();const f=Lt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Lt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}It(s,l),Ai(s,u),Ua(this.projectionDeltaWithTransform,this.layoutCorrected,s,u)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new K3),this.sharedNodes.get(o).add(s);const d=s.options.initialPromotionConfig;s.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:l}={}){const d=this.getStack();d&&d.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const d={};l.z&&od("z",o,d,this.animationValues);for(let u=0;u<ad.length;u++)od(`rotate${ad[u]}`,o,d,this.animationValues),od(`skew${ad[u]}`,o,d,this.animationValues);o.render();for(const u in d)o.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);o.scheduleRender()}getProjectionStyles(o){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return n6;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=Cs(o==null?void 0:o.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Cs(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!zr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),d.transform=X3(this.projectionDeltaWithTransform,this.treeScale,p),u&&(d.transform=u(p,d.transform));const{x:v,y:g}=this.projectionDelta;d.transformOrigin=`${v.origin*100}% ${g.origin*100}% 0`,f.animationValues?d.opacity=f===this?(l=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:d.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in hl){if(p[y]===void 0)continue;const{correct:w,applyTo:x}=hl[y],h=d.transform==="none"?p[y]:w(p[y],f);if(x){const m=x.length;for(let b=0;b<m;b++)d[x[b]]=h}else d[y]=h}return this.options.layoutId&&(d.pointerEvents=f===this?Cs(o==null?void 0:o.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Em),this.root.sharedNodes.clear()}}}function i6(e){e.updateLayout()}function a6(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?Dt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],v=Lt(p);p.min=r[f].min,p.max=p.min+v}):Ly(a,n.layoutBox,r)&&Dt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],v=Lt(r[f]);p.max=p.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const s=ki();Ua(s,r,n.layoutBox);const l=ki();o?Ua(l,e.applyTransform(i,!0),n.measuredBox):Ua(l,r,n.layoutBox);const d=!Py(s);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:v}=f;if(p&&v){const g=Me();Ha(g,n.layoutBox,p.layoutBox);const y=Me();Ha(y,r,v.layoutBox),Gy(g,y)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=g,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function o6(e){_a&&Lr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function s6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function l6(e){e.clearSnapshot()}function Em(e){e.clearMeasurements()}function c6(e){e.isLayoutDirty=!1}function d6(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Pm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function u6(e){e.resolveTargetDelta()}function f6(e){e.calcProjection()}function p6(e){e.resetSkewAndRotation()}function h6(e){e.removeLeadSnapshot()}function Gm(e,t,n){e.translate=Ee(t.translate,0,n),e.scale=Ee(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function _m(e,t,n,r){e.min=Ee(t.min,n.min,r),e.max=Ee(t.max,n.max,r)}function m6(e,t,n,r){_m(e.x,t.x,n.x,r),_m(e.y,t.y,n.y,r)}function g6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const v6={duration:.45,ease:[.4,0,.1,1]},zm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Lm=zm("applewebkit/")&&!zm("chrome/")?Math.round:tt;function Mm(e){e.min=Lm(e.min),e.max=Lm(e.max)}function x6(e){Mm(e.x),Mm(e.y)}function Ly(e,t,n){return e==="position"||e==="preserve-aspect"&&!y3(km(t),km(n),.2)}function y6(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const w6=zy({attachResizeListener:(e,t)=>Mn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sd={current:void 0},My=zy({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!sd.current){const e=new w6({});e.mount(window),e.setOptions({layoutScroll:!0}),sd.current=e}return sd.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),b6={pan:{Feature:O3},drag:{Feature:M3,ProjectionNode:My,MeasureLayout:Ty}};function Om(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(a,o)=>{if(a.pointerType==="touch"||vy())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&se.postRender(()=>l(a,o))};return Nn(e.current,n,i,{passive:!e.getProps()[r]})}class S6 extends jr{mount(){this.unmount=Dn(Om(this.node,!0),Om(this.node,!1))}unmount(){}}class j6 extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dn(Mn(this.node.current,"focus",()=>this.onFocus()),Mn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Oy=(e,t)=>t?e===t?!0:Oy(e,t.parentElement):!1;function ld(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ql(n))}class C6 extends jr{constructor(){super(...arguments),this.removeStartListeners=tt,this.removeEndListeners=tt,this.removeAccessibleListeners=tt,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),a=Nn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:f}=this.node.getProps(),p=!f&&!Oy(this.node.current,s.target)?u:d;p&&se.update(()=>p(s,l))},{passive:!(r.onTap||r.onPointerUp)}),o=Nn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Dn(a,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const o=s=>{s.key!=="Enter"||!this.checkPressEnd()||ld("up",(l,d)=>{const{onTap:u}=this.node.getProps();u&&se.postRender(()=>u(l,d))})};this.removeEndListeners(),this.removeEndListeners=Mn(this.node.current,"keyup",o),ld("down",(s,l)=>{this.startPress(s,l)})},n=Mn(this.node.current,"keydown",t),r=()=>{this.isPressing&&ld("cancel",(a,o)=>this.cancelPress(a,o))},i=Mn(this.node.current,"blur",r);this.removeAccessibleListeners=Dn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&se.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!vy()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&se.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Nn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Mn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Dn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Nu=new WeakMap,cd=new WeakMap,k6=e=>{const t=Nu.get(e.target);t&&t(e)},T6=e=>{e.forEach(k6)};function A6({root:e,...t}){const n=e||document;cd.has(n)||cd.set(n,{});const r=cd.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(T6,{root:e,...t})),r[i]}function E6(e,t,n){const r=A6(t);return Nu.set(e,n),r.observe(e),()=>{Nu.delete(e),r.unobserve(e)}}const P6={some:0,all:1};class G6 extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:P6[i]},s=l=>{const{isIntersecting:d}=l;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),p=d?u:f;p&&p(l)};return E6(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(_6(t,n))&&this.startObserver()}unmount(){}}function _6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const z6={inView:{Feature:G6},tap:{Feature:C6},focus:{Feature:j6},hover:{Feature:S6}},L6={layout:{ProjectionNode:My,MeasureLayout:Ty}},Zl=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ec=j.createContext({}),Op=typeof window<"u",tc=Op?j.useLayoutEffect:j.useEffect,Ry=j.createContext({strict:!1});function M6(e,t,n,r,i){var a,o;const{visualElement:s}=j.useContext(ec),l=j.useContext(Ry),d=j.useContext(Jl),u=j.useContext(Zl).reducedMotion,f=j.useRef();r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:u}));const p=f.current,v=j.useContext(ky);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&O6(f.current,n,i,v);const g=j.useRef(!1);j.useInsertionEffect(()=>{p&&g.current&&p.update(n,d)});const y=n[ly],w=j.useRef(!!y&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return tc(()=>{p&&(g.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Mp.render(p.render),w.current&&p.animationState&&p.animationState.animateChanges())}),j.useEffect(()=>{p&&(!w.current&&p.animationState&&p.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,y)}),w.current=!1))}),p}function O6(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Iy(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Ci(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:d})}function Iy(e){if(e)return e.options.allowProjection!==!1?e.projection:Iy(e.parent)}function R6(e,t,n){return j.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ci(n)&&(n.current=r))},[t])}function nc(e){return Yl(e.animate)||up.some(t=>mo(e[t]))}function Dy(e){return!!(nc(e)||e.variants)}function I6(e,t){if(nc(e)){const{initial:n,animate:r}=e;return{initial:n===!1||mo(n)?n:void 0,animate:mo(r)?r:void 0}}return e.inherit!==!1?t:{}}function D6(e){const{initial:t,animate:n}=I6(e,j.useContext(ec));return j.useMemo(()=>({initial:t,animate:n}),[Rm(t),Rm(n)])}function Rm(e){return Array.isArray(e)?e.join(" "):e}const Im={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},qi={};for(const e in Im)qi[e]={isEnabled:t=>Im[e].some(n=>!!t[n])};function N6(e){for(const t in e)qi[t]={...qi[t],...e[t]}}const V6=Symbol.for("motionComponentSymbol");function F6({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&N6(e);function a(s,l){let d;const u={...j.useContext(Zl),...s,layoutId:B6(s)},{isStatic:f}=u,p=D6(s),v=r(s,f);if(!f&&Op){$6();const g=U6(u);d=g.MeasureLayout,p.visualElement=M6(i,v,u,t,g.ProjectionNode)}return c.jsxs(ec.Provider,{value:p,children:[d&&p.visualElement?c.jsx(d,{visualElement:p.visualElement,...u}):null,n(i,s,R6(v,p.visualElement,l),v,f,p.visualElement)]})}const o=j.forwardRef(a);return o[V6]=i,o}function B6({layoutId:e}){const t=j.useContext(Lp).id;return t&&e!==void 0?t+"-"+e:e}function $6(e,t){j.useContext(Ry).strict}function U6(e){const{drag:t,layout:n}=qi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const H6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rp(e){return typeof e!="string"||e.includes("-")?!1:!!(H6.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ny(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const Vy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Fy(e,t,n,r){Ny(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Vy.has(i)?i:zp(i),t.attrs[i])}function By(e,{layout:t,layoutId:n}){return oi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!hl[e]||e==="opacity")}function Ip(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(ct(i[o])||t.style&&ct(t.style[o])||By(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[o]=i[o]);return a}function $y(e,t,n){const r=Ip(e,t,n);for(const i in e)if(ct(e[i])||ct(t[i])){const a=Eo.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function ra(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}function q6({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,a){const o={latestValues:W6(r,i,a,e),renderState:t()};return n&&(o.mount=s=>n(r,s,o)),o}const Uy=e=>(t,n)=>{const r=j.useContext(ec),i=j.useContext(Jl),a=()=>q6(e,t,r,i);return n?a():ra(a)};function W6(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=Cs(a[p]);let{initial:o,animate:s}=e;const l=nc(e),d=Dy(e);t&&d&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?s:o;if(f&&typeof f!="boolean"&&!Yl(f)){const p=Array.isArray(f)?f:[f];for(let v=0;v<p.length;v++){const g=cp(e,p[v]);if(g){const{transitionEnd:y,transition:w,...x}=g;for(const h in x){let m=x[h];if(Array.isArray(m)){const b=u?m.length-1:0;m=m[b]}m!==null&&(i[h]=m)}for(const h in y)i[h]=y[h]}}}return i}const Dp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Hy=()=>({...Dp(),attrs:{}}),qy=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Y6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},K6=Eo.length;function X6(e,t,n){let r="",i=!0;for(let a=0;a<K6;a++){const o=Eo[a],s=e[o];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(o.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const d=qy(s,yp[o]);if(!l){i=!1;const u=Y6[o]||o;r+=`${u}(${d}) `}n&&(t[o]=d)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Np(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const d=t[l];if(oi.has(l)){o=!0;continue}else if(Dx(l)){i[l]=d;continue}else{const u=qy(d,yp[l]);l.startsWith("origin")?(s=!0,a[l]=u):r[l]=u}}if(t.transform||(o||n?r.transform=X6(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:d="50%",originZ:u=0}=a;r.transformOrigin=`${l} ${d} ${u}`}}function Dm(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function Q6(e,t,n){const r=Dm(t,e.x,e.width),i=Dm(n,e.y,e.height);return`${r} ${i}`}const J6={offset:"stroke-dashoffset",array:"stroke-dasharray"},Z6={offset:"strokeDashoffset",array:"strokeDasharray"};function eS(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?J6:Z6;e[a.offset]=W.transform(-r);const o=W.transform(t),s=W.transform(n);e[a.array]=`${o} ${s}`}function Vp(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:l=0,...d},u,f){if(Np(e,d,f),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:g}=e;p.transform&&(g&&(v.transform=p.transform),delete p.transform),g&&(i!==void 0||a!==void 0||v.transform)&&(v.transformOrigin=Q6(g,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&eS(p,o,s,l,!1)}const Fp=e=>typeof e=="string"&&e.toLowerCase()==="svg",tS={useVisualState:Uy({scrapeMotionValuesFromProps:$y,createRenderState:Hy,onMount:(e,t,{renderState:n,latestValues:r})=>{se.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),se.render(()=>{Vp(n,r,Fp(t.tagName),e.transformTemplate),Fy(t,n)})}})},nS={useVisualState:Uy({scrapeMotionValuesFromProps:Ip,createRenderState:Dp})};function Wy(e,t,n){for(const r in t)!ct(t[r])&&!By(r,n)&&(e[r]=t[r])}function rS({transformTemplate:e},t){return j.useMemo(()=>{const n=Dp();return Np(n,t,e),Object.assign({},n.vars,n.style)},[t])}function iS(e,t){const n=e.style||{},r={};return Wy(r,n,e),Object.assign(r,rS(e,t)),r}function aS(e,t){const n={},r=iS(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const oS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ml(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||oS.has(e)}let Yy=e=>!ml(e);function sS(e){e&&(Yy=t=>t.startsWith("on")?!ml(t):e(t))}try{sS(require("@emotion/is-prop-valid").default)}catch{}function lS(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Yy(i)||n===!0&&ml(i)||!t&&!ml(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function cS(e,t,n,r){const i=j.useMemo(()=>{const a=Hy();return Vp(a,t,Fp(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Wy(a,e.style,e),i.style={...a,...i.style}}return i}function dS(e=!1){return(n,r,i,{latestValues:a},o)=>{const l=(Rp(n)?cS:aS)(r,a,o,n),d=lS(r,typeof n=="string",e),u=n!==j.Fragment?{...d,...l,ref:i}:{},{children:f}=r,p=j.useMemo(()=>ct(f)?f.get():f,[f]);return j.createElement(n,{...u,children:p})}}function uS(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Rp(r)?tS:nS,preloadedFeatures:e,useRender:dS(i),createVisualElement:t,Component:r};return F6(o)}}const Vu={current:null},Ky={current:!1};function fS(){if(Ky.current=!0,!!Op)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Vu.current=e.matches;e.addListener(t),t()}else Vu.current=!1}function pS(e,t,n){for(const r in t){const i=t[r],a=n[r];if(ct(i))e.addValue(r,i);else if(ct(a))e.addValue(r,gn(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,gn(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Nm=new WeakMap,hS=[...Fx,at,yr],mS=e=>hS.find(Vx(e)),Vm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class gS{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=gp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=bn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,se.render(this.render,!1,!0))};const{latestValues:l,renderState:d}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=nc(n),this.isVariantNode=Dy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const v=f[p];l[p]!==void 0&&ct(v)&&v.set(l[p],!1)}}mount(t){this.current=t,Nm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Ky.current||fS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Nm.delete(this.current),this.projection&&this.projection.unmount(),an(this.notifyUpdate),an(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=oi.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in qi){const n=qi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Vm.length;r++){const i=Vm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=pS(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=gn(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Rx(i)||Ox(i))?i=parseFloat(i):!mS(i)&&yr.test(n)&&(i=Kx(t,n)),this.setBaseTarget(t,ct(i)?i.get():i)),ct(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=cp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!ct(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new _p),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Xy extends gS{constructor(){super(...arguments),this.KeyframeResolver=Xx}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function vS(e){return window.getComputedStyle(e)}class xS extends Xy{constructor(){super(...arguments),this.type="html",this.renderInstance=Ny}readValueFromInstance(t,n){if(oi.has(n)){const r=wp(n);return r&&r.default||0}else{const r=vS(t),i=(Dx(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return jy(t,n)}build(t,n,r){Np(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Ip(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ct(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class yS extends Xy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Me}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(oi.has(n)){const r=wp(n);return r&&r.default||0}return n=Vy.has(n)?n:zp(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return $y(t,n,r)}build(t,n,r){Vp(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Fy(t,n,r,i)}mount(t){this.isSVGTag=Fp(t.tagName),super.mount(t)}}const wS=(e,t)=>Rp(e)?new yS(t):new xS(t,{allowProjection:e!==j.Fragment}),bS=uS({...d3,...z6,...b6,...L6},wS),Oe=r9(bS);class SS extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function jS({children:e,isPresent:t}){const n=j.useId(),r=j.useRef(null),i=j.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=j.useContext(Zl);return j.useInsertionEffect(()=>{const{width:o,height:s,top:l,left:d}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return a&&(u.nonce=a),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),c.jsx(SS,{isPresent:t,childRef:r,sizeRef:i,children:j.cloneElement(e,{ref:r})})}const CS=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{const s=ra(kS),l=j.useId(),d=j.useCallback(f=>{s.set(f,!0);for(const p of s.values())if(!p)return;r&&r()},[s,r]),u=j.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d,register:f=>(s.set(f,!1),()=>s.delete(f))}),a?[Math.random(),d]:[n,d]);return j.useMemo(()=>{s.forEach((f,p)=>s.set(p,!1))},[n]),j.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),o==="popLayout"&&(e=c.jsx(jS,{isPresent:n,children:e})),c.jsx(Jl.Provider,{value:u,children:e})};function kS(){return new Map}const rs=e=>e.key||"";function Fm(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const TS=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:o="sync"})=>{const s=j.useMemo(()=>Fm(e),[e]),l=s.map(rs),d=j.useRef(!0),u=j.useRef(s),f=ra(()=>new Map),[p,v]=j.useState(s),[g,y]=j.useState(s);tc(()=>{d.current=!1,u.current=s;for(let h=0;h<g.length;h++){const m=rs(g[h]);l.includes(m)?f.delete(m):f.get(m)!==!0&&f.set(m,!1)}},[g,l.length,l.join("-")]);const w=[];if(s!==p){let h=[...s];for(let m=0;m<g.length;m++){const b=g[m],S=rs(b);l.includes(S)||(h.splice(m,0,b),w.push(b))}o==="wait"&&w.length&&(h=w),y(Fm(h)),v(s);return}const{forceRender:x}=j.useContext(Lp);return c.jsx(c.Fragment,{children:g.map(h=>{const m=rs(h),b=s===g||l.includes(m),S=()=>{if(f.has(m))f.set(m,!0);else return;let C=!0;f.forEach(T=>{T||(C=!1)}),C&&(x==null||x(),y(u.current),i&&i())};return c.jsx(CS,{isPresent:b,initial:!d.current||r?void 0:!1,custom:b?void 0:n,presenceAffectsLayout:a,mode:o,onExitComplete:b?void 0:S,children:h},m)})})};function AS(e){const t=ra(()=>gn(e)),{isStatic:n}=j.useContext(Zl);if(n){const[,r]=j.useState(e);j.useEffect(()=>t.on("change",r),[])}return t}function Qy(e,t){const n=AS(t()),r=()=>n.set(t());return r(),tc(()=>{const i=()=>se.preRender(r,!1,!0),a=e.map(o=>o.on("change",i));return()=>{a.forEach(o=>o()),an(r)}}),n}const ES=e=>e&&typeof e=="object"&&e.mix,PS=e=>ES(e)?e.mix:void 0;function GS(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=kp(i,a,{mixer:PS(a[0]),...o});return t?s(r):s}function _S(e){$a.current=[],e();const t=Qy($a.current,e);return $a.current=void 0,t}function is(e,t,n,r){if(typeof e=="function")return _S(e);const i=typeof t=="function"?t:GS(t,n,r);return Array.isArray(e)?Bm(e,i):Bm([e],([a])=>i(a))}function Bm(e,t){const n=ra(()=>[]);return Qy(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Jy(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const ks=new WeakMap;let Xn;function zS(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function LS({target:e,contentRect:t,borderBoxSize:n}){var r;(r=ks.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return zS(e,n)}})})}function MS(e){e.forEach(LS)}function OS(){typeof ResizeObserver>"u"||(Xn=new ResizeObserver(MS))}function RS(e,t){Xn||OS();const n=Jy(e);return n.forEach(r=>{let i=ks.get(r);i||(i=new Set,ks.set(r,i)),i.add(t),Xn==null||Xn.observe(r)}),()=>{n.forEach(r=>{const i=ks.get(r);i==null||i.delete(t),i!=null&&i.size||Xn==null||Xn.unobserve(r)})}}const Ts=new Set;let qa;function IS(){qa=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Ts.forEach(n=>n(t))},window.addEventListener("resize",qa)}function DS(e){return Ts.add(e),qa||IS(),()=>{Ts.delete(e),!Ts.size&&qa&&(qa=void 0)}}function NS(e,t){return typeof e=="function"?DS(e):RS(e,t)}const VS=50,$m=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),FS=()=>({time:0,x:$m(),y:$m()}),BS={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Um(e,t,n,r){const i=n[t],{length:a,position:o}=BS[t],s=i.current,l=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Qr(0,i.scrollLength,i.current);const d=r-l;i.velocity=d>VS?0:Sp(i.current-s,d)}function $S(e,t,n){Um(e,"x",t,n),Um(e,"y",t,n),t.time=n}function US(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();n.x+=i.left-a.left,n.y+=i.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:a}=r.getBBox();n.x+=i,n.y+=a;let o=null,s=r.parentNode;for(;!o;)s.tagName==="svg"&&(o=s),s=r.parentNode;r=o}else break;return n}const HS={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Fu={start:0,center:.5,end:1};function Hm(e,t,n=0){let r=0;if(e in Fu&&(e=Fu[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const qS=[0,0];function WS(e,t,n,r){let i=Array.isArray(e)?e:qS,a=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Fu[e]?e:"0"]),a=Hm(i[0],n,r),o=Hm(i[1],t),a-o}const YS={x:0,y:0};function KS(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function XS(e,t,n){const{offset:r=HS.All}=n,{target:i=e,axis:a="y"}=n,o=a==="y"?"height":"width",s=i!==e?US(i,e):YS,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:KS(i),d={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate;const f=r.length;for(let p=0;p<f;p++){const v=WS(r[p],d[o],l[o],s[a]);!u&&v!==t[a].interpolatorOffsets[p]&&(u=!0),t[a].offset[p]=v}u&&(t[a].interpolate=kp(t[a].offset,ry(r)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function QS(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function JS(e,t,n,r={}){return{measure:()=>QS(e,r.target,n),update:i=>{$S(e,n,i),(r.offset||r.target)&&XS(e,n,r)},notify:()=>t(n)}}const ba=new WeakMap,qm=new WeakMap,dd=new WeakMap,Wm=e=>e===document.documentElement?window:e;function Bp(e,{container:t=document.documentElement,...n}={}){let r=dd.get(t);r||(r=new Set,dd.set(t,r));const i=FS(),a=JS(t,e,i,n);if(r.add(a),!ba.has(t)){const s=()=>{for(const p of r)p.measure()},l=()=>{for(const p of r)p.update(He.timestamp)},d=()=>{for(const p of r)p.notify()},u=()=>{se.read(s,!1,!0),se.read(l,!1,!0),se.update(d,!1,!0)};ba.set(t,u);const f=Wm(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&qm.set(t,NS(t,u)),f.addEventListener("scroll",u,{passive:!0})}const o=ba.get(t);return se.read(o,!1,!0),()=>{var s;an(o);const l=dd.get(t);if(!l||(l.delete(a),l.size))return;const d=ba.get(t);ba.delete(t),d&&(Wm(t).removeEventListener("scroll",d),(s=qm.get(t))===null||s===void 0||s(),window.removeEventListener("resize",d))}}function Zy(e,t){let n;const r=()=>{const{currentTime:i}=t,o=(i===null?0:i.value)/100;n!==o&&e(o),n=o};return se.update(r,!0),()=>an(r)}function ZS({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Bp(a=>{r.value=a[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const ud=new Map;function ew({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),ud.has(t)||ud.set(t,{});const r=ud.get(t);return r[n]||(r[n]=sy()?new ScrollTimeline({source:t,axis:n}):ZS({source:t,axis:n})),r[n]}function ej(e){return e.length===2}function tw(e){return e&&(e.target||e.offset)}function tj(e,t){return ej(e)||tw(t)?Bp(n=>{e(n[t.axis].progress,n)},t):Zy(e,ew(t))}function nj(e,t){if(tw(t))return e.pause(),Bp(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=ew(t);return e.attachTimeline(n,r=>(r.pause(),Zy(i=>{r.time=r.duration*i},n)))}}function rj(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?tj(e,r):nj(e,r)}function Ym(e,t){v9(!!(!t||t.current))}const ij=()=>({scrollX:gn(0),scrollY:gn(0),scrollXProgress:gn(0),scrollYProgress:gn(0)});function aj({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=ra(ij);return(n?tc:j.useEffect)(()=>(Ym("target",t),Ym("container",e),rj((o,{x:s,y:l})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const oj={some:0,all:1};function sj(e,t,{root:n,margin:r,amount:i="some"}={}){const a=Jy(e),o=new WeakMap,s=d=>{d.forEach(u=>{const f=o.get(u.target);if(u.isIntersecting!==!!f)if(u.isIntersecting){const p=t(u);typeof p=="function"?o.set(u.target,p):l.unobserve(u.target)}else f&&(f(u),o.delete(u.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:oj[i]});return a.forEach(d=>l.observe(d)),()=>l.disconnect()}function lj(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[a,o]=j.useState(!1);return j.useEffect(()=>{if(!e.current||i&&a)return;const s=()=>(o(!0),i?void 0:()=>o(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return sj(e.current,s,l)},[t,e,n,i,r]),a}var nw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Km=te.createContext&&te.createContext(nw),cj=["attr","size","title"];function dj(e,t){if(e==null)return{};var n=uj(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function uj(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function gl(){return gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gl.apply(this,arguments)}function Xm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xm(Object(n),!0).forEach(function(r){fj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fj(e,t,n){return t=pj(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pj(e){var t=hj(e,"string");return typeof t=="symbol"?t:t+""}function hj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rw(e){return e&&e.map((t,n)=>te.createElement(t.tag,vl({key:n},t.attr),rw(t.child)))}function J(e){return t=>te.createElement(mj,gl({attr:vl({},e.attr)},t),rw(e.child))}function mj(e){var t=n=>{var{attr:r,size:i,title:a}=e,o=dj(e,cj),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),te.createElement("svg",gl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:vl(vl({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&te.createElement("title",null,a),e.children)};return Km!==void 0?te.createElement(Km.Consumer,null,n=>t(n)):t(nw)}function gj(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function Qm(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function $p(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Pe(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function De(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function vj(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"},child:[]}]})(e)}function Jm(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function Zm(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function oe(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80 0-39.2-28.2-71.7-65.5-78.5zm-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zm330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8z"},child:[]}]})(e)}function pt(e){return J({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function eg(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function tg(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function xj(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function mt(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function ke(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function li(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function Le(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function ye(e){return J({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function _o(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}var iw={exports:{}},yj="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",wj=yj,bj=wj;function aw(){}function ow(){}ow.resetWarningCache=aw;var Sj=function(){function e(r,i,a,o,s,l){if(l!==bj){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ow,resetWarningCache:aw};return n.PropTypes=n,n};iw.exports=Sj();var jj=iw.exports;const Se=ei(jj);function Cj(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var sw=j,kj=Cj(sw);function ng(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tj(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Aj=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ej(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],s;function l(){s=e(o.map(function(u){return u.props})),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(u){Tj(f,u);function f(){return u.apply(this,arguments)||this}f.peek=function(){return s},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=s;return s=void 0,o=[],g};var p=f.prototype;return p.UNSAFE_componentWillMount=function(){o.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var g=o.indexOf(this);o.splice(g,1),l()},p.render=function(){return kj.createElement(a,this.props)},f}(sw.PureComponent);return ng(d,"displayName","SideEffect("+r(a)+")"),ng(d,"canUseDOM",Aj),d}}var Pj=Ej;const Gj=ei(Pj);var _j=typeof Element<"u",zj=typeof Map=="function",Lj=typeof Set=="function",Mj=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function As(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!As(e[r],t[r]))return!1;return!0}var a;if(zj&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!As(r.value[1],t.get(r.value[0])))return!1;return!0}if(Lj&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Mj&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(_j&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!As(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var Oj=function(t,n){try{return As(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Rj=ei(Oj);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var rg=Object.getOwnPropertySymbols,Ij=Object.prototype.hasOwnProperty,Dj=Object.prototype.propertyIsEnumerable;function Nj(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Vj(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Fj=Vj()?Object.assign:function(e,t){for(var n,r=Nj(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var o in n)Ij.call(n,o)&&(r[o]=n[o]);if(rg){i=rg(n);for(var s=0;s<i.length;s++)Dj.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const Bj=ei(Fj);var $r={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Q={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Q).map(function(e){return Q[e]});var je={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},xl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},xo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},$j=Object.keys(xl).reduce(function(e,t){return e[xl[t]]=t,e},{}),Uj=[Q.NOSCRIPT,Q.SCRIPT,Q.STYLE],Zt="data-react-helmet",Hj=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qj=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Wj=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yj=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},ig=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Kj=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Bu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Xj=function(t){var n=Oi(t,Q.TITLE),r=Oi(t,xo.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=Oi(t,xo.DEFAULT_TITLE);return n||i||void 0},Qj=function(t){return Oi(t,xo.ON_CHANGE_CLIENT_STATE)||function(){}},fd=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return xt({},r,i)},{})},Jj=function(t,n){return n.filter(function(r){return typeof r[Q.BASE]<"u"}).map(function(r){return r[Q.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},Sa=function(t,n,r){var i={};return r.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&n7("Helmet: "+t+' should be of type "Array". Instead found type "'+Hj(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,o){var s={};o.filter(function(p){for(var v=void 0,g=Object.keys(p),y=0;y<g.length;y++){var w=g[y],x=w.toLowerCase();n.indexOf(x)!==-1&&!(v===je.REL&&p[v].toLowerCase()==="canonical")&&!(x===je.REL&&p[x].toLowerCase()==="stylesheet")&&(v=x),n.indexOf(w)!==-1&&(w===je.INNER_HTML||w===je.CSS_TEXT||w===je.ITEM_PROP)&&(v=w)}if(!v||!p[v])return!1;var h=p[v].toLowerCase();return i[v]||(i[v]={}),s[v]||(s[v]={}),i[v][h]?!1:(s[v][h]=!0,!0)}).reverse().forEach(function(p){return a.push(p)});for(var l=Object.keys(s),d=0;d<l.length;d++){var u=l[d],f=Bj({},i[u],s[u]);i[u]=f}return a},[]).reverse()},Oi=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},Zj=function(t){return{baseTag:Jj([je.HREF,je.TARGET],t),bodyAttributes:fd($r.BODY,t),defer:Oi(t,xo.DEFER),encode:Oi(t,xo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:fd($r.HTML,t),linkTags:Sa(Q.LINK,[je.REL,je.HREF],t),metaTags:Sa(Q.META,[je.NAME,je.CHARSET,je.HTTPEQUIV,je.PROPERTY,je.ITEM_PROP],t),noscriptTags:Sa(Q.NOSCRIPT,[je.INNER_HTML],t),onChangeClientState:Qj(t),scriptTags:Sa(Q.SCRIPT,[je.SRC,je.INNER_HTML],t),styleTags:Sa(Q.STYLE,[je.CSS_TEXT],t),title:Xj(t),titleAttributes:fd($r.TITLE,t)}},$u=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){$u(t)},0)}}(),ag=function(t){return clearTimeout(t)},e7=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$u:global.requestAnimationFrame||$u,t7=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ag:global.cancelAnimationFrame||ag,n7=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},ja=null,r7=function(t){ja&&t7(ja),t.defer?ja=e7(function(){og(t,function(){ja=null})}):(og(t),ja=null)},og=function(t,n){var r=t.baseTag,i=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,d=t.onChangeClientState,u=t.scriptTags,f=t.styleTags,p=t.title,v=t.titleAttributes;Uu(Q.BODY,i),Uu(Q.HTML,a),i7(p,v);var g={baseTag:ci(Q.BASE,r),linkTags:ci(Q.LINK,o),metaTags:ci(Q.META,s),noscriptTags:ci(Q.NOSCRIPT,l),scriptTags:ci(Q.SCRIPT,u),styleTags:ci(Q.STYLE,f)},y={},w={};Object.keys(g).forEach(function(x){var h=g[x],m=h.newTags,b=h.oldTags;m.length&&(y[x]=m),b.length&&(w[x]=g[x].oldTags)}),n&&n(),d(t,y,w)},lw=function(t){return Array.isArray(t)?t.join(""):t},i7=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=lw(t)),Uu(Q.TITLE,n)},Uu=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(Zt),a=i?i.split(","):[],o=[].concat(a),s=Object.keys(n),l=0;l<s.length;l++){var d=s[l],u=n[d]||"";r.getAttribute(d)!==u&&r.setAttribute(d,u),a.indexOf(d)===-1&&a.push(d);var f=o.indexOf(d);f!==-1&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);a.length===o.length?r.removeAttribute(Zt):r.getAttribute(Zt)!==s.join(",")&&r.setAttribute(Zt,s.join(","))}},ci=function(t,n){var r=document.head||document.querySelector(Q.HEAD),i=r.querySelectorAll(t+"["+Zt+"]"),a=Array.prototype.slice.call(i),o=[],s=void 0;return n&&n.length&&n.forEach(function(l){var d=document.createElement(t);for(var u in l)if(l.hasOwnProperty(u))if(u===je.INNER_HTML)d.innerHTML=l.innerHTML;else if(u===je.CSS_TEXT)d.styleSheet?d.styleSheet.cssText=l.cssText:d.appendChild(document.createTextNode(l.cssText));else{var f=typeof l[u]>"u"?"":l[u];d.setAttribute(u,f)}d.setAttribute(Zt,"true"),a.some(function(p,v){return s=v,d.isEqualNode(p)})?a.splice(s,1):o.push(d)}),a.forEach(function(l){return l.parentNode.removeChild(l)}),o.forEach(function(l){return r.appendChild(l)}),{oldTags:a,newTags:o}},cw=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},a7=function(t,n,r,i){var a=cw(r),o=lw(n);return a?"<"+t+" "+Zt+'="true" '+a+">"+Bu(o,i)+"</"+t+">":"<"+t+" "+Zt+'="true">'+Bu(o,i)+"</"+t+">"},o7=function(t,n,r){return n.reduce(function(i,a){var o=Object.keys(a).filter(function(d){return!(d===je.INNER_HTML||d===je.CSS_TEXT)}).reduce(function(d,u){var f=typeof a[u]>"u"?u:u+'="'+Bu(a[u],r)+'"';return d?d+" "+f:f},""),s=a.innerHTML||a.cssText||"",l=Uj.indexOf(t)===-1;return i+"<"+t+" "+Zt+'="true" '+o+(l?"/>":">"+s+"</"+t+">")},"")},dw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[xl[i]||i]=t[i],r},n)},s7=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[$j[i]||i]=t[i],r},n)},l7=function(t,n,r){var i,a=(i={key:n},i[Zt]=!0,i),o=dw(r,a);return[te.createElement(Q.TITLE,o,n)]},c7=function(t,n){return n.map(function(r,i){var a,o=(a={key:i},a[Zt]=!0,a);return Object.keys(r).forEach(function(s){var l=xl[s]||s;if(l===je.INNER_HTML||l===je.CSS_TEXT){var d=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:d}}else o[l]=r[s]}),te.createElement(t,o)})},Tn=function(t,n,r){switch(t){case Q.TITLE:return{toComponent:function(){return l7(t,n.title,n.titleAttributes)},toString:function(){return a7(t,n.title,n.titleAttributes,r)}};case $r.BODY:case $r.HTML:return{toComponent:function(){return dw(n)},toString:function(){return cw(n)}};default:return{toComponent:function(){return c7(t,n)},toString:function(){return o7(t,n,r)}}}},uw=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,d=t.scriptTags,u=t.styleTags,f=t.title,p=f===void 0?"":f,v=t.titleAttributes;return{base:Tn(Q.BASE,n,i),bodyAttributes:Tn($r.BODY,r,i),htmlAttributes:Tn($r.HTML,a,i),link:Tn(Q.LINK,o,i),meta:Tn(Q.META,s,i),noscript:Tn(Q.NOSCRIPT,l,i),script:Tn(Q.SCRIPT,d,i),style:Tn(Q.STYLE,u,i),title:Tn(Q.TITLE,{title:p,titleAttributes:v},i)}},d7=function(t){var n,r;return r=n=function(i){Yj(a,i);function a(){return qj(this,a),Kj(this,i.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(s){return!Rj(this.props,s)},a.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case Q.SCRIPT:case Q.NOSCRIPT:return{innerHTML:l};case Q.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(s){var l,d=s.child,u=s.arrayTypeChildren,f=s.newChildProps,p=s.nestedChildren;return xt({},u,(l={},l[d.type]=[].concat(u[d.type]||[],[xt({},f,this.mapNestedChildrenToProps(d,p))]),l))},a.prototype.mapObjectTypeChildren=function(s){var l,d,u=s.child,f=s.newProps,p=s.newChildProps,v=s.nestedChildren;switch(u.type){case Q.TITLE:return xt({},f,(l={},l[u.type]=v,l.titleAttributes=xt({},p),l));case Q.BODY:return xt({},f,{bodyAttributes:xt({},p)});case Q.HTML:return xt({},f,{htmlAttributes:xt({},p)})}return xt({},f,(d={},d[u.type]=xt({},p),d))},a.prototype.mapArrayTypeChildrenToProps=function(s,l){var d=xt({},l);return Object.keys(s).forEach(function(u){var f;d=xt({},d,(f={},f[u]=s[u],f))}),d},a.prototype.warnOnInvalidChildren=function(s,l){return!0},a.prototype.mapChildrenToProps=function(s,l){var d=this,u={};return te.Children.forEach(s,function(f){if(!(!f||!f.props)){var p=f.props,v=p.children,g=ig(p,["children"]),y=s7(g);switch(d.warnOnInvalidChildren(f,v),f.type){case Q.LINK:case Q.META:case Q.NOSCRIPT:case Q.SCRIPT:case Q.STYLE:u=d.flattenArrayTypeChildren({child:f,arrayTypeChildren:u,newChildProps:y,nestedChildren:v});break;default:l=d.mapObjectTypeChildren({child:f,newProps:l,newChildProps:y,nestedChildren:v});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},a.prototype.render=function(){var s=this.props,l=s.children,d=ig(s,["children"]),u=xt({},d);return l&&(u=this.mapChildrenToProps(l,u)),te.createElement(t,u)},Wj(a,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),a}(te.Component),n.propTypes={base:Se.object,bodyAttributes:Se.object,children:Se.oneOfType([Se.arrayOf(Se.node),Se.node]),defaultTitle:Se.string,defer:Se.bool,encodeSpecialCharacters:Se.bool,htmlAttributes:Se.object,link:Se.arrayOf(Se.object),meta:Se.arrayOf(Se.object),noscript:Se.arrayOf(Se.object),onChangeClientState:Se.func,script:Se.arrayOf(Se.object),style:Se.arrayOf(Se.object),title:Se.string,titleAttributes:Se.object,titleTemplate:Se.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=uw({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},u7=function(){return null},f7=Gj(Zj,r7,uw)(u7),Hn=d7(f7);Hn.renderStatic=Hn.rewind;var dt=function(){return dt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},dt.apply(this,arguments)};function Wi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var xe="-ms-",Wa="-moz-",ue="-webkit-",fw="comm",rc="rule",Up="decl",p7="@import",pw="@keyframes",h7="@layer",hw=Math.abs,Hp=String.fromCharCode,Hu=Object.assign;function m7(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function mw(e){return e.trim()}function Gn(e,t){return(e=t.exec(e))?e[0]:e}function ie(e,t,n){return e.replace(t,n)}function Es(e,t,n){return e.indexOf(t,n)}function Ke(e,t){return e.charCodeAt(t)|0}function Yi(e,t,n){return e.slice(t,n)}function hn(e){return e.length}function gw(e){return e.length}function za(e,t){return t.push(e),e}function g7(e,t){return e.map(t).join("")}function sg(e,t){return e.filter(function(n){return!Gn(n,t)})}var ic=1,Ki=1,vw=0,Ht=0,Ne=0,ia="";function ac(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ic,column:Ki,length:o,return:"",siblings:s}}function Qn(e,t){return Hu(ac("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function di(e){for(;e.root;)e=Qn(e.root,{children:[e]});za(e,e.siblings)}function v7(){return Ne}function x7(){return Ne=Ht>0?Ke(ia,--Ht):0,Ki--,Ne===10&&(Ki=1,ic--),Ne}function nn(){return Ne=Ht<vw?Ke(ia,Ht++):0,Ki++,Ne===10&&(Ki=1,ic++),Ne}function Ur(){return Ke(ia,Ht)}function Ps(){return Ht}function oc(e,t){return Yi(ia,e,t)}function qu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y7(e){return ic=Ki=1,vw=hn(ia=e),Ht=0,[]}function w7(e){return ia="",e}function pd(e){return mw(oc(Ht-1,Wu(e===91?e+2:e===40?e+1:e)))}function b7(e){for(;(Ne=Ur())&&Ne<33;)nn();return qu(e)>2||qu(Ne)>3?"":" "}function S7(e,t){for(;--t&&nn()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return oc(e,Ps()+(t<6&&Ur()==32&&nn()==32))}function Wu(e){for(;nn();)switch(Ne){case e:return Ht;case 34:case 39:e!==34&&e!==39&&Wu(Ne);break;case 40:e===41&&Wu(e);break;case 92:nn();break}return Ht}function j7(e,t){for(;nn()&&e+Ne!==57;)if(e+Ne===84&&Ur()===47)break;return"/*"+oc(t,Ht-1)+"*"+Hp(e===47?e:nn())}function C7(e){for(;!qu(Ur());)nn();return oc(e,Ht)}function k7(e){return w7(Gs("",null,null,null,[""],e=y7(e),0,[0],e))}function Gs(e,t,n,r,i,a,o,s,l){for(var d=0,u=0,f=o,p=0,v=0,g=0,y=1,w=1,x=1,h=0,m="",b=i,S=a,C=r,T=m;w;)switch(g=h,h=nn()){case 40:if(g!=108&&Ke(T,f-1)==58){Es(T+=ie(pd(h),"&","&\f"),"&\f",hw(d?s[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:T+=pd(h);break;case 9:case 10:case 13:case 32:T+=b7(g);break;case 92:T+=S7(Ps()-1,7);continue;case 47:switch(Ur()){case 42:case 47:za(T7(j7(nn(),Ps()),t,n,l),l);break;default:T+="/"}break;case 123*y:s[d++]=hn(T)*x;case 125*y:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+u:x==-1&&(T=ie(T,/\f/g,"")),v>0&&hn(T)-f&&za(v>32?cg(T+";",r,n,f-1,l):cg(ie(T," ","")+";",r,n,f-2,l),l);break;case 59:T+=";";default:if(za(C=lg(T,t,n,d,u,i,s,m,b=[],S=[],f,a),a),h===123)if(u===0)Gs(T,t,C,C,b,a,f,s,S);else switch(p===99&&Ke(T,3)===110?100:p){case 100:case 108:case 109:case 115:Gs(e,C,C,r&&za(lg(e,C,C,0,0,i,s,m,i,b=[],f,S),S),i,S,f,s,r?b:S);break;default:Gs(T,C,C,C,[""],S,0,s,S)}}d=u=v=0,y=x=1,m=T="",f=o;break;case 58:f=1+hn(T),v=g;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&x7()==125)continue}switch(T+=Hp(h),h*y){case 38:x=u>0?1:(T+="\f",-1);break;case 44:s[d++]=(hn(T)-1)*x,x=1;break;case 64:Ur()===45&&(T+=pd(nn())),p=Ur(),u=f=hn(m=T+=C7(Ps())),h++;break;case 45:g===45&&hn(T)==2&&(y=0)}}return a}function lg(e,t,n,r,i,a,o,s,l,d,u,f){for(var p=i-1,v=i===0?a:[""],g=gw(v),y=0,w=0,x=0;y<r;++y)for(var h=0,m=Yi(e,p+1,p=hw(w=o[y])),b=e;h<g;++h)(b=mw(w>0?v[h]+" "+m:ie(m,/&\f/g,v[h])))&&(l[x++]=b);return ac(e,t,n,i===0?rc:s,l,d,u,f)}function T7(e,t,n,r){return ac(e,t,n,fw,Hp(v7()),Yi(e,2,-2),0,r)}function cg(e,t,n,r,i){return ac(e,t,n,Up,Yi(e,0,r),Yi(e,r+1,-1),r,i)}function xw(e,t,n){switch(m7(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return Wa+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Wa+e+xe+e+e;case 5936:switch(Ke(e,t+11)){case 114:return ue+e+xe+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+xe+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+xe+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+xe+e+e;case 6165:return ue+e+xe+"flex-"+e+e;case 5187:return ue+e+ie(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+xe+"flex-$1$2")+e;case 5443:return ue+e+xe+"flex-item-"+ie(e,/flex-|-self/g,"")+(Gn(e,/flex-|baseline/)?"":xe+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return ue+e+xe+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+xe+ie(e,"shrink","negative")+e;case 5292:return ue+e+xe+ie(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ie(e,"-grow","")+ue+e+xe+ie(e,"grow","positive")+e;case 4554:return ue+ie(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!Gn(e,/flex-|baseline/))return xe+"grid-column-align"+Yi(e,t)+e;break;case 2592:case 3360:return xe+ie(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Gn(r.props,/grid-\w+-end/)})?~Es(e+(n=n[t].value),"span",0)?e:xe+ie(e,"-start","")+e+xe+"grid-row-span:"+(~Es(n,"span",0)?Gn(n,/\d+/):+Gn(n,/\d+/)-+Gn(e,/\d+/))+";":xe+ie(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Gn(r.props,/grid-\w+-start/)})?e:xe+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Wa+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Es(e,"stretch",0)?xw(ie(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,l,d){return xe+i+":"+a+d+(o?xe+i+"-span:"+(s?l:+l-+a)+d:"")+e});case 4949:if(Ke(e,t+6)===121)return ie(e,":",":"+ue)+e;break;case 6444:switch(Ke(e,Ke(e,14)===45?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+xe+"$2box$3")+e;case 100:return ie(e,":",":"+xe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function yl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function A7(e,t,n,r){switch(e.type){case h7:if(e.children.length)break;case p7:case Up:return e.return=e.return||e.value;case fw:return"";case pw:return e.return=e.value+"{"+yl(e.children,r)+"}";case rc:if(!hn(e.value=e.props.join(",")))return""}return hn(n=yl(e.children,r))?e.return=e.value+"{"+n+"}":""}function E7(e){var t=gw(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function P7(e){return function(t){t.root||(t=t.return)&&e(t)}}function G7(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Up:e.return=xw(e.value,e.length,n);return;case pw:return yl([Qn(e,{value:ie(e.value,"@","@"+ue)})],r);case rc:if(e.length)return g7(n=e.props,function(i){switch(Gn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":di(Qn(e,{props:[ie(i,/:(read-\w+)/,":"+Wa+"$1")]})),di(Qn(e,{props:[i]})),Hu(e,{props:sg(n,r)});break;case"::placeholder":di(Qn(e,{props:[ie(i,/:(plac\w+)/,":"+ue+"input-$1")]})),di(Qn(e,{props:[ie(i,/:(plac\w+)/,":"+Wa+"$1")]})),di(Qn(e,{props:[ie(i,/:(plac\w+)/,xe+"input-$1")]})),di(Qn(e,{props:[i]})),Hu(e,{props:sg(n,r)});break}return""})}}var _7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tt={},Xi=typeof process<"u"&&Tt!==void 0&&(Tt.REACT_APP_SC_ATTR||Tt.SC_ATTR)||"data-styled",yw="active",ww="data-styled-version",sc="6.1.13",qp=`/*!sc*/
`,wl=typeof window<"u"&&"HTMLElement"in window,z7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==""?Tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.SC_DISABLE_SPEEDY!==void 0&&Tt.SC_DISABLE_SPEEDY!==""&&Tt.SC_DISABLE_SPEEDY!=="false"&&Tt.SC_DISABLE_SPEEDY),L7={},lc=Object.freeze([]),Qi=Object.freeze({});function bw(e,t,n){return n===void 0&&(n=Qi),e.theme!==n.theme&&e.theme||t||n.theme}var Sw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),M7=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O7=/(^-|-$)/g;function dg(e){return e.replace(M7,"-").replace(O7,"")}var R7=/(a)(d)/gi,as=52,ug=function(e){return String.fromCharCode(e+(e>25?39:97))};function Yu(e){var t,n="";for(t=Math.abs(e);t>as;t=t/as|0)n=ug(t%as)+n;return(ug(t%as)+n).replace(R7,"$1-$2")}var hd,jw=5381,Ei=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Cw=function(e){return Ei(jw,e)};function Wp(e){return Yu(Cw(e)>>>0)}function I7(e){return e.displayName||e.name||"Component"}function md(e){return typeof e=="string"&&!0}var kw=typeof Symbol=="function"&&Symbol.for,Tw=kw?Symbol.for("react.memo"):60115,D7=kw?Symbol.for("react.forward_ref"):60112,N7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Aw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F7=((hd={})[D7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hd[Tw]=Aw,hd);function fg(e){return("type"in(t=e)&&t.type.$$typeof)===Tw?Aw:"$$typeof"in e?F7[e.$$typeof]:N7;var t}var B7=Object.defineProperty,$7=Object.getOwnPropertyNames,pg=Object.getOwnPropertySymbols,U7=Object.getOwnPropertyDescriptor,H7=Object.getPrototypeOf,hg=Object.prototype;function Ew(e,t,n){if(typeof t!="string"){if(hg){var r=H7(t);r&&r!==hg&&Ew(e,r,n)}var i=$7(t);pg&&(i=i.concat(pg(t)));for(var a=fg(e),o=fg(t),s=0;s<i.length;++s){var l=i[s];if(!(l in V7||n&&n[l]||o&&l in o||a&&l in a)){var d=U7(t,l);try{B7(e,l,d)}catch{}}}}return e}function Ji(e){return typeof e=="function"}function Yp(e){return typeof e=="object"&&"styledComponentId"in e}function Dr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function yo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ku(e,t,n){if(n===void 0&&(n=!1),!n&&!yo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ku(e[r],t[r]);else if(yo(t))for(var r in t)e[r]=Ku(e[r],t[r]);return e}function Kp(e,t){Object.defineProperty(e,"toString",{value:t})}function zo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var q7=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw zo(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(qp);return n},e}(),_s=new Map,Sl=new Map,zs=1,os=function(e){if(_s.has(e))return _s.get(e);for(;Sl.has(zs);)zs++;var t=zs++;return _s.set(e,t),Sl.set(t,e),t},W7=function(e,t){zs=t+1,_s.set(e,t),Sl.set(t,e)},Y7="style[".concat(Xi,"][").concat(ww,'="').concat(sc,'"]'),K7=new RegExp("^".concat(Xi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),X7=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Q7=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(qp),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(K7);if(l){var d=0|parseInt(l[1],10),u=l[2];d!==0&&(W7(u,d),X7(e,u,l[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},mg=function(e){for(var t=document.querySelectorAll(Y7),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Xi)!==yw&&(Q7(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function J7(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Pw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Xi,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Xi,yw),r.setAttribute(ww,sc);var o=J7();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Z7=function(){function e(t){this.element=Pw(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw zo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),eC=function(){function e(t){this.element=Pw(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),tC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),gg=wl,nC={isServer:!wl,useCSSOMInjection:!z7},jl=function(){function e(t,n,r){t===void 0&&(t=Qi),n===void 0&&(n={});var i=this;this.options=dt(dt({},nC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&wl&&gg&&(gg=!1,mg(this)),Kp(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",d=function(f){var p=function(x){return Sl.get(x)}(f);if(p===void 0)return"continue";var v=a.names.get(p),g=o.getGroup(f);if(v===void 0||!v.size||g.length===0)return"continue";var y="".concat(Xi,".g").concat(f,'[id="').concat(p,'"]'),w="";v!==void 0&&v.forEach(function(x){x.length>0&&(w+="".concat(x,","))}),l+="".concat(g).concat(y,'{content:"').concat(w,'"}').concat(qp)},u=0;u<s;u++)d(u);return l}(i)})}return e.registerId=function(t){return os(t)},e.prototype.rehydrate=function(){!this.server&&wl&&mg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(dt(dt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new tC(i):r?new Z7(i):new eC(i)}(this.options),new q7(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(os(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(os(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(os(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rC=/&/g,iC=/^\s*\/\/.*$/gm;function Gw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Gw(n.children,t)),n})}function aC(e){var t,n,r,i=Qi,a=i.options,o=a===void 0?Qi:a,s=i.plugins,l=s===void 0?lc:s,d=function(p,v,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):p},u=l.slice();u.push(function(p){p.type===rc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(rC,n).replace(r,d))}),o.prefix&&u.push(G7),u.push(A7);var f=function(p,v,g,y){v===void 0&&(v=""),g===void 0&&(g=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var w=p.replace(iC,""),x=k7(g||v?"".concat(g," ").concat(v," { ").concat(w," }"):w);o.namespace&&(x=Gw(x,o.namespace));var h=[];return yl(x,E7(u.concat(P7(function(m){return h.push(m)})))),h};return f.hash=l.length?l.reduce(function(p,v){return v.name||zo(15),Ei(p,v.name)},jw).toString():"",f}var oC=new jl,Xu=aC(),_w=te.createContext({shouldForwardProp:void 0,styleSheet:oC,stylis:Xu});_w.Consumer;te.createContext(void 0);function Qu(){return j.useContext(_w)}var zw=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Xu);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Kp(this,function(){throw zo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Xu),this.name+t.hash},e}(),sC=function(e){return e>="A"&&e<="Z"};function vg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;sC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Lw=function(e){return e==null||e===!1||e===""},Mw=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Lw(a)&&(Array.isArray(a)&&a.isCss||Ji(a)?r.push("".concat(vg(i),":"),a,";"):yo(a)?r.push.apply(r,Wi(Wi(["".concat(i," {")],Mw(a),!1),["}"],!1)):r.push("".concat(vg(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _7||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function mr(e,t,n,r){if(Lw(e))return[];if(Yp(e))return[".".concat(e.styledComponentId)];if(Ji(e)){if(!Ji(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return mr(i,t,n,r)}var a;return e instanceof zw?n?(e.inject(n,r),[e.getName(r)]):[e]:yo(e)?Mw(e):Array.isArray(e)?Array.prototype.concat.apply(lc,e.map(function(o){return mr(o,t,n,r)})):[e.toString()]}function Ow(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ji(n)&&!Yp(n))return!1}return!0}var lC=Cw(sc),cC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ow(t),this.componentId=n,this.baseHash=Ei(lC,n),this.baseStyle=r,jl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Dr(i,this.staticRulesId);else{var a=bl(mr(this.rules,t,n,r)),o=Yu(Ei(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=Dr(i,o),this.staticRulesId=o}else{for(var l=Ei(this.baseHash,r.hash),d="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")d+=f;else if(f){var p=bl(mr(f,t,n,r));l=Ei(l,p+u),d+=p}}if(d){var v=Yu(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(d,".".concat(v),void 0,this.componentId)),i=Dr(i,v)}}return i},e}(),Xp=te.createContext(void 0);Xp.Consumer;var gd={};function dC(e,t,n){var r=Yp(e),i=e,a=!md(e),o=t.attrs,s=o===void 0?lc:o,l=t.componentId,d=l===void 0?function(b,S){var C=typeof b!="string"?"sc":dg(b);gd[C]=(gd[C]||0)+1;var T="".concat(C,"-").concat(Wp(sc+C+gd[C]));return S?"".concat(S,"-").concat(T):T}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(b){return md(b)?"styled.".concat(b):"Styled(".concat(I7(b),")")}(e):u,p=t.displayName&&t.componentId?"".concat(dg(t.displayName),"-").concat(t.componentId):t.componentId||d,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;g=function(b,S){return y(b,S)&&w(b,S)}}else g=y}var x=new cC(n,p,r?i.componentStyle:void 0);function h(b,S){return function(C,T,A){var G=C.attrs,E=C.componentStyle,P=C.defaultProps,z=C.foldedComponentIds,I=C.styledComponentId,D=C.target,q=te.useContext(Xp),Z=Qu(),K=C.shouldForwardProp||Z.shouldForwardProp,M=bw(T,q,P)||Qi,V=function(Te,pe,de){for(var _,O=dt(dt({},pe),{className:void 0,theme:de}),N=0;N<Te.length;N+=1){var R=Ji(_=Te[N])?_(O):_;for(var Y in R)O[Y]=Y==="className"?Dr(O[Y],R[Y]):Y==="style"?dt(dt({},O[Y]),R[Y]):R[Y]}return pe.className&&(O.className=Dr(O.className,pe.className)),O}(G,T,M),$=V.as||D,X={};for(var ee in V)V[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&V.theme===M||(ee==="forwardedAs"?X.as=V.forwardedAs:K&&!K(ee,$)||(X[ee]=V[ee]));var be=function(Te,pe){var de=Qu(),_=Te.generateAndInjectStyles(pe,de.styleSheet,de.stylis);return _}(E,V),me=Dr(z,I);return be&&(me+=" "+be),V.className&&(me+=" "+V.className),X[md($)&&!Sw.has($)?"class":"className"]=me,X.ref=A,j.createElement($,X)}(m,b,S)}h.displayName=f;var m=te.forwardRef(h);return m.attrs=v,m.componentStyle=x,m.displayName=f,m.shouldForwardProp=g,m.foldedComponentIds=r?Dr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(S){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var A=0,G=C;A<G.length;A++)Ku(S,G[A],!0);return S}({},i.defaultProps,b):b}}),Kp(m,function(){return".".concat(m.styledComponentId)}),a&&Ew(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function xg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var yg=function(e){return Object.assign(e,{isCss:!0})};function Qp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ji(e)||yo(e))return yg(mr(xg(lc,Wi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?mr(r):yg(mr(xg(r,t)))}function Ju(e,t,n){if(n===void 0&&(n=Qi),!t)throw zo(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Qp.apply(void 0,Wi([i],a,!1)))};return r.attrs=function(i){return Ju(e,t,dt(dt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ju(e,t,dt(dt({},n),i))},r}var Rw=function(e){return Ju(dC,e)},k=Rw;Sw.forEach(function(e){k[e]=Rw(e)});var uC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ow(t),jl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(bl(mr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&jl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function aa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Qp.apply(void 0,Wi([e],t,!1)),i="sc-global-".concat(Wp(JSON.stringify(r))),a=new uC(r,i),o=function(l){var d=Qu(),u=te.useContext(Xp),f=te.useRef(d.styleSheet.allocateGSInstance(i)).current;return d.styleSheet.server&&s(f,l,d.styleSheet,u,d.stylis),te.useLayoutEffect(function(){if(!d.styleSheet.server)return s(f,l,d.styleSheet,u,d.stylis),function(){return a.removeStyles(f,d.styleSheet)}},[f,l,d.styleSheet,u,d.stylis]),null};function s(l,d,u,f,p){if(a.isStatic)a.renderStyles(l,L7,u,p);else{var v=dt(dt({},d),{theme:bw(d,f,o.defaultProps)});a.renderStyles(l,v,u,p)}}return te.memo(o)}function jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=bl(Qp.apply(void 0,Wi([e],t,!1))),i=Wp(r);return new zw(i,r)}function wg(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Jp(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:wg(t[n])&&wg(e[n])&&Object.keys(t[n]).length>0&&Jp(e[n],t[n])})}const Iw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Vn(){const e=typeof document<"u"?document:{};return Jp(e,Iw),e}const fC={document:Iw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Rt(){const e=typeof window<"u"?window:{};return Jp(e,fC),e}function pC(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function hC(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Zu(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Cl(){return Date.now()}function mC(e){const t=Rt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function gC(e,t){t===void 0&&(t="x");const n=Rt();let r,i,a;const o=mC(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(i==="none"?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=a.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=a.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function ss(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function vC(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Et(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!vC(r)){const i=Object.keys(Object(r)).filter(a=>t.indexOf(a)<0);for(let a=0,o=i.length;a<o;a+=1){const s=i[a],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(ss(e[s])&&ss(r[s])?r[s].__swiper__?e[s]=r[s]:Et(e[s],r[s]):!ss(e[s])&&ss(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:Et(e[s],r[s])):e[s]=r[s])}}}return e}function ls(e,t,n){e.style.setProperty(t,n)}function Dw(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Rt(),a=-t.translate;let o=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const d=n>a?"next":"prev",u=(p,v)=>d==="next"&&p>=v||d==="prev"&&p<=v,f=()=>{s=new Date().getTime(),o===null&&(o=s);const p=Math.max(Math.min((s-o)/l,1),0),v=.5-Math.cos(p*Math.PI)/2;let g=a+v*(n-a);if(u(g,n)&&(g=n),t.wrapperEl.scrollTo({[r]:g}),u(g,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:g})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(f)};f()}function Zp(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function vn(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function xC(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function kl(e){try{console.warn(e);return}catch{}}function wo(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:pC(t)),n}function yC(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function wC(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function ar(e,t){return Rt().getComputedStyle(e,null).getPropertyValue(t)}function Tl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Nw(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function ef(e,t,n){const r=Rt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function We(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function bC(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let vd;function SC(){const e=Rt(),t=Vn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Vw(){return vd||(vd=SC()),vd}let xd;function jC(e){let{userAgent:t}=e===void 0?{}:e;const n=Vw(),r=Rt(),i=r.navigator.platform,a=t||r.navigator.userAgent,o={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,d=a.match(/(Android);?[\s\/]+([\d.]+)?/);let u=a.match(/(iPad).*OS\s([\d_]+)/);const f=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let g=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(u=a.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),d&&!v&&(o.os="android",o.android=!0),(u||p||f)&&(o.os="ios",o.ios=!0),o}function Fw(e){return e===void 0&&(e={}),xd||(xd=jC(e)),xd}let yd;function CC(){const e=Rt(),t=Fw();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,d]=s.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=l<16||l===16&&d<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function kC(){return yd||(yd=CC()),yd}function TC(e){let{swiper:t,on:n,emit:r}=e;const i=Rt();let a=null,o=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(f=>{o=i.requestAnimationFrame(()=>{const{width:p,height:v}=t;let g=p,y=v;f.forEach(w=>{let{contentBoxSize:x,contentRect:h,target:m}=w;m&&m!==t.el||(g=h?h.width:(x[0]||x).inlineSize,y=h?h.height:(x[0]||x).blockSize)}),(g!==p||y!==v)&&s()})}),a.observe(t.el))},d=()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},u=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",u)}),n("destroy",()=>{d(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",u)})}function AC(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a=[],o=Rt(),s=function(u,f){f===void 0&&(f={});const p=o.MutationObserver||o.WebkitMutationObserver,v=new p(g=>{if(t.__preventObserver__)return;if(g.length===1){i("observerUpdate",g[0]);return}const y=function(){i("observerUpdate",g[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});v.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:t.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),a.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const u=Nw(t.hostEl);for(let f=0;f<u.length;f+=1)s(u[f])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},d=()=>{a.forEach(u=>{u.disconnect()}),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",d)}var EC={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,a)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(a,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),r=e):(t=a[0].events,n=a[0].data,r=a[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(d=>{d.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(d=>{d.apply(r,n)})}),e}};function PC(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(ar(r,"padding-left")||0,10)-parseInt(ar(r,"padding-right")||0,10),n=n-parseInt(ar(r,"padding-top")||0,10)-parseInt(ar(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function GC(){const e=this;function t(E,P){return parseFloat(E.getPropertyValue(e.getDirectionLabel(P))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:a,rtlTranslate:o,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,d=l?e.virtual.slides.length:e.slides.length,u=vn(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:u.length;let p=[];const v=[],g=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let w=n.slidesOffsetAfter;typeof w=="function"&&(w=n.slidesOffsetAfter.call(e));const x=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,b=-y,S=0,C=0;if(typeof a>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*a:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,u.forEach(E=>{o?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ls(r,"--swiper-centered-offset-before",""),ls(r,"--swiper-centered-offset-after",""));const T=n.grid&&n.grid.rows>1&&e.grid;T?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let A;const G=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<f;E+=1){A=0;let P;if(u[E]&&(P=u[E]),T&&e.grid.updateSlide(E,P,u),!(u[E]&&ar(P,"display")==="none")){if(n.slidesPerView==="auto"){G&&(u[E].style[e.getDirectionLabel("width")]="");const z=getComputedStyle(P),I=P.style.transform,D=P.style.webkitTransform;if(I&&(P.style.transform="none"),D&&(P.style.webkitTransform="none"),n.roundLengths)A=e.isHorizontal()?ef(P,"width"):ef(P,"height");else{const q=t(z,"width"),Z=t(z,"padding-left"),K=t(z,"padding-right"),M=t(z,"margin-left"),V=t(z,"margin-right"),$=z.getPropertyValue("box-sizing");if($&&$==="border-box")A=q+M+V;else{const{clientWidth:X,offsetWidth:ee}=P;A=q+Z+K+M+V+(ee-X)}}I&&(P.style.transform=I),D&&(P.style.webkitTransform=D),n.roundLengths&&(A=Math.floor(A))}else A=(a-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(A=Math.floor(A)),u[E]&&(u[E].style[e.getDirectionLabel("width")]=`${A}px`);u[E]&&(u[E].swiperSlideSize=A),g.push(A),n.centeredSlides?(b=b+A/2+S/2+m,S===0&&E!==0&&(b=b-a/2-m),E===0&&(b=b-a/2-m),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),C%n.slidesPerGroup===0&&p.push(b),v.push(b)):(n.roundLengths&&(b=Math.floor(b)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&p.push(b),v.push(b),b=b+A+m),e.virtualSize+=A+m,S=A,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+w,o&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),T&&e.grid.updateWrapperSize(A,p),!n.centeredSlides){const E=[];for(let P=0;P<p.length;P+=1){let z=p[P];n.roundLengths&&(z=Math.floor(z)),p[P]<=e.virtualSize-a&&E.push(z)}p=E,Math.floor(e.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-a)}if(l&&n.loop){const E=g[0]+m;if(n.slidesPerGroup>1){const P=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),z=E*n.slidesPerGroup;for(let I=0;I<P;I+=1)p.push(p[p.length-1]+z)}for(let P=0;P<e.virtual.slidesBefore+e.virtual.slidesAfter;P+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+E),v.push(v[v.length-1]+E),e.virtualSize+=E}if(p.length===0&&(p=[0]),m!==0){const E=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((P,z)=>!n.cssMode||n.loop?!0:z!==u.length-1).forEach(P=>{P.style[E]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;g.forEach(z=>{E+=z+(m||0)}),E-=m;const P=E>a?E-a:0;p=p.map(z=>z<=0?-y:z>P?P+w:z)}if(n.centerInsufficientSlides){let E=0;g.forEach(z=>{E+=z+(m||0)}),E-=m;const P=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(E+P<a){const z=(a-E-P)/2;p.forEach((I,D)=>{p[D]=I-z}),v.forEach((I,D)=>{v[D]=I+z})}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:v,slidesSizesGrid:g}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ls(r,"--swiper-centered-offset-before",`${-p[0]}px`),ls(r,"--swiper-centered-offset-after",`${e.size/2-g[g.length-1]/2}px`);const E=-e.snapGrid[0],P=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(z=>z+E),e.slidesGrid=e.slidesGrid.map(z=>z+P)}if(f!==d&&e.emit("slidesLengthChange"),p.length!==x&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,P=e.el.classList.contains(E);f<=n.maxBackfaceHiddenSlides?P||e.el.classList.add(E):P&&e.el.classList.remove(E)}}function _C(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const s=t.activeIndex+a;if(s>t.slides.length&&!r)break;n.push(o(s))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const s=n[a].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function zC(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const bg=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function LC(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const d=r[l];let u=d.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const f=(o+(n.centeredSlides?t.minTranslate():0)-u)/(d.swiperSlideSize+s),p=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-u)/(d.swiperSlideSize+s),v=-(o-u),g=v+t.slidesSizesGrid[l],y=v>=0&&v<=t.size-t.slidesSizesGrid[l],w=v>=0&&v<t.size-1||g>1&&g<=t.size||v<=0&&g>=t.size;w&&(t.visibleSlides.push(d),t.visibleSlidesIndexes.push(l)),bg(d,w,n.slideVisibleClass),bg(d,y,n.slideFullyVisibleClass),d.progress=i?-f:f,d.originalProgress=i?-p:p}}function MC(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t;const l=a,d=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;a=u||i<=0,o=f||i>=1,u&&(i=0),f&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[u],v=t.slidesGrid[f],g=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=p?s=(y-p)/g:s=(y+g-v)/g,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!l&&t.emit("reachBeginning toEdge"),o&&!d&&t.emit("reachEnd toEdge"),(l&&!a||d&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}const wd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function OC(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=f=>vn(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let l,d,u;if(a)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${f}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter(f=>f.column===i)[0],u=t.filter(f=>f.column===i+1)[0],d=t.filter(f=>f.column===i-1)[0]):l=t[i];l&&(o||(u=wC(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),d=yC(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d===0&&(d=t[t.length-1]))),t.forEach(f=>{wd(f,f===l,n.slideActiveClass),wd(f,f===u,n.slideNextClass),wd(f,f===d,n.slidePrevClass)}),e.emitSlidesClasses()}const Ls=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},bd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},tf=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,s=[o-t];s.push(...Array.from({length:t}).map((l,d)=>o+r+d)),e.slides.forEach((l,d)=>{s.includes(l.column)&&bd(e,d)});return}const a=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=a+t;o+=1){const s=(o%n+n)%n;(s<i||s>a)&&bd(e,s)}else for(let o=Math.max(i-t,0);o<=Math.min(a+t,n-1);o+=1)o!==i&&(o>a||o<i)&&bd(e,o)};function RC(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?r>=t[a]&&r<t[a+1]-(t[a+1]-t[a])/2?i=a:r>=t[a]&&r<t[a+1]&&(i=a+1):r>=t[a]&&(i=a);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function IC(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t;let l=e,d;const u=v=>{let g=v-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=RC(t)),r.indexOf(n)>=0)d=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);d=v+Math.floor((l-v)/i.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),l===a&&!t.params.loop){d!==s&&(t.snapIndex=d,t.emit("snapIndexChange"));return}if(l===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(l);return}const f=t.grid&&i.grid&&i.grid.rows>1;let p;if(t.virtual&&i.virtual.enabled&&i.loop)p=u(l);else if(f){const v=t.slides.filter(y=>y.column===l)[0];let g=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(v),0)),p=Math.floor(g/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?p=parseInt(v,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:s,snapIndex:d,previousRealIndex:o,realIndex:p,previousIndex:a,activeIndex:l}),t.initialized&&tf(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function DC(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let a=!1,o;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){a=!0,o=s;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var NC={updateSize:PC,updateSlides:GC,updateAutoHeight:_C,updateSlidesOffset:zC,updateSlidesProgress:LC,updateProgress:MC,updateSlidesClasses:OC,updateActiveIndex:IC,updateClickedSlide:DC};function VC(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=gC(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function FC(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n;let s=0,l=0;const d=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${l}px, ${d}px)`);let u;const f=n.maxTranslate()-n.minTranslate();f===0?u=0:u=(e-n.minTranslate())/f,u!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function BC(){return-this.snapGrid[0]}function $C(){return-this.snapGrid[this.snapGrid.length-1]}function UC(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),d=a.maxTranslate();let u;if(r&&e>l?u=l:r&&e<d?u=d:u=e,a.updateProgress(u),o.cssMode){const f=a.isHorizontal();if(t===0)s[f?"scrollLeft":"scrollTop"]=-u;else{if(!a.support.smoothScroll)return Dw({swiper:a,targetPosition:-u,side:f?"left":"top"}),!0;s.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(p){!a||a.destroyed||p.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var HC={getTranslate:VC,setTranslate:FC,minTranslate:BC,maxTranslate:$C,translateTo:UC};function qC(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Bw(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:a,previousIndex:o}=t;let s=r;if(s||(a>o?s="next":a<o?s="prev":s="reset"),t.emit(`transition${i}`),n&&a!==o){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function WC(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Bw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function YC(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Bw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var KC={setTransition:qC,transitionStart:WC,transitionEnd:YC};function XC(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;let o=e;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:d,previousIndex:u,activeIndex:f,rtlTranslate:p,wrapperEl:v,enabled:g}=a;if(!g&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=a.params.speed);const y=Math.min(a.params.slidesPerGroupSkip,o);let w=y+Math.floor((o-y)/a.params.slidesPerGroup);w>=l.length&&(w=l.length-1);const x=-l[w];if(s.normalizeSlideIndex)for(let S=0;S<d.length;S+=1){const C=-Math.floor(x*100),T=Math.floor(d[S]*100),A=Math.floor(d[S+1]*100);typeof d[S+1]<"u"?C>=T&&C<A-(A-T)/2?o=S:C>=T&&C<A&&(o=S+1):C>=T&&(o=S)}if(a.initialized&&o!==f&&(!a.allowSlideNext&&(p?x>a.translate&&x>a.minTranslate():x<a.translate&&x<a.minTranslate())||!a.allowSlidePrev&&x>a.translate&&x>a.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(x);let h;o>f?h="next":o<f?h="prev":h="reset";const m=a.virtual&&a.params.virtual.enabled;if(!(m&&i)&&(p&&-x===a.translate||!p&&x===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!=="slide"&&a.setTranslate(x),h!=="reset"&&(a.transitionStart(n,h),a.transitionEnd(n,h)),!1;if(s.cssMode){const S=a.isHorizontal(),C=p?x:-x;if(t===0)m&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),m&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[S?"scrollLeft":"scrollTop"]=C})):v[S?"scrollLeft":"scrollTop"]=C,m&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return Dw({swiper:a,targetPosition:C,side:S?"left":"top"}),!0;v.scrollTo({[S?"left":"top"]:C,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(x),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,h),t===0?a.transitionEnd(n,h):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(C){!a||a.destroyed||C.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,h))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function QC(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const a=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let s;if(a){const p=o*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===p)[0].column}else s=i.getSlideIndexByData(o);const l=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:d}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),d&&u%2===0&&(u=u+1));let f=l-s<u;if(d&&(f=f||s<Math.ceil(u/2)),r&&d&&i.params.slidesPerView!=="auto"&&!a&&(f=!1),f){const p=d?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?s+1:s-l+1,slideRealIndex:p==="next"?i.realIndex:void 0})}if(a){const p=o*i.params.grid.rows;o=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===p)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function JC(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<a.slidesPerGroupSkip?1:s,d=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!d&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function ZC(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:l,animating:d}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(d&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=s?r.translate:-r.translate;function p(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const v=p(f),g=a.map(x=>p(x));let y=a[g.indexOf(v)-1];if(typeof y>"u"&&i.cssMode){let x;a.forEach((h,m)=>{v>=h&&(x=m)}),typeof x<"u"&&(y=a[x>0?x-1:x])}let w=0;if(typeof y<"u"&&(w=o.indexOf(y),w<0&&(w=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(w=w-r.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),i.rewind&&r.isBeginning){const x=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(x,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(w,e,t,n)}),!0;return r.slideTo(w,e,t,n)}function ek(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function tk(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let a=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const d=i.snapGrid[s],u=i.snapGrid[s+1];l-d>(u-d)*r&&(a+=i.params.slidesPerGroup)}else{const d=i.snapGrid[s-1],u=i.snapGrid[s];l-d<=(u-d)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function nk(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,a;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(vn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),Zu(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(vn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),Zu(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var rk={slideTo:XC,slideToLoop:QC,slideNext:JC,slidePrev:ZC,slideReset:ek,slideToClosest:tk,slideToClickedSlide:nk};function ik(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{vn(r,`.${n.slideClass}, swiper-slide`).forEach((f,p)=>{f.setAttribute("data-swiper-slide-index",p)})},a=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(a?n.grid.rows:1),s=t.slides.length%o!==0,l=a&&t.slides.length%n.grid.rows!==0,d=u=>{for(let f=0;f<u;f+=1){const p=t.isElement?wo("swiper-slide",[n.slideBlankClass]):wo("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(p)}};if(s){if(n.loopAddBlankSlides){const u=o-t.slides.length%o;d(u),t.recalcSlides(),t.updateSlides()}else kl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const u=n.grid.rows-t.slides.length%n.grid.rows;d(u),t.recalcSlides(),t.updateSlides()}else kl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function ak(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,byController:o,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:f,slidesEl:p,params:v}=l,{centeredSlides:g}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=f,l.emit("loopFix");return}let y=v.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(v.slidesPerView,10)),g&&y%2===0&&(y=y+1));const w=v.slidesPerGroupAuto?y:v.slidesPerGroup;let x=w;x%w!==0&&(x+=w-x%w),x+=v.loopAdditionalSlides,l.loopedSlides=x;const h=l.grid&&v.grid&&v.grid.rows>1;d.length<y+x?kl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&v.grid.fill==="row"&&kl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],b=[];let S=l.activeIndex;typeof a>"u"?a=l.getSlideIndex(d.filter(I=>I.classList.contains(v.slideActiveClass))[0]):S=a;const C=r==="next"||!r,T=r==="prev"||!r;let A=0,G=0;const E=h?Math.ceil(d.length/v.grid.rows):d.length,z=(h?d[a].column:a)+(g&&typeof i>"u"?-y/2+.5:0);if(z<x){A=Math.max(x-z,w);for(let I=0;I<x-z;I+=1){const D=I-Math.floor(I/E)*E;if(h){const q=E-D-1;for(let Z=d.length-1;Z>=0;Z-=1)d[Z].column===q&&m.push(Z)}else m.push(E-D-1)}}else if(z+y>E-x){G=Math.max(z-(E-x*2),w);for(let I=0;I<G;I+=1){const D=I-Math.floor(I/E)*E;h?d.forEach((q,Z)=>{q.column===D&&b.push(Z)}):b.push(D)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),T&&m.forEach(I=>{d[I].swiperLoopMoveDOM=!0,p.prepend(d[I]),d[I].swiperLoopMoveDOM=!1}),C&&b.forEach(I=>{d[I].swiperLoopMoveDOM=!0,p.append(d[I]),d[I].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&T||b.length>0&&C)&&l.slides.forEach((I,D)=>{l.grid.updateSlide(D,I,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&T){if(typeof t>"u"){const I=l.slidesGrid[S],q=l.slidesGrid[S+A]-I;s?l.setTranslate(l.translate-q):(l.slideTo(S+Math.ceil(A),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else if(i){const I=h?m.length/v.grid.rows:m.length;l.slideTo(l.activeIndex+I,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(b.length>0&&C)if(typeof t>"u"){const I=l.slidesGrid[S],q=l.slidesGrid[S-G]-I;s?l.setTranslate(l.translate-q):(l.slideTo(S-G,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else{const I=h?b.length/v.grid.rows:b.length;l.slideTo(l.activeIndex-I,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=f,l.controller&&l.controller.control&&!o){const I={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...I,slideTo:D.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...I,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function ok(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const a=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[a]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var sk={loopCreate:ik,loopFix:ak,loopDestroy:ok};function lk(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function ck(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var dk={setGrabCursor:lk,unsetGrabCursor:ck};function uk(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Vn()||r===Rt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Sg(e,t,n){const r=Rt(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a==="prevent"?(t.preventDefault(),!0):!1:!0}function fk(e){const t=this,n=Vn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Sg(t,r,r.targetTouches[0].pageX);return}const{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=r.target;if(a.touchEventsTarget==="wrapper"&&!xC(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const d=!!a.noSwipingClass&&a.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const f=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,p=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(p?uk(f,l):l.closest(f))){t.allowClick=!0;return}if(a.swipeHandler&&!l.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const v=o.currentX,g=o.currentY;if(!Sg(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=g,i.touchStartTime=Cl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||w)&&!l.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function pk(e){const t=Vn(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let d;if(l.type==="touchmove"){if(d=[...l.changedTouches].filter(C=>C.identifier===r.touchId)[0],!d||d.identifier!==r.touchId)return}else d=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=d.pageX,f=d.pageY;if(l.preventedByNestedSwiper){a.startX=u,a.startY=f;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:f,currentX:u,currentY:f}),r.touchStartTime=Cl());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<a.startY&&n.translate<=n.maxTranslate()||f>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=f;const p=a.currentX-a.startX,v=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(p**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:p*p+v*v>=25&&(C=Math.atan2(Math.abs(v),Math.abs(p))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>i.touchAngle:90-C>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let g=n.isHorizontal()?p:v,y=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),a.diff=g,g*=i.touchRatio,o&&(g=-g,y=-y);const w=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const x=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(x&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&x&&h&&Math.abs(g)>=1){Object.assign(a,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let b=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),g>0?(x&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**S))):g<0&&(x&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**S))),b&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function hk(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:s,rtlTranslate:l,slidesGrid:d,enabled:u}=t;if(!u||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=Cl(),p=f-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),p<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Cl(),Zu(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(o.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const g=v>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let S=0;S<d.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[S+C]<"u"?(g||v>=d[S]&&v<d[S+C])&&(y=S,w=d[S+C]-d[S]):(g||v>=d[S])&&(y=S,w=d[d.length-1]-d[d.length-2])}let x=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(x=0));const m=(v-d[y])/w,b=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?x:y+b):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+b):h!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+b):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(x!==null?x:y+b),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function jg(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function mk(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function gk(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const a=e.maxTranslate()-e.minTranslate();a===0?i=0:i=(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function vk(e){const t=this;Ls(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function xk(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const $w=(e,t)=>{const n=Vn(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",d=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&a[l]("scroll",e.onScroll),r.updateOnWindowResize?e[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",jg,!0):e[d]("observerUpdate",jg,!0),i[l]("load",e.onLoad,{capture:!0}))};function yk(){const e=this,{params:t}=e;e.onTouchStart=fk.bind(e),e.onTouchMove=pk.bind(e),e.onTouchEnd=hk.bind(e),e.onDocumentTouchStart=xk.bind(e),t.cssMode&&(e.onScroll=gk.bind(e)),e.onClick=mk.bind(e),e.onLoad=vk.bind(e),$w(e,"on")}function wk(){$w(this,"off")}var bk={attachEvents:yk,detachEvents:wk};const Cg=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Sk(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in a?a[o]:void 0)||e.originalParams,d=Cg(e,r),u=Cg(e,l),f=e.params.grabCursor,p=l.grabCursor,v=r.enabled;d&&!u?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&u&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),f&&!p?e.unsetGrabCursor():!f&&p&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const b=r[m]&&r[m].enabled,S=l[m]&&l[m].enabled;b&&!S&&e[m].disable(),!b&&S&&e[m].enable()});const g=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||g),w=r.loop;g&&n&&e.changeDirection(),Et(e.params,l);const x=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!x?e.disable():!v&&x&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!w&&h?(e.loopCreate(t),e.updateSlides()):w&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function jk(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Rt(),a=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:a*l,point:s}}return{value:s,point:s}});o.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<o.length;s+=1){const{point:l,value:d}=o[s];t==="window"?i.matchMedia(`(min-width: ${d}px)`).matches&&(r=l):d<=n.clientWidth&&(r=l)}return r||"max"}var Ck={setBreakpoint:Sk,getBreakpoint:jk};function kk(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function Tk(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=kk(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function Ak(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var Ek={addClasses:Tk,removeClasses:Ak};function Pk(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,a=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Gk={checkOverflow:Pk},nf={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function _k(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],a=r[i];if(typeof a!="object"||a===null){Et(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in a)){Et(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Et(t,r)}}const Sd={eventsEmitter:EC,update:NC,translate:HC,transition:KC,slide:rk,loop:sk,grabCursor:dk,events:bk,breakpoints:Ck,checkOverflow:Gk,classes:Ek},jd={};let eh=class An{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Et({},n),t&&!n.el&&(n.el=t);const o=Vn();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const u=[];return o.querySelectorAll(n.el).forEach(f=>{const p=Et({},n,{el:f});u.push(new An(p))}),u}const s=this;s.__swiper__=!0,s.support=Vw(),s.device=Fw({userAgent:n.userAgent}),s.browser=kC(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(u=>{u({params:n,swiper:s,extendParams:_k(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const d=Et({},nf,l);return s.params=Et({},d,jd,n),s.originalParams=Et({},s.params),s.passedParams=Et({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(u=>{s.on(u,s.params.on[u])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=vn(n,`.${r.slideClass}, swiper-slide`),a=Tl(i[0]);return Tl(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=vn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:a,slidesGrid:o,slidesSizesGrid:s,size:l,activeIndex:d}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=a[d]?Math.ceil(a[d].swiperSlideSize):0,p;for(let v=d+1;v<a.length;v+=1)a[v]&&!p&&(f+=Math.ceil(a[v].swiperSlideSize),u+=1,f>l&&(p=!0));for(let v=d-1;v>=0;v-=1)a[v]&&!p&&(f+=a[v].swiperSlideSize,u+=1,f>l&&(p=!0))}else if(t==="current")for(let f=d+1;f<a.length;f+=1)(n?o[f]+s[f]-o[d]<l:o[f]-o[d]<l)&&(u+=1);else for(let f=d-1;f>=0;f-=1)o[d]-o[f]<l&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Ls(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(o.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):vn(r,i())[0];return!o&&n.params.createElements&&(o=wo("div",n.params.wrapperClass),r.append(o),vn(r,`.${n.params.slideClass}`).forEach(s=>{o.append(s)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||ar(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||ar(r,"direction")==="rtl"),wrongRTL:ar(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(a=>{a.complete?Ls(n,a):a.addEventListener("load",o=>{Ls(n,o.target)})}),tf(n),n.initialized=!0,tf(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:a,wrapperEl:o,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),o&&o.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),hC(r)),r.destroyed=!0),null}static extendDefaults(t){Et(jd,t)}static get extendedDefaults(){return jd}static get defaults(){return nf}static installModule(t){An.prototype.__modules__||(An.prototype.__modules__=[]);const n=An.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>An.installModule(n)),An):(An.installModule(t),An)}};Object.keys(Sd).forEach(e=>{Object.keys(Sd[e]).forEach(t=>{eh.prototype[t]=Sd[e][t]})});eh.use([TC,AC]);const Uw=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Jr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ri(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Jr(t[r])&&Jr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ri(e[r],t[r]):e[r]=t[r]})}function Hw(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function qw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Ww(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Yw(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function zk(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function Lk(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:a,prevEl:o,scrollbarEl:s,paginationEl:l}=e;const d=i.filter(G=>G!=="children"&&G!=="direction"&&G!=="wrapperClass"),{params:u,pagination:f,navigation:p,scrollbar:v,virtual:g,thumbs:y}=t;let w,x,h,m,b,S,C,T;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(w=!0),i.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(x=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(u.scrollbar||u.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||a)&&(u.navigation||u.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(b=!0);const A=G=>{t[G]&&(t[G].destroy(),G==="navigation"?(t.isElement&&(t[G].prevEl.remove(),t[G].nextEl.remove()),u[G].prevEl=void 0,u[G].nextEl=void 0,t[G].prevEl=void 0,t[G].nextEl=void 0):(t.isElement&&t[G].el.remove(),u[G].el=void 0,t[G].el=void 0))};i.includes("loop")&&t.isElement&&(u.loop&&!r.loop?S=!0:!u.loop&&r.loop?C=!0:T=!0),d.forEach(G=>{if(Jr(u[G])&&Jr(r[G]))Object.assign(u[G],r[G]),(G==="navigation"||G==="pagination"||G==="scrollbar")&&"enabled"in r[G]&&!r[G].enabled&&A(G);else{const E=r[G];(E===!0||E===!1)&&(G==="navigation"||G==="pagination"||G==="scrollbar")?E===!1&&A(G):u[G]=r[G]}}),d.includes("controller")&&!x&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),i.includes("children")&&n&&g&&u.virtual.enabled?(g.slides=n,g.update(!0)):i.includes("virtual")&&g&&u.virtual.enabled&&(n&&(g.slides=n),g.update(!0)),i.includes("children")&&n&&u.loop&&(T=!0),w&&y.init()&&y.update(!0),x&&(t.controller.control=u.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(u.pagination.el=l),f.init(),f.render(),f.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(u.scrollbar.el=s),v.init(),v.updateSize(),v.setTranslate()),b&&(t.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=t.hostEl.constructor.nextButtonSvg,a.part.add("button-next"),t.el.appendChild(a)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),a&&(u.navigation.nextEl=a),o&&(u.navigation.prevEl=o),p.init(),p.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||T)&&t.loopDestroy(),(C||T)&&t.loopCreate(),t.update()}function Mk(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Ri(n,nf),n._emitClasses=!0,n.init=!1;const a={},o=Uw.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?Jr(e[l])?(n[l]={},i[l]={},Ri(n[l],e[l]),Ri(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:a[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:a,events:r}}function Ok(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:a,scrollbarEl:o,swiper:s}=e;Hw(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),qw(t)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),Ww(t)&&o&&(s.params.scrollbar.el=o,s.originalParams.scrollbar.el=o),s.init(n)}function Rk(e,t,n,r,i){const a=[];if(!t)return a;const o=l=>{a.indexOf(l)<0&&a.push(l)};if(n&&r){const l=r.map(i),d=n.map(i);l.join("")!==d.join("")&&o("children"),r.length!==n.length&&o("children")}return Uw.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Jr(e[l])&&Jr(t[l])){const d=Object.keys(e[l]),u=Object.keys(t[l]);d.length!==u.length?o(l):(d.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}),u.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}))}else e[l]!==t[l]&&o(l)}),a}const Ik=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Al.apply(this,arguments)}function Kw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Xw(e){const t=[];return te.Children.toArray(e).forEach(n=>{Kw(n)?t.push(n):n.props&&n.props.children&&Xw(n.props.children).forEach(r=>t.push(r))}),t}function Dk(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return te.Children.toArray(e).forEach(r=>{if(Kw(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Xw(r.props.children);i.length>0?i.forEach(a=>t.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Nk(e,t,n){if(!n)return null;const r=u=>{let f=u;return u<0?f=t.length+u:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,d=[];for(let u=s;u<l;u+=1)u>=a&&u<=o&&d.push(t[r(u)]);return d.map((u,f)=>te.cloneElement(u,{swiper:e,style:i,key:u.props.virtualIndex||u.key||`slide-${f}`}))}function Ya(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const kg=j.createContext(null),Vk=j.createContext(null),on=j.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:a,onSwiper:o,...s}=e===void 0?{}:e,l=!1;const[d,u]=j.useState("swiper"),[f,p]=j.useState(null),[v,g]=j.useState(!1),y=j.useRef(!1),w=j.useRef(null),x=j.useRef(null),h=j.useRef(null),m=j.useRef(null),b=j.useRef(null),S=j.useRef(null),C=j.useRef(null),T=j.useRef(null),{params:A,passedParams:G,rest:E,events:P}=Mk(s),{slides:z,slots:I}=Dk(a),D=()=>{g(!v)};Object.assign(A.on,{_containerClasses(V,$){u($)}});const q=()=>{Object.assign(A.on,P),l=!0;const V={...A};if(delete V.wrapperClass,x.current=new eh(V),x.current.virtual&&x.current.params.virtual.enabled){x.current.virtual.slides=z;const $={cache:!1,slides:z,renderExternal:p,renderExternalUpdate:!1};Ri(x.current.params.virtual,$),Ri(x.current.originalParams.virtual,$)}};w.current||q(),x.current&&x.current.on("_beforeBreakpoint",D);const Z=()=>{l||!P||!x.current||Object.keys(P).forEach(V=>{x.current.on(V,P[V])})},K=()=>{!P||!x.current||Object.keys(P).forEach(V=>{x.current.off(V,P[V])})};j.useEffect(()=>()=>{x.current&&x.current.off("_beforeBreakpoint",D)}),j.useEffect(()=>{!y.current&&x.current&&(x.current.emitSlidesClasses(),y.current=!0)}),Ya(()=>{if(t&&(t.current=w.current),!!w.current)return x.current.destroyed&&q(),Ok({el:w.current,nextEl:b.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:T.current,swiper:x.current},A),o&&!x.current.destroyed&&o(x.current),()=>{x.current&&!x.current.destroyed&&x.current.destroy(!0,!1)}},[]),Ya(()=>{Z();const V=Rk(G,h.current,z,m.current,$=>$.key);return h.current=G,m.current=z,V.length&&x.current&&!x.current.destroyed&&Lk({swiper:x.current,slides:z,passedParams:G,changedParams:V,nextEl:b.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:C.current}),()=>{K()}}),Ya(()=>{Ik(x.current)},[f]);function M(){return A.virtual?Nk(x.current,z,f):z.map((V,$)=>te.cloneElement(V,{swiper:x.current,swiperSlideIndex:$}))}return te.createElement(r,Al({ref:w,className:Yw(`${d}${n?` ${n}`:""}`)},E),te.createElement(Vk.Provider,{value:x.current},I["container-start"],te.createElement(i,{className:zk(A.wrapperClass)},I["wrapper-start"],M(),I["wrapper-end"]),Hw(A)&&te.createElement(te.Fragment,null,te.createElement("div",{ref:S,className:"swiper-button-prev"}),te.createElement("div",{ref:b,className:"swiper-button-next"})),Ww(A)&&te.createElement("div",{ref:T,className:"swiper-scrollbar"}),qw(A)&&te.createElement("div",{ref:C,className:"swiper-pagination"}),I["container-end"]))});on.displayName="Swiper";const sn=j.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:a,zoom:o,lazy:s,virtualIndex:l,swiperSlideIndex:d,...u}=e===void 0?{}:e;const f=j.useRef(null),[p,v]=j.useState("swiper-slide"),[g,y]=j.useState(!1);function w(b,S,C){S===f.current&&v(C)}Ya(()=>{if(typeof d<"u"&&(f.current.swiperSlideIndex=d),t&&(t.current=f.current),!(!f.current||!a)){if(a.destroyed){p!=="swiper-slide"&&v("swiper-slide");return}return a.on("_slideClass",w),()=>{a&&a.off("_slideClass",w)}}}),Ya(()=>{a&&f.current&&!a.destroyed&&v(a.getSlideClasses(f.current))},[a]);const x={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(x):r,m=()=>{y(!0)};return te.createElement(n,Al({ref:f,className:Yw(`${p}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},u),o&&te.createElement(kg.Provider,{value:x},te.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},h(),s&&!g&&te.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&te.createElement(kg.Provider,{value:x},h(),s&&!g&&te.createElement("div",{className:"swiper-lazy-preloader"})))});sn.displayName="SwiperSlide";function Qw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=vn(e.el,`.${r[i]}`)[0];a||(a=wo("div",r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function Cr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function a(g){let y;return g&&typeof g=="string"&&t.isElement&&(y=t.el.querySelector(g)||t.hostEl.querySelector(g),y)?y:(g&&(typeof g=="string"&&(y=[...document.querySelectorAll(g)]),t.params.uniqueNavElements&&typeof g=="string"&&y&&y.length>1&&t.el.querySelectorAll(g).length===1?y=t.el.querySelector(g):y&&y.length===1&&(y=y[0])),g&&!y?g:y)}function o(g,y){const w=t.params.navigation;g=We(g),g.forEach(x=>{x&&(x.classList[y?"add":"remove"](...w.disabledClass.split(" ")),x.tagName==="BUTTON"&&(x.disabled=y),t.params.watchOverflow&&t.enabled&&x.classList[t.isLocked?"add":"remove"](w.lockClass))})}function s(){const{nextEl:g,prevEl:y}=t.navigation;if(t.params.loop){o(y,!1),o(g,!1);return}o(y,t.isBeginning&&!t.params.rewind),o(g,t.isEnd&&!t.params.rewind)}function l(g){g.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function d(g){g.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function u(){const g=t.params.navigation;if(t.params.navigation=Qw(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let y=a(g.nextEl),w=a(g.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:w}),y=We(y),w=We(w);const x=(h,m)=>{h&&h.addEventListener("click",m==="next"?d:l),!t.enabled&&h&&h.classList.add(...g.lockClass.split(" "))};y.forEach(h=>x(h,"next")),w.forEach(h=>x(h,"prev"))}function f(){let{nextEl:g,prevEl:y}=t.navigation;g=We(g),y=We(y);const w=(x,h)=>{x.removeEventListener("click",h==="next"?d:l),x.classList.remove(...t.params.navigation.disabledClass.split(" "))};g.forEach(x=>w(x,"next")),y.forEach(x=>w(x,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(u(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{f()}),r("enable disable",()=>{let{nextEl:g,prevEl:y}=t.navigation;if(g=We(g),y=We(y),t.enabled){s();return}[...g,...y].filter(w=>!!w).forEach(w=>w.classList.add(t.params.navigation.lockClass))}),r("click",(g,y)=>{let{nextEl:w,prevEl:x}=t.navigation;w=We(w),x=We(x);const h=y.target;let m=x.includes(h)||w.includes(h);if(t.isElement&&!m){const b=y.path||y.composedPath&&y.composedPath();b&&(m=b.find(S=>w.includes(S)||x.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let b;w.length?b=w[0].classList.contains(t.params.navigation.hiddenClass):x.length&&(b=x[0].classList.contains(t.params.navigation.hiddenClass)),i(b===!0?"navigationShow":"navigationHide"),[...w,...x].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const p=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),s()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(t.navigation,{enable:p,disable:v,update:s,init:u,destroy:f})}function Ca(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function kr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let o,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function d(h,m){const{bulletActiveClass:b}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${b}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${b}-${m}-${m}`)))}function u(h,m,b){if(h=h%b,m=m%b,m===h+1)return"next";if(m===h-1)return"previous"}function f(h){const m=h.target.closest(Ca(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const b=Tl(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===b)return;const S=u(t.realIndex,b,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(b)}else t.slideTo(b)}function p(){const h=t.rtl,m=t.params.pagination;if(l())return;let b=t.pagination.el;b=We(b);let S,C;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,A=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const G=t.pagination.bullets;let E,P,z;if(m.dynamicBullets&&(o=ef(G[0],t.isHorizontal()?"width":"height"),b.forEach(I=>{I.style[t.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&C!==void 0&&(s+=S-(C||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),E=Math.max(S-s,0),P=E+(Math.min(G.length,m.dynamicMainBullets)-1),z=(P+E)/2),G.forEach(I=>{const D=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(q=>`${m.bulletActiveClass}${q}`)].map(q=>typeof q=="string"&&q.includes(" ")?q.split(" "):q).flat();I.classList.remove(...D)}),b.length>1)G.forEach(I=>{const D=Tl(I);D===S?I.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&I.setAttribute("part","bullet"),m.dynamicBullets&&(D>=E&&D<=P&&I.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),D===E&&d(I,"prev"),D===P&&d(I,"next"))});else{const I=G[S];if(I&&I.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&G.forEach((D,q)=>{D.setAttribute("part",q===S?"bullet-active":"bullet")}),m.dynamicBullets){const D=G[E],q=G[P];for(let Z=E;Z<=P;Z+=1)G[Z]&&G[Z].classList.add(...`${m.bulletActiveClass}-main`.split(" "));d(D,"prev"),d(q,"next")}}if(m.dynamicBullets){const I=Math.min(G.length,m.dynamicMainBullets+4),D=(o*I-o)/2-z*o,q=h?"right":"left";G.forEach(Z=>{Z.style[t.isHorizontal()?q:"top"]=`${D}px`})}}b.forEach((G,E)=>{if(m.type==="fraction"&&(G.querySelectorAll(Ca(m.currentClass)).forEach(P=>{P.textContent=m.formatFractionCurrent(S+1)}),G.querySelectorAll(Ca(m.totalClass)).forEach(P=>{P.textContent=m.formatFractionTotal(A)})),m.type==="progressbar"){let P;m.progressbarOpposite?P=t.isHorizontal()?"vertical":"horizontal":P=t.isHorizontal()?"horizontal":"vertical";const z=(S+1)/A;let I=1,D=1;P==="horizontal"?I=z:D=z,G.querySelectorAll(Ca(m.progressbarFillClass)).forEach(q=>{q.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${D})`,q.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(G.innerHTML=m.renderCustom(t,S+1,A),E===0&&i("paginationRender",G)):(E===0&&i("paginationRender",G),i("paginationUpdate",G)),t.params.watchOverflow&&t.enabled&&G.classList[t.isLocked?"add":"remove"](m.lockClass)})}function v(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let b=t.pagination.el;b=We(b);let S="";if(h.type==="bullets"){let C=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>m&&(C=m);for(let T=0;T<C;T+=1)h.renderBullet?S+=h.renderBullet.call(t,T,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],b.forEach(C=>{h.type!=="custom"&&(C.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(Ca(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",b[0])}function g(){t.params.pagination=Qw(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(b=>Nw(b,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=We(m),m.forEach(b=>{h.type==="bullets"&&h.clickable&&b.classList.add(...(h.clickableClass||"").split(" ")),b.classList.add(h.modifierClass+h.type),b.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(b.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&b.classList.add(h.progressbarOppositeClass),h.clickable&&b.addEventListener("click",f),t.enabled||b.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=We(m),m.forEach(b=>{b.classList.remove(h.hiddenClass),b.classList.remove(h.modifierClass+h.type),b.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(b.classList.remove(...(h.clickableClass||"").split(" ")),b.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(b=>b.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=We(m),m.forEach(b=>{b.classList.remove(h.horizontalClass,h.verticalClass),b.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?x():(g(),v(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{v(),p()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=We(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(h,m)=>{const b=m.target,S=We(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!b.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&b===t.navigation.nextEl||t.navigation.prevEl&&b===t.navigation.prevEl))return;const C=S[0].classList.contains(t.params.pagination.hiddenClass);i(C===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(t.params.pagination.hiddenClass))}});const w=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=We(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),g(),v(),p()},x=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=We(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:w,disable:x,render:v,update:p,init:g,destroy:y})}function Wn(e){let{swiper:t,extendParams:n,on:r,emit:i,params:a}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,s,l=a&&a.autoplay?a.autoplay.delay:3e3,d=a&&a.autoplay?a.autoplay.delay:3e3,u,f=new Date().getTime(),p,v,g,y,w,x,h;function m(M){!t||t.destroyed||!t.wrapperEl||M.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||M.detail&&M.detail.bySwiperTouchMove)&&E())}const b=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(d=u,p=!1);const M=t.autoplay.paused?u:f+d-new Date().getTime();t.autoplay.timeLeft=M,i("autoplayTimeLeft",M,M/l),s=requestAnimationFrame(()=>{b()})},S=()=>{let M;return t.virtual&&t.params.virtual.enabled?M=t.slides.filter($=>$.classList.contains("swiper-slide-active"))[0]:M=t.slides[t.activeIndex],M?parseInt(M.getAttribute("data-swiper-autoplay"),10):void 0},C=M=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),b();let V=typeof M>"u"?t.params.autoplay.delay:M;l=t.params.autoplay.delay,d=t.params.autoplay.delay;const $=S();!Number.isNaN($)&&$>0&&typeof M>"u"&&(V=$,l=$,d=$),u=V;const X=t.params.speed,ee=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),i("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return V>0?(clearTimeout(o),o=setTimeout(()=>{ee()},V)):requestAnimationFrame(()=>{ee()}),V},T=()=>{f=new Date().getTime(),t.autoplay.running=!0,C(),i("autoplayStart")},A=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(s),i("autoplayStop")},G=(M,V)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),M||(x=!0);const $=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):E()};if(t.autoplay.paused=!0,V){w&&(u=t.params.autoplay.delay),w=!1,$();return}u=(u||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&u<0&&!t.params.loop)&&(u<0&&(u=0),$())},E=()=>{t.isEnd&&u<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),x?(x=!1,C(u)):C(),t.autoplay.paused=!1,i("autoplayResume"))},P=()=>{if(t.destroyed||!t.autoplay.running)return;const M=Vn();M.visibilityState==="hidden"&&(x=!0,G(!0)),M.visibilityState==="visible"&&E()},z=M=>{M.pointerType==="mouse"&&(x=!0,h=!0,!(t.animating||t.autoplay.paused)&&G(!0))},I=M=>{M.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&E())},D=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",z),t.el.addEventListener("pointerleave",I))},q=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",z),t.el.removeEventListener("pointerleave",I))},Z=()=>{Vn().addEventListener("visibilitychange",P)},K=()=>{Vn().removeEventListener("visibilitychange",P)};r("init",()=>{t.params.autoplay.enabled&&(D(),Z(),T())}),r("destroy",()=>{q(),K(),t.autoplay.running&&A()}),r("_freeModeStaticRelease",()=>{(g||x)&&E()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?A():G(!0,!0)}),r("beforeTransitionStart",(M,V,$)=>{t.destroyed||!t.autoplay.running||($||!t.params.autoplay.disableOnInteraction?G(!0,!0):A())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){A();return}v=!0,g=!1,x=!1,y=setTimeout(()=>{x=!0,g=!0,G(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(y),clearTimeout(o),t.params.autoplay.disableOnInteraction){g=!1,v=!1;return}g&&t.params.cssMode&&E(),g=!1,v=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(w=!0)}),Object.assign(t.autoplay,{start:T,stop:A,pause:G,resume:E})}function Fk(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:l,getEffectParams:d}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const f=o?o():{};Object.assign(n.params,f),Object.assign(n.originalParams,f)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(f,p)=>{n.params.effect===t&&a(p)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!d||!d().slideShadows)return;n.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let u;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)}))})}function Bk(e,t){const n=Zp(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Tg(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=Zp(t);let a=i.querySelector(`.${r.split(" ").join(".")}`);return a||(a=wo("div",r.split(" ")),i.append(a)),a}function $k(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Fk({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:o,height:s,slides:l,slidesSizesGrid:d}=t,u=t.params.coverflowEffect,f=t.isHorizontal(),p=t.translate,v=f?-p+o/2:-p+s/2,g=f?u.rotate:-u.rotate,y=u.depth,w=bC(t);for(let x=0,h=l.length;x<h;x+=1){const m=l[x],b=d[x],S=m.swiperSlideOffset,C=(v-S-b/2)/b,T=typeof u.modifier=="function"?u.modifier(C):C*u.modifier;let A=f?g*T:0,G=f?0:g*T,E=-y*Math.abs(T),P=u.stretch;typeof P=="string"&&P.indexOf("%")!==-1&&(P=parseFloat(u.stretch)/100*b);let z=f?0:P*T,I=f?P*T:0,D=1-(1-u.scale)*Math.abs(T);Math.abs(I)<.001&&(I=0),Math.abs(z)<.001&&(z=0),Math.abs(E)<.001&&(E=0),Math.abs(A)<.001&&(A=0),Math.abs(G)<.001&&(G=0),Math.abs(D)<.001&&(D=0);const q=`translate3d(${I}px,${z}px,${E}px)  rotateX(${w(G)}deg) rotateY(${w(A)}deg) scale(${D})`,Z=Bk(u,m);if(Z.style.transform=q,m.style.zIndex=-Math.abs(Math.round(T))+1,u.slideShadows){let K=f?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),M=f?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");K||(K=Tg("coverflow",m,f?"left":"top")),M||(M=Tg("coverflow",m,f?"right":"bottom")),K&&(K.style.opacity=T>0?T:0),M&&(M.style.opacity=-T>0?-T:0)}}},setTransition:o=>{t.slides.map(l=>Zp(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const Uk=k.button`
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
`,th=({text:e,onClick:t,backDefine:n,colorDefine:r})=>c.jsxs(Uk,{id:"clickwpp",backDefine:n,colorDefine:r,onClick:t,children:[e,c.jsx($p,{className:"icon"})]}),Hk=aa`
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
`,qk=jn`
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
`,Wk=k.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 20px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,Yk=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${qk} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,Kk=k.div`
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
`,Xk=k.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,Qk=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,Jk=k.p`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,Zk=k.div`
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
`,eT=k.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,Ag=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>c.jsxs(eT,{children:[c.jsx(Hk,{}),c.jsx(on,{modules:[Cr,kr,Wn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((l,d)=>c.jsx(sn,{children:t==="image"?c.jsx(Wk,{src:l.src,loading:"lazy",alt:l.alt||`Slide ${d+1}`}):c.jsxs(Yk,{backgroundImage:l.backgroundImage,children:[c.jsx(Kk,{}),c.jsxs(Xk,{children:[c.jsx(Qk,{children:l.title}),c.jsx(Jk,{children:l.subtitle}),c.jsx(Zk,{children:l.features.map((u,f)=>c.jsxs("span",{children:[u.icon," ",u.text]},f))}),c.jsx(th,{text:"Conhecer todas as acomodações"})]})]})},d))})]}),Ii=k.button`
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
`,Eg=k.svg`
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

    ${Ii}:hover &.arr-1 {
        right: -25%;
    }

    ${Ii}:hover &.arr-2 {
        left: 16px;
    }

    ${Ii}:hover & {
        fill: var(--color--white);
    }
`,tT=k.span`
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

    ${Ii}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,nT=k.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${Ii}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,st=({text:e,onClick:t,color:n,backgroundColor:r,borderColor:i,hoverColor:a})=>c.jsxs(Ii,{id:"clickwpp",onClick:t,color:n,background:r,borderColor:i,hoverColor:a,children:[c.jsx(Eg,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(nT,{id:"clickwpp",children:e}),c.jsx(tT,{}),c.jsx(Eg,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),rT=jn`
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
`,iT=k.div`
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
    animation: ${rT} 8s ease-in-out infinite;
    pointer-events: none;

    @media (max-width: 768px) {
      animation: none;
      border-top: none;
      border-radius: 0 0 35px 0;
      border: 1px solid var(--color--black);
    }
  }
`,aT=k.h1`
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
`,oT=k.p`
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
`,sT=k.div`
  display: flex;
  width: 100%;
  gap: 25px;

  @media (max-width:768px){
    gap: 15px;
  }
`,lT=k.p`
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
`,Pg=({text:e,title:t,borderColor:n,buttonColor:r,buttonHover:i,buttonBorder:a,targetPage:o,idade:s})=>{const l=Wl(),d=()=>{l(o)},u=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(iT,{borderColor:n,children:[c.jsx(aT,{children:t}),c.jsx(oT,{children:e}),c.jsxs(sT,{children:[c.jsx(st,{onClick:u,text:"Fazer reserva!",backgroundColor:"transparent",borderColor:a,hoverColor:i,border:"1px solid",color:"var(--color--black)"}),c.jsx(st,{onClick:d,text:"Saber mais",backgroundColor:r,borderColor:a,hoverColor:i,border:"1px solid",color:"var(--color--black)"})]}),c.jsx(lT,{children:s})]})};function cT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},child:[]}]})(e)}function nh(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"},child:[]},{tag:"path",attr:{d:"M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function Qe(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 9 12 2 2 9h9v13h2V9z"},child:[]},{tag:"path",attr:{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},child:[]}]})(e)}function dT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function kt(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}function uT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function fT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 9 5 12 1.774-5.226L21 14 9 9z"},child:[]},{tag:"path",attr:{d:"m16.071 16.071 4.243 4.243"},child:[]},{tag:"path",attr:{d:"m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"},child:[]}]})(e)}const pT=k.button`
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
`,Jw=k.div`
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
`,hT=k(Jw)`
  position: absolute;
  inset: 0;
  background-color: ${({hoverColor:e})=>e||"var(--color--blue)"};
  transform: translate(0%, 100%);
`,mT=k.span`
  color: ${({textColor:e})=>e||"var(--color--black)"};
`,gT=k.span`
  color: ${({hoverTextColor:e})=>e||"var(--color--white)"};
`,oa=({text:e="Quick View",text2:t="Clique e reserve",borderColor:n,textColor:r,hoverColor:i,hoverTextColor:a})=>{const o=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(pT,{borderColor:n,textColor:r,onClick:o,id:"clickwpp",children:[c.jsxs(Jw,{className:"default-btn",children:[c.jsx(cT,{size:15,color:r||"var(--color--black)"}),c.jsx(mT,{textColor:r,children:e})]}),c.jsxs(hT,{className:"hover-btn",hoverColor:i,id:"clickwpp",children:[c.jsx(fT,{size:15,color:a||"var(--color--white)"}),c.jsx(gT,{hoverTextColor:a,children:t})]})]})};var Zw={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(e1,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={exports:{},id:a,loaded:!1};return n[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function a(D){return D&&D.__esModule?D:{default:D}}var o=Object.assign||function(D){for(var q=1;q<arguments.length;q++){var Z=arguments[q];for(var K in Z)Object.prototype.hasOwnProperty.call(Z,K)&&(D[K]=Z[K])}return D},s=i(1),l=(a(s),i(6)),d=a(l),u=i(7),f=a(u),p=i(8),v=a(p),g=i(9),y=a(g),w=i(10),x=a(w),h=i(11),m=a(h),b=i(14),S=a(b),C=[],T=!1,A={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},G=function(){var D=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(D&&(T=!0),T)return C=(0,m.default)(C,A),(0,x.default)(C,A.once),C},E=function(){C=(0,S.default)(),G()},P=function(){C.forEach(function(D,q){D.node.removeAttribute("data-aos"),D.node.removeAttribute("data-aos-easing"),D.node.removeAttribute("data-aos-duration"),D.node.removeAttribute("data-aos-delay")})},z=function(D){return D===!0||D==="mobile"&&y.default.mobile()||D==="phone"&&y.default.phone()||D==="tablet"&&y.default.tablet()||typeof D=="function"&&D()===!0},I=function(D){A=o(A,D),C=(0,S.default)();var q=document.all&&!window.atob;return z(A.disable)||q?P():(A.disableMutationObserver||v.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),A.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",A.easing),document.querySelector("body").setAttribute("data-aos-duration",A.duration),document.querySelector("body").setAttribute("data-aos-delay",A.delay),A.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?G(!0):A.startEvent==="load"?window.addEventListener(A.startEvent,function(){G(!0)}):document.addEventListener(A.startEvent,function(){G(!0)}),window.addEventListener("resize",(0,f.default)(G,A.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(G,A.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,x.default)(C,A.once)},A.throttleDelay)),A.disableMutationObserver||v.default.ready("[data-aos]",E),C)};n.exports={init:I,refresh:G,refreshHard:E}},function(n,r){},,,,,function(n,r){(function(i){function a(z,I,D){function q(U){var re=me,ce=Te;return me=Te=void 0,N=U,de=z.apply(ce,re)}function Z(U){return N=U,_=setTimeout(V,I),R?q(U):de}function K(U){var re=U-O,ce=U-N,he=I-re;return Y?E(he,pe-ce):he}function M(U){var re=U-O,ce=U-N;return O===void 0||re>=I||re<0||Y&&ce>=pe}function V(){var U=P();return M(U)?$(U):void(_=setTimeout(V,K(U)))}function $(U){return _=void 0,B&&me?q(U):(me=Te=void 0,de)}function X(){_!==void 0&&clearTimeout(_),N=0,me=O=Te=_=void 0}function ee(){return _===void 0?de:$(P())}function be(){var U=P(),re=M(U);if(me=arguments,Te=this,O=U,re){if(_===void 0)return Z(O);if(Y)return _=setTimeout(V,I),q(O)}return _===void 0&&(_=setTimeout(V,I)),de}var me,Te,pe,de,_,O,N=0,R=!1,Y=!1,B=!0;if(typeof z!="function")throw new TypeError(p);return I=u(I)||0,s(D)&&(R=!!D.leading,Y="maxWait"in D,pe=Y?G(u(D.maxWait)||0,I):pe,B="trailing"in D?!!D.trailing:B),be.cancel=X,be.flush=ee,be}function o(z,I,D){var q=!0,Z=!0;if(typeof z!="function")throw new TypeError(p);return s(D)&&(q="leading"in D?!!D.leading:q,Z="trailing"in D?!!D.trailing:Z),a(z,I,{leading:q,maxWait:I,trailing:Z})}function s(z){var I=typeof z>"u"?"undefined":f(z);return!!z&&(I=="object"||I=="function")}function l(z){return!!z&&(typeof z>"u"?"undefined":f(z))=="object"}function d(z){return(typeof z>"u"?"undefined":f(z))=="symbol"||l(z)&&A.call(z)==g}function u(z){if(typeof z=="number")return z;if(d(z))return v;if(s(z)){var I=typeof z.valueOf=="function"?z.valueOf():z;z=s(I)?I+"":I}if(typeof z!="string")return z===0?z:+z;z=z.replace(y,"");var D=x.test(z);return D||h.test(z)?m(z.slice(2),D?2:8):w.test(z)?v:+z}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},p="Expected a function",v=NaN,g="[object Symbol]",y=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,b=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,S=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,C=b||S||Function("return this")(),T=Object.prototype,A=T.toString,G=Math.max,E=Math.min,P=function(){return C.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){(function(i){function a(P,z,I){function D(B){var U=be,re=me;return be=me=void 0,O=B,pe=P.apply(re,U)}function q(B){return O=B,de=setTimeout(M,z),N?D(B):pe}function Z(B){var U=B-_,re=B-O,ce=z-U;return R?G(ce,Te-re):ce}function K(B){var U=B-_,re=B-O;return _===void 0||U>=z||U<0||R&&re>=Te}function M(){var B=E();return K(B)?V(B):void(de=setTimeout(M,Z(B)))}function V(B){return de=void 0,Y&&be?D(B):(be=me=void 0,pe)}function $(){de!==void 0&&clearTimeout(de),O=0,be=_=me=de=void 0}function X(){return de===void 0?pe:V(E())}function ee(){var B=E(),U=K(B);if(be=arguments,me=this,_=B,U){if(de===void 0)return q(_);if(R)return de=setTimeout(M,z),D(_)}return de===void 0&&(de=setTimeout(M,z)),pe}var be,me,Te,pe,de,_,O=0,N=!1,R=!1,Y=!0;if(typeof P!="function")throw new TypeError(f);return z=d(z)||0,o(I)&&(N=!!I.leading,R="maxWait"in I,Te=R?A(d(I.maxWait)||0,z):Te,Y="trailing"in I?!!I.trailing:Y),ee.cancel=$,ee.flush=X,ee}function o(P){var z=typeof P>"u"?"undefined":u(P);return!!P&&(z=="object"||z=="function")}function s(P){return!!P&&(typeof P>"u"?"undefined":u(P))=="object"}function l(P){return(typeof P>"u"?"undefined":u(P))=="symbol"||s(P)&&T.call(P)==v}function d(P){if(typeof P=="number")return P;if(l(P))return p;if(o(P)){var z=typeof P.valueOf=="function"?P.valueOf():P;P=o(z)?z+"":z}if(typeof P!="string")return P===0?P:+P;P=P.replace(g,"");var I=w.test(P);return I||x.test(P)?h(P.slice(2),I?2:8):y.test(P)?p:+P}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},f="Expected a function",p=NaN,v="[object Symbol]",g=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,x=/^0o[0-7]+$/i,h=parseInt,m=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,b=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,S=m||b||Function("return this")(),C=Object.prototype,T=C.toString,A=Math.max,G=Math.min,E=function(){return S.Date.now()};n.exports=a}).call(r,function(){return this}())},function(n,r){function i(u){var f=void 0,p=void 0;for(f=0;f<u.length;f+=1)if(p=u[f],p.dataset&&p.dataset.aos||p.children&&i(p.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!a()}function s(u,f){var p=window.document,v=a(),g=new v(l);d=f,g.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(f){var p=Array.prototype.slice.call(f.addedNodes),v=Array.prototype.slice.call(f.removedNodes),g=p.concat(v);if(i(g))return d()})}Object.defineProperty(r,"__esModule",{value:!0});var d=function(){};r.default={isSupported:o,ready:s}},function(n,r){function i(p,v){if(!(p instanceof v))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function p(v,g){for(var y=0;y<g.length;y++){var w=g[y];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(v,w.key,w)}}return function(v,g,y){return g&&p(v.prototype,g),y&&p(v,y),v}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function p(){i(this,p)}return o(p,[{key:"phone",value:function(){var v=a();return!(!s.test(v)&&!l.test(v.substr(0,4)))}},{key:"mobile",value:function(){var v=a();return!(!d.test(v)&&!u.test(v.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();r.default=new f},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o,s,l){var d=o.node.getAttribute("data-aos-once");s>o.position?o.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!l&&d!=="true")&&o.node.classList.remove("aos-animate")},a=function(o,s){var l=window.pageYOffset,d=window.innerHeight;o.forEach(function(u,f){i(u,d+l,s)})};r.default=a},function(n,r,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(12),s=a(o),l=function(d,u){return d.forEach(function(f,p){f.node.classList.add("aos-init"),f.position=(0,s.default)(f.node,u.offset)}),d};r.default=l},function(n,r,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(13),s=a(o),l=function(d,u){var f=0,p=0,v=window.innerHeight,g={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(p=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(d=document.querySelectorAll(g.anchor)[0]),f=(0,s.default)(d).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=d.offsetHeight/2;break;case"bottom-bottom":f+=d.offsetHeight;break;case"top-center":f+=v/2;break;case"bottom-center":f+=v/2+d.offsetHeight;break;case"center-center":f+=v/2+d.offsetHeight/2;break;case"top-top":f+=v;break;case"bottom-top":f+=d.offsetHeight+v;break;case"center-top":f+=d.offsetHeight/2+v}return g.anchorPlacement||g.offset||isNaN(u)||(p=u),f+p};r.default=l},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){for(var o=0,s=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)o+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),s+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:s,left:o}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(o){return{node:o}})};r.default=i}])})})(Zw);var vT=Zw.exports;const Ie=ei(vT),xT=aa`
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
`,yT=k.div`
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
`,wT=k.div`
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
`,bT=k.div`
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
`,ST=k.div`
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
`,jT=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0;
    }
`,CT=k.p`
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
`,kT=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=1500,showPagination:i=!0,showNavigation:a=!0})=>{const o=j.useRef([]);return j.useEffect(()=>{o.current&&o.current.forEach(s=>{s&&window.VanillaTilt.init(s,{max:2,speed:400,glare:!1})})},[]),c.jsxs(c.Fragment,{children:[c.jsx(xT,{}),c.jsx(on,{modules:[Cr,kr,Wn,$k],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:300,modifier:1,slideShadows:!0},navigation:a,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((s,l)=>c.jsx(sn,{style:{width:"60%"},children:c.jsxs(yT,{ref:d=>o.current[l]=d,backgroundImage:s.backgroundImage,children:[c.jsx(ST,{children:s.topLeftText}),c.jsx(wT,{}),c.jsxs(bT,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(jT,{children:s.title}),c.jsx(CT,{children:s.description}),c.jsx(oa,{text:"Reservar agora",text2:"Clique e reserve agora",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--green)",hoverTextColor:"var(--color--black)"})]})]})},l))})]})},TT=k(Oe.div)`
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
`,AT=k(Oe.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,ET=k(Oe.div)`
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
`,rf=({images:e=[],reverse:t=!1})=>c.jsx(on,{modules:[Wn],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t,stopOnLastSlide:!1,pauseOnMouseEnter:!0},speed:2e3,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,r)=>c.jsx(sn,{children:c.jsxs(TT,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(AT,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(ET,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),PT=jn`
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
`,GT=k.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    animation: ${PT} 5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`,_T=k.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`,zT=k.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,LT=k.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,MT=k.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,OT=k.div`
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
`,RT=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,IT=k.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,Lo=({events:e=[]})=>c.jsx(on,{modules:[Cr,kr,Wn],autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(sn,{children:c.jsxs(GT,{"data-aos":"fade-up","data-aos-delay":"0",children:[c.jsx(_T,{src:t.image,alt:t.title,"data-aos":"fade-up","data-aos-delay":"100"}),c.jsxs(zT,{children:[c.jsx(LT,{"data-aos":"fade-up","data-aos-delay":"200",children:t.title}),c.jsx(MT,{"data-aos":"fade-down","data-aos-delay":"250",children:t.dateRange}),c.jsx(OT,{"data-aos":"fade-up","data-aos-delay":"300",children:t.features.map((r,i)=>c.jsxs("span",{"data-aos":"fade-up","data-aos-delay":"400",children:[r.icon," ",r.text]},i))}),c.jsx(RT,{children:c.jsxs(IT,{"data-aos":"fade-in","data-aos-delay":"500",children:["A partir de: ",c.jsx("span",{children:"12x"}),"R$",t.price]})}),c.jsx(oa,{text:"Quero fazer minha reserva agora",text2:"Clique e reserve!",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},n))});function DT(e){return J({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function NT(e){return J({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function VT(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function FT(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"},child:[]}]})(e)}function BT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"},child:[]}]})(e)}function $T(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function e2(e,t){return function(){return e.apply(t,arguments)}}const{toString:UT}=Object.prototype,{getPrototypeOf:rh}=Object,cc=(e=>t=>{const n=UT.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=e=>(e=e.toLowerCase(),t=>cc(t)===e),dc=e=>t=>typeof t===e,{isArray:sa}=Array,bo=dc("undefined");function HT(e){return e!==null&&!bo(e)&&e.constructor!==null&&!bo(e.constructor)&&_t(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const t2=ln("ArrayBuffer");function qT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&t2(e.buffer),t}const WT=dc("string"),_t=dc("function"),n2=dc("number"),uc=e=>e!==null&&typeof e=="object",YT=e=>e===!0||e===!1,Ms=e=>{if(cc(e)!=="object")return!1;const t=rh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},KT=ln("Date"),XT=ln("File"),QT=ln("Blob"),JT=ln("FileList"),ZT=e=>uc(e)&&_t(e.pipe),eA=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||_t(e.append)&&((t=cc(e))==="formdata"||t==="object"&&_t(e.toString)&&e.toString()==="[object FormData]"))},tA=ln("URLSearchParams"),[nA,rA,iA,aA]=["ReadableStream","Request","Response","Headers"].map(ln),oA=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),sa(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let s;for(r=0;r<o;r++)s=a[r],t.call(null,e[s],s,e)}}function r2(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Nr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,i2=e=>!bo(e)&&e!==Nr;function af(){const{caseless:e}=i2(this)&&this||{},t={},n=(r,i)=>{const a=e&&r2(t,i)||i;Ms(t[a])&&Ms(r)?t[a]=af(t[a],r):Ms(r)?t[a]=af({},r):sa(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Mo(arguments[r],n);return t}const sA=(e,t,n,{allOwnKeys:r}={})=>(Mo(t,(i,a)=>{n&&_t(i)?e[a]=e2(i,n):e[a]=i},{allOwnKeys:r}),e),lA=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),cA=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dA=(e,t,n,r)=>{let i,a,o;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&rh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},uA=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},fA=e=>{if(!e)return null;if(sa(e))return e;let t=e.length;if(!n2(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pA=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&rh(Uint8Array)),hA=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},mA=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},gA=ln("HTMLFormElement"),vA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Gg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),xA=ln("RegExp"),a2=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Mo(n,(i,a)=>{let o;(o=t(i,a,e))!==!1&&(r[a]=o||i)}),Object.defineProperties(e,r)},yA=e=>{a2(e,(t,n)=>{if(_t(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(_t(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},wA=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return sa(e)?r(e):r(String(e).split(t)),n},bA=()=>{},SA=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Cd="abcdefghijklmnopqrstuvwxyz",_g="0123456789",o2={DIGIT:_g,ALPHA:Cd,ALPHA_DIGIT:Cd+Cd.toUpperCase()+_g},jA=(e=16,t=o2.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function CA(e){return!!(e&&_t(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const kA=e=>{const t=new Array(10),n=(r,i)=>{if(uc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=sa(r)?[]:{};return Mo(r,(o,s)=>{const l=n(o,i+1);!bo(l)&&(a[s]=l)}),t[i]=void 0,a}}return r};return n(e,0)},TA=ln("AsyncFunction"),AA=e=>e&&(uc(e)||_t(e))&&_t(e.then)&&_t(e.catch),s2=((e,t)=>e?setImmediate:t?((n,r)=>(Nr.addEventListener("message",({source:i,data:a})=>{i===Nr&&a===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Nr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_t(Nr.postMessage)),EA=typeof queueMicrotask<"u"?queueMicrotask.bind(Nr):typeof process<"u"&&process.nextTick||s2,L={isArray:sa,isArrayBuffer:t2,isBuffer:HT,isFormData:eA,isArrayBufferView:qT,isString:WT,isNumber:n2,isBoolean:YT,isObject:uc,isPlainObject:Ms,isReadableStream:nA,isRequest:rA,isResponse:iA,isHeaders:aA,isUndefined:bo,isDate:KT,isFile:XT,isBlob:QT,isRegExp:xA,isFunction:_t,isStream:ZT,isURLSearchParams:tA,isTypedArray:pA,isFileList:JT,forEach:Mo,merge:af,extend:sA,trim:oA,stripBOM:lA,inherits:cA,toFlatObject:dA,kindOf:cc,kindOfTest:ln,endsWith:uA,toArray:fA,forEachEntry:hA,matchAll:mA,isHTMLForm:gA,hasOwnProperty:Gg,hasOwnProp:Gg,reduceDescriptors:a2,freezeMethods:yA,toObjectSet:wA,toCamelCase:vA,noop:bA,toFiniteNumber:SA,findKey:r2,global:Nr,isContextDefined:i2,ALPHABET:o2,generateString:jA,isSpecCompliantForm:CA,toJSONObject:kA,isAsyncFn:TA,isThenable:AA,setImmediate:s2,asap:EA};function ne(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const l2=ne.prototype,c2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{c2[e]={value:e}});Object.defineProperties(ne,c2);Object.defineProperty(l2,"isAxiosError",{value:!0});ne.from=(e,t,n,r,i,a)=>{const o=Object.create(l2);return L.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ne.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const PA=null;function of(e){return L.isPlainObject(e)||L.isArray(e)}function d2(e){return L.endsWith(e,"[]")?e.slice(0,-2):e}function zg(e,t,n){return e?e.concat(t).map(function(i,a){return i=d2(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function GA(e){return L.isArray(e)&&!e.some(of)}const _A=L.toFlatObject(L,{},null,function(t){return/^is[A-Z]/.test(t)});function fc(e,t,n){if(!L.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!L.isUndefined(w[y])});const r=n.metaTokens,i=n.visitor||u,a=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function d(g){if(g===null)return"";if(L.isDate(g))return g.toISOString();if(!l&&L.isBlob(g))throw new ne("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(g)||L.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,y,w){let x=g;if(g&&!w&&typeof g=="object"){if(L.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(L.isArray(g)&&GA(g)||(L.isFileList(g)||L.endsWith(y,"[]"))&&(x=L.toArray(g)))return y=d2(y),x.forEach(function(m,b){!(L.isUndefined(m)||m===null)&&t.append(o===!0?zg([y],b,a):o===null?y:y+"[]",d(m))}),!1}return of(g)?!0:(t.append(zg(w,y,a),d(g)),!1)}const f=[],p=Object.assign(_A,{defaultVisitor:u,convertValue:d,isVisitable:of});function v(g,y){if(!L.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),L.forEach(g,function(x,h){(!(L.isUndefined(x)||x===null)&&i.call(t,x,L.isString(h)?h.trim():h,y,p))===!0&&v(x,y?y.concat(h):[h])}),f.pop()}}if(!L.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Lg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ih(e,t){this._pairs=[],e&&fc(e,this,t)}const u2=ih.prototype;u2.append=function(t,n){this._pairs.push([t,n])};u2.toString=function(t){const n=t?function(r){return t.call(this,r,Lg)}:Lg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function zA(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function f2(e,t,n){if(!t)return e;const r=n&&n.encode||zA;L.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let a;if(i?a=i(t,n):a=L.isURLSearchParams(t)?t.toString():new ih(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Mg{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,function(r){r!==null&&t(r)})}}const p2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},LA=typeof URLSearchParams<"u"?URLSearchParams:ih,MA=typeof FormData<"u"?FormData:null,OA=typeof Blob<"u"?Blob:null,RA={isBrowser:!0,classes:{URLSearchParams:LA,FormData:MA,Blob:OA},protocols:["http","https","file","blob","url","data"]},ah=typeof window<"u"&&typeof document<"u",sf=typeof navigator=="object"&&navigator||void 0,IA=ah&&(!sf||["ReactNative","NativeScript","NS"].indexOf(sf.product)<0),DA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",NA=ah&&window.location.href||"http://localhost",VA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ah,hasStandardBrowserEnv:IA,hasStandardBrowserWebWorkerEnv:DA,navigator:sf,origin:NA},Symbol.toStringTag,{value:"Module"})),lt={...VA,...RA};function FA(e,t){return fc(e,new lt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return lt.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function BA(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $A(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function h2(e){function t(n,r,i,a){let o=n[a++];if(o==="__proto__")return!0;const s=Number.isFinite(+o),l=a>=n.length;return o=!o&&L.isArray(i)?i.length:o,l?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!s):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&L.isArray(i[o])&&(i[o]=$A(i[o])),!s)}if(L.isFormData(e)&&L.isFunction(e.entries)){const n={};return L.forEachEntry(e,(r,i)=>{t(BA(r),i,n,0)}),n}return null}function UA(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Oo={transitional:p2,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=L.isObject(t);if(a&&L.isHTMLForm(t)&&(t=new FormData(t)),L.isFormData(t))return i?JSON.stringify(h2(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t)||L.isReadableStream(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return FA(t,this.formSerializer).toString();if((s=L.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return fc(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),UA(t)):t}],transformResponse:[function(t){const n=this.transitional||Oo.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(t)||L.isReadableStream(t))return t;if(t&&L.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?ne.from(s,ne.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:lt.classes.FormData,Blob:lt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],e=>{Oo.headers[e]={}});const HA=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qA=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&HA[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Og=Symbol("internals");function ka(e){return e&&String(e).trim().toLowerCase()}function Os(e){return e===!1||e==null?e:L.isArray(e)?e.map(Os):String(e)}function WA(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const YA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function kd(e,t,n,r,i){if(L.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!L.isString(t)){if(L.isString(r))return t.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(t)}}function KA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function XA(e,t){const n=L.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class Ct{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(s,l,d){const u=ka(l);if(!u)throw new Error("header name must be a non-empty string");const f=L.findKey(i,u);(!f||i[f]===void 0||d===!0||d===void 0&&i[f]!==!1)&&(i[f||l]=Os(s))}const o=(s,l)=>L.forEach(s,(d,u)=>a(d,u,l));if(L.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(L.isString(t)&&(t=t.trim())&&!YA(t))o(qA(t),n);else if(L.isHeaders(t))for(const[s,l]of t.entries())a(l,s,r);else t!=null&&a(n,t,r);return this}get(t,n){if(t=ka(t),t){const r=L.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return WA(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ka(t),t){const r=L.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||kd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=ka(o),o){const s=L.findKey(r,o);s&&(!n||kd(r,r[s],s,n))&&(delete r[s],i=!0)}}return L.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||kd(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return L.forEach(this,(i,a)=>{const o=L.findKey(r,a);if(o){n[o]=Os(i),delete n[a];return}const s=t?KA(a):String(a).trim();s!==a&&delete n[a],n[s]=Os(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Og]=this[Og]={accessors:{}}).accessors,i=this.prototype;function a(o){const s=ka(o);r[s]||(XA(i,o),r[s]=!0)}return L.isArray(t)?t.forEach(a):a(t),this}}Ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(Ct.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});L.freezeMethods(Ct);function Td(e,t){const n=this||Oo,r=t||n,i=Ct.from(r.headers);let a=r.data;return L.forEach(e,function(s){a=s.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function m2(e){return!!(e&&e.__CANCEL__)}function la(e,t,n){ne.call(this,e??"canceled",ne.ERR_CANCELED,t,n),this.name="CanceledError"}L.inherits(la,ne,{__CANCEL__:!0});function g2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function QA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function JA(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(l){const d=Date.now(),u=r[a];o||(o=d),n[i]=l,r[i]=d;let f=a,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),d-o<t)return;const v=u&&d-u;return v?Math.round(p*1e3/v):void 0}}function ZA(e,t){let n=0,r=1e3/t,i,a;const o=(d,u=Date.now())=>{n=u,i=null,a&&(clearTimeout(a),a=null),e.apply(null,d)};return[(...d)=>{const u=Date.now(),f=u-n;f>=r?o(d,u):(i=d,a||(a=setTimeout(()=>{a=null,o(i)},r-f)))},()=>i&&o(i)]}const El=(e,t,n=3)=>{let r=0;const i=JA(50,250);return ZA(a=>{const o=a.loaded,s=a.lengthComputable?a.total:void 0,l=o-r,d=i(l),u=o<=s;r=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:d||void 0,estimated:d&&s&&u?(s-o)/d:void 0,event:a,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(f)},n)},Rg=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ig=e=>(...t)=>L.asap(()=>e(...t)),eE=lt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,lt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(lt.origin),lt.navigator&&/(msie|trident)/i.test(lt.navigator.userAgent)):()=>!0,tE=lt.hasStandardBrowserEnv?{write(e,t,n,r,i,a){const o=[e+"="+encodeURIComponent(t)];L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),a===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function nE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function rE(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function v2(e,t){return e&&!nE(t)?rE(e,t):t}const Dg=e=>e instanceof Ct?{...e}:e;function Zr(e,t){t=t||{};const n={};function r(d,u,f,p){return L.isPlainObject(d)&&L.isPlainObject(u)?L.merge.call({caseless:p},d,u):L.isPlainObject(u)?L.merge({},u):L.isArray(u)?u.slice():u}function i(d,u,f,p){if(L.isUndefined(u)){if(!L.isUndefined(d))return r(void 0,d,f,p)}else return r(d,u,f,p)}function a(d,u){if(!L.isUndefined(u))return r(void 0,u)}function o(d,u){if(L.isUndefined(u)){if(!L.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function s(d,u,f){if(f in t)return r(d,u);if(f in e)return r(void 0,d)}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(d,u,f)=>i(Dg(d),Dg(u),f,!0)};return L.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=l[u]||i,p=f(e[u],t[u],u);L.isUndefined(p)&&f!==s||(n[u]=p)}),n}const x2=e=>{const t=Zr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;t.headers=o=Ct.from(o),t.url=f2(v2(t.baseURL,t.url),e.params,e.paramsSerializer),s&&o.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let l;if(L.isFormData(n)){if(lt.hasStandardBrowserEnv||lt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[d,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...u].join("; "))}}if(lt.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(t)),r||r!==!1&&eE(t.url))){const d=i&&a&&tE.read(a);d&&o.set(i,d)}return t},iE=typeof XMLHttpRequest<"u",aE=iE&&function(e){return new Promise(function(n,r){const i=x2(e);let a=i.data;const o=Ct.from(i.headers).normalize();let{responseType:s,onUploadProgress:l,onDownloadProgress:d}=i,u,f,p,v,g;function y(){v&&v(),g&&g(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let w=new XMLHttpRequest;w.open(i.method.toUpperCase(),i.url,!0),w.timeout=i.timeout;function x(){if(!w)return;const m=Ct.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),S={data:!s||s==="text"||s==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:m,config:e,request:w};g2(function(T){n(T),y()},function(T){r(T),y()},S),w=null}"onloadend"in w?w.onloadend=x:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(x)},w.onabort=function(){w&&(r(new ne("Request aborted",ne.ECONNABORTED,e,w)),w=null)},w.onerror=function(){r(new ne("Network Error",ne.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const S=i.transitional||p2;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new ne(b,S.clarifyTimeoutError?ne.ETIMEDOUT:ne.ECONNABORTED,e,w)),w=null},a===void 0&&o.setContentType(null),"setRequestHeader"in w&&L.forEach(o.toJSON(),function(b,S){w.setRequestHeader(S,b)}),L.isUndefined(i.withCredentials)||(w.withCredentials=!!i.withCredentials),s&&s!=="json"&&(w.responseType=i.responseType),d&&([p,g]=El(d,!0),w.addEventListener("progress",p)),l&&w.upload&&([f,v]=El(l),w.upload.addEventListener("progress",f),w.upload.addEventListener("loadend",v)),(i.cancelToken||i.signal)&&(u=m=>{w&&(r(!m||m.type?new la(null,e,w):m),w.abort(),w=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const h=QA(i.url);if(h&&lt.protocols.indexOf(h)===-1){r(new ne("Unsupported protocol "+h+":",ne.ERR_BAD_REQUEST,e));return}w.send(a||null)})},oE=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const a=function(d){if(!i){i=!0,s();const u=d instanceof Error?d:this.reason;r.abort(u instanceof ne?u:new la(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,a(new ne(`timeout ${t} of ms exceeded`,ne.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(a):d.removeEventListener("abort",a)}),e=null)};e.forEach(d=>d.addEventListener("abort",a));const{signal:l}=r;return l.unsubscribe=()=>L.asap(s),l}},sE=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},lE=async function*(e,t){for await(const n of cE(e))yield*sE(n,t)},cE=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Ng=(e,t,n,r)=>{const i=lE(e,t);let a=0,o,s=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:d,value:u}=await i.next();if(d){s(),l.close();return}let f=u.byteLength;if(n){let p=a+=f;n(p)}l.enqueue(new Uint8Array(u))}catch(d){throw s(d),d}},cancel(l){return s(l),i.return()}},{highWaterMark:2})},pc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",y2=pc&&typeof ReadableStream=="function",dE=pc&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),w2=(e,...t)=>{try{return!!e(...t)}catch{return!1}},uE=y2&&w2(()=>{let e=!1;const t=new Request(lt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Vg=64*1024,lf=y2&&w2(()=>L.isReadableStream(new Response("").body)),Pl={stream:lf&&(e=>e.body)};pc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Pl[t]&&(Pl[t]=L.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new ne(`Response type '${t}' is not supported`,ne.ERR_NOT_SUPPORT,r)})})})(new Response);const fE=async e=>{if(e==null)return 0;if(L.isBlob(e))return e.size;if(L.isSpecCompliantForm(e))return(await new Request(lt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(L.isArrayBufferView(e)||L.isArrayBuffer(e))return e.byteLength;if(L.isURLSearchParams(e)&&(e=e+""),L.isString(e))return(await dE(e)).byteLength},pE=async(e,t)=>{const n=L.toFiniteNumber(e.getContentLength());return n??fE(t)},hE=pc&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:d,headers:u,withCredentials:f="same-origin",fetchOptions:p}=x2(e);d=d?(d+"").toLowerCase():"text";let v=oE([i,a&&a.toAbortSignal()],o),g;const y=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let w;try{if(l&&uE&&n!=="get"&&n!=="head"&&(w=await pE(u,r))!==0){let S=new Request(t,{method:"POST",body:r,duplex:"half"}),C;if(L.isFormData(r)&&(C=S.headers.get("content-type"))&&u.setContentType(C),S.body){const[T,A]=Rg(w,El(Ig(l)));r=Ng(S.body,Vg,T,A)}}L.isString(f)||(f=f?"include":"omit");const x="credentials"in Request.prototype;g=new Request(t,{...p,signal:v,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:x?f:void 0});let h=await fetch(g);const m=lf&&(d==="stream"||d==="response");if(lf&&(s||m&&y)){const S={};["status","statusText","headers"].forEach(G=>{S[G]=h[G]});const C=L.toFiniteNumber(h.headers.get("content-length")),[T,A]=s&&Rg(C,El(Ig(s),!0))||[];h=new Response(Ng(h.body,Vg,T,()=>{A&&A(),y&&y()}),S)}d=d||"text";let b=await Pl[L.findKey(Pl,d)||"text"](h,e);return!m&&y&&y(),await new Promise((S,C)=>{g2(S,C,{data:b,headers:Ct.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:g})})}catch(x){throw y&&y(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new ne("Network Error",ne.ERR_NETWORK,e,g),{cause:x.cause||x}):ne.from(x,x&&x.code,e,g)}}),cf={http:PA,xhr:aE,fetch:hE};L.forEach(cf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fg=e=>`- ${e}`,mE=e=>L.isFunction(e)||e===null||e===!1,b2={getAdapter:e=>{e=L.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){n=e[a];let o;if(r=n,!mE(n)&&(r=cf[(o=String(n)).toLowerCase()],r===void 0))throw new ne(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+a]=r}if(!r){const a=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(Fg).join(`
`):" "+Fg(a[0]):"as no adapter specified";throw new ne("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:cf};function Ad(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new la(null,e)}function Bg(e){return Ad(e),e.headers=Ct.from(e.headers),e.data=Td.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),b2.getAdapter(e.adapter||Oo.adapter)(e).then(function(r){return Ad(e),r.data=Td.call(e,e.transformResponse,r),r.headers=Ct.from(r.headers),r},function(r){return m2(r)||(Ad(e),r&&r.response&&(r.response.data=Td.call(e,e.transformResponse,r.response),r.response.headers=Ct.from(r.response.headers))),Promise.reject(r)})}const S2="1.7.9",hc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{hc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const $g={};hc.transitional=function(t,n,r){function i(a,o){return"[Axios v"+S2+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,s)=>{if(t===!1)throw new ne(i(o," has been removed"+(n?" in "+n:"")),ne.ERR_DEPRECATED);return n&&!$g[o]&&($g[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,s):!0}};hc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function gE(e,t,n){if(typeof e!="object")throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const s=e[a],l=s===void 0||o(s,a,e);if(l!==!0)throw new ne("option "+a+" must be "+l,ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ne("Unknown option "+a,ne.ERR_BAD_OPTION)}}const Rs={assertOptions:gE,validators:hc},dn=Rs.validators;class Hr{constructor(t){this.defaults=t,this.interceptors={request:new Mg,response:new Mg}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const a=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Zr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Rs.assertOptions(r,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:Rs.assertOptions(i,{encode:dn.function,serialize:dn.function},!0)),Rs.assertOptions(n,{baseUrl:dn.spelling("baseURL"),withXsrfToken:dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=a&&L.merge(a.common,a[n.method]);a&&L.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=Ct.concat(o,a);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const d=[];this.interceptors.response.forEach(function(y){d.push(y.fulfilled,y.rejected)});let u,f=0,p;if(!l){const g=[Bg.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,d),p=g.length,u=Promise.resolve(n);f<p;)u=u.then(g[f++],g[f++]);return u}p=s.length;let v=n;for(f=0;f<p;){const g=s[f++],y=s[f++];try{v=g(v)}catch(w){y.call(this,w);break}}try{u=Bg.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,p=d.length;f<p;)u=u.then(d[f++],d[f++]);return u}getUri(t){t=Zr(this.defaults,t);const n=v2(t.baseURL,t.url);return f2(n,t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(t){Hr.prototype[t]=function(n,r){return this.request(Zr(r||{},{method:t,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,s){return this.request(Zr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Hr.prototype[t]=n(),Hr.prototype[t+"Form"]=n(!0)});class oh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(s=>{r.subscribe(s),a=s}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,s){r.reason||(r.reason=new la(a,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new oh(function(i){t=i}),cancel:t}}}function vE(e){return function(n){return e.apply(null,n)}}function xE(e){return L.isObject(e)&&e.isAxiosError===!0}const df={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(df).forEach(([e,t])=>{df[t]=e});function j2(e){const t=new Hr(e),n=e2(Hr.prototype.request,t);return L.extend(n,Hr.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return j2(Zr(e,i))},n}const Be=j2(Oo);Be.Axios=Hr;Be.CanceledError=la;Be.CancelToken=oh;Be.isCancel=m2;Be.VERSION=S2;Be.toFormData=fc;Be.AxiosError=ne;Be.Cancel=Be.CanceledError;Be.all=function(t){return Promise.all(t)};Be.spread=vE;Be.isAxiosError=xE;Be.mergeConfig=Zr;Be.AxiosHeaders=Ct;Be.formToJSON=e=>h2(L.isHTMLForm(e)?new FormData(e):e);Be.getAdapter=b2.getAdapter;Be.HttpStatusCode=df;Be.default=Be;const yE=jn`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,wE=k.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`,bE=k.button`
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
`,SE=k.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #fbfbfb;
  border-radius: 25px 25px 0 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${yE} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--comfortaa);
`,jE=k.button`
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
`,CE=k.div`
  background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d8641711-b18b-4d15-33a0-110225c0cc00/public');
  border-radius: 20px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--comfortaa)!important;
`,Ug=k.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${e=>e.sent?"flex-end":"flex-start"};
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 14px;
  font-family: var(--font--comfortaa)!important;
`,kE=k.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${e=>e.sent?"0":"8px"};
  margin-left: ${e=>e.sent?"8px":"0"};
`,TE=k.div`
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
`,AE=k.div`
  font-size: 10px;
  color: #b6b6b6;
  font-weight: 200;
  margin-bottom: 5px;
  font-family: var(--font--comfortaa)!important;
`,EE=k.div`
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
`,PE=k.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--comfortaa)!important;
`,GE=k.input`
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
`,_E=k.button`
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
`,Cn=({footerRendered:e})=>{const[t,n]=j.useState(!1),[r,i]=j.useState(""),[a,o]=j.useState([]),[s,l]=j.useState(!1),[d,u]=j.useState(null),[f,p]=j.useState(!1),[v,g]=j.useState(!1),y="https://wa.link/dojlwi",w="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8c41f0fe-aedf-44cf-d36f-47c09d855d00/public",x="SEU_WEBHOOK_URL";j.useEffect(()=>{if(e){const S=setTimeout(()=>{n(!0),o([{id:1,text:`Olá! Percebemos que você estava navegando pelo site. 🐶🐾

Como podemos te ajudar? 🤗`,sent:!1}])},2e3);return()=>clearTimeout(S)}},[e]);const h=async()=>{if(r.trim()==="")return;const S={id:Date.now(),text:r,sent:!0};o(T=>[...T,S]);const C=r.trim();if(i(""),l(!0),!f&&d===null){setTimeout(()=>{l(!1),o(T=>[...T,{id:Date.now(),text:`Entendo, estamos aqui para te ajudar da melhor forma possível! 😁

Para um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂‍↕`,sent:!1}]),p(!0)},1500);return}if(f&&d===null){const T=/^\d+$/.test(C),A=T?C:"não informado";u(A),setTimeout(()=>{l(!1),o(G=>[...G,{id:Date.now(),text:T?c.jsxs("span",{children:["Muito obrigado, aumigo🐕!",c.jsx("br",{}),c.jsx("br",{}),"Vamos entrar em contato com você em breve."]}):"Você não informou um número válido.",sent:!1}]),T?(Be.post(x,{phone:A}),setTimeout(()=>{o(G=>[...G,{id:Date.now(),text:c.jsxs("span",{children:["Para facilitar, basta clicar neste link a seguir e conversar conosco pelo WhatsApp:"," ",c.jsx("br",{}),c.jsx("br",{}),c.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",children:"Oiê, vamos conversar!"})]}),sent:!1}]),setTimeout(()=>{g(!0)},500)},1500)):setTimeout(()=>{g(!0)},500),p(!1)},1500);return}l(!1)},m=S=>{S.key==="Enter"&&h()},b=()=>{n(!1)};return c.jsxs(wE,{children:[c.jsx(bE,{onClick:()=>window.open(y,"_blank"),id:"clickwpp",children:c.jsx(gj,{id:"clickwpp"})}),t&&c.jsxs(SE,{children:[c.jsx(jE,{onClick:b,children:c.jsx($T,{})}),c.jsxs(CE,{children:[a.map(S=>c.jsxs(Ug,{sent:S.sent,children:[!S.sent&&c.jsx(kE,{src:w,alt:"Bot"}),c.jsxs(TE,{sent:S.sent,children:[!S.sent&&c.jsx(AE,{children:"Pousada Le Ange"}),c.jsx("div",{children:S.text})]})]},S.id)),s&&c.jsx(Ug,{children:c.jsx(EE,{})})]}),!v&&c.jsxs(PE,{children:[c.jsx(GE,{id:"chat-iniciado",type:"text",placeholder:"Digite sua mensagem",value:r,onChange:S=>i(S.target.value),onKeyDown:m}),c.jsx(_E,{onClick:h,children:"Enviar"})]})]})]})},zE=k(Oe.button)`
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
`,LE=k(Oe.footer)`
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
`,ME=k.div`
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
`,OE=k.div`
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
`,RE=k.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,IE=k.section`
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
`,DE=k.section`
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
`,NE=k.hr`
    width: 100%;
    margin-bottom: -50px;
`,VE=k.div`
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
`,Tr=()=>{const e=j.useRef(null),t=lj(e,{once:!0}),[n,r]=j.useState(""),[i,a]=j.useState(""),[o,s]=j.useState(""),l=()=>`user_${Math.random().toString(36).substr(2,9)}_${Date.now()}`,d=()=>{const f=new URLSearchParams(window.location.search);return{utm_source:f.get("utm_source")||"organico",utm_medium:f.get("utm_medium")||"",utm_campaign:f.get("utm_campaign")||"",utm_term:f.get("utm_term")||"",utm_content:f.get("utm_content")||""}},u=async f=>{if(f.preventDefault(),!n||!i||!o){alert("Por favor, preencha todos os campos.");return}const v={id:l(),name:String(n).trim(),email:String(i).trim(),tel:String(o).trim(),conversion_url:window.location.href,...d()};try{const g=await fetch("https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),y=await g.text();g.ok?(alert("Dados enviados com sucesso!"),r(""),a(""),s(""),window.open("https://wa.link/dojlwi","_blank")):(console.error("Erro de resposta:",y),alert("Erro ao enviar os dados: "+y))}catch(g){console.error("Erro:",g),alert("Erro ao enviar os dados. Tente novamente.")}};return c.jsxs(c.Fragment,{children:[c.jsxs(LE,{ref:e,children:[c.jsxs(RE,{children:[c.jsxs(ME,{children:[c.jsx("h1",{"data-aos":"fade-up",children:"Fale agora com a nossa Central de Reservas"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"100",children:["As suas informações são mantidas em segurança e utilizadas apenas para entrar em contato. Entenda melhor como tratamos os seus dados pela nossa",c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"política de privacidade"}),"."]}),c.jsx("hr",{"data-aos":"fade-right","data-aos-delay":"200"}),c.jsxs("div",{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"300",children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx("a",{href:"https://instagram.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(uT,{})}),c.jsx("a",{href:"https://tiktok.com/@pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"450",children:c.jsx(NT,{})}),c.jsx("a",{href:"https://pinterest.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"500",children:c.jsx(DT,{})})]})]})]}),c.jsx(OE,{"data-aos":"fade-down","data-aos-delay":"500",children:c.jsxs("form",{id:"contactForm",onSubmit:u,children:[c.jsx("input",{type:"text",id:"name",placeholder:"Digite o seu nome",value:n,onChange:f=>r(f.target.value),"data-aos":"fade-up","data-aos-delay":"600"}),c.jsx("input",{type:"email",id:"email",placeholder:"Preciso saber o seu e-mail também",value:i,onChange:f=>a(f.target.value),"data-aos":"fade-up","data-aos-delay":"700"}),c.jsx("input",{type:"tel",id:"tel",placeholder:"Por fim, o seu número de WhatsApp",value:o,onChange:f=>s(f.target.value),"data-aos":"fade-up","data-aos-delay":"800"}),c.jsxs(zE,{type:"submit","data-aos":"fade-up","data-aos-delay":"1000",children:[c.jsx(VT,{size:20}),c.jsx("span",{children:"Enviar dados para contato"})]})]})})]}),c.jsxs(IE,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0b4e1dd7-194d-4d4c-da16-c16c77281000/public",alt:"Descrição da imagem",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"50",children:"Mapa do site"}),c.jsxs("a",{href:"#","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(kt,{})," Início "]}),c.jsxs("a",{href:"#/sobre","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(kt,{})," Sobre nós "]}),c.jsxs("a",{href:"#/serra","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(kt,{})," Le Ange Serra "]}),c.jsxs("a",{href:"#/mar","data-aos":"fade-up","data-aos-delay":"250",children:[" ",c.jsx(kt,{})," Le Ange Mar "]}),c.jsxs("a",{href:"#/event","data-aos":"fade-down","data-aos-delay":"300",children:[" ",c.jsx(kt,{})," Eventos "]}),c.jsxs("a",{href:"#/acomodaSerra","data-aos":"fade-up","data-aos-delay":"350",children:[" ",c.jsx(kt,{})," Acomodações Serra "]}),c.jsxs("a",{href:"#/acomodaMar","data-aos":"fade-up","data-aos-delay":"400",children:[" ",c.jsx(kt,{})," Acomodações Mar "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"400",children:"Central de reserva"}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-up","data-aos-delay":"100",children:[" ",c.jsx(kt,{})," WhatsApp "]}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-down","data-aos-delay":"150",children:[" ",c.jsx(kt,{})," +55 (21) 99423-0871 "]}),c.jsxs("a",{href:"mailto:pousadaleange@gmail.com",target:"_blank","data-aos":"fade-up","data-aos-delay":"200",children:[" ",c.jsx(kt,{})," pousadaleange@gmail.com "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"600",children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"https://www.instagram.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(kt,{})," Instagram "]}),c.jsxs("a",{href:"https://www.tiktok.com/@pousadaleange",target:"_blank","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(kt,{})," TikTok "]}),c.jsxs("a",{href:"https://br.pinterest.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(kt,{})," Pinterest "]})]})]}),c.jsxs(DE,{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:"15px 0px 15px 0px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra","data-aos":"fade-left","data-aos-delay":"300"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:"0px 15px 0px 15px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar","data-aos":"fade-right","data-aos-delay":"400"})})]}),c.jsx(NE,{}),c.jsxs(VE,{children:[c.jsxs("p",{children:["Todos os direitos reservados | ",c.jsx(BT,{})," 2024"]}),c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"https://www.linkedin.com/in/aleph-ramos",target:"_blank",children:"Aleph"})})]})]})]}),c.jsx(Cn,{footerRendered:t})]})};function uf(e){return J({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.5 14.625c0 .995-.524 1.482-1.5 1.5H6c-.976-.018-1.5-.505-1.5-1.5s.524-1.482 1.5-1.5h12c.976.018 1.5.505 1.5 1.5m-1.5 2.25H6c-.976.018-1.5.505-1.5 1.5s.524 1.482 1.5 1.5h12c.976-.018 1.5-.505 1.5-1.5s-.524-1.482-1.5-1.5m3.75-8.248v-.001c-.976.017-1.5.504-1.5 1.499v8.25c0 .995.524 1.482 1.5 1.5v-.002c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.99-.786-2.964-2.25-2.998m-19.5-.001C.786 8.662 0 9.637 0 11.626v3.75c0 2.984.786 4.446 2.25 4.498v.001c.976-.017 1.5-.504 1.5-1.499v-8.25c0-.995-.524-1.482-1.5-1.5m19.5-.75c0-2.486-1.31-3.705-3.75-3.748v-.002H6v.002c-2.44.043-3.75 1.262-3.75 3.748v.001c1.464.026 2.25.757 2.25 2.249s.786 2.223 2.25 2.249v.001h10.5v-.001c1.464-.026 2.25-.757 2.25-2.249s.786-2.223 2.25-2.249z"},child:[]}]})(e)}function C2(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"},child:[]},{tag:"path",attr:{d:"M12 5l0 14"},child:[]},{tag:"path",attr:{d:"M4 12l16 0"},child:[]}]})(e)}const FE=aa`
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
`,k2=jn`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`,BE=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1 ), rgba(0, 0, 0, 0)); 
    pointer-events: none;
    animation: ${k2} 5s ease-in-out infinite;
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
        animation: none;
    }
`,$E=k.div`
  position: relative;
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${k2} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none!important;
    border-radius: 20px 0 20px 0;
    height: 80vh;
  }
`,UE=k.div`
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
`,HE=k.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`,qE=k.p`
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
`,WE=k.div`
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
`,YE=k.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,KE=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:r=!0,showNavigation:i=!0})=>(Wl(),c.jsxs(YE,{children:[c.jsx(FE,{}),c.jsx(on,{modules:[Cr,kr,Wn],navigation:i,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}},children:e.map((a,o)=>c.jsxs(sn,{children:[c.jsx(BE,{}),c.jsx($E,{style:{backgroundImage:`url(${a.backgroundImage})`},children:c.jsxs(UE,{"data-aos":"fade-down","data-aos-delay":"100",children:[c.jsx(HE,{children:a.title}),c.jsx(qE,{children:a.subtitle}),c.jsx(WE,{children:a.features.map((s,l)=>c.jsxs("span",{children:[s.icon," ",s.text]},l))}),c.jsx(th,{onClick:()=>{const s=`/#/acomoda${a.id}`;window.location.href=s},text:"Conhecer essa acomodação",suiteId:a.id})]})})]},o))})]})),XE=k.div`
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
`,ca=()=>c.jsx(c.Fragment,{children:c.jsxs(XE,{children:[c.jsxs("div",{children:[c.jsxs("h1",{children:["A nossa pousada foi feita para ",c.jsx("b",{children:"você"})," e o ",c.jsx("b",{children:"seu pet!"})]}),c.jsxs("ol",{children:[c.jsxs("li",{children:["Para pessoas que vêem o ",c.jsx("b",{children:"pet como parte da família."})]}),c.jsxs("li",{children:["Para pessoas que querem proporcionar aos seus pets a ",c.jsx("b",{children:"liberdade"})," de estarem sempre soltos."]}),c.jsxs("li",{children:["Para garantir uma experiência segura, ",c.jsx("b",{children:"não aceitamos menores de 13 anos"}),", mesmo que acompanhado dos pais."]})]}),c.jsxs("ol",{children:[c.jsxs("li",{children:["Vale ressaltar que fêmeas ",c.jsx("b",{children:"NÃO"})," podem estar no cio;"]}),c.jsxs("li",{children:["O chachorro precisa ",c.jsx("b",{children:"ser socializado"}),", caso contrário será necessário mantê-lo na guia."]}),c.jsxs("li",{children:["Não trabalhamos com ",c.jsx("b",{children:"Day Use"}),"."]})]}),c.jsx(st,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Reservar agora",backgroundColor:"transparent",borderColor:"var(--color--white)",hoverColor:"var(--color--white)",border:"1px solid",color:"var(--color--black)"})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"IMAGE"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"IMAGE"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public",alt:"IMAGE"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public",alt:"IMAGE"})]})]})]})}),QE=jn`
    0% {
        transform: scale(1);
        background-color: #00000000;
    }

    50% {
        transform: scale(1.02);
        background-color: #00000005;
    }
`,JE=k.section`
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
        animation: ${QE} 2.5s linear infinite alternate-reverse;

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
`,Ro=()=>c.jsx(c.Fragment,{children:c.jsx(JE,{children:c.jsx("div",{children:c.jsxs("h1",{children:[c.jsx("b",{children:"ATENÇÃO!!!"})," Neste mês de Janeiro ( 01/2025 ) haverá ",c.jsx("b",{children:"Churrasco na beira da piscina"})," todos os ",c.jsx("b",{children:"Sábados"}),". Não perca tempo, ",c.jsx("a",{href:"https://wa.link/dojlwi",target:"_blank",children:"reserve agora!"})]})})})}),ZE=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public",alt:"Mulher na rede",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",alt:"Foto da pousada le ange vista de cima",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",alt:"2 cachorros na piscina",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f4a1515f-dd60-47ad-f799-1a1813af9300/public",alt:"Foto da pousada vista de baixo",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public",alt:"Foto da sala de estar da pousada le ange serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",alt:"2 cachorros na cama no meio do quintal",loading:"lazy"}],eP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",alt:"Foto da pousada le ange mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c15257b6-956b-4f1d-ee81-9870ce695d00/public",alt:"2 pessoas na rede na pousada le ange mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Foto de churrasco",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Cachorro olhando para a câmera",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",alt:"Pousada le ange mar vista de cima",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public",alt:"Sala de estar na le ange mar com o quadro na parede",loading:"lazy"}],tP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public",alt:"Pessoa na rede",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",alt:"2 cachorros na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public",alt:"Sala de estar na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",alt:"Hot Tube na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/81b9f4b9-48ac-4aeb-76be-57b13ddd7300/public",alt:"2 pessoas bebendo na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fabb090f-5470-4b80-d24e-212cea38ef00/public",alt:"2 pessoas na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/aee972d8-1698-4318-7f15-6ecd607c8f00/public",alt:"Sala de estar da le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/345b0279-69a3-47ee-31f9-a018b8459000/public",alt:"Por do sol na le ange",label:"Le Ange Serra",loading:"lazy"}],nP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6da9939-7a24-41a2-9002-2f3da2707f00/public",alt:"Foto do quarto na le ange",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Foto de churrasqueira na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro com a cabeça recostada na mão do tutor",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca87e74f-2193-4308-4ce7-737e3d878f00/public",alt:"Uma pessoa e um cachorro na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c7b74408-cebf-4bb7-dc9a-36170887c100/public",alt:"2 taças com um fundo de por do sol",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",alt:"2 cachorros em uma cama no meio do jardim",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public",alt:"Foto do quadro de cachorro na le ange mar",label:"Le Ange Serra",loading:"lazy"}],Hg=k.section`
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


`,rP=k.div`
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
`,iP=k.aside`
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
`,aP=[{id:"Serra#suite1",title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(li,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(pt,{}),text:"Lareira"}]},{id:"Serra#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(li,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(pt,{}),text:"Lareira"}]},{id:"Serra#suite6",title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public",features:[{icon:c.jsx(ke,{}),text:"93m²"},{icon:c.jsx(li,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(uf,{}),text:"Couch lounge"},{icon:c.jsx(C2,{}),text:"Bay window"}]},{id:"Mar#suite6",title:"Suíte Standard 6",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(li,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(pt,{}),text:"Lareira"}]},{id:"Mar#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2c65f24d-c113-4ea7-def4-783519605e00/public",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(li,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(pt,{}),text:"Lareira"}]},{id:"Serra#suite10",title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b3e8e3c-57ba-4e47-dd41-7b4a32d25f00/public",features:[{icon:c.jsx(ke,{}),text:"80m²"},{icon:c.jsx(li,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(nh,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(uf,{}),text:"Couch lounge"},{icon:c.jsx(pt,{}),text:"Lareira"}]}],oP=k.section`
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
`,sP=[{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",title:"100% Pet Friendly",description:"Não temos restrições quanto ao porte ou à raça do seu pet, nem cobramos taxas adicionais para a vinda deles. Na Le Ange, o seu pet tem total liberdade para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public",title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um HotTub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",title:"Piscinas",description:"Nossa piscina aquecida possui um tratamento especial por ozônio com níveis baixíssimos de cloro - aqui, tudo é pensando para o bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/179ab52c-353f-442a-ffe5-0a71f6922f00/public",title:"Cozinha",description:"Na sua hospedagem, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Também, aceitamos todas as restrições alimentares para garantir que todos desfrutem da nossa gastronomia.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public",title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public",title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public",title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public",title:"Suítes",description:"Nossas suítes são, elegantemente, decoradas. Todas com vistas maravilhosas, banheira de imersão, cama king-size, varanda, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"}],lP=k.div`
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

`,cP=k.h1`
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
`,Ed=k.h1`
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

`,cs=k.p`
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
`,dP=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(_o,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Churrasco no sábado"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Almoço e noite especial"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],uP=k.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,fP=k.section`
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
`,qg=k.b`
    color: var(--color--green);
`,Pd=k.b`
    color: var(--color--blue);
`,pP=k.div`
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
`;const hP=k.div`
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
`,mP=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!0})},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Início - Pousada Le Ange"})}),c.jsxs(hP,{children:[c.jsx("a",{href:"/#/mar",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b3e6c25b-9ed6-4a84-5ee0-3ed539b29b00/public"})}),c.jsx("a",{href:"/#/serra",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/565f57fa-9f92-434e-7e76-192ec1299700/public"})})]}),c.jsx(Cn,{}),c.jsxs(rP,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(iP,{children:[c.jsxs("h1",{"data-aos":"fade-up",children:["Pousada",c.jsx(Pd,{children:" 100% Pet Friendly"})," que aceita humanos de estimação"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"2 unidades, 2 cenários incomparáveis"})]}),c.jsxs(Hg,{"data-aos":"fade-up",children:[c.jsx(Ag,{content:ZE,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(Pg,{title:"Le Ange Serra - Miguel Pereira RJ",text:"Na Le Ange Serra, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu pet entre as belezas naturais da Mata Atlântica, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px",buttonColor:"var(--color--green)",buttonBorder:"1px solid var(--color--black)",targetPage:"/serra",idade:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsxs(Hg,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Pg,{title:"Le Ange Mar - Búzios RJ",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da pousada e o seu pet é, calorosamente, recebido para momentos especiais à beira-mar.",borderColor:"var(--color--blue)",borderRadius:"30px",buttonColor:"var(--color--blue)",buttonBorder:"1px solid var(--color--black)",targetPage:"/mar",idade:"*Só permitimos crianças acima de 13 anos!"}),c.jsx(Ag,{content:eP,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsx(ca,{}),c.jsxs(oP,{children:[c.jsxs("div",{children:[c.jsxs(cP,{"data-aos":"fade-up",children:["Nossas suítes ",c.jsx(qg,{children:"mais procuradas"})," "]}),c.jsx(cs,{"data-aos":"fade-up","data-aos-delay":"200",children:"Já consegue se imaginar dormindo aqui ao lado do seu pet?"})]}),c.jsx(KE,{content:aP})]}),c.jsxs(lP,{children:[c.jsxs("div",{children:[c.jsxs(Ed,{"data-aos":"fade-up",children:["Mais que Pet Friendly, ",c.jsx(Pd,{children:"Pet Lovers"})]}),c.jsx(cs,{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência"})]}),c.jsx(kT,{content:sP,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(Ed,{"data-aos":"fade-up",children:[" ",c.jsx(qg,{children:"Viva"})," essa experiência "]}),c.jsx(cs,{"data-aos":"fade-up","data-aos-delay":"200",children:"Alguns dos nossos momentos"})]}),c.jsxs(uP,{"data-aos":"fade-in",children:[c.jsx(rf,{images:tP}),c.jsx(rf,{images:nP,reverse:!0})]}),c.jsx(pP,{children:c.jsx(st,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva!"})}),c.jsxs("div",{children:[c.jsxs(Ed,{"data-aos":"fade-up",children:["Conheça nossos pacotes e ",c.jsx(Pd,{children:"noites especiais"})," "]}),c.jsx(cs,{"data-aos":"fade-up","data-aos-delay":"200",children:"Estamos te esperando!"})]}),c.jsx(Ro,{}),c.jsx(fP,{"data-aos":"fade-in","data-aos-delay":"250",children:c.jsx(Lo,{events:dP})}),c.jsx(Tr,{})]}));function gP(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"},child:[]},{tag:"path",attr:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"},child:[]}]})(e)}function vP(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"},child:[]}]})(e)}function xP(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"},child:[]}]})(e)}function Wg(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"},child:[]}]})(e)}function Je(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 2H6c-1.103 0-2 .897-2 2v5h4V6h2v3h10V4c0-1.103-.897-2-2-2zm-8 13H8v-5H4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10H10v5z"},child:[]}]})(e)}function Yg(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"},child:[]}]})(e)}const yP=aa`
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
`,wP=jn`
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
`,bP=k(Oe.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 30px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,SP=k(Oe.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${wP} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,jP=k(Oe.div)`
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
`,CP=k(Oe.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,kP=k(Oe.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,TP=k(Oe.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,AP=k(Oe.div)`
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
`,EP=k.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,Kg=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>{const{scrollY:l}=aj(),d=is(l,[0,300],[0,-30]),u=is(l,[0,300],[0,-20]),f=is(l,[0,300],[0,-10]),p=is(l,[0,300],[0,-5]);return c.jsxs(EP,{children:[c.jsx(yP,{}),c.jsx(on,{modules:[Cr,kr,Wn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((v,g)=>c.jsx(sn,{children:t==="image"?c.jsx(bP,{src:v.src,alt:v.alt||`Slide ${g+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(SP,{backgroundImage:v.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(jP,{}),c.jsxs(CP,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(kP,{style:{y:d},children:v.title}),c.jsx(TP,{style:{y:u},children:v.subtitle}),c.jsx(AP,{style:{y:f},children:v.features.map((y,w)=>c.jsxs("span",{children:[y.icon," ",y.text]},w))}),c.jsx(th,{text:"Conhecer todas as acomodações",style:{y:p}})]})]})},g))})]})};function PP(e){return J({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M239.22,59.44l-45.63,95.82a3.54,3.54,0,0,1-.16.34l-34.21,71.84a8,8,0,1,1-14.44-6.88L173.62,160H40a8,8,0,0,1-5.66-13.66L76.69,104,34.34,61.66A8,8,0,0,1,40,48H232a8,8,0,0,1,7.22,11.44Z"},child:[]}]})(e)}const GP=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,_P=k.section`
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
`,Xg=k.section`
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
`,zP=k.section`
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
`,LP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/29ccc6ec-9001-47af-4c90-36bc2a2ba300/public",alt:"Cadeira customizada para casamento na le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a5bfa9ba-2a81-4ff5-1bda-74a4993f2500/public",alt:"Foto do bolo de casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2ee18a4-384c-49ed-c38c-d15f243f5700/public",alt:"Foto de uma fogueira na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d887cc1d-1cb7-47c1-06cf-ce55fcb0f400/public",alt:"Espaço de comer na pousada le ange em casamentos",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/94f6e656-dcb6-477a-23d0-79cc3f816e00/public",alt:"Champagne na pousada le ange",loading:"lazy"}],MP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7da5629-c2cc-411d-3167-702f3a09f300/public",alt:"Cadeiras para casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/08af42b1-ad7c-4d07-8fb5-20e740b9b900/public",alt:"Noivos se casando na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ce391b0-09af-4d6b-d2b5-c38fb17b4000/public",alt:"Comida do casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/977a5b2b-eea7-45c3-8f86-55a821264800/public",alt:"Imagem do bar no casamento da pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6d4feba5-fa91-4d86-be6d-ed01beefb800/public",alt:"Casamento fotos pousada le ange",loading:"lazy"}],OP=k.section`
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
`,Kt=k.div`
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
`,RP=k.section`
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
`,IP=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Eventos - Pousada Le Ange"})}),c.jsx(GP,{}),c.jsx(Cn,{}),c.jsxs(_P,{children:[c.jsxs("div",{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#/serra",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#/mar",children:"Mar"})})]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha celebrar na Le Ange, onde o amor pelos pets encontra o cenário ideal para tornar os seus eventos ainda mais especiais."}),c.jsx(st,{"data-aos":"fade-up","data-aos-delay":"300",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer meu evento"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4129a834-fd9a-42db-4770-46bcaae2c200/public",alt:"foto da home da página de eventos","data-aos":"fade-left","data-aos-delay":"150"})})]}),c.jsx(Xg,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(Kg,{content:LP,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsxs(zP,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(st,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(st,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]})]})]}),c.jsxs(OP,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59f2aa9f-b14c-4a77-d44d-19d04bbfad00/public",alt:"foto do casamento","data-aos":"zoom-in","data-aos-delay":"100"})}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Casamento"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(Wg,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Yg,{}),"Noite Especial no Sábado"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(gP,{}),"Ensaio Fotográfico dos Noivos"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(vP,{}),"Decoração Romântica na Suíte"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(Zm,{}),"Late Checkout no Domingo"]})]}),c.jsx(st,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4129a834-fd9a-42db-4770-46bcaae2c200/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fdcd50a3-60fa-409c-8e77-2d1ccef2ec00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c5657ad4-000d-4c21-0570-1de76bd8c700/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]})]}),c.jsxs(RP,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Aniversário"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(Wg,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Yg,{}),"Noite Especial no Sábado"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(xP,{}),"Massagem Relaxante"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Zm,{}),"Late Checkout no Domingo"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"250",children:[c.jsx(PP,{}),"Painéis Temáticos"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(vj,{}),"Bolo para o Pet"]})]}),c.jsx(st,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2fda94b-3aeb-4561-b4ad-688ff898ee00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f8c3dd3f-c32b-4c9d-2496-dcdc601a7e00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/980e5da2-7a6b-4d04-8e10-389d3ee83000/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5361ac8b-1299-4fc6-7cbb-7e71c171e300/public",alt:"foto de aniversário","data-aos":"zoom-in","data-aos-delay":"200"})})]}),c.jsx(Xg,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(Kg,{content:MP,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsx(Tr,{})]})),T2=k.button`
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
`,DP=k(dT)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${T2}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,NP=k.span`
  margin: 10px;
`,Ar=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:a,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,onClick:d})=>c.jsxs(T2,{id:"clickwpp",onClick:d,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,children:[c.jsx(DP,{iconColor:i,hoverIconColor:a}),c.jsx(NP,{children:e})]}),VP=k.section`
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
`,FP=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,BP=k.section`
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
`,$P=k.section`
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
`,UP=k.section`
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
`,HP=k.section`

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
`,qP=k.div`
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
`,WP=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"})}),c.jsx(FP,{}),c.jsx(Cn,{}),c.jsxs(VP,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Pousada Le Ange"}),c.jsxs("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:["A pousada mais ",c.jsx("b",{children:"Pet Friendly"})," do Brasil"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"Fundada em 2018 em Miguel Pereira, Rio de Janeiro, a Pousada Le Ange Serra nasceu da nossa paixão por quatro patas, bem-estar e hospitalidade. Com o sucesso da primeira unidade, expandimos para Búzios, em 2023, criando a Pousada Le Ange Mar. A filosofia por trás é oferecer mais do que uma pousada, um refúgio acolhedor."})]}),c.jsx("div",{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e74beb7-77f8-4598-ec38-1e6f6e4d9300/public",alt:"foto da gaia, cachorra da pousada le ange",loading:"lazy","data-aos":"fade-right","data-aos-delay":"500"})})]}),c.jsxs(BP,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",alt:"foto da le ande da mar",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",alt:"foto da le ande da serra",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"2 unidades,"}),c.jsx("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:"2 refúgios únicos"}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"A Pousada LeAnge Serra oferece 10 suítes aconchegantes em meio à região serrana de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs($P,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Diferenciais"}),c.jsxs("p",{"data-aos":"fade-down","data-aos-delay":"200",children:["Somos mais que Pet Friendly, somos ",c.jsx("b",{children:"Pet Lovers!"})," Por aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Assim, tornando-nos ÚNICOS a oferecer este tipo de experiência."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d476f2e3-90fe-4291-137c-bc9f9e7f4000/public",loading:"lazy",alt:"rede na le ange mar","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",loading:"lazy",alt:"hot tube na le ange serra","data-aos":"fade-down","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public",loading:"lazy",alt:"casal se divertindo na le ange serra","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/920ca71e-b200-4a6c-5c7e-cc605234d700/public",loading:"lazy",alt:"foto da le ange com tema de natal","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs(UP,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"100",children:"Gastronomia"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"200",children:["Oferecemos um serviço ",c.jsx("i",{children:"all inclusive"})," que abrange todas as refeições, atendendo todas as restrições alimentares dos nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",loading:"lazy",alt:"foto da noite de pizzas na pousada le ange","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9c2d46b5-4488-4382-1bf4-865c6f914100/public",loading:"lazy",alt:"foto da noite de risotos na pousada le ange","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/415e2adb-0537-4ce0-23cb-124869c06c00/public",loading:"lazy",alt:"foto do cachorro sorrindo para camera","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",loading:"lazy",alt:"uma mulher e dois cachorros na pousada le ange","data-aos":"fade-down","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"Espaços compartilhados"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, SPA e acesso às cachoeiras. Já em Búzios, nossos hóspedes desfrutam da piscina e dos ofurôs com vista incrível do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(HP,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"150",children:"Suítes"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"300",children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios. Na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"400",children:"Convivência"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"500",children:"Pedimos que considere se o seu pet é amigável, pois a pousada recebe vários outros pets. Além disso, aceitamos apenas humanos acompanhados por pets, e a idade mínima para hospedagem é 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cc7ff3b2-c267-4a5b-140b-cfae14d7f900/public",alt:"foto do quadro de cachorro na pousada le ange mar","data-aos":"flip-left","data-aos-delay":"600"})})]}),c.jsx(ca,{}),c.jsxs(qP,{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência com a gente!"}),c.jsx(Ar,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),"data-aos":"fade-in","data-aos-delay":"500"})]})]})),YP=aa`
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
`,KP=k.div`
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
`,XP=k.div`
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
`,QP=k.h2`
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
`,JP=k.p`
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
`,ZP=k.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`,eG=k.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
  filter: contrast(120%);
`,tG=k(on)`
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
`,mc=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>c.jsxs(c.Fragment,{children:[c.jsx(YP,{}),c.jsx(tG,{navigation:!0,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,modules:[Cr,kr,Wn],className:"mySwiper",$bgColor:n,onMouseEnter:()=>{},onMouseLeave:()=>{},children:e.map((i,a)=>c.jsx(sn,{children:c.jsxs(KP,{imagePosition:r,children:[c.jsxs(XP,{children:[c.jsx(QP,{$colorDefined:t,"data-aos":"fade-up","data-aos-delay":"100",children:i.title}),c.jsx(JP,{"data-aos":"fade-down","data-aos-delay":"250",children:i.description}),c.jsx(oa,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]}),c.jsx(ZP,{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx(eG,{src:i.imageUrl,alt:i.title})})]})},a))})]}),nG=jn`
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
`,rG=k.section`
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
        animation: ${nG} 5s ease-in-out infinite;
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
`,iG=k.div`
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
`,A2=({images:e})=>{const[t,n]=j.useState(null);return c.jsxs(rG,{children:[c.jsxs(iG,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Serra"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"200",children:c.jsx(oa,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in","data-aos-delay":"200",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/#/acomodaSerra#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx($p,{})]})]},i))})]})},aG=k.section`
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
`,oG=k.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,sG=k.div`
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
`,lG=k.div`
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
`,cG=k.h1`
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
`,dG=k.p`
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
`;k(Ar)`
    margin-top: auto; 
`;const gc=({colorDefinedBold:e})=>c.jsxs(aG,{children:[c.jsx(oG,{children:c.jsxs(sG,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Homem fazendo churrasco na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58565dfa-b512-4cb6-661c-044db3e48b00/public",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca15c837-1a56-47c9-8b78-ec68f1cfa200/public",alt:"Foto do hamburguer da le ange com batata frita e saladas",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-down","data-aos-delay":"200"})]})]})}),c.jsxs(lG,{children:[c.jsxs(cG,{colorDefinedBold:e,"data-aos":"fade-up","data-aos-delay":"400",children:["Alimentação ",c.jsx("b",{children:"Inclusa"})]}),c.jsxs(dG,{"data-aos":"fade-down","data-aos-delay":"500",children:["Na ",c.jsx("b",{children:"Le Ange"}),", tudo é pensado para oferecer uma experiência gastronômica diversificada, atendendo todo tipo de restrição alimentar e valorizando ingredientes locais e frescos.  ",c.jsx("br",{})," ",c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia:",c.jsx("br",{}),c.jsx("br",{}),c.jsxs("ol",{type:"disc",children:[c.jsx("li",{children:"Café da manhã;"}),c.jsx("li",{children:"Almoço;"}),c.jsx("li",{children:"Chá da tarde;"}),c.jsx("li",{children:"Jantar."}),c.jsx("br",{})]}),"Incluindo as nossas deliciosas sobremesas."]}),c.jsx(oa,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]})]}),Qg=k.section`
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
`,uG=k.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`,fG=k.div`
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
`,pG=k.p`
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
`,hG=[{id:1,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f192299-26a5-4cba-0d3d-f042f7cc4100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/96048cf4-e533-42ef-631c-17c79f758300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/53ddb117-9d86-42b5-0188-2733003a8400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/95f365f9-0cf7-4a99-de39-71618b26a300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/86f7d35e-3494-439d-483c-48e036d31a00/public"]},{id:2,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e872f9c-0035-4872-cf50-e7eac0bf1600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/532a9b10-7c75-4668-65bc-97a13ace5600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/abd1748a-6b4f-4c8d-4dfa-af0a83aaaf00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5f04125f-47d3-4abd-c359-9e3c129f6500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6c7bed9-f486-4be9-db47-7087f6943500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/122827e6-c434-44a2-0546-d37d2ffeaf00/public"]},{id:3,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cac55f28-555d-4ce5-6e3b-457af8476c00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a38d49ef-f498-4f03-cecd-d4ac8c69ac00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ffcf23fa-d075-4682-9bda-844c527d7f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d0f29504-829a-4c8f-8720-4c8ae3d27f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f1ccf0e-8406-4164-0955-29087e5a0f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/480b1655-49d4-4323-86c1-345224294000/public"]},{id:4,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3908ea8d-5d8e-4a13-ac75-dc312f545100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/66aa3be9-dd1d-460a-2a0d-4da92e68dc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf5974c4-3129-43bb-db61-23404c00d600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/def5ad59-dc78-4e9a-320b-28d28ec6c500/public"]},{id:5,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0afec340-71f1-42f3-3ffe-5af2438d7500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2603ac07-7df2-43eb-697f-99e79942c200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b2c446cd-cffd-49f1-cb59-65ace1b57a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca778cf7-62d4-48fb-6e1c-1e6d1fc29400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67bb7d62-0ff9-490f-160a-1335e4800200/public"]},{id:6,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5abab547-8a8a-408f-013d-0ec1ce1b7a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/faa5f682-d069-4b1c-c022-6d7f99612700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a78d689b-9028-473c-6edd-b0d0c4912400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2e5748ca-ff68-4da1-bff2-e852fa441a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2ac9fb3-1ba9-422f-ccee-9aea2852df00/public"]},{id:7,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/695f6ec1-0347-4549-4f16-663780080f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ddb51ed-4ba4-44ed-06a2-7d6c21838700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cb252e21-68b5-495b-d8fc-3a1dbe454600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2e35092-b9d0-49c7-701a-082307a62400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be407d5c-724c-4ebd-9873-a4057f301100/public"]}],vc=()=>c.jsxs(c.Fragment,{children:[c.jsx(Qg,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(uG,{children:c.jsx(on,{slidesPerView:1,spaceBetween:10,modules:[Cr,kr,Wn],pagination:!1,navigation:!0,loop:!0,grabCursor:!0,autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:hG.map(e=>c.jsx(sn,{children:c.jsxs(fG,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(on,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(sn,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"25px 0 25px 0"},loading:"lazy"})},n))}),c.jsx(pG,{children:e.text})]})},e.id))})}),c.jsx(Qg,{children:c.jsx(Ar,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]});k.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;const mG=k.section`
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
`,xc=({carousels:e})=>c.jsxs(c.Fragment,{children:[c.jsxs(mG,{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx("b",{children:"100%"})," Pet Friendly"]}),c.jsx(Ar,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),e.map((t,n)=>c.jsx(rf,{images:t.images,reverse:t.reverse||!1},n))]}),gG=k.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh!important;
    }
`,vG=k.section`
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
        padding: 5% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
        height: 100vh;
    }
`,xG=k.div`
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
`,yG=k.div`
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
`,wG=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b324ce14-d3d8-4fc3-fccf-b4b4a9806d00/public"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8b7eae12-574b-40fd-5e6f-7f341c81a600/public"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da7c577a-832a-4a84-d5fd-162e11915b00/public"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece77d44-3478-4c00-cb8f-073b002ed400/public"}],bG=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3cd47cc-01fa-43c8-ef2d-e57d8ba50d00/public",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5bdb3546-6085-40a1-059b-b977978f2800/public",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e69c27cf-cc71-4a1a-c859-7604db2ec700/public",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fe90a96-3e1a-475e-bf6c-b2f68430b400/public",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa931507-db19-427a-91a0-c30d8fb81800/public",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0b0ec5f-6bd1-427d-7bc9-93253779d000/public",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/82fb4467-00bc-422b-be3f-d13d0847d900/public",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f981b12-4550-4d26-bdc6-1e3050abf600/public",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff6d8ef-159a-46da-6fe7-0a826541f000/public",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23c08875-4c8e-470d-3635-56f4cdfc1000/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7910dc1-2d38-46fe-c997-734005e71600/public",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ba1de25-a892-4ee8-7165-584f54f0b600/public",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6da69e80-1cff-41e2-5434-318840221800/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro na mão do tutor",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dce2d881-18d3-4a3d-5b7e-ad7e364be300/public",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab67883-96b6-4f10-9c94-c5622ee8b000/public",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/56af4858-5fbf-438f-fac3-ee527c3a4600/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db285e3c-87b7-40db-b04b-cfd384d06200/public",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],SG=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,jG=k.div`
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
`,CG=k.section`
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
`,kG=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(_o,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Churrasco no sábado"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Almoço e noite especial"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],TG=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,AG=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",text:"Suíte Superior 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/99db9a7b-dafd-4b04-36ce-c4eac6880600/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d07d16a0-e7f4-4104-7d5e-f7e4c2dfa500/public",text:"Suíte Standard 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fd429f81-a091-4ca3-9f54-d4a1b730e200/public",text:"Suíte Standard 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a22d76b9-b7d4-4174-0cc1-4cfdfd57d500/public",text:"Suíte Master 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7ae1bee-6f60-4584-d03c-0aebd06a2600/public",text:"Suíte Superior 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4c448474-8a7b-489b-ac5f-7b11c4dfad00/public",text:"Suíte Standard 8",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/509535a4-9291-44a8-c250-5e8be0b28e00/public",text:"Suíte Superior 9",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/853f4009-5ddc-49ad-717f-3d49d3ad4900/public",text:"Suíte Master 10",loading:"lazy"}],EG=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;

  @media (max-width: 768px) {
    width: 100%!important;
  }
`,PG=k.div`
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
`,GG=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(gG,{}),c.jsx(Cn,{}),c.jsxs(vG,{children:[c.jsx(xG,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(yG,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(Ar,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")}),c.jsx(EG,{children:"*Só permitimos crianças acima de 13 anos!"})]})]}),c.jsx(jG,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(ca,{}),c.jsx(SG,{children:c.jsx(mc,{slides:wG})}),c.jsx(A2,{images:AG,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(gc,{}),c.jsx(xc,{carousels:bG}),c.jsx(TG,{children:c.jsx(st,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(PG,{children:c.jsx(Ro,{})}),c.jsx(CG,{children:c.jsx(Lo,{events:kG})}),c.jsx(vc,{}),c.jsx(Tr,{})]})),_G=jn`
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
`,zG=k.section`
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
        animation: ${_G} 5s ease-in-out infinite;
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
`,LG=k.div`
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
`,E2=({images:e})=>{const[t,n]=j.useState(null);return j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(zG,{children:[c.jsxs(LG,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Mar"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"250",children:c.jsx(oa,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in-up","data-aos-delay":"400",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/#/acomodaMar#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx($p,{})]})]},i))})]})},MG=k.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,OG=k.section`
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
`,RG=k.div`
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
`,IG=k.div`
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
`,DG=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"}],NG=k.section`
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
`,VG=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public",text:"Suíte Standard 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public",text:"Suíte Superior 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public",text:"Suíte Superior 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public",text:"Suíte Superior 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public",text:"Suíte Master 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public",text:"Suíte Master 8",loading:"lazy"}],FG=k.div`
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
`,BG=k.section`
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
`,$G=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
  width: 100%!important;
`,UG=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(_o,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Churrasco no sábado"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Almoço e noite especial"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],HG=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,qG=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],WG=k.div`
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
`,YG=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(MG,{}),c.jsx(Cn,{}),c.jsxs(OG,{children:[c.jsxs(IG,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(Ar,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx($G,{children:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsx(RG,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(FG,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(ca,{}),c.jsx(NG,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(mc,{slides:DG,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(E2,{images:VG}),c.jsx(gc,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(xc,{carousels:qG,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(HG,{children:c.jsx(st,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(WG,{children:c.jsx(Ro,{})}),c.jsx(BG,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(Lo,{events:UG})}),c.jsx(vc,{}),c.jsx(Tr,{})]}));function KG(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var P2={exports:{}};(function(e,t){(function(n,r){e.exports=r(j)})(typeof self<"u"?self:e1,function(n){return function(r){var i={};function a(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return r[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=r,a.c=i,a.d=function(o,s,l){a.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:l})},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,s){if(1&s&&(o=a(o)),8&s||4&s&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&s&&typeof o!="string")for(var d in o)a.d(l,d,(function(u){return o[u]}).bind(null,d));return l},a.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(s,"a",s),s},a.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},a.p="",a(a.s=2)}([function(r,i){r.exports=n},function(r,i,a){var o={linear:function(s,l,d,u){return(d-l)*s/u+l},easeInQuad:function(s,l,d,u){return(d-l)*(s/=u)*s+l},easeOutQuad:function(s,l,d,u){return-(d-l)*(s/=u)*(s-2)+l},easeInOutQuad:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s+l:-f/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,d,u){return(d-l)*(s/=u)*s*s+l},easeOutCubic:function(s,l,d,u){return(d-l)*((s=s/u-1)*s*s+1)+l},easeInOutCubic:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s+l:f/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,d,u){return(d-l)*(s/=u)*s*s*s+l},easeOutQuart:function(s,l,d,u){return-(d-l)*((s=s/u-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s*s+l:-f/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,d,u){return(d-l)*(s/=u)*s*s*s*s+l},easeOutQuint:function(s,l,d,u){return(d-l)*((s=s/u-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s*s*s+l:f/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,d,u){var f=d-l;return-f*Math.cos(s/u*(Math.PI/2))+f+l},easeOutSine:function(s,l,d,u){return(d-l)*Math.sin(s/u*(Math.PI/2))+l},easeInOutSine:function(s,l,d,u){return-(d-l)/2*(Math.cos(Math.PI*s/u)-1)+l},easeInExpo:function(s,l,d,u){return s==0?l:(d-l)*Math.pow(2,10*(s/u-1))+l},easeOutExpo:function(s,l,d,u){var f=d-l;return s==u?l+f:f*(1-Math.pow(2,-10*s/u))+l},easeInOutExpo:function(s,l,d,u){var f=d-l;return s===0?l:s===u?l+f:(s/=u/2)<1?f/2*Math.pow(2,10*(s-1))+l:f/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,d,u){return-(d-l)*(Math.sqrt(1-(s/=u)*s)-1)+l},easeOutCirc:function(s,l,d,u){return(d-l)*Math.sqrt(1-(s=s/u-1)*s)+l},easeInOutCirc:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?-f/2*(Math.sqrt(1-s*s)-1)+l:f/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,d,u){var f,p,v,g=d-l;return v=1.70158,s===0?l:(s/=u)==1?l+g:((p=0)||(p=.3*u),(f=g)<Math.abs(g)?(f=g,v=p/4):v=p/(2*Math.PI)*Math.asin(g/f),-f*Math.pow(2,10*(s-=1))*Math.sin((s*u-v)*(2*Math.PI)/p)+l)},easeOutElastic:function(s,l,d,u){var f,p,v,g=d-l;return v=1.70158,s===0?l:(s/=u)==1?l+g:((p=0)||(p=.3*u),(f=g)<Math.abs(g)?(f=g,v=p/4):v=p/(2*Math.PI)*Math.asin(g/f),f*Math.pow(2,-10*s)*Math.sin((s*u-v)*(2*Math.PI)/p)+g+l)},easeInOutElastic:function(s,l,d,u){var f,p,v,g=d-l;return v=1.70158,s===0?l:(s/=u/2)==2?l+g:((p=0)||(p=u*.44999999999999996),(f=g)<Math.abs(g)?(f=g,v=p/4):v=p/(2*Math.PI)*Math.asin(g/f),s<1?f*Math.pow(2,10*(s-=1))*Math.sin((s*u-v)*(2*Math.PI)/p)*-.5+l:f*Math.pow(2,-10*(s-=1))*Math.sin((s*u-v)*(2*Math.PI)/p)*.5+g+l)},easeInBack:function(s,l,d,u,f){return f===void 0&&(f=1.70158),(d-l)*(s/=u)*s*((f+1)*s-f)+l},easeOutBack:function(s,l,d,u,f){return f===void 0&&(f=1.70158),(d-l)*((s=s/u-1)*s*((f+1)*s+f)+1)+l},easeInOutBack:function(s,l,d,u,f){var p=d-l;return f===void 0&&(f=1.70158),(s/=u/2)<1?p/2*(s*s*((1+(f*=1.525))*s-f))+l:p/2*((s-=2)*s*((1+(f*=1.525))*s+f)+2)+l},easeInBounce:function(s,l,d,u){var f=d-l;return f-o.easeOutBounce(u-s,0,f,u)+l},easeOutBounce:function(s,l,d,u){var f=d-l;return(s/=u)<.36363636363636365?f*(7.5625*s*s)+l:s<.7272727272727273?f*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?f*(7.5625*(s-=.8181818181818182)*s+.9375)+l:f*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,d,u){var f=d-l;return s<u/2?.5*o.easeInBounce(2*s,0,f,u)+l:.5*o.easeOutBounce(2*s-u,0,f,u)+.5*f+l}};r.exports=o},function(r,i,a){r.exports=a(3)},function(r,i,a){a.r(i),a.d(i,"ReactConfetti",function(){return de});var o,s,l=a(0),d=a.n(l),u=a(1),f=a.n(u);function p(_,O){return _+Math.random()*(O-_)}function v(_,O){for(var N=0;N<O.length;N++){var R=O[N];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(_,R.key,R)}}function g(_,O,N){return O in _?Object.defineProperty(_,O,{value:N,enumerable:!0,configurable:!0,writable:!0}):_[O]=N,_}(function(_){_[_.Circle=0]="Circle",_[_.Square=1]="Square",_[_.Strip=2]="Strip"})(o||(o={})),function(_){_[_.Positive=1]="Positive",_[_.Negative=-1]="Negative"}(s||(s={}));var y=function(){function _(R,Y,B,U){(function(yc,wc){if(!(yc instanceof wc))throw new TypeError("Cannot call a class as a function")})(this,_),g(this,"context",void 0),g(this,"radius",void 0),g(this,"x",void 0),g(this,"y",void 0),g(this,"w",void 0),g(this,"h",void 0),g(this,"vx",void 0),g(this,"vy",void 0),g(this,"shape",void 0),g(this,"angle",void 0),g(this,"angularSpin",void 0),g(this,"color",void 0),g(this,"rotateY",void 0),g(this,"rotationDirection",void 0),g(this,"getOptions",void 0),this.getOptions=Y;var re,ce,he=this.getOptions(),kn=he.colors,qt=he.initialVelocityX,Wt=he.initialVelocityY;this.context=R,this.x=B,this.y=U,this.w=p(5,20),this.h=p(5,20),this.radius=p(5,10),this.vx=typeof qt=="number"?p(-qt,qt):p(qt.min,qt.max),this.vy=typeof Wt=="number"?p(-Wt,0):p(Wt.min,Wt.max),this.shape=(re=0,ce=2,Math.floor(re+Math.random()*(ce-re+1))),this.angle=p(0,360)*Math.PI/180,this.angularSpin=p(-.2,.2),this.color=kn[Math.floor(Math.random()*kn.length)],this.rotateY=p(0,1),this.rotationDirection=p(0,1)?s.Positive:s.Negative}var O,N;return O=_,(N=[{key:"update",value:function(){var R=this.getOptions(),Y=R.gravity,B=R.wind,U=R.friction,re=R.opacity,ce=R.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=Y,this.vx+=B,this.vx*=U,this.vy*=U,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var he=.1*this.rotationDirection;if(this.rotateY+=he,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=re,this.context.lineCap="round",this.context.lineWidth=2,ce&&typeof ce=="function")ce.call(this,this.context);else switch(this.shape){case o.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case o.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case o.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&v(O.prototype,N),_}();function w(_,O,N){return O in _?Object.defineProperty(_,O,{value:N,enumerable:!0,configurable:!0,writable:!0}):_[O]=N,_}var x=function _(O,N){var R=this;(function(B,U){if(!(B instanceof U))throw new TypeError("Cannot call a class as a function")})(this,_),w(this,"canvas",void 0),w(this,"context",void 0),w(this,"getOptions",void 0),w(this,"x",0),w(this,"y",0),w(this,"w",0),w(this,"h",0),w(this,"lastNumberOfPieces",0),w(this,"tweenInitTime",Date.now()),w(this,"particles",[]),w(this,"particlesGenerated",0),w(this,"removeParticleAt",function(B){R.particles.splice(B,1)}),w(this,"getParticle",function(){var B=p(R.x,R.w+R.x),U=p(R.y,R.h+R.y);return new y(R.context,R.getOptions,B,U)}),w(this,"animate",function(){var B=R.canvas,U=R.context,re=R.particlesGenerated,ce=R.lastNumberOfPieces,he=R.getOptions(),kn=he.run,qt=he.recycle,Wt=he.numberOfPieces,yc=he.debug,wc=he.tweenFunction,bc=he.tweenDuration;if(!kn)return!1;var Sc=R.particles.length,da=qt?Sc:re,jc=Date.now();if(da<Wt){ce!==Wt&&(R.tweenInitTime=jc,R.lastNumberOfPieces=Wt);for(var sh=R.tweenInitTime,G2=wc(jc-sh>bc?bc:Math.max(0,jc-sh),da,Wt,bc),lh=Math.round(G2-da),ch=0;ch<lh;ch++)R.particles.push(R.getParticle());R.particlesGenerated+=lh}return yc&&(U.font="12px sans-serif",U.fillStyle="#333",U.textAlign="right",U.fillText("Particles: ".concat(Sc),B.width-10,B.height-20)),R.particles.forEach(function(ua,dh){ua.update(),(ua.y>B.height||ua.y<-100||ua.x>B.width+100||ua.x<-100)&&(qt&&da<=Wt?R.particles[dh]=R.getParticle():R.removeParticleAt(dh))}),Sc>0||da<Wt}),this.canvas=O;var Y=this.canvas.getContext("2d");if(!Y)throw new Error("Could not get canvas context");this.context=Y,this.getOptions=N};function h(_,O){var N=Object.keys(_);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(_);O&&(R=R.filter(function(Y){return Object.getOwnPropertyDescriptor(_,Y).enumerable})),N.push.apply(N,R)}return N}function m(_){for(var O=1;O<arguments.length;O++){var N=arguments[O]!=null?arguments[O]:{};O%2?h(Object(N),!0).forEach(function(R){S(_,R,N[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(N)):h(Object(N)).forEach(function(R){Object.defineProperty(_,R,Object.getOwnPropertyDescriptor(N,R))})}return _}function b(_,O){for(var N=0;N<O.length;N++){var R=O[N];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(_,R.key,R)}}function S(_,O,N){return O in _?Object.defineProperty(_,O,{value:N,enumerable:!0,configurable:!0,writable:!0}):_[O]=N,_}var C={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:f.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},T=function(){function _(R,Y){var B=this;(function(re,ce){if(!(re instanceof ce))throw new TypeError("Cannot call a class as a function")})(this,_),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(re){var ce={confettiSource:{x:0,y:0,w:B.canvas.width,h:0}};B._options=m(m(m({},ce),C),re),Object.assign(B,re.confettiSource)}),S(this,"update",function(){var re=B.options,ce=re.run,he=re.onConfettiComplete,kn=B.canvas,qt=B.context;ce&&(qt.fillStyle="white",qt.clearRect(0,0,kn.width,kn.height)),B.generator.animate()?B.rafId=requestAnimationFrame(B.update):(he&&typeof he=="function"&&B.generator.particlesGenerated>0&&he.call(B,B),B._options.run=!1)}),S(this,"reset",function(){B.generator&&B.generator.particlesGenerated>0&&(B.generator.particlesGenerated=0,B.generator.particles=[],B.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){B.options={run:!1},B.rafId&&(cancelAnimationFrame(B.rafId),B.rafId=void 0)}),this.canvas=R;var U=this.canvas.getContext("2d");if(!U)throw new Error("Could not get canvas context");this.context=U,this.generator=new x(this.canvas,function(){return B.options}),this.options=Y,this.update()}var O,N;return O=_,(N=[{key:"options",get:function(){return this._options},set:function(R){var Y=this._options&&this._options.run,B=this._options&&this._options.recycle;this.setOptionsWithDefaults(R),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof R.recycle=="boolean"&&R.recycle&&B===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof R.run=="boolean"&&R.run&&Y===!1&&this.update()}}])&&b(O.prototype,N),_}();function A(_){return function(O){if(Array.isArray(O))return q(O)}(_)||function(O){if(typeof Symbol<"u"&&Symbol.iterator in Object(O))return Array.from(O)}(_)||D(_)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function G(_){return(G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O})(_)}function E(){return(E=Object.assign||function(_){for(var O=1;O<arguments.length;O++){var N=arguments[O];for(var R in N)Object.prototype.hasOwnProperty.call(N,R)&&(_[R]=N[R])}return _}).apply(this,arguments)}function P(_,O){var N=Object.keys(_);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(_);O&&(R=R.filter(function(Y){return Object.getOwnPropertyDescriptor(_,Y).enumerable})),N.push.apply(N,R)}return N}function z(_){for(var O=1;O<arguments.length;O++){var N=arguments[O]!=null?arguments[O]:{};O%2?P(Object(N),!0).forEach(function(R){be(_,R,N[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(N)):P(Object(N)).forEach(function(R){Object.defineProperty(_,R,Object.getOwnPropertyDescriptor(N,R))})}return _}function I(_,O){return function(N){if(Array.isArray(N))return N}(_)||function(N,R){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(N)))){var Y=[],B=!0,U=!1,re=void 0;try{for(var ce,he=N[Symbol.iterator]();!(B=(ce=he.next()).done)&&(Y.push(ce.value),!R||Y.length!==R);B=!0);}catch(kn){U=!0,re=kn}finally{try{B||he.return==null||he.return()}finally{if(U)throw re}}return Y}}(_,O)||D(_,O)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function D(_,O){if(_){if(typeof _=="string")return q(_,O);var N=Object.prototype.toString.call(_).slice(8,-1);return N==="Object"&&_.constructor&&(N=_.constructor.name),N==="Map"||N==="Set"?Array.from(_):N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)?q(_,O):void 0}}function q(_,O){(O==null||O>_.length)&&(O=_.length);for(var N=0,R=new Array(O);N<O;N++)R[N]=_[N];return R}function Z(_,O){if(!(_ instanceof O))throw new TypeError("Cannot call a class as a function")}function K(_,O){for(var N=0;N<O.length;N++){var R=O[N];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(_,R.key,R)}}function M(_,O){return(M=Object.setPrototypeOf||function(N,R){return N.__proto__=R,N})(_,O)}function V(_){var O=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var N,R=ee(_);if(O){var Y=ee(this).constructor;N=Reflect.construct(R,arguments,Y)}else N=R.apply(this,arguments);return $(this,N)}}function $(_,O){return!O||G(O)!=="object"&&typeof O!="function"?X(_):O}function X(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function ee(_){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)})(_)}function be(_,O,N){return O in _?Object.defineProperty(_,O,{value:N,enumerable:!0,configurable:!0,writable:!0}):_[O]=N,_}var me=d.a.createRef(),Te=function(_){(function(B,U){if(typeof U!="function"&&U!==null)throw new TypeError("Super expression must either be null or a function");B.prototype=Object.create(U&&U.prototype,{constructor:{value:B,writable:!0,configurable:!0}}),U&&M(B,U)})(Y,_);var O,N,R=V(Y);function Y(B){var U;Z(this,Y);for(var re=arguments.length,ce=new Array(re>1?re-1:0),he=1;he<re;he++)ce[he-1]=arguments[he];return be(X(U=R.call.apply(R,[this,B].concat(ce))),"canvas",d.a.createRef()),be(X(U),"confetti",void 0),U.canvas=B.canvasRef||me,U}return O=Y,(N=[{key:"componentDidMount",value:function(){if(this.canvas.current){var B=pe(this.props)[0];this.confetti=new T(this.canvas.current,B)}}},{key:"componentDidUpdate",value:function(){var B=pe(this.props)[0];this.confetti&&(this.confetti.options=B)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var B=I(pe(this.props),2),U=B[0],re=B[1],ce=z({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},re.style);return d.a.createElement("canvas",E({width:U.width,height:U.height,ref:this.canvas},re,{style:ce}))}}])&&K(O.prototype,N),Y}(l.Component);function pe(_){var O={},N={},R=[].concat(A(Object.keys(C)),["confettiSource","drawShape","onConfettiComplete"]),Y=["canvasRef"];for(var B in _){var U=_[B];R.includes(B)?O[B]=U:Y.includes(B)?Y[B]=U:N[B]=U}return[O,N,{}]}be(Te,"defaultProps",z({},C)),be(Te,"displayName","ReactConfetti");var de=d.a.forwardRef(function(_,O){return d.a.createElement(Te,E({canvasRef:O},_))});i.default=de}]).default})})(P2);var XG=P2.exports;const QG=ei(XG);jn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const Jg=k.select`
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
`,JG=k.div`
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
`,ZG=k.div`
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
`,e_=k.header`
    display: flex;
    gap: 5px;
`,En=k(({isActive:e,...t})=>c.jsx(Cx,{...t}))`
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
`,un=k.span`
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
`,t_=k.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,Zg=k(En)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,n_=k.div`
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
`,r_=k.div`
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
`,i_=()=>{const e=Sn(),[t,n]=j.useState(!1),[r,i]=j.useState(!1),[a,o]=j.useState(!1),[s,l]=j.useState(!1),[d,u]=j.useState(!1),[f,p]=j.useState(!1),v=["/","/sobre","/mar","/serra","/event","/acomodaSerra","/acomodaMar","/lpMar","lpSerra"];let g;const y=()=>{l(C=>!C),u(C=>!C)},w=()=>{l(!1),u(!1)},x=()=>{o(!0),clearTimeout(g),g=setTimeout(()=>{o(!1)},3e3)},h=Wl(),[m,b]=j.useState(""),S=C=>{const T=C.target.value;T&&(b(T),h(T))};return j.useEffect(()=>{v.includes(e.pathname)||h("/",{replace:!1})},[e.pathname,h]),j.useEffect(()=>(window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x),clearTimeout(g)}),[]),j.useEffect(()=>{if(e.pathname!=="/"){p(!0);const C=setTimeout(()=>{p(!1)},1e3);return()=>clearTimeout(C)}else p(!1)},[e.pathname]),j.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const C=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},8e3);return()=>clearTimeout(C)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),j.useEffect(()=>{s&&w()},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsx(JG,{isLoading:f,children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59746ba9-5d6e-4873-dad6-26930b03a900/public",alt:"Loading..."})}),c.jsxs(ZG,{isScrolled:a,children:[t&&c.jsx(t_,{isVisible:r,children:c.jsx(QG,{})}),c.jsx(Cx,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("source",{media:"(max-width: 768px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("source",{media:"(min-width: 769px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(e_,{children:[c.jsxs(En,{to:"/",isActive:e.pathname==="/",children:[c.jsx(un,{isVisible:e.pathname==="/",children:c.jsx(eg,{})}),"Início"]}),c.jsxs(En,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(un,{isVisible:e.pathname==="/sobre",children:c.jsx(tg,{})}),"Sobre nós"]}),c.jsxs(En,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(un,{isVisible:e.pathname==="/mar",children:c.jsx(Qm,{})}),"Le Ange Mar"]}),c.jsxs(En,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(un,{isVisible:e.pathname==="/serra",children:c.jsx(FT,{})}),"Le Ange Serra"]}),c.jsxs(Zg,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(un,{isVisible:e.pathname==="/event",children:c.jsx(Jm,{})}),"Eventos"]}),c.jsxs(Jg,{onChange:S,value:m,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(st,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva"})]}),c.jsxs(n_,{isScrolled:a,children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"logo da le ange"}),c.jsxs("button",{onClick:y,isClicked:d,children:["Menu",c.jsx(KG,{})]})]}),c.jsxs(r_,{isOpen:s,children:[c.jsx("button",{onClick:w,children:"X"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs(En,{to:"/",isActive:e.pathname==="/",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/",children:c.jsx(eg,{})}),"Início"]}),c.jsxs(En,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/sobre",children:c.jsx(tg,{})}),"Sobre nós"]}),c.jsxs(En,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/mar",children:c.jsx(Qm,{})}),"Le Ange Mar"]}),c.jsxs(En,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/serra",children:c.jsx(xj,{})}),"Le Ange Serra"]}),c.jsxs(Zg,{to:"/event",isActive:e.pathname==="/event",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/event",children:c.jsx(Jm,{})}),"Eventos"]}),c.jsxs(Jg,{onChange:S,value:m,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(st,{text:"Fazer minha reserva",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},a_=aa`
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
`,o_=k.section`
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
`,s_=k.div`
    width: 50%;
    height: 95%;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,l_=k.div`
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
`,c_=k.h2`
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
`,d_=k.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.75rem;
    }
`,u_=k.div`
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
`,f_=k.img`
    width: 100%;
    height: 75.8vh;
    object-fit: cover;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        height: 50vh;
    }
`,qe=te.forwardRef(({images:e=[],suites:t=[],reverse:n=!1,background:r="rgba(0, 0, 0, 0.1)"},i)=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(o_,{reverse:n,ref:i,children:[c.jsxs(s_,{"data-aos":"zoom-in","data-aos-delay":"50",children:[c.jsx(a_,{}),c.jsx(on,{modules:[Wn,kr,Cr],autoplay:{delay:2e5,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!0,pagination:!0,loop:!0,spaceBetween:10,slidesPerView:1,children:e.map((a,o)=>c.jsx(sn,{children:c.jsx(f_,{src:a,alt:`Slide ${o+1}`})},o))})]}),c.jsx(l_,{background:r,"data-aos":"fade-up","data-aos-delay":"100",children:t.map((a,o)=>{var s;return c.jsxs("div",{children:[c.jsx("section",{children:c.jsxs("div",{children:[c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"150",children:a.NomedaSuite}),c.jsx(c_,{"data-aos":"fade-up","data-aos-delay":"200",children:a.NomedaPousada})]})}),c.jsx(u_,{"data-aos":"fade-up","data-aos-delay":"250",children:(s=a.features)==null?void 0:s.map((l,d)=>c.jsxs("span",{children:[l.icon," ",l.text]},d))}),c.jsx(d_,{"data-aos":"fade-in","data-aos-delay":"400",children:a.Description}),c.jsx(st,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva agora!"})]},o)})})]}))),p_=k.div`
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

`,h_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7d1df8a5-0905-4ac0-5a2d-621e8a48dd00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/27861ce8-6beb-438a-6ff4-3cee719fe500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22957a6-e82d-46ab-01f2-336a3d84ec00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/26d9fcee-7e13-4b45-4d95-6248723ddc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7336810d-d00e-4445-529b-f16b72cc7700/public"],m_=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m² que une conforto e sofisticação. Equipada com cama king-size, ar-condicionado e lareira, também dispõe de uma varanda privativa com vista para a natureza, banheira relaxante e aquecedor de toalhas."}],g_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab53301-9865-467b-5746-7d359f21fe00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a27173c0-d56c-4c22-ea55-7f23cba7a800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/beb843cb-3ae0-4ea0-348c-5af6f79b9600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22c1ab9-1c7a-47e4-3642-0024f2b24700/public"],v_=[{NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece uma experiência completa: cama king-size, ar-condicionado, lareira, e uma varanda privativa com vista para a natureza. Para relaxar ainda mais, desfrute de uma banheira e do aquecedor de toalhas, garantindo máximo conforto."}],x_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eaddb3bf-35e7-4bff-09ff-0c5a80525800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/711abf2e-87c0-4568-ffa3-71f98954af00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58b29f7d-d13e-4c97-06d7-c23613222d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e01a043d-e7ca-4edc-d4ad-103e63e79600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a297c1da-191f-4479-7de3-3403c90a8400/public"],y_=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Esta suíte de 52m² é perfeita para momentos inesquecíveis, com cama king-size, ar-condicionado e lareira. A varanda privativa proporciona uma vista espetacular da natureza, enquanto a banheira relaxante e o aquecedor de toalhas completam o ambiente para maior comodidade."}],w_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a0c090c6-7dcb-4886-8dae-e439370b2a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/932de633-2aa1-41b9-a3ff-3a99f4cb5e00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e5f64afd-bc17-4cf3-b790-453e90545200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/18dc1fbd-cbbe-4ccf-d204-c47841cdc900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ceb5e56-07d1-44cf-b194-9a5ed2265b00/public"],b_=[{NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda privativa oferece uma vista deslumbrante da natureza, enquanto a banheira relaxante e o aquecedor de toalhas adicionam um toque a mais de conforto e elegância para a sua estadia."}],S_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9cb4ce2c-7d70-4a5d-fa18-7615aa389d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ae1efc69-3fed-4143-0162-fa6659f85000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e3c9ebb8-4dc0-42f0-7c77-efb7b307ef00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c2a76285-c7ca-4cfc-3194-567e7e193000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e9c2e45-b349-403a-3d09-93b6a0661c00/public"],j_=[{NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece cama king-size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa revela uma vista incrível da natureza e, para o máximo de conforto, a suíte ainda conta com uma banheira relaxante e aquecer de toalhas."}],C_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d24e6cd4-c8e9-437d-afdb-dadebbcb4000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ef9ef222-11b1-4689-435b-290edb163900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/178e93c6-234b-45a2-7fa1-167362cae400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5e9145f7-431e-49be-10c3-861a9289cc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fcae768c-1514-4874-e9eb-1dde99a62b00/public"],k_=[{NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"93m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(nh,{}),text:"Chaise lounge"},{icon:c.jsx(C2,{}),text:"Bay window"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Ampla varanda privativa"}],Description:"Desfrute de 93m² de luxo com cama king-size, ar-condicionado e lareira. A suíte conta com uma chaise lounge ao lado da bay window, banheira relaxante com vista para a natureza, aquecedor de toalhas e, ainda, uma varanda privativa, perfeita para aqueles momentos de tranquilidade."}],T_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f3d777cf-17c2-4055-75a9-4be9fcc33800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0860b499-9c8c-4e99-192a-3ebe36229d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9dd5297d-5fba-438f-555c-8cb19bb82a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e8184c4c-b550-4166-7448-7492a7477f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/421cea52-70a2-477b-0331-b21666a29c00/public"],A_=[{NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte confortável de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda oferece uma vista encantadora da natureza, e o espaço é complementado por uma banheira relaxante e aquecedor de toalhas, garantindo uma estadia única."}],E_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd53b58-4a7e-428b-ff6f-73a485a99f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/46aeb5ba-8400-4a23-f4e4-df0d97083b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b151e809-9f33-4e2c-6f87-0903cb86db00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5651b927-c41d-4f77-f187-3796426ae300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/af920b8e-ebfe-482c-c876-683601310500/public"],P_=[{NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte de 52m² que conta com cama king-size, ar-condicionado e lareira para momentos relaxantes. A varanda, ainda, exibe uma vista de tirar o fôlego da natureza, e a banheira relaxante com aquecedor de toalhas traz um toque de luxo e conforto."}],G_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/40cb4a09-1c14-43cb-e17a-bf61a96c6300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cd1824ad-8a82-49bf-ecdb-292e6a0e3500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/05d8b494-9ae3-429f-ed5c-8b192bf3e500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b70f4c55-c0c6-4356-0098-f6318c8ce600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c51dc547-138b-434c-dd48-60ae2ae95900/public"],__=[{NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Esta suíte ampla, com 52m², dispõe de cama king-size, ar-condicionado e lareira, perfeita para aqueles momentos de aconchego. Enquanto a banheira relaxante e o aquecedor de toalhas garantem maior comodidade, a varanda privativa promove uma vista única da natureza."}],z_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b04be4b1-aa90-4228-6dad-507f08379500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8caf9f13-0f6c-48cf-5606-6b2b0ce5d000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/85e23a34-3058-43dc-a035-61fd0e65c700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79feb4e3-78e2-4c90-92e3-b0acbe649300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/63467d9f-7285-43e0-ce5e-e5a83e158300/public"],L_=[{NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"80m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(uf,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(pt,{}),text:"Lareira"},{icon:c.jsx(nh,{}),text:"Couch lounge"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Ampla varanda privativa"}],Description:"Experimente o máximo de conforto em 80m², com cama king-size, ar-condicionado e lareira. Aproveite a chaise lounge ao lado da bay window, a banheira com vista para a natureza, aquecedor de toalhas e, ainda, a varanda privativa, onde você pode relaxar ao som da mata."}],M_=()=>{const e=Sn(),t={suite1:j.useRef(null),suite2:j.useRef(null),suite3:j.useRef(null),suite4:j.useRef(null),suite5:j.useRef(null),suite6:j.useRef(null),suite7:j.useRef(null),suite8:j.useRef(null),suite9:j.useRef(null),suite10:j.useRef(null)};return j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),j.useEffect(()=>{const n=()=>{var a;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((a=t[i])!=null&&a.current)){const o=t[i].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),c.jsxs(c.Fragment,{children:[c.jsx(Cn,{}),c.jsxs(p_,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Serra"})]}),c.jsx(qe,{id:"suite1",ref:t.suite1,images:h_,suites:m_,reverse:!0,background:"#CAD76680"}),c.jsx(qe,{id:"suite2",ref:t.suite2,images:g_,suites:v_,reverse:!1,background:"#CAD76680"}),c.jsx(qe,{id:"suite3",ref:t.suite3,images:x_,suites:y_,reverse:!0,background:"#CAD76680"}),c.jsx(qe,{id:"suite4",ref:t.suite4,images:w_,suites:b_,reverse:!1,background:"#CAD76680"}),c.jsx(qe,{id:"suite5",ref:t.suite5,images:S_,suites:j_,reverse:!0,background:"#CAD76680"}),c.jsx(qe,{id:"suite6",ref:t.suite6,images:C_,suites:k_,reverse:!1,background:"#CAD76680"}),c.jsx(qe,{id:"suite7",ref:t.suite7,images:T_,suites:A_,reverse:!0,background:"#CAD76680"}),c.jsx(qe,{id:"suite8",ref:t.suite8,images:E_,suites:P_,reverse:!1,background:"#CAD76680"}),c.jsx(qe,{id:"suite9",ref:t.suite9,images:G_,suites:__,reverse:!0,background:"#CAD76680"}),c.jsx(qe,{id:"suite10",ref:t.suite10,images:z_,suites:L_,reverse:!1,background:"#CAD76680"}),c.jsx(Tr,{})]})};function Er(e){return J({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"},child:[]},{tag:"path",attr:{d:"m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"},child:[]}]})(e)}const O_=k.div`
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

`,R_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/224faac1-7f2b-4e14-8d75-e9190e813b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/353c8221-e9bf-49c5-6c43-103a69ae6800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7dd92106-fe04-4e01-01f5-f174bef81a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84dce2f1-97a8-466a-8d53-d20540b75a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0200d43-3f83-438c-49ab-338849f8c100/public"],I_=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"50m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Er,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"A suíte oferece 50m² de conforto e sofisticação. Com cama king-size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro."}],D_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/11429c23-8024-4e73-d834-7af88bede500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/719761c8-54d7-4dba-e631-6557a1464600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1254a3f5-bae5-4110-5100-d17bf5602600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/541ebf7c-5343-4545-3d62-7862ea0c5b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/60c29539-7e27-476a-cec5-aa929f036100/public"],N_=[{NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Er,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² é ideal para quem busca conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, você desfrutará de cada momento ao lado do seu pet. Recarregue as energias na banheira relaxante, aproveite a vista deslumbrante para o mar e sinta a brisa suave da maresia, tornando sua estadia ainda mais especial."}],V_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/89368e85-889e-41fc-eafe-e6a23b278600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fca9fbcb-04a7-48b0-af5d-125a7da7a500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/01b5c7ac-d7a0-4647-a472-af2755980d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c11df969-92ac-4b82-5923-72add6d2a400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ab284cc9-797e-4de3-706f-a8e3c9958300/public"],F_=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Er,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Com 45m², esta suíte conta com uma cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, oferecendo o necessário para uma estadia repleta de tranquilidade. A vista incrível para o mar, junto à suave maresia, proporciona momentos de relaxamento para aproveitar ao lado do seu pet."}],B_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/609d4224-77e9-4993-093c-7e6b6f53cd00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf696df0-ff89-4aa5-b5ab-b42477dfc400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece7a36a-7989-4a77-c69e-963b7c41e500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd252cd-2c0a-420d-55e6-7ddb05319200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3bed0eb8-a9a7-4a71-48d5-7be1528fa400/public"],$_=[{NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Er,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Desfrute de 45m² de conforto e tranquilidade nesta suíte aconchegante. Equipada com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é o ambiente perfeito para relaxar. Conta, ainda, com uma vista espetacular para o mar, combinada com a brisa fresca da maresia."}],U_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d47d93cd-1d83-4684-b2cd-23067ba58b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d214206-6623-468f-7d4e-40db9793d700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2671e476-3ba9-402c-5864-0b3c4f2f6c00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f1a7a38f-4371-441a-2492-e7e0f97eee00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be3dccd2-e019-4d93-9c6c-3b930d519c00/public"],H_=[{NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Er,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Uma suíte de 45m² que une conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é ideal para vivenciar aqueles momentos de preguiça ao lado do seu pet. Relaxe ao som das ondas do mar e aproveite a banheira relaxante."}],q_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9891374e-4514-480c-bc7c-5e1af0ef7b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6747ab9c-105d-4e37-5be7-d14b63c6d100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4ee59c14-ad1f-409b-db20-e49298d49400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8d46666c-530f-42d4-9223-bdd74e4a7900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/31a78bcb-34a0-4254-b51e-3f6ff4dbe600/public"],W_=[{NomedaSuite:"Suíte Superior 6",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Er,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Com 45m² de puro conforto, esta suíte oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, proporcionando um ambiente mais do que acolhedor, tranquilo. Sem contar que a vista encantadora para o mar e a banheira de imersão tornam a suíte ainda mais relaxante."}],Y_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9b174ce2-2966-4c9e-9faf-185da8d1d200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b0924d25-dd2e-4a7b-5db4-558748300f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0c0b3f28-0981-477e-a77a-ee606e941f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252537ee-171f-4f70-3bda-8479e0c1be00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b90bd076-582a-4fe6-3fb1-95a0ceadc700/public"],K_=[{NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Er,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, criando um espaço aconchegante e tranquilo. Aproveite a vista cativante para o mar e relaxe na banheira de imersão, transformando sua estadia em um verdadeiro paraíso."}],X_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6280f6c6-f008-4f18-fe45-fe16d6d76000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eea5797e-34bc-4138-8ab7-9e4bd9fcd500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c112a2dd-d613-4801-d4a0-8d30b5121a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/90902690-7a42-4cad-b8aa-4099c8b58000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c967f3cc-5ae6-4ea1-4e3e-2041f83cb600/public"],Q_=[{NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Je,{}),text:"Frigobar"},{icon:c.jsx(Er,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Qe,{}),text:"Varanda privativa"}],Description:"A suíte de 45m² oferece o melhor em conforto, com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar. A vista deslumbrante para o mar e a banheira de imersão garantem momentos de total descanso e relaxamento."}],J_=()=>{const e=Sn(),t={suite1:j.useRef(null),suite2:j.useRef(null),suite3:j.useRef(null),suite4:j.useRef(null),suite5:j.useRef(null),suite6:j.useRef(null),suite7:j.useRef(null),suite8:j.useRef(null),suite9:j.useRef(null),suite10:j.useRef(null)};return j.useEffect(()=>{const n=()=>{var a;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((a=t[i])!=null&&a.current)){const o=t[i].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Cn,{}),c.jsxs(O_,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Mar"})]}),c.jsx(qe,{id:"suite1",ref:t.suite1,images:R_,suites:I_,reverse:!0,background:"#7AC4F350"}),c.jsx(qe,{id:"suite2",ref:t.suite2,images:D_,suites:N_,reverse:!1,background:"#7AC4F350"}),c.jsx(qe,{id:"suite3",ref:t.suite3,images:V_,suites:F_,reverse:!0,background:"#7AC4F350"}),c.jsx(qe,{id:"suite4",ref:t.suite4,images:B_,suites:$_,reverse:!1,background:"#7AC4F350"}),c.jsx(qe,{id:"suite5",ref:t.suite5,images:U_,suites:H_,reverse:!0,background:"#7AC4F350"}),c.jsx(qe,{id:"suite6",ref:t.suite6,images:q_,suites:W_,reverse:!1,background:"#7AC4F350"}),c.jsx(qe,{id:"suite7",ref:t.suite7,images:Y_,suites:K_,reverse:!0,background:"#7AC4F350"}),c.jsx(qe,{id:"suite8",ref:t.suite8,images:X_,suites:Q_,reverse:!1,background:"#7AC4F350"}),c.jsx(Tr,{})]})},Z_=k.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,ez=k.section`
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
`,tz=k.div`
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
`,nz=k.div`
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
`,rz=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"}],iz=k.section`
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
`,az=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public",text:"Suíte Standard 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public",text:"Suíte Superior 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public",text:"Suíte Superior 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public",text:"Suíte Superior 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public",text:"Suíte Master 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public",text:"Suíte Master 8",loading:"lazy"}],oz=k.div`
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
`,sz=k.section`
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
`,lz=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(_o,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Churrasco no sábado"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Almoço e noite especial"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],cz=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,dz=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],uz=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
`,fz=k.div`
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
`,pz=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(Z_,{}),c.jsx(Cn,{}),c.jsxs(ez,{children:[c.jsxs(nz,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(Ar,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(uz,{children:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsx(tz,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(oz,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(ca,{}),c.jsx(iz,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(mc,{slides:rz,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(E2,{images:az}),c.jsx(gc,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(xc,{carousels:dz,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(cz,{children:c.jsx(st,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(fz,{children:c.jsx(Ro,{})}),c.jsx(sz,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(Lo,{events:lz})}),c.jsx(vc,{}),c.jsx(Tr,{})]})),hz=k.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh!important;
    }
`,mz=k.section`
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
        padding: 5% 2.5%;
        flex-direction: column-reverse;
        position: relative;
        z-index: 2;
        height: 100vh;
    }
`,gz=k.div`
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
`,vz=k.div`
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
`,xz=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b324ce14-d3d8-4fc3-fccf-b4b4a9806d00/public"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8b7eae12-574b-40fd-5e6f-7f341c81a600/public"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da7c577a-832a-4a84-d5fd-162e11915b00/public"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece77d44-3478-4c00-cb8f-073b002ed400/public"}],yz=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3cd47cc-01fa-43c8-ef2d-e57d8ba50d00/public",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5bdb3546-6085-40a1-059b-b977978f2800/public",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e69c27cf-cc71-4a1a-c859-7604db2ec700/public",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fe90a96-3e1a-475e-bf6c-b2f68430b400/public",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa931507-db19-427a-91a0-c30d8fb81800/public",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0b0ec5f-6bd1-427d-7bc9-93253779d000/public",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/82fb4467-00bc-422b-be3f-d13d0847d900/public",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f981b12-4550-4d26-bdc6-1e3050abf600/public",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff6d8ef-159a-46da-6fe7-0a826541f000/public",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23c08875-4c8e-470d-3635-56f4cdfc1000/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7910dc1-2d38-46fe-c997-734005e71600/public",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ba1de25-a892-4ee8-7165-584f54f0b600/public",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6da69e80-1cff-41e2-5434-318840221800/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro na mão do tutor",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dce2d881-18d3-4a3d-5b7e-ad7e364be300/public",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab67883-96b6-4f10-9c94-c5622ee8b000/public",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/56af4858-5fbf-438f-fac3-ee527c3a4600/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db285e3c-87b7-40db-b04b-cfd384d06200/public",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],wz=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,bz=k.div`
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
`,Sz=k.section`
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
`,jz=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
`,Cz=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(_o,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Churrasco no sábado"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(ye,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(ye,{}),text:"Almoço e noite especial"},{icon:c.jsx(mt,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],kz=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,Tz=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",text:"Suíte Superior 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/99db9a7b-dafd-4b04-36ce-c4eac6880600/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d07d16a0-e7f4-4104-7d5e-f7e4c2dfa500/public",text:"Suíte Standard 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fd429f81-a091-4ca3-9f54-d4a1b730e200/public",text:"Suíte Standard 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a22d76b9-b7d4-4174-0cc1-4cfdfd57d500/public",text:"Suíte Master 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7ae1bee-6f60-4584-d03c-0aebd06a2600/public",text:"Suíte Superior 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4c448474-8a7b-489b-ac5f-7b11c4dfad00/public",text:"Suíte Standard 8",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/509535a4-9291-44a8-c250-5e8be0b28e00/public",text:"Suíte Superior 9",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/853f4009-5ddc-49ad-717f-3d49d3ad4900/public",text:"Suíte Master 10",loading:"lazy"}],Az=k.div`
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
`,Ez=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(hz,{}),c.jsx(Cn,{}),c.jsxs(mz,{children:[c.jsx(gz,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(vz,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(Ar,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")}),c.jsx(jz,{children:"*Só permitimos crianças acima de 13 anos!"})]})]}),c.jsx(bz,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(ca,{}),c.jsx(wz,{children:c.jsx(mc,{slides:xz})}),c.jsx(A2,{images:Tz,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(gc,{}),c.jsx(xc,{carousels:yz}),c.jsx(kz,{children:c.jsx(st,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(Az,{children:c.jsx(Ro,{})}),c.jsx(Sz,{children:c.jsx(Lo,{events:Cz})}),c.jsx(vc,{}),c.jsx(Tr,{})]}));function Pz(){const{pathname:e}=Sn();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Gz(){const e=Sn();return c.jsxs(c.Fragment,{children:[c.jsx(Pz,{}),c.jsx(TS,{children:c.jsxs(q5,{location:e,children:[c.jsx(fn,{path:"/",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(mP,{})})}),c.jsx(fn,{path:"/sobre",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(WP,{})})}),c.jsx(fn,{path:"/mar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(YG,{})})}),c.jsx(fn,{path:"/serra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(GG,{})})}),c.jsx(fn,{path:"/event",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(IP,{})})}),c.jsx(fn,{path:"/acomodaMar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(J_,{})})}),c.jsx(fn,{path:"/acomodaSerra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(M_,{})})}),c.jsx(fn,{path:"/lpSerra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(Ez,{})})}),c.jsx(fn,{path:"/lpMar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(pz,{})})})]},e.pathname)})]})}function _z(){const e=Sn(),n=["/lpMar","/lpSerra"].includes(e.pathname);return c.jsxs(c.Fragment,{children:[!n&&c.jsx(i_,{}),c.jsx(Gz,{})]})}function zz(){return c.jsx(Z5,{children:c.jsx(_z,{})})}px(document.getElementById("root")).render(c.jsx(j.StrictMode,{children:c.jsx(zz,{})}));
