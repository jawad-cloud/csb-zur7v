(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(7),r=n.n(i),a=n(8),s=n(6),u=n(2),o=n(0),j=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),j=Object(u.a)(r,2),d=j[0],l=j[1],b=Object(c.useState)(!0),O=Object(u.a)(b,2),h=O[0],f=O[1],m=Object(c.useState)(null),p=Object(u.a)(m,2),x=p[0],v=p[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{type:"text",placeholder:"items to add",value:n,onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){if(n)if(h&&!h)l(d.map((function(e){return e.id===x?Object(s.a)(Object(s.a)({},e),{},{name:n}):e}))),f(!0),i(""),v(null);else{var e={id:(new Date).toString(),name:n};l([].concat(Object(a.a)(d),[e])),i("")}else alert("please fill the data")},children:h?"submit":"edit"}),d.map((function(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h5",{children:["You have added -",e.name]}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=d.filter((function(t){return e!==t.id}));l(t)}(e.id)},children:"Delete"}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=d.find((function(t){return t.id===e}));console.log(t),f(!1),i(t.name),v(e)}(e.id)},children:"Edit"})]},e.id)}))]})},d=(n(14),function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],i=t[1],r="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry";return Object(o.jsxs)(o.Fragment,{children:[n?r:"".concat(r.substring(0,10),"..."),Object(o.jsx)("button",{onClick:function(){return i(!n)},children:n?"readmore":"read less"})]})});function l(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:"Todo Application"}),Object(o.jsx)(j,{}),Object(o.jsx)(d,{})]})}var b=document.getElementById("root");r.a.render(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(l,{})}),b)}},[[15,1,2]]]);
//# sourceMappingURL=main.a28bc45d.chunk.js.map