(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c(7),s=c.n(o),i=c(4),a=c(0),d=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:"Todos-List"})})},r=c(8),u=c(17),l=function(t){var e=t.input,c=t.setInput,o=t.todos,s=t.setTodos,i=t.editTodo,d=t.setEditTodo;Object(n.useEffect)((function(){c(i?i.title:"")}),[c,i]);return Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i?function(t,e,c){var n=o.map((function(n){return n.id===e?{title:t,id:e,completed:c}:n}));s(n),d("")}(e,i.id,i.completed):(s([].concat(Object(r.a)(o),[{id:Object(u.a)(),title:e,completed:!1}])),c(""))},children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter a Todo...",className:"task-input",value:e,required:!0,onChange:function(t){c(t.target.value)}}),Object(a.jsx)("button",{className:"button-add",type:"submit",children:i?"OK":"+"})]})},j=c(6),b=function(t){var e=t.todos,c=t.setTodos,n=t.setEditTodo;return Object(a.jsx)("div",{children:e.map((function(t){return Object(a.jsxs)("li",{className:"list-item",children:[Object(a.jsx)("input",{type:"text",value:t.title,className:"list ".concat(t.completed?"complete":""),onChange:function(t){return t.preventDefault()}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"button-complete task-button",onClick:function(){return function(t){c(e.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed}):e})))}(t)},children:Object(a.jsx)("i",{className:"fa fa-check-circle"})}),Object(a.jsx)("button",{className:"button-edit task-button",onClick:function(){return function(t){var c=t.id,o=e.find((function(t){return t.id===c}));n(o)}(t)},children:Object(a.jsx)("i",{className:"fa fa-edit"})}),Object(a.jsx)("button",{className:"button-delete task-button",onClick:function(){return function(t){var n=t.id;c(e.filter((function(t){return t.id!==n})))}(t)},children:Object(a.jsx)("i",{className:"fa fa-trash"})})]})]},t.id)}))})},f=(c(14),function(){var t=JSON.parse(localStorage.getItem("todos"))||[],e=Object(n.useState)(""),c=Object(i.a)(e,2),o=c[0],s=c[1],r=Object(n.useState)(t),u=Object(i.a)(r,2),j=u[0],f=u[1],O=Object(n.useState)(null),p=Object(i.a)(O,2),m=p[0],x=p[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(j))}),[j]),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)("div",{children:Object(a.jsx)(d,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(l,{input:o,setInput:s,todos:j,setTodos:f,editTodo:m,setEditTodo:x})}),Object(a.jsx)("div",{children:Object(a.jsx)(b,{todos:j,setTodos:f,setEditTodo:x})})]})})});s.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3b1daad7.chunk.js.map