(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        7898: function(e, t, s) {
            Promise.resolve().then(s.t.bind(s, 85935, 23)), Promise.resolve().then(s.t.bind(s, 66974, 23)), Promise.resolve().then(s.t.bind(s, 44575, 23)), Promise.resolve().then(s.t.bind(s, 64123, 23)), Promise.resolve().then(s.bind(s, 59414)), Promise.resolve().then(s.t.bind(s, 8694, 23)), Promise.resolve().then(s.t.bind(s, 55768, 23)), Promise.resolve().then(s.t.bind(s, 71068, 23)), Promise.resolve().then(s.t.bind(s, 63385, 23)), Promise.resolve().then(s.t.bind(s, 42849, 23)), Promise.resolve().then(s.bind(s, 15808)), Promise.resolve().then(s.bind(s, 44520)), Promise.resolve().then(s.bind(s, 62442)), Promise.resolve().then(s.bind(s, 22457)), Promise.resolve().then(s.bind(s, 98750)), Promise.resolve().then(s.bind(s, 97357))
        },
        15808: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s(57437),
                a = s(2265);
            t.default = () => {
                let [e, t] = (0, a.useState)(!1);
                return ((0, a.useEffect)(() => {
                    localStorage.getItem("cookieConsent") || t(!0)
                }, []), e) ? (0, r.jsxs)("div", {
                    className: "fixed bottom-0 left-0 right-0 py-4 px-4 md:px-20 bg-gray-900 text-white text-center z-50 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4",
                    children: [(0, r.jsx)("p", {
                        className: "text-sm md:text-base",
                        children: "We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from."
                    }), (0, r.jsx)("button", {
                        onClick: () => {
                            localStorage.setItem("cookieConsent", !0), t(!1)
                        },
                        className: "btn px-4 py-2 bg-[#FF2325] text-white rounded-md",
                        children: "Accept"
                    })]
                }) : null
            }
        },
        37448: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s(57437),
                a = s(14181),
                l = s(2265);
            t.default = e => {
                let {
                    headers: t,
                    src: s,
                    externalImage: n = null,
                    fallbackSrc: i = "/images/fallback-image.webp",
                    fallbackBikeSrc: c = "/images/bike_fallback.webp",
                    alt: o,
                    className: d,
                    vehicleType: u,
                    onClick: h = () => {},
                    vehicleId: p = null
                } = e, [m, f] = (0, l.useState)(s);
                return (0, r.jsx)("img", {
                    src: m,
                    alt: (0, a.sc)(null != o ? o : ""),
                    className: d,
                    onError: e => {
                        n && n === m ? f("bike" === u ? c : "/images/fallback-image.webp") : m == i || m == c ? n ? f(n) : f("bike" === u ? c : "/images/fallback-image.webp") : f("bike" === u ? c : i), p && fetch("".concat("https://caapi.cryptoautos.com", "/api/vehicle-images-refetch/").concat(p), {
                            method: "GET"
                        }, {
                            headers: {
                                "auth-session-cookie": t.cookie,
                                "XSRF-TOKEN": t.xsrfToken
                            }
                        }).catch(e => {
                            console.error("Error fetching vehicle image:", e)
                        })
                    },
                    onClick: h
                })
            }
        },
        44520: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s(57437),
                a = s(13115),
                l = s(27185),
                n = s(14181),
                i = s(2265);
            t.default = function() {
                return (0, i.useEffect)(() => {
                    (async () => {
                        let e = await (0, n.wK)();
                        l.h.dispatch((0, a.L)(e))
                    })()
                }, []), (0, r.jsx)(r.Fragment, {})
            }
        },
        62442: function(e, t, s) {
            "use strict";
            s.r(t);
            var r = s(57437),
                a = s(41268),
                l = s(27185),
                n = s(14181),
                i = s(71126),
                c = s(2265);
            t.default = function(e) {
                var t, s;
                let {
                    headers: o
                } = e, d = (0, i.useSession)(), u = null == d ? void 0 : null === (s = d.data) || void 0 === s ? void 0 : null === (t = s.user) || void 0 === t ? void 0 : t.image;
                return (0, c.useEffect)(() => {
                    u && (async () => {
                        let e = await (0, n.c6)(u, { ...o
                        });
                        l.h.dispatch((0, a.F)(e))
                    })()
                }, [u]), (0, r.jsx)(r.Fragment, {})
            }
        },
        22457: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var r = s(57437);
            s(2265);
            var a = s(30828),
                l = s(27185),
                n = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(a.zt, {
                        store: l.h,
                        children: t
                    })
                },
                i = s(71126),
                c = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(n, {
                        children: (0, r.jsx)(i.SessionProvider, {
                            children: t
                        })
                    })
                }
        },
        98750: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var r = s(57437),
                a = s(8792),
                l = s(47907),
                n = s(2265),
                i = s(20703),
                c = s(14181),
                o = () => {
                    let [e, t] = (0, n.useState)(!1);
                    return (0, n.useEffect)(() => {
                        (() => {
                            let e = document.createElement("script");
                            e.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", e.async = !0, document.body.appendChild(e)
                        })()
                    }, []), (0, n.useEffect)(() => {
                        window.googleTranslateElementInit = () => {
                            ! function(e) {
                                let t = "; ".concat(document.cookie).split("; ".concat(e, "="));
                                if (2 === t.length) return t.pop().split(";").shift()
                            }("googtrans") && function(e, t, s) {
                                let r = new Date;
                                r.setTime(r.getTime() + 864e5), document.cookie = e + "=" + t + ";expires=" + r.toUTCString() + ";path=/"
                            }("googtrans", "/en/en", 0), setTimeout(() => {
                                new window.google.translate.TranslateElement({
                                    pageLanguage: "en",
                                    includedLanguages: "en,fr,de,it,es,pt,ru,pl,cs,da,nl,fi,el,hu,is,ga,lt,lv,mt,no,sk,sl,sv,tr,uk,bg,hr,ro,sr,ar,zh,ja,ko,hi"
                                }, "google_translate_element")
                            }, 1e3)
                        }
                    }, [e]), (0, r.jsxs)("div", {
                        children: [(0, r.jsxs)("a", {
                            onClick: () => t(!0),
                            className: "flex text-white cursor-pointer",
                            children: ["English", " ", (0, r.jsx)(i.default, {
                                src: "/images/language.webp",
                                alt: (0, c.sc)("language-icon"),
                                width: 24,
                                height: 24
                            })]
                        }), (0, r.jsx)("div", {
                            className: "".concat(e ? "block" : "hidden", " px-[10%] md:px-0 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"),
                            children: (0, r.jsxs)("div", {
                                className: "bg-white p-6 rounded-lg shadow-xl w-full max-w-md transform transition-transform duration-300 ease-in-out",
                                children: [(0, r.jsx)("div", {
                                    className: "text-xl font-bold text-center mb-6 text-gray-700",
                                    children: "Select Language"
                                }), (0, r.jsx)("div", {
                                    id: "google_translate_element"
                                }), (0, r.jsx)("span", {
                                    onClick: () => t(!1),
                                    className: " btn w-full mt-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 ",
                                    children: "Close"
                                })]
                            })
                        })]
                    })
                },
                d = e => {
                    let {
                        appUrl: t
                    } = e, s = (0, l.usePathname)();
                    return (0, r.jsx)(r.Fragment, {
                        children: c.mH.some(e => s.includes(e)) ? "" : (0, r.jsxs)("footer", {
                            className: "bg-black",
                            children: [(0, r.jsx)("section", {
                                className: "px-[20px] py-[48px] lg:px-[64px] lg:py-[80px]",
                                children: (0, r.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row justify-center items-center w-full gap-[48px] lg:gap-0",
                                    children: [(0, r.jsx)("a", {
                                        href: "".concat(t),
                                        className: "w-full lg:w-[15%] flex flex-row justify-center lg:justify-start items-center lg:hidden",
                                        children: (0, r.jsx)(i.default, {
                                            src: "/images/footer-logo.webp",
                                            alt: (0, c.sc)("logo"),
                                            width: 0,
                                            height: 0,
                                            sizes: "100vw",
                                            style: {
                                                width: "64px",
                                                height: "auto"
                                            }
                                        })
                                    }), (0, r.jsx)("a", {
                                        href: "".concat(t),
                                        className: "hidden lg:w-[15%] lg:flex flex-row justify-center lg:justify-start items-center",
                                        children: (0, r.jsx)(i.default, {
                                            src: "/images/footer-logo.webp",
                                            alt: (0, c.sc)("logo"),
                                            width: 0,
                                            height: 0,
                                            sizes: "100vw",
                                            style: {
                                                width: "64px",
                                                height: "auto"
                                            }
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-center font-medium text-[13px] lg:text-[14px] text-white gap-[24px] lg:gap-[20px] uppercase tracking-[0.65px] lg:tracking-[0.7px]",
                                        children: [(0, r.jsx)(a.default, {
                                            href: "".concat(t, "/cars-for-sale"),
                                            children: "Cars for sale"
                                        }), (0, r.jsx)(a.default, {
                                            href: "".concat(t, "/bikes-for-sale"),
                                            children: "Bikes for sale"
                                        }), (0, r.jsx)(a.default, {
                                            href: "".concat(t, "/how-it-works"),
                                            children: "How it works"
                                        }), (0, r.jsx)("a", {
                                            href: "".concat(t, "/blog"),
                                            children: "Blog"
                                        }), (0, r.jsx)(a.default, {
                                            href: "".concat(t, "/contact-us"),
                                            children: "Contact Us"
                                        }), (0, r.jsx)(a.default, {
                                            href: "".concat(t, "/live-rates"),
                                            children: "Live Rates"
                                        }), (0, r.jsx)(a.default, {
                                            href: "".concat(t, "/faqs"),
                                            children: "FAQS"
                                        }), (0, r.jsx)(a.default, {
                                            href: "".concat(t, "/secure/register"),
                                            children: "Signup"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "w-full lg:w-[15%] flex flex-row justify-center lg:justify-end items-center gap-[16px]",
                                        children: [(0, r.jsx)(a.default, {
                                            href: "https://t.me/CryptoAutosOfficial",
                                            target: "_blank",
                                            passhref: "true",
                                            rel: "nofollow noopener noreferrer",
                                            children: (0, r.jsx)(i.default, {
                                                src: "/images/telegram.webp",
                                                alt: (0, c.sc)("telegram-logo"),
                                                width: 25,
                                                height: 25
                                            })
                                        }), (0, r.jsx)(a.default, {
                                            href: "https://twitter.com/CryptoAutos_",
                                            target: "_blank",
                                            passhref: "true",
                                            rel: "nofollow noopener noreferrer",
                                            children: (0, r.jsx)(i.default, {
                                                src: "/images/twitter-logo.webp",
                                                alt: (0, c.sc)("twitter-logo"),
                                                width: 0,
                                                height: 0,
                                                sizes: "100vw",
                                                style: {
                                                    width: "17px",
                                                    height: "auto"
                                                }
                                            })
                                        })]
                                    })]
                                })
                            }), (0, r.jsxs)("section", {
                                className: "px-[20px] lg:px-[64px]",
                                children: [(0, r.jsx)("div", {
                                    className: "border-t border-[#333333]"
                                }), (0, r.jsxs)("div", {
                                    className: "flex flex-col gap-[16px]",
                                    children: [(0, r.jsxs)("div", {
                                        className: "pt-[32px] flex flex-col-reverse lg:flex-row justify-between items-center gap-[32px] lg:gap-0",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-full lg:w-[50%] flex flex-row justify-center lg:justify-start items-center",
                                            children: (0, r.jsx)("div", {
                                                className: "text-white",
                                                children: (0, r.jsxs)("span", {
                                                    className: "font-light text-[14px]",
                                                    children: ["Copyright ", new Date().getFullYear(), ". All rights reserved."]
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "w-full lg:w-[50%] flex flex-col lg:flex-row justify-end items-center text-white font-light text-[13px] lg:text-[14px] gap-[16px] lg:gap-[24px]",
                                            children: [(0, r.jsx)(a.default, {
                                                href: "".concat(t, "/sitemap.html"),
                                                children: "Sitemap"
                                            }), (0, r.jsx)(a.default, {
                                                href: "".concat(t, "/privacy-policy"),
                                                children: "Privacy Policy"
                                            }), (0, r.jsx)(a.default, {
                                                href: "".concat(t, "/terms-and-conditions"),
                                                children: "Terms of Service"
                                            }), (0, r.jsx)(a.default, {
                                                href: "".concat(t, "/dealer-signup"),
                                                children: "Dealership Signup"
                                            }), (0, r.jsx)(o, {})]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "pb-[64px] lg:pb-[80px]",
                                        children: (0, r.jsx)("div", {
                                            className: " !text-white !w-full !m-auto gap-3 text-center flex justify-center flex-col",
                                            children: (0, r.jsx)("div", {
                                                className: "text-left text-xs opacity-75",
                                                children: "CryptoAutos is authorized by the Financial Intelligence Unit (FIU) to offer cryptocurrency services under registration number 306351393. Please note that CryptoAutos does not function as a cryptocurrency financial advisor. All information provided on our site reflects our own research or opinions and should not be construed as personal investment advice. We disclaim any responsibility for your cryptocurrency buying, selling, or trading decisions, and we do not offer advisory services in this regard. DigiBlaze UAB is not authorized by the Financial Conduct Authority (FCA) to communicate financial promotions in the UK as part of its business operations. Due to the inherent risks associated with cryptocurrency, please be vigilant against scammers who may attempt to impersonate our company to hack or steal your assets. We will never solicit personal information through social media. If you have any doubts or concerns, please contact us directly via our official email address at hello@cryptoautos.com."
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                }
        },
        97357: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            });
            var r = s(57437),
                a = s(8792),
                l = s(47907),
                n = s(2265),
                i = {
                    src: "/_next/static/media/logo_v1.4828b5f5.webp",
                    height: 28,
                    width: 277,
                    blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAkE1FR0ZIREYAVlA4ICIAAACQAQCdASoIAAEAAkA4JaQAAp1HI1AA/vm5mTtfj7sVgAAA",
                    blurWidth: 8,
                    blurHeight: 1
                },
                c = s(20703),
                o = {
                    src: "/_next/static/media/stars.9a4ace9b.webp",
                    height: 32,
                    width: 33,
                    blurDataURL: "data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAABOX5+ypIQAN0//y5v/nHnj//7iT//+cufFvKh9j5N64/+YQAtD/3nf/z2V+rv+bDdLw/v/x5h4AFJnm7agiAABWUDggIAAAAFABAJ0BKggACAACQDglpAAEAAAA/vlT2ANmRjEhgAAA",
                    blurWidth: 8,
                    blurHeight: 8
                },
                d = {
                    src: "/_next/static/media/search_hands_free.21763e35.webp",
                    height: 32,
                    width: 32,
                    blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD8AAAABYBXbaqO3nbgAJyiJnO31MwKIim3OsBERAV77fhDI3gG080xljEXYsib3pGb6u99qG/H3M018kWo4BTJnuxgAVlA4IBoAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vkdshAAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                u = {
                    src: "/_next/static/media/bike.0f20ac87.webp",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAAAAAAAAAAAAAABMIAEdjAVl7sWMAJLTI///94yJ5TtH//8wUeX5UmrWyfj1+DTAAAAAAMA0AAAAAAAAAAABWUDggGAAAADABAJ0BKggACAACQDglpAADcAD++5zAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                h = {
                    src: "/_next/static/media/car_tag.144ee7e7.webp",
                    height: 33,
                    width: 35,
                    blurDataURL: "data:image/webp;base64,UklGRooAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAaPDUHgAEQjZ8ze3VGT5oL0P2//+qfyQbG1z66TDU8Pv7i1o3ANlW9//LUm0A1+3x8fHvmAB2BgYGBg9wAABWUDggIgAAAFABAJ0BKggACAACQDglpAAEAAAA/vlotuqdwAYr6PcPIAA=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                p = {
                    src: "/_next/static/media/search-icon.729192f7.webp",
                    height: 24,
                    width: 24,
                    blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEAAAAABcBvZttocMUeqgDnUqA+Zme0OGGKM3I/LcxERkSB4OkD1Wd53ID2ATk04ArQTzh4oh7BrhOTnAtVp6n5V/nQAVlA4IBgAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vucwAA=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                m = e => {
                    let t = (0, n.useRef)();
                    return (0, n.useEffect)(() => {
                        let s = s => {
                            t.current && !t.current.contains(s.target) && e()
                        };
                        return document.addEventListener("mousedown", s, {
                            passive: !0
                        }), () => {
                            document.removeEventListener("mousedown", s, {
                                passive: !0
                            })
                        }
                    }, [e]), t
                },
                f = s(14181);
            s(70740);
            var x = s(71126),
                g = s(51947),
                v = function(e) {
                    var t, s;
                    let {
                        mobileMenuOpen: n,
                        setMobileMenuOpen: i,
                        headers: o,
                        appUrl: d
                    } = e, u = (0, x.useSession)(), h = (0, l.useRouter)(), p = async () => {
                        await (0, x.signOut)({
                            redirect: !0
                        }), localStorage.removeItem("vehicles")
                    }, m = async () => {
                        var e, t, s, r, a;
                        let l = await (0, x.getSession)(),
                            n = null == l ? void 0 : null === (e = l.user) || void 0 === e ? void 0 : e.image,
                            i = (null == l ? void 0 : null === (s = l.data) || void 0 === s ? void 0 : null === (t = s.user) || void 0 === t ? void 0 : t.type) == "dealer" ? "".concat("https://partner.cryptoautos.com", "/?access_token=").concat(n) : "".concat("https://buyer.cryptoautos.com", "/login?access_token=").concat(n);
                        if ((null == l ? void 0 : null === (a = l.data) || void 0 === a ? void 0 : null === (r = a.user) || void 0 === r ? void 0 : r.type) == "dealer") {
                            h.push(i);
                            return
                        }
                        let c = (await g.Z.post("".concat("https://caapi.cryptoautos.com", "/api/user/check-profile-step"), {}, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(n),
                                "auth-session-cookie": o.cookie,
                                "XSRF-TOKEN": o.xsrfToken
                            }
                        })).data; - 1 == (c.stepNumber || c.results.stepNumber) ? h.push(i) : h.push("/secure/complete-profile")
                    };
                    return (0, r.jsxs)("div", {
                        className: "fixed top-0 left-0 w-full h-screen bg-black/90 z-[9998] transition-opacity duration-300 ease-in-out ".concat(n ? "block opacity-100" : "hidden opacity-0"),
                        children: [(0, r.jsx)("div", {
                            className: "block md:hidden h-[35px] bg-black"
                        }), (0, r.jsx)("header", {
                            className: "bg-black/20 px-2.5 py-3.5 z-[100] w-full transition-bg duration-2000",
                            children: (0, r.jsx)("div", {
                                className: "w-full",
                                children: (0, r.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [(0, r.jsx)("div", {
                                        className: "flex justify-center",
                                        children: (0, r.jsx)("div", {
                                            children: (0, r.jsx)(c.default, {
                                                src: "/images/site-logo.webp",
                                                alt: (0, f.sc)("logo"),
                                                width: 163,
                                                height: 20
                                            })
                                        })
                                    }), (0, r.jsx)("div", {
                                        children: (0, r.jsx)(c.default, {
                                            src: "/images/close-icon.webp",
                                            alt: (0, f.sc)("close-Icon"),
                                            width: 20,
                                            height: 20,
                                            className: "w-[18px] h-[18px]",
                                            onClick: () => i(!n)
                                        })
                                    })]
                                })
                            })
                        }), (0, r.jsx)("nav", {
                            children: (0, r.jsxs)("ul", {
                                className: "flex flex-col menu-items mt-5 gap-y-8",
                                children: [(0, r.jsx)("li", {
                                    className: "ml-5",
                                    onClick: () => i(!1),
                                    children: (0, r.jsx)("div", {
                                        className: "font-bold text-3xl text-white",
                                        children: (0, r.jsx)(a.default, {
                                            href: "".concat("https://www.cryptoautos.com", "/buy-cars"),
                                            children: "View All Cars"
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "ml-5",
                                    onClick: () => i(!1),
                                    children: (0, r.jsx)("div", {
                                        className: "font-bold text-3xl text-white",
                                        children: (0, r.jsx)(a.default, {
                                            href: "".concat("https://www.cryptoautos.com", "/cars-for-sale"),
                                            children: "Cars For Sale"
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "ml-5",
                                    onClick: () => i(!1),
                                    children: (0, r.jsx)("div", {
                                        className: "font-bold text-3xl text-white",
                                        children: (0, r.jsx)(a.default, {
                                            href: "".concat("https://www.cryptoautos.com", "/bikes-for-sale"),
                                            children: "Bikes For Sale"
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "ml-5",
                                    onClick: () => i(!1),
                                    children: (0, r.jsx)("div", {
                                        className: "font-bold text-3xl text-white",
                                        children: (0, r.jsx)(a.default, {
                                            href: "".concat("https://www.cryptoautos.com", "/partner-dealers"),
                                            children: "Dealerships"
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "ml-5",
                                    onClick: () => i(!1),
                                    children: (0, r.jsx)("div", {
                                        className: "font-bold text-3xl text-white",
                                        children: (0, r.jsx)(a.default, {
                                            href: "".concat("https://www.cryptoautos.com", "/about-us"),
                                            children: "About Us"
                                        })
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "ml-5",
                                    onClick: () => i(!1),
                                    children: (0, r.jsx)("div", {
                                        className: "font-bold text-3xl text-white",
                                        children: (0, r.jsx)(a.default, {
                                            href: "".concat("https://www.cryptoautos.com", "/blog"),
                                            children: "Blogs"
                                        })
                                    })
                                }), (null == u ? void 0 : null === (s = u.data) || void 0 === s ? void 0 : null === (t = s.user) || void 0 === t ? void 0 : t.image) ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("li", {
                                        className: "ml-5",
                                        onClick: () => i(!1),
                                        children: (0, r.jsx)("div", {
                                            onClick: m,
                                            className: "py-3 font-bold text-3xl text-red-500",
                                            children: (0, r.jsx)("div", {
                                                className: "label relative text-white",
                                                children: "My Account"
                                            })
                                        })
                                    }), (0, r.jsx)("li", {
                                        className: "ml-5 mb-5",
                                        onClick: () => {
                                            i(!1), p()
                                        },
                                        children: (0, r.jsx)("div", {
                                            className: "",
                                            children: (0, r.jsx)("div", {
                                                type: "button",
                                                className: "btn w-[125px] p-2",
                                                children: "Logout"
                                            })
                                        })
                                    })]
                                }) : (0, r.jsxs)("div", {
                                    className: "flex flex-row",
                                    children: [(0, r.jsx)("li", {
                                        className: "ml-5 mb-5",
                                        onClick: () => i(!1),
                                        children: (0, r.jsx)(a.default, {
                                            href: "".concat(d, "/secure/login"),
                                            children: (0, r.jsx)("span", {
                                                className: "btn w-[125px] p-2",
                                                children: "Login"
                                            })
                                        })
                                    }), (0, r.jsx)("li", {
                                        className: "ml-5 mb-5",
                                        onClick: () => i(!1),
                                        children: (0, r.jsx)(a.default, {
                                            href: "".concat(d, "/secure/register"),
                                            children: (0, r.jsx)("span", {
                                                className: "btn w-[125px] p-2",
                                                children: "Signup"
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                b = s(63019),
                A = e => {
                    var t, s;
                    let {
                        sidebarOpen: i,
                        setSidebarOpen: o,
                        mobileMenuOpen: d,
                        setMobileMenuOpen: u,
                        headers: h,
                        appUrl: p
                    } = e, {
                        pathname: m
                    } = (0, l.useRouter)(), A = (0, n.useRef)(null), w = (0, x.useSession)(), j = (0, l.useRouter)(), y = () => {
                        o(!1)
                    }, k = e => {
                        A.current && !A.current.contains(e.target) && y()
                    }, N = async () => {
                        var e, t, s, r, a;
                        let l = await (0, x.getSession)(),
                            n = null == l ? void 0 : null === (e = l.user) || void 0 === e ? void 0 : e.image,
                            i = (null == l ? void 0 : null === (s = l.data) || void 0 === s ? void 0 : null === (t = s.user) || void 0 === t ? void 0 : t.type) == "dealer" ? "".concat("https://partner.cryptoautos.com", "/?access_token=").concat(n) : "".concat("https://buyer.cryptoautos.com", "/login?access_token=").concat(n);
                        if ((null == l ? void 0 : null === (a = l.data) || void 0 === a ? void 0 : null === (r = a.user) || void 0 === r ? void 0 : r.type) == "dealer") {
                            j.push(i);
                            return
                        }
                        let c = (await g.Z.post("".concat("https://caapi.cryptoautos.com", "/api/user/check-profile-step"), {}, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(n),
                                "auth-session-cookie": h.cookie,
                                "XSRF-TOKEN": h.xsrfToken
                            }
                        })).data; - 1 == (c.stepNumber || c.results.stepNumber) ? j.push(i) : j.push("/secure/complete-profile")
                    }, C = () => {
                        y()
                    };
                    (0, n.useEffect)(() => (document.addEventListener("mousedown", k, {
                        passive: !0
                    }), window.addEventListener("scroll", C, {
                        passive: !0
                    }), () => {
                        document.removeEventListener("mousedown", k, {
                            passive: !0
                        }), window.removeEventListener("scroll", C, {
                            passive: !0
                        })
                    }), []);
                    let E = async () => {
                        await (0, x.signOut)({
                            redirect: !0
                        })
                    };
                    return (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("span", {
                            className: "!flex !justify-center !m-auto items-center align-middle lg:pl-5",
                            onClick: () => {
                                if (b.tq) {
                                    u(!d);
                                    return
                                }
                                o(!i)
                            },
                            children: (0, r.jsx)("div", {
                                className: "flex flex-row justify-center items-center gap-x-2 cursor-pointer",
                                children: (0, r.jsx)("div", {
                                    className: "px-3",
                                    children: i ? (0, r.jsx)(c.default, {
                                        src: "/images/close-icon.webp",
                                        alt: (0, f.sc)("close-Icon"),
                                        width: 20,
                                        height: 20,
                                        className: "w-[18px] h-[18px]"
                                    }) : (0, r.jsx)(r.Fragment, {
                                        children: (0, r.jsxs)("div", {
                                            className: "flex flex-row justify-center items-center gap-[8px]",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-full md:w-1/2 flex justify-center items-center",
                                                children: (0, r.jsx)(c.default, {
                                                    src: "/images/hamburger.webp",
                                                    alt: (0, f.sc)("hamburger-Icon"),
                                                    width: 20,
                                                    height: 20
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "hidden md:flex w-1/2  justify-center items-center",
                                                children: (0, r.jsx)("span", {
                                                    className: "font-medium text-[14px] text-white md:uppercase tracking-[0.65px] md:tracking-[0.7px]",
                                                    children: "Menu"
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        }), (0, r.jsx)("nav", {
                            id: "sidebar",
                            className: "main_menu h-auto w-0 fixed z-[999] top-0 right-0 bg-black bg-opacity-97 overflow-x-hidden transition-all duration-500 mt-15 md:mt-20 text-nowrap ".concat(i ? "open" : ""),
                            ref: A,
                            children: (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    className: "list-none block align-top uppercase border-b border-[#333] " + m == "/buy-cars" ? "text-center text-[#ff2325]" : "",
                                    onClick: y,
                                    children: (0, r.jsx)(a.default, {
                                        href: "".concat(p, "/buy-cars"),
                                        children: "View All Cars"
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "list-none block align-top uppercase border-b border-[#333] " + m == "/cars-for-sale" ? "text-center text-[#ff2325]" : "",
                                    onClick: y,
                                    children: (0, r.jsx)(a.default, {
                                        href: "".concat(p, "/cars-for-sale"),
                                        children: "Cars For Sale"
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "list-none block align-top uppercase border-b border-[#333] " + m == "/bikes-for-sale" ? "text-center text-[#ff2325]" : "",
                                    onClick: y,
                                    children: (0, r.jsx)(a.default, {
                                        href: "".concat(p, "/bikes-for-sale"),
                                        children: "Bikes For Sale"
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "list-none block align-top uppercase border-b border-[#333] " + m == "/dealer" ? "text-[#ff2325]" : "",
                                    onClick: y,
                                    children: (0, r.jsx)(a.default, {
                                        href: "".concat(p, "/partner-dealers"),
                                        children: "Dealerships"
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "list-none block align-top uppercase border-b border-[#333] " + m == "/about-us" ? "text-[#ff2325]" : "",
                                    onClick: y,
                                    children: (0, r.jsx)(a.default, {
                                        href: "".concat("https://www.cryptoautos.com", "/about-us"),
                                        children: "About Us"
                                    })
                                }), (0, r.jsx)("li", {
                                    className: "list-none block align-top uppercase border-b border-[#333] " + m == "/blog" ? "text-[#ff2325]" : "",
                                    onClick: y,
                                    children: (0, r.jsx)("a", {
                                        href: "".concat("https://www.cryptoautos.com", "/blog"),
                                        children: "Blogs"
                                    })
                                }), (null == w ? void 0 : null === (s = w.data) || void 0 === s ? void 0 : null === (t = s.user) || void 0 === t ? void 0 : t.image) ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("li", {
                                        className: "list-none block align-top uppercase border-b border-[#333] " + m == "/blog" ? "text-[#ff2325]" : "",
                                        onClick: y,
                                        children: (0, r.jsx)(a.default, {
                                            href: "#",
                                            onClick: N,
                                            children: "My Account"
                                        })
                                    }), (0, r.jsx)("li", {
                                        onClick: E,
                                        children: (0, r.jsx)(a.default, {
                                            href: "#",
                                            children: "Signout"
                                        })
                                    })]
                                }) : (0, r.jsx)("li", {
                                    className: "",
                                    onClick: y,
                                    children: (0, r.jsxs)("div", {
                                        className: "flex flex-row w-full text-center items-center",
                                        children: [(0, r.jsx)("div", {
                                            className: "hover:font-bold hover:text-white w-[50%] border-r border-white",
                                            children: (0, r.jsx)(a.default, {
                                                href: "".concat("https://www.cryptoautos.com", "/secure/login"),
                                                children: "Login"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "hover:font-bold hover:text-white w-[50%]",
                                            children: (0, r.jsx)(a.default, {
                                                href: "".concat("https://www.cryptoautos.com", "/secure/register"),
                                                children: "Signup"
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, r.jsx)(v, {
                            mobileMenuOpen: d,
                            setMobileMenuOpen: u,
                            headers: h,
                            appUrl: p
                        })]
                    })
                },
                w = s(30348);

            function j() {
                let e = (0, l.usePathname)();
                return (0, n.useEffect)(() => {
                    window.scrollTo(0, 0)
                }, [e]), null
            }
            var y = s(37448),
                k = s(73107),
                N = n.memo(e => {
                    let {
                        headers: t,
                        appUrl: x
                    } = e, g = (0, l.useSearchParams)().get("search") || "", [v, b] = (0, n.useState)(!1), [N, C] = (0, n.useState)(!1), [E, F] = (0, n.useState)([]), [S, _] = n.useState(g), [B, T] = (0, n.useState)(!1), [I, U] = (0, n.useState)(!1), [P, L] = (0, n.useState)(!1), [R, Q] = (0, n.useState)(null), D = (0, n.useRef)(null), O = (0, n.useCallback)(e => {
                        D.current && !D.current.contains(e.target) && b(!1)
                    }, []);
                    (0, n.useEffect)(() => (document.addEventListener("mousedown", O, {
                        passive: !0
                    }), () => {
                        document.removeEventListener("mousedown", O, {
                            passive: !0
                        })
                    }), []), (0, n.useEffect)(() => {
                        window.$ = window.jQuery = s(17702)
                    }, []), (0, n.useEffect)(() => {
                        _(g)
                    }, [g]);
                    let z = (0, n.useRef)(null),
                        M = (0, n.useCallback)(() => {
                            C(!1)
                        }, []),
                        W = (0, n.useCallback)(e => {
                            z.current && !z.current.contains(e.target) && M()
                        }, [M]),
                        K = (0, n.useCallback)(() => {
                            M()
                        }, [M]);
                    (0, n.useEffect)(() => (document.addEventListener("mousedown", W, {
                        passive: !0
                    }), window.addEventListener("scroll", K, {
                        passive: !0
                    }), () => {
                        document.removeEventListener("mousedown", W, {
                            passive: !0
                        }), window.removeEventListener("scroll", K, {
                            passive: !0
                        })
                    }), []);
                    let X = (0, l.useRouter)(),
                        q = (0, l.usePathname)(),
                        G = (0, n.useCallback)(e => {
                            _(e.target.value)
                        }, []);
                    (0, n.useEffect)(() => {
                        k.Z.get("".concat("https://json.cryptoautos.com", "/featured-vehicles.json")).then(e => {
                            F(H(e.data.results, 3))
                        }).catch(e => {
                            console.error("Error fetching data: ", e)
                        })
                    }, []);
                    let H = (0, n.useCallback)((e, t) => [...e].sort(() => .5 - Math.random()).slice(0, t), []),
                        V = m(() => b(!1)),
                        J = (0, n.useCallback)(() => {
                            b(e => !e)
                        }, []),
                        Z = (0, n.useCallback)(() => {
                            b(!1)
                        }, []),
                        Y = (0, n.useCallback)(e => {
                            e.preventDefault(), b(!1);
                            let t = "/buy-cars?";
                            (null == S ? void 0 : S.trim()) !== "" ? X.push("".concat(t, "search=").concat(S)): X.push("".concat(t))
                        }, [S]),
                        $ = (0, n.useCallback)(e => {
                            v && "Enter" === e.key && (Y(e), Z())
                        }, [v, Y]);
                    (0, n.useEffect)(() => {
                        let e = e => {
                            v && "Enter" === e.key && Y(e)
                        };
                        return window.addEventListener("keydown", e, {
                            passive: !0
                        }), () => {
                            window.removeEventListener("keydown", e, {
                                passive: !0
                            })
                        }
                    }, [X, S]), (0, n.useEffect)(() => {
                        (async () => {
                            Q(await (0, f.wK)())
                        })()
                    }, []);
                    let ee = (0, n.useMemo)(() => "/how-it-works" === q || "/partner-dealers" === q || q.startsWith("/bike/") || q.startsWith("/mk/"), [q]),
                        et = (0, n.useMemo)(() => "/how-it-works" === q, [q]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(j, {}), f.mH.some(e => q.includes(e)) ? (0, r.jsx)("header", {
                            className: "bg-black py-[15px] border-b border-t border-white/20 sticky top-0 right-0 left-0 z-[9999]",
                            children: (0, r.jsx)("div", {
                                className: "flex flex-row justify-center",
                                children: (0, r.jsx)("a", {
                                    href: "".concat(x),
                                    children: (0, r.jsx)(c.default, {
                                        src: i,
                                        alt: (0, f.sc)("Logo")
                                    })
                                })
                            })
                        }) : (0, r.jsx)(r.Fragment, {
                            children: q.includes("search") ? null : (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)("header", {
                                    className: "p-0 flex justify-center ".concat(ee ? P ? "absolute w-full left-0 top-0 z-[99] ".concat(et ? "bg-black/20 border-b-0" : "border-b border-white/20 border-t") : "fixed w-full left-0 top-0 z-[99] ".concat(et ? "bg-black/20 border-b-0" : "border-b border-white/20 border-t") : "sticky top-0 left-0 right-0 z-[9999] bg-black py-[15px] border-b border-white/20 border-t"),
                                    children: (0, r.jsxs)("div", {
                                        ref: V,
                                        className: "flex flex-row justify-between item-center w-full ".concat(ee && "fixed top-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-[20px] border-b-0"),
                                        children: [(0, r.jsx)("div", {
                                            className: "md:w-[20%] flex flex-row items-center justify-center px-3 md:p-0 cursor-pointer",
                                            children: (0, r.jsx)("a", {
                                                href: "".concat(x),
                                                children: (0, r.jsx)(c.default, {
                                                    src: "/images/site-logo.webp",
                                                    alt: (0, f.sc)("logo"),
                                                    width: 163,
                                                    height: 20
                                                })
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "hidden md:w-[80%] md:flex justify-center p-4 md:border-x md:border-white/[.2]",
                                            children: (0, r.jsxs)("div", {
                                                className: "bg-white relative rounded w-[75%] px-3 py-[14.5px]",
                                                children: [(0, r.jsx)("input", {
                                                    id: "searchText",
                                                    name: "searchText",
                                                    type: "text",
                                                    placeholder: "Try ‘Black Porsche 911’",
                                                    className: "".concat(v ? "invisible" : "", " block w-full rounded border-0 text-base font-normal text-black placeholder:text-black/50"),
                                                    onClick: J,
                                                    value: S,
                                                    onKeyDown: $,
                                                    maxLength: 60,
                                                    onChange: G
                                                }), (0, r.jsx)("div", {
                                                    className: "absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",
                                                    children: (0, r.jsx)(a.default, {
                                                        href: "".concat(x, "/buy-cars"),
                                                        children: (0, r.jsx)(c.default, {
                                                            src: p,
                                                            onClick: Y,
                                                            alt: (0, f.sc)("Search Icon")
                                                        })
                                                    })
                                                }), v && (0, r.jsxs)("div", {
                                                    className: "bg-white rounded-t-lg rounded-b-lg w-full p-[30px] absolute left-0 top-[0px] z-[9]",
                                                    ref: D,
                                                    children: [(0, r.jsxs)("div", {
                                                        className: "relative",
                                                        children: [(0, r.jsx)("input", {
                                                            id: "searchText",
                                                            name: "searchText",
                                                            type: "text",
                                                            autoFocus: !0,
                                                            placeholder: "Try ‘Black Porsche 911’",
                                                            className: "block w-full rounded border-0 text-base font-normal text-black placeholder:text-black/50 py-[10px] px-[5px] focus-visible:outline focus-visible:outline-black focus-visible:outline-2",
                                                            value: S,
                                                            onKeyDown: $,
                                                            maxLength: 60,
                                                            onChange: G
                                                        }), (0, r.jsx)("div", {
                                                            className: "absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",
                                                            children: (0, r.jsx)(a.default, {
                                                                href: "".concat(x, "/buy-cars"),
                                                                children: (0, r.jsx)(c.default, {
                                                                    src: p,
                                                                    onClick: Y,
                                                                    alt: (0, f.sc)("Search Icon")
                                                                })
                                                            })
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: "relative flex items-center justify-center",
                                                        children: [(0, r.jsx)("hr", {
                                                            className: "w-full h-px my-8 border-0 bg-gray-700"
                                                        }), (0, r.jsx)("span", {
                                                            className: "absolute px-3 text-black bg-white text-sm font-normal left-1/2 transform -translate-x-1/2 uppercase whitespace-nowrap tracking-[0.7px]",
                                                            children: "Or Select a category"
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: "flex flex-row justify-between gap-2",
                                                        children: [(0, r.jsx)("div", {
                                                            onClick: Z,
                                                            className: "w-full bg-[#F4F6FC] rounded justify-center items-center",
                                                            children: (0, r.jsx)(a.default, {
                                                                href: "".concat(x, "/buy-cars?category=popular"),
                                                                children: (0, r.jsxs)("div", {
                                                                    className: "flex flex-col justify-center items-center gap-2 py-8",
                                                                    children: [(0, r.jsx)("div", {
                                                                        className: "",
                                                                        children: (0, r.jsx)(c.default, {
                                                                            src: o,
                                                                            alt: (0, f.sc)("Star"),
                                                                            loading: "lazy"
                                                                        })
                                                                    }), (0, r.jsx)("span", {
                                                                        className: "font-medium text-sm",
                                                                        children: "Popular"
                                                                    })]
                                                                })
                                                            })
                                                        }), (0, r.jsx)("div", {
                                                            onClick: Z,
                                                            className: "w-full bg-[#F4F6FC] rounded justify-center items-center",
                                                            children: (0, r.jsx)(a.default, {
                                                                href: "".concat(x, "/buy-cars?category=supercar"),
                                                                passhref: "true",
                                                                children: (0, r.jsxs)("div", {
                                                                    className: "flex flex-col justify-center items-center gap-2 py-8",
                                                                    children: [(0, r.jsx)("div", {
                                                                        className: "",
                                                                        children: (0, r.jsx)(c.default, {
                                                                            src: d,
                                                                            alt: (0, f.sc)("Steer"),
                                                                            loading: "lazy"
                                                                        })
                                                                    }), (0, r.jsx)("span", {
                                                                        className: "font-medium text-sm",
                                                                        children: "Supercar"
                                                                    })]
                                                                })
                                                            })
                                                        }), (0, r.jsx)("div", {
                                                            onClick: Z,
                                                            className: "w-full bg-[#F4F6FC] rounded justify-center items-center",
                                                            children: (0, r.jsx)(a.default, {
                                                                href: "".concat(x, "/buy-cars?category=newcars"),
                                                                passhref: "true",
                                                                children: (0, r.jsxs)("div", {
                                                                    className: "flex flex-col justify-center items-center gap-2 py-8",
                                                                    children: [(0, r.jsx)("div", {
                                                                        className: "",
                                                                        children: (0, r.jsx)(c.default, {
                                                                            src: h,
                                                                            alt: (0, f.sc)("Car Tag"),
                                                                            loading: "lazy"
                                                                        })
                                                                    }), (0, r.jsx)("span", {
                                                                        className: "font-medium text-sm",
                                                                        children: "New cars"
                                                                    })]
                                                                })
                                                            })
                                                        }), (0, r.jsx)("div", {
                                                            onClick: Z,
                                                            className: "w-full bg-[#F4F6FC] rounded justify-center items-center",
                                                            children: (0, r.jsx)(a.default, {
                                                                href: "".concat(x, "/buy-bikes"),
                                                                passhref: "true",
                                                                children: (0, r.jsxs)("div", {
                                                                    className: "flex flex-col justify-center items-center gap-2 py-8",
                                                                    children: [(0, r.jsx)("div", {
                                                                        className: "",
                                                                        children: (0, r.jsx)(c.default, {
                                                                            src: u,
                                                                            alt: (0, f.sc)("Bike Tag"),
                                                                            loading: "lazy",
                                                                            width: 32,
                                                                            height: 32
                                                                        })
                                                                    }), (0, r.jsx)("span", {
                                                                        className: "font-medium text-sm",
                                                                        children: "Bikes"
                                                                    })]
                                                                })
                                                            })
                                                        })]
                                                    }), (0, r.jsxs)("div", {
                                                        className: "",
                                                        children: [(0, r.jsxs)("div", {
                                                            className: "relative flex items-center justify-center",
                                                            children: [(0, r.jsx)("hr", {
                                                                className: "w-full h-px my-8 border-0 bg-gray-700"
                                                            }), (0, r.jsx)("span", {
                                                                className: "absolute px-3 text-black bg-white text-sm font-normal left-1/2 transform -translate-x-1/2 uppercase whitespace-nowrap tracking-[0.7px]",
                                                                children: "Most Viewed"
                                                            })]
                                                        }), (0, r.jsx)("div", {
                                                            className: "flex flex-row w-full gap-[4px] md:!gap-[6px] lg:!gap-[8px] xl:!gap-[10px] 2xl:gap-[20px]",
                                                            children: E.slice(0, 3).map((e, t) => {
                                                                var s, l, n, i;
                                                                let c = (0, w.K5)(null == e ? void 0 : e.price, "BTC", null == R ? void 0 : R.crypto_rates),
                                                                    o = (0, w.K5)(null == e ? void 0 : e.price, "TON", null == R ? void 0 : R.crypto_rates),
                                                                    d = (0, w.f$)(null == e ? void 0 : e.price, "usd", null == R ? void 0 : R.fiat_rates),
                                                                    u = (0, w.f$)(null == e ? void 0 : e.price, "gbp", null == R ? void 0 : R.fiat_rates);
                                                                return (0, r.jsx)(r.Fragment, {
                                                                    children: (0, r.jsx)("div", {
                                                                        className: "w-1/3 rounded-lg  pb-4",
                                                                        onClick: Z,
                                                                        children: (0, r.jsx)(a.default, {
                                                                            href: {
                                                                                pathname: "".concat(x, "/buy-with-bitcoin/").concat(null == e ? void 0 : e.vehicle_slug)
                                                                            },
                                                                            children: (0, r.jsxs)("div", {
                                                                                className: "text-center flex flex-col gap-[12px]",
                                                                                children: [(0, r.jsx)("div", {
                                                                                    children: (0, r.jsx)(y.default, {
                                                                                        src: null == e ? void 0 : null === (s = e.image) || void 0 === s ? void 0 : s.internal,
                                                                                        fallbackSrc: null == e ? void 0 : null === (n = e.image) || void 0 === n ? void 0 : null === (l = n.internal) || void 0 === l ? void 0 : l.replace("/medium", ""),
                                                                                        externalImage: "".concat("https://ca-sb.ams3.digitaloceanspaces.com/dealer/favicons/").concat(null == e ? void 0 : null === (i = e.image) || void 0 === i ? void 0 : i.external),
                                                                                        alt: "".concat(null == e ? void 0 : e.make, " ").concat(null == e ? void 0 : e.model),
                                                                                        className: "w-full h-[150px] object-cover rounded"
                                                                                    })
                                                                                }), (0, r.jsxs)("div", {
                                                                                    className: "",
                                                                                    children: [(0, r.jsxs)("div", {
                                                                                        className: "tracking-[0.7px] flex flex-row text-[12px] text-black font-medium justify-left uppercase text-nowrap",
                                                                                        children: [(0, r.jsx)("span", {
                                                                                            className: "font-semibold mr-2",
                                                                                            children: "".concat(null == e ? void 0 : e.make)
                                                                                        }), (0, r.jsx)("span", {
                                                                                            className: "font-semibold",
                                                                                            children: null == e ? void 0 : e.model
                                                                                        })]
                                                                                    }), (0, r.jsx)("div", {
                                                                                        className: "justify-evenly text-[10px] tracking-[0.6px] flex font-medium flex-row text-left gap-[10px] text-[#FF2325] whitespace-nowrap",
                                                                                        children: parseFloat(null == e ? void 0 : e.price) ? (0, r.jsx)(r.Fragment, {
                                                                                            children: (0, r.jsxs)("div", {
                                                                                                className: "flex flex-row w-full justify-between",
                                                                                                children: [(0, r.jsxs)("div", {
                                                                                                    className: "flex flex-col",
                                                                                                    children: [(0, r.jsx)("span", {
                                                                                                        className: "",
                                                                                                        children: "".concat(c, " BTC")
                                                                                                    }), (0, r.jsx)("span", {
                                                                                                        className: "",
                                                                                                        children: "".concat(Math.floor(parseFloat(o)).toLocaleString(), " TON")
                                                                                                    })]
                                                                                                }), (0, r.jsxs)("div", {
                                                                                                    className: "flex flex-col",
                                                                                                    children: [(0, r.jsx)("span", {
                                                                                                        className: "",
                                                                                                        children: "\xa3 ".concat(u)
                                                                                                    }), (0, r.jsx)("span", {
                                                                                                        className: "",
                                                                                                        children: "$ ".concat(d)
                                                                                                    })]
                                                                                                })]
                                                                                            })
                                                                                        }) : (0, r.jsx)(r.Fragment, {
                                                                                            children: (0, r.jsx)("span", {
                                                                                                className: "w-full",
                                                                                                children: "POA"
                                                                                            })
                                                                                        })
                                                                                    })]
                                                                                })]
                                                                            })
                                                                        })
                                                                    }, t)
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "md:w-[20%] flex justify-center",
                                            children: (0, r.jsxs)("div", {
                                                className: "flex flex-wrap justify-end items-center relative",
                                                children: [(0, r.jsx)("div", {
                                                    className: "cursor-pointer md:px-0 md:hidden relative  text-white text-[20px] p-3 border-x border-white/[.2]",
                                                    onClick: () => X.push("/search"),
                                                    children: (0, r.jsx)(c.default, {
                                                        src: "/images/search-responsive.webp",
                                                        onClick: Y,
                                                        alt: (0, f.sc)("Search Icon"),
                                                        width: 20,
                                                        height: 20
                                                    })
                                                }), (0, r.jsx)(A, {
                                                    sidebarOpen: I,
                                                    setSidebarOpen: U,
                                                    mobileMenuOpen: P,
                                                    setMobileMenuOpen: L,
                                                    headers: t,
                                                    appUrl: x
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
        },
        73589: function(e, t, s) {
            "use strict";
            s.d(t, {
                Xx: function() {
                    return l
                },
                uM: function() {
                    return i
                },
                yh: function() {
                    return n
                }
            });
            var r = s(43741),
                a = s(27230);
            let l = (0, r.LC)({
                    reducerPath: "userInfoApi",
                    baseQuery: (0, a.ni)({
                        baseUrl: "/"
                    }),
                    endpoints: e => ({
                        fetchIpAddress: e.query({
                            query: () => "https://api.ipify.org?format=json"
                        }),
                        fetchLocation: e.query({
                            queryFn: async () => {
                                try {
                                    let e = await fetch("https://ipwho.is/"),
                                        t = await e.json();
                                    if (!t.success) throw Error(t.message);
                                    let {
                                        latitude: s,
                                        longitude: r,
                                        city: a,
                                        region: l,
                                        country: n
                                    } = t;
                                    return {
                                        data: {
                                            latitude: s,
                                            longitude: r,
                                            address: "".concat(a, ", ").concat(l, ", ").concat(n)
                                        }
                                    }
                                } catch (e) {
                                    return {
                                        error: {
                                            message: "Failed to fetch location: ".concat(e.message)
                                        }
                                    }
                                }
                            }
                        })
                    })
                }),
                {
                    useFetchIpAddressQuery: n,
                    useFetchLocationQuery: i
                } = l
        },
        13115: function(e, t, s) {
            "use strict";
            s.d(t, {
                L: function() {
                    return r
                }
            });
            let r = (0, s(46608).PH)("vehicles/liveRates", e => ({
                payload: e
            }))
        },
        41268: function(e, t, s) {
            "use strict";
            s.d(t, {
                F: function() {
                    return r
                }
            });
            let r = (0, s(46608).PH)("user/favorites", e => ({
                payload: e
            }))
        },
        27185: function(e, t, s) {
            "use strict";
            s.d(t, {
                h: function() {
                    return v
                }
            });
            var r = s(46608),
                a = s(33646),
                l = s(13115),
                n = (0, r.oM)({
                    name: "liveRates",
                    initialState: {
                        crypto_rates: [],
                        fiat_rates: [],
                        error: null
                    },
                    reducers: {},
                    extraReducers: e => {
                        e.addCase(l.L, (e, t) => {
                            e.error = null, t.payload && (e.crypto_rates = t.payload.crypto_rates.map(e => ({ ...e,
                                name: e.name
                            })), e.fiat_rates = t.payload.fiat_rates.map(e => ({ ...e,
                                name: e.name
                            })))
                        })
                    }
                }).reducer,
                i = s(43741),
                c = s(27230);
            let o = (0, i.LC)({
                    reducerPath: "contactUs",
                    baseQuery: (0, c.ni)({
                        baseUrl: "https://caapi.cryptoautos.com/api/"
                    }),
                    endpoints: e => ({
                        enquiryStore: e.mutation({
                            query: e => ({
                                url: "enquiry-store",
                                method: "POST",
                                body: e
                            })
                        }),
                        getContactFormData: e.query({
                            query: e => ({
                                url: "ContactFormData",
                                headers: {
                                    "auth-session-cookie": e.cookie,
                                    "XSRF-TOKEN": e.xsrfToken
                                }
                            })
                        })
                    })
                }),
                {
                    useEnquiryStoreMutation: d,
                    useGetContactFormDataQuery: u
                } = o,
                h = (0, i.LC)({
                    reducerPath: "makeDetails",
                    baseQuery: (0, c.ni)({
                        baseUrl: "https://cadevapi.cryptoautos.com/api/makeDetail/buy-aston-martin-with-bitcoin"
                    }),
                    endpoints: e => ({
                        getMakeDetail: e.query({
                            query: () => ""
                        })
                    })
                }),
                {
                    useGetMakeDetailQuery: p
                } = h;
            var m = s(73589),
                f = s(41268),
                x = (0, r.oM)({
                    name: "userFavorites",
                    initialState: {
                        data: []
                    },
                    reducers: {},
                    extraReducers: e => {
                        e.addCase(f.F, (e, t) => {
                            e.error = null, t.payload && (e.userFavorites = t.payload)
                        })
                    }
                }).reducer;
            let g = (0, a.UY)({
                    userFavorites: x,
                    liveRates: n,
                    [o.reducerPath]: o.reducer,
                    [m.Xx.reducerPath]: m.Xx.reducer,
                    [h.reducerPath]: h.reducer
                }),
                v = (0, r.xC)({
                    reducer: g,
                    middleware: e => e().concat(m.Xx.middleware, o.middleware, h.middleware)
                })
        },
        51947: function(e, t, s) {
            "use strict";
            let r = s(73107).Z.create({
                baseURL: "https://caapi.cryptoautos.com",
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json"
                }
            });
            t.Z = r
        },
        14181: function(e, t, s) {
            "use strict";
            s.d(t, {
                Kx: function() {
                    return m
                },
                ah: function() {
                    return p
                },
                c6: function() {
                    return h
                },
                mH: function() {
                    return g
                },
                px: function() {
                    return i
                },
                rb: function() {
                    return l
                },
                sc: function() {
                    return o
                },
                wK: function() {
                    return u
                },
                wU: function() {
                    return f
                },
                wc: function() {
                    return x
                },
                wy: function() {
                    return d
                },
                xG: function() {
                    return v
                },
                yE: function() {
                    return c
                }
            });
            var r = s(73107),
                a = s(51947);

            function l(e, t) {
                var s = e.split("").sort(function() {
                    return .5 - Math.random()
                }).join("");
                return t > 0 && (s = s.substr(0, t)), s
            }
            let n = [0, 100, 500, 5e3, 1e4, 15e3, 2e4, 25e3, 3e4, 35e3, 4e4, 45e3, 5e4, 6e4, 7e4, 8e4, 9e4, 1e5, 125e3, 15e4, 175e3, 2e5];

            function i(e, t, s, r) {
                let a = n.filter(e => e < s).pop() || 0,
                    l = n.find(e => e > r) || n[n.length - 1];
                return {
                    minMileageOptions: n.filter(e => e >= a && e < (t || l)),
                    maxMileageOptions: n.filter(t => t > (e || a) && t <= l)
                }
            }
            let c = {
                    page: "",
                    make: "",
                    makeId: "",
                    model: "",
                    modelId: "",
                    colour: "",
                    colourId: "",
                    transmission: "",
                    transmissionId: "",
                    fuelType: "",
                    fuelTypeId: "",
                    minYear: "",
                    minMileage: "",
                    maxMileage: "",
                    minPrice: "",
                    maxPrice: "",
                    dealerId: "",
                    category: "",
                    sort: ""
                },
                o = e => "CryptoAutos: ".concat(null != e ? e : ""),
                d = async (e, t, s) => {
                    try {
                        let r = e.map(e => e.id);
                        await a.Z.post("".concat("https://caapi.cryptoautos.com", "/api/user/user-wishlist"), {
                            sessionWishList: r
                        }, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(t),
                                "auth-session-cookie": s.cookie,
                                "XSRF-TOKEN": s.xsrfToken
                            }
                        }), localStorage.removeItem("vehicles");
                        return
                    } catch (e) {
                        throw console.error("Failed to sync wishlist:", e), Error("Error syncing wishlist")
                    }
                },
                u = async () => {
                    try {
                        let e = await a.Z.get("".concat("https://json.cryptoautos.com", "/live-rates.json"));
                        return {
                            crypto_rates: Object.entries(e.data.results.crypto_rates).map(e => {
                                let [t, s] = e;
                                return {
                                    code: t,
                                    rates: s
                                }
                            }),
                            fiat_rates: Object.entries(e.data.results.fiat_rates).map(e => {
                                let [t, s] = e;
                                return {
                                    code: t,
                                    rates: s
                                }
                            })
                        }
                    } catch (e) {
                        console.error("Error fetching live rates:", e)
                    }
                },
                h = async (e, t) => {
                    try {
                        return (await a.Z.post("".concat("https://caapi.cryptoautos.com", "/api/user/user-wishlist"), {}, {
                            headers: {
                                Authorization: "Bearer ".concat(e),
                                "Content-Type": "application/json",
                                "auth-session-cookie": t.cookie,
                                "XSRF-TOKEN": t.xsrfToken
                            }
                        })).data.results
                    } catch (e) {
                        return []
                    }
                },
                p = async () => {
                    try {
                        var e;
                        let t = await r.Z.get("https://api.ipify.org?format=json");
                        return (null === (e = t.data) || void 0 === e ? void 0 : e.ip) || ""
                    } catch (e) {
                        return console.error("Error fetching IP address:", e), ""
                    }
                },
                m = async e => {
                    try {
                        let e = await fetch("https://ipwho.is/"),
                            t = await e.json();
                        if (!t.success) throw Error(t.message);
                        return {
                            latitude: t.latitude,
                            longitude: t.longitude,
                            address: "".concat(t.city, ", ").concat(t.region, ", ").concat(t.country)
                        }
                    } catch (e) {
                        return console.error("Error fetching location:", e), {}
                    }
                },
                f = async e => {
                    try {
                        var t, s, r;
                        let l = await a.Z.get("".concat("https://caapi.cryptoautos.com").concat(e)),
                            n = null == l ? void 0 : null === (t = l.data) || void 0 === t ? void 0 : t.results["XSRF-TOKEN"],
                            i = null == l ? void 0 : null === (r = l.data) || void 0 === r ? void 0 : null === (s = r.results) || void 0 === s ? void 0 : s.cookie;
                        return {
                            xsrfToken: n,
                            cookie: i
                        }
                    } catch (e) {
                        console.log("error: ", e)
                    }
                },
                x = e => {
                    let t = null == e ? void 0 : e.split("-").pop();
                    return t ? t.startsWith("b") && /^\d+$/.test(t.slice(1)) ? "bike" : "car" : "unknown"
                },
                g = ["dealer-consent", "dealer-signup", "login", "404", "register", "email", "complete-profile", "thankyou-consent", "dealer-signin", "password"],
                v = e => e ? "FTM" === e ? "$Sonic" : e : ""
        },
        30348: function(e, t, s) {
            "use strict";

            function r(e) {
                return new Intl.NumberFormat("en-US", {
                    maximumFractionDigits: 0
                }).format(e)
            }

            function a(e, t) {
                return new Intl.NumberFormat("en-US", {
                    maximumFractionDigits: t
                }).format(e)
            }
            s.d(t, {
                DW: function() {
                    return a
                },
                Gm: function() {
                    return d
                },
                IL: function() {
                    return u
                },
                K5: function() {
                    return c
                },
                OE: function() {
                    return n
                },
                T4: function() {
                    return r
                },
                TB: function() {
                    return o
                },
                f$: function() {
                    return i
                },
                sD: function() {
                    return l
                }
            });
            let l = e => {
                    if (!e) return "";
                    let t = e.split(" ");
                    return t.length > 4 ? "".concat(t.slice(0, 4).join(" "), "...") : e
                },
                n = (e, t, s) => {
                    let r = {};
                    return ["usd", "gbp", "eur"].forEach(t => {
                        r["".concat(t, "Price")] = i(e, t, s)
                    }), ["BTC", "TON", "BNB", "SOL", "NEAR", "HBAR"].forEach(s => {
                        r["".concat(s.toLowerCase(), "Price")] = c(e, s, t)
                    }), r
                },
                i = (e, t, s) => {
                    let a = null == s ? void 0 : s.find(e => (null == e ? void 0 : e.code) === "GBP");
                    if (!a) return r(e);
                    let l = a.rates[t.toLowerCase()];
                    return l ? r(e * l) : r(e)
                },
                c = (e, t, s) => {
                    var r;
                    let a = null == s ? void 0 : s.find(e => (null == e ? void 0 : e.code) === t);
                    if (!a) return e;
                    let l = null === (r = a.rates.gbp) || void 0 === r ? void 0 : r.replaceAll(",", "");
                    return l ? (e / parseFloat(l)).toFixed(4) : e
                },
                o = e => {
                    var t, s, r, a, l, n, i, c, o, d, u, h, p, m, f, x, g, v, b, A;
                    return {
                        page: null !== (t = null == e ? void 0 : e.page) && void 0 !== t ? t : "",
                        makeId: null !== (s = null == e ? void 0 : e.make) && void 0 !== s ? s : "",
                        modelId: null !== (r = null == e ? void 0 : e.model) && void 0 !== r ? r : "",
                        colourId: null !== (a = null == e ? void 0 : e.colour) && void 0 !== a ? a : "",
                        transmissionId: null !== (l = null == e ? void 0 : e.transmission) && void 0 !== l ? l : "",
                        fuelTypeId: null !== (n = null == e ? void 0 : e.fuel_type) && void 0 !== n ? n : "",
                        minYear: null !== (i = null == e ? void 0 : e.min_year) && void 0 !== i ? i : "",
                        minMileage: null !== (c = null == e ? void 0 : e.min_mileage) && void 0 !== c ? c : "",
                        maxMileage: null !== (o = null == e ? void 0 : e.max_mileage) && void 0 !== o ? o : "",
                        minPrice: null !== (d = null == e ? void 0 : e.min_price) && void 0 !== d ? d : "",
                        maxPrice: null !== (u = null == e ? void 0 : e.max_price) && void 0 !== u ? u : "",
                        dealerId: null !== (h = null == e ? void 0 : e.dealer_id) && void 0 !== h ? h : "",
                        priceFlag: null !== (p = null == e ? void 0 : e.price_flag) && void 0 !== p ? p : "",
                        category: null !== (m = null == e ? void 0 : e.category) && void 0 !== m ? m : "",
                        sort: null !== (f = null == e ? void 0 : e.sort) && void 0 !== f ? f : "",
                        search: null !== (x = null == e ? void 0 : e.search) && void 0 !== x ? x : "",
                        bodyTypeId: null !== (g = null == e ? void 0 : e.body_type) && void 0 !== g ? g : "",
                        doors: null !== (v = null == e ? void 0 : e.doors) && void 0 !== v ? v : "",
                        seats: null !== (b = null == e ? void 0 : e.seats) && void 0 !== b ? b : "",
                        postcodes: null !== (A = null == e ? void 0 : e.postcodes) && void 0 !== A ? A : ""
                    }
                },
                d = (e, t) => {
                    let {
                        page: s,
                        makeId: r,
                        modelId: a,
                        colourId: l,
                        transmissionId: n,
                        fuelTypeId: i,
                        minYear: c,
                        minMileage: o,
                        maxMileage: d,
                        minPrice: u,
                        maxPrice: h,
                        dealerId: p,
                        category: m,
                        sort: f,
                        search: x,
                        bodyTypeId: g,
                        doors: v,
                        seats: b,
                        postcodes: A
                    } = e, w = [];
                    s && w.push("page=".concat(s)), r && w.push("make=".concat(r)), a && w.push("model=".concat(a)), l && w.push("colour=".concat(l)), n && w.push("transmission=".concat(n)), i && w.push("fuel_type=".concat(i)), c && w.push("min_year=".concat(c)), o && w.push("min_mileage=".concat(o)), d && w.push("max_mileage=".concat(d)), u && w.push("min_price=".concat(u)), h && w.push("max_price=".concat(h)), p && w.push("dealer_id=".concat(p)), m && w.push("category=".concat(m)), f && w.push("sort=".concat(f)), x && w.push("search=".concat(x)), g && w.push("body_type=".concat(g)), v && w.push("doors=".concat(v)), b && w.push("seats=".concat(b)), A && w.push("postcodes=".concat(A));
                    let j = w.length > 0 ? "?".concat(w.join("&")) : "";
                    return "".concat(t).concat(j)
                };

            function u(e, t) {
                let s = {
                        id: "",
                        name: ""
                    },
                    r = {
                        id: "",
                        name: ""
                    },
                    a = "",
                    l = "";
                return e.address_components.forEach(e => {
                    if (e.types.includes("country")) {
                        let r = null == e ? void 0 : e.short_name,
                            a = null == t ? void 0 : t.find(e => e.code === r);
                        a && (s = {
                            id: null == a ? void 0 : a.id,
                            name: null == a ? void 0 : a.name
                        })
                    }
                    e.types.includes("locality") && (r.name = e.long_name), e.types.includes("postal_code") && (a = e.long_name), e.types.includes("street_number") && (l = e.long_name)
                }), {
                    country: s,
                    city: r,
                    postcode: a,
                    houseNumber: l
                }
            }
        },
        63385: function() {},
        42849: function() {},
        70740: function() {}
    },
    function(e) {
        e.O(0, [8038, 3012, 3107, 9414, 5250, 1749, 1126, 8588, 6608, 1694, 3741, 5935, 311, 2971, 8069, 1744], function() {
            return e(e.s = 7898)
        }), _N_E = e.O()
    }
]);