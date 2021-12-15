"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(193);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var esm = __webpack_require__(942);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/FooterIcon.js



function FooterIcon({
  Icon
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex items-center px-10 py-5 md:px-2 md:py-2 cursor-pointer sm:h-14",
    children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
      className: "h-5 text-gray-400"
    })
  });
}

/* harmony default export */ const components_FooterIcon = (FooterIcon);
// EXTERNAL MODULE: ./components/HeaderIcon.js
var HeaderIcon = __webpack_require__(260);
;// CONCATENATED MODULE: ./components/Footer.js








function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bottom-0 z-20 bg-gray-200 dark:bg-black justify-center py-5 lg:py-10 lg:px-5 shadow-lg",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      className: "flex text-gray-400 justify-center font-semibold",
      children: ["Made by ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "link px-2 text-gray-500",
        children: "Shreyansh Gupta"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex text-gray-400 justify-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/jarjarclinks",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: /*#__PURE__*/jsx_runtime_.jsx(components_FooterIcon, {
            Icon: index_esm/* AiFillGithub */.RrF
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "mailto:shreyansh2678@gmail.com",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_FooterIcon, {
            Icon: esm/* MailIcon */.bV6
          }), "    "]
        })
      })]
    })]
  });
}

/* harmony default export */ const components_Footer = (Footer);

/***/ }),

/***/ 266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(942);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(517);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120);
/* harmony import */ var _HeaderIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(260);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









function Header() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    asPath,
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    0: curDarkMode,
    1: setCurDarkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    theme,
    setTheme
  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)('light');

  const HandleMode = () => {
    //if (typeof window !== "undefined") {
    setTheme(theme === 'dark' ? 'light' : 'dark'); //localStorage.setItem("darkMode",!(curDarkMode))

    setCurDarkMode(!curDarkMode);
    console.log("current dark mode toggled"); //}
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "sticky top-0 z-50 bg-white dark:bg-gray-700 flex items-center p-2 lg:px-5 shadow-lg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h2", {
        className: "flex text-xl md:text-3xl text-blue-900 dark:text-blue-500 font-bold md:text-2xl transform transition duration-500 hover:scale-110",
        children: ["Image", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          className: "text-yellow-900 dark:text-yellow-500",
          children: "Box"
        })]
      })
    }), asPath == "/carousel" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex justify-center flex-grow",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        href: "/carousel",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          active: true,
          Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__/* .PhotographIcon */ .u3
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        href: "/grid",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__/* .ViewGridAddIcon */ .d1n
        })
      })]
    }), asPath == "/grid" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex justify-center flex-grow",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        href: "/carousel",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__/* .PhotographIcon */ .u3
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        href: "/grid",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          active: true,
          Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__/* .ViewGridAddIcon */ .d1n
        })
      })]
    }), theme == 'dark' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      onClick: HandleMode,
      className: "justify-end",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__/* .SunIcon */ .NWY
      })
    }), theme == 'light' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      onClick: HandleMode,
      className: "justify-end",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_HeaderIcon__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        Icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__/* .MoonIcon */ .kLh
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function HeaderIcon({
  Icon,
  active
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "flex items-center px-2 md:px-5 md:h-10\r md:hover:bg-gray-100 dark:md:hover:bg-gray-600 rounded-lg active:border-b-2 focus:border-b-2 focus:border-blue-500\r active:border-blue-500 group cursor-pointer dark:text-blue-500 transform transition duration-500 hover:scale-110",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Icon, {
      className: `h-4 text-gray-500 text-center h-7 md:h-7
      group:hover:text-blue-500 dark:text-blue-500 ${active && 'text-blue-500'} ${active && 'dark:text-yellow-500'} ${!active && 'dark:text-gray-300'}`
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderIcon);

/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Memes */
const Memes = [{
  picture: "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?",
  caption: "What a nice painting",
  author: "Rick"
}, {
  picture: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?",
  caption: "Aah, a better one.",
  author: "Jerry"
}, {
  picture: "https://images.unsplash.com/photo-1621595440023-48eea037c317",
  caption: "Not so good,this one",
  author: "Summer"
}, {
  picture: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a",
  caption: "Cool",
  author: "Beth"
}, {
  picture: "https://images.unsplash.com/photo-1634922117342-f4850068074f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  caption: "Not so cool",
  author: "Morty"
}, {
  picture: "https://media.istockphoto.com/photos/abstract-3d-art-background-with-curve-shape-holographic-color-picture-id1266776339?k=20&m=1266776339&s=612x612&w=0&h=PlbCy5WTwlfZeJrWVewmvi_j4AqulhEzlghI8_OjW2o=",
  caption: "Noice again",
  author: "Rick"
}, {
  picture: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_touching_human_hand_other/1800x1200_cat_touching_human_hand_other.jpg?resize=750px:*",
  caption: "Deadly",
  author: "Birdman"
}, {
  picture: "https://images.unsplash.com/photo-1565771050301-5ce4c8fd5add?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  caption: "Deadly",
  author: "Birdman"
}, {
  picture: "https://images.unsplash.com/photo-1635012529836-a93238336ecf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  caption: "Deadly",
  author: "Birdman"
}, {
  picture: "https://images.unsplash.com/photo-1635012529836-a93238336ecf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  caption: "Deadly",
  author: "Birdman"
}, {
  picture: "https://images.unsplash.com/photo-1635012529836-a93238336ecf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  caption: "Deadly",
  author: "Birdman"
}, {
  picture: "https://images.unsplash.com/photo-1635012529836-a93238336ecf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  caption: "",
  author: ""
}];

/***/ }),

/***/ 974:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(931);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


const baseUrl = 'http://localhost:3001/api/posts';


const usePostsHook = (url = '', options = null) => {
  const {
    0: Posts,
    1: setPosts
  } = useState([]); // useEffect(()=>{
  //   postService.getAll()
  //   .then(initialPosts=>{
  //     setPosts(initialPosts)
  //   })
  // },[initialstate])

  useEffect(() => {
    axios.get(url).then(res => res.data).then(initialPosts => {
      setPosts(Posts => initialPosts);
    });
  }, [url, options]);
  console.log(Posts);
  return Posts;
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (usePostsHook)));

/***/ }),

/***/ 931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = 'http://localhost:3001/api/posts';

const getAll = () => {
  const request = axios__WEBPACK_IMPORTED_MODULE_0___default().get(baseUrl);
  const nonExisting = {
    picture: 'This post does not exist',
    author: "NA",
    caption: "NA"
  };
  return request.then(response => response.data);
};

const create = newObject => {
  const request = axios__WEBPACK_IMPORTED_MODULE_0___default().post(baseUrl, newObject);
  return request.then(response => response.data);
};

const update = (id, newObject) => {
  const request = axios__WEBPACK_IMPORTED_MODULE_0___default().put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAll,
  create,
  update
});

/***/ })

};
;