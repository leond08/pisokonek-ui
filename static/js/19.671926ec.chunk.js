(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1044:function(e,t,a){"use strict";var n=a(35),o=a(100),i=a(3),s=a.n(i),r=a(112),c=a.n(r),l=a(886),u=a.n(l),d=a(887),f={tabs:c.a.bool,pills:c.a.bool,vertical:c.a.oneOfType([c.a.bool,c.a.string]),horizontal:c.a.string,justified:c.a.bool,fill:c.a.bool,navbar:c.a.bool,card:c.a.bool,tag:d.l,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.tabs,r=e.pills,c=e.vertical,l=e.horizontal,f=e.justified,p=e.fill,h=e.navbar,m=e.card,b=e.tag,v=Object(o.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(d.h)(u()(t,h?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":i,"card-header-tabs":m&&i,"nav-pills":r,"card-header-pills":m&&r,"nav-justified":f,"nav-fill":p}),a);return s.a.createElement(b,Object(n.a)({},v,{className:g}))};p.propTypes=f,p.defaultProps={tag:"ul",vertical:!1},t.a=p},1045:function(e,t,a){"use strict";var n=a(35),o=a(100),i=a(3),s=a.n(i),r=a(112),c=a.n(r),l=a(886),u=a.n(l),d=a(887),f={tag:d.l,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.active,r=e.tag,c=Object(o.a)(e,["className","cssModule","active","tag"]),l=Object(d.h)(u()(t,"nav-item",!!i&&"active"),a);return s.a.createElement(r,Object(n.a)({},c,{className:l}))};p.propTypes=f,p.defaultProps={tag:"li"},t.a=p},1129:function(e,t,a){e.exports=a.p+"static/media/logo.e1440537.svg"},1130:function(e,t,a){e.exports=a.p+"static/media/pisokonek.a8c3995d.svg"},1131:function(e,t,a){e.exports=a.p+"static/media/sygnet.dba7f081.svg"},1260:function(e,t,a){"use strict";a.r(t);var n=a(235),o=a(228),i=a(229),s=a(231),r=a(230),c=a(232),l=a(3),u=a.n(l),d=a(177),f=a(1044),p=a(1045),h=a(962),m=a(35),b=a(888),v=a(63),g=a(112),O=a.n(g),j=a(1048),E=a(887),w=["defaultOpen"],y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(b.a)(a)),a}Object(v.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return u.a.createElement(j.a,Object(m.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(E.i)(this.props,w)))},t}(l.Component);y.propTypes=Object(h.a)({defaultOpen:O.a.bool},j.a.propTypes);var N=a(1246),k=a(1247),P=a(1248),L=a(945),T=a(913),R=(a(1129),a(1130)),U=a.n(R),M=(a(1131),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props;e.children,Object(n.a)(e,["children"]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(T.l,{className:"d-lg-none",display:"md",mobile:!0}),u.a.createElement(T.e,{full:{src:U.a,width:89,height:25,alt:"PisoKonek Logo"},minimized:{src:U.a,width:30,height:30,alt:"PisoKonek Logo"}}),u.a.createElement(T.l,{className:"d-md-down-none",display:"lg"}),u.a.createElement(f.a,{className:"d-md-down-none",navbar:!0},u.a.createElement(p.a,{className:"px-3"},u.a.createElement(d.NavLink,{to:"/dashboard",className:"nav-link"},"Dashboard"))),u.a.createElement(f.a,{className:"ml-auto",navbar:!0},u.a.createElement(y,{nav:!0,direction:"down"},u.a.createElement(N.a,{nav:!0},u.a.createElement("img",{src:"../../assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement(k.a,{right:!0},u.a.createElement(P.a,null,u.a.createElement("i",{className:"fa fa-user"})," Profile"),u.a.createElement(P.a,null,"\\",u.a.createElement("i",{className:"fa fa-wrench"}),u.a.createElement(d.Link,{component:"div",to:"/changepassword"},"Change Password")),u.a.createElement(P.a,{onClick:function(e){return L.a.logout()}},u.a.createElement("i",{className:"fa fa-lock"})," Logout")))))}}]),t}(l.Component));M.defaultProps={};t.default=M},892:function(e,t,a){"use strict";a.d(t,"a",function(){return f}),a.d(t,"b",function(){return p});var n=a(915),o=a(228),i=a(229),s=a(907),r=a.n(s),c=a(903),l=a.n(c),u=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"http",value:function(e){return new d(e)}},{key:"handleResponse",value:function(e){return new Promise(function(t,a){[401,403].includes(e.status)||t(e),[401,403].includes(e.status)?window.location.reload():t(e),t(e)})}},{key:"renderDateFormat",value:function(e){return l()(e).format("MMMM D, YYYY h:mm A")}}]),e}(),d=function(){function e(t){Object(o.a)(this,e),this.options=t}return Object(i.a)(e,[{key:"GET",get:function(){var e=this.options,t=Object(n.a)({},e.headers);return new Promise(function(a,n){r.a.get(e.url,{headers:t}).then(function(e){a(e)}).catch(function(e){n(e)})})}},{key:"POST",get:function(){var e={method:"POST",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){r.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"DELETE",get:function(){var e={method:"DELETE",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){r.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"PUT",get:function(){var e={method:"PUT",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){r.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}}]),e}(),f=u,p=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"isEmpty",value:function(t){return"object"===typeof t?e.isEmptyObject(t):!t||"undefined"===t||""==t||" "==t||null===t}},{key:"isEmptyObject",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"removeNullKey",value:function(e){var t=Object.assign({},e);for(var a in t)t.hasOwnProperty(a)&&this.isEmpty(t[a])&&delete t[a];return t}}]),e}()},893:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n="http://localhost:5000/",o={LOGIN_URL:n+"api/admin/authenticate",DEVICE_URL:n+"api/device",VOUCHER_URL:n+"api/voucher",ADMIN_URL:n+"api/admin",MACHINE_URL:n+"api/machine",ROUTER_URL:n+"api/router",LOG_URL:n+"api/logs",COINSLOT_URL:n+"api/coinslot",WS_URL:"ws://localhost:5000/socket"}},945:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(228),o=a(229),i=a(892),s=a(893),r=a(233),c=function(){function e(){Object(n.a)(this,e)}return Object(o.a)(e,null,[{key:"login",value:function(e,t){return new Promise(function(a,n){i.a.http({url:s.a.LOGIN_URL,data:{username:e,password:t}}).POST.then(function(n){if(n){var o=n.data;o.authHeader=window.btoa("".concat(e,":").concat(t)),sessionStorage.setItem("user",JSON.stringify(o))}a(!0)}).catch(function(e){n(e)})})}},{key:"logout",value:function(){sessionStorage.removeItem("user"),window.location.href="#/login"}},{key:"changePassword",value:function(e){return new Promise(function(t,a){i.a.http({url:s.a.ADMIN_URL+"/password",data:{password:e},headers:{Authorization:"Basic "+Object(r.a)().authHeader}}).POST.then(function(e){e&&t(!0)}).catch(function(e){a(e)})})}}]),e}()}}]);