let pageRequiresScrollspy = document.getElementById('sidebarNav');

if (pageRequiresScrollspy) {
  ! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ActiveMenuLink = e() : t.ActiveMenuLink = e()
  }(window, function () {
    return function (t) {
      var e = {};

      function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
          i: i,
          l: !1,
          exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
      }
      return n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: i
        })
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        })
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t)
          for (var r in t) n.d(i, r, function (e) {
            return t[e]
          }.bind(null, r));
        return i
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        } : function () {
          return t
        };
        return n.d(e, "a", e), e
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }, n.p = "", n(n.s = 2)
    }([function (t, e) {
      var n = Object.prototype.toString;
      t.exports = function (t) {
        switch (n.call(t)) {
          case "[object Date]":
            return "date";
          case "[object RegExp]":
            return "regexp";
          case "[object Arguments]":
            return "arguments";
          case "[object Array]":
            return "array";
          case "[object Error]":
            return "error"
        }
        return null === t ? "null" : void 0 === t ? "undefined" : t != t ? "nan" : t && 1 === t.nodeType ? "element" : typeof (t = t.valueOf ? t.valueOf() : Object.prototype.valueOf.apply(t))
      }
        }, function (t, e, n) {
      "use strict";
      var i = this && this.__assign || function () {
        return (i = Object.assign || function (t) {
          for (var e, n = 1, i = arguments.length; n < i; n++)
            for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t
        }).apply(this, arguments)
      };
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = n(3),
        o = n(4),
        u = function () {
          function t(t, e) {
            var n = this;
            if (void 0 === e && (e = null), this.activeIndex = -1, this.nameAttribute = "link-name", this.params = {
                itemTag: "li",
                activeClass: "active",
                scrollOffset: 0,
                scrollDuration: 500,
                ease: "out-circ",
                headerHeight: null,
                default: null,
                showHash: !0
              }, !(t.length < 1)) {
              this.manuSelector = t, this.params = i({}, this.params, e);
              var r = document.querySelectorAll(this.manuSelector)[0];
              void 0 !== r && (null === this.params.headerHeight && (this.params.headerHeight = r.clientHeight), this.menu = r, this.links = this.getLinks(), this.setNames(this.links), this.defaultLink = this.getDefaultLink(), this.onScrollLinks(this.links), this.onClickLinks(this.links)), document.addEventListener("scroll", function (t) {
                n.onScrollLinks(n.links)
              })
            }
          }
          return t.prototype.getLinks = function () {
            return void 0 === typeof this.menu ? null : this.menu.querySelectorAll(this.params.itemTag + " a")
          }, t.prototype.getDefaultLink = function () {
            var t = this;
            if (void 0 === typeof this.menu) return null;
            var e = this.getLinks(),
              n = null;
            return e.forEach(function (e) {
              var i = e.getAttribute("href");
              0 === i.indexOf("#") && (i = i.replace("#", "")) === t.params.default && (n = e)
            }), n
          }, t.prototype.setNames = function (t) {
            var e = this;
            t.forEach(function (t) {
              var n = t.getAttribute("href");
              if (-1 !== n.indexOf("#")) {
                var i = n.split("#")[1];
                t.setAttribute(e.nameAttribute, i)
              }
            })
          }, t.prototype.setDefaultActive = function () {
            null !== this.defaultLink && this.defaultLink.classList.add(this.params.activeClass)
          }, t.prototype.unsetDefaultActive = function () {
            null !== this.defaultLink && this.defaultLink.classList.remove(this.params.activeClass)
          }, t.prototype.onScrollLinks = function (t) {
            var e = this,
              n = window.scrollY;
            this.activeIndex = -1, t.forEach(function (t, i) {
              var o = t.getAttribute(e.nameAttribute),
                u = document.getElementById(o);
              if (null !== u) {
                var a = u.offsetTop +r.getAbsoluteHeight(u);
                t.classList.remove(e.params.activeClass), o !== e.params.default && u && a <= n + e.params.headerHeight && a + r.getAbsoluteHeight(u) > n + e.params.headerHeight && (t.classList.add(e.params.activeClass), e.activeIndex = i, e.unsetDefaultActive())
              }
            }), -1 === this.activeIndex && this.setDefaultActive()
          }, t.prototype.onClickLinks = function (t) {
            var e = this;
            t.forEach(function (t) {
              var n = t.getAttribute(e.nameAttribute),
                i = document.getElementById(n);

            })
          }, t
        }();
      e.default = u
        }, function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(1),
        r = n.n(i);
      document.addEventListener("DOMContentLoaded", () => {
        new r.a("#sidebarNav")
      })
        }, function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.getAbsoluteHeight = function (t) {
        var e = window.getComputedStyle(t),
          n = parseFloat(e.marginTop) + parseFloat(e.marginBottom);
        return Math.ceil(t.offsetHeight + n)
      }, e.getMarginTop = function (t) {
        var e = window.getComputedStyle(t);
        return parseFloat(e.marginTop)
      }
        }, function (t, e, n) {
      var i = n(5),
        r = n(9);
      t.exports = function (t, e, n) {
        n = n || {};
        var o = function () {
            var t = window.pageYOffset || document.documentElement.scrollTop,
              e = window.pageXOffset || document.documentElement.scrollLeft;
            return {
              top: t,
              left: e
            }
          }(),
          u = i(o).ease(n.ease || "out-circ").to({
            top: e,
            left: t
          }).duration(n.duration || 1e3);

        function a() {
          r(a), u.update()
        }
        return u.update(function (t) {
          window.scrollTo(0 | t.left, 0 | t.top)
        }), u.on("end", function () {
          a = function () {}
        }), a(), u
      }
        }, function (t, e, n) {
      var i = n(6),
        r = n(7),
        o = n(0),
        u = n(8);

      function a(t) {
        if (!(this instanceof a)) return new a(t);
        this._from = t, this.ease("linear"), this.duration(500)
      }
      t.exports = a, i(a.prototype), a.prototype.reset = function () {
        return this.isArray = "array" === o(this._from), this._curr = r(this._from), this._done = !1, this._start = Date.now(), this
      }, a.prototype.to = function (t) {
        return this.reset(), this._to = t, this
      }, a.prototype.duration = function (t) {
        return this._duration = t, this
      }, a.prototype.ease = function (t) {
        if (!(t = "function" == typeof t ? t : u[t])) throw new TypeError("invalid easing function");
        return this._ease = t, this
      }, a.prototype.stop = function () {
        return this.stopped = !0, this._done = !0, this.emit("stop"), this.emit("end"), this
      }, a.prototype.step = function () {
        if (!this._done) {
          var t = this._duration,
            e = Date.now();
          if (e - this._start >= t) return this._from = this._to, this._update(this._to), this._done = !0, this.emit("end"), this;
          var n = this._from,
            i = this._to,
            r = this._curr,
            o = (0, this._ease)((e - this._start) / t);
          if (this.isArray) {
            for (var u = 0; u < n.length; ++u) r[u] = n[u] + (i[u] - n[u]) * o;
            return this._update(r), this
          }
          for (var a in n) r[a] = n[a] + (i[a] - n[a]) * o;
          return this._update(r), this
        }
      }, a.prototype.update = function (t) {
        return 0 == arguments.length ? this.step() : (this._update = t, this)
      }
        }, function (t, e) {
      function n(t) {
        if (t) return function (t) {
          for (var e in n.prototype) t[e] = n.prototype[e];
          return t
        }(t)
      }
      t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
      }, n.prototype.once = function (t, e) {
        function n() {
          this.off(t, n), e.apply(this, arguments)
        }
        return n.fn = e, this.on(t, n), this
      }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, i = this._callbacks["$" + t];
        if (!i) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var r = 0; r < i.length; r++)
          if ((n = i[r]) === e || n.fn === e) {
            i.splice(r, 1);
            break
          }
        return this
      }, n.prototype.emit = function (t) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1),
          n = this._callbacks["$" + t];
        if (n)
          for (var i = 0, r = (n = n.slice(0)).length; i < r; ++i) n[i].apply(this, e);
        return this
      }, n.prototype.listeners = function (t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
      }, n.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length
      }
        }, function (t, e, n) {
      var i;
      try {
        i = n(0)
      } catch (t) {
        i = n(0)
      }
      t.exports = function t(e) {
        switch (i(e)) {
          case "object":
            var n = {};
            for (var r in e) e.hasOwnProperty(r) && (n[r] = t(e[r]));
            return n;
          case "array":
            for (var n = new Array(e.length), o = 0, u = e.length; o < u; o++) n[o] = t(e[o]);
            return n;
          case "regexp":
            var a = "";
            return a += e.multiline ? "m" : "", a += e.global ? "g" : "", a += e.ignoreCase ? "i" : "", new RegExp(e.source, a);
          case "date":
            return new Date(e.getTime());
          default:
            return e
        }
      }
        }, function (t, e) {
      e.linear = function (t) {
        return t
      }, e.inQuad = function (t) {
        return t * t
      }, e.outQuad = function (t) {
        return t * (2 - t)
      }, e.inOutQuad = function (t) {
        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
      }, e.inCube = function (t) {
        return t * t * t
      }, e.outCube = function (t) {
        return --t * t * t + 1
      }, e.inOutCube = function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      }, e.inQuart = function (t) {
        return t * t * t * t
      }, e.outQuart = function (t) {
        return 1 - --t * t * t * t
      }, e.inOutQuart = function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
      }, e.inQuint = function (t) {
        return t * t * t * t * t
      }, e.outQuint = function (t) {
        return --t * t * t * t * t + 1
      }, e.inOutQuint = function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
      }, e.inSine = function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
      }, e.outSine = function (t) {
        return Math.sin(t * Math.PI / 2)
      }, e.inOutSine = function (t) {
        return .5 * (1 - Math.cos(Math.PI * t))
      }, e.inExpo = function (t) {
        return 0 == t ? 0 : Math.pow(1024, t - 1)
      }, e.outExpo = function (t) {
        return 1 == t ? t : 1 - Math.pow(2, -10 * t)
      }, e.inOutExpo = function (t) {
        return 0 == t ? 0 : 1 == t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
      }, e.inCirc = function (t) {
        return 1 - Math.sqrt(1 - t * t)
      }, e.outCirc = function (t) {
        return Math.sqrt(1 - --t * t)
      }, e.inOutCirc = function (t) {
        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      }, e.inBack = function (t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e)
      }, e.outBack = function (t) {
        var e = 1.70158;
        return --t * t * ((e + 1) * t + e) + 1
      }, e.inOutBack = function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
      }, e.inBounce = function (t) {
        return 1 - e.outBounce(1 - t)
      }, e.outBounce = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
      }, e.inOutBounce = function (t) {
        return t < .5 ? .5 * e.inBounce(2 * t) : .5 * e.outBounce(2 * t - 1) + .5
      }, e["in-quad"] = e.inQuad, e["out-quad"] = e.outQuad, e["in-out-quad"] = e.inOutQuad, e["in-cube"] = e.inCube, e["out-cube"] = e.outCube, e["in-out-cube"] = e.inOutCube, e["in-quart"] = e.inQuart, e["out-quart"] = e.outQuart, e["in-out-quart"] = e.inOutQuart, e["in-quint"] = e.inQuint, e["out-quint"] = e.outQuint, e["in-out-quint"] = e.inOutQuint, e["in-sine"] = e.inSine, e["out-sine"] = e.outSine, e["in-out-sine"] = e.inOutSine, e["in-expo"] = e.inExpo, e["out-expo"] = e.outExpo, e["in-out-expo"] = e.inOutExpo, e["in-circ"] = e.inCirc, e["out-circ"] = e.outCirc, e["in-out-circ"] = e.inOutCirc, e["in-back"] = e.inBack, e["out-back"] = e.outBack, e["in-out-back"] = e.inOutBack, e["in-bounce"] = e.inBounce, e["out-bounce"] = e.outBounce, e["in-out-bounce"] = e.inOutBounce
        }, function (t, e) {
      e = t.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
        var e = (new Date).getTime(),
          i = Math.max(0, 16 - (e - n)),
          r = setTimeout(t, i);
        return n = e, r
      };
      var n = (new Date).getTime();
      var i = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;
      e.cancel = function (t) {
        i.call(window, t)
      }
        }])
  });

}
