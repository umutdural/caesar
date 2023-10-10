"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[8184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,p(p({ref:t},c),{},{components:n})):a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},p="pGCL Frontend",o={unversionedId:"pgcl",id:"pgcl",title:"pGCL Frontend",description:"At the moment, pGCL, the probabilistic guarded command langage, is the only supported frontend.",source:"@site/docs/pgcl.md",sourceDirName:".",slug:"/pgcl",permalink:"/docs/pgcl",draft:!1,editUrl:"https://github.com/moves-rwth/caesar/tree/main/website/docs/pgcl.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"The Caesar CLI",permalink:"/docs/caesar"},next:{title:"Development Guide",permalink:"/docs/devguide"}},l={},s=[{value:"Using pgcl2heyvl",id:"using-pgcl2heyvl",level:2},{value:"pGCL Examples",id:"pgcl-examples",level:2},{value:"pGCL Syntax",id:"pgcl-syntax",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pgcl-frontend"},"pGCL Frontend"),(0,r.kt)("p",null,"At the moment, ",(0,r.kt)("em",{parentName:"p"},"pGCL"),", the probabilistic guarded command langage, is the only supported frontend.\nWe have a tool, ",(0,r.kt)("inlineCode",{parentName:"p"},"pgcl2heyvl"),", that automatically generates HeyVL code from pGCL programs."),(0,r.kt)("p",null,"Most of pGCL's syntax can be encoded in fairly straightforward manner, but loops are a bit more complicated and require additional user annotations (loop invariants).\nThe tool supports both Park induction and the more general k-induction."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pgcl2heyvl")," tool is being phased out and its functionality is being integrated directly into Caesar itself.\nThis will enable the use of the proof rule encodings with features of Caesar that pgcl2heyvl does not support, such as ",(0,r.kt)("a",{parentName:"p",href:"/docs/heyvl/domains"},"domain declarations")," or a more powerful set of ",(0,r.kt)("a",{parentName:"p",href:"/docs/heyvl/expressions"},"expressions"),".")),(0,r.kt)("h2",{id:"using-pgcl2heyvl"},"Using pgcl2heyvl"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/tree/master/pgcl/pgcl2heyvl"},(0,r.kt)("inlineCode",{parentName:"a"},"pgcl2heyvl"))," is a Python program that reads a pGCL program from a file and uses additional user-provided annotations to encode loops.\nThe output is a HeyVL file."),(0,r.kt)("p",null,"To run ",(0,r.kt)("inlineCode",{parentName:"p"},"pgcl2heyl"),", enter its source code directory and execute it using ",(0,r.kt)("a",{parentName:"p",href:"https://python-poetry.org/"},"poetry"),".\nPoetry is a build system and dependency manager for Python.\n",(0,r.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"Here are installation instructions for Poetry"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd pgcl/pgcl2heyvl\npoetry run pgcl2heyvl FILE --post POST --pre PRE --k K > OUTFILE\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE")," is a file name with the pGCL program, ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," is a post-expectation, and ",(0,r.kt)("inlineCode",{parentName:"p"},"PRE")," is a pre-expectation (in ",(0,r.kt)("a",{parentName:"p",href:"#pgcl-syntax"},"pGCL syntax"),").\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"K")," argument is an integer that specifies which ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"-induction to use for the encoding.\n",(0,r.kt)("inlineCode",{parentName:"p"},"OUTFILE")," is the name of the output file with the HeyVL code."),(0,r.kt)("p",null,"If the pGCL program includes a single loop, then ",(0,r.kt)("inlineCode",{parentName:"p"},"PRE")," will be used as the loop invariant.\nWhen the program includes multiple loops, additional invariants must be specified using ",(0,r.kt)("inlineCode",{parentName:"p"},"--invariant"),"."),(0,r.kt)("p",null,"If the input file starts with a comment ",(0,r.kt)("inlineCode",{parentName:"p"},"// ARGS: ")," followed by command-line arguments, it will use these as defaults."),(0,r.kt)("p",null,"The command-line interface documentation is available by invoking ",(0,r.kt)("inlineCode",{parentName:"p"},"poetry run pgcl2heyvl --help"),"."),(0,r.kt)("p",null,"And yes, we're aware the user experience of this tool is particularly horrible.\nWe're working on it!"),(0,r.kt)("h2",{id:"pgcl-examples"},"pGCL Examples"),(0,r.kt)("p",null,"You can find pGCL examples in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/tree/master/pgcl/examples"},(0,r.kt)("inlineCode",{parentName:"a"},"pgcl/examples"))," directory.\nThey include all necessary parameters to generate verifying HeyVL files."),(0,r.kt)("p",null,"For these examples, the generated HeyVL files are located under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/tree/master/pgcl/examples-heyvl"},(0,r.kt)("inlineCode",{parentName:"a"},"pgcl/examples-heyvl")),".\nVerification with ",(0,r.kt)("inlineCode",{parentName:"p"},"caesar")," requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"--raw")," command-line flag since these files are just sequences of HeyVL statements."),(0,r.kt)("p",null,"Instructions on how to (re-)generate these examples are located in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/blob/master/pgcl/examples-heyvl/README.md"},(0,r.kt)("inlineCode",{parentName:"a"},"pgcl/examples-heyvl/README.md")),"."),(0,r.kt)("p",null,"To execute ",(0,r.kt)("inlineCode",{parentName:"p"},"caesar")," with the generated HeyVL files, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/caesar#benchmarks"},"benchmarks section of Caesar's documentation"),"."),(0,r.kt)("h2",{id:"pgcl-syntax"},"pGCL Syntax"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pgcl2heyvl")," uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Philipp15b/probably"},(0,r.kt)("inlineCode",{parentName:"a"},"probably"))," Python library to parse and type-check pGCL programs.\nThat means the pGCL syntax of ",(0,r.kt)("inlineCode",{parentName:"p"},"probably")," is used for the pGCL programs and the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pre"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--post"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"--invariant")," command-line parameters."),(0,r.kt)("p",null,"There is no formal specification for the exact pGCL syntax that ",(0,r.kt)("inlineCode",{parentName:"p"},"probably")," accepts, but here are some pointers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pGCL examples in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/moves-rwth/caesar/tree/master/pgcl/examples"},(0,r.kt)("inlineCode",{parentName:"a"},"pgcl/examples")),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://philipp15b.github.io/probably/pgcl.html"},(0,r.kt)("inlineCode",{parentName:"a"},"probably")," documentation"),". There are many doctests with examples."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://philipp15b.github.io/probably/pgcl_grammar.html#pgcl-grammar"},"grammar specification")," used by ",(0,r.kt)("inlineCode",{parentName:"li"},"probably")," built on top of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lark-parser/lark"},"Lark parsing toolkit"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Philipp15b/probably/tree/master/tests"},(0,r.kt)("inlineCode",{parentName:"a"},"probably"),"'s tests"),".")))}d.isMDXComponent=!0}}]);