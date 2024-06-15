"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Introduction","href":"/docs/","docId":"introduction"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installing Caesar","href":"/docs/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Guide to HeyVL","href":"/docs/getting-started/heyvl-guide","docId":"getting-started/heyvl-guide"},{"type":"link","label":"A Zoo of HeyVL Examples","href":"/docs/getting-started/zoo-of-heyvl-examples","docId":"getting-started/zoo-of-heyvl-examples"}],"href":"/docs/getting-started/"},{"type":"category","label":"HeyVL","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Procedures","href":"/docs/heyvl/procs","docId":"heyvl/procs"},{"type":"link","label":"Statements","href":"/docs/heyvl/statements","docId":"heyvl/statements"},{"type":"link","label":"Expressions","href":"/docs/heyvl/expressions","docId":"heyvl/expressions"},{"type":"link","label":"Domains, Uninterpreted Functions, and Axioms","href":"/docs/heyvl/domains","docId":"heyvl/domains"}],"href":"/docs/heyvl/"},{"type":"category","label":"Standard Library","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Booleans","href":"/docs/stdlib/booleans","docId":"stdlib/booleans"},{"type":"link","label":"Number Types","href":"/docs/stdlib/numbers","docId":"stdlib/numbers"},{"type":"link","label":"Lists","href":"/docs/stdlib/lists","docId":"stdlib/lists"},{"type":"link","label":"Distribution Expressions","href":"/docs/stdlib/distributions","docId":"stdlib/distributions"}],"href":"/docs/stdlib/"},{"type":"category","label":"Proof Rules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Calculus Annotations","href":"/docs/proof-rules/calculi","docId":"proof-rules/calculi"},{"type":"link","label":"Induction and k-Induction","href":"/docs/proof-rules/induction","docId":"proof-rules/induction"},{"type":"link","label":"Loop Unrolling","href":"/docs/proof-rules/unrolling","docId":"proof-rules/unrolling"},{"type":"link","label":"\u03c9-Invariants","href":"/docs/proof-rules/omega-invariants","docId":"proof-rules/omega-invariants"},{"type":"link","label":"Almost-Sure Termination","href":"/docs/proof-rules/ast","docId":"proof-rules/ast"},{"type":"link","label":"Positive Almost-Sure Termination","href":"/docs/proof-rules/past","docId":"proof-rules/past"},{"type":"link","label":"Optional Stopping Theorem","href":"/docs/proof-rules/ost","docId":"proof-rules/ost"}],"href":"/docs/proof-rules/"},{"type":"category","label":"The Caesar Tool","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"VSCode Extension & LSP Support","href":"/docs/caesar/vscode-and-lsp","docId":"caesar/vscode-and-lsp"},{"type":"link","label":"Program Slicing","href":"/docs/caesar/slicing","docId":"caesar/slicing"},{"type":"link","label":"Optimizations & Alternative Implementations","href":"/docs/caesar/optimizations","docId":"caesar/optimizations"},{"type":"link","label":"Benchmarks","href":"/docs/caesar/benchmarks","docId":"caesar/benchmarks"}],"href":"/docs/caesar/"},{"type":"link","label":"Model Checking","href":"/docs/model-checking","docId":"model-checking"},{"type":"link","label":"Development Guide","href":"/docs/devguide","docId":"devguide"},{"type":"link","label":"Publications","href":"/docs/publications","docId":"publications"},{"type":"link","label":"OOPSLA \'23 Artifact Evaluation Guide","href":"/docs/OOPSLA_AEC","docId":"OOPSLA_AEC"},{"type":"link","label":"pgcl2heyvl Frontend","href":"/docs/pgcl","docId":"pgcl"}]},"docs":{"caesar/benchmarks":{"id":"caesar/benchmarks","title":"Benchmarks","description":"The following command checks all examples that we know to work.","sidebar":"docsSidebar"},"caesar/optimizations":{"id":"caesar/optimizations","title":"Optimizations & Alternative Implementations","description":"By default, Caesar uses a set of optimizations to speed up validity checking of verification conditions.","sidebar":"docsSidebar"},"caesar/README":{"id":"caesar/README","title":"The Caesar Tool","description":"The caesar verifier takes a HeyVL program as input and tries to determine whether it verifies.","sidebar":"docsSidebar"},"caesar/slicing":{"id":"caesar/slicing","title":"Program Slicing","description":"Caesar supports program slicing on the HeyVL intermediate verification language.","sidebar":"docsSidebar"},"caesar/vscode-and-lsp":{"id":"caesar/vscode-and-lsp","title":"VSCode Extension & LSP Support","description":"Caesar Verifier VSCode Extension","sidebar":"docsSidebar"},"devguide":{"id":"devguide","title":"Development Guide","description":"This guide explains how Caesar and related tools work internally and how to contribute to the code.","sidebar":"docsSidebar"},"getting-started/heyvl-guide":{"id":"getting-started/heyvl-guide","title":"Guide to HeyVL","description":"A guide to understanding and verifying HeyVL.","sidebar":"docsSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installing Caesar","description":"You can install Caesar locally or build a Docker image.","sidebar":"docsSidebar"},"getting-started/README":{"id":"getting-started/README","title":"Getting Started","description":"Get started with Caesar & HeyVL by:","sidebar":"docsSidebar"},"getting-started/zoo-of-heyvl-examples":{"id":"getting-started/zoo-of-heyvl-examples","title":"A Zoo of HeyVL Examples","description":"A collection of HeyVL examples.","sidebar":"docsSidebar"},"heyvl/domains":{"id":"heyvl/domains","title":"Domains, Uninterpreted Functions, and Axioms","description":"Domain blocks are used to create user-defined types and uninterpreted functions.","sidebar":"docsSidebar"},"heyvl/expressions":{"id":"heyvl/expressions","title":"Expressions","description":"HeyVL\'s expressions evaluate to a value in a state.","sidebar":"docsSidebar"},"heyvl/procs":{"id":"heyvl/procs","title":"Procedures","description":"Procedures are HeyVL\'s logical units of code.","sidebar":"docsSidebar"},"heyvl/README":{"id":"heyvl/README","title":"HeyVL","description":"HeyVL is a verification language similar to Viper and Boogie.","sidebar":"docsSidebar"},"heyvl/statements":{"id":"heyvl/statements","title":"Statements","description":"Statements are executed sequentially and may have side-effects.","sidebar":"docsSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Hello and welcome!","sidebar":"docsSidebar"},"model-checking":{"id":"model-checking","title":"Model Checking","description":"Caesar can export models to the JANI format.","sidebar":"docsSidebar"},"OOPSLA_AEC":{"id":"OOPSLA_AEC","title":"OOPSLA \'23 Artifact Evaluation Guide","description":"Welcome to the artifact for our OOPSLA \'23 submission \\"A Deductive Verification Infrastructure for Probabilistic Programs\\".","sidebar":"docsSidebar"},"pgcl":{"id":"pgcl","title":"pgcl2heyvl Frontend","description":"The now deprecated pgcl2heyvl tool is a frontend for pGCL programs written in the syntax of the probably library","sidebar":"docsSidebar"},"proof-rules/ast":{"id":"proof-rules/ast","title":"Almost-Sure Termination","description":"TODO.","sidebar":"docsSidebar"},"proof-rules/calculi":{"id":"proof-rules/calculi","title":"Calculus Annotations","description":"Procedure annotations for soundness of proof rules.","sidebar":"docsSidebar"},"proof-rules/induction":{"id":"proof-rules/induction","title":"Induction and k-Induction","description":"Induction and k-Induction are proof rules for while loops.","sidebar":"docsSidebar"},"proof-rules/omega-invariants":{"id":"proof-rules/omega-invariants","title":"\u03c9-Invariants","description":"TODO.","sidebar":"docsSidebar"},"proof-rules/ost":{"id":"proof-rules/ost","title":"Optional Stopping Theorem","description":"Proof rule for lower bounds on least fixpoints.","sidebar":"docsSidebar"},"proof-rules/past":{"id":"proof-rules/past","title":"Positive Almost-Sure Termination","description":"TODO.","sidebar":"docsSidebar"},"proof-rules/README":{"id":"proof-rules/README","title":"Proof Rules","description":"Caesar supports a number of proof rule encodings out of the box.","sidebar":"docsSidebar"},"proof-rules/unrolling":{"id":"proof-rules/unrolling","title":"Loop Unrolling","description":"Loop unrolling and bounded model checking.","sidebar":"docsSidebar"},"publications":{"id":"publications","title":"Publications","description":"Caesar is a project from a collaboration of the Chair for Software Modeling and Verification (MOVES) at RWTH Aachen University, the QUAVE group at Saarland University, the PPLV group at University College London and the SSE section at Denmark Technical University.","sidebar":"docsSidebar"},"stdlib/booleans":{"id":"stdlib/booleans","title":"Booleans","description":"The Bool type contains the values true and false.","sidebar":"docsSidebar"},"stdlib/distributions":{"id":"stdlib/distributions","title":"Distribution Expressions","description":"Caesar supports a limited number of probability distributions as built-ins.","sidebar":"docsSidebar"},"stdlib/lists":{"id":"stdlib/lists","title":"Lists","description":"The standard library includes a type for lists []T where T is the type of elements.","sidebar":"docsSidebar"},"stdlib/numbers":{"id":"stdlib/numbers","title":"Number Types","description":"The following diagram illustrates the hierarchy of numeric types supported by Caesar.","sidebar":"docsSidebar"},"stdlib/README":{"id":"stdlib/README","title":"Standard Library","description":"The \\"standard library\\" consists of all built-in types, functions, and procedures of Caesar.","sidebar":"docsSidebar"}}}')}}]);