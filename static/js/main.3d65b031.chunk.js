(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),u=t.n(l),c=(t(10),t(1)),o=t(2);t(11);function s(e){return r.a.createElement("div",{className:"output"},e.isError?r.a.createElement("span",{className:"error-data"},"INCORRECT values"):e.isChange?r.a.createElement("span",null,'enter values and press "SET"'):r.a.createElement("span",{className:e.value===e.maxValue?"count-red":"count"},e.value))}function i(e){return r.a.createElement("button",{className:"btn",onClick:function(){return e.callBackHandler()},disabled:e.disabled},e.title)}function m(e){return r.a.createElement("div",{className:"manage"},r.a.createElement(i,{title:"SET",disabled:e.error,callBackHandler:function(){e.setButtonHandler(e.minValue,e.maxValue)}}))}function E(e){return console.log(e.error),r.a.createElement("div",{className:"setup"},r.a.createElement("div",null,r.a.createElement("span",{className:"label-input"},"Max Value"),r.a.createElement("input",{className:e.error?"input-error":"",type:"number",value:e.inputNewMaxValue,onChange:function(a){isNaN(+a.currentTarget.value)||e.onChangeMaxValue(+a.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement("span",{className:"label-input"},"Min Value"),r.a.createElement("input",{className:e.error?"input-error":"",type:"number",value:e.inputNewMinValue,onChange:function(a){isNaN(+a.currentTarget.value)||e.onChangeMinValue(+a.currentTarget.value)}})))}function d(e){var a=Object(n.useState)(0),t=Object(o.a)(a,2),l=t[0],u=t[1],c=Object(n.useState)(0),s=Object(o.a)(c,2),i=s[0],d=s[1];l>i&&!1===e.error&&e.changeErrorStatus(!0),l<i&&!0===e.error&&e.changeErrorStatus(!1);return r.a.createElement("div",null,r.a.createElement(E,{inputNewMinValue:l,inputNewMaxValue:i,onChangeMaxValue:function(a){e.setIsChangeTrue(),d(a)},onChangeMinValue:function(a){e.setIsChangeTrue(),u(a)},changeErrorStatus:e.changeErrorStatus,error:e.error}),r.a.createElement(m,{maxValue:i,minValue:l,setButtonHandler:e.setButtonHandler,error:e.error}))}var V=function(){var e={startValue:0,maxValue:0,currentValue:0,isChange:!1,isError:!1},a=Object(n.useState)((function(){var a=localStorage.getItem("state");return null!==a?JSON.parse(a):e})),t=Object(o.a)(a,2),l=t[0],u=t[1];return function(e){var a=JSON.stringify(e);localStorage.setItem("state",a)}(l),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"containerSetup"},r.a.createElement(d,{setButtonHandler:function(e,a){u(Object(c.a)(Object(c.a)({},l),{},{startValue:e,maxValue:a,currentValue:e,isChange:!1}))},setIsChangeTrue:function(){u(Object(c.a)(Object(c.a)({},l),{},{isChange:!0}))},changeErrorStatus:function(e){u(Object(c.a)(Object(c.a)({},l),{},{isError:e}))},error:l.isError})),r.a.createElement("div",{className:"containerManager"},r.a.createElement(s,{value:l.currentValue,maxValue:l.maxValue,isChange:l.isChange,isError:l.isError}),r.a.createElement("div",{className:"manage"},r.a.createElement(i,{callBackHandler:function(){u(Object(c.a)(Object(c.a)({},l),{},{currentValue:l.currentValue+1}))},value:l.currentValue,maxValue:l.maxValue,title:"INC",disabled:!(l.currentValue!==l.maxValue)}),r.a.createElement(i,{callBackHandler:function(){u(Object(c.a)(Object(c.a)({},l),{},{currentValue:l.startValue}))},value:l.currentValue,maxValue:l.maxValue,title:"RESET",disabled:!(l.currentValue!==l.startValue)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.3d65b031.chunk.js.map