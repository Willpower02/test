(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        8538: function(e, t, r) {
            Promise.resolve().then(r.t.bind(r, 81749, 23)), Promise.resolve().then(r.t.bind(r, 25250, 23)), Promise.resolve().then(r.bind(r, 19721)), Promise.resolve().then(r.t.bind(r, 25554, 23)), Promise.resolve().then(r.bind(r, 59414)), Promise.resolve().then(r.bind(r, 70433)), Promise.resolve().then(r.bind(r, 93177)), Promise.resolve().then(r.bind(r, 23015)), Promise.resolve().then(r.bind(r, 35113)), Promise.resolve().then(r.bind(r, 37448)), Promise.resolve().then(r.bind(r, 93822)), Promise.resolve().then(r.t.bind(r, 46922, 23)), Promise.resolve().then(r.t.bind(r, 57343, 23))
        },
        24232: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return s.a
                }
            });
            var n = r(24930),
                s = r.n(n)
        },
        47907: function(e, t, r) {
            "use strict";
            var n = r(15313);
            r.o(n, "usePathname") && r.d(t, {
                usePathname: function() {
                    return n.usePathname
                }
            }), r.o(n, "useRouter") && r.d(t, {
                useRouter: function() {
                    return n.useRouter
                }
            }), r.o(n, "useSearchParams") && r.d(t, {
                useSearchParams: function() {
                    return n.useSearchParams
                }
            })
        },
        24930: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = r(84096);
            r(57437), r(2265);
            let s = n._(r(84795));

            function a(e, t) {
                let r = {
                    loading: e => {
                        let {
                            error: t,
                            isLoading: r,
                            pastDelay: n
                        } = e;
                        return null
                    }
                };
                return "function" == typeof e && (r.loader = e), (0, s.default)({ ...r,
                    ...t
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        19721: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = r(99775);

            function s(e) {
                let {
                    reason: t,
                    children: r
                } = e;
                if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
                return r
            }
        },
        84795: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = r(57437),
                s = r(2265),
                a = r(19721);

            function l(e) {
                var t;
                return {
                    default: null != (t = null == e ? void 0 : e.default) ? t : e
                }
            }
            let o = {
                    loader: () => Promise.resolve(l(() => null)),
                    loading: null,
                    ssr: !0
                },
                i = function(e) {
                    let t = { ...o,
                            ...e
                        },
                        r = (0, s.lazy)(() => t.loader().then(l)),
                        i = t.loading;

                    function c(e) {
                        let l = i ? (0, n.jsx)(i, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            o = t.ssr ? (0, n.jsx)(r, { ...e
                            }) : (0, n.jsx)(a.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, n.jsx)(r, { ...e
                                })
                            });
                        return (0, n.jsx)(s.Suspense, {
                            fallback: l,
                            children: o
                        })
                    }
                    return c.displayName = "LoadableComponent", c
                }
        },
        93177: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(57437);
            r(2265);
            var s = r(25554),
                a = r.n(s),
                l = r(20703),
                o = r(14181);
            t.default = function(e) {
                let {
                    text1: t,
                    text2: r,
                    parentId: s = "popular_carousel",
                    h2: i = !0,
                    pathname: c,
                    textColor: u = "text-white",
                    svgColor: d = "white",
                    page: f,
                    id: m,
                    buyUrl: p = "/buy-cars",
                    modelID: x
                } = e;
                return (0, n.jsxs)("div", {
                    className: "flex flex-row border-y border-[#262626]",
                    children: [(0, n.jsx)("div", {
                        className: "w-[75%] md:w-[80%] text-white",
                        children: i ? (0, n.jsx)("h2", {
                            style: {
                                all: "unset"
                            },
                            children: (0, n.jsxs)("span", {
                                className: "py-3 px-2 md:!py-6 md:!px-10 flex flex-row gap-1.5 items-center",
                                children: [(0, n.jsx)("span", {
                                    className: "font-normal ".concat(u, " text-[24px] md:text-[32px] ").concat(a().className),
                                    children: t
                                }), (0, n.jsx)("span", {
                                    className: "text-[22px] md:text-[30px] ".concat(u, " font-light"),
                                    children: r
                                })]
                            })
                        }) : (0, n.jsxs)("span", {
                            className: "py-3 px-2 md:!py-6 md:!px-10 flex flex-row gap-1.5 items-center",
                            children: [(0, n.jsx)("span", {
                                className: "font-normal ".concat(u, " text-[24px] md:text-[32px] ").concat(a().className),
                                children: t
                            }), (0, n.jsx)("span", {
                                className: "text-[22px] md:text-[30px] ".concat(u, " font-light"),
                                children: r
                            })]
                        })
                    }), (0, n.jsx)("span", {
                        onClick: () => {
                            let e = document.getElementById(s);
                            if (e) {
                                let t = e.querySelector(".owl-prev");
                                t && t.click()
                            }
                        },
                        className: "cursor-pointer w-[12.5%] md:w-[10%] flex justify-center items-center border-x border-[#333] group",
                        children: (0, n.jsx)(l.default, {
                            src: "/images/right-arrow.webp",
                            alt: (0, o.sc)("next-icon"),
                            width: 16,
                            height: 12,
                            className: "rotate-180 hover:[width:18px]"
                        })
                    }), (0, n.jsx)("span", {
                        onClick: () => {
                            let e = document.getElementById(s);
                            if (e) {
                                let t = e.querySelector(".owl-next");
                                t && t.click()
                            }
                        },
                        className: "cursor-pointer flex justify-center items-center group w-[12.5%] md:w-[10%]",
                        children: (0, n.jsx)(l.default, {
                            src: "/images/right-arrow.webp",
                            alt: (0, o.sc)("next-icon"),
                            width: 16,
                            height: 12,
                            className: "hover:[width:18px]"
                        })
                    })]
                })
            }
        },
        23015: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(57437),
                s = r(2265);
            let a = (0, r(24232).default)(() => r.e(5973).then(r.t.bind(r, 45973, 23)), {
                    loadableGenerated: {
                        webpack: () => [45973]
                    },
                    ssr: !1
                }),
                l = {
                    0: {
                        items: 1.1,
                        margin: 14
                    },
                    768: {
                        items: 2,
                        margin: 5
                    },
                    1024: {
                        items: 1.5,
                        margin: 20
                    }
                };
            t.default = e => {
                let {
                    children: t
                } = e;
                return (0, s.useEffect)(() => {
                    window.$ = window.jQuery = r(17702)
                }, []), (0, n.jsx)(a, {
                    responsive: l,
                    autoplay: !1,
                    autoplaySpeed: 5e3,
                    loop: !0,
                    autoplayTimeout: 7e3,
                    children: t
                })
            }
        },
        35113: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(57437),
                s = r(2265),
                a = r(20703),
                l = r(47907),
                o = r(14181),
                i = r(25554),
                c = r.n(i);
            r(62238);
            var u = r(71126);
            t.default = e => {
                let {
                    name: t
                } = e, r = (0, l.useRouter)(), i = (0, l.useSearchParams)().get("key"), [d, f] = (0, s.useState)(""), [m, p] = (0, s.useState)(!1), x = () => {
                    let e = "/buy-cars?";
                    (null == d ? void 0 : d.trim()) !== "" ? r.push("".concat(e, "search=").concat(d)): r.push("".concat(e))
                }, h = async () => {
                    await (0, u.signOut)({
                        redirect: !1
                    })
                };
                return (0, s.useEffect)(() => {
                    let e = () => {
                        window.innerHeight > 1440 ? p(!0) : p(!1)
                    };
                    return e(), window.addEventListener("resize", e, {
                        passive: !0
                    }), () => window.removeEventListener("resize", e, {
                        passive: !0
                    })
                }, []), (0, s.useEffect)(() => {
                    (async () => {
                        "logout" === i && (await h(), r.replace("/", void 0, {
                            shallow: !0
                        }))
                    })()
                }, []), (0, n.jsx)("div", {
                    className: "overflow-hidden bg-black object-cover flex flex-row items-center sm:block h-[75vh] bg-[url('/images/landingBg.webp')] bg-left-bottom \n        bg-no-repeat bg-60 md:bg-auto ".concat(m ? "s:max-h-[630px] md:max-h-[960px] md:bg-contain" : "", " ").concat("howItWorks" === t ? "border-b border-white/20" : null),
                    children: (0, n.jsx)("div", {
                        className: "max-w-screen-xl mx-auto px-4 h-full",
                        children: (0, n.jsx)("div", {
                            className: "flex flex-row justify-center items-center !pt-16 md:h-full",
                            children: (0, n.jsxs)("div", {
                                className: "text-center flex flex-col !p-0",
                                children: [(0, n.jsx)("span", {
                                    className: "font-light text-white !opacity-75 leading-[16.25px] uppercase text-[13px] md:text-[14px] tracking-[0.65px]  md:tracking-[0.7px]",
                                    children: "The car community for the crypto elite"
                                }), (0, n.jsx)("h1", {
                                    children: (0, n.jsxs)("span", {
                                        className: "flex flex-col",
                                        children: [(0, n.jsx)("span", {
                                            className: "font-normal text-[40px] md:text-[80px] text-white leading-[44px] pt-3 tracking-[-1.2px] md:tracking-[-2.4px]",
                                            children: "Discover your next"
                                        }), " ", (0, n.jsx)("span", {
                                            className: "font-normal text-[42px] md:text-[80px] tracking-[-0.42px] md:tracking-[-0.8px] text-white ".concat(c().className),
                                            children: "Luxury Car"
                                        })]
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-center pt-4",
                                    children: (0, n.jsx)("div", {
                                        className: "border-b border-white flex items-center justify-center w-9/12 lg:hidden",
                                        children: (0, n.jsxs)("div", {
                                            className: "flex items-center p-4 px-2 w-full",
                                            children: [(0, n.jsx)("input", {
                                                id: "startyourseach",
                                                type: "text",
                                                placeholder: "START YOUR SEARCH",
                                                className: "bg-transparent text-center text-white placeholder-white border-none outline-none text-sm md:text-base w-[232px] mx-auto",
                                                value: d,
                                                onKeyDown: e => {
                                                    "Enter" === e.key && x()
                                                },
                                                onChange: e => f(e.target.value)
                                            }), (0, n.jsx)(a.default, {
                                                src: "/images/search-responsive.webp",
                                                onClick: x,
                                                alt: (0, o.sc)("Search Icon"),
                                                width: 20,
                                                height: 20,
                                                className: "cursor-pointer ml-2 w-[20px] h-[20px]"
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        93822: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                VehicleClientWrapper: function() {
                    return i
                }
            });
            var n = r(57437),
                s = r(2265),
                a = r(24232);
            r(44575), r(64123);
            let l = (0, a.default)(() => r.e(5973).then(r.t.bind(r, 45973, 23)), {
                loadableGenerated: {
                    webpack: () => [45973]
                },
                ssr: !1
            });
            var o = e => {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(l, {
                    className: "owl-theme !flex !justify-center home-slider",
                    dots: !1,
                    smartSpeed: 1e3,
                    nav: !1,
                    rewind: !0,
                    pullDrag: !0,
                    mouseDrag: !0,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 10
                        },
                        768: {
                            items: 2,
                            margin: 16
                        },
                        1024: {
                            items: 3,
                            margin: 24
                        }
                    },
                    autoplay: !1,
                    autoplaySpeed: 5e3,
                    loop: !1,
                    children: t
                })
            };

            function i(e) {
                let {
                    children: t
                } = e, [r, a] = s.useState(!1);
                return (s.useEffect(() => {
                    a(!0)
                }, []), r) ? (0, n.jsx)(o, {
                    children: t
                }) : (0, n.jsx)("div", {
                    className: "hidden",
                    children: t
                })
            }
        },
        44575: function() {},
        64123: function() {},
        62238: function() {},
        57343: function() {},
        46922: function() {},
        25554: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__loraFont_3cc0b8', '__loraFont_Fallback_3cc0b8'"
                },
                className: "__className_3cc0b8"
            }
        },
        70158: function(e, t, r) {
            "use strict";
            r.d(t, {
                w_: function() {
                    return u
                }
            });
            var n = r(2265),
                s = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                a = n.createContext && n.createContext(s),
                l = ["attr", "size", "title"];

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach(function(t) {
                        var n, s;
                        n = t, s = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = s
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function u(e) {
                return t => n.createElement(d, o({
                    attr: c({}, e.attr)
                }, t), function e(t) {
                    return t && t.map((t, r) => n.createElement(t.tag, c({
                        key: r
                    }, t.attr), e(t.child)))
                }(e.child))
            }

            function d(e) {
                var t = t => {
                    var r, {
                            attr: s,
                            size: a,
                            title: i
                        } = e,
                        u = function(e, t) {
                            if (null == e) return {};
                            var r, n, s = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                            }
                            return s
                        }(e, l),
                        d = a || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", o({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, s, u, {
                        className: r,
                        style: c(c({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), i && n.createElement("title", null, i), e.children)
                };
                return void 0 !== a ? n.createElement(a.Consumer, null, e => t(e)) : t(s)
            }
        }
    },
    function(e) {
        e.O(0, [5452, 8038, 3107, 9414, 5250, 1749, 1126, 8588, 6608, 8940, 2971, 8069, 1744], function() {
            return e(e.s = 8538)
        }), _N_E = e.O()
    }
]);