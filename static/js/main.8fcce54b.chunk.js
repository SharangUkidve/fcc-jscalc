(this["webpackJsonpfcc-jscalc"]=this["webpackJsonpfcc-jscalc"]||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(5),r=t.n(l),i=(t(11),t(3)),u=t(4),s=t(6),d=t(0),o=function(e){var a=e.label,t=e.className,n=e.id,c=(e.value,Object(s.a)(e,["label","className","id","value"]));return Object(d.jsx)("button",Object(u.a)(Object(u.a)({className:"calc-button".concat(t?" ".concat(t):""," ").concat(n),id:n,value:a},c),{},{children:a}))},m=Object(n.memo)(o),b=["/","x","+","-"],f=[{label:"AC",id:"clear",className:"delete"},{label:"/",id:"divide",className:"operator"},{label:"x",id:"multiply",className:"operator"},{label:7,id:"seven"},{label:8,id:"eight"},{label:9,id:"nine"},{label:"-",id:"subtract",className:"operator"},{label:4,id:"four"},{label:5,id:"five"},{label:6,id:"six"},{label:"+",id:"add",className:"operator"},{label:1,id:"one"},{label:2,id:"two"},{label:3,id:"three"},{label:"=",id:"equals"},{label:"C",id:"delete",className:"delete"},{label:0,id:"zero"},{label:".",id:"decimal"}],h=function(e){for(var a=[],t="",n=0;n<e.length;n++){var c=e.charAt(n),l=e.charAt(n-1);!b.includes(c)||n>0&&b.includes(l)?t+=c:(a.push(t),a.push(c),t="")}return a.push(t),a},j=function(e,a,t){switch(t){case"+":return e+a;case"-":return a-e;case"x":return e*a;case"/":return a/e;default:return a}},v=function(e){var a;return e.reduce((function(e,t){if(b.includes(t))return a=t,e;if(a){var n=j(+t,e,a);return a=null,n}return+t+e}),0)},g=function(e){var a=e.value,t=e.onChange;return Object(d.jsxs)("div",{className:"calc-mode",children:[Object(d.jsxs)("label",{className:"calc-mode-label",htmlFor:"formula",children:[Object(d.jsx)("input",{type:"radio",name:"mode",id:"formula",onChange:t,value:"formula",checked:"formula"===a}),"Formula"]}),Object(d.jsxs)("label",{className:"calc-mode-label",htmlFor:"immediate",children:[Object(d.jsx)("input",{type:"radio",name:"mode",id:"immediate",onChange:t,value:"immediate",checked:"immediate"===a}),"Immediate"]})]})},O=function(){var e=Object(n.useState)("0"),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("formula"),r=Object(i.a)(l,2),u=r[0],s=r[1],o=function(){return"0"===t},O=function(e){return o()?c("".concat(e)):c((function(a){return a+e}))},p=function(){if(function(e){if("0"===e)return!0;var a=h(e);if(1===a.length&&e.includes("."))return!1;var t=a[a.length-1];return!t.includes(".")||b.includes(t)}(t))return c((function(e){return b.includes(e.charAt(e.length-1))?e+"0.":e+"."}))},x=function(e){switch(e){case"AC":return void c("0");case"C":return void(t.length>1?c(t.slice(0,t.length-1)):c("0"));case 0:return o()?void 0:c((function(e){return e+"0"}));case".":return p();case"=":var a="formula"===u?function(e){console.log("evaluating formula");var a=h(e);if(!(a.length<=1)){for(var t=0,n=0;t<2;){var c=b[t],l=a.indexOf(c);l<0?t++:(n=j(+a[l+1],+a[l-1],c),a.splice(l-1,3,"".concat(n)))}return 1===a.length?a[0]:n=v(a)}}(t):function(e){console.log("evaluating immediate");var a=h(e);if(!(a.length<=1))return v(a)}(t);return c("".concat(a));case"+":case"-":case"/":case"x":return function(e){var a=b.includes(t.charAt(t.length-1)),n=b.includes(t.charAt(t.length-2));if(!o()||"-"===e){if(!t.length||o()||a){if("-"!==e)return c((function(a){return a.substr(0,a.length-(n?2:1))+e}));if("-"===e&&n)return}O(e)}}(e);default:O(e)}};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{value:u,onChange:function(){s("immediate"===u?"formula":"immediate")}}),Object(d.jsxs)("main",{className:"calc",children:[Object(d.jsx)("div",{className:"calc-display",id:"display",children:t}),Object(d.jsx)("div",{className:"calc-buttons",children:f.map((function(e){return Object(d.jsx)(m,{label:e.label,id:e.id,className:e.className,onClick:function(){return x(e.label)}},e.id)}))})]})]})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8fcce54b.chunk.js.map