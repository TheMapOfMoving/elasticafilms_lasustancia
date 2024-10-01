(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [71145],
  {
    50343: function (e) {
      e.exports = function (e, t) {
        for (var o = -1, i = null == e ? 0 : e.length, r = Array(i); ++o < i; )
          r[o] = t(e[o], o, e);
        return r;
      };
    },
    1054: function (e, t, o) {
      var i = o(50857),
        r = o(50343),
        n = o(86152),
        a = o(4795),
        l = 1 / 0,
        c = i ? i.prototype : void 0,
        u = c ? c.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (n(t)) return r(t, e) + "";
        if (a(t)) return u ? u.call(t) : "";
        var o = t + "";
        return "0" == o && 1 / t == -l ? "-0" : o;
      };
    },
    4795: function (e, t, o) {
      var i = o(53366),
        r = o(15125);
      e.exports = function (e) {
        return "symbol" == typeof e || (r(e) && "[object Symbol]" == i(e));
      };
    },
    66188: function (e, t, o) {
      var i = o(1054);
      e.exports = function (e) {
        return null == e ? "" : i(e);
      };
    },
    74930: function (e, t, o) {
      var i = o(66188),
        r = 0;
      e.exports = function (e) {
        var t = ++r;
        return i(e) + t;
      };
    },
    15094: function (e, t, o) {
      "use strict";
      var i = o(52903),
        r = o(2784),
        n = o(87136),
        a = o(74930),
        l = o.n(a),
        c = o(92603),
        u = o(73979),
        d = o(96591),
        s = o(65911);
      let m = (e) => {
          let {
              shareLinkUrl: t = null,
              iconColor: o = u.$_.darkGray,
              iconColorHoverOverride: a = null,
              iconWidth: c = "20px",
              trackEvent: m = () => {},
              space: p = null,
              placement: h = "bottom",
            } = e,
            { t: f } = (0, n.Z)("common"),
            [g, w] = (0, r.useState)(""),
            [k, x] = (0, r.useState)(""),
            [y, v] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            v(l()());
          }, []);
          let _ = async () => {
            const newClipboardLink =
              "https://elasticafilms.com/catalogofilms/la-sustancia/"; // Define the new link here
            "" === k &&
              (await navigator.clipboard.writeText(newClipboardLink), // Use the new link
              x(f("common:common.buttons.copied_link")),
              setTimeout(() => {
                x("");
              }, 2e3));
          };
          return y
            ? (0, i.tZ)(b, {
                onClick: (e) => {
                  e.preventDefault(), m("recommend_link"), _();
                },
                iconColor: o,
                iconColorHoverOverride: a,
                iconWidth: c,
                space: p,
                onMouseEnter: () => w(f("common:common.buttons.copy_link")),
                onMouseLeave: () => w(""),
                children: (0, i.tZ)(s.Z, {
                  message: k || g,
                  uniqId: "".concat(y, "CopyClipboard"),
                  placement: h,
                  children: (0, i.tZ)(d.Od, { width: "100%", color: null }),
                }),
              })
            : (0, i.tZ)(b, {
                iconColor: o,
                iconColorHoverOverride: a,
                iconWidth: c,
                space: p,
                children: (0, i.tZ)(d.Od, { width: "100%", color: null }),
              });
        },
        b = (0, c.Z)("div", { target: "e14yx3w60" })(
          "cursor:pointer;width:",
          (e) => e.iconWidth,
          ";height:",
          (e) => e.iconWidth,
          ";display:flex;justify-content:center;align-items:center;margin-right:",
          (e) => e.space,
          ";&:last-child{margin-right:0;}svg{fill:",
          (e) => e.iconColor,
          ";}&:hover{svg{fill:",
          (e) => e.iconColorHoverOverride,
          ";}}"
        );
      t.Z = m;
    },
    94696: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = o(52903),
        r = o(20360),
        n = o(94449),
        a = o(383),
        l = o(39685);
      let c = () => {
          let { httpContext: e, countryCode: t } = (0, l.Z)(
              (e) => ({
                httpContext: e.appState.httpContext,
                countryCode: e.user.geoLocation,
              }),
              n.wU
            ),
            o = (o) => {
              (0, a.rf)({ ...o, country_code: t }, e);
            };
          return o;
        },
        u = (e) => {
          let { children: t, scrollDetail: o, threshold: n = 0 } = e,
            a = c(),
            l = (e) => {
              e && a(o);
            };
          return (0, i.tZ)(r.df, {
            triggerOnce: !0,
            threshold: n,
            onChange: l,
            children: t,
          });
        };
      var d = u;
    },
    94029: function (e, t, o) {
      "use strict";
      o.r(t);
      var i = o(52903),
        r = o(5632),
        n = o(87136),
        a = o(92603),
        l = o(45374),
        c = o(68254),
        u = o(61210),
        d = o(29336),
        s = o(5738),
        m = o(70178),
        b = o(15094),
        p = o(96591),
        h = o(53052),
        f = o(94696);
      let g = () => {
        let { t: e } = (0, n.Z)("release"),
          t = (0, s.Z)(),
          o = (0, r.useRouter)(),
          { pathname: a } = o,
          g = (0, d.Z)(),
          { hasConsentedToMarketingCookie: y } = (0, u.Z)(),
          v = (0, l.vo)({ url: a, i18nUrlData: g }),
          _ = e("release:release.the-substance.social_share_description", {
            link: v,
          }),
          Z = async () => {
            window.FB.ui({ method: "send", link: v }),
              t({
                data: { clickType: "share-icon", element: "fb-messenger" },
                extraData: {
                  sub_page: "below-fold",
                  page_url: v,
                  film_id: 332868,
                },
              });
          };
        return (0, i.tZ)(f.Z, {
          scrollDetail: {
            scroll_type: "microsite_scrolled_spread_the_word_section",
            scroll_direction: "vertical",
            page_type: "microsite",
            page_url: v,
            film_id: 332868,
            reached_end: !1,
          },
          threshold: 0.5,
          children: (0, i.tZ)(w, {
            children: (0, i.BX)(k, {
              children: [
                (0, i.tZ)(h.U, {
                  as: "h2",
                  children: e("release:release.the-substance.spread_the_word"),
                }),
                (0, i.BX)(x, {
                  children: [
                    (0, i.tZ)("a", {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: "https://api.whatsapp.com/send?text=".concat(
                        encodeURIComponent(_)
                      ),
                      onClick: () =>
                        t({
                          data: {
                            clickType: "share-icon",
                            element: "whats-app",
                          },
                          extraData: {
                            sub_page: "below-fold",
                            page_url: v,
                            film_id: 332868,
                          },
                        }),
                      children: (0, i.tZ)(p.yB, {
                        width: "35px",
                        color: "black",
                      }),
                    }),
                    y &&
                      (0, i.tZ)(m.Z, {
                        onClick: Z,
                        children: (0, i.tZ)(p.qA, {
                          width: "35px",
                          color: "black",
                        }),
                      }),
                    (0, i.tZ)("a", {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: (0, c.L)("", _),
                      onClick: () =>
                        t({
                          data: {
                            clickType: "share-icon",
                            element: "x-twitter",
                          },
                          extraData: {
                            sub_page: "below-fold",
                            page_url: v,
                            film_id: 332868,
                          },
                        }),
                      children: (0, i.tZ)(p.b0, {
                        width: "35px",
                        color: "black",
                      }),
                    }),
                    (0, i.tZ)("a", {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: (0, c.m4)(v),
                      style: { marginBottom: "-3px" },
                      onClick: () =>
                        t({
                          data: {
                            clickType: "share-icon",
                            element: "facebook",
                          },
                          extraData: {
                            sub_page: "below-fold",
                            page_url: v,
                            film_id: 332868,
                          },
                        }),
                      children: (0, i.tZ)(p.Fr, {
                        width: "42px",
                        color: "black",
                      }),
                    }),
                    (0, i.tZ)(b.Z, {
                      iconWidth: "35px",
                      iconColor: "black",
                      shareLinkUrl: v,
                      trackEvent: (e) => {
                        t({
                          data: { clickType: "share-icon", element: e },
                          extraData: {
                            sub_page: "below-fold",
                            page_url: v,
                            film_id: 332868,
                          },
                        });
                      },
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      t.default = g;
      let w = (0, a.Z)("div", { target: "efyb1rg0" })(
          "color:",
          (e) => e.theme.color.black,
          ";margin-top:80px;padding:5px 20px;display:flex;justify-content:center;overflow:hidden;@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){margin-top:60px;}"
        ),
        k = (0, a.Z)("div", { target: "efyb1rg1" })(
          "position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;width:100%;max-width:740px;box-shadow:0 0 6px 0 rgba(0,0,0,0.2);"
        ),
        x = (0, a.Z)("div", { target: "efyb1rg2" })(
          "display:flex;justify-content:space-between;width:300px;margin-bottom:100px;align-items:flex-end;"
        );
    },
    65911: function (e, t, o) {
      "use strict";
      var i = o(52903),
        r = o(2784),
        n = o(92603),
        a = o(66208);
      let l = (e) => {
        let {
            uniqId: t = null,
            children: o,
            message: n = "",
            className: l = null,
            fontSize: s = "12px",
            padding: m = "5px",
            placement: b = "top",
            zIndex: p = "1",
            overflowElementId: h = null,
            backgroundColor: f = null,
            boxShadow: g = "9px 10px 27px -8px rgba(0, 0, 0, 0.75)",
          } = e,
          [w, k] = (0, r.useState)(null);
        (0, r.useEffect)(
          () => (
            w ? w.update() : y(),
            () => {
              w && w.destroy();
            }
          ),
          []
        ),
          (0, r.useEffect)(() => {
            w && x() && w.update();
          });
        let x = () =>
            "object" == typeof n || ("string" == typeof n && n.length > 0),
          y = () => {
            let e = document.querySelector("#button-".concat(t)),
              o = document.querySelector("#tooltip-".concat(t)),
              i = document.querySelector("#".concat(h)),
              r = (0, a.fi)(e, o, {
                modifiers: [
                  { name: "offset", options: { offset: [0, 12] } },
                  { name: "preventOverflow", options: { boundary: i } },
                ],
                placement: b,
              });
            k(r);
          };
        return (0, i.BX)(i.HY, {
          children: [
            (0, i.tZ)("span", { id: "button-".concat(t), children: o }),
            (0, i.BX)(c, {
              id: "tooltip-".concat(t),
              isTooltipMessage: n,
              zIndex: p,
              backgroundColor: f,
              boxShadow: g,
              children: [
                (0, i.tZ)(u, {
                  fontSize: s,
                  padding: m,
                  className: l,
                  backgroundColor: f,
                  children: n,
                }),
                (0, i.tZ)(d, { id: "arrow", "data-popper-arrow": !0 }),
              ],
            }),
          ],
        });
      };
      t.Z = l;
      let c = (0, n.Z)("span", { target: "ervweon0" })(
          "transition:opacity 0.2s linear;opacity:0;z-index:",
          (e) => e.zIndex,
          ";",
          (e) =>
            e.isTooltipMessage
              ? "visibility: visible; opacity: 1;"
              : "visibility: hidden; width: 0;height: 0;",
          "  box-shadow:",
          (e) => e.boxShadow,
          ";&[data-popper-placement^='top'] > #arrow{bottom:-9px;border-top:10px solid\n      ",
          (e) => (e.backgroundColor ? e.backgroundColor : e.theme.color.white),
          ";}&[data-popper-placement^='bottom'] > #arrow{top:-9px;border-bottom:10px solid\n      ",
          (e) => (e.backgroundColor ? e.backgroundColor : e.theme.color.white),
          ";}"
        ),
        u = (0, n.Z)("div", { target: "ervweon1" })(
          "font-family:",
          (e) => e.theme.font.body,
          ";font-size:",
          (e) => e.fontSize,
          ";background-color:",
          (e) => (e.backgroundColor ? e.backgroundColor : e.theme.color.white),
          ";padding:",
          (e) => e.padding,
          ";color:",
          (e) => e.theme.color.black,
          ";@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){white-space:nowrap;}"
        ),
        d = (0, n.Z)("div", { target: "ervweon2" })(
          "position:absolute;width:0;height:0;border-right:10px solid transparent;border-left:10px solid transparent;"
        );
    },
    68254: function (e, t, o) {
      "use strict";
      o.d(t, {
        HJ: function () {
          return l;
        },
        L: function () {
          return n;
        },
        m4: function () {
          return r;
        },
      });
      var i = o(4161);
      let r = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return encodeURI("https://www.facebook.com/elasticafilms/");
        },
        n = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            o = "";
          return (
            t && (o = "&text=".concat(encodeURI(t))),
            "https://twitter.com/intent/tweet?url="
              .concat(encodeURIComponent(e))
              .concat(o)
          );
        },
        a = {
          facebook: {
            domain: "https://www.facebook.com/",
            countries: {
              default: "elasticafilms",
            },
          },
          instagram: {
            domain: "https://www.instagram.com/",
            countries: {
              default: "elasticafilms",
            },
          },
          threads: {
            domain: "https://www.threads.net/",
            countries: {
              default: "@elasticafilms",
            },
          },
          tiktok: {
            domain: "https://www.tiktok.com/",
            countries: { default: "@elasticafilms" },
          },
          twitter: {
            domain: "https://twitter.com/",
            countries: {
              default: "elasticafilms",
            },
          },
          youtube: {
            domain: "https://www.youtube.com/",
            countries: {
              default: "@elasticafilms",
            },
          },
        },
        l = (e, t) => {
          let o = a[e],
            r = o.countries[t],
            n = o.countries.default;
          return i.ho.includes(t) && o.countries.latam
            ? "".concat(o.domain).concat(o.countries.latam)
            : "".concat(o.domain).concat(r || n);
        };
    },
  },
]);
