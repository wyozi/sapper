import{_ as t,a as n,b as e,c as s,i as a,s as i,d as o,S as r,R as c,g as u,f,j as m,k as h,l as p,h as d,m as l,A as g,o as $,n as v,t as w,r as x,u as j}from"./index.f7258162.js";import{_ as E,a as T}from"./asyncToGenerator.e6cab42f.js";function b(t){var n,e,s,a,i,o=new c({props:{sections:t.sections,project:"sapper",dir:"migrating"}});return{c:function(){n=u("meta"),e=u("meta"),s=u("meta"),a=f(),o.$$.fragment.c(),this.h()},l:function(t){n=m(t,"META",{name:!0,content:!0},!1),h(n).forEach(p),e=m(t,"META",{name:!0,content:!0},!1),h(e).forEach(p),s=m(t,"META",{name:!0,content:!0},!1),h(s).forEach(p),a=d(t),o.$$.fragment.l(t),this.h()},h:function(){document.title="Migration • Sapper",l(n,"name","twitter:title"),l(n,"content","Sapper migration guides"),l(e,"name","twitter:description"),l(e,"content","The next small thing in web development"),l(s,"name","Description"),l(s,"content","The next small thing in web development")},m:function(t,r){g(document.head,n),g(document.head,e),g(document.head,s),$(t,a,r),v(o,t,r),i=!0},p:function(t,n){var e={};t.sections&&(e.sections=n.sections),o.$set(e)},i:function(t){i||(w(o.$$.fragment,t),i=!0)},o:function(t){x(o.$$.fragment,t),i=!1},d:function(t){p(n),p(e),p(s),t&&p(a),j(o,t)}}}function A(){return M.apply(this,arguments)}function M(){return(M=E(T.mark((function t(){var n;return T.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("migrating.json").then((function(t){return t.json()}));case 2:return n=t.sent,t.abrupt("return",{sections:n});case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function y(t,n,e){var s=n.sections;return t.$set=function(t){"sections"in t&&e("sections",s=t.sections)},{sections:s}}var S=function(c){function u(t){var r;return n(this,u),r=e(this,s(u).call(this)),a(o(r),t,y,b,i,["sections"]),r}return t(u,r),u}();export default S;export{A as preload};
