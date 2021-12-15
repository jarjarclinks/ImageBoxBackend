(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{791:function(e,t,r){"use strict";r(5675),r(7294);var s=r(5893);t.Z=function(e){var t=e.picture,r=e.caption,n=e.author;return(0,s.jsxs)("div",{className:"flex group max-h-screen w-100 bg-gray-200 align-items-center mx-auto my-10 rounded-lg shadow-lg\r transform transition duration-500 hover:scale-110 border-10px mt-10 md:mx-5",children:[(0,s.jsx)("img",{className:"z-10 rounded-lg",src:t,alt:"sliderimage",height:600,width:900,layout:"fixed"}),(0,s.jsxs)("div",{className:"absolute bottom-1 px-2 z-20",children:[(0,s.jsx)("h4",{className:"font-semibold text-white text-lg pt-1 text-opacity-100 md:text-opacity-0 group-hover:text-opacity-100",children:n}),(0,s.jsx)("h4",{className:"font-medium text-sm text-gray-300 text-sm py-1 text-opacity-100 md:text-opacity-0 group-hover:text-opacity-100",children:r})]})]})}},3473:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});r(7294);var s=r(8193),n=r(2942),c=r(5893);var a=function(e){var t=e.Icon;return(0,c.jsx)("div",{className:"flex items-center px-10 py-5 md:px-2 md:py-2 cursor-pointer sm:h-14",children:(0,c.jsx)(t,{className:"h-5 text-gray-400"})})};r(4260);var o=function(){return(0,c.jsxs)("div",{className:"bottom-0 z-20 bg-gray-200 dark:bg-black justify-center py-5 lg:py-10 lg:px-5 shadow-lg",children:[(0,c.jsxs)("h3",{className:"flex text-gray-400 justify-center font-semibold",children:["Made by ",(0,c.jsx)("span",{className:"link px-2 text-gray-500",children:"Shreyansh Gupta"})]}),(0,c.jsxs)("div",{className:"flex text-gray-400 justify-center",children:[(0,c.jsx)("a",{href:"https://github.com/jarjarclinks",children:(0,c.jsx)("span",{children:(0,c.jsx)(a,{Icon:s.RrF})})}),(0,c.jsx)("a",{href:"mailto:shreyansh2678@gmail.com",children:(0,c.jsxs)("span",{children:[(0,c.jsx)(a,{Icon:n.bV6}),"    "]})})]})]})}},2266:function(e,t,r){"use strict";var s=r(7294),n=r(2942),c=r(425),a=r(9120),o=r(4260),i=r(1163),l=r(5893);t.Z=function(){(0,i.useRouter)();var e=(0,i.useRouter)(),t=e.asPath,r=(e.pathname,(0,s.useState)(!0)),u=r[0],d=r[1],x=(0,c.F)("light"),h=x.theme,f=x.setTheme,m=function(){f("dark"===h?"light":"dark"),d(!u),console.log("current dark mode toggled")};return(0,l.jsxs)("div",{className:"sticky top-0 z-50 bg-white dark:bg-gray-700 flex items-center p-2 lg:px-5 shadow-lg",children:[(0,l.jsx)("a",{href:"/",children:(0,l.jsxs)("h2",{className:"flex text-xl md:text-3xl text-blue-900 dark:text-blue-500 font-bold md:text-2xl transform transition duration-500 hover:scale-110",children:["Image",(0,l.jsx)("span",{className:"text-yellow-900 dark:text-yellow-500",children:"Box"})]})}),"/carousel"==t&&(0,l.jsxs)("div",{className:"flex justify-center flex-grow",children:[(0,l.jsx)("a",{href:"/carousel",children:(0,l.jsx)(o.Z,{active:!0,Icon:n.u3})}),(0,l.jsx)("a",{href:"/grid",children:(0,l.jsx)(o.Z,{Icon:n.d1n})})]}),"/grid"==t&&(0,l.jsxs)("div",{className:"flex justify-center flex-grow",children:[(0,l.jsx)("a",{href:"/carousel",children:(0,l.jsx)(o.Z,{Icon:n.u3})}),(0,l.jsx)("a",{href:"/grid",children:(0,l.jsx)(o.Z,{active:!0,Icon:n.d1n})})]}),"dark"==h&&(0,l.jsx)("div",{onClick:m,className:"justify-end",children:(0,l.jsx)(o.Z,{Icon:a.NWY})}),"light"==h&&(0,l.jsx)("div",{onClick:m,className:"justify-end",children:(0,l.jsx)(o.Z,{Icon:n.kLh})})]})}},4260:function(e,t,r){"use strict";r(7294);var s=r(5893);t.Z=function(e){var t=e.Icon,r=e.active;return(0,s.jsx)("div",{className:"flex items-center px-2 md:px-5 md:h-10\r md:hover:bg-gray-100 dark:md:hover:bg-gray-600 rounded-lg active:border-b-2 focus:border-b-2 focus:border-blue-500\r active:border-blue-500 group cursor-pointer dark:text-blue-500 transform transition duration-500 hover:scale-110",children:(0,s.jsx)(t,{className:"h-4 text-gray-500 text-center h-7 md:h-7\n      group:hover:text-blue-500 dark:text-blue-500 ".concat(r&&"text-blue-500"," ").concat(r&&"dark:text-yellow-500"," ").concat(!r&&"dark:text-gray-300")})})}},759:function(e,t,r){"use strict";r(7294);var s=r(5893);t.Z=function(e){var t=e.Icon;return(0,s.jsx)("div",{className:"cursor-pointer z-12 -px-2 md:px-1 transform transition duration-500 hover:scale-120",children:(0,s.jsx)(t,{className:"z-60 h-10 cursor-pointer text-blue-400 hover:text-green-400"})})}},4744:function(e,t,r){"use strict"},3974:function(e,t,r){"use strict";r(7294),r(4931),r(9669)},4036:function(e,t,r){"use strict";r.r(t);var s=r(7294),n=r(9120),c=(r(4744),r(759)),a=r(6654),o=r(2266),i=r(3473),l=r(791),u=r(4931),d=(r(3974),r(5893));t.default=function(){(0,a.k6)();var e=(0,s.useState)([{picture:"https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?",caption:"",author:""}]),t=e[0],r=e[1],x=(0,s.useState)(0),h=x[0],f=x[1];(0,s.useEffect)((function(){u.Z.getAll().then((function(e){console.log("in Useeffect"),console.log(e),r(e)}))}),[]);var m=t.length;return console.log("posts size="),console.log(m),console.log("in carousel"),console.log(t),(0,d.jsxs)("div",{"h-screen":!0,children:[(0,d.jsx)(o.Z,{}),(0,d.jsx)("div",{className:"flex bg-gray-100 dark:bg-gray-800 h-screen w-screen justify-center items-center",children:(0,d.jsxs)("div",{className:"flex items-center relative pb-40 pt-20",children:[(0,d.jsx)("div",{className:"z-50",onClick:function(e){e.preventDefault(),console.log("Left Image called"),f(0==h?m-1:h-1)},children:(0,d.jsx)(c.Z,{Icon:n.wyc})}),(0,d.jsx)(l.Z,{picture:t[h].picture,caption:t[h].caption,author:t[h].author}),(0,d.jsx)("div",{className:"z-50",onClick:function(e){e.preventDefault(),console.log("Right Image called"),f(h==m-1?0:h+1)},children:(0,d.jsx)(c.Z,{Icon:n.XCv})})]})}),(0,d.jsx)(i.Z,{})]})}},4931:function(e,t,r){"use strict";var s=r(9669),n=r.n(s),c="http://localhost:3001/api/posts";t.Z={getAll:function(){return n().get(c).then((function(e){return e.data}))},create:function(e){return n().post(c,e).then((function(e){return e.data}))},update:function(e,t){return n().put("".concat(c,"/").concat(e),t).then((function(e){return e.data}))}}},5392:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carousel",function(){return r(4036)}])}},function(e){e.O(0,[774,617,338,654,888,179],(function(){return t=5392,e(e.s=t);var t}));var t=e.O();_N_E=t}]);