(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1057:function(e,t,a){"use strict";a.r(t);var n=a(228),r=a(229),s=a(231),c=a(230),o=a(232),i=a(3),u=a.n(i),l=a(950),p=a(921),h=a(922),d=a(989),f=a(909),m=a(910),w=a(952),E=a(990),g=a(941),v=a(915),O=a(953),y=a(936),P=a(935),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).changePassword=function(){P.a.changePassword(a.state.password).then(function(e){e&&(a.setState({success:"Successfully changed password."}),P.a.logout())}).catch(function(e){Promise.reject(e)})},a.verifyPassword=function(e){e&&a.state.password?e!==a.state.password?a.setState({error:"Password does not match. Please try again"}):a.setState({error:""}):a.setState({error:"Password does not match. Please try again"})},a.state={password:"",confirm_password:"",error:"",success:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"app flex-row align-items-center"},u.a.createElement(l.a,null,u.a.createElement(p.a,{className:"justify-content-center"},u.a.createElement(h.a,{md:"8"},u.a.createElement(d.a,null,u.a.createElement(f.a,{className:"p-4"},u.a.createElement(m.a,null,u.a.createElement(w.a,null,u.a.createElement("h1",null,"Change Password"),u.a.createElement("p",{className:"text-muted"},"Change your account password"),u.a.createElement(E.a,{className:"mb-3"},u.a.createElement(g.a,{addonType:"prepend"},u.a.createElement(v.a,null,u.a.createElement("i",{className:"icon-lock"}))),u.a.createElement(O.a,{type:"password",placeholder:"Password",autoComplete:"current-password",onChange:function(t){e.setState({password:t.target.value})}})),u.a.createElement(E.a,{className:"mb-4"},u.a.createElement(g.a,{addonType:"prepend"},u.a.createElement(v.a,null,u.a.createElement("i",{className:"icon-lock"}))),u.a.createElement(O.a,{type:"password",placeholder:"Confirm Password",autoComplete:"current-password",onBlur:function(t){e.verifyPassword(t.target.value)}})),u.a.createElement("p",{className:"text-success text-right"},this.state.success),u.a.createElement("p",{className:"text-danger text-right"},this.state.error),u.a.createElement(p.a,null,u.a.createElement(h.a,{xs:"12",className:"text-right"},u.a.createElement(y.a,{color:"primary",className:"px-8 text-right",onClick:this.changePassword},"Submit")))))))))))}}]),t}(i.Component);t.default=b},889:function(e,t,a){"use strict";a.d(t,"a",function(){return f}),a.d(t,"b",function(){return m});var n=a(900),r=a(228),s=a(229),c=a(904),o=a.n(c),i=a(903),u=a.n(i),l=a(905),p=function(){function e(){Object(r.a)(this,e),this.parser=new l.UAParser}return Object(s.a)(e,[{key:"getDeviceName",value:function(){var e=this.parser.getDevice().vendor||"",t=this.parser.getDevice().model||"",a=this.parser.getDevice().type||"";return"".concat(e," ").concat(t," ").concat(a)}},{key:"getDeviceOS",value:function(){return this.parser.getOS().name+" "+this.parser.getOS().version}},{key:"getDeviceCPU",value:function(){return this.parser.getCPU()}},{key:"getDeviceEngine",value:function(){return this.parser.getEngine()}}]),e}(),h=function(){function e(){Object(r.a)(this,e)}return Object(s.a)(e,null,[{key:"http",value:function(e){return new d(e)}},{key:"getDeviceDetails",value:function(){return new p}},{key:"handleResponse",value:function(e){return new Promise(function(t,a){[401,403].includes(e.status)||t(e),[401,403].includes(e.status)?window.location.reload():t(e),t(e)})}},{key:"renderDateFormat",value:function(e){return u()(e).format("MMMM D, YYYY h:mm A")}}]),e}(),d=function(){function e(t){Object(r.a)(this,e),this.options=t}return Object(s.a)(e,[{key:"GET",get:function(){var e=this.options,t=Object(n.a)({},e.headers);return new Promise(function(a,n){o.a.get(e.url,{headers:t}).then(function(e){a(e)}).catch(function(e){n(e)})})}},{key:"POST",get:function(){var e={method:"POST",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"DELETE",get:function(){var e={method:"DELETE",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"PUT",get:function(){var e={method:"PUT",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}}]),e}(),f=h,m=function(){function e(){Object(r.a)(this,e)}return Object(s.a)(e,null,[{key:"isEmpty",value:function(t){return"object"===typeof t?e.isEmptyObject(t):!t||"undefined"===t||""==t||" "==t||null===t}},{key:"isEmptyObject",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"removeNullKey",value:function(e){var t=Object.assign({},e);for(var a in t)t.hasOwnProperty(a)&&this.isEmpty(t[a])&&delete t[a];return t}}]),e}()},891:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n="https://192.168.0.136/",r={LOGIN_URL:n+"api/admin/authenticate",DEVICE_URL:n+"api/device",VOUCHER_URL:n+"api/voucher",ADMIN_URL:n+"api/admin",MACHINE_URL:n+"api/machine",ROUTER_URL:n+"api/router",LOG_URL:n+"api/logs",COINSLOT_URL:n+"api/coinslot",BANDWIDTH_URL:n+"api/bandwidth",SOFTWARE_URL:n+"api/software",BLOCKED_URL:n+"api/blocked",CAPTIVE_PORTAL_URL:n+"api/captive/portal",DHCP_CONFIG_URL:n+"api/dhcp/config",INTERFACE_URL:n+"api/network/interface",FIREWALL_URL:n+"api/firewall",WIRELESSAP_URL:n+"api/wireless",PACKAGE_URL:n+"api/package/management",APT_LOG:"http://192.168.0.136:5000/api/apt/log",WS_URL:"ws://192.168.0.136:5000/socket"}},935:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(228),r=a(229),s=a(889),c=a(891),o=a(233),i=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"login",value:function(e,t){return new Promise(function(a,n){s.a.http({url:c.a.LOGIN_URL,data:{username:e,password:t}}).POST.then(function(n){if(n){var r=n.data;r.authHeader=window.btoa("".concat(e,":").concat(t)),sessionStorage.setItem("user",JSON.stringify(r))}a(!0)}).catch(function(e){n(e)})})}},{key:"logout",value:function(){sessionStorage.removeItem("user"),window.location.href="#/login"}},{key:"changePassword",value:function(e){return new Promise(function(t,a){s.a.http({url:c.a.ADMIN_URL+"/password",data:{password:e},headers:{Authorization:"Basic "+Object(o.a)().authHeader}}).POST.then(function(e){e&&t(!0)}).catch(function(e){a(e)})})}}]),e}()}}]);