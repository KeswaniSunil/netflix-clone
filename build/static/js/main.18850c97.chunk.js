(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{20:function(e,t,a){e.exports=a(61)},25:function(e,t,a){},26:function(e,t,a){},43:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(14),i=a.n(o),r=(a(25),a(26),a(3)),l=a(15),s=a.n(l).a.create({baseURL:"https://api.themoviedb.org/3"}),m=(a(43),a(16)),u=a(19),d=a.n(u),f=function(e){var t=e.title,a=e.fetchUrl,o=e.isLargeRow,i=Object(n.useState)([]),l=Object(r.a)(i,2),u=l[0],f=l[1],h=Object(n.useState)(""),v=Object(r.a)(h,2),g=v[0],p=v[1];Object(n.useEffect)((function(){s.get(a).then((function(e){return f(e.data.results),e})).catch((function(e){}))}),[a]);return c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row__posters"},u.map((function(e){return c.a.createElement("img",{onClick:function(){return function(e){g?p(""):d()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);p(t.get("v"))})).catch((function(e){}))}(e)},key:e.id,className:"row__poster ".concat(o&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(o?e.poster_path:e.backdrop_path),alt:e.name})}))),g&&c.a.createElement(m.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},h="442f511cc6fc584ad2d8be911c676de1",v={fetchTrending:"/trending/all/week?api_key=".concat(h,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(h,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(h,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(h,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(h,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(h,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(h,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(h,"&with_genres=99")},g=(a(59),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){s.get(v.fetchNetflixOriginals).then((function(e){return o(e.data.results[Math.floor(Math.random()*(e.data.results.length-1))]),e})).catch((function(e){}))}),[]);var i,l;return c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button"},"Play"),c.a.createElement("button",{className:"banner__button"},"My List")),c.a.createElement("h1",{className:"banner__description"},(i=null===a||void 0===a?void 0:a.overview,l=150,(null===i||void 0===i?void 0:i.length)>l?i.substr(0,l-1)+"...":i))),c.a.createElement("div",{className:"banner--fadeBottom"}))}),p=(a(60),function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},c.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png",alt:"Netflix Logo"}),c.a.createElement("img",{className:"nav__avatar",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"Netflix Logo"}))});var _=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement(g,null),c.a.createElement(f,{title:"Netflix Originals",fetchUrl:v.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(f,{title:"Trending Now",fetchUrl:v.fetchTrending}),c.a.createElement(f,{title:"Top Rated",fetchUrl:v.fetchTopRated}),c.a.createElement(f,{title:"Action Movies",fetchUrl:v.fetchActionMovies}),c.a.createElement(f,{title:"Comedy Movies",fetchUrl:v.fetchComedyMovies}),c.a.createElement(f,{title:"Horror Movies",fetchUrl:v.fetchHorrorMovies}),c.a.createElement(f,{title:"Romance Movies",fetchUrl:v.fetchRomanceMovies}),c.a.createElement(f,{title:"Documentaries",fetchUrl:v.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.18850c97.chunk.js.map