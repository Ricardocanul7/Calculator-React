(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(4),u=r.n(c),l=(r(10),r(11),r(1)),s=r(2),o=(r(12),function(e){var t=e.values;return n.a.createElement("div",{className:"display-container"},n.a.createElement("input",{type:"text",value:t,readOnly:!0}))}),m=(r(13),function(e){var t=e.text,r=e.onPressed;return n.a.createElement("div",null,n.a.createElement("button",{className:"btn-container",onClick:function(){return r(t)}},n.a.createElement("p",null,t)))}),i=(r(14),function(e){var t=e.handleKeyPressed;return n.a.createElement("div",{className:"keyboard-container"},n.a.createElement("div",{className:"keyboard-grid"},n.a.createElement("div",{className:"row"},n.a.createElement(m,{text:"OFF",onPressed:t}),n.a.createElement(m,{text:"AC",onPressed:t}),n.a.createElement(m,{text:"DEL",onPressed:t}),n.a.createElement(m,{text:"/",onPressed:t})),n.a.createElement("div",{className:"row"},n.a.createElement(m,{text:"7",onPressed:t}),n.a.createElement(m,{text:"8",onPressed:t}),n.a.createElement(m,{text:"9",onPressed:t}),n.a.createElement(m,{text:"X",onPressed:t})),n.a.createElement("div",{className:"row"},n.a.createElement(m,{text:"4",onPressed:t}),n.a.createElement(m,{text:"5",onPressed:t}),n.a.createElement(m,{text:"6",onPressed:t}),n.a.createElement(m,{text:"-",onPressed:t})),n.a.createElement("div",{className:"row"},n.a.createElement(m,{text:"1",onPressed:t}),n.a.createElement(m,{text:"2",onPressed:t}),n.a.createElement(m,{text:"3",onPressed:t}),n.a.createElement(m,{text:"+",onPressed:t})),n.a.createElement("div",{className:"row"},n.a.createElement(m,{text:"ON",onPressed:t}),n.a.createElement(m,{text:"0",onPressed:t}),n.a.createElement(m,{text:".",onPressed:t}),n.a.createElement(m,{text:"=",onPressed:t}))))}),d=(r(15),function(){var e={accumulator:0,currentValue:0},t={prev:null,current:null},r=Object(a.useState)(e),c=Object(s.a)(r,2),u=c[0],m=c[1],d=Object(a.useState)(t),E=Object(s.a)(d,2),b=E[0],v=E[1],N=Object(a.useState)(!0),V=Object(s.a)(N,2),p=V[0],x=V[1];return n.a.createElement("div",{className:"cal-app"},n.a.createElement("h1",{className:"title"},"Calculator App"),n.a.createElement("div",{className:"cal-section"},n.a.createElement("div",{className:"calculator-area"},n.a.createElement(o,{values:u.currentValue}),n.a.createElement(i,{handleKeyPressed:function(r){switch(r){case"ON":x(!0),m(e),v(t);break;case"OFF":x(!1),m(Object(l.a)(Object(l.a)({},u),{},{currentValue:""})),v(t);break;case"AC":m(e),v(t);break;case"DEL":m(Object(l.a)(Object(l.a)({},u),{},{currentValue:0}));break;case"+":null===b.current?0!==u.currentValue&&!0===p&&(m({accumulator:Number(u.accumulator)+Number(u.currentValue),currentValue:0}),v({prev:null,current:"+"})):v({prev:null,current:"+"});break;case"-":null===b.current?0!==u.currentValue&&!0===p&&(m({accumulator:Number(u.accumulator)+Number(u.currentValue),currentValue:0}),v({prev:null,current:"-"})):v({prev:null,current:"-"});break;case"/":null===b.current?0!==u.currentValue&&!0===p&&(m({accumulator:Number(u.accumulator)+Number(u.currentValue),currentValue:0}),v({prev:null,current:"/"})):v({prev:null,current:"/"});break;case"X":null===b.current?0!==u.currentValue&&!0===p&&(m({accumulator:Number(u.accumulator)+Number(u.currentValue),currentValue:0}),v({prev:null,current:"*"})):v({prev:null,current:"*"});break;case"=":"+"===b.current&&!0===p&&(m({accumulator:0,currentValue:Number(u.accumulator)+Number(u.currentValue)}),v({prev:"+",current:null})),"-"===b.current&&!0===p&&(m({accumulator:0,currentValue:Number(u.accumulator)-Number(u.currentValue)}),v({prev:"-",current:null})),"/"===b.current&&!0===p&&(m({accumulator:0,currentValue:Number(u.accumulator)/Number(u.currentValue)}),v({prev:"/",current:null})),"*"===b.current&&!0===p&&(m({accumulator:0,currentValue:Number(u.accumulator)*Number(u.currentValue)}),v({prev:"*",current:null}));break;default:!0===p&&(0===u.currentValue?m(Object(l.a)(Object(l.a)({},u),{},{currentValue:r})):m(Object(l.a)(Object(l.a)({},u),{},{currentValue:String(u.currentValue)+String(r)})))}}}))))});var E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("footer",null,"Ricardo Canul"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.f20769bd.chunk.js.map