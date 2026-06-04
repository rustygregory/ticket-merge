var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function D(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function O(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+D(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ne,`$&/`)+`/`),O(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+D(s,l);c+=O(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+D(s,l++),c+=O(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function k(e,t,n){if(e==null)return e;var r=[],i=0;return O(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function A(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j={current:null},M={transition:null},re={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:M,ReactCurrentOwner:C};function N(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:k,forEach:function(e,t,n){k(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return k(e,function(){t++}),t},toArray:function(e){return k(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,e.act=N,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:A}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},e.unstable_act=N,e.useCallback=function(e,t){return j.current.useCallback(e,t)},e.useContext=function(e){return j.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return j.current.useDeferredValue(e)},e.useEffect=function(e,t){return j.current.useEffect(e,t)},e.useId=function(){return j.current.useId()},e.useImperativeHandle=function(e,t,n){return j.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return j.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return j.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return j.current.useMemo(e,t)},e.useReducer=function(e,t,n){return j.current.useReducer(e,t,n)},e.useRef=function(e){return j.current.useRef(e)},e.useState=function(e){return j.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return j.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return j.current.useTransition()},e.version=`18.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,k(x);else{var t=n(l);t!==null&&A(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&A(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function ee(){return!(e.unstable_now()-E<T)}function te(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?ne():(S=!1,C=null)}}else S=!1}var ne;if(typeof v==`function`)ne=function(){v(te)};else if(typeof MessageChannel<`u`){var D=new MessageChannel,O=D.port2;D.port1.onmessage=te,ne=function(){O.postMessage(null)}}else ne=function(){g(te,0)};function k(e){C=e,S||(S=!0,ne())}function A(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,k(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,A(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,k(x))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),ee=Symbol.for(`react.strict_mode`),te=Symbol.for(`react.profiler`),ne=Symbol.for(`react.provider`),D=Symbol.for(`react.context`),O=Symbol.for(`react.forward_ref`),k=Symbol.for(`react.suspense`),A=Symbol.for(`react.suspense_list`),j=Symbol.for(`react.memo`),M=Symbol.for(`react.lazy`),re=Symbol.for(`react.offscreen`),N=Symbol.iterator;function ie(e){return typeof e!=`object`||!e?null:(e=N&&e[N]||e[`@@iterator`],typeof e==`function`?e:null)}var P=Object.assign,ae;function F(e){if(ae===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ae=t&&t[1]||``}return`
`+ae+e}var oe=!1;function se(e,t){if(!e||oe)return``;oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{oe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?F(e):``}function ce(e){switch(e.tag){case 5:return F(e.type);case 16:return F(`Lazy`);case 13:return F(`Suspense`);case 19:return F(`SuspenseList`);case 0:case 2:case 15:return e=se(e.type,!1),e;case 11:return e=se(e.type.render,!1),e;case 1:return e=se(e.type,!0),e;default:return``}}function le(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case te:return`Profiler`;case ee:return`StrictMode`;case k:return`Suspense`;case A:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case D:return(e.displayName||`Context`)+`.Consumer`;case ne:return(e._context.displayName||`Context`)+`.Provider`;case O:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case j:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case M:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return le(t);case 8:return t===ee?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function I(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function de(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function fe(e){var t=de(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function L(e){e._valueTracker||=fe(e)}function pe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=de(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function me(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function he(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ge(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=I(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function _e(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function ve(e,t){_e(e,t);var n=I(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?be(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&be(e,t.type,I(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ye(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function be(e,t,n){(t!==`number`||me(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var xe=Array.isArray;function Se(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+I(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ce(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return P({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function we(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(xe(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:I(n)}}function Te(e,t){var n=I(t.value),r=I(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Ee(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function De(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Oe(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?De(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var ke,Ae=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(ke||=document.createElement(`div`),ke.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function je(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Me).forEach(function(e){Ne.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Me[t]=Me[e]})});function Pe(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Me.hasOwnProperty(e)&&Me[e]?(``+t).trim():t+`px`}function Fe(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Pe(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var Ie=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Le(e,t){if(t){if(Ie[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Re(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var ze=null;function Be(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ve=null,He=null,Ue=null;function We(e){if(e=Bi(e)){if(typeof Ve!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Hi(t),Ve(e.stateNode,e.type,t))}}function Ge(e){He?Ue?Ue.push(e):Ue=[e]:He=e}function Ke(){if(He){var e=He,t=Ue;if(Ue=He=null,We(e),t)for(e=0;e<t.length;e++)We(t[e])}}function qe(e,t){return e(t)}function Je(){}var Ye=!1;function Xe(e,t,n){if(Ye)return e(t,n);Ye=!0;try{return qe(e,t,n)}finally{Ye=!1,(He!==null||Ue!==null)&&(Je(),Ke())}}function Ze(e,t){var n=e.stateNode;if(n===null)return null;var i=Hi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var Qe=!1;if(c)try{var $e={};Object.defineProperty($e,"passive",{get:function(){Qe=!0}}),window.addEventListener(`test`,$e,$e),window.removeEventListener(`test`,$e,$e)}catch{Qe=!1}function et(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var tt=!1,nt=null,rt=!1,it=null,at={onError:function(e){tt=!0,nt=e}};function ot(e,t,n,r,i,a,o,s,c){tt=!1,nt=null,et.apply(at,arguments)}function st(e,t,n,i,a,o,s,c,l){if(ot.apply(this,arguments),tt){if(tt){var u=nt;tt=!1,nt=null}else throw Error(r(198));rt||(rt=!0,it=u)}}function ct(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ut(e){if(ct(e)!==e)throw Error(r(188))}function dt(e){var t=e.alternate;if(!t){if(t=ct(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return ut(a),e;if(o===i)return ut(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function ft(e){return e=dt(e),e===null?null:pt(e)}function pt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pt(e);if(t!==null)return t;e=e.sibling}return null}var mt=n.unstable_scheduleCallback,ht=n.unstable_cancelCallback,gt=n.unstable_shouldYield,_t=n.unstable_requestPaint,R=n.unstable_now,vt=n.unstable_getCurrentPriorityLevel,yt=n.unstable_ImmediatePriority,bt=n.unstable_UserBlockingPriority,xt=n.unstable_NormalPriority,St=n.unstable_LowPriority,Ct=n.unstable_IdlePriority,wt=null,Tt=null;function Et(e){if(Tt&&typeof Tt.onCommitFiberRoot==`function`)try{Tt.onCommitFiberRoot(wt,e,void 0,(e.current.flags&128)==128)}catch{}}var Dt=Math.clz32?Math.clz32:At,Ot=Math.log,kt=Math.LN2;function At(e){return e>>>=0,e===0?32:31-(Ot(e)/kt|0)|0}var jt=64,Mt=4194304;function Nt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Nt(a))):r=Nt(s)}else o=n&~i,o===0?a!==0&&(r=Nt(a)):r=Nt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Dt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ft(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Lt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Rt(){var e=jt;return jt<<=1,!(jt&4194240)&&(jt=64),e}function zt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function Vt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Dt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ht(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function Ut(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wt,Gt,Kt,qt,Jt,Yt=!1,Xt=[],Zt=null,Qt=null,$t=null,en=new Map,tn=new Map,nn=[],rn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function an(e,t){switch(e){case`focusin`:case`focusout`:Zt=null;break;case`dragenter`:case`dragleave`:Qt=null;break;case`mouseover`:case`mouseout`:$t=null;break;case`pointerover`:case`pointerout`:en.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:tn.delete(t.pointerId)}}function on(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Bi(t),t!==null&&Gt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sn(e,t,n,r,i){switch(t){case`focusin`:return Zt=on(Zt,e,t,n,r,i),!0;case`dragenter`:return Qt=on(Qt,e,t,n,r,i),!0;case`mouseover`:return $t=on($t,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return en.set(a,on(en.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,tn.set(a,on(tn.get(a)||null,e,t,n,r,i)),!0}return!1}function cn(e){var t=zi(e.target);if(t!==null){var n=ct(t);if(n!==null){if(t=n.tag,t===13){if(t=lt(n),t!==null){e.blockedOn=t,Jt(e.priority,function(){Kt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ln(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ze=r,n.target.dispatchEvent(r),ze=null}else return t=Bi(n),t!==null&&Gt(t),e.blockedOn=n,!1;t.shift()}return!0}function un(e,t,n){ln(e)&&n.delete(t)}function dn(){Yt=!1,Zt!==null&&ln(Zt)&&(Zt=null),Qt!==null&&ln(Qt)&&(Qt=null),$t!==null&&ln($t)&&($t=null),en.forEach(un),tn.forEach(un)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yt||(Yt=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,dn)))}function pn(e){function t(t){return fn(t,e)}if(0<Xt.length){fn(Xt[0],e);for(var n=1;n<Xt.length;n++){var r=Xt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&fn(Zt,e),Qt!==null&&fn(Qt,e),$t!==null&&fn($t,e),en.forEach(t),tn.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)cn(n),n.blockedOn===null&&nn.shift()}var mn=C.ReactCurrentBatchConfig,hn=!0;function gn(e,t,n,r){var i=z,a=mn.transition;mn.transition=null;try{z=1,vn(e,t,n,r)}finally{z=i,mn.transition=a}}function _n(e,t,n,r){var i=z,a=mn.transition;mn.transition=null;try{z=4,vn(e,t,n,r)}finally{z=i,mn.transition=a}}function vn(e,t,n,r){if(hn){var i=bn(e,t,n,r);if(i===null)di(e,t,r,yn,n),an(e,r);else if(sn(i,e,t,n,r))r.stopPropagation();else if(an(e,r),t&4&&-1<rn.indexOf(e)){for(;i!==null;){var a=Bi(i);if(a!==null&&Wt(a),a=bn(e,t,n,r),a===null&&di(e,t,r,yn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else di(e,t,r,null,n)}}var yn=null;function bn(e,t,n,r){if(yn=null,e=Be(r),e=zi(e),e!==null)if(t=ct(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yn=e,null}function xn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(vt()){case yt:return 1;case bt:return 4;case xt:case St:return 16;case Ct:return 536870912;default:return 16}default:return 16}}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=P({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=P({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(P({},Ln,{dataTransfer:0})),B=kn(P({},Mn,{relatedTarget:0})),Bn=kn(P({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=kn(P({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=kn(P({},An,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},V={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=kn(P({},Mn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?V[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=kn(P({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=kn(P({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=kn(P({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=kn(P({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=[9,13,27,32],$n=c&&`CompositionEvent`in window,er=null;c&&`documentMode`in document&&(er=document.documentMode);var tr=c&&`TextEvent`in window&&!er,nr=c&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Tn(),wn=Cn=Sn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){Ge(r),t=pi(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){oi(e,0)}function gr(e){if(pe(Vi(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(c){var yr;if(c){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,Be(e)),Xe(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(){for(var e=window,t=me();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=me(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Ir(e){var t=Pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nr(n.ownerDocument.documentElement,n)){if(r!==null&&Fr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Mr(n,a);var o=Mr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lr=c&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==me(r)||(r=Rr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&Ar(Br,r)||(Br=r,r=pi(zr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};c&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionend`),Qr=new Map,$r=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ei(e,t){Qr.set(e,t),o(t,[e])}for(var ti=0;ti<$r.length;ti++){var ni=$r[ti];ei(ni.toLowerCase(),`on`+(ni[0].toUpperCase()+ni.slice(1)))}ei(Jr,`onAnimationEnd`),ei(Yr,`onAnimationIteration`),ei(Xr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Zr,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ri=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),ii=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ri));function ai(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,st(r,t,void 0,e),e.currentTarget=null}function oi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;ai(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;ai(i,s,l),a=c}}}if(rt)throw e=it,rt=!1,it=null,e}function H(e,t){var n=t[Ii];n===void 0&&(n=t[Ii]=new Set);var r=e+`__bubble`;n.has(r)||(ui(t,e,2,!1),n.add(r))}function si(e,t,n){var r=0;t&&(r|=4),ui(n,e,r,t)}var ci=`_reactListening`+Math.random().toString(36).slice(2);function li(e){if(!e[ci]){e[ci]=!0,i.forEach(function(t){t!==`selectionchange`&&(ii.has(t)||si(t,!1,e),si(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,si(`selectionchange`,!1,t))}}function ui(e,t,n,r){switch(xn(t)){case 1:var i=gn;break;case 4:i=_n;break;default:i=vn}n=i.bind(null,t,n,e),i=void 0,!Qe||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function di(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=zi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}Xe(function(){var r=a,i=Be(n),o=[];a:{var s=Qr.get(e);if(s!==void 0){var c=jn,l=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:c=qn;break;case`focusin`:l=`focus`,c=B;break;case`focusout`:l=`blur`,c=B;break;case`beforeblur`:case`afterblur`:c=B;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Yn;break;case Jr:case Yr:case Xr:c=Bn;break;case Zr:c=Xn;break;case`scroll`:c=Nn;break;case`wheel`:c=Zn;break;case`copy`:case`cut`:case`paste`:c=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Jn}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=Ze(p,f),h!=null&&u.push(fi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==ze&&(l=n.relatedTarget||n.fromElement)&&(zi(l)||l[Fi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?zi(l):null,l!==null&&(d=ct(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Rn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=Jn,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Vi(c),m=l==null?s:Vi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,zi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=mi(m))p++;for(m=0,h=f;h;h=mi(h))m++;for(;0<p-m;)u=mi(u),p--;for(;0<m-p;)f=mi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=mi(u),f=mi(f)}u=null}else u=null;c!==null&&hi(o,s,c,u,!1),l!==null&&d!==null&&hi(o,d,l,u,!0)}}a:{if(s=r?Vi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=_r;else if(dr(s))if(vr)g=Dr;else{g=Tr;var _=wr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Er);if(g&&=g(e,r)){fr(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&be(s,`number`,s.value)}switch(_=r?Vi(r):window,e){case`focusin`:(dr(_)||_.contentEditable===`true`)&&(Rr=_,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(o,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(o,n,i)}var v;if($n)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else sr?ar(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(nr&&n.locale!==`ko`&&(sr||y!==`onCompositionStart`?y===`onCompositionEnd`&&sr&&(v=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,sr=!0)),_=pi(r,y),0<_.length&&(y=new Hn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=or(n),v!==null&&(y.data=v)))),(v=tr?cr(e,n):lr(e,n))&&(r=pi(r,`onBeforeInput`),0<r.length&&(i=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}oi(o,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ze(e,n),a!=null&&r.unshift(fi(e,a,i)),a=Ze(e,t),a!=null&&r.push(fi(e,a,i))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hi(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=Ze(n,a),c!=null&&o.unshift(fi(n,c,s))):i||(c=Ze(n,a),c!=null&&o.push(fi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gi=/\r\n?/g,_i=/\u0000|\uFFFD/g;function vi(e){return(typeof e==`string`?e:``+e).replace(gi,`
`).replace(_i,``)}function yi(e,t,n){if(t=vi(t),vi(e)!==t&&n)throw Error(r(425))}function bi(){}var xi=null,Si=null;function Ci(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout==`function`?setTimeout:void 0,Ti=typeof clearTimeout==`function`?clearTimeout:void 0,Ei=typeof Promise==`function`?Promise:void 0,Di=typeof queueMicrotask==`function`?queueMicrotask:Ei===void 0?wi:function(e){return Ei.resolve(null).then(e).catch(Oi)};function Oi(e){setTimeout(function(){throw e})}function ki(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),pn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);pn(t)}function Ai(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function ji(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Mi=Math.random().toString(36).slice(2),Ni=`__reactFiber$`+Mi,Pi=`__reactProps$`+Mi,Fi=`__reactContainer$`+Mi,Ii=`__reactEvents$`+Mi,Li=`__reactListeners$`+Mi,Ri=`__reactHandles$`+Mi;function zi(e){var t=e[Ni];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fi]||n[Ni]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ji(e);e!==null;){if(n=e[Ni])return n;e=ji(e)}return t}e=n,n=e.parentNode}return null}function Bi(e){return e=e[Ni]||e[Fi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Hi(e){return e[Pi]||null}var Ui=[],Wi=-1;function Gi(e){return{current:e}}function U(e){0>Wi||(e.current=Ui[Wi],Ui[Wi]=null,Wi--)}function W(e,t){Wi++,Ui[Wi]=e.current,e.current=t}var Ki={},qi=Gi(Ki),Ji=Gi(!1),Yi=Ki;function Xi(e,t){var n=e.type.contextTypes;if(!n)return Ki;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Zi(e){return e=e.childContextTypes,e!=null}function Qi(){U(Ji),U(qi)}function $i(e,t,n){if(qi.current!==Ki)throw Error(r(168));W(qi,t),W(Ji,n)}function ea(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ue(e)||`Unknown`,a));return P({},n,i)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ki,Yi=qi.current,W(qi,e),W(Ji,Ji.current),!0}function na(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ea(e,t,Yi),i.__reactInternalMemoizedMergedChildContext=e,U(Ji),U(qi),W(qi,e)):U(Ji),W(Ji,n)}var ra=null,ia=!1,aa=!1;function oa(e){ra===null?ra=[e]:ra.push(e)}function sa(e){ia=!0,oa(e)}function ca(){if(!aa&&ra!==null){aa=!0;var e=0,t=z;try{var n=ra;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ra=null,ia=!1}catch(t){throw ra!==null&&(ra=ra.slice(e+1)),mt(yt,ca),t}finally{z=t,aa=!1}}return null}var la=[],ua=0,da=null,fa=0,pa=[],ma=0,ha=null,ga=1,G=``;function _a(e,t){la[ua++]=fa,la[ua++]=da,da=e,fa=t}function va(e,t,n){pa[ma++]=ga,pa[ma++]=G,pa[ma++]=ha,ha=e;var r=ga;e=G;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var a=32-Dt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ga=1<<32-Dt(t)+i|n<<i|r,G=a+e}else ga=1<<a|n<<i|r,G=e}function ya(e){e.return!==null&&(_a(e,1),va(e,1,0))}function ba(e){for(;e===da;)da=la[--ua],la[ua]=null,fa=la[--ua],la[ua]=null;for(;e===ha;)ha=pa[--ma],pa[ma]=null,G=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null}var xa=null,Sa=null,K=!1,Ca=null;function wa(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ta(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,xa=e,Sa=Ai(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,xa=e,Sa=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=ha===null?null:{id:ga,overflow:G},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xa=e,Sa=null,!0);default:return!1}}function Ea(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Da(e){if(K){var t=Sa;if(t){var n=t;if(!Ta(e,t)){if(Ea(e))throw Error(r(418));t=Ai(n.nextSibling);var i=xa;t&&Ta(e,t)?wa(i,n):(e.flags=e.flags&-4097|2,K=!1,xa=e)}}else{if(Ea(e))throw Error(r(418));e.flags=e.flags&-4097|2,K=!1,xa=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xa=e}function ka(e){if(e!==xa)return!1;if(!K)return Oa(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!Ci(e.type,e.memoizedProps)),t&&=Sa){if(Ea(e))throw Aa(),Error(r(418));for(;t;)wa(e,t),t=Ai(t.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Sa=Ai(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Sa=null}}else Sa=xa?Ai(e.stateNode.nextSibling):null;return!0}function Aa(){for(var e=Sa;e;)e=Ai(e.nextSibling)}function ja(){Sa=xa=null,K=!1}function Ma(e){Ca===null?Ca=[e]:Ca.push(e)}var Na=C.ReactCurrentBatchConfig;function Pa(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Fa(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ia(e){var t=e._init;return t(e._payload)}function La(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===M&&Ia(i)===t.type)?(r=a(t,n.props),r.ref=Pa(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=Pa(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=Pa(e,null,t),n.return=e,n;case T:return t=eu(t,e.mode,n),t.return=e,t;case M:var r=t._init;return f(e,r(t._payload),n)}if(xe(t)||ie(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Fa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case M:return i=n._init,p(e,t,i(n._payload),r)}if(xe(n)||ie(n))return i===null?d(e,t,n,r,null):null;Fa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case M:var a=r._init;return m(e,t,n,a(r._payload),i)}if(xe(r)||ie(r))return e=e.get(n)||null,d(t,e,r,i,null);Fa(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),K&&_a(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return K&&_a(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),K&&_a(r,h),l}function g(a,s,c,l){var u=ie(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),K&&_a(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return K&&_a(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),K&&_a(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===M&&Ia(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Pa(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===E?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=Pa(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case M:return l=i._init,_(e,r,l(i._payload),o)}if(xe(i))return h(e,r,i,o);if(ie(i))return g(e,r,i,o);Fa(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ra=La(!0),za=La(!1),Ba=Gi(null),Va=null,Ha=null,Ua=null;function Wa(){Ua=Ha=Va=null}function Ga(e){var t=Ba.current;U(Ba),e._currentValue=t}function Ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qa(e,t){Va=e,Ua=Ha=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ps=!0),e.firstContext=null)}function Ja(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},Ha===null){if(Va===null)throw Error(r(308));Ha=e,Va.dependencies={lanes:0,firstContext:e}}else Ha=Ha.next=e;return t}var Ya=null;function Xa(e){Ya===null?Ya=[e]:Ya.push(e)}function Za(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qa(e,r)}function Qa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $a=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function to(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function no(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ro(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qa(e,n)}return i=r.interleaved,i===null?(t.next=t,Xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qa(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ht(e,n)}}function ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;$a=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=P({},d,f);break a;case 2:$a=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yc|=o,e.lanes=o,e.memoizedState=d}}function so(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var co={},lo=Gi(co),uo=Gi(co),fo=Gi(co);function po(e){if(e===co)throw Error(r(174));return e}function mo(e,t){switch(W(fo,t),W(uo,e),W(lo,co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oe(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oe(t,e)}U(lo),W(lo,t)}function ho(){U(lo),U(uo),U(fo)}function go(e){po(fo.current);var t=po(lo.current),n=Oe(t,e.type);t!==n&&(W(uo,e),W(lo,n))}function _o(e){uo.current===e&&(U(lo),U(uo))}var q=Gi(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function bo(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var xo=C.ReactCurrentDispatcher,So=C.ReactCurrentBatchConfig,Co=0,J=null,wo=null,To=null,Eo=!1,Do=!1,Oo=0,ko=0;function Ao(){throw Error(r(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Mo(e,t,n,i,a,o){if(Co=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?ms:hs,e=n(i,a),Do){o=0;do{if(Do=!1,Oo=0,25<=o)throw Error(r(301));o+=1,To=wo=null,t.updateQueue=null,xo.current=gs,e=n(i,a)}while(Do)}if(xo.current=ps,t=wo!==null&&wo.next!==null,Co=0,To=wo=J=null,Eo=!1,t)throw Error(r(300));return e}function No(){var e=Oo!==0;return Oo=0,e}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return To===null?J.memoizedState=To=e:To=To.next=e,To}function Fo(){if(wo===null){var e=J.alternate;e=e===null?null:e.memoizedState}else e=wo.next;var t=To===null?J.memoizedState:To.next;if(t!==null)To=t,wo=e;else{if(e===null)throw Error(r(310));wo=e,e={memoizedState:wo.memoizedState,baseState:wo.baseState,baseQueue:wo.baseQueue,queue:wo.queue,next:null},To===null?J.memoizedState=To=e:To=To.next=e}return To}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=wo,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Co&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,J.lanes|=d,Yc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,kr(i,t.memoizedState)||(Ps=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,J.lanes|=o,Yc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ro(e){var t=Fo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(Ps=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function zo(){}function Bo(e,t){var n=J,i=Fo(),a=t(),o=!kr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ps=!0),i=i.queue,Zo(Uo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||To!==null&&To.memoizedState.tag&1){if(n.flags|=2048,Ko(9,Ho.bind(null,n,i,a,t),void 0,null),Hc===null)throw Error(r(349));Co&30||Vo(n,t,a)}return a}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function Go(e){var t=Qa(e,1);t!==null&&hl(t,e,1,-1)}function Y(e){var t=Po();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t.queue=e,e=e.dispatch=ls.bind(null,J,e),[t.memoizedState,e]}function Ko(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qo(){return Fo().memoizedState}function Jo(e,t,n,r){var i=Po();J.flags|=e,i.memoizedState=Ko(1|t,n,void 0,r===void 0?null:r)}function Yo(e,t,n,r){var i=Fo();r=r===void 0?null:r;var a=void 0;if(wo!==null){var o=wo.memoizedState;if(a=o.destroy,r!==null&&jo(r,o.deps)){i.memoizedState=Ko(t,n,a,r);return}}J.flags|=e,i.memoizedState=Ko(1|t,n,a,r)}function Xo(e,t){return Jo(8390656,8,e,t)}function Zo(e,t){return Yo(2048,8,e,t)}function Qo(e,t){return Yo(4,2,e,t)}function $o(e,t){return Yo(4,4,e,t)}function es(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ts(e,t,n){return n=n==null?null:n.concat([e]),Yo(4,4,es.bind(null,t,e),n)}function ns(){}function rs(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function is(e,t){var n=Fo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function as(e,t,n){return Co&21?(kr(n,t)||(n=Rt(),J.lanes|=n,Yc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ps=!0),e.memoizedState=n)}function os(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=So.transition;So.transition={};try{e(!1),t()}finally{z=n,So.transition=r}}function ss(){return Fo().memoizedState}function cs(e,t,n){var r=ml(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},us(e))ds(t,n);else if(n=Za(e,t,n,r),n!==null){var i=pl();hl(n,e,r,i),fs(n,t,r)}}function ls(e,t,n){var r=ml(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(us(e))ds(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o)){var c=t.interleaved;c===null?(i.next=i,Xa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Za(e,t,i,r),n!==null&&(i=pl(),hl(n,e,r,i),fs(n,t,r))}}function us(e){var t=e.alternate;return e===J||t!==null&&t===J}function ds(e,t){Do=Eo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ht(e,n)}}var ps={readContext:Ja,useCallback:Ao,useContext:Ao,useEffect:Ao,useImperativeHandle:Ao,useInsertionEffect:Ao,useLayoutEffect:Ao,useMemo:Ao,useReducer:Ao,useRef:Ao,useState:Ao,useDebugValue:Ao,useDeferredValue:Ao,useTransition:Ao,useMutableSource:Ao,useSyncExternalStore:Ao,useId:Ao,unstable_isNewReconciler:!1},ms={readContext:Ja,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:Ja,useEffect:Xo,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),Jo(4194308,4,es.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=Po();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Po();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cs.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:Y,useDebugValue:ns,useDeferredValue:function(e){return Po().memoizedState=e},useTransition:function(){var e=Y(!1),t=e[0];return e=os.bind(null,e[1]),Po().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=J,a=Po();if(K){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Hc===null)throw Error(r(349));Co&30||Vo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Xo(Uo.bind(null,i,o,e),[e]),i.flags|=2048,Ko(9,Ho.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Po(),t=Hc.identifierPrefix;if(K){var n=G,r=ga;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=Oo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=ko++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},hs={readContext:Ja,useCallback:rs,useContext:Ja,useEffect:Zo,useImperativeHandle:ts,useInsertionEffect:Qo,useLayoutEffect:$o,useMemo:is,useReducer:Lo,useRef:qo,useState:function(){return Lo(Io)},useDebugValue:ns,useDeferredValue:function(e){return as(Fo(),wo.memoizedState,e)},useTransition:function(){return[Lo(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:ss,unstable_isNewReconciler:!1},gs={readContext:Ja,useCallback:rs,useContext:Ja,useEffect:Zo,useImperativeHandle:ts,useInsertionEffect:Qo,useLayoutEffect:$o,useMemo:is,useReducer:Ro,useRef:qo,useState:function(){return Ro(Io)},useDebugValue:ns,useDeferredValue:function(e){var t=Fo();return wo===null?t.memoizedState=e:as(t,wo.memoizedState,e)},useTransition:function(){return[Ro(Io)[0],Fo().memoizedState]},useMutableSource:zo,useSyncExternalStore:Bo,useId:ss,unstable_isNewReconciler:!1};function _s(e,t){if(e&&e.defaultProps){for(var n in t=P({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=no(r,i);a.payload=t,n!=null&&(a.callback=n),t=ro(e,a,i),t!==null&&(hl(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pl(),i=ml(e),a=no(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ro(e,a,i),t!==null&&(hl(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pl(),r=ml(e),i=no(n,r);i.tag=2,t!=null&&(i.callback=t),t=ro(e,i,r),t!==null&&(hl(t,e,r,n),io(t,e,r))}};function bs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function xs(e,t,n){var r=!1,i=Ki,a=t.contextType;return typeof a==`object`&&a?a=Ja(a):(i=Zi(t)?Yi:qi.current,r=t.contextTypes,a=(r=r!=null)?Xi(e,i):Ki),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ss(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eo(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ja(a):(a=Zi(t)?Yi:qi.current,i.context=Xi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(vs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&ys.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function ws(e,t){try{var n=``,r=t;do n+=ce(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Es(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ds=typeof WeakMap==`function`?WeakMap:Map;function Os(e,t,n){n=no(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,il=r),Es(e,t)},n}function ks(e,t,n){n=no(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Es(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){Es(e,t),typeof r!=`function`&&(al===null?al=new Set([this]):al.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function As(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ds;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function js(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ms(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=no(-1,1),t.tag=2,ro(n,t,1))),n.lanes|=1),e)}var Ns=C.ReactCurrentOwner,Ps=!1;function X(e,t,n,r){t.child=e===null?za(t,null,n,r):Ra(t,e.child,n,r)}function Fs(e,t,n,r,i){n=n.render;var a=t.ref;return qa(t,i),r=Mo(e,t,n,r,a,i),n=No(),e!==null&&!Ps?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tc(e,t,i)):(K&&n&&ya(t),t.flags|=1,X(e,t,r,i),t.child)}function Is(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ls(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return tc(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref)if(Ps=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ps=!0);else return t.lanes=e.lanes,tc(e,t,i)}return Bs(e,t,n,r,i)}function Rs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Kc,Gc),Gc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Kc,Gc),Gc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,W(Kc,Gc),Gc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),W(Kc,Gc),Gc|=r;return X(e,t,i,n),t.child}function zs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bs(e,t,n,r,i){var a=Zi(n)?Yi:qi.current;return a=Xi(t,a),qa(t,i),n=Mo(e,t,n,r,a,i),r=No(),e!==null&&!Ps?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tc(e,t,i)):(K&&r&&ya(t),t.flags|=1,X(e,t,n,i),t.child)}function Vs(e,t,n,r,i){if(Zi(n)){var a=!0;ta(t)}else a=!1;if(qa(t,i),t.stateNode===null)ec(e,t),xs(t,n,r),Cs(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ja(l):(l=Zi(n)?Yi:qi.current,l=Xi(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ss(t,o,r,l),$a=!1;var f=t.memoizedState;o.state=f,oo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Ji.current||$a?(typeof u==`function`&&(vs(t,n,u,r),c=t.memoizedState),(s=$a||bs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,to(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:_s(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ja(c):(c=Zi(n)?Yi:qi.current,c=Xi(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ss(t,o,r,c),$a=!1,f=t.memoizedState,o.state=f,oo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Ji.current||$a?(typeof p==`function`&&(vs(t,n,p,r),m=t.memoizedState),(l=$a||bs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,a,i)}function Hs(e,t,n,r,i,a){zs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&na(t,n,!1),tc(e,t,a);r=t.stateNode,Ns.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ra(t,e.child,null,a),t.child=Ra(t,null,s,a)):X(e,t,s,a),t.memoizedState=r.state,i&&na(t,n,!0),t.child}function Us(e){var t=e.stateNode;t.pendingContext?$i(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$i(e,t.context,!1),mo(e,t.containerInfo)}function Ws(e,t,n,r,i){return ja(),Ma(i),t.flags|=256,X(e,t,n,r),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function qs(e,t,n){var r=t.pendingProps,i=q.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(q,i&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ks(n),t.memoizedState=Gs,e):Js(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Xs(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Ks(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Gs,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function Ys(e,t,n,r){return r!==null&&Ma(r),Ra(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xs(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Ts(Error(r(422))),Ys(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ra(t,e.child,null,s),t.child.memoizedState=Ks(s),t.memoizedState=Gs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return Ys(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Ts(o,i,void 0),Ys(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ps||c){if(i=Hc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Qa(e,a),hl(i,e,a,-1))}return kl(),i=Ts(Error(r(421))),Ys(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Sa=Ai(a.nextSibling),xa=t,K=!0,Ca=null,e!==null&&(pa[ma++]=ga,pa[ma++]=G,pa[ma++]=ha,ga=e.id,G=e.overflow,ha=t),t=Js(t,i.children),t.flags|=4096,t)}function Zs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ka(e.return,t,n)}function Qs(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function $s(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(X(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zs(e,n,t);else if(e.tag===19)Zs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qs(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qs(t,!0,n,null,a);break;case`together`:Qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ec(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nc(e,t,n){switch(t.tag){case 3:Us(t),ja();break;case 5:go(t);break;case 1:Zi(t.type)&&ta(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(W(q,q.current&1),e=tc(e,t,n),e===null?null:e.sibling):qs(e,t,n):(W(q,q.current&1),t.flags|=128,null);W(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $s(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n)}return tc(e,t,n)}var rc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ic=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,po(lo.current);var o=null;switch(n){case`input`:i=he(e,i),r=he(e,r),o=[];break;case`select`:i=P({},i,{value:void 0}),r=P({},r,{value:void 0}),o=[];break;case`textarea`:i=Ce(e,i),r=Ce(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=bi)}Le(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&H(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function oc(e,t){if(!K)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function sc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cc(e,t,n){var i=t.pendingProps;switch(ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sc(t),null;case 1:return Zi(t.type)&&Qi(),sc(t),null;case 3:return i=t.stateNode,ho(),U(Ji),U(qi),bo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ca!==null&&(yl(Ca),Ca=null))),sc(t),null;case 5:_o(t);var o=po(fo.current);if(n=t.type,e!==null&&t.stateNode!=null)ic(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return sc(t),null}if(e=po(lo.current),ka(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ni]=t,i[Pi]=s,e=(t.mode&1)!=0,n){case`dialog`:H(`cancel`,i),H(`close`,i);break;case`iframe`:case`object`:case`embed`:H(`load`,i);break;case`video`:case`audio`:for(o=0;o<ri.length;o++)H(ri[o],i);break;case`source`:H(`error`,i);break;case`img`:case`image`:case`link`:H(`error`,i),H(`load`,i);break;case`details`:H(`toggle`,i);break;case`input`:ge(i,s),H(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},H(`invalid`,i);break;case`textarea`:we(i,s),H(`invalid`,i)}for(var c in Le(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&yi(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&yi(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&H(`scroll`,i)}switch(n){case`input`:L(i),ye(i,s,!0);break;case`textarea`:L(i),Ee(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=bi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=De(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ni]=t,e[Pi]=i,rc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Re(n,i),n){case`dialog`:H(`cancel`,e),H(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:H(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ri.length;o++)H(ri[o],e);o=i;break;case`source`:H(`error`,e),o=i;break;case`img`:case`image`:case`link`:H(`error`,e),H(`load`,e),o=i;break;case`details`:H(`toggle`,e),o=i;break;case`input`:ge(e,i),o=he(e,i),H(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=P({},i,{value:void 0}),H(`invalid`,e);break;case`textarea`:we(e,i),o=Ce(e,i),H(`invalid`,e);break;default:o=i}for(s in Le(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Fe(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ae(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&je(e,u):typeof u==`number`&&je(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&H(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:L(e),ye(e,i,!1);break;case`textarea`:L(e),Ee(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+I(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Se(e,!!i.multiple,i.defaultValue,!0):Se(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=bi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return sc(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=po(fo.current),po(lo.current),ka(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ni]=t,(s=i.nodeValue!==n)&&(e=xa,e!==null))switch(e.tag){case 3:yi(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&yi(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=t,t.stateNode=i}return sc(t),null;case 13:if(U(q),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Sa!==null&&t.mode&1&&!(t.flags&128))Aa(),ja(),t.flags|=98560,s=!1;else if(s=ka(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ni]=t}else ja(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;sc(t),s=!1}else Ca!==null&&(yl(Ca),Ca=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?qc===0&&(qc=3):kl())),t.updateQueue!==null&&(t.flags|=4),sc(t),null);case 4:return ho(),e===null&&li(t.stateNode.containerInfo),sc(t),null;case 10:return Ga(t.type._context),sc(t),null;case 17:return Zi(t.type)&&Qi(),sc(t),null;case 19:if(U(q),s=t.memoizedState,s===null)return sc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)oc(s,!1);else{if(qc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=vo(e),c!==null){for(t.flags|=128,oc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&R()>tl&&(t.flags|=128,i=!0,oc(s,!1),t.lanes=4194304)}else{if(!i)if(e=vo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!K)return sc(t),null}else 2*R()-s.renderingStartTime>tl&&n!==1073741824&&(t.flags|=128,i=!0,oc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(sc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=R(),t.sibling=null,n=q.current,W(q,i?n&1|2:n&1),t);case 22:case 23:return Tl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Gc&1073741824&&(sc(t),t.subtreeFlags&6&&(t.flags|=8192)):sc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function lc(e,t){switch(ba(t),t.tag){case 1:return Zi(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ho(),U(Ji),U(qi),bo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _o(t),null;case 13:if(U(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(q),null;case 4:return ho(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var uc=!1,dc=!1,fc=typeof WeakSet==`function`?WeakSet:Set,Z=null;function pc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}function mc(e,t,n){try{n()}catch(n){$(e,t,n)}}var hc=!1;function gc(e,t){if(xi=hn,e=Pr(),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Si={focusedElem:e,selectionRange:n},hn=!1,Z=t;Z!==null;)if(t=Z,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:_s(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return h=hc,hc=!1,h}function _c(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&mc(t,n,a)}i=i.next}while(i!==r)}}function vc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function bc(e){var t=e.alternate;t!==null&&(e.alternate=null,bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ni],delete t[Pi],delete t[Ii],delete t[Li],delete t[Ri])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bi));else if(r!==4&&(e=e.child,e!==null))for(Cc(e,t,n),e=e.sibling;e!==null;)Cc(e,t,n),e=e.sibling}function wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wc(e,t,n),e=e.sibling;e!==null;)wc(e,t,n),e=e.sibling}var Tc=null,Ec=!1;function Dc(e,t,n){for(n=n.child;n!==null;)Oc(e,t,n),n=n.sibling}function Oc(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount==`function`)try{Tt.onCommitFiberUnmount(wt,n)}catch{}switch(n.tag){case 5:dc||pc(n,t);case 6:var r=Tc,i=Ec;Tc=null,Dc(e,t,n),Tc=r,Ec=i,Tc!==null&&(Ec?(e=Tc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tc.removeChild(n.stateNode));break;case 18:Tc!==null&&(Ec?(e=Tc,n=n.stateNode,e.nodeType===8?ki(e.parentNode,n):e.nodeType===1&&ki(e,n),pn(e)):ki(Tc,n.stateNode));break;case 4:r=Tc,i=Ec,Tc=n.stateNode.containerInfo,Ec=!0,Dc(e,t,n),Tc=r,Ec=i;break;case 0:case 11:case 14:case 15:if(!dc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&mc(n,t,o),i=i.next}while(i!==r)}Dc(e,t,n);break;case 1:if(!dc&&(pc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}Dc(e,t,n);break;case 21:Dc(e,t,n);break;case 22:n.mode&1?(dc=(r=dc)||n.memoizedState!==null,Dc(e,t,n),dc=r):Dc(e,t,n);break;default:Dc(e,t,n)}}function kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fc),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Ac(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:Tc=c.stateNode,Ec=!1;break a;case 3:Tc=c.stateNode.containerInfo,Ec=!0;break a;case 4:Tc=c.stateNode.containerInfo,Ec=!0;break a}c=c.return}if(Tc===null)throw Error(r(160));Oc(o,s,a),Tc=null,Ec=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jc(t,e),t=t.sibling}function jc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ac(t,e),Mc(e),i&4){try{_c(3,e,e.return),vc(3,e)}catch(t){$(e,e.return,t)}try{_c(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Ac(t,e),Mc(e),i&512&&n!==null&&pc(n,n.return);break;case 5:if(Ac(t,e),Mc(e),i&512&&n!==null&&pc(n,n.return),e.flags&32){var a=e.stateNode;try{je(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&_e(a,o),Re(c,s);var u=Re(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Fe(a,f):d===`dangerouslySetInnerHTML`?Ae(a,f):d===`children`?je(a,f):S(a,d,f,u)}switch(c){case`input`:ve(a,o);break;case`textarea`:Te(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Se(a,!!o.multiple,o.multiple?[]:``,!1):Se(a,!!o.multiple,o.defaultValue,!0)):Se(a,!!o.multiple,m,!1)}a[Pi]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Ac(t,e),Mc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Ac(t,e),Mc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Ac(t,e),Mc(e);break;case 13:Ac(t,e),Mc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(el=R())),i&4&&kc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(dc=(u=dc)||d,Ac(t,e),dc=u):Ac(t,e),Mc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Z=e,d=e.child;d!==null;){for(f=Z=d;Z!==null;){switch(p=Z,m=p.child,p.tag){case 0:case 11:case 14:case 15:_c(4,p,p.return);break;case 1:pc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:pc(p,p.return);break;case 22:if(p.memoizedState!==null){Ic(f);continue}}m===null?Ic(f):(m.return=p,Z=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Pe(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ac(t,e),Mc(e),i&4&&kc(e);break;case 21:break;default:Ac(t,e),Mc(e)}}function Mc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(xc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(je(a,``),i.flags&=-33),wc(e,Sc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Cc(e,Sc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nc(e,t,n){Z=e,Pc(e,t,n)}function Pc(e,t,n){for(var r=(e.mode&1)!=0;Z!==null;){var i=Z,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||dc;s=uc;var l=dc;if(uc=o,(dc=c)&&!l)for(Z=i;Z!==null;)o=Z,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Lc(i):(c.return=o,Z=c);for(;a!==null;)Z=a,Pc(a,t,n),a=a.sibling;Z=i,uc=s,dc=l}Fc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Z=a):Fc(e,t,n)}}function Fc(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dc||vc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!dc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:_s(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&so(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}so(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&pn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}dc||t.flags&512&&yc(t)}catch(e){$(t,t.return,e)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Ic(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Lc(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{yc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{yc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){Z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Z=s;break}Z=t.return}}var Rc=Math.ceil,zc=C.ReactCurrentDispatcher,Bc=C.ReactCurrentOwner,Vc=C.ReactCurrentBatchConfig,Q=0,Hc=null,Uc=null,Wc=0,Gc=0,Kc=Gi(0),qc=0,Jc=null,Yc=0,Xc=0,Zc=0,Qc=null,$c=null,el=0,tl=1/0,nl=null,rl=!1,il=null,al=null,ol=!1,sl=null,cl=0,ll=0,ul=null,dl=-1,fl=0;function pl(){return Q&6?R():dl===-1?dl=R():dl}function ml(e){return e.mode&1?Q&2&&Wc!==0?Wc&-Wc:Na.transition===null?(e=z,e===0?(e=window.event,e=e===void 0?16:xn(e.type),e):e):(fl===0&&(fl=Rt()),fl):1}function hl(e,t,n,i){if(50<ll)throw ll=0,ul=null,Error(r(185));Bt(e,n,i),(!(Q&2)||e!==Hc)&&(e===Hc&&(!(Q&2)&&(Xc|=n),qc===4&&xl(e,Wc)),gl(e,i),n===1&&Q===0&&!(t.mode&1)&&(tl=R()+500,ia&&ca()))}function gl(e,t){var n=e.callbackNode;It(e,t);var r=Pt(e,e===Hc?Wc:0);if(r===0)n!==null&&ht(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ht(n),t===1)e.tag===0?sa(Sl.bind(null,e)):oa(Sl.bind(null,e)),Di(function(){!(Q&6)&&ca()}),n=null;else{switch(Ut(r)){case 1:n=yt;break;case 4:n=bt;break;case 16:n=xt;break;case 536870912:n=Ct;break;default:n=xt}n=Wl(n,_l.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _l(e,t){if(dl=-1,fl=0,Q&6)throw Error(r(327));var n=e.callbackNode;if(Ll()&&e.callbackNode!==n)return null;var i=Pt(e,e===Hc?Wc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=Al(e,i);else{t=i;var a=Q;Q|=2;var o=Ol();(Hc!==e||Wc!==t)&&(nl=null,tl=R()+500,El(e,t));do try{Ml();break}catch(t){Dl(e,t)}while(1);Wa(),zc.current=o,Q=a,Uc===null?(Hc=null,Wc=0,t=qc):t=0}if(t!==0){if(t===2&&(a=Lt(e),a!==0&&(i=a,t=vl(e,a))),t===1)throw n=Jc,El(e,0),xl(e,i),gl(e,R()),n;if(t===6)xl(e,i);else{if(a=e.current.alternate,!(i&30)&&!bl(a)&&(t=Al(e,i),t===2&&(o=Lt(e),o!==0&&(i=o,t=vl(e,o))),t===1))throw n=Jc,El(e,0),xl(e,i),gl(e,R()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Fl(e,$c,nl);break;case 3:if(xl(e,i),(i&130023424)===i&&(t=el+500-R(),10<t)){if(Pt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){pl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=wi(Fl.bind(null,e,$c,nl),t);break}Fl(e,$c,nl);break;case 4:if(xl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-Dt(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=R()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rc(i/1960))-i,10<i){e.timeoutHandle=wi(Fl.bind(null,e,$c,nl),i);break}Fl(e,$c,nl);break;case 5:Fl(e,$c,nl);break;default:throw Error(r(329))}}}return gl(e,R()),e.callbackNode===n?_l.bind(null,e):null}function vl(e,t){var n=Qc;return e.current.memoizedState.isDehydrated&&(El(e,t).flags|=256),e=Al(e,t),e!==2&&(t=$c,$c=n,t!==null&&yl(t)),e}function yl(e){$c===null?$c=e:$c.push.apply($c,e)}function bl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xl(e,t){for(t&=~Zc,t&=~Xc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),r=1<<n;e[n]=-1,t&=~r}}function Sl(e){if(Q&6)throw Error(r(327));Ll();var t=Pt(e,0);if(!(t&1))return gl(e,R()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var i=Lt(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Jc,El(e,0),xl(e,t),gl(e,R()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fl(e,$c,nl),gl(e,R()),null}function Cl(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(tl=R()+500,ia&&ca())}}function wl(e){sl!==null&&sl.tag===0&&!(Q&6)&&Ll();var t=Q;Q|=1;var n=Vc.transition,r=z;try{if(Vc.transition=null,z=1,e)return e()}finally{z=r,Vc.transition=n,Q=t,!(Q&6)&&ca()}}function Tl(){Gc=Kc.current,U(Kc)}function El(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ti(n)),Uc!==null)for(n=Uc.return;n!==null;){var r=n;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:ho(),U(Ji),U(qi),bo();break;case 5:_o(r);break;case 4:ho();break;case 13:U(q);break;case 19:U(q);break;case 10:Ga(r.type._context);break;case 22:case 23:Tl()}n=n.return}if(Hc=e,Uc=e=Yl(e.current,null),Wc=Gc=t,qc=0,Jc=null,Zc=Xc=Yc=0,$c=Qc=null,Ya!==null){for(t=0;t<Ya.length;t++)if(n=Ya[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ya=null}return e}function Dl(e,t){do{var n=Uc;try{if(Wa(),xo.current=ps,Eo){for(var i=J.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Eo=!1}if(Co=0,To=wo=J=null,Do=!1,Oo=0,Bc.current=null,n===null||n.return===null){qc=1,Jc=t,Uc=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Wc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=js(s);if(m!==null){m.flags&=-257,Ms(m,s,c,o,t),m.mode&1&&As(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){As(o,u,t),kl();break a}l=Error(r(426))}}else if(K&&c.mode&1){var _=js(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ms(_,s,c,o,t),Ma(ws(l,c));break a}}o=l=ws(l,c),qc!==4&&(qc=2),Qc===null?Qc=[o]:Qc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Os(o,l,t);ao(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(al===null||!al.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ks(o,c,t);ao(o,x);break a}}o=o.return}while(o!==null)}Pl(n)}catch(e){t=e,Uc===n&&n!==null&&(Uc=n=n.return);continue}break}while(1)}function Ol(){var e=zc.current;return zc.current=ps,e===null?ps:e}function kl(){(qc===0||qc===3||qc===2)&&(qc=4),Hc===null||!(Yc&268435455)&&!(Xc&268435455)||xl(Hc,Wc)}function Al(e,t){var n=Q;Q|=2;var i=Ol();(Hc!==e||Wc!==t)&&(nl=null,El(e,t));do try{jl();break}catch(t){Dl(e,t)}while(1);if(Wa(),Q=n,zc.current=i,Uc!==null)throw Error(r(261));return Hc=null,Wc=0,qc}function jl(){for(;Uc!==null;)Nl(Uc)}function Ml(){for(;Uc!==null&&!gt();)Nl(Uc)}function Nl(e){var t=Ul(e.alternate,e,Gc);e.memoizedProps=e.pendingProps,t===null?Pl(e):Uc=t,Bc.current=null}function Pl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lc(n,t),n!==null){n.flags&=32767,Uc=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qc=6,Uc=null;return}}else if(n=cc(n,t,Gc),n!==null){Uc=n;return}if(t=t.sibling,t!==null){Uc=t;return}Uc=t=e}while(t!==null);qc===0&&(qc=5)}function Fl(e,t,n){var r=z,i=Vc.transition;try{Vc.transition=null,z=1,Il(e,t,n,r)}finally{Vc.transition=i,z=r}return null}function Il(e,t,n,i){do Ll();while(sl!==null);if(Q&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vt(e,o),e===Hc&&(Uc=Hc=null,Wc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Wl(xt,function(){return Ll(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Vc.transition,Vc.transition=null;var s=z;z=1;var c=Q;Q|=4,Bc.current=null,gc(e,n),jc(n,e),Ir(Si),hn=!!xi,Si=xi=null,e.current=n,Nc(n,e,a),_t(),Q=c,z=s,Vc.transition=o}else e.current=n;if(ol&&(ol=!1,sl=e,cl=a),o=e.pendingLanes,o===0&&(al=null),Et(n.stateNode,i),gl(e,R()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(rl)throw rl=!1,e=il,il=null,e;return cl&1&&e.tag!==0&&Ll(),o=e.pendingLanes,o&1?e===ul?ll++:(ll=0,ul=e):ll=0,ca(),null}function Ll(){if(sl!==null){var e=Ut(cl),t=Vc.transition,n=z;try{if(Vc.transition=null,z=16>e?16:e,sl===null)var i=!1;else{if(e=sl,sl=null,cl=0,Q&6)throw Error(r(331));var a=Q;for(Q|=4,Z=e.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(Z=u;Z!==null;){var d=Z;switch(d.tag){case 0:case 11:case 15:_c(8,d,o)}var f=d.child;if(f!==null)f.return=d,Z=f;else for(;Z!==null;){d=Z;var p=d.sibling,m=d.return;if(bc(d),d===u){Z=null;break}if(p!==null){p.return=m,Z=p;break}Z=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else b:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_c(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,Z=v;break b}Z=o.return}}var y=e.current;for(Z=y;Z!==null;){s=Z;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,Z=b;else b:for(s=y;Z!==null;){if(c=Z,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:vc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){Z=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,Z=x;break b}Z=c.return}}if(Q=a,ca(),Tt&&typeof Tt.onPostCommitFiberRoot==`function`)try{Tt.onPostCommitFiberRoot(wt,e)}catch{}i=!0}return i}finally{z=n,Vc.transition=t}}return!1}function Rl(e,t,n){t=ws(n,t),t=Os(e,t,1),e=ro(e,t,1),t=pl(),e!==null&&(Bt(e,1,t),gl(e,t))}function $(e,t,n){if(e.tag===3)Rl(e,e,n);else for(;t!==null;){if(t.tag===3){Rl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(al===null||!al.has(r))){e=ws(n,e),e=ks(t,e,1),t=ro(t,e,1),e=pl(),t!==null&&(Bt(t,1,e),gl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pl(),e.pingedLanes|=e.suspendedLanes&n,Hc===e&&(Wc&n)===n&&(qc===4||qc===3&&(Wc&130023424)===Wc&&500>R()-el?El(e,0):Zc|=n),gl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=Mt,Mt<<=1,!(Mt&130023424)&&(Mt=4194304)):t=1);var n=pl();e=Qa(e,t),e!==null&&(Bt(e,t,n),gl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ji.current)Ps=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ps=!1,nc(e,t,n);Ps=!!(e.flags&131072)}else Ps=!1,K&&t.flags&1048576&&va(t,fa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ec(e,t),e=t.pendingProps;var a=Xi(t,qi.current);qa(t,n),a=Mo(null,t,i,e,a,n);var o=No();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zi(i)?(o=!0,ta(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,eo(t),a.updater=ys,t.stateNode=a,a._reactInternals=t,Cs(t,i,e,n),t=Hs(null,t,i,!0,o,n)):(t.tag=0,K&&o&&ya(t),X(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(ec(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=_s(i,e),a){case 0:t=Bs(null,t,i,e,n);break a;case 1:t=Vs(null,t,i,e,n);break a;case 11:t=Fs(null,t,i,e,n);break a;case 14:t=Is(null,t,i,_s(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Bs(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Vs(e,t,i,a,n);case 3:a:{if(Us(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,to(e,t),oo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ws(Error(r(423)),t),t=Ws(e,t,i,n,a);break a}else if(i!==a){a=ws(Error(r(424)),t),t=Ws(e,t,i,n,a);break a}else for(Sa=Ai(t.stateNode.containerInfo.firstChild),xa=t,K=!0,Ca=null,n=za(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ja(),i===a){t=tc(e,t,n);break a}X(e,t,i,n)}t=t.child}return t;case 5:return go(t),e===null&&Da(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,Ci(i,a)?s=null:o!==null&&Ci(i,o)&&(t.flags|=32),zs(e,t),X(e,t,s,n),t.child;case 6:return e===null&&Da(t),null;case 13:return qs(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ra(t,null,i,n):X(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),Fs(e,t,i,a,n);case 7:return X(e,t,t.pendingProps,n),t.child;case 8:return X(e,t,t.pendingProps.children,n),t.child;case 12:return X(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,W(Ba,i._currentValue),i._currentValue=s,o!==null)if(kr(o.value,s)){if(o.children===a.children&&!Ji.current){t=tc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=no(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ka(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ka(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}X(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,qa(t,n),a=Ja(a),i=i(a),t.flags|=1,X(e,t,i,n),t.child;case 14:return i=t.type,a=_s(i,t.pendingProps),a=_s(i.type,a),Is(e,t,i,a,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:_s(i,a),ec(e,t),t.tag=1,Zi(i)?(e=!0,ta(t)):e=!1,qa(t,n),xs(t,i,a),Cs(t,i,a,n),Hs(null,t,i,!0,e,n);case 19:return $s(e,t,n);case 22:return Rs(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return mt(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===O)return 11;if(e===j)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return Zl(n.children,a,o,t);case ee:s=8,a|=8;break;case te:return e=Kl(12,n,t,a|2),e.elementType=te,e.lanes=o,e;case k:return e=Kl(13,n,t,a),e.elementType=k,e.lanes=o,e;case A:return e=Kl(19,n,t,a),e.elementType=A,e.lanes=o,e;case re:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ne:s=10;break a;case D:s=9;break a;case O:s=11;break a;case j:s=14;break a;case M:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=re,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zt(0),this.expirationTimes=zt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return Ki;e=e._reactInternals;a:{if(ct(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(Zi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(Zi(n))return ea(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=pl(),i=ml(n),a=no(r,i),a.callback=t??null,ro(n,a,i),e.current.lanes=i,Bt(e,i,r),gl(e,r),e}function ou(e,t,n,r){var i=t.current,a=pl(),o=ml(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=no(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ro(i,t,o),e!==null&&(hl(e,i,o,a),io(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wl(function(){ou(null,e,null,null)}),t[Fi]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=qt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&cn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Fi]=o.current,li(e.nodeType===8?e.parentNode:e),wl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Fi]=c.current,li(e.nodeType===8?e.parentNode:e),wl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}Wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nt(t.pendingLanes);n!==0&&(Ht(t,n|1),gl(t,R()),!(Q&6)&&(tl=R()+500,ca()))}break;case 13:wl(function(){var t=Qa(e,1);t!==null&&hl(t,e,1,pl())}),lu(e,1)}},Gt=function(e){if(e.tag===13){var t=Qa(e,134217728);t!==null&&hl(t,e,134217728,pl()),lu(e,134217728)}},Kt=function(e){if(e.tag===13){var t=ml(e),n=Qa(e,t);n!==null&&hl(n,e,t,pl()),lu(e,t)}},qt=function(){return z},Jt=function(e,t){var n=z;try{return z=e,t()}finally{z=n}},Ve=function(e,t,n){switch(t){case`input`:if(ve(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Hi(i);if(!a)throw Error(r(90));pe(i),ve(i,a)}}}break;case`textarea`:Te(e,n);break;case`select`:t=n.value,t!=null&&Se(e,!!n.multiple,t,!1)}},qe=Cl,Je=wl;var yu={usingClientEntryPoint:!1,Events:[Bi,Vi,Hi,Ge,Ke,Cl]},bu={findFiberByHostInstance:zi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ft(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{wt=Su.inject(xu),Tt=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Fi]=t.current,li(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=ft(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return wl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Fi]=t.current,li(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(wl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Fi]=null})}),!0):!1},e.unstable_batchedUpdates=Cl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=c(u()),_=h(),v=o(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),y=o(((e,t)=>{var n=v();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),b=o(((e,t)=>{t.exports=y()()})),x=`-ms-`,S=`-moz-`,C=`-webkit-`,w=`comm`,T=`rule`,E=`decl`,ee=`@import`,te=`@namespace`,ne=`@keyframes`,D=`@layer`,O=Math.abs,k=String.fromCharCode,A=Object.assign;function j(e,t){return P(e,0)^45?(((t<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function M(e){return e.trim()}function re(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function ie(e,t,n){return e.indexOf(t,n)}function P(e,t){return e.charCodeAt(t)|0}function ae(e,t,n){return e.slice(t,n)}function F(e){return e.length}function oe(e){return e.length}function se(e,t){return t.push(e),e}function ce(e,t){return e.map(t).join(``)}function le(e,t){return e.filter(function(e){return!re(e,t)})}var ue=1,I=1,de=0,fe=0,L=0,pe=``;function me(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ue,column:I,length:o,return:``,siblings:s}}function he(e,t){return A(me(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function ge(e){for(;e.root;)e=he(e.root,{children:[e]});se(e,e.siblings)}function _e(){return L}function ve(){return L=fe>0?P(pe,--fe):0,I--,L===10&&(I=1,ue--),L}function ye(){return L=fe<de?P(pe,fe++):0,I++,L===10&&(I=1,ue++),L}function be(){return P(pe,fe)}function xe(){return fe}function Se(e,t){return ae(pe,e,t)}function Ce(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function we(e){return ue=I=1,de=F(pe=e),fe=0,[]}function Te(e){return pe=``,e}function Ee(e){return M(Se(fe-1,ke(e===91?e+2:e===40?e+1:e)))}function De(e){for(;(L=be())&&L<33;)ye();return Ce(e)>2||Ce(L)>3?``:` `}function Oe(e,t){for(;--t&&ye()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return Se(e,xe()+(t<6&&be()==32&&ye()==32))}function ke(e){for(;ye();)switch(L){case e:return fe;case 34:case 39:e!==34&&e!==39&&ke(L);break;case 40:e===41&&ke(e);break;case 92:ye();break}return fe}function Ae(e,t){for(;ye()&&e+L!==57&&!(e+L===84&&be()===47););return`/*`+Se(t,fe-1)+`*`+k(e===47?e:ye())}function je(e){for(;!Ce(be());)ye();return Se(e,fe)}function Me(e){return Te(Ne(``,null,null,null,[``],e=we(e),0,[0],e))}function Ne(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ye()){case 40:if(m!=108&&P(C,d-1)==58){ie(C+=N(Ee(v),`&`,`&\f`),`&\f`,O(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Ee(v);break;case 9:case 10:case 13:case 32:C+=De(m);break;case 92:C+=Oe(xe()-1,7);continue;case 47:switch(be()){case 42:case 47:se(Fe(Ae(ye(),xe()),t,n,c),c),(Ce(m||1)==5||Ce(be()||1)==5)&&F(C)&&ae(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=F(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=N(C,/\f/g,``)),p>0&&(F(C)-d||h===0&&m===47)&&se(p>32?Ie(C+`;`,r,n,d-1,c):Ie(N(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(se(S=Pe(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)Ne(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(P(C,3)===110)break;case 108:if(P(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ne(e,S,S,r&&se(Pe(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ne(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+F(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ve()==125)continue}switch(C+=k(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(F(C)-1)*_,_=1;break;case 64:be()===45&&(C+=Ee(ye())),f=be(),u=d=F(y=C+=je(xe())),v++;break;case 45:m===45&&F(C)==2&&(h=0)}}return a}function Pe(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=oe(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=ae(e,f+1,f=O(g=o[h])),b=e;v<m;++v)(b=M(g>0?p[v]+` `+y:N(y,/&\f/g,p[v])))&&(c[_++]=b);return me(e,t,n,i===0?T:s,c,l,u,d)}function Fe(e,t,n,r){return me(e,t,n,w,k(_e()),ae(e,2,-2),0,r)}function Ie(e,t,n,r,i){return me(e,t,n,E,ae(e,0,r),ae(e,r+1,-1),r,i)}function Le(e,t,n){switch(j(e,t)){case 5103:return C+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return C+e+e;case 4855:return C+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return S+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return C+e+S+e+x+e+e;case 5936:switch(P(e,t+11)){case 114:return C+e+x+N(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return C+e+x+N(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return C+e+x+N(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return C+e+x+e+e;case 6165:return C+e+x+`flex-`+e+e;case 5187:return C+e+N(e,/(\w+).+(:[^]+)/,C+`box-$1$2`+x+`flex-$1$2`)+e;case 5443:return C+e+x+`flex-item-`+N(e,/flex-|-self/g,``)+(re(e,/flex-|baseline/)?``:x+`grid-row-`+N(e,/flex-|-self/g,``))+e;case 4675:return C+e+x+`flex-line-pack`+N(e,/align-content|flex-|-self/g,``)+e;case 5548:return C+e+x+N(e,`shrink`,`negative`)+e;case 5292:return C+e+x+N(e,`basis`,`preferred-size`)+e;case 6060:return C+`box-`+N(e,`-grow`,``)+C+e+x+N(e,`grow`,`positive`)+e;case 4554:return C+N(e,/([^-])(transform)/g,`$1`+C+`$2`)+e;case 6187:return N(N(N(e,/(zoom-|grab)/,C+`$1`),/(image-set)/,C+`$1`),e,``)+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,C+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,C+`box-pack:$3`+x+`flex-pack:$3`),/space-between/,`justify`)+C+e+e;case 4200:if(!re(e,/flex-|baseline/))return x+`grid-column-align`+ae(e,t)+e;break;case 2592:case 3360:return x+N(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,re(e.props,/grid-\w+-end/)})?~ie(e+(n=n[t].value),`span`,0)?e:x+N(e,`-start`,``)+e+x+`grid-row-span:`+(~ie(n,`span`,0)?re(n,/\d+/):re(n,/\d+/)-+re(e,/\d+/))+`;`:x+N(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return re(e.props,/grid-\w+-start/)})?e:x+N(N(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,C+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(F(e)-1-t>6)switch(P(e,t+1)){case 109:if(P(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,`$1`+C+`$2-$3$1`+S+(P(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ie(e,`stretch`,0)?Le(N(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return x+n+`:`+r+s+(i?x+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(P(e,t+6)===121)return N(e,`:`,`:`+C)+e;break;case 6444:switch(P(e,P(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+C+(P(e,14)===45?`inline-`:``)+`box$3$1`+C+`$2$3$1`+x+`$2box$3`)+e;case 100:return N(e,`:`,`:`+x)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,`scroll-`,`scroll-snap-`)+e}return e}function Re(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function ze(e,t,n,r){switch(e.type){case D:if(e.children.length)break;case ee:case te:case E:return e.return=e.return||e.value;case w:return``;case ne:return e.return=e.value+`{`+Re(e.children,r)+`}`;case T:if(!F(e.value=e.props.join(`,`)))return``}return F(n=Re(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Be(e){var t=oe(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ve(e){return function(t){t.root||(t=t.return)&&e(t)}}function He(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case E:e.return=Le(e.value,e.length,n);return;case ne:return Re([he(e,{value:N(e.value,`@`,`@`+C)})],r);case T:if(e.length)return ce(n=e.props,function(t){switch(re(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:ge(he(e,{props:[N(t,/:(read-\w+)/,`:`+S+`$1`)]})),ge(he(e,{props:[t]})),A(e,{props:le(n,r)});break;case`::placeholder`:ge(he(e,{props:[N(t,/:(plac\w+)/,`:`+C+`input-$1`)]})),ge(he(e,{props:[N(t,/:(plac\w+)/,`:`+S+`$1`)]})),ge(he(e,{props:[N(t,/:(plac\w+)/,x+`input-$1`)]})),ge(he(e,{props:[t]})),A(e,{props:le(n,r)});break}return``})}}var Ue=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,We=`active`,Ge=`data-styled-version`,Ke=`6.4.2`,qe=`/*!sc*/
`,Je=typeof window<`u`&&typeof document<`u`;function Ye(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Xe=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Ye(`REACT_APP_SC_DISABLE_SPEEDY`)??Ye(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Ze=`sc-keyframes-`;function Qe(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var $e=new Map,et=new Map,tt=1,nt=e=>{if($e.has(e))return $e.get(e);for(;et.has(tt);)tt++;let t=tt++;return $e.set(e,t),et.set(t,e),t},rt=e=>et.get(e),it=(e,t)=>{tt=t+1,$e.set(e,t),et.set(t,e)},at=Object.freeze([]),ot=Object.freeze({});function st(e,t,n=ot){return e.theme!==n.theme&&e.theme||t||n.theme}var ct=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lt=/(^-|-$)/g;function ut(e){return e.replace(ct,`-`).replace(lt,``)}var dt=/(a)(d)/gi,ft=e=>String.fromCharCode(e+(e>25?39:97));function pt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=ft(t%52)+n;return(ft(t%52)+n).replace(dt,`$1-$2`)}var mt=5381,ht=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},gt=e=>ht(mt,e);function _t(e){return pt(gt(e)>>>0)}function R(e){return e.displayName||e.name||`Component`}function vt(e){return typeof e==`string`&&!0}function yt(e){return vt(e)?`styled.${e}`:`Styled(${R(e)})`}var bt=Symbol.for(`react.memo`),xt=Symbol.for(`react.forward_ref`),St={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ct={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tt={[xt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[bt]:wt};function Et(e){return(`type`in(t=e)&&t.type.$$typeof)===bt?wt:`$$typeof`in e?Tt[e.$$typeof]:St;var t}var Dt=Object.defineProperty,Ot=Object.getOwnPropertyNames,kt=Object.getOwnPropertySymbols,At=Object.getOwnPropertyDescriptor,jt=Object.getPrototypeOf,Mt=Object.prototype;function Nt(e,t,n){if(typeof t!=`string`){let r=jt(t);r&&r!==Mt&&Nt(e,r,n);let i=Ot(t).concat(kt(t)),a=Et(e),o=Et(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Ct||n&&n[s]||o&&s in o||a&&s in a)){let n=At(t,s);try{Dt(e,s,n)}catch{}}}}return e}function Pt(e){return typeof e==`function`}var Ft=Symbol.for(`react.forward_ref`);function It(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Ft&&`styledComponentId`in e}function Lt(e,t){return e&&t?e+` `+t:e||t||``}function Rt(e,t){return e.join(t||``)}function zt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Bt(e,t,n=!1){if(!n&&!zt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Bt(e[n],t[n]);else if(zt(t))for(let n in t)e[n]=Bt(e[n],t[n]);return e}function Vt(e,t){Object.defineProperty(e,"toString",{value:t})}var Ht=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Qe(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+qe;return t}},z=`style[${Ue}][${Ge}="${Ke}"]`,Ut=RegExp(`^${Ue}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Wt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Gt=e=>{if(!e)return document;if(Wt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Wt(t))return t}return document},Kt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},qt=(e,t)=>{let n=(t.textContent??``).split(qe),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Ut);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(it(n,t),Kt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Jt=e=>{let t=Gt(e.options.target).querySelectorAll(z);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Ue)!==We&&(qt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Yt=!1;function Xt(){if(!1!==Yt)return Yt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Yt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Yt=t.getAttribute(`content`)||void 0}return Yt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Zt=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Ue}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Ue,We),i.setAttribute(Ge,Ke);let s=t||Xt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Qt=class{constructor(e,t){this.element=Zt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Qe(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},$t=class{constructor(e,t){this.element=Zt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},en=Je,tn={isServer:!Je,useCSSOMInjection:!Xe},nn=class e{static registerId(e){return nt(e)}constructor(e=ot,t={},n){this.options=Object.assign(Object.assign({},tn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Je&&en&&(en=!1,Jt(this)),Vt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=rt(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Ue+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Je&&Jt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Je&&t.target!==this.options.target&&Gt(this.options.target)!==Gt(t.target)&&Jt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Qt(t,n):new $t(t,n))(this.options),new Ht(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){nt(e),e.startsWith(Ze)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(nt(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(nt(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},rn=new WeakSet,an={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function on(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in an||e.startsWith(`--`)?String(t).trim():t+`px`}var sn=47;function cn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var ln=Symbol.for(`sc-keyframes`);function un(e){return typeof e==`object`&&!!e&&ln in e}function dn(e){return Pt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var fn=e=>e==null||!1===e||e===``,pn=Symbol.for(`react.client.reference`);function mn(e){return e.$$typeof===pn}function hn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!fn(r)&&(Array.isArray(r)&&rn.has(r)||Pt(r)?t.push(cn(n)+`:`,r,`;`):zt(r)?(t.push(n+` {`),hn(r,t),t.push(`}`)):t.push(cn(n)+`: `+on(n,r)+`;`))}}function gn(e,t,n,r,i=[]){if(fn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return mn(e)?i:dn(e)&&t?gn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)gn(e[a],t,n,r,i);return i}return It(e)?(i.push(`.${e.styledComponentId}`),i):un(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):mn(e)?i:zt(e)&&e.toString===Object.prototype.toString?(hn(e,i),i):(i.push(e.toString()),i)}var _n=gt(Ke),vn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=ht(_n,t),this.baseStyle=n,nn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(dn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Rt(gn(r,e,t,n)))}else i+=Rt(gn(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=pt(ht(ht(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Lt(r,a)}}return r}},yn=/&/g;function bn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function xn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==sn||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===sn&&(o=!1,c++);else if(l!==34&&l!==39||bn(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Sn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Sn(a.children,t)}return e}function Cn({options:e=ot,plugins:t=at}=ot){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(yn,r).replace(i,a))}),e.prefix&&o.push(He),o.push(ze);let s=[],c=Be(o.concat(Ve(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return xn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||bn(e,o))if(s===0)if(t===sn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==sn);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===sn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===sn&&o+1<r&&e.charCodeAt(o+1)===sn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:xn(i)):l===0?e:xn(e)}(t),d=Me(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Sn(d,e.namespace)),s=[],Re(d,c),s},u=e,d=mt;for(let e=0;e<t.length;e++)t[e].name||Qe(15),d=ht(d,t[e].name);return u!=null&&u.namespace&&(d=ht(d,u.namespace)),u!=null&&u.prefix&&(d=ht(d,`p`)),l.hash=d===mt?``:d.toString(),l}var wn=new nn,Tn=Cn(),En=g.createContext({shouldForwardProp:void 0,styleSheet:wn,stylis:Tn,stylisPlugins:void 0});En.Consumer;function Dn(){return g.useContext(En)}var On=g.createContext(void 0);On.Consumer;function kn(e){let t=g.useContext(On),n=g.useMemo(()=>function(e,t){if(!e)throw Qe(14);if(Pt(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Qe(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?g.createElement(On.Provider,{value:n},e.children):null}var An=Object.prototype.hasOwnProperty,jn={};function Mn(e,t){let n=typeof e==`string`?ut(e):`sc`;jn[n]=(jn[n]||0)+1;let r=n+`-`+_t(Ke+n+jn[n]);return t?t+`-`+r:r}function Nn(e,t,n){let r=It(e),i=e,a=!vt(e),{attrs:o=at,componentId:s=Mn(t.displayName,t.parentComponentId),displayName:c=yt(e)}=t,l=t.displayName&&t.componentId?ut(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new vn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=g.useContext(On),u=Dn(),d=e.shouldForwardProp||u.shouldForwardProp,f=st(t,l,a)||ot,p,m;{let e=g.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(An.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Pt(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Lt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Lt(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)An.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,_=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),v=Lt(o,s);return m&&(v+=` `+m),p.className&&(v+=` `+p.className),_[vt(h)&&h.includes(`-`)?`class`:`className`]=v,n&&(_.ref=n),(0,g.createElement)(h,_)}(m,e,t)}p.displayName=c;let m=g.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Lt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Bt(e,n,!0);return e}({},i.defaultProps,e):e}}),Vt(m,()=>`.${m.styledComponentId}`),a&&Nt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Pn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Fn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var In=e=>(rn.add(e),e);function Ln(e,...t){if(Pt(e)||zt(e))return In(gn(Fn(at,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?gn(n):In(gn(Fn(n,t)))}function Rn(e,t,n=ot){if(!t)throw Qe(1,t);let r=(r,...i)=>e(t,n,Ln(r,...i));return r.attrs=r=>Rn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Rn(e,t,Object.assign(Object.assign({},n),r)),r}var zn=e=>Rn(Nn,e),B=zn;Pn.forEach(e=>{B[e]=zn(e)});var Bn,Vn=class{constructor(e,t){this[Bn]=!0,this.inject=(e,t=Tn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Ze+e,this.rules=t,nt(this.id),Vt(this,()=>{throw Qe(12,String(this.name))})}getName(e=Tn){return e.hash?this.name+pt(e.hash>>>0):this.name}};function Hn(e,...t){let n=Rt(Ln(e,...t));return new Vn(_t(n),n)}Bn=ln,`${Ue}`,`${Ue}`,`${Ue}`;var Un={black:`#000`,white:`#fff`,product:{support:`#00a656`,explore:`#30aabc`,gather:`#f6c8be`,guide:`#eb4962`,chat:`#f79a3e`,talk:`#efc93d`,sell:`#c38f00`},grey:{100:`#f8f9f9`,200:`#e8eaec`,300:`#d8dcde`,400:`#b0b8be`,500:`#919ca5`,600:`#848f99`,700:`#5c6970`,800:`#39434b`,900:`#293239`,1e3:`#1c2227`,1100:`#151a1e`,1200:`#0a0d0e`},blue:{100:`#edf7ff`,200:`#ddecf8`,300:`#cce0f1`,400:`#93bcdc`,500:`#66a0cd`,600:`#2694d6`,700:`#1f73b7`,800:`#13456d`,900:`#0f3655`,1e3:`#0a2338`,1100:`#061420`,1200:`#040d15`},red:{100:`#fff2f3`,200:`#fee3e5`,300:`#f5d5d8`,400:`#f2a1a8`,500:`#ea7881`,600:`#eb5c69`,700:`#cd3642`,800:`#7e1d25`,900:`#671219`,1e3:`#3d1418`,1100:`#1d1011`,1200:`#100b0c`},yellow:{100:`#fff3e4`,200:`#ffe6cb`,300:`#fed6a9`,400:`#fca347`,500:`#e38215`,600:`#d67305`,700:`#ac5918`,800:`#673515`,900:`#4c2c17`,1e3:`#2d1e15`,1100:`#18120f`,1200:`#0e0c0b`},green:{100:`#eef8f4`,200:`#daeee6`,300:`#cae3d9`,400:`#94c1b0`,500:`#4eab89`,600:`#26a178`,700:`#037f52`,800:`#104b35`,900:`#0b3b29`,1e3:`#0c261c`,1100:`#0a1511`,1200:`#080d0c`},kale:{100:`#ecf9f9`,200:`#daeded`,300:`#cbe2e1`,400:`#97bfbf`,500:`#6ba4a5`,600:`#4a9999`,700:`#40787a`,800:`#16494f`,900:`#063940`,1e3:`#03252a`,1100:`#061517`,1200:`#060e0e`},fuschia:{100:`#fbf3f8`,200:`#f7e6f1`,300:`#f2d5e7`,400:`#e3a4cc`,500:`#d77db7`,600:`#d16aac`,700:`#b34496`,800:`#78116c`,900:`#5a0d51`,1e3:`#3f0939`,1100:`#31072c`,1200:`#1b0418`},pink:{100:`#fcf3f4`,200:`#f7e5e8`,300:`#f3d6dc`,400:`#e5a6b4`,500:`#d98193`,600:`#d96b81`,700:`#d62054`,800:`#75263d`,900:`#561d2e`,1e3:`#3c141f`,1100:`#2e0f18`,1200:`#17080c`},crimson:{100:`#fbf3f2`,200:`#f7e7e4`,300:`#f1d7d2`,400:`#e2aaa0`,500:`#d58678`,600:`#cf7464`,700:`#be4938`,800:`#811b12`,900:`#61140d`,1e3:`#440e09`,1100:`#340b07`,1200:`#1c0604`},orange:{100:`#fdf3ed`,200:`#fae7d8`,300:`#f7d7be`,400:`#eda875`,500:`#e58035`,600:`#d57428`,700:`#af5626`,800:`#693317`,900:`#4d2711`,1e3:`#361a0c`,1100:`#291409`,1200:`#150a04`},lemon:{100:`#fff7d4`,200:`#ffea97`,300:`#ffdc4f`,400:`#efab00`,500:`#c79100`,600:`#b68500`,700:`#8f6900`,800:`#563e00`,900:`#3f2e00`,1e3:`#2b2000`,1100:`#221800`,1200:`#110c00`},lime:{100:`#ecfae7`,200:`#d1f3c7`,300:`#b3eda3`,400:`#4fd12b`,500:`#45b025`,600:`#509f2d`,700:`#3d7e19`,800:`#2c491b`,900:`#203614`,1e3:`#16250e`,1100:`#111d0a`,1200:`#090e05`},mint:{100:`#d6ffeb`,200:`#9affce`,300:`#0afe89`,400:`#00d26d`,500:`#01b15c`,600:`#16a260`,700:`#2d7e55`,800:`#1b4b33`,900:`#143726`,1e3:`#0e261a`,1100:`#0b1d14`,1200:`#050e0a`},teal:{100:`#d4fefa`,200:`#88fdf1`,300:`#0bf8e1`,400:`#03cdb8`,500:`#02ad9c`,600:`#2a9d8f`,700:`#367a74`,800:`#254846`,900:`#1b3534`,1e3:`#122423`,1100:`#0e1c1a`,1200:`#070d0d`},azure:{100:`#eff7fe`,200:`#d9ecfc`,300:`#c4e0fa`,400:`#82bcf4`,500:`#4b9fee`,600:`#3191ea`,700:`#2770c3`,800:`#23446b`,900:`#1a3250`,1e3:`#122238`,1100:`#0e1a2a`,1200:`#070d14`},royal:{100:`#f4f5fc`,200:`#e7e9f8`,300:`#d8dcf4`,400:`#acb4e7`,500:`#8a96dd`,600:`#7a88d9`,700:`#4c67d3`,800:`#1833ab`,900:`#122680`,1e3:`#0d1a5a`,1100:`#0a1445`,1200:`#050a25`},purple:{100:`#f9f3fb`,200:`#f2e7f6`,300:`#e9d8f1`,400:`#d0a9e0`,500:`#bb86d3`,600:`#b276cd`,700:`#9256b1`,800:`#58209a`,900:`#411973`,1e3:`#2e1150`,1100:`#230d3f`,1200:`#120720`}},V=4,Wn={sm:`${V/2}px`,md:`${V}px`,lg:`${V*2}px`},Gn={solid:`solid`},Kn={sm:`1px`,md:`3px`},qn={sm:`${Kn.sm} ${Gn.solid}`,md:`${Kn.md} ${Gn.solid}`},Jn={xs:`0px`,sm:`${V*144}px`,md:`${V*192}px`,lg:`${V*248}px`,xl:`${V*300}px`},Yn={primaryHue:`blue`,dangerHue:`red`,warningHue:`yellow`,successHue:`green`,neutralHue:`grey`,chromeHue:`kale`,variables:{dark:{background:{default:`neutralHue.1100`,raised:`neutralHue.1000`,recessed:`neutralHue.1200`,subtle:`neutralHue.1000`,emphasis:`neutralHue.600`,success:`successHue.1000`,warning:`warningHue.1000`,danger:`dangerHue.1000`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`rgba(white, 100)`},border:{default:`neutralHue.800`,emphasis:`neutralHue.600`,subtle:`neutralHue.900`,success:`successHue.900`,warning:`warningHue.900`,danger:`dangerHue.900`,primaryEmphasis:`primaryHue.600`,successEmphasis:`successHue.600`,warningEmphasis:`warningHue.600`,dangerEmphasis:`dangerHue.600`,disabled:`neutralHue.800`},foreground:{default:`neutralHue.300`,subtle:`neutralHue.500`,onEmphasis:`neutralHue.1100`,primary:`primaryHue.600`,success:`successHue.400`,warning:`warningHue.400`,danger:`dangerHue.400`,successEmphasis:`successHue.300`,warningEmphasis:`warningHue.300`,dangerEmphasis:`dangerHue.300`,disabled:`neutralHue.700`},shadow:{small:`rgba(neutralHue.1200, 1100)`,medium:`rgba(neutralHue.1200, 800)`,large:`rgba(neutralHue.1200, 1000)`}},light:{background:{default:`palette.white`,raised:`palette.white`,recessed:`neutralHue.100`,subtle:`neutralHue.100`,emphasis:`neutralHue.700`,success:`successHue.100`,warning:`warningHue.100`,danger:`dangerHue.100`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`rgba(neutralHue.700, 100)`},border:{default:`neutralHue.300`,emphasis:`neutralHue.600`,subtle:`neutralHue.200`,success:`successHue.300`,warning:`warningHue.300`,danger:`dangerHue.300`,primaryEmphasis:`primaryHue.700`,successEmphasis:`successHue.700`,warningEmphasis:`warningHue.700`,dangerEmphasis:`dangerHue.700`,disabled:`neutralHue.300`},foreground:{default:`neutralHue.900`,subtle:`neutralHue.700`,onEmphasis:`palette.white`,primary:`primaryHue.700`,success:`successHue.700`,warning:`warningHue.700`,danger:`dangerHue.700`,successEmphasis:`successHue.900`,warningEmphasis:`warningHue.900`,dangerEmphasis:`dangerHue.900`,disabled:`neutralHue.600`},shadow:{small:`rgba(neutralHue.1200, 200)`,medium:`rgba(neutralHue.1200, 200)`,large:`rgba(neutralHue.1200, 200)`}}}},Xn={mono:[`SFMono-Regular`,`Consolas`,`"Liberation Mono"`,`Menlo`,`Courier`,`monospace`].join(`,`),system:[`system-ui`,`-apple-system`,`BlinkMacSystemFont`,`"Segoe UI"`,`Roboto`,`Oxygen-Sans`,`Ubuntu`,`Cantarell`,`"Helvetica Neue"`,`Arial`,`sans-serif`].join(`,`)},Zn={xs:`10px`,sm:`12px`,md:`14px`,lg:`18px`,xl:`22px`,xxl:`26px`,xxxl:`36px`},Qn={thin:100,extralight:200,light:300,regular:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},$n={sm:`12px`,md:`16px`,lg:`26px`},er={sm:`${V*4}px`,md:`${V*5}px`,lg:`${V*6}px`,xl:`${V*7}px`,xxl:`${V*8}px`,xxxl:`${V*11}px`},tr={100:.08,200:.16,300:.24,400:.32,500:.4,600:.48,700:.56,800:.64,900:.72,1e3:.8,1100:.88,1200:.96},nr={...Un};delete nr.product;var rr={xs:`1px`,sm:`2px`,md:`3px`},ir={xs:e=>`0 0 0 ${rr.xs} ${e}`,sm:e=>`0 0 0 ${rr.sm} ${e}`,md:e=>`0 0 0 ${rr.md} ${e}`,lg:(e,t,n)=>`0 ${e} ${t} 0 ${n}`},ar={base:V,xxs:`${V}px`,xs:`${V*2}px`,sm:`${V*3}px`,md:`${V*5}px`,lg:`${V*8}px`,xl:`${V*10}px`,xxl:`${V*12}px`},or={borders:qn,borderRadii:Wn,borderStyles:Gn,borderWidths:Kn,breakpoints:Jn,colors:{base:`light`,...Yn},components:{},fonts:Xn,fontSizes:Zn,fontWeights:Qn,iconSizes:$n,lineHeights:er,opacity:tr,palette:nr,rtl:!1,shadowWidths:rr,shadows:ir,space:ar},sr=({theme:e=or,...t})=>g.createElement(kn,Object.assign({theme:e},t)),cr=e=>{let t,n=e.theme.components,r=e.componentId||e[`data-garden-id`];return n&&r&&(t=n[r],typeof t==`function`&&(t=t(e))),t},lr={top:`bottom`,"top-start":`bottom-left`,"top-end":`bottom-right`,right:`left`,"right-start":`left-top`,"right-end":`left-bottom`,bottom:`top`,"bottom-start":`top-left`,"bottom-end":`top-right`,left:`right`,"left-start":`right-top`,"left-end":`right-bottom`},ur={"bottom-left":`bottom-right`,"bottom-right":`bottom-left`,"top-left":`top-right`,"top-right":`top-left`},dr=(e,t)=>{let n=lr[t];return e.rtl&&(n=ur[n]||n),n};function fr(e,t,n){return Math.min(Math.max(e,n),t)}var pr=class extends Error{constructor(e){super(`Failed to parse color: "${e}"`)}};function mr(e){if(typeof e!=`string`)throw new pr(e);if(e.trim().toLowerCase()===`transparent`)return[0,0,0,0];let t=e.trim();t=wr.test(e)?vr(e):e;let n=br.exec(t);if(n){let e=Array.from(n).slice(1);return[...e.slice(0,3).map(e=>parseInt(yr(e,2),16)),parseInt(yr(e[3]||`f`,2),16)/255]}let r=xr.exec(t);if(r){let e=Array.from(r).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,16)),parseInt(e[3]||`ff`,16)/255]}let i=Sr.exec(t);if(i){let e=Array.from(i).slice(1);return[...e.slice(0,3).map(e=>parseInt(e,10)),parseFloat(e[3]||`1`)]}let a=Cr.exec(t);if(a){let[t,n,r,i]=Array.from(a).slice(1).map(parseFloat);if(fr(0,100,n)!==n||fr(0,100,r)!==r)throw new pr(e);return[...Er(t,n,r),Number.isNaN(i)?1:i]}throw new pr(e)}function hr(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}var gr=e=>parseInt(e.replace(/_/g,``),36),_r=`1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm`.split(` `).reduce((e,t)=>{let n=gr(t.substring(0,3)),r=gr(t.substring(3)).toString(16),i=``;for(let e=0;e<6-r.length;e++)i+=`0`;return e[n]=`${i}${r}`,e},{});function vr(e){let t=_r[hr(e.toLowerCase().trim())];if(!t)throw new pr(e);return`#${t}`}var yr=(e,t)=>Array.from(Array(t)).map(()=>e).join(``),br=RegExp(`^#${yr(`([a-f0-9])`,3)}([a-f0-9])?$`,`i`),xr=RegExp(`^#${yr(`([a-f0-9]{2})`,3)}([a-f0-9]{2})?$`,`i`),Sr=RegExp(`^rgba?\\(\\s*(\\d+)\\s*${yr(`,\\s*(\\d+)\\s*`,2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,`i`),Cr=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,wr=/^[a-z]+$/i,Tr=e=>Math.round(e*255),Er=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(Tr);let i=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);let u=r-a/2;return[s+u,c+u,l+u].map(Tr)};function Dr(e,t,n,r){return`rgba(${fr(0,255,e).toFixed()}, ${fr(0,255,t).toFixed()}, ${fr(0,255,n).toFixed()}, ${parseFloat(fr(0,1,r).toFixed(3))})`}function Or(e,t,n){let r=(e,t)=>t===3?e:e/255,[i,a,o,s]=mr(e).map(r),[c,l,u,d]=mr(t).map(r),f=d-s,p=n*2-1,m=((p*f===-1?p:p+f/(1+p*f))+1)/2,h=1-m;return Dr((i*h+c*m)*255,(a*h+l*m)*255,(o*h+u*m)*255,d*n+s*(1-n))}function kr(...e){return t=>{let n=e.length-1,r=fr(0,n,Math.floor(t*n)),i=fr(0,n,Math.ceil(t*n)),a=e[r],o=e[i],s=1/n;return Or(a,o,(t-s*r)/s)}}function Ar(e){let[t,n,r,i]=mr(e),a=e=>{let t=fr(0,255,e).toString(16);return t.length===1?`0${t}`:t};return`#${a(t)}${a(n)}${a(r)}${i<1?a(Math.round(i*255)):``}`}function jr(){return jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},jr.apply(null,arguments)}function Mr(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Nr(e,t){return Nr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Nr(e,t)}function Pr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Nr(e,t)}function Fr(e){return Fr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Fr(e)}function Ir(e){try{return Function.toString.call(e).indexOf(`[native code]`)!==-1}catch{return typeof e==`function`}}function Lr(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Lr=function(){return!!e})()}function Rr(e,t,n){if(Lr())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&Nr(i,n.prototype),i}function zr(e){var t=typeof Map==`function`?new Map:void 0;return zr=function(e){if(e===null||!Ir(e))return e;if(typeof e!=`function`)throw TypeError(`Super expression must either be null or a function`);if(t!==void 0){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return Rr(e,arguments,Fr(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Nr(n,e)},zr(e)}var Br=function(e){Pr(t,e);function t(t){return Mr(e.call(this,`An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#`+t+` for more information.`)||this)}return t}(zr(Error)),Vr=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function Hr(e){return typeof e==`string`&&e.match(Vr)?parseFloat(e):e}var Ur=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function Wr(e){if(typeof e!=`string`)return[e,``];var t=e.match(Ur);return t?[parseFloat(e),t[2]]:[e,void 0]}function Gr(e){return Math.round(e*255)}function Kr(e,t,n){return Gr(e)+`,`+Gr(t)+`,`+Gr(n)}function qr(e,t,n,r){if(r===void 0&&(r=Kr),t===0)return r(n,n,n);var i=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*t,o=a*(1-Math.abs(i%2-1)),s=0,c=0,l=0;i>=0&&i<1?(s=a,c=o):i>=1&&i<2?(s=o,c=a):i>=2&&i<3?(c=a,l=o):i>=3&&i<4?(c=o,l=a):i>=4&&i<5?(s=o,l=a):i>=5&&i<6&&(s=a,l=o);var u=n-a/2,d=s+u,f=c+u,p=l+u;return r(d,f,p)}var Jr={aliceblue:`f0f8ff`,antiquewhite:`faebd7`,aqua:`00ffff`,aquamarine:`7fffd4`,azure:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`000`,blanchedalmond:`ffebcd`,blue:`0000ff`,blueviolet:`8a2be2`,brown:`a52a2a`,burlywood:`deb887`,cadetblue:`5f9ea0`,chartreuse:`7fff00`,chocolate:`d2691e`,coral:`ff7f50`,cornflowerblue:`6495ed`,cornsilk:`fff8dc`,crimson:`dc143c`,cyan:`00ffff`,darkblue:`00008b`,darkcyan:`008b8b`,darkgoldenrod:`b8860b`,darkgray:`a9a9a9`,darkgreen:`006400`,darkgrey:`a9a9a9`,darkkhaki:`bdb76b`,darkmagenta:`8b008b`,darkolivegreen:`556b2f`,darkorange:`ff8c00`,darkorchid:`9932cc`,darkred:`8b0000`,darksalmon:`e9967a`,darkseagreen:`8fbc8f`,darkslateblue:`483d8b`,darkslategray:`2f4f4f`,darkslategrey:`2f4f4f`,darkturquoise:`00ced1`,darkviolet:`9400d3`,deeppink:`ff1493`,deepskyblue:`00bfff`,dimgray:`696969`,dimgrey:`696969`,dodgerblue:`1e90ff`,firebrick:`b22222`,floralwhite:`fffaf0`,forestgreen:`228b22`,fuchsia:`ff00ff`,gainsboro:`dcdcdc`,ghostwhite:`f8f8ff`,gold:`ffd700`,goldenrod:`daa520`,gray:`808080`,green:`008000`,greenyellow:`adff2f`,grey:`808080`,honeydew:`f0fff0`,hotpink:`ff69b4`,indianred:`cd5c5c`,indigo:`4b0082`,ivory:`fffff0`,khaki:`f0e68c`,lavender:`e6e6fa`,lavenderblush:`fff0f5`,lawngreen:`7cfc00`,lemonchiffon:`fffacd`,lightblue:`add8e6`,lightcoral:`f08080`,lightcyan:`e0ffff`,lightgoldenrodyellow:`fafad2`,lightgray:`d3d3d3`,lightgreen:`90ee90`,lightgrey:`d3d3d3`,lightpink:`ffb6c1`,lightsalmon:`ffa07a`,lightseagreen:`20b2aa`,lightskyblue:`87cefa`,lightslategray:`789`,lightslategrey:`789`,lightsteelblue:`b0c4de`,lightyellow:`ffffe0`,lime:`0f0`,limegreen:`32cd32`,linen:`faf0e6`,magenta:`f0f`,maroon:`800000`,mediumaquamarine:`66cdaa`,mediumblue:`0000cd`,mediumorchid:`ba55d3`,mediumpurple:`9370db`,mediumseagreen:`3cb371`,mediumslateblue:`7b68ee`,mediumspringgreen:`00fa9a`,mediumturquoise:`48d1cc`,mediumvioletred:`c71585`,midnightblue:`191970`,mintcream:`f5fffa`,mistyrose:`ffe4e1`,moccasin:`ffe4b5`,navajowhite:`ffdead`,navy:`000080`,oldlace:`fdf5e6`,olive:`808000`,olivedrab:`6b8e23`,orange:`ffa500`,orangered:`ff4500`,orchid:`da70d6`,palegoldenrod:`eee8aa`,palegreen:`98fb98`,paleturquoise:`afeeee`,palevioletred:`db7093`,papayawhip:`ffefd5`,peachpuff:`ffdab9`,peru:`cd853f`,pink:`ffc0cb`,plum:`dda0dd`,powderblue:`b0e0e6`,purple:`800080`,rebeccapurple:`639`,red:`f00`,rosybrown:`bc8f8f`,royalblue:`4169e1`,saddlebrown:`8b4513`,salmon:`fa8072`,sandybrown:`f4a460`,seagreen:`2e8b57`,seashell:`fff5ee`,sienna:`a0522d`,silver:`c0c0c0`,skyblue:`87ceeb`,slateblue:`6a5acd`,slategray:`708090`,slategrey:`708090`,snow:`fffafa`,springgreen:`00ff7f`,steelblue:`4682b4`,tan:`d2b48c`,teal:`008080`,thistle:`d8bfd8`,tomato:`ff6347`,turquoise:`40e0d0`,violet:`ee82ee`,wheat:`f5deb3`,white:`fff`,whitesmoke:`f5f5f5`,yellow:`ff0`,yellowgreen:`9acd32`};function Yr(e){if(typeof e!=`string`)return e;var t=e.toLowerCase();return Jr[t]?`#`+Jr[t]:e}var Xr=/^#[a-fA-F0-9]{6}$/,Zr=/^#[a-fA-F0-9]{8}$/,Qr=/^#[a-fA-F0-9]{3}$/,$r=/^#[a-fA-F0-9]{4}$/,ei=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ti=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,ni=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,ri=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function ii(e){if(typeof e!=`string`)throw new Br(3);var t=Yr(e);if(t.match(Xr))return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16)};if(t.match(Zr)){var n=parseFloat((parseInt(``+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[2],16),green:parseInt(``+t[3]+t[4],16),blue:parseInt(``+t[5]+t[6],16),alpha:n}}if(t.match(Qr))return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16)};if(t.match($r)){var r=parseFloat((parseInt(``+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(``+t[1]+t[1],16),green:parseInt(``+t[2]+t[2],16),blue:parseInt(``+t[3]+t[3],16),alpha:r}}var i=ei.exec(t);if(i)return{red:parseInt(``+i[1],10),green:parseInt(``+i[2],10),blue:parseInt(``+i[3],10)};var a=ti.exec(t.substring(0,50));if(a)return{red:parseInt(``+a[1],10),green:parseInt(``+a[2],10),blue:parseInt(``+a[3],10),alpha:parseFloat(``+a[4])>1?parseFloat(``+a[4])/100:parseFloat(``+a[4])};var o=ni.exec(t);if(o){var s=`rgb(`+qr(parseInt(``+o[1],10),parseInt(``+o[2],10)/100,parseInt(``+o[3],10)/100)+`)`,c=ei.exec(s);if(!c)throw new Br(4,t,s);return{red:parseInt(``+c[1],10),green:parseInt(``+c[2],10),blue:parseInt(``+c[3],10)}}var l=ri.exec(t.substring(0,50));if(l){var u=`rgb(`+qr(parseInt(``+l[1],10),parseInt(``+l[2],10)/100,parseInt(``+l[3],10)/100)+`)`,d=ei.exec(u);if(!d)throw new Br(4,t,u);return{red:parseInt(``+d[1],10),green:parseInt(``+d[2],10),blue:parseInt(``+d[3],10),alpha:parseFloat(``+l[4])>1?parseFloat(``+l[4])/100:parseFloat(``+l[4])}}throw new Br(5)}function ai(e){var t=e.red/255,n=e.green/255,r=e.blue/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2;if(i===a)return e.alpha===void 0?{hue:0,saturation:0,lightness:o}:{hue:0,saturation:0,lightness:o,alpha:e.alpha};var s,c=i-a,l=o>.5?c/(2-i-a):c/(i+a);switch(i){case t:s=(n-r)/c+(n<r?6:0);break;case n:s=(r-t)/c+2;break;default:s=(t-n)/c+4;break}return s*=60,e.alpha===void 0?{hue:s,saturation:l,lightness:o}:{hue:s,saturation:l,lightness:o,alpha:e.alpha}}function oi(e){return ai(ii(e))}var H=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?`#`+e[1]+e[3]+e[5]:e};function si(e){var t=e.toString(16);return t.length===1?`0`+t:t}function ci(e){return si(Math.round(e*255))}function li(e,t,n){return H(`#`+ci(e)+ci(t)+ci(n))}function ui(e,t,n){return qr(e,t,n,li)}function di(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return ui(e,t,n);if(typeof e==`object`&&t===void 0&&n===void 0)return ui(e.hue,e.saturation,e.lightness);throw new Br(1)}function fi(e,t,n,r){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?ui(e,t,n):`rgba(`+qr(e,t,n)+`,`+r+`)`;if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?ui(e.hue,e.saturation,e.lightness):`rgba(`+qr(e.hue,e.saturation,e.lightness)+`,`+e.alpha+`)`;throw new Br(2)}function pi(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return H(`#`+si(e)+si(t)+si(n));if(typeof e==`object`&&t===void 0&&n===void 0)return H(`#`+si(e.red)+si(e.green)+si(e.blue));throw new Br(6)}function mi(e,t,n,r){if(typeof e==`string`&&typeof t==`number`){var i=ii(e);return`rgba(`+i.red+`,`+i.green+`,`+i.blue+`,`+t+`)`}else if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`&&typeof r==`number`)return r>=1?pi(e,t,n):`rgba(`+e+`,`+t+`,`+n+`,`+r+`)`;else if(typeof e==`object`&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?pi(e.red,e.green,e.blue):`rgba(`+e.red+`,`+e.green+`,`+e.blue+`,`+e.alpha+`)`;throw new Br(7)}var hi=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},gi=function(e){return typeof e.red==`number`&&typeof e.green==`number`&&typeof e.blue==`number`&&typeof e.alpha==`number`},_i=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&(typeof e.alpha!=`number`||e.alpha===void 0)},vi=function(e){return typeof e.hue==`number`&&typeof e.saturation==`number`&&typeof e.lightness==`number`&&typeof e.alpha==`number`};function yi(e){if(typeof e!=`object`)throw new Br(8);if(gi(e))return mi(e);if(hi(e))return pi(e);if(vi(e))return fi(e);if(_i(e))return di(e);throw new Br(8)}function bi(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):bi(e,t,r)}}function xi(e){return bi(e,e.length,[])}function Si(e,t){if(t===`transparent`)return t;var n=oi(t);return yi(jr({},n,{hue:n.hue+parseFloat(e)}))}xi(Si);function Ci(e,t,n){return Math.max(e,Math.min(t,n))}function wi(e,t){if(t===`transparent`)return t;var n=oi(t);return yi(jr({},n,{lightness:Ci(0,1,n.lightness-parseFloat(e))}))}var Ti=xi(wi);function Ei(e,t){if(t===`transparent`)return t;var n=oi(t);return yi(jr({},n,{saturation:Ci(0,1,n.saturation-parseFloat(e))}))}xi(Ei);function Di(e){if(e===`transparent`)return 0;var t=ii(e),n=Object.keys(t).map(function(e){var n=t[e]/255;return n<=.03928?n/12.92:((n+.055)/1.055)**2.4}),r=n[0],i=n[1],a=n[2];return parseFloat((.2126*r+.7152*i+.0722*a).toFixed(3))}function Oi(e,t){var n=Di(e),r=Di(t);return parseFloat((n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)).toFixed(2))}function ki(e,t){if(t===`transparent`)return t;var n=oi(t);return yi(jr({},n,{lightness:Ci(0,1,n.lightness+parseFloat(e))}))}var Ai=xi(ki);function ji(e,t,n){if(t===`transparent`)return n;if(n===`transparent`)return t;if(e===0)return n;var r=ii(t),i=jr({},r,{alpha:typeof r.alpha==`number`?r.alpha:1}),a=ii(n),o=jr({},a,{alpha:typeof a.alpha==`number`?a.alpha:1}),s=i.alpha-o.alpha,c=parseFloat(e)*2-1,l=((c*s===-1?c:c+s)/(1+c*s)+1)/2,u=1-l;return mi({red:Math.floor(i.red*l+o.red*u),green:Math.floor(i.green*l+o.green*u),blue:Math.floor(i.blue*l+o.blue*u),alpha:i.alpha*parseFloat(e)+o.alpha*(1-parseFloat(e))})}var Mi=xi(ji);function Ni(e,t){if(t===`transparent`)return t;var n=ii(t);return mi(jr({},n,{alpha:Ci(0,1,((typeof n.alpha==`number`?n.alpha:1)*100+parseFloat(e)*100)/100)}))}xi(Ni);function Pi(e,t){if(t===`transparent`)return t;var n=oi(t);return yi(jr({},n,{saturation:Ci(0,1,n.saturation+parseFloat(e))}))}xi(Pi);function Fi(e,t){return t===`transparent`?t:yi(jr({},oi(t),{hue:parseFloat(e)}))}xi(Fi);function Ii(e,t){return t===`transparent`?t:yi(jr({},oi(t),{lightness:parseFloat(e)}))}xi(Ii);function Li(e,t){return t===`transparent`?t:yi(jr({},oi(t),{saturation:parseFloat(e)}))}xi(Li);function Ri(e,t){return t===`transparent`?t:Mi(parseFloat(e),`rgb(0, 0, 0)`,t)}xi(Ri);function zi(e,t){return t===`transparent`?t:Mi(parseFloat(e),`rgb(255, 255, 255)`,t)}xi(zi);function Bi(e,t){if(t===`transparent`)return t;var n=ii(t);return mi(jr({},n,{alpha:Ci(0,1,((typeof n.alpha==`number`?n.alpha:1)*100-parseFloat(e)*100).toFixed(2)/100)}))}xi(Bi);var Vi=o(((e,t)=>{var n=`Expected a function`,r=`__lodash_hash_undefined__`,i=1/0,a=`[object Function]`,o=`[object GeneratorFunction]`,s=`[object Symbol]`,c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/,u=/^\./,d=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,f=/[\\^$.*+?()[\]{}|]/g,p=/\\(\\)?/g,m=/^\[object .+?Constructor\]$/,h=typeof global==`object`&&global&&global.Object===Object&&global,g=typeof self==`object`&&self&&self.Object===Object&&self,_=h||g||Function(`return this`)();function v(e,t){return e?.[t]}function y(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var b=Array.prototype,x=Function.prototype,S=Object.prototype,C=_[`__core-js_shared__`],w=function(){var e=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),T=x.toString,E=S.hasOwnProperty,ee=S.toString,te=RegExp(`^`+T.call(E).replace(f,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),ne=_.Symbol,D=b.splice,O=xe(_,`Map`),k=xe(Object,`create`),A=ne?ne.prototype:void 0,j=A?A.toString:void 0;function M(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function re(){this.__data__=k?k(null):{}}function N(e){return this.has(e)&&delete this.__data__[e]}function ie(e){var t=this.__data__;if(k){var n=t[e];return n===r?void 0:n}return E.call(t,e)?t[e]:void 0}function P(e){var t=this.__data__;return k?t[e]!==void 0:E.call(t,e)}function ae(e,t){var n=this.__data__;return n[e]=k&&t===void 0?r:t,this}M.prototype.clear=re,M.prototype.delete=N,M.prototype.get=ie,M.prototype.has=P,M.prototype.set=ae;function F(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function oe(){this.__data__=[]}function se(e){var t=this.__data__,n=he(t,e);return n<0?!1:(n==t.length-1?t.pop():D.call(t,n,1),!0)}function ce(e){var t=this.__data__,n=he(t,e);return n<0?void 0:t[n][1]}function le(e){return he(this.__data__,e)>-1}function ue(e,t){var n=this.__data__,r=he(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}F.prototype.clear=oe,F.prototype.delete=se,F.prototype.get=ce,F.prototype.has=le,F.prototype.set=ue;function I(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function de(){this.__data__={hash:new M,map:new(O||F),string:new M}}function fe(e){return be(this,e).delete(e)}function L(e){return be(this,e).get(e)}function pe(e){return be(this,e).has(e)}function me(e,t){return be(this,e).set(e,t),this}I.prototype.clear=de,I.prototype.delete=fe,I.prototype.get=L,I.prototype.has=pe,I.prototype.set=me;function he(e,t){for(var n=e.length;n--;)if(ke(e[n][0],t))return n;return-1}function ge(e,t){t=Se(t,e)?[t]:ye(t);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Ee(t[n++])];return n&&n==r?e:void 0}function _e(e){return!Me(e)||we(e)?!1:(je(e)||y(e)?te:m).test(De(e))}function ve(e){if(typeof e==`string`)return e;if(Pe(e))return j?j.call(e):``;var t=e+``;return t==`0`&&1/e==-i?`-0`:t}function ye(e){return Ae(e)?e:Te(e)}function be(e,t){var n=e.__data__;return Ce(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function xe(e,t){var n=v(e,t);return _e(n)?n:void 0}function Se(e,t){if(Ae(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Pe(e)?!0:l.test(e)||!c.test(e)||t!=null&&e in Object(t)}function Ce(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function we(e){return!!w&&w in e}var Te=Oe(function(e){e=Fe(e);var t=[];return u.test(e)&&t.push(``),e.replace(d,function(e,n,r,i){t.push(r?i.replace(p,`$1`):n||e)}),t});function Ee(e){if(typeof e==`string`||Pe(e))return e;var t=e+``;return t==`0`&&1/e==-i?`-0`:t}function De(e){if(e!=null){try{return T.call(e)}catch{}try{return e+``}catch{}}return``}function Oe(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o),o};return r.cache=new(Oe.Cache||I),r}Oe.Cache=I;function ke(e,t){return e===t||e!==e&&t!==t}var Ae=Array.isArray;function je(e){var t=Me(e)?ee.call(e):``;return t==a||t==o}function Me(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function Ne(e){return!!e&&typeof e==`object`}function Pe(e){return typeof e==`symbol`||Ne(e)&&ee.call(e)==s}function Fe(e){return e==null?``:ve(e)}function Ie(e,t,n){var r=e==null?void 0:ge(e,t);return r===void 0?n:r}t.exports=Ie})),Hi=o(((e,t)=>{var n=`Expected a function`,r=`__lodash_hash_undefined__`,i=`[object Function]`,a=`[object GeneratorFunction]`,o=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,c=typeof global==`object`&&global&&global.Object===Object&&global,l=typeof self==`object`&&self&&self.Object===Object&&self,u=c||l||Function(`return this`)();function d(e,t){return e?.[t]}function f(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}var p=Array.prototype,m=Function.prototype,h=Object.prototype,g=u[`__core-js_shared__`],_=function(){var e=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),v=m.toString,y=h.hasOwnProperty,b=h.toString,x=RegExp(`^`+v.call(y).replace(o,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),S=p.splice,C=ue(u,`Map`),w=ue(Object,`create`);function T(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function E(){this.__data__=w?w(null):{}}function ee(e){return this.has(e)&&delete this.__data__[e]}function te(e){var t=this.__data__;if(w){var n=t[e];return n===r?void 0:n}return y.call(t,e)?t[e]:void 0}function ne(e){var t=this.__data__;return w?t[e]!==void 0:y.call(t,e)}function D(e,t){var n=this.__data__;return n[e]=w&&t===void 0?r:t,this}T.prototype.clear=E,T.prototype.delete=ee,T.prototype.get=te,T.prototype.has=ne,T.prototype.set=D;function O(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function k(){this.__data__=[]}function A(e){var t=this.__data__,n=se(t,e);return n<0?!1:(n==t.length-1?t.pop():S.call(t,n,1),!0)}function j(e){var t=this.__data__,n=se(t,e);return n<0?void 0:t[n][1]}function M(e){return se(this.__data__,e)>-1}function re(e,t){var n=this.__data__,r=se(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}O.prototype.clear=k,O.prototype.delete=A,O.prototype.get=j,O.prototype.has=M,O.prototype.set=re;function N(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ie(){this.__data__={hash:new T,map:new(C||O),string:new T}}function P(e){return le(this,e).delete(e)}function ae(e){return le(this,e).get(e)}function F(e){return le(this,e).has(e)}function oe(e,t){return le(this,e).set(e,t),this}N.prototype.clear=ie,N.prototype.delete=P,N.prototype.get=ae,N.prototype.has=F,N.prototype.set=oe;function se(e,t){for(var n=e.length;n--;)if(pe(e[n][0],t))return n;return-1}function ce(e){return!he(e)||de(e)?!1:(me(e)||f(e)?x:s).test(fe(e))}function le(e,t){var n=e.__data__;return I(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function ue(e,t){var n=d(e,t);return ce(n)?n:void 0}function I(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function de(e){return!!_&&_ in e}function fe(e){if(e!=null){try{return v.call(e)}catch{}try{return e+``}catch{}}return``}function L(e,t){if(typeof e!=`function`||t&&typeof t!=`function`)throw TypeError(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o),o};return r.cache=new(L.Cache||N),r}L.Cache=N;function pe(e,t){return e===t||e!==e&&t!==t}function me(e){var t=he(e)?b.call(e):``;return t==i||t==a}function he(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}t.exports=L})),Ui=c(Vi()),Wi=c(Hi()),Gi=(e,t,n)=>{if(t!==n){let r=Math.abs(t-n)/100*.05;return t>n?Ti(r,e):Ai(r,e)}return e},U=(e,t,n,r)=>{let i;if(e===void 0)i=r===`dark`?n===void 0?600:500:700;else if(i=parseInt(e.toString(),10),isNaN(i))throw TypeError(`Error: unexpected '${typeof e}' type for color shade "${e}"`);return i+(t||0)},W=(e,t,n,r,i)=>{let a=U(t,n,r,i),o=e[a];if(!o){let t=Object.keys(e).map(e=>parseInt(e,10)).reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e);o=Gi(e[t],a,t)}return o},Ki=e=>{let t=[`currentcolor`,`inherit`,`transparent`].includes(e);if(!t)try{t=!!mr(e)}catch{t=!1}return t};function qi(e,t,n=0){if(typeof e!=`number`||isNaN(e))throw Error(`Target must be a number.`);if(!Array.isArray(t))throw Error(`Second argument must be an array.`);let r=n,i=t.length-1;if(e<t[r])return r;if(e>t[i])return i;for(;r<=i;){let n=Math.floor((r+i)/2);if(t[n]===e)return n;t[n]<e?r=n+1:i=n-1}return t[r]-e<e-t[i]?r:i}var Ji={100:1.08,200:1.2,300:1.35,400:2,500:2.8,600:3.3,700:5,800:10,900:13,1e3:16,1100:17.5,1200:19},Yi=(0,Wi.default)(e=>{let t=kr(`#FFF`,e,`#000`),n=e=>t(e/200),r=[],i=[];for(let e=0;e<=200;e++){let t=Ar(n(e));r.push(t),i.push(Oi(`#FFF`,t))}let a={},o=0;for(let e in Ji)if(Object.prototype.hasOwnProperty.call(Ji,e)){let t=Ji[e],n=qi(t,i,o);o=n+1,a[e]=r[n]}return a}),Xi=(e,t,n,r,i,a,o,s)=>{let c,l=e[i]||i;if(Object.prototype.hasOwnProperty.call(t,l)&&(l=t[l]),typeof l==`object`?c=W(l,a,o,s,r):Ki(l)&&(a===void 0?c=l:(l=Yi(l),c=W(l,a,o,s,r))),c&&s){let e=s>1?n[s]:s;if(e===void 0)throw Error("Error: invalid `transparency` parameter");c=mi(c,e)}return c},Zi=(e,t)=>{let n=(0,Ui.default)(e,t);if(typeof n==`string`)return n;throw n===void 0?ReferenceError(`Error: color variable '${t}' is not defined`):TypeError(`Error: unexpected '${typeof n}' type for color variable "${t}"`)},Qi=e=>{let t;try{let[n,r,i,a]=mr(e);t={property:Ar(`rgb(${n}, ${r}, ${i})`),transparency:a}}catch{let n=/rgba\s*\(\s*(?<property>[#\w.]+)\s*,\s*(?<alpha>[\w.]+)\s*\)/gu.exec(e);if(n&&n.groups)t={property:n.groups.property,transparency:parseFloat(n.groups.alpha)};else throw Error(`Error: invalid \`rgba\` value "${e}"`)}return t},$i=(e,t,n)=>{let r={},i=Zi(t,e);if(i.startsWith(`rgba`)){let e=Qi(i);i=e.property,r.transparency=e.transparency}let[a,o]=i.split(/\.(?<value>.*)/u);return a===`palette`?r.hue=Zi(n,o):(r.hue=a,o!==void 0&&(r.shade=parseInt(o,10))),r},ea=new WeakMap,ta={colors:0,palette:0,opacity:0};ea.set(or.colors,ta.colors),ea.set(or.palette,ta.palette),ea.set(or.opacity,ta.opacity);var na=({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c;a.colors&&(c=ea.get(a.colors),c===void 0&&(c=++ta.colors,ea.set(a.colors,c)));let l;a.opacity&&(l=ea.get(a.opacity),l===void 0&&(l=++ta.opacity,ea.set(a.opacity,l)));let u;a.palette&&(u=ea.get(a.palette),u===void 0&&(u=++ta.palette,ea.set(a.palette,u)));let d=`{${c},${u},${l}}`;return s!==void 0&&(d+=`,${s}`),t!==void 0&&(d+=`,${t}`),i!==void 0&&(d+=`,${i}`),r!==void 0&&(d+=`,${r}`),o!==void 0&&(d+=`,${o}`),e!==void 0&&(d+=`,${JSON.stringify(e)}`),n!==void 0&&(d+=`,${JSON.stringify(n)}`),d},ra=(0,Wi.default)(({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>{let c,l=a.palette&&Object.keys(a.palette).length>0?a.palette:or.palette,{base:u,variables:d,...f}=a.colors&&Object.keys(a.colors).length>0?a.colors:or.colors,p=u===`dark`?`dark`:`light`,m=p===`dark`?e:n,h=m?.hue||t,g=m?.shade===void 0?i:m.shade,_=m?.offset===void 0?r:m.offset,v=m?.transparency===void 0?o:m.transparency;if(s){let e=$i(s,d?.[p]?d[p]:or.colors.variables[p],l);h=e.hue,g=e.shade,v=v===void 0?e.transparency:v}if(h&&(c=Xi(f,l,a.opacity&&Object.keys(a.opacity).length>0?a.opacity:or.opacity,p,h,g,_,v)),c===void 0)throw Error("Error: invalid `getColor` parameters");return c},({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})=>na({dark:e,hue:t,light:n,offset:r,shade:i,theme:a,transparency:o,variable:s})),ia={end:`right`,"end-top":`right-start`,"end-bottom":`right-end`,start:`left`,"start-top":`left-start`,"start-bottom":`left-end`},aa={left:`right`,"left-start":`right-start`,"left-end":`right-end`,right:`left`,"right-start":`left-start`,"right-end":`left-end`},oa=(e,t)=>{let n=ia[e]||e;return t.rtl&&(n=aa[n]||n),n},sa={top:[`top-start`,`top`,`top-end`],right:[`right-start`,`right`,`right-end`],bottom:[`bottom-start`,`bottom`,`bottom-end`],left:[`left-start`,`left`,`left-end`]},ca={top:`bottom`,right:`left`,bottom:`top`,left:`right`},la=(e,t,n)=>{if(Array.isArray(n)&&n.length>0)return n.map(e=>oa(e,t));let r=e.split(`-`)[0],i=[...sa[r]],a=sa[ca[r]];return i.splice(i.indexOf(e),1),[...i,...a]},ua=(e,t,n)=>{let r=oa(t,e);return[r,la(r,e,n)]};function da(e,t){let[n,r]=Wr(e.toString()),[i,a]=Wr(t.toString());if(r&&r!==`px`)throw Error(`Unexpected \`height\` with '${r}' units.`);if(a&&a!==`px`)throw Error(`Unexpected \`fontSize\` with '${a}' units.`);return n/i}var fa=(e,t)=>{let n=e.split(`-`)[0];return Ln([`&`,`::before,&`,`::after{animation:0.3s ease-in-out `,`;}`],t,t,Hn([`0%,66%{`,`:2px;border:transparent;}`],n))},pa=(e,t,n,r)=>{let i=t/-2,a=Math.round((i+n+.3)*100)/100,o=`${i}px`,s=`${a}px`,c=`${t+r}px`,l,u;return e.startsWith(`top`)?(u=`rotate(-135deg)`,l=Ln([`top:`,`;right:`,`;left:`,`;margin-left:`,`;`],s,e===`top-right`&&c,e===`top`?`50%`:e===`top-left`&&c,e===`top`&&o)):e.startsWith(`right`)?(u=`rotate(-45deg)`,l=Ln([`top:`,`;right:`,`;bottom:`,`;margin-top:`,`;`],e===`right`?`50%`:e===`right-top`&&c,s,e===`right-bottom`&&c,e===`right`&&o)):e.startsWith(`bottom`)?(u=`rotate(45deg)`,l=Ln([`right:`,`;bottom:`,`;left:`,`;margin-left:`,`;`],e===`bottom-right`&&c,s,e===`bottom`?`50%`:e===`bottom-left`&&c,e===`bottom`&&o)):e.startsWith(`left`)&&(u=`rotate(135deg)`,l=Ln([`top:`,`;bottom:`,`;left:`,`;margin-top:`,`;`],e===`left`?`50%`:e===`left-top`&&c,c,s,e===`left`&&o)),Ln([`&::before,&::after{transform:`,`;`,`;}`],u,l)};function ma(e,t={}){let n=Hr(t.inset||`0`),r=Hr(t.size||`6`),i=Hr(t.shift||`0`),a=r*2/Math.sqrt(2)+2,o=Math.round(a*100)/100,s=`${o}px`;return Ln([`position:relative;&::before,&::after{position:absolute;border-width:inherit;border-style:inherit;background-color:inherit;width:`,`;height:`,`;content:'';box-sizing:inherit;}&::before{border-color:inherit;clip-path:polygon(100% `,`px,`,`px 100%,100% 100%);}&::after{border-color:transparent;background-clip:content-box;clip-path:polygon(100% `,`px,`,`px 100%,100% 100%);}`,`;`,`;`],s,s,2,2,0,0,pa(e,o,n,i),t.animationModifier&&fa(e,t.animationModifier))}var ha=[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`end`,`end-top`,`end-bottom`,`start`,`start-top`,`start-bottom`],ga=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),G=o(((e,t)=>{t.exports=ga()}))(),_a=B.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`,va=B.div`
  width: 332px;
  border-right: 1px solid #e9ebed;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  flex-shrink: 0;
  overflow-y: auto;
`,ya=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 16px;
`,ba=B.h2`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`,xa=B.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Sa=B.span`
  color: #68737d;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
`,K=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  color: #2f3941;
  background: ${e=>e.$active?`#edf7ff`:`transparent`};
  font-weight: ${e=>e.$active?`600`:`400`};

  &:hover {
    background: ${e=>e.$active?`#edf7ff`:`#f5f5f5`};
  }
`,Ca=B.span`
  font-size: 12px;
  color: #68737d;
`,wa=B.div`
  margin-top: auto;
  padding: 16px;
  border-top: 1px solid #e9ebed;
`,Ta=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 13px;
  color: #2f3941;
`,Ea=B.div`
  border-top: 1px solid #e9ebed;
  margin: 8px 0;
`,Da=B.a`
  font-size: 13px;
  color: #1f73b7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`,Oa=B.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,ka=B.div`
  padding: 24px 32px 0;
`,Aa=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,ja=B.h1`
  font-size: 22px;
  font-weight: 500;
  color: #2f3941;
  margin: 0;
`,Ma=B.div`
  display: flex;
  gap: 8px;
`,Na=B.button`
  background: #fff;
  border: 1px solid #c2c8cc;
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #f5f5f5;
  }
`,Pa=B.button`
  background: #fff;
  border: 1px solid #c2c8cc;
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #f5f5f5;
  }
`,Fa=B.button`
  background: #fff;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  padding: 5px 12px;
  font-size: 13px;
  color: #1f73b7;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #f5faff;
  }
`,Ia=B.span`
  font-size: 13px;
  color: #68737d;
  margin-top: 12px;
  display: block;
`,La=B.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 32px;
`,Ra=B.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
`,za=B.th`
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  color: #2f3941;
  padding: 10px 8px;
  border-bottom: 1px solid #e9ebed;
  white-space: nowrap;
`,Ba=B.tr`
  background: ${e=>e.$selected?`#edf7ff`:`transparent`};

  &:hover {
    background: ${e=>e.$selected?`#edf7ff`:`#fafafa`};
  }
`,Va=B.td`
  padding: 10px 8px;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
`,Ha=B.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
`,Ua=B.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  background: ${e=>e.$status===`Open`?`#e35b51`:e.$status===`Pending`?`#3b82c4`:`#f5a623`};
  text-transform: capitalize;
`,Wa=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 16px;
  padding: 4px;
`,Ga=B.div`
  border-top: 1px solid #e9ebed;
  padding: 0 32px;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  flex-shrink: 0;
`,Ka=B.span`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
`,qa=B.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #1f73b7;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 4px;

  &:hover {
    background: #f3f4f6;
  }
`,Ja=B.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #1f73b7;
  margin-left: auto;
  padding: 6px 10px;

  &:hover {
    text-decoration: underline;
  }
`,Ya=[{id:23,subject:`Refund merch`,status:`Open`,requester:`Rodrigo De Conceição`,date:`May 05`},{id:22,subject:`Refund that merch`,status:`Open`,requester:`Rodrigo De Conceição`,date:`May 05`},{id:21,subject:`Refund all merch`,status:`Open`,requester:`Rodrigo De Conceição`,date:`May 05`},{id:20,subject:`Refund my merch`,status:`Open`,requester:`Rodrigo De Conceição`,date:`May 05`},{id:19,subject:`Refund the merch`,status:`Open`,requester:`Rodrigo De Conceição`,date:`May 05`},{id:18,subject:`PDF test`,status:`Pending`,requester:`James Bond`,date:`May 04`},{id:17,subject:`Refund on merch`,status:`New`,requester:`Rusty Admin`,date:`Apr 20`},{id:16,subject:`PDF preview test`,status:`New`,requester:`W. Customer Wilson`,date:`Jan 27`},{id:15,subject:`Checking in on Dinoco product`,status:`Pending`,requester:`Gus Gus`,date:`Jan 23`},{id:14,subject:`Return order`,status:`New`,requester:`Gus Gus`,date:`Jan 23`},{id:13,subject:`Refund issues`,status:`Open`,requester:`W. Customer Wilson`,date:`Nov 13, 2025`}];function Xa({selectedTickets:e=[],setSelectedTickets:t,mergedTickets:n=[],onMerge:r,onTicketClick:i}){let a=Ya.filter(e=>!n.includes(e.id)),o=a.length>0&&e.length===a.length,s=()=>{t(o?[]:a.map(e=>e.id))},c=n=>{e.includes(n)?t(e.filter(e=>e!==n)):t([...e,n])};return(0,G.jsxs)(_a,{children:[(0,G.jsxs)(va,{children:[(0,G.jsxs)(ya,{children:[(0,G.jsx)(ba,{children:`Views`}),(0,G.jsxs)(xa,{children:[(0,G.jsx)(Sa,{children:(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M8 3v10M3 8h10`,strokeLinecap:`round`})})}),(0,G.jsx)(Sa,{children:(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M2 8a6 6 0 0111.5-2.5M14 8a6 6 0 01-11.5 2.5`,strokeLinecap:`round`}),(0,G.jsx)(`path`,{d:`M14 3v2.5h-2.5M2 13v-2.5h2.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})]}),(0,G.jsxs)(K,{children:[`Your unsolved tickets `,(0,G.jsx)(Ca,{children:`0`})]}),(0,G.jsxs)(K,{$active:!0,children:[`Unassigned tickets `,(0,G.jsx)(Ca,{children:`11`})]}),(0,G.jsxs)(K,{children:[`All unsolved tickets `,(0,G.jsx)(Ca,{children:`11`})]}),(0,G.jsxs)(K,{children:[`Recently updated tickets `,(0,G.jsx)(Ca,{children:`0`})]}),(0,G.jsxs)(K,{children:[`Pending tickets `,(0,G.jsx)(Ca,{children:`0`})]}),(0,G.jsxs)(K,{children:[`Recently solved tickets `,(0,G.jsx)(Ca,{children:`0`})]}),(0,G.jsxs)(wa,{children:[(0,G.jsxs)(Ta,{children:[`Suspended tickets `,(0,G.jsx)(Ca,{children:`0`})]}),(0,G.jsxs)(Ta,{children:[`Deleted tickets `,(0,G.jsx)(Ca,{children:`0`})]}),(0,G.jsx)(Ta,{children:`Suspended users`}),(0,G.jsx)(Ea,{}),(0,G.jsx)(Da,{href:`#`,children:`Manage customer lists ↗`})]})]}),(0,G.jsxs)(Oa,{children:[(0,G.jsxs)(ka,{children:[(0,G.jsxs)(Aa,{children:[(0,G.jsx)(ja,{children:`Unassigned tickets`}),(0,G.jsxs)(Ma,{children:[(0,G.jsx)(Na,{children:`Actions ▾`}),(0,G.jsx)(Pa,{children:`▶ Play`})]})]}),(0,G.jsx)(Fa,{children:`☰ Filter`}),(0,G.jsxs)(Ia,{children:[a.length,` tickets`]})]}),(0,G.jsx)(La,{children:(0,G.jsxs)(Ra,{children:[(0,G.jsx)(`thead`,{children:(0,G.jsxs)(`tr`,{children:[(0,G.jsx)(za,{style:{width:40},children:(0,G.jsx)(Ha,{type:`checkbox`,checked:o,onChange:s})}),(0,G.jsx)(za,{children:`Ticket status`}),(0,G.jsx)(za,{children:`Subject ⇅`}),(0,G.jsx)(za,{children:`Requester`}),(0,G.jsx)(za,{children:`Requested ↓`}),(0,G.jsx)(za,{children:`Priority ⇅`}),(0,G.jsx)(za,{style:{width:32}})]})}),(0,G.jsx)(`tbody`,{children:a.map(t=>(0,G.jsxs)(Ba,{$selected:e.includes(t.id),children:[(0,G.jsx)(Va,{children:(0,G.jsx)(Ha,{type:`checkbox`,checked:e.includes(t.id),onChange:()=>c(t.id)})}),(0,G.jsx)(Va,{children:(0,G.jsx)(Ua,{$status:t.status,children:t.status})}),(0,G.jsx)(Va,{children:(0,G.jsx)(`span`,{style:{color:`#1f73b7`,cursor:`pointer`},onClick:()=>i&&i(t.id),children:t.subject})}),(0,G.jsx)(Va,{children:t.requester}),(0,G.jsx)(Va,{children:t.date}),(0,G.jsx)(Va,{}),(0,G.jsx)(Va,{children:(0,G.jsx)(Wa,{children:`⋮`})})]},t.id))})]})}),e.length>0&&(0,G.jsxs)(Ga,{children:[(0,G.jsxs)(Ka,{children:[e.length,` tickets`]}),(0,G.jsxs)(qa,{children:[(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#1f73b7`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M11.5 1.5l3 3-9 9H2.5v-3l9-9z`,strokeLinejoin:`round`})}),`Edit`]}),(0,G.jsxs)(qa,{onClick:r,children:[(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#1f73b7`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M8 2v10`,strokeLinecap:`round`}),(0,G.jsx)(`path`,{d:`M5.5 4.5L8 2l2.5 2.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,G.jsx)(`path`,{d:`M8 12c-2 0-3 1-4.5 3`,strokeLinecap:`round`}),(0,G.jsx)(`path`,{d:`M8 12c2 0 3 1 4.5 3`,strokeLinecap:`round`})]}),`Merge`]}),(0,G.jsxs)(qa,{children:[(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#1f73b7`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M8 1.5L1.5 12.5h13L8 1.5z`,strokeLinejoin:`round`}),(0,G.jsx)(`path`,{d:`M8 6v3`,strokeLinecap:`round`}),(0,G.jsx)(`circle`,{cx:`8`,cy:`11`,r:`0.5`,fill:`#1f73b7`,stroke:`none`})]}),`Mark as spam`]}),(0,G.jsxs)(qa,{children:[(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#1f73b7`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M2 4h12M5.5 4V2.5h5V4M6 7v5M10 7v5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,G.jsx)(`path`,{d:`M3.5 4l.5 10h8l.5-10`,strokeLinejoin:`round`})]}),`Delete`]}),(0,G.jsx)(Ja,{onClick:()=>t([]),children:`Cancel`})]})]})]})}var Za=B.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`,Qa=B.div`
  background: #fff;
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
`,$a=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid #d8dcde;
  flex-shrink: 0;
`,eo=B.h1`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`,to=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 20px;
  padding: 4px;
  line-height: 1;

  &:hover {
    color: #2f3941;
  }
`,no=B.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,ro=B.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`,io=B.span`
  font-size: 13px;
  color: #2f3941;
  font-weight: 400;
`,ao=B.div`
  display: flex;
  gap: 4px;
`,oo=B.div`
  width: 40px;
  height: 3.5px;
  border-radius: 2px;
  background: ${e=>e.$active?`#2f3941`:`#d8dcde`};
`,so=B.h1`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`,co=B.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 28px;
`,lo=B.div`
  margin-bottom: 28px;
`,uo=B.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 8px;
`,fo=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
`,po=B.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
`,mo=B.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 12px;
`,ho=B.div`
  width: 100%;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,go=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: ${e=>e.$variant===`note`?`#fff8ed`:`#fff`};
  cursor: pointer;
  position: relative;
`,_o=B.span`
  font-size: 14px;
  font-weight: 400;
  color: #2f3941;
`,q=B.svg`
  width: 14px;
  height: 14px;
  margin-left: 4px;
`,vo=B.div`
  position: absolute;
  top: 100%;
  left: 16px;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 160px;
`,yo=B.div`
  padding: 10px 16px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;

  &:hover {
    background: #edf7ff;
  }
`,bo=B.textarea`
  width: 100%;
  min-height: 80px;
  padding: 0 16px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: inherit;
  resize: none;
  color: #2f3941;
  background: ${e=>e.$variant===`note`?`#fff8ed`:`#fff`};
  box-sizing: border-box;
`,xo=B.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 16px;
  background: ${e=>e.$variant===`note`?`#fff8ed`:`#fff`};
`,So=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #87929d;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`,Co=B.div`
  border-top: 1px solid #d8dcde;
  background: #fff;
  padding: 16px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,J=B.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
  padding: 10px 16px;

  &:hover {
    text-decoration: underline;
  }
`,wo=B.button`
  background: #1f73b7;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 28px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #144a75;
  }
`;function To({value:e,onChange:t}){let[n,r]=(0,g.useState)(!1),i=(0,g.useRef)(null);return(0,g.useEffect)(()=>{let e=e=>{i.current&&!i.current.contains(e.target)&&r(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,G.jsxs)(`div`,{ref:i,style:{position:`relative`,display:`flex`,alignItems:`center`,gap:`8px`},onClick:()=>r(!n),children:[e===`public`?(0,G.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M4 10l6-6v4c6 0 8 3 8 8-2-3-4-4-8-4v4l-6-6z`,strokeLinejoin:`round`})}):(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`14`,rx:`2`}),(0,G.jsx)(`path`,{d:`M7 7h6M7 10h6M7 13h4`})]}),(0,G.jsx)(_o,{children:e===`public`?`Public reply`:`Internal note`}),(0,G.jsx)(q,{viewBox:`0 0 16 16`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M4 6l4 4 4-4`,stroke:`#68737d`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),n&&(0,G.jsxs)(vo,{children:[(0,G.jsx)(yo,{onClick:e=>{e.stopPropagation(),t(`public`),r(!1)},children:`Public reply`}),(0,G.jsx)(yo,{onClick:e=>{e.stopPropagation(),t(`internal`),r(!1)},children:`Internal note`})]})]})}function Eo({sourceTickets:e,destinationTicket:t,onClose:n,onDismiss:r,onMerge:i,hideStepper:a}){let o=e.length>1,s=t?.title||``,c=t?.id,[l,u]=(0,g.useState)(``),[d,f]=(0,g.useState)(``),[p,m]=(0,g.useState)(`public`),[h,_]=(0,g.useState)(`internal`);(0,g.useEffect)(()=>{c&&s&&(u(`Merged into #${c} ${s}. This ticket is now closed.`),f(`This ticket now includes merged content from ${e.map(e=>`#${e}`).join(`, `)}.`))},[c,s]);let v=p===`internal`?`note`:null,y=h===`internal`?`note`:null;return(0,G.jsx)(Za,{onClick:r||n,children:(0,G.jsxs)(Qa,{onClick:e=>e.stopPropagation(),children:[(0,G.jsxs)($a,{children:[(0,G.jsx)(eo,{children:`Merge tickets`}),(0,G.jsx)(to,{onClick:r||n,children:`×`})]}),(0,G.jsxs)(no,{children:[!a&&(0,G.jsxs)(ro,{children:[(0,G.jsx)(io,{children:`Step 2 of 2`}),(0,G.jsxs)(ao,{children:[(0,G.jsx)(oo,{$active:!0}),(0,G.jsx)(oo,{$active:!0})]})]}),(0,G.jsx)(so,{children:`Review merge`}),(0,G.jsx)(co,{children:`Review and add comments before merging.`}),(0,G.jsxs)(lo,{children:[(0,G.jsxs)(uo,{children:[`Source ticket`,o?`s`:``]}),(0,G.jsx)(fo,{children:e.map(e=>(0,G.jsxs)(po,{children:[`#`,e]},e))}),(0,G.jsxs)(mo,{children:[o?`These tickets`:`This ticket`,` will close with this comment`]}),(0,G.jsxs)(ho,{children:[(0,G.jsx)(go,{$variant:v,children:(0,G.jsx)(To,{value:p,onChange:m})}),(0,G.jsx)(bo,{$variant:v,value:l,onChange:e=>u(e.target.value)}),(0,G.jsxs)(xo,{$variant:v,children:[(0,G.jsx)(So,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#87929d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5`}),(0,G.jsx)(`path`,{d:`M5 16h5c2.5 0 4.5-1.3 4.5-3.5S12.5 9 10 9`})]})}),(0,G.jsx)(So,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#87929d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`10`,r:`7`}),(0,G.jsx)(`circle`,{cx:`7.5`,cy:`8.5`,r:`1`,fill:`#87929d`,stroke:`none`}),(0,G.jsx)(`circle`,{cx:`12.5`,cy:`8.5`,r:`1`,fill:`#87929d`,stroke:`none`}),(0,G.jsx)(`path`,{d:`M7 12.5c1 1.5 5 1.5 6 0`})]})}),(0,G.jsx)(So,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#87929d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5`}),(0,G.jsx)(`path`,{d:`M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5`})]})}),(0,G.jsx)(So,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#87929d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z`}),(0,G.jsx)(`path`,{d:`M4 13l2 2 8-8`})]})})]})]})]}),(0,G.jsxs)(lo,{children:[(0,G.jsx)(uo,{children:`Destination ticket`}),(0,G.jsx)(fo,{children:(0,G.jsxs)(po,{children:[`#`,t?.id]})}),(0,G.jsx)(mo,{children:`This ticket will receive this comment`}),(0,G.jsxs)(ho,{children:[(0,G.jsx)(go,{$variant:y,children:(0,G.jsx)(To,{value:h,onChange:_})}),(0,G.jsx)(bo,{$variant:y,value:d,onChange:e=>f(e.target.value)}),(0,G.jsxs)(xo,{$variant:y,children:[(0,G.jsx)(So,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#87929d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5`}),(0,G.jsx)(`path`,{d:`M5 16h5c2.5 0 4.5-1.3 4.5-3.5S12.5 9 10 9`})]})}),(0,G.jsx)(So,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#87929d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`10`,r:`7`}),(0,G.jsx)(`circle`,{cx:`7.5`,cy:`8.5`,r:`1`,fill:`#87929d`,stroke:`none`}),(0,G.jsx)(`circle`,{cx:`12.5`,cy:`8.5`,r:`1`,fill:`#87929d`,stroke:`none`}),(0,G.jsx)(`path`,{d:`M7 12.5c1 1.5 5 1.5 6 0`})]})}),(0,G.jsx)(So,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#87929d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5`}),(0,G.jsx)(`path`,{d:`M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5`})]})}),(0,G.jsx)(So,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#87929d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z`}),(0,G.jsx)(`path`,{d:`M4 13l2 2 8-8`})]})})]})]})]})]}),(0,G.jsxs)(Co,{children:[(0,G.jsx)(J,{onClick:n,children:`Back`}),(0,G.jsx)(wo,{onClick:i,children:`Merge tickets`})]})]})})}var Do=B.p.attrs({"data-garden-id":`tooltip.paragraph`,"data-garden-version":`9.15.4`}).withConfig({displayName:`StyledParagraph`,componentId:`sc-wuqkfc-0`})([`margin:0;`,`;`],cr),Oo=B.strong.attrs({"data-garden-id":`tooltip.title`,"data-garden-version":`9.15.4`}).withConfig({displayName:`StyledTitle`,componentId:`sc-vnjcvz-0`})([`display:none;margin:0;font-weight:`,`;`,`;`],e=>e.theme.fontWeights.semibold,cr),ko=B.div.attrs({"data-garden-id":`tooltip.tooltip`,"data-garden-version":`9.15.4`}).withConfig({displayName:`StyledTooltip`,componentId:`sc-gzzjq4-0`})([`display:inline-block;border:`,`;box-sizing:border-box;direction:`,`;text-align:`,`;font-weight:`,`;`,`;&[aria-hidden='true']{display:none;}`,`;`,`;`],e=>e.theme.borders.sm,e=>e.theme.rtl&&`rtl`,e=>e.theme.rtl?`right`:`left`,e=>e.theme.fontWeights.regular,({theme:e,$hasArrow:t,$placement:n,$size:r})=>{let i=`${e.space.base*1.5}px`,a=e.borderRadii.sm,o=`0 1em`,s,c,l=`nowrap`,u=da(e.space.base*5,e.fontSizes.sm),d=e.fontSizes.sm,f,p,m;r!==`small`&&(a=e.borderRadii.md,c=`break-word`,l=`normal`,m=`break-word`),r===`extra-large`?(o=`${e.space.base*10}px`,s=`460px`,u=da(e.space.base*5,e.fontSizes.md),p=`${e.space.base*2.5}px`):r===`large`?(o=`${e.space.base*5}px`,s=`270px`,u=da(e.space.base*5,e.fontSizes.md),p=`${e.space.base*2}px`):r===`medium`&&(o=`1em`,s=`140px`,u=da(e.space.base*4,e.fontSizes.sm)),(r===`extra-large`||r===`large`)&&(d=e.fontSizes.md,f=`block`);let h,g;return t&&(r===`small`?(h=i,g=[`left-start`,`left-end`,`right-start`,`right-end`].includes(n)?`-${e.borderRadii.md}px`:`0`):r===`medium`?h=i:r===`large`?(i=`${e.space.base*2}px`,h=i):r===`extra-large`&&(i=`${e.space.base*3}px`,h=`${e.space.base*2.5}px`)),Ln([`margin:`,`;border-radius:`,`;padding:`,`;max-width:`,`;line-height:`,`;word-wrap:`,`;white-space:`,`;font-size:`,`;overflow-wrap:`,`;`,`;`,`{margin-top:`,`;}`,`{display:`,`;}`],i,a,o,s,u,m,l,d,c,t&&ma(dr(e,n),{size:h,shift:g}),Do,p,Oo,f)},({theme:e,$type:t})=>{let n,r,i,a,o;return t===`light`?(i=ra({theme:e,variable:`background.raised`}),n=ra({theme:e,variable:`border.default`}),r=e.shadows.lg(`${e.space.base*(e.colors.base===`dark`?4:5)}px`,`${e.space.base*(e.colors.base===`dark`?6:7)}px`,ra({variable:`shadow.medium`,theme:e})),a=ra({theme:e,variable:`foreground.subtle`}),o=ra({theme:e,variable:`foreground.default`})):(i=ra({theme:e,hue:`neutralHue`,light:{shade:900},dark:{shade:700}}),n=i,r=e.shadows.lg(`${e.space.base}px`,`${e.space.base*2}px`,ra({variable:`shadow.small`,theme:e})),a=ra({theme:e,hue:`white`})),Ln([`border-color:`,`;box-shadow:`,`;background-color:`,`;color:`,`;`,`{color:`,`;}`],n,r,i,a,Oo,o)},cr),Ao=B.div.withConfig({displayName:`StyledTooltipWrapper`,componentId:`sc-1b7q9q6-0`})([`position:absolute;top:0;left:0;transition:opacity 10ms;opacity:1;z-index:`,`;&[aria-hidden='true']{visibility:hidden;opacity:0;}`],e=>e.$zIndex),jo=(0,g.forwardRef)((e,t)=>g.createElement(Do,Object.assign({ref:t},e)));jo.displayName=`Tooltip.Paragraph`;var Mo=(0,g.forwardRef)((e,t)=>g.createElement(Oo,Object.assign({ref:t},e)));Mo.displayName=`Tooltip.Title`;function No(e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}function Po(){return!!(typeof window<`u`&&window.document&&window.document.createElement)}var Fo=Po()?g.useLayoutEffect:g.useEffect,Io=!1,Lo=0;function Ro(){return++Lo}var zo=g.useId;function Bo(e){if(zo!==void 0){let t=zo();return e??t}let t=e??(Io?Ro():null),[n,r]=g.useState(t);return Fo(()=>{n===null&&r(Ro())},[]),g.useEffect(()=>{Io===!1&&(Io=!0)},[]),e??n??void 0}function Vo(...e){return(t,...n)=>e.some(e=>(e&&e(t,...n),t&&t.defaultPrevented))}function Ho(...e){for(let t of e)if(t!==void 0)return t}var Uo={ALT:`Alt`,ASTERISK:`*`,BACKSPACE:`Backspace`,COMMA:`,`,DELETE:`Delete`,DOWN:`ArrowDown`,END:`End`,ENTER:`Enter`,ESCAPE:`Escape`,HOME:`Home`,LEFT:`ArrowLeft`,NUMPAD_ADD:`Add`,NUMPAD_DECIMAL:`Decimal`,NUMPAD_DIVIDE:`Divide`,NUMPAD_ENTER:`Enter`,NUMPAD_MULTIPLY:`Multiply`,NUMPAD_SUBTRACT:`Subtract`,PAGE_DOWN:`PageDown`,PAGE_UP:`PageUp`,PERIOD:`.`,RIGHT:`ArrowRight`,SHIFT:`Shift`,SPACE:` `,TAB:`Tab`,UNIDENTIFIED:`Unidentified`,UP:`ArrowUp`},Wo=0,Go=e=>{let t=Bo(e);return t=t==null?`id:${Wo++}`:`${t}`,t},Y=c(b()),Ko=({delayMilliseconds:e=500,id:t,isLabel:n,isVisible:r,triggerRef:i})=>{let a=Go(t),[o,s]=(0,g.useState)(r),c=(0,g.useRef)(!1),l=(0,g.useRef)(),u=(0,g.useRef)(),d=(0,g.useRef)(!1),f=(0,g.useCallback)((t=e)=>{if(d.current)return;clearTimeout(u.current);let n=setTimeout(()=>{c.current&&!d.current&&s(!0)},t);l.current=Number(n)},[e]),p=(0,g.useCallback)((t=e)=>{clearTimeout(l.current);let n=setTimeout(()=>{c.current&&s(!1)},t);u.current=Number(n)},[e]);(0,g.useEffect)(()=>(c.current=!0,()=>{c.current=!1}),[]),(0,g.useEffect)(()=>()=>{clearTimeout(l.current),clearTimeout(u.current)},[u,l]),(0,g.useEffect)(()=>{let e=i?.current?.getAttribute(`aria-haspopup`)===`true`?i.current:null,t=()=>{let t=e?.getAttribute(`aria-expanded`)===`true`;e&&t&&s(!1),d.current=t},n=new MutationObserver(t);return e&&n.observe(e,{attributes:!0,attributeFilter:[`aria-expanded`]}),t(),()=>n.disconnect()},[i]);let m=(0,g.useCallback)(({tabIndex:e=0,onMouseEnter:t,onMouseLeave:r,onFocus:s,onBlur:c,onKeyDown:l,...u}={})=>({tabIndex:e,onMouseEnter:Vo(t,()=>f()),onMouseLeave:Vo(r,()=>p()),onFocus:Vo(s,e=>{e.currentTarget.matches(`:focus-visible`)&&f()}),onBlur:Vo(c,()=>p(0)),onKeyDown:Vo(l,e=>{e.key===Uo.ESCAPE&&o&&p(0)}),[n?`aria-labelledby`:`aria-describedby`]:a,"data-garden-container-id":`containers.tooltip`,"data-garden-container-version":`2.2.2`,ref:i,...u}),[a,n,p,f,i,o]),h=(0,g.useCallback)(({role:e=`tooltip`,onMouseEnter:t,onMouseLeave:n,...r}={})=>({role:e,onMouseEnter:Vo(t,()=>f()),onMouseLeave:Vo(n,()=>p()),"aria-hidden":!o,id:a,...r}),[a,p,f,o]);return(0,g.useMemo)(()=>({isVisible:o,getTooltipProps:h,getTriggerProps:m,openTooltip:f,closeTooltip:p}),[p,h,m,f,o])},qo=e=>{let{children:t,render:n=t,...r}=e;return g.createElement(g.Fragment,null,n(Ko(r)))};qo.defaultProps={delayMilliseconds:500},qo.propTypes={children:Y.default.func,render:Y.default.func,delayMilliseconds:Y.default.number,id:Y.default.string,isLabel:Y.default.bool,isVisible:Y.default.bool,triggerRef:Y.default.any.isRequired};var Jo=[`auto`,...ha],Yo=[`small`,`medium`,`large`,`extra-large`],Xo=[`light`,`dark`],Zo=[`top`,`right`,`bottom`,`left`],Qo=[`start`,`end`],$o=Zo.reduce((e,t)=>e.concat(t,t+`-`+Qo[0],t+`-`+Qo[1]),[]),es=Math.min,ts=Math.max,ns=Math.round,rs=Math.floor,is=e=>({x:e,y:e}),as={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function os(e,t){return typeof e==`function`?e(t):e}function ss(e){return e.split(`-`)[0]}function cs(e){return e.split(`-`)[1]}function ls(e){return e===`x`?`y`:`x`}function us(e){return e===`y`?`height`:`width`}function ds(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function fs(e){return ls(ds(e))}function ps(e,t,n){n===void 0&&(n=!1);let r=cs(e),i=fs(e),a=us(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Ss(o)),[o,Ss(o)]}function ms(e){let t=Ss(e);return[hs(e),t,hs(t)]}function hs(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var gs=[`left`,`right`],_s=[`right`,`left`],vs=[`top`,`bottom`],ys=[`bottom`,`top`];function bs(e,t,n){switch(e){case`top`:case`bottom`:return n?t?_s:gs:t?gs:_s;case`left`:case`right`:return t?vs:ys;default:return[]}}function xs(e,t,n,r){let i=cs(e),a=bs(ss(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(hs)))),a}function Ss(e){let t=ss(e);return as[t]+e.slice(t.length)}function Cs(e){return{top:0,right:0,bottom:0,left:0,...e}}function ws(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Cs(e)}function Ts(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Es(e,t,n){let{reference:r,floating:i}=e,a=ds(t),o=fs(t),s=us(o),c=ss(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(cs(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function Ds(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=os(t,e),p=ws(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Ts(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Ts(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Os=50,ks=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Ds},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Es(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Os&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=Es(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}};function As(e,t,n){return(e?[...n.filter(t=>cs(t)===e),...n.filter(t=>cs(t)!==e)]:n.filter(e=>ss(e)===e)).filter(n=>e?cs(n)===e||(t?hs(n)!==n:!1):!0)}var js=function(e){return e===void 0&&(e={}),{name:`autoPlacement`,options:e,async fn(t){let{rects:n,middlewareData:r,placement:i,platform:a,elements:o}=t,{crossAxis:s=!1,alignment:c,allowedPlacements:l=$o,autoAlignment:u=!0,...d}=os(e,t),f=c!==void 0||l===$o?As(c||null,u,l):l,p=await a.detectOverflow(t,d),m=r.autoPlacement?.index||0,h=f[m];if(h==null)return{};let g=ps(h,n,await(a.isRTL==null?void 0:a.isRTL(o.floating)));if(i!==h)return{reset:{placement:f[0]}};let _=[p[ss(h)],p[g[0]],p[g[1]]],v=[...r.autoPlacement?.overflows||[],{placement:h,overflows:_}],y=f[m+1];if(y)return{data:{index:m+1,overflows:v},reset:{placement:y}};let b=v.map(e=>{let t=cs(e.placement);return[e.placement,t&&s?e.overflows.slice(0,2).reduce((e,t)=>e+t,0):e.overflows[0],e.overflows]}).sort((e,t)=>e[1]-t[1]),x=b.filter(e=>e[2].slice(0,cs(e[0])?2:3).every(e=>e<=0))[0]?.[0]||b[0][0];return x===i?{}:{data:{index:m+1,overflows:v},reset:{placement:x}}}}},Ms=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=os(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=ss(r),_=ds(o),v=ss(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Ss(o)]:ms(o)),x=p!==`none`;!d&&x&&b.push(...xs(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=ps(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==ds(t))||T.every(e=>ds(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=ds(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}};function Ns(){return typeof window<`u`}function Ps(e){return Is(e)?(e.nodeName||``).toLowerCase():`#document`}function X(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Fs(e){return((Is(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Is(e){return Ns()?e instanceof Node||e instanceof X(e).Node:!1}function Ls(e){return Ns()?e instanceof Element||e instanceof X(e).Element:!1}function Rs(e){return Ns()?e instanceof HTMLElement||e instanceof X(e).HTMLElement:!1}function zs(e){return!Ns()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof X(e).ShadowRoot}function Bs(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Zs(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Vs(e){return/^(table|td|th)$/.test(Ps(e))}function Hs(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Us=/transform|translate|scale|rotate|perspective|filter/,Ws=/paint|layout|strict|content/,Gs=e=>!!e&&e!==`none`,Ks;function qs(e){let t=Ls(e)?Zs(e):e;return Gs(t.transform)||Gs(t.translate)||Gs(t.scale)||Gs(t.rotate)||Gs(t.perspective)||!Ys()&&(Gs(t.backdropFilter)||Gs(t.filter))||Us.test(t.willChange||``)||Ws.test(t.contain||``)}function Js(e){let t=$s(e);for(;Rs(t)&&!Xs(t);){if(qs(t))return t;if(Hs(t))return null;t=$s(t)}return null}function Ys(){return Ks??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Ks}function Xs(e){return/^(html|body|#document)$/.test(Ps(e))}function Zs(e){return X(e).getComputedStyle(e)}function Qs(e){return Ls(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $s(e){if(Ps(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||zs(e)&&e.host||Fs(e);return zs(t)?t.host:t}function ec(e){let t=$s(e);return Xs(t)?e.ownerDocument?e.ownerDocument.body:e.body:Rs(t)&&Bs(t)?t:ec(t)}function tc(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=ec(e),i=r===e.ownerDocument?.body,a=X(r);if(i){let e=nc(a);return t.concat(a,a.visualViewport||[],Bs(r)?r:[],e&&n?tc(e):[])}else return t.concat(r,tc(r,[],n))}function nc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rc(e){let t=Zs(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Rs(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=ns(n)!==a||ns(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ic(e){return Ls(e)?e:e.contextElement}function ac(e){let t=ic(e);if(!Rs(t))return is(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=rc(t),o=(a?ns(n.width):n.width)/r,s=(a?ns(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var oc=is(0);function sc(e){let t=X(e);return!Ys()||!t.visualViewport?oc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cc(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==X(e)?!1:t}function lc(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ic(e),o=is(1);t&&(r?Ls(r)&&(o=ac(r)):o=ac(e));let s=cc(a,n,r)?sc(a):is(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=X(a),t=r&&Ls(r)?X(r):r,n=e,i=nc(n);for(;i&&r&&t!==n;){let e=ac(i),t=i.getBoundingClientRect(),r=Zs(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=X(i),i=nc(n)}}return Ts({width:u,height:d,x:c,y:l})}function uc(e,t){let n=Qs(e).scrollLeft;return t?t.left+n:lc(Fs(e)).left+n}function dc(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-uc(e,n),y:n.top+t.scrollTop}}function fc(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Fs(r),s=t?Hs(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=is(1),u=is(0),d=Rs(r);if((d||!d&&!a)&&((Ps(r)!==`body`||Bs(o))&&(c=Qs(r)),d)){let e=lc(r);l=ac(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?dc(o,c):is(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Z(e){return Array.from(e.getClientRects())}function pc(e){let t=Fs(e),n=Qs(e),r=e.ownerDocument.body,i=ts(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=ts(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+uc(e),s=-n.scrollTop;return Zs(r).direction===`rtl`&&(o+=ts(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var mc=25;function hc(e,t){let n=X(e),r=Fs(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Ys();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=uc(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=mc&&(a-=o)}else l<=mc&&(a+=l);return{width:a,height:o,x:s,y:c}}function gc(e,t){let n=lc(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Rs(e)?ac(e):is(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function _c(e,t,n){let r;if(t===`viewport`)r=hc(e,n);else if(t===`document`)r=pc(Fs(e));else if(Ls(t))r=gc(t,n);else{let n=sc(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ts(r)}function vc(e,t){let n=$s(e);return n===t||!Ls(n)||Xs(n)?!1:Zs(n).position===`fixed`||vc(n,t)}function yc(e,t){let n=t.get(e);if(n)return n;let r=tc(e,[],!1).filter(e=>Ls(e)&&Ps(e)!==`body`),i=null,a=Zs(e).position===`fixed`,o=a?$s(e):e;for(;Ls(o)&&!Xs(o);){let t=Zs(o),n=qs(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||Bs(o)&&!n&&vc(e,o))?r=r.filter(e=>e!==o):i=t,o=$s(o)}return t.set(e,r),r}function bc(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Hs(t)?[]:yc(t,this._c):[].concat(n),r],o=_c(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=_c(t,a[e],i);s=ts(n.top,s),c=es(n.right,c),l=es(n.bottom,l),u=ts(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function xc(e){let{width:t,height:n}=rc(e);return{width:t,height:n}}function Sc(e,t,n){let r=Rs(t),i=Fs(t),a=n===`fixed`,o=lc(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=is(0);function l(){c.x=uc(i)}if(r||!r&&!a)if((Ps(t)!==`body`||Bs(i))&&(s=Qs(t)),r){let e=lc(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?dc(i,s):is(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Cc(e){return Zs(e).position===`static`}function wc(e,t){if(!Rs(e)||Zs(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Fs(e)===n&&(n=n.ownerDocument.body),n}function Tc(e,t){let n=X(e);if(Hs(e))return n;if(!Rs(e)){let t=$s(e);for(;t&&!Xs(t);){if(Ls(t)&&!Cc(t))return t;t=$s(t)}return n}let r=wc(e,t);for(;r&&Vs(r)&&Cc(r);)r=wc(r,t);return r&&Xs(r)&&Cc(r)&&!qs(r)?n:r||Js(e)||n}var Ec=async function(e){let t=this.getOffsetParent||Tc,n=this.getDimensions,r=await n(e.floating);return{reference:Sc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Dc(e){return Zs(e).direction===`rtl`}var Oc={convertOffsetParentRelativeRectToViewportRelativeRect:fc,getDocumentElement:Fs,getClippingRect:bc,getOffsetParent:Tc,getElementRects:Ec,getClientRects:Z,getDimensions:xc,getScale:ac,isElement:Ls,isRTL:Dc};function kc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ac(e,t){let n=null,r,i=Fs(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=rs(d),h=rs(i.clientWidth-(u+f)),g=rs(i.clientHeight-(d+p)),_=rs(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:ts(0,es(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!kc(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function jc(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ic(e),u=i||a?[...l?tc(l):[],...t?tc(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Ac(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?lc(e):null;c&&g();function g(){let t=lc(e);h&&!kc(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Mc=js,Nc=Ms,Pc=(e,t,n)=>{let r=new Map,i={platform:Oc,...n},a={...i.platform,_c:r};return ks(e,t,{...i,platform:a})},Fc=c(m(),1),Ic=typeof document<`u`?g.useLayoutEffect:function(){};function Lc(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Lc(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Lc(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Rc(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function zc(e,t){let n=Rc(e);return Math.round(t*n)/n}function Bc(e){let t=g.useRef(e);return Ic(()=>{t.current=e}),t}function Vc(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=g.useState(r);Lc(f,r)||p(r);let[m,h]=g.useState(null),[_,v]=g.useState(null),y=g.useCallback(e=>{e!==C.current&&(C.current=e,h(e))},[]),b=g.useCallback(e=>{e!==w.current&&(w.current=e,v(e))},[]),x=a||m,S=o||_,C=g.useRef(null),w=g.useRef(null),T=g.useRef(u),E=c!=null,ee=Bc(c),te=Bc(i),ne=Bc(l),D=g.useCallback(()=>{if(!C.current||!w.current)return;let e={placement:t,strategy:n,middleware:f};te.current&&(e.platform=te.current),Pc(C.current,w.current,e).then(e=>{let t={...e,isPositioned:ne.current!==!1};O.current&&!Lc(T.current,t)&&(T.current=t,Fc.flushSync(()=>{d(t)}))})},[f,t,n,te,ne]);Ic(()=>{l===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let O=g.useRef(!1);Ic(()=>(O.current=!0,()=>{O.current=!1}),[]),Ic(()=>{if(x&&(C.current=x),S&&(w.current=S),x&&S){if(ee.current)return ee.current(x,S,D);D()}},[x,S,D,ee,E]);let k=g.useMemo(()=>({reference:C,floating:w,setReference:y,setFloating:b}),[y,b]),A=g.useMemo(()=>({reference:x,floating:S}),[x,S]),j=g.useMemo(()=>{let e={position:n,left:0,top:0};if(!A.floating)return e;let t=zc(A.floating,u.x),r=zc(A.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...Rc(A.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,A.floating,u.x,u.y]);return g.useMemo(()=>({...u,update:D,refs:k,elements:A,floatingStyles:j}),[u,D,k,A,j])}var Q=(e,t)=>{let n=Nc(e);return{name:n.name,fn:n.fn,options:[e,t]}},Hc=(e,t)=>{let n=Mc(e);return{name:n.name,fn:n.fn,options:[e,t]}},Uc=(e,t)=>{let n=e;return n===void 0&&(n=t===`dark`?`small`:`large`),n},Wc=({id:e,delayMS:t=500,isLabel:n,isInitialVisible:r,content:i,refKey:a=`ref`,placement:o=`top`,fallbackPlacements:s,children:c,hasArrow:l=!0,size:u,type:d=`dark`,appendToNode:f,zIndex:p,isVisible:m,onFocus:h,onBlur:_,...v})=>{let y=(0,g.useContext)(On)||or,b=(0,g.useRef)(null),x=(0,g.useRef)(null),{isVisible:S,getTooltipProps:C,getTriggerProps:w,openTooltip:T,closeTooltip:E}=Ko({id:e,delayMilliseconds:t,isVisible:r,isLabel:n,triggerRef:b}),ee=Ho(m,S),[te,ne]=ua(y,o===`auto`?`top`:o,s),{refs:D,placement:O,update:k,floatingStyles:{transform:A}}=Vc({platform:{...Oc,isRTL:()=>y.rtl},elements:{reference:b?.current,floating:x?.current},placement:te,middleware:o===`auto`?[Hc()]:[Q({fallbackPlacements:ne})]});(0,g.useEffect)(()=>{let e;return ee&&D.reference.current&&D.floating.current&&(e=jc(D.reference.current,D.floating.current,k,{elementResize:typeof ResizeObserver==`function`})),()=>e&&e()},[ee,D.reference,D.floating,k]);let j=g.Children.only(c),M=g.createElement(Ao,{ref:x,style:{transform:A},$zIndex:p,"aria-hidden":!ee},g.createElement(ko,Object.assign({$hasArrow:l,$placement:O,$size:Uc(u,d),$type:d},C({"aria-hidden":!ee,onBlur:Vo(_,()=>E(0)),onFocus:Vo(h,T),...v})),i));return g.createElement(g.Fragment,null,(0,g.cloneElement)(j,w({...j.props,[a]:No([b,j.ref?j.ref:null])})),f?(0,Fc.createPortal)(M,f):M)};Wc.displayName=`Tooltip`,Wc.propTypes={appendToNode:Y.default.any,hasArrow:Y.default.bool,delayMS:Y.default.number,id:Y.default.string,content:Y.default.node.isRequired,placement:Y.default.oneOf(Jo),fallbackPlacements:Y.default.arrayOf(Y.default.oneOf(Jo.filter(e=>e!==`auto`))),size:Y.default.oneOf(Yo),type:Y.default.oneOf(Xo),zIndex:Y.default.oneOfType([Y.default.number,Y.default.string]),isInitialVisible:Y.default.bool,isLabel:Y.default.bool,refKey:Y.default.string};var Gc=Wc;Gc.Paragraph=jo,Gc.Title=Mo;var Kc=B.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: #fff;
`,qc=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid #d8dcde;
  flex-shrink: 0;
`,Jc=B.h1`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`,Yc=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 20px;
  padding: 4px;
  line-height: 1;

  &:hover {
    color: #2f3941;
  }
`,Xc=B.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,Zc=B.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,Qc=B.span`
  font-size: 13px;
  color: #2f3941;
  font-weight: 400;
`,$c=B.div`
  display: flex;
  gap: 4px;
`,el=B.div`
  width: 40px;
  height: 3.5px;
  border-radius: 2px;
  background: ${e=>e.$active?`#2f3941`:`#d8dcde`};
`,tl=B.h2`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 20px;
`,nl=B.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 8px;
`,rl=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
`,il=B.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`,al=B.span`
  font-size: 14px;
  color: #2f3941;
`,ol=B.div`
  position: relative;
  display: inline-block;
  margin-top: 4px;
`,sl=B.span`
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`,cl=B.div`
  position: fixed;
  background: #2f3941;
  border-radius: 8px;
  padding: 16px;
  z-index: 9999;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #2f3941;
  }
`,ll=B.div`
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
`,ul=B.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: column;
  gap: 6px 24px;
`,dl=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,fl=B.span`
  background: #49545c;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
`,pl=B.span`
  font-size: 13px;
  color: #fff;
`,ml=B.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 32px 0 4px;
`,hl=B.p`
  font-size: 14px;
  color: #68737d;
  margin: 0 0 10px;
`,gl=B.div`
  position: relative;
  width: 100%;
`,_l=B.div`
  width: 100%;
  padding: 0 12px;
  border: 1px solid ${e=>e.$error?`#cc3340`:`#c2c8cc`};
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  cursor: text;
  box-sizing: border-box;

  &:focus-within {
    border-color: ${e=>e.$error?`#cc3340`:`#1f73b7`};
    box-shadow: 0 0 0 3px ${e=>e.$error?`rgba(204, 51, 64, 0.15)`:`rgba(31, 115, 183, 0.15)`};
  }
`,vl=B.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
  white-space: nowrap;
  flex-shrink: 0;
`,yl=B.span`
  font-size: 14px;
  color: #2f3941;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bl=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 16px;
  padding: 0 4px;
  margin-left: auto;
  flex-shrink: 0;

  &:hover {
    color: #2f3941;
  }
`,xl=B.input`
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  min-width: 60px;
  padding: 0;
`,Sl=B.div`
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
  z-index: 10;
`,Cl=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;

  &:hover {
    background: #edf7ff;
  }
`,wl=B.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
  flex-shrink: 0;
`,Tl=B.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #cc3340;
  margin-top: 8px;
`,El=B.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #fff8ed;
  border: 1px solid #f5c451;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  height: 80px;
  font-size: 14px;
  font-weight: 600;
  color: #703815;
  box-sizing: border-box;
`,Dl=B.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #2f3941;
  margin-top: 24px;
  margin-bottom: 12px;
`,Ol=B.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,kl=B.div`
  position: relative;
  border: 1.5px solid ${e=>e.$active?`#1f73b7`:`#d8dcde`};
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  background: ${e=>e.$active?`#edf7ff`:`#fff`};
  transition: border-color 0.15s, background 0.15s;

  &:hover {
    border-color: #1f73b7;
  }
`,Al=B.span`
  position: absolute;
  top: 12px;
  right: 12px;
`,jl=B.span`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: ${e=>e.$color||`#e35b51`};
  display: inline-block;
  flex-shrink: 0;
`,Ml=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 4px;
`,Nl=B.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`,Pl=B.span`
  font-size: 13px;
  color: #68737d;
`,Fl=B.div`
  border-top: 1px solid #d8dcde;
  background: #fff;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,Il=B.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
  padding: 10px 16px;

  &:hover {
    text-decoration: underline;
  }
`,Ll=B.button`
  background: #1f73b7;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 28px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #144a75;
  }
`,Rl=[{id:29,subject:`Refund for duplicate charge`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:28,subject:`Refund pending over 2 weeks`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:27,subject:`Partial refund not received`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:26,subject:`Refund went to wrong card`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:25,subject:`Refund request for gift order`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:24,subject:`Refund denied but item returned`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:23,subject:`Refund merch`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:22,subject:`Refund that merch`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:21,subject:`Refund all merch`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:20,subject:`Refund my merch`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:19,subject:`Refund the merch`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:18,subject:`PDF test`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:17,subject:`Refund on merch`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:16,subject:`PDF preview test`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:15,subject:`Checking in on Dinoco product`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:14,subject:`Return order`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:13,subject:`Refund issues`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:12,subject:`Shipping delay inquiry`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:11,subject:`Account login issue`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:10,subject:`Cancel subscription request`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:9,subject:`Billing discrepancy`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:8,subject:`Product not as described`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:7,subject:`Exchange request for wrong size`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:6,subject:`Missing item in order`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:5,subject:`Warranty claim question`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:4,subject:`Discount code not working`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:3,subject:`Update shipping address`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:2,subject:`Order confirmation not received`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:1,subject:`General inquiry about services`,brand:`Rusteze`,org:`Radiator Springs Motors`},{id:39,subject:`Lightning McQueen bobblehead broke day 1`,brand:`Dinoco`,org:`Dinoco HQ`},{id:38,subject:`Where is my Piston Cup replica`,brand:`Dinoco`,org:`Dinoco HQ`},{id:37,subject:`Pit crew outfit came in wrong size`,brand:`Dinoco`,org:`Dinoco HQ`},{id:36,subject:`Sponsor decal peeling off already`,brand:`Dinoco`,org:`Dinoco HQ`},{id:35,subject:`Refund subscription`,brand:`Dinoco`,org:`Dinoco HQ`},{id:34,subject:`Ka-chow energy drink tastes weird`,brand:`Dinoco`,org:`Dinoco HQ`},{id:33,subject:`Radiator Springs tour was underwhelming`,brand:`Dinoco`,org:`Dinoco HQ`},{id:32,subject:`Mater tow hook keychain rusted`,brand:`Dinoco`,org:`Dinoco HQ`},{id:31,subject:`Cozy Cone motel booking glitch`,brand:`Dinoco`,org:`Dinoco HQ`},{id:30,subject:`Doc Hudson poster never arrived`,brand:`Dinoco`,org:`Dinoco HQ`},{id:44,subject:`Refund for canceled event tickets`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:43,subject:`Refund not showing on statement`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:42,subject:`Overcharged on last order`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:41,subject:`Refund for damaged package`,brand:`Rusteze`,org:`Piston Cup Racing`},{id:40,subject:`Double charged need refund`,brand:`Rusteze`,org:`Piston Cup Racing`}],$=[{id:19,title:`Refund the merch`,requester:`Rodrigo De Conceição`,date:`May 4, 2026`,status:`Open`},{id:20,title:`Refund my merch`,requester:`Rodrigo De Conceição`,date:`May 4, 2026`,status:`Open`},{id:21,title:`Refund all merch`,requester:`Rodrigo De Conceição`,date:`May 4, 2026`,status:`Open`},{id:22,title:`Refund that merch`,requester:`Rodrigo De Conceição`,date:`May 4, 2026`,status:`Open`},{id:23,title:`Refund merch`,requester:`Rodrigo De Conceição`,date:`May 5, 2026`,status:`Open`},{id:24,title:`Refund denied but item returned`,requester:`Rodrigo De Conceição`,date:`May 5, 2026`,status:`New`},{id:25,title:`Refund request for gift order`,requester:`Rodrigo De Conceição`,date:`May 5, 2026`,status:`Pending`},{id:40,title:`Double charged need refund`,requester:`Rodrigo De Conceição`,date:`May 7, 2026`,status:`Open`},{id:41,title:`Refund for damaged package`,requester:`Rodrigo De Conceição`,date:`May 7, 2026`,status:`New`},{id:42,title:`Overcharged on last order`,requester:`Rodrigo De Conceição`,date:`May 7, 2026`,status:`Pending`},{id:43,title:`Refund not showing on statement`,requester:`Rodrigo De Conceição`,date:`May 8, 2026`,status:`Open`},{id:44,title:`Refund for canceled event tickets`,requester:`Rodrigo De Conceição`,date:`May 8, 2026`,status:`New`}],zl=[{id:26,title:`Refund went to wrong card`,requester:`Rodrigo De Conceição`,date:`May 3, 2026`,status:`Open`},{id:15,title:`Checking in on Dinoco product`,requester:`Gus Gus`,date:`Apr 30, 2026`,status:`New`},{id:35,title:`Refund subscription`,requester:`Sally Carrera`,date:`Apr 28, 2026`,status:`Pending`},{id:44,title:`Refund for canceled event tickets`,requester:`Rodrigo De Conceição`,date:`Apr 26, 2026`,status:`New`},{id:14,title:`Return order`,requester:`Gus Gus`,date:`Apr 25, 2026`,status:`Open`}],Bl={New:`#f5a623`,Open:`#e35b51`,Pending:`#3b82c4`};function Vl({sourceTickets:e,onBack:t,onNext:n,initialDestination:r,mergedTicketIds:i=[]}){let[a,o]=(0,g.useState)(r?.id||null),[s,c]=(0,g.useState)(r?.title||null),[l,u]=(0,g.useState)(``),[d,f]=(0,g.useState)(!1),[p,m]=(0,g.useState)(null),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)({top:0,left:0}),b=(0,g.useRef)(null),x=(0,g.useRef)(null),S=e.map(e=>Rl.find(t=>t.id===e)?.org).filter(Boolean)[0],C=e.map(e=>Rl.find(t=>t.id===e)?.brand).filter(Boolean)[0],w=a?$.find(e=>e.id===a)||zl.find(e=>e.id===a)||{id:a,title:s}:null,T=e=>{let t=Rl.find(t=>t.id===e);return t&&S&&t.org!==S},E=e=>{let t=Rl.find(t=>t.id===e);return t&&C&&t.brand!==C},ee=(()=>{let t=l.trim();if(!t)return Rl.filter(t=>t.id>=13&&t.id<=18&&!e.includes(t.id));let n=Rl.filter(t=>!e.includes(t.id));if(t.startsWith(`#`)){let e=t.slice(1);return e?n.filter(t=>String(t.id).startsWith(e)).slice(0,8):n.slice(0,8)}let r=t.toLowerCase();return n.map(e=>{let n=e.subject.toLowerCase(),i=0;if(n===r)i=100;else if(n.startsWith(r))i=80;else if(n.includes(r))i=60;else{let e=r.split(` `);i=e.filter(e=>n.includes(e)).length/e.length*40}return String(e.id).includes(t)&&(i=Math.max(i,50)),{...e,score:i}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,8)})(),te=e=>{a===e?(o(null),c(null),m(null)):(o(e),c(null),u(``),f(!1),m(null),E(e)?m(`brand`):T(e)&&m(`org`))},ne=e=>{o(e.id),c(e.subject),u(``),f(!1),m(null),E(e.id)?m(`brand`):T(e.id)&&m(`org`)},D=()=>{o(null),c(null),u(``),f(!1),m(null),b.current?.focus()},O=e.slice(0,5),k=e.length-5,A=$.filter(t=>!e.includes(t.id)&&!i.includes(t.id)).slice(0,4),j=zl.filter(t=>!e.includes(t.id)&&!i.includes(t.id));return(0,G.jsxs)(Kc,{children:[(0,G.jsxs)(qc,{children:[(0,G.jsx)(Jc,{children:`Merge tickets`}),(0,G.jsx)(Yc,{onClick:t,children:`×`})]}),(0,G.jsxs)(Xc,{children:[(0,G.jsxs)(Zc,{children:[(0,G.jsx)(Qc,{children:`Step 1 of 2`}),(0,G.jsxs)($c,{children:[(0,G.jsx)(el,{$active:!0}),(0,G.jsx)(el,{})]})]}),(0,G.jsx)(tl,{children:`Select destination ticket`}),(0,G.jsx)(nl,{children:`Source tickets`}),O.map(e=>{let t=Rl.find(t=>t.id===e);return t?(0,G.jsxs)(rl,{children:[(0,G.jsxs)(il,{children:[`#`,e]}),(0,G.jsx)(al,{children:t.subject})]},e):null}),k>0&&(0,G.jsxs)(ol,{children:[(0,G.jsxs)(sl,{ref:x,onClick:()=>{if(!h&&x.current){let e=x.current.getBoundingClientRect();y({top:e.top+e.height/2,left:e.left-12})}_(!h)},children:[`+`,k,` more`]}),h&&(0,G.jsxs)(cl,{style:{top:v.top,left:v.left,transform:`translate(-100%, -50%)`},children:[(0,G.jsx)(ll,{children:`Source tickets`}),(0,G.jsx)(ul,{children:e.slice(5).map(e=>{let t=Rl.find(t=>t.id===e);return t?(0,G.jsxs)(dl,{children:[(0,G.jsxs)(fl,{children:[`#`,e]}),(0,G.jsx)(pl,{children:t.subject})]},e):null})})]})]}),(0,G.jsx)(ml,{children:`Destination ticket* (required)`}),(0,G.jsx)(hl,{children:`Search for a specific ticket or select a suggested ticket`}),(0,G.jsxs)(gl,{children:[(0,G.jsx)(_l,{$error:p===`empty`||p===`brand`,onClick:()=>!a&&b.current?.focus(),children:w?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(vl,{children:[`#`,w.id]}),(0,G.jsx)(yl,{children:w.title||s}),(0,G.jsx)(bl,{onClick:D,children:`×`})]}):(0,G.jsx)(xl,{ref:b,type:`text`,value:l,onChange:e=>{u(e.target.value),f(e.target.value.trim().length>0)},onFocus:()=>f(!0),onBlur:()=>setTimeout(()=>f(!1),200),placeholder:``})}),d&&ee.length>0&&(0,G.jsx)(Sl,{children:ee.map(e=>(0,G.jsxs)(Cl,{onMouseDown:()=>ne(e),children:[(0,G.jsxs)(wl,{children:[`#`,e.id]}),e.subject]},e.id))}),p===`empty`&&(0,G.jsxs)(Tl,{children:[(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`10`,r:`8.5`,stroke:`#cc3340`,strokeWidth:`1.5`}),(0,G.jsx)(`path`,{d:`M10 6v5`,stroke:`#cc3340`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,G.jsx)(`circle`,{cx:`10`,cy:`14`,r:`1`,fill:`#cc3340`})]}),`Search for a ticket or select a suggested ticket`]}),p===`brand`&&(0,G.jsxs)(Tl,{children:[(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`10`,r:`8.5`,stroke:`#cc3340`,strokeWidth:`1.5`}),(0,G.jsx)(`path`,{d:`M10 6v5`,stroke:`#cc3340`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,G.jsx)(`circle`,{cx:`10`,cy:`14`,r:`1`,fill:`#cc3340`})]}),`Can't merge different brands`]}),p===`org`&&(0,G.jsxs)(El,{children:[(0,G.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,G.jsx)(`path`,{d:`M10 2L1 18h18L10 2z`,stroke:`#b35900`,strokeWidth:`1.5`,fill:`none`}),(0,G.jsx)(`path`,{d:`M10 8v4`,stroke:`#b35900`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,G.jsx)(`circle`,{cx:`10`,cy:`14.5`,r:`0.75`,fill:`#b35900`})]}),`These tickets belong to different organizations`]})]}),(0,G.jsxs)(Dl,{children:[A.length,` from `,A[0]?.requester||`requester`]}),(0,G.jsx)(Ol,{children:A.map(e=>(0,G.jsxs)(kl,{$active:a===e.id,onClick:()=>te(e.id),children:[a===e.id&&(0,G.jsx)(Al,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,G.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,stroke:`#1f73b7`,d:`M4 9l2.5 2.5 5-5`}),(0,G.jsx)(`circle`,{cx:`7.5`,cy:`8.5`,r:`7`,stroke:`#1f73b7`})]})}),(0,G.jsxs)(il,{children:[`#`,e.id]}),(0,G.jsxs)(Ml,{children:[(0,G.jsx)(Gc,{content:e.status,children:(0,G.jsx)(jl,{$color:Bl[e.status]})}),(0,G.jsx)(Nl,{children:e.title})]}),(0,G.jsxs)(Pl,{children:[e.requester,` • `,e.date]})]},e.id))}),(0,G.jsxs)(Dl,{children:[j.length,` recently viewed tickets`]}),(0,G.jsx)(Ol,{children:j.map(e=>(0,G.jsxs)(kl,{$active:a===e.id,onClick:()=>te(e.id),children:[a===e.id&&(0,G.jsx)(Al,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,G.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,stroke:`#1f73b7`,d:`M4 9l2.5 2.5 5-5`}),(0,G.jsx)(`circle`,{cx:`7.5`,cy:`8.5`,r:`7`,stroke:`#1f73b7`})]})}),(0,G.jsxs)(il,{children:[`#`,e.id]}),(0,G.jsxs)(Ml,{children:[(0,G.jsx)(Gc,{content:e.status,children:(0,G.jsx)(jl,{$color:Bl[e.status]})}),(0,G.jsx)(Nl,{children:e.title})]}),(0,G.jsxs)(Pl,{children:[e.requester,` • `,e.date]})]},e.id))})]}),(0,G.jsxs)(Fl,{children:[(0,G.jsx)(Il,{onClick:t,children:`Cancel`}),(0,G.jsx)(Ll,{onClick:()=>{if(!w){m(`empty`);return}p!==`brand`&&n({id:w.id,title:w.title||s})},children:`Next`})]})]})}var Hl=B.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`,Ul=B.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`,Wl=B.div`
  width: 220px;
  border-right: 1px solid #e9ebed;
  overflow-y: auto;
  padding: 16px;
  flex-shrink: 0;
`,Gl=B.label`
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 4px;
  margin-top: 16px;

  &:first-child {
    margin-top: 0;
  }
`,Kl=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 4px;
`,ql=B.span`
  font-size: 11px;
  color: #1f73b7;
  cursor: pointer;
`,Jl=B.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;

  &:hover {
    border-color: #c2c8cc;
  }
`,Yl=B.span`
  margin-left: auto;
  color: #68737d;
  font-size: 10px;
`,Xl=B.div`
  padding: 6px 8px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 13px;
  color: #68737d;
  min-height: 18px;
`,Zl=B.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
`,Ql=B.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #edf7ff;
  border: 1px solid #b1c9e8;
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 11px;
  color: #2f3941;
`,$l=B.span`
  cursor: pointer;
  color: #68737d;
  font-size: 10px;
`,eu=B.div`
  display: flex;
  gap: 12px;
`,tu=B.div`
  flex: 1;
`,nu=B.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1f73b7;
  flex-shrink: 0;
`,ru=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background: #f5f5f5;
  }
`,iu=B.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`,au=B.div`
  padding: 16px 0 0;
  flex-shrink: 0;
`,ou=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`,su=B.h1`
  font-size: 18px;
  font-weight: 500;
  color: #2f3941;
  margin: 0;
`,cu=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,lu=B.button`
  background: ${e=>e.$active?`#edf7ff`:`none`};
  border: ${e=>e.$active?`1px solid #b1c9e8`:`1px solid transparent`};
  border-radius: 4px;
  cursor: pointer;
  color: ${e=>e.$active?`#1f73b7`:`#68737d`};
  padding: 4px;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    color: ${e=>e.$active?`#1f73b7`:`#2f3941`};
  }
`,uu=B.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 50;
  min-width: 200px;
  padding: 4px 0;
`,du=B.div`
  padding: 10px 16px;
  font-size: 14px;
  color: ${e=>e.$red?`#cc3340`:`#2f3941`};
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`,fu=B.div`
  height: 1px;
  background: #e9ebed;
  margin: 4px 0;
`,pu=B.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`,mu=B.div`
  background: #fff;
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
`,hu=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  padding: 0 20px 12px;
  border-bottom: 1px solid #d8dcde;
  font-size: 12px;
  color: #68737d;
`,gu=B.span`
  color: #d8dcde;
`,_u=B.span`
  color: #1f73b7;
  cursor: pointer;
`,vu=B.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  border-bottom: 1px solid #d8dcde;
  font-size: 13px;
  color: #1f73b7;
  cursor: pointer;
`,yu=B.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`,bu=B.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,xu=B.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #87929d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;B.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;var Su=B.div`
  flex: 1;
`,Cu=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`,wu=B.span`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
`,Tu=B.span`
  font-size: 12px;
  color: #1f73b7;
  cursor: pointer;
`,Eu=B.span`
  font-size: 12px;
  color: #87929d;
`,Du=B.p`
  font-size: 14px;
  color: #2f3941;
  margin: 0;
  line-height: 1.4;
`;B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 14px;
  padding: 2px;
  align-self: flex-start;
`;var Ou=B.div`
  border-top: 1px solid #e9ebed;
  flex-shrink: 0;
`,ku=B.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  font-size: 13px;
  color: #2f3941;
`,Au=B.span`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`,ju=B.span`
  color: #68737d;
`,Mu=B.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,Nu=B.span`
  margin-left: auto;
  color: #1f73b7;
  font-weight: 600;
  cursor: pointer;
`,Pu=B.div`
  padding: 0 20px 12px;
  font-size: 14px;
  color: #2f3941;
  min-height: 40px;
`,Fu=B.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 20px;
  border-top: 1px solid #f3f4f6;
`,Iu=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #87929d;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #2f3941;
  }
`,Lu=B.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #228f67;
  position: absolute;
  bottom: 12px;
  right: 12px;
`,Ru=B.div`
  display: flex;
  flex-shrink: 0;
`,zu=B.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-left: 1px solid #e9ebed;
  flex-shrink: 0;
`,Bu=B.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`,Vu=B.div`
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  gap: 4px;
  border-left: 1px solid #e9ebed;
  flex-shrink: 0;
`,Hu=B.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 4px;
  background: ${e=>e.$active?`#e9ebed`:`transparent`};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$active?`#2f3941`:`#68737d`};

  &:hover {
    background: #e9ebed;
  }
`,Uu=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,Wu=B.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,Gu=B.span`
  background: #e9ebed;
  color: #2f3941;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
`,Ku=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  padding: 4px;
  display: flex;
  align-items: center;
`,qu=B.p`
  font-size: 12px;
  color: #68737d;
  margin: 0 0 12px;
  line-height: 1.4;
`,Ju=B.div`
  display: flex;
  flex-direction: column;
`,Yu=B.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`,Xu=B.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
  margin-top: 2px;
  flex-shrink: 0;
`,Zu=B.span`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background: #e35b51;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
  margin-top: 2px;
`,Qu=B.div`
  flex: 1;
  min-width: 0;
`,$u=B.div`
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 1px;
`,ed=B.div`
  font-size: 12px;
  color: #68737d;
  margin-bottom: 1px;
`,td=B.div`
  font-size: 11px;
  color: #87929d;
`,nd=B.p`
  font-size: 13px;
  color: #87929d;
  margin: 0;
`,rd=B.div`
  height: 1px;
  background: #e9ebed;
  margin: 16px 0;
`,id=B.div`
  border-top: 1px solid #e9ebed;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  flex-shrink: 0;
`,ad=B.span`
  font-size: 13px;
  color: #2f3941;
  font-weight: 400;
`,od=B.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #1f73b7;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`,sd=B.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #2f3941;
  margin-left: auto;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`,cd=B.div`
  border-top: 1px solid #d8dcde;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background: #fff;
  flex-shrink: 0;
`,ld=B.button`
  background: none;
  border: none;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`,ud=B.button`
  background: #2f3941;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    background: #49545c;
  }
`,dd=B.button`
  background: #49545c;
  color: #fff;
  border: none;
  border-left: 1px solid rgba(255,255,255,0.2);
  border-radius: 0 4px 4px 0;
  padding: 8px 8px;
  font-size: 13px;
  cursor: pointer;
  margin-left: -1px;

  &:hover {
    background: #5a656d;
  }
`,fd=B.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #d8dcde;
  flex-shrink: 0;
  font-size: 13px;
  color: #2f3941;
  gap: 16px;
`,pd=B.span`
  color: #68737d;
  cursor: pointer;

  &:hover {
    color: #2f3941;
  }
`,md=B.span`
  color: #2f3941;
`,hd=B.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,gd=B.span`
  background: #e35b51;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 3px;
`,_d=B.span`
  font-size: 13px;
  color: #2f3941;
`,vd=B.button`
  background: none;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 13px;
  color: #2f3941;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;

  &:hover {
    background: #f5f5f5;
  }
`,yd=[{id:22,title:`Refund that merch`,subtitle:`that merch`,date:`May 5, 2026, 14:02:30`},{id:21,title:`Refund all merch`,subtitle:`All`,date:`May 5, 2026, 14:01:55`},{id:20,title:`Refund my merch`,subtitle:`Get that refund`,date:`May 5, 2026, 14:01:38`},{id:19,title:`Refund the merch`,subtitle:`Refund the merch`,date:`May 5, 2026, 14:00:09`}],bd={23:{title:`Refund merch`,requester:`Rodrigo De Conceição`,status:`Open`},22:{title:`Refund that merch`,requester:`Rodrigo De Conceição`,status:`Open`},21:{title:`Refund all merch`,requester:`Rodrigo De Conceição`,status:`Open`},20:{title:`Refund my merch`,requester:`Rodrigo De Conceição`,status:`Open`},19:{title:`Refund the merch`,requester:`Rodrigo De Conceição`,status:`Open`},18:{title:`PDF test`,requester:`James Bond`,status:`Pending`},17:{title:`Refund on merch`,requester:`Rusty Admin`,status:`New`},16:{title:`PDF preview test`,requester:`W. Customer Wilson`,status:`New`},15:{title:`Checking in on Dinoco product`,requester:`Gus Gus`,status:`Pending`},14:{title:`Return order`,requester:`Gus Gus`,status:`New`},13:{title:`Refund issues`,requester:`W. Customer Wilson`,status:`Open`}};function xd({onMergeComplete:e,mergedTicketIds:t=[],activeTicketId:n}){let r=n||23,i=bd[r]||bd[23],a={id:r,title:i.title},[o,s]=(0,g.useState)([]),[c,l]=(0,g.useState)(!1),[u,d]=(0,g.useState)(!1),[f,p]=(0,g.useState)(!1),[m,h]=(0,g.useState)(null),[_,v]=(0,g.useState)(null),y=yd.filter(e=>!t.includes(e.id)),b=e=>{o.includes(e)?s(o.filter(t=>t!==e)):s([...o,e])};return(0,G.jsxs)(Hl,{children:[(0,G.jsxs)(fd,{children:[(0,G.jsx)(pd,{children:`Email (create)`}),(0,G.jsx)(md,{children:i.requester}),(0,G.jsxs)(hd,{children:[(0,G.jsx)(gd,{children:i.status}),(0,G.jsxs)(_d,{children:[`Ticket #`,r]})]}),(0,G.jsxs)(vd,{children:[`Next`,(0,G.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#2f3941`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M6 3l5 5-5 5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]}),(0,G.jsxs)(Ul,{children:[(0,G.jsxs)(Wl,{children:[(0,G.jsx)(Gl,{children:`Brand`}),(0,G.jsxs)(Jl,{children:[(0,G.jsx)(nu,{}),`Rusteze`,(0,G.jsx)(Yl,{children:`▾`})]}),(0,G.jsx)(Gl,{children:`Requester`}),(0,G.jsxs)(Jl,{children:[`Rodrigo De Conceição`,(0,G.jsx)(Yl,{children:`▾`})]}),(0,G.jsxs)(Kl,{children:[(0,G.jsx)(Gl,{style:{margin:0},children:`Assignee*`}),(0,G.jsx)(ql,{children:`take it`})]}),(0,G.jsxs)(Jl,{children:[`Support`,(0,G.jsx)(Yl,{children:`▾`})]}),(0,G.jsxs)(Kl,{children:[(0,G.jsx)(Gl,{style:{margin:0},children:`Followers`}),(0,G.jsx)(ql,{children:`follow`})]}),(0,G.jsx)(Xl,{}),(0,G.jsx)(Gl,{children:`Tags`}),(0,G.jsxs)(Zl,{children:[(0,G.jsxs)(Ql,{children:[`intent__billing__refund__request `,(0,G.jsx)($l,{children:`×`})]}),(0,G.jsxs)(Ql,{children:[`intent_confidence__high `,(0,G.jsx)($l,{children:`×`})]}),(0,G.jsxs)(Ql,{children:[`language__en `,(0,G.jsx)($l,{children:`×`})]}),(0,G.jsxs)(Ql,{children:[`language_confidence__high `,(0,G.jsx)($l,{children:`×`})]}),(0,G.jsxs)(Ql,{children:[`sentiment__neutral `,(0,G.jsx)($l,{children:`×`})]}),(0,G.jsxs)(Ql,{children:[`sentiment_confidence__high `,(0,G.jsx)($l,{children:`×`})]})]}),(0,G.jsxs)(eu,{style:{marginTop:16},children:[(0,G.jsxs)(tu,{children:[(0,G.jsx)(Gl,{style:{marginTop:0},children:`Type`}),(0,G.jsxs)(Jl,{children:[(0,G.jsx)(`span`,{style:{color:`#68737d`},children:`-`}),(0,G.jsx)(Yl,{children:`▾`})]})]}),(0,G.jsxs)(tu,{children:[(0,G.jsx)(Gl,{style:{marginTop:0},children:`Priority`}),(0,G.jsxs)(Jl,{children:[(0,G.jsx)(`span`,{style:{color:`#68737d`},children:`-`}),(0,G.jsx)(Yl,{children:`▾`})]})]})]}),(0,G.jsx)(Gl,{children:`Summary`}),(0,G.jsx)(Xl,{}),(0,G.jsx)(Gl,{children:`Summary agent ID`}),(0,G.jsx)(Xl,{}),(0,G.jsx)(Gl,{children:`Summary date and time`}),(0,G.jsx)(Xl,{}),(0,G.jsx)(Gl,{children:`Summary locale`}),(0,G.jsx)(Xl,{}),(0,G.jsx)(Gl,{children:`Intent ⓘ`}),(0,G.jsxs)(Jl,{children:[`Refund request`,(0,G.jsx)(Yl,{children:`▾`})]}),(0,G.jsx)(Gl,{children:`Intent confidence ⓘ`}),(0,G.jsxs)(Jl,{children:[`High`,(0,G.jsx)(Yl,{children:`▾`})]}),(0,G.jsx)(Gl,{children:`Language ⓘ`}),(0,G.jsxs)(Jl,{children:[`English`,(0,G.jsx)(Yl,{children:`▾`})]}),(0,G.jsx)(Gl,{children:`Language confidence ⓘ`}),(0,G.jsxs)(Jl,{children:[`High`,(0,G.jsx)(Yl,{children:`▾`})]}),(0,G.jsxs)(ru,{children:[(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z`,transform:`scale(0.8)`})}),`Apply macro`,(0,G.jsx)(Yl,{style:{marginLeft:`auto`},children:`▾`})]})]}),(0,G.jsxs)(iu,{children:[(0,G.jsxs)(au,{children:[(0,G.jsxs)(ou,{children:[(0,G.jsx)(su,{children:`Refund merch`}),(0,G.jsxs)(cu,{children:[(0,G.jsx)(lu,{$active:!0,children:(0,G.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,G.jsx)(`circle`,{cx:`9`,cy:`9`,r:`7`})})}),(0,G.jsx)(lu,{children:(0,G.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,G.jsx)(`circle`,{cx:`9`,cy:`9`,r:`7`})})}),(0,G.jsx)(lu,{children:(0,G.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,G.jsx)(`circle`,{cx:`9`,cy:`9`,r:`7`})})}),(0,G.jsxs)(lu,{onClick:()=>d(!u),children:[(0,G.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,fill:`none`,children:[(0,G.jsx)(`circle`,{cx:`9`,cy:`4`,r:`1.5`,fill:`currentColor`}),(0,G.jsx)(`circle`,{cx:`9`,cy:`9`,r:`1.5`,fill:`currentColor`}),(0,G.jsx)(`circle`,{cx:`9`,cy:`14`,r:`1.5`,fill:`currentColor`})]}),u&&(0,G.jsxs)(uu,{onClick:e=>e.stopPropagation(),children:[(0,G.jsx)(du,{children:`Create as macro`}),(0,G.jsx)(du,{onClick:()=>{d(!1),p(!0)},children:`Merge into another ticket`}),(0,G.jsx)(du,{children:`Print ticket`}),(0,G.jsx)(fu,{}),(0,G.jsx)(du,{$red:!0,children:`Suspend user`}),(0,G.jsx)(du,{$red:!0,children:`Mark as spam`}),(0,G.jsx)(fu,{}),(0,G.jsx)(du,{$red:!0,children:`Delete`})]})]})]})]}),(0,G.jsxs)(hu,{children:[(0,G.jsx)(`span`,{children:`Via web form`}),(0,G.jsx)(gu,{children:`|`}),(0,G.jsx)(`span`,{children:`Topic`}),(0,G.jsx)(_u,{children:`Refund request`}),(0,G.jsx)(gu,{children:`|`}),(0,G.jsx)(`span`,{children:`☺ Neutral`})]}),(0,G.jsxs)(vu,{children:[(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#1f73b7`,strokeWidth:`1.5`,children:(0,G.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6`})}),`View ticket summary`]})]}),(0,G.jsx)(yu,{children:(0,G.jsxs)(bu,{children:[(0,G.jsx)(xu,{children:(0,G.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,fill:`#c2c8cc`}),(0,G.jsx)(`circle`,{cx:`10`,cy:`8`,r:`3`,fill:`#fff`}),(0,G.jsx)(`path`,{d:`M4 16c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5`,fill:`#fff`})]})}),(0,G.jsxs)(Su,{children:[(0,G.jsxs)(Cu,{children:[(0,G.jsx)(wu,{children:`Rusty Admin`}),(0,G.jsx)(`span`,{style:{fontSize:`11px`,color:`#68737d`},children:`✧`}),(0,G.jsx)(Tu,{children:`Assign`}),(0,G.jsx)(`span`,{style:{fontSize:`12px`,color:`#68737d`},children:`·`}),(0,G.jsx)(Eu,{children:`May 05 14:03`})]}),(0,G.jsx)(Du,{children:`Yip`})]})]})}),(0,G.jsxs)(Ou,{children:[(0,G.jsxs)(ku,{children:[(0,G.jsxs)(Au,{children:[(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 20 20`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M4 10l6-6v4c6 0 8 3 8 8-2-3-4-4-8-4v4l-6-6z`,strokeLinejoin:`round`})}),`Public reply`,(0,G.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M4 6l4 4 4-4`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,G.jsx)(ju,{children:`To`}),(0,G.jsxs)(Mu,{children:[(0,G.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,G.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,fill:`#e35b51`}),(0,G.jsx)(`circle`,{cx:`8`,cy:`6`,r:`2`,fill:`#fff`}),(0,G.jsx)(`path`,{d:`M4 13c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5`,fill:`#fff`})]}),`Rodrigo De Conceição`,(0,G.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M11 5l-6 6M5 5l6 6`,strokeLinecap:`round`})})]}),(0,G.jsx)(Nu,{children:`CC`})]}),(0,G.jsx)(Pu,{children:`Hi there`}),(0,G.jsxs)(Fu,{children:[(0,G.jsx)(Iu,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5`}),(0,G.jsx)(`path`,{d:`M5 16h5c2.5 0 4.5-1.3 4.5-3.5S12.5 9 10 9`})]})}),(0,G.jsx)(Iu,{children:(0,G.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M5 16V4h4c2.2 0 4 1.3 4 3.5S11.2 11 9 11H5`,strokeWidth:`2`})})}),(0,G.jsx)(Iu,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`10`,r:`7`}),(0,G.jsx)(`circle`,{cx:`7.5`,cy:`8.5`,r:`1`,fill:`currentColor`,stroke:`none`}),(0,G.jsx)(`circle`,{cx:`12.5`,cy:`8.5`,r:`1`,fill:`currentColor`,stroke:`none`}),(0,G.jsx)(`path`,{d:`M7 12.5c1 1.5 5 1.5 6 0`})]})}),(0,G.jsx)(Iu,{children:(0,G.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M15 10l-5 7V10H5l5-7v7h5z`})})}),(0,G.jsx)(Iu,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M8 12l-2 2c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5c1-1 1-2.5 0-3.5`}),(0,G.jsx)(`path`,{d:`M12 8l2-2c1-1 1-2.5 0-3.5s-2.5-1-3.5 0l-5 5c-1 1-1 2.5 0 3.5`})]})}),(0,G.jsx)(Iu,{children:(0,G.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M12 2l-1.5 3.5L7 7l3.5 1.5L12 12l1.5-3.5L17 7l-3.5-1.5L12 2z`}),(0,G.jsx)(`path`,{d:`M4 13l2 2 8-8`})]})})]}),(0,G.jsx)(Lu,{style:{position:`relative`,bottom:`auto`,right:`auto`,marginLeft:`auto`,marginRight:12,marginBottom:8}})]})]}),(0,G.jsxs)(Ru,{children:[(0,G.jsxs)(zu,{children:[(0,G.jsxs)(Bu,{children:[(0,G.jsxs)(Uu,{children:[(0,G.jsxs)(Wu,{children:[`Merge suggestions`,y.length>0&&(0,G.jsx)(Gu,{children:y.length})]}),(0,G.jsx)(Ku,{children:(0,G.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M4 10l4-4 4 4`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),y.length>0?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(qu,{children:`Review recent unresolved tickets from the same requester to merge into this ticket.`}),(0,G.jsx)(Ju,{children:y.map(e=>(0,G.jsxs)(Yu,{children:[(0,G.jsx)(Xu,{type:`checkbox`,checked:o.includes(e.id),onChange:()=>b(e.id)}),(0,G.jsx)(Zu,{children:`O`}),(0,G.jsxs)(Qu,{children:[(0,G.jsx)($u,{children:e.title}),(0,G.jsx)(ed,{children:e.subtitle}),(0,G.jsx)(td,{children:e.date})]})]},e.id))})]}):(0,G.jsx)(nd,{children:`No suggestions available`}),(0,G.jsx)(rd,{}),(0,G.jsxs)(Uu,{children:[(0,G.jsx)(Wu,{children:`Similar resolved tickets`}),(0,G.jsx)(Ku,{children:(0,G.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#68737d`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M4 10l4-4 4 4`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),(0,G.jsx)(nd,{children:`No suggestions available`})]}),o.length>0&&(0,G.jsxs)(id,{children:[(0,G.jsxs)(ad,{children:[o.length,` `,o.length===1?`ticket`:`tickets`]}),(0,G.jsxs)(od,{onClick:()=>{l(!0)},children:[(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#1f73b7`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M8 2v10`,strokeLinecap:`round`}),(0,G.jsx)(`path`,{d:`M5.5 4.5L8 2l2.5 2.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,G.jsx)(`path`,{d:`M8 12c-2 0-3 1-4.5 3`,strokeLinecap:`round`}),(0,G.jsx)(`path`,{d:`M8 12c2 0 3 1 4.5 3`,strokeLinecap:`round`})]}),`Merge`]}),(0,G.jsx)(sd,{onClick:()=>{s([])},children:`Cancel`})]})]}),(0,G.jsxs)(Vu,{children:[(0,G.jsx)(Hu,{children:(0,G.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`6`,r:`3`}),(0,G.jsx)(`path`,{d:`M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6`})]})}),(0,G.jsx)(Hu,{children:(0,G.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`14`,rx:`2`}),(0,G.jsx)(`path`,{d:`M7 7h6M7 10h6M7 13h4`})]})}),(0,G.jsx)(Hu,{children:(0,G.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M3 5c0-1 1-2 2-2h2a2 2 0 012 1.5l.5 1.5h5a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5z`})})}),(0,G.jsx)(Hu,{$active:!0,children:(0,G.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`path`,{d:`M10 3v11`,strokeLinecap:`round`}),(0,G.jsx)(`path`,{d:`M7 5.5L10 3l3 2.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,G.jsx)(`path`,{d:`M10 14c-2.5 0-3.5 1-5 3`,strokeLinecap:`round`}),(0,G.jsx)(`path`,{d:`M10 14c2.5 0 3.5 1 5 3`,strokeLinecap:`round`})]})}),(0,G.jsx)(Hu,{children:(0,G.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`10`,r:`7`}),(0,G.jsx)(`path`,{d:`M7 10l2 2 4-4`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,G.jsx)(Hu,{children:(0,G.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,G.jsx)(`rect`,{x:`3`,y:`3`,width:`5`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`12`,y:`3`,width:`5`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`3`,y:`12`,width:`5`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`12`,y:`12`,width:`5`,height:`5`,rx:`1`})]})}),(0,G.jsx)(Hu,{style:{marginTop:`auto`},children:(0,G.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M10 3v14M3 10h14`,strokeLinecap:`round`})})})]})]})]}),(0,G.jsxs)(cd,{children:[(0,G.jsxs)(ld,{children:[`Close tab`,(0,G.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#2f3941`,strokeWidth:`1.5`,children:(0,G.jsx)(`path`,{d:`M4 6l4 4 4-4`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,G.jsx)(ud,{children:`Submit as Open`}),(0,G.jsx)(dd,{children:(0,G.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 16 16`,fill:`none`,stroke:`#fff`,strokeWidth:`2`,children:(0,G.jsx)(`path`,{d:`M4 6l4 4 4-4`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]}),c&&(0,G.jsx)(Eo,{sourceTickets:o,destinationTicket:a,onClose:()=>{l(!1)},onMerge:()=>{l(!1),e(o,!1),s([])},hideStepper:!0}),f&&!m&&(0,G.jsx)(pu,{onClick:()=>p(!1),children:(0,G.jsx)(mu,{onClick:e=>e.stopPropagation(),children:(0,G.jsx)(Vl,{sourceTickets:[a.id],onBack:()=>p(!1),onNext:e=>h(e),initialDestination:_,mergedTicketIds:t})})}),f&&m&&(0,G.jsx)(Eo,{sourceTickets:[a.id],destinationTicket:m,onClose:()=>{v(m),h(null)},onDismiss:()=>{p(!1),h(null),v(null)},onMerge:()=>{p(!1),h(null),v(null),e([a.id],!0)}})]})}var Sd=Hn`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Cd=B.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;
  animation: ${Sd} 0.2s ease-out;
`,wd=B.div`
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  min-width: 260px;
`,Td=B.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,Ed=B.span`
  font-size: 14px;
  color: #038153;
  font-weight: 600;
  flex: 1;
`,Dd=B.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 16px;
  padding: 0;
  margin-left: 12px;

  &:hover {
    color: #2f3941;
  }
`;function Od({ticketCount:e,onClose:t}){return(0,G.jsx)(Cd,{children:(0,G.jsxs)(wd,{children:[(0,G.jsx)(Td,{children:(0,G.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`#038153`,strokeWidth:`1.5`}),(0,G.jsx)(`path`,{d:`M6 10l3 3 5-5`,stroke:`#038153`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,G.jsx)(Ed,{children:e>1?`Tickets were successfully merged`:`Ticket was successfully merged`}),(0,G.jsx)(Dd,{onClick:t,children:`×`})]})})}var kd=B.header`
  height: 48px;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  flex-shrink: 0;
`,Ad=B.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
`,jd=B.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #2f3941;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,Md=B.svg`
  width: 12px;
  height: 12px;
`,Nd=B.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${e=>e.$active?`#2f3941`:`transparent`};
  border: 1.5px solid ${e=>e.$active?`#2f3941`:`#87929d`};
  border-radius: 100px;
  padding: 6px 12px;
  margin-left: 8px;
  cursor: pointer;
`,Pd=B.span`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Fd=B.span`
  color: ${e=>e.$active?`#fff`:`#2f3941`};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.2;
`,Id=B.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #87929d;
`,Ld=B.button`
  background: none;
  border: none;
  color: ${e=>e.$active?`#87929d`:`#68737d`};
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;

  &:hover {
    color: ${e=>e.$active?`#fff`:`#2f3941`};
  }
`,Rd=B.button`
  background: none;
  border: none;
  color: #68737d;
  font-size: 18px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;

  &:hover {
    color: #2f3941;
  }
`,zd=B.div`
  flex: 1;
`,Bd=B.div`
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 220px;
`,Vd=B.span`
  color: #87929d;
  font-size: 13px;
`,Hd=B.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`,Ud=B.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  background: linear-gradient(135deg, #a855f7, #6366f1);
`,Wd={23:`Refund merch`,22:`Refund that merch`,21:`Refund all merch`,20:`Refund my merch`,19:`Refund the merch`,18:`PDF test`,17:`Refund on merch`,16:`PDF preview test`,15:`Checking in on Dinoco product`,14:`Return order`,13:`Refund issues`};function Gd({onTabClose:e,screen:t,onTabClick:n,tabOpen:r,activeTicket:i}){let a=t===`ticket`,o=i?Wd[i]||`Ticket`:`Refund merch`;return(0,G.jsxs)(kd,{children:[(0,G.jsxs)(Ad,{viewBox:`0 0 26 26`,fill:`none`,children:[(0,G.jsx)(`path`,{d:`M12.7 0.5H0.5v12.2L12.7 0.5z`,fill:`#2f3941`}),(0,G.jsx)(`path`,{d:`M12.7 25.5V13.3L0.5 25.5h12.2z`,fill:`#2f3941`}),(0,G.jsx)(`path`,{d:`M13.3 25.5h12.2V13.3L13.3 25.5z`,fill:`#2f3941`}),(0,G.jsx)(`path`,{d:`M13.3 0.5v12.2l12.2-12.2H13.3z`,fill:`#2f3941`})]}),(0,G.jsxs)(jd,{children:[`Support`,(0,G.jsx)(Md,{viewBox:`0 0 12 12`,fill:`none`,children:(0,G.jsx)(`path`,{d:`M3 4.5l3 3 3-3`,stroke:`#2f3941`,strokeWidth:`1.5`,strokeLinecap:`round`})})]}),r&&(0,G.jsxs)(Nd,{$active:a,onClick:n,children:[(0,G.jsx)(Pd,{children:(0,G.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`none`,stroke:a?`#87929d`:`#68737d`,strokeWidth:`1.5`,children:[(0,G.jsx)(`circle`,{cx:`8`,cy:`8`,r:`6`}),(0,G.jsx)(`path`,{d:`M8 5v3l2 2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,G.jsxs)(Fd,{$active:a,children:[o,(0,G.jsx)(`br`,{}),`#`,i||23]}),(0,G.jsx)(Id,{}),(0,G.jsx)(Ld,{$active:a,onClick:t=>{t.stopPropagation(),e()},children:`×`})]}),(0,G.jsx)(Rd,{children:`+`}),(0,G.jsx)(zd,{}),(0,G.jsxs)(Bd,{children:[(0,G.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`#87929d`,children:(0,G.jsx)(`path`,{d:`M6.5 1a5.5 5.5 0 014.38 8.82l3.65 3.66a.75.75 0 01-1.06 1.06l-3.66-3.65A5.5 5.5 0 116.5 1zm0 1.5a4 4 0 100 8 4 4 0 000-8z`})}),(0,G.jsx)(Vd,{children:`Search admin center`})]}),(0,G.jsx)(Hd,{children:(0,G.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,G.jsx)(`path`,{d:`M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z`,fill:`#1f73b7`}),(0,G.jsx)(`path`,{d:`M12.5 9.5l.75 1.5 1.5.75-1.5.75-.75 1.5-.75-1.5-1.5-.75 1.5-.75z`,fill:`#1f73b7`})]})}),(0,G.jsx)(Hd,{children:(0,G.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 16 16`,fill:`#68737d`,children:(0,G.jsx)(`path`,{d:`M1 1h6v6H1V1zm8 0h6v6H9V1zM1 9h6v6H1V9zm8 0h6v6H9V9z`})})}),(0,G.jsx)(Ud,{})]})}var Kd=B.nav`
  width: 56px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
  gap: 2px;
  flex-shrink: 0;
  height: 100%;
`,qd=B.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${e=>e.$active?`#2f3941`:`transparent`};

  &:hover {
    background: ${e=>e.$active?`#2f3941`:`#ebebeb`};
  }

  svg {
    fill: ${e=>e.$active?`#fff`:`#68737d`};
  }
`,Jd=B.div`
  margin-top: auto;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;function Yd({screen:e,onViewsClick:t}){return(0,G.jsxs)(Kd,{children:[(0,G.jsx)(qd,{children:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,children:(0,G.jsx)(`path`,{d:`M10 2.5L2 9h3v7h4v-4h2v4h4V9h3L10 2.5z`})})}),(0,G.jsx)(qd,{$active:e===`views`,onClick:t,children:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,children:(0,G.jsx)(`path`,{d:`M4 3h12a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 3v-3H4a2 2 0 01-2-2V5a2 2 0 012-2z`})})}),(0,G.jsx)(qd,{children:(0,G.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,children:[(0,G.jsx)(`circle`,{cx:`7`,cy:`6`,r:`3`}),(0,G.jsx)(`path`,{d:`M1 16c0-3.3 2.7-6 6-6s6 2.7 6 6H1z`}),(0,G.jsx)(`circle`,{cx:`14`,cy:`6.5`,r:`2.5`}),(0,G.jsx)(`path`,{d:`M19 16c0-2.8-2.2-5-5-5-.8 0-1.5.2-2.2.5C13.2 12.8 14 14.3 14 16h5z`})]})}),(0,G.jsx)(qd,{children:(0,G.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,children:(0,G.jsx)(`path`,{d:`M3 17V4h6v3h5v10H3zm2-11v2h2V6H5zm0 3v2h2V9H5zm0 3v2h2v-2H5zm4 0v2h2v-2H9zm0-3v2h2V9H9z`})})}),(0,G.jsx)(qd,{children:(0,G.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,children:[(0,G.jsx)(`rect`,{x:`2`,y:`11`,width:`3`,height:`6`}),(0,G.jsx)(`rect`,{x:`7`,y:`7`,width:`3`,height:`10`}),(0,G.jsx)(`rect`,{x:`12`,y:`3`,width:`3`,height:`14`})]})}),(0,G.jsx)(qd,{children:(0,G.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,children:[(0,G.jsx)(`circle`,{cx:`10`,cy:`6`,r:`3.5`}),(0,G.jsx)(`path`,{d:`M3 17c0-3.9 3.1-7 7-7s7 3.1 7 7H3z`})]})}),(0,G.jsx)(qd,{children:(0,G.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 18 18`,children:[(0,G.jsx)(`rect`,{x:`1`,y:`1`,width:`5`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`8`,y:`1`,width:`5`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`15`,y:`1`,width:`2`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`1`,y:`8`,width:`5`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`8`,y:`8`,width:`5`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`15`,y:`8`,width:`2`,height:`5`,rx:`1`}),(0,G.jsx)(`rect`,{x:`1`,y:`15`,width:`5`,height:`2`,rx:`1`}),(0,G.jsx)(`rect`,{x:`8`,y:`15`,width:`5`,height:`2`,rx:`1`}),(0,G.jsx)(`rect`,{x:`15`,y:`15`,width:`2`,height:`2`,rx:`1`})]})}),(0,G.jsx)(Jd,{})]})}var Xd=B.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`,Zd=B.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  background: #f7f7f7;
`,Qd=B.main`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 24px;
  background: #fff;
  box-shadow: -2px -2px 8px rgba(0, 0, 0, 0.04);
  position: relative;
`;function $d({children:e,onTabClose:t,screen:n,onTabClick:r,onViewsClick:i,tabOpen:a,activeTicket:o}){return(0,G.jsxs)(Xd,{children:[(0,G.jsx)(Gd,{onTabClose:t,screen:n,onTabClick:r,tabOpen:a,activeTicket:o}),(0,G.jsxs)(Zd,{children:[(0,G.jsx)(Yd,{screen:n,onViewsClick:i}),(0,G.jsx)(Qd,{children:e})]})]})}function ef(){let[e,t]=(0,g.useState)(`views`),[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(null),[o,s]=(0,g.useState)([]),[c,l]=(0,g.useState)([]),[u,d]=(0,g.useState)(!1),[f,p]=(0,g.useState)(0),[m,h]=(0,g.useState)([]),[_,v]=(0,g.useState)(!1),[y,b]=(0,g.useState)(null),[x,S]=(0,g.useState)(null),C=()=>{v(!0)},w=e=>{b(e)},T=()=>{p(o.length),l(e=>[...e,...o]),h(e=>[...e,...o]),s([]),v(!1),b(null),S(null),d(!0)},E=()=>{y?(S(y),b(null)):(v(!1),S(null))};return(0,g.useEffect)(()=>{if(u){let e=setTimeout(()=>d(!1),5e3);return()=>clearTimeout(e)}},[u]),(0,G.jsxs)(sr,{theme:or,children:[(0,G.jsxs)($d,{onTabClose:()=>{r(!1),t(`views`)},screen:e,onTabClick:()=>t(`ticket`),onViewsClick:()=>t(`views`),tabOpen:n,activeTicket:i,children:[e===`views`&&(0,G.jsx)(Xa,{selectedTickets:o,setSelectedTickets:s,mergedTickets:c,onMerge:C,onTicketClick:e=>{t(`ticket`),r(!0),a(e)}}),e===`ticket`&&(0,G.jsx)(xd,{activeTicketId:i,onMergeComplete:(e,n)=>{h(t=>[...t,...e]),l(t=>[...t,...e]),p(e.length),d(!0),n&&(r(!1),a(null),t(`views`))},mergedTicketIds:m}),u&&(0,G.jsx)(Od,{ticketCount:f,onClose:()=>d(!1)})]}),_&&!y&&(0,G.jsx)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,background:`rgba(0,0,0,0.4)`,zIndex:100,display:`flex`,justifyContent:`flex-end`},onClick:E,children:(0,G.jsx)(`div`,{style:{width:380,height:`100%`,background:`#fff`,boxShadow:`-4px 0 16px rgba(0,0,0,0.1)`},onClick:e=>e.stopPropagation(),children:(0,G.jsx)(Vl,{sourceTickets:o,onBack:E,onNext:w,initialDestination:x})})}),_&&y&&(0,G.jsx)(Eo,{sourceTickets:o,destinationTicket:y,onClose:()=>{S(y),b(null)},onDismiss:()=>{v(!1),b(null),S(null)},onMerge:T})]})}(0,_.createRoot)(document.getElementById(`root`)).render((0,G.jsx)(g.StrictMode,{children:(0,G.jsx)(ef,{})}));