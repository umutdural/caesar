"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[8212],{3018:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var t=o(7531),i=o(4848),s=o(8453);const r={authors:"phisch",tags:["publications"]},a="Foundations for Verification of Continuous Programs with Caesar",c={authorsImageUrls:[void 0]},l=[];function u(e){const n={a:"a",em:"em",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The paper ",(0,i.jsx)(n.a,{href:"https://dl.acm.org/doi/10.1145/3720429",children:(0,i.jsx)(n.em,{children:'"Foundations for Deductive Verification of Continuous Probabilistic Programs: From Lebesgue to Riemann and Back"'})})," by Kevin Batz, Joost-Pieter Katoen, Francesca Randone, and Tobias Winkler was recently published at ",(0,i.jsx)(n.a,{href:"https://2025.splashcon.org/track/OOPSLA",children:"OOPSLA 2025"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Before this work, Caesar was able to only verify simple ",(0,i.jsx)(n.em,{children:"discrete"})," probabilistic programs, i.e. programs that only sample from discrete distributions.\nThis paper lays out the formal foundations for us to verify probabilistic programs that sample from continuous distributions, with support for loops, and conditioning.\nOne challenge is to integrate the integrals for the expected values that arise from continuous distributions into the deductive verification framework of Caesar.\nThe key idea is to soundly under- or over-approximate these integrals via ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Riemann_sum",children:"Riemann sums"}),".\nIn addition to theoretical results such as convergence and completeness of the approach, the paper also provides case studies of continuous probabilistic programs that are encoded in HeyVL and verified with Caesar."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"In this post:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/2025/04/11/foundations-continuous#encoding-riemann-sums-in-heyvl",children:"Encoding Riemann Sums in HeyVL"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/2025/04/11/foundations-continuous#tortoise-hare-race-example",children:"Tortoise-Hare Race Example"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/blog/2025/04/11/foundations-continuous#beyond-the-continuous-uniform-distribution",children:"Beyond The Continuous Uniform Distribution"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var t=o(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},7531:e=>{e.exports=JSON.parse('{"permalink":"/blog/2025/04/11/foundations-continuous","editUrl":"https://github.com/moves-rwth/caesar/tree/main/website/blog/2025-04-11-foundations-continuous.md","source":"@site/blog/2025-04-11-foundations-continuous.md","title":"Foundations for Verification of Continuous Programs with Caesar","description":"The paper \\"Foundations for Deductive Verification of Continuous Probabilistic Programs: From Lebesgue to Riemann and Back\\" by Kevin Batz, Joost-Pieter Katoen, Francesca Randone, and Tobias Winkler was recently published at OOPSLA 2025.","date":"2025-04-11T00:00:00.000Z","tags":[{"inline":true,"label":"publications","permalink":"/blog/tags/publications"}],"readingTime":3.7,"hasTruncateMarker":true,"authors":[{"name":"Philipp Schroer","title":"Caesar Developer","url":"https://moves.rwth-aachen.de/people/philipp-schroer/","imageURL":"https://github.com/Philipp15b.png","key":"phisch","page":null}],"frontMatter":{"authors":"phisch","tags":["publications"]},"unlisted":false,"nextItem":{"title":"Caesar 2.1: UI Improvements, More Guardrails, and Improvements to Slicing","permalink":"/blog/2025/01/17/caesar-2-1"}}')}}]);