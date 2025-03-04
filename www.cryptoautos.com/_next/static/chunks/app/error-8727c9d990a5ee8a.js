(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7601], {
        8316: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 97776))
        },
        97776: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var r = t(57437),
                s = t(2265);

            function c(e) {
                let {
                    error: n,
                    reset: t
                } = e;
                return (0, s.useEffect)(() => {
                    console.error(n)
                }, [n]), (0, r.jsxs)("div", {
                    className: "flex flex-col items-center justify-center h-screen space-y-2",
                    children: [(0, r.jsx)("img", {
                        height: 200,
                        width: 200,
                        src: "/images/error-icon.png",
                        alt: "Error"
                    }), (0, r.jsx)("h2", {
                        className: "text-lg font-bold",
                        children: "Something went wrong!"
                    }), (0, r.jsx)("button", {
                        className: "px-4 py-2 text-white bg-red-500 rounded",
                        onClick: () => t(),
                        children: "Try again"
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [2971, 8069, 1744], function() {
            return e(e.s = 8316)
        }), _N_E = e.O()
    }
]);