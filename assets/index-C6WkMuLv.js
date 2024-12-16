function G2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Zg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ti(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var e1={exports:{}},Pl={},t1={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),_2=Symbol.for("react.portal"),z2=Symbol.for("react.fragment"),L2=Symbol.for("react.strict_mode"),M2=Symbol.for("react.profiler"),O2=Symbol.for("react.provider"),R2=Symbol.for("react.context"),I2=Symbol.for("react.forward_ref"),D2=Symbol.for("react.suspense"),N2=Symbol.for("react.memo"),V2=Symbol.for("react.lazy"),dh=Symbol.iterator;function F2(e){return e===null||typeof e!="object"?null:(e=dh&&e[dh]||e["@@iterator"],typeof e=="function"?e:null)}var n1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r1=Object.assign,i1={};function ea(e,t,n){this.props=e,this.context=t,this.refs=i1,this.updater=n||n1}ea.prototype.isReactComponent={};ea.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function a1(){}a1.prototype=ea.prototype;function uf(e,t,n){this.props=e,this.context=t,this.refs=i1,this.updater=n||n1}var ff=uf.prototype=new a1;ff.constructor=uf;r1(ff,ea.prototype);ff.isPureReactComponent=!0;var uh=Array.isArray,o1=Object.prototype.hasOwnProperty,pf={current:null},s1={key:!0,ref:!0,__self:!0,__source:!0};function l1(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)o1.call(t,r)&&!s1.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),d=0;d<s;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:jo,type:e,key:a,ref:o,props:i,_owner:pf.current}}function B2(e,t){return{$$typeof:jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hf(e){return typeof e=="object"&&e!==null&&e.$$typeof===jo}function $2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fh=/\/+/g;function jc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$2(""+e.key):t.toString(36)}function cs(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case jo:case _2:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+jc(o,0):r,uh(i)?(n="",e!=null&&(n=e.replace(fh,"$&/")+"/"),cs(i,t,n,"",function(d){return d})):i!=null&&(hf(i)&&(i=B2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fh,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",uh(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+jc(a,s);o+=cs(a,t,n,l,i)}else if(l=F2(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+jc(a,s++),o+=cs(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ro(e,t,n){if(e==null)return e;var r=[],i=0;return cs(e,r,"","",function(a){return t.call(n,a,i++)}),r}function U2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},ds={transition:null},H2={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:ds,ReactCurrentOwner:pf};function c1(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Ro,forEach:function(e,t,n){Ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ro(e,function(){t++}),t},toArray:function(e){return Ro(e,function(t){return t})||[]},only:function(e){if(!hf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=ea;ae.Fragment=z2;ae.Profiler=M2;ae.PureComponent=uf;ae.StrictMode=L2;ae.Suspense=D2;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H2;ae.act=c1;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=r1({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=pf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)o1.call(t,l)&&!s1.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:jo,type:e.type,key:i,ref:a,props:r,_owner:o}};ae.createContext=function(e){return e={$$typeof:R2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O2,_context:e},e.Consumer=e};ae.createElement=l1;ae.createFactory=function(e){var t=l1.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:I2,render:e}};ae.isValidElement=hf;ae.lazy=function(e){return{$$typeof:V2,_payload:{_status:-1,_result:e},_init:U2}};ae.memo=function(e,t){return{$$typeof:N2,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=ds.transition;ds.transition={};try{e()}finally{ds.transition=t}};ae.unstable_act=c1;ae.useCallback=function(e,t){return gt.current.useCallback(e,t)};ae.useContext=function(e){return gt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return gt.current.useEffect(e,t)};ae.useId=function(){return gt.current.useId()};ae.useImperativeHandle=function(e,t,n){return gt.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return gt.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return gt.current.useReducer(e,t,n)};ae.useRef=function(e){return gt.current.useRef(e)};ae.useState=function(e){return gt.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return gt.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return gt.current.useTransition()};ae.version="18.3.1";t1.exports=ae;var j=t1.exports;const te=ti(j),q2=G2({__proto__:null,default:te},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W2=j,Y2=Symbol.for("react.element"),K2=Symbol.for("react.fragment"),X2=Object.prototype.hasOwnProperty,Q2=W2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J2={key:!0,ref:!0,__self:!0,__source:!0};function d1(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)X2.call(t,r)&&!J2.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Y2,type:e,key:a,ref:o,props:i,_owner:Q2.current}}Pl.Fragment=K2;Pl.jsx=d1;Pl.jsxs=d1;e1.exports=Pl;var c=e1.exports,u1={exports:{}},Mt={},f1={exports:{}},p1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,V){var $=M.length;M.push(V);e:for(;0<$;){var X=$-1>>>1,ee=M[X];if(0<i(ee,V))M[X]=V,M[$]=ee,$=X;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var V=M[0],$=M.pop();if($!==V){M[0]=$;e:for(var X=0,ee=M.length,be=ee>>>1;X<be;){var ge=2*(X+1)-1,Te=M[ge],he=ge+1,de=M[he];if(0>i(Te,$))he<ee&&0>i(de,Te)?(M[X]=de,M[he]=$,X=he):(M[X]=Te,M[ge]=$,X=ge);else if(he<ee&&0>i(de,$))M[X]=de,M[he]=$,X=he;else break e}}return V}function i(M,V){var $=M.sortIndex-V.sortIndex;return $!==0?$:M.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],d=[],u=1,f=null,p=3,v=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(M){for(var V=n(d);V!==null;){if(V.callback===null)r(d);else if(V.startTime<=M)r(d),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(d)}}function b(M){if(y=!1,m(M),!g)if(n(l)!==null)g=!0,Z(S);else{var V=n(d);V!==null&&K(b,V.startTime-M)}}function S(M,V){g=!1,y&&(y=!1,x(A),A=-1),v=!0;var $=p;try{for(m(V),f=n(l);f!==null&&(!(f.expirationTime>V)||M&&!P());){var X=f.callback;if(typeof X=="function"){f.callback=null,p=f.priorityLevel;var ee=X(f.expirationTime<=V);V=e.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&r(l),m(V)}else r(l);f=n(l)}if(f!==null)var be=!0;else{var ge=n(d);ge!==null&&K(b,ge.startTime-V),be=!1}return be}finally{f=null,p=$,v=!1}}var C=!1,T=null,A=-1,G=5,E=-1;function P(){return!(e.unstable_now()-E<G)}function z(){if(T!==null){var M=e.unstable_now();E=M;var V=!0;try{V=T(!0,M)}finally{V?I():(C=!1,T=null)}}else C=!1}var I;if(typeof h=="function")I=function(){h(z)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,q=D.port2;D.port1.onmessage=z,I=function(){q.postMessage(null)}}else I=function(){w(z,0)};function Z(M){T=M,C||(C=!0,I())}function K(M,V){A=w(function(){M(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Z(S))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var $=p;p=V;try{return M()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=p;p=M;try{return V()}finally{p=$}},e.unstable_scheduleCallback=function(M,V,$){var X=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?X+$:X):$=X,M){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=$+ee,M={id:u++,callback:V,priorityLevel:M,startTime:$,expirationTime:ee,sortIndex:-1},$>X?(M.sortIndex=$,t(d,M),n(l)===null&&M===n(d)&&(y?(x(A),A=-1):y=!0,K(b,$-X))):(M.sortIndex=ee,t(l,M),g||v||(g=!0,Z(S))),M},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(M){var V=p;return function(){var $=p;p=V;try{return M.apply(this,arguments)}finally{p=$}}}})(p1);f1.exports=p1;var Z2=f1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eb=j,zt=Z2;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h1=new Set,Xa={};function ni(e,t){Ni(e,t),Ni(e+"Capture",t)}function Ni(e,t){for(Xa[e]=t,e=0;e<t.length;e++)h1.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pd=Object.prototype.hasOwnProperty,tb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},hh={};function nb(e){return Pd.call(hh,e)?!0:Pd.call(ph,e)?!1:tb.test(e)?hh[e]=!0:(ph[e]=!0,!1)}function rb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ib(e,t,n,r){if(t===null||typeof t>"u"||rb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function vt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){rt[e]=new vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];rt[t]=new vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){rt[e]=new vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){rt[e]=new vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){rt[e]=new vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){rt[e]=new vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){rt[e]=new vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){rt[e]=new vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){rt[e]=new vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mf,gf);rt[t]=new vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mf,gf);rt[t]=new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mf,gf);rt[t]=new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){rt[e]=new vt(e,1,!1,e.toLowerCase(),null,!1,!1)});rt.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){rt[e]=new vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function vf(e,t,n,r){var i=rt.hasOwnProperty(t)?rt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ib(t,n,i,r)&&(n=null),r||i===null?nb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qn=eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),fi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),g1=Symbol.for("react.context"),yf=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),wf=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),v1=Symbol.for("react.offscreen"),mh=Symbol.iterator;function pa(e){return e===null||typeof e!="object"?null:(e=mh&&e[mh]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,Cc;function Aa(e){if(Cc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cc=t&&t[1]||""}return`
`+Cc+e}var kc=!1;function Tc(e,t){if(!e||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Aa(e):""}function ab(e){switch(e.tag){case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return e=Tc(e.type,!1),e;case 11:return e=Tc(e.type.render,!1),e;case 1:return e=Tc(e.type,!0),e;default:return""}}function Ld(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pi:return"Fragment";case fi:return"Portal";case Gd:return"Profiler";case xf:return"StrictMode";case _d:return"Suspense";case zd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case g1:return(e.displayName||"Context")+".Consumer";case m1:return(e._context.displayName||"Context")+".Provider";case yf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wf:return t=e.displayName||null,t!==null?t:Ld(e.type)||"Memo";case Zn:t=e._payload,e=e._init;try{return Ld(e(t))}catch{}}return null}function ob(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ld(t);case 8:return t===xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function x1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sb(e){var t=x1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Do(e){e._valueTracker||(e._valueTracker=sb(e))}function y1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=x1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Md(e,t){var n=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function w1(e,t){t=t.checked,t!=null&&vf(e,"checked",t,!1)}function Od(e,t){w1(e,t);var n=vr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rd(e,t.type,vr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rd(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ea=Array.isArray;function Gi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Id(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Ea(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vr(n)}}function b1(e,t){var n=vr(t.value),r=vr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function yh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function S1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?S1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var No,j1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=No.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lb=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(e){lb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ma[t]=Ma[e]})});function C1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ma.hasOwnProperty(e)&&Ma[e]?(""+t).trim():t+"px"}function k1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=C1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cb=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nd(e,t){if(t){if(cb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Vd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fd=null;function bf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bd=null,_i=null,zi=null;function wh(e){if(e=To(e)){if(typeof Bd!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Ml(t),Bd(e.stateNode,e.type,t))}}function T1(e){_i?zi?zi.push(e):zi=[e]:_i=e}function A1(){if(_i){var e=_i,t=zi;if(zi=_i=null,wh(e),t)for(e=0;e<t.length;e++)wh(t[e])}}function E1(e,t){return e(t)}function P1(){}var Ac=!1;function G1(e,t,n){if(Ac)return e(t,n);Ac=!0;try{return E1(e,t,n)}finally{Ac=!1,(_i!==null||zi!==null)&&(P1(),A1())}}function Ja(e,t){var n=e.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var $d=!1;if(Fn)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){$d=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{$d=!1}function db(e,t,n,r,i,a,o,s,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(u){this.onError(u)}}var Oa=!1,Is=null,Ds=!1,Ud=null,ub={onError:function(e){Oa=!0,Is=e}};function fb(e,t,n,r,i,a,o,s,l){Oa=!1,Is=null,db.apply(ub,arguments)}function pb(e,t,n,r,i,a,o,s,l){if(fb.apply(this,arguments),Oa){if(Oa){var d=Is;Oa=!1,Is=null}else throw Error(F(198));Ds||(Ds=!0,Ud=d)}}function ri(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bh(e){if(ri(e)!==e)throw Error(F(188))}function hb(e){var t=e.alternate;if(!t){if(t=ri(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return bh(i),e;if(a===r)return bh(i),t;a=a.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function z1(e){return e=hb(e),e!==null?L1(e):null}function L1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=L1(e);if(t!==null)return t;e=e.sibling}return null}var M1=zt.unstable_scheduleCallback,Sh=zt.unstable_cancelCallback,mb=zt.unstable_shouldYield,gb=zt.unstable_requestPaint,Re=zt.unstable_now,vb=zt.unstable_getCurrentPriorityLevel,Sf=zt.unstable_ImmediatePriority,O1=zt.unstable_UserBlockingPriority,Ns=zt.unstable_NormalPriority,xb=zt.unstable_LowPriority,R1=zt.unstable_IdlePriority,Gl=null,xn=null;function yb(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Gl,e,void 0,(e.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Sb,wb=Math.log,bb=Math.LN2;function Sb(e){return e>>>=0,e===0?32:31-(wb(e)/bb|0)|0}var Vo=64,Fo=4194304;function Pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Pa(s):(a&=o,a!==0&&(r=Pa(a)))}else o=n&~i,o!==0?r=Pa(o):a!==0&&(r=Pa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-en(t),i=1<<n,r|=e[n],t&=~i;return r}function jb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-en(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=jb(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Hd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function I1(){var e=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),e}function Ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-en(t),e[t]=n}function kb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-en(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function jf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-en(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function D1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var N1,Cf,V1,F1,B1,qd=!1,Bo=[],sr=null,lr=null,cr=null,Za=new Map,eo=new Map,tr=[],Tb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function ma(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=To(t),t!==null&&Cf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ab(e,t,n,r,i){switch(t){case"focusin":return sr=ma(sr,e,t,n,r,i),!0;case"dragenter":return lr=ma(lr,e,t,n,r,i),!0;case"mouseover":return cr=ma(cr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Za.set(a,ma(Za.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,eo.set(a,ma(eo.get(a)||null,e,t,n,r,i)),!0}return!1}function $1(e){var t=Or(e.target);if(t!==null){var n=ri(t);if(n!==null){if(t=n.tag,t===13){if(t=_1(n),t!==null){e.blockedOn=t,B1(e.priority,function(){V1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fd=r,n.target.dispatchEvent(r),Fd=null}else return t=To(n),t!==null&&Cf(t),e.blockedOn=n,!1;t.shift()}return!0}function Ch(e,t,n){us(e)&&n.delete(t)}function Eb(){qd=!1,sr!==null&&us(sr)&&(sr=null),lr!==null&&us(lr)&&(lr=null),cr!==null&&us(cr)&&(cr=null),Za.forEach(Ch),eo.forEach(Ch)}function ga(e,t){e.blockedOn===t&&(e.blockedOn=null,qd||(qd=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,Eb)))}function to(e){function t(i){return ga(i,e)}if(0<Bo.length){ga(Bo[0],e);for(var n=1;n<Bo.length;n++){var r=Bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sr!==null&&ga(sr,e),lr!==null&&ga(lr,e),cr!==null&&ga(cr,e),Za.forEach(t),eo.forEach(t),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)$1(n),n.blockedOn===null&&tr.shift()}var Li=qn.ReactCurrentBatchConfig,Fs=!0;function Pb(e,t,n,r){var i=pe,a=Li.transition;Li.transition=null;try{pe=1,kf(e,t,n,r)}finally{pe=i,Li.transition=a}}function Gb(e,t,n,r){var i=pe,a=Li.transition;Li.transition=null;try{pe=4,kf(e,t,n,r)}finally{pe=i,Li.transition=a}}function kf(e,t,n,r){if(Fs){var i=Wd(e,t,n,r);if(i===null)Dc(e,t,r,Bs,n),jh(e,r);else if(Ab(i,e,t,n,r))r.stopPropagation();else if(jh(e,r),t&4&&-1<Tb.indexOf(e)){for(;i!==null;){var a=To(i);if(a!==null&&N1(a),a=Wd(e,t,n,r),a===null&&Dc(e,t,r,Bs,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Dc(e,t,r,null,n)}}var Bs=null;function Wd(e,t,n,r){if(Bs=null,e=bf(r),e=Or(e),e!==null)if(t=ri(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bs=e,null}function U1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vb()){case Sf:return 1;case O1:return 4;case Ns:case xb:return 16;case R1:return 536870912;default:return 16}default:return 16}}var rr=null,Tf=null,fs=null;function H1(){if(fs)return fs;var e,t=Tf,n=t.length,r,i="value"in rr?rr.value:rr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return fs=i.slice(e,1<r?1-r:void 0)}function ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function kh(){return!1}function Ot(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$o:kh,this.isPropagationStopped=kh,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=Ot(ta),ko=_e({},ta,{view:0,detail:0}),_b=Ot(ko),Pc,Gc,va,_l=_e({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==va&&(va&&e.type==="mousemove"?(Pc=e.screenX-va.screenX,Gc=e.screenY-va.screenY):Gc=Pc=0,va=e),Pc)},movementY:function(e){return"movementY"in e?e.movementY:Gc}}),Th=Ot(_l),zb=_e({},_l,{dataTransfer:0}),Lb=Ot(zb),Mb=_e({},ko,{relatedTarget:0}),_c=Ot(Mb),Ob=_e({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Rb=Ot(Ob),Ib=_e({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Db=Ot(Ib),Nb=_e({},ta,{data:0}),Ah=Ot(Nb),Vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $b(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bb[e])?!!t[e]:!1}function Ef(){return $b}var Ub=_e({},ko,{key:function(e){if(e.key){var t=Vb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(e){return e.type==="keypress"?ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hb=Ot(Ub),qb=_e({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=Ot(qb),Wb=_e({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),Yb=Ot(Wb),Kb=_e({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xb=Ot(Kb),Qb=_e({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jb=Ot(Qb),Zb=[9,13,27,32],Pf=Fn&&"CompositionEvent"in window,Ra=null;Fn&&"documentMode"in document&&(Ra=document.documentMode);var e4=Fn&&"TextEvent"in window&&!Ra,q1=Fn&&(!Pf||Ra&&8<Ra&&11>=Ra),Ph=" ",Gh=!1;function W1(e,t){switch(e){case"keyup":return Zb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hi=!1;function t4(e,t){switch(e){case"compositionend":return Y1(t);case"keypress":return t.which!==32?null:(Gh=!0,Ph);case"textInput":return e=t.data,e===Ph&&Gh?null:e;default:return null}}function n4(e,t){if(hi)return e==="compositionend"||!Pf&&W1(e,t)?(e=H1(),fs=Tf=rr=null,hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return q1&&t.locale!=="ko"?null:t.data;default:return null}}var r4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r4[e.type]:t==="textarea"}function K1(e,t,n,r){T1(r),t=$s(t,"onChange"),0<t.length&&(n=new Af("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ia=null,no=null;function i4(e){ov(e,0)}function zl(e){var t=vi(e);if(y1(t))return e}function a4(e,t){if(e==="change")return t}var X1=!1;if(Fn){var zc;if(Fn){var Lc="oninput"in document;if(!Lc){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),Lc=typeof zh.oninput=="function"}zc=Lc}else zc=!1;X1=zc&&(!document.documentMode||9<document.documentMode)}function Lh(){Ia&&(Ia.detachEvent("onpropertychange",Q1),no=Ia=null)}function Q1(e){if(e.propertyName==="value"&&zl(no)){var t=[];K1(t,no,e,bf(e)),G1(i4,t)}}function o4(e,t,n){e==="focusin"?(Lh(),Ia=t,no=n,Ia.attachEvent("onpropertychange",Q1)):e==="focusout"&&Lh()}function s4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(no)}function l4(e,t){if(e==="click")return zl(t)}function c4(e,t){if(e==="input"||e==="change")return zl(t)}function d4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:d4;function ro(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pd.call(t,i)||!rn(e[i],t[i]))return!1}return!0}function Mh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oh(e,t){var n=Mh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mh(n)}}function J1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?J1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Z1(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function Gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function u4(e){var t=Z1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&J1(n.ownerDocument.documentElement,n)){if(r!==null&&Gf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Oh(n,a);var o=Oh(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f4=Fn&&"documentMode"in document&&11>=document.documentMode,mi=null,Yd=null,Da=null,Kd=!1;function Rh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kd||mi==null||mi!==Rs(r)||(r=mi,"selectionStart"in r&&Gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Da&&ro(Da,r)||(Da=r,r=$s(Yd,"onSelect"),0<r.length&&(t=new Af("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mi)))}function Uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gi={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},Mc={},ev={};Fn&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Ll(e){if(Mc[e])return Mc[e];if(!gi[e])return e;var t=gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ev)return Mc[e]=t[n];return e}var tv=Ll("animationend"),nv=Ll("animationiteration"),rv=Ll("animationstart"),iv=Ll("transitionend"),av=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(e,t){av.set(e,t),ni(t,[e])}for(var Oc=0;Oc<Ih.length;Oc++){var Rc=Ih[Oc],p4=Rc.toLowerCase(),h4=Rc[0].toUpperCase()+Rc.slice(1);br(p4,"on"+h4)}br(tv,"onAnimationEnd");br(nv,"onAnimationIteration");br(rv,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(iv,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m4=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Dh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pb(r,t,void 0,e),e.currentTarget=null}function ov(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,d=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Dh(i,s,d),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,d=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Dh(i,s,d),a=l}}}if(Ds)throw e=Ud,Ds=!1,Ud=null,e}function xe(e,t){var n=t[eu];n===void 0&&(n=t[eu]=new Set);var r=e+"__bubble";n.has(r)||(sv(t,e,2,!1),n.add(r))}function Ic(e,t,n){var r=0;t&&(r|=4),sv(n,e,r,t)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[Ho]){e[Ho]=!0,h1.forEach(function(n){n!=="selectionchange"&&(m4.has(n)||Ic(n,!1,e),Ic(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ho]||(t[Ho]=!0,Ic("selectionchange",!1,t))}}function sv(e,t,n,r){switch(U1(t)){case 1:var i=Pb;break;case 4:i=Gb;break;default:i=kf}n=i.bind(null,t,n,e),i=void 0,!$d||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Dc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Or(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}G1(function(){var d=a,u=bf(n),f=[];e:{var p=av.get(e);if(p!==void 0){var v=Af,g=e;switch(e){case"keypress":if(ps(n)===0)break e;case"keydown":case"keyup":v=Hb;break;case"focusin":g="focus",v=_c;break;case"focusout":g="blur",v=_c;break;case"beforeblur":case"afterblur":v=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Lb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Yb;break;case tv:case nv:case rv:v=Rb;break;case iv:v=Xb;break;case"scroll":v=_b;break;case"wheel":v=Jb;break;case"copy":case"cut":case"paste":v=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Eh}var y=(t&4)!==0,w=!y&&e==="scroll",x=y?p!==null?p+"Capture":null:p;y=[];for(var h=d,m;h!==null;){m=h;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,x!==null&&(b=Ja(h,x),b!=null&&y.push(ao(h,b,m)))),w)break;h=h.return}0<y.length&&(p=new v(p,g,null,n,u),f.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Fd&&(g=n.relatedTarget||n.fromElement)&&(Or(g)||g[Bn]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=d,g=g?Or(g):null,g!==null&&(w=ri(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=d),v!==g)){if(y=Th,b="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=Eh,b="onPointerLeave",x="onPointerEnter",h="pointer"),w=v==null?p:vi(v),m=g==null?p:vi(g),p=new y(b,h+"leave",v,n,u),p.target=w,p.relatedTarget=m,b=null,Or(u)===d&&(y=new y(x,h+"enter",g,n,u),y.target=m,y.relatedTarget=w,b=y),w=b,v&&g)t:{for(y=v,x=g,h=0,m=y;m;m=li(m))h++;for(m=0,b=x;b;b=li(b))m++;for(;0<h-m;)y=li(y),h--;for(;0<m-h;)x=li(x),m--;for(;h--;){if(y===x||x!==null&&y===x.alternate)break t;y=li(y),x=li(x)}y=null}else y=null;v!==null&&Nh(f,p,v,y,!1),g!==null&&w!==null&&Nh(f,w,g,y,!0)}}e:{if(p=d?vi(d):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=a4;else if(_h(p))if(X1)S=c4;else{S=s4;var C=o4}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=l4);if(S&&(S=S(e,d))){K1(f,S,n,u);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Rd(p,"number",p.value)}switch(C=d?vi(d):window,e){case"focusin":(_h(C)||C.contentEditable==="true")&&(mi=C,Yd=d,Da=null);break;case"focusout":Da=Yd=mi=null;break;case"mousedown":Kd=!0;break;case"contextmenu":case"mouseup":case"dragend":Kd=!1,Rh(f,n,u);break;case"selectionchange":if(f4)break;case"keydown":case"keyup":Rh(f,n,u)}var T;if(Pf)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else hi?W1(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(q1&&n.locale!=="ko"&&(hi||A!=="onCompositionStart"?A==="onCompositionEnd"&&hi&&(T=H1()):(rr=u,Tf="value"in rr?rr.value:rr.textContent,hi=!0)),C=$s(d,A),0<C.length&&(A=new Ah(A,e,null,n,u),f.push({event:A,listeners:C}),T?A.data=T:(T=Y1(n),T!==null&&(A.data=T)))),(T=e4?t4(e,n):n4(e,n))&&(d=$s(d,"onBeforeInput"),0<d.length&&(u=new Ah("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:d}),u.data=T))}ov(f,t)})}function ao(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $s(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ja(e,n),a!=null&&r.unshift(ao(e,a,i)),a=Ja(e,t),a!=null&&r.push(ao(e,a,i))),e=e.return}return r}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nh(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,d=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&d!==null&&(s=d,i?(l=Ja(n,a),l!=null&&o.unshift(ao(n,l,s))):i||(l=Ja(n,a),l!=null&&o.push(ao(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var g4=/\r\n?/g,v4=/\u0000|\uFFFD/g;function Vh(e){return(typeof e=="string"?e:""+e).replace(g4,`
`).replace(v4,"")}function qo(e,t,n){if(t=Vh(t),Vh(e)!==t&&n)throw Error(F(425))}function Us(){}var Xd=null,Qd=null;function Jd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,x4=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,y4=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(e){return Fh.resolve(null).then(e).catch(w4)}:Zd;function w4(e){setTimeout(function(){throw e})}function Nc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),to(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);to(t)}function dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var na=Math.random().toString(36).slice(2),mn="__reactFiber$"+na,oo="__reactProps$"+na,Bn="__reactContainer$"+na,eu="__reactEvents$"+na,b4="__reactListeners$"+na,S4="__reactHandles$"+na;function Or(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bh(e);e!==null;){if(n=e[mn])return n;e=Bh(e)}return t}e=n,n=e.parentNode}return null}function To(e){return e=e[mn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Ml(e){return e[oo]||null}var tu=[],xi=-1;function Sr(e){return{current:e}}function we(e){0>xi||(e.current=tu[xi],tu[xi]=null,xi--)}function ve(e,t){xi++,tu[xi]=e.current,e.current=t}var xr={},ft=Sr(xr),bt=Sr(!1),Wr=xr;function Vi(e,t){var n=e.type.contextTypes;if(!n)return xr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function Hs(){we(bt),we(ft)}function $h(e,t,n){if(ft.current!==xr)throw Error(F(168));ve(ft,t),ve(bt,n)}function lv(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,ob(e)||"Unknown",i));return _e({},n,r)}function qs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xr,Wr=ft.current,ve(ft,e),ve(bt,bt.current),!0}function Uh(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=lv(e,t,Wr),r.__reactInternalMemoizedMergedChildContext=e,we(bt),we(ft),ve(ft,e)):we(bt),ve(bt,n)}var _n=null,Ol=!1,Vc=!1;function cv(e){_n===null?_n=[e]:_n.push(e)}function j4(e){Ol=!0,cv(e)}function jr(){if(!Vc&&_n!==null){Vc=!0;var e=0,t=pe;try{var n=_n;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_n=null,Ol=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),M1(Sf,jr),i}finally{pe=t,Vc=!1}}return null}var yi=[],wi=0,Ws=null,Ys=0,Nt=[],Vt=0,Yr=null,zn=1,Ln="";function _r(e,t){yi[wi++]=Ys,yi[wi++]=Ws,Ws=e,Ys=t}function dv(e,t,n){Nt[Vt++]=zn,Nt[Vt++]=Ln,Nt[Vt++]=Yr,Yr=e;var r=zn;e=Ln;var i=32-en(r)-1;r&=~(1<<i),n+=1;var a=32-en(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-en(t)+i|n<<i|r,Ln=a+e}else zn=1<<a|n<<i|r,Ln=e}function _f(e){e.return!==null&&(_r(e,1),dv(e,1,0))}function zf(e){for(;e===Ws;)Ws=yi[--wi],yi[wi]=null,Ys=yi[--wi],yi[wi]=null;for(;e===Yr;)Yr=Nt[--Vt],Nt[Vt]=null,Ln=Nt[--Vt],Nt[Vt]=null,zn=Nt[--Vt],Nt[Vt]=null}var Gt=null,Pt=null,Ce=!1,Jt=null;function uv(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,Pt=dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yr!==null?{id:zn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Gt=e,Pt=null,!0):!1;default:return!1}}function nu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ru(e){if(Ce){var t=Pt;if(t){var n=t;if(!Hh(e,t)){if(nu(e))throw Error(F(418));t=dr(n.nextSibling);var r=Gt;t&&Hh(e,t)?uv(r,n):(e.flags=e.flags&-4097|2,Ce=!1,Gt=e)}}else{if(nu(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ce=!1,Gt=e}}}function qh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function Wo(e){if(e!==Gt)return!1;if(!Ce)return qh(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jd(e.type,e.memoizedProps)),t&&(t=Pt)){if(nu(e))throw fv(),Error(F(418));for(;t;)uv(e,t),t=dr(t.nextSibling)}if(qh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=dr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=Gt?dr(e.stateNode.nextSibling):null;return!0}function fv(){for(var e=Pt;e;)e=dr(e.nextSibling)}function Fi(){Pt=Gt=null,Ce=!1}function Lf(e){Jt===null?Jt=[e]:Jt.push(e)}var C4=qn.ReactCurrentBatchConfig;function xa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Yo(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wh(e){var t=e._init;return t(e._payload)}function pv(e){function t(x,h){if(e){var m=x.deletions;m===null?(x.deletions=[h],x.flags|=16):m.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function r(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=hr(x,h),x.index=0,x.sibling=null,x}function a(x,h,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<h?(x.flags|=2,h):m):(x.flags|=2,h)):(x.flags|=1048576,h)}function o(x){return e&&x.alternate===null&&(x.flags|=2),x}function s(x,h,m,b){return h===null||h.tag!==6?(h=Wc(m,x.mode,b),h.return=x,h):(h=i(h,m),h.return=x,h)}function l(x,h,m,b){var S=m.type;return S===pi?u(x,h,m.props.children,b,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zn&&Wh(S)===h.type)?(b=i(h,m.props),b.ref=xa(x,h,m),b.return=x,b):(b=ws(m.type,m.key,m.props,null,x.mode,b),b.ref=xa(x,h,m),b.return=x,b)}function d(x,h,m,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Yc(m,x.mode,b),h.return=x,h):(h=i(h,m.children||[]),h.return=x,h)}function u(x,h,m,b,S){return h===null||h.tag!==7?(h=Br(m,x.mode,b,S),h.return=x,h):(h=i(h,m),h.return=x,h)}function f(x,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Wc(""+h,x.mode,m),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Io:return m=ws(h.type,h.key,h.props,null,x.mode,m),m.ref=xa(x,null,h),m.return=x,m;case fi:return h=Yc(h,x.mode,m),h.return=x,h;case Zn:var b=h._init;return f(x,b(h._payload),m)}if(Ea(h)||pa(h))return h=Br(h,x.mode,m,null),h.return=x,h;Yo(x,h)}return null}function p(x,h,m,b){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(x,h,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Io:return m.key===S?l(x,h,m,b):null;case fi:return m.key===S?d(x,h,m,b):null;case Zn:return S=m._init,p(x,h,S(m._payload),b)}if(Ea(m)||pa(m))return S!==null?null:u(x,h,m,b,null);Yo(x,m)}return null}function v(x,h,m,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(m)||null,s(h,x,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Io:return x=x.get(b.key===null?m:b.key)||null,l(h,x,b,S);case fi:return x=x.get(b.key===null?m:b.key)||null,d(h,x,b,S);case Zn:var C=b._init;return v(x,h,m,C(b._payload),S)}if(Ea(b)||pa(b))return x=x.get(m)||null,u(h,x,b,S,null);Yo(h,b)}return null}function g(x,h,m,b){for(var S=null,C=null,T=h,A=h=0,G=null;T!==null&&A<m.length;A++){T.index>A?(G=T,T=null):G=T.sibling;var E=p(x,T,m[A],b);if(E===null){T===null&&(T=G);break}e&&T&&E.alternate===null&&t(x,T),h=a(E,h,A),C===null?S=E:C.sibling=E,C=E,T=G}if(A===m.length)return n(x,T),Ce&&_r(x,A),S;if(T===null){for(;A<m.length;A++)T=f(x,m[A],b),T!==null&&(h=a(T,h,A),C===null?S=T:C.sibling=T,C=T);return Ce&&_r(x,A),S}for(T=r(x,T);A<m.length;A++)G=v(T,x,A,m[A],b),G!==null&&(e&&G.alternate!==null&&T.delete(G.key===null?A:G.key),h=a(G,h,A),C===null?S=G:C.sibling=G,C=G);return e&&T.forEach(function(P){return t(x,P)}),Ce&&_r(x,A),S}function y(x,h,m,b){var S=pa(m);if(typeof S!="function")throw Error(F(150));if(m=S.call(m),m==null)throw Error(F(151));for(var C=S=null,T=h,A=h=0,G=null,E=m.next();T!==null&&!E.done;A++,E=m.next()){T.index>A?(G=T,T=null):G=T.sibling;var P=p(x,T,E.value,b);if(P===null){T===null&&(T=G);break}e&&T&&P.alternate===null&&t(x,T),h=a(P,h,A),C===null?S=P:C.sibling=P,C=P,T=G}if(E.done)return n(x,T),Ce&&_r(x,A),S;if(T===null){for(;!E.done;A++,E=m.next())E=f(x,E.value,b),E!==null&&(h=a(E,h,A),C===null?S=E:C.sibling=E,C=E);return Ce&&_r(x,A),S}for(T=r(x,T);!E.done;A++,E=m.next())E=v(T,x,A,E.value,b),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?A:E.key),h=a(E,h,A),C===null?S=E:C.sibling=E,C=E);return e&&T.forEach(function(z){return t(x,z)}),Ce&&_r(x,A),S}function w(x,h,m,b){if(typeof m=="object"&&m!==null&&m.type===pi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Io:e:{for(var S=m.key,C=h;C!==null;){if(C.key===S){if(S=m.type,S===pi){if(C.tag===7){n(x,C.sibling),h=i(C,m.props.children),h.return=x,x=h;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Zn&&Wh(S)===C.type){n(x,C.sibling),h=i(C,m.props),h.ref=xa(x,C,m),h.return=x,x=h;break e}n(x,C);break}else t(x,C);C=C.sibling}m.type===pi?(h=Br(m.props.children,x.mode,b,m.key),h.return=x,x=h):(b=ws(m.type,m.key,m.props,null,x.mode,b),b.ref=xa(x,h,m),b.return=x,x=b)}return o(x);case fi:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(x,h.sibling),h=i(h,m.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=Yc(m,x.mode,b),h.return=x,x=h}return o(x);case Zn:return C=m._init,w(x,h,C(m._payload),b)}if(Ea(m))return g(x,h,m,b);if(pa(m))return y(x,h,m,b);Yo(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(x,h.sibling),h=i(h,m),h.return=x,x=h):(n(x,h),h=Wc(m,x.mode,b),h.return=x,x=h),o(x)):n(x,h)}return w}var Bi=pv(!0),hv=pv(!1),Ks=Sr(null),Xs=null,bi=null,Mf=null;function Of(){Mf=bi=Xs=null}function Rf(e){var t=Ks.current;we(Ks),e._currentValue=t}function iu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mi(e,t){Xs=e,Mf=bi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function $t(e){var t=e._currentValue;if(Mf!==e)if(e={context:e,memoizedValue:t,next:null},bi===null){if(Xs===null)throw Error(F(308));bi=e,Xs.dependencies={lanes:0,firstContext:e}}else bi=bi.next=e;return t}var Rr=null;function If(e){Rr===null?Rr=[e]:Rr.push(e)}function mv(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,If(t)):(n.next=i.next,i.next=n),t.interleaved=n,$n(e,r)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var er=!1;function Df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$n(e,n)}return i=r.interleaved,i===null?(t.next=t,If(r)):(t.next=i.next,i.next=t),r.interleaved=t,$n(e,n)}function hs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jf(e,n)}}function Yh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qs(e,t,n,r){var i=e.updateQueue;er=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,d=l.next;l.next=null,o===null?a=d:o.next=d,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=d:s.next=d,u.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,u=d=l=null,s=a;do{var p=s.lane,v=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(p=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(v,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(v,f,p):g,p==null)break e;f=_e({},f,p);break e;case 2:er=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(d=u=v,l=f):u=u.next=v,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Xr|=o,e.lanes=o,e.memoizedState=f}}function Kh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ao={},yn=Sr(Ao),so=Sr(Ao),lo=Sr(Ao);function Ir(e){if(e===Ao)throw Error(F(174));return e}function Nf(e,t){switch(ve(lo,t),ve(so,e),ve(yn,Ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dd(t,e)}we(yn),ve(yn,t)}function $i(){we(yn),we(so),we(lo)}function vv(e){Ir(lo.current);var t=Ir(yn.current),n=Dd(t,e.type);t!==n&&(ve(so,e),ve(yn,n))}function Vf(e){so.current===e&&(we(yn),we(so))}var Ae=Sr(0);function Js(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fc=[];function Ff(){for(var e=0;e<Fc.length;e++)Fc[e]._workInProgressVersionPrimary=null;Fc.length=0}var ms=qn.ReactCurrentDispatcher,Bc=qn.ReactCurrentBatchConfig,Kr=0,Ge=null,Ue=null,Ke=null,Zs=!1,Na=!1,co=0,k4=0;function it(){throw Error(F(321))}function Bf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function $f(e,t,n,r,i,a){if(Kr=a,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ms.current=e===null||e.memoizedState===null?P4:G4,e=n(r,i),Na){a=0;do{if(Na=!1,co=0,25<=a)throw Error(F(301));a+=1,Ke=Ue=null,t.updateQueue=null,ms.current=_4,e=n(r,i)}while(Na)}if(ms.current=el,t=Ue!==null&&Ue.next!==null,Kr=0,Ke=Ue=Ge=null,Zs=!1,t)throw Error(F(300));return e}function Uf(){var e=co!==0;return co=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ge.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ut(){if(Ue===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ke===null?Ge.memoizedState:Ke.next;if(t!==null)Ke=t,Ue=e;else{if(e===null)throw Error(F(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?Ge.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function uo(e,t){return typeof t=="function"?t(e):t}function $c(e){var t=Ut(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=Ue,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,d=a;do{var u=d.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,Ge.lanes|=u,Xr|=u}d=d.next}while(d!==null&&d!==a);l===null?o=r:l.next=s,rn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Ge.lanes|=a,Xr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Uc(e){var t=Ut(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);rn(a,t.memoizedState)||(wt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function xv(){}function yv(e,t){var n=Ge,r=Ut(),i=t(),a=!rn(r.memoizedState,i);if(a&&(r.memoizedState=i,wt=!0),r=r.queue,Hf(Sv.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,fo(9,bv.bind(null,n,r,i,t),void 0,null),Qe===null)throw Error(F(349));Kr&30||wv(n,t,i)}return i}function wv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bv(e,t,n,r){t.value=n,t.getSnapshot=r,jv(t)&&Cv(e)}function Sv(e,t,n){return n(function(){jv(t)&&Cv(e)})}function jv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function Cv(e){var t=$n(e,1);t!==null&&tn(t,e,1,-1)}function Xh(e){var t=pn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:e},t.queue=e,e=e.dispatch=E4.bind(null,Ge,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kv(){return Ut().memoizedState}function gs(e,t,n,r){var i=pn();Ge.flags|=e,i.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function Rl(e,t,n,r){var i=Ut();r=r===void 0?null:r;var a=void 0;if(Ue!==null){var o=Ue.memoizedState;if(a=o.destroy,r!==null&&Bf(r,o.deps)){i.memoizedState=fo(t,n,a,r);return}}Ge.flags|=e,i.memoizedState=fo(1|t,n,a,r)}function Qh(e,t){return gs(8390656,8,e,t)}function Hf(e,t){return Rl(2048,8,e,t)}function Tv(e,t){return Rl(4,2,e,t)}function Av(e,t){return Rl(4,4,e,t)}function Ev(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pv(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,4,Ev.bind(null,t,e),n)}function qf(){}function Gv(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _v(e,t){var n=Ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zv(e,t,n){return Kr&21?(rn(n,t)||(n=I1(),Ge.lanes|=n,Xr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function T4(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=Bc.transition;Bc.transition={};try{e(!1),t()}finally{pe=n,Bc.transition=r}}function Lv(){return Ut().memoizedState}function A4(e,t,n){var r=pr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mv(e))Ov(t,n);else if(n=mv(e,t,n,r),n!==null){var i=mt();tn(n,e,r,i),Rv(n,t,r)}}function E4(e,t,n){var r=pr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mv(e))Ov(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,rn(s,o)){var l=t.interleaved;l===null?(i.next=i,If(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=mv(e,t,i,r),n!==null&&(i=mt(),tn(n,e,r,i),Rv(n,t,r))}}function Mv(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function Ov(e,t){Na=Zs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jf(e,n)}}var el={readContext:$t,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},P4={readContext:$t,useCallback:function(e,t){return pn().memoizedState=[e,t===void 0?null:t],e},useContext:$t,useEffect:Qh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gs(4194308,4,Ev.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gs(4194308,4,e,t)},useInsertionEffect:function(e,t){return gs(4,2,e,t)},useMemo:function(e,t){var n=pn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=A4.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=pn();return e={current:e},t.memoizedState=e},useState:Xh,useDebugValue:qf,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=Xh(!1),t=e[0];return e=T4.bind(null,e[1]),pn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,i=pn();if(Ce){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Qe===null)throw Error(F(349));Kr&30||wv(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Qh(Sv.bind(null,r,a,e),[e]),r.flags|=2048,fo(9,bv.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=pn(),t=Qe.identifierPrefix;if(Ce){var n=Ln,r=zn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=k4++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G4={readContext:$t,useCallback:Gv,useContext:$t,useEffect:Hf,useImperativeHandle:Pv,useInsertionEffect:Tv,useLayoutEffect:Av,useMemo:_v,useReducer:$c,useRef:kv,useState:function(){return $c(uo)},useDebugValue:qf,useDeferredValue:function(e){var t=Ut();return zv(t,Ue.memoizedState,e)},useTransition:function(){var e=$c(uo)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:xv,useSyncExternalStore:yv,useId:Lv,unstable_isNewReconciler:!1},_4={readContext:$t,useCallback:Gv,useContext:$t,useEffect:Hf,useImperativeHandle:Pv,useInsertionEffect:Tv,useLayoutEffect:Av,useMemo:_v,useReducer:Uc,useRef:kv,useState:function(){return Uc(uo)},useDebugValue:qf,useDeferredValue:function(e){var t=Ut();return Ue===null?t.memoizedState=e:zv(t,Ue.memoizedState,e)},useTransition:function(){var e=Uc(uo)[0],t=Ut().memoizedState;return[e,t]},useMutableSource:xv,useSyncExternalStore:yv,useId:Lv,unstable_isNewReconciler:!1};function Xt(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Il={isMounted:function(e){return(e=e._reactInternals)?ri(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mt(),i=pr(e),a=On(r,i);a.payload=t,n!=null&&(a.callback=n),t=ur(e,a,i),t!==null&&(tn(t,e,i,r),hs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mt(),i=pr(e),a=On(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ur(e,a,i),t!==null&&(tn(t,e,i,r),hs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),r=pr(e),i=On(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(tn(t,e,r,n),hs(t,e,r))}};function Jh(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ro(n,r)||!ro(i,a):!0}function Iv(e,t,n){var r=!1,i=xr,a=t.contextType;return typeof a=="object"&&a!==null?a=$t(a):(i=St(t)?Wr:ft.current,r=t.contextTypes,a=(r=r!=null)?Vi(e,i):xr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Zh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Il.enqueueReplaceState(t,t.state,null)}function ou(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Df(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=$t(a):(a=St(t)?Wr:ft.current,i.context=Vi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(au(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Il.enqueueReplaceState(i,i.state,null),Qs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ui(e,t){try{var n="",r=t;do n+=ab(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Hc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function su(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var z4=typeof WeakMap=="function"?WeakMap:Map;function Dv(e,t,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,vu=r),su(e,t)},n}function Nv(e,t,n){n=On(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){su(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){su(e,t),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function e0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new z4;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=q4.bind(null,e,t,n),t.then(e,e))}function t0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function n0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=On(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var L4=qn.ReactCurrentOwner,wt=!1;function pt(e,t,n,r){t.child=e===null?hv(t,null,n,r):Bi(t,e.child,n,r)}function r0(e,t,n,r,i){n=n.render;var a=t.ref;return Mi(t,i),r=$f(e,t,n,r,a,i),n=Uf(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Un(e,t,i)):(Ce&&n&&_f(t),t.flags|=1,pt(e,t,r,i),t.child)}function i0(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!ep(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Vv(e,t,a,r,i)):(e=ws(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(o,r)&&e.ref===t.ref)return Un(e,t,i)}return t.flags|=1,e=hr(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vv(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ro(a,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Un(e,t,i)}return lu(e,t,n,r,i)}function Fv(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ji,At),At|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(ji,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ve(ji,At),At|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ve(ji,At),At|=r;return pt(e,t,i,n),t.child}function Bv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function lu(e,t,n,r,i){var a=St(n)?Wr:ft.current;return a=Vi(t,a),Mi(t,i),n=$f(e,t,n,r,a,i),r=Uf(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Un(e,t,i)):(Ce&&r&&_f(t),t.flags|=1,pt(e,t,n,i),t.child)}function a0(e,t,n,r,i){if(St(n)){var a=!0;qs(t)}else a=!1;if(Mi(t,i),t.stateNode===null)vs(e,t),Iv(t,n,r),ou(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=$t(d):(d=St(n)?Wr:ft.current,d=Vi(t,d));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==d)&&Zh(t,o,r,d),er=!1;var p=t.memoizedState;o.state=p,Qs(t,r,o,i),l=t.memoizedState,s!==r||p!==l||bt.current||er?(typeof u=="function"&&(au(t,n,u,r),l=t.memoizedState),(s=er||Jh(t,n,s,r,p,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,gv(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Xt(t.type,s),o.props=d,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$t(l):(l=St(n)?Wr:ft.current,l=Vi(t,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==l)&&Zh(t,o,r,l),er=!1,p=t.memoizedState,o.state=p,Qs(t,r,o,i);var g=t.memoizedState;s!==f||p!==g||bt.current||er?(typeof v=="function"&&(au(t,n,v,r),g=t.memoizedState),(d=er||Jh(t,n,d,r,p,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return cu(e,t,n,r,a,i)}function cu(e,t,n,r,i,a){Bv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Uh(t,n,!1),Un(e,t,a);r=t.stateNode,L4.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Bi(t,e.child,null,a),t.child=Bi(t,null,s,a)):pt(e,t,s,a),t.memoizedState=r.state,i&&Uh(t,n,!0),t.child}function $v(e){var t=e.stateNode;t.pendingContext?$h(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$h(e,t.context,!1),Nf(e,t.containerInfo)}function o0(e,t,n,r,i){return Fi(),Lf(i),t.flags|=256,pt(e,t,n,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function uu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uv(e,t,n){var r=t.pendingProps,i=Ae.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Ae,i&1),e===null)return ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Vl(o,r,0,null),e=Br(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=uu(n),t.memoizedState=du,e):Wf(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return M4(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=hr(s,a):(a=Br(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?uu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=du,r}return a=e.child,e=a.sibling,r=hr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wf(e,t){return t=Vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ko(e,t,n,r){return r!==null&&Lf(r),Bi(t,e.child,null,n),e=Wf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M4(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Hc(Error(F(422))),Ko(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Vl({mode:"visible",children:r.children},i,0,null),a=Br(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Bi(t,e.child,null,o),t.child.memoizedState=uu(o),t.memoizedState=du,a);if(!(t.mode&1))return Ko(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(F(419)),r=Hc(a,r,void 0),Ko(e,t,o,r)}if(s=(o&e.childLanes)!==0,wt||s){if(r=Qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,$n(e,i),tn(r,e,i,-1))}return Zf(),r=Hc(Error(F(421))),Ko(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=W4.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Pt=dr(i.nextSibling),Gt=t,Ce=!0,Jt=null,e!==null&&(Nt[Vt++]=zn,Nt[Vt++]=Ln,Nt[Vt++]=Yr,zn=e.id,Ln=e.overflow,Yr=t),t=Wf(t,r.children),t.flags|=4096,t)}function s0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),iu(e.return,t,n)}function qc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Hv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(pt(e,t,r.children,n),r=Ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&s0(e,n,t);else if(e.tag===19)s0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(Ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Js(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Js(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qc(t,!0,n,null,a);break;case"together":qc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=hr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function O4(e,t,n){switch(t.tag){case 3:$v(t),Fi();break;case 5:vv(t);break;case 1:St(t.type)&&qs(t);break;case 4:Nf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Ks,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ae,Ae.current&1),t.flags|=128,null):n&t.child.childLanes?Uv(e,t,n):(ve(Ae,Ae.current&1),e=Un(e,t,n),e!==null?e.sibling:null);ve(Ae,Ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ae,Ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Fv(e,t,n)}return Un(e,t,n)}var qv,fu,Wv,Yv;qv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};Wv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ir(yn.current);var a=null;switch(n){case"input":i=Md(e,i),r=Md(e,r),a=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),a=[];break;case"textarea":i=Id(e,i),r=Id(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Us)}Nd(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Xa.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var l=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==s&&(l!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&xe("scroll",e),a||s===l||(a=[])):(a=a||[]).push(d,l))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Yv=function(e,t,n,r){n!==r&&(t.flags|=4)};function ya(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function R4(e,t,n){var r=t.pendingProps;switch(zf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return St(t.type)&&Hs(),at(t),null;case 3:return r=t.stateNode,$i(),we(bt),we(ft),Ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jt!==null&&(wu(Jt),Jt=null))),fu(e,t),at(t),null;case 5:Vf(t);var i=Ir(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)Wv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return at(t),null}if(e=Ir(yn.current),Wo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[mn]=t,r[oo]=a,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Ga.length;i++)xe(Ga[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":gh(r,a),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},xe("invalid",r);break;case"textarea":xh(r,a),xe("invalid",r)}Nd(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&qo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&qo(r.textContent,s,e),i=["children",""+s]):Xa.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Do(r),vh(r,a,!0);break;case"textarea":Do(r),yh(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Us)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=S1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[mn]=t,e[oo]=r,qv(e,t,!1,!1),t.stateNode=e;e:{switch(o=Vd(n,r),n){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ga.length;i++)xe(Ga[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":gh(e,r),i=Md(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),xe("invalid",e);break;case"textarea":xh(e,r),i=Id(e,r),xe("invalid",e);break;default:i=r}Nd(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?k1(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&j1(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qa(e,l):typeof l=="number"&&Qa(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&xe("scroll",e):l!=null&&vf(e,a,l,o))}switch(n){case"input":Do(e),vh(e,r,!1);break;case"textarea":Do(e),yh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Gi(e,!!r.multiple,a,!1):r.defaultValue!=null&&Gi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Us)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)Yv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=Ir(lo.current),Ir(yn.current),Wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[mn]=t,(a=r.nodeValue!==n)&&(e=Gt,e!==null))switch(e.tag){case 3:qo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=t,t.stateNode=r}return at(t),null;case 13:if(we(Ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Pt!==null&&t.mode&1&&!(t.flags&128))fv(),Fi(),t.flags|=98560,a=!1;else if(a=Wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[mn]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),a=!1}else Jt!==null&&(wu(Jt),Jt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?He===0&&(He=3):Zf())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return $i(),fu(e,t),e===null&&io(t.stateNode.containerInfo),at(t),null;case 10:return Rf(t.type._context),at(t),null;case 17:return St(t.type)&&Hs(),at(t),null;case 19:if(we(Ae),a=t.memoizedState,a===null)return at(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ya(a,!1);else{if(He!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Js(e),o!==null){for(t.flags|=128,ya(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(Ae,Ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&Re()>Hi&&(t.flags|=128,r=!0,ya(a,!1),t.lanes=4194304)}else{if(!r)if(e=Js(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ya(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ce)return at(t),null}else 2*Re()-a.renderingStartTime>Hi&&n!==1073741824&&(t.flags|=128,r=!0,ya(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Re(),t.sibling=null,n=Ae.current,ve(Ae,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return Jf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function I4(e,t){switch(zf(t),t.tag){case 1:return St(t.type)&&Hs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(),we(bt),we(ft),Ff(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vf(t),null;case 13:if(we(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ae),null;case 4:return $i(),null;case 10:return Rf(t.type._context),null;case 22:case 23:return Jf(),null;case 24:return null;default:return null}}var Xo=!1,st=!1,D4=typeof WeakSet=="function"?WeakSet:Set,H=null;function Si(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function pu(e,t,n){try{n()}catch(r){ze(e,t,r)}}var l0=!1;function N4(e,t){if(Xd=Fs,e=Z1(),Gf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,d=0,u=0,f=e,p=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++d===i&&(s=o),p===a&&++u===r&&(l=o),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qd={focusedElem:e,selectionRange:n},Fs=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?y:Xt(t.type,y),w);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){ze(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return g=l0,l0=!1,g}function Va(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&pu(t,n,a)}i=i.next}while(i!==r)}}function Dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kv(e){var t=e.alternate;t!==null&&(e.alternate=null,Kv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[oo],delete t[eu],delete t[b4],delete t[S4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xv(e){return e.tag===5||e.tag===3||e.tag===4}function c0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Us));else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}function gu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gu(e,t,n),e=e.sibling;e!==null;)gu(e,t,n),e=e.sibling}var et=null,Qt=!1;function Kn(e,t,n){for(n=n.child;n!==null;)Qv(e,t,n),n=n.sibling}function Qv(e,t,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:st||Si(n,t);case 6:var r=et,i=Qt;et=null,Kn(e,t,n),et=r,Qt=i,et!==null&&(Qt?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Qt?(e=et,n=n.stateNode,e.nodeType===8?Nc(e.parentNode,n):e.nodeType===1&&Nc(e,n),to(e)):Nc(et,n.stateNode));break;case 4:r=et,i=Qt,et=n.stateNode.containerInfo,Qt=!0,Kn(e,t,n),et=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&pu(n,t,o),i=i.next}while(i!==r)}Kn(e,t,n);break;case 1:if(!st&&(Si(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ze(n,t,s)}Kn(e,t,n);break;case 21:Kn(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Kn(e,t,n),st=r):Kn(e,t,n);break;default:Kn(e,t,n)}}function d0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new D4),t.forEach(function(r){var i=Y4.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:et=s.stateNode,Qt=!1;break e;case 3:et=s.stateNode.containerInfo,Qt=!0;break e;case 4:et=s.stateNode.containerInfo,Qt=!0;break e}s=s.return}if(et===null)throw Error(F(160));Qv(a,o,i),et=null,Qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){ze(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jv(t,e),t=t.sibling}function Jv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),cn(e),r&4){try{Va(3,e,e.return),Dl(3,e)}catch(y){ze(e,e.return,y)}try{Va(5,e,e.return)}catch(y){ze(e,e.return,y)}}break;case 1:Yt(t,e),cn(e),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Yt(t,e),cn(e),r&512&&n!==null&&Si(n,n.return),e.flags&32){var i=e.stateNode;try{Qa(i,"")}catch(y){ze(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&w1(i,a),Vd(s,o);var d=Vd(s,a);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?k1(i,f):u==="dangerouslySetInnerHTML"?j1(i,f):u==="children"?Qa(i,f):vf(i,u,f,d)}switch(s){case"input":Od(i,a);break;case"textarea":b1(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Gi(i,!!a.multiple,v,!1):p!==!!a.multiple&&(a.defaultValue!=null?Gi(i,!!a.multiple,a.defaultValue,!0):Gi(i,!!a.multiple,a.multiple?[]:"",!1))}i[oo]=a}catch(y){ze(e,e.return,y)}}break;case 6:if(Yt(t,e),cn(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){ze(e,e.return,y)}}break;case 3:if(Yt(t,e),cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(y){ze(e,e.return,y)}break;case 4:Yt(t,e),cn(e);break;case 13:Yt(t,e),cn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Xf=Re())),r&4&&d0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(st=(d=st)||u,Yt(t,e),st=d):Yt(t,e),cn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(f=H=u;H!==null;){switch(p=H,v=p.child,p.tag){case 0:case 11:case 14:case 15:Va(4,p,p.return);break;case 1:Si(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ze(r,n,y)}}break;case 5:Si(p,p.return);break;case 22:if(p.memoizedState!==null){f0(f);continue}}v!==null?(v.return=p,H=v):f0(f)}u=u.sibling}e:for(u=null,f=e;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=C1("display",o))}catch(y){ze(e,e.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(y){ze(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yt(t,e),cn(e),r&4&&d0(e);break;case 21:break;default:Yt(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qa(i,""),r.flags&=-33);var a=c0(e);gu(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=c0(e);mu(e,s,o);break;default:throw Error(F(161))}}catch(l){ze(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function V4(e,t,n){H=e,Zv(e)}function Zv(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var i=H,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xo;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||st;s=Xo;var d=st;if(Xo=o,(st=l)&&!d)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?p0(i):l!==null?(l.return=o,H=l):p0(i);for(;a!==null;)H=a,Zv(a),a=a.sibling;H=i,Xo=s,st=d}u0(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,H=a):u0(e)}}function u0(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||Dl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Kh(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kh(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&to(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}st||t.flags&512&&hu(t)}catch(p){ze(t,t.return,p)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function f0(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function p0(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Dl(4,t)}catch(l){ze(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ze(t,i,l)}}var a=t.return;try{hu(t)}catch(l){ze(t,a,l)}break;case 5:var o=t.return;try{hu(t)}catch(l){ze(t,o,l)}}}catch(l){ze(t,t.return,l)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var F4=Math.ceil,tl=qn.ReactCurrentDispatcher,Yf=qn.ReactCurrentOwner,Bt=qn.ReactCurrentBatchConfig,le=0,Qe=null,Ve=null,tt=0,At=0,ji=Sr(0),He=0,po=null,Xr=0,Nl=0,Kf=0,Fa=null,yt=null,Xf=0,Hi=1/0,Pn=null,nl=!1,vu=null,fr=null,Qo=!1,ir=null,rl=0,Ba=0,xu=null,xs=-1,ys=0;function mt(){return le&6?Re():xs!==-1?xs:xs=Re()}function pr(e){return e.mode&1?le&2&&tt!==0?tt&-tt:C4.transition!==null?(ys===0&&(ys=I1()),ys):(e=pe,e!==0||(e=window.event,e=e===void 0?16:U1(e.type)),e):1}function tn(e,t,n,r){if(50<Ba)throw Ba=0,xu=null,Error(F(185));Co(e,n,r),(!(le&2)||e!==Qe)&&(e===Qe&&(!(le&2)&&(Nl|=n),He===4&&nr(e,tt)),jt(e,r),n===1&&le===0&&!(t.mode&1)&&(Hi=Re()+500,Ol&&jr()))}function jt(e,t){var n=e.callbackNode;Cb(e,t);var r=Vs(e,e===Qe?tt:0);if(r===0)n!==null&&Sh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sh(n),t===1)e.tag===0?j4(h0.bind(null,e)):cv(h0.bind(null,e)),y4(function(){!(le&6)&&jr()}),n=null;else{switch(D1(r)){case 1:n=Sf;break;case 4:n=O1;break;case 16:n=Ns;break;case 536870912:n=R1;break;default:n=Ns}n=sx(n,ex.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ex(e,t){if(xs=-1,ys=0,le&6)throw Error(F(327));var n=e.callbackNode;if(Oi()&&e.callbackNode!==n)return null;var r=Vs(e,e===Qe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=il(e,r);else{t=r;var i=le;le|=2;var a=nx();(Qe!==e||tt!==t)&&(Pn=null,Hi=Re()+500,Fr(e,t));do try{U4();break}catch(s){tx(e,s)}while(!0);Of(),tl.current=a,le=i,Ve!==null?t=0:(Qe=null,tt=0,t=He)}if(t!==0){if(t===2&&(i=Hd(e),i!==0&&(r=i,t=yu(e,i))),t===1)throw n=po,Fr(e,0),nr(e,r),jt(e,Re()),n;if(t===6)nr(e,r);else{if(i=e.current.alternate,!(r&30)&&!B4(i)&&(t=il(e,r),t===2&&(a=Hd(e),a!==0&&(r=a,t=yu(e,a))),t===1))throw n=po,Fr(e,0),nr(e,r),jt(e,Re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:zr(e,yt,Pn);break;case 3:if(nr(e,r),(r&130023424)===r&&(t=Xf+500-Re(),10<t)){if(Vs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zd(zr.bind(null,e,yt,Pn),t);break}zr(e,yt,Pn);break;case 4:if(nr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-en(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*F4(r/1960))-r,10<r){e.timeoutHandle=Zd(zr.bind(null,e,yt,Pn),r);break}zr(e,yt,Pn);break;case 5:zr(e,yt,Pn);break;default:throw Error(F(329))}}}return jt(e,Re()),e.callbackNode===n?ex.bind(null,e):null}function yu(e,t){var n=Fa;return e.current.memoizedState.isDehydrated&&(Fr(e,t).flags|=256),e=il(e,t),e!==2&&(t=yt,yt=n,t!==null&&wu(t)),e}function wu(e){yt===null?yt=e:yt.push.apply(yt,e)}function B4(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!rn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~Kf,t&=~Nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-en(t),r=1<<n;e[n]=-1,t&=~r}}function h0(e){if(le&6)throw Error(F(327));Oi();var t=Vs(e,0);if(!(t&1))return jt(e,Re()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=Hd(e);r!==0&&(t=r,n=yu(e,r))}if(n===1)throw n=po,Fr(e,0),nr(e,t),jt(e,Re()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zr(e,yt,Pn),jt(e,Re()),null}function Qf(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Hi=Re()+500,Ol&&jr())}}function Qr(e){ir!==null&&ir.tag===0&&!(le&6)&&Oi();var t=le;le|=1;var n=Bt.transition,r=pe;try{if(Bt.transition=null,pe=1,e)return e()}finally{pe=r,Bt.transition=n,le=t,!(le&6)&&jr()}}function Jf(){At=ji.current,we(ji)}function Fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,x4(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hs();break;case 3:$i(),we(bt),we(ft),Ff();break;case 5:Vf(r);break;case 4:$i();break;case 13:we(Ae);break;case 19:we(Ae);break;case 10:Rf(r.type._context);break;case 22:case 23:Jf()}n=n.return}if(Qe=e,Ve=e=hr(e.current,null),tt=At=t,He=0,po=null,Kf=Nl=Xr=0,yt=Fa=null,Rr!==null){for(t=0;t<Rr.length;t++)if(n=Rr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Rr=null}return e}function tx(e,t){do{var n=Ve;try{if(Of(),ms.current=el,Zs){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zs=!1}if(Kr=0,Ke=Ue=Ge=null,Na=!1,co=0,Yf.current=null,n===null||n.return===null){He=1,po=t,Ve=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=tt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=t0(o);if(v!==null){v.flags&=-257,n0(v,o,s,a,t),v.mode&1&&e0(a,d,t),t=v,l=d;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){e0(a,d,t),Zf();break e}l=Error(F(426))}}else if(Ce&&s.mode&1){var w=t0(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),n0(w,o,s,a,t),Lf(Ui(l,s));break e}}a=l=Ui(l,s),He!==4&&(He=2),Fa===null?Fa=[a]:Fa.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=Dv(a,l,t);Yh(a,x);break e;case 1:s=l;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(fr===null||!fr.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Nv(a,s,t);Yh(a,b);break e}}a=a.return}while(a!==null)}ix(n)}catch(S){t=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function nx(){var e=tl.current;return tl.current=el,e===null?el:e}function Zf(){(He===0||He===3||He===2)&&(He=4),Qe===null||!(Xr&268435455)&&!(Nl&268435455)||nr(Qe,tt)}function il(e,t){var n=le;le|=2;var r=nx();(Qe!==e||tt!==t)&&(Pn=null,Fr(e,t));do try{$4();break}catch(i){tx(e,i)}while(!0);if(Of(),le=n,tl.current=r,Ve!==null)throw Error(F(261));return Qe=null,tt=0,He}function $4(){for(;Ve!==null;)rx(Ve)}function U4(){for(;Ve!==null&&!mb();)rx(Ve)}function rx(e){var t=ox(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?ix(e):Ve=t,Yf.current=null}function ix(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I4(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Ve=null;return}}else if(n=R4(n,t,At),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);He===0&&(He=5)}function zr(e,t,n){var r=pe,i=Bt.transition;try{Bt.transition=null,pe=1,H4(e,t,n,r)}finally{Bt.transition=i,pe=r}return null}function H4(e,t,n,r){do Oi();while(ir!==null);if(le&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(kb(e,a),e===Qe&&(Ve=Qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,sx(Ns,function(){return Oi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Bt.transition,Bt.transition=null;var o=pe;pe=1;var s=le;le|=4,Yf.current=null,N4(e,n),Jv(n,e),u4(Qd),Fs=!!Xd,Qd=Xd=null,e.current=n,V4(n),gb(),le=s,pe=o,Bt.transition=a}else e.current=n;if(Qo&&(Qo=!1,ir=e,rl=i),a=e.pendingLanes,a===0&&(fr=null),yb(n.stateNode),jt(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,e=vu,vu=null,e;return rl&1&&e.tag!==0&&Oi(),a=e.pendingLanes,a&1?e===xu?Ba++:(Ba=0,xu=e):Ba=0,jr(),null}function Oi(){if(ir!==null){var e=D1(rl),t=Bt.transition,n=pe;try{if(Bt.transition=null,pe=16>e?16:e,ir===null)var r=!1;else{if(e=ir,ir=null,rl=0,le&6)throw Error(F(331));var i=le;for(le|=4,H=e.current;H!==null;){var a=H,o=a.child;if(H.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var d=s[l];for(H=d;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:Va(8,u,a)}var f=u.child;if(f!==null)f.return=u,H=f;else for(;H!==null;){u=H;var p=u.sibling,v=u.return;if(Kv(u),u===d){H=null;break}if(p!==null){p.return=v,H=p;break}H=v}}}var g=a.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}H=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,H=o;else e:for(;H!==null;){if(a=H,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Va(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,H=x;break e}H=a.return}}var h=e.current;for(H=h;H!==null;){o=H;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,H=m;else e:for(o=h;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Dl(9,s)}}catch(S){ze(s,s.return,S)}if(s===o){H=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,H=b;break e}H=s.return}}if(le=i,jr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Gl,e)}catch{}r=!0}return r}finally{pe=n,Bt.transition=t}}return!1}function m0(e,t,n){t=Ui(n,t),t=Dv(e,t,1),e=ur(e,t,1),t=mt(),e!==null&&(Co(e,1,t),jt(e,t))}function ze(e,t,n){if(e.tag===3)m0(e,e,n);else for(;t!==null;){if(t.tag===3){m0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){e=Ui(n,e),e=Nv(t,e,1),t=ur(t,e,1),e=mt(),t!==null&&(Co(t,1,e),jt(t,e));break}}t=t.return}}function q4(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,Qe===e&&(tt&n)===n&&(He===4||He===3&&(tt&130023424)===tt&&500>Re()-Xf?Fr(e,0):Kf|=n),jt(e,t)}function ax(e,t){t===0&&(e.mode&1?(t=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):t=1);var n=mt();e=$n(e,t),e!==null&&(Co(e,t,n),jt(e,n))}function W4(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ax(e,n)}function Y4(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),ax(e,n)}var ox;ox=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,O4(e,t,n);wt=!!(e.flags&131072)}else wt=!1,Ce&&t.flags&1048576&&dv(t,Ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vs(e,t),e=t.pendingProps;var i=Vi(t,ft.current);Mi(t,n),i=$f(null,t,r,e,i,n);var a=Uf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(a=!0,qs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Df(t),i.updater=Il,t.stateNode=i,i._reactInternals=t,ou(t,r,e,n),t=cu(null,t,r,!0,a,n)):(t.tag=0,Ce&&a&&_f(t),pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=X4(r),e=Xt(r,e),i){case 0:t=lu(null,t,r,e,n);break e;case 1:t=a0(null,t,r,e,n);break e;case 11:t=r0(null,t,r,e,n);break e;case 14:t=i0(null,t,r,Xt(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),lu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),a0(e,t,r,i,n);case 3:e:{if($v(t),e===null)throw Error(F(387));r=t.pendingProps,a=t.memoizedState,i=a.element,gv(e,t),Qs(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ui(Error(F(423)),t),t=o0(e,t,r,n,i);break e}else if(r!==i){i=Ui(Error(F(424)),t),t=o0(e,t,r,n,i);break e}else for(Pt=dr(t.stateNode.containerInfo.firstChild),Gt=t,Ce=!0,Jt=null,n=hv(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){t=Un(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return vv(t),e===null&&ru(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Jd(r,i)?o=null:a!==null&&Jd(r,a)&&(t.flags|=32),Bv(e,t),pt(e,t,o,n),t.child;case 6:return e===null&&ru(t),null;case 13:return Uv(e,t,n);case 4:return Nf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bi(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),r0(e,t,r,i,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,ve(Ks,r._currentValue),r._currentValue=o,a!==null)if(rn(a.value,o)){if(a.children===i.children&&!bt.current){t=Un(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=On(-1,n&-n),l.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?l.next=l:(l.next=u.next,u.next=l),d.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),iu(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(F(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),iu(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mi(t,n),i=$t(i),r=r(i),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,i=Xt(r,t.pendingProps),i=Xt(r.type,i),i0(e,t,r,i,n);case 15:return Vv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xt(r,i),vs(e,t),t.tag=1,St(r)?(e=!0,qs(t)):e=!1,Mi(t,n),Iv(t,r,i),ou(t,r,i,n),cu(null,t,r,!0,e,n);case 19:return Hv(e,t,n);case 22:return Fv(e,t,n)}throw Error(F(156,t.tag))};function sx(e,t){return M1(e,t)}function K4(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new K4(e,t,n,r)}function ep(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X4(e){if(typeof e=="function")return ep(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yf)return 11;if(e===wf)return 14}return 2}function hr(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ws(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")ep(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case pi:return Br(n.children,i,a,t);case xf:o=8,i|=8;break;case Gd:return e=Ft(12,n,t,i|2),e.elementType=Gd,e.lanes=a,e;case _d:return e=Ft(13,n,t,i),e.elementType=_d,e.lanes=a,e;case zd:return e=Ft(19,n,t,i),e.elementType=zd,e.lanes=a,e;case v1:return Vl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case m1:o=10;break e;case g1:o=9;break e;case yf:o=11;break e;case wf:o=14;break e;case Zn:o=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Ft(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Br(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function Vl(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=v1,e.lanes=n,e.stateNode={isHidden:!1},e}function Wc(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Yc(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Q4(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tp(e,t,n,r,i,a,o,s,l){return e=new Q4(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(a),e}function J4(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lx(e){if(!e)return xr;e=e._reactInternals;e:{if(ri(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(St(n))return lv(e,n,t)}return t}function cx(e,t,n,r,i,a,o,s,l){return e=tp(n,r,!0,e,i,a,o,s,l),e.context=lx(null),n=e.current,r=mt(),i=pr(n),a=On(r,i),a.callback=t??null,ur(n,a,i),e.current.lanes=i,Co(e,i,r),jt(e,r),e}function Fl(e,t,n,r){var i=t.current,a=mt(),o=pr(i);return n=lx(n),t.context===null?t.context=n:t.pendingContext=n,t=On(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,o),e!==null&&(tn(e,i,o,a),hs(e,i,o)),o}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function g0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function np(e,t){g0(e,t),(e=e.alternate)&&g0(e,t)}function Z4(){return null}var dx=typeof reportError=="function"?reportError:function(e){console.error(e)};function rp(e){this._internalRoot=e}Bl.prototype.render=rp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Fl(e,t,null,null)};Bl.prototype.unmount=rp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qr(function(){Fl(null,e,null,null)}),t[Bn]=null}};function Bl(e){this._internalRoot=e}Bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=F1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tr.length&&t!==0&&t<tr[n].priority;n++);tr.splice(n,0,e),n===0&&$1(e)}};function ip(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function v0(){}function e5(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=al(o);a.call(d)}}var o=cx(t,r,e,0,null,!1,!1,"",v0);return e._reactRootContainer=o,e[Bn]=o.current,io(e.nodeType===8?e.parentNode:e),Qr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=al(l);s.call(d)}}var l=tp(e,0,!1,null,null,!1,!1,"",v0);return e._reactRootContainer=l,e[Bn]=l.current,io(e.nodeType===8?e.parentNode:e),Qr(function(){Fl(t,l,n,r)}),l}function Ul(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=al(o);s.call(l)}}Fl(t,o,e,i)}else o=e5(n,t,e,i,r);return al(o)}N1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pa(t.pendingLanes);n!==0&&(jf(t,n|1),jt(t,Re()),!(le&6)&&(Hi=Re()+500,jr()))}break;case 13:Qr(function(){var r=$n(e,1);if(r!==null){var i=mt();tn(r,e,1,i)}}),np(e,1)}};Cf=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=mt();tn(t,e,134217728,n)}np(e,134217728)}};V1=function(e){if(e.tag===13){var t=pr(e),n=$n(e,t);if(n!==null){var r=mt();tn(n,e,t,r)}np(e,t)}};F1=function(){return pe};B1=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};Bd=function(e,t,n){switch(t){case"input":if(Od(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ml(r);if(!i)throw Error(F(90));y1(r),Od(r,i)}}}break;case"textarea":b1(e,n);break;case"select":t=n.value,t!=null&&Gi(e,!!n.multiple,t,!1)}};E1=Qf;P1=Qr;var t5={usingClientEntryPoint:!1,Events:[To,vi,Ml,T1,A1,Qf]},wa={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n5={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=z1(e),e===null?null:e.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||Z4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Gl=Jo.inject(n5),xn=Jo}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t5;Mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ip(t))throw Error(F(200));return J4(e,t,null,n)};Mt.createRoot=function(e,t){if(!ip(e))throw Error(F(299));var n=!1,r="",i=dx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tp(e,1,!1,null,null,n,!1,r,i),e[Bn]=t.current,io(e.nodeType===8?e.parentNode:e),new rp(t)};Mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=z1(t),e=e===null?null:e.stateNode,e};Mt.flushSync=function(e){return Qr(e)};Mt.hydrate=function(e,t,n){if(!$l(t))throw Error(F(200));return Ul(null,e,t,!0,n)};Mt.hydrateRoot=function(e,t,n){if(!ip(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=dx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=cx(t,null,e,1,n??null,i,!1,a,o),e[Bn]=t.current,io(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bl(t)};Mt.render=function(e,t,n){if(!$l(t))throw Error(F(200));return Ul(null,e,t,!1,n)};Mt.unmountComponentAtNode=function(e){if(!$l(e))throw Error(F(40));return e._reactRootContainer?(Qr(function(){Ul(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Qf;Mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$l(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Ul(e,t,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ux)}catch(e){console.error(e)}}ux(),u1.exports=Mt;var r5=u1.exports,fx,x0=r5;fx=x0.createRoot,x0.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ho.apply(this,arguments)}var ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ar||(ar={}));const y0="popstate";function i5(e){e===void 0&&(e={});function t(i,a){let{pathname:o="/",search:s="",hash:l=""}=ii(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),bu("",{pathname:o,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let o=i.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=i.location.href,d=l.indexOf("#");s=d===-1?l:l.slice(0,d)}return s+"#"+(typeof a=="string"?a:ol(a))}function r(i,a){ap(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return o5(t,n,r,e)}function Be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ap(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function a5(){return Math.random().toString(36).substr(2,8)}function w0(e,t){return{usr:e.state,key:e.key,idx:t}}function bu(e,t,n,r){return n===void 0&&(n=null),ho({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ii(t):t,{state:n,key:t&&t.key||r||a5()})}function ol(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ii(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function o5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=ar.Pop,l=null,d=u();d==null&&(d=0,o.replaceState(ho({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function f(){s=ar.Pop;let w=u(),x=w==null?null:w-d;d=w,l&&l({action:s,location:y.location,delta:x})}function p(w,x){s=ar.Push;let h=bu(y.location,w,x);n&&n(h,w),d=u()+1;let m=w0(h,d),b=y.createHref(h);try{o.pushState(m,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(b)}a&&l&&l({action:s,location:y.location,delta:1})}function v(w,x){s=ar.Replace;let h=bu(y.location,w,x);n&&n(h,w),d=u();let m=w0(h,d),b=y.createHref(h);o.replaceState(m,"",b),a&&l&&l({action:s,location:y.location,delta:0})}function g(w){let x=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:ol(w);return h=h.replace(/ $/,"%20"),Be(x,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,x)}let y={get action(){return s},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(y0,f),l=w,()=>{i.removeEventListener(y0,f),l=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let x=g(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:v,go(w){return o.go(w)}};return y}var b0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(b0||(b0={}));function s5(e,t,n){return n===void 0&&(n="/"),l5(e,t,n,!1)}function l5(e,t,n,r){let i=typeof t=="string"?ii(t):t,a=op(i.pathname||"/",n);if(a==null)return null;let o=px(e);c5(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let d=w5(a);s=x5(o[l],d,r)}return s}function px(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=mr([r,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(Be(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),px(a.children,t,u,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:g5(d,a.index),routesMeta:u})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of hx(a.path))i(a,o,l)}),t}function hx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=hx(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function c5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:v5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const d5=/^:[\w-]+$/,u5=3,f5=2,p5=1,h5=10,m5=-2,S0=e=>e==="*";function g5(e,t){let n=e.split("/"),r=n.length;return n.some(S0)&&(r+=m5),t&&(r+=f5),n.filter(i=>!S0(i)).reduce((i,a)=>i+(d5.test(a)?u5:a===""?p5:h5),r)}function v5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function x5(e,t,n){let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let l=r[s],d=s===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=j0({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},u),p=l.route;if(!f&&d&&n&&!r[r.length-1].route.index&&(f=j0({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:mr([a,f.pathname]),pathnameBase:C5(mr([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=mr([a,f.pathnameBase]))}return o}function j0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=y5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((d,u,f)=>{let{paramName:p,isOptional:v}=u;if(p==="*"){let y=s[f]||"";o=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const g=s[f];return v&&!g?d[p]=void 0:d[p]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function y5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ap(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function w5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ap(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function op(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function b5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ii(e):e;return{pathname:n?n.startsWith("/")?n:S5(n,t):t,search:k5(r),hash:T5(i)}}function S5(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mx(e,t){let n=j5(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function gx(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ii(e):(i=ho({},e),Be(!i.pathname||!i.pathname.includes("?"),Kc("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Kc("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Kc("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=b5(i,s),d=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||u)&&(l.pathname+="/"),l}const mr=e=>e.join("/").replace(/\/\/+/g,"/"),C5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),k5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function A5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vx=["post","put","patch","delete"];new Set(vx);const E5=["get",...vx];new Set(E5);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}const sp=j.createContext(null),P5=j.createContext(null),ai=j.createContext(null),Hl=j.createContext(null),oi=j.createContext({outlet:null,matches:[],isDataRoute:!1}),xx=j.createContext(null);function G5(e,t){let{relative:n}=t===void 0?{}:t;Eo()||Be(!1);let{basename:r,navigator:i}=j.useContext(ai),{hash:a,pathname:o,search:s}=wx(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:mr([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Eo(){return j.useContext(Hl)!=null}function jn(){return Eo()||Be(!1),j.useContext(Hl).location}function yx(e){j.useContext(ai).static||j.useLayoutEffect(e)}function ql(){let{isDataRoute:e}=j.useContext(oi);return e?$5():_5()}function _5(){Eo()||Be(!1);let e=j.useContext(sp),{basename:t,future:n,navigator:r}=j.useContext(ai),{matches:i}=j.useContext(oi),{pathname:a}=jn(),o=JSON.stringify(mx(i,n.v7_relativeSplatPath)),s=j.useRef(!1);return yx(()=>{s.current=!0}),j.useCallback(function(d,u){if(u===void 0&&(u={}),!s.current)return;if(typeof d=="number"){r.go(d);return}let f=gx(d,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mr([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,o,a,e])}function wx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(ai),{matches:i}=j.useContext(oi),{pathname:a}=jn(),o=JSON.stringify(mx(i,r.v7_relativeSplatPath));return j.useMemo(()=>gx(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function z5(e,t){return L5(e,t)}function L5(e,t,n,r){Eo()||Be(!1);let{navigator:i}=j.useContext(ai),{matches:a}=j.useContext(oi),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=jn(),u;if(t){var f;let w=typeof t=="string"?ii(t):t;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||Be(!1),u=w}else u=d;let p=u.pathname||"/",v=p;if(l!=="/"){let w=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=s5(e,{pathname:v}),y=D5(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:mr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:mr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,n,r);return t&&y?j.createElement(Hl.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ar.Pop}},y):y}function M5(){let e=B5(),t=A5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const O5=j.createElement(M5,null);class R5 extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(oi.Provider,{value:this.props.routeContext},j.createElement(xx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I5(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(sp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(oi.Provider,{value:t},r)}function D5(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let u=o.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);u>=0||Be(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=u),f.route.id){let{loaderData:p,errors:v}=n,g=f.route.loader&&p[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||g){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,f,p)=>{let v,g=!1,y=null,w=null;n&&(v=s&&f.route.id?s[f.route.id]:void 0,y=f.route.errorElement||O5,l&&(d<0&&p===0?(g=!0,w=null):d===p&&(g=!0,w=f.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,p+1)),h=()=>{let m;return v?m=y:g?m=w:f.route.Component?m=j.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=u,j.createElement(I5,{match:f,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?j.createElement(R5,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:h(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):h()},null)}var bx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(bx||{}),sl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sl||{});function N5(e){let t=j.useContext(sp);return t||Be(!1),t}function V5(e){let t=j.useContext(P5);return t||Be(!1),t}function F5(e){let t=j.useContext(oi);return t||Be(!1),t}function Sx(e){let t=F5(),n=t.matches[t.matches.length-1];return n.route.id||Be(!1),n.route.id}function B5(){var e;let t=j.useContext(xx),n=V5(sl.UseRouteError),r=Sx(sl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $5(){let{router:e}=N5(bx.UseNavigateStable),t=Sx(sl.UseNavigateStable),n=j.useRef(!1);return yx(()=>{n.current=!0}),j.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,mo({fromRouteId:t},a)))},[e,t])}function fn(e){Be(!1)}function U5(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ar.Pop,navigator:a,static:o=!1,future:s}=e;Eo()&&Be(!1);let l=t.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:l,navigator:a,static:o,future:mo({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof r=="string"&&(r=ii(r));let{pathname:u="/",search:f="",hash:p="",state:v=null,key:g="default"}=r,y=j.useMemo(()=>{let w=op(u,l);return w==null?null:{location:{pathname:w,search:f,hash:p,state:v,key:g},navigationType:i}},[l,u,f,p,v,g,i]);return y==null?null:j.createElement(ai.Provider,{value:d},j.createElement(Hl.Provider,{children:n,value:y}))}function H5(e){let{children:t,location:n}=e;return z5(Su(t),n)}new Promise(()=>{});function Su(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let a=[...t,i];if(r.type===j.Fragment){n.push.apply(n,Su(r.props.children,a));return}r.type!==fn&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Su(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ju(){return ju=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ju.apply(this,arguments)}function q5(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function W5(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Y5(e,t){return e.button===0&&(!t||t==="_self")&&!W5(e)}const K5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],X5="6";try{window.__reactRouterVersion=X5}catch{}const Q5="startTransition",C0=q2[Q5];function J5(e){let{basename:t,children:n,future:r,window:i}=e,a=j.useRef();a.current==null&&(a.current=i5({window:i,v5Compat:!0}));let o=a.current,[s,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},u=j.useCallback(f=>{d&&C0?C0(()=>l(f)):l(f)},[l,d]);return j.useLayoutEffect(()=>o.listen(u),[o,u]),j.createElement(U5,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Z5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jx=j.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:d,preventScrollReset:u,viewTransition:f}=t,p=q5(t,K5),{basename:v}=j.useContext(ai),g,y=!1;if(typeof d=="string"&&e9.test(d)&&(g=d,Z5))try{let m=new URL(window.location.href),b=d.startsWith("//")?new URL(m.protocol+d):new URL(d),S=op(b.pathname,v);b.origin===m.origin&&S!=null?d=S+b.search+b.hash:y=!0}catch{}let w=G5(d,{relative:i}),x=t9(d,{replace:o,state:s,target:l,preventScrollReset:u,relative:i,viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||x(m)}return j.createElement("a",ju({},p,{href:g||w,onClick:y||a?r:h,ref:n,target:l}))});var k0;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(k0||(k0={}));var T0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(T0||(T0={}));function t9(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,l=ql(),d=jn(),u=wx(e,{relative:o});return j.useCallback(f=>{if(Y5(f,n)){f.preventDefault();let p=r!==void 0?r:ol(d)===ol(u);l(e,{replace:p,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[d,l,u,r,i,n,e,a,o,s])}function n9(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}function Wl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Cu=e=>Array.isArray(e);function Cx(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function go(e){return typeof e=="string"||Array.isArray(e)}function A0(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function lp(e,t,n,r){if(typeof t=="function"){const[i,a]=A0(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=A0(r);t=t(n!==void 0?n:e.custom,i,a)}return t}function Yl(e,t,n){const r=e.getProps();return lp(r,t,n!==void 0?n:r.custom,e)}const cp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],dp=["initial",...cp],Po=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],si=new Set(Po),Rn=e=>e*1e3,In=e=>e/1e3,r9={type:"spring",stiffness:500,damping:25,restSpeed:10},i9=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),a9={type:"keyframes",duration:.8},o9={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},s9=(e,{keyframes:t})=>t.length>2?a9:si.has(e)?e.startsWith("scale")?i9(t[1]):r9:o9;function up(e,t){return e?e[t]||e.default||e:void 0}const l9={skipAnimations:!1,useManualTiming:!1},c9=e=>e!==null;function Kl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(c9),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const nt=e=>e;function d9(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function s(d){a.has(d)&&(l.schedule(d),e()),d(o)}const l={schedule:(d,u=!1,f=!1)=>{const v=f&&r?t:n;return u&&a.add(d),v.has(d)||v.add(d),d},cancel:d=>{n.delete(d),a.delete(d)},process:d=>{if(o=d,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(s),r=!1,i&&(i=!1,l.process(d))}};return l}const Zo=["read","resolveKeyframes","update","preRender","render","postRender"],u9=40;function kx(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Zo.reduce((x,h)=>(x[h]=d9(a),x),{}),{read:s,resolveKeyframes:l,update:d,preRender:u,render:f,postRender:p}=o,v=()=>{const x=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(x-i.timestamp,u9),1),i.timestamp=x,i.isProcessing=!0,s.process(i),l.process(i),d.process(i),u.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},g=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Zo.reduce((x,h)=>{const m=o[h];return x[h]=(b,S=!1,C=!1)=>(n||g(),m.schedule(b,S,C)),x},{}),cancel:x=>{for(let h=0;h<Zo.length;h++)o[Zo[h]].cancel(x)},state:i,steps:o}}const{schedule:se,cancel:an,state:qe,steps:Xc}=kx(typeof requestAnimationFrame<"u"?requestAnimationFrame:nt,!0),Tx=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,f9=1e-7,p9=12;function h9(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Tx(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>f9&&++s<p9);return o}function Go(e,t,n,r){if(e===t&&n===r)return nt;const i=a=>h9(a,0,1,e,n);return a=>a===0||a===1?a:Tx(i(a),t,r)}const Ax=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ex=e=>t=>1-e(1-t),Px=Go(.33,1.53,.69,.99),fp=Ex(Px),Gx=Ax(fp),_x=e=>(e*=2)<1?.5*fp(e):.5*(2-Math.pow(2,-10*(e-1))),pp=e=>1-Math.sin(Math.acos(e)),zx=Ex(pp),Lx=Ax(pp),Mx=e=>/^0[^.\s]+$/u.test(e);function m9(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Mx(e):!0}let g9=nt,ku=nt;const Ox=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Rx=e=>t=>typeof t=="string"&&t.startsWith(e),Ix=Rx("--"),v9=Rx("var(--"),hp=e=>v9(e)?x9.test(e.split("/*")[0].trim()):!1,x9=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,y9=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function w9(e){const t=y9.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Dx(e,t,n=1){const[r,i]=w9(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return Ox(o)?parseFloat(o):o}return hp(i)?Dx(i,t,n+1):i}const yr=(e,t,n)=>n>t?t:n<e?e:n,ra={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},vo={...ra,transform:e=>yr(0,1,e)},es={...ra,default:1},_o=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Xn=_o("deg"),wn=_o("%"),W=_o("px"),b9=_o("vh"),S9=_o("vw"),E0={...wn,parse:e=>wn.parse(e)/100,transform:e=>wn.transform(e*100)},j9=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),P0=e=>e===ra||e===W,G0=(e,t)=>parseFloat(e.split(", ")[t]),_0=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return G0(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?G0(a[1],e):0}},C9=new Set(["x","y","z"]),k9=Po.filter(e=>!C9.has(e));function T9(e){const t=[];return k9.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const qi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:_0(4,13),y:_0(5,14)};qi.translateX=qi.x;qi.translateY=qi.y;const Nx=e=>t=>t.test(e),A9={test:e=>e==="auto",parse:e=>e},Vx=[ra,W,wn,Xn,S9,b9,A9],z0=e=>Vx.find(Nx(e)),$r=new Set;let Tu=!1,Au=!1;function Fx(){if(Au){const e=Array.from($r).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=T9(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var s;(s=r.getValue(a))===null||s===void 0||s.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Au=!1,Tu=!1,$r.forEach(e=>e.complete()),$r.clear()}function Bx(){$r.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Au=!0)})}function E9(){Bx(),Fx()}class mp{constructor(t,n,r,i,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?($r.add(this),Tu||(Tu=!0,se.read(Bx),se.resolveKeyframes(Fx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),$r.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,$r.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const $a=e=>Math.round(e*1e5)/1e5,gp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function P9(e){return e==null}const G9=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,vp=(e,t)=>n=>!!(typeof n=="string"&&G9.test(n)&&n.startsWith(e)||t&&!P9(n)&&Object.prototype.hasOwnProperty.call(n,t)),$x=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,s]=r.match(gp);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s!==void 0?parseFloat(s):1}},_9=e=>yr(0,255,e),Qc={...ra,transform:e=>Math.round(_9(e))},Dr={test:vp("rgb","red"),parse:$x("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Qc.transform(e)+", "+Qc.transform(t)+", "+Qc.transform(n)+", "+$a(vo.transform(r))+")"};function z9(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Eu={test:vp("#"),parse:z9,transform:Dr.transform},Ci={test:vp("hsl","hue"),parse:$x("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+wn.transform($a(t))+", "+wn.transform($a(n))+", "+$a(vo.transform(r))+")"},ot={test:e=>Dr.test(e)||Eu.test(e)||Ci.test(e),parse:e=>Dr.test(e)?Dr.parse(e):Ci.test(e)?Ci.parse(e):Eu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Dr.transform(e):Ci.transform(e)},L9=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function M9(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(gp))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(L9))===null||n===void 0?void 0:n.length)||0)>0}const Ux="number",Hx="color",O9="var",R9="var(",L0="${}",I9=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const s=t.replace(I9,l=>(ot.test(l)?(r.color.push(a),i.push(Hx),n.push(ot.parse(l))):l.startsWith(R9)?(r.var.push(a),i.push(O9),n.push(l)):(r.number.push(a),i.push(Ux),n.push(parseFloat(l))),++a,L0)).split(L0);return{values:n,split:s,indexes:r,types:i}}function qx(e){return xo(e).values}function Wx(e){const{split:t,types:n}=xo(e),r=t.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=t[o],i[o]!==void 0){const s=n[o];s===Ux?a+=$a(i[o]):s===Hx?a+=ot.transform(i[o]):a+=i[o]}return a}}const D9=e=>typeof e=="number"?0:e;function N9(e){const t=qx(e);return Wx(e)(t.map(D9))}const wr={test:M9,parse:qx,createTransformer:Wx,getAnimatableNone:N9},V9=new Set(["brightness","contrast","saturate","opacity"]);function F9(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(gp)||[];if(!r)return e;const i=n.replace(r,"");let a=V9.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const B9=/\b([a-z-]*)\(.*?\)/gu,Pu={...wr,getAnimatableNone:e=>{const t=e.match(B9);return t?t.map(F9).join(" "):e}},$9={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,backgroundPositionX:W,backgroundPositionY:W},U9={rotate:Xn,rotateX:Xn,rotateY:Xn,rotateZ:Xn,scale:es,scaleX:es,scaleY:es,scaleZ:es,skew:Xn,skewX:Xn,skewY:Xn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:vo,originX:E0,originY:E0,originZ:W},M0={...ra,transform:Math.round},xp={...$9,...U9,zIndex:M0,size:W,fillOpacity:vo,strokeOpacity:vo,numOctaves:M0},H9={...xp,color:ot,backgroundColor:ot,outlineColor:ot,fill:ot,stroke:ot,borderColor:ot,borderTopColor:ot,borderRightColor:ot,borderBottomColor:ot,borderLeftColor:ot,filter:Pu,WebkitFilter:Pu},yp=e=>H9[e];function Yx(e,t){let n=yp(e);return n!==Pu&&(n=wr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const q9=new Set(["auto","none","0"]);function W9(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!q9.has(a)&&xo(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=Yx(n,i)}class Kx extends mp{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let d=t[l];if(typeof d=="string"&&(d=d.trim(),hp(d))){const u=Dx(d,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!j9.has(r)||t.length!==2)return;const[i,a]=t,o=z0(i),s=z0(a);if(o!==s)if(P0(o)&&P0(s))for(let l=0;l<t.length;l++){const d=t[l];typeof d=="string"&&(t[l]=parseFloat(d))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)m9(t[i])&&r.push(i);r.length&&W9(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=qi[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=qi[r](n.measureViewportBox(),window.getComputedStyle(n.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,d])=>{n.getValue(l).set(d)}),this.resolveNoneKeyframes()}}function wp(e){return typeof e=="function"}let bs;function Y9(){bs=void 0}const bn={now:()=>(bs===void 0&&bn.set(qe.isProcessing||l9.useManualTiming?qe.timestamp:performance.now()),bs),set:e=>{bs=e,queueMicrotask(Y9)}},O0=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(wr.test(e)||e==="0")&&!e.startsWith("url("));function K9(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function X9(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=O0(i,t),s=O0(a,t);return!o||!s?!1:K9(e)||(n==="spring"||wp(n))&&r}const Q9=40;class Xx{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=bn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Q9?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&E9(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=bn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:o,onComplete:s,onUpdate:l,isGenerator:d}=this.options;if(!d&&!X9(t,r,i,a))if(o)this.options.duration=0;else{l==null||l(Kl(t,this.options,n)),s==null||s(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function bp(e,t){return t?e*(1e3/t):0}const J9=5;function Qx(e,t,n){const r=Math.max(t-J9,0);return bp(n-e(r),t-r)}const Jc=.001,Z9=.01,e8=10,t8=.05,n8=1;function r8({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,a,o=1-t;o=yr(t8,n8,o),e=yr(Z9,e8,In(e)),o<1?(i=d=>{const u=d*o,f=u*e,p=u-n,v=Gu(d,o),g=Math.exp(-f);return Jc-p/v*g},a=d=>{const f=d*o*e,p=f*n+n,v=Math.pow(o,2)*Math.pow(d,2)*e,g=Math.exp(-f),y=Gu(Math.pow(d,2),o);return(-i(d)+Jc>0?-1:1)*((p-v)*g)/y}):(i=d=>{const u=Math.exp(-d*e),f=(d-n)*e+1;return-Jc+u*f},a=d=>{const u=Math.exp(-d*e),f=(n-d)*(e*e);return u*f});const s=5/e,l=a8(i,a,s);if(e=Rn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(l,2)*r;return{stiffness:d,damping:o*2*Math.sqrt(r*d),duration:e}}}const i8=12;function a8(e,t,n){let r=n;for(let i=1;i<i8;i++)r=r-e(r)/t(r);return r}function Gu(e,t){return e*Math.sqrt(1-t*t)}const o8=["duration","bounce"],s8=["stiffness","damping","mass"];function R0(e,t){return t.some(n=>e[n]!==void 0)}function l8(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!R0(e,s8)&&R0(e,o8)){const n=r8(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Jx({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],a=e[e.length-1],o={done:!1,value:i},{stiffness:s,damping:l,mass:d,duration:u,velocity:f,isResolvedFromDuration:p}=l8({...r,velocity:-In(r.velocity||0)}),v=f||0,g=l/(2*Math.sqrt(s*d)),y=a-i,w=In(Math.sqrt(s/d)),x=Math.abs(y)<5;n||(n=x?.01:2),t||(t=x?.005:.5);let h;if(g<1){const m=Gu(w,g);h=b=>{const S=Math.exp(-g*w*b);return a-S*((v+g*w*y)/m*Math.sin(m*b)+y*Math.cos(m*b))}}else if(g===1)h=m=>a-Math.exp(-w*m)*(y+(v+w*y)*m);else{const m=w*Math.sqrt(g*g-1);h=b=>{const S=Math.exp(-g*w*b),C=Math.min(m*b,300);return a-S*((v+g*w*y)*Math.sinh(C)+m*y*Math.cosh(C))/m}}return{calculatedDuration:p&&u||null,next:m=>{const b=h(m);if(p)o.done=m>=u;else{let S=0;g<1&&(S=m===0?Rn(v):Qx(h,m,b));const C=Math.abs(S)<=n,T=Math.abs(a-b)<=t;o.done=C&&T}return o.value=o.done?a:b,o}}}function I0({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:l,restDelta:d=.5,restSpeed:u}){const f=e[0],p={done:!1,value:f},v=A=>s!==void 0&&A<s||l!==void 0&&A>l,g=A=>s===void 0?l:l===void 0||Math.abs(s-A)<Math.abs(l-A)?s:l;let y=n*t;const w=f+y,x=o===void 0?w:o(w);x!==w&&(y=x-f);const h=A=>-y*Math.exp(-A/r),m=A=>x+h(A),b=A=>{const G=h(A),E=m(A);p.done=Math.abs(G)<=d,p.value=p.done?x:E};let S,C;const T=A=>{v(p.value)&&(S=A,C=Jx({keyframes:[p.value,g(p.value)],velocity:Qx(m,A,p.value),damping:i,stiffness:a,restDelta:d,restSpeed:u}))};return T(0),{calculatedDuration:null,next:A=>{let G=!1;return!C&&S===void 0&&(G=!0,b(A),T(A)),S!==void 0&&A>=S?C.next(A-S):(!G&&b(A),p)}}}const c8=Go(.42,0,1,1),d8=Go(0,0,.58,1),Zx=Go(.42,0,.58,1),u8=e=>Array.isArray(e)&&typeof e[0]!="number",Sp=e=>Array.isArray(e)&&typeof e[0]=="number",D0={linear:nt,easeIn:c8,easeInOut:Zx,easeOut:d8,circIn:pp,circInOut:Lx,circOut:zx,backIn:fp,backInOut:Gx,backOut:Px,anticipate:_x},N0=e=>{if(Sp(e)){ku(e.length===4);const[t,n,r,i]=e;return Go(t,n,r,i)}else if(typeof e=="string")return ku(D0[e]!==void 0),D0[e];return e},f8=(e,t)=>n=>t(e(n)),Dn=(...e)=>e.reduce(f8),Jr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ee=(e,t,n)=>e+(t-e)*n;function Zc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function p8({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;i=Zc(l,s,e+1/3),a=Zc(l,s,e),o=Zc(l,s,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function ll(e,t){return n=>n>0?t:e}const ed=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},h8=[Eu,Dr,Ci],m8=e=>h8.find(t=>t.test(e));function V0(e){const t=m8(e);if(!t)return!1;let n=t.parse(e);return t===Ci&&(n=p8(n)),n}const F0=(e,t)=>{const n=V0(e),r=V0(t);if(!n||!r)return ll(e,t);const i={...n};return a=>(i.red=ed(n.red,r.red,a),i.green=ed(n.green,r.green,a),i.blue=ed(n.blue,r.blue,a),i.alpha=Ee(n.alpha,r.alpha,a),Dr.transform(i))},_u=new Set(["none","hidden"]);function g8(e,t){return _u.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function v8(e,t){return n=>Ee(e,t,n)}function jp(e){return typeof e=="number"?v8:typeof e=="string"?hp(e)?ll:ot.test(e)?F0:w8:Array.isArray(e)?ey:typeof e=="object"?ot.test(e)?F0:x8:ll}function ey(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>jp(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function x8(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=jp(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function y8(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],s=e.indexes[o][i[o]],l=(n=e.values[s])!==null&&n!==void 0?n:0;r[a]=l,i[o]++}return r}const w8=(e,t)=>{const n=wr.createTransformer(t),r=xo(e),i=xo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?_u.has(e)&&!i.values.length||_u.has(t)&&!r.values.length?g8(e,t):Dn(ey(y8(r,i),i.values),n):ll(e,t)};function ty(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ee(e,t,n):jp(e)(e,t)}function b8(e,t,n){const r=[],i=n||ty,a=e.length-1;for(let o=0;o<a;o++){let s=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||nt:t;s=Dn(l,s)}r.push(s)}return r}function Cp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(ku(a===t.length),a===1)return()=>t[0];if(a===2&&e[0]===e[1])return()=>t[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=b8(t,r,i),s=o.length,l=d=>{let u=0;if(s>1)for(;u<e.length-2&&!(d<e[u+1]);u++);const f=Jr(e[u],e[u+1],d);return o[u](f)};return n?d=>l(yr(e[0],e[a-1],d)):l}function S8(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Jr(0,t,r);e.push(Ee(n,1,i))}}function ny(e){const t=[0];return S8(t,e.length-1),t}function j8(e,t){return e.map(n=>n*t)}function C8(e,t){return e.map(()=>t||Zx).splice(0,e.length-1)}function cl({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=u8(r)?r.map(N0):N0(r),a={done:!1,value:t[0]},o=j8(n&&n.length===t.length?n:ny(t),e),s=Cp(o,t,{ease:Array.isArray(i)?i:C8(t,i)});return{calculatedDuration:e,next:l=>(a.value=s(l),a.done=l>=e,a)}}const B0=2e4;function k8(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<B0;)t+=n,r=e.next(t);return t>=B0?1/0:t}const T8=e=>{const t=({timestamp:n})=>e(n);return{start:()=>se.update(t,!0),stop:()=>an(t),now:()=>qe.isProcessing?qe.timestamp:bn.now()}},A8={decay:I0,inertia:I0,tween:cl,keyframes:cl,spring:Jx},E8=e=>e/100;class kp extends Xx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,o=(i==null?void 0:i.KeyframeResolver)||mp,s=(l,d)=>this.onKeyframesResolved(l,d);this.resolver=new o(a,s,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=this.options,s=wp(n)?n:A8[n]||cl;let l,d;s!==cl&&typeof t[0]!="number"&&(l=Dn(E8,ty(t[0],t[1])),t=[0,100]);const u=s({...this.options,keyframes:t});a==="mirror"&&(d=s({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=k8(u));const{calculatedDuration:f}=u,p=f+i,v=p*(r+1)-i;return{generator:u,mirroredGenerator:d,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:A}=this.options;return{done:!0,value:A[A.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:l,calculatedDuration:d,totalDuration:u,resolvedDuration:f}=r;if(this.startTime===null)return a.next(0);const{delay:p,repeat:v,repeatType:g,repeatDelay:y,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const x=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?x<0:x>u;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let m=this.currentTime,b=a;if(v){const A=Math.min(this.currentTime,u)/f;let G=Math.floor(A),E=A%1;!E&&A>=1&&(E=1),E===1&&G--,G=Math.min(G,v+1),!!(G%2)&&(g==="reverse"?(E=1-E,y&&(E-=y/f)):g==="mirror"&&(b=o)),m=yr(0,1,E)*f}const S=h?{done:!1,value:l[0]}:b.next(m);s&&(S.value=s(S.value));let{done:C}=S;!h&&d!==null&&(C=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&i!==void 0&&(S.value=Kl(l,this.options,i)),w&&w(S.value),T&&this.finish(),S}get duration(){const{resolved:t}=this;return t?In(t.calculatedDuration):0}get time(){return In(this.currentTime)}set time(t){t=Rn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=In(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=T8,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const P8=new Set(["opacity","clipPath","filter","transform"]),G8=10,_8=(e,t)=>{let n="";const r=Math.max(Math.round(t/G8),2);for(let i=0;i<r;i++)n+=e(Jr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function Tp(e){let t;return()=>(t===void 0&&(t=e()),t)}const z8={linearEasing:void 0};function L8(e,t){const n=Tp(e);return()=>{var r;return(r=z8[t])!==null&&r!==void 0?r:n()}}const dl=L8(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function ry(e){return!!(typeof e=="function"&&dl()||!e||typeof e=="string"&&(e in zu||dl())||Sp(e)||Array.isArray(e)&&e.every(ry))}const _a=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,zu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:_a([0,.65,.55,1]),circOut:_a([.55,0,1,.45]),backIn:_a([.31,.01,.66,-.59]),backOut:_a([.33,1.53,.69,.99])};function iy(e,t){if(e)return typeof e=="function"&&dl()?_8(e,t):Sp(e)?_a(e):Array.isArray(e)?e.map(n=>iy(n,t)||zu.easeOut):zu[e]}function M8(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s,times:l}={}){const d={[t]:n};l&&(d.offset=l);const u=iy(s,i);return Array.isArray(u)&&(d.easing=u),e.animate(d,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function $0(e,t){e.timeline=t,e.onfinish=null}const O8=Tp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ul=10,R8=2e4;function I8(e){return wp(e.type)||e.type==="spring"||!ry(e.ease)}function D8(e,t){const n=new kp({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<R8;)r=n.sample(a),i.push(r.value),a+=ul;return{times:void 0,keyframes:i,duration:a-ul,ease:"linear"}}const ay={anticipate:_x,backInOut:Gx,circInOut:Lx};function N8(e){return e in ay}class U0 extends Xx{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new Kx(a,(o,s)=>this.onKeyframesResolved(o,s),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:a,ease:o,type:s,motionValue:l,name:d,startTime:u}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&dl()&&N8(o)&&(o=ay[o]),I8(this.options)){const{onComplete:p,onUpdate:v,motionValue:g,element:y,...w}=this.options,x=D8(t,w);t=x.keyframes,t.length===1&&(t[1]=t[0]),i=x.duration,a=x.times,o=x.ease,s="keyframes"}const f=M8(l.owner.current,d,t,{...this.options,duration:i,times:a,ease:o});return f.startTime=u??this.calcStartTime(),this.pendingTimeline?($0(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:p}=this.options;l.set(Kl(t,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:a,type:s,ease:o,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return In(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return In(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Rn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return nt;const{animation:r}=n;$0(r,t)}return nt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:o,times:s}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:d,onUpdate:u,onComplete:f,element:p,...v}=this.options,g=new kp({...v,keyframes:r,duration:i,type:a,ease:o,times:s,isGenerator:!0}),y=Rn(this.time);d.setWithVelocity(g.sample(y-ul).value,g.sample(y).value,ul)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:o,type:s}=t;return O8()&&r&&P8.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&a!=="mirror"&&o!==0&&s!=="inertia"}}const oy=Tp(()=>window.ScrollTimeline!==void 0);class V8{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>oy()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function F8({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:s,from:l,elapsed:d,...u}){return!!Object.keys(u).length}const Ap=(e,t,n,r={},i,a)=>o=>{const s=up(r,e)||{},l=s.delay||r.delay||0;let{elapsed:d=0}=r;d=d-Rn(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-d,onUpdate:p=>{t.set(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};F8(s)||(u={...u,...s9(e,u)}),u.duration&&(u.duration=Rn(u.duration)),u.repeatDelay&&(u.repeatDelay=Rn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!a&&t.get()!==void 0){const p=Kl(u.keyframes,s);if(p!==void 0)return se.update(()=>{u.onUpdate(p),u.onComplete()}),new V8([])}return!a&&U0.supports(u)?new U0(u):new kp(u)},B8=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),$8=e=>Cu(e)?e[e.length-1]||0:e;function Ep(e,t){e.indexOf(t)===-1&&e.push(t)}function Pp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Gp{constructor(){this.subscriptions=[]}add(t){return Ep(this.subscriptions,t),()=>Pp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const H0=30,U8=e=>!isNaN(parseFloat(e)),Ua={current:void 0};class H8{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=bn.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=bn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=U8(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Gp);const r=this.events[t].add(n);return t==="change"?()=>{r(),se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ua.current&&Ua.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=bn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>H0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,H0);return bp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gn(e,t){return new H8(e,t)}function q8(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,gn(n))}function W8(e,t){const n=Yl(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const s=$8(a[o]);q8(e,o,s)}}const _p=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Y8="framerAppearId",sy="data-"+_p(Y8);function ly(e){return e.props[sy]}const dt=e=>!!(e&&e.getVelocity);function K8(e){return!!(dt(e)&&e.add)}function Lu(e,t){const n=e.getValue("willChange");if(K8(n))return n.add(t)}function X8({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function cy(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:s,...l}=t;r&&(o=r);const d=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(a=e.latestValues[f])!==null&&a!==void 0?a:null),v=l[f];if(v===void 0||u&&X8(u,f))continue;const g={delay:n,...up(o||{},f)};let y=!1;if(window.MotionHandoffAnimation){const x=ly(e);if(x){const h=window.MotionHandoffAnimation(x,f,se);h!==null&&(g.startTime=h,y=!0)}}Lu(e,f),p.start(Ap(f,p,v,e.shouldReduceMotion&&si.has(f)?{type:!1}:g,e,y));const w=p.animation;w&&d.push(w)}return s&&Promise.all(d).then(()=>{se.update(()=>{s&&W8(e,s)})}),d}function Mu(e,t,n={}){var r;const i=Yl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(cy(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=a;return Q8(e,t,u+d,f,p,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[d,u]=l==="beforeChildren"?[o,s]:[s,o];return d().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function Q8(e,t,n=0,r=0,i=1,a){const o=[],s=(e.variantChildren.size-1)*r,l=i===1?(d=0)=>d*r:(d=0)=>s-d*r;return Array.from(e.variantChildren).sort(J8).forEach((d,u)=>{d.notify("AnimationStart",t),o.push(Mu(d,t,{...a,delay:n+l(u)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(o)}function J8(e,t){return e.sortNodePosition(t)}function Z8(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>Mu(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=Mu(e,t,n);else{const i=typeof t=="function"?Yl(e,t,n.custom):t;r=Promise.all(cy(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const e3=dp.length;function dy(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?dy(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<e3;n++){const r=dp[n],i=e.props[r];(go(i)||i===!1)&&(t[r]=i)}return t}const t3=[...cp].reverse(),n3=cp.length;function r3(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Z8(e,n,r)))}function i3(e){let t=r3(e),n=q0(),r=!0;const i=l=>(d,u)=>{var f;const p=Yl(e,u,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:v,transitionEnd:g,...y}=p;d={...d,...y,...g}}return d};function a(l){t=l(e)}function o(l){const{props:d}=e,u=dy(e.parent)||{},f=[],p=new Set;let v={},g=1/0;for(let w=0;w<n3;w++){const x=t3[w],h=n[x],m=d[x]!==void 0?d[x]:u[x],b=go(m),S=x===l?h.isActive:null;S===!1&&(g=w);let C=m===u[x]&&m!==d[x]&&b;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...v},!h.isActive&&S===null||!m&&!h.prevProp||Wl(m)||typeof m=="boolean")continue;const T=a3(h.prevProp,m);let A=T||x===l&&h.isActive&&!C&&b||w>g&&b,G=!1;const E=Array.isArray(m)?m:[m];let P=E.reduce(i(x),{});S===!1&&(P={});const{prevResolvedValues:z={}}=h,I={...z,...P},D=K=>{A=!0,p.has(K)&&(G=!0,p.delete(K)),h.needsAnimating[K]=!0;const M=e.getValue(K);M&&(M.liveStyle=!1)};for(const K in I){const M=P[K],V=z[K];if(v.hasOwnProperty(K))continue;let $=!1;Cu(M)&&Cu(V)?$=!Cx(M,V):$=M!==V,$?M!=null?D(K):p.add(K):M!==void 0&&p.has(K)?D(K):h.protectedKeys[K]=!0}h.prevProp=m,h.prevResolvedValues=P,h.isActive&&(v={...v,...P}),r&&e.blockInitialAnimation&&(A=!1),A&&(!(C&&T)||G)&&f.push(...E.map(K=>({animation:K,options:{type:x}})))}if(p.size){const w={};p.forEach(x=>{const h=e.getBaseTarget(x),m=e.getValue(x);m&&(m.liveStyle=!0),w[x]=h??null}),f.push({animation:w})}let y=!!f.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function s(l,d){var u;if(n[l].isActive===d)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var v;return(v=p.animationState)===null||v===void 0?void 0:v.setActive(l,d)}),n[l].isActive=d;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:s,setAnimateFunction:a,getState:()=>n,reset:()=>{n=q0(),r=!0}}}function a3(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Cx(t,e):!1}function Gr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function q0(){return{animate:Gr(!0),whileInView:Gr(),whileHover:Gr(),whileTap:Gr(),whileDrag:Gr(),whileFocus:Gr(),exit:Gr()}}class Cr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class o3 extends Cr{constructor(t){super(t),t.animationState||(t.animationState=i3(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Wl(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let s3=0;class l3 extends Cr{constructor(){super(...arguments),this.id=s3++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const c3={animation:{Feature:o3},exit:{Feature:l3}},uy=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Xl(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const d3=e=>t=>uy(t)&&e(t,Xl(t));function Mn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Nn(e,t,n,r){return Mn(e,t,d3(n),r)}const W0=(e,t)=>Math.abs(e-t);function u3(e,t){const n=W0(e.x,t.x),r=W0(e.y,t.y);return Math.sqrt(n**2+r**2)}class fy{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=nd(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,v=u3(f.offset,{x:0,y:0})>=3;if(!p&&!v)return;const{point:g}=f,{timestamp:y}=qe;this.history.push({...g,timestamp:y});const{onStart:w,onMove:x}=this.handlers;p||(w&&w(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=td(p,this.transformPagePoint),se.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:v,onSessionEnd:g,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=nd(f.type==="pointercancel"?this.lastMoveEventInfo:td(p,this.transformPagePoint),this.history);this.startEvent&&v&&v(f,w),g&&g(f,w)},!uy(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Xl(t),s=td(o,this.transformPagePoint),{point:l}=s,{timestamp:d}=qe;this.history=[{...l,timestamp:d}];const{onSessionStart:u}=n;u&&u(t,nd(s,this.history)),this.removeListeners=Dn(Nn(this.contextWindow,"pointermove",this.handlePointerMove),Nn(this.contextWindow,"pointerup",this.handlePointerUp),Nn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),an(this.updatePoint)}}function td(e,t){return t?{point:t(e.point)}:e}function Y0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function nd({point:e},t){return{point:e,delta:Y0(e,py(t)),offset:Y0(e,f3(t)),velocity:p3(t,.1)}}function f3(e){return e[0]}function py(e){return e[e.length-1]}function p3(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=py(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Rn(t)));)n--;if(!r)return{x:0,y:0};const a=In(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function hy(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const K0=hy("dragHorizontal"),X0=hy("dragVertical");function my(e){let t=!1;if(e==="y")t=X0();else if(e==="x")t=K0();else{const n=K0(),r=X0();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function gy(){const e=my(!0);return e?(e(),!1):!0}function ki(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const vy=1e-4,h3=1-vy,m3=1+vy,xy=.01,g3=0-xy,v3=0+xy;function Lt(e){return e.max-e.min}function x3(e,t,n){return Math.abs(e-t)<=n}function Q0(e,t,n,r=.5){e.origin=r,e.originPoint=Ee(t.min,t.max,e.origin),e.scale=Lt(n)/Lt(t),e.translate=Ee(n.min,n.max,e.origin)-e.originPoint,(e.scale>=h3&&e.scale<=m3||isNaN(e.scale))&&(e.scale=1),(e.translate>=g3&&e.translate<=v3||isNaN(e.translate))&&(e.translate=0)}function Ha(e,t,n,r){Q0(e.x,t.x,n.x,r?r.originX:void 0),Q0(e.y,t.y,n.y,r?r.originY:void 0)}function J0(e,t,n){e.min=n.min+t.min,e.max=e.min+Lt(t)}function y3(e,t,n){J0(e.x,t.x,n.x),J0(e.y,t.y,n.y)}function Z0(e,t,n){e.min=t.min-n.min,e.max=e.min+Lt(t)}function qa(e,t,n){Z0(e.x,t.x,n.x),Z0(e.y,t.y,n.y)}function w3(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ee(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ee(n,e,r.max):Math.min(e,n)),e}function em(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function b3(e,{top:t,left:n,bottom:r,right:i}){return{x:em(e.x,n,i),y:em(e.y,t,r)}}function tm(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function S3(e,t){return{x:tm(e.x,t.x),y:tm(e.y,t.y)}}function j3(e,t){let n=.5;const r=Lt(e),i=Lt(t);return i>r?n=Jr(t.min,t.max-r,e.min):r>i&&(n=Jr(e.min,e.max-i,t.min)),yr(0,1,n)}function C3(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ou=.35;function k3(e=Ou){return e===!1?e=0:e===!0&&(e=Ou),{x:nm(e,"left","right"),y:nm(e,"top","bottom")}}function nm(e,t,n){return{min:rm(e,t),max:rm(e,n)}}function rm(e,t){return typeof e=="number"?e:e[t]||0}const im=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ti=()=>({x:im(),y:im()}),am=()=>({min:0,max:0}),Me=()=>({x:am(),y:am()});function Dt(e){return[e("x"),e("y")]}function yy({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function T3({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function A3(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function rd(e){return e===void 0||e===1}function Ru({scale:e,scaleX:t,scaleY:n}){return!rd(e)||!rd(t)||!rd(n)}function Lr(e){return Ru(e)||wy(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function wy(e){return om(e.x)||om(e.y)}function om(e){return e&&e!=="0%"}function fl(e,t,n){const r=e-n,i=t*r;return n+i}function sm(e,t,n,r,i){return i!==void 0&&(e=fl(e,i,r)),fl(e,n,r)+t}function Iu(e,t=0,n=1,r,i){e.min=sm(e.min,t,n,r,i),e.max=sm(e.max,t,n,r,i)}function by(e,{x:t,y:n}){Iu(e.x,t.translate,t.scale,t.originPoint),Iu(e.y,n.translate,n.scale,n.originPoint)}const lm=.999999999999,cm=1.0000000000001;function E3(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:l}=a.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ei(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,by(e,o)),r&&Lr(a.latestValues)&&Ei(e,a.latestValues))}t.x<cm&&t.x>lm&&(t.x=1),t.y<cm&&t.y>lm&&(t.y=1)}function Ai(e,t){e.min=e.min+t,e.max=e.max+t}function dm(e,t,n,r,i=.5){const a=Ee(e.min,e.max,i);Iu(e,t,n,a,r)}function Ei(e,t){dm(e.x,t.x,t.scaleX,t.scale,t.originX),dm(e.y,t.y,t.scaleY,t.scale,t.originY)}function Sy(e,t){return yy(A3(e.getBoundingClientRect(),t))}function P3(e,t,n){const r=Sy(e,n),{scroll:i}=t;return i&&(Ai(r.x,i.offset.x),Ai(r.y,i.offset.y)),r}const jy=({current:e})=>e?e.ownerDocument.defaultView:null,G3=new WeakMap;class _3{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Me(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Xl(u,"page").point)},a=(u,f)=>{const{drag:p,dragPropagation:v,onDragStart:g}=this.getProps();if(p&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=my(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Dt(w=>{let x=this.getAxisMotionValue(w).get()||0;if(wn.test(x)){const{projection:h}=this.visualElement;if(h&&h.layout){const m=h.layout.layoutBox[w];m&&(x=Lt(m)*(parseFloat(x)/100))}}this.originPoint[w]=x}),g&&se.postRender(()=>g(u,f)),Lu(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:g,onDrag:y}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:w}=f;if(v&&this.currentDirection===null){this.currentDirection=z3(w),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,w),this.updateAxis("y",f.point,w),this.visualElement.render(),y&&y(u,f)},s=(u,f)=>this.stop(u,f),l=()=>Dt(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new fy(t,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:jy(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&se.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!ts(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=w3(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&ki(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=b3(i.layoutBox,n):this.constraints=!1,this.elastic=k3(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Dt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=C3(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ki(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=P3(r,i.root,this.visualElement.getTransformPagePoint());let o=S3(i.layout.layoutBox,a);if(n){const s=n(T3(o));this.hasMutatedConstraints=!!s,s&&(o=yy(s))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},d=Dt(u=>{if(!ts(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const p=i?200:1e6,v=i?40:1e7,g={type:"inertia",velocity:r?t[u]:0,bounceStiffness:p,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(d).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Lu(this.visualElement,t),r.start(Ap(t,r,0,n,this.visualElement,!1))}stopAnimation(){Dt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Dt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Dt(n=>{const{drag:r}=this.getProps();if(!ts(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:s}=i.layout.layoutBox[n];a.set(t[n]-Ee(o,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ki(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Dt(o=>{const s=this.getAxisMotionValue(o);if(s&&this.constraints!==!1){const l=s.get();i[o]=j3({min:l,max:l},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Dt(o=>{if(!ts(o,t,null))return;const s=this.getAxisMotionValue(o),{min:l,max:d}=this.constraints[o];s.set(Ee(l,d,i[o]))})}addListeners(){if(!this.visualElement.current)return;G3.set(this.visualElement,this);const t=this.visualElement.current,n=Nn(t,"pointerdown",l=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ki(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),se.read(r);const o=Mn(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:d})=>{this.isDragging&&d&&(Dt(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=Ou,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:s}}}function ts(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function z3(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class L3 extends Cr{constructor(t){super(t),this.removeGroupControls=nt,this.removeListeners=nt,this.controls=new _3(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||nt}unmount(){this.removeGroupControls(),this.removeListeners()}}const um=e=>(t,n)=>{e&&se.postRender(()=>e(t,n))};class M3 extends Cr{constructor(){super(...arguments),this.removePointerDownListener=nt}onPointerDown(t){this.session=new fy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jy(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:um(t),onStart:um(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&se.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=Nn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ql=j.createContext(null);function O3(){const e=j.useContext(Ql);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=j.useId();j.useEffect(()=>r(i),[]);const a=j.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,a]:[!0]}const zp=j.createContext({}),Cy=j.createContext({}),Ss={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ba={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=fm(e,t.target.x),r=fm(e,t.target.y);return`${n}% ${r}%`}},R3={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=wr.parse(e);if(i.length>5)return r;const a=wr.createTransformer(e),o=typeof i[0]!="number"?1:0,s=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=l;const d=Ee(s,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=d),typeof i[3+o]=="number"&&(i[3+o]/=d),a(i)}},pl={};function I3(e){Object.assign(pl,e)}const{schedule:Lp,cancel:Tz}=kx(queueMicrotask,!1);class D3 extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;I3(N3),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Ss.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,o=r.projection;return o&&(o.isPresent=a,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||se.postRender(()=>{const s=o.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Lp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ky(e){const[t,n]=O3(),r=j.useContext(zp);return c.jsx(D3,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(Cy),isPresent:t,safeToRemove:n})}const N3={borderRadius:{...ba,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ba,borderTopRightRadius:ba,borderBottomLeftRadius:ba,borderBottomRightRadius:ba,boxShadow:R3},Ty=["TopLeft","TopRight","BottomLeft","BottomRight"],V3=Ty.length,pm=e=>typeof e=="string"?parseFloat(e):e,hm=e=>typeof e=="number"||W.test(e);function F3(e,t,n,r,i,a){i?(e.opacity=Ee(0,n.opacity!==void 0?n.opacity:1,B3(r)),e.opacityExit=Ee(t.opacity!==void 0?t.opacity:1,0,$3(r))):a&&(e.opacity=Ee(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<V3;o++){const s=`border${Ty[o]}Radius`;let l=mm(t,s),d=mm(n,s);if(l===void 0&&d===void 0)continue;l||(l=0),d||(d=0),l===0||d===0||hm(l)===hm(d)?(e[s]=Math.max(Ee(pm(l),pm(d),r),0),(wn.test(d)||wn.test(l))&&(e[s]+="%")):e[s]=d}(t.rotate||n.rotate)&&(e.rotate=Ee(t.rotate||0,n.rotate||0,r))}function mm(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const B3=Ay(0,.5,zx),$3=Ay(.5,.95,nt);function Ay(e,t,n){return r=>r<e?0:r>t?1:n(Jr(e,t,r))}function gm(e,t){e.min=t.min,e.max=t.max}function It(e,t){gm(e.x,t.x),gm(e.y,t.y)}function vm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function xm(e,t,n,r,i){return e-=t,e=fl(e,1/n,r),i!==void 0&&(e=fl(e,1/i,r)),e}function U3(e,t=0,n=1,r=.5,i,a=e,o=e){if(wn.test(t)&&(t=parseFloat(t),t=Ee(o.min,o.max,t/100)-o.min),typeof t!="number")return;let s=Ee(a.min,a.max,r);e===a&&(s-=t),e.min=xm(e.min,t,n,s,i),e.max=xm(e.max,t,n,s,i)}function ym(e,t,[n,r,i],a,o){U3(e,t[n],t[r],t[i],t.scale,a,o)}const H3=["x","scaleX","originX"],q3=["y","scaleY","originY"];function wm(e,t,n,r){ym(e.x,t,H3,n?n.x:void 0,r?r.x:void 0),ym(e.y,t,q3,n?n.y:void 0,r?r.y:void 0)}function bm(e){return e.translate===0&&e.scale===1}function Ey(e){return bm(e.x)&&bm(e.y)}function Sm(e,t){return e.min===t.min&&e.max===t.max}function W3(e,t){return Sm(e.x,t.x)&&Sm(e.y,t.y)}function jm(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Py(e,t){return jm(e.x,t.x)&&jm(e.y,t.y)}function Cm(e){return Lt(e.x)/Lt(e.y)}function km(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Y3{constructor(){this.members=[]}add(t){Ep(this.members,t),t.scheduleRender()}remove(t){if(Pp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function K3(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:u,rotateX:f,rotateY:p,skewX:v,skewY:g}=n;d&&(r=`perspective(${d}px) ${r}`),u&&(r+=`rotate(${u}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),v&&(r+=`skewX(${v}deg) `),g&&(r+=`skewY(${g}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const X3=(e,t)=>e.depth-t.depth;class Q3{constructor(){this.children=[],this.isDirty=!1}add(t){Ep(this.children,t),this.isDirty=!0}remove(t){Pp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(X3),this.isDirty=!1,this.children.forEach(t)}}function js(e){const t=dt(e)?e.get():e;return B8(t)?t.toValue():t}function J3(e,t){const n=bn.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(an(r),e(a-t))};return se.read(r,!0),()=>an(r)}function Z3(e){return e instanceof SVGElement&&e.tagName!=="svg"}function e6(e,t,n){const r=dt(e)?e:gn(e);return r.start(Ap("",r,t,n)),r.animation}const Mr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},za=typeof window<"u"&&window.MotionDebug!==void 0,id=["","X","Y","Z"],t6={visibility:"hidden"},Tm=1e3;let n6=0;function ad(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Gy(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ly(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",se,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Gy(r)}function _y({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},s=t==null?void 0:t()){this.id=n6++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,za&&(Mr.totalNodes=Mr.resolvedTargetDeltas=Mr.recalculatedProjection=0),this.nodes.forEach(a6),this.nodes.forEach(d6),this.nodes.forEach(u6),this.nodes.forEach(o6),za&&window.MotionDebug.record(Mr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Q3)}addEventListener(o,s){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Gp),this.eventHandlers.get(o).add(s)}notifyListeners(o,...s){const l=this.eventHandlers.get(o);l&&l.notify(...s)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Z3(o),this.instance=o;const{layoutId:l,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(d||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=J3(p,250),Ss.hasAnimatedSinceResize&&(Ss.hasAnimatedSinceResize=!1,this.nodes.forEach(Em))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||d)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:v,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||g6,{onLayoutAnimationStart:w,onLayoutAnimationComplete:x}=u.getProps(),h=!this.targetLayout||!Py(this.targetLayout,g)||v,m=!p&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||m||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,m);const b={...up(y,"layout"),onPlay:w,onComplete:x};(u.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||Em(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,an(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(f6),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Gy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Am);return}this.isUpdating||this.nodes.forEach(l6),this.isUpdating=!1,this.nodes.forEach(c6),this.nodes.forEach(r6),this.nodes.forEach(i6),this.clearAllSnapshots();const s=bn.now();qe.delta=yr(0,1e3/60,s-qe.timestamp),qe.timestamp=s,qe.isProcessing=!0,Xc.update.process(qe),Xc.preRender.process(qe),Xc.render.process(qe),qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(s6),this.sharedNodes.forEach(p6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(s=!1),s){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!Ey(this.projectionDelta),l=this.getTransformTemplate(),d=l?l(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&(s||Lr(this.latestValues)||u)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return o&&(l=this.removeTransform(l)),v6(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:s}=this.options;if(!s)return Me();const l=s.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(x6))){const{scroll:u}=this.root;u&&(Ai(l.x,u.offset.x),Ai(l.y,u.offset.y))}return l}removeElementScroll(o){var s;const l=Me();if(It(l,o),!((s=this.scroll)===null||s===void 0)&&s.wasRoot)return l;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:f,options:p}=u;u!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&It(l,o),Ai(l.x,f.offset.x),Ai(l.y,f.offset.y))}return l}applyTransform(o,s=!1){const l=Me();It(l,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Ei(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Lr(u.latestValues)&&Ei(l,u.latestValues)}return Lr(this.latestValues)&&Ei(l,this.latestValues),l}removeTransform(o){const s=Me();It(s,o);for(let l=0;l<this.path.length;l++){const d=this.path[l];if(!d.instance||!Lr(d.latestValues))continue;Ru(d.latestValues)&&d.updateSnapshot();const u=Me(),f=d.measurePageBox();It(u,f),wm(s,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return Lr(this.latestValues)&&wm(s,this.latestValues),s}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var s;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==l;if(!(o||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=qe.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),qa(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),It(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Me(),this.targetWithTransforms=Me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):It(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):It(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Me(),this.relativeTargetOrigin=Me(),qa(this.relativeTargetOrigin,this.target,v.target),It(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}za&&Mr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ru(this.parent.latestValues)||wy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let d=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(d=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===qe.timestamp&&(d=!1),d)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;It(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,v=this.treeScale.y;E3(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Me());const{target:g}=s;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vm(this.prevProjectionDelta.x,this.projectionDelta.x),vm(this.prevProjectionDelta.y,this.projectionDelta.y)),Ha(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==v||!km(this.projectionDelta.x,this.prevProjectionDelta.x)||!km(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),za&&Mr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var s;if((s=this.options.visualElement)===null||s===void 0||s.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ti(),this.projectionDelta=Ti(),this.projectionDeltaWithTransform=Ti()}setAnimationOrigin(o,s=!1){const l=this.snapshot,d=l?l.latestValues:{},u={...this.latestValues},f=Ti();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const p=Me(),v=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=v!==g,w=this.getStack(),x=!w||w.members.length<=1,h=!!(y&&!x&&this.options.crossfade===!0&&!this.path.some(m6));this.animationProgress=0;let m;this.mixTargetDelta=b=>{const S=b/1e3;Pm(f.x,o.x,S),Pm(f.y,o.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qa(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),h6(this.relativeTarget,this.relativeTargetOrigin,p,S),m&&W3(this.relativeTarget,m)&&(this.isProjectionDirty=!1),m||(m=Me()),It(m,this.relativeTarget)),y&&(this.animationValues=u,F3(u,d,this.latestValues,S,h,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(an(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=se.update(()=>{Ss.hasAnimatedSinceResize=!0,this.currentAnimation=e6(0,Tm,{...o,onUpdate:s=>{this.mixTargetDelta(s),o.onUpdate&&o.onUpdate(s)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Tm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:s,target:l,layout:d,latestValues:u}=o;if(!(!s||!l||!d)){if(this!==o&&this.layout&&d&&zy(this.options.animationType,this.layout.layoutBox,d.layoutBox)){l=this.target||Me();const f=Lt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Lt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}It(s,l),Ei(s,u),Ha(this.projectionDeltaWithTransform,this.layoutCorrected,s,u)}}registerSharedNode(o,s){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Y3),this.sharedNodes.get(o).add(s);const d=s.options.initialPromotionConfig;s.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(s):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:s,preserveFollowOpacity:l}={}){const d=this.getStack();d&&d.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let s=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const d={};l.z&&ad("z",o,d,this.animationValues);for(let u=0;u<id.length;u++)ad(`rotate${id[u]}`,o,d,this.animationValues),ad(`skew${id[u]}`,o,d,this.animationValues);o.render();for(const u in d)o.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);o.scheduleRender()}getProjectionStyles(o){var s,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return t6;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=js(o==null?void 0:o.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=js(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Lr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),d.transform=K3(this.projectionDeltaWithTransform,this.treeScale,p),u&&(d.transform=u(p,d.transform));const{x:v,y:g}=this.projectionDelta;d.transformOrigin=`${v.origin*100}% ${g.origin*100}% 0`,f.animationValues?d.opacity=f===this?(l=(s=p.opacity)!==null&&s!==void 0?s:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:d.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in pl){if(p[y]===void 0)continue;const{correct:w,applyTo:x}=pl[y],h=d.transform==="none"?p[y]:w(p[y],f);if(x){const m=x.length;for(let b=0;b<m;b++)d[x[b]]=h}else d[y]=h}return this.options.layoutId&&(d.pointerEvents=f===this?js(o==null?void 0:o.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var s;return(s=o.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(Am),this.root.sharedNodes.clear()}}}function r6(e){e.updateLayout()}function i6(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?Dt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],v=Lt(p);p.min=r[f].min,p.max=p.min+v}):zy(a,n.layoutBox,r)&&Dt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],v=Lt(r[f]);p.max=p.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const s=Ti();Ha(s,r,n.layoutBox);const l=Ti();o?Ha(l,e.applyTransform(i,!0),n.measuredBox):Ha(l,r,n.layoutBox);const d=!Ey(s);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:v}=f;if(p&&v){const g=Me();qa(g,n.layoutBox,p.layoutBox);const y=Me();qa(y,r,v.layoutBox),Py(g,y)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=g,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:s,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function a6(e){za&&Mr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function o6(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function s6(e){e.clearSnapshot()}function Am(e){e.clearMeasurements()}function l6(e){e.isLayoutDirty=!1}function c6(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Em(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function d6(e){e.resolveTargetDelta()}function u6(e){e.calcProjection()}function f6(e){e.resetSkewAndRotation()}function p6(e){e.removeLeadSnapshot()}function Pm(e,t,n){e.translate=Ee(t.translate,0,n),e.scale=Ee(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Gm(e,t,n,r){e.min=Ee(t.min,n.min,r),e.max=Ee(t.max,n.max,r)}function h6(e,t,n,r){Gm(e.x,t.x,n.x,r),Gm(e.y,t.y,n.y,r)}function m6(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const g6={duration:.45,ease:[.4,0,.1,1]},_m=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),zm=_m("applewebkit/")&&!_m("chrome/")?Math.round:nt;function Lm(e){e.min=zm(e.min),e.max=zm(e.max)}function v6(e){Lm(e.x),Lm(e.y)}function zy(e,t,n){return e==="position"||e==="preserve-aspect"&&!x3(Cm(t),Cm(n),.2)}function x6(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const y6=_y({attachResizeListener:(e,t)=>Mn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),od={current:void 0},Ly=_y({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!od.current){const e=new y6({});e.mount(window),e.setOptions({layoutScroll:!0}),od.current=e}return od.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),w6={pan:{Feature:M3},drag:{Feature:L3,ProjectionNode:Ly,MeasureLayout:ky}};function Mm(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(a,o)=>{if(a.pointerType==="touch"||gy())return;const s=e.getProps();e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",t);const l=s[r];l&&se.postRender(()=>l(a,o))};return Nn(e.current,n,i,{passive:!e.getProps()[r]})}class b6 extends Cr{mount(){this.unmount=Dn(Mm(this.node,!0),Mm(this.node,!1))}unmount(){}}class S6 extends Cr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dn(Mn(this.node.current,"focus",()=>this.onFocus()),Mn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const My=(e,t)=>t?e===t?!0:My(e,t.parentElement):!1;function sd(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Xl(n))}class j6 extends Cr{constructor(){super(...arguments),this.removeStartListeners=nt,this.removeEndListeners=nt,this.removeAccessibleListeners=nt,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),a=Nn(window,"pointerup",(s,l)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:f}=this.node.getProps(),p=!f&&!My(this.node.current,s.target)?u:d;p&&se.update(()=>p(s,l))},{passive:!(r.onTap||r.onPointerUp)}),o=Nn(window,"pointercancel",(s,l)=>this.cancelPress(s,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Dn(a,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const o=s=>{s.key!=="Enter"||!this.checkPressEnd()||sd("up",(l,d)=>{const{onTap:u}=this.node.getProps();u&&se.postRender(()=>u(l,d))})};this.removeEndListeners(),this.removeEndListeners=Mn(this.node.current,"keyup",o),sd("down",(s,l)=>{this.startPress(s,l)})},n=Mn(this.node.current,"keydown",t),r=()=>{this.isPressing&&sd("cancel",(a,o)=>this.cancelPress(a,o))},i=Mn(this.node.current,"blur",r);this.removeAccessibleListeners=Dn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&se.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!gy()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&se.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Nn(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Mn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Dn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Du=new WeakMap,ld=new WeakMap,C6=e=>{const t=Du.get(e.target);t&&t(e)},k6=e=>{e.forEach(C6)};function T6({root:e,...t}){const n=e||document;ld.has(n)||ld.set(n,{});const r=ld.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(k6,{root:e,...t})),r[i]}function A6(e,t,n){const r=T6(t);return Du.set(e,n),r.observe(e),()=>{Du.delete(e),r.unobserve(e)}}const E6={some:0,all:1};class P6 extends Cr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:E6[i]},s=l=>{const{isIntersecting:d}=l;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),p=d?u:f;p&&p(l)};return A6(this.node.current,o,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(G6(t,n))&&this.startObserver()}unmount(){}}function G6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const _6={inView:{Feature:P6},tap:{Feature:j6},focus:{Feature:S6},hover:{Feature:b6}},z6={layout:{ProjectionNode:Ly,MeasureLayout:ky}},Jl=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Zl=j.createContext({}),Mp=typeof window<"u",ec=Mp?j.useLayoutEffect:j.useEffect,Oy=j.createContext({strict:!1});function L6(e,t,n,r,i){var a,o;const{visualElement:s}=j.useContext(Zl),l=j.useContext(Oy),d=j.useContext(Ql),u=j.useContext(Jl).reducedMotion,f=j.useRef();r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:u}));const p=f.current,v=j.useContext(Cy);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&M6(f.current,n,i,v);const g=j.useRef(!1);j.useInsertionEffect(()=>{p&&g.current&&p.update(n,d)});const y=n[sy],w=j.useRef(!!y&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return ec(()=>{p&&(g.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Lp.render(p.render),w.current&&p.animationState&&p.animationState.animateChanges())}),j.useEffect(()=>{p&&(!w.current&&p.animationState&&p.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,y)}),w.current=!1))}),p}function M6(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Ry(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&ki(s),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:d})}function Ry(e){if(e)return e.options.allowProjection!==!1?e.projection:Ry(e.parent)}function O6(e,t,n){return j.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ki(n)&&(n.current=r))},[t])}function tc(e){return Wl(e.animate)||dp.some(t=>go(e[t]))}function Iy(e){return!!(tc(e)||e.variants)}function R6(e,t){if(tc(e)){const{initial:n,animate:r}=e;return{initial:n===!1||go(n)?n:void 0,animate:go(r)?r:void 0}}return e.inherit!==!1?t:{}}function I6(e){const{initial:t,animate:n}=R6(e,j.useContext(Zl));return j.useMemo(()=>({initial:t,animate:n}),[Om(t),Om(n)])}function Om(e){return Array.isArray(e)?e.join(" "):e}const Rm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Wi={};for(const e in Rm)Wi[e]={isEnabled:t=>Rm[e].some(n=>!!t[n])};function D6(e){for(const t in e)Wi[t]={...Wi[t],...e[t]}}const N6=Symbol.for("motionComponentSymbol");function V6({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&D6(e);function a(s,l){let d;const u={...j.useContext(Jl),...s,layoutId:F6(s)},{isStatic:f}=u,p=I6(s),v=r(s,f);if(!f&&Mp){B6();const g=$6(u);d=g.MeasureLayout,p.visualElement=L6(i,v,u,t,g.ProjectionNode)}return c.jsxs(Zl.Provider,{value:p,children:[d&&p.visualElement?c.jsx(d,{visualElement:p.visualElement,...u}):null,n(i,s,O6(v,p.visualElement,l),v,f,p.visualElement)]})}const o=j.forwardRef(a);return o[N6]=i,o}function F6({layoutId:e}){const t=j.useContext(zp).id;return t&&e!==void 0?t+"-"+e:e}function B6(e,t){j.useContext(Oy).strict}function $6(e){const{drag:t,layout:n}=Wi;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const U6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Op(e){return typeof e!="string"||e.includes("-")?!1:!!(U6.indexOf(e)>-1||/[A-Z]/u.test(e))}function Dy(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const Ny=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vy(e,t,n,r){Dy(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Ny.has(i)?i:_p(i),t.attrs[i])}function Fy(e,{layout:t,layoutId:n}){return si.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!pl[e]||e==="opacity")}function Rp(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(dt(i[o])||t.style&&dt(t.style[o])||Fy(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[o]=i[o]);return a}function By(e,t,n){const r=Rp(e,t,n);for(const i in e)if(dt(e[i])||dt(t[i])){const a=Po.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function ia(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}function H6({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,a){const o={latestValues:q6(r,i,a,e),renderState:t()};return n&&(o.mount=s=>n(r,s,o)),o}const $y=e=>(t,n)=>{const r=j.useContext(Zl),i=j.useContext(Ql),a=()=>H6(e,t,r,i);return n?a():ia(a)};function q6(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=js(a[p]);let{initial:o,animate:s}=e;const l=tc(e),d=Iy(e);t&&d&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?s:o;if(f&&typeof f!="boolean"&&!Wl(f)){const p=Array.isArray(f)?f:[f];for(let v=0;v<p.length;v++){const g=lp(e,p[v]);if(g){const{transitionEnd:y,transition:w,...x}=g;for(const h in x){let m=x[h];if(Array.isArray(m)){const b=u?m.length-1:0;m=m[b]}m!==null&&(i[h]=m)}for(const h in y)i[h]=y[h]}}}return i}const Ip=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Uy=()=>({...Ip(),attrs:{}}),Hy=(e,t)=>t&&typeof e=="number"?t.transform(e):e,W6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Y6=Po.length;function K6(e,t,n){let r="",i=!0;for(let a=0;a<Y6;a++){const o=Po[a],s=e[o];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(o.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const d=Hy(s,xp[o]);if(!l){i=!1;const u=W6[o]||o;r+=`${u}(${d}) `}n&&(t[o]=d)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Dp(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const d=t[l];if(si.has(l)){o=!0;continue}else if(Ix(l)){i[l]=d;continue}else{const u=Hy(d,xp[l]);l.startsWith("origin")?(s=!0,a[l]=u):r[l]=u}}if(t.transform||(o||n?r.transform=K6(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:d="50%",originZ:u=0}=a;r.transformOrigin=`${l} ${d} ${u}`}}function Im(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function X6(e,t,n){const r=Im(t,e.x,e.width),i=Im(n,e.y,e.height);return`${r} ${i}`}const Q6={offset:"stroke-dashoffset",array:"stroke-dasharray"},J6={offset:"strokeDashoffset",array:"strokeDasharray"};function Z6(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?Q6:J6;e[a.offset]=W.transform(-r);const o=W.transform(t),s=W.transform(n);e[a.array]=`${o} ${s}`}function Np(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:s=1,pathOffset:l=0,...d},u,f){if(Dp(e,d,f),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:v,dimensions:g}=e;p.transform&&(g&&(v.transform=p.transform),delete p.transform),g&&(i!==void 0||a!==void 0||v.transform)&&(v.transformOrigin=X6(g,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&Z6(p,o,s,l,!1)}const Vp=e=>typeof e=="string"&&e.toLowerCase()==="svg",eS={useVisualState:$y({scrapeMotionValuesFromProps:By,createRenderState:Uy,onMount:(e,t,{renderState:n,latestValues:r})=>{se.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),se.render(()=>{Np(n,r,Vp(t.tagName),e.transformTemplate),Vy(t,n)})}})},tS={useVisualState:$y({scrapeMotionValuesFromProps:Rp,createRenderState:Ip})};function qy(e,t,n){for(const r in t)!dt(t[r])&&!Fy(r,n)&&(e[r]=t[r])}function nS({transformTemplate:e},t){return j.useMemo(()=>{const n=Ip();return Dp(n,t,e),Object.assign({},n.vars,n.style)},[t])}function rS(e,t){const n=e.style||{},r={};return qy(r,n,e),Object.assign(r,nS(e,t)),r}function iS(e,t){const n={},r=rS(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const aS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function hl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||aS.has(e)}let Wy=e=>!hl(e);function oS(e){e&&(Wy=t=>t.startsWith("on")?!hl(t):e(t))}try{oS(require("@emotion/is-prop-valid").default)}catch{}function sS(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Wy(i)||n===!0&&hl(i)||!t&&!hl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function lS(e,t,n,r){const i=j.useMemo(()=>{const a=Uy();return Np(a,t,Vp(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};qy(a,e.style,e),i.style={...a,...i.style}}return i}function cS(e=!1){return(n,r,i,{latestValues:a},o)=>{const l=(Op(n)?lS:iS)(r,a,o,n),d=sS(r,typeof n=="string",e),u=n!==j.Fragment?{...d,...l,ref:i}:{},{children:f}=r,p=j.useMemo(()=>dt(f)?f.get():f,[f]);return j.createElement(n,{...u,children:p})}}function dS(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Op(r)?eS:tS,preloadedFeatures:e,useRender:cS(i),createVisualElement:t,Component:r};return V6(o)}}const Nu={current:null},Yy={current:!1};function uS(){if(Yy.current=!0,!!Mp)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Nu.current=e.matches;e.addListener(t),t()}else Nu.current=!1}function fS(e,t,n){for(const r in t){const i=t[r],a=n[r];if(dt(i))e.addValue(r,i);else if(dt(a))e.addValue(r,gn(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,gn(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Dm=new WeakMap,pS=[...Vx,ot,wr],hS=e=>pS.find(Nx(e)),Nm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class mS{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=mp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=bn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,se.render(this.render,!1,!0))};const{latestValues:l,renderState:d}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=tc(n),this.isVariantNode=Iy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const v=f[p];l[p]!==void 0&&dt(v)&&v.set(l[p],!1)}}mount(t){this.current=t,Dm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Yy.current||uS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Nu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Dm.delete(this.current),this.projection&&this.projection.unmount(),an(this.notifyUpdate),an(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=si.has(t),i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Wi){const n=Wi[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Nm.length;r++){const i=Nm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=fS(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=gn(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Ox(i)||Mx(i))?i=parseFloat(i):!hS(i)&&wr.test(n)&&(i=Yx(t,n)),this.setBaseTarget(t,dt(i)?i.get():i)),dt(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=lp(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!dt(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Gp),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Ky extends mS{constructor(){super(...arguments),this.KeyframeResolver=Kx}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function gS(e){return window.getComputedStyle(e)}class vS extends Ky{constructor(){super(...arguments),this.type="html",this.renderInstance=Dy}readValueFromInstance(t,n){if(si.has(n)){const r=yp(n);return r&&r.default||0}else{const r=gS(t),i=(Ix(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Sy(t,n)}build(t,n,r){Dp(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Rp(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;dt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class xS extends Ky{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Me}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(si.has(n)){const r=yp(n);return r&&r.default||0}return n=Ny.has(n)?n:_p(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return By(t,n,r)}build(t,n,r){Np(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Vy(t,n,r,i)}mount(t){this.isSVGTag=Vp(t.tagName),super.mount(t)}}const yS=(e,t)=>Op(e)?new xS(t):new vS(t,{allowProjection:e!==j.Fragment}),wS=dS({...c3,..._6,...w6,...z6},yS),Oe=n9(wS);class bS extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function SS({children:e,isPresent:t}){const n=j.useId(),r=j.useRef(null),i=j.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=j.useContext(Jl);return j.useInsertionEffect(()=>{const{width:o,height:s,top:l,left:d}=i.current;if(t||!r.current||!o||!s)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return a&&(u.nonce=a),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),c.jsx(bS,{isPresent:t,childRef:r,sizeRef:i,children:j.cloneElement(e,{ref:r})})}const jS=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o})=>{const s=ia(CS),l=j.useId(),d=j.useCallback(f=>{s.set(f,!0);for(const p of s.values())if(!p)return;r&&r()},[s,r]),u=j.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:d,register:f=>(s.set(f,!1),()=>s.delete(f))}),a?[Math.random(),d]:[n,d]);return j.useMemo(()=>{s.forEach((f,p)=>s.set(p,!1))},[n]),j.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),o==="popLayout"&&(e=c.jsx(SS,{isPresent:n,children:e})),c.jsx(Ql.Provider,{value:u,children:e})};function CS(){return new Map}const ns=e=>e.key||"";function Vm(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const kS=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:o="sync"})=>{const s=j.useMemo(()=>Vm(e),[e]),l=s.map(ns),d=j.useRef(!0),u=j.useRef(s),f=ia(()=>new Map),[p,v]=j.useState(s),[g,y]=j.useState(s);ec(()=>{d.current=!1,u.current=s;for(let h=0;h<g.length;h++){const m=ns(g[h]);l.includes(m)?f.delete(m):f.get(m)!==!0&&f.set(m,!1)}},[g,l.length,l.join("-")]);const w=[];if(s!==p){let h=[...s];for(let m=0;m<g.length;m++){const b=g[m],S=ns(b);l.includes(S)||(h.splice(m,0,b),w.push(b))}o==="wait"&&w.length&&(h=w),y(Vm(h)),v(s);return}const{forceRender:x}=j.useContext(zp);return c.jsx(c.Fragment,{children:g.map(h=>{const m=ns(h),b=s===g||l.includes(m),S=()=>{if(f.has(m))f.set(m,!0);else return;let C=!0;f.forEach(T=>{T||(C=!1)}),C&&(x==null||x(),y(u.current),i&&i())};return c.jsx(jS,{isPresent:b,initial:!d.current||r?void 0:!1,custom:b?void 0:n,presenceAffectsLayout:a,mode:o,onExitComplete:b?void 0:S,children:h},m)})})};function TS(e){const t=ia(()=>gn(e)),{isStatic:n}=j.useContext(Jl);if(n){const[,r]=j.useState(e);j.useEffect(()=>t.on("change",r),[])}return t}function Xy(e,t){const n=TS(t()),r=()=>n.set(t());return r(),ec(()=>{const i=()=>se.preRender(r,!1,!0),a=e.map(o=>o.on("change",i));return()=>{a.forEach(o=>o()),an(r)}}),n}const AS=e=>e&&typeof e=="object"&&e.mix,ES=e=>AS(e)?e.mix:void 0;function PS(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],s=Cp(i,a,{mixer:ES(a[0]),...o});return t?s(r):s}function GS(e){Ua.current=[],e();const t=Xy(Ua.current,e);return Ua.current=void 0,t}function rs(e,t,n,r){if(typeof e=="function")return GS(e);const i=typeof t=="function"?t:PS(t,n,r);return Array.isArray(e)?Fm(e,i):Fm([e],([a])=>i(a))}function Fm(e,t){const n=ia(()=>[]);return Xy(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Qy(e,t,n){return typeof e=="string"?e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}const Cs=new WeakMap;let Qn;function _S(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function zS({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Cs.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return _S(e,n)}})})}function LS(e){e.forEach(zS)}function MS(){typeof ResizeObserver>"u"||(Qn=new ResizeObserver(LS))}function OS(e,t){Qn||MS();const n=Qy(e);return n.forEach(r=>{let i=Cs.get(r);i||(i=new Set,Cs.set(r,i)),i.add(t),Qn==null||Qn.observe(r)}),()=>{n.forEach(r=>{const i=Cs.get(r);i==null||i.delete(t),i!=null&&i.size||Qn==null||Qn.unobserve(r)})}}const ks=new Set;let Wa;function RS(){Wa=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ks.forEach(n=>n(t))},window.addEventListener("resize",Wa)}function IS(e){return ks.add(e),Wa||RS(),()=>{ks.delete(e),!ks.size&&Wa&&(Wa=void 0)}}function DS(e,t){return typeof e=="function"?IS(e):OS(e,t)}const NS=50,Bm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),VS=()=>({time:0,x:Bm(),y:Bm()}),FS={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function $m(e,t,n,r){const i=n[t],{length:a,position:o}=FS[t],s=i.current,l=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Jr(0,i.scrollLength,i.current);const d=r-l;i.velocity=d>NS?0:bp(i.current-s,d)}function BS(e,t,n){$m(e,"x",t,n),$m(e,"y",t,n),t.time=n}function $S(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();n.x+=i.left-a.left,n.y+=i.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:a}=r.getBBox();n.x+=i,n.y+=a;let o=null,s=r.parentNode;for(;!o;)s.tagName==="svg"&&(o=s),s=r.parentNode;r=o}else break;return n}const US={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Vu={start:0,center:.5,end:1};function Um(e,t,n=0){let r=0;if(e in Vu&&(e=Vu[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const HS=[0,0];function qS(e,t,n,r){let i=Array.isArray(e)?e:HS,a=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Vu[e]?e:"0"]),a=Um(i[0],n,r),o=Um(i[1],t),a-o}const WS={x:0,y:0};function YS(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function KS(e,t,n){const{offset:r=US.All}=n,{target:i=e,axis:a="y"}=n,o=a==="y"?"height":"width",s=i!==e?$S(i,e):WS,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:YS(i),d={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate;const f=r.length;for(let p=0;p<f;p++){const v=qS(r[p],d[o],l[o],s[a]);!u&&v!==t[a].interpolatorOffsets[p]&&(u=!0),t[a].offset[p]=v}u&&(t[a].interpolate=Cp(t[a].offset,ny(r)),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=t[a].interpolate(t[a].current)}function XS(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function QS(e,t,n,r={}){return{measure:()=>XS(e,r.target,n),update:i=>{BS(e,n,i),(r.offset||r.target)&&KS(e,n,r)},notify:()=>t(n)}}const Sa=new WeakMap,Hm=new WeakMap,cd=new WeakMap,qm=e=>e===document.documentElement?window:e;function Fp(e,{container:t=document.documentElement,...n}={}){let r=cd.get(t);r||(r=new Set,cd.set(t,r));const i=VS(),a=QS(t,e,i,n);if(r.add(a),!Sa.has(t)){const s=()=>{for(const p of r)p.measure()},l=()=>{for(const p of r)p.update(qe.timestamp)},d=()=>{for(const p of r)p.notify()},u=()=>{se.read(s,!1,!0),se.read(l,!1,!0),se.update(d,!1,!0)};Sa.set(t,u);const f=qm(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&Hm.set(t,DS(t,u)),f.addEventListener("scroll",u,{passive:!0})}const o=Sa.get(t);return se.read(o,!1,!0),()=>{var s;an(o);const l=cd.get(t);if(!l||(l.delete(a),l.size))return;const d=Sa.get(t);Sa.delete(t),d&&(qm(t).removeEventListener("scroll",d),(s=Hm.get(t))===null||s===void 0||s(),window.removeEventListener("resize",d))}}function Jy(e,t){let n;const r=()=>{const{currentTime:i}=t,o=(i===null?0:i.value)/100;n!==o&&e(o),n=o};return se.update(r,!0),()=>an(r)}function JS({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Fp(a=>{r.value=a[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const dd=new Map;function Zy({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),dd.has(t)||dd.set(t,{});const r=dd.get(t);return r[n]||(r[n]=oy()?new ScrollTimeline({source:t,axis:n}):JS({source:t,axis:n})),r[n]}function ZS(e){return e.length===2}function ew(e){return e&&(e.target||e.offset)}function e7(e,t){return ZS(e)||ew(t)?Fp(n=>{e(n[t.axis].progress,n)},t):Jy(e,Zy(t))}function t7(e,t){if(ew(t))return e.pause(),Fp(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=Zy(t);return e.attachTimeline(n,r=>(r.pause(),Jy(i=>{r.time=r.duration*i},n)))}}function n7(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?e7(e,r):t7(e,r)}function Wm(e,t){g9(!!(!t||t.current))}const r7=()=>({scrollX:gn(0),scrollY:gn(0),scrollXProgress:gn(0),scrollYProgress:gn(0)});function i7({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=ia(r7);return(n?ec:j.useEffect)(()=>(Wm("target",t),Wm("container",e),n7((o,{x:s,y:l})=>{i.scrollX.set(s.current),i.scrollXProgress.set(s.progress),i.scrollY.set(l.current),i.scrollYProgress.set(l.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}const a7={some:0,all:1};function o7(e,t,{root:n,margin:r,amount:i="some"}={}){const a=Qy(e),o=new WeakMap,s=d=>{d.forEach(u=>{const f=o.get(u.target);if(u.isIntersecting!==!!f)if(u.isIntersecting){const p=t(u);typeof p=="function"?o.set(u.target,p):l.unobserve(u.target)}else f&&(f(u),o.delete(u.target))})},l=new IntersectionObserver(s,{root:n,rootMargin:r,threshold:typeof i=="number"?i:a7[i]});return a.forEach(d=>l.observe(d)),()=>l.disconnect()}function s7(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[a,o]=j.useState(!1);return j.useEffect(()=>{if(!e.current||i&&a)return;const s=()=>(o(!0),i?void 0:()=>o(!1)),l={root:t&&t.current||void 0,margin:n,amount:r};return o7(e.current,s,l)},[t,e,n,i,r]),a}var tw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ym=te.createContext&&te.createContext(tw),l7=["attr","size","title"];function c7(e,t){if(e==null)return{};var n=d7(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function d7(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function ml(){return ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ml.apply(this,arguments)}function Km(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Km(Object(n),!0).forEach(function(r){u7(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Km(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function u7(e,t,n){return t=f7(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f7(e){var t=p7(e,"string");return typeof t=="symbol"?t:t+""}function p7(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nw(e){return e&&e.map((t,n)=>te.createElement(t.tag,gl({key:n},t.attr),nw(t.child)))}function J(e){return t=>te.createElement(h7,ml({attr:gl({},e.attr)},t),nw(e.child))}function h7(e){var t=n=>{var{attr:r,size:i,title:a}=e,o=c7(e,l7),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),te.createElement("svg",ml({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:gl(gl({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&te.createElement("title",null,a),e.children)};return Ym!==void 0?te.createElement(Ym.Consumer,null,n=>t(n)):t(tw)}function m7(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function Xm(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"},child:[]}]})(e)}function Bp(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Pe(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"},child:[]}]})(e)}function De(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"},child:[]}]})(e)}function g7(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"},child:[]}]})(e)}function Qm(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function Jm(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(e)}function oe(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M510.5 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.4-24.1-45.6-40-77.7-40-53 0-96 43-96 96 0 .5.2 1.1.2 1.6C187.6 233 160 265.2 160 304c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80 0-39.2-28.2-71.7-65.5-78.5zm-386.4 34.4c-37.4-37.4-37.4-98.3 0-135.8 34.6-34.6 89.1-36.8 126.7-7.4 20-12.9 43.6-20.7 69.2-20.7.7 0 1.3.2 2 .2l8.9-26.7c3.4-10.2-6.3-19.8-16.5-16.4l-75.3 25.1-35.5-71c-4.8-9.6-18.5-9.6-23.3 0l-35.5 71-75.3-25.1c-10.2-3.4-19.8 6.3-16.4 16.5l25.1 75.3-71 35.5c-9.6 4.8-9.6 18.5 0 23.3l71 35.5-25.1 75.3c-3.4 10.2 6.3 19.8 16.5 16.5l59.2-19.7c-.2-2.4-.7-4.7-.7-7.2 0-12.5 2.3-24.5 6.2-35.9-3.6-2.7-7.1-5.2-10.2-8.3zm69.8-58c4.3-24.5 15.8-46.4 31.9-64-9.8-6.2-21.4-9.9-33.8-9.9-35.3 0-64 28.7-64 64 0 18.7 8.2 35.4 21.1 47.1 11.3-15.9 26.6-28.9 44.8-37.2zm330.6 216.2c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8zm-96 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.3-7.7 1.7-17.4-6-21.8z"},child:[]}]})(e)}function ht(e){return J({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(e)}function Zm(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function eg(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function v7(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z"},child:[]}]})(e)}function Fe(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"},child:[]}]})(e)}function ke(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 288h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56v-64h-56c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h56V96h-56c-4.42 0-8-3.58-8-8V72c0-4.42 3.58-8 8-8h56V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38V288zm320 64h-32v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-64v56c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-56h-41.37L24.2 510.43c2.56.66 5.04 1.57 7.8 1.57h448c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function ci(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M440.3 345.2l-33.8-19.5 26-7c8.2-2.2 13.1-10.7 10.9-18.9l-4-14.9c-2.2-8.2-10.7-13.1-18.9-10.9l-70.8 19-63.9-37 63.8-36.9 70.8 19c8.2 2.2 16.7-2.7 18.9-10.9l4-14.9c2.2-8.2-2.7-16.7-10.9-18.9l-26-7 33.8-19.5c7.4-4.3 9.9-13.7 5.7-21.1L430.4 119c-4.3-7.4-13.7-9.9-21.1-5.7l-33.8 19.5 7-26c2.2-8.2-2.7-16.7-10.9-18.9l-14.9-4c-8.2-2.2-16.7 2.7-18.9 10.9l-19 70.8-62.8 36.2v-77.5l53.7-53.7c6.2-6.2 6.2-16.4 0-22.6l-11.3-11.3c-6.2-6.2-16.4-6.2-22.6 0L256 56.4V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v40.4l-19.7-19.7c-6.2-6.2-16.4-6.2-22.6 0L138.3 48c-6.3 6.2-6.3 16.4 0 22.6l53.7 53.7v77.5l-62.8-36.2-19-70.8c-2.2-8.2-10.7-13.1-18.9-10.9l-14.9 4c-8.2 2.2-13.1 10.7-10.9 18.9l7 26-33.8-19.5c-7.4-4.3-16.8-1.7-21.1 5.7L2.1 145.7c-4.3 7.4-1.7 16.8 5.7 21.1l33.8 19.5-26 7c-8.3 2.2-13.2 10.7-11 19l4 14.9c2.2 8.2 10.7 13.1 18.9 10.9l70.8-19 63.8 36.9-63.8 36.9-70.8-19c-8.2-2.2-16.7 2.7-18.9 10.9l-4 14.9c-2.2 8.2 2.7 16.7 10.9 18.9l26 7-33.8 19.6c-7.4 4.3-9.9 13.7-5.7 21.1l15.5 26.8c4.3 7.4 13.7 9.9 21.1 5.7l33.8-19.5-7 26c-2.2 8.2 2.7 16.7 10.9 18.9l14.9 4c8.2 2.2 16.7-2.7 18.9-10.9l19-70.8 62.8-36.2v77.5l-53.7 53.7c-6.3 6.2-6.3 16.4 0 22.6l11.3 11.3c6.2 6.2 16.4 6.2 22.6 0l19.7-19.7V496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40.4l19.7 19.7c6.2 6.2 16.4 6.2 22.6 0l11.3-11.3c6.2-6.2 6.2-16.4 0-22.6L256 387.7v-77.5l62.8 36.2 19 70.8c2.2 8.2 10.7 13.1 18.9 10.9l14.9-4c8.2-2.2 13.1-10.7 10.9-18.9l-7-26 33.8 19.5c7.4 4.3 16.8 1.7 21.1-5.7l15.5-26.8c4.3-7.3 1.8-16.8-5.6-21z"},child:[]}]})(e)}function Le(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function fe(e){return J({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function Sn(e){return J({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"},child:[]}]})(e)}var rw={exports:{}},x7="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y7=x7,w7=y7;function iw(){}function aw(){}aw.resetWarningCache=iw;var b7=function(){function e(r,i,a,o,s,l){if(l!==w7){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:aw,resetWarningCache:iw};return n.PropTypes=n,n};rw.exports=b7();var S7=rw.exports;const Se=ti(S7);function j7(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ow=j,C7=j7(ow);function tg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k7(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var T7=!!(typeof window<"u"&&window.document&&window.document.createElement);function A7(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(i){return i.displayName||i.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var o=[],s;function l(){s=e(o.map(function(u){return u.props})),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(u){k7(f,u);function f(){return u.apply(this,arguments)||this}f.peek=function(){return s},f.rewind=function(){if(f.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=s;return s=void 0,o=[],g};var p=f.prototype;return p.UNSAFE_componentWillMount=function(){o.push(this),l()},p.componentDidUpdate=function(){l()},p.componentWillUnmount=function(){var g=o.indexOf(this);o.splice(g,1),l()},p.render=function(){return C7.createElement(a,this.props)},f}(ow.PureComponent);return tg(d,"displayName","SideEffect("+r(a)+")"),tg(d,"canUseDOM",T7),d}}var E7=A7;const P7=ti(E7);var G7=typeof Element<"u",_7=typeof Map=="function",z7=typeof Set=="function",L7=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ts(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Ts(e[r],t[r]))return!1;return!0}var a;if(_7&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!Ts(r.value[1],t.get(r.value[0])))return!1;return!0}if(z7&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(L7&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(G7&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Ts(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var M7=function(t,n){try{return Ts(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const O7=ti(M7);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ng=Object.getOwnPropertySymbols,R7=Object.prototype.hasOwnProperty,I7=Object.prototype.propertyIsEnumerable;function D7(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function N7(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var V7=N7()?Object.assign:function(e,t){for(var n,r=D7(e),i,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var o in n)R7.call(n,o)&&(r[o]=n[o]);if(ng){i=ng(n);for(var s=0;s<i.length;s++)I7.call(n,i[s])&&(r[i[s]]=n[i[s]])}}return r};const F7=ti(V7);var Ur={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Q={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Q).map(function(e){return Q[e]});var je={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},vl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},yo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},B7=Object.keys(vl).reduce(function(e,t){return e[vl[t]]=t,e},{}),$7=[Q.NOSCRIPT,Q.SCRIPT,Q.STYLE],Zt="data-react-helmet",U7=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H7=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q7=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W7=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},rg=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y7=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Fu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K7=function(t){var n=Ri(t,Q.TITLE),r=Ri(t,yo.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var i=Ri(t,yo.DEFAULT_TITLE);return n||i||void 0},X7=function(t){return Ri(t,yo.ON_CHANGE_CLIENT_STATE)||function(){}},ud=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,i){return xt({},r,i)},{})},Q7=function(t,n){return n.filter(function(r){return typeof r[Q.BASE]<"u"}).map(function(r){return r[Q.BASE]}).reverse().reduce(function(r,i){if(!r.length)for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],l=s.toLowerCase();if(t.indexOf(l)!==-1&&i[l])return r.concat(i)}return r},[])},ja=function(t,n,r){var i={};return r.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&tj("Helmet: "+t+' should be of type "Array". Instead found type "'+U7(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,o){var s={};o.filter(function(p){for(var v=void 0,g=Object.keys(p),y=0;y<g.length;y++){var w=g[y],x=w.toLowerCase();n.indexOf(x)!==-1&&!(v===je.REL&&p[v].toLowerCase()==="canonical")&&!(x===je.REL&&p[x].toLowerCase()==="stylesheet")&&(v=x),n.indexOf(w)!==-1&&(w===je.INNER_HTML||w===je.CSS_TEXT||w===je.ITEM_PROP)&&(v=w)}if(!v||!p[v])return!1;var h=p[v].toLowerCase();return i[v]||(i[v]={}),s[v]||(s[v]={}),i[v][h]?!1:(s[v][h]=!0,!0)}).reverse().forEach(function(p){return a.push(p)});for(var l=Object.keys(s),d=0;d<l.length;d++){var u=l[d],f=F7({},i[u],s[u]);i[u]=f}return a},[]).reverse()},Ri=function(t,n){for(var r=t.length-1;r>=0;r--){var i=t[r];if(i.hasOwnProperty(n))return i[n]}return null},J7=function(t){return{baseTag:Q7([je.HREF,je.TARGET],t),bodyAttributes:ud(Ur.BODY,t),defer:Ri(t,yo.DEFER),encode:Ri(t,yo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ud(Ur.HTML,t),linkTags:ja(Q.LINK,[je.REL,je.HREF],t),metaTags:ja(Q.META,[je.NAME,je.CHARSET,je.HTTPEQUIV,je.PROPERTY,je.ITEM_PROP],t),noscriptTags:ja(Q.NOSCRIPT,[je.INNER_HTML],t),onChangeClientState:X7(t),scriptTags:ja(Q.SCRIPT,[je.SRC,je.INNER_HTML],t),styleTags:ja(Q.STYLE,[je.CSS_TEXT],t),title:K7(t),titleAttributes:ud(Ur.TITLE,t)}},Bu=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){Bu(t)},0)}}(),ig=function(t){return clearTimeout(t)},Z7=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Bu:global.requestAnimationFrame||Bu,ej=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ig:global.cancelAnimationFrame||ig,tj=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},Ca=null,nj=function(t){Ca&&ej(Ca),t.defer?Ca=Z7(function(){ag(t,function(){Ca=null})}):(ag(t),Ca=null)},ag=function(t,n){var r=t.baseTag,i=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,d=t.onChangeClientState,u=t.scriptTags,f=t.styleTags,p=t.title,v=t.titleAttributes;$u(Q.BODY,i),$u(Q.HTML,a),rj(p,v);var g={baseTag:di(Q.BASE,r),linkTags:di(Q.LINK,o),metaTags:di(Q.META,s),noscriptTags:di(Q.NOSCRIPT,l),scriptTags:di(Q.SCRIPT,u),styleTags:di(Q.STYLE,f)},y={},w={};Object.keys(g).forEach(function(x){var h=g[x],m=h.newTags,b=h.oldTags;m.length&&(y[x]=m),b.length&&(w[x]=g[x].oldTags)}),n&&n(),d(t,y,w)},sw=function(t){return Array.isArray(t)?t.join(""):t},rj=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=sw(t)),$u(Q.TITLE,n)},$u=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var i=r.getAttribute(Zt),a=i?i.split(","):[],o=[].concat(a),s=Object.keys(n),l=0;l<s.length;l++){var d=s[l],u=n[d]||"";r.getAttribute(d)!==u&&r.setAttribute(d,u),a.indexOf(d)===-1&&a.push(d);var f=o.indexOf(d);f!==-1&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);a.length===o.length?r.removeAttribute(Zt):r.getAttribute(Zt)!==s.join(",")&&r.setAttribute(Zt,s.join(","))}},di=function(t,n){var r=document.head||document.querySelector(Q.HEAD),i=r.querySelectorAll(t+"["+Zt+"]"),a=Array.prototype.slice.call(i),o=[],s=void 0;return n&&n.length&&n.forEach(function(l){var d=document.createElement(t);for(var u in l)if(l.hasOwnProperty(u))if(u===je.INNER_HTML)d.innerHTML=l.innerHTML;else if(u===je.CSS_TEXT)d.styleSheet?d.styleSheet.cssText=l.cssText:d.appendChild(document.createTextNode(l.cssText));else{var f=typeof l[u]>"u"?"":l[u];d.setAttribute(u,f)}d.setAttribute(Zt,"true"),a.some(function(p,v){return s=v,d.isEqualNode(p)})?a.splice(s,1):o.push(d)}),a.forEach(function(l){return l.parentNode.removeChild(l)}),o.forEach(function(l){return r.appendChild(l)}),{oldTags:a,newTags:o}},lw=function(t){return Object.keys(t).reduce(function(n,r){var i=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+i:i},"")},ij=function(t,n,r,i){var a=lw(r),o=sw(n);return a?"<"+t+" "+Zt+'="true" '+a+">"+Fu(o,i)+"</"+t+">":"<"+t+" "+Zt+'="true">'+Fu(o,i)+"</"+t+">"},aj=function(t,n,r){return n.reduce(function(i,a){var o=Object.keys(a).filter(function(d){return!(d===je.INNER_HTML||d===je.CSS_TEXT)}).reduce(function(d,u){var f=typeof a[u]>"u"?u:u+'="'+Fu(a[u],r)+'"';return d?d+" "+f:f},""),s=a.innerHTML||a.cssText||"",l=$7.indexOf(t)===-1;return i+"<"+t+" "+Zt+'="true" '+o+(l?"/>":">"+s+"</"+t+">")},"")},cw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[vl[i]||i]=t[i],r},n)},oj=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,i){return r[B7[i]||i]=t[i],r},n)},sj=function(t,n,r){var i,a=(i={key:n},i[Zt]=!0,i),o=cw(r,a);return[te.createElement(Q.TITLE,o,n)]},lj=function(t,n){return n.map(function(r,i){var a,o=(a={key:i},a[Zt]=!0,a);return Object.keys(r).forEach(function(s){var l=vl[s]||s;if(l===je.INNER_HTML||l===je.CSS_TEXT){var d=r.innerHTML||r.cssText;o.dangerouslySetInnerHTML={__html:d}}else o[l]=r[s]}),te.createElement(t,o)})},Tn=function(t,n,r){switch(t){case Q.TITLE:return{toComponent:function(){return sj(t,n.title,n.titleAttributes)},toString:function(){return ij(t,n.title,n.titleAttributes,r)}};case Ur.BODY:case Ur.HTML:return{toComponent:function(){return cw(n)},toString:function(){return lw(n)}};default:return{toComponent:function(){return lj(t,n)},toString:function(){return aj(t,n,r)}}}},dw=function(t){var n=t.baseTag,r=t.bodyAttributes,i=t.encode,a=t.htmlAttributes,o=t.linkTags,s=t.metaTags,l=t.noscriptTags,d=t.scriptTags,u=t.styleTags,f=t.title,p=f===void 0?"":f,v=t.titleAttributes;return{base:Tn(Q.BASE,n,i),bodyAttributes:Tn(Ur.BODY,r,i),htmlAttributes:Tn(Ur.HTML,a,i),link:Tn(Q.LINK,o,i),meta:Tn(Q.META,s,i),noscript:Tn(Q.NOSCRIPT,l,i),script:Tn(Q.SCRIPT,d,i),style:Tn(Q.STYLE,u,i),title:Tn(Q.TITLE,{title:p,titleAttributes:v},i)}},cj=function(t){var n,r;return r=n=function(i){W7(a,i);function a(){return H7(this,a),Y7(this,i.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(s){return!O7(this.props,s)},a.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case Q.SCRIPT:case Q.NOSCRIPT:return{innerHTML:l};case Q.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(s){var l,d=s.child,u=s.arrayTypeChildren,f=s.newChildProps,p=s.nestedChildren;return xt({},u,(l={},l[d.type]=[].concat(u[d.type]||[],[xt({},f,this.mapNestedChildrenToProps(d,p))]),l))},a.prototype.mapObjectTypeChildren=function(s){var l,d,u=s.child,f=s.newProps,p=s.newChildProps,v=s.nestedChildren;switch(u.type){case Q.TITLE:return xt({},f,(l={},l[u.type]=v,l.titleAttributes=xt({},p),l));case Q.BODY:return xt({},f,{bodyAttributes:xt({},p)});case Q.HTML:return xt({},f,{htmlAttributes:xt({},p)})}return xt({},f,(d={},d[u.type]=xt({},p),d))},a.prototype.mapArrayTypeChildrenToProps=function(s,l){var d=xt({},l);return Object.keys(s).forEach(function(u){var f;d=xt({},d,(f={},f[u]=s[u],f))}),d},a.prototype.warnOnInvalidChildren=function(s,l){return!0},a.prototype.mapChildrenToProps=function(s,l){var d=this,u={};return te.Children.forEach(s,function(f){if(!(!f||!f.props)){var p=f.props,v=p.children,g=rg(p,["children"]),y=oj(g);switch(d.warnOnInvalidChildren(f,v),f.type){case Q.LINK:case Q.META:case Q.NOSCRIPT:case Q.SCRIPT:case Q.STYLE:u=d.flattenArrayTypeChildren({child:f,arrayTypeChildren:u,newChildProps:y,nestedChildren:v});break;default:l=d.mapObjectTypeChildren({child:f,newProps:l,newChildProps:y,nestedChildren:v});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},a.prototype.render=function(){var s=this.props,l=s.children,d=rg(s,["children"]),u=xt({},d);return l&&(u=this.mapChildrenToProps(l,u)),te.createElement(t,u)},q7(a,null,[{key:"canUseDOM",set:function(s){t.canUseDOM=s}}]),a}(te.Component),n.propTypes={base:Se.object,bodyAttributes:Se.object,children:Se.oneOfType([Se.arrayOf(Se.node),Se.node]),defaultTitle:Se.string,defer:Se.bool,encodeSpecialCharacters:Se.bool,htmlAttributes:Se.object,link:Se.arrayOf(Se.object),meta:Se.arrayOf(Se.object),noscript:Se.arrayOf(Se.object),onChangeClientState:Se.func,script:Se.arrayOf(Se.object),style:Se.arrayOf(Se.object),title:Se.string,titleAttributes:Se.object,titleTemplate:Se.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var i=t.rewind();return i||(i=dw({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),i},r},dj=function(){return null},uj=P7(J7,nj,dw)(dj),Hn=cj(uj);Hn.renderStatic=Hn.rewind;var ut=function(){return ut=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ut.apply(this,arguments)};function Yi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ye="-ms-",Ya="-moz-",ue="-webkit-",uw="comm",nc="rule",$p="decl",fj="@import",fw="@keyframes",pj="@layer",pw=Math.abs,Up=String.fromCharCode,Uu=Object.assign;function hj(e,t){return Xe(e,0)^45?(((t<<2^Xe(e,0))<<2^Xe(e,1))<<2^Xe(e,2))<<2^Xe(e,3):0}function hw(e){return e.trim()}function Gn(e,t){return(e=t.exec(e))?e[0]:e}function ie(e,t,n){return e.replace(t,n)}function As(e,t,n){return e.indexOf(t,n)}function Xe(e,t){return e.charCodeAt(t)|0}function Ki(e,t,n){return e.slice(t,n)}function hn(e){return e.length}function mw(e){return e.length}function La(e,t){return t.push(e),e}function mj(e,t){return e.map(t).join("")}function og(e,t){return e.filter(function(n){return!Gn(n,t)})}var rc=1,Xi=1,gw=0,Ht=0,Ne=0,aa="";function ic(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:rc,column:Xi,length:o,return:"",siblings:s}}function Jn(e,t){return Uu(ic("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ui(e){for(;e.root;)e=Jn(e.root,{children:[e]});La(e,e.siblings)}function gj(){return Ne}function vj(){return Ne=Ht>0?Xe(aa,--Ht):0,Xi--,Ne===10&&(Xi=1,rc--),Ne}function nn(){return Ne=Ht<gw?Xe(aa,Ht++):0,Xi++,Ne===10&&(Xi=1,rc++),Ne}function Hr(){return Xe(aa,Ht)}function Es(){return Ht}function ac(e,t){return Ki(aa,e,t)}function Hu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xj(e){return rc=Xi=1,gw=hn(aa=e),Ht=0,[]}function yj(e){return aa="",e}function fd(e){return hw(ac(Ht-1,qu(e===91?e+2:e===40?e+1:e)))}function wj(e){for(;(Ne=Hr())&&Ne<33;)nn();return Hu(e)>2||Hu(Ne)>3?"":" "}function bj(e,t){for(;--t&&nn()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return ac(e,Es()+(t<6&&Hr()==32&&nn()==32))}function qu(e){for(;nn();)switch(Ne){case e:return Ht;case 34:case 39:e!==34&&e!==39&&qu(Ne);break;case 40:e===41&&qu(e);break;case 92:nn();break}return Ht}function Sj(e,t){for(;nn()&&e+Ne!==57;)if(e+Ne===84&&Hr()===47)break;return"/*"+ac(t,Ht-1)+"*"+Up(e===47?e:nn())}function jj(e){for(;!Hu(Hr());)nn();return ac(e,Ht)}function Cj(e){return yj(Ps("",null,null,null,[""],e=xj(e),0,[0],e))}function Ps(e,t,n,r,i,a,o,s,l){for(var d=0,u=0,f=o,p=0,v=0,g=0,y=1,w=1,x=1,h=0,m="",b=i,S=a,C=r,T=m;w;)switch(g=h,h=nn()){case 40:if(g!=108&&Xe(T,f-1)==58){As(T+=ie(fd(h),"&","&\f"),"&\f",pw(d?s[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:T+=fd(h);break;case 9:case 10:case 13:case 32:T+=wj(g);break;case 92:T+=bj(Es()-1,7);continue;case 47:switch(Hr()){case 42:case 47:La(kj(Sj(nn(),Es()),t,n,l),l);break;default:T+="/"}break;case 123*y:s[d++]=hn(T)*x;case 125*y:case 59:case 0:switch(h){case 0:case 125:w=0;case 59+u:x==-1&&(T=ie(T,/\f/g,"")),v>0&&hn(T)-f&&La(v>32?lg(T+";",r,n,f-1,l):lg(ie(T," ","")+";",r,n,f-2,l),l);break;case 59:T+=";";default:if(La(C=sg(T,t,n,d,u,i,s,m,b=[],S=[],f,a),a),h===123)if(u===0)Ps(T,t,C,C,b,a,f,s,S);else switch(p===99&&Xe(T,3)===110?100:p){case 100:case 108:case 109:case 115:Ps(e,C,C,r&&La(sg(e,C,C,0,0,i,s,m,i,b=[],f,S),S),i,S,f,s,r?b:S);break;default:Ps(T,C,C,C,[""],S,0,s,S)}}d=u=v=0,y=x=1,m=T="",f=o;break;case 58:f=1+hn(T),v=g;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&vj()==125)continue}switch(T+=Up(h),h*y){case 38:x=u>0?1:(T+="\f",-1);break;case 44:s[d++]=(hn(T)-1)*x,x=1;break;case 64:Hr()===45&&(T+=fd(nn())),p=Hr(),u=f=hn(m=T+=jj(Es())),h++;break;case 45:g===45&&hn(T)==2&&(y=0)}}return a}function sg(e,t,n,r,i,a,o,s,l,d,u,f){for(var p=i-1,v=i===0?a:[""],g=mw(v),y=0,w=0,x=0;y<r;++y)for(var h=0,m=Ki(e,p+1,p=pw(w=o[y])),b=e;h<g;++h)(b=hw(w>0?v[h]+" "+m:ie(m,/&\f/g,v[h])))&&(l[x++]=b);return ic(e,t,n,i===0?nc:s,l,d,u,f)}function kj(e,t,n,r){return ic(e,t,n,uw,Up(gj()),Ki(e,2,-2),0,r)}function lg(e,t,n,r,i){return ic(e,t,n,$p,Ki(e,0,r),Ki(e,r+1,-1),r,i)}function vw(e,t,n){switch(hj(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ue+e+e;case 4789:return Ya+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+Ya+e+ye+e+e;case 5936:switch(Xe(e,t+11)){case 114:return ue+e+ye+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+ye+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+ye+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+ye+e+e;case 6165:return ue+e+ye+"flex-"+e+e;case 5187:return ue+e+ie(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return ue+e+ye+"flex-item-"+ie(e,/flex-|-self/g,"")+(Gn(e,/flex-|baseline/)?"":ye+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return ue+e+ye+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+ye+ie(e,"shrink","negative")+e;case 5292:return ue+e+ye+ie(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ie(e,"-grow","")+ue+e+ye+ie(e,"grow","positive")+e;case 4554:return ue+ie(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ue+e+e;case 4200:if(!Gn(e,/flex-|baseline/))return ye+"grid-column-align"+Ki(e,t)+e;break;case 2592:case 3360:return ye+ie(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Gn(r.props,/grid-\w+-end/)})?~As(e+(n=n[t].value),"span",0)?e:ye+ie(e,"-start","")+e+ye+"grid-row-span:"+(~As(n,"span",0)?Gn(n,/\d+/):+Gn(n,/\d+/)-+Gn(e,/\d+/))+";":ye+ie(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Gn(r.props,/grid-\w+-start/)})?e:ye+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-t>6)switch(Xe(e,t+1)){case 109:if(Xe(e,t+4)!==45)break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+Ya+(Xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch",0)?vw(ie(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,l,d){return ye+i+":"+a+d+(o?ye+i+"-span:"+(s?l:+l-+a)+d:"")+e});case 4949:if(Xe(e,t+6)===121)return ie(e,":",":"+ue)+e;break;case 6444:switch(Xe(e,Xe(e,14)===45?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Xe(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+ye+"$2box$3")+e;case 100:return ie(e,":",":"+ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function xl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Tj(e,t,n,r){switch(e.type){case pj:if(e.children.length)break;case fj:case $p:return e.return=e.return||e.value;case uw:return"";case fw:return e.return=e.value+"{"+xl(e.children,r)+"}";case nc:if(!hn(e.value=e.props.join(",")))return""}return hn(n=xl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Aj(e){var t=mw(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function Ej(e){return function(t){t.root||(t=t.return)&&e(t)}}function Pj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $p:e.return=vw(e.value,e.length,n);return;case fw:return xl([Jn(e,{value:ie(e.value,"@","@"+ue)})],r);case nc:if(e.length)return mj(n=e.props,function(i){switch(Gn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ui(Jn(e,{props:[ie(i,/:(read-\w+)/,":"+Ya+"$1")]})),ui(Jn(e,{props:[i]})),Uu(e,{props:og(n,r)});break;case"::placeholder":ui(Jn(e,{props:[ie(i,/:(plac\w+)/,":"+ue+"input-$1")]})),ui(Jn(e,{props:[ie(i,/:(plac\w+)/,":"+Ya+"$1")]})),ui(Jn(e,{props:[ie(i,/:(plac\w+)/,ye+"input-$1")]})),ui(Jn(e,{props:[i]})),Uu(e,{props:og(n,r)});break}return""})}}var Gj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tt={},Qi=typeof process<"u"&&Tt!==void 0&&(Tt.REACT_APP_SC_ATTR||Tt.SC_ATTR)||"data-styled",xw="active",yw="data-styled-version",oc="6.1.13",Hp=`/*!sc*/
`,yl=typeof window<"u"&&"HTMLElement"in window,_j=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==""?Tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.SC_DISABLE_SPEEDY!==void 0&&Tt.SC_DISABLE_SPEEDY!==""&&Tt.SC_DISABLE_SPEEDY!=="false"&&Tt.SC_DISABLE_SPEEDY),zj={},sc=Object.freeze([]),Ji=Object.freeze({});function ww(e,t,n){return n===void 0&&(n=Ji),e.theme!==n.theme&&e.theme||t||n.theme}var bw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Lj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mj=/(^-|-$)/g;function cg(e){return e.replace(Lj,"-").replace(Mj,"")}var Oj=/(a)(d)/gi,is=52,dg=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wu(e){var t,n="";for(t=Math.abs(e);t>is;t=t/is|0)n=dg(t%is)+n;return(dg(t%is)+n).replace(Oj,"$1-$2")}var pd,Sw=5381,Pi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jw=function(e){return Pi(Sw,e)};function qp(e){return Wu(jw(e)>>>0)}function Rj(e){return e.displayName||e.name||"Component"}function hd(e){return typeof e=="string"&&!0}var Cw=typeof Symbol=="function"&&Symbol.for,kw=Cw?Symbol.for("react.memo"):60115,Ij=Cw?Symbol.for("react.forward_ref"):60112,Dj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vj=((pd={})[Ij]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pd[kw]=Tw,pd);function ug(e){return("type"in(t=e)&&t.type.$$typeof)===kw?Tw:"$$typeof"in e?Vj[e.$$typeof]:Dj;var t}var Fj=Object.defineProperty,Bj=Object.getOwnPropertyNames,fg=Object.getOwnPropertySymbols,$j=Object.getOwnPropertyDescriptor,Uj=Object.getPrototypeOf,pg=Object.prototype;function Aw(e,t,n){if(typeof t!="string"){if(pg){var r=Uj(t);r&&r!==pg&&Aw(e,r,n)}var i=Bj(t);fg&&(i=i.concat(fg(t)));for(var a=ug(e),o=ug(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Nj||n&&n[l]||o&&l in o||a&&l in a)){var d=$j(t,l);try{Fj(e,l,d)}catch{}}}}return e}function Zi(e){return typeof e=="function"}function Wp(e){return typeof e=="object"&&"styledComponentId"in e}function Nr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function wo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yu(e,t,n){if(n===void 0&&(n=!1),!n&&!wo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yu(e[r],t[r]);else if(wo(t))for(var r in t)e[r]=Yu(e[r],t[r]);return e}function Yp(e,t){Object.defineProperty(e,"toString",{value:t})}function zo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw zo(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(Hp);return n},e}(),Gs=new Map,bl=new Map,_s=1,as=function(e){if(Gs.has(e))return Gs.get(e);for(;bl.has(_s);)_s++;var t=_s++;return Gs.set(e,t),bl.set(t,e),t},qj=function(e,t){_s=t+1,Gs.set(e,t),bl.set(t,e)},Wj="style[".concat(Qi,"][").concat(yw,'="').concat(oc,'"]'),Yj=new RegExp("^".concat(Qi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Kj=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Xj=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Hp),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(Yj);if(l){var d=0|parseInt(l[1],10),u=l[2];d!==0&&(qj(u,d),Kj(e,u,l[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(s)}}},hg=function(e){for(var t=document.querySelectorAll(Wj),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Qi)!==xw&&(Xj(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Qj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ew=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Qi,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Qi,xw),r.setAttribute(yw,oc);var o=Qj();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Jj=function(){function e(t){this.element=Ew(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw zo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Zj=function(){function e(t){this.element=Ew(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),eC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),mg=yl,tC={isServer:!yl,useCSSOMInjection:!_j},Sl=function(){function e(t,n,r){t===void 0&&(t=Ji),n===void 0&&(n={});var i=this;this.options=ut(ut({},tC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&yl&&mg&&(mg=!1,hg(this)),Yp(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",d=function(f){var p=function(x){return bl.get(x)}(f);if(p===void 0)return"continue";var v=a.names.get(p),g=o.getGroup(f);if(v===void 0||!v.size||g.length===0)return"continue";var y="".concat(Qi,".g").concat(f,'[id="').concat(p,'"]'),w="";v!==void 0&&v.forEach(function(x){x.length>0&&(w+="".concat(x,","))}),l+="".concat(g).concat(y,'{content:"').concat(w,'"}').concat(Hp)},u=0;u<s;u++)d(u);return l}(i)})}return e.registerId=function(t){return as(t)},e.prototype.rehydrate=function(){!this.server&&yl&&hg(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ut(ut({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new eC(i):r?new Jj(i):new Zj(i)}(this.options),new Hj(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(as(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(as(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(as(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),nC=/&/g,rC=/^\s*\/\/.*$/gm;function Pw(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Pw(n.children,t)),n})}function iC(e){var t,n,r,i=Ji,a=i.options,o=a===void 0?Ji:a,s=i.plugins,l=s===void 0?sc:s,d=function(p,v,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):p},u=l.slice();u.push(function(p){p.type===nc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(nC,n).replace(r,d))}),o.prefix&&u.push(Pj),u.push(Tj);var f=function(p,v,g,y){v===void 0&&(v=""),g===void 0&&(g=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var w=p.replace(rC,""),x=Cj(g||v?"".concat(g," ").concat(v," { ").concat(w," }"):w);o.namespace&&(x=Pw(x,o.namespace));var h=[];return xl(x,Aj(u.concat(Ej(function(m){return h.push(m)})))),h};return f.hash=l.length?l.reduce(function(p,v){return v.name||zo(15),Pi(p,v.name)},Sw).toString():"",f}var aC=new Sl,Ku=iC(),Gw=te.createContext({shouldForwardProp:void 0,styleSheet:aC,stylis:Ku});Gw.Consumer;te.createContext(void 0);function Xu(){return j.useContext(Gw)}var _w=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Ku);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Yp(this,function(){throw zo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ku),this.name+t.hash},e}(),oC=function(e){return e>="A"&&e<="Z"};function gg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;oC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var zw=function(e){return e==null||e===!1||e===""},Lw=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!zw(a)&&(Array.isArray(a)&&a.isCss||Zi(a)?r.push("".concat(gg(i),":"),a,";"):wo(a)?r.push.apply(r,Yi(Yi(["".concat(i," {")],Lw(a),!1),["}"],!1)):r.push("".concat(gg(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Gj||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function gr(e,t,n,r){if(zw(e))return[];if(Wp(e))return[".".concat(e.styledComponentId)];if(Zi(e)){if(!Zi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return gr(i,t,n,r)}var a;return e instanceof _w?n?(e.inject(n,r),[e.getName(r)]):[e]:wo(e)?Lw(e):Array.isArray(e)?Array.prototype.concat.apply(sc,e.map(function(o){return gr(o,t,n,r)})):[e.toString()]}function Mw(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zi(n)&&!Wp(n))return!1}return!0}var sC=jw(oc),lC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Mw(t),this.componentId=n,this.baseHash=Pi(sC,n),this.baseStyle=r,Sl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Nr(i,this.staticRulesId);else{var a=wl(gr(this.rules,t,n,r)),o=Wu(Pi(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=Nr(i,o),this.staticRulesId=o}else{for(var l=Pi(this.baseHash,r.hash),d="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")d+=f;else if(f){var p=wl(gr(f,t,n,r));l=Pi(l,p+u),d+=p}}if(d){var v=Wu(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(d,".".concat(v),void 0,this.componentId)),i=Nr(i,v)}}return i},e}(),Kp=te.createContext(void 0);Kp.Consumer;var md={};function cC(e,t,n){var r=Wp(e),i=e,a=!hd(e),o=t.attrs,s=o===void 0?sc:o,l=t.componentId,d=l===void 0?function(b,S){var C=typeof b!="string"?"sc":cg(b);md[C]=(md[C]||0)+1;var T="".concat(C,"-").concat(qp(oc+C+md[C]));return S?"".concat(S,"-").concat(T):T}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(b){return hd(b)?"styled.".concat(b):"Styled(".concat(Rj(b),")")}(e):u,p=t.displayName&&t.componentId?"".concat(cg(t.displayName),"-").concat(t.componentId):t.componentId||d,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;g=function(b,S){return y(b,S)&&w(b,S)}}else g=y}var x=new lC(n,p,r?i.componentStyle:void 0);function h(b,S){return function(C,T,A){var G=C.attrs,E=C.componentStyle,P=C.defaultProps,z=C.foldedComponentIds,I=C.styledComponentId,D=C.target,q=te.useContext(Kp),Z=Xu(),K=C.shouldForwardProp||Z.shouldForwardProp,M=ww(T,q,P)||Ji,V=function(Te,he,de){for(var _,O=ut(ut({},he),{className:void 0,theme:de}),N=0;N<Te.length;N+=1){var R=Zi(_=Te[N])?_(O):_;for(var Y in R)O[Y]=Y==="className"?Nr(O[Y],R[Y]):Y==="style"?ut(ut({},O[Y]),R[Y]):R[Y]}return he.className&&(O.className=Nr(O.className,he.className)),O}(G,T,M),$=V.as||D,X={};for(var ee in V)V[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&V.theme===M||(ee==="forwardedAs"?X.as=V.forwardedAs:K&&!K(ee,$)||(X[ee]=V[ee]));var be=function(Te,he){var de=Xu(),_=Te.generateAndInjectStyles(he,de.styleSheet,de.stylis);return _}(E,V),ge=Nr(z,I);return be&&(ge+=" "+be),V.className&&(ge+=" "+V.className),X[hd($)&&!bw.has($)?"class":"className"]=ge,X.ref=A,j.createElement($,X)}(m,b,S)}h.displayName=f;var m=te.forwardRef(h);return m.attrs=v,m.componentStyle=x,m.displayName=f,m.shouldForwardProp=g,m.foldedComponentIds=r?Nr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=p,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(S){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var A=0,G=C;A<G.length;A++)Yu(S,G[A],!0);return S}({},i.defaultProps,b):b}}),Yp(m,function(){return".".concat(m.styledComponentId)}),a&&Aw(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function vg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var xg=function(e){return Object.assign(e,{isCss:!0})};function Xp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Zi(e)||wo(e))return xg(gr(vg(sc,Yi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?gr(r):xg(gr(vg(r,t)))}function Qu(e,t,n){if(n===void 0&&(n=Ji),!t)throw zo(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,Xp.apply(void 0,Yi([i],a,!1)))};return r.attrs=function(i){return Qu(e,t,ut(ut({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Qu(e,t,ut(ut({},n),i))},r}var Ow=function(e){return Qu(cC,e)},k=Ow;bw.forEach(function(e){k[e]=Ow(e)});var dC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Mw(t),Sl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(wl(gr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Sl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function oa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Xp.apply(void 0,Yi([e],t,!1)),i="sc-global-".concat(qp(JSON.stringify(r))),a=new dC(r,i),o=function(l){var d=Xu(),u=te.useContext(Kp),f=te.useRef(d.styleSheet.allocateGSInstance(i)).current;return d.styleSheet.server&&s(f,l,d.styleSheet,u,d.stylis),te.useLayoutEffect(function(){if(!d.styleSheet.server)return s(f,l,d.styleSheet,u,d.stylis),function(){return a.removeStyles(f,d.styleSheet)}},[f,l,d.styleSheet,u,d.stylis]),null};function s(l,d,u,f,p){if(a.isStatic)a.renderStyles(l,zj,u,p);else{var v=ut(ut({},d),{theme:ww(d,f,o.defaultProps)});a.renderStyles(l,v,u,p)}}return te.memo(o)}function Wn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=wl(Xp.apply(void 0,Yi([e],t,!1))),i=qp(r);return new _w(i,r)}function yg(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Qp(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:yg(t[n])&&yg(e[n])&&Object.keys(t[n]).length>0&&Qp(e[n],t[n])})}const Rw={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Vn(){const e=typeof document<"u"?document:{};return Qp(e,Rw),e}const uC={document:Rw,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Rt(){const e=typeof window<"u"?window:{};return Qp(e,uC),e}function fC(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function pC(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Ju(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function jl(){return Date.now()}function hC(e){const t=Rt();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function mC(e,t){t===void 0&&(t="x");const n=Rt();let r,i,a;const o=hC(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(i==="none"?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=a.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=a.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function os(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function gC(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Et(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!gC(r)){const i=Object.keys(Object(r)).filter(a=>t.indexOf(a)<0);for(let a=0,o=i.length;a<o;a+=1){const s=i[a],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(os(e[s])&&os(r[s])?r[s].__swiper__?e[s]=r[s]:Et(e[s],r[s]):!os(e[s])&&os(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:Et(e[s],r[s])):e[s]=r[s])}}}return e}function ss(e,t,n){e.style.setProperty(t,n)}function Iw(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Rt(),a=-t.translate;let o=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const d=n>a?"next":"prev",u=(p,v)=>d==="next"&&p>=v||d==="prev"&&p<=v,f=()=>{s=new Date().getTime(),o===null&&(o=s);const p=Math.max(Math.min((s-o)/l,1),0),v=.5-Math.cos(p*Math.PI)/2;let g=a+v*(n-a);if(u(g,n)&&(g=n),t.wrapperEl.scrollTo({[r]:g}),u(g,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:g})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(f)};f()}function Jp(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function vn(e,t){t===void 0&&(t="");const n=[...e.children];return e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(r=>r.matches(t)):n}function vC(e,t){const n=t.contains(e);return!n&&t instanceof HTMLSlotElement?[...t.assignedElements()].includes(e):n}function Cl(e){try{console.warn(e);return}catch{}}function bo(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:fC(t)),n}function xC(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function yC(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function or(e,t){return Rt().getComputedStyle(e,null).getPropertyValue(t)}function kl(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Dw(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Zu(e,t,n){const r=Rt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Ye(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function wC(e){return t=>Math.abs(t)>0&&e.browser&&e.browser.need3dFix&&Math.abs(t)%90===0?t+.001:t}let gd;function bC(){const e=Rt(),t=Vn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Nw(){return gd||(gd=bC()),gd}let vd;function SC(e){let{userAgent:t}=e===void 0?{}:e;const n=Nw(),r=Rt(),i=r.navigator.platform,a=t||r.navigator.userAgent,o={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,d=a.match(/(Android);?[\s\/]+([\d.]+)?/);let u=a.match(/(iPad).*OS\s([\d_]+)/);const f=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!u&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let g=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(u=a.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),d&&!v&&(o.os="android",o.android=!0),(u||p||f)&&(o.os="ios",o.ios=!0),o}function Vw(e){return e===void 0&&(e={}),vd||(vd=SC(e)),vd}let xd;function jC(){const e=Rt(),t=Vw();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,d]=s.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));n=l<16||l===16&&d<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function CC(){return xd||(xd=jC()),xd}function kC(e){let{swiper:t,on:n,emit:r}=e;const i=Rt();let a=null,o=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(f=>{o=i.requestAnimationFrame(()=>{const{width:p,height:v}=t;let g=p,y=v;f.forEach(w=>{let{contentBoxSize:x,contentRect:h,target:m}=w;m&&m!==t.el||(g=h?h.width:(x[0]||x).inlineSize,y=h?h.height:(x[0]||x).blockSize)}),(g!==p||y!==v)&&s()})}),a.observe(t.el))},d=()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},u=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",u)}),n("destroy",()=>{d(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",u)})}function TC(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a=[],o=Rt(),s=function(u,f){f===void 0&&(f={});const p=o.MutationObserver||o.WebkitMutationObserver,v=new p(g=>{if(t.__preventObserver__)return;if(g.length===1){i("observerUpdate",g[0]);return}const y=function(){i("observerUpdate",g[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});v.observe(u,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:t.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),a.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const u=Dw(t.hostEl);for(let f=0;f<u.length;f+=1)s(u[f])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},d=()=>{a.forEach(u=>{u.disconnect()}),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",d)}var AC={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,a)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(a,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),r=e):(t=a[0].events,n=a[0].data,r=a[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(d=>{d.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(d=>{d.apply(r,n)})}),e}};function EC(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(or(r,"padding-left")||0,10)-parseInt(or(r,"padding-right")||0,10),n=n-parseInt(or(r,"padding-top")||0,10)-parseInt(or(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function PC(){const e=this;function t(E,P){return parseFloat(E.getPropertyValue(e.getDirectionLabel(P))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:a,rtlTranslate:o,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,d=l?e.virtual.slides.length:e.slides.length,u=vn(i,`.${e.params.slideClass}, swiper-slide`),f=l?e.virtual.slides.length:u.length;let p=[];const v=[],g=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let w=n.slidesOffsetAfter;typeof w=="function"&&(w=n.slidesOffsetAfter.call(e));const x=e.snapGrid.length,h=e.slidesGrid.length;let m=n.spaceBetween,b=-y,S=0,C=0;if(typeof a>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*a:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,u.forEach(E=>{o?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ss(r,"--swiper-centered-offset-before",""),ss(r,"--swiper-centered-offset-after",""));const T=n.grid&&n.grid.rows>1&&e.grid;T?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let A;const G=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(E=>typeof n.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<f;E+=1){A=0;let P;if(u[E]&&(P=u[E]),T&&e.grid.updateSlide(E,P,u),!(u[E]&&or(P,"display")==="none")){if(n.slidesPerView==="auto"){G&&(u[E].style[e.getDirectionLabel("width")]="");const z=getComputedStyle(P),I=P.style.transform,D=P.style.webkitTransform;if(I&&(P.style.transform="none"),D&&(P.style.webkitTransform="none"),n.roundLengths)A=e.isHorizontal()?Zu(P,"width"):Zu(P,"height");else{const q=t(z,"width"),Z=t(z,"padding-left"),K=t(z,"padding-right"),M=t(z,"margin-left"),V=t(z,"margin-right"),$=z.getPropertyValue("box-sizing");if($&&$==="border-box")A=q+M+V;else{const{clientWidth:X,offsetWidth:ee}=P;A=q+Z+K+M+V+(ee-X)}}I&&(P.style.transform=I),D&&(P.style.webkitTransform=D),n.roundLengths&&(A=Math.floor(A))}else A=(a-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(A=Math.floor(A)),u[E]&&(u[E].style[e.getDirectionLabel("width")]=`${A}px`);u[E]&&(u[E].swiperSlideSize=A),g.push(A),n.centeredSlides?(b=b+A/2+S/2+m,S===0&&E!==0&&(b=b-a/2-m),E===0&&(b=b-a/2-m),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),C%n.slidesPerGroup===0&&p.push(b),v.push(b)):(n.roundLengths&&(b=Math.floor(b)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&p.push(b),v.push(b),b=b+A+m),e.virtualSize+=A+m,S=A,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+w,o&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),T&&e.grid.updateWrapperSize(A,p),!n.centeredSlides){const E=[];for(let P=0;P<p.length;P+=1){let z=p[P];n.roundLengths&&(z=Math.floor(z)),p[P]<=e.virtualSize-a&&E.push(z)}p=E,Math.floor(e.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-a)}if(l&&n.loop){const E=g[0]+m;if(n.slidesPerGroup>1){const P=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),z=E*n.slidesPerGroup;for(let I=0;I<P;I+=1)p.push(p[p.length-1]+z)}for(let P=0;P<e.virtual.slidesBefore+e.virtual.slidesAfter;P+=1)n.slidesPerGroup===1&&p.push(p[p.length-1]+E),v.push(v[v.length-1]+E),e.virtualSize+=E}if(p.length===0&&(p=[0]),m!==0){const E=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");u.filter((P,z)=>!n.cssMode||n.loop?!0:z!==u.length-1).forEach(P=>{P.style[E]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let E=0;g.forEach(z=>{E+=z+(m||0)}),E-=m;const P=E>a?E-a:0;p=p.map(z=>z<=0?-y:z>P?P+w:z)}if(n.centerInsufficientSlides){let E=0;g.forEach(z=>{E+=z+(m||0)}),E-=m;const P=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(E+P<a){const z=(a-E-P)/2;p.forEach((I,D)=>{p[D]=I-z}),v.forEach((I,D)=>{v[D]=I+z})}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:v,slidesSizesGrid:g}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ss(r,"--swiper-centered-offset-before",`${-p[0]}px`),ss(r,"--swiper-centered-offset-after",`${e.size/2-g[g.length-1]/2}px`);const E=-e.snapGrid[0],P=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(z=>z+E),e.slidesGrid=e.slidesGrid.map(z=>z+P)}if(f!==d&&e.emit("slidesLengthChange"),p.length!==x&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==h&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const E=`${n.containerModifierClass}backface-hidden`,P=e.el.classList.contains(E);f<=n.maxBackfaceHiddenSlides?P||e.el.classList.add(E):P&&e.el.classList.remove(E)}}function GC(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const s=t.activeIndex+a;if(s>t.slides.length&&!r)break;n.push(o(s))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const s=n[a].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function _C(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const wg=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function zC(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const d=r[l];let u=d.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const f=(o+(n.centeredSlides?t.minTranslate():0)-u)/(d.swiperSlideSize+s),p=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-u)/(d.swiperSlideSize+s),v=-(o-u),g=v+t.slidesSizesGrid[l],y=v>=0&&v<=t.size-t.slidesSizesGrid[l],w=v>=0&&v<t.size-1||g>1&&g<=t.size||v<=0&&g>=t.size;w&&(t.visibleSlides.push(d),t.visibleSlidesIndexes.push(l)),wg(d,w,n.slideVisibleClass),wg(d,y,n.slideFullyVisibleClass),d.progress=i?-f:f,d.originalProgress=i?-p:p}}function LC(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t;const l=a,d=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;const u=Math.abs(e-t.minTranslate())<1,f=Math.abs(e-t.maxTranslate())<1;a=u||i<=0,o=f||i>=1,u&&(i=0),f&&(i=1)}if(n.loop){const u=t.getSlideIndexByData(0),f=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[u],v=t.slidesGrid[f],g=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=p?s=(y-p)/g:s=(y+g-v)/g,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!l&&t.emit("reachBeginning toEdge"),o&&!d&&t.emit("reachEnd toEdge"),(l&&!a||d&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}const yd=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function MC(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=f=>vn(r,`.${n.slideClass}${f}, swiper-slide${f}`)[0];let l,d,u;if(a)if(n.loop){let f=i-e.virtual.slidesBefore;f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${f}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter(f=>f.column===i)[0],u=t.filter(f=>f.column===i+1)[0],d=t.filter(f=>f.column===i-1)[0]):l=t[i];l&&(o||(u=yC(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),d=xC(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d===0&&(d=t[t.length-1]))),t.forEach(f=>{yd(f,f===l,n.slideActiveClass),yd(f,f===u,n.slideNextClass),yd(f,f===d,n.slidePrevClass)}),e.emitSlidesClasses()}const zs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},wd=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},ef=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,s=[o-t];s.push(...Array.from({length:t}).map((l,d)=>o+r+d)),e.slides.forEach((l,d)=>{s.includes(l.column)&&wd(e,d)});return}const a=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=a+t;o+=1){const s=(o%n+n)%n;(s<i||s>a)&&wd(e,s)}else for(let o=Math.max(i-t,0);o<=Math.min(a+t,n-1);o+=1)o!==i&&(o>a||o<i)&&wd(e,o)};function OC(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?r>=t[a]&&r<t[a+1]-(t[a+1]-t[a])/2?i=a:r>=t[a]&&r<t[a+1]&&(i=a+1):r>=t[a]&&(i=a);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function RC(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t;let l=e,d;const u=v=>{let g=v-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=OC(t)),r.indexOf(n)>=0)d=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);d=v+Math.floor((l-v)/i.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),l===a&&!t.params.loop){d!==s&&(t.snapIndex=d,t.emit("snapIndexChange"));return}if(l===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(l);return}const f=t.grid&&i.grid&&i.grid.rows>1;let p;if(t.virtual&&i.virtual.enabled&&i.loop)p=u(l);else if(f){const v=t.slides.filter(y=>y.column===l)[0];let g=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(v),0)),p=Math.floor(g/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?p=parseInt(v,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:s,snapIndex:d,previousRealIndex:o,realIndex:p,previousIndex:a,activeIndex:l}),t.initialized&&ef(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function IC(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let a=!1,o;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){a=!0,o=s;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var DC={updateSize:EC,updateSlides:PC,updateAutoHeight:GC,updateSlidesOffset:_C,updateSlidesProgress:zC,updateProgress:LC,updateSlidesClasses:MC,updateActiveIndex:RC,updateClickedSlide:IC};function NC(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=mC(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function VC(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n;let s=0,l=0;const d=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${l}px, ${d}px)`);let u;const f=n.maxTranslate()-n.minTranslate();f===0?u=0:u=(e-n.minTranslate())/f,u!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function FC(){return-this.snapGrid[0]}function BC(){return-this.snapGrid[this.snapGrid.length-1]}function $C(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),d=a.maxTranslate();let u;if(r&&e>l?u=l:r&&e<d?u=d:u=e,a.updateProgress(u),o.cssMode){const f=a.isHorizontal();if(t===0)s[f?"scrollLeft":"scrollTop"]=-u;else{if(!a.support.smoothScroll)return Iw({swiper:a,targetPosition:-u,side:f?"left":"top"}),!0;s.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(p){!a||a.destroyed||p.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var UC={getTranslate:NC,setTranslate:VC,minTranslate:FC,maxTranslate:BC,translateTo:$C};function HC(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Fw(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:a,previousIndex:o}=t;let s=r;if(s||(a>o?s="next":a<o?s="prev":s="reset"),t.emit(`transition${i}`),n&&a!==o){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function qC(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Fw({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function WC(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Fw({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var YC={setTransition:HC,transitionStart:qC,transitionEnd:WC};function KC(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;let o=e;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:d,previousIndex:u,activeIndex:f,rtlTranslate:p,wrapperEl:v,enabled:g}=a;if(!g&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=a.params.speed);const y=Math.min(a.params.slidesPerGroupSkip,o);let w=y+Math.floor((o-y)/a.params.slidesPerGroup);w>=l.length&&(w=l.length-1);const x=-l[w];if(s.normalizeSlideIndex)for(let S=0;S<d.length;S+=1){const C=-Math.floor(x*100),T=Math.floor(d[S]*100),A=Math.floor(d[S+1]*100);typeof d[S+1]<"u"?C>=T&&C<A-(A-T)/2?o=S:C>=T&&C<A&&(o=S+1):C>=T&&(o=S)}if(a.initialized&&o!==f&&(!a.allowSlideNext&&(p?x>a.translate&&x>a.minTranslate():x<a.translate&&x<a.minTranslate())||!a.allowSlidePrev&&x>a.translate&&x>a.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(x);let h;o>f?h="next":o<f?h="prev":h="reset";const m=a.virtual&&a.params.virtual.enabled;if(!(m&&i)&&(p&&-x===a.translate||!p&&x===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!=="slide"&&a.setTranslate(x),h!=="reset"&&(a.transitionStart(n,h),a.transitionEnd(n,h)),!1;if(s.cssMode){const S=a.isHorizontal(),C=p?x:-x;if(t===0)m&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),m&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[S?"scrollLeft":"scrollTop"]=C})):v[S?"scrollLeft":"scrollTop"]=C,m&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return Iw({swiper:a,targetPosition:C,side:S?"left":"top"}),!0;v.scrollTo({[S?"left":"top"]:C,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(x),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,h),t===0?a.transitionEnd(n,h):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(C){!a||a.destroyed||C.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,h))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function XC(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const a=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let s;if(a){const p=o*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===p)[0].column}else s=i.getSlideIndexByData(o);const l=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:d}=i.params;let u=i.params.slidesPerView;u==="auto"?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),d&&u%2===0&&(u=u+1));let f=l-s<u;if(d&&(f=f||s<Math.ceil(u/2)),r&&d&&i.params.slidesPerView!=="auto"&&!a&&(f=!1),f){const p=d?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?s+1:s-l+1,slideRealIndex:p==="next"?i.realIndex:void 0})}if(a){const p=o*i.params.grid.rows;o=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===p)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function QC(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<a.slidesPerGroupSkip?1:s,d=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!d&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function JC(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:l,animating:d}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const u=r.virtual&&i.virtual.enabled;if(i.loop){if(d&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const f=s?r.translate:-r.translate;function p(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const v=p(f),g=a.map(x=>p(x));let y=a[g.indexOf(v)-1];if(typeof y>"u"&&i.cssMode){let x;a.forEach((h,m)=>{v>=h&&(x=m)}),typeof x<"u"&&(y=a[x>0?x-1:x])}let w=0;if(typeof y<"u"&&(w=o.indexOf(y),w<0&&(w=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(w=w-r.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),i.rewind&&r.isBeginning){const x=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(x,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(w,e,t,n)}),!0;return r.slideTo(w,e,t,n)}function ZC(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function ek(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let a=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const d=i.snapGrid[s],u=i.snapGrid[s+1];l-d>(u-d)*r&&(a+=i.params.slidesPerGroup)}else{const d=i.snapGrid[s-1],u=i.snapGrid[s];l-d<=(u-d)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function tk(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,a;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(vn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),Ju(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(vn(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),Ju(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var nk={slideTo:KC,slideToLoop:XC,slideNext:QC,slidePrev:JC,slideReset:ZC,slideToClosest:ek,slideToClickedSlide:tk};function rk(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{vn(r,`.${n.slideClass}, swiper-slide`).forEach((f,p)=>{f.setAttribute("data-swiper-slide-index",p)})},a=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(a?n.grid.rows:1),s=t.slides.length%o!==0,l=a&&t.slides.length%n.grid.rows!==0,d=u=>{for(let f=0;f<u;f+=1){const p=t.isElement?bo("swiper-slide",[n.slideBlankClass]):bo("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(p)}};if(s){if(n.loopAddBlankSlides){const u=o-t.slides.length%o;d(u),t.recalcSlides(),t.updateSlides()}else Cl("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const u=n.grid.rows-t.slides.length%n.grid.rows;d(u),t.recalcSlides(),t.updateSlides()}else Cl("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function ik(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,byController:o,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:f,slidesEl:p,params:v}=l,{centeredSlides:g}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=f,l.emit("loopFix");return}let y=v.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(v.slidesPerView,10)),g&&y%2===0&&(y=y+1));const w=v.slidesPerGroupAuto?y:v.slidesPerGroup;let x=w;x%w!==0&&(x+=w-x%w),x+=v.loopAdditionalSlides,l.loopedSlides=x;const h=l.grid&&v.grid&&v.grid.rows>1;d.length<y+x?Cl("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):h&&v.grid.fill==="row"&&Cl("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],b=[];let S=l.activeIndex;typeof a>"u"?a=l.getSlideIndex(d.filter(I=>I.classList.contains(v.slideActiveClass))[0]):S=a;const C=r==="next"||!r,T=r==="prev"||!r;let A=0,G=0;const E=h?Math.ceil(d.length/v.grid.rows):d.length,z=(h?d[a].column:a)+(g&&typeof i>"u"?-y/2+.5:0);if(z<x){A=Math.max(x-z,w);for(let I=0;I<x-z;I+=1){const D=I-Math.floor(I/E)*E;if(h){const q=E-D-1;for(let Z=d.length-1;Z>=0;Z-=1)d[Z].column===q&&m.push(Z)}else m.push(E-D-1)}}else if(z+y>E-x){G=Math.max(z-(E-x*2),w);for(let I=0;I<G;I+=1){const D=I-Math.floor(I/E)*E;h?d.forEach((q,Z)=>{q.column===D&&b.push(Z)}):b.push(D)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),T&&m.forEach(I=>{d[I].swiperLoopMoveDOM=!0,p.prepend(d[I]),d[I].swiperLoopMoveDOM=!1}),C&&b.forEach(I=>{d[I].swiperLoopMoveDOM=!0,p.append(d[I]),d[I].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():h&&(m.length>0&&T||b.length>0&&C)&&l.slides.forEach((I,D)=>{l.grid.updateSlide(D,I,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&T){if(typeof t>"u"){const I=l.slidesGrid[S],q=l.slidesGrid[S+A]-I;s?l.setTranslate(l.translate-q):(l.slideTo(S+Math.ceil(A),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else if(i){const I=h?m.length/v.grid.rows:m.length;l.slideTo(l.activeIndex+I,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(b.length>0&&C)if(typeof t>"u"){const I=l.slidesGrid[S],q=l.slidesGrid[S-G]-I;s?l.setTranslate(l.translate-q):(l.slideTo(S-G,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-q))}else{const I=h?b.length/v.grid.rows:b.length;l.slideTo(l.activeIndex-I,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=f,l.controller&&l.controller.control&&!o){const I={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...I,slideTo:D.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...I,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function ak(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const a=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[a]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var ok={loopCreate:rk,loopFix:ik,loopDestroy:ak};function sk(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function lk(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var ck={setGrabCursor:sk,unsetGrabCursor:lk};function dk(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Vn()||r===Rt())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function bg(e,t,n){const r=Rt(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a==="prevent"?(t.preventDefault(),!0):!1:!0}function uk(e){const t=this,n=Vn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){bg(t,r,r.targetTouches[0].pageX);return}const{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=r.target;if(a.touchEventsTarget==="wrapper"&&!vC(l,t.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const d=!!a.noSwipingClass&&a.noSwipingClass!=="",u=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&u&&(l=u[0]);const f=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,p=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(p?dk(f,l):l.closest(f))){t.allowClick=!0;return}if(a.swipeHandler&&!l.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const v=o.currentX,g=o.currentY;if(!bg(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=g,i.touchStartTime=jl(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&(r.pointerType==="mouse"||r.pointerType!=="mouse"&&!l.matches(i.focusableElements))&&n.activeElement.blur();const w=y&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||w)&&!l.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function fk(e){const t=Vn(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let d;if(l.type==="touchmove"){if(d=[...l.changedTouches].filter(C=>C.identifier===r.touchId)[0],!d||d.identifier!==r.touchId)return}else d=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const u=d.pageX,f=d.pageY;if(l.preventedByNestedSwiper){a.startX=u,a.startY=f;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:f,currentX:u,currentY:f}),r.touchStartTime=jl());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<a.startY&&n.translate<=n.maxTranslate()||f>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=f;const p=a.currentX-a.startX,v=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(p**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let C;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:p*p+v*v>=25&&(C=Math.atan2(Math.abs(v),Math.abs(p))*180/Math.PI,r.isScrolling=n.isHorizontal()?C>i.touchAngle:90-C>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let g=n.isHorizontal()?p:v,y=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),a.diff=g,g*=i.touchRatio,o&&(g=-g,y=-y);const w=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const x=n.params.loop&&!i.cssMode,h=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(x&&h&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(C)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&w!==n.touchesDirection&&x&&h&&Math.abs(g)>=1){Object.assign(a,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let b=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),g>0?(x&&h&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**S))):g<0&&(x&&h&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!=="auto"&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**S))),b&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function pk(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:s,rtlTranslate:l,slidesGrid:d,enabled:u}=t;if(!u||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const f=jl(),p=f-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),p<300&&f-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=jl(),Ju(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(o.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const g=v>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let S=0;S<d.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const C=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[S+C]<"u"?(g||v>=d[S]&&v<d[S+C])&&(y=S,w=d[S+C]-d[S]):(g||v>=d[S])&&(y=S,w=d[d.length-1]-d[d.length-2])}let x=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(x=0));const m=(v-d[y])/w,b=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?x:y+b):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+b):h!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+b):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(x!==null?x:y+b),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function Sg(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function hk(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function mk(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const a=e.maxTranslate()-e.minTranslate();a===0?i=0:i=(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function gk(e){const t=this;zs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function vk(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Bw=(e,t)=>{const n=Vn(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",d=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&a[l]("scroll",e.onScroll),r.updateOnWindowResize?e[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Sg,!0):e[d]("observerUpdate",Sg,!0),i[l]("load",e.onLoad,{capture:!0}))};function xk(){const e=this,{params:t}=e;e.onTouchStart=uk.bind(e),e.onTouchMove=fk.bind(e),e.onTouchEnd=pk.bind(e),e.onDocumentTouchStart=vk.bind(e),t.cssMode&&(e.onScroll=mk.bind(e)),e.onClick=hk.bind(e),e.onLoad=gk.bind(e),Bw(e,"on")}function yk(){Bw(this,"off")}var wk={attachEvents:xk,detachEvents:yk};const jg=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function bk(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in a?a[o]:void 0)||e.originalParams,d=jg(e,r),u=jg(e,l),f=e.params.grabCursor,p=l.grabCursor,v=r.enabled;d&&!u?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&u&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),f&&!p?e.unsetGrabCursor():!f&&p&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const b=r[m]&&r[m].enabled,S=l[m]&&l[m].enabled;b&&!S&&e[m].disable(),!b&&S&&e[m].enable()});const g=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||g),w=r.loop;g&&n&&e.changeDirection(),Et(e.params,l);const x=e.params.enabled,h=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!x?e.disable():!v&&x&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!w&&h?(e.loopCreate(t),e.updateSlides()):w&&!h&&e.loopDestroy()),e.emit("breakpoint",l)}function Sk(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Rt(),a=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:a*l,point:s}}return{value:s,point:s}});o.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<o.length;s+=1){const{point:l,value:d}=o[s];t==="window"?i.matchMedia(`(min-width: ${d}px)`).matches&&(r=l):d<=n.clientWidth&&(r=l)}return r||"max"}var jk={setBreakpoint:bk,getBreakpoint:Sk};function Ck(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function kk(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=Ck(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function Tk(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var Ak={addClasses:kk,removeClasses:Tk};function Ek(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,a=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Pk={checkOverflow:Ek},tf={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Gk(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],a=r[i];if(typeof a!="object"||a===null){Et(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in a)){Et(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Et(t,r)}}const bd={eventsEmitter:AC,update:DC,translate:UC,transition:YC,slide:nk,loop:ok,grabCursor:ck,events:wk,breakpoints:jk,checkOverflow:Pk,classes:Ak},Sd={};let Zp=class An{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Et({},n),t&&!n.el&&(n.el=t);const o=Vn();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const u=[];return o.querySelectorAll(n.el).forEach(f=>{const p=Et({},n,{el:f});u.push(new An(p))}),u}const s=this;s.__swiper__=!0,s.support=Nw(),s.device=Vw({userAgent:n.userAgent}),s.browser=CC(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(u=>{u({params:n,swiper:s,extendParams:Gk(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const d=Et({},tf,l);return s.params=Et({},d,Sd,n),s.originalParams=Et({},s.params),s.passedParams=Et({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(u=>{s.on(u,s.params.on[u])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=vn(n,`.${r.slideClass}, swiper-slide`),a=kl(i[0]);return kl(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=vn(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:a,slidesGrid:o,slidesSizesGrid:s,size:l,activeIndex:d}=r;let u=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let f=a[d]?Math.ceil(a[d].swiperSlideSize):0,p;for(let v=d+1;v<a.length;v+=1)a[v]&&!p&&(f+=Math.ceil(a[v].swiperSlideSize),u+=1,f>l&&(p=!0));for(let v=d-1;v>=0;v-=1)a[v]&&!p&&(f+=a[v].swiperSlideSize,u+=1,f>l&&(p=!0))}else if(t==="current")for(let f=d+1;f<a.length;f+=1)(n?o[f]+s[f]-o[d]<l:o[f]-o[d]<l)&&(u+=1);else for(let f=d-1;f>=0;f-=1)o[d]-o[f]<l&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&zs(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(o.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):vn(r,i())[0];return!o&&n.params.createElements&&(o=bo("div",n.params.wrapperClass),r.append(o),vn(r,`.${n.params.slideClass}`).forEach(s=>{o.append(s)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||or(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||or(r,"direction")==="rtl"),wrongRTL:or(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(a=>{a.complete?zs(n,a):a.addEventListener("load",o=>{zs(n,o.target)})}),ef(n),n.initialized=!0,ef(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:a,wrapperEl:o,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),o&&o.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),pC(r)),r.destroyed=!0),null}static extendDefaults(t){Et(Sd,t)}static get extendedDefaults(){return Sd}static get defaults(){return tf}static installModule(t){An.prototype.__modules__||(An.prototype.__modules__=[]);const n=An.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>An.installModule(n)),An):(An.installModule(t),An)}};Object.keys(bd).forEach(e=>{Object.keys(bd[e]).forEach(t=>{Zp.prototype[t]=bd[e][t]})});Zp.use([kC,TC]);const $w=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Zr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Ii(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Zr(t[r])&&Zr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Ii(e[r],t[r]):e[r]=t[r]})}function Uw(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Hw(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function qw(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Ww(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function _k(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function zk(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:a,prevEl:o,scrollbarEl:s,paginationEl:l}=e;const d=i.filter(G=>G!=="children"&&G!=="direction"&&G!=="wrapperClass"),{params:u,pagination:f,navigation:p,scrollbar:v,virtual:g,thumbs:y}=t;let w,x,h,m,b,S,C,T;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(w=!0),i.includes("controller")&&r.controller&&r.controller.control&&u.controller&&!u.controller.control&&(x=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(u.pagination||u.pagination===!1)&&f&&!f.el&&(h=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(u.scrollbar||u.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||a)&&(u.navigation||u.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(b=!0);const A=G=>{t[G]&&(t[G].destroy(),G==="navigation"?(t.isElement&&(t[G].prevEl.remove(),t[G].nextEl.remove()),u[G].prevEl=void 0,u[G].nextEl=void 0,t[G].prevEl=void 0,t[G].nextEl=void 0):(t.isElement&&t[G].el.remove(),u[G].el=void 0,t[G].el=void 0))};i.includes("loop")&&t.isElement&&(u.loop&&!r.loop?S=!0:!u.loop&&r.loop?C=!0:T=!0),d.forEach(G=>{if(Zr(u[G])&&Zr(r[G]))Object.assign(u[G],r[G]),(G==="navigation"||G==="pagination"||G==="scrollbar")&&"enabled"in r[G]&&!r[G].enabled&&A(G);else{const E=r[G];(E===!0||E===!1)&&(G==="navigation"||G==="pagination"||G==="scrollbar")?E===!1&&A(G):u[G]=r[G]}}),d.includes("controller")&&!x&&t.controller&&t.controller.control&&u.controller&&u.controller.control&&(t.controller.control=u.controller.control),i.includes("children")&&n&&g&&u.virtual.enabled?(g.slides=n,g.update(!0)):i.includes("virtual")&&g&&u.virtual.enabled&&(n&&(g.slides=n),g.update(!0)),i.includes("children")&&n&&u.loop&&(T=!0),w&&y.init()&&y.update(!0),x&&(t.controller.control=u.controller.control),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(u.pagination.el=l),f.init(),f.render(),f.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(u.scrollbar.el=s),v.init(),v.updateSize(),v.setTranslate()),b&&(t.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=t.hostEl.constructor.nextButtonSvg,a.part.add("button-next"),t.el.appendChild(a)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),a&&(u.navigation.nextEl=a),o&&(u.navigation.prevEl=o),p.init(),p.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||T)&&t.loopDestroy(),(C||T)&&t.loopCreate(),t.update()}function Lk(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Ii(n,tf),n._emitClasses=!0,n.init=!1;const a={},o=$w.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?Zr(e[l])?(n[l]={},i[l]={},Ii(n[l],e[l]),Ii(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:a[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:a,events:r}}function Mk(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:a,scrollbarEl:o,swiper:s}=e;Uw(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),Hw(t)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),qw(t)&&o&&(s.params.scrollbar.el=o,s.originalParams.scrollbar.el=o),s.init(n)}function Ok(e,t,n,r,i){const a=[];if(!t)return a;const o=l=>{a.indexOf(l)<0&&a.push(l)};if(n&&r){const l=r.map(i),d=n.map(i);l.join("")!==d.join("")&&o("children"),r.length!==n.length&&o("children")}return $w.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(Zr(e[l])&&Zr(t[l])){const d=Object.keys(e[l]),u=Object.keys(t[l]);d.length!==u.length?o(l):(d.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}),u.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}))}else e[l]!==t[l]&&o(l)}),a}const Rk=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Tl(){return Tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tl.apply(this,arguments)}function Yw(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Kw(e){const t=[];return te.Children.toArray(e).forEach(n=>{Yw(n)?t.push(n):n.props&&n.props.children&&Kw(n.props.children).forEach(r=>t.push(r))}),t}function Ik(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return te.Children.toArray(e).forEach(r=>{if(Yw(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Kw(r.props.children);i.length>0?i.forEach(a=>t.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Dk(e,t,n){if(!n)return null;const r=u=>{let f=u;return u<0?f=t.length+u:f>=t.length&&(f=f-t.length),f},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,d=[];for(let u=s;u<l;u+=1)u>=a&&u<=o&&d.push(t[r(u)]);return d.map((u,f)=>te.cloneElement(u,{swiper:e,style:i,key:u.props.virtualIndex||u.key||`slide-${f}`}))}function Ka(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const Cg=j.createContext(null),Nk=j.createContext(null),on=j.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:a,onSwiper:o,...s}=e===void 0?{}:e,l=!1;const[d,u]=j.useState("swiper"),[f,p]=j.useState(null),[v,g]=j.useState(!1),y=j.useRef(!1),w=j.useRef(null),x=j.useRef(null),h=j.useRef(null),m=j.useRef(null),b=j.useRef(null),S=j.useRef(null),C=j.useRef(null),T=j.useRef(null),{params:A,passedParams:G,rest:E,events:P}=Lk(s),{slides:z,slots:I}=Ik(a),D=()=>{g(!v)};Object.assign(A.on,{_containerClasses(V,$){u($)}});const q=()=>{Object.assign(A.on,P),l=!0;const V={...A};if(delete V.wrapperClass,x.current=new Zp(V),x.current.virtual&&x.current.params.virtual.enabled){x.current.virtual.slides=z;const $={cache:!1,slides:z,renderExternal:p,renderExternalUpdate:!1};Ii(x.current.params.virtual,$),Ii(x.current.originalParams.virtual,$)}};w.current||q(),x.current&&x.current.on("_beforeBreakpoint",D);const Z=()=>{l||!P||!x.current||Object.keys(P).forEach(V=>{x.current.on(V,P[V])})},K=()=>{!P||!x.current||Object.keys(P).forEach(V=>{x.current.off(V,P[V])})};j.useEffect(()=>()=>{x.current&&x.current.off("_beforeBreakpoint",D)}),j.useEffect(()=>{!y.current&&x.current&&(x.current.emitSlidesClasses(),y.current=!0)}),Ka(()=>{if(t&&(t.current=w.current),!!w.current)return x.current.destroyed&&q(),Mk({el:w.current,nextEl:b.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:T.current,swiper:x.current},A),o&&!x.current.destroyed&&o(x.current),()=>{x.current&&!x.current.destroyed&&x.current.destroy(!0,!1)}},[]),Ka(()=>{Z();const V=Ok(G,h.current,z,m.current,$=>$.key);return h.current=G,m.current=z,V.length&&x.current&&!x.current.destroyed&&zk({swiper:x.current,slides:z,passedParams:G,changedParams:V,nextEl:b.current,prevEl:S.current,scrollbarEl:T.current,paginationEl:C.current}),()=>{K()}}),Ka(()=>{Rk(x.current)},[f]);function M(){return A.virtual?Dk(x.current,z,f):z.map((V,$)=>te.cloneElement(V,{swiper:x.current,swiperSlideIndex:$}))}return te.createElement(r,Tl({ref:w,className:Ww(`${d}${n?` ${n}`:""}`)},E),te.createElement(Nk.Provider,{value:x.current},I["container-start"],te.createElement(i,{className:_k(A.wrapperClass)},I["wrapper-start"],M(),I["wrapper-end"]),Uw(A)&&te.createElement(te.Fragment,null,te.createElement("div",{ref:S,className:"swiper-button-prev"}),te.createElement("div",{ref:b,className:"swiper-button-next"})),qw(A)&&te.createElement("div",{ref:T,className:"swiper-scrollbar"}),Hw(A)&&te.createElement("div",{ref:C,className:"swiper-pagination"}),I["container-end"]))});on.displayName="Swiper";const sn=j.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:a,zoom:o,lazy:s,virtualIndex:l,swiperSlideIndex:d,...u}=e===void 0?{}:e;const f=j.useRef(null),[p,v]=j.useState("swiper-slide"),[g,y]=j.useState(!1);function w(b,S,C){S===f.current&&v(C)}Ka(()=>{if(typeof d<"u"&&(f.current.swiperSlideIndex=d),t&&(t.current=f.current),!(!f.current||!a)){if(a.destroyed){p!=="swiper-slide"&&v("swiper-slide");return}return a.on("_slideClass",w),()=>{a&&a.off("_slideClass",w)}}}),Ka(()=>{a&&f.current&&!a.destroyed&&v(a.getSlideClasses(f.current))},[a]);const x={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},h=()=>typeof r=="function"?r(x):r,m=()=>{y(!0)};return te.createElement(n,Tl({ref:f,className:Ww(`${p}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},u),o&&te.createElement(Cg.Provider,{value:x},te.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},h(),s&&!g&&te.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&te.createElement(Cg.Provider,{value:x},h(),s&&!g&&te.createElement("div",{className:"swiper-lazy-preloader"})))});sn.displayName="SwiperSlide";function Xw(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=vn(e.el,`.${r[i]}`)[0];a||(a=bo("div",r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function kr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function a(g){let y;return g&&typeof g=="string"&&t.isElement&&(y=t.el.querySelector(g)||t.hostEl.querySelector(g),y)?y:(g&&(typeof g=="string"&&(y=[...document.querySelectorAll(g)]),t.params.uniqueNavElements&&typeof g=="string"&&y&&y.length>1&&t.el.querySelectorAll(g).length===1?y=t.el.querySelector(g):y&&y.length===1&&(y=y[0])),g&&!y?g:y)}function o(g,y){const w=t.params.navigation;g=Ye(g),g.forEach(x=>{x&&(x.classList[y?"add":"remove"](...w.disabledClass.split(" ")),x.tagName==="BUTTON"&&(x.disabled=y),t.params.watchOverflow&&t.enabled&&x.classList[t.isLocked?"add":"remove"](w.lockClass))})}function s(){const{nextEl:g,prevEl:y}=t.navigation;if(t.params.loop){o(y,!1),o(g,!1);return}o(y,t.isBeginning&&!t.params.rewind),o(g,t.isEnd&&!t.params.rewind)}function l(g){g.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function d(g){g.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function u(){const g=t.params.navigation;if(t.params.navigation=Xw(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let y=a(g.nextEl),w=a(g.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:w}),y=Ye(y),w=Ye(w);const x=(h,m)=>{h&&h.addEventListener("click",m==="next"?d:l),!t.enabled&&h&&h.classList.add(...g.lockClass.split(" "))};y.forEach(h=>x(h,"next")),w.forEach(h=>x(h,"prev"))}function f(){let{nextEl:g,prevEl:y}=t.navigation;g=Ye(g),y=Ye(y);const w=(x,h)=>{x.removeEventListener("click",h==="next"?d:l),x.classList.remove(...t.params.navigation.disabledClass.split(" "))};g.forEach(x=>w(x,"next")),y.forEach(x=>w(x,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(u(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{f()}),r("enable disable",()=>{let{nextEl:g,prevEl:y}=t.navigation;if(g=Ye(g),y=Ye(y),t.enabled){s();return}[...g,...y].filter(w=>!!w).forEach(w=>w.classList.add(t.params.navigation.lockClass))}),r("click",(g,y)=>{let{nextEl:w,prevEl:x}=t.navigation;w=Ye(w),x=Ye(x);const h=y.target;let m=x.includes(h)||w.includes(h);if(t.isElement&&!m){const b=y.path||y.composedPath&&y.composedPath();b&&(m=b.find(S=>w.includes(S)||x.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===h||t.pagination.el.contains(h)))return;let b;w.length?b=w[0].classList.contains(t.params.navigation.hiddenClass):x.length&&(b=x[0].classList.contains(t.params.navigation.hiddenClass)),i(b===!0?"navigationShow":"navigationHide"),[...w,...x].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const p=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),u(),s()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(t.navigation,{enable:p,disable:v,update:s,init:u,destroy:f})}function ka(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Tr(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let o,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function d(h,m){const{bulletActiveClass:b}=t.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${b}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${b}-${m}-${m}`)))}function u(h,m,b){if(h=h%b,m=m%b,m===h+1)return"next";if(m===h-1)return"previous"}function f(h){const m=h.target.closest(ka(t.params.pagination.bulletClass));if(!m)return;h.preventDefault();const b=kl(m)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===b)return;const S=u(t.realIndex,b,t.slides.length);S==="next"?t.slideNext():S==="previous"?t.slidePrev():t.slideToLoop(b)}else t.slideTo(b)}function p(){const h=t.rtl,m=t.params.pagination;if(l())return;let b=t.pagination.el;b=Ye(b);let S,C;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,A=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,C=t.previousSnapIndex):(C=t.previousIndex||0,S=t.activeIndex||0),m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const G=t.pagination.bullets;let E,P,z;if(m.dynamicBullets&&(o=Zu(G[0],t.isHorizontal()?"width":"height"),b.forEach(I=>{I.style[t.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&C!==void 0&&(s+=S-(C||0),s>m.dynamicMainBullets-1?s=m.dynamicMainBullets-1:s<0&&(s=0)),E=Math.max(S-s,0),P=E+(Math.min(G.length,m.dynamicMainBullets)-1),z=(P+E)/2),G.forEach(I=>{const D=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(q=>`${m.bulletActiveClass}${q}`)].map(q=>typeof q=="string"&&q.includes(" ")?q.split(" "):q).flat();I.classList.remove(...D)}),b.length>1)G.forEach(I=>{const D=kl(I);D===S?I.classList.add(...m.bulletActiveClass.split(" ")):t.isElement&&I.setAttribute("part","bullet"),m.dynamicBullets&&(D>=E&&D<=P&&I.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),D===E&&d(I,"prev"),D===P&&d(I,"next"))});else{const I=G[S];if(I&&I.classList.add(...m.bulletActiveClass.split(" ")),t.isElement&&G.forEach((D,q)=>{D.setAttribute("part",q===S?"bullet-active":"bullet")}),m.dynamicBullets){const D=G[E],q=G[P];for(let Z=E;Z<=P;Z+=1)G[Z]&&G[Z].classList.add(...`${m.bulletActiveClass}-main`.split(" "));d(D,"prev"),d(q,"next")}}if(m.dynamicBullets){const I=Math.min(G.length,m.dynamicMainBullets+4),D=(o*I-o)/2-z*o,q=h?"right":"left";G.forEach(Z=>{Z.style[t.isHorizontal()?q:"top"]=`${D}px`})}}b.forEach((G,E)=>{if(m.type==="fraction"&&(G.querySelectorAll(ka(m.currentClass)).forEach(P=>{P.textContent=m.formatFractionCurrent(S+1)}),G.querySelectorAll(ka(m.totalClass)).forEach(P=>{P.textContent=m.formatFractionTotal(A)})),m.type==="progressbar"){let P;m.progressbarOpposite?P=t.isHorizontal()?"vertical":"horizontal":P=t.isHorizontal()?"horizontal":"vertical";const z=(S+1)/A;let I=1,D=1;P==="horizontal"?I=z:D=z,G.querySelectorAll(ka(m.progressbarFillClass)).forEach(q=>{q.style.transform=`translate3d(0,0,0) scaleX(${I}) scaleY(${D})`,q.style.transitionDuration=`${t.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(G.innerHTML=m.renderCustom(t,S+1,A),E===0&&i("paginationRender",G)):(E===0&&i("paginationRender",G),i("paginationUpdate",G)),t.params.watchOverflow&&t.enabled&&G.classList[t.isLocked?"add":"remove"](m.lockClass)})}function v(){const h=t.params.pagination;if(l())return;const m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let b=t.pagination.el;b=Ye(b);let S="";if(h.type==="bullets"){let C=t.params.loop?Math.ceil(m/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&C>m&&(C=m);for(let T=0;T<C;T+=1)h.renderBullet?S+=h.renderBullet.call(t,T,h.bulletClass):S+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?S=h.renderFraction.call(t,h.currentClass,h.totalClass):S=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?S=h.renderProgressbar.call(t,h.progressbarFillClass):S=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],b.forEach(C=>{h.type!=="custom"&&(C.innerHTML=S||""),h.type==="bullets"&&t.pagination.bullets.push(...C.querySelectorAll(ka(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",b[0])}function g(){t.params.pagination=Xw(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&t.isElement&&(m=t.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...t.el.querySelectorAll(h.el)],m.length>1&&(m=m.filter(b=>Dw(b,".swiper")[0]===t.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(t.pagination,{el:m}),m=Ye(m),m.forEach(b=>{h.type==="bullets"&&h.clickable&&b.classList.add(...(h.clickableClass||"").split(" ")),b.classList.add(h.modifierClass+h.type),b.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(b.classList.add(`${h.modifierClass}${h.type}-dynamic`),s=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&b.classList.add(h.progressbarOppositeClass),h.clickable&&b.addEventListener("click",f),t.enabled||b.classList.add(h.lockClass)}))}function y(){const h=t.params.pagination;if(l())return;let m=t.pagination.el;m&&(m=Ye(m),m.forEach(b=>{b.classList.remove(h.hiddenClass),b.classList.remove(h.modifierClass+h.type),b.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(b.classList.remove(...(h.clickableClass||"").split(" ")),b.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(b=>b.classList.remove(...h.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:m}=t.pagination;m=Ye(m),m.forEach(b=>{b.classList.remove(h.horizontalClass,h.verticalClass),b.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?x():(g(),v(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{v(),p()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:h}=t.pagination;h&&(h=Ye(h),h.forEach(m=>m.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(h,m)=>{const b=m.target,S=Ye(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!b.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&b===t.navigation.nextEl||t.navigation.prevEl&&b===t.navigation.prevEl))return;const C=S[0].classList.contains(t.params.pagination.hiddenClass);i(C===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(t.params.pagination.hiddenClass))}});const w=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ye(h),h.forEach(m=>m.classList.remove(t.params.pagination.paginationDisabledClass))),g(),v(),p()},x=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ye(h),h.forEach(m=>m.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:w,disable:x,render:v,update:p,init:g,destroy:y})}function Yn(e){let{swiper:t,extendParams:n,on:r,emit:i,params:a}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},n({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,s,l=a&&a.autoplay?a.autoplay.delay:3e3,d=a&&a.autoplay?a.autoplay.delay:3e3,u,f=new Date().getTime(),p,v,g,y,w,x,h;function m(M){!t||t.destroyed||!t.wrapperEl||M.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),!(h||M.detail&&M.detail.bySwiperTouchMove)&&E())}const b=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(d=u,p=!1);const M=t.autoplay.paused?u:f+d-new Date().getTime();t.autoplay.timeLeft=M,i("autoplayTimeLeft",M,M/l),s=requestAnimationFrame(()=>{b()})},S=()=>{let M;return t.virtual&&t.params.virtual.enabled?M=t.slides.filter($=>$.classList.contains("swiper-slide-active"))[0]:M=t.slides[t.activeIndex],M?parseInt(M.getAttribute("data-swiper-autoplay"),10):void 0},C=M=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(s),b();let V=typeof M>"u"?t.params.autoplay.delay:M;l=t.params.autoplay.delay,d=t.params.autoplay.delay;const $=S();!Number.isNaN($)&&$>0&&typeof M>"u"&&(V=$,l=$,d=$),u=V;const X=t.params.speed,ee=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(X,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,X,!0,!0),i("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(X,!0,!0),i("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,X,!0,!0),i("autoplay")),t.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return V>0?(clearTimeout(o),o=setTimeout(()=>{ee()},V)):requestAnimationFrame(()=>{ee()}),V},T=()=>{f=new Date().getTime(),t.autoplay.running=!0,C(),i("autoplayStart")},A=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(s),i("autoplayStop")},G=(M,V)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),M||(x=!0);const $=()=>{i("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):E()};if(t.autoplay.paused=!0,V){w&&(u=t.params.autoplay.delay),w=!1,$();return}u=(u||t.params.autoplay.delay)-(new Date().getTime()-f),!(t.isEnd&&u<0&&!t.params.loop)&&(u<0&&(u=0),$())},E=()=>{t.isEnd&&u<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(f=new Date().getTime(),x?(x=!1,C(u)):C(),t.autoplay.paused=!1,i("autoplayResume"))},P=()=>{if(t.destroyed||!t.autoplay.running)return;const M=Vn();M.visibilityState==="hidden"&&(x=!0,G(!0)),M.visibilityState==="visible"&&E()},z=M=>{M.pointerType==="mouse"&&(x=!0,h=!0,!(t.animating||t.autoplay.paused)&&G(!0))},I=M=>{M.pointerType==="mouse"&&(h=!1,t.autoplay.paused&&E())},D=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",z),t.el.addEventListener("pointerleave",I))},q=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",z),t.el.removeEventListener("pointerleave",I))},Z=()=>{Vn().addEventListener("visibilitychange",P)},K=()=>{Vn().removeEventListener("visibilitychange",P)};r("init",()=>{t.params.autoplay.enabled&&(D(),Z(),T())}),r("destroy",()=>{q(),K(),t.autoplay.running&&A()}),r("_freeModeStaticRelease",()=>{(g||x)&&E()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?A():G(!0,!0)}),r("beforeTransitionStart",(M,V,$)=>{t.destroyed||!t.autoplay.running||($||!t.params.autoplay.disableOnInteraction?G(!0,!0):A())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){A();return}v=!0,g=!1,x=!1,y=setTimeout(()=>{x=!0,g=!0,G(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!v)){if(clearTimeout(y),clearTimeout(o),t.params.autoplay.disableOnInteraction){g=!1,v=!1;return}g&&t.params.cssMode&&E(),g=!1,v=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(w=!0)}),Object.assign(t.autoplay,{start:T,stop:A,pause:G,resume:E})}function Vk(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:l,getEffectParams:d}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const f=o?o():{};Object.assign(n.params,f),Object.assign(n.originalParams,f)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(f,p)=>{n.params.effect===t&&a(p)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!d||!d().slideShadows)return;n.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let u;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)}))})}function Fk(e,t){const n=Jp(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function kg(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=Jp(t);let a=i.querySelector(`.${r.split(" ").join(".")}`);return a||(a=bo("div",r.split(" ")),i.append(a)),a}function Bk(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Vk({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:o,height:s,slides:l,slidesSizesGrid:d}=t,u=t.params.coverflowEffect,f=t.isHorizontal(),p=t.translate,v=f?-p+o/2:-p+s/2,g=f?u.rotate:-u.rotate,y=u.depth,w=wC(t);for(let x=0,h=l.length;x<h;x+=1){const m=l[x],b=d[x],S=m.swiperSlideOffset,C=(v-S-b/2)/b,T=typeof u.modifier=="function"?u.modifier(C):C*u.modifier;let A=f?g*T:0,G=f?0:g*T,E=-y*Math.abs(T),P=u.stretch;typeof P=="string"&&P.indexOf("%")!==-1&&(P=parseFloat(u.stretch)/100*b);let z=f?0:P*T,I=f?P*T:0,D=1-(1-u.scale)*Math.abs(T);Math.abs(I)<.001&&(I=0),Math.abs(z)<.001&&(z=0),Math.abs(E)<.001&&(E=0),Math.abs(A)<.001&&(A=0),Math.abs(G)<.001&&(G=0),Math.abs(D)<.001&&(D=0);const q=`translate3d(${I}px,${z}px,${E}px)  rotateX(${w(G)}deg) rotateY(${w(A)}deg) scale(${D})`,Z=Fk(u,m);if(Z.style.transform=q,m.style.zIndex=-Math.abs(Math.round(T))+1,u.slideShadows){let K=f?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),M=f?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");K||(K=kg("coverflow",m,f?"left":"top")),M||(M=kg("coverflow",m,f?"right":"bottom")),K&&(K.style.opacity=T>0?T:0),M&&(M.style.opacity=-T>0?-T:0)}}},setTransition:o=>{t.slides.map(l=>Jp(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d=>{d.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const $k=k.button`
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
`,eh=({text:e,onClick:t,backDefine:n,colorDefine:r})=>c.jsxs($k,{id:"clickwpp",backDefine:n,colorDefine:r,onClick:t,children:[e,c.jsx(Bp,{className:"icon"})]}),Uk=oa`
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
`,Hk=Wn`
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
`,qk=k.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 20px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,Wk=k.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${Hk} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,Yk=k.div`
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
`,Kk=k.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,Xk=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,Qk=k.p`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,Jk=k.div`
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
`,Zk=k.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,Tg=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>c.jsxs(Zk,{children:[c.jsx(Uk,{}),c.jsx(on,{modules:[kr,Tr,Yn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((l,d)=>c.jsx(sn,{children:t==="image"?c.jsx(qk,{src:l.src,loading:"lazy",alt:l.alt||`Slide ${d+1}`}):c.jsxs(Wk,{backgroundImage:l.backgroundImage,children:[c.jsx(Yk,{}),c.jsxs(Kk,{children:[c.jsx(Xk,{children:l.title}),c.jsx(Qk,{children:l.subtitle}),c.jsx(Jk,{children:l.features.map((u,f)=>c.jsxs("span",{children:[u.icon," ",u.text]},f))}),c.jsx(eh,{text:"Conhecer todas as acomodações"})]})]})},d))})]}),Di=k.button`
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
`,Ag=k.svg`
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

    ${Di}:hover &.arr-1 {
        right: -25%;
    }

    ${Di}:hover &.arr-2 {
        left: 16px;
    }

    ${Di}:hover & {
        fill: var(--color--white);
    }
`,eT=k.span`
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

    ${Di}:hover & {
        width: 220px;
        height: 220px;
        opacity: 1;
        color: var(--color--white);
    }
`,tT=k.span`
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);

    ${Di}:hover & {
        transform: translateX(12px);
        color: var(--color--white);
    }
`,lt=({text:e,onClick:t,color:n,backgroundColor:r,borderColor:i,hoverColor:a})=>c.jsxs(Di,{id:"clickwpp",onClick:t,color:n,background:r,borderColor:i,hoverColor:a,children:[c.jsx(Ag,{className:"arr-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})}),c.jsx(tT,{id:"clickwpp",children:e}),c.jsx(eT,{}),c.jsx(Ag,{className:"arr-1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})]}),nT=Wn`
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
`,rT=k.div`
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
    animation: ${nT} 8s ease-in-out infinite;
    pointer-events: none;

    @media (max-width: 768px) {
      animation: none;
      border-top: none;
      border-radius: 0 0 35px 0;
      border: 1px solid var(--color--black);
    }
  }
`,iT=k.h1`
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
`,aT=k.p`
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
`,oT=k.div`
  display: flex;
  width: 100%;
  gap: 25px;

  @media (max-width:768px){
    gap: 15px;
  }
`,sT=k.p`
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
`,Eg=({text:e,title:t,borderColor:n,buttonColor:r,buttonHover:i,buttonBorder:a,targetPage:o,idade:s})=>{const l=ql(),d=()=>{l(o)},u=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(rT,{borderColor:n,children:[c.jsx(iT,{children:t}),c.jsx(aT,{children:e}),c.jsxs(oT,{children:[c.jsx(lt,{onClick:u,text:"Fazer reserva!",backgroundColor:"transparent",borderColor:a,hoverColor:i,border:"1px solid",color:"var(--color--black)"}),c.jsx(lt,{onClick:d,text:"Saber mais",backgroundColor:r,borderColor:a,hoverColor:i,border:"1px solid",color:"var(--color--black)"})]}),c.jsx(sT,{children:s})]})};function lT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"},child:[]}]})(e)}function th(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M7 11v2h10v-2c0-1.86 1.28-3.41 3-3.86V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v1.14c1.72.45 3 2 3 3.86z"},child:[]},{tag:"path",attr:{d:"M21 9c-1.1 0-2 .9-2 2v4H5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function Je(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 9 12 2 2 9h9v13h2V9z"},child:[]},{tag:"path",attr:{d:"m4.14 12-1.96.37.82 4.37V22h2l.02-4H7v4h2v-6H4.9zM19.1 16H15v6h2v-4h1.98l.02 4h2v-5.26l.82-4.37-1.96-.37z"},child:[]}]})(e)}function cT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"circle",attr:{cx:"4.5",cy:"9.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"19.5",cy:"9.5",r:"2.5"},child:[]},{tag:"path",attr:{d:"M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"},child:[]}]})(e)}function kt(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"},child:[]}]})(e)}function dT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"},child:[]}]})(e)}function uT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 9 5 12 1.774-5.226L21 14 9 9z"},child:[]},{tag:"path",attr:{d:"m16.071 16.071 4.243 4.243"},child:[]},{tag:"path",attr:{d:"m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"},child:[]}]})(e)}const fT=k.button`
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
`,Qw=k.div`
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
`,pT=k(Qw)`
  position: absolute;
  inset: 0;
  background-color: ${({hoverColor:e})=>e||"var(--color--blue)"};
  transform: translate(0%, 100%);
`,hT=k.span`
  color: ${({textColor:e})=>e||"var(--color--black)"};
`,mT=k.span`
  color: ${({hoverTextColor:e})=>e||"var(--color--white)"};
`,sa=({text:e="Quick View",text2:t="Clique e reserve",borderColor:n,textColor:r,hoverColor:i,hoverTextColor:a})=>{const o=()=>{window.open("https://wa.link/dojlwi","_blank")};return c.jsxs(fT,{borderColor:n,textColor:r,onClick:o,id:"clickwpp",children:[c.jsxs(Qw,{className:"default-btn",children:[c.jsx(lT,{size:15,color:r||"var(--color--black)"}),c.jsx(hT,{textColor:r,children:e})]}),c.jsxs(pT,{className:"hover-btn",hoverColor:i,id:"clickwpp",children:[c.jsx(uT,{size:15,color:a||"var(--color--white)"}),c.jsx(mT,{hoverTextColor:a,children:t})]})]})};var Jw={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Zg,function(){return function(n){function r(a){if(i[a])return i[a].exports;var o=i[a]={exports:{},id:a,loaded:!1};return n[a].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var i={};return r.m=n,r.c=i,r.p="dist/",r(0)}([function(n,r,i){function a(D){return D&&D.__esModule?D:{default:D}}var o=Object.assign||function(D){for(var q=1;q<arguments.length;q++){var Z=arguments[q];for(var K in Z)Object.prototype.hasOwnProperty.call(Z,K)&&(D[K]=Z[K])}return D},s=i(1),l=(a(s),i(6)),d=a(l),u=i(7),f=a(u),p=i(8),v=a(p),g=i(9),y=a(g),w=i(10),x=a(w),h=i(11),m=a(h),b=i(14),S=a(b),C=[],T=!1,A={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},G=function(){var D=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(D&&(T=!0),T)return C=(0,m.default)(C,A),(0,x.default)(C,A.once),C},E=function(){C=(0,S.default)(),G()},P=function(){C.forEach(function(D,q){D.node.removeAttribute("data-aos"),D.node.removeAttribute("data-aos-easing"),D.node.removeAttribute("data-aos-duration"),D.node.removeAttribute("data-aos-delay")})},z=function(D){return D===!0||D==="mobile"&&y.default.mobile()||D==="phone"&&y.default.phone()||D==="tablet"&&y.default.tablet()||typeof D=="function"&&D()===!0},I=function(D){A=o(A,D),C=(0,S.default)();var q=document.all&&!window.atob;return z(A.disable)||q?P():(A.disableMutationObserver||v.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),A.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",A.easing),document.querySelector("body").setAttribute("data-aos-duration",A.duration),document.querySelector("body").setAttribute("data-aos-delay",A.delay),A.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?G(!0):A.startEvent==="load"?window.addEventListener(A.startEvent,function(){G(!0)}):document.addEventListener(A.startEvent,function(){G(!0)}),window.addEventListener("resize",(0,f.default)(G,A.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(G,A.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,x.default)(C,A.once)},A.throttleDelay)),A.disableMutationObserver||v.default.ready("[data-aos]",E),C)};n.exports={init:I,refresh:G,refreshHard:E}},function(n,r){},,,,,function(n,r){(function(i){function a(z,I,D){function q(U){var re=ge,ce=Te;return ge=Te=void 0,N=U,de=z.apply(ce,re)}function Z(U){return N=U,_=setTimeout(V,I),R?q(U):de}function K(U){var re=U-O,ce=U-N,me=I-re;return Y?E(me,he-ce):me}function M(U){var re=U-O,ce=U-N;return O===void 0||re>=I||re<0||Y&&ce>=he}function V(){var U=P();return M(U)?$(U):void(_=setTimeout(V,K(U)))}function $(U){return _=void 0,B&&ge?q(U):(ge=Te=void 0,de)}function X(){_!==void 0&&clearTimeout(_),N=0,ge=O=Te=_=void 0}function ee(){return _===void 0?de:$(P())}function be(){var U=P(),re=M(U);if(ge=arguments,Te=this,O=U,re){if(_===void 0)return Z(O);if(Y)return _=setTimeout(V,I),q(O)}return _===void 0&&(_=setTimeout(V,I)),de}var ge,Te,he,de,_,O,N=0,R=!1,Y=!1,B=!0;if(typeof z!="function")throw new TypeError(p);return I=u(I)||0,s(D)&&(R=!!D.leading,Y="maxWait"in D,he=Y?G(u(D.maxWait)||0,I):he,B="trailing"in D?!!D.trailing:B),be.cancel=X,be.flush=ee,be}function o(z,I,D){var q=!0,Z=!0;if(typeof z!="function")throw new TypeError(p);return s(D)&&(q="leading"in D?!!D.leading:q,Z="trailing"in D?!!D.trailing:Z),a(z,I,{leading:q,maxWait:I,trailing:Z})}function s(z){var I=typeof z>"u"?"undefined":f(z);return!!z&&(I=="object"||I=="function")}function l(z){return!!z&&(typeof z>"u"?"undefined":f(z))=="object"}function d(z){return(typeof z>"u"?"undefined":f(z))=="symbol"||l(z)&&A.call(z)==g}function u(z){if(typeof z=="number")return z;if(d(z))return v;if(s(z)){var I=typeof z.valueOf=="function"?z.valueOf():z;z=s(I)?I+"":I}if(typeof z!="string")return z===0?z:+z;z=z.replace(y,"");var D=x.test(z);return D||h.test(z)?m(z.slice(2),D?2:8):w.test(z)?v:+z}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},p="Expected a function",v=NaN,g="[object Symbol]",y=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,b=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,S=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,C=b||S||Function("return this")(),T=Object.prototype,A=T.toString,G=Math.max,E=Math.min,P=function(){return C.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){(function(i){function a(P,z,I){function D(B){var U=be,re=ge;return be=ge=void 0,O=B,he=P.apply(re,U)}function q(B){return O=B,de=setTimeout(M,z),N?D(B):he}function Z(B){var U=B-_,re=B-O,ce=z-U;return R?G(ce,Te-re):ce}function K(B){var U=B-_,re=B-O;return _===void 0||U>=z||U<0||R&&re>=Te}function M(){var B=E();return K(B)?V(B):void(de=setTimeout(M,Z(B)))}function V(B){return de=void 0,Y&&be?D(B):(be=ge=void 0,he)}function $(){de!==void 0&&clearTimeout(de),O=0,be=_=ge=de=void 0}function X(){return de===void 0?he:V(E())}function ee(){var B=E(),U=K(B);if(be=arguments,ge=this,_=B,U){if(de===void 0)return q(_);if(R)return de=setTimeout(M,z),D(_)}return de===void 0&&(de=setTimeout(M,z)),he}var be,ge,Te,he,de,_,O=0,N=!1,R=!1,Y=!0;if(typeof P!="function")throw new TypeError(f);return z=d(z)||0,o(I)&&(N=!!I.leading,R="maxWait"in I,Te=R?A(d(I.maxWait)||0,z):Te,Y="trailing"in I?!!I.trailing:Y),ee.cancel=$,ee.flush=X,ee}function o(P){var z=typeof P>"u"?"undefined":u(P);return!!P&&(z=="object"||z=="function")}function s(P){return!!P&&(typeof P>"u"?"undefined":u(P))=="object"}function l(P){return(typeof P>"u"?"undefined":u(P))=="symbol"||s(P)&&T.call(P)==v}function d(P){if(typeof P=="number")return P;if(l(P))return p;if(o(P)){var z=typeof P.valueOf=="function"?P.valueOf():P;P=o(z)?z+"":z}if(typeof P!="string")return P===0?P:+P;P=P.replace(g,"");var I=w.test(P);return I||x.test(P)?h(P.slice(2),I?2:8):y.test(P)?p:+P}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},f="Expected a function",p=NaN,v="[object Symbol]",g=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,x=/^0o[0-7]+$/i,h=parseInt,m=(typeof i>"u"?"undefined":u(i))=="object"&&i&&i.Object===Object&&i,b=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,S=m||b||Function("return this")(),C=Object.prototype,T=C.toString,A=Math.max,G=Math.min,E=function(){return S.Date.now()};n.exports=a}).call(r,function(){return this}())},function(n,r){function i(u){var f=void 0,p=void 0;for(f=0;f<u.length;f+=1)if(p=u[f],p.dataset&&p.dataset.aos||p.children&&i(p.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!a()}function s(u,f){var p=window.document,v=a(),g=new v(l);d=f,g.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(u){u&&u.forEach(function(f){var p=Array.prototype.slice.call(f.addedNodes),v=Array.prototype.slice.call(f.removedNodes),g=p.concat(v);if(i(g))return d()})}Object.defineProperty(r,"__esModule",{value:!0});var d=function(){};r.default={isSupported:o,ready:s}},function(n,r){function i(p,v){if(!(p instanceof v))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function p(v,g){for(var y=0;y<g.length;y++){var w=g[y];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(v,w.key,w)}}return function(v,g,y){return g&&p(v.prototype,g),y&&p(v,y),v}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function p(){i(this,p)}return o(p,[{key:"phone",value:function(){var v=a();return!(!s.test(v)&&!l.test(v.substr(0,4)))}},{key:"mobile",value:function(){var v=a();return!(!d.test(v)&&!u.test(v.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();r.default=new f},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o,s,l){var d=o.node.getAttribute("data-aos-once");s>o.position?o.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!l&&d!=="true")&&o.node.classList.remove("aos-animate")},a=function(o,s){var l=window.pageYOffset,d=window.innerHeight;o.forEach(function(u,f){i(u,d+l,s)})};r.default=a},function(n,r,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(12),s=a(o),l=function(d,u){return d.forEach(function(f,p){f.node.classList.add("aos-init"),f.position=(0,s.default)(f.node,u.offset)}),d};r.default=l},function(n,r,i){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(13),s=a(o),l=function(d,u){var f=0,p=0,v=window.innerHeight,g={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(g.offset&&!isNaN(g.offset)&&(p=parseInt(g.offset)),g.anchor&&document.querySelectorAll(g.anchor)&&(d=document.querySelectorAll(g.anchor)[0]),f=(0,s.default)(d).top,g.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=d.offsetHeight/2;break;case"bottom-bottom":f+=d.offsetHeight;break;case"top-center":f+=v/2;break;case"bottom-center":f+=v/2+d.offsetHeight;break;case"center-center":f+=v/2+d.offsetHeight/2;break;case"top-top":f+=v;break;case"bottom-top":f+=d.offsetHeight+v;break;case"center-top":f+=d.offsetHeight/2+v}return g.anchorPlacement||g.offset||isNaN(u)||(p=u),f+p};r.default=l},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){for(var o=0,s=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)o+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),s+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:s,left:o}};r.default=i},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(o){return{node:o}})};r.default=i}])})})(Jw);var gT=Jw.exports;const Ie=ti(gT),vT=oa`
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
`,xT=k.div`
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
`,yT=k.div`
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
`,wT=k.div`
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
`,bT=k.div`
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
`,ST=k.h2`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0;
    }
`,jT=k.p`
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
`,CT=({content:e=[],height:t="300px",width:n="100%",autoplayDelay:r=1500,showPagination:i=!0,showNavigation:a=!0})=>{const o=j.useRef([]);return j.useEffect(()=>{o.current&&o.current.forEach(s=>{s&&window.VanillaTilt.init(s,{max:2,speed:400,glare:!1})})},[]),c.jsxs(c.Fragment,{children:[c.jsx(vT,{}),c.jsx(on,{modules:[kr,Tr,Yn,Bk],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:50,depth:300,modifier:1,slideShadows:!0},navigation:a,pagination:i?{clickable:!0}:!1,autoplay:{delay:r,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:2},0:{slidesPerView:1}},style:{width:n,height:t},children:e.map((s,l)=>c.jsx(sn,{style:{width:"60%"},children:c.jsxs(xT,{ref:d=>o.current[l]=d,backgroundImage:s.backgroundImage,children:[c.jsx(bT,{children:s.topLeftText}),c.jsx(yT,{}),c.jsxs(wT,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(ST,{children:s.title}),c.jsx(jT,{children:s.description}),c.jsx(sa,{text:"Reservar agora",text2:"Clique e reserve agora",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--green)",hoverTextColor:"var(--color--black)"})]})]})},l))})]})},kT=k(Oe.div)`
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
`,TT=k(Oe.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.2) rotate(3deg); // Zoom e rotação ao passar o mouse
    }
`,AT=k(Oe.div)`
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
`,nf=({images:e=[],reverse:t=!1})=>c.jsx(on,{modules:[Yn],spaceBetween:0,loop:!0,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:t,stopOnLastSlide:!1,pauseOnMouseEnter:!0},speed:2e3,freeMode:!0,freeModeMomentum:!1,breakpoints:{320:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}},children:e.map((n,r)=>c.jsx(sn,{children:c.jsxs(kT,{initial:{scale:.8,rotate:-5,opacity:0},animate:{scale:1,rotate:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:[c.jsx(TT,{src:n.src,alt:n.alt||`Imagem ${r+1}`,initial:{scale:1},whileHover:{scale:1.2,rotate:3},transition:{duration:.3}}),c.jsx(AT,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:"backOut"},children:n.label})]})},r))}),ET=Wn`
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
`,PT=k.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 10px;
    background: var(--color--white);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    animation: ${ET} 5s ease-in-out infinite;
    background-color: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px){
        border: none;
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        animation: none;
        border-radius: 15px 15px 5px 5px;
    }
`,GT=k.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px){
        border: 2px solid var(--color--black);
        height: 320px;
    }
`,_T=k.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #333;
`,zT=k.h3`
    font-size: 22px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
    margin: 0;
`,LT=k.p`
    font-size: 14px;
    color: #777;
    font-family: var(--font--avenir);
    margin: 0;
`,MT=k.div`
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
`,OT=k.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
`,RT=k.p`
    font-size: 18px;
    font-family: var(--font--comfortaa);
    font-weight: bold;
    margin: 0;
    color: #333;

    & > span{
        font-size: 10px;
    }
`,Lo=({events:e=[]})=>c.jsx(on,{modules:[kr,Tr,Yn],autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},spaceBetween:20,navigation:!0,pagination:!1,loop:!0,breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}},children:e.map((t,n)=>c.jsx(sn,{children:c.jsxs(PT,{"data-aos":"fade-up","data-aos-delay":"0",children:[c.jsx(GT,{src:t.image,alt:t.title,"data-aos":"fade-up","data-aos-delay":"100"}),c.jsxs(_T,{children:[c.jsx(zT,{"data-aos":"fade-up","data-aos-delay":"200",children:t.title}),c.jsx(LT,{"data-aos":"fade-down","data-aos-delay":"250",children:t.dateRange}),c.jsx(MT,{"data-aos":"fade-up","data-aos-delay":"300",children:t.features.map((r,i)=>c.jsxs("span",{"data-aos":"fade-up","data-aos-delay":"400",children:[r.icon," ",r.text]},i))}),c.jsx(OT,{children:c.jsxs(RT,{"data-aos":"fade-in","data-aos-delay":"500",children:["A partir de: ",c.jsx("span",{children:"12x"}),"R$",t.price]})}),c.jsx(sa,{text:"Quero fazer minha reserva agora",text2:"Clique e reserve!",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},n))});function IT(e){return J({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957",transform:"translate(64 64)"},child:[]}]})(e)}function DT(e){return J({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M365.014.667C408.68 0 452.011.333 495.342 0c2.667 51 21 102.999 58.33 138.998 37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333-19-8.667-36.665-19.667-53.998-31-.333 97.332.334 194.665-.666 291.663-2.667 46.666-18 93-44.998 131.332-43.665 64-119.328 105.665-196.992 106.999-47.664 2.666-95.329-10.334-135.994-34.333C55.028 725.658 7.696 652.992.697 574.993c-.667-16.667-1-33.333-.334-49.666 6-63.333 37.332-123.999 85.997-165.332 55.33-47.999 132.66-70.999 204.99-57.332.667 49.333-1.332 98.665-1.332 147.998-33-10.667-71.664-7.667-100.663 12.333-20.999 13.667-36.998 34.666-45.331 58.333-7 17-5 35.666-4.667 53.666 8 54.666 60.664 100.665 116.662 95.665 37.332-.333 72.997-22 92.33-53.666 6.332-11 13.332-22.333 13.665-35.333 3.334-59.666 2-118.998 2.334-178.664.333-134.332-.334-268.33.666-402.328",transform:"translate(165 112)"},child:[]}]})(e)}function NT(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function VT(e){return J({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512H381.1h75H578.9c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"},child:[]}]})(e)}function FT(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"},child:[]}]})(e)}function BT(e){return J({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function Zw(e,t){return function(){return e.apply(t,arguments)}}const{toString:$T}=Object.prototype,{getPrototypeOf:nh}=Object,lc=(e=>t=>{const n=$T.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ln=e=>(e=e.toLowerCase(),t=>lc(t)===e),cc=e=>t=>typeof t===e,{isArray:la}=Array,So=cc("undefined");function UT(e){return e!==null&&!So(e)&&e.constructor!==null&&!So(e.constructor)&&_t(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const e2=ln("ArrayBuffer");function HT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&e2(e.buffer),t}const qT=cc("string"),_t=cc("function"),t2=cc("number"),dc=e=>e!==null&&typeof e=="object",WT=e=>e===!0||e===!1,Ls=e=>{if(lc(e)!=="object")return!1;const t=nh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},YT=ln("Date"),KT=ln("File"),XT=ln("Blob"),QT=ln("FileList"),JT=e=>dc(e)&&_t(e.pipe),ZT=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||_t(e.append)&&((t=lc(e))==="formdata"||t==="object"&&_t(e.toString)&&e.toString()==="[object FormData]"))},eA=ln("URLSearchParams"),[tA,nA,rA,iA]=["ReadableStream","Request","Response","Headers"].map(ln),aA=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),la(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let s;for(r=0;r<o;r++)s=a[r],t.call(null,e[s],s,e)}}function n2(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,r2=e=>!So(e)&&e!==Vr;function rf(){const{caseless:e}=r2(this)&&this||{},t={},n=(r,i)=>{const a=e&&n2(t,i)||i;Ls(t[a])&&Ls(r)?t[a]=rf(t[a],r):Ls(r)?t[a]=rf({},r):la(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Mo(arguments[r],n);return t}const oA=(e,t,n,{allOwnKeys:r}={})=>(Mo(t,(i,a)=>{n&&_t(i)?e[a]=Zw(i,n):e[a]=i},{allOwnKeys:r}),e),sA=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),lA=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},cA=(e,t,n,r)=>{let i,a,o;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&nh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},dA=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},uA=e=>{if(!e)return null;if(la(e))return e;let t=e.length;if(!t2(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},fA=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&nh(Uint8Array)),pA=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},hA=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},mA=ln("HTMLFormElement"),gA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Pg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),vA=ln("RegExp"),i2=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Mo(n,(i,a)=>{let o;(o=t(i,a,e))!==!1&&(r[a]=o||i)}),Object.defineProperties(e,r)},xA=e=>{i2(e,(t,n)=>{if(_t(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(_t(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yA=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return la(e)?r(e):r(String(e).split(t)),n},wA=()=>{},bA=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,jd="abcdefghijklmnopqrstuvwxyz",Gg="0123456789",a2={DIGIT:Gg,ALPHA:jd,ALPHA_DIGIT:jd+jd.toUpperCase()+Gg},SA=(e=16,t=a2.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function jA(e){return!!(e&&_t(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const CA=e=>{const t=new Array(10),n=(r,i)=>{if(dc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=la(r)?[]:{};return Mo(r,(o,s)=>{const l=n(o,i+1);!So(l)&&(a[s]=l)}),t[i]=void 0,a}}return r};return n(e,0)},kA=ln("AsyncFunction"),TA=e=>e&&(dc(e)||_t(e))&&_t(e.then)&&_t(e.catch),o2=((e,t)=>e?setImmediate:t?((n,r)=>(Vr.addEventListener("message",({source:i,data:a})=>{i===Vr&&a===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Vr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_t(Vr.postMessage)),AA=typeof queueMicrotask<"u"?queueMicrotask.bind(Vr):typeof process<"u"&&process.nextTick||o2,L={isArray:la,isArrayBuffer:e2,isBuffer:UT,isFormData:ZT,isArrayBufferView:HT,isString:qT,isNumber:t2,isBoolean:WT,isObject:dc,isPlainObject:Ls,isReadableStream:tA,isRequest:nA,isResponse:rA,isHeaders:iA,isUndefined:So,isDate:YT,isFile:KT,isBlob:XT,isRegExp:vA,isFunction:_t,isStream:JT,isURLSearchParams:eA,isTypedArray:fA,isFileList:QT,forEach:Mo,merge:rf,extend:oA,trim:aA,stripBOM:sA,inherits:lA,toFlatObject:cA,kindOf:lc,kindOfTest:ln,endsWith:dA,toArray:uA,forEachEntry:pA,matchAll:hA,isHTMLForm:mA,hasOwnProperty:Pg,hasOwnProp:Pg,reduceDescriptors:i2,freezeMethods:xA,toObjectSet:yA,toCamelCase:gA,noop:wA,toFiniteNumber:bA,findKey:n2,global:Vr,isContextDefined:r2,ALPHABET:a2,generateString:SA,isSpecCompliantForm:jA,toJSONObject:CA,isAsyncFn:kA,isThenable:TA,setImmediate:o2,asap:AA};function ne(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}L.inherits(ne,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.status}}});const s2=ne.prototype,l2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{l2[e]={value:e}});Object.defineProperties(ne,l2);Object.defineProperty(s2,"isAxiosError",{value:!0});ne.from=(e,t,n,r,i,a)=>{const o=Object.create(s2);return L.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ne.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const EA=null;function af(e){return L.isPlainObject(e)||L.isArray(e)}function c2(e){return L.endsWith(e,"[]")?e.slice(0,-2):e}function _g(e,t,n){return e?e.concat(t).map(function(i,a){return i=c2(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function PA(e){return L.isArray(e)&&!e.some(af)}const GA=L.toFlatObject(L,{},null,function(t){return/^is[A-Z]/.test(t)});function uc(e,t,n){if(!L.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,w){return!L.isUndefined(w[y])});const r=n.metaTokens,i=n.visitor||u,a=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function d(g){if(g===null)return"";if(L.isDate(g))return g.toISOString();if(!l&&L.isBlob(g))throw new ne("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(g)||L.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,y,w){let x=g;if(g&&!w&&typeof g=="object"){if(L.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(L.isArray(g)&&PA(g)||(L.isFileList(g)||L.endsWith(y,"[]"))&&(x=L.toArray(g)))return y=c2(y),x.forEach(function(m,b){!(L.isUndefined(m)||m===null)&&t.append(o===!0?_g([y],b,a):o===null?y:y+"[]",d(m))}),!1}return af(g)?!0:(t.append(_g(w,y,a),d(g)),!1)}const f=[],p=Object.assign(GA,{defaultVisitor:u,convertValue:d,isVisitable:af});function v(g,y){if(!L.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),L.forEach(g,function(x,h){(!(L.isUndefined(x)||x===null)&&i.call(t,x,L.isString(h)?h.trim():h,y,p))===!0&&v(x,y?y.concat(h):[h])}),f.pop()}}if(!L.isObject(e))throw new TypeError("data must be an object");return v(e),t}function zg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function rh(e,t){this._pairs=[],e&&uc(e,this,t)}const d2=rh.prototype;d2.append=function(t,n){this._pairs.push([t,n])};d2.toString=function(t){const n=t?function(r){return t.call(this,r,zg)}:zg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function _A(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function u2(e,t,n){if(!t)return e;const r=n&&n.encode||_A;L.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let a;if(i?a=i(t,n):a=L.isURLSearchParams(t)?t.toString():new rh(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Lg{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,function(r){r!==null&&t(r)})}}const f2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zA=typeof URLSearchParams<"u"?URLSearchParams:rh,LA=typeof FormData<"u"?FormData:null,MA=typeof Blob<"u"?Blob:null,OA={isBrowser:!0,classes:{URLSearchParams:zA,FormData:LA,Blob:MA},protocols:["http","https","file","blob","url","data"]},ih=typeof window<"u"&&typeof document<"u",of=typeof navigator=="object"&&navigator||void 0,RA=ih&&(!of||["ReactNative","NativeScript","NS"].indexOf(of.product)<0),IA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",DA=ih&&window.location.href||"http://localhost",NA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ih,hasStandardBrowserEnv:RA,hasStandardBrowserWebWorkerEnv:IA,navigator:of,origin:DA},Symbol.toStringTag,{value:"Module"})),ct={...NA,...OA};function VA(e,t){return uc(e,new ct.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return ct.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function FA(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function BA(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function p2(e){function t(n,r,i,a){let o=n[a++];if(o==="__proto__")return!0;const s=Number.isFinite(+o),l=a>=n.length;return o=!o&&L.isArray(i)?i.length:o,l?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!s):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&L.isArray(i[o])&&(i[o]=BA(i[o])),!s)}if(L.isFormData(e)&&L.isFunction(e.entries)){const n={};return L.forEachEntry(e,(r,i)=>{t(FA(r),i,n,0)}),n}return null}function $A(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Oo={transitional:f2,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=L.isObject(t);if(a&&L.isHTMLForm(t)&&(t=new FormData(t)),L.isFormData(t))return i?JSON.stringify(p2(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t)||L.isReadableStream(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return VA(t,this.formSerializer).toString();if((s=L.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return uc(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),$A(t)):t}],transformResponse:[function(t){const n=this.transitional||Oo.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(t)||L.isReadableStream(t))return t;if(t&&L.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?ne.from(s,ne.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],e=>{Oo.headers[e]={}});const UA=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),HA=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&UA[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Mg=Symbol("internals");function Ta(e){return e&&String(e).trim().toLowerCase()}function Ms(e){return e===!1||e==null?e:L.isArray(e)?e.map(Ms):String(e)}function qA(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const WA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cd(e,t,n,r,i){if(L.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!L.isString(t)){if(L.isString(r))return t.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(t)}}function YA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function KA(e,t){const n=L.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class Ct{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(s,l,d){const u=Ta(l);if(!u)throw new Error("header name must be a non-empty string");const f=L.findKey(i,u);(!f||i[f]===void 0||d===!0||d===void 0&&i[f]!==!1)&&(i[f||l]=Ms(s))}const o=(s,l)=>L.forEach(s,(d,u)=>a(d,u,l));if(L.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(L.isString(t)&&(t=t.trim())&&!WA(t))o(HA(t),n);else if(L.isHeaders(t))for(const[s,l]of t.entries())a(l,s,r);else t!=null&&a(n,t,r);return this}get(t,n){if(t=Ta(t),t){const r=L.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return qA(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ta(t),t){const r=L.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Cd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=Ta(o),o){const s=L.findKey(r,o);s&&(!n||Cd(r,r[s],s,n))&&(delete r[s],i=!0)}}return L.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Cd(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return L.forEach(this,(i,a)=>{const o=L.findKey(r,a);if(o){n[o]=Ms(i),delete n[a];return}const s=t?YA(a):String(a).trim();s!==a&&delete n[a],n[s]=Ms(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Mg]=this[Mg]={accessors:{}}).accessors,i=this.prototype;function a(o){const s=Ta(o);r[s]||(KA(i,o),r[s]=!0)}return L.isArray(t)?t.forEach(a):a(t),this}}Ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(Ct.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});L.freezeMethods(Ct);function kd(e,t){const n=this||Oo,r=t||n,i=Ct.from(r.headers);let a=r.data;return L.forEach(e,function(s){a=s.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function h2(e){return!!(e&&e.__CANCEL__)}function ca(e,t,n){ne.call(this,e??"canceled",ne.ERR_CANCELED,t,n),this.name="CanceledError"}L.inherits(ca,ne,{__CANCEL__:!0});function m2(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ne("Request failed with status code "+n.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function XA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function QA(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(l){const d=Date.now(),u=r[a];o||(o=d),n[i]=l,r[i]=d;let f=a,p=0;for(;f!==i;)p+=n[f++],f=f%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),d-o<t)return;const v=u&&d-u;return v?Math.round(p*1e3/v):void 0}}function JA(e,t){let n=0,r=1e3/t,i,a;const o=(d,u=Date.now())=>{n=u,i=null,a&&(clearTimeout(a),a=null),e.apply(null,d)};return[(...d)=>{const u=Date.now(),f=u-n;f>=r?o(d,u):(i=d,a||(a=setTimeout(()=>{a=null,o(i)},r-f)))},()=>i&&o(i)]}const Al=(e,t,n=3)=>{let r=0;const i=QA(50,250);return JA(a=>{const o=a.loaded,s=a.lengthComputable?a.total:void 0,l=o-r,d=i(l),u=o<=s;r=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:d||void 0,estimated:d&&s&&u?(s-o)/d:void 0,event:a,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(f)},n)},Og=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Rg=e=>(...t)=>L.asap(()=>e(...t)),ZA=ct.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ct.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ct.origin),ct.navigator&&/(msie|trident)/i.test(ct.navigator.userAgent)):()=>!0,eE=ct.hasStandardBrowserEnv?{write(e,t,n,r,i,a){const o=[e+"="+encodeURIComponent(t)];L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),a===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function tE(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function nE(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function g2(e,t){return e&&!tE(t)?nE(e,t):t}const Ig=e=>e instanceof Ct?{...e}:e;function ei(e,t){t=t||{};const n={};function r(d,u,f,p){return L.isPlainObject(d)&&L.isPlainObject(u)?L.merge.call({caseless:p},d,u):L.isPlainObject(u)?L.merge({},u):L.isArray(u)?u.slice():u}function i(d,u,f,p){if(L.isUndefined(u)){if(!L.isUndefined(d))return r(void 0,d,f,p)}else return r(d,u,f,p)}function a(d,u){if(!L.isUndefined(u))return r(void 0,u)}function o(d,u){if(L.isUndefined(u)){if(!L.isUndefined(d))return r(void 0,d)}else return r(void 0,u)}function s(d,u,f){if(f in t)return r(d,u);if(f in e)return r(void 0,d)}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(d,u,f)=>i(Ig(d),Ig(u),f,!0)};return L.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=l[u]||i,p=f(e[u],t[u],u);L.isUndefined(p)&&f!==s||(n[u]=p)}),n}const v2=e=>{const t=ei({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;t.headers=o=Ct.from(o),t.url=u2(g2(t.baseURL,t.url),e.params,e.paramsSerializer),s&&o.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let l;if(L.isFormData(n)){if(ct.hasStandardBrowserEnv||ct.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[d,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...u].join("; "))}}if(ct.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(t)),r||r!==!1&&ZA(t.url))){const d=i&&a&&eE.read(a);d&&o.set(i,d)}return t},rE=typeof XMLHttpRequest<"u",iE=rE&&function(e){return new Promise(function(n,r){const i=v2(e);let a=i.data;const o=Ct.from(i.headers).normalize();let{responseType:s,onUploadProgress:l,onDownloadProgress:d}=i,u,f,p,v,g;function y(){v&&v(),g&&g(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let w=new XMLHttpRequest;w.open(i.method.toUpperCase(),i.url,!0),w.timeout=i.timeout;function x(){if(!w)return;const m=Ct.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),S={data:!s||s==="text"||s==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:m,config:e,request:w};m2(function(T){n(T),y()},function(T){r(T),y()},S),w=null}"onloadend"in w?w.onloadend=x:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(x)},w.onabort=function(){w&&(r(new ne("Request aborted",ne.ECONNABORTED,e,w)),w=null)},w.onerror=function(){r(new ne("Network Error",ne.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const S=i.transitional||f2;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),r(new ne(b,S.clarifyTimeoutError?ne.ETIMEDOUT:ne.ECONNABORTED,e,w)),w=null},a===void 0&&o.setContentType(null),"setRequestHeader"in w&&L.forEach(o.toJSON(),function(b,S){w.setRequestHeader(S,b)}),L.isUndefined(i.withCredentials)||(w.withCredentials=!!i.withCredentials),s&&s!=="json"&&(w.responseType=i.responseType),d&&([p,g]=Al(d,!0),w.addEventListener("progress",p)),l&&w.upload&&([f,v]=Al(l),w.upload.addEventListener("progress",f),w.upload.addEventListener("loadend",v)),(i.cancelToken||i.signal)&&(u=m=>{w&&(r(!m||m.type?new ca(null,e,w):m),w.abort(),w=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const h=XA(i.url);if(h&&ct.protocols.indexOf(h)===-1){r(new ne("Unsupported protocol "+h+":",ne.ERR_BAD_REQUEST,e));return}w.send(a||null)})},aE=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const a=function(d){if(!i){i=!0,s();const u=d instanceof Error?d:this.reason;r.abort(u instanceof ne?u:new ca(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,a(new ne(`timeout ${t} of ms exceeded`,ne.ETIMEDOUT))},t);const s=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(a):d.removeEventListener("abort",a)}),e=null)};e.forEach(d=>d.addEventListener("abort",a));const{signal:l}=r;return l.unsubscribe=()=>L.asap(s),l}},oE=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},sE=async function*(e,t){for await(const n of lE(e))yield*oE(n,t)},lE=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Dg=(e,t,n,r)=>{const i=sE(e,t);let a=0,o,s=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:d,value:u}=await i.next();if(d){s(),l.close();return}let f=u.byteLength;if(n){let p=a+=f;n(p)}l.enqueue(new Uint8Array(u))}catch(d){throw s(d),d}},cancel(l){return s(l),i.return()}},{highWaterMark:2})},fc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",x2=fc&&typeof ReadableStream=="function",cE=fc&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),y2=(e,...t)=>{try{return!!e(...t)}catch{return!1}},dE=x2&&y2(()=>{let e=!1;const t=new Request(ct.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ng=64*1024,sf=x2&&y2(()=>L.isReadableStream(new Response("").body)),El={stream:sf&&(e=>e.body)};fc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!El[t]&&(El[t]=L.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new ne(`Response type '${t}' is not supported`,ne.ERR_NOT_SUPPORT,r)})})})(new Response);const uE=async e=>{if(e==null)return 0;if(L.isBlob(e))return e.size;if(L.isSpecCompliantForm(e))return(await new Request(ct.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(L.isArrayBufferView(e)||L.isArrayBuffer(e))return e.byteLength;if(L.isURLSearchParams(e)&&(e=e+""),L.isString(e))return(await cE(e)).byteLength},fE=async(e,t)=>{const n=L.toFiniteNumber(e.getContentLength());return n??uE(t)},pE=fc&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:d,headers:u,withCredentials:f="same-origin",fetchOptions:p}=v2(e);d=d?(d+"").toLowerCase():"text";let v=aE([i,a&&a.toAbortSignal()],o),g;const y=v&&v.unsubscribe&&(()=>{v.unsubscribe()});let w;try{if(l&&dE&&n!=="get"&&n!=="head"&&(w=await fE(u,r))!==0){let S=new Request(t,{method:"POST",body:r,duplex:"half"}),C;if(L.isFormData(r)&&(C=S.headers.get("content-type"))&&u.setContentType(C),S.body){const[T,A]=Og(w,Al(Rg(l)));r=Dg(S.body,Ng,T,A)}}L.isString(f)||(f=f?"include":"omit");const x="credentials"in Request.prototype;g=new Request(t,{...p,signal:v,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:x?f:void 0});let h=await fetch(g);const m=sf&&(d==="stream"||d==="response");if(sf&&(s||m&&y)){const S={};["status","statusText","headers"].forEach(G=>{S[G]=h[G]});const C=L.toFiniteNumber(h.headers.get("content-length")),[T,A]=s&&Og(C,Al(Rg(s),!0))||[];h=new Response(Dg(h.body,Ng,T,()=>{A&&A(),y&&y()}),S)}d=d||"text";let b=await El[L.findKey(El,d)||"text"](h,e);return!m&&y&&y(),await new Promise((S,C)=>{m2(S,C,{data:b,headers:Ct.from(h.headers),status:h.status,statusText:h.statusText,config:e,request:g})})}catch(x){throw y&&y(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new ne("Network Error",ne.ERR_NETWORK,e,g),{cause:x.cause||x}):ne.from(x,x&&x.code,e,g)}}),lf={http:EA,xhr:iE,fetch:pE};L.forEach(lf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Vg=e=>`- ${e}`,hE=e=>L.isFunction(e)||e===null||e===!1,w2={getAdapter:e=>{e=L.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){n=e[a];let o;if(r=n,!hE(n)&&(r=lf[(o=String(n)).toLowerCase()],r===void 0))throw new ne(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+a]=r}if(!r){const a=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(Vg).join(`
`):" "+Vg(a[0]):"as no adapter specified";throw new ne("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:lf};function Td(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ca(null,e)}function Fg(e){return Td(e),e.headers=Ct.from(e.headers),e.data=kd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),w2.getAdapter(e.adapter||Oo.adapter)(e).then(function(r){return Td(e),r.data=kd.call(e,e.transformResponse,r),r.headers=Ct.from(r.headers),r},function(r){return h2(r)||(Td(e),r&&r.response&&(r.response.data=kd.call(e,e.transformResponse,r.response),r.response.headers=Ct.from(r.response.headers))),Promise.reject(r)})}const b2="1.7.9",pc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{pc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Bg={};pc.transitional=function(t,n,r){function i(a,o){return"[Axios v"+b2+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,s)=>{if(t===!1)throw new ne(i(o," has been removed"+(n?" in "+n:"")),ne.ERR_DEPRECATED);return n&&!Bg[o]&&(Bg[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,s):!0}};pc.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function mE(e,t,n){if(typeof e!="object")throw new ne("options must be an object",ne.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const s=e[a],l=s===void 0||o(s,a,e);if(l!==!0)throw new ne("option "+a+" must be "+l,ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ne("Unknown option "+a,ne.ERR_BAD_OPTION)}}const Os={assertOptions:mE,validators:pc},dn=Os.validators;class qr{constructor(t){this.defaults=t,this.interceptors={request:new Lg,response:new Lg}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const a=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ei(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Os.assertOptions(r,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:Os.assertOptions(i,{encode:dn.function,serialize:dn.function},!0)),Os.assertOptions(n,{baseUrl:dn.spelling("baseURL"),withXsrfToken:dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=a&&L.merge(a.common,a[n.method]);a&&L.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=Ct.concat(o,a);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const d=[];this.interceptors.response.forEach(function(y){d.push(y.fulfilled,y.rejected)});let u,f=0,p;if(!l){const g=[Fg.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,d),p=g.length,u=Promise.resolve(n);f<p;)u=u.then(g[f++],g[f++]);return u}p=s.length;let v=n;for(f=0;f<p;){const g=s[f++],y=s[f++];try{v=g(v)}catch(w){y.call(this,w);break}}try{u=Fg.call(this,v)}catch(g){return Promise.reject(g)}for(f=0,p=d.length;f<p;)u=u.then(d[f++],d[f++]);return u}getUri(t){t=ei(this.defaults,t);const n=g2(t.baseURL,t.url);return u2(n,t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(t){qr.prototype[t]=function(n,r){return this.request(ei(r||{},{method:t,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,s){return this.request(ei(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}qr.prototype[t]=n(),qr.prototype[t+"Form"]=n(!0)});class ah{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(s=>{r.subscribe(s),a=s}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,s){r.reason||(r.reason=new ca(a,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new ah(function(i){t=i}),cancel:t}}}function gE(e){return function(n){return e.apply(null,n)}}function vE(e){return L.isObject(e)&&e.isAxiosError===!0}const cf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(cf).forEach(([e,t])=>{cf[t]=e});function S2(e){const t=new qr(e),n=Zw(qr.prototype.request,t);return L.extend(n,qr.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return S2(ei(e,i))},n}const $e=S2(Oo);$e.Axios=qr;$e.CanceledError=ca;$e.CancelToken=ah;$e.isCancel=h2;$e.VERSION=b2;$e.toFormData=uc;$e.AxiosError=ne;$e.Cancel=$e.CanceledError;$e.all=function(t){return Promise.all(t)};$e.spread=gE;$e.isAxiosError=vE;$e.mergeConfig=ei;$e.AxiosHeaders=Ct;$e.formToJSON=e=>p2(L.isHTMLForm(e)?new FormData(e):e);$e.getAdapter=w2.getAdapter;$e.HttpStatusCode=cf;$e.default=$e;const xE=Wn`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,yE=k.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
`,wE=k.button`
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
`,bE=k.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 300px;
  padding: 10px 20px 20px 20px ;
  background-color: #fbfbfb;
  border-radius: 25px 25px 0 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  animation: ${xE} 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  font-family: var(--font--comfortaa);
`,SE=k.button`
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
`,jE=k.div`
  background-image: url('https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d8641711-b18b-4d15-33a0-110225c0cc00/public');
  border-radius: 20px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: var(--font--comfortaa)!important;
`,$g=k.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${e=>e.sent?"flex-end":"flex-start"};
  margin-bottom: 10px;
  font-weight: 200;
  font-size: 14px;
  font-family: var(--font--comfortaa)!important;
`,CE=k.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${e=>e.sent?"0":"8px"};
  margin-left: ${e=>e.sent?"8px":"0"};
`,kE=k.div`
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
`,TE=k.div`
  font-size: 10px;
  color: #b6b6b6;
  font-weight: 200;
  margin-bottom: 5px;
  font-family: var(--font--comfortaa)!important;
`,AE=k.div`
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
`,EE=k.div`
  display: flex;
  gap: 10px;
  font-family: var(--font--comfortaa)!important;
`,PE=k.input`
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
`,GE=k.button`
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

Para um atendimento mais rápido, poderia me informar o seu número de WhatsApp? 🙂‍↕`,sent:!1}]),p(!0)},1500);return}if(f&&d===null){const T=/^\d+$/.test(C),A=T?C:"não informado";u(A),setTimeout(()=>{l(!1),o(G=>[...G,{id:Date.now(),text:T?c.jsxs("span",{children:["Muito obrigado, aumigo🐕!",c.jsx("br",{}),c.jsx("br",{}),"Vamos entrar em contato com você em breve."]}):"Você não informou um número válido.",sent:!1}]),T?($e.post(x,{phone:A}),setTimeout(()=>{o(G=>[...G,{id:Date.now(),text:c.jsxs("span",{children:["Para facilitar, basta clicar neste link a seguir e conversar conosco pelo WhatsApp:"," ",c.jsx("br",{}),c.jsx("br",{}),c.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",children:"Oiê, vamos conversar!"})]}),sent:!1}]),setTimeout(()=>{g(!0)},500)},1500)):setTimeout(()=>{g(!0)},500),p(!1)},1500);return}l(!1)},m=S=>{S.key==="Enter"&&h()},b=()=>{n(!1)};return c.jsxs(yE,{children:[c.jsx(wE,{onClick:()=>window.open(y,"_blank"),children:c.jsx(m7,{})}),t&&c.jsxs(bE,{children:[c.jsx(SE,{onClick:b,children:c.jsx(BT,{})}),c.jsxs(jE,{children:[a.map(S=>c.jsxs($g,{sent:S.sent,children:[!S.sent&&c.jsx(CE,{src:w,alt:"Bot"}),c.jsxs(kE,{sent:S.sent,children:[!S.sent&&c.jsx(TE,{children:"Pousada Le Ange"}),c.jsx("div",{children:S.text})]})]},S.id)),s&&c.jsx($g,{children:c.jsx(AE,{})})]}),!v&&c.jsxs(EE,{children:[c.jsx(PE,{type:"text",placeholder:"Digite sua mensagem",value:r,onChange:S=>i(S.target.value),onKeyDown:m}),c.jsx(GE,{onClick:h,children:"Enviar"})]})]})]})},_E=k(Oe.button)`
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
`,zE=k(Oe.footer)`
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
`,LE=k.div`
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
`,ME=k.div`
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
`,OE=k.section`
    display: flex;
    width: 100%;
    height: 35vh;

    @media (max-width: 768px){
        height: auto;
        flex-direction: column;
        gap: 25px;
    }
`,RE=k.section`
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
`,IE=k.section`
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
`,DE=k.hr`
    width: 100%;
    margin-bottom: -50px;
`,NE=k.div`
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
`,Ar=()=>{const e=j.useRef(null),t=s7(e,{once:!0}),[n,r]=j.useState(""),[i,a]=j.useState(""),[o,s]=j.useState(""),l=()=>`user_${Math.random().toString(36).substr(2,9)}_${Date.now()}`,d=()=>{const f=new URLSearchParams(window.location.search);return{utm_source:f.get("utm_source")||"organico",utm_medium:f.get("utm_medium")||"",utm_campaign:f.get("utm_campaign")||"",utm_term:f.get("utm_term")||"",utm_content:f.get("utm_content")||""}},u=async f=>{if(f.preventDefault(),!n||!i||!o){alert("Por favor, preencha todos os campos.");return}const v={id:l(),name:String(n).trim(),email:String(i).trim(),tel:String(o).trim(),conversion_url:window.location.href,...d()};try{const g=await fetch("https://hook.us1.make.com/e79ttwjdwv9soeppgqnu5rbnpk9l828e",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),y=await g.text();g.ok?(alert("Dados enviados com sucesso!"),r(""),a(""),s(""),window.open("https://wa.link/dojlwi","_blank")):(console.error("Erro de resposta:",y),alert("Erro ao enviar os dados: "+y))}catch(g){console.error("Erro:",g),alert("Erro ao enviar os dados. Tente novamente.")}};return c.jsxs(c.Fragment,{children:[c.jsxs(zE,{ref:e,children:[c.jsxs(OE,{children:[c.jsxs(LE,{children:[c.jsx("h1",{"data-aos":"fade-up",children:"Fale agora com a nossa Central de Reservas"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"100",children:["As suas informações são mantidas em segurança e utilizadas apenas para entrar em contato. Entenda melhor como tratamos os seus dados pela nossa",c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"política de privacidade"}),"."]}),c.jsx("hr",{"data-aos":"fade-right","data-aos-delay":"200"}),c.jsxs("div",{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"300",children:"Siga-nos"}),c.jsxs("div",{children:[c.jsx("a",{href:"https://instagram.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(dT,{})}),c.jsx("a",{href:"https://tiktok.com/@pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"450",children:c.jsx(DT,{})}),c.jsx("a",{href:"https://pinterest.com/pousadaleange",target:"_blank",rel:"noopener noreferrer","data-aos":"fade-up","data-aos-delay":"500",children:c.jsx(IT,{})})]})]})]}),c.jsx(ME,{"data-aos":"fade-down","data-aos-delay":"500",children:c.jsxs("form",{id:"contactForm",onSubmit:u,children:[c.jsx("input",{type:"text",id:"name",placeholder:"Digite o seu nome",value:n,onChange:f=>r(f.target.value),"data-aos":"fade-up","data-aos-delay":"600"}),c.jsx("input",{type:"email",id:"email",placeholder:"Preciso saber o seu e-mail também",value:i,onChange:f=>a(f.target.value),"data-aos":"fade-up","data-aos-delay":"700"}),c.jsx("input",{type:"tel",id:"tel",placeholder:"Por fim, o seu número de WhatsApp",value:o,onChange:f=>s(f.target.value),"data-aos":"fade-up","data-aos-delay":"800"}),c.jsxs(_E,{type:"submit","data-aos":"fade-up","data-aos-delay":"1000",children:[c.jsx(NT,{size:20}),c.jsx("span",{children:"Enviar dados para contato"})]})]})})]}),c.jsxs(RE,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0b4e1dd7-194d-4d4c-da16-c16c77281000/public",alt:"Descrição da imagem",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"A pousada mais Pet Friendly, venha conhecer!"})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"50",children:"Mapa do site"}),c.jsxs("a",{href:"#","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(kt,{})," Início "]}),c.jsxs("a",{href:"#/sobre","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(kt,{})," Sobre nós "]}),c.jsxs("a",{href:"#/serra","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(kt,{})," Le Ange Serra "]}),c.jsxs("a",{href:"#/mar","data-aos":"fade-up","data-aos-delay":"250",children:[" ",c.jsx(kt,{})," Le Ange Mar "]}),c.jsxs("a",{href:"#/event","data-aos":"fade-down","data-aos-delay":"300",children:[" ",c.jsx(kt,{})," Eventos "]}),c.jsxs("a",{href:"#/acomodaSerra","data-aos":"fade-up","data-aos-delay":"350",children:[" ",c.jsx(kt,{})," Acomodações Serra "]}),c.jsxs("a",{href:"#/acomodaMar","data-aos":"fade-up","data-aos-delay":"400",children:[" ",c.jsx(kt,{})," Acomodações Mar "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"400",children:"Central de reserva"}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-up","data-aos-delay":"100",children:[" ",c.jsx(kt,{})," WhatsApp "]}),c.jsxs("a",{href:"https://wa.link/dojlwi",target:"_blank","data-aos":"fade-down","data-aos-delay":"150",children:[" ",c.jsx(kt,{})," +55 (21) 99423-0871 "]}),c.jsxs("a",{href:"mailto:pousadaleange@gmail.com",target:"_blank","data-aos":"fade-up","data-aos-delay":"200",children:[" ",c.jsx(kt,{})," pousadaleange@gmail.com "]})]}),c.jsxs("div",{children:[c.jsx("h2",{"data-aos":"fade-up","data-aos-delay":"600",children:"Fique por dentro de tudo"}),c.jsxs("a",{href:"https://www.instagram.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"100",children:[" ",c.jsx(kt,{})," Instagram "]}),c.jsxs("a",{href:"https://www.tiktok.com/@pousadaleange",target:"_blank","data-aos":"fade-up","data-aos-delay":"150",children:[" ",c.jsx(kt,{})," TikTok "]}),c.jsxs("a",{href:"https://br.pinterest.com/pousadaleange/",target:"_blank","data-aos":"fade-down","data-aos-delay":"200",children:[" ",c.jsx(kt,{})," Pinterest "]})]})]}),c.jsxs(IE,{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:"Saiba onde estamos localizados"}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235239.22077211382!2d-43.355636!3d-22.461517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99106a0d4d634d%3A0x5a069366075bf207!2sPousada%20Le%20Ange!5e0!3m2!1spt-BR!2sbr!4v1697101366468!5m2!1spt-BR!2sbr",width:"300",height:"150",style:{border:0,borderRadius:"15px 0px 15px 0px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Serra","data-aos":"fade-left","data-aos-delay":"300"})}),c.jsx("div",{children:c.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.952062952678!2d-41.958707!3d-22.737977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97ab01cac79615%3A0x6b404b4741597da1!2sLeAnge%20Mar!5e0!3m2!1spt-BR!2sus!4v1728577984633!5m2!1spt-BR!2sus",width:"300",height:"150",style:{border:0,borderRadius:"0px 15px 0px 15px"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Mapa da Unidade Mar","data-aos":"fade-right","data-aos-delay":"400"})})]}),c.jsx(DE,{}),c.jsxs(NE,{children:[c.jsxs("p",{children:["Todos os direitos reservados | ",c.jsx(FT,{})," 2024"]}),c.jsx("a",{href:"https://drive.google.com/file/d/1hcfO5CfNmczgpg2h943ytwg9j0SR9Fas/view",target:"_blank",children:"Termos de condições"}),c.jsxs("p",{children:["Desenvolvido por ",c.jsx("b",{children:c.jsx("a",{href:"https://www.linkedin.com/in/aleph-ramos",target:"_blank",children:"Aleph"})})]})]})]}),c.jsx(Cn,{footerRendered:t})]})};function df(e){return J({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.5 14.625c0 .995-.524 1.482-1.5 1.5H6c-.976-.018-1.5-.505-1.5-1.5s.524-1.482 1.5-1.5h12c.976.018 1.5.505 1.5 1.5m-1.5 2.25H6c-.976.018-1.5.505-1.5 1.5s.524 1.482 1.5 1.5h12c.976-.018 1.5-.505 1.5-1.5s-.524-1.482-1.5-1.5m3.75-8.248v-.001c-.976.017-1.5.504-1.5 1.499v8.25c0 .995.524 1.482 1.5 1.5v-.002c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.99-.786-2.964-2.25-2.998m-19.5-.001C.786 8.662 0 9.637 0 11.626v3.75c0 2.984.786 4.446 2.25 4.498v.001c.976-.017 1.5-.504 1.5-1.499v-8.25c0-.995-.524-1.482-1.5-1.5m19.5-.75c0-2.486-1.31-3.705-3.75-3.748v-.002H6v.002c-2.44.043-3.75 1.262-3.75 3.748v.001c1.464.026 2.25.757 2.25 2.249s.786 2.223 2.25 2.249v.001h10.5v-.001c1.464-.026 2.25-.757 2.25-2.249s.786-2.223 2.25-2.249z"},child:[]}]})(e)}function j2(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z"},child:[]},{tag:"path",attr:{d:"M12 5l0 14"},child:[]},{tag:"path",attr:{d:"M4 12l16 0"},child:[]}]})(e)}const VE=oa`
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
`,C2=Wn`
  0% { border-radius: 0 30px 20px 0; }
  25% { border-radius: 20px 0 30px 20px; }
  50% { border-radius: 30px 20px 0 30px; }
  75% { border-radius: 30px 30px 20px 0; }
  100% { border-radius: 0 20px 30px 0; }
`,FE=k.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    border-radius: 25px 0 25px 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1 ), rgba(0, 0, 0, 0)); 
    pointer-events: none;
    animation: ${C2} 5s ease-in-out infinite;
    z-index: 1;

    @media (max-width: 768px){
        border-radius: 20px 0 20px 0;
        animation: none;
    }
`,BE=k.div`
  position: relative;
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  animation: ${C2} 5s ease-in-out infinite;

  @media (max-width: 768px){
    animation: none!important;
    border-radius: 20px 0 20px 0;
    height: 80vh;
  }
`,$E=k.div`
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
`,UE=k.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: var(--font--comfortaa);

  @media (max-width: 768px){
    font-family: var(--font--comfortaa);
    font-size: 1.4rem;
    font-weight: 800;
  }
`,HE=k.p`
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
`,qE=k.div`
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
`,WE=k.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`,YE=({content:e=[],spaceBetween:t=10,autoplayDelay:n=3e3,showPagination:r=!0,showNavigation:i=!0})=>(ql(),c.jsxs(WE,{children:[c.jsx(VE,{}),c.jsx(on,{modules:[kr,Tr,Yn],navigation:i,pagination:!1,spaceBetween:t,loop:!0,slidesPerView:1,autoplay:{delay:n,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{640:{slidesPerView:1},1024:{slidesPerView:3}},children:e.map((a,o)=>c.jsxs(sn,{children:[c.jsx(FE,{}),c.jsx(BE,{style:{backgroundImage:`url(${a.backgroundImage})`},children:c.jsxs($E,{"data-aos":"fade-down","data-aos-delay":"100",children:[c.jsx(UE,{children:a.title}),c.jsx(HE,{children:a.subtitle}),c.jsx(qE,{children:a.features.map((s,l)=>c.jsxs("span",{children:[s.icon," ",s.text]},l))}),c.jsx(eh,{onClick:()=>{const s=`/leange/#/acomoda${a.id}`;window.location.href=s},text:"Conhecer essa acomodação",suiteId:a.id})]})})]},o))})]})),KE=k.div`
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
`,da=()=>c.jsx(c.Fragment,{children:c.jsxs(KE,{children:[c.jsxs("div",{children:[c.jsxs("h1",{children:["A nossa pousada foi feita para ",c.jsx("b",{children:"você"})," e o ",c.jsx("b",{children:"seu pet!"})]}),c.jsxs("ol",{children:[c.jsxs("li",{children:["Para pessoas que vêem o ",c.jsx("b",{children:"pet como parte da família."})]}),c.jsxs("li",{children:["Para pessoas que querem proporcionar aos seus pets a ",c.jsx("b",{children:"liberdade"})," de estarem sempre soltos."]}),c.jsxs("li",{children:["Para garantir uma experiência segura, ",c.jsx("b",{children:"não aceitamos menores de 13 anos"}),", mesmo que acompanhado dos pais."]})]}),c.jsxs("ol",{children:[c.jsxs("li",{children:["Vale ressaltar que fêmeas ",c.jsx("b",{children:"NÃO"})," podem estar no cio;"]}),c.jsxs("li",{children:["O chachorro precisa ",c.jsx("b",{children:"ser socializado"}),", caso contrário será necessário mantê-lo na guia."]}),c.jsxs("li",{children:["Não trabalhamos com ",c.jsx("b",{children:"Day Use"}),"."]})]}),c.jsx(lt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Reservar agora",backgroundColor:"transparent",borderColor:"var(--color--white)",hoverColor:"var(--color--white)",border:"1px solid",color:"var(--color--black)"})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"IMAGE"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"IMAGE"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public",alt:"IMAGE"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public",alt:"IMAGE"})]})]})]})}),XE=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public",alt:"Mulher na rede",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",alt:"Foto da pousada le ange vista de cima",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",alt:"2 cachorros na piscina",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f4a1515f-dd60-47ad-f799-1a1813af9300/public",alt:"Foto da pousada vista de baixo",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public",alt:"Foto da sala de estar da pousada le ange serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",alt:"2 cachorros na cama no meio do quintal",loading:"lazy"}],QE=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",alt:"Foto da pousada le ange mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c15257b6-956b-4f1d-ee81-9870ce695d00/public",alt:"2 pessoas na rede na pousada le ange mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Foto de churrasco",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Cachorro olhando para a câmera",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",alt:"Pousada le ange mar vista de cima",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public",alt:"Sala de estar na le ange mar com o quadro na parede",loading:"lazy"}],JE=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a4f0a292-2de1-4a0a-9c78-b40450f19a00/public",alt:"Pessoa na rede",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",alt:"2 cachorros na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public",alt:"Sala de estar na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",alt:"Hot Tube na le ange serra",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/81b9f4b9-48ac-4aeb-76be-57b13ddd7300/public",alt:"2 pessoas bebendo na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fabb090f-5470-4b80-d24e-212cea38ef00/public",alt:"2 pessoas na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/aee972d8-1698-4318-7f15-6ecd607c8f00/public",alt:"Sala de estar da le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/345b0279-69a3-47ee-31f9-a018b8459000/public",alt:"Por do sol na le ange",label:"Le Ange Serra",loading:"lazy"}],ZE=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6da9939-7a24-41a2-9002-2f3da2707f00/public",alt:"Foto do quarto na le ange",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Foto de churrasqueira na le ange mar",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro com a cabeça recostada na mão do tutor",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca87e74f-2193-4308-4ce7-737e3d878f00/public",alt:"Uma pessoa e um cachorro na piscina",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c7b74408-cebf-4bb7-dc9a-36170887c100/public",alt:"2 taças com um fundo de por do sol",label:"Le Ange Mar",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a310fb24-c12e-431f-e5d1-6a12b8ff7500/public",alt:"2 cachorros em uma cama no meio do jardim",label:"Le Ange Serra",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8565ac88-9f3c-4932-ef3a-cfff9c543600/public",alt:"Foto do quadro de cachorro na le ange mar",label:"Le Ange Serra",loading:"lazy"}],Ug=k.section`
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


`,eP=k.div`
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
`,tP=k.aside`
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
`,nP=[{id:"Serra#suite1",title:"Suíte Superior 1",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(ci,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ht,{}),text:"Lareira"}]},{id:"Serra#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(ci,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ht,{}),text:"Lareira"}]},{id:"Serra#suite6",title:"Suíte Master 6",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public",features:[{icon:c.jsx(ke,{}),text:"93m²"},{icon:c.jsx(ci,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(df,{}),text:"Couch lounge"},{icon:c.jsx(j2,{}),text:"Bay window"}]},{id:"Mar#suite6",title:"Suíte Standard 6",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(ci,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ht,{}),text:"Lareira"}]},{id:"Mar#suite2",title:"Suíte Standard 2",subtitle:"Pousada Le Ange Mar | Búzios - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2c65f24d-c113-4ea7-def4-783519605e00/public",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(ci,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(Pe,{}),text:"Banheira"},{icon:c.jsx(Le,{}),text:"Smart TV com canais a cabo"},{icon:c.jsx(ht,{}),text:"Lareira"}]},{id:"Serra#suite10",title:"Suíte Master 10",subtitle:"Pousada Le Ange Serra | Miguel Pereira - RJ",backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b3e8e3c-57ba-4e47-dd41-7b4a32d25f00/public",features:[{icon:c.jsx(ke,{}),text:"80m²"},{icon:c.jsx(ci,{}),text:"Ar condicionado"},{icon:c.jsx(De,{}),text:"Cama king size"},{icon:c.jsx(th,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(df,{}),text:"Couch lounge"},{icon:c.jsx(ht,{}),text:"Lareira"}]}],rP=k.section`
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
`,iP=[{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0f8625da-9e5c-4a5a-e289-7351383ead00/public",title:"100% Pet Friendly",description:"Não temos restrições quanto ao porte ou à raça do seu pet, nem cobramos taxas adicionais para a vinda deles. Na Le Ange, o seu pet tem total liberdade para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public",title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um HotTub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public",title:"Piscinas",description:"Nossa piscina aquecida possui um tratamento especial por ozônio com níveis baixíssimos de cloro - aqui, tudo é pensando para o bem-estar da sua pele a do seu pet também!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/179ab52c-353f-442a-ffe5-0a71f6922f00/public",title:"Cozinha",description:"Na sua hospedagem, todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Também, aceitamos todas as restrições alimentares para garantir que todos desfrutem da nossa gastronomia.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra e Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public",title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public",title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public",title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public",title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Serra"},{backgroundImage:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public",title:"Suítes",description:"Nossas suítes são, elegantemente, decoradas. Todas com vistas maravilhosas, banheira de imersão, cama king-size, varanda, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",topLeftText:"Le Ange Mar e Serra"}],aP=k.div`
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

`,oP=k.h1`
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
`,Ad=k.h1`
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

`,ls=k.p`
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
`,sP=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"765,30",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Churrasco no sábado"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Almoço e noite especial"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],lP=k.section`
    height: 80vh;
    margin-bottom: 10vh;
    margin-top: 2.5vh;

    @media (max-width: 768px){
        height: auto;
        margin-bottom: 5vh;
        margin-top: 5vh;
    }
    
`,cP=k.section`
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
`,Hg=k.b`
    color: var(--color--green);
`,Ed=k.b`
    color: var(--color--blue);
`,dP=k.div`
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
`;const uP=k.div`
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
`,fP=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!0})},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Início - Pousada Le Ange"})}),c.jsxs(uP,{children:[c.jsx("a",{href:"/#/mar",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b3e6c25b-9ed6-4a84-5ee0-3ed539b29b00/public"})}),c.jsx("a",{href:"/#/serra",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/565f57fa-9f92-434e-7e76-192ec1299700/public"})})]}),c.jsx(Cn,{}),c.jsxs(eP,{containerAnimation:{opacity:0,scale:.8},titleAnimation:{opacity:0,y:-50},textAnimation:{opacity:0,x:50},buttonAnimation:{opacity:0,scale:.5},animationDuration:.7,children:[c.jsxs(tP,{children:[c.jsxs("h1",{"data-aos":"fade-up",children:["Pousada",c.jsx(Ed,{children:" 100% Pet Friendly"})," que aceita humanos de estimação"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"2 unidades, 2 cenários incomparáveis"})]}),c.jsxs(Ug,{"data-aos":"fade-up",children:[c.jsx(Tg,{content:XE,spaceBetween:20,slidesPerView:1,height:"60vh",contentType:"image",showPagination:!1}),c.jsx(Eg,{title:"Le Ange Serra - Miguel Pereira RJ",text:"Na Le Ange Serra, costumamos dizer que a hospedagem é muito mais do que um final de semana para relaxar. É uma experiência única ao lado do seu pet entre as belezas naturais da Mata Atlântica, para que você colecione os melhores momentos ao lado dele!",borderColor:"var(--color--green)",borderRadius:"30px",buttonColor:"var(--color--green)",buttonBorder:"1px solid var(--color--black)",targetPage:"/serra",idade:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsxs(Ug,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Eg,{title:"Le Ange Mar - Búzios RJ",text:"Situada no coração do Arpoador da Praia Rasa, na Le Ange Mar, oferecemos uma experiência memorável, onde a praia está a poucos passos da pousada e o seu pet é, calorosamente, recebido para momentos especiais à beira-mar.",borderColor:"var(--color--blue)",borderRadius:"30px",buttonColor:"var(--color--blue)",buttonBorder:"1px solid var(--color--black)",targetPage:"/mar",idade:"*Só permitimos crianças acima de 13 anos!"}),c.jsx(Tg,{content:QE,spaceBetween:20,slidesPerView:1,width:"60%",height:"60vh",contentType:"image",showPagination:!1})]})]}),c.jsx(da,{}),c.jsxs(rP,{children:[c.jsxs("div",{children:[c.jsxs(oP,{"data-aos":"fade-up",children:["Nossas suítes ",c.jsx(Hg,{children:"mais procuradas"})," "]}),c.jsx(ls,{"data-aos":"fade-up","data-aos-delay":"200",children:"Já consegue se imaginar dormindo aqui ao lado do seu pet?"})]}),c.jsx(YE,{content:nP})]}),c.jsxs(aP,{children:[c.jsxs("div",{children:[c.jsxs(Ad,{"data-aos":"fade-up",children:["Mais que Pet Friendly, ",c.jsx(Ed,{children:"Pet Lovers"})]}),c.jsx(ls,{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência"})]}),c.jsx(CT,{content:iP,spaceBetween:20,width:"100%",height:"70vh",showPagination:!1,showNavigation:!0})]}),c.jsxs("div",{children:[c.jsxs(Ad,{"data-aos":"fade-up",children:[" ",c.jsx(Hg,{children:"Viva"})," essa experiência "]}),c.jsx(ls,{"data-aos":"fade-up","data-aos-delay":"200",children:"Alguns dos nossos momentos"})]}),c.jsxs(lP,{"data-aos":"fade-in",children:[c.jsx(nf,{images:JE}),c.jsx(nf,{images:ZE,reverse:!0})]}),c.jsx(dP,{children:c.jsx(lt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva!"})}),c.jsxs("div",{children:[c.jsxs(Ad,{"data-aos":"fade-up",children:["Conheça nossos pacotes e ",c.jsx(Ed,{children:"noites especiais"})," "]}),c.jsx(ls,{"data-aos":"fade-up","data-aos-delay":"200",children:"Estamos te esperando!"})]}),c.jsx(cP,{"data-aos":"fade-in","data-aos-delay":"250",children:c.jsx(Lo,{events:sP})}),c.jsx(Ar,{})]}));function pP(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"},child:[]},{tag:"path",attr:{d:"M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"},child:[]}]})(e)}function hP(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"},child:[]}]})(e)}function mP(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 0 0-3.01 3.154 19.877 19.877 0 0 0-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z"},child:[]}]})(e)}function qg(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"},child:[]}]})(e)}function Ze(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 2H6c-1.103 0-2 .897-2 2v5h4V6h2v3h10V4c0-1.103-.897-2-2-2zm-8 13H8v-5H4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10H10v5z"},child:[]}]})(e)}function Wg(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"},child:[]}]})(e)}const gP=oa`
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
`,vP=Wn`
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
`,xP=k(Oe.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px 0 30px 0;

    @media (max-width: 768px){
        border-radius: 0 15px 0 20px;
    }
`,yP=k(Oe.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  animation: ${vP} 5s ease-in-out infinite;
  background-image: ${({backgroundImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,wP=k(Oe.div)`
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
`,bP=k(Oe.div)`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--color--white);
    font-family: Arial, sans-serif;
`,SP=k(Oe.h2)`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font--comfortaa);
`,jP=k(Oe.p)`
    font-size: 16px;
    margin: 5px 0;
    font-family: var(--font--avenir);
`,CP=k(Oe.div)`
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
`,kP=k.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 100%;
    }
`,Yg=({content:e=[],contentType:t="image",spaceBetween:n=10,slidesPerView:r=1,height:i="300px",autoplayDelay:a=3e3,showPagination:o=!0,showNavigation:s=!0})=>{const{scrollY:l}=i7(),d=rs(l,[0,300],[0,-30]),u=rs(l,[0,300],[0,-20]),f=rs(l,[0,300],[0,-10]),p=rs(l,[0,300],[0,-5]);return c.jsxs(kP,{children:[c.jsx(gP,{}),c.jsx(on,{modules:[kr,Tr,Yn],navigation:s,pagination:o?{clickable:!0}:!1,spaceBetween:n,loop:!0,slidesPerView:r,autoplay:{delay:a,disableOnInteraction:!1,pauseOnMouseEnter:!0},style:{height:i},breakpoints:{640:{slidesPerView:1,spaceBetween:10,height:"200px"},768:{slidesPerView:1,spaceBetween:20,height:"250px"},1024:{slidesPerView:1,spaceBetween:30,height:"300px"}},children:e.map((v,g)=>c.jsx(sn,{children:t==="image"?c.jsx(xP,{src:v.src,alt:v.alt||`Slide ${g+1}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.7,ease:"easeOut"}}):c.jsxs(yP,{backgroundImage:v.backgroundImage,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.8,ease:"easeOut"},children:[c.jsx(wP,{}),c.jsxs(bP,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[c.jsx(SP,{style:{y:d},children:v.title}),c.jsx(jP,{style:{y:u},children:v.subtitle}),c.jsx(CP,{style:{y:f},children:v.features.map((y,w)=>c.jsxs("span",{children:[y.icon," ",y.text]},w))}),c.jsx(eh,{text:"Conhecer todas as acomodações",style:{y:p}})]})]})},g))})]})};function TP(e){return J({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M239.22,59.44l-45.63,95.82a3.54,3.54,0,0,1-.16.34l-34.21,71.84a8,8,0,1,1-14.44-6.88L173.62,160H40a8,8,0,0,1-5.66-13.66L76.69,104,34.34,61.66A8,8,0,0,1,40,48H232a8,8,0,0,1,7.22,11.44Z"},child:[]}]})(e)}const AP=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,EP=k.section`
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
`,Kg=k.section`
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
`,PP=k.section`
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
`,GP=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/29ccc6ec-9001-47af-4c90-36bc2a2ba300/public",alt:"Cadeira customizada para casamento na le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a5bfa9ba-2a81-4ff5-1bda-74a4993f2500/public",alt:"Foto do bolo de casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2ee18a4-384c-49ed-c38c-d15f243f5700/public",alt:"Foto de uma fogueira na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d887cc1d-1cb7-47c1-06cf-ce55fcb0f400/public",alt:"Espaço de comer na pousada le ange em casamentos",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/94f6e656-dcb6-477a-23d0-79cc3f816e00/public",alt:"Champagne na pousada le ange",loading:"lazy"}],_P=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7da5629-c2cc-411d-3167-702f3a09f300/public",alt:"Cadeiras para casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/08af42b1-ad7c-4d07-8fb5-20e740b9b900/public",alt:"Noivos se casando na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ce391b0-09af-4d6b-d2b5-c38fb17b4000/public",alt:"Comida do casamento na pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/977a5b2b-eea7-45c3-8f86-55a821264800/public",alt:"Imagem do bar no casamento da pousada le ange",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6d4feba5-fa91-4d86-be6d-ed01beefb800/public",alt:"Casamento fotos pousada le ange",loading:"lazy"}],zP=k.section`
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
`,LP=k.section`
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
`,MP=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Eventos - Pousada Le Ange"})}),c.jsx(AP,{}),c.jsx(Cn,{}),c.jsxs(EP,{children:[c.jsxs("div",{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:["Do alto da ",c.jsx("b",{children:c.jsx("a",{href:"#/serra",children:"Serra"})}),",",c.jsx("br",{})," às ondas do ",c.jsx("b",{children:c.jsx("a",{href:"#/mar",children:"Mar"})})]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha celebrar na Le Ange, onde o amor pelos pets encontra o cenário ideal para tornar os seus eventos ainda mais especiais."}),c.jsx(lt,{"data-aos":"fade-up","data-aos-delay":"300",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer meu evento"})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4129a834-fd9a-42db-4770-46bcaae2c200/public",alt:"foto da home da página de eventos","data-aos":"fade-left","data-aos-delay":"150"})})]}),c.jsx(Kg,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(Yg,{content:GP,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsxs(PP,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Sobre nós"})}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(lt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Le Ange Serra - Miguel Pereira/RJ"}),c.jsxs("div",{children:[c.jsx("p",{children:"Fundada em 2018, a Pousada LeAnge nasceu da paixão dos seus fundadores pelo amor aos pets, bem-estar e hospitalidade. Localizada em Miguel Pereira, a LeAnge Serra proporciona uma experiência única na região serrana do Rio de Janeiro, sendo um verdadeiro refúgio entre as belezas naturais da Mata Atlântica."}),c.jsx(lt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva"})]})]})]})]}),c.jsxs(zP,{children:[c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59f2aa9f-b14c-4a77-d44d-19d04bbfad00/public",alt:"foto do casamento","data-aos":"zoom-in","data-aos-delay":"100"})}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Casamento"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Coração palpitando, emoções à flor da pele e a certeza de dias inesquecíveis."}),c.jsxs("ol",{children:[c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(qg,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Wg,{}),"Noite Especial no Sábado"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(pP,{}),"Ensaio Fotográfico dos Noivos"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(hP,{}),"Decoração Romântica na Suíte"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(Jm,{}),"Late Checkout no Domingo"]})]}),c.jsx(lt,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4129a834-fd9a-42db-4770-46bcaae2c200/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fdcd50a3-60fa-409c-8e77-2d1ccef2ec00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c5657ad4-000d-4c21-0570-1de76bd8c700/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]})]}),c.jsxs(LP,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Aniversário"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"200",children:"Comemore os momentos doces da vida."}),c.jsxs("ol",{children:[c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"50",children:[c.jsx(qg,{}),"Coquetel na Chegada (Sexta-feira)"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"100",children:[c.jsx(Wg,{}),"Noite Especial no Sábado"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"150",children:[c.jsx(mP,{}),"Massagem Relaxante"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(Jm,{}),"Late Checkout no Domingo"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"250",children:[c.jsx(TP,{}),"Painéis Temáticos"]}),c.jsxs(Kt,{"data-aos":"fade-up","data-aos-delay":"300",children:[c.jsx(g7,{}),"Bolo para o Pet"]})]}),c.jsx(lt,{text:"Fazer reserva"}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e2fda94b-3aeb-4561-b4ad-688ff898ee00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f8c3dd3f-c32b-4c9d-2496-dcdc601a7e00/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/980e5da2-7a6b-4d04-8e10-389d3ee83000/public",alt:"foto do casamento","data-aos":"fade-up","data-aos-delay":"300"})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5361ac8b-1299-4fc6-7cbb-7e71c171e300/public",alt:"foto de aniversário","data-aos":"zoom-in","data-aos-delay":"200"})})]}),c.jsx(Kg,{"data-aos":"fade-up","data-aos-delay":"100",children:c.jsx(Yg,{content:_P,spaceBetween:20,slidesPerView:1,width:"100%",height:"90vh",contentType:"image",showPagination:!0})}),c.jsx(Ar,{})]})),k2=k.button`
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
`,OP=k(cT)`
  color: ${e=>e.iconColor||"currentColor"};
  height: 20px;
  width: 20px;
  transition: color 0.3s ease;

  ${k2}:hover & {
    color: ${e=>e.hoverIconColor||e.iconColor||"currentColor"};
  }
`,RP=k.span`
  margin: 10px;
`,Er=({text:e="Fazer reserva agora!",textColor:t,backgroundColor:n,borderColor:r,iconColor:i,hoverIconColor:a,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,onClick:d})=>c.jsxs(k2,{id:"clickwpp",onClick:d,textColor:t,backgroundColor:n,borderColor:r,hoverBackgroundColor:o,hoverBorderColor:s,hoverColor:l,children:[c.jsx(OP,{iconColor:i,hoverIconColor:a}),c.jsx(RP,{children:e})]}),IP=k.section`
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
`,DP=k.div`
    height: 15vh;

    @media (max-width: 768px){
        height: 0;
    }
`,NP=k.section`
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
`,VP=k.section`
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
`,FP=k.section`
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
`,BP=k.section`

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
`,$P=k.div`
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
`,UP=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Sobre Nós - Pousada Le Ange"})}),c.jsx(DP,{}),c.jsx(Cn,{}),c.jsxs(IP,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Pousada Le Ange"}),c.jsxs("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:["A pousada mais ",c.jsx("b",{children:"Pet Friendly"})," do Brasil"]}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"Fundada em 2018 em Miguel Pereira, Rio de Janeiro, a Pousada Le Ange Serra nasceu da nossa paixão por quatro patas, bem-estar e hospitalidade. Com o sucesso da primeira unidade, expandimos para Búzios, em 2023, criando a Pousada Le Ange Mar. A filosofia por trás é oferecer mais do que uma pousada, um refúgio acolhedor."})]}),c.jsx("div",{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e74beb7-77f8-4598-ec38-1e6f6e4d9300/public",alt:"foto da gaia, cachorra da pousada le ange",loading:"lazy","data-aos":"fade-right","data-aos-delay":"500"})})]}),c.jsxs(NP,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2edd1026-cdea-4ac6-f501-713bba86d600/public",alt:"foto da le ande da mar",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/74bff9be-8742-4468-e032-4cf79abe5300/public",alt:"foto da le ande da serra",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"2 unidades,"}),c.jsx("h4",{"data-aos":"fade-down","data-aos-delay":"200",children:"2 refúgios únicos"}),c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"300",children:"A Pousada LeAnge Serra oferece 10 suítes aconchegantes em meio à região serrana de Miguel Pereira. Já a Pousada LeAnge Mar, com suas 8 suítes exclusivas, proporciona uma experiência costeira em Búzios, com vista direta para o mar."})]})]}),c.jsxs(VP,{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Diferenciais"}),c.jsxs("p",{"data-aos":"fade-down","data-aos-delay":"200",children:["Somos mais que Pet Friendly, somos ",c.jsx("b",{children:"Pet Lovers!"})," Por aqui não temos limite de porte, quantidade ou raça. Nosso conceito permite que os pets frequentem o restaurente, a piscina e qualquer outro espaço. Assim, tornando-nos ÚNICOS a oferecer este tipo de experiência."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d476f2e3-90fe-4291-137c-bc9f9e7f4000/public",loading:"lazy",alt:"rede na le ange mar","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/902b9f7b-b521-4545-08ee-f5386e777400/public",loading:"lazy",alt:"hot tube na le ange serra","data-aos":"fade-down","data-aos-delay":"200"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public",loading:"lazy",alt:"casal se divertindo na le ange serra","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/920ca71e-b200-4a6c-5c7e-cc605234d700/public",loading:"lazy",alt:"foto da le ange com tema de natal","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs(FP,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-down","data-aos-delay":"100",children:"Gastronomia"}),c.jsxs("p",{"data-aos":"fade-up","data-aos-delay":"200",children:["Oferecemos um serviço ",c.jsx("i",{children:"all inclusive"})," que abrange todas as refeições, atendendo todas as restrições alimentares dos nossos hóspedes. Nosso compromisso é proporcionar uma experiência gastronômica diversificada e de alta qualidade, utilizando produtos frescos e locais."]})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bbca820c-502b-48cf-a6d6-8a4d4da25900/public",loading:"lazy",alt:"foto da noite de pizzas na pousada le ange","data-aos":"fade-up","data-aos-delay":"300"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9c2d46b5-4488-4382-1bf4-865c6f914100/public",loading:"lazy",alt:"foto da noite de risotos na pousada le ange","data-aos":"fade-down","data-aos-delay":"400"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/415e2adb-0537-4ce0-23cb-124869c06c00/public",loading:"lazy",alt:"foto do cachorro sorrindo para camera","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",loading:"lazy",alt:"uma mulher e dois cachorros na pousada le ange","data-aos":"fade-down","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"Espaços compartilhados"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"400",children:"Nossos espaços compartilhados incluem bibliotecas aconchegantes, sala de jogos e áreas de lazer diversificadas. Na Serra, temos piscinas, ofurô, hot tub, SPA e acesso às cachoeiras. Já em Búzios, nossos hóspedes desfrutam da piscina e dos ofurôs com vista incrível do mar aberto, além disso, estamos localizados próximo ao Mirante do Pai Vitório."})]})]})]}),c.jsxs(BP,{children:[c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"150",children:"Suítes"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"300",children:"Ambas as unidades dispõem de suítes luxuosas, equipadas com banheiras de imersão, camas king-size e roupas de cama de 400 fios. Na Serra, cada suíte conta com uma lareira aconchegante, enquanto em Búzios, a vista para o mar é um espetáculo à parte, garantindo uma experiência de tranquilidade incomparável."})]}),c.jsxs("div",{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"400",children:"Convivência"}),c.jsx("p",{"data-aos":"fade-down","data-aos-delay":"500",children:"Pedimos que considere se o seu pet é amigável, pois a pousada recebe vários outros pets. Além disso, aceitamos apenas humanos acompanhados por pets, e a idade mínima para hospedagem é 13 anos."})]})]}),c.jsx("div",{children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cc7ff3b2-c267-4a5b-140b-cfae14d7f900/public",alt:"foto do quadro de cachorro na pousada le ange mar","data-aos":"flip-left","data-aos-delay":"600"})})]}),c.jsx(da,{}),c.jsxs($P,{children:[c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:"Venha viver essa experiência com a gente!"}),c.jsx(Er,{text:"Reservar agora!",textColor:"var(--color--white)",backgroundColor:"transparent",borderColor:"var(--color--white)",iconColor:"var(--color--white)",hoverBackgroundColor:"var(--color--white)",hoverBorderColor:"var(--color--white)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank"),"data-aos":"fade-in","data-aos-delay":"500"})]})]})),HP=oa`
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
`,qP=k.div`
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
`,WP=k.div`
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
`,YP=k.h2`
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
`,KP=k.p`
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
`,XP=k.div`
  flex: 2;
  height: 100%;

  @media (max-width: 768px){
    height: 30vh;
  }
`,QP=k.img`
  width: 100%;
  border-radius: 25px 0 25px 0;
  height: 100%;
  object-fit: cover;
  filter: contrast(120%);
`,JP=k(on)`
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
`,hc=({slides:e,titleColor:t,buttonBgColor:n,imagePosition:r="left"})=>c.jsxs(c.Fragment,{children:[c.jsx(HP,{}),c.jsx(JP,{navigation:!0,autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,modules:[kr,Tr,Yn],className:"mySwiper",$bgColor:n,onMouseEnter:()=>{},onMouseLeave:()=>{},children:e.map((i,a)=>c.jsx(sn,{children:c.jsxs(qP,{imagePosition:r,children:[c.jsxs(WP,{children:[c.jsx(YP,{$colorDefined:t,"data-aos":"fade-up","data-aos-delay":"100",children:i.title}),c.jsx(KP,{"data-aos":"fade-down","data-aos-delay":"250",children:i.description}),c.jsx(sa,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]}),c.jsx(XP,{"data-aos":"fade-left","data-aos-delay":"400",children:c.jsx(QP,{src:i.imageUrl,alt:i.title})})]})},a))})]}),ZP=Wn`
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
`,eG=k.section`
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
        animation: ${ZP} 5s ease-in-out infinite;
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
`,tG=k.div`
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
`,T2=({images:e})=>{const[t,n]=j.useState(null);return c.jsxs(eG,{children:[c.jsxs(tG,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Serra"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"200",children:c.jsx(sa,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in","data-aos-delay":"200",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/leange/#/acomodaSerra#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx(Bp,{})]})]},i))})]})},nG=k.section`
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
`,rG=k.div`
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,iG=k.div`
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
`,aG=k.div`
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
`,oG=k.h1`
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
`,sG=k.p`
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
`;k(Er)`
    margin-top: auto; 
`;const mc=({colorDefinedBold:e})=>c.jsxs(nG,{children:[c.jsx(rG,{children:c.jsxs(iG,{children:[c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ff1e37f5-c2ef-407f-b2fe-e3af31bc2900/public",alt:"Homem fazendo churrasco na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58565dfa-b512-4cb6-661c-044db3e48b00/public",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-up","data-aos-delay":"200"})]}),c.jsxs("div",{children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca15c837-1a56-47c9-8b78-ec68f1cfa200/public",alt:"Foto do hamburguer da le ange com batata frita e saladas",loading:"lazy","data-aos":"fade-down","data-aos-delay":"100"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public",alt:"Risoto no prato na le ange",loading:"lazy","data-aos":"fade-down","data-aos-delay":"200"})]})]})}),c.jsxs(aG,{children:[c.jsxs(oG,{colorDefinedBold:e,"data-aos":"fade-up","data-aos-delay":"400",children:["Alimentação ",c.jsx("b",{children:"Inclusa"})]}),c.jsxs(sG,{"data-aos":"fade-down","data-aos-delay":"500",children:["Na ",c.jsx("b",{children:"Le Ange"}),", tudo é pensado para oferecer uma experiência gastronômica diversificada, atendendo todo tipo de restrição alimentar e valorizando ingredientes locais e frescos.  ",c.jsx("br",{})," ",c.jsx("br",{}),"Nossa estadia dispõe de um restaurante, onde são oferecidas todas as refeições do dia:",c.jsx("br",{}),c.jsx("br",{}),c.jsxs("ol",{type:"disc",children:[c.jsx("li",{children:"Café da manhã;"}),c.jsx("li",{children:"Almoço;"}),c.jsx("li",{children:"Chá da tarde;"}),c.jsx("li",{children:"Jantar."}),c.jsx("br",{})]}),"Incluindo as nossas deliciosas sobremesas."]}),c.jsx(sa,{"data-aos":"fade-up","data-aos-delay":"200",text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--black)",textColor:"var(--color--black)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})]})]}),Xg=k.section`
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
`,lG=k.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    padding: 0 5%;

    @media (max-width: 768px){
        height: auto;
    }
`,cG=k.div`
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
`,dG=k.p`
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
`,uG=[{id:1,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f192299-26a5-4cba-0d3d-f042f7cc4100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/96048cf4-e533-42ef-631c-17c79f758300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/53ddb117-9d86-42b5-0188-2733003a8400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/95f365f9-0cf7-4a99-de39-71618b26a300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/86f7d35e-3494-439d-483c-48e036d31a00/public"]},{id:2,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e872f9c-0035-4872-cf50-e7eac0bf1600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/532a9b10-7c75-4668-65bc-97a13ace5600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/abd1748a-6b4f-4c8d-4dfa-af0a83aaaf00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5f04125f-47d3-4abd-c359-9e3c129f6500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e6c7bed9-f486-4be9-db47-7087f6943500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/122827e6-c434-44a2-0546-d37d2ffeaf00/public"]},{id:3,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cac55f28-555d-4ce5-6e3b-457af8476c00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a38d49ef-f498-4f03-cecd-d4ac8c69ac00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ffcf23fa-d075-4682-9bda-844c527d7f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d0f29504-829a-4c8f-8720-4c8ae3d27f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f1ccf0e-8406-4164-0955-29087e5a0f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/480b1655-49d4-4323-86c1-345224294000/public"]},{id:4,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3908ea8d-5d8e-4a13-ac75-dc312f545100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/66aa3be9-dd1d-460a-2a0d-4da92e68dc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf5974c4-3129-43bb-db61-23404c00d600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/def5ad59-dc78-4e9a-320b-28d28ec6c500/public"]},{id:5,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0afec340-71f1-42f3-3ffe-5af2438d7500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2603ac07-7df2-43eb-697f-99e79942c200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b2c446cd-cffd-49f1-cb59-65ace1b57a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ca778cf7-62d4-48fb-6e1c-1e6d1fc29400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67bb7d62-0ff9-490f-160a-1335e4800200/public"]},{id:6,text:"Pousada Le Ange Serra",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5abab547-8a8a-408f-013d-0ec1ce1b7a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/faa5f682-d069-4b1c-c022-6d7f99612700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a78d689b-9028-473c-6edd-b0d0c4912400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2e5748ca-ff68-4da1-bff2-e852fa441a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2ac9fb3-1ba9-422f-ccee-9aea2852df00/public"]},{id:7,text:"Pousada Le Ange Mar",bgImages:["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/695f6ec1-0347-4549-4f16-663780080f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ddb51ed-4ba4-44ed-06a2-7d6c21838700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cb252e21-68b5-495b-d8fc-3a1dbe454600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a2e35092-b9d0-49c7-701a-082307a62400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be407d5c-724c-4ebd-9873-a4057f301100/public"]}],gc=()=>c.jsxs(c.Fragment,{children:[c.jsx(Xg,{children:c.jsx("h1",{children:"Palavra do Hóspede"})}),c.jsx(lG,{children:c.jsx(on,{slidesPerView:1,spaceBetween:10,modules:[kr,Tr,Yn],pagination:!1,navigation:!0,loop:!0,grabCursor:!0,autoplay:{delay:7e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1}},children:uG.map(e=>c.jsx(sn,{children:c.jsxs(cG,{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx(on,{slidesPerView:1,spaceBetween:10,loop:!0,style:{width:"100%",height:"100%"},autoplay:{delay:5e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},onTouchStart:t=>{t.stopPropagation()},onMouseEnter:t=>{t.stopPropagation()},children:e.bgImages.map((t,n)=>c.jsx(sn,{children:c.jsx("div",{style:{backgroundImage:`url(${t})`,backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:"25px 0 25px 0"},loading:"lazy"})},n))}),c.jsx(dG,{children:e.text})]})},e.id))})}),c.jsx(Xg,{children:c.jsx(Er,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})})]});k.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center; 

    @media (max-width: 768px){
        height: auto;
    }
`;const fG=k.section`
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
`,vc=({carousels:e})=>c.jsxs(c.Fragment,{children:[c.jsxs(fG,{children:[c.jsxs("h1",{"data-aos":"fade-up","data-aos-delay":"200",children:[c.jsx("b",{children:"100%"})," Pet Friendly"]}),c.jsx(Er,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--black)",hoverBorderColor:"var(--color--black)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]}),e.map((t,n)=>c.jsx(nf,{images:t.images,reverse:t.reverse||!1},n))]}),pG=k.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh!important;
    }
`,hG=k.section`
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
`,mG=k.div`
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
`,gG=k.div`
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
`,vG=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b324ce14-d3d8-4fc3-fccf-b4b4a9806d00/public"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8b7eae12-574b-40fd-5e6f-7f341c81a600/public"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da7c577a-832a-4a84-d5fd-162e11915b00/public"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece77d44-3478-4c00-cb8f-073b002ed400/public"}],xG=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3cd47cc-01fa-43c8-ef2d-e57d8ba50d00/public",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5bdb3546-6085-40a1-059b-b977978f2800/public",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e69c27cf-cc71-4a1a-c859-7604db2ec700/public",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fe90a96-3e1a-475e-bf6c-b2f68430b400/public",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa931507-db19-427a-91a0-c30d8fb81800/public",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0b0ec5f-6bd1-427d-7bc9-93253779d000/public",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/82fb4467-00bc-422b-be3f-d13d0847d900/public",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f981b12-4550-4d26-bdc6-1e3050abf600/public",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff6d8ef-159a-46da-6fe7-0a826541f000/public",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23c08875-4c8e-470d-3635-56f4cdfc1000/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7910dc1-2d38-46fe-c997-734005e71600/public",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ba1de25-a892-4ee8-7165-584f54f0b600/public",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6da69e80-1cff-41e2-5434-318840221800/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro na mão do tutor",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dce2d881-18d3-4a3d-5b7e-ad7e364be300/public",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab67883-96b6-4f10-9c94-c5622ee8b000/public",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/56af4858-5fbf-438f-fac3-ee527c3a4600/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db285e3c-87b7-40db-b04b-cfd384d06200/public",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],yG=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,wG=k.div`
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
`,bG=k.section`
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
`,SG=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"765,30",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Churrasco no sábado"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Almoço e noite especial"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],jG=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,CG=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",text:"Suíte Superior 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/99db9a7b-dafd-4b04-36ce-c4eac6880600/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d07d16a0-e7f4-4104-7d5e-f7e4c2dfa500/public",text:"Suíte Standard 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fd429f81-a091-4ca3-9f54-d4a1b730e200/public",text:"Suíte Standard 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a22d76b9-b7d4-4174-0cc1-4cfdfd57d500/public",text:"Suíte Master 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7ae1bee-6f60-4584-d03c-0aebd06a2600/public",text:"Suíte Superior 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4c448474-8a7b-489b-ac5f-7b11c4dfad00/public",text:"Suíte Standard 8",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/509535a4-9291-44a8-c250-5e8be0b28e00/public",text:"Suíte Superior 9",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/853f4009-5ddc-49ad-717f-3d49d3ad4900/public",text:"Suíte Master 10",loading:"lazy"}],kG=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;

  @media (max-width: 768px) {
    width: 100%!important;
  }
`,TG=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(pG,{}),c.jsx(Cn,{}),c.jsxs(hG,{children:[c.jsx(mG,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(gG,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(Er,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")}),c.jsx(kG,{children:"*Só permitimos crianças acima de 13 anos!"})]})]}),c.jsx(wG,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(da,{}),c.jsx(yG,{children:c.jsx(hc,{slides:vG})}),c.jsx(T2,{images:CG,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(mc,{}),c.jsx(vc,{carousels:xG}),c.jsx(jG,{children:c.jsx(lt,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(bG,{children:c.jsx(Lo,{events:SG})}),c.jsx(gc,{}),c.jsx(Ar,{})]})),AG=Wn`
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
`,EG=k.section`
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
        animation: ${AG} 5s ease-in-out infinite;
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
`,PG=k.div`
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
`,A2=({images:e})=>{const[t,n]=j.useState(null);return j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(EG,{children:[c.jsxs(PG,{children:[c.jsx("div",{children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça as suítes da Le Ange Mar"})}),c.jsx("div",{"data-aos":"fade-down","data-aos-delay":"250",children:c.jsx(sa,{text:"Fazer reserva!",text2:"Clique e reserve",borderColor:"var(--color--white)",textColor:"var(--color--white)",hoverColor:"var(--color--black)",hoverTextColor:"var(--color--white)"})})]}),c.jsx("main",{"data-aos":"zoom-in-up","data-aos-delay":"400",children:e.map((r,i)=>c.jsxs("div",{onMouseEnter:()=>n(i),onMouseLeave:()=>n(null),children:[c.jsx("img",{src:r.src,alt:`Imagem ${i+1}`}),c.jsxs("span",{onClick:()=>window.location.href=`/leange/#/acomodaMar#suite${i+1}`,children:[t===i?"Conhecer Suítes":r.text,t===i&&c.jsx(Bp,{})]})]},i))})]})},GG=k.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,_G=k.section`
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
`,zG=k.div`
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
`,LG=k.div`
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
`,MG=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"}],OG=k.section`
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
`,RG=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public",text:"Suíte Standard 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public",text:"Suíte Superior 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public",text:"Suíte Superior 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public",text:"Suíte Superior 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public",text:"Suíte Master 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public",text:"Suíte Master 8",loading:"lazy"}],IG=k.div`
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
`,DG=k.section`
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
`,NG=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
  width: 100%!important;
`,VG=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"765,30",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Churrasco no sábado"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Almoço e noite especial"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],FG=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,BG=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],$G=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(GG,{}),c.jsx(Cn,{}),c.jsxs(_G,{children:[c.jsxs(LG,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(Er,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(NG,{children:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsx(zG,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(IG,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(da,{}),c.jsx(OG,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(hc,{slides:MG,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(A2,{images:RG}),c.jsx(mc,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(vc,{carousels:BG,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(FG,{children:c.jsx(lt,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(DG,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(Lo,{events:VG})}),c.jsx(gc,{}),c.jsx(Ar,{})]}));function UG(e){return J({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"},child:[]}]})(e)}var E2={exports:{}};(function(e,t){(function(n,r){e.exports=r(j)})(typeof self<"u"?self:Zg,function(n){return function(r){var i={};function a(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return r[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=r,a.c=i,a.d=function(o,s,l){a.o(o,s)||Object.defineProperty(o,s,{enumerable:!0,get:l})},a.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(o,s){if(1&s&&(o=a(o)),8&s||4&s&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&s&&typeof o!="string")for(var d in o)a.d(l,d,(function(u){return o[u]}).bind(null,d));return l},a.n=function(o){var s=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(s,"a",s),s},a.o=function(o,s){return Object.prototype.hasOwnProperty.call(o,s)},a.p="",a(a.s=2)}([function(r,i){r.exports=n},function(r,i,a){var o={linear:function(s,l,d,u){return(d-l)*s/u+l},easeInQuad:function(s,l,d,u){return(d-l)*(s/=u)*s+l},easeOutQuad:function(s,l,d,u){return-(d-l)*(s/=u)*(s-2)+l},easeInOutQuad:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s+l:-f/2*(--s*(s-2)-1)+l},easeInCubic:function(s,l,d,u){return(d-l)*(s/=u)*s*s+l},easeOutCubic:function(s,l,d,u){return(d-l)*((s=s/u-1)*s*s+1)+l},easeInOutCubic:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s+l:f/2*((s-=2)*s*s+2)+l},easeInQuart:function(s,l,d,u){return(d-l)*(s/=u)*s*s*s+l},easeOutQuart:function(s,l,d,u){return-(d-l)*((s=s/u-1)*s*s*s-1)+l},easeInOutQuart:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s*s+l:-f/2*((s-=2)*s*s*s-2)+l},easeInQuint:function(s,l,d,u){return(d-l)*(s/=u)*s*s*s*s+l},easeOutQuint:function(s,l,d,u){return(d-l)*((s=s/u-1)*s*s*s*s+1)+l},easeInOutQuint:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?f/2*s*s*s*s*s+l:f/2*((s-=2)*s*s*s*s+2)+l},easeInSine:function(s,l,d,u){var f=d-l;return-f*Math.cos(s/u*(Math.PI/2))+f+l},easeOutSine:function(s,l,d,u){return(d-l)*Math.sin(s/u*(Math.PI/2))+l},easeInOutSine:function(s,l,d,u){return-(d-l)/2*(Math.cos(Math.PI*s/u)-1)+l},easeInExpo:function(s,l,d,u){return s==0?l:(d-l)*Math.pow(2,10*(s/u-1))+l},easeOutExpo:function(s,l,d,u){var f=d-l;return s==u?l+f:f*(1-Math.pow(2,-10*s/u))+l},easeInOutExpo:function(s,l,d,u){var f=d-l;return s===0?l:s===u?l+f:(s/=u/2)<1?f/2*Math.pow(2,10*(s-1))+l:f/2*(2-Math.pow(2,-10*--s))+l},easeInCirc:function(s,l,d,u){return-(d-l)*(Math.sqrt(1-(s/=u)*s)-1)+l},easeOutCirc:function(s,l,d,u){return(d-l)*Math.sqrt(1-(s=s/u-1)*s)+l},easeInOutCirc:function(s,l,d,u){var f=d-l;return(s/=u/2)<1?-f/2*(Math.sqrt(1-s*s)-1)+l:f/2*(Math.sqrt(1-(s-=2)*s)+1)+l},easeInElastic:function(s,l,d,u){var f,p,v,g=d-l;return v=1.70158,s===0?l:(s/=u)==1?l+g:((p=0)||(p=.3*u),(f=g)<Math.abs(g)?(f=g,v=p/4):v=p/(2*Math.PI)*Math.asin(g/f),-f*Math.pow(2,10*(s-=1))*Math.sin((s*u-v)*(2*Math.PI)/p)+l)},easeOutElastic:function(s,l,d,u){var f,p,v,g=d-l;return v=1.70158,s===0?l:(s/=u)==1?l+g:((p=0)||(p=.3*u),(f=g)<Math.abs(g)?(f=g,v=p/4):v=p/(2*Math.PI)*Math.asin(g/f),f*Math.pow(2,-10*s)*Math.sin((s*u-v)*(2*Math.PI)/p)+g+l)},easeInOutElastic:function(s,l,d,u){var f,p,v,g=d-l;return v=1.70158,s===0?l:(s/=u/2)==2?l+g:((p=0)||(p=u*.44999999999999996),(f=g)<Math.abs(g)?(f=g,v=p/4):v=p/(2*Math.PI)*Math.asin(g/f),s<1?f*Math.pow(2,10*(s-=1))*Math.sin((s*u-v)*(2*Math.PI)/p)*-.5+l:f*Math.pow(2,-10*(s-=1))*Math.sin((s*u-v)*(2*Math.PI)/p)*.5+g+l)},easeInBack:function(s,l,d,u,f){return f===void 0&&(f=1.70158),(d-l)*(s/=u)*s*((f+1)*s-f)+l},easeOutBack:function(s,l,d,u,f){return f===void 0&&(f=1.70158),(d-l)*((s=s/u-1)*s*((f+1)*s+f)+1)+l},easeInOutBack:function(s,l,d,u,f){var p=d-l;return f===void 0&&(f=1.70158),(s/=u/2)<1?p/2*(s*s*((1+(f*=1.525))*s-f))+l:p/2*((s-=2)*s*((1+(f*=1.525))*s+f)+2)+l},easeInBounce:function(s,l,d,u){var f=d-l;return f-o.easeOutBounce(u-s,0,f,u)+l},easeOutBounce:function(s,l,d,u){var f=d-l;return(s/=u)<.36363636363636365?f*(7.5625*s*s)+l:s<.7272727272727273?f*(7.5625*(s-=.5454545454545454)*s+.75)+l:s<.9090909090909091?f*(7.5625*(s-=.8181818181818182)*s+.9375)+l:f*(7.5625*(s-=.9545454545454546)*s+.984375)+l},easeInOutBounce:function(s,l,d,u){var f=d-l;return s<u/2?.5*o.easeInBounce(2*s,0,f,u)+l:.5*o.easeOutBounce(2*s-u,0,f,u)+.5*f+l}};r.exports=o},function(r,i,a){r.exports=a(3)},function(r,i,a){a.r(i),a.d(i,"ReactConfetti",function(){return de});var o,s,l=a(0),d=a.n(l),u=a(1),f=a.n(u);function p(_,O){return _+Math.random()*(O-_)}function v(_,O){for(var N=0;N<O.length;N++){var R=O[N];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(_,R.key,R)}}function g(_,O,N){return O in _?Object.defineProperty(_,O,{value:N,enumerable:!0,configurable:!0,writable:!0}):_[O]=N,_}(function(_){_[_.Circle=0]="Circle",_[_.Square=1]="Square",_[_.Strip=2]="Strip"})(o||(o={})),function(_){_[_.Positive=1]="Positive",_[_.Negative=-1]="Negative"}(s||(s={}));var y=function(){function _(R,Y,B,U){(function(xc,yc){if(!(xc instanceof yc))throw new TypeError("Cannot call a class as a function")})(this,_),g(this,"context",void 0),g(this,"radius",void 0),g(this,"x",void 0),g(this,"y",void 0),g(this,"w",void 0),g(this,"h",void 0),g(this,"vx",void 0),g(this,"vy",void 0),g(this,"shape",void 0),g(this,"angle",void 0),g(this,"angularSpin",void 0),g(this,"color",void 0),g(this,"rotateY",void 0),g(this,"rotationDirection",void 0),g(this,"getOptions",void 0),this.getOptions=Y;var re,ce,me=this.getOptions(),kn=me.colors,qt=me.initialVelocityX,Wt=me.initialVelocityY;this.context=R,this.x=B,this.y=U,this.w=p(5,20),this.h=p(5,20),this.radius=p(5,10),this.vx=typeof qt=="number"?p(-qt,qt):p(qt.min,qt.max),this.vy=typeof Wt=="number"?p(-Wt,0):p(Wt.min,Wt.max),this.shape=(re=0,ce=2,Math.floor(re+Math.random()*(ce-re+1))),this.angle=p(0,360)*Math.PI/180,this.angularSpin=p(-.2,.2),this.color=kn[Math.floor(Math.random()*kn.length)],this.rotateY=p(0,1),this.rotationDirection=p(0,1)?s.Positive:s.Negative}var O,N;return O=_,(N=[{key:"update",value:function(){var R=this.getOptions(),Y=R.gravity,B=R.wind,U=R.friction,re=R.opacity,ce=R.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=Y,this.vx+=B,this.vx*=U,this.vy*=U,this.rotateY>=1&&this.rotationDirection===s.Positive?this.rotationDirection=s.Negative:this.rotateY<=-1&&this.rotationDirection===s.Negative&&(this.rotationDirection=s.Positive);var me=.1*this.rotationDirection;if(this.rotateY+=me,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=re,this.context.lineCap="round",this.context.lineWidth=2,ce&&typeof ce=="function")ce.call(this,this.context);else switch(this.shape){case o.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case o.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case o.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&v(O.prototype,N),_}();function w(_,O,N){return O in _?Object.defineProperty(_,O,{value:N,enumerable:!0,configurable:!0,writable:!0}):_[O]=N,_}var x=function _(O,N){var R=this;(function(B,U){if(!(B instanceof U))throw new TypeError("Cannot call a class as a function")})(this,_),w(this,"canvas",void 0),w(this,"context",void 0),w(this,"getOptions",void 0),w(this,"x",0),w(this,"y",0),w(this,"w",0),w(this,"h",0),w(this,"lastNumberOfPieces",0),w(this,"tweenInitTime",Date.now()),w(this,"particles",[]),w(this,"particlesGenerated",0),w(this,"removeParticleAt",function(B){R.particles.splice(B,1)}),w(this,"getParticle",function(){var B=p(R.x,R.w+R.x),U=p(R.y,R.h+R.y);return new y(R.context,R.getOptions,B,U)}),w(this,"animate",function(){var B=R.canvas,U=R.context,re=R.particlesGenerated,ce=R.lastNumberOfPieces,me=R.getOptions(),kn=me.run,qt=me.recycle,Wt=me.numberOfPieces,xc=me.debug,yc=me.tweenFunction,wc=me.tweenDuration;if(!kn)return!1;var bc=R.particles.length,ua=qt?bc:re,Sc=Date.now();if(ua<Wt){ce!==Wt&&(R.tweenInitTime=Sc,R.lastNumberOfPieces=Wt);for(var oh=R.tweenInitTime,P2=yc(Sc-oh>wc?wc:Math.max(0,Sc-oh),ua,Wt,wc),sh=Math.round(P2-ua),lh=0;lh<sh;lh++)R.particles.push(R.getParticle());R.particlesGenerated+=sh}return xc&&(U.font="12px sans-serif",U.fillStyle="#333",U.textAlign="right",U.fillText("Particles: ".concat(bc),B.width-10,B.height-20)),R.particles.forEach(function(fa,ch){fa.update(),(fa.y>B.height||fa.y<-100||fa.x>B.width+100||fa.x<-100)&&(qt&&ua<=Wt?R.particles[ch]=R.getParticle():R.removeParticleAt(ch))}),bc>0||ua<Wt}),this.canvas=O;var Y=this.canvas.getContext("2d");if(!Y)throw new Error("Could not get canvas context");this.context=Y,this.getOptions=N};function h(_,O){var N=Object.keys(_);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(_);O&&(R=R.filter(function(Y){return Object.getOwnPropertyDescriptor(_,Y).enumerable})),N.push.apply(N,R)}return N}function m(_){for(var O=1;O<arguments.length;O++){var N=arguments[O]!=null?arguments[O]:{};O%2?h(Object(N),!0).forEach(function(R){S(_,R,N[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(N)):h(Object(N)).forEach(function(R){Object.defineProperty(_,R,Object.getOwnPropertyDescriptor(N,R))})}return _}function b(_,O){for(var N=0;N<O.length;N++){var R=O[N];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(_,R.key,R)}}function S(_,O,N){return O in _?Object.defineProperty(_,O,{value:N,enumerable:!0,configurable:!0,writable:!0}):_[O]=N,_}var C={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:f.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},T=function(){function _(R,Y){var B=this;(function(re,ce){if(!(re instanceof ce))throw new TypeError("Cannot call a class as a function")})(this,_),S(this,"canvas",void 0),S(this,"context",void 0),S(this,"_options",void 0),S(this,"generator",void 0),S(this,"rafId",void 0),S(this,"setOptionsWithDefaults",function(re){var ce={confettiSource:{x:0,y:0,w:B.canvas.width,h:0}};B._options=m(m(m({},ce),C),re),Object.assign(B,re.confettiSource)}),S(this,"update",function(){var re=B.options,ce=re.run,me=re.onConfettiComplete,kn=B.canvas,qt=B.context;ce&&(qt.fillStyle="white",qt.clearRect(0,0,kn.width,kn.height)),B.generator.animate()?B.rafId=requestAnimationFrame(B.update):(me&&typeof me=="function"&&B.generator.particlesGenerated>0&&me.call(B,B),B._options.run=!1)}),S(this,"reset",function(){B.generator&&B.generator.particlesGenerated>0&&(B.generator.particlesGenerated=0,B.generator.particles=[],B.generator.lastNumberOfPieces=0)}),S(this,"stop",function(){B.options={run:!1},B.rafId&&(cancelAnimationFrame(B.rafId),B.rafId=void 0)}),this.canvas=R;var U=this.canvas.getContext("2d");if(!U)throw new Error("Could not get canvas context");this.context=U,this.generator=new x(this.canvas,function(){return B.options}),this.options=Y,this.update()}var O,N;return O=_,(N=[{key:"options",get:function(){return this._options},set:function(R){var Y=this._options&&this._options.run,B=this._options&&this._options.recycle;this.setOptionsWithDefaults(R),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof R.recycle=="boolean"&&R.recycle&&B===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof R.run=="boolean"&&R.run&&Y===!1&&this.update()}}])&&b(O.prototype,N),_}();function A(_){return function(O){if(Array.isArray(O))return q(O)}(_)||function(O){if(typeof Symbol<"u"&&Symbol.iterator in Object(O))return Array.from(O)}(_)||D(_)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function G(_){return(G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O})(_)}function E(){return(E=Object.assign||function(_){for(var O=1;O<arguments.length;O++){var N=arguments[O];for(var R in N)Object.prototype.hasOwnProperty.call(N,R)&&(_[R]=N[R])}return _}).apply(this,arguments)}function P(_,O){var N=Object.keys(_);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(_);O&&(R=R.filter(function(Y){return Object.getOwnPropertyDescriptor(_,Y).enumerable})),N.push.apply(N,R)}return N}function z(_){for(var O=1;O<arguments.length;O++){var N=arguments[O]!=null?arguments[O]:{};O%2?P(Object(N),!0).forEach(function(R){be(_,R,N[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(N)):P(Object(N)).forEach(function(R){Object.defineProperty(_,R,Object.getOwnPropertyDescriptor(N,R))})}return _}function I(_,O){return function(N){if(Array.isArray(N))return N}(_)||function(N,R){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(N)))){var Y=[],B=!0,U=!1,re=void 0;try{for(var ce,me=N[Symbol.iterator]();!(B=(ce=me.next()).done)&&(Y.push(ce.value),!R||Y.length!==R);B=!0);}catch(kn){U=!0,re=kn}finally{try{B||me.return==null||me.return()}finally{if(U)throw re}}return Y}}(_,O)||D(_,O)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function D(_,O){if(_){if(typeof _=="string")return q(_,O);var N=Object.prototype.toString.call(_).slice(8,-1);return N==="Object"&&_.constructor&&(N=_.constructor.name),N==="Map"||N==="Set"?Array.from(_):N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)?q(_,O):void 0}}function q(_,O){(O==null||O>_.length)&&(O=_.length);for(var N=0,R=new Array(O);N<O;N++)R[N]=_[N];return R}function Z(_,O){if(!(_ instanceof O))throw new TypeError("Cannot call a class as a function")}function K(_,O){for(var N=0;N<O.length;N++){var R=O[N];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(_,R.key,R)}}function M(_,O){return(M=Object.setPrototypeOf||function(N,R){return N.__proto__=R,N})(_,O)}function V(_){var O=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var N,R=ee(_);if(O){var Y=ee(this).constructor;N=Reflect.construct(R,arguments,Y)}else N=R.apply(this,arguments);return $(this,N)}}function $(_,O){return!O||G(O)!=="object"&&typeof O!="function"?X(_):O}function X(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function ee(_){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(O){return O.__proto__||Object.getPrototypeOf(O)})(_)}function be(_,O,N){return O in _?Object.defineProperty(_,O,{value:N,enumerable:!0,configurable:!0,writable:!0}):_[O]=N,_}var ge=d.a.createRef(),Te=function(_){(function(B,U){if(typeof U!="function"&&U!==null)throw new TypeError("Super expression must either be null or a function");B.prototype=Object.create(U&&U.prototype,{constructor:{value:B,writable:!0,configurable:!0}}),U&&M(B,U)})(Y,_);var O,N,R=V(Y);function Y(B){var U;Z(this,Y);for(var re=arguments.length,ce=new Array(re>1?re-1:0),me=1;me<re;me++)ce[me-1]=arguments[me];return be(X(U=R.call.apply(R,[this,B].concat(ce))),"canvas",d.a.createRef()),be(X(U),"confetti",void 0),U.canvas=B.canvasRef||ge,U}return O=Y,(N=[{key:"componentDidMount",value:function(){if(this.canvas.current){var B=he(this.props)[0];this.confetti=new T(this.canvas.current,B)}}},{key:"componentDidUpdate",value:function(){var B=he(this.props)[0];this.confetti&&(this.confetti.options=B)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var B=I(he(this.props),2),U=B[0],re=B[1],ce=z({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},re.style);return d.a.createElement("canvas",E({width:U.width,height:U.height,ref:this.canvas},re,{style:ce}))}}])&&K(O.prototype,N),Y}(l.Component);function he(_){var O={},N={},R=[].concat(A(Object.keys(C)),["confettiSource","drawShape","onConfettiComplete"]),Y=["canvasRef"];for(var B in _){var U=_[B];R.includes(B)?O[B]=U:Y.includes(B)?Y[B]=U:N[B]=U}return[O,N,{}]}be(Te,"defaultProps",z({},C)),be(Te,"displayName","ReactConfetti");var de=d.a.forwardRef(function(_,O){return d.a.createElement(Te,E({canvasRef:O},_))});i.default=de}]).default})})(E2);var HG=E2.exports;const qG=ti(HG);Wn`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;const Qg=k.select`
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
`,WG=k.div`
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
`,YG=k.div`
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
`,KG=k.header`
    display: flex;
    gap: 5px;
`,En=k(({isActive:e,...t})=>c.jsx(jx,{...t}))`
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
`,XG=k.div`
    opacity: ${({isVisible:e})=>e?1:0};
    transition: opacity 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`,Jg=k(En)`
    background: ${({isActive:e})=>e?"linear-gradient(45deg, #ff6b6b, #f06595, #eeafaf)":"transparent"};
    color: ${({isActive:e})=>e?"white":"var(--color--black)"};

    &:hover {
        background: linear-gradient(45deg, #f06595, #ff6b6b, #eeafaf);
        color: white;
    }
`,QG=k.div`
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
`,JG=k.div`
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
`,ZG=()=>{const e=jn(),[t,n]=j.useState(!1),[r,i]=j.useState(!1),[a,o]=j.useState(!1),[s,l]=j.useState(!1),[d,u]=j.useState(!1),[f,p]=j.useState(!1),v=["/","/sobre","/mar","/serra","/event","/acomodaSerra","/acomodaMar","/lpMar","lpSerra"];let g;const y=()=>{l(C=>!C),u(C=>!C)},w=()=>{l(!1),u(!1)},x=()=>{o(!0),clearTimeout(g),g=setTimeout(()=>{o(!1)},3e3)},h=ql(),[m,b]=j.useState(""),S=C=>{const T=C.target.value;T&&(b(T),h(T))};return j.useEffect(()=>{v.includes(e.pathname)||h("/",{replace:!1})},[e.pathname,h]),j.useEffect(()=>(window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x),clearTimeout(g)}),[]),j.useEffect(()=>{if(e.pathname!=="/"){p(!0);const C=setTimeout(()=>{p(!1)},1e3);return()=>clearTimeout(C)}else p(!1)},[e.pathname]),j.useEffect(()=>{if(e.pathname==="/event"){n(!0),i(!0);const C=setTimeout(()=>{i(!1),setTimeout(()=>n(!1),1e3)},8e3);return()=>clearTimeout(C)}else i(!1),setTimeout(()=>n(!1),1e3)},[e.pathname]),j.useEffect(()=>{s&&w()},[e.pathname]),c.jsxs(c.Fragment,{children:[c.jsx(WG,{isLoading:f,children:c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/59746ba9-5d6e-4873-dad6-26930b03a900/public",alt:"Loading..."})}),c.jsxs(YG,{isScrolled:a,children:[t&&c.jsx(XG,{isVisible:r,children:c.jsx(qG,{})}),c.jsx(jx,{to:"/","aria-label":"Home",children:c.jsxs("picture",{children:[c.jsx("source",{media:"(max-width: 480px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("source",{media:"(max-width: 768px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("source",{media:"(min-width: 769px)",srcSet:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"Logo da Empresa",style:{maxHeight:"40px"}})]})}),c.jsxs(KG,{children:[c.jsxs(En,{to:"/",isActive:e.pathname==="/",children:[c.jsx(un,{isVisible:e.pathname==="/",children:c.jsx(Zm,{})}),"Início"]}),c.jsxs(En,{to:"/sobre",isActive:e.pathname==="/sobre",children:[c.jsx(un,{isVisible:e.pathname==="/sobre",children:c.jsx(eg,{})}),"Sobre nós"]}),c.jsxs(En,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",children:[c.jsx(un,{isVisible:e.pathname==="/mar",children:c.jsx(Xm,{})}),"Le Ange Mar"]}),c.jsxs(En,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",children:[c.jsx(un,{isVisible:e.pathname==="/serra",children:c.jsx(VT,{})}),"Le Ange Serra"]}),c.jsxs(Jg,{to:"/event",isActive:e.pathname==="/event",children:[c.jsx(un,{isVisible:e.pathname==="/event",children:c.jsx(Qm,{})}),"Eventos"]}),c.jsxs(Qg,{onChange:S,value:m,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(lt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer minha reserva"})]}),c.jsxs(QG,{isScrolled:a,children:[c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"logo da le ange"}),c.jsxs("button",{onClick:y,isClicked:d,children:["Menu",c.jsx(UG,{})]})]}),c.jsxs(JG,{isOpen:s,children:[c.jsx("button",{onClick:w,children:"X"}),c.jsx("img",{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d3fbafba-3dfe-4924-e857-b45059def500/public",alt:"logo da le ange"}),c.jsxs("div",{children:[c.jsxs(En,{to:"/",isActive:e.pathname==="/",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/",children:c.jsx(Zm,{})}),"Início"]}),c.jsxs(En,{to:"/sobre",isActive:e.pathname==="/sobre",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/sobre",children:c.jsx(eg,{})}),"Sobre nós"]}),c.jsxs(En,{to:"/mar",variant:"mar",isActive:e.pathname==="/mar",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/mar",children:c.jsx(Xm,{})}),"Le Ange Mar"]}),c.jsxs(En,{to:"/serra",variant:"serra",isActive:e.pathname==="/serra",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/serra",children:c.jsx(v7,{})}),"Le Ange Serra"]}),c.jsxs(Jg,{to:"/event",isActive:e.pathname==="/event",onClick:w,children:[c.jsx(un,{isVisible:e.pathname==="/event",children:c.jsx(Qm,{})}),"Eventos"]}),c.jsxs(Qg,{onChange:S,value:m,children:[c.jsx("option",{disabled:!0,value:"",children:"Acomodações"}),c.jsx("option",{value:"/acomodaSerra",children:"Suítes Serra"}),c.jsx("option",{value:"/acomodaMar",children:"Suítes Mar"})]})]}),c.jsx(lt,{text:"Fazer minha reserva",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})]})]})},e_=oa`
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
`,t_=k.section`
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
`,n_=k.div`
    width: 50%;
    height: 95%;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        width: 100%;
        height: 50vh;
    }
`,r_=k.div`
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
`,i_=k.h2`
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
`,a_=k.p`
    font-size: .9rem;
    line-height: 120%;
    color: var(--color--black); 
    font-family: var(--font--comfortaa)!important;
    
    @media (max-width: 768px){
        font-size: 0.75rem;
    }
`,o_=k.div`
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
`,s_=k.img`
    width: 100%;
    height: 75.8vh;
    object-fit: cover;
    border-radius: 15px 10px 25px 5px;

    @media (max-width: 768px){
        height: 50vh;
    }
`,We=te.forwardRef(({images:e=[],suites:t=[],reverse:n=!1,background:r="rgba(0, 0, 0, 0.1)"},i)=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(t_,{reverse:n,ref:i,children:[c.jsxs(n_,{"data-aos":"zoom-in","data-aos-delay":"50",children:[c.jsx(e_,{}),c.jsx(on,{modules:[Yn,Tr,kr],autoplay:{delay:2e5,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:!0,pagination:!0,loop:!0,spaceBetween:10,slidesPerView:1,children:e.map((a,o)=>c.jsx(sn,{children:c.jsx(s_,{src:a,alt:`Slide ${o+1}`})},o))})]}),c.jsx(r_,{background:r,"data-aos":"fade-up","data-aos-delay":"100",children:t.map((a,o)=>{var s;return c.jsxs("div",{children:[c.jsx("section",{children:c.jsxs("div",{children:[c.jsx("p",{"data-aos":"fade-up","data-aos-delay":"150",children:a.NomedaSuite}),c.jsx(i_,{"data-aos":"fade-up","data-aos-delay":"200",children:a.NomedaPousada})]})}),c.jsx(o_,{"data-aos":"fade-up","data-aos-delay":"250",children:(s=a.features)==null?void 0:s.map((l,d)=>c.jsxs("span",{children:[l.icon," ",l.text]},d))}),c.jsx(a_,{"data-aos":"fade-in","data-aos-delay":"400",children:a.Description}),c.jsx(lt,{onClick:()=>window.open("https://wa.link/dojlwi","_blank"),text:"Fazer reserva agora!"})]},o)})})]}))),l_=k.div`
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

`,c_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7d1df8a5-0905-4ac0-5a2d-621e8a48dd00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/27861ce8-6beb-438a-6ff4-3cee719fe500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22957a6-e82d-46ab-01f2-336a3d84ec00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/26d9fcee-7e13-4b45-4d95-6248723ddc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7336810d-d00e-4445-529b-f16b72cc7700/public"],d_=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m² que une conforto e sofisticação. Equipada com cama king-size, ar-condicionado e lareira, também dispõe de uma varanda privativa com vista para a natureza, banheira relaxante e aquecedor de toalhas."}],u_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab53301-9865-467b-5746-7d359f21fe00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a27173c0-d56c-4c22-ea55-7f23cba7a800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/beb843cb-3ae0-4ea0-348c-5af6f79b9600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c22c1ab9-1c7a-47e4-3642-0024f2b24700/public"],f_=[{NomedaSuite:"Suíte Superior 2",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece uma experiência completa: cama king-size, ar-condicionado, lareira, e uma varanda privativa com vista para a natureza. Para relaxar ainda mais, desfrute de uma banheira e do aquecedor de toalhas, garantindo máximo conforto."}],p_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eaddb3bf-35e7-4bff-09ff-0c5a80525800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/711abf2e-87c0-4568-ffa3-71f98954af00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58b29f7d-d13e-4c97-06d7-c23613222d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e01a043d-e7ca-4edc-d4ad-103e63e79600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a297c1da-191f-4479-7de3-3403c90a8400/public"],h_=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Esta suíte de 52m² é perfeita para momentos inesquecíveis, com cama king-size, ar-condicionado e lareira. A varanda privativa proporciona uma vista espetacular da natureza, enquanto a banheira relaxante e o aquecedor de toalhas completam o ambiente para maior comodidade."}],m_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a0c090c6-7dcb-4886-8dae-e439370b2a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/932de633-2aa1-41b9-a3ff-3a99f4cb5e00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e5f64afd-bc17-4cf3-b790-453e90545200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/18dc1fbd-cbbe-4ccf-d204-c47841cdc900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ceb5e56-07d1-44cf-b194-9a5ed2265b00/public"],g_=[{NomedaSuite:"Suíte Standard 4",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Uma suíte de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda privativa oferece uma vista deslumbrante da natureza, enquanto a banheira relaxante e o aquecedor de toalhas adicionam um toque a mais de conforto e elegância para a sua estadia."}],v_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9cb4ce2c-7d70-4a5d-fa18-7615aa389d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ae1efc69-3fed-4143-0162-fa6659f85000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e3c9ebb8-4dc0-42f0-7c77-efb7b307ef00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c2a76285-c7ca-4cfc-3194-567e7e193000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3e9c2e45-b349-403a-3d09-93b6a0661c00/public"],x_=[{NomedaSuite:"Suíte Standard 5",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Com 52m², esta suíte oferece cama king-size, ar-condicionado e lareira para momentos acolhedores. A varanda privativa revela uma vista incrível da natureza e, para o máximo de conforto, a suíte ainda conta com uma banheira relaxante e aquecer de toalhas."}],y_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d24e6cd4-c8e9-437d-afdb-dadebbcb4000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ef9ef222-11b1-4689-435b-290edb163900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/178e93c6-234b-45a2-7fa1-167362cae400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5e9145f7-431e-49be-10c3-861a9289cc00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fcae768c-1514-4874-e9eb-1dde99a62b00/public"],w_=[{NomedaSuite:"Suíte Master 6",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"93m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(th,{}),text:"Chaise lounge"},{icon:c.jsx(j2,{}),text:"Bay window"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Ampla varanda privativa"}],Description:"Desfrute de 93m² de luxo com cama king-size, ar-condicionado e lareira. A suíte conta com uma chaise lounge ao lado da bay window, banheira relaxante com vista para a natureza, aquecedor de toalhas e, ainda, uma varanda privativa, perfeita para aqueles momentos de tranquilidade."}],b_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f3d777cf-17c2-4055-75a9-4be9fcc33800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0860b499-9c8c-4e99-192a-3ebe36229d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9dd5297d-5fba-438f-555c-8cb19bb82a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e8184c4c-b550-4166-7448-7492a7477f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/421cea52-70a2-477b-0331-b21666a29c00/public"],S_=[{NomedaSuite:"Suíte Standard 7",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte confortável de 52m², equipada com cama king-size, ar-condicionado e lareira. A varanda oferece uma vista encantadora da natureza, e o espaço é complementado por uma banheira relaxante e aquecedor de toalhas, garantindo uma estadia única."}],j_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd53b58-4a7e-428b-ff6f-73a485a99f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/46aeb5ba-8400-4a23-f4e4-df0d97083b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b151e809-9f33-4e2c-6f87-0903cb86db00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5651b927-c41d-4f77-f187-3796426ae300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/af920b8e-ebfe-482c-c876-683601310500/public"],C_=[{NomedaSuite:"Suíte Standard 8",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda NÃO privativa"}],Description:"Uma suíte de 52m² que conta com cama king-size, ar-condicionado e lareira para momentos relaxantes. A varanda, ainda, exibe uma vista de tirar o fôlego da natureza, e a banheira relaxante com aquecedor de toalhas traz um toque de luxo e conforto."}],k_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/40cb4a09-1c14-43cb-e17a-bf61a96c6300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/cd1824ad-8a82-49bf-ecdb-292e6a0e3500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/05d8b494-9ae3-429f-ed5c-8b192bf3e500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b70f4c55-c0c6-4356-0098-f6318c8ce600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c51dc547-138b-434c-dd48-60ae2ae95900/public"],T_=[{NomedaSuite:"Suíte Superior 9",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"52m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Esta suíte ampla, com 52m², dispõe de cama king-size, ar-condicionado e lareira, perfeita para aqueles momentos de aconchego. Enquanto a banheira relaxante e o aquecedor de toalhas garantem maior comodidade, a varanda privativa promove uma vista única da natureza."}],A_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b04be4b1-aa90-4228-6dad-507f08379500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8caf9f13-0f6c-48cf-5606-6b2b0ce5d000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/85e23a34-3058-43dc-a035-61fd0e65c700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/79feb4e3-78e2-4c90-92e3-b0acbe649300/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/63467d9f-7285-43e0-ce5e-e5a83e158300/public"],E_=[{NomedaSuite:"Suíte Master 10",NomedaPousada:"Le Ange Serra",features:[{icon:c.jsx(ke,{}),text:"80m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(df,{}),text:"Recamier e poltrona de leitura"},{icon:c.jsx(ht,{}),text:"Lareira"},{icon:c.jsx(th,{}),text:"Couch lounge"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Ampla varanda privativa"}],Description:"Experimente o máximo de conforto em 80m², com cama king-size, ar-condicionado e lareira. Aproveite a chaise lounge ao lado da bay window, a banheira com vista para a natureza, aquecedor de toalhas e, ainda, a varanda privativa, onde você pode relaxar ao som da mata."}],P_=()=>{const e=jn(),t={suite1:j.useRef(null),suite2:j.useRef(null),suite3:j.useRef(null),suite4:j.useRef(null),suite5:j.useRef(null),suite6:j.useRef(null),suite7:j.useRef(null),suite8:j.useRef(null),suite9:j.useRef(null),suite10:j.useRef(null)};return j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),j.useEffect(()=>{const n=()=>{var a;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((a=t[i])!=null&&a.current)){const o=t[i].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),c.jsxs(c.Fragment,{children:[c.jsx(Cn,{}),c.jsxs(l_,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Serra"})]}),c.jsx(We,{id:"suite1",ref:t.suite1,images:c_,suites:d_,reverse:!0,background:"#CAD76680"}),c.jsx(We,{id:"suite2",ref:t.suite2,images:u_,suites:f_,reverse:!1,background:"#CAD76680"}),c.jsx(We,{id:"suite3",ref:t.suite3,images:p_,suites:h_,reverse:!0,background:"#CAD76680"}),c.jsx(We,{id:"suite4",ref:t.suite4,images:m_,suites:g_,reverse:!1,background:"#CAD76680"}),c.jsx(We,{id:"suite5",ref:t.suite5,images:v_,suites:x_,reverse:!0,background:"#CAD76680"}),c.jsx(We,{id:"suite6",ref:t.suite6,images:y_,suites:w_,reverse:!1,background:"#CAD76680"}),c.jsx(We,{id:"suite7",ref:t.suite7,images:b_,suites:S_,reverse:!0,background:"#CAD76680"}),c.jsx(We,{id:"suite8",ref:t.suite8,images:j_,suites:C_,reverse:!1,background:"#CAD76680"}),c.jsx(We,{id:"suite9",ref:t.suite9,images:k_,suites:T_,reverse:!0,background:"#CAD76680"}),c.jsx(We,{id:"suite10",ref:t.suite10,images:A_,suites:E_,reverse:!1,background:"#CAD76680"}),c.jsx(Ar,{})]})};function Pr(e){return J({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"},child:[]},{tag:"path",attr:{d:"m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8"},child:[]}]})(e)}const G_=k.div`
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

`,__=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/224faac1-7f2b-4e14-8d75-e9190e813b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/353c8221-e9bf-49c5-6c43-103a69ae6800/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7dd92106-fe04-4e01-01f5-f174bef81a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/84dce2f1-97a8-466a-8d53-d20540b75a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0200d43-3f83-438c-49ab-338849f8c100/public"],z_=[{NomedaSuite:"Suíte Superior 1",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"50m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Pr,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"A suíte oferece 50m² de conforto e sofisticação. Com cama king-size, a suíte garante uma estadia relaxante com ar-condicionado, lareira e frigobar. Desfrute de momentos de bem-estar na banheira relaxante ou no chuveiro."}],L_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/11429c23-8024-4e73-d834-7af88bede500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/719761c8-54d7-4dba-e631-6557a1464600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1254a3f5-bae5-4110-5100-d17bf5602600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/541ebf7c-5343-4545-3d62-7862ea0c5b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/60c29539-7e27-476a-cec5-aa929f036100/public"],M_=[{NomedaSuite:"Suíte Standard 2",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Pr,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² é ideal para quem busca conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, você desfrutará de cada momento ao lado do seu pet. Recarregue as energias na banheira relaxante, aproveite a vista deslumbrante para o mar e sinta a brisa suave da maresia, tornando sua estadia ainda mais especial."}],O_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/89368e85-889e-41fc-eafe-e6a23b278600/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fca9fbcb-04a7-48b0-af5d-125a7da7a500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/01b5c7ac-d7a0-4647-a472-af2755980d00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c11df969-92ac-4b82-5923-72add6d2a400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ab284cc9-797e-4de3-706f-a8e3c9958300/public"],R_=[{NomedaSuite:"Suíte Superior 3",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Pr,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Com 45m², esta suíte conta com uma cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, oferecendo o necessário para uma estadia repleta de tranquilidade. A vista incrível para o mar, junto à suave maresia, proporciona momentos de relaxamento para aproveitar ao lado do seu pet."}],I_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/609d4224-77e9-4993-093c-7e6b6f53cd00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bf696df0-ff89-4aa5-b5ab-b42477dfc400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece7a36a-7989-4a77-c69e-963b7c41e500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7fd252cd-2c0a-420d-55e6-7ddb05319200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3bed0eb8-a9a7-4a71-48d5-7be1528fa400/public"],D_=[{NomedaSuite:"Suíte Superior 4",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Pr,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Desfrute de 45m² de conforto e tranquilidade nesta suíte aconchegante. Equipada com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é o ambiente perfeito para relaxar. Conta, ainda, com uma vista espetacular para o mar, combinada com a brisa fresca da maresia."}],N_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d47d93cd-1d83-4684-b2cd-23067ba58b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d214206-6623-468f-7d4e-40db9793d700/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2671e476-3ba9-402c-5864-0b3c4f2f6c00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f1a7a38f-4371-441a-2492-e7e0f97eee00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/be3dccd2-e019-4d93-9c6c-3b930d519c00/public"],V_=[{NomedaSuite:"Suíte Superior 5",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Pr,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Uma suíte de 45m² que une conforto e tranquilidade. Com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, é ideal para vivenciar aqueles momentos de preguiça ao lado do seu pet. Relaxe ao som das ondas do mar e aproveite a banheira relaxante."}],F_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9891374e-4514-480c-bc7c-5e1af0ef7b00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6747ab9c-105d-4e37-5be7-d14b63c6d100/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4ee59c14-ad1f-409b-db20-e49298d49400/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8d46666c-530f-42d4-9223-bdd74e4a7900/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/31a78bcb-34a0-4254-b51e-3f6ff4dbe600/public"],B_=[{NomedaSuite:"Suíte Superior 6",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Pr,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Com 45m² de puro conforto, esta suíte oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, proporcionando um ambiente mais do que acolhedor, tranquilo. Sem contar que a vista encantadora para o mar e a banheira de imersão tornam a suíte ainda mais relaxante."}],$_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9b174ce2-2966-4c9e-9faf-185da8d1d200/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b0924d25-dd2e-4a7b-5db4-558748300f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0c0b3f28-0981-477e-a77a-ee606e941f00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252537ee-171f-4f70-3bda-8479e0c1be00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b90bd076-582a-4fe6-3fb1-95a0ceadc700/public"],U_=[{NomedaSuite:"Suíte Master 7",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Pr,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"Esta suíte de 45m² oferece cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar, criando um espaço aconchegante e tranquilo. Aproveite a vista cativante para o mar e relaxe na banheira de imersão, transformando sua estadia em um verdadeiro paraíso."}],H_=["https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6280f6c6-f008-4f18-fe45-fe16d6d76000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eea5797e-34bc-4138-8ab7-9e4bd9fcd500/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c112a2dd-d613-4801-d4a0-8d30b5121a00/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/90902690-7a42-4cad-b8aa-4099c8b58000/public","https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c967f3cc-5ae6-4ea1-4e3e-2041f83cb600/public"],q_=[{NomedaSuite:"Suíte Master 8",NomedaPousada:"Le Ange Mar",features:[{icon:c.jsx(ke,{}),text:"45m²"},{icon:c.jsx(oe,{}),text:"Ar-condicionado"},{icon:c.jsx(Ze,{}),text:"Frigobar"},{icon:c.jsx(Pr,{}),text:"Cafeteira 3 corações"},{icon:c.jsx(Le,{}),text:"Smart TV"},{icon:c.jsx(De,{}),text:"Cama king-size"},{icon:c.jsx(Pe,{}),text:"Banheira relaxante"},{icon:c.jsx(oe,{}),text:"Aquecedor de toalhas"},{icon:c.jsx(Je,{}),text:"Varanda privativa"}],Description:"A suíte de 45m² oferece o melhor em conforto, com cama king-size, ar-condicionado, cafeteira 3 Corações e frigobar. A vista deslumbrante para o mar e a banheira de imersão garantem momentos de total descanso e relaxamento."}],W_=()=>{const e=jn(),t={suite1:j.useRef(null),suite2:j.useRef(null),suite3:j.useRef(null),suite4:j.useRef(null),suite5:j.useRef(null),suite6:j.useRef(null),suite7:j.useRef(null),suite8:j.useRef(null),suite9:j.useRef(null),suite10:j.useRef(null)};return j.useEffect(()=>{const n=()=>{var a;const i=e.hash.replace("#","");if(console.log("Hash atual:",i),i&&((a=t[i])!=null&&a.current)){const o=t[i].current;if(o){const s=o.offsetTop-100;console.log(`Elemento encontrado: ${i}, rolando para: ${s}px`),window.scrollTo({top:s,behavior:"smooth"})}else console.log(`Elemento com ID ${i} não encontrado no DOM.`)}else console.log(`Hash ${i} não está associado a um ref válido.`)},r=()=>{console.log("Página carregada, verificando hash..."),n()};return window.addEventListener("load",r),window.addEventListener("hashchange",n),n(),()=>{window.removeEventListener("load",r),window.removeEventListener("hashchange",n)}},[e,t]),j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Cn,{}),c.jsxs(G_,{children:["Acomodações da",c.jsx("b",{children:"Pousada Le Ange Mar"})]}),c.jsx(We,{id:"suite1",ref:t.suite1,images:__,suites:z_,reverse:!0,background:"#7AC4F350"}),c.jsx(We,{id:"suite2",ref:t.suite2,images:L_,suites:M_,reverse:!1,background:"#7AC4F350"}),c.jsx(We,{id:"suite3",ref:t.suite3,images:O_,suites:R_,reverse:!0,background:"#7AC4F350"}),c.jsx(We,{id:"suite4",ref:t.suite4,images:I_,suites:D_,reverse:!1,background:"#7AC4F350"}),c.jsx(We,{id:"suite5",ref:t.suite5,images:N_,suites:V_,reverse:!0,background:"#7AC4F350"}),c.jsx(We,{id:"suite6",ref:t.suite6,images:F_,suites:B_,reverse:!1,background:"#7AC4F350"}),c.jsx(We,{id:"suite7",ref:t.suite7,images:$_,suites:U_,reverse:!0,background:"#7AC4F350"}),c.jsx(We,{id:"suite8",ref:t.suite8,images:H_,suites:q_,reverse:!1,background:"#7AC4F350"}),c.jsx(Ar,{})]})},Y_=k.div`
    height: 5vh;

    @media (max-width: 768px) {
        height: 0vh;
    }
`,K_=k.section`
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
`,X_=k.div`
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
`,Q_=k.div`
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
`,J_=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/42a70d06-97d1-4f5c-5df8-36c30f21c100/public"},{title:"Praia",description:"Para os amantes da praia, estamos localizados a apenas 150 metros da Praia Rasa, onde você e o seu pet podem aproveitar juntinhos e dar um mergulho delicioso no mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da4810e5-6e85-45f5-1fcf-f6a74754bd00/public"},{title:"Piscina",description:"Nossa piscina aquecida com vista panorâmica para o oceano é de surpreender! Possui tratamento especial por ozônio com níveis baixíssimos de cloro, pensando no bem-estar da sua pele e a do seu pet também!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/09da9d76-57b8-4d44-02b2-3c4c2380c800/public"},{title:"Ofurôs",description:"São dois ofurôs acoplados na piscina, para você relaxar na água quentinha, apreciando a vista exuberante do mar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d1d1a6a-5935-4c57-6b12-d1f028604400/public"},{title:"Sala de estar",description:"A sala de estar é aquela que abraça e aconchega. Cheia de sofás, você pode se acomodar e assistir à televisão, ou até mesmo ler um livro, sempre na companhia do seu pet.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/939f40ce-048b-4746-7ce7-83fc2f4bbc00/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/bec96bcc-f2d6-431c-a7d5-31e1c5b7d000/public"},{title:"Bar",description:"Para completar ainda mais a sua experiência, contamos com uma carta variada de vinhos, destilados, drinks e cervejas!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/67318553-8e4b-4d4c-b914-3ea76fc7be00/public"},{title:"Suítes",description:"São 8 suítes, elegantemente, decoradas, todas com vista para o mar, banheira de imersão, varanda, cama king-size, ar-condicionado e frigobar.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4d6afdaf-1cfe-4860-8099-818abedfdd00/public"}],Z_=k.section`
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
`,ez=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/04491c1f-dc99-499a-4e92-13037b3eab00/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4551d99f-d7fa-440f-bdb1-9126c3a82100/public",text:"Suíte Standard 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a81bc75d-a475-4dc9-6101-2f7dbb4e4b00/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e0b4c640-813a-4586-bdf9-91b0be3f7300/public",text:"Suíte Superior 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/912f5f6c-6f94-4dae-30b3-85c460f0f700/public",text:"Suíte Superior 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/70b133ff-56ab-44b4-76b3-ef1638c79000/public",text:"Suíte Superior 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e9d95c2b-081d-4808-6bf6-431e89183c00/public",text:"Suíte Master 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/baf68f87-5db9-47ec-0fb5-dc4b5e1f4b00/public",text:"Suíte Master 8",loading:"lazy"}],tz=k.div`
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
`,nz=k.section`
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
`,rz=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"765,30",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Churrasco no sábado"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Almoço e noite especial"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],iz=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px) {
        display: none;
    }
`,az=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c9f443a0-365f-4341-67c4-dc3b15d8d200/public",alt:"Foto de cachorro com uma bola na boca",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f381312d-98e6-4e3a-2267-b72775b77800/public",alt:"Foto do cachorro sentado tomando sol",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ebe09a3c-386f-4683-b025-9734976d0b00/public",alt:"Cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/2ea4864a-bc1c-4b0f-c720-4f4db60d6600/public",alt:"Cachorro tirando uma selfie com outros 3 cachorros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0d4896d4-5675-4739-7cb3-30fc1c6dec00/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6a09554d-7f59-42f4-603b-bf2a3bf24600/public",alt:"Cachorro com a lingua para fora",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6f6a0274-479c-4c48-e1ce-23fa90998500/public",alt:"Cachorro na borda da piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b784a222-c8bc-4a35-ac3a-a6056d717300/public",alt:"Cachorro em uma prancha de surf na onda",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d826fa54-7c2b-47b9-9cb6-4e0540d8dd00/public",alt:"Cachorro com óculos escuros",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/00e287de-9719-47ee-0fb1-3ef507b3a800/public",alt:"Cachorro e um cachorro pequeno",loading:"lazy",label:"Le Ange Mar"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b4ddd8c3-b6c1-4c00-d54b-06a44c074900/public",alt:"Foto de um cachorro com uma taça do lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a6b63bf4-92e1-43d5-9a86-ed900bdc4800/public",alt:"3 cachorros e um homem na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1cd65a71-7f00-4f13-5a67-c4ff922d8f00/public",alt:"Cachorro marrom",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/366f42cc-6fe9-4fc0-5ef6-15ea8e420b00/public",alt:"Cachorro marrom na piscina",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5b19b1f4-fd46-4dc9-5faa-96995d69b400/public",alt:"Cachorro branco olhando para a camera",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/252ec971-e6a4-4b55-3e1b-2069f4570800/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/9ca851c2-347a-4f8c-752e-b90080865800/public",alt:"Cachorro em cima do morro olhando para o lado",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7a0ae482-3436-4db1-9ed3-c1c7b1b02b00/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Foto do cachorro olhando para a câmera",loading:"lazy",label:"Le Ange Mar"}],reverse:!0}],oz=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
`,sz=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(Y_,{}),c.jsx(Cn,{}),c.jsxs(K_,{children:[c.jsxs(Q_,{children:[c.jsxs("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:["Conheça a ",c.jsx("b",{children:"Le Ange Mar"}),", a pousada mais"]}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui, você e o seu pet são mais do que bem-vindos!"}),c.jsx("div",{children:c.jsx(Er,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",iconColor:"var(--color--black)",hoverBackgroundColor:"var(--color--blue)",hoverBorderColor:"var(--color--blue)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(oz,{children:"*Só permitimos crianças acima de 13 anos!"})]}),c.jsx(X_,{"data-aos":"fade-left","data-aos-delay":"200"})]}),c.jsx(tz,{"data-aos":"fade-in","data-aos-delay":"100",children:c.jsx("h1",{"data-aos":"fade-up","data-aos-delay":"300",children:"LeAnge Mar | Armação dos Búzios RJ"})}),c.jsx(da,{}),c.jsx(Z_,{"data-aos":"fade-up","data-aos-delay":"50",children:c.jsx(hc,{slides:J_,titleColor:"var(--color--blue)",buttonBgColor:"var(--color--blue)",imagePosition:"left"})}),c.jsx(A2,{images:ez}),c.jsx(mc,{colorDefinedBold:"var(--color--blue)","data-aos":"fade-up","data-aos-delay":"400"}),c.jsx(vc,{carousels:az,"data-aos":"fade-in","data-aos-delay":"400"}),c.jsx(iz,{children:c.jsx(lt,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(nz,{"data-aos":"fade-up","data-aos-delay":"400",children:c.jsx(Lo,{events:rz})}),c.jsx(gc,{}),c.jsx(Ar,{})]})),lz=k.div`
    height: 5vh;

    @media (max-width: 768px){
        height: 0vh!important;
    }
`,cz=k.section`
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
`,dz=k.div`
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
`,uz=k.div`
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
`,fz=[{title:"Pet Friendly",description:"Não temos restrições quanto ao porte ou raça do seu pet, também não cobramos taxas adicionais para a vinda deles. Aqui, o seu pet tem liberdade total para acessar todas as nossas comodidades!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db3f6942-0de2-433d-1235-33bfa547e500/public"},{title:"Aventura",description:"Na propriedade, há trilhas que percorrem a natureza, beirando o rio! Em diversos pontos, você pode dar uma paradinha para tomar um banho nas águas frescas e renovar as energias!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/b324ce14-d3d8-4fc3-fccf-b4b4a9806d00/public"},{title:"Refrescar",description:"Nossa maravilhosa piscina de borda infinita possui aquecimento solar e tratamento especial por ozônio, com níveis baixíssimos de cloro, além de contar com um ofurô acoplado, perfeito para aproveitar o final de tarde.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/8b7eae12-574b-40fd-5e6f-7f341c81a600/public"},{title:"Sossego",description:"A área da sauna fica situada ao lado da mata, envolvida pelo som relaxante do rio que passa. Aqui, você pode desfrutar de um hot tub abastecido por água natural e aquecido à lenha, o combo perfeito para você relaxar.",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/da7c577a-832a-4a84-d5fd-162e11915b00/public"},{title:"Lazer",description:"Nossas áreas internas contam com três salas superequipadas e aconchegantes, sendo elas: sala de TV, sala de estar, sala de jogos com mesa de bilhar, carteado, jogos de tabuleiro e biblioteca.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7c086b71-3c6b-442b-584c-dcdabe1be700/public"},{title:"Cozinha",description:"Todas as refeições estão incluídas: café da manhã, almoço, chá da tarde e jantar! Todas preparadas com muito tempero, amor e afeto.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c1c7acdf-aba7-443b-b1e5-3bdc237b3b00/public"},{title:"Diversão",description:"Espaço de sobra para o seu pet se divertir! Espaço agility à beira do lago, com muita grama, para o seu pet, correr, pular, brincar e, claro, nadar!",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c57174c4-9b12-4842-e8ff-6cfb4867a200/public"},{title:"Adega",description:"Para tornar a sua experiência ainda mais especial, contamos com uma adega subterrânea para a climatização perfeita dos vinhos, bar com carta variada de drinks, cervejas e destilados.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1a66d627-7861-4124-638d-d21ddef05100/public"},{title:"Suítes",description:"São 10 suítes encatadoras e cada uma possui o seu charme. Todas dispõem de uma banheira com vista para a natureza, lareira, cama king-size, ar-condicionado, frigobar e varanda.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/48a11406-659c-4d98-f2d8-6fc518ef6600/public"},{title:"Relaxar",description:"Relaxe no nosso SPA com uma vista de frente para a mata! Você pode escolher contratar os nossos serviços de massoterapia, manicure e pedicure.",buttonText:"Viver minha experiência agora",imageUrl:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/ece77d44-3478-4c00-cb8f-073b002ed400/public"}],pz=[{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c3cd47cc-01fa-43c8-ef2d-e57d8ba50d00/public",alt:"Cachorro surfando na piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/5bdb3546-6085-40a1-059b-b977978f2800/public",alt:"Cachorro andando na borda da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/e69c27cf-cc71-4a1a-c859-7604db2ec700/public",alt:"Cachorro sentado tomando sol e sorrindo para a foto",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f9af3c90-2ae9-4250-2ac9-afedce182000/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4fe90a96-3e1a-475e-bf6c-b2f68430b400/public",alt:"Cachorro mordendo uma bolinha",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fa931507-db19-427a-91a0-c30d8fb81800/public",alt:"Casal com um casal de cachorro sentado na beira da piscina",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/f0b0ec5f-6bd1-427d-7bc9-93253779d000/public",alt:"Mulher na cachoeira com cachorros brincando",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/82fb4467-00bc-422b-be3f-d13d0847d900/public",alt:"Mulher e cachorro na piscina sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3f981b12-4550-4d26-bdc6-1e3050abf600/public",alt:"3 cachorros tirando uma selfie",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/eff6d8ef-159a-46da-6fe7-0a826541f000/public",alt:"Cachorro dormindo na rede em cima da cachoeira",loading:"lazy",label:"Le Ange Serra"}]},{images:[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23c08875-4c8e-470d-3635-56f4cdfc1000/public",alt:"Cachorro dormindo no sofá",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7910dc1-2d38-46fe-c997-734005e71600/public",alt:"Cachorro papai noel",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/0ba1de25-a892-4ee8-7165-584f54f0b600/public",alt:"Um cachorro no cola de um humano sorrindo",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/6da69e80-1cff-41e2-5434-318840221800/public",alt:"2 cachorros e uma mulher no meio",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d9be2586-3341-4990-f3c8-685edcad8900/public",alt:"Cachorro na mão do tutor",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/dce2d881-18d3-4a3d-5b7e-ad7e364be300/public",alt:"2 cachorros sorrindo na rede",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fab67883-96b6-4f10-9c94-c5622ee8b000/public",alt:"Uma mulher e um cachorro do lado dela",loading:"lazy",label:"Le Ange Serra"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/56af4858-5fbf-438f-fac3-ee527c3a4600/public",alt:"3 cachorros brincando na praia",loading:"lazy",label:"Le Ange Mar"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/db285e3c-87b7-40db-b04b-cfd384d06200/public",alt:"Cachorro andando na cachoeira",loading:"lazy",label:"Le Ange Serra"}],reverse:!0}],hz=k.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: auto;
        padding: 0% 0 5% 0 ;
    }
`,mz=k.div`
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
`,gz=k.section`
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
`,vz=k.p`
  font-size: .9rem!important;
  opacity: .4;
  font-weight: 200;
`,xz=[{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/58c77a3d-d9fb-422f-c84b-ad4798b74600/public",title:"Fique 4 pague 3",dateRange:"Segunda-feira a Sexta-feira",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"449,00",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1e2853af-cbe7-48ba-a6cc-7e36642f0f00/public",title:"Pacote de Natal",dateRange:"21/12/2024 até 25/12/2024 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(Sn,{}),text:"Até 12X SEM JUROS"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"765,30",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/1ea7ed06-0da2-4123-00bf-c74543625600/public",title:"Pacote de Carnaval",dateRange:"28/02/2025 até 04/03/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Churrasco no sábado"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"757,25",discount:25},{image:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/7e26f340-d751-4102-9259-3b9ec67e3600/public",title:"Pacote de Páscoa",dateRange:"17/04/2025 até 21/04/2025 (4 diárias)",features:[{icon:c.jsx(fe,{}),text:"Todas as refeições incluídas"},{icon:c.jsx(fe,{}),text:"Almoço e noite especial"},{icon:c.jsx(Fe,{}),text:"Taxa pet free (não cobramos por pet)"}],price:"653,80",discount:25}],yz=k.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-bottom: -10vh;

    @media (max-width: 768px){
        display: none;
    }
`,wz=[{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/c21ef88c-f22b-497e-1e70-5c5b4c4cf500/public",text:"Suíte Superior 1",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/23d18593-f941-4c65-0349-6b23e6ea2800/public",text:"Suíte Superior 2",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/99db9a7b-dafd-4b04-36ce-c4eac6880600/public",text:"Suíte Superior 3",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/d07d16a0-e7f4-4104-7d5e-f7e4c2dfa500/public",text:"Suíte Standard 4",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/fd429f81-a091-4ca3-9f54-d4a1b730e200/public",text:"Suíte Standard 5",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a22d76b9-b7d4-4174-0cc1-4cfdfd57d500/public",text:"Suíte Master 6",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/a7ae1bee-6f60-4584-d03c-0aebd06a2600/public",text:"Suíte Superior 7",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/4c448474-8a7b-489b-ac5f-7b11c4dfad00/public",text:"Suíte Standard 8",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/509535a4-9291-44a8-c250-5e8be0b28e00/public",text:"Suíte Superior 9",loading:"lazy"},{src:"https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/853f4009-5ddc-49ad-717f-3d49d3ad4900/public",text:"Suíte Master 10",loading:"lazy"}],bz=()=>(j.useEffect(()=>{Ie.init({duration:1e3,once:!1}),Ie.refresh()},[]),c.jsxs(c.Fragment,{children:[c.jsx(Hn,{children:c.jsx("title",{children:"Le Ange Serra - Pousada Le Ange"})}),c.jsx(lz,{}),c.jsx(Cn,{}),c.jsxs(cz,{children:[c.jsx(dz,{"data-aos":"zoom-in","data-aos-delay":"100"}),c.jsxs(uz,{children:[c.jsx("h4",{"data-aos":"fade-up","data-aos-delay":"100",children:"Conheça a Le Ange Serra, a pousada mais"}),c.jsxs("h1",{"data-aos":"fade-down","data-aos-delay":"200",children:["PET FRIENDLY",c.jsx("br",{})," DO ",c.jsx("b",{children:"BRASIL"})]}),c.jsx("p",{children:"Aqui você e o seu pet, são mais do que bem-vindos!"}),c.jsx(Er,{text:"Reservar agora!",textColor:"var(--color--black)",backgroundColor:"transparent",borderColor:"var(--color--black)",hoverBackgroundColor:"var(--color--green)",hoverBorderColor:"var(--color--green)",hoverColor:"var(--color--white)",hoverIconColor:"var(--color--white)",onClick:()=>window.open("https://wa.link/dojlwi","_blank")}),c.jsx(vz,{children:"*Só permitimos crianças acima de 13 anos!"})]})]}),c.jsx(mz,{"data-aos":"fade-up","data-aos-delay":"200",children:c.jsx("h1",{"data-aos":"fade-in","data-aos-delay":"400",children:"LeAnge Serra | Miguel Pereira RJ"})}),c.jsx(da,{}),c.jsx(hz,{children:c.jsx(hc,{slides:fz})}),c.jsx(T2,{images:wz,"data-aos":"fade-up","data-aos-delay":"200"}),c.jsx(mc,{}),c.jsx(vc,{carousels:pz}),c.jsx(yz,{children:c.jsx(lt,{text:"Fazer minha reserva!",onClick:()=>window.open("https://wa.link/dojlwi","_blank")})}),c.jsx(gz,{children:c.jsx(Lo,{events:xz})}),c.jsx(gc,{}),c.jsx(Ar,{})]}));function Sz(){const{pathname:e}=jn();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function jz(){const e=jn();return c.jsxs(c.Fragment,{children:[c.jsx(Sz,{}),c.jsx(kS,{children:c.jsxs(H5,{location:e,children:[c.jsx(fn,{path:"/",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(fP,{})})}),c.jsx(fn,{path:"/sobre",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(UP,{})})}),c.jsx(fn,{path:"/mar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx($G,{})})}),c.jsx(fn,{path:"/serra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(TG,{})})}),c.jsx(fn,{path:"/event",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(MP,{})})}),c.jsx(fn,{path:"/acomodaMar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(W_,{})})}),c.jsx(fn,{path:"/acomodaSerra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(P_,{})})}),c.jsx(fn,{path:"/lpSerra",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(bz,{})})}),c.jsx(fn,{path:"/lpMar",element:c.jsx(Oe.div,{initial:{opacity:0,scale:.8,rotateY:90},animate:{opacity:1,scale:1,rotateY:0},exit:{opacity:0,scale:.8,rotateY:-90},transition:{duration:.2,ease:"easeInOut"},children:c.jsx(sz,{})})})]},e.pathname)})]})}function Cz(){const e=jn(),n=["/lpMar","/lpSerra"].includes(e.pathname);return c.jsxs(c.Fragment,{children:[!n&&c.jsx(ZG,{}),c.jsx(jz,{})]})}function kz(){return c.jsx(J5,{children:c.jsx(Cz,{})})}fx(document.getElementById("root")).render(c.jsx(j.StrictMode,{children:c.jsx(kz,{})}));
