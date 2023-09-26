(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n,a=c(10),s=c.n(a),r=c(9),l=c(16),i=c(7),o=c(14),d=c(15),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},h=c(4);!function(e){e.All="all",e.Completed="completed",e.Active="active"}(n||(n={}));var m=function(e){return{type:"query/SET",payload:e}},O=function(e){return{type:"status/SET",payload:e}},f={query:"",status:n.All},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/SET":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"status/SET":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},v=function(e){return{type:"todos/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},y=Object(i.combineReducers)({currentTodo:b,filter:x,todos:p}),N=Object(i.createStore)(y,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),g=c(3),T=c(0),E=(c(25),c(26),c(6)),S=c.n(E),k=r.b,w=r.c,C=c(17),A=c(1),q=function(){var e=w((function(e){return e.todos})),t=w((function(e){return e.filter})),c=w((function(e){return e.currentTodo})),a=k(),s=Object(T.useMemo)((function(){return function(e,t,c){var a=Object(C.a)(e);return t&&(a=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase().trim())}))),c!==n.All&&(a=a.filter((function(e){switch(c){case n.Completed:return e.completed;case n.Active:return!e.completed;default:return!0}}))),a}(e,t.query,t.status)}),[e,t.query,t.status]);return Object(A.jsx)(A.Fragment,{children:s.length?Object(A.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"#"}),Object(A.jsx)("th",{children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("th",{children:"Title"}),Object(A.jsx)("th",{children:" "})]})}),Object(A.jsx)("tbody",{children:s.map((function(e){return Object(A.jsxs)("tr",{"data-cy":"todo",className:S()({"has-background-info-light":e.id===(null===c||void 0===c?void 0:c.id)}),children:[Object(A.jsx)("td",{className:"is-vcentered",children:e.id}),Object(A.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(A.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("td",{className:"is-vcentered is-expanded",children:Object(A.jsx)("p",{className:S()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(A.jsx)("td",{className:"has-text-right is-vcentered",children:Object(A.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(u(e))},children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:S()("far",{"fa-eye-slash":e.id===(null===c||void 0===c?void 0:c.id),"fa-eye":e.id!==(null===c||void 0===c?void 0:c.id)})})})})})]},e.id)}))})]}):Object(A.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},_=function(){var e=w((function(e){return e.filter})),t=e.query,c=e.status,a=k();return Object(A.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("span",{className:"select",children:Object(A.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return a(O(e.target.value))},children:[Object(A.jsx)("option",{value:n.All,children:"All"}),Object(A.jsx)("option",{value:n.Active,children:"Active"}),Object(A.jsx)("option",{value:n.Completed,children:"Completed"})]})})}),Object(A.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(A.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return a(m(e.target.value))}}),Object(A.jsx)("span",{className:"icon is-left",children:Object(A.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(A.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(A.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a(m(""))}})})]})]})},I=(c(28),function(){return Object(A.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(A.jsx)("div",{className:"Loader__content"})})});function L(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var M=function(){var e=Object(T.useState)(null),t=Object(g.a)(e,2),c=t[0],n=t[1],a=Object(T.useState)(!0),s=Object(g.a)(a,2),r=s[0],l=s[1],i=w((function(e){return e.currentTodo})),o=k();return Object(T.useEffect)((function(){var e;null!==i&&void 0!==i&&i.userId&&(e=i.userId,L("/users/".concat(e))).then((function(e){n(e),l(!1)}))}),[]),Object(A.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(A.jsx)("div",{className:"modal-background"}),r?Object(A.jsx)(I,{}):Object(A.jsxs)("div",{className:"modal-card",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===i||void 0===i?void 0:i.id)}),Object(A.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return o(j())}})]}),Object(A.jsxs)("div",{className:"modal-card-body",children:[Object(A.jsx)("p",{className:"block","data-cy":"modal-title",children:null===i||void 0===i?void 0:i.title}),Object(A.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(A.jsx)("strong",{className:S()({"has-text-success":null===i||void 0===i?void 0:i.completed,"has-text-danger":!(null!==i&&void 0!==i&&i.completed)}),children:null!==i&&void 0!==i&&i.completed?"Done":"Planned"})," by ",Object(A.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},B=function(){var e=w((function(e){return e.currentTodo})),t=Object(T.useState)(!0),c=Object(g.a)(t,2),n=c[0],a=c[1],s=k();return Object(T.useEffect)((function(){a(!0),L("/todos").then((function(e){s(v(e))})).finally((function(){return a(!1)}))}),[]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"section",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"box",children:[Object(A.jsx)("h1",{className:"title",children:"Todos:"}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(_,{})}),Object(A.jsx)("div",{className:"block",children:n?Object(A.jsx)(I,{}):Object(A.jsx)(q,{})})]})})}),e&&Object(A.jsx)(M,{})]})},D=function(){return Object(A.jsx)(r.a,{store:N,children:Object(A.jsx)(l.a,{children:Object(A.jsx)(B,{})})})};s.a.render(Object(A.jsx)(D,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a78777e1.chunk.js.map