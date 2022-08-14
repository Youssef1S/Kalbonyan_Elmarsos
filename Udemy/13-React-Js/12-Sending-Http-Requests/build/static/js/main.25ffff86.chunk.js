(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(7),i=n.n(r),o=(n(18),n(2)),a=n(5),l=n(4),j=n(8),u=n.n(j),b=n(0),d=function(e){return Object(b.jsxs)("li",{className:u.a.movie,children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsx)("h3",{children:e.releaseDate}),Object(b.jsx)("p",{children:e.openingText})]})},x=n(9),h=n.n(x),p=function(e){return Object(b.jsx)("ul",{className:h.a["movies-list"],children:e.movies.map((function(e){return Object(b.jsx)(d,{title:e.title,releaseDate:e.release,openingText:e.openingText},e.id)}))})},O=n(3),f=n.n(O);var v=function(e){var t=Object(c.useRef)(""),n=Object(c.useRef)(""),s=Object(c.useRef)("");return Object(b.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r={title:t.current.value,openingText:n.current.value,releaseDate:s.current.value};e.onAddMovie(r)},children:[Object(b.jsxs)("div",{className:f.a.control,children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title"}),Object(b.jsx)("input",{type:"text",id:"title",ref:t})]}),Object(b.jsxs)("div",{className:f.a.control,children:[Object(b.jsx)("label",{htmlFor:"opening-text",children:"Opening Text"}),Object(b.jsx)("textarea",{rows:"5",id:"opening-text",ref:n})]}),Object(b.jsxs)("div",{className:f.a.control,children:[Object(b.jsx)("label",{htmlFor:"date",children:"Release Date"}),Object(b.jsx)("input",{type:"text",id:"date",ref:s})]}),Object(b.jsx)("button",{children:"Add Movie"})]})};n(20);var m=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),j=Object(l.a)(i,2),u=j[0],d=j[1],x=Object(c.useState)(null),h=Object(l.a)(x,2),O=h[0],f=h[1],m=Object(c.useCallback)(Object(a.a)(Object(o.a)().mark((function e(){var t,n,c,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),f(null),e.prev=2,e.next=5,fetch("https://react-http-ed1b8-default-rtdb.firebaseio.com/movies.json");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:for(s in n=e.sent,c=[],n)c.push({id:s,title:n[s].title,openingText:n[s].openingText,releaseDate:n[s].releaseDate});r(c),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),f(e.t0.message);case 19:d(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]);function g(){return(g=Object(a.a)(Object(o.a)().mark((function e(t){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-ed1b8-default-rtdb.firebaseio.com/movies.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){m()}),[m]);var w=Object(b.jsx)("p",{children:"Found no movies."});return n.length>0&&(w=Object(b.jsx)(p,{movies:n})),O&&(w=Object(b.jsx)("p",{children:O})),u&&(w=Object(b.jsx)("p",{children:"Loading..."})),Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)("section",{children:Object(b.jsx)(v,{onAddMovie:function(e){return g.apply(this,arguments)}})}),Object(b.jsx)("section",{children:Object(b.jsx)("button",{onClick:m,children:"Fetch Movies"})}),Object(b.jsx)("section",{children:w})]})};i.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(m,{}))},3:function(e,t,n){e.exports={control:"AddMovie_control__1wZo9"}},8:function(e,t,n){e.exports={movie:"Movie_movie__1IxsR"}},9:function(e,t,n){e.exports={"movies-list":"MoviesList_movies-list__1hPXN"}}},[[21,1,2]]]);
//# sourceMappingURL=main.25ffff86.chunk.js.map