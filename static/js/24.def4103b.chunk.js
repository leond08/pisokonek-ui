(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1063:function(e,t,a){"use strict";a.r(t);var n=a(228),r=a(229),i=a(231),c=a(230),o=a(232),s=a(3),u=a.n(s),l=a(921),f=a(922),d=a(910),h=a(911),m=a(901),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.getMachineDetails=function(){a.routerService.getMachineDetails().then(function(e){e&&a.setState({fetching:!0,memory:e.memory,cpu:e.cpu,disk:e.disk})}).catch(function(e){console.error(e)})},a.routerService=new m.a,a.state={dropdownOpen:!1,radioSelected:2,memory:{},cpu:{},disk:{},fetching:!1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getMachineDetails()}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},this.state.fetching?u.a.createElement(l.a,null,u.a.createElement(f.a,{xs:"12",sm:"6",lg:"3"},u.a.createElement(d.a,{className:"text-white bg-info"},u.a.createElement(h.a,{className:"pb-0"},u.a.createElement("div",{className:"text-value"},"CPU Usage"),u.a.createElement("div",null,Math.floor(this.state.cpu.cpupercentage)+"%","/100%")),u.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}}))),u.a.createElement(f.a,{xs:"12",sm:"6",lg:"3"},u.a.createElement(d.a,{className:"text-white bg-primary"},u.a.createElement(h.a,{className:"pb-0"},u.a.createElement("div",{className:"text-value"},"Memory Usage"),u.a.createElement("div",null,this.state.memory.used,"/",this.state.memory.total)),u.a.createElement("div",{className:"chart-wrapper mx-3",style:{height:"70px"}}))),u.a.createElement(f.a,{xs:"12",sm:"6",lg:"3"},u.a.createElement(d.a,{className:"text-white bg-warning"},u.a.createElement(h.a,{className:"pb-0"},u.a.createElement("div",{className:"text-value"},"SSD Usage"),u.a.createElement("div",null,this.state.disk.used,"/",this.state.disk.total)),u.a.createElement("div",{className:"chart-wrapper",style:{height:"70px"}})))):u.a.createElement(l.a,null,u.a.createElement(f.a,null,u.a.createElement("h1",null,"Fetching data. Please wait..."))))}}]),t}(s.Component);t.default=p},889:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p});var n=a(900),r=a(228),i=a(229),c=a(904),o=a.n(c),s=a(903),u=a.n(s),l=a(905),f=function(){function e(){Object(r.a)(this,e),this.parser=new l.UAParser}return Object(i.a)(e,[{key:"getDeviceName",value:function(){var e=this.parser.getDevice().vendor||"",t=this.parser.getDevice().model||"",a=this.parser.getDevice().type||"";return"".concat(e," ").concat(t," ").concat(a)}},{key:"getDeviceOS",value:function(){return this.parser.getOS().name+" "+this.parser.getOS().version}},{key:"getDeviceCPU",value:function(){return this.parser.getCPU()}},{key:"getDeviceEngine",value:function(){return this.parser.getEngine()}}]),e}(),d=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"http",value:function(e){return new h(e)}},{key:"getDeviceDetails",value:function(){return new f}},{key:"handleResponse",value:function(e){return new Promise(function(t,a){[401,403].includes(e.status)||t(e),[401,403].includes(e.status)?window.location.reload():t(e),t(e)})}},{key:"renderDateFormat",value:function(e){return u()(e).format("MMMM D, YYYY h:mm A")}}]),e}(),h=function(){function e(t){Object(r.a)(this,e),this.options=t}return Object(i.a)(e,[{key:"GET",get:function(){var e=this.options,t=Object(n.a)({},e.headers);return new Promise(function(a,n){o.a.get(e.url,{headers:t}).then(function(e){a(e)}).catch(function(e){n(e)})})}},{key:"POST",get:function(){var e={method:"POST",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"DELETE",get:function(){var e={method:"DELETE",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"PUT",get:function(){var e={method:"PUT",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}}]),e}(),m=d,p=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"isEmpty",value:function(t){return"object"===typeof t?e.isEmptyObject(t):!t||"undefined"===t||""==t||" "==t||null===t}},{key:"isEmptyObject",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"removeNullKey",value:function(e){var t=Object.assign({},e);for(var a in t)t.hasOwnProperty(a)&&this.isEmpty(t[a])&&delete t[a];return t}}]),e}()},892:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n="http://".concat(window.location.hostname,"/"),r="ws://".concat(window.location.hostname,":5000/socket"),i="http://".concat(window.location.hostname,":5001"),c={LOGIN_URL:n+"api/admin/authenticate",DEVICE_URL:n+"api/device",VOUCHER_URL:n+"api/voucher",ADMIN_URL:n+"api/admin",MACHINE_URL:n+"api/machine",ROUTER_URL:n+"api/router",LOG_URL:n+"api/logs",COINSLOT_URL:n+"api/coinslot",BANDWIDTH_URL:n+"api/bandwidth",SOFTWARE_URL:n+"api/software",BLOCKED_URL:n+"api/blocked",CAPTIVE_PORTAL_URL:n+"api/captive/portal",DHCP_CONFIG_URL:n+"api/dhcp/config",INTERFACE_URL:n+"api/network/interface",FIREWALL_URL:n+"api/firewall",WIRELESSAP_URL:n+"api/wireless",PACKAGE_URL:n+"api/package/management",APT_LOG:"http://".concat(window.location.hostname,":5000/api/apt/log"),CAPTIVE_PORTAL:i,WS_URL:r}},899:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},901:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(228),r=a(229),i=a(892),c=a(233),o=a(889),s={Authorization:"Basic "+Object(c.a)().authHeader},u=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getBlockedList",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.BLOCKED_URL,headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"updatedCustomList",value:function(e){return new Promise(function(t,a){o.a.http({url:i.a.BLOCKED_URL,data:e,headers:s}).POST.then(function(e){t(e.data)}).catch(function(e){a(e)})})}},{key:"updateList",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.BLOCKED_URL,data:null,headers:s}).PUT.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getMachineDetails",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.MACHINE_URL+"/detail",headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"uploadLicenseFile",value:function(e){return new Promise(function(t,a){o.a.http({url:i.a.SOFTWARE_URL,headers:s,data:e}).POST.then(function(e){t(e.data)}).catch(function(e){a(e)})})}},{key:"addGlobalBandwidthlimit",value:function(e){return new Promise(function(t,a){o.b.isEmpty(e)&&a("Please input required data"),o.a.http({url:i.a.BANDWIDTH_URL+"/global",data:e,headers:s}).POST.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"removeGlobalBandwidthlimit",value:function(e){return new Promise(function(t,a){o.b.isEmpty(e)&&a("Please input required data"),o.a.http({url:i.a.BANDWIDTH_URL+"/global",data:e,headers:s}).DELETE.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"updateCoinSlot",value:function(e){return new Promise(function(t,a){o.b.isEmpty(e)&&a("Please input required data"),o.a.http({url:i.a.COINSLOT_URL,data:e,headers:s}).PUT.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"getCoinSlot",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.COINSLOT_URL,headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getSoftware",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.SOFTWARE_URL,headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"updateSoftware",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.SOFTWARE_URL,headers:s}).PUT.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getWanGateway",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.ROUTER_URL+"/gateway",headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"shutdown",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.MACHINE_URL+"/shutdown",headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"restart",value:function(){return new Promise(function(e,t){o.a.http({url:i.a.MACHINE_URL+"/reboot",headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}}]),e}()},910:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(3),c=a.n(i),o=a(112),s=a.n(o),u=a(886),l=a.n(u),f=a(887),d={tag:f.l,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},h=function(e){var t=e.className,a=e.cssModule,i=e.color,o=e.body,s=e.inverse,u=e.outline,d=e.tag,h=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(f.h)(l()(t,"card",!!s&&"text-white",!!o&&"card-body",!!i&&(u?"border":"bg")+"-"+i),a);return c.a.createElement(d,Object(n.a)({},m,{className:p,ref:h}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},911:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(3),c=a.n(i),o=a(112),s=a.n(o),u=a(886),l=a.n(u),f=a(887),d={tag:f.l,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},h=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,o=e.tag,s=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(f.h)(l()(t,"card-body"),a);return c.a.createElement(o,Object(n.a)({},s,{className:u,ref:i}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},921:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(3),c=a.n(i),o=a(112),s=a.n(o),u=a(886),l=a.n(u),f=a(887),d={tag:f.l,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},h=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,o=e.tag,s=e.form,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(f.h)(l()(t,i?"no-gutters":null,s?"form-row":"row"),a);return c.a.createElement(o,Object(n.a)({},u,{className:d}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h},922:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(899),c=a.n(i),o=a(3),s=a.n(o),u=a(112),l=a.n(u),f=a(886),d=a.n(f),h=a(887),m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),v={tag:h.l,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,i=e.widths,o=e.tag,u=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];i.forEach(function(t,n){var r=e[t];if(delete u[t],r||""===r){var i=!n;if(c()(r)){var o,s=i?"-":"-"+t+"-",f=b(i,t,r.size);l.push(Object(h.h)(d()(((o={})[f]=r.size||""===r.size,o["order"+s+r.order]=r.order||0===r.order,o["offset"+s+r.offset]=r.offset||0===r.offset,o)),a))}else{var m=b(i,t,r);l.push(m)}}}),l.length||l.push("col");var f=Object(h.h)(d()(t,l),a);return s.a.createElement(o,Object(n.a)({},u,{className:f}))};E.propTypes=v,E.defaultProps=g,t.a=E}}]);