(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1076:function(e,n,t){"use strict";t.r(n);var a=t(228),r=t(229),l=t(231),i=t(230),o=t(232),s=t(3),c=t.n(s),u=t(86),m=t(177),p=t(951),d=t(906),h={items:[{name:"Dashboard",url:"/admin",icon:"icon-speedometer",badge:{variant:"info",text:""}},{title:!0,name:"General",wrapper:{element:"",attributes:{}},children:[]},{name:"Firewall",url:"/router/firewall"},{name:"Wireless",url:"/router/wireless"},{name:"Interfaces",url:"/router/interface"},{name:"System Settings",icon:"icon-settings",wrapper:{element:"",attributes:{}},children:[{name:"Settings",url:"/router/settings"},{name:"Updates",url:"/router/updates"}]},{name:"Services",icon:"icon-star",wrapper:{element:"",attributes:{}},children:[{name:"Traffic Shaping",url:"/router/bandwidth",icon:""},{name:"Dhcp Server",url:"/services/pi-konek-dhcp",icon:""},{name:"Captive Portal",url:"/services/pi-konek-captive",icon:""},{name:"Coin Slot",url:"/services/pi-konek-coin",icon:""},{name:"PiKonek Blocker",url:"/services/pi-konek-blocker",icon:""},{name:"Walled Garden",url:"/services/pi-konek-walled-garden",icon:""},{name:"Ntopng",url:"/services/pi-konek-ntopng",icon:""},{name:"Darkstat",url:"/services/pi-konek-darkstat",icon:""},{name:"Bandwidthd",url:"/services/pi-konek-bandwidthd",icon:""},{name:"Webssh",url:"/services/pi-konek-webssh",icon:""},{name:"Ngrok",url:"/services/pi-konek-ngrok",icon:""}]},{name:"Status",url:"/system/status",icon:"icon-puzzle",wrapper:{element:"",attributes:{}}},{name:"System Logs",icon:"fa fa-file-archive-o",wrapper:{element:"",attributes:{}},url:"/system/logs"},{name:"Visit our Page",url:"https://pisokonek.github.io",icon:"icon-layers",class:"mt-auto",variant:"success",attributes:{target:"_blank",rel:"noopener"}}]},f=c.a.lazy(function(){return Promise.all([t.e(0),t.e(24)]).then(t.bind(null,1064))}),k=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(17),t.e(27)]).then(t.bind(null,1072))}),b=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(22)]).then(t.bind(null,1066))}),g=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(19)]).then(t.bind(null,1081))}),v=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(23)]).then(t.bind(null,1077))}),y=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,1075))}),w=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,1071))}),E=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(20)]).then(t.bind(null,1078))}),P=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,1073))}),S=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,1070))}),z=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(7)]).then(t.bind(null,1069))}),O=c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,1074))}),j=c.a.lazy(function(){return t.e(25).then(t.bind(null,1067))}),C=[{path:"/admin",name:"Dashboard",component:f},{path:"/router/settings",name:"System Settings",component:k},{path:"/router/bandwidth",name:"Bandwidth & Traffic Shaping Settings",component:v},{path:"/router/interface",name:"Interfaces",component:S},{path:"/router/wireless",name:"Interfaces",component:O},{path:"/router/firewall",name:"Firewall",component:z},{path:"/services/pi-konek-captive",name:"PiKonek Captive Portal",component:w},{path:"/services/pi-konek-blocker",name:"PiKonek Blocker",component:y},{path:"/services/pi-konek-coin",name:"Coinslot Configuration",component:E},{path:"/services/pi-konek-dhcp",name:"Dhcp Server",component:P},{path:"/services/pi-konek-walled-garden",name:"Walled Garden",component:c.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(21)]).then(t.bind(null,1068))})},{path:"/router/updates",name:"Software Updates",component:b},{path:"/system/status",name:"Status",component:j},{path:"/system/logs",name:"Logs",component:g}],x=c.a.lazy(function(){return t.e(30).then(t.bind(null,1059))}),D=c.a.lazy(function(){return Promise.all([t.e(0),t.e(11),t.e(26)]).then(t.bind(null,1060))}),N=function(e){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(o)))).loading=function(){return c.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t}return Object(o.a)(n,e),Object(r.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"app"},c.a.createElement(d.c,{fixed:!0},c.a.createElement(s.Suspense,{fallback:this.loading()},c.a.createElement(D,{onLogout:function(n){return e.signOut(n)}}))),c.a.createElement("div",{className:"app-body"},c.a.createElement(d.e,{fixed:!0,display:"lg"},c.a.createElement(d.h,null),c.a.createElement(d.g,null),c.a.createElement(s.Suspense,null,c.a.createElement(d.j,Object.assign({navConfig:h},this.props,{router:m}))),c.a.createElement(d.f,null),c.a.createElement(d.i,null)),c.a.createElement("main",{className:"main"},c.a.createElement(d.a,{appRoutes:C,router:m}),c.a.createElement(p.a,{fluid:!0},c.a.createElement(s.Suspense,{fallback:this.loading()},c.a.createElement(u.g,null,C.map(function(e,n){return e.component?c.a.createElement(u.d,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return c.a.createElement(e.component,n)}}):null}),c.a.createElement(u.c,{from:"/admin",to:"/admin"})))))),c.a.createElement(d.b,null,c.a.createElement(s.Suspense,{fallback:this.loading()},c.a.createElement(x,null))))}}]),n}(s.Component);n.default=N}}]);