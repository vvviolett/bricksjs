(self.webpackChunkbricksjs = self.webpackChunkbricksjs || []).push([
  [137],
  {
    96606: function (f, p, a) {
      'use strict';
      a.d(p, {
        r: function () {
          return P;
        },
      });
      var e = a(93236),
        g = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        E = (C, T, k) =>
          T in C
            ? g(C, T, { enumerable: !0, configurable: !0, writable: !0, value: k })
            : (C[T] = k),
        S = (C, T) => {
          for (var k in T || (T = {})) N.call(T, k) && E(C, k, T[k]);
          if (A) for (var k of A(T)) I.call(T, k) && E(C, k, T[k]);
          return C;
        };
      const P = (C) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, C),
          e.createElement('path', {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          }),
        );
      var x =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg==';
    },
    6152: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return D;
        },
      });
      var e = a(93236),
        g = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        E = (t, r, n) =>
          r in t
            ? g(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
            : (t[r] = n),
        S = (t, r) => {
          for (var n in r || (r = {})) N.call(r, n) && E(t, n, r[n]);
          if (A) for (var n of A(r)) I.call(r, n) && E(t, n, r[n]);
          return t;
        };
      const P = (t) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
          }),
        );
      var x =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+',
        C = function (t, r, n, L) {
          function w(j) {
            return j instanceof n
              ? j
              : new n(function (H) {
                  H(j);
                });
          }
          return new (n || (n = Promise))(function (j, H) {
            function V(O) {
              try {
                ue(L.next(O));
              } catch (J) {
                H(J);
              }
            }
            function W(O) {
              try {
                ue(L.throw(O));
              } catch (J) {
                H(J);
              }
            }
            function ue(O) {
              O.done ? j(O.value) : w(O.value).then(V, W);
            }
            ue((L = L.apply(t, r || [])).next());
          });
        };
      function T(t) {
        let r = 0,
          n = 0,
          L = t;
        do (r += L.offsetTop || 0), (n += L.offsetLeft || 0), (L = L.offsetParent);
        while (L);
        return { top: r, left: n };
      }
      class k {
        constructor(r) {
          this.element = r;
        }
        getHorizontalScroll() {
          return this.element.scrollLeft;
        }
        getVerticalScroll() {
          return this.element.scrollTop;
        }
        getMaxHorizontalScroll() {
          return this.element.scrollWidth - this.element.clientWidth;
        }
        getMaxVerticalScroll() {
          return this.element.scrollHeight - this.element.clientHeight;
        }
        getHorizontalElementScrollOffset(r, n) {
          return T(r).left - T(n).left;
        }
        getVerticalElementScrollOffset(r, n) {
          return T(r).top - T(n).top;
        }
        scrollTo(r, n) {
          (this.element.scrollLeft = r), (this.element.scrollTop = n);
        }
      }
      class Z {
        constructor() {
          this.element = window;
        }
        getHorizontalScroll() {
          return window.scrollX || document.documentElement.scrollLeft;
        }
        getVerticalScroll() {
          return window.scrollY || document.documentElement.scrollTop;
        }
        getMaxHorizontalScroll() {
          return (
            Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.body.clientWidth,
              document.documentElement.clientWidth,
            ) - window.innerWidth
          );
        }
        getMaxVerticalScroll() {
          return (
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight,
            ) - window.innerHeight
          );
        }
        getHorizontalElementScrollOffset(r) {
          return (
            (window.scrollX || document.documentElement.scrollLeft) + r.getBoundingClientRect().left
          );
        }
        getVerticalElementScrollOffset(r) {
          return (
            (window.scrollY || document.documentElement.scrollTop) + r.getBoundingClientRect().top
          );
        }
        scrollTo(r, n) {
          window.scrollTo(r, n);
        }
      }
      const m = {
          elements: [],
          cancelMethods: [],
          add: (t, r) => {
            m.elements.push(t), m.cancelMethods.push(r);
          },
          remove: (t, r) => {
            const n = m.elements.indexOf(t);
            n > -1 &&
              (r && m.cancelMethods[n](), m.elements.splice(n, 1), m.cancelMethods.splice(n, 1));
          },
        },
        y = typeof window != 'undefined',
        u = {
          cancelOnUserAction: !0,
          easing: (t) => --t * t * t + 1,
          elementToScroll: y ? window : null,
          horizontalOffset: 0,
          maxDuration: 3e3,
          minDuration: 250,
          speed: 500,
          verticalOffset: 0,
        };
      function d(t, r = {}) {
        return C(this, void 0, void 0, function* () {
          if (y) {
            if (!window.Promise)
              throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
          } else
            return new Promise((fe) => {
              fe(!1);
            });
          let n,
            L,
            w,
            j = Object.assign(Object.assign({}, u), r);
          const H = j.elementToScroll === window,
            V = !!j.elementToScroll.nodeName;
          if (!H && !V) throw 'Element to scroll needs to be either window or DOM element.';
          const W = H ? document.documentElement : j.elementToScroll;
          getComputedStyle(W).getPropertyValue('scroll-behavior') === 'smooth' &&
            console.warn(
              `${W.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`,
            );
          const O = H ? new Z() : new k(j.elementToScroll);
          if (t instanceof Element) {
            if (((w = t), V && (!j.elementToScroll.contains(w) || j.elementToScroll.isSameNode(w))))
              throw 'options.elementToScroll has to be a parent of scrollToElement';
            (n = O.getHorizontalElementScrollOffset(w, j.elementToScroll)),
              (L = O.getVerticalElementScrollOffset(w, j.elementToScroll));
          } else if (typeof t == 'number') (n = O.getHorizontalScroll()), (L = t);
          else if (Array.isArray(t) && t.length === 2)
            (n = t[0] === null ? O.getHorizontalScroll() : t[0]),
              (L = t[1] === null ? O.getVerticalScroll() : t[1]);
          else
            throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;
          (n += j.horizontalOffset), (L += j.verticalOffset);
          const J = O.getMaxHorizontalScroll(),
            ce = O.getHorizontalScroll();
          n > J && (n = J);
          const ie = n - ce,
            q = O.getMaxVerticalScroll(),
            z = O.getVerticalScroll();
          L > q && (L = q);
          const B = L - z,
            X = Math.abs(Math.round((ie / 1e3) * j.speed)),
            te = Math.abs(Math.round((B / 1e3) * j.speed));
          let ne = X > te ? X : te;
          return (
            ne < j.minDuration ? (ne = j.minDuration) : ne > j.maxDuration && (ne = j.maxDuration),
            new Promise((fe, Le) => {
              ie === 0 && B === 0 && fe(!0), m.remove(O.element, !0);
              let je;
              const he = () => {
                i(), cancelAnimationFrame(je), fe(!1);
              };
              m.add(O.element, he);
              const Ie = (Y) => Y.preventDefault(),
                Ee = j.cancelOnUserAction ? he : Ie,
                Se = j.cancelOnUserAction ? { passive: !0 } : { passive: !1 },
                pe = ['wheel', 'touchstart', 'keydown', 'mousedown'],
                i = () => {
                  pe.forEach((Y) => {
                    O.element.removeEventListener(Y, Ee, Se);
                  });
                };
              pe.forEach((Y) => {
                O.element.addEventListener(Y, Ee, Se);
              });
              const l = Date.now(),
                c = () => {
                  var Y = Date.now() - l,
                    _ = Y / ne;
                  const F = Math.round(ce + ie * j.easing(_)),
                    R = Math.round(z + B * j.easing(_));
                  Y < ne && (F !== n || R !== L)
                    ? (O.scrollTo(F, R), (je = requestAnimationFrame(c)))
                    : (O.scrollTo(n, L),
                      cancelAnimationFrame(je),
                      i(),
                      m.remove(O.element, !1),
                      fe(!0));
                };
              je = requestAnimationFrame(c);
            })
          );
        });
      }
      var v = d,
        h = a(38923),
        b = a(96280),
        Q = a(84185),
        U = a(60603),
        G = a(84988),
        K = a(43507),
        ae = a(31815),
        re = a(88615);
      function se(t, r) {
        return Ae(t) || oe(t, r) || le(t, r) || Me();
      }
      function Me() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function le(t, r) {
        if (t) {
          if (typeof t == 'string') return ee(t, r);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (n === 'Object' && t.constructor && (n = t.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(t);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return ee(t, r);
        }
      }
      function ee(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var n = 0, L = new Array(r); n < r; n++) L[n] = t[n];
        return L;
      }
      function oe(t, r) {
        var n =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (n != null) {
          var L = [],
            w = !0,
            j = !1,
            H,
            V;
          try {
            for (
              n = n.call(t);
              !(w = (H = n.next()).done) && (L.push(H.value), !(r && L.length === r));
              w = !0
            );
          } catch (W) {
            (j = !0), (V = W);
          } finally {
            try {
              !w && n.return != null && n.return();
            } finally {
              if (j) throw V;
            }
          }
          return L;
        }
      }
      function Ae(t) {
        if (Array.isArray(t)) return t;
      }
      var ve = function () {
          var r = (0, h.YB)(),
            n = (0, h.pC)(),
            L = (0, h.tx)(),
            w = (0, h.TH)(),
            j = w.hash,
            H = w.pathname,
            V = (0, h.WF)(),
            W = V.loading,
            ue = V.hostname,
            O = (0, e.useState)(!1),
            J = se(O, 2),
            ce = J[0],
            ie = J[1],
            q = (0, h.eL)(),
            z = q.frontmatter,
            B = z.sidebar !== !1 && (L == null ? void 0 : L.length) > 0;
          return (
            (0, e.useEffect)(
              function () {
                var X = j.replace('#', '');
                X &&
                  setTimeout(function () {
                    var te = document.getElementById(decodeURIComponent(X));
                    te && v(te.offsetTop - 80, { maxDuration: 300 });
                  }, 1);
              },
              [W, j],
            ),
            e.createElement(
              'div',
              {
                className: 'dumi-default-doc-layout',
                'data-mobile-sidebar-active': ce || void 0,
                onClick: function () {
                  return ie(!1);
                },
              },
              e.createElement(
                h.ql,
                null,
                e.createElement('html', { lang: r.locale.replace(/-.+$/, '') }),
                z.title && e.createElement('title', null, z.title),
                z.title && e.createElement('meta', { property: 'og:title', content: z.title }),
                z.description &&
                  e.createElement('meta', { name: 'description', content: z.description }),
                z.description &&
                  e.createElement('meta', { property: 'og:description', content: z.description }),
                z.keywords &&
                  e.createElement('meta', { name: 'keywords', content: z.keywords.join(',') }),
                z.keywords &&
                  z.keywords.map(function (X) {
                    return e.createElement('meta', { key: X, property: 'article:tag', content: X });
                  }),
                ue && e.createElement('link', { rel: 'canonical', href: ue + H }),
              ),
              e.createElement(G.Z, null),
              e.createElement(K.Z, null),
              e.createElement(Q.Z, null),
              B &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-doc-layout-mobile-bar' },
                  e.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'dumi-default-sidebar-btn',
                      onClick: function (te) {
                        te.stopPropagation(),
                          ie(function (ne) {
                            return !ne;
                          });
                      },
                    },
                    e.createElement(P, null),
                    r.formatMessage({ id: 'layout.sidebar.btn' }),
                  ),
                ),
              e.createElement(
                'main',
                null,
                B && e.createElement(ae.Z, null),
                e.createElement(b.Z, null, n, e.createElement(U.Z, null)),
                z.toc === 'content' &&
                  e.createElement(
                    'div',
                    { className: 'dumi-default-doc-layout-toc-wrapper' },
                    e.createElement('h4', null, 'TABLE OF CONTENTS'),
                    e.createElement(re.Z, null),
                  ),
              ),
            )
          );
        },
        D = ve;
    },
    48757: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return m;
        },
      });
      var e = a(38923),
        g = a(93236);
      function A(y, u) {
        return P(y) || S(y, u) || I(y, u) || N();
      }
      function N() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function I(y, u) {
        if (y) {
          if (typeof y == 'string') return E(y, u);
          var d = Object.prototype.toString.call(y).slice(8, -1);
          if (
            (d === 'Object' && y.constructor && (d = y.constructor.name),
            d === 'Map' || d === 'Set')
          )
            return Array.from(y);
          if (d === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))
            return E(y, u);
        }
      }
      function E(y, u) {
        (u == null || u > y.length) && (u = y.length);
        for (var d = 0, v = new Array(u); d < u; d++) v[d] = y[d];
        return v;
      }
      function S(y, u) {
        var d =
          y == null
            ? null
            : (typeof Symbol != 'undefined' && y[Symbol.iterator]) || y['@@iterator'];
        if (d != null) {
          var v = [],
            h = !0,
            b = !1,
            Q,
            U;
          try {
            for (
              d = d.call(y);
              !(h = (Q = d.next()).done) && (v.push(Q.value), !(u && v.length === u));
              h = !0
            );
          } catch (G) {
            (b = !0), (U = G);
          } finally {
            try {
              !h && d.return != null && d.return();
            } finally {
              if (b) throw U;
            }
          }
          return v;
        }
      }
      function P(y) {
        if (Array.isArray(y)) return y;
      }
      var x = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            g.createElement('path', {
              d: 'M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z',
            }),
          );
        },
        C = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            g.createElement('path', {
              d: 'M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
            }),
          );
        },
        T = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            g.createElement('path', {
              d: 'M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z',
            }),
          );
        },
        k = { light: C, dark: x, auto: T },
        Z = function () {
          var u = (0, e.WF)(),
            d = u.themeConfig.prefersColor.default,
            v = (0, e.YB)(),
            h = (0, e.OI)(),
            b = A(h, 3),
            Q = b[1],
            U = Q === void 0 ? d : Q,
            G = b[2],
            K = k[U];
          return g.createElement(
            'span',
            {
              className: 'dumi-default-color-switch',
              'data-dumi-tooltip': v.formatMessage({ id: 'header.color.mode.'.concat(U) }),
              'data-dumi-tooltip-bottom': !0,
            },
            K && g.createElement(K, null),
            g.createElement(
              'select',
              {
                onChange: function (re) {
                  return G(re.target.value);
                },
                value: U,
              },
              ['light', 'dark', 'auto'].map(function (ae) {
                return g.createElement(
                  'option',
                  { value: ae, key: ae },
                  v.formatMessage({ id: 'header.color.mode.'.concat(ae) }),
                );
              }),
            ),
          );
        },
        m = Z;
    },
    71326: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return N;
        },
      });
      var e = a(38923),
        g = a(93236),
        A = function (E) {
          var S = (0, e.tx)(),
            P = (0, e.WF)(),
            x = P.themeConfig;
          return g.createElement(
            'div',
            {
              className: 'dumi-default-content',
              'data-no-sidebar': !S || void 0,
              'data-no-footer': x.footer === !1 || void 0,
            },
            E.children,
          );
        },
        N = A;
    },
    23838: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return N;
        },
      });
      var e = a(38923),
        g = a(93236),
        A = function () {
          var E,
            S = (0, e.eL)(),
            P = S.frontmatter;
          return !((E = P.features) === null || E === void 0) && E.length
            ? g.createElement(
                'div',
                {
                  className: 'dumi-default-features',
                  'data-cols':
                    [3, 2].find(function (x) {
                      return P.features.length % x === 0;
                    }) || 3,
                },
                P.features.map(function (x) {
                  var C = x.title,
                    T = x.description,
                    k = x.emoji,
                    Z = x.link,
                    m;
                  return (
                    Z &&
                      (m = /^(\w+:)\/\/|^(mailto|tel):/.test(Z)
                        ? g.createElement('a', { href: Z, target: '_blank', rel: 'noreferrer' }, C)
                        : g.createElement(e.rU, { to: Z }, C)),
                    g.createElement(
                      'div',
                      { key: C, className: 'dumi-default-features-item' },
                      k && g.createElement('i', null, k),
                      C && g.createElement('h3', null, m || C),
                      T && g.createElement('p', { dangerouslySetInnerHTML: { __html: T } }),
                    )
                  );
                }),
              )
            : null;
        },
        N = A;
    },
    25486: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return N;
        },
      });
      var e = a(38923),
        g = a(93236),
        A = function () {
          var E = (0, e.WF)(),
            S = E.themeConfig;
          return S.footer
            ? g.createElement('div', {
                className: 'dumi-default-footer',
                dangerouslySetInnerHTML: { __html: S.footer },
              })
            : null;
        },
        N = A;
    },
    19643: function (f, p, a) {
      'use strict';
      var e = a(93236),
        g = function () {
          return e.createElement(e.Fragment, null);
        };
      p.Z = g;
    },
    70587: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return D;
        },
      });
      var e = a(93236),
        g = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        E = (t, r, n) =>
          r in t
            ? g(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
            : (t[r] = n),
        S = (t, r) => {
          for (var n in r || (r = {})) N.call(r, n) && E(t, n, r[n]);
          if (A) for (var n of A(r)) I.call(r, n) && E(t, n, r[n]);
          return t;
        };
      const P = (t) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'm563.8 512 262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
          }),
        );
      var x =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNTYzLjggNTEyIDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyeiIvPjwvc3ZnPg==',
        C = Object.defineProperty,
        T = Object.getOwnPropertySymbols,
        k = Object.prototype.hasOwnProperty,
        Z = Object.prototype.propertyIsEnumerable,
        m = (t, r, n) =>
          r in t
            ? C(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
            : (t[r] = n),
        y = (t, r) => {
          for (var n in r || (r = {})) k.call(r, n) && m(t, n, r[n]);
          if (T) for (var n of T(r)) Z.call(r, n) && m(t, n, r[n]);
          return t;
        };
      const u = (t) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
          }),
        );
      var d =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==',
        v = a(38923),
        h = a(78019),
        b = a(15094),
        Q = a(68649),
        U = a(28988),
        G = a(45114),
        K = a(1120),
        ae = a(60754),
        re = a(76802);
      function se(t, r) {
        return Ae(t) || oe(t, r) || le(t, r) || Me();
      }
      function Me() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function le(t, r) {
        if (t) {
          if (typeof t == 'string') return ee(t, r);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (n === 'Object' && t.constructor && (n = t.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(t);
          if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return ee(t, r);
        }
      }
      function ee(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var n = 0, L = new Array(r); n < r; n++) L[n] = t[n];
        return L;
      }
      function oe(t, r) {
        var n =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (n != null) {
          var L = [],
            w = !0,
            j = !1,
            H,
            V;
          try {
            for (
              n = n.call(t);
              !(w = (H = n.next()).done) && (L.push(H.value), !(r && L.length === r));
              w = !0
            );
          } catch (W) {
            (j = !0), (V = W);
          } finally {
            try {
              !w && n.return != null && n.return();
            } finally {
              if (j) throw V;
            }
          }
          return L;
        }
      }
      function Ae(t) {
        if (Array.isArray(t)) return t;
      }
      var ve = function () {
          var r = (0, v.eL)(),
            n = r.frontmatter,
            L = (0, e.useState)(!1),
            w = se(L, 2),
            j = w[0],
            H = w[1],
            V = (0, v.WF)(),
            W = V.themeConfig,
            ue = (0, e.useMemo)(
              function () {
                return W.socialLinks
                  ? Object.keys(W.socialLinks)
                      .slice(0, 5)
                      .map(function (O) {
                        return { icon: O, link: W.socialLinks[O] };
                      })
                  : [];
              },
              [W.socialLinks],
            );
          return e.createElement(
            'div',
            {
              className: 'dumi-default-header',
              'data-static': !!n.hero || void 0,
              'data-mobile-active': j || void 0,
              onClick: function () {
                return H(!1);
              },
            },
            e.createElement(
              'div',
              { className: 'dumi-default-header-content' },
              e.createElement(
                'section',
                { className: 'dumi-default-header-left' },
                e.createElement(U.Z, null),
              ),
              e.createElement(
                'section',
                { className: 'dumi-default-header-right' },
                e.createElement(G.Z, null),
                e.createElement(
                  'div',
                  { className: 'dumi-default-header-right-aside' },
                  e.createElement(ae.ZP, null),
                  e.createElement(Q.Z, null),
                  e.createElement(K.Z, null),
                  W.prefersColor.switch && e.createElement(h.Z, null),
                  ue.map(function (O) {
                    return e.createElement(re.Z, { icon: O.icon, link: O.link, key: O.link });
                  }),
                  e.createElement(b.Z, null),
                ),
              ),
              e.createElement(
                'button',
                {
                  type: 'button',
                  className: 'dumi-default-header-menu-btn',
                  onClick: function (J) {
                    J.stopPropagation(),
                      H(function (ce) {
                        return !ce;
                      });
                  },
                },
                j ? e.createElement(P, null) : e.createElement(u, null),
              ),
            ),
          );
        },
        D = ve;
    },
    46746: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return A;
        },
      });
      var e = a(93236),
        g = function (I) {
          return e.createElement(
            'h1',
            { className: 'dumi-default-hero-title' },
            e.createElement('span', null, I.children),
          );
        },
        A = g;
    },
    1285: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return I;
        },
      });
      var e = a(38923),
        g = a(22490),
        A = a(93236),
        N = function () {
          var S,
            P = (0, e.eL)(),
            x = P.frontmatter;
          return 'hero' in x
            ? A.createElement(
                'div',
                { className: 'dumi-default-hero' },
                x.hero.title && A.createElement(g.Z, null, x.hero.title),
                x.hero.description &&
                  A.createElement('p', { dangerouslySetInnerHTML: { __html: x.hero.description } }),
                !!(!((S = x.hero.actions) === null || S === void 0) && S.length) &&
                  A.createElement(
                    'div',
                    { className: 'dumi-default-hero-actions' },
                    x.hero.actions.map(function (C) {
                      var T = C.text,
                        k = C.link;
                      return /^(\w+:)\/\/|^(mailto|tel):/.test(k)
                        ? A.createElement(
                            'a',
                            { href: k, target: '_blank', rel: 'noreferrer', key: T },
                            T,
                          )
                        : A.createElement(e.rU, { key: T, to: k }, T);
                    }),
                  ),
              )
            : null;
        },
        I = N;
    },
    46612: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return Z;
        },
      });
      var e = a(96606),
        g = a(38923),
        A = a(93236);
      function N(m, y) {
        return x(m) || P(m, y) || E(m, y) || I();
      }
      function I() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function E(m, y) {
        if (m) {
          if (typeof m == 'string') return S(m, y);
          var u = Object.prototype.toString.call(m).slice(8, -1);
          if (
            (u === 'Object' && m.constructor && (u = m.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(m);
          if (u === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
            return S(m, y);
        }
      }
      function S(m, y) {
        (y == null || y > m.length) && (y = m.length);
        for (var u = 0, d = new Array(y); u < y; u++) d[u] = m[u];
        return d;
      }
      function P(m, y) {
        var u =
          m == null
            ? null
            : (typeof Symbol != 'undefined' && m[Symbol.iterator]) || m['@@iterator'];
        if (u != null) {
          var d = [],
            v = !0,
            h = !1,
            b,
            Q;
          try {
            for (
              u = u.call(m);
              !(v = (b = u.next()).done) && (d.push(b.value), !(y && d.length === y));
              v = !0
            );
          } catch (U) {
            (h = !0), (Q = U);
          } finally {
            try {
              !v && u.return != null && u.return();
            } finally {
              if (h) throw Q;
            }
          }
          return d;
        }
      }
      function x(m) {
        if (Array.isArray(m)) return m;
      }
      function C(m) {
        var y = m.pathname,
          u = m.current,
          d = m.target,
          v =
            'base' in u
              ? y.replace(u.base.replace(/\/$/, ''), '') || '/'
              : y.replace(new RegExp(''.concat(u.suffix, '$')), '');
        return 'base' in d
          ? ''
              .concat(d.base.replace(/\/$/, ''))
              .concat(v)
              .replace(/([^/])\/$/, '$1')
          : ''.concat(v).concat(d.suffix);
      }
      var T = function (y) {
          var u = y.locale,
            d = y.current,
            v = (0, g.TH)(),
            h = v.pathname,
            b = (0, A.useState)(function () {
              return C({ pathname: h, current: d, target: u });
            }),
            Q = N(b, 2),
            U = Q[0],
            G = Q[1];
          return (
            (0, A.useEffect)(
              function () {
                G(C({ pathname: h, current: d, target: u }));
              },
              [h, d.id, u.id],
            ),
            A.createElement(g.rU, { className: 'dumi-default-lang-switch', to: U }, u.name)
          );
        },
        k = function () {
          var y = (0, g.WF)(),
            u = y.locales,
            d = (0, g.YB)(),
            v = d.locale,
            h = (0, g.bU)();
          return u.length <= 1
            ? null
            : u.length > 2
            ? A.createElement(
                'div',
                { className: 'dumi-default-lang-select' },
                A.createElement(
                  'select',
                  {
                    defaultValue: v,
                    onChange: function (Q) {
                      g.m8.push(
                        C({
                          pathname: g.m8.location.pathname,
                          current: h,
                          target: u.find(function (U) {
                            var G = U.id;
                            return G === Q.target.value;
                          }),
                        }),
                      );
                    },
                  },
                  u.map(function (b) {
                    return A.createElement('option', { key: b.id, value: b.id }, b.name);
                  }),
                ),
                A.createElement(e.r, null),
              )
            : A.createElement(T, {
                locale: u.find(function (b) {
                  var Q = b.id;
                  return Q !== v;
                }),
                current: h,
              });
        },
        Z = k;
    },
    35854: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return N;
        },
      });
      var e = a(38923),
        g = a(93236),
        A = function () {
          var E = (0, e.WF)(),
            S = E.themeConfig,
            P = (0, e.bU)();
          return g.createElement(
            e.rU,
            { className: 'dumi-default-logo', to: 'base' in P ? P.base : '/' },
            S.logo !== !1 &&
              g.createElement('img', {
                src:
                  S.logo ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==',
                alt: S.name,
              }),
            S.name,
          );
        },
        N = A;
    },
    61995: function (f, p, a) {
      'use strict';
      var e = a(93236),
        g = function () {
          return e.createElement(e.Fragment, null);
        };
      p.Z = g;
    },
    60409: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return y;
        },
      });
      var e = a(96606),
        g = a(38923),
        A = a(16258),
        N = a(93236);
      function I() {
        return (
          (I = Object.assign
            ? Object.assign.bind()
            : function (u) {
                for (var d = 1; d < arguments.length; d++) {
                  var v = arguments[d];
                  for (var h in v) Object.prototype.hasOwnProperty.call(v, h) && (u[h] = v[h]);
                }
                return u;
              }),
          I.apply(this, arguments)
        );
      }
      function E(u, d) {
        return T(u) || C(u, d) || P(u, d) || S();
      }
      function S() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function P(u, d) {
        if (u) {
          if (typeof u == 'string') return x(u, d);
          var v = Object.prototype.toString.call(u).slice(8, -1);
          if (
            (v === 'Object' && u.constructor && (v = u.constructor.name),
            v === 'Map' || v === 'Set')
          )
            return Array.from(u);
          if (v === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))
            return x(u, d);
        }
      }
      function x(u, d) {
        (d == null || d > u.length) && (d = u.length);
        for (var v = 0, h = new Array(d); v < d; v++) h[v] = u[v];
        return h;
      }
      function C(u, d) {
        var v =
          u == null
            ? null
            : (typeof Symbol != 'undefined' && u[Symbol.iterator]) || u['@@iterator'];
        if (v != null) {
          var h = [],
            b = !0,
            Q = !1,
            U,
            G;
          try {
            for (
              v = v.call(u);
              !(b = (U = v.next()).done) && (h.push(U.value), !(d && h.length === d));
              b = !0
            );
          } catch (K) {
            (Q = !0), (G = K);
          } finally {
            try {
              !b && v.return != null && v.return();
            } finally {
              if (Q) throw G;
            }
          }
          return h;
        }
      }
      function T(u) {
        if (Array.isArray(u)) return u;
      }
      var k = function (d) {
          var v = d.data,
            h = (0, g.TH)(),
            b = h.pathname,
            Q = (0, N.useState)(function () {
              var le;
              return (le = v.children) === null || le === void 0
                ? void 0
                : le.some(function (ee) {
                    var oe = ee.activePath || ee.link;
                    return oe && b.startsWith(oe);
                  });
            }),
            U = E(Q, 2),
            G = U[0],
            K = U[1],
            ae =
              v.children &&
              N.createElement(
                'button',
                {
                  className: 'dumi-default-navbar-collapse-btn',
                  type: 'button',
                  onClick: function (ee) {
                    ee.stopPropagation(),
                      K(function (oe) {
                        return !oe;
                      });
                  },
                  'data-collapsed': G || void 0,
                },
                N.createElement(e.r, null),
              ),
            re =
              v.children &&
              N.createElement(
                'ul',
                { className: 'dumi-default-navbar-dropdown', 'data-collapsed': G || void 0 },
                N.createElement(Z, { data: v.children }),
              ),
            se = v.activePath || v.link,
            Me = se && b.startsWith(se) ? { className: 'active' } : {};
          return v.link
            ? N.createElement(
                N.Fragment,
                null,
                N.createElement(g.rU, I({ to: v.link }, Me), v.title),
                ae,
                re,
              )
            : N.createElement(
                N.Fragment,
                null,
                N.createElement(
                  'span',
                  I(
                    {
                      onClick: function (ee) {
                        ee.stopPropagation(),
                          K(function (oe) {
                            return !oe;
                          });
                      },
                    },
                    Me,
                  ),
                  v.title,
                ),
                ae,
                re,
              );
        },
        Z = function (d) {
          var v = d.data;
          return N.createElement(
            N.Fragment,
            null,
            v.map(function (h) {
              return N.createElement(
                'li',
                { key: h.activePath || h.link || h.title },
                h.link && /^(\w+:)\/\/|^(mailto|tel):/.test(h.link)
                  ? N.createElement(
                      'a',
                      { href: h.link, target: '_blank', rel: 'noreferrer' },
                      h.title,
                    )
                  : N.createElement(k, { data: h }),
              );
            }),
          );
        },
        m = function () {
          var d = (0, g.OK)();
          return N.createElement(
            'ul',
            { className: 'dumi-default-navbar' },
            N.createElement(Z, { data: d }),
            N.createElement(A.Z, null),
          );
        },
        y = m;
    },
    86033: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return Z;
        },
      });
      var e = a(38923),
        g = a(93236);
      function A(m, y) {
        return P(m) || S(m, y) || I(m, y) || N();
      }
      function N() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function I(m, y) {
        if (m) {
          if (typeof m == 'string') return E(m, y);
          var u = Object.prototype.toString.call(m).slice(8, -1);
          if (
            (u === 'Object' && m.constructor && (u = m.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(m);
          if (u === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
            return E(m, y);
        }
      }
      function E(m, y) {
        (y == null || y > m.length) && (y = m.length);
        for (var u = 0, d = new Array(y); u < y; u++) d[u] = m[u];
        return d;
      }
      function S(m, y) {
        var u =
          m == null
            ? null
            : (typeof Symbol != 'undefined' && m[Symbol.iterator]) || m['@@iterator'];
        if (u != null) {
          var d = [],
            v = !0,
            h = !1,
            b,
            Q;
          try {
            for (
              u = u.call(m);
              !(v = (b = u.next()).done) && (d.push(b.value), !(y && d.length === y));
              v = !0
            );
          } catch (U) {
            (h = !0), (Q = U);
          } finally {
            try {
              !v && u.return != null && u.return();
            } finally {
              if (h) throw Q;
            }
          }
          return d;
        }
      }
      function P(m) {
        if (Array.isArray(m)) return m;
      }
      var x = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            g.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z',
            }),
          );
        },
        C = function () {
          return g.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            g.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z',
            }),
          );
        },
        T = 'dumi:rtl',
        k = function () {
          var y = (0, g.useState)(!1),
            u = A(y, 2),
            d = u[0],
            v = u[1],
            h = (0, e.WF)(),
            b = h.themeConfig;
          return (
            (0, g.useEffect)(function () {
              localStorage.getItem(T) &&
                (v(!0), document.documentElement.setAttribute('data-direction', 'rtl'));
            }, []),
            b.rtl
              ? g.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'dumi-default-rtl-switch',
                    onClick: function () {
                      d
                        ? (document.documentElement.removeAttribute('data-direction'),
                          localStorage.removeItem(T))
                        : (document.documentElement.setAttribute('data-direction', 'rtl'),
                          localStorage.setItem(T, '1')),
                        v(!d);
                    },
                    'data-dumi-tooltip': d ? 'RTL' : 'LTR',
                    'data-dumi-tooltip-bottom': !0,
                  },
                  d ? g.createElement(x, null) : g.createElement(C, null),
                )
              : null
          );
        },
        Z = k;
    },
    83608: function (f, p, a) {
      'use strict';
      a.d(p, {
        ZP: function () {
          return pe;
        },
      });
      var e = a(93236),
        g = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        E = (i, l, c) =>
          l in i
            ? g(i, l, { enumerable: !0, configurable: !0, writable: !0, value: c })
            : (i[l] = c),
        S = (i, l) => {
          for (var c in l || (l = {})) N.call(l, c) && E(i, c, l[c]);
          if (A) for (var c of A(l)) I.call(l, c) && E(i, c, l[c]);
          return i;
        };
      const P = (i) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z',
          }),
        );
      var x =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=',
        C = Object.defineProperty,
        T = Object.getOwnPropertySymbols,
        k = Object.prototype.hasOwnProperty,
        Z = Object.prototype.propertyIsEnumerable,
        m = (i, l, c) =>
          l in i
            ? C(i, l, { enumerable: !0, configurable: !0, writable: !0, value: c })
            : (i[l] = c),
        y = (i, l) => {
          for (var c in l || (l = {})) k.call(l, c) && m(i, c, l[c]);
          if (T) for (var c of T(l)) Z.call(l, c) && m(i, c, l[c]);
          return i;
        };
      const u = (i) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
          }),
        );
      var d =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+',
        v = Object.defineProperty,
        h = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        U = (i, l, c) =>
          l in i
            ? v(i, l, { enumerable: !0, configurable: !0, writable: !0, value: c })
            : (i[l] = c),
        G = (i, l) => {
          for (var c in l || (l = {})) b.call(l, c) && U(i, c, l[c]);
          if (h) for (var c of h(l)) Q.call(l, c) && U(i, c, l[c]);
          return i;
        };
      const K = (i) =>
        e.createElement(
          'svg',
          G({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          }),
        );
      var ae =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=',
        re = a(38923),
        se = Object.defineProperty,
        Me = Object.getOwnPropertySymbols,
        le = Object.prototype.hasOwnProperty,
        ee = Object.prototype.propertyIsEnumerable,
        oe = (i, l, c) =>
          l in i
            ? se(i, l, { enumerable: !0, configurable: !0, writable: !0, value: c })
            : (i[l] = c),
        Ae = (i, l) => {
          for (var c in l || (l = {})) le.call(l, c) && oe(i, c, l[c]);
          if (Me) for (var c of Me(l)) ee.call(l, c) && oe(i, c, l[c]);
          return i;
        };
      const ve = (i) =>
        e.createElement(
          'svg',
          Ae({ viewBox: '0 0 1024 1024' }, i),
          e.createElement('path', {
            d: 'm885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          }),
        );
      var D =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=';
      function t(i, l) {
        return j(i) || w(i, l) || n(i, l) || r();
      }
      function r() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function n(i, l) {
        if (i) {
          if (typeof i == 'string') return L(i, l);
          var c = Object.prototype.toString.call(i).slice(8, -1);
          if (
            (c === 'Object' && i.constructor && (c = i.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(i);
          if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
            return L(i, l);
        }
      }
      function L(i, l) {
        (l == null || l > i.length) && (l = i.length);
        for (var c = 0, Y = new Array(l); c < l; c++) Y[c] = i[c];
        return Y;
      }
      function w(i, l) {
        var c =
          i == null
            ? null
            : (typeof Symbol != 'undefined' && i[Symbol.iterator]) || i['@@iterator'];
        if (c != null) {
          var Y = [],
            _ = !0,
            F = !1,
            R,
            M;
          try {
            for (
              c = c.call(i);
              !(_ = (R = c.next()).done) && (Y.push(R.value), !(l && Y.length === l));
              _ = !0
            );
          } catch (o) {
            (F = !0), (M = o);
          } finally {
            try {
              !_ && c.return != null && c.return();
            } finally {
              if (F) throw M;
            }
          }
          return Y;
        }
      }
      function j(i) {
        if (Array.isArray(i)) return i;
      }
      var H = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
            }),
            e.createElement('path', {
              d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
            }),
            e.createElement('path', {
              d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
            }),
          );
        },
        V = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
            }),
          );
        },
        W = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
            }),
          );
        },
        ue = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
            }),
          );
        },
        O = { title: H, page: V, content: W, demo: ue },
        J = function (l) {
          return e.createElement(
            e.Fragment,
            null,
            l.texts.map(function (c, Y) {
              return e.createElement(
                e.Fragment,
                { key: Y },
                c.highlighted ? e.createElement('mark', null, c.text) : c.text,
              );
            }),
          );
        },
        ce = function (l) {
          var c = (0, e.useCallback)(
              function () {
                var M = 0,
                  o = [];
                return (
                  l.forEach(function (s) {
                    s.title && o.push({ type: 'title', value: { title: s.title } }),
                      s.hints.forEach(function ($) {
                        o.push({ type: 'hint', activeIndex: M++, value: $ });
                      });
                  }),
                  [o, M]
                );
              },
              [l],
            ),
            Y = (0, e.useState)(c),
            _ = t(Y, 2),
            F = _[0],
            R = _[1];
          return (
            (0, e.useEffect)(
              function () {
                R(c);
              },
              [l],
            ),
            F
          );
        },
        ie = function (l) {
          var c = ce(l.data),
            Y = t(c, 2),
            _ = Y[0],
            F = Y[1],
            R = (0, e.useState)(-1),
            M = t(R, 2),
            o = M[0],
            s = M[1];
          return (
            (0, e.useEffect)(function () {
              var $ = function (de) {
                if (de.key === 'ArrowDown') s((o + 1) % F);
                else if (de.key === 'ArrowUp') s((o + F - 1) % F);
                else if (de.key === 'Enter' && o >= 0) {
                  var me,
                    Te = _.find(function (De) {
                      return De.type === 'hint' && De.activeIndex === o;
                    }).value;
                  re.m8.push(Te.link),
                    (me = l.onItemSelect) === null || me === void 0 || me.call(l, Te),
                    document.activeElement.blur();
                }
                ['Escape', 'Enter'].includes(de.key) && s(-1);
              };
              return (
                document.addEventListener('keydown', $),
                function () {
                  return document.removeEventListener('keydown', $);
                }
              );
            }),
            e.createElement(
              'div',
              {
                className: 'dumi-default-search-result',
                onMouseEnter: function () {
                  return s(-1);
                },
                onMouseDownCapture: function (ge) {
                  return ge.preventDefault();
                },
                onMouseUpCapture: function () {
                  document.activeElement.blur();
                },
              },
              l.data.length || l.loading
                ? e.createElement(
                    'dl',
                    null,
                    _.map(function ($, ge) {
                      return $.type === 'title'
                        ? e.createElement('dt', { key: String(ge) }, $.value.title)
                        : e.createElement(
                            'dd',
                            { key: String(ge) },
                            e.createElement(
                              re.rU,
                              {
                                to: $.value.link,
                                'data-active': o === $.activeIndex || void 0,
                                onClick: function () {
                                  var me;
                                  return (me = l.onItemSelect) === null || me === void 0
                                    ? void 0
                                    : me.call(l, $.value);
                                },
                              },
                              e.createElement(O[$.value.type]),
                              e.createElement(
                                'h4',
                                null,
                                e.createElement(J, { texts: $.value.highlightTitleTexts }),
                              ),
                              e.createElement(
                                'p',
                                null,
                                e.createElement(J, { texts: $.value.highlightTexts }),
                              ),
                            ),
                          );
                    }),
                  )
                : e.createElement(
                    'div',
                    { className: 'dumi-default-search-empty' },
                    e.createElement(ve, null),
                    e.createElement(re._H, { id: 'search.not.found' }),
                  ),
            )
          );
        },
        q = ie,
        z = (0, e.forwardRef)(function (i, l) {
          var c = (0, re.YB)(),
            Y = (0, e.useRef)(!1),
            _ = (0, e.useRef)(null);
          return (
            (0, e.useImperativeHandle)(l, function () {
              return _.current;
            }),
            e.createElement('input', {
              className: 'dumi-default-search-bar-input',
              onCompositionStart: function () {
                return (Y.current = !0);
              },
              onCompositionEnd: function (R) {
                (Y.current = !1), i.onChange(R.currentTarget.value);
              },
              onFocus: i.onFocus,
              onBlur: i.onBlur,
              onKeyDown: function (R) {
                ['ArrowDown', 'ArrowUp'].includes(R.key) && R.preventDefault(),
                  R.key === 'Escape' && !Y.current && R.currentTarget.blur();
              },
              onChange: function (R) {
                setTimeout(function () {
                  Y.current || i.onChange(R.target.value);
                }, 1);
              },
              placeholder: c.formatMessage({ id: 'header.search.placeholder' }),
              ref: _,
            })
          );
        }),
        B = function (l) {
          return (
            (0, e.useEffect)(
              function () {
                if (l.visible) document.body.style.overflow = 'hidden';
                else {
                  var c;
                  (document.body.style.overflow = ''),
                    (c = l.onClose) === null || c === void 0 || c.call(l);
                }
              },
              [l.visible],
            ),
            l.visible
              ? e.createElement(
                  'div',
                  { className: 'dumi-default-search-modal' },
                  e.createElement('div', {
                    className: 'dumi-default-search-modal-mask',
                    onClick: l.onMaskClick,
                  }),
                  e.createElement(
                    'div',
                    { className: 'dumi-default-search-modal-content' },
                    l.children,
                  ),
                )
              : null
          );
        },
        X;
      function te(i, l) {
        return he(i) || je(i, l) || fe(i, l) || ne();
      }
      function ne() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function fe(i, l) {
        if (i) {
          if (typeof i == 'string') return Le(i, l);
          var c = Object.prototype.toString.call(i).slice(8, -1);
          if (
            (c === 'Object' && i.constructor && (c = i.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(i);
          if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
            return Le(i, l);
        }
      }
      function Le(i, l) {
        (l == null || l > i.length) && (l = i.length);
        for (var c = 0, Y = new Array(l); c < l; c++) Y[c] = i[c];
        return Y;
      }
      function je(i, l) {
        var c =
          i == null
            ? null
            : (typeof Symbol != 'undefined' && i[Symbol.iterator]) || i['@@iterator'];
        if (c != null) {
          var Y = [],
            _ = !0,
            F = !1,
            R,
            M;
          try {
            for (
              c = c.call(i);
              !(_ = (R = c.next()).done) && (Y.push(R.value), !(l && Y.length === l));
              _ = !0
            );
          } catch (o) {
            (F = !0), (M = o);
          } finally {
            try {
              !_ && c.return != null && c.return();
            } finally {
              if (F) throw M;
            }
          }
          return Y;
        }
      }
      function he(i) {
        if (Array.isArray(i)) return i;
      }
      var Ie = /(mac|iphone|ipod|ipad)/i.test(
          typeof navigator != 'undefined'
            ? (X = navigator) === null || X === void 0
              ? void 0
              : X.platform
            : '',
        ),
        Ee = function (l) {
          return ['TEXTAREA', 'INPUT'].includes(l.tagName) || l.contentEditable === 'true';
        },
        Se = function () {
          var l = (0, e.useState)(!1),
            c = te(l, 2),
            Y = c[0],
            _ = c[1],
            F = (0, e.useRef)(null),
            R = (0, e.useRef)(null),
            M = (0, e.useState)('\u2318'),
            o = te(M, 2),
            s = o[0],
            $ = o[1],
            ge = (0, re.OO)(),
            de = ge.keywords,
            me = ge.setKeywords,
            Te = ge.result,
            De = ge.loading,
            Ye = (0, e.useState)(!1),
            ze = te(Ye, 2),
            be = ze[0],
            Oe = ze[1];
          return (
            (0, e.useEffect)(function () {
              Ie || $('Ctrl');
              var ye = function (Ne) {
                if (
                  (((Ie ? Ne.metaKey : Ne.ctrlKey) && Ne.key === 'k') ||
                    (Ne.key === '/' && !Ee(Ne.target))) &&
                  (Ne.preventDefault(), F.current)
                ) {
                  var xe = F.current.getBoundingClientRect(),
                    ke = xe.top,
                    Pe = xe.bottom,
                    Qe = xe.left,
                    Ue = xe.right,
                    He = ke >= 0 && Qe >= 0 && Pe <= window.innerHeight && Ue <= window.innerWidth;
                  He
                    ? F.current.focus()
                    : (me(''),
                      Oe(!0),
                      setTimeout(function () {
                        var we;
                        (we = R.current) === null || we === void 0 || we.focus();
                      }));
                }
                Ne.key === 'Escape' && (Ne.preventDefault(), Oe(!1));
              };
              return (
                document.addEventListener('keydown', ye),
                function () {
                  return document.removeEventListener('keydown', ye);
                }
              );
            }, []),
            e.createElement(
              'div',
              { className: 'dumi-default-search-bar' },
              e.createElement(K, { className: 'dumi-default-search-bar-svg' }),
              e.createElement(z, {
                onFocus: function () {
                  return _(!0);
                },
                onBlur: function () {
                  setTimeout(function () {
                    _(!1);
                  }, 1);
                },
                onChange: function (Ce) {
                  return me(Ce);
                },
                ref: F,
              }),
              e.createElement('span', { className: 'dumi-default-search-shortcut' }, s, ' K'),
              de.trim() &&
                Y &&
                (Te.length || !De) &&
                !be &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-search-popover' },
                  e.createElement('section', null, e.createElement(q, { data: Te, loading: De })),
                ),
              e.createElement(
                B,
                {
                  visible: be,
                  onMaskClick: function () {
                    Oe(!1);
                  },
                  onClose: function () {
                    return me('');
                  },
                },
                e.createElement(
                  'div',
                  { style: { position: 'relative' } },
                  e.createElement(K, { className: 'dumi-default-search-bar-svg' }),
                  e.createElement(z, {
                    onFocus: function () {
                      return _(!0);
                    },
                    onBlur: function () {
                      setTimeout(function () {
                        _(!1);
                      }, 1);
                    },
                    onChange: function (Ce) {
                      return me(Ce);
                    },
                    ref: R,
                  }),
                ),
                e.createElement(q, {
                  data: Te,
                  loading: De,
                  onItemSelect: function () {
                    Oe(!1);
                  },
                }),
                e.createElement(
                  'footer',
                  null,
                  e.createElement(
                    'ul',
                    { className: 'dumi-default-search-modal-commands' },
                    e.createElement(
                      'li',
                      { className: 'dumi-default-search-modal-commands-arrow' },
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(u, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        }),
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(P, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        }),
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-commands-text' },
                        'to navigate',
                      ),
                    ),
                    e.createElement(
                      'li',
                      null,
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        'esc',
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-commands-text' },
                        'to close',
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        },
        pe = Se;
    },
    78905: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return I;
        },
      });
      var e = a(38923),
        g = a(88615),
        A = a(93236),
        N = function () {
          var S = (0, e.TH)(),
            P = S.pathname,
            x = (0, e.eL)(),
            C = (0, e.tx)();
          return C
            ? A.createElement(
                'div',
                { className: 'dumi-default-sidebar' },
                C.map(function (T, k) {
                  return A.createElement(
                    'dl',
                    { className: 'dumi-default-sidebar-group', key: String(k) },
                    T.title && A.createElement('dt', null, T.title),
                    T.children.map(function (Z) {
                      return A.createElement(
                        'dd',
                        { key: Z.link },
                        A.createElement(e.OL, { to: Z.link, title: Z.title, end: !0 }, Z.title),
                        Z.link === P && x.frontmatter.toc === 'menu' && A.createElement(g.Z, null),
                      );
                    }),
                  );
                }),
              )
            : null;
        },
        I = N;
    },
    53648: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return R;
        },
      });
      var e = a(93236),
        g = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        E = (M, o, s) =>
          o in M
            ? g(M, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (M[o] = s),
        S = (M, o) => {
          for (var s in o || (o = {})) N.call(o, s) && E(M, s, o[s]);
          if (A) for (var s of A(o)) I.call(o, s) && E(M, s, o[s]);
          return M;
        };
      const P = (M) =>
        e.createElement(
          'svg',
          S({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z',
          }),
        );
      var x =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjczNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTQ0YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzIgNzM2SDY2My45VjYwMi4yaDEwNGwxNS42LTEyMC43SDY2My45di03Ny4xYzAtMzUgOS43LTU4LjggNTkuOC01OC44aDYzLjl2LTEwOGMtMTEuMS0xLjUtNDktNC44LTkzLjItNC44LTkyLjIgMC0xNTUuMyA1Ni4zLTE1NS4zIDE1OS42djg5SDQzNC45djEyMC43aDEwNC4zVjg0OEgxNzZWMTc2aDY3MnY2NzJ6Ii8+PC9zdmc+',
        C = Object.defineProperty,
        T = Object.getOwnPropertySymbols,
        k = Object.prototype.hasOwnProperty,
        Z = Object.prototype.propertyIsEnumerable,
        m = (M, o, s) =>
          o in M
            ? C(M, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (M[o] = s),
        y = (M, o) => {
          for (var s in o || (o = {})) k.call(o, s) && m(M, s, o[s]);
          if (T) for (var s of T(o)) Z.call(o, s) && m(M, s, o[s]);
          return M;
        };
      const u = (M) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
          }),
        );
      var d =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTExLjYgNzYuM0MyNjQuMyA3Ni4yIDY0IDI3Ni40IDY0IDUyMy41IDY0IDcxOC45IDE4OS4zIDg4NSAzNjMuOCA5NDZjMjMuNSA1LjkgMTkuOS0xMC44IDE5LjktMjIuMnYtNzcuNWMtMTM1LjcgMTUuOS0xNDEuMi03My45LTE1MC4zLTg4LjlDMjE1IDcyNiAxNzEuNSA3MTggMTg0LjUgNzAzYzMwLjktMTUuOSA2Mi40IDQgOTguOSA1Ny45IDI2LjQgMzkuMSA3Ny45IDMyLjUgMTA0IDI2IDUuNy0yMy41IDE3LjktNDQuNSAzNC43LTYwLjgtMTQwLjYtMjUuMi0xOTkuMi0xMTEtMTk5LjItMjEzIDAtNDkuNSAxNi4zLTk1IDQ4LjMtMTMxLjctMjAuNC02MC41IDEuOS0xMTIuMyA0LjktMTIwIDU4LjEtNS4yIDExOC41IDQxLjYgMTIzLjIgNDUuMyAzMy04LjkgNzAuNy0xMy42IDExMi45LTEzLjYgNDIuNCAwIDgwLjIgNC45IDExMy41IDEzLjkgMTEuMy04LjYgNjcuMy00OC44IDEyMS4zLTQzLjkgMi45IDcuNyAyNC43IDU4LjMgNS41IDExOCAzMi40IDM2LjggNDguOSA4Mi43IDQ4LjkgMTMyLjMgMCAxMDIuMi01OSAxODguMS0yMDAgMjEyLjlhMTI3LjUgMTI3LjUgMCAwIDEgMzguMSA5MXYxMTIuNWMuOCA5IDAgMTcuOSAxNSAxNy45IDE3Ny4xLTU5LjcgMzA0LjYtMjI3IDMwNC42LTQyNC4xIDAtMjQ3LjItMjAwLjQtNDQ3LjMtNDQ3LjUtNDQ3LjN6Ii8+PC9zdmc+',
        v = Object.defineProperty,
        h = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        U = (M, o, s) =>
          o in M
            ? v(M, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (M[o] = s),
        G = (M, o) => {
          for (var s in o || (o = {})) b.call(o, s) && U(M, s, o[s]);
          if (h) for (var s of h(o)) Q.call(o, s) && U(M, s, o[s]);
          return M;
        };
      const K = (M) =>
        e.createElement(
          'svg',
          G({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M913.9 552.2 805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776 405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9 207.3-276.7 29.5 99.2-236.8 177.5z',
          }),
        );
      var ae =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEzLjkgNTUyLjIgODA1IDE4MS40di0uMWMtNy42LTIyLjktMjUuNy0zNi41LTQ4LjMtMzYuNS0yMy40IDAtNDIuNSAxMy41LTQ5LjcgMzUuMmwtNzEuNCAyMTNIMzg4LjhsLTcxLjQtMjEzYy03LjItMjEuNy0yNi4zLTM1LjItNDkuNy0zNS4yLTIzLjEgMC00Mi41IDE0LjgtNDguNCAzNi42TDExMC41IDU1Mi4yYy00LjQgMTQuNyAxLjIgMzEuNCAxMy41IDQwLjdsMzY4LjUgMjc2LjRjMi42IDMuNiA2LjIgNi4zIDEwLjQgNy44bDguNiA2LjQgOC41LTYuNGM0LjktMS43IDktNC43IDExLjktOC45bDM2OC40LTI3NS40YzEyLjQtOS4yIDE4LTI1LjkgMTMuNi00MC42ek03NTEuNyAxOTMuNGMxLTEuOCAyLjktMS45IDMuNS0xLjkgMS4xIDAgMi41LjMgMy40IDNMODE4IDM5NC4zSDY4NC41bDY3LjItMjAwLjl6bS00ODcuNCAxYy45LTIuNiAyLjMtMi45IDMuNC0yLjkgMi43IDAgMi45LjEgMy40IDEuN2w2Ny4zIDIwMS4ySDIwNi41bDU3LjgtMjAwek0xNTguOCA1NTguN2wyOC4yLTk3LjMgMjAyLjQgMjcwLjItMjMwLjYtMTcyLjl6bTczLjktMTE2LjRoMTIyLjFsOTAuOCAyODQuMy0yMTIuOS0yODQuM3pNNTEyLjkgNzc2IDQwNS43IDQ0Mi4zSDYyMEw1MTIuOSA3NzZ6bTE1Ny45LTMzMy43aDExOS41TDU4MCA3MjMuMWw5MC44LTI4MC44em0tNDAuNyAyOTMuOSAyMDcuMy0yNzYuNyAyOS41IDk5LjItMjM2LjggMTc3LjV6Ii8+PC9zdmc+',
        re = Object.defineProperty,
        se = Object.getOwnPropertySymbols,
        Me = Object.prototype.hasOwnProperty,
        le = Object.prototype.propertyIsEnumerable,
        ee = (M, o, s) =>
          o in M
            ? re(M, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (M[o] = s),
        oe = (M, o) => {
          for (var s in o || (o = {})) Me.call(o, s) && ee(M, s, o[s]);
          if (se) for (var s of se(o)) le.call(o, s) && ee(M, s, o[s]);
          return M;
        };
      const Ae = (M) =>
        e.createElement(
          'svg',
          oe({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z',
          }),
        );
      var ve =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ3LjcgMTEySDE3Ni4zYy0zNS41IDAtNjQuMyAyOC44LTY0LjMgNjQuM3Y2NzEuNGMwIDM1LjUgMjguOCA2NC4zIDY0LjMgNjQuM2g2NzEuNGMzNS41IDAgNjQuMy0yOC44IDY0LjMtNjQuM1YxNzYuM2MwLTM1LjUtMjguOC02NC4zLTY0LjMtNjQuM3ptMCA3MzZjLTQ0Ny44LS4xLTY3MS43LS4yLTY3MS43LS4zLjEtNDQ3LjguMi02NzEuNy4zLTY3MS43IDQ0Ny44LjEgNjcxLjcuMiA2NzEuNy4zLS4xIDQ0Ny44LS4yIDY3MS43LS4zIDY3MS43ek0yMzAuNiA0MTEuOWgxMTguN3YzODEuOEgyMzAuNnptNTkuNC01Mi4yYzM3LjkgMCA2OC44LTMwLjggNjguOC02OC44YTY4LjggNjguOCAwIDEgMC0xMzcuNiAwYy0uMSAzOCAzMC43IDY4LjggNjguOCA2OC44em0yNTIuMyAyNDUuMWMwLTQ5LjggOS41LTk4IDcxLjItOTggNjAuOCAwIDYxLjcgNTYuOSA2MS43IDEwMS4ydjE4NS43aDExOC42VjU4NC4zYzAtMTAyLjgtMjIuMi0xODEuOS0xNDIuMy0xODEuOS01Ny43IDAtOTYuNCAzMS43LTExMi4zIDYxLjdoLTEuNnYtNTIuMkg0MjMuN3YzODEuOGgxMTguNlY2MDQuOHoiLz48L3N2Zz4=',
        D = Object.defineProperty,
        t = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable,
        L = (M, o, s) =>
          o in M
            ? D(M, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (M[o] = s),
        w = (M, o) => {
          for (var s in o || (o = {})) r.call(o, s) && L(M, s, o[s]);
          if (t) for (var s of t(o)) n.call(o, s) && L(M, s, o[s]);
          return M;
        };
      const j = (M) =>
        e.createElement(
          'svg',
          w({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
          }),
        );
      var H =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTI4IDI1NC4zYy0zMC42IDEzLjItNjMuOSAyMi43LTk4LjIgMjYuNGExNzAuMSAxNzAuMSAwIDAgMCA3NS05NCAzMzYuNjQgMzM2LjY0IDAgMCAxLTEwOC4yIDQxLjJBMTcwLjEgMTcwLjEgMCAwIDAgNjcyIDE3NGMtOTQuNSAwLTE3MC41IDc2LjYtMTcwLjUgMTcwLjYgMCAxMy4yIDEuNiAyNi40IDQuMiAzOS4xLTE0MS41LTcuNC0yNjcuNy03NS0zNTEuNi0xNzguNWExNjkuMzIgMTY5LjMyIDAgMCAwLTIzLjIgODYuMWMwIDU5LjIgMzAuMSAxMTEuNCA3NiAxNDIuMWExNzIgMTcyIDAgMCAxLTc3LjEtMjEuN3YyLjFjMCA4Mi45IDU4LjYgMTUxLjYgMTM2LjcgMTY3LjRhMTgwLjYgMTgwLjYgMCAwIDEtNDQuOSA1LjhjLTExLjEgMC0yMS42LTEuMS0zMi4yLTIuNkMyMTEgNjUyIDI3My45IDcwMS4xIDM0OC44IDcwMi43Yy01OC42IDQ1LjktMTMyIDcyLjktMjExLjcgNzIuOS0xNC4zIDAtMjcuNS0uNS00MS4yLTIuMUMxNzEuNSA4MjIgMjYxLjIgODUwIDM1Ny44IDg1MCA2NzEuNCA4NTAgODQzIDU5MC4yIDg0MyAzNjQuN2MwLTcuNCAwLTE0LjgtLjUtMjIuMiAzMy4yLTI0LjMgNjIuMy01NC40IDg1LjUtODguMnoiLz48L3N2Zz4=',
        V = Object.defineProperty,
        W = Object.getOwnPropertySymbols,
        ue = Object.prototype.hasOwnProperty,
        O = Object.prototype.propertyIsEnumerable,
        J = (M, o, s) =>
          o in M
            ? V(M, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (M[o] = s),
        ce = (M, o) => {
          for (var s in o || (o = {})) ue.call(o, s) && J(M, s, o[s]);
          if (W) for (var s of W(o)) O.call(o, s) && J(M, s, o[s]);
          return M;
        };
      const ie = (M) =>
        e.createElement(
          'svg',
          ce({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z',
          }),
        );
      var q =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDU3LjMgNTQzYy02OC4xLTE3LjctMTQ1IDE2LjItMTc0LjYgNzYuMi0zMC4xIDYxLjItMSAxMjkuMSA2Ny44IDE1MS4zIDcxLjIgMjMgMTU1LjItMTIuMiAxODQuNC03OC4zIDI4LjctNjQuNi03LjItMTMxLTc3LjYtMTQ5LjJ6bS01MiAxNTYuMmMtMTMuOCAyMi4xLTQzLjUgMzEuNy02NS44IDIxLjYtMjItMTAtMjguNS0zNS43LTE0LjYtNTcuMiAxMy43LTIxLjQgNDIuMy0zMSA2NC40LTIxLjcgMjIuNCA5LjUgMjkuNiAzNSAxNiA1Ny4zem00NS41LTU4LjVjLTUgOC42LTE2LjEgMTIuNy0yNC43IDkuMS04LjUtMy41LTExLjItMTMuMS02LjQtMjEuNSA1LTguNCAxNS42LTEyLjQgMjQuMS05LjEgOC43IDMuMiAxMS44IDEyLjkgNyAyMS41em0zMzQuNS0xOTcuMmMxNSA0LjggMzEtMy40IDM1LjktMTguMyAxMS44LTM2LjYgNC40LTc4LjQtMjMuMi0xMDlhMTExLjM5IDExMS4zOSAwIDAgMC0xMDYtMzQuMyAyOC40NSAyOC40NSAwIDAgMC0yMS45IDMzLjggMjguMzkgMjguMzkgMCAwIDAgMzMuOCAyMS44YzE4LjQtMy45IDM4LjMgMS44IDUxLjkgMTYuN2E1NC4yIDU0LjIgMCAwIDEgMTEuMyA1My4zIDI4LjQ1IDI4LjQ1IDAgMCAwIDE4LjIgMzZ6bTk5LjgtMjA2Yy01Ni43LTYyLjktMTQwLjQtODYuOS0yMTcuNy03MC41YTMyLjk4IDMyLjk4IDAgMCAwLTI1LjQgMzkuMyAzMy4xMiAzMy4xMiAwIDAgMCAzOS4zIDI1LjVjNTUtMTEuNyAxMTQuNCA1LjQgMTU0LjggNTAuMSA0MC4zIDQ0LjcgNTEuMiAxMDUuNyAzNCAxNTkuMS01LjYgMTcuNCAzLjkgMzYgMjEuMyA0MS43IDE3LjQgNS42IDM2LTMuOSA0MS42LTIxLjJ2LS4xYzI0LjEtNzUuNCA4LjktMTYxLjEtNDcuOS0yMjMuOXpNNzI5IDQ5OWMtMTIuMi0zLjYtMjAuNS02LjEtMTQuMS0yMi4xIDEzLjgtMzQuNyAxNS4yLTY0LjcuMy04Ni0yOC00MC4xLTEwNC44LTM3LjktMTkyLjgtMS4xIDAgMC0yNy42IDEyLjEtMjAuNi05LjggMTMuNS00My41IDExLjUtNzkuOS05LjYtMTAxLTQ3LjctNDcuOC0xNzQuNiAxLjgtMjgzLjUgMTEwLjZDMTI3LjMgNDcxLjEgODAgNTU3LjUgODAgNjMyLjIgODAgNzc1LjEgMjYzLjIgODYyIDQ0Mi41IDg2MmMyMzUgMCAzOTEuMy0xMzYuNSAzOTEuMy0yNDUgMC02NS41LTU1LjItMTAyLjYtMTA0LjgtMTE4ek00NDMgODEwLjhjLTE0MyAxNC4xLTI2Ni41LTUwLjUtMjc1LjgtMTQ0LjUtOS4zLTkzLjkgOTkuMi0xODEuNSAyNDIuMi0xOTUuNiAxNDMtMTQuMiAyNjYuNSA1MC41IDI3NS44IDE0NC40QzY5NC40IDcwOSA1ODYgNzk2LjYgNDQzIDgxMC44eiIvPjwvc3ZnPg==',
        z = Object.defineProperty,
        B = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        te = Object.prototype.propertyIsEnumerable,
        ne = (M, o, s) =>
          o in M
            ? z(M, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (M[o] = s),
        fe = (M, o) => {
          for (var s in o || (o = {})) X.call(o, s) && ne(M, s, o[s]);
          if (B) for (var s of B(o)) te.call(o, s) && ne(M, s, o[s]);
          return M;
        };
      const Le = (M) =>
        e.createElement(
          'svg',
          fe({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z',
          }),
        );
      var je =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMzcwLjZjLTkuOS0zOS40IDkuOS0xMDIuMiA3My40LTEyNC40bC02Ny45LTMuNnMtMjUuNy05MC0xNDMuNi05OGMtMTE3LjgtOC4xLTE5NC45LTMtMTk1LTMgLjEgMCA4Ny40IDU1LjYgNTIuNCAxNTQuNy0yNS42IDUyLjUtNjUuOCA5NS42LTEwOC44IDE0NC43LTEuMyAxLjMtMi41IDIuNi0zLjUgMy43QzMxOS40IDYwNSA5NiA4NjAgOTYgODYwYzI0NS45IDY0LjQgNDEwLjctNi4zIDUwOC4yLTkxLjEgMjAuNS0uMiAzNS45LS4zIDQ2LjMtLjMgMTM1LjggMCAyNTAuNi0xMTcuNiAyNDUuOS0yNDguNC0zLjItODkuOS0zMS45LTExMC4yLTQxLjgtMTQ5LjZ6bS0yMDQuMSAzMzRjLTEwLjYgMC0yNi4yLjEtNDYuOC4zbC0yMy42LjItMTcuOCAxNS41Yy00Ny4xIDQxLTEwNC40IDcxLjUtMTcxLjQgODcuNi01Mi41IDEyLjYtMTEwIDE2LjItMTcyLjcgOS42IDE4LTIwLjUgMzYuNS00MS42IDU1LjQtNjMuMSA5Mi0xMDQuNiAxNzMuOC0xOTcuNSAyMzYuOS0yNjguNWwxLjQtMS40IDEuMy0xLjVjNC4xLTQuNiAyMC42LTIzLjMgMjQuNy0yOC4xIDkuNy0xMS4xIDE3LjMtMTkuOSAyNC41LTI4LjYgMzAuNy0zNi43IDUyLjItNjcuOCA2OS0xMDIuMmwxLjYtMy4zIDEuMi0zLjRjMTMuNy0zOC44IDE1LjQtNzYuOSA2LjItMTEyLjggMjIuNS43IDQ2LjUgMS45IDcxLjcgMy42IDMzLjMgMi4zIDU1LjUgMTIuOSA3MS4xIDI5LjIgNS44IDYgMTAuMiAxMi41IDEzLjQgMTguNyAxIDIgMS43IDMuNiAyLjMgNWw1IDE3LjdjLTE1LjcgMzQuNS0xOS45IDczLjMtMTEuNCAxMDcuMiAzIDExLjggNi45IDIyLjQgMTIuMyAzNC40IDIuMSA0LjcgOS41IDIwLjEgMTEgMjMuMyAxMC4zIDIyLjcgMTUuNCA0MyAxNi43IDc4LjcgMy4zIDk0LjYtODIuNyAxODEuOS0xODIgMTgxLjl6Ii8+PC9zdmc+',
        he = Object.defineProperty,
        Ie = Object.getOwnPropertySymbols,
        Ee = Object.prototype.hasOwnProperty,
        Se = Object.prototype.propertyIsEnumerable,
        pe = (M, o, s) =>
          o in M
            ? he(M, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
            : (M[o] = s),
        i = (M, o) => {
          for (var s in o || (o = {})) Ee.call(o, s) && pe(M, s, o[s]);
          if (Ie) for (var s of Ie(o)) Se.call(o, s) && pe(M, s, o[s]);
          return M;
        };
      const l = (M) =>
        e.createElement(
          'svg',
          i({ viewBox: '64 64 896 896' }, M),
          e.createElement('path', {
            d: 'M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z',
          }),
        );
      var c =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTY0LjcgMjMwLjFWODAzaDYwbDI1LjIgNzEuNEw3NTYuMyA4MDNoMTMxLjVWMjMwLjFINTY0Ljd6bTI0Ny43IDQ5N2gtNTkuOWwtNzUuMSA1MC40LTE3LjgtNTAuNGgtMThWMzA4LjNoMTcwLjd2NDE4Ljh6TTUyNi4xIDQ4Ni45SDM5My4zYzIuMS00NC45IDQuMy0xMDQuMyA2LjYtMTcyLjloMTMwLjlsLS4xLTguMWMwLS42LS4yLTE0LjctMi4zLTI5LjEtMi4xLTE1LTYuNi0zNC45LTIxLTM0LjlIMjg3LjhjNC40LTIwLjYgMTUuNy02OS43IDI5LjQtOTMuOGw2LjQtMTEuMi0xMi45LS43Yy0uOCAwLTE5LjYtLjktNDEuNCAxMC42LTM1LjcgMTktNTEuNyA1Ni40LTU4LjcgODQuNC0xOC40IDczLjEtNDQuNiAxMjMuOS01NS43IDE0NS42LTMuMyA2LjQtNS4zIDEwLjItNi4yIDEyLjgtMS44IDQuOS0uOCA5LjggMi44IDEzIDEwLjUgOS41IDM4LjItMi45IDM4LjUtMyAuNi0uMyAxLjMtLjYgMi4yLTEgMTMuOS02LjMgNTUuMS0yNSA2OS44LTg0LjVoNTYuN2MuNyAzMi4yIDMuMSAxMzguNCAyLjkgMTcyLjloLTE0MWwtMi4xIDEuNWMtMjMuMSAxNi45LTMwLjUgNjMuMi0zMC44IDY1LjJsLTEuNCA5LjJoMTY3Yy0xMi4zIDc4LjMtMjYuNSAxMTMuNC0zNCAxMjcuNC0zLjcgNy03LjMgMTQtMTAuNyAyMC44LTIxLjMgNDIuMi00My40IDg1LjgtMTI2LjMgMTUzLjYtMy42IDIuOC03IDgtNC44IDEzLjcgMi40IDYuMyA5LjMgOS4xIDI0LjYgOS4xIDUuNCAwIDExLjgtLjMgMTkuNC0xIDQ5LjktNC40IDEwMC44LTE4IDEzNS4xLTg3LjYgMTctMzUuMSAzMS43LTcxLjcgNDMuOS0xMDguOUw0OTcgODUwbDUtMTJjLjgtMS45IDE5LTQ2LjMgNS4xLTk1LjlsLS41LTEuOC0xMDguMS0xMjMtMjIgMTYuNmM2LjQtMjYuMSAxMC42LTQ5LjkgMTIuNS03MS4xaDE1OC43di04YzAtNDAuMS0xOC41LTYzLjktMTkuMi02NC45bC0yLjQtM3oiLz48L3N2Zz4=',
        Y = a(33052),
        _ = {
          github: u,
          weibo: ie,
          twitter: j,
          gitlab: K,
          facebook: P,
          zhihu: l,
          yuque: Le,
          linkedin: Ae,
        },
        F = function (o) {
          var s = o.icon,
            $ = o.link,
            ge = (0, Y.Z)(),
            de = (0, e.useMemo)(
              function () {
                return { Icon: _[s], link: $ };
              },
              [s, $],
            );
          return e.createElement(
            'a',
            {
              className: 'dumi-default-icon',
              'data-dumi-tooltip': ge.formatMessage({ id: 'header.social.'.concat(s) }),
              'data-dumi-tooltip-bottom': !0,
              target: '_blank',
              href: de.link,
              rel: 'noreferrer',
            },
            e.createElement(de.Icon, null),
          );
        },
        R = F;
    },
    50097: function (f, p, a) {
      'use strict';
      a.d(p, {
        Z: function () {
          return ve;
        },
      });
      var e = a(93525),
        g = a.n(e),
        A = a(54306),
        N = a.n(A),
        I = a(93236),
        E = a(21140),
        S = a.n(E),
        P = a(63466),
        x = a.n(P),
        C = a(68608),
        T = a.n(C),
        k = a(58853),
        Z = a.n(k),
        m = a(38888),
        y = a.n(m),
        u = a(52510),
        d = a.n(u),
        v = x()(function D() {
          S()(this, D);
        }),
        h = (function (D) {
          Z()(r, D);
          var t = y()(r);
          function r(n) {
            var L;
            return S()(this, r), (L = t.call(this)), d()(T()(L), 'el', void 0), (L.el = n), L;
          }
          return (
            x()(
              r,
              [
                {
                  key: 'top',
                  get: function () {
                    return this.el.getBoundingClientRect().top;
                  },
                },
                {
                  key: 'outerHeight',
                  get: function () {
                    return this.el.getBoundingClientRect().height;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return this.el.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return this.el.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return this.scrollTop + this.outerHeight >= this.scrollHeight;
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (L) {
                    this.el.addEventListener('scroll', L);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (L) {
                    this.el.removeEventListener('scroll', L);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (L) {
                    var w = document.querySelector(L);
                    if (!w) throw new Error('element is not found.');
                    return new r(w);
                  },
                },
              ],
            ),
            r
          );
        })(v),
        b = (function (D) {
          Z()(r, D);
          var t = y()(r);
          function r() {
            return S()(this, r), t.apply(this, arguments);
          }
          return (
            x()(
              r,
              [
                {
                  key: 'outerHeight',
                  get: function () {
                    return window.innerHeight;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return document.documentElement.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return document.documentElement.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return this.scrollTop + this.outerHeight >= this.scrollHeight;
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (L) {
                    document.addEventListener('scroll', L);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (L) {
                    document.removeEventListener('scroll', L);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function () {
                    return new r();
                  },
                },
              ],
            ),
            r
          );
        })(v),
        Q = (function () {
          function D() {
            S()(this, D);
          }
          return (
            x()(D, null, [
              {
                key: 'create',
                value: function (r) {
                  return r ? h.create(r) : b.create();
                },
              },
            ]),
            D
          );
        })(),
        U = function (t) {
          var r = t.sectionRefs,
            n = t.rootSelector,
            L = t.offset,
            w = L === void 0 ? 0 : L,
            j = (0, I.useRef)(null);
          (0, I.useEffect)(
            function () {
              j.current = Q.create(n);
            },
            [n],
          );
          var H = (0, I.useCallback)(
              function () {
                return j.current ? j.current.isScrolledToBottom() : !1;
              },
              [j],
            ),
            V = (0, I.useCallback)(
              function (z) {
                if (!j.current) return !1;
                var B = j.current.scrollTop,
                  X = B + j.current.outerHeight,
                  te = z.getBoundingClientRect(),
                  ne = j.current instanceof h ? B + te.top - j.current.top + w : B + te.top + w,
                  fe = ne + te.height;
                return [ne < X, fe > B].every(function (Le) {
                  return Le;
                });
              },
              [j, w],
            ),
            W = (0, I.useCallback)(
              function () {
                return r.map(function (z) {
                  return z.current ? V(z.current) : !1;
                });
              },
              [V, r],
            ),
            ue = (0, I.useState)([]),
            O = N()(ue, 2),
            J = O[0],
            ce = O[1],
            ie = (0, I.useMemo)(
              function () {
                return J.findIndex(function (z) {
                  return z;
                });
              },
              [J],
            ),
            q = (0, I.useCallback)(
              function () {
                var z = H()
                  ? [].concat(
                      g()(
                        new Array(r.length - 1).fill(!1).map(function (B) {
                          return B;
                        }),
                      ),
                      [!0],
                    )
                  : W();
                ce(z);
              },
              [W, H, r],
            );
          return (
            (0, I.useEffect)(
              function () {
                return (
                  q(),
                  j.current && j.current.registerScrollEvent(q),
                  function () {
                    j.current && j.current.unregisterScrollEvent(q);
                  }
                );
              },
              [q],
            ),
            { elementsStatusInViewport: J, currentElementIndexInViewport: ie }
          );
        },
        G = function (t) {
          var r = t.children,
            n = t.sectionRefs,
            L = t.rootSelector,
            w = t.offset,
            j = U({ sectionRefs: n, rootSelector: L, offset: w }),
            H = j.elementsStatusInViewport,
            V = j.currentElementIndexInViewport;
          return r({ elementsStatusInViewport: H, currentElementIndexInViewport: V });
        },
        K = a(38923);
      function ae() {
        return (
          (ae = Object.assign
            ? Object.assign.bind()
            : function (D) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (D[n] = r[n]);
                }
                return D;
              }),
          ae.apply(this, arguments)
        );
      }
      function re(D, t) {
        return oe(D) || ee(D, t) || Me(D, t) || se();
      }
      function se() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Me(D, t) {
        if (D) {
          if (typeof D == 'string') return le(D, t);
          var r = Object.prototype.toString.call(D).slice(8, -1);
          if (
            (r === 'Object' && D.constructor && (r = D.constructor.name),
            r === 'Map' || r === 'Set')
          )
            return Array.from(D);
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return le(D, t);
        }
      }
      function le(D, t) {
        (t == null || t > D.length) && (t = D.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = D[r];
        return n;
      }
      function ee(D, t) {
        var r =
          D == null
            ? null
            : (typeof Symbol != 'undefined' && D[Symbol.iterator]) || D['@@iterator'];
        if (r != null) {
          var n = [],
            L = !0,
            w = !1,
            j,
            H;
          try {
            for (
              r = r.call(D);
              !(L = (j = r.next()).done) && (n.push(j.value), !(t && n.length === t));
              L = !0
            );
          } catch (V) {
            (w = !0), (H = V);
          } finally {
            try {
              !L && r.return != null && r.return();
            } finally {
              if (w) throw H;
            }
          }
          return n;
        }
      }
      function oe(D) {
        if (Array.isArray(D)) return D;
      }
      var Ae = function () {
          var t = (0, K.TH)(),
            r = t.pathname,
            n = t.search,
            L = t.hash,
            w = (0, K.eL)(),
            j = (0, K.zh)(),
            H = (0, K.WF)(),
            V = H.loading,
            W = (0, I.useRef)(0),
            ue = (0, I.useState)([]),
            O = re(ue, 2),
            J = O[0],
            ce = O[1],
            ie = I.useMemo(
              function () {
                var q = w.toc;
                return (
                  j && (q = j.toc),
                  q.filter(function (z) {
                    var B = z.depth;
                    return B > 1 && B < 4;
                  })
                );
              },
              [w, j],
            );
          return (
            (0, I.useEffect)(
              function () {
                if (!V) {
                  var q = ie.map(function (z) {
                    var B = z.id;
                    return { current: document.getElementById(B) };
                  });
                  ce(q);
                }
              },
              [r, n, V],
            ),
            J.length
              ? I.createElement(G, { sectionRefs: J }, function (q) {
                  var z = q.currentElementIndexInViewport;
                  return (
                    z > -1 && (W.current = z),
                    I.createElement(
                      'ul',
                      { className: 'dumi-default-toc' },
                      ie
                        .filter(function (B) {
                          var X = B.depth;
                          return X > 1 && X < 4;
                        })
                        .map(function (B, X) {
                          var te = ''.concat(n, '#').concat(encodeURIComponent(B.id)),
                            ne = z > -1 ? z : W.current;
                          return I.createElement(
                            'li',
                            { key: B.id, 'data-depth': B.depth },
                            I.createElement(
                              K.rU,
                              ae(
                                {
                                  to: te,
                                  onClickCapture: function () {
                                    decodeURIComponent(L).slice(1) === B.id && K.m8.replace(n);
                                  },
                                  title: B.title,
                                },
                                ne === X ? { className: 'active' } : {},
                              ),
                              B.title,
                            ),
                          );
                        }),
                    )
                  );
                })
              : null
          );
        },
        ve = Ae;
    },
    30006: function (f, p, a) {
      var e = a(25705);
      function g(A) {
        if (Array.isArray(A)) return e(A);
      }
      (f.exports = g), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    68608: function (f) {
      function p(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }
      (f.exports = p), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    21140: function (f) {
      function p(a, e) {
        if (!(a instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      (f.exports = p), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    63466: function (f, p, a) {
      var e = a(26982);
      function g(N, I) {
        for (var E = 0; E < I.length; E++) {
          var S = I[E];
          (S.enumerable = S.enumerable || !1),
            (S.configurable = !0),
            'value' in S && (S.writable = !0),
            Object.defineProperty(N, e(S.key), S);
        }
      }
      function A(N, I, E) {
        return (
          I && g(N.prototype, I),
          E && g(N, E),
          Object.defineProperty(N, 'prototype', { writable: !1 }),
          N
        );
      }
      (f.exports = A), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    38888: function (f, p, a) {
      var e = a(44908),
        g = a(14614),
        A = a(91621);
      function N(I) {
        var E = g();
        return function () {
          var P = e(I),
            x;
          if (E) {
            var C = e(this).constructor;
            x = Reflect.construct(P, arguments, C);
          } else x = P.apply(this, arguments);
          return A(this, x);
        };
      }
      (f.exports = N), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    44908: function (f) {
      function p(a) {
        return (
          (f.exports = p =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (g) {
                  return g.__proto__ || Object.getPrototypeOf(g);
                }),
          (f.exports.__esModule = !0),
          (f.exports.default = f.exports),
          p(a)
        );
      }
      (f.exports = p), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    58853: function (f, p, a) {
      var e = a(49154);
      function g(A, N) {
        if (typeof N != 'function' && N !== null)
          throw new TypeError('Super expression must either be null or a function');
        (A.prototype = Object.create(N && N.prototype, {
          constructor: { value: A, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(A, 'prototype', { writable: !1 }),
          N && e(A, N);
      }
      (f.exports = g), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    14614: function (f) {
      function p() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (a) {
          return !1;
        }
      }
      (f.exports = p), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    16660: function (f) {
      function p(a) {
        if ((typeof Symbol != 'undefined' && a[Symbol.iterator] != null) || a['@@iterator'] != null)
          return Array.from(a);
      }
      (f.exports = p), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    95848: function (f) {
      function p() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      (f.exports = p), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    91621: function (f, p, a) {
      var e = a(37635).default,
        g = a(68608);
      function A(N, I) {
        if (I && (e(I) === 'object' || typeof I == 'function')) return I;
        if (I !== void 0)
          throw new TypeError('Derived constructors may only return object or undefined');
        return g(N);
      }
      (f.exports = A), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    49154: function (f) {
      function p(a, e) {
        return (
          (f.exports = p =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (A, N) {
                  return (A.__proto__ = N), A;
                }),
          (f.exports.__esModule = !0),
          (f.exports.default = f.exports),
          p(a, e)
        );
      }
      (f.exports = p), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
    93525: function (f, p, a) {
      var e = a(30006),
        g = a(16660),
        A = a(41442),
        N = a(95848);
      function I(E) {
        return e(E) || g(E) || A(E) || N();
      }
      (f.exports = I), (f.exports.__esModule = !0), (f.exports.default = f.exports);
    },
  },
]);
