var _hsp = window['_hsp'] = window['_hsp'] || [];
_hsp.push(['setBannerSettings', {}]);
_hsp.push(['setCustomizationSettings', {}]);
_hsp.push(['setUseSecureCookies', true]);
_hsp.push(['addCookieDomain', '.hubspotpagebuilder.eu']);
_hsp.push(['addCookieDomain', '.hsforms.com']);
_hsp.push(['addCookieDomain', '.hubspot.com']);
_hsp.push(['addCookieDomain', '.cryptoautos.com']);
_hsp.push(['addCookieDomain', '.hs-sites-eu1.com']);
_hsp.push(['setApiBaseUrl', 'https://js-eu1.hs-banner.com/v2']);
/**
 * HubSpot Cookie Banner Code Copyright 2025 HubSpot, Inc.  http://www.hubspot.com
 */
! function() {
    var e = [, function(e, t) {
            var n;

            function o() {
                var e, t;
                t = arguments[0] || {};
                this.config = {};
                this.config.elements = t.elements ? t.elements : [];
                this.config.attributes = t.attributes ? t.attributes : {};
                this.config.attributes[o.ALL] = this.config.attributes[o.ALL] ? this.config.attributes[o.ALL] : [];
                this.config.allow_comments = !!t.allow_comments && t.allow_comments;
                this.allowed_elements = {};
                this.config.protocols = t.protocols ? t.protocols : {};
                this.config.add_attributes = t.add_attributes ? t.add_attributes : {};
                this.dom = t.dom ? t.dom : document;
                for (e = 0; e < this.config.elements.length; e++) this.allowed_elements[this.config.elements[e]] = !0;
                this.config.remove_element_contents = {};
                this.config.remove_all_contents = !1;
                if (t.remove_contents)
                    if (t.remove_contents instanceof Array)
                        for (e = 0; e < t.remove_contents.length; e++) this.config.remove_element_contents[t.remove_contents[e]] = !0;
                    else this.config.remove_all_contents = !0;
                this.transformers = t.transformers ? t.transformers : []
            }
            o.REGEX_PROTOCOL = /^([A-Za-z0-9\+\-\.\&\;\*\s]*?)(?:\:|&*0*58|&*x0*3a)/i;
            o.RELATIVE = "__RELATIVE__";
            o.ALL = "__ALL__";
            o.prototype.clean_node = function(e) {
                var t = this.dom.createDocumentFragment();
                this.current_element = t;
                this.whitelist_nodes = [];

                function n(e, t) {
                    var n;
                    for (n = 0; n < t.length; n++)
                        if (t[n] == e) return n;
                    return -1
                }

                function s() {
                    var e, t, n = [],
                        o = {};
                    for (e = 0; e < arguments.length; e++)
                        if (arguments[e] && arguments[e].length)
                            for (t = 0; t < arguments[e].length; t++)
                                if (!o[arguments[e][t]]) {
                                    o[arguments[e][t]] = !0;
                                    n.push(arguments[e][t])
                                }
                    return n
                }

                function r(e) {
                    var t;
                    switch (e.nodeType) {
                        case 1:
                            a.call(this, e);
                            break;
                        case 3:
                        case 5:
                            t = e.cloneNode(!1);
                            this.current_element.appendChild(t);
                            break;
                        case 8:
                            if (this.config.allow_comments) {
                                t = e.cloneNode(!1);
                                this.current_element.appendChild(t)
                            }
                            break;
                        default:
                            console && console.log && console.log("unknown node type", e.nodeType)
                    }
                }

                function a(e) {
                    var t, i, a, l, h, d, u, g, _, f, m = c.call(this, e);
                    a = (e = m.node).nodeName.toLowerCase();
                    i = this.current_element;
                    if (this.allowed_elements[a] || m.whitelist) {
                        this.current_element = this.dom.createElement(e.nodeName);
                        i.appendChild(this.current_element);
                        var p = this.config.attributes;
                        l = s(p[a], p[o.ALL], m.attr_whitelist);
                        for (t = 0; t < l.length; t++) {
                            d = l[t];
                            if (h = e.attributes[d]) {
                                f = !0;
                                if (this.config.protocols[a] && this.config.protocols[a][d]) {
                                    g = this.config.protocols[a][d];
                                    f = (_ = h.value.toLowerCase().match(o.REGEX_PROTOCOL)) ? -1 != n(_[1], g) : -1 != n(o.RELATIVE, g)
                                }
                                if (f) {
                                    (u = document.createAttribute(d)).value = h.value;
                                    this.current_element.setAttributeNode(u)
                                }
                            }
                        }
                        if (this.config.add_attributes[a])
                            for (d in this.config.add_attributes[a]) {
                                (u = document.createAttribute(d)).value = this.config.add_attributes[a][d];
                                this.current_element.setAttributeNode(u)
                            }
                    } else if (-1 != n(e, this.whitelist_nodes)) {
                        this.current_element = e.cloneNode(!0);
                        for (; this.current_element.childNodes.length > 0;) this.current_element.removeChild(this.current_element.firstChild);
                        i.appendChild(this.current_element)
                    }
                    if (!this.config.remove_all_contents && !this.config.remove_element_contents[a])
                        for (t = 0; t < e.childNodes.length; t++) r.call(this, e.childNodes[t]);
                    this.current_element.normalize && this.current_element.normalize();
                    this.current_element = i
                }

                function c(e) {
                    var t, o, i, r = {
                        attr_whitelist: [],
                        node: e,
                        whitelist: !1
                    };
                    for (t = 0; t < this.transformers.length; t++)
                        if (null != (i = this.transformers[t]({
                                allowed_elements: this.allowed_elements,
                                config: this.config,
                                node: e,
                                node_name: e.nodeName.toLowerCase(),
                                whitelist_nodes: this.whitelist_nodes,
                                dom: this.dom
                            }))) {
                            if ("object" != typeof i) throw new Error("transformer output must be an object or null");
                            if (i.whitelist_nodes && i.whitelist_nodes instanceof Array)
                                for (o = 0; o < i.whitelist_nodes.length; o++) - 1 == n(i.whitelist_nodes[o], this.whitelist_nodes) && this.whitelist_nodes.push(i.whitelist_nodes[o]);
                            r.whitelist = !!i.whitelist;
                            i.attr_whitelist && (r.attr_whitelist = s(r.attr_whitelist, i.attr_whitelist));
                            r.node = i.node ? i.node : r.node
                        }
                    return r
                }
                for (i = 0; i < e.childNodes.length; i++) r.call(this, e.childNodes[i]);
                t.normalize && t.normalize();
                return t
            };
            void 0 !== (n = function() {
                return o
            }.apply(t, [])) && (e.exports = n)
        }, function(e) {
            e.exports = '#hs-banner-parent div,#hs-banner-parent p{color:inherit}#hs-banner-parent *{font-size:inherit;font-family:inherit;background:none;border:none;box-shadow:none;box-sizing:border-box;margin:0;padding:0;display:inline-block;line-height:1.75em}#hs-banner-parent ul{display:block}#hs-banner-parent li{display:list-item;list-style-position:inside}#hs-banner-parent li *{display:inline}#hs-banner-parent .hs-hidden{display:none!important}#hs-banner-parent #hs-banner-gpc{font-size:var(--hs-banner-font-size,14px);font-family:var(--hs-banner-font-family,"Lato"),sans-serif;font-weight:400;color:var(--hs-banner-text-color,#15295a);background:var(--hs-banner-color,#fff);border-radius:var(--hs-banner-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);position:fixed;width:var(--hs-banner-width,67em);max-width:calc(100% - 64px);max-height:calc(100% - 64px);overflow:auto;inset:var(--hs-banner-inset,32px 0 auto 50%);z-index:3000000000;transform:translate(var(--hs-banner-translate-x,-50%),200vh);-webkit-transform:translate(var(--hs-banner-translate-x,-50%),200vh) translateZ(3000000000px);animation:none;opacity:0}#hs-banner-parent #hs-banner-gpc.hs-banner-optimization-animation{animation:banner_animation .5s forwards}#hs-banner-gpc #hs-banner-gpc-inner{display:flex;gap:1em;flex-direction:column;padding:var(--hs-banner-padding,2.2em)}#hs-banner-gpc #hs-banner-gpc-header{display:flex;flex-direction:row;justify-content:flex-end}#hs-banner-gpc #hs-banner-gpc-close-button{cursor:pointer;display:block}#hs-banner-gpc #hs-banner-gpc-close-button svg{width:var(--hs-banner-font-size,14px);height:var(--hs-banner-font-size,14px);color:var(--hs-banner-text-color,#15295a)}#hs-banner-parent #hs-eu-cookie-confirmation{font-size:var(--hs-banner-font-size,14px);font-family:var(--hs-banner-font-family,"Lato"),sans-serif;font-weight:400;color:var(--hs-banner-text-color,#15295a);background:var(--hs-banner-color,#fff);border-radius:var(--hs-banner-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);position:fixed;width:var(--hs-banner-width,67em);max-width:calc(100% - 64px);max-height:calc(100% - 64px);overflow:auto;inset:var(--hs-banner-inset,32px 0 auto 50%);z-index:3000000000;transform:translate(var(--hs-banner-translate-x,-50%),200vh);-webkit-transform:translate(var(--hs-banner-translate-x,-50%),200vh) translateZ(3000000000px);animation:none;opacity:0}@keyframes banner_animation{0%{transform:translate(var(--hs-banner-translate-x,-50%),200vh);-webkit-transform:translate(var(--hs-banner-translate-x,-50%),200vh) translateZ(3000000000px);opacity:0}99%{opacity:0}to{transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0));-webkit-transform:translate(var(--hs-banner-translate-x,-50%),var(--hs-banner-translate-y,0)) translateZ(3000000000px);opacity:1}}#hs-banner-parent #hs-eu-cookie-confirmation.hs-banner-optimization-animation{animation:banner_animation .5s forwards}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-inner{display:flex;gap:1em;flex-direction:column;padding:var(--hs-banner-padding,2.2em)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-inner button:focus{box-shadow:0 0 0 2px rgba(0,127,255,.5);box-shadow:0 0 0 2px -webkit-focus-ring-color}#hs-eu-cookie-confirmation #hs-eu-header-container{display:var(--hs-banner-close-button-display,none);flex-direction:row;justify-content:flex-end}#hs-eu-cookie-confirmation #hs-eu-close-button{cursor:pointer;display:block}#hs-eu-cookie-confirmation #hs-eu-close-button svg{width:var(--hs-banner-font-size,14px);height:var(--hs-banner-font-size,14px);color:var(--hs-banner-text-color,#15295a)}#hs-eu-cookie-confirmation #hs-eu-cookie-confirmation-buttons-area{display:flex;flex-flow:row wrap;justify-content:flex-end;align-items:baseline}#hs-eu-cookie-confirmation #hs-eu-confirmation-button-group,#hs-eu-cookie-confirmation #hs-eu-opt-in-buttons{display:flex;justify-content:center;flex-flow:row wrap;gap:.5em}#hs-eu-cookie-confirmation #hs-eu-opt-in-buttons{flex-grow:1}#hs-eu-cookie-confirmation #hs-eu-confirmation-button,#hs-eu-cookie-confirmation #hs-eu-cookie-settings-button,#hs-eu-cookie-confirmation #hs-eu-decline-button{flex:1;cursor:pointer;border-radius:var(--hs-banner-button-corners,3em);min-width:11em;height:3.3em}#hs-eu-cookie-confirmation #hs-eu-confirmation-button{color:var(--hs-banner-accept-text-color,#fff);background:var(--hs-banner-accept-color,var(--hs-banner-accentColor,#425b76));border:1px solid var(--hs-banner-accept-border-color,var(--hs-banner-accentColor,#425b76))}#hs-eu-cookie-confirmation #hs-eu-decline-button{color:var(--hs-banner-decline-text-color,var(--hs-banner-accentColor,#425b76));background:var(--hs-banner-decline-color,#fff);border:1px solid var(--hs-banner-decline-border-color,var(--hs-banner-accentColor,#425b76))}#hs-eu-cookie-confirmation #hs-eu-cookie-settings-button{text-decoration:underline;font-weight:800;color:var(--hs-banner-settings-text-color,var(--hs-banner-accentColor,#425b76))}@media print{#hs-banner-gpc,#hs-eu-cookie-confirmation{display:none!important}}'
        }, function(e) {
            e.exports = '#hs-banner-parent #hs-modal{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.28);display:flex;justify-content:center;align-items:center;z-index:3000000001;-webkit-transform:translateZ(3000000001px)}@media print{#hs-banner-parent #hs-modal{display:none!important}}#hs-banner-parent #hs-modal-content{position:absolute;display:flex;flex-direction:column;gap:1.1em;padding:var(--hs-banner-modal-padding,2.2em);width:min(var(--hs-banner-modal-width,50.3em),100%);max-height:80%;background-color:var(--hs-banner-modal-color,#fafbff);border-radius:var(--hs-banner-modal-corners,12px);box-shadow:0 8px 28px rgba(0,0,0,.28);font-size:var(--hs-banner-modal-font-size,14px);font-family:var(--hs-banner-font-family,"Lato"),sans-serif;font-weight:400;line-height:1.75em;color:var(--hs-banner-modal-text-color,#15295a)}#hs-modal-content #hs-modal-header-container{display:flex;flex-direction:row;justify-content:flex-end}#hs-modal-content #hs-modal-close-button{cursor:pointer;display:block}#hs-modal-content #hs-modal-close-button svg{width:var(--hs-banner-modal-font-size,14px);height:var(--hs-banner-modal-font-size,14px);color:var(--hs-banner-modal-text-color,#15295a)}#hs-modal-content #hs-modal-body{overflow:auto}#hs-modal-content #hs-modal-body-container{position:relative;display:flex;flex-flow:column;gap:1.1em;height:100%;width:100%}#hs-modal-content #hs-modal-introduction{display:inline-block}#hs-modal-content #hs-modal-introduction span{font-weight:800;font-size:1.3em;color:inherit}#hs-modal-content #hs-categories-container{display:flex;flex-direction:column;gap:1.1em}#hs-modal-content #hs-categories-container .hs-category-row{display:flex;flex-direction:column;background:var(--hs-banner-modal-cateogry-color,#fff);border-radius:var(--hs-banner-modal-category-corners,var(--hs-banner-modal-corners,12px));padding:2em}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch-input{opacity:0;width:100%;height:100%;cursor:pointer}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch{width:calc(1.7em * 2 + 6px);height:calc(1.7em + 6px);position:relative;background-color:var(--hs-banner-modal-toggle-off-color,#f1f1f1);border:3px solid var(--hs-banner-modal-toggle-off-color,#f1f1f1);border-radius:1.7em;transition:background-color .2s ease,border-color .2s ease}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch-nob{position:absolute;height:1.7em;width:1.7em;left:0;border-radius:inherit;box-shadow:0 2px 5px rgba(0,0,0,.3);background:var(--hs-banner-modal-cateogry-color,#fff);transition:left .5s ease}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch.hs-toggle-selected-flag{background-color:var(--hs-banner-modal-toggle-on-color,var(--hs-banner-accentColor,#425b76));border-color:var(--hs-banner-modal-toggle-on-color,var(--hs-banner-accentColor,#425b76))}#hs-modal-content #hs-categories-container .hs-category-row .hs-toggle-switch.hs-toggle-selected-flag .hs-toggle-switch-nob{left:50%}#hs-modal-content #hs-categories-container .description-accordion-arrow{transition:transform .2s;width:var(--hs-banner-modal-font-size,14px);height:var(--hs-banner-modal-font-size,14px);color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-categories-container .description-accordion-arrow.rotated{transform:rotate(90deg)}#hs-modal-content #hs-categories-container .hs-category-description{transition:max-height .2s;box-sizing:border-box;overflow:hidden;opacity:0}#hs-modal-content #hs-categories-container .hs-category-description.visible{opacity:1;color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-categories-container .hs-category-row-header{display:flex;justify-content:space-between;align-items:center}#hs-modal-content #hs-categories-container .hs-category-label{display:flex;flex-grow:1;gap:1.1em;align-items:center;justify-content:left;font-weight:800;color:var(--hs-banner-modal-category-text-color,#15295a);cursor:pointer}#hs-modal-content #hs-categories-container .hs-always-active-label{color:var(--hs-banner-modal-category-text-color,#15295a)}#hs-modal-content #hs-modal-footer{display:flex;justify-content:flex-end}#hs-modal-content #hs-modal-footer-container{display:flex;justify-content:center;flex-flow:row wrap;gap:.5em}#hs-modal-content #hs-modal-accept-all,#hs-modal-content #hs-modal-save-settings{flex:1;border-radius:var(--hs-banner-modal-button-corners,3em);min-width:11em;height:3.3em;cursor:pointer}#hs-modal-content #hs-modal-accept-all{color:var(--hs-banner-modal-accept-text-color,#fafbff);background:var(--hs-banner-modal-accept-color,var(--hs-banner-accentColor,#425b76));border:1px solid var(--hs-banner-modal-accept-border-color,var(--hs-banner-accentColor,#425b76))}#hs-modal-content #hs-modal-save-settings{color:var(--hs-banner-modal-save-text-color,var(--hs-banner-accentColor,#425b76));background:var(--hs-banner-modal-save-color,#fafbff);border:1px solid var(--hs-banner-modal-save-border-color,var(--hs-banner-accentColor,#425b76))}'
        }],
        t = {};

    function n(o) {
        var i = t[o];
        if (void 0 !== i) return i.exports;
        var s = t[o] = {
            exports: {}
        };
        e[o](s, s.exports, n);
        return s.exports
    }
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        n.d(t, {
            a: t
        });
        return t
    };
    n.d = function(e, t) {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    };
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    ! function() {
        "use strict";
        const e = "_hspb_loaded",
            t = "_hsp",
            o = "_hsq",
            i = "_hsGeoTargetingTest",
            s = "_hsGpcSignal",
            r = "_hsScanningMode",
            a = "_hspb_ran",
            c = "hsdbg",
            l = "_hsPrivacyTest",
            h = "hs-eu-cookie-confirmation",
            d = "hs-banner-gpc",
            u = "hs-banner-parent",
            g = "hs-modal",
            _ = "hs-modal-content",
            f = {
                NECESSARY: "necessary",
                ANALYTICS: "analytics",
                ADVERTISEMENT: "advertisement",
                FUNCTIONALITY: "functionality"
            },
            m = "hs-hidden",
            p = "hs-banner-optimization-animation",
            b = "hs-banner-style",
            y = "hs-banner-modal-style",
            v = "disabledHsPopups",
            C = "PRIVACY",
            x = "disableHubSpotCookieBanner",
            S = "hsCookieBannerLoaded",
            w = [...["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"], ...["IS", "LI", "NO"], "GB"],
            T = "hs-banner-google-font",
            k = "google-font-injected",
            O = [
                [0, 400],
                [0, 700],
                [1, 400]
            ],
            E = "https://fonts.googleapis.com/css2";
        class I {
            constructor(e, t) {
                this.win = e;
                this.doc = t;
                this.hasLoadedBaseStyle = !1;
                this.hasLoadedCbcStyle = !1
            }
            setHasLoadedBaseStyle(e) {
                this.hasLoadedBaseStyle = e
            }
            setHasLoadedCbcStyle(e) {
                this.hasLoadedCbcStyle = e
            }
            getWindow() {
                return this.win
            }
            getDocument() {
                return this.doc
            }
            getNavigator() {
                return this.getWindow().navigator
            }
            getLocation() {
                return this.getWindow().location
            }
            getPathname() {
                return this.getLocation().pathname
            }
            getHostname() {
                try {
                    return this.getLocation().hostname
                } catch (e) {
                    return this.getDocument().domain
                }
            }
            getHasLoadedBaseStyle() {
                return this.hasLoadedBaseStyle
            }
            getHasLoadedCbcStyle() {
                return this.hasLoadedCbcStyle
            }
        }
        const L = new I(window, document);

        function A() {
            return L
        }
        class N {
            constructor(e) {
                this.logPrepend = "[HubSpot cookie banner]";
                this.context = e
            }
            info(e) {
                this.isDebugEnabled() && this.context.getWindow().console.log(`${this.logPrepend} ${e}`)
            }
            debug(e) {
                this.isDebugEnabled() && this.context.getWindow().console.debug(`${this.logPrepend} ${e}`)
            }
            error(e) {
                this.isDebugEnabled() && this.context.getWindow().console.error(`${this.logPrepend} ${e}`)
            }
            isDebugEnabled() {
                return this.context.getDocument().location.search.includes(c)
            }
        }
        var B = new N(A());
        const R = [0, 0, 0, 0],
            P = e => e.some((e => e > 0)),
            D = (e, t) => (e.map(((e, n) => e - t[n])).find((e => 0 !== e)) || 0) >= 0;
        class G {
            constructor(e = "", t = [], n = []) {
                this.wildcard = !1;
                this.targetedPathPrefix = e;
                this.targetedCountries = t;
                this.targetedRegions = n
            }
            test(e, t, n) {
                const o = this.targetedPathPrefix.length + 1;
                if (!e.startsWith(this.targetedPathPrefix)) return R;
                const i = this.targetedCountries.length > 0 || this.targetedRegions.length > 0,
                    s = void 0 !== t && this.targetedCountries.includes(t),
                    r = t && n ? `${t}-${n}` : void 0,
                    a = void 0 !== r && this.targetedRegions.includes(r);
                return !i || s || a ? [this.wildcard ? 0 : 1, a ? 1 : 0, s ? 1 : 0, o] : R
            }
            static fromJS(e) {
                const {
                    allUrlsAndLocations: t,
                    path: n,
                    targetedCountries: o,
                    targetedRegions: i
                } = e;
                return t ? new G : new G(n || "", o || [], i || [])
            }
        }
        class U {
            constructor(e) {
                this.value = e
            }
            getValue() {
                return this.value
            }
            static fromJS(e) {
                if (!e) return this.TOP;
                switch (e) {
                    case 0:
                    default:
                        return this.TOP;
                    case 1:
                        return this.BOTTOM;
                    case 2:
                        return this.BOTTOM_LEFT;
                    case 3:
                        return this.BOTTOM_RIGHT;
                    case 4:
                        return this.CENTER
                }
            }
        }
        U.TOP = new U(0);
        U.BOTTOM = new U(1);
        U.BOTTOM_LEFT = new U(2);
        U.BOTTOM_RIGHT = new U(3);
        U.CENTER = new U(4);
        class M {
            constructor(e, t, n) {
                this.position = e;
                this.accentColor = t;
                this.showCloseButton = n
            }
            static fromJS(e) {
                const {
                    position: t,
                    accentColor: n,
                    showCloseButton: o
                } = e;
                return new M(U.fromJS(t), n, o || !1)
            }
        }
        var F = n(1),
            Y = n.n(F);
        const $ = new(Y())({
                attributes: {
                    a: ["href", "title", "target"],
                    blockquote: ["cite"],
                    ol: ["start", "type"],
                    q: ["cite"],
                    ul: ["type"],
                    span: ["class"]
                },
                elements: ["a", "b", "blockquote", "br", "caption", "cite", "code", "dd", "dl", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "i", "li", "ol", "p", "pre", "q", "small", "strike", "strong", "sub", "sup", "u", "ul", "font", "div", "span"],
                protocols: {
                    a: {
                        href: ["http", "https", "mailto", Y().ALL]
                    },
                    blockquote: {
                        cite: ["http", "https", Y().RELATIVE]
                    },
                    q: {
                        cite: ["http", "https", Y().RELATIVE]
                    }
                },
                remove_contents: ["style", "script"],
                add_attributes: {
                    a: {
                        rel: "noopener"
                    }
                }
            }),
            H = e => {
                if (!e) return e;
                const t = document.createElement("div");
                try {
                    const n = document.createRange().createContextualFragment(e),
                        o = $.clean_node(n);
                    t.appendChild(o.cloneNode(!0))
                } catch (t) {
                    B.error(`we had an error sanitizing an html string: ${e}`)
                }
                return t.innerHTML
            },
            V = e => ({
                __html: e || ""
            });
        class z {
            constructor(e, t, n) {
                this.description = e;
                this.label = t;
                this.toggleLabel = n
            }
            static fromJS(e) {
                return new z(e.description, e.label, e.toggleLabel)
            }
            getSanitizedText() {
                return new z(H(this.description), H(this.label), H(this.toggleLabel))
            }
        }
        class W {
            constructor(e, t, n, o, i, s, r) {
                this.acceptLabel = e;
                this.saveSettingsLabel = t;
                this.introduction = n;
                this.necessary = o;
                this.analytics = i;
                this.advertisement = s;
                this.functionality = r
            }
            static fromJS(e) {
                return new W(e.acceptAllLabel, e.saveSettingsLabel, z.fromJS(e.introduction), z.fromJS(e.categories.necessary), z.fromJS(e.categories.analytics), z.fromJS(e.categories.advertisement), z.fromJS(e.categories.functionality))
            }
            getSanitizedText() {
                return new W(H(this.acceptLabel), H(this.saveSettingsLabel), this.introduction.getSanitizedText(), this.necessary.getSanitizedText(), this.analytics.getSanitizedText(), this.advertisement.getSanitizedText(), this.functionality.getSanitizedText())
            }
        }
        class K {
            constructor(e, t, n, o, i, s) {
                this.notification = e;
                this.acceptLabel = t;
                this.declineLabel = n;
                this.disclaimer = o;
                this.cookieSettingsLabel = i;
                this.modalText = s
            }
            static fromJS(e) {
                return new K(e.notification, e.acceptLabel, e.declineLabel, e.disclaimer, e.modalText && e.modalText.cookieSettingsLabel, e.modalText && W.fromJS(e.modalText))
            }
            getSanitizedText() {
                return new K(H(this.notification), H(this.acceptLabel), H(this.declineLabel), H(this.disclaimer), this.cookieSettingsLabel && H(this.cookieSettingsLabel), this.modalText && this.modalText.getSanitizedText())
            }
        }
        class q {
            constructor(e, t) {
                this.value = e;
                this.name = t
            }
            getValue() {
                return this.value
            }
            getName() {
                return this.name
            }
            static isOptIn(e) {
                return [this.OPT_IN, this.COOKIES_BY_CATEGORY].includes(e)
            }
            static fromJS(e) {
                switch (e) {
                    case 0:
                        return this.COOKIES_WITHOUT_BANNER;
                    case 1:
                        return this.NO_COOKIES;
                    case 2:
                        return this.NOTIFY;
                    case 3:
                        return this.OPT_IN;
                    case 4:
                    default:
                        return this.COOKIES_BY_CATEGORY;
                    case 5:
                        return this.OPT_OUT;
                    case 6:
                        return this.OPT_OUT_BY_CATEGORY
                }
            }
        }
        q.COOKIES_WITHOUT_BANNER = new q(0, "COOKIES_WITHOUT_BANNER");
        q.NO_COOKIES = new q(1, "NO_COOKIES");
        q.NOTIFY = new q(2, "NOTIFY");
        q.OPT_IN = new q(3, "OPT_IN");
        q.COOKIES_BY_CATEGORY = new q(4, "COOKIES_BY_CATEGORY");
        q.OPT_OUT = new q(5, "OPT_OUT");
        q.OPT_OUT_BY_CATEGORY = new q(6, "OPT_OUT_BY_CATEGORY");
        class J {
            constructor(e, t) {
                this.type = e;
                this.text = t
            }
            static fromJS(e) {
                const {
                    type: t,
                    text: n
                } = e;
                return new J(q.fromJS(t), K.fromJS(n))
            }
            getSanitizedPolicy() {
                return new J(this.type, this.text.getSanitizedText())
            }
        }
        class j {
            constructor(e, t) {
                this.enabled = e;
                this.notificationText = H(t || "")
            }
            static fromJS(e) {
                return new j(e.enabled, e.notificationText)
            }
        }
        class Q {
            constructor(e, t, n, o, i, s, r, a) {
                this.id = e;
                this.portalId = t;
                this.label = n;
                this.enabled = o;
                this.configuration = i;
                this.policy = s;
                this.customizationSettings = r;
                this.gpcSettings = a
            }
            static fromJS(e) {
                const {
                    id: t,
                    portalId: n,
                    label: o,
                    enabled: i,
                    configuration: s,
                    policy: r,
                    legacyCustomization: a,
                    gpcSettings: c
                } = e;
                return new Q(t, n, o, i, G.fromJS(s), J.fromJS(r), M.fromJS(a), j.fromJS(c))
            }
            withSanitizedPolicy() {
                return new Q(this.id, this.portalId, this.label, this.enabled, this.configuration, this.policy.getSanitizedPolicy(), this.customizationSettings, this.gpcSettings)
            }
            toLegacyPrivacyPolicy() {
                let e;
                switch (this.policy.type) {
                    case q.COOKIES_WITHOUT_BANNER:
                        e = 0;
                        break;
                    case q.NO_COOKIES:
                        e = 2;
                        break;
                    case q.OPT_OUT:
                    case q.NOTIFY:
                    case q.OPT_IN:
                        e = 1;
                        break;
                    case q.OPT_OUT_BY_CATEGORY:
                    case q.COOKIES_BY_CATEGORY:
                    default:
                        e = 3
                }
                return {
                    active: this.enabled,
                    testing: !1,
                    mode: e,
                    policyWording: "not used",
                    acceptWording: "not used",
                    cancelWording: "not used",
                    disclaimerWording: "not used",
                    hideDecline: this.policy.type === q.NOTIFY,
                    accentColor: this.customizationSettings.accentColor,
                    bannerType: "not used",
                    label: this.label,
                    privacyDefault: !1,
                    cookiesByCategory: {},
                    id: this.id,
                    portalId: this.portalId
                }
            }
        }
        const Z = 1,
            X = 2,
            ee = 3,
            te = {
                [Z]: "analytics",
                [X]: "advertisement",
                [ee]: "functionality"
            };
        class ne {
            constructor(e, t, n) {
                this.allowed = e;
                this.previousCategories = n || {
                    necessary: !0,
                    analytics: !1,
                    advertisement: !1,
                    functionality: !1
                };
                this.categories = t || {
                    necessary: !0,
                    analytics: e,
                    advertisement: e,
                    functionality: e
                }
            }
            hasAnalyticsConsent() {
                return this.allowed || !0 === this.categories.analytics
            }
            adsHasChangedToFalse() {
                return !0 === this.previousCategories.advertisement && !1 === this.categories.advertisement
            }
            update(e) {
                this.previousCategories = this.categories;
                this.categories = Object.assign({}, this.categories, {
                    analytics: e,
                    advertisement: e,
                    functionality: e
                });
                this.allowed = e;
                return this
            }
            updateCategories({
                analytics: e,
                advertisement: t,
                functionality: n
            }) {
                this.previousCategories = this.categories;
                this.categories = {
                    necessary: !0,
                    analytics: e,
                    advertisement: t,
                    functionality: n
                };
                this.allowed = e && t && n;
                return this
            }
            allCategoriesSelected() {
                return this.categories.necessary && this.categories.analytics && this.categories.advertisement && this.categories.functionality
            }
            getSafeCopy() {
                return new ne(this.allowed, {
                    necessary: this.categories.necessary,
                    analytics: this.categories.analytics,
                    advertisement: this.categories.advertisement,
                    functionality: this.categories.functionality
                }, {
                    necessary: this.previousCategories.necessary,
                    analytics: this.previousCategories.analytics,
                    advertisement: this.previousCategories.advertisement,
                    functionality: this.previousCategories.functionality
                })
            }
            toCookieString() {
                return `${Z}:${this.categories.analytics}_${X}:${this.categories.advertisement}_${ee}:${this.categories.functionality}`
            }
            static fromCategories(e) {
                const t = e.analytics && e.advertisement && e.functionality;
                return new ne(t, Object.assign({}, e, {
                    necessary: !0
                }))
            }
            static buildFromCookieString(e) {
                const t = e.includes(",") ? e.split(",") : e.split("_"),
                    n = {
                        necessary: !0,
                        analytics: !1,
                        advertisement: !1,
                        functionality: !1
                    };
                t.forEach((e => {
                    const t = e.split(":");
                    if (2 !== t.length) return;
                    const o = t[0],
                        i = te[o];
                    i && (n[i] = "true" === t[1])
                }));
                const o = n.necessary && n.advertisement && n.analytics && n.functionality;
                return new ne(o, n)
            }
            static buildInitialConsent() {
                return new ne(!1, {
                    necessary: !0,
                    analytics: !1,
                    advertisement: !1,
                    functionality: !1
                })
            }
        }
        const oe = e => encodeURI(e),
            ie = e => decodeURI(e),
            se = "_fbp",
            re = "1970-01-01T00:00:01-00:00";
        class ae {
            constructor(e) {
                this.context = e;
                this.cookiesToSubdomain = !1;
                this.useSecureCookies = !1;
                this.currentDomain = ""
            }
            isEnabled() {
                return this.context.getNavigator().cookieEnabled || "cookie" in this.context.getDocument() && this.context.getDocument().cookie.length > 0
            }
            addDomain(e) {
                `.${this.context.getHostname()}`.endsWith(e.startsWith(".") ? e : `.${e}`) && (!this.currentDomain || e.length < this.currentDomain.length) && (this.currentDomain = e)
            }
            get(e) {
                const t = new RegExp(`(^|;)[ ]*${e}=([^;]*)`).exec(this.context.getDocument().cookie);
                return t ? ie(t[2]) : ""
            }
            set(e, t, n) {
                let o, i, s = !1;
                if ((n = n || {}).minsToExpire) {
                    o = new Date;
                    o.setTime(o.getTime() + 1e3 * n.minsToExpire * 60)
                } else if (n.daysToExpire) {
                    o = new Date;
                    o.setTime(o.getTime() + 1e3 * n.daysToExpire * 60 * 60 * 24)
                } else n.expiryDate && n.expiryDate.toGMTString ? o = n.expiryDate : n.expiryDate && (o = new Date(n.expiryDate));
                if (void 0 !== o) {
                    i = o.toGMTString();
                    s = !0
                }
                this.setCookie(e, oe(t), {
                    expires: s ? `;expires=${i}` : "",
                    expiresTime: s ? o : null,
                    path: `;path=${n.path?n.path:"/"}`,
                    domain: !this.cookiesToSubdomain && this.currentDomain ? `;domain=${this.currentDomain}` : "",
                    secure: this.useSecureCookies ? ";secure" : "",
                    sameSite: ";SameSite=Lax"
                })
            }
            getDomainAncestry(e) {
                if ("" === e || !e) return [];
                const t = e.split(".");
                if (2 === t.length) return [e];
                if ("" === t[t.length - 1] || t.length < 2) {
                    console.error(`Invalid Domain: ${e}, Parsed As: [${t}]`);
                    return []
                }
                const n = [];
                let o, i = `${t[t.length-1]}`;
                for (o = t.length - 2; o >= 0; o--) {
                    if ("" === t[o]) {
                        if (0 !== o) {
                            console.error(`Invalid Domain: ${e}, Parsed As: [${t}]`);
                            return []
                        }
                        continue
                    }
                    const s = `${t[o]}.${i}`;
                    n.push(s);
                    i = s
                }
                return n
            }
            removeFBPCookie() {
                const e = new Date(re),
                    t = e.toUTCString();
                this.getDomainAncestry(this.context.getDocument().domain).forEach((n => {
                    this.setCookie(se, "", {
                        expires: `;expires=${t}`,
                        expiresTime: e,
                        path: ";path=/",
                        domain: `;domain=.${n}`,
                        secure: "",
                        sameSite: ";SameSite=Lax"
                    })
                }))
            }
            getGACookieNames() {
                const e = this.context.getDocument().cookie;
                if (!e) return [];
                const t = e.split(";"),
                    n = new RegExp("^(_ga_[a-zA-Z0-9]+)=[^;]+$"),
                    o = [];
                t.forEach((e => {
                    const t = e.trim().match(n);
                    t && o.push(t[1])
                }));
                return o
            }
            removeGACookie() {
                this.getGACookieNames().forEach((e => this.remove(e)))
            }
            remove(e) {
                this.set(e, "", {
                    expiryDate: re
                })
            }
            setCookie(e, t, n) {
                const o = n.expires + n.path + n.domain + n.sameSite + n.secure;
                this.writeCookie(`${e}=${t}${o}`)
            }
            writeCookie(e) {
                this.context.getDocument().cookie = e
            }
            setCookiesToSubdomain(e) {
                this.cookiesToSubdomain = e
            }
            setUseSecureCookies(e) {
                this.useSecureCookies = e
            }
        }
        class ce {
            constructor(e, t) {
                this.name = e;
                this.expirationDays = t
            }
            getName() {
                return this.name
            }
            getExpirationDays() {
                return this.expirationDays
            }
        }
        ce.CATEGORY_PREFERENCE_COOKIE = new ce("__hs_cookie_cat_pref", 180);
        ce.GPC_BANNER_DISMISS_COOKIE = new ce("__hs_gpc_banner_dismiss", 180);
        ce.NOTIFY_BANNER_DIMISS_COOKIE = new ce("__hs_notify_banner_dismiss", 180);
        ce.OPT_OUT_COOKIE = new ce("__hs_opt_out", 180);
        ce.INITIAL_OPT_IN = new ce("__hs_initial_opt_in", 7);
        var le, he, de, ue, ge, _e, fe = {},
            me = [],
            pe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

        function be(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function ye(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function ve(e, t, n) {
            var o, i, s, r = {};
            for (s in t) "key" == s ? o = t[s] : "ref" == s ? i = t[s] : r[s] = t[s];
            if (arguments.length > 2 && (r.children = arguments.length > 3 ? le.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                for (s in e.defaultProps) void 0 === r[s] && (r[s] = e.defaultProps[s]);
            return Ce(e, r, o, i, null)
        }

        function Ce(e, t, n, o, i) {
            var s = {
                type: e,
                props: t,
                key: n,
                ref: o,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == i ? ++de : i
            };
            return null == i && null != he.vnode && he.vnode(s), s
        }

        function xe(e) {
            return e.children
        }

        function Se(e, t) {
            this.props = e, this.context = t
        }

        function we(e, t) {
            if (null == t) return e.__ ? we(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? we(e) : null
        }

        function Te(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                return Te(e)
            }
        }

        function ke(e) {
            (!e.__d && (e.__d = !0) && ue.push(e) && !Oe.__r++ || _e !== he.debounceRendering) && ((_e = he.debounceRendering) || ge)(Oe)
        }

        function Oe() {
            for (var e; Oe.__r = ue.length;) e = ue.sort((function(e, t) {
                return e.__v.__b - t.__v.__b
            })), ue = [], e.some((function(e) {
                var t, n, o, i, s, r;
                e.__d && (s = (i = (t = e).__v).__e, (r = t.__P) && (n = [], (o = be({}, i)).__v = i.__v + 1, De(r, i, o, t.__n, void 0 !== r.ownerSVGElement, null != i.__h ? [s] : null, n, null == s ? we(i) : s, i.__h), Ge(n, i), i.__e != s && Te(i)))
            }))
        }

        function Ee(e, t, n, o, i, s, r, a, c, l) {
            var h, d, u, g, _, f, m, p = o && o.__k || me,
                b = p.length;
            for (n.__k = [], h = 0; h < t.length; h++)
                if (null != (g = n.__k[h] = null == (g = t[h]) || "boolean" == typeof g ? null : "string" == typeof g || "number" == typeof g || "bigint" == typeof g ? Ce(null, g, null, null, g) : Array.isArray(g) ? Ce(xe, {
                        children: g
                    }, null, null, null) : g.__b > 0 ? Ce(g.type, g.props, g.key, null, g.__v) : g)) {
                    if (g.__ = n, g.__b = n.__b + 1, null === (u = p[h]) || u && g.key == u.key && g.type === u.type) p[h] = void 0;
                    else
                        for (d = 0; d < b; d++) {
                            if ((u = p[d]) && g.key == u.key && g.type === u.type) {
                                p[d] = void 0;
                                break
                            }
                            u = null
                        }
                    De(e, g, u = u || fe, i, s, r, a, c, l), _ = g.__e, (d = g.ref) && u.ref != d && (m || (m = []), u.ref && m.push(u.ref, null, g), m.push(d, g.__c || _, g)), null != _ ? (null == f && (f = _), "function" == typeof g.type && g.__k === u.__k ? g.__d = c = Ie(g, c, e) : c = Le(e, g, u, p, _, c), "function" == typeof n.type && (n.__d = c)) : c && u.__e == c && c.parentNode != e && (c = we(u))
                }
            for (n.__e = f, h = b; h--;) null != p[h] && ("function" == typeof n.type && null != p[h].__e && p[h].__e == n.__d && (n.__d = we(o, h + 1)), Fe(p[h], p[h]));
            if (m)
                for (h = 0; h < m.length; h++) Me(m[h], m[++h], m[++h])
        }

        function Ie(e, t, n) {
            for (var o, i = e.__k, s = 0; i && s < i.length; s++)(o = i[s]) && (o.__ = e, t = "function" == typeof o.type ? Ie(o, t, n) : Le(n, o, o, i, o.__e, t));
            return t
        }

        function Le(e, t, n, o, i, s) {
            var r, a, c;
            if (void 0 !== t.__d) r = t.__d, t.__d = void 0;
            else if (null == n || i != s || null == i.parentNode) e: if (null == s || s.parentNode !== e) e.appendChild(i), r = null;
                else {
                    for (a = s, c = 0;
                        (a = a.nextSibling) && c < o.length; c += 2)
                        if (a == i) break e;
                    e.insertBefore(i, s), r = s
                }
            return void 0 !== r ? r : i.nextSibling
        }

        function Ae(e, t, n, o, i) {
            var s;
            for (s in n) "children" === s || "key" === s || s in t || Be(e, s, null, n[s], o);
            for (s in t) i && "function" != typeof t[s] || "children" === s || "key" === s || "value" === s || "checked" === s || n[s] === t[s] || Be(e, s, t[s], n[s], o)
        }

        function Ne(e, t, n) {
            "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || pe.test(t) ? n : n + "px"
        }

        function Be(e, t, n, o, i) {
            var s;
            e: if ("style" === t)
                if ("string" == typeof n) e.style.cssText = n;
                else {
                    if ("string" == typeof o && (e.style.cssText = o = ""), o)
                        for (t in o) n && t in n || Ne(e.style, t, "");
                    if (n)
                        for (t in n) o && n[t] === o[t] || Ne(e.style, t, n[t])
                }
            else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? o || e.addEventListener(t, s ? Pe : Re, s) : e.removeEventListener(t, s ? Pe : Re, s);
            else if ("dangerouslySetInnerHTML" !== t) {
                if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
                else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                    e[t] = null == n ? "" : n;
                    break e
                } catch (e) {}
                "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
            }
        }

        function Re(e) {
            this.l[e.type + !1](he.event ? he.event(e) : e)
        }

        function Pe(e) {
            this.l[e.type + !0](he.event ? he.event(e) : e)
        }

        function De(e, t, n, o, i, s, r, a, c) {
            var l, h, d, u, g, _, f, m, p, b, y, v = t.type;
            if (void 0 !== t.constructor) return null;
            null != n.__h && (c = n.__h, a = t.__e = n.__e, t.__h = null, s = [a]), (l = he.__b) && l(t);
            try {
                e: if ("function" == typeof v) {
                    if (m = t.props, p = (l = v.contextType) && o[l.__c], b = l ? p ? p.props.value : l.__ : o, n.__c ? f = (h = t.__c = n.__c).__ = h.__E : ("prototype" in v && v.prototype.render ? t.__c = h = new v(m, b) : (t.__c = h = new Se(m, b), h.constructor = v, h.render = Ye), p && p.sub(h), h.props = m, h.state || (h.state = {}), h.context = b, h.__n = o, d = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != v.getDerivedStateFromProps && (h.__s == h.state && (h.__s = be({}, h.__s)), be(h.__s, v.getDerivedStateFromProps(m, h.__s))), u = h.props, g = h.state, d) null == v.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
                    else {
                        if (null == v.getDerivedStateFromProps && m !== u && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, b), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, b) || t.__v === n.__v) {
                            h.props = m, h.state = h.__s, t.__v !== n.__v && (h.__d = !1), h.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                                e && (e.__ = t)
                            })), h.__h.length && r.push(h);
                            break e
                        }
                        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, b), null != h.componentDidUpdate && h.__h.push((function() {
                            h.componentDidUpdate(u, g, _)
                        }))
                    }
                    h.context = b, h.props = m, h.state = h.__s, (l = he.__r) && l(t), h.__d = !1, h.__v = t, h.__P = e, l = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (o = be(be({}, o), h.getChildContext())), d || null == h.getSnapshotBeforeUpdate || (_ = h.getSnapshotBeforeUpdate(u, g)), y = null != l && l.type === xe && null == l.key ? l.props.children : l, Ee(e, Array.isArray(y) ? y : [y], t, n, o, i, s, r, a, c), h.base = t.__e, t.__h = null, h.__h.length && r.push(h), f && (h.__E = h.__ = null), h.__e = !1
                } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ue(n.__e, t, n, o, i, s, r, c);
                (l = he.diffed) && l(t)
            }
            catch (e) {
                t.__v = null, (c || null != s) && (t.__e = a, t.__h = !!c, s[s.indexOf(a)] = null), he.__e(e, t, n)
            }
        }

        function Ge(e, t) {
            he.__c && he.__c(t, e), e.some((function(t) {
                try {
                    e = t.__h, t.__h = [], e.some((function(e) {
                        e.call(t)
                    }))
                } catch (e) {
                    he.__e(e, t.__v)
                }
            }))
        }

        function Ue(e, t, n, o, i, s, r, a) {
            var c, l, h, d = n.props,
                u = t.props,
                g = t.type,
                _ = 0;
            if ("svg" === g && (i = !0), null != s)
                for (; _ < s.length; _++)
                    if ((c = s[_]) && "setAttribute" in c == !!g && (g ? c.localName === g : 3 === c.nodeType)) {
                        e = c, s[_] = null;
                        break
                    }
            if (null == e) {
                if (null === g) return document.createTextNode(u);
                e = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, u.is && u), s = null, a = !1
            }
            if (null === g) d === u || a && e.data === u || (e.data = u);
            else {
                if (s = s && le.call(e.childNodes), l = (d = n.props || fe).dangerouslySetInnerHTML, h = u.dangerouslySetInnerHTML, !a) {
                    if (null != s)
                        for (d = {}, _ = 0; _ < e.attributes.length; _++) d[e.attributes[_].name] = e.attributes[_].value;
                    (h || l) && (h && (l && h.__html == l.__html || h.__html === e.innerHTML) || (e.innerHTML = h && h.__html || ""))
                }
                if (Ae(e, u, d, i, a), h) t.__k = [];
                else if (_ = t.props.children, Ee(e, Array.isArray(_) ? _ : [_], t, n, o, i && "foreignObject" !== g, s, r, s ? s[0] : n.__k && we(n, 0), a), null != s)
                    for (_ = s.length; _--;) null != s[_] && ye(s[_]);
                a || ("value" in u && void 0 !== (_ = u.value) && (_ !== e.value || "progress" === g && !_ || "option" === g && _ !== d.value) && Be(e, "value", _, d.value, !1), "checked" in u && void 0 !== (_ = u.checked) && _ !== e.checked && Be(e, "checked", _, d.checked, !1))
            }
            return e
        }

        function Me(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                he.__e(e, n)
            }
        }

        function Fe(e, t, n) {
            var o, i;
            if (he.unmount && he.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Me(o, null, t)), null != (o = e.__c)) {
                if (o.componentWillUnmount) try {
                    o.componentWillUnmount()
                } catch (e) {
                    he.__e(e, t)
                }
                o.base = o.__P = null
            }
            if (o = e.__k)
                for (i = 0; i < o.length; i++) o[i] && Fe(o[i], t, "function" != typeof e.type);
            n || null == e.__e || ye(e.__e), e.__e = e.__d = void 0
        }

        function Ye(e, t, n) {
            return this.constructor(e, n)
        }

        function $e(e, t, n) {
            var o, i, s;
            he.__ && he.__(e, t), i = (o = "function" == typeof n) ? null : n && n.__k || t.__k, s = [], De(t, e = (!o && n || t).__k = ve(xe, null, [e]), i || fe, fe, void 0 !== t.ownerSVGElement, !o && n ? [n] : i ? null : t.firstChild ? le.call(t.childNodes) : null, s, !o && n ? n : i ? i.__e : t.firstChild, o), Ge(s, e)
        }
        le = me.slice, he = {
                __e: function(e, t) {
                    for (var n, o, i; t = t.__;)
                        if ((n = t.__c) && !n.__) try {
                            if ((o = n.constructor) && null != o.getDerivedStateFromError && (n.setState(o.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, de = 0,
            function(e) {
                return null != e && void 0 === e.constructor
            }, Se.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = be({}, this.state), "function" == typeof e && (e = e(be({}, n), this.props)), e && be(n, e), null != e && this.__v && (t && this.__h.push(t), ke(this))
            }, Se.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), ke(this))
            }, Se.prototype.render = xe, ue = [], ge = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Oe.__r = 0, 0;
        var He, Ve, ze, We = 0,
            Ke = [],
            qe = he.__b,
            Je = he.__r,
            je = he.diffed,
            Qe = he.__c,
            Ze = he.unmount;

        function Xe(e, t) {
            he.__h && he.__h(Ve, e, We || t), We = 0;
            var n = Ve.__H || (Ve.__H = {
                __: [],
                __h: []
            });
            return e >= n.__.length && n.__.push({}), n.__[e]
        }

        function et(e) {
            return We = 1, tt(ht, e)
        }

        function tt(e, t, n) {
            var o = Xe(He++, 2);
            return o.t = e, o.__c || (o.__ = [n ? n(t) : ht(void 0, t), function(e) {
                var t = o.t(o.__[0], e);
                o.__[0] !== t && (o.__ = [t, o.__[1]], o.__c.setState({}))
            }], o.__c = Ve), o.__
        }

        function nt(e, t) {
            var n = Xe(He++, 3);
            !he.__s && lt(n.__H, t) && (n.__ = e, n.__H = t, Ve.__H.__h.push(n))
        }

        function ot(e) {
            return We = 5, it((function() {
                return {
                    current: e
                }
            }), [])
        }

        function it(e, t) {
            var n = Xe(He++, 7);
            return lt(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
        }

        function st() {
            for (var e; e = Ke.shift();)
                if (e.__P) try {
                    e.__H.__h.forEach(at), e.__H.__h.forEach(ct), e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [], he.__e(t, e.__v)
                }
        }
        he.__b = function(e) {
            Ve = null, qe && qe(e)
        }, he.__r = function(e) {
            Je && Je(e), He = 0;
            var t = (Ve = e.__c).__H;
            t && (t.__h.forEach(at), t.__h.forEach(ct), t.__h = [])
        }, he.diffed = function(e) {
            je && je(e);
            var t = e.__c;
            t && t.__H && t.__H.__h.length && (1 !== Ke.push(t) && ze === he.requestAnimationFrame || ((ze = he.requestAnimationFrame) || function(e) {
                var t, n = function() {
                        clearTimeout(o), rt && cancelAnimationFrame(t), setTimeout(e)
                    },
                    o = setTimeout(n, 100);
                rt && (t = requestAnimationFrame(n))
            })(st)), Ve = null
        }, he.__c = function(e, t) {
            t.some((function(e) {
                try {
                    e.__h.forEach(at), e.__h = e.__h.filter((function(e) {
                        return !e.__ || ct(e)
                    }))
                } catch (n) {
                    t.some((function(e) {
                        e.__h && (e.__h = [])
                    })), t = [], he.__e(n, e.__v)
                }
            })), Qe && Qe(e, t)
        }, he.unmount = function(e) {
            Ze && Ze(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach((function(e) {
                try {
                    at(e)
                } catch (e) {
                    t = e
                }
            })), t && he.__e(t, n.__v))
        };
        var rt = "function" == typeof requestAnimationFrame;

        function at(e) {
            var t = Ve,
                n = e.__c;
            "function" == typeof n && (e.__c = void 0, n()), Ve = t
        }

        function ct(e) {
            var t = Ve;
            e.__c = e.__(), Ve = t
        }

        function lt(e, t) {
            return !e || e.length !== t.length || t.some((function(t, n) {
                return t !== e[n]
            }))
        }

        function ht(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        var dt = 0;

        function ut(e, t, n, o, i) {
            var s, r, a = {};
            for (r in t) "ref" == r ? s = t[r] : a[r] = t[r];
            var c = {
                type: e,
                props: a,
                key: n,
                ref: s,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: --dt,
                __source: o,
                __self: i
            };
            if ("function" == typeof e && (s = e.defaultProps))
                for (r in s) void 0 === a[r] && (a[r] = s[r]);
            return he.vnode && he.vnode(c), c
        }

        function gt() {
            return ut("svg", {
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 32 32",
                children: ut("path", {
                    fill: "currentColor",
                    d: "M4.3,27.7c0.2,0.2,0.6,0.5,1,0.5c0.4,0,0.8-0.2,1-0.5l9.6-9.5l9.6,9.5c0.2,0.2,0.6,0.5,1,0.5 c0.8,0,1.5-0.6,1.5-1.5c0-0.4-0.2-0.8-0.5-1L18.2,16l9.5-9.5c0.2-0.2,0.4-0.6,0.4-1c0-0.8-0.6-1.5-1.5-1.5c-0.4,0-0.7,0.2-1,0.4l0,0 L16,13.8L6.5,4.3C6.2,4,5.8,3.8,5.4,3.8c-0.8,0-1.5,0.6-1.5,1.5c0,0.5,0.2,0.8,0.5,1.1l0,0l9.5,9.5l-9.5,9.6c-0.2,0.2-0.5,0.6-0.5,1 S4.1,27.4,4.3,27.7L4.3,27.7z"
                })
            })
        }

        function _t(e, t, n, o) {
            n && o && t.addEventListener("keydown", (t => {
                if (!("Tab" === t.key || "Tab" === t.code)) return;
                const i = e.getDocument().activeElement;
                if (t.shiftKey) {
                    if (i === n) {
                        o.focus();
                        t.preventDefault()
                    }
                } else if (i === o) {
                    n.focus();
                    t.preventDefault()
                }
            }))
        }

        function ft({
            context: e,
            onAcceptAll: t,
            onCookieSettingsClick: n,
            onDeclineAll: o,
            setting: i,
            onCloseBannerButtonClick: s,
            isModalDisplayed: r
        }) {
            const a = ot(null),
                c = ot(null),
                l = ot(null),
                d = ot(null),
                u = ot(null);
            nt((() => {
                if (!a.current) return;
                const t = c.current || l.current,
                    n = u.current || d.current;
                _t(e, a.current, t, n)
            }), [e, a, c, d, u, l]);
            const g = r ? -1 : 0,
                _ = i.policy,
                f = i.policy.type,
                m = f === q.OPT_OUT_BY_CATEGORY || f === q.COOKIES_BY_CATEGORY,
                p = f === q.OPT_IN || f === q.OPT_OUT || f === q.OPT_OUT_BY_CATEGORY || f === q.COOKIES_BY_CATEGORY;
            return ut("div", {
                id: h,
                className: i.customizationSettings.position === U.BOTTOM ? "hs-cookie-notification-position-bottom" : "",
                "data-nosnippet": "true",
                role: "dialog",
                "aria-describedby": "hs-eu-policy-wording",
                "aria-label": "Cookie banner",
                ref: a,
                tabIndex: g,
                children: ut("div", {
                    id: "hs-eu-cookie-confirmation-inner",
                    children: [ut("div", {
                        id: "hs-eu-header-container",
                        children: ut("button", {
                            id: "hs-eu-close-button",
                            className: "hs-close-button",
                            onClick: () => s(f),
                            ref: c,
                            "aria-label": "Dismiss cookie banner",
                            tabIndex: g,
                            children: ut(gt, {})
                        })
                    }), ut("div", {
                        id: "hs-eu-policy-wording",
                        dangerouslySetInnerHTML: V(_.text.notification),
                        ref: l,
                        tabIndex: g
                    }), _.text.disclaimer && p && ut("p", {
                        id: "hs-eu-cookie-disclaimer",
                        dangerouslySetInnerHTML: V(_.text.disclaimer),
                        tabIndex: g
                    }), ut("div", {
                        id: "hs-eu-cookie-confirmation-buttons-area",
                        children: ut("div", {
                            id: "hs-eu-confirmation-button-group",
                            children: [m && ut("button", {
                                onClick: () => n(),
                                id: "hs-eu-cookie-settings-button",
                                dangerouslySetInnerHTML: V(_.text.cookieSettingsLabel),
                                "aria-label": _.text.cookieSettingsLabel,
                                tabIndex: g
                            }), ut("div", {
                                id: "hs-eu-opt-in-buttons",
                                children: [ut("button", {
                                    id: "hs-eu-confirmation-button",
                                    onClick: () => t(f),
                                    dangerouslySetInnerHTML: V(_.text.acceptLabel),
                                    "aria-label": _.text.acceptLabel,
                                    ref: d,
                                    tabIndex: g
                                }), p && ut("button", {
                                    id: "hs-eu-decline-button",
                                    onClick: () => o(),
                                    dangerouslySetInnerHTML: V(_.text.declineLabel),
                                    ref: u,
                                    "aria-label": _.text.declineLabel,
                                    tabIndex: g
                                })]
                            })]
                        })
                    })]
                })
            })
        }

        function mt({
            category: e,
            disabled: t,
            onToggleChange: n,
            toggleValue: o
        }) {
            const i = `hs-category-toggle-${e}`,
                s = `${i}-help-text`;
            return ut("div", {
                className: `hs-toggle-switch ${o?"hs-toggle-selected-flag":""}`,
                children: [ut("div", {
                    className: "hs-toggle-switch-nob"
                }), ut("label", {
                    htmlFor: i,
                    children: ut("span", {
                        className: "hs-hidden",
                        id: s,
                        children: `${e} cookies ${o?"allowed":"disallowed"}`
                    })
                }), ut("input", {
                    id: i,
                    className: "hs-toggle-switch-input",
                    type: "checkbox",
                    onChange: e => n(e.currentTarget.checked),
                    checked: o,
                    disabled: t,
                    "aria-pressed": o,
                    tabIndex: 0,
                    "aria-describedby": s,
                    "data-test-id": i
                })]
            })
        }

        function pt({
            className: e
        }) {
            return ut("svg", {
                version: "1.1",
                id: "plus-icon-svg",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 32 32",
                className: e,
                children: ut("path", {
                    fill: "currentColor",
                    d: "M22.6,15.3c-0.1-0.1-0.1-0.2-0.2-0.2l0,0l-0.1-0.2l0,0l0,0l0,0L12.1,4.2c-0.2-0.2-0.6-0.5-1.1-0.5 c-0.9,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.7,0.4,1l0,0l9.3,9.7l-9.3,9.7c-0.3,0.3-0.6,0.7-0.6,1.1c0,0.9,0.7,1.5,1.5,1.5 c0.5,0,1-0.2,1.2-0.6l0,0l10.2-10.7l0,0l0,0l0,0l0.2-0.2c0.1-0.1,0.1-0.2,0.2-0.2l0,0c0-0.1,0.1-0.2,0.1-0.2l0,0 c0-0.1,0.1-0.2,0.1-0.3l0,0c0-0.1,0-0.2-0.1-0.3l0,0v-0.1C22.6,15.5,22.6,15.4,22.6,15.3L22.6,15.3L22.6,15.3z"
                })
            })
        }

        function bt(e, t) {
            if (!t) return !1;
            const n = e.getBoundingClientRect(),
                o = t.getBoundingClientRect();
            return n.top >= o.top && n.left >= o.left && n.bottom <= o.bottom && n.right <= o.right
        }

        function yt({
            category: e,
            onToggleChange: t,
            sectionText: n,
            toggleValue: o,
            modalBodyRef: i
        }) {
            const [s, r] = et(!1), a = e === f.NECESSARY, c = ot(null), l = ot(null), h = () => {
                r(!s)
            };
            nt((() => {
                if (s) {
                    const e = c.current;
                    e && e.scrollIntoView && !bt(e, i.current) && e.scrollIntoView({
                        behavior: "smooth"
                    })
                }
            }), [s, i, c]);
            return ut("div", {
                className: "hs-category-row",
                ref: c,
                children: [ut("div", {
                    className: "hs-category-row-header",
                    children: [ut("button", {
                        id: `hs-category-${e}`,
                        className: "hs-category-label",
                        onClick: h,
                        "aria-expanded": s,
                        "aria-controls": `hs-category-description-${e}`,
                        tabIndex: 0,
                        children: [ut(pt, {
                            className: "description-accordion-arrow " + (s ? "rotated" : "")
                        }), ut("span", {
                            dangerouslySetInnerHTML: V(n.label)
                        })]
                    }), !a && ut(mt, {
                        category: e,
                        disabled: e === f.NECESSARY,
                        onToggleChange: e => t(e),
                        toggleValue: o
                    }), n.toggleLabel && ut("span", {
                        className: "hs-always-active-label",
                        dangerouslySetInnerHTML: V(n.toggleLabel),
                        tabIndex: 0,
                        "aria-label": n.toggleLabel
                    })]
                }), ut("div", {
                    className: "hs-category-description " + (s ? "visible" : ""),
                    ref: l,
                    style: {
                        maxHeight: s && l.current ? 2 * l.current.scrollHeight : 0
                    },
                    id: `hs-category-description-${e}`,
                    dangerouslySetInnerHTML: V(n.description),
                    tabIndex: 0
                })]
            })
        }
        var vt = n(2),
            Ct = n.n(vt),
            xt = n(3),
            St = n.n(xt);
        const wt = (e, t, n, o, i) => {
            const s = e.getDocument(),
                r = s.createElement("style");
            r.setAttribute("type", "text/css");
            r.setAttribute("id", o);
            const a = new RegExp("https://api_base_url", "g"),
                c = i ? t.replace(a, i) : t,
                l = s.createTextNode(c);
            r.appendChild(l);
            s.head.appendChild(r)
        };

        function Tt(e, t, n) {
            if (!e.getHasLoadedBaseStyle()) {
                wt(e, Ct(), t, b, n);
                e.setHasLoadedBaseStyle(!0)
            }
        }

        function kt(e, t) {
            if (!e.getHasLoadedCbcStyle()) {
                wt(e, St(), t, y);
                e.setHasLoadedCbcStyle(!0)
            }
        }

        function Ot({
            accentColor: e,
            consent: t,
            context: n,
            modalText: o,
            onAcceptCategories: i,
            onCloseModal: s
        }) {
            const r = ot(null),
                a = ot(null),
                c = ot(null),
                l = ot(null);
            nt((() => {
                r.current && _t(n, r.current, a.current, c.current)
            }), [n, r, a, c]);
            const [h, d] = et(t.categories.analytics), [u, m] = et(t.categories.advertisement), [p, b] = et(t.categories.functionality), y = () => {
                i({
                    [f.ANALYTICS]: h,
                    [f.ADVERTISEMENT]: u,
                    [f.FUNCTIONALITY]: p
                })
            }, v = () => {
                d(!0);
                m(!0);
                b(!0);
                i({
                    [f.ANALYTICS]: !0,
                    [f.ADVERTISEMENT]: !0,
                    [f.FUNCTIONALITY]: !0
                })
            };
            kt(n, e);
            return ut("div", {
                id: g,
                "data-nosnippet": "true",
                children: ut("div", {
                    id: _,
                    ref: r,
                    role: "alertdialog",
                    "aria-modal": "true",
                    "aria-labelledby": "hs-modal-introduction",
                    "aria-describedby": "hs-modal-introduction-description",
                    tabIndex: 0,
                    children: [ut("div", {
                        id: "hs-modal-header",
                        children: ut("div", {
                            id: "hs-modal-header-container",
                            children: ut("button", {
                                id: "hs-modal-close-button",
                                className: "hs-close-button",
                                onClick: () => s(),
                                ref: a,
                                tabIndex: 0,
                                "aria-label": "Close modal",
                                children: ut(gt, {})
                            })
                        })
                    }), ut("div", {
                        id: "hs-modal-body",
                        ref: l,
                        children: ut("div", {
                            id: "hs-modal-body-container",
                            children: [ut("div", {
                                id: "hs-modal-introduction",
                                children: ut("span", {
                                    dangerouslySetInnerHTML: V(o.introduction.label)
                                })
                            }), ut("div", {
                                id: "hs-modal-introduction-description",
                                children: ut("p", {
                                    dangerouslySetInnerHTML: V(o.introduction.description)
                                })
                            }), ut("div", {
                                id: "hs-categories-container",
                                children: [ut(yt, {
                                    category: f.NECESSARY,
                                    onToggleChange: () => {},
                                    sectionText: o.necessary,
                                    toggleValue: !0,
                                    modalBodyRef: l
                                }), ut(yt, {
                                    category: f.ANALYTICS,
                                    onToggleChange: e => d(e),
                                    sectionText: o.analytics,
                                    toggleValue: h,
                                    modalBodyRef: l
                                }), ut(yt, {
                                    category: f.ADVERTISEMENT,
                                    onToggleChange: e => m(e),
                                    sectionText: o.advertisement,
                                    toggleValue: u,
                                    modalBodyRef: l
                                }), ut(yt, {
                                    category: f.FUNCTIONALITY,
                                    onToggleChange: e => b(e),
                                    sectionText: o.functionality,
                                    toggleValue: p,
                                    modalBodyRef: l
                                })]
                            })]
                        })
                    }), ut("div", {
                        id: "hs-modal-footer",
                        children: ut("div", {
                            id: "hs-modal-footer-container",
                            children: [ut("button", {
                                id: "hs-modal-accept-all",
                                onClick: () => v(),
                                tabIndex: 0,
                                children: o.acceptLabel
                            }), ut("button", {
                                id: "hs-modal-save-settings",
                                onClick: y,
                                ref: c,
                                tabIndex: 0,
                                children: o.saveSettingsLabel
                            })]
                        })
                    })]
                })
            })
        }

        function Et({
            apiBaseUrl: e,
            consent: t,
            setting: n,
            context: o,
            onConsentChange: i,
            onCloseBannerWithoutConsent: s,
            dismissNotifyBanner: r
        }) {
            const [a, c] = et(!1), l = e => {
                if (e !== q.NOTIFY) {
                    t.update(!0);
                    i(t)
                } else r()
            }, d = () => {
                t.update(!1);
                i(t)
            }, u = ({
                analytics: e,
                advertisement: n,
                functionality: o
            }) => {
                t.updateCategories({
                    analytics: e,
                    advertisement: n,
                    functionality: o
                });
                i(t)
            }, g = e => {
                if (e !== q.OPT_IN && e !== q.COOKIES_BY_CATEGORY)
                    if (e !== q.NOTIFY) {
                        t.update(!0);
                        i(t)
                    } else r();
                else s()
            }, _ = () => {
                c(!0)
            }, f = () => {
                c(!1);
                const e = o.getDocument().getElementById(h);
                e && e.focus()
            };
            Tt(o, n.customizationSettings.accentColor, e);
            return ut(xe, {
                children: [ut(ft, {
                    context: o,
                    setting: n,
                    onAcceptAll: l,
                    onDeclineAll: d,
                    onCookieSettingsClick: _,
                    onCloseBannerButtonClick: g,
                    isModalDisplayed: a
                }), a && ut(Ot, {
                    accentColor: n.customizationSettings.accentColor,
                    consent: t,
                    context: o,
                    modalText: n.policy.text.modalText,
                    onAcceptCategories: u,
                    onCloseModal: f
                })]
            })
        }

        function It({
            apiBaseUrl: e,
            context: t,
            setting: n,
            onCloseBanner: o
        }) {
            Tt(t, n.customizationSettings.accentColor, e);
            return ut("div", {
                id: d,
                "data-nosnippet": "true",
                role: "dialog",
                "aria-describedby": "hs-banner-gpc-wording",
                children: ut("div", {
                    id: "hs-banner-gpc-inner",
                    children: [ut("div", {
                        id: "hs-banner-gpc-header",
                        children: ut("button", {
                            id: "hs-banner-gpc-close-button",
                            className: "hs-close-button",
                            onClick: o,
                            "aria-label": "Dismiss banner",
                            children: ut(gt, {})
                        })
                    }), ut("div", {
                        id: "hs-banner-gpc-wording",
                        dangerouslySetInnerHTML: V(n.gpcSettings.notificationText)
                    })]
                })
            })
        }
        var Lt = ["helvetica", "arial", "arial-black", "verdana", "tahoma", "trebuchet ms", "impact", "times new roman", "georgia", "palatino", "courier", "comic sans ms", "courier new", "sans-serif", "system-ui"];

        function At(e) {
            return `${E}?family=${e}:ital,wght@${O.join(";")}&display=swap`
        }

        function Nt(e, t) {
            const n = t || "Lato",
                o = e.getDocument(),
                i = e.getWindow();
            if (Lt.indexOf(n.toLowerCase()) > -1) return;
            if (i[k]) return;
            const s = o.createElement("link");
            s.setAttribute("href", At(n));
            s.setAttribute("rel", "stylesheet");
            s.setAttribute("class", T);
            o.head.appendChild(s);
            i[k] = !0
        }
        const Bt = (e, t) => {
            const n = e.getDocument().createElement("div");
            n.setAttribute("id", u);
            n.setAttribute("style", t);
            const o = e.getDocument().body;
            o.insertBefore(n, o.firstChild);
            return n
        };

        function Rt(e, t, n, o, i, s, r, a, c) {
            const l = Bt(i, o);
            Nt(i, c);
            $e(ut(Et, {
                apiBaseUrl: e,
                consent: t,
                setting: n,
                context: i,
                onConsentChange: e => s(e),
                onCloseBannerWithoutConsent: r,
                dismissNotifyBanner: a
            }), l);
            return l
        }

        function Pt(e, t, n, o, i, s) {
            const r = Bt(t, o);
            Nt(t, s);
            $e(ut(It, {
                apiBaseUrl: e,
                context: t,
                setting: n,
                onCloseBanner: i
            }), r);
            return r
        }
        class Dt {
            static postActivity(e, t, n) {
                fetch(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(n)
                }).then((() => B.info(`Sent a banner ${t} event.`))).catch((() => B.error(`There was an issue sending a banner ${t} event.`)))
            }
            static sendView(e, t) {
                Dt.postActivity(`${e}/activity/view`, "VIEW", t)
            }
            static sendClick(e, t) {
                Dt.postActivity(`${e}/activity/click`, "CLICK", t)
            }
        }
        let Gt;
        ! function(e) {
            e[e.ROUND = 0] = "ROUND";
            e[e.SQUARE = 1] = "SQUARE";
            e[e.PILL = 2] = "PILL"
        }(Gt || (Gt = {}));
        const Ut = {
                [Gt.ROUND]: "0.5em",
                [Gt.SQUARE]: "0",
                [Gt.PILL]: "3em"
            },
            Mt = {
                [Gt.ROUND]: "12px",
                [Gt.SQUARE]: "0",
                [Gt.PILL]: "0"
            },
            Ft = e => null == e,
            Yt = (e, t) => t ? [{
                cssVar: e,
                value: t
            }] : [],
            $t = (e, t) => t ? [{
                cssVar: e,
                value: t
            }] : [],
            Ht = (e, t) => t ? [{
                cssVar: e,
                value: `${t.number}${t.units}`
            }] : [],
            Vt = (e, t) => Ft(t) ? [] : [{
                cssVar: e,
                value: Ut[t]
            }],
            zt = (e, t) => Ft(t) ? [] : [{
                cssVar: e,
                value: Mt[t]
            }],
            Wt = (e, t) => Ft(t) ? [] : [...$t(`--hs-banner-${e}-color`, t.color), ...$t(`--hs-banner-${e}-text-color`, t.textColor), ...$t(`--hs-banner-${e}-border-color`, t.borderColor)],
            Kt = e => Ft(e) ? [] : [{
                cssVar: "--hs-banner-close-button-display",
                value: e ? "flex" : "none"
            }],
            qt = e => {
                if (Ft(e)) return [];
                switch (U.fromJS(e)) {
                    case U.BOTTOM:
                        return [{
                            cssVar: "--hs-banner-inset",
                            value: "auto 50% 32px"
                        }, {
                            cssVar: "--hs-banner-translate-x",
                            value: "-50%"
                        }, {
                            cssVar: "--hs-banner-translate-y",
                            value: "0"
                        }];
                    case U.BOTTOM_LEFT:
                        return [{
                            cssVar: "--hs-banner-inset",
                            value: "auto auto 32px 32px"
                        }, {
                            cssVar: "--hs-banner-translate-x",
                            value: "0"
                        }, {
                            cssVar: "--hs-banner-translate-y",
                            value: "0"
                        }];
                    case U.BOTTOM_RIGHT:
                        return [{
                            cssVar: "--hs-banner-inset",
                            value: "auto 32px 32px auto"
                        }, {
                            cssVar: "--hs-banner-translate-x",
                            value: "0"
                        }, {
                            cssVar: "--hs-banner-translate-y",
                            value: "0"
                        }];
                    case U.CENTER:
                        return [{
                            cssVar: "--hs-banner-inset",
                            value: "50% auto auto 50%"
                        }, {
                            cssVar: "--hs-banner-translate-x",
                            value: "-50%"
                        }, {
                            cssVar: "--hs-banner-translate-y",
                            value: "-50%"
                        }];
                    default:
                        return [{
                            cssVar: "--hs-banner-inset",
                            value: "32px auto auto 50%"
                        }, {
                            cssVar: "--hs-banner-translate-x",
                            value: "-50%"
                        }, {
                            cssVar: "--hs-banner-translate-y",
                            value: "0"
                        }]
                }
            },
            Jt = e => e.map((e => `${e.cssVar}:${e.value}`)).join(";"),
            jt = e => [...$t("--hs-banner-color", e.bannerColor), ...$t("--hs-banner-text-color", e.bannerTextColor), ...$t("--hs-banner-settings-text-color", e.bannerSettingsButtonTextColor), ...Ht("--hs-banner-width", e.bannerWidth), ...Ht("--hs-banner-padding", e.bannerPadding), ...zt("--hs-banner-corners", e.bannerCorners), ...Vt("--hs-banner-button-corners", e.bannerButtonCorners), ...Wt("accept", e.bannerAcceptButtonStyle), ...Wt("decline", e.bannerDeclineButtonStyle), ...Kt(e.showCloseButton), ...qt(e.position), ...$t("--hs-banner-modal-color", e.modalColor), ...$t("--hs-banner-modal-text-color", e.modalTextColor), ...Ht("--hs-banner-modal-padding", e.modalContainerPadding), ...Ht("--hs-banner-modal-width", e.modalWidth), ...zt("--hs-banner-modal-corners", e.modalCorners), ...Vt("--hs-banner-modal-button-corners", e.modalButtonCorners), ...Wt("modal-accept", e.modalAcceptButtonStyle), ...Wt("modal-save", e.modalSaveSettingsButtonStyle), ...zt("--hs-banner-modal-category-corners", e.modalCategoryCorners), ...$t("--hs-banner-modal-cateogry-color", e.modalCategoryColor), ...$t("--hs-banner-modal-category-text-color", e.modalCategoryTextColor), ...$t("--hs-banner-modal-toggle-on-color", e.modalCategoryToggleOnColor), ...$t("--hs-banner-modal-toggle-off-color", e.modalCategoryToggleOffColor), ...Yt("--hs-banner-font-family", e.fontFamily), ...Ht("--hs-banner-font-size", e.fontSize)],
            Qt = e => [...$t("--hs-banner-accentColor", e.accentColor), ...qt(e.position.getValue()), ...Kt(e.showCloseButton)],
            Zt = e => {
                const t = {};
                if (!e) return t;
                const n = e.indexOf("-"),
                    [o, i] = -1 === n ? [e, void 0] : [e.substring(0, n), e.substring(n + 1)];
                o && (t.countryCode = o);
                i && (t.regionCode = i);
                return t
            },
            Xt = (e, t) => {},
            en = (e, t) => {
                try {
                    e()
                } catch (e) {
                    console.error(e);
                    t && t(e)
                }
            },
            tn = e => {
                if (!e.hsCookieBanner) return;
                const t = e.hsCookieBanner.rawPerfMetrics;
                if (!t) return;
                const n = ["numSettings", "bannerInitAt", "bannerStartAt", "bannerReadyAt"];
                for (const e of n)
                    if (null == t[e]) return;
                const o = null == t.geolocationReceivedAt || null == t.geolocationRequestedAt;
                return t.usesGeolocation && o ? void 0 : {
                    numSettings: t.numSettings,
                    bannerInitAt: t.bannerInitAt,
                    bannerStartAt: t.bannerStartAt,
                    bannerReadyAt: t.bannerReadyAt,
                    matchedBannerType: t.matchedBannerType,
                    usesGpc: t.usesGpc,
                    geolocationRequestInCriticalPath: t.geolocationRequestInCriticalPath,
                    geolocationRequestDuration: t.usesGeolocation ? t.geolocationReceivedAt - t.geolocationRequestedAt : void 0,
                    bannerRendered: t.bannerRendered
                }
            },
            nn = () => ({
                numSettings: void 0,
                bannerInitAt: void 0,
                bannerStartAt: void 0,
                bannerReadyAt: void 0,
                matchedBannerType: void 0,
                usesGpc: !1,
                usesGeolocation: !1,
                geolocationRequestInCriticalPath: !1,
                geolocationReceivedAt: void 0,
                geolocationRequestedAt: void 0,
                bannerRendered: !1
            }),
            on = () => window.performance.now ? Math.round(window.performance.now()) : void 0,
            sn = (e, t, n) => {
                try {
                    if (!e.hsCookieBanner || !e.hsCookieBanner.rawPerfMetrics) return;
                    e.hsCookieBanner.rawPerfMetrics[t] = n
                } catch (e) {
                    Xt(e)
                }
            };

        function rn(...e) {
            (window.dataLayer = window.dataLayer || []).push(arguments)
        }
        const an = (e, t) => !!(e && !w.includes(e) || t && q.isOptIn(t)),
            cn = (e, t, n) => {
                const o = Zt(t).countryCode;
                if (!an(o, n)) return;
                const i = e.categories.advertisement ? "granted" : "denied";
                rn("consent", "update", {
                    ad_storage: i,
                    analytics_storage: e.categories.analytics ? "granted" : "denied",
                    ad_user_data: i,
                    ad_personalization: i
                })
            },
            ln = e => fetch(e).then((t => {
                if (!t.ok) throw new Error(`Non-2XX status: ${t.status}, url: ${e}`);
                return t.text()
            })),
            hn = async e => {
                const t = `${e}/cf-location`,
                    n = await ln(t).catch((e => {
                        Xt(e, {
                            failingComponent: "cfGeolocationWorkerRequest"
                        });
                        return null
                    }));
                if (n) return n;
                const o = `https://${new URL(e).hostname}/cookie-banner-public/v2/cf-location`;
                return ln(o)
            },
            dn = "wildcard.hs-banner.com",
            un = e => {
                e.configuration.wildcard = !0;
                return e
            };
        class gn {
            constructor(e) {
                this.publicMethods = ["showBanner", "hideBanner", "addPrivacyConsentListener", "setApiBaseUrl", "setCookiesToSubdomain", "setUseSecureCookies", "addCookieDomain", "addEnabledFeatureGates", "setBannerSettings", "setCustomizationSettings", "setUseGeoLocation", "setGeoLocation", "setHubSpotConsent", "addPrivacySettingsListener", "revokeCookieConsent", "useGoogleConsentModeV2", "setBusinessUnitId"];
                this.enabledFeatureGates = [];
                this.businessUnitId = 0;
                this.scriptVersion = "v2";
                this.context = e;
                this.bannerSettings = [];
                this.privacyConsentListeners = [];
                this.privacySettingsListeners = [];
                this.useGeoLocation = !1;
                this.useGCMV2 = !1;
                this.reportedMissingGeolocation = !1;
                this.cookie = new ae(e);
                this.isRunningInTestMode = e.getLocation().search.includes(l);
                this.removeDeprecatedBannerCookies()
            }
            removeDeprecatedBannerCookies() {
                this.cookie.get(ce.OPT_OUT_COOKIE.getName()) && this.cookie.remove(ce.OPT_OUT_COOKIE.getName());
                this.cookie.get(ce.INITIAL_OPT_IN.getName()) && this.cookie.remove(ce.INITIAL_OPT_IN.getName())
            }
            run() {
                const e = this.context.getWindow();
                if (this.disableBannerFlagSet()) {
                    B.info('"PRIVACY" flag found in disabledHsPopups window queue. Banner script will not run.');
                    return !0
                }
                sn(e, "numSettings", this.bannerSettings.length);
                this.findMatchingSetting();
                this.logGpcSignal();
                if (!this.matchedSetting) {
                    B.debug("we were unable to find the matching settings for this webpages. The banner will not run.");
                    this.setConsent(new ne(!0), {
                        reportClick: !1
                    });
                    return !1
                }
                sn(e, "matchedBannerType", this.matchedSetting.policy.type.getValue());
                if (this.shouldScanningOverride()) {
                    this.setConsent(new ne(!0), {
                        reportClick: !1,
                        persist: !0,
                        treatAsConsentEvent: !0
                    });
                    return !0
                }
                const t = !!this.shouldGpcOverride();
                sn(e, "usesGpc", t);
                if (t) {
                    this.setConsent(new ne(!1), {
                        persist: !1,
                        reportClick: !1
                    });
                    this.isGpcBannerDismissCookiePresent() || this.renderGpcBanner();
                    return !0
                }
                switch (this.matchedSetting.policy.type) {
                    case q.NO_COOKIES:
                        this.setConsent(new ne(!1), {
                            reportClick: !1
                        });
                        break;
                    case q.OPT_IN:
                    case q.COOKIES_BY_CATEGORY:
                        if (this.useConsentFromExistingCookie()) break;
                        this.cookie.removeGACookie();
                        this.setConsent(ne.buildInitialConsent(), {
                            persist: !1,
                            reportClick: !1
                        });
                        this.renderBanner();
                        break;
                    case q.OPT_OUT_BY_CATEGORY:
                    case q.OPT_OUT:
                        if (this.useConsentFromExistingCookie()) break;
                        this.setConsent(new ne(!0), {
                            persist: !1,
                            reportClick: !1
                        });
                        this.renderBanner();
                        break;
                    case q.NOTIFY:
                        this.setConsent(new ne(!0), {
                            persist: !1,
                            reportClick: !1
                        });
                        if (this.isNotifyBannerDismissCookiePresent()) break;
                        this.renderBanner();
                        break;
                    case q.COOKIES_WITHOUT_BANNER:
                    default:
                        this.setConsent(new ne(!0), {
                            reportClick: !1
                        })
                }
                return !0
            }
            useConsentFromExistingCookie() {
                const e = this.readConsentCookie();
                if (e) {
                    this.setConsent(e, {
                        persist: !1,
                        reportClick: !1
                    });
                    e.hasAnalyticsConsent() || this.cookie.removeGACookie();
                    return !0
                }
                return !1
            }
            shouldScanningOverride() {
                return [q.OPT_OUT, q.OPT_OUT_BY_CATEGORY, q.COOKIES_BY_CATEGORY, q.OPT_IN, q.NOTIFY].includes(this.matchedSetting.policy.type) && this.context.getWindow()[r]
            }
            shouldGpcOverride() {
                return this.matchedSetting.gpcSettings.enabled && this.getGpcSignal()
            }
            getGpcSignal() {
                const e = this.context.getLocation().search;
                if (e.includes(s)) {
                    return {
                        TRUE: !0,
                        FALSE: !1
                    }[(new URLSearchParams(e).get(s) || "").toUpperCase()]
                }
                return this.context.getNavigator().globalPrivacyControl
            }
            logGpcSignal() {
                B.debug(`GPC signal: ${this.getGpcSignal()}`)
            }
            findMatchingSetting() {
                const e = this.context.getPathname(),
                    {
                        countryCode: t,
                        regionCode: n
                    } = Zt(this.geoLocation),
                    o = this.bannerSettings.filter((e => e.enabled)).map((o => ({
                        setting: o,
                        matchResult: o.configuration.test(e, t, n)
                    }))).reduce(((e, t) => D(e.matchResult, t.matchResult) ? e : t), {
                        setting: null,
                        matchResult: R
                    });
                P(o.matchResult) && o.setting && this.setMatchingSetting(o.setting.withSanitizedPolicy())
            }
            setMatchingSetting(e) {
                this.matchedSetting = e;
                if (0 === this.privacySettingsListeners.length) return;
                const t = e.toLegacyPrivacyPolicy();
                this.privacySettingsListeners.forEach((e => this.safeCallListener(e, t)))
            }
            getMatchingSetting() {
                return this.matchedSetting
            }
            hasEnabledFeatureGate(e) {
                return this.enabledFeatureGates && this.enabledFeatureGates.includes(e)
            }
            setApiBaseUrl(e) {
                /^https:\/\/js-?.{0,3}\.hs-banner(qa)?\.com.*/.test(e) ? this.apiBaseUrl = e : B.error("unsupported base Api url provided.")
            }
            setBannerSettings(e) {
                (e[this.getCurrentDomain()] || []).forEach((e => this.bannerSettings.push(Q.fromJS(e))));
                (e[this.getWildcardDomain()] || []).forEach((e => this.bannerSettings.push(un(Q.fromJS(e)))))
            }
            setCustomizationSettings(e) {
                this.styleOverrides = e[this.getCurrentDomain()];
                this.wildcardStyleOverrides = e[this.getWildcardDomain()];
                this.bannerParentElement && this.bannerParentElement.setAttribute("style", this.getRenderStyles())
            }
            getCurrentDomain() {
                return this.context.getLocation().hostname
            }
            getWildcardDomain() {
                return 0 === this.businessUnitId ? dn : `${this.businessUnitId}.${dn}`
            }
            getCurrentGeoLocation() {
                const e = this.context.getWindow();
                sn(e, "usesGeolocation", !0);
                sn(e, "geolocationRequestedAt", on());
                const t = this.context.getLocation().search;
                if (t.includes(i)) {
                    const e = new URLSearchParams(t).get(i);
                    return Promise.resolve(e || "")
                }
                return hn(this.apiBaseUrl).then((t => {
                    sn(e, "geolocationReceivedAt", on());
                    return t
                })).catch((e => {
                    B.error("We could not fetch the geolocation.");
                    Xt(e);
                    return ""
                }))
            }
            setGeoLocation(e) {
                this.geoLocation = e;
                const {
                    countryCode: t,
                    regionCode: n
                } = Zt(this.geoLocation);
                try {
                    null == t && this.reportEmptyGeolocation(!1);
                    "US" === t && null == n && this.reportEmptyGeolocation(!0)
                } catch (e) {
                    console.error("Failed to report missing geolocation data", e)
                }
            }
            addEnabledFeatureGates(e) {
                e.forEach((e => this.enabledFeatureGates.push(e)))
            }
            addCookieDomain(e) {
                this.cookie.addDomain(e)
            }
            setCookiesToSubdomain(e) {
                this.cookie.setCookiesToSubdomain(e)
            }
            setUseSecureCookies(e) {
                this.cookie.setUseSecureCookies(e)
            }
            setUseGeoLocation() {
                this.useGeoLocation = !0
            }
            useGoogleConsentModeV2() {
                if (!this.useGCMV2) {
                    this.useGCMV2 = !0;
                    this.consent && this.sendConsentToGCMV2(this.consent.getSafeCopy())
                }
            }
            sendConsentToGCMV2(e) {
                const t = this.matchedSetting && this.matchedSetting.policy && this.matchedSetting.policy.type;
                if (this.geoLocation) cn(e, this.geoLocation, t);
                else {
                    null == this.gcmGeoLocationFetchPromise && (this.gcmGeoLocationFetchPromise = this.getCurrentGeoLocation().then((e => {
                        this.setGeoLocation(e);
                        return e
                    })));
                    this.gcmGeoLocationFetchPromise.then((n => {
                        cn(e, n, t)
                    })).catch((e => {
                        Xt(e)
                    }))
                }
            }
            addPrivacyConsentListener(e) {
                this.consent && this.safeCallListener(e, this.consent.getSafeCopy());
                this.privacyConsentListeners.push(e)
            }
            setConsent(e, t) {
                const n = {
                        persist: !0,
                        treatAsConsentEvent: !0,
                        reportClick: !0
                    },
                    {
                        persist: o,
                        treatAsConsentEvent: i,
                        reportClick: s
                    } = Object.assign({}, n, t);
                this.consent = e;
                i && this.hideBanner();
                o && this.setConsentCookie();
                if (!this.isRunningInTestMode) {
                    s && (this.consent.hasAnalyticsConsent() ? this.trackAction("trackApproveCookieConsent") : this.trackAction("trackDeclineCookieConsent"));
                    if (i) {
                        this.privacyConsentListeners.forEach((t => this.safeCallListener(t, e.getSafeCopy())));
                        this.useGCMV2 && this.sendConsentToGCMV2(e.getSafeCopy());
                        this.consent.adsHasChangedToFalse() && this.cookie.removeFBPCookie()
                    }
                    s && this.sendClickActivity()
                }
            }
            getConsent() {
                return this.consent.getSafeCopy()
            }
            setConsentCookie() {
                if (!this.matchedSetting || this.isRunningInTestMode) return;
                const e = this.matchedSetting.policy.type;
                e !== q.NO_COOKIES && e !== q.COOKIES_WITHOUT_BANNER && e !== q.NOTIFY && this.cookie.set(ce.CATEGORY_PREFERENCE_COOKIE.getName(), this.consent.toCookieString(), {
                    daysToExpire: ce.CATEGORY_PREFERENCE_COOKIE.getExpirationDays(),
                    path: "/"
                })
            }
            readConsentCookie() {
                const e = this.cookie.get(ce.CATEGORY_PREFERENCE_COOKIE.getName());
                return e ? ne.buildFromCookieString(e) : null
            }
            safeCallListener(e, t) {
                try {
                    e(t, this.scriptVersion)
                } catch (e) {
                    B.error("error calling listener.")
                }
            }
            isGpcBannerDismissCookiePresent() {
                return !!this.cookie.get(ce.GPC_BANNER_DISMISS_COOKIE.getName())
            }
            setGpcBannerDismissCookie() {
                this.cookie.set(ce.GPC_BANNER_DISMISS_COOKIE.getName(), "true", {
                    daysToExpire: ce.GPC_BANNER_DISMISS_COOKIE.getExpirationDays(),
                    path: "/"
                })
            }
            isNotifyBannerDismissCookiePresent() {
                return !!this.cookie.get(ce.NOTIFY_BANNER_DIMISS_COOKIE.getName())
            }
            setNotifyBannerDismissCookie() {
                this.cookie.set(ce.NOTIFY_BANNER_DIMISS_COOKIE.getName(), "true", {
                    daysToExpire: ce.NOTIFY_BANNER_DIMISS_COOKIE.getExpirationDays(),
                    path: "/"
                })
            }
            dismissNotifyBanner() {
                this.hideBanner();
                this.setNotifyBannerDismissCookie()
            }
            dismissGpcBanner() {
                this.hideBanner();
                this.setGpcBannerDismissCookie()
            }
            getRenderStyles() {
                try {
                    if (!this.matchedSetting) return "";
                    if (this.styleOverrides && !this.matchedSetting.configuration.wildcard) {
                        B.debug("using style overrides");
                        return Jt(jt(this.styleOverrides))
                    }
                    if (this.wildcardStyleOverrides && this.matchedSetting.configuration.wildcard) {
                        B.debug("using wildcard style overrides");
                        return Jt(jt(this.wildcardStyleOverrides))
                    }
                    B.debug("using legacy customization render styles");
                    return Jt(Qt(this.matchedSetting.customizationSettings))
                } catch (e) {
                    console.error("unable to utilize style overrides", e);
                    return ""
                }
            }
            renderGpcBanner() {
                this.bannerParentElement = Pt(this.apiBaseUrl, this.context, this.matchedSetting, this.getRenderStyles(), this.dismissGpcBanner.bind(this), this.styleOverrides && this.styleOverrides.fontFamily);
                if ("complete" === document.readyState) {
                    var e;
                    null === (e = document.getElementById(d)) || void 0 === e || e.classList.add(p)
                } else window.addEventListener("load", (() => {
                    var e;
                    null === (e = document.getElementById(d)) || void 0 === e || e.classList.add(p)
                }), {
                    once: !0
                });
                sn(this.context.getWindow(), "bannerRendered", !0);
                this.sendViewActivity()
            }
            renderBanner() {
                this.bannerParentElement = Rt(this.apiBaseUrl, this.consent, this.matchedSetting, this.getRenderStyles(), this.context, this.setConsent.bind(this), this.hideBanner.bind(this), this.dismissNotifyBanner.bind(this), this.styleOverrides && this.styleOverrides.fontFamily);
                if ("complete" === document.readyState) {
                    var e;
                    null === (e = document.getElementById(h)) || void 0 === e || e.classList.add(p)
                } else window.addEventListener("load", (() => {
                    var e;
                    null === (e = document.getElementById(h)) || void 0 === e || e.classList.add(p)
                }), {
                    once: !0
                });
                sn(this.context.getWindow(), "bannerRendered", !0);
                this.sendViewActivity()
            }
            hideBanner() {
                if (this.bannerParentElement) {
                    const e = this.bannerParentElement.children;
                    for (let t = 0; t < e.length; t++) e[t].classList.add(m)
                }
            }
            showBanner() {
                if (this.matchedSetting.policy.type === q.NO_COOKIES || this.matchedSetting.policy.type === q.COOKIES_WITHOUT_BANNER) return;
                this.bannerParentElement || (this.shouldGpcOverride() ? this.renderGpcBanner() : this.renderBanner());
                const e = this.bannerParentElement.children;
                if (e.length > 1) {
                    e[1].classList.remove(m)
                } else e[0].classList.remove(m)
            }
            invoke(e, t) {
                if (!this.publicMethods.includes(e) || !Reflect.has(this, e)) {
                    B.debug(`failed to invoke method ${e} of the banner.`);
                    throw new Error("Could not invoke banner method.")
                }
                Reflect.get(this, e).apply(this, t)
            }
            getBaseActivityPayload() {
                const e = this.context.getWindow().hsVars,
                    t = e && e.page_id;
                return {
                    bannerGeoLocation: this.geoLocation || "",
                    bannerPolicyId: this.matchedSetting.id,
                    bannerType: this.matchedSetting.policy.type.getName(),
                    domain: this.context.getHostname(),
                    portalId: this.matchedSetting.portalId,
                    contentId: t || ""
                }
            }
            sendClickActivity() {
                if (!this.consent || !this.matchedSetting || this.isRunningInTestMode) return;
                const e = {
                        consentAllowed: this.consent.allowed,
                        consentAnalytics: this.consent.categories.analytics,
                        consentAdvertisement: this.consent.categories.advertisement,
                        consentFunctionality: this.consent.categories.functionality
                    },
                    t = Object.assign({}, this.getBaseActivityPayload(), e);
                Dt.sendClick(this.apiBaseUrl, t)
            }
            sendViewActivity() {
                if (!this.matchedSetting || this.isRunningInTestMode) return;
                const e = this.getBaseActivityPayload();
                Dt.sendView(this.apiBaseUrl, e)
            }
            getAnalyticsQueue() {
                return this.context.getWindow()[o] = this.context.getWindow()[o] || []
            }
            trackAction(e) {
                try {
                    this.getAnalyticsQueue().push([e])
                } catch (e) {
                    B.error(`Unable to send analytics tracking event: ${e}`)
                }
            }
            disableBannerFlagSet() {
                if (!0 === this.context.getWindow()[x]) return !0;
                const e = this.context.getWindow()[v] || [];
                return Array.isArray(e) && e.includes(C)
            }
            setBusinessUnitId(e) {
                this.businessUnitId = e
            }
            revokeCookieConsent() {
                [ce.INITIAL_OPT_IN.getName(), ce.OPT_OUT_COOKIE.getName(), ce.CATEGORY_PREFERENCE_COOKIE.getName(), ce.GPC_BANNER_DISMISS_COOKIE.getName(), ce.NOTIFY_BANNER_DIMISS_COOKIE.getName(), "__hssc", "__hssrc", "__hstc", "__hs_do_not_track", "hubspotutk", "messagesUtk"].forEach((e => this.cookie.remove(e)));
                this.trackAction("trackRevokeCookieConsent");
                this.setConsent(new ne(!1), {
                    reportClick: !1
                })
            }
            addPrivacySettingsListener(e) {
                this.matchedSetting && this.safeCallListener(e, this.matchedSetting.toLegacyPrivacyPolicy());
                this.privacySettingsListeners.push(e)
            }
            reportEmptyGeolocation(e) {
                if (this.reportedMissingGeolocation) return;
                this.reportedMissingGeolocation = !0;
                const t = `${this.apiBaseUrl}/geolocation-reporting`;
                navigator && navigator.sendBeacon ? navigator.sendBeacon(t, JSON.stringify(e)) : fetch(`${t}${e?"?missingRegionInUS=true":""}`, {
                    keepalive: !0
                }).catch((() => {
                    Xt("unable to report missing geolocation data")
                }))
            }
            setHubSpotConsent(e) {
                const t = ne.fromCategories(e);
                this.consent = t;
                this.privacyConsentListeners.forEach((e => this.safeCallListener(e, t.getSafeCopy())))
            }
        }
        const _n = new CustomEvent(S);
        class fn {
            constructor(e) {
                this.priorityFunctions = ["setApiBaseUrl", "setCookiesToSubdomain", "setUseSecureCookies", "addCookieDomain", "addEnabledFeatureGates", "setBusinessUnitId", "setBannerSettings"];
                const n = e.getWindow();
                if (Array.isArray(n[t])) this.queue = n[t];
                else {
                    this.queue = [];
                    n[t] = this.queue
                }
                this.banner = new gn(e);
                this.context = e
            }
            queuePushFn(e) {
                try {
                    if (!(e && Array.isArray(e) && e.length > 0)) {
                        B.debug("invalid arguments passed to the banner queue.");
                        return !1
                    }
                    const t = e[0],
                        n = e.slice(1);
                    this.banner.invoke(t, n);
                    return !0
                } catch (e) {
                    B.error("There was an error running banner method.")
                }
                return !1
            }
            overrideQueuePush() {
                this.queue.push = this.queuePushFn.bind(this)
            }
            dequeueEntries(e) {
                for (let t = 0; t < this.queue.length; t++) {
                    const n = this.queue[t];
                    if (!Array.isArray(n) || 0 === n.length) continue;
                    const o = n[0];
                    if (e.includes(o)) {
                        this.queuePushFn(n);
                        this.queue.splice(t--, 1)
                    }
                }
            }
            dequeueAllEntries() {
                for (let e = 0; e < this.queue.length; e++) {
                    const t = this.queue[e];
                    if (Array.isArray(t) && 0 !== t.length) {
                        this.queuePushFn(t);
                        this.queue.splice(e--, 1)
                    }
                }
            }
            run() {
                const e = this.context.getWindow(),
                    t = this.context.getDocument();
                if (!e[a]) {
                    e[a] = !0;
                    this.dequeueEntries(["setUseGeoLocation"]);
                    this.dequeueEntries(this.priorityFunctions);
                    this.dequeueAllEntries();
                    this.overrideQueuePush();
                    if (this.banner.useGeoLocation) {
                        sn(e, "geolocationRequestInCriticalPath", !0);
                        this.banner.getCurrentGeoLocation().then((e => {
                            this.banner.setGeoLocation(e);
                            this.banner.run();
                            t.dispatchEvent(_n)
                        }))
                    } else {
                        this.banner.run();
                        t.dispatchEvent(_n)
                    }
                }
            }
        }

        function mn(t) {
            const n = t.getWindow(),
                o = t.getDocument();
            if (n[e]) {
                B.info("the cookie banner has already been loaded via another script.");
                return
            }
            n[e] = !0;
            sn(n, "bannerStartAt", on());
            o.addEventListener(S, (() => {
                sn(n, "bannerReadyAt", on())
            }));
            new fn(t).run()
        }

        function pn(e, t) {
            en((() => {
                mn(e)
            }), t)
        }

        function bn(e, t) {
            const n = e.getWindow(),
                o = e.getDocument();
            n.hsCookieBanner = {
                rawPerfMetrics: nn(),
                getPerfMetrics: () => tn(n)
            };
            sn(n, "bannerInitAt", on());

            function i() {
                pn(e, t);
                o.removeEventListener("DOMContentLoaded", i)
            }
            "loading" === o.readyState ? o.addEventListener("DOMContentLoaded", i) : pn(e, t)
        }
        const yn = A();
        en((() => {
            bn(yn, Xt)
        }), Xt)
    }()
}();
/****** Cookie Banner version static-1.4243 *****/