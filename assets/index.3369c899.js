import{j as f,s as a,U as h,C as p,r as l,R as g,a as m}from"./vendor.296f9691.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};w();const n=f.exports.jsx,x=f.exports.jsxs;function v({width:o}){let r=new Array(200).fill(0);const[i,c]=l.exports.useState(!1),[e,t]=l.exports.useState(r),s=u=>{const d=[...e];d[u]=1,t(d)};return l.exports.useEffect(()=>{c(!0),s(Math.floor(Math.random()*100))},[i]),n(y,{children:e.map((u,d)=>n(j,{animate:u===1,width:o,onClick:()=>{s(d)},onAnimationEnd:()=>c(!i)},d))})}const y=a.div`
  position: absolute;
  width: 130vw;
  overflow: hidden;
  top: -120px;
  left: -80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,b=h`
0% {
  background-color: rgba(40,44,52, 0.4);
}
30% {
  background-color: rgba(240,147,251, 0.4)
  
}
60% {
  background-color: rgba(168,237,234, 0.4);
}
100% {
  background-color: none;
}
`,j=a.div`
  height: ${({width:o})=>`${o/8}px`};
  aspect-ratio: 1 / 1;
  transition: all 0.6s;
  animation: ${({animate:o})=>o&&p`
      ${b} 3s ease-in-out;
    `};
  &:hover {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;function k(){const[o,r]=l.exports.useState({width:void 0,height:void 0});return l.exports.useEffect(()=>{function i(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),o}function z(){const{width:o}=k();return n(L,{children:x(S,{children:[n(v,{width:o}),n("h1",{children:"Let everything happen to you."}),n("h1",{children:"Beauty and terror."}),n("h1",{children:"Just keep going."}),n("h1",{children:"No feeling is final."}),n(A,{children:n("p",{children:"- Rainer Maria Rilke"})})]})})}const L=a.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`,S=a.div`
  position: relative;

  h1 {
    font-size: 20vw;
    line-height: 14vw;
    color: white;
    margin: 0;
  }
`,A=a.div`
  display: flex;
  justify-content: flex-end;
  p {
    color: white;
  }
`;g.render(n(m.StrictMode,{children:n(z,{})}),document.getElementById("root"));
