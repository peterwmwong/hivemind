var requirejs,require,define;(function(){function la(){var a,b,c;if(C&&C.readyState==="interactive")return C;a=document.getElementsByTagName("script");for(b=a.length-1;b>-1&&(c=a[b]);b--)if(c.readyState==="interactive")return C=c;return null}function ga(a){function b(a){a.prefix&&a.name&&a.name.indexOf("__$p")===0&&x[a.prefix]&&(a=p(a.originalName,a.parentMap));var b=a.prefix,e=a.fullName,f=r.urlFetched;!v[e]&&!y[e]&&(v[e]=!0,b?x[b]?c(b,a):(F[b]||(F[b]=[],(D[b]||(D[b]=[])).push({onDep:function(a){if(a===b){for(var d,e=F[b],a=0;a<e.length;a++)d=e[a],c(b,p(d.originalName,d.parentMap));delete F[b]}}})),F[b].push(a)):f[a.url]||(d.load(r,e,a.url),f[a.url]=!0))}function c(a,b){var c=b.name,e=b.fullName,f;e in x||e in y||(E[a]||(E[a]=x[a]),y[e]||(y[e]=!1),f=function(f){d.onPluginLoad&&d.onPluginLoad(r,a,c,f),j({prefix:b.prefix,name:b.name,fullName:b.fullName,callback:function(){return f}}),y[e]=!0},f.fromText=function(a,b){var c=N;r.loaded[a]=!1,r.scriptCount+=1,c&&(N=!1),d.exec(b),c&&(N=!0),r.completeLoad(a)},E[a].load(c,l(b.parentMap,!0),f,t))}function e(){var a=t.waitSeconds*1e3,b=a&&r.startTime+a<(new Date).getTime(),a="",c=!1,g=!1,h;if(!(r.pausedCount>0)){if(t.priorityWait)if(o())s();else return;for(h in y)if(!(h in J)&&(c=!0,!y[h]))if(b)a+=h+" ";else{g=!0;break}if(c||r.waitCount){if(b&&a)return h=R("timeout","Load timeout for modules: "+a),h.requireType="timeout",h.requireModules=a,d.onError(h);if(g||r.scriptCount)(B||ca)&&!X&&(X=setTimeout(function(){X=0,e()},50));else{if(r.waitCount){for(H=0;a=A[H];H++)f(a,{});Y<5&&(Y+=1,e())}Y=0,d.checkReadyState()}}}}function f(a,b){if(!a.isDone){var c=a.fullName,d=a.depArray,e,g;if(c){if(b[c])return x[c];b[c]=!0}for(g=0;g<d.length;g++)(e=d[g])&&!a.deps[e]&&z[e]&&a.onDep(e,f(z[e],b));return c?x[c]:void 0}}function g(a){h.apply(null,a),y[a[0]]=!0}function h(a,b,c,d){var a=p(a,d),e=a.name,f=a.fullName,g={},h={waitId:e||ja+C++,depCount:0,depMax:0,prefix:a.prefix,name:e,fullName:f,deps:{},depArray:b,callback:c,onDep:function(a,b){a in h.deps||(h.deps[a]=b,h.depCount+=1,h.depCount===h.depMax&&j(h))}},i,m;if(f){if(f in x||y[f]===!0||f==="jquery"&&t.jQuery&&t.jQuery!==c().fn.jquery)return;v[f]=!0,y[f]=!0,f==="jquery"&&c&&T(c())}for(c=0;c<b.length;c++)if(i=b[c])i=p(i,e?a:d),m=i.fullName,b[c]=m,m==="require"?h.deps[m]=l(a):m==="exports"?(h.deps[m]=x[f]={},h.usingExports=!0):m==="module"?(h.cjsModule=i=h.deps[m]={id:e,uri:e?r.nameToUrl(e,null,d):void 0,exports:x[f]},i.setExports=n(i)):m in x&&!(m in z)?h.deps[m]=x[m]:g[m]||(h.depMax+=1,k(i),(D[m]||(D[m]=[])).push(h),g[m]=!0);h.depCount===h.depMax?j(h):(z[h.waitId]=h,A.push(h),r.waitCount+=1)}function j(a){var b,c,e;b=a.callback;var f=a.fullName,g=[],h=a.depArray;if(b&&M(b)){if(h)for(b=0;b<h.length;b++)g.push(a.deps[h[b]]);if(t.catchError.define)try{c=d.execCb(f,a.callback,g,x[f])}catch(i){e=i}else c=d.execCb(f,a.callback,g,x[f]);f&&(a.cjsModule&&a.cjsModule.exports!==void 0?c=x[f]=a.cjsModule.exports:c===void 0&&a.usingExports?c=x[f]:x[f]=c)}else f&&(c=x[f]=b);z[a.waitId]&&(delete z[a.waitId],a.isDone=!0,r.waitCount-=1,r.waitCount===0&&(A=[]));if(e)return c=(f?p(f).url:"")||e.fileName||e.sourceURL,e=R("defineerror",'Error evaluating module "'+f+'" at location "'+c+'":\n'+e+"\nfileName:"+c+"\nlineNumber: "+(e.lineNumber||e.line),e),e.moduleName=f,d.onError(e);if(f&&(e=D[f])){for(b=0;b<e.length;b++)e[b].onDep(f,c);delete D[f]}}function k(a){var b=a.prefix,c=a.fullName;v[c]||c in x||(b&&!E[b]&&(E[b]=void 0,(I[b]||(I[b]=[])).push(a),(D[b]||(D[b]=[])).push({onDep:function(a){if(a===b){var c,d,e,f,g,h,i=I[b];if(i)for(e=0;c=i[e];e++)if(a=c.fullName,c=p(c.originalName,c.parentMap),c=c.fullName,d=D[a]||[],f=D[c],c!==a){a in v&&(delete v[a],v[c]=!0),D[c]=f?f.concat(d):d,delete D[a];for(f=0;f<d.length;f++){h=d[f].depArray;for(g=0;g<h.length;g++)h[g]===a&&(h[g]=c)}}delete I[b]}}}),k(p(b))),r.paused.push(a))}function l(a,b){var c=m(r.require,a,b);return V(c,{nameToUrl:m(r.nameToUrl,a),toUrl:m(r.toUrl,a),defined:m(r.requireDefined,a),specified:m(r.requireSpecified,a),ready:d.ready,isBrowser:d.isBrowser}),d.paths&&(c.paths=d.paths),c}function m(a,b,c){return function(){var d=[].concat(ia.call(arguments,0)),e;return c&&M(e=d[d.length-1])&&(e.__requireJsBuild=!0),d.push(b),a.apply(null,d)}}function n(a){return function(b){a.exports=b}}function o(){var a=!0,b=t.priorityWait,c,d;if(b){for(d=0;c=b[d];d++)if(!y[c]){a=!1;break}a&&delete t.priorityWait}return a}function p(a,b){var c=a?a.indexOf("!"):-1,e=null,f=b?b.name:null,g=a,h,i;return c!==-1&&(e=a.substring(0,c),a=a.substring(c+1,a.length)),e&&(e=q(e,f)),a&&(h=e?(c=x[e])?c.normalize?c.normalize(a,function(a){return q(a,f)}):q(a,f):"__$p"+f+"@"+(a||""):q(a,f),i=w[h],i||(i=d.toModuleUrl?d.toModuleUrl(r,h,b):r.nameToUrl(h,null,b),w[h]=i)),{prefix:e,name:h,parentMap:b,url:i,originalName:g,fullName:e?e+"!"+(h||""):h}}function q(a,b){var c,d;if(a&&a.charAt(0)==="."&&b){t.pkgs[b]?b=[b]:(b=b.split("/"),b=b.slice(0,b.length-1)),c=a=b.concat(a.split("/"));var e;for(d=0;e=c[d];d++)if(e===".")c.splice(d,1),d-=1;else if(e==="..")if(d!==1||c[2]!==".."&&c[0]!=="..")d>0&&(c.splice(d-1,2),d-=2);else break;d=t.pkgs[c=a[0]],a=a.join("/"),d&&a===c+"/"+d.main&&(a=c)}return a}var r,s,t={waitSeconds:7,baseUrl:i.baseUrl||"./",paths:{},pkgs:{},catchError:{}},u=[],v={require:!0,exports:!0,module:!0},w={},x={},y={},z={},A=[],C=0,D={},E={},F={},G=0,I={};return T=function(a){!r.jQuery&&(a=a||(typeof jQuery!="undefined"?jQuery:null))&&(!t.jQuery||a.fn.jquery===t.jQuery)&&("holdReady"in a||"readyWait"in a)&&(r.jQuery=a,g(["jquery",[],function(){return jQuery}]),r.scriptCount)&&(W(a,!0),r.jQueryIncremented=!0)},s=function(){var a,c,f;G+=1,r.scriptCount<=0&&(r.scriptCount=0);for(;u.length;){if(a=u.shift(),a[0]===null)return d.onError(R("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));g(a)}if(!t.priorityWait||o())for(;r.paused.length;){f=r.paused,r.pausedCount+=f.length,r.paused=[];for(c=0;a=f[c];c++)b(a);r.startTime=(new Date).getTime(),r.pausedCount-=f.length}G===1&&e(),G-=1},r={contextName:a,config:t,defQueue:u,waiting:z,waitCount:0,specified:v,loaded:y,urlMap:w,scriptCount:0,urlFetched:{},defined:x,paused:[],pausedCount:0,plugins:E,managerCallbacks:D,makeModuleMap:p,normalize:q,configure:function(a){var b,c,e;a.baseUrl&&a.baseUrl.charAt(a.baseUrl.length-1)!=="/"&&(a.baseUrl+="/"),b=t.paths,e=t.pkgs,V(t,a,!0);if(a.paths){for(c in a.paths)c in J||(b[c]=a.paths[c]);t.paths=b}if((b=a.packagePaths)||a.packages){if(b)for(c in b)c in J||aa(e,b[c],c);a.packages&&aa(e,a.packages),t.pkgs=e}a.priority&&(c=r.requireWait,r.requireWait=!1,r.takeGlobalQueue(),s(),r.require(a.priority),s(),r.requireWait=c,t.priorityWait=a.priority),(a.deps||a.callback)&&r.require(a.deps||[],a.callback),a.ready&&d.ready(a.ready)},requireDefined:function(a,b){return p(a,b).fullName in x},requireSpecified:function(a,b){return p(a,b).fullName in v},require:function(b,c,e){if(typeof b=="string")return d.get?d.get(r,b,c):(c=p(b,c),b=c.fullName,b in x?x[b]:d.onError(R("notloaded","Module name '"+c.fullName+"' has not been loaded yet for context: "+a)));h(null,b,c,e);if(!r.requireWait)for(;!r.scriptCount&&r.paused.length;)r.takeGlobalQueue(),s();return r.require},takeGlobalQueue:function(){U.length&&(ka.apply(r.defQueue,[r.defQueue.length-1,0].concat(U)),U=[])},completeLoad:function(a){var b;for(r.takeGlobalQueue();u.length;){if(b=u.shift(),b[0]===null){b[0]=a;break}if(b[0]===a)break;g(b),b=null}b?g(b):g([a,[],a==="jquery"&&typeof jQuery!="undefined"?function(){return jQuery}:null]),y[a]=!0,T(),d.isAsync&&(r.scriptCount-=1),s(),d.isAsync||(r.scriptCount-=1)},toUrl:function(a,b){var c=a.lastIndexOf("."),d=null;return c!==-1&&(d=a.substring(c,a.length),a=a.substring(0,c)),r.nameToUrl(a,d,b)},nameToUrl:function(a,b,c){var e,f,g,h,i=r.config,a=q(a,c&&c.fullName);if(d.jsExtRegExp.test(a))b=a+(b?b:"");else{e=i.paths,f=i.pkgs,c=a.split("/");for(h=c.length;h>0;h--){if(g=c.slice(0,h).join("/"),e[g]){c.splice(0,h,e[g]);break}if(g=f[g]){a=a===g.name?g.location+"/"+g.main:g.location,c.splice(0,h,a);break}}b=c.join("/")+(b||".js"),b=(b.charAt(0)==="/"||b.match(/^\w+:/)?"":i.baseUrl)+b}return i.urlArgs?b+((b.indexOf("?")===-1?"?":"&")+i.urlArgs):b}},r.jQueryCheck=T,r.resume=s,r}function W(a,b){a.holdReady?a.holdReady(b):b?a.readyWait+=1:a.ready(!0)}function aa(a,b,c){var d,e,f;for(d=0;f=b[d];d++)f=typeof f=="string"?{name:f}:f,e=f.location,c&&(!e||e.indexOf("/")!==0&&e.indexOf(":")===-1)&&(e=c+"/"+(e||f.name)),a[f.name]={name:f.name,location:e||f.name,main:(f.main||"main").replace(fa,"").replace(ba,"")}}function R(a,b,c){return a=Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a),c&&(a.originalError=c),a}function V(a,b,c){for(var e in b)!(e in J)&&(!(e in a)||c)&&(a[e]=b[e]);return d}function E(a){return $.call(a)==="[object Array]"}function M(a){return $.call(a)==="[object Function]"}var ma=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,na=/require\(\s*["']([^'"\s]+)["']\s*\)/g,fa=/^\.\//,ba=/\.js$/,$=Object.prototype.toString,q=Array.prototype,ia=q.slice,ka=q.splice,B=typeof window!="undefined"&&!!navigator&&!!document,ca=!B&&typeof importScripts!="undefined",oa=B&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,da=typeof opera!="undefined"&&opera.toString()==="[object Opera]",ja="_r@@",J={},z={},U=[],C=null,Y=0,N=!1,d,q={},I,i,u,L,v,A,D,H,Q,ea,w,T,X;if(typeof define=="undefined"){if(typeof requirejs!="undefined"){if(M(requirejs))return;q=requirejs,requirejs=void 0}typeof require!="undefined"&&!M(require)&&(q=require,require=void 0),d=requirejs=function(a,b,c){var d="_",e;return!E(a)&&typeof a!="string"&&(e=a,E(b)?(a=b,b=c):a=[]),e&&e.context&&(d=e.context),c=z[d]||(z[d]=ga(d)),e&&c.configure(e),c.require(a,b)},d.config=function(a){return d(a)},typeof require=="undefined"&&(require=d),d.toUrl=function(a){return z._.toUrl(a)},d.version="0.26.0",d.isArray=E,d.isFunction=M,d.mixin=V,d.jsExtRegExp=/^\/|:|\?|\.js$/,i=d.s={contexts:z,skipAsync:{},isPageLoaded:!B,readyCalls:[]};if(d.isAsync=d.isBrowser=B)if(u=i.head=document.getElementsByTagName("head")[0],L=document.getElementsByTagName("base")[0])u=i.head=L.parentNode;d.onError=function(a){throw a},d.load=function(a,b,c){var e=a.loaded;e[b]||(e[b]=!1),a.scriptCount+=1,d.attach(c,a,b),a.jQuery&&!a.jQueryIncremented&&(W(a.jQuery,!0),a.jQueryIncremented=!0)},define=d.def=function(a,b,c){var e,f;typeof a!="string"&&(c=b,b=a,a=null),d.isArray(b)||(c=b,b=[]),!a&&!b.length&&d.isFunction(c)&&c.length&&(c.toString().replace(ma,"").replace(na,function(a,c){b.push(c)}),b=(c.length===1?["require"]:["require","exports","module"]).concat(b)),N&&(e=I||la())&&(a||(a=e.getAttribute("data-requiremodule")),f=z[e.getAttribute("data-requirecontext")]),(f?f.defQueue:U).push([a,b,c])},define.amd={multiversion:!0,plugins:!0,jQuery:!0},d.exec=function(a){return eval(a)},d.execCb=function(a,b,c,d){return b.apply(d,c)},d.onScriptLoad=function(a){var b=a.currentTarget||a.srcElement,c;if(a.type==="load"||oa.test(b.readyState))C=null,a=b.getAttribute("data-requirecontext"),c=b.getAttribute("data-requiremodule"),z[a].completeLoad(c),b.detachEvent&&!da?b.detachEvent("onreadystatechange",d.onScriptLoad):b.removeEventListener("load",d.onScriptLoad,!1)},d.attach=function(a,b,c,e,f){var g;return B?(e=e||d.onScriptLoad,g=b&&b.config&&b.config.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),g.type=f||"text/javascript",g.charset="utf-8",g.async=!i.skipAsync[a],b&&g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!da?(N=!0,g.attachEvent("onreadystatechange",e)):g.addEventListener("load",e,!1),g.src=a,I=g,L?u.insertBefore(g,L):u.appendChild(g),I=null,g):(ca&&(e=b.loaded,e[c]=!1,importScripts(a),b.completeLoad(c)),null)};if(B){v=document.getElementsByTagName("script");for(H=v.length-1;H>-1&&(A=v[H]);H--){u||(u=A.parentNode);if(D=A.getAttribute("data-main")){q.baseUrl||(v=D.split("/"),A=v.pop(),v=v.length?v.join("/")+"/":"./",q.baseUrl=v,D=A.replace(ba,"")),q.deps=q.deps?q.deps.concat(D):[D];break}}}i.baseUrl=q.baseUrl,d.pageLoaded=function(){i.isPageLoaded||(i.isPageLoaded=!0,Q&&clearInterval(Q),ea&&(document.readyState="complete"),d.callReady())},d.checkReadyState=function(){var a=i.contexts,b;for(b in a)if(!(b in J)&&a[b].waitCount)return;i.isDone=!0,d.callReady()},d.callReady=function(){var a=i.readyCalls,b,c,d;if(i.isPageLoaded&&i.isDone){if(a.length){i.readyCalls=[];for(b=0;c=a[b];b++)c()}a=i.contexts;for(d in a)!(d in J)&&(b=a[d],b.jQueryIncremented)&&(W(b.jQuery,!1),b.jQueryIncremented=!1)}},d.ready=function(a){return i.isPageLoaded&&i.isDone?a():i.readyCalls.push(a),d};if(B){if(document.addEventListener){if(document.addEventListener("DOMContentLoaded",d.pageLoaded,!1),window.addEventListener("load",d.pageLoaded,!1),!document.readyState)ea=!0,document.readyState="loading"}else window.attachEvent&&(window.attachEvent("onload",d.pageLoaded),self===self.top&&(Q=setInterval(function(){try{document.body&&(document.documentElement.doScroll("left"),d.pageLoaded())}catch(a){}},30)));document.readyState==="complete"&&d.pageLoaded()}d(q),d.isAsync&&typeof setTimeout!="undefined"&&(w=i.contexts[q.context||"_"],w.requireWait=!0,setTimeout(function(){w.requireWait=!1,w.takeGlobalQueue(),w.jQueryCheck(),w.scriptCount||w.resume(),d.checkReadyState()},0))}})(),define("requireLib",function(){}),function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=Array.prototype.slice;a=typeof (typeof console!="undefined"&&console!==null?console.error:void 0)=="function"&&function(a){return console.error(a)}||function(){},f=this,c=f.document||{createElement:function(){}},l=typeof Node=="object"?function(a){return a instanceof Node}:function(a){return typeof a=="object"&&typeof a.nodeType=="number"&&typeof a.nodeName=="string"},q=Array.prototype.slice,g=(e=Function.prototype.bind)?function(a,b){return e.apply(a,[b].concat(q.call(arguments,2)))}:function(a,b){var c;return c=q.call(arguments,2),function(){return a.apply(b,c.concat(q.call(arguments)))}},j=function(a,b){var c;for(c in b)a[c]=b[c];return a},h=function(){},k=function(a,b){var c;return c=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return a.apply(this,arguments)},j(c,a),h.prototype=a.prototype,c.prototype=new h,j(c.prototype,b),c.prototype.constructor=c,c.__super__=a.prototype,c},s=c.createElement("div"),n=function(b,d){var e,f;while(d.length>0)(e=d.shift())!=null&&(l(e)?b.appendChild(e):(f=typeof e)==="string"||f==="number"?b.appendChild(c.createTextNode(e)):e instanceof Array?Array.prototype.unshift.apply(d,e):a("renderNodes: unsupported child type = "+e));return b},p=/^(\w+)?(#([\w\-]+))*(\.[\w\.\-]+)?$/,r=/^<[A-z]/,i=/^([A-z]+)(\s(.*))?$/,o=function(b,d){var e,f,g,h,i;if(typeof b=="string"){if(g=p.exec(b)){e=c.createElement(g[1]||"div");if(h=g[3])e.id=h;if(d){"class"in d&&(e.className+=d["class"],delete d["class"]);for(f in d)h=d[f],e.setAttribute(f,h)}if(h=g[4])e.className+=h.replace(/\./g," ");return e}return r.test(b)?(s.innerHTML=b,s.children[0]):a("renderParent: unsupported parent string = '"+b+"'")}return((i=b.prototype)!=null?i.cell:void 0)===b?(new b(d)).el:l(b)?b:a("renderParent: unsupported parent type = "+b)},f.cell=b=function(a){var b,c,d,e,f,h,i;this.options=a!=null?a:{},this.options.model!=null&&(this.model=this.options.model),typeof this.init=="function"&&this.init(this.options),s.innerHTML=(e=typeof this.tag)==="string"?this.tag:e==="function"?this.tag():"<div>",this.$el=$(this.el=s.children[0]);if(b=this.options.id)this.el.id=b;i=[this.cell.prototype.name,this["class"],this.options["class"]];for(f=0,h=i.length;f<h;f++)c=i[f],c&&(this.el.className+=" "+c);this.render?(d=this.render(this.$R,g(this._renderChildren,this)))instanceof Array&&this._renderChildren(d):this._renderChildren([])},b.prototype={$R:function(){var a,b,c,d;a=arguments[0],b=arguments[1],c=3<=arguments.length?t.call(arguments,2):[];if(a){(b!=null?b.constructor:void 0)!==Object&&(c.unshift(b),b=void 0);if(d=o(a,b))return n(d,c)}},$:function(a){return $(a,this.el)},ready:function(a){var b;if(!this._isReady)return((b=this._readys)!=null?b:this._readys=[]).push(a);try{return a(this)}catch(c){}},_renderChildren:function(a){var b,c,d,e;n(this.el,a),this._delegateEvents(),typeof this.afterRender=="function"&&this.afterRender(),this._isReady=!0;if(this._readys){e=this._readys;for(c=0,d=e.length;c<d;c++){b=e[c];try{b(this)}catch(f){}}delete this._readys}},_delegateEvents:function(){var a,b,c,d,e,f;f=this.on;for(a in f){c=f[a];if(typeof c=="function"&&(d=i.exec(a))){c=g(c,this);if(b=d[1])(e=d[3])?this.$el.delegate(e,b,c):this.$el.bind(b,c)}}}},b.extend=function(a,d){var e,f,g,h;return typeof d=="string"&&(a.name=d),e=k(this,a),e.extend=b.extend,e.prototype.cell=e,typeof (f=a.css)=="string"?(h=c.createElement("style"),h.innerHTML=f):typeof (g=a.css_href)=="string"&&(h=c.createElement("link"),h.href=g,h.rel="stylesheet"),h&&(h.type="text/css",$("head")[0].appendChild(h)),e},typeof define=="function"&&typeof require=="function"&&(m=/(.*\/)?(.*)/,define("cell",[],d={pluginBuilder:"cell-pluginBuilder",load:function(c,e,f,g){e([c],function(g){var h,i,j;typeof g!="object"?a("Couldn't load "+c+" cell. cell definitions should be objects, but instead was "+typeof g):(h=m.exec(c).slice(1),typeof ((i=d.__preinstalledCells__)!=null?i[c]:void 0)=="undefined"&&(j=g.css_href)==null&&(g.css_href=e.toUrl(""+c+".css")),typeof g["extends"]=="string"?e(["cell!"+g["extends"]],function(a){a.prototype.name&&(g["class"]=a.prototype.name+(" "+g["class"])||""),f(a.extend(g,h[1]))}):f(b.extend(g,h[1])))})}}),require.ready(function(){$("[data-cell]").each(function(){var a,b,c,d,e,g;e=this;if(d=e.getAttribute("data-cell")){g={},b=/(^\?cachebust)|(&cachebust)/.test(f.location.search),((c=e.getAttribute("data-cell-cachebust"))!==null||b)&&c!=="false"&&(g.urlArgs="bust="+(new Date).getTime());if(a=e.getAttribute("data-cell-baseurl"))g.baseUrl=a;require(g,["cell!"+d],function(a){$(e).append((new a).el)})}})}))}.call(this),define("util/Model",[],function(){var a,b,c;return b=/^change:(.*)/,c=function(a,b){var c,d,e;for(d=0,e=a.length;d<e;d++){c=a[d];if(c===b)return}return a.unshift(b)},a=function(){function a(a){var b,c;this._ls={};for(b in a)c=a[b],this[b]=c;return}var d,e;return a.pathObj=e=function(a,b){if(a){for(var c=0,d=b.length;c<d&&(a=a[b[c]])!=null;c++);return a}},a.parsePropChange=d=function(a){var c,d;return(c=b.exec(a))!=null?(d=c[1])!=null?d.split("."):void 0:void 0},a.prototype.set=function(a,b){var c,d,e;for(c in a){e=a[c];if(this[c]!==e){d=this[c];try{this.trigger({cur:this[c]=e,prev:d,property:c,type:"change:"+c,data:b})}catch(f){}}}},a.prototype.trigger=function(a,b){var c,d,e,f,g;c=typeof a=="string"?{type:a,data:b}:a,c.model=this;if(e=this._ls[c.type])for(f=0,g=e.length;f<g;f++){d=e[f];try{d(c)}catch(h){}}},a.prototype.bindAndCall=function(b){var f,g,h,i;g=this,i=function(b){var f,i,j,k,l,m,n,o,p,q,r,s,t;if(m=d(h)){i=m.length-1,p=m[i],l=m.slice(0,i),n=function(a,b){var d,e,f;return c((f=(d=b._ls)[e="change:"+m[a]])!=null?f:d[e]=[],o[a])},j=g,o=[],r=function(c){o[c]=function(d){for(var e=c,f=d.cur,g=d.prev,h=d.model;e++<i;f=(h=f)&&f[m[e]],g=g&&g[m[e]])f instanceof a&&n(e,f);var j;return j={cur:f,prev:g,property:p,type:"change:"+p,model:h,data:d.data},c!==i&&(j.parentEvent=d),b(j)};if(j instanceof a)return n(c,j),j=j[k]};for(f=0,s=m.length;f<s;f++)k=m[f],r(f);try{return b({cur:j,property:p,type:h,model:e(g,l)})}catch(u){return console.error((u!=null?u.stack:void 0)||u)}}else{c((t=(q=g._ls)[h])!=null?t:q[h]=[],b);try{return b({type:h,model:g})}catch(v){}}};for(h in b)f=b[h],i(f)},a.prototype.bind=function(b){var e,f,g,h,i,j,k,l,m,n,o,p;for(j in b){f=b[j];if(i=d(j)){g=this,o=i.slice(0,-1);for(m=0,n=o.length;m<n;m++)h=o[m],(k=g[h])instanceof a&&(e={},e["change:"+h]=function(a){var b,c;b=a.cur,c=a.prev},k.bind(e))}c((p=(l=this._ls)[j])!=null?p:l[j]=[],f)}},a.prototype.unbind=function(a){var b,c,d,e,f,g,h;h=[];for(f in a){b=a[f];if(e=this._ls[f])for(c=0,g=e.length;c<g;c++){d=e[c];if(d===b){delete e[c];return}}}return h},a}()}),define("Bus",["util/Model"],function(a){return new a}),require(["cell"],function(a){a.__preinstalledCells__={App:0,Login:0,ChatLog:0,StatusBar:0}});var doLogin;define("Login",{render:function(a){return[a(".greet","Who are ",a("span","you"),"?"),a(".inputGroup",a("input.name",{placeholder:"Name..."}),a("input.submit",{type:"button",value:"Login"}))]},afterRender:function(){return this.$inputName=this.$("input.name")},on:{"click input.submit":doLogin=function(){var a;if(a=this.$inputName.val())return this.options.onLogin(a)},"keypress input.name":function(a){var b;b=a.which;if(b===13)return doLogin.call(this)}}});var __bind=function(a,b){return function(){return a.apply(b,arguments)}};define("ChatLog",["Bus"],function(a){var b;return b=cell.prototype.$R,{renderChat:function(c){var d,e;return e=c.name,d=c.msg,this.$el.append(function(){return b(".chat"+(a.username===e&&".self"||""),b("span.from",e),b("span.msg",d))}()),$(window).scrollTop(999999)},afterRender:function(){return a.bind({loginSuccess:__bind(function(a){var b,c,d,e,f;b=a.chats;if(b){f=[];for(d=0,e=b.length;d<e;d++)c=b[d],f.push(this.renderChat(c));return f}},this),chat:__bind(function(a){return a&&this.renderChat(a)},this),chatSent:__bind(function(b){var c;return c=b.msg,c&&this.renderChat({name:a.username,msg:c})},this)})}}});var __bind=function(a,b){return function(){return a.apply(b,arguments)}};define("StatusBar",["Bus"],function(a){var b;return b=cell.prototype.$R,{render:function(a){return[a(".onlineUsers",a(".list"),a(".label","online"))]},afterRender:function(){var c,d;return c=this.$(".list"),a.bind({userLoggedIn:d=function(a){var d;return d=a.name,c.append(b("span.user",{"data-user":d},d))},userLoggedOut:__bind(function(a){var b;return b=a.name,this.$(".list .user[data-user='"+b+"']").remove()},this),loginSuccess:function(a){var b,e,f,g,h,i;e=a.name,f=a.users,c.html(""),i=[];for(g=0,h=f.length;g<h;g++)b=f[g],e!==b&&i.push(d({name:b}));return i}})}}});var __bind=function(a,b){return function(){return a.apply(b,arguments)}};define("App",["Bus","cell!Login","cell!ChatLog","cell!StatusBar"],function(a,b,c,d){return{init:function(){var b,c,d,e,f,g;this.socket=io.connect(((e=window.hivemind)!=null?e.socketurl:void 0)||"http://96.126.114.123:80"),f=["chat","userLoggedIn","userLoggedOut"],g=[];for(c=0,d=f.length;c<d;c++)b=f[c],g.push(this.socket.on(b,function(b){return function(c){return a.trigger((c.type=b)&&c)}}(b)));return g},render:function(e){return[e(b,{onLogin:__bind(function(b){return this.socket.emit("login",a.set({username:b})||b,__bind(function(b){return b.error?a.trigger("loginFail"):(this.$(".Login").toggle(!1),a.trigger((b.type="loginSuccess")&&b))},this))},this)}),e(c),e(d),e(".arrow",">"),e("input.chatInput")]},on:{"keypress input.chatInput":function(b){var c,d,e,f;f=b.which,e=b.target;if(a.username&&f===13&&(d={msg:(c=$(e)).val()}).msg){c.val("");try{return this.socket.emit("chat",(d.name=a.username)&&d,function(b){return a.trigger((d.type="chatSent")&&d)})}catch(g){}}}}}});