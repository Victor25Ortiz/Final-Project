(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function _i(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?yu(r):_i(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ge(t))return t;if(ue(t))return t}}const mu=/;(?![^(]*\))/g,gu=/:([^]+)/,_u=/\/\*.*?\*\//gs;function yu(t){const e={};return t.replace(_u,"").split(mu).forEach(n=>{if(n){const r=n.split(gu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function yi(t){let e="";if(ge(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=yi(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vu=gi(bu);function ja(t){return!!t||t===""}const Or=t=>ge(t)?t:t==null?"":H(t)||ue(t)&&(t.toString===Ka||!V(t.toString))?JSON.stringify(t,Va,2):String(t),Va=(t,e)=>e&&e.__v_isRef?Va(t,e.value):rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Wa(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!H(e)&&!qa(e)?String(e):e,ce={},nn=[],Ke=()=>{},Eu=()=>!1,wu=/^on[^a-z]/,zr=t=>wu.test(t),bi=t=>t.startsWith("onUpdate:"),we=Object.assign,vi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iu=Object.prototype.hasOwnProperty,X=(t,e)=>Iu.call(t,e),H=Array.isArray,rn=t=>Kr(t)==="[object Map]",Wa=t=>Kr(t)==="[object Set]",V=t=>typeof t=="function",ge=t=>typeof t=="string",Ei=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",za=t=>ue(t)&&V(t.then)&&V(t.catch),Ka=Object.prototype.toString,Kr=t=>Ka.call(t),Tu=t=>Kr(t).slice(8,-1),qa=t=>Kr(t)==="[object Object]",wi=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gr=gi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Su=/-(\w)/g,it=qr(t=>t.replace(Su,(e,n)=>n?n.toUpperCase():"")),Ru=/\B([A-Z])/g,vn=qr(t=>t.replace(Ru,"-$1").toLowerCase()),Jr=qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),gs=qr(t=>t?`on${Jr(t)}`:""),Bn=(t,e)=>!Object.is(t,e),_r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Us=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Cu=t=>{const e=ge(t)?Number(t):NaN;return isNaN(e)?t:e};let lo;const Au=()=>lo||(lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class Ou{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Pu(t,e=je){e&&e.active&&e.effects.push(t)}function ku(){return je}const Ii=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ja=t=>(t.w&Pt)>0,Ga=t=>(t.n&Pt)>0,Nu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},xu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ja(s)&&!Ga(s)?s.delete(t):e[n++]=s,s.w&=~Pt,s.n&=~Pt}e.length=n}},Fs=new WeakMap;let kn=0,Pt=1;const Bs=30;let ze;const Vt=Symbol(""),$s=Symbol("");class Ti{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pu(this,r)}run(){if(!this.active)return this.fn();let e=ze,n=Rt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ze,ze=this,Rt=!0,Pt=1<<++kn,kn<=Bs?Nu(this):uo(this),this.fn()}finally{kn<=Bs&&xu(this),Pt=1<<--kn,ze=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ze===this?this.deferStop=!0:this.active&&(uo(this),this.onStop&&this.onStop(),this.active=!1)}}function uo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rt=!0;const Ya=[];function En(){Ya.push(Rt),Rt=!1}function wn(){const t=Ya.pop();Rt=t===void 0?!0:t}function Ae(t,e,n){if(Rt&&ze){let r=Fs.get(t);r||Fs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ii()),Xa(s)}}function Xa(t,e){let n=!1;kn<=Bs?Ga(t)||(t.n|=Pt,n=!Ja(t)):n=!t.has(ze),n&&(t.add(ze),ze.deps.push(t))}function dt(t,e,n,r,s,i){const o=Fs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(r);o.forEach((l,f)=>{(f==="length"||f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?wi(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),rn(t)&&a.push(o.get($s)));break;case"delete":H(t)||(a.push(o.get(Vt)),rn(t)&&a.push(o.get($s)));break;case"set":rn(t)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&Hs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Hs(Ii(c))}}function Hs(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&fo(r);for(const r of n)r.computed||fo(r)}function fo(t,e){(t!==ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Du=gi("__proto__,__v_isRef,__isVue"),Qa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ei)),Lu=Si(),Mu=Si(!1,!0),Uu=Si(!0),ho=Fu();function Fu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Z(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){En();const r=Z(this)[e].apply(this,n);return wn(),r}}),t}function Bu(t){const e=Z(this);return Ae(e,"has",t),e.hasOwnProperty(t)}function Si(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?tf:rc:e?nc:tc).get(r))return r;const o=H(r);if(!t){if(o&&X(ho,s))return Reflect.get(ho,s,i);if(s==="hasOwnProperty")return Bu}const a=Reflect.get(r,s,i);return(Ei(s)?Qa.has(s):Du(s))||(t||Ae(r,"get",s),e)?a:ve(a)?o&&wi(s)?a:a.value:ue(a)?t?sc(a):Qn(a):a}}const $u=Za(),Hu=Za(!0);function Za(t=!1){return function(n,r,s,i){let o=n[r];if(dn(o)&&ve(o)&&!ve(s))return!1;if(!t&&(!kr(s)&&!dn(s)&&(o=Z(o),s=Z(s)),!H(n)&&ve(o)&&!ve(s)))return o.value=s,!0;const a=H(n)&&wi(r)?Number(r)<n.length:X(n,r),c=Reflect.set(n,r,s,i);return n===Z(i)&&(a?Bn(s,o)&&dt(n,"set",r,s):dt(n,"add",r,s)),c}}function ju(t,e){const n=X(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&dt(t,"delete",e,void 0),r}function Vu(t,e){const n=Reflect.has(t,e);return(!Ei(e)||!Qa.has(e))&&Ae(t,"has",e),n}function Wu(t){return Ae(t,"iterate",H(t)?"length":Vt),Reflect.ownKeys(t)}const ec={get:Lu,set:$u,deleteProperty:ju,has:Vu,ownKeys:Wu},zu={get:Uu,set(t,e){return!0},deleteProperty(t,e){return!0}},Ku=we({},ec,{get:Mu,set:Hu}),Ri=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function lr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Z(t),i=Z(e);n||(e!==i&&Ae(s,"get",e),Ae(s,"get",i));const{has:o}=Gr(s),a=r?Ri:n?Oi:$n;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ur(t,e=!1){const n=this.__v_raw,r=Z(n),s=Z(t);return e||(t!==s&&Ae(r,"has",t),Ae(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function fr(t,e=!1){return t=t.__v_raw,!e&&Ae(Z(t),"iterate",Vt),Reflect.get(t,"size",t)}function po(t){t=Z(t);const e=Z(this);return Gr(e).has.call(e,t)||(e.add(t),dt(e,"add",t,t)),this}function mo(t,e){e=Z(e);const n=Z(this),{has:r,get:s}=Gr(n);let i=r.call(n,t);i||(t=Z(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Bn(e,o)&&dt(n,"set",t,e):dt(n,"add",t,e),this}function go(t){const e=Z(this),{has:n,get:r}=Gr(e);let s=n.call(e,t);s||(t=Z(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&dt(e,"delete",t,void 0),i}function _o(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&dt(t,"clear",void 0,void 0),n}function dr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Z(o),c=e?Ri:t?Oi:$n;return!t&&Ae(a,"iterate",Vt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function hr(t,e,n){return function(...r){const s=this.__v_raw,i=Z(s),o=rn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ri:e?Oi:$n;return!e&&Ae(i,"iterate",c?$s:Vt),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:a?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:this}}function qu(){const t={get(i){return lr(this,i)},get size(){return fr(this)},has:ur,add:po,set:mo,delete:go,clear:_o,forEach:dr(!1,!1)},e={get(i){return lr(this,i,!1,!0)},get size(){return fr(this)},has:ur,add:po,set:mo,delete:go,clear:_o,forEach:dr(!1,!0)},n={get(i){return lr(this,i,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:dr(!0,!1)},r={get(i){return lr(this,i,!0,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hr(i,!1,!1),n[i]=hr(i,!0,!1),e[i]=hr(i,!1,!0),r[i]=hr(i,!0,!0)}),[t,n,e,r]}const[Ju,Gu,Yu,Xu]=qu();function Ci(t,e){const n=e?t?Xu:Yu:t?Gu:Ju;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const Qu={get:Ci(!1,!1)},Zu={get:Ci(!1,!0)},ef={get:Ci(!0,!1)},tc=new WeakMap,nc=new WeakMap,rc=new WeakMap,tf=new WeakMap;function nf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rf(t){return t.__v_skip||!Object.isExtensible(t)?0:nf(Tu(t))}function Qn(t){return dn(t)?t:Ai(t,!1,ec,Qu,tc)}function sf(t){return Ai(t,!1,Ku,Zu,nc)}function sc(t){return Ai(t,!0,zu,ef,rc)}function Ai(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=rf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function sn(t){return dn(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function kr(t){return!!(t&&t.__v_isShallow)}function ic(t){return sn(t)||dn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function oc(t){return Pr(t,"__v_skip",!0),t}const $n=t=>ue(t)?Qn(t):t,Oi=t=>ue(t)?sc(t):t;function ac(t){Rt&&ze&&(t=Z(t),Xa(t.dep||(t.dep=Ii())))}function cc(t,e){t=Z(t);const n=t.dep;n&&Hs(n)}function ve(t){return!!(t&&t.__v_isRef===!0)}function Ge(t){return lc(t,!1)}function of(t){return lc(t,!0)}function lc(t,e){return ve(t)?t:new af(t,e)}class af{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:$n(e)}get value(){return ac(this),this._value}set value(e){const n=this.__v_isShallow||kr(e)||dn(e);e=n?e:Z(e),Bn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$n(e),cc(this))}}function Le(t){return ve(t)?t.value:t}const cf={get:(t,e,n)=>Le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ve(s)&&!ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function uc(t){return sn(t)?t:new Proxy(t,cf)}var fc;class lf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[fc]=!1,this._dirty=!0,this.effect=new Ti(e,()=>{this._dirty||(this._dirty=!0,cc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Z(this);return ac(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}fc="__v_isReadonly";function uf(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=Ke):(r=t.get,s=t.set),new lf(r,s,i||!s,n)}function Ct(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Zn(i,e,n)}return s}function Ue(t,e,n,r){if(V(t)){const i=Ct(t,e,n,r);return i&&za(i)&&i.catch(o=>{Zn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ue(t[i],e,n,r));return s}function Zn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ct(c,null,10,[t,o,a]);return}}ff(t,n,s,r)}function ff(t,e,n,r=!0){console.error(t)}let Hn=!1,js=!1;const be=[];let et=0;const on=[];let ct=null,$t=0;const dc=Promise.resolve();let Pi=null;function hc(t){const e=Pi||dc;return t?e.then(this?t.bind(this):t):e}function df(t){let e=et+1,n=be.length;for(;e<n;){const r=e+n>>>1;jn(be[r])<t?e=r+1:n=r}return e}function ki(t){(!be.length||!be.includes(t,Hn&&t.allowRecurse?et+1:et))&&(t.id==null?be.push(t):be.splice(df(t.id),0,t),pc())}function pc(){!Hn&&!js&&(js=!0,Pi=dc.then(_c))}function hf(t){const e=be.indexOf(t);e>et&&be.splice(e,1)}function mc(t){H(t)?on.push(...t):(!ct||!ct.includes(t,t.allowRecurse?$t+1:$t))&&on.push(t),pc()}function yo(t,e=Hn?et+1:0){for(;e<be.length;e++){const n=be[e];n&&n.pre&&(be.splice(e,1),e--,n())}}function gc(t){if(on.length){const e=[...new Set(on)];if(on.length=0,ct){ct.push(...e);return}for(ct=e,ct.sort((n,r)=>jn(n)-jn(r)),$t=0;$t<ct.length;$t++)ct[$t]();ct=null,$t=0}}const jn=t=>t.id==null?1/0:t.id,pf=(t,e)=>{const n=jn(t)-jn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _c(t){js=!1,Hn=!0,be.sort(pf);const e=Ke;try{for(et=0;et<be.length;et++){const n=be[et];n&&n.active!==!1&&Ct(n,null,14)}}finally{et=0,be.length=0,gc(),Hn=!1,Pi=null,(be.length||on.length)&&_c()}}function mf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:h}=r[f]||ce;h&&(s=n.map(g=>ge(g)?g.trim():g)),u&&(s=n.map(Us))}let a,c=r[a=gs(e)]||r[a=gs(it(e))];!c&&i&&(c=r[a=gs(vn(e))]),c&&Ue(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ue(l,t,6,s)}}function yc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const f=yc(l,e,!0);f&&(a=!0,we(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):we(o,i),ue(t)&&r.set(t,o),o)}function Yr(t,e){return!t||!zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,vn(e))||X(t,e))}let Ne=null,Xr=null;function Nr(t){const e=Ne;return Ne=t,Xr=t&&t.type.__scopeId||null,e}function Qr(t){Xr=t}function Zr(){Xr=null}function Wt(t,e=Ne,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oo(-1);const i=Nr(e);let o;try{o=t(...s)}finally{Nr(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _s(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:u,data:h,setupState:g,ctx:m,inheritAttrs:y}=t;let k,R;const I=Nr(t);try{if(n.shapeFlag&4){const F=s||r;k=We(f.call(F,F,u,i,g,h,m)),R=c}else{const F=e;k=We(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),R=e.props?c:_f(c)}}catch(F){Ln.length=0,Zn(F,t,1),k=he(xe)}let T=k;if(R&&y!==!1){const F=Object.keys(R),{shapeFlag:W}=T;F.length&&W&7&&(o&&F.some(bi)&&(R=yf(R,o)),T=kt(T,R))}return n.dirs&&(T=kt(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),k=T,Nr(I),k}function gf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Lr(r)){if(r.type!==xe||r.children==="v-if"){if(e)return;e=r}}else return}return e}const _f=t=>{let e;for(const n in t)(n==="class"||n==="style"||zr(n))&&((e||(e={}))[n]=t[n]);return e},yf=(t,e)=>{const n={};for(const r in t)(!bi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?bo(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==r[h]&&!Yr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?bo(r,o,l):!0:!!o;return!1}function bo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function Ni({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const vf=t=>t.__isSuspense,Ef={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?If(e,n,r,s,i,o,a,c,l):Tf(t,e,n,r,s,o,a,c,l)},hydrate:Sf,create:xi,normalize:Rf},wf=Ef;function Vn(t,e){const n=t.props&&t.props[e];V(n)&&n()}function If(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:f}}=c,u=f("div"),h=t.suspense=xi(t,s,r,e,u,n,i,o,a,c);l(null,h.pendingBranch=t.ssContent,u,null,r,h,i,o),h.deps>0?(Vn(t,"onPending"),Vn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),an(h,t.ssFallback)):h.resolve()}function Tf(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const h=e.ssContent,g=e.ssFallback,{activeBranch:m,pendingBranch:y,isInFallback:k,isHydrating:R}=u;if(y)u.pendingBranch=h,tt(h,y)?(c(y,h,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():k&&(c(m,g,n,r,s,null,i,o,a),an(u,g))):(u.pendingId++,R?(u.isHydrating=!1,u.activeBranch=y):l(y,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),k?(c(null,h,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():(c(m,g,n,r,s,null,i,o,a),an(u,g))):m&&tt(h,m)?(c(m,h,n,r,s,u,i,o,a),u.resolve(!0)):(c(null,h,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0&&u.resolve()));else if(m&&tt(h,m))c(m,h,n,r,s,u,i,o,a),an(u,h);else if(Vn(e,"onPending"),u.pendingBranch=h,u.pendingId++,c(null,h,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0)u.resolve();else{const{timeout:I,pendingId:T}=u;I>0?setTimeout(()=>{u.pendingId===T&&u.fallback(g)},I):I===0&&u.fallback(g)}}function xi(t,e,n,r,s,i,o,a,c,l,f=!1){const{p:u,m:h,um:g,n:m,o:{parentNode:y,remove:k}}=l,R=t.props?Cu(t.props.timeout):void 0,I={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof R=="number"?R:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(T=!1){const{vnode:F,activeBranch:W,pendingBranch:q,pendingId:oe,effects:B,parentComponent:Q,container:G}=I;if(I.isHydrating)I.isHydrating=!1;else if(!T){const Se=W&&q.transition&&q.transition.mode==="out-in";Se&&(W.transition.afterLeave=()=>{oe===I.pendingId&&h(q,G,Oe,0)});let{anchor:Oe}=I;W&&(Oe=m(W),g(W,Q,I,!0)),Se||h(q,G,Oe,0)}an(I,q),I.pendingBranch=null,I.isInFallback=!1;let ae=I.parent,ye=!1;for(;ae;){if(ae.pendingBranch){ae.effects.push(...B),ye=!0;break}ae=ae.parent}ye||mc(B),I.effects=[],Vn(F,"onResolve")},fallback(T){if(!I.pendingBranch)return;const{vnode:F,activeBranch:W,parentComponent:q,container:oe,isSVG:B}=I;Vn(F,"onFallback");const Q=m(W),G=()=>{I.isInFallback&&(u(null,T,oe,Q,q,null,B,a,c),an(I,T))},ae=T.transition&&T.transition.mode==="out-in";ae&&(W.transition.afterLeave=G),I.isInFallback=!0,g(W,q,null,!0),ae||G()},move(T,F,W){I.activeBranch&&h(I.activeBranch,T,F,W),I.container=T},next(){return I.activeBranch&&m(I.activeBranch)},registerDep(T,F){const W=!!I.pendingBranch;W&&I.deps++;const q=T.vnode.el;T.asyncDep.catch(oe=>{Zn(oe,T,0)}).then(oe=>{if(T.isUnmounted||I.isUnmounted||I.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:B}=T;Xs(T,oe,!1),q&&(B.el=q);const Q=!q&&T.subTree.el;F(T,B,y(q||T.subTree.el),q?null:m(T.subTree),I,o,c),Q&&k(Q),Ni(T,B.el),W&&--I.deps===0&&I.resolve()})},unmount(T,F){I.isUnmounted=!0,I.activeBranch&&g(I.activeBranch,n,T,F),I.pendingBranch&&g(I.pendingBranch,n,T,F)}};return I}function Sf(t,e,n,r,s,i,o,a,c){const l=e.suspense=xi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(),f}function Rf(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=vo(r?n.default:n),t.ssFallback=r?vo(n.fallback):he(xe)}function vo(t){let e;if(V(t)){const n=hn&&t._c;n&&(t._d=!1,Ee()),t=t(),n&&(t._d=!0,e=Me,Mc())}return H(t)&&(t=gf(t)),t=We(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Cf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):mc(t)}function an(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Ni(r,s))}function yr(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function qe(t,e,n=!1){const r=de||Ne;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r.proxy):e}}const pr={};function br(t,e,n){return bc(t,e,n)}function bc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ce){const a=ku()===(de==null?void 0:de.scope)?de:null;let c,l=!1,f=!1;if(ve(t)?(c=()=>t.value,l=kr(t)):sn(t)?(c=()=>t,r=!0):H(t)?(f=!0,l=t.some(T=>sn(T)||kr(T)),c=()=>t.map(T=>{if(ve(T))return T.value;if(sn(T))return jt(T);if(V(T))return Ct(T,a,2)})):V(t)?e?c=()=>Ct(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return u&&u(),Ue(t,a,3,[h])}:c=Ke,e&&r){const T=c;c=()=>jt(T())}let u,h=T=>{u=R.onStop=()=>{Ct(T,a,4)}},g;if(Wn)if(h=Ke,e?n&&Ue(e,a,3,[c(),f?[]:void 0,h]):c(),s==="sync"){const T=Id();g=T.__watcherHandles||(T.__watcherHandles=[])}else return Ke;let m=f?new Array(t.length).fill(pr):pr;const y=()=>{if(R.active)if(e){const T=R.run();(r||l||(f?T.some((F,W)=>Bn(F,m[W])):Bn(T,m)))&&(u&&u(),Ue(e,a,3,[T,m===pr?void 0:f&&m[0]===pr?[]:m,h]),m=T)}else R.run()};y.allowRecurse=!!e;let k;s==="sync"?k=y:s==="post"?k=()=>Ce(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),k=()=>ki(y));const R=new Ti(c,k);e?n?y():m=R.run():s==="post"?Ce(R.run.bind(R),a&&a.suspense):R.run();const I=()=>{R.stop(),a&&a.scope&&vi(a.scope.effects,R)};return g&&g.push(I),I}function Af(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?vc(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=de;pn(this);const a=bc(s,i.bind(r),n);return o?pn(o):zt(),a}function vc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function jt(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ve(t))jt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)jt(t[n],e);else if(Wa(t)||rn(t))t.forEach(n=>{jt(n,e)});else if(qa(t))for(const n in t)jt(t[n],e);return t}function Of(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Di(()=>{t.isMounted=!0}),Sc(()=>{t.isUnmounting=!0}),t}const De=[Function,Array],Pf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(t,{slots:e}){const n=md(),r=Of();let s;return()=>{const i=e.default&&wc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==xe){o=y;break}}const a=Z(t),{mode:c}=a;if(r.isLeaving)return ys(o);const l=Eo(o);if(!l)return ys(o);const f=Vs(l,a,r,n);Ws(l,f);const u=n.subTree,h=u&&Eo(u);let g=!1;const{getTransitionKey:m}=l.type;if(m){const y=m();s===void 0?s=y:y!==s&&(s=y,g=!0)}if(h&&h.type!==xe&&(!tt(l,h)||g)){const y=Vs(h,a,r,n);if(Ws(h,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ys(o);c==="in-out"&&l.type!==xe&&(y.delayLeave=(k,R,I)=>{const T=Ec(r,h);T[String(h.key)]=h,k._leaveCb=()=>{R(),k._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=I})}return o}}},kf=Pf;function Ec(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Vs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:u,onLeave:h,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:k,onAfterAppear:R,onAppearCancelled:I}=e,T=String(t.key),F=Ec(n,t),W=(B,Q)=>{B&&Ue(B,r,9,Q)},q=(B,Q)=>{const G=Q[1];W(B,Q),H(B)?B.every(ae=>ae.length<=1)&&G():B.length<=1&&G()},oe={mode:i,persisted:o,beforeEnter(B){let Q=a;if(!n.isMounted)if(s)Q=y||a;else return;B._leaveCb&&B._leaveCb(!0);const G=F[T];G&&tt(t,G)&&G.el._leaveCb&&G.el._leaveCb(),W(Q,[B])},enter(B){let Q=c,G=l,ae=f;if(!n.isMounted)if(s)Q=k||c,G=R||l,ae=I||f;else return;let ye=!1;const Se=B._enterCb=Oe=>{ye||(ye=!0,Oe?W(ae,[B]):W(G,[B]),oe.delayedLeave&&oe.delayedLeave(),B._enterCb=void 0)};Q?q(Q,[B,Se]):Se()},leave(B,Q){const G=String(t.key);if(B._enterCb&&B._enterCb(!0),n.isUnmounting)return Q();W(u,[B]);let ae=!1;const ye=B._leaveCb=Se=>{ae||(ae=!0,Q(),Se?W(m,[B]):W(g,[B]),B._leaveCb=void 0,F[G]===t&&delete F[G])};F[G]=t,h?q(h,[B,ye]):ye()},clone(B){return Vs(B,e,n,r)}};return oe}function ys(t){if(es(t))return t=kt(t),t.children=null,t}function Eo(t){return es(t)?t.children?t.children[0]:void 0:t}function Ws(t,e){t.shapeFlag&6&&t.component?Ws(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ve?(o.patchFlag&128&&s++,r=r.concat(wc(o.children,e,a))):(e||o.type!==xe)&&r.push(a!=null?kt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Ic(t){return V(t)?{setup:t,name:t.name}:t}const vr=t=>!!t.type.__asyncLoader,es=t=>t.type.__isKeepAlive;function Nf(t,e){Tc(t,"a",e)}function xf(t,e){Tc(t,"da",e)}function Tc(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ts(e,r,n),n){let s=n.parent;for(;s&&s.parent;)es(s.parent.vnode)&&Df(r,e,n,s),s=s.parent}}function Df(t,e,n,r){const s=ts(e,t,r,!0);Rc(()=>{vi(r[e],s)},n)}function ts(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;En(),pn(n);const a=Ue(e,n,t,o);return zt(),wn(),a});return r?s.unshift(i):s.push(i),i}}const pt=t=>(e,n=de)=>(!Wn||t==="sp")&&ts(t,(...r)=>e(...r),n),Lf=pt("bm"),Di=pt("m"),Mf=pt("bu"),Uf=pt("u"),Sc=pt("bum"),Rc=pt("um"),Ff=pt("sp"),Bf=pt("rtg"),$f=pt("rtc");function Hf(t,e=de){ts("ec",t,e)}function zs(t,e){const n=Ne;if(n===null)return t;const r=ss(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ce]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&jt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(En(),Ue(c,n,8,[t.el,a,t,e]),wn())}}const Cc="components";function Li(t,e){return Vf(Cc,t,!0,e)||t}const jf=Symbol();function Vf(t,e,n=!0,r=!1){const s=Ne||de;if(s){const i=s.type;if(t===Cc){const a=vd(i,!1);if(a&&(a===e||a===it(e)||a===Jr(it(e))))return i}const o=wo(s[t]||i[t],e)||wo(s.appContext[t],e);return!o&&r?i:o}}function wo(t,e){return t&&(t[e]||t[it(e)]||t[Jr(it(e))])}function Wf(t,e,n,r){let s;const i=n&&n[r];if(H(t)||ge(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ks=t=>t?Bc(t)?ss(t)||t.proxy:Ks(t.parent):null,Dn=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ks(t.parent),$root:t=>Ks(t.root),$emit:t=>t.emit,$options:t=>Mi(t),$forceUpdate:t=>t.f||(t.f=()=>ki(t.update)),$nextTick:t=>t.n||(t.n=hc.bind(t.proxy)),$watch:t=>Af.bind(t)}),bs=(t,e)=>t!==ce&&!t.__isScriptSetup&&X(t,e),zf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bs(r,e))return o[e]=1,r[e];if(s!==ce&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==ce&&X(n,e))return o[e]=4,n[e];qs&&(o[e]=0)}}const f=Dn[e];let u,h;if(f)return e==="$attrs"&&Ae(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ce&&X(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,X(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bs(s,e)?(s[e]=n,!0):r!==ce&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&X(t,o)||bs(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(Dn,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let qs=!0;function Kf(t){const e=Mi(t),n=t.proxy,r=t.ctx;qs=!1,e.beforeCreate&&Io(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:g,updated:m,activated:y,deactivated:k,beforeDestroy:R,beforeUnmount:I,destroyed:T,unmounted:F,render:W,renderTracked:q,renderTriggered:oe,errorCaptured:B,serverPrefetch:Q,expose:G,inheritAttrs:ae,components:ye,directives:Se,filters:Oe}=e;if(l&&qf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const te=o[se];V(te)&&(r[se]=te.bind(n))}if(s){const se=s.call(n,n);ue(se)&&(t.data=Qn(se))}if(qs=!0,i)for(const se in i){const te=i[se],Be=V(te)?te.bind(n,n):V(te.get)?te.get.bind(n,n):Ke,Lt=!V(te)&&V(te.set)?te.set.bind(n):Ke,$e=ke({get:Be,set:Lt});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>$e.value,set:Re=>$e.value=Re})}if(a)for(const se in a)Ac(a[se],r,n,se);if(c){const se=V(c)?c.call(n):c;Reflect.ownKeys(se).forEach(te=>{yr(te,se[te])})}f&&Io(f,t,"c");function pe(se,te){H(te)?te.forEach(Be=>se(Be.bind(n))):te&&se(te.bind(n))}if(pe(Lf,u),pe(Di,h),pe(Mf,g),pe(Uf,m),pe(Nf,y),pe(xf,k),pe(Hf,B),pe($f,q),pe(Bf,oe),pe(Sc,I),pe(Rc,F),pe(Ff,Q),H(G))if(G.length){const se=t.exposed||(t.exposed={});G.forEach(te=>{Object.defineProperty(se,te,{get:()=>n[te],set:Be=>n[te]=Be})})}else t.exposed||(t.exposed={});W&&t.render===Ke&&(t.render=W),ae!=null&&(t.inheritAttrs=ae),ye&&(t.components=ye),Se&&(t.directives=Se)}function qf(t,e,n=Ke,r=!1){H(t)&&(t=Js(t));for(const s in t){const i=t[s];let o;ue(i)?"default"in i?o=qe(i.from||s,i.default,!0):o=qe(i.from||s):o=qe(i),ve(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Io(t,e,n){Ue(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ac(t,e,n,r){const s=r.includes(".")?vc(n,r):()=>n[r];if(ge(t)){const i=e[t];V(i)&&br(s,i)}else if(V(t))br(s,t.bind(n));else if(ue(t))if(H(t))t.forEach(i=>Ac(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&br(s,i,t)}}function Mi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>xr(c,l,o,!0)),xr(c,e,o)),ue(e)&&i.set(e,c),c}function xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xr(t,i,n,!0),s&&s.forEach(o=>xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Jf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jf={data:To,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Ft,directives:Ft,watch:Yf,provide:To,inject:Gf};function To(t,e){return e?t?function(){return we(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Gf(t,e){return Ft(Js(t),Js(e))}function Js(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Ft(t,e){return t?we(we(Object.create(null),t),e):e}function Yf(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const r in e)n[r]=Te(t[r],e[r]);return n}function Xf(t,e,n,r=!1){const s={},i={};Pr(i,rs,1),t.propsDefaults=Object.create(null),Oc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Qf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Z(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Yr(t.emitsOptions,h))continue;const g=e[h];if(c)if(X(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const m=it(h);s[m]=Gs(c,a,m,g,t,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{Oc(t,e,s,i)&&(l=!0);let f;for(const u in a)(!e||!X(e,u)&&((f=vn(u))===u||!X(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=Gs(c,a,u,void 0,t,!0)):delete s[u]);if(i!==a)for(const u in i)(!e||!X(e,u))&&(delete i[u],l=!0)}l&&dt(t,"set","$attrs")}function Oc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(gr(c))continue;const l=e[c];let f;s&&X(s,f=it(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Yr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Z(n),l=a||ce;for(let f=0;f<i.length;f++){const u=i[f];n[u]=Gs(s,c,u,l[u],t,!X(l,u))}}return o}function Gs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(pn(s),r=l[n]=c.call(null,e),zt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===vn(n))&&(r=!0))}return r}function Pc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const f=u=>{c=!0;const[h,g]=Pc(u,e,!0);we(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ue(t)&&r.set(t,nn),nn;if(H(i))for(let f=0;f<i.length;f++){const u=it(i[f]);So(u)&&(o[u]=ce)}else if(i)for(const f in i){const u=it(f);if(So(u)){const h=i[f],g=o[u]=H(h)||V(h)?{type:h}:Object.assign({},h);if(g){const m=Ao(Boolean,g.type),y=Ao(String,g.type);g[0]=m>-1,g[1]=y<0||m<y,(m>-1||X(g,"default"))&&a.push(u)}}}const l=[o,a];return ue(t)&&r.set(t,l),l}function So(t){return t[0]!=="$"}function Ro(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Co(t,e){return Ro(t)===Ro(e)}function Ao(t,e){return H(e)?e.findIndex(n=>Co(n,t)):V(e)&&Co(e,t)?0:-1}const kc=t=>t[0]==="_"||t==="$stable",Ui=t=>H(t)?t.map(We):[We(t)],Zf=(t,e,n)=>{if(e._n)return e;const r=Wt((...s)=>Ui(e(...s)),n);return r._c=!1,r},Nc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kc(s))continue;const i=t[s];if(V(i))e[s]=Zf(s,i,r);else if(i!=null){const o=Ui(i);e[s]=()=>o}}},xc=(t,e)=>{const n=Ui(e);t.slots.default=()=>n},ed=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),Pr(e,"_",n)):Nc(e,t.slots={})}else t.slots={},e&&xc(t,e);Pr(t.slots,rs,1)},td=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(we(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Nc(e,s)),o=e}else e&&(xc(t,e),o={default:1});if(i)for(const a in s)!kc(a)&&!(a in o)&&delete s[a]};function Dc(){return{app:null,config:{isNativeTag:Eu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nd=0;function rd(t,e){return function(r,s=null){V(r)||(r=Object.assign({},r)),s!=null&&!ue(s)&&(s=null);const i=Dc(),o=new Set;let a=!1;const c=i.app={_uid:nd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Td,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...f)):V(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,u){if(!a){const h=he(r,s);return h.appContext=i,f&&e?e(h,l):t(h,l,u),a=!0,c._container=l,l.__vue_app__=c,ss(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function Ys(t,e,n,r,s=!1){if(H(t)){t.forEach((h,g)=>Ys(h,e&&(H(e)?e[g]:e),n,r,s));return}if(vr(r)&&!s)return;const i=r.shapeFlag&4?ss(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===ce?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==c&&(ge(l)?(f[l]=null,X(u,l)&&(u[l]=null)):ve(l)&&(l.value=null)),V(c))Ct(c,a,12,[o,f]);else{const h=ge(c),g=ve(c);if(h||g){const m=()=>{if(t.f){const y=h?X(u,c)?u[c]:f[c]:c.value;s?H(y)&&vi(y,i):H(y)?y.includes(i)||y.push(i):h?(f[c]=[i],X(u,c)&&(u[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else h?(f[c]=o,X(u,c)&&(u[c]=o)):g&&(c.value=o,t.k&&(f[t.k]=o))};o?(m.id=-1,Ce(m,n)):m()}}}const Ce=Cf;function sd(t){return id(t)}function id(t,e){const n=Au();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:g=Ke,insertStaticContent:m}=t,y=(d,p,_,b=null,w=null,A=null,N=!1,C=null,O=!!p.dynamicChildren)=>{if(d===p)return;d&&!tt(d,p)&&(b=P(d),Re(d,w,A,!0),d=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:S,ref:M,shapeFlag:D}=p;switch(S){case ns:k(d,p,_,b);break;case xe:R(d,p,_,b);break;case vs:d==null&&I(p,_,b,N);break;case Ve:ye(d,p,_,b,w,A,N,C,O);break;default:D&1?W(d,p,_,b,w,A,N,C,O):D&6?Se(d,p,_,b,w,A,N,C,O):(D&64||D&128)&&S.process(d,p,_,b,w,A,N,C,O,Y)}M!=null&&w&&Ys(M,d&&d.ref,A,p||d,!p)},k=(d,p,_,b)=>{if(d==null)r(p.el=a(p.children),_,b);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},R=(d,p,_,b)=>{d==null?r(p.el=c(p.children||""),_,b):p.el=d.el},I=(d,p,_,b)=>{[d.el,d.anchor]=m(d.children,p,_,b,d.el,d.anchor)},T=({el:d,anchor:p},_,b)=>{let w;for(;d&&d!==p;)w=h(d),r(d,_,b),d=w;r(p,_,b)},F=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=h(d),s(d),d=_;s(p)},W=(d,p,_,b,w,A,N,C,O)=>{N=N||p.type==="svg",d==null?q(p,_,b,w,A,N,C,O):Q(d,p,w,A,N,C,O)},q=(d,p,_,b,w,A,N,C)=>{let O,S;const{type:M,props:D,shapeFlag:U,transition:j,dirs:K}=d;if(O=d.el=o(d.type,A,D&&D.is,D),U&8?f(O,d.children):U&16&&B(d.children,O,null,b,w,A&&M!=="foreignObject",N,C),K&&Mt(d,null,b,"created"),oe(O,d,d.scopeId,N,b),D){for(const ne in D)ne!=="value"&&!gr(ne)&&i(O,ne,null,D[ne],A,d.children,b,w,x);"value"in D&&i(O,"value",null,D.value),(S=D.onVnodeBeforeMount)&&Ze(S,b,d)}K&&Mt(d,null,b,"beforeMount");const ie=(!w||w&&!w.pendingBranch)&&j&&!j.persisted;ie&&j.beforeEnter(O),r(O,p,_),((S=D&&D.onVnodeMounted)||ie||K)&&Ce(()=>{S&&Ze(S,b,d),ie&&j.enter(O),K&&Mt(d,null,b,"mounted")},w)},oe=(d,p,_,b,w)=>{if(_&&g(d,_),b)for(let A=0;A<b.length;A++)g(d,b[A]);if(w){let A=w.subTree;if(p===A){const N=w.vnode;oe(d,N,N.scopeId,N.slotScopeIds,w.parent)}}},B=(d,p,_,b,w,A,N,C,O=0)=>{for(let S=O;S<d.length;S++){const M=d[S]=C?vt(d[S]):We(d[S]);y(null,M,p,_,b,w,A,N,C)}},Q=(d,p,_,b,w,A,N)=>{const C=p.el=d.el;let{patchFlag:O,dynamicChildren:S,dirs:M}=p;O|=d.patchFlag&16;const D=d.props||ce,U=p.props||ce;let j;_&&Ut(_,!1),(j=U.onVnodeBeforeUpdate)&&Ze(j,_,p,d),M&&Mt(p,d,_,"beforeUpdate"),_&&Ut(_,!0);const K=w&&p.type!=="foreignObject";if(S?G(d.dynamicChildren,S,C,_,b,K,A):N||te(d,p,C,null,_,b,K,A,!1),O>0){if(O&16)ae(C,p,D,U,_,b,w);else if(O&2&&D.class!==U.class&&i(C,"class",null,U.class,w),O&4&&i(C,"style",D.style,U.style,w),O&8){const ie=p.dynamicProps;for(let ne=0;ne<ie.length;ne++){const me=ie[ne],He=D[me],Xt=U[me];(Xt!==He||me==="value")&&i(C,me,He,Xt,w,d.children,_,b,x)}}O&1&&d.children!==p.children&&f(C,p.children)}else!N&&S==null&&ae(C,p,D,U,_,b,w);((j=U.onVnodeUpdated)||M)&&Ce(()=>{j&&Ze(j,_,p,d),M&&Mt(p,d,_,"updated")},b)},G=(d,p,_,b,w,A,N)=>{for(let C=0;C<p.length;C++){const O=d[C],S=p[C],M=O.el&&(O.type===Ve||!tt(O,S)||O.shapeFlag&70)?u(O.el):_;y(O,S,M,null,b,w,A,N,!0)}},ae=(d,p,_,b,w,A,N)=>{if(_!==b){if(_!==ce)for(const C in _)!gr(C)&&!(C in b)&&i(d,C,_[C],null,N,p.children,w,A,x);for(const C in b){if(gr(C))continue;const O=b[C],S=_[C];O!==S&&C!=="value"&&i(d,C,S,O,N,p.children,w,A,x)}"value"in b&&i(d,"value",_.value,b.value)}},ye=(d,p,_,b,w,A,N,C,O)=>{const S=p.el=d?d.el:a(""),M=p.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:j}=p;j&&(C=C?C.concat(j):j),d==null?(r(S,_,b),r(M,_,b),B(p.children,_,M,w,A,N,C,O)):D>0&&D&64&&U&&d.dynamicChildren?(G(d.dynamicChildren,U,_,w,A,N,C),(p.key!=null||w&&p===w.subTree)&&Lc(d,p,!0)):te(d,p,_,M,w,A,N,C,O)},Se=(d,p,_,b,w,A,N,C,O)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?w.ctx.activate(p,_,b,N,O):Oe(p,_,b,w,A,N,O):Rn(d,p,O)},Oe=(d,p,_,b,w,A,N)=>{const C=d.component=pd(d,b,w);if(es(d)&&(C.ctx.renderer=Y),gd(C),C.asyncDep){if(w&&w.registerDep(C,pe),!d.el){const O=C.subTree=he(xe);R(null,O,p,_)}return}pe(C,d,p,_,w,A,N)},Rn=(d,p,_)=>{const b=p.component=d.component;if(bf(d,p,_))if(b.asyncDep&&!b.asyncResolved){se(b,p,_);return}else b.next=p,hf(b.update),b.update();else p.el=d.el,b.vnode=p},pe=(d,p,_,b,w,A,N)=>{const C=()=>{if(d.isMounted){let{next:M,bu:D,u:U,parent:j,vnode:K}=d,ie=M,ne;Ut(d,!1),M?(M.el=K.el,se(d,M,N)):M=K,D&&_r(D),(ne=M.props&&M.props.onVnodeBeforeUpdate)&&Ze(ne,j,M,K),Ut(d,!0);const me=_s(d),He=d.subTree;d.subTree=me,y(He,me,u(He.el),P(He),d,w,A),M.el=me.el,ie===null&&Ni(d,me.el),U&&Ce(U,w),(ne=M.props&&M.props.onVnodeUpdated)&&Ce(()=>Ze(ne,j,M,K),w)}else{let M;const{el:D,props:U}=p,{bm:j,m:K,parent:ie}=d,ne=vr(p);if(Ut(d,!1),j&&_r(j),!ne&&(M=U&&U.onVnodeBeforeMount)&&Ze(M,ie,p),Ut(d,!0),D&&z){const me=()=>{d.subTree=_s(d),z(D,d.subTree,d,w,null)};ne?p.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=_s(d);y(null,me,_,b,d,w,A),p.el=me.el}if(K&&Ce(K,w),!ne&&(M=U&&U.onVnodeMounted)){const me=p;Ce(()=>Ze(M,ie,me),w)}(p.shapeFlag&256||ie&&vr(ie.vnode)&&ie.vnode.shapeFlag&256)&&d.a&&Ce(d.a,w),d.isMounted=!0,p=_=b=null}},O=d.effect=new Ti(C,()=>ki(S),d.scope),S=d.update=()=>O.run();S.id=d.uid,Ut(d,!0),S()},se=(d,p,_)=>{p.component=d;const b=d.vnode.props;d.vnode=p,d.next=null,Qf(d,p.props,b,_),td(d,p.children,_),En(),yo(),wn()},te=(d,p,_,b,w,A,N,C,O=!1)=>{const S=d&&d.children,M=d?d.shapeFlag:0,D=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){Lt(S,D,_,b,w,A,N,C,O);return}else if(U&256){Be(S,D,_,b,w,A,N,C,O);return}}j&8?(M&16&&x(S,w,A),D!==S&&f(_,D)):M&16?j&16?Lt(S,D,_,b,w,A,N,C,O):x(S,w,A,!0):(M&8&&f(_,""),j&16&&B(D,_,b,w,A,N,C,O))},Be=(d,p,_,b,w,A,N,C,O)=>{d=d||nn,p=p||nn;const S=d.length,M=p.length,D=Math.min(S,M);let U;for(U=0;U<D;U++){const j=p[U]=O?vt(p[U]):We(p[U]);y(d[U],j,_,null,w,A,N,C,O)}S>M?x(d,w,A,!0,!1,D):B(p,_,b,w,A,N,C,O,D)},Lt=(d,p,_,b,w,A,N,C,O)=>{let S=0;const M=p.length;let D=d.length-1,U=M-1;for(;S<=D&&S<=U;){const j=d[S],K=p[S]=O?vt(p[S]):We(p[S]);if(tt(j,K))y(j,K,_,null,w,A,N,C,O);else break;S++}for(;S<=D&&S<=U;){const j=d[D],K=p[U]=O?vt(p[U]):We(p[U]);if(tt(j,K))y(j,K,_,null,w,A,N,C,O);else break;D--,U--}if(S>D){if(S<=U){const j=U+1,K=j<M?p[j].el:b;for(;S<=U;)y(null,p[S]=O?vt(p[S]):We(p[S]),_,K,w,A,N,C,O),S++}}else if(S>U)for(;S<=D;)Re(d[S],w,A,!0),S++;else{const j=S,K=S,ie=new Map;for(S=K;S<=U;S++){const Pe=p[S]=O?vt(p[S]):We(p[S]);Pe.key!=null&&ie.set(Pe.key,S)}let ne,me=0;const He=U-K+1;let Xt=!1,oo=0;const Cn=new Array(He);for(S=0;S<He;S++)Cn[S]=0;for(S=j;S<=D;S++){const Pe=d[S];if(me>=He){Re(Pe,w,A,!0);continue}let Qe;if(Pe.key!=null)Qe=ie.get(Pe.key);else for(ne=K;ne<=U;ne++)if(Cn[ne-K]===0&&tt(Pe,p[ne])){Qe=ne;break}Qe===void 0?Re(Pe,w,A,!0):(Cn[Qe-K]=S+1,Qe>=oo?oo=Qe:Xt=!0,y(Pe,p[Qe],_,null,w,A,N,C,O),me++)}const ao=Xt?od(Cn):nn;for(ne=ao.length-1,S=He-1;S>=0;S--){const Pe=K+S,Qe=p[Pe],co=Pe+1<M?p[Pe+1].el:b;Cn[S]===0?y(null,Qe,_,co,w,A,N,C,O):Xt&&(ne<0||S!==ao[ne]?$e(Qe,_,co,2):ne--)}}},$e=(d,p,_,b,w=null)=>{const{el:A,type:N,transition:C,children:O,shapeFlag:S}=d;if(S&6){$e(d.component.subTree,p,_,b);return}if(S&128){d.suspense.move(p,_,b);return}if(S&64){N.move(d,p,_,Y);return}if(N===Ve){r(A,p,_);for(let D=0;D<O.length;D++)$e(O[D],p,_,b);r(d.anchor,p,_);return}if(N===vs){T(d,p,_);return}if(b!==2&&S&1&&C)if(b===0)C.beforeEnter(A),r(A,p,_),Ce(()=>C.enter(A),w);else{const{leave:D,delayLeave:U,afterLeave:j}=C,K=()=>r(A,p,_),ie=()=>{D(A,()=>{K(),j&&j()})};U?U(A,K,ie):ie()}else r(A,p,_)},Re=(d,p,_,b=!1,w=!1)=>{const{type:A,props:N,ref:C,children:O,dynamicChildren:S,shapeFlag:M,patchFlag:D,dirs:U}=d;if(C!=null&&Ys(C,null,_,d,!0),M&256){p.ctx.deactivate(d);return}const j=M&1&&U,K=!vr(d);let ie;if(K&&(ie=N&&N.onVnodeBeforeUnmount)&&Ze(ie,p,d),M&6)E(d.component,_,b);else{if(M&128){d.suspense.unmount(_,b);return}j&&Mt(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,_,w,Y,b):S&&(A!==Ve||D>0&&D&64)?x(S,p,_,!1,!0):(A===Ve&&D&384||!w&&M&16)&&x(O,p,_),b&&Yt(d)}(K&&(ie=N&&N.onVnodeUnmounted)||j)&&Ce(()=>{ie&&Ze(ie,p,d),j&&Mt(d,null,p,"unmounted")},_)},Yt=d=>{const{type:p,el:_,anchor:b,transition:w}=d;if(p===Ve){cr(_,b);return}if(p===vs){F(d);return}const A=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:C}=w,O=()=>N(_,A);C?C(d.el,A,O):O()}else A()},cr=(d,p)=>{let _;for(;d!==p;)_=h(d),s(d),d=_;s(p)},E=(d,p,_)=>{const{bum:b,scope:w,update:A,subTree:N,um:C}=d;b&&_r(b),w.stop(),A&&(A.active=!1,Re(N,d,p,_)),C&&Ce(C,p),Ce(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(d,p,_,b=!1,w=!1,A=0)=>{for(let N=A;N<d.length;N++)Re(d[N],p,_,b,w)},P=d=>d.shapeFlag&6?P(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),L=(d,p,_)=>{d==null?p._vnode&&Re(p._vnode,null,null,!0):y(p._vnode||null,d,p,null,null,null,_),yo(),gc(),p._vnode=d},Y={p:y,um:Re,m:$e,r:Yt,mt:Oe,mc:B,pc:te,pbc:G,n:P,o:t};let fe,z;return e&&([fe,z]=e(Y)),{render:L,hydrate:fe,createApp:rd(L,fe)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Lc(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=vt(s[i]),a.el=o.el),n||Lc(o,a)),a.type===ns&&(a.el=o.el)}}function od(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ad=t=>t.__isTeleport,Ve=Symbol(void 0),ns=Symbol(void 0),xe=Symbol(void 0),vs=Symbol(void 0),Ln=[];let Me=null;function Ee(t=!1){Ln.push(Me=t?null:[])}function Mc(){Ln.pop(),Me=Ln[Ln.length-1]||null}let hn=1;function Oo(t){hn+=t}function Uc(t){return t.dynamicChildren=hn>0?Me||nn:null,Mc(),hn>0&&Me&&Me.push(t),t}function Je(t,e,n,r,s,i){return Uc(le(t,e,n,r,s,i,!0))}function Dr(t,e,n,r,s){return Uc(he(t,e,n,r,s,!0))}function Lr(t){return t?t.__v_isVNode===!0:!1}function tt(t,e){return t.type===e.type&&t.key===e.key}const rs="__vInternal",Fc=({key:t})=>t??null,Er=({ref:t,ref_key:e,ref_for:n})=>t!=null?ge(t)||ve(t)||V(t)?{i:Ne,r:t,k:e,f:!!n}:t:null;function le(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fc(e),ref:e&&Er(e),scopeId:Xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ne};return a?(Fi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),hn>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const he=cd;function cd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jf)&&(t=xe),Lr(t)){const a=kt(t,e,!0);return n&&Fi(a,n),hn>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(t)]=a:Me.push(a)),a.patchFlag|=-2,a}if(Ed(t)&&(t=t.__vccOpts),e){e=ld(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=yi(a)),ue(c)&&(ic(c)&&!H(c)&&(c=we({},c)),e.style=_i(c))}const o=ge(t)?1:vf(t)?128:ad(t)?64:ue(t)?4:V(t)?2:0;return le(t,e,n,r,s,o,i,!0)}function ld(t){return t?ic(t)||rs in t?we({},t):t:null}function kt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?fd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fc(a),ref:e&&e.ref?n&&s?H(s)?s.concat(Er(e)):[s,Er(e)]:Er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kt(t.ssContent),ssFallback:t.ssFallback&&kt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function cn(t=" ",e=0){return he(ns,null,t,e)}function ud(t="",e=!1){return e?(Ee(),Dr(xe,null,t)):he(xe,null,t)}function We(t){return t==null||typeof t=="boolean"?he(xe):H(t)?he(Ve,null,t.slice()):typeof t=="object"?vt(t):he(ns,null,String(t))}function vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kt(t)}function Fi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(rs in e)?e._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),r&64?(n=16,e=[cn(e)]):n=8);t.children=e,t.shapeFlag|=n}function fd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=yi([e.class,r.class]));else if(s==="style")e.style=_i([e.style,r.style]);else if(zr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ze(t,e,n,r=null){Ue(t,e,7,[n,r])}const dd=Dc();let hd=0;function pd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dd,i={uid:hd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ou(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(r,s),emitsOptions:yc(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=mf.bind(null,i),t.ce&&t.ce(i),i}let de=null;const md=()=>de||Ne,pn=t=>{de=t,t.scope.on()},zt=()=>{de&&de.scope.off(),de=null};function Bc(t){return t.vnode.shapeFlag&4}let Wn=!1;function gd(t,e=!1){Wn=e;const{props:n,children:r}=t.vnode,s=Bc(t);Xf(t,n,s,e),ed(t,r);const i=s?_d(t,e):void 0;return Wn=!1,i}function _d(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=oc(new Proxy(t.ctx,zf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?bd(t):null;pn(t),En();const i=Ct(r,t,0,[t.props,s]);if(wn(),zt(),za(i)){if(i.then(zt,zt),e)return i.then(o=>{Xs(t,o,e)}).catch(o=>{Zn(o,t,0)});t.asyncDep=i}else Xs(t,i,e)}else $c(t,e)}function Xs(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=uc(e)),$c(t,n)}let Po;function $c(t,e,n){const r=t.type;if(!t.render){if(!e&&Po&&!r.render){const s=r.template||Mi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=we(we({isCustomElement:i,delimiters:a},o),c);r.render=Po(s,l)}}t.render=r.render||Ke}pn(t),En(),Kf(t),wn(),zt()}function yd(t){return new Proxy(t.attrs,{get(e,n){return Ae(t,"get","$attrs"),e[n]}})}function bd(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=yd(t))},slots:t.slots,emit:t.emit,expose:e}}function ss(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(uc(oc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Dn)return Dn[n](t)},has(e,n){return n in e||n in Dn}}))}function vd(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Ed(t){return V(t)&&"__vccOpts"in t}const ke=(t,e)=>uf(t,e,Wn);function Hc(t,e,n){const r=arguments.length;return r===2?ue(e)&&!H(e)?Lr(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lr(n)&&(n=[n]),he(t,e,n))}const wd=Symbol(""),Id=()=>qe(wd),Td="3.2.47",Sd="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,ko=Ht&&Ht.createElement("template"),Rd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Ht.createElementNS(Sd,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ko.innerHTML=r?`<svg>${t}</svg>`:t;const a=ko.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cd(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ad(t,e,n){const r=t.style,s=ge(n);if(n&&!s){if(e&&!ge(e))for(const i in e)n[i]==null&&Qs(r,i,"");for(const i in n)Qs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const No=/\s*!important$/;function Qs(t,e,n){if(H(n))n.forEach(r=>Qs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Od(t,e);No.test(n)?t.setProperty(vn(r),n.replace(No,""),"important"):t[r]=n}}const xo=["Webkit","Moz","ms"],Es={};function Od(t,e){const n=Es[e];if(n)return n;let r=it(e);if(r!=="filter"&&r in t)return Es[e]=r;r=Jr(r);for(let s=0;s<xo.length;s++){const i=xo[s]+r;if(i in t)return Es[e]=i}return e}const Do="http://www.w3.org/1999/xlink";function Pd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Do,e.slice(6,e.length)):t.setAttributeNS(Do,e,n);else{const i=vu(e);n==null||i&&!ja(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function kd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ja(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Zt(t,e,n,r){t.addEventListener(e,n,r)}function Nd(t,e,n,r){t.removeEventListener(e,n,r)}function xd(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Dd(e);if(r){const l=i[e]=Ud(r,s);Zt(t,a,l,c)}else o&&(Nd(t,a,o,c),i[e]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function Dd(t){let e;if(Lo.test(t)){e={};let r;for(;r=t.match(Lo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vn(t.slice(2)),e]}let ws=0;const Ld=Promise.resolve(),Md=()=>ws||(Ld.then(()=>ws=0),ws=Date.now());function Ud(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(Fd(r,n.value),e,5,[r])};return n.value=t,n.attached=Md(),n}function Fd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mo=/^on[a-z]/,Bd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Cd(t,r,s):e==="style"?Ad(t,n,r):zr(e)?bi(e)||xd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$d(t,e,r,s))?kd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Pd(t,e,r,s))};function $d(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mo.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mo.test(e)&&ge(n)?!1:e in t}const Hd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};kf.props;const Uo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>_r(e,n):e};function jd(t){t.target.composing=!0}function Fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Uo(s);const i=r||s.props&&s.props.type==="number";Zt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Us(a)),t._assign(a)}),n&&Zt(t,"change",()=>{t.value=t.value.trim()}),e||(Zt(t,"compositionstart",jd),Zt(t,"compositionend",Fo),Zt(t,"change",Fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Uo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Us(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Vd=["ctrl","shift","alt","meta"],Wd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Vd.some(n=>t[`${n}Key`]&&!e.includes(n))},zd=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Wd[e[s]];if(i&&i(n,e))return}return t(n,...r)},Kd={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):An(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),An(t,!0),r.enter(t)):r.leave(t,()=>{An(t,!1)}):An(t,e))},beforeUnmount(t,{value:e}){An(t,e)}};function An(t,e){t.style.display=e?t._vod:"none"}const qd=we({patchProp:Bd},Rd);let $o;function Jd(){return $o||($o=sd(qd))}const Gd=(...t)=>{const e=Jd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yd(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Yd(t){return ge(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const en=typeof window<"u";function Xd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function Is(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ye(s)?s.map(t):t(s)}return n}const Mn=()=>{},Ye=Array.isArray,Qd=/\/$/,Zd=t=>t.replace(Qd,"");function Ts(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=rh(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function eh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ho(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function th(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(e.matched[r],n.matched[s])&&jc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nh(t[n],e[n]))return!1;return!0}function nh(t,e){return Ye(t)?jo(t,e):Ye(e)?jo(e,t):t===e}function jo(t,e){return Ye(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var zn;(function(t){t.pop="pop",t.push="push"})(zn||(zn={}));var Un;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Un||(Un={}));function sh(t){if(!t)if(en){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Zd(t)}const ih=/^[^#]+#/;function oh(t,e){return t.replace(ih,"#")+e}function ah(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const is=()=>({left:window.pageXOffset,top:window.pageYOffset});function ch(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ah(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vo(t,e){return(history.state?history.state.position-e:-1)+t}const Zs=new Map;function lh(t,e){Zs.set(t,e)}function uh(t){const e=Zs.get(t);return Zs.delete(t),e}let fh=()=>location.protocol+"//"+location.host;function Vc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ho(c,"")}return Ho(n,t)+r+s}function dh(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=Vc(t,location),m=n.value,y=e.value;let k=0;if(h){if(n.value=g,e.value=h,o&&o===m){o=null;return}k=y?h.position-y.position:0}else r(g);s.forEach(R=>{R(n.value,m,{delta:k,type:zn.pop,direction:k?k>0?Un.forward:Un.back:Un.unknown})})};function c(){o=n.value}function l(h){s.push(h);const g=()=>{const m=s.indexOf(h);m>-1&&s.splice(m,1)};return i.push(g),g}function f(){const{history:h}=window;h.state&&h.replaceState(ee({},h.state,{scroll:is()}),"")}function u(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:u}}function Wo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?is():null}}function hh(t){const{history:e,location:n}=window,r={value:Vc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const u=t.indexOf("#"),h=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+c:fh()+t+c;try{e[f?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(c,l){const f=ee({},e.state,Wo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=ee({},s.value,e.state,{forward:c,scroll:is()});i(f.current,f,!0);const u=ee({},Wo(r.value,c,null),{position:f.position+1},l);i(c,u,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ph(t){t=sh(t);const e=hh(t),n=dh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:t,go:r,createHref:oh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mh(t){return typeof t=="string"||t&&typeof t=="object"}function Wc(t){return typeof t=="string"||typeof t=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},zc=Symbol("");var zo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zo||(zo={}));function gn(t,e){return ee(new Error,{type:t,[zc]:!0},e)}function at(t,e){return t instanceof Error&&zc in t&&(e==null||!!(t.type&e))}const Ko="[^/]+?",gh={sensitive:!1,strict:!1,start:!0,end:!0},_h=/[.+*?^${}()[\]/\\]/g;function yh(t,e){const n=ee({},gh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const h=l[u];let g=40+(n.sensitive?.25:0);if(h.type===0)u||(s+="/"),s+=h.value.replace(_h,"\\$&"),g+=40;else if(h.type===1){const{value:m,repeatable:y,optional:k,regexp:R}=h;i.push({name:m,repeatable:y,optional:k});const I=R||Ko;if(I!==Ko){g+=10;try{new RegExp(`(${I})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${I}): `+F.message)}}let T=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;u||(T=k&&l.length<2?`(?:/${T})`:"/"+T),k&&(T+="?"),s+=T,g+=20,k&&(g+=-8),y&&(g+=-20),I===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),u={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",m=i[h-1];u[m.name]=g&&m.repeatable?g.split("/"):g}return u}function c(l){let f="",u=!1;for(const h of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:m,repeatable:y,optional:k}=g,R=m in l?l[m]:"";if(Ye(R)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const I=Ye(R)?R.join("/"):R;if(!I)if(k)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);f+=I}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function bh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=bh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qo(r))return 1;if(qo(s))return-1}return s.length-r.length}function qo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Eh={type:0,value:""},wh=/[a-zA-Z0-9_]/;function Ih(t){if(!t)return[[]];if(t==="/")return[[Eh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function u(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:wh.test(c)?h():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function Th(t,e,n){const r=yh(Ih(t.path),n),s=ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Sh(t,e){const n=[],r=new Map;e=Yo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,u,h){const g=!h,m=Rh(f);m.aliasOf=h&&h.record;const y=Yo(e,f),k=[m];if("alias"in f){const T=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of T)k.push(ee({},m,{components:h?h.record.components:m.components,path:F,aliasOf:h?h.record:m}))}let R,I;for(const T of k){const{path:F}=T;if(u&&F[0]!=="/"){const W=u.record.path,q=W[W.length-1]==="/"?"":"/";T.path=u.record.path+(F&&q+F)}if(R=Th(T,u,y),h?h.alias.push(R):(I=I||R,I!==R&&I.alias.push(R),g&&f.name&&!Go(R)&&o(f.name)),m.children){const W=m.children;for(let q=0;q<W.length;q++)i(W[q],R,h&&h.children[q])}h=h||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return I?()=>{o(I)}:Mn}function o(f){if(Wc(f)){const u=r.get(f);u&&(r.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let u=0;for(;u<n.length&&vh(f,n[u])>=0&&(f.record.path!==n[u].record.path||!Kc(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!Go(f)&&r.set(f.record.name,f)}function l(f,u){let h,g={},m,y;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw gn(1,{location:f});y=h.record.name,g=ee(Jo(u.params,h.keys.filter(I=>!I.optional).map(I=>I.name)),f.params&&Jo(f.params,h.keys.map(I=>I.name))),m=h.stringify(g)}else if("path"in f)m=f.path,h=n.find(I=>I.re.test(m)),h&&(g=h.parse(m),y=h.record.name);else{if(h=u.name?r.get(u.name):n.find(I=>I.re.test(u.path)),!h)throw gn(1,{location:f,currentLocation:u});y=h.record.name,g=ee({},u.params,f.params),m=h.stringify(g)}const k=[];let R=h;for(;R;)k.unshift(R.record),R=R.parent;return{name:y,path:m,params:g,matched:k,meta:Ah(k)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Jo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ch(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ch(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Go(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ah(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function Yo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Kc(t,e){return e.children.some(n=>n===t||Kc(t,n))}const qc=/#/g,Oh=/&/g,Ph=/\//g,kh=/=/g,Nh=/\?/g,Jc=/\+/g,xh=/%5B/g,Dh=/%5D/g,Gc=/%5E/g,Lh=/%60/g,Yc=/%7B/g,Mh=/%7C/g,Xc=/%7D/g,Uh=/%20/g;function Bi(t){return encodeURI(""+t).replace(Mh,"|").replace(xh,"[").replace(Dh,"]")}function Fh(t){return Bi(t).replace(Yc,"{").replace(Xc,"}").replace(Gc,"^")}function ei(t){return Bi(t).replace(Jc,"%2B").replace(Uh,"+").replace(qc,"%23").replace(Oh,"%26").replace(Lh,"`").replace(Yc,"{").replace(Xc,"}").replace(Gc,"^")}function Bh(t){return ei(t).replace(kh,"%3D")}function $h(t){return Bi(t).replace(qc,"%23").replace(Nh,"%3F")}function Hh(t){return t==null?"":$h(t).replace(Ph,"%2F")}function Mr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jc," "),o=i.indexOf("="),a=Mr(o<0?i:i.slice(0,o)),c=o<0?null:Mr(i.slice(o+1));if(a in e){let l=e[a];Ye(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Xo(t){let e="";for(let n in t){const r=t[n];if(n=Bh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ye(r)?r.map(i=>i&&ei(i)):[r&&ei(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Vh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ye(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Wh=Symbol(""),Qo=Symbol(""),os=Symbol(""),$i=Symbol(""),ti=Symbol("");function On(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Et(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=u=>{u===!1?a(gn(4,{from:n,to:e})):u instanceof Error?a(u):mh(u)?a(gn(2,{from:e,to:u})):(i&&r.enterCallbacks[s]===i&&typeof u=="function"&&i.push(u),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(u=>a(u))})}function Ss(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(zh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Et(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Xd(l)?l.default:l;i.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Et(h,n,r,i,o)()}))}}return s}function zh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zo(t){const e=qe(os),n=qe($i),r=ke(()=>e.resolve(Le(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],u=n.matched;if(!f||!u.length)return-1;const h=u.findIndex(mn.bind(null,f));if(h>-1)return h;const g=ea(c[l-2]);return l>1&&ea(f)===g&&u[u.length-1].path!==g?u.findIndex(mn.bind(null,c[l-2])):h}),i=ke(()=>s.value>-1&&Gh(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&jc(n.params,r.value.params));function a(c={}){return Jh(c)?e[Le(t.replace)?"replace":"push"](Le(t.to)).catch(Mn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Kh=Ic({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zo,setup(t,{slots:e}){const n=Qn(Zo(t)),{options:r}=qe(os),s=ke(()=>({[ta(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ta(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Hc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qh=Kh;function Jh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ye(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ea(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ta=(t,e,n)=>t??e??n,Yh=Ic({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qe(ti),s=ke(()=>t.route||r.value),i=qe(Qo,0),o=ke(()=>{let l=Le(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);yr(Qo,ke(()=>o.value+1)),yr(Wh,a),yr(ti,s);const c=Ge();return br(()=>[c.value,a.value,t.name],([l,f,u],[h,g,m])=>{f&&(f.instances[u]=l,g&&g!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!mn(f,g)||!h)&&(f.enterCallbacks[u]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=a.value,h=u&&u.components[f];if(!h)return na(n.default,{Component:h,route:l});const g=u.props[f],m=g?g===!0?l.params:typeof g=="function"?g(l):g:null,k=Hc(h,ee({},m,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return na(n.default,{Component:k,route:l})||k}}});function na(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xh=Yh;function Qh(t){const e=Sh(t.routes,t),n=t.parseQuery||jh,r=t.stringifyQuery||Xo,s=t.history,i=On(),o=On(),a=On(),c=of(_t);let l=_t;en&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Is.bind(null,E=>""+E),u=Is.bind(null,Hh),h=Is.bind(null,Mr);function g(E,x){let P,L;return Wc(E)?(P=e.getRecordMatcher(E),L=x):L=E,e.addRoute(L,P)}function m(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function y(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function R(E,x){if(x=ee({},x||c.value),typeof E=="string"){const d=Ts(n,E,x.path),p=e.resolve({path:d.path},x),_=s.createHref(d.fullPath);return ee(d,p,{params:h(p.params),hash:Mr(d.hash),redirectedFrom:void 0,href:_})}let P;if("path"in E)P=ee({},E,{path:Ts(n,E.path,x.path).path});else{const d=ee({},E.params);for(const p in d)d[p]==null&&delete d[p];P=ee({},E,{params:u(E.params)}),x.params=u(x.params)}const L=e.resolve(P,x),Y=E.hash||"";L.params=f(h(L.params));const fe=eh(r,ee({},E,{hash:Fh(Y),path:L.path})),z=s.createHref(fe);return ee({fullPath:fe,hash:Y,query:r===Xo?Vh(E.query):E.query||{}},L,{redirectedFrom:void 0,href:z})}function I(E){return typeof E=="string"?Ts(n,E,c.value.path):ee({},E)}function T(E,x){if(l!==E)return gn(8,{from:x,to:E})}function F(E){return oe(E)}function W(E){return F(ee(I(E),{replace:!0}))}function q(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:P}=x;let L=typeof P=="function"?P(E):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=I(L):{path:L},L.params={}),ee({query:E.query,hash:E.hash,params:"path"in L?{}:E.params},L)}}function oe(E,x){const P=l=R(E),L=c.value,Y=E.state,fe=E.force,z=E.replace===!0,d=q(P);if(d)return oe(ee(I(d),{state:typeof d=="object"?ee({},Y,d.state):Y,force:fe,replace:z}),x||P);const p=P;p.redirectedFrom=x;let _;return!fe&&th(r,L,P)&&(_=gn(16,{to:p,from:L}),Lt(L,L,!0,!1)),(_?Promise.resolve(_):Q(p,L)).catch(b=>at(b)?at(b,2)?b:Be(b):se(b,p,L)).then(b=>{if(b){if(at(b,2))return oe(ee({replace:z},I(b.to),{state:typeof b.to=="object"?ee({},Y,b.to.state):Y,force:fe}),x||p)}else b=ae(p,L,!0,z,Y);return G(p,L,b),b})}function B(E,x){const P=T(E,x);return P?Promise.reject(P):Promise.resolve()}function Q(E,x){let P;const[L,Y,fe]=Zh(E,x);P=Ss(L.reverse(),"beforeRouteLeave",E,x);for(const d of L)d.leaveGuards.forEach(p=>{P.push(Et(p,E,x))});const z=B.bind(null,E,x);return P.push(z),Qt(P).then(()=>{P=[];for(const d of i.list())P.push(Et(d,E,x));return P.push(z),Qt(P)}).then(()=>{P=Ss(Y,"beforeRouteUpdate",E,x);for(const d of Y)d.updateGuards.forEach(p=>{P.push(Et(p,E,x))});return P.push(z),Qt(P)}).then(()=>{P=[];for(const d of E.matched)if(d.beforeEnter&&!x.matched.includes(d))if(Ye(d.beforeEnter))for(const p of d.beforeEnter)P.push(Et(p,E,x));else P.push(Et(d.beforeEnter,E,x));return P.push(z),Qt(P)}).then(()=>(E.matched.forEach(d=>d.enterCallbacks={}),P=Ss(fe,"beforeRouteEnter",E,x),P.push(z),Qt(P))).then(()=>{P=[];for(const d of o.list())P.push(Et(d,E,x));return P.push(z),Qt(P)}).catch(d=>at(d,8)?d:Promise.reject(d))}function G(E,x,P){for(const L of a.list())L(E,x,P)}function ae(E,x,P,L,Y){const fe=T(E,x);if(fe)return fe;const z=x===_t,d=en?history.state:{};P&&(L||z?s.replace(E.fullPath,ee({scroll:z&&d&&d.scroll},Y)):s.push(E.fullPath,Y)),c.value=E,Lt(E,x,P,z),Be()}let ye;function Se(){ye||(ye=s.listen((E,x,P)=>{if(!cr.listening)return;const L=R(E),Y=q(L);if(Y){oe(ee(Y,{replace:!0}),L).catch(Mn);return}l=L;const fe=c.value;en&&lh(Vo(fe.fullPath,P.delta),is()),Q(L,fe).catch(z=>at(z,12)?z:at(z,2)?(oe(z.to,L).then(d=>{at(d,20)&&!P.delta&&P.type===zn.pop&&s.go(-1,!1)}).catch(Mn),Promise.reject()):(P.delta&&s.go(-P.delta,!1),se(z,L,fe))).then(z=>{z=z||ae(L,fe,!1),z&&(P.delta&&!at(z,8)?s.go(-P.delta,!1):P.type===zn.pop&&at(z,20)&&s.go(-1,!1)),G(L,fe,z)}).catch(Mn)}))}let Oe=On(),Rn=On(),pe;function se(E,x,P){Be(E);const L=Rn.list();return L.length?L.forEach(Y=>Y(E,x,P)):console.error(E),Promise.reject(E)}function te(){return pe&&c.value!==_t?Promise.resolve():new Promise((E,x)=>{Oe.add([E,x])})}function Be(E){return pe||(pe=!E,Se(),Oe.list().forEach(([x,P])=>E?P(E):x()),Oe.reset()),E}function Lt(E,x,P,L){const{scrollBehavior:Y}=t;if(!en||!Y)return Promise.resolve();const fe=!P&&uh(Vo(E.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return hc().then(()=>Y(E,x,fe)).then(z=>z&&ch(z)).catch(z=>se(z,E,x))}const $e=E=>s.go(E);let Re;const Yt=new Set,cr={currentRoute:c,listening:!0,addRoute:g,removeRoute:m,hasRoute:k,getRoutes:y,resolve:R,options:t,push:F,replace:W,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Rn.add,isReady:te,install(E){const x=this;E.component("RouterLink",qh),E.component("RouterView",Xh),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Le(c)}),en&&!Re&&c.value===_t&&(Re=!0,F(s.location).catch(Y=>{}));const P={};for(const Y in _t)P[Y]=ke(()=>c.value[Y]);E.provide(os,x),E.provide($i,Qn(P)),E.provide(ti,c);const L=E.unmount;Yt.add(E),E.unmount=function(){Yt.delete(E),Yt.size<1&&(l=_t,ye&&ye(),ye=null,c.value=_t,Re=!1,pe=!1),L()}}};return cr}function Qt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Zh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>mn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>mn(l,c))||s.push(c))}return[n,r,s]}function ep(){return qe(os)}function tp(){return qe($i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},np=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,u=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[f],n[u],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):np(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||u==null)throw new rp;const h=i<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),u!==64){const m=l<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sp=function(t){const e=Qc(t);return Zc.encodeByteArray(e,!0)},el=function(t){return sp(t).replace(/\./g,"")},tl=function(t){try{return Zc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=()=>ip().__FIREBASE_DEFAULTS__,ap=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tl(t[1]);return e&&JSON.parse(e)},Hi=()=>{try{return op()||ap()||cp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lp=t=>{var e,n;return(n=(e=Hi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nl=()=>{var t;return(t=Hi())===null||t===void 0?void 0:t.config},rl=t=>{var e;return(e=Hi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function dp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pp(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mp(){try{return typeof indexedDB=="object"}catch{return!1}}function gp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_p,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function yp(t,e){return t.replace(bp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bp=/\{\$([^}]+)}/g;function vp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ra(i)&&ra(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ra(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ep(t,e){const n=new wp(t,e);return n.subscribe.bind(n)}class wp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ip(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rs),s.error===void 0&&(s.error=Rs),s.complete===void 0&&(s.complete=Rs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ip(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new up;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rp(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sp(t){return t===Bt?void 0:t}function Rp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Ap={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Op=re.INFO,Pp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},kp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Pp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=Op,this._logHandler=kp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ap[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Np=(t,e)=>e.some(n=>t instanceof n);let sa,ia;function xp(){return sa||(sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dp(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const il=new WeakMap,ni=new WeakMap,ol=new WeakMap,Cs=new WeakMap,ji=new WeakMap;function Lp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&il.set(n,t)}).catch(()=>{}),ji.set(e,t),e}function Mp(t){if(ni.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ni.set(t,e)}let ri={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ol.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Up(t){ri=t(ri)}function Fp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(As(this),e,...n);return ol.set(r,e.sort?e.sort():[e]),At(r)}:Dp().includes(t)?function(...e){return t.apply(As(this),e),At(il.get(this))}:function(...e){return At(t.apply(As(this),e))}}function Bp(t){return typeof t=="function"?Fp(t):(t instanceof IDBTransaction&&Mp(t),Np(t,xp())?new Proxy(t,ri):t)}function At(t){if(t instanceof IDBRequest)return Lp(t);if(Cs.has(t))return Cs.get(t);const e=Bp(t);return e!==t&&(Cs.set(t,e),ji.set(e,t)),e}const As=t=>ji.get(t);function $p(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=At(o);return r&&o.addEventListener("upgradeneeded",c=>{r(At(o.result),c.oldVersion,c.newVersion,At(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Hp=["get","getKey","getAll","getAllKeys","count"],jp=["put","add","delete","clear"],Os=new Map;function oa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Os.get(e))return Os.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Os.set(e,i),i}Up(t=>({...t,get:(e,n,r)=>oa(e,n)||t.get(e,n,r),has:(e,n)=>!!oa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const si="@firebase/app",aa="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new sl("@firebase/app"),zp="@firebase/app-compat",Kp="@firebase/analytics-compat",qp="@firebase/analytics",Jp="@firebase/app-check-compat",Gp="@firebase/app-check",Yp="@firebase/auth",Xp="@firebase/auth-compat",Qp="@firebase/database",Zp="@firebase/database-compat",em="@firebase/functions",tm="@firebase/functions-compat",nm="@firebase/installations",rm="@firebase/installations-compat",sm="@firebase/messaging",im="@firebase/messaging-compat",om="@firebase/performance",am="@firebase/performance-compat",cm="@firebase/remote-config",lm="@firebase/remote-config-compat",um="@firebase/storage",fm="@firebase/storage-compat",dm="@firebase/firestore",hm="@firebase/firestore-compat",pm="firebase",mm="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]",gm={[si]:"fire-core",[zp]:"fire-core-compat",[qp]:"fire-analytics",[Kp]:"fire-analytics-compat",[Gp]:"fire-app-check",[Jp]:"fire-app-check-compat",[Yp]:"fire-auth",[Xp]:"fire-auth-compat",[Qp]:"fire-rtdb",[Zp]:"fire-rtdb-compat",[em]:"fire-fn",[tm]:"fire-fn-compat",[nm]:"fire-iid",[rm]:"fire-iid-compat",[sm]:"fire-fcm",[im]:"fire-fcm-compat",[om]:"fire-perf",[am]:"fire-perf-compat",[cm]:"fire-rc",[lm]:"fire-rc-compat",[um]:"fire-gcs",[fm]:"fire-gcs-compat",[dm]:"fire-fst",[hm]:"fire-fst-compat","fire-js":"fire-js",[pm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map,oi=new Map;function _m(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(oi.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;oi.set(e,t);for(const n of Fr.values())_m(n,t);return!0}function al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new er("app","Firebase",ym);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=mm;function cl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ii,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(n||(n=nl()),!n)throw Ot.create("no-options");const i=Fr.get(s);if(i){if(Ur(n,i.options)&&Ur(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new Cp(s);for(const c of oi.values())o.addComponent(c);const a=new bm(n,r,o);return Fr.set(s,a),a}function vm(t=ii){const e=Fr.get(t);if(!e&&t===ii&&nl())return cl();if(!e)throw Ot.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let s=(r=gm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}Kn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="firebase-heartbeat-database",wm=1,qn="firebase-heartbeat-store";let Ps=null;function ll(){return Ps||(Ps=$p(Em,wm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Ps}async function Im(t){try{return await(await ll()).transaction(qn).objectStore(qn).get(ul(t))}catch(e){if(e instanceof Nt)qt.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function ca(t,e){try{const r=(await ll()).transaction(qn,"readwrite");await r.objectStore(qn).put(e,ul(t)),await r.done}catch(n){if(n instanceof Nt)qt.warn(n.message);else{const r=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function ul(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=1024,Sm=30*24*60*60*1e3;class Rm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Am(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=la();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=la(),{heartbeatsToSend:r,unsentEntries:s}=Cm(this._heartbeatsCache.heartbeats),i=el(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function la(){return new Date().toISOString().substring(0,10)}function Cm(t,e=Tm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ua(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ua(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Am{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mp()?gp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Im(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ua(t){return el(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){Kn(new _n("platform-logger",e=>new Vp(e),"PRIVATE")),Kn(new _n("heartbeat",e=>new Rm(e),"PRIVATE")),ln(si,aa,t),ln(si,aa,"esm2017"),ln("fire-js","")}Om("");var Pm="firebase",km="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(Pm,km,"app");const Nm={apiKey:"AIzaSyDB3P-pX1pbuYm5U8szf2xbraKI0O1CFxI",authDomain:"final-project-7bf9d.firebaseapp.com",projectId:"final-project-7bf9d",storageBucket:"final-project-7bf9d.appspot.com",messagingSenderId:"84986747794",appId:"1:84986747794:web:441594b01206212a2cbf4b"},xm=cl(Nm);function Vi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dm=fl,dl=new er("auth","Firebase",fl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new sl("@firebase/auth");function Lm(t,...e){Br.logLevel<=re.WARN&&Br.warn(`Auth (${nr}): ${t}`,...e)}function wr(t,...e){Br.logLevel<=re.ERROR&&Br.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,...e){throw Wi(t,...e)}function rt(t,...e){return Wi(t,...e)}function Mm(t,e,n){const r=Object.assign(Object.assign({},Dm()),{[e]:n});return new er("auth","Firebase",r).create(e,{appName:t.name})}function Wi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dl.create(t,...e)}function $(t,e,...n){if(!t)throw Wi(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wr(e),new Error(e)}function ht(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Um(){return fa()==="http:"||fa()==="https:"}function fa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Um()||dp()||"connection"in navigator)?navigator.onLine:!0}function Bm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=fp()||hp()}get(){return Fm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new rr(3e4,6e4);function Gt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dt(t,e,n,r,s={}){return pl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=tr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),hl.fetch()(ml(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function pl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$m),e);try{const s=new Vm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Mm(t,f,l);Xe(t,f)}}catch(s){if(s instanceof Nt)throw s;Xe(t,"network-request-failed",{message:String(s)})}}async function as(t,e,n,r,s={}){const i=await Dt(t,e,n,r,s);return"mfaPendingCredential"in i&&Xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ml(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zi(t.config,s):`${t.config.apiScheme}://${s}`}function jm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rt(this.auth,"network-request-failed")),Hm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rt(t,e,r);return s.customData._tokenResponse=n,s}function da(t){return t!==void 0&&t.enterprise!==void 0}class Wm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zm(t,e){return Dt(t,"GET","/v2/recaptchaConfig",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(t,e){return Dt(t,"POST","/v1/accounts:delete",e)}async function qm(t,e){return Dt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jm(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=Ki(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fn(ks(s.auth_time)),issuedAtTime:Fn(ks(s.iat)),expirationTime:Fn(ks(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ks(t){return Number(t)*1e3}function Ki(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wr("JWT malformed, contained fewer than 3 sections"),null;try{const s=tl(n);return s?JSON.parse(s):(wr("Failed to decode base64 JWT payload"),null)}catch(s){return wr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gm(t){const e=Ki(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&Ym(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ym({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fn(this.lastLoginAt),this.creationTime=Fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Jn(t,qm(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?eg(i.providerUserInfo):[],a=Zm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new gl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function Qm(t){const e=xt(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function eg(t){return t.map(e=>{var{providerId:n}=e,r=Vi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e){const n=await pl(t,{},async()=>{const r=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ml(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ng(t,e){return Dt(t,"POST","/v2/accounts:revokeToken",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jm(this,e)}reload(){return Qm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jn(this,Km(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:T,emailVerified:F,isAnonymous:W,providerData:q,stsTokenManager:oe}=n;$(T&&oe,e,"internal-error");const B=Gn.fromJSON(this.name,oe);$(typeof T=="string",e,"internal-error"),yt(u,e.name),yt(h,e.name),$(typeof F=="boolean",e,"internal-error"),$(typeof W=="boolean",e,"internal-error"),yt(g,e.name),yt(m,e.name),yt(y,e.name),yt(k,e.name),yt(R,e.name),yt(I,e.name);const Q=new Kt({uid:T,auth:e,email:h,emailVerified:F,displayName:u,isAnonymous:W,photoURL:m,phoneNumber:g,tenantId:y,stsTokenManager:B,createdAt:R,lastLoginAt:I});return q&&Array.isArray(q)&&(Q.providerData=q.map(G=>Object.assign({},G))),k&&(Q._redirectEventId=k),Q}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gn;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $r(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Map;function ut(t){ht(t instanceof Function,"Expected a class definition");let e=ha.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ha.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_l.type="NONE";const pa=_l;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e,n){return`firebase:${t}:${e}:${n}`}class un{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new un(ut(pa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ut(pa);const o=Ir(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const u=Kt._fromJSON(e,f);l!==i&&(a=u),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new un(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new un(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wl(e))return"Blackberry";if(Il(e))return"Webos";if(qi(e))return"Safari";if((e.includes("chrome/")||bl(e))&&!e.includes("edge/"))return"Chrome";if(El(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yl(t=Ie()){return/firefox\//i.test(t)}function qi(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bl(t=Ie()){return/crios\//i.test(t)}function vl(t=Ie()){return/iemobile/i.test(t)}function El(t=Ie()){return/android/i.test(t)}function wl(t=Ie()){return/blackberry/i.test(t)}function Il(t=Ie()){return/webos/i.test(t)}function cs(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rg(t=Ie()){var e;return cs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sg(){return pp()&&document.documentMode===10}function Tl(t=Ie()){return cs(t)||El(t)||Il(t)||wl(t)||/windows phone/i.test(t)||vl(t)}function ig(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t,e=[]){let n;switch(t){case"Browser":n=ma(Ie());break;case"Worker":n=`${ma(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ag(t,e={}){return Dt(t,"GET","/v2/passwordPolicy",Gt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=6;class lg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ga(this),this.idTokenSubscription=new ga(this),this.beforeStateQueue=new og(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ag(this),n=new lg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ng(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Lm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function In(t){return xt(t)}class ga{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ep(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fg().appendChild(r)})}function dg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hg="https://www.google.com/recaptcha/enterprise.js?render=",pg="recaptcha-enterprise",mg="NO_RECAPTCHA";class gg{constructor(e){this.type=pg,this.auth=In(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{zm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Wm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;da(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(mg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&da(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rl(hg+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _a(t,e,n,r=!1){const s=new gg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ya(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _a(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _a(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){const n=al(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ur(i,e??{}))return s;Xe(s,"already-initialized")}return n.initialize({options:e})}function yg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bg(t,e,n){const r=In(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Cl(e),{host:o,port:a}=vg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Eg()}function Cl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vg(t){const e=Cl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ba(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ba(o)}}}function ba(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Eg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function wg(t,e){return Dt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(t,e){return as(t,"POST","/v1/accounts:signInWithPassword",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e){return as(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))}async function Sg(t,e){return as(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ji{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Yn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,n,"signInWithPassword",Ig);case"emailLink":return Tg(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ya(e,r,"signUpPassword",wg);case"emailLink":return Sg(e,{idToken:n,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e){return as(t,"POST","/v1/accounts:signInWithIdp",Gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="http://localhost";class Jt extends Ji{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fn(e,n)}buildRequest(){const e={requestUri:Rg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ag(t){const e=Nn(xn(t)).link,n=e?Nn(xn(e)).deep_link_id:null,r=Nn(xn(t)).deep_link_id;return(r?Nn(xn(r)).link:null)||r||n||e||t}class Gi{constructor(e){var n,r,s,i,o,a;const c=Nn(xn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,u=Cg((s=c.mode)!==null&&s!==void 0?s:null);$(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ag(e);try{return new Gi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.providerId=Tn.PROVIDER_ID}static credential(e,n){return Yn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gi.parseLink(n);return $(r,"argument-error"),Yn._fromEmailAndCode(e,r.code,r.tenantId)}}Tn.PROVIDER_ID="password";Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Al{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends sr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends sr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends sr{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=va(r);return new yn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=va(r);return new yn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function va(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hr(e,n,r,s)}}function Ol(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hr._fromErrorAndOperation(t,i,e,r):i})}async function Og(t,e,n=!1){const r=await Jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Jn(t,Ol(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Ki(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),yn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(t,e,n=!1){const r="signIn",s=await Ol(t,r,e),i=await yn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function kg(t,e){return Pl(In(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(t){const e=In(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function xg(t,e,n){return kg(xt(t),Tn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ng(t),r})}function Dg(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function Lg(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function Mg(t){return xt(t).signOut()}const jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(){const t=Ie();return qi(t)||cs(t)}const Fg=1e3,Bg=10;class Nl extends kl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ug()&&ig(),this.fallbackToPolling=Tl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nl.type="LOCAL";const $g=Nl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends kl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xl.type="SESSION";const Dl=xl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Hg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ls.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Yi("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function Vg(t){st().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function Wg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kg(){return Ll()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="firebaseLocalStorageDb",qg=1,Vr="firebaseLocalStorage",Ul="fbase_key";class ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function us(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function Jg(){const t=indexedDB.deleteDatabase(Ml);return new ir(t).toPromise()}function ci(){const t=indexedDB.open(Ml,qg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vr,{keyPath:Ul})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vr)?e(r):(r.close(),await Jg(),e(await ci()))})})}async function Ea(t,e,n){const r=us(t,!0).put({[Ul]:e,value:n});return new ir(r).toPromise()}async function Gg(t,e){const n=us(t,!1).get(e),r=await new ir(n).toPromise();return r===void 0?null:r.value}function wa(t,e){const n=us(t,!0).delete(e);return new ir(n).toPromise()}const Yg=800,Xg=3;class Fl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ci(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ls._getInstance(Kg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wg(),!this.activeServiceWorker)return;this.sender=new jg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ci();return await Ea(e,jr,"1"),await wa(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ea(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=us(s,!1).getAll();return new ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fl.type="LOCAL";const Qg=Fl;new rr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e){return e?ut(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Ji{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e_(t){return Pl(t.auth,new Xi(t),t.bypassAuthState)}function t_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Pg(n,new Xi(t),t.bypassAuthState)}async function n_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Og(n,new Xi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e_;case"linkViaPopup":case"linkViaRedirect":return n_;case"reauthViaPopup":case"reauthViaRedirect":return t_;default:Xe(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=new rr(2e3,1e4);class tn extends Bl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=Yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r_.get())};e()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="pendingRedirect",Tr=new Map;class i_ extends Bl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const r=await o_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o_(t,e){const n=l_(e),r=c_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function a_(t,e){Tr.set(t._key(),e)}function c_(t){return ut(t._redirectPersistence)}function l_(t){return Ir(s_,t.config.apiKey,t.name)}async function u_(t,e,n=!1){const r=In(t),s=Zg(r,e),o=await new i_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=10*60*1e3;class d_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!h_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$l(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ia(e))}saveEventToCache(e){this.cachedEventUids.add(Ia(e)),this.lastProcessedEventTime=Date.now()}}function Ia(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $l({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function h_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $l(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(t,e={}){return Dt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g_=/^https?/;async function __(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p_(t);for(const n of e)try{if(y_(n))return}catch{}Xe(t,"unauthorized-domain")}function y_(t){const e=ai(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g_.test(n))return!1;if(m_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new rr(3e4,6e4);function Ta(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v_(t){return new Promise((e,n)=>{var r,s,i;function o(){Ta(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ta(),n(rt(t,"network-request-failed"))},timeout:b_.get()})}if(!((s=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const a=dg("iframefcb");return st()[a]=()=>{gapi.load?o():n(rt(t,"network-request-failed"))},Rl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function E_(t){return Sr=Sr||v_(t),Sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new rr(5e3,15e3),I_="__/auth/iframe",T_="emulator/auth/iframe",S_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C_(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zi(e,T_):`https://${t.config.authDomain}/${I_}`,r={apiKey:e.apiKey,appName:t.name,v:nr},s=R_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tr(r).slice(1)}`}async function A_(t){const e=await E_(t),n=st().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:C_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},w_.get());function c(){st().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P_=500,k_=600,N_="_blank",x_="http://localhost";class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D_(t,e,n,r=P_,s=k_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},O_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=bl(l)?N_:n),yl(l)&&(e=e||x_,c.scrollbars="yes");const f=Object.entries(c).reduce((h,[g,m])=>`${h}${g}=${m},`,"");if(rg(l)&&a!=="_self")return L_(e||"",a),new Sa(null);const u=window.open(e||"",a,f);$(u,t,"popup-blocked");try{u.focus()}catch{}return new Sa(u)}function L_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="__/auth/handler",U_="emulator/auth/handler",F_=encodeURIComponent("fac");async function Ra(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nr,eventId:s};if(e instanceof Al){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(e instanceof sr){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${F_}=${encodeURIComponent(c)}`:"";return`${B_(t)}?${tr(a).slice(1)}${l}`}function B_({config:t}){return t.emulator?zi(t,U_):`https://${t.authDomain}/${M_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="webStorageSupport";class $_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dl,this._completeRedirectFn=u_,this._overrideRedirectResult=a_}async _openPopup(e,n,r,s){var i;ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ra(e,n,r,ai(),s);return D_(e,o,Yi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ra(e,n,r,ai(),s);return Vg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ht(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await A_(e),r=new d_(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ns,{type:Ns},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ns];o!==void 0&&n(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=__(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tl()||qi()||cs()}}const H_=$_;var Ca="@firebase/auth",Aa="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function W_(t){Kn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sl(t)},l=new ug(r,s,i,c);return yg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kn(new _n("auth-internal",e=>{const n=In(e.getProvider("auth").getImmediate());return(r=>new j_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Ca,Aa,V_(t)),ln(Ca,Aa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=5*60,K_=rl("authIdTokenMaxAge")||z_;let Oa=null;const q_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K_)return;const s=n==null?void 0:n.token;Oa!==s&&(Oa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function J_(t=vm()){const e=al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_g(t,{popupRedirectResolver:H_,persistence:[Qg,$g,Dl]}),r=rl("authTokenSyncURL");if(r){const i=q_(r);Lg(n,i,()=>i(n.currentUser)),Dg(n,o=>i(o))}const s=lp("auth");return s&&bg(n,`http://${s}`),n}W_("Browser");function G_(t){const e=Ge(t.currentUser),n=ke(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const li=J_(xm),{isAuthenticated:Pa,user:Y_}=G_(li),Qi=()=>({isAuthenticated:Pa,user:Y_,login:async(n,r)=>(await xg(li,n,r),Pa.value),logout:async()=>{await Mg(li),io.push({name:"Home"})}});const mt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},X_={},Hl=t=>(Qr("data-v-63b1905e"),t=t(),Zr(),t),Q_={class:"wrapper"},Z_=Hl(()=>le("input",{type:"text",placeholder:"Find your island today!",class:"search"},null,-1)),ey=Hl(()=>le("span",{class:"icon"},[le("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[le("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),ty=[Z_,ey];function ny(t,e){return Ee(),Je("div",Q_,ty)}const ry=mt(X_,[["render",ny],["__scopeId","data-v-63b1905e"]]);function jl(t,e){return function(){return t.apply(e,arguments)}}const{toString:sy}=Object.prototype,{getPrototypeOf:Zi}=Object,fs=(t=>e=>{const n=sy.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ot=t=>(t=t.toLowerCase(),e=>fs(e)===t),ds=t=>e=>typeof e===t,{isArray:Sn}=Array,Xn=ds("undefined");function iy(t){return t!==null&&!Xn(t)&&t.constructor!==null&&!Xn(t.constructor)&&Fe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Vl=ot("ArrayBuffer");function oy(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Vl(t.buffer),e}const ay=ds("string"),Fe=ds("function"),Wl=ds("number"),hs=t=>t!==null&&typeof t=="object",cy=t=>t===!0||t===!1,Rr=t=>{if(fs(t)!=="object")return!1;const e=Zi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},ly=ot("Date"),uy=ot("File"),fy=ot("Blob"),dy=ot("FileList"),hy=t=>hs(t)&&Fe(t.pipe),py=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Fe(t.append)&&((e=fs(t))==="formdata"||e==="object"&&Fe(t.toString)&&t.toString()==="[object FormData]"))},my=ot("URLSearchParams"),gy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function or(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Sn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function zl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Kl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ql=t=>!Xn(t)&&t!==Kl;function ui(){const{caseless:t}=ql(this)&&this||{},e={},n=(r,s)=>{const i=t&&zl(e,s)||s;Rr(e[i])&&Rr(r)?e[i]=ui(e[i],r):Rr(r)?e[i]=ui({},r):Sn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&or(arguments[r],n);return e}const _y=(t,e,n,{allOwnKeys:r}={})=>(or(e,(s,i)=>{n&&Fe(s)?t[i]=jl(s,n):t[i]=s},{allOwnKeys:r}),t),yy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),by=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},vy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Zi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Ey=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},wy=t=>{if(!t)return null;if(Sn(t))return t;let e=t.length;if(!Wl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Iy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Zi(Uint8Array)),Ty=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Sy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Ry=ot("HTMLFormElement"),Cy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ka=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ay=ot("RegExp"),Jl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};or(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Oy=t=>{Jl(t,(e,n)=>{if(Fe(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Fe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Py=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Sn(t)?r(t):r(String(t).split(e)),n},ky=()=>{},Ny=(t,e)=>(t=+t,Number.isFinite(t)?t:e),xs="abcdefghijklmnopqrstuvwxyz",Na="0123456789",Gl={DIGIT:Na,ALPHA:xs,ALPHA_DIGIT:xs+xs.toUpperCase()+Na},xy=(t=16,e=Gl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Dy(t){return!!(t&&Fe(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ly=t=>{const e=new Array(10),n=(r,s)=>{if(hs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Sn(r)?[]:{};return or(r,(o,a)=>{const c=n(o,s+1);!Xn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},My=ot("AsyncFunction"),Uy=t=>t&&(hs(t)||Fe(t))&&Fe(t.then)&&Fe(t.catch),v={isArray:Sn,isArrayBuffer:Vl,isBuffer:iy,isFormData:py,isArrayBufferView:oy,isString:ay,isNumber:Wl,isBoolean:cy,isObject:hs,isPlainObject:Rr,isUndefined:Xn,isDate:ly,isFile:uy,isBlob:fy,isRegExp:Ay,isFunction:Fe,isStream:hy,isURLSearchParams:my,isTypedArray:Iy,isFileList:dy,forEach:or,merge:ui,extend:_y,trim:gy,stripBOM:yy,inherits:by,toFlatObject:vy,kindOf:fs,kindOfTest:ot,endsWith:Ey,toArray:wy,forEachEntry:Ty,matchAll:Sy,isHTMLForm:Ry,hasOwnProperty:ka,hasOwnProp:ka,reduceDescriptors:Jl,freezeMethods:Oy,toObjectSet:Py,toCamelCase:Cy,noop:ky,toFiniteNumber:Ny,findKey:zl,global:Kl,isContextDefined:ql,ALPHABET:Gl,generateString:xy,isSpecCompliantForm:Dy,toJSONObject:Ly,isAsyncFn:My,isThenable:Uy};function J(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}v.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Yl=J.prototype,Xl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Xl[t]={value:t}});Object.defineProperties(J,Xl);Object.defineProperty(Yl,"isAxiosError",{value:!0});J.from=(t,e,n,r,s,i)=>{const o=Object.create(Yl);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),J.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Fy=null;function fi(t){return v.isPlainObject(t)||v.isArray(t)}function Ql(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function xa(t,e,n){return t?t.concat(e).map(function(s,i){return s=Ql(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function By(t){return v.isArray(t)&&!t.some(fi)}const $y=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function ps(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!v.isUndefined(k[y])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(v.isDate(m))return m.toISOString();if(!c&&v.isBlob(m))throw new J("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(m)||v.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,y,k){let R=m;if(m&&!k&&typeof m=="object"){if(v.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(v.isArray(m)&&By(m)||(v.isFileList(m)||v.endsWith(y,"[]"))&&(R=v.toArray(m)))return y=Ql(y),R.forEach(function(T,F){!(v.isUndefined(T)||T===null)&&e.append(o===!0?xa([y],F,i):o===null?y:y+"[]",l(T))}),!1}return fi(m)?!0:(e.append(xa(k,y,i),l(m)),!1)}const u=[],h=Object.assign($y,{defaultVisitor:f,convertValue:l,isVisitable:fi});function g(m,y){if(!v.isUndefined(m)){if(u.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));u.push(m),v.forEach(m,function(R,I){(!(v.isUndefined(R)||R===null)&&s.call(e,R,v.isString(I)?I.trim():I,y,h))===!0&&g(R,y?y.concat(I):[I])}),u.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Da(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function eo(t,e){this._pairs=[],t&&ps(t,this,e)}const Zl=eo.prototype;Zl.append=function(e,n){this._pairs.push([e,n])};Zl.toString=function(e){const n=e?function(r){return e.call(this,r,Da)}:Da;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Hy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eu(t,e,n){if(!e)return t;const r=n&&n.encode||Hy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new eo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class jy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const La=jy,tu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vy=typeof URLSearchParams<"u"?URLSearchParams:eo,Wy=typeof FormData<"u"?FormData:null,zy=typeof Blob<"u"?Blob:null,Ky={isBrowser:!0,classes:{URLSearchParams:Vy,FormData:Wy,Blob:zy},protocols:["http","https","file","blob","url","data"]},nu=typeof window<"u"&&typeof document<"u",qy=(t=>nu&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Jy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Gy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:nu,hasStandardBrowserEnv:qy,hasStandardBrowserWebWorkerEnv:Jy},Symbol.toStringTag,{value:"Module"})),nt={...Gy,...Ky};function Yy(t,e){return ps(t,new nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return nt.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Xy(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Qy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function ru(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=Qy(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e(Xy(r),s,n,0)}),n}return null}function Zy(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const to={transitional:tu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s&&s?JSON.stringify(ru(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Yy(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ps(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Zy(e)):e}],transformResponse:[function(e){const n=this.transitional||to.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?J.from(a,J.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{to.headers[t]={}});const no=to,eb=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tb=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&eb[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ma=Symbol("internals");function Pn(t){return t&&String(t).trim().toLowerCase()}function Cr(t){return t===!1||t==null?t:v.isArray(t)?t.map(Cr):String(t)}function nb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const rb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ds(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function sb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ib(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ms{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const f=Pn(c);if(!f)throw new Error("header name must be a non-empty string");const u=v.findKey(s,f);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=Cr(a))}const o=(a,c)=>v.forEach(a,(l,f)=>i(l,f,c));return v.isPlainObject(e)||e instanceof this.constructor?o(e,n):v.isString(e)&&(e=e.trim())&&!rb(e)?o(tb(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Pn(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return nb(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Pn(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ds(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Pn(o),o){const a=v.findKey(r,o);a&&(!n||Ds(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ds(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=Cr(s),delete n[i];return}const a=e?sb(i):String(i).trim();a!==i&&delete n[i],n[a]=Cr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ma]=this[Ma]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Pn(o);r[a]||(ib(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}ms.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(ms.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(ms);const ft=ms;function Ls(t,e){const n=this||no,r=e||n,s=ft.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function su(t){return!!(t&&t.__CANCEL__)}function ar(t,e,n){J.call(this,t??"canceled",J.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(ar,J,{__CANCEL__:!0});function ob(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ab=nt.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(r)&&o.push("path="+r),v.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function cb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function lb(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function iu(t,e){return t&&!cb(e)?lb(t,e):e}const ub=nt.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function fb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function db(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),f=r[i];o||(o=l),n[s]=c,r[s]=l;let u=i,h=0;for(;u!==s;)h+=n[u++],u=u%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const g=f&&l-f;return g?Math.round(h*1e3/g):void 0}}function Ua(t,e){let n=0;const r=db(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const hb=typeof XMLHttpRequest<"u",pb=hb&&function(t){return new Promise(function(n,r){let s=t.data;const i=ft.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let f;if(v.isFormData(s)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[y,...k]=f?f.split(";").map(R=>R.trim()).filter(Boolean):[];i.setContentType([y||"multipart/form-data",...k].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+k))}const h=iu(t.baseURL,t.url);u.open(t.method.toUpperCase(),eu(h,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function g(){if(!u)return;const y=ft.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),R={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:t,request:u};ob(function(T){n(T),l()},function(T){r(T),l()},R),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){u&&(r(new J("Request aborted",J.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new J("Network Error",J.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const R=t.transitional||tu;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new J(k,R.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,t,u)),u=null},nt.hasStandardBrowserEnv&&(a&&v.isFunction(a)&&(a=a(t)),a||a!==!1&&ub(h))){const y=t.xsrfHeaderName&&t.xsrfCookieName&&ab.read(t.xsrfCookieName);y&&i.set(t.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&v.forEach(i.toJSON(),function(k,R){u.setRequestHeader(R,k)}),v.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Ua(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ua(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=y=>{u&&(r(!y||y.type?new ar(null,t,u):y),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const m=fb(h);if(m&&nt.protocols.indexOf(m)===-1){r(new J("Unsupported protocol "+m+":",J.ERR_BAD_REQUEST,t));return}u.send(s||null)})},di={http:Fy,xhr:pb};v.forEach(di,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Fa=t=>`- ${t}`,mb=t=>v.isFunction(t)||t===null||t===!1,ou={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!mb(n)&&(r=di[(o=String(n)).toLowerCase()],r===void 0))throw new J(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Fa).join(`
`):" "+Fa(i[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:di};function Ms(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ar(null,t)}function Ba(t){return Ms(t),t.headers=ft.from(t.headers),t.data=Ls.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),ou.getAdapter(t.adapter||no.adapter)(t).then(function(r){return Ms(t),r.data=Ls.call(t,t.transformResponse,r),r.headers=ft.from(r.headers),r},function(r){return su(r)||(Ms(t),r&&r.response&&(r.response.data=Ls.call(t,t.transformResponse,r.response),r.response.headers=ft.from(r.response.headers))),Promise.reject(r)})}const $a=t=>t instanceof ft?t.toJSON():t;function bn(t,e){e=e||{};const n={};function r(l,f,u){return v.isPlainObject(l)&&v.isPlainObject(f)?v.merge.call({caseless:u},l,f):v.isPlainObject(f)?v.merge({},f):v.isArray(f)?f.slice():f}function s(l,f,u){if(v.isUndefined(f)){if(!v.isUndefined(l))return r(void 0,l,u)}else return r(l,f,u)}function i(l,f){if(!v.isUndefined(f))return r(void 0,f)}function o(l,f){if(v.isUndefined(f)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function a(l,f,u){if(u in e)return r(l,f);if(u in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,f)=>s($a(l),$a(f),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(f){const u=c[f]||s,h=u(t[f],e[f],f);v.isUndefined(h)&&u!==a||(n[f]=h)}),n}const au="1.6.2",ro={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ro[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ha={};ro.transitional=function(e,n,r){function s(i,o){return"[Axios v"+au+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new J(s(o," has been removed"+(n?" in "+n:"")),J.ERR_DEPRECATED);return n&&!Ha[o]&&(Ha[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function gb(t,e,n){if(typeof t!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new J("option "+i+" must be "+c,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J("Unknown option "+i,J.ERR_BAD_OPTION)}}const hi={assertOptions:gb,validators:ro},bt=hi.validators;class Wr{constructor(e){this.defaults=e,this.interceptors={request:new La,response:new La}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=bn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&hi.assertOptions(r,{silentJSONParsing:bt.transitional(bt.boolean),forcedJSONParsing:bt.transitional(bt.boolean),clarifyTimeoutError:bt.transitional(bt.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:hi.assertOptions(s,{encode:bt.function,serialize:bt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=ft.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let f,u=0,h;if(!c){const m=[Ba.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,l),h=m.length,f=Promise.resolve(n);u<h;)f=f.then(m[u++],m[u++]);return f}h=a.length;let g=n;for(u=0;u<h;){const m=a[u++],y=a[u++];try{g=m(g)}catch(k){y.call(this,k);break}}try{f=Ba.call(this,g)}catch(m){return Promise.reject(m)}for(u=0,h=l.length;u<h;)f=f.then(l[u++],l[u++]);return f}getUri(e){e=bn(this.defaults,e);const n=iu(e.baseURL,e.url);return eu(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Wr.prototype[e]=function(n,r){return this.request(bn(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(bn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Wr.prototype[e]=n(),Wr.prototype[e+"Form"]=n(!0)});const Ar=Wr;class so{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new ar(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new so(function(s){e=s}),cancel:e}}}const _b=so;function yb(t){return function(n){return t.apply(null,n)}}function bb(t){return v.isObject(t)&&t.isAxiosError===!0}const pi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pi).forEach(([t,e])=>{pi[e]=t});const vb=pi;function cu(t){const e=new Ar(t),n=jl(Ar.prototype.request,e);return v.extend(n,Ar.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return cu(bn(t,s))},n}const _e=cu(no);_e.Axios=Ar;_e.CanceledError=ar;_e.CancelToken=_b;_e.isCancel=su;_e.VERSION=au;_e.toFormData=ps;_e.AxiosError=J;_e.Cancel=_e.CanceledError;_e.all=function(e){return Promise.all(e)};_e.spread=yb;_e.isAxiosError=bb;_e.mergeConfig=bn;_e.AxiosHeaders=ft;_e.formToJSON=t=>ru(v.isHTMLForm(t)?new FormData(t):t);_e.getAdapter=ou.getAdapter;_e.HttpStatusCode=vb;_e.default=_e;const Eb=_e,lu=Ge([]),uu=Ge(1),mi=Ge(!1),fu=Ge(1),du=Ge(8),wb=Ge(null),hu=Eb.create({baseURL:"",auth:{username:"tester@testing.com",password:"abc123!"}}),Ib=async()=>{mi.value=!0;const{data:t,headers:e}=await hu.get("/api/islands",{params:{page:fu.value,size:du.value}});lu.value=t,uu.value=Number(e["x-total-pages"])||1,mi.value=!1},Tb=async t=>{const{data:e}=await hu.get(`/api/islands/${t}`);currentSongs.value=e,console.log(e)},pu=()=>({islands:lu,pages:uu,activePage:fu,loading:mi,pageSize:du,getIslands:Ib,fetchislands:Tb,currentislands:wb});const Sb={class:"card-image"},Rb=["src"],Cb={class:"card-details"},Ab={class:"card-details-artist font-poppins"},Ob={class:"card-details-title font-poppins"},Pb={__name:"MainCardSingle",props:{island:{type:Object,required:!0,default:()=>({islandID:"123",name:"john doe",image:"url"})}},setup(t){const e=t,n=()=>{console.log(`${e.island.name} selected`)};return(r,s)=>{const i=Li("RouterLink");return e.island.islandID?(Ee(),Dr(i,{key:0,to:`/api/islands/${e.island.islandID}`},{default:Wt(()=>[le("div",{class:"card",onClick:n},[le("div",Sb,[le("img",{src:e.island.image,alt:"",srcset:""},null,8,Rb)]),le("div",Cb,[le("p",Ab,Or(e.island.artist),1),le("p",Ob,Or(e.island.title),1)])])]),_:1},8,["to"])):ud("",!0)}}},kb=mt(Pb,[["__scopeId","data-v-fd8aa493"]]);const Nb=t=>(Qr("data-v-ea2a3ffd"),t=t(),Zr(),t),xb={class:"sub-wrapper"},Db=Nb(()=>le("div",null,"Loading...",-1)),Lb={__name:"MainCards",setup(t){const{islands:e}=pu();return(n,r)=>(Ee(),Je("div",xb,[(Ee(),Dr(wf,null,{fallback:Wt(()=>[Db]),default:Wt(()=>[(Ee(!0),Je(Ve,null,Wf(Le(e),s=>(Ee(),Dr(kb,{key:s.islandID,island:s},null,8,["island"]))),128))]),_:1}))]))}},Mb=mt(Lb,[["__scopeId","data-v-ea2a3ffd"]]);const Ub={class:"wrapper"},Fb={__name:"MainPage",setup(t){const{getIslands:e,loading:n}=pu();return Di(async()=>{await e()}),(r,s)=>(Ee(),Je("div",Ub,[he(ry),he(Mb)]))}},Bb=mt(Fb,[["__scopeId","data-v-754fa09f"]]);const $b=t=>(Qr("data-v-cffda2ad"),t=t(),Zr(),t),Hb=["onSubmit"],jb=$b(()=>le("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Log In",-1)),Vb={__name:"LoginPage",setup(t){const{login:e,logout:n}=Qi(),r=ep(),s=tp(),i=Ge(""),o=Ge(""),a=async()=>{await e(i.value,o.value)?s.query.redircet?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(Ee(),Je("form",{class:"login-form",onSubmit:zd(a,["prevent"])},[zs(le("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>i.value=f),type:"text",placeholder:"Username"},null,512),[[Bo,i.value]]),zs(le("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f),type:"password",placeholder:"Password"},null,512),[[Bo,o.value]]),jb],40,Hb))}},Wb=mt(Vb,[["__scopeId","data-v-cffda2ad"]]),zb={};function Kb(t,e){return Ee(),Je("h1",null,"This is a page summarizing the project that I am creating for the final submission for citp 4420")}const qb=mt(zb,[["render",Kb]]);const Jb={},Gb=t=>(Qr("data-v-010f9c03"),t=t(),Zr(),t),Yb={class:"not-found"},Xb=Gb(()=>le("br",null,null,-1));function Qb(t,e){return Ee(),Je("h2",Yb,[cn(" 404"),Xb,cn(" Page Not Found")])}const Zb=mt(Jb,[["render",Qb],["__scopeId","data-v-010f9c03"]]),{isAuthenticated:ev}=Qi(),tv=[{path:"/",name:"Home",component:Bb},{path:"/login",name:"Login",component:Wb},{path:"/summary",name:"Summary",component:qb,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Zb}],io=Qh({history:ph(),routes:tv});io.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!ev.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const nv={class:"wrapper"},rv={class:"brand-title"},sv={class:"menu"},iv={class:"px-2 py-4"},ov={key:0},av={key:1},cv={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=Qi(),s=Ge("ISLAND TIME DISCOVERY");return(i,o)=>{var c;const a=Li("RouterLink");return Ee(),Je("nav",null,[le("div",nv,[he(a,{to:{name:"Home"},class:"brand"},{default:Wt(()=>[le("span",rv,Or(s.value),1)]),_:1}),le("div",sv,[zs(le("p",iv,[cn("Welcome back, "),le("strong",null,[le("i",null,Or((c=Le(r))==null?void 0:c.email),1)])],512),[[Kd,Le(e)]]),Le(e)?(Ee(),Je("div",ov,[he(a,{to:{name:"Summary"},href:"#",class:"menu-item"},{default:Wt(()=>[cn("Summary")]),_:1}),le("button",{href:"#",class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>Le(n)&&Le(n)(...l))},"Logout")])):(Ee(),Je("div",av,[he(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:Wt(()=>[cn("Login")]),_:1})]))])])])}}},lv=mt(cv,[["__scopeId","data-v-f560857f"]]);const uv={class:"card"},fv={__name:"App",setup(t){return(e,n)=>{const r=Li("RouterView");return Ee(),Je("main",null,[le("div",uv,[he(lv),he(r)])])}}},dv=mt(fv,[["__scopeId","data-v-cb16780e"]]);Gd(dv).use(io).mount("#app");
