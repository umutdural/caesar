"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[2617],{2487:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"caesar/optimizations","title":"Optimizations & Alternative Implementations","description":"By default, Caesar uses a set of optimizations to speed up validity checking of verification conditions.","source":"@site/docs/caesar/optimizations.md","sourceDirName":"caesar","slug":"/caesar/optimizations","permalink":"/docs/caesar/optimizations","draft":false,"unlisted":false,"editUrl":"https://github.com/moves-rwth/caesar/tree/main/website/docs/caesar/optimizations.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Program Slicing","permalink":"/docs/caesar/slicing"},"next":{"title":"Benchmarks","permalink":"/docs/caesar/benchmarks"}}');var s=t(4848),o=t(8453);const a={sidebar_position:4},r="Optimizations & Alternative Implementations",c={},l=[{value:"Command-Line Options",id:"command-line-options",level:2},{value:"Compilation Options",id:"compilation-options",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"optimizations--alternative-implementations",children:"Optimizations & Alternative Implementations"})}),"\n",(0,s.jsx)(i.p,{children:"By default, Caesar uses a set of optimizations to speed up validity checking of verification conditions.\nYou can experiment with them by disabling them and choosing between alternative implementations of some algorithms."}),"\n",(0,s.jsx)(i.h2,{id:"command-line-options",children:"Command-Line Options"}),"\n",(0,s.jsxs)(i.p,{children:["See ",(0,s.jsx)(i.code,{children:"--help"})," for more detailed information."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Disabling quantifier elimination: ",(0,s.jsx)(i.code,{children:"--no-qelim"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Strict verification condition unfolding: ",(0,s.jsx)(i.code,{children:"--strict"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:["Enable e-graph optimization: ",(0,s.jsx)(i.code,{children:"--egraph"}),". The result is currently not used for the SMT encoding."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"compilation-options",children:"Compilation Options"}),"\n",(0,s.jsxs)(i.p,{children:["Most of Caesar's behaviour can be changed with command-line flags, but there are three possible SMT encodings of the ",(0,s.jsx)(i.code,{children:"EUReal"})," type which must be chosen from at compile time."]}),"\n",(0,s.jsxs)(i.p,{children:["Compile with ",(0,s.jsx)(i.code,{children:"--features datatype-eureal"})," to build an executable that encodes ",(0,s.jsx)(i.code,{children:"EUReal"})," values using SMT-LIB datatypes instead of an encoding that uses a Boolean and a Real number directly.\nOur experiments have shown that this is usually slower."]}),"\n",(0,s.jsxs)(i.p,{children:["You can also compile with ",(0,s.jsx)(i.code,{children:"--features datatype-eureal-funcs"})," to use the datatype SMT-LIB encoding where additionally implementations of multiplications, additions, and less-than-or-equal relations are encoded as SMT-LIB functions.\nThis is the slowest encoding, but it's the easiest to read."]})]})}function m(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var n=t(6540);const s={},o=n.createContext(s);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);