(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1010:function(e,t,n){"use strict";var a=n(35),o=n(100),r=n(3),i=n.n(r),c=n(112),s=n.n(c),l=n(886),u=n.n(l),f=n(887),d={tag:f.l,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),s=Object(f.h)(u()(t,"card-group"),n);return i.a.createElement(r,Object(a.a)({},c,{className:s}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},1082:function(e,t,n){"use strict";n.r(t);var a=n(228),o=n(229),r=n(231),i=n(230),c=n(232),s=n(3),l=n.n(s),u=n(983),f=n(933),d=n(934),p=n(1010),m=n(938),b=n(939),h=n(985),v=n(936),g=n(895),y=n(890),O=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,[{key:"getDevice",value:function(){return new Promise(function(e,t){y.a.http({url:g.a.DEVICE_URL}).GET.then(function(t){e(t.data)}).catch(function(e){t(e)})})}},{key:"downloadAPK",value:function(){window.location.href=g.a.APK_URL}},{key:"redirectToCaptive",value:function(){window.location.href=g.a.CAPTIVE_PORTAL}},{key:"useVoucher",value:function(e){var t={devicename:y.a.getDeviceDetails().getDeviceName()||"unknown",deviceos:y.a.getDeviceDetails().getDeviceOS()||"unknown",vouchercode:e};return new Promise(function(e,n){y.a.http({url:"".concat(g.a.VOUCHER_URL,"/manage"),data:t}).POST.then(function(t){e(t.data.message)}).catch(function(e){n(e)})})}}]),e}(),j=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(i.a)(t).call(this,e))).pisoWifiService=new O,n.state="",n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(u.a,null,l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(d.a,{md:"8"},l.a.createElement(p.a,null,l.a.createElement(m.a,{className:"p-4"},l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement("div",{className:"text-center"},l.a.createElement("svg",{id:"Component_2_1","data-name":"Component 2 \u2013 1",xmlns:"http://www.w3.org/2000/svg",width:"250",height:"100",viewBox:"0 0 557 100"},l.a.createElement("text",{id:"Pi",transform:"translate(0 76)",fill:"#0d0c0c","font-size":"100","font-family":"SitkaSmall-Bold, Sitka Small","font-weight":"700"},l.a.createElement("tspan",{x:"50",y:"0"},"Pi")),l.a.createElement("text",{id:"Konek",transform:"translate(225 76)",fill:"#00b1ff","font-size":"100","font-family":"SitkaSmall-Bold, Sitka Small","font-weight":"700"},l.a.createElement("tspan",{x:"-50",y:"0"},"Konek")))),l.a.createElement(f.a,null,l.a.createElement(d.a,{xs:"12",className:"text-center"},l.a.createElement(v.a,{onClick:this.pisoWifiService.redirectToCaptive,style:{padding:"10px",marginBottom:"8px"},color:"primary",className:"px-6 col-8"},"Connect to Internet")),l.a.createElement(d.a,{xs:"12",className:"text-center"},l.a.createElement(v.a,{onClick:this.pisoWifiService.downloadAPK,style:{padding:"10px",marginBottom:"8px"},color:"success",className:"px-6 col-8"},"Download Pikonek")))))))))))}}]),t}(s.Component);t.default=j},886:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},887:function(e,t,n){"use strict";n.d(t,"k",function(){return i}),n.d(t,"f",function(){return c}),n.d(t,"d",function(){return s}),n.d(t,"h",function(){return l}),n.d(t,"i",function(){return u}),n.d(t,"j",function(){return f}),n.d(t,"m",function(){return p}),n.d(t,"l",function(){return b}),n.d(t,"b",function(){return h}),n.d(t,"a",function(){return v}),n.d(t,"g",function(){return g}),n.d(t,"c",function(){return y}),n.d(t,"e",function(){return O});n(960);var a,o=n(112),r=n.n(o);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach(function(a){-1===t.indexOf(a)&&(n[a]=e[a])}),n}function f(e,t){for(var n,a=Array.isArray(t)?t:[t],o=a.length,r={};o>0;)r[n=a[o-=1]]=e[n];return r}var d={};function p(e){d[e]||("undefined"!==typeof console&&console.error(e),d[e]=!0)}var m="object"===typeof window&&window.Element||function(){};r.a.oneOfType([r.a.string,r.a.func,function(e,t,n){if(!(e[t]instanceof m))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},r.a.shape({current:r.a.any})]);var b=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],g={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},y=!("undefined"===typeof window||!window.document||!window.document.createElement);var O=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},890:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return b});var a=n(917),o=n(228),r=n(229),i=n(922),c=n.n(i),s=n(921),l=n.n(s),u=n(923),f=function(){function e(){Object(o.a)(this,e),this.parser=new u.UAParser}return Object(r.a)(e,[{key:"getDeviceName",value:function(){var e=this.parser.getDevice().vendor||"",t=this.parser.getDevice().model||"",n=this.parser.getDevice().type||"";return"".concat(e," ").concat(t," ").concat(n)}},{key:"getDeviceOS",value:function(){return this.parser.getOS().name+" "+this.parser.getOS().version}},{key:"getDeviceCPU",value:function(){return this.parser.getCPU()}},{key:"getDeviceEngine",value:function(){return this.parser.getEngine()}}]),e}(),d=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,null,[{key:"http",value:function(e){return new p(e)}},{key:"getDeviceDetails",value:function(){return new f}},{key:"handleResponse",value:function(e){return new Promise(function(t,n){[401,403].includes(e.status)||t(e),[401,403].includes(e.status)?window.location.reload():t(e),t(e)})}},{key:"renderDateFormat",value:function(e){return l()(e).format("MMMM D, YYYY h:mm A")}}]),e}(),p=function(){function e(t){Object(o.a)(this,e),this.options=t}return Object(r.a)(e,[{key:"GET",get:function(){var e=this.options,t=Object(a.a)({},e.headers);return new Promise(function(n,a){c.a.get(e.url,{headers:t}).then(function(e){n(e)}).catch(function(e){a(e)})})}},{key:"POST",get:function(){var e={method:"POST",url:this.options.url,data:this.options.data,headers:Object(a.a)({},this.options.headers)};return new Promise(function(t,n){c.a.request(e).then(function(e){t(e)}).catch(function(e){n(e)})})}},{key:"DELETE",get:function(){var e={method:"DELETE",url:this.options.url,data:this.options.data,headers:Object(a.a)({},this.options.headers)};return new Promise(function(t,n){c.a.request(e).then(function(e){t(e)}).catch(function(e){n(e)})})}},{key:"PUT",get:function(){var e={method:"PUT",url:this.options.url,data:this.options.data,headers:Object(a.a)({},this.options.headers)};return new Promise(function(t,n){c.a.request(e).then(function(e){t(e)}).catch(function(e){n(e)})})}}]),e}(),m=d,b=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,null,[{key:"isEmpty",value:function(t){return"object"===typeof t?e.isEmptyObject(t):!t||"undefined"===t||""==t||" "==t||null===t}},{key:"isEmptyObject",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"removeNullKey",value:function(e){var t=Object.assign({},e);for(var n in t)t.hasOwnProperty(n)&&this.isEmpty(t[n])&&delete t[n];return t}}]),e}()},893:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return a})},895:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a="http://".concat(window.location.hostname,"/"),o="ws://".concat(window.location.hostname,":5000/socket"),r={LOGIN_URL:a+"api/admin/authenticate",DEVICE_URL:a+"api/device",VOUCHER_URL:a+"api/voucher",ADMIN_URL:a+"api/admin",MACHINE_URL:a+"api/machine",ROUTER_URL:a+"api/router",LOG_URL:a+"api/logs",COINSLOT_URL:a+"api/coinslot",BANDWIDTH_URL:a+"api/bandwidth",SOFTWARE_URL:a+"api/software",BLOCKED_URL:a+"api/blocked",CAPTIVE_PORTAL_URL:a+"api/captive/portal",DHCP_CONFIG_URL:a+"api/dhcp/config",INTERFACE_URL:a+"api/network/interface",APK_URL:a+"api/download/apk",FIREWALL_URL:a+"api/firewall",WIRELESSAP_URL:a+"api/wireless",PACKAGE_URL:a+"api/package/management",APT_LOG:"http://".concat(window.location.hostname,":5000/api/apt/log"),CAPTIVE_PORTAL:"http://pi.konek:5001",WS_URL:o}},900:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},933:function(e,t,n){"use strict";var a=n(35),o=n(100),r=n(3),i=n.n(r),c=n(112),s=n.n(c),l=n(886),u=n.n(l),f=n(887),d={tag:f.l,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},p=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,c=e.tag,s=e.form,l=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(f.h)(u()(t,r?"no-gutters":null,s?"form-row":"row"),n);return i.a.createElement(c,Object(a.a)({},l,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},934:function(e,t,n){"use strict";var a=n(35),o=n(100),r=n(900),i=n.n(r),c=n(3),s=n.n(c),l=n(112),u=n.n(l),f=n(886),d=n.n(f),p=n(887),m=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:m,offset:m})]),h={tag:p.l,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,r=e.widths,c=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(t,a){var o=e[t];if(delete l[t],o||""===o){var r=!a;if(i()(o)){var c,s=r?"-":"-"+t+"-",f=g(r,t,o.size);u.push(Object(p.h)(d()(((c={})[f]=o.size||""===o.size,c["order"+s+o.order]=o.order||0===o.order,c["offset"+s+o.offset]=o.offset||0===o.offset,c)),n))}else{var m=g(r,t,o);u.push(m)}}}),u.length||u.push("col");var f=Object(p.h)(d()(t,u),n);return s.a.createElement(c,Object(a.a)({},l,{className:f}))};y.propTypes=h,y.defaultProps=v,t.a=y},936:function(e,t,n){"use strict";var a=n(35),o=n(100),r=n(893),i=n(63),c=n(3),s=n.n(c),l=n(112),u=n.n(l),f=n(886),d=n.n(f),p=n(887),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,i=e.className,c=e.close,l=e.cssModule,u=e.color,f=e.outline,m=e.size,b=e.tag,h=e.innerRef,v=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof v.children&&(v.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(f?"-outline":"")+"-"+u,y=Object(p.h)(d()(i,{close:c},c||"btn",c||g,!!m&&"btn-"+m,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);v.href&&"button"===b&&(b="a");var O=c?"Close":null;return s.a.createElement(b,Object(a.a)({type:"button"===b&&v.onClick?"button":void 0},v,{className:y,ref:h,onClick:this.onClick,"aria-label":n||O}))},t}(s.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},938:function(e,t,n){"use strict";var a=n(35),o=n(100),r=n(3),i=n.n(r),c=n(112),s=n.n(c),l=n(886),u=n.n(l),f=n(887),d={tag:f.l,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,n=e.cssModule,r=e.color,c=e.body,s=e.inverse,l=e.outline,d=e.tag,p=e.innerRef,m=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(f.h)(u()(t,"card",!!s&&"text-white",!!c&&"card-body",!!r&&(l?"border":"bg")+"-"+r),n);return i.a.createElement(d,Object(a.a)({},m,{className:b,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},939:function(e,t,n){"use strict";var a=n(35),o=n(100),r=n(3),i=n.n(r),c=n(112),s=n.n(c),l=n(886),u=n.n(l),f=n(887),d={tag:f.l,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var t=e.className,n=e.cssModule,r=e.innerRef,c=e.tag,s=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(f.h)(u()(t,"card-body"),n);return i.a.createElement(c,Object(a.a)({},s,{className:l,ref:r}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},960:function(e,t,n){(function(t){var n="[object AsyncFunction]",a="[object Function]",o="[object GeneratorFunction]",r="[object Null]",i="[object Proxy]",c="[object Undefined]",s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=s||l||Function("return this")(),f=Object.prototype,d=f.hasOwnProperty,p=f.toString,m=u.Symbol,b=m?m.toStringTag:void 0;function h(e){return null==e?void 0===e?c:r:b&&b in Object(e)?function(e){var t=d.call(e,b),n=e[b];try{e[b]=void 0;var a=!0}catch(r){}var o=p.call(e);a&&(t?e[b]=n:delete e[b]);return o}(e):function(e){return p.call(e)}(e)}e.exports=function(e){if(!function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}(e))return!1;var t=h(e);return t==a||t==o||t==n||t==i}}).call(this,n(113))},983:function(e,t,n){"use strict";var a=n(35),o=n(100),r=n(3),i=n.n(r),c=n(112),s=n.n(c),l=n(886),u=n.n(l),f=n(887),d={tag:f.l,fluid:s.a.bool,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.fluid,c=e.tag,s=Object(o.a)(e,["className","cssModule","fluid","tag"]),l=Object(f.h)(u()(t,r?"container-fluid":"container"),n);return i.a.createElement(c,Object(a.a)({},s,{className:l}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},985:function(e,t,n){"use strict";var a=n(35),o=n(100),r=n(893),i=n(63),c=n(3),s=n.n(c),l=n(112),u=n.n(l),f=n(886),d=n.n(f),p=n(887),m={children:u.a.node,inline:u.a.bool,tag:p.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.submit=n.submit.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.inline,i=e.tag,c=e.innerRef,l=Object(o.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.h)(d()(t,!!r&&"form-inline"),n);return s.a.createElement(i,Object(a.a)({},l,{ref:c,className:u}))},t}(c.Component);b.propTypes=m,b.defaultProps={tag:"form"},t.a=b}}]);