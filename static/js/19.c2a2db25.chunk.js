(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1081:function(e,t,a){"use strict";a.r(t);var n=a(235),o=a(228),r=a(229),i=a(231),c=a(230),s=a(236),l=a(232),u=a(3),p=a.n(u),f=a(919),d=a(920),h=a(924),m=a(925),v=(a(892),a(886)),b=a.n(v),g=(a(888),a(923)),O=a(921),y=a(922),E=a(971),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).loading=function(){return p.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.getServerLog=function(e){return[a.logService.getServerLog(e).then(function(e){a.setState({fetching:!0,logs:e})}).catch(function(e){console.error(e)})]},a.logService=new E.a,a.state={fetching:!1,logs:"",logName:a.props.logName},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getServerLog(this.state.logName)}},{key:"render",value:function(){var e=this.props,t=e.tabId;e.logName;return p.a.createElement(g.a,{tabId:t},p.a.createElement("div",{className:"animated fadeIn"},this.state.fetching?p.a.createElement(O.a,null,p.a.createElement(y.a,null,p.a.createElement("pre",null,this.state.logs))):p.a.createElement(O.a,null,p.a.createElement(y.a,null,p.a.createElement("h1",null,"Fetching data. Please wait...")))))}}]),t}(u.Component);a.d(t,"default",function(){return N});var N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).toggle=a.toggle.bind(Object(s.a)(a)),a.state={activeTab:"1",logs:["kernel","dnsmasq","server","wpa","system"]},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props;t.children,Object(n.a)(t,["children"]),this.state.logs;return p.a.createElement(p.a.Fragment,null,p.a.createElement(f.a,{tabs:!0},p.a.createElement(d.a,null,p.a.createElement(h.a,{className:b()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"\xa0 KERNEL")),p.a.createElement(d.a,null,p.a.createElement(h.a,{className:b()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"\xa0 DHCP")),p.a.createElement(d.a,null,p.a.createElement(h.a,{className:b()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"\xa0 PIKONEK")),p.a.createElement(d.a,null,p.a.createElement(h.a,{className:b()({active:"4"===this.state.activeTab}),onClick:function(){e.toggle("4")}},"\xa0 WIRELESS")),p.a.createElement(d.a,null,p.a.createElement(h.a,{className:b()({active:"5"===this.state.activeTab}),onClick:function(){e.toggle("5")}},"\xa0 SYSTEM"))),p.a.createElement(m.a,{activeTab:this.state.activeTab},p.a.createElement(j,{logName:"kernel",tabId:"1"}),p.a.createElement(j,{logName:"dnsmasq",tabId:"2"}),p.a.createElement(j,{logName:"server",tabId:"3"}),p.a.createElement(j,{logName:"wpa",tabId:"4"}),p.a.createElement(j,{logName:"system",tabId:"5"})))}}]),t}(u.Component)},889:function(e,t,a){"use strict";a.d(t,"a",function(){return h}),a.d(t,"b",function(){return m});var n=a(900),o=a(228),r=a(229),i=a(904),c=a.n(i),s=a(903),l=a.n(s),u=a(905),p=function(){function e(){Object(o.a)(this,e),this.parser=new u.UAParser}return Object(r.a)(e,[{key:"getDeviceName",value:function(){var e=this.parser.getDevice().vendor||"",t=this.parser.getDevice().model||"",a=this.parser.getDevice().type||"";return"".concat(e," ").concat(t," ").concat(a)}},{key:"getDeviceOS",value:function(){return this.parser.getOS().name+" "+this.parser.getOS().version}},{key:"getDeviceCPU",value:function(){return this.parser.getCPU()}},{key:"getDeviceEngine",value:function(){return this.parser.getEngine()}}]),e}(),f=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,null,[{key:"http",value:function(e){return new d(e)}},{key:"getDeviceDetails",value:function(){return new p}},{key:"handleResponse",value:function(e){return new Promise(function(t,a){[401,403].includes(e.status)||t(e),[401,403].includes(e.status)?window.location.reload():t(e),t(e)})}},{key:"renderDateFormat",value:function(e){return l()(e).format("MMMM D, YYYY h:mm A")}}]),e}(),d=function(){function e(t){Object(o.a)(this,e),this.options=t}return Object(r.a)(e,[{key:"GET",get:function(){var e=this.options,t=Object(n.a)({},e.headers);return new Promise(function(a,n){c.a.get(e.url,{headers:t}).then(function(e){a(e)}).catch(function(e){n(e)})})}},{key:"POST",get:function(){var e={method:"POST",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){c.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"DELETE",get:function(){var e={method:"DELETE",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){c.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}},{key:"PUT",get:function(){var e={method:"PUT",url:this.options.url,data:this.options.data,headers:Object(n.a)({},this.options.headers)};return new Promise(function(t,a){c.a.request(e).then(function(e){t(e)}).catch(function(e){a(e)})})}}]),e}(),h=f,m=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,null,[{key:"isEmpty",value:function(t){return"object"===typeof t?e.isEmptyObject(t):!t||"undefined"===t||""==t||" "==t||null===t}},{key:"isEmptyObject",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"removeNullKey",value:function(e){var t=Object.assign({},e);for(var a in t)t.hasOwnProperty(a)&&this.isEmpty(t[a])&&delete t[a];return t}}]),e}()},891:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n="http://".concat(window.location.hostname,"/"),o="ws://".concat(window.location.hostname,":5000/socket"),r={LOGIN_URL:n+"api/admin/authenticate",DEVICE_URL:n+"api/device",VOUCHER_URL:n+"api/voucher",ADMIN_URL:n+"api/admin",MACHINE_URL:n+"api/machine",ROUTER_URL:n+"api/router",LOG_URL:n+"api/logs",COINSLOT_URL:n+"api/coinslot",BANDWIDTH_URL:n+"api/bandwidth",SOFTWARE_URL:n+"api/software",BLOCKED_URL:n+"api/blocked",CAPTIVE_PORTAL_URL:n+"api/captive/portal",DHCP_CONFIG_URL:n+"api/dhcp/config",INTERFACE_URL:n+"api/network/interface",FIREWALL_URL:n+"api/firewall",WIRELESSAP_URL:n+"api/wireless",PACKAGE_URL:n+"api/package/management",APT_LOG:"http://".concat(window.location.hostname,":5000/api/apt/log"),CAPTIVE_PORTAL:"http://pi.konek:5001",WS_URL:o}},896:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(3),o=a.n(n).a.createContext({})},899:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},912:function(e,t,a){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!==a&&void 0!==a?a:null}.bind(this))}function r(e,t){try{var a=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,n)}finally{this.props=a,this.state=n}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var a=null,i=null,c=null;if("function"===typeof t.componentWillMount?a="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?c="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==a||null!==i||null!==c){var s=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==i?"\n  "+i:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=r;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;u.call(this,e,t,n)}}return e}a.r(t),a.d(t,"polyfill",function(){return i}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},919:function(e,t,a){"use strict";var n=a(35),o=a(100),r=a(3),i=a.n(r),c=a(112),s=a.n(c),l=a(886),u=a.n(l),p=a(887),f={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:p.l,className:s.a.string,cssModule:s.a.object},d=function(e){var t=e.className,a=e.cssModule,r=e.tabs,c=e.pills,s=e.vertical,l=e.horizontal,f=e.justified,d=e.fill,h=e.navbar,m=e.card,v=e.tag,b=Object(o.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(p.h)(u()(t,h?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":r,"card-header-tabs":m&&r,"nav-pills":c,"card-header-pills":m&&c,"nav-justified":f,"nav-fill":d}),a);return i.a.createElement(v,Object(n.a)({},b,{className:g}))};d.propTypes=f,d.defaultProps={tag:"ul",vertical:!1},t.a=d},920:function(e,t,a){"use strict";var n=a(35),o=a(100),r=a(3),i=a.n(r),c=a(112),s=a.n(c),l=a(886),u=a.n(l),p=a(887),f={tag:p.l,active:s.a.bool,className:s.a.string,cssModule:s.a.object},d=function(e){var t=e.className,a=e.cssModule,r=e.active,c=e.tag,s=Object(o.a)(e,["className","cssModule","active","tag"]),l=Object(p.h)(u()(t,"nav-item",!!r&&"active"),a);return i.a.createElement(c,Object(n.a)({},s,{className:l}))};d.propTypes=f,d.defaultProps={tag:"li"},t.a=d},921:function(e,t,a){"use strict";var n=a(35),o=a(100),r=a(3),i=a.n(r),c=a(112),s=a.n(c),l=a(886),u=a.n(l),p=a(887),f={tag:p.l,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool},d=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,c=e.tag,s=e.form,l=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(p.h)(u()(t,r?"no-gutters":null,s?"form-row":"row"),a);return i.a.createElement(c,Object(n.a)({},l,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},922:function(e,t,a){"use strict";var n=a(35),o=a(100),r=a(899),i=a.n(r),c=a(3),s=a.n(c),l=a(112),u=a.n(l),p=a(886),f=a.n(p),d=a(887),h=u.a.oneOfType([u.a.number,u.a.string]),m=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:h,offset:h})]),v={tag:d.l,xs:m,sm:m,md:m,lg:m,xl:m,className:u.a.string,cssModule:u.a.object,widths:u.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},O=function(e){var t=e.className,a=e.cssModule,r=e.widths,c=e.tag,l=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach(function(t,n){var o=e[t];if(delete l[t],o||""===o){var r=!n;if(i()(o)){var c,s=r?"-":"-"+t+"-",p=g(r,t,o.size);u.push(Object(d.h)(f()(((c={})[p]=o.size||""===o.size,c["order"+s+o.order]=o.order||0===o.order,c["offset"+s+o.offset]=o.offset||0===o.offset,c)),a))}else{var h=g(r,t,o);u.push(h)}}}),u.length||u.push("col");var p=Object(d.h)(f()(t,u),a);return s.a.createElement(c,Object(n.a)({},l,{className:p}))};O.propTypes=v,O.defaultProps=b,t.a=O},923:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(35),o=a(100),r=a(3),i=a.n(r),c=a(112),s=a.n(c),l=a(886),u=a.n(l),p=a(896),f=a(887),d={tag:f.l,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function h(e){var t=e.className,a=e.cssModule,r=e.tabId,c=e.tag,s=Object(o.a)(e,["className","cssModule","tabId","tag"]),l=function(e){return Object(f.h)(u()("tab-pane",t,{active:r===e}),a)};return i.a.createElement(p.a.Consumer,null,function(e){var t=e.activeTabId;return i.a.createElement(c,Object(n.a)({},s,{className:l(t)}))})}h.propTypes=d,h.defaultProps={tag:"div"}},924:function(e,t,a){"use strict";var n=a(35),o=a(100),r=a(893),i=a(63),c=a(3),s=a.n(c),l=a(112),u=a.n(l),p=a(886),f=a.n(p),d=a(887),h={tag:d.l,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.active,i=e.tag,c=e.innerRef,l=Object(o.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(d.h)(f()(t,"nav-link",{disabled:l.disabled,active:r}),a);return s.a.createElement(i,Object(n.a)({},l,{ref:c,onClick:this.onClick,className:u}))},t}(s.a.Component);m.propTypes=h,m.defaultProps={tag:"a"},t.a=m},925:function(e,t,a){"use strict";var n=a(35),o=a(63),r=a(3),i=a.n(r),c=a(912),s=a(112),l=a.n(s),u=a(886),p=a.n(u),f=a(896),d=a(887),h={tag:d.l,activeTab:l.a.any,className:l.a.string,cssModule:l.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(o.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.tag,r=Object(d.i)(this.props,Object.keys(h)),c=Object(d.h)(p()("tab-content",t),a);return i.a.createElement(f.a.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(o,Object(n.a)({},r,{className:c})))},t}(r.Component);Object(c.polyfill)(m),t.a=m,m.propTypes=h,m.defaultProps={tag:"div"}},971:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(228),o=a(229),r=a(891),i=a(233),c=a(889),s={Authorization:"Basic "+Object(i.a)().authHeader},l=function(){function e(){Object(n.a)(this,e)}return Object(o.a)(e,[{key:"getServerLog",value:function(e){return new Promise(function(t,a){c.a.http({url:r.a.LOG_URL+"/"+e,headers:s}).GET.then(function(e){t(e.data)}).catch(function(e){a(e)})})}}]),e}()}}]);