(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1028:function(e,i,r){"use strict";e.exports=function(e,i){return function(){for(var r=new Array(arguments.length),t=0;t<r.length;t++)r[t]=arguments[t];return e.apply(i,r)}}},1029:function(e,i,r){"use strict";var t=r(925);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,i,r){if(!i)return e;var n;if(r)n=r(i);else if(t.isURLSearchParams(i))n=i.toString();else{var s=[];t.forEach(i,function(e,i){null!==e&&"undefined"!==typeof e&&(t.isArray(e)?i+="[]":e=[e],t.forEach(e,function(e){t.isDate(e)?e=e.toISOString():t.isObject(e)&&(e=JSON.stringify(e)),s.push(o(i)+"="+o(e))}))}),n=s.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}},1030:function(e,i,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},1031:function(e,i,r){"use strict";(function(i){var t=r(925),o=r(1088),n={"Content-Type":"application/x-www-form-urlencoded"};function s(e,i){!t.isUndefined(e)&&t.isUndefined(e["Content-Type"])&&(e["Content-Type"]=i)}var a={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=r(1032):"undefined"!==typeof i&&"[object process]"===Object.prototype.toString.call(i)&&(e=r(1032)),e}(),transformRequest:[function(e,i){return o(i,"Accept"),o(i,"Content-Type"),t.isFormData(e)||t.isArrayBuffer(e)||t.isBuffer(e)||t.isStream(e)||t.isFile(e)||t.isBlob(e)?e:t.isArrayBufferView(e)?e.buffer:t.isURLSearchParams(e)?(s(i,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):t.isObject(e)?(s(i,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(i){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};t.forEach(["delete","get","head"],function(e){a.headers[e]={}}),t.forEach(["post","put","patch"],function(e){a.headers[e]=t.merge(n)}),e.exports=a}).call(this,r(348))},1032:function(e,i,r){"use strict";var t=r(925),o=r(1089),n=r(1029),s=r(1091),a=r(1094),u=r(1095),c=r(1033);e.exports=function(e){return new Promise(function(i,d){var f=e.data,l=e.headers;t.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(w+":"+h)}var m=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),n(m,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,t={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(i,d,t),p=null}},p.onabort=function(){p&&(d(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){d(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){var i="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(i=e.timeoutErrorMessage),d(c(i,e,"ECONNABORTED",p)),p=null},t.isStandardBrowserEnv()){var b=r(1096),g=(e.withCredentials||u(m))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&t.forEach(l,function(e,i){"undefined"===typeof f&&"content-type"===i.toLowerCase()?delete l[i]:p.setRequestHeader(i,e)}),t.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),d(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},1033:function(e,i,r){"use strict";var t=r(1090);e.exports=function(e,i,r,o,n){var s=new Error(e);return t(s,i,r,o,n)}},1034:function(e,i,r){"use strict";var t=r(925);e.exports=function(e,i){i=i||{};var r={},o=["url","method","params","data"],n=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];t.forEach(o,function(e){"undefined"!==typeof i[e]&&(r[e]=i[e])}),t.forEach(n,function(o){t.isObject(i[o])?r[o]=t.deepMerge(e[o],i[o]):"undefined"!==typeof i[o]?r[o]=i[o]:t.isObject(e[o])?r[o]=t.deepMerge(e[o]):"undefined"!==typeof e[o]&&(r[o]=e[o])}),t.forEach(s,function(t){"undefined"!==typeof i[t]?r[t]=i[t]:"undefined"!==typeof e[t]&&(r[t]=e[t])});var a=o.concat(n).concat(s),u=Object.keys(i).filter(function(e){return-1===a.indexOf(e)});return t.forEach(u,function(t){"undefined"!==typeof i[t]?r[t]=i[t]:"undefined"!==typeof e[t]&&(r[t]=e[t])}),r}},1035:function(e,i,r){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},1083:function(e,i,r){"use strict";var t=r(925),o=r(1028),n=r(1084),s=r(1034);function a(e){var i=new n(e),r=o(n.prototype.request,i);return t.extend(r,n.prototype,i),t.extend(r,i),r}var u=a(r(1031));u.Axios=n,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=r(1035),u.CancelToken=r(1097),u.isCancel=r(1030),u.all=function(e){return Promise.all(e)},u.spread=r(1098),e.exports=u,e.exports.default=u},1084:function(e,i,r){"use strict";var t=r(925),o=r(1029),n=r(1085),s=r(1086),a=r(1034);function u(e){this.defaults=e,this.interceptors={request:new n,response:new n}}u.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var i=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){i.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){i.push(e.fulfilled,e.rejected)});i.length;)r=r.then(i.shift(),i.shift());return r},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},t.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(i,r){return this.request(t.merge(r||{},{method:e,url:i}))}}),t.forEach(["post","put","patch"],function(e){u.prototype[e]=function(i,r,o){return this.request(t.merge(o||{},{method:e,url:i,data:r}))}}),e.exports=u},1085:function(e,i,r){"use strict";var t=r(925);function o(){this.handlers=[]}o.prototype.use=function(e,i){return this.handlers.push({fulfilled:e,rejected:i}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){t.forEach(this.handlers,function(i){null!==i&&e(i)})},e.exports=o},1086:function(e,i,r){"use strict";var t=r(925),o=r(1087),n=r(1030),s=r(1031);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=t.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),t.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]}),(e.adapter||s.adapter)(e).then(function(i){return a(e),i.data=o(i.data,i.headers,e.transformResponse),i},function(i){return n(i)||(a(e),i&&i.response&&(i.response.data=o(i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})}},1087:function(e,i,r){"use strict";var t=r(925);e.exports=function(e,i,r){return t.forEach(r,function(r){e=r(e,i)}),e}},1088:function(e,i,r){"use strict";var t=r(925);e.exports=function(e,i){t.forEach(e,function(r,t){t!==i&&t.toUpperCase()===i.toUpperCase()&&(e[i]=r,delete e[t])})}},1089:function(e,i,r){"use strict";var t=r(1033);e.exports=function(e,i,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):i(t("Request failed with status code "+r.status,r.config,null,r.request,r))}},1090:function(e,i,r){"use strict";e.exports=function(e,i,r,t,o){return e.config=i,r&&(e.code=r),e.request=t,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},1091:function(e,i,r){"use strict";var t=r(1092),o=r(1093);e.exports=function(e,i){return e&&!t(i)?o(e,i):i}},1092:function(e,i,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},1093:function(e,i,r){"use strict";e.exports=function(e,i){return i?e.replace(/\/+$/,"")+"/"+i.replace(/^\/+/,""):e}},1094:function(e,i,r){"use strict";var t=r(925),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var i,r,n,s={};return e?(t.forEach(e.split("\n"),function(e){if(n=e.indexOf(":"),i=t.trim(e.substr(0,n)).toLowerCase(),r=t.trim(e.substr(n+1)),i){if(s[i]&&o.indexOf(i)>=0)return;s[i]="set-cookie"===i?(s[i]?s[i]:[]).concat([r]):s[i]?s[i]+", "+r:r}}),s):s}},1095:function(e,i,r){"use strict";var t=r(925);e.exports=t.isStandardBrowserEnv()?function(){var e,i=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var t=e;return i&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(i){var r=t.isString(i)?o(i):i;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},1096:function(e,i,r){"use strict";var t=r(925);e.exports=t.isStandardBrowserEnv()?{write:function(e,i,r,o,n,s){var a=[];a.push(e+"="+encodeURIComponent(i)),t.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),t.isString(o)&&a.push("path="+o),t.isString(n)&&a.push("domain="+n),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var i=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1097:function(e,i,r){"use strict";var t=r(1035);function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(e){i=e});var r=this;e(function(e){r.reason||(r.reason=new t(e),i(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(i){e=i}),cancel:e}},e.exports=o},1098:function(e,i,r){"use strict";e.exports=function(e){return function(i){return e.apply(null,i)}}},925:function(e,i,r){"use strict";var t=r(1028),o=Object.prototype.toString;function n(e){return"[object Array]"===o.call(e)}function s(e){return"undefined"===typeof e}function a(e){return null!==e&&"object"===typeof e}function u(e){return"[object Function]"===o.call(e)}function c(e,i){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),n(e))for(var r=0,t=e.length;r<t;r++)i.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.call(null,e[o],o,e)}e.exports={isArray:n,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:a,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!==typeof window&&"undefined"!==typeof document},forEach:c,merge:function e(){var i={};function r(r,t){"object"===typeof i[t]&&"object"===typeof r?i[t]=e(i[t],r):i[t]=r}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],r);return i},deepMerge:function e(){var i={};function r(r,t){"object"===typeof i[t]&&"object"===typeof r?i[t]=e(i[t],r):i[t]="object"===typeof r?e({},r):r}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],r);return i},extend:function(e,i,r){return c(i,function(i,o){e[o]=r&&"function"===typeof i?t(i,r):i}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},944:function(e,i,r){e.exports=r(1083)},945:function(e,i,r){var t;!function(o,n){"use strict";var s="model",a="name",u="type",c="vendor",d="version",f="mobile",l="tablet",p="smarttv",w={extend:function(e,i){var r={};for(var t in e)i[t]&&i[t].length%2===0?r[t]=i[t].concat(e[t]):r[t]=e[t];return r},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},h={rgx:function(e,i){for(var r,t,o,n,s,a,u=0;u<i.length&&!s;){var c=i[u],d=i[u+1];for(r=t=0;r<c.length&&!s;)if(s=c[r++].exec(e))for(o=0;o<d.length;o++)a=s[++t],"object"===typeof(n=d[o])&&n.length>0?2==n.length?"function"==typeof n[1]?this[n[0]]=n[1].call(this,a):this[n[0]]=n[1]:3==n.length?"function"!==typeof n[1]||n[1].exec&&n[1].test?this[n[0]]=a?a.replace(n[1],n[2]):void 0:this[n[0]]=a?n[1].call(this,a,n[2]):void 0:4==n.length&&(this[n[0]]=a?n[3].call(this,a.replace(n[1],n[2])):void 0):this[n]=a||void 0;u+=2}},str:function(e,i){for(var r in i)if("object"===typeof i[r]&&i[r].length>0){for(var t=0;t<i[r].length;t++)if(w.has(i[r][t],e))return"?"===r?void 0:r}else if(w.has(i[r],e))return"?"===r?void 0:r;return e}},m={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},b={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,d],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],d],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,d],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],d],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],d],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],d],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],d],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],d],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],d],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],d],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],d],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],d],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],d],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],d],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],d],[/(qqbrowserlite)\/([\w\.]+)/i],[a,d],[/(QQ)\/([\d\.]+)/i],[a,d],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,d],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,d],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,d],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[d,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[d,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,d],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[d,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],d],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],d],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[d,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,d],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],d],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],d],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],d],[/fxios\/([\w\.-]+)/i],[d,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],d],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[d,h.str,m.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,d]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,c,[u,l]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[c,"Apple"],[u,l]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[c,"Apple"],[u,p]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,s,[u,l]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[c,"Amazon"],[u,l]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,h.str,m.device.amazon.model],[c,"Amazon"],[u,f]],[/android.+aft([bms])\sbuild/i],[s,[c,"Amazon"],[u,p]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,c,[u,f]],[/\((ip[honed|\s\w*]+);/i],[s,[c,"Apple"],[u,f]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,s,[u,f]],[/\(bb10;\s(\w+)/i],[s,[c,"BlackBerry"],[u,f]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[c,"Asus"],[u,l]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[s,"Xperia Tablet"],[u,l]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[c,"Sony"],[u,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,s,[u,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[c,"Nvidia"],[u,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[c,"Sony"],[u,"console"]],[/(sprint\s(\w+))/i],[[c,h.str,m.device.sprint.vendor],[s,h.str,m.device.sprint.model],[u,f]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[s,/_/g," "],[u,f]],[/(nexus\s9)/i],[s,[c,"HTC"],[u,l]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[s,[c,"Huawei"],[u,f]],[/android.+(bah2?-a?[lw]\d{2})/i],[s,[c,"Huawei"],[u,l]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,s,[u,f]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[c,"Microsoft"],[u,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[c,"Microsoft"],[u,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[c,"Motorola"],[u,f]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[c,"Motorola"],[u,l]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,w.trim],[s,w.trim],[u,p]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[c,"Samsung"],[u,p]],[/\(dtv[\);].+(aquos)/i],[s,[c,"Sharp"],[u,p]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],s,[u,l]],[/smart-tv.+(samsung)/i],[c,[u,p],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[c,"Samsung"],s,[u,f]],[/sie-(\w*)/i],[s,[c,"Siemens"],[u,f]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[c,"Nokia"],s,[u,f]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[c,"Acer"],[u,l]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[c,"LG"],[u,l]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],s,[u,l]],[/(lg) netcast\.tv/i],[c,s,[u,p]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[c,"LG"],[u,f]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[c,s,[u,l]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[c,"Lenovo"],[u,l]],[/(lenovo)[_\s-]?([\w-]+)/i],[c,s,[u,f]],[/linux;.+((jolla));/i],[c,s,[u,f]],[/((pebble))app\/[\d\.]+\s/i],[c,s,[u,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,s,[u,f]],[/crkey/i],[[s,"Chromecast"],[c,"Google"],[u,p]],[/android.+;\s(glass)\s\d/i],[s,[c,"Google"],[u,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[c,"Google"],[u,l]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[s,[c,"Google"],[u,f]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[u,f]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[u,l]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[c,"Meizu"],[u,f]],[/(mz)-([\w-]{2,})/i],[[c,"Meizu"],s,[u,f]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[s,[c,"OnePlus"],[u,f]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[c,"RCA"],[u,l]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[c,"Dell"],[u,l]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[c,"Verizon"],[u,l]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],s,[u,l]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[c,"NuVision"],[u,l]],[/android.+;\s(k88)\sbuild/i],[s,[c,"ZTE"],[u,l]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[c,"Swiss"],[u,f]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[c,"Swiss"],[u,l]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[c,"Zeki"],[u,l]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[c,"Dragon Touch"],s,[u,l]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[c,"Insignia"],[u,l]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[c,"NextBook"],[u,l]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],s,[u,f]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[c,"LvTel"],s,[u,f]],[/android.+;\s(PH-1)\s/i],[s,[c,"Essential"],[u,f]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[c,"Envizen"],[u,l]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[c,s,[u,l]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[c,"MachSpeed"],[u,l]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,s,[u,l]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[c,"Rotor"],[u,l]],[/android.+(KS(.+))\s+build/i],[s,[c,"Amazon"],[u,l]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[c,s,[u,l]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[u,w.lowerize],c,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[u,p]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[c,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,d],[/rv\:([\w\.]{1,9}).+(gecko)/i],[d,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[d,h.str,m.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[d,h.str,m.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],d],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],d],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],d],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,d],[/(haiku)\s(\w+)/i],[a,d],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[d,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,d]]},g=function e(i,r){if("object"===typeof i&&(r=i,i=void 0),!(this instanceof e))return new e(i,r).getResult();var t=i||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),n=r?w.extend(b,r):b;return this.getBrowser=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,t,n.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return h.rgx.call(e,t,n.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return h.rgx.call(e,t,n.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,t,n.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,t,n.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this};g.VERSION="0.7.21",g.BROWSER={NAME:a,MAJOR:"major",VERSION:d},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:s,VENDOR:c,TYPE:u,CONSOLE:"console",MOBILE:f,SMARTTV:p,TABLET:l,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:a,VERSION:d},g.OS={NAME:a,VERSION:d},"undefined"!==typeof i?("undefined"!==typeof e&&e.exports&&(i=e.exports=g),i.UAParser=g):void 0===(t=function(){return g}.call(i,r,i,e))||(e.exports=t);var v=o&&(o.jQuery||o.Zepto);if(v&&!v.ua){var y=new g;v.ua=y.getResult(),v.ua.get=function(){return y.getUA()},v.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var r in i)v.ua[r]=i[r]}}}("object"===typeof window?window:this)},948:function(e,i,r){"use strict";function t(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function o(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(i){t(e,i,r[i])})}return e}r.d(i,"a",function(){return o})}}]);