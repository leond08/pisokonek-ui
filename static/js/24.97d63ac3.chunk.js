(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1259:function(e,n,a){"use strict";a.r(n);var t=a(228),r=a(229),l=a(231),i=a(230),o=a(232),c=a(3),u=a.n(c),s=a(86),m=a(177),p=a(981),d=a(913),f={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer",badge:{variant:"info",text:""}},{title:!0,name:"Device Users",wrapper:{element:"",attributes:{}},class:""},{name:"Wifi",url:"/device/wifi",icon:"fa fa-wifi"},{title:!0,name:"Voucher",wrapper:{element:"",attributes:{}},class:""},{name:"View Vouchers",url:"/voucher/view",icon:"fa fa-eye"},{name:"Generate Code",url:"/voucher/generate",icon:"icon-printer"},{title:!0,name:"Router Settings",wrapper:{element:"",attributes:{}}},{name:"Settings",url:"/router/settings",icon:"fa fa-server"},{name:"Updates",url:"/router/updates",icon:"icon-cloud-download"},{title:!0,name:"System Logs",wrapper:{element:"",attributes:{}}},{name:"Logs",url:"/logs",icon:"fa fa-file-archive-o"},{name:"Visit our Page",url:"#",icon:"icon-layers",class:"mt-auto",variant:"success",attributes:{target:"_blank",rel:"noopener"}}]},h=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:u.a.lazy(function(){return Promise.all([a.e(0),a.e(4),a.e(8),a.e(25)]).then(a.bind(null,1249))})},{path:"/device/wifi",name:"Wifi",component:u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(18)]).then(a.bind(null,1261))})},{path:"/voucher/view",name:"Manage Vouchers",component:u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(17)]).then(a.bind(null,1252))})},{path:"/voucher/generate",name:"Generate Voucher",component:u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(15)]).then(a.bind(null,1253))})},{path:"/router/settings",name:"Router Settings",component:u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(9)]).then(a.bind(null,1255))})},{path:"/router/updates",name:"Software Updates",component:u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(11)]).then(a.bind(null,1254))})}],b=u.a.lazy(function(){return a.e(16).then(a.bind(null,1244))}),g=u.a.lazy(function(){return a.e(23).then(a.bind(null,1245))}),E=u.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(19)]).then(a.bind(null,1260))}),v=function(e){function n(){var e,a;Object(t.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(o)))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(o.a)(n,e),Object(r.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"app"},u.a.createElement(d.d,{fixed:!0},u.a.createElement(c.Suspense,{fallback:this.loading()},u.a.createElement(E,{onLogout:function(n){return e.signOut(n)}}))),u.a.createElement("div",{className:"app-body"},u.a.createElement(d.f,{fixed:!0,display:"lg"},u.a.createElement(d.i,null),u.a.createElement(d.h,null),u.a.createElement(c.Suspense,null,u.a.createElement(d.k,Object.assign({navConfig:f},this.props,{router:m}))),u.a.createElement(d.g,null),u.a.createElement(d.j,null)),u.a.createElement("main",{className:"main"},u.a.createElement(d.b,{appRoutes:h,router:m}),u.a.createElement(p.a,{fluid:!0},u.a.createElement(c.Suspense,{fallback:this.loading()},u.a.createElement(s.g,null,h.map(function(e,n){return e.component?u.a.createElement(s.d,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return u.a.createElement(e.component,n)}}):null}),u.a.createElement(s.c,{from:"/",to:"/dashboard"}))))),u.a.createElement(d.a,{fixed:!0},u.a.createElement(c.Suspense,{fallback:this.loading()},u.a.createElement(b,null)))),u.a.createElement(d.c,null,u.a.createElement(c.Suspense,{fallback:this.loading()},u.a.createElement(g,null))))}}]),n}(c.Component);n.default=v}}]);