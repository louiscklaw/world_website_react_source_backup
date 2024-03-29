(this.webpackJsonphkjc_fe = this.webpackJsonphkjc_fe || []).push([
  [4],
  {
    466: function (t, e, i) {
      var s;
      !(function (o, n) {
        t.exports
          ? ((n.default = n), (t.exports = o.document ? n(o) : n))
          : void 0 ===
              (s = function () {
                return n(o);
              }.call(e, i, e, t)) || (t.exports = s);
      })("undefined" !== typeof window ? window : this, function (t) {
        function e(t, e, i, s) {
          t.hasOwnProperty(e) || (t[e] = s.apply(null, i));
        }
        var i = {};
        return (
          e(i, "parts/Globals.js", [], function () {
            var e =
                "undefined" !== typeof t
                  ? t
                  : "undefined" !== typeof window
                    ? window
                    : {},
              i = e.document,
              s = (e.navigator && e.navigator.userAgent) || "",
              o =
                i &&
                i.createElementNS &&
                !!i.createElementNS("http://www.w3.org/2000/svg", "svg")
                  .createSVGRect,
              n = /(edge|msie|trident)/i.test(s) && !e.opera,
              r = -1 !== s.indexOf("Firefox"),
              a = -1 !== s.indexOf("Chrome"),
              h = r && 4 > parseInt(s.split("Firefox/")[1], 10);
            return {
              product: "Highcharts",
              version: "8.1.0",
              deg2rad: (2 * Math.PI) / 360,
              doc: i,
              hasBidiBug: h,
              hasTouch: !!e.TouchEvent,
              isMS: n,
              isWebKit: -1 !== s.indexOf("AppleWebKit"),
              isFirefox: r,
              isChrome: a,
              isSafari: !a && -1 !== s.indexOf("Safari"),
              isTouchDevice: /(Mobile|Android|Windows Phone)/.test(s),
              SVG_NS: "http://www.w3.org/2000/svg",
              chartCount: 0,
              seriesTypes: {},
              symbolSizes: {},
              svg: o,
              win: e,
              marginNames: [
                "plotTop",
                "marginRight",
                "marginBottom",
                "plotLeft",
              ],
              noop: function () {},
              charts: [],
              dateFormats: {},
            };
          }),
          e(i, "parts/Utilities.js", [i["parts/Globals.js"]], function (t) {
            function e() {
              var t,
                e = arguments,
                s = {},
                o = function t(e, s) {
                  return (
                    "object" !== typeof e && (e = {}),
                    _(s, function (o, n) {
                      !i(o, !0) || g(o) || f(o)
                        ? (e[n] = s[n])
                        : (e[n] = t(e[n] || {}, o));
                    }),
                    e
                  );
                };
              !0 === e[0] &&
                ((s = e[1]), (e = Array.prototype.slice.call(e, 2)));
              var n = e.length;
              for (t = 0; t < n; t++) s = o(s, e[t]);
              return s;
            }
            function i(t, e) {
              return !!t && "object" === typeof t && (!e || !u(t));
            }
            function s(t, e, i) {
              var s;
              return (
                p(e)
                  ? v(i)
                    ? t.setAttribute(e, i)
                    : t &&
                      t.getAttribute &&
                      ((s = t.getAttribute(e)) ||
                        "class" !== e ||
                        (s = t.getAttribute(e + "Name")))
                  : _(e, function (e, i) {
                      t.setAttribute(i, e);
                    }),
                s
              );
            }
            function o() {
              for (var t = arguments, e = t.length, i = 0; i < e; i++) {
                var s = t[i];
                if ("undefined" !== typeof s && null !== s) return s;
              }
            }
            function n(t, e) {
              if (!t) return e;
              var i = t.split(".").reverse();
              if (1 === i.length) return e[t];
              for (
                t = i.pop();
                "undefined" !== typeof t &&
                "undefined" !== typeof e &&
                null !== e;

              )
                (e = e[t]), (t = i.pop());
              return e;
            }
            t.timers = [];
            var r = t.charts,
              a = t.doc,
              h = t.win,
              l = (t.error = function (t, e, i, s) {
                var o = m(t),
                  n = o
                    ? "Highcharts error #" +
                      t +
                      ": www.highcharts.com/errors/" +
                      t +
                      "/"
                    : t.toString(),
                  r = function () {
                    if (e) throw Error(n);
                    h.console && console.log(n);
                  };
                if ("undefined" !== typeof s) {
                  var a = "";
                  o && (n += "?"),
                    _(s, function (t, e) {
                      (a += "\n" + e + ": " + t),
                        o && (n += encodeURI(e) + "=" + encodeURI(t));
                    }),
                    (n += a);
                }
                i
                  ? q(i, "displayError", { code: t, message: n, params: s }, r)
                  : r();
              }),
              c = (function () {
                function e(t, e, i) {
                  (this.options = e), (this.elem = t), (this.prop = i);
                }
                return (
                  (e.prototype.dSetter = function () {
                    var t = this.paths,
                      e = t && t[0];
                    t = t && t[1];
                    var i = [],
                      s = this.now || 0;
                    if (1 !== s && e && t)
                      if (e.length === t.length && 1 > s)
                        for (var o = 0; o < t.length; o++) {
                          for (
                            var n = e[o], r = t[o], a = [], h = 0;
                            h < r.length;
                            h++
                          ) {
                            var l = n[h],
                              c = r[h];
                            a[h] =
                              "number" === typeof l &&
                              "number" === typeof c &&
                              ("A" !== r[0] || (4 !== h && 5 !== h))
                                ? l + s * (c - l)
                                : c;
                          }
                          i.push(a);
                        }
                      else i = t;
                    else i = this.toD || [];
                    this.elem.attr("d", i, void 0, !0);
                  }),
                  (e.prototype.update = function () {
                    var t = this.elem,
                      e = this.prop,
                      i = this.now,
                      s = this.options.step;
                    this[e + "Setter"]
                      ? this[e + "Setter"]()
                      : t.attr
                        ? t.element && t.attr(e, i, null, !0)
                        : (t.style[e] = i + this.unit),
                      s && s.call(t, i, this);
                  }),
                  (e.prototype.run = function (e, i, s) {
                    var o = this,
                      n = o.options,
                      r = function t(e) {
                        return !t.stopped && o.step(e);
                      },
                      a =
                        h.requestAnimationFrame ||
                        function (t) {
                          setTimeout(t, 13);
                        };
                    e !== i || this.elem["forceAnimate:" + this.prop]
                      ? ((this.startTime = +new Date()),
                        (this.start = e),
                        (this.end = i),
                        (this.unit = s),
                        (this.now = this.start),
                        (this.pos = 0),
                        (r.elem = this.elem),
                        (r.prop = this.prop),
                        r() &&
                          1 === t.timers.push(r) &&
                          a(function e() {
                            for (var i = 0; i < t.timers.length; i++)
                              t.timers[i]() || t.timers.splice(i--, 1);
                            t.timers.length && a(e);
                          }))
                      : (delete n.curAnim[this.prop],
                        n.complete &&
                          0 === Object.keys(n.curAnim).length &&
                          n.complete.call(this.elem));
                  }),
                  (e.prototype.step = function (t) {
                    var e = +new Date(),
                      i = this.options,
                      s = this.elem,
                      o = i.complete,
                      n = i.duration,
                      r = i.curAnim;
                    if (s.attr && !s.element) t = !1;
                    else if (t || e >= n + this.startTime) {
                      (this.now = this.end), (this.pos = 1), this.update();
                      var a = (r[this.prop] = !0);
                      _(r, function (t) {
                        !0 !== t && (a = !1);
                      }),
                        a && o && o.call(s),
                        (t = !1);
                    } else
                      (this.pos = i.easing((e - this.startTime) / n)),
                        (this.now =
                          this.start + (this.end - this.start) * this.pos),
                        this.update(),
                        (t = !0);
                    return t;
                  }),
                  (e.prototype.initPath = function (t, e, i) {
                    function s(t, e) {
                      for (; t.length < d; ) {
                        var i = t[0],
                          s = e[d - t.length];
                        s &&
                          "M" === i[0] &&
                          (t[0] =
                            "C" === s[0]
                              ? ["C", i[1], i[2], i[1], i[2], i[1], i[2]]
                              : ["L", i[1], i[2]]),
                          t.unshift(i),
                          a && t.push(t[t.length - 1]);
                      }
                    }
                    function o(t, e) {
                      for (; t.length < d; )
                        if (
                          ("C" === (e = t[t.length / h - 1].slice())[0] &&
                            ((e[1] = e[5]), (e[2] = e[6])),
                          a)
                        ) {
                          var i = t[t.length / h].slice();
                          t.splice(t.length / 2, 0, e, i);
                        } else t.push(e);
                    }
                    var n = t.startX,
                      r = t.endX;
                    (e = e && e.slice()), (i = i.slice());
                    var a = t.isArea,
                      h = a ? 2 : 1;
                    if (!e) return [i, i];
                    if (n && r) {
                      for (t = 0; t < n.length; t++) {
                        if (n[t] === r[0]) {
                          var l = t;
                          break;
                        }
                        if (n[0] === r[r.length - n.length + t]) {
                          l = t;
                          var c = !0;
                          break;
                        }
                        if (n[n.length - 1] === r[r.length - n.length + t]) {
                          l = n.length - t;
                          break;
                        }
                      }
                      "undefined" === typeof l && (e = []);
                    }
                    if (e.length && m(l)) {
                      var d = i.length + l * h;
                      c ? (s(e, i), o(i, e)) : (s(i, e), o(e, i));
                    }
                    return [e, i];
                  }),
                  (e.prototype.fillSetter = function () {
                    e.prototype.strokeSetter.apply(this, arguments);
                  }),
                  (e.prototype.strokeSetter = function () {
                    this.elem.attr(
                      this.prop,
                      t.color(this.start).tweenTo(t.color(this.end), this.pos),
                      null,
                      !0,
                    );
                  }),
                  e
                );
              })();
            (t.Fx = c), (t.merge = e);
            var d = (t.pInt = function (t, e) {
                return parseInt(t, e || 10);
              }),
              p = (t.isString = function (t) {
                return "string" === typeof t;
              }),
              u = (t.isArray = function (t) {
                return (
                  "[object Array]" ===
                    (t = Object.prototype.toString.call(t)) ||
                  "[object Array Iterator]" === t
                );
              });
            t.isObject = i;
            var f = (t.isDOMElement = function (t) {
                return i(t) && "number" === typeof t.nodeType;
              }),
              g = (t.isClass = function (t) {
                var e = t && t.constructor;
                return !(
                  !i(t, !0) ||
                  f(t) ||
                  !e ||
                  !e.name ||
                  "Object" === e.name
                );
              }),
              m = (t.isNumber = function (t) {
                return (
                  "number" === typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t
                );
              }),
              y = (t.erase = function (t, e) {
                for (var i = t.length; i--; )
                  if (t[i] === e) {
                    t.splice(i, 1);
                    break;
                  }
              }),
              v = (t.defined = function (t) {
                return "undefined" !== typeof t && null !== t;
              });
            t.attr = s;
            var x = (t.splat = function (t) {
                return u(t) ? t : [t];
              }),
              b = (t.syncTimeout = function (t, e, i) {
                return 0 < e ? setTimeout(t, e, i) : (t.call(0, i), -1);
              }),
              k = (t.clearTimeout = function (t) {
                v(t) && clearTimeout(t);
              }),
              M = (t.extend = function (t, e) {
                var i;
                for (i in (t || (t = {}), e)) t[i] = e[i];
                return t;
              });
            t.pick = o;
            var w = (t.css = function (e, i) {
                t.isMS &&
                  !t.svg &&
                  i &&
                  "undefined" !== typeof i.opacity &&
                  (i.filter = "alpha(opacity=" + 100 * i.opacity + ")"),
                  M(e.style, i);
              }),
              S = (t.createElement = function (t, e, i, s, o) {
                return (
                  (t = a.createElement(t)),
                  e && M(t, e),
                  o && w(t, { padding: "0", border: "none", margin: "0" }),
                  i && w(t, i),
                  s && s.appendChild(t),
                  t
                );
              }),
              T = (t.extendClass = function (t, e) {
                var i = function () {};
                return (i.prototype = new t()), M(i.prototype, e), i;
              }),
              A = (t.pad = function (t, e, i) {
                return (
                  Array((e || 2) + 1 - String(t).replace("-", "").length).join(
                    i || "0",
                  ) + t
                );
              }),
              P = (t.relativeLength = function (t, e, i) {
                return /%$/.test(t)
                  ? (e * parseFloat(t)) / 100 + (i || 0)
                  : parseFloat(t);
              }),
              L = (t.wrap = function (t, e, i) {
                var s = t[e];
                t[e] = function () {
                  var t = Array.prototype.slice.call(arguments),
                    e = arguments,
                    o = this;
                  return (
                    (o.proceed = function () {
                      s.apply(o, arguments.length ? arguments : e);
                    }),
                    t.unshift(s),
                    (t = i.apply(this, t)),
                    (o.proceed = null),
                    t
                  );
                };
              }),
              C = (t.format = function (e, i, s) {
                var o = "{",
                  r = !1,
                  a = [],
                  h = /f$/,
                  l = /\.([0-9])/,
                  c = t.defaultOptions.lang,
                  d = (s && s.time) || t.time;
                for (s = (s && s.numberFormatter) || X; e; ) {
                  var p = e.indexOf(o);
                  if (-1 === p) break;
                  var u = e.slice(0, p);
                  if (r) {
                    if (
                      ((o = n((u = u.split(":")).shift() || "", i)),
                      u.length && "number" === typeof o)
                    )
                      if (((u = u.join(":")), h.test(u))) {
                        var f = parseInt((u.match(l) || ["", "-1"])[1], 10);
                        null !== o &&
                          (o = s(
                            o,
                            f,
                            c.decimalPoint,
                            -1 < u.indexOf(",") ? c.thousandsSep : "",
                          ));
                      } else o = d.dateFormat(u, o);
                    a.push(o);
                  } else a.push(u);
                  (e = e.slice(p + 1)), (o = (r = !r) ? "}" : "{");
                }
                return a.push(e), a.join("");
              }),
              O = (t.getMagnitude = function (t) {
                return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
              }),
              E = (t.normalizeTickInterval = function (t, e, i, s, n) {
                var r = t,
                  a = t / (i = o(i, 1));
                for (
                  e ||
                    ((e = n
                      ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]
                      : [1, 2, 2.5, 5, 10]),
                    !1 === s &&
                      (1 === i
                        ? (e = e.filter(function (t) {
                            return 0 === t % 1;
                          }))
                        : 0.1 >= i && (e = [1 / i]))),
                    s = 0;
                  s < e.length &&
                  ((r = e[s]),
                  !(
                    (n && r * i >= t) ||
                    (!n && a <= (e[s] + (e[s + 1] || e[s])) / 2)
                  ));
                  s++
                );
                return N(r * i, -Math.round(Math.log(0.001) / Math.LN10));
              }),
              D = (t.stableSort = function (t, e) {
                var i,
                  s,
                  o = t.length;
                for (s = 0; s < o; s++) t[s].safeI = s;
                for (
                  t.sort(function (t, s) {
                    return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i;
                  }),
                    s = 0;
                  s < o;
                  s++
                )
                  delete t[s].safeI;
              }),
              I = (t.arrayMin = function (t) {
                for (var e = t.length, i = t[0]; e--; ) t[e] < i && (i = t[e]);
                return i;
              }),
              z = (t.arrayMax = function (t) {
                for (var e = t.length, i = t[0]; e--; ) t[e] > i && (i = t[e]);
                return i;
              }),
              B = (t.destroyObjectProperties = function (t, e) {
                _(t, function (i, s) {
                  i && i !== e && i.destroy && i.destroy(), delete t[s];
                });
              }),
              R = (t.discardElement = function (e) {
                var i = t.garbageBin;
                i || (i = S("div")), e && i.appendChild(e), (i.innerHTML = "");
              }),
              N = (t.correctFloat = function (t, e) {
                return parseFloat(t.toPrecision(e || 14));
              }),
              W = (t.setAnimation = function (t, e) {
                e.renderer.globalAnimation = o(
                  t,
                  e.options.chart.animation,
                  !0,
                );
              }),
              j = (t.animObject = function (t) {
                return i(t) ? e(t) : { duration: t ? 500 : 0 };
              }),
              G = (t.timeUnits = {
                millisecond: 1,
                second: 1e3,
                minute: 6e4,
                hour: 36e5,
                day: 864e5,
                week: 6048e5,
                month: 24192e5,
                year: 314496e5,
              }),
              X = (t.numberFormat = function (e, i, s, n) {
                (e = +e || 0), (i = +i);
                var r = t.defaultOptions.lang,
                  a = (e.toString().split(".")[1] || "").split("e")[0].length,
                  h = e.toString().split("e");
                if (-1 === i) i = Math.min(a, 20);
                else if (m(i)) {
                  if (i && h[1] && 0 > h[1]) {
                    var l = i + +h[1];
                    0 <= l
                      ? ((h[0] = (+h[0]).toExponential(l).split("e")[0]),
                        (i = l))
                      : ((h[0] = h[0].split(".")[0] || 0),
                        (e =
                          20 > i ? (h[0] * Math.pow(10, h[1])).toFixed(i) : 0),
                        (h[1] = 0));
                  }
                } else i = 2;
                var c = (
                  Math.abs(h[1] ? h[0] : e) + Math.pow(10, -Math.max(i, a) - 1)
                ).toFixed(i);
                return (
                  (l = 3 < (a = String(d(c))).length ? a.length % 3 : 0),
                  (s = o(s, r.decimalPoint)),
                  (n = o(n, r.thousandsSep)),
                  (e = (0 > e ? "-" : "") + (l ? a.substr(0, l) + n : "")),
                  (e += a.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + n)),
                  i && (e += s + c.slice(-i)),
                  h[1] && 0 !== +e && (e += "e" + h[1]),
                  e
                );
              });
            Math.easeInOutSine = function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            };
            var H = (t.getStyle = function (e, i, s) {
                return "width" === i
                  ? ((i = Math.min(e.offsetWidth, e.scrollWidth)),
                    (s =
                      e.getBoundingClientRect &&
                      e.getBoundingClientRect().width) < i &&
                      s >= i - 1 &&
                      (i = Math.floor(s)),
                    Math.max(
                      0,
                      i -
                        t.getStyle(e, "padding-left") -
                        t.getStyle(e, "padding-right"),
                    ))
                  : "height" === i
                    ? Math.max(
                        0,
                        Math.min(e.offsetHeight, e.scrollHeight) -
                          t.getStyle(e, "padding-top") -
                          t.getStyle(e, "padding-bottom"),
                      )
                    : (h.getComputedStyle || l(27, !0),
                      (e = h.getComputedStyle(e, void 0)) &&
                        ((e = e.getPropertyValue(i)),
                        o(s, "opacity" !== i) && (e = d(e))),
                      e);
              }),
              Y = (t.inArray = function (t, e, i) {
                return e.indexOf(t, i);
              }),
              F = (t.find = Array.prototype.find
                ? function (t, e) {
                    return t.find(e);
                  }
                : function (t, e) {
                    var i,
                      s = t.length;
                    for (i = 0; i < s; i++) if (e(t[i], i)) return t[i];
                  });
            t.keys = Object.keys;
            var U = (t.offset = function (t) {
                var e = a.documentElement;
                return {
                  top:
                    (t =
                      t.parentElement || t.parentNode
                        ? t.getBoundingClientRect()
                        : { top: 0, left: 0 }).top +
                    (h.pageYOffset || e.scrollTop) -
                    (e.clientTop || 0),
                  left:
                    t.left +
                    (h.pageXOffset || e.scrollLeft) -
                    (e.clientLeft || 0),
                };
              }),
              V = (t.stop = function (e, i) {
                for (var s = t.timers.length; s--; )
                  t.timers[s].elem !== e ||
                    (i && i !== t.timers[s].prop) ||
                    (t.timers[s].stopped = !0);
              }),
              _ = (t.objectEach = function (t, e, i) {
                for (var s in t)
                  Object.hasOwnProperty.call(t, s) &&
                    e.call(i || t[s], t[s], s, t);
              });
            _(
              {
                map: "map",
                each: "forEach",
                grep: "filter",
                reduce: "reduce",
                some: "some",
              },
              function (e, i) {
                t[i] = function (t) {
                  return Array.prototype[e].apply(
                    t,
                    [].slice.call(arguments, 1),
                  );
                };
              },
            );
            var Z = (t.addEvent = function (e, i, s, o) {
                void 0 === o && (o = {});
                var n = e.addEventListener || t.addEventListenerPolyfill,
                  r =
                    "function" === typeof e && e.prototype
                      ? (e.prototype.protoEvents =
                          e.prototype.protoEvents || {})
                      : (e.hcEvents = e.hcEvents || {});
                return (
                  t.Point &&
                    e instanceof t.Point &&
                    e.series &&
                    e.series.chart &&
                    (e.series.chart.runTrackerClick = !0),
                  n && n.call(e, i, s, !1),
                  r[i] || (r[i] = []),
                  r[i].push({
                    fn: s,
                    order: "number" === typeof o.order ? o.order : 1 / 0,
                  }),
                  r[i].sort(function (t, e) {
                    return t.order - e.order;
                  }),
                  function () {
                    K(e, i, s);
                  }
                );
              }),
              K = (t.removeEvent = function (e, i, s) {
                function o(i, s) {
                  var o =
                    e.removeEventListener || t.removeEventListenerPolyfill;
                  o && o.call(e, i, s, !1);
                }
                function n(t) {
                  var s;
                  if (e.nodeName) {
                    if (i) {
                      var n = {};
                      n[i] = !0;
                    } else n = t;
                    _(n, function (e, i) {
                      if (t[i]) for (s = t[i].length; s--; ) o(i, t[i][s].fn);
                    });
                  }
                }
                var r;
                ["protoEvents", "hcEvents"].forEach(function (t, a) {
                  var h = (a = a ? e : e.prototype) && a[t];
                  h &&
                    (i
                      ? ((r = h[i] || []),
                        s
                          ? ((h[i] = r.filter(function (t) {
                              return s !== t.fn;
                            })),
                            o(i, s))
                          : (n(h), (h[i] = [])))
                      : (n(h), (a[t] = {})));
                });
              }),
              q = (t.fireEvent = function (t, e, i, s) {
                var o;
                if (
                  ((i = i || {}),
                  a.createEvent && (t.dispatchEvent || t.fireEvent))
                ) {
                  var n = a.createEvent("Events");
                  n.initEvent(e, !0, !0),
                    M(n, i),
                    t.dispatchEvent ? t.dispatchEvent(n) : t.fireEvent(e, n);
                } else
                  i.target ||
                    M(i, {
                      preventDefault: function () {
                        i.defaultPrevented = !0;
                      },
                      target: t,
                      type: e,
                    }),
                    (function (e, s) {
                      void 0 === e && (e = []), void 0 === s && (s = []);
                      var n = 0,
                        r = 0,
                        a = e.length + s.length;
                      for (o = 0; o < a; o++)
                        !1 ===
                          (e[n]
                            ? s[r]
                              ? e[n].order <= s[r].order
                                ? e[n++]
                                : s[r++]
                              : e[n++]
                            : s[r++]
                          ).fn.call(t, i) && i.preventDefault();
                    })(
                      t.protoEvents && t.protoEvents[e],
                      t.hcEvents && t.hcEvents[e],
                    );
                s && !i.defaultPrevented && s.call(t, i);
              }),
              $ = (t.animate = function (t, s, o) {
                var n,
                  r,
                  a,
                  h = "";
                if (!i(o)) {
                  var l = arguments;
                  o = { duration: l[2], easing: l[3], complete: l[4] };
                }
                m(o.duration) || (o.duration = 400),
                  (o.easing =
                    "function" === typeof o.easing
                      ? o.easing
                      : Math[o.easing] || Math.easeInOutSine),
                  (o.curAnim = e(s)),
                  _(s, function (e, i) {
                    V(t, i),
                      (a = new c(t, o, i)),
                      (r = null),
                      "d" === i && u(s.d)
                        ? ((a.paths = a.initPath(t, t.pathArray, s.d)),
                          (a.toD = s.d),
                          (n = 0),
                          (r = 1))
                        : t.attr
                          ? (n = t.attr(i))
                          : ((n = parseFloat(H(t, i)) || 0),
                            "opacity" !== i && (h = "px")),
                      r || (r = e),
                      r &&
                        r.match &&
                        r.match("px") &&
                        (r = r.replace(/px/g, "")),
                      a.run(n, r, h);
                  });
              }),
              J = (t.seriesType = function (i, s, o, n, r) {
                var a = t.getOptions(),
                  h = t.seriesTypes;
                return (
                  (a.plotOptions[i] = e(a.plotOptions[s], o)),
                  (h[i] = T(h[s] || function () {}, n)),
                  (h[i].prototype.type = i),
                  r && (h[i].prototype.pointClass = T(t.Point, r)),
                  h[i]
                );
              }),
              Q = (t.uniqueKey = (function () {
                var t = Math.random().toString(36).substring(2, 9),
                  e = 0;
                return function () {
                  return "highcharts-" + t + "-" + e++;
                };
              })()),
              tt = (t.isFunction = function (t) {
                return "function" === typeof t;
              });
            return (
              h.jQuery &&
                (h.jQuery.fn.highcharts = function () {
                  var e = [].slice.call(arguments);
                  if (this[0])
                    return e[0]
                      ? (new t[p(e[0]) ? e.shift() : "Chart"](
                          this[0],
                          e[0],
                          e[1],
                        ),
                        this)
                      : r[s(this[0], "data-highcharts-chart")];
                }),
              {
                Fx: t.Fx,
                addEvent: Z,
                animate: $,
                animObject: j,
                arrayMax: z,
                arrayMin: I,
                attr: s,
                clamp: function (t, e, i) {
                  return t > e ? (t < i ? t : i) : e;
                },
                clearTimeout: k,
                correctFloat: N,
                createElement: S,
                css: w,
                defined: v,
                destroyObjectProperties: B,
                discardElement: R,
                erase: y,
                error: l,
                extend: M,
                extendClass: T,
                find: F,
                fireEvent: q,
                format: C,
                getMagnitude: O,
                getNestedProperty: n,
                getStyle: H,
                inArray: Y,
                isArray: u,
                isClass: g,
                isDOMElement: f,
                isFunction: tt,
                isNumber: m,
                isObject: i,
                isString: p,
                merge: e,
                normalizeTickInterval: E,
                numberFormat: X,
                objectEach: _,
                offset: U,
                pad: A,
                pick: o,
                pInt: d,
                relativeLength: P,
                removeEvent: K,
                seriesType: J,
                setAnimation: W,
                splat: x,
                stableSort: D,
                stop: V,
                syncTimeout: b,
                timeUnits: G,
                uniqueKey: Q,
                wrap: L,
              }
            );
          }),
          e(
            i,
            "parts/Color.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.isNumber,
                s = e.merge,
                o = e.pInt;
              return (
                (e = (function () {
                  function t(e) {
                    if (
                      ((this.parsers = [
                        {
                          regex:
                            /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                          parse: function (t) {
                            return [
                              o(t[1]),
                              o(t[2]),
                              o(t[3]),
                              parseFloat(t[4], 10),
                            ];
                          },
                        },
                        {
                          regex:
                            /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                          parse: function (t) {
                            return [o(t[1]), o(t[2]), o(t[3]), 1];
                          },
                        },
                      ]),
                      (this.rgba = []),
                      !(this instanceof t))
                    )
                      return new t(e);
                    this.init(e);
                  }
                  return (
                    (t.parse = function (e) {
                      return new t(e);
                    }),
                    (t.prototype.init = function (e) {
                      var i, s;
                      if (
                        (this.input = e =
                          t.names[e && e.toLowerCase ? e.toLowerCase() : ""] ||
                          e) &&
                        e.stops
                      )
                        this.stops = e.stops.map(function (e) {
                          return new t(e[1]);
                        });
                      else {
                        if (e && e.charAt && "#" === e.charAt()) {
                          var o = e.length;
                          (e = parseInt(e.substr(1), 16)),
                            7 === o
                              ? (i = [
                                  (16711680 & e) >> 16,
                                  (65280 & e) >> 8,
                                  255 & e,
                                  1,
                                ])
                              : 4 === o &&
                                (i = [
                                  ((3840 & e) >> 4) | ((3840 & e) >> 8),
                                  ((240 & e) >> 4) | (240 & e),
                                  ((15 & e) << 4) | (15 & e),
                                  1,
                                ]);
                        }
                        if (!i)
                          for (s = this.parsers.length; s-- && !i; ) {
                            var n = this.parsers[s];
                            (o = n.regex.exec(e)) && (i = n.parse(o));
                          }
                      }
                      this.rgba = i || [];
                    }),
                    (t.prototype.get = function (t) {
                      var e = this.input,
                        o = this.rgba;
                      if ("undefined" !== typeof this.stops) {
                        var n = s(e);
                        (n.stops = [].concat(n.stops)),
                          this.stops.forEach(function (e, i) {
                            n.stops[i] = [n.stops[i][0], e.get(t)];
                          });
                      } else
                        n =
                          o && i(o[0])
                            ? "rgb" === t || (!t && 1 === o[3])
                              ? "rgb(" + o[0] + "," + o[1] + "," + o[2] + ")"
                              : "a" === t
                                ? o[3]
                                : "rgba(" + o.join(",") + ")"
                            : e;
                      return n;
                    }),
                    (t.prototype.brighten = function (t) {
                      var e,
                        s = this.rgba;
                      if (this.stops)
                        this.stops.forEach(function (e) {
                          e.brighten(t);
                        });
                      else if (i(t) && 0 !== t)
                        for (e = 0; 3 > e; e++)
                          (s[e] += o(255 * t)),
                            0 > s[e] && (s[e] = 0),
                            255 < s[e] && (s[e] = 255);
                      return this;
                    }),
                    (t.prototype.setOpacity = function (t) {
                      return (this.rgba[3] = t), this;
                    }),
                    (t.prototype.tweenTo = function (t, e) {
                      var i = this.rgba,
                        s = t.rgba;
                      return (
                        s.length && i && i.length
                          ? (e =
                              ((t = 1 !== s[3] || 1 !== i[3])
                                ? "rgba("
                                : "rgb(") +
                              Math.round(s[0] + (i[0] - s[0]) * (1 - e)) +
                              "," +
                              Math.round(s[1] + (i[1] - s[1]) * (1 - e)) +
                              "," +
                              Math.round(s[2] + (i[2] - s[2]) * (1 - e)) +
                              (t
                                ? "," + (s[3] + (i[3] - s[3]) * (1 - e))
                                : "") +
                              ")")
                          : (e = t.input || "none"),
                        e
                      );
                    }),
                    (t.names = { white: "#ffffff", black: "#000000" }),
                    t
                  );
                })()),
                (t.Color = e),
                (t.color = e.parse),
                t.Color
              );
            },
          ),
          e(
            i,
            "parts/SVGElement.js",
            [
              i["parts/Color.js"],
              i["parts/Globals.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i) {
              var s = e.deg2rad,
                o = e.doc,
                n = e.hasTouch,
                r = e.isFirefox,
                a = e.noop,
                h = e.svg,
                l = e.SVG_NS,
                c = e.win,
                d = i.animate,
                p = i.animObject,
                u = i.attr,
                f = i.createElement,
                g = i.css,
                m = i.defined,
                y = i.erase,
                v = i.extend,
                x = i.fireEvent,
                b = i.inArray,
                k = i.isArray,
                M = i.isFunction,
                w = i.isNumber,
                S = i.isString,
                T = i.merge,
                A = i.objectEach,
                P = i.pick,
                L = i.pInt,
                C = i.stop,
                O = i.uniqueKey;
              return (
                ((i = (function () {
                  function i() {
                    (this.height = this.element = void 0),
                      (this.opacity = 1),
                      (this.renderer = void 0),
                      (this.SVG_NS = l),
                      (this.symbolCustomAttribs =
                        "x y width height r start end innerR anchorX anchorY rounded".split(
                          " ",
                        )),
                      (this.textProps =
                        "color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(
                          " ",
                        )),
                      (this.width = void 0);
                  }
                  return (
                    (i.prototype._defaultGetter = function (t) {
                      return (
                        (t = P(
                          this[t + "Value"],
                          this[t],
                          this.element ? this.element.getAttribute(t) : null,
                          0,
                        )),
                        /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)),
                        t
                      );
                    }),
                    (i.prototype._defaultSetter = function (t, e, i) {
                      i.setAttribute(e, t);
                    }),
                    (i.prototype.add = function (t) {
                      var e = this.renderer,
                        i = this.element;
                      if (
                        (t && (this.parentGroup = t),
                        (this.parentInverted = t && t.inverted),
                        "undefined" !== typeof this.textStr &&
                          e.buildText(this),
                        (this.added = !0),
                        !t || t.handleZ || this.zIndex)
                      )
                        var s = this.zIndexSetter();
                      return (
                        s || (t ? t.element : e.box).appendChild(i),
                        this.onAdd && this.onAdd(),
                        this
                      );
                    }),
                    (i.prototype.addClass = function (t, e) {
                      var i = e ? "" : this.attr("class") || "";
                      return (
                        (t = (t || "")
                          .split(/ /g)
                          .reduce(
                            function (t, e) {
                              return -1 === i.indexOf(e) && t.push(e), t;
                            },
                            i ? [i] : [],
                          )
                          .join(" ")) !== i && this.attr("class", t),
                        this
                      );
                    }),
                    (i.prototype.afterSetters = function () {
                      this.doTransform &&
                        (this.updateTransform(), (this.doTransform = !1));
                    }),
                    (i.prototype.align = function (t, e, i) {
                      var s,
                        o,
                        n,
                        r = {},
                        a = this.renderer,
                        h = a.alignedObjects;
                      t
                        ? ((this.alignOptions = t),
                          (this.alignByTranslate = e),
                          (!i || S(i)) &&
                            ((this.alignTo = s = i || "renderer"),
                            y(h, this),
                            h.push(this),
                            (i = void 0)))
                        : ((t = this.alignOptions),
                          (e = this.alignByTranslate),
                          (s = this.alignTo)),
                        (i = P(i, a[s], a)),
                        (s = t.align),
                        (a = t.verticalAlign),
                        (h = (i.x || 0) + (t.x || 0));
                      var l = (i.y || 0) + (t.y || 0);
                      return (
                        "right" === s ? (o = 1) : "center" === s && (o = 2),
                        o && (h += (i.width - (t.width || 0)) / o),
                        (r[e ? "translateX" : "x"] = Math.round(h)),
                        "bottom" === a ? (n = 1) : "middle" === a && (n = 2),
                        n && (l += (i.height - (t.height || 0)) / n),
                        (r[e ? "translateY" : "y"] = Math.round(l)),
                        this[this.placed ? "animate" : "attr"](r),
                        (this.placed = !0),
                        (this.alignAttr = r),
                        this
                      );
                    }),
                    (i.prototype.alignSetter = function (t) {
                      var e = { left: "start", center: "middle", right: "end" };
                      e[t] &&
                        ((this.alignValue = t),
                        this.element.setAttribute("text-anchor", e[t]));
                    }),
                    (i.prototype.animate = function (t, e, i) {
                      var s = p(P(e, this.renderer.globalAnimation, !0));
                      return (
                        P(o.hidden, o.msHidden, o.webkitHidden, !1) &&
                          (s.duration = 0),
                        0 !== s.duration
                          ? (i && (s.complete = i), d(this, t, s))
                          : (this.attr(t, void 0, i),
                            A(
                              t,
                              function (t, e) {
                                s.step &&
                                  s.step.call(this, t, { prop: e, pos: 1 });
                              },
                              this,
                            )),
                        this
                      );
                    }),
                    (i.prototype.applyTextOutline = function (t) {
                      var i,
                        s = this.element;
                      -1 !== t.indexOf("contrast") &&
                        (t = t.replace(
                          /contrast/g,
                          this.renderer.getContrast(s.style.fill),
                        ));
                      var o = (t = t.split(" "))[t.length - 1];
                      if ((i = t[0]) && "none" !== i && e.svg) {
                        (this.fakeTS = !0),
                          (t = [].slice.call(s.getElementsByTagName("tspan"))),
                          (this.ySetter = this.xSetter),
                          (i = i.replace(
                            /(^[\d\.]+)(.*?)$/g,
                            function (t, e, i) {
                              return 2 * e + i;
                            },
                          )),
                          this.removeTextOutline(t);
                        var n =
                            !!s.textContent &&
                            /^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(
                              s.textContent,
                            ),
                          a = s.firstChild;
                        t.forEach(function (t, e) {
                          0 === e &&
                            (t.setAttribute("x", s.getAttribute("x")),
                            (e = s.getAttribute("y")),
                            t.setAttribute("y", e || 0),
                            null === e && s.setAttribute("y", 0)),
                            (e = t.cloneNode(!0)),
                            u(n && !r ? t : e, {
                              class: "highcharts-text-outline",
                              fill: o,
                              stroke: o,
                              "stroke-width": i,
                              "stroke-linejoin": "round",
                            }),
                            s.insertBefore(e, a);
                        }),
                          n &&
                            r &&
                            t[0] &&
                            (((t = t[0].cloneNode(!0)).textContent = " "),
                            s.insertBefore(t, a));
                      }
                    }),
                    (i.prototype.attr = function (t, e, i, s) {
                      var o,
                        n,
                        r,
                        a = this.element,
                        h = this,
                        l = this.symbolCustomAttribs;
                      if ("string" === typeof t && "undefined" !== typeof e) {
                        var c = t;
                        (t = {})[c] = e;
                      }
                      return (
                        "string" === typeof t
                          ? (h = (
                              this[t + "Getter"] || this._defaultGetter
                            ).call(this, t, a))
                          : (A(
                              t,
                              function (e, i) {
                                (n = !1),
                                  s || C(this, i),
                                  this.symbolName &&
                                    -1 !== b(i, l) &&
                                    (o || (this.symbolAttr(t), (o = !0)),
                                    (n = !0)),
                                  !this.rotation ||
                                    ("x" !== i && "y" !== i) ||
                                    (this.doTransform = !0),
                                  n ||
                                    ((r =
                                      this[i + "Setter"] ||
                                      this._defaultSetter).call(this, e, i, a),
                                    !this.styledMode &&
                                      this.shadows &&
                                      /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(
                                        i,
                                      ) &&
                                      this.updateShadows(i, e, r));
                              },
                              this,
                            ),
                            this.afterSetters()),
                        i && i.call(this),
                        h
                      );
                    }),
                    (i.prototype.clip = function (t) {
                      return this.attr(
                        "clip-path",
                        t
                          ? "url(" + this.renderer.url + "#" + t.id + ")"
                          : "none",
                      );
                    }),
                    (i.prototype.crisp = function (t, e) {
                      e = e || t.strokeWidth || 0;
                      var i = (Math.round(e) % 2) / 2;
                      return (
                        (t.x = Math.floor(t.x || this.x || 0) + i),
                        (t.y = Math.floor(t.y || this.y || 0) + i),
                        (t.width = Math.floor(
                          (t.width || this.width || 0) - 2 * i,
                        )),
                        (t.height = Math.floor(
                          (t.height || this.height || 0) - 2 * i,
                        )),
                        m(t.strokeWidth) && (t.strokeWidth = e),
                        t
                      );
                    }),
                    (i.prototype.complexColor = function (e, i, s) {
                      var o,
                        n,
                        r,
                        a,
                        h,
                        l,
                        c,
                        d,
                        p,
                        u,
                        f,
                        g = this.renderer,
                        y = [];
                      x(
                        this.renderer,
                        "complexColor",
                        { args: arguments },
                        function () {
                          if (
                            (e.radialGradient
                              ? (n = "radialGradient")
                              : e.linearGradient && (n = "linearGradient"),
                            n)
                          ) {
                            if (
                              ((r = e[n]),
                              (h = g.gradients),
                              (l = e.stops),
                              (p = s.radialReference),
                              k(r) &&
                                (e[n] = r =
                                  {
                                    x1: r[0],
                                    y1: r[1],
                                    x2: r[2],
                                    y2: r[3],
                                    gradientUnits: "userSpaceOnUse",
                                  }),
                              "radialGradient" === n &&
                                p &&
                                !m(r.gradientUnits) &&
                                ((a = r),
                                (r = T(r, g.getRadialAttr(p, a), {
                                  gradientUnits: "userSpaceOnUse",
                                }))),
                              A(r, function (t, e) {
                                "id" !== e && y.push(e, t);
                              }),
                              A(l, function (t) {
                                y.push(t);
                              }),
                              (y = y.join(",")),
                              h[y])
                            )
                              u = h[y].attr("id");
                            else {
                              r.id = u = O();
                              var v = (h[y] = g
                                .createElement(n)
                                .attr(r)
                                .add(g.defs));
                              (v.radAttr = a),
                                (v.stops = []),
                                l.forEach(function (e) {
                                  0 === e[1].indexOf("rgba")
                                    ? ((o = t.parse(e[1])),
                                      (c = o.get("rgb")),
                                      (d = o.get("a")))
                                    : ((c = e[1]), (d = 1)),
                                    (e = g
                                      .createElement("stop")
                                      .attr({
                                        offset: e[0],
                                        "stop-color": c,
                                        "stop-opacity": d,
                                      })
                                      .add(v)),
                                    v.stops.push(e);
                                });
                            }
                            (f = "url(" + g.url + "#" + u + ")"),
                              s.setAttribute(i, f),
                              (s.gradient = y),
                              (e.toString = function () {
                                return f;
                              });
                          }
                        },
                      );
                    }),
                    (i.prototype.css = function (t) {
                      var e = this.styles,
                        i = {},
                        s = this.element,
                        o = "",
                        n = !e,
                        r = ["textOutline", "textOverflow", "width"];
                      if (
                        (t && t.color && (t.fill = t.color),
                        e &&
                          A(t, function (t, s) {
                            e && e[s] !== t && ((i[s] = t), (n = !0));
                          }),
                        n)
                      ) {
                        if ((e && (t = v(e, i)), t))
                          if (null === t.width || "auto" === t.width)
                            delete this.textWidth;
                          else if (
                            "text" === s.nodeName.toLowerCase() &&
                            t.width
                          )
                            var a = (this.textWidth = L(t.width));
                        if (
                          ((this.styles = t),
                          a && !h && this.renderer.forExport && delete t.width,
                          s.namespaceURI === this.SVG_NS)
                        ) {
                          var l = function (t, e) {
                            return "-" + e.toLowerCase();
                          };
                          A(t, function (t, e) {
                            -1 === r.indexOf(e) &&
                              (o += e.replace(/([A-Z])/g, l) + ":" + t + ";");
                          }),
                            o && u(s, "style", o);
                        } else g(s, t);
                        this.added &&
                          ("text" === this.element.nodeName &&
                            this.renderer.buildText(this),
                          t &&
                            t.textOutline &&
                            this.applyTextOutline(t.textOutline));
                      }
                      return this;
                    }),
                    (i.prototype.dashstyleSetter = function (t) {
                      var e = this["stroke-width"];
                      if (
                        ("inherit" === e && (e = 1), (t = t && t.toLowerCase()))
                      ) {
                        var i = t
                          .replace("shortdashdotdot", "3,1,1,1,1,1,")
                          .replace("shortdashdot", "3,1,1,1")
                          .replace("shortdot", "1,1,")
                          .replace("shortdash", "3,1,")
                          .replace("longdash", "8,3,")
                          .replace(/dot/g, "1,3,")
                          .replace("dash", "4,3,")
                          .replace(/,$/, "")
                          .split(",");
                        for (t = i.length; t--; )
                          i[t] = "" + L(i[t]) * P(e, NaN);
                        (t = i.join(",").replace(/NaN/g, "none")),
                          this.element.setAttribute("stroke-dasharray", t);
                      }
                    }),
                    (i.prototype.destroy = function () {
                      var t = this,
                        e = t.element || {},
                        i = t.renderer,
                        s =
                          (i.isSVG && "SPAN" === e.nodeName && t.parentGroup) ||
                          void 0,
                        o = e.ownerSVGElement;
                      if (
                        ((e.onclick =
                          e.onmouseout =
                          e.onmouseover =
                          e.onmousemove =
                          e.point =
                            null),
                        C(t),
                        t.clipPath && o)
                      ) {
                        var n = t.clipPath;
                        [].forEach.call(
                          o.querySelectorAll("[clip-path],[CLIP-PATH]"),
                          function (t) {
                            -1 <
                              t
                                .getAttribute("clip-path")
                                .indexOf(n.element.id) &&
                              t.removeAttribute("clip-path");
                          },
                        ),
                          (t.clipPath = n.destroy());
                      }
                      if (t.stops) {
                        for (o = 0; o < t.stops.length; o++)
                          t.stops[o].destroy();
                        (t.stops.length = 0), (t.stops = void 0);
                      }
                      for (
                        t.safeRemoveChild(e),
                          i.styledMode || t.destroyShadows();
                        s && s.div && 0 === s.div.childNodes.length;

                      )
                        (e = s.parentGroup),
                          t.safeRemoveChild(s.div),
                          delete s.div,
                          (s = e);
                      t.alignTo && y(i.alignedObjects, t),
                        A(t, function (e, i) {
                          t[i] &&
                            t[i].parentGroup === t &&
                            t[i].destroy &&
                            t[i].destroy(),
                            delete t[i];
                        });
                    }),
                    (i.prototype.destroyShadows = function () {
                      (this.shadows || []).forEach(function (t) {
                        this.safeRemoveChild(t);
                      }, this),
                        (this.shadows = void 0);
                    }),
                    (i.prototype.destroyTextPath = function (t, e) {
                      var i = t.getElementsByTagName("text")[0];
                      if (i) {
                        if (
                          (i.removeAttribute("dx"),
                          i.removeAttribute("dy"),
                          e.element.setAttribute("id", ""),
                          this.textPathWrapper &&
                            i.getElementsByTagName("textPath").length)
                        ) {
                          for (
                            t = this.textPathWrapper.element.childNodes;
                            t.length;

                          )
                            i.appendChild(t[0]);
                          i.removeChild(this.textPathWrapper.element);
                        }
                      } else
                        (t.getAttribute("dx") || t.getAttribute("dy")) &&
                          (t.removeAttribute("dx"), t.removeAttribute("dy"));
                      this.textPathWrapper &&
                        (this.textPathWrapper = this.textPathWrapper.destroy());
                    }),
                    (i.prototype.dSetter = function (t, e, i) {
                      k(t) &&
                        ("string" === typeof t[0] &&
                          (t = this.renderer.pathToSegments(t)),
                        (this.pathArray = t),
                        (t = t.reduce(function (t, e, i) {
                          return e && e.join
                            ? (i ? t + " " : "") + e.join(" ")
                            : (e || "").toString();
                        }, ""))),
                        /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"),
                        this[e] !== t && (i.setAttribute(e, t), (this[e] = t));
                    }),
                    (i.prototype.fadeOut = function (t) {
                      var e = this;
                      e.animate(
                        { opacity: 0 },
                        {
                          duration: P(t, 150),
                          complete: function () {
                            e.attr({ y: -9999 }).hide();
                          },
                        },
                      );
                    }),
                    (i.prototype.fillSetter = function (t, e, i) {
                      "string" === typeof t
                        ? i.setAttribute(e, t)
                        : t && this.complexColor(t, e, i);
                    }),
                    (i.prototype.getBBox = function (t, e) {
                      var o,
                        n = this.renderer,
                        r = this.element,
                        a = this.styles,
                        h = this.textStr,
                        l = n.cache,
                        c = n.cacheKeys,
                        d = r.namespaceURI === this.SVG_NS;
                      e = P(e, this.rotation, 0);
                      var p = n.styledMode
                        ? r && i.prototype.getStyle.call(r, "font-size")
                        : a && a.fontSize;
                      if (m(h)) {
                        var u = h.toString();
                        -1 === u.indexOf("<") && (u = u.replace(/[0-9]/g, "0")),
                          (u += [
                            "",
                            e,
                            p,
                            this.textWidth,
                            a && a.textOverflow,
                            a && a.fontWeight,
                          ].join());
                      }
                      if ((u && !t && (o = l[u]), !o)) {
                        if (d || n.forExport) {
                          try {
                            var f =
                              this.fakeTS &&
                              function (t) {
                                [].forEach.call(
                                  r.querySelectorAll(
                                    ".highcharts-text-outline",
                                  ),
                                  function (e) {
                                    e.style.display = t;
                                  },
                                );
                              };
                            M(f) && f("none"),
                              (o = r.getBBox
                                ? v({}, r.getBBox())
                                : {
                                    width: r.offsetWidth,
                                    height: r.offsetHeight,
                                  }),
                              M(f) && f("");
                          } catch (g) {}
                          (!o || 0 > o.width) && (o = { width: 0, height: 0 });
                        } else o = this.htmlGetBBox();
                        if (
                          (n.isSVG &&
                            ((t = o.width),
                            (n = o.height),
                            d &&
                              (o.height = n =
                                { "11px,17": 14, "13px,20": 16 }[
                                  a && a.fontSize + "," + Math.round(n)
                                ] || n),
                            e &&
                              ((a = e * s),
                              (o.width =
                                Math.abs(n * Math.sin(a)) +
                                Math.abs(t * Math.cos(a))),
                              (o.height =
                                Math.abs(n * Math.cos(a)) +
                                Math.abs(t * Math.sin(a))))),
                          u && 0 < o.height)
                        ) {
                          for (; 250 < c.length; ) delete l[c.shift()];
                          l[u] || c.push(u), (l[u] = o);
                        }
                      }
                      return o;
                    }),
                    (i.prototype.getStyle = function (t) {
                      return c
                        .getComputedStyle(this.element || this, "")
                        .getPropertyValue(t);
                    }),
                    (i.prototype.hasClass = function (t) {
                      return (
                        -1 !== ("" + this.attr("class")).split(" ").indexOf(t)
                      );
                    }),
                    (i.prototype.hide = function (t) {
                      return (
                        t
                          ? this.attr({ y: -9999 })
                          : this.attr({ visibility: "hidden" }),
                        this
                      );
                    }),
                    (i.prototype.htmlGetBBox = function () {
                      return { height: 0, width: 0, x: 0, y: 0 };
                    }),
                    (i.prototype.init = function (t, e) {
                      (this.element =
                        "span" === e
                          ? f(e)
                          : o.createElementNS(this.SVG_NS, e)),
                        (this.renderer = t),
                        x(this, "afterInit");
                    }),
                    (i.prototype.invert = function (t) {
                      return (this.inverted = t), this.updateTransform(), this;
                    }),
                    (i.prototype.on = function (t, e) {
                      var i,
                        s,
                        o,
                        r = this.element;
                      return (
                        n && "click" === t
                          ? ((r.ontouchstart = function (t) {
                              (i = t.touches[0].clientX),
                                (s = t.touches[0].clientY);
                            }),
                            (r.ontouchend = function (t) {
                              (i &&
                                4 <=
                                  Math.sqrt(
                                    Math.pow(
                                      i - t.changedTouches[0].clientX,
                                      2,
                                    ) +
                                      Math.pow(
                                        s - t.changedTouches[0].clientY,
                                        2,
                                      ),
                                  )) ||
                                e.call(r, t),
                                (o = !0),
                                t.preventDefault();
                            }),
                            (r.onclick = function (t) {
                              o || e.call(r, t);
                            }))
                          : (r["on" + t] = e),
                        this
                      );
                    }),
                    (i.prototype.opacitySetter = function (t, e, i) {
                      (this[e] = t), i.setAttribute(e, t);
                    }),
                    (i.prototype.removeClass = function (t) {
                      return this.attr(
                        "class",
                        ("" + this.attr("class")).replace(
                          S(t) ? new RegExp(" ?" + t + " ?") : t,
                          "",
                        ),
                      );
                    }),
                    (i.prototype.removeTextOutline = function (t) {
                      for (var e, i = t.length; i--; )
                        "highcharts-text-outline" ===
                          (e = t[i]).getAttribute("class") &&
                          y(t, this.element.removeChild(e));
                    }),
                    (i.prototype.safeRemoveChild = function (t) {
                      var e = t.parentNode;
                      e && e.removeChild(t);
                    }),
                    (i.prototype.setRadialReference = function (t) {
                      var e =
                        this.element.gradient &&
                        this.renderer.gradients[this.element.gradient];
                      return (
                        (this.element.radialReference = t),
                        e &&
                          e.radAttr &&
                          e.animate(this.renderer.getRadialAttr(t, e.radAttr)),
                        this
                      );
                    }),
                    (i.prototype.setTextPath = function (t, e) {
                      var i = this.element,
                        s = { textAnchor: "text-anchor" },
                        o = !1,
                        n = this.textPathWrapper,
                        r = !n,
                        h = (e = T(
                          !0,
                          {
                            enabled: !0,
                            attributes: {
                              dy: -5,
                              startOffset: "50%",
                              textAnchor: "middle",
                            },
                          },
                          e,
                        )).attributes;
                      if (t && e && e.enabled) {
                        n && null === n.element.parentNode
                          ? ((r = !0), (n = n.destroy()))
                          : n &&
                            this.removeTextOutline.call(
                              n.parentGroup,
                              [].slice.call(i.getElementsByTagName("tspan")),
                            ),
                          this.options &&
                            this.options.padding &&
                            (h.dx = -this.options.padding),
                          n ||
                            ((this.textPathWrapper = n =
                              this.renderer.createElement("textPath")),
                            (o = !0));
                        var l = n.element;
                        if (
                          ((e = t.element.getAttribute("id")) ||
                            t.element.setAttribute("id", (e = O())),
                          r)
                        )
                          for (t = i.getElementsByTagName("tspan"); t.length; )
                            t[0].setAttribute("y", 0),
                              w(h.dx) && t[0].setAttribute("x", -h.dx),
                              l.appendChild(t[0]);
                        o &&
                          n &&
                          n.add({ element: this.text ? this.text.element : i }),
                          l.setAttributeNS(
                            "http://www.w3.org/1999/xlink",
                            "href",
                            this.renderer.url + "#" + e,
                          ),
                          m(h.dy) &&
                            (l.parentNode.setAttribute("dy", h.dy),
                            delete h.dy),
                          m(h.dx) &&
                            (l.parentNode.setAttribute("dx", h.dx),
                            delete h.dx),
                          A(h, function (t, e) {
                            l.setAttribute(s[e] || e, t);
                          }),
                          i.removeAttribute("transform"),
                          this.removeTextOutline.call(
                            n,
                            [].slice.call(i.getElementsByTagName("tspan")),
                          ),
                          this.text &&
                            !this.renderer.styledMode &&
                            this.attr({ fill: "none", "stroke-width": 0 }),
                          (this.applyTextOutline = this.updateTransform = a);
                      } else
                        n &&
                          (delete this.updateTransform,
                          delete this.applyTextOutline,
                          this.destroyTextPath(i, t),
                          this.updateTransform(),
                          this.options &&
                            this.options.rotation &&
                            this.applyTextOutline(
                              this.options.style.textOutline,
                            ));
                      return this;
                    }),
                    (i.prototype.shadow = function (t, e, i) {
                      var s,
                        o = [],
                        n = this.element,
                        r = !1,
                        a = this.oldShadowOptions,
                        h = {
                          color: "#000000",
                          offsetX: 1,
                          offsetY: 1,
                          opacity: 0.15,
                          width: 3,
                        };
                      if (
                        (!0 === t
                          ? (s = h)
                          : "object" === typeof t && (s = v(h, t)),
                        s &&
                          (s &&
                            a &&
                            A(s, function (t, e) {
                              t !== a[e] && (r = !0);
                            }),
                          r && this.destroyShadows(),
                          (this.oldShadowOptions = s)),
                        s)
                      ) {
                        if (!this.shadows) {
                          var l = s.opacity / s.width,
                            c = this.parentInverted
                              ? "translate(-1,-1)"
                              : "translate(" +
                                s.offsetX +
                                ", " +
                                s.offsetY +
                                ")";
                          for (h = 1; h <= s.width; h++) {
                            var d = n.cloneNode(!1),
                              p = 2 * s.width + 1 - 2 * h;
                            u(d, {
                              stroke: t.color || "#000000",
                              "stroke-opacity": l * h,
                              "stroke-width": p,
                              transform: c,
                              fill: "none",
                            }),
                              d.setAttribute(
                                "class",
                                (d.getAttribute("class") || "") +
                                  " highcharts-shadow",
                              ),
                              i &&
                                (u(
                                  d,
                                  "height",
                                  Math.max(u(d, "height") - p, 0),
                                ),
                                (d.cutHeight = p)),
                              e
                                ? e.element.appendChild(d)
                                : n.parentNode &&
                                  n.parentNode.insertBefore(d, n),
                              o.push(d);
                          }
                          this.shadows = o;
                        }
                      } else this.destroyShadows();
                      return this;
                    }),
                    (i.prototype.show = function (t) {
                      return this.attr({
                        visibility: t ? "inherit" : "visible",
                      });
                    }),
                    (i.prototype.strokeSetter = function (t, e, s) {
                      (this[e] = t),
                        this.stroke && this["stroke-width"]
                          ? (i.prototype.fillSetter.call(
                              this,
                              this.stroke,
                              "stroke",
                              s,
                            ),
                            s.setAttribute(
                              "stroke-width",
                              this["stroke-width"],
                            ),
                            (this.hasStroke = !0))
                          : "stroke-width" === e && 0 === t && this.hasStroke
                            ? (s.removeAttribute("stroke"),
                              (this.hasStroke = !1))
                            : this.renderer.styledMode &&
                              this["stroke-width"] &&
                              (s.setAttribute(
                                "stroke-width",
                                this["stroke-width"],
                              ),
                              (this.hasStroke = !0));
                    }),
                    (i.prototype.strokeWidth = function () {
                      if (!this.renderer.styledMode)
                        return this["stroke-width"] || 0;
                      var t = this.getStyle("stroke-width"),
                        e = 0;
                      if (t.indexOf("px") === t.length - 2) e = L(t);
                      else if ("" !== t) {
                        var i = o.createElementNS(l, "rect");
                        u(i, { width: t, "stroke-width": 0 }),
                          this.element.parentNode.appendChild(i),
                          (e = i.getBBox().width),
                          i.parentNode.removeChild(i);
                      }
                      return e;
                    }),
                    (i.prototype.symbolAttr = function (t) {
                      var e = this;
                      "x y r start end width height innerR anchorX anchorY clockwise"
                        .split(" ")
                        .forEach(function (i) {
                          e[i] = P(t[i], e[i]);
                        }),
                        e.attr({
                          d: e.renderer.symbols[e.symbolName](
                            e.x,
                            e.y,
                            e.width,
                            e.height,
                            e,
                          ),
                        });
                    }),
                    (i.prototype.textSetter = function (t) {
                      t !== this.textStr &&
                        (delete this.textPxLength,
                        (this.textStr = t),
                        this.added && this.renderer.buildText(this));
                    }),
                    (i.prototype.titleSetter = function (t) {
                      var e = this.element.getElementsByTagName("title")[0];
                      e ||
                        ((e = o.createElementNS(this.SVG_NS, "title")),
                        this.element.appendChild(e)),
                        e.firstChild && e.removeChild(e.firstChild),
                        e.appendChild(
                          o.createTextNode(
                            String(P(t, ""))
                              .replace(/<[^>]*>/g, "")
                              .replace(/&lt;/g, "<")
                              .replace(/&gt;/g, ">"),
                          ),
                        );
                    }),
                    (i.prototype.toFront = function () {
                      var t = this.element;
                      return t.parentNode.appendChild(t), this;
                    }),
                    (i.prototype.translate = function (t, e) {
                      return this.attr({ translateX: t, translateY: e });
                    }),
                    (i.prototype.updateShadows = function (t, e, i) {
                      var s = this.shadows;
                      if (s)
                        for (var o = s.length; o--; )
                          i.call(
                            s[o],
                            "height" === t
                              ? Math.max(e - (s[o].cutHeight || 0), 0)
                              : "d" === t
                                ? this.d
                                : e,
                            t,
                            s[o],
                          );
                    }),
                    (i.prototype.updateTransform = function () {
                      var t = this.translateX || 0,
                        e = this.translateY || 0,
                        i = this.scaleX,
                        s = this.scaleY,
                        o = this.inverted,
                        n = this.rotation,
                        r = this.matrix,
                        a = this.element;
                      o && ((t += this.width), (e += this.height)),
                        (t = ["translate(" + t + "," + e + ")"]),
                        m(r) && t.push("matrix(" + r.join(",") + ")"),
                        o
                          ? t.push("rotate(90) scale(-1,1)")
                          : n &&
                            t.push(
                              "rotate(" +
                                n +
                                " " +
                                P(
                                  this.rotationOriginX,
                                  a.getAttribute("x"),
                                  0,
                                ) +
                                " " +
                                P(
                                  this.rotationOriginY,
                                  a.getAttribute("y") || 0,
                                ) +
                                ")",
                            ),
                        (m(i) || m(s)) &&
                          t.push("scale(" + P(i, 1) + " " + P(s, 1) + ")"),
                        t.length && a.setAttribute("transform", t.join(" "));
                    }),
                    (i.prototype.visibilitySetter = function (t, e, i) {
                      "inherit" === t
                        ? i.removeAttribute(e)
                        : this[e] !== t && i.setAttribute(e, t),
                        (this[e] = t);
                    }),
                    (i.prototype.xGetter = function (t) {
                      return (
                        "circle" === this.element.nodeName &&
                          ("x" === t ? (t = "cx") : "y" === t && (t = "cy")),
                        this._defaultGetter(t)
                      );
                    }),
                    (i.prototype.zIndexSetter = function (t, e) {
                      var i = this.renderer,
                        s = this.parentGroup,
                        o = (s || i).element || i.box,
                        n = this.element,
                        r = !1;
                      i = o === i.box;
                      var a,
                        h = this.added;
                      if (
                        (m(t)
                          ? (n.setAttribute("data-z-index", t),
                            (t = +t),
                            this[e] === t && (h = !1))
                          : m(this[e]) && n.removeAttribute("data-z-index"),
                        (this[e] = t),
                        h)
                      ) {
                        for (
                          (t = this.zIndex) && s && (s.handleZ = !0),
                            a = (e = o.childNodes).length - 1;
                          0 <= a && !r;
                          a--
                        ) {
                          h = (s = e[a]).getAttribute("data-z-index");
                          var l = !m(h);
                          s !== n &&
                            (0 > t && l && !i && !a
                              ? (o.insertBefore(n, e[a]), (r = !0))
                              : (L(h) <= t || (l && (!m(t) || 0 <= t))) &&
                                (o.insertBefore(n, e[a + 1] || null),
                                (r = !0)));
                        }
                        r ||
                          (o.insertBefore(n, e[i ? 3 : 0] || null), (r = !0));
                      }
                      return r;
                    }),
                    i
                  );
                })()).prototype["stroke-widthSetter"] =
                  i.prototype.strokeSetter),
                (i.prototype.yGetter = i.prototype.xGetter),
                (i.prototype.matrixSetter =
                  i.prototype.rotationOriginXSetter =
                  i.prototype.rotationOriginYSetter =
                  i.prototype.rotationSetter =
                  i.prototype.scaleXSetter =
                  i.prototype.scaleYSetter =
                  i.prototype.translateXSetter =
                  i.prototype.translateYSetter =
                  i.prototype.verticalAlignSetter =
                    function (t, e) {
                      (this[e] = t), (this.doTransform = !0);
                    }),
                (e.SVGElement = i),
                e.SVGElement
              );
            },
          ),
          e(
            i,
            "parts/SvgRenderer.js",
            [
              i["parts/Color.js"],
              i["parts/Globals.js"],
              i["parts/SVGElement.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = t.parse,
                n = s.addEvent,
                r = s.attr,
                a = s.createElement,
                h = s.css,
                l = s.defined,
                c = s.destroyObjectProperties,
                d = s.extend,
                p = s.isArray,
                u = s.isNumber,
                f = s.isObject,
                g = s.isString,
                m = s.merge,
                y = s.objectEach,
                v = s.pick,
                x = s.pInt,
                b = s.removeEvent,
                k = s.splat,
                M = s.uniqueKey,
                w = e.charts,
                S = e.deg2rad,
                T = e.doc,
                A = e.isFirefox,
                P = e.isMS,
                L = e.isWebKit;
              s = e.noop;
              var C = e.svg,
                O = e.SVG_NS,
                E = e.symbolSizes,
                D = e.win;
              (t = e.SVGRenderer =
                function () {
                  this.init.apply(this, arguments);
                }),
                d(t.prototype, {
                  Element: i,
                  SVG_NS: O,
                  init: function (t, e, i, s, o, a, l) {
                    var c,
                      d = this.createElement("svg").attr({
                        version: "1.1",
                        class: "highcharts-root",
                      });
                    l || d.css(this.getStyle(s)),
                      (s = d.element),
                      t.appendChild(s),
                      r(t, "dir", "ltr"),
                      -1 === t.innerHTML.indexOf("xmlns") &&
                        r(s, "xmlns", this.SVG_NS),
                      (this.isSVG = !0),
                      (this.box = s),
                      (this.boxWrapper = d),
                      (this.alignedObjects = []),
                      (this.url =
                        (A || L) && T.getElementsByTagName("base").length
                          ? D.location.href
                              .split("#")[0]
                              .replace(/<[^>]*>/g, "")
                              .replace(/([\('\)])/g, "\\$1")
                              .replace(/ /g, "%20")
                          : ""),
                      this.createElement("desc")
                        .add()
                        .element.appendChild(
                          T.createTextNode("Created with Highcharts 8.1.0"),
                        ),
                      (this.defs = this.createElement("defs").add()),
                      (this.allowHTML = a),
                      (this.forExport = o),
                      (this.styledMode = l),
                      (this.gradients = {}),
                      (this.cache = {}),
                      (this.cacheKeys = []),
                      (this.imgCount = 0),
                      this.setSize(e, i, !1),
                      A &&
                        t.getBoundingClientRect &&
                        ((e = function () {
                          h(t, { left: 0, top: 0 }),
                            (c = t.getBoundingClientRect()),
                            h(t, {
                              left: Math.ceil(c.left) - c.left + "px",
                              top: Math.ceil(c.top) - c.top + "px",
                            });
                        })(),
                        (this.unSubPixelFix = n(D, "resize", e)));
                  },
                  definition: function (t) {
                    var e = this;
                    return (function t(i, s) {
                      var o;
                      return (
                        k(i).forEach(function (i) {
                          var n = e.createElement(i.tagName),
                            r = {};
                          y(i, function (t, e) {
                            "tagName" !== e &&
                              "children" !== e &&
                              "textContent" !== e &&
                              (r[e] = t);
                          }),
                            n.attr(r),
                            n.add(s || e.defs),
                            i.textContent &&
                              n.element.appendChild(
                                T.createTextNode(i.textContent),
                              ),
                            t(i.children || [], n),
                            (o = n);
                        }),
                        o
                      );
                    })(t);
                  },
                  getStyle: function (t) {
                    return (this.style = d(
                      {
                        fontFamily:
                          '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: "12px",
                      },
                      t,
                    ));
                  },
                  setStyle: function (t) {
                    this.boxWrapper.css(this.getStyle(t));
                  },
                  isHidden: function () {
                    return !this.boxWrapper.getBBox().width;
                  },
                  destroy: function () {
                    var t = this.defs;
                    return (
                      (this.box = null),
                      (this.boxWrapper = this.boxWrapper.destroy()),
                      c(this.gradients || {}),
                      (this.gradients = null),
                      t && (this.defs = t.destroy()),
                      this.unSubPixelFix && this.unSubPixelFix(),
                      (this.alignedObjects = null)
                    );
                  },
                  createElement: function (t) {
                    var e = new this.Element();
                    return e.init(this, t), e;
                  },
                  draw: s,
                  getRadialAttr: function (t, e) {
                    return {
                      cx: t[0] - t[2] / 2 + e.cx * t[2],
                      cy: t[1] - t[2] / 2 + e.cy * t[2],
                      r: e.r * t[2],
                    };
                  },
                  truncate: function (t, e, i, s, o, n, r) {
                    var a,
                      h,
                      l = this,
                      c = t.rotation,
                      d = s ? 1 : 0,
                      p = (i || s).length,
                      u = p,
                      f = [],
                      g = function (t) {
                        e.firstChild && e.removeChild(e.firstChild),
                          t && e.appendChild(T.createTextNode(t));
                      },
                      m = function (n, a) {
                        if ("undefined" === typeof f[(a = a || n)])
                          if (e.getSubStringLength)
                            try {
                              f[a] = o + e.getSubStringLength(0, s ? a + 1 : a);
                            } catch (h) {}
                          else
                            l.getSpanWidth &&
                              (g(r(i || s, n)),
                              (f[a] = o + l.getSpanWidth(t, e)));
                        return f[a];
                      };
                    t.rotation = 0;
                    var y = m(e.textContent.length);
                    if ((h = o + y > n)) {
                      for (; d <= p; )
                        (u = Math.ceil((d + p) / 2)),
                          s && (a = r(s, u)),
                          (y = m(u, a && a.length - 1)),
                          d === p ? (d = p + 1) : y > n ? (p = u - 1) : (d = u);
                      0 === p
                        ? g("")
                        : (i && p === i.length - 1) || g(a || r(i || s, u));
                    }
                    return (
                      s && s.splice(0, u),
                      (t.actualWidth = y),
                      (t.rotation = c),
                      h
                    );
                  },
                  escapes: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "'": "&#39;",
                    '"': "&quot;",
                  },
                  buildText: function (t) {
                    var e,
                      i,
                      s = t.element,
                      o = this,
                      n = o.forExport,
                      a = v(t.textStr, "").toString(),
                      l = -1 !== a.indexOf("<"),
                      c = s.childNodes,
                      d = r(s, "x"),
                      p = t.styles,
                      u = t.textWidth,
                      f = p && p.lineHeight,
                      g = p && p.textOutline,
                      m = p && "ellipsis" === p.textOverflow,
                      b = p && "nowrap" === p.whiteSpace,
                      k = p && p.fontSize,
                      M = c.length;
                    p = u && !t.added && this.box;
                    var w = function (t) {
                        var e;
                        return (
                          o.styledMode ||
                            (e = /(px|em)$/.test(t && t.style.fontSize)
                              ? t.style.fontSize
                              : k || o.style.fontSize || 12),
                          f
                            ? x(f)
                            : o.fontMetrics(e, t.getAttribute("style") ? t : s)
                                .h
                        );
                      },
                      S = function (t, e) {
                        return (
                          y(o.escapes, function (i, s) {
                            (e && -1 !== e.indexOf(i)) ||
                              (t = t.toString().replace(new RegExp(i, "g"), s));
                          }),
                          t
                        );
                      },
                      A = function (t, e) {
                        var i = t.indexOf("<");
                        if (
                          -1 !==
                            (i = (t = t.substring(
                              i,
                              t.indexOf(">") - i,
                            )).indexOf(e + "=")) &&
                          ((i = i + e.length + 1),
                          '"' === (e = t.charAt(i)) || "'" === e)
                        )
                          return (t = t.substring(i + 1)).substring(
                            0,
                            t.indexOf(e),
                          );
                      },
                      P = /<br.*?>/g,
                      L = [a, m, b, f, g, k, u].join();
                    if (L !== t.textCache) {
                      for (t.textCache = L; M--; ) s.removeChild(c[M]);
                      l ||
                      g ||
                      m ||
                      u ||
                      (-1 !== a.indexOf(" ") && (!b || P.test(a)))
                        ? (p && p.appendChild(s),
                          l
                            ? (a = (a = o.styledMode
                                ? a
                                    .replace(
                                      /<(b|strong)>/g,
                                      '<span class="highcharts-strong">',
                                    )
                                    .replace(
                                      /<(i|em)>/g,
                                      '<span class="highcharts-emphasized">',
                                    )
                                : a
                                    .replace(
                                      /<(b|strong)>/g,
                                      '<span style="font-weight:bold">',
                                    )
                                    .replace(
                                      /<(i|em)>/g,
                                      '<span style="font-style:italic">',
                                    ))
                                .replace(/<a/g, "<span")
                                .replace(/<\/(b|strong|i|em|a)>/g, "</span>")
                                .split(P))
                            : (a = [a]),
                          (a = a.filter(function (t) {
                            return "" !== t;
                          })).forEach(function (a, l) {
                            var c = 0,
                              p = 0,
                              f = (a = a
                                .replace(/^\s+|\s+$/g, "")
                                .replace(/<span/g, "|||<span")
                                .replace(/<\/span>/g, "</span>|||")).split(
                                "|||",
                              );
                            f.forEach(function (a) {
                              if ("" !== a || 1 === f.length) {
                                var g,
                                  y,
                                  v = {},
                                  x = T.createElementNS(o.SVG_NS, "tspan");
                                if (
                                  ((g = A(a, "class")) && r(x, "class", g),
                                  (g = A(a, "style")) &&
                                    ((g = g.replace(
                                      /(;| |^)color([ :])/,
                                      "$1fill$2",
                                    )),
                                    r(x, "style", g)),
                                  (y = A(a, "href")) &&
                                    !n &&
                                    (r(
                                      x,
                                      "onclick",
                                      'location.href="' + y + '"',
                                    ),
                                    r(x, "class", "highcharts-anchor"),
                                    o.styledMode ||
                                      h(x, { cursor: "pointer" })),
                                  " " !==
                                    (a = S(
                                      a.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") ||
                                        " ",
                                    )))
                                ) {
                                  if (
                                    (x.appendChild(T.createTextNode(a)),
                                    c
                                      ? (v.dx = 0)
                                      : l && null !== d && (v.x = d),
                                    r(x, v),
                                    s.appendChild(x),
                                    !c &&
                                      i &&
                                      (!C && n && h(x, { display: "block" }),
                                      r(x, "dy", w(x))),
                                    u)
                                  ) {
                                    var M = a
                                      .replace(/([^\^])-/g, "$1- ")
                                      .split(" ");
                                    (v =
                                      !b &&
                                      (1 < f.length || l || 1 < M.length)),
                                      (y = 0);
                                    var P = w(x);
                                    if (m)
                                      e = o.truncate(
                                        t,
                                        x,
                                        a,
                                        void 0,
                                        0,
                                        Math.max(0, u - parseInt(k || 12, 10)),
                                        function (t, e) {
                                          return t.substring(0, e) + "\u2026";
                                        },
                                      );
                                    else if (v)
                                      for (; M.length; )
                                        M.length &&
                                          !b &&
                                          0 < y &&
                                          ((x = T.createElementNS(O, "tspan")),
                                          r(x, { dy: P, x: d }),
                                          g && r(x, "style", g),
                                          x.appendChild(
                                            T.createTextNode(
                                              M.join(" ").replace(/- /g, "-"),
                                            ),
                                          ),
                                          s.appendChild(x)),
                                          o.truncate(
                                            t,
                                            x,
                                            null,
                                            M,
                                            0 === y ? p : 0,
                                            u,
                                            function (t, e) {
                                              return M.slice(0, e)
                                                .join(" ")
                                                .replace(/- /g, "-");
                                            },
                                          ),
                                          (p = t.actualWidth),
                                          y++;
                                  }
                                  c++;
                                }
                              }
                            }),
                              (i = i || s.childNodes.length);
                          }),
                          m &&
                            e &&
                            t.attr("title", S(t.textStr, ["&lt;", "&gt;"])),
                          p && p.removeChild(s),
                          g && t.applyTextOutline && t.applyTextOutline(g))
                        : s.appendChild(T.createTextNode(S(a)));
                    }
                  },
                  getContrast: function (t) {
                    return (
                      ((t = o(t).rgba)[0] *= 1),
                      (t[1] *= 1.2),
                      (t[2] *= 0.5),
                      459 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
                    );
                  },
                  button: function (t, e, i, s, o, r, a, h, l, c) {
                    var p = this.label(
                        t,
                        e,
                        i,
                        l,
                        void 0,
                        void 0,
                        c,
                        void 0,
                        "button",
                      ),
                      u = 0,
                      f = this.styledMode;
                    if ((p.attr(m({ padding: 8, r: 2 }, o)), !f)) {
                      var g = (o = m(
                        {
                          fill: "#f7f7f7",
                          stroke: "#cccccc",
                          "stroke-width": 1,
                          style: {
                            color: "#333333",
                            cursor: "pointer",
                            fontWeight: "normal",
                          },
                        },
                        o,
                      )).style;
                      delete o.style;
                      var y = (r = m(o, { fill: "#e6e6e6" }, r)).style;
                      delete r.style;
                      var v = (a = m(
                        o,
                        {
                          fill: "#e6ebf5",
                          style: { color: "#000000", fontWeight: "bold" },
                        },
                        a,
                      )).style;
                      delete a.style;
                      var x = (h = m(o, { style: { color: "#cccccc" } }, h))
                        .style;
                      delete h.style;
                    }
                    return (
                      n(p.element, P ? "mouseover" : "mouseenter", function () {
                        3 !== u && p.setState(1);
                      }),
                      n(p.element, P ? "mouseout" : "mouseleave", function () {
                        3 !== u && p.setState(u);
                      }),
                      (p.setState = function (t) {
                        1 !== t && (p.state = u = t),
                          p
                            .removeClass(
                              /highcharts-button-(normal|hover|pressed|disabled)/,
                            )
                            .addClass(
                              "highcharts-button-" +
                                ["normal", "hover", "pressed", "disabled"][
                                  t || 0
                                ],
                            ),
                          f ||
                            p
                              .attr([o, r, a, h][t || 0])
                              .css([g, y, v, x][t || 0]);
                      }),
                      f || p.attr(o).css(d({ cursor: "default" }, g)),
                      p.on("click", function (t) {
                        3 !== u && s.call(p, t);
                      })
                    );
                  },
                  crispLine: function (t, e, i) {
                    void 0 === i && (i = "round");
                    var s = t[0],
                      o = t[1];
                    return (
                      s[1] === o[1] &&
                        (s[1] = o[1] = Math[i](s[1]) - (e % 2) / 2),
                      s[2] === o[2] &&
                        (s[2] = o[2] = Math[i](s[2]) + (e % 2) / 2),
                      t
                    );
                  },
                  path: function (t) {
                    var e = this.styledMode ? {} : { fill: "none" };
                    return (
                      p(t) ? (e.d = t) : f(t) && d(e, t),
                      this.createElement("path").attr(e)
                    );
                  },
                  circle: function (t, e, i) {
                    return (
                      (t = f(t)
                        ? t
                        : "undefined" === typeof t
                          ? {}
                          : { x: t, y: e, r: i }),
                      ((e = this.createElement("circle")).xSetter = e.ySetter =
                        function (t, e, i) {
                          i.setAttribute("c" + e, t);
                        }),
                      e.attr(t)
                    );
                  },
                  arc: function (t, e, i, s, o, n) {
                    return (
                      f(t)
                        ? ((e = (s = t).y), (i = s.r), (t = s.x))
                        : (s = { innerR: s, start: o, end: n }),
                      ((t = this.symbol("arc", t, e, i, i, s)).r = i),
                      t
                    );
                  },
                  rect: function (t, e, i, s, o, n) {
                    o = f(t) ? t.r : o;
                    var a = this.createElement("rect");
                    return (
                      (t = f(t)
                        ? t
                        : "undefined" === typeof t
                          ? {}
                          : {
                              x: t,
                              y: e,
                              width: Math.max(i, 0),
                              height: Math.max(s, 0),
                            }),
                      this.styledMode ||
                        ("undefined" !== typeof n &&
                          ((t.strokeWidth = n), (t = a.crisp(t))),
                        (t.fill = "none")),
                      o && (t.r = o),
                      (a.rSetter = function (t, e, i) {
                        (a.r = t), r(i, { rx: t, ry: t });
                      }),
                      (a.rGetter = function () {
                        return a.r;
                      }),
                      a.attr(t)
                    );
                  },
                  setSize: function (t, e, i) {
                    var s = this.alignedObjects,
                      o = s.length;
                    for (
                      this.width = t,
                        this.height = e,
                        this.boxWrapper.animate(
                          { width: t, height: e },
                          {
                            step: function () {
                              this.attr({
                                viewBox:
                                  "0 0 " +
                                  this.attr("width") +
                                  " " +
                                  this.attr("height"),
                              });
                            },
                            duration: v(i, !0) ? void 0 : 0,
                          },
                        );
                      o--;

                    )
                      s[o].align();
                  },
                  g: function (t) {
                    var e = this.createElement("g");
                    return t ? e.attr({ class: "highcharts-" + t }) : e;
                  },
                  image: function (t, e, i, s, o, r) {
                    var a = { preserveAspectRatio: "none" },
                      h = function (t, e) {
                        t.setAttributeNS
                          ? t.setAttributeNS(
                              "http://www.w3.org/1999/xlink",
                              "href",
                              e,
                            )
                          : t.setAttribute("hc-svg-href", e);
                      },
                      l = function (e) {
                        h(c.element, t), r.call(c, e);
                      };
                    1 < arguments.length &&
                      d(a, { x: e, y: i, width: s, height: o });
                    var c = this.createElement("image").attr(a);
                    return (
                      r
                        ? (h(
                            c.element,
                            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                          ),
                          (a = new D.Image()),
                          n(a, "load", l),
                          (a.src = t),
                          a.complete && l({}))
                        : h(c.element, t),
                      c
                    );
                  },
                  symbol: function (t, e, i, s, o, n) {
                    var r,
                      c = this,
                      p = /^url\((.*?)\)$/,
                      u = p.test(t),
                      f = !u && (this.symbols[t] ? t : "circle"),
                      g = f && this.symbols[f];
                    if (g) {
                      "number" === typeof e &&
                        (r = g.call(
                          this.symbols,
                          Math.round(e || 0),
                          Math.round(i || 0),
                          s,
                          o,
                          n,
                        ));
                      var m = this.path(r);
                      c.styledMode || m.attr("fill", "none"),
                        d(m, {
                          symbolName: f,
                          x: e,
                          y: i,
                          width: s,
                          height: o,
                        }),
                        n && d(m, n);
                    } else if (u) {
                      var y = t.match(p)[1];
                      ((m = this.image(y)).imgwidth = v(
                        E[y] && E[y].width,
                        n && n.width,
                      )),
                        (m.imgheight = v(E[y] && E[y].height, n && n.height));
                      var x = function () {
                        m.attr({ width: m.width, height: m.height });
                      };
                      ["width", "height"].forEach(function (t) {
                        m[t + "Setter"] = function (t, e) {
                          var i = {},
                            s = this["img" + e],
                            o = "width" === e ? "translateX" : "translateY";
                          (this[e] = t),
                            l(s) &&
                              (n &&
                                "within" === n.backgroundSize &&
                                this.width &&
                                this.height &&
                                (s = Math.round(
                                  s *
                                    Math.min(
                                      this.width / this.imgwidth,
                                      this.height / this.imgheight,
                                    ),
                                )),
                              this.element && this.element.setAttribute(e, s),
                              this.alignByTranslate ||
                                ((i[o] = ((this[e] || 0) - s) / 2),
                                this.attr(i)));
                        };
                      }),
                        l(e) && m.attr({ x: e, y: i }),
                        (m.isImg = !0),
                        l(m.imgwidth) && l(m.imgheight)
                          ? x()
                          : (m.attr({ width: 0, height: 0 }),
                            a("img", {
                              onload: function () {
                                var t = w[c.chartIndex];
                                0 === this.width &&
                                  (h(this, {
                                    position: "absolute",
                                    top: "-999em",
                                  }),
                                  T.body.appendChild(this)),
                                  (E[y] = {
                                    width: this.width,
                                    height: this.height,
                                  }),
                                  (m.imgwidth = this.width),
                                  (m.imgheight = this.height),
                                  m.element && x(),
                                  this.parentNode &&
                                    this.parentNode.removeChild(this),
                                  c.imgCount--,
                                  c.imgCount || !t || t.hasLoaded || t.onload();
                              },
                              src: y,
                            }),
                            this.imgCount++);
                    }
                    return m;
                  },
                  symbols: {
                    circle: function (t, e, i, s) {
                      return this.arc(t + i / 2, e + s / 2, i / 2, s / 2, {
                        start: 0.5 * Math.PI,
                        end: 2.5 * Math.PI,
                        open: !1,
                      });
                    },
                    square: function (t, e, i, s) {
                      return [
                        ["M", t, e],
                        ["L", t + i, e],
                        ["L", t + i, e + s],
                        ["L", t, e + s],
                        ["Z"],
                      ];
                    },
                    triangle: function (t, e, i, s) {
                      return [
                        ["M", t + i / 2, e],
                        ["L", t + i, e + s],
                        ["L", t, e + s],
                        ["Z"],
                      ];
                    },
                    "triangle-down": function (t, e, i, s) {
                      return [
                        ["M", t, e],
                        ["L", t + i, e],
                        ["L", t + i / 2, e + s],
                        ["Z"],
                      ];
                    },
                    diamond: function (t, e, i, s) {
                      return [
                        ["M", t + i / 2, e],
                        ["L", t + i, e + s / 2],
                        ["L", t + i / 2, e + s],
                        ["L", t, e + s / 2],
                        ["Z"],
                      ];
                    },
                    arc: function (t, e, i, s, o) {
                      var n = o.start,
                        r = o.r || i,
                        a = o.r || s || i,
                        h = o.end - 0.001;
                      (i = o.innerR),
                        (s = v(
                          o.open,
                          0.001 > Math.abs(o.end - o.start - 2 * Math.PI),
                        ));
                      var c = Math.cos(n),
                        d = Math.sin(n),
                        p = Math.cos(h);
                      return (
                        (h = Math.sin(h)),
                        (r = [
                          ["M", t + r * c, e + a * d],
                          [
                            "A",
                            r,
                            a,
                            0,
                            (n = v(
                              o.longArc,
                              0.001 > o.end - n - Math.PI ? 0 : 1,
                            )),
                            v(o.clockwise, 1),
                            t + r * p,
                            e + a * h,
                          ],
                        ]),
                        l(i) &&
                          r.push(
                            s
                              ? ["M", t + i * p, e + i * h]
                              : ["L", t + i * p, e + i * h],
                            [
                              "A",
                              i,
                              i,
                              0,
                              n,
                              l(o.clockwise) ? 1 - o.clockwise : 0,
                              t + i * c,
                              e + i * d,
                            ],
                          ),
                        s || r.push(["Z"]),
                        r
                      );
                    },
                    callout: function (t, e, i, s, o) {
                      var n = Math.min((o && o.r) || 0, i, s),
                        r = n + 6,
                        a = o && o.anchorX;
                      o = o && o.anchorY;
                      var h = [
                        ["M", t + n, e],
                        ["L", t + i - n, e],
                        ["C", t + i, e, t + i, e, t + i, e + n],
                        ["L", t + i, e + s - n],
                        ["C", t + i, e + s, t + i, e + s, t + i - n, e + s],
                        ["L", t + n, e + s],
                        ["C", t, e + s, t, e + s, t, e + s - n],
                        ["L", t, e + n],
                        ["C", t, e, t, e, t + n, e],
                      ];
                      return (
                        a && a > i
                          ? o > e + r && o < e + s - r
                            ? h.splice(
                                3,
                                1,
                                ["L", t + i, o - 6],
                                ["L", t + i + 6, o],
                                ["L", t + i, o + 6],
                                ["L", t + i, e + s - n],
                              )
                            : h.splice(
                                3,
                                1,
                                ["L", t + i, s / 2],
                                ["L", a, o],
                                ["L", t + i, s / 2],
                                ["L", t + i, e + s - n],
                              )
                          : a && 0 > a
                            ? o > e + r && o < e + s - r
                              ? h.splice(
                                  7,
                                  1,
                                  ["L", t, o + 6],
                                  ["L", t - 6, o],
                                  ["L", t, o - 6],
                                  ["L", t, e + n],
                                )
                              : h.splice(
                                  7,
                                  1,
                                  ["L", t, s / 2],
                                  ["L", a, o],
                                  ["L", t, s / 2],
                                  ["L", t, e + n],
                                )
                            : o && o > s && a > t + r && a < t + i - r
                              ? h.splice(
                                  5,
                                  1,
                                  ["L", a + 6, e + s],
                                  ["L", a, e + s + 6],
                                  ["L", a - 6, e + s],
                                  ["L", t + n, e + s],
                                )
                              : o &&
                                0 > o &&
                                a > t + r &&
                                a < t + i - r &&
                                h.splice(
                                  1,
                                  1,
                                  ["L", a - 6, e],
                                  ["L", a, e - 6],
                                  ["L", a + 6, e],
                                  ["L", i - n, e],
                                ),
                        h
                      );
                    },
                  },
                  clipRect: function (t, e, i, s) {
                    var o = M() + "-",
                      n = this.createElement("clipPath")
                        .attr({ id: o })
                        .add(this.defs);
                    return (
                      ((t = this.rect(t, e, i, s, 0).add(n)).id = o),
                      (t.clipPath = n),
                      (t.count = 0),
                      t
                    );
                  },
                  text: function (t, e, i, s) {
                    var o = {};
                    return !s || (!this.allowHTML && this.forExport)
                      ? ((o.x = Math.round(e || 0)),
                        i && (o.y = Math.round(i)),
                        l(t) && (o.text = t),
                        (t = this.createElement("text").attr(o)),
                        s ||
                          (t.xSetter = function (t, e, i) {
                            var s,
                              o = i.getElementsByTagName("tspan"),
                              n = i.getAttribute(e);
                            for (s = 0; s < o.length; s++) {
                              var r = o[s];
                              r.getAttribute(e) === n && r.setAttribute(e, t);
                            }
                            i.setAttribute(e, t);
                          }),
                        t)
                      : this.html(t, e, i);
                  },
                  fontMetrics: function (t, e) {
                    return (
                      (t =
                        (!this.styledMode && /px/.test(t)) ||
                        !D.getComputedStyle
                          ? t ||
                            (e && e.style && e.style.fontSize) ||
                            (this.style && this.style.fontSize)
                          : e && i.prototype.getStyle.call(e, "font-size")),
                      {
                        h: (e =
                          24 > (t = /px/.test(t) ? x(t) : 12)
                            ? t + 3
                            : Math.round(1.2 * t)),
                        b: Math.round(0.8 * e),
                        f: t,
                      }
                    );
                  },
                  rotCorr: function (t, e, i) {
                    var s = t;
                    return (
                      e && i && (s = Math.max(s * Math.cos(e * S), 4)),
                      { x: (-t / 3) * Math.sin(e * S), y: s }
                    );
                  },
                  pathToSegments: function (t) {
                    for (
                      var e = [],
                        i = [],
                        s = {
                          A: 8,
                          C: 7,
                          H: 2,
                          L: 3,
                          M: 3,
                          Q: 5,
                          S: 5,
                          T: 3,
                          V: 2,
                        },
                        o = 0;
                      o < t.length;
                      o++
                    )
                      g(i[0]) &&
                        u(t[o]) &&
                        i.length === s[i[0].toUpperCase()] &&
                        t.splice(
                          o,
                          0,
                          i[0].replace("M", "L").replace("m", "l"),
                        ),
                        "string" === typeof t[o] &&
                          (i.length && e.push(i.slice(0)), (i.length = 0)),
                        i.push(t[o]);
                    return e.push(i.slice(0)), e;
                  },
                  label: function (t, e, s, o, n, r, a, h, c) {
                    var p,
                      f,
                      g,
                      y,
                      v,
                      x,
                      k,
                      M,
                      w = this,
                      S = w.styledMode,
                      T = w.g("button" !== c && "label"),
                      A = (T.text = w.text("", 0, 0, a).attr({ zIndex: 1 })),
                      P = { width: 0, height: 0, x: 0, y: 0 },
                      L = P,
                      C = 0,
                      O = 3,
                      E = 0,
                      D = {},
                      I = /^url\((.*?)\)$/.test(o),
                      z = S || I,
                      B = function () {
                        return S
                          ? (p.strokeWidth() % 2) / 2
                          : ((k ? parseInt(k, 10) : 0) % 2) / 2;
                      };
                    c && T.addClass("highcharts-" + c);
                    var R = function () {
                        var t = A.element.style,
                          e = {};
                        (L =
                          (u(f) && u(g) && !x) || !l(A.textStr)
                            ? P
                            : A.getBBox()),
                          (T.width = (f || L.width || 0) + 2 * O + E),
                          (T.height = (g || L.height || 0) + 2 * O),
                          (M =
                            O +
                            Math.min(
                              w.fontMetrics(t && t.fontSize, A).b,
                              L.height || 1 / 0,
                            )),
                          z &&
                            (p ||
                              ((T.box = p =
                                w.symbols[o] || I ? w.symbol(o) : w.rect()),
                              p.addClass(
                                ("button" === c ? "" : "highcharts-label-box") +
                                  (c ? " highcharts-" + c + "-box" : ""),
                              ),
                              p.add(T),
                              (t = B()),
                              (e.x = t),
                              (e.y = (h ? -M : 0) + t)),
                            (e.width = Math.round(T.width)),
                            (e.height = Math.round(T.height)),
                            p.attr(d(e, D)),
                            (D = {}));
                      },
                      N = function () {
                        var t = E + O,
                          e = h ? 0 : M;
                        l(f) &&
                          L &&
                          ("center" === x || "right" === x) &&
                          (t += { center: 0.5, right: 1 }[x] * (f - L.width)),
                          (t === A.x && e === A.y) ||
                            (A.attr("x", t),
                            A.hasBoxWidthChanged && ((L = A.getBBox(!0)), R()),
                            "undefined" !== typeof e && A.attr("y", e)),
                          (A.x = t),
                          (A.y = e);
                      },
                      W = function (t, e) {
                        p ? p.attr(t, e) : (D[t] = e);
                      };
                    (T.onAdd = function () {
                      A.add(T),
                        T.attr({ text: t || 0 === t ? t : "", x: e, y: s }),
                        p && l(n) && T.attr({ anchorX: n, anchorY: r });
                    }),
                      (T.widthSetter = function (t) {
                        f = u(t) ? t : null;
                      }),
                      (T.heightSetter = function (t) {
                        g = t;
                      }),
                      (T["text-alignSetter"] = function (t) {
                        x = t;
                      }),
                      (T.paddingSetter = function (t) {
                        l(t) && t !== O && ((O = T.padding = t), N());
                      }),
                      (T.paddingLeftSetter = function (t) {
                        l(t) && t !== E && ((E = t), N());
                      }),
                      (T.alignSetter = function (t) {
                        (t = { left: 0, center: 0.5, right: 1 }[t]) !== C &&
                          ((C = t), L && T.attr({ x: y }));
                      }),
                      (T.textSetter = function (t) {
                        "undefined" !== typeof t && A.attr({ text: t }),
                          R(),
                          N();
                      }),
                      (T["stroke-widthSetter"] = function (t, e) {
                        t && (z = !0), (k = this["stroke-width"] = t), W(e, t);
                      }),
                      S
                        ? (T.rSetter = function (t, e) {
                            W(e, t);
                          })
                        : (T.strokeSetter =
                            T.fillSetter =
                            T.rSetter =
                              function (t, e) {
                                "r" !== e &&
                                  ("fill" === e && t && (z = !0), (T[e] = t)),
                                  W(e, t);
                              }),
                      (T.anchorXSetter = function (t, e) {
                        (n = T.anchorX = t), W(e, Math.round(t) - B() - y);
                      }),
                      (T.anchorYSetter = function (t, e) {
                        (r = T.anchorY = t), W(e, t - v);
                      }),
                      (T.xSetter = function (t) {
                        (T.x = t),
                          C &&
                            ((t -= C * ((f || L.width) + 2 * O)),
                            (T["forceAnimate:x"] = !0)),
                          (y = Math.round(t)),
                          T.attr("translateX", y);
                      }),
                      (T.ySetter = function (t) {
                        (v = T.y = Math.round(t)), T.attr("translateY", v);
                      }),
                      (T.isLabel = !0);
                    var j = T.css;
                    return (
                      (a = {
                        css: function (t) {
                          if (t) {
                            var e = {};
                            (t = m(t)),
                              T.textProps.forEach(function (i) {
                                "undefined" !== typeof t[i] &&
                                  ((e[i] = t[i]), delete t[i]);
                              }),
                              A.css(e);
                            var i = "fontSize" in e || "fontWeight" in e;
                            ("width" in e || i) && (R(), i && N());
                          }
                          return j.call(T, t);
                        },
                        getBBox: function () {
                          return {
                            width: L.width + 2 * O,
                            height: L.height + 2 * O,
                            x: L.x - O,
                            y: L.y - O,
                          };
                        },
                        destroy: function () {
                          b(T.element, "mouseenter"),
                            b(T.element, "mouseleave"),
                            A && A.destroy(),
                            p && (p = p.destroy()),
                            i.prototype.destroy.call(T),
                            (T = w = A = R = N = W = null);
                        },
                      }),
                      (T.on = function (t, e) {
                        var s = A && "SPAN" === A.element.tagName ? A : void 0;
                        if (s) {
                          var o = function (i) {
                            (("mouseenter" === t || "mouseleave" === t) &&
                              i.relatedTarget instanceof Element &&
                              (T.element.contains(i.relatedTarget) ||
                                s.element.contains(i.relatedTarget))) ||
                              e.call(T.element, i);
                          };
                          s.on(t, o);
                        }
                        return i.prototype.on.call(T, t, o || e), T;
                      }),
                      S ||
                        (a.shadow = function (t) {
                          return t && (R(), p && p.shadow(t)), T;
                        }),
                      d(T, a)
                    );
                  },
                }),
                (e.Renderer = t);
            },
          ),
          e(
            i,
            "parts/Html.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.attr,
                s = e.createElement,
                o = e.css,
                n = e.defined,
                r = e.extend,
                a = e.pick,
                h = e.pInt,
                l = t.isFirefox,
                c = t.isMS,
                d = t.isWebKit,
                p = t.SVGElement;
              e = t.SVGRenderer;
              var u = t.win;
              r(p.prototype, {
                htmlCss: function (t) {
                  var e = "SPAN" === this.element.tagName && t && "width" in t,
                    i = a(e && t.width, void 0);
                  if (e) {
                    delete t.width, (this.textWidth = i);
                    var s = !0;
                  }
                  return (
                    t &&
                      "ellipsis" === t.textOverflow &&
                      ((t.whiteSpace = "nowrap"), (t.overflow = "hidden")),
                    (this.styles = r(this.styles, t)),
                    o(this.element, t),
                    s && this.htmlUpdateTransform(),
                    this
                  );
                },
                htmlGetBBox: function () {
                  var t = this.element;
                  return {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: t.offsetWidth,
                    height: t.offsetHeight,
                  };
                },
                htmlUpdateTransform: function () {
                  if (this.added) {
                    var t = this.renderer,
                      e = this.element,
                      i = this.translateX || 0,
                      s = this.translateY || 0,
                      r = this.x || 0,
                      a = this.y || 0,
                      l = this.textAlign || "left",
                      c = { left: 0, center: 0.5, right: 1 }[l],
                      d = this.styles,
                      p = d && d.whiteSpace;
                    if (
                      (o(e, { marginLeft: i, marginTop: s }),
                      !t.styledMode &&
                        this.shadows &&
                        this.shadows.forEach(function (t) {
                          o(t, { marginLeft: i + 1, marginTop: s + 1 });
                        }),
                      this.inverted &&
                        [].forEach.call(e.childNodes, function (i) {
                          t.invertChild(i, e);
                        }),
                      "SPAN" === e.tagName)
                    ) {
                      d = this.rotation;
                      var u,
                        f = this.textWidth && h(this.textWidth),
                        g = [
                          d,
                          l,
                          e.innerHTML,
                          this.textWidth,
                          this.textAlign,
                        ].join();
                      (u = f !== this.oldTextWidth) &&
                        !(u = f > this.oldTextWidth) &&
                        ((u = this.textPxLength) ||
                          (o(e, { width: "", whiteSpace: p || "nowrap" }),
                          (u = e.offsetWidth)),
                        (u = u > f)),
                        u &&
                        (/[ \-]/.test(e.textContent || e.innerText) ||
                          "ellipsis" === e.style.textOverflow)
                          ? (o(e, {
                              width: f + "px",
                              display: "block",
                              whiteSpace: p || "normal",
                            }),
                            (this.oldTextWidth = f),
                            (this.hasBoxWidthChanged = !0))
                          : (this.hasBoxWidthChanged = !1),
                        g !== this.cTT &&
                          ((p = t.fontMetrics(e.style.fontSize, e).b),
                          !n(d) ||
                            (d === (this.oldRotation || 0) &&
                              l === this.oldAlign) ||
                            this.setSpanRotation(d, c, p),
                          this.getSpanCorrection(
                            (!n(d) && this.textPxLength) || e.offsetWidth,
                            p,
                            c,
                            d,
                            l,
                          )),
                        o(e, {
                          left: r + (this.xCorr || 0) + "px",
                          top: a + (this.yCorr || 0) + "px",
                        }),
                        (this.cTT = g),
                        (this.oldRotation = d),
                        (this.oldAlign = l);
                    }
                  } else this.alignOnAdd = !0;
                },
                setSpanRotation: function (t, e, i) {
                  var s = {},
                    n = this.renderer.getTransformKey();
                  (s[n] = s.transform = "rotate(" + t + "deg)"),
                    (s[n + (l ? "Origin" : "-origin")] = s.transformOrigin =
                      100 * e + "% " + i + "px"),
                    o(this.element, s);
                },
                getSpanCorrection: function (t, e, i) {
                  (this.xCorr = -t * i), (this.yCorr = -e);
                },
              }),
                r(e.prototype, {
                  getTransformKey: function () {
                    return c && !/Edge/.test(u.navigator.userAgent)
                      ? "-ms-transform"
                      : d
                        ? "-webkit-transform"
                        : l
                          ? "MozTransform"
                          : u.opera
                            ? "-o-transform"
                            : "";
                  },
                  html: function (t, e, o) {
                    var n = this.createElement("span"),
                      h = n.element,
                      l = n.renderer,
                      c = l.isSVG,
                      d = function (t, e) {
                        ["opacity", "visibility"].forEach(function (i) {
                          t[i + "Setter"] = function (s, o, n) {
                            var r = t.div ? t.div.style : e;
                            p.prototype[i + "Setter"].call(this, s, o, n),
                              r && (r[o] = s);
                          };
                        }),
                          (t.addedSetters = !0);
                      };
                    return (
                      (n.textSetter = function (t) {
                        t !== h.innerHTML &&
                          (delete this.bBox, delete this.oldTextWidth),
                          (this.textStr = t),
                          (h.innerHTML = a(t, "")),
                          (n.doTransform = !0);
                      }),
                      c && d(n, n.element.style),
                      (n.xSetter =
                        n.ySetter =
                        n.alignSetter =
                        n.rotationSetter =
                          function (t, e) {
                            "align" === e && (e = "textAlign"),
                              (n[e] = t),
                              (n.doTransform = !0);
                          }),
                      (n.afterSetters = function () {
                        this.doTransform &&
                          (this.htmlUpdateTransform(), (this.doTransform = !1));
                      }),
                      n
                        .attr({ text: t, x: Math.round(e), y: Math.round(o) })
                        .css({ position: "absolute" }),
                      l.styledMode ||
                        n.css({
                          fontFamily: this.style.fontFamily,
                          fontSize: this.style.fontSize,
                        }),
                      (h.style.whiteSpace = "nowrap"),
                      (n.css = n.htmlCss),
                      c &&
                        (n.add = function (t) {
                          var e = l.box.parentNode,
                            o = [];
                          if ((this.parentGroup = t)) {
                            var a = t.div;
                            if (!a) {
                              for (; t; ) o.push(t), (t = t.parentGroup);
                              o.reverse().forEach(function (t) {
                                function h(e, i) {
                                  (t[i] = e),
                                    "translateX" === i
                                      ? (c.left = e + "px")
                                      : (c.top = e + "px"),
                                    (t.doTransform = !0);
                                }
                                var l = i(t.element, "class"),
                                  c = (a = t.div =
                                    t.div ||
                                    s(
                                      "div",
                                      l ? { className: l } : void 0,
                                      {
                                        position: "absolute",
                                        left: (t.translateX || 0) + "px",
                                        top: (t.translateY || 0) + "px",
                                        display: t.display,
                                        opacity: t.opacity,
                                        pointerEvents:
                                          t.styles && t.styles.pointerEvents,
                                      },
                                      a || e,
                                    )).style;
                                r(t, {
                                  classSetter: (function (t) {
                                    return function (e) {
                                      this.element.setAttribute("class", e),
                                        (t.className = e);
                                    };
                                  })(a),
                                  on: function () {
                                    return (
                                      o[0].div &&
                                        n.on.apply(
                                          { element: o[0].div },
                                          arguments,
                                        ),
                                      t
                                    );
                                  },
                                  translateXSetter: h,
                                  translateYSetter: h,
                                }),
                                  t.addedSetters || d(t);
                              });
                            }
                          } else a = e;
                          return (
                            a.appendChild(h),
                            (n.added = !0),
                            n.alignOnAdd && n.htmlUpdateTransform(),
                            n
                          );
                        }),
                      n
                    );
                  },
                });
            },
          ),
          e(
            i,
            "parts/Tick.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.clamp,
                s = e.correctFloat,
                o = e.defined,
                n = e.destroyObjectProperties,
                r = e.extend,
                a = e.fireEvent,
                h = e.isNumber,
                l = e.merge,
                c = e.objectEach,
                d = e.pick,
                p = t.deg2rad;
              return (
                (e = (function () {
                  function t(t, e, i, s, o) {
                    (this.isNewLabel = this.isNew = !0),
                      (this.axis = t),
                      (this.pos = e),
                      (this.type = i || ""),
                      (this.parameters = o || {}),
                      (this.tickmarkOffset = this.parameters.tickmarkOffset),
                      (this.options = this.parameters.options),
                      a(this, "init"),
                      i || s || this.addLabel();
                  }
                  return (
                    (t.prototype.addLabel = function () {
                      var t = this,
                        e = t.axis,
                        i = e.options,
                        n = e.chart,
                        a = e.categories,
                        h = e.logarithmic,
                        l = e.names,
                        c = t.pos,
                        p = d(t.options && t.options.labels, i.labels),
                        u = e.tickPositions,
                        f = c === u[0],
                        g = c === u[u.length - 1];
                      l =
                        this.parameters.category || (a ? d(a[c], l[c], c) : c);
                      var m,
                        y,
                        v = t.label;
                      if (
                        ((a =
                          (!p.step || 1 === p.step) && 1 === e.tickInterval),
                        (u = u.info),
                        e.dateTime && u)
                      )
                        var x = n.time.resolveDTLFormat(
                            i.dateTimeLabelFormats[
                              (!i.grid && u.higherRanks[c]) || u.unitName
                            ],
                          ),
                          b = x.main;
                      (t.isFirst = f),
                        (t.isLast = g),
                        (t.formatCtx = {
                          axis: e,
                          chart: n,
                          isFirst: f,
                          isLast: g,
                          dateTimeLabelFormat: b,
                          tickPositionInfo: u,
                          value: h ? s(h.lin2log(l)) : l,
                          pos: c,
                        }),
                        (i = e.labelFormatter.call(
                          t.formatCtx,
                          this.formatCtx,
                        )),
                        (y = x && x.list) &&
                          (t.shortenLabel = function () {
                            for (m = 0; m < y.length; m++)
                              if (
                                (v.attr({
                                  text: e.labelFormatter.call(
                                    r(t.formatCtx, {
                                      dateTimeLabelFormat: y[m],
                                    }),
                                  ),
                                }),
                                v.getBBox().width <
                                  e.getSlotWidth(t) - 2 * d(p.padding, 5))
                              )
                                return;
                            v.attr({ text: "" });
                          }),
                        a && e._addedPlotLB && e.isXAxis && t.moveLabel(i, p),
                        o(v) || t.movedLabel
                          ? v &&
                            v.textStr !== i &&
                            !a &&
                            (!v.textWidth ||
                              (p.style && p.style.width) ||
                              v.styles.width ||
                              v.css({ width: null }),
                            v.attr({ text: i }),
                            (v.textPxLength = v.getBBox().width))
                          : ((t.label = v =
                              t.createLabel({ x: 0, y: 0 }, i, p)),
                            (t.rotation = 0));
                    }),
                    (t.prototype.createLabel = function (t, e, i) {
                      var s = this.axis,
                        n = s.chart;
                      return (
                        (t =
                          o(e) && i.enabled
                            ? n.renderer
                                .text(e, t.x, t.y, i.useHTML)
                                .add(s.labelGroup)
                            : null) &&
                          (n.styledMode || t.css(l(i.style)),
                          (t.textPxLength = t.getBBox().width)),
                        t
                      );
                    }),
                    (t.prototype.destroy = function () {
                      n(this, this.axis);
                    }),
                    (t.prototype.getPosition = function (t, e, o, n) {
                      var r = this.axis,
                        h = r.chart,
                        l = (n && h.oldChartHeight) || h.chartHeight;
                      return (
                        ((t = {
                          x: t
                            ? s(r.translate(e + o, null, null, n) + r.transB)
                            : r.left +
                              r.offset +
                              (r.opposite
                                ? ((n && h.oldChartWidth) || h.chartWidth) -
                                  r.right -
                                  r.left
                                : 0),
                          y: t
                            ? l -
                              r.bottom +
                              r.offset -
                              (r.opposite ? r.height : 0)
                            : s(
                                l -
                                  r.translate(e + o, null, null, n) -
                                  r.transB,
                              ),
                        }).y = i(t.y, -1e5, 1e5)),
                        a(this, "afterGetPosition", { pos: t }),
                        t
                      );
                    }),
                    (t.prototype.getLabelPosition = function (
                      t,
                      e,
                      i,
                      s,
                      n,
                      r,
                      h,
                      l,
                    ) {
                      var c = this.axis,
                        d = c.transA,
                        u =
                          c.isLinked && c.linkedParent
                            ? c.linkedParent.reversed
                            : c.reversed,
                        f = c.staggerLines,
                        g = c.tickRotCorr || { x: 0, y: 0 },
                        m = n.y,
                        y =
                          s || c.reserveSpaceDefault
                            ? 0
                            : -c.labelOffset *
                              ("center" === c.labelAlign ? 0.5 : 1),
                        v = {};
                      return (
                        o(m) ||
                          (m =
                            0 === c.side
                              ? i.rotation
                                ? -8
                                : -i.getBBox().height
                              : 2 === c.side
                                ? g.y + 8
                                : Math.cos(i.rotation * p) *
                                  (g.y - i.getBBox(!1, 0).height / 2)),
                        (t =
                          t +
                          n.x +
                          y +
                          g.x -
                          (r && s ? r * d * (u ? -1 : 1) : 0)),
                        (e = e + m - (r && !s ? r * d * (u ? 1 : -1) : 0)),
                        f &&
                          ((i = (h / (l || 1)) % f),
                          c.opposite && (i = f - i - 1),
                          (e += (c.labelOffset / f) * i)),
                        (v.x = t),
                        (v.y = Math.round(e)),
                        a(this, "afterGetLabelPosition", {
                          pos: v,
                          tickmarkOffset: r,
                          index: h,
                        }),
                        v
                      );
                    }),
                    (t.prototype.getLabelSize = function () {
                      return this.label
                        ? this.label.getBBox()[
                            this.axis.horiz ? "height" : "width"
                          ]
                        : 0;
                    }),
                    (t.prototype.getMarkPath = function (t, e, i, s, o, n) {
                      return n.crispLine(
                        [
                          ["M", t, e],
                          ["L", t + (o ? 0 : -i), e + (o ? i : 0)],
                        ],
                        s,
                      );
                    }),
                    (t.prototype.handleOverflow = function (t) {
                      var e = this.axis,
                        i = e.options.labels,
                        s = t.x,
                        o = e.chart.chartWidth,
                        n = e.chart.spacing,
                        r = d(e.labelLeft, Math.min(e.pos, n[3]));
                      n = d(
                        e.labelRight,
                        Math.max(e.isRadial ? 0 : e.pos + e.len, o - n[1]),
                      );
                      var a,
                        h = this.label,
                        l = this.rotation,
                        c = { left: 0, center: 0.5, right: 1 }[
                          e.labelAlign || h.attr("align")
                        ],
                        u = h.getBBox().width,
                        f = e.getSlotWidth(this),
                        g = f,
                        m = 1,
                        y = {};
                      l || "justify" !== d(i.overflow, "justify")
                        ? 0 > l && s - c * u < r
                          ? (a = Math.round(s / Math.cos(l * p) - r))
                          : 0 < l &&
                            s + c * u > n &&
                            (a = Math.round((o - s) / Math.cos(l * p)))
                        : ((o = s + (1 - c) * u),
                          s - c * u < r
                            ? (g = t.x + g * (1 - c) - r)
                            : o > n && ((g = n - t.x + g * c), (m = -1)),
                          (g = Math.min(f, g)) < f &&
                            "center" === e.labelAlign &&
                            (t.x += m * (f - g - c * (f - Math.min(u, g)))),
                          (u > g ||
                            (e.autoRotation && (h.styles || {}).width)) &&
                            (a = g)),
                        a &&
                          (this.shortenLabel
                            ? this.shortenLabel()
                            : ((y.width = Math.floor(a) + "px"),
                              (i.style || {}).textOverflow ||
                                (y.textOverflow = "ellipsis"),
                              h.css(y)));
                    }),
                    (t.prototype.moveLabel = function (t, e) {
                      var i = this,
                        s = i.label,
                        o = !1,
                        n = i.axis,
                        r = n.reversed,
                        a = n.chart.inverted;
                      if (
                        (s && s.textStr === t
                          ? ((i.movedLabel = s), (o = !0), delete i.label)
                          : c(n.ticks, function (e) {
                              o ||
                                e.isNew ||
                                e === i ||
                                !e.label ||
                                e.label.textStr !== t ||
                                ((i.movedLabel = e.label),
                                (o = !0),
                                (e.labelPos = i.movedLabel.xy),
                                delete e.label);
                            }),
                        !o && (i.labelPos || s))
                      ) {
                        var h = i.labelPos || s.xy;
                        (s = a ? h.x : r ? 0 : n.width + n.left),
                          (n = a ? (r ? n.width + n.left : 0) : h.y),
                          (i.movedLabel = i.createLabel({ x: s, y: n }, t, e)),
                          i.movedLabel && i.movedLabel.attr({ opacity: 0 });
                      }
                    }),
                    (t.prototype.render = function (t, e, i) {
                      var s = this.axis,
                        o = s.horiz,
                        n = this.pos,
                        r = d(this.tickmarkOffset, s.tickmarkOffset);
                      r = (n = this.getPosition(o, n, r, e)).x;
                      var h = n.y;
                      (s =
                        (o && r === s.pos + s.len) || (!o && h === s.pos)
                          ? -1
                          : 1),
                        (i = d(i, 1)),
                        (this.isActive = !0),
                        this.renderGridLine(e, i, s),
                        this.renderMark(n, i, s),
                        this.renderLabel(n, e, i, t),
                        (this.isNew = !1),
                        a(this, "afterRender");
                    }),
                    (t.prototype.renderGridLine = function (t, e, i) {
                      var s = this.axis,
                        o = s.options,
                        n = this.gridLine,
                        r = {},
                        a = this.pos,
                        h = this.type,
                        l = d(this.tickmarkOffset, s.tickmarkOffset),
                        c = s.chart.renderer,
                        p = h ? h + "Grid" : "grid",
                        u = o[p + "LineWidth"],
                        f = o[p + "LineColor"];
                      (o = o[p + "LineDashStyle"]),
                        n ||
                          (s.chart.styledMode ||
                            ((r.stroke = f),
                            (r["stroke-width"] = u),
                            o && (r.dashstyle = o)),
                          h || (r.zIndex = 1),
                          t && (e = 0),
                          (this.gridLine = n =
                            c
                              .path()
                              .attr(r)
                              .addClass(
                                "highcharts-" +
                                  (h ? h + "-" : "") +
                                  "grid-line",
                              )
                              .add(s.gridGroup))),
                        n &&
                          (i = s.getPlotLinePath({
                            value: a + l,
                            lineWidth: n.strokeWidth() * i,
                            force: "pass",
                            old: t,
                          })) &&
                          n[t || this.isNew ? "attr" : "animate"]({
                            d: i,
                            opacity: e,
                          });
                    }),
                    (t.prototype.renderMark = function (t, e, i) {
                      var s = this.axis,
                        o = s.options,
                        n = s.chart.renderer,
                        r = this.type,
                        a = r ? r + "Tick" : "tick",
                        h = s.tickSize(a),
                        l = this.mark,
                        c = !l,
                        p = t.x;
                      t = t.y;
                      var u = d(o[a + "Width"], !r && s.isXAxis ? 1 : 0);
                      (o = o[a + "Color"]),
                        h &&
                          (s.opposite && (h[0] = -h[0]),
                          c &&
                            ((this.mark = l =
                              n
                                .path()
                                .addClass(
                                  "highcharts-" + (r ? r + "-" : "") + "tick",
                                )
                                .add(s.axisGroup)),
                            s.chart.styledMode ||
                              l.attr({ stroke: o, "stroke-width": u })),
                          l[c ? "attr" : "animate"]({
                            d: this.getMarkPath(
                              p,
                              t,
                              h[0],
                              l.strokeWidth() * i,
                              s.horiz,
                              n,
                            ),
                            opacity: e,
                          }));
                    }),
                    (t.prototype.renderLabel = function (t, e, i, s) {
                      var o = this.axis,
                        n = o.horiz,
                        r = o.options,
                        a = this.label,
                        l = r.labels,
                        c = l.step;
                      o = d(this.tickmarkOffset, o.tickmarkOffset);
                      var p = !0,
                        u = t.x;
                      (t = t.y),
                        a &&
                          h(u) &&
                          ((a.xy = t =
                            this.getLabelPosition(u, t, a, n, l, o, s, c)),
                          (this.isFirst &&
                            !this.isLast &&
                            !d(r.showFirstLabel, 1)) ||
                          (this.isLast &&
                            !this.isFirst &&
                            !d(r.showLastLabel, 1))
                            ? (p = !1)
                            : !n ||
                              l.step ||
                              l.rotation ||
                              e ||
                              0 === i ||
                              this.handleOverflow(t),
                          c && s % c && (p = !1),
                          p && h(t.y)
                            ? ((t.opacity = i),
                              a[this.isNewLabel ? "attr" : "animate"](t),
                              (this.isNewLabel = !1))
                            : (a.attr("y", -9999), (this.isNewLabel = !0)));
                    }),
                    (t.prototype.replaceMovedLabel = function () {
                      var t = this.label,
                        e = this.axis,
                        i = e.reversed,
                        s = this.axis.chart.inverted;
                      if (t && !this.isNew) {
                        var o = s ? t.xy.x : i ? e.left : e.width + e.left;
                        (i = s ? (i ? e.width + e.top : e.top) : t.xy.y),
                          t.animate(
                            { x: o, y: i, opacity: 0 },
                            void 0,
                            t.destroy,
                          ),
                          delete this.label;
                      }
                      (e.isDirty = !0),
                        (this.label = this.movedLabel),
                        delete this.movedLabel;
                    }),
                    t
                  );
                })()),
                (t.Tick = e),
                t.Tick
              );
            },
          ),
          e(
            i,
            "parts/Time.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.defined,
                s = e.error,
                o = e.extend,
                n = e.isObject,
                r = e.merge,
                a = e.objectEach,
                h = e.pad,
                l = e.pick,
                c = e.splat,
                d = e.timeUnits,
                p = t.win;
              return (
                (e = (function () {
                  function e(t) {
                    (this.options = {}),
                      (this.variableTimezone = this.useUTC = !1),
                      (this.Date = p.Date),
                      (this.getTimezoneOffset = this.timezoneOffsetFunction()),
                      this.update(t);
                  }
                  return (
                    (e.prototype.get = function (t, e) {
                      if (this.variableTimezone || this.timezoneOffset) {
                        var i = e.getTime(),
                          s = i - this.getTimezoneOffset(e);
                        return (
                          e.setTime(s), (t = e["getUTC" + t]()), e.setTime(i), t
                        );
                      }
                      return this.useUTC ? e["getUTC" + t]() : e["get" + t]();
                    }),
                    (e.prototype.set = function (t, e, i) {
                      if (this.variableTimezone || this.timezoneOffset) {
                        if (
                          "Milliseconds" === t ||
                          "Seconds" === t ||
                          "Minutes" === t
                        )
                          return e["setUTC" + t](i);
                        var s = this.getTimezoneOffset(e);
                        return (
                          (s = e.getTime() - s),
                          e.setTime(s),
                          e["setUTC" + t](i),
                          (t = this.getTimezoneOffset(e)),
                          (s = e.getTime() + t),
                          e.setTime(s)
                        );
                      }
                      return this.useUTC ? e["setUTC" + t](i) : e["set" + t](i);
                    }),
                    (e.prototype.update = function (t) {
                      var e = l(t && t.useUTC, !0);
                      (this.options = t = r(!0, this.options || {}, t)),
                        (this.Date = t.Date || p.Date || Date),
                        (this.timezoneOffset =
                          (this.useUTC = e) && t.timezoneOffset),
                        (this.getTimezoneOffset =
                          this.timezoneOffsetFunction()),
                        (this.variableTimezone = !(
                          e &&
                          !t.getTimezoneOffset &&
                          !t.timezone
                        ));
                    }),
                    (e.prototype.makeTime = function (e, i, s, o, n, r) {
                      if (this.useUTC) {
                        var a = this.Date.UTC.apply(0, arguments),
                          h = this.getTimezoneOffset(a);
                        a += h;
                        var c = this.getTimezoneOffset(a);
                        h !== c
                          ? (a += c - h)
                          : h - 36e5 !== this.getTimezoneOffset(a - 36e5) ||
                            t.isSafari ||
                            (a -= 36e5);
                      } else
                        a = new this.Date(
                          e,
                          i,
                          l(s, 1),
                          l(o, 0),
                          l(n, 0),
                          l(r, 0),
                        ).getTime();
                      return a;
                    }),
                    (e.prototype.timezoneOffsetFunction = function () {
                      var t = this,
                        e = this.options,
                        i = p.moment;
                      if (!this.useUTC)
                        return function (t) {
                          return (
                            6e4 * new Date(t.toString()).getTimezoneOffset()
                          );
                        };
                      if (e.timezone) {
                        if (i)
                          return function (t) {
                            return 6e4 * -i.tz(t, e.timezone).utcOffset();
                          };
                        s(25);
                      }
                      return this.useUTC && e.getTimezoneOffset
                        ? function (t) {
                            return 6e4 * e.getTimezoneOffset(t.valueOf());
                          }
                        : function () {
                            return 6e4 * (t.timezoneOffset || 0);
                          };
                    }),
                    (e.prototype.dateFormat = function (e, s, n) {
                      var r;
                      if (!i(s) || isNaN(s))
                        return (
                          (null === (r = t.defaultOptions.lang) || void 0 === r
                            ? void 0
                            : r.invalidDate) || ""
                        );
                      e = l(e, "%Y-%m-%d %H:%M:%S");
                      var c = this;
                      r = new this.Date(s);
                      var d = this.get("Hours", r),
                        p = this.get("Day", r),
                        u = this.get("Date", r),
                        f = this.get("Month", r),
                        g = this.get("FullYear", r),
                        m = t.defaultOptions.lang,
                        y = null === m || void 0 === m ? void 0 : m.weekdays,
                        v =
                          null === m || void 0 === m ? void 0 : m.shortWeekdays;
                      return (
                        (r = o(
                          {
                            a: v ? v[p] : y[p].substr(0, 3),
                            A: y[p],
                            d: h(u),
                            e: h(u, 2, " "),
                            w: p,
                            b: m.shortMonths[f],
                            B: m.months[f],
                            m: h(f + 1),
                            o: f + 1,
                            y: g.toString().substr(2, 2),
                            Y: g,
                            H: h(d),
                            k: d,
                            I: h(d % 12 || 12),
                            l: d % 12 || 12,
                            M: h(this.get("Minutes", r)),
                            p: 12 > d ? "AM" : "PM",
                            P: 12 > d ? "am" : "pm",
                            S: h(r.getSeconds()),
                            L: h(Math.floor(s % 1e3), 3),
                          },
                          t.dateFormats,
                        )),
                        a(r, function (t, i) {
                          for (; -1 !== e.indexOf("%" + i); )
                            e = e.replace(
                              "%" + i,
                              "function" === typeof t ? t.call(c, s) : t,
                            );
                        }),
                        n ? e.substr(0, 1).toUpperCase() + e.substr(1) : e
                      );
                    }),
                    (e.prototype.resolveDTLFormat = function (t) {
                      return n(t, !0)
                        ? t
                        : { main: (t = c(t))[0], from: t[1], to: t[2] };
                    }),
                    (e.prototype.getTimeTicks = function (t, e, s, n) {
                      var r,
                        a = this,
                        h = [],
                        c = {},
                        p = new a.Date(e),
                        u = t.unitRange,
                        f = t.count || 1;
                      if (((n = l(n, 1)), i(e))) {
                        if (
                          (a.set(
                            "Milliseconds",
                            p,
                            u >= d.second
                              ? 0
                              : f * Math.floor(a.get("Milliseconds", p) / f),
                          ),
                          u >= d.second &&
                            a.set(
                              "Seconds",
                              p,
                              u >= d.minute
                                ? 0
                                : f * Math.floor(a.get("Seconds", p) / f),
                            ),
                          u >= d.minute &&
                            a.set(
                              "Minutes",
                              p,
                              u >= d.hour
                                ? 0
                                : f * Math.floor(a.get("Minutes", p) / f),
                            ),
                          u >= d.hour &&
                            a.set(
                              "Hours",
                              p,
                              u >= d.day
                                ? 0
                                : f * Math.floor(a.get("Hours", p) / f),
                            ),
                          u >= d.day &&
                            a.set(
                              "Date",
                              p,
                              u >= d.month
                                ? 1
                                : Math.max(
                                    1,
                                    f * Math.floor(a.get("Date", p) / f),
                                  ),
                            ),
                          u >= d.month)
                        ) {
                          a.set(
                            "Month",
                            p,
                            u >= d.year
                              ? 0
                              : f * Math.floor(a.get("Month", p) / f),
                          );
                          var g = a.get("FullYear", p);
                        }
                        u >= d.year && a.set("FullYear", p, g - (g % f)),
                          u === d.week &&
                            ((g = a.get("Day", p)),
                            a.set(
                              "Date",
                              p,
                              a.get("Date", p) - g + n + (g < n ? -7 : 0),
                            )),
                          (g = a.get("FullYear", p)),
                          (n = a.get("Month", p));
                        var m = a.get("Date", p),
                          y = a.get("Hours", p);
                        for (
                          e = p.getTime(),
                            a.variableTimezone &&
                              (r =
                                s - e > 4 * d.month ||
                                a.getTimezoneOffset(e) !==
                                  a.getTimezoneOffset(s)),
                            e = p.getTime(),
                            p = 1;
                          e < s;

                        )
                          h.push(e),
                            (e =
                              u === d.year
                                ? a.makeTime(g + p * f, 0)
                                : u === d.month
                                  ? a.makeTime(g, n + p * f)
                                  : !r || (u !== d.day && u !== d.week)
                                    ? r && u === d.hour && 1 < f
                                      ? a.makeTime(g, n, m, y + p * f)
                                      : e + u * f
                                    : a.makeTime(
                                        g,
                                        n,
                                        m + p * f * (u === d.day ? 1 : 7),
                                      )),
                            p++;
                        h.push(e),
                          u <= d.hour &&
                            1e4 > h.length &&
                            h.forEach(function (t) {
                              0 === t % 18e5 &&
                                "000000000" === a.dateFormat("%H%M%S%L", t) &&
                                (c[t] = "day");
                            });
                      }
                      return (
                        (h.info = o(t, { higherRanks: c, totalRange: u * f })),
                        h
                      );
                    }),
                    (e.defaultOptions = {
                      Date: void 0,
                      getTimezoneOffset: void 0,
                      timezone: void 0,
                      timezoneOffset: 0,
                      useUTC: !0,
                    }),
                    e
                  );
                })()),
                (t.Time = e),
                t.Time
              );
            },
          ),
          e(
            i,
            "parts/Options.js",
            [
              i["parts/Globals.js"],
              i["parts/Time.js"],
              i["parts/Color.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              i = i.parse;
              var o = s.merge;
              (t.defaultOptions = {
                colors:
                  "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(
                    " ",
                  ),
                symbols: [
                  "circle",
                  "diamond",
                  "square",
                  "triangle",
                  "triangle-down",
                ],
                lang: {
                  loading: "Loading...",
                  months:
                    "January February March April May June July August September October November December".split(
                      " ",
                    ),
                  shortMonths:
                    "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(
                      " ",
                    ),
                  weekdays:
                    "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
                      " ",
                    ),
                  decimalPoint: ".",
                  numericSymbols: "kMGTPE".split(""),
                  resetZoom: "Reset zoom",
                  resetZoomTitle: "Reset zoom level 1:1",
                  thousandsSep: " ",
                },
                global: {},
                time: e.defaultOptions,
                chart: {
                  styledMode: !1,
                  borderRadius: 0,
                  colorCount: 10,
                  defaultSeriesType: "line",
                  ignoreHiddenSeries: !0,
                  spacing: [10, 10, 15, 10],
                  resetZoomButton: {
                    theme: { zIndex: 6 },
                    position: { align: "right", x: -10, y: 10 },
                  },
                  width: null,
                  height: null,
                  borderColor: "#335cad",
                  backgroundColor: "#ffffff",
                  plotBorderColor: "#cccccc",
                },
                title: {
                  text: "Chart title",
                  align: "center",
                  margin: 15,
                  widthAdjust: -44,
                },
                subtitle: { text: "", align: "center", widthAdjust: -44 },
                caption: {
                  margin: 15,
                  text: "",
                  align: "left",
                  verticalAlign: "bottom",
                },
                plotOptions: {},
                labels: { style: { position: "absolute", color: "#333333" } },
                legend: {
                  enabled: !0,
                  align: "center",
                  alignColumns: !0,
                  layout: "horizontal",
                  labelFormatter: function () {
                    return this.name;
                  },
                  borderColor: "#999999",
                  borderRadius: 0,
                  navigation: {
                    activeColor: "#003399",
                    inactiveColor: "#cccccc",
                  },
                  itemStyle: {
                    color: "#333333",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textOverflow: "ellipsis",
                  },
                  itemHoverStyle: { color: "#000000" },
                  itemHiddenStyle: { color: "#cccccc" },
                  shadow: !1,
                  itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px",
                    height: "13px",
                  },
                  squareSymbol: !0,
                  symbolPadding: 5,
                  verticalAlign: "bottom",
                  x: 0,
                  y: 0,
                  title: { style: { fontWeight: "bold" } },
                },
                loading: {
                  labelStyle: {
                    fontWeight: "bold",
                    position: "relative",
                    top: "45%",
                  },
                  style: {
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    opacity: 0.5,
                    textAlign: "center",
                  },
                },
                tooltip: {
                  enabled: !0,
                  animation: t.svg,
                  borderRadius: 3,
                  dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y",
                  },
                  footerFormat: "",
                  padding: 8,
                  snap: t.isTouchDevice ? 25 : 10,
                  headerFormat:
                    '<span style="font-size: 10px">{point.key}</span><br/>',
                  pointFormat:
                    '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
                  backgroundColor: i("#f7f7f7").setOpacity(0.85).get(),
                  borderWidth: 1,
                  shadow: !0,
                  style: {
                    color: "#333333",
                    cursor: "default",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  },
                },
                credits: {
                  enabled: !0,
                  href: "https://www.highcharts.com?credits",
                  position: {
                    align: "right",
                    x: -10,
                    verticalAlign: "bottom",
                    y: -5,
                  },
                  style: {
                    cursor: "pointer",
                    color: "#999999",
                    fontSize: "9px",
                  },
                  text: "Highcharts.com",
                },
              }),
                (t.setOptions = function (e) {
                  return (
                    (t.defaultOptions = o(!0, t.defaultOptions, e)),
                    (e.time || e.global) &&
                      t.time.update(
                        o(
                          t.defaultOptions.global,
                          t.defaultOptions.time,
                          e.global,
                          e.time,
                        ),
                      ),
                    t.defaultOptions
                  );
                }),
                (t.getOptions = function () {
                  return t.defaultOptions;
                }),
                (t.defaultPlotOptions = t.defaultOptions.plotOptions),
                (t.time = new e(
                  o(t.defaultOptions.global, t.defaultOptions.time),
                )),
                (t.dateFormat = function (e, i, s) {
                  return t.time.dateFormat(e, i, s);
                });
            },
          ),
          e(
            i,
            "parts/Axis.js",
            [
              i["parts/Color.js"],
              i["parts/Globals.js"],
              i["parts/Tick.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = s.addEvent,
                n = s.animObject,
                r = s.arrayMax,
                a = s.arrayMin,
                h = s.clamp,
                l = s.correctFloat,
                c = s.defined,
                d = s.destroyObjectProperties,
                p = s.error,
                u = s.extend,
                f = s.fireEvent,
                g = s.format,
                m = s.getMagnitude,
                y = s.isArray,
                v = s.isFunction,
                x = s.isNumber,
                b = s.isString,
                k = s.merge,
                M = s.normalizeTickInterval,
                w = s.objectEach,
                S = s.pick,
                T = s.relativeLength,
                A = s.removeEvent,
                P = s.splat,
                L = s.syncTimeout,
                C = e.defaultOptions,
                O = e.deg2rad;
              return (
                (s = (function () {
                  function s(t, e) {
                    (this.zoomEnabled =
                      this.width =
                      this.visible =
                      this.userOptions =
                      this.translationSlope =
                      this.transB =
                      this.transA =
                      this.top =
                      this.ticks =
                      this.tickRotCorr =
                      this.tickPositions =
                      this.tickmarkOffset =
                      this.tickInterval =
                      this.tickAmount =
                      this.side =
                      this.series =
                      this.right =
                      this.positiveValuesOnly =
                      this.pos =
                      this.pointRangePadding =
                      this.pointRange =
                      this.plotLinesAndBandsGroups =
                      this.plotLinesAndBands =
                      this.paddedTicks =
                      this.overlap =
                      this.options =
                      this.oldMin =
                      this.oldMax =
                      this.offset =
                      this.names =
                      this.minPixelPadding =
                      this.minorTicks =
                      this.minorTickInterval =
                      this.min =
                      this.maxLabelLength =
                      this.max =
                      this.len =
                      this.left =
                      this.labelFormatter =
                      this.labelEdge =
                      this.isLinked =
                      this.height =
                      this.hasVisibleSeries =
                      this.hasNames =
                      this.coll =
                      this.closestPointRange =
                      this.chart =
                      this.categories =
                      this.bottom =
                      this.alternateBands =
                        void 0),
                      this.init(t, e);
                  }
                  return (
                    (s.prototype.init = function (t, e) {
                      var i = e.isX,
                        s = this;
                      (s.chart = t),
                        (s.horiz = t.inverted && !s.isZAxis ? !i : i),
                        (s.isXAxis = i),
                        (s.coll = s.coll || (i ? "xAxis" : "yAxis")),
                        f(this, "init", { userOptions: e }),
                        (s.opposite = e.opposite),
                        (s.side =
                          e.side ||
                          (s.horiz
                            ? s.opposite
                              ? 0
                              : 2
                            : s.opposite
                              ? 1
                              : 3)),
                        s.setOptions(e);
                      var n = this.options,
                        r = n.type;
                      (s.labelFormatter =
                        n.labels.formatter || s.defaultLabelFormatter),
                        (s.userOptions = e),
                        (s.minPixelPadding = 0),
                        (s.reversed = n.reversed),
                        (s.visible = !1 !== n.visible),
                        (s.zoomEnabled = !1 !== n.zoomEnabled),
                        (s.hasNames = "category" === r || !0 === n.categories),
                        (s.categories = n.categories || s.hasNames),
                        s.names || ((s.names = []), (s.names.keys = {})),
                        (s.plotLinesAndBandsGroups = {}),
                        (s.positiveValuesOnly = !(
                          !s.logarithmic || n.allowNegativeLog
                        )),
                        (s.isLinked = c(n.linkedTo)),
                        (s.ticks = {}),
                        (s.labelEdge = []),
                        (s.minorTicks = {}),
                        (s.plotLinesAndBands = []),
                        (s.alternateBands = {}),
                        (s.len = 0),
                        (s.minRange = s.userMinRange = n.minRange || n.maxZoom),
                        (s.range = n.range),
                        (s.offset = n.offset || 0),
                        (s.max = null),
                        (s.min = null),
                        (s.crosshair = S(
                          n.crosshair,
                          P(t.options.tooltip.crosshairs)[i ? 0 : 1],
                          !1,
                        )),
                        (e = s.options.events),
                        -1 === t.axes.indexOf(s) &&
                          (i
                            ? t.axes.splice(t.xAxis.length, 0, s)
                            : t.axes.push(s),
                          t[s.coll].push(s)),
                        (s.series = s.series || []),
                        t.inverted &&
                          !s.isZAxis &&
                          i &&
                          "undefined" === typeof s.reversed &&
                          (s.reversed = !0),
                        (s.labelRotation = s.options.labels.rotation),
                        w(e, function (t, e) {
                          v(t) && o(s, e, t);
                        }),
                        f(this, "afterInit");
                    }),
                    (s.prototype.setOptions = function (t) {
                      (this.options = k(
                        s.defaultOptions,
                        "yAxis" === this.coll && s.defaultYAxisOptions,
                        [
                          s.defaultTopAxisOptions,
                          s.defaultRightAxisOptions,
                          s.defaultBottomAxisOptions,
                          s.defaultLeftAxisOptions,
                        ][this.side],
                        k(C[this.coll], t),
                      )),
                        f(this, "afterSetOptions", { userOptions: t });
                    }),
                    (s.prototype.defaultLabelFormatter = function () {
                      var t = this.axis,
                        e = this.value,
                        i = t.chart.time,
                        s = t.categories,
                        o = this.dateTimeLabelFormat,
                        n = C.lang,
                        r = n.numericSymbols;
                      n = n.numericSymbolMagnitude || 1e3;
                      var a = r && r.length,
                        h = t.options.labels.format;
                      t = t.logarithmic ? Math.abs(e) : t.tickInterval;
                      var l = this.chart,
                        c = l.numberFormatter;
                      if (h) var d = g(h, this, l);
                      else if (s) d = e;
                      else if (o) d = i.dateFormat(o, e);
                      else if (a && 1e3 <= t)
                        for (; a-- && "undefined" === typeof d; )
                          t >= (i = Math.pow(n, a + 1)) &&
                            0 === (10 * e) % i &&
                            null !== r[a] &&
                            0 !== e &&
                            (d = c(e / i, -1) + r[a]);
                      return (
                        "undefined" === typeof d &&
                          (d =
                            1e4 <= Math.abs(e)
                              ? c(e, -1)
                              : c(e, -1, void 0, "")),
                        d
                      );
                    }),
                    (s.prototype.getSeriesExtremes = function () {
                      var t,
                        e = this,
                        i = e.chart;
                      f(this, "getSeriesExtremes", null, function () {
                        (e.hasVisibleSeries = !1),
                          (e.dataMin = e.dataMax = e.threshold = null),
                          (e.softThreshold = !e.isXAxis),
                          e.stacking && e.stacking.buildStacks(),
                          e.series.forEach(function (s) {
                            if (
                              s.visible ||
                              !i.options.chart.ignoreHiddenSeries
                            ) {
                              var o = s.options,
                                n = o.threshold;
                              if (
                                ((e.hasVisibleSeries = !0),
                                e.positiveValuesOnly && 0 >= n && (n = null),
                                e.isXAxis)
                              ) {
                                if ((o = s.xData).length) {
                                  var r = (t = s.getXExtremes(o)).min,
                                    a = t.max;
                                  x(r) ||
                                    r instanceof Date ||
                                    ((o = o.filter(x)),
                                    (r = (t = s.getXExtremes(o)).min),
                                    (a = t.max)),
                                    o.length &&
                                      ((e.dataMin = Math.min(
                                        S(e.dataMin, r),
                                        r,
                                      )),
                                      (e.dataMax = Math.max(
                                        S(e.dataMax, a),
                                        a,
                                      )));
                                }
                              } else
                                (s = s.applyExtremes()),
                                  x(s.dataMin) &&
                                    ((r = s.dataMin),
                                    (e.dataMin = Math.min(S(e.dataMin, r), r))),
                                  x(s.dataMax) &&
                                    ((a = s.dataMax),
                                    (e.dataMax = Math.max(S(e.dataMax, a), a))),
                                  c(n) && (e.threshold = n),
                                  (!o.softThreshold || e.positiveValuesOnly) &&
                                    (e.softThreshold = !1);
                            }
                          });
                      }),
                        f(this, "afterGetSeriesExtremes");
                    }),
                    (s.prototype.translate = function (t, e, i, s, o, n) {
                      var r = this.linkedParent || this,
                        a = 1,
                        h = 0,
                        l = s ? r.oldTransA : r.transA;
                      s = s ? r.oldMin : r.min;
                      var c = r.minPixelPadding;
                      return (
                        (o =
                          (r.isOrdinal ||
                            (r.brokenAxis && r.brokenAxis.hasBreaks) ||
                            (r.logarithmic && o)) &&
                          r.lin2val),
                        l || (l = r.transA),
                        i && ((a *= -1), (h = r.len)),
                        r.reversed && (h -= (a *= -1) * (r.sector || r.len)),
                        e
                          ? ((t = (t * a + h - c) / l + s),
                            o && (t = r.lin2val(t)))
                          : (o && (t = r.val2lin(t)),
                            (t = x(s)
                              ? a * (t - s) * l + h + a * c + (x(n) ? l * n : 0)
                              : void 0)),
                        t
                      );
                    }),
                    (s.prototype.toPixels = function (t, e) {
                      return (
                        this.translate(t, !1, !this.horiz, null, !0) +
                        (e ? 0 : this.pos)
                      );
                    }),
                    (s.prototype.toValue = function (t, e) {
                      return this.translate(
                        t - (e ? 0 : this.pos),
                        !0,
                        !this.horiz,
                        null,
                        !0,
                      );
                    }),
                    (s.prototype.getPlotLinePath = function (t) {
                      function e(t, e, i) {
                        return (
                          (("pass" !== y && t < e) || t > i) &&
                            (y ? (t = h(t, e, i)) : (r = !0)),
                          t
                        );
                      }
                      var i,
                        s,
                        o,
                        n,
                        r,
                        a = this,
                        l = a.chart,
                        c = a.left,
                        d = a.top,
                        p = t.old,
                        u = t.value,
                        g = t.translatedValue,
                        m = t.lineWidth,
                        y = t.force,
                        v = (p && l.oldChartHeight) || l.chartHeight,
                        b = (p && l.oldChartWidth) || l.chartWidth,
                        k = a.transB;
                      return (
                        (t = {
                          value: u,
                          lineWidth: m,
                          old: p,
                          force: y,
                          acrossPanes: t.acrossPanes,
                          translatedValue: g,
                        }),
                        f(this, "getPlotLinePath", t, function (t) {
                          (g = S(g, a.translate(u, null, null, p))),
                            (g = h(g, -1e5, 1e5)),
                            (i = o = Math.round(g + k)),
                            (s = n = Math.round(v - g - k)),
                            x(g)
                              ? a.horiz
                                ? ((s = d),
                                  (n = v - a.bottom),
                                  (i = o = e(i, c, c + a.width)))
                                : ((i = c),
                                  (o = b - a.right),
                                  (s = n = e(s, d, d + a.height)))
                              : ((r = !0), (y = !1)),
                            (t.path =
                              r && !y
                                ? null
                                : l.renderer.crispLine(
                                    [
                                      ["M", i, s],
                                      ["L", o, n],
                                    ],
                                    m || 1,
                                  ));
                        }),
                        t.path
                      );
                    }),
                    (s.prototype.getLinearTickPositions = function (t, e, i) {
                      var s = l(Math.floor(e / t) * t);
                      i = l(Math.ceil(i / t) * t);
                      var o,
                        n = [];
                      if ((l(s + t) === s && (o = 20), this.single)) return [e];
                      for (
                        e = s;
                        e <= i && (n.push(e), (e = l(e + t, o)) !== r);

                      )
                        var r = e;
                      return n;
                    }),
                    (s.prototype.getMinorTickInterval = function () {
                      var t = this.options;
                      return !0 === t.minorTicks
                        ? S(t.minorTickInterval, "auto")
                        : !1 === t.minorTicks
                          ? null
                          : t.minorTickInterval;
                    }),
                    (s.prototype.getMinorTickPositions = function () {
                      var t = this.options,
                        e = this.tickPositions,
                        i = this.minorTickInterval,
                        s = [],
                        o = this.pointRangePadding || 0,
                        n = this.min - o,
                        r = (o = this.max + o) - n;
                      if (r && r / i < this.len / 3) {
                        var a = this.logarithmic;
                        if (a)
                          this.paddedTicks.forEach(function (t, e, o) {
                            e &&
                              s.push.apply(
                                s,
                                a.getLogTickPositions(i, o[e - 1], o[e], !0),
                              );
                          });
                        else if (
                          this.dateTime &&
                          "auto" === this.getMinorTickInterval()
                        )
                          s = s.concat(
                            this.getTimeTicks(
                              this.dateTime.normalizeTimeTickInterval(i),
                              n,
                              o,
                              t.startOfWeek,
                            ),
                          );
                        else
                          for (
                            t = n + ((e[0] - n) % i);
                            t <= o && t !== s[0];
                            t += i
                          )
                            s.push(t);
                      }
                      return 0 !== s.length && this.trimTicks(s), s;
                    }),
                    (s.prototype.adjustForMinRange = function () {
                      var t,
                        e,
                        i,
                        s,
                        o = this.options,
                        n = this.min,
                        h = this.max,
                        l = this.logarithmic;
                      if (
                        (this.isXAxis &&
                          "undefined" === typeof this.minRange &&
                          !l &&
                          (c(o.min) || c(o.max)
                            ? (this.minRange = null)
                            : (this.series.forEach(function (o) {
                                for (
                                  s = o.xData,
                                    e = o.xIncrement ? 1 : s.length - 1;
                                  0 < e;
                                  e--
                                )
                                  (i = s[e] - s[e - 1]),
                                    ("undefined" === typeof t || i < t) &&
                                      (t = i);
                              }),
                              (this.minRange = Math.min(
                                5 * t,
                                this.dataMax - this.dataMin,
                              )))),
                        h - n < this.minRange)
                      ) {
                        var d = this.dataMax - this.dataMin >= this.minRange,
                          p = this.minRange,
                          u = (p - h + n) / 2;
                        (u = [n - u, S(o.min, n - u)]),
                          d &&
                            (u[2] = this.logarithmic
                              ? this.logarithmic.log2lin(this.dataMin)
                              : this.dataMin),
                          (h = [(n = r(u)) + p, S(o.max, n + p)]),
                          d &&
                            (h[2] = l ? l.log2lin(this.dataMax) : this.dataMax),
                          (h = a(h)) - n < p &&
                            ((u[0] = h - p),
                            (u[1] = S(o.min, h - p)),
                            (n = r(u)));
                      }
                      (this.min = n), (this.max = h);
                    }),
                    (s.prototype.getClosest = function () {
                      var t;
                      return (
                        this.categories
                          ? (t = 1)
                          : this.series.forEach(function (e) {
                              var i = e.closestPointRange,
                                s =
                                  e.visible ||
                                  !e.chart.options.chart.ignoreHiddenSeries;
                              !e.noSharedTooltip &&
                                c(i) &&
                                s &&
                                (t = c(t) ? Math.min(t, i) : i);
                            }),
                        t
                      );
                    }),
                    (s.prototype.nameToX = function (t) {
                      var e = y(this.categories),
                        i = e ? this.categories : this.names,
                        s = t.options.x;
                      if (
                        ((t.series.requireSorting = !1),
                        c(s) ||
                          (s =
                            !1 === this.options.uniqueNames
                              ? t.series.autoIncrement()
                              : e
                                ? i.indexOf(t.name)
                                : S(i.keys[t.name], -1)),
                        -1 === s)
                      ) {
                        if (!e) var o = i.length;
                      } else o = s;
                      return (
                        "undefined" !== typeof o &&
                          ((this.names[o] = t.name),
                          (this.names.keys[t.name] = o)),
                        o
                      );
                    }),
                    (s.prototype.updateNames = function () {
                      var t = this,
                        e = this.names;
                      0 < e.length &&
                        (Object.keys(e.keys).forEach(function (t) {
                          delete e.keys[t];
                        }),
                        (e.length = 0),
                        (this.minRange = this.userMinRange),
                        (this.series || []).forEach(function (e) {
                          (e.xIncrement = null),
                            (e.points && !e.isDirtyData) ||
                              ((t.max = Math.max(t.max, e.xData.length - 1)),
                              e.processData(),
                              e.generatePoints()),
                            e.data.forEach(function (i, s) {
                              if (
                                i &&
                                i.options &&
                                "undefined" !== typeof i.name
                              ) {
                                var o = t.nameToX(i);
                                "undefined" !== typeof o &&
                                  o !== i.x &&
                                  ((i.x = o), (e.xData[s] = o));
                              }
                            });
                        }));
                    }),
                    (s.prototype.setAxisTranslation = function (t) {
                      var e = this,
                        i = e.max - e.min,
                        s = e.axisPointRange || 0,
                        o = 0,
                        n = 0,
                        r = e.linkedParent,
                        a = !!e.categories,
                        h = e.transA,
                        l = e.isXAxis;
                      if (l || a || s) {
                        var c = e.getClosest();
                        r
                          ? ((o = r.minPointOffset), (n = r.pointRangePadding))
                          : e.series.forEach(function (t) {
                              var i = a
                                  ? 1
                                  : l
                                    ? S(t.options.pointRange, c, 0)
                                    : e.axisPointRange || 0,
                                r = t.options.pointPlacement;
                              (s = Math.max(s, i)),
                                (e.single && !a) ||
                                  ((t = t.is("xrange") ? !l : l),
                                  (o = Math.max(o, t && b(r) ? 0 : i / 2)),
                                  (n = Math.max(n, t && "on" === r ? 0 : i)));
                            }),
                          (r =
                            e.ordinal && e.ordinal.slope && c
                              ? e.ordinal.slope / c
                              : 1),
                          (e.minPointOffset = o *= r),
                          (e.pointRangePadding = n *= r),
                          (e.pointRange = Math.min(s, e.single && a ? 1 : i)),
                          l && (e.closestPointRange = c);
                      }
                      t && (e.oldTransA = h),
                        (e.translationSlope =
                          e.transA =
                          h =
                            e.staticScale || e.len / (i + n || 1)),
                        (e.transB = e.horiz ? e.left : e.bottom),
                        (e.minPixelPadding = h * o),
                        f(this, "afterSetAxisTranslation");
                    }),
                    (s.prototype.minFromRange = function () {
                      return this.max - this.range;
                    }),
                    (s.prototype.setTickInterval = function (t) {
                      var e = this,
                        i = e.chart,
                        s = e.logarithmic,
                        o = e.options,
                        n = e.isXAxis,
                        r = e.isLinked,
                        a = o.maxPadding,
                        h = o.minPadding,
                        d = o.tickInterval,
                        u = o.tickPixelInterval,
                        g = e.categories,
                        y = x(e.threshold) ? e.threshold : null,
                        v = e.softThreshold;
                      e.dateTime || g || r || this.getTickAmount();
                      var b = S(e.userMin, o.min),
                        k = S(e.userMax, o.max);
                      if (r) {
                        e.linkedParent = i[e.coll][o.linkedTo];
                        var w = e.linkedParent.getExtremes();
                        (e.min = S(w.min, w.dataMin)),
                          (e.max = S(w.max, w.dataMax)),
                          o.type !== e.linkedParent.options.type && p(11, 1, i);
                      } else {
                        if (!v && c(y))
                          if (e.dataMin >= y) (w = y), (h = 0);
                          else if (e.dataMax <= y) {
                            var T = y;
                            a = 0;
                          }
                        (e.min = S(b, w, e.dataMin)),
                          (e.max = S(k, T, e.dataMax));
                      }
                      s &&
                        (e.positiveValuesOnly &&
                          !t &&
                          0 >= Math.min(e.min, S(e.dataMin, e.min)) &&
                          p(10, 1, i),
                        (e.min = l(s.log2lin(e.min), 16)),
                        (e.max = l(s.log2lin(e.max), 16))),
                        e.range &&
                          c(e.max) &&
                          ((e.userMin =
                            e.min =
                            b =
                              Math.max(e.dataMin, e.minFromRange())),
                          (e.userMax = k = e.max),
                          (e.range = null)),
                        f(e, "foundExtremes"),
                        e.beforePadding && e.beforePadding(),
                        e.adjustForMinRange(),
                        !(
                          g ||
                          e.axisPointRange ||
                          (e.stacking && e.stacking.usePercentage) ||
                          r
                        ) &&
                          c(e.min) &&
                          c(e.max) &&
                          (i = e.max - e.min) &&
                          (!c(b) && h && (e.min -= i * h),
                          !c(k) && a && (e.max += i * a)),
                        x(e.userMin) ||
                          (x(o.softMin) &&
                            o.softMin < e.min &&
                            (e.min = b = o.softMin),
                          x(o.floor) && (e.min = Math.max(e.min, o.floor))),
                        x(e.userMax) ||
                          (x(o.softMax) &&
                            o.softMax > e.max &&
                            (e.max = k = o.softMax),
                          x(o.ceiling) && (e.max = Math.min(e.max, o.ceiling))),
                        v &&
                          c(e.dataMin) &&
                          ((y = y || 0),
                          !c(b) && e.min < y && e.dataMin >= y
                            ? (e.min = e.options.minRange
                                ? Math.min(y, e.max - e.minRange)
                                : y)
                            : !c(k) &&
                              e.max > y &&
                              e.dataMax <= y &&
                              (e.max = e.options.minRange
                                ? Math.max(y, e.min + e.minRange)
                                : y)),
                        (e.tickInterval =
                          e.min === e.max ||
                          "undefined" === typeof e.min ||
                          "undefined" === typeof e.max
                            ? 1
                            : r &&
                                !d &&
                                u === e.linkedParent.options.tickPixelInterval
                              ? (d = e.linkedParent.tickInterval)
                              : S(
                                  d,
                                  this.tickAmount
                                    ? (e.max - e.min) /
                                        Math.max(this.tickAmount - 1, 1)
                                    : void 0,
                                  g
                                    ? 1
                                    : ((e.max - e.min) * u) /
                                        Math.max(e.len, u),
                                )),
                        n &&
                          !t &&
                          e.series.forEach(function (t) {
                            t.processData(
                              e.min !== e.oldMin || e.max !== e.oldMax,
                            );
                          }),
                        e.setAxisTranslation(!0),
                        e.beforeSetTickPositions && e.beforeSetTickPositions(),
                        e.ordinal &&
                          (e.tickInterval = e.ordinal.postProcessTickInterval(
                            e.tickInterval,
                          )),
                        e.pointRange &&
                          !d &&
                          (e.tickInterval = Math.max(
                            e.pointRange,
                            e.tickInterval,
                          )),
                        (t = S(
                          o.minTickInterval,
                          e.dateTime && e.closestPointRange,
                        )),
                        !d && e.tickInterval < t && (e.tickInterval = t),
                        e.dateTime ||
                          e.logarithmic ||
                          d ||
                          (e.tickInterval = M(
                            e.tickInterval,
                            void 0,
                            m(e.tickInterval),
                            S(
                              o.allowDecimals,
                              0.5 > e.tickInterval ||
                                void 0 !== this.tickAmount,
                            ),
                            !!this.tickAmount,
                          )),
                        this.tickAmount || (e.tickInterval = e.unsquish()),
                        this.setTickPositions();
                    }),
                    (s.prototype.setTickPositions = function () {
                      var t = this.options,
                        e = t.tickPositions,
                        i = this.getMinorTickInterval(),
                        s = t.tickPositioner,
                        o = this.hasVerticalPanning(),
                        n = "colorAxis" === this.coll,
                        r = (n || !o) && t.startOnTick;
                      (o = (n || !o) && t.endOnTick),
                        (this.tickmarkOffset =
                          this.categories &&
                          "between" === t.tickmarkPlacement &&
                          1 === this.tickInterval
                            ? 0.5
                            : 0),
                        (this.minorTickInterval =
                          "auto" === i && this.tickInterval
                            ? this.tickInterval / 5
                            : i),
                        (this.single =
                          this.min === this.max &&
                          c(this.min) &&
                          !this.tickAmount &&
                          (parseInt(this.min, 10) === this.min ||
                            !1 !== t.allowDecimals)),
                        (this.tickPositions = i = e && e.slice()),
                        !i &&
                          ((this.ordinal && this.ordinal.positions) ||
                          !(
                            (this.max - this.min) / this.tickInterval >
                            Math.max(2 * this.len, 200)
                          )
                            ? (i = this.dateTime
                                ? this.getTimeTicks(
                                    this.dateTime.normalizeTimeTickInterval(
                                      this.tickInterval,
                                      t.units,
                                    ),
                                    this.min,
                                    this.max,
                                    t.startOfWeek,
                                    this.ordinal && this.ordinal.positions,
                                    this.closestPointRange,
                                    !0,
                                  )
                                : this.logarithmic
                                  ? this.logarithmic.getLogTickPositions(
                                      this.tickInterval,
                                      this.min,
                                      this.max,
                                    )
                                  : this.getLinearTickPositions(
                                      this.tickInterval,
                                      this.min,
                                      this.max,
                                    ))
                            : ((i = [this.min, this.max]),
                              p(19, !1, this.chart)),
                          i.length > this.len &&
                            (i = [i[0], i.pop()])[0] === i[1] &&
                            (i.length = 1),
                          (this.tickPositions = i),
                          s && (s = s.apply(this, [this.min, this.max]))) &&
                          (this.tickPositions = i = s),
                        (this.paddedTicks = i.slice(0)),
                        this.trimTicks(i, r, o),
                        this.isLinked ||
                          (this.single &&
                            2 > i.length &&
                            !this.categories &&
                            !this.series.some(function (t) {
                              return (
                                t.is("heatmap") &&
                                "between" === t.options.pointPlacement
                              );
                            }) &&
                            ((this.min -= 0.5), (this.max += 0.5)),
                          e || s || this.adjustTickAmount()),
                        f(this, "afterSetTickPositions");
                    }),
                    (s.prototype.trimTicks = function (t, e, i) {
                      var s = t[0],
                        o = t[t.length - 1],
                        n = (!this.isOrdinal && this.minPointOffset) || 0;
                      if ((f(this, "trimTicks"), !this.isLinked)) {
                        if (e && -1 / 0 !== s) this.min = s;
                        else for (; this.min - n > t[0]; ) t.shift();
                        if (i) this.max = o;
                        else for (; this.max + n < t[t.length - 1]; ) t.pop();
                        0 === t.length &&
                          c(s) &&
                          !this.options.tickPositions &&
                          t.push((o + s) / 2);
                      }
                    }),
                    (s.prototype.alignToOthers = function () {
                      var t,
                        e = {},
                        i = this.options;
                      return (
                        !1 === this.chart.options.chart.alignTicks ||
                          !1 === i.alignTicks ||
                          !1 === i.startOnTick ||
                          !1 === i.endOnTick ||
                          this.logarithmic ||
                          this.chart[this.coll].forEach(function (i) {
                            var s = i.options;
                            (s = [
                              i.horiz ? s.left : s.top,
                              s.width,
                              s.height,
                              s.pane,
                            ].join()),
                              i.series.length && (e[s] ? (t = !0) : (e[s] = 1));
                          }),
                        t
                      );
                    }),
                    (s.prototype.getTickAmount = function () {
                      var t = this.options,
                        e = t.tickAmount,
                        i = t.tickPixelInterval;
                      !c(t.tickInterval) &&
                        !e &&
                        this.len < i &&
                        !this.isRadial &&
                        !this.logarithmic &&
                        t.startOnTick &&
                        t.endOnTick &&
                        (e = 2),
                        !e &&
                          this.alignToOthers() &&
                          (e = Math.ceil(this.len / i) + 1),
                        4 > e && ((this.finalTickAmt = e), (e = 5)),
                        (this.tickAmount = e);
                    }),
                    (s.prototype.adjustTickAmount = function () {
                      var t,
                        e = this.options,
                        i = this.tickInterval,
                        s = this.tickPositions,
                        o = this.tickAmount,
                        n = this.finalTickAmt,
                        r = s && s.length,
                        a = S(this.threshold, this.softThreshold ? 0 : null);
                      if (this.hasData()) {
                        if (r < o) {
                          for (t = this.min; s.length < o; )
                            s.length % 2 || t === a
                              ? s.push(l(s[s.length - 1] + i))
                              : s.unshift(l(s[0] - i));
                          (this.transA *= (r - 1) / (o - 1)),
                            (this.min = e.startOnTick
                              ? s[0]
                              : Math.min(this.min, s[0])),
                            (this.max = e.endOnTick
                              ? s[s.length - 1]
                              : Math.max(this.max, s[s.length - 1]));
                        } else
                          r > o &&
                            ((this.tickInterval *= 2), this.setTickPositions());
                        if (c(n)) {
                          for (i = e = s.length; i--; )
                            ((3 === n && 1 === i % 2) ||
                              (2 >= n && 0 < i && i < e - 1)) &&
                              s.splice(i, 1);
                          this.finalTickAmt = void 0;
                        }
                      }
                    }),
                    (s.prototype.setScale = function () {
                      var t,
                        e = !1,
                        i = !1;
                      this.series.forEach(function (t) {
                        var s;
                        (e = e || t.isDirtyData || t.isDirty),
                          (i =
                            i ||
                            (null === (s = t.xAxis) || void 0 === s
                              ? void 0
                              : s.isDirty) ||
                            !1);
                      }),
                        (this.oldMin = this.min),
                        (this.oldMax = this.max),
                        (this.oldAxisLength = this.len),
                        this.setAxisSize(),
                        (t = this.len !== this.oldAxisLength) ||
                        e ||
                        i ||
                        this.isLinked ||
                        this.forceRedraw ||
                        this.userMin !== this.oldUserMin ||
                        this.userMax !== this.oldUserMax ||
                        this.alignToOthers()
                          ? (this.stacking && this.stacking.resetStacks(),
                            (this.forceRedraw = !1),
                            this.getSeriesExtremes(),
                            this.setTickInterval(),
                            (this.oldUserMin = this.userMin),
                            (this.oldUserMax = this.userMax),
                            this.isDirty ||
                              (this.isDirty =
                                t ||
                                this.min !== this.oldMin ||
                                this.max !== this.oldMax))
                          : this.stacking && this.stacking.cleanStacks(),
                        e &&
                          this.panningState &&
                          (this.panningState.isDirty = !0),
                        f(this, "afterSetScale");
                    }),
                    (s.prototype.setExtremes = function (t, e, i, s, o) {
                      var n = this,
                        r = n.chart;
                      (i = S(i, !0)),
                        n.series.forEach(function (t) {
                          delete t.kdTree;
                        }),
                        (o = u(o, { min: t, max: e })),
                        f(n, "setExtremes", o, function () {
                          (n.userMin = t),
                            (n.userMax = e),
                            (n.eventArgs = o),
                            i && r.redraw(s);
                        });
                    }),
                    (s.prototype.zoom = function (t, e) {
                      var i = this,
                        s = this.dataMin,
                        o = this.dataMax,
                        n = this.options,
                        r = Math.min(s, S(n.min, s)),
                        a = Math.max(o, S(n.max, o));
                      return (
                        f(
                          this,
                          "zoom",
                          (t = { newMin: t, newMax: e }),
                          function (t) {
                            var e = t.newMin,
                              n = t.newMax;
                            (e === i.min && n === i.max) ||
                              (i.allowZoomOutside ||
                                (c(s) && (e < r && (e = r), e > a && (e = a)),
                                c(o) && (n < r && (n = r), n > a && (n = a))),
                              (i.displayBtn =
                                "undefined" !== typeof e ||
                                "undefined" !== typeof n),
                              i.setExtremes(e, n, !1, void 0, {
                                trigger: "zoom",
                              })),
                              (t.zoomed = !0);
                          },
                        ),
                        t.zoomed
                      );
                    }),
                    (s.prototype.setAxisSize = function () {
                      var t = this.chart,
                        e = this.options,
                        i = e.offsets || [0, 0, 0, 0],
                        s = this.horiz,
                        o = (this.width = Math.round(
                          T(S(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth),
                        )),
                        n = (this.height = Math.round(
                          T(
                            S(e.height, t.plotHeight - i[0] + i[2]),
                            t.plotHeight,
                          ),
                        )),
                        r = (this.top = Math.round(
                          T(
                            S(e.top, t.plotTop + i[0]),
                            t.plotHeight,
                            t.plotTop,
                          ),
                        ));
                      (e = this.left =
                        Math.round(
                          T(
                            S(e.left, t.plotLeft + i[3]),
                            t.plotWidth,
                            t.plotLeft,
                          ),
                        )),
                        (this.bottom = t.chartHeight - n - r),
                        (this.right = t.chartWidth - o - e),
                        (this.len = Math.max(s ? o : n, 0)),
                        (this.pos = s ? e : r);
                    }),
                    (s.prototype.getExtremes = function () {
                      var t = this.logarithmic;
                      return {
                        min: t ? l(t.lin2log(this.min)) : this.min,
                        max: t ? l(t.lin2log(this.max)) : this.max,
                        dataMin: this.dataMin,
                        dataMax: this.dataMax,
                        userMin: this.userMin,
                        userMax: this.userMax,
                      };
                    }),
                    (s.prototype.getThreshold = function (t) {
                      var e = this.logarithmic,
                        i = e ? e.lin2log(this.min) : this.min;
                      return (
                        (e = e ? e.lin2log(this.max) : this.max),
                        null === t || -1 / 0 === t
                          ? (t = i)
                          : 1 / 0 === t
                            ? (t = e)
                            : i > t
                              ? (t = i)
                              : e < t && (t = e),
                        this.translate(t, 0, 1, 0, 1)
                      );
                    }),
                    (s.prototype.autoLabelAlign = function (t) {
                      var e = (S(t, 0) - 90 * this.side + 720) % 360;
                      return (
                        f(
                          this,
                          "autoLabelAlign",
                          (t = { align: "center" }),
                          function (t) {
                            15 < e && 165 > e
                              ? (t.align = "right")
                              : 195 < e && 345 > e && (t.align = "left");
                          },
                        ),
                        t.align
                      );
                    }),
                    (s.prototype.tickSize = function (t) {
                      var e = this.options,
                        i = e["tick" === t ? "tickLength" : "minorTickLength"],
                        s = S(
                          e["tick" === t ? "tickWidth" : "minorTickWidth"],
                          "tick" === t && this.isXAxis && !this.categories
                            ? 1
                            : 0,
                        );
                      if (s && i) {
                        "inside" === e[t + "Position"] && (i = -i);
                        var o = [i, s];
                      }
                      return (
                        f(this, "afterTickSize", (t = { tickSize: o })),
                        t.tickSize
                      );
                    }),
                    (s.prototype.labelMetrics = function () {
                      var t =
                        (this.tickPositions && this.tickPositions[0]) || 0;
                      return this.chart.renderer.fontMetrics(
                        this.options.labels.style &&
                          this.options.labels.style.fontSize,
                        this.ticks[t] && this.ticks[t].label,
                      );
                    }),
                    (s.prototype.unsquish = function () {
                      var t,
                        e,
                        i,
                        s = this.options.labels,
                        o = this.horiz,
                        n = this.tickInterval,
                        r = n,
                        a =
                          this.len /
                          (((this.categories ? 1 : 0) + this.max - this.min) /
                            n),
                        h = s.rotation,
                        d = this.labelMetrics(),
                        p = Number.MAX_VALUE,
                        u = this.max - this.min,
                        f = function (t) {
                          var e = t / (a || 1);
                          return (
                            (e = 1 < e ? Math.ceil(e) : 1) * n > u &&
                              1 / 0 !== t &&
                              1 / 0 !== a &&
                              u &&
                              (e = Math.ceil(u / n)),
                            l(e * n)
                          );
                        };
                      return (
                        o
                          ? (i =
                              !s.staggerLines &&
                              !s.step &&
                              (c(h)
                                ? [h]
                                : a < S(s.autoRotationLimit, 80) &&
                                  s.autoRotation)) &&
                            i.forEach(function (i) {
                              if (i === h || (i && -90 <= i && 90 >= i)) {
                                var s =
                                  (e = f(Math.abs(d.h / Math.sin(O * i)))) +
                                  Math.abs(i / 360);
                                s < p && ((p = s), (t = i), (r = e));
                              }
                            })
                          : s.step || (r = f(d.h)),
                        (this.autoRotation = i),
                        (this.labelRotation = S(t, h)),
                        r
                      );
                    }),
                    (s.prototype.getSlotWidth = function (t) {
                      var e,
                        i = this.chart,
                        s = this.horiz,
                        o = this.options.labels,
                        n = Math.max(
                          this.tickPositions.length - (this.categories ? 0 : 1),
                          1,
                        ),
                        r = i.margin[3];
                      if (t && x(t.slotWidth)) return t.slotWidth;
                      if (s && o && 2 > (o.step || 0))
                        return o.rotation
                          ? 0
                          : ((this.staggerLines || 1) * this.len) / n;
                      if (!s) {
                        if (
                          void 0 !==
                          (t =
                            null ===
                              (e =
                                null === o || void 0 === o
                                  ? void 0
                                  : o.style) || void 0 === e
                              ? void 0
                              : e.width)
                        )
                          return parseInt(t, 10);
                        if (r) return r - i.spacing[3];
                      }
                      return 0.33 * i.chartWidth;
                    }),
                    (s.prototype.renderUnsquish = function () {
                      var t = this.chart,
                        e = t.renderer,
                        i = this.tickPositions,
                        s = this.ticks,
                        o = this.options.labels,
                        n = (o && o.style) || {},
                        r = this.horiz,
                        a = this.getSlotWidth(),
                        h = Math.max(1, Math.round(a - 2 * (o.padding || 5))),
                        l = {},
                        c = this.labelMetrics(),
                        d = o.style && o.style.textOverflow,
                        p = 0;
                      if (
                        (b(o.rotation) || (l.rotation = o.rotation || 0),
                        i.forEach(function (t) {
                          (t = s[t]).movedLabel && t.replaceMovedLabel(),
                            t &&
                              t.label &&
                              t.label.textPxLength > p &&
                              (p = t.label.textPxLength);
                        }),
                        (this.maxLabelLength = p),
                        this.autoRotation)
                      )
                        p > h && p > c.h
                          ? (l.rotation = this.labelRotation)
                          : (this.labelRotation = 0);
                      else if (a) {
                        var u = h;
                        if (!d) {
                          var f = "clip";
                          for (h = i.length; !r && h--; ) {
                            var g = i[h];
                            (g = s[g].label) &&
                              (g.styles && "ellipsis" === g.styles.textOverflow
                                ? g.css({ textOverflow: "clip" })
                                : g.textPxLength > a &&
                                  g.css({ width: a + "px" }),
                              g.getBBox().height >
                                this.len / i.length - (c.h - c.f) &&
                                (g.specificTextOverflow = "ellipsis"));
                          }
                        }
                      }
                      l.rotation &&
                        ((u =
                          p > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : p),
                        d || (f = "ellipsis")),
                        (this.labelAlign =
                          o.align || this.autoLabelAlign(this.labelRotation)) &&
                          (l.align = this.labelAlign),
                        i.forEach(function (t) {
                          var e = (t = s[t]) && t.label,
                            i = n.width,
                            o = {};
                          e &&
                            (e.attr(l),
                            t.shortenLabel
                              ? t.shortenLabel()
                              : u &&
                                  !i &&
                                  "nowrap" !== n.whiteSpace &&
                                  (u < e.textPxLength ||
                                    "SPAN" === e.element.tagName)
                                ? ((o.width = u + "px"),
                                  d ||
                                    (o.textOverflow =
                                      e.specificTextOverflow || f),
                                  e.css(o))
                                : e.styles &&
                                  e.styles.width &&
                                  !o.width &&
                                  !i &&
                                  e.css({ width: null }),
                            delete e.specificTextOverflow,
                            (t.rotation = l.rotation));
                        }, this),
                        (this.tickRotCorr = e.rotCorr(
                          c.b,
                          this.labelRotation || 0,
                          0 !== this.side,
                        ));
                    }),
                    (s.prototype.hasData = function () {
                      return (
                        this.series.some(function (t) {
                          return t.hasData();
                        }) ||
                        (this.options.showEmpty && c(this.min) && c(this.max))
                      );
                    }),
                    (s.prototype.addTitle = function (t) {
                      var e,
                        i = this.chart.renderer,
                        s = this.horiz,
                        o = this.opposite,
                        n = this.options.title,
                        r = this.chart.styledMode;
                      this.axisTitle ||
                        ((e = n.textAlign) ||
                          (e = (
                            s
                              ? { low: "left", middle: "center", high: "right" }
                              : {
                                  low: o ? "right" : "left",
                                  middle: "center",
                                  high: o ? "left" : "right",
                                }
                          )[n.align]),
                        (this.axisTitle = i
                          .text(n.text, 0, 0, n.useHTML)
                          .attr({
                            zIndex: 7,
                            rotation: n.rotation || 0,
                            align: e,
                          })
                          .addClass("highcharts-axis-title")),
                        r || this.axisTitle.css(k(n.style)),
                        this.axisTitle.add(this.axisGroup),
                        (this.axisTitle.isNew = !0)),
                        r ||
                          n.style.width ||
                          this.isRadial ||
                          this.axisTitle.css({ width: this.len + "px" }),
                        this.axisTitle[t ? "show" : "hide"](t);
                    }),
                    (s.prototype.generateTick = function (t) {
                      var e = this.ticks;
                      e[t] ? e[t].addLabel() : (e[t] = new i(this, t));
                    }),
                    (s.prototype.getOffset = function () {
                      var t,
                        e = this,
                        i = e.chart,
                        s = i.renderer,
                        o = e.options,
                        n = e.tickPositions,
                        r = e.ticks,
                        a = e.horiz,
                        h = e.side,
                        l = i.inverted && !e.isZAxis ? [1, 0, 3, 2][h] : h,
                        d = 0,
                        p = 0,
                        u = o.title,
                        g = o.labels,
                        m = 0,
                        y = i.axisOffset;
                      i = i.clipOffset;
                      var v = [-1, 1, 1, -1][h],
                        x = o.className,
                        b = e.axisParent,
                        k = e.hasData();
                      if (
                        ((e.showAxis = t = k || S(o.showEmpty, !0)),
                        (e.staggerLines = e.horiz && g.staggerLines),
                        e.axisGroup ||
                          ((e.gridGroup = s
                            .g("grid")
                            .attr({ zIndex: o.gridZIndex || 1 })
                            .addClass(
                              "highcharts-" +
                                this.coll.toLowerCase() +
                                "-grid " +
                                (x || ""),
                            )
                            .add(b)),
                          (e.axisGroup = s
                            .g("axis")
                            .attr({ zIndex: o.zIndex || 2 })
                            .addClass(
                              "highcharts-" +
                                this.coll.toLowerCase() +
                                " " +
                                (x || ""),
                            )
                            .add(b)),
                          (e.labelGroup = s
                            .g("axis-labels")
                            .attr({ zIndex: g.zIndex || 7 })
                            .addClass(
                              "highcharts-" +
                                e.coll.toLowerCase() +
                                "-labels " +
                                (x || ""),
                            )
                            .add(b))),
                        k || e.isLinked
                          ? (n.forEach(function (t, i) {
                              e.generateTick(t, i);
                            }),
                            e.renderUnsquish(),
                            (e.reserveSpaceDefault =
                              0 === h ||
                              2 === h ||
                              { 1: "left", 3: "right" }[h] === e.labelAlign),
                            S(
                              g.reserveSpace,
                              "center" === e.labelAlign || null,
                              e.reserveSpaceDefault,
                            ) &&
                              n.forEach(function (t) {
                                m = Math.max(r[t].getLabelSize(), m);
                              }),
                            e.staggerLines && (m *= e.staggerLines),
                            (e.labelOffset = m * (e.opposite ? -1 : 1)))
                          : w(r, function (t, e) {
                              t.destroy(), delete r[e];
                            }),
                        u &&
                          u.text &&
                          !1 !== u.enabled &&
                          (e.addTitle(t), t && !1 !== u.reserveSpace))
                      ) {
                        e.titleOffset = d =
                          e.axisTitle.getBBox()[a ? "height" : "width"];
                        var M = u.offset;
                        p = c(M) ? 0 : S(u.margin, a ? 5 : 10);
                      }
                      e.renderLine(),
                        (e.offset =
                          v * S(o.offset, y[h] ? y[h] + (o.margin || 0) : 0)),
                        (e.tickRotCorr = e.tickRotCorr || { x: 0, y: 0 }),
                        (s =
                          0 === h
                            ? -e.labelMetrics().h
                            : 2 === h
                              ? e.tickRotCorr.y
                              : 0),
                        (p = Math.abs(m) + p),
                        m &&
                          (p =
                            p -
                            s +
                            v * (a ? S(g.y, e.tickRotCorr.y + 8 * v) : g.x)),
                        (e.axisTitleMargin = S(M, p)),
                        e.getMaxLabelDimensions &&
                          (e.maxLabelDimensions = e.getMaxLabelDimensions(
                            r,
                            n,
                          )),
                        (a = this.tickSize("tick")),
                        (y[h] = Math.max(
                          y[h],
                          e.axisTitleMargin + d + v * e.offset,
                          p,
                          n && n.length && a ? a[0] + v * e.offset : 0,
                        )),
                        (o = o.offset
                          ? 0
                          : 2 * Math.floor(e.axisLine.strokeWidth() / 2)),
                        (i[l] = Math.max(i[l], o)),
                        f(this, "afterGetOffset");
                    }),
                    (s.prototype.getLinePath = function (t) {
                      var e = this.chart,
                        i = this.opposite,
                        s = this.offset,
                        o = this.horiz,
                        n = this.left + (i ? this.width : 0) + s;
                      return (
                        (s =
                          e.chartHeight -
                          this.bottom -
                          (i ? this.height : 0) +
                          s),
                        i && (t *= -1),
                        e.renderer.crispLine(
                          [
                            ["M", o ? this.left : n, o ? s : this.top],
                            [
                              "L",
                              o ? e.chartWidth - this.right : n,
                              o ? s : e.chartHeight - this.bottom,
                            ],
                          ],
                          t,
                        )
                      );
                    }),
                    (s.prototype.renderLine = function () {
                      this.axisLine ||
                        ((this.axisLine = this.chart.renderer
                          .path()
                          .addClass("highcharts-axis-line")
                          .add(this.axisGroup)),
                        this.chart.styledMode ||
                          this.axisLine.attr({
                            stroke: this.options.lineColor,
                            "stroke-width": this.options.lineWidth,
                            zIndex: 7,
                          }));
                    }),
                    (s.prototype.getTitlePosition = function () {
                      var t = this.horiz,
                        e = this.left,
                        i = this.top,
                        s = this.len,
                        o = this.options.title,
                        n = t ? e : i,
                        r = this.opposite,
                        a = this.offset,
                        h = o.x || 0,
                        l = o.y || 0,
                        c = this.axisTitle,
                        d = this.chart.renderer.fontMetrics(
                          o.style && o.style.fontSize,
                          c,
                        );
                      return (
                        (c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0)),
                        (s = {
                          low: n + (t ? 0 : s),
                          middle: n + s / 2,
                          high: n + (t ? s : 0),
                        }[o.align]),
                        (e =
                          (t ? i + this.height : e) +
                          (t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin +
                          [-c, c, d.f, -c][this.side]),
                        (t = {
                          x: t ? s + h : e + (r ? this.width : 0) + a + h,
                          y: t ? e + l - (r ? this.height : 0) + a : s + l,
                        }),
                        f(this, "afterGetTitlePosition", { titlePosition: t }),
                        t
                      );
                    }),
                    (s.prototype.renderMinorTick = function (t) {
                      var e = this.chart.hasRendered && x(this.oldMin),
                        s = this.minorTicks;
                      s[t] || (s[t] = new i(this, t, "minor")),
                        e && s[t].isNew && s[t].render(null, !0),
                        s[t].render(null, !1, 1);
                    }),
                    (s.prototype.renderTick = function (t, e) {
                      var s = this.isLinked,
                        o = this.ticks,
                        n = this.chart.hasRendered && x(this.oldMin);
                      (!s || (t >= this.min && t <= this.max)) &&
                        (o[t] || (o[t] = new i(this, t)),
                        n && o[t].isNew && o[t].render(e, !0, -1),
                        o[t].render(e));
                    }),
                    (s.prototype.render = function () {
                      var t,
                        s,
                        o = this,
                        r = o.chart,
                        a = o.logarithmic,
                        h = o.options,
                        l = o.isLinked,
                        c = o.tickPositions,
                        d = o.axisTitle,
                        p = o.ticks,
                        u = o.minorTicks,
                        g = o.alternateBands,
                        m = h.stackLabels,
                        y = h.alternateGridColor,
                        v = o.tickmarkOffset,
                        b = o.axisLine,
                        k = o.showAxis,
                        M = n(r.renderer.globalAnimation);
                      (o.labelEdge.length = 0),
                        (o.overlap = !1),
                        [p, u, g].forEach(function (t) {
                          w(t, function (t) {
                            t.isActive = !1;
                          });
                        }),
                        (o.hasData() || l) &&
                          (o.minorTickInterval &&
                            !o.categories &&
                            o.getMinorTickPositions().forEach(function (t) {
                              o.renderMinorTick(t);
                            }),
                          c.length &&
                            (c.forEach(function (t, e) {
                              o.renderTick(t, e);
                            }),
                            v &&
                              (0 === o.min || o.single) &&
                              (p[-1] || (p[-1] = new i(o, -1, null, !0)),
                              p[-1].render(-1))),
                          y &&
                            c.forEach(function (i, n) {
                              (s =
                                "undefined" !== typeof c[n + 1]
                                  ? c[n + 1] + v
                                  : o.max - v),
                                0 === n % 2 &&
                                  i < o.max &&
                                  s <= o.max + (r.polar ? -v : v) &&
                                  (g[i] || (g[i] = new e.PlotLineOrBand(o)),
                                  (t = i + v),
                                  (g[i].options = {
                                    from: a ? a.lin2log(t) : t,
                                    to: a ? a.lin2log(s) : s,
                                    color: y,
                                  }),
                                  g[i].render(),
                                  (g[i].isActive = !0));
                            }),
                          o._addedPlotLB ||
                            ((h.plotLines || [])
                              .concat(h.plotBands || [])
                              .forEach(function (t) {
                                o.addPlotBandOrLine(t);
                              }),
                            (o._addedPlotLB = !0))),
                        [p, u, g].forEach(function (t) {
                          var e,
                            i = [],
                            s = M.duration;
                          w(t, function (t, e) {
                            t.isActive ||
                              (t.render(e, !1, 0),
                              (t.isActive = !1),
                              i.push(e));
                          }),
                            L(
                              function () {
                                for (e = i.length; e--; )
                                  t[i[e]] &&
                                    !t[i[e]].isActive &&
                                    (t[i[e]].destroy(), delete t[i[e]]);
                              },
                              t !== g && r.hasRendered && s ? s : 0,
                            );
                        }),
                        b &&
                          (b[b.isPlaced ? "animate" : "attr"]({
                            d: this.getLinePath(b.strokeWidth()),
                          }),
                          (b.isPlaced = !0),
                          b[k ? "show" : "hide"](k)),
                        d &&
                          k &&
                          ((h = o.getTitlePosition()),
                          x(h.y)
                            ? (d[d.isNew ? "attr" : "animate"](h),
                              (d.isNew = !1))
                            : (d.attr("y", -9999), (d.isNew = !0))),
                        m &&
                          m.enabled &&
                          o.stacking &&
                          o.stacking.renderStackTotals(),
                        (o.isDirty = !1),
                        f(this, "afterRender");
                    }),
                    (s.prototype.redraw = function () {
                      this.visible &&
                        (this.render(),
                        this.plotLinesAndBands.forEach(function (t) {
                          t.render();
                        })),
                        this.series.forEach(function (t) {
                          t.isDirty = !0;
                        });
                    }),
                    (s.prototype.getKeepProps = function () {
                      return this.keepProps || s.keepProps;
                    }),
                    (s.prototype.destroy = function (t) {
                      var e,
                        i = this,
                        s = i.plotLinesAndBands;
                      if (
                        (f(this, "destroy", { keepEvents: t }),
                        t || A(i),
                        [i.ticks, i.minorTicks, i.alternateBands].forEach(
                          function (t) {
                            d(t);
                          },
                        ),
                        s)
                      )
                        for (t = s.length; t--; ) s[t].destroy();
                      for (e in ("axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar"
                        .split(" ")
                        .forEach(function (t) {
                          i[t] && (i[t] = i[t].destroy());
                        }),
                      i.plotLinesAndBandsGroups))
                        i.plotLinesAndBandsGroups[e] =
                          i.plotLinesAndBandsGroups[e].destroy();
                      w(i, function (t, e) {
                        -1 === i.getKeepProps().indexOf(e) && delete i[e];
                      });
                    }),
                    (s.prototype.drawCrosshair = function (e, i) {
                      var s,
                        o = this.crosshair,
                        n = S(o.snap, !0),
                        r = this.cross,
                        a = this.chart;
                      if (
                        (f(this, "drawCrosshair", { e: e, point: i }),
                        e || (e = this.cross && this.cross.e),
                        this.crosshair && !1 !== (c(i) || !n))
                      ) {
                        if (
                          (n
                            ? c(i) &&
                              (s = S(
                                "colorAxis" !== this.coll
                                  ? i.crosshairPos
                                  : null,
                                this.isXAxis ? i.plotX : this.len - i.plotY,
                              ))
                            : (s =
                                e &&
                                (this.horiz
                                  ? e.chartX - this.pos
                                  : this.len - e.chartY + this.pos)),
                          c(s))
                        ) {
                          var h = {
                            value: i && (this.isXAxis ? i.x : S(i.stackY, i.y)),
                            translatedValue: s,
                          };
                          a.polar &&
                            u(h, {
                              isCrosshair: !0,
                              chartX: e && e.chartX,
                              chartY: e && e.chartY,
                              point: i,
                            }),
                            (h = this.getPlotLinePath(h) || null);
                        }
                        if (!c(h)) return void this.hideCrosshair();
                        (n = this.categories && !this.isRadial),
                          r ||
                            ((this.cross = r =
                              a.renderer
                                .path()
                                .addClass(
                                  "highcharts-crosshair highcharts-crosshair-" +
                                    (n ? "category " : "thin ") +
                                    o.className,
                                )
                                .attr({ zIndex: S(o.zIndex, 2) })
                                .add()),
                            a.styledMode ||
                              (r
                                .attr({
                                  stroke:
                                    o.color ||
                                    (n
                                      ? t
                                          .parse("#ccd6eb")
                                          .setOpacity(0.25)
                                          .get()
                                      : "#cccccc"),
                                  "stroke-width": S(o.width, 1),
                                })
                                .css({ "pointer-events": "none" }),
                              o.dashStyle &&
                                r.attr({ dashstyle: o.dashStyle }))),
                          r.show().attr({ d: h }),
                          n &&
                            !o.width &&
                            r.attr({ "stroke-width": this.transA }),
                          (this.cross.e = e);
                      } else this.hideCrosshair();
                      f(this, "afterDrawCrosshair", { e: e, point: i });
                    }),
                    (s.prototype.hideCrosshair = function () {
                      this.cross && this.cross.hide(),
                        f(this, "afterHideCrosshair");
                    }),
                    (s.prototype.hasVerticalPanning = function () {
                      var t, e;
                      return /y/.test(
                        (null ===
                          (e =
                            null === (t = this.chart.options.chart) ||
                            void 0 === t
                              ? void 0
                              : t.panning) || void 0 === e
                          ? void 0
                          : e.type) || "",
                      );
                    }),
                    (s.defaultOptions = {
                      dateTimeLabelFormats: {
                        millisecond: { main: "%H:%M:%S.%L", range: !1 },
                        second: { main: "%H:%M:%S", range: !1 },
                        minute: { main: "%H:%M", range: !1 },
                        hour: { main: "%H:%M", range: !1 },
                        day: { main: "%e. %b" },
                        week: { main: "%e. %b" },
                        month: { main: "%b '%y" },
                        year: { main: "%Y" },
                      },
                      endOnTick: !1,
                      labels: {
                        enabled: !0,
                        indentation: 10,
                        x: 0,
                        style: {
                          color: "#666666",
                          cursor: "default",
                          fontSize: "11px",
                        },
                      },
                      maxPadding: 0.01,
                      minorTickLength: 2,
                      minorTickPosition: "outside",
                      minPadding: 0.01,
                      showEmpty: !0,
                      startOfWeek: 1,
                      startOnTick: !1,
                      tickLength: 10,
                      tickPixelInterval: 100,
                      tickmarkPlacement: "between",
                      tickPosition: "outside",
                      title: { align: "middle", style: { color: "#666666" } },
                      type: "linear",
                      minorGridLineColor: "#f2f2f2",
                      minorGridLineWidth: 1,
                      minorTickColor: "#999999",
                      lineColor: "#ccd6eb",
                      lineWidth: 1,
                      gridLineColor: "#e6e6e6",
                      tickColor: "#ccd6eb",
                    }),
                    (s.defaultYAxisOptions = {
                      endOnTick: !0,
                      maxPadding: 0.05,
                      minPadding: 0.05,
                      tickPixelInterval: 72,
                      showLastLabel: !0,
                      labels: { x: -8 },
                      startOnTick: !0,
                      title: { rotation: 270, text: "Values" },
                      stackLabels: {
                        allowOverlap: !1,
                        enabled: !1,
                        crop: !0,
                        overflow: "justify",
                        formatter: function () {
                          return (0, this.axis.chart.numberFormatter)(
                            this.total,
                            -1,
                          );
                        },
                        style: {
                          color: "#000000",
                          fontSize: "11px",
                          fontWeight: "bold",
                          textOutline: "1px contrast",
                        },
                      },
                      gridLineWidth: 1,
                      lineWidth: 0,
                    }),
                    (s.defaultLeftAxisOptions = {
                      labels: { x: -15 },
                      title: { rotation: 270 },
                    }),
                    (s.defaultRightAxisOptions = {
                      labels: { x: 15 },
                      title: { rotation: 90 },
                    }),
                    (s.defaultBottomAxisOptions = {
                      labels: { autoRotation: [-45], x: 0 },
                      margin: 15,
                      title: { rotation: 0 },
                    }),
                    (s.defaultTopAxisOptions = {
                      labels: { autoRotation: [-45], x: 0 },
                      margin: 15,
                      title: { rotation: 0 },
                    }),
                    (s.keepProps =
                      "extKey hcEvents names series userMax userMin".split(
                        " ",
                      )),
                    s
                  );
                })()),
                (e.Axis = s),
                e.Axis
              );
            },
          ),
          e(
            i,
            "parts/DateTimeAxis.js",
            [i["parts/Axis.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.addEvent,
                s = e.getMagnitude,
                o = e.normalizeTickInterval,
                n = e.timeUnits,
                r = (function () {
                  function t(t) {
                    this.axis = t;
                  }
                  return (
                    (t.prototype.normalizeTimeTickInterval = function (t, e) {
                      var i = e || [
                        [
                          "millisecond",
                          [1, 2, 5, 10, 20, 25, 50, 100, 200, 500],
                        ],
                        ["second", [1, 2, 5, 10, 15, 30]],
                        ["minute", [1, 2, 5, 10, 15, 30]],
                        ["hour", [1, 2, 3, 4, 6, 8, 12]],
                        ["day", [1, 2]],
                        ["week", [1, 2]],
                        ["month", [1, 2, 3, 4, 6]],
                        ["year", null],
                      ];
                      e = i[i.length - 1];
                      var r,
                        a = n[e[0]],
                        h = e[1];
                      for (
                        r = 0;
                        r < i.length &&
                        ((e = i[r]),
                        (a = n[e[0]]),
                        (h = e[1]),
                        !(
                          i[r + 1] &&
                          t <= (a * h[h.length - 1] + n[i[r + 1][0]]) / 2
                        ));
                        r++
                      );
                      return (
                        a === n.year && t < 5 * a && (h = [1, 2, 5]),
                        {
                          unitRange: a,
                          count: (t = o(
                            t / a,
                            h,
                            "year" === e[0] ? Math.max(s(t / a), 1) : 1,
                          )),
                          unitName: e[0],
                        }
                      );
                    }),
                    t
                  );
                })();
              return (
                (e = (function () {
                  function t() {}
                  return (
                    (t.compose = function (t) {
                      t.keepProps.push("dateTime"),
                        (t.prototype.getTimeTicks = function () {
                          return this.chart.time.getTimeTicks.apply(
                            this.chart.time,
                            arguments,
                          );
                        }),
                        i(t, "init", function (t) {
                          "datetime" !== t.userOptions.type
                            ? (this.dateTime = void 0)
                            : this.dateTime || (this.dateTime = new r(this));
                        });
                    }),
                    (t.AdditionsClass = r),
                    t
                  );
                })()).compose(t),
                e
              );
            },
          ),
          e(
            i,
            "parts/LogarithmicAxis.js",
            [i["parts/Axis.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.addEvent,
                s = e.getMagnitude,
                o = e.normalizeTickInterval,
                n = e.pick,
                r = (function () {
                  function t(t) {
                    this.axis = t;
                  }
                  return (
                    (t.prototype.getLogTickPositions = function (t, e, i, r) {
                      var a = this.axis,
                        h = a.len,
                        l = a.options,
                        c = [];
                      if ((r || (this.minorAutoInterval = void 0), 0.5 <= t))
                        (t = Math.round(t)),
                          (c = a.getLinearTickPositions(t, e, i));
                      else if (0.08 <= t) {
                        var d, p;
                        for (
                          l = Math.floor(e),
                            h =
                              0.3 < t
                                ? [1, 2, 4]
                                : 0.15 < t
                                  ? [1, 2, 4, 6, 8]
                                  : [1, 2, 3, 4, 5, 6, 7, 8, 9];
                          l < i + 1 && !p;
                          l++
                        ) {
                          var u = h.length;
                          for (d = 0; d < u && !p; d++) {
                            var f = this.log2lin(this.lin2log(l) * h[d]);
                            f > e &&
                              (!r || g <= i) &&
                              "undefined" !== typeof g &&
                              c.push(g),
                              g > i && (p = !0);
                            var g = f;
                          }
                        }
                      } else
                        (e = this.lin2log(e)),
                          (i = this.lin2log(i)),
                          (t = r ? a.getMinorTickInterval() : l.tickInterval),
                          (t = n(
                            "auto" === t ? null : t,
                            this.minorAutoInterval,
                            ((l.tickPixelInterval / (r ? 5 : 1)) * (i - e)) /
                              ((r ? h / a.tickPositions.length : h) || 1),
                          )),
                          (t = o(t, void 0, s(t))),
                          (c = a
                            .getLinearTickPositions(t, e, i)
                            .map(this.log2lin)),
                          r || (this.minorAutoInterval = t / 5);
                      return r || (a.tickInterval = t), c;
                    }),
                    (t.prototype.lin2log = function (t) {
                      return Math.pow(10, t);
                    }),
                    (t.prototype.log2lin = function (t) {
                      return Math.log(t) / Math.LN10;
                    }),
                    t
                  );
                })();
              return (
                (e = (function () {
                  function t() {}
                  return (
                    (t.compose = function (t) {
                      t.keepProps.push("logarithmic");
                      var e = t.prototype,
                        s = r.prototype;
                      (e.log2lin = s.log2lin),
                        (e.lin2log = s.lin2log),
                        i(t, "init", function (t) {
                          var e = this.logarithmic;
                          "logarithmic" !== t.userOptions.type
                            ? (this.logarithmic = void 0)
                            : (e || (e = this.logarithmic = new r(this)),
                              this.log2lin !== e.log2lin &&
                                (e.log2lin = this.log2lin.bind(this)),
                              this.lin2log !== e.lin2log &&
                                (e.lin2log = this.lin2log.bind(this)));
                        }),
                        i(t, "afterInit", function () {
                          var t = this.logarithmic;
                          t &&
                            ((this.lin2val = function (e) {
                              return t.lin2log(e);
                            }),
                            (this.val2lin = function (e) {
                              return t.log2lin(e);
                            }));
                        });
                    }),
                    t
                  );
                })()).compose(t),
                e
              );
            },
          ),
          e(
            i,
            "parts/PlotLineOrBand.js",
            [
              i["parts/Globals.js"],
              i["parts/Axis.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i) {
              var s = i.arrayMax,
                o = i.arrayMin,
                n = i.defined,
                r = i.destroyObjectProperties,
                a = i.erase,
                h = i.extend,
                l = i.merge,
                c = i.objectEach,
                d = i.pick,
                p = (function () {
                  function e(t, e) {
                    (this.axis = t),
                      e && ((this.options = e), (this.id = e.id));
                  }
                  return (
                    (e.prototype.render = function () {
                      t.fireEvent(this, "render");
                      var e = this,
                        i = e.axis,
                        s = i.horiz,
                        o = i.logarithmic,
                        r = e.options,
                        a = r.label,
                        h = e.label,
                        p = r.to,
                        u = r.from,
                        f = r.value,
                        g = n(u) && n(p),
                        m = n(f),
                        y = e.svgElem,
                        v = !y,
                        x = [],
                        b = r.color,
                        k = d(r.zIndex, 0),
                        M = r.events;
                      x = {
                        class:
                          "highcharts-plot-" +
                          (g ? "band " : "line ") +
                          (r.className || ""),
                      };
                      var w = {},
                        S = i.chart.renderer,
                        T = g ? "bands" : "lines";
                      if (
                        (o &&
                          ((u = o.log2lin(u)),
                          (p = o.log2lin(p)),
                          (f = o.log2lin(f))),
                        i.chart.styledMode ||
                          (m
                            ? ((x.stroke = b || "#999999"),
                              (x["stroke-width"] = d(r.width, 1)),
                              r.dashStyle && (x.dashstyle = r.dashStyle))
                            : g &&
                              ((x.fill = b || "#e6ebf5"),
                              r.borderWidth &&
                                ((x.stroke = r.borderColor),
                                (x["stroke-width"] = r.borderWidth)))),
                        (w.zIndex = k),
                        (T += "-" + k),
                        (o = i.plotLinesAndBandsGroups[T]) ||
                          (i.plotLinesAndBandsGroups[T] = o =
                            S.g("plot-" + T)
                              .attr(w)
                              .add()),
                        v && (e.svgElem = y = S.path().attr(x).add(o)),
                        m)
                      )
                        x = i.getPlotLinePath({
                          value: f,
                          lineWidth: y.strokeWidth(),
                          acrossPanes: r.acrossPanes,
                        });
                      else {
                        if (!g) return;
                        x = i.getPlotBandPath(u, p, r);
                      }
                      return (
                        (v || !y.d) && x && x.length
                          ? (y.attr({ d: x }),
                            M &&
                              c(M, function (t, i) {
                                y.on(i, function (t) {
                                  M[i].apply(e, [t]);
                                });
                              }))
                          : y &&
                            (x
                              ? (y.show(!0), y.animate({ d: x }))
                              : y.d &&
                                (y.hide(), h && (e.label = h = h.destroy()))),
                        a &&
                        (n(a.text) || n(a.formatter)) &&
                        x &&
                        x.length &&
                        0 < i.width &&
                        0 < i.height &&
                        !x.isFlat
                          ? ((a = l(
                              {
                                align: s && g && "center",
                                x: s ? !g && 4 : 10,
                                verticalAlign: !s && g && "middle",
                                y: s ? (g ? 16 : 10) : g ? 6 : -4,
                                rotation: s && !g && 90,
                              },
                              a,
                            )),
                            this.renderLabel(a, x, g, k))
                          : h && h.hide(),
                        e
                      );
                    }),
                    (e.prototype.renderLabel = function (t, e, i, n) {
                      var r = this.label,
                        a = this.axis.chart.renderer;
                      r ||
                        (((r = {
                          align: t.textAlign || t.align,
                          rotation: t.rotation,
                          class:
                            "highcharts-plot-" +
                            (i ? "band" : "line") +
                            "-label " +
                            (t.className || ""),
                        }).zIndex = n),
                        (n = this.getLabelText(t)),
                        (this.label = r =
                          a.text(n, 0, 0, t.useHTML).attr(r).add()),
                        this.axis.chart.styledMode || r.css(t.style)),
                        (a = e.xBounds || [
                          e[0][1],
                          e[1][1],
                          i ? e[2][1] : e[0][1],
                        ]),
                        (e = e.yBounds || [
                          e[0][2],
                          e[1][2],
                          i ? e[2][2] : e[0][2],
                        ]),
                        (i = o(a)),
                        (n = o(e)),
                        r.align(t, !1, {
                          x: i,
                          y: n,
                          width: s(a) - i,
                          height: s(e) - n,
                        }),
                        r.show(!0);
                    }),
                    (e.prototype.getLabelText = function (t) {
                      return n(t.formatter) ? t.formatter.call(this) : t.text;
                    }),
                    (e.prototype.destroy = function () {
                      a(this.axis.plotLinesAndBands, this),
                        delete this.axis,
                        r(this);
                    }),
                    e
                  );
                })();
              return (
                h(e.prototype, {
                  getPlotBandPath: function (t, e) {
                    var i = this.getPlotLinePath({
                        value: e,
                        force: !0,
                        acrossPanes: this.options.acrossPanes,
                      }),
                      s = this.getPlotLinePath({
                        value: t,
                        force: !0,
                        acrossPanes: this.options.acrossPanes,
                      }),
                      o = [],
                      n = this.horiz,
                      r = 1;
                    if (
                      ((t =
                        (t < this.min && e < this.min) ||
                        (t > this.max && e > this.max)),
                      s && i)
                    ) {
                      if (t) {
                        var a = s.toString() === i.toString();
                        r = 0;
                      }
                      for (t = 0; t < s.length; t += 2) {
                        e = s[t];
                        var h = s[t + 1],
                          l = i[t],
                          c = i[t + 1];
                        ("M" !== e[0] && "L" !== e[0]) ||
                          ("M" !== h[0] && "L" !== h[0]) ||
                          ("M" !== l[0] && "L" !== l[0]) ||
                          ("M" !== c[0] && "L" !== c[0]) ||
                          (n && l[1] === e[1]
                            ? ((l[1] += r), (c[1] += r))
                            : n || l[2] !== e[2] || ((l[2] += r), (c[2] += r)),
                          o.push(
                            ["M", e[1], e[2]],
                            ["L", h[1], h[2]],
                            ["L", c[1], c[2]],
                            ["L", l[1], l[2]],
                            ["Z"],
                          )),
                          (o.isFlat = a);
                      }
                    }
                    return o;
                  },
                  addPlotBand: function (t) {
                    return this.addPlotBandOrLine(t, "plotBands");
                  },
                  addPlotLine: function (t) {
                    return this.addPlotBandOrLine(t, "plotLines");
                  },
                  addPlotBandOrLine: function (t, e) {
                    var i = new p(this, t).render(),
                      s = this.userOptions;
                    if (i) {
                      if (e) {
                        var o = s[e] || [];
                        o.push(t), (s[e] = o);
                      }
                      this.plotLinesAndBands.push(i);
                    }
                    return i;
                  },
                  removePlotBandOrLine: function (t) {
                    for (
                      var e = this.plotLinesAndBands,
                        i = this.options,
                        s = this.userOptions,
                        o = e.length;
                      o--;

                    )
                      e[o].id === t && e[o].destroy();
                    [
                      i.plotLines || [],
                      s.plotLines || [],
                      i.plotBands || [],
                      s.plotBands || [],
                    ].forEach(function (e) {
                      for (o = e.length; o--; )
                        (e[o] || {}).id === t && a(e, e[o]);
                    });
                  },
                  removePlotBand: function (t) {
                    this.removePlotBandOrLine(t);
                  },
                  removePlotLine: function (t) {
                    this.removePlotBandOrLine(t);
                  },
                }),
                (t.PlotLineOrBand = p),
                t.PlotLineOrBand
              );
            },
          ),
          e(
            i,
            "parts/Tooltip.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.clamp,
                s = e.css,
                o = e.defined,
                n = e.discardElement,
                r = e.extend,
                a = e.fireEvent,
                h = e.format,
                l = e.isNumber,
                c = e.isString,
                d = e.merge,
                p = e.pick,
                u = e.splat,
                f = e.syncTimeout,
                g = e.timeUnits,
                m = t.doc,
                y = (function () {
                  function y(t, e) {
                    (this.crosshairs = []),
                      (this.distance = 0),
                      (this.isHidden = !0),
                      (this.isSticky = !1),
                      (this.now = {}),
                      (this.options = {}),
                      (this.outside = !1),
                      (this.chart = t),
                      this.init(t, e);
                  }
                  return (
                    (y.prototype.applyFilter = function () {
                      var t = this.chart;
                      t.renderer.definition({
                        tagName: "filter",
                        id: "drop-shadow-" + t.index,
                        opacity: 0.5,
                        children: [
                          {
                            tagName: "feGaussianBlur",
                            in: "SourceAlpha",
                            stdDeviation: 1,
                          },
                          { tagName: "feOffset", dx: 1, dy: 1 },
                          {
                            tagName: "feComponentTransfer",
                            children: [
                              {
                                tagName: "feFuncA",
                                type: "linear",
                                slope: 0.3,
                              },
                            ],
                          },
                          {
                            tagName: "feMerge",
                            children: [
                              { tagName: "feMergeNode" },
                              { tagName: "feMergeNode", in: "SourceGraphic" },
                            ],
                          },
                        ],
                      }),
                        t.renderer.definition({
                          tagName: "style",
                          textContent:
                            ".highcharts-tooltip-" +
                            t.index +
                            "{filter:url(#drop-shadow-" +
                            t.index +
                            ")}",
                        });
                    }),
                    (y.prototype.bodyFormatter = function (t) {
                      return t.map(function (t) {
                        var e = t.series.tooltipOptions;
                        return (
                          e[(t.point.formatPrefix || "point") + "Formatter"] ||
                          t.point.tooltipFormatter
                        ).call(
                          t.point,
                          e[(t.point.formatPrefix || "point") + "Format"] || "",
                        );
                      });
                    }),
                    (y.prototype.cleanSplit = function (t) {
                      this.chart.series.forEach(function (e) {
                        var i = e && e.tt;
                        i &&
                          (!i.isActive || t
                            ? (e.tt = i.destroy())
                            : (i.isActive = !1));
                      });
                    }),
                    (y.prototype.defaultFormatter = function (t) {
                      var e = this.points || u(this),
                        i = [t.tooltipFooterHeaderFormatter(e[0])];
                      return (
                        (i = i.concat(t.bodyFormatter(e))).push(
                          t.tooltipFooterHeaderFormatter(e[0], !0),
                        ),
                        i
                      );
                    }),
                    (y.prototype.destroy = function () {
                      this.label && (this.label = this.label.destroy()),
                        this.split &&
                          this.tt &&
                          (this.cleanSplit(this.chart, !0),
                          (this.tt = this.tt.destroy())),
                        this.renderer &&
                          ((this.renderer = this.renderer.destroy()),
                          n(this.container)),
                        e.clearTimeout(this.hideTimer),
                        e.clearTimeout(this.tooltipTimeout);
                    }),
                    (y.prototype.getAnchor = function (t, e) {
                      var i,
                        s,
                        o = this.chart,
                        n = o.pointer,
                        r = o.inverted,
                        a = o.plotTop,
                        h = o.plotLeft,
                        l = 0,
                        c = 0;
                      return (
                        (t = u(t)),
                        this.followPointer && e
                          ? ("undefined" === typeof e.chartX &&
                              (e = n.normalize(e)),
                            (t = [e.chartX - h, e.chartY - a]))
                          : t[0].tooltipPos
                            ? (t = t[0].tooltipPos)
                            : (t.forEach(function (t) {
                                (i = t.series.yAxis),
                                  (s = t.series.xAxis),
                                  (l += t.plotX + (!r && s ? s.left - h : 0)),
                                  (c +=
                                    (t.plotLow
                                      ? (t.plotLow + t.plotHigh) / 2
                                      : t.plotY) + (!r && i ? i.top - a : 0));
                              }),
                              (l /= t.length),
                              (c /= t.length),
                              (t = [
                                r ? o.plotWidth - c : l,
                                this.shared && !r && 1 < t.length && e
                                  ? e.chartY - a
                                  : r
                                    ? o.plotHeight - l
                                    : c,
                              ])),
                        t.map(Math.round)
                      );
                    }),
                    (y.prototype.getDateFormat = function (t, e, i, s) {
                      var o = this.chart.time,
                        n = o.dateFormat("%m-%d %H:%M:%S.%L", e),
                        r = {
                          millisecond: 15,
                          second: 12,
                          minute: 9,
                          hour: 6,
                          day: 3,
                        },
                        a = "millisecond";
                      for (h in g) {
                        if (
                          t === g.week &&
                          +o.dateFormat("%w", e) === i &&
                          "00:00:00.000" === n.substr(6)
                        ) {
                          var h = "week";
                          break;
                        }
                        if (g[h] > t) {
                          h = a;
                          break;
                        }
                        if (
                          r[h] &&
                          n.substr(r[h]) !== "01-01 00:00:00.000".substr(r[h])
                        )
                          break;
                        "week" !== h && (a = h);
                      }
                      if (h) var l = o.resolveDTLFormat(s[h]).main;
                      return l;
                    }),
                    (y.prototype.getLabel = function () {
                      var e,
                        i,
                        n,
                        r = this,
                        a = this.chart.renderer,
                        h = this.chart.styledMode,
                        l = this.options,
                        c =
                          "tooltip" + (o(l.className) ? " " + l.className : ""),
                        d =
                          (null === (e = l.style) || void 0 === e
                            ? void 0
                            : e.pointerEvents) ||
                          (!this.followPointer && l.stickOnContact
                            ? "auto"
                            : "none");
                      e = function () {
                        r.inContact = !0;
                      };
                      if (!this.label) {
                        if (
                          (this.outside &&
                            ((this.container = n = t.doc.createElement("div")),
                            (n.className = "highcharts-tooltip-container"),
                            s(n, {
                              position: "absolute",
                              top: "1px",
                              pointerEvents: d,
                              zIndex: 3,
                            }),
                            t.doc.body.appendChild(n),
                            (this.renderer = a =
                              new t.Renderer(
                                n,
                                0,
                                0,
                                null === (i = this.chart.options.chart) ||
                                void 0 === i
                                  ? void 0
                                  : i.style,
                                void 0,
                                void 0,
                                a.styledMode,
                              ))),
                          this.split
                            ? (this.label = a.g(c))
                            : ((this.label = a
                                .label(
                                  "",
                                  0,
                                  0,
                                  l.shape || "callout",
                                  null,
                                  null,
                                  l.useHTML,
                                  null,
                                  c,
                                )
                                .attr({
                                  padding: l.padding,
                                  r: l.borderRadius,
                                })),
                              h ||
                                this.label
                                  .attr({
                                    fill: l.backgroundColor,
                                    "stroke-width": l.borderWidth,
                                  })
                                  .css(l.style)
                                  .css({ pointerEvents: d })
                                  .shadow(l.shadow)),
                          h &&
                            (this.applyFilter(),
                            this.label.addClass(
                              "highcharts-tooltip-" + this.chart.index,
                            )),
                          r.outside && !r.split)
                        ) {
                          var p = {
                            x: this.label.xSetter,
                            y: this.label.ySetter,
                          };
                          (this.label.xSetter = function (t, e) {
                            p[e].call(this.label, r.distance),
                              (n.style.left = t + "px");
                          }),
                            (this.label.ySetter = function (t, e) {
                              p[e].call(this.label, r.distance),
                                (n.style.top = t + "px");
                            });
                        }
                        this.label
                          .on("mouseenter", e)
                          .on("mouseleave", function () {
                            var t = r.chart.hoverSeries;
                            (r.inContact = !1),
                              t && t.onMouseOut && t.onMouseOut();
                          })
                          .attr({ zIndex: 8 })
                          .add();
                      }
                      return this.label;
                    }),
                    (y.prototype.getPosition = function (t, e, i) {
                      var s,
                        o = this.chart,
                        n = this.distance,
                        r = {},
                        a = (o.inverted && i.h) || 0,
                        h = this.outside,
                        l = h
                          ? m.documentElement.clientWidth - 2 * n
                          : o.chartWidth,
                        c = h
                          ? Math.max(
                              m.body.scrollHeight,
                              m.documentElement.scrollHeight,
                              m.body.offsetHeight,
                              m.documentElement.offsetHeight,
                              m.documentElement.clientHeight,
                            )
                          : o.chartHeight,
                        d = o.pointer.getChartPosition(),
                        u = o.containerScaling,
                        f = function (t) {
                          return u ? t * u.scaleX : t;
                        },
                        g = function (t) {
                          return u ? t * u.scaleY : t;
                        },
                        y = function (s) {
                          var r = "x" === s;
                          return [s, r ? l : c, r ? t : e].concat(
                            h
                              ? [
                                  r ? f(t) : g(e),
                                  r
                                    ? d.left - n + f(i.plotX + o.plotLeft)
                                    : d.top - n + g(i.plotY + o.plotTop),
                                  0,
                                  r ? l : c,
                                ]
                              : [
                                  r ? t : e,
                                  r
                                    ? i.plotX + o.plotLeft
                                    : i.plotY + o.plotTop,
                                  r ? o.plotLeft : o.plotTop,
                                  r
                                    ? o.plotLeft + o.plotWidth
                                    : o.plotTop + o.plotHeight,
                                ],
                          );
                        },
                        v = y("y"),
                        x = y("x"),
                        b =
                          !this.followPointer &&
                          p(i.ttBelow, !o.inverted === !!i.negative),
                        k = function (t, e, i, s, o, h, l) {
                          var c = "y" === t ? g(n) : f(n),
                            d = (i - s) / 2,
                            p = s < o - n,
                            u = o + n + s < e,
                            m = o - c - i + d;
                          if (((o = o + c - d), b && u)) r[t] = o;
                          else if (!b && p) r[t] = m;
                          else if (p)
                            r[t] = Math.min(l - s, 0 > m - a ? m : m - a);
                          else {
                            if (!u) return !1;
                            r[t] = Math.max(h, o + a + i > e ? o : o + a);
                          }
                        },
                        M = function (t, e, i, s, o) {
                          var a;
                          return (
                            o < n || o > e - n
                              ? (a = !1)
                              : (r[t] =
                                  o < i / 2
                                    ? 1
                                    : o > e - s / 2
                                      ? e - s - 2
                                      : o - i / 2),
                            a
                          );
                        },
                        w = function (t) {
                          var e = v;
                          (v = x), (x = e), (s = t);
                        };
                      return (
                        (o.inverted || 1 < this.len) && w(),
                        (function t() {
                          !1 !== k.apply(0, v)
                            ? !1 !== M.apply(0, x) || s || (w(!0), t())
                            : s
                              ? (r.x = r.y = 0)
                              : (w(!0), t());
                        })(),
                        r
                      );
                    }),
                    (y.prototype.getXDateFormat = function (t, e, i) {
                      e = e.dateTimeLabelFormats;
                      var s = i && i.closestPointRange;
                      return (
                        (s
                          ? this.getDateFormat(s, t.x, i.options.startOfWeek, e)
                          : e.day) || e.year
                      );
                    }),
                    (y.prototype.hide = function (t) {
                      var i = this;
                      e.clearTimeout(this.hideTimer),
                        (t = p(t, this.options.hideDelay, 500)),
                        this.isHidden ||
                          (this.hideTimer = f(function () {
                            i.getLabel().fadeOut(t ? void 0 : t),
                              (i.isHidden = !0);
                          }, t));
                    }),
                    (y.prototype.init = function (t, e) {
                      (this.chart = t),
                        (this.options = e),
                        (this.crosshairs = []),
                        (this.now = { x: 0, y: 0 }),
                        (this.isHidden = !0),
                        (this.split = e.split && !t.inverted && !t.polar),
                        (this.shared = e.shared || this.split),
                        (this.outside = p(
                          e.outside,
                          !(!t.scrollablePixelsX && !t.scrollablePixelsY),
                        ));
                    }),
                    (y.prototype.isStickyOnContact = function () {
                      return !(
                        this.followPointer ||
                        !this.options.stickOnContact ||
                        !this.inContact
                      );
                    }),
                    (y.prototype.move = function (t, i, s, o) {
                      var n = this,
                        a = n.now,
                        h =
                          !1 !== n.options.animation &&
                          !n.isHidden &&
                          (1 < Math.abs(t - a.x) || 1 < Math.abs(i - a.y)),
                        l = n.followPointer || 1 < n.len;
                      r(a, {
                        x: h ? (2 * a.x + t) / 3 : t,
                        y: h ? (a.y + i) / 2 : i,
                        anchorX: l ? void 0 : h ? (2 * a.anchorX + s) / 3 : s,
                        anchorY: l ? void 0 : h ? (a.anchorY + o) / 2 : o,
                      }),
                        n.getLabel().attr(a),
                        n.drawTracker(),
                        h &&
                          (e.clearTimeout(this.tooltipTimeout),
                          (this.tooltipTimeout = setTimeout(function () {
                            n && n.move(t, i, s, o);
                          }, 32)));
                    }),
                    (y.prototype.refresh = function (t, i) {
                      var s = this.chart,
                        o = this.options,
                        n = t,
                        r = {},
                        h = [],
                        l = o.formatter || this.defaultFormatter;
                      r = this.shared;
                      var c = s.styledMode;
                      if (o.enabled) {
                        e.clearTimeout(this.hideTimer),
                          (this.followPointer =
                            u(n)[0].series.tooltipOptions.followPointer);
                        var d = this.getAnchor(n, i);
                        i = d[0];
                        var f = d[1];
                        !r || (n.series && n.series.noSharedTooltip)
                          ? (r = n.getLabelConfig())
                          : (s.pointer.applyInactiveState(n),
                            n.forEach(function (t) {
                              t.setState("hover"), h.push(t.getLabelConfig());
                            }),
                            ((r = { x: n[0].category, y: n[0].y }).points = h),
                            (n = n[0])),
                          (this.len = h.length),
                          (s = l.call(r, this)),
                          (l = n.series),
                          (this.distance = p(l.tooltipOptions.distance, 16)),
                          !1 === s
                            ? this.hide()
                            : (this.split
                                ? this.renderSplit(s, u(t))
                                : ((t = this.getLabel()),
                                  (o.style.width && !c) ||
                                    t.css({
                                      width: this.chart.spacingBox.width + "px",
                                    }),
                                  t.attr({
                                    text: s && s.join ? s.join("") : s,
                                  }),
                                  t
                                    .removeClass(/highcharts-color-[\d]+/g)
                                    .addClass(
                                      "highcharts-color-" +
                                        p(n.colorIndex, l.colorIndex),
                                    ),
                                  c ||
                                    t.attr({
                                      stroke:
                                        o.borderColor ||
                                        n.color ||
                                        l.color ||
                                        "#666666",
                                    }),
                                  this.updatePosition({
                                    plotX: i,
                                    plotY: f,
                                    negative: n.negative,
                                    ttBelow: n.ttBelow,
                                    h: d[2] || 0,
                                  })),
                              this.isHidden &&
                                this.label &&
                                this.label.attr({ opacity: 1 }).show(),
                              (this.isHidden = !1)),
                          a(this, "refresh");
                      }
                    }),
                    (y.prototype.renderSplit = function (e, s) {
                      function o(t, e, s, o, n) {
                        return (
                          void 0 === n && (n = !0),
                          s
                            ? ((e = A ? 0 : C),
                              (t = i(t - o / 2, S.left, S.right - o)))
                            : ((e -= P),
                              (t = i(
                                (t = n ? t - o - k : t + k),
                                n ? t : S.left,
                                S.right,
                              ))),
                          { x: t, y: e }
                        );
                      }
                      var n = this,
                        a = n.chart,
                        h = n.chart,
                        l = h.plotHeight,
                        d = h.plotLeft,
                        u = h.plotTop,
                        f = h.pointer,
                        g = h.renderer,
                        m = h.scrollablePixelsY,
                        y = void 0 === m ? 0 : m,
                        v = (m =
                          void 0 === (m = h.scrollingContainer)
                            ? { scrollLeft: 0, scrollTop: 0 }
                            : m).scrollLeft,
                        x = m.scrollTop,
                        b = h.styledMode,
                        k = n.distance,
                        M = n.options,
                        w = n.options.positioner,
                        S = {
                          left: v,
                          right: v + h.chartWidth,
                          top: x,
                          bottom: x + h.chartHeight,
                        },
                        T = n.getLabel(),
                        A = !(!a.xAxis[0] || !a.xAxis[0].opposite),
                        P = u + x,
                        L = 0,
                        C = l - y;
                      c(e) && (e = [!1, e]),
                        (e = e.slice(0, s.length + 1).reduce(function (
                          t,
                          e,
                          r,
                        ) {
                          if (!1 !== e && "" !== e) {
                            var a = (r = s[r - 1] || {
                                isHeader: !0,
                                plotX: s[0].plotX,
                                plotY: l,
                                series: {},
                              }).isHeader,
                              h = a ? n : r.series,
                              c = h.tt,
                              f = r.isHeader,
                              m = r.series,
                              v =
                                "highcharts-color-" +
                                p(r.colorIndex, m.colorIndex, "none");
                            c ||
                              ((c = { padding: M.padding, r: M.borderRadius }),
                              b ||
                                ((c.fill = M.backgroundColor),
                                (c["stroke-width"] = M.borderWidth)),
                              (c = g
                                .label(
                                  "",
                                  0,
                                  0,
                                  M[f ? "headerShape" : "shape"] || "callout",
                                  void 0,
                                  void 0,
                                  M.useHTML,
                                )
                                .addClass(
                                  (f ? "highcharts-tooltip-header " : "") +
                                    "highcharts-tooltip-box " +
                                    v,
                                )
                                .attr(c)
                                .add(T))),
                              (c.isActive = !0),
                              c.attr({ text: e }),
                              b ||
                                c
                                  .css(M.style)
                                  .shadow(M.shadow)
                                  .attr({
                                    stroke:
                                      M.borderColor ||
                                      r.color ||
                                      m.color ||
                                      "#333333",
                                  }),
                              (e = h.tt = c),
                              (h = (f = e.getBBox()).width + e.strokeWidth()),
                              a && ((L = f.height), (C += L), A && (P -= L)),
                              (m = void 0 === (m = r.plotX) ? 0 : m),
                              (v = void 0 === (v = r.plotY) ? 0 : v);
                            var O = r.series;
                            if (r.isHeader) {
                              m = d + m;
                              var E = u + l / 2;
                            } else
                              (c = O.xAxis),
                                (O = O.yAxis),
                                (m = c.pos + i(m, -k, c.len + k)),
                                O.pos + v >= x + u &&
                                  O.pos + v <= x + u + l - y &&
                                  (E = O.pos + v);
                            (m = i(m, S.left - k, S.right + k)),
                              "number" === typeof E
                                ? ((f = f.height + 1),
                                  (v = w ? w.call(n, h, f, r) : o(m, E, a, h)),
                                  t.push({
                                    align: w ? 0 : void 0,
                                    anchorX: m,
                                    anchorY: E,
                                    boxWidth: h,
                                    point: r,
                                    rank: p(v.rank, a ? 1 : 0),
                                    size: f,
                                    target: v.y,
                                    tt: e,
                                    x: v.x,
                                  }))
                                : (e.isActive = !1);
                          }
                          return t;
                        }, [])),
                        !w &&
                          e.some(function (t) {
                            return t.x < S.left;
                          }) &&
                          (e = e.map(function (t) {
                            var e = o(
                              t.anchorX,
                              t.anchorY,
                              t.point.isHeader,
                              t.boxWidth,
                              !1,
                            );
                            return r(t, { target: e.y, x: e.x });
                          })),
                        n.cleanSplit(),
                        t.distribute(e, C),
                        e.forEach(function (t) {
                          var e = t.pos;
                          t.tt.attr({
                            visibility:
                              "undefined" === typeof e ? "hidden" : "inherit",
                            x: t.x,
                            y: e + P,
                            anchorX: t.anchorX,
                            anchorY: t.anchorY,
                          });
                        }),
                        (e = n.container),
                        (a = n.renderer),
                        n.outside &&
                          e &&
                          a &&
                          ((h = T.getBBox()),
                          a.setSize(h.width + h.x, h.height + h.y, !1),
                          (f = f.getChartPosition()),
                          (e.style.left = f.left + "px"),
                          (e.style.top = f.top + "px"));
                    }),
                    (y.prototype.drawTracker = function () {
                      if (this.followPointer || !this.options.stickOnContact)
                        this.tracker && this.tracker.destroy();
                      else {
                        var t = this.chart,
                          e = this.label,
                          i = t.hoverPoint;
                        if (e && i) {
                          var s = { x: 0, y: 0, width: 0, height: 0 };
                          i = this.getAnchor(i);
                          var o = e.getBBox();
                          (i[0] += t.plotLeft - e.translateX),
                            (i[1] += t.plotTop - e.translateY),
                            (s.x = Math.min(0, i[0])),
                            (s.y = Math.min(0, i[1])),
                            (s.width =
                              0 > i[0]
                                ? Math.max(Math.abs(i[0]), o.width - i[0])
                                : Math.max(Math.abs(i[0]), o.width)),
                            (s.height =
                              0 > i[1]
                                ? Math.max(
                                    Math.abs(i[1]),
                                    o.height - Math.abs(i[1]),
                                  )
                                : Math.max(Math.abs(i[1]), o.height)),
                            this.tracker
                              ? this.tracker.attr(s)
                              : ((this.tracker = e.renderer
                                  .rect(s)
                                  .addClass("highcharts-tracker")
                                  .add(e)),
                                t.styledMode ||
                                  this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
                        }
                      }
                    }),
                    (y.prototype.styledModeFormat = function (t) {
                      return t
                        .replace(
                          'style="font-size: 10px"',
                          'class="highcharts-header"',
                        )
                        .replace(
                          /style="color:{(point|series)\.color}"/g,
                          'class="highcharts-color-{$1.colorIndex}"',
                        );
                    }),
                    (y.prototype.tooltipFooterHeaderFormatter = function (
                      t,
                      e,
                    ) {
                      var i = e ? "footer" : "header",
                        s = t.series,
                        o = s.tooltipOptions,
                        n = o.xDateFormat,
                        r = s.xAxis,
                        c = r && "datetime" === r.options.type && l(t.key),
                        d = o[i + "Format"];
                      return (
                        a(
                          this,
                          "headerFormatter",
                          (e = { isFooter: e, labelConfig: t }),
                          function (e) {
                            c && !n && (n = this.getXDateFormat(t, o, r)),
                              c &&
                                n &&
                                (
                                  (t.point && t.point.tooltipDateKeys) || [
                                    "key",
                                  ]
                                ).forEach(function (t) {
                                  d = d.replace(
                                    "{point." + t + "}",
                                    "{point." + t + ":" + n + "}",
                                  );
                                }),
                              s.chart.styledMode &&
                                (d = this.styledModeFormat(d)),
                              (e.text = h(
                                d,
                                { point: t, series: s },
                                this.chart,
                              ));
                          },
                        ),
                        e.text
                      );
                    }),
                    (y.prototype.update = function (t) {
                      this.destroy(),
                        d(!0, this.chart.options.tooltip.userOptions, t),
                        this.init(this.chart, d(!0, this.options, t));
                    }),
                    (y.prototype.updatePosition = function (t) {
                      var e = this.chart,
                        i = e.pointer,
                        o = this.getLabel(),
                        n = t.plotX + e.plotLeft,
                        r = t.plotY + e.plotTop;
                      if (
                        ((i = i.getChartPosition()),
                        (t = (this.options.positioner || this.getPosition).call(
                          this,
                          o.width,
                          o.height,
                          t,
                        )),
                        this.outside)
                      ) {
                        var a =
                          (this.options.borderWidth || 0) + 2 * this.distance;
                        this.renderer.setSize(o.width + a, o.height + a, !1),
                          (e = e.containerScaling) &&
                            (s(this.container, {
                              transform:
                                "scale(" + e.scaleX + ", " + e.scaleY + ")",
                            }),
                            (n *= e.scaleX),
                            (r *= e.scaleY)),
                          (n += i.left - t.x),
                          (r += i.top - t.y);
                      }
                      this.move(Math.round(t.x), Math.round(t.y || 0), n, r);
                    }),
                    y
                  );
                })();
              return (t.Tooltip = y), t.Tooltip;
            },
          ),
          e(
            i,
            "parts/Pointer.js",
            [
              i["parts/Globals.js"],
              i["parts/Utilities.js"],
              i["parts/Tooltip.js"],
              i["parts/Color.js"],
            ],
            function (t, e, i, s) {
              var o = e.addEvent,
                n = e.attr,
                r = e.css,
                a = e.defined,
                h = e.extend,
                l = e.find,
                c = e.fireEvent,
                d = e.isNumber,
                p = e.isObject,
                u = e.objectEach,
                f = e.offset,
                g = e.pick,
                m = e.splat,
                y = s.parse,
                v = t.charts,
                x = t.noop;
              return (
                (e = (function () {
                  function e(t, e) {
                    (this.lastValidTouch = {}),
                      (this.pinchDown = []),
                      (this.runChartClick = !1),
                      (this.chart = t),
                      (this.hasDragged = !1),
                      (this.options = e),
                      (this.unbindContainerMouseLeave = function () {}),
                      this.init(t, e);
                  }
                  return (
                    (e.prototype.applyInactiveState = function (t) {
                      var e,
                        i = [];
                      (t || []).forEach(function (t) {
                        (e = t.series),
                          i.push(e),
                          e.linkedParent && i.push(e.linkedParent),
                          e.linkedSeries && (i = i.concat(e.linkedSeries)),
                          e.navigatorSeries && i.push(e.navigatorSeries);
                      }),
                        this.chart.series.forEach(function (t) {
                          -1 === i.indexOf(t)
                            ? t.setState("inactive", !0)
                            : t.options.inactiveOtherPoints &&
                              t.setAllPointsToState("inactive");
                        });
                    }),
                    (e.prototype.destroy = function () {
                      var e = this;
                      "undefined" !== typeof e.unDocMouseMove &&
                        e.unDocMouseMove(),
                        this.unbindContainerMouseLeave(),
                        t.chartCount ||
                          (t.unbindDocumentMouseUp &&
                            (t.unbindDocumentMouseUp =
                              t.unbindDocumentMouseUp()),
                          t.unbindDocumentTouchEnd &&
                            (t.unbindDocumentTouchEnd =
                              t.unbindDocumentTouchEnd())),
                        clearInterval(e.tooltipTimeout),
                        u(e, function (t, i) {
                          e[i] = null;
                        });
                    }),
                    (e.prototype.drag = function (t) {
                      var e = this.chart,
                        i = e.options.chart,
                        s = t.chartX,
                        o = t.chartY,
                        n = this.zoomHor,
                        r = this.zoomVert,
                        a = e.plotLeft,
                        h = e.plotTop,
                        l = e.plotWidth,
                        c = e.plotHeight,
                        d = this.selectionMarker,
                        u = this.mouseDownX || 0,
                        f = this.mouseDownY || 0,
                        g = p(i.panning)
                          ? i.panning && i.panning.enabled
                          : i.panning,
                        m = i.panKey && t[i.panKey + "Key"];
                      if (
                        (!d || !d.touch) &&
                        (s < a ? (s = a) : s > a + l && (s = a + l),
                        o < h ? (o = h) : o > h + c && (o = h + c),
                        (this.hasDragged = Math.sqrt(
                          Math.pow(u - s, 2) + Math.pow(f - o, 2),
                        )),
                        10 < this.hasDragged)
                      ) {
                        var v = e.isInsidePlot(u - a, f - h);
                        e.hasCartesianSeries &&
                          (this.zoomX || this.zoomY) &&
                          v &&
                          !m &&
                          !d &&
                          ((this.selectionMarker = d =
                            e.renderer
                              .rect(a, h, n ? 1 : l, r ? 1 : c, 0)
                              .attr({
                                class: "highcharts-selection-marker",
                                zIndex: 7,
                              })
                              .add()),
                          e.styledMode ||
                            d.attr({
                              fill:
                                i.selectionMarkerFill ||
                                y("#335cad").setOpacity(0.25).get(),
                            })),
                          d &&
                            n &&
                            ((s -= u),
                            d.attr({
                              width: Math.abs(s),
                              x: (0 < s ? 0 : s) + u,
                            })),
                          d &&
                            r &&
                            ((s = o - f),
                            d.attr({
                              height: Math.abs(s),
                              y: (0 < s ? 0 : s) + f,
                            })),
                          v && !d && g && e.pan(t, i.panning);
                      }
                    }),
                    (e.prototype.dragStart = function (t) {
                      var e = this.chart;
                      (e.mouseIsDown = t.type),
                        (e.cancelClick = !1),
                        (e.mouseDownX = this.mouseDownX = t.chartX),
                        (e.mouseDownY = this.mouseDownY = t.chartY);
                    }),
                    (e.prototype.drop = function (t) {
                      var e = this,
                        i = this.chart,
                        s = this.hasPinched;
                      if (this.selectionMarker) {
                        var o,
                          n = { originalEvent: t, xAxis: [], yAxis: [] },
                          l = this.selectionMarker,
                          p = l.attr ? l.attr("x") : l.x,
                          u = l.attr ? l.attr("y") : l.y,
                          f = l.attr ? l.attr("width") : l.width,
                          g = l.attr ? l.attr("height") : l.height;
                        (this.hasDragged || s) &&
                          (i.axes.forEach(function (i) {
                            if (
                              i.zoomEnabled &&
                              a(i.min) &&
                              (s ||
                                e[{ xAxis: "zoomX", yAxis: "zoomY" }[i.coll]])
                            ) {
                              var r = i.horiz,
                                h =
                                  "touchend" === t.type ? i.minPixelPadding : 0,
                                l = i.toValue((r ? p : u) + h);
                              (r = i.toValue((r ? p + f : u + g) - h)),
                                n[i.coll].push({
                                  axis: i,
                                  min: Math.min(l, r),
                                  max: Math.max(l, r),
                                }),
                                (o = !0);
                            }
                          }),
                          o &&
                            c(i, "selection", n, function (t) {
                              i.zoom(h(t, s ? { animation: !1 } : null));
                            })),
                          d(i.index) &&
                            (this.selectionMarker =
                              this.selectionMarker.destroy()),
                          s && this.scaleGroups();
                      }
                      i &&
                        d(i.index) &&
                        (r(i.container, { cursor: i._cursor }),
                        (i.cancelClick = 10 < this.hasDragged),
                        (i.mouseIsDown =
                          this.hasDragged =
                          this.hasPinched =
                            !1),
                        (this.pinchDown = []));
                    }),
                    (e.prototype.findNearestKDPoint = function (t, e, i) {
                      var s,
                        o = this.chart,
                        n = o.hoverPoint;
                      return (
                        (o = o.tooltip),
                        n && o && o.isStickyOnContact()
                          ? n
                          : (t.forEach(function (t) {
                              var o =
                                !(t.noSharedTooltip && e) &&
                                0 > t.options.findNearestPointBy.indexOf("y");
                              if (
                                ((t = t.searchPoint(i, o)),
                                (o = p(t, !0)) && !(o = !p(s, !0)))
                              ) {
                                o = s.distX - t.distX;
                                var n = s.dist - t.dist,
                                  r =
                                    (t.series.group && t.series.group.zIndex) -
                                    (s.series.group && s.series.group.zIndex);
                                o =
                                  0 <
                                  (0 !== o && e
                                    ? o
                                    : 0 !== n
                                      ? n
                                      : 0 !== r
                                        ? r
                                        : s.series.index > t.series.index
                                          ? -1
                                          : 1);
                              }
                              o && (s = t);
                            }),
                            s)
                      );
                    }),
                    (e.prototype.getChartCoordinatesFromPoint = function (
                      t,
                      e,
                    ) {
                      var i = t.series,
                        s = i.xAxis;
                      i = i.yAxis;
                      var o = g(t.clientX, t.plotX),
                        n = t.shapeArgs;
                      return s && i
                        ? e
                          ? {
                              chartX: s.len + s.pos - o,
                              chartY: i.len + i.pos - t.plotY,
                            }
                          : { chartX: o + s.pos, chartY: t.plotY + i.pos }
                        : n && n.x && n.y
                          ? { chartX: n.x, chartY: n.y }
                          : void 0;
                    }),
                    (e.prototype.getChartPosition = function () {
                      return (
                        this.chartPosition ||
                        (this.chartPosition = f(this.chart.container))
                      );
                    }),
                    (e.prototype.getCoordinates = function (t) {
                      var e = { xAxis: [], yAxis: [] };
                      return (
                        this.chart.axes.forEach(function (i) {
                          e[i.isXAxis ? "xAxis" : "yAxis"].push({
                            axis: i,
                            value: i.toValue(t[i.horiz ? "chartX" : "chartY"]),
                          });
                        }),
                        e
                      );
                    }),
                    (e.prototype.getHoverData = function (t, e, i, s, o, n) {
                      var r,
                        a = [];
                      s = !(!s || !t);
                      var h = e && !e.stickyTracking,
                        d = {
                          chartX: n ? n.chartX : void 0,
                          chartY: n ? n.chartY : void 0,
                          shared: o,
                        };
                      return (
                        c(this, "beforeGetHoverData", d),
                        (h = h
                          ? [e]
                          : i.filter(function (t) {
                              return d.filter
                                ? d.filter(t)
                                : t.visible &&
                                    !(!o && t.directTouch) &&
                                    g(t.options.enableMouseTracking, !0) &&
                                    t.stickyTracking;
                            })),
                        (e =
                          (r =
                            s || !n ? t : this.findNearestKDPoint(h, o, n)) &&
                          r.series),
                        r &&
                          (o && !e.noSharedTooltip
                            ? (h = i.filter(function (t) {
                                return d.filter
                                  ? d.filter(t)
                                  : t.visible &&
                                      !(!o && t.directTouch) &&
                                      g(t.options.enableMouseTracking, !0) &&
                                      !t.noSharedTooltip;
                              })).forEach(function (t) {
                                var e = l(t.points, function (t) {
                                  return t.x === r.x && !t.isNull;
                                });
                                p(e) &&
                                  (t.chart.isBoosting && (e = t.getPoint(e)),
                                  a.push(e));
                              })
                            : a.push(r)),
                        c(this, "afterGetHoverData", (d = { hoverPoint: r })),
                        {
                          hoverPoint: d.hoverPoint,
                          hoverSeries: e,
                          hoverPoints: a,
                        }
                      );
                    }),
                    (e.prototype.getPointFromEvent = function (t) {
                      t = t.target;
                      for (var e; t && !e; ) (e = t.point), (t = t.parentNode);
                      return e;
                    }),
                    (e.prototype.onTrackerMouseOut = function (t) {
                      t = t.relatedTarget || t.toElement;
                      var e = this.chart.hoverSeries;
                      (this.isDirectTouch = !1),
                        !e ||
                          !t ||
                          e.stickyTracking ||
                          this.inClass(t, "highcharts-tooltip") ||
                          (this.inClass(t, "highcharts-series-" + e.index) &&
                            this.inClass(t, "highcharts-tracker")) ||
                          e.onMouseOut();
                    }),
                    (e.prototype.inClass = function (t, e) {
                      for (var i; t; ) {
                        if ((i = n(t, "class"))) {
                          if (-1 !== i.indexOf(e)) return !0;
                          if (-1 !== i.indexOf("highcharts-container"))
                            return !1;
                        }
                        t = t.parentNode;
                      }
                    }),
                    (e.prototype.init = function (t, e) {
                      (this.options = e),
                        (this.chart = t),
                        (this.runChartClick =
                          e.chart.events && !!e.chart.events.click),
                        (this.pinchDown = []),
                        (this.lastValidTouch = {}),
                        i &&
                          ((t.tooltip = new i(t, e.tooltip)),
                          (this.followTouchMove = g(
                            e.tooltip.followTouchMove,
                            !0,
                          ))),
                        this.setDOMEvents();
                    }),
                    (e.prototype.normalize = function (t, e) {
                      var i = t.touches,
                        s = i
                          ? i.length
                            ? i.item(0)
                            : i.changedTouches[0]
                          : t;
                      return (
                        e || (e = this.getChartPosition()),
                        (i = s.pageX - e.left),
                        (e = s.pageY - e.top),
                        (s = this.chart.containerScaling) &&
                          ((i /= s.scaleX), (e /= s.scaleY)),
                        h(t, { chartX: Math.round(i), chartY: Math.round(e) })
                      );
                    }),
                    (e.prototype.onContainerClick = function (t) {
                      var e = this.chart,
                        i = e.hoverPoint;
                      t = this.normalize(t);
                      var s = e.plotLeft,
                        o = e.plotTop;
                      e.cancelClick ||
                        (i && this.inClass(t.target, "highcharts-tracker")
                          ? (c(i.series, "click", h(t, { point: i })),
                            e.hoverPoint && i.firePointEvent("click", t))
                          : (h(t, this.getCoordinates(t)),
                            e.isInsidePlot(t.chartX - s, t.chartY - o) &&
                              c(e, "click", t)));
                    }),
                    (e.prototype.onContainerMouseDown = function (e) {
                      (e = this.normalize(e)),
                        t.isFirefox &&
                          0 !== e.button &&
                          this.onContainerMouseMove(e),
                        ("undefined" !== typeof e.button &&
                          1 !== (1 & (e.buttons || e.button))) ||
                          (this.zoomOption(e), this.dragStart(e));
                    }),
                    (e.prototype.onContainerMouseLeave = function (e) {
                      var i = v[g(t.hoverChartIndex, -1)],
                        s = this.chart.tooltip;
                      (e = this.normalize(e)),
                        i &&
                          (e.relatedTarget || e.toElement) &&
                          (i.pointer.reset(),
                          (i.pointer.chartPosition = void 0)),
                        s && !s.isHidden && this.reset();
                    }),
                    (e.prototype.onContainerMouseMove = function (t) {
                      var e = this.chart;
                      (t = this.normalize(t)),
                        this.setHoverChartIndex(),
                        t.preventDefault || (t.returnValue = !1),
                        "mousedown" === e.mouseIsDown && this.drag(t),
                        e.openMenu ||
                          (!this.inClass(t.target, "highcharts-tracker") &&
                            !e.isInsidePlot(
                              t.chartX - e.plotLeft,
                              t.chartY - e.plotTop,
                            )) ||
                          this.runPointActions(t);
                    }),
                    (e.prototype.onDocumentTouchEnd = function (e) {
                      v[t.hoverChartIndex] &&
                        v[t.hoverChartIndex].pointer.drop(e);
                    }),
                    (e.prototype.onContainerTouchMove = function (t) {
                      this.touch(t);
                    }),
                    (e.prototype.onContainerTouchStart = function (t) {
                      this.zoomOption(t), this.touch(t, !0);
                    }),
                    (e.prototype.onDocumentMouseMove = function (t) {
                      var e = this.chart,
                        i = this.chartPosition;
                      t = this.normalize(t, i);
                      var s = e.tooltip;
                      !i ||
                        (s && s.isStickyOnContact()) ||
                        e.isInsidePlot(
                          t.chartX - e.plotLeft,
                          t.chartY - e.plotTop,
                        ) ||
                        this.inClass(t.target, "highcharts-tracker") ||
                        this.reset();
                    }),
                    (e.prototype.onDocumentMouseUp = function (e) {
                      var i = v[g(t.hoverChartIndex, -1)];
                      i && i.pointer.drop(e);
                    }),
                    (e.prototype.pinch = function (t) {
                      var e = this,
                        i = e.chart,
                        s = e.pinchDown,
                        o = t.touches || [],
                        n = o.length,
                        r = e.lastValidTouch,
                        a = e.hasZoom,
                        l = e.selectionMarker,
                        c = {},
                        d =
                          1 === n &&
                          ((e.inClass(t.target, "highcharts-tracker") &&
                            i.runTrackerClick) ||
                            e.runChartClick),
                        p = {};
                      1 < n && (e.initiated = !0),
                        a && e.initiated && !d && t.preventDefault(),
                        [].map.call(o, function (t) {
                          return e.normalize(t);
                        }),
                        "touchstart" === t.type
                          ? ([].forEach.call(o, function (t, e) {
                              s[e] = { chartX: t.chartX, chartY: t.chartY };
                            }),
                            (r.x = [s[0].chartX, s[1] && s[1].chartX]),
                            (r.y = [s[0].chartY, s[1] && s[1].chartY]),
                            i.axes.forEach(function (t) {
                              if (t.zoomEnabled) {
                                var e = i.bounds[t.horiz ? "h" : "v"],
                                  s = t.minPixelPadding,
                                  o = t.toPixels(
                                    Math.min(
                                      g(t.options.min, t.dataMin),
                                      t.dataMin,
                                    ),
                                  ),
                                  n = t.toPixels(
                                    Math.max(
                                      g(t.options.max, t.dataMax),
                                      t.dataMax,
                                    ),
                                  ),
                                  r = Math.max(o, n);
                                (e.min = Math.min(t.pos, Math.min(o, n) - s)),
                                  (e.max = Math.max(t.pos + t.len, r + s));
                              }
                            }),
                            (e.res = !0))
                          : e.followTouchMove && 1 === n
                            ? this.runPointActions(e.normalize(t))
                            : s.length &&
                              (l ||
                                (e.selectionMarker = l =
                                  h({ destroy: x, touch: !0 }, i.plotBox)),
                              e.pinchTranslate(s, o, c, l, p, r),
                              (e.hasPinched = a),
                              e.scaleGroups(c, p),
                              e.res && ((e.res = !1), this.reset(!1, 0)));
                    }),
                    (e.prototype.pinchTranslate = function (t, e, i, s, o, n) {
                      this.zoomHor &&
                        this.pinchTranslateDirection(!0, t, e, i, s, o, n),
                        this.zoomVert &&
                          this.pinchTranslateDirection(!1, t, e, i, s, o, n);
                    }),
                    (e.prototype.pinchTranslateDirection = function (
                      t,
                      e,
                      i,
                      s,
                      o,
                      n,
                      r,
                      a,
                    ) {
                      var h,
                        l,
                        c = this.chart,
                        d = t ? "x" : "y",
                        p = t ? "X" : "Y",
                        u = "chart" + p,
                        f = t ? "width" : "height",
                        g = c["plot" + (t ? "Left" : "Top")],
                        m = a || 1,
                        y = c.inverted,
                        v = c.bounds[t ? "h" : "v"],
                        x = 1 === e.length,
                        b = e[0][u],
                        k = i[0][u],
                        M = !x && e[1][u],
                        w = !x && i[1][u];
                      if (
                        ((i = function () {
                          "number" === typeof w &&
                            20 < Math.abs(b - M) &&
                            (m = a || Math.abs(k - w) / Math.abs(b - M)),
                            (l = (g - k) / m + b),
                            (h = c["plot" + (t ? "Width" : "Height")] / m);
                        })(),
                        (e = l) < v.min)
                      ) {
                        e = v.min;
                        var S = !0;
                      } else e + h > v.max && ((e = v.max - h), (S = !0));
                      S
                        ? ((k -= 0.8 * (k - r[d][0])),
                          "number" === typeof w && (w -= 0.8 * (w - r[d][1])),
                          i())
                        : (r[d] = [k, w]),
                        y || ((n[d] = l - g), (n[f] = h)),
                        (n = y ? 1 / m : m),
                        (o[f] = h),
                        (o[d] = e),
                        (s[y ? (t ? "scaleY" : "scaleX") : "scale" + p] = m),
                        (s["translate" + p] = n * g + (k - n * b));
                    }),
                    (e.prototype.reset = function (t, e) {
                      var i = this.chart,
                        s = i.hoverSeries,
                        o = i.hoverPoint,
                        n = i.hoverPoints,
                        r = i.tooltip,
                        a = r && r.shared ? n : o;
                      t &&
                        a &&
                        m(a).forEach(function (e) {
                          e.series.isCartesian &&
                            "undefined" === typeof e.plotX &&
                            (t = !1);
                        }),
                        t
                          ? r &&
                            a &&
                            m(a).length &&
                            (r.refresh(a),
                            r.shared && n
                              ? n.forEach(function (t) {
                                  t.setState(t.state, !0),
                                    t.series.isCartesian &&
                                      (t.series.xAxis.crosshair &&
                                        t.series.xAxis.drawCrosshair(null, t),
                                      t.series.yAxis.crosshair &&
                                        t.series.yAxis.drawCrosshair(null, t));
                                })
                              : o &&
                                (o.setState(o.state, !0),
                                i.axes.forEach(function (t) {
                                  t.crosshair &&
                                    o.series[t.coll] === t &&
                                    t.drawCrosshair(null, o);
                                })))
                          : (o && o.onMouseOut(),
                            n &&
                              n.forEach(function (t) {
                                t.setState();
                              }),
                            s && s.onMouseOut(),
                            r && r.hide(e),
                            this.unDocMouseMove &&
                              (this.unDocMouseMove = this.unDocMouseMove()),
                            i.axes.forEach(function (t) {
                              t.hideCrosshair();
                            }),
                            (this.hoverX =
                              i.hoverPoints =
                              i.hoverPoint =
                                null));
                    }),
                    (e.prototype.runPointActions = function (e, i) {
                      var s = this.chart,
                        n =
                          s.tooltip && s.tooltip.options.enabled
                            ? s.tooltip
                            : void 0,
                        r = !!n && n.shared,
                        a = i || s.hoverPoint,
                        h = (a && a.series) || s.hoverSeries;
                      a = (h = this.getHoverData(
                        a,
                        h,
                        s.series,
                        (!e || "touchmove" !== e.type) &&
                          (!!i || (h && h.directTouch && this.isDirectTouch)),
                        r,
                        e,
                      )).hoverPoint;
                      var c = h.hoverPoints;
                      if (
                        ((i =
                          (h = h.hoverSeries) &&
                          h.tooltipOptions.followPointer),
                        (r = r && h && !h.noSharedTooltip),
                        a && (a !== s.hoverPoint || (n && n.isHidden)))
                      ) {
                        if (
                          ((s.hoverPoints || []).forEach(function (t) {
                            -1 === c.indexOf(t) && t.setState();
                          }),
                          s.hoverSeries !== h && h.onMouseOver(),
                          this.applyInactiveState(c),
                          (c || []).forEach(function (t) {
                            t.setState("hover");
                          }),
                          s.hoverPoint &&
                            s.hoverPoint.firePointEvent("mouseOut"),
                          !a.series)
                        )
                          return;
                        a.firePointEvent("mouseOver"),
                          (s.hoverPoints = c),
                          (s.hoverPoint = a),
                          n && n.refresh(r ? c : a, e);
                      } else
                        i &&
                          n &&
                          !n.isHidden &&
                          ((a = n.getAnchor([{}], e)),
                          n.updatePosition({ plotX: a[0], plotY: a[1] }));
                      this.unDocMouseMove ||
                        (this.unDocMouseMove = o(
                          s.container.ownerDocument,
                          "mousemove",
                          function (e) {
                            var i = v[t.hoverChartIndex];
                            i && i.pointer.onDocumentMouseMove(e);
                          },
                        )),
                        s.axes.forEach(function (t) {
                          var i,
                            o = g((t.crosshair || {}).snap, !0);
                          o &&
                            (((i = s.hoverPoint) && i.series[t.coll] === t) ||
                              (i = l(c, function (e) {
                                return e.series[t.coll] === t;
                              }))),
                            i || !o ? t.drawCrosshair(e, i) : t.hideCrosshair();
                        });
                    }),
                    (e.prototype.scaleGroups = function (t, e) {
                      var i,
                        s = this.chart;
                      s.series.forEach(function (o) {
                        (i = t || o.getPlotBox()),
                          o.xAxis &&
                            o.xAxis.zoomEnabled &&
                            o.group &&
                            (o.group.attr(i),
                            o.markerGroup &&
                              (o.markerGroup.attr(i),
                              o.markerGroup.clip(e ? s.clipRect : null)),
                            o.dataLabelsGroup && o.dataLabelsGroup.attr(i));
                      }),
                        s.clipRect.attr(e || s.clipBox);
                    }),
                    (e.prototype.setDOMEvents = function () {
                      var e = this.chart.container,
                        i = e.ownerDocument;
                      (e.onmousedown = this.onContainerMouseDown.bind(this)),
                        (e.onmousemove = this.onContainerMouseMove.bind(this)),
                        (e.onclick = this.onContainerClick.bind(this)),
                        (this.unbindContainerMouseLeave = o(
                          e,
                          "mouseleave",
                          this.onContainerMouseLeave.bind(this),
                        )),
                        t.unbindDocumentMouseUp ||
                          (t.unbindDocumentMouseUp = o(
                            i,
                            "mouseup",
                            this.onDocumentMouseUp.bind(this),
                          )),
                        t.hasTouch &&
                          (o(
                            e,
                            "touchstart",
                            this.onContainerTouchStart.bind(this),
                          ),
                          o(
                            e,
                            "touchmove",
                            this.onContainerTouchMove.bind(this),
                          ),
                          t.unbindDocumentTouchEnd ||
                            (t.unbindDocumentTouchEnd = o(
                              i,
                              "touchend",
                              this.onDocumentTouchEnd.bind(this),
                            )));
                    }),
                    (e.prototype.setHoverChartIndex = function () {
                      var e = this.chart,
                        i = t.charts[g(t.hoverChartIndex, -1)];
                      i &&
                        i !== e &&
                        i.pointer.onContainerMouseLeave({ relatedTarget: !0 }),
                        (i && i.mouseIsDown) || (t.hoverChartIndex = e.index);
                    }),
                    (e.prototype.touch = function (t, e) {
                      var i = this.chart;
                      if ((this.setHoverChartIndex(), 1 === t.touches.length))
                        if (
                          ((t = this.normalize(t)),
                          i.isInsidePlot(
                            t.chartX - i.plotLeft,
                            t.chartY - i.plotTop,
                          ) && !i.openMenu)
                        ) {
                          if (
                            (e && this.runPointActions(t),
                            "touchmove" === t.type)
                          )
                            var s =
                              !!(e = this.pinchDown)[0] &&
                              4 <=
                                Math.sqrt(
                                  Math.pow(e[0].chartX - t.chartX, 2) +
                                    Math.pow(e[0].chartY - t.chartY, 2),
                                );
                          g(s, !0) && this.pinch(t);
                        } else e && this.reset();
                      else 2 === t.touches.length && this.pinch(t);
                    }),
                    (e.prototype.zoomOption = function (t) {
                      var e = this.chart,
                        i = e.options.chart,
                        s = i.zoomType || "";
                      (e = e.inverted),
                        /touch/.test(t.type) && (s = g(i.pinchType, s)),
                        (this.zoomX = t = /x/.test(s)),
                        (this.zoomY = s = /y/.test(s)),
                        (this.zoomHor = (t && !e) || (s && e)),
                        (this.zoomVert = (s && !e) || (t && e)),
                        (this.hasZoom = t || s);
                    }),
                    e
                  );
                })()),
                (t.Pointer = e),
                t.Pointer
              );
            },
          ),
          e(
            i,
            "parts/MSPointer.js",
            [
              i["parts/Globals.js"],
              i["parts/Pointer.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i) {
              function s() {
                var t = [];
                return (
                  (t.item = function (t) {
                    return this[t];
                  }),
                  h(u, function (e) {
                    t.push({
                      pageX: e.pageX,
                      pageY: e.pageY,
                      target: e.target,
                    });
                  }),
                  t
                );
              }
              function o(e, i, o, n) {
                ("touch" !== e.pointerType &&
                  e.pointerType !== e.MSPOINTER_TYPE_TOUCH) ||
                  !c[t.hoverChartIndex] ||
                  (n(e),
                  (n = c[t.hoverChartIndex].pointer)[i]({
                    type: o,
                    target: e.currentTarget,
                    preventDefault: p,
                    touches: s(),
                  }));
              }
              var n =
                  (this && this.__extends) ||
                  (function () {
                    var t = function (e, i) {
                      return (t =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                          function (t, e) {
                            t.__proto__ = e;
                          }) ||
                        function (t, e) {
                          for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                        })(e, i);
                    };
                    return function (e, i) {
                      function s() {
                        this.constructor = e;
                      }
                      t(e, i),
                        (e.prototype =
                          null === i
                            ? Object.create(i)
                            : ((s.prototype = i.prototype), new s()));
                    };
                  })(),
                r = i.addEvent,
                a = i.css,
                h = i.objectEach,
                l = i.removeEvent,
                c = t.charts,
                d = t.doc,
                p = t.noop,
                u = {},
                f = !!t.win.PointerEvent;
              return (function (t) {
                function e() {
                  return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                  n(e, t),
                  (e.prototype.batchMSEvents = function (t) {
                    t(
                      this.chart.container,
                      f ? "pointerdown" : "MSPointerDown",
                      this.onContainerPointerDown,
                    ),
                      t(
                        this.chart.container,
                        f ? "pointermove" : "MSPointerMove",
                        this.onContainerPointerMove,
                      ),
                      t(
                        d,
                        f ? "pointerup" : "MSPointerUp",
                        this.onDocumentPointerUp,
                      );
                  }),
                  (e.prototype.destroy = function () {
                    this.batchMSEvents(l), t.prototype.destroy.call(this);
                  }),
                  (e.prototype.init = function (e, i) {
                    t.prototype.init.call(this, e, i),
                      this.hasZoom &&
                        a(e.container, {
                          "-ms-touch-action": "none",
                          "touch-action": "none",
                        });
                  }),
                  (e.prototype.onContainerPointerDown = function (t) {
                    o(t, "onContainerTouchStart", "touchstart", function (t) {
                      u[t.pointerId] = {
                        pageX: t.pageX,
                        pageY: t.pageY,
                        target: t.currentTarget,
                      };
                    });
                  }),
                  (e.prototype.onContainerPointerMove = function (t) {
                    o(t, "onContainerTouchMove", "touchmove", function (t) {
                      (u[t.pointerId] = { pageX: t.pageX, pageY: t.pageY }),
                        u[t.pointerId].target ||
                          (u[t.pointerId].target = t.currentTarget);
                    });
                  }),
                  (e.prototype.onDocumentPointerUp = function (t) {
                    o(t, "onDocumentTouchEnd", "touchend", function (t) {
                      delete u[t.pointerId];
                    });
                  }),
                  (e.prototype.setDOMEvents = function () {
                    t.prototype.setDOMEvents.call(this),
                      (this.hasZoom || this.followTouchMove) &&
                        this.batchMSEvents(r);
                  }),
                  e
                );
              })(e);
            },
          ),
          e(
            i,
            "parts/Legend.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.addEvent,
                s = e.animObject,
                o = e.css,
                n = e.defined,
                r = e.discardElement,
                a = e.find,
                h = e.fireEvent,
                l = e.format,
                c = e.isNumber,
                d = e.merge,
                p = e.pick,
                u = e.relativeLength,
                f = e.setAnimation,
                g = e.stableSort,
                m = e.syncTimeout;
              e = e.wrap;
              var y = t.isFirefox,
                v = t.marginNames,
                x = t.win,
                b = (function () {
                  function e(t, e) {
                    (this.allItems = []),
                      (this.contentGroup = this.box = void 0),
                      (this.display = !1),
                      (this.group = void 0),
                      (this.offsetWidth =
                        this.maxLegendWidth =
                        this.maxItemWidth =
                        this.legendWidth =
                        this.legendHeight =
                        this.lastLineHeight =
                        this.lastItemY =
                        this.itemY =
                        this.itemX =
                        this.itemMarginTop =
                        this.itemMarginBottom =
                        this.itemHeight =
                        this.initialItemY =
                          0),
                      (this.options = {}),
                      (this.padding = 0),
                      (this.pages = []),
                      (this.proximate = !1),
                      (this.scrollGroup = void 0),
                      (this.widthOption =
                        this.totalItemWidth =
                        this.titleHeight =
                        this.symbolWidth =
                        this.symbolHeight =
                          0),
                      (this.chart = t),
                      this.init(t, e);
                  }
                  return (
                    (e.prototype.init = function (t, e) {
                      (this.chart = t),
                        this.setOptions(e),
                        e.enabled &&
                          (this.render(),
                          i(this.chart, "endResize", function () {
                            this.legend.positionCheckboxes();
                          }),
                          this.proximate
                            ? (this.unchartrender = i(
                                this.chart,
                                "render",
                                function () {
                                  this.legend.proximatePositions(),
                                    this.legend.positionItems();
                                },
                              ))
                            : this.unchartrender && this.unchartrender());
                    }),
                    (e.prototype.setOptions = function (t) {
                      var e = p(t.padding, 8);
                      (this.options = t),
                        this.chart.styledMode ||
                          ((this.itemStyle = t.itemStyle),
                          (this.itemHiddenStyle = d(
                            this.itemStyle,
                            t.itemHiddenStyle,
                          ))),
                        (this.itemMarginTop = t.itemMarginTop || 0),
                        (this.itemMarginBottom = t.itemMarginBottom || 0),
                        (this.padding = e),
                        (this.initialItemY = e - 5),
                        (this.symbolWidth = p(t.symbolWidth, 16)),
                        (this.pages = []),
                        (this.proximate =
                          "proximate" === t.layout && !this.chart.inverted),
                        (this.baseline = void 0);
                    }),
                    (e.prototype.update = function (t, e) {
                      var i = this.chart;
                      this.setOptions(d(!0, this.options, t)),
                        this.destroy(),
                        (i.isDirtyLegend = i.isDirtyBox = !0),
                        p(e, !0) && i.redraw(),
                        h(this, "afterUpdate");
                    }),
                    (e.prototype.colorizeItem = function (t, e) {
                      if (
                        (t.legendGroup[e ? "removeClass" : "addClass"](
                          "highcharts-legend-item-hidden",
                        ),
                        !this.chart.styledMode)
                      ) {
                        var i = this.options,
                          s = t.legendItem,
                          o = t.legendLine,
                          n = t.legendSymbol,
                          r = this.itemHiddenStyle.color;
                        i = e ? i.itemStyle.color : r;
                        var a = (e && t.color) || r,
                          l = t.options && t.options.marker,
                          c = { fill: a };
                        s && s.css({ fill: i, color: i }),
                          o && o.attr({ stroke: a }),
                          n &&
                            (l &&
                              n.isMarker &&
                              ((c = t.pointAttribs()),
                              e || (c.stroke = c.fill = r)),
                            n.attr(c));
                      }
                      h(this, "afterColorizeItem", { item: t, visible: e });
                    }),
                    (e.prototype.positionItems = function () {
                      this.allItems.forEach(this.positionItem, this),
                        this.chart.isResizing || this.positionCheckboxes();
                    }),
                    (e.prototype.positionItem = function (t) {
                      var e = this.options,
                        i = e.symbolPadding;
                      e = !e.rtl;
                      var s = t._legendItemPos,
                        o = s[0];
                      s = s[1];
                      var r = t.checkbox;
                      (t = t.legendGroup) &&
                        t.element &&
                        t[n(t.translateY) ? "animate" : "attr"]({
                          translateX: e ? o : this.legendWidth - o - 2 * i - 4,
                          translateY: s,
                        }),
                        r && ((r.x = o), (r.y = s));
                    }),
                    (e.prototype.destroyItem = function (t) {
                      var e = t.checkbox;
                      [
                        "legendItem",
                        "legendLine",
                        "legendSymbol",
                        "legendGroup",
                      ].forEach(function (e) {
                        t[e] && (t[e] = t[e].destroy());
                      }),
                        e && r(t.checkbox);
                    }),
                    (e.prototype.destroy = function () {
                      function t(t) {
                        this[t] && (this[t] = this[t].destroy());
                      }
                      this.getAllItems().forEach(function (e) {
                        ["legendItem", "legendGroup"].forEach(t, e);
                      }),
                        "clipRect up down pager nav box title group"
                          .split(" ")
                          .forEach(t, this),
                        (this.display = null);
                    }),
                    (e.prototype.positionCheckboxes = function () {
                      var t = this.group && this.group.alignAttr,
                        e = this.clipHeight || this.legendHeight,
                        i = this.titleHeight;
                      if (t) {
                        var s = t.translateY;
                        this.allItems.forEach(function (n) {
                          var r = n.checkbox;
                          if (r) {
                            var a = s + i + r.y + (this.scrollOffset || 0) + 3;
                            o(r, {
                              left:
                                t.translateX +
                                n.checkboxOffset +
                                r.x -
                                20 +
                                "px",
                              top: a + "px",
                              display:
                                this.proximate || (a > s - 6 && a < s + e - 6)
                                  ? ""
                                  : "none",
                            });
                          }
                        }, this);
                      }
                    }),
                    (e.prototype.renderTitle = function () {
                      var t = this.options,
                        e = this.padding,
                        i = t.title,
                        s = 0;
                      i.text &&
                        (this.title ||
                          ((this.title = this.chart.renderer
                            .label(
                              i.text,
                              e - 3,
                              e - 4,
                              null,
                              null,
                              null,
                              t.useHTML,
                              null,
                              "legend-title",
                            )
                            .attr({ zIndex: 1 })),
                          this.chart.styledMode || this.title.css(i.style),
                          this.title.add(this.group)),
                        i.width ||
                          this.title.css({ width: this.maxLegendWidth + "px" }),
                        (s = (t = this.title.getBBox()).height),
                        (this.offsetWidth = t.width),
                        this.contentGroup.attr({ translateY: s })),
                        (this.titleHeight = s);
                    }),
                    (e.prototype.setText = function (t) {
                      var e = this.options;
                      t.legendItem.attr({
                        text: e.labelFormat
                          ? l(e.labelFormat, t, this.chart)
                          : e.labelFormatter.call(t),
                      });
                    }),
                    (e.prototype.renderItem = function (t) {
                      var e = this.chart,
                        i = e.renderer,
                        s = this.options,
                        o = this.symbolWidth,
                        n = s.symbolPadding,
                        r = this.itemStyle,
                        a = this.itemHiddenStyle,
                        h =
                          "horizontal" === s.layout ? p(s.itemDistance, 20) : 0,
                        l = !s.rtl,
                        c = t.legendItem,
                        u = !t.series,
                        f = !u && t.series.drawLegendSymbol ? t.series : t,
                        g = f.options;
                      h =
                        o +
                        n +
                        h +
                        ((g = this.createCheckboxForItem && g && g.showCheckbox)
                          ? 20
                          : 0);
                      var m = s.useHTML,
                        y = t.options.className;
                      c ||
                        ((t.legendGroup = i
                          .g("legend-item")
                          .addClass(
                            "highcharts-" +
                              f.type +
                              "-series highcharts-color-" +
                              t.colorIndex +
                              (y ? " " + y : "") +
                              (u ? " highcharts-series-" + t.index : ""),
                          )
                          .attr({ zIndex: 1 })
                          .add(this.scrollGroup)),
                        (t.legendItem = c =
                          i.text("", l ? o + n : -n, this.baseline || 0, m)),
                        e.styledMode || c.css(d(t.visible ? r : a)),
                        c
                          .attr({ align: l ? "left" : "right", zIndex: 2 })
                          .add(t.legendGroup),
                        this.baseline ||
                          ((this.fontMetrics = i.fontMetrics(
                            e.styledMode ? 12 : r.fontSize,
                            c,
                          )),
                          (this.baseline =
                            this.fontMetrics.f + 3 + this.itemMarginTop),
                          c.attr("y", this.baseline)),
                        (this.symbolHeight =
                          s.symbolHeight || this.fontMetrics.f),
                        f.drawLegendSymbol(this, t),
                        this.setItemEvents && this.setItemEvents(t, c, m)),
                        g &&
                          !t.checkbox &&
                          this.createCheckboxForItem &&
                          this.createCheckboxForItem(t),
                        this.colorizeItem(t, t.visible),
                        (!e.styledMode && r.width) ||
                          c.css({
                            width:
                              (s.itemWidth ||
                                this.widthOption ||
                                e.spacingBox.width) -
                              h +
                              "px",
                          }),
                        this.setText(t),
                        (e = c.getBBox()),
                        (t.itemWidth = t.checkboxOffset =
                          s.itemWidth || t.legendItemWidth || e.width + h),
                        (this.maxItemWidth = Math.max(
                          this.maxItemWidth,
                          t.itemWidth,
                        )),
                        (this.totalItemWidth += t.itemWidth),
                        (this.itemHeight = t.itemHeight =
                          Math.round(
                            t.legendItemHeight || e.height || this.symbolHeight,
                          ));
                    }),
                    (e.prototype.layoutItem = function (t) {
                      var e = this.options,
                        i = this.padding,
                        s = "horizontal" === e.layout,
                        o = t.itemHeight,
                        n = this.itemMarginBottom,
                        r = this.itemMarginTop,
                        a = s ? p(e.itemDistance, 20) : 0,
                        h = this.maxLegendWidth;
                      (e =
                        e.alignColumns && this.totalItemWidth > h
                          ? this.maxItemWidth
                          : t.itemWidth),
                        s &&
                          this.itemX - i + e > h &&
                          ((this.itemX = i),
                          this.lastLineHeight &&
                            (this.itemY += r + this.lastLineHeight + n),
                          (this.lastLineHeight = 0)),
                        (this.lastItemY = r + this.itemY + n),
                        (this.lastLineHeight = Math.max(
                          o,
                          this.lastLineHeight,
                        )),
                        (t._legendItemPos = [this.itemX, this.itemY]),
                        s
                          ? (this.itemX += e)
                          : ((this.itemY += r + o + n),
                            (this.lastLineHeight = o)),
                        (this.offsetWidth =
                          this.widthOption ||
                          Math.max(
                            (s ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i,
                            this.offsetWidth,
                          ));
                    }),
                    (e.prototype.getAllItems = function () {
                      var t = [];
                      return (
                        this.chart.series.forEach(function (e) {
                          var i = e && e.options;
                          e &&
                            p(i.showInLegend, !n(i.linkedTo) && void 0, !0) &&
                            (t = t.concat(
                              e.legendItems ||
                                ("point" === i.legendType ? e.data : e),
                            ));
                        }),
                        h(this, "afterGetAllItems", { allItems: t }),
                        t
                      );
                    }),
                    (e.prototype.getAlignment = function () {
                      var t = this.options;
                      return this.proximate
                        ? t.align.charAt(0) + "tv"
                        : t.floating
                          ? ""
                          : t.align.charAt(0) +
                            t.verticalAlign.charAt(0) +
                            t.layout.charAt(0);
                    }),
                    (e.prototype.adjustMargins = function (t, e) {
                      var i = this.chart,
                        s = this.options,
                        o = this.getAlignment();
                      o &&
                        [
                          /(lth|ct|rth)/,
                          /(rtv|rm|rbv)/,
                          /(rbh|cb|lbh)/,
                          /(lbv|lm|ltv)/,
                        ].forEach(function (r, a) {
                          r.test(o) &&
                            !n(t[a]) &&
                            (i[v[a]] = Math.max(
                              i[v[a]],
                              i.legend[
                                (a + 1) % 2 ? "legendHeight" : "legendWidth"
                              ] +
                                [1, -1, -1, 1][a] * s[a % 2 ? "x" : "y"] +
                                p(s.margin, 12) +
                                e[a] +
                                (i.titleOffset[a] || 0),
                            ));
                        });
                    }),
                    (e.prototype.proximatePositions = function () {
                      var e = this.chart,
                        i = [],
                        s = "left" === this.options.align;
                      this.allItems.forEach(function (t) {
                        var o = s;
                        if (t.yAxis && t.points) {
                          t.xAxis.options.reversed && (o = !o);
                          var n = a(
                            o ? t.points : t.points.slice(0).reverse(),
                            function (t) {
                              return c(t.plotY);
                            },
                          );
                          o =
                            this.itemMarginTop +
                            t.legendItem.getBBox().height +
                            this.itemMarginBottom;
                          var r = t.yAxis.top - e.plotTop;
                          t.visible
                            ? ((n = n ? n.plotY : t.yAxis.height),
                              (n += r - 0.3 * o))
                            : (n = r + t.yAxis.height),
                            i.push({ target: n, size: o, item: t });
                        }
                      }, this),
                        t.distribute(i, e.plotHeight),
                        i.forEach(function (t) {
                          t.item._legendItemPos[1] =
                            e.plotTop - e.spacing[0] + t.pos;
                        });
                    }),
                    (e.prototype.render = function () {
                      var t = this.chart,
                        e = t.renderer,
                        i = this.group,
                        s = this.box,
                        o = this.options,
                        n = this.padding;
                      (this.itemX = n),
                        (this.itemY = this.initialItemY),
                        (this.lastItemY = this.offsetWidth = 0),
                        (this.widthOption = u(o.width, t.spacingBox.width - n));
                      var r = t.spacingBox.width - 2 * n - o.x;
                      -1 <
                        ["rm", "lm"].indexOf(
                          this.getAlignment().substring(0, 2),
                        ) && (r /= 2),
                        (this.maxLegendWidth = this.widthOption || r),
                        i ||
                          ((this.group = i =
                            e.g("legend").attr({ zIndex: 7 }).add()),
                          (this.contentGroup = e
                            .g()
                            .attr({ zIndex: 1 })
                            .add(i)),
                          (this.scrollGroup = e.g().add(this.contentGroup))),
                        this.renderTitle();
                      var a = this.getAllItems();
                      g(a, function (t, e) {
                        return (
                          ((t.options && t.options.legendIndex) || 0) -
                          ((e.options && e.options.legendIndex) || 0)
                        );
                      }),
                        o.reversed && a.reverse(),
                        (this.allItems = a),
                        (this.display = r = !!a.length),
                        (this.itemHeight =
                          this.totalItemWidth =
                          this.maxItemWidth =
                          this.lastLineHeight =
                            0),
                        a.forEach(this.renderItem, this),
                        a.forEach(this.layoutItem, this),
                        (a = (this.widthOption || this.offsetWidth) + n);
                      var l =
                        this.lastItemY + this.lastLineHeight + this.titleHeight;
                      (l = this.handleOverflow(l)),
                        (l += n),
                        s ||
                          ((this.box = s =
                            e
                              .rect()
                              .addClass("highcharts-legend-box")
                              .attr({ r: o.borderRadius })
                              .add(i)),
                          (s.isNew = !0)),
                        t.styledMode ||
                          s
                            .attr({
                              stroke: o.borderColor,
                              "stroke-width": o.borderWidth || 0,
                              fill: o.backgroundColor || "none",
                            })
                            .shadow(o.shadow),
                        0 < a &&
                          0 < l &&
                          (s[s.isNew ? "attr" : "animate"](
                            s.crisp.call(
                              {},
                              { x: 0, y: 0, width: a, height: l },
                              s.strokeWidth(),
                            ),
                          ),
                          (s.isNew = !1)),
                        s[r ? "show" : "hide"](),
                        t.styledMode &&
                          "none" === i.getStyle("display") &&
                          (a = l = 0),
                        (this.legendWidth = a),
                        (this.legendHeight = l),
                        r && this.align(),
                        this.proximate || this.positionItems(),
                        h(this, "afterRender");
                    }),
                    (e.prototype.align = function (t) {
                      void 0 === t && (t = this.chart.spacingBox);
                      var e = this.chart,
                        i = this.options,
                        s = t.y;
                      /(lth|ct|rth)/.test(this.getAlignment()) &&
                      0 < e.titleOffset[0]
                        ? (s += e.titleOffset[0])
                        : /(lbh|cb|rbh)/.test(this.getAlignment()) &&
                          0 < e.titleOffset[2] &&
                          (s -= e.titleOffset[2]),
                        s !== t.y && (t = d(t, { y: s })),
                        this.group.align(
                          d(i, {
                            width: this.legendWidth,
                            height: this.legendHeight,
                            verticalAlign: this.proximate
                              ? "top"
                              : i.verticalAlign,
                          }),
                          !0,
                          t,
                        );
                    }),
                    (e.prototype.handleOverflow = function (t) {
                      var e = this,
                        i = this.chart,
                        s = i.renderer,
                        o = this.options,
                        n = o.y,
                        r = this.padding;
                      n =
                        i.spacingBox.height +
                        ("top" === o.verticalAlign ? -n : n) -
                        r;
                      var a,
                        h,
                        l = o.maxHeight,
                        c = this.clipRect,
                        d = o.navigation,
                        u = p(d.animation, !0),
                        f = d.arrowSize || 12,
                        g = this.nav,
                        m = this.pages,
                        y = this.allItems,
                        v = function (t) {
                          "number" === typeof t
                            ? c.attr({ height: t })
                            : c &&
                              ((e.clipRect = c.destroy()),
                              e.contentGroup.clip()),
                            e.contentGroup.div &&
                              (e.contentGroup.div.style.clip = t
                                ? "rect(" + r + "px,9999px," + (r + t) + "px,0)"
                                : "auto");
                        },
                        x = function (t) {
                          return (
                            (e[t] = s
                              .circle(0, 0, 1.3 * f)
                              .translate(f / 2, f / 2)
                              .add(g)),
                            i.styledMode ||
                              e[t].attr("fill", "rgba(0,0,0,0.0001)"),
                            e[t]
                          );
                        };
                      return (
                        "horizontal" !== o.layout ||
                          "middle" === o.verticalAlign ||
                          o.floating ||
                          (n /= 2),
                        l && (n = Math.min(n, l)),
                        (m.length = 0),
                        t > n && !1 !== d.enabled
                          ? ((this.clipHeight = a =
                              Math.max(n - 20 - this.titleHeight - r, 0)),
                            (this.currentPage = p(this.currentPage, 1)),
                            (this.fullHeight = t),
                            y.forEach(function (t, e) {
                              var i = t._legendItemPos[1],
                                s = Math.round(t.legendItem.getBBox().height),
                                o = m.length;
                              (!o ||
                                (i - m[o - 1] > a && (h || i) !== m[o - 1])) &&
                                (m.push(h || i), o++),
                                (t.pageIx = o - 1),
                                h && (y[e - 1].pageIx = o - 1),
                                e === y.length - 1 &&
                                  i + s - m[o - 1] > a &&
                                  i !== h &&
                                  (m.push(i), (t.pageIx = o)),
                                i !== h && (h = i);
                            }),
                            c ||
                              ((c = e.clipRect = s.clipRect(0, r, 9999, 0)),
                              e.contentGroup.clip(c)),
                            v(a),
                            g ||
                              ((this.nav = g =
                                s.g().attr({ zIndex: 1 }).add(this.group)),
                              (this.up = s
                                .symbol("triangle", 0, 0, f, f)
                                .add(g)),
                              x("upTracker").on("click", function () {
                                e.scroll(-1, u);
                              }),
                              (this.pager = s
                                .text("", 15, 10)
                                .addClass("highcharts-legend-navigation")),
                              i.styledMode || this.pager.css(d.style),
                              this.pager.add(g),
                              (this.down = s
                                .symbol("triangle-down", 0, 0, f, f)
                                .add(g)),
                              x("downTracker").on("click", function () {
                                e.scroll(1, u);
                              })),
                            e.scroll(0),
                            (t = n))
                          : g &&
                            (v(),
                            (this.nav = g.destroy()),
                            this.scrollGroup.attr({ translateY: 1 }),
                            (this.clipHeight = 0)),
                        t
                      );
                    }),
                    (e.prototype.scroll = function (t, e) {
                      var i = this,
                        o = this.chart,
                        n = this.pages,
                        r = n.length,
                        a = this.currentPage + t;
                      t = this.clipHeight;
                      var l = this.options.navigation,
                        c = this.pager,
                        d = this.padding;
                      a > r && (a = r),
                        0 < a &&
                          ("undefined" !== typeof e && f(e, o),
                          this.nav.attr({
                            translateX: d,
                            translateY: t + this.padding + 7 + this.titleHeight,
                            visibility: "visible",
                          }),
                          [this.up, this.upTracker].forEach(function (t) {
                            t.attr({
                              class:
                                1 === a
                                  ? "highcharts-legend-nav-inactive"
                                  : "highcharts-legend-nav-active",
                            });
                          }),
                          c.attr({ text: a + "/" + r }),
                          [this.down, this.downTracker].forEach(function (t) {
                            t.attr({
                              x: 18 + this.pager.getBBox().width,
                              class:
                                a === r
                                  ? "highcharts-legend-nav-inactive"
                                  : "highcharts-legend-nav-active",
                            });
                          }, this),
                          o.styledMode ||
                            (this.up.attr({
                              fill: 1 === a ? l.inactiveColor : l.activeColor,
                            }),
                            this.upTracker.css({
                              cursor: 1 === a ? "default" : "pointer",
                            }),
                            this.down.attr({
                              fill: a === r ? l.inactiveColor : l.activeColor,
                            }),
                            this.downTracker.css({
                              cursor: a === r ? "default" : "pointer",
                            })),
                          (this.scrollOffset = -n[a - 1] + this.initialItemY),
                          this.scrollGroup.animate({
                            translateY: this.scrollOffset,
                          }),
                          (this.currentPage = a),
                          this.positionCheckboxes(),
                          (e = s(p(e, o.renderer.globalAnimation, !0))),
                          m(function () {
                            h(i, "afterScroll", { currentPage: a });
                          }, e.duration || 0));
                    }),
                    e
                  );
                })();
              return (
                (/Trident\/7\.0/.test(x.navigator && x.navigator.userAgent) ||
                  y) &&
                  e(b.prototype, "positionItem", function (t, e) {
                    var i = this,
                      s = function () {
                        e._legendItemPos && t.call(i, e);
                      };
                    s(), i.bubbleLegend || setTimeout(s);
                  }),
                (t.Legend = b),
                t.Legend
              );
            },
          ),
          e(
            i,
            "parts/Chart.js",
            [
              i["parts/Globals.js"],
              i["parts/Legend.js"],
              i["parts/MSPointer.js"],
              i["parts/Pointer.js"],
              i["parts/Time.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s, o, n) {
              var r = n.addEvent,
                a = n.animate,
                h = n.animObject,
                l = n.attr,
                c = n.createElement,
                d = n.css,
                p = n.defined,
                u = n.discardElement,
                f = n.erase,
                g = n.error,
                m = n.extend,
                y = n.find,
                v = n.fireEvent,
                x = n.getStyle,
                b = n.isArray,
                k = n.isFunction,
                M = n.isNumber,
                w = n.isObject,
                S = n.isString,
                T = n.merge,
                A = n.numberFormat,
                P = n.objectEach,
                L = n.pick,
                C = n.pInt,
                O = n.relativeLength,
                E = n.removeEvent,
                D = n.setAnimation,
                I = n.splat,
                z = n.syncTimeout,
                B = n.uniqueKey,
                R = t.doc,
                N = t.Axis,
                W = t.defaultOptions,
                j = t.charts,
                G = t.marginNames,
                X = t.seriesTypes,
                H = t.win,
                Y = (t.Chart = function () {
                  this.getArgs.apply(this, arguments);
                });
              (t.chart = function (t, e, i) {
                return new Y(t, e, i);
              }),
                m(Y.prototype, {
                  callbacks: [],
                  getArgs: function () {
                    var t = [].slice.call(arguments);
                    (S(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()),
                      this.init(t[0], t[1]);
                  },
                  init: function (e, i) {
                    var s,
                      n = e.series,
                      a = e.plotOptions || {};
                    v(this, "init", { args: arguments }, function () {
                      e.series = null;
                      var h = (s = T(W, e)).chart || {};
                      P(s.plotOptions, function (t, e) {
                        w(t) &&
                          (t.tooltip = (a[e] && T(a[e].tooltip)) || void 0);
                      }),
                        (s.tooltip.userOptions =
                          (e.chart &&
                            e.chart.forExport &&
                            e.tooltip.userOptions) ||
                          e.tooltip),
                        (s.series = e.series = n),
                        (this.userOptions = e);
                      var l = h.events;
                      (this.margin = []),
                        (this.spacing = []),
                        (this.bounds = { h: {}, v: {} }),
                        (this.labelCollectors = []),
                        (this.callback = i),
                        (this.isResizing = 0),
                        (this.options = s),
                        (this.axes = []),
                        (this.series = []),
                        (this.time =
                          e.time && Object.keys(e.time).length
                            ? new o(e.time)
                            : t.time),
                        (this.numberFormatter = h.numberFormatter || A),
                        (this.styledMode = h.styledMode),
                        (this.hasCartesianSeries = h.showAxes);
                      var c = this;
                      (c.index = j.length),
                        j.push(c),
                        t.chartCount++,
                        l &&
                          P(l, function (t, e) {
                            k(t) && r(c, e, t);
                          }),
                        (c.xAxis = []),
                        (c.yAxis = []),
                        (c.pointCount = c.colorCounter = c.symbolCounter = 0),
                        v(c, "afterInit"),
                        c.firstRender();
                    });
                  },
                  initSeries: function (t) {
                    var e = this.options.chart;
                    e = t.type || e.type || e.defaultSeriesType;
                    var i = X[e];
                    return (
                      i || g(17, !0, this, { missingModuleFor: e }),
                      (e = new i()).init(this, t),
                      e
                    );
                  },
                  setSeriesData: function () {
                    this.getSeriesOrderByLinks().forEach(function (t) {
                      t.points ||
                        t.data ||
                        !t.enabledDataSorting ||
                        t.setData(t.options.data, !1);
                    });
                  },
                  getSeriesOrderByLinks: function () {
                    return this.series.concat().sort(function (t, e) {
                      return t.linkedSeries.length || e.linkedSeries.length
                        ? e.linkedSeries.length - t.linkedSeries.length
                        : 0;
                    });
                  },
                  orderSeries: function (t) {
                    var e = this.series;
                    for (t = t || 0; t < e.length; t++)
                      e[t] && ((e[t].index = t), (e[t].name = e[t].getName()));
                  },
                  isInsidePlot: function (t, e, i) {
                    var s = i ? e : t;
                    return (
                      (s = {
                        x: s,
                        y: (t = i ? t : e),
                        isInsidePlot:
                          0 <= s &&
                          s <= this.plotWidth &&
                          0 <= t &&
                          t <= this.plotHeight,
                      }),
                      v(this, "afterIsInsidePlot", s),
                      s.isInsidePlot
                    );
                  },
                  redraw: function (t) {
                    v(this, "beforeRedraw");
                    var e = this.axes,
                      i = this.series,
                      s = this.pointer,
                      o = this.legend,
                      n = this.userOptions.legend,
                      r = this.isDirtyLegend,
                      a = this.hasCartesianSeries,
                      h = this.isDirtyBox,
                      l = this.renderer,
                      c = l.isHidden(),
                      d = [];
                    for (
                      this.setResponsive && this.setResponsive(!1),
                        D(!!this.hasRendered && t, this),
                        c && this.temporaryDisplay(),
                        this.layOutTitles(),
                        t = i.length;
                      t--;

                    ) {
                      var p = i[t];
                      if (p.options.stacking) {
                        var u = !0;
                        if (p.isDirty) {
                          var f = !0;
                          break;
                        }
                      }
                    }
                    if (f)
                      for (t = i.length; t--; )
                        (p = i[t]).options.stacking && (p.isDirty = !0);
                    i.forEach(function (t) {
                      t.isDirty &&
                        ("point" === t.options.legendType
                          ? (t.updateTotals && t.updateTotals(), (r = !0))
                          : n &&
                            (n.labelFormatter || n.labelFormat) &&
                            (r = !0)),
                        t.isDirtyData && v(t, "updatedData");
                    }),
                      r &&
                        o &&
                        o.options.enabled &&
                        (o.render(), (this.isDirtyLegend = !1)),
                      u && this.getStacks(),
                      a &&
                        e.forEach(function (t) {
                          t.updateNames(), t.setScale();
                        }),
                      this.getMargins(),
                      a &&
                        (e.forEach(function (t) {
                          t.isDirty && (h = !0);
                        }),
                        e.forEach(function (t) {
                          var e = t.min + "," + t.max;
                          t.extKey !== e &&
                            ((t.extKey = e),
                            d.push(function () {
                              v(
                                t,
                                "afterSetExtremes",
                                m(t.eventArgs, t.getExtremes()),
                              ),
                                delete t.eventArgs;
                            })),
                            (h || u) && t.redraw();
                        })),
                      h && this.drawChartBox(),
                      v(this, "predraw"),
                      i.forEach(function (t) {
                        (h || t.isDirty) && t.visible && t.redraw(),
                          (t.isDirtyData = !1);
                      }),
                      s && s.reset(!0),
                      l.draw(),
                      v(this, "redraw"),
                      v(this, "render"),
                      c && this.temporaryDisplay(!0),
                      d.forEach(function (t) {
                        t.call();
                      });
                  },
                  get: function (t) {
                    function e(e) {
                      return e.id === t || (e.options && e.options.id === t);
                    }
                    var i,
                      s = this.series,
                      o = y(this.axes, e) || y(this.series, e);
                    for (i = 0; !o && i < s.length; i++)
                      o = y(s[i].points || [], e);
                    return o;
                  },
                  getAxes: function () {
                    var t = this,
                      e = this.options,
                      i = (e.xAxis = I(e.xAxis || {}));
                    (e = e.yAxis = I(e.yAxis || {})),
                      v(this, "getAxes"),
                      i.forEach(function (t, e) {
                        (t.index = e), (t.isX = !0);
                      }),
                      e.forEach(function (t, e) {
                        t.index = e;
                      }),
                      i.concat(e).forEach(function (e) {
                        new N(t, e);
                      }),
                      v(this, "afterGetAxes");
                  },
                  getSelectedPoints: function () {
                    var t = [];
                    return (
                      this.series.forEach(function (e) {
                        t = t.concat(
                          e.getPointsCollection().filter(function (t) {
                            return L(t.selectedStaging, t.selected);
                          }),
                        );
                      }),
                      t
                    );
                  },
                  getSelectedSeries: function () {
                    return this.series.filter(function (t) {
                      return t.selected;
                    });
                  },
                  setTitle: function (t, e, i) {
                    this.applyDescription("title", t),
                      this.applyDescription("subtitle", e),
                      this.applyDescription("caption", void 0),
                      this.layOutTitles(i);
                  },
                  applyDescription: function (t, e) {
                    var i = this,
                      s =
                        "title" === t
                          ? {
                              color: "#333333",
                              fontSize: this.options.isStock ? "16px" : "18px",
                            }
                          : { color: "#666666" };
                    s = this.options[t] = T(
                      !this.styledMode && { style: s },
                      this.options[t],
                      e,
                    );
                    var o = this[t];
                    o && e && (this[t] = o = o.destroy()),
                      s &&
                        !o &&
                        (((o = this.renderer
                          .text(s.text, 0, 0, s.useHTML)
                          .attr({
                            align: s.align,
                            class: "highcharts-" + t,
                            zIndex: s.zIndex || 4,
                          })
                          .add()).update = function (e) {
                          i[
                            {
                              title: "setTitle",
                              subtitle: "setSubtitle",
                              caption: "setCaption",
                            }[t]
                          ](e);
                        }),
                        this.styledMode || o.css(s.style),
                        (this[t] = o));
                  },
                  layOutTitles: function (t) {
                    var e = [0, 0, 0],
                      i = this.renderer,
                      s = this.spacingBox;
                    ["title", "subtitle", "caption"].forEach(function (t) {
                      var o = this[t],
                        n = this.options[t],
                        r = n.verticalAlign || "top";
                      if (
                        ((t = "title" === t ? -3 : "top" === r ? e[0] + 2 : 0),
                        o)
                      ) {
                        if (!this.styledMode) var a = n.style.fontSize;
                        (a = i.fontMetrics(a, o).b),
                          o.css({
                            width:
                              (n.width || s.width + (n.widthAdjust || 0)) +
                              "px",
                          });
                        var h = Math.round(o.getBBox(n.useHTML).height);
                        o.align(
                          m({ y: "bottom" === r ? a : t + a, height: h }, n),
                          !1,
                          "spacingBox",
                        ),
                          n.floating ||
                            ("top" === r
                              ? (e[0] = Math.ceil(e[0] + h))
                              : "bottom" === r && (e[2] = Math.ceil(e[2] + h)));
                      }
                    }, this),
                      e[0] &&
                        "top" === (this.options.title.verticalAlign || "top") &&
                        (e[0] += this.options.title.margin),
                      e[2] &&
                        "bottom" === this.options.caption.verticalAlign &&
                        (e[2] += this.options.caption.margin);
                    var o =
                      !this.titleOffset ||
                      this.titleOffset.join(",") !== e.join(",");
                    (this.titleOffset = e),
                      v(this, "afterLayOutTitles"),
                      !this.isDirtyBox &&
                        o &&
                        ((this.isDirtyBox = this.isDirtyLegend = o),
                        this.hasRendered &&
                          L(t, !0) &&
                          this.isDirtyBox &&
                          this.redraw());
                  },
                  getChartSize: function () {
                    var t = this.options.chart,
                      e = t.width;
                    t = t.height;
                    var i = this.renderTo;
                    p(e) || (this.containerWidth = x(i, "width")),
                      p(t) || (this.containerHeight = x(i, "height")),
                      (this.chartWidth = Math.max(
                        0,
                        e || this.containerWidth || 600,
                      )),
                      (this.chartHeight = Math.max(
                        0,
                        O(t, this.chartWidth) ||
                          (1 < this.containerHeight
                            ? this.containerHeight
                            : 400),
                      ));
                  },
                  temporaryDisplay: function (t) {
                    var e = this.renderTo;
                    if (t)
                      for (; e && e.style; )
                        e.hcOrigStyle &&
                          (d(e, e.hcOrigStyle), delete e.hcOrigStyle),
                          e.hcOrigDetached &&
                            (R.body.removeChild(e), (e.hcOrigDetached = !1)),
                          (e = e.parentNode);
                    else
                      for (
                        ;
                        e &&
                        e.style &&
                        (R.body.contains(e) ||
                          e.parentNode ||
                          ((e.hcOrigDetached = !0), R.body.appendChild(e)),
                        ("none" === x(e, "display", !1) || e.hcOricDetached) &&
                          ((e.hcOrigStyle = {
                            display: e.style.display,
                            height: e.style.height,
                            overflow: e.style.overflow,
                          }),
                          (t = { display: "block", overflow: "hidden" }),
                          e !== this.renderTo && (t.height = 0),
                          d(e, t),
                          e.offsetWidth ||
                            e.style.setProperty(
                              "display",
                              "block",
                              "important",
                            )),
                        (e = e.parentNode) !== R.body);

                      );
                  },
                  setClassName: function (t) {
                    this.container.className =
                      "highcharts-container " + (t || "");
                  },
                  getContainer: function () {
                    var e,
                      i,
                      s = this.options,
                      o = s.chart,
                      n = this.renderTo,
                      r = B();
                    n || (this.renderTo = n = o.renderTo),
                      S(n) && (this.renderTo = n = R.getElementById(n)),
                      n || g(13, !0, this);
                    var a = C(l(n, "data-highcharts-chart"));
                    M(a) && j[a] && j[a].hasRendered && j[a].destroy(),
                      l(n, "data-highcharts-chart", this.index),
                      (n.innerHTML = ""),
                      o.skipClone || n.offsetWidth || this.temporaryDisplay(),
                      this.getChartSize(),
                      (a = this.chartWidth);
                    var h = this.chartHeight;
                    if (
                      (d(n, { overflow: "hidden" }),
                      this.styledMode ||
                        (e = m(
                          {
                            position: "relative",
                            overflow: "hidden",
                            width: a + "px",
                            height: h + "px",
                            textAlign: "left",
                            lineHeight: "normal",
                            zIndex: 0,
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                          },
                          o.style,
                        )),
                      (this.container = n = c("div", { id: r }, e, n)),
                      (this._cursor = n.style.cursor),
                      (this.renderer = new (t[o.renderer] || t.Renderer)(
                        n,
                        a,
                        h,
                        null,
                        o.forExport,
                        s.exporting && s.exporting.allowHTML,
                        this.styledMode,
                      )),
                      D(void 0, this),
                      this.setClassName(o.className),
                      this.styledMode)
                    )
                      for (i in s.defs) this.renderer.definition(s.defs[i]);
                    else this.renderer.setStyle(o.style);
                    (this.renderer.chartIndex = this.index),
                      v(this, "afterGetContainer");
                  },
                  getMargins: function (t) {
                    var e = this.spacing,
                      i = this.margin,
                      s = this.titleOffset;
                    this.resetMargins(),
                      s[0] &&
                        !p(i[0]) &&
                        (this.plotTop = Math.max(this.plotTop, s[0] + e[0])),
                      s[2] &&
                        !p(i[2]) &&
                        (this.marginBottom = Math.max(
                          this.marginBottom,
                          s[2] + e[2],
                        )),
                      this.legend &&
                        this.legend.display &&
                        this.legend.adjustMargins(i, e),
                      v(this, "getMargins"),
                      t || this.getAxisMargins();
                  },
                  getAxisMargins: function () {
                    var t = this,
                      e = (t.axisOffset = [0, 0, 0, 0]),
                      i = t.colorAxis,
                      s = t.margin,
                      o = function (t) {
                        t.forEach(function (t) {
                          t.visible && t.getOffset();
                        });
                      };
                    t.hasCartesianSeries ? o(t.axes) : i && i.length && o(i),
                      G.forEach(function (i, o) {
                        p(s[o]) || (t[i] += e[o]);
                      }),
                      t.setChartSize();
                  },
                  reflow: function (t) {
                    var e = this,
                      i = e.options.chart,
                      s = e.renderTo,
                      o = p(i.width) && p(i.height),
                      r = i.width || x(s, "width");
                    (i = i.height || x(s, "height")),
                      (s = t ? t.target : H),
                      o ||
                        e.isPrinting ||
                        !r ||
                        !i ||
                        (s !== H && s !== R) ||
                        ((r === e.containerWidth && i === e.containerHeight) ||
                          (n.clearTimeout(e.reflowTimeout),
                          (e.reflowTimeout = z(
                            function () {
                              e.container && e.setSize(void 0, void 0, !1);
                            },
                            t ? 100 : 0,
                          ))),
                        (e.containerWidth = r),
                        (e.containerHeight = i));
                  },
                  setReflow: function (t) {
                    var e = this;
                    !1 === t || this.unbindReflow
                      ? !1 === t &&
                        this.unbindReflow &&
                        (this.unbindReflow = this.unbindReflow())
                      : ((this.unbindReflow = r(H, "resize", function (t) {
                          e.options && e.reflow(t);
                        })),
                        r(this, "destroy", this.unbindReflow));
                  },
                  setSize: function (t, e, i) {
                    var s = this,
                      o = s.renderer;
                    (s.isResizing += 1),
                      D(i, s),
                      (i = o.globalAnimation),
                      (s.oldChartHeight = s.chartHeight),
                      (s.oldChartWidth = s.chartWidth),
                      "undefined" !== typeof t && (s.options.chart.width = t),
                      "undefined" !== typeof e && (s.options.chart.height = e),
                      s.getChartSize(),
                      s.styledMode ||
                        (i ? a : d)(
                          s.container,
                          {
                            width: s.chartWidth + "px",
                            height: s.chartHeight + "px",
                          },
                          i,
                        ),
                      s.setChartSize(!0),
                      o.setSize(s.chartWidth, s.chartHeight, i),
                      s.axes.forEach(function (t) {
                        (t.isDirty = !0), t.setScale();
                      }),
                      (s.isDirtyLegend = !0),
                      (s.isDirtyBox = !0),
                      s.layOutTitles(),
                      s.getMargins(),
                      s.redraw(i),
                      (s.oldChartHeight = null),
                      v(s, "resize"),
                      z(
                        function () {
                          s &&
                            v(s, "endResize", null, function () {
                              --s.isResizing;
                            });
                        },
                        h(i).duration || 0,
                      );
                  },
                  setChartSize: function (t) {
                    var e,
                      i,
                      s,
                      o,
                      n = this.inverted,
                      r = this.renderer,
                      a = this.chartWidth,
                      h = this.chartHeight,
                      l = this.options.chart,
                      c = this.spacing,
                      d = this.clipOffset;
                    (this.plotLeft = e = Math.round(this.plotLeft)),
                      (this.plotTop = i = Math.round(this.plotTop)),
                      (this.plotWidth = s =
                        Math.max(0, Math.round(a - e - this.marginRight))),
                      (this.plotHeight = o =
                        Math.max(0, Math.round(h - i - this.marginBottom))),
                      (this.plotSizeX = n ? o : s),
                      (this.plotSizeY = n ? s : o),
                      (this.plotBorderWidth = l.plotBorderWidth || 0),
                      (this.spacingBox = r.spacingBox =
                        {
                          x: c[3],
                          y: c[0],
                          width: a - c[3] - c[1],
                          height: h - c[0] - c[2],
                        }),
                      (this.plotBox = r.plotBox =
                        { x: e, y: i, width: s, height: o }),
                      (a = 2 * Math.floor(this.plotBorderWidth / 2)),
                      (n = Math.ceil(Math.max(a, d[3]) / 2)),
                      (r = Math.ceil(Math.max(a, d[0]) / 2)),
                      (this.clipBox = {
                        x: n,
                        y: r,
                        width: Math.floor(
                          this.plotSizeX - Math.max(a, d[1]) / 2 - n,
                        ),
                        height: Math.max(
                          0,
                          Math.floor(
                            this.plotSizeY - Math.max(a, d[2]) / 2 - r,
                          ),
                        ),
                      }),
                      t ||
                        this.axes.forEach(function (t) {
                          t.setAxisSize(), t.setAxisTranslation();
                        }),
                      v(this, "afterSetChartSize", { skipAxes: t });
                  },
                  resetMargins: function () {
                    v(this, "resetMargins");
                    var t = this,
                      e = t.options.chart;
                    ["margin", "spacing"].forEach(function (i) {
                      var s = e[i],
                        o = w(s) ? s : [s, s, s, s];
                      ["Top", "Right", "Bottom", "Left"].forEach(
                        function (s, n) {
                          t[i][n] = L(e[i + s], o[n]);
                        },
                      );
                    }),
                      G.forEach(function (e, i) {
                        t[e] = L(t.margin[i], t.spacing[i]);
                      }),
                      (t.axisOffset = [0, 0, 0, 0]),
                      (t.clipOffset = [0, 0, 0, 0]);
                  },
                  drawChartBox: function () {
                    var t,
                      e = this.options.chart,
                      i = this.renderer,
                      s = this.chartWidth,
                      o = this.chartHeight,
                      n = this.chartBackground,
                      r = this.plotBackground,
                      a = this.plotBorder,
                      h = this.styledMode,
                      l = this.plotBGImage,
                      c = e.backgroundColor,
                      d = e.plotBackgroundColor,
                      p = e.plotBackgroundImage,
                      u = this.plotLeft,
                      f = this.plotTop,
                      g = this.plotWidth,
                      m = this.plotHeight,
                      y = this.plotBox,
                      x = this.clipRect,
                      b = this.clipBox,
                      k = "animate";
                    if (
                      (n ||
                        ((this.chartBackground = n =
                          i.rect().addClass("highcharts-background").add()),
                        (k = "attr")),
                      h)
                    )
                      var M = (t = n.strokeWidth());
                    else
                      (t = (M = e.borderWidth || 0) + (e.shadow ? 8 : 0)),
                        (c = { fill: c || "none" }),
                        (M || n["stroke-width"]) &&
                          ((c.stroke = e.borderColor), (c["stroke-width"] = M)),
                        n.attr(c).shadow(e.shadow);
                    n[k]({
                      x: t / 2,
                      y: t / 2,
                      width: s - t - (M % 2),
                      height: o - t - (M % 2),
                      r: e.borderRadius,
                    }),
                      (k = "animate"),
                      r ||
                        ((k = "attr"),
                        (this.plotBackground = r =
                          i
                            .rect()
                            .addClass("highcharts-plot-background")
                            .add())),
                      r[k](y),
                      h ||
                        (r.attr({ fill: d || "none" }).shadow(e.plotShadow),
                        p &&
                          (l
                            ? (p !== l.attr("href") && l.attr("href", p),
                              l.animate(y))
                            : (this.plotBGImage = i
                                .image(p, u, f, g, m)
                                .add()))),
                      x
                        ? x.animate({ width: b.width, height: b.height })
                        : (this.clipRect = i.clipRect(b)),
                      (k = "animate"),
                      a ||
                        ((k = "attr"),
                        (this.plotBorder = a =
                          i
                            .rect()
                            .addClass("highcharts-plot-border")
                            .attr({ zIndex: 1 })
                            .add())),
                      h ||
                        a.attr({
                          stroke: e.plotBorderColor,
                          "stroke-width": e.plotBorderWidth || 0,
                          fill: "none",
                        }),
                      a[k](
                        a.crisp(
                          { x: u, y: f, width: g, height: m },
                          -a.strokeWidth(),
                        ),
                      ),
                      (this.isDirtyBox = !1),
                      v(this, "afterDrawChartBox");
                  },
                  propFromSeries: function () {
                    var t,
                      e,
                      i,
                      s = this,
                      o = s.options.chart,
                      n = s.options.series;
                    ["inverted", "angular", "polar"].forEach(function (r) {
                      for (
                        t = X[o.type || o.defaultSeriesType],
                          i = o[r] || (t && t.prototype[r]),
                          e = n && n.length;
                        !i && e--;

                      )
                        (t = X[n[e].type]) && t.prototype[r] && (i = !0);
                      s[r] = i;
                    });
                  },
                  linkSeries: function () {
                    var t = this,
                      e = t.series;
                    e.forEach(function (t) {
                      t.linkedSeries.length = 0;
                    }),
                      e.forEach(function (e) {
                        var i = e.options.linkedTo;
                        S(i) &&
                          (i =
                            ":previous" === i
                              ? t.series[e.index - 1]
                              : t.get(i)) &&
                          i.linkedParent !== e &&
                          (i.linkedSeries.push(e),
                          (e.linkedParent = i),
                          i.enabledDataSorting && e.setDataSortingOptions(),
                          (e.visible = L(
                            e.options.visible,
                            i.options.visible,
                            e.visible,
                          )));
                      }),
                      v(this, "afterLinkSeries");
                  },
                  renderSeries: function () {
                    this.series.forEach(function (t) {
                      t.translate(), t.render();
                    });
                  },
                  renderLabels: function () {
                    var t = this,
                      e = t.options.labels;
                    e.items &&
                      e.items.forEach(function (i) {
                        var s = m(e.style, i.style),
                          o = C(s.left) + t.plotLeft,
                          n = C(s.top) + t.plotTop + 12;
                        delete s.left,
                          delete s.top,
                          t.renderer
                            .text(i.html, o, n)
                            .attr({ zIndex: 2 })
                            .css(s)
                            .add();
                      });
                  },
                  render: function () {
                    var t = this.axes,
                      i = this.colorAxis,
                      s = this.renderer,
                      o = this.options,
                      n = 0,
                      r = function (t) {
                        t.forEach(function (t) {
                          t.visible && t.render();
                        });
                      };
                    this.setTitle(),
                      (this.legend = new e(this, o.legend)),
                      this.getStacks && this.getStacks(),
                      this.getMargins(!0),
                      this.setChartSize(),
                      (o = this.plotWidth),
                      t.some(function (t) {
                        if (
                          t.horiz &&
                          t.visible &&
                          t.options.labels.enabled &&
                          t.series.length
                        )
                          return (n = 21), !0;
                      });
                    var a = (this.plotHeight = Math.max(
                      this.plotHeight - n,
                      0,
                    ));
                    t.forEach(function (t) {
                      t.setScale();
                    }),
                      this.getAxisMargins();
                    var h = 1.1 < o / this.plotWidth,
                      l = 1.05 < a / this.plotHeight;
                    (h || l) &&
                      (t.forEach(function (t) {
                        ((t.horiz && h) || (!t.horiz && l)) &&
                          t.setTickInterval(!0);
                      }),
                      this.getMargins()),
                      this.drawChartBox(),
                      this.hasCartesianSeries ? r(t) : i && i.length && r(i),
                      this.seriesGroup ||
                        (this.seriesGroup = s
                          .g("series-group")
                          .attr({ zIndex: 3 })
                          .add()),
                      this.renderSeries(),
                      this.renderLabels(),
                      this.addCredits(),
                      this.setResponsive && this.setResponsive(),
                      this.updateContainerScaling(),
                      (this.hasRendered = !0);
                  },
                  addCredits: function (t) {
                    var e = this;
                    (t = T(!0, this.options.credits, t)).enabled &&
                      !this.credits &&
                      ((this.credits = this.renderer
                        .text(t.text + (this.mapCredits || ""), 0, 0)
                        .addClass("highcharts-credits")
                        .on("click", function () {
                          t.href && (H.location.href = t.href);
                        })
                        .attr({ align: t.position.align, zIndex: 8 })),
                      e.styledMode || this.credits.css(t.style),
                      this.credits.add().align(t.position),
                      (this.credits.update = function (t) {
                        (e.credits = e.credits.destroy()), e.addCredits(t);
                      }));
                  },
                  updateContainerScaling: function () {
                    var t = this.container;
                    if (
                      t.offsetWidth &&
                      t.offsetHeight &&
                      t.getBoundingClientRect
                    ) {
                      var e = t.getBoundingClientRect(),
                        i = e.width / t.offsetWidth;
                      (t = e.height / t.offsetHeight),
                        1 !== i || 1 !== t
                          ? (this.containerScaling = { scaleX: i, scaleY: t })
                          : delete this.containerScaling;
                    }
                  },
                  destroy: function () {
                    var e,
                      i = this,
                      s = i.axes,
                      o = i.series,
                      n = i.container,
                      r = n && n.parentNode;
                    for (
                      v(i, "destroy"),
                        i.renderer.forExport ? f(j, i) : (j[i.index] = void 0),
                        t.chartCount--,
                        i.renderTo.removeAttribute("data-highcharts-chart"),
                        E(i),
                        e = s.length;
                      e--;

                    )
                      s[e] = s[e].destroy();
                    for (
                      this.scroller &&
                        this.scroller.destroy &&
                        this.scroller.destroy(),
                        e = o.length;
                      e--;

                    )
                      o[e] = o[e].destroy();
                    "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer"
                      .split(" ")
                      .forEach(function (t) {
                        var e = i[t];
                        e && e.destroy && (i[t] = e.destroy());
                      }),
                      n && ((n.innerHTML = ""), E(n), r && u(n)),
                      P(i, function (t, e) {
                        delete i[e];
                      });
                  },
                  firstRender: function () {
                    var e = this,
                      o = e.options;
                    (e.isReadyToRender && !e.isReadyToRender()) ||
                      (e.getContainer(),
                      e.resetMargins(),
                      e.setChartSize(),
                      e.propFromSeries(),
                      e.getAxes(),
                      (b(o.series) ? o.series : []).forEach(function (t) {
                        e.initSeries(t);
                      }),
                      e.linkSeries(),
                      e.setSeriesData(),
                      v(e, "beforeRender"),
                      s &&
                        (e.pointer =
                          t.hasTouch || (!H.PointerEvent && !H.MSPointerEvent)
                            ? new s(e, o)
                            : new i(e, o)),
                      e.render(),
                      e.renderer.imgCount || e.hasLoaded || e.onload(),
                      e.temporaryDisplay(!0));
                  },
                  onload: function () {
                    this.callbacks.concat([this.callback]).forEach(function (
                      t,
                    ) {
                      t &&
                        "undefined" !== typeof this.index &&
                        t.apply(this, [this]);
                    }, this),
                      v(this, "load"),
                      v(this, "render"),
                      p(this.index) &&
                        this.setReflow(this.options.chart.reflow),
                      (this.hasLoaded = !0);
                  },
                });
            },
          ),
          e(
            i,
            "parts/ScrollablePlotArea.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.addEvent,
                s = e.createElement,
                o = e.pick,
                n = e.stop;
              (e = t.Chart),
                i(e, "afterSetChartSize", function (e) {
                  var i = this.options.chart.scrollablePlotArea,
                    s = i && i.minWidth;
                  if (((i = i && i.minHeight), !this.renderer.forExport)) {
                    if (s) {
                      if (
                        (this.scrollablePixelsX = s =
                          Math.max(0, s - this.chartWidth))
                      ) {
                        (this.plotWidth += s),
                          this.inverted
                            ? ((this.clipBox.height += s),
                              (this.plotBox.height += s))
                            : ((this.clipBox.width += s),
                              (this.plotBox.width += s));
                        var o = { 1: { name: "right", value: s } };
                      }
                    } else
                      i &&
                        (this.scrollablePixelsY = s =
                          Math.max(0, i - this.chartHeight)) &&
                        ((this.plotHeight += s),
                        this.inverted
                          ? ((this.clipBox.width += s),
                            (this.plotBox.width += s))
                          : ((this.clipBox.height += s),
                            (this.plotBox.height += s)),
                        (o = { 2: { name: "bottom", value: s } }));
                    o &&
                      !e.skipAxes &&
                      this.axes.forEach(function (e) {
                        o[e.side]
                          ? (e.getPlotLinePath = function () {
                              var i = o[e.side].name,
                                s = this[i];
                              this[i] = s - o[e.side].value;
                              var n = t.Axis.prototype.getPlotLinePath.apply(
                                this,
                                arguments,
                              );
                              return (this[i] = s), n;
                            })
                          : (e.setAxisSize(), e.setAxisTranslation());
                      });
                  }
                }),
                i(e, "render", function () {
                  this.scrollablePixelsX || this.scrollablePixelsY
                    ? (this.setUpScrolling && this.setUpScrolling(),
                      this.applyFixed())
                    : this.fixedDiv && this.applyFixed();
                }),
                (e.prototype.setUpScrolling = function () {
                  var t = this,
                    e = {
                      WebkitOverflowScrolling: "touch",
                      overflowX: "hidden",
                      overflowY: "hidden",
                    };
                  this.scrollablePixelsX && (e.overflowX = "auto"),
                    this.scrollablePixelsY && (e.overflowY = "auto"),
                    (this.scrollingContainer = s(
                      "div",
                      { className: "highcharts-scrolling" },
                      e,
                      this.renderTo,
                    )),
                    i(this.scrollingContainer, "scroll", function () {
                      t.pointer && delete t.pointer.chartPosition;
                    }),
                    (this.innerContainer = s(
                      "div",
                      { className: "highcharts-inner-container" },
                      null,
                      this.scrollingContainer,
                    )),
                    this.innerContainer.appendChild(this.container),
                    (this.setUpScrolling = null);
                }),
                (e.prototype.moveFixedElements = function () {
                  var t,
                    e = this.container,
                    i = this.fixedRenderer,
                    s =
                      ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(
                        " ",
                      );
                  this.scrollablePixelsX && !this.inverted
                    ? (t = ".highcharts-yaxis")
                    : (this.scrollablePixelsX && this.inverted) ||
                        (this.scrollablePixelsY && !this.inverted)
                      ? (t = ".highcharts-xaxis")
                      : this.scrollablePixelsY &&
                        this.inverted &&
                        (t = ".highcharts-yaxis"),
                    s.push(t, t + "-labels"),
                    s.forEach(function (t) {
                      [].forEach.call(e.querySelectorAll(t), function (t) {
                        (t.namespaceURI === i.SVG_NS
                          ? i.box
                          : i.box.parentNode
                        ).appendChild(t),
                          (t.style.pointerEvents = "auto");
                      });
                    });
                }),
                (e.prototype.applyFixed = function () {
                  var e,
                    r,
                    a = !this.fixedDiv,
                    h = this.options.chart.scrollablePlotArea;
                  a
                    ? ((this.fixedDiv = s(
                        "div",
                        { className: "highcharts-fixed" },
                        {
                          position: "absolute",
                          overflow: "hidden",
                          pointerEvents: "none",
                          zIndex: 2,
                        },
                        null,
                        !0,
                      )),
                      this.renderTo.insertBefore(
                        this.fixedDiv,
                        this.renderTo.firstChild,
                      ),
                      (this.renderTo.style.overflow = "visible"),
                      (this.fixedRenderer = r =
                        new t.Renderer(
                          this.fixedDiv,
                          this.chartWidth,
                          this.chartHeight,
                          null === (e = this.options.chart) || void 0 === e
                            ? void 0
                            : e.style,
                        )),
                      (this.scrollableMask = r
                        .path()
                        .attr({
                          fill: this.options.chart.backgroundColor || "#fff",
                          "fill-opacity": o(h.opacity, 0.85),
                          zIndex: -1,
                        })
                        .addClass("highcharts-scrollable-mask")
                        .add()),
                      this.moveFixedElements(),
                      i(this, "afterShowResetZoom", this.moveFixedElements),
                      i(this, "afterLayOutTitles", this.moveFixedElements))
                    : this.fixedRenderer.setSize(
                        this.chartWidth,
                        this.chartHeight,
                      ),
                    (e = this.chartWidth + (this.scrollablePixelsX || 0)),
                    (r = this.chartHeight + (this.scrollablePixelsY || 0)),
                    n(this.container),
                    (this.container.style.width = e + "px"),
                    (this.container.style.height = r + "px"),
                    this.renderer.boxWrapper.attr({
                      width: e,
                      height: r,
                      viewBox: [0, 0, e, r].join(" "),
                    }),
                    this.chartBackground.attr({ width: e, height: r }),
                    (this.scrollingContainer.style.height =
                      this.chartHeight + "px"),
                    a &&
                      (h.scrollPositionX &&
                        (this.scrollingContainer.scrollLeft =
                          this.scrollablePixelsX * h.scrollPositionX),
                      h.scrollPositionY &&
                        (this.scrollingContainer.scrollTop =
                          this.scrollablePixelsY * h.scrollPositionY)),
                    (r = this.axisOffset),
                    (a = this.plotTop - r[0] - 1),
                    (h = this.plotLeft - r[3] - 1),
                    (e = this.plotTop + this.plotHeight + r[2] + 1),
                    (r = this.plotLeft + this.plotWidth + r[1] + 1);
                  var l =
                      this.plotLeft +
                      this.plotWidth -
                      (this.scrollablePixelsX || 0),
                    c =
                      this.plotTop +
                      this.plotHeight -
                      (this.scrollablePixelsY || 0);
                  (a = this.scrollablePixelsX
                    ? [
                        ["M", 0, a],
                        ["L", this.plotLeft - 1, a],
                        ["L", this.plotLeft - 1, e],
                        ["L", 0, e],
                        ["Z"],
                        ["M", l, a],
                        ["L", this.chartWidth, a],
                        ["L", this.chartWidth, e],
                        ["L", l, e],
                        ["Z"],
                      ]
                    : this.scrollablePixelsY
                      ? [
                          ["M", h, 0],
                          ["L", h, this.plotTop - 1],
                          ["L", r, this.plotTop - 1],
                          ["L", r, 0],
                          ["Z"],
                          ["M", h, c],
                          ["L", h, this.chartHeight],
                          ["L", r, this.chartHeight],
                          ["L", r, c],
                          ["Z"],
                        ]
                      : [["M", 0, 0]]),
                    "adjustHeight" !== this.redrawTrigger &&
                      this.scrollableMask.attr({ d: a });
                });
            },
          ),
          e(
            i,
            "parts/StackingAxis.js",
            [i["parts/Utilities.js"]],
            function (t) {
              var e = t.addEvent,
                i = t.destroyObjectProperties,
                s = t.fireEvent,
                o = t.objectEach,
                n = t.pick,
                r = (function () {
                  function t(t) {
                    (this.oldStacks = {}),
                      (this.stacks = {}),
                      (this.stacksTouched = 0),
                      (this.axis = t);
                  }
                  return (
                    (t.prototype.buildStacks = function () {
                      var t,
                        e = this.axis,
                        i = e.series,
                        o = n(e.options.reversedStacks, !0),
                        r = i.length;
                      if (!e.isXAxis) {
                        for (this.usePercentage = !1, t = r; t--; ) {
                          i[o ? t : r - t - 1].setStackedPoints();
                        }
                        for (t = 0; t < r; t++) i[t].modifyStacks();
                        s(e, "afterBuildStacks");
                      }
                    }),
                    (t.prototype.cleanStacks = function () {
                      if (!this.axis.isXAxis) {
                        if (this.oldStacks)
                          var t = (this.stacks = this.oldStacks);
                        o(t, function (t) {
                          o(t, function (t) {
                            t.cumulative = t.total;
                          });
                        });
                      }
                    }),
                    (t.prototype.resetStacks = function () {
                      var t = this,
                        e = t.stacks;
                      t.axis.isXAxis ||
                        o(e, function (e) {
                          o(e, function (i, s) {
                            i.touched < t.stacksTouched
                              ? (i.destroy(), delete e[s])
                              : ((i.total = null), (i.cumulative = null));
                          });
                        });
                    }),
                    (t.prototype.renderStackTotals = function () {
                      var t = this.axis.chart,
                        e = t.renderer,
                        i = this.stacks,
                        s = (this.stackTotalGroup =
                          this.stackTotalGroup ||
                          e
                            .g("stack-labels")
                            .attr({ visibility: "visible", zIndex: 6 })
                            .add());
                      s.translate(t.plotLeft, t.plotTop),
                        o(i, function (t) {
                          o(t, function (t) {
                            t.render(s);
                          });
                        });
                    }),
                    t
                  );
                })();
              return (function () {
                function t() {}
                return (
                  (t.compose = function (i) {
                    e(i, "init", t.onInit), e(i, "destroy", t.onDestroy);
                  }),
                  (t.onDestroy = function () {
                    var t = this.stacking;
                    if (t) {
                      var e = t.stacks;
                      o(e, function (t, s) {
                        i(t), (e[s] = null);
                      }),
                        t && t.stackTotalGroup && t.stackTotalGroup.destroy();
                    }
                  }),
                  (t.onInit = function () {
                    this.stacking || (this.stacking = new r(this));
                  }),
                  t
                );
              })();
            },
          ),
          e(
            i,
            "mixins/legend-symbol.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.merge,
                s = e.pick;
              return (
                (t.LegendSymbolMixin = {
                  drawRectangle: function (t, e) {
                    var i = t.symbolHeight,
                      o = t.options.squareSymbol;
                    e.legendSymbol = this.chart.renderer
                      .rect(
                        o ? (t.symbolWidth - i) / 2 : 0,
                        t.baseline - i + 1,
                        o ? i : t.symbolWidth,
                        i,
                        s(t.options.symbolRadius, i / 2),
                      )
                      .addClass("highcharts-point")
                      .attr({ zIndex: 3 })
                      .add(e.legendGroup);
                  },
                  drawLineMarker: function (t) {
                    var e = this.options,
                      o = e.marker,
                      n = t.symbolWidth,
                      r = t.symbolHeight,
                      a = r / 2,
                      h = this.chart.renderer,
                      l = this.legendGroup;
                    t = t.baseline - Math.round(0.3 * t.fontMetrics.b);
                    var c = {};
                    this.chart.styledMode ||
                      ((c = { "stroke-width": e.lineWidth || 0 }),
                      e.dashStyle && (c.dashstyle = e.dashStyle)),
                      (this.legendLine = h
                        .path(["M", 0, t, "L", n, t])
                        .addClass("highcharts-graph")
                        .attr(c)
                        .add(l)),
                      o &&
                        !1 !== o.enabled &&
                        n &&
                        ((e = Math.min(s(o.radius, a), a)),
                        0 === this.symbol.indexOf("url") &&
                          ((o = i(o, { width: r, height: r })), (e = 0)),
                        (this.legendSymbol = o =
                          h
                            .symbol(
                              this.symbol,
                              n / 2 - e,
                              t - e,
                              2 * e,
                              2 * e,
                              o,
                            )
                            .addClass("highcharts-point")
                            .add(l)),
                        (o.isMarker = !0));
                  },
                }),
                t.LegendSymbolMixin
              );
            },
          ),
          e(
            i,
            "parts/Point.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.animObject,
                s = e.defined,
                o = e.erase,
                n = e.extend,
                r = e.fireEvent,
                a = e.format,
                h = e.getNestedProperty,
                l = e.isArray,
                c = e.isNumber,
                d = e.isObject,
                p = e.syncTimeout,
                u = e.pick,
                f = e.removeEvent,
                g = e.uniqueKey;
              return (
                (e = (function () {
                  function t() {
                    (this.colorIndex = this.category = void 0),
                      (this.formatPrefix = "point"),
                      (this.id = void 0),
                      (this.isNull = !1),
                      (this.percentage = this.options = this.name = void 0),
                      (this.selected = !1),
                      (this.total = this.series = void 0),
                      (this.visible = !0),
                      (this.x = void 0);
                  }
                  return (
                    (t.prototype.animateBeforeDestroy = function () {
                      var t,
                        e = this,
                        i = { x: e.startXPos, opacity: 0 },
                        s = e.getGraphicalProps();
                      s.singular.forEach(function (s) {
                        (t = "dataLabel" === s),
                          (e[s] = e[s].animate(
                            t
                              ? {
                                  x: e[s].startXPos,
                                  y: e[s].startYPos,
                                  opacity: 0,
                                }
                              : i,
                          ));
                      }),
                        s.plural.forEach(function (t) {
                          e[t].forEach(function (t) {
                            t.element &&
                              t.animate(
                                n(
                                  { x: e.startXPos },
                                  t.startYPos
                                    ? { x: t.startXPos, y: t.startYPos }
                                    : {},
                                ),
                              );
                          });
                        });
                    }),
                    (t.prototype.applyOptions = function (e, i) {
                      var s = this.series,
                        o = s.options.pointValKey || s.pointValKey;
                      return (
                        (e = t.prototype.optionsToObject.call(this, e)),
                        n(this, e),
                        (this.options = this.options ? n(this.options, e) : e),
                        e.group && delete this.group,
                        e.dataLabels && delete this.dataLabels,
                        o &&
                          (this.y = t.prototype.getNestedProperty.call(
                            this,
                            o,
                          )),
                        (this.formatPrefix = (this.isNull = u(
                          this.isValid && !this.isValid(),
                          null === this.x || !c(this.y),
                        ))
                          ? "null"
                          : "point"),
                        this.selected && (this.state = "select"),
                        "name" in this &&
                          "undefined" === typeof i &&
                          s.xAxis &&
                          s.xAxis.hasNames &&
                          (this.x = s.xAxis.nameToX(this)),
                        "undefined" === typeof this.x &&
                          s &&
                          (this.x =
                            "undefined" === typeof i
                              ? s.autoIncrement(this)
                              : i),
                        this
                      );
                    }),
                    (t.prototype.destroy = function () {
                      function t() {
                        for (r in ((e.graphic || e.dataLabel || e.dataLabels) &&
                          (f(e), e.destroyElements()),
                        e))
                          e[r] = null;
                      }
                      var e = this,
                        s = e.series,
                        n = s.chart;
                      s = s.options.dataSorting;
                      var r,
                        a = n.hoverPoints,
                        h = i(e.series.chart.renderer.globalAnimation);
                      e.legendItem && n.legend.destroyItem(e),
                        a &&
                          (e.setState(),
                          o(a, e),
                          a.length || (n.hoverPoints = null)),
                        e === n.hoverPoint && e.onMouseOut(),
                        s && s.enabled
                          ? (this.animateBeforeDestroy(), p(t, h.duration))
                          : t(),
                        n.pointCount--;
                    }),
                    (t.prototype.destroyElements = function (t) {
                      var e = this;
                      (t = e.getGraphicalProps(t)).singular.forEach(
                        function (t) {
                          e[t] = e[t].destroy();
                        },
                      ),
                        t.plural.forEach(function (t) {
                          e[t].forEach(function (t) {
                            t.element && t.destroy();
                          }),
                            delete e[t];
                        });
                    }),
                    (t.prototype.firePointEvent = function (t, e, i) {
                      var s = this,
                        o = this.series.options;
                      (o.point.events[t] ||
                        (s.options &&
                          s.options.events &&
                          s.options.events[t])) &&
                        s.importEvents(),
                        "click" === t &&
                          o.allowPointSelect &&
                          (i = function (t) {
                            s.select &&
                              s.select(
                                null,
                                t.ctrlKey || t.metaKey || t.shiftKey,
                              );
                          }),
                        r(s, t, e, i);
                    }),
                    (t.prototype.getClassName = function () {
                      return (
                        "highcharts-point" +
                        (this.selected ? " highcharts-point-select" : "") +
                        (this.negative ? " highcharts-negative" : "") +
                        (this.isNull ? " highcharts-null-point" : "") +
                        ("undefined" !== typeof this.colorIndex
                          ? " highcharts-color-" + this.colorIndex
                          : "") +
                        (this.options.className
                          ? " " + this.options.className
                          : "") +
                        (this.zone && this.zone.className
                          ? " " +
                            this.zone.className.replace(
                              "highcharts-negative",
                              "",
                            )
                          : "")
                      );
                    }),
                    (t.prototype.getGraphicalProps = function (t) {
                      var e,
                        i = this,
                        s = [],
                        o = { singular: [], plural: [] };
                      for (
                        (t = t || { graphic: 1, dataLabel: 1 }).graphic &&
                          s.push("graphic", "shadowGroup"),
                          t.dataLabel &&
                            s.push("dataLabel", "dataLabelUpper", "connector"),
                          e = s.length;
                        e--;

                      ) {
                        var n = s[e];
                        i[n] && o.singular.push(n);
                      }
                      return (
                        ["dataLabel", "connector"].forEach(function (e) {
                          var s = e + "s";
                          t[e] && i[s] && o.plural.push(s);
                        }),
                        o
                      );
                    }),
                    (t.prototype.getLabelConfig = function () {
                      return {
                        x: this.category,
                        y: this.y,
                        color: this.color,
                        colorIndex: this.colorIndex,
                        key: this.name || this.category,
                        series: this.series,
                        point: this,
                        percentage: this.percentage,
                        total: this.total || this.stackTotal,
                      };
                    }),
                    (t.prototype.getNestedProperty = function (t) {
                      if (t)
                        return 0 === t.indexOf("custom.")
                          ? h(t, this.options)
                          : this[t];
                    }),
                    (t.prototype.getZone = function () {
                      var t = this.series,
                        e = t.zones;
                      t = t.zoneAxis || "y";
                      var i,
                        s = 0;
                      for (i = e[s]; this[t] >= i.value; ) i = e[++s];
                      return (
                        this.nonZonedColor || (this.nonZonedColor = this.color),
                        (this.color =
                          i && i.color && !this.options.color
                            ? i.color
                            : this.nonZonedColor),
                        i
                      );
                    }),
                    (t.prototype.hasNewShapeType = function () {
                      return (
                        (this.graphic &&
                          (this.graphic.symbolName ||
                            this.graphic.element.nodeName)) !== this.shapeType
                      );
                    }),
                    (t.prototype.init = function (t, e, i) {
                      return (
                        (this.series = t),
                        this.applyOptions(e, i),
                        (this.id = s(this.id) ? this.id : g()),
                        this.resolveColor(),
                        t.chart.pointCount++,
                        r(this, "afterInit"),
                        this
                      );
                    }),
                    (t.prototype.optionsToObject = function (e) {
                      var i = {},
                        s = this.series,
                        o = s.options.keys,
                        n = o || s.pointArrayMap || ["y"],
                        r = n.length,
                        a = 0,
                        h = 0;
                      if (c(e) || null === e) i[n[0]] = e;
                      else if (l(e))
                        for (
                          !o &&
                          e.length > r &&
                          ("string" === (s = typeof e[0])
                            ? (i.name = e[0])
                            : "number" === s && (i.x = e[0]),
                          a++);
                          h < r;

                        )
                          (o && "undefined" === typeof e[a]) ||
                            (0 < n[h].indexOf(".")
                              ? t.prototype.setNestedProperty(i, e[a], n[h])
                              : (i[n[h]] = e[a])),
                            a++,
                            h++;
                      else
                        "object" === typeof e &&
                          ((i = e),
                          e.dataLabels && (s._hasPointLabels = !0),
                          e.marker && (s._hasPointMarkers = !0));
                      return i;
                    }),
                    (t.prototype.resolveColor = function () {
                      var t = this.series,
                        e = t.chart.options.chart.colorCount,
                        i = t.chart.styledMode;
                      delete this.nonZonedColor,
                        i || this.options.color || (this.color = t.color),
                        t.options.colorByPoint
                          ? (i ||
                              ((e = t.options.colors || t.chart.options.colors),
                              (this.color = this.color || e[t.colorCounter]),
                              (e = e.length)),
                            (i = t.colorCounter),
                            t.colorCounter++,
                            t.colorCounter === e && (t.colorCounter = 0))
                          : (i = t.colorIndex),
                        (this.colorIndex = u(this.colorIndex, i));
                    }),
                    (t.prototype.setNestedProperty = function (t, e, i) {
                      return (
                        i.split(".").reduce(function (t, i, s, o) {
                          return (
                            (t[i] =
                              o.length - 1 === s ? e : d(t[i], !0) ? t[i] : {}),
                            t[i]
                          );
                        }, t),
                        t
                      );
                    }),
                    (t.prototype.tooltipFormatter = function (t) {
                      var e = this.series,
                        i = e.tooltipOptions,
                        s = u(i.valueDecimals, ""),
                        o = i.valuePrefix || "",
                        n = i.valueSuffix || "";
                      return (
                        e.chart.styledMode &&
                          (t = e.chart.tooltip.styledModeFormat(t)),
                        (e.pointArrayMap || ["y"]).forEach(function (e) {
                          (e = "{point." + e),
                            (o || n) &&
                              (t = t.replace(
                                RegExp(e + "}", "g"),
                                o + e + "}" + n,
                              )),
                            (t = t.replace(
                              RegExp(e + "}", "g"),
                              e + ":,." + s + "f}",
                            ));
                        }),
                        a(t, { point: this, series: this.series }, e.chart)
                      );
                    }),
                    t
                  );
                })()),
                (t.Point = e),
                t.Point
              );
            },
          ),
          e(
            i,
            "parts/Series.js",
            [
              i["mixins/legend-symbol.js"],
              i["parts/Globals.js"],
              i["parts/Point.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = s.addEvent,
                n = s.animObject,
                r = s.arrayMax,
                a = s.arrayMin,
                h = s.clamp,
                l = s.correctFloat,
                c = s.defined,
                d = s.erase,
                p = s.error,
                u = s.extend,
                f = s.find,
                g = s.fireEvent,
                m = s.getNestedProperty,
                y = s.isArray,
                v = s.isFunction,
                x = s.isNumber,
                b = s.isString,
                k = s.merge,
                M = s.objectEach,
                w = s.pick,
                S = s.removeEvent,
                T = s.seriesType,
                A = s.splat,
                P = s.syncTimeout,
                L = e.defaultOptions,
                C = e.defaultPlotOptions,
                O = e.seriesTypes,
                E = e.SVGElement,
                D = e.win;
              e.Series = T(
                "line",
                null,
                {
                  lineWidth: 2,
                  allowPointSelect: !1,
                  crisp: !0,
                  showCheckbox: !1,
                  animation: { duration: 1e3 },
                  events: {},
                  marker: {
                    enabledThreshold: 2,
                    lineColor: "#ffffff",
                    lineWidth: 0,
                    radius: 4,
                    states: {
                      normal: { animation: !0 },
                      hover: {
                        animation: { duration: 50 },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1,
                      },
                      select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000",
                        lineWidth: 2,
                      },
                    },
                  },
                  point: { events: {} },
                  dataLabels: {
                    align: "center",
                    formatter: function () {
                      var t = this.series.chart.numberFormatter;
                      return "number" !== typeof this.y ? "" : t(this.y, -1);
                    },
                    padding: 5,
                    style: {
                      fontSize: "11px",
                      fontWeight: "bold",
                      color: "contrast",
                      textOutline: "1px contrast",
                    },
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                  },
                  cropThreshold: 300,
                  opacity: 1,
                  pointRange: 0,
                  softThreshold: !0,
                  states: {
                    normal: { animation: !0 },
                    hover: {
                      animation: { duration: 50 },
                      lineWidthPlus: 1,
                      marker: {},
                      halo: { size: 10, opacity: 0.25 },
                    },
                    select: { animation: { duration: 0 } },
                    inactive: { animation: { duration: 50 }, opacity: 0.2 },
                  },
                  stickyTracking: !0,
                  turboThreshold: 1e3,
                  findNearestPointBy: "x",
                },
                {
                  axisTypes: ["xAxis", "yAxis"],
                  coll: "series",
                  colorCounter: 0,
                  cropShoulder: 1,
                  directTouch: !1,
                  eventsToUnbind: [],
                  isCartesian: !0,
                  parallelArrays: ["x", "y"],
                  pointClass: i,
                  requireSorting: !0,
                  sorted: !0,
                  init: function (t, e) {
                    g(this, "init", { options: e });
                    var i,
                      s = this,
                      n = t.series;
                    (this.eventOptions = this.eventOptions || {}),
                      (s.chart = t),
                      (s.options = e = s.setOptions(e)),
                      (s.linkedSeries = []),
                      s.bindAxes(),
                      u(s, {
                        name: e.name,
                        state: "",
                        visible: !1 !== e.visible,
                        selected: !0 === e.selected,
                      });
                    var r = e.events;
                    M(r, function (t, e) {
                      v(t) &&
                        s.eventOptions[e] !== t &&
                        (v(s.eventOptions[e]) && S(s, e, s.eventOptions[e]),
                        (s.eventOptions[e] = t),
                        o(s, e, t));
                    }),
                      ((r && r.click) ||
                        (e.point && e.point.events && e.point.events.click) ||
                        e.allowPointSelect) &&
                        (t.runTrackerClick = !0),
                      s.getColor(),
                      s.getSymbol(),
                      s.parallelArrays.forEach(function (t) {
                        s[t + "Data"] || (s[t + "Data"] = []);
                      }),
                      s.isCartesian && (t.hasCartesianSeries = !0),
                      n.length && (i = n[n.length - 1]),
                      (s._i = w(i && i._i, -1) + 1),
                      t.orderSeries(this.insert(n)),
                      e.dataSorting && e.dataSorting.enabled
                        ? s.setDataSortingOptions()
                        : s.points || s.data || s.setData(e.data, !1),
                      g(this, "afterInit");
                  },
                  is: function (t) {
                    return O[t] && this instanceof O[t];
                  },
                  insert: function (t) {
                    var e,
                      i = this.options.index;
                    if (x(i)) {
                      for (e = t.length; e--; )
                        if (i >= w(t[e].options.index, t[e]._i)) {
                          t.splice(e + 1, 0, this);
                          break;
                        }
                      -1 === e && t.unshift(this), (e += 1);
                    } else t.push(this);
                    return w(e, t.length - 1);
                  },
                  bindAxes: function () {
                    var t,
                      e = this,
                      i = e.options,
                      s = e.chart;
                    g(this, "bindAxes", null, function () {
                      (e.axisTypes || []).forEach(function (o) {
                        s[o].forEach(function (s) {
                          (t = s.options),
                            (i[o] === t.index ||
                              ("undefined" !== typeof i[o] && i[o] === t.id) ||
                              ("undefined" === typeof i[o] && 0 === t.index)) &&
                              (e.insert(s.series),
                              (e[o] = s),
                              (s.isDirty = !0));
                        }),
                          e[o] || e.optionalAxis === o || p(18, !0, s);
                      });
                    }),
                      g(this, "afterBindAxes");
                  },
                  updateParallelArrays: function (t, e) {
                    var i = t.series,
                      s = arguments,
                      o = x(e)
                        ? function (s) {
                            var o =
                              "y" === s && i.toYData ? i.toYData(t) : t[s];
                            i[s + "Data"][e] = o;
                          }
                        : function (t) {
                            Array.prototype[e].apply(
                              i[t + "Data"],
                              Array.prototype.slice.call(s, 2),
                            );
                          };
                    i.parallelArrays.forEach(o);
                  },
                  hasData: function () {
                    return (
                      (this.visible &&
                        "undefined" !== typeof this.dataMax &&
                        "undefined" !== typeof this.dataMin) ||
                      (this.visible && this.yData && 0 < this.yData.length)
                    );
                  },
                  autoIncrement: function () {
                    var t,
                      e = this.options,
                      i = this.xIncrement,
                      s = e.pointIntervalUnit,
                      o = this.chart.time;
                    return (
                      (i = w(i, e.pointStart, 0)),
                      (this.pointInterval = t =
                        w(this.pointInterval, e.pointInterval, 1)),
                      s &&
                        ((e = new o.Date(i)),
                        "day" === s
                          ? o.set("Date", e, o.get("Date", e) + t)
                          : "month" === s
                            ? o.set("Month", e, o.get("Month", e) + t)
                            : "year" === s &&
                              o.set("FullYear", e, o.get("FullYear", e) + t),
                        (t = e.getTime() - i)),
                      (this.xIncrement = i + t),
                      i
                    );
                  },
                  setDataSortingOptions: function () {
                    var t = this.options;
                    u(this, {
                      requireSorting: !1,
                      sorted: !1,
                      enabledDataSorting: !0,
                      allowDG: !1,
                    }),
                      c(t.pointRange) || (t.pointRange = 1);
                  },
                  setOptions: function (t) {
                    var e = this.chart,
                      i = e.options,
                      s = i.plotOptions,
                      o = e.userOptions || {};
                    (t = k(t)), (e = e.styledMode);
                    var n = { plotOptions: s, userOptions: t };
                    g(this, "setOptions", n);
                    var r = n.plotOptions[this.type],
                      a = o.plotOptions || {};
                    return (
                      (this.userOptions = n.userOptions),
                      (o = k(
                        r,
                        s.series,
                        o.plotOptions && o.plotOptions[this.type],
                        t,
                      )),
                      (this.tooltipOptions = k(
                        L.tooltip,
                        L.plotOptions.series && L.plotOptions.series.tooltip,
                        L.plotOptions[this.type].tooltip,
                        i.tooltip.userOptions,
                        s.series && s.series.tooltip,
                        s[this.type].tooltip,
                        t.tooltip,
                      )),
                      (this.stickyTracking = w(
                        t.stickyTracking,
                        a[this.type] && a[this.type].stickyTracking,
                        a.series && a.series.stickyTracking,
                        !(
                          !this.tooltipOptions.shared || this.noSharedTooltip
                        ) || o.stickyTracking,
                      )),
                      null === r.marker && delete o.marker,
                      (this.zoneAxis = o.zoneAxis),
                      (i = this.zones = (o.zones || []).slice()),
                      (!o.negativeColor && !o.negativeFillColor) ||
                        o.zones ||
                        ((s = {
                          value:
                            o[this.zoneAxis + "Threshold"] || o.threshold || 0,
                          className: "highcharts-negative",
                        }),
                        e ||
                          ((s.color = o.negativeColor),
                          (s.fillColor = o.negativeFillColor)),
                        i.push(s)),
                      i.length &&
                        c(i[i.length - 1].value) &&
                        i.push(
                          e
                            ? {}
                            : { color: this.color, fillColor: this.fillColor },
                        ),
                      g(this, "afterSetOptions", { options: o }),
                      o
                    );
                  },
                  getName: function () {
                    return w(this.options.name, "Series " + (this.index + 1));
                  },
                  getCyclic: function (t, e, i) {
                    var s = this.chart,
                      o = this.userOptions,
                      n = t + "Index",
                      r = t + "Counter",
                      a = i
                        ? i.length
                        : w(s.options.chart[t + "Count"], s[t + "Count"]);
                    if (!e) {
                      var h = w(o[n], o["_" + n]);
                      c(h) ||
                        (s.series.length || (s[r] = 0),
                        (o["_" + n] = h = s[r] % a),
                        (s[r] += 1)),
                        i && (e = i[h]);
                    }
                    "undefined" !== typeof h && (this[n] = h), (this[t] = e);
                  },
                  getColor: function () {
                    this.chart.styledMode
                      ? this.getCyclic("color")
                      : this.options.colorByPoint
                        ? (this.options.color = null)
                        : this.getCyclic(
                            "color",
                            this.options.color || C[this.type].color,
                            this.chart.options.colors,
                          );
                  },
                  getPointsCollection: function () {
                    return (
                      (this.hasGroupedData ? this.points : this.data) || []
                    );
                  },
                  getSymbol: function () {
                    this.getCyclic(
                      "symbol",
                      this.options.marker.symbol,
                      this.chart.options.symbols,
                    );
                  },
                  findPointIndex: function (t, e) {
                    var i,
                      s = t.id,
                      o = t.x,
                      n = this.points,
                      r = this.options.dataSorting;
                    if (s) var a = this.chart.get(s);
                    else if (this.linkedParent || this.enabledDataSorting) {
                      var h = r && r.matchByName ? "name" : "index";
                      if (
                        !(a = f(n, function (e) {
                          return !e.touched && e[h] === t[h];
                        }))
                      )
                        return;
                    }
                    if (a) {
                      var l = a && a.index;
                      "undefined" !== typeof l && (i = !0);
                    }
                    return (
                      "undefined" === typeof l &&
                        x(o) &&
                        (l = this.xData.indexOf(o, e)),
                      -1 !== l &&
                        "undefined" !== typeof l &&
                        this.cropped &&
                        (l = l >= this.cropStart ? l - this.cropStart : l),
                      !i && n[l] && n[l].touched && (l = void 0),
                      l
                    );
                  },
                  drawLegendSymbol: t.drawLineMarker,
                  updateData: function (t, e) {
                    var i,
                      s,
                      o,
                      n = this.options,
                      a = n.dataSorting,
                      h = this.points,
                      l = [],
                      d = this.requireSorting,
                      p = t.length === h.length,
                      u = !0;
                    if (
                      ((this.xIncrement = null),
                      t.forEach(function (t, e) {
                        var s =
                            (c(t) &&
                              this.pointClass.prototype.optionsToObject.call(
                                { series: this },
                                t,
                              )) ||
                            {},
                          r = s.x;
                        s.id || x(r)
                          ? (-1 === (r = this.findPointIndex(s, o)) ||
                            "undefined" === typeof r
                              ? l.push(t)
                              : h[r] && t !== n.data[r]
                                ? (h[r].update(t, !1, null, !1),
                                  (h[r].touched = !0),
                                  d && (o = r + 1))
                                : h[r] && (h[r].touched = !0),
                            (!p ||
                              e !== r ||
                              (a && a.enabled) ||
                              this.hasDerivedData) &&
                              (i = !0))
                          : l.push(t);
                      }, this),
                      i)
                    )
                      for (t = h.length; t--; )
                        (s = h[t]) && !s.touched && s.remove && s.remove(!1, e);
                    else
                      !p || (a && a.enabled)
                        ? (u = !1)
                        : (t.forEach(function (t, e) {
                            h[e].update &&
                              t !== h[e].y &&
                              h[e].update(t, !1, null, !1);
                          }),
                          (l.length = 0));
                    return (
                      h.forEach(function (t) {
                        t && (t.touched = !1);
                      }),
                      !!u &&
                        (l.forEach(function (t) {
                          this.addPoint(t, !1, null, null, !1);
                        }, this),
                        null === this.xIncrement &&
                          this.xData &&
                          this.xData.length &&
                          ((this.xIncrement = r(this.xData)),
                          this.autoIncrement()),
                        !0)
                    );
                  },
                  setData: function (t, e, i, s) {
                    var o,
                      n = this,
                      r = n.points,
                      a = (r && r.length) || 0,
                      h = n.options,
                      l = n.chart,
                      c = h.dataSorting,
                      d = null,
                      u = n.xAxis;
                    d = h.turboThreshold;
                    var f,
                      g = this.xData,
                      m = this.yData,
                      v = (o = n.pointArrayMap) && o.length,
                      k = h.keys,
                      M = 0,
                      S = 1;
                    if (
                      ((o = (t = t || []).length),
                      (e = w(e, !0)),
                      c && c.enabled && (t = this.sortData(t)),
                      !1 !== s &&
                        o &&
                        a &&
                        !n.cropped &&
                        !n.hasGroupedData &&
                        n.visible &&
                        !n.isSeriesBoosting &&
                        (f = this.updateData(t, i)),
                      !f)
                    ) {
                      if (
                        ((n.xIncrement = null),
                        (n.colorCounter = 0),
                        this.parallelArrays.forEach(function (t) {
                          n[t + "Data"].length = 0;
                        }),
                        d && o > d)
                      )
                        if (((d = n.getFirstValidPoint(t)), x(d)))
                          for (i = 0; i < o; i++)
                            (g[i] = this.autoIncrement()), (m[i] = t[i]);
                        else if (y(d))
                          if (v)
                            for (i = 0; i < o; i++)
                              (s = t[i]),
                                (g[i] = s[0]),
                                (m[i] = s.slice(1, v + 1));
                          else
                            for (
                              k &&
                                ((M = 0 <= (M = k.indexOf("x")) ? M : 0),
                                (S = 0 <= (S = k.indexOf("y")) ? S : 1)),
                                i = 0;
                              i < o;
                              i++
                            )
                              (s = t[i]), (g[i] = s[M]), (m[i] = s[S]);
                        else p(12, !1, l);
                      else
                        for (i = 0; i < o; i++)
                          "undefined" !== typeof t[i] &&
                            ((s = { series: n }),
                            n.pointClass.prototype.applyOptions.apply(s, [
                              t[i],
                            ]),
                            n.updateParallelArrays(s, i));
                      for (
                        m && b(m[0]) && p(14, !0, l),
                          n.data = [],
                          n.options.data = n.userOptions.data = t,
                          i = a;
                        i--;

                      )
                        r[i] && r[i].destroy && r[i].destroy();
                      u && (u.minRange = u.userMinRange),
                        (n.isDirty = l.isDirtyBox = !0),
                        (n.isDirtyData = !!r),
                        (i = !1);
                    }
                    "point" === h.legendType &&
                      (this.processData(), this.generatePoints()),
                      e && l.redraw(i);
                  },
                  sortData: function (t) {
                    var e = this,
                      i = e.options.dataSorting.sortKey || "y",
                      s = function (t, e) {
                        return (
                          (c(e) &&
                            t.pointClass.prototype.optionsToObject.call(
                              { series: t },
                              e,
                            )) ||
                          {}
                        );
                      };
                    return (
                      t.forEach(function (i, o) {
                        (t[o] = s(e, i)), (t[o].index = o);
                      }, this),
                      t
                        .concat()
                        .sort(function (t, e) {
                          return (
                            (t = m(i, t)),
                            (e = m(i, e)) < t ? -1 : e > t ? 1 : 0
                          );
                        })
                        .forEach(function (t, e) {
                          t.x = e;
                        }, this),
                      e.linkedSeries &&
                        e.linkedSeries.forEach(function (e) {
                          var i = e.options,
                            o = i.data;
                          (i.dataSorting && i.dataSorting.enabled) ||
                            !o ||
                            (o.forEach(function (i, n) {
                              (o[n] = s(e, i)),
                                t[n] && ((o[n].x = t[n].x), (o[n].index = n));
                            }),
                            e.setData(o, !1));
                        }),
                      t
                    );
                  },
                  getProcessedData: function (t) {
                    var e = this.xData,
                      i = this.yData,
                      s = e.length,
                      o = 0,
                      n = this.xAxis,
                      r = this.options,
                      a = r.cropThreshold,
                      h = t || this.getExtremesFromAll || r.getExtremesFromAll,
                      l = this.isCartesian;
                    (t = n && n.val2lin), (r = !(!n || !n.logarithmic));
                    var c = this.requireSorting;
                    if (n)
                      var d = (n = n.getExtremes()).min,
                        u = n.max;
                    if (
                      l &&
                      this.sorted &&
                      !h &&
                      (!a || s > a || this.forceCrop)
                    )
                      if (e[s - 1] < d || e[0] > u) (e = []), (i = []);
                      else if (this.yData && (e[0] < d || e[s - 1] > u)) {
                        (e = (o = this.cropData(this.xData, this.yData, d, u))
                          .xData),
                          (i = o.yData),
                          (o = o.start);
                        var f = !0;
                      }
                    for (a = e.length || 1; --a; )
                      if (
                        0 < (s = r ? t(e[a]) - t(e[a - 1]) : e[a] - e[a - 1]) &&
                        ("undefined" === typeof g || s < g)
                      )
                        var g = s;
                      else 0 > s && c && (p(15, !1, this.chart), (c = !1));
                    return {
                      xData: e,
                      yData: i,
                      cropped: f,
                      cropStart: o,
                      closestPointRange: g,
                    };
                  },
                  processData: function (t) {
                    var e = this.xAxis;
                    if (
                      this.isCartesian &&
                      !this.isDirty &&
                      !e.isDirty &&
                      !this.yAxis.isDirty &&
                      !t
                    )
                      return !1;
                    (t = this.getProcessedData()),
                      (this.cropped = t.cropped),
                      (this.cropStart = t.cropStart),
                      (this.processedXData = t.xData),
                      (this.processedYData = t.yData),
                      (this.closestPointRange = this.basePointRange =
                        t.closestPointRange);
                  },
                  cropData: function (t, e, i, s, o) {
                    var n,
                      r = t.length,
                      a = 0,
                      h = r;
                    for (o = w(o, this.cropShoulder), n = 0; n < r; n++)
                      if (t[n] >= i) {
                        a = Math.max(0, n - o);
                        break;
                      }
                    for (i = n; i < r; i++)
                      if (t[i] > s) {
                        h = i + o;
                        break;
                      }
                    return {
                      xData: t.slice(a, h),
                      yData: e.slice(a, h),
                      start: a,
                      end: h,
                    };
                  },
                  generatePoints: function () {
                    var t,
                      e = this.options,
                      i = e.data,
                      s = this.data,
                      o = this.processedXData,
                      n = this.processedYData,
                      r = this.pointClass,
                      a = o.length,
                      h = this.cropStart || 0,
                      l = this.hasGroupedData;
                    e = e.keys;
                    var c,
                      d = [];
                    for (
                      s ||
                        l ||
                        (((s = []).length = i.length), (s = this.data = s)),
                        e && l && (this.options.keys = !1),
                        c = 0;
                      c < a;
                      c++
                    ) {
                      var p = h + c;
                      if (l) {
                        var f = new r().init(this, [o[c]].concat(A(n[c])));
                        (f.dataGroup = this.groupMap[c]),
                          f.dataGroup.options &&
                            ((f.options = f.dataGroup.options),
                            u(f, f.dataGroup.options),
                            delete f.dataLabels);
                      } else
                        (f = s[p]) ||
                          "undefined" === typeof i[p] ||
                          (s[p] = f = new r().init(this, i[p], o[c]));
                      f && ((f.index = p), (d[c] = f));
                    }
                    if (
                      ((this.options.keys = e),
                      s && (a !== (t = s.length) || l))
                    )
                      for (c = 0; c < t; c++)
                        c !== h || l || (c += a),
                          s[c] &&
                            (s[c].destroyElements(), (s[c].plotX = void 0));
                    (this.data = s),
                      (this.points = d),
                      g(this, "afterGeneratePoints");
                  },
                  getXExtremes: function (t) {
                    return { min: a(t), max: r(t) };
                  },
                  getExtremes: function (t, e) {
                    var i,
                      s = this.xAxis,
                      o = this.yAxis,
                      n = this.processedXData || this.xData,
                      h = [],
                      l = 0,
                      c = 0,
                      d = 0,
                      p = this.requireSorting ? this.cropShoulder : 0,
                      u = !!o && o.positiveValuesOnly;
                    for (
                      o = (t =
                        t || this.stackedYData || this.processedYData || [])
                        .length,
                        s && ((c = (d = s.getExtremes()).min), (d = d.max)),
                        i = 0;
                      i < o;
                      i++
                    ) {
                      var f = n[i],
                        m = t[i],
                        v = (x(m) || y(m)) && (m.length || 0 < m || !u);
                      if (
                        ((f =
                          e ||
                          this.getExtremesFromAll ||
                          this.options.getExtremesFromAll ||
                          this.cropped ||
                          !s ||
                          ((n[i + p] || f) >= c && (n[i - p] || f) <= d)),
                        v && f)
                      )
                        if ((v = m.length))
                          for (; v--; ) x(m[v]) && (h[l++] = m[v]);
                        else h[l++] = m;
                    }
                    return (
                      (t = { dataMin: a(h), dataMax: r(h) }),
                      g(this, "afterGetExtremes", { dataExtremes: t }),
                      t
                    );
                  },
                  applyExtremes: function () {
                    var t = this.getExtremes();
                    return (
                      (this.dataMin = t.dataMin), (this.dataMax = t.dataMax), t
                    );
                  },
                  getFirstValidPoint: function (t) {
                    for (
                      var e = null, i = t.length, s = 0;
                      null === e && s < i;

                    )
                      (e = t[s]), s++;
                    return e;
                  },
                  translate: function () {
                    this.processedXData || this.processData(),
                      this.generatePoints();
                    var t,
                      e,
                      i = this.options,
                      s = i.stacking,
                      o = this.xAxis,
                      n = o.categories,
                      r = this.enabledDataSorting,
                      a = this.yAxis,
                      d = this.points,
                      p = d.length,
                      u = !!this.modifyValue,
                      f = this.pointPlacementToXValue(),
                      m = !!f,
                      v = i.threshold,
                      b = i.startFromThreshold ? v : 0,
                      k = this.zoneAxis || "y",
                      M = Number.MAX_VALUE;
                    for (t = 0; t < p; t++) {
                      var S = d[t],
                        T = S.x,
                        A = S.y,
                        P = S.low,
                        L =
                          s &&
                          a.stacking &&
                          a.stacking.stacks[
                            (this.negStacks && A < (b ? 0 : v) ? "-" : "") +
                              this.stackKey
                          ];
                      if (
                        (a.positiveValuesOnly &&
                          null !== A &&
                          0 >= A &&
                          (S.isNull = !0),
                        (S.plotX = e =
                          l(
                            h(
                              o.translate(
                                T,
                                0,
                                0,
                                0,
                                1,
                                f,
                                "flags" === this.type,
                              ),
                              -1e5,
                              1e5,
                            ),
                          )),
                        s && this.visible && L && L[T])
                      ) {
                        var C = this.getStackIndicator(C, T, this.index);
                        if (!S.isNull)
                          var O = L[T],
                            E = O.points[C.key];
                      }
                      if (
                        (y(E) &&
                          ((P = E[0]),
                          (A = E[1]),
                          P === b &&
                            C.key === L[T].base &&
                            (P = w(x(v) && v, a.min)),
                          a.positiveValuesOnly && 0 >= P && (P = null),
                          (S.total = S.stackTotal = O.total),
                          (S.percentage = O.total && (S.y / O.total) * 100),
                          (S.stackY = A),
                          this.irregularWidths ||
                            O.setOffset(
                              this.pointXOffset || 0,
                              this.barW || 0,
                            )),
                        (S.yBottom = c(P)
                          ? h(a.translate(P, 0, 1, 0, 1), -1e5, 1e5)
                          : null),
                        u && (A = this.modifyValue(A, S)),
                        (S.plotY =
                          "number" === typeof A && 1 / 0 !== A
                            ? h(a.translate(A, 0, 1, 0, 1), -1e5, 1e5)
                            : void 0),
                        (S.isInside = this.isPointInside(S)),
                        (S.clientX = m ? l(o.translate(T, 0, 0, 0, 1, f)) : e),
                        (S.negative = S[k] < (i[k + "Threshold"] || v || 0)),
                        (S.category =
                          n && "undefined" !== typeof n[S.x] ? n[S.x] : S.x),
                        !S.isNull && !1 !== S.visible)
                      ) {
                        "undefined" !== typeof D &&
                          (M = Math.min(M, Math.abs(e - D)));
                        var D = e;
                      }
                      (S.zone = this.zones.length && S.getZone()),
                        !S.graphic && this.group && r && (S.isNew = !0);
                    }
                    (this.closestPointRangePx = M), g(this, "afterTranslate");
                  },
                  getValidPoints: function (t, e, i) {
                    var s = this.chart;
                    return (t || this.points || []).filter(function (t) {
                      return (
                        !(e && !s.isInsidePlot(t.plotX, t.plotY, s.inverted)) &&
                        !1 !== t.visible &&
                        (i || !t.isNull)
                      );
                    });
                  },
                  getClipBox: function (t, e) {
                    var i = this.options,
                      s = this.chart,
                      o = s.inverted,
                      n = this.xAxis,
                      r = n && this.yAxis;
                    return (
                      t && !1 === i.clip && r
                        ? (t = o
                            ? {
                                y: -s.chartWidth + r.len + r.pos,
                                height: s.chartWidth,
                                width: s.chartHeight,
                                x: -s.chartHeight + n.len + n.pos,
                              }
                            : {
                                y: -r.pos,
                                height: s.chartHeight,
                                width: s.chartWidth,
                                x: -n.pos,
                              })
                        : ((t = this.clipBox || s.clipBox),
                          e && ((t.width = s.plotSizeX), (t.x = 0))),
                      e ? { width: t.width, x: t.x } : t
                    );
                  },
                  setClip: function (t) {
                    var e = this.chart,
                      i = this.options,
                      s = e.renderer,
                      o = e.inverted,
                      n = this.clipBox,
                      r = this.getClipBox(t),
                      a =
                        this.sharedClipKey ||
                        [
                          "_sharedClip",
                          t && t.duration,
                          t && t.easing,
                          r.height,
                          i.xAxis,
                          i.yAxis,
                        ].join(),
                      h = e[a],
                      l = e[a + "m"];
                    t &&
                      ((r.width = 0),
                      o &&
                        (r.x = e.plotHeight + (!1 !== i.clip ? 0 : e.plotTop))),
                      h
                        ? e.hasLoaded || h.attr(r)
                        : (t &&
                            (e[a + "m"] = l =
                              s.clipRect(
                                o ? e.plotSizeX + 99 : -99,
                                o ? -e.plotLeft : -e.plotTop,
                                99,
                                o ? e.chartWidth : e.chartHeight,
                              )),
                          (e[a] = h = s.clipRect(r)),
                          (h.count = { length: 0 })),
                      t &&
                        !h.count[this.index] &&
                        ((h.count[this.index] = !0), (h.count.length += 1)),
                      (!1 !== i.clip || t) &&
                        (this.group.clip(t || n ? h : e.clipRect),
                        this.markerGroup.clip(l),
                        (this.sharedClipKey = a)),
                      t ||
                        (h.count[this.index] &&
                          (delete h.count[this.index], --h.count.length),
                        0 === h.count.length &&
                          a &&
                          e[a] &&
                          (n || (e[a] = e[a].destroy()),
                          e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())));
                  },
                  animate: function (t) {
                    var e = this.chart,
                      i = n(this.options.animation);
                    if (!e.hasRendered)
                      if (t) this.setClip(i);
                      else {
                        var s = this.sharedClipKey;
                        t = e[s];
                        var o = this.getClipBox(i, !0);
                        t && t.animate(o, i),
                          e[s + "m"] &&
                            e[s + "m"].animate(
                              {
                                width: o.width + 99,
                                x: o.x - (e.inverted ? 0 : 99),
                              },
                              i,
                            );
                      }
                  },
                  afterAnimate: function () {
                    this.setClip(),
                      g(this, "afterAnimate"),
                      (this.finishedAnimating = !0);
                  },
                  drawPoints: function () {
                    var t,
                      e,
                      i = this.points,
                      s = this.chart,
                      o = this.options.marker,
                      n = this[this.specialGroup] || this.markerGroup,
                      r = this.xAxis,
                      a = w(
                        o.enabled,
                        !(r && !r.isRadial) || null,
                        this.closestPointRangePx >=
                          o.enabledThreshold * o.radius,
                      );
                    if (!1 !== o.enabled || this._hasPointMarkers)
                      for (t = 0; t < i.length; t++) {
                        var h = i[t],
                          l = (e = h.graphic) ? "animate" : "attr",
                          c = h.marker || {},
                          d = !!h.marker;
                        if (
                          ((a && "undefined" === typeof c.enabled) ||
                            c.enabled) &&
                          !h.isNull &&
                          !1 !== h.visible
                        ) {
                          var p = w(c.symbol, this.symbol),
                            u = this.markerAttribs(h, h.selected && "select");
                          this.enabledDataSorting &&
                            (h.startXPos = r.reversed ? -u.width : r.width);
                          var f = !1 !== h.isInside;
                          e
                            ? e[f ? "show" : "hide"](f).animate(u)
                            : f &&
                              (0 < u.width || h.hasImage) &&
                              ((h.graphic = e =
                                s.renderer
                                  .symbol(
                                    p,
                                    u.x,
                                    u.y,
                                    u.width,
                                    u.height,
                                    d ? c : o,
                                  )
                                  .add(n)),
                              this.enabledDataSorting &&
                                s.hasRendered &&
                                (e.attr({ x: h.startXPos }), (l = "animate"))),
                            e &&
                              "animate" === l &&
                              e[f ? "show" : "hide"](f).animate(u),
                            e &&
                              !s.styledMode &&
                              e[l](
                                this.pointAttribs(h, h.selected && "select"),
                              ),
                            e && e.addClass(h.getClassName(), !0);
                        } else e && (h.graphic = e.destroy());
                      }
                  },
                  markerAttribs: function (t, e) {
                    var i = this.options,
                      s = i.marker,
                      o = t.marker || {},
                      n = o.symbol || s.symbol,
                      r = w(o.radius, s.radius);
                    return (
                      e &&
                        ((s = s.states[e]),
                        (e = o.states && o.states[e]),
                        (r = w(
                          e && e.radius,
                          s && s.radius,
                          r + ((s && s.radiusPlus) || 0),
                        ))),
                      (t.hasImage = n && 0 === n.indexOf("url")),
                      t.hasImage && (r = 0),
                      (t = {
                        x: i.crisp ? Math.floor(t.plotX) - r : t.plotX - r,
                        y: t.plotY - r,
                      }),
                      r && (t.width = t.height = 2 * r),
                      t
                    );
                  },
                  pointAttribs: function (t, e) {
                    var i = this.options.marker,
                      s = t && t.options,
                      o = (s && s.marker) || {},
                      n = this.color,
                      r = s && s.color,
                      a = t && t.color;
                    s = w(o.lineWidth, i.lineWidth);
                    var h = t && t.zone && t.zone.color;
                    return (
                      (t = 1),
                      (n = r || h || a || n),
                      (r = o.fillColor || i.fillColor || n),
                      (n = o.lineColor || i.lineColor || n),
                      (e = e || "normal"),
                      (i = i.states[e]),
                      (e = (o.states && o.states[e]) || {}),
                      (s = w(
                        e.lineWidth,
                        i.lineWidth,
                        s + w(e.lineWidthPlus, i.lineWidthPlus, 0),
                      )),
                      (r = e.fillColor || i.fillColor || r),
                      {
                        stroke: (n = e.lineColor || i.lineColor || n),
                        "stroke-width": s,
                        fill: r,
                        opacity: (t = w(e.opacity, i.opacity, t)),
                      }
                    );
                  },
                  destroy: function (t) {
                    var e,
                      i,
                      o,
                      n = this,
                      r = n.chart,
                      a = /AppleWebKit\/533/.test(D.navigator.userAgent),
                      h = n.data || [];
                    for (
                      g(n, "destroy"),
                        this.removeEvents(t),
                        (n.axisTypes || []).forEach(function (t) {
                          (o = n[t]) &&
                            o.series &&
                            (d(o.series, n), (o.isDirty = o.forceRedraw = !0));
                        }),
                        n.legendItem && n.chart.legend.destroyItem(n),
                        e = h.length;
                      e--;

                    )
                      (i = h[e]) && i.destroy && i.destroy();
                    (n.points = null),
                      s.clearTimeout(n.animationTimeout),
                      M(n, function (t, e) {
                        t instanceof E &&
                          !t.survive &&
                          t[a && "group" === e ? "hide" : "destroy"]();
                      }),
                      r.hoverSeries === n && (r.hoverSeries = null),
                      d(r.series, n),
                      r.orderSeries(),
                      M(n, function (e, i) {
                        (t && "hcEvents" === i) || delete n[i];
                      });
                  },
                  getGraphPath: function (t, e, i) {
                    var s,
                      o,
                      n = this,
                      r = n.options,
                      a = r.step,
                      h = [],
                      l = [];
                    return (
                      (s = (t = t || n.points).reversed) && t.reverse(),
                      (a = { right: 1, center: 2 }[a] || (a && 3)) &&
                        s &&
                        (a = 4 - a),
                      (t = this.getValidPoints(
                        t,
                        !1,
                        !(r.connectNulls && !e && !i),
                      )).forEach(function (s, d) {
                        var p = s.plotX,
                          u = s.plotY,
                          f = t[d - 1];
                        (s.leftCliff || (f && f.rightCliff)) && !i && (o = !0),
                          s.isNull && !c(e) && 0 < d
                            ? (o = !r.connectNulls)
                            : s.isNull && !e
                              ? (o = !0)
                              : (0 === d || o
                                  ? (d = [["M", s.plotX, s.plotY]])
                                  : n.getPointSpline
                                    ? (d = [n.getPointSpline(t, s, d)])
                                    : a
                                      ? (d =
                                          1 === a
                                            ? [["L", f.plotX, u]]
                                            : 2 === a
                                              ? [
                                                  [
                                                    "L",
                                                    (f.plotX + p) / 2,
                                                    f.plotY,
                                                  ],
                                                  ["L", (f.plotX + p) / 2, u],
                                                ]
                                              : [["L", p, f.plotY]]).push([
                                          "L",
                                          p,
                                          u,
                                        ])
                                      : (d = [["L", p, u]]),
                                l.push(s.x),
                                a && (l.push(s.x), 2 === a && l.push(s.x)),
                                h.push.apply(h, d),
                                (o = !1));
                      }),
                      (h.xMap = l),
                      (n.graphPath = h)
                    );
                  },
                  drawGraph: function () {
                    var t = this,
                      e = this.options,
                      i = (this.gappedPath || this.getGraphPath).call(this),
                      s = this.chart.styledMode,
                      o = [["graph", "highcharts-graph"]];
                    s ||
                      o[0].push(
                        e.lineColor || this.color || "#cccccc",
                        e.dashStyle,
                      ),
                      (o = t.getZonesGraphs(o)).forEach(function (o, n) {
                        var r = o[0],
                          a = t[r],
                          h = a ? "animate" : "attr";
                        a
                          ? ((a.endX = t.preventGraphAnimation ? null : i.xMap),
                            a.animate({ d: i }))
                          : i.length &&
                            (t[r] = a =
                              t.chart.renderer
                                .path(i)
                                .addClass(o[1])
                                .attr({ zIndex: 1 })
                                .add(t.group)),
                          a &&
                            !s &&
                            ((r = {
                              stroke: o[2],
                              "stroke-width": e.lineWidth,
                              fill: (t.fillGraph && t.color) || "none",
                            }),
                            o[3]
                              ? (r.dashstyle = o[3])
                              : "square" !== e.linecap &&
                                (r["stroke-linecap"] = r["stroke-linejoin"] =
                                  "round"),
                            a[h](r).shadow(2 > n && e.shadow)),
                          a && ((a.startX = i.xMap), (a.isArea = i.isArea));
                      });
                  },
                  getZonesGraphs: function (t) {
                    return (
                      this.zones.forEach(function (e, i) {
                        (i = [
                          "zone-graph-" + i,
                          "highcharts-graph highcharts-zone-graph-" +
                            i +
                            " " +
                            (e.className || ""),
                        ]),
                          this.chart.styledMode ||
                            i.push(
                              e.color || this.color,
                              e.dashStyle || this.options.dashStyle,
                            ),
                          t.push(i);
                      }, this),
                      t
                    );
                  },
                  applyZones: function () {
                    var t,
                      e,
                      i,
                      s,
                      o,
                      n,
                      r,
                      a,
                      l = this,
                      c = this.chart,
                      d = c.renderer,
                      p = this.zones,
                      u = this.clips || [],
                      f = this.graph,
                      g = this.area,
                      m = Math.max(c.chartWidth, c.chartHeight),
                      y = this[(this.zoneAxis || "y") + "Axis"],
                      v = c.inverted,
                      x = !1;
                    if (
                      p.length &&
                      (f || g) &&
                      y &&
                      "undefined" !== typeof y.min
                    ) {
                      var b = y.reversed,
                        k = y.horiz;
                      f && !this.showLine && f.hide(), g && g.hide();
                      var M = y.getExtremes();
                      p.forEach(function (p, S) {
                        (t = b
                          ? k
                            ? c.plotWidth
                            : 0
                          : k
                            ? 0
                            : y.toPixels(M.min) || 0),
                          (t = h(w(e, t), 0, m)),
                          (e = h(
                            Math.round(y.toPixels(w(p.value, M.max), !0) || 0),
                            0,
                            m,
                          )),
                          x && (t = e = y.toPixels(M.max)),
                          (s = Math.abs(t - e)),
                          (o = Math.min(t, e)),
                          (n = Math.max(t, e)),
                          y.isXAxis
                            ? ((i = {
                                x: v ? n : o,
                                y: 0,
                                width: s,
                                height: m,
                              }),
                              k || (i.x = c.plotHeight - i.x))
                            : ((i = {
                                x: 0,
                                y: v ? n : o,
                                width: m,
                                height: s,
                              }),
                              k && (i.y = c.plotWidth - i.y)),
                          v &&
                            d.isVML &&
                            (i = y.isXAxis
                              ? {
                                  x: 0,
                                  y: b ? o : n,
                                  height: i.width,
                                  width: c.chartWidth,
                                }
                              : {
                                  x: i.y - c.plotLeft - c.spacingBox.x,
                                  y: 0,
                                  width: i.height,
                                  height: c.chartHeight,
                                }),
                          u[S] ? u[S].animate(i) : (u[S] = d.clipRect(i)),
                          (r = l["zone-area-" + S]),
                          (a = l["zone-graph-" + S]),
                          f && a && a.clip(u[S]),
                          g && r && r.clip(u[S]),
                          (x = p.value > M.max),
                          l.resetZones && 0 === e && (e = void 0);
                      }),
                        (this.clips = u);
                    } else l.visible && (f && f.show(!0), g && g.show(!0));
                  },
                  invertGroups: function (t) {
                    function e() {
                      ["group", "markerGroup"].forEach(function (e) {
                        i[e] &&
                          (s.renderer.isVML &&
                            i[e].attr({
                              width: i.yAxis.len,
                              height: i.xAxis.len,
                            }),
                          (i[e].width = i.yAxis.len),
                          (i[e].height = i.xAxis.len),
                          i[e].invert(!i.isRadialSeries && t));
                      });
                    }
                    var i = this,
                      s = i.chart;
                    i.xAxis &&
                      (i.eventsToUnbind.push(o(s, "resize", e)),
                      e(),
                      (i.invertGroups = e));
                  },
                  plotGroup: function (t, e, i, s, o) {
                    var n = this[t],
                      r = !n;
                    return (
                      r &&
                        (this[t] = n =
                          this.chart.renderer
                            .g()
                            .attr({ zIndex: s || 0.1 })
                            .add(o)),
                      n.addClass(
                        "highcharts-" +
                          e +
                          " highcharts-series-" +
                          this.index +
                          " highcharts-" +
                          this.type +
                          "-series " +
                          (c(this.colorIndex)
                            ? "highcharts-color-" + this.colorIndex + " "
                            : "") +
                          (this.options.className || "") +
                          (n.hasClass("highcharts-tracker")
                            ? " highcharts-tracker"
                            : ""),
                        !0,
                      ),
                      n
                        .attr({ visibility: i })
                        [r ? "attr" : "animate"](this.getPlotBox()),
                      n
                    );
                  },
                  getPlotBox: function () {
                    var t = this.chart,
                      e = this.xAxis,
                      i = this.yAxis;
                    return (
                      t.inverted && ((e = i), (i = this.xAxis)),
                      {
                        translateX: e ? e.left : t.plotLeft,
                        translateY: i ? i.top : t.plotTop,
                        scaleX: 1,
                        scaleY: 1,
                      }
                    );
                  },
                  removeEvents: function (t) {
                    t
                      ? this.eventsToUnbind.length &&
                        (this.eventsToUnbind.forEach(function (t) {
                          t();
                        }),
                        (this.eventsToUnbind.length = 0))
                      : S(this);
                  },
                  render: function () {
                    var t = this,
                      e = t.chart,
                      i = t.options,
                      s =
                        !t.finishedAnimating &&
                        e.renderer.isSVG &&
                        n(i.animation).duration,
                      o = t.visible ? "inherit" : "hidden",
                      r = i.zIndex,
                      a = t.hasRendered,
                      h = e.seriesGroup,
                      l = e.inverted;
                    g(this, "render");
                    var c = t.plotGroup("group", "series", o, r, h);
                    (t.markerGroup = t.plotGroup(
                      "markerGroup",
                      "markers",
                      o,
                      r,
                      h,
                    )),
                      s && t.animate && t.animate(!0),
                      (c.inverted = !(!t.isCartesian && !t.invertable) && l),
                      t.drawGraph && (t.drawGraph(), t.applyZones()),
                      t.visible && t.drawPoints(),
                      t.drawDataLabels && t.drawDataLabels(),
                      t.redrawPoints && t.redrawPoints(),
                      t.drawTracker &&
                        !1 !== t.options.enableMouseTracking &&
                        t.drawTracker(),
                      t.invertGroups(l),
                      !1 === i.clip ||
                        t.sharedClipKey ||
                        a ||
                        c.clip(e.clipRect),
                      s && t.animate && t.animate(),
                      a ||
                        (t.animationTimeout = P(function () {
                          t.afterAnimate();
                        }, s || 0)),
                      (t.isDirty = !1),
                      (t.hasRendered = !0),
                      g(t, "afterRender");
                  },
                  redraw: function () {
                    var t = this.chart,
                      e = this.isDirty || this.isDirtyData,
                      i = this.group,
                      s = this.xAxis,
                      o = this.yAxis;
                    i &&
                      (t.inverted &&
                        i.attr({ width: t.plotWidth, height: t.plotHeight }),
                      i.animate({
                        translateX: w(s && s.left, t.plotLeft),
                        translateY: w(o && o.top, t.plotTop),
                      })),
                      this.translate(),
                      this.render(),
                      e && delete this.kdTree;
                  },
                  kdAxisArray: ["clientX", "plotY"],
                  searchPoint: function (t, e) {
                    var i = this.xAxis,
                      s = this.yAxis,
                      o = this.chart.inverted;
                    return this.searchKDTree(
                      {
                        clientX: o
                          ? i.len - t.chartY + i.pos
                          : t.chartX - i.pos,
                        plotY: o ? s.len - t.chartX + s.pos : t.chartY - s.pos,
                      },
                      e,
                      t,
                    );
                  },
                  buildKDTree: function (t) {
                    this.buildingKdTree = !0;
                    var e = this,
                      i =
                        -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                    delete e.kdTree,
                      P(
                        function () {
                          (e.kdTree = (function t(i, s, o) {
                            var n;
                            if ((n = i && i.length)) {
                              var r = e.kdAxisArray[s % o];
                              return (
                                i.sort(function (t, e) {
                                  return t[r] - e[r];
                                }),
                                {
                                  point: i[(n = Math.floor(n / 2))],
                                  left: t(i.slice(0, n), s + 1, o),
                                  right: t(i.slice(n + 1), s + 1, o),
                                }
                              );
                            }
                          })(e.getValidPoints(null, !e.directTouch), i, i)),
                            (e.buildingKdTree = !1);
                        },
                        e.options.kdNow || (t && "touchstart" === t.type)
                          ? 0
                          : 1,
                      );
                  },
                  searchKDTree: function (t, e, i) {
                    var s = this,
                      o = this.kdAxisArray[0],
                      n = this.kdAxisArray[1],
                      r = e ? "distX" : "dist";
                    if (
                      ((e =
                        -1 < s.options.findNearestPointBy.indexOf("y") ? 2 : 1),
                      this.kdTree || this.buildingKdTree || this.buildKDTree(i),
                      this.kdTree)
                    )
                      return (function t(e, i, a, h) {
                        var l = i.point,
                          d = s.kdAxisArray[a % h],
                          p = l,
                          u =
                            c(e[o]) && c(l[o])
                              ? Math.pow(e[o] - l[o], 2)
                              : null,
                          f =
                            c(e[n]) && c(l[n])
                              ? Math.pow(e[n] - l[n], 2)
                              : null;
                        return (
                          (f = (u || 0) + (f || 0)),
                          (l.dist = c(f) ? Math.sqrt(f) : Number.MAX_VALUE),
                          (l.distX = c(u) ? Math.sqrt(u) : Number.MAX_VALUE),
                          (u = 0 > (d = e[d] - l[d]) ? "right" : "left"),
                          i[(f = 0 > d ? "left" : "right")] &&
                            (p = (f = t(e, i[f], a + 1, h))[r] < p[r] ? f : l),
                          i[u] &&
                            Math.sqrt(d * d) < p[r] &&
                            (p = (e = t(e, i[u], a + 1, h))[r] < p[r] ? e : p),
                          p
                        );
                      })(t, this.kdTree, e, e);
                  },
                  pointPlacementToXValue: function () {
                    var t = this.options,
                      e = t.pointRange,
                      i = this.xAxis;
                    return (
                      "between" === (t = t.pointPlacement) &&
                        (t = i.reversed ? -0.5 : 0.5),
                      x(t) ? t * w(e, i.pointRange) : 0
                    );
                  },
                  isPointInside: function (t) {
                    return (
                      "undefined" !== typeof t.plotY &&
                      "undefined" !== typeof t.plotX &&
                      0 <= t.plotY &&
                      t.plotY <= this.yAxis.len &&
                      0 <= t.plotX &&
                      t.plotX <= this.xAxis.len
                    );
                  },
                },
              );
            },
          ),
          e(
            i,
            "parts/Stacking.js",
            [
              i["parts/Axis.js"],
              i["parts/Globals.js"],
              i["parts/StackingAxis.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = s.correctFloat,
                n = s.defined,
                r = s.destroyObjectProperties,
                a = s.format,
                h = s.pick;
              s = e.Chart;
              var l = e.Series,
                c = (function () {
                  function t(t, e, i, s, o) {
                    var n = t.chart.inverted;
                    (this.axis = t),
                      (this.isNegative = i),
                      (this.options = e = e || {}),
                      (this.x = s),
                      (this.total = null),
                      (this.points = {}),
                      (this.stack = o),
                      (this.rightCliff = this.leftCliff = 0),
                      (this.alignOptions = {
                        align:
                          e.align || (n ? (i ? "left" : "right") : "center"),
                        verticalAlign:
                          e.verticalAlign ||
                          (n ? "middle" : i ? "bottom" : "top"),
                        y: e.y,
                        x: e.x,
                      }),
                      (this.textAlign =
                        e.textAlign || (n ? (i ? "right" : "left") : "center"));
                  }
                  return (
                    (t.prototype.destroy = function () {
                      r(this, this.axis);
                    }),
                    (t.prototype.render = function (t) {
                      var e = this.axis.chart,
                        i = this.options,
                        s = i.format;
                      (s = s ? a(s, this, e) : i.formatter.call(this)),
                        this.label
                          ? this.label.attr({ text: s, visibility: "hidden" })
                          : ((this.label = e.renderer.label(
                              s,
                              null,
                              null,
                              i.shape,
                              null,
                              null,
                              i.useHTML,
                              !1,
                              "stack-labels",
                            )),
                            (s = {
                              r: i.borderRadius || 0,
                              text: s,
                              rotation: i.rotation,
                              padding: h(i.padding, 5),
                              visibility: "hidden",
                            }),
                            e.styledMode ||
                              ((s.fill = i.backgroundColor),
                              (s.stroke = i.borderColor),
                              (s["stroke-width"] = i.borderWidth),
                              this.label.css(i.style)),
                            this.label.attr(s),
                            this.label.added || this.label.add(t)),
                        (this.label.labelrank = e.plotHeight);
                    }),
                    (t.prototype.setOffset = function (t, e, i, s, o) {
                      var r = this.axis,
                        a = r.chart;
                      (s = r.translate(
                        r.stacking.usePercentage ? 100 : s || this.total,
                        0,
                        0,
                        0,
                        1,
                      )),
                        (i = r.translate(i || 0)),
                        (i = n(s) && Math.abs(s - i)),
                        (t = h(o, a.xAxis[0].translate(this.x)) + t),
                        (r = n(s) && this.getStackBox(a, this, t, s, e, i, r)),
                        (e = this.label),
                        (i = this.isNegative),
                        (t = "justify" === h(this.options.overflow, "justify"));
                      var c = this.textAlign;
                      e &&
                        r &&
                        ((o = e.getBBox()),
                        (s = e.padding),
                        (c =
                          "left" === c
                            ? a.inverted
                              ? -s
                              : s
                            : "right" === c
                              ? o.width
                              : a.inverted && "center" === c
                                ? o.width / 2
                                : a.inverted
                                  ? i
                                    ? o.width + s
                                    : -s
                                  : o.width / 2),
                        (i = a.inverted ? o.height / 2 : i ? -s : o.height),
                        (this.alignOptions.x = h(this.options.x, 0)),
                        (this.alignOptions.y = h(this.options.y, 0)),
                        (r.x -= c),
                        (r.y -= i),
                        e.align(this.alignOptions, null, r),
                        a.isInsidePlot(
                          e.alignAttr.x + c - this.alignOptions.x,
                          e.alignAttr.y + i - this.alignOptions.y,
                        )
                          ? e.show()
                          : ((e.alignAttr.y = -9999), (t = !1)),
                        t &&
                          l.prototype.justifyDataLabel.call(
                            this.axis,
                            e,
                            this.alignOptions,
                            e.alignAttr,
                            o,
                            r,
                          ),
                        e.attr({ x: e.alignAttr.x, y: e.alignAttr.y }),
                        h(!t && this.options.crop, !0) &&
                          ((a =
                            a.isInsidePlot(e.x - s + e.width, e.y) &&
                            a.isInsidePlot(e.x + s, e.y)) ||
                            e.hide()));
                    }),
                    (t.prototype.getStackBox = function (t, e, i, s, o, n, r) {
                      var a = e.axis.reversed,
                        h = t.inverted,
                        l = r.height + r.pos - (h ? t.plotLeft : t.plotTop);
                      return (
                        (e = (e.isNegative && !a) || (!e.isNegative && a)),
                        {
                          x: h
                            ? e
                              ? s - r.right
                              : s - n + r.pos - t.plotLeft
                            : i + t.xAxis[0].transB - t.plotLeft,
                          y: h ? r.height - i - o : e ? l - s - n : l - s,
                          width: h ? n : o,
                          height: h ? o : n,
                        }
                      );
                    }),
                    t
                  );
                })();
              return (
                (s.prototype.getStacks = function () {
                  var t = this,
                    e = t.inverted;
                  t.yAxis.forEach(function (t) {
                    t.stacking &&
                      t.stacking.stacks &&
                      t.hasVisibleSeries &&
                      (t.stacking.oldStacks = t.stacking.stacks);
                  }),
                    t.series.forEach(function (i) {
                      var s = (i.xAxis && i.xAxis.options) || {};
                      !i.options.stacking ||
                        (!0 !== i.visible &&
                          !1 !== t.options.chart.ignoreHiddenSeries) ||
                        (i.stackKey = [
                          i.type,
                          h(i.options.stack, ""),
                          e ? s.top : s.left,
                          e ? s.height : s.width,
                        ].join());
                    });
                }),
                i.compose(t),
                (l.prototype.setStackedPoints = function () {
                  if (
                    this.options.stacking &&
                    (!0 === this.visible ||
                      !1 === this.chart.options.chart.ignoreHiddenSeries)
                  ) {
                    var t = this.processedXData,
                      e = this.processedYData,
                      i = [],
                      s = e.length,
                      r = this.options,
                      a = r.threshold,
                      l = h(r.startFromThreshold && a, 0),
                      d = r.stack;
                    r = r.stacking;
                    var p,
                      u,
                      f = this.stackKey,
                      g = "-" + f,
                      m = this.negStacks,
                      y = this.yAxis,
                      v = y.stacking.stacks,
                      x = y.stacking.oldStacks;
                    for (y.stacking.stacksTouched += 1, u = 0; u < s; u++) {
                      var b = t[u],
                        k = e[u],
                        M = this.getStackIndicator(M, b, this.index),
                        w = M.key,
                        S = (p = m && k < (l ? 0 : a)) ? g : f;
                      v[S] || (v[S] = {}),
                        v[S][b] ||
                          (x[S] && x[S][b]
                            ? ((v[S][b] = x[S][b]), (v[S][b].total = null))
                            : (v[S][b] = new c(
                                y,
                                y.options.stackLabels,
                                p,
                                b,
                                d,
                              ))),
                        (S = v[S][b]),
                        null !== k
                          ? ((S.points[w] = S.points[this.index] =
                              [h(S.cumulative, l)]),
                            n(S.cumulative) || (S.base = w),
                            (S.touched = y.stacking.stacksTouched),
                            0 < M.index &&
                              !1 === this.singleStacks &&
                              (S.points[w][0] =
                                S.points[this.index + "," + b + ",0"][0]))
                          : (S.points[w] = S.points[this.index] = null),
                        "percent" === r
                          ? ((p = p ? f : g),
                            m && v[p] && v[p][b]
                              ? ((p = v[p][b]),
                                (S.total = p.total =
                                  Math.max(p.total, S.total) + Math.abs(k) ||
                                  0))
                              : (S.total = o(S.total + (Math.abs(k) || 0))))
                          : (S.total = o(S.total + (k || 0))),
                        (S.cumulative = h(S.cumulative, l) + (k || 0)),
                        null !== k &&
                          (S.points[w].push(S.cumulative),
                          (i[u] = S.cumulative));
                    }
                    "percent" === r && (y.stacking.usePercentage = !0),
                      (this.stackedYData = i),
                      (y.stacking.oldStacks = {});
                  }
                }),
                (l.prototype.modifyStacks = function () {
                  var t,
                    e = this,
                    i = e.stackKey,
                    s = e.yAxis.stacking.stacks,
                    o = e.processedXData,
                    n = e.options.stacking;
                  e[n + "Stacker"] &&
                    [i, "-" + i].forEach(function (i) {
                      for (var r, a, h = o.length; h--; )
                        (r = o[h]),
                          (t = e.getStackIndicator(t, r, e.index, i)),
                          (a = (r = s[i] && s[i][r]) && r.points[t.key]) &&
                            e[n + "Stacker"](a, r, h);
                    });
                }),
                (l.prototype.percentStacker = function (t, e, i) {
                  (e = e.total ? 100 / e.total : 0),
                    (t[0] = o(t[0] * e)),
                    (t[1] = o(t[1] * e)),
                    (this.stackedYData[i] = t[1]);
                }),
                (l.prototype.getStackIndicator = function (t, e, i, s) {
                  return (
                    !n(t) || t.x !== e || (s && t.key !== s)
                      ? (t = { x: e, index: 0, key: s })
                      : t.index++,
                    (t.key = [i, e, t.index].join()),
                    t
                  );
                }),
                (e.StackItem = c),
                e.StackItem
              );
            },
          ),
          e(
            i,
            "parts/Dynamics.js",
            [
              i["parts/Globals.js"],
              i["parts/Point.js"],
              i["parts/Time.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = s.addEvent,
                n = s.animate,
                r = s.createElement,
                a = s.css,
                h = s.defined,
                l = s.erase,
                c = s.error,
                d = s.extend,
                p = s.fireEvent,
                u = s.isArray,
                f = s.isNumber,
                g = s.isObject,
                m = s.isString,
                y = s.merge,
                v = s.objectEach,
                x = s.pick,
                b = s.relativeLength,
                k = s.setAnimation,
                M = s.splat,
                w = t.Axis;
              s = t.Chart;
              var S = t.Series,
                T = t.seriesTypes;
              (t.cleanRecursively = function (e, i) {
                var s = {};
                return (
                  v(e, function (o, n) {
                    g(e[n], !0) && !e.nodeType && i[n]
                      ? ((o = t.cleanRecursively(e[n], i[n])),
                        Object.keys(o).length && (s[n] = o))
                      : (g(e[n]) || e[n] !== i[n]) && (s[n] = e[n]);
                  }),
                  s
                );
              }),
                d(s.prototype, {
                  addSeries: function (t, e, i) {
                    var s,
                      o = this;
                    return (
                      t &&
                        ((e = x(e, !0)),
                        p(o, "addSeries", { options: t }, function () {
                          (s = o.initSeries(t)),
                            (o.isDirtyLegend = !0),
                            o.linkSeries(),
                            s.enabledDataSorting && s.setData(t.data, !1),
                            p(o, "afterAddSeries", { series: s }),
                            e && o.redraw(i);
                        })),
                      s
                    );
                  },
                  addAxis: function (t, e, i, s) {
                    return this.createAxis(e ? "xAxis" : "yAxis", {
                      axis: t,
                      redraw: i,
                      animation: s,
                    });
                  },
                  addColorAxis: function (t, e, i) {
                    return this.createAxis("colorAxis", {
                      axis: t,
                      redraw: e,
                      animation: i,
                    });
                  },
                  createAxis: function (e, i) {
                    var s = this.options,
                      o = "colorAxis" === e,
                      n = i.redraw,
                      r = i.animation;
                    i = y(i.axis, {
                      index: this[e].length,
                      isX: "xAxis" === e,
                    });
                    var a = o ? new t.ColorAxis(this, i) : new w(this, i);
                    return (
                      (s[e] = M(s[e] || {})),
                      s[e].push(i),
                      o &&
                        ((this.isDirtyLegend = !0),
                        this.axes.forEach(function (t) {
                          t.series = [];
                        }),
                        this.series.forEach(function (t) {
                          t.bindAxes(), (t.isDirtyData = !0);
                        })),
                      x(n, !0) && this.redraw(r),
                      a
                    );
                  },
                  showLoading: function (t) {
                    var e = this,
                      i = e.options,
                      s = e.loadingDiv,
                      h = i.loading,
                      l = function () {
                        s &&
                          a(s, {
                            left: e.plotLeft + "px",
                            top: e.plotTop + "px",
                            width: e.plotWidth + "px",
                            height: e.plotHeight + "px",
                          });
                      };
                    s ||
                      ((e.loadingDiv = s =
                        r(
                          "div",
                          {
                            className:
                              "highcharts-loading highcharts-loading-hidden",
                          },
                          null,
                          e.container,
                        )),
                      (e.loadingSpan = r(
                        "span",
                        { className: "highcharts-loading-inner" },
                        null,
                        s,
                      )),
                      o(e, "redraw", l)),
                      (s.className = "highcharts-loading"),
                      (e.loadingSpan.innerHTML = x(t, i.lang.loading, "")),
                      e.styledMode ||
                        (a(s, d(h.style, { zIndex: 10 })),
                        a(e.loadingSpan, h.labelStyle),
                        e.loadingShown ||
                          (a(s, { opacity: 0, display: "" }),
                          n(
                            s,
                            { opacity: h.style.opacity || 0.5 },
                            { duration: h.showDuration || 0 },
                          ))),
                      (e.loadingShown = !0),
                      l();
                  },
                  hideLoading: function () {
                    var t = this.options,
                      e = this.loadingDiv;
                    e &&
                      ((e.className =
                        "highcharts-loading highcharts-loading-hidden"),
                      this.styledMode ||
                        n(
                          e,
                          { opacity: 0 },
                          {
                            duration: t.loading.hideDuration || 100,
                            complete: function () {
                              a(e, { display: "none" });
                            },
                          },
                        )),
                      (this.loadingShown = !1);
                  },
                  propsRequireDirtyBox:
                    "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(
                      " ",
                    ),
                  propsRequireReflow:
                    "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(
                      " ",
                    ),
                  propsRequireUpdateSeries:
                    "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(
                      " ",
                    ),
                  collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
                  update: function (e, s, o, n) {
                    var r,
                      a,
                      l,
                      c = this,
                      d = {
                        credits: "addCredits",
                        title: "setTitle",
                        subtitle: "setSubtitle",
                        caption: "setCaption",
                      },
                      u = e.isResponsiveOptions,
                      g = [];
                    if (
                      (p(c, "update", { options: e }),
                      u || c.setResponsive(!1, !0),
                      (e = t.cleanRecursively(e, c.options)),
                      y(!0, c.userOptions, e),
                      (r = e.chart))
                    ) {
                      if (
                        (y(!0, c.options.chart, r),
                        "className" in r && c.setClassName(r.className),
                        "reflow" in r && c.setReflow(r.reflow),
                        "inverted" in r || "polar" in r || "type" in r)
                      ) {
                        c.propFromSeries();
                        var k = !0;
                      }
                      "alignTicks" in r && (k = !0),
                        v(r, function (t, e) {
                          -1 !==
                            c.propsRequireUpdateSeries.indexOf("chart." + e) &&
                            (a = !0),
                            -1 !== c.propsRequireDirtyBox.indexOf(e) &&
                              (c.isDirtyBox = !0),
                            u ||
                              -1 === c.propsRequireReflow.indexOf(e) ||
                              (l = !0);
                        }),
                        !c.styledMode &&
                          "style" in r &&
                          c.renderer.setStyle(r.style);
                    }
                    !c.styledMode &&
                      e.colors &&
                      (this.options.colors = e.colors),
                      e.plotOptions &&
                        y(!0, this.options.plotOptions, e.plotOptions),
                      e.time &&
                        this.time === t.time &&
                        (this.time = new i(e.time)),
                      v(e, function (t, e) {
                        c[e] && "function" === typeof c[e].update
                          ? c[e].update(t, !1)
                          : "function" === typeof c[d[e]] && c[d[e]](t),
                          "chart" !== e &&
                            -1 !== c.propsRequireUpdateSeries.indexOf(e) &&
                            (a = !0);
                      }),
                      this.collectionsWithUpdate.forEach(function (t) {
                        if (e[t]) {
                          if ("series" === t) {
                            var i = [];
                            c[t].forEach(function (t, e) {
                              t.options.isInternal ||
                                i.push(x(t.options.index, e));
                            });
                          }
                          M(e[t]).forEach(function (e, s) {
                            (s =
                              (h(e.id) && c.get(e.id)) || c[t][i ? i[s] : s]) &&
                              s.coll === t &&
                              (s.update(e, !1), o && (s.touched = !0)),
                              !s &&
                                o &&
                                c.collectionsWithInit[t] &&
                                (c.collectionsWithInit[t][0].apply(
                                  c,
                                  [e]
                                    .concat(c.collectionsWithInit[t][1] || [])
                                    .concat([!1]),
                                ).touched = !0);
                          }),
                            o &&
                              c[t].forEach(function (t) {
                                t.touched || t.options.isInternal
                                  ? delete t.touched
                                  : g.push(t);
                              });
                        }
                      }),
                      g.forEach(function (t) {
                        t.remove && t.remove(!1);
                      }),
                      k &&
                        c.axes.forEach(function (t) {
                          t.update({}, !1);
                        }),
                      a &&
                        c.getSeriesOrderByLinks().forEach(function (t) {
                          t.chart && t.update({}, !1);
                        }, this),
                      e.loading && y(!0, c.options.loading, e.loading),
                      (k = r && r.width),
                      (r = r && r.height),
                      m(r) && (r = b(r, k || c.chartWidth)),
                      l ||
                      (f(k) && k !== c.chartWidth) ||
                      (f(r) && r !== c.chartHeight)
                        ? c.setSize(k, r, n)
                        : x(s, !0) && c.redraw(n),
                      p(c, "afterUpdate", {
                        options: e,
                        redraw: s,
                        animation: n,
                      });
                  },
                  setSubtitle: function (t, e) {
                    this.applyDescription("subtitle", t), this.layOutTitles(e);
                  },
                  setCaption: function (t, e) {
                    this.applyDescription("caption", t), this.layOutTitles(e);
                  },
                }),
                (s.prototype.collectionsWithInit = {
                  xAxis: [s.prototype.addAxis, [!0]],
                  yAxis: [s.prototype.addAxis, [!1]],
                  series: [s.prototype.addSeries],
                }),
                d(e.prototype, {
                  update: function (t, e, i, s) {
                    function o() {
                      r.applyOptions(t);
                      var s = h && r.hasDummyGraphic;
                      (s = null === r.y ? !s : s),
                        h &&
                          s &&
                          ((r.graphic = h.destroy()), delete r.hasDummyGraphic),
                        g(t, !0) &&
                          (h &&
                            h.element &&
                            t &&
                            t.marker &&
                            "undefined" !== typeof t.marker.symbol &&
                            (r.graphic = h.destroy()),
                          t &&
                            t.dataLabels &&
                            r.dataLabel &&
                            (r.dataLabel = r.dataLabel.destroy()),
                          r.connector && (r.connector = r.connector.destroy())),
                        (n = r.index),
                        a.updateParallelArrays(r, n),
                        (c.data[n] =
                          g(c.data[n], !0) || g(t, !0)
                            ? r.options
                            : x(t, c.data[n])),
                        (a.isDirty = a.isDirtyData = !0),
                        !a.fixedBox &&
                          a.hasCartesianSeries &&
                          (l.isDirtyBox = !0),
                        "point" === c.legendType && (l.isDirtyLegend = !0),
                        e && l.redraw(i);
                    }
                    var n,
                      r = this,
                      a = r.series,
                      h = r.graphic,
                      l = a.chart,
                      c = a.options;
                    (e = x(e, !0)),
                      !1 === s
                        ? o()
                        : r.firePointEvent("update", { options: t }, o);
                  },
                  remove: function (t, e) {
                    this.series.removePoint(
                      this.series.data.indexOf(this),
                      t,
                      e,
                    );
                  },
                }),
                d(S.prototype, {
                  addPoint: function (t, e, i, s, o) {
                    var n = this.options,
                      r = this.data,
                      a = this.chart,
                      h = this.xAxis;
                    h = h && h.hasNames && h.names;
                    var l,
                      c = n.data,
                      d = this.xData;
                    e = x(e, !0);
                    var u = { series: this };
                    this.pointClass.prototype.applyOptions.apply(u, [t]);
                    var f = u.x,
                      g = d.length;
                    if (this.requireSorting && f < d[g - 1])
                      for (l = !0; g && d[g - 1] > f; ) g--;
                    this.updateParallelArrays(u, "splice", g, 0, 0),
                      this.updateParallelArrays(u, g),
                      h && u.name && (h[f] = u.name),
                      c.splice(g, 0, t),
                      l && (this.data.splice(g, 0, null), this.processData()),
                      "point" === n.legendType && this.generatePoints(),
                      i &&
                        (r[0] && r[0].remove
                          ? r[0].remove(!1)
                          : (r.shift(),
                            this.updateParallelArrays(u, "shift"),
                            c.shift())),
                      !1 !== o && p(this, "addPoint", { point: u }),
                      (this.isDirtyData = this.isDirty = !0),
                      e && a.redraw(s);
                  },
                  removePoint: function (t, e, i) {
                    var s = this,
                      o = s.data,
                      n = o[t],
                      r = s.points,
                      a = s.chart,
                      h = function () {
                        r && r.length === o.length && r.splice(t, 1),
                          o.splice(t, 1),
                          s.options.data.splice(t, 1),
                          s.updateParallelArrays(
                            n || { series: s },
                            "splice",
                            t,
                            1,
                          ),
                          n && n.destroy(),
                          (s.isDirty = !0),
                          (s.isDirtyData = !0),
                          e && a.redraw();
                      };
                    k(i, a),
                      (e = x(e, !0)),
                      n ? n.firePointEvent("remove", null, h) : h();
                  },
                  remove: function (t, e, i, s) {
                    function o() {
                      n.destroy(s),
                        (n.remove = null),
                        (r.isDirtyLegend = r.isDirtyBox = !0),
                        r.linkSeries(),
                        x(t, !0) && r.redraw(e);
                    }
                    var n = this,
                      r = n.chart;
                    !1 !== i ? p(n, "remove", null, o) : o();
                  },
                  update: function (e, i) {
                    (e = t.cleanRecursively(e, this.userOptions)),
                      p(this, "update", { options: e });
                    var s,
                      o = this,
                      n = o.chart,
                      r = o.userOptions,
                      a = o.initialType || o.type,
                      h = e.type || r.type || n.options.chart.type,
                      l = !(
                        this.hasDerivedData ||
                        e.dataGrouping ||
                        (h && h !== this.type) ||
                        "undefined" !== typeof e.pointStart ||
                        e.pointInterval ||
                        e.pointIntervalUnit ||
                        e.keys
                      ),
                      u = T[a].prototype,
                      f = [
                        "group",
                        "markerGroup",
                        "dataLabelsGroup",
                        "transformGroup",
                      ],
                      g = ["eventOptions", "navigatorSeries", "baseSeries"],
                      m = o.finishedAnimating && { animation: !1 },
                      v = {};
                    for (s in (l &&
                      (g.push(
                        "data",
                        "isDirtyData",
                        "points",
                        "processedXData",
                        "processedYData",
                        "xIncrement",
                        "_hasPointMarkers",
                        "_hasPointLabels",
                        "mapMap",
                        "mapData",
                        "minY",
                        "maxY",
                        "minX",
                        "maxX",
                      ),
                      !1 !== e.visible && g.push("area", "graph"),
                      o.parallelArrays.forEach(function (t) {
                        g.push(t + "Data");
                      }),
                      e.data &&
                        (e.dataSorting &&
                          d(o.options.dataSorting, e.dataSorting),
                        this.setData(e.data, !1))),
                    (e = y(
                      r,
                      m,
                      {
                        index:
                          "undefined" === typeof r.index ? o.index : r.index,
                        pointStart: x(r.pointStart, o.xData[0]),
                      },
                      !l && { data: o.options.data },
                      e,
                    )),
                    l && e.data && (e.data = o.options.data),
                    (g = f.concat(g)).forEach(function (t) {
                      (g[t] = o[t]), delete o[t];
                    }),
                    o.remove(!1, null, !1, !0),
                    u))
                      o[s] = void 0;
                    if (
                      (T[h || a]
                        ? d(o, T[h || a].prototype)
                        : c(17, !0, n, { missingModuleFor: h || a }),
                      g.forEach(function (t) {
                        o[t] = g[t];
                      }),
                      o.init(n, e),
                      l && this.points)
                    ) {
                      var b = o.options;
                      !1 === b.visible
                        ? ((v.graphic = 1), (v.dataLabel = 1))
                        : o._hasPointLabels ||
                          ((h = b.marker),
                          (u = b.dataLabels),
                          h &&
                            (!1 === h.enabled || "symbol" in h) &&
                            (v.graphic = 1),
                          u && !1 === u.enabled && (v.dataLabel = 1)),
                        this.points.forEach(function (t) {
                          t &&
                            t.series &&
                            (t.resolveColor(),
                            Object.keys(v).length && t.destroyElements(v),
                            !1 === b.showInLegend &&
                              t.legendItem &&
                              n.legend.destroyItem(t));
                        }, this);
                    }
                    e.zIndex !== r.zIndex &&
                      f.forEach(function (t) {
                        o[t] && o[t].attr({ zIndex: e.zIndex });
                      }),
                      (o.initialType = a),
                      n.linkSeries(),
                      p(this, "afterUpdate"),
                      x(i, !0) && n.redraw(!!l && void 0);
                  },
                  setName: function (t) {
                    (this.name = this.options.name = this.userOptions.name = t),
                      (this.chart.isDirtyLegend = !0);
                  },
                }),
                d(w.prototype, {
                  update: function (t, e) {
                    var i = this.chart,
                      s = (t && t.events) || {};
                    (t = y(this.userOptions, t)),
                      i.options[this.coll].indexOf &&
                        (i.options[this.coll][
                          i.options[this.coll].indexOf(this.userOptions)
                        ] = t),
                      v(i.options[this.coll].events, function (t, e) {
                        "undefined" === typeof s[e] && (s[e] = void 0);
                      }),
                      this.destroy(!0),
                      this.init(i, d(t, { events: s })),
                      (i.isDirtyBox = !0),
                      x(e, !0) && i.redraw();
                  },
                  remove: function (t) {
                    for (
                      var e = this.chart,
                        i = this.coll,
                        s = this.series,
                        o = s.length;
                      o--;

                    )
                      s[o] && s[o].remove(!1);
                    l(e.axes, this),
                      l(e[i], this),
                      u(e.options[i])
                        ? e.options[i].splice(this.options.index, 1)
                        : delete e.options[i],
                      e[i].forEach(function (t, e) {
                        t.options.index = t.userOptions.index = e;
                      }),
                      this.destroy(),
                      (e.isDirtyBox = !0),
                      x(t, !0) && e.redraw();
                  },
                  setTitle: function (t, e) {
                    this.update({ title: t }, e);
                  },
                  setCategories: function (t, e) {
                    this.update({ categories: t }, e);
                  },
                });
            },
          ),
          e(
            i,
            "parts/AreaSeries.js",
            [
              i["parts/Globals.js"],
              i["parts/Color.js"],
              i["mixins/legend-symbol.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = e.parse,
                n = s.objectEach,
                r = s.pick;
              e = s.seriesType;
              var a = t.Series;
              e(
                "area",
                "line",
                { softThreshold: !1, threshold: 0 },
                {
                  singleStacks: !1,
                  getStackPoints: function (t) {
                    var e,
                      i = [],
                      s = [],
                      o = this.xAxis,
                      a = this.yAxis,
                      h = a.stacking.stacks[this.stackKey],
                      l = {},
                      c = this.index,
                      d = a.series,
                      p = d.length,
                      u = r(a.options.reversedStacks, !0) ? 1 : -1;
                    if (((t = t || this.points), this.options.stacking)) {
                      for (e = 0; e < t.length; e++)
                        (t[e].leftNull = t[e].rightNull = void 0),
                          (l[t[e].x] = t[e]);
                      n(h, function (t, e) {
                        null !== t.total && s.push(e);
                      }),
                        s.sort(function (t, e) {
                          return t - e;
                        });
                      var f = d.map(function (t) {
                        return t.visible;
                      });
                      s.forEach(function (t, n) {
                        var r,
                          d,
                          g = 0;
                        if (l[t] && !l[t].isNull)
                          i.push(l[t]),
                            [-1, 1].forEach(function (i) {
                              var o = 1 === i ? "rightNull" : "leftNull",
                                a = 0,
                                g = h[s[n + i]];
                              if (g)
                                for (e = c; 0 <= e && e < p; )
                                  (r = g.points[e]) ||
                                    (e === c
                                      ? (l[t][o] = !0)
                                      : f[e] &&
                                        (d = h[t].points[e]) &&
                                        (a -= d[1] - d[0])),
                                    (e += u);
                              l[t][1 === i ? "rightCliff" : "leftCliff"] = a;
                            });
                        else {
                          for (e = c; 0 <= e && e < p; ) {
                            if ((r = h[t].points[e])) {
                              g = r[1];
                              break;
                            }
                            e += u;
                          }
                          (g = a.translate(g, 0, 1, 0, 1)),
                            i.push({
                              isNull: !0,
                              plotX: o.translate(t, 0, 0, 0, 1),
                              x: t,
                              plotY: g,
                              yBottom: g,
                            });
                        }
                      });
                    }
                    return i;
                  },
                  getGraphPath: function (t) {
                    var e,
                      i = a.prototype.getGraphPath,
                      s = this.options,
                      o = s.stacking,
                      n = this.yAxis,
                      h = [],
                      l = [],
                      c = this.index,
                      d = n.stacking.stacks[this.stackKey],
                      p = s.threshold,
                      u = Math.round(n.getThreshold(s.threshold));
                    s = r(s.connectNulls, "percent" === o);
                    var f = function (e, i, s) {
                      var r = t[e];
                      e = o && d[r.x].points[c];
                      var a = r[s + "Null"] || 0;
                      if (((s = r[s + "Cliff"] || 0), (r = !0), s || a)) {
                        var f = (a ? e[0] : e[1]) + s,
                          g = e[0] + s;
                        r = !!a;
                      } else !o && t[i] && t[i].isNull && (f = g = p);
                      "undefined" !== typeof f &&
                        (l.push({
                          plotX: m,
                          plotY: null === f ? u : n.getThreshold(f),
                          isNull: r,
                          isCliff: !0,
                        }),
                        h.push({
                          plotX: m,
                          plotY: null === g ? u : n.getThreshold(g),
                          doCurve: !1,
                        }));
                    };
                    for (
                      t = t || this.points,
                        o && (t = this.getStackPoints(t)),
                        e = 0;
                      e < t.length;
                      e++
                    ) {
                      o ||
                        (t[e].leftCliff =
                          t[e].rightCliff =
                          t[e].leftNull =
                          t[e].rightNull =
                            void 0);
                      var g = t[e].isNull,
                        m = r(t[e].rectPlotX, t[e].plotX),
                        y = r(t[e].yBottom, u);
                      (g && !s) ||
                        (s || f(e, e - 1, "left"),
                        (g && !o && s) ||
                          (l.push(t[e]), h.push({ x: e, plotX: m, plotY: y })),
                        s || f(e, e + 1, "right"));
                    }
                    return (
                      (e = i.call(this, l, !0, !0)),
                      (h.reversed = !0),
                      (y = (g = i.call(this, h, !0, !0))[0]) &&
                        "M" === y[0] &&
                        (g[0] = ["L", y[1], y[2]]),
                      (g = e.concat(g)),
                      (i = i.call(this, l, !1, s)),
                      (g.xMap = e.xMap),
                      (this.areaPath = g),
                      i
                    );
                  },
                  drawGraph: function () {
                    (this.areaPath = []), a.prototype.drawGraph.apply(this);
                    var t = this,
                      e = this.areaPath,
                      i = this.options,
                      s = [
                        ["area", "highcharts-area", this.color, i.fillColor],
                      ];
                    this.zones.forEach(function (e, o) {
                      s.push([
                        "zone-area-" + o,
                        "highcharts-area highcharts-zone-area-" +
                          o +
                          " " +
                          e.className,
                        e.color || t.color,
                        e.fillColor || i.fillColor,
                      ]);
                    }),
                      s.forEach(function (s) {
                        var n = s[0],
                          a = t[n],
                          h = a ? "animate" : "attr",
                          l = {};
                        a
                          ? ((a.endX = t.preventGraphAnimation ? null : e.xMap),
                            a.animate({ d: e }))
                          : ((l.zIndex = 0),
                            ((a = t[n] =
                              t.chart.renderer
                                .path(e)
                                .addClass(s[1])
                                .add(t.group)).isArea = !0)),
                          t.chart.styledMode ||
                            (l.fill = r(
                              s[3],
                              o(s[2]).setOpacity(r(i.fillOpacity, 0.75)).get(),
                            )),
                          a[h](l),
                          (a.startX = e.xMap),
                          (a.shiftUnit = i.step ? 2 : 1);
                      });
                  },
                  drawLegendSymbol: i.drawRectangle,
                },
              );
            },
          ),
          e(
            i,
            "parts/SplineSeries.js",
            [i["parts/Utilities.js"]],
            function (t) {
              var e = t.pick;
              (t = t.seriesType)(
                "spline",
                "line",
                {},
                {
                  getPointSpline: function (t, i, s) {
                    var o = i.plotX || 0,
                      n = i.plotY || 0,
                      r = t[s - 1];
                    if (
                      ((s = t[s + 1]),
                      r &&
                        !r.isNull &&
                        !1 !== r.doCurve &&
                        !i.isCliff &&
                        s &&
                        !s.isNull &&
                        !1 !== s.doCurve &&
                        !i.isCliff)
                    ) {
                      t = r.plotY || 0;
                      var a = s.plotX || 0;
                      s = s.plotY || 0;
                      var h = 0,
                        l = (1.5 * o + (r.plotX || 0)) / 2.5,
                        c = (1.5 * n + t) / 2.5,
                        d = (1.5 * n + s) / 2.5;
                      (a = (1.5 * o + a) / 2.5) !== l &&
                        (h = ((d - c) * (a - o)) / (a - l) + n - d),
                        (d += h),
                        (c += h) > t && c > n
                          ? (d = 2 * n - (c = Math.max(t, n)))
                          : c < t &&
                            c < n &&
                            (d = 2 * n - (c = Math.min(t, n))),
                        d > s && d > n
                          ? (c = 2 * n - (d = Math.max(s, n)))
                          : d < s &&
                            d < n &&
                            (c = 2 * n - (d = Math.min(s, n))),
                        (i.rightContX = a),
                        (i.rightContY = d);
                    }
                    return (
                      (i = [
                        "C",
                        e(r.rightContX, r.plotX, 0),
                        e(r.rightContY, r.plotY, 0),
                        e(l, o, 0),
                        e(c, n, 0),
                        o,
                        n,
                      ]),
                      (r.rightContX = r.rightContY = void 0),
                      i
                    );
                  },
                },
              );
            },
          ),
          e(
            i,
            "parts/AreaSplineSeries.js",
            [
              i["parts/Globals.js"],
              i["mixins/legend-symbol.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i) {
              i = i.seriesType;
              var s = t.seriesTypes.area.prototype;
              i("areaspline", "spline", t.defaultPlotOptions.area, {
                getStackPoints: s.getStackPoints,
                getGraphPath: s.getGraphPath,
                drawGraph: s.drawGraph,
                drawLegendSymbol: e.drawRectangle,
              });
            },
          ),
          e(
            i,
            "parts/ColumnSeries.js",
            [
              i["parts/Globals.js"],
              i["parts/Color.js"],
              i["mixins/legend-symbol.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = e.parse,
                n = s.animObject,
                r = s.clamp,
                a = s.defined,
                h = s.extend,
                l = s.isNumber,
                c = s.merge,
                d = s.pick;
              e = s.seriesType;
              var p = t.Series;
              e(
                "column",
                "line",
                {
                  borderRadius: 0,
                  groupPadding: 0.2,
                  marker: null,
                  pointPadding: 0.1,
                  minPointLength: 0,
                  cropThreshold: 50,
                  pointRange: null,
                  states: {
                    hover: { halo: !1, brightness: 0.1 },
                    select: { color: "#cccccc", borderColor: "#000000" },
                  },
                  dataLabels: { align: null, verticalAlign: null, y: null },
                  softThreshold: !1,
                  startFromThreshold: !0,
                  stickyTracking: !1,
                  tooltip: { distance: 6 },
                  threshold: 0,
                  borderColor: "#ffffff",
                },
                {
                  cropShoulder: 0,
                  directTouch: !0,
                  trackerGroups: ["group", "dataLabelsGroup"],
                  negStacks: !0,
                  init: function () {
                    p.prototype.init.apply(this, arguments);
                    var t = this,
                      e = t.chart;
                    e.hasRendered &&
                      e.series.forEach(function (e) {
                        e.type === t.type && (e.isDirty = !0);
                      });
                  },
                  getColumnMetrics: function () {
                    var t = this,
                      e = t.options,
                      i = t.xAxis,
                      s = t.yAxis,
                      o = i.options.reversedStacks;
                    o = (i.reversed && !o) || (!i.reversed && o);
                    var n,
                      r = {},
                      a = 0;
                    !1 === e.grouping
                      ? (a = 1)
                      : t.chart.series.forEach(function (e) {
                          var i = e.yAxis,
                            o = e.options;
                          if (
                            e.type === t.type &&
                            (e.visible ||
                              !t.chart.options.chart.ignoreHiddenSeries) &&
                            s.len === i.len &&
                            s.pos === i.pos
                          ) {
                            if (o.stacking) {
                              (n = e.stackKey),
                                "undefined" === typeof r[n] && (r[n] = a++);
                              var h = r[n];
                            } else !1 !== o.grouping && (h = a++);
                            e.columnIndex = h;
                          }
                        });
                    var h = Math.min(
                        Math.abs(i.transA) *
                          ((i.ordinal && i.ordinal.slope) ||
                            e.pointRange ||
                            i.closestPointRange ||
                            i.tickInterval ||
                            1),
                        i.len,
                      ),
                      l = h * e.groupPadding,
                      c = (h - 2 * l) / (a || 1);
                    return (
                      (e = Math.min(
                        e.maxPointWidth || i.len,
                        d(e.pointWidth, c * (1 - 2 * e.pointPadding)),
                      )),
                      (t.columnMetrics = {
                        width: e,
                        offset:
                          (c - e) / 2 +
                          (l +
                            ((t.columnIndex || 0) + (o ? 1 : 0)) * c -
                            h / 2) *
                            (o ? -1 : 1),
                      }),
                      t.columnMetrics
                    );
                  },
                  crispCol: function (t, e, i, s) {
                    var o = this.chart,
                      n = this.borderWidth,
                      r = -(n % 2 ? 0.5 : 0);
                    return (
                      (n = n % 2 ? 0.5 : 1),
                      o.inverted && o.renderer.isVML && (n += 1),
                      this.options.crisp &&
                        ((i = Math.round(t + i) + r),
                        (i -= t = Math.round(t) + r)),
                      (s = Math.round(e + s) + n),
                      (r = 0.5 >= Math.abs(e) && 0.5 < s),
                      (s -= e = Math.round(e) + n),
                      r && s && (--e, (s += 1)),
                      { x: t, y: e, width: i, height: s }
                    );
                  },
                  translate: function () {
                    var t = this,
                      e = t.chart,
                      i = t.options,
                      s = (t.dense = 2 > t.closestPointRange * t.xAxis.transA);
                    s = t.borderWidth = d(i.borderWidth, s ? 0 : 1);
                    var o = t.xAxis,
                      n = t.yAxis,
                      h = i.threshold,
                      c = (t.translatedThreshold = n.getThreshold(h)),
                      u = d(i.minPointLength, 5),
                      f = t.getColumnMetrics(),
                      g = f.width,
                      m = (t.barW = Math.max(g, 1 + 2 * s)),
                      y = (t.pointXOffset = f.offset),
                      v = t.dataMin,
                      x = t.dataMax;
                    e.inverted && (c -= 0.5),
                      i.pointPadding && (m = Math.ceil(m)),
                      p.prototype.translate.apply(t),
                      t.points.forEach(function (i) {
                        var s = d(i.yBottom, c),
                          p = 999 + Math.abs(s),
                          f = g,
                          b = i.plotX;
                        p = r(i.plotY, -p, n.len + p);
                        var k = i.plotX + y,
                          M = m,
                          w = Math.min(p, s),
                          S = Math.max(p, s) - w;
                        if (u && Math.abs(S) < u) {
                          S = u;
                          var T =
                            (!n.reversed && !i.negative) ||
                            (n.reversed && i.negative);
                          l(h) &&
                            l(x) &&
                            i.y === h &&
                            x <= h &&
                            (n.min || 0) < h &&
                            v !== x &&
                            (T = !T),
                            (w = Math.abs(w - c) > u ? s - u : c - (T ? u : 0));
                        }
                        a(i.options.pointWidth) &&
                          ((f = M = Math.ceil(i.options.pointWidth)),
                          (k -= Math.round((f - g) / 2))),
                          (i.barX = k),
                          (i.pointWidth = f),
                          (i.tooltipPos = e.inverted
                            ? [
                                n.len + n.pos - e.plotLeft - p,
                                o.len +
                                  o.pos -
                                  e.plotTop -
                                  (b || 0) -
                                  y -
                                  M / 2,
                                S,
                              ]
                            : [k + M / 2, p + n.pos - e.plotTop, S]),
                          (i.shapeType =
                            t.pointClass.prototype.shapeType || "rect"),
                          (i.shapeArgs = t.crispCol.apply(
                            t,
                            i.isNull ? [k, c, M, 0] : [k, w, M, S],
                          ));
                      });
                  },
                  getSymbol: t.noop,
                  drawLegendSymbol: i.drawRectangle,
                  drawGraph: function () {
                    this.group[this.dense ? "addClass" : "removeClass"](
                      "highcharts-dense-data",
                    );
                  },
                  pointAttribs: function (t, e) {
                    var i = this.options,
                      s = this.pointAttrToOptions || {},
                      n = s.stroke || "borderColor",
                      r = s["stroke-width"] || "borderWidth",
                      a = (t && t.color) || this.color,
                      h = (t && t[n]) || i[n] || this.color || a,
                      l = (t && t[r]) || i[r] || this[r] || 0;
                    s = (t && t.options.dashStyle) || i.dashStyle;
                    var p = d(t && t.opacity, i.opacity, 1);
                    if (t && this.zones.length) {
                      var u = t.getZone();
                      (a =
                        t.options.color ||
                        (u && (u.color || t.nonZonedColor)) ||
                        this.color),
                        u &&
                          ((h = u.borderColor || h),
                          (s = u.dashStyle || s),
                          (l = u.borderWidth || l));
                    }
                    return (
                      e &&
                        t &&
                        ((e = (t = c(
                          i.states[e],
                          (t.options.states && t.options.states[e]) || {},
                        )).brightness),
                        (a =
                          t.color ||
                          ("undefined" !== typeof e &&
                            o(a).brighten(t.brightness).get()) ||
                          a),
                        (h = t[n] || h),
                        (l = t[r] || l),
                        (s = t.dashStyle || s),
                        (p = d(t.opacity, p))),
                      (n = {
                        fill: a,
                        stroke: h,
                        "stroke-width": l,
                        opacity: p,
                      }),
                      s && (n.dashstyle = s),
                      n
                    );
                  },
                  drawPoints: function () {
                    var t,
                      e = this,
                      i = this.chart,
                      s = e.options,
                      o = i.renderer,
                      n = s.animationLimit || 250;
                    e.points.forEach(function (r) {
                      var a = r.graphic,
                        h = !!a,
                        d = a && i.pointCount < n ? "animate" : "attr";
                      l(r.plotY) && null !== r.y
                        ? ((t = r.shapeArgs),
                          a && r.hasNewShapeType() && (a = a.destroy()),
                          e.enabledDataSorting &&
                            (r.startXPos = e.xAxis.reversed
                              ? -(t ? t.width : 0)
                              : e.xAxis.width),
                          a ||
                            ((r.graphic = a =
                              o[r.shapeType](t).add(r.group || e.group)) &&
                              e.enabledDataSorting &&
                              i.hasRendered &&
                              i.pointCount < n &&
                              (a.attr({ x: r.startXPos }),
                              (h = !0),
                              (d = "animate"))),
                          a && h && a[d](c(t)),
                          s.borderRadius && a[d]({ r: s.borderRadius }),
                          i.styledMode ||
                            a[d](
                              e.pointAttribs(r, r.selected && "select"),
                            ).shadow(
                              !1 !== r.allowShadow && s.shadow,
                              null,
                              s.stacking && !s.borderRadius,
                            ),
                          a.addClass(r.getClassName(), !0))
                        : a && (r.graphic = a.destroy());
                    });
                  },
                  animate: function (t) {
                    var e = this,
                      i = this.yAxis,
                      s = e.options,
                      o = this.chart.inverted,
                      a = {},
                      l = o ? "translateX" : "translateY";
                    if (t)
                      (a.scaleY = 0.001),
                        (t = r(i.toPixels(s.threshold), i.pos, i.pos + i.len)),
                        o ? (a.translateX = t - i.len) : (a.translateY = t),
                        e.clipBox && e.setClip(),
                        e.group.attr(a);
                    else {
                      var c = e.group.attr(l);
                      e.group.animate(
                        { scaleY: 1 },
                        h(n(e.options.animation), {
                          step: function (t, s) {
                            e.group &&
                              ((a[l] = c + s.pos * (i.pos - c)),
                              e.group.attr(a));
                          },
                        }),
                      );
                    }
                  },
                  remove: function () {
                    var t = this,
                      e = t.chart;
                    e.hasRendered &&
                      e.series.forEach(function (e) {
                        e.type === t.type && (e.isDirty = !0);
                      }),
                      p.prototype.remove.apply(t, arguments);
                  },
                },
              );
            },
          ),
          e(i, "parts/BarSeries.js", [i["parts/Utilities.js"]], function (t) {
            (t = t.seriesType)("bar", "column", null, { inverted: !0 });
          }),
          e(
            i,
            "parts/ScatterSeries.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.addEvent;
              e = e.seriesType;
              var s = t.Series;
              e(
                "scatter",
                "line",
                {
                  lineWidth: 0,
                  findNearestPointBy: "xy",
                  jitter: { x: 0, y: 0 },
                  marker: { enabled: !0 },
                  tooltip: {
                    headerFormat:
                      '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                    pointFormat:
                      "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>",
                  },
                },
                {
                  sorted: !1,
                  requireSorting: !1,
                  noSharedTooltip: !0,
                  trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                  takeOrdinalPosition: !1,
                  drawGraph: function () {
                    this.options.lineWidth && s.prototype.drawGraph.call(this);
                  },
                  applyJitter: function () {
                    var t = this,
                      e = this.options.jitter,
                      i = this.points.length;
                    e &&
                      this.points.forEach(function (s, o) {
                        ["x", "y"].forEach(function (n, r) {
                          var a = "plot" + n.toUpperCase();
                          if (e[n] && !s.isNull) {
                            var h = t[n + "Axis"],
                              l = e[n] * h.transA;
                            if (h && !h.isLog) {
                              var c = Math.max(0, s[a] - l);
                              (h = Math.min(h.len, s[a] + l)),
                                (r = 1e4 * Math.sin(o + r * i)),
                                (s[a] = c + (h - c) * (r - Math.floor(r))),
                                "x" === n && (s.clientX = s.plotX);
                            }
                          }
                        });
                      });
                  },
                },
              ),
                i(s, "afterTranslate", function () {
                  this.applyJitter && this.applyJitter();
                });
            },
          ),
          e(
            i,
            "mixins/centered-series.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.isNumber,
                s = e.pick,
                o = e.relativeLength,
                n = t.deg2rad;
              t.CenteredSeriesMixin = {
                getCenter: function () {
                  var t = this.options,
                    e = this.chart,
                    i = 2 * (t.slicedOffset || 0),
                    n = e.plotWidth - 2 * i,
                    r = e.plotHeight - 2 * i,
                    a = t.center,
                    h = Math.min(n, r),
                    l = t.size,
                    c = t.innerSize || 0;
                  for (
                    "string" === typeof l && (l = parseFloat(l)),
                      "string" === typeof c && (c = parseFloat(c)),
                      t = [
                        s(a[0], "50%"),
                        s(a[1], "50%"),
                        s(l && 0 > l ? void 0 : t.size, "100%"),
                        s(c && 0 > c ? void 0 : t.innerSize || 0, "0%"),
                      ],
                      e.angular && (t[3] = 0),
                      a = 0;
                    4 > a;
                    ++a
                  )
                    (l = t[a]),
                      (e = 2 > a || (2 === a && /%$/.test(l))),
                      (t[a] = o(l, [n, r, h, t[2]][a]) + (e ? i : 0));
                  return t[3] > t[2] && (t[3] = t[2]), t;
                },
                getStartAndEndRadians: function (t, e) {
                  return (
                    (t = i(t) ? t : 0),
                    (e = i(e) && e > t && 360 > e - t ? e : t + 360),
                    { start: n * (t + -90), end: n * (e + -90) }
                  );
                },
              };
            },
          ),
          e(
            i,
            "parts/PieSeries.js",
            [
              i["parts/Globals.js"],
              i["mixins/legend-symbol.js"],
              i["parts/Point.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = s.addEvent,
                n = s.clamp,
                r = s.defined,
                a = s.fireEvent,
                h = s.isNumber,
                l = s.merge,
                c = s.pick,
                d = s.relativeLength,
                p = s.seriesType,
                u = s.setAnimation,
                f = (s = t.CenteredSeriesMixin).getStartAndEndRadians,
                g = t.noop,
                m = t.Series;
              p(
                "pie",
                "line",
                {
                  center: [null, null],
                  clip: !1,
                  colorByPoint: !0,
                  dataLabels: {
                    allowOverlap: !0,
                    connectorPadding: 5,
                    connectorShape: "fixedOffset",
                    crookDistance: "70%",
                    distance: 30,
                    enabled: !0,
                    formatter: function () {
                      return this.point.isNull ? void 0 : this.point.name;
                    },
                    softConnector: !0,
                    x: 0,
                  },
                  fillColor: void 0,
                  ignoreHiddenPoint: !0,
                  inactiveOtherPoints: !0,
                  legendType: "point",
                  marker: null,
                  size: null,
                  showInLegend: !1,
                  slicedOffset: 10,
                  stickyTracking: !1,
                  tooltip: { followPointer: !0 },
                  borderColor: "#ffffff",
                  borderWidth: 1,
                  lineWidth: void 0,
                  states: { hover: { brightness: 0.1 } },
                },
                {
                  isCartesian: !1,
                  requireSorting: !1,
                  directTouch: !0,
                  noSharedTooltip: !0,
                  trackerGroups: ["group", "dataLabelsGroup"],
                  axisTypes: [],
                  pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
                  animate: function (t) {
                    var e = this,
                      i = e.points,
                      s = e.startAngleRad;
                    t ||
                      i.forEach(function (t) {
                        var i = t.graphic,
                          o = t.shapeArgs;
                        i &&
                          o &&
                          (i.attr({
                            r: c(t.startR, e.center && e.center[3] / 2),
                            start: s,
                            end: s,
                          }),
                          i.animate(
                            { r: o.r, start: o.start, end: o.end },
                            e.options.animation,
                          ));
                      });
                  },
                  hasData: function () {
                    return !!this.processedXData.length;
                  },
                  updateTotals: function () {
                    var t,
                      e = 0,
                      i = this.points,
                      s = i.length,
                      o = this.options.ignoreHiddenPoint;
                    for (t = 0; t < s; t++) {
                      var n = i[t];
                      e += (o && !n.visible) || n.isNull ? 0 : n.y;
                    }
                    for (this.total = e, t = 0; t < s; t++)
                      ((n = i[t]).percentage =
                        0 < e && (n.visible || !o) ? (n.y / e) * 100 : 0),
                        (n.total = e);
                  },
                  generatePoints: function () {
                    m.prototype.generatePoints.call(this), this.updateTotals();
                  },
                  getX: function (t, e, i) {
                    var s = this.center,
                      o = this.radii ? this.radii[i.index] : s[2] / 2;
                    return (
                      (t = Math.asin(
                        n((t - s[1]) / (o + i.labelDistance), -1, 1),
                      )),
                      s[0] +
                        (e ? -1 : 1) * Math.cos(t) * (o + i.labelDistance) +
                        (0 < i.labelDistance
                          ? (e ? -1 : 1) * this.options.dataLabels.padding
                          : 0)
                    );
                  },
                  translate: function (t) {
                    this.generatePoints();
                    var e = 0,
                      i = this.options,
                      s = i.slicedOffset,
                      o = s + (i.borderWidth || 0),
                      n = f(i.startAngle, i.endAngle),
                      r = (this.startAngleRad = n.start);
                    n = (this.endAngleRad = n.end) - r;
                    var h = this.points,
                      l = i.dataLabels.distance;
                    i = i.ignoreHiddenPoint;
                    var p,
                      u = h.length;
                    for (
                      t || (this.center = t = this.getCenter()), p = 0;
                      p < u;
                      p++
                    ) {
                      var g = h[p],
                        m = r + e * n;
                      (i && !g.visible) || (e += g.percentage / 100);
                      var y = r + e * n;
                      (g.shapeType = "arc"),
                        (g.shapeArgs = {
                          x: t[0],
                          y: t[1],
                          r: t[2] / 2,
                          innerR: t[3] / 2,
                          start: Math.round(1e3 * m) / 1e3,
                          end: Math.round(1e3 * y) / 1e3,
                        }),
                        (g.labelDistance = c(
                          g.options.dataLabels && g.options.dataLabels.distance,
                          l,
                        )),
                        (g.labelDistance = d(g.labelDistance, g.shapeArgs.r)),
                        (this.maxLabelDistance = Math.max(
                          this.maxLabelDistance || 0,
                          g.labelDistance,
                        )),
                        (y = (y + m) / 2) > 1.5 * Math.PI
                          ? (y -= 2 * Math.PI)
                          : y < -Math.PI / 2 && (y += 2 * Math.PI),
                        (g.slicedTranslation = {
                          translateX: Math.round(Math.cos(y) * s),
                          translateY: Math.round(Math.sin(y) * s),
                        });
                      var v = (Math.cos(y) * t[2]) / 2,
                        x = (Math.sin(y) * t[2]) / 2;
                      (g.tooltipPos = [t[0] + 0.7 * v, t[1] + 0.7 * x]),
                        (g.half = y < -Math.PI / 2 || y > Math.PI / 2 ? 1 : 0),
                        (g.angle = y),
                        (m = Math.min(o, g.labelDistance / 5)),
                        (g.labelPosition = {
                          natural: {
                            x: t[0] + v + Math.cos(y) * g.labelDistance,
                            y: t[1] + x + Math.sin(y) * g.labelDistance,
                          },
                          final: {},
                          alignment:
                            0 > g.labelDistance
                              ? "center"
                              : g.half
                                ? "right"
                                : "left",
                          connectorPosition: {
                            breakAt: {
                              x: t[0] + v + Math.cos(y) * m,
                              y: t[1] + x + Math.sin(y) * m,
                            },
                            touchingSliceAt: { x: t[0] + v, y: t[1] + x },
                          },
                        });
                    }
                    a(this, "afterTranslate");
                  },
                  drawEmpty: function () {
                    var t = this.options;
                    if (0 === this.total) {
                      var e = this.center[0],
                        i = this.center[1];
                      this.graph ||
                        (this.graph = this.chart.renderer
                          .circle(e, i, 0)
                          .addClass("highcharts-graph")
                          .add(this.group)),
                        this.graph.animate(
                          {
                            "stroke-width": t.borderWidth,
                            cx: e,
                            cy: i,
                            r: this.center[2] / 2,
                            fill: t.fillColor || "none",
                            stroke: t.color || "#cccccc",
                          },
                          this.options.animation,
                        );
                    } else this.graph && (this.graph = this.graph.destroy());
                  },
                  redrawPoints: function () {
                    var t,
                      e,
                      i,
                      s,
                      o = this,
                      n = o.chart,
                      r = n.renderer,
                      a = o.options.shadow;
                    this.drawEmpty(),
                      !a ||
                        o.shadowGroup ||
                        n.styledMode ||
                        (o.shadowGroup = r
                          .g("shadow")
                          .attr({ zIndex: -1 })
                          .add(o.group)),
                      o.points.forEach(function (h) {
                        var c = {};
                        if (((e = h.graphic), !h.isNull && e)) {
                          if (
                            ((s = h.shapeArgs),
                            (t = h.getTranslate()),
                            !n.styledMode)
                          ) {
                            var d = h.shadowGroup;
                            a &&
                              !d &&
                              (d = h.shadowGroup =
                                r.g("shadow").add(o.shadowGroup)),
                              d && d.attr(t),
                              (i = o.pointAttribs(h, h.selected && "select"));
                          }
                          h.delayedRendering
                            ? (e.setRadialReference(o.center).attr(s).attr(t),
                              n.styledMode ||
                                e
                                  .attr(i)
                                  .attr({ "stroke-linejoin": "round" })
                                  .shadow(a, d),
                              (h.delayedRendering = !1))
                            : (e.setRadialReference(o.center),
                              n.styledMode || l(!0, c, i),
                              l(!0, c, s, t),
                              e.animate(c)),
                            e.attr({
                              visibility: h.visible ? "inherit" : "hidden",
                            }),
                            e.addClass(h.getClassName());
                        } else e && (h.graphic = e.destroy());
                      });
                  },
                  drawPoints: function () {
                    var t = this.chart.renderer;
                    this.points.forEach(function (e) {
                      e.graphic &&
                        e.hasNewShapeType() &&
                        (e.graphic = e.graphic.destroy()),
                        e.graphic ||
                          ((e.graphic = t[e.shapeType](e.shapeArgs).add(
                            e.series.group,
                          )),
                          (e.delayedRendering = !0));
                    });
                  },
                  searchPoint: g,
                  sortByAngle: function (t, e) {
                    t.sort(function (t, i) {
                      return (
                        "undefined" !== typeof t.angle &&
                        (i.angle - t.angle) * e
                      );
                    });
                  },
                  drawLegendSymbol: e.drawRectangle,
                  getCenter: s.getCenter,
                  getSymbol: g,
                  drawGraph: null,
                },
                {
                  init: function () {
                    i.prototype.init.apply(this, arguments);
                    var t = this;
                    t.name = c(t.name, "Slice");
                    var e = function (e) {
                      t.slice("select" === e.type);
                    };
                    return o(t, "select", e), o(t, "unselect", e), t;
                  },
                  isValid: function () {
                    return h(this.y) && 0 <= this.y;
                  },
                  setVisible: function (t, e) {
                    var i = this,
                      s = i.series,
                      o = s.chart,
                      n = s.options.ignoreHiddenPoint;
                    (e = c(e, n)),
                      t !== i.visible &&
                        ((i.visible =
                          i.options.visible =
                          t =
                            "undefined" === typeof t ? !i.visible : t),
                        (s.options.data[s.data.indexOf(i)] = i.options),
                        [
                          "graphic",
                          "dataLabel",
                          "connector",
                          "shadowGroup",
                        ].forEach(function (e) {
                          i[e] && i[e][t ? "show" : "hide"](!0);
                        }),
                        i.legendItem && o.legend.colorizeItem(i, t),
                        t || "hover" !== i.state || i.setState(""),
                        n && (s.isDirty = !0),
                        e && o.redraw());
                  },
                  slice: function (t, e, i) {
                    var s = this.series;
                    u(i, s.chart),
                      c(e, !0),
                      (this.sliced = this.options.sliced =
                        r(t) ? t : !this.sliced),
                      (s.options.data[s.data.indexOf(this)] = this.options),
                      this.graphic && this.graphic.animate(this.getTranslate()),
                      this.shadowGroup &&
                        this.shadowGroup.animate(this.getTranslate());
                  },
                  getTranslate: function () {
                    return this.sliced
                      ? this.slicedTranslation
                      : { translateX: 0, translateY: 0 };
                  },
                  haloPath: function (t) {
                    var e = this.shapeArgs;
                    return this.sliced || !this.visible
                      ? []
                      : this.series.chart.renderer.symbols.arc(
                          e.x,
                          e.y,
                          e.r + t,
                          e.r + t,
                          { innerR: e.r - 1, start: e.start, end: e.end },
                        );
                  },
                  connectorShapes: {
                    fixedOffset: function (t, e, i) {
                      var s = e.breakAt;
                      return (
                        (e = e.touchingSliceAt),
                        [
                          ["M", t.x, t.y],
                          i.softConnector
                            ? [
                                "C",
                                t.x + ("left" === t.alignment ? -5 : 5),
                                t.y,
                                2 * s.x - e.x,
                                2 * s.y - e.y,
                                s.x,
                                s.y,
                              ]
                            : ["L", s.x, s.y],
                          ["L", e.x, e.y],
                        ]
                      );
                    },
                    straight: function (t, e) {
                      return (
                        (e = e.touchingSliceAt),
                        [
                          ["M", t.x, t.y],
                          ["L", e.x, e.y],
                        ]
                      );
                    },
                    crookedLine: function (t, e, i) {
                      e = e.touchingSliceAt;
                      var s = this.series,
                        o = s.center[0],
                        n = s.chart.plotWidth,
                        r = s.chart.plotLeft;
                      s = t.alignment;
                      var a = this.shapeArgs.r;
                      return (
                        (i = d(i.crookDistance, 1)),
                        (i = [
                          "L",
                          (n =
                            "left" === s
                              ? o + a + (n + r - o - a) * (1 - i)
                              : r + (o - a) * i),
                          t.y,
                        ]),
                        (o = !0),
                        ("left" === s
                          ? n > t.x || n < e.x
                          : n < t.x || n > e.x) && (o = !1),
                        (t = [["M", t.x, t.y]]),
                        o && t.push(i),
                        t.push(["L", e.x, e.y]),
                        t
                      );
                    },
                  },
                  getConnectorPath: function () {
                    var t = this.labelPosition,
                      e = this.series.options.dataLabels,
                      i = e.connectorShape,
                      s = this.connectorShapes;
                    return (
                      s[i] && (i = s[i]),
                      i.call(
                        this,
                        { x: t.final.x, y: t.final.y, alignment: t.alignment },
                        t.connectorPosition,
                        e,
                      )
                    );
                  },
                },
              );
            },
          ),
          e(
            i,
            "parts/DataLabels.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.animObject,
                s = e.arrayMax,
                o = e.clamp,
                n = e.defined,
                r = e.extend,
                a = e.fireEvent,
                h = e.format,
                l = e.isArray,
                c = e.merge,
                d = e.objectEach,
                p = e.pick,
                u = e.relativeLength,
                f = e.splat,
                g = e.stableSort;
              e = t.noop;
              var m = t.Series,
                y = t.seriesTypes;
              (t.distribute = function (e, i, s) {
                function n(t, e) {
                  return t.target - e.target;
                }
                var r,
                  a = !0,
                  h = e,
                  l = [],
                  c = 0,
                  d = h.reducedLen || i;
                for (r = e.length; r--; ) c += e[r].size;
                if (c > d) {
                  for (
                    g(e, function (t, e) {
                      return (e.rank || 0) - (t.rank || 0);
                    }),
                      c = r = 0;
                    c <= d;

                  )
                    (c += e[r].size), r++;
                  l = e.splice(r - 1, e.length);
                }
                for (
                  g(e, n),
                    e = e.map(function (t) {
                      return {
                        size: t.size,
                        targets: [t.target],
                        align: p(t.align, 0.5),
                      };
                    });
                  a;

                ) {
                  for (r = e.length; r--; )
                    (a = e[r]),
                      (c =
                        (Math.min.apply(0, a.targets) +
                          Math.max.apply(0, a.targets)) /
                        2),
                      (a.pos = o(c - a.size * a.align, 0, i - a.size));
                  for (r = e.length, a = !1; r--; )
                    0 < r &&
                      e[r - 1].pos + e[r - 1].size > e[r].pos &&
                      ((e[r - 1].size += e[r].size),
                      (e[r - 1].targets = e[r - 1].targets.concat(
                        e[r].targets,
                      )),
                      (e[r - 1].align = 0.5),
                      e[r - 1].pos + e[r - 1].size > i &&
                        (e[r - 1].pos = i - e[r - 1].size),
                      e.splice(r, 1),
                      (a = !0));
                }
                h.push.apply(h, l),
                  (r = 0),
                  e.some(function (e) {
                    var o = 0;
                    if (
                      e.targets.some(function () {
                        if (
                          ((h[r].pos = e.pos + o),
                          "undefined" !== typeof s &&
                            Math.abs(h[r].pos - h[r].target) > s)
                        )
                          return (
                            h.slice(0, r + 1).forEach(function (t) {
                              delete t.pos;
                            }),
                            (h.reducedLen = (h.reducedLen || i) - 0.1 * i),
                            h.reducedLen > 0.1 * i && t.distribute(h, i, s),
                            !0
                          );
                        (o += h[r].size), r++;
                      })
                    )
                      return !0;
                  }),
                  g(h, n);
              }),
                (m.prototype.drawDataLabels = function () {
                  function t(t, e) {
                    var i,
                      s = [];
                    if (l(t) && !l(e))
                      s = t.map(function (t) {
                        return c(t, e);
                      });
                    else if (l(e) && !l(t))
                      s = e.map(function (e) {
                        return c(t, e);
                      });
                    else if (l(t) || l(e))
                      for (i = Math.max(t.length, e.length); i--; )
                        s[i] = c(t[i], e[i]);
                    else s = c(t, e);
                    return s;
                  }
                  var e = this,
                    s = e.chart,
                    o = e.options,
                    r = o.dataLabels,
                    u = e.points,
                    g = e.hasRendered || 0,
                    m = i(o.animation).duration,
                    y = Math.min(m, 200),
                    v = !s.renderer.forExport && p(r.defer, 0 < y),
                    x = s.renderer;
                  if (
                    ((r = t(
                      t(
                        s.options.plotOptions &&
                          s.options.plotOptions.series &&
                          s.options.plotOptions.series.dataLabels,
                        s.options.plotOptions &&
                          s.options.plotOptions[e.type] &&
                          s.options.plotOptions[e.type].dataLabels,
                      ),
                      r,
                    )),
                    a(this, "drawDataLabels"),
                    l(r) || r.enabled || e._hasPointLabels)
                  ) {
                    var b = e.plotGroup(
                      "dataLabelsGroup",
                      "data-labels",
                      v && !g ? "hidden" : "inherit",
                      r.zIndex || 6,
                    );
                    v &&
                      (b.attr({ opacity: +g }),
                      g ||
                        setTimeout(function () {
                          var t = e.dataLabelsGroup;
                          t &&
                            (e.visible && b.show(!0),
                            t[o.animation ? "animate" : "attr"](
                              { opacity: 1 },
                              { duration: y },
                            ));
                        }, m - y)),
                      u.forEach(function (i) {
                        f(
                          t(
                            r,
                            i.dlOptions || (i.options && i.options.dataLabels),
                          ),
                        ).forEach(function (t, r) {
                          var a =
                              t.enabled &&
                              (!i.isNull || i.dataLabelOnNull) &&
                              (function (t, e) {
                                var i = e.filter;
                                return (
                                  !i ||
                                  ((e = i.operator),
                                  (t = t[i.property]),
                                  (i = i.value),
                                  (">" === e && t > i) ||
                                    ("<" === e && t < i) ||
                                    (">=" === e && t >= i) ||
                                    ("<=" === e && t <= i) ||
                                    ("==" === e && t == i) ||
                                    ("===" === e && t === i))
                                );
                              })(i, t),
                            l = i.dataLabels ? i.dataLabels[r] : i.dataLabel,
                            c = i.connectors ? i.connectors[r] : i.connector,
                            u = p(t.distance, i.labelDistance),
                            f = !l;
                          if (a) {
                            var g = i.getLabelConfig(),
                              m = p(t[i.formatPrefix + "Format"], t.format);
                            (g = n(m)
                              ? h(m, g, s)
                              : (
                                  t[i.formatPrefix + "Formatter"] || t.formatter
                                ).call(g, t)),
                              (m = t.style);
                            var y = t.rotation;
                            s.styledMode ||
                              ((m.color = p(
                                t.color,
                                m.color,
                                e.color,
                                "#000000",
                              )),
                              "contrast" === m.color
                                ? ((i.contrastColor = x.getContrast(
                                    i.color || e.color,
                                  )),
                                  (m.color =
                                    (!n(u) && t.inside) || 0 > u || o.stacking
                                      ? i.contrastColor
                                      : "#000000"))
                                : delete i.contrastColor,
                              o.cursor && (m.cursor = o.cursor));
                            var v = {
                              r: t.borderRadius || 0,
                              rotation: y,
                              padding: t.padding,
                              zIndex: 1,
                            };
                            s.styledMode ||
                              ((v.fill = t.backgroundColor),
                              (v.stroke = t.borderColor),
                              (v["stroke-width"] = t.borderWidth)),
                              d(v, function (t, e) {
                                "undefined" === typeof t && delete v[e];
                              });
                          }
                          !l || (a && n(g))
                            ? a &&
                              n(g) &&
                              (l
                                ? (v.text = g)
                                : ((i.dataLabels = i.dataLabels || []),
                                  (l = i.dataLabels[r] =
                                    y
                                      ? x
                                          .text(g, 0, -9999, t.useHTML)
                                          .addClass("highcharts-data-label")
                                      : x.label(
                                          g,
                                          0,
                                          -9999,
                                          t.shape,
                                          null,
                                          null,
                                          t.useHTML,
                                          null,
                                          "data-label",
                                        )),
                                  r || (i.dataLabel = l),
                                  l.addClass(
                                    " highcharts-data-label-color-" +
                                      i.colorIndex +
                                      " " +
                                      (t.className || "") +
                                      (t.useHTML ? " highcharts-tracker" : ""),
                                  )),
                              (l.options = t),
                              l.attr(v),
                              s.styledMode || l.css(m).shadow(t.shadow),
                              l.added || l.add(b),
                              t.textPath &&
                                !t.useHTML &&
                                (l.setTextPath(
                                  (i.getDataLabelPath &&
                                    i.getDataLabelPath(l)) ||
                                    i.graphic,
                                  t.textPath,
                                ),
                                i.dataLabelPath &&
                                  !t.textPath.enabled &&
                                  (i.dataLabelPath =
                                    i.dataLabelPath.destroy())),
                              e.alignDataLabel(i, l, t, null, f))
                            : ((i.dataLabel =
                                i.dataLabel && i.dataLabel.destroy()),
                              i.dataLabels &&
                                (1 === i.dataLabels.length
                                  ? delete i.dataLabels
                                  : delete i.dataLabels[r]),
                              r || delete i.dataLabel,
                              c &&
                                ((i.connector = i.connector.destroy()),
                                i.connectors &&
                                  (1 === i.connectors.length
                                    ? delete i.connectors
                                    : delete i.connectors[r])));
                        });
                      });
                  }
                  a(this, "afterDrawDataLabels");
                }),
                (m.prototype.alignDataLabel = function (t, e, i, s, o) {
                  var n = this,
                    a = this.chart,
                    h = this.isCartesian && a.inverted,
                    l = this.enabledDataSorting,
                    c = p(t.dlBox && t.dlBox.centerX, t.plotX, -9999),
                    d = p(t.plotY, -9999),
                    u = e.getBBox(),
                    f = i.rotation,
                    g = i.align,
                    m = a.isInsidePlot(c, Math.round(d), h),
                    y = "justify" === p(i.overflow, l ? "none" : "justify"),
                    v =
                      this.visible &&
                      !1 !== t.visible &&
                      (t.series.forceDL ||
                        (l && !y) ||
                        m ||
                        (i.inside &&
                          s &&
                          a.isInsidePlot(
                            c,
                            h ? s.x + 1 : s.y + s.height - 1,
                            h,
                          ))),
                    x = function (i) {
                      l &&
                        n.xAxis &&
                        !y &&
                        n.setDataLabelStartPos(t, e, o, m, i);
                    };
                  if (v) {
                    var b = a.renderer.fontMetrics(
                      a.styledMode ? void 0 : i.style.fontSize,
                      e,
                    ).b;
                    (s = r(
                      {
                        x: h ? this.yAxis.len - d : c,
                        y: Math.round(h ? this.xAxis.len - c : d),
                        width: 0,
                        height: 0,
                      },
                      s,
                    )),
                      r(i, { width: u.width, height: u.height }),
                      f
                        ? ((y = !1),
                          (c = a.renderer.rotCorr(b, f)),
                          x(
                            (c = {
                              x: s.x + i.x + s.width / 2 + c.x,
                              y:
                                s.y +
                                i.y +
                                { top: 0, middle: 0.5, bottom: 1 }[
                                  i.verticalAlign
                                ] *
                                  s.height,
                            }),
                          ),
                          e[o ? "attr" : "animate"](c).attr({ align: g }),
                          (x = 180 < (x = (f + 720) % 360) && 360 > x),
                          "left" === g
                            ? (c.y -= x ? u.height : 0)
                            : "center" === g
                              ? ((c.x -= u.width / 2), (c.y -= u.height / 2))
                              : "right" === g &&
                                ((c.x -= u.width), (c.y -= x ? 0 : u.height)),
                          (e.placed = !0),
                          (e.alignAttr = c))
                        : (x(s), e.align(i, null, s), (c = e.alignAttr)),
                      y && 0 <= s.height
                        ? this.justifyDataLabel(e, i, c, u, s, o)
                        : p(i.crop, !0) &&
                          (v =
                            a.isInsidePlot(c.x, c.y) &&
                            a.isInsidePlot(c.x + u.width, c.y + u.height)),
                      i.shape &&
                        !f &&
                        e[o ? "attr" : "animate"]({
                          anchorX: h ? a.plotWidth - t.plotY : t.plotX,
                          anchorY: h ? a.plotHeight - t.plotX : t.plotY,
                        });
                  }
                  o && l && (e.placed = !1),
                    v || (l && !y) || (e.hide(!0), (e.placed = !1));
                }),
                (m.prototype.setDataLabelStartPos = function (t, e, i, s, o) {
                  var n = this.chart,
                    r = n.inverted,
                    a = this.xAxis,
                    h = a.reversed,
                    l = r ? e.height / 2 : e.width / 2;
                  (t = (t = t.pointWidth) ? t / 2 : 0),
                    (a = r ? o.x : h ? -l - t : a.width - l + t),
                    (o = r ? (h ? this.yAxis.height - l + t : -l - t) : o.y),
                    (e.startXPos = a),
                    (e.startYPos = o),
                    s
                      ? "hidden" === e.visibility &&
                        (e.show(),
                        e.attr({ opacity: 0 }).animate({ opacity: 1 }))
                      : e
                          .attr({ opacity: 1 })
                          .animate({ opacity: 0 }, void 0, e.hide),
                    n.hasRendered &&
                      (i && e.attr({ x: e.startXPos, y: e.startYPos }),
                      (e.placed = !0));
                }),
                (m.prototype.justifyDataLabel = function (t, e, i, s, o, n) {
                  var r = this.chart,
                    a = e.align,
                    h = e.verticalAlign,
                    l = t.box ? 0 : t.padding || 0,
                    c = i.x + l;
                  if (0 > c) {
                    "right" === a
                      ? ((e.align = "left"), (e.inside = !0))
                      : (e.x = -c);
                    var d = !0;
                  }
                  return (
                    (c = i.x + s.width - l) > r.plotWidth &&
                      ("left" === a
                        ? ((e.align = "right"), (e.inside = !0))
                        : (e.x = r.plotWidth - c),
                      (d = !0)),
                    0 > (c = i.y + l) &&
                      ("bottom" === h
                        ? ((e.verticalAlign = "top"), (e.inside = !0))
                        : (e.y = -c),
                      (d = !0)),
                    (c = i.y + s.height - l) > r.plotHeight &&
                      ("top" === h
                        ? ((e.verticalAlign = "bottom"), (e.inside = !0))
                        : (e.y = r.plotHeight - c),
                      (d = !0)),
                    d && ((t.placed = !n), t.align(e, null, o)),
                    d
                  );
                }),
                y.pie &&
                  ((y.pie.prototype.dataLabelPositioners = {
                    radialDistributionY: function (t) {
                      return t.top + t.distributeBox.pos;
                    },
                    radialDistributionX: function (t, e, i, s) {
                      return t.getX(
                        i < e.top + 2 || i > e.bottom - 2 ? s : i,
                        e.half,
                        e,
                      );
                    },
                    justify: function (t, e, i) {
                      return i[0] + (t.half ? -1 : 1) * (e + t.labelDistance);
                    },
                    alignToPlotEdges: function (t, e, i, s) {
                      return (t = t.getBBox().width), e ? t + s : i - t - s;
                    },
                    alignToConnectors: function (t, e, i, s) {
                      var o,
                        n = 0;
                      return (
                        t.forEach(function (t) {
                          (o = t.dataLabel.getBBox().width) > n && (n = o);
                        }),
                        e ? n + s : i - n - s
                      );
                    },
                  }),
                  (y.pie.prototype.drawDataLabels = function () {
                    var e,
                      i,
                      o,
                      r,
                      a,
                      h,
                      l,
                      d,
                      u,
                      f,
                      g,
                      y,
                      v = this,
                      x = v.data,
                      b = v.chart,
                      k = v.options.dataLabels || {},
                      M = k.connectorPadding,
                      w = b.plotWidth,
                      S = b.plotHeight,
                      T = b.plotLeft,
                      A = Math.round(b.chartWidth / 3),
                      P = v.center,
                      L = P[2] / 2,
                      C = P[1],
                      O = [[], []],
                      E = [0, 0, 0, 0],
                      D = v.dataLabelPositioners;
                    v.visible &&
                      (k.enabled || v._hasPointLabels) &&
                      (x.forEach(function (t) {
                        t.dataLabel &&
                          t.visible &&
                          t.dataLabel.shortened &&
                          (t.dataLabel
                            .attr({ width: "auto" })
                            .css({ width: "auto", textOverflow: "clip" }),
                          (t.dataLabel.shortened = !1));
                      }),
                      m.prototype.drawDataLabels.apply(v),
                      x.forEach(function (t) {
                        t.dataLabel &&
                          (t.visible
                            ? (O[t.half].push(t),
                              (t.dataLabel._pos = null),
                              !n(k.style.width) &&
                                !n(
                                  t.options.dataLabels &&
                                    t.options.dataLabels.style &&
                                    t.options.dataLabels.style.width,
                                ) &&
                                t.dataLabel.getBBox().width > A &&
                                (t.dataLabel.css({
                                  width: Math.round(0.7 * A) + "px",
                                }),
                                (t.dataLabel.shortened = !0)))
                            : ((t.dataLabel = t.dataLabel.destroy()),
                              t.dataLabels &&
                                1 === t.dataLabels.length &&
                                delete t.dataLabels));
                      }),
                      O.forEach(function (i, s) {
                        var o,
                          c = i.length,
                          m = [];
                        if (c) {
                          if (
                            (v.sortByAngle(i, s - 0.5), 0 < v.maxLabelDistance)
                          ) {
                            var x = Math.max(0, C - L - v.maxLabelDistance),
                              A = Math.min(
                                C + L + v.maxLabelDistance,
                                b.plotHeight,
                              );
                            i.forEach(function (t) {
                              0 < t.labelDistance &&
                                t.dataLabel &&
                                ((t.top = Math.max(0, C - L - t.labelDistance)),
                                (t.bottom = Math.min(
                                  C + L + t.labelDistance,
                                  b.plotHeight,
                                )),
                                (o = t.dataLabel.getBBox().height || 21),
                                (t.distributeBox = {
                                  target:
                                    t.labelPosition.natural.y - t.top + o / 2,
                                  size: o,
                                  rank: t.y,
                                }),
                                m.push(t.distributeBox));
                            }),
                              (x = A + o - x),
                              t.distribute(m, x, x / 5);
                          }
                          for (g = 0; g < c; g++) {
                            if (
                              ((e = i[g]),
                              (h = e.labelPosition),
                              (r = e.dataLabel),
                              (f = !1 === e.visible ? "hidden" : "inherit"),
                              (u = x = h.natural.y),
                              m &&
                                n(e.distributeBox) &&
                                ("undefined" === typeof e.distributeBox.pos
                                  ? (f = "hidden")
                                  : ((l = e.distributeBox.size),
                                    (u = D.radialDistributionY(e)))),
                              delete e.positionIndex,
                              k.justify)
                            )
                              d = D.justify(e, L, P);
                            else
                              switch (k.alignTo) {
                                case "connectors":
                                  d = D.alignToConnectors(i, s, w, T);
                                  break;
                                case "plotEdges":
                                  d = D.alignToPlotEdges(r, s, w, T);
                                  break;
                                default:
                                  d = D.radialDistributionX(v, e, u, x);
                              }
                            (r._attr = { visibility: f, align: h.alignment }),
                              (y = e.options.dataLabels || {}),
                              (r._pos = {
                                x:
                                  d +
                                  p(y.x, k.x) +
                                  ({ left: M, right: -M }[h.alignment] || 0),
                                y: u + p(y.y, k.y) - 10,
                              }),
                              (h.final.x = d),
                              (h.final.y = u),
                              p(k.crop, !0) &&
                                ((a = r.getBBox().width),
                                (x = null),
                                d - a < M && 1 === s
                                  ? ((x = Math.round(a - d + M)),
                                    (E[3] = Math.max(x, E[3])))
                                  : d + a > w - M &&
                                    0 === s &&
                                    ((x = Math.round(d + a - w + M)),
                                    (E[1] = Math.max(x, E[1]))),
                                0 > u - l / 2
                                  ? (E[0] = Math.max(
                                      Math.round(l / 2 - u),
                                      E[0],
                                    ))
                                  : u + l / 2 > S &&
                                    (E[2] = Math.max(
                                      Math.round(u + l / 2 - S),
                                      E[2],
                                    )),
                                (r.sideOverflow = x));
                          }
                        }
                      }),
                      0 === s(E) || this.verifyDataLabelOverflow(E)) &&
                      (this.placeDataLabels(),
                      this.points.forEach(function (t) {
                        var e;
                        ((y = c(k, t.options.dataLabels)),
                        (i = p(y.connectorWidth, 1))) &&
                          ((o = t.connector),
                          (r = t.dataLabel) &&
                          r._pos &&
                          t.visible &&
                          0 < t.labelDistance
                            ? ((f = r._attr.visibility),
                              (e = !o) &&
                                ((t.connector = o =
                                  b.renderer
                                    .path()
                                    .addClass(
                                      "highcharts-data-label-connector  highcharts-color-" +
                                        t.colorIndex +
                                        (t.className ? " " + t.className : ""),
                                    )
                                    .add(v.dataLabelsGroup)),
                                b.styledMode ||
                                  o.attr({
                                    "stroke-width": i,
                                    stroke:
                                      y.connectorColor || t.color || "#666666",
                                  })),
                              o[e ? "attr" : "animate"]({
                                d: t.getConnectorPath(),
                              }),
                              o.attr("visibility", f))
                            : o && (t.connector = o.destroy()));
                      }));
                  }),
                  (y.pie.prototype.placeDataLabels = function () {
                    this.points.forEach(function (t) {
                      var e,
                        i = t.dataLabel;
                      i &&
                        t.visible &&
                        ((e = i._pos)
                          ? (i.sideOverflow &&
                              ((i._attr.width = Math.max(
                                i.getBBox().width - i.sideOverflow,
                                0,
                              )),
                              i.css({
                                width: i._attr.width + "px",
                                textOverflow:
                                  (this.options.dataLabels.style || {})
                                    .textOverflow || "ellipsis",
                              }),
                              (i.shortened = !0)),
                            i.attr(i._attr),
                            i[i.moved ? "animate" : "attr"](e),
                            (i.moved = !0))
                          : i && i.attr({ y: -9999 })),
                        delete t.distributeBox;
                    }, this);
                  }),
                  (y.pie.prototype.alignDataLabel = e),
                  (y.pie.prototype.verifyDataLabelOverflow = function (t) {
                    var e = this.center,
                      i = this.options,
                      s = i.center,
                      n = i.minSize || 80,
                      r = null !== i.size;
                    if (!r) {
                      if (null !== s[0])
                        var a = Math.max(e[2] - Math.max(t[1], t[3]), n);
                      else
                        (a = Math.max(e[2] - t[1] - t[3], n)),
                          (e[0] += (t[3] - t[1]) / 2);
                      null !== s[1]
                        ? (a = o(a, n, e[2] - Math.max(t[0], t[2])))
                        : ((a = o(a, n, e[2] - t[0] - t[2])),
                          (e[1] += (t[0] - t[2]) / 2)),
                        a < e[2]
                          ? ((e[2] = a),
                            (e[3] = Math.min(u(i.innerSize || 0, a), a)),
                            this.translate(e),
                            this.drawDataLabels && this.drawDataLabels())
                          : (r = !0);
                    }
                    return r;
                  })),
                y.column &&
                  (y.column.prototype.alignDataLabel = function (
                    t,
                    e,
                    i,
                    s,
                    o,
                  ) {
                    var n = this.chart.inverted,
                      r = t.series,
                      a = t.dlBox || t.shapeArgs,
                      h = p(
                        t.below,
                        t.plotY > p(this.translatedThreshold, r.yAxis.len),
                      ),
                      l = p(i.inside, !!this.options.stacking);
                    a &&
                      (0 > (s = c(a)).y && ((s.height += s.y), (s.y = 0)),
                      0 < (a = s.y + s.height - r.yAxis.len) &&
                        a < s.height &&
                        (s.height -= a),
                      n &&
                        (s = {
                          x: r.yAxis.len - s.y - s.height,
                          y: r.xAxis.len - s.x - s.width,
                          width: s.height,
                          height: s.width,
                        }),
                      l ||
                        (n
                          ? ((s.x += h ? 0 : s.width), (s.width = 0))
                          : ((s.y += h ? s.height : 0), (s.height = 0)))),
                      (i.align = p(
                        i.align,
                        !n || l ? "center" : h ? "right" : "left",
                      )),
                      (i.verticalAlign = p(
                        i.verticalAlign,
                        n || l ? "middle" : h ? "top" : "bottom",
                      )),
                      m.prototype.alignDataLabel.call(this, t, e, i, s, o),
                      i.inside &&
                        t.contrastColor &&
                        e.css({ color: t.contrastColor });
                  });
            },
          ),
          e(
            i,
            "modules/overlapping-datalabels.src.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.addEvent,
                s = e.fireEvent,
                o = e.isArray,
                n = e.objectEach,
                r = e.pick;
              i((t = t.Chart), "render", function () {
                var t = [];
                (this.labelCollectors || []).forEach(function (e) {
                  t = t.concat(e());
                }),
                  (this.yAxis || []).forEach(function (e) {
                    e.stacking &&
                      e.options.stackLabels &&
                      !e.options.stackLabels.allowOverlap &&
                      n(e.stacking.stacks, function (e) {
                        n(e, function (e) {
                          t.push(e.label);
                        });
                      });
                  }),
                  (this.series || []).forEach(function (e) {
                    var i = e.options.dataLabels;
                    e.visible &&
                      (!1 !== i.enabled || e._hasPointLabels) &&
                      (e.nodes || e.points).forEach(function (e) {
                        e.visible &&
                          (o(e.dataLabels)
                            ? e.dataLabels
                            : e.dataLabel
                              ? [e.dataLabel]
                              : []
                          ).forEach(function (i) {
                            var s = i.options;
                            (i.labelrank = r(
                              s.labelrank,
                              e.labelrank,
                              e.shapeArgs && e.shapeArgs.height,
                            )),
                              s.allowOverlap || t.push(i);
                          });
                      });
                  }),
                  this.hideOverlappingLabels(t);
              }),
                (t.prototype.hideOverlappingLabels = function (t) {
                  var e,
                    i,
                    o,
                    n = this,
                    r = t.length,
                    a = n.renderer,
                    h = !1,
                    l = function (t) {
                      var e,
                        i,
                        s = t.box ? 0 : t.padding || 0,
                        o = (e = 0);
                      if (t && (!t.alignAttr || t.placed)) {
                        var n = t.alignAttr || {
                            x: t.attr("x"),
                            y: t.attr("y"),
                          },
                          r = t.parentGroup;
                        t.width ||
                          ((e = t.getBBox()),
                          (t.width = e.width),
                          (t.height = e.height),
                          (e = a.fontMetrics(null, t.element).h));
                        var h = t.width - 2 * s;
                        return (
                          (i = { left: "0", center: "0.5", right: "1" }[
                            t.alignValue
                          ])
                            ? (o = +i * h)
                            : Math.round(t.x) !== t.translateX &&
                              (o = t.x - t.translateX),
                          {
                            x: n.x + (r.translateX || 0) + s - o,
                            y: n.y + (r.translateY || 0) + s - e,
                            width: t.width - 2 * s,
                            height: t.height - 2 * s,
                          }
                        );
                      }
                    };
                  for (i = 0; i < r; i++)
                    (e = t[i]) &&
                      ((e.oldOpacity = e.opacity),
                      (e.newOpacity = 1),
                      (e.absoluteBox = l(e)));
                  for (
                    t.sort(function (t, e) {
                      return (e.labelrank || 0) - (t.labelrank || 0);
                    }),
                      i = 0;
                    i < r;
                    i++
                  ) {
                    var c = (l = t[i]) && l.absoluteBox;
                    for (e = i + 1; e < r; ++e) {
                      var d = (o = t[e]) && o.absoluteBox;
                      !c ||
                        !d ||
                        l === o ||
                        0 === l.newOpacity ||
                        0 === o.newOpacity ||
                        d.x > c.x + c.width ||
                        d.x + d.width < c.x ||
                        d.y > c.y + c.height ||
                        d.y + d.height < c.y ||
                        ((l.labelrank < o.labelrank ? l : o).newOpacity = 0);
                    }
                  }
                  t.forEach(function (t) {
                    if (t) {
                      var e = t.newOpacity;
                      t.oldOpacity !== e &&
                        (t.alignAttr && t.placed
                          ? (t[e ? "removeClass" : "addClass"](
                              "highcharts-data-label-hidden",
                            ),
                            (h = !0),
                            (t.alignAttr.opacity = e),
                            t[t.isOld ? "animate" : "attr"](
                              t.alignAttr,
                              null,
                              function () {
                                n.styledMode ||
                                  t.css({ pointerEvents: e ? "auto" : "none" }),
                                  (t.visibility = e ? "inherit" : "hidden"),
                                  (t.placed = !!e);
                              },
                            ),
                            s(n, "afterHideOverlappingLabel"))
                          : t.attr({ opacity: e })),
                        (t.isOld = !0);
                    }
                  }),
                    h && s(n, "afterHideAllOverlappingLabels");
                });
            },
          ),
          e(
            i,
            "parts/Interaction.js",
            [
              i["parts/Globals.js"],
              i["parts/Legend.js"],
              i["parts/Point.js"],
              i["parts/Utilities.js"],
            ],
            function (t, e, i, s) {
              var o = s.addEvent,
                n = s.createElement,
                r = s.css,
                a = s.defined,
                h = s.extend,
                l = s.fireEvent,
                c = s.isArray,
                d = s.isFunction,
                p = s.isNumber,
                u = s.isObject,
                f = s.merge,
                g = s.objectEach,
                m = s.pick;
              s = t.Chart;
              var y = t.defaultOptions,
                v = t.defaultPlotOptions,
                x = t.hasTouch,
                b = t.Series,
                k = t.seriesTypes,
                M = t.svg,
                w = (t.TrackerMixin = {
                  drawTrackerPoint: function () {
                    var t,
                      e = this,
                      i = e.chart,
                      s = i.pointer,
                      o = function (t) {
                        var e = s.getPointFromEvent(t);
                        "undefined" !== typeof e &&
                          ((s.isDirectTouch = !0), e.onMouseOver(t));
                      };
                    e.points.forEach(function (e) {
                      (t = c(e.dataLabels)
                        ? e.dataLabels
                        : e.dataLabel
                          ? [e.dataLabel]
                          : []),
                        e.graphic && (e.graphic.element.point = e),
                        t.forEach(function (t) {
                          t.div ? (t.div.point = e) : (t.element.point = e);
                        });
                    }),
                      e._hasTracking ||
                        (e.trackerGroups.forEach(function (t) {
                          e[t] &&
                            (e[t]
                              .addClass("highcharts-tracker")
                              .on("mouseover", o)
                              .on("mouseout", function (t) {
                                s.onTrackerMouseOut(t);
                              }),
                            x && e[t].on("touchstart", o),
                            !i.styledMode &&
                              e.options.cursor &&
                              e[t].css(r).css({ cursor: e.options.cursor }));
                        }),
                        (e._hasTracking = !0)),
                      l(this, "afterDrawTracker");
                  },
                  drawTrackerGraph: function () {
                    var t = this,
                      e = t.options,
                      i = e.trackByArea,
                      s = [].concat(i ? t.areaPath : t.graphPath),
                      o = t.chart,
                      n = o.pointer,
                      r = o.renderer,
                      a = o.options.tooltip.snap,
                      h = t.tracker,
                      c = function (e) {
                        o.hoverSeries !== t && t.onMouseOver();
                      },
                      d = "rgba(192,192,192," + (M ? 1e-4 : 0.002) + ")";
                    h
                      ? h.attr({ d: s })
                      : t.graph &&
                        ((t.tracker = r
                          .path(s)
                          .attr({
                            visibility: t.visible ? "visible" : "hidden",
                            zIndex: 2,
                          })
                          .addClass(
                            i
                              ? "highcharts-tracker-area"
                              : "highcharts-tracker-line",
                          )
                          .add(t.group)),
                        o.styledMode ||
                          t.tracker.attr({
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            stroke: d,
                            fill: i ? d : "none",
                            "stroke-width":
                              t.graph.strokeWidth() + (i ? 0 : 2 * a),
                          }),
                        [t.tracker, t.markerGroup].forEach(function (t) {
                          t
                            .addClass("highcharts-tracker")
                            .on("mouseover", c)
                            .on("mouseout", function (t) {
                              n.onTrackerMouseOut(t);
                            }),
                            e.cursor &&
                              !o.styledMode &&
                              t.css({ cursor: e.cursor }),
                            x && t.on("touchstart", c);
                        })),
                      l(this, "afterDrawTracker");
                  },
                });
              k.column && (k.column.prototype.drawTracker = w.drawTrackerPoint),
                k.pie && (k.pie.prototype.drawTracker = w.drawTrackerPoint),
                k.scatter &&
                  (k.scatter.prototype.drawTracker = w.drawTrackerPoint),
                h(e.prototype, {
                  setItemEvents: function (t, e, s) {
                    var o = this,
                      n = o.chart.renderer.boxWrapper,
                      r = t instanceof i,
                      a =
                        "highcharts-legend-" +
                        (r ? "point" : "series") +
                        "-active",
                      h = o.chart.styledMode;
                    (s ? [e, t.legendSymbol] : [t.legendGroup]).forEach(
                      function (i) {
                        i &&
                          i
                            .on("mouseover", function () {
                              t.visible &&
                                o.allItems.forEach(function (e) {
                                  t !== e && e.setState("inactive", !r);
                                }),
                                t.setState("hover"),
                                t.visible && n.addClass(a),
                                h || e.css(o.options.itemHoverStyle);
                            })
                            .on("mouseout", function () {
                              o.chart.styledMode ||
                                e.css(
                                  f(
                                    t.visible ? o.itemStyle : o.itemHiddenStyle,
                                  ),
                                ),
                                o.allItems.forEach(function (e) {
                                  t !== e && e.setState("", !r);
                                }),
                                n.removeClass(a),
                                t.setState();
                            })
                            .on("click", function (e) {
                              var i = function () {
                                t.setVisible && t.setVisible(),
                                  o.allItems.forEach(function (e) {
                                    t !== e &&
                                      e.setState(
                                        t.visible ? "inactive" : "",
                                        !r,
                                      );
                                  });
                              };
                              n.removeClass(a),
                                (e = { browserEvent: e }),
                                t.firePointEvent
                                  ? t.firePointEvent("legendItemClick", e, i)
                                  : l(t, "legendItemClick", e, i);
                            });
                      },
                    );
                  },
                  createCheckboxForItem: function (t) {
                    (t.checkbox = n(
                      "input",
                      {
                        type: "checkbox",
                        className: "highcharts-legend-checkbox",
                        checked: t.selected,
                        defaultChecked: t.selected,
                      },
                      this.options.itemCheckboxStyle,
                      this.chart.container,
                    )),
                      o(t.checkbox, "click", function (e) {
                        l(
                          t.series || t,
                          "checkboxClick",
                          { checked: e.target.checked, item: t },
                          function () {
                            t.select();
                          },
                        );
                      });
                  },
                }),
                h(s.prototype, {
                  showResetZoom: function () {
                    function t() {
                      e.zoomOut();
                    }
                    var e = this,
                      i = y.lang,
                      s = e.options.chart.resetZoomButton,
                      o = s.theme,
                      n = o.states,
                      r =
                        "chart" === s.relativeTo || "spaceBox" === s.relativeTo
                          ? null
                          : "plotBox";
                    l(this, "beforeShowResetZoom", null, function () {
                      e.resetZoomButton = e.renderer
                        .button(i.resetZoom, null, null, t, o, n && n.hover)
                        .attr({
                          align: s.position.align,
                          title: i.resetZoomTitle,
                        })
                        .addClass("highcharts-reset-zoom")
                        .add()
                        .align(s.position, !1, r);
                    }),
                      l(this, "afterShowResetZoom");
                  },
                  zoomOut: function () {
                    l(this, "selection", { resetSelection: !0 }, this.zoom);
                  },
                  zoom: function (t) {
                    var e,
                      i = this,
                      s = i.pointer,
                      o = !1,
                      n = i.inverted ? s.mouseDownX : s.mouseDownY;
                    !t || t.resetSelection
                      ? (i.axes.forEach(function (t) {
                          e = t.zoom();
                        }),
                        (s.initiated = !1))
                      : t.xAxis.concat(t.yAxis).forEach(function (t) {
                          var r = t.axis,
                            h = i.inverted ? r.left : r.top,
                            l = i.inverted ? h + r.width : h + r.height,
                            c = r.isXAxis,
                            d = !1;
                          ((!c && n >= h && n <= l) || c || !a(n)) && (d = !0),
                            s[c ? "zoomX" : "zoomY"] &&
                              d &&
                              ((e = r.zoom(t.min, t.max)),
                              r.displayBtn && (o = !0));
                        });
                    var r = i.resetZoomButton;
                    o && !r
                      ? i.showResetZoom()
                      : !o && u(r) && (i.resetZoomButton = r.destroy()),
                      e &&
                        i.redraw(
                          m(
                            i.options.chart.animation,
                            t && t.animation,
                            100 > i.pointCount,
                          ),
                        );
                  },
                  pan: function (e, i) {
                    var s,
                      o = this,
                      n = o.hoverPoints,
                      a = o.options.chart,
                      h =
                        o.options.mapNavigation &&
                        o.options.mapNavigation.enabled;
                    (i = "object" === typeof i ? i : { enabled: i, type: "x" }),
                      a && a.panning && (a.panning = i);
                    var c = i.type;
                    l(this, "pan", { originalEvent: e }, function () {
                      n &&
                        n.forEach(function (t) {
                          t.setState();
                        });
                      var i = [1];
                      "xy" === c ? (i = [1, 0]) : "y" === c && (i = [0]),
                        i.forEach(function (i) {
                          var n = o[i ? "xAxis" : "yAxis"][0],
                            r = n.options,
                            a = n.horiz,
                            l = e[a ? "chartX" : "chartY"],
                            d = o[(a = a ? "mouseDownX" : "mouseDownY")],
                            u = (n.pointRange || 0) / 2,
                            f =
                              (n.reversed && !o.inverted) ||
                              (!n.reversed && o.inverted)
                                ? -1
                                : 1,
                            g = n.getExtremes(),
                            m = n.toValue(d - l, !0) + u * f,
                            y = (f = n.toValue(d + n.len - l, !0) - u * f) < m;
                          (d = y ? f : m), (m = y ? m : f);
                          var v = n.hasVerticalPanning(),
                            x = n.panningState;
                          n.series.forEach(function (t) {
                            if (v && !i && (!x || x.isDirty)) {
                              var e = t.getProcessedData(!0);
                              (t = t.getExtremes(e.yData, !0)),
                                x ||
                                  (x = {
                                    startMin: Number.MAX_VALUE,
                                    startMax: -Number.MAX_VALUE,
                                  }),
                                p(t.dataMin) &&
                                  p(t.dataMax) &&
                                  ((x.startMin = Math.min(
                                    t.dataMin,
                                    x.startMin,
                                  )),
                                  (x.startMax = Math.max(
                                    t.dataMax,
                                    x.startMax,
                                  )));
                            }
                          }),
                            (f = Math.min(
                              t.pick(
                                null === x || void 0 === x
                                  ? void 0
                                  : x.startMin,
                                g.dataMin,
                              ),
                              u
                                ? g.min
                                : n.toValue(
                                    n.toPixels(g.min) - n.minPixelPadding,
                                  ),
                            )),
                            (u = Math.max(
                              t.pick(
                                null === x || void 0 === x
                                  ? void 0
                                  : x.startMax,
                                g.dataMax,
                              ),
                              u
                                ? g.max
                                : n.toValue(
                                    n.toPixels(g.max) + n.minPixelPadding,
                                  ),
                            )),
                            (n.panningState = x),
                            r.ordinal ||
                              (0 < (r = f - d) && ((m += r), (d = f)),
                              0 < (r = m - u) && ((m = u), (d -= r)),
                              ((n.series.length &&
                                d !== g.min &&
                                m !== g.max &&
                                i) ||
                                (x && d >= f && m <= u)) &&
                                (n.setExtremes(d, m, !1, !1, {
                                  trigger: "pan",
                                }),
                                o.resetZoomButton ||
                                  h ||
                                  !c.match("y") ||
                                  (o.showResetZoom(), (n.displayBtn = !1)),
                                (s = !0)),
                              (o[a] = l));
                        }),
                        s && o.redraw(!1),
                        r(o.container, { cursor: "move" });
                    });
                  },
                }),
                h(i.prototype, {
                  select: function (t, e) {
                    var i = this,
                      s = i.series,
                      o = s.chart;
                    (this.selectedStaging = t = m(t, !i.selected)),
                      i.firePointEvent(
                        t ? "select" : "unselect",
                        { accumulate: e },
                        function () {
                          (i.selected = i.options.selected = t),
                            (s.options.data[s.data.indexOf(i)] = i.options),
                            i.setState(t && "select"),
                            e ||
                              o.getSelectedPoints().forEach(function (t) {
                                var e = t.series;
                                t.selected &&
                                  t !== i &&
                                  ((t.selected = t.options.selected = !1),
                                  (e.options.data[e.data.indexOf(t)] =
                                    t.options),
                                  t.setState(
                                    o.hoverPoints &&
                                      e.options.inactiveOtherPoints
                                      ? "inactive"
                                      : "",
                                  ),
                                  t.firePointEvent("unselect"));
                              });
                        },
                      ),
                      delete this.selectedStaging;
                  },
                  onMouseOver: function (t) {
                    var e = this.series.chart,
                      i = e.pointer;
                    (t = t
                      ? i.normalize(t)
                      : i.getChartCoordinatesFromPoint(this, e.inverted)),
                      i.runPointActions(t, this);
                  },
                  onMouseOut: function () {
                    var t = this.series.chart;
                    this.firePointEvent("mouseOut"),
                      this.series.options.inactiveOtherPoints ||
                        (t.hoverPoints || []).forEach(function (t) {
                          t.setState();
                        }),
                      (t.hoverPoints = t.hoverPoint = null);
                  },
                  importEvents: function () {
                    if (!this.hasImportedEvents) {
                      var t = this,
                        e = f(t.series.options.point, t.options).events;
                      (t.events = e),
                        g(e, function (e, i) {
                          d(e) && o(t, i, e);
                        }),
                        (this.hasImportedEvents = !0);
                    }
                  },
                  setState: function (t, e) {
                    var i,
                      s = this.series,
                      o = this.state,
                      n = s.options.states[t || "normal"] || {},
                      r = v[s.type].marker && s.options.marker,
                      a = r && !1 === r.enabled,
                      c = (r && r.states && r.states[t || "normal"]) || {},
                      d = !1 === c.enabled,
                      p = s.stateMarkerGraphic,
                      u = this.marker || {},
                      f = s.chart,
                      g = s.halo,
                      y = r && s.markerAttribs;
                    if (
                      !(
                        ((t = t || "") === this.state && !e) ||
                        (this.selected && "select" !== t) ||
                        !1 === n.enabled ||
                        (t && (d || (a && !1 === c.enabled))) ||
                        (t &&
                          u.states &&
                          u.states[t] &&
                          !1 === u.states[t].enabled)
                      )
                    ) {
                      if (
                        ((this.state = t),
                        y && (i = s.markerAttribs(this, t)),
                        this.graphic)
                      ) {
                        if (
                          (o &&
                            this.graphic.removeClass("highcharts-point-" + o),
                          t && this.graphic.addClass("highcharts-point-" + t),
                          !f.styledMode)
                        ) {
                          var x = s.pointAttribs(this, t),
                            b = m(f.options.chart.animation, n.animation);
                          s.options.inactiveOtherPoints &&
                            x.opacity &&
                            ((this.dataLabels || []).forEach(function (t) {
                              t && t.animate({ opacity: x.opacity }, b);
                            }),
                            this.connector &&
                              this.connector.animate(
                                { opacity: x.opacity },
                                b,
                              )),
                            this.graphic.animate(x, b);
                        }
                        i &&
                          this.graphic.animate(
                            i,
                            m(
                              f.options.chart.animation,
                              c.animation,
                              r.animation,
                            ),
                          ),
                          p && p.hide();
                      } else
                        t &&
                          c &&
                          ((o = u.symbol || s.symbol),
                          p && p.currentSymbol !== o && (p = p.destroy()),
                          i &&
                            (p
                              ? p[e ? "animate" : "attr"]({ x: i.x, y: i.y })
                              : o &&
                                ((s.stateMarkerGraphic = p =
                                  f.renderer
                                    .symbol(o, i.x, i.y, i.width, i.height)
                                    .add(s.markerGroup)),
                                (p.currentSymbol = o))),
                          !f.styledMode &&
                            p &&
                            p.attr(s.pointAttribs(this, t))),
                          p &&
                            (p[t && this.isInside ? "show" : "hide"](),
                            (p.element.point = this));
                      (t = n.halo),
                        (n =
                          ((p = this.graphic || p) && p.visibility) ||
                          "inherit"),
                        t && t.size && p && "hidden" !== n && !this.isCluster
                          ? (g ||
                              (s.halo = g =
                                f.renderer.path().add(p.parentGroup)),
                            g
                              .show()
                              [
                                e ? "animate" : "attr"
                              ]({ d: this.haloPath(t.size) }),
                            g.attr({
                              class:
                                "highcharts-halo highcharts-color-" +
                                m(this.colorIndex, s.colorIndex) +
                                (this.className ? " " + this.className : ""),
                              visibility: n,
                              zIndex: -1,
                            }),
                            (g.point = this),
                            f.styledMode ||
                              g.attr(
                                h(
                                  {
                                    fill: this.color || s.color,
                                    "fill-opacity": t.opacity,
                                  },
                                  t.attributes,
                                ),
                              ))
                          : g &&
                            g.point &&
                            g.point.haloPath &&
                            g.animate({ d: g.point.haloPath(0) }, null, g.hide),
                        l(this, "afterSetState");
                    }
                  },
                  haloPath: function (t) {
                    return this.series.chart.renderer.symbols.circle(
                      Math.floor(this.plotX) - t,
                      this.plotY - t,
                      2 * t,
                      2 * t,
                    );
                  },
                }),
                h(b.prototype, {
                  onMouseOver: function () {
                    var t = this.chart,
                      e = t.hoverSeries;
                    t.pointer.setHoverChartIndex(),
                      e && e !== this && e.onMouseOut(),
                      this.options.events.mouseOver && l(this, "mouseOver"),
                      this.setState("hover"),
                      (t.hoverSeries = this);
                  },
                  onMouseOut: function () {
                    var t = this.options,
                      e = this.chart,
                      i = e.tooltip,
                      s = e.hoverPoint;
                    (e.hoverSeries = null),
                      s && s.onMouseOut(),
                      this && t.events.mouseOut && l(this, "mouseOut"),
                      !i ||
                        this.stickyTracking ||
                        (i.shared && !this.noSharedTooltip) ||
                        i.hide(),
                      e.series.forEach(function (t) {
                        t.setState("", !0);
                      });
                  },
                  setState: function (t, e) {
                    var i = this,
                      s = i.options,
                      o = i.graph,
                      n = s.inactiveOtherPoints,
                      r = s.states,
                      a = s.lineWidth,
                      h = s.opacity,
                      l = m(
                        r[t || "normal"] && r[t || "normal"].animation,
                        i.chart.options.chart.animation,
                      );
                    if (
                      ((s = 0),
                      (t = t || ""),
                      i.state !== t &&
                        ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(
                          function (e) {
                            e &&
                              (i.state &&
                                e.removeClass("highcharts-series-" + i.state),
                              t && e.addClass("highcharts-series-" + t));
                          },
                        ),
                        (i.state = t),
                        !i.chart.styledMode))
                    ) {
                      if (r[t] && !1 === r[t].enabled) return;
                      if (
                        (t &&
                          ((a =
                            r[t].lineWidth || a + (r[t].lineWidthPlus || 0)),
                          (h = m(r[t].opacity, h))),
                        o && !o.dashstyle)
                      )
                        for (
                          r = { "stroke-width": a }, o.animate(r, l);
                          i["zone-graph-" + s];

                        )
                          i["zone-graph-" + s].attr(r), (s += 1);
                      n ||
                        [
                          i.group,
                          i.markerGroup,
                          i.dataLabelsGroup,
                          i.labelBySeries,
                        ].forEach(function (t) {
                          t && t.animate({ opacity: h }, l);
                        });
                    }
                    e && n && i.points && i.setAllPointsToState(t);
                  },
                  setAllPointsToState: function (t) {
                    this.points.forEach(function (e) {
                      e.setState && e.setState(t);
                    });
                  },
                  setVisible: function (t, e) {
                    var i = this,
                      s = i.chart,
                      o = i.legendItem,
                      n = s.options.chart.ignoreHiddenSeries,
                      r = i.visible,
                      a = (i.visible =
                        t =
                        i.options.visible =
                        i.userOptions.visible =
                          "undefined" === typeof t ? !r : t)
                        ? "show"
                        : "hide";
                    [
                      "group",
                      "dataLabelsGroup",
                      "markerGroup",
                      "tracker",
                      "tt",
                    ].forEach(function (t) {
                      i[t] && i[t][a]();
                    }),
                      (s.hoverSeries !== i &&
                        (s.hoverPoint && s.hoverPoint.series) !== i) ||
                        i.onMouseOut(),
                      o && s.legend.colorizeItem(i, t),
                      (i.isDirty = !0),
                      i.options.stacking &&
                        s.series.forEach(function (t) {
                          t.options.stacking && t.visible && (t.isDirty = !0);
                        }),
                      i.linkedSeries.forEach(function (e) {
                        e.setVisible(t, !1);
                      }),
                      n && (s.isDirtyBox = !0),
                      l(i, a),
                      !1 !== e && s.redraw();
                  },
                  show: function () {
                    this.setVisible(!0);
                  },
                  hide: function () {
                    this.setVisible(!1);
                  },
                  select: function (t) {
                    (this.selected =
                      t =
                      this.options.selected =
                        "undefined" === typeof t ? !this.selected : t),
                      this.checkbox && (this.checkbox.checked = t),
                      l(this, t ? "select" : "unselect");
                  },
                  drawTracker: w.drawTrackerGraph,
                });
            },
          ),
          e(
            i,
            "parts/Responsive.js",
            [i["parts/Globals.js"], i["parts/Utilities.js"]],
            function (t, e) {
              var i = e.find,
                s = e.isArray,
                o = e.isObject,
                n = e.merge,
                r = e.objectEach,
                a = e.pick,
                h = e.splat,
                l = e.uniqueKey;
              ((t = t.Chart).prototype.setResponsive = function (t, e) {
                var s = this.options.responsive,
                  o = [],
                  r = this.currentResponsive;
                !e &&
                  s &&
                  s.rules &&
                  s.rules.forEach(function (t) {
                    "undefined" === typeof t._id && (t._id = l()),
                      this.matchResponsiveRule(t, o);
                  }, this),
                  ((e = n.apply(
                    0,
                    o.map(function (t) {
                      return i(s.rules, function (e) {
                        return e._id === t;
                      }).chartOptions;
                    }),
                  )).isResponsiveOptions = !0),
                  (o = o.toString() || void 0) !== (r && r.ruleIds) &&
                    (r && this.update(r.undoOptions, t, !0),
                    o
                      ? (((r = this.currentOptions(e)).isResponsiveOptions =
                          !0),
                        (this.currentResponsive = {
                          ruleIds: o,
                          mergedOptions: e,
                          undoOptions: r,
                        }),
                        this.update(e, t, !0))
                      : (this.currentResponsive = void 0));
              }),
                (t.prototype.matchResponsiveRule = function (t, e) {
                  var i = t.condition;
                  (
                    i.callback ||
                    function () {
                      return (
                        this.chartWidth <= a(i.maxWidth, Number.MAX_VALUE) &&
                        this.chartHeight <= a(i.maxHeight, Number.MAX_VALUE) &&
                        this.chartWidth >= a(i.minWidth, 0) &&
                        this.chartHeight >= a(i.minHeight, 0)
                      );
                    }
                  ).call(this) && e.push(t._id);
                }),
                (t.prototype.currentOptions = function (t) {
                  var e = this,
                    i = {};
                  return (
                    (function t(i, n, a, l) {
                      var c;
                      r(i, function (i, r) {
                        if (!l && -1 < e.collectionsWithUpdate.indexOf(r))
                          for (i = h(i), a[r] = [], c = 0; c < i.length; c++)
                            n[r][c] &&
                              ((a[r][c] = {}),
                              t(i[c], n[r][c], a[r][c], l + 1));
                        else
                          o(i)
                            ? ((a[r] = s(i) ? [] : {}),
                              t(i, n[r] || {}, a[r], l + 1))
                            : (a[r] =
                                "undefined" === typeof n[r] ? null : n[r]);
                      });
                    })(t, this.options, i, 0),
                    i
                  );
                });
            },
          ),
          e(
            i,
            "masters/highcharts.src.js",
            [i["parts/Globals.js"]],
            function (t) {
              return t;
            },
          ),
          (i["masters/highcharts.src.js"]._modules = i),
          i["masters/highcharts.src.js"]
        );
      });
    },
    467: function (t, e, i) {
      "use strict";
      var s;
      (s = function (t) {
        var e;
        (e = t).wrap(e.seriesTypes.column.prototype, "translate", function (t) {
          var i = this.options,
            s = i.topMargin || 0,
            o = i.bottomMargin || 0;
          t.call(this),
            e.each(this.points, function (t) {
              if (
                i.borderRadiusTopLeft ||
                i.borderRadiusTopRight ||
                i.borderRadiusBottomRight ||
                i.borderRadiusBottomLeft
              ) {
                var n = t.shapeArgs.width,
                  r = t.shapeArgs.height,
                  a = t.shapeArgs.x,
                  h = t.shapeArgs.y,
                  l = e.relativeLength(i.borderRadiusTopLeft || 0, n),
                  c = e.relativeLength(i.borderRadiusTopRight || 0, n),
                  d = e.relativeLength(i.borderRadiusBottomRight || 0, n),
                  p = e.relativeLength(i.borderRadiusBottomLeft || 0, n),
                  u = Math.min(n, r) / 2;
                (l = l > u ? u : l),
                  (c = c > u ? u : c),
                  (d = d > u ? u : d),
                  (p = p > u ? u : p),
                  (t.dlBox = t.shapeArgs),
                  (t.shapeType = "path"),
                  (t.shapeArgs = {
                    d: [
                      "M",
                      a + l,
                      h + s,
                      "L",
                      a + n - c,
                      h + s,
                      "C",
                      a + n - c / 2,
                      h,
                      a + n,
                      h + c / 2,
                      a + n,
                      h + c,
                      "L",
                      a + n,
                      h + r - d,
                      "C",
                      a + n,
                      h + r - d / 2,
                      a + n - d / 2,
                      h + r,
                      a + n - d,
                      h + r + o,
                      "L",
                      a + p,
                      h + r + o,
                      "C",
                      a + p / 2,
                      h + r,
                      a,
                      h + r - p / 2,
                      a,
                      h + r - p,
                      "L",
                      a,
                      h + l,
                      "C",
                      a,
                      h + l / 2,
                      a + l / 2,
                      h,
                      a + l,
                      h,
                      "Z",
                    ],
                  });
              }
            });
        });
      }),
        t.exports ? (t.exports = s) : s(Highcharts);
    },
  },
]);
//# sourceMappingURL=4.72ac63ad.chunk.js.map
