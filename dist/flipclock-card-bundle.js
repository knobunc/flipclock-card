/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e,t,i,n){var o,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${o}`);class s{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],s=document.createTreeWalker(t.content,133,null,!1);let l=0,h=-1,f=0;const{strings:d,values:{length:p}}=e;for(;f<p;){const e=s.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)a(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=d[f],i=u.exec(t)[2],n=i.toLowerCase()+"$lit$",o=e.getAttribute(n);e.removeAttribute(n);const s=o.split(r);this.parts.push({type:"attribute",index:h,name:i,strings:s}),f+=s.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,o=t.split(r),s=o.length-1;for(let t=0;t<s;t++){let i,r=o[t];if(""===r)i=c();else{const e=u.exec(r);null!==e&&a(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}n.insertBefore(i,e),this.parts.push({type:"node",index:++h})}""===o[s]?(n.insertBefore(c(),e),i.push(e)):e.data=o[s],f+=s}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&h!==l||(h++,t.insertBefore(c(),e)),l=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(i.push(e),h--),f++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),f++}}else s.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const a=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:n}=e,o=document.createTreeWalker(i,133,null,!1);let r=d(n),s=n[r],a=-1,l=0;const c=[];let u=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(c.push(e),null===u&&(u=e)),null!==u&&l++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-l,r=d(n,r),s=n[r]}c.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},d=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(l(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,m=e=>"function"==typeof e&&p.has(e),g={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let r,s=0,a=0,c=o.nextNode();for(;s<n.length;)if(r=n[s],l(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=i.pop(),c=o.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const k=` ${n} `;class _{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const e=this.strings[r],s=e.lastIndexOf("\x3c!--");i=(s>-1||i)&&-1===e.indexOf("--\x3e",s+1);const a=u.exec(e);t+=null===a?e+(i?k:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=e=>null===e||!("object"==typeof e||"function"==typeof e),w=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let n=0;n<t;n++){i+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(b(e)||!w(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||b(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(b(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):w(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const o of e)i=t[n],void 0===i&&(i=new x(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(o),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class A extends S{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new z(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class z extends N{}let C=!1;(()=>{try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class O{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=P(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const P=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function D(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(n);return i=t.keyString.get(o),void 0===i&&(i=new s(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const j=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,n){const o=t[0];if("."===o){return new A(e,t.slice(1),i).parts}return"@"===o?[new O(e,t.slice(1),n.eventContext)]:"?"===o?[new T(e,t.slice(1),i)]:new S(e,t,i).parts}handleTextExpression(e){return new x(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const V=(e,...t)=>new _(e,t,"html",L)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,$=(e,t)=>`${e}--${t}`;let E=!0;void 0===window.ShadyCSS?E=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),E=!1);const H=e=>t=>{const i=$(t.type,e);let o=j.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},j.set(i,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(n);if(r=o.keyString.get(a),void 0===r){const i=t.getTemplateElement();E&&window.ShadyCSS.prepareTemplateDom(i,e),r=new s(t,i),o.keyString.set(a,r)}return o.stringsArray.set(t.strings,r),r},R=["html","svg"],F=new Set,U=(e,t,i)=>{F.add(e);const n=i?i.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let e=0;e<r;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{R.forEach(t=>{const i=j.get($(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),h(e,i)})})})(e);const a=n.content;i?function(e,t,i=null){const{element:{content:n},parts:o}=e;if(null==i)return void n.appendChild(t);const r=document.createTreeWalker(n,133,null,!1);let s=d(o),a=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===i&&(a=f(t),i.parentNode.insertBefore(t,i));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=d(o,s);return}s=d(o,s)}}}(i,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const I={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},q=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:q};class B extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this._requestUpdate(e,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=q){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||I,o="function"==typeof n?n:n.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||I.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=W){const n=this.constructor,o=n._attributeNameForProperty(e,i);if(void 0!==o){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const n=this.constructor,o=n.getPropertyOptions(e);n._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}B.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function J(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):G(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Z={};class X extends B{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),n=[];i.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Z&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Z}}X.finalized=!0,X.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const o=n.scopeName,r=M.has(t),s=E&&11===t.nodeType&&!!t.host,a=s&&!F.has(o),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let o=M.get(t);void 0===o&&(i(t,t.firstChild),M.set(t,o=new x(Object.assign({templateFactory:D},n))),o.appendInto(t)),o.setValue(e),o.commit()})(e,l,Object.assign({templateFactory:H(o)},n)),a){const e=M.get(l);M.delete(l);const n=e.value instanceof v?e.value.template:void 0;U(o,l,n),i(t,t.firstChild),t.appendChild(l),M.set(t,e)}!r&&s&&window.ShadyCSS.styleElement(t.host)};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var K=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){e.exports=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e,t,i){return(l=a()?Reflect.construct:function(e,t,i){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return i&&s(o,i.prototype),o}).apply(null,arguments)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return function(){var t,i=r(e);if(a()){var n=r(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return c(this,t)}}function h(e,t,i){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function f(e){throw Error(e)}function d(e){if(T(e)){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return e.call.apply(e,[this].concat(i))}}function p(e){return k(e=function(e){return k(e)||e<0}(e)?Math.ceil(e):Math.floor(e))?("-"+e).toString():e}function m(e){return!b(e)&&!_(e)}function g(e){return function(t){return t.map(e).reduce((function(e,t){return e.concat(t)}),[])}}function y(e){return g((function(e){return e}))(e)}function v(e){return g((function(e){return Array.isArray(e)?v(e):e}))(e)}function k(e){return 1/Math.round(e)==-1/0}function _(e){return null===e}function b(e){return void 0===e}function w(e){return e instanceof Function&&!!e.name}function S(e){return"string"==typeof e}function N(e){return e instanceof Array}function x(t){var i=e(t);return null!=t&&!N(t)&&("object"==i||"function"==i)}function T(e){return e instanceof Function}function A(e){return!isNaN(e)}var z=function(){function e(i){t(this,e),this.setAttribute(Object.assign({events:{}},i))}return n(e,[{key:"emit",value:function(e){for(var t=this,i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return this.events[e]&&this.events[e].forEach((function(e){e.apply(t,n)})),this}},{key:"on",value:function(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}},{key:"off",value:function(e,t){return this.events[e]&&t?this.events[e]=this.events[e].filter((function(e){return e!==t})):this.events[e]=[],this}},{key:"once",value:function(e,t){var i,n,o=this;return i=t,n=function(){return o.off(e,t)},t=function(){return n(i())},this.on(e,t,!0)}},{key:"getAttribute",value:function(e){return this.hasOwnProperty(e)?this[e]:null}},{key:"getAttributes",value:function(){var e=this,t={};return Object.getOwnPropertyNames(this).forEach((function(i){t[i]=e.getAttribute(i)})),t}},{key:"getPublicAttributes",value:function(){var e=this;return Object.keys(this.getAttributes()).filter((function(e){return!e.match(/^\$/)})).reduce((function(t,i){return t[i]=e.getAttribute(i),t}),{})}},{key:"setAttribute",value:function(e,t){x(e)?this.setAttributes(e):this[e]=t}},{key:"setAttributes",value:function(e){for(var t in e)this.setAttribute(t,e[t])}},{key:"callback",value:function(e){return d.call(this,e)}},{key:"name",get:function(){return this.constructor.defineName instanceof Function||f("Every class must define its name."),this.constructor.defineName()}},{key:"events",get:function(){return this.$events||{}},set:function(e){this.$events=e}}],[{key:"make",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return l(this,t)}}]),e}();function C(e,t){return t=Object.assign({minimumDigits:0,prependLeadingZero:!0},t),function(e,t){var i=v(e).length;if(i<t)for(var n=0;n<t-i;n++)e[0].unshift("0");return e}(y([e]).map((function(e){return y(v([e]).map((function(e){return function(e){return(t.prependLeadingZero&&1===e.toString().split("").length?"0":"").concat(e)}(e).split("")})))})),t.minimumDigits||0)}var O=[{min:48,max:57},{min:65,max:90},{min:97,max:122}];function P(e,t){switch(t){case"number":return parseFloat(e)}return e}function D(e,t){return String.fromCharCode(t(function(e){for(var t in O){var i=e.toString().charCodeAt(0);if(O[t].min<=i&&O[t].max>=i)return O[t]}return null}(e),e.charCodeAt(0)))}var j=function(e){o(r,e);var i=u(r);function r(e,n){var o;return t(this,r),(o=i.call(this,Object.assign({format:function(e){return e},prependLeadingZero:!0,minimumDigits:0},n))).value||(o.value=e),o}return n(r,[{key:"isNaN",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return isNaN(this.value)}))},{key:"isNumber",value:function(){return A()}},{key:"clone",value:function(e,t){return new this.constructor(e,Object.assign(this.getPublicAttributes(),t))}},{key:"digits",get:function(){return this.$digits},set:function(e){this.$digits=e,this.minimumDigits=Math.max(this.minimumDigits,function(e){return v(e).length}(e))}},{key:"value",get:function(){return this.$value},set:function(e){this.$value=e,this.digits=C(this.format(e),{minimumDigits:this.minimumDigits,prependLeadingZero:this.prependLeadingZero})}}],[{key:"defineName",value:function(){return"FaceValue"}}]),r}(z);function M(t){for(var i=!1,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return y(o).forEach((function(n){(_(t)&&_(n)||x(n)&&t instanceof n||T(n)&&!w(n)&&!0===n(t)||S(n)&&e(t)===n)&&(i=!0)})),i}var L={className:"The className() is not defined.",items:"The items property must be an array.",theme:"The theme property must be an object.",language:"The language must be an object.",date:"The value must be an instance of a Date.",face:"The face must be an instance of a Face class.",element:"The element must be an instance of an HTMLElement",faceValue:"The face must be an instance of a FaceValue class.",timer:"The timer property must be an instance of a Timer class."},V=function(e){o(r,e);var i=u(r);function r(e,n){var o;return t(this,r),e instanceof j||!x(e)||(n=e,e=void 0),(o=i.call(this)).setAttributes(Object.assign({autoStart:!0,countdown:!1,animationRate:500},o.defaultAttributes(),n||{})),(_(e)||b(e))&&(e=o.defaultValue()),e&&(o.value=e),o}return n(r,[{key:"interval",value:function(e,t){return this.countdown?this.decrement(e):this.increment(e),d.call(e,t),this.shouldStop(e)&&e.stop(),e.emit("interval")}},{key:"shouldStop",value:function(e){return!b(this.stopAt)&&this.stopAt===e.value.value}},{key:"format",value:function(e,t){return t}},{key:"defaultValue",value:function(){}},{key:"defaultAttributes",value:function(){}},{key:"defaultDataType",value:function(){}},{key:"increment",value:function(e,t){}},{key:"decrement",value:function(e,t){}},{key:"started",value:function(e){}},{key:"stopped",value:function(e){}},{key:"reset",value:function(e){}},{key:"initialized",value:function(e){}},{key:"rendered",value:function(e){}},{key:"mounted",value:function(e){this.autoStart&&e.timer.isStopped&&window.requestAnimationFrame((function(){return e.start(e)}))}},{key:"createFaceValue",value:function(e,t){var i=this;return j.make(T(t)&&!t.name?t():t,{minimumDigits:this.minimumDigits,format:function(t){return i.format(e,t)}})}},{key:"dataType",get:function(){return this.defaultDataType()}},{key:"value",get:function(){return this.$value},set:function(e){e instanceof j||(e=this.createFaceValue(e)),this.$value=e}},{key:"stopAt",get:function(){return this.$stopAt},set:function(e){this.$stopAt=e}},{key:"originalValue",get:function(){return this.$originalValue},set:function(e){this.$originalValue=e}}]),r}(z),$=Object.freeze({__proto__:null,dictionary:{years:"سنوات",months:"شهور",days:"أيام",hours:"ساعات",minutes:"دقائق",seconds:"ثواني"},aliases:["ar","ar-ar","arabic"]}),E=Object.freeze({__proto__:null,dictionary:{years:"Anys",months:"Mesos",days:"Dies",hours:"Hores",minutes:"Minuts",seconds:"Segons"},aliases:["ca","ca-es","catalan"]}),H=Object.freeze({__proto__:null,dictionary:{years:"Roky",months:"Měsíce",days:"Dny",hours:"Hodiny",minutes:"Minuty",seconds:"Sekundy"},aliases:["cs","cs-cz","cz","cz-cs","czech"]}),R=Object.freeze({__proto__:null,dictionary:{years:"År",months:"Måneder",days:"Dage",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},aliases:["da","da-dk","danish"]}),F=Object.freeze({__proto__:null,dictionary:{years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},aliases:["de","de-de","german"]}),U=Object.freeze({__proto__:null,dictionary:{years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},aliases:["en","en-us","english"]}),I=Object.freeze({__proto__:null,dictionary:{years:"Años",months:"Meses",days:"Días",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},aliases:["es","es-es","spanish"]}),q=Object.freeze({__proto__:null,dictionary:{years:"سال",months:"ماه",days:"روز",hours:"ساعت",minutes:"دقیقه",seconds:"ثانیه"},aliases:["fa","fa-ir","persian"]}),W=Object.freeze({__proto__:null,dictionary:{years:"Vuotta",months:"Kuukautta",days:"Päivää",hours:"Tuntia",minutes:"Minuuttia",seconds:"Sekuntia"},aliases:["fi","fi-fi","finnish"]}),B=Object.freeze({__proto__:null,dictionary:{years:"Ans",months:"Mois",days:"Jours",hours:"Heures",minutes:"Minutes",seconds:"Secondes"},aliases:["fr","fr-ca","french"]}),G=Object.freeze({__proto__:null,dictionary:{years:"שנים",months:"חודש",days:"ימים",hours:"שעות",minutes:"דקות",seconds:"שניות"},aliases:["il","he-il","hebrew"]}),J=Object.freeze({__proto__:null,dictionary:{years:"Év",months:"Hónap",days:"Nap",hours:"Óra",minutes:"Perc",seconds:"Másodperc"},aliases:["hu","hu-hu","hungarian"]}),Y=Object.freeze({__proto__:null,dictionary:{years:"Anni",months:"Mesi",days:"Giorni",hours:"Ore",minutes:"Minuti",seconds:"Secondi"},aliases:["da","da-dk","danish"]}),Z=Object.freeze({__proto__:null,dictionary:{years:"年",months:"月",days:"日",hours:"時",minutes:"分",seconds:"秒"},aliases:["jp","ja-jp","japanese"]}),X=Object.freeze({__proto__:null,dictionary:{years:"년",months:"월",days:"일",hours:"시",minutes:"분",seconds:"초"},aliases:["ko","ko-kr","korean"]}),K=Object.freeze({__proto__:null,dictionary:{years:"Gadi",months:"Mēneši",days:"Dienas",hours:"Stundas",minutes:"Minūtes",seconds:"Sekundes"},aliases:["lv","lv-lv","latvian"]}),Q=Object.freeze({__proto__:null,dictionary:{years:"Jaren",months:"Maanden",days:"Dagen",hours:"Uren",minutes:"Minuten",seconds:"Seconden"},aliases:["nl","nl-be","dutch"]}),ee=Object.freeze({__proto__:null,dictionary:{years:"År",months:"Måneder",days:"Dager",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},aliases:["no","nb","no-nb","norwegian"]}),te=Object.freeze({__proto__:null,dictionary:{years:"Lat",months:"Miesięcy",days:"Dni",hours:"Godziny",minutes:"Minuty",seconds:"Sekundy"},aliases:["pl","pl-pl","polish"]}),ie=Object.freeze({__proto__:null,dictionary:{years:"Anos",months:"Meses",days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},aliases:["pt","pt-br","portuguese"]}),ne=Object.freeze({__proto__:null,dictionary:{years:"Ani",months:"Luni",days:"Zile",hours:"Ore",minutes:"Minute",seconds:"sSecunde"},aliases:["ro","ro-ro","romana"]}),oe=Object.freeze({__proto__:null,dictionary:{years:"лет",months:"месяцев",days:"дней",hours:"часов",minutes:"минут",seconds:"секунд"},aliases:["ru","ru-ru","russian"]}),re=Object.freeze({__proto__:null,dictionary:{years:"Roky",months:"Mesiace",days:"Dni",hours:"Hodiny",minutes:"Minúty",seconds:"Sekundy"},aliases:["sk","sk-sk","slovak"]}),se=Object.freeze({__proto__:null,dictionary:{years:"År",months:"Månader",days:"Dagar",hours:"Timmar",minutes:"Minuter",seconds:"Sekunder"},aliases:["sv","sv-se","swedish"]}),ae=Object.freeze({__proto__:null,dictionary:{years:"ปี",months:"เดือน",days:"วัน",hours:"ชั่วโมง",minutes:"นาที",seconds:"วินาที"},aliases:["th","th-th","thai"]}),le=Object.freeze({__proto__:null,dictionary:{years:"Yıl",months:"Ay",days:"Gün",hours:"Saat",minutes:"Dakika",seconds:"Saniye"},aliases:["tr","tr-tr","turkish"]}),ce=Object.freeze({__proto__:null,dictionary:{years:"роки",months:"місяці",days:"дні",hours:"години",minutes:"хвилини",seconds:"секунди"},aliases:["ua","ua-ua","ukraine"]}),ue=Object.freeze({__proto__:null,dictionary:{years:"Năm",months:"Tháng",days:"Ngày",hours:"Giờ",minutes:"Phút",seconds:"Giây"},aliases:["vn","vn-vn","vietnamese"]}),he=Object.freeze({__proto__:null,dictionary:{years:"年",months:"月",days:"日",hours:"时",minutes:"分",seconds:"秒"},aliases:["zh","zh-cn","chinese"]}),fe=Object.freeze({__proto__:null,dictionary:{years:"年",months:"月",days:"日",hours:"時",minutes:"分",seconds:"秒"},aliases:["zh-tw"]}),de=Object.freeze({__proto__:null,Arabic:$,Catalan:E,Czech:H,Danish:R,German:F,English:U,Spanish:I,Persian:q,Finnish:W,French:B,Hebrew:G,Hungarian:J,Italian:Y,Japanese:Z,Korean:X,Latvian:K,Dutch:Q,Norwegian:ee,Polish:te,Portuguese:ie,Romanian:ne,Russian:oe,Slovak:re,Swedish:se,Thai:ae,Turkish:le,Ukrainian:ce,Vietnamese:ue,Chinese:he,TraditionalChinese:fe});function pe(e){return e?de[e.toLowerCase()]||Object.values(de).find((function(t){return-1!==t.aliases.indexOf(e)})):null}function me(e,t){return N(t)&&t.filter(m).forEach((function(t){t instanceof HTMLElement&&e.appendChild(t)})),e}function ge(e,t,i){return e instanceof HTMLElement||(e=document.createElement(e)),function(e,t){if(x(t))for(var i in t)e.setAttribute(i,t[i])}(e,x(t)?t:i),x(t)||N(t)?me(e,t):e.innerHTML=t,e}var ye=function(e){o(r,e);var i=u(r);function r(e){var n;if(t(this,r),(n=i.call(this,Object.assign({parent:null},e))).theme||f("".concat(n.name," does not have a theme defined.")),n.language||f("".concat(n.name," does not have a language defined.")),!n.theme[n.name])throw new Error("".concat(n.name," cannot be rendered because it has no template."));return n}return n(r,[{key:"translate",value:function(e){return function(e,t){var i=S(t)?pe(t):t;return(i.dictionary||i)[e]||e}(e,this.language)}},{key:"t",value:function(e){return this.translate(e)}},{key:"render",value:function(){var e,t,i=ge("div",{class:"flip-clock"===this.className?this.className:"flip-clock-"+this.className});return this.theme[this.name](i,this),this.el?this.el.innerHTML!==i.innerHTML&&(this.el=(e=i,(t=this.el).parentNode?(t.parentNode.replaceChild(e,t),e):t)):this.el=i,this.el}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.render(),this.parent=e,t?this.parent.insertBefore(this.el,t):this.parent.appendChild(this.el),this.el}},{key:"className",get:function(){return this.constructor.defineName().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}},{key:"el",get:function(){return this.$el},set:function(e){M(e,null,HTMLElement)||f(L.element),this.$el=e}},{key:"parent",get:function(){return this.$parent},set:function(e){this.$parent=e}},{key:"theme",get:function(){return this.$theme},set:function(e){M(e,"object")||f(L.value),this.$theme=e}},{key:"language",get:function(){return this.$language},set:function(e){S(e)&&(e=pe(e)),M(e,"object")||f(L.language),this.$language=e}}]),r}(z),ve=function(e){o(r,e);var i=u(r);function r(){return t(this,r),i.apply(this,arguments)}return n(r,null,[{key:"defineName",value:function(){return"Divider"}}]),r}(ye),ke=function(e){o(r,e);var i=u(r);function r(e,n){return t(this,r),i.call(this,Object.assign({value:e},x(e)?e:null,n))}return n(r,null,[{key:"defineName",value:function(){return"ListItem"}}]),r}(ye),_e=function(e){o(r,e);var i=u(r);function r(e,n){return t(this,r),i.call(this,Object.assign({value:e,items:[]},x(e)?e:null,n))}return n(r,[{key:"createListItem",value:function(e,t){var i=new ke(e,Object.assign({theme:this.theme,language:this.language},t));return this.$items.push(i),i}},{key:"value",get:function(){return this.$value},set:function(e){this.$value=e}},{key:"items",get:function(){return this.$items},set:function(e){this.$items=e}}],[{key:"defineName",value:function(){return"List"}}]),r}(ye),be=function(e){o(r,e);var i=u(r);function r(e,n){return t(this,r),i.call(this,Object.assign({items:N(e)?e:[]},x(e)?e:null,n))}return n(r,null,[{key:"defineName",value:function(){return"Group"}}]),r}(ye),we=function(e){o(r,e);var i=u(r);function r(e,n){return t(this,r),i.call(this,Object.assign({label:e},x(e)?e:null,n))}return n(r,null,[{key:"defineName",value:function(){return"Label"}}]),r}(ye),Se=function(e){o(r,e);var i=u(r);function r(e){return t(this,r),i.call(this,Object.assign({count:0,handle:null,started:null,running:!1,interval:A(e)?e:null},x(e)?e:null))}return n(r,[{key:"reset",value:function(e){var t=this;return this.stop((function(){t.count=0,t.start((function(){return d.call(t,e)})),t.emit("reset")})),this}},{key:"start",value:function(e){var t=this;return this.started=new Date,this.lastLoop=Date.now(),this.running=!0,this.emit("start"),function i(){return Date.now()-t.lastLoop>=t.interval&&(d.call(t,e),t.lastLoop=Date.now(),t.emit("interval"),t.count++),t.handle=window.requestAnimationFrame(i),t}()}},{key:"stop",value:function(e){var t=this;return this.isRunning&&setTimeout((function(){window.cancelAnimationFrame(t.handle),t.running=!1,d.call(t,e),t.emit("stop")})),this}},{key:"elapsed",get:function(){return this.lastLoop?this.lastLoop-(this.started?this.started.getTime():(new Date).getTime()):0}},{key:"isRunning",get:function(){return!0===this.running}},{key:"isStopped",get:function(){return!1===this.running}}],[{key:"defineName",value:function(){return"Timer"}}]),r}(z),Ne=function(e){o(r,e);var i=u(r);function r(){return t(this,r),i.apply(this,arguments)}return n(r,[{key:"increment",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.value=this.value.value+t}},{key:"decrement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.value=this.value.value-t}}],[{key:"defineName",value:function(){return"Counter"}}]),r}(V),xe=function(e){o(r,e);var i=u(r);function r(){return t(this,r),i.apply(this,arguments)}return n(r,[{key:"defaultDataType",value:function(){return Date}},{key:"defaultAttributes",value:function(){return{showSeconds:!0,showLabels:!0}}},{key:"shouldStop",value:function(e){if(_(e.stopAt)||b(e.stopAt))return!1;if(this.stopAt instanceof Date)return this.countdown?this.stopAt.getTime()>=this.value.value.getTime():this.stopAt.getTime()<=this.value.value.getTime();if(A(this.stopAt)){var t=Math.floor((this.value.value.getTime()-this.originalValue.getTime())/1e3);return this.countdown?this.stopAt>=t:this.stopAt<=t}throw new Error("the stopAt property must be an instance of Date or Number.")}},{key:"increment",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.value=new Date(this.value.value.getTime()+t+((new Date).getTime()-e.timer.lastLoop))}},{key:"decrement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.value=new Date(this.value.value.getTime()-t-((new Date).getTime()-e.timer.lastLoop))}},{key:"format",value:function(e,t){var i=e.timer.isRunning?e.timer.started:new Date;return[[this.getMinutes(t,i)],this.showSeconds?[this.getSeconds(t,i)]:null].filter(m)}},{key:"getMinutes",value:function(e,t){return p(this.getTotalSeconds(e,t)/60)}},{key:"getSeconds",value:function(e,t){var i=this.getTotalSeconds(e,t);return Math.abs(Math.ceil(60===i?0:i%60))}},{key:"getTotalSeconds",value:function(e,t){return e.getTime()===t.getTime()?0:Math.round((e.getTime()-t.getTime())/1e3)}}],[{key:"defineName",value:function(){return"MinuteCounter"}}]),r}(V),Te=function(e){o(s,e);var i=u(s);function s(){return t(this,s),i.apply(this,arguments)}return n(s,[{key:"format",value:function(e,t){var i=e.timer.started?e.timer.started:new Date,n=t||e.originalValue,o=this.countdown?n:i,r=this.countdown?i:n,s=[[this.getHours(o,r)],[this.getMinutes(o,r)]];return this.showSeconds&&s.push([this.getSeconds(o,r)]),s}},{key:"getMinutes",value:function(e,t){return Math.abs(h(r(s.prototype),"getMinutes",this).call(this,e,t)%60)}},{key:"getHours",value:function(e,t){return Math.floor(this.getTotalSeconds(e,t)/60/60)}}],[{key:"defineName",value:function(){return"HourCounter"}}]),s}(xe),Ae=function(e){o(s,e);var i=u(s);function s(){return t(this,s),i.apply(this,arguments)}return n(s,[{key:"format",value:function(e,t){var i=e.started?t:new Date,n=t||e.originalValue,o=this.countdown?n:i,r=this.countdown?i:n,s=[[this.getDays(o,r)],[this.getHours(o,r)],[this.getMinutes(o,r)]];return this.showSeconds&&s.push([this.getSeconds(o,r)]),s}},{key:"getDays",value:function(e,t){return Math.floor(this.getTotalSeconds(e,t)/60/60/24)}},{key:"getHours",value:function(e,t){return Math.abs(h(r(s.prototype),"getHours",this).call(this,e,t)%24)}}],[{key:"defineName",value:function(){return"DayCounter"}}]),s}(Te),ze=function(e){o(r,e);var i=u(r);function r(){return t(this,r),i.apply(this,arguments)}return n(r,[{key:"defaultDataType",value:function(){return Date}},{key:"defaultValue",value:function(){return new Date}},{key:"defaultAttributes",value:function(){return{showSeconds:!0,showLabels:!1}}},{key:"format",value:function(e,t){t||(t=new Date);var i=[[t.getHours()],[t.getMinutes()]];return this.showSeconds&&i.push([t.getSeconds()]),i}},{key:"increment",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.value=new Date(this.value.value.getTime()+t+((new Date).getTime()-e.timer.lastLoop))}},{key:"decrement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.value=new Date(this.value.value.getTime()-t-((new Date).getTime()-e.timer.lastLoop))}}],[{key:"defineName",value:function(){return"TwentyFourHourClock"}}]),r}(V),Ce=function(e){o(r,e);var i=u(r);function r(){return t(this,r),i.apply(this,arguments)}return n(r,[{key:"defaultAttributes",value:function(){return{showLabels:!1,showSeconds:!0,showMeridium:!0}}},{key:"format",value:function(e,t){t||(t=new Date);var i=t.getHours(),n=[i>12?i-12:0===i?12:i,t.getMinutes()];return this.meridium=i>12?"pm":"am",this.showSeconds&&n.push(t.getSeconds()),n}}],[{key:"defineName",value:function(){return"TwelveHourClock"}}]),r}(ze),Oe=function(e){o(s,e);var i=u(s);function s(){return t(this,s),i.apply(this,arguments)}return n(s,[{key:"format",value:function(e,t){var i=e.timer.started?t:new Date,n=t||e.originalValue,o=this.countdown?n:i,r=this.countdown?i:n,s=[[this.getWeeks(o,r)],[this.getDays(o,r)],[this.getHours(o,r)],[this.getMinutes(o,r)]];return this.showSeconds&&s.push([this.getSeconds(o,r)]),s}},{key:"getWeeks",value:function(e,t){return Math.floor(this.getTotalSeconds(e,t)/60/60/24/7)}},{key:"getDays",value:function(e,t){return Math.abs(h(r(s.prototype),"getDays",this).call(this,e,t)%7)}}],[{key:"defineName",value:function(){return"WeekCounter"}}]),s}(Ae),Pe=function(e){o(s,e);var i=u(s);function s(){return t(this,s),i.apply(this,arguments)}return n(s,[{key:"format",value:function(e,t){var i=e.timer.started?t:new Date,n=t||e.originalValue,o=this.countdown?n:i,r=this.countdown?i:n,s=[[this.getYears(o,r)],[this.getWeeks(o,r)],[this.getDays(o,r)],[this.getHours(o,r)],[this.getMinutes(o,r)]];return this.showSeconds&&s.push([this.getSeconds(o,r)]),s}},{key:"getYears",value:function(e,t){return Math.floor(Math.max(0,this.getTotalSeconds(e,t)/60/60/24/7/52))}},{key:"getWeeks",value:function(e,t){return Math.abs(h(r(s.prototype),"getWeeks",this).call(this,e,t)%52)}}],[{key:"defineName",value:function(){return"YearCounter"}}]),s}(Oe),De=Object.freeze({__proto__:null,Counter:Ne,DayCounter:Ae,MinuteCounter:xe,HourCounter:Te,TwelveHourClock:Ce,TwentyFourHourClock:ze,WeekCounter:Oe,YearCounter:Pe});function je(e,t){return e?e.childNodes?e.childNodes[t]:e[t]:null}function Me(e,t){t.createDivider().mount(e,e.childNodes[1]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[3]),t.face.showLabels&&(t.createLabel("hours").mount(e.childNodes[0]),t.createLabel("minutes").mount(e.childNodes[2]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[4]))}var Le={face:Ne,theme:{Divider:function(e,t){me(e,[ge("div",{class:"flip-clock-dot top"}),ge("div",{class:"flip-clock-dot bottom"})])},FlipClock:function(e,t){var i=t.value.digits.map((function(e,i){var n=je(t.el?t.el.querySelectorAll(".flip-clock-group"):null,i),o=e.map((function(e,i){var o=function(e){return e?e.querySelector(".flip-clock-list-item:first-child .top").innerHTML:null}(je(n?n.querySelectorAll(".flip-clock-list"):null,i));return t.createList(e,{domValue:o,countdown:t.countdown,animationRate:t.face.animationRate||t.face.delay})}));return t.createGroup(o)}));me(e,i.map((function(e){return e.render()})))},Group:function(e,t){me(e,t.items.map((function(e){return e.render()})))},Label:function(e,t){e.innerHTML=t.t(t.label)},List:function(t,i){var n,o=i.domValue||(i.countdown?function(t){return P(t.toString().split("").map((function(e){return D(e,(function(e,t){return!e||t<e.max?t+1:e.min}))})).join(""),e(t))}(i.value):P((n=i.value).toString().split("").map((function(e){return D(e,(function(e,t){return!e||t>e.min?t-1:e.max}))})).join(""),e(n)));i.domValue&&i.domValue!==i.value&&t.classList.add("flip"),t.style.animationDelay="".concat(i.animationRate/2,"ms"),t.style.animationDuration="".concat(i.animationRate/2,"ms"),i.items=[i.createListItem(i.value,{active:!0}),i.createListItem(o,{active:!1})],me(t,i.items.map((function(e){return e.render()})))},ListItem:function(e,t){var i=!0===t.active?"active":!1===t.active?"before":null;e.classList.add(i),me(e,[ge("div",[ge("div",t.value,{class:"top"}),ge("div",t.value,{class:"bottom"})],{class:"flip-clock-list-item-inner"})])},faces:Object.freeze({__proto__:null,DayCounter:function(e,t){t.createDivider().mount(e,e.childNodes[1]),t.createDivider().mount(e,e.childNodes[3]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[5]),t.face.showLabels&&(t.createLabel("days").mount(e.childNodes[0]),t.createLabel("hours").mount(e.childNodes[2]),t.createLabel("minutes").mount(e.childNodes[4]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[6]))},HourCounter:function(e,t){t.createDivider().mount(e,e.childNodes[1]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[3]),t.face.showLabels&&(t.createLabel("hours").mount(e.childNodes[0]),t.createLabel("minutes").mount(e.childNodes[2]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[4]))},MinuteCounter:function(e,t){t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[1]),t.face.showLabels&&(t.createLabel("minutes").mount(e.childNodes[0]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[2]))},TwelveHourClock:function(e,t){if(Me(e,t),t.face.showMeridium&&t.face.meridium){var i=t.createLabel(t.face.meridium),n=e.childNodes[e.childNodes.length-1];i.mount(n).classList.add("flip-clock-meridium")}},TwentyFourHourClock:Me,WeekCounter:function(e,t){t.createDivider().mount(e,e.childNodes[1]),t.createDivider().mount(e,e.childNodes[3]),t.createDivider().mount(e,e.childNodes[5]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[7]),t.face.showLabels&&(t.createLabel("weeks").mount(e.childNodes[0]),t.createLabel("days").mount(e.childNodes[2]),t.createLabel("hours").mount(e.childNodes[4]),t.createLabel("minutes").mount(e.childNodes[6]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[8]))},YearCounter:function(e,t){t.createDivider().mount(e,e.childNodes[1]),t.createDivider().mount(e,e.childNodes[3]),t.createDivider().mount(e,e.childNodes[5]),t.createDivider().mount(e,e.childNodes[7]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[9]),t.face.showLabels&&(t.createLabel("years").mount(e.childNodes[0]),t.createLabel("weeks").mount(e.childNodes[2]),t.createLabel("days").mount(e.childNodes[4]),t.createLabel("hours").mount(e.childNodes[6]),t.createLabel("minutes").mount(e.childNodes[8]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[10]))}})},language:U};return function(e){o(s,e);var i=u(s);function s(e,n,o){var r;t(this,s),M(e,HTMLElement)||f(L.element),x(n)&&!o&&(o=n,n=void 0);var a=o.face||Le.face;return delete o.face,(r=i.call(this,Object.assign({originalValue:n,theme:Le.theme,language:Le.language,timer:Se.make(o.interval||1e3)},o))).face||(r.face=a),r.mount(e),r}return n(s,[{key:"mount",value:function(e){return h(r(s.prototype),"mount",this).call(this,e),this.face.mounted(this),this}},{key:"render",value:function(){return h(r(s.prototype),"render",this).call(this),this.theme.faces[this.face.name]&&this.theme.faces[this.face.name](this.el,this),this.face.rendered(this),this.el}},{key:"start",value:function(e){var t=this;return this.timer.started||(this.value=this.originalValue),b(this.face.stopAt)&&(this.face.stopAt=this.stopAt),b(this.face.originalValue)&&(this.face.originalValue=this.originalValue),this.timer.start((function(){t.face.interval(t,e)})),this.face.started(this),this.emit("start")}},{key:"stop",value:function(e){return this.timer.stop(e),this.face.stopped(this),this.emit("stop")}},{key:"reset",value:function(e){var t=this;return this.value=this.originalValue,this.timer.reset((function(){return t.interval(t,e)})),this.face.reset(this),this.emit("reset")}},{key:"increment",value:function(e){return this.face.increment(this,e),this}},{key:"decrement",value:function(e){return this.face.decrement(this,e),this}},{key:"createDivider",value:function(e){return ve.make(Object.assign({theme:this.theme,language:this.language},e))}},{key:"createList",value:function(e,t){return _e.make(e,Object.assign({theme:this.theme,language:this.language},t))}},{key:"createLabel",value:function(e,t){return we.make(e,Object.assign({theme:this.theme,language:this.language},t))}},{key:"createGroup",value:function(e,t){return be.make(e,Object.assign({theme:this.theme,language:this.language},t))}},{key:"face",get:function(){return this.$face},set:function(e){M(e,[V,"string","function"])||f(L.face),this.$face=(De[e]||e).make(Object.assign(this.getPublicAttributes(),{originalValue:this.face?this.face.originalValue:void 0})),this.$face.initialized(this),this.value?this.$face.value=this.face.createFaceValue(this,this.value.value):this.value||(this.value=this.originalValue),this.el&&this.render()}},{key:"stopAt",get:function(){return T(this.$stopAt)?this.$stopAt(this):this.$stopAt},set:function(e){this.$stopAt=e}},{key:"timer",get:function(){return this.$timer},set:function(e){M(e,Se)||f(L.timer),this.$timer=e}},{key:"value",get:function(){return this.face?this.face.value:null},set:function(e){if(!this.face)throw new Error("A face must be set before setting a value.");e instanceof j?this.face.value=e:this.value?this.face.value=this.face.value.clone(e):this.face.value=this.face.createFaceValue(this,e),this.el&&this.render()}},{key:"originalValue",get:function(){return T(this.$originalValue)&&!this.$originalValue.name?this.$originalValue():b(this.$originalValue)||_(this.$originalValue)?this.face?this.face.defaultValue():void 0:this.$originalValue},set:function(e){this.$originalValue=e}}],[{key:"defineName",value:function(){return"FlipClock"}},{key:"setDefaultFace",value:function(e){M(e,V)||f(L.face),Le.face=e}},{key:"setDefaultTheme",value:function(e){M(e,"object")||f(L.theme),Le.theme=e}},{key:"setDefaultLanguage",value:function(e){M(e,"object")||f(L.language),Le.language=e}},{key:"defaults",get:function(){return Le}}]),s}(ye)}()}));const Q=V`
  <style>
    .fc-content {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-areas:
        'fc-header fc-header fc-header'
        'fc-time fc-time fc-time'
        'fc-date fc-date fc-date'
        'fc-timezone fc-timezone fc-timezone';
      grid-template-columns: auto auto auto;
      grid-template-rows: auto 1fr auto auto;
    }

    .fc-header,
    .fc-date {
      grid-area: fc-header;
      color: var(--ha-card-header-color, --primary-text-color);
      font-family: var(--ha-card-header-font-family, inherit);
      font-size: var(--ha-card-header-font-size, 24px);
      font-weight: var(--paper-font-headline_-_font-weight);
      letter-spacing: var(--paper-font-headline_-_letter-spacing);
      line-height: var(--paper-font-headline_-_line-height);
      text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
      -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
      display: block;
    }

    .fc-header {
      padding: 24px 16px 16px;
    }

    .fc-date {
      text-align: center;
    }

    .fc-time {
      grid-area: fc-time;
    }

    .fc-date {
      grid-area: fc-date;
    }

    .fc-timezone {
      grid-area: fc-timezone;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 1em;
      color: var(--secondary-text-color);
    }

    .fc-timezone .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: initial;
    }

    .tz-time {
      margin-left: 40px;
    }

    .tz {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
    }

    .tz .tz-icon {
      flex: 0 0 40px;
    }

    .tz .tz-locale {
      flex: 1 0 60px;
    }

    .flip-clock {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .flip-clock {
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      font-size: 16px;
      -webkit-user-select: none;
      text-align: center;
      position: relative;
      display: flex;
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      box-sizing: border-box;
      align-items: flex-end;
      padding: 1em;
    }
    .flip-clock .flip-clock-group {
      display: flex;
      position: relative;
    }
    .flip-clock .flip-clock-group .flip-clock-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      font-size: 1em;
      height: 2em;
      line-height: 2em;
      font-weight: 400;
      text-transform: capitalize;
      transform: translateY(-100%);
    }
    .flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium {
      font-size: 1.75em;
      line-height: 1.75em;
      top: 50%;
      left: 100%;
      flex: 0;
      width: auto;
      text-transform: uppercase;
      font-weight: 200;
      transform: translate(0.5em, -50%);
    }
    .flip-clock .flip-clock-group .flip-clock-list {
      width: 4em;
      height: 6em;
      position: relative;
      border-radius: 0.75rem;
      box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.24), 0 3px 8px rgba(0, 0, 0, 0.05);
      font-weight: bold;
      color: #ccc;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(:last-child) {
      margin-right: 0.333em;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .active .flip-clock-list-item-inner {
      z-index: 4;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .flip-clock-list-item-inner .top:after,
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .flip-clock-list-item-inner .bottom:after {
      display: none;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip {
      animation-delay: 500ms;
      animation-duration: 500ms;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .flip-clock-list-item-inner {
      perspective: 15em;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .top,
    .flip-clock .flip-clock-group .flip-clock-list.flip .bottom,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before > div {
      animation-delay: inherit;
      animation-fill-mode: forwards;
      animation-duration: inherit;
      animation-timing-function: ease-in;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .bottom:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before > div:after {
      animation-duration: inherit;
      animation-fill-mode: inherit;
      animation-timing-function: inherit;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before {
      animation-delay: 0s;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .top {
      animation-name: flip-top;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .bottom:after {
      animation-name: show-shadow;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div {
      animation-name: indexing;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .bottom:after {
      animation-delay: calc(500ms * 0.15);
      animation-name: hide-shadow;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .bottom {
      animation-name: flip-bottom;
    }
    .flip-clock .flip-clock-group .flip-clock-list .active {
      z-index: 2;
    }
    .flip-clock .flip-clock-group .flip-clock-list .active .bottom {
      z-index: 2;
      transform-origin: top center;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before {
      z-index: 3;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .top {
      z-index: 2;
      transform-origin: bottom center;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .top:after {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%);
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .bottom:after {
      background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: rotateX(0.0001deg);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner:first-child {
      z-index: 2;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom {
      width: 100%;
      height: 50%;
      overflow: hidden;
      position: relative;
      font-size: 4.5em;
      background: #333;
      box-shadow: inset 0 0 0.2em rgba(0, 0, 0, 0.5);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top:after,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top:before,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom:before {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top {
      border-radius: 0.75rem 0.75rem 0 0;
      line-height: 1.33333;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:after {
      border-radius: 0.75rem 0.75rem 0 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:before {
      background: #333;
      opacity: 0.4;
      bottom: 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom {
      border-radius: 0 0 0.75rem 0.75rem;
      line-height: 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom:after {
      border-radius: 0 0 0.75rem 0.75rem;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom:before {
      background: #ccc;
      opacity: 0.1;
    }
    .flip-clock .flip-clock-divider {
      position: relative;
      width: 1.5em;
      height: 6em;
    }
    .flip-clock .flip-clock-divider:before,
    .flip-clock .flip-clock-divider:after {
      content: ' ';
      display: block;
      width: 0.75em;
      height: 0.75em;
      background: #333;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .flip-clock .flip-clock-divider:before {
      transform: translate(-50%, 75%);
    }
    .flip-clock .flip-clock-divider:after {
      transform: translate(-50%, -175%);
    }

    @keyframes indexing {
      0% {
        z-index: 2;
      }
      1% {
        z-index: 3;
      }
      100% {
        z-index: 4;
      }
    }

    @keyframes flip-bottom {
      0% {
        transform: rotateX(90deg);
      }
      100% {
        transform: rotateX(0);
      }
    }

    @keyframes flip-top {
      0% {
        transform: rotateX(0);
      }
      100% {
        transform: rotateX(-90deg);
      }
    }

    @keyframes show-shadow {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes hide-shadow {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  </style>
`;console.info("%c  FLIPCLOCK-CARD \n%c  Version 0.0.1  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let ee=class extends X{constructor(){super(...arguments),this._clockFaces=["TwentyFourHourClock","TwelveHourClock"],this._firstUpdated=!1}set hass(e){this._hass=e,this._date=new Date,setInterval(this.updateTimezones.bind(this),500)}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=function e(...t){const i=e=>e&&"object"==typeof e;return t.reduce((t,n)=>(Object.keys(n).forEach(o=>{const r=t[o],s=n[o];Array.isArray(r)&&Array.isArray(s)?t[o]=r.concat(...s):i(r)&&i(s)?t[o]=e(r,s):t[o]=s}),t),{})}({title:null,time:{face:"TwentyFourHourClock",showSeconds:!1},timezones:[],date:{format:{weekday:"long",day:"numeric",month:"long",year:"numeric"},hidden:!1,locale:null}},e),this._timezones=[],this._config.timezones.forEach(e=>{this._timezones.push({id:"string"==typeof e?e:e.id,title:"string"==typeof e?e:e.title})})}shouldUpdate(){return!this._firstUpdated}firstUpdated(){this._firstUpdated=!0}render(){return this._config&&this._hass?V`
      <ha-card>
        <div class="fc-content">
          ${this.showValue(this._config.title)?V`
                <div class="fc-header">
                  ${this._config.title}
                </div>
              `:""}
          <div class="fc-time">
            ${this.renderClock()}
          </div>
          ${this.renderDate()} ${this.renderTimezones()}
        </div>
      </ha-card>
      ${Q}
    `:V``}getCardSize(){return 3}showValue(e){return null!=e}renderClock(){if(this._clockFaces.includes(this._config.time.face)){const e=document.createElement("div");return e.className="fc-now",new K(e,this._date,{face:this._config.time.face,showSeconds:this._config.time.showSeconds}),V`${e}`}return V``}renderDate(){return this._config.date.hidden?V``:V` <div class="fc-date">
        ${this.formatDate(this._date)}
      </div>`}formatDate(e,t){var i;const n=this._config.date.locale||(null===(i=this._hass)||void 0===i?void 0:i.language),o=t||this._config.date.format;return e.toLocaleDateString(n,o)}formatTimezone(e){return this.formatDate(this._date,{hour:"numeric",minute:"numeric",timeZone:e,weekday:"short"})}renderTimezones(){return V`
      <div class="fc-timezone" id="fc_timezone">
        ${this._timezones.map((e,t)=>V`
            <div class="item">
              <div class="tz">
                <ha-icon class="tz-icon" icon="mdi:clock-outline"></ha-icon>
                <div class="tz-locale">${e.title}</div>
              </div>
              <div class="tz-time" id="tz_${t}">
                ${this.formatTimezone(e.id)}
              </div>
            </div>
          `)}
      </div>
    `}updateTimezones(){this._timezones.map((e,t)=>{var i;const n=null===(i=this.shadowRoot)||void 0===i?void 0:i.getElementById("tz_"+t);n&&(n.innerHTML=this.formatTimezone(e.id))})}};var te;e([J()],ee.prototype,"_hass",void 0),e([J()],ee.prototype,"_config",void 0),ee=e([(te="flipclock-card",e=>"function"==typeof e?((e,t)=>(window.customElements.define(e,t),t))(te,e):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(te,e))],ee);export{ee as FlipClockCard};
