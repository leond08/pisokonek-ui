(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1004:function(e,t,a){"use strict";var n=a(35),r=a(100),s=a(3),c=a.n(s),o=a(112),i=a.n(o),l=a(886),u=a.n(l),d=a(887),f={tag:d.l,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.h)(u()(t,"card-header"),a);return c.a.createElement(s,Object(n.a)({},o,{className:i}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},1065:function(e,t,a){"use strict";var n=a(35),r=a(100),s=a(3),c=a.n(s),o=a(112),i=a.n(o),l=a(886),u=a.n(l),d=a(887),f={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:d.l,responsiveTag:d.l,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},m=function(e){var t=e.className,a=e.cssModule,s=e.size,o=e.bordered,i=e.borderless,l=e.striped,f=e.dark,m=e.hover,b=e.responsive,p=e.tag,h=e.responsiveTag,v=e.innerRef,g=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(d.h)(u()(t,"table",!!s&&"table-"+s,!!o&&"table-bordered",!!i&&"table-borderless",!!l&&"table-striped",!!f&&"table-dark",!!m&&"table-hover"),a),O=c.a.createElement(p,Object(n.a)({},g,{ref:v,className:E}));if(b){var j=Object(d.h)(!0===b?"table-responsive":"table-responsive-"+b,a);return c.a.createElement(h,{className:j},O)}return O};m.propTypes=f,m.defaultProps={tag:"table",responsiveTag:"div"},t.a=m},1261:function(e,t,a){"use strict";a.r(t);var n=a(228),r=a(229),s=a(231),c=a(230),o=a(232),i=a(3),l=a.n(i),u=a(920),d=a(921),f=a(922),m=a(1004),b=a(923),p=a(1065),h=a(892),v=a(233),g=a(893),E=a(904),O=a.n(E),j={Authorization:"Basic "+Object(v.a)().authHeader},y=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getDevices",value:function(){return new Promise(function(e,t){h.a.http({url:g.a.DEVICE_URL+"/all",headers:j}).GET.then(function(t){!O.a.isArray(t.data)&&O.a.isEmpty(t.data)?e([]):e(t.data)}).catch(function(e){t(e)})})}}]),e}(),N=a(903),M=a.n(N),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).deviceService=new y,a.state={devices:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"renderDateFormat",value:function(e){return M()(e).format("MMMM D, YYYY h:mm A")}},{key:"getDevices",value:function(){var e=this;this.deviceService.getDevices().then(function(t){e.setState({devices:t})}).catch(function(e){console.error(e)})}},{key:"componentDidMount",value:function(){this.getDevices()}},{key:"render",value:function(){var e=this,t=this.state.devices;return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(u.a,null,l.a.createElement(d.a,{lg:12},l.a.createElement(f.a,null,l.a.createElement(m.a,null,"List of Wifi Users"),l.a.createElement(b.a,null,l.a.createElement(p.a,{responsive:!0,striped:!0,hover:!0},l.a.createElement("th",{className:"text-center"},"Ip Address"),l.a.createElement("th",{className:"text-center"},"Mac Address"),l.a.createElement("th",{className:"text-center"},"Start Date"),l.a.createElement("th",{className:"text-center"},"End Date"),l.a.createElement("th",{className:"text-center"},"Active"),l.a.createElement("th",{className:"text-center"},"Action"),l.a.createElement("tbody",null,O.a.isArray(t)&&!O.a.isEmpty(t)?O.a.map(t,function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",{className:"text-center"},t.ipaddress),l.a.createElement("td",{className:"text-center"},t.macaddress),l.a.createElement("td",{className:"text-center"},e.renderDateFormat(t.startdate)),l.a.createElement("td",{className:"text-center"},e.renderDateFormat(t.enddate)),l.a.createElement("td",{className:"text-center"},l.a.createElement("span",{className:"badge badge-danger"},t.active)),l.a.createElement("td",{className:"text-center"},l.a.createElement("button",{type:"button",className:"btn btn-success"},l.a.createElement("i",{className:"fa fa-pencil"}),"\xa0Edit"),"\xa0",l.a.createElement("button",{type:"button",className:"btn btn-danger"},l.a.createElement("i",{className:"fa fa-remove"}),"\xa0Block")))}):l.a.createElement("tr",{colSpan:6},l.a.createElement("td",{colSpan:6},l.a.createElement("p",{className:"text-muted text-center"},"Nothing to show."))))))))))}}]),t}(i.Component);t.default=w},892:function(e,t,a){"use strict";a.d(t,"a",function(){return f}),a.d(t,"b",function(){return m});var n=a(915),r=a(228),s=a(229),c=a(907),o=a.n(c),i=a(903),l=a.n(i),u=function(){function e(){Object(r.a)(this,e)}return Object(s.a)(e,null,[{key:"http",value:function(e){return new d(e)}},{key:"handleResponse",value:function(e){return new Promise(function(t,a){[401,403].includes(e.status)||t(e),[401,403].includes(e.status)?window.location.reload():t(e),t(e)})}},{key:"renderDateFormat",value:function(e){return l()(e).format("MMMM D, YYYY h:mm A")}}]),e}(),d=function(){function e(t){Object(r.a)(this,e),this.options=t}return Object(s.a)(e,[{key:"GET",get:function(){var e=this.options,t=Object(n.a)({},e.headers);return new Promise(function(a,n){o.a.get(e.url,{headers:t}).then(function(e){a(e)}).catch(function(e){n(e)})})}},{key:"POST",get:function(){var e={method:"POST",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"DELETE",get:function(){var e={method:"DELETE",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"PUT",get:function(){var e={method:"PUT",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){o.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}}]),e}(),f=u,m=function(){function e(){Object(r.a)(this,e)}return Object(s.a)(e,null,[{key:"isEmpty",value:function(t){return"object"===typeof t?e.isEmptyObject(t):!t||"undefined"===t||""==t||" "==t||null===t}},{key:"isEmptyObject",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"removeNullKey",value:function(e){var t=Object.assign({},e);for(var a in t)t.hasOwnProperty(a)&&this.isEmpty(t[a])&&delete t[a];return t}}]),e}()},893:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n="http://localhost:5000/",r={LOGIN_URL:n+"api/admin/authenticate",DEVICE_URL:n+"api/device",VOUCHER_URL:n+"api/voucher",ADMIN_URL:n+"api/admin",MACHINE_URL:n+"api/machine",ROUTER_URL:n+"api/router",LOG_URL:n+"api/logs",COINSLOT_URL:n+"api/coinslot",WS_URL:"ws://localhost:5000/socket"}},895:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},920:function(e,t,a){"use strict";var n=a(35),r=a(100),s=a(3),c=a.n(s),o=a(112),i=a.n(o),l=a(886),u=a.n(l),d=a(887),f={tag:d.l,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},m=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,o=e.tag,i=e.form,l=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(d.h)(u()(t,s?"no-gutters":null,i?"form-row":"row"),a);return c.a.createElement(o,Object(n.a)({},l,{className:f}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},921:function(e,t,a){"use strict";var n=a(35),r=a(100),s=a(895),c=a.n(s),o=a(3),i=a.n(o),l=a(112),u=a.n(l),d=a(886),f=a.n(d),m=a(887),b=u.a.oneOfType([u.a.number,u.a.string]),p=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:b,offset:b})]),h={tag:m.l,xs:p,sm:p,md:p,lg:p,xl:p,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,s=e.widths,o=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),u=[];s.forEach(function(t,n){var r=e[t];if(delete l[t],r||""===r){var s=!n;if(c()(r)){var o,i=s?"-":"-"+t+"-",d=g(s,t,r.size);u.push(Object(m.h)(f()(((o={})[d]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o)),a))}else{var b=g(s,t,r);u.push(b)}}}),u.length||u.push("col");var d=Object(m.h)(f()(t,u),a);return i.a.createElement(o,Object(n.a)({},l,{className:d}))};E.propTypes=h,E.defaultProps=v,t.a=E},922:function(e,t,a){"use strict";var n=a(35),r=a(100),s=a(3),c=a.n(s),o=a(112),i=a.n(o),l=a(886),u=a.n(l),d=a(887),f={tag:d.l,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var t=e.className,a=e.cssModule,s=e.color,o=e.body,i=e.inverse,l=e.outline,f=e.tag,m=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.h)(u()(t,"card",!!i&&"text-white",!!o&&"card-body",!!s&&(l?"border":"bg")+"-"+s),a);return c.a.createElement(f,Object(n.a)({},b,{className:p,ref:m}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},923:function(e,t,a){"use strict";var n=a(35),r=a(100),s=a(3),c=a.n(s),o=a(112),i=a.n(o),l=a(886),u=a.n(l),d=a(887),f={tag:d.l,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,o=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.h)(u()(t,"card-body"),a);return c.a.createElement(o,Object(n.a)({},i,{className:l,ref:s}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m}}]);