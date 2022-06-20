var Ie=Object.defineProperty,He=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var pe=(l,t,e)=>t in l?Ie(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,Y=(l,t)=>{for(var e in t||(t={}))De.call(t,e)&&pe(l,e,t[e]);if(_e)for(var e of _e(t))Pe.call(t,e)&&pe(l,e,t[e]);return l},J=(l,t)=>He(l,Me(t));import{_ as C,r as A,o as n,c,b as $,f as S,i as P,j as h,k as fe,h as a,F as H,l as R,a as g,t as x,m as w,n as z,p as Q,q as T,w as N,s as he,v as k,d as j,x as X,y as Ee,z as Ae,A as Re,B as Z,C as ee,D as E,E as K,G as be,H as ge,u as ke,g as I,T as $e,I as O,J as Le,K as q,L as G,M as Fe,N as Oe,O as te,P as ye,Q as we,e as ze,R as ae,S as We,U,V as ne,W as Ve,X as Ue,Y as je,Z as Ke}from"./app.a67de5b8.js";const qe={},Ge={class:"theme-default-content"};function Xe(l,t){const e=A("Content");return n(),c("div",Ge,[$(e)])}var Ye=C(qe,[["render",Xe],["__file","HomeContent.vue"]]);const Je={key:0,class:"features"},Qe=S({__name:"HomeFeatures",setup(l){const t=P(),e=h(()=>fe(t.value.features)?t.value.features:[]);return(u,r)=>a(e).length?(n(),c("div",Je,[(n(!0),c(H,null,R(a(e),p=>(n(),c("div",{key:p.title,class:"feature"},[g("h2",null,x(p.title),1),g("p",null,x(p.details),1)]))),128))])):w("",!0)}});var Ze=C(Qe,[["__file","HomeFeatures.vue"]]);const et=["innerHTML"],tt=["textContent"],at=S({__name:"HomeFooter",setup(l){const t=P(),e=h(()=>t.value.footer),u=h(()=>t.value.footerHtml);return(r,p)=>a(e)?(n(),c(H,{key:0},[a(u)?(n(),c("div",{key:0,class:"footer",innerHTML:a(e)},null,8,et)):(n(),c("div",{key:1,class:"footer",textContent:x(a(e))},null,8,tt))],64)):w("",!0)}});var nt=C(at,[["__file","HomeFooter.vue"]]);const ot=["href","rel","target","aria-label"],rt=S({inheritAttrs:!1}),st=S(J(Y({},rt),{__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(l){const t=l,e=z(),u=Re(),{item:r}=Q(t),p=h(()=>X(r.value.link)),m=h(()=>Ee(r.value.link)||Ae(r.value.link)),v=h(()=>{if(!m.value){if(r.value.target)return r.value.target;if(p.value)return"_blank"}}),o=h(()=>v.value==="_blank"),s=h(()=>!p.value&&!m.value&&!o.value),i=h(()=>{if(!m.value){if(r.value.rel)return r.value.rel;if(o.value)return"noopener noreferrer"}}),d=h(()=>r.value.ariaLabel||r.value.text),_=h(()=>{const y=Object.keys(u.value.locales);return y.length?!y.some(f=>f===r.value.link):r.value.link!=="/"}),b=h(()=>_.value?e.path.startsWith(r.value.link):!1),L=h(()=>s.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(y,f)=>{const B=A("RouterLink"),M=A("AutoLinkExternalIcon");return a(s)?(n(),T(B,he({key:0,class:{"router-link-active":a(L)},to:a(r).link,"aria-label":a(d)},y.$attrs),{default:N(()=>[k(y.$slots,"before"),j(" "+x(a(r).text)+" ",1),k(y.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),c("a",he({key:1,class:"external-link",href:a(r).link,rel:a(i),target:a(v),"aria-label":a(d)},y.$attrs),[k(y.$slots,"before"),j(" "+x(a(r).text)+" ",1),a(o)?(n(),T(M,{key:0})):w("",!0),k(y.$slots,"after")],16,ot))}}}));var D=C(st,[["__file","AutoLink.vue"]]);const lt={class:"hero"},ut={key:0,id:"main-title"},it={key:1,class:"description"},ct={key:2,class:"actions"},vt=S({__name:"HomeHero",setup(l){const t=P(),e=Z(),u=ee(),r=h(()=>u.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),p=h(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),m=h(()=>t.value.heroAlt||p.value||"hero"),v=h(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),o=h(()=>fe(t.value.actions)?t.value.actions.map(({text:i,link:d,type:_="primary"})=>({text:i,link:d,type:_})):[]),s=()=>{if(!r.value)return null;const i=K("img",{src:be(r.value),alt:m.value});return t.value.heroImageDark===void 0?i:K(ge,()=>i)};return(i,d)=>(n(),c("header",lt,[$(s),a(p)?(n(),c("h1",ut,x(a(p)),1)):w("",!0),a(v)?(n(),c("p",it,x(a(v)),1)):w("",!0),a(o).length?(n(),c("p",ct,[(n(!0),c(H,null,R(a(o),_=>(n(),T(D,{key:_.text,class:E(["action-button",[_.type]]),item:_},null,8,["class","item"]))),128))])):w("",!0)]))}});var dt=C(vt,[["__file","HomeHero.vue"]]);const _t={class:"home"},pt=S({__name:"Home",setup(l){return(t,e)=>(n(),c("main",_t,[$(dt),$(Ze),$(Ye),$(nt)]))}});var ht=C(pt,[["__file","Home.vue"]]);const mt=S({__name:"NavbarBrand",setup(l){const t=ke(),e=Z(),u=I(),r=ee(),p=h(()=>u.value.home||t.value),m=h(()=>e.value.title),v=h(()=>r.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),o=()=>{if(!v.value)return null;const s=K("img",{class:"logo",src:be(v.value),alt:m.value});return u.value.logoDark===void 0?s:K(ge,()=>s)};return(s,i)=>{const d=A("RouterLink");return n(),T(d,{to:a(p)},{default:N(()=>[$(o),a(m)?(n(),c("span",{key:0,class:E(["site-name",{"can-hide":a(v)}])},x(a(m)),3)):w("",!0)]),_:1},8,["to"])}}});var ft=C(mt,[["__file","NavbarBrand.vue"]]);const bt=S({__name:"DropdownTransition",setup(l){const t=u=>{u.style.height=u.scrollHeight+"px"},e=u=>{u.style.height=""};return(u,r)=>(n(),T($e,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:N(()=>[k(u.$slots,"default")]),_:3}))}});var Ce=C(bt,[["__file","DropdownTransition.vue"]]);const gt=["aria-label"],kt={class:"title"},$t=g("span",{class:"arrow down"},null,-1),Lt=["aria-label"],yt={class:"title"},wt={class:"navbar-dropdown"},Ct={class:"navbar-dropdown-subtitle"},St={key:1},Tt={class:"navbar-dropdown-subitem-wrapper"},xt=S({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=Q(t),u=h(()=>e.value.ariaLabel||e.value.text),r=O(!1),p=z();Le(()=>p.path,()=>{r.value=!1});const m=o=>{o.detail===0?r.value=!r.value:r.value=!1},v=(o,s)=>s[s.length-1]===o;return(o,s)=>(n(),c("div",{class:E(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(u),onClick:m},[g("span",kt,x(a(e).text),1),$t],8,gt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(u),onClick:s[0]||(s[0]=i=>r.value=!r.value)},[g("span",yt,x(a(e).text),1),g("span",{class:E(["arrow",r.value?"down":"right"])},null,2)],8,Lt),$(Ce,null,{default:N(()=>[q(g("ul",wt,[(n(!0),c(H,null,R(a(e).children,i=>(n(),c("li",{key:i.text,class:"navbar-dropdown-item"},[i.children?(n(),c(H,{key:0},[g("h4",Ct,[i.link?(n(),T(D,{key:0,item:i,onFocusout:d=>v(i,a(e).children)&&i.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(n(),c("span",St,x(i.text),1))]),g("ul",Tt,[(n(!0),c(H,null,R(i.children,d=>(n(),c("li",{key:d.link,class:"navbar-dropdown-subitem"},[$(D,{item:d,onFocusout:_=>v(d,i.children)&&v(i,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),T(D,{key:1,item:i,onFocusout:d=>v(i,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,r.value]])]),_:1})],2))}});var Nt=C(xt,[["__file","NavbarDropdown.vue"]]);const me=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Bt=(l,t)=>{if(t.hash===l)return!0;const e=me(t.path),u=me(l);return e===u},Se=(l,t)=>l.link&&Bt(l.link,t)?!0:l.children?l.children.some(e=>Se(e,t)):!1,Te=l=>!X(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,It={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Ht=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=Te(l);return e!==null?It[e]:null},Mt=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:u,editLinkPattern:r})=>{if(!u)return null;const p=Ht({docsRepo:l,editLinkPattern:r});return p?p.replace(/:repo/,X(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Fe(`${Oe(e)}/${u}`)):null},Dt={key:0,class:"navbar-items"},Pt=S({__name:"NavbarItems",setup(l){const t=()=>{const s=te(),i=ke(),d=Z(),_=I();return h(()=>{var B,M;const b=Object.keys(d.value.locales);if(b.length<2)return[];const L=s.currentRoute.value.path,y=s.currentRoute.value.fullPath;return[{text:(B=_.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(M=_.value.selectLanguageAriaLabel)!=null?M:"unkown language",children:b.map(F=>{var se,le,ue,ie,ce,ve;const W=(le=(se=d.value.locales)==null?void 0:se[F])!=null?le:{},oe=(ie=(ue=_.value.locales)==null?void 0:ue[F])!=null?ie:{},re=`${W.lang}`,Ne=(ce=oe.selectLanguageName)!=null?ce:re;let V;if(re===d.value.lang)V=y;else{const de=L.replace(i.value,F);s.getRoutes().some(Be=>Be.path===de)?V=de:V=(ve=oe.home)!=null?ve:F}return{text:Ne,link:V}})}]})},e=()=>{const s=I(),i=h(()=>s.value.repo),d=h(()=>i.value?Te(i.value):null),_=h(()=>i.value&&!X(i.value)?`https://github.com/${i.value}`:i.value),b=h(()=>_.value?s.value.repoLabel?s.value.repoLabel:d.value===null?"Source":d.value:null);return h(()=>!_.value||!b.value?[]:[{text:b.value,link:_.value}])},u=s=>ye(s)?we(s):s.children?J(Y({},s),{children:s.children.map(u)}):s,p=(()=>{const s=I();return h(()=>(s.value.navbar||[]).map(u))})(),m=t(),v=e(),o=h(()=>[...p.value,...m.value,...v.value]);return(s,i)=>a(o).length?(n(),c("nav",Dt,[(n(!0),c(H,null,R(a(o),d=>(n(),c("div",{key:d.text,class:"navbar-item"},[d.children?(n(),T(Nt,{key:0,item:d},null,8,["item"])):(n(),T(D,{key:1,item:d},null,8,["item"]))]))),128))])):w("",!0)}});var xe=C(Pt,[["__file","NavbarItems.vue"]]);const Et=["title"],At={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Rt=ze('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Ft=[Rt],Ot={class:"icon",focusable:"false",viewBox:"0 0 32 32"},zt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Wt=[zt],Vt=S({__name:"ToggleColorModeButton",setup(l){const t=I(),e=ee(),u=()=>{e.value=!e.value};return(r,p)=>(n(),c("button",{class:"toggle-color-mode-button",title:a(t).toggleColorMode,onClick:u},[q((n(),c("svg",At,Ft,512)),[[G,!a(e)]]),q((n(),c("svg",Ot,Wt,512)),[[G,a(e)]])],8,Et))}});var Ut=C(Vt,[["__file","ToggleColorModeButton.vue"]]);const jt=["title"],Kt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),qt=[Kt],Gt=S({__name:"ToggleSidebarButton",emits:["toggle"],setup(l){const t=I();return(e,u)=>(n(),c("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=r=>e.$emit("toggle"))},qt,8,jt))}});var Xt=C(Gt,[["__file","ToggleSidebarButton.vue"]]);const Yt=S({__name:"Navbar",emits:["toggle-sidebar"],setup(l){const t=I(),e=O(null),u=O(null),r=O(0),p=h(()=>r.value?{maxWidth:r.value+"px"}:{});ae(()=>{const o=m(e.value,"paddingLeft")+m(e.value,"paddingRight"),s=()=>{var i;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-o-(((i=u.value)==null?void 0:i.offsetWidth)||0)};s(),window.addEventListener("resize",s,!1),window.addEventListener("orientationchange",s,!1)});function m(v,o){var d,_,b;const s=(b=(_=(d=v==null?void 0:v.ownerDocument)==null?void 0:d.defaultView)==null?void 0:_.getComputedStyle(v,null))==null?void 0:b[o],i=Number.parseInt(s,10);return Number.isNaN(i)?0:i}return(v,o)=>{const s=A("NavbarSearch");return n(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[$(Xt,{onToggle:o[0]||(o[0]=i=>v.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:u},[$(ft)],512),g("div",{class:"navbar-items-wrapper",style:We(a(p))},[k(v.$slots,"before"),$(xe,{class:"can-hide"}),k(v.$slots,"after"),a(t).colorModeSwitch?(n(),T(Ut,{key:0})):w("",!0),$(s)],4)],512)}}});var Jt=C(Yt,[["__file","Navbar.vue"]]);const Qt={class:"page-meta"},Zt={key:0,class:"meta-item edit-link"},ea={key:1,class:"meta-item last-updated"},ta={class:"meta-item-label"},aa={class:"meta-item-info"},na={key:2,class:"meta-item contributors"},oa={class:"meta-item-label"},ra={class:"meta-item-info"},sa=["title"],la=j(", "),ua=S({__name:"PageMeta",setup(l){const t=()=>{const o=I(),s=U(),i=P();return h(()=>{var M,F,W;if(!((F=(M=i.value.editLink)!=null?M:o.value.editLink)!=null?F:!0))return null;const{repo:_,docsRepo:b=_,docsBranch:L="main",docsDir:y="",editLinkText:f}=o.value;if(!b)return null;const B=Mt({docsRepo:b,docsBranch:L,docsDir:y,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=i.value.editLinkPattern)!=null?W:o.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},e=()=>{const o=I(),s=U(),i=P();return h(()=>{var b,L,y,f;return!((L=(b=i.value.lastUpdated)!=null?b:o.value.lastUpdated)!=null?L:!0)||!((y=s.value.git)!=null&&y.updatedTime)?null:new Date((f=s.value.git)==null?void 0:f.updatedTime).toLocaleString()})},u=()=>{const o=I(),s=U(),i=P();return h(()=>{var _,b,L,y;return((b=(_=i.value.contributors)!=null?_:o.value.contributors)!=null?b:!0)&&(y=(L=s.value.git)==null?void 0:L.contributors)!=null?y:null})},r=I(),p=t(),m=e(),v=u();return(o,s)=>{const i=A("ClientOnly");return n(),c("footer",Qt,[a(p)?(n(),c("div",Zt,[$(D,{class:"meta-item-label",item:a(p)},null,8,["item"])])):w("",!0),a(m)?(n(),c("div",ea,[g("span",ta,x(a(r).lastUpdatedText)+": ",1),$(i,null,{default:N(()=>[g("span",aa,x(a(m)),1)]),_:1})])):w("",!0),a(v)&&a(v).length?(n(),c("div",na,[g("span",oa,x(a(r).contributorsText)+": ",1),g("span",ra,[(n(!0),c(H,null,R(a(v),(d,_)=>(n(),c(H,{key:_},[g("span",{class:"contributor",title:`email: ${d.email}`},x(d.name),9,sa),_!==a(v).length-1?(n(),c(H,{key:0},[la],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var ia=C(ua,[["__file","PageMeta.vue"]]);const ca={key:0,class:"page-nav"},va={class:"inner"},da={key:0,class:"prev"},_a={key:1,class:"next"},pa=S({__name:"PageNav",setup(l){const t=o=>o===!1?null:ye(o)?we(o):Ve(o)?o:!1,e=(o,s,i)=>{const d=o.findIndex(_=>_.link===s);if(d!==-1){const _=o[d+i];return _!=null&&_.link?_:null}for(const _ of o)if(_.children){const b=e(_.children,s,i);if(b)return b}return null},u=P(),r=ne(),p=z(),m=h(()=>{const o=t(u.value.prev);return o!==!1?o:e(r.value,p.path,-1)}),v=h(()=>{const o=t(u.value.next);return o!==!1?o:e(r.value,p.path,1)});return(o,s)=>a(m)||a(v)?(n(),c("nav",ca,[g("p",va,[a(m)?(n(),c("span",da,[$(D,{item:a(m)},null,8,["item"])])):w("",!0),a(v)?(n(),c("span",_a,[$(D,{item:a(v)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var ha=C(pa,[["__file","PageNav.vue"]]);const ma={class:"page"},fa={class:"theme-default-content"},ba=S({__name:"Page",setup(l){return(t,e)=>{const u=A("Content");return n(),c("main",ma,[k(t.$slots,"top"),g("div",fa,[k(t.$slots,"content-top"),$(u),k(t.$slots,"content-bottom")]),$(ia),$(ha),k(t.$slots,"bottom")])}}});var ga=C(ba,[["__file","Page.vue"]]);const ka={class:"sidebar-item-children"},$a=S({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:u}=Q(t),r=z(),p=te(),m=h(()=>Se(e.value,r)),v=h(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:m.value,collapsible:e.value.collapsible})),o=O(!0),s=O(void 0);return e.value.collapsible&&(o.value=m.value,s.value=()=>{o.value=!o.value},p.afterEach(()=>{o.value=m.value})),(i,d)=>{var b;const _=A("SidebarItem",!0);return n(),c("li",null,[a(e).link?(n(),T(D,{key:0,class:E(a(v)),item:a(e)},null,8,["class","item"])):(n(),c("p",{key:1,tabindex:"0",class:E(a(v)),onClick:d[0]||(d[0]=(...L)=>s.value&&s.value(...L)),onKeydown:d[1]||(d[1]=Ue((...L)=>s.value&&s.value(...L),["enter"]))},[j(x(a(e).text)+" ",1),a(e).collapsible?(n(),c("span",{key:0,class:E(["arrow",o.value?"down":"right"])},null,2)):w("",!0)],34)),(b=a(e).children)!=null&&b.length?(n(),T(Ce,{key:2},{default:N(()=>[q(g("ul",ka,[(n(!0),c(H,null,R(a(e).children,L=>(n(),T(_,{key:`${a(u)}${L.text}${L.link}`,item:L,depth:a(u)+1},null,8,["item","depth"]))),128))],512),[[G,o.value]])]),_:1})):w("",!0)])}}});var La=C($a,[["__file","SidebarItem.vue"]]);const ya={key:0,class:"sidebar-items"},wa=S({__name:"SidebarItems",setup(l){const t=z(),e=ne();return ae(()=>{Le(()=>t.hash,u=>{const r=document.querySelector(".sidebar");if(!r)return;const p=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${u}"]`);if(!p)return;const{top:m,height:v}=r.getBoundingClientRect(),{top:o,height:s}=p.getBoundingClientRect();o<m?p.scrollIntoView(!0):o+s>m+v&&p.scrollIntoView(!1)})}),(u,r)=>a(e).length?(n(),c("ul",ya,[(n(!0),c(H,null,R(a(e),p=>(n(),T(La,{key:p.link||p.text,item:p},null,8,["item"]))),128))])):w("",!0)}});var Ca=C(wa,[["__file","SidebarItems.vue"]]);const Sa={class:"sidebar"},Ta=S({__name:"Sidebar",setup(l){return(t,e)=>(n(),c("aside",Sa,[$(xe),k(t.$slots,"top"),$(Ca),k(t.$slots,"bottom")]))}});var xa=C(Ta,[["__file","Sidebar.vue"]]);const Na=S({__name:"Layout",setup(l){const t=U(),e=P(),u=I(),r=h(()=>e.value.navbar!==!1&&u.value.navbar!==!1),p=ne(),m=O(!1),v=f=>{m.value=typeof f=="boolean"?f:!m.value},o={x:0,y:0},s=f=>{o.x=f.changedTouches[0].clientX,o.y=f.changedTouches[0].clientY},i=f=>{const B=f.changedTouches[0].clientX-o.x,M=f.changedTouches[0].clientY-o.y;Math.abs(B)>Math.abs(M)&&Math.abs(B)>40&&(B>0&&o.x<=80?v(!0):v(!1))},d=h(()=>[{"no-navbar":!r.value,"no-sidebar":!p.value.length,"sidebar-open":m.value},e.value.pageClass]);let _;ae(()=>{_=te().afterEach(()=>{v(!1)})}),je(()=>{_()});const b=Ke(),L=b.resolve,y=b.pending;return(f,B)=>(n(),c("div",{class:E(["theme-container",a(d)]),onTouchstart:s,onTouchend:i},[k(f.$slots,"navbar",{},()=>[a(r)?(n(),T(Jt,{key:0,onToggleSidebar:v},{before:N(()=>[k(f.$slots,"navbar-before")]),after:N(()=>[k(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=M=>v(!1))}),k(f.$slots,"sidebar",{},()=>[$(xa,null,{top:N(()=>[k(f.$slots,"sidebar-top")]),bottom:N(()=>[k(f.$slots,"sidebar-bottom")]),_:3})]),k(f.$slots,"page",{},()=>[a(e).home?(n(),T(ht,{key:0})):(n(),T($e,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(L),onBeforeLeave:a(y)},{default:N(()=>[(n(),T(ga,{key:a(t).path},{top:N(()=>[k(f.$slots,"page-top")]),"content-top":N(()=>[k(f.$slots,"page-content-top")]),"content-bottom":N(()=>[k(f.$slots,"page-content-bottom")]),bottom:N(()=>[k(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Ha=C(Na,[["__file","Layout.vue"]]);export{Ha as default};
