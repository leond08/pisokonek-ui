(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1066:function(e,t,a){"use strict";a.r(t);var n=a(228),s=a(229),o=a(231),c=a(230),r=a(232),l=a(3),u=a.n(l),i=a(921),m=a(922),f=a(910),d=a(911),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).loading=function(){return u.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.state={},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(i.a,null,u.a.createElement(m.a,null,u.a.createElement(f.a,null,u.a.createElement(d.a,null,u.a.createElement("div",{class:"col-lg"},u.a.createElement("table",{class:"table text-center responsive"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{scope:"col"},"Name"),u.a.createElement("th",{scope:"col"},"Status"),u.a.createElement("th",{scope:"col"},"Action"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"DHCP"),u.a.createElement("td",null,"Active"),u.a.createElement("td",null,u.a.createElement("button",{type:"button",className:"btn btn-success"},u.a.createElement("i",{className:"fa fa-refresh"}))," ",u.a.createElement("button",{type:"button","data-toggle":"tooltip","data-placement":"top",title:"Tooltip on top",className:"btn btn-danger"},u.a.createElement("i",{className:"fa fa-ban"}))))))))))))}}]),t}(l.Component);t.default=b},899:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},910:function(e,t,a){"use strict";var n=a(35),s=a(100),o=a(3),c=a.n(o),r=a(112),l=a.n(r),u=a(886),i=a.n(u),m=a(887),f={tag:m.l,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,a=e.cssModule,o=e.color,r=e.body,l=e.inverse,u=e.outline,f=e.tag,d=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.h)(i()(t,"card",!!l&&"text-white",!!r&&"card-body",!!o&&(u?"border":"bg")+"-"+o),a);return c.a.createElement(f,Object(n.a)({},b,{className:p,ref:d}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},911:function(e,t,a){"use strict";var n=a(35),s=a(100),o=a(3),c=a.n(o),r=a(112),l=a.n(r),u=a(886),i=a.n(u),m=a(887),f={tag:m.l,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,r=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),u=Object(m.h)(i()(t,"card-body"),a);return c.a.createElement(r,Object(n.a)({},l,{className:u,ref:o}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},921:function(e,t,a){"use strict";var n=a(35),s=a(100),o=a(3),c=a.n(o),r=a(112),l=a.n(r),u=a(886),i=a.n(u),m=a(887),f={tag:m.l,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},d=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,r=e.tag,l=e.form,u=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(m.h)(i()(t,o?"no-gutters":null,l?"form-row":"row"),a);return c.a.createElement(r,Object(n.a)({},u,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},922:function(e,t,a){"use strict";var n=a(35),s=a(100),o=a(899),c=a.n(o),r=a(3),l=a.n(r),u=a(112),i=a.n(u),m=a(886),f=a.n(m),d=a(887),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),g={tag:d.l,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.widths,r=e.tag,u=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach(function(t,n){var s=e[t];if(delete u[t],s||""===s){var o=!n;if(c()(s)){var r,l=o?"-":"-"+t+"-",m=E(o,t,s.size);i.push(Object(d.h)(f()(((r={})[m]=s.size||""===s.size,r["order"+l+s.order]=s.order||0===s.order,r["offset"+l+s.offset]=s.offset||0===s.offset,r)),a))}else{var b=E(o,t,s);i.push(b)}}}),i.length||i.push("col");var m=Object(d.h)(f()(t,i),a);return l.a.createElement(r,Object(n.a)({},u,{className:m}))};h.propTypes=g,h.defaultProps=v,t.a=h}}]);