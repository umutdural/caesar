"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,h=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={description:"HeyVL's expressions evaluate to a value in a state.",sidebar_position:3},l="Expressions",s={unversionedId:"heyvl/expressions",id:"heyvl/expressions",title:"Expressions",description:"HeyVL's expressions evaluate to a value in a state.",source:"@site/docs/heyvl/expressions.md",sourceDirName:"heyvl",slug:"/heyvl/expressions",permalink:"/docs/heyvl/expressions",draft:!1,editUrl:"https://github.com/moves-rwth/caesar/tree/main/website/docs/heyvl/expressions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"HeyVL's expressions evaluate to a value in a state.",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Statements",permalink:"/docs/heyvl/statements"},next:{title:"Domains, Uninterpreted Functions, and Axioms",permalink:"/docs/heyvl/domains"}},o={},p=[{value:"Expression Syntax",id:"expression-syntax",level:2},{value:"Semantics and Under-Specified Expressions",id:"semantics-and-under-specified-expressions",level:2},{value:"If-Then-Else",id:"if-then-else",level:2},{value:"Let Expressions",id:"let-expressions",level:2},{value:"Quantifiers",id:"quantifiers",level:2},{value:"Triggers",id:"triggers",level:3},{value:"Relative Completeness",id:"relative-completeness",level:2},{value:"SMT Theories and Incompleteness",id:"incompleteness",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expressions"},"Expressions"),(0,i.kt)("p",null,"HeyVL expressions can be used inside ",(0,i.kt)("a",{parentName:"p",href:"/docs/heyvl/procs"},"specifications")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/heyvl/statements"},"statements")," and evaluate to values in some program state."),(0,i.kt)("h2",{id:"expression-syntax"},"Expression Syntax"),(0,i.kt)("p",null,"The syntax of expressions (",(0,i.kt)("inlineCode",{parentName:"p"},"Expr"),") consists of the following parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#quantifiers"},"Quantifiers"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inf Ident: Type, Ident: Type. Expr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sup Ident: Type, Ident: Type. Expr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"forall Ident: Type, Ident: Type. Expr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exists Ident: Type, Ident: Type. Expr")),(0,i.kt)("li",{parentName:"ul"},"Quantifier annotations such as ",(0,i.kt)("a",{parentName:"li",href:"#triggers"},"triggers")," are also allowed, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"forall Ident: Type @trigger(Expr). Expr")))),(0,i.kt)("li",{parentName:"ul"},"Boolean Operators (returning ",(0,i.kt)("a",{parentName:"li",href:"/docs/stdlib/booleans"},"type ",(0,i.kt)("inlineCode",{parentName:"a"},"Bool")),"):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Logical And: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr && Expr")),(0,i.kt)("li",{parentName:"ul"},"Logical Or: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr || Expr")),(0,i.kt)("li",{parentName:"ul"},"Equals: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr == Expr")),(0,i.kt)("li",{parentName:"ul"},"Less Than: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr <= Expr")),(0,i.kt)("li",{parentName:"ul"},"Not Equals: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr != Expr")),(0,i.kt)("li",{parentName:"ul"},"Greater Or Equals: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr >= Expr")),(0,i.kt)("li",{parentName:"ul"},"Greater: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr > Expr")))),(0,i.kt)("li",{parentName:"ul"},"Binary Lattice and Heyting Algebra Operators (on types ",(0,i.kt)("a",{parentName:"li",href:"../stdlib/"},(0,i.kt)("inlineCode",{parentName:"a"},"Bool"))," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/stdlib/numbers#eureal"},(0,i.kt)("inlineCode",{parentName:"a"},"EUReal")),"):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Binary Minimum/Infimum: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr \u2293 Expr")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr \\cap Expr")),(0,i.kt)("li",{parentName:"ul"},"Binary Maximum/Supremum: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr \u2294 Expr")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr \\cup Expr")),(0,i.kt)("li",{parentName:"ul"},"Implication: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr \u2192 Expr")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr ==> Expr")),(0,i.kt)("li",{parentName:"ul"},"Coimplication: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr \u2190 Expr")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr <== Expr")," ",(0,i.kt)("small",null,"(note that this is ",(0,i.kt)("strong",{parentName:"li"},"not")," just a flipped version of the implication ",(0,i.kt)("inlineCode",{parentName:"li"},"\u2192"),", but rather its lattice-theoretic dual!)")),(0,i.kt)("li",{parentName:"ul"},"Comparison: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr \u2198 Expr")),(0,i.kt)("li",{parentName:"ul"},"Cocomparison: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr \u2196 Expr")))),(0,i.kt)("li",{parentName:"ul"},"Arithmetical Operators (c.f. ",(0,i.kt)("a",{parentName:"li",href:"/docs/stdlib/numbers"},"number types"),"):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Addition: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr + Expr")),(0,i.kt)("li",{parentName:"ul"},"Subtraction/Monus: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr - Expr")),(0,i.kt)("li",{parentName:"ul"},"Multiplication: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr * Expr")),(0,i.kt)("li",{parentName:"ul"},"Division: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr / Expr")),(0,i.kt)("li",{parentName:"ul"},"Modulo: ",(0,i.kt)("inlineCode",{parentName:"li"},"Expr % Expr")))),(0,i.kt)("li",{parentName:"ul"},"Other Expressions:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#let-expressions"},"Let Expressions"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"let(Ident, Expr, Expr)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#if-then-else"},"If-Then-Else Expressions"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"ite(Expr, Expr, Expr)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/heyvl/domains"},"Function Calls"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Ident(Expr, ..., Expr)")),(0,i.kt)("li",{parentName:"ul"},"Negation: ",(0,i.kt)("inlineCode",{parentName:"li"},"!Expr")),(0,i.kt)("li",{parentName:"ul"},"Conegation: ",(0,i.kt)("inlineCode",{parentName:"li"},"~Expr")),(0,i.kt)("li",{parentName:"ul"},"Embed: ",(0,i.kt)("inlineCode",{parentName:"li"},"?Expr")," (usually written with parentheses: ",(0,i.kt)("inlineCode",{parentName:"li"},"?(Expr)"),")"),(0,i.kt)("li",{parentName:"ul"},"Iverson: ",(0,i.kt)("inlineCode",{parentName:"li"},"[Expr]")),(0,i.kt)("li",{parentName:"ul"},"Parentheses: ",(0,i.kt)("inlineCode",{parentName:"li"},"(Expr)")))),(0,i.kt)("li",{parentName:"ul"},"Literals:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"String Literals: text enclosed by ",(0,i.kt)("inlineCode",{parentName:"li"},'"')," characters (regular expression: ",(0,i.kt)("inlineCode",{parentName:"li"},'"[^"]*"'),"). ",(0,i.kt)("small",null,"Note that Caesar does not support a proper ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," type yet.")),(0,i.kt)("li",{parentName:"ul"},"Integers: given by regular expression ",(0,i.kt)("inlineCode",{parentName:"li"},"[0-9]+")," (default type: ",(0,i.kt)("inlineCode",{parentName:"li"},"UInt"),")"),(0,i.kt)("li",{parentName:"ul"},"Decimals: given by regular expression ",(0,i.kt)("inlineCode",{parentName:"li"},"[0-9]+\\.[0-9]+")," (default type: ",(0,i.kt)("inlineCode",{parentName:"li"},"UReal"),")"),(0,i.kt)("li",{parentName:"ul"},"Boolean Constants: ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")))),(0,i.kt)("li",{parentName:"ul"},"Identifiers (",(0,i.kt)("inlineCode",{parentName:"li"},"Ident"),"): Names of things, from the language of the regular expression ",(0,i.kt)("inlineCode",{parentName:"li"},"[_a-zA-Z][_a-zA-Z0-9']*"),".")),(0,i.kt)("p",null,"Types (",(0,i.kt)("inlineCode",{parentName:"p"},"Type"),") are types from Caesar's ",(0,i.kt)("a",{parentName:"p",href:"../stdlib/"},"standard library")," and user-defined types from ",(0,i.kt)("a",{parentName:"p",href:"/docs/heyvl/domains"},"domains"),"."),(0,i.kt)("p",null,"The above list is presented roughly in order of operator precedence.\nNote that we plan to change some operator precedences, so when in doubt, use more parentheses to guarantee the correct interpretation."),(0,i.kt)("p",null,"The most precise grammar specification can be found in Caesar's source code (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/blob/main/src/front/parser/grammar.lalrpop"},(0,i.kt)("inlineCode",{parentName:"a"},"src/front/parser/grammar.lalrpop")),")."),(0,i.kt)("h2",{id:"semantics-and-under-specified-expressions"},"Semantics and Under-Specified Expressions"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2309.07781.pdf#page=5"},"our paper on HeyVL (cf. Section 2)"),", we give a formal semantics for ",(0,i.kt)("em",{parentName:"p"},"HeyLo"),", our logic for reasoning about expected values.\nHeyLo includes operators such as ",(0,i.kt)("inlineCode",{parentName:"p"},"==>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<=="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"!"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"~"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"?(e)"),", and more.\nCaesar's expressions are a superset of HeyLo.\nIn particular, the paper explains in detail the lattice and Heyting algebra operators that Caesar supports."),(0,i.kt)("p",null,"Note that some operations are not fully specified (",(0,i.kt)("em",{parentName:"p"},"under-specified"),").\nThe division and remainder operators (",(0,i.kt)("inlineCode",{parentName:"p"},"Expr / Expr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Expr % Expr"),") are not fully defined for all values.\nCaesar translates these operators directly to SMT, where the SMT solver may assign arbitrary interpretations to e.g. divisions by zero.\nYou can find more information in the ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/z3guide/docs/theories/Arithmetic/#division"},"Z3 documentation on division"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," operator is always fully defined in Caesar.\nOn unsigned types such as ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt"),", it corresponds to ",(0,i.kt)("em",{parentName:"p"},"monus"),", i.e. truncating subtraction that is always at least ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".\nOn signed types such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),", it corresponds to the usual subtraction."),(0,i.kt)("h2",{id:"if-then-else"},"If-Then-Else"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ite")," built-in function allows to choose one of two expressions based on the result of a Boolean expression.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-heyvl"},"var x: UInt = ite(true, 32, 64);\n")),(0,i.kt)("p",null,"The first parameter is the Boolean expression.\nIf it evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the result of evaluating the second expression is returned.\nOtherwise, the third expression is evaluated."),(0,i.kt)("h2",{id:"let-expressions"},"Let Expressions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"let")," expressions enable the declaration of local variables within an expression.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-heyvl"},"var x: UInt = let(b, true, ite(b, 32, 64));\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," expression creates a new local variable ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," and sets its value to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),".\nThis variable ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," is available within the ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," expression's third argument."),(0,i.kt)("p",null,"In contrast to variable declaration statements using ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," expressions do not require type annotations.\nThe type of the variable is inferred from the second expression."),(0,i.kt)("h2",{id:"quantifiers"},"Quantifiers"),(0,i.kt)("p",null,"HeyVL features Boolean and quantitative quantifiers: ",(0,i.kt)("inlineCode",{parentName:"p"},"forall"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"exists"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"inf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sup"),".\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-heyvl"},"forall x: Int, y: UInt. x == y || x != y\n")),(0,i.kt)("h3",{id:"triggers"},"Triggers"),(0,i.kt)("p",null,"We also support ",(0,i.kt)("em",{parentName:"p"},"triggers")," for the Boolean quantifiers via annotations.\nThey are ",(0,i.kt)("em",{parentName:"p"},"patterns")," that will instruct the SMT solver to instantiate quantifiers if the pattern is found in the current list of terms it maintains.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-heyvl"},"forall list: []Int @trigger(len(list)). len(list) >= 0\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Multi-patterns")," are also supported, by writing a comma-separated list inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"@trigger")," annotation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-heyvl"},"forall list: []Int @trigger(len(list), len(list)). len(list) >= 0\n")),(0,i.kt)("p",null,"For more information on how triggers/patterns work in general, see the ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/z3guide/docs/logic/Quantifiers/#patterns"},"Z3 User Guide")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://dafny.org/latest/DafnyRef/DafnyRef#sec-trigger"},"Dafny documentation"),"."),(0,i.kt)("h2",{id:"relative-completeness"},"Relative Completeness"),(0,i.kt)("p",null,"Caesar's expression syntax is based on ",(0,i.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/10.1145/3434320"},"the expressive assertion language for probabilistic verification by Batz et al"),".\nIn theory, ",(0,i.kt)("em",{parentName:"p"},"expressiveness")," means that for many programs and properties, we know that we can express ",(0,i.kt)("em",{parentName:"p"},"all")," pre-expectations and invariants in the expression syntax when a post-expectation is written in that syntax."),(0,i.kt)("p",null,"Formally, we have that the ",(0,i.kt)("a",{parentName:"p",href:"/docs/proof-rules/calculi"},"weakest pre-expectation calculus")," ",(0,i.kt)("inlineCode",{parentName:"p"},"wp")," is ",(0,i.kt)("em",{parentName:"p"},"relatively complete")," with respect to this language, which means that ",(0,i.kt)("inlineCode",{parentName:"p"},"wp[P](post)")," is effectively constructible for all programs ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," and expectations ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," in their syntax."),(0,i.kt)("p",null,"Their syntax includes enough constructs to specify many interesting properties, such as termination probabilities or the distribution over final states, even including stuff like harmonic numbers.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/pdf/10.1145/3434320#page=26"},"the paper's Section 12 for more details"),"."),(0,i.kt)("p",null,"Of course, this does not mean that all of these verification problems are decidable.\nIt just means that in theory, the undecidable part is ",(0,i.kt)("em",{parentName:"p"},"only")," in the final inequality check ",(0,i.kt)("inlineCode",{parentName:"p"},"pre <= wp[P](post)")," instead of the computation of ",(0,i.kt)("inlineCode",{parentName:"p"},"wp[P](post)"),".\n",(0,i.kt)("a",{parentName:"p",href:"#incompleteness"},"The section on SMT theories and incompleteness")," specifies which of these inequalities are actually decidable with Caesar."),(0,i.kt)("h2",{id:"incompleteness"},"SMT Theories and Incompleteness"),(0,i.kt)("p",null,"Expressions are the main reason for ",(0,i.kt)("em",{parentName:"p"},"incompleteness")," of Caesar, i.e. instances Caesar is unable to decide whether a given HeyVL program verifies or not.\nCaesar's incompleteness comes from incompleteness of the underlying SMT solver which is used to prove or disprove verification."),(0,i.kt)("p",null,"At the moment, Caesar's translation of HeyVL verification problems is rather direct: most expressions are translated as one would intuitively expect.\nIf operators have a direct correspondence in ",(0,i.kt)("a",{parentName:"p",href:"https://smt-lib.org/"},"SMT-LIB"),", then we translate directly to those.\nOtherwise, usually only additional simple case distinctions are introduced.\nWe have some more explanations in ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2309.07781#page=23"},"Section 5 of our paper on HeyVL"),"."),(0,i.kt)("p",null,"As a consequence, it is usually pretty simple to predict which ",(0,i.kt)("a",{parentName:"p",href:"https://smt-lib.org/theories.shtml"},"SMT-LIB theories")," will be used for the SMT query done by Caesar.\nAlso refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/z3guide/docs/theories/Arithmetic/"},"Z3 documentation on arithmetic theories"),", since a lot of Caesar's reasoning will need arithmetic."),(0,i.kt)("p",null,"Here are some rules of thumb for (in-)completeness:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linear integer and real arithmetic (QF_LRA, QF_LIRA) is decidable."),(0,i.kt)("li",{parentName:"ul"},"Nonlinear integer arithmetic (QF_NIA) is undecidable."),(0,i.kt)("li",{parentName:"ul"},"Nonlinear real arithmetic (QF_NRA) is decidable for algebraic reals."),(0,i.kt)("li",{parentName:"ul"},"Quantifiers usually introduce undecidability, although there are ",(0,i.kt)("a",{parentName:"li",href:"https://microsoft.github.io/z3guide/docs/logic/Quantifiers#model-based-quantifier-instantiation"},"a bunch of strategies and fragments in Z3 that allow decidability"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In particular, restrictive ",(0,i.kt)("a",{parentName:"li",href:"#triggers"},"quantifier triggers")," can help e-matching prove many instances."))),(0,i.kt)("li",{parentName:"ul"},"HeyVL's ",(0,i.kt)("a",{parentName:"li",href:"#quantifiers"},"quantitative quantifiers")," (",(0,i.kt)("inlineCode",{parentName:"li"},"inf")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sup"),") currently have a very naive default encoding that is problematic for Z3.  If the quantitative quantifiers cannot be eliminated by Caesar's quantifier elimination (QE) procedure, then they are often a cause of nontermination of Caesar.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Quantitative quantifiers also come from the semantics of ",(0,i.kt)("a",{parentName:"li",href:"/docs/heyvl/statements#havoc"},(0,i.kt)("inlineCode",{parentName:"a"},"havoc")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"cohavoc")),". However, for e.g. the ",(0,i.kt)("a",{parentName:"li",href:"/docs/proof-rules/induction"},"induction-based proof rules"),", the HeyVL encodings fall into a fragment where Caesar's QE applies and the generated quantifiers are eliminated."))),(0,i.kt)("li",{parentName:"ul"},"In practice, the SMT solver can often ",(0,i.kt)("em",{parentName:"li"},"prove")," correctness, but it often has problems with ",(0,i.kt)("em",{parentName:"li"},"refutations")," (i.e. providing counter-examples).")))}u.isMDXComponent=!0}}]);