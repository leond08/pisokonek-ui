(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1067:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return N});var n=a(228),r=a(229),c=a(231),i=a(230),o=a(232),s=a(3),u=a.n(s),l=a(910),d=a(911),f=a(921),h=a(922),p=a(931),m=a(932),g=a(990),b=a(954),O=a(941),v=a(936),E=a(946),y=a(901),w=a(891),L=a.n(w),R=a(888),j=a.n(R),P=(a(894),a(895)),T=a(907),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).getDhcpConfig=function(){a.dhcpService.getAllDhcpConfig().then(function(e){a.setState({data:e.dhcp_config})})},a.validateUrl=function(e){return!!new RegExp("((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))","i").test(e)},a.routerService=new y.a,a.dhcpService=new T.a,a.state={data:{},walled_garden:""},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getDhcpConfig()}},{key:"render",value:function(){var e=this,t=this.state,a=t.data;t.walled_garden;return u.a.createElement(P.e,{enableReinitialize:!0,initialValues:{data:a},onSubmit:function(t,a){a.setSubmitting;L.a.fire({title:"Walled Garden",text:"Are you sure you want to update sites?",confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0,showLoaderOnConfirm:!0,preConfirm:function(){return e.dhcpService.updateDhcpConfig(t.data).then(function(e){return e}).catch(function(e){L.a.fire("Success","Successfully updated sites.","success")})},allowOutsideClick:function(){return!L.a.isLoading()}}).then(function(e){e.value&&L.a.fire("Success","Successfully updated sites.","success")})}},function(t){t.handleChange;var a=t.values;t.isValid,t.errors,t.setFieldValue,t.setFieldError,t.setFieldTouched;return u.a.createElement(l.a,null,u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement(h.a,{lg:12},u.a.createElement(P.d,null,u.a.createElement(p.a,null,u.a.createElement(m.a,null,"Add URL"),u.a.createElement(g.a,{className:"mb-8"},u.a.createElement(b.a,{placeholder:"Add a site like www.example.com, or example.com",onChange:function(t){return e.setState({walled_garden:t.target.value})}}),u.a.createElement(O.a,{addonType:"append"},u.a.createElement(v.a,{color:"success",onClick:function(t){return e.setState(function(){var t=!0;if(e.validateUrl(e.state.walled_garden)){t=!1;a.data.ipset.push(e.state.walled_garden)}return{error:t,data:a.data}})}},"Add"))),u.a.createElement("br",null),e.state.error?u.a.createElement(E.a,{color:"danger"},"Invalid url"):"",u.a.createElement("br",null),u.a.createElement("h6",null,"Sites"),j.a.isEmpty(a.data.ipset)?u.a.createElement(E.a,null,"You have no sites."):a.data.ipset.map(function(t,n){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g.a,{className:"mb-8"},u.a.createElement(b.a,{disabled:!0,placeholder:t}),u.a.createElement(O.a,{addonType:"append"},u.a.createElement(v.a,{color:"danger",onClick:function(t){return e.setState(function(e){a.data.ipset.splice(n,1);return{data:a.data}})}},u.a.createElement("i",{className:"fa fa-trash"})))),u.a.createElement("br",null))})),u.a.createElement(v.a,{color:"primary",className:"px-4 text-right",type:"submit"},"Update"))))))})}}]),t}(s.Component)},889:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return m});var n=a(900),r=a(228),c=a(229),i=a(904),o=a.n(i),s=a(903),u=a.n(s),l=a(905),d=function(){function e(){Object(r.a)(this,e),this.parser=new l.UAParser}return Object(c.a)(e,[{key:"getDeviceName",value:function(){var e=this.parser.getDevice().vendor||"",t=this.parser.getDevice().model||"",a=this.parser.getDevice().type||"";return"".concat(e," ").concat(t," ").concat(a)}},{key:"getDeviceOS",value:function(){return this.parser.getOS().name+" "+this.parser.getOS().version}},{key:"getDeviceCPU",value:function(){return this.parser.getCPU()}},{key:"getDeviceEngine",value:function(){return this.parser.getEngine()}}]),e}(),f=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,null,[{key:"http",value:function(e){return new h(e)}},{key:"getDeviceDetails",value:function(){return new d}},{key:"handleResponse",value:function(e){return new Promise(function(t,a){[401,403].includes(e.status)||t(e),[401,403].includes(e.status)?window.location.reload():t(e),t(e)})}},{key:"renderDateFormat",value:function(e){return u()(e).format("MMMM D, YYYY h:mm A")}}]),e}(),h=function(){function e(t){Object(r.a)(this,e),this.options=t}return Object(c.a)(e,[{key:"GET",get:function(){var e=this.options,t=Object(n.a)({},e.headers);return new Promise(function(a,n){o.a.get(e.url,{headers:t}).then(function(e){a(e)}).catch(function(e){n(e)})})}},{key:"POST",get:function(){var e={method:"POST",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"DELETE",get:function(){var e={method:"DELETE",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"PUT",get:function(){var e={method:"PUT",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}}]),e}(),p=f,m=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,null,[{key:"isEmpty",value:function(t){return"object"===typeof t?e.isEmptyObject(t):!t||"undefined"===t||""==t||" "==t||null===t}},{key:"isEmptyObject",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"removeNullKey",value:function(e){var t=Object.assign({},e);for(var a in t)t.hasOwnProperty(a)&&this.isEmpty(t[a])&&delete t[a];return t}}]),e}()},892:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n="https://192.168.0.136/",r={LOGIN_URL:n+"api/admin/authenticate",DEVICE_URL:n+"api/device",VOUCHER_URL:n+"api/voucher",ADMIN_URL:n+"api/admin",MACHINE_URL:n+"api/machine",ROUTER_URL:n+"api/router",LOG_URL:n+"api/logs",COINSLOT_URL:n+"api/coinslot",BANDWIDTH_URL:n+"api/bandwidth",SOFTWARE_URL:n+"api/software",BLOCKED_URL:n+"api/blocked",CAPTIVE_PORTAL_URL:n+"api/captive/portal",DHCP_CONFIG_URL:n+"api/dhcp/config",INTERFACE_URL:n+"api/network/interface",FIREWALL_URL:n+"api/firewall",WIRELESSAP_URL:n+"api/wireless",PACKAGE_URL:n+"api/package/management",APT_LOG:"http://192.168.0.136:5000/api/apt/log",CAPTIVE_PORTAL:"http://192.168.0.136:5001",WS_URL:"ws://192.168.0.136:5000/socket"}},901:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(228),r=a(229),c=a(892),i=a(233),o=a(889),s={Authorization:"Basic "+Object(i.a)().authHeader},u=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getBlockedList",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.BLOCKED_URL,headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"updatedCustomList",value:function(e){return new Promise(function(t,a){o.a.http({url:c.a.BLOCKED_URL,data:e,headers:s}).POST.then(function(e){t(e.data)}).catch(function(e){a(e)})})}},{key:"updateList",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.BLOCKED_URL,data:null,headers:s}).PUT.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getMachineDetails",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.MACHINE_URL+"/detail",headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"uploadLicenseFile",value:function(e){return new Promise(function(t,a){o.a.http({url:c.a.SOFTWARE_URL,headers:s,data:e}).POST.then(function(e){t(e.data)}).catch(function(e){a(e)})})}},{key:"addGlobalBandwidthlimit",value:function(e){return new Promise(function(t,a){o.b.isEmpty(e)&&a("Please input required data"),o.a.http({url:c.a.BANDWIDTH_URL+"/global",data:e,headers:s}).POST.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"removeGlobalBandwidthlimit",value:function(e){return new Promise(function(t,a){o.b.isEmpty(e)&&a("Please input required data"),o.a.http({url:c.a.BANDWIDTH_URL+"/global",data:e,headers:s}).DELETE.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"updateCoinSlot",value:function(e){return new Promise(function(t,a){o.b.isEmpty(e)&&a("Please input required data"),o.a.http({url:c.a.COINSLOT_URL,data:e,headers:s}).PUT.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"getCoinSlot",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.COINSLOT_URL,headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getSoftware",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.SOFTWARE_URL,headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"updateSoftware",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.SOFTWARE_URL,headers:s}).PUT.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getWanGateway",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.ROUTER_URL+"/gateway",headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"shutdown",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.MACHINE_URL+"/shutdown",headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"restart",value:function(){return new Promise(function(e,t){o.a.http({url:c.a.MACHINE_URL+"/reboot",headers:s}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}}]),e}()},907:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(228),r=a(229),c=a(889),i=a(233),o=a(892),s=a(888),u=a.n(s),l={Authorization:"Basic "+Object(i.a)().authHeader},d=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getDhcpConfig",value:function(e){return new Promise(function(t,a){c.a.http({url:o.a.DHCP_CONFIG_URL+"/"+e,headers:l}).GET.then(function(e){t(e.data)}).catch(function(e){a(e)})})}},{key:"removeFromDHCP",value:function(e){return new Promise(function(t,a){c.a.http({url:o.a.DHCP_CONFIG_URL,headers:l}).GET.then(function(a){var n=a.data.dhcp_config,r=Object.assign({},n),c=u.a.findIndex(n.dhcp_range,{interface:e}),i=u.a.findIndex(n.dhcp_option,{interface:e}),o=u.a.findIndex(n.interface,{name:e});-1!==o&&r.interface.splice(o,1),-1!==i&&r.dhcp_option.splice(i,1),-1!==c&&r.dhcp_range.splice(c,1),t(r)}).catch(function(e){a(e)})})}},{key:"getAllDhcpConfig",value:function(){return new Promise(function(e,t){c.a.http({url:o.a.DHCP_CONFIG_URL,headers:l}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"updateDhcpConfig",value:function(e){return new Promise(function(t,a){c.a.http({url:o.a.DHCP_CONFIG_URL,headers:l,data:e}).POST.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}}]),e}()},910:function(e,t,a){"use strict";var n=a(35),r=a(100),c=a(3),i=a.n(c),o=a(112),s=a.n(o),u=a(886),l=a.n(u),d=a(887),f={tag:d.l,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},h=function(e){var t=e.className,a=e.cssModule,c=e.color,o=e.body,s=e.inverse,u=e.outline,f=e.tag,h=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.h)(l()(t,"card",!!s&&"text-white",!!o&&"card-body",!!c&&(u?"border":"bg")+"-"+c),a);return i.a.createElement(f,Object(n.a)({},p,{className:m,ref:h}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},911:function(e,t,a){"use strict";var n=a(35),r=a(100),c=a(3),i=a.n(c),o=a(112),s=a.n(o),u=a(886),l=a.n(u),d=a(887),f={tag:d.l,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},h=function(e){var t=e.className,a=e.cssModule,c=e.innerRef,o=e.tag,s=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.h)(l()(t,"card-body"),a);return i.a.createElement(o,Object(n.a)({},s,{className:u,ref:c}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},916:function(e,t,a){"use strict";var n=a(35),r=a(100),c=a(3),i=a.n(c),o=a(112),s=a.n(o),u=a(886),l=a.n(u),d=a(887),f={tag:d.l,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,a=e.cssModule,c=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),s=Object(d.h)(l()(t,"input-group-text"),a);return i.a.createElement(c,Object(n.a)({},o,{className:s}))};h.propTypes=f,h.defaultProps={tag:"span"},t.a=h},931:function(e,t,a){"use strict";var n=a(35),r=a(100),c=a(3),i=a.n(c),o=a(112),s=a.n(o),u=a(886),l=a.n(u),d=a(887),f={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:d.l,className:s.a.string,cssModule:s.a.object},h=function(e){var t=e.className,a=e.cssModule,c=e.row,o=e.disabled,s=e.check,u=e.inline,f=e.tag,h=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(d.h)(l()(t,!!c&&"row",s?"form-check":"form-group",!(!s||!u)&&"form-check-inline",!(!s||!o)&&"disabled"),a);return i.a.createElement(f,Object(n.a)({},h,{className:p}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},932:function(e,t,a){"use strict";var n=a(35),r=a(100),c=a(3),i=a.n(c),o=a(112),s=a.n(o),u=a(886),l=a.n(u),d=a(899),f=a.n(d),h=a(887),p=s.a.oneOfType([s.a.number,s.a.string]),m=s.a.oneOfType([s.a.string,s.a.number,s.a.shape({size:p,order:p,offset:p})]),g={children:s.a.node,hidden:s.a.bool,check:s.a.bool,size:s.a.string,for:s.a.string,tag:h.l,className:s.a.string,cssModule:s.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:s.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},O=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,c=e.hidden,o=e.widths,s=e.tag,u=e.check,d=e.size,p=e.for,m=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];o.forEach(function(t,n){var r=e[t];if(delete m[t],r||""===r){var c,i=!n;if(f()(r)){var o,s=i?"-":"-"+t+"-";c=O(i,t,r.size),g.push(Object(h.h)(l()(((o={})[c]=r.size||""===r.size,o["order"+s+r.order]=r.order||0===r.order,o["offset"+s+r.offset]=r.offset||0===r.offset,o))),a)}else c=O(i,t,r),g.push(c)}});var b=Object(h.h)(l()(t,!!c&&"sr-only",!!u&&"form-check-label",!!d&&"col-form-label-"+d,g,!!g.length&&"col-form-label"),a);return i.a.createElement(s,Object(n.a)({htmlFor:p},m,{className:b}))};v.propTypes=g,v.defaultProps=b,t.a=v},941:function(e,t,a){"use strict";var n=a(35),r=a(100),c=a(3),i=a.n(c),o=a(112),s=a.n(o),u=a(886),l=a.n(u),d=a(887),f=a(916),h={tag:d.l,addonType:s.a.oneOf(["prepend","append"]).isRequired,children:s.a.node,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.tag,o=e.addonType,s=e.children,u=Object(r.a)(e,["className","cssModule","tag","addonType","children"]),h=Object(d.h)(l()(t,"input-group-"+o),a);return"string"===typeof s?i.a.createElement(c,Object(n.a)({},u,{className:h}),i.a.createElement(f.a,{children:s})):i.a.createElement(c,Object(n.a)({},u,{className:h,children:s}))};p.propTypes=h,p.defaultProps={tag:"div"},t.a=p},946:function(e,t,a){"use strict";var n=a(35),r=a(100),c=a(908),i=a(3),o=a.n(i),s=a(112),u=a.n(s),l=a(886),d=a.n(l),f=a(887),h=a(915),p={children:u.a.node,className:u.a.string,closeClassName:u.a.string,closeAriaLabel:u.a.string,cssModule:u.a.object,color:u.a.string,fade:u.a.bool,isOpen:u.a.bool,toggle:u.a.func,tag:f.l,transition:u.a.shape(h.a.propTypes),innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},m={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(c.a)({},h.a.defaultProps,{unmountOnExit:!0})};function g(e){var t=e.className,a=e.closeClassName,i=e.closeAriaLabel,s=e.cssModule,u=e.tag,l=e.color,p=e.isOpen,m=e.toggle,g=e.children,b=e.transition,O=e.fade,v=e.innerRef,E=Object(r.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(f.h)(d()(t,"alert","alert-"+l,{"alert-dismissible":m}),s),w=Object(f.h)(d()("close",a),s),L=Object(c.a)({},h.a.defaultProps,b,{baseClass:O?b.baseClass:"",timeout:O?b.timeout:0});return o.a.createElement(h.a,Object(n.a)({},E,L,{tag:u,className:y,in:p,role:"alert",innerRef:v}),m?o.a.createElement("button",{type:"button",className:w,"aria-label":i,onClick:m},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}g.propTypes=p,g.defaultProps=m,t.a=g}}]);