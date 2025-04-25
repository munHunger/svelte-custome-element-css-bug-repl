var je = Object.defineProperty;
var Yt = (t) => {
  throw TypeError(t);
};
var Me = (t, e, n) => e in t ? je(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var A = (t, e, n) => Me(t, typeof e != "symbol" ? e + "" : e, n), Ht = (t, e, n) => e.has(t) || Yt("Cannot " + n);
var g = (t, e, n) => (Ht(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ot = (t, e, n) => e.has(t) ? Yt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Nt = (t, e, n, r) => (Ht(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
const qe = "5";
var Xt, te, ee;
typeof window != "undefined" && ((ee = (te = (Xt = window.__svelte) != null ? Xt : window.__svelte = {}).v) != null ? ee : te.v = /* @__PURE__ */ new Set()).add(qe);
let rt = !1, Be = !1;
function Ye() {
  rt = !0;
}
Ye();
const He = 2, Ue = "[", Ve = "]", ot = {}, m = Symbol(), Ut = !1;
function Ke(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var ne = Array.isArray, We = Array.prototype.indexOf, Ge = Array.from, _t = Object.keys, ht = Object.defineProperty, G = Object.getOwnPropertyDescriptor, Je = Object.getOwnPropertyDescriptors, Ze = Object.prototype, ze = Array.prototype, re = Object.getPrototypeOf, Vt = Object.isExtensible;
function Qe(t) {
  return t();
}
function vt(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const C = 2, se = 4, jt = 8, le = 16, B = 32, U = 64, dt = 128, b = 256, $t = 512, N = 1024, F = 2048, V = 4096, pt = 8192, Et = 16384, Xe = 32768, tn = 65536, en = 1 << 19, ie = 1 << 20, Ct = 1 << 21, X = Symbol("$state"), nn = Symbol("legacy props");
function rn(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function sn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ln(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function un() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function on() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function an() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function cn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function fe(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let H = !1;
function ft(t) {
  H = t;
}
let O;
function Rt(t) {
  if (t === null)
    throw fe(), ot;
  return O = t;
}
function ue() {
  return Rt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ bt(O)
  );
}
function _n(t = 1) {
  if (H) {
    for (var e = t, n = O; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ bt(n);
    O = n;
  }
}
function W(t) {
  if (typeof t != "object" || t === null || X in t)
    return t;
  const e = re(t);
  if (e !== Ze && e !== ze)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ne(t), l = /* @__PURE__ */ I(0), s = v, o = (i) => {
    var f = v;
    q(s);
    var u = i();
    return q(f), u;
  };
  return r && n.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(i, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && on();
        var _ = n.get(f);
        return _ === void 0 ? (_ = o(() => /* @__PURE__ */ I(u.value)), n.set(f, _)) : D(
          _,
          o(() => W(u.value))
        ), !0;
      },
      deleteProperty(i, f) {
        var u = n.get(f);
        if (u === void 0)
          f in i && (n.set(
            f,
            o(() => /* @__PURE__ */ I(m))
          ), At(l));
        else {
          if (r && typeof f == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), a = Number(f);
            Number.isInteger(a) && a < _.v && D(_, a);
          }
          D(u, m), At(l);
        }
        return !0;
      },
      get(i, f, u) {
        var h;
        if (f === X)
          return t;
        var _ = n.get(f), a = f in i;
        if (_ === void 0 && (!a || (h = G(i, f)) != null && h.writable) && (_ = o(() => /* @__PURE__ */ I(W(a ? i[f] : m))), n.set(f, _)), _ !== void 0) {
          var c = j(_);
          return c === m ? void 0 : c;
        }
        return Reflect.get(i, f, u);
      },
      getOwnPropertyDescriptor(i, f) {
        var u = Reflect.getOwnPropertyDescriptor(i, f);
        if (u && "value" in u) {
          var _ = n.get(f);
          _ && (u.value = j(_));
        } else if (u === void 0) {
          var a = n.get(f), c = a == null ? void 0 : a.v;
          if (a !== void 0 && c !== m)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return u;
      },
      has(i, f) {
        var c;
        if (f === X)
          return !0;
        var u = n.get(f), _ = u !== void 0 && u.v !== m || Reflect.has(i, f);
        if (u !== void 0 || d !== null && (!_ || (c = G(i, f)) != null && c.writable)) {
          u === void 0 && (u = o(() => /* @__PURE__ */ I(_ ? W(i[f]) : m)), n.set(f, u));
          var a = j(u);
          if (a === m)
            return !1;
        }
        return _;
      },
      set(i, f, u, _) {
        var Q;
        var a = n.get(f), c = f in i;
        if (r && f === "length")
          for (var h = u; h < /** @type {Source<number>} */
          a.v; h += 1) {
            var p = n.get(h + "");
            p !== void 0 ? D(p, m) : h in i && (p = o(() => /* @__PURE__ */ I(m)), n.set(h + "", p));
          }
        a === void 0 ? (!c || (Q = G(i, f)) != null && Q.writable) && (a = o(() => /* @__PURE__ */ I(void 0)), D(
          a,
          o(() => W(u))
        ), n.set(f, a)) : (c = a.v !== m, D(
          a,
          o(() => W(u))
        ));
        var x = Reflect.getOwnPropertyDescriptor(i, f);
        if (x != null && x.set && x.set.call(_, u), !c) {
          if (r && typeof f == "string") {
            var lt = (
              /** @type {Source<number>} */
              n.get("length")
            ), z = Number(f);
            Number.isInteger(z) && z >= lt.v && D(lt, z + 1);
          }
          At(l);
        }
        return !0;
      },
      ownKeys(i) {
        j(l);
        var f = Reflect.ownKeys(i).filter((a) => {
          var c = n.get(a);
          return c === void 0 || c.v !== m;
        });
        for (var [u, _] of n)
          _.v !== m && !(u in i) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        an();
      }
    }
  );
}
function At(t, e = 1) {
  D(t, t.v + e);
}
var Kt, oe, ae, ce;
function St() {
  if (Kt === void 0) {
    Kt = window, oe = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ae = G(e, "firstChild").get, ce = G(e, "nextSibling").get, Vt(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Vt(n) && (n.__t = void 0);
  }
}
function hn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function _e(t) {
  return ae.call(t);
}
// @__NO_SIDE_EFFECTS__
function bt(t) {
  return ce.call(t);
}
function vn(t) {
  t.textContent = "";
}
function he(t) {
  return t === this.v;
}
function dn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function $n(t) {
  return !dn(t, this.v);
}
// @__NO_SIDE_EFFECTS__
function pn(t) {
  var e = C | F, n = v !== null && v.f & C ? (
    /** @type {Derived} */
    v
  ) : null;
  return d === null || n !== null && n.f & b ? e |= b : d.f |= ie, {
    ctx: $,
    deps: null,
    effects: null,
    equals: he,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n != null ? n : d
  };
}
function ve(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      M(
        /** @type {Effect} */
        e[n]
      );
  }
}
function yn(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & C))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function de(t) {
  var e, n = d;
  J(yn(t));
  try {
    ve(t), e = Ne(t);
  } finally {
    J(n);
  }
  return e;
}
function $e(t) {
  var e = de(t), n = (L || t.f & b) && t.deps !== null ? V : N;
  S(t, n), t.equals(e) || (t.v = e, t.wv = ke());
}
function pe(t) {
  d === null && v === null && ln(), v !== null && v.f & b && d === null && sn(), st && rn();
}
function wn(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Z(t, e, n, r = !0) {
  var f;
  var l = d, s = {
    ctx: $,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | F,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Mt(s), s.f |= Xe;
    } catch (u) {
      throw M(s), u;
    }
  else e !== null && qt(s);
  var o = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & (ie | dt)) === 0;
  if (!o && r && (l !== null && wn(s, l), v !== null && v.f & C)) {
    var i = (
      /** @type {Derived} */
      v
    );
    ((f = i.effects) != null ? f : i.effects = []).push(s);
  }
  return s;
}
function gn(t) {
  const e = Z(jt, null, !1);
  return S(e, N), e.teardown = t, e;
}
function Dt(t) {
  var l;
  pe();
  var e = d !== null && (d.f & B) !== 0 && $ !== null && !$.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      $
    );
    ((l = n.e) != null ? l : n.e = []).push({
      fn: t,
      effect: d,
      reaction: v
    });
  } else {
    var r = ye(t);
    return r;
  }
}
function mn(t) {
  return pe(), we(t);
}
function En(t) {
  const e = Z(U, t, !0);
  return () => {
    M(e);
  };
}
function bn(t) {
  const e = Z(U, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? On(e, () => {
      M(e), r(void 0);
    }) : (M(e), r(void 0));
  });
}
function ye(t) {
  return Z(se, t, !1);
}
function we(t) {
  return Z(jt, t, !0);
}
function xn(t, e = !0) {
  return Z(jt | B, t, !0, e);
}
function ge(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = st, r = v;
    Gt(!0), q(null);
    try {
      e.call(null);
    } finally {
      Gt(n), q(r);
    }
  }
}
function me(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    n.f & U ? n.parent = null : M(n, e), n = r;
  }
}
function Tn(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & B || M(e), e = n;
  }
}
function M(t, e = !0) {
  var n = !1;
  (e || t.f & en) && t.nodes_start !== null && (kn(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), me(t, e && !n), mt(t, 0), S(t, Et);
  var r = t.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  ge(t);
  var l = t.parent;
  l !== null && l.first !== null && Ee(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null;
}
function kn(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ bt(t)
    );
    t.remove(), t = n;
  }
}
function Ee(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function On(t, e) {
  var n = [];
  be(t, n, !0), Nn(n, () => {
    M(t), e && e();
  });
}
function Nn(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var l of t)
      l.out(r);
  } else
    e();
}
function be(t, e, n) {
  if (!(t.f & pt)) {
    if (t.f ^= pt, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var l = r.next, s = (r.f & tn) !== 0 || (r.f & B) !== 0;
      be(r, e, s ? n : !1), r = l;
    }
  }
}
let et = [], Pt = [];
function xe() {
  var t = et;
  et = [], vt(t);
}
function An() {
  var t = Pt;
  Pt = [], vt(t);
}
function Cn(t) {
  et.length === 0 && queueMicrotask(xe), et.push(t);
}
function Wt() {
  et.length > 0 && xe(), Pt.length > 0 && An();
}
let at = !1, yt = !1, wt = null, Y = !1, st = !1;
function Gt(t) {
  st = t;
}
let tt = [];
let v = null, R = !1;
function q(t) {
  v = t;
}
let d = null;
function J(t) {
  d = t;
}
let w = null;
function Rn(t) {
  v !== null && v.f & Ct && (w === null ? w = [t] : w.push(t));
}
let y = null, E = 0, T = null;
function Sn(t) {
  T = t;
}
let Te = 1, gt = 0, L = !1;
function ke() {
  return ++Te;
}
function xt(t) {
  var a, c;
  var e = t.f;
  if (e & F)
    return !0;
  if (e & V) {
    var n = t.deps, r = (e & b) !== 0;
    if (n !== null) {
      var l, s, o = (e & $t) !== 0, i = r && d !== null && !L, f = n.length;
      if (o || i) {
        var u = (
          /** @type {Derived} */
          t
        ), _ = u.parent;
        for (l = 0; l < f; l++)
          s = n[l], (o || !((a = s == null ? void 0 : s.reactions) != null && a.includes(u))) && ((c = s.reactions) != null ? c : s.reactions = []).push(u);
        o && (u.f ^= $t), i && _ !== null && !(_.f & b) && (u.f ^= b);
      }
      for (l = 0; l < f; l++)
        if (s = n[l], xt(
          /** @type {Derived} */
          s
        ) && $e(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || d !== null && !L) && S(t, N);
  }
  return !1;
}
function Dn(t, e) {
  for (var n = e; n !== null; ) {
    if (n.f & dt)
      try {
        n.fn(t);
        return;
      } catch {
        n.f ^= dt;
      }
    n = n.parent;
  }
  throw at = !1, t;
}
function Jt(t) {
  return (t.f & Et) === 0 && (t.parent === null || (t.parent.f & dt) === 0);
}
function Tt(t, e, n, r) {
  if (at) {
    if (n === null && (at = !1), Jt(e))
      throw t;
    return;
  }
  if (n !== null && (at = !0), Dn(t, e), Jt(e))
    throw t;
}
function Oe(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null)
    for (var l = 0; l < r.length; l++) {
      var s = r[l];
      w != null && w.includes(t) || (s.f & C ? Oe(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? S(s, F) : s.f & N && S(s, V), qt(
        /** @type {Effect} */
        s
      )));
    }
}
function Ne(t) {
  var h, p;
  var e = y, n = E, r = T, l = v, s = L, o = w, i = $, f = R, u = t.f;
  y = /** @type {null | Value[]} */
  null, E = 0, T = null, L = (u & b) !== 0 && (R || !Y || v === null), v = u & (B | U) ? null : t, w = null, Zt(t.ctx), R = !1, gt++, t.f |= Ct;
  try {
    var _ = (
      /** @type {Function} */
      (0, t.fn)()
    ), a = t.deps;
    if (y !== null) {
      var c;
      if (mt(t, E), a !== null && E > 0)
        for (a.length = E + y.length, c = 0; c < y.length; c++)
          a[E + c] = y[c];
      else
        t.deps = a = y;
      if (!L)
        for (c = E; c < a.length; c++)
          ((p = (h = a[c]).reactions) != null ? p : h.reactions = []).push(t);
    } else a !== null && E < a.length && (mt(t, E), a.length = E);
    if (kt() && T !== null && !R && a !== null && !(t.f & (C | V | F)))
      for (c = 0; c < /** @type {Source[]} */
      T.length; c++)
        Oe(
          T[c],
          /** @type {Effect} */
          t
        );
    return l !== null && l !== t && (gt++, T !== null && (r === null ? r = T : r.push(.../** @type {Source[]} */
    T))), _;
  } finally {
    y = e, E = n, T = r, v = l, L = s, w = o, Zt(i), R = f, t.f ^= Ct;
  }
}
function Pn(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = We.call(n, t);
    if (r !== -1) {
      var l = n.length - 1;
      l === 0 ? n = e.reactions = null : (n[r] = n[l], n.pop());
    }
  }
  n === null && e.f & C && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (y === null || !y.includes(e)) && (S(e, V), e.f & (b | $t) || (e.f ^= $t), ve(
    /** @type {Derived} **/
    e
  ), mt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function mt(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Pn(t, n[r]);
}
function Mt(t) {
  var e = t.f;
  if (!(e & Et)) {
    S(t, N);
    var n = d, r = $, l = Y;
    d = t, Y = !0;
    try {
      e & le ? Tn(t) : me(t), ge(t);
      var s = Ne(t);
      t.teardown = typeof s == "function" ? s : null, t.wv = Te;
      var o = t.deps, i;
      Ut && Be && t.f & F;
    } catch (f) {
      Tt(f, t, n, r || t.ctx);
    } finally {
      Y = l, d = n;
    }
  }
}
function Fn() {
  try {
    fn();
  } catch (t) {
    if (wt !== null)
      Tt(t, wt, null);
    else
      throw t;
  }
}
function Ae() {
  var t = Y;
  try {
    var e = 0;
    for (Y = !0; tt.length > 0; ) {
      e++ > 1e3 && Fn();
      var n = tt, r = n.length;
      tt = [];
      for (var l = 0; l < r; l++) {
        var s = Ln(n[l]);
        In(s);
      }
      nt.clear();
    }
  } finally {
    yt = !1, Y = t, wt = null;
  }
}
function In(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      if (!(r.f & (Et | pt)))
        try {
          xt(r) && (Mt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Ee(r) : r.fn = null));
        } catch (l) {
          Tt(l, r, null, r.ctx);
        }
    }
}
function qt(t) {
  yt || (yt = !0, queueMicrotask(Ae));
  for (var e = wt = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (U | B)) {
      if (!(n & N)) return;
      e.f ^= N;
    }
  }
  tt.push(e);
}
function Ln(t) {
  for (var e = [], n = t; n !== null; ) {
    var r = n.f, l = (r & (B | U)) !== 0, s = l && (r & N) !== 0;
    if (!s && !(r & pt)) {
      if (r & se)
        e.push(n);
      else if (l)
        n.f ^= N;
      else
        try {
          xt(n) && Mt(n);
        } catch (f) {
          Tt(f, n, null, n.ctx);
        }
      var o = n.first;
      if (o !== null) {
        n = o;
        continue;
      }
    }
    var i = n.parent;
    for (n = n.next; n === null && i !== null; )
      n = i.next, i = i.parent;
  }
  return e;
}
function jn(t) {
  var e;
  for (Wt(); tt.length > 0; )
    yt = !0, Ae(), Wt();
  return (
    /** @type {T} */
    e
  );
}
function j(t) {
  var e = t.f, n = (e & C) !== 0;
  if (v !== null && !R) {
    if (!(w != null && w.includes(t))) {
      var r = v.deps;
      t.rv < gt && (t.rv = gt, y === null && r !== null && r[E] === t ? E++ : y === null ? y = [t] : (!L || !y.includes(t)) && y.push(t));
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var l = (
      /** @type {Derived} */
      t
    ), s = l.parent;
    s !== null && !(s.f & b) && (l.f ^= b);
  }
  return n && (l = /** @type {Derived} */
  t, xt(l) && $e(l)), st && nt.has(t) ? nt.get(t) : t.v;
}
function Ce(t) {
  var e = R;
  try {
    return R = !0, t();
  } finally {
    R = e;
  }
}
const Mn = -7169;
function S(t, e) {
  t.f = t.f & Mn | e;
}
function qn(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (X in t)
      Ft(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && X in n && Ft(n);
      }
  }
}
function Ft(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Ft(t[r], e);
      } catch {
      }
    const n = re(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Je(n);
      for (let l in r) {
        const s = r[l].get;
        if (s)
          try {
            s.call(t);
          } catch {
          }
      }
    }
  }
}
const nt = /* @__PURE__ */ new Map();
function Bt(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: he,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function I(t, e) {
  const n = Bt(t);
  return Rn(n), n;
}
// @__NO_SIDE_EFFECTS__
function Bn(t, e = !1) {
  var r, l;
  const n = Bt(t);
  return e || (n.equals = $n), rt && $ !== null && $.l !== null && ((l = (r = $.l).s) != null ? l : r.s = []).push(n), n;
}
function D(t, e, n = !1) {
  v !== null && !R && kt() && v.f & (C | le) && !(w != null && w.includes(t)) && cn();
  let r = n ? W(e) : e;
  return Yn(t, r);
}
function Yn(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    st ? nt.set(t, e) : nt.set(t, n), t.v = e, t.f & C && (t.f & F && de(
      /** @type {Derived} */
      t
    ), S(t, t.f & b ? V : N)), t.wv = ke(), Re(t, F), kt() && d !== null && d.f & N && !(d.f & (B | U)) && (T === null ? Sn([t]) : T.push(t));
  }
  return e;
}
function Re(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = kt(), l = n.length, s = 0; s < l; s++) {
      var o = n[s], i = o.f;
      i & F || !r && o === d || (S(o, e), i & (N | b) && (i & C ? Re(
        /** @type {Derived} */
        o,
        V
      ) : qt(
        /** @type {Effect} */
        o
      )));
    }
}
let $ = null;
function Zt(t) {
  $ = t;
}
function Se(t, e = !1, n) {
  var r = $ = {
    p: $,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
  rt && !e && ($.l = {
    s: null,
    u: null,
    r1: [],
    r2: Bt(!1)
  }), gn(() => {
    r.d = !0;
  });
}
function De(t) {
  const e = $;
  if (e !== null) {
    const o = e.e;
    if (o !== null) {
      var n = d, r = v;
      e.e = null;
      try {
        for (var l = 0; l < o.length; l++) {
          var s = o[l];
          J(s.effect), q(s.reaction), ye(s.fn);
        }
      } finally {
        J(n), q(r);
      }
    }
    $ = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function kt() {
  return !rt || $ !== null && $.l === null;
}
const Hn = ["touchstart", "touchmove"];
function Un(t) {
  return Hn.includes(t);
}
const Vn = /* @__PURE__ */ new Set(), zt = /* @__PURE__ */ new Set();
function ut(t) {
  var Q;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, l = ((Q = t.composedPath) == null ? void 0 : Q.call(t)) || [], s = (
    /** @type {null | Element} */
    l[0] || t.target
  ), o = 0, i = t.__root;
  if (i) {
    var f = l.indexOf(i);
    if (f !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = l.indexOf(e);
    if (u === -1)
      return;
    f <= u && (o = f);
  }
  if (s = /** @type {Element} */
  l[o] || t.target, s !== e) {
    ht(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var _ = v, a = d;
    q(null), J(null);
    try {
      for (var c, h = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var x = s["__" + r];
          if (x != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (ne(x)) {
              var [lt, ...z] = x;
              lt.apply(s, [t, ...z]);
            } else
              x.call(s, t);
        } catch (it) {
          c ? h.push(it) : c = it;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        s = p;
      }
      if (c) {
        for (let it of h)
          queueMicrotask(() => {
            throw it;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, q(_), J(a);
    }
  }
}
function Kn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function It(t, e) {
  var n = (
    /** @type {Effect} */
    d
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Wn(t, e) {
  var n = (e & He) !== 0, r, l = !t.startsWith("<!>");
  return () => {
    if (H)
      return It(O, null), O;
    r === void 0 && (r = Kn(l ? t : "<!>" + t));
    var s = (
      /** @type {TemplateNode} */
      n || oe ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ _e(s)
      ), i = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      It(o, i);
    }
    return s;
  };
}
function Pe(t, e) {
  if (H) {
    d.nodes_end = O, ue();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Fe(t, e) {
  return Ie(t, e);
}
function Gn(t, e) {
  var o;
  St(), e.intro = (o = e.intro) != null ? o : !1;
  const n = e.target, r = H, l = O;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _e(n)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Ue); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ bt(s);
    if (!s)
      throw ot;
    ft(!0), Rt(
      /** @type {Comment} */
      s
    ), ue();
    const i = Ie(t, { ...e, anchor: s });
    if (O === null || O.nodeType !== 8 || /** @type {Comment} */
    O.data !== Ve)
      throw fe(), ot;
    return ft(!1), /**  @type {Exports} */
    i;
  } catch (i) {
    if (i === ot)
      return e.recover === !1 && un(), St(), vn(n), ft(!1), Fe(t, e);
    throw i;
  } finally {
    ft(r), Rt(l);
  }
}
const K = /* @__PURE__ */ new Map();
function Ie(t, { target: e, anchor: n, props: r = {}, events: l, context: s, intro: o = !0 }) {
  St();
  var i = /* @__PURE__ */ new Set(), f = (a) => {
    for (var c = 0; c < a.length; c++) {
      var h = a[c];
      if (!i.has(h)) {
        i.add(h);
        var p = Un(h);
        e.addEventListener(h, ut, { passive: p });
        var x = K.get(h);
        x === void 0 ? (document.addEventListener(h, ut, { passive: p }), K.set(h, 1)) : K.set(h, x + 1);
      }
    }
  };
  f(Ge(Vn)), zt.add(f);
  var u = void 0, _ = bn(() => {
    var a = n != null ? n : e.appendChild(hn());
    return xn(() => {
      if (s) {
        Se({});
        var c = (
          /** @type {ComponentContext} */
          $
        );
        c.c = s;
      }
      l && (r.$$events = l), H && It(
        /** @type {TemplateNode} */
        a,
        null
      ), u = t(a, r) || {}, H && (d.nodes_end = O), s && De();
    }), () => {
      var p;
      for (var c of i) {
        e.removeEventListener(c, ut);
        var h = (
          /** @type {number} */
          K.get(c)
        );
        --h === 0 ? (document.removeEventListener(c, ut), K.delete(c)) : K.set(c, h);
      }
      zt.delete(f), a !== n && ((p = a.parentNode) == null || p.removeChild(a));
    };
  });
  return Lt.set(u, _), u;
}
let Lt = /* @__PURE__ */ new WeakMap();
function Jn(t, e) {
  const n = Lt.get(t);
  return n ? (Lt.delete(t), n(e)) : Promise.resolve();
}
function Zn(t, e) {
  Cn(() => {
    var l;
    var n = t.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        (l = n.head) != null ? l : (
          /** @type {Document} */
          n.ownerDocument.head
        )
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const s = document.createElement("style");
      s.id = e.hash, s.textContent = e.code, r.appendChild(s);
    }
  });
}
function zn(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    $
  ), n = e.l.u;
  if (!n) return;
  let r = () => qn(e.s);
  if (t) {
    let l = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ pn(() => {
      let i = !1;
      const f = e.s;
      for (const u in f)
        f[u] !== s[u] && (s[u] = f[u], i = !0);
      return i && l++, l;
    });
    r = () => j(o);
  }
  n.b.length && mn(() => {
    Qt(e, r), vt(n.b);
  }), Dt(() => {
    const l = Ce(() => n.m.map(Qe));
    return () => {
      for (const s of l)
        typeof s == "function" && s();
    };
  }), n.a.length && Dt(() => {
    Qt(e, r), vt(n.a);
  });
}
function Qt(t, e) {
  if (t.l.s)
    for (const n of t.l.s) j(n);
  e();
}
function Qn(t) {
  $ === null && Ke(), rt && $.l !== null ? Xn($).m.push(t) : Dt(() => {
    const e = Ce(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Xn(t) {
  var n;
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return (n = e.u) != null ? n : e.u = { a: [], b: [], m: [] };
}
function tr(t) {
  return new er(t);
}
var P, k;
class er {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Ot(this, P);
    /** @type {Record<string, any>} */
    Ot(this, k);
    var s, o;
    var n = /* @__PURE__ */ new Map(), r = (i, f) => {
      var u = /* @__PURE__ */ Bn(f);
      return n.set(i, u), u;
    };
    const l = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(i, f) {
          var u;
          return j((u = n.get(f)) != null ? u : r(f, Reflect.get(i, f)));
        },
        has(i, f) {
          var u;
          return f === nn ? !0 : (j((u = n.get(f)) != null ? u : r(f, Reflect.get(i, f))), Reflect.has(i, f));
        },
        set(i, f, u) {
          var _;
          return D((_ = n.get(f)) != null ? _ : r(f, u), u), Reflect.set(i, f, u);
        }
      }
    );
    Nt(this, k, (e.hydrate ? Gn : Fe)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: l,
      context: e.context,
      intro: (s = e.intro) != null ? s : !1,
      recover: e.recover
    })), (!((o = e == null ? void 0 : e.props) != null && o.$$host) || e.sync === !1) && jn(), Nt(this, P, l.$$events);
    for (const i of Object.keys(g(this, k)))
      i === "$set" || i === "$destroy" || i === "$on" || ht(this, i, {
        get() {
          return g(this, k)[i];
        },
        /** @param {any} value */
        set(f) {
          g(this, k)[i] = f;
        },
        enumerable: !0
      });
    g(this, k).$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(l, i);
    }, g(this, k).$destroy = () => {
      Jn(g(this, k));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    g(this, k).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    g(this, P)[e] = g(this, P)[e] || [];
    const r = (...l) => n.call(this, ...l);
    return g(this, P)[e].push(r), () => {
      g(this, P)[e] = g(this, P)[e].filter(
        /** @param {any} fn */
        (l) => l !== r
      );
    };
  }
  $destroy() {
    g(this, k).$destroy();
  }
}
P = new WeakMap(), k = new WeakMap();
let Le;
typeof HTMLElement == "function" && (Le = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    A(this, "$$ctor");
    /** Slots */
    A(this, "$$s");
    /** @type {any} The Svelte component instance */
    A(this, "$$c");
    /** Whether or not the custom element is connected */
    A(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    A(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    A(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    A(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    A(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    A(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    A(this, "$$me");
    this.$$ctor = e, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, n, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const l = this.$$c.$on(e, n);
      this.$$l_u.set(n, l);
    }
    super.addEventListener(e, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, n, r) {
    if (super.removeEventListener(e, n, r), this.$$c) {
      const l = this.$$l_u.get(n);
      l && (l(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(s) {
        return (o) => {
          const i = document.createElement("slot");
          s !== "default" && (i.name = s), Pe(o, i);
        };
      };
      var e = n;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, l = nr(this);
      for (const s of this.$$s)
        s in l && (s === "default" && !this.$$d.children ? (this.$$d.children = n(s), r.default = !0) : r[s] = n(s));
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = ct(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = tr({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = En(() => {
        we(() => {
          var s;
          this.$$r = !0;
          for (const o of _t(this.$$c)) {
            if (!((s = this.$$p_d[o]) != null && s.reflect)) continue;
            this.$$d[o] = this.$$c[o];
            const i = ct(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, i);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const i = this.$$c.$on(s, o);
          this.$$l_u.set(o, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, n, r) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ct(e, r, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return _t(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function ct(t, e, n, r) {
  var s;
  const l = (s = n[t]) == null ? void 0 : s.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e == null ? null : e;
      default:
        return e;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function nr(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function rr(t, e, n, r, l, s) {
  let o = class extends Le {
    constructor() {
      super(t, n, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return _t(e).map(
        (i) => (e[i].attribute || i).toLowerCase()
      );
    }
  };
  return _t(e).forEach((i) => {
    ht(o.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(f) {
        var a;
        f = ct(i, f, e), this.$$d[i] = f;
        var u = this.$$c;
        if (u) {
          var _ = (a = G(u, i)) == null ? void 0 : a.get;
          _ ? u[i] = f : u.$set({ [i]: f });
        }
      }
    });
  }), r.forEach((i) => {
    ht(o.prototype, i, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[i];
      }
    });
  }), t.element = /** @type {any} */
  o, o;
}
var sr = /* @__PURE__ */ Wn('<span style="transition: color 2s ease-in-out; color: crimson;">hello</span> <span class="test svelte-ydsecm">world</span>', 1);
const lr = {
  hash: "svelte-ydsecm",
  code: ".test.svelte-ydsecm {transition:color 2s ease-in-out;color:teal;}"
};
function ir(t, e) {
  Se(e, !1), Zn(t, lr), Qn(() => console.log("mounted")), zn();
  var n = sr();
  _n(2), Pe(t, n), De();
}
customElements.define("hello-world", rr(ir, {}, [], [], !0));
//# sourceMappingURL=Public.js.map
