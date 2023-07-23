(self.webpackChunkbricksjs = self.webpackChunkbricksjs || []).push([
  [45],
  {
    14223: function (nt, ft, w) {
      'use strict';
      var ee = w(38923),
        Z = w(93236),
        ye = w(18072);
      function I(K, m) {
        return Ce(K) || te(K, m) || ie(K, m) || re();
      }
      function re() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ie(K, m) {
        if (K) {
          if (typeof K == 'string') return le(K, m);
          var S = Object.prototype.toString.call(K).slice(8, -1);
          if (
            (S === 'Object' && K.constructor && (S = K.constructor.name),
            S === 'Map' || S === 'Set')
          )
            return Array.from(K);
          if (S === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))
            return le(K, m);
        }
      }
      function le(K, m) {
        (m == null || m > K.length) && (m = K.length);
        for (var S = 0, M = new Array(m); S < m; S++) M[S] = K[S];
        return M;
      }
      function te(K, m) {
        var S =
          K == null
            ? null
            : (typeof Symbol != 'undefined' && K[Symbol.iterator]) || K['@@iterator'];
        if (S != null) {
          var M = [],
            j = !0,
            A = !1,
            V,
            ne;
          try {
            for (
              S = S.call(K);
              !(j = (V = S.next()).done) && (M.push(V.value), !(m && M.length === m));
              j = !0
            );
          } catch (H) {
            (A = !0), (ne = H);
          } finally {
            try {
              !j && S.return != null && S.return();
            } finally {
              if (A) throw ne;
            }
          }
          return M;
        }
      }
      function Ce(K) {
        if (Array.isArray(K)) return K;
      }
      var Se = {
          toString: function (m) {
            return typeof m.type == 'string' && m.type in this
              ? 'enum' in m
                ? this.enum(m)
                : this[m.type](m)
              : m.type
              ? this.getValidClassName(m) || m.type
              : 'const' in m
              ? ''.concat(m.const)
              : 'oneOf' in m
              ? this.oneOf(m)
              : 'unknown';
          },
          string: function (m) {
            return m.type;
          },
          number: function (m) {
            return m.type;
          },
          boolean: function (m) {
            return m.type;
          },
          any: function (m) {
            return m.type;
          },
          object: function (m) {
            var S = this,
              M = [];
            return (
              Object.entries(m.properties || {}).forEach(function (j) {
                var A,
                  V = I(j, 2),
                  ne = V[0],
                  H = V[1];
                M.push(
                  ''
                    .concat(ne)
                    .concat(
                      (A = m.required) !== null && A !== void 0 && A.includes(ne) ? '' : '?',
                      ': ',
                    )
                    .concat(H.type === 'object' ? 'object' : S.toString(H)),
                );
              }),
              M.length ? '{ '.concat(M.join('; '), ' }') : '{}'
            );
          },
          array: function (m) {
            if (m.items) {
              var S = this.getValidClassName(m.items);
              return S ? ''.concat(S, '[]') : ''.concat(this.toString(m.items), '[]');
            }
            return 'any[]';
          },
          element: function (m) {
            return '<'.concat(m.componentName, ' />');
          },
          function: function (m) {
            var S = this,
              M = m.signature,
              j = 'oneOf' in M ? M.oneOf : [M];
            return j
              .map(function (A) {
                return ''
                  .concat(A.isAsync ? 'async ' : '', '(')
                  .concat(
                    A.arguments
                      .map(function (V) {
                        return ''.concat(V.key, ': ').concat(S.toString(V));
                      })
                      .join(', '),
                    ') => ',
                  )
                  .concat(S.toString(A.returnType));
              })
              .join(' | ');
          },
          dom: function (m) {
            return m.className || 'DOM';
          },
          enum: function (m) {
            return m.enum
              .map(function (S) {
                return JSON.stringify(S);
              })
              .join(' | ');
          },
          oneOf: function (m) {
            var S = this;
            return m.oneOf
              .map(function (M) {
                return S.getValidClassName(M) || S.toString(M);
              })
              .join(' | ');
          },
          getValidClassName: function (m) {
            return 'className' in m && typeof m.className == 'string' && m.className !== '__type'
              ? m.className
              : null;
          },
        },
        g = function (m) {
          var S = useState(function () {
              return Se.toString(m);
            }),
            M = I(S, 2),
            j = M[0],
            A = M[1];
          return (
            useEffect(
              function () {
                A(Se.toString(m));
              },
              [m],
            ),
            React.createElement('code', null, j)
          );
        },
        ke = function (m) {
          var S,
            M = useRouteMeta(),
            j = M.frontmatter,
            A = useAtomAssets(),
            V = A.components,
            ne = m.id || j.atomId,
            H = useIntl();
          if (!ne) throw new Error('`id` properties if required for API component!');
          var T = V == null ? void 0 : V[ne];
          return React.createElement(
            'div',
            { className: 'markdown' },
            React.createElement(
              Table,
              null,
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement('th', null, H.formatMessage({ id: 'api.component.name' })),
                  React.createElement(
                    'th',
                    null,
                    H.formatMessage({ id: 'api.component.description' }),
                  ),
                  React.createElement('th', null, H.formatMessage({ id: 'api.component.type' })),
                  React.createElement('th', null, H.formatMessage({ id: 'api.component.default' })),
                ),
              ),
              React.createElement(
                'tbody',
                null,
                T && (S = T.propsConfig) !== null && S !== void 0 && S.properties
                  ? Object.entries(T.propsConfig.properties).map(function (W) {
                      var X,
                        ae = I(W, 2),
                        J = ae[0],
                        se = ae[1];
                      return React.createElement(
                        'tr',
                        { key: J },
                        React.createElement('td', null, J),
                        React.createElement('td', null, se.description || '--'),
                        React.createElement('td', null, React.createElement(g, se)),
                        React.createElement(
                          'td',
                          null,
                          React.createElement(
                            'code',
                            null,
                            (X = T.propsConfig.required) !== null && X !== void 0 && X.includes(J)
                              ? H.formatMessage({ id: 'api.component.required' })
                              : JSON.stringify(se.default) || '--',
                          ),
                        ),
                      );
                    })
                  : React.createElement(
                      'tr',
                      null,
                      React.createElement(
                        'td',
                        { colSpan: 4 },
                        H.formatMessage(
                          { id: 'api.component.'.concat(V ? 'not.found' : 'unavailable') },
                          { id: ne },
                        ),
                      ),
                    ),
              ),
            ),
          );
        },
        ve = null;
    },
    881: function (nt, ft, w) {
      'use strict';
      var ee = w(93236);
      function Z() {
        return (
          (Z = Object.assign
            ? Object.assign.bind()
            : function (re) {
                for (var ie = 1; ie < arguments.length; ie++) {
                  var le = arguments[ie];
                  for (var te in le)
                    Object.prototype.hasOwnProperty.call(le, te) && (re[te] = le[te]);
                }
                return re;
              }),
          Z.apply(this, arguments)
        );
      }
      var ye = function (ie) {
          return React.createElement('span', Z({ className: 'dumi-default-badge' }, ie));
        },
        I = null;
    },
    18072: function (nt, ft, w) {
      'use strict';
      var ee = w(30826),
        Z = w(93236),
        ye = null;
      function I(K, m) {
        return Ce(K) || te(K, m) || ie(K, m) || re();
      }
      function re() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ie(K, m) {
        if (K) {
          if (typeof K == 'string') return le(K, m);
          var S = Object.prototype.toString.call(K).slice(8, -1);
          if (
            (S === 'Object' && K.constructor && (S = K.constructor.name),
            S === 'Map' || S === 'Set')
          )
            return Array.from(K);
          if (S === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))
            return le(K, m);
        }
      }
      function le(K, m) {
        (m == null || m > K.length) && (m = K.length);
        for (var S = 0, M = new Array(m); S < m; S++) M[S] = K[S];
        return M;
      }
      function te(K, m) {
        var S =
          K == null
            ? null
            : (typeof Symbol != 'undefined' && K[Symbol.iterator]) || K['@@iterator'];
        if (S != null) {
          var M = [],
            j = !0,
            A = !1,
            V,
            ne;
          try {
            for (
              S = S.call(K);
              !(j = (V = S.next()).done) && (M.push(V.value), !(m && M.length === m));
              j = !0
            );
          } catch (H) {
            (A = !0), (ne = H);
          } finally {
            try {
              !j && S.return != null && S.return();
            } finally {
              if (A) throw ne;
            }
          }
          return M;
        }
      }
      function Ce(K) {
        if (Array.isArray(K)) return K;
      }
      function Se(K, m) {
        if (K == null) return {};
        var S = g(K, m),
          M,
          j;
        if (Object.getOwnPropertySymbols) {
          var A = Object.getOwnPropertySymbols(K);
          for (j = 0; j < A.length; j++)
            (M = A[j]),
              !(m.indexOf(M) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(K, M) &&
                (S[M] = K[M]);
        }
        return S;
      }
      function g(K, m) {
        if (K == null) return {};
        var S = {},
          M = Object.keys(K),
          j,
          A;
        for (A = 0; A < M.length; A++) (j = M[A]), !(m.indexOf(j) >= 0) && (S[j] = K[j]);
        return S;
      }
      var ke = function (m) {
          var S = m.children,
            M = Se(m, ye),
            j = useRef(null),
            A = useState(!1),
            V = I(A, 2),
            ne = V[0],
            H = V[1],
            T = useState(!1),
            W = I(T, 2),
            X = W[0],
            ae = W[1];
          return (
            useEffect(function () {
              var J = j.current;
              if (J) {
                var se = throttle(function () {
                  H(J.scrollLeft > 0), ae(J.scrollLeft < J.scrollWidth - J.offsetWidth);
                }, 100);
                return (
                  se(),
                  J.addEventListener('scroll', se),
                  window.addEventListener('resize', se),
                  function () {
                    J.removeEventListener('scroll', se), window.removeEventListener('resize', se);
                  }
                );
              }
            }, []),
            React.createElement(
              'div',
              { className: 'dumi-default-table' },
              React.createElement(
                'div',
                {
                  className: 'dumi-default-table-content',
                  ref: j,
                  'data-left-folded': ne || void 0,
                  'data-right-folded': X || void 0,
                },
                React.createElement('table', M, S),
              ),
            )
          );
        },
        ve = null;
    },
    15914: function (nt, ft, w) {
      'use strict';
      var ee = w(87366),
        Z = w(58216),
        ye = w(88143),
        I = w(49919),
        re = w(3972),
        ie = w(87989),
        le = w(51852),
        te = w(75859),
        Ce = w(96214),
        Se = w(56099),
        g = w(93236),
        ke = w(52053),
        ve = w(37543),
        K = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
        m = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
        S = ''
          .concat(K, ' ')
          .concat(m)
          .split(/[\s\n]+/),
        M = 'aria-',
        j = 'data-';
      function A(n, o) {
        return n.indexOf(o) === 0;
      }
      function V(n) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l;
        o === !1
          ? (l = { aria: !0, data: !0, attr: !0 })
          : o === !0
          ? (l = { aria: !0 })
          : (l = (0, I.Z)({}, o));
        var e = {};
        return (
          Object.keys(n).forEach(function (i) {
            ((l.aria && (i === 'role' || A(i, M))) ||
              (l.data && A(i, j)) ||
              (l.attr && S.includes(i))) &&
              (e[i] = n[i]);
          }),
          e
        );
      }
      var ne = w(84875),
        H = w.n(ne),
        T = g.createContext(null),
        W = w(17576),
        X = function (o) {
          for (
            var l = o.prefixCls,
              e = o.level,
              i = o.isStart,
              d = o.isEnd,
              u = ''.concat(l, '-indent-unit'),
              t = [],
              r = 0;
            r < e;
            r += 1
          ) {
            var a;
            t.push(
              g.createElement('span', {
                key: r,
                className: H()(
                  u,
                  ((a = {}),
                  (0, Z.Z)(a, ''.concat(u, '-start'), i[r]),
                  (0, Z.Z)(a, ''.concat(u, '-end'), d[r]),
                  a),
                ),
              }),
            );
          }
          return g.createElement(
            'span',
            { 'aria-hidden': 'true', className: ''.concat(l, '-indent') },
            t,
          );
        },
        ae = g.memo(X),
        J = w(1726),
        se = w(47740),
        Ie = ['children'];
      function ue(n, o) {
        return ''.concat(n, '-').concat(o);
      }
      function De(n) {
        return n && n.type && n.type.isTreeNode;
      }
      function me(n, o) {
        return n != null ? n : o;
      }
      function We(n) {
        var o = n || {},
          l = o.title,
          e = o._title,
          i = o.key,
          d = o.children,
          u = l || 'title';
        return { title: u, _title: e || [u], key: i || 'key', children: d || 'children' };
      }
      function Xe(n, o) {
        var l = new Map();
        function e(i) {
          var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
          (i || []).forEach(function (u) {
            var t = u[o.key],
              r = u[o.children];
            warning(t != null, 'Tree node must have a certain key: ['.concat(d).concat(t, ']'));
            var a = String(t);
            warning(
              !l.has(a) || t === null || t === void 0,
              "Same 'key' exist in the Tree: ".concat(a),
            ),
              l.set(a, !0),
              e(r, ''.concat(d).concat(a, ' > '));
          });
        }
        e(n);
      }
      function rt(n) {
        function o(l) {
          var e = (0, J.Z)(l);
          return e
            .map(function (i) {
              if (!De(i))
                return (0, ve.ZP)(!i, 'Tree/TreeNode can only accept TreeNode as children.'), null;
              var d = i.key,
                u = i.props,
                t = u.children,
                r = (0, W.Z)(u, Ie),
                a = (0, I.Z)({ key: d }, r),
                s = o(t);
              return s.length && (a.children = s), a;
            })
            .filter(function (i) {
              return i;
            });
        }
        return o(n);
      }
      function Be(n, o, l) {
        var e = We(l),
          i = e._title,
          d = e.key,
          u = e.children,
          t = new Set(o === !0 ? [] : o),
          r = [];
        function a(s) {
          var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return s.map(function (f, v) {
            for (var p = ue(c ? c.pos : '0', v), y = me(f[d], p), b, h = 0; h < i.length; h += 1) {
              var E = i[h];
              if (f[E] !== void 0) {
                b = f[E];
                break;
              }
            }
            var k = (0, I.Z)(
              (0, I.Z)({}, (0, se.Z)(f, [].concat((0, re.Z)(i), [d, u]))),
              {},
              {
                title: b,
                key: y,
                parent: c,
                pos: p,
                children: null,
                data: f,
                isStart: [].concat((0, re.Z)(c ? c.isStart : []), [v === 0]),
                isEnd: [].concat((0, re.Z)(c ? c.isEnd : []), [v === s.length - 1]),
              },
            );
            return (
              r.push(k),
              o === !0 || t.has(y) ? (k.children = a(f[u] || [], k)) : (k.children = []),
              k
            );
          });
        }
        return a(n), r;
      }
      function St(n, o, l) {
        var e = {};
        (0, ye.Z)(l) === 'object' ? (e = l) : (e = { externalGetKey: l }), (e = e || {});
        var i = e,
          d = i.childrenPropName,
          u = i.externalGetKey,
          t = i.fieldNames,
          r = We(t),
          a = r.key,
          s = r.children,
          c = d || s,
          f;
        u
          ? typeof u == 'string'
            ? (f = function (y) {
                return y[u];
              })
            : typeof u == 'function' &&
              (f = function (y) {
                return u(y);
              })
          : (f = function (y, b) {
              return me(y[a], b);
            });
        function v(p, y, b, h) {
          var E = p ? p[c] : n,
            k = p ? ue(b.pos, y) : '0',
            N = p ? [].concat((0, re.Z)(h), [p]) : [];
          if (p) {
            var x = f(p, k),
              D = {
                node: p,
                index: y,
                pos: k,
                key: x,
                parentPos: b.node ? b.pos : null,
                level: b.level + 1,
                nodes: N,
              };
            o(D);
          }
          E &&
            E.forEach(function (O, R) {
              v(O, R, { node: p, pos: k, level: b ? b.level + 1 : -1 }, N);
            });
        }
        v(null);
      }
      function kt(n) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          l = o.initWrapper,
          e = o.processEntity,
          i = o.onProcessFinished,
          d = o.externalGetKey,
          u = o.childrenPropName,
          t = o.fieldNames,
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = d || r,
          s = {},
          c = {},
          f = { posEntities: s, keyEntities: c };
        return (
          l && (f = l(f) || f),
          St(
            n,
            function (v) {
              var p = v.node,
                y = v.index,
                b = v.pos,
                h = v.key,
                E = v.parentPos,
                k = v.level,
                N = v.nodes,
                x = { node: p, nodes: N, index: y, key: h, pos: b, level: k },
                D = me(h, b);
              (s[b] = x),
                (c[D] = x),
                (x.parent = s[E]),
                x.parent &&
                  ((x.parent.children = x.parent.children || []), x.parent.children.push(x)),
                e && e(x, f);
            },
            { externalGetKey: a, childrenPropName: u, fieldNames: t },
          ),
          i && i(f),
          f
        );
      }
      function Ae(n, o) {
        var l = o.expandedKeys,
          e = o.selectedKeys,
          i = o.loadedKeys,
          d = o.loadingKeys,
          u = o.checkedKeys,
          t = o.halfCheckedKeys,
          r = o.dragOverNodeKey,
          a = o.dropPosition,
          s = o.keyEntities,
          c = s[n],
          f = {
            eventKey: n,
            expanded: l.indexOf(n) !== -1,
            selected: e.indexOf(n) !== -1,
            loaded: i.indexOf(n) !== -1,
            loading: d.indexOf(n) !== -1,
            checked: u.indexOf(n) !== -1,
            halfChecked: t.indexOf(n) !== -1,
            pos: String(c ? c.pos : ''),
            dragOver: r === n && a === 0,
            dragOverGapTop: r === n && a === -1,
            dragOverGapBottom: r === n && a === 1,
          };
        return f;
      }
      function G(n) {
        var o = n.data,
          l = n.expanded,
          e = n.selected,
          i = n.checked,
          d = n.loaded,
          u = n.loading,
          t = n.halfChecked,
          r = n.dragOver,
          a = n.dragOverGapTop,
          s = n.dragOverGapBottom,
          c = n.pos,
          f = n.active,
          v = n.eventKey,
          p = (0, I.Z)(
            (0, I.Z)({}, o),
            {},
            {
              expanded: l,
              selected: e,
              checked: i,
              loaded: d,
              loading: u,
              halfChecked: t,
              dragOver: r,
              dragOverGapTop: a,
              dragOverGapBottom: s,
              pos: c,
              active: f,
              key: v,
            },
          );
        return (
          'props' in p ||
            Object.defineProperty(p, 'props', {
              get: function () {
                return (
                  (0, ve.ZP)(
                    !1,
                    'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.',
                  ),
                  n
                );
              },
            }),
          p
        );
      }
      var vt = [
          'eventKey',
          'className',
          'style',
          'dragOver',
          'dragOverGapTop',
          'dragOverGapBottom',
          'isLeaf',
          'isStart',
          'isEnd',
          'expanded',
          'selected',
          'checked',
          'halfChecked',
          'loading',
          'domRef',
          'active',
          'data',
          'onMouseMove',
          'selectable',
        ],
        pt = 'open',
        ht = 'close',
        at = '---',
        q = (function (n) {
          (0, Ce.Z)(l, n);
          var o = (0, Se.Z)(l);
          function l() {
            var e;
            (0, ie.Z)(this, l);
            for (var i = arguments.length, d = new Array(i), u = 0; u < i; u++) d[u] = arguments[u];
            return (
              (e = o.call.apply(o, [this].concat(d))),
              (e.state = { dragNodeHighlight: !1 }),
              (e.selectHandle = void 0),
              (e.cacheIndent = void 0),
              (e.onSelectorClick = function (t) {
                var r = e.props.context.onNodeClick;
                r(t, G(e.props)), e.isSelectable() ? e.onSelect(t) : e.onCheck(t);
              }),
              (e.onSelectorDoubleClick = function (t) {
                var r = e.props.context.onNodeDoubleClick;
                r(t, G(e.props));
              }),
              (e.onSelect = function (t) {
                if (!e.isDisabled()) {
                  var r = e.props.context.onNodeSelect;
                  t.preventDefault(), r(t, G(e.props));
                }
              }),
              (e.onCheck = function (t) {
                if (!e.isDisabled()) {
                  var r = e.props,
                    a = r.disableCheckbox,
                    s = r.checked,
                    c = e.props.context.onNodeCheck;
                  if (!(!e.isCheckable() || a)) {
                    t.preventDefault();
                    var f = !s;
                    c(t, G(e.props), f);
                  }
                }
              }),
              (e.onMouseEnter = function (t) {
                var r = e.props.context.onNodeMouseEnter;
                r(t, G(e.props));
              }),
              (e.onMouseLeave = function (t) {
                var r = e.props.context.onNodeMouseLeave;
                r(t, G(e.props));
              }),
              (e.onContextMenu = function (t) {
                var r = e.props.context.onNodeContextMenu;
                r(t, G(e.props));
              }),
              (e.onDragStart = function (t) {
                var r = e.props.context.onNodeDragStart;
                t.stopPropagation(), e.setState({ dragNodeHighlight: !0 }), r(t, (0, te.Z)(e));
                try {
                  t.dataTransfer.setData('text/plain', '');
                } catch (a) {}
              }),
              (e.onDragEnter = function (t) {
                var r = e.props.context.onNodeDragEnter;
                t.preventDefault(), t.stopPropagation(), r(t, (0, te.Z)(e));
              }),
              (e.onDragOver = function (t) {
                var r = e.props.context.onNodeDragOver;
                t.preventDefault(), t.stopPropagation(), r(t, (0, te.Z)(e));
              }),
              (e.onDragLeave = function (t) {
                var r = e.props.context.onNodeDragLeave;
                t.stopPropagation(), r(t, (0, te.Z)(e));
              }),
              (e.onDragEnd = function (t) {
                var r = e.props.context.onNodeDragEnd;
                t.stopPropagation(), e.setState({ dragNodeHighlight: !1 }), r(t, (0, te.Z)(e));
              }),
              (e.onDrop = function (t) {
                var r = e.props.context.onNodeDrop;
                t.preventDefault(),
                  t.stopPropagation(),
                  e.setState({ dragNodeHighlight: !1 }),
                  r(t, (0, te.Z)(e));
              }),
              (e.onExpand = function (t) {
                var r = e.props,
                  a = r.loading,
                  s = r.context.onNodeExpand;
                a || s(t, G(e.props));
              }),
              (e.setSelectHandle = function (t) {
                e.selectHandle = t;
              }),
              (e.getNodeState = function () {
                var t = e.props.expanded;
                return e.isLeaf() ? null : t ? pt : ht;
              }),
              (e.hasChildren = function () {
                var t = e.props.eventKey,
                  r = e.props.context.keyEntities,
                  a = r[t] || {},
                  s = a.children;
                return !!(s || []).length;
              }),
              (e.isLeaf = function () {
                var t = e.props,
                  r = t.isLeaf,
                  a = t.loaded,
                  s = e.props.context.loadData,
                  c = e.hasChildren();
                return r === !1 ? !1 : r || (!s && !c) || (s && a && !c);
              }),
              (e.isDisabled = function () {
                var t = e.props.disabled,
                  r = e.props.context.disabled;
                return !!(r || t);
              }),
              (e.isCheckable = function () {
                var t = e.props.checkable,
                  r = e.props.context.checkable;
                return !r || t === !1 ? !1 : r;
              }),
              (e.syncLoadData = function (t) {
                var r = t.expanded,
                  a = t.loading,
                  s = t.loaded,
                  c = e.props.context,
                  f = c.loadData,
                  v = c.onNodeLoad;
                a || (f && r && !e.isLeaf() && !e.hasChildren() && !s && v(G(e.props)));
              }),
              (e.isDraggable = function () {
                var t = e.props,
                  r = t.data,
                  a = t.context.draggable;
                return !!(a && (!a.nodeDraggable || a.nodeDraggable(r)));
              }),
              (e.renderDragHandler = function () {
                var t = e.props.context,
                  r = t.draggable,
                  a = t.prefixCls;
                return r != null && r.icon
                  ? g.createElement('span', { className: ''.concat(a, '-draggable-icon') }, r.icon)
                  : null;
              }),
              (e.renderSwitcherIconDom = function (t) {
                var r = e.props.switcherIcon,
                  a = e.props.context.switcherIcon,
                  s = r || a;
                return typeof s == 'function'
                  ? s((0, I.Z)((0, I.Z)({}, e.props), {}, { isLeaf: t }))
                  : s;
              }),
              (e.renderSwitcher = function () {
                var t = e.props.expanded,
                  r = e.props.context.prefixCls;
                if (e.isLeaf()) {
                  var a = e.renderSwitcherIconDom(!0);
                  return a !== !1
                    ? g.createElement(
                        'span',
                        {
                          className: H()(''.concat(r, '-switcher'), ''.concat(r, '-switcher-noop')),
                        },
                        a,
                      )
                    : null;
                }
                var s = H()(
                    ''.concat(r, '-switcher'),
                    ''.concat(r, '-switcher_').concat(t ? pt : ht),
                  ),
                  c = e.renderSwitcherIconDom(!1);
                return c !== !1
                  ? g.createElement('span', { onClick: e.onExpand, className: s }, c)
                  : null;
              }),
              (e.renderCheckbox = function () {
                var t = e.props,
                  r = t.checked,
                  a = t.halfChecked,
                  s = t.disableCheckbox,
                  c = e.props.context.prefixCls,
                  f = e.isDisabled(),
                  v = e.isCheckable();
                if (!v) return null;
                var p = typeof v != 'boolean' ? v : null;
                return g.createElement(
                  'span',
                  {
                    className: H()(
                      ''.concat(c, '-checkbox'),
                      r && ''.concat(c, '-checkbox-checked'),
                      !r && a && ''.concat(c, '-checkbox-indeterminate'),
                      (f || s) && ''.concat(c, '-checkbox-disabled'),
                    ),
                    onClick: e.onCheck,
                  },
                  p,
                );
              }),
              (e.renderIcon = function () {
                var t = e.props.loading,
                  r = e.props.context.prefixCls;
                return g.createElement('span', {
                  className: H()(
                    ''.concat(r, '-iconEle'),
                    ''.concat(r, '-icon__').concat(e.getNodeState() || 'docu'),
                    t && ''.concat(r, '-icon_loading'),
                  ),
                });
              }),
              (e.renderSelector = function () {
                var t = e.state.dragNodeHighlight,
                  r = e.props,
                  a = r.title,
                  s = a === void 0 ? at : a,
                  c = r.selected,
                  f = r.icon,
                  v = r.loading,
                  p = r.data,
                  y = e.props.context,
                  b = y.prefixCls,
                  h = y.showIcon,
                  E = y.icon,
                  k = y.loadData,
                  N = y.titleRender,
                  x = e.isDisabled(),
                  D = ''.concat(b, '-node-content-wrapper'),
                  O;
                if (h) {
                  var R = f || E;
                  O = R
                    ? g.createElement(
                        'span',
                        {
                          className: H()(
                            ''.concat(b, '-iconEle'),
                            ''.concat(b, '-icon__customize'),
                          ),
                        },
                        typeof R == 'function' ? R(e.props) : R,
                      )
                    : e.renderIcon();
                } else k && v && (O = e.renderIcon());
                var C;
                typeof s == 'function' ? (C = s(p)) : N ? (C = N(p)) : (C = s);
                var $ = g.createElement('span', { className: ''.concat(b, '-title') }, C);
                return g.createElement(
                  'span',
                  {
                    ref: e.setSelectHandle,
                    title: typeof s == 'string' ? s : '',
                    className: H()(
                      ''.concat(D),
                      ''.concat(D, '-').concat(e.getNodeState() || 'normal'),
                      !x && (c || t) && ''.concat(b, '-node-selected'),
                    ),
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    onContextMenu: e.onContextMenu,
                    onClick: e.onSelectorClick,
                    onDoubleClick: e.onSelectorDoubleClick,
                  },
                  O,
                  $,
                  e.renderDropIndicator(),
                );
              }),
              (e.renderDropIndicator = function () {
                var t = e.props,
                  r = t.disabled,
                  a = t.eventKey,
                  s = e.props.context,
                  c = s.draggable,
                  f = s.dropLevelOffset,
                  v = s.dropPosition,
                  p = s.prefixCls,
                  y = s.indent,
                  b = s.dropIndicatorRender,
                  h = s.dragOverNodeKey,
                  E = s.direction,
                  k = !!c,
                  N = !r && k && h === a,
                  x = y != null ? y : e.cacheIndent;
                return (
                  (e.cacheIndent = y),
                  N
                    ? b({
                        dropPosition: v,
                        dropLevelOffset: f,
                        indent: x,
                        prefixCls: p,
                        direction: E,
                      })
                    : null
                );
              }),
              e
            );
          }
          return (
            (0, le.Z)(l, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.syncLoadData(this.props);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.syncLoadData(this.props);
                },
              },
              {
                key: 'isSelectable',
                value: function () {
                  var i = this.props.selectable,
                    d = this.props.context.selectable;
                  return typeof i == 'boolean' ? i : d;
                },
              },
              {
                key: 'render',
                value: function () {
                  var i,
                    d = this.props,
                    u = d.eventKey,
                    t = d.className,
                    r = d.style,
                    a = d.dragOver,
                    s = d.dragOverGapTop,
                    c = d.dragOverGapBottom,
                    f = d.isLeaf,
                    v = d.isStart,
                    p = d.isEnd,
                    y = d.expanded,
                    b = d.selected,
                    h = d.checked,
                    E = d.halfChecked,
                    k = d.loading,
                    N = d.domRef,
                    x = d.active,
                    D = d.data,
                    O = d.onMouseMove,
                    R = d.selectable,
                    C = (0, W.Z)(d, vt),
                    $ = this.props.context,
                    L = $.prefixCls,
                    P = $.filterTreeNode,
                    F = $.keyEntities,
                    Y = $.dropContainerKey,
                    oe = $.dropTargetKey,
                    B = $.draggingNodeKey,
                    U = this.isDisabled(),
                    fe = V(C, { aria: !0, data: !0 }),
                    Oe = F[u] || {},
                    be = Oe.level,
                    Ve = p[p.length - 1],
                    de = this.isDraggable(),
                    xe = !U && de,
                    he = B === u,
                    $e = R !== void 0 ? { 'aria-selected': !!R } : void 0;
                  return g.createElement(
                    'div',
                    (0, ee.Z)(
                      {
                        ref: N,
                        className: H()(
                          t,
                          ''.concat(L, '-treenode'),
                          ((i = {}),
                          (0, Z.Z)(i, ''.concat(L, '-treenode-disabled'), U),
                          (0, Z.Z)(
                            i,
                            ''.concat(L, '-treenode-switcher-').concat(y ? 'open' : 'close'),
                            !f,
                          ),
                          (0, Z.Z)(i, ''.concat(L, '-treenode-checkbox-checked'), h),
                          (0, Z.Z)(i, ''.concat(L, '-treenode-checkbox-indeterminate'), E),
                          (0, Z.Z)(i, ''.concat(L, '-treenode-selected'), b),
                          (0, Z.Z)(i, ''.concat(L, '-treenode-loading'), k),
                          (0, Z.Z)(i, ''.concat(L, '-treenode-active'), x),
                          (0, Z.Z)(i, ''.concat(L, '-treenode-leaf-last'), Ve),
                          (0, Z.Z)(i, ''.concat(L, '-treenode-draggable'), de),
                          (0, Z.Z)(i, 'dragging', he),
                          (0, Z.Z)(i, 'drop-target', oe === u),
                          (0, Z.Z)(i, 'drop-container', Y === u),
                          (0, Z.Z)(i, 'drag-over', !U && a),
                          (0, Z.Z)(i, 'drag-over-gap-top', !U && s),
                          (0, Z.Z)(i, 'drag-over-gap-bottom', !U && c),
                          (0, Z.Z)(i, 'filter-node', P && P(G(this.props))),
                          i),
                        ),
                        style: r,
                        draggable: xe,
                        'aria-grabbed': he,
                        onDragStart: xe ? this.onDragStart : void 0,
                        onDragEnter: de ? this.onDragEnter : void 0,
                        onDragOver: de ? this.onDragOver : void 0,
                        onDragLeave: de ? this.onDragLeave : void 0,
                        onDrop: de ? this.onDrop : void 0,
                        onDragEnd: de ? this.onDragEnd : void 0,
                        onMouseMove: O,
                      },
                      $e,
                      fe,
                    ),
                    g.createElement(ae, { prefixCls: L, level: be, isStart: v, isEnd: p }),
                    this.renderDragHandler(),
                    this.renderSwitcher(),
                    this.renderCheckbox(),
                    this.renderSelector(),
                  );
                },
              },
            ]),
            l
          );
        })(g.Component),
        pe = function (o) {
          return g.createElement(T.Consumer, null, function (l) {
            return g.createElement(q, (0, ee.Z)({}, o, { context: l }));
          });
        };
      (pe.displayName = 'TreeNode'), (pe.isTreeNode = 1);
      var Te = pe,
        gt = null;
      function Re(n, o) {
        if (!n) return [];
        var l = n.slice(),
          e = l.indexOf(o);
        return e >= 0 && l.splice(e, 1), l;
      }
      function _e(n, o) {
        var l = (n || []).slice();
        return l.indexOf(o) === -1 && l.push(o), l;
      }
      function xt(n) {
        return n.split('-');
      }
      function nn(n, o) {
        var l = [],
          e = o[n];
        function i() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          d.forEach(function (u) {
            var t = u.key,
              r = u.children;
            l.push(t), i(r);
          });
        }
        return i(e.children), l;
      }
      function rn(n) {
        if (n.parent) {
          var o = xt(n.pos);
          return Number(o[o.length - 1]) === n.parent.children.length - 1;
        }
        return !1;
      }
      function an(n) {
        var o = xt(n.pos);
        return Number(o[o.length - 1]) === 0;
      }
      function Pt(n, o, l, e, i, d, u, t, r, a) {
        var s,
          c = n.clientX,
          f = n.clientY,
          v = n.target.getBoundingClientRect(),
          p = v.top,
          y = v.height,
          b = (a === 'rtl' ? -1 : 1) * (((i == null ? void 0 : i.x) || 0) - c),
          h = (b - 12) / e,
          E = t[l.props.eventKey];
        if (f < p + y / 2) {
          var k = u.findIndex(function (oe) {
              return oe.key === E.key;
            }),
            N = k <= 0 ? 0 : k - 1,
            x = u[N].key;
          E = t[x];
        }
        var D = E.key,
          O = E,
          R = E.key,
          C = 0,
          $ = 0;
        if (!r.includes(D)) for (var L = 0; L < h && rn(E); L += 1) (E = E.parent), ($ += 1);
        var P = o.props.data,
          F = E.node,
          Y = !0;
        return (
          an(E) &&
          E.level === 0 &&
          f < p + y / 2 &&
          d({ dragNode: P, dropNode: F, dropPosition: -1 }) &&
          E.key === l.props.eventKey
            ? (C = -1)
            : (O.children || []).length && r.includes(R)
            ? d({ dragNode: P, dropNode: F, dropPosition: 0 })
              ? (C = 0)
              : (Y = !1)
            : $ === 0
            ? h > -1.5
              ? d({ dragNode: P, dropNode: F, dropPosition: 1 })
                ? (C = 1)
                : (Y = !1)
              : d({ dragNode: P, dropNode: F, dropPosition: 0 })
              ? (C = 0)
              : d({ dragNode: P, dropNode: F, dropPosition: 1 })
              ? (C = 1)
              : (Y = !1)
            : d({ dragNode: P, dropNode: F, dropPosition: 1 })
            ? (C = 1)
            : (Y = !1),
          {
            dropPosition: C,
            dropLevelOffset: $,
            dropTargetKey: E.key,
            dropTargetPos: E.pos,
            dragOverNodeKey: R,
            dropContainerKey:
              C === 0 ? null : ((s = E.parent) === null || s === void 0 ? void 0 : s.key) || null,
            dropAllowed: Y,
          }
        );
      }
      function wt(n, o) {
        if (n) {
          var l = o.multiple;
          return l ? n.slice() : n.length ? [n[0]] : n;
        }
      }
      var on = function (o) {
        return o;
      };
      function ln(n, o) {
        if (!n) return [];
        var l = o || {},
          e = l.processProps,
          i = e === void 0 ? on : e,
          d = Array.isArray(n) ? n : [n];
        return d.map(function (u) {
          var t = u.children,
            r = _objectWithoutProperties(u, gt),
            a = ln(t, o);
          return React.createElement(TreeNode, _extends({ key: r.key }, i(r)), a);
        });
      }
      function Nt(n) {
        if (!n) return null;
        var o;
        if (Array.isArray(n)) o = { checkedKeys: n, halfCheckedKeys: void 0 };
        else if ((0, ye.Z)(n) === 'object')
          o = { checkedKeys: n.checked || void 0, halfCheckedKeys: n.halfChecked || void 0 };
        else return (0, ve.ZP)(!1, '`checkedKeys` is not an array or an object'), null;
        return o;
      }
      function Lt(n, o) {
        var l = new Set();
        function e(i) {
          if (!l.has(i)) {
            var d = o[i];
            if (d) {
              l.add(i);
              var u = d.parent,
                t = d.node;
              t.disabled || (u && e(u.key));
            }
          }
        }
        return (
          (n || []).forEach(function (i) {
            e(i);
          }),
          (0, re.Z)(l)
        );
      }
      function Zt(n) {
        if (n == null) throw new TypeError('Cannot destructure ' + n);
      }
      var ce = w(29922),
        ot = w(90429),
        sn = w(87040),
        It = g.forwardRef(function (n, o) {
          var l = n.height,
            e = n.offset,
            i = n.children,
            d = n.prefixCls,
            u = n.onInnerResize,
            t = n.innerProps,
            r = {},
            a = { display: 'flex', flexDirection: 'column' };
          return (
            e !== void 0 &&
              ((r = { height: l, position: 'relative', overflow: 'hidden' }),
              (a = (0, I.Z)(
                (0, I.Z)({}, a),
                {},
                {
                  transform: 'translateY('.concat(e, 'px)'),
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                },
              ))),
            g.createElement(
              'div',
              { style: r },
              g.createElement(
                sn.Z,
                {
                  onResize: function (c) {
                    var f = c.offsetHeight;
                    f && u && u();
                  },
                },
                g.createElement(
                  'div',
                  (0, ee.Z)(
                    {
                      style: a,
                      className: H()((0, Z.Z)({}, ''.concat(d, '-holder-inner'), d)),
                      ref: o,
                    },
                    t,
                  ),
                  i,
                ),
              ),
            )
          );
        });
      It.displayName = 'Filler';
      var dn = It,
        Me = w(18383),
        cn = 20;
      function At(n) {
        return 'touches' in n ? n.touches[0].pageY : n.pageY;
      }
      var un = (function (n) {
        (0, Ce.Z)(l, n);
        var o = (0, Se.Z)(l);
        function l() {
          var e;
          (0, ie.Z)(this, l);
          for (var i = arguments.length, d = new Array(i), u = 0; u < i; u++) d[u] = arguments[u];
          return (
            (e = o.call.apply(o, [this].concat(d))),
            (e.moveRaf = null),
            (e.scrollbarRef = g.createRef()),
            (e.thumbRef = g.createRef()),
            (e.visibleTimeout = null),
            (e.state = { dragging: !1, pageY: null, startTop: null, visible: !1 }),
            (e.delayHidden = function () {
              clearTimeout(e.visibleTimeout),
                e.setState({ visible: !0 }),
                (e.visibleTimeout = setTimeout(function () {
                  e.setState({ visible: !1 });
                }, 2e3));
            }),
            (e.onScrollbarTouchStart = function (t) {
              t.preventDefault();
            }),
            (e.onContainerMouseDown = function (t) {
              t.stopPropagation(), t.preventDefault();
            }),
            (e.patchEvents = function () {
              window.addEventListener('mousemove', e.onMouseMove),
                window.addEventListener('mouseup', e.onMouseUp),
                e.thumbRef.current.addEventListener('touchmove', e.onMouseMove),
                e.thumbRef.current.addEventListener('touchend', e.onMouseUp);
            }),
            (e.removeEvents = function () {
              window.removeEventListener('mousemove', e.onMouseMove),
                window.removeEventListener('mouseup', e.onMouseUp),
                e.thumbRef.current &&
                  (e.thumbRef.current.removeEventListener('touchmove', e.onMouseMove),
                  e.thumbRef.current.removeEventListener('touchend', e.onMouseUp)),
                Me.Z.cancel(e.moveRaf);
            }),
            (e.onMouseDown = function (t) {
              var r = e.props.onStartMove;
              e.setState({ dragging: !0, pageY: At(t), startTop: e.getTop() }),
                r(),
                e.patchEvents(),
                t.stopPropagation(),
                t.preventDefault();
            }),
            (e.onMouseMove = function (t) {
              var r = e.state,
                a = r.dragging,
                s = r.pageY,
                c = r.startTop,
                f = e.props.onScroll;
              if ((Me.Z.cancel(e.moveRaf), a)) {
                var v = At(t) - s,
                  p = c + v,
                  y = e.getEnableScrollRange(),
                  b = e.getEnableHeightRange(),
                  h = b ? p / b : 0,
                  E = Math.ceil(h * y);
                e.moveRaf = (0, Me.Z)(function () {
                  f(E);
                });
              }
            }),
            (e.onMouseUp = function () {
              var t = e.props.onStopMove;
              e.setState({ dragging: !1 }), t(), e.removeEvents();
            }),
            (e.getSpinHeight = function () {
              var t = e.props,
                r = t.height,
                a = t.count,
                s = (r / a) * 10;
              return (s = Math.max(s, cn)), (s = Math.min(s, r / 2)), Math.floor(s);
            }),
            (e.getEnableScrollRange = function () {
              var t = e.props,
                r = t.scrollHeight,
                a = t.height;
              return r - a || 0;
            }),
            (e.getEnableHeightRange = function () {
              var t = e.props.height,
                r = e.getSpinHeight();
              return t - r || 0;
            }),
            (e.getTop = function () {
              var t = e.props.scrollTop,
                r = e.getEnableScrollRange(),
                a = e.getEnableHeightRange();
              if (t === 0 || r === 0) return 0;
              var s = t / r;
              return s * a;
            }),
            (e.showScroll = function () {
              var t = e.props,
                r = t.height,
                a = t.scrollHeight;
              return a > r;
            }),
            e
          );
        }
        return (
          (0, le.Z)(l, [
            {
              key: 'componentDidMount',
              value: function () {
                this.scrollbarRef.current.addEventListener(
                  'touchstart',
                  this.onScrollbarTouchStart,
                ),
                  this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (i) {
                i.scrollTop !== this.props.scrollTop && this.delayHidden();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                var i, d;
                this.removeEvents(),
                  (i = this.scrollbarRef.current) === null ||
                    i === void 0 ||
                    i.removeEventListener('touchstart', this.onScrollbarTouchStart),
                  (d = this.thumbRef.current) === null ||
                    d === void 0 ||
                    d.removeEventListener('touchstart', this.onMouseDown),
                  clearTimeout(this.visibleTimeout);
              },
            },
            {
              key: 'render',
              value: function () {
                var i = this.state,
                  d = i.dragging,
                  u = i.visible,
                  t = this.props,
                  r = t.prefixCls,
                  a = t.direction,
                  s = this.getSpinHeight(),
                  c = this.getTop(),
                  f = this.showScroll(),
                  v = f && u,
                  p = a === 'rtl' ? { left: 0 } : { right: 0 };
                return g.createElement(
                  'div',
                  {
                    ref: this.scrollbarRef,
                    className: H()(
                      ''.concat(r, '-scrollbar'),
                      (0, Z.Z)({}, ''.concat(r, '-scrollbar-show'), f),
                    ),
                    style: (0, I.Z)(
                      (0, I.Z)({ width: 8, top: 0, bottom: 0 }, p),
                      {},
                      { position: 'absolute', display: v ? null : 'none' },
                    ),
                    onMouseDown: this.onContainerMouseDown,
                    onMouseMove: this.delayHidden,
                  },
                  g.createElement('div', {
                    ref: this.thumbRef,
                    className: H()(
                      ''.concat(r, '-scrollbar-thumb'),
                      (0, Z.Z)({}, ''.concat(r, '-scrollbar-thumb-moving'), d),
                    ),
                    style: {
                      width: '100%',
                      height: s,
                      top: c,
                      left: 0,
                      position: 'absolute',
                      background: 'rgba(0, 0, 0, 0.5)',
                      borderRadius: 99,
                      cursor: 'pointer',
                      userSelect: 'none',
                    },
                    onMouseDown: this.onMouseDown,
                  }),
                );
              },
            },
          ]),
          l
        );
      })(g.Component);
      function fn(n) {
        var o = n.children,
          l = n.setRef,
          e = g.useCallback(function (i) {
            l(i);
          }, []);
        return g.cloneElement(o, { ref: e });
      }
      function vn(n, o, l, e, i, d) {
        var u = d.getKey;
        return n.slice(o, l + 1).map(function (t, r) {
          var a = o + r,
            s = i(t, a, {}),
            c = u(t);
          return g.createElement(
            fn,
            {
              key: c,
              setRef: function (v) {
                return e(t, v);
              },
            },
            s,
          );
        });
      }
      var pn = w(69699),
        hn = (function () {
          function n() {
            (0, ie.Z)(this, n), (this.maps = void 0), (this.maps = Object.create(null));
          }
          return (
            (0, le.Z)(n, [
              {
                key: 'set',
                value: function (l, e) {
                  this.maps[l] = e;
                },
              },
              {
                key: 'get',
                value: function (l) {
                  return this.maps[l];
                },
              },
            ]),
            n
          );
        })(),
        gn = hn;
      function yn(n, o, l) {
        var e = g.useState(0),
          i = (0, ce.Z)(e, 2),
          d = i[0],
          u = i[1],
          t = (0, g.useRef)(new Map()),
          r = (0, g.useRef)(new gn()),
          a = (0, g.useRef)();
        function s() {
          Me.Z.cancel(a.current);
        }
        function c() {
          s(),
            (a.current = (0, Me.Z)(function () {
              t.current.forEach(function (v, p) {
                if (v && v.offsetParent) {
                  var y = (0, pn.Z)(v),
                    b = y.offsetHeight;
                  r.current.get(p) !== b && r.current.set(p, y.offsetHeight);
                }
              }),
                u(function (v) {
                  return v + 1;
                });
            }));
        }
        function f(v, p) {
          var y = n(v),
            b = t.current.get(y);
          p ? (t.current.set(y, p), c()) : t.current.delete(y),
            !b != !p && (p ? o == null || o(v) : l == null || l(v));
        }
        return (
          (0, g.useEffect)(function () {
            return s;
          }, []),
          [f, c, r.current, d]
        );
      }
      function mn(n, o, l, e, i, d, u, t) {
        var r = g.useRef();
        return function (a) {
          if (a == null) {
            t();
            return;
          }
          if ((Me.Z.cancel(r.current), typeof a == 'number')) u(a);
          else if (a && (0, ye.Z)(a) === 'object') {
            var s,
              c = a.align;
            'index' in a
              ? (s = a.index)
              : (s = o.findIndex(function (y) {
                  return i(y) === a.key;
                }));
            var f = a.offset,
              v = f === void 0 ? 0 : f,
              p = function y(b, h) {
                if (!(b < 0 || !n.current)) {
                  var E = n.current.clientHeight,
                    k = !1,
                    N = h;
                  if (E) {
                    for (
                      var x = h || c, D = 0, O = 0, R = 0, C = Math.min(o.length, s), $ = 0;
                      $ <= C;
                      $ += 1
                    ) {
                      var L = i(o[$]);
                      O = D;
                      var P = l.get(L);
                      (R = O + (P === void 0 ? e : P)),
                        (D = R),
                        $ === s && P === void 0 && (k = !0);
                    }
                    var F = null;
                    switch (x) {
                      case 'top':
                        F = O - v;
                        break;
                      case 'bottom':
                        F = R - E + v;
                        break;
                      default: {
                        var Y = n.current.scrollTop,
                          oe = Y + E;
                        O < Y ? (N = 'top') : R > oe && (N = 'bottom');
                      }
                    }
                    F !== null && F !== n.current.scrollTop && u(F);
                  }
                  r.current = (0, Me.Z)(function () {
                    k && d(), y(b - 1, N);
                  }, 2);
                }
              };
            p(3);
          }
        };
      }
      function ur(n, o, l, e) {
        var i = l - n,
          d = o - l,
          u = Math.min(i, d) * 2;
        if (e <= u) {
          var t = Math.floor(e / 2);
          return e % 2 ? l + t + 1 : l - t;
        }
        return i > d ? l - (e - d) : l + (e - i);
      }
      function bn(n, o, l) {
        var e = n.length,
          i = o.length,
          d,
          u;
        if (e === 0 && i === 0) return null;
        e < i ? ((d = n), (u = o)) : ((d = o), (u = n));
        var t = { __EMPTY_ITEM__: !0 };
        function r(p) {
          return p !== void 0 ? l(p) : t;
        }
        for (var a = null, s = Math.abs(e - i) !== 1, c = 0; c < u.length; c += 1) {
          var f = r(d[c]),
            v = r(u[c]);
          if (f !== v) {
            (a = c), (s = s || f !== r(u[c + 1]));
            break;
          }
        }
        return a === null ? null : { index: a, multiple: s };
      }
      function En(n, o, l) {
        var e = g.useState(n),
          i = (0, ce.Z)(e, 2),
          d = i[0],
          u = i[1],
          t = g.useState(null),
          r = (0, ce.Z)(t, 2),
          a = r[0],
          s = r[1];
        return (
          g.useEffect(
            function () {
              var c = bn(d || [], n || [], o);
              (c == null ? void 0 : c.index) !== void 0 && (l == null || l(c.index), s(n[c.index])),
                u(n);
            },
            [n],
          ),
          [a]
        );
      }
      var Kn =
          (typeof navigator == 'undefined' ? 'undefined' : (0, ye.Z)(navigator)) === 'object' &&
          /Firefox/i.test(navigator.userAgent),
        Sn = Kn,
        _t = function (n, o) {
          var l = (0, g.useRef)(!1),
            e = (0, g.useRef)(null);
          function i() {
            clearTimeout(e.current),
              (l.current = !0),
              (e.current = setTimeout(function () {
                l.current = !1;
              }, 50));
          }
          var d = (0, g.useRef)({ top: n, bottom: o });
          return (
            (d.current.top = n),
            (d.current.bottom = o),
            function (u) {
              var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                r = (u < 0 && d.current.top) || (u > 0 && d.current.bottom);
              return (
                t && r ? (clearTimeout(e.current), (l.current = !1)) : (!r || l.current) && i(),
                !l.current && r
              );
            }
          );
        };
      function kn(n, o, l, e) {
        var i = (0, g.useRef)(0),
          d = (0, g.useRef)(null),
          u = (0, g.useRef)(null),
          t = (0, g.useRef)(!1),
          r = _t(o, l);
        function a(c) {
          if (n) {
            Me.Z.cancel(d.current);
            var f = c.deltaY;
            (i.current += f),
              (u.current = f),
              !r(f) &&
                (Sn || c.preventDefault(),
                (d.current = (0, Me.Z)(function () {
                  var v = t.current ? 10 : 1;
                  e(i.current * v), (i.current = 0);
                })));
          }
        }
        function s(c) {
          n && (t.current = c.detail === u.current);
        }
        return [a, s];
      }
      var xn = 14 / 15;
      function Nn(n, o, l) {
        var e = (0, g.useRef)(!1),
          i = (0, g.useRef)(0),
          d = (0, g.useRef)(null),
          u = (0, g.useRef)(null),
          t,
          r = function (f) {
            if (e.current) {
              var v = Math.ceil(f.touches[0].pageY),
                p = i.current - v;
              (i.current = v),
                l(p) && f.preventDefault(),
                clearInterval(u.current),
                (u.current = setInterval(function () {
                  (p *= xn), (!l(p, !0) || Math.abs(p) <= 0.1) && clearInterval(u.current);
                }, 16));
            }
          },
          a = function () {
            (e.current = !1), t();
          },
          s = function (f) {
            t(),
              f.touches.length === 1 &&
                !e.current &&
                ((e.current = !0),
                (i.current = Math.ceil(f.touches[0].pageY)),
                (d.current = f.target),
                d.current.addEventListener('touchmove', r),
                d.current.addEventListener('touchend', a));
          };
        (t = function () {
          d.current &&
            (d.current.removeEventListener('touchmove', r),
            d.current.removeEventListener('touchend', a));
        }),
          (0, ot.Z)(
            function () {
              return (
                n && o.current.addEventListener('touchstart', s),
                function () {
                  var c;
                  (c = o.current) === null ||
                    c === void 0 ||
                    c.removeEventListener('touchstart', s),
                    t(),
                    clearInterval(u.current);
                }
              );
            },
            [n],
          );
      }
      var Cn = [
          'prefixCls',
          'className',
          'height',
          'itemHeight',
          'fullHeight',
          'style',
          'data',
          'children',
          'itemKey',
          'virtual',
          'direction',
          'component',
          'onScroll',
          'onVisibleChange',
          'innerProps',
        ],
        Dn = [],
        Tn = { overflowY: 'auto', overflowAnchor: 'none' };
      function Rn(n, o) {
        var l = n.prefixCls,
          e = l === void 0 ? 'rc-virtual-list' : l,
          i = n.className,
          d = n.height,
          u = n.itemHeight,
          t = n.fullHeight,
          r = t === void 0 ? !0 : t,
          a = n.style,
          s = n.data,
          c = n.children,
          f = n.itemKey,
          v = n.virtual,
          p = n.direction,
          y = n.component,
          b = y === void 0 ? 'div' : y,
          h = n.onScroll,
          E = n.onVisibleChange,
          k = n.innerProps,
          N = (0, W.Z)(n, Cn),
          x = !!(v !== !1 && d && u),
          D = x && s && u * s.length > d,
          O = (0, g.useState)(0),
          R = (0, ce.Z)(O, 2),
          C = R[0],
          $ = R[1],
          L = (0, g.useState)(!1),
          P = (0, ce.Z)(L, 2),
          F = P[0],
          Y = P[1],
          oe = H()(e, (0, Z.Z)({}, ''.concat(e, '-rtl'), p === 'rtl'), i),
          B = s || Dn,
          U = (0, g.useRef)(),
          fe = (0, g.useRef)(),
          Oe = (0, g.useRef)(),
          be = g.useCallback(
            function (_) {
              return typeof f == 'function' ? f(_) : _ == null ? void 0 : _[f];
            },
            [f],
          ),
          Ve = { getKey: be };
        function de(_) {
          $(function (Q) {
            var ge;
            typeof _ == 'function' ? (ge = _(Q)) : (ge = _);
            var tt = Et(ge);
            return (U.current.scrollTop = tt), tt;
          });
        }
        var xe = (0, g.useRef)({ start: 0, end: B.length }),
          he = (0, g.useRef)(),
          $e = En(B, be),
          it = (0, ce.Z)($e, 1),
          Je = it[0];
        he.current = Je;
        var lt = yn(be, null, null),
          Ee = (0, ce.Z)(lt, 4),
          st = Ee[0],
          Ne = Ee[1],
          mt = Ee[2],
          dt = Ee[3],
          Qe = g.useMemo(
            function () {
              if (!x) return { scrollHeight: void 0, start: 0, end: B.length - 1, offset: void 0 };
              if (!D) {
                var _;
                return {
                  scrollHeight:
                    ((_ = fe.current) === null || _ === void 0 ? void 0 : _.offsetHeight) || 0,
                  start: 0,
                  end: B.length - 1,
                  offset: void 0,
                };
              }
              for (var Q = 0, ge, tt, Ue, sr = B.length, ut = 0; ut < sr; ut += 1) {
                var dr = B[ut],
                  cr = be(dr),
                  tn = mt.get(cr),
                  Ot = Q + (tn === void 0 ? u : tn);
                Ot >= C && ge === void 0 && ((ge = ut), (tt = Q)),
                  Ot > C + d && Ue === void 0 && (Ue = ut),
                  (Q = Ot);
              }
              return (
                ge === void 0 && ((ge = 0), (tt = 0), (Ue = Math.ceil(d / u))),
                Ue === void 0 && (Ue = B.length - 1),
                (Ue = Math.min(Ue + 1, B.length)),
                { scrollHeight: Q, start: ge, end: Ue, offset: tt }
              );
            },
            [D, x, C, B, dt, d],
          ),
          qe = Qe.scrollHeight,
          et = Qe.start,
          He = Qe.end,
          bt = Qe.offset;
        (xe.current.start = et), (xe.current.end = He);
        var Ye = qe - d,
          ct = (0, g.useRef)(Ye);
        ct.current = Ye;
        function Et(_) {
          var Q = _;
          return Number.isNaN(ct.current) || (Q = Math.min(Q, ct.current)), (Q = Math.max(Q, 0)), Q;
        }
        var z = C <= 0,
          Ke = C >= Ye,
          Pe = _t(z, Ke);
        function je(_) {
          var Q = _;
          de(Q);
        }
        function we(_) {
          var Q = _.currentTarget.scrollTop;
          Q !== C && de(Q), h == null || h(_);
        }
        var Le = kn(x, z, Ke, function (_) {
            de(function (Q) {
              var ge = Q + _;
              return ge;
            });
          }),
          ze = (0, ce.Z)(Le, 2),
          Ze = ze[0],
          Fe = ze[1];
        Nn(x, U, function (_, Q) {
          return Pe(_, Q) ? !1 : (Ze({ preventDefault: function () {}, deltaY: _ }), !0);
        }),
          (0, ot.Z)(
            function () {
              function _(Q) {
                x && Q.preventDefault();
              }
              return (
                U.current.addEventListener('wheel', Ze),
                U.current.addEventListener('DOMMouseScroll', Fe),
                U.current.addEventListener('MozMousePixelScroll', _),
                function () {
                  U.current &&
                    (U.current.removeEventListener('wheel', Ze),
                    U.current.removeEventListener('DOMMouseScroll', Fe),
                    U.current.removeEventListener('MozMousePixelScroll', _));
                }
              );
            },
            [x],
          );
        var en = mn(U, B, mt, u, be, Ne, de, function () {
          var _;
          (_ = Oe.current) === null || _ === void 0 || _.delayHidden();
        });
        g.useImperativeHandle(o, function () {
          return { scrollTo: en };
        }),
          (0, ot.Z)(
            function () {
              if (E) {
                var _ = B.slice(et, He + 1);
                E(_, B);
              }
            },
            [et, He, B],
          );
        var lr = vn(B, et, He, st, c, Ve),
          Kt = null;
        return (
          d &&
            ((Kt = (0, I.Z)((0, Z.Z)({}, r ? 'height' : 'maxHeight', d), Tn)),
            x && ((Kt.overflowY = 'hidden'), F && (Kt.pointerEvents = 'none'))),
          g.createElement(
            'div',
            (0, ee.Z)(
              { style: (0, I.Z)((0, I.Z)({}, a), {}, { position: 'relative' }), className: oe },
              N,
            ),
            g.createElement(
              b,
              { className: ''.concat(e, '-holder'), style: Kt, ref: U, onScroll: we },
              g.createElement(
                dn,
                { prefixCls: e, height: qe, offset: bt, onInnerResize: Ne, ref: fe, innerProps: k },
                lr,
              ),
            ),
            x &&
              g.createElement(un, {
                ref: Oe,
                prefixCls: e,
                scrollTop: C,
                height: d,
                scrollHeight: qe,
                count: B.length,
                direction: p,
                onScroll: je,
                onStartMove: function () {
                  Y(!0);
                },
                onStopMove: function () {
                  Y(!1);
                },
              }),
          )
        );
      }
      var $t = g.forwardRef(Rn);
      $t.displayName = 'List';
      var Mn = $t,
        On = Mn,
        Pn = w(39668);
      function wn(n, o) {
        var l = g.useState(!1),
          e = (0, ce.Z)(l, 2),
          i = e[0],
          d = e[1];
        g.useLayoutEffect(
          function () {
            if (i)
              return (
                n(),
                function () {
                  o();
                }
              );
          },
          [i],
        ),
          g.useLayoutEffect(function () {
            return (
              d(!0),
              function () {
                d(!1);
              }
            );
          }, []);
      }
      var Ln = [
          'className',
          'style',
          'motion',
          'motionNodes',
          'motionType',
          'onMotionStart',
          'onMotionEnd',
          'active',
          'treeNodeRequiredProps',
        ],
        Ht = function (o, l) {
          var e = o.className,
            i = o.style,
            d = o.motion,
            u = o.motionNodes,
            t = o.motionType,
            r = o.onMotionStart,
            a = o.onMotionEnd,
            s = o.active,
            c = o.treeNodeRequiredProps,
            f = (0, W.Z)(o, Ln),
            v = g.useState(!0),
            p = (0, ce.Z)(v, 2),
            y = p[0],
            b = p[1],
            h = g.useContext(T),
            E = h.prefixCls,
            k = u && t !== 'hide';
          (0, ot.Z)(
            function () {
              u && k !== y && b(k);
            },
            [u],
          );
          var N = function () {
              u && r();
            },
            x = g.useRef(!1),
            D = function () {
              u && !x.current && ((x.current = !0), a());
            };
          wn(N, D);
          var O = function (C) {
            k === C && D();
          };
          return u
            ? g.createElement(
                Pn.ZP,
                (0, ee.Z)({ ref: l, visible: y }, d, {
                  motionAppear: t === 'show',
                  onVisibleChanged: O,
                }),
                function (R, C) {
                  var $ = R.className,
                    L = R.style;
                  return g.createElement(
                    'div',
                    { ref: C, className: H()(''.concat(E, '-treenode-motion'), $), style: L },
                    u.map(function (P) {
                      var F = (0, ee.Z)({}, (Zt(P.data), P.data)),
                        Y = P.title,
                        oe = P.key,
                        B = P.isStart,
                        U = P.isEnd;
                      delete F.children;
                      var fe = Ae(oe, c);
                      return g.createElement(
                        Te,
                        (0, ee.Z)({}, F, fe, {
                          title: Y,
                          active: s,
                          data: P.data,
                          key: oe,
                          isStart: B,
                          isEnd: U,
                        }),
                      );
                    }),
                  );
                },
              )
            : g.createElement(
                Te,
                (0, ee.Z)({ domRef: l, className: e, style: i }, f, { active: s }),
              );
        };
      Ht.displayName = 'MotionTreeNode';
      var Zn = g.forwardRef(Ht),
        In = Zn;
      function An() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          l = n.length,
          e = o.length;
        if (Math.abs(l - e) !== 1) return { add: !1, key: null };
        function i(d, u) {
          var t = new Map();
          d.forEach(function (a) {
            t.set(a, !0);
          });
          var r = u.filter(function (a) {
            return !t.has(a);
          });
          return r.length === 1 ? r[0] : null;
        }
        return l < e ? { add: !0, key: i(n, o) } : { add: !1, key: i(o, n) };
      }
      function jt(n, o, l) {
        var e = n.findIndex(function (t) {
            return t.key === l;
          }),
          i = n[e + 1],
          d = o.findIndex(function (t) {
            return t.key === l;
          });
        if (i) {
          var u = o.findIndex(function (t) {
            return t.key === i.key;
          });
          return o.slice(d + 1, u);
        }
        return o.slice(d + 1);
      }
      var _n = [
          'prefixCls',
          'data',
          'selectable',
          'checkable',
          'expandedKeys',
          'selectedKeys',
          'checkedKeys',
          'loadedKeys',
          'loadingKeys',
          'halfCheckedKeys',
          'keyEntities',
          'disabled',
          'dragging',
          'dragOverNodeKey',
          'dropPosition',
          'motion',
          'height',
          'itemHeight',
          'virtual',
          'focusable',
          'activeItem',
          'focused',
          'tabIndex',
          'onKeyDown',
          'onFocus',
          'onBlur',
          'onActiveChange',
          'onListChangeStart',
          'onListChangeEnd',
        ],
        Ft = {
          width: 0,
          height: 0,
          display: 'flex',
          overflow: 'hidden',
          opacity: 0,
          border: 0,
          padding: 0,
          margin: 0,
        },
        $n = function () {},
        Ge = 'RC_TREE_MOTION_'.concat(Math.random()),
        Ct = { key: Ge },
        Ut = { key: Ge, level: 0, index: 0, pos: '0', node: Ct, nodes: [Ct] },
        Wt = {
          parent: null,
          children: [],
          pos: Ut.pos,
          data: Ct,
          title: null,
          key: Ge,
          isStart: [],
          isEnd: [],
        };
      function Bt(n, o, l, e) {
        return o === !1 || !l ? n : n.slice(0, Math.ceil(l / e) + 1);
      }
      function Gt(n) {
        var o = n.key,
          l = n.pos;
        return me(o, l);
      }
      function Hn(n) {
        for (var o = String(n.data.key), l = n; l.parent; )
          (l = l.parent), (o = ''.concat(l.data.key, ' > ').concat(o));
        return o;
      }
      var Vt = g.forwardRef(function (n, o) {
        var l = n.prefixCls,
          e = n.data,
          i = n.selectable,
          d = n.checkable,
          u = n.expandedKeys,
          t = n.selectedKeys,
          r = n.checkedKeys,
          a = n.loadedKeys,
          s = n.loadingKeys,
          c = n.halfCheckedKeys,
          f = n.keyEntities,
          v = n.disabled,
          p = n.dragging,
          y = n.dragOverNodeKey,
          b = n.dropPosition,
          h = n.motion,
          E = n.height,
          k = n.itemHeight,
          N = n.virtual,
          x = n.focusable,
          D = n.activeItem,
          O = n.focused,
          R = n.tabIndex,
          C = n.onKeyDown,
          $ = n.onFocus,
          L = n.onBlur,
          P = n.onActiveChange,
          F = n.onListChangeStart,
          Y = n.onListChangeEnd,
          oe = (0, W.Z)(n, _n),
          B = g.useRef(null),
          U = g.useRef(null);
        g.useImperativeHandle(o, function () {
          return {
            scrollTo: function (Ke) {
              B.current.scrollTo(Ke);
            },
            getIndentWidth: function () {
              return U.current.offsetWidth;
            },
          };
        });
        var fe = g.useState(u),
          Oe = (0, ce.Z)(fe, 2),
          be = Oe[0],
          Ve = Oe[1],
          de = g.useState(e),
          xe = (0, ce.Z)(de, 2),
          he = xe[0],
          $e = xe[1],
          it = g.useState(e),
          Je = (0, ce.Z)(it, 2),
          lt = Je[0],
          Ee = Je[1],
          st = g.useState([]),
          Ne = (0, ce.Z)(st, 2),
          mt = Ne[0],
          dt = Ne[1],
          Qe = g.useState(null),
          qe = (0, ce.Z)(Qe, 2),
          et = qe[0],
          He = qe[1],
          bt = g.useRef(e);
        bt.current = e;
        function Ye() {
          var z = bt.current;
          $e(z), Ee(z), dt([]), He(null), Y();
        }
        (0, ot.Z)(
          function () {
            Ve(u);
            var z = An(be, u);
            if (z.key !== null)
              if (z.add) {
                var Ke = he.findIndex(function (Ze) {
                    var Fe = Ze.key;
                    return Fe === z.key;
                  }),
                  Pe = Bt(jt(he, e, z.key), N, E, k),
                  je = he.slice();
                je.splice(Ke + 1, 0, Wt), Ee(je), dt(Pe), He('show');
              } else {
                var we = e.findIndex(function (Ze) {
                    var Fe = Ze.key;
                    return Fe === z.key;
                  }),
                  Le = Bt(jt(e, he, z.key), N, E, k),
                  ze = e.slice();
                ze.splice(we + 1, 0, Wt), Ee(ze), dt(Le), He('hide');
              }
            else he !== e && ($e(e), Ee(e));
          },
          [u, e],
        ),
          g.useEffect(
            function () {
              p || Ye();
            },
            [p],
          );
        var ct = h ? lt : e,
          Et = {
            expandedKeys: u,
            selectedKeys: t,
            loadedKeys: a,
            loadingKeys: s,
            checkedKeys: r,
            halfCheckedKeys: c,
            dragOverNodeKey: y,
            dropPosition: b,
            keyEntities: f,
          };
        return g.createElement(
          g.Fragment,
          null,
          O && D && g.createElement('span', { style: Ft, 'aria-live': 'assertive' }, Hn(D)),
          g.createElement(
            'div',
            null,
            g.createElement('input', {
              style: Ft,
              disabled: x === !1 || v,
              tabIndex: x !== !1 ? R : null,
              onKeyDown: C,
              onFocus: $,
              onBlur: L,
              value: '',
              onChange: $n,
              'aria-label': 'for screen reader',
            }),
          ),
          g.createElement(
            'div',
            {
              className: ''.concat(l, '-treenode'),
              'aria-hidden': !0,
              style: {
                position: 'absolute',
                pointerEvents: 'none',
                visibility: 'hidden',
                height: 0,
                overflow: 'hidden',
                border: 0,
                padding: 0,
              },
            },
            g.createElement(
              'div',
              { className: ''.concat(l, '-indent') },
              g.createElement('div', { ref: U, className: ''.concat(l, '-indent-unit') }),
            ),
          ),
          g.createElement(
            On,
            (0, ee.Z)({}, oe, {
              data: ct,
              itemKey: Gt,
              height: E,
              fullHeight: !1,
              virtual: N,
              itemHeight: k,
              prefixCls: ''.concat(l, '-list'),
              ref: B,
              onVisibleChange: function (Ke, Pe) {
                var je = new Set(Ke),
                  we = Pe.filter(function (Le) {
                    return !je.has(Le);
                  });
                we.some(function (Le) {
                  return Gt(Le) === Ge;
                }) && Ye();
              },
            }),
            function (z) {
              var Ke = z.pos,
                Pe = (0, ee.Z)({}, (Zt(z.data), z.data)),
                je = z.title,
                we = z.key,
                Le = z.isStart,
                ze = z.isEnd,
                Ze = me(we, Ke);
              delete Pe.key, delete Pe.children;
              var Fe = Ae(Ze, Et);
              return g.createElement(
                In,
                (0, ee.Z)({}, Pe, Fe, {
                  title: je,
                  active: !!D && we === D.key,
                  pos: Ke,
                  data: z.data,
                  isStart: Le,
                  isEnd: ze,
                  motion: h,
                  motionNodes: we === Ge ? mt : null,
                  motionType: et,
                  onMotionStart: F,
                  onMotionEnd: Ye,
                  treeNodeRequiredProps: Et,
                  onMouseMove: function () {
                    P(null);
                  },
                }),
              );
            },
          ),
        );
      });
      Vt.displayName = 'NodeList';
      var jn = Vt;
      function Yt(n, o) {
        var l = new Set();
        return (
          n.forEach(function (e) {
            o.has(e) || l.add(e);
          }),
          l
        );
      }
      function Fn(n) {
        var o = n || {},
          l = o.disabled,
          e = o.disableCheckbox,
          i = o.checkable;
        return !!(l || e) || i === !1;
      }
      function Un(n, o, l, e) {
        for (var i = new Set(n), d = new Set(), u = 0; u <= l; u += 1) {
          var t = o.get(u) || new Set();
          t.forEach(function (c) {
            var f = c.key,
              v = c.node,
              p = c.children,
              y = p === void 0 ? [] : p;
            i.has(f) &&
              !e(v) &&
              y
                .filter(function (b) {
                  return !e(b.node);
                })
                .forEach(function (b) {
                  i.add(b.key);
                });
          });
        }
        for (var r = new Set(), a = l; a >= 0; a -= 1) {
          var s = o.get(a) || new Set();
          s.forEach(function (c) {
            var f = c.parent,
              v = c.node;
            if (!(e(v) || !c.parent || r.has(c.parent.key))) {
              if (e(c.parent.node)) {
                r.add(f.key);
                return;
              }
              var p = !0,
                y = !1;
              (f.children || [])
                .filter(function (b) {
                  return !e(b.node);
                })
                .forEach(function (b) {
                  var h = b.key,
                    E = i.has(h);
                  p && !E && (p = !1), !y && (E || d.has(h)) && (y = !0);
                }),
                p && i.add(f.key),
                y && d.add(f.key),
                r.add(f.key);
            }
          });
        }
        return { checkedKeys: Array.from(i), halfCheckedKeys: Array.from(Yt(d, i)) };
      }
      function Wn(n, o, l, e, i) {
        for (var d = new Set(n), u = new Set(o), t = 0; t <= e; t += 1) {
          var r = l.get(t) || new Set();
          r.forEach(function (f) {
            var v = f.key,
              p = f.node,
              y = f.children,
              b = y === void 0 ? [] : y;
            !d.has(v) &&
              !u.has(v) &&
              !i(p) &&
              b
                .filter(function (h) {
                  return !i(h.node);
                })
                .forEach(function (h) {
                  d.delete(h.key);
                });
          });
        }
        u = new Set();
        for (var a = new Set(), s = e; s >= 0; s -= 1) {
          var c = l.get(s) || new Set();
          c.forEach(function (f) {
            var v = f.parent,
              p = f.node;
            if (!(i(p) || !f.parent || a.has(f.parent.key))) {
              if (i(f.parent.node)) {
                a.add(v.key);
                return;
              }
              var y = !0,
                b = !1;
              (v.children || [])
                .filter(function (h) {
                  return !i(h.node);
                })
                .forEach(function (h) {
                  var E = h.key,
                    k = d.has(E);
                  y && !k && (y = !1), !b && (k || u.has(E)) && (b = !0);
                }),
                y || d.delete(v.key),
                b && u.add(v.key),
                a.add(v.key);
            }
          });
        }
        return { checkedKeys: Array.from(d), halfCheckedKeys: Array.from(Yt(u, d)) };
      }
      function Dt(n, o, l, e) {
        var i = [],
          d;
        e ? (d = e) : (d = Fn);
        var u = new Set(
            n.filter(function (s) {
              var c = !!l[s];
              return c || i.push(s), c;
            }),
          ),
          t = new Map(),
          r = 0;
        Object.keys(l).forEach(function (s) {
          var c = l[s],
            f = c.level,
            v = t.get(f);
          v || ((v = new Set()), t.set(f, v)), v.add(c), (r = Math.max(r, f));
        }),
          (0, ve.ZP)(
            !i.length,
            'Tree missing follow keys: '.concat(
              i
                .slice(0, 100)
                .map(function (s) {
                  return "'".concat(s, "'");
                })
                .join(', '),
            ),
          );
        var a;
        return o === !0 ? (a = Un(u, t, r, d)) : (a = Wn(u, o.halfCheckedKeys, t, r, d)), a;
      }
      function Bn(n) {
        var o = n.dropPosition,
          l = n.dropLevelOffset,
          e = n.indent,
          i = {
            pointerEvents: 'none',
            position: 'absolute',
            right: 0,
            backgroundColor: 'red',
            height: 2,
          };
        switch (o) {
          case -1:
            (i.top = 0), (i.left = -l * e);
            break;
          case 1:
            (i.bottom = 0), (i.left = -l * e);
            break;
          case 0:
            (i.bottom = 0), (i.left = e);
            break;
        }
        return g.createElement('div', { style: i });
      }
      var Gn = 10,
        zt = (function (n) {
          (0, Ce.Z)(l, n);
          var o = (0, Se.Z)(l);
          function l() {
            var e;
            (0, ie.Z)(this, l);
            for (var i = arguments.length, d = new Array(i), u = 0; u < i; u++) d[u] = arguments[u];
            return (
              (e = o.call.apply(o, [this].concat(d))),
              (e.destroyed = !1),
              (e.delayedDragEnterLogic = void 0),
              (e.loadingRetryTimes = {}),
              (e.state = {
                keyEntities: {},
                indent: null,
                selectedKeys: [],
                checkedKeys: [],
                halfCheckedKeys: [],
                loadedKeys: [],
                loadingKeys: [],
                expandedKeys: [],
                draggingNodeKey: null,
                dragChildrenKeys: [],
                dropTargetKey: null,
                dropPosition: null,
                dropContainerKey: null,
                dropLevelOffset: null,
                dropTargetPos: null,
                dropAllowed: !0,
                dragOverNodeKey: null,
                treeData: [],
                flattenNodes: [],
                focused: !1,
                activeKey: null,
                listChanging: !1,
                prevProps: null,
                fieldNames: We(),
              }),
              (e.dragStartMousePosition = null),
              (e.dragNode = void 0),
              (e.currentMouseOverDroppableNodeKey = null),
              (e.listRef = g.createRef()),
              (e.onNodeDragStart = function (t, r) {
                var a = e.state,
                  s = a.expandedKeys,
                  c = a.keyEntities,
                  f = e.props.onDragStart,
                  v = r.props.eventKey;
                (e.dragNode = r), (e.dragStartMousePosition = { x: t.clientX, y: t.clientY });
                var p = Re(s, v);
                e.setState({
                  draggingNodeKey: v,
                  dragChildrenKeys: nn(v, c),
                  indent: e.listRef.current.getIndentWidth(),
                }),
                  e.setExpandedKeys(p),
                  window.addEventListener('dragend', e.onWindowDragEnd),
                  f == null || f({ event: t, node: G(r.props) });
              }),
              (e.onNodeDragEnter = function (t, r) {
                var a = e.state,
                  s = a.expandedKeys,
                  c = a.keyEntities,
                  f = a.dragChildrenKeys,
                  v = a.flattenNodes,
                  p = a.indent,
                  y = e.props,
                  b = y.onDragEnter,
                  h = y.onExpand,
                  E = y.allowDrop,
                  k = y.direction,
                  N = r.props,
                  x = N.pos,
                  D = N.eventKey,
                  O = (0, te.Z)(e),
                  R = O.dragNode;
                if (
                  (e.currentMouseOverDroppableNodeKey !== D &&
                    (e.currentMouseOverDroppableNodeKey = D),
                  !R)
                ) {
                  e.resetDragState();
                  return;
                }
                var C = Pt(t, R, r, p, e.dragStartMousePosition, E, v, c, s, k),
                  $ = C.dropPosition,
                  L = C.dropLevelOffset,
                  P = C.dropTargetKey,
                  F = C.dropContainerKey,
                  Y = C.dropTargetPos,
                  oe = C.dropAllowed,
                  B = C.dragOverNodeKey;
                if (f.indexOf(P) !== -1 || !oe) {
                  e.resetDragState();
                  return;
                }
                if (
                  (e.delayedDragEnterLogic || (e.delayedDragEnterLogic = {}),
                  Object.keys(e.delayedDragEnterLogic).forEach(function (U) {
                    clearTimeout(e.delayedDragEnterLogic[U]);
                  }),
                  R.props.eventKey !== r.props.eventKey &&
                    (t.persist(),
                    (e.delayedDragEnterLogic[x] = window.setTimeout(function () {
                      if (e.state.draggingNodeKey !== null) {
                        var U = (0, re.Z)(s),
                          fe = c[r.props.eventKey];
                        fe && (fe.children || []).length && (U = _e(s, r.props.eventKey)),
                          'expandedKeys' in e.props || e.setExpandedKeys(U),
                          h == null ||
                            h(U, { node: G(r.props), expanded: !0, nativeEvent: t.nativeEvent });
                      }
                    }, 800))),
                  R.props.eventKey === P && L === 0)
                ) {
                  e.resetDragState();
                  return;
                }
                e.setState({
                  dragOverNodeKey: B,
                  dropPosition: $,
                  dropLevelOffset: L,
                  dropTargetKey: P,
                  dropContainerKey: F,
                  dropTargetPos: Y,
                  dropAllowed: oe,
                }),
                  b == null || b({ event: t, node: G(r.props), expandedKeys: s });
              }),
              (e.onNodeDragOver = function (t, r) {
                var a = e.state,
                  s = a.dragChildrenKeys,
                  c = a.flattenNodes,
                  f = a.keyEntities,
                  v = a.expandedKeys,
                  p = a.indent,
                  y = e.props,
                  b = y.onDragOver,
                  h = y.allowDrop,
                  E = y.direction,
                  k = (0, te.Z)(e),
                  N = k.dragNode;
                if (N) {
                  var x = Pt(t, N, r, p, e.dragStartMousePosition, h, c, f, v, E),
                    D = x.dropPosition,
                    O = x.dropLevelOffset,
                    R = x.dropTargetKey,
                    C = x.dropContainerKey,
                    $ = x.dropAllowed,
                    L = x.dropTargetPos,
                    P = x.dragOverNodeKey;
                  s.indexOf(R) !== -1 ||
                    !$ ||
                    (N.props.eventKey === R && O === 0
                      ? (e.state.dropPosition === null &&
                          e.state.dropLevelOffset === null &&
                          e.state.dropTargetKey === null &&
                          e.state.dropContainerKey === null &&
                          e.state.dropTargetPos === null &&
                          e.state.dropAllowed === !1 &&
                          e.state.dragOverNodeKey === null) ||
                        e.resetDragState()
                      : (D === e.state.dropPosition &&
                          O === e.state.dropLevelOffset &&
                          R === e.state.dropTargetKey &&
                          C === e.state.dropContainerKey &&
                          L === e.state.dropTargetPos &&
                          $ === e.state.dropAllowed &&
                          P === e.state.dragOverNodeKey) ||
                        e.setState({
                          dropPosition: D,
                          dropLevelOffset: O,
                          dropTargetKey: R,
                          dropContainerKey: C,
                          dropTargetPos: L,
                          dropAllowed: $,
                          dragOverNodeKey: P,
                        }),
                    b == null || b({ event: t, node: G(r.props) }));
                }
              }),
              (e.onNodeDragLeave = function (t, r) {
                e.currentMouseOverDroppableNodeKey === r.props.eventKey &&
                  !t.currentTarget.contains(t.relatedTarget) &&
                  (e.resetDragState(), (e.currentMouseOverDroppableNodeKey = null));
                var a = e.props.onDragLeave;
                a == null || a({ event: t, node: G(r.props) });
              }),
              (e.onWindowDragEnd = function (t) {
                e.onNodeDragEnd(t, null, !0),
                  window.removeEventListener('dragend', e.onWindowDragEnd);
              }),
              (e.onNodeDragEnd = function (t, r) {
                var a = e.props.onDragEnd;
                e.setState({ dragOverNodeKey: null }),
                  e.cleanDragState(),
                  a == null || a({ event: t, node: G(r.props) }),
                  (e.dragNode = null),
                  window.removeEventListener('dragend', e.onWindowDragEnd);
              }),
              (e.onNodeDrop = function (t, r) {
                var a,
                  s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
                  c = e.state,
                  f = c.dragChildrenKeys,
                  v = c.dropPosition,
                  p = c.dropTargetKey,
                  y = c.dropTargetPos,
                  b = c.dropAllowed;
                if (b) {
                  var h = e.props.onDrop;
                  if ((e.setState({ dragOverNodeKey: null }), e.cleanDragState(), p !== null)) {
                    var E = (0, I.Z)(
                        (0, I.Z)({}, Ae(p, e.getTreeNodeRequiredProps())),
                        {},
                        {
                          active:
                            ((a = e.getActiveItem()) === null || a === void 0 ? void 0 : a.key) ===
                            p,
                          data: e.state.keyEntities[p].node,
                        },
                      ),
                      k = f.indexOf(p) !== -1;
                    (0, ve.ZP)(
                      !k,
                      "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.",
                    );
                    var N = xt(y),
                      x = {
                        event: t,
                        node: G(E),
                        dragNode: e.dragNode ? G(e.dragNode.props) : null,
                        dragNodesKeys: [e.dragNode.props.eventKey].concat(f),
                        dropToGap: v !== 0,
                        dropPosition: v + Number(N[N.length - 1]),
                      };
                    s || h == null || h(x), (e.dragNode = null);
                  }
                }
              }),
              (e.cleanDragState = function () {
                var t = e.state.draggingNodeKey;
                t !== null &&
                  e.setState({
                    draggingNodeKey: null,
                    dropPosition: null,
                    dropContainerKey: null,
                    dropTargetKey: null,
                    dropLevelOffset: null,
                    dropAllowed: !0,
                    dragOverNodeKey: null,
                  }),
                  (e.dragStartMousePosition = null),
                  (e.currentMouseOverDroppableNodeKey = null);
              }),
              (e.triggerExpandActionExpand = function (t, r) {
                var a = e.state,
                  s = a.expandedKeys,
                  c = a.flattenNodes,
                  f = r.expanded,
                  v = r.key,
                  p = r.isLeaf;
                if (!(p || t.shiftKey || t.metaKey || t.ctrlKey)) {
                  var y = c.filter(function (h) {
                      return h.key === v;
                    })[0],
                    b = G(
                      (0, I.Z)(
                        (0, I.Z)({}, Ae(v, e.getTreeNodeRequiredProps())),
                        {},
                        { data: y.data },
                      ),
                    );
                  e.setExpandedKeys(f ? Re(s, v) : _e(s, v)), e.onNodeExpand(t, b);
                }
              }),
              (e.onNodeClick = function (t, r) {
                var a = e.props,
                  s = a.onClick,
                  c = a.expandAction;
                c === 'click' && e.triggerExpandActionExpand(t, r), s == null || s(t, r);
              }),
              (e.onNodeDoubleClick = function (t, r) {
                var a = e.props,
                  s = a.onDoubleClick,
                  c = a.expandAction;
                c === 'doubleClick' && e.triggerExpandActionExpand(t, r), s == null || s(t, r);
              }),
              (e.onNodeSelect = function (t, r) {
                var a = e.state.selectedKeys,
                  s = e.state,
                  c = s.keyEntities,
                  f = s.fieldNames,
                  v = e.props,
                  p = v.onSelect,
                  y = v.multiple,
                  b = r.selected,
                  h = r[f.key],
                  E = !b;
                E ? (y ? (a = _e(a, h)) : (a = [h])) : (a = Re(a, h));
                var k = a
                  .map(function (N) {
                    var x = c[N];
                    return x ? x.node : null;
                  })
                  .filter(function (N) {
                    return N;
                  });
                e.setUncontrolledState({ selectedKeys: a }),
                  p == null ||
                    p(a, {
                      event: 'select',
                      selected: E,
                      node: r,
                      selectedNodes: k,
                      nativeEvent: t.nativeEvent,
                    });
              }),
              (e.onNodeCheck = function (t, r, a) {
                var s = e.state,
                  c = s.keyEntities,
                  f = s.checkedKeys,
                  v = s.halfCheckedKeys,
                  p = e.props,
                  y = p.checkStrictly,
                  b = p.onCheck,
                  h = r.key,
                  E,
                  k = { event: 'check', node: r, checked: a, nativeEvent: t.nativeEvent };
                if (y) {
                  var N = a ? _e(f, h) : Re(f, h),
                    x = Re(v, h);
                  (E = { checked: N, halfChecked: x }),
                    (k.checkedNodes = N.map(function (L) {
                      return c[L];
                    })
                      .filter(function (L) {
                        return L;
                      })
                      .map(function (L) {
                        return L.node;
                      })),
                    e.setUncontrolledState({ checkedKeys: N });
                } else {
                  var D = Dt([].concat((0, re.Z)(f), [h]), !0, c),
                    O = D.checkedKeys,
                    R = D.halfCheckedKeys;
                  if (!a) {
                    var C = new Set(O);
                    C.delete(h);
                    var $ = Dt(Array.from(C), { checked: !1, halfCheckedKeys: R }, c);
                    (O = $.checkedKeys), (R = $.halfCheckedKeys);
                  }
                  (E = O),
                    (k.checkedNodes = []),
                    (k.checkedNodesPositions = []),
                    (k.halfCheckedKeys = R),
                    O.forEach(function (L) {
                      var P = c[L];
                      if (P) {
                        var F = P.node,
                          Y = P.pos;
                        k.checkedNodes.push(F), k.checkedNodesPositions.push({ node: F, pos: Y });
                      }
                    }),
                    e.setUncontrolledState({ checkedKeys: O }, !1, { halfCheckedKeys: R });
                }
                b == null || b(E, k);
              }),
              (e.onNodeLoad = function (t) {
                var r = t.key,
                  a = new Promise(function (s, c) {
                    e.setState(function (f) {
                      var v = f.loadedKeys,
                        p = v === void 0 ? [] : v,
                        y = f.loadingKeys,
                        b = y === void 0 ? [] : y,
                        h = e.props,
                        E = h.loadData,
                        k = h.onLoad;
                      if (!E || p.indexOf(r) !== -1 || b.indexOf(r) !== -1) return null;
                      var N = E(t);
                      return (
                        N.then(function () {
                          var x = e.state.loadedKeys,
                            D = _e(x, r);
                          k == null || k(D, { event: 'load', node: t }),
                            e.setUncontrolledState({ loadedKeys: D }),
                            e.setState(function (O) {
                              return { loadingKeys: Re(O.loadingKeys, r) };
                            }),
                            s();
                        }).catch(function (x) {
                          if (
                            (e.setState(function (O) {
                              return { loadingKeys: Re(O.loadingKeys, r) };
                            }),
                            (e.loadingRetryTimes[r] = (e.loadingRetryTimes[r] || 0) + 1),
                            e.loadingRetryTimes[r] >= Gn)
                          ) {
                            var D = e.state.loadedKeys;
                            (0, ve.ZP)(
                              !1,
                              'Retry for `loadData` many times but still failed. No more retry.',
                            ),
                              e.setUncontrolledState({ loadedKeys: _e(D, r) }),
                              s();
                          }
                          c(x);
                        }),
                        { loadingKeys: _e(b, r) }
                      );
                    });
                  });
                return a.catch(function () {}), a;
              }),
              (e.onNodeMouseEnter = function (t, r) {
                var a = e.props.onMouseEnter;
                a == null || a({ event: t, node: r });
              }),
              (e.onNodeMouseLeave = function (t, r) {
                var a = e.props.onMouseLeave;
                a == null || a({ event: t, node: r });
              }),
              (e.onNodeContextMenu = function (t, r) {
                var a = e.props.onRightClick;
                a && (t.preventDefault(), a({ event: t, node: r }));
              }),
              (e.onFocus = function () {
                var t = e.props.onFocus;
                e.setState({ focused: !0 });
                for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
                  a[s] = arguments[s];
                t == null || t.apply(void 0, a);
              }),
              (e.onBlur = function () {
                var t = e.props.onBlur;
                e.setState({ focused: !1 }), e.onActiveChange(null);
                for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
                  a[s] = arguments[s];
                t == null || t.apply(void 0, a);
              }),
              (e.getTreeNodeRequiredProps = function () {
                var t = e.state,
                  r = t.expandedKeys,
                  a = t.selectedKeys,
                  s = t.loadedKeys,
                  c = t.loadingKeys,
                  f = t.checkedKeys,
                  v = t.halfCheckedKeys,
                  p = t.dragOverNodeKey,
                  y = t.dropPosition,
                  b = t.keyEntities;
                return {
                  expandedKeys: r || [],
                  selectedKeys: a || [],
                  loadedKeys: s || [],
                  loadingKeys: c || [],
                  checkedKeys: f || [],
                  halfCheckedKeys: v || [],
                  dragOverNodeKey: p,
                  dropPosition: y,
                  keyEntities: b,
                };
              }),
              (e.setExpandedKeys = function (t) {
                var r = e.state,
                  a = r.treeData,
                  s = r.fieldNames,
                  c = Be(a, t, s);
                e.setUncontrolledState({ expandedKeys: t, flattenNodes: c }, !0);
              }),
              (e.onNodeExpand = function (t, r) {
                var a = e.state.expandedKeys,
                  s = e.state,
                  c = s.listChanging,
                  f = s.fieldNames,
                  v = e.props,
                  p = v.onExpand,
                  y = v.loadData,
                  b = r.expanded,
                  h = r[f.key];
                if (!c) {
                  var E = a.indexOf(h),
                    k = !b;
                  if (
                    ((0, ve.ZP)(
                      (b && E !== -1) || (!b && E === -1),
                      'Expand state not sync with index check',
                    ),
                    k ? (a = _e(a, h)) : (a = Re(a, h)),
                    e.setExpandedKeys(a),
                    p == null || p(a, { node: r, expanded: k, nativeEvent: t.nativeEvent }),
                    k && y)
                  ) {
                    var N = e.onNodeLoad(r);
                    N &&
                      N.then(function () {
                        var x = Be(e.state.treeData, a, f);
                        e.setUncontrolledState({ flattenNodes: x });
                      }).catch(function () {
                        var x = e.state.expandedKeys,
                          D = Re(x, h);
                        e.setExpandedKeys(D);
                      });
                  }
                }
              }),
              (e.onListChangeStart = function () {
                e.setUncontrolledState({ listChanging: !0 });
              }),
              (e.onListChangeEnd = function () {
                setTimeout(function () {
                  e.setUncontrolledState({ listChanging: !1 });
                });
              }),
              (e.onActiveChange = function (t) {
                var r = e.state.activeKey,
                  a = e.props.onActiveChange;
                r !== t &&
                  (e.setState({ activeKey: t }),
                  t !== null && e.scrollTo({ key: t }),
                  a == null || a(t));
              }),
              (e.getActiveItem = function () {
                var t = e.state,
                  r = t.activeKey,
                  a = t.flattenNodes;
                return r === null
                  ? null
                  : a.find(function (s) {
                      var c = s.key;
                      return c === r;
                    }) || null;
              }),
              (e.offsetActiveKey = function (t) {
                var r = e.state,
                  a = r.flattenNodes,
                  s = r.activeKey,
                  c = a.findIndex(function (p) {
                    var y = p.key;
                    return y === s;
                  });
                c === -1 && t < 0 && (c = a.length), (c = (c + t + a.length) % a.length);
                var f = a[c];
                if (f) {
                  var v = f.key;
                  e.onActiveChange(v);
                } else e.onActiveChange(null);
              }),
              (e.onKeyDown = function (t) {
                var r = e.state,
                  a = r.activeKey,
                  s = r.expandedKeys,
                  c = r.checkedKeys,
                  f = r.fieldNames,
                  v = e.props,
                  p = v.onKeyDown,
                  y = v.checkable,
                  b = v.selectable;
                switch (t.which) {
                  case ke.Z.UP: {
                    e.offsetActiveKey(-1), t.preventDefault();
                    break;
                  }
                  case ke.Z.DOWN: {
                    e.offsetActiveKey(1), t.preventDefault();
                    break;
                  }
                }
                var h = e.getActiveItem();
                if (h && h.data) {
                  var E = e.getTreeNodeRequiredProps(),
                    k = h.data.isLeaf === !1 || !!(h.data[f.children] || []).length,
                    N = G((0, I.Z)((0, I.Z)({}, Ae(a, E)), {}, { data: h.data, active: !0 }));
                  switch (t.which) {
                    case ke.Z.LEFT: {
                      k && s.includes(a)
                        ? e.onNodeExpand({}, N)
                        : h.parent && e.onActiveChange(h.parent.key),
                        t.preventDefault();
                      break;
                    }
                    case ke.Z.RIGHT: {
                      k && !s.includes(a)
                        ? e.onNodeExpand({}, N)
                        : h.children && h.children.length && e.onActiveChange(h.children[0].key),
                        t.preventDefault();
                      break;
                    }
                    case ke.Z.ENTER:
                    case ke.Z.SPACE: {
                      y && !N.disabled && N.checkable !== !1 && !N.disableCheckbox
                        ? e.onNodeCheck({}, N, !c.includes(a))
                        : !y && b && !N.disabled && N.selectable !== !1 && e.onNodeSelect({}, N);
                      break;
                    }
                  }
                }
                p == null || p(t);
              }),
              (e.setUncontrolledState = function (t) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                  a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                if (!e.destroyed) {
                  var s = !1,
                    c = !0,
                    f = {};
                  Object.keys(t).forEach(function (v) {
                    if (v in e.props) {
                      c = !1;
                      return;
                    }
                    (s = !0), (f[v] = t[v]);
                  }),
                    s && (!r || c) && e.setState((0, I.Z)((0, I.Z)({}, f), a));
                }
              }),
              (e.scrollTo = function (t) {
                e.listRef.current.scrollTo(t);
              }),
              e
            );
          }
          return (
            (0, le.Z)(
              l,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    (this.destroyed = !1), this.onUpdated();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    this.onUpdated();
                  },
                },
                {
                  key: 'onUpdated',
                  value: function () {
                    var i = this.props.activeKey;
                    i !== void 0 &&
                      i !== this.state.activeKey &&
                      (this.setState({ activeKey: i }), i !== null && this.scrollTo({ key: i }));
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    window.removeEventListener('dragend', this.onWindowDragEnd),
                      (this.destroyed = !0);
                  },
                },
                {
                  key: 'resetDragState',
                  value: function () {
                    this.setState({
                      dragOverNodeKey: null,
                      dropPosition: null,
                      dropLevelOffset: null,
                      dropTargetKey: null,
                      dropContainerKey: null,
                      dropTargetPos: null,
                      dropAllowed: !1,
                    });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var i,
                      d = this.state,
                      u = d.focused,
                      t = d.flattenNodes,
                      r = d.keyEntities,
                      a = d.draggingNodeKey,
                      s = d.activeKey,
                      c = d.dropLevelOffset,
                      f = d.dropContainerKey,
                      v = d.dropTargetKey,
                      p = d.dropPosition,
                      y = d.dragOverNodeKey,
                      b = d.indent,
                      h = this.props,
                      E = h.prefixCls,
                      k = h.className,
                      N = h.style,
                      x = h.showLine,
                      D = h.focusable,
                      O = h.tabIndex,
                      R = O === void 0 ? 0 : O,
                      C = h.selectable,
                      $ = h.showIcon,
                      L = h.icon,
                      P = h.switcherIcon,
                      F = h.draggable,
                      Y = h.checkable,
                      oe = h.checkStrictly,
                      B = h.disabled,
                      U = h.motion,
                      fe = h.loadData,
                      Oe = h.filterTreeNode,
                      be = h.height,
                      Ve = h.itemHeight,
                      de = h.virtual,
                      xe = h.titleRender,
                      he = h.dropIndicatorRender,
                      $e = h.onContextMenu,
                      it = h.onScroll,
                      Je = h.direction,
                      lt = h.rootClassName,
                      Ee = h.rootStyle,
                      st = V(this.props, { aria: !0, data: !0 }),
                      Ne;
                    return (
                      F &&
                        ((0, ye.Z)(F) === 'object'
                          ? (Ne = F)
                          : typeof F == 'function'
                          ? (Ne = { nodeDraggable: F })
                          : (Ne = {})),
                      g.createElement(
                        T.Provider,
                        {
                          value: {
                            prefixCls: E,
                            selectable: C,
                            showIcon: $,
                            icon: L,
                            switcherIcon: P,
                            draggable: Ne,
                            draggingNodeKey: a,
                            checkable: Y,
                            checkStrictly: oe,
                            disabled: B,
                            keyEntities: r,
                            dropLevelOffset: c,
                            dropContainerKey: f,
                            dropTargetKey: v,
                            dropPosition: p,
                            dragOverNodeKey: y,
                            indent: b,
                            direction: Je,
                            dropIndicatorRender: he,
                            loadData: fe,
                            filterTreeNode: Oe,
                            titleRender: xe,
                            onNodeClick: this.onNodeClick,
                            onNodeDoubleClick: this.onNodeDoubleClick,
                            onNodeExpand: this.onNodeExpand,
                            onNodeSelect: this.onNodeSelect,
                            onNodeCheck: this.onNodeCheck,
                            onNodeLoad: this.onNodeLoad,
                            onNodeMouseEnter: this.onNodeMouseEnter,
                            onNodeMouseLeave: this.onNodeMouseLeave,
                            onNodeContextMenu: this.onNodeContextMenu,
                            onNodeDragStart: this.onNodeDragStart,
                            onNodeDragEnter: this.onNodeDragEnter,
                            onNodeDragOver: this.onNodeDragOver,
                            onNodeDragLeave: this.onNodeDragLeave,
                            onNodeDragEnd: this.onNodeDragEnd,
                            onNodeDrop: this.onNodeDrop,
                          },
                        },
                        g.createElement(
                          'div',
                          {
                            role: 'tree',
                            className: H()(
                              E,
                              k,
                              lt,
                              ((i = {}),
                              (0, Z.Z)(i, ''.concat(E, '-show-line'), x),
                              (0, Z.Z)(i, ''.concat(E, '-focused'), u),
                              (0, Z.Z)(i, ''.concat(E, '-active-focused'), s !== null),
                              i),
                            ),
                            style: Ee,
                          },
                          g.createElement(
                            jn,
                            (0, ee.Z)(
                              {
                                ref: this.listRef,
                                prefixCls: E,
                                style: N,
                                data: t,
                                disabled: B,
                                selectable: C,
                                checkable: !!Y,
                                motion: U,
                                dragging: a !== null,
                                height: be,
                                itemHeight: Ve,
                                virtual: de,
                                focusable: D,
                                focused: u,
                                tabIndex: R,
                                activeItem: this.getActiveItem(),
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                onKeyDown: this.onKeyDown,
                                onActiveChange: this.onActiveChange,
                                onListChangeStart: this.onListChangeStart,
                                onListChangeEnd: this.onListChangeEnd,
                                onContextMenu: $e,
                                onScroll: it,
                              },
                              this.getTreeNodeRequiredProps(),
                              st,
                            ),
                          ),
                        ),
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (i, d) {
                    var u = d.prevProps,
                      t = { prevProps: i };
                    function r(D) {
                      return (!u && D in i) || (u && u[D] !== i[D]);
                    }
                    var a,
                      s = d.fieldNames;
                    if (
                      (r('fieldNames') && ((s = We(i.fieldNames)), (t.fieldNames = s)),
                      r('treeData')
                        ? (a = i.treeData)
                        : r('children') &&
                          ((0, ve.ZP)(
                            !1,
                            '`children` of Tree is deprecated. Please use `treeData` instead.',
                          ),
                          (a = rt(i.children))),
                      a)
                    ) {
                      t.treeData = a;
                      var c = kt(a, { fieldNames: s });
                      t.keyEntities = (0, I.Z)((0, Z.Z)({}, Ge, Ut), c.keyEntities);
                    }
                    var f = t.keyEntities || d.keyEntities;
                    if (r('expandedKeys') || (u && r('autoExpandParent')))
                      t.expandedKeys =
                        i.autoExpandParent || (!u && i.defaultExpandParent)
                          ? Lt(i.expandedKeys, f)
                          : i.expandedKeys;
                    else if (!u && i.defaultExpandAll) {
                      var v = (0, I.Z)({}, f);
                      delete v[Ge],
                        (t.expandedKeys = Object.keys(v).map(function (D) {
                          return v[D].key;
                        }));
                    } else
                      !u &&
                        i.defaultExpandedKeys &&
                        (t.expandedKeys =
                          i.autoExpandParent || i.defaultExpandParent
                            ? Lt(i.defaultExpandedKeys, f)
                            : i.defaultExpandedKeys);
                    if ((t.expandedKeys || delete t.expandedKeys, a || t.expandedKeys)) {
                      var p = Be(a || d.treeData, t.expandedKeys || d.expandedKeys, s);
                      t.flattenNodes = p;
                    }
                    if (
                      (i.selectable &&
                        (r('selectedKeys')
                          ? (t.selectedKeys = wt(i.selectedKeys, i))
                          : !u &&
                            i.defaultSelectedKeys &&
                            (t.selectedKeys = wt(i.defaultSelectedKeys, i))),
                      i.checkable)
                    ) {
                      var y;
                      if (
                        (r('checkedKeys')
                          ? (y = Nt(i.checkedKeys) || {})
                          : !u && i.defaultCheckedKeys
                          ? (y = Nt(i.defaultCheckedKeys) || {})
                          : a &&
                            (y = Nt(i.checkedKeys) || {
                              checkedKeys: d.checkedKeys,
                              halfCheckedKeys: d.halfCheckedKeys,
                            }),
                        y)
                      ) {
                        var b = y,
                          h = b.checkedKeys,
                          E = h === void 0 ? [] : h,
                          k = b.halfCheckedKeys,
                          N = k === void 0 ? [] : k;
                        if (!i.checkStrictly) {
                          var x = Dt(E, !0, f);
                          (E = x.checkedKeys), (N = x.halfCheckedKeys);
                        }
                        (t.checkedKeys = E), (t.halfCheckedKeys = N);
                      }
                    }
                    return r('loadedKeys') && (t.loadedKeys = i.loadedKeys), t;
                  },
                },
              ],
            ),
            l
          );
        })(g.Component);
      (zt.defaultProps = {
        prefixCls: 'rc-tree',
        showLine: !1,
        showIcon: !0,
        selectable: !0,
        multiple: !1,
        checkable: !1,
        disabled: !1,
        checkStrictly: !1,
        draggable: !1,
        defaultExpandParent: !0,
        autoExpandParent: !1,
        defaultExpandAll: !1,
        defaultExpandedKeys: [],
        defaultCheckedKeys: [],
        defaultSelectedKeys: [],
        dropIndicatorRender: Bn,
        allowDrop: function () {
          return !0;
        },
        expandAction: !1,
      }),
        (zt.TreeNode = Te);
      var fr = null,
        vr = null;
      function Xt(n, o) {
        var l = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(n);
          o &&
            (e = e.filter(function (i) {
              return Object.getOwnPropertyDescriptor(n, i).enumerable;
            })),
            l.push.apply(l, e);
        }
        return l;
      }
      function Jt(n) {
        for (var o = 1; o < arguments.length; o++) {
          var l = arguments[o] != null ? arguments[o] : {};
          o % 2
            ? Xt(Object(l), !0).forEach(function (e) {
                Vn(n, e, l[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
            : Xt(Object(l)).forEach(function (e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
              });
        }
        return n;
      }
      function Vn(n, o, l) {
        return (
          o in n
            ? Object.defineProperty(n, o, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[o] = l),
          n
        );
      }
      function Yn(n, o) {
        return Jn(n) || Xn(n, o) || Qt(n, o) || zn();
      }
      function zn() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Xn(n, o) {
        var l =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) || n['@@iterator'];
        if (l != null) {
          var e = [],
            i = !0,
            d = !1,
            u,
            t;
          try {
            for (
              l = l.call(n);
              !(i = (u = l.next()).done) && (e.push(u.value), !(o && e.length === o));
              i = !0
            );
          } catch (r) {
            (d = !0), (t = r);
          } finally {
            try {
              !i && l.return != null && l.return();
            } finally {
              if (d) throw t;
            }
          }
          return e;
        }
      }
      function Jn(n) {
        if (Array.isArray(n)) return n;
      }
      function Qn(n) {
        return tr(n) || er(n) || Qt(n) || qn();
      }
      function qn() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Qt(n, o) {
        if (n) {
          if (typeof n == 'string') return Tt(n, o);
          var l = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (l === 'Object' && n.constructor && (l = n.constructor.name),
            l === 'Map' || l === 'Set')
          )
            return Array.from(n);
          if (l === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
            return Tt(n, o);
        }
      }
      function er(n) {
        if ((typeof Symbol != 'undefined' && n[Symbol.iterator] != null) || n['@@iterator'] != null)
          return Array.from(n);
      }
      function tr(n) {
        if (Array.isArray(n)) return Tt(n);
      }
      function Tt(n, o) {
        (o == null || o > n.length) && (o = n.length);
        for (var l = 0, e = new Array(o); l < o; l++) e[l] = n[l];
        return e;
      }
      function yt(n) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '',
          l = [];
        return (
          [].concat(n).forEach(function (e, i) {
            var d = ''.concat(o ? ''.concat(o, '-') : '').concat(i);
            switch (e == null ? void 0 : e.type) {
              case 'ul': {
                var u,
                  t = ((u = l[l.length - 1]) === null || u === void 0 ? void 0 : u.children) || l,
                  r = yt(e.props.children || [], d);
                t.push.apply(t, Qn(r));
                break;
              }
              case 'li': {
                var a = yt(e.props.children, d);
                l.push({
                  title: [].concat(e.props.children).filter(function (s) {
                    return s.type !== 'ul';
                  }),
                  key: d,
                  children: a,
                  isLeaf: !a.length,
                });
                break;
              }
              default:
            }
          }),
          l
        );
      }
      var nr = function (o) {
          var l = useState(yt(o)),
            e = Yn(l, 2),
            i = e[0],
            d = e[1];
          return (
            useEffect(
              function () {
                d(yt(o));
              },
              [o],
            ),
            i
          );
        },
        rr = function (o) {
          var l = o.isLeaf,
            e = o.expanded;
          return l
            ? React.createElement(
                'span',
                { className: 'dumi-default-tree-icon' },
                React.createElement(FileOutlined, { fill: 'currentColor' }),
              )
            : e
            ? React.createElement(
                'span',
                { className: 'dumi-default-tree-icon' },
                React.createElement(FolderOpenOutlined, { fill: 'currentColor' }),
              )
            : React.createElement(
                'span',
                { className: 'dumi-default-tree-icon' },
                React.createElement(FolderOutlined, { fill: 'currentColor' }),
              );
        },
        ar = function (o) {
          var l = o.isLeaf,
            e = o.expanded;
          return l
            ? React.createElement('span', { className: 'tree-switcher-leaf-line' })
            : e
            ? React.createElement(
                'span',
                { className: 'tree-switcher-line-icon' },
                React.createElement(
                  'span',
                  { className: 'dumi-default-tree-icon' },
                  React.createElement(MinusSquareOutlined, { fill: 'currentColor' }),
                ),
              )
            : React.createElement(
                'span',
                { className: 'tree-switcher-line-icon' },
                React.createElement(
                  'span',
                  { className: 'dumi-default-tree-icon' },
                  React.createElement(PlusSquareOutlined, { fill: 'currentColor' }),
                ),
              );
        },
        Rt = function () {
          return { height: 0, opacity: 0 };
        },
        qt = function (o) {
          var l = o.scrollHeight;
          return { height: l, opacity: 1 };
        },
        or = function (o) {
          return { height: o ? o.offsetHeight : 0 };
        },
        Mt = function (o, l) {
          return (l == null ? void 0 : l.deadline) === !0 || l.propertyName === 'height';
        },
        ir = {
          motionName: 'ant-motion-collapse',
          onAppearStart: Rt,
          onEnterStart: Rt,
          onAppearActive: qt,
          onEnterActive: qt,
          onLeaveStart: or,
          onLeaveActive: Rt,
          onAppearEnd: Mt,
          onEnterEnd: Mt,
          onLeaveEnd: Mt,
          motionDeadline: 500,
        },
        pr = function (n) {
          var o = nr(n.children),
            l = createRef(),
            e = function (d, u) {
              var t = u.isLeaf;
              t || d.shiftKey || d.metaKey || d.ctrlKey || l.current.onNodeExpand(d, u);
            };
          return React.createElement(Tree, {
            className: 'dumi-default-tree',
            icon: rr,
            ref: l,
            itemHeight: 20,
            showLine: !0,
            selectable: !1,
            virtual: !1,
            motion: Jt(Jt({}, ir), {}, { motionAppear: !1 }),
            onClick: e,
            treeData: [{ key: '0', title: n.title || '<root>', children: o }],
            defaultExpandAll: !0,
            switcherIcon: ar,
          });
        };
    },
    30826: function (nt, ft, w) {
      var ee = 'Expected a function',
        Z = NaN,
        ye = '[object Symbol]',
        I = /^\s+|\s+$/g,
        re = /^[-+]0x[0-9a-f]+$/i,
        ie = /^0b[01]+$/i,
        le = /^0o[0-7]+$/i,
        te = parseInt,
        Ce = typeof w.g == 'object' && w.g && w.g.Object === Object && w.g,
        Se = typeof self == 'object' && self && self.Object === Object && self,
        g = Ce || Se || Function('return this')(),
        ke = Object.prototype,
        ve = ke.toString,
        K = Math.max,
        m = Math.min,
        S = function () {
          return g.Date.now();
        };
      function M(T, W, X) {
        var ae,
          J,
          se,
          Ie,
          ue,
          De,
          me = 0,
          We = !1,
          Xe = !1,
          rt = !0;
        if (typeof T != 'function') throw new TypeError(ee);
        (W = H(W) || 0),
          A(X) &&
            ((We = !!X.leading),
            (Xe = 'maxWait' in X),
            (se = Xe ? K(H(X.maxWait) || 0, W) : se),
            (rt = 'trailing' in X ? !!X.trailing : rt));
        function Be(q) {
          var pe = ae,
            Te = J;
          return (ae = J = void 0), (me = q), (Ie = T.apply(Te, pe)), Ie;
        }
        function St(q) {
          return (me = q), (ue = setTimeout(G, W)), We ? Be(q) : Ie;
        }
        function kt(q) {
          var pe = q - De,
            Te = q - me,
            gt = W - pe;
          return Xe ? m(gt, se - Te) : gt;
        }
        function Ae(q) {
          var pe = q - De,
            Te = q - me;
          return De === void 0 || pe >= W || pe < 0 || (Xe && Te >= se);
        }
        function G() {
          var q = S();
          if (Ae(q)) return vt(q);
          ue = setTimeout(G, kt(q));
        }
        function vt(q) {
          return (ue = void 0), rt && ae ? Be(q) : ((ae = J = void 0), Ie);
        }
        function pt() {
          ue !== void 0 && clearTimeout(ue), (me = 0), (ae = De = J = ue = void 0);
        }
        function ht() {
          return ue === void 0 ? Ie : vt(S());
        }
        function at() {
          var q = S(),
            pe = Ae(q);
          if (((ae = arguments), (J = this), (De = q), pe)) {
            if (ue === void 0) return St(De);
            if (Xe) return (ue = setTimeout(G, W)), Be(De);
          }
          return ue === void 0 && (ue = setTimeout(G, W)), Ie;
        }
        return (at.cancel = pt), (at.flush = ht), at;
      }
      function j(T, W, X) {
        var ae = !0,
          J = !0;
        if (typeof T != 'function') throw new TypeError(ee);
        return (
          A(X) &&
            ((ae = 'leading' in X ? !!X.leading : ae), (J = 'trailing' in X ? !!X.trailing : J)),
          M(T, W, { leading: ae, maxWait: W, trailing: J })
        );
      }
      function A(T) {
        var W = typeof T;
        return !!T && (W == 'object' || W == 'function');
      }
      function V(T) {
        return !!T && typeof T == 'object';
      }
      function ne(T) {
        return typeof T == 'symbol' || (V(T) && ve.call(T) == ye);
      }
      function H(T) {
        if (typeof T == 'number') return T;
        if (ne(T)) return Z;
        if (A(T)) {
          var W = typeof T.valueOf == 'function' ? T.valueOf() : T;
          T = A(W) ? W + '' : W;
        }
        if (typeof T != 'string') return T === 0 ? T : +T;
        T = T.replace(I, '');
        var X = ie.test(T);
        return X || le.test(T) ? te(T.slice(2), X ? 2 : 8) : re.test(T) ? Z : +T;
      }
      nt.exports = j;
    },
  },
]);
