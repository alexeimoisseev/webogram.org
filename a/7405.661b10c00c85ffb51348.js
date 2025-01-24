"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[7405],{32794:(e,t,n)=>{n.r(t),n.d(t,{AuthCode:()=>p,AuthPassword:()=>E,AuthRegister:()=>N});var r=n(84051),a=n(13439),o=n(87894),s=n(82393),l=n(26072),i=n(39351),c=n(18276),u=n(31481),d=n(71851),m=n(43874),h=n(18104);const A=(0,r.ph)((({code:e,codeLength:t,trackingDirection:n,isTracking:a,isBig:o})=>{const[s,l]=(0,r.J0)(!1),{isMobile:i}=(0,m.Ay)(),c=165/t,A=i?u.UyP:u.H6l,g=(0,r.hb)((()=>l(!0)),[]);return r.Ay.createElement("div",{id:"monkey",className:o?"big":""},!s&&r.Ay.createElement("div",{className:"monkey-preview"}),r.Ay.createElement(h.A,{size:o?u.r2x:A,className:a?"hidden":void 0,tgsUrl:d.w.MonkeyIdle,play:!a,onLoad:g}),r.Ay.createElement(h.A,{size:o?u.r2x:A,className:a?"shown":"hidden",tgsUrl:d.w.MonkeyTracking,playSegment:a?function(){const r=e&&e.length>1||n<0?15+c*(e.length-1):0,a=e.length===t?180:15+c*e.length;return n<1?[a,r]:[r,a]}():void 0,speed:2,noLoop:!0}))}));var g=n(40664),y=n(52745);const p=(0,r.ph)((0,a.EK)((e=>(0,o.Up)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authErrorKey"])))((({authPhoneNumber:e,authIsCodeViaApp:t,authIsLoading:n,authErrorKey:o})=>{const{setAuthCode:u,returnToAuthPhoneNumber:d,clearAuthErrorKey:m}=(0,a.ko)(),h=(0,i.A)(),p=(0,r.li)(null),[v,b]=(0,r.J0)(""),[E,f]=(0,r.J0)(!1),[w,N]=(0,r.J0)(1);(0,r.vJ)((()=>{s.TF||p.current.focus()}),[]),(0,l.A)({isActive:!0,onBack:d});const k=(0,r.hb)((e=>{o&&m();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==v&&(b(t.value),E?t.value.length||f(!1):f(!0),v&&v.length>t.value.length?N(-1):N(1),5===t.value.length&&u({code:t.value}))}),[o,v,E,u]);return r.Ay.createElement("div",{id:"auth-code-form",className:"custom-scroll"},r.Ay.createElement("div",{className:"auth-form"},r.Ay.createElement(A,{code:v,codeLength:5,isTracking:E,trackingDirection:w}),r.Ay.createElement("h1",null,e,r.Ay.createElement("div",{className:"auth-number-edit div-button",onClick:function(){d()},role:"button",tabIndex:0,title:h("WrongNumber"),"aria-label":h("WrongNumber")},r.Ay.createElement(c.A,{name:"edit"}))),r.Ay.createElement("p",{className:"note"},h(t?"SentAppCode":"LoginJustSentSms",void 0,{withNodes:!0,withMarkdown:!0})),r.Ay.createElement(g.A,{ref:p,id:"sign-in-code",label:h("Code"),onInput:k,value:v,error:o&&h.withRegular(o),autoComplete:"off",inputMode:"numeric"}),n&&r.Ay.createElement(y.A,null)))})));var v=n(15535),b=n(3178);const E=(0,r.ph)((0,a.EK)((e=>(0,o.Up)(e,["authIsLoading","authErrorKey","authHint"])))((({authIsLoading:e,authErrorKey:t,authHint:n})=>{const{setAuthPassword:o,clearAuthErrorKey:s}=(0,a.ko)(),l=(0,i.A)(),[c,u]=(0,r.J0)(!1),d=(0,r.hb)((e=>{u(e)}),[]),m=(0,r.hb)((e=>{o({password:e})}),[o]);return r.Ay.createElement("div",{id:"auth-password-form",className:"custom-scroll"},r.Ay.createElement("div",{className:"auth-form"},r.Ay.createElement(b.A,{isPasswordVisible:c}),r.Ay.createElement("h1",null,l("LoginHeaderPassword")),r.Ay.createElement("p",{className:"note"},l("LoginEnterPasswordDescription")),r.Ay.createElement(v.A,{clearError:s,error:t&&l.withRegular(t),hint:n,isLoading:e,isPasswordVisible:c,onChangePasswordVisibility:d,onSubmit:m})))})));var f=n(43434),w=n(64493);const N=(0,r.ph)((0,a.EK)((e=>(0,o.Up)(e,["authIsLoading","authErrorKey"])))((({authIsLoading:e,authErrorKey:t})=>{const{signUp:n,clearAuthErrorKey:o,uploadProfilePhoto:s}=(0,a.ko)(),l=(0,i.A)(),[c,u]=(0,r.J0)(!1),[d,m]=(0,r.J0)(),[h,A]=(0,r.J0)(""),[y,p]=(0,r.J0)(""),v=(0,r.hb)((e=>{t&&o();const{target:n}=e;A(n.value),u(n.value.length>0)}),[t]),b=(0,r.hb)((e=>{const{target:t}=e;p(t.value)}),[]);return r.Ay.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},r.Ay.createElement("div",{className:"auth-form"},r.Ay.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),n({firstName:h,lastName:y}),d&&s({file:d})}},r.Ay.createElement(f.A,{onChange:m}),r.Ay.createElement("h2",null,l("YourName")),r.Ay.createElement("p",{className:"note"},l("LoginRegisterDesc")),r.Ay.createElement(g.A,{id:"registration-first-name",label:l("LoginRegisterFirstNamePlaceholder"),onChange:v,value:h,error:t&&l.withRegular(t),autoComplete:"given-name"}),r.Ay.createElement(g.A,{id:"registration-last-name",label:l("LoginRegisterLastNamePlaceholder"),onChange:b,value:y,autoComplete:"family-name"}),c&&r.Ay.createElement(w.A,{size:"smaller",type:"submit",ripple:!0,isLoading:e},l("Next")))))})))},15535:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(84051),a=n(31481),o=n(66644),s=n(87357),l=n(83868),i=n(82393),c=n(14737),u=n(43874),d=n(59030),m=n(64493),h=n(18276);const A=(0,r.ph)((({isLoading:e=!1,isPasswordVisible:t,error:n,hint:A,placeholder:g="Password",submitLabel:y="Next",description:p,shouldShowSubmit:v,shouldResetValue:b,shouldDisablePasswordManager:E=!1,noRipple:f=!1,clearError:w,onChangePasswordVisibility:N,onInputChange:k,onSubmit:L})=>{const C=(0,r.li)(null),P=(0,d.A)(),{isMobile:J}=(0,u.Ay)(),[x,I]=(0,r.J0)(""),[K,S]=(0,r.J0)(!1),T=J?550:400;return(0,r.vJ)((()=>{b&&I("")}),[b]),(0,c.A)((()=>{i.TF||C.current.focus()}),T),(0,r.vJ)((()=>{n&&(0,o.RK)((()=>{C.current.focus(),C.current.select()}))}),[n]),r.Ay.createElement("form",{action:"",onSubmit:L?function(t){t.preventDefault(),e||K&&L(x)}:l.A,autoComplete:"off"},r.Ay.createElement("div",{className:(0,s.A)("input-group password-input",x&&"touched",n&&"error"),dir:P.isRtl?"rtl":void 0},E&&r.Ay.createElement("input",{type:"password",id:"prevent_autofill",autoComplete:"off",className:"visually-hidden",tabIndex:-2}),r.Ay.createElement("input",{ref:C,className:"form-control",type:t?"text":"password",id:"sign-in-password",value:x||"",autoComplete:E?"one-time-code":"current-password",onChange:function(e){n&&w();const{target:t}=e;I(t.value),S(t.value.length>=a.AGC),k&&k(t.value)},maxLength:256,dir:"auto"}),r.Ay.createElement("label",null,n||A||g),r.Ay.createElement("div",{className:"div-button toggle-password",onClick:function(){N(!t)},role:"button",tabIndex:0,title:"Toggle password visibility","aria-label":"Toggle password visibility"},r.Ay.createElement(h.A,{name:t?"eye":"eye-closed"}))),p&&r.Ay.createElement("p",{className:"description"},p),L&&(K||v)&&r.Ay.createElement(m.A,{size:"smaller",type:"submit",ripple:!f,isLoading:e,disabled:!K},y))}))},3178:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(84051),a=n(31481),o=n(71851),s=n(14737),l=n(43874),i=n(37661),c=n(18104);const u=[0,50],d=[0,20],m=[20,0],h=(0,r.ph)((({isPasswordVisible:e,isBig:t})=>{const[n,h]=(0,i.A)(!1),[A,g]=(0,i.A)(!1),{isMobile:y}=(0,l.Ay)(),p=y?a.UyP:a.H6l;(0,s.A)(g,2e3);const v=(0,r.hb)(h,[h]);return r.Ay.createElement("div",{id:"monkey",className:t?"big":""},!n&&r.Ay.createElement("div",{className:"monkey-preview"}),r.Ay.createElement(c.A,{size:t?a.r2x:p,className:A?"hidden":"shown",tgsUrl:o.w.MonkeyClose,playSegment:u,noLoop:!0,onLoad:v}),r.Ay.createElement(c.A,{size:t?a.r2x:p,className:A?"shown":"hidden",tgsUrl:o.w.MonkeyPeek,playSegment:e?d:m,noLoop:!0}))}))},14737:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(84051),a=n(17712);const o=function(e,t){const n=(0,a.A)(e);(0,r.vJ)((()=>{if("number"!=typeof t)return;const e=setTimeout((()=>n()),t);return()=>clearTimeout(e)}),[t])}},37859:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(84051);const a=(e,t,n)=>{const a=(0,r.li)();return(0,r.Nf)((()=>{const n=a.current;return a.current=t,e(n||[])}),t,n)}},14680:(e,t,n)=>{n.d(t,{FD:()=>a,ZJ:()=>s,wb:()=>o});let r=0;function a(){r+=1}function o(){r-=1}function s(){return r>0}},91034:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(84051);function a(e){return function(t){const n=(0,r.li)(t);return t.isOpen?n.current=t:n.current={...n.current,isOpen:!1},e(n.current)}}},29441:(e,t,n)=>{function r(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const r=n.findIndex((e=>e.isSameNode(document.activeElement)));let a=0;r>=0&&(a=t.shiftKey?r>0?r-1:n.length-1:r<n.length-1?r+1:0),n[a].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}n.d(t,{A:()=>r})}}]);
//# sourceMappingURL=7405.661b10c00c85ffb51348.js.map