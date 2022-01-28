import{j as f,s as a,U as h,C as p,r as l,R as g,a as m}from"./vendor.296f9691.js";const w=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};w();const n=f.exports.jsx,x=f.exports.jsxs;function v({width:o}){let i=new Array(200).fill(0);const[r,d]=l.exports.useState(!1),[e,t]=l.exports.useState(i),s=u=>{const c=[...e];c[u]=1,t(c)};return l.exports.useEffect(()=>{d(!0),s(Math.floor(Math.random()*100))},[r]),n(y,{children:e.map((u,c)=>n(j,{role:"pixel","data-testid":`pixel${c}`,animate:u===1,width:o,onMouseOver:()=>{s(c)},onAnimationEnd:()=>d(!r)},c))})}const y=a.div`
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
`;function k(){const[o,i]=l.exports.useState({width:void 0,height:void 0});return l.exports.useEffect(()=>{function r(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),o}function z(){const{width:o}=k();return n(L,{children:x(S,{children:[n(v,{width:o}),n("h1",{children:"Let everything happen to you."}),n("h1",{children:"Beauty and terror."}),n("h1",{children:"Just keep going."}),n("h1",{children:"No feeling is final."}),n(A,{children:n("p",{children:"- Rainer Maria Rilke"})})]})})}const L=a.div`
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
