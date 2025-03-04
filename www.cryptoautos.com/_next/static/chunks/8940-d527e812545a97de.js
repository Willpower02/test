"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8940], {
        70433: function(e, t, r) {
            r.r(t);
            var o = r(57437),
                a = r(2265),
                i = r(59414),
                s = r(30828);
            r(41268);
            var n = r(71126),
                c = r(51947),
                l = r(48796);
            t.default = e => {
                var t;
                let {
                    data: r,
                    headers: u
                } = e;
                (0, s.I0)();
                let {
                    data: d
                } = (0, n.useSession)(), p = null == d ? void 0 : null === (t = d.user) || void 0 === t ? void 0 : t.image, {
                    userFavorites: h
                } = (0, s.v9)(e => e.userFavorites), [f, m] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    p ? m(null == h ? void 0 : h.some(e => e.id === r.id)) : m((JSON.parse(localStorage.getItem("vehicles")) || []).some(e => e.id === r.id))
                }, [p, r.id, h]);
                let g = async () => {
                        let e = !f;
                        m(e), p ? (await y(e, r.id, p, u), m((await v(p)).some(e => e.id === r.id))) : k(e)
                    },
                    y = async (e, t, r, o) => {
                        try {
                            await c.Z.post("".concat("https://caapi.cryptoautos.com", "/api/user/user-wishlist"), {
                                wish: e,
                                vehicle_id: t
                            }, {
                                headers: {
                                    Authorization: "Bearer ".concat(r),
                                    "Content-Type": "application/json",
                                    "auth-session-cookie": o.cookie,
                                    "XSRF-TOKEN": o.xsrfToken
                                }
                            }), i.default.success(e ? "Car added to your wishlist!" : "Car removed from wishlist!")
                        } catch (t) {
                            console.log("error: ", t), console.error(t), m(!e)
                        }
                    },
                    v = async e => {
                        try {
                            return (await c.Z.get("".concat("https://caapi.cryptoautos.com", "/api/user/user-wishlist"), {
                                headers: {
                                    Authorization: "Bearer ".concat(e),
                                    "Content-Type": "application/json",
                                    "auth-session-cookie": u.cookie,
                                    "XSRF-TOKEN": u.xsrfToken
                                }
                            })).data.results || []
                        } catch (e) {
                            return console.error("Failed to fetch user favorites", e), []
                        }
                    },
                    k = e => {
                        let t = JSON.parse(localStorage.getItem("vehicles")) || [];
                        e ? (t.push(r), i.default.success("Car added to your wishlist!")) : (t = t.filter(e => e.id !== r.id), i.default.success("Car removed from wishlist!")), localStorage.setItem("vehicles", JSON.stringify(t))
                    };
                return (0, o.jsx)("div", {
                    className: "absolute top-3 right-5 p-2 rounded-full bg-black/30 cursor-pointer",
                    onClick: g,
                    children: f ? (0, o.jsx)(l.$g3, {
                        color: "red",
                        size: 24
                    }) : (0, o.jsx)(l.AWH, {
                        color: "white",
                        size: 24
                    })
                })
            }
        },
        37448: function(e, t, r) {
            r.r(t);
            var o = r(57437),
                a = r(14181),
                i = r(2265);
            t.default = e => {
                let {
                    headers: t,
                    src: r,
                    externalImage: s = null,
                    fallbackSrc: n = "/images/fallback-image.webp",
                    fallbackBikeSrc: c = "/images/bike_fallback.webp",
                    alt: l,
                    className: u,
                    vehicleType: d,
                    onClick: p = () => {},
                    vehicleId: h = null
                } = e, [f, m] = (0, i.useState)(r);
                return (0, o.jsx)("img", {
                    src: f,
                    alt: (0, a.sc)(null != l ? l : ""),
                    className: u,
                    onError: e => {
                        s && s === f ? m("bike" === d ? c : "/images/fallback-image.webp") : f == n || f == c ? s ? m(s) : m("bike" === d ? c : "/images/fallback-image.webp") : m("bike" === d ? c : n), h && fetch("".concat("https://caapi.cryptoautos.com", "/api/vehicle-images-refetch/").concat(h), {
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
                    onClick: p
                })
            }
        },
        41268: function(e, t, r) {
            r.d(t, {
                F: function() {
                    return o
                }
            });
            let o = (0, r(46608).PH)("user/favorites", e => ({
                payload: e
            }))
        },
        51947: function(e, t, r) {
            let o = r(73107).Z.create({
                baseURL: "https://caapi.cryptoautos.com",
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json"
                }
            });
            t.Z = o
        },
        14181: function(e, t, r) {
            r.d(t, {
                Kx: function() {
                    return f
                },
                ah: function() {
                    return h
                },
                c6: function() {
                    return p
                },
                mH: function() {
                    return y
                },
                px: function() {
                    return n
                },
                rb: function() {
                    return i
                },
                sc: function() {
                    return l
                },
                wK: function() {
                    return d
                },
                wU: function() {
                    return m
                },
                wc: function() {
                    return g
                },
                wy: function() {
                    return u
                },
                xG: function() {
                    return v
                },
                yE: function() {
                    return c
                }
            });
            var o = r(73107),
                a = r(51947);

            function i(e, t) {
                var r = e.split("").sort(function() {
                    return .5 - Math.random()
                }).join("");
                return t > 0 && (r = r.substr(0, t)), r
            }
            let s = [0, 100, 500, 5e3, 1e4, 15e3, 2e4, 25e3, 3e4, 35e3, 4e4, 45e3, 5e4, 6e4, 7e4, 8e4, 9e4, 1e5, 125e3, 15e4, 175e3, 2e5];

            function n(e, t, r, o) {
                let a = s.filter(e => e < r).pop() || 0,
                    i = s.find(e => e > o) || s[s.length - 1];
                return {
                    minMileageOptions: s.filter(e => e >= a && e < (t || i)),
                    maxMileageOptions: s.filter(t => t > (e || a) && t <= i)
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
                l = e => "CryptoAutos: ".concat(null != e ? e : ""),
                u = async (e, t, r) => {
                    try {
                        let o = e.map(e => e.id);
                        await a.Z.post("".concat("https://caapi.cryptoautos.com", "/api/user/user-wishlist"), {
                            sessionWishList: o
                        }, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(t),
                                "auth-session-cookie": r.cookie,
                                "XSRF-TOKEN": r.xsrfToken
                            }
                        }), localStorage.removeItem("vehicles");
                        return
                    } catch (e) {
                        throw console.error("Failed to sync wishlist:", e), Error("Error syncing wishlist")
                    }
                },
                d = async () => {
                    try {
                        let e = await a.Z.get("".concat("https://json.cryptoautos.com", "/live-rates.json"));
                        return {
                            crypto_rates: Object.entries(e.data.results.crypto_rates).map(e => {
                                let [t, r] = e;
                                return {
                                    code: t,
                                    rates: r
                                }
                            }),
                            fiat_rates: Object.entries(e.data.results.fiat_rates).map(e => {
                                let [t, r] = e;
                                return {
                                    code: t,
                                    rates: r
                                }
                            })
                        }
                    } catch (e) {
                        console.error("Error fetching live rates:", e)
                    }
                },
                p = async (e, t) => {
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
                h = async () => {
                    try {
                        var e;
                        let t = await o.Z.get("https://api.ipify.org?format=json");
                        return (null === (e = t.data) || void 0 === e ? void 0 : e.ip) || ""
                    } catch (e) {
                        return console.error("Error fetching IP address:", e), ""
                    }
                },
                f = async e => {
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
                m = async e => {
                    try {
                        var t, r, o;
                        let i = await a.Z.get("".concat("https://caapi.cryptoautos.com").concat(e)),
                            s = null == i ? void 0 : null === (t = i.data) || void 0 === t ? void 0 : t.results["XSRF-TOKEN"],
                            n = null == i ? void 0 : null === (o = i.data) || void 0 === o ? void 0 : null === (r = o.results) || void 0 === r ? void 0 : r.cookie;
                        return {
                            xsrfToken: s,
                            cookie: n
                        }
                    } catch (e) {
                        console.log("error: ", e)
                    }
                },
                g = e => {
                    let t = null == e ? void 0 : e.split("-").pop();
                    return t ? t.startsWith("b") && /^\d+$/.test(t.slice(1)) ? "bike" : "car" : "unknown"
                },
                y = ["dealer-consent", "dealer-signup", "login", "404", "register", "email", "complete-profile", "thankyou-consent", "dealer-signin", "password"],
                v = e => e ? "FTM" === e ? "$Sonic" : e : ""
        }
    }
]);