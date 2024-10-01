!(function () {
  "use strict";
  var e,
    c,
    a,
    f,
    d,
    b,
    t,
    n,
    i,
    o,
    r,
    s,
    l = {},
    u = {};
  function h(e) {
    var c = u[e];
    if (void 0 !== c) return c.exports;
    var a = (u[e] = { id: e, loaded: !1, exports: {} }),
      f = !0;
    try {
      l[e].call(a.exports, a, a.exports, h), (f = !1);
    } finally {
      f && delete u[e];
    }
    return (a.loaded = !0), a.exports;
  }
  (h.m = l),
    (h.amdO = {}),
    (e = []),
    (h.O = function (c, a, f, d) {
      if (a) {
        d = d || 0;
        for (var b = e.length; b > 0 && e[b - 1][2] > d; b--) e[b] = e[b - 1];
        e[b] = [a, f, d];
        return;
      }
      for (var t = 1 / 0, b = 0; b < e.length; b++) {
        for (
          var a = e[b][0], f = e[b][1], d = e[b][2], n = !0, i = 0;
          i < a.length;
          i++
        )
          t >= d &&
          Object.keys(h.O).every(function (e) {
            return h.O[e](a[i]);
          })
            ? a.splice(i--, 1)
            : ((n = !1), d < t && (t = d));
        if (n) {
          e.splice(b--, 1);
          var o = f();
          void 0 !== o && (c = o);
        }
      }
      return c;
    }),
    (h.n = function (e) {
      var c =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return h.d(c, { a: c }), c;
    }),
    (a = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (h.t = function (e, f) {
      if (
        (1 & f && (e = this(e)),
        8 & f ||
          ("object" == typeof e &&
            e &&
            ((4 & f && e.__esModule) ||
              (16 & f && "function" == typeof e.then))))
      )
        return e;
      var d = Object.create(null);
      h.r(d);
      var b = {};
      c = c || [null, a({}), a([]), a(a)];
      for (var t = 2 & f && e; "object" == typeof t && !~c.indexOf(t); t = a(t))
        Object.getOwnPropertyNames(t).forEach(function (c) {
          b[c] = function () {
            return e[c];
          };
        });
      return (
        (b.default = function () {
          return e;
        }),
        h.d(d, b),
        d
      );
    }),
    (h.d = function (e, c) {
      for (var a in c)
        h.o(c, a) &&
          !h.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: c[a] });
    }),
    (h.f = {}),
    (h.e = function (e) {
      return Promise.all(
        Object.keys(h.f).reduce(function (c, a) {
          return h.f[a](e, c), c;
        }, [])
      );
    }),
    (h.u = function (e) {
      /*if (e === 71145) {
        return "http://localhost:5500/SpreadTheWordSection.js"; // Load from localhost
      }*/
      return 64703 === e
        ? "static/chunks/" + e + "-baca804e8668b2b8.js"
        : 89172 === e
        ? "static/chunks/" + e + "-cd7bfbcb782a3c37.js"
        : 41522 === e
        ? "static/chunks/" + e + "-c4038f4481999927.js"
        : 66208 === e
        ? "static/chunks/" + e + "-6f4c8f665b59bc90.js"
        : "static/chunks/" +
          ({
            29294: "ProductDetailsSection",
            56027: "FeaturedInSection",
            62343: "onboarding",
            //71145: "SpreadTheWordSection",
          }[e] || e) +
          "." +
          {
            29294: "f633467e9c716882",
            56027: "0629cc2ee08fe10a",
            62343: "b4257ed1fbb43620",
            //71145: "8b1aa29b16f41a1b",
          }[e] +
          ".js";
    }),
    (h.miniCssF = function (e) {
      return (
        "static/css/" +
        {
          62343: "8ad3f39f5f4fb2fe",
        }[e] +
        ".css"
      );
    }),
    (h.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (h.o = function (e, c) {
      return Object.prototype.hasOwnProperty.call(e, c);
    }),
    (f = {}),
    (d = "_N_E:"),
    (h.l = function (e, c, a, b) {
      if (f[e]) {
        f[e].push(c);
        return;
      }
      if (void 0 !== a)
        for (
          var t, n, i = document.getElementsByTagName("script"), o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o];
          if (
            r.getAttribute("src") == e ||
            r.getAttribute("data-webpack") == d + a
          ) {
            t = r;
            break;
          }
        }
      t ||
        ((n = !0),
        ((t = document.createElement("script")).charset = "utf-8"),
        (t.timeout = 120),
        h.nc && t.setAttribute("nonce", h.nc),
        t.setAttribute("data-webpack", d + a),
        (t.src = h.tu(e))),
        (f[e] = [c]);
      var s = function (c, a) {
          (t.onerror = t.onload = null), clearTimeout(l);
          var d = f[e];
          if (
            (delete f[e],
            t.parentNode && t.parentNode.removeChild(t),
            d &&
              d.forEach(function (e) {
                return e(a);
              }),
            c)
          )
            return c(a);
        },
        l = setTimeout(
          s.bind(null, void 0, { type: "timeout", target: t }),
          12e4
        );
      (t.onerror = s.bind(null, t.onerror)),
        (t.onload = s.bind(null, t.onload)),
        n && document.head.appendChild(t);
    }),
    (h.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (h.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (h.tt = function () {
      return (
        void 0 === b &&
          ((b = {
            createScriptURL: function (e) {
              return e;
            },
          }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (b = trustedTypes.createPolicy("nextjs#bundler", b))),
        b
      );
    }),
    (h.tu = function (e) {
      return h.tt().createScriptURL(e);
    }),
    (h.p = "https://assets.mubicdn.net/_next/"),
    (t = function (e, c, a, f) {
      var d = document.createElement("link");
      return (
        (d.rel = "stylesheet"),
        (d.type = "text/css"),
        (d.onerror = d.onload =
          function (b) {
            if (((d.onerror = d.onload = null), "load" === b.type)) a();
            else {
              var t = b && ("load" === b.type ? "missing" : b.type),
                n = (b && b.target && b.target.href) || c,
                i = Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
              (i.code = "CSS_CHUNK_LOAD_FAILED"),
                (i.type = t),
                (i.request = n),
                d.parentNode.removeChild(d),
                f(i);
            }
          }),
        (d.href = c),
        document.head.appendChild(d),
        d
      );
    }),
    (n = function (e, c) {
      for (
        var a = document.getElementsByTagName("link"), f = 0;
        f < a.length;
        f++
      ) {
        var d = a[f],
          b = d.getAttribute("data-href") || d.getAttribute("href");
        if ("stylesheet" === d.rel && (b === e || b === c)) return d;
      }
      for (
        var t = document.getElementsByTagName("style"), f = 0;
        f < t.length;
        f++
      ) {
        var d = t[f],
          b = d.getAttribute("data-href");
        if (b === e || b === c) return d;
      }
    }),
    (i = { 62272: 0 }),
    (h.f.miniCss = function (e, c) {
      i[e]
        ? c.push(i[e])
        : 0 !== i[e] &&
          {
            62343: 1,
          }[e] &&
          c.push(
            (i[e] = new Promise(function (c, a) {
              var f = h.miniCssF(e),
                d = h.p + f;
              if (n(f, d)) return c();
              t(e, d, c, a);
            }).then(
              function () {
                i[e] = 0;
              },
              function (c) {
                throw (delete i[e], c);
              }
            ))
          );
    }),
    (o = { 62272: 0 }),
    (h.f.j = function (e, c) {
      var a = h.o(o, e) ? o[e] : void 0;
      if (0 !== a) {
        if (a) c.push(a[2]);
        else if (/^(33183|60619|62272)$/.test(e)) o[e] = 0;
        else {
          var f = new Promise(function (c, f) {
            a = o[e] = [c, f];
          });
          c.push((a[2] = f));
          var d = h.p + h.u(e),
            b = Error();
          h.l(
            d,
            function (c) {
              if (h.o(o, e) && (0 !== (a = o[e]) && (o[e] = void 0), a)) {
                var f = c && ("load" === c.type ? "missing" : c.type),
                  d = c && c.target && c.target.src;
                (b.message =
                  "Loading chunk " + e + " failed.\n(" + f + ": " + d + ")"),
                  (b.name = "ChunkLoadError"),
                  (b.type = f),
                  (b.request = d),
                  a[1](b);
              }
            },
            "chunk-" + e,
            e
          );
        }
      }
    }),
    (h.O.j = function (e) {
      return 0 === o[e];
    }),
    (r = function (e, c) {
      var a,
        f,
        d = c[0],
        b = c[1],
        t = c[2],
        n = 0;
      if (
        d.some(function (e) {
          return 0 !== o[e];
        })
      ) {
        for (a in b) h.o(b, a) && (h.m[a] = b[a]);
        if (t) var i = t(h);
      }
      for (e && e(c); n < d.length; n++)
        (f = d[n]), h.o(o, f) && o[f] && o[f][0](), (o[f] = 0);
      return h.O(i);
    }),
    (s = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(
      r.bind(null, 0)
    ),
    (s.push = r.bind(null, s.push.bind(s)));
})();
