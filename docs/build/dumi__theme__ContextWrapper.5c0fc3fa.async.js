'use strict';
(self.webpackChunkbricksjs = self.webpackChunkbricksjs || []).push([
  [458],
  {
    26420: function (x, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return p;
          },
        });
      var u = t(54306),
        d = t.n(u),
        r = t(93236),
        n = t(38923),
        c = t(29981),
        f = t.n(c),
        v = t(94578),
        o = t(78054),
        m = t(95111),
        h = t(62086),
        g = {};
      function p() {
        var y = (0, n.pC)(),
          j = (0, r.useState)(!0),
          s = d()(j, 2),
          C = s[0],
          a = s[1],
          l = (0, r.useRef)(n.m8.location.pathname);
        return (
          (0, r.useEffect)(function () {
            return n.m8.listen(function (i) {
              i.location.pathname !== l.current &&
                ((l.current = i.location.pathname),
                a(!0),
                f().start(),
                document.documentElement.scrollTo(0, 0));
            });
          }, []),
          (0, h.jsx)(v.D.Provider, {
            value: {
              pkg: {
                name: 'bricksjs',
                description: 'A javascript utility library',
                version: '0.0.1',
                license: 'MIT',
                author: 'szchason',
              },
              historyType: 'browser',
              entryExports: g,
              demos: o.DE,
              components: o.wx,
              locales: m.k,
              loading: C,
              setLoading: a,
              hostname: void 0,
              themeConfig: {
                footer:
                  'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
                prefersColor: { default: 'light', switch: !0 },
                nprogress: !0,
                name: 'bricksjs',
              },
              _2_level_nav_available: !0,
            },
            children: y,
          })
        );
      }
    },
  },
]);
