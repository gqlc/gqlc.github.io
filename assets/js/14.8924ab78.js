(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{361:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"importing-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-types"}},[t._v("#")]),t._v(" Importing Types")]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" This is not a GraphQL IDL spec compliant feature.")]),t._v(" "),a("p",[a("code",[t._v("gqlc")]),t._v(" supports importing types from a given source. To remain as close to spec\ncompliant as possible imports do not inhabit any sort of namepsace i.e. there is\nonly one global namespace. This will most likely change in the future given recent\nwork on "),a("a",{attrs:{href:"https://github.com/graphql/graphql-spec/issues/163",target:"_blank",rel:"noopener noreferrer"}},[t._v("graphq-spec#163"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("To import types its as simple as using the following directive:")]),t._v(" "),a("div",{staticClass:"language-graphql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-graphql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@directive")]),t._v(" import"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DOCUMENT")]),t._v("\n")])])]),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-graphql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-graphql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service-a.gql"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service-b.gql"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("schema")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Query\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypeFromServiceA\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypeFromServiceB\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);