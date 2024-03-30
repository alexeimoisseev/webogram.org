"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[2120],{90730:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(46752),r=n(66735);const i=(0,o.X$)((({title:e="Change your profile picture",disabled:t,isForForum:n,currentAvatarBlobUrl:i,onChange:l})=>{const[s,c]=(0,o.eJ)(),[d,m]=(0,o.eJ)(i);(0,o.d4)((()=>{m(i)}),[i]);const u=(0,o.I4)((e=>{c(void 0),l(e),d&&d!==i&&URL.revokeObjectURL(d),m(URL.createObjectURL(e))}),[d,i,l]),Z=(0,o.I4)((()=>{c(void 0)}),[]),v=(0,a.Z)(d&&"filled",t&&"disabled",n&&"rounded-square");return o.ZP.createElement("div",{className:"AvatarEditable"},o.ZP.createElement("label",{className:v,role:"button",tabIndex:0,title:e},o.ZP.createElement("input",{type:"file",onChange:function(e){const t=e.target;t?.files?.[0]&&(c(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),o.ZP.createElement("i",{className:"icon icon-camera-add"}),d&&o.ZP.createElement("img",{src:d,draggable:!1,alt:"Avatar"})),o.ZP.createElement(r.Z,{file:s,onClose:Z,onChange:u}))}))},95481:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(60748),a=n(46752),r=n(34076),i=n(40126);const l=(0,o.X$)((({text:e,className:t,isAlternateColor:n})=>o.ZP.createElement(i.Z,{className:(0,a.Z)("Y3ZoW17O",n?"Lq67O2D2":"DWjOG2Ze",t),isOpen:Boolean(e)},e&&o.ZP.createElement(r.Z,{text:e}))))},51218:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(60748),a=n(14605);const r=(0,o.X$)((({id:e,options:t,selected:n=[],disabled:r,round:i,loadingOptions:l,onChange:s})=>{const[c,d]=(0,o.eJ)(n||[]),m=(0,o.I4)((e=>{const{value:t,checked:n}=e.currentTarget;let o;o=n?[...c,t]:c.filter((e=>e!==t)),d(o),s(o)}),[s,c]);return o.ZP.createElement("div",{id:e,className:"radio-group"},t.map((e=>o.ZP.createElement(a.Z,{label:e.label,subLabel:e.subLabel,value:e.value,checked:-1!==n.indexOf(e.value),disabled:e.disabled||r,round:i,isLoading:l?-1!==l.indexOf(e.value):void 0,onChange:m}))))}))},17551:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(60748),a=n(46752),r=n(72313),i=n(59107),l=n(231),s=n(34563);const c=(0,o.X$)((({isOpen:e,title:t,header:n,text:c,textParts:d,confirmLabel:m="Confirm",confirmIsDestructive:u,isConfirmDisabled:Z,isOnlyConfirm:v,areButtonsInColumn:h,className:g,children:p,confirmHandler:b,onClose:f,onCloseAnimationEnd:E})=>{const P=(0,i.Z)(),C=(0,o.sO)(null),N=(0,o.I4)((e=>{-1===e&&b()}),[b]),w=(0,r.Z)(C,e,N,".Button");return o.ZP.createElement(s.Z,{className:(0,a.Z)("confirm",g),title:t||P("Telegram"),header:n,isOpen:e,onClose:f,onCloseAnimationEnd:E},c&&c.split("\\n").map((e=>o.ZP.createElement("p",null,e))),d||p,o.ZP.createElement("div",{className:h?"dialog-buttons-column":"dialog-buttons mt-2",ref:C,onKeyDown:w},o.ZP.createElement(l.Z,{className:"confirm-dialog-button",isText:!0,onClick:b,color:u?"danger":"primary",disabled:Z},m),!v&&o.ZP.createElement(l.Z,{className:"confirm-dialog-button",isText:!0,onClick:f},P("Cancel"))))}))},66735:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(60748),a=n(83716),r=n(71394),i=n(59107),l=n(231),s=n(34288),c=n(34563);const d={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let m,u,Z;const v=(0,o.X$)((({file:e,onChange:t,onClose:v})=>{const[h,g]=(0,o.eJ)(!1);(0,o.d4)((()=>{e&&(h?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:o}=t;Z=new m(t,{enableZoom:!0,boundary:{width:n,height:o},viewport:{width:n-16,height:o-16,type:"circle"}});const a=await(0,r.YJ)(e);await Z.bind({url:a})}catch(e){a.eMD&&console.error(e)}}(e):async function(){return u||(u=Promise.all([n.e(5099),n.e(3472)]).then(n.bind(n,23472)),m=(await u).default),u}().then((()=>g(!0))))}),[e,h]);const p=(0,i.Z)(),b=(0,o.I4)((async()=>{if(!Z)return;const e=await Z.result(d),n="string"==typeof e?e:(0,r.hl)(e,"avatar.jpg");t(n)}),[t]);return o.ZP.createElement(c.Z,{isOpen:Boolean(e),onClose:v,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},h?o.ZP.createElement("div",{id:"avatar-crop"}):o.ZP.createElement(s.Z,null),o.ZP.createElement(l.Z,{className:"confirm-button",round:!0,color:"primary",onClick:b,ariaLabel:p("CropImage")},o.ZP.createElement("i",{className:"icon icon-check"})))}))},94913:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(60748),a=n(46752),r=n(80036),i=n(59107);const l={x:0,y:0},s=(0,o.X$)((({children:e,id:t,onDrag:n,onDragEnd:s,style:d,knobStyle:m,isDisabled:u})=>{const Z=(0,i.Z)(),v=(0,o.sO)(null),[h,g]=(0,o.eJ)({isDragging:!1,origin:l,translation:l}),p=e=>{e.stopPropagation(),e.preventDefault();const{x:t,y:n}=c(e);g({...h,isDragging:!0,origin:{x:t,y:n},width:v.current?.offsetWidth,height:v.current?.offsetHeight})},b=(0,o.I4)((e=>{const{x:o,y:a}=c(e),r={x:o-h.origin.x,y:a-h.origin.y};g((e=>({...e,translation:r}))),n(r,t)}),[t,n,h.origin.x,h.origin.y]),f=(0,o.I4)((()=>{g((e=>({...e,isDragging:!1,width:void 0,height:void 0}))),s()}),[s]);(0,o.d4)((()=>{h.isDragging&&u&&g((e=>({...e,isDragging:!1,width:void 0,height:void 0})))}),[u,h.isDragging]),(0,o.d4)((()=>(h.isDragging?(window.addEventListener("touchmove",b),window.addEventListener("mousemove",b),window.addEventListener("touchend",f),window.addEventListener("touchcancel",f),window.addEventListener("mouseup",f)):(window.removeEventListener("touchmove",b),window.removeEventListener("mousemove",b),window.removeEventListener("touchend",f),window.removeEventListener("touchcancel",f),window.removeEventListener("mouseup",f),g((e=>({...e,translation:l})))),()=>{h.isDragging&&(window.removeEventListener("touchmove",b),window.removeEventListener("mousemove",b),window.removeEventListener("touchend",f),window.removeEventListener("touchcancel",f),window.removeEventListener("mouseup",f))})),[b,f,h.isDragging]);const E=(0,a.Z)("kWQHzIMD",h.isDragging&&"k0c5WDAy"),P=(0,o.Ye)((()=>(0,r.Z)(h.isDragging&&`transform: translate(${h.translation.x}px, ${h.translation.y}px)`,h.width?`width: ${h.width}px`:void 0,h.height?`height: ${h.height}px`:void 0,d)),[d,h.height,h.isDragging,h.translation.x,h.translation.y,h.width]);return o.ZP.createElement("div",{style:P,className:E,ref:v},e,!u&&o.ZP.createElement("div",{"aria-label":Z("i18n_dragToSort"),tabIndex:0,role:"button",className:(0,a.Z)("UpzQzcvs","div-button","draggable-knob"),onMouseDown:p,onTouchStart:p,style:m},o.ZP.createElement("i",{className:"icon icon-sort","aria-hidden":!0})))}));function c(e){let t,n;return"touches"in e?(t=e.touches[0].clientX,n=e.touches[0].clientY):(t=e.clientX,n=e.clientY),{x:t,y:n}}},41151:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(60748),a=n(46752),r=n(59107),i=n(231);const l=({isShown:e,className:t,color:n="primary",ariaLabel:l,disabled:s,onClick:c,children:d})=>{const m=(0,r.Z)(),u=(0,a.Z)("FloatingActionButton",e&&"revealed",t);return o.ZP.createElement(i.Z,{className:u,color:n,round:!0,disabled:s,onClick:e&&!s?c:void 0,ariaLabel:l,tabIndex:-1,isRtl:m.isRtl},d)}},21273:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(60748),a=n(91713),r=n(57710),i=n(80036),l=n(87675),s=n(69118),c=n(97184),d=n(25190);const m=({ref:e,style:t,className:n,items:m,itemSelector:u=".ListItem",preloadBackwards:Z=20,sensitiveArea:v=800,withAbsolutePositioning:h,maxHeight:g,noScrollRestore:p=!1,noScrollRestoreOnTop:b=!1,noFastList:f,cacheBuster:E,beforeChildren:P,children:C,onLoadMore:N,onScroll:w,onWheel:y,onClick:k,onKeyDown:x,onDragOver:L,onDragLeave:A})=>{let D=(0,o.sO)(null);e&&(D=e);const I=(0,o.sO)({}),[O,M]=(0,o.Ye)((()=>N?[(0,s.Ds)(((e=!1)=>{N({direction:a.Uq.Backwards,noScroll:e})}),1e3,!0,!1),(0,s.Ds)((()=>{N({direction:a.Uq.Forwards})}),1e3,!0,!1)]:[]),[N,m]);(0,o.d4)((()=>{if(!O)return;if(Z>0&&(!m||m.length<Z))return void O(!0);const{scrollHeight:e,clientHeight:t}=D.current;t&&e<=t&&O()}),[m,O,Z]),(0,o.bt)((()=>{(0,r.lT)((()=>{const e=D.current,t=I.current;let n;if(t.listItemElements=e.querySelectorAll(u),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:o}=e,a=t.currentAnchor.getBoundingClientRect().top;n=o+(a-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}if(h||p)return;const{scrollTop:o}=e;return b&&0===o?void 0:()=>{(0,l.Z)(e,n),t.isScrollTopJustUpdated=!0}}))}),[m,u,p,b,E,h]);const T=(0,d.Z)((e=>{if(M&&O){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=I.current,o=I.current.listItemElements;if(e)return void(I.current.isScrollTopJustUpdated=!1);const a=o.length,r=D.current,{scrollTop:i,scrollHeight:l,offsetHeight:s}=r,c=i<=(a?o[0].offsetTop:0)+v,d=(a?o[a-1].offsetTop+o[a-1].offsetHeight:l)-(i+s)<=v;let m=!1;if(c){const e=o[0];if(e){const o=e.getBoundingClientRect().top,a=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&a>n&&(I.current.currentAnchor=e,I.current.currentAnchorTop=o,m=!0,M())}}if(d){const e=o[a-1];if(e){const o=e.getBoundingClientRect().top,a=t?.offsetParent&&t!==e?t.getBoundingClientRect().top:o;t&&void 0!==n&&a<n&&(I.current.currentAnchor=e,I.current.currentAnchorTop=o,m=!0,O())}}if(!m)if(t?.offsetParent)I.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=o[0];e&&(I.current.currentAnchor=e,I.current.currentAnchorTop=e.getBoundingClientRect().top)}}w&&w(e)}));return o.ZP.createElement("div",{ref:D,className:n,onScroll:T,onWheel:y,teactFastList:!f&&!h,onKeyDown:x,onDragOver:L,onDragLeave:A,onClick:k,style:t},P,h&&m?.length?o.ZP.createElement("div",{teactFastList:!f,style:(0,i.Z)("position: relative",c.wZ&&`height: ${g}px`)},C):C)}},31876:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(60748),a=n(57710),r=n(46752),i=n(97184),l=n(32340),s=n(17240),c=n(39415),d=n(60706),m=n(59107),u=n(25190),Z=n(12644),v=n(231),h=n(52328),g=n(58964),p=n(66902),b=n(68512);const f=({ref:e,buttonRef:t,icon:n,iconClassName:f,leftElement:E,buttonClassName:P,menuBubbleClassName:C,secondaryIcon:N,rightElement:w,className:y,style:k,children:x,disabled:L,allowDisabledClick:A,ripple:D,narrow:I,inactive:O,focus:M,destructive:T,multiline:R,isStatic:S,contextActions:$,withPortalForMenu:B,href:X,onMouseDown:W,onClick:K,onContextMenu:F,clickArg:Y,onSecondaryIconClick:q,onDragEnter:H})=>{let j=(0,o.sO)(null);e&&(j=e);const[z,J,_]=(0,d.Z)(),{isContextMenuOpen:U,contextMenuPosition:Q,handleBeforeContextMenu:G,handleContextMenu:V,handleContextMenuClose:ee,handleContextMenuHide:te}=(0,s.Z)(j,!$),ne=(0,u.Z)((()=>j.current)),oe=(0,u.Z)((()=>j.current.closest(".custom-scroll"))),ae=(0,u.Z)((()=>(B?document.querySelector("#portals"):j.current).querySelector(".ListItem-context-menu .bubble"))),re=(0,u.Z)((()=>({withPortal:B}))),{positionX:ie,positionY:le,transformOriginX:se,transformOriginY:ce,style:de}=(0,Z.Z)(Q,ne,oe,ae,re),me=(0,u.Z)((e=>{e.ctrlKey||e.metaKey||e.shiftKey||e.button!==i.tc.Main||e.preventDefault()})),ue=(0,u.Z)((e=>{if((!L||A)&&K){if(X){if((e.ctrlKey||e.metaKey||e.shiftKey)&&e.button===i.tc.Main||e.button===i.tc.Auxiliary)return;e.preventDefault()}K(e,Y),i.$b&&!D&&(J(),(0,a.i$)(_))}})),{handleClick:Ze,handleMouseDown:ve}=(0,c.m)((e=>{L&&!A||0!==e.button||!q&&!$||(e.stopPropagation(),q?q(e):V(e))})),he=(0,u.Z)((e=>{O||i.$b||(!$||e.button!==i.tc.Secondary&&K||G(e),e.button===i.tc.Main&&(K?ue(e):V(e)))})),ge=(0,m.Z)(),pe=(0,r.Z)("ListItem",y,S&&"allow-selection",D&&"has-ripple",I&&"narrow",L&&"disabled",A&&"click-allowed",O&&"inactive",Q&&"has-menu-open",M&&"focus",T&&"destructive",R&&"multiline",S&&"is-static"),be=X?"a":"div";return o.ZP.createElement("div",{ref:j,className:pe,dir:ge.isRtl?"rtl":void 0,style:k,onMouseDown:W,onDragEnter:H},o.ZP.createElement(be,{className:(0,r.Z)("ListItem-button",z&&"active",P),role:S?void 0:"button",href:X,ref:t,tabIndex:S?void 0:0,onClick:!O&&i.$b?ue:me,onMouseDown:he,onContextMenu:F||(!O&&$?V:void 0)},E,n&&o.ZP.createElement("i",{className:(0,r.Z)("icon",`icon-${n}`,f)}),R&&o.ZP.createElement("div",{className:"multiline-item"},x),!R&&x,!L&&!O&&D&&o.ZP.createElement(b.Z,null),N&&o.ZP.createElement(v.Z,{className:"secondary-icon",round:!0,color:"translucent",size:"smaller",onClick:Ze,onMouseDown:ve},o.ZP.createElement("i",{className:`icon icon-${N}`})),w),$&&void 0!==Q&&o.ZP.createElement(h.Z,{isOpen:U,transformOriginX:se,transformOriginY:ce,positionX:ie,positionY:le,style:de,className:"ListItem-context-menu with-menu-transitions",autoClose:!0,onClose:ee,onCloseAnimationEnd:te,withPortal:B,bubbleClassName:C},$.map((e=>"isSeparator"in e?o.ZP.createElement(p.Z,{key:e.key||"separator"}):o.ZP.createElement(g.Z,{key:e.title,icon:e.icon,destructive:e.destructive,disabled:!e.handler,onClick:e.handler},o.ZP.createElement("span",{className:"list-item-ellipsis"},(0,l.Z)(e.title)))))))}},66902:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(46752);const r={root:"h039vb1K",thin:"NGKaFgra",thick:"_BdnjPEa"},i=({className:e,size:t="thin"})=>o.ZP.createElement("div",{className:(0,a.Z)(r.root,r[t],e)})},34563:(e,t,n)=>{n.d(t,{Z:()=>b,z:()=>p});var o=n(60748),a=n(46752),r=n(517),i=n(98069),l=n(68368),s=n(1911),c=n(18674),d=n(46590),m=n(59107),u=n(25190),Z=n(72645),v=n(31212),h=n(231),g=n(62898);const p=200,b=(0,l.Z)((({dialogRef:e,title:t,className:n,contentClassName:l,isOpen:b,isSlim:f,header:E,hasCloseButton:P,noBackdrop:C,noBackdropClose:N,children:w,style:y,onClose:k,onCloseAnimationEnd:x,onEnter:L,shouldSkipHistoryAnimations:A})=>{const{shouldRender:D,transitionClassNames:I}=(0,v.Z)(b,x,A,void 0,A),O=(0,o.sO)(null);(0,o.d4)((()=>{if(b)return(0,i.l_)(),i.In}),[b]);const M=(0,u.Z)((e=>!!L&&(e.preventDefault(),L(),!0)));(0,o.d4)((()=>b?(0,r.Z)({onEsc:k,onEnter:M}):void 0),[b,k,M]),(0,o.d4)((()=>b&&O.current?(0,s.Z)(O.current):void 0),[b]),(0,d.Z)({isActive:b,onBack:k}),(0,Z.Z)((([e])=>(document.body.classList.toggle("has-open-dialog",Boolean(b)),(b||!b&&void 0!==e)&&(0,c.YW)(p),()=>{document.body.classList.remove("has-open-dialog")})),[b]);const T=(0,m.Z)();if(!D)return;const R=(0,a.Z)("Modal",n,I,C&&"transparent-backdrop",f&&"slim");return o.ZP.createElement(g.Z,null,o.ZP.createElement("div",{ref:O,className:R,tabIndex:-1,role:"dialog"},o.ZP.createElement("div",{className:"modal-container"},o.ZP.createElement("div",{className:"modal-backdrop",onClick:N?void 0:k}),o.ZP.createElement("div",{className:"modal-dialog",ref:e},E||(t?o.ZP.createElement("div",{className:"modal-header"},P&&o.ZP.createElement(h.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:T("Close"),onClick:k},o.ZP.createElement("i",{className:"icon icon-close"})),o.ZP.createElement("div",{className:"modal-title"},t)):void 0),o.ZP.createElement("div",{className:(0,a.Z)("modal-content custom-scroll",l),style:y},w)))))}))},96937:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(60748),a=n(33555),r=n(83716),i=n(46752),l=n(23989),s=n(31212),c=n(231),d=n(62898);const m=({title:e,className:t,message:n,duration:m=3e3,containerId:u,onDismiss:Z,action:v,actionText:h})=>{const g=(0,a.Sv)(),[p,b]=(0,o.eJ)(!0),f=(0,o.sO)(null),{transitionClassNames:E}=(0,s.Z)(p),P=(0,o.I4)((()=>{b(!1),setTimeout(Z,150+r.fK3)}),[Z]),C=(0,o.I4)((()=>{v&&(Array.isArray(v)?v.forEach((e=>g[e.action](e.payload))):g[v.action](v.payload)),P()}),[v,g,P]);(0,o.d4)((()=>p?(0,l.Z)(P):void 0),[p,P]),(0,o.d4)((()=>(f.current=window.setTimeout(P,m),()=>{f.current&&(clearTimeout(f.current),f.current=void 0)})),[m,P]);const N=(0,o.I4)((()=>{f.current&&(clearTimeout(f.current),f.current=void 0)}),[]),w=(0,o.I4)((()=>{f.current=window.setTimeout(P,m)}),[m,P]);return o.ZP.createElement(d.Z,{className:"Notification-container",containerId:u},o.ZP.createElement("div",{className:(0,i.Z)("Notification",E,t),onClick:C,onMouseEnter:N,onMouseLeave:w},o.ZP.createElement("div",{className:"content"},e&&o.ZP.createElement("div",{className:"notification-title"},e),n),v&&h&&o.ZP.createElement(c.Z,{color:"translucent-white",onClick:C,className:"Notification-button"},h)))}},39196:(e,t,n)=>{n.d(t,{Z:()=>Z});var o=n(60748),a=n(57710),r=n(9933),i=n(46752),l=n(92085),s=n(70971),c=n(38146),d=n(65979);const m={s:42,m:48,l:54,xl:52},u=.05,Z=(0,o.X$)((({progress:e=0,size:t="l",square:n,transparent:Z,noCross:v,rotationOffset:h,withColor:g,onClick:p})=>{const b=(0,o.sO)(null),f=m[t],E=(0,s.Y)(e),P=(0,c.Z)(),C=(0,l.Z)(b,!g);(0,o.d4)((()=>{let e,n,o=!0,i=u;(0,r.jt)((()=>{if(!b.current)return!1;E.current!==n&&(i=Math.min(Math.max(u,n||0),1),e=Date.now(),n=E.current);const a=Math.min(Math.max(u,E.current),1),l=Math.min(1,(Date.now()-e)/600),s=r.timingFunctions.easeOutQuad(l),c=i+(a-i)*s;return function(e,t,n,o,a,r,i=!1,l){const s=t/2,c=(t-n)/2-2*r,d=l??Date.now()%2e3/2e3,m=2*Math.PI*d,u=m+2*Math.PI*a,Z=e.getContext("2d");i&&(e.width=t,e.height=t,Z.lineCap="round",Z.strokeStyle=o,Z.lineWidth=n),Z.clearRect(0,0,t,t),Z.beginPath(),Z.arc(s,s,c,m,u),Z.stroke()}(b.current,f*P,("xl"===t?3:2)*P,C??"white",c,P,o,h),o=!1,c<1}),a.WM)}),[E,t,f,P,h,C]);const N=(0,i.Z)(`ProgressSpinner size-${t}`,Z&&"transparent",n&&"square",v&&"no-cross");return o.ZP.createElement("div",{className:N,onClick:p},!v&&o.ZP.createElement(d.Z,{name:"close"}),o.ZP.createElement("canvas",{ref:b,className:"ProgressSpinner_canvas",style:`width: ${f}; height: ${f}px;`}))}))},14434:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(60748),a=n(46752),r=n(59107),i=n(49204);const l=(0,o.X$)((({id:e,label:t,subLabel:n,value:l,name:s,checked:c,disabled:d,hidden:m,isLoading:u,className:Z,onChange:v})=>{const h=(0,r.Z)(),g=(0,a.Z)("Radio",Z,d&&"disabled",m&&"hidden-widget",u&&"loading");return o.ZP.createElement("label",{className:g,dir:h.isRtl?"rtl":void 0},o.ZP.createElement("input",{type:"radio",name:s,value:l,id:e,checked:c,onChange:v,disabled:d||m}),o.ZP.createElement("div",{className:"Radio-main"},o.ZP.createElement("span",{className:"label",dir:h.isRtl?"auto":void 0},t),n&&o.ZP.createElement("span",{className:"subLabel",dir:h.isRtl?"auto":void 0},n)),u&&o.ZP.createElement(i.Z,null))})),s=(0,o.X$)((({id:e,name:t,options:n,selected:a,disabled:r,loadingOption:i,onChange:s})=>{const c=(0,o.I4)((e=>{const{value:t}=e.currentTarget;s(t,e)}),[s]);return o.ZP.createElement("div",{id:e,className:"radio-group"},n.map((e=>o.ZP.createElement(l,{name:t,label:e.label,subLabel:e.subLabel,value:e.value,checked:e.value===a,hidden:e.hidden,disabled:r,isLoading:i?i===e.value:void 0,className:e.className,onChange:c}))))}))},18051:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(46752),r=n(59107);const i=(0,o.X$)((({options:e,min:t=0,max:n=(e?e.length-1:100),step:i=1,label:l,value:s,disabled:c,bold:d,className:m,renderValue:u,onChange:Z})=>{const v=(0,r.Z)(),h=(0,o.I4)((e=>{Z(Number(e.currentTarget.value))}),[Z]),g=(0,a.Z)(m,"RangeSlider",c&&"disabled",d&&"bold"),p=(0,o.Ye)((()=>e?s/(e.length-1)*100:(s-t)/((n-t)/i)*100),[e,s,n,t,i]);return o.ZP.createElement("div",{className:g},l&&o.ZP.createElement("div",{className:"slider-top-row",dir:v.isRtl?"rtl":void 0},o.ZP.createElement("span",{className:"label",dir:"auto"},l),!e&&o.ZP.createElement("span",{className:"value",dir:"auto"},u?u(s):s)),o.ZP.createElement("div",{className:"slider-main"},o.ZP.createElement("div",{className:"slider-fill-track",style:`width: ${p}%`}),o.ZP.createElement("input",{min:t,max:n,value:s,step:i,type:"range",className:"RangeSlider__input",onChange:h}),e&&o.ZP.createElement("div",{className:"slider-options"},e.map(((e,t)=>o.ZP.createElement("div",{className:(0,a.Z)("slider-option",t===s&&"active"),onClick:()=>Z(t)},e))))))}))},43521:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(60748),a=n(97184),r=n(25190),i=n(231);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}let s,c=!0;const d=({onActivate:e,...t})=>{const n=(0,o.sO)(!1),d=(0,r.Z)((t=>{if(n.current=!0,c)return c=!1,void e(t);s&&(clearTimeout(s),s=void 0),s=window.setTimeout((()=>{n.current&&e(t)}),200)})),m=(0,r.Z)((()=>{n.current=!1})),u=(0,r.Z)((t=>{n.current=!0,e(t)}));return o.ZP.createElement(i.Z,l({},t,{onMouseEnter:a.$b?void 0:d,onMouseLeave:a.$b?void 0:m,onClick:a.$b?u:e}))}},69589:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(60748),a=n(46752),r=n(60706),i=n(12515),l=n(59107),s=n(231),c=n(34288),d=n(2255);const m=(0,o.X$)((({ref:e,children:t,parentContainerClassName:n,value:m,inputId:u,className:Z,focused:v,isLoading:h=!1,spinnerColor:g,spinnerBackgroundColor:p,placeholder:b,disabled:f,autoComplete:E,canClose:P,autoFocusSearch:C,onChange:N,onReset:w,onFocus:y,onBlur:k,onSpinnerClick:x})=>{let L=(0,o.sO)(null);e&&(L=e);const[A,D,I]=(0,r.Z)(v);(0,i.Z)(L,C,I),(0,o.d4)((()=>{L.current&&(v?L.current.focus():L.current.blur())}),[v,b]);const O=(0,l.Z)(),M=(0,o.I4)((e=>{if("ArrowDown"===e.key||"Enter"===e.key){const e=document.querySelector(`.${n} .ListItem-button`);e&&e.focus()}}),[n]);return o.ZP.createElement("div",{className:(0,a.Z)("SearchInput",Z,A&&"has-focus"),dir:O.isRtl?"rtl":void 0},t,o.ZP.createElement("input",{ref:L,id:u,type:"text",dir:"auto",placeholder:b||O("Search"),className:"form-control",value:m,disabled:f,autoComplete:E,onChange:function(e){const{currentTarget:t}=e;N(t.value)},onFocus:function(){D(),y&&y()},onBlur:function(){I(),k&&k()},onKeyDown:M}),o.ZP.createElement(d.ZP,{name:"fade",shouldCleanup:!0,activeKey:Number(h),className:"icon-container"},h?o.ZP.createElement(c.Z,{color:g,backgroundColor:p,onClick:x}):o.ZP.createElement("i",{className:"icon icon-search search-icon"})),!h&&(m||P)&&w&&o.ZP.createElement(s.Z,{round:!0,size:"tiny",color:"translucent",onClick:w},o.ZP.createElement("span",{className:"icon icon-close"})))}))},96625:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(60748),a=n(46752);const r=(0,o.X$)((e=>{const{id:t,value:n,label:r,hasArrow:i,error:l,ref:s,tabIndex:c,onChange:d,children:m}=e,u=l||r,Z=(0,a.Z)("input-group",n&&"touched",l&&"error",u&&"with-label",i&&"with-arrow","input-group");return o.ZP.createElement("div",{className:Z},o.ZP.createElement("select",{className:"form-control",id:t,value:n||"",onChange:d,tabIndex:c,ref:s},m),u&&t&&o.ZP.createElement("label",{htmlFor:t},u))}))},66219:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(85655),r=n(66735);const i=(0,o.X$)((({onChange:e,inputRef:t})=>{const[n,i]=(0,o.eJ)(),l=(0,o.I4)((t=>{i(void 0),e(t)}),[e]),s=(0,o.I4)((()=>{i(void 0)}),[]),c=(0,o.I4)((()=>{(0,a.g)("image/png, image/jpeg",(e=>{const t=e.target;t?.files?.[0]&&i(t.files[0])}),!0)}),[]);return o.ZP.createElement(o.ZP.Fragment,null,o.ZP.createElement("input",{ref:t,className:"axfkbhWJ",onClick:c}),o.ZP.createElement(r.Z,{file:n,onClose:s,onChange:l}))}))},27150:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(46752),r=n(59107);const i=function({children:e,className:t}){const n=(0,r.Z)();return o.ZP.createElement("div",{dir:n.isRtl?"rtl":void 0,className:(0,a.Z)("LxlpQKLr",t)},e)}},61607:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(59107),r=n(231);const i=({count:e,itemName:t,itemPluralName:n,isLoading:i,onClick:l})=>{const s=(0,a.Z)();return o.ZP.createElement(r.Z,{className:"ShowMoreButton",color:"translucent",size:"smaller",isText:!0,isLoading:i,isRtl:s.isRtl,onClick:l},o.ZP.createElement("i",{className:"icon icon-down"}),"Show ",e," more ",e>1?n||`${t}s`:t)}},40126:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(60748),a=n(46752),r=n(87204),i=n(31212);const l=({isOpen:e,isHidden:t,isCustom:n,id:l,className:s,onClick:c,children:d,noCloseTransition:m,shouldAnimateFirstRender:u,style:Z,ref:v})=>{const h=(0,r.Z)(e),g=(0,r.Z)(d),p=(0,o.sO)(),b=void 0===h,{shouldRender:f,transitionClassNames:E}=(0,i.Z)(e&&!t,void 0,b&&!u,!n&&void 0,m);return h&&!e&&(p.current=g),(f||t)&&o.ZP.createElement("div",{id:l,ref:v,className:(0,a.Z)(s,E),onClick:c,style:Z},e?d:p.current)}},83321:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(60748),a=n(46752);const r=(0,o.X$)((({id:e,name:t,value:n,label:r,checked:i=!1,disabled:l,inactive:s,noAnimation:c,onChange:d,onCheck:m})=>{const u=(0,o.I4)((e=>{d&&d(e),m&&m(e.currentTarget.checked)}),[d,m]),Z=(0,a.Z)("Switcher",l&&"disabled",s&&"inactive",c&&"no-animation");return o.ZP.createElement("label",{className:Z,title:r},o.ZP.createElement("input",{type:"checkbox",id:e,name:t,value:n,checked:i,disabled:l,onChange:u}),o.ZP.createElement("span",{className:"widget"}))}))},53152:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(60748),a=n(57710),r=n(46752),i=n(82972),l=n(97184),s=n(32340),c=n(17240),d=n(39415),m=n(25190),u=n(12644),Z=n(52328),v=n(58964),h=n(66902);const g="Tab--active",p=({className:e,title:t,isActive:n,isBlocked:p,badgeCount:b,isBadgeActive:f,previousActiveTab:E,onClick:P,clickArg:C,contextActions:N,contextRootElementSelector:w})=>{const y=(0,o.sO)(null);(0,o.bt)((()=>{n&&void 0===E&&y.current&&y.current.classList.add(g)}),[n,E]),(0,o.d4)((()=>{if(!n||void 0===E)return;const e=y.current,t=e.parentElement.children[E];if(!t)return void(n&&!e.classList.contains(g)&&(0,a.WM)((()=>{e.classList.add(g)})));const o=e.querySelector(".platform"),r=t.querySelector(".platform"),l=r.parentElement.offsetLeft-o.parentElement.offsetLeft,s=r.clientWidth/o.clientWidth;(0,a.WM)((()=>{r.classList.remove("animate"),o.classList.remove("animate"),o.style.transform=`translate3d(${l}px, 0, 0) scale3d(${s}, 1, 1)`,(0,a.lT)((()=>((0,i.Z)(o),()=>{o.classList.add("animate"),o.style.transform="none",t.classList.remove(g),e.classList.add(g)})))}))}),[n,E]);const{contextMenuPosition:k,handleContextMenu:x,handleBeforeContextMenu:L,handleContextMenuClose:A,handleContextMenuHide:D,isContextMenuOpen:I}=(0,c.Z)(y,!N),{handleClick:O,handleMouseDown:M}=(0,d.m)((e=>{!N||e.button!==l.tc.Secondary&&P||L(e),"mousedown"===e.type&&e.button!==l.tc.Main||P?.(C)})),T=(0,m.Z)((()=>y.current)),R=(0,m.Z)((()=>w?y.current.closest(w):document.body)),S=(0,m.Z)((()=>document.querySelector("#portals").querySelector(".Tab-context-menu .bubble"))),$=(0,m.Z)((()=>({withPortal:!0}))),{positionX:B,positionY:X,transformOriginX:W,transformOriginY:K,style:F}=(0,u.Z)(k,T,R,S,$);return o.ZP.createElement("div",{className:(0,r.Z)("Tab",P&&"Tab--interactive",e),onClick:O,onMouseDown:M,onContextMenu:x,ref:y},o.ZP.createElement("span",{className:"Tab_inner"},(0,s.Z)(t),Boolean(b)&&o.ZP.createElement("span",{className:(0,r.Z)("badge",f&&"Tab__badge--active")},b),p&&o.ZP.createElement("i",{className:"icon icon-lock-badge blocked"}),o.ZP.createElement("i",{className:"platform"})),N&&void 0!==k&&o.ZP.createElement(Z.Z,{isOpen:I,transformOriginX:W,transformOriginY:K,positionX:B,positionY:X,style:F,className:"Tab-context-menu",autoClose:!0,onClose:A,onCloseAnimationEnd:D,withPortal:!0},N.map((e=>"isSeparator"in e?o.ZP.createElement(h.Z,{key:e.key||"separator"}):o.ZP.createElement(v.Z,{key:e.title,icon:e.icon,destructive:e.destructive,disabled:!e.handler,onClick:e.handler},e.title)))))}},31711:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(60748),a=n(83716),r=n(8582),i=n(97184),l=n(78781),s=n(59107),c=n(87204),d=n(53152);const m=i.cj?450:i.wZ?400:300,u=(0,o.X$)((({tabs:e,areFolders:t,activeTab:n,big:i,onSwitchTab:u,contextRootElementSelector:Z})=>{const v=(0,o.sO)(null),h=(0,c.Z)(n);(0,l.Z)(v,void 0,!0),(0,o.d4)((()=>{const e=v.current,{scrollWidth:t,offsetWidth:o,scrollLeft:a}=e;if(t<=o)return;const i=e.childNodes[n];if(!i)return;const{offsetLeft:l,offsetWidth:s}=i,c=l-o/2+s/2;Math.abs(c-a)<16||(0,r.Z)(e,c,m)}),[n]);const g=(0,s.Z)();return o.ZP.createElement("div",{className:"TabList no-scrollbar "+(i?"big":""),ref:v,dir:g.isRtl?"rtl":void 0},e.map(((e,r)=>o.ZP.createElement(d.Z,{key:e.id??e.title,title:t&&e.id!==a.NfV?e.title:g(e.title),isActive:r===n,isBlocked:e.isBlocked,badgeCount:e.badgeCount,isBadgeActive:e.isBadgeActive,previousActiveTab:h,onClick:u,clickArg:r,contextActions:e.contextActions,contextRootElementSelector:Z}))))}))},59174:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(60748),a=n(57710),r=n(46752),i=n(59107),l=n(25190);const s=(0,o.X$)((({ref:e,id:t,className:n,value:s,label:c,error:d,success:m,disabled:u,readOnly:Z,placeholder:v,autoComplete:h,inputMode:g,maxLength:p,maxLengthIndicator:b,tabIndex:f,onChange:E,onInput:P,onKeyPress:C,onKeyDown:N,onBlur:w,onPaste:y,noReplaceNewlines:k})=>{let x=(0,o.sO)(null);e&&(x=e);const L=(0,i.Z)(),A=d||m||c,D=(0,r.Z)("input-group",s&&"touched",d?"error":m&&"success",u&&"disabled",Z&&"disabled",A&&"with-label",n),I=(0,l.Z)((e=>{(0,a.WM)((()=>{e.style.height="0",(0,a.lT)((()=>{const t=e.scrollHeight;return()=>{e.style.height=`${t}px`}}))}))}));(0,o.bt)((()=>{const e=x.current;e&&I(e)}),[]);const O=(0,o.I4)((e=>{const t=e.currentTarget;if(!k){const e=t.selectionEnd;t.value=t.value.replace(/\n/g," "),t.selectionEnd=e}I(t),E?.(e)}),[k,E]);return o.ZP.createElement("div",{className:D,dir:L.isRtl?"rtl":void 0},o.ZP.createElement("textarea",{ref:x,className:"form-control",id:t,dir:"auto",value:s||"",tabIndex:f,placeholder:v,maxLength:p,autoComplete:h,inputMode:g,disabled:u,readOnly:Z,onChange:O,onInput:P,onKeyPress:C,onKeyDown:N,onBlur:w,onPaste:y,"aria-label":A}),A&&o.ZP.createElement("label",{htmlFor:t},A),b&&o.ZP.createElement("div",{className:"max-length-indicator"},b))}))},4292:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(60748),a=n(790),r=n(82267),i=n(96557),l=n(65326),s=n(59107);const c=(0,o.X$)((({langKey:e,endsAt:t,onEnd:n})=>{const c=(0,s.Z)(),d=(0,l.Z)(),m=(0,r.bp)(),u=m<t;if((0,i.Z)(d,u?500:void 0),(0,o.d4)((()=>{u||n?.()}),[u,n]),!u)return;const Z=t-m,v=(0,a.k9)(Z);return o.ZP.createElement("span",null,c(e,v))}))},79994:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(46752);const r={root:"eGD1rubd",widget:"EXXsQxeq",min:"C4vXj96y",mid:"nRNm3LRD",max:"LdztzMx0",filler:"kudEBJOk"},i=(0,o.X$)((function({value:e}){return o.ZP.createElement("div",{className:(0,a.Z)(r.root,"Toggle"),"aria-hidden":!0},o.ZP.createElement("i",{className:(0,a.Z)(r.filler,r[e])}),o.ZP.createElement("i",{className:(0,a.Z)(r.widget,r[e])}))}))},78747:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(46752);const r="AtWkrIxV",i=(0,o.X$)((()=>o.ZP.createElement("div",{className:"Oob7moh7"},o.ZP.createElement("div",{className:(0,a.Z)("ao0o6F_1",r)}),o.ZP.createElement("div",{className:"e94nYlC4"},o.ZP.createElement("div",{className:(0,a.Z)("ANs9RCJu",r)}),o.ZP.createElement("div",{className:(0,a.Z)("RSn3O5Rx",r)})))))},74607:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(60748),a=n(46752),r=n(80036);const i=({variant:e="rectangular",animation:t="wave",width:n,height:i,forceAspectRatio:l,inline:s,className:c})=>{const d=(0,a.Z)("Skeleton",e,t,c,s&&"inline"),m=n&&i?`aspect-ratio: ${n}/${i}`:void 0,u=(0,r.Z)(l&&m,Boolean(n)&&`width: ${n}px`,!l&&Boolean(i)&&`height: ${i}px`);return o.ZP.createElement("div",{className:d,style:u},s&&" ")}}}]);
//# sourceMappingURL=2120.c90efa5eeb09d2fdba6e.js.map