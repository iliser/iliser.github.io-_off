var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){const r=n.subscribe(e);t.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}function l(t,n,e){if(t){const r=s(t,n,e);return t[0](r)}}function s(t,e,r){return t[1]?n({},n(e.$$scope.ctx,t[1](r?r(e):{}))):e.$$scope.ctx}function a(t,e,r,o){return t[1]?n({},n(e.$$scope.changed||{},t[1](o?o(r):{}))):e.$$scope.changed||{}}function f(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function b(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function _(t){return""===t?void 0:+t}function y(t,n,e){t.style.setProperty(n,e)}let x;function w(t){x=t}function k(){const t=x;return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}const E=[],C=Promise.resolve();let N=!1;const S=[],I=[],O=[];function j(t){I.push(t)}function M(){const t=new Set;do{for(;E.length;){const t=E.shift();w(t),q(t.$$)}for(;S.length;)S.shift()();for(;I.length;){const n=I.pop();t.has(n)||(n(),t.add(n))}}while(E.length);for(;O.length;)O.pop()();N=!1}function q(t){t.fragment&&(t.update(t.dirty),o(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(j))}let A;function L(t,n,r){const{fragment:i,on_mount:u,on_destroy:l,after_render:s}=t.$$;i.m(n,r),j(()=>{const n=u.map(e).filter(c);l?l.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(j)}function P(t,n){t.$$.dirty||(E.push(t),N||(N=!0,C.then(M)),t.$$.dirty=r()),t.$$.dirty[n]=!0}function B(n,e,c,i,u,l){const s=x;w(n);const a=e.props||{},f=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(s?s.$$.context:[]),callbacks:r(),dirty:null};let d=!1;var h;f.ctx=c?c(n,a,(t,e)=>{f.ctx&&u(f.ctx[t],f.ctx[t]=e)&&(f.bound[t]&&f.bound[t](e),d&&P(n,t))}):a,f.update(),d=!0,o(f.before_render),f.fragment=i(f.ctx),e.target&&(e.hydrate?f.fragment.l((h=e.target,Array.from(h.childNodes))):f.fragment.c(),e.intro&&n.$$.fragment.i&&n.$$.fragment.i(),L(n,e.target,e.anchor),M()),w(s)}class D{$destroy(){var n,e;e=!0,(n=this).$$&&(o(n.$$.on_destroy),n.$$.fragment.d(e),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const T=function(n,e=t){let r;const o=[];function c(t){if(i(n,t)){if(n=t,!r)return;o.forEach(t=>t[1]()),o.forEach(t=>t[0](n))}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,u=t){const l=[i,u];return o.push(l),1===o.length&&(r=e(c)||t),i(n),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&r()}}}}({width:sessionStorage.getItem("width")||8,height:sessionStorage.getItem("height")||8,difficult:sessionStorage.getItem("difficult")||1});function z(t,n,e){const r=Object.create(t);return r.v=n[e],r.y=e,r}function F(t,n,e){const r=Object.create(t);return r.row=n[e],r.x=e,r}function G(t){var n,e;function r(){return t.click_handler(t)}return{c(){(n=p("div")).className="tyle svelte-kacqbp",y(n,"background-color",t.v?"red":"green"),e=v(n,"click",r)},m(t,e){d(t,n,e)},p(e,r){t=r,e.arr&&y(n,"background-color",t.v?"red":"green")},d(t){t&&h(n),e()}}}function H(t){for(var n,e,r=t.row,o=[],c=0;c<r.length;c+=1)o[c]=G(z(t,r,c));return{c(){n=p("div");for(var t=0;t<o.length;t+=1)o[t].c();e=g(),n.className="flex svelte-kacqbp"},m(t,r){d(t,n,r);for(var c=0;c<o.length;c+=1)o[c].m(n,null);f(n,e)},p(t,c){if(t.arr){r=c.row;for(var i=0;i<r.length;i+=1){const u=z(c,r,i);o[i]?o[i].p(t,u):(o[i]=G(u),o[i].c(),o[i].m(n,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=r.length}},d(t){t&&h(n),$(o,t)}}}function J(n){for(var e,r=n.arr,o=[],c=0;c<r.length;c+=1)o[c]=H(F(n,r,c));return{c(){for(var t=0;t<o.length;t+=1)o[t].c();e=m("")},m(t,n){for(var r=0;r<o.length;r+=1)o[r].m(t,n);d(t,e,n)},p(t,n){if(t.arr){r=n.arr;for(var c=0;c<r.length;c+=1){const i=F(n,r,c);o[c]?o[c].p(t,i):(o[c]=H(i),o[c].c(),o[c].m(e.parentNode,e))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},i:t,o:t,d(t){$(o,t),t&&h(e)}}}function K(t){let n=Math.round(Math.random()*t);return Math.min(n,t-1)}function Q(t,n,e){let r;u(t,T,t=>{e("$settings",r=t)});let o=r.width,c=r.height,i=r.difficult,l=[],s=0;function a(t,n){let r=[[-1,0],[1,0],[0,-1],[0,1],[0,0]];for(let[i,u]of r){let r=t+i,a=n+u;r>=0&&a>=0&&r<o&&a<c&&(l[r][a]=1-l[r][a],e("arr",l),l[r][a]?++s:--s)}}function f(t,n){a(t,n),0==s&&alert("you win")}function d(){if(o<8||c<8)return;s=0,e("arr",l=[]);for(let t=0;t<o;++t){l[t]=[],e("arr",l);for(let n=0;n<c;++n)l[t][n]=0,e("arr",l)}let t=(K(20)+13)*i;for(let n=0;n<t;++n)a(K(o),K(c))}return d(),T.subscribe(t=>{({width:o,height:c,difficult:i}=t),d()}),{arr:l,userStep:f,click_handler:function({x:t,y:n}){return f(t,n)}}}class R extends D{constructor(t){super(),B(this,t,Q,J,i,[])}}function U(n){var e,r,c,i,u,l,s,a,$,m,_,x,w;return{c(){var t;e=p("form"),(r=p("label")).textContent="Сложность поля",c=g(),i=p("input"),u=g(),(l=p("label")).textContent="Размеры поля",s=g(),a=p("input"),$=g(),m=p("input"),_=g(),(x=p("button")).textContent="Пересоздать поле",b(i,"type","number"),b(a,"type","number"),b(m,"type","number"),x.type="submit",y(x,"display","none"),w=[v(i,"input",n.input0_input_handler),v(a,"input",n.input1_input_handler),v(m,"input",n.input2_input_handler),v(e,"submit",(t=n.submit_handler,function(n){return n.preventDefault(),t.call(this,n)}))]},m(t,o){d(t,e,o),f(e,r),f(e,c),f(e,i),i.value=n.difficult,f(e,u),f(e,l),f(e,s),f(e,a),a.value=n.width,f(e,$),f(e,m),m.value=n.height,f(e,_),f(e,x)},p(t,n){t.difficult&&(i.value=n.difficult),t.width&&(a.value=n.width),t.height&&(m.value=n.height)},i:t,o:t,d(t){t&&h(e),o(w)}}}function V(t,n,e){let r;u(t,T,t=>{e("$settings",r=t)});let{width:o,height:c,difficult:i}=r;const l=k();return t.$$.update=((t={width:1,height:1,difficult:1})=>{t.width&&sessionStorage.setItem("width",o),t.height&&sessionStorage.setItem("height",c),t.difficult&&sessionStorage.setItem("difficult",i),t.width&&T.update(t=>({...t,width:o})),t.height&&T.update(t=>({...t,height:c})),t.difficult&&T.update(t=>({...t,difficult:i}))}),{width:o,height:c,difficult:i,dispatch:l,input0_input_handler:function(){i=_(this.value),e("difficult",i)},input1_input_handler:function(){o=_(this.value),e("width",o)},input2_input_handler:function(){c=_(this.value),e("height",c)},submit_handler:function(){console.log("CLOSE"),l("close")}}}class W extends D{constructor(t){super(),B(this,t,V,U,i,[])}}const X=({})=>({}),Y=({})=>({});function Z(t){var n,e,r,c,i,u,$,m,b,_,y,x;const w=t.$$slots.header,k=l(w,t,Y),E=t.$$slots.default,C=l(E,t,null);return{c(){n=p("div"),e=g(),r=p("div"),k&&k.c(),c=g(),i=p("hr"),u=g(),C&&C.c(),$=g(),m=p("hr"),b=g(),(_=p("button")).textContent="закрыть окно",n.className="modal-background svelte-1k3utew",_.className="svelte-1k3utew",r.className="modal svelte-1k3utew",x=[v(n,"click",t.click_handler),v(_,"click",t.click_handler_1)]},l(t){k&&k.l(div1_nodes),C&&C.l(div1_nodes)},m(t,o){d(t,n,o),d(t,e,o),d(t,r,o),k&&k.m(r,null),f(r,c),f(r,i),f(r,u),C&&C.m(r,null),f(r,$),f(r,m),f(r,b),f(r,_),y=!0},p(t,n){k&&k.p&&t.$$scope&&k.p(a(w,n,t,X),s(w,n,Y)),C&&C.p&&t.$$scope&&C.p(a(E,n,t,null),s(E,n,null))},i(t){y||(k&&k.i&&k.i(t),C&&C.i&&C.i(t),y=!0)},o(t){k&&k.o&&k.o(t),C&&C.o&&C.o(t),y=!1},d(t){t&&(h(n),h(e),h(r)),k&&k.d(t),C&&C.d(t),o(x)}}}function tt(t,n,e){const r=k();let{$$slots:o={},$$scope:c}=n;return t.$set=(t=>{"$$scope"in t&&e("$$scope",c=t.$$scope)}),{dispatch:r,click_handler:function(){return r("close")},click_handler_1:function(){return r("close")},$$slots:o,$$scope:c}}class nt extends D{constructor(t){super(),B(this,t,tt,Z,i,[])}}function et(t){var n,e=new nt({props:{$$slots:{default:[ot],header:[rt]},$$scope:{ctx:t}}});return e.$on("close",t.close_handler_1),{c(){e.$$.fragment.c()},m(t,r){L(e,t,r),n=!0},i(t){n||(e.$$.fragment.i(t),n=!0)},o(t){e.$$.fragment.o(t),n=!1},d(t){e.$destroy(t)}}}function rt(t){var n;return{c(){(n=p("h2")).textContent="Настройки",b(n,"slot","header")},m(t,e){d(t,n,e)},d(t){t&&h(n)}}}function ot(n){var e,r,o=new W({});return o.$on("close",n.close_handler),{c(){e=g(),o.$$.fragment.c()},m(t,n){d(t,e,n),L(o,t,n),r=!0},p:t,i(t){r||(o.$$.fragment.i(t),r=!0)},o(t){o.$$.fragment.o(t),r=!1},d(t){t&&h(e),o.$destroy(t)}}}function ct(t){var n,e,r,c,i,u,l,s=1==t.mode&&et(t),a=new R({});return{c(){n=p("div"),e=p("div"),(r=p("button")).textContent="Настройки",c=g(),s&&s.c(),i=g(),a.$$.fragment.c(),y(e,"display","inline-block"),y(e,"text-align","left"),y(n,"text-align","center"),l=v(r,"click",t.click_handler)},m(t,o){d(t,n,o),f(n,e),f(e,r),f(e,c),s&&s.m(e,null),f(e,i),L(a,e,null),u=!0},p(t,n){var r;1==n.mode?s?s.i(1):((s=et(n)).c(),s.i(1),s.m(e,i)):s&&(r=(()=>{s.d(1),s=null}),(A={remaining:0,callbacks:[]}).callbacks.push(r),s.o(1),A.remaining||o(A.callbacks))},i(t){u||(s&&s.i(),a.$$.fragment.i(t),u=!0)},o(t){s&&s.o(),a.$$.fragment.o(t),u=!1},d(t){t&&h(n),s&&s.d(),a.$destroy(),l()}}}function it(t,n,e){let r=0;return{mode:r,click_handler:function(){const t=r=1;return e("mode",r),t},close_handler:function(){const t=r=0;return e("mode",r),t},close_handler_1:function(){const t=r=0;return e("mode",r),t}}}return new class extends D{constructor(t){super(),B(this,t,it,ct,i,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
