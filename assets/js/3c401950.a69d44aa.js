"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[9508],{8119:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"stdlib/numbers","title":"Number Types","description":"Caesar supports a variety of unbounded numerical types.","source":"@site/docs/stdlib/numbers.md","sourceDirName":"stdlib","slug":"/stdlib/numbers","permalink":"/docs/stdlib/numbers","draft":false,"unlisted":false,"editUrl":"https://github.com/moves-rwth/caesar/tree/main/website/docs/stdlib/numbers.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Booleans","permalink":"/docs/stdlib/booleans"},"next":{"title":"Lists","permalink":"/docs/stdlib/lists"}}');var t=n(4848),i=n(8453);const r={sidebar_position:2},l="Number Types",d={},o=[{value:"Mathematical Number Types",id:"mathematical-number-types",level:2},{value:"UInt",id:"uint",level:3},{value:"Int",id:"int",level:3},{value:"UReal",id:"ureal",level:3},{value:"Real",id:"real",level:3},{value:"EUReal",id:"eureal",level:3}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"number-types",children:"Number Types"})}),"\n",(0,t.jsx)(s.p,{children:"Caesar supports a variety of unbounded numerical types."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"/docs/heyvl/expressions",children:"expressions documentiation"})," has a list of Caesar's numerical operators.\nThe following diagram illustrates the hierarchy of numeric types supported by Caesar."]}),"\n",(0,t.jsxs)(s.p,{children:["An arrow from a type to another type indicates that it is a ",(0,t.jsx)(s.em,{children:"subtype"})," and that a value can be converted into the supertype.\nThis is done automatically by Caesar when appropriate."]}),"\n",(0,t.jsx)(s.mermaid,{value:"graph\n    UInt --\x3e Int;\n    UInt --\x3e UReal;\n    Int --\x3e Real;\n    UReal --\x3e Real;\n    UReal --\x3e EUReal;\n    UInt --\x3e EUReal;\n"}),"\n",(0,t.jsx)(s.h2,{id:"mathematical-number-types",children:"Mathematical Number Types"}),"\n",(0,t.jsx)(s.p,{children:"Caesar supports various number types that are not restricted by a finite bit size.\nTherefore, all of these types have infinitely many values."}),"\n",(0,t.jsx)(s.h3,{id:"uint",children:"UInt"}),"\n",(0,t.jsxs)(s.p,{children:["Unsigned integers, i.e. values ",(0,t.jsx)(s.code,{children:"0"}),", ",(0,t.jsx)(s.code,{children:"1"}),", ",(0,t.jsx)(s.code,{children:"2"}),", and so on."]}),"\n",(0,t.jsxs)("small",{children:["This type was previously called ",(0,t.jsx)(s.code,{children:"Uint"}),". For the moment, Caesar also accepts this name."]}),"\n",(0,t.jsx)(s.h3,{id:"int",children:"Int"}),"\n",(0,t.jsx)(s.p,{children:"Signed integers."}),"\n",(0,t.jsx)(s.h3,{id:"ureal",children:"UReal"}),"\n",(0,t.jsx)(s.p,{children:"Unsigned real numbers, i.e. values x \u2208 \u211d such that x \u2265 0."}),"\n",(0,t.jsxs)(s.p,{children:["This is the type of fraction expressions ",(0,t.jsx)(s.code,{children:"a/b"})," where ",(0,t.jsx)(s.code,{children:"a"})," and ",(0,t.jsx)(s.code,{children:"b"})," are unsigned integer literals, as well as decimals such as ",(0,t.jsx)(s.code,{children:"3.14"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"real",children:"Real"}),"\n",(0,t.jsx)(s.p,{children:"Actual real numbers!"}),"\n",(0,t.jsx)(s.h3,{id:"eureal",children:"EUReal"}),"\n",(0,t.jsxs)(s.p,{children:["Extended unsigned real numbers.\nThis type includes all values from the ",(0,t.jsx)(s.code,{children:"UReal"})," type and also allows the value ",(0,t.jsx)(s.code,{children:"\u221e"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"This type admits a Heyting algebra and can be used as a verification domain."}),"\n",(0,t.jsxs)("small",{children:["This type was previously called ",(0,t.jsx)("code",{children:"Realplus"}),". For the moment, Caesar also accepts this name."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(6540);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);