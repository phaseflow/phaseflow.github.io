(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),c=(n(17),n(18),n(19),n(2)),i=n.n(c),u=n(5),l=n(6),m=n(7),p=n(10),d=n(8),h=n(1),f=n(9),v="https://kyber.gg/api/servers?page=",b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n.state.servers=[],a=1;case 3:if(!(a<5)){e.next=9;break}return e.next=6,fetch("".concat(v).concat(a)).then(function(e){return e.json()}).then(function(e){var t=e.servers.filter(function(e){return e.mods.length>0&&e.mods.length<10&&"HeroesVersusVillains"===e.mode&&!e.requiresPassword&&("Frankfurt"===e.proxy.name||"London"===e.proxy.name)});n.state.servers=n.state.servers.concat(t)});case 6:a++,e.next=3;break;case 9:console.log("Found HVV servers: "),console.log(n.state.servers);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={servers:[]},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"submit-button",type:"submit",value:"Refresh"}),r.a.createElement("p",null))}}]),t}(r.a.Component);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:"https://kyber.gg/logo.svg",className:"App-logo",alt:"logo"}),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.9a843c15.chunk.js.map