(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9603],{86749:function(e,s,r){"use strict";r.r(s);var i=r(27378),n=r(32775),c=r(40641),l=r(79894),t=r(46827),a=r(24246);s.default=function(){return(0,a.jsx)(t.I,{pageTitle:"404 - Page doesn't exist",pageDescription:"404 - Page doesn't exist",children:(0,a.jsx)(n.U,{iconType:"editorStrike",title:(0,a.jsx)("h2",{children:"Ack! There's nothing here."}),body:(0,a.jsx)(i.Fragment,{children:(0,a.jsx)("p",{children:"You found a page that doesn't exist."})}),actions:(0,a.jsx)(l.default,{href:"/",children:(0,a.jsx)(c.g2,{color:"primary",fill:!0,children:"Go Home"})})})})}},30497:function(e,s,r){"use strict";r.r(s),r.d(s,{Search:function(){return T},default:function(){return P}});r(27378);var i=r(6199),n=r(64013),c=r(68027),l=r(16129),t=r(90832),a=r(42492),d=r(35762),o=r(75176),h=r(46827),u=r(50272),x=r(46441),j=r(1894),p=r(24246),m=function(e){var s=e.wasSearched;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"facets",children:[s&&(0,p.jsx)(x.Z,{label:"Sort by",sortOptions:[{name:"Relevance",value:"",direction:""},{name:"Recent (Created on)",value:"date",direction:"desc"}]}),(0,u.iE)().facets.map((function(e){return"string"===typeof e?(0,p.jsx)(j.Z,{field:e,label:e},e):(0,p.jsx)(j.Z,{field:e.field,label:e.label},e.field)}))]})})},g=r(38455),f=r(23610),v=r(95767),_=r(34631),S=r(86677),w=r(42605),z=r(44720),C=r(97716),N=r(23356);var J=r(63545),b=r(9509),y=r(16086),Z=function(e){var s=e.slug,r=e.title,i=e.meta_description,n=e.date,c=(0,S.useRouter)(),a=w.Z.sanitize(r),d=w.Z.sanitize(i),o=n&&function(e){return(0,z.Z)((0,C.Z)(e))?(0,N.Z)((0,C.Z)(e),"MMMM do, yyyy"):(console.log(e,"is an invalid date."),"")}(n);return(0,p.jsx)("div",{className:"docChromeSearchResult",children:(0,p.jsxs)(l.Gv,{onClick:function(){return c.push(s)},responsive:!1,children:[(0,p.jsx)(t.J,{grow:!1,children:(0,p.jsx)(J.xe,{className:"docChromeSearchResult__icon",paddingSize:"s",children:(0,p.jsx)(b.pH,{type:"logoElastic",size:"l"})})}),(0,p.jsx)(t.J,{children:(0,p.jsxs)(l.Gv,{direction:"column",gutterSize:"none",responsive:!1,children:[(0,p.jsx)(t.J,{grow:!1,children:(0,p.jsx)(y.yR,{size:"s",className:"docChromeSearchResult__title",children:(0,p.jsx)("h4",{children:(0,p.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})})})}),(0,p.jsx)(t.J,{grow:!1,children:(0,p.jsx)(g.a,{size:"s",color:"subdued",className:"docChromeSearchResult__description",children:(0,p.jsx)("div",{dangerouslySetInnerHTML:{__html:d}})})}),(0,p.jsx)(t.J,{grow:!1,children:o?(0,p.jsxs)(g.a,{size:"s",color:"subdued",className:"docChromeSearchResult__date",children:["Created on ",o]}):null})]})})]})})},R=function(e){var s=e.wasSearched,r=e.results,i=(0,u.iE)();return(0,p.jsxs)(l.Gv,{direction:"column",responsive:!1,children:[(0,p.jsx)(a.F,{size:"xl"}),s&&(0,p.jsx)(t.J,{grow:!1,children:(0,p.jsxs)(l.Gv,{alignItems:"center",responsive:!1,children:[(0,p.jsx)(t.J,{children:(0,p.jsx)(g.a,{size:"s",color:"subdued",children:(0,p.jsx)(f.Z,{})})}),(0,p.jsx)(t.J,{grow:!1,children:(0,p.jsx)(v.Z,{})})]})}),(0,p.jsx)(t.J,{children:r.map((function(e,s){var r,n;return(0,p.jsx)(Z,{slug:(null===(r=e.url)||void 0===r?void 0:r.raw)||e[i.urlField].raw,title:e.title.snippet,meta_description:e.meta_description.snippet,date:null===(n=e.date)||void 0===n?void 0:n.raw},s)}))}),(0,p.jsx)(t.J,{children:(0,p.jsx)(l.Gv,{justifyContent:"center",responsive:!1,children:(0,p.jsx)(t.J,{grow:!1,children:(0,p.jsx)(_.Z,{className:"docChromeSearch__paging"})})})})]})},E=r(40641),G=function(){return(0,p.jsx)("div",{className:"docChromeSearchSidebarPromo",children:(0,p.jsx)(J.xe,{hasShadow:!1,hasBorder:!0,className:"docChromeSearchSidebarPromo__panel",children:(0,p.jsxs)(l.Gv,{direction:"column",gutterSize:"s",children:[(0,p.jsx)(t.J,{children:(0,p.jsx)(y.yR,{size:"s",children:(0,p.jsx)("h4",{children:"Elastic Cloud"})})}),(0,p.jsx)(t.J,{children:(0,p.jsx)(g.a,{size:"s",color:"subdued",children:(0,p.jsx)("p",{children:"Run Elastic solutions on Amazon Web Services, Microsoft Azure, or Google Cloud."})})}),(0,p.jsxs)(t.J,{children:[(0,p.jsx)(a.F,{size:"s"}),(0,p.jsx)(E.g2,{href:"https://cloud.elastic.co/registration?fromURI=%2Fdocs",children:"Start a free trial"})]})]})})})},F=r(86749),T=function(){return u.eF?(0,p.jsx)(h.I,{isSearchPage:!0,pageTitle:"Search results",pageDescription:"Search results.",pageUrl:"/search/",children:(0,p.jsx)(d.Z,{mapContextToProps:function(e){return{wasSearched:e.wasSearched,results:e.results}},children:function(e){var s=e.wasSearched,r=e.results;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(o.Z,{children:(0,p.jsx)(i.g,{className:"search-page",pageSideBar:(0,p.jsx)(n.H,{sizes:["m","l","xl"],children:(0,p.jsx)(c.q,{className:"docChrome__sidebar",children:(0,p.jsx)("div",{className:"docArticle__sideNav",children:(0,p.jsx)(m,{wasSearched:s})})})}),children:(0,p.jsx)(l.Gv,{className:"docArticle__wrapper",gutterSize:"none",justifyContent:"spaceBetween",children:(0,p.jsx)(t.J,{children:(0,p.jsxs)(l.Gv,{gutterSize:"xl",children:[(0,p.jsx)(t.J,{children:(0,p.jsx)(R,{wasSearched:s,results:r})}),(0,p.jsx)(n.H,{sizes:["l","xl"],children:(0,p.jsxs)(t.J,{grow:!1,children:[(0,p.jsx)(a.F,{size:"xl"}),(0,p.jsx)(G,{})]})})]})})})})})})}})}):(0,p.jsx)(F.default,{})},P=T},19688:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(30497)}])}},function(e){e.O(0,[9937,103,7815,2090,4620,9774,2888,179],(function(){return s=19688,e(e.s=s);var s}));var s=e.O();_N_E=s}]);