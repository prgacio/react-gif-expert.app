(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8);var o=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],i=a[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e.setCategories((function(e){return[c].concat(Object(l.a)(e))})),i(""))}},r.a.createElement("input",{type:"text",value:c,onChange:function(e){i(e.target.value)}}))},s=a(4),m=a.n(s),f=a(7),p=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q="+t+"&limit=10&api_key=MV61toq9sIbQTsZU0PJCfch5IUxF3sBm",e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var d=function(e){return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:e.url,alt:e.title}),r.a.createElement("p",null,e.title))};var v=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement("div",null,r.a.createElement("h3",{className:"animate__animate animate__fadeIn"}," ",t," "),i&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))};var g=function(){var e=Object(n.useState)(["One Punch"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"GiffExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(v,{key:e,category:e})}))))};a(15);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d6b1d646.chunk.js.map