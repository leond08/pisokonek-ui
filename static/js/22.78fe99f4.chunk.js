(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1042:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(3),c=a.n(i),s=a(112),o=a.n(s),u=a(886),l=a.n(u),d=a(887),f={tag:d.l,flush:o.a.bool,className:o.a.string,cssModule:o.a.object},h=function(e){var t=e.className,a=e.cssModule,i=e.tag,s=e.flush,o=Object(r.a)(e,["className","cssModule","tag","flush"]),u=Object(d.h)(l()(t,"list-group",!!s&&"list-group-flush"),a);return c.a.createElement(i,Object(n.a)({},o,{className:u}))};h.propTypes=f,h.defaultProps={tag:"ul"},t.a=h},1043:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(3),c=a.n(i),s=a(112),o=a.n(s),u=a(886),l=a.n(u),d=a(887),f={tag:d.l,active:o.a.bool,disabled:o.a.bool,color:o.a.string,action:o.a.bool,className:o.a.any,cssModule:o.a.object},h=function(e){e.preventDefault()},p=function(e){var t=e.className,a=e.cssModule,i=e.tag,s=e.active,o=e.disabled,u=e.action,f=e.color,p=Object(r.a)(e,["className","cssModule","tag","active","disabled","action","color"]),m=Object(d.h)(l()(t,!!s&&"active",!!o&&"disabled",!!u&&"list-group-item-action",!!f&&"list-group-item-"+f,"list-group-item"),a);return o&&(p.onClick=h),c.a.createElement(i,Object(n.a)({},p,{className:m}))};p.propTypes=f,p.defaultProps={tag:"li"},t.a=p},1065:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return R});var n=a(897),r=a.n(n),i=a(898),c=a(228),s=a(229),o=a(231),u=a(230),l=a(232),d=a(3),f=a.n(d),h=a(910),p=a(926),m=a(911),v=a(1043),g=a(954),E=a(936),b=a(1042),w=(a(886),a(906),a(901)),O=a(891),y=a.n(O),L=(a(888),a(894)),N=a(895),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).redirectToUrl=function(){return window.location.href="https://pisokonek.github.io"},a.getSoftware=function(){a.routerService.getSoftware().then(function(e){a.setState({version:e.version,daterelease:e.daterelease,license_owner:e.license_owner,registered_date:e.registered_date,license_status:e.license_status,hardware:e.hardware,sdcardcid:e.sdcardcid})})},a.updateSoftware=function(){y.a.fire({title:"Update Software",text:"Are you sure you want to update the software to latest version?",confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0,showLoaderOnConfirm:!0,preConfirm:function(){return a.routerService.updateSoftware().then(function(){var e=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Source fetch failed."!==t.response_ui&&"Source fetch failed."!==t.response_api){e.next=4;break}throw new Error("Source fetch failed.");case 4:return e.abrupt("return",a.routerService.getSoftware().then(function(e){return a.setState({version:e.version,daterelease:e.daterelease,license_owner:e.license_owner,registered_date:e.registered_date,license_status:e.license_status,hardware:e.hardware,sdcardcid:e.sdcardcid}),e}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){y.a.fire("Error","Source fetch failed. Please try again.","error")})},allowOutsideClick:function(){return!y.a.isLoading()}}).then(function(e){e.value&&e.value&&y.a.fire("Update Software","Software is up to date. Please restart the machine","success")})},a.uploadLicenseFile=function(){var e=new FormData;e.append("file",a.state.selectedFile),y.a.fire({title:"Software License",text:"You will be uploading your license.",confirmButtonText:"Yes",cancelButtonText:"No",showCancelButton:!0,showLoaderOnConfirm:!0,preConfirm:function(){return a.routerService.uploadLicenseFile(e).then(function(e){return a.routerService.getSoftware().then(function(e){if("Activated"===e.license_status)return a.setState({version:e.version,daterelease:e.daterelease,license_owner:e.license_owner,registered_date:e.registered_date,license_status:e.license_status,hardware:e.hardware,sdcardcid:e.sdcardcid}),e;throw new Error("License is invalid.")})}).catch(function(e){console.error(e),y.a.fire("Error","Error uploading license. "+e,"error")})},allowOutsideClick:function(){return!y.a.isLoading()}}).then(function(e){e.value&&e.value&&y.a.fire("Software License","License Activated. Please restart the machine.","success")})},a.fileUploadHandler=function(e){a.setState({selectedFile:e.target.files[0]})},a.routerService=new w.a,a.state={version:"",daterelease:"",registered_date:"",license_owner:"",license_status:"",hardware:"",sdcardcid:"",selectedFile:null},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getSoftware()}},{key:"render",value:function(){var e=this;this.props.data;return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",null,"License"),f.a.createElement(h.a,null,f.a.createElement(p.a,null,"Details"),f.a.createElement(m.a,null,f.a.createElement(v.a,{action:!0,tag:"div",className:"list-group-item-accent-warning list-group-item-divider"},f.a.createElement("div",null,f.a.createElement("strong",null,"Licensed To")),f.a.createElement("p",{className:"text-muted mr-3"},f.a.createElement("i",{className:"fa fa-server"}),"\xa0 ",this.state.license_owner),f.a.createElement("div",null,f.a.createElement("strong",null,"Status")),f.a.createElement("p",{className:"text-muted mr-3"},f.a.createElement("i",{className:"fa fa-server"}),"\xa0 ",this.state.license_status),f.a.createElement("div",null,f.a.createElement("strong",null,"Registered Date")),f.a.createElement("p",{className:"text-muted mr-3"},f.a.createElement("i",{className:"fa fa-server"}),"\xa0 ",this.state.registered_date)),f.a.createElement("br",null),f.a.createElement(g.a,{type:"file",onChange:function(t){return e.fileUploadHandler(t)}}),f.a.createElement("br",null),f.a.createElement(E.a,{color:"primary",onClick:function(t){return e.uploadLicenseFile()}},"Upload license"))),f.a.createElement("h2",null,"Software"),f.a.createElement(b.a,{className:"list-group-accent",tag:"div"},f.a.createElement(v.a,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"DETAILS"),f.a.createElement(v.a,{action:!0,tag:"div",className:"list-group-item-accent-warning list-group-item-divider"},f.a.createElement("div",null,f.a.createElement("strong",null,"Software Version")),f.a.createElement("p",{className:"text-muted mr-3"},f.a.createElement("i",{className:"fa fa-server"}),"\xa0 ",this.state.version),f.a.createElement("div",null,f.a.createElement("strong",null,"Date Released")),f.a.createElement("p",{className:"text-muted mr-3"},f.a.createElement("i",{className:"fa fa-server"}),"\xa0 ",this.state.daterelease)),f.a.createElement(E.a,{color:"primary",onClick:function(t){return e.updateSoftware()}},"Update")),f.a.createElement("br",null),f.a.createElement(N.e,{initialValues:{identifier:"sdcard"},validationSchema:L.c().shape({pulse:L.d().required("This field is required.")}),onSubmit:function(t,a){a.setSubmitting;e.props.update(t)}},function(t){t.handleChange,t.values,t.isValid,t.errors,t.setFieldValue,t.setFieldError,t.setFieldTouched;return f.a.createElement(f.a.Fragment,null,f.a.createElement("h2",null,"Purchase"),f.a.createElement(b.a,{className:"list-group-accent",tag:"div"},f.a.createElement(v.a,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"You can purchase a license here"),f.a.createElement(v.a,{action:!0,tag:"div",className:"list-group-item-accent-warning list-group-item-divider"},f.a.createElement(N.d,null,f.a.createElement("div",null,f.a.createElement("strong",null,"Hardware Serial Number")),f.a.createElement("p",{className:"text-muted mr-3"},f.a.createElement("i",{className:"fa fa-server"}),"\xa0 ",e.state.hardware),f.a.createElement("div",null,f.a.createElement("strong",null,"SD Card Serial Number")),f.a.createElement("p",{className:"text-muted mr-3"},f.a.createElement("i",{className:"fa fa-server"}),"\xa0 ",e.state.sdcardcid),f.a.createElement("br",null),f.a.createElement(E.a,{color:"primary",type:"submit",onClick:function(t){return e.redirectToUrl()}},"Purchase")))),f.a.createElement("br",null))}))}}]),t}(d.Component)},889:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return m});var n=a(900),r=a(228),i=a(229),c=a(904),s=a.n(c),o=a(903),u=a.n(o),l=a(905),d=function(){function e(){Object(r.a)(this,e),this.parser=new l.UAParser}return Object(i.a)(e,[{key:"getDeviceName",value:function(){var e=this.parser.getDevice().vendor||"",t=this.parser.getDevice().model||"",a=this.parser.getDevice().type||"";return"".concat(e," ").concat(t," ").concat(a)}},{key:"getDeviceOS",value:function(){return this.parser.getOS().name+" "+this.parser.getOS().version}},{key:"getDeviceCPU",value:function(){return this.parser.getCPU()}},{key:"getDeviceEngine",value:function(){return this.parser.getEngine()}}]),e}(),f=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"http",value:function(e){return new h(e)}},{key:"getDeviceDetails",value:function(){return new d}},{key:"handleResponse",value:function(e){return new Promise(function(t,a){[401,403].includes(e.status)||t(e),[401,403].includes(e.status)?window.location.reload():t(e),t(e)})}},{key:"renderDateFormat",value:function(e){return u()(e).format("MMMM D, YYYY h:mm A")}}]),e}(),h=function(){function e(t){Object(r.a)(this,e),this.options=t}return Object(i.a)(e,[{key:"GET",get:function(){var e=this.options,t=Object(n.a)({},e.headers);return new Promise(function(a,n){s.a.get(e.url,{headers:t}).then(function(e){a(e)}).catch(function(e){n(e)})})}},{key:"POST",get:function(){var e={method:"POST",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){s.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"DELETE",get:function(){var e={method:"DELETE",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){s.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"PUT",get:function(){var e={method:"PUT",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){s.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}}]),e}(),p=f,m=function(){function e(){Object(r.a)(this,e)}return Object(i.a)(e,null,[{key:"isEmpty",value:function(t){return"object"===typeof t?e.isEmptyObject(t):!t||"undefined"===t||""==t||" "==t||null===t}},{key:"isEmptyObject",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"removeNullKey",value:function(e){var t=Object.assign({},e);for(var a in t)t.hasOwnProperty(a)&&this.isEmpty(t[a])&&delete t[a];return t}}]),e}()},892:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n="https://192.168.0.136/",r={LOGIN_URL:n+"api/admin/authenticate",DEVICE_URL:n+"api/device",VOUCHER_URL:n+"api/voucher",ADMIN_URL:n+"api/admin",MACHINE_URL:n+"api/machine",ROUTER_URL:n+"api/router",LOG_URL:n+"api/logs",COINSLOT_URL:n+"api/coinslot",BANDWIDTH_URL:n+"api/bandwidth",SOFTWARE_URL:n+"api/software",BLOCKED_URL:n+"api/blocked",CAPTIVE_PORTAL_URL:n+"api/captive/portal",DHCP_CONFIG_URL:n+"api/dhcp/config",INTERFACE_URL:n+"api/network/interface",FIREWALL_URL:n+"api/firewall",WIRELESSAP_URL:n+"api/wireless",PACKAGE_URL:n+"api/package/management",APT_LOG:"http://192.168.0.136:5000/api/apt/log",CAPTIVE_PORTAL:"http://192.168.0.136:5001",WS_URL:"ws://192.168.0.136:5000/socket"}},897:function(e,t,a){e.exports=a(348)},898:function(e,t,a){"use strict";function n(e,t,a,n,r,i,c){try{var s=e[i](c),o=s.value}catch(u){return void a(u)}s.done?t(o):Promise.resolve(o).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise(function(r,i){var c=e.apply(t,a);function s(e){n(c,r,i,s,o,"next",e)}function o(e){n(c,r,i,s,o,"throw",e)}s(void 0)})}}a.d(t,"a",function(){return r})},901:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(228),r=a(229),i=a(892),c=a(233),s=a(889),o={Authorization:"Basic "+Object(c.a)().authHeader},u=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getBlockedList",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.BLOCKED_URL,headers:o}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"updatedCustomList",value:function(e){return new Promise(function(t,a){s.a.http({url:i.a.BLOCKED_URL,data:e,headers:o}).POST.then(function(e){t(e.data)}).catch(function(e){a(e)})})}},{key:"updateList",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.BLOCKED_URL,data:null,headers:o}).PUT.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getMachineDetails",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.MACHINE_URL+"/detail",headers:o}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"uploadLicenseFile",value:function(e){return new Promise(function(t,a){s.a.http({url:i.a.SOFTWARE_URL,headers:o,data:e}).POST.then(function(e){t(e.data)}).catch(function(e){a(e)})})}},{key:"addGlobalBandwidthlimit",value:function(e){return new Promise(function(t,a){s.b.isEmpty(e)&&a("Please input required data"),s.a.http({url:i.a.BANDWIDTH_URL+"/global",data:e,headers:o}).POST.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"removeGlobalBandwidthlimit",value:function(e){return new Promise(function(t,a){s.b.isEmpty(e)&&a("Please input required data"),s.a.http({url:i.a.BANDWIDTH_URL+"/global",data:e,headers:o}).DELETE.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"updateCoinSlot",value:function(e){return new Promise(function(t,a){s.b.isEmpty(e)&&a("Please input required data"),s.a.http({url:i.a.COINSLOT_URL,data:e,headers:o}).PUT.then(function(e){t(e.data.message)}).catch(function(e){a(e)})})}},{key:"getCoinSlot",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.COINSLOT_URL,headers:o}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getSoftware",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.SOFTWARE_URL,headers:o}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"updateSoftware",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.SOFTWARE_URL,headers:o}).PUT.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"getWanGateway",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.ROUTER_URL+"/gateway",headers:o}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"shutdown",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.MACHINE_URL+"/shutdown",headers:o}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"restart",value:function(){return new Promise(function(e,t){s.a.http({url:i.a.MACHINE_URL+"/reboot",headers:o}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}}]),e}()},910:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(3),c=a.n(i),s=a(112),o=a.n(s),u=a(886),l=a.n(u),d=a(887),f={tag:d.l,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},h=function(e){var t=e.className,a=e.cssModule,i=e.color,s=e.body,o=e.inverse,u=e.outline,f=e.tag,h=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.h)(l()(t,"card",!!o&&"text-white",!!s&&"card-body",!!i&&(u?"border":"bg")+"-"+i),a);return c.a.createElement(f,Object(n.a)({},p,{className:m,ref:h}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},911:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(3),c=a.n(i),s=a(112),o=a.n(s),u=a(886),l=a.n(u),d=a(887),f={tag:d.l,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},h=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,s=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.h)(l()(t,"card-body"),a);return c.a.createElement(s,Object(n.a)({},o,{className:u,ref:i}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},926:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(3),c=a.n(i),s=a(112),o=a.n(s),u=a(886),l=a.n(u),d=a(887),f={tag:d.l,className:o.a.string,cssModule:o.a.object},h=function(e){var t=e.className,a=e.cssModule,i=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),o=Object(d.h)(l()(t,"card-header"),a);return c.a.createElement(i,Object(n.a)({},s,{className:o}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},954:function(e,t,a){"use strict";var n=a(35),r=a(100),i=a(893),c=a(63),s=a(3),o=a.n(s),u=a(112),l=a.n(u),d=a(886),f=a.n(d),h=a(887),p={children:l.a.node,type:l.a.string,size:l.a.string,bsSize:l.a.string,valid:l.a.bool,invalid:l.a.bool,tag:h.l,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),plaintext:l.a.bool,addon:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,c=e.bsSize,s=e.valid,u=e.invalid,l=e.tag,d=e.addon,p=e.plaintext,m=e.innerRef,v=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(i)>-1,E=new RegExp("\\D","g"),b=l||("select"===i||"textarea"===i?i:"input"),w="form-control";p?(w+="-plaintext",b=l||"input"):"file"===i?w+="-file":g&&(w=d?null:"form-check-input"),v.size&&E.test(v.size)&&(Object(h.m)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=v.size,delete v.size);var O=Object(h.h)(f()(t,u&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,w),a);return("input"===b||l&&"function"===typeof l)&&(v.type=i),v.children&&!p&&"select"!==i&&"string"===typeof b&&"select"!==b&&(Object(h.m)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(b,Object(n.a)({},v,{ref:m,className:O}))},t}(o.a.Component);m.propTypes=p,m.defaultProps={type:"text"},t.a=m}}]);