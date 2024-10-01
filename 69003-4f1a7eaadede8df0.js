"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [69003],
  {
    60668: function (e, t, n) {
      n.d(t, {
        G: function () {
          return l;
        },
        b: function () {
          return a;
        },
      });
      var i = n(91311),
        r = n(83962);
      let a = (e, t) => (0, i.Z)(e).post("/email_campaigns", { data: t }),
        l = (e, t, n) => {
          if ((0, r.Jh)(t))
            try {
              //a(e, { email: t, campaign: n });
            } catch (e) {}
        };
    },
    41755: function (e, t, n) {
      var i = n(52903),
        r = n(2784),
        a = n(92603);
      let l = (e) => {
          let {
              src: t,
              fallback: n,
              isPaused: a,
              loop: l = !0,
              onEnded: c = () => {}, // No form pop-up, do nothing when video ends
            } = e,
            d = (0, r.useRef)();

          (0, r.useEffect)(() => {
            (d.current.defaultMuted = !0), (d.current.muted = !0);
          }, []),
            (0, r.useEffect)(() => {
              a
                ? d.current.paused || d.current.pause()
                : d.current.paused && s();
            }, [a]);

          let s = async () => {
            try {
              await d.current.play();
            } catch (e) {}
          };
          return (0, i.tZ)(o, {
            ref: d,
            autoPlay: !0,
            loop: !0,
            playsInline: !0,
            preload: "auto",
            src: t,
            poster: n,
            onEnded: () => {},
          });
        },
        o = (0, a.Z)("video", { target: "elfpo900" })(
          "background-color:",
          (e) => e.theme.color.black,
          ";width:100%;height:100%;object-fit:cover;"
        );
      t.Z = l;
    },
    22921: function (e, t, n) {
      var i = n(52903),
        r = n(2784),
        a = n(64703),
        l = n(92603);
      let o = (0, l.Z)("div", { target: "e1beraew0" })(
          "transition:",
          (e) => "opacity ".concat(e.fadeInSeconds, "s"),
          ";transition-delay:",
          (e) => "".concat(e.fadeInDelaySeconds, "s"),
          ";opacity:0;&.appear-enter{opacity:0;}&.appear-enter-active{opacity:1;}&.appear-enter-done{opacity:1;}"
        ),
        c = (e) => {
          let {
              isShowing: t,
              children: n,
              fadeInSeconds: l = 0.5,
              fadeInDelaySeconds: c = 0,
            } = e,
            [d, s] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              s(t);
            }, [t]),
            (0, i.tZ)(a.Z, {
              in: d,
              classNames: "appear",
              timeout: 1e3 * l,
              children: (0, i.tZ)(o, {
                fadeInSeconds: l,
                fadeInDelaySeconds: c,
                children: n,
              }),
            })
          );
        };
      t.Z = c;
    },
    2566: function (e, t, n) {
      var i = n(52903),
        r = n(2784),
        a = n(64703),
        l = n(28165),
        o = n(92603);
      let c = (e) => {
        let {
            isShowing: t,
            children: n,
            fadeSeconds: l = 0.5,
            zIndex: o = "1",
            fadeStyle: c = "simple-fade",
          } = e,
          [d, s] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            s(t);
          }, [t]),
          (0, i.tZ)(a.Z, {
            in: d,
            appear: d,
            classNames: "appear",
            timeout: 1e3 * l,
            children: (0, i.tZ)(h, {
              fadeSeconds: l,
              zIndex: o,
              fadeStyle: c,
              children: n,
            }),
          })
        );
      };
      t.Z = c;
      let d = (0, l.iv)(
          "&.appear-appear,&.appear-enter,&.appear-enter-done,&.appear-exit{display:block;}&.appear-appear-active,&.appear-enter-active,&.appear-enter-done{opacity:1;}"
        ),
        s = (0, l.iv)(
          "&.appear-appear,&.appear-enter,&.appear-exit{transform:translateY(30px);display:block;}&.appear-enter-done{transform:translateY(0px);display:block;}&.appear-appear-active,&.appear-enter-active,&.appear-enter-done{transform:translateY(0px);opacity:1;}"
        ),
        h = (0, o.Z)("div", { target: "ehos9ug0" })(
          "display:none;transition:",
          (e) =>
            "opacity "
              .concat(e.fadeSeconds, "s, transform ")
              .concat(e.fadeSeconds, "s"),
          ";position:relative;z-index:",
          (e) => e.zIndex,
          ";opacity:0;",
          (e) => "simple-fade" === e.fadeStyle && d,
          " ",
          (e) => "up-down-fade" === e.fadeStyle && s
        );
    },
    74183: function (e, t, n) {
      var i = n(52903),
        r = n(92603),
        a = n(73979),
        l = n(44662);
      let o = (0, r.Z)("div", { target: "evuyzmz0" })(
          "width:100%;display:flex;justify-content:center;padding:",
          (e) => e.padding,
          ";"
        ),
        c = (0, r.Z)("div", { target: "evuyzmz1" })(
          "width:",
          (e) => e.width,
          ";"
        ),
        d = (e) => {
          let {
            padding: t = "0",
            width: n = "50px",
            color: r = a.$_.darkText,
          } = e;
          return (0, i.tZ)(o, {
            padding: t,
            children: (0, i.tZ)(c, {
              width: n,
              children: (0, i.tZ)(l.Ho, { width: "100%", color: r }),
            }),
          });
        };
      t.Z = d;
    },
    54467: function (e, t, n) {
      var i = n(52903),
        r = n(97729),
        a = n.n(r),
        l = n(87136);
      let o = (e) => {
        let {
            canonicalUrl: t = null,
            robots: n = !0,
            noFollow: r = !1,
            noIndex: o = !1,
            description: c = null,
            image: d = null,
          } = e,
          { t: s } = (0, l.Z)("common");
        return (0, i.BX)(a(), {
          children: [
            (0, i.tZ)("meta", {
              name: "description",
              content: c || s("common:common.seo.generic_description"),
            }),
            t && (0, i.tZ)("link", { rel: "canonical", href: t }),
            d && (0, i.tZ)("link", { rel: "image_src", href: d }),
            n &&
              (0, i.tZ)("meta", {
                content: ""
                  .concat(r ? "nofollow" : "follow", ", ")
                  .concat(o ? "noindex" : "index"),
                name: "robots",
              }),
          ],
        });
      };
      t.Z = o;
    },
    68836: function (e, t, n) {
      var i = n(52903),
        r = n(97729),
        a = n.n(r),
        l = n(87136);
      let o = (e) => {
        let {
            title: t = null,
            type: n = "website",
            description: r = null,
            url: o = null,
            image: c = null,
            twitter: d = !1,
            twitterTitle: s = null,
            twitterDescription: h = null,
            twitterCard: p = null,
            twitterSite: u = "@mubi",
            video: m = null,
            videoWidth: f = null,
            videoHeight: g = null,
            customMeta: w = null,
          } = e,
          { t: Z } = (0, l.Z)("common");
        return (0, i.BX)(a(), {
          children: [
            (0, i.tZ)("meta", { property: "fb:app_id", content: "5409810948" }),
            (0, i.tZ)("meta", { property: "og:site_name", content: "MUBI" }),
            t && (0, i.tZ)("meta", { property: "og:title", content: t }),
            n && (0, i.tZ)("meta", { property: "og:type", content: n }),
            w &&
              Object.entries(w).map((e) => {
                let [t, n] = e;
                return (0, i.tZ)("meta", { property: t, content: n }, t);
              }),
            (0, i.tZ)("meta", {
              property: "og:description",
              content: r || Z("common:common.seo.generic_description"),
            }),
            o && (0, i.tZ)("meta", { property: "og:url", content: o }),
            c && (0, i.tZ)("meta", { property: "og:image", content: c }),
            m &&
              (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)("meta", { property: "og:video", content: m }),
                  (0, i.tZ)("meta", { property: "og:video:url", content: m }),
                  (0, i.tZ)("meta", {
                    property: "og:video:secure_url",
                    content: m,
                  }),
                  (0, i.tZ)("meta", {
                    property: "og:video:type",
                    content: "video/mp4",
                  }),
                  (0, i.tZ)("meta", { property: "og:video:width", content: f }),
                  (0, i.tZ)("meta", {
                    property: "og:video:height",
                    content: g,
                  }),
                ],
              }),
            d &&
              (0, i.BX)(i.HY, {
                children: [
                  p &&
                    (0, i.tZ)("meta", { property: "twitter:card", content: p }),
                  u &&
                    (0, i.tZ)("meta", { property: "twitter:site", content: u }),
                  (s || t) &&
                    (0, i.tZ)("meta", {
                      property: "twitter:title",
                      content: s || t,
                    }),
                  (h || r) &&
                    (0, i.tZ)("meta", {
                      property: "twitter:description",
                      content: h || r,
                    }),
                  c &&
                    (0, i.tZ)("meta", {
                      property: "twitter:image",
                      content: c,
                    }),
                ],
              }),
            d &&
              m &&
              (0, i.BX)(i.HY, {
                children: [
                  (0, i.tZ)("meta", { property: "twitter:player", content: m }),
                  (0, i.tZ)("meta", {
                    property: "twitter:player:width",
                    content: f,
                  }),
                  (0, i.tZ)("meta", {
                    property: "twitter:player:height",
                    content: g,
                  }),
                ],
              }),
          ],
        });
      };
      t.Z = o;
    },
    56672: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var i = n(52903),
        r = n(2784),
        a = n(5632),
        l = n(68344),
        o = n(92603),
        c = n(34620),
        d = n(39685),
        s = n(94449),
        h = n(69287);
      let p = (e, t, n) => {
        let [i, l] = (0, r.useState)(!1),
          [o, c] = (0, r.useState)(!1),
          d = (0, a.useRouter)();
        (0, r.useEffect)(() => {
          let n = e.length > 0;
          l(n), c(n);
          let i = null;
          return (
            t && (i = setTimeout(() => u(), 5e3)),
            () => {
              clearTimeout(i);
            }
          );
        }, [e, n]),
          (0, r.useEffect)(
            () => (
              d.events.on("routeChangeStart", u),
              () => {
                d.events.off("routeChangeStart", u);
              }
            ),
            []
          );
        let p = (0, s.I0)(),
          u = () => {
            l(!1),
              setTimeout(() => {
                c(!1), p((0, h.ED)(""));
              }, 300);
          };
        return [i, o, u];
      };
      var u = n(21670),
        m = n(2566),
        f = n(44662),
        g = n(473);
      let w = (e) => {
        let { autodismiss: t = !0 } = e,
          n = (0, d.Z)((e) => {
            var t;
            return null === (t = e.banners) || void 0 === t
              ? void 0
              : t.userFeedbackBanner;
          }),
          o = (null == n ? void 0 : n.message) || "",
          s = (0, a.useRouter)(),
          { query: h } = s,
          w = (0, c.Nw)(null == h ? void 0 : h.feedback),
          Z = o || w,
          _ = 8.5 * Z.length + 69,
          [C, z, S] = p(Z, t, null == n ? void 0 : n.id);
        (0, r.useEffect)(() => {
          (0, l.destroyCookie)(null, "flash_store", { path: "/" });
        }, []);
        let L = Z.length < 80;
        return (0, i.tZ)(i.HY, {
          children: z
            ? (0, i.tZ)(b, {
                children: (0, i.tZ)(g.Z, {
                  relative: !0,
                  fromBreakpoint: "tablet",
                  mobilePadding: !1,
                  children: (0, i.tZ)(v, {
                    bannerWidth: L ? _ : null,
                    children: (0, i.tZ)(x, {
                      children: (0, i.tZ)(m.Z, {
                        isShowing: C,
                        fadeSeconds: 0.3,
                        children: (0, i.BX)(y, {
                          bannerWidth: L ? _ : null,
                          children: [
                            (0, i.tZ)(k, { isError: n.isError, children: Z }),
                            (0, i.tZ)(u.Z, {
                              actionType: "blank",
                              clickAction: S,
                              children: (0, i.tZ)(f.gW, {
                                color: "black",
                                width: "".concat(12, "px"),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              })
            : null,
        });
      };
      var Z = w;
      let b = (0, o.Z)("div", { target: "e1c47rma0" })(
          "position:absolute;width:100%;height:100%;pointer-events:none;z-index:1001;"
        ),
        v = (0, o.Z)("div", { target: "e1c47rma1" })(
          "@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){position:absolute;right:20px;width:",
          (e) => {
            let { bannerWidth: t } = e;
            return t ? "".concat(t, "px") : "50vw";
          },
          ";}"
        ),
        x = (0, o.Z)("div", { target: "e1c47rma2" })(
          "position:fixed;z-index:11;width:100%;top:65px;padding:0 18px;@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){padding:initial;width:max-content;}"
        ),
        y = (0, o.Z)("div", { target: "e1c47rma3" })(
          "display:flex;align-items:center;justify-content:space-between;background-color:rgb(251,251,251);box-shadow:rgba(0,0,0,0.2) 0 4px 4px;font-weight:bold;font-size:14px;padding:10px 0 10px ",
          17,
          "px;pointer-events:initial;@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){width:",
          (e) => {
            let { bannerWidth: t } = e;
            return t ? "".concat(t, "px") : "50vw";
          },
          ";}"
        ),
        k = (0, o.Z)("div", { target: "e1c47rma4" })(
          "text-align:center;@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){text-align:left;}width:100%;color:",
          (e) => (e.isError ? e.theme.color.alertRed : e.theme.color.black),
          ";"
        );
    },
    71074: function (e, t, n) {
      var i = n(2784),
        r = n(41641);
      let a = (e) => {
        let {
            children: t,
            defaultValue: n,
            valueAtMobile: a = !1,
            valueAtTablet: l = !1,
            valueAtDesktop: o = !1,
            valueAtWide: c = !1,
          } = e,
          [d, s] = (0, i.useState)(n),
          h = () => {
            let e = (0, r.eO)({
              defaultValue: n,
              valueAtMobile: a,
              valueAtTablet: l,
              valueAtDesktop: o,
              valueAtWide: c,
            });
            s(e);
          };
        return (
          (0, i.useEffect)(
            () => (
              h(),
              window.addEventListener("resize", h),
              () => {
                window.removeEventListener("resize", h);
              }
            ),
            []
          ),
          t({ currentValue: d })
        );
      };
      t.Z = a;
    },
    21670: function (e, t, n) {
      var i = n(52903),
        r = n(57017),
        a = n(74183);
      let l = (e) => {
          e.preventDefault();
        },
        o = (e, t) => {
          e.preventDefault(), t();
        },
        c = (e, t) => (e ? (e) => l(e) : t ? (e) => o(e, t) : () => {}),
        d = (e) => {
          let {
              clickAction: t = null,
              disabled: n = !1,
              children: l = null,
              className: o = "",
              type: d = "button",
              actionType: s = "primary",
              isLoading: h = !1,
              id: p = "",
            } = e,
            u = c(n, t);
          return (0, i.tZ)(r.Sn, {
            onClick: u,
            type: d,
            className: o,
            isLoading: h,
            disabled: !!h || n,
            actiontype: s,
            id: p,
            children: h
              ? (0, i.BX)(i.HY, {
                  children: [
                    (0, i.tZ)(r.g4, { children: l }),
                    (0, i.tZ)(r.u, {
                      children: (0, i.tZ)(a.Z, {
                        color: "currentColor",
                        width: "12px",
                      }),
                    }),
                  ],
                })
              : l,
          });
        };
      t.Z = d;
    },
    27212: function (e, t, n) {
      var i = n(52903),
        r = n(70423),
        a = n(92603),
        l = n(59161);
      let o = (e) => {
          let { isScrolled: t, width: n = "20px" } = e,
            a = (e) => {
              r.NY.scrollTo(e ? 0 : window.innerHeight / 2);
            };
          return (0, i.tZ)(d, {
            onClick: () => a(t),
            children: (0, i.tZ)(c, {
              width: n,
              isScrolled: t,
              direction: null,
            }),
          });
        },
        c = (0, a.Z)(l.JC, { target: "ehfzp800" })(
          "transition:transform 0.4s ease-in-out;transform:rotate(",
          (e) => (e.isScrolled ? "90" : "270"),
          "deg);width:11px;@media (min-width:",
          (e) => e.theme.mqNew.desktop,
          "){width:",
          (e) => e.width,
          ";}"
        ),
        d = (0, a.Z)("div", { target: "ehfzp801" })(
          "display:flex;justify-content:center;align-items:center;cursor:pointer;height:16px;width:100%;z-index:1;display:flex;justify-content:center;opacity:0.45;margin-bottom:15px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;user-select:none;"
        );
      t.Z = o;
    },
    59161: function (e, t, n) {
      n.d(t, {
        JC: function () {
          return s;
        },
        Rl: function () {
          return p;
        },
        dd: function () {
          return h;
        },
        hd: function () {
          return o;
        },
        mA: function () {
          return d;
        },
        nc: function () {
          return c;
        },
        s0: function () {
          return u;
        },
        wT: function () {
          return m;
        },
      });
      var i = n(52903),
        r = n(73979),
        a = n(74735);
      let l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "right";
          if ("right" === t) {
            if ("down" === e) return "rotate(90deg)";
            if ("left" === e) return "rotate(180deg)";
            if ("up" === e) return "rotate(270deg)";
          }
          if ("left" === t) {
            if ("up" === e) return "rotate(90deg)";
            if ("right" === e) return "rotate(180deg)";
            if ("down" === e) return "rotate(270deg)";
          }
          if ("down" === t) {
            if ("left" === e) return "rotate(90deg)";
            if ("up" === e) return "rotate(180deg)";
            if ("right" === e) return "rotate(270deg)";
          }
          return null;
        },
        o = (e) => {
          let {
            color: t = r.$_.darkText,
            width: n = "8px",
            height: o,
            direction: c = "right",
          } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 8 12",
            fill: t,
            width: n,
            height: o,
            style: { transform: l(c) },
            children: (0, i.tZ)("path", {
              d: "M5.8 5.8L0 0h1.64l5.8 5.8-5.8 5.8H0l5.22-5.22z",
              fillRule: "evenodd",
            }),
          });
        },
        c = (e) => {
          let {
            color: t = r.$_.white,
            width: n = "12px",
            height: o,
            direction: c = "right",
          } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 12 20",
            fill: t,
            width: n,
            height: o,
            style: { transform: l(c) },
            children: (0, i.tZ)("path", {
              d: "M3.7 9.65l7.23-7.23a1 1 0 0 0 0-1.42l-.7-.7A1 1 0 0 0 8.8.3L.3 8.8c-.24.23-.33.55-.29.86-.04.3.06.62.29.85L8.8 19a1 1 0 0 0 1.42 0l.71-.7a1 1 0 0 0 0-1.43L3.7 9.65z",
            }),
          });
        },
        d = (e) => {
          let {
            color: t = r.$_.white,
            width: n = "10px",
            height: o,
            direction: c = "right",
            className: d,
          } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 10 25",
            fill: t,
            width: n,
            height: o,
            style: { transform: l(c, "left") },
            className: d,
            children: (0, i.tZ)("path", {
              d: "M.22 13c-.3-.45-.29-1.04.01-1.5L7.7.27a.6.6 0 0 1 .86-.16l1.18.82c.28.2.36.58.17.86L2.93 12.28 9.9 23.21c.18.29.1.67-.18.86l-1.2.8a.6.6 0 0 1-.85-.18L.22 13z",
            }),
          });
        },
        s = (e) => {
          let {
            color: t = r.$_.white,
            width: n = "10px",
            height: o,
            direction: c = "down",
            className: d,
          } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 10 25",
            fill: t,
            width: n,
            height: o,
            style: { transform: l(c, "left") },
            className: d,
            children: (0, i.tZ)("path", {
              d: "M.22 13c-.3-.45-.29-1.04.01-1.5L7.7.27a.6.6 0 0 1 .86-.16l1.18.82c.28.2.36.58.17.86L2.93 12.28 9.9 23.21c.18.29.1.67-.18.86l-1.2.8a.6.6 0 0 1-.85-.18L.22 13z",
            }),
          });
        },
        h = (e) => {
          let { color: t = r.$_.black, width: n = "960px", height: l } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 960 560",
            fill: t,
            width: n,
            height: l,
            children: (0, i.tZ)("path", {
              d: "M480 344.181L268.869 131.889c-15.756-15.859-41.3-15.859-57.054 0-15.754 15.857-15.754 41.57 0 57.431l237.632 238.937c8.395 8.451 19.562 12.254 30.553 11.698 10.993.556 22.159-3.247 30.555-11.698L748.186 189.32c15.756-15.86 15.756-41.571 0-57.431s-41.299-15.859-57.051 0L480 344.181z",
            }),
          });
        },
        p = (e) => {
          let {
            color: t = r.$_.darkText,
            width: n = "13px",
            height: o,
            direction: c = "right",
            className: d,
          } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 13 24",
            width: n,
            height: o,
            style: { transform: l(c, "left") },
            className: d,
            children: (0, i.tZ)("path", {
              d: "M12 0L1 12l11 12",
              stroke: t,
              strokeWidth: "2",
              fill: "none",
              fillRule: "evenodd",
              strokeLinecap: "round",
            }),
          });
        },
        u = (e) => {
          let { color: t = r.$_.lightText, width: n = "4180px", height: l } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 4180 3620",
            width: n,
            height: l,
            children: (0, i.tZ)("path", {
              d: "M2062 3253l-848-1413L294 305 191 135l1906-3c1049-1 1908 0 1910 2 3 2-12 30-33 63-87 136-104 163-104 166 0 2-133 224-295 493a97139 97139 0 00-544 907l-150 250-160 266a10582 10582 0 00-160 269l-39 62a25908 25908 0 01-302 505c-59 101-113 185-120 185-4 0-21-21-38-47z",
              fill: t,
            }),
          });
        },
        m = (e) => {
          let {
            color: t = r.$_.mubiBlue,
            width: n = "12px",
            direction: o = "down",
            height: c,
          } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 12 7",
            width: n,
            height: c,
            style: { transform: l(o, "down") },
            children: (0, i.tZ)("path", {
              d: "M2.12.29L6 4.17 9.88.29a1 1 0 111.41 1.41L6.7 6.29a1 1 0 01-1.41 0L.7 1.7A1 1 0 01.7.29a1.02 1.02 0 011.42 0z",
              fill: t,
              fillRule: "nonzero",
            }),
          });
        };
    },
    96591: function (e, t, n) {
      n.d(t, {
        Fc: function () {
          return m;
        },
        Fr: function () {
          return u;
        },
        Hz: function () {
          return g;
        },
        Od: function () {
          return c;
        },
        Vq: function () {
          return o;
        },
        Zm: function () {
          return l;
        },
        b0: function () {
          return p;
        },
        qA: function () {
          return s;
        },
        yB: function () {
          return d;
        },
        yO: function () {
          return f;
        },
        yu: function () {
          return h;
        },
      });
      var i = n(52903),
        r = n(73979),
        a = n(74735);
      let l = (e) => {
          let { color: t = r.$_.social.twitter, width: n = "24px" } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 24 19",
            fill: t,
            width: n,
            children: (0, i.tZ)("path", {
              d: "M21.0034779,5.34998411 C21.0034779,5.14234375 21.0034779,4.93563869 20.9894482,4.72986896 C21.9283487,4.05074546 22.7388234,3.20986608 23.3829243,2.2466024 C22.5073545,2.63457354 21.5785382,2.88900489 20.6274805,3.0014032 C21.6289655,2.40184824 22.3785094,1.45885224 22.7366203,0.347908948 C21.7949034,0.906719044 20.7646411,1.30054053 19.6902929,1.51237858 C18.2032163,-0.0688736457 15.8402657,-0.455890687 13.9264481,0.568344384 C12.0126305,1.59257946 11.023903,3.77334436 11.5146872,5.88779137 C7.65734253,5.69441415 4.06346193,3.87248566 1.62745153,0.87542772 C0.35413229,3.06747841 1.0045191,5.87175955 3.11273488,7.27954303 C2.34927417,7.25691542 1.60245927,7.05096388 0.935316972,6.67906953 L0.935316972,6.73986513 C0.935941888,9.02352848 2.54570036,10.990446 4.78414631,11.4426389 C4.07786003,11.6352581 3.33681867,11.6634151 2.6179522,11.5249468 C3.24643651,13.4792194 5.04750778,14.8179957 7.09999113,14.8565458 C5.40120769,16.1916471 3.30265989,16.9164203 1.14202202,16.9142432 C0.760322504,16.9135104 0.378994239,16.8903996 -1.42108547e-14,16.8450297 C2.19391311,18.2529404 4.74665263,18.9997352 7.35346203,18.9962587 C16.1772423,19 21.0034779,11.6895625 21.0034779,5.34998411 Z",
            }),
          });
        },
        o = (e) => {
          let { color: t = r.$_.social.facebook, width: n = "20px" } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 20 20",
            fill: t,
            width: n,
            children: (0, i.tZ)("path", {
              d: "M1.06553888,0 C0.475605335,0 0,0.404682396 0,1 L0,19 C0,19.5953176 0.475605335,20 1.06553888,20 L9.99910494,20 L9.99910494,12 L7.5,12 L7.5,9 L9.99910494,9 L9.99910494,6.89989111 C9.99910494,4.50108893 11.490143,3.01012704 13.8125299,3.01012704 C15.211145,3.01012704 16.151685,3.12065336 16.151685,3.12065336 L16.151685,5.82511797 L14.5770045,5.82511797 C13.5785382,5.82511797 12.9988593,6.17956443 12.9988593,7.24671506 L12.9988593,9 L16,9 L15.5500002,12 L12.9988593,12 L12.9988593,20 L19,20 C19.5899335,20 20,19.5953176 20,19 L20,1 C20,0.404682396 19.5899335,0 19,0 L1.06553888,0 Z",
            }),
          });
        },
        c = (e) => {
          let { color: t = r.$_.white, width: n = "29px" } = e;
          return (0, i.tZ)(a.Z, {
            viewBox: "0 0 29 29",
            width: n,
            children: (0, i.BX)("g", {
              fill: t,
              fillRule: "nonzero",
              children: [
                (0, i.tZ)("path", {
                  d: "M26.2 12.25a7.36 7.36 0 000-10.09 6.67 6.67 0 00-9.7 0L10.62 8.3a7.36 7.36 0 00.79 10.79l1.88-1.96a4.55 4.55 0 01-.82-6.9l5.88-6.14a4.12 4.12 0 016 0 4.55 4.55 0 010 6.25l-1.37 1.43c.36 1.03.56 2.12.6 3.22l2.61-2.73z",
                }),
                (0, i.tZ)("path", {
                  d: "M2.9 16.18a7.36 7.36 0 000 10.09 6.67 6.67 0 009.7 0l5.88-6.13a7.36 7.36 0 00-.79-10.79l-1.88 1.96a4.55 4.55 0 01.82 6.9l-5.88 6.13a4.12 4.12 0 01-6 0 4.55 4.55 0 010-6.24l1.37-1.43a10.9 10.9 0 01-.6-3.22l-2.61 2.73z",
                }),
              ],
            }),
          });
        },
        d = (e) => {
          let { color: t = r.$_.white, width: n = "24px" } = e;
          return (0, i.tZ)(a.Z, {
            width: n,
            viewBox: "0 0 24 24",
            children: (0, i.tZ)("path", {
              fill: t,
              d: "m.057 24 1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
            }),
          });
        },
        s = (e) => {
          let { color: t = r.$_.white, width: n = "24px" } = e;
          return (0, i.tZ)(a.Z, {
            width: n,
            viewBox: "0 0 24 24",
            children: (0, i.tZ)("path", {
              fill: t,
              d: "M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963-3.056-3.259-5.963 3.259L10.733 8l3.13 3.259L19.752 8l-6.559 6.963z",
            }),
          });
        },
        h = (e) => {
          let { color: t = r.$_.white, width: n = "24px" } = e;
          return (0, i.tZ)(a.Z, {
            width: n,
            viewBox: "0 0 24 24",
            children: (0, i.tZ)("path", {
              fill: t,
              d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
            }),
          });
        },
        p = (e) => {
          let { color: t = r.$_.white, width: n = "24px" } = e;
          return (0, i.tZ)(a.Z, {
            width: n,
            viewBox: "0 0 256 256",
            children: (0, i.tZ)("path", {
              fill: t,
              d: "M.2 2.9 35 49.3 0 87.1h7.9l30.6-33 24.7 33H90l-36.7-49L85.8 2.8H78L49.8 33.3 27 3H.2zm11.6 5.8H24l54.3 72.6H66.1L11.8 8.7z",
              transform: "matrix(2.81 0 0 2.81 1.4 1.4)",
            }),
          });
        },
        u = (e) => {
          let { color: t = r.$_.white, width: n = "24px" } = e;
          return (0, i.tZ)(a.Z, {
            width: n,
            viewBox: "0 0 24 24",
            children: (0, i.tZ)("path", {
              fill: t,
              d: "M12 2a10 10 0 0 0-1.6 19.9v-7H8V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9l2.3.2v2.5h-1.3c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 12 2z",
            }),
          });
        },
        m = (e) => {
          let { width: t = "21px", color: n = r.$_.black } = e;
          return (0, i.BX)(a.Z, {
            width: t,
            viewBox: "0 0 21 15",
            children: [
              (0, i.tZ)("defs", {
                children: (0, i.tZ)("path", { id: "a", d: "M0 0h21v15H0z" }),
              }),
              (0, i.BX)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: [
                  (0, i.tZ)("mask", {
                    id: "b",
                    fill: "#fff",
                    children: (0, i.tZ)("use", { href: "#a" }),
                  }),
                  (0, i.tZ)("path", {
                    d: "M8.352 10.666V4.334L13.841 7.5l-5.489 3.166Zm12.21-8.324A2.657 2.657 0 0 0 18.704.448C17.067 0 10.5 0 10.5 0S3.933 0 2.295.448A2.657 2.657 0 0 0 .44 2.342C0 4.013 0 7.5 0 7.5s0 3.487.439 5.158a2.658 2.658 0 0 0 1.856 1.894C3.933 15 10.5 15 10.5 15s6.567 0 8.205-.448a2.658 2.658 0 0 0 1.856-1.894C21 10.987 21 7.5 21 7.5s0-3.487-.439-5.158Z",
                    fill: n,
                    mask: "url(#b)",
                  }),
                ],
              }),
            ],
          });
        },
        f = (e) => {
          let { width: t = "16px", color: n = r.$_.black } = e;
          return (0, i.tZ)(a.Z, {
            width: t,
            viewBox: "0 0 16 18",
            children: (0, i.tZ)("path", {
              d: "M8.034 18H8.03c-2.685-.018-4.75-.904-6.137-2.632C.659 13.83.022 11.69 0 9.008v-.013C.022 6.31.659 4.172 1.893 2.633 3.28.903 5.345.018 8.03 0h.011c2.059.014 3.781.544 5.118 1.573 1.258.969 2.144 2.347 2.631 4.1l-1.53.427c-.827-2.97-2.922-4.487-6.227-4.51-2.18.016-3.831.701-4.904 2.037C2.126 4.878 1.608 6.685 1.588 9c.02 2.315.538 4.122 1.542 5.373 1.072 1.337 2.723 2.023 4.904 2.038 1.967-.015 3.269-.474 4.35-1.534 1.235-1.21 1.213-2.695.817-3.598-.232-.533-.655-.976-1.225-1.312-.144 1.013-.466 1.834-.963 2.453-.664.826-1.606 1.278-2.797 1.343-.902.048-1.771-.164-2.444-.601-.797-.517-1.264-1.305-1.314-2.223-.049-.893.306-1.714.997-2.312.66-.57 1.59-.905 2.687-.968a10.387 10.387 0 0 1 2.264.106c-.093-.556-.28-.999-.561-1.317-.385-.44-.981-.663-1.77-.668h-.021c-.634 0-1.494.174-2.04.99l-1.318-.884c.734-1.09 1.925-1.692 3.358-1.692h.032c2.396.014 3.823 1.481 3.965 4.041.081.034.162.07.242.106 1.117.526 1.934 1.321 2.364 2.302.598 1.367.654 3.593-1.16 5.37-1.388 1.357-3.07 1.97-5.457 1.987h-.006Zm.753-8.768c-.182 0-.366.006-.555.016-1.377.078-2.235.71-2.187 1.608.05.941 1.09 1.379 2.088 1.325.918-.049 2.113-.407 2.315-2.783a7.873 7.873 0 0 0-1.661-.166Z",
              fill: n,
              fillRule: "nonzero",
            }),
          });
        },
        g = (e) => {
          let { width: t = "16px", color: n = r.$_.black } = e;
          return (0, i.tZ)(a.Z, {
            width: t,
            viewBox: "0 0 512 512",
            children: (0, i.tZ)("path", {
              fill: n,
              d: "M412.2 118.7a109.3 109.3 0 0 1-9.5-5.5 132.9 132.9 0 0 1-24.2-20.7A114.5 114.5 0 0 1 351 36.1h.1a69.5 69.5 0 0 1-1-20.1h-82.5v318.8c0 4.3 0 8.5-.2 12.7v1.5l-.1.7v.2a70 70 0 0 1-35.2 55.6 68.8 68.8 0 0 1-34.1 9c-38.5 0-69.6-31.3-69.6-70s31.1-70 69.5-70a68.9 68.9 0 0 1 21.5 3.4v-84a153.1 153.1 0 0 0-118 34.5 161.8 161.8 0 0 0-35 43.6c-3.5 6-16.6 30-18.2 69.2a163 163 0 0 0 8.8 54.7v.3A164 164 0 0 0 79.4 437a167.5 167.5 0 0 0 35.7 33.7v-.2l.2.2c40 27 84.2 25.3 84.2 25.3 7.6-.3 33.3 0 62.4-13.8 32.3-15.3 50.7-38.1 50.7-38.1a158.5 158.5 0 0 0 27.7-46 172 172 0 0 0 10-52.5V176.5l14.2 9.4s19.2 12.3 49.2 20.3a283 283 0 0 0 50.4 7v-82c-10.1 1.2-30.7-2-51.8-12.5Z",
            }),
          });
        };
    },
    48679: function (e, t, n) {
      var i = n(52903),
        r = n(92603);
      let a = (e) => {
        let {
          onChange: t,
          onKeyDown: n,
          value: r = null,
          placeholder: a = null,
          required: o = !1,
          className: c = null,
          type: d = "text",
          id: s = null,
          hasError: h = !1,
          autoComplete: p,
          maxLength: u,
        } = e;
        return (0, i.tZ)(l, {
          id: s,
          required: o,
          type: d,
          value: r,
          onChange: t,
          onKeyDown: n,
          placeholder: a,
          className: c,
          hasError: h,
          autoComplete: p,
          maxLength: u,
        });
      };
      t.Z = a;
      let l = (0, r.Z)("input", { target: "eiiffh0" })(
        "padding:12px 15px;display:block;",
        (e) =>
          e.hasError
            ? "border: ".concat(
                e.theme.color.alertRed,
                " 1px solid; border-radius: 2px;"
              )
            : "border: none;",
        "  height:48px;width:100%;font-size:16px;outline:none;resize:none;::placeholder{font-size:14px;color:",
        (e) => e.theme.color.midGray,
        ";}"
      );
    },
    13693: function (e, t, n) {
      var i = n(52903),
        r = n(2784),
        a = n(94449),
        l = n(87136),
        o = n(68344),
        c = n(92603),
        d = n(60668),
        s = n(83962),
        h = n(69287),
        p = n(5738),
        u = n(39685),
        m = n(21670),
        f = n(48679);
      let g = (e) => {
        let {
            canonicalUrl: t,
            onEmailFormSubmit: n = () => {},
            snowplowElement: c = "above-fold",
          } = e,
          { t: m } = (0, l.Z)("release"),
          f = (0, p.Z)(),
          g = (0, a.I0)(),
          v = (0, u.Z)((e) => e.appState.httpContext),
          [x, y] = (0, r.useState)(""),
          [k, _] = (0, r.useState)(!1),
          C = async () => {
            if ((0, s.Jh)(x))
              try {
                _(!0),
                  await (0, d.b)(v, {
                    email: x,
                    campaign: "substance_campaign",
                  }),
                  g(
                    (0, h.ED)(
                      m("release:release.the-substance.subscribed_to_waitlist")
                    )
                  ),
                  (0, o.setCookie)(
                    null,
                    "subscribed_to_substance_campaign",
                    "true",
                    { path: "/" }
                  ),
                  n(),
                  f({
                    data: {
                      clickType: "email-submitted",
                      element: "waitlist-cta",
                    },
                    extraData: { sub_page: c, page_url: t, film_id: 332868 },
                  });
              } catch (n) {
                var e;
                let t =
                  (null == n
                    ? void 0
                    : null === (e = n.data) || void 0 === e
                    ? void 0
                    : e.user_message) || m("common:common.errors.generic");
                g((0, h.ED)(t));
              } finally {
                _(!1);
              }
            else g((0, h.ED)(m("common:common.errors.invalid_email")));
          };
        return (0, i.tZ)(i.HY, {
          children: (0, i.BX)(w, {
            children: [
              (0, i.tZ)(Z, {
                value: x,
                placeholder: m("common:common.email_address"),
                onChange: (e) => {
                  y(e.target.value);
                },
                onKeyDown: async (e) => {
                  "Enter" === e.key && C();
                },
              }),
              (0, i.tZ)(b, {
                disabled: k,
                clickAction: async () => {
                  C();
                },
                children: m("release:release.the-substance.join_cta"),
              }),
            ],
          }),
        });
      };
      t.Z = g;
      let w = (0, c.Z)("div", { target: "e11dslsx0" })("display:flex;"),
        Z = (0, c.Z)(f.Z, { target: "e11dslsx1" })(
          "border:1px solid ",
          (e) => e.theme.color.lightGray,
          ";font-size:16px;letter-spacing:0;padding:12px;height:auto;margin:0;::placeholder{font-size:16px;}@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){padding:16px;}"
        ),
        b = (0, c.Z)(m.Z, { target: "e11dslsx2" })(
          "font-family:'KCompress';font-weight:400;font-size:32px;line-height:1;letter-spacing:1;padding:6px 20px 0;border-radius:0;min-width:175px;align-items:center;white-space:normal;background-color:",
          (e) => e.theme.color.black,
          ";color:",
          (e) => e.theme.color.white,
          ";border:1px solid ",
          (e) => e.theme.color.black,
          ";&:hover:not(:disabled){color:",
          (e) => e.theme.color.black,
          ";background-color:#d0fe1d;border-color:#d0fe1d;text-decoration:none;}@media (min-width:600px){white-space:nowrap;padding:6px 35px 0;width:100%;}@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){padding:6px 55px 0;font-size:40px;}"
        );
    },
    53052: function (e, t, n) {
      n.d(t, {
        U: function () {
          return r;
        },
        a: function () {
          return a;
        },
      });
      var i = n(92603);
      let r = (0, i.Z)("h1", { target: "e10q658g0" })(
          "font-size:80px;line-height:1;font-family:'KCompress';padding:100px 0 50px;text-transform:uppercase;@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){font-size:140px;line-height:120px;padding:125px 0 70px;}"
        ),
        a = (0, i.Z)("h2", { target: "e10q658g1" })(
          "font-family:'KCompress';font-size:40px;line-height:1;text-transform:uppercase;letter-spacing:0.4px;"
        );
    },
    54998: function (e, t, n) {
      var i = n(2784),
        r = n(45374),
        a = n(29336);
      let l = (e) => {
        let t = (0, a.Z)(),
          [n, l] = (0, i.useState)((0, r.vo)({ url: e, i18nUrlData: t }));
        return (
          (0, i.useEffect)(() => {
            e && l((0, r.vo)({ url: e, i18nUrlData: t }));
          }, [e]),
          n
        );
      };
      t.Z = l;
    },
    69003: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return J;
          },
        });
      var i = n(52903),
        r = n(2784),
        a = n(25237),
        l = n.n(a),
        o = n(5632),
        c = n(87136),
        d = n(68344),
        s = n(45374),
        h = n(54998),
        p = n(29336),
        u = n(5738),
        m = n(46821),
        f = n(56672),
        g = n(54467),
        w = n(68836),
        Z = n(78800),
        b = n(20360),
        v = n(92603),
        x = n(41755),
        y = n(71074),
        k = n(2566),
        _ = n(13693),
        C = n(73979),
        z = n(39685),
        S = n(27212),
        L = n(22921),
        B = n(96591);
      let E = (e) => {
          let {
              canonicalUrl: t,
              showSmallTitle: n = !1,
              headerInView: r = !0,
            } = e,
            { t: a } = (0, c.Z)("release"),
            l = (0, u.Z)(),
            o = (0, z.Z)((e) => e.user.geoLocation);
          return (0, i.tZ)(i.HY, {
            children: (0, i.tZ)(M, {
              children: (0, i.BX)(L.Z, {
                isShowing: !0,
                fadeInDelaySeconds: 0.5,
                children: [
                  (0, i.tZ)(V, {
                    children: (0, i.tZ)(N, {
                      smallTitle: n,
                      as: n ? "div" : "h1",
                      children: a(
                        "release:release.the-substance.the_substance"
                      ),
                    }),
                  }),
                  (0, i.BX)(T, {
                    children: [
                      (0, i.tZ)("a", {
                        href: "https://x.com/elasticafilms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: () =>
                          l({
                            data: {
                              clickType: "share-icon",
                              element: "x-twitter",
                            },
                            extraData: {
                              sub_page: "above-fold",
                              page_url: t,
                              film_id: 332868,
                            },
                          }),
                        children: (0, i.tZ)(B.b0, {
                          color: C.$_.white,
                          width: "34px",
                        }),
                      }),
                      (0, i.tZ)("a", {
                        href: "https://www.instagram.com/elasticafilms/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: () =>
                          l({
                            data: {
                              clickType: "share-icon",
                              element: "instagram",
                            },
                            extraData: {
                              sub_page: "above-fold",
                              page_url: t,
                              film_id: 332868,
                            },
                          }),
                        children: (0, i.tZ)(B.yu, {
                          color: C.$_.white,
                          width: "34px",
                        }),
                      }),
                      (0, i.BX)($, {
                        children: [
                          "US" === o &&
                            (0, i.tZ)(H, {
                              children: (0, i.tZ)("a", {
                                href: "tel: 323-310-5332",
                                onClick: () =>
                                  l({
                                    data: {
                                      clickType: "share-icon",
                                      element: "telephone",
                                    },
                                    extraData: {
                                      sub_page: "above-fold",
                                      page_url: t,
                                      film_id: 332868,
                                    },
                                  }),
                                children: "323-310-5332",
                              }),
                            }),
                          (0, i.tZ)(H, { children: "@ElasticaFilms" }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.tZ)(I, {
                    children: (0, i.tZ)(S.Z, { isScrolled: !r, width: "15px" }),
                  }),
                ],
              }),
            }),
          });
        },
        M = (0, v.Z)("h1", { target: "ex2mitj0" })(
          "position:absolute;bottom:0;right:0;left:0;"
        ),
        V = (0, v.Z)("div", { target: "ex2mitj1" })(
          "position:absolute;bottom:67px;right:0;left:0;@media (min-width:",
          (e) => e.theme.mqToday.tabletLarge,
          "){bottom:47px;}"
        ),
        N = (0, v.Z)("h1", { target: "ex2mitj2" })(
          "width:100%;text-align:center;font-size:",
          (e) => (e.smallTitle ? "48px" : "80px"),
          ";line-height:",
          (e) => (e.smallTitle ? "100px" : "120px"),
          ";font-family:'KCompress';text-transform:uppercase;"
        ),
        T = (0, v.Z)("div", { target: "ex2mitj3" })(
          "position:absolute;bottom:50px;width:100%;display:flex;align-items:flex-end;justify-content:center;a{margin-right:18px;}@media (min-width:",
          (e) => e.theme.mqToday.tabletLarge,
          "){width:auto;bottom:83px;right:90px;}"
        ),
        H = (0, v.Z)("div", { target: "ex2mitj4" })(
          "font-size:16px;line-height:20px;font-weight:bold;letter-spacing:-0.3px;font-family:'Riforma';a{color:",
          (e) => e.theme.color.white,
          ";}a:hover{color:",
          (e) => e.theme.color.white,
          ";}"
        ),
        $ = (0, v.Z)("div", { target: "ex2mitj5" })(
          "display:flex;flex-direction:column;"
        ),
        I = (0, v.Z)("div", { target: "ex2mitj6" })("padding:10px 0 5px;");
      var D = n(53052);
      let R = (e) => {
          let { headerInView: t, onEmailFormSubmit: n, canonicalUrl: r } = e,
            { t: a } = (0, c.Z)("release");
          return (0, i.tZ)(i.HY, {
            children: (0, i.BX)(j, {
              children: [
                (0, i.BX)(A, {
                  children: [
                    (0, i.tZ)(D.U, {
                      children: a(
                        "release:release.the-substance.try_the_substance"
                      ),
                    }),
                    (0, i.tZ)(_.Z, { onEmailFormSubmit: n, canonicalUrl: r }),
                  ],
                }),
                (0, i.tZ)(E, {
                  showSmallTitle: !0,
                  headerInView: t,
                  canonicalUrl: r,
                }),
              ],
            }),
          });
        },
        j = (0, v.Z)("div", { target: "e1jh4w7k0" })(
          "display:grid;place-items:center;height:100%;width:100%;padding:0 20px;"
        ),
        A = (0, v.Z)("div", { target: "e1jh4w7k1" })(
          "background-color:",
          (e) => e.theme.color.white,
          ";color:",
          (e) => e.theme.color.black,
          ";padding:15px;width:100%;max-width:740px;text-align:center;@media (min-width:",
          (e) => e.theme.mqNew.mobile,
          "){padding:25px;}@media (min-width:",
          (e) => e.theme.mqNew.tablet,
          "){padding:45px;}"
        ),
        X = {
          mobile: "".concat(
            "https://assets.mubicdn.net",
            "/static/videos/thesubstance/v2/TheSubstance-Splash-Header-mobile.mp4"
          ),
          tablet: "".concat(
            "https://assets.mubicdn.net",
            "/static/videos/thesubstance/v2/TheSubstance-Splash-Header-tablet.mp4"
          ),
          desktop: "".concat(
            "https://assets.mubicdn.net",
            "/static/videos/thesubstance/v2/TheSubstance-Splash-Header.mp4"
          ),
        },
        U = (e) => {
          let {
            canonicalUrl: t,
            isVideoEnded: n,
            showEmailForm: r,
            onEmailFormSubmit: a,
            onVideoEnd: l,
          } = e;
          return (0, i.tZ)(i.HY, {
            children: (0, i.tZ)(b.df, {
              initialInView: !0,
              threshold: 0.9,
              children: (e) => {
                let { ref: o, inView: c } = e;
                return (0, i.tZ)(q, {
                  ref: o,
                  children: (0, i.tZ)(Y, {
                    children: n
                      ? (0, i.tZ)(O, {
                          children: (0, i.tZ)(R, {
                            headerInView: c,
                            onEmailFormSubmit: a,
                            canonicalUrl: t,
                          }),
                        })
                      : (0, i.BX)(k.Z, {
                          isShowing: !0,
                          children: [
                            (0, i.tZ)(O, {
                              children: (0, i.tZ)(y.Z, {
                                defaultValue: !1,
                                valueAtMobile: "mobile",
                                valueAtTablet: "tablet",
                                valueAtDesktop: "desktop",
                                valueAtWide: "desktop",
                                children: (e) => {
                                  let { currentValue: t } = e;
                                  return (
                                    t &&
                                    (0, i.tZ)(x.Z, {
                                      src: X[t],
                                      loop: !r,
                                      onEnded: l,
                                    })
                                  );
                                },
                              }),
                            }),
                            (0, i.tZ)(E, { headerInView: c, canonicalUrl: t }),
                          ],
                        }),
                  }),
                });
              },
            }),
          });
        },
        q = (0, v.Z)("div", { target: "e1ewb9u90" })(
          "color:",
          (e) => e.theme.color.white,
          ";background-color:",
          (e) => e.theme.color.black,
          ";height:100vh;min-height:750px;position:relative;z-index:2;"
        ),
        Y = (0, v.Z)("div", { target: "e1ewb9u91" })(
          "position:relative;height:100%;& > div{width:100%;height:100%;}"
        ),
        O = (0, v.Z)("div", { target: "e1ewb9u92" })(
          "position:absolute;top:0;bottom:0;left:0;right:0;background-color:",
          (e) => e.theme.color.black,
          ";"
        ),
        W = l()(() => n.e(29294).then(n.bind(n, 78530)), {
          loadableGenerated: { webpack: () => [78530] },
        }),
        F = l()(
          () => Promise.all([n.e(66208), n.e(71145)]).then(n.bind(n, 94029)),
          { loadableGenerated: { webpack: () => [94029] } }
        ),
        G = l()(() => n.e(16323).then(n.bind(n, 52343)), {
          loadableGenerated: { webpack: () => [52343] },
        }),
        K = l()(() => n.e(56027).then(n.bind(n, 97949)), {
          loadableGenerated: { webpack: () => [97949] },
        }),
        P = (e) => {
          let { showEmailCampaignForm: t = !0, isRedirecting: n = !1 } = e,
            { t: a, lang: l } = (0, c.Z)("release"),
            d = (0, u.Z)(),
            [s, p] = (0, r.useState)(t),
            [b, v] = (0, r.useState)(!1),
            x = (0, o.useRouter)(),
            y = (0, m.Z)(),
            k = (0, h.Z)(x.pathname),
            _ = (0, r.useCallback)(() => {
              setTimeout(() => {
                v(!1), p(!1);
              }, 500);
            }, []);
          if (n) return null;
          let C = "".concat(
            "https://assets.mubicdn.net",
            "/static/images/thesubstance/TS_Microsite_ShareCard_ROW_new.jpg"
          );
          return (
            ["EN", "ES", "DE"].includes(l.toLocaleUpperCase()) &&
              (C = ""
                .concat(
                  "https://assets.mubicdn.net",
                  "/static/images/thesubstance/TS_Microsite_ShareCard_"
                )
                .concat(l.toLocaleUpperCase(), "_new.jpg")),
            (0, i.BX)(i.HY, {
              children: [
                (0, i.tZ)(f.Z, {}),
                (0, i.tZ)(Z.Z, {
                  title: a("release:release.the-substance.title"),
                }),
                (0, i.tZ)(g.Z, {
                  canonicalUrl: k,
                  description: a("release:release.the-substance.description"),
                  image: C,
                }),
                (0, i.tZ)(w.Z, {
                  title: a("release:release.the-substance.title"),
                  url: k,
                  image: C,
                  description: a(
                    "release:release.the-substance.social_share_description",
                    { link: k }
                  ),
                  twitter: !0,
                  twitterSite: "@elasticafilms",
                  twitterCard: "summary_large_image",
                }),
                (0, i.tZ)(U, {
                  canonicalUrl: k,
                  isVideoEnded: b,
                  showEmailForm: s,
                  onEmailFormSubmit: _,
                  onVideoEnd: () => {
                    v(!0),
                      d({
                        data: {
                          clickType: "video-complete",
                          element: "microsite-video",
                        },
                        extraData: { page_url: k, film_id: 332868 },
                      });
                  },
                }),
                y &&
                  (0, i.BX)(i.HY, {
                    children: [
                      (0, i.tZ)(W, { canonicalUrl: k }),
                      (0, i.tZ)(F, {}),
                      s &&
                        (0, i.tZ)(G, { onEmailFormSubmit: _, canonicalUrl: k }),
                      (0, i.tZ)(K, { canonicalUrl: k }),
                    ],
                  }),
              ],
            })
          );
        };
      var J = P;
      P.getInitialProps = async (e) => {
        var t;
        let { store: n, isServer: i, res: r, query: a } = e,
          l = n.getState(),
          o =
            null == l
              ? void 0
              : null === (t = l.user) || void 0 === t
              ? void 0
              : t.geoLocation;
        if (["GB", "IE", "DE", "US", "CA", "MX"].includes(o))
          return (
            (0, s.V$)(
              i,
              (0, s.vo)({
                url: "/substance",
                i18nUrlData: (0, p.M)(l),
                includeDomain: !1,
                queryParams: a,
              }),
              r
            ),
            { isRedirecting: !0 }
          );
        let c =
          "true" !== (0, d.parseCookies)(e).subscribed_to_substance_campaign;
        return { showEmailCampaignForm: c };
      };
    },
    41641: function (e, t, n) {
      n.d(t, {
        K2: function () {
          return d;
        },
        Wz: function () {
          return g;
        },
        eO: function () {
          return w;
        },
        gP: function () {
          return h;
        },
        m7: function () {
          return p;
        },
        oe: function () {
          return a;
        },
        wf: function () {
          return f;
        },
        wh: function () {
          return c;
        },
        zc: function () {
          return l;
        },
      });
      var i = n(34620),
        r = n(73979);
      let a = (e) => {
          if ((0, i.C5)() && window.matchMedia) {
            let t = window.matchMedia("(min-width: ".concat(e, ")"));
            return !!t.matches;
          }
          return null;
        },
        l = (e) => {
          if ((0, i.C5)() && window.matchMedia) {
            let t = window.matchMedia("(max-width: ".concat(e, ")"));
            return !!t.matches;
          }
          return null;
        },
        o = (e, t) => {
          if ((0, i.C5)() && window.matchMedia) {
            let n = window.matchMedia(
              "(max-width: ".concat(t, ") and (min-width: ").concat(e, ")")
            );
            return !!n.matches;
          }
          return null;
        },
        c = () => l(r.zw.tablet),
        d = () => ((0, i.C5)() && window.matchMedia ? !c() : null),
        s = () => o(r.zw.tablet, r.zw.desktop),
        h = () => a(r.zw.tablet),
        p = () => a(r.zw.desktop),
        u = () => o(r.zw.desktop, r.zw.wide),
        m = () => o(r.zw.wide, r.zw.wideLarge),
        f = () => a(r.zw.wideLarge),
        g = () => a(r.zw.wide),
        w = (e) => {
          let {
              valueAtMobile: t,
              valueAtTablet: n,
              valueAtDesktop: i,
              valueAtWide: r,
              valueAtWideLarge: a,
              defaultValue: l,
            } = e,
            o = l;
          return (
            f() && (a || r) && (o = a || r),
            m() && r && (o = r),
            u() && i && (o = i),
            s() && n && (o = n),
            c() && t && (o = t),
            o
          );
        };
    },
    20360: function (e, t, n) {
      n.d(t, {
        YD: function () {
          return u;
        },
        df: function () {
          return p;
        },
      });
      var i = n(2784),
        r = Object.defineProperty,
        a = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        l = (e, t, n) => (a(e, "symbol" != typeof t ? t + "" : t, n), n),
        o = new Map(),
        c = new WeakMap(),
        d = 0,
        s = void 0;
      function h(e, t, n = {}, i = s) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          let r = e.getBoundingClientRect();
          return (
            t(i, {
              isIntersecting: i,
              target: e,
              intersectionRatio:
                "number" == typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: r,
              intersectionRect: r,
              rootBounds: r,
            }),
            () => {}
          );
        }
        let {
            id: r,
            observer: a,
            elements: l,
          } = (function (e) {
            let t = Object.keys(e)
                .sort()
                .filter((t) => void 0 !== e[t])
                .map((t) => {
                  var n;
                  return `${t}_${
                    "root" === t
                      ? (n = e.root)
                        ? (c.has(n) || ((d += 1), c.set(n, d.toString())),
                          c.get(n))
                        : "0"
                      : e[t]
                  }`;
                })
                .toString(),
              n = o.get(t);
            if (!n) {
              let i;
              let r = new Map(),
                a = new IntersectionObserver((t) => {
                  t.forEach((t) => {
                    var n;
                    let a =
                      t.isIntersecting &&
                      i.some((e) => t.intersectionRatio >= e);
                    e.trackVisibility &&
                      void 0 === t.isVisible &&
                      (t.isVisible = a),
                      null == (n = r.get(t.target)) ||
                        n.forEach((e) => {
                          e(a, t);
                        });
                  });
                }, e);
              (i =
                a.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (n = { id: t, observer: a, elements: r }),
                o.set(t, n);
            }
            return n;
          })(n),
          h = l.get(e) || [];
        return (
          l.has(e) || l.set(e, h),
          h.push(t),
          a.observe(e),
          function () {
            h.splice(h.indexOf(t), 1),
              0 === h.length && (l.delete(e), a.unobserve(e)),
              0 === l.size && (a.disconnect(), o.delete(r));
          }
        );
      }
      var p = class extends i.Component {
        constructor(e) {
          super(e),
            l(this, "node", null),
            l(this, "_unobserveCb", null),
            l(this, "handleNode", (e) => {
              !this.node ||
                (this.unobserve(),
                e ||
                  this.props.triggerOnce ||
                  this.props.skip ||
                  this.setState({
                    inView: !!this.props.initialInView,
                    entry: void 0,
                  })),
                (this.node = e || null),
                this.observeNode();
            }),
            l(this, "handleChange", (e, t) => {
              e && this.props.triggerOnce && this.unobserve(),
                "function" != typeof this.props.children ||
                  this.setState({ inView: e, entry: t }),
                this.props.onChange && this.props.onChange(e, t);
            }),
            (this.state = { inView: !!e.initialInView, entry: void 0 });
        }
        componentDidUpdate(e) {
          (e.rootMargin !== this.props.rootMargin ||
            e.root !== this.props.root ||
            e.threshold !== this.props.threshold ||
            e.skip !== this.props.skip ||
            e.trackVisibility !== this.props.trackVisibility ||
            e.delay !== this.props.delay) &&
            (this.unobserve(), this.observeNode());
        }
        componentWillUnmount() {
          this.unobserve(), (this.node = null);
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          let {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: i,
            delay: r,
            fallbackInView: a,
          } = this.props;
          this._unobserveCb = h(
            this.node,
            this.handleChange,
            {
              threshold: e,
              root: t,
              rootMargin: n,
              trackVisibility: i,
              delay: r,
            },
            a
          );
        }
        unobserve() {
          this._unobserveCb &&
            (this._unobserveCb(), (this._unobserveCb = null));
        }
        render() {
          let { children: e } = this.props;
          if ("function" == typeof e) {
            let { inView: t, entry: n } = this.state;
            return e({ inView: t, entry: n, ref: this.handleNode });
          }
          let {
            as: t,
            triggerOnce: n,
            threshold: r,
            root: a,
            rootMargin: l,
            onChange: o,
            skip: c,
            trackVisibility: d,
            delay: s,
            initialInView: h,
            fallbackInView: p,
            ...u
          } = this.props;
          return i.createElement(t || "div", { ref: this.handleNode, ...u }, e);
        }
      };
      function u({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: r,
        root: a,
        triggerOnce: l,
        skip: o,
        initialInView: c,
        fallbackInView: d,
        onChange: s,
      } = {}) {
        var p;
        let [u, m] = i.useState(null),
          f = i.useRef(),
          [g, w] = i.useState({ inView: !!c, entry: void 0 });
        (f.current = s),
          i.useEffect(() => {
            let i;
            if (!o && u)
              return (
                (i = h(
                  u,
                  (e, t) => {
                    w({ inView: e, entry: t }),
                      f.current && f.current(e, t),
                      t.isIntersecting && l && i && (i(), (i = void 0));
                  },
                  {
                    root: a,
                    rootMargin: r,
                    threshold: e,
                    trackVisibility: n,
                    delay: t,
                  },
                  d
                )),
                () => {
                  i && i();
                }
              );
          }, [Array.isArray(e) ? e.toString() : e, u, a, r, l, o, n, d, t]);
        let Z = null == (p = g.entry) ? void 0 : p.target,
          b = i.useRef();
        u ||
          !Z ||
          l ||
          o ||
          b.current === Z ||
          ((b.current = Z), w({ inView: !!c, entry: void 0 }));
        let v = [m, g.inView, g.entry];
        return (v.ref = v[0]), (v.inView = v[1]), (v.entry = v[2]), v;
      }
    },
  },
]);
