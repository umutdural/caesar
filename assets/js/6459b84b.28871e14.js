"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[7868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3901:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(3743);const l={tableOfContentsInline:"tableOfContentsInline_prmo"};function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:o}=e;return n.createElement("div",{className:l.tableOfContentsInline},n.createElement(r.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),r=a(7294),l=a(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...r}=e;a>=0?t[a].children.push(r):n.push(r)})),n}function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>s(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function u(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),a=u();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let r=t;r<=a;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:a.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function p(e){let{toc:t,className:a,linkClassName:n,isChild:l}=e;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(p,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const d=r.memo(p);function g(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:p,...g}=e;const h=(0,l.L)(),k=u??h.tableOfContents.minHeadingLevel,f=p??h.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,r.useMemo)((()=>i({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:k,maxHeadingLevel:f});return m((0,r.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:k,maxHeadingLevel:f}}),[s,c,k,f])),r.createElement(d,(0,n.Z)({toc:b,className:a,linkClassName:s},g))}},5277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>D,contentTitle:()=>I,default:()=>V,frontMatter:()=>L,metadata:()=>T,toc:()=>H});var n=a(7462),r=a(7294),l=a(3905),o=(a(614),a(9960)),i=a(6010),s=a(2466),c=a(6550),u=a(1980),m=a(7392),p=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,c.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=g(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=k({queryString:a,groupId:n}),[u,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),d=(()=>{const e=s??u;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{d&&i(d)}),[d]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,l]),tabValues:l}}var b=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(m(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},o,{className:(0,i.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}const x={tabItem:"tabItem_Ymn6"};function O(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(x.tabItem,n),hidden:a},t)}var E=a(3901);const L={description:"You can install Caesar locally or build a Docker image.",sidebar_position:1},I="Installing Caesar",T={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installing Caesar",description:"You can install Caesar locally or build a Docker image.",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/moves-rwth/caesar/tree/main/website/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"You can install Caesar locally or build a Docker image.",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started/"},next:{title:"Guide to HeyVL",permalink:"/docs/getting-started/heyvl-guide"}},D={},H=[{value:"Download Pre-Built Releases (Recommended)",id:"download-pre-built-releases-recommended",level:2},{value:"Option 1: Pre-Built Binary",id:"option-1-pre-built-binary",level:3},{value:"Option 2: Docker Image",id:"option-2-docker-image",level:3},{value:"Build From Source",id:"build-from-source",level:2},{value:"Option 3: Compile Binary",id:"option-3-compile-binary",level:3},{value:"Installing Dependencies",id:"installing-dependencies",level:4},{value:"Compiling Caesar",id:"compiling-caesar",level:4},{value:"Option 4: Build Docker Image",id:"option-4-build-docker-image",level:3}],P={toc:H},S="wrapper";function V(e){let{components:t,...a}=e;return(0,l.kt)(S,(0,n.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installing-caesar"},"Installing Caesar"),(0,l.kt)("p",null,"You can download a pre-built Caesar binary or Docker image, or manually build Caesar locally."),(0,l.kt)(E.Z,{toc:H,mdxType:"TOCInline"}),(0,l.kt)("h2",{id:"download-pre-built-releases-recommended"},"Download Pre-Built Releases (Recommended)"),(0,l.kt)("h3",{id:"option-1-pre-built-binary"},"Option 1: Pre-Built Binary"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/releases/latest"},"latest stable release on GitHub")," (or ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/releases/nightly"},"latest nightly release"),") and download the release for your operating system.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Extract the ",(0,l.kt)("inlineCode",{parentName:"p"},"caesar")," binary from the downloaded archive.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("div",null,(0,l.kt)("small",null,(0,l.kt)("p",{style:{marginBottom:"0"}},"On MacOS, you may have to ",(0,l.kt)(o.Z,{to:"https://support.apple.com/guide/mac-help/mh40616/mac",mdxType:"Link"},"release the binary from quarantine")," to allow execution."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Execute in the extracted folder\nxattr -d com.apple.quarantine ./caesar\n")))))),(0,l.kt)("div",{style:{paddingTop:"1em"}}),(0,l.kt)("h3",{id:"option-2-docker-image"},"Option 2: Docker Image"),(0,l.kt)("p",null,"We also provide a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," image (",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/build/building/multi-platform/"},"multi-platform")," targeting ",(0,l.kt)("inlineCode",{parentName:"p"},"linux/amd64")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"linux/arm64"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/moves-rwth/caesar:latest\n")),(0,l.kt)("p",null,"You can use this Docker image just like the ",(0,l.kt)("inlineCode",{parentName:"p"},"caesar")," binary.\nTo access files from your system you need to mount them as volumes.\nFor example, if you want to verify a program in ",(0,l.kt)("inlineCode",{parentName:"p"},"./programs/example.heyvl"),", the following command mounts the ",(0,l.kt)("inlineCode",{parentName:"p"},"./programs/")," directory as ",(0,l.kt)("inlineCode",{parentName:"p"},"/root/caesar/programs/")," inside the container and uses ",(0,l.kt)("inlineCode",{parentName:"p"},"caesar")," to verify ",(0,l.kt)("inlineCode",{parentName:"p"},"example.heyvl"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -v $PWD/programs:/root/caesar/programs/ ghcr.io/moves-rwth/caesar:latest /root/caesar/programs/example.heyvl\n")),(0,l.kt)("div",{style:{paddingTop:"3em"}}),(0,l.kt)("h2",{id:"build-from-source"},"Build From Source"),(0,l.kt)("h3",{id:"option-3-compile-binary"},"Option 3: Compile Binary"),(0,l.kt)("h4",{id:"installing-dependencies"},"Installing Dependencies"),(0,l.kt)("p",null,"You will need to install some dependencies manually:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rust:")," To install ",(0,l.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),", we recommend ",(0,l.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"installation via rustup"),".\nYou might need to restart your terminal after installing Rust."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Build Tools:")," Caesar builds ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Z3Prover/z3"},"Z3")," itself, so we need ",(0,l.kt)("a",{parentName:"p",href:"https://www.python.org"},"Python")," and ",(0,l.kt)("a",{parentName:"p",href:"https://cmake.org/"},"cmake"),"."),(0,l.kt)(C,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(O,{value:"mac",label:"macOS",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Rust via rustup:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,l.kt)("li",{parentName:"ol"},"Install Python and CMake using the package manager ",(0,l.kt)("a",{parentName:"li",href:"https://brew.sh"},"Homebrew"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python cmake\n"))))),(0,l.kt)(O,{value:"debian",label:"Debian/Linux",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Rust via rustup:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,l.kt)("li",{parentName:"ol"},"Install Python, CMake, LLVM and Clang using ",(0,l.kt)("inlineCode",{parentName:"li"},"apt"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install python3 cmake llvm-dev libclang-dev clang\n"))))),(0,l.kt)(O,{value:"win",label:"Windows",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://rustup.rs/"},"Follow the instructions")," to install Rust via rustup."),(0,l.kt)("li",{parentName:"ol"},"Install Python, CMake and LLVM using the package manager ",(0,l.kt)("a",{parentName:"li",href:"https://chocolatey.org/install"},"Chocolatey"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco install python cmake llvm\n")))))),(0,l.kt)("h4",{id:"compiling-caesar"},"Compiling Caesar"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Clone the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moves-rwth/caesar"},"Git repository"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/moves-rwth/caesar.git\ncd caesar\n"))),(0,l.kt)("li",{parentName:"ol"},"Build ",(0,l.kt)("inlineCode",{parentName:"li"},"caesar")," using ",(0,l.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/"},"cargo"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install --path . caesar\n")),"Because this will compile a large number of dependencies, this might take a couple of minutes (especially Z3 takes some time).\nUsing ",(0,l.kt)("inlineCode",{parentName:"li"},"cargo install")," makes ",(0,l.kt)("inlineCode",{parentName:"li"},"caesar")," available on the command-line.")),(0,l.kt)("p",null,"Then, you can run an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"caesar tests/zeroconf.heyvl\n")),(0,l.kt)("p",null,"And this will print:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tests/zeroconf.heyvl::arp: Verified.\ntests/zeroconf.heyvl::zeroconf: Verified.\n")),(0,l.kt)("div",{style:{paddingTop:"1em"}}),(0,l.kt)("h3",{id:"option-4-build-docker-image"},"Option 4: Build Docker Image"),(0,l.kt)("p",null,"We also support building a Docker image.\nThis does not require installing dependencies and will build and package the ",(0,l.kt)("inlineCode",{parentName:"p"},"caesar")," binary in a Docker image."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar"},"Git repository"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:moves-rwth/caesar.git\ncd caesar\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Build the Docker image, named ",(0,l.kt)("inlineCode",{parentName:"p"},"caesar"),", using ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/reference/cli/docker/image/build/"},"docker build"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t caesar -f docker/Dockerfile .\n")),(0,l.kt)("admonition",{parentName:"li",title:"Multi-platform image",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"  You can build and load a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/build/building/multi-platform"},"multi-platform image")," using ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/reference/cli/docker/buildx/build/"},"docker buildx"),":"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64,linux/arm64 -t caesar -f docker/Dockerfile . --load\n"))))),(0,l.kt)("p",null,"With the Docker image ",(0,l.kt)("inlineCode",{parentName:"p"},"caesar")," built, you can use it just like the ",(0,l.kt)("inlineCode",{parentName:"p"},"caesar")," binary.\nTo access files from your system you need to mount them as volumes.\nFor example, if you want to verify a program in ",(0,l.kt)("inlineCode",{parentName:"p"},"./programs/example.heyvl"),", the following command mounts the ",(0,l.kt)("inlineCode",{parentName:"p"},"./programs/")," directory as ",(0,l.kt)("inlineCode",{parentName:"p"},"/root/caesar/programs/")," inside the container and uses ",(0,l.kt)("inlineCode",{parentName:"p"},"caesar")," to verify ",(0,l.kt)("inlineCode",{parentName:"p"},"example.heyvl"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -v $PWD/programs:/root/caesar/programs/ caesar /root/caesar/programs/example.heyvl\n")))}V.isMDXComponent=!0}}]);