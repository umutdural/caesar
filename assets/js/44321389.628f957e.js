"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[3484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},r="Optimizations & Alternative Implementations",s={unversionedId:"caesar/optimizations",id:"caesar/optimizations",title:"Optimizations & Alternative Implementations",description:"By default, Caesar uses a set of optimizations to speed up validity checking of verification conditions.",source:"@site/docs/caesar/optimizations.md",sourceDirName:"caesar",slug:"/caesar/optimizations",permalink:"/docs/caesar/optimizations",draft:!1,editUrl:"https://github.com/moves-rwth/caesar/tree/main/website/docs/caesar/optimizations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Program Slicing",permalink:"/docs/caesar/slicing"},next:{title:"Benchmarks",permalink:"/docs/caesar/benchmarks"}},l={},p=[{value:"Command-Line Options",id:"command-line-options",level:2},{value:"Compilation Options",id:"compilation-options",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimizations--alternative-implementations"},"Optimizations & Alternative Implementations"),(0,a.kt)("p",null,"By default, Caesar uses a set of optimizations to speed up validity checking of verification conditions.\nYou can experiment with them by disabling them and choosing between alternative implementations of some algorithms."),(0,a.kt)("h2",{id:"command-line-options"},"Command-Line Options"),(0,a.kt)("p",null,"See ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," for more detailed information."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Disabling quantifier elimination: ",(0,a.kt)("inlineCode",{parentName:"li"},"--no-qelim"),"."),(0,a.kt)("li",{parentName:"ul"},"Strict verification condition unfolding: ",(0,a.kt)("inlineCode",{parentName:"li"},"--strict"),"."),(0,a.kt)("li",{parentName:"ul"},"Enable e-graph optimization: ",(0,a.kt)("inlineCode",{parentName:"li"},"--egraph"),". The result is currently not used for the SMT encoding.")),(0,a.kt)("h2",{id:"compilation-options"},"Compilation Options"),(0,a.kt)("p",null,"Most of Caesar's behaviour can be changed with command-line flags, but there are three possible SMT encodings of the ",(0,a.kt)("inlineCode",{parentName:"p"},"EUReal")," type which must be chosen from at compile time."),(0,a.kt)("p",null,"Compile with ",(0,a.kt)("inlineCode",{parentName:"p"},"--features datatype-eureal")," to build an executable that encodes ",(0,a.kt)("inlineCode",{parentName:"p"},"EUReal")," values using SMT-LIB datatypes instead of an encoding that uses a Boolean and a Real number directly.\nOur experiments have shown that this is usually slower."),(0,a.kt)("p",null,"You can also compile with ",(0,a.kt)("inlineCode",{parentName:"p"},"--features datatype-eureal-funcs")," to use the datatype SMT-LIB encoding where additionally implementations of multiplications, additions, and less-than-or-equal relations are encoded as SMT-LIB functions.\nThis is the slowest encoding, but it's the easiest to read."))}u.isMDXComponent=!0}}]);