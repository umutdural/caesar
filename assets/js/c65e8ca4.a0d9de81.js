"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[5326],{9007:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"caesar/benchmarks","title":"Benchmarks","description":"The following command checks all examples that we know to work.","source":"@site/docs/caesar/benchmarks.md","sourceDirName":"caesar","slug":"/caesar/benchmarks","permalink":"/docs/caesar/benchmarks","draft":false,"unlisted":false,"editUrl":"https://github.com/moves-rwth/caesar/tree/main/website/docs/caesar/benchmarks.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"Optimizations & Alternative Implementations","permalink":"/docs/caesar/optimizations"},"next":{"title":"Model Checking","permalink":"/docs/model-checking"}}');var t=s(4848),a=s(8453);const c={sidebar_position:5},i="Benchmarks",o={},l=[];function h(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"benchmarks",children:"Benchmarks"})}),"\n",(0,t.jsx)(n.p,{children:"The following command checks all examples that we know to work.\nIt completes in about 20s on my machine."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'export RUST_LOG="caesar=trace"\ncd pgcl/examples-heyvl\ncargo run --release  -- --raw unif_gen1.heyvl rabin1.heyvl rabin2.heyvl brp1.heyvl geo1.heyvl\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can run the benchmark set with evaluations by executing ",(0,t.jsx)(n.code,{children:"fish run-benchmarks.fish"})," (",(0,t.jsx)(n.a,{href:"https://fishshell.com/",children:"fish shell"})," is required)."]}),"\n",(0,t.jsxs)(n.p,{children:["One possible output of ",(0,t.jsx)(n.code,{children:'fish run-benchmarks.fish | column -ts ","'})," is the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Name             Result  Total Time  VCgen Time  SAT Check Time\nbrp1.heyvl       IND     1.54s       0.02s       1.2s\nbrp2.heyvl       OOM     17.39s\nbrp3.heyvl       OOM     17.29s\nfail-geo1.heyvl  REF     0.18s       0s          0.03s\ngeo1.heyvl       IND     0.2s        0s          0.04s\nlinear01.heyvl   IND     0.19s       0s          0.02s\nrabin1.heyvl     IND     0.5s        0s          0.03s\nrabin2.heyvl     IND     13.95s      0.23s       10.1s\nunif_gen1.heyvl  IND     6.97s       0.02s       6.61s\nunif_gen2.heyvl  TO      0.52s\nunif_gen3.heyvl  TO      0.48s\nunif_gen4.heyvl  OOM     17.54s\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(6540);const t={},a=r.createContext(t);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);