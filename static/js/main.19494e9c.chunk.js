(this["webpackJsonptic-tac-toe-finall"]=this["webpackJsonptic-tac-toe-finall"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),s=(n(12),n(13),n(6)),j=n(3),l=n(0),o=function(e){var t=e.onClick,n=e.value;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{className:"square",onClick:t,children:Object(l.jsxs)("span",{children:[" ",n]})})})},u=function(e){var t=e.onClick,n=e.square,c=function(e){return Object(l.jsx)(o,{value:n[e],onClick:function(){return t(e)}})};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"parentBoard",children:[Object(l.jsx)("h1",{children:"Tic Tac Toe"}),Object(l.jsxs)("div",{className:"board",children:[Object(l.jsxs)("div",{className:"boardRow",children:[c(0),c(1),c(2)]}),Object(l.jsxs)("div",{className:"boardRow",children:[c(3),c(4),c(5)]}),Object(l.jsxs)("div",{className:"boardRow",children:[c(6),c(7),c(8)]})]})]})})},b=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(j.a)(t[n],3),r=c[0],a=c[1],i=c[2];if(e[r]&&e[r]===e[a]&&e[a]===e[i])return e[r]}return null},d=function(){var e=Object(c.useState)([Array(9).fill(null)]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(j.a)(a,2),o=i[0],d=i[1],O=Object(c.useState)(!0),h=Object(j.a)(O,2),f=h[0],x=h[1],v=b(n[o]),m="";m=v?"The winner is : "+v:" Next Player is : "+(f?"X":"0");var g=n.map((function(e,t){var n=t?"Go to Moeve > "+t:"Restart the Game";return Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return function(e){d(e),x(e%2===0)}(t)},children:n})},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{square:n[o],onClick:function(e){var t=n.slice(0,o+1),c=t[o],a=Object(s.a)(c);b(c)||a[e]||(a[e]=f?"X":"0",r([].concat(Object(s.a)(t),[a])),d(t.length),x(!f))}}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("h2",{children:[" ",m," "]}),Object(l.jsxs)("h3",{children:[" ",g," "]})]})]})};var O=function(){return Object(l.jsx)(d,{})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.19494e9c.chunk.js.map