(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(8),r=a(2),c=a(6),l=(a(13),a(1)),o=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(0),d=function(e){var t=e.todo,a=e.user;return Object(u.jsxs)("article",{"data-id":t.id,className:"TodoInfo".concat(t.completed?" TodoInfo--completed":""),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),a&&Object(u.jsx)("a",{className:"UserInfo has-text-grey",href:"mailto:".concat(a.email),children:a.name})]})},m=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(d,{todo:e,user:e.user},e.id)}))})};function j(e){return o.find((function(t){return t.id===e}))||null}var b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:j(e.userId)})})),h=function(){var e=Object(l.useState)("-1"),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(!1),c=Object(r.a)(i,2),d=c[0],h=c[1],O=Object(l.useState)(""),p=Object(r.a)(O,2),f=p[0],x=p[1],v=Object(l.useState)(!1),y=Object(r.a)(v,2),N=y[0],g=y[1],S=Object(l.useState)(b),I=Object(r.a)(S,2),C=I[0],T=I[1],_=Object(l.useState)(!1),k=Object(r.a)(_,2),D=k[0],w=k[1];return Object(u.jsxs)("div",{className:"App panel",children:[Object(u.jsx)("h1",{className:"heading is-size-3",children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),"-1"!==a&&""!==f||("-1"===a&&h(!0),""===f&&g(!0),0)){var t={id:C.reduce((function(e,t){return Math.max(e,t.id)}),-1)+1,title:f,userId:+a,completed:!1,user:j(+a)};n("-1"),x(""),g(!1),w(!1),T((function(e){return[].concat(Object(s.a)(e),[t])}))}},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{type:"text",className:"input","data-cy":"titleInput",placeholder:"Enter a title",value:f,onChange:function(e){w(/[\u0410-\u044f\u0430-\u044f]/g.test(e.currentTarget.value)),x(e.currentTarget.value.replace(/[^A-Za-z]/g,"")),e.currentTarget.value&&g(!1)}}),N&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"}),Object(u.jsx)("br",{}),D&&Object(u.jsx)("span",{className:"error",children:"Only english characters"})]}),Object(u.jsx)("label",{className:"label",htmlFor:"select",children:"User:"}),Object(u.jsxs)("div",{className:"select is-rounded",children:[Object(u.jsxs)("select",{id:"select","data-cy":"userSelect",value:a,onChange:function(e){n(e.target.value),h(!1)},children:[Object(u.jsx)("option",{value:"-1",disabled:!0,selected:!0,children:"Choose a user"}),o.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),d&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",className:"button",children:"Add"})]}),Object(u.jsx)(m,{todos:C})]})};i.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0f2f4d3c.chunk.js.map