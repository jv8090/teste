(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{822:function(e,t,n){Promise.resolve().then(n.bind(n,6624)),Promise.resolve().then(n.bind(n,9140)),Promise.resolve().then(n.bind(n,5477)),Promise.resolve().then(n.bind(n,8200)),Promise.resolve().then(n.bind(n,3506)),Promise.resolve().then(n.bind(n,4197))},7907:function(e,t,n){"use strict";var o=n(5313);n.o(o,"usePathname")&&n.d(t,{usePathname:function(){return o.usePathname}}),n.o(o,"useRouter")&&n.d(t,{useRouter:function(){return o.useRouter}}),n.o(o,"useSearchParams")&&n.d(t,{useSearchParams:function(){return o.useSearchParams}}),n.o(o,"useServerInsertedHTML")&&n.d(t,{useServerInsertedHTML:function(){return o.useServerInsertedHTML}})},6624:function(e,t,n){"use strict";n.r(t),n.d(t,{Banner:function(){return i},Category:function(){return c},Categorys:function(){return a},Grid:function(){return s},Page:function(){return r}});var o=n(1026);let r=o.ZP.div.withConfig({componentId:"sc-fe1606f1-0"})(["display:flex;flex-direction:column;gap:1rem;"]),i=o.ZP.img.withConfig({componentId:"sc-fe1606f1-1"})(["position:fixed;z-index:-1 !important;user-select:none;top:53px;left:0px;right:0px;width:100%;height:100%;max-height:700px;object-fit:cover;mask-image:linear-gradient( rgb(0,0,0),rgba(0,0,0,0.39),rgba(0,0,0,0) );-webkit-mask-image:linear-gradient( rgb(0,0,0),rgba(0,0,0,0.39),rgba(0,0,0,0) );opacity:50%;"]),a=o.ZP.div.withConfig({componentId:"sc-fe1606f1-2"})(["display:flex;flex-direction:column;gap:2rem;"]),c=o.ZP.div.withConfig({componentId:"sc-fe1606f1-3"})(["display:flex;flex-direction:column;gap:1.5rem;"]),s=o.ZP.div.withConfig({componentId:"sc-fe1606f1-4"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(201px,1fr));gap:1rem;"])},9140:function(e,t,n){"use strict";n.r(t),n.d(t,{HomeContext:function(){return i},HomeProvider:function(){return a},useHome:function(){return c}});var o=n(7437);n(5256),n(2368),n(9317);var r=n(2265);let i=(0,r.createContext)({}),a=e=>{let{children:t}=e,[n,a]=(0,r.useState)([]),[c,s]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{},[]),(0,o.jsx)(i.Provider,{value:{categorys:n,loading:c},children:t})},c=()=>(0,r.useContext)(i)},5477:function(e,t,n){"use strict";n.r(t),n.d(t,{Container:function(){return r},ItemPage:function(){return i},Spacing:function(){return a}});var o=n(1026);let r=o.ZP.div.withConfig({componentId:"sc-c3705ae4-0"})(["width:100%;display:flex;background-color:",";left:0;right:0;"],e=>{let{theme:t}=e;return t.background_color}),i=o.ZP.div.withConfig({componentId:"sc-c3705ae4-1"})(["z-index:2;max-width:1280px;margin-right:auto;margin-left:auto;"]),a=o.ZP.section.withConfig({componentId:"sc-c3705ae4-2"})(["max-width:1280px;margin-right:auto;margin-left:auto;padding:8rem 1.5rem 2rem 1.5rem;min-height:calc(100vh - 53px - 10rem);"])},1624:function(e,t,n){"use strict";n.r(t),n.d(t,{HeadersShopContext:function(){return s},HeadersShopProvider:function(){return d},useHeadersShop:function(){return l}});var o=n(7437),r=n(5256),i=n(2368),a=n(9317),c=n(2265);let s=(0,c.createContext)({}),d=e=>{let{children:t}=e,[n,d]=(0,c.useState)({banner:"",desc:"",discord:"",dominio:"",icon:"",instagram:"",layout:"",nome:"",telegram:"",termos:"",whatsapp:"",sistema:!0}),[l,f]=(0,c.useState)({email:""}),[u,h]=(0,c.useState)(!1),[p,m]=(0,c.useState)(!0),[g,x]=(0,c.useState)(!0),v=async()=>{await a.Z.get(i._.shop.headers.infos+(0,r.r)()).then(e=>{d(e.data),m(!1),document.title=e.data.nome;let t=document.querySelector('meta[name="description"]');t||((t=document.createElement("meta")).name="description",t.content=e.data.desc,document.head.appendChild(t));let n=document.querySelector("link[rel*='icon']")||document.createElement("link");n.type="image/x-icon",n.rel="shortcut icon",n.href=e.data.icon,document.head.appendChild(n)}).catch(e=>{console.log(e)})},b=async()=>{await a.Z.get(i._.shop.headers.client+(0,r.r)(),{headers:{authorization:localStorage.getItem("token")}}).then(e=>{f(t=>({...t,email:e.data.email})),x(!1),h(!0)}).catch(e=>{if(console.log(e),"Token inv\xe1lido."===e.response.data.error)return localStorage.removeItem("token")})};return(0,c.useEffect)(()=>{let e=!!localStorage.getItem("token");h(e),e&&b()},[]),(0,o.jsx)(s.Provider,{value:{HeadersInfos:n,setHeadersInfos:d,tokenStatus:u,loading:p,loadingClient:g,setTokenStatus:h,GetHeaders:v,client:l,GetClient:b},children:t})},l=()=>(0,c.useContext)(s)},8200:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var o=n(7437),r=n(1026);let i=r.ZP.footer.withConfig({componentId:"sc-2d3c3b2a-0"})(["border-top:1px solid ",";background-color:",";display:flex;align-items:center;justify-content:center;padding:1rem;"],e=>{let{theme:t}=e;return t.border.border},e=>{let{theme:t}=e;return t.color.primary});r.ZP.div.withConfig({componentId:"sc-2d3c3b2a-1"})([""]);let a=r.ZP.h1.withConfig({componentId:"sc-2d3c3b2a-2"})(["font-style:normal;font-weight:400;font-size:13px;line-height:20px;color:",";"],e=>{let{theme:t}=e;return t.text.p}),c=r.ZP.span.withConfig({componentId:"sc-2d3c3b2a-3"})(["font-style:normal;font-weight:400;font-size:13px;line-height:20px;color:",";"],e=>{let{theme:t}=e;return t.text.h1});var s=n(8792);function d(){return(0,o.jsx)(i,{children:(0,o.jsx)(s.default,{href:"https://ereemby.com",target:"_blank",children:(0,o.jsxs)(a,{children:["E-commerce developed by ",(0,o.jsx)(c,{children:"Ereemby"})]})})})}},3506:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var o=n(7437),r=n(1026);let i=r.ZP.header.withConfig({componentId:"sc-3ffd7727-0"})(['position:fixed;z-index:5;left:0;right:0;top:0px;&::before{content:"";position:absolute;inset:0;z-index:-1;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);}background-color:',";border-bottom:1px solid ",";box-shadow:",";"],e=>{let{theme:t}=e;return t.color.primary},e=>{let{theme:t}=e;return"#ffffff"===t.color.header?"transparent":e=>{let{theme:t}=e;return t.border.border}},e=>{let{theme:t}=e;return t.shadow.bottom}),a=r.ZP.div.withConfig({componentId:"sc-3ffd7727-1"})(["display:flex;justify-content:space-between;justify-items:center;align-items:center;gap:1rem;max-width:1320px;margin-right:auto;margin-left:auto;padding:0.5rem 1.5rem;.search-items{display:flex;}"]),c=r.ZP.div.withConfig({componentId:"sc-3ffd7727-2"})(["width:100%;display:flex;align-items:center;gap:0.5rem;cursor:pointer;font-style:normal;font-weight:500;font-size:17px;line-height:17px;color:",";transition:0.5s;img{width:30px;height:30px;object-fit:cover;border-radius:5px;}"],e=>{let{theme:t}=e;return t.text.h1}),s=r.ZP.div.withConfig({componentId:"sc-3ffd7727-3"})(["display:flex;align-items:center;gap:1rem;"]),d=r.ZP.div.withConfig({componentId:"sc-3ffd7727-4"})(["position:fixed;right:20px;bottom:20px;display:flex;flex-direction:column;gap:0.6rem;transition:.3s;img{cursor:pointer;border-radius:100%;object-fit:cover;}img:active{transform:scale(0.93);}"]);r.ZP.div.withConfig({componentId:"sc-3ffd7727-5"})(["display:flex;align-items:center;gap:.5rem;svg{fill:",";}"],e=>{let{theme:t}=e;return t.text.h1}),r.ZP.div.withConfig({componentId:"sc-3ffd7727-6"})(["display:flex;flex-direction:column;h1{text-transform:capitalize;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;word-break:break-all;max-width:160px;}@media (max-width:766px){display:none;}"]),r.ZP.img.withConfig({componentId:"sc-3ffd7727-7"})(["width:30px;height:30px;border-radius:100%;"]);var l=n(1624);let f=r.ZP.div.withConfig({componentId:"sc-b1bc79ff-0"})(["display:flex;align-items:center;justify-content:center;gap:0.2rem;padding:3px;border:1px solid ",";border-radius:50px;svg{cursor:pointer;width:20px;height:20px;padding:4px;fill:",";transition:0.5s;}svg:hover{fill:",";}svg.active{background:",";border-radius:100%;transition:0.5s;}"],e=>{let{theme:t}=e;return t.inputTheme.color},e=>{let{theme:t}=e;return t.inputTheme.color},e=>{let{theme:t}=e;return t.inputTheme.hover},e=>{let{theme:t}=e;return t.inputTheme.active});var u=n(2676);let h=()=>{let{themeName:e,toggleTheme:t}=(0,u.Fg)();return(0,o.jsxs)(f,{onClick:t,children:[(0,o.jsx)("svg",{className:"".concat("light"===e&&"active"),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#ffffff",viewBox:"0 0 256 256",children:(0,o.jsx)("path",{d:"M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"})}),(0,o.jsx)("svg",{className:"".concat("dark"===e&&"active"),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#ffffff",viewBox:"0 0 256 256",children:(0,o.jsx)("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"})})]})};var p=n(8792);let m=r.ZP.div.withConfig({componentId:"sc-dda3f1cf-0"})(["position:relative;width:100%;overflow:hidden;background-color:",'10;border-radius:10px;&::before{position:absolute;content:"";height:calc(100% + 30%);width:100%;top:-15%;bottom:0;left:0;background:linear-gradient( 129deg,rgba(217,217,217,0) 37%,'," 50%,rgba(217,217,217,0) 60% );animation:loadingContainer 1.3s linear infinite;opacity:.6;filter:blur(50px);}@keyframes loadingContainer{0%{transform:translateX(-150%);}100%{transform:translateX(150%);}}"],e=>{let{theme:t}=e;return t.color.reverse},e=>{let{theme:t}=e;return t.color.reverse});function g(e){let{maxWidth:t,minWidth:n,height:r,loading:i,children:a}=e;return(0,o.jsx)(o.Fragment,{children:a?(0,o.jsx)(o.Fragment,{children:i?(0,o.jsx)(m,{style:{maxWidth:t||"auto",minWidth:n||"auto",height:r}}):a}):(0,o.jsx)(m,{style:{maxWidth:t||"auto",minWidth:n||"auto",height:r}})})}var x=n(703),v=n(2265),b=n(3651),w=n(7907);let y=r.ZP.div.withConfig({componentId:"sc-140224f5-0"})(["position:relative;display:flex;justify-content:flex-end;"]),k=r.ZP.div.withConfig({componentId:"sc-140224f5-1"})(["display:flex;align-items:center;gap:0.5rem;cursor:pointer;svg{fill:",";}svg.close{transition:0.5s;transform:rotate(180deg);width:16px;height:16px;}&.open{svg.open{transition:0.5s;transform:rotate(0);width:16px;height:16px;}}@media (max-width:766px){svg{display:none;}}"],e=>{let{theme:t}=e;return t.text.h1}),P=r.ZP.div.withConfig({componentId:"sc-140224f5-2"})(["display:flex;flex-direction:column;gap:2px;h1{text-transform:capitalize;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;word-break:break-all;max-width:160px;}@media (max-width:766px){display:none;}"]),j=r.ZP.div.withConfig({componentId:"sc-140224f5-3"})(["z-index:-2;position:absolute;background-color:",";border:1px solid ",";border-radius:10px;top:58px;width:220px;padding:1rem;transform:translateY(calc(-100% - 3rem));transition:0.5s;&.open{transform:translateY(0);}"],e=>{let{theme:t}=e;return t.color.sub},e=>{let{theme:t}=e;return t.border.border}),I=r.ZP.div.withConfig({componentId:"sc-140224f5-4"})(["padding:0.5rem;padding-bottom:1rem;h1{overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;word-break:break-all;}p{overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;word-break:break-all;}"]),C=r.ZP.div.withConfig({componentId:"sc-140224f5-5"})(["display:flex;flex-direction:column;"]),Z=r.ZP.div.withConfig({componentId:"sc-140224f5-6"})(["cursor:pointer;border-radius:6px;padding:0.5rem;&.active{h1{color:",";}}&:hover{background-color:","08;h1{color:",";}}&.exit{h1{color:",";}}"],e=>{let{theme:t}=e;return t.text.h1},e=>{let{theme:t}=e;return t.color.reverse},e=>{let{theme:t}=e;return t.text.h1},e=>{let{theme:t}=e;return t.color.red}),_=r.ZP.div.withConfig({componentId:"sc-140224f5-7"})(["min-height:1px;background-color:",";margin:0.5rem 0;"],e=>{let{theme:t}=e;return t.border.border}),A=r.ZP.h1.withConfig({componentId:"sc-140224f5-8"})(["font-style:normal;font-weight:500;font-size:14px;line-height:16px;color:",";"],e=>{let{theme:t}=e;return t.text.p});var S=n(8561),z=n(5342),E=n(7259);let F=r.ZP.div.withConfig({componentId:"sc-f582fd65-0"})(['display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;border-radius:100%;img{object-fit:cover;border-radius:100%;z-index:2;transition:all;}&::before{content:"";position:absolute;inset:0px;background:linear-gradient( 160deg,#fff 0%,#000 100% );opacity:50%;animation:icon-user-rotate 5s linear infinite both;@keyframes icon-user-rotate{0%{transform:rotate(0);}100%{transform:rotate(360deg);}}}&::after{content:"";position:absolute;inset:2px;z-index:1;background-color:',";;border-radius:100%;opacity:90%;}"],e=>{let{theme:t}=e;return t.color.sub});function H(e){let{img:t,size:n}=e;return(0,o.jsx)(F,{style:{width:"".concat(n+10,"px"),height:"".concat(n+10,"px"),minWidth:"".concat(n+10,"px"),minHeight:"".concat(n+10,"px")},children:(0,o.jsx)(x.default,{src:t,alt:"Profile",width:n,height:n,quality:100,priority:!0,loading:"eager"})})}function W(){var e;let{client:t,loadingClient:n,setTokenStatus:r}=(0,l.useHeadersShop)(),i=(0,w.usePathname)(),a=(0,w.useRouter)(),[c,s]=(0,v.useState)(!1),d=(0,v.useRef)(null);return(0,E.O)(d,()=>s(!1)),(0,o.jsxs)(y,{ref:d,children:[(0,o.jsxs)(k,{className:c?"open":"close",onClick:()=>c?s(!1):s(!0),children:[(0,o.jsx)(g,{loading:n,minWidth:"30px",height:"30px",children:(0,o.jsx)(H,{img:"https://cdn.discordapp.com/attachments/1186722898405236847/1196959442546196490/DALLE_2024-01-16_20.29.13_-_A_sleek_and_modern_logo_featuring_the_letters__RB__in_black_with_a_white_background._The_design_should_be_minimalistic_focusing_on_the_bold_and_clear.png?ex=65b98659&is=65a71159&hm=aba6b14edbfd229742b388118cc47f26951f2f53c7b593e2e66a1f5736bd4e1d&",size:28})}),(0,o.jsxs)(g,{loading:n,minWidth:"100px",height:"17px",children:[(0,o.jsxs)(P,{children:[(0,o.jsx)(S.Z,{Weight:500,Size:14,Height:16,children:null==t?void 0:null===(e=t.email)||void 0===e?void 0:e.split("@")[0]}),(0,o.jsx)(z.Z,{Weight:500,Size:12,Height:13,children:"User"})]}),(0,o.jsx)("svg",{className:c?"open":"close",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#fcfcfc",viewBox:"0 0 256 256",children:(0,o.jsx)("path",{d:"M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"})})]})]}),(0,o.jsxs)(j,{className:c?"open":"close",children:[(0,o.jsxs)(I,{children:[(0,o.jsx)(S.Z,{Weight:500,Size:12,Height:16,children:null==t?void 0:t.email}),(0,o.jsx)(z.Z,{Weight:500,Size:12,Height:15,children:"E-mail"})]}),(0,o.jsxs)(C,{children:[(0,o.jsx)(_,{}),(0,o.jsx)(Z,{className:T("/profile/products",i),onClick:()=>a.push("/profile/products"),children:(0,o.jsx)(A,{children:"Compras"})}),(0,o.jsx)(_,{}),(0,o.jsx)(Z,{className:"exit",onClick:()=>(localStorage.removeItem("token"),r(!1)),children:(0,o.jsx)(A,{children:"Sair"})})]})]})]})}let T=(e,t)=>{let n=t.split("/");return"/".concat(n[1],"/").concat(n[2])===e?"active":t!==e?"":"active"};function N(e){let{infos:t}=e,{HeadersInfos:n,tokenStatus:r,client:f,loading:u,loadingClient:m}=(0,l.useHeadersShop)(),y=(0,w.useRouter)(),k=[{link:"".concat((null==t?void 0:t.instagram)||""),icon:"/imgs/icons/instagram.webp"},{link:"".concat((null==t?void 0:t.telegram)||""),icon:"/imgs/icons/telegram.png"},{link:"".concat((null==t?void 0:t.whatsapp)||""),icon:"/imgs/icons/whatsapp.png"},{link:"".concat((null==t?void 0:t.discord)||""),icon:"/imgs/icons/discord.png"}];return(0,o.jsxs)(i,{children:[(0,o.jsx)(d,{children:null==k?void 0:k.map((e,t)=>(0,o.jsx)(v.Fragment,{children:e.link&&(0,o.jsx)(p.default,{href:e.link,target:"_blank",children:(0,o.jsx)(x.default,{src:e.icon,alt:"",placeholder:"empty",quality:70,width:50,height:50,loading:"lazy"})})},t))}),(0,o.jsxs)(a,{children:[(0,o.jsx)(p.default,{href:"/",children:(0,o.jsxs)(c,{children:[(0,o.jsx)(g,{loading:!(null==t?void 0:t.icon),minWidth:"30px",height:"30px",children:(0,o.jsx)("img",{src:null==t?void 0:t.icon,alt:""})}),(0,o.jsx)(g,{loading:!(null==t?void 0:t.nome),minWidth:"120px",height:"17px",children:null==t?void 0:t.nome})]})}),(0,o.jsxs)(s,{children:[(0,o.jsx)(h,{}),r?(0,o.jsx)(W,{}):(0,o.jsx)(b.Z,{name:"Login",width:"80px",status:!0,onClick:()=>y.push("/login")})]})]})]})}},3651:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(7437),r=n(1026);let i=r.ZP.div.withConfig({componentId:"sc-4fc45a7a-0"})(["width:110px;height:35px;transition:0.2s;background:",";border:none;border-radius:8px;cursor:not-allowed;opacity:30%;display:flex;align-items:center;justify-content:center;&.on{opacity:1;cursor:pointer;&:active{transform:scale(0.93);}}&.delete{background:",";span{color:#fff;}circle{stroke:#fff;}}&.name{background:transparent;&:hover{background:","20;}span{color:",";}}&.download{background:#3e81ed;span{color:#fff;}}"],e=>{let{theme:t}=e;return t.buttons.primary},e=>{let{theme:t}=e;return t.color.red},e=>{let{theme:t}=e;return t.buttons.primary},e=>{let{theme:t}=e;return t.buttons.text.reverse}),a=r.ZP.span.withConfig({componentId:"sc-4fc45a7a-1"})(["font-style:normal;font-weight:450;font-size:16px;line-height:24px;color:",";"],e=>{let{theme:t}=e;return t.buttons.text.text}),c=r.ZP.div.withConfig({componentId:"sc-4fc45a7a-2"})(["z-index:99;display:flex;align-items:center;justify-content:center;svg{width:24px;transform-origin:center;animation:rotate4 2s linear infinite;}circle{fill:none;stroke:#000;stroke-width:4;stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:dash4 1.5s ease-in-out infinite;}@keyframes rotate4{100%{transform:rotate(360deg);}}@keyframes dash4{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px;}100%{stroke-dashoffset:-125px;}}"]);function s(e){let{type:t,status:n,name:r,loading:s,width:d,height:l,onClick:f}=e,u=()=>{!s&&n&&f&&f()};return(0,o.jsx)(i,{className:s?"".concat(t):n?"on ".concat(t):"".concat(t),onClick:()=>u(),style:{width:"".concat(d),height:"".concat(l),maxWidth:"".concat(d),maxHeight:"".concat(l)},children:s?(0,o.jsx)(c,{children:(0,o.jsx)("svg",{viewBox:"25 25 50 50",children:(0,o.jsx)("circle",{r:"20",cy:"50",cx:"50"})})}):(0,o.jsx)(a,{children:r})})}},8561:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(7437),r=n(8139);function i(e){let{children:t,type:n,optional:i,Weight:a,Size:c,Height:s,className:d,onClick:l}=e;return(0,o.jsx)(o.Fragment,{children:!n&&(0,o.jsx)(r.Style,{onClick:l,className:d,style:{fontWeight:a,fontSize:"".concat(c,"px"),lineHeight:"".concat(s,"px")},children:t})||"list"===n&&(0,o.jsxs)(r.List,{children:[t," ",i&&(0,o.jsx)(r.Span,{children:"( opcional )"})]})})}},8139:function(e,t,n){"use strict";n.r(t),n.d(t,{List:function(){return a},Span:function(){return i},Style:function(){return r}});var o=n(1026);let r=o.ZP.h1.withConfig({componentId:"sc-39e2501f-0"})(["font-style:normal;font-weight:400;font-size:16px;line-height:20px;color:",";"],e=>{let{theme:t}=e;return t.text.h1}),i=o.ZP.span.withConfig({componentId:"sc-39e2501f-1"})(["font-style:normal;font-weight:400;font-size:11px;line-height:13px;color:",";"],e=>{let{theme:t}=e;return t.text.p}),a=o.ZP.h1.withConfig({componentId:"sc-39e2501f-2"})(["display:flex;align-items:center;gap:.3rem;font-style:normal;font-weight:500;font-size:13px;line-height:16px;color:",";"],e=>{let{theme:t}=e;return t.text.h1})},5342:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(7437);let r=n(1026).ZP.p.withConfig({componentId:"sc-5e82d9e5-0"})(["font-style:normal;font-weight:400;font-size:17px;line-height:25px;color:",";"],e=>{let{theme:t}=e;return t.text.p});function i(e){let{children:t,Weight:n,Size:i,Height:a}=e;return(0,o.jsx)(r,{style:{fontWeight:n,fontSize:"".concat(i,"px"),lineHeight:"".concat(a,"px")},children:t})}},4197:function(e,t,n){"use strict";n.r(t),n.d(t,{PaymentContext:function(){return d},PaymentProvider:function(){return l},usePayment:function(){return f}});var o=n(7437),r=n(5256),i=n(2368),a=n(9317),c=n(7907),s=n(2265);let d=(0,s.createContext)({}),l=e=>{let{children:t}=e,[n,l]=(0,s.useState)({email:"",copiaecola:"",nome:"",qr:"",quantidade:1,status:"p",total:0,product:"",id:""}),f=(0,c.useRouter)(),[u,h]=(0,s.useState)(!0),p=async e=>{await a.Z.get(i._.shop.payment.order+(0,r.r)()+"&id=".concat(e)).then(e=>{let t=e.data.pedido;l(e=>({...e,email:t.email,copiaecola:t.copiaecola,nome:t.nome,qr:t.qr,quantidade:t.quantidade,status:t.status,total:t.total}))}).catch(e=>{if(console.log(e),"pedido n\xe3o encontrado"===e.response.data.error)return f.push("/")}),h(!1)};return(0,o.jsx)(d.Provider,{value:{GenPayment:p,paymentInfos:n,setPaymentInfos:l,loading:u},children:t})},f=()=>(0,s.useContext)(d)},2676:function(e,t,n){"use strict";n.d(t,{f6:function(){return s},Fg:function(){return d}});var o=n(7437),r=n(2265);let i={color:{background_color:"#000",container:"#0a0a0a",sub:"#000",reverse:"#ffffff",primary:"#000000",secondary:"#080808",warnings:"#ffd152",header:"#000",nav:"#000",bottom:"#000",green:"#21c985",yellow:"#ffba09",blue:"#3e81ed",red:"#ff493f"},gradient:{container_gradient:"linear-gradient(180deg, #33333305, #33333325 65.62%)",green:"linear-gradient(212deg,#08452C 0.28%,rgba(17,46,70,0) 97.75%)",yellow:"linear-gradient(212deg, #986F06 0.28%, rgba(17, 46, 70, 0) 97.75%)",red:"linear-gradient(212deg, #77100A 0.28%, rgba(17, 46, 70, 0) 97.75%)"},text:{h1:"#ffffff",p:"#3b3b3b",reverse:"#000000"},border:{border:"#1c1c1c",focus:"#fcb64c"},shadow:{bottom:"0 2px 3px transparent",header:"0 1px 3px #ffffff00",nav:"0 5px 3px #ffffff00"},buttons:{primary:"#ffffff",text:{text:"#000",reverse:"#fff"},interaction:{icon:"#fff",text:"#fff",play:"#25D366",txt:"#ffd152"}},inputs:{color:"#fff",container:"#1c1c1c60"},loading:{color:"#ffffff",status:"#ffffff20"},nav:{container:"transparent",text:"#fff",active:{container:"#fff",text:"#000"}},status:{on:"#25D366",off:"#ff5959"},inputTheme:{color:"#ffffff40",active:"#ffffff20",hover:"#fff"},alert:{success:"#3CEEA6",pending:"#FFDF49",error:"#FF5252"}},a={color:{background_color:"#fff",container:"#dedede",sub:"#fff",reverse:"#000000",primary:"#fff",secondary:"#f2f2f2",warnings:"#ffd152",header:"#ffffff",nav:"#fff",bottom:"#F5F7F8",green:"#21c985",yellow:"#ffba09",blue:"#3e81ed",red:"#ff493f"},gradient:{container_gradient:"linear-gradient(180deg, #33333305, #33333325 65.62%)",green:"linear-gradient(212deg,#08452C70 0.28%,rgba(17,46,70,0) 97.75%)",yellow:"linear-gradient(212deg, #986F0670 0.28%, rgba(17, 46, 70, 0) 97.75%)",red:"linear-gradient(212deg, #77100A70 0.28%, rgba(17, 46, 70, 0) 97.75%)"},text:{h1:"#000000",p:"#bfbfbf",reverse:"#ffffff"},border:{border:"#dedede",focus:"#fcb64c"},shadow:{bottom:"0 2px 3px #00000010",header:"0 1px 5px #00000030",nav:"0 5px 5px #00000030"},buttons:{primary:"#000000",text:{text:"#fff",reverse:"#000"},interaction:{icon:"#fff",text:"#fff",play:"#25D366",txt:"#ffd152"}},loading:{color:"#000000",status:"#eaeaea"},nav:{container:"transparent",text:"#000",active:{container:"#000",text:"#fff"}},status:{on:"#25D366",off:"#ff5959"},inputTheme:{color:"#00000060",active:"#00000040",hover:"#000"},alert:{success:"#3CEEA6",pending:"#FFDF49",error:"#FF5252"}},c=(0,r.createContext)({}),s=e=>{let{children:t}=e,[n,s]=(0,r.useState)("");return(0,r.useEffect)(()=>{var e;s(null!==(e=localStorage.getItem("theme"))&&void 0!==e?e:"dark")},[]),(0,o.jsx)(c.Provider,{value:{currentTheme:"light"===n?a:i,themeName:n,toggleTheme:()=>{let e="light"===n?"dark":"light";s(e),localStorage.setItem("theme",e)}},children:t})},d=()=>(0,r.useContext)(c)},5256:function(e,t,n){"use strict";function o(){return"?loja=".concat("localhost"===location.hostname?"store.ereemby.com":location.hostname)}n.d(t,{r:function(){return o}})},2368:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});var o=n(479);let r={login:"".concat(o.v.API,"/login"),token:"".concat(o.v.API,"/token"),shop:{ban:"".concat(o.v.API,"/ban"),login:"".concat(o.v.API,"/clientes/login"),auth:{google:"".concat(o.v.API,"/auth/google"),discord:"".concat(o.v.API,"/auth/discord")},headers:{infos:"".concat(o.v.API,"/infos"),client:"".concat(o.v.API,"/clientes/infos")},profile:{products:"".concat(o.v.API,"/clientes/produtos")},payment:{buy:"".concat(o.v.API,"/comprar"),order:"".concat(o.v.API,"/pedidos"),verif:"".concat(o.v.API,"/verificar")},home:{products:"".concat(o.v.API,"/produtos")},product:{desc:"".concat(o.v.API,"/produto/info"),product:"".concat(o.v.API,"/produto")}},dashboard:{products:{product:"".concat(o.v.API,"/dashboard/produto"),products:"".concat(o.v.API,"/dashboard/produtos"),category:"".concat(o.v.API,"/dashboard/produtos"),pos:"".concat(o.v.API,"/dashboard/categorias/pos"),categorias:"".concat(o.v.API,"/dashboard/categorias")},sales:{historic:"".concat(o.v.API,"/dashboard/vendas"),info:"".concat(o.v.API,"/dashboard/venda")},config:{config:"".concat(o.v.API,"/dashboard/config")}}}},479:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});let o={API:"https://api.ereemby.online",GATO:"https://cdn.discordapp.com/emojis/1118117438354116708.webp?size=96&quality=lossless",meta:{name:"Ereemby",title:"Ereemby",description:"",color:"",icon:"https://cdn.discordapp.com/attachments/862819022550728744/1116858657565577348/RBaaaa.png?ex=6533012e&is=65208c2e&hm=092091628c29f520ff763c24f72319d82243f0150d1d6abe3a44841bc71daa8e&",banner:"https://cdn.discordapp.com/attachments/862819022550728744/1116858657565577348/RBaaaa.png?ex=6533012e&is=65208c2e&hm=092091628c29f520ff763c24f72319d82243f0150d1d6abe3a44841bc71daa8e&"}}},7259:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var o=n(2265);function r(e,t){(0,o.useEffect)(()=>{function n(n){e.current&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[e,t])}}},function(e){e.O(0,[317,26,792,703,971,69,744],function(){return e(e.s=822)}),_N_E=e.O()}]);