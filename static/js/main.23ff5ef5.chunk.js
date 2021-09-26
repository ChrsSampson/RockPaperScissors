(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{11:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),l=c(4),o=c.n(l),r=c(2),n=(c(9),c.p+"static/media/icon-paper.8b57a6b1.svg"),i=c.p+"static/media/icon-rock.476e90a9.svg",j=c.p+"static/media/icon-scissors.3b1a5d7e.svg",u=c(0);function b(e){var s="";switch(e.value){case"rock":s=i;break;case"paper":s=n;break;case"scissors":s=j;break;default:s=""}return Object(u.jsx)("button",{className:"PlayButton PlayButton-".concat(e.value),"data-value":e.value,onClick:function(s){return e.setPlayerMove?e.setPlayerMove(s):null},children:Object(u.jsx)("img",{src:s,alt:"".concat(e.value," Icon")})})}function m(e){return Object(u.jsxs)("article",{className:"PlayButtonContainer column",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(b,{value:"rock",setPlayerMove:e.onClick}),Object(u.jsx)(b,{value:"paper",setPlayerMove:e.onClick})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(b,{value:"scissors",setPlayerMove:e.onClick})})]})}var d=c.p+"static/media/logo.a4a2b39f.svg";function O(e){return Object(u.jsxs)("article",{className:"Scoreboard-wrapper",children:[Object(u.jsx)("div",{className:"column",children:Object(u.jsx)("img",{className:"logo",src:d,alt:"Logo"})}),Object(u.jsxs)("div",{className:"column score",children:[Object(u.jsx)("sub",{children:"Score"}),Object(u.jsx)("span",{children:e.score})]})]})}var x=c.p+"static/media/icon-close.73b38e3e.svg";function p(e){return Object(u.jsxs)("div",{className:"Rules-Container",children:[Object(u.jsx)("button",{className:"Close",onClick:e.onClick,children:Object(u.jsx)("img",{src:x,alt:"Close Rules"})}),Object(u.jsxs)("div",{className:"Rules",children:[Object(u.jsx)("h1",{children:"Rules"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Click a button to make a move."}),Object(u.jsx)("li",{children:"Rock beats scissors, scissors beats paper, and paper beats rock. "}),Object(u.jsx)("li",{children:"Win and you score a point"}),Object(u.jsx)("li",{children:"Lose and you lose a point"}),Object(u.jsx)("li",{children:"If you make the same move as the computer, it's a draw"}),Object(u.jsx)("li",{children:"Go for a high score."})]})]})]})}function h(e){return Object(u.jsx)("div",{className:"MenuButton-container column",children:Object(u.jsx)("button",{className:"MenuButton",onClick:e.onClick,children:e.text})})}function v(e){return Object(u.jsxs)("article",{className:"Result column",children:["Draw"===e.result?Object(u.jsxs)("h1",{className:"title",children:["It's a ",e.result]}):Object(u.jsxs)("h1",{className:"title",children:["You ",e.result,"!"]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"column",children:[Object(u.jsxs)("h4",{className:"result-text",children:["You picked ",e.moves.player]}),Object(u.jsx)(b,{value:e.moves.player})]}),Object(u.jsxs)("div",{className:"column",children:[Object(u.jsxs)("h4",{className:"result-text",children:["I picked ",e.moves.comp]}),Object(u.jsx)(b,{value:e.moves.comp})]})]}),Object(u.jsx)(h,{text:"Play Again?",onClick:e.onClick})]})}var g=function(){var e=Object(t.useState)(""),s=Object(r.a)(e,2),c=s[0],a=s[1],l=Object(t.useState)(""),o=Object(r.a)(l,2),n=o[0],i=o[1],j=Object(t.useState)(localStorage.getItem("score")),b=Object(r.a)(j,2),d=b[0],x=b[1],g=Object(t.useState)(null),k=Object(r.a)(g,2),N=k[0],f=k[1],C=Object(t.useState)(!1),y=Object(r.a)(C,2),I=y[0],S=y[1],M=function(){S(!I)},w=function(){var e=["rock","paper","scissors"];a(e[Math.floor(Math.random()*e.length)])};return Object(t.useEffect)((function(){null===localStorage.getItem("score")&&(localStorage.setItem("score",0),x(localStorage.getItem("score")))}),[]),Object(t.useEffect)((function(){""!==n&&""!==c&&(n===c?f("Draw"):"rock"===n&&"scissors"===c||"paper"===n&&"rock"===c||"scissors"===n&&"paper"===c?(localStorage.setItem("score",parseInt(d)+1),f("Win")):(localStorage.setItem("score",parseInt(d)-1),f("Lose")),x(localStorage.getItem("score")))}),[c]),Object(u.jsxs)("main",{className:"App",children:[Object(u.jsx)(O,{score:d}),I?Object(u.jsx)(p,{onClick:M}):null,Object(u.jsx)("section",{className:"Play-area",children:null===N?Object(u.jsx)(m,{onClick:function(e){"BUTTON"===e.target.tagName&&(i(e.target.dataset.value),w()),"IMG"===e.target.tagName&&(i(e.target.parentNode.dataset.value),w())}}):Object(u.jsx)(v,{result:N,onClick:function(){f(null)},moves:{player:n,comp:c}})}),Object(u.jsxs)("section",{className:"Button-container",children:[Object(u.jsx)(h,{text:"Rules",type:"rules",onClick:M}),Object(u.jsx)(h,{text:"Reset",type:"reset",onClick:function(){localStorage.setItem("score",0),x(localStorage.getItem("score"))}})]})]})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))},9:function(e,s,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.23ff5ef5.chunk.js.map