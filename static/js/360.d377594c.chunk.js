"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[360],{360:function(t,r,e){e.r(r),e.d(r,{default:function(){return m}});var n=e(861),a=e(439),s=e(757),c=e.n(s),u=e(791),i=e(689),o=e(927),p="Cast_list__iUE7c",f="Cast_img__cmDAA",h="Cast_text__G99Oq",l="Cast_subText__ex0WW",v=e(184),m=function(){var t=(0,u.useState)([]),r=(0,a.Z)(t,2),e=r[0],s=r[1],m=(0,i.UO)().id;(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r,e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.t_)(m);case 3:r=t.sent,e=r.data,s(e.cast),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),n=t.t0.response,console.log(n.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[m]);var _=e.map((function(t){var r=t.id,e=t.character,n=t.name,a=t.profile_path;return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{className:f,src:o.Xo+a,alt:n,width:"100"}),(0,v.jsx)("p",{className:h,children:n}),(0,v.jsxs)("p",{className:l,children:["Character: ",e]})]},r)}));return(0,v.jsx)("ul",{className:p,children:_})}},927:function(t,r,e){e.d(r,{Ai:function(){return x},Xo:function(){return i},Y5:function(){return f},_k:function(){return o},t_:function(){return l},wW:function(){return m}});var n=e(861),a=e(757),s=e.n(a),c=e(243),u="c78419a450ee7857724cd10a5beb7b65";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="https://image.tmdb.org/t/p/original";function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/trending/all/day",{params:{api_key:u,page:1}});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r),{params:{api_key:u}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r,"/credits"),{params:{api_key:u}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:u}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=c.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:u}}),x=function(){var t=(0,n.Z)(s().mark((function t(r){var e,n,a,c=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:1,t.next=3,d.get("search/movie",{params:{query:r,page:e}});case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=360.d377594c.chunk.js.map