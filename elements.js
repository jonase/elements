;(function(){
var k, aa = this;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ba(a) {
  return "string" == typeof a;
}
function ca(a) {
  return a[da] || (a[da] = ++ea);
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
var fa = Array.prototype, ga = fa.indexOf ? function(a, b, c) {
  return fa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
function ha(a, b) {
  fa.sort.call(a, b || ia);
}
function ja(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || ia;
  ha(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
}
function ia(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;function ka(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function la(a, b) {
  null != a && this.append.apply(this, arguments);
}
la.prototype.Ma = "";
la.prototype.append = function(a, b, c) {
  this.Ma += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ma += arguments[d];
    }
  }
  return this;
};
la.prototype.toString = function() {
  return this.Ma;
};
var ma, oa = null;
function pa() {
  return new p(null, 5, [qa, !0, ra, !0, sa, !1, ta, !1, ua, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function va(a) {
  return r(a) ? !1 : !0;
}
function s(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function wa(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = wa(b), c = r(r(c) ? c.va : c) ? c.ua : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function xa(a) {
  var b = a.ua;
  return r(b) ? b : "" + w(a);
}
function ya(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ba = function() {
  function a(a, b) {
    return Aa.c ? Aa.c(function(a, b) {
      a.push(b);
      return a;
    }, [], b) : Aa.call(null, function(a, b) {
      a.push(b);
      return a;
    }, [], b);
  }
  function b(a) {
    return c.a(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, 0, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Ca = {}, Da = {}, Ea = {};
function Fa(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = Fa[m(null == a ? null : a)];
  if (!b && (b = Fa._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ga(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = Ga[m(null == a ? null : a)];
  if (!b && (b = Ga._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Ha = {};
function Ia(a, b) {
  if (a ? a.I : a) {
    return a.I(a, b);
  }
  var c;
  c = Ia[m(null == a ? null : a)];
  if (!c && (c = Ia._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ja = {}, x = function() {
  function a(a, b, c) {
    if (a ? a.da : a) {
      return a.da(a, b, c);
    }
    var h;
    h = x[m(null == a ? null : a)];
    if (!h && (h = x._, !h)) {
      throw u("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.D : a) {
      return a.D(a, b);
    }
    var c;
    c = x[m(null == a ? null : a)];
    if (!c && (c = x._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ka = {};
function La(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = La[m(null == a ? null : a)];
  if (!b && (b = La._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Ma(a) {
  if (a ? a.$ : a) {
    return a.$(a);
  }
  var b;
  b = Ma[m(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Oa = {}, Pa = {}, Qa = function() {
  function a(a, b, c) {
    if (a ? a.K : a) {
      return a.K(a, b, c);
    }
    var h;
    h = Qa[m(null == a ? null : a)];
    if (!h && (h = Qa._, !h)) {
      throw u("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = Qa[m(null == a ? null : a)];
    if (!c && (c = Qa._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ra(a, b) {
  if (a ? a.Db : a) {
    return a.Db(a, b);
  }
  var c;
  c = Ra[m(null == a ? null : a)];
  if (!c && (c = Ra._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Sa(a, b, c) {
  if (a ? a.Na : a) {
    return a.Na(a, b, c);
  }
  var d;
  d = Sa[m(null == a ? null : a)];
  if (!d && (d = Sa._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ta = {};
function Ua(a, b) {
  if (a ? a.Ub : a) {
    return a.Ub(a, b);
  }
  var c;
  c = Ua[m(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw u("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Va = {};
function Wa(a) {
  if (a ? a.Vb : a) {
    return a.Vb();
  }
  var b;
  b = Wa[m(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Xa(a) {
  if (a ? a.Wb : a) {
    return a.Wb();
  }
  var b;
  b = Xa[m(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ya = {};
function Za(a) {
  if (a ? a.Pa : a) {
    return a.Pa(a);
  }
  var b;
  b = Za[m(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a);
}
function $a(a) {
  if (a ? a.Qa : a) {
    return a.Qa(a);
  }
  var b;
  b = $a[m(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var ab = {};
function bb(a, b, c) {
  if (a ? a.bc : a) {
    return a.bc(a, b, c);
  }
  var d;
  d = bb[m(null == a ? null : a)];
  if (!d && (d = bb._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function y(a) {
  if (a ? a.ya : a) {
    return a.ya(a);
  }
  var b;
  b = y[m(null == a ? null : a)];
  if (!b && (b = y._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var db = {};
function eb(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = eb[m(null == a ? null : a)];
  if (!b && (b = eb._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var fb = {};
function gb(a, b) {
  if (a ? a.B : a) {
    return a.B(a, b);
  }
  var c;
  c = gb[m(null == a ? null : a)];
  if (!c && (c = gb._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var hb = {}, jb = function() {
  function a(a, b, c) {
    if (a ? a.V : a) {
      return a.V(a, b, c);
    }
    var h;
    h = jb[m(null == a ? null : a)];
    if (!h && (h = jb._, !h)) {
      throw u("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.U : a) {
      return a.U(a, b);
    }
    var c;
    c = jb[m(null == a ? null : a)];
    if (!c && (c = jb._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function kb(a, b, c) {
  if (a ? a.ib : a) {
    return a.ib(a, b, c);
  }
  var d;
  d = kb[m(null == a ? null : a)];
  if (!d && (d = kb._, !d)) {
    throw u("IKVReduce.-kv-reduce", a);
  }
  return d.call(null, a, b, c);
}
function lb(a, b) {
  if (a ? a.t : a) {
    return a.t(a, b);
  }
  var c;
  c = lb[m(null == a ? null : a)];
  if (!c && (c = lb._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function mb(a) {
  if (a ? a.u : a) {
    return a.u(a);
  }
  var b;
  b = mb[m(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var nb = {};
function ob(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = ob[m(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var pb = {};
function A(a, b) {
  if (a ? a.oc : a) {
    return a.oc(0, b);
  }
  var c;
  c = A[m(null == a ? null : a)];
  if (!c && (c = A._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var qb = {};
function rb(a, b, c) {
  if (a ? a.v : a) {
    return a.v(a, b, c);
  }
  var d;
  d = rb[m(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function sb(a, b, c) {
  if (a ? a.lb : a) {
    return a.lb(a, b, c);
  }
  var d;
  d = sb[m(null == a ? null : a)];
  if (!d && (d = sb._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function tb(a, b, c) {
  if (a ? a.kb : a) {
    return a.kb(a, b, c);
  }
  var d;
  d = tb[m(null == a ? null : a)];
  if (!d && (d = tb._, !d)) {
    throw u("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function ub(a, b) {
  if (a ? a.mb : a) {
    return a.mb(a, b);
  }
  var c;
  c = ub[m(null == a ? null : a)];
  if (!c && (c = ub._, !c)) {
    throw u("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b);
}
function vb(a) {
  if (a ? a.za : a) {
    return a.za(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function wb(a, b) {
  if (a ? a.Sa : a) {
    return a.Sa(a, b);
  }
  var c;
  c = wb[m(null == a ? null : a)];
  if (!c && (c = wb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function xb(a) {
  if (a ? a.Ta : a) {
    return a.Ta(a);
  }
  var b;
  b = xb[m(null == a ? null : a)];
  if (!b && (b = xb._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function yb(a, b, c) {
  if (a ? a.Ra : a) {
    return a.Ra(a, b, c);
  }
  var d;
  d = yb[m(null == a ? null : a)];
  if (!d && (d = yb._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function zb(a, b, c) {
  if (a ? a.nc : a) {
    return a.nc(0, b, c);
  }
  var d;
  d = zb[m(null == a ? null : a)];
  if (!d && (d = zb._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Ab(a) {
  if (a ? a.jc : a) {
    return a.jc();
  }
  var b;
  b = Ab[m(null == a ? null : a)];
  if (!b && (b = Ab._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Bb(a) {
  if (a ? a.Fb : a) {
    return a.Fb(a);
  }
  var b;
  b = Bb[m(null == a ? null : a)];
  if (!b && (b = Bb._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Cb(a) {
  if (a ? a.Gb : a) {
    return a.Gb(a);
  }
  var b;
  b = Cb[m(null == a ? null : a)];
  if (!b && (b = Cb._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Db(a) {
  if (a ? a.Eb : a) {
    return a.Eb(a);
  }
  var b;
  b = Db[m(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Eb(a) {
  this.ed = a;
  this.o = 0;
  this.f = 1073741824;
}
Eb.prototype.oc = function(a, b) {
  return this.ed.append(b);
};
function Fb(a) {
  var b = new la;
  a.v(null, new Eb(b), pa());
  return "" + w(b);
}
function Gb(a, b) {
  if (r(B.a ? B.a(a, b) : B.call(null, a, b))) {
    return 0;
  }
  var c = va(a.W);
  if (r(c ? b.W : c)) {
    return-1;
  }
  if (r(a.W)) {
    if (va(b.W)) {
      return 1;
    }
    c = Hb.a ? Hb.a(a.W, b.W) : Hb.call(null, a.W, b.W);
    return 0 === c ? Hb.a ? Hb.a(a.name, b.name) : Hb.call(null, a.name, b.name) : c;
  }
  return Nb ? Hb.a ? Hb.a(a.name, b.name) : Hb.call(null, a.name, b.name) : null;
}
function C(a, b, c, d, e) {
  this.W = a;
  this.name = b;
  this.sa = c;
  this.ta = d;
  this.T = e;
  this.f = 2154168321;
  this.o = 4096;
}
k = C.prototype;
k.v = function(a, b) {
  return A(b, this.sa);
};
k.u = function() {
  var a = this.ta;
  return null != a ? a : this.ta = a = Ob.a ? Ob.a(Pb.b ? Pb.b(this.W) : Pb.call(null, this.W), Pb.b ? Pb.b(this.name) : Pb.call(null, this.name)) : Ob.call(null, Pb.b ? Pb.b(this.W) : Pb.call(null, this.W), Pb.b ? Pb.b(this.name) : Pb.call(null, this.name));
};
k.B = function(a, b) {
  return new C(this.W, this.name, this.sa, this.ta, b);
};
k.w = function() {
  return this.T;
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Qa.c(c, this, null);
      case 3:
        return Qa.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return Qa.c(a, this, null);
};
k.a = function(a, b) {
  return Qa.c(a, this, b);
};
k.t = function(a, b) {
  return b instanceof C ? this.sa === b.sa : !1;
};
k.toString = function() {
  return this.sa;
};
var Qb = function() {
  function a(a, b) {
    var c = null != a ? [w(a), w("/"), w(b)].join("") : b;
    return new C(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof C ? a : c.a(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.qd)) {
    return a.G(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Rb(a, 0);
  }
  if (s(nb, a)) {
    return ob(a);
  }
  if (t) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function E(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.Oa)) {
    return a.Q(null);
  }
  a = D(a);
  return null == a ? null : La(a);
}
function H(a) {
  return null != a ? a && (a.f & 64 || a.Oa) ? a.$(null) : (a = D(a)) ? Ma(a) : Sb : Sb;
}
function I(a) {
  return null == a ? null : a && (a.f & 128 || a.jb) ? a.Y(null) : D(H(a));
}
var B = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || lb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, g) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (I(e)) {
            a = d, d = E(e), e = I(e);
          } else {
            return b.a(d, E(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = H(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
Ea["null"] = !0;
Fa["null"] = function() {
  return 0;
};
Date.prototype.t = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
lb.number = function(a, b) {
  return a === b;
};
db["function"] = !0;
eb["function"] = function() {
  return null;
};
Ca["function"] = !0;
mb._ = function(a) {
  return ca(a);
};
function Tb(a) {
  return a + 1;
}
function Ub(a) {
  this.M = a;
  this.o = 0;
  this.f = 32768;
}
Ub.prototype.ya = function() {
  return this.M;
};
function Vb(a) {
  return a instanceof Ub;
}
var Wb = function() {
  function a(a, b, c, d) {
    for (var l = Fa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, x.a(a, d)) : b.call(null, c, x.a(a, d));
        if (Vb(c)) {
          return K.b ? K.b(c) : K.call(null, c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Fa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, x.a(a, l)) : b.call(null, c, x.a(a, l));
        if (Vb(c)) {
          return K.b ? K.b(c) : K.call(null, c);
        }
        l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Fa(a);
    if (0 === c) {
      return b.l ? b.l() : b.call(null);
    }
    for (var d = x.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, x.a(a, l)) : b.call(null, d, x.a(a, l));
        if (Vb(d)) {
          return K.b ? K.b(d) : K.call(null, d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}(), Xb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]);
        if (Vb(c)) {
          return K.b ? K.b(c) : K.call(null, c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]);
        if (Vb(c)) {
          return K.b ? K.b(c) : K.call(null, c);
        }
        l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.l ? b.l() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]);
        if (Vb(d)) {
          return K.b ? K.b(d) : K.call(null, d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}();
function Yb(a) {
  return a ? a.f & 2 || a.Hc ? !0 : a.f ? !1 : s(Ea, a) : s(Ea, a);
}
function Zb(a) {
  return a ? a.f & 16 || a.kc ? !0 : a.f ? !1 : s(Ja, a) : s(Ja, a);
}
function Rb(a, b) {
  this.d = a;
  this.m = b;
  this.f = 166199550;
  this.o = 8192;
}
k = Rb.prototype;
k.u = function() {
  return $b.b ? $b.b(this) : $b.call(null, this);
};
k.Y = function() {
  return this.m + 1 < this.d.length ? new Rb(this.d, this.m + 1) : null;
};
k.I = function(a, b) {
  return L.a ? L.a(b, this) : L.call(null, b, this);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Xb.i(this.d, b, this.d[this.m], this.m + 1);
};
k.V = function(a, b, c) {
  return Xb.i(this.d, b, c, this.m);
};
k.G = function() {
  return this;
};
k.N = function() {
  return this.d.length - this.m;
};
k.Q = function() {
  return this.d[this.m];
};
k.$ = function() {
  return this.m + 1 < this.d.length ? new Rb(this.d, this.m + 1) : Sb;
};
k.t = function(a, b) {
  return ac.a ? ac.a(this, b) : ac.call(null, this, b);
};
k.D = function(a, b) {
  var c = b + this.m;
  return c < this.d.length ? this.d[c] : null;
};
k.da = function(a, b, c) {
  a = b + this.m;
  return a < this.d.length ? this.d[a] : c;
};
k.O = function() {
  return Sb;
};
var bc = function() {
  function a(a, b) {
    return b < a.length ? new Rb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), J = function() {
  function a(a, b) {
    return bc.a(a, b);
  }
  function b(a) {
    return bc.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
lb._ = function(a, b) {
  return a === b;
};
var cc = function() {
  function a(a, b) {
    return null != a ? Ia(a, b) : Ia(Sb, b);
  }
  var b = null, c = function() {
    function a(b, d, g) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = E(e), e = I(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = H(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function N(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.Hc)) {
      a = a.N(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(Ea, a)) {
            a = Fa(a);
          } else {
            if (t) {
              a: {
                a = D(a);
                for (var b = 0;;) {
                  if (Yb(a)) {
                    a = b + Fa(a);
                    break a;
                  }
                  a = I(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var dc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return D(a) ? E(a) : c;
      }
      if (Zb(a)) {
        return x.c(a, b, c);
      }
      if (D(a)) {
        a = I(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (D(a)) {
          return E(a);
        }
        throw Error("Index out of bounds");
      }
      if (Zb(a)) {
        return x.a(a, b);
      }
      if (D(a)) {
        var c = I(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), O = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.f & 16 || a.kc)) {
        return a.da(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (s(Ja, a)) {
        return x.a(a, b);
      }
      if (t) {
        if (a ? a.f & 64 || a.Oa || (a.f ? 0 : s(Ka, a)) : s(Ka, a)) {
          return dc.c(a, b, c);
        }
        throw Error([w("nth not supported on this type "), w(xa(wa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.f & 16 || a.kc)) {
      return a.D(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(Ja, a)) {
      return x.a(a, b);
    }
    if (t) {
      if (a ? a.f & 64 || a.Oa || (a.f ? 0 : s(Ka, a)) : s(Ka, a)) {
        return dc.a(a, b);
      }
      throw Error([w("nth not supported on this type "), w(xa(wa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Kc) ? a.K(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(Pa, a) ? Qa.c(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Kc) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(Pa, a) ? Qa.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    return null != a ? Sa(a, b, c) : ec.a ? ec.a([b], [c]) : ec.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, g, l) {
      var n = null;
      3 < arguments.length && (n = J(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, g, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), r(l)) {
          d = E(l), e = E(I(l)), l = I(I(l));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var l = E(a);
      a = H(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.h = c.h;
  b.c = a;
  b.e = c.e;
  return b;
}(), fc = function() {
  function a(a, b) {
    return null == a ? null : Ua(a, b);
  }
  var b = null, c = function() {
    function a(b, d, g) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (r(e)) {
          d = E(e), e = I(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = H(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function gc(a) {
  var b = "function" == m(a);
  return b ? b : a ? r(r(null) ? null : a.Gc) ? !0 : a.tc ? !1 : s(Ca, a) : s(Ca, a);
}
var ic = function hc(b, c) {
  return gc(b) && !(b ? b.f & 262144 || b.ud || (b.f ? 0 : s(fb, b)) : s(fb, b)) ? hc(function() {
    "undefined" === typeof ma && (ma = function(b, c, f, h) {
      this.j = b;
      this.ab = c;
      this.hd = f;
      this.$c = h;
      this.o = 0;
      this.f = 393217;
    }, ma.va = !0, ma.ua = "cljs.core/t9639", ma.Ba = function(b, c) {
      return A(c, "cljs.core/t9639");
    }, ma.prototype.call = function() {
      function b(d, h) {
        d = this;
        var g = null;
        1 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, g);
      }
      function c(b, d) {
        return R.a ? R.a(b.ab, d) : R.call(null, b.ab, d);
      }
      b.k = 1;
      b.h = function(b) {
        var d = E(b);
        b = H(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ma.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(ya(c)));
    }, ma.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return R.a ? R.a(self__.ab, b) : R.call(null, self__.ab, b);
      }
      b.k = 0;
      b.h = function(b) {
        b = D(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ma.prototype.Gc = !0, ma.prototype.w = function() {
      return this.$c;
    }, ma.prototype.B = function(b, c) {
      return new ma(this.j, this.ab, this.hd, c);
    });
    return new ma(c, b, hc, null);
  }(), c) : null == b ? null : gb(b, c);
};
function jc(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.Mc || (a.f ? 0 : s(db, a)) : s(db, a) : b) ? eb(a) : null;
}
var kc = {}, lc = 0;
function Pb(a) {
  if (a && (a.f & 4194304 || a.nd)) {
    a = a.u(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < lc && (kc = {}, lc = 0);
            var b = kc[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              kc[a] = b;
              lc += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : t ? mb(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function mc(a) {
  return null == a || va(D(a));
}
function nc(a) {
  return null == a ? !1 : a ? a.f & 8 || a.kd ? !0 : a.f ? !1 : s(Ha, a) : s(Ha, a);
}
function oc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.od ? !0 : a.f ? !1 : s(Ta, a) : s(Ta, a);
}
function pc(a) {
  return a ? a.f & 16384 || a.td ? !0 : a.f ? !1 : s(ab, a) : s(ab, a);
}
function qc(a) {
  return a ? a.o & 512 || a.jd ? !0 : !1 : !1;
}
function rc(a) {
  var b = [];
  ka(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function sc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var tc = {};
function S(a) {
  return null == a ? !1 : a ? a.f & 64 || a.Oa ? !0 : a.f ? !1 : s(Ka, a) : s(Ka, a);
}
function uc(a) {
  return r(a) ? !0 : !1;
}
function vc(a) {
  var b = gc(a);
  return b ? b : a ? a.f & 1 || a.md ? !0 : a.f ? !1 : s(Da, a) : s(Da, a);
}
function wc(a, b) {
  return P.c(a, b, tc) === tc ? !1 : !0;
}
function Hb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (wa(a) === wa(b)) {
    return a && (a.o & 2048 || a.gb) ? a.hb(null, b) : ia(a, b);
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var xc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var g = Hb(O.a(a, h), O.a(b, h));
      if (0 === g && h + 1 < c) {
        h += 1;
      } else {
        return g;
      }
    }
  }
  function b(a, b) {
    var f = N(a), h = N(b);
    return f < h ? -1 : f > h ? 1 : t ? c.i(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.i = a;
  return c;
}();
function yc(a) {
  return B.a(a, Hb) ? Hb : function(b, c) {
    var d = a.a ? a.a(b, c) : a.call(null, b, c);
    return "number" === typeof d ? d : r(d) ? -1 : r(a.a ? a.a(c, b) : a.call(null, c, b)) ? 1 : 0;
  };
}
var Ac = function() {
  function a(a, b) {
    if (D(b)) {
      var c = zc.b ? zc.b(b) : zc.call(null, b);
      ja(c, yc(a));
      return D(c);
    }
    return Sb;
  }
  function b(a) {
    return c.a(Hb, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Bc = function() {
  function a(a, b, c) {
    return Ac.a(function(c, f) {
      return yc(b).call(null, a.b ? a.b(c) : a.call(null, c), a.b ? a.b(f) : a.call(null, f));
    }, c);
  }
  function b(a, b) {
    return c.c(a, Hb, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Cc = function() {
  function a(a, b, c) {
    for (c = D(c);;) {
      if (c) {
        b = a.a ? a.a(b, E(c)) : a.call(null, b, E(c));
        if (Vb(b)) {
          return K.b ? K.b(b) : K.call(null, b);
        }
        c = I(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = D(b);
    return c ? Aa.c ? Aa.c(a, E(c), I(c)) : Aa.call(null, a, E(c), I(c)) : a.l ? a.l() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Aa = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.Oc) ? c.V(null, a, b) : c instanceof Array ? Xb.c(c, a, b) : "string" === typeof c ? Xb.c(c, a, b) : s(hb, c) ? jb.c(c, a, b) : t ? Cc.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.Oc) ? b.U(null, a) : b instanceof Array ? Xb.a(b, a) : "string" === typeof b ? Xb.a(b, a) : s(hb, b) ? jb.a(b, a) : t ? Cc.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Dc(a, b, c) {
  return null != c ? kb(c, a, b) : b;
}
function Ec(a) {
  return a - 1;
}
function Fc(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function Gc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Hc(a) {
  var b = 1;
  for (a = D(a);;) {
    if (a && 0 < b) {
      b -= 1, a = I(a);
    } else {
      return a;
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var g = null;
      1 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, g);
    }
    function c(a, d) {
      for (var e = new la(b.b(a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.b(E(l))), l = I(l);
        } else {
          return e.toString();
        }
      }
    }
    a.k = 1;
    a.h = function(a) {
      var b = E(a);
      a = H(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.h = c.h;
  b.l = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}(), Ic = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return a.substring(c);
  };
  a.c = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function ac(a, b) {
  return uc((b ? b.f & 16777216 || b.rd || (b.f ? 0 : s(pb, b)) : s(pb, b)) ? function() {
    for (var c = D(a), d = D(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (B.a(E(c), E(d))) {
        c = I(c), d = I(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function Ob(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function $b(a) {
  if (D(a)) {
    var b = Pb(E(a));
    for (a = I(a);;) {
      if (null == a) {
        return b;
      }
      b = Ob(b, Pb(E(a)));
      a = I(a);
    }
  } else {
    return 0;
  }
}
function Jc(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = E(a), b = (b + (Pb(Kc.b ? Kc.b(c) : Kc.call(null, c)) ^ Pb(Lc.b ? Lc.b(c) : Lc.call(null, c)))) % 4503599627370496;
      a = I(a);
    } else {
      return b;
    }
  }
}
function Mc(a, b, c, d, e) {
  this.j = a;
  this.Ea = b;
  this.na = c;
  this.count = d;
  this.n = e;
  this.f = 65937646;
  this.o = 8192;
}
k = Mc.prototype;
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.Y = function() {
  return 1 === this.count ? null : this.na;
};
k.I = function(a, b) {
  return new Mc(this.j, b, this, this.count + 1, null);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  return this;
};
k.N = function() {
  return this.count;
};
k.Pa = function() {
  return this.Ea;
};
k.Qa = function() {
  return Ma(this);
};
k.Q = function() {
  return this.Ea;
};
k.$ = function() {
  return 1 === this.count ? Sb : this.na;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new Mc(b, this.Ea, this.na, this.count, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return Sb;
};
function Nc(a) {
  this.j = a;
  this.f = 65937614;
  this.o = 8192;
}
k = Nc.prototype;
k.u = function() {
  return 0;
};
k.Y = function() {
  return null;
};
k.I = function(a, b) {
  return new Mc(this.j, b, null, 1, null);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  return null;
};
k.N = function() {
  return 0;
};
k.Pa = function() {
  return null;
};
k.Qa = function() {
  throw Error("Can't pop empty list");
};
k.Q = function() {
  return null;
};
k.$ = function() {
  return Sb;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new Nc(b);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return this;
};
var Sb = new Nc(null), Oc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Rb && 0 === a.m) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.Q(null)), a = a.Y(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Sb;;) {
      if (0 < a) {
        var f = a - 1, e = e.I(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Qc(a, b, c, d) {
  this.j = a;
  this.Ea = b;
  this.na = c;
  this.n = d;
  this.f = 65929452;
  this.o = 8192;
}
k = Qc.prototype;
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.Y = function() {
  return null == this.na ? null : D(this.na);
};
k.I = function(a, b) {
  return new Qc(null, b, this, this.n);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  return this;
};
k.Q = function() {
  return this.Ea;
};
k.$ = function() {
  return null == this.na ? Sb : this.na;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new Qc(b, this.Ea, this.na, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return ic(Sb, this.j);
};
function L(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.Oa)) ? new Qc(null, a, b, null) : new Qc(null, a, D(b), null);
}
function T(a, b, c, d) {
  this.W = a;
  this.name = b;
  this.pa = c;
  this.ta = d;
  this.f = 2153775105;
  this.o = 4096;
}
k = T.prototype;
k.v = function(a, b) {
  return A(b, [w(":"), w(this.pa)].join(""));
};
k.u = function() {
  null == this.ta && (this.ta = Ob(Pb(this.W), Pb(this.name)) + 2654435769);
  return this.ta;
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return P.a(c, this);
      case 3:
        return P.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return P.a(a, this);
};
k.a = function(a, b) {
  return P.c(a, this, b);
};
k.t = function(a, b) {
  return b instanceof T ? this.pa === b.pa : !1;
};
k.toString = function() {
  return[w(":"), w(this.pa)].join("");
};
function Rc(a, b) {
  return a === b ? !0 : a instanceof T && b instanceof T ? a.pa === b.pa : !1;
}
var Tc = function() {
  function a(a, b) {
    return new T(a, b, [w(r(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof T) {
      return a;
    }
    if (a instanceof C) {
      var b;
      if (a && (a.o & 4096 || a.Nc)) {
        b = a.W;
      } else {
        throw Error([w("Doesn't support namespace: "), w(a)].join(""));
      }
      return new T(b, Sc.b ? Sc.b(a) : Sc.call(null, a), a.sa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new T(b[0], b[1], a, null) : new T(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Uc(a, b, c, d) {
  this.j = a;
  this.Fa = b;
  this.A = c;
  this.n = d;
  this.o = 0;
  this.f = 32374988;
}
k = Uc.prototype;
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.Y = function() {
  ob(this);
  return null == this.A ? null : I(this.A);
};
k.I = function(a, b) {
  return L(b, this);
};
k.toString = function() {
  return Fb(this);
};
function Vc(a) {
  null != a.Fa && (a.A = a.Fa.l ? a.Fa.l() : a.Fa.call(null), a.Fa = null);
  return a.A;
}
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  Vc(this);
  if (null == this.A) {
    return null;
  }
  for (var a = this.A;;) {
    if (a instanceof Uc) {
      a = Vc(a);
    } else {
      return this.A = a, D(this.A);
    }
  }
};
k.Q = function() {
  ob(this);
  return null == this.A ? null : E(this.A);
};
k.$ = function() {
  ob(this);
  return null != this.A ? H(this.A) : Sb;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new Uc(b, this.Fa, this.A, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return ic(Sb, this.j);
};
function Wc(a, b) {
  this.X = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
Wc.prototype.N = function() {
  return this.end;
};
Wc.prototype.add = function(a) {
  this.X[this.end] = a;
  return this.end += 1;
};
Wc.prototype.aa = function() {
  var a = new Xc(this.X, 0, this.end);
  this.X = null;
  return a;
};
function Xc(a, b, c) {
  this.d = a;
  this.C = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
k = Xc.prototype;
k.U = function(a, b) {
  return Xb.i(this.d, b, this.d[this.C], this.C + 1);
};
k.V = function(a, b, c) {
  return Xb.i(this.d, b, c, this.C);
};
k.jc = function() {
  if (this.C === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Xc(this.d, this.C + 1, this.end);
};
k.D = function(a, b) {
  return this.d[this.C + b];
};
k.da = function(a, b, c) {
  return 0 <= b && b < this.end - this.C ? this.d[this.C + b] : c;
};
k.N = function() {
  return this.end - this.C;
};
var Yc = function() {
  function a(a, b, c) {
    return new Xc(a, b, c);
  }
  function b(a, b) {
    return new Xc(a, b, a.length);
  }
  function c(a) {
    return new Xc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function Zc(a, b, c, d) {
  this.aa = a;
  this.ha = b;
  this.j = c;
  this.n = d;
  this.f = 31850732;
  this.o = 1536;
}
k = Zc.prototype;
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.Y = function() {
  if (1 < Fa(this.aa)) {
    return new Zc(Ab(this.aa), this.ha, this.j, null);
  }
  var a = ob(this.ha);
  return null == a ? null : a;
};
k.I = function(a, b) {
  return L(b, this);
};
k.toString = function() {
  return Fb(this);
};
k.G = function() {
  return this;
};
k.Q = function() {
  return x.a(this.aa, 0);
};
k.$ = function() {
  return 1 < Fa(this.aa) ? new Zc(Ab(this.aa), this.ha, this.j, null) : null == this.ha ? Sb : this.ha;
};
k.Eb = function() {
  return null == this.ha ? null : this.ha;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new Zc(this.aa, this.ha, b, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return ic(Sb, this.j);
};
k.Fb = function() {
  return this.aa;
};
k.Gb = function() {
  return null == this.ha ? Sb : this.ha;
};
function $c(a, b) {
  return 0 === Fa(a) ? b : new Zc(a, b, null, null);
}
function ad(a, b) {
  a.add(b);
}
function zc(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(E(a)), a = I(a);
    } else {
      return b;
    }
  }
}
function bd(a, b) {
  if (Yb(a)) {
    return N(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && D(c)) {
      c = I(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var dd = function cd(b) {
  return null == b ? null : null == I(b) ? D(E(b)) : t ? L(E(b), cd(I(b))) : null;
}, ed = function() {
  function a(a, b) {
    return new Uc(null, function() {
      var c = D(a);
      return c ? qc(c) ? $c(Bb(c), d.a(Cb(c), b)) : L(E(c), d.a(H(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Uc(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Uc(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function v(a, b) {
        return new Uc(null, function() {
          var c = D(a);
          return c ? qc(c) ? $c(Bb(c), v(Cb(c), b)) : L(E(c), v(H(c), b)) : r(b) ? v(E(b), I(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = H(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, g) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 2;
  d.h = e.h;
  d.l = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), fd = function() {
  function a(a, b, c, d) {
    return L(a, L(b, L(c, d)));
  }
  function b(a, b, c) {
    return L(a, L(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, q) {
      var v = null;
      4 < arguments.length && (v = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, v);
    }
    function b(a, c, d, e, f) {
      return L(a, L(c, L(d, L(e, dd(f)))));
    }
    a.k = 4;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var q = E(a);
      a = H(a);
      return b(c, d, e, q, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, h, g, l) {
    switch(arguments.length) {
      case 1:
        return D(c);
      case 2:
        return L(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, g);
      default:
        return d.e(c, f, h, g, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 4;
  c.h = d.h;
  c.b = function(a) {
    return D(a);
  };
  c.a = function(a, b) {
    return L(a, b);
  };
  c.c = b;
  c.i = a;
  c.e = d.e;
  return c;
}(), gd = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var g = null;
      2 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, g);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = wb(a, c), r(d)) {
          c = E(d), d = I(d);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var h = E(a);
      a = H(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return wb(a, d);
      default:
        return b.e(a, d, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.h = b.h;
  a.a = function(a, b) {
    return wb(a, b);
  };
  a.e = b.e;
  return a;
}(), hd = function() {
  var a = null, b = function() {
    function a(c, f, h, g) {
      var l = null;
      3 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, g) {
      for (;;) {
        if (a = yb(a, c, d), r(g)) {
          c = E(g), d = E(I(g)), g = I(I(g));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var h = E(a);
      a = I(a);
      var g = E(a);
      a = H(a);
      return b(c, h, g, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return yb(a, d, e);
      default:
        return b.e(a, d, e, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 3;
  a.h = b.h;
  a.c = function(a, b, e) {
    return yb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function id(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.l ? a.l() : a.call(null);
  }
  c = La(d);
  var e = Ma(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = La(e), f = Ma(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = La(f), h = Ma(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = La(h), g = Ma(h);
  if (4 === b) {
    return a.i ? a.i(c, d, e, f) : a.i ? a.i(c, d, e, f) : a.call(null, c, d, e, f);
  }
  h = La(g);
  g = Ma(g);
  if (5 === b) {
    return a.r ? a.r(c, d, e, f, h) : a.r ? a.r(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  a = La(g);
  var l = Ma(g);
  if (6 === b) {
    return a.ia ? a.ia(c, d, e, f, h, a) : a.ia ? a.ia(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a);
  }
  var g = La(l), n = Ma(l);
  if (7 === b) {
    return a.Aa ? a.Aa(c, d, e, f, h, a, g) : a.Aa ? a.Aa(c, d, e, f, h, a, g) : a.call(null, c, d, e, f, h, a, g);
  }
  var l = La(n), q = Ma(n);
  if (8 === b) {
    return a.Sb ? a.Sb(c, d, e, f, h, a, g, l) : a.Sb ? a.Sb(c, d, e, f, h, a, g, l) : a.call(null, c, d, e, f, h, a, g, l);
  }
  var n = La(q), v = Ma(q);
  if (9 === b) {
    return a.Tb ? a.Tb(c, d, e, f, h, a, g, l, n) : a.Tb ? a.Tb(c, d, e, f, h, a, g, l, n) : a.call(null, c, d, e, f, h, a, g, l, n);
  }
  var q = La(v), z = Ma(v);
  if (10 === b) {
    return a.Hb ? a.Hb(c, d, e, f, h, a, g, l, n, q) : a.Hb ? a.Hb(c, d, e, f, h, a, g, l, n, q) : a.call(null, c, d, e, f, h, a, g, l, n, q);
  }
  var v = La(z), F = Ma(z);
  if (11 === b) {
    return a.Ib ? a.Ib(c, d, e, f, h, a, g, l, n, q, v) : a.Ib ? a.Ib(c, d, e, f, h, a, g, l, n, q, v) : a.call(null, c, d, e, f, h, a, g, l, n, q, v);
  }
  var z = La(F), M = Ma(F);
  if (12 === b) {
    return a.Jb ? a.Jb(c, d, e, f, h, a, g, l, n, q, v, z) : a.Jb ? a.Jb(c, d, e, f, h, a, g, l, n, q, v, z) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z);
  }
  var F = La(M), Y = Ma(M);
  if (13 === b) {
    return a.Kb ? a.Kb(c, d, e, f, h, a, g, l, n, q, v, z, F) : a.Kb ? a.Kb(c, d, e, f, h, a, g, l, n, q, v, z, F) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z, F);
  }
  var M = La(Y), na = Ma(Y);
  if (14 === b) {
    return a.Lb ? a.Lb(c, d, e, f, h, a, g, l, n, q, v, z, F, M) : a.Lb ? a.Lb(c, d, e, f, h, a, g, l, n, q, v, z, F, M) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z, F, M);
  }
  var Y = La(na), za = Ma(na);
  if (15 === b) {
    return a.Mb ? a.Mb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y) : a.Mb ? a.Mb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y);
  }
  var na = La(za), Na = Ma(za);
  if (16 === b) {
    return a.Nb ? a.Nb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na) : a.Nb ? a.Nb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na);
  }
  var za = La(Na), cb = Ma(Na);
  if (17 === b) {
    return a.Ob ? a.Ob(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za) : a.Ob ? a.Ob(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za);
  }
  var Na = La(cb), G = Ma(cb);
  if (18 === b) {
    return a.Pb ? a.Pb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na) : a.Pb ? a.Pb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na);
  }
  cb = La(G);
  G = Ma(G);
  if (19 === b) {
    return a.Qb ? a.Qb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na, cb) : a.Qb ? a.Qb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na, cb) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na, cb);
  }
  var Pc = La(G);
  Ma(G);
  if (20 === b) {
    return a.Rb ? a.Rb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na, cb, Pc) : a.Rb ? a.Rb(c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na, cb, Pc) : a.call(null, c, d, e, f, h, a, g, l, n, q, v, z, F, M, Y, na, za, Na, cb, Pc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var R = function() {
  function a(a, b, c, d, e) {
    b = fd.i(b, c, d, e);
    c = a.k;
    return a.h ? (d = bd(b, c + 1), d <= c ? id(a, d, b) : a.h(b)) : a.apply(a, zc(b));
  }
  function b(a, b, c, d) {
    b = fd.c(b, c, d);
    c = a.k;
    return a.h ? (d = bd(b, c + 1), d <= c ? id(a, d, b) : a.h(b)) : a.apply(a, zc(b));
  }
  function c(a, b, c) {
    b = fd.a(b, c);
    c = a.k;
    if (a.h) {
      var d = bd(b, c + 1);
      return d <= c ? id(a, d, b) : a.h(b);
    }
    return a.apply(a, zc(b));
  }
  function d(a, b) {
    var c = a.k;
    if (a.h) {
      var d = bd(b, c + 1);
      return d <= c ? id(a, d, b) : a.h(b);
    }
    return a.apply(a, zc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, F) {
      var M = null;
      5 < arguments.length && (M = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, M);
    }
    function b(a, c, d, e, f, h) {
      c = L(c, L(d, L(e, L(f, dd(h)))));
      d = a.k;
      return a.h ? (e = bd(c, d + 1), e <= d ? id(a, e, c) : a.h(c)) : a.apply(a, zc(c));
    }
    a.k = 5;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var f = E(a);
      a = I(a);
      var h = E(a);
      a = H(a);
      return b(c, d, e, f, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, g, l, n, q, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, l);
      case 4:
        return b.call(this, e, g, l, n);
      case 5:
        return a.call(this, e, g, l, n, q);
      default:
        return f.e(e, g, l, n, q, J(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.h = f.h;
  e.a = d;
  e.c = c;
  e.i = b;
  e.r = a;
  e.e = f.e;
  return e;
}(), jd = function() {
  function a(a, b) {
    return!B.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, g) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return va(R.i(B, a, c, d));
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = H(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function kd(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    if (r(a.b ? a.b(E(b)) : a.call(null, E(b)))) {
      var c = a, d = I(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function ld(a, b) {
  for (;;) {
    if (D(b)) {
      var c = a.b ? a.b(E(b)) : a.call(null, E(b));
      if (r(c)) {
        return c;
      }
      var c = a, d = I(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function md(a) {
  return a;
}
function nd() {
  return function() {
    function a(a) {
      0 < arguments.length && J(Array.prototype.slice.call(arguments, 0), 0);
      return null;
    }
    a.k = 0;
    a.h = function(a) {
      D(a);
      return null;
    };
    a.e = function() {
      return null;
    };
    return a;
  }();
}
var od = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return q.call(this, b);
      }
      function q(e) {
        return R.r(a, b, c, d, e);
      }
      e.k = 0;
      e.h = function(a) {
        a = D(a);
        return q(a);
      };
      e.e = q;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return R.i(a, b, c, d);
      }
      d.k = 0;
      d.h = function(a) {
        a = D(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return R.c(a, b, c);
      }
      c.k = 0;
      c.h = function(a) {
        a = D(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, v) {
      var z = null;
      4 < arguments.length && (z = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, z);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = J(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return R.r(a, c, d, e, ed.a(f, b));
        }
        b.k = 0;
        b.h = function(a) {
          a = D(a);
          return h(a);
        };
        b.e = h;
        return b;
      }();
    }
    a.k = 4;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var f = E(a);
      a = H(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, g, l, n) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, g);
      case 4:
        return a.call(this, d, h, g, l);
      default:
        return e.e(d, h, g, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.h = e.h;
  d.b = function(a) {
    return a;
  };
  d.a = c;
  d.c = b;
  d.i = a;
  d.e = e.e;
  return d;
}(), pd = function() {
  function a(a, b, c, e) {
    return new Uc(null, function() {
      var n = D(b), q = D(c), v = D(e);
      return n && q && v ? L(a.c ? a.c(E(n), E(q), E(v)) : a.call(null, E(n), E(q), E(v)), d.i(a, H(n), H(q), H(v))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Uc(null, function() {
      var e = D(b), n = D(c);
      return e && n ? L(a.a ? a.a(E(e), E(n)) : a.call(null, E(e), E(n)), d.c(a, H(e), H(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Uc(null, function() {
      var c = D(b);
      if (c) {
        if (qc(c)) {
          for (var e = Bb(c), n = N(e), q = new Wc(Array(n), 0), v = 0;;) {
            if (v < n) {
              var z = a.b ? a.b(x.a(e, v)) : a.call(null, x.a(e, v));
              q.add(z);
              v += 1;
            } else {
              break;
            }
          }
          return $c(q.aa(), d.a(a, Cb(c)));
        }
        return L(a.b ? a.b(E(c)) : a.call(null, E(c)), d.a(a, H(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, v) {
      var z = null;
      4 < arguments.length && (z = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, z);
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return R.a(a, b);
      }, function F(a) {
        return new Uc(null, function() {
          var b = d.a(D, a);
          return kd(md, b) ? L(d.a(E, b), F(d.a(H, b))) : null;
        }, null, null);
      }(cc.e(h, f, J([e, c], 0))));
    }
    a.k = 4;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var f = E(a);
      a = H(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, g, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, g);
      case 4:
        return a.call(this, d, h, g, l);
      default:
        return e.e(d, h, g, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.h = e.h;
  d.a = c;
  d.c = b;
  d.i = a;
  d.e = e.e;
  return d;
}(), rd = function qd(b, c, d) {
  var e = O.c(c, 0, null);
  return(c = Hc(c)) ? Q.c(b, e, qd(P.a(b, e), c, d)) : Q.c(b, e, d);
};
function sd(a, b) {
  this.q = a;
  this.d = b;
}
function td(a) {
  return new sd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function ud(a) {
  return new sd(a.q, ya(a.d));
}
function vd(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function wd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = td(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var yd = function xd(b, c, d, e) {
  var f = ud(d), h = b.g - 1 >>> c & 31;
  5 === c ? f.d[h] = e : (d = d.d[h], b = null != d ? xd(b, c - 5, d, e) : wd(null, c - 5, e), f.d[h] = b);
  return f;
};
function zd(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function Ad(a, b) {
  if (0 <= b && b < a.g) {
    if (b >= vd(a)) {
      return a.p;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return zd(b, a.g);
  }
}
var Cd = function Bd(b, c, d, e, f) {
  var h = ud(d);
  if (0 === c) {
    h.d[e & 31] = f;
  } else {
    var g = e >>> c & 31;
    b = Bd(b, c - 5, d.d[g], e, f);
    h.d[g] = b;
  }
  return h;
}, Ed = function Dd(b, c, d) {
  var e = b.g - 2 >>> c & 31;
  if (5 < c) {
    b = Dd(b, c - 5, d.d[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = ud(d);
    d.d[e] = b;
    return d;
  }
  return 0 === e ? null : t ? (d = ud(d), d.d[e] = null, d) : null;
};
function U(a, b, c, d, e, f) {
  this.j = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.p = e;
  this.n = f;
  this.o = 8196;
  this.f = 167668511;
}
k = U.prototype;
k.za = function() {
  return new Fd(this.g, this.shift, Gd.b ? Gd.b(this.root) : Gd.call(null, this.root), Hd.b ? Hd.b(this.p) : Hd.call(null, this.p));
};
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.J = function(a, b) {
  return x.c(this, b, null);
};
k.K = function(a, b, c) {
  return x.c(this, b, c);
};
k.Na = function(a, b, c) {
  if ("number" === typeof b) {
    return bb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.D(null, c);
      case 3:
        return this.da(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return this.D(null, a);
};
k.a = function(a, b) {
  return this.da(null, a, b);
};
k.ib = function(a, b, c) {
  a = [0, c];
  for (c = 0;;) {
    if (c < this.g) {
      var d = Ad(this, c), e = d.length;
      a: {
        for (var f = 0, h = a[1];;) {
          if (f < e) {
            h = b.c ? b.c(h, f + c, d[f]) : b.call(null, h, f + c, d[f]);
            if (Vb(h)) {
              d = h;
              break a;
            }
            f += 1;
          } else {
            a[0] = e;
            d = a[1] = h;
            break a;
          }
        }
        d = void 0;
      }
      if (Vb(d)) {
        return K.b ? K.b(d) : K.call(null, d);
      }
      c += a[0];
    } else {
      return a[1];
    }
  }
};
k.I = function(a, b) {
  if (32 > this.g - vd(this)) {
    for (var c = this.p.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.p[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new U(this.j, this.g + 1, this.shift, this.root, d, null);
  }
  c = (d = this.g >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = td(null), d.d[0] = this.root, e = wd(null, this.shift, new sd(null, this.p)), d.d[1] = e) : d = yd(this, this.shift, this.root, new sd(null, this.p));
  return new U(this.j, this.g + 1, c, d, [b], null);
};
k.Vb = function() {
  return x.a(this, 0);
};
k.Wb = function() {
  return x.a(this, 1);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Wb.a(this, b);
};
k.V = function(a, b, c) {
  return Wb.c(this, b, c);
};
k.G = function() {
  return 0 === this.g ? null : 32 > this.g ? J.b(this.p) : t ? Id.c ? Id.c(this, 0, 0) : Id.call(null, this, 0, 0) : null;
};
k.N = function() {
  return this.g;
};
k.Pa = function() {
  return 0 < this.g ? x.a(this, this.g - 1) : null;
};
k.Qa = function() {
  if (0 === this.g) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.g) {
    return gb(Jd, this.j);
  }
  if (1 < this.g - vd(this)) {
    return new U(this.j, this.g - 1, this.shift, this.root, this.p.slice(0, -1), null);
  }
  if (t) {
    var a = Ad(this, this.g - 2), b = Ed(this, this.shift, this.root), b = null == b ? V : b, c = this.g - 1;
    return 5 < this.shift && null == b.d[1] ? new U(this.j, c, this.shift - 5, b.d[0], a, null) : new U(this.j, c, this.shift, b, a, null);
  }
  return null;
};
k.bc = function(a, b, c) {
  if (0 <= b && b < this.g) {
    return vd(this) <= b ? (a = ya(this.p), a[b & 31] = c, new U(this.j, this.g, this.shift, this.root, a, null)) : new U(this.j, this.g, this.shift, Cd(this, this.shift, this.root, b, c), this.p, null);
  }
  if (b === this.g) {
    return Ia(this, c);
  }
  if (t) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.g), w("]")].join(""));
  }
  return null;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new U(b, this.g, this.shift, this.root, this.p, this.n);
};
k.w = function() {
  return this.j;
};
k.D = function(a, b) {
  return Ad(this, b)[b & 31];
};
k.da = function(a, b, c) {
  return 0 <= b && b < this.g ? x.a(this, b) : c;
};
k.O = function() {
  return ic(Jd, this.j);
};
var V = new sd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Jd = new U(null, 0, 5, V, [], 0);
function Kd(a, b) {
  var c = a.length, d = b ? a : ya(a);
  if (32 > c) {
    return new U(null, c, 5, V, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, h = (new U(null, 32, 5, V, e, null)).za(null);;) {
    if (f < c) {
      e = f + 1, h = gd.a(h, d[f]), f = e;
    } else {
      return xb(h);
    }
  }
}
function Ld(a) {
  return xb(Aa.c(wb, vb(Jd), a));
}
var Md = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Rb && 0 === a.m ? Kd.a ? Kd.a(a.d, !0) : Kd.call(null, a.d, !0) : Ld(a);
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Nd(a, b, c, d, e, f) {
  this.H = a;
  this.ca = b;
  this.m = c;
  this.C = d;
  this.j = e;
  this.n = f;
  this.f = 32243948;
  this.o = 1536;
}
k = Nd.prototype;
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.Y = function() {
  if (this.C + 1 < this.ca.length) {
    var a = Id.i ? Id.i(this.H, this.ca, this.m, this.C + 1) : Id.call(null, this.H, this.ca, this.m, this.C + 1);
    return null == a ? null : a;
  }
  return Db(this);
};
k.I = function(a, b) {
  return L(b, this);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Wb.a(Od.c ? Od.c(this.H, this.m + this.C, N(this.H)) : Od.call(null, this.H, this.m + this.C, N(this.H)), b);
};
k.V = function(a, b, c) {
  return Wb.c(Od.c ? Od.c(this.H, this.m + this.C, N(this.H)) : Od.call(null, this.H, this.m + this.C, N(this.H)), b, c);
};
k.G = function() {
  return this;
};
k.Q = function() {
  return this.ca[this.C];
};
k.$ = function() {
  if (this.C + 1 < this.ca.length) {
    var a = Id.i ? Id.i(this.H, this.ca, this.m, this.C + 1) : Id.call(null, this.H, this.ca, this.m, this.C + 1);
    return null == a ? Sb : a;
  }
  return Cb(this);
};
k.Eb = function() {
  var a = this.ca.length, a = this.m + a < Fa(this.H) ? Id.c ? Id.c(this.H, this.m + a, 0) : Id.call(null, this.H, this.m + a, 0) : null;
  return null == a ? null : a;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return Id.r ? Id.r(this.H, this.ca, this.m, this.C, b) : Id.call(null, this.H, this.ca, this.m, this.C, b);
};
k.O = function() {
  return ic(Jd, this.j);
};
k.Fb = function() {
  return Yc.a(this.ca, this.C);
};
k.Gb = function() {
  var a = this.ca.length, a = this.m + a < Fa(this.H) ? Id.c ? Id.c(this.H, this.m + a, 0) : Id.call(null, this.H, this.m + a, 0) : null;
  return null == a ? Sb : a;
};
var Id = function() {
  function a(a, b, c, d, l) {
    return new Nd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Nd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Nd(a, Ad(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, g, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, g);
      case 5:
        return a.call(this, d, f, h, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.i = b;
  d.r = a;
  return d;
}();
function Pd(a, b, c, d, e) {
  this.j = a;
  this.ba = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.f = 166617887;
  this.o = 8192;
}
k = Pd.prototype;
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.J = function(a, b) {
  return x.c(this, b, null);
};
k.K = function(a, b, c) {
  return x.c(this, b, c);
};
k.Na = function(a, b, c) {
  if ("number" === typeof b) {
    return bb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.D(null, c);
      case 3:
        return this.da(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return this.D(null, a);
};
k.a = function(a, b) {
  return this.da(null, a, b);
};
k.I = function(a, b) {
  return Qd.r ? Qd.r(this.j, bb(this.ba, this.end, b), this.start, this.end + 1, null) : Qd.call(null, this.j, bb(this.ba, this.end, b), this.start, this.end + 1, null);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Wb.a(this, b);
};
k.V = function(a, b, c) {
  return Wb.c(this, b, c);
};
k.G = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : L(x.a(a.ba, d), new Uc(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
k.N = function() {
  return this.end - this.start;
};
k.Pa = function() {
  return x.a(this.ba, this.end - 1);
};
k.Qa = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return Qd.r ? Qd.r(this.j, this.ba, this.start, this.end - 1, null) : Qd.call(null, this.j, this.ba, this.start, this.end - 1, null);
};
k.bc = function(a, b, c) {
  var d = this, e = d.start + b;
  return Qd.r ? Qd.r(d.j, Q.c(d.ba, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Qd.call(null, d.j, Q.c(d.ba, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return Qd.r ? Qd.r(b, this.ba, this.start, this.end, this.n) : Qd.call(null, b, this.ba, this.start, this.end, this.n);
};
k.w = function() {
  return this.j;
};
k.D = function(a, b) {
  return 0 > b || this.end <= this.start + b ? zd(b, this.end - this.start) : x.a(this.ba, this.start + b);
};
k.da = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : x.c(this.ba, this.start + b, c);
};
k.O = function() {
  return ic(Jd, this.j);
};
function Qd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Pd) {
      c = b.start + c, d = b.start + d, b = b.ba;
    } else {
      var f = N(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Pd(a, b, c, d, e);
    }
  }
}
var Od = function() {
  function a(a, b, c) {
    return Qd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, N(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Gd(a) {
  return new sd({}, ya(a.d));
}
function Hd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  sc(a, 0, b, 0, a.length);
  return b;
}
var Sd = function Rd(b, c, d, e) {
  d = b.root.q === d.q ? d : new sd(b.root.q, ya(d.d));
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.d[f];
    b = null != h ? Rd(b, c - 5, h, e) : wd(b.root.q, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function Fd(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.p = d;
  this.f = 275;
  this.o = 88;
}
k = Fd.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return this.J(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
k.J = function(a, b) {
  return x.c(this, b, null);
};
k.K = function(a, b, c) {
  return x.c(this, b, c);
};
k.D = function(a, b) {
  if (this.root.q) {
    return Ad(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.da = function(a, b, c) {
  return 0 <= b && b < this.g ? x.a(this, b) : c;
};
k.N = function() {
  if (this.root.q) {
    return this.g;
  }
  throw Error("count after persistent!");
};
k.nc = function(a, b, c) {
  var d = this;
  if (d.root.q) {
    if (0 <= b && b < d.g) {
      return vd(this) <= b ? d.p[b & 31] = c : (a = function f(a, g) {
        var l = d.root.q === g.q ? g : new sd(d.root.q, ya(g.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var n = b >>> a & 31, q = f(a - 5, l.d[n]);
          l.d[n] = q;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.g) {
      return wb(this, c);
    }
    if (t) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.g)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
k.Ra = function(a, b, c) {
  return zb(this, b, c);
};
k.Sa = function(a, b) {
  if (this.root.q) {
    if (32 > this.g - vd(this)) {
      this.p[this.g & 31] = b;
    } else {
      var c = new sd(this.root.q, this.p), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.p = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = wd(this.root.q, this.shift, c);
        this.root = new sd(this.root.q, d);
        this.shift = e;
      } else {
        this.root = Sd(this, this.shift, this.root, c);
      }
    }
    this.g += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.Ta = function() {
  if (this.root.q) {
    this.root.q = null;
    var a = this.g - vd(this), b = Array(a);
    sc(this.p, 0, b, 0, a);
    return new U(null, this.g, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Td() {
  this.o = 0;
  this.f = 2097152;
}
Td.prototype.t = function() {
  return!1;
};
var Ud = new Td;
function Vd(a, b) {
  return uc(oc(b) ? N(a) === N(b) ? kd(md, pd.a(function(a) {
    return B.a(P.c(b, E(a), Ud), E(I(a)));
  }, a)) : null : null);
}
function Wd(a, b) {
  var c = a.d;
  if (b instanceof T) {
    a: {
      for (var d = c.length, e = b.pa, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof T && e === h.pa) {
          c = f;
          break a;
        }
        if (t) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ba(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof C) {
        a: {
          d = c.length;
          e = b.sa;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof C && e === h.sa) {
              c = f;
              break a;
            }
            if (t) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (B.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Xd(a, b, c) {
  this.d = a;
  this.m = b;
  this.T = c;
  this.o = 0;
  this.f = 32374990;
}
k = Xd.prototype;
k.u = function() {
  return $b(this);
};
k.Y = function() {
  return this.m < this.d.length - 2 ? new Xd(this.d, this.m + 2, this.T) : null;
};
k.I = function(a, b) {
  return L(b, this);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  return this;
};
k.N = function() {
  return(this.d.length - this.m) / 2;
};
k.Q = function() {
  return new U(null, 2, 5, V, [this.d[this.m], this.d[this.m + 1]], null);
};
k.$ = function() {
  return this.m < this.d.length - 2 ? new Xd(this.d, this.m + 2, this.T) : Sb;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new Xd(this.d, this.m, b);
};
k.w = function() {
  return this.T;
};
k.O = function() {
  return ic(Sb, this.T);
};
function p(a, b, c, d) {
  this.j = a;
  this.g = b;
  this.d = c;
  this.n = d;
  this.o = 8196;
  this.f = 16123663;
}
k = p.prototype;
k.za = function() {
  return new Yd({}, this.d.length, ya(this.d));
};
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Jc(this);
};
k.J = function(a, b) {
  return Qa.c(this, b, null);
};
k.K = function(a, b, c) {
  a = Wd(this, b);
  return-1 === a ? c : this.d[a + 1];
};
k.Na = function(a, b, c) {
  a = Wd(this, b);
  if (-1 === a) {
    if (this.g < Zd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new p(this.j, this.g + 1, e, null);
    }
    a = gb;
    d = Sa;
    e = $d;
    null != e ? e && (e.o & 4 || e.ld) ? (e = Aa.c(wb, vb(e), this), e = xb(e)) : e = Aa.c(Ia, e, this) : e = Aa.c(cc, Sb, this);
    return a(d(e, b, c), this.j);
  }
  return c === this.d[a + 1] ? this : t ? (b = ya(this.d), b[a + 1] = c, new p(this.j, this.g, b, null)) : null;
};
k.Db = function(a, b) {
  return-1 !== Wd(this, b);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return this.J(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
k.ib = function(a, b, c) {
  a = this.d.length;
  for (var d = 0;;) {
    if (d < a) {
      c = b.c ? b.c(c, this.d[d], this.d[d + 1]) : b.call(null, c, this.d[d], this.d[d + 1]);
      if (Vb(c)) {
        return K.b ? K.b(c) : K.call(null, c);
      }
      d += 2;
    } else {
      return c;
    }
  }
};
k.I = function(a, b) {
  return pc(b) ? Sa(this, x.a(b, 0), x.a(b, 1)) : Aa.c(Ia, this, b);
};
k.toString = function() {
  return Fb(this);
};
k.G = function() {
  return 0 <= this.d.length - 2 ? new Xd(this.d, 0, null) : null;
};
k.N = function() {
  return this.g;
};
k.t = function(a, b) {
  return Vd(this, b);
};
k.B = function(a, b) {
  return new p(b, this.g, this.d, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return gb(W, this.j);
};
k.Ub = function(a, b) {
  if (0 <= Wd(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return Ga(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new p(this.j, this.g - 1, d, null);
      }
      if (B.a(b, this.d[e])) {
        e += 2;
      } else {
        if (t) {
          d[f] = this.d[e], d[f + 1] = this.d[e + 1], f += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var W = new p(null, 0, [], null), Zd = 8;
function Yd(a, b, c) {
  this.Ca = a;
  this.la = b;
  this.d = c;
  this.o = 56;
  this.f = 258;
}
k = Yd.prototype;
k.Ra = function(a, b, c) {
  if (r(this.Ca)) {
    a = Wd(this, b);
    if (-1 === a) {
      return this.la + 2 <= 2 * Zd ? (this.la += 2, this.d.push(b), this.d.push(c), this) : hd.c(ae.a ? ae.a(this.la, this.d) : ae.call(null, this.la, this.d), b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.Sa = function(a, b) {
  if (r(this.Ca)) {
    if (b ? b.f & 2048 || b.Lc || (b.f ? 0 : s(Va, b)) : s(Va, b)) {
      return yb(this, Kc.b ? Kc.b(b) : Kc.call(null, b), Lc.b ? Lc.b(b) : Lc.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = E(c);
      if (r(e)) {
        c = I(c), d = yb(d, Kc.b ? Kc.b(e) : Kc.call(null, e), Lc.b ? Lc.b(e) : Lc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.Ta = function() {
  if (r(this.Ca)) {
    return this.Ca = !1, new p(null, Fc((this.la - this.la % 2) / 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
k.J = function(a, b) {
  return Qa.c(this, b, null);
};
k.K = function(a, b, c) {
  if (r(this.Ca)) {
    return a = Wd(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.N = function() {
  if (r(this.Ca)) {
    return Fc((this.la - this.la % 2) / 2);
  }
  throw Error("count after persistent!");
};
function ae(a, b) {
  for (var c = vb($d), d = 0;;) {
    if (d < a) {
      c = hd.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function be() {
  this.M = !1;
}
function ce(a, b) {
  return a === b ? !0 : Rc(a, b) ? !0 : t ? B.a(a, b) : null;
}
var de = function() {
  function a(a, b, c, h, g) {
    a = ya(a);
    a[b] = c;
    a[h] = g;
    return a;
  }
  function b(a, b, c) {
    a = ya(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.r = a;
  return c;
}();
function ee(a, b) {
  var c = Array(a.length - 2);
  sc(a, 0, c, 0, 2 * b);
  sc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var fe = function() {
  function a(a, b, c, h, g, l) {
    a = a.Da(b);
    a.d[c] = h;
    a.d[g] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Da(b);
    a.d[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, g, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.ia = a;
  return c;
}();
function ge(a, b, c) {
  for (var d = a.length, e = 0;;) {
    if (e < d) {
      var f = a[e];
      null != f ? c = b.c ? b.c(c, f, a[e + 1]) : b.call(null, c, f, a[e + 1]) : (f = a[e + 1], c = null != f ? f.Za(b, c) : c);
      if (Vb(c)) {
        return K.b ? K.b(c) : K.call(null, c);
      }
      e += 2;
    } else {
      return c;
    }
  }
}
function he(a, b, c) {
  this.q = a;
  this.s = b;
  this.d = c;
}
k = he.prototype;
k.fa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), g = Gc(this.s & h - 1);
  if (0 === (this.s & h)) {
    var l = Gc(this.s);
    if (2 * l < this.d.length) {
      a = this.Da(a);
      b = a.d;
      f.M = !0;
      a: {
        for (c = 2 * (l - g), f = 2 * g + (c - 1), l = 2 * (g + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * g] = d;
      b[2 * g + 1] = e;
      a.s |= h;
      return a;
    }
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = ie.fa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.s >>> d & 1) && (g[d] = null != this.d[e] ? ie.fa(a, b + 5, Pb(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new je(a, l + 1, g);
    }
    return t ? (b = Array(2 * (l + 4)), sc(this.d, 0, b, 0, 2 * g), b[2 * g] = d, b[2 * g + 1] = e, sc(this.d, 2 * g, b, 2 * (g + 1), 2 * (l - g)), f.M = !0, a = this.Da(a), a.d = b, a.s |= h, a) : null;
  }
  l = this.d[2 * g];
  h = this.d[2 * g + 1];
  return null == l ? (l = h.fa(a, b + 5, c, d, e, f), l === h ? this : fe.i(this, a, 2 * g + 1, l)) : ce(d, l) ? e === h ? this : fe.i(this, a, 2 * g + 1, e) : t ? (f.M = !0, fe.ia(this, a, 2 * g, null, 2 * g + 1, ke.Aa ? ke.Aa(a, b + 5, l, h, c, d, e) : ke.call(null, a, b + 5, l, h, c, d, e))) : null;
};
k.Xa = function() {
  return le.b ? le.b(this.d) : le.call(null, this.d);
};
k.Da = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Gc(this.s), c = Array(0 > b ? 4 : 2 * (b + 1));
  sc(this.d, 0, c, 0, 2 * b);
  return new he(a, this.s, c);
};
k.Za = function(a, b) {
  return ge(this.d, a, b);
};
k.Ya = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.s & d)) {
    return this;
  }
  var e = Gc(this.s & d - 1), f = this.d[2 * e], h = this.d[2 * e + 1];
  return null == f ? (a = h.Ya(a + 5, b, c), a === h ? this : null != a ? new he(null, this.s, de.c(this.d, 2 * e + 1, a)) : this.s === d ? null : t ? new he(null, this.s ^ d, ee(this.d, e)) : null) : ce(c, f) ? new he(null, this.s ^ d, ee(this.d, e)) : t ? this : null;
};
k.ea = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Gc(this.s & f - 1);
  if (0 === (this.s & f)) {
    var g = Gc(this.s);
    if (16 <= g) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = ie.ea(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.s >>> c & 1) && (h[c] = null != this.d[d] ? ie.ea(a + 5, Pb(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new je(null, g + 1, h);
    }
    a = Array(2 * (g + 1));
    sc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    sc(this.d, 2 * h, a, 2 * (h + 1), 2 * (g - h));
    e.M = !0;
    return new he(null, this.s | f, a);
  }
  g = this.d[2 * h];
  f = this.d[2 * h + 1];
  return null == g ? (g = f.ea(a + 5, b, c, d, e), g === f ? this : new he(null, this.s, de.c(this.d, 2 * h + 1, g))) : ce(c, g) ? d === f ? this : new he(null, this.s, de.c(this.d, 2 * h + 1, d)) : t ? (e.M = !0, new he(null, this.s, de.r(this.d, 2 * h, null, 2 * h + 1, ke.ia ? ke.ia(a + 5, g, f, b, c, d) : ke.call(null, a + 5, g, f, b, c, d)))) : null;
};
k.qa = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.s & e)) {
    return d;
  }
  var f = Gc(this.s & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.qa(a + 5, b, c, d) : ce(c, e) ? f : t ? d : null;
};
var ie = new he(null, 0, []);
function je(a, b, c) {
  this.q = a;
  this.g = b;
  this.d = c;
}
k = je.prototype;
k.fa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, g = this.d[h];
  if (null == g) {
    return a = fe.i(this, a, h, ie.fa(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = g.fa(a, b + 5, c, d, e, f);
  return b === g ? this : fe.i(this, a, h, b);
};
k.Xa = function() {
  return me.b ? me.b(this.d) : me.call(null, this.d);
};
k.Da = function(a) {
  return a === this.q ? this : new je(a, this.g, ya(this.d));
};
k.Za = function(a, b) {
  for (var c = this.d.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.d[d];
      if (null != f && (e = f.Za(a, e), Vb(e))) {
        return K.b ? K.b(e) : K.call(null, e);
      }
      d += 1;
    } else {
      return e;
    }
  }
};
k.Ya = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.Ya(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.g) {
          a: {
            e = this.d;
            a = 2 * (this.g - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new he(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new je(null, this.g - 1, de.c(this.d, d, a));
        }
      } else {
        d = t ? new je(null, this.g, de.c(this.d, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
k.ea = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.d[f];
  if (null == h) {
    return new je(null, this.g + 1, de.c(this.d, f, ie.ea(a + 5, b, c, d, e)));
  }
  a = h.ea(a + 5, b, c, d, e);
  return a === h ? this : new je(null, this.g, de.c(this.d, f, a));
};
k.qa = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.qa(a + 5, b, c, d) : d;
};
function ne(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (ce(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function oe(a, b, c, d) {
  this.q = a;
  this.ja = b;
  this.g = c;
  this.d = d;
}
k = oe.prototype;
k.fa = function(a, b, c, d, e, f) {
  if (c === this.ja) {
    b = ne(this.d, this.g, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.g) {
        return a = fe.ia(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.M = !0, a.g += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      sc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.M = !0;
      f = this.g + 1;
      a === this.q ? (this.d = b, this.g = f, a = this) : a = new oe(this.q, this.ja, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : fe.i(this, a, b + 1, e);
  }
  return(new he(a, 1 << (this.ja >>> b & 31), [null, this, null, null])).fa(a, b, c, d, e, f);
};
k.Xa = function() {
  return le.b ? le.b(this.d) : le.call(null, this.d);
};
k.Da = function(a) {
  if (a === this.q) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  sc(this.d, 0, b, 0, 2 * this.g);
  return new oe(a, this.ja, this.g, b);
};
k.Za = function(a, b) {
  return ge(this.d, a, b);
};
k.Ya = function(a, b, c) {
  a = ne(this.d, this.g, c);
  return-1 === a ? this : 1 === this.g ? null : t ? new oe(null, this.ja, this.g - 1, ee(this.d, Fc((a - a % 2) / 2))) : null;
};
k.ea = function(a, b, c, d, e) {
  return b === this.ja ? (a = ne(this.d, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), sc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.M = !0, new oe(null, this.ja, this.g + 1, b)) : B.a(this.d[a], d) ? this : new oe(null, this.ja, this.g, de.c(this.d, a + 1, d))) : (new he(null, 1 << (this.ja >>> a & 31), [null, this])).ea(a, b, c, d, e);
};
k.qa = function(a, b, c, d) {
  a = ne(this.d, this.g, c);
  return 0 > a ? d : ce(c, this.d[a]) ? this.d[a + 1] : t ? d : null;
};
var ke = function() {
  function a(a, b, c, h, g, l, n) {
    var q = Pb(c);
    if (q === g) {
      return new oe(null, q, 2, [c, h, l, n]);
    }
    var v = new be;
    return ie.fa(a, b, q, c, h, v).fa(a, b, g, l, n, v);
  }
  function b(a, b, c, h, g, l) {
    var n = Pb(b);
    if (n === h) {
      return new oe(null, n, 2, [b, c, g, l]);
    }
    var q = new be;
    return ie.ea(a, n, b, c, q).ea(a, h, g, l, q);
  }
  var c = null, c = function(c, e, f, h, g, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, g, l);
      case 7:
        return a.call(this, c, e, f, h, g, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ia = b;
  c.Aa = a;
  return c;
}();
function pe(a, b, c, d, e) {
  this.j = a;
  this.ga = b;
  this.m = c;
  this.A = d;
  this.n = e;
  this.o = 0;
  this.f = 32374860;
}
k = pe.prototype;
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.I = function(a, b) {
  return L(b, this);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  return this;
};
k.Q = function() {
  return null == this.A ? new U(null, 2, 5, V, [this.ga[this.m], this.ga[this.m + 1]], null) : E(this.A);
};
k.$ = function() {
  return null == this.A ? le.c ? le.c(this.ga, this.m + 2, null) : le.call(null, this.ga, this.m + 2, null) : le.c ? le.c(this.ga, this.m, I(this.A)) : le.call(null, this.ga, this.m, I(this.A));
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new pe(b, this.ga, this.m, this.A, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return ic(Sb, this.j);
};
var le = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new pe(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.Xa(), r(h))) {
            return new pe(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new pe(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function qe(a, b, c, d, e) {
  this.j = a;
  this.ga = b;
  this.m = c;
  this.A = d;
  this.n = e;
  this.o = 0;
  this.f = 32374860;
}
k = qe.prototype;
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b(this);
};
k.I = function(a, b) {
  return L(b, this);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  return this;
};
k.Q = function() {
  return E(this.A);
};
k.$ = function() {
  return me.i ? me.i(null, this.ga, this.m, I(this.A)) : me.call(null, null, this.ga, this.m, I(this.A));
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new qe(b, this.ga, this.m, this.A, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return ic(Sb, this.j);
};
var me = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var g = b[c];
          if (r(g) && (g = g.Xa(), r(g))) {
            return new qe(a, b, c + 1, g, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new qe(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.i(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.i = a;
  return c;
}();
function re(a, b, c, d, e, f) {
  this.j = a;
  this.g = b;
  this.root = c;
  this.R = d;
  this.Z = e;
  this.n = f;
  this.o = 8196;
  this.f = 16123663;
}
k = re.prototype;
k.za = function() {
  return new se({}, this.root, this.g, this.R, this.Z);
};
k.u = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Jc(this);
};
k.J = function(a, b) {
  return Qa.c(this, b, null);
};
k.K = function(a, b, c) {
  return null == b ? this.R ? this.Z : c : null == this.root ? c : t ? this.root.qa(0, Pb(b), b, c) : null;
};
k.Na = function(a, b, c) {
  if (null == b) {
    return this.R && c === this.Z ? this : new re(this.j, this.R ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new be;
  b = (null == this.root ? ie : this.root).ea(0, Pb(b), b, c, a);
  return b === this.root ? this : new re(this.j, a.M ? this.g + 1 : this.g, b, this.R, this.Z, null);
};
k.Db = function(a, b) {
  return null == b ? this.R : null == this.root ? !1 : t ? this.root.qa(0, Pb(b), b, tc) !== tc : null;
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return this.J(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
k.ib = function(a, b, c) {
  a = this.R ? b.c ? b.c(c, null, this.Z) : b.call(null, c, null, this.Z) : c;
  return Vb(a) ? K.b ? K.b(a) : K.call(null, a) : null != this.root ? this.root.Za(b, a) : t ? a : null;
};
k.I = function(a, b) {
  return pc(b) ? Sa(this, x.a(b, 0), x.a(b, 1)) : Aa.c(Ia, this, b);
};
k.toString = function() {
  return Fb(this);
};
k.G = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.Xa() : null;
    return this.R ? L(new U(null, 2, 5, V, [null, this.Z], null), a) : a;
  }
  return null;
};
k.N = function() {
  return this.g;
};
k.t = function(a, b) {
  return Vd(this, b);
};
k.B = function(a, b) {
  return new re(b, this.g, this.root, this.R, this.Z, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return gb($d, this.j);
};
k.Ub = function(a, b) {
  if (null == b) {
    return this.R ? new re(this.j, this.g - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (t) {
    var c = this.root.Ya(0, Pb(b), b);
    return c === this.root ? this : new re(this.j, this.g - 1, c, this.R, this.Z, null);
  }
  return null;
};
var $d = new re(null, 0, null, !1, null, 0);
function ec(a, b) {
  for (var c = a.length, d = 0, e = vb($d);;) {
    if (d < c) {
      var f = d + 1, e = e.Ra(null, a[d], b[d]), d = f
    } else {
      return xb(e);
    }
  }
}
function se(a, b, c, d, e) {
  this.q = a;
  this.root = b;
  this.count = c;
  this.R = d;
  this.Z = e;
  this.o = 56;
  this.f = 258;
}
k = se.prototype;
k.Ra = function(a, b, c) {
  return te(this, b, c);
};
k.Sa = function(a, b) {
  var c;
  a: {
    if (this.q) {
      if (b ? b.f & 2048 || b.Lc || (b.f ? 0 : s(Va, b)) : s(Va, b)) {
        c = te(this, Kc.b ? Kc.b(b) : Kc.call(null, b), Lc.b ? Lc.b(b) : Lc.call(null, b));
        break a;
      }
      c = D(b);
      for (var d = this;;) {
        var e = E(c);
        if (r(e)) {
          c = I(c), d = te(d, Kc.b ? Kc.b(e) : Kc.call(null, e), Lc.b ? Lc.b(e) : Lc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
k.Ta = function() {
  var a;
  if (this.q) {
    this.q = null, a = new re(null, this.count, this.root, this.R, this.Z, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.J = function(a, b) {
  return null == b ? this.R ? this.Z : null : null == this.root ? null : this.root.qa(0, Pb(b), b);
};
k.K = function(a, b, c) {
  return null == b ? this.R ? this.Z : c : null == this.root ? c : this.root.qa(0, Pb(b), b, c);
};
k.N = function() {
  if (this.q) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function te(a, b, c) {
  if (a.q) {
    if (null == b) {
      a.Z !== c && (a.Z = c), a.R || (a.count += 1, a.R = !0);
    } else {
      var d = new be;
      b = (null == a.root ? ie : a.root).fa(a.q, 0, Pb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.M && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var X = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = D(a);
    for (var b = vb($d);;) {
      if (a) {
        var e = I(I(a)), b = hd.c(b, E(a), E(I(a)));
        a = e;
      } else {
        return xb(b);
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ue(a, b) {
  this.S = a;
  this.T = b;
  this.o = 0;
  this.f = 32374988;
}
k = ue.prototype;
k.u = function() {
  return $b(this);
};
k.Y = function() {
  var a = this.S, a = (a ? a.f & 128 || a.jb || (a.f ? 0 : s(Oa, a)) : s(Oa, a)) ? this.S.Y(null) : I(this.S);
  return null == a ? null : new ue(a, this.T);
};
k.I = function(a, b) {
  return L(b, this);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  return this;
};
k.Q = function() {
  return this.S.Q(null).Vb();
};
k.$ = function() {
  var a = this.S, a = (a ? a.f & 128 || a.jb || (a.f ? 0 : s(Oa, a)) : s(Oa, a)) ? this.S.Y(null) : I(this.S);
  return null != a ? new ue(a, this.T) : Sb;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new ue(this.S, b);
};
k.w = function() {
  return this.T;
};
k.O = function() {
  return ic(Sb, this.T);
};
function ve(a) {
  return(a = D(a)) ? new ue(a, null) : null;
}
function Kc(a) {
  return Wa(a);
}
function we(a, b) {
  this.S = a;
  this.T = b;
  this.o = 0;
  this.f = 32374988;
}
k = we.prototype;
k.u = function() {
  return $b(this);
};
k.Y = function() {
  var a = this.S, a = (a ? a.f & 128 || a.jb || (a.f ? 0 : s(Oa, a)) : s(Oa, a)) ? this.S.Y(null) : I(this.S);
  return null == a ? null : new we(a, this.T);
};
k.I = function(a, b) {
  return L(b, this);
};
k.toString = function() {
  return Fb(this);
};
k.U = function(a, b) {
  return Cc.a(b, this);
};
k.V = function(a, b, c) {
  return Cc.c(b, c, this);
};
k.G = function() {
  return this;
};
k.Q = function() {
  return this.S.Q(null).Wb();
};
k.$ = function() {
  var a = this.S, a = (a ? a.f & 128 || a.jb || (a.f ? 0 : s(Oa, a)) : s(Oa, a)) ? this.S.Y(null) : I(this.S);
  return null != a ? new we(a, this.T) : Sb;
};
k.t = function(a, b) {
  return ac(this, b);
};
k.B = function(a, b) {
  return new we(this.S, b);
};
k.w = function() {
  return this.T;
};
k.O = function() {
  return ic(Sb, this.T);
};
function xe(a) {
  return(a = D(a)) ? new we(a, null) : null;
}
function Lc(a) {
  return Xa(a);
}
var ye = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return r(ld(md, a)) ? Aa.a(function(a, b) {
      return cc.a(r(a) ? a : W, b);
    }, a) : null;
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ze(a, b, c) {
  this.j = a;
  this.Ha = b;
  this.n = c;
  this.o = 8196;
  this.f = 15077647;
}
k = ze.prototype;
k.za = function() {
  return new Ae(vb(this.Ha));
};
k.u = function() {
  var a = this.n;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = D(this);;) {
      if (b) {
        var c = E(b), a = (a + Pb(c)) % 4503599627370496, b = I(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.n = a;
};
k.J = function(a, b) {
  return Qa.c(this, b, null);
};
k.K = function(a, b, c) {
  return Ra(this.Ha, b) ? b : c;
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return this.J(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
k.I = function(a, b) {
  return new ze(this.j, Q.c(this.Ha, b, null), null);
};
k.toString = function() {
  return Fb(this);
};
k.G = function() {
  return ve(this.Ha);
};
k.N = function() {
  return Fa(this.Ha);
};
k.t = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.f & 4096 || b.sd ? !0 : b.f ? !1 : s(Ya, b) : s(Ya, b)) && N(c) === N(b) && kd(function(a) {
    return wc(c, a);
  }, b);
};
k.B = function(a, b) {
  return new ze(b, this.Ha, this.n);
};
k.w = function() {
  return this.j;
};
k.O = function() {
  return ic(Be, this.j);
};
var Be = new ze(null, W, 0);
function Ae(a) {
  this.oa = a;
  this.f = 259;
  this.o = 136;
}
k = Ae.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Qa.c(this.oa, c, tc) === tc ? null : c;
      case 3:
        return Qa.c(this.oa, c, tc) === tc ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.b = function(a) {
  return Qa.c(this.oa, a, tc) === tc ? null : a;
};
k.a = function(a, b) {
  return Qa.c(this.oa, a, tc) === tc ? b : a;
};
k.J = function(a, b) {
  return Qa.c(this, b, null);
};
k.K = function(a, b, c) {
  return Qa.c(this.oa, b, tc) === tc ? c : b;
};
k.N = function() {
  return N(this.oa);
};
k.Sa = function(a, b) {
  this.oa = hd.c(this.oa, b, null);
  return this;
};
k.Ta = function() {
  return new ze(null, xb(this.oa), null);
};
function Sc(a) {
  if (a && (a.o & 4096 || a.Nc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
function Ce(a, b, c, d, e, f, h) {
  var g = oa;
  try {
    oa = null == oa ? null : oa - 1;
    if (null != oa && 0 > oa) {
      return A(a, "#");
    }
    A(a, c);
    D(h) && (b.c ? b.c(E(h), a, f) : b.call(null, E(h), a, f));
    for (var l = I(h), n = ua.b(f);l && (null == n || 0 !== n);) {
      A(a, d);
      b.c ? b.c(E(l), a, f) : b.call(null, E(l), a, f);
      var q = I(l);
      c = n - 1;
      l = q;
      n = c;
    }
    r(ua.b(f)) && (A(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return A(a, e);
  } finally {
    oa = g;
  }
}
var De = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = D(b), f = null, h = 0, g = 0;;) {
      if (g < h) {
        var l = f.D(null, g);
        A(a, l);
        g += 1;
      } else {
        if (e = D(e)) {
          f = e, qc(f) ? (e = Bb(f), h = Cb(f), f = e, l = N(e), e = h, h = l) : (l = E(f), A(a, l), e = I(f), f = null, h = 0), g = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.k = 1;
  a.h = function(a) {
    var d = E(a);
    a = H(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Ee = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Fe(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Ee[a];
  })), w('"')].join("");
}
var Je = function He(b, c, d) {
  if (null == b) {
    return A(c, "nil");
  }
  if (void 0 === b) {
    return A(c, "#\x3cundefined\x3e");
  }
  if (t) {
    r(function() {
      var c = P.a(d, sa);
      return r(c) ? (c = b ? b.f & 131072 || b.Mc ? !0 : b.f ? !1 : s(db, b) : s(db, b)) ? jc(b) : c : c;
    }()) && (A(c, "^"), He(jc(b), c, d), A(c, " "));
    if (null == b) {
      return A(c, "nil");
    }
    if (b.va) {
      return b.Ba(b, c, d);
    }
    if (b && (b.f & 2147483648 || b.P)) {
      return b.v(null, c, d);
    }
    if (wa(b) === Boolean || "number" === typeof b) {
      return A(c, "" + w(b));
    }
    if (null != b && b.constructor === Object) {
      return A(c, "#js "), Ie.i ? Ie.i(pd.a(function(c) {
        return new U(null, 2, 5, V, [Tc.b(c), b[c]], null);
      }, rc(b)), He, c, d) : Ie.call(null, pd.a(function(c) {
        return new U(null, 2, 5, V, [Tc.b(c), b[c]], null);
      }, rc(b)), He, c, d);
    }
    if (b instanceof Array) {
      return Ce(c, He, "#js [", " ", "]", d, b);
    }
    if (ba(b)) {
      return r(ra.b(d)) ? A(c, Fe(b)) : A(c, b);
    }
    if (gc(b)) {
      return De.e(c, J(["#\x3c", "" + w(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (N(d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return De.e(c, J(['#inst "', "" + w(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? De.e(c, J(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.P || (b.f ? 0 : s(qb, b)) : s(qb, b)) ? rb(b, c, d) : t ? De.e(c, J(["#\x3c", "" + w(b), "\x3e"], 0)) : null;
  }
  return null;
}, Ke = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (mc(a)) {
      b = "";
    } else {
      b = w;
      var e = pa(), f = new la;
      a: {
        var h = new Eb(f);
        Je(E(a), h, e);
        a = D(I(a));
        for (var g = null, l = 0, n = 0;;) {
          if (n < l) {
            var q = g.D(null, n);
            A(h, " ");
            Je(q, h, e);
            n += 1;
          } else {
            if (a = D(a)) {
              g = a, qc(g) ? (a = Bb(g), l = Cb(g), g = a, q = N(a), a = l, l = q) : (q = E(g), A(h, " "), Je(q, h, e), a = I(g), g = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Ie(a, b, c, d) {
  return Ce(c, function(a, c, d) {
    b.c ? b.c(Wa(a), c, d) : b.call(null, Wa(a), c, d);
    A(c, " ");
    return b.c ? b.c(Xa(a), c, d) : b.call(null, Xa(a), c, d);
  }, "{", ", ", "}", d, D(a));
}
ue.prototype.P = !0;
ue.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
Rb.prototype.P = !0;
Rb.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
Pd.prototype.P = !0;
Pd.prototype.v = function(a, b, c) {
  return Ce(b, Je, "[", " ", "]", c, this);
};
Zc.prototype.P = !0;
Zc.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
p.prototype.P = !0;
p.prototype.v = function(a, b, c) {
  return Ie(this, Je, b, c);
};
Uc.prototype.P = !0;
Uc.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
pe.prototype.P = !0;
pe.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
Nd.prototype.P = !0;
Nd.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
re.prototype.P = !0;
re.prototype.v = function(a, b, c) {
  return Ie(this, Je, b, c);
};
ze.prototype.P = !0;
ze.prototype.v = function(a, b, c) {
  return Ce(b, Je, "#{", " ", "}", c, this);
};
U.prototype.P = !0;
U.prototype.v = function(a, b, c) {
  return Ce(b, Je, "[", " ", "]", c, this);
};
Mc.prototype.P = !0;
Mc.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
Xd.prototype.P = !0;
Xd.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
Nc.prototype.P = !0;
Nc.prototype.v = function(a, b) {
  return A(b, "()");
};
Qc.prototype.P = !0;
Qc.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
qe.prototype.P = !0;
qe.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
we.prototype.P = !0;
we.prototype.v = function(a, b, c) {
  return Ce(b, Je, "(", " ", ")", c, this);
};
U.prototype.gb = !0;
U.prototype.hb = function(a, b) {
  return xc.a(this, b);
};
Pd.prototype.gb = !0;
Pd.prototype.hb = function(a, b) {
  return xc.a(this, b);
};
T.prototype.gb = !0;
T.prototype.hb = function(a, b) {
  return Gb(this, b);
};
C.prototype.gb = !0;
C.prototype.hb = function(a, b) {
  return Gb(this, b);
};
function Le(a, b) {
  if (a ? a.Xb : a) {
    return a.Xb(a, b);
  }
  var c;
  c = Le[m(null == a ? null : a)];
  if (!c && (c = Le._, !c)) {
    throw u("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Me = function() {
  function a(a, b, c, d, e) {
    if (a ? a.ac : a) {
      return a.ac(a, b, c, d, e);
    }
    var q;
    q = Me[m(null == a ? null : a)];
    if (!q && (q = Me._, !q)) {
      throw u("ISwap.-swap!", a);
    }
    return q.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.$b : a) {
      return a.$b(a, b, c, d);
    }
    var e;
    e = Me[m(null == a ? null : a)];
    if (!e && (e = Me._, !e)) {
      throw u("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.Zb : a) {
      return a.Zb(a, b, c);
    }
    var d;
    d = Me[m(null == a ? null : a)];
    if (!d && (d = Me._, !d)) {
      throw u("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.Yb : a) {
      return a.Yb(a, b);
    }
    var c;
    c = Me[m(null == a ? null : a)];
    if (!c && (c = Me._, !c)) {
      throw u("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, g, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, g);
      case 4:
        return b.call(this, e, h, g, l);
      case 5:
        return a.call(this, e, h, g, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.c = c;
  e.i = b;
  e.r = a;
  return e;
}();
function Ne(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.Ja = c;
  this.F = d;
  this.f = 2153938944;
  this.o = 16386;
}
k = Ne.prototype;
k.u = function() {
  return ca(this);
};
k.lb = function(a, b, c) {
  a = D(this.F);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.D(null, f), g = O.c(h, 0, null), h = O.c(h, 1, null);
      h.i ? h.i(g, this, b, c) : h.call(null, g, this, b, c);
      f += 1;
    } else {
      if (a = D(a)) {
        qc(a) ? (d = Bb(a), a = Cb(a), g = d, e = N(d), d = g) : (d = E(a), g = O.c(d, 0, null), h = O.c(d, 1, null), h.i ? h.i(g, this, b, c) : h.call(null, g, this, b, c), a = I(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
k.kb = function(a, b, c) {
  return this.F = Q.c(this.F, b, c);
};
k.mb = function(a, b) {
  return this.F = fc.a(this.F, b);
};
k.v = function(a, b, c) {
  A(b, "#\x3cAtom: ");
  Je(this.state, b, c);
  return A(b, "\x3e");
};
k.w = function() {
  return this.j;
};
k.ya = function() {
  return this.state;
};
k.t = function(a, b) {
  return this === b;
};
var Pe = function() {
  function a(a) {
    return new Ne(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var g = null;
      1 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, g);
    }
    function b(a, c) {
      var d = S(c) ? R.a(X, c) : c, e = P.a(d, Oe), d = P.a(d, sa);
      return new Ne(a, d, e, null);
    }
    a.k = 1;
    a.h = function(a) {
      var c = E(a);
      a = H(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
function Qe(a, b) {
  if (a instanceof Ne) {
    var c = a.Ja;
    if (null != c && !r(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(Ke.e(J([Oc(new C(null, "validate", "validate", 1233162959, null), new C(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.F && sb(a, c, b);
    return b;
  }
  return Le(a, b);
}
function K(a) {
  return y(a);
}
var Re = function() {
  function a(a, b, c, d) {
    return a instanceof Ne ? Qe(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d)) : Me.i(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Ne ? Qe(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : Me.c(a, b, c);
  }
  function c(a, b) {
    return a instanceof Ne ? Qe(a, b.b ? b.b(a.state) : b.call(null, a.state)) : Me.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, v) {
      var z = null;
      4 < arguments.length && (z = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, z);
    }
    function b(a, c, d, e, f) {
      return a instanceof Ne ? Qe(a, R.r(c, a.state, d, e, f)) : Me.r(a, c, d, e, f);
    }
    a.k = 4;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var f = E(a);
      a = H(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, g, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, g);
      case 4:
        return a.call(this, d, h, g, l);
      default:
        return e.e(d, h, g, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.h = e.h;
  d.a = c;
  d.c = b;
  d.i = a;
  d.e = e.e;
  return d;
}(), Se = null, Te = function() {
  function a(a) {
    null == Se && (Se = Pe.b(0));
    return Qb.b([w(a), w(Re.a(Se, Tb))].join(""));
  }
  function b() {
    return c.b("G__");
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.b = a;
  return c;
}(), Ue = {};
function Ve(a) {
  if (a ? a.Jc : a) {
    return a.Jc(a);
  }
  var b;
  b = Ve[m(null == a ? null : a)];
  if (!b && (b = Ve._, !b)) {
    throw u("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function We(a) {
  return(a ? r(r(null) ? null : a.Ic) || (a.tc ? 0 : s(Ue, a)) : s(Ue, a)) ? Ve(a) : "string" === typeof a || "number" === typeof a || a instanceof T || a instanceof C ? Xe.b ? Xe.b(a) : Xe.call(null, a) : Ke.e(J([a], 0));
}
var Xe = function Ye(b) {
  if (null == b) {
    return null;
  }
  if (b ? r(r(null) ? null : b.Ic) || (b.tc ? 0 : s(Ue, b)) : s(Ue, b)) {
    return Ve(b);
  }
  if (b instanceof T) {
    return Sc(b);
  }
  if (b instanceof C) {
    return "" + w(b);
  }
  if (oc(b)) {
    var c = {};
    b = D(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.D(null, f), g = O.c(h, 0, null), h = O.c(h, 1, null);
        c[We(g)] = Ye(h);
        f += 1;
      } else {
        if (b = D(b)) {
          qc(b) ? (e = Bb(b), b = Cb(b), d = e, e = N(e)) : (e = E(b), d = O.c(e, 0, null), e = O.c(e, 1, null), c[We(d)] = Ye(e), b = I(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (nc(b)) {
    c = [];
    b = D(pd.a(Ye, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        g = d.D(null, f), c.push(g), f += 1;
      } else {
        if (b = D(b)) {
          d = b, qc(d) ? (b = Bb(d), f = Cb(d), d = b, e = N(b), b = f) : (b = E(d), c.push(b), b = I(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return t ? b : null;
};
function Ze() {
  var a = Z, b = Pe.b(W);
  return function() {
    function c(a) {
      var b = null;
      0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
      return d.call(this, b);
    }
    function d(c) {
      var d = P.a(y(b), c);
      if (r(d)) {
        return d;
      }
      d = R.a(a, c);
      Re.i(b, Q, c, d);
      return d;
    }
    c.k = 0;
    c.h = function(a) {
      a = D(a);
      return d(a);
    };
    c.e = d;
    return c;
  }();
}
var $e = null;
function af() {
  null == $e && ($e = Pe.b(new p(null, 3, [bf, W, cf, W, df, W], null)));
  return $e;
}
var ef = function() {
  function a(a, b, f) {
    var h = B.a(b, f);
    if (!h && !(h = wc(df.b(a).call(null, b), f)) && (h = pc(f)) && (h = pc(b))) {
      if (h = N(f) === N(b)) {
        for (var h = !0, g = 0;;) {
          if (h && g !== N(f)) {
            h = c.c(a, b.b ? b.b(g) : b.call(null, g), f.b ? f.b(g) : f.call(null, g)), g += 1;
          } else {
            return h;
          }
        }
      } else {
        return h;
      }
    } else {
      return h;
    }
  }
  function b(a, b) {
    return c.c(K(af()), a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), ff = function() {
  function a(a, b) {
    var c = P.a(bf.b(a), b);
    return D(c) ? c : null;
  }
  function b(a) {
    return c.a(K(af()), a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function gf(a, b, c, d) {
  Re.a(a, function() {
    return y(b);
  });
  Re.a(c, function() {
    return y(d);
  });
}
var jf = function hf(b, c, d) {
  var e = y(d).call(null, b), e = r(r(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (r(e)) {
    return e;
  }
  e = function() {
    for (var e = ff.b(c);;) {
      if (0 < N(e)) {
        hf(b, E(e), d), e = H(e);
      } else {
        return null;
      }
    }
  }();
  if (r(e)) {
    return e;
  }
  e = function() {
    for (var e = ff.b(b);;) {
      if (0 < N(e)) {
        hf(E(e), c, d), e = H(e);
      } else {
        return null;
      }
    }
  }();
  return r(e) ? e : !1;
};
function kf(a, b, c) {
  c = jf(a, b, c);
  return r(c) ? c : ef.a(a, b);
}
var mf = function lf(b, c, d, e, f, h, g) {
  var l = Aa.c(function(e, h) {
    var g = O.c(h, 0, null);
    O.c(h, 1, null);
    if (ef.c(y(d), c, g)) {
      var l;
      l = (l = null == e) ? l : kf(g, E(e), f);
      l = r(l) ? h : e;
      if (!r(kf(E(l), g, f))) {
        throw Error([w("Multiple methods in multimethod '"), w(b), w("' match dispatch value: "), w(c), w(" -\x3e "), w(g), w(" and "), w(E(l)), w(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, y(e));
  if (r(l)) {
    if (B.a(y(g), y(d))) {
      return Re.i(h, Q, c, E(I(l))), E(I(l));
    }
    gf(h, e, g, d);
    return lf(b, c, d, e, f, h, g);
  }
  return null;
}, nf = {};
function of(a, b) {
  if (a ? a.mc : a) {
    return a.mc(0, b);
  }
  var c;
  c = of[m(null == a ? null : a)];
  if (!c && (c = of._, !c)) {
    throw u("IMultiFn.-get-method", a);
  }
  return c.call(null, a, b);
}
function pf(a, b) {
  if (a ? a.lc : a) {
    return a.lc(0, b);
  }
  var c;
  c = pf[m(null == a ? null : a)];
  if (!c && (c = pf._, !c)) {
    throw u("IMultiFn.-dispatch", a);
  }
  return c.call(null, a, b);
}
function qf(a, b, c, d, e, f, h, g) {
  this.name = a;
  this.Uc = b;
  this.Tc = c;
  this.vb = d;
  this.$a = e;
  this.cd = f;
  this.yb = h;
  this.eb = g;
  this.f = 4194304;
  this.o = 256;
}
k = qf.prototype;
k.u = function() {
  return ca(this);
};
function rf(a, b, c) {
  Re.i(a.$a, Q, b, c);
  gf(a.yb, a.$a, a.eb, a.vb);
}
k.mc = function(a, b) {
  B.a(y(this.eb), y(this.vb)) || gf(this.yb, this.$a, this.eb, this.vb);
  var c = y(this.yb).call(null, b);
  if (r(c)) {
    return c;
  }
  c = mf(this.name, b, this.vb, this.$a, this.cd, this.yb, this.eb);
  return r(c) ? c : y(this.$a).call(null, this.Tc);
};
k.lc = function(a, b) {
  var c = this.name, d = R.a(this.Uc, b), e = of(this, d);
  if (!r(e)) {
    throw Error([w("No method in multimethod '"), w(c), w("' for dispatch value: "), w(d)].join(""));
  }
  return R.a(e, b);
};
k.call = function() {
  function a(a, b) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return pf(this, e);
  }
  function b(a, b) {
    return pf(this, b);
  }
  a.k = 1;
  a.h = function(a) {
    E(a);
    a = H(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
k.apply = function(a, b) {
  return pf(this, b);
};
var sf = new T(null, "getDefaultProps", "getDefaultProps"), ta = new T(null, "dup", "dup"), tf = new T(null, "componentWillUpdate", "componentWillUpdate"), uf = new T(null, "symbol", "symbol"), vf = new T(null, "r", "r"), wf = new T(null, "componentDidUpdate", "componentDidUpdate"), cf = new T(null, "descendants", "descendants"), Nb = new T(null, "default", "default"), xf = new T(null, "render", "render"), $ = new T(null, "recur", "recur"), yf = new T(null, "on-mouse-over", "on-mouse-over"), zf = 
new T(null, "objects", "objects"), Af = new T(null, "img", "img"), Bf = new T(null, "finally-block", "finally-block"), Cf = new T(null, "cljsRender", "cljsRender"), Df = new T(null, "component-function", "component-function"), Ef = new T(null, "topic", "topic"), Ff = new T(null, "catch-block", "catch-block"), Gf = new T(null, "desc", "desc"), Hf = new T(null, "width", "width"), If = new T(null, "componentWillReceiveProps", "componentWillReceiveProps"), Jf = new T(null, "div", "div"), Kf = new T(null, 
"derefed", "derefed"), Lf = new T(null, "margin-left", "margin-left"), Mf = new T(null, "point", "point"), Nf = new T(null, "y", "y"), Of = new T(null, "key", "key"), Pf = new T(null, "class", "class"), Qf = new T(null, "x", "x"), Rf = new T(null, "on-mouse-down", "on-mouse-down"), Sf = new T(null, "radius", "radius"), Tf = new T(null, "opacity", "opacity"), Uf = new T(null, "click-point", "click-point"), Vf = new T(null, "margin-top", "margin-top"), Wf = new T(null, "name", "name"), Xf = new T(null, 
"perimeter-point", "perimeter-point"), Yf = new T(null, "draggable", "draggable"), Zf = new T(null, "drag", "drag"), $f = new T(null, "intersection", "intersection"), ag = new T(null, "points", "points"), bf = new T(null, "parents", "parents"), qa = new T(null, "flush-on-newline", "flush-on-newline"), bg = new T(null, "click-circle", "click-circle"), cg = new T(null, "hierarchy", "hierarchy"), dg = new T(null, "on-dispose", "on-dispose"), eg = new T(null, "componentWillUnmount", "componentWillUnmount"), 
fg = new T(null, "style", "style"), gg = new T(null, "catch-exception", "catch-exception"), hg = new T(null, "g", "g"), ig = new T(null, "idx", "idx"), mg = new T(null, "click-canvas", "click-canvas"), ng = new T(null, "margin-right", "margin-right"), og = new T(null, "continue-block", "continue-block"), pg = new T(null, "src", "src"), qg = new T(null, "svg", "svg"), rg = new T(null, "prev", "prev"), sg = new T(null, "y2", "y2"), tg = new T(null, "z-index", "z-index"), ug = new T(null, "font-size", 
"font-size"), vg = new T(null, "object", "object"), wg = new T(null, "y1", "y1"), df = new T(null, "ancestors", "ancestors"), xg = new T(null, "displayName", "displayName"), yg = new T(null, "auto-run", "auto-run"), zg = new T(null, "fill", "fill"), Ag = new T(null, "click-segment", "click-segment"), Bg = new T(null, "vertical-align", "vertical-align"), ua = new T(null, "print-length", "print-length"), Cg = new T(null, "type", "type"), Dg = new T(null, "circle", "circle"), Eg = new T(null, "x2", 
"x2"), t = new T(null, "else", "else"), ra = new T(null, "readably", "readably"), Fg = new T(null, "background-color", "background-color"), Gg = new T(null, "x1", "x1"), Oe = new T(null, "validator", "validator"), sa = new T(null, "meta", "meta"), Hg = new T(null, "stroke", "stroke"), Ig = new T(null, "chan", "chan"), Jg = new T(null, "on-mouse-out", "on-mouse-out"), Kg = new T(null, "charset", "charset"), Lg = new T(null, "cy", "cy"), Mg = new T(null, "intersection-point", "intersection-point"), 
Ng = new T(null, "span", "span"), Og = new T(null, "getInitialState", "getInitialState"), Pg = new T(null, "on-set", "on-set"), Qg = new T(null, "for", "for"), Rg = new T(null, "line", "line"), Sg = new T(null, "cx", "cx"), Tg = new T(null, "midpoint", "midpoint"), Ug = new T(null, "componentFunction", "componentFunction"), Vg = new T(null, "selected", "selected"), Wg = new T(null, "stroke-width", "stroke-width"), Xg = new T(null, "height", "height"), Yg = new T(null, "intersection-points", "intersection-points"), 
Zg = new T(null, "on-click", "on-click"), $g = new T(null, "topics", "topics"), ah = new T(null, "shouldComponentUpdate", "shouldComponentUpdate");
var bh = function() {
  function a(a, b, c, h) {
    a = c - a;
    b = h - b;
    return Math.sqrt(a * a + b * b);
  }
  function b(a, b) {
    var f = S(a) ? R.a(X, a) : a, h = P.a(f, Qf), f = P.a(f, Nf), g = S(b) ? R.a(X, b) : b, l = P.a(g, Qf), g = P.a(g, Nf);
    return c.i(h, f, l, g);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.i = a;
  return c;
}(), ch = function() {
  function a(a, b, c, h, g) {
    return new U(null, 2, 5, V, [a + (c - a) * g, b + (h - b) * g], null);
  }
  function b(a, b, f) {
    var h = S(a) ? R.a(X, a) : a;
    a = P.a(h, Qf);
    var h = P.a(h, Nf), g = S(b) ? R.a(X, b) : b;
    b = P.a(g, Qf);
    g = P.a(g, Nf);
    return c.r(a, h, b, g, f);
  }
  var c = null, c = function(c, e, f, h, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.r = a;
  return c;
}(), dh = function() {
  var a = Pe.b(W), b = Pe.b(W), c = Pe.b(W), d = Pe.b(W), e = P.c(W, cg, af());
  return new qf("intersection-points", function(a, b) {
    return new U(null, 2, 5, V, [Cg.b(a), Cg.b(b)], null);
  }, Nb, e, a, b, c, d);
}();
rf(dh, new U(null, 2, 5, V, [Rg, Rg], null), function(a, b) {
  var c;
  c = S(a) ? R.a(X, a) : a;
  var d = P.a(c, ag);
  c = O.c(d, 0, null);
  var e = S(c) ? R.a(X, c) : c;
  c = P.a(e, Qf);
  var e = P.a(e, Nf), d = O.c(d, 1, null), f = S(d) ? R.a(X, d) : d, d = P.a(f, Qf), f = P.a(f, Nf), h = S(b) ? R.a(X, b) : b, g = P.a(h, ag), h = O.c(g, 0, null), l = S(h) ? R.a(X, h) : h, h = P.a(l, Qf), l = P.a(l, Nf), g = O.c(g, 1, null), n = S(g) ? R.a(X, g) : g, g = P.a(n, Qf), q = P.a(n, Nf), n = c - d, v = h - g, z = e - f, F = l - q, M = n * F - v * z;
  0 === M ? c = null : (c = c * f - e * d, e = h * q - l * g, c = new p(null, 3, [Cg, Mf, Qf, (c * v - n * e) / M, Nf, (c * F - z * e) / M], null));
  return r(c) ? new U(null, 1, 5, V, [c], null) : null;
});
rf(dh, new U(null, 2, 5, V, [Dg, Dg], null), function(a, b) {
  var c;
  c = S(a) ? R.a(X, a) : a;
  var d = P.a(c, Sf);
  c = P.a(c, Tg);
  var e = S(c) ? R.a(X, c) : c;
  c = P.a(e, Qf);
  var e = P.a(e, Nf), f = S(b) ? R.a(X, b) : b, h = P.a(f, Sf), f = P.a(f, Tg), g = S(f) ? R.a(X, f) : f, f = P.a(g, Qf), g = P.a(g, Nf), l = d + h, n = Math.abs(d - h), q = bh.i(c, e, f, g);
  q > l || q < n ? c = null : (d *= d, h = (d - h * h + q * q) / (2 * q), l = Math.sqrt(d - h * h), h = ch.r(c, e, f, g, h / q), d = O.c(h, 0, null), h = O.c(h, 1, null), q = l / q, e = q * (g - e), c = q * (f - c), c = new U(null, 2, 5, V, [new p(null, 3, [Cg, Mf, Qf, d - e, Nf, h + c], null), new p(null, 3, [Cg, Mf, Qf, d + e, Nf, h - c], null)], null));
  return c;
});
rf(dh, new U(null, 2, 5, V, [Rg, Dg], null), function(a, b) {
  var c;
  c = S(a) ? R.a(X, a) : a;
  var d = P.a(c, ag);
  c = O.c(d, 0, null);
  var e = S(c) ? R.a(X, c) : c;
  c = P.a(e, Qf);
  var e = P.a(e, Nf), d = O.c(d, 1, null), d = S(d) ? R.a(X, d) : d, f = P.a(d, Qf), h = P.a(d, Nf), g = S(b) ? R.a(X, b) : b, d = P.a(g, Sf), g = P.a(g, Tg), l = S(g) ? R.a(X, g) : g, g = P.a(l, Qf), l = P.a(l, Nf), n = bh.i(c, e, f, h), f = (f - c) / n, h = (h - e) / n, n = f * (g - c) + h * (l - e), g = bh.i(n * f + c, n * h + e, g, l);
  g <= d ? (g = Math.sqrt(d * d - g * g), d = n - g, g = n + g, c = new U(null, 2, 5, V, [new p(null, 3, [Cg, Mf, Qf, d * f + c, Nf, d * h + e], null), new p(null, 3, [Cg, Mf, Qf, g * f + c, Nf, g * h + e], null)], null)) : c = null;
  return c;
});
rf(dh, new U(null, 2, 5, V, [Dg, Rg], null), function(a, b) {
  return dh.a ? dh.a(b, a) : dh.call(null, b, a);
});
var eh, fh, gh, hh;
function ih() {
  return aa.navigator ? aa.navigator.userAgent : null;
}
hh = gh = fh = eh = !1;
var jh;
if (jh = ih()) {
  var kh = aa.navigator;
  eh = 0 == jh.indexOf("Opera");
  fh = !eh && -1 != jh.indexOf("MSIE");
  gh = !eh && -1 != jh.indexOf("WebKit");
  hh = !eh && !gh && "Gecko" == kh.product;
}
var lh = eh, mh = fh, nh = hh, oh = gh;
function ph() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var qh;
a: {
  var rh = "", sh;
  if (lh && aa.opera) {
    var th = aa.opera.version, rh = "function" == typeof th ? th() : th
  } else {
    if (nh ? sh = /rv\:([^\);]+)(\)|;)/ : mh ? sh = /MSIE\s+([^\);]+)(\)|;)/ : oh && (sh = /WebKit\/(\S+)/), sh) {
      var uh = sh.exec(ih()), rh = uh ? uh[1] : ""
    }
  }
  if (mh) {
    var vh = ph();
    if (vh > parseFloat(rh)) {
      qh = String(vh);
      break a;
    }
  }
  qh = rh;
}
var wh = {};
function xh(a) {
  var b;
  if (!(b = wh[a])) {
    b = 0;
    for (var c = String(qh).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", g = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var q = l.exec(h) || ["", "", ""], v = n.exec(g) || ["", "", ""];
        if (0 == q[0].length && 0 == v[0].length) {
          break;
        }
        b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == v[2].length) ? -1 : (0 == q[2].length) > (0 == v[2].length) ? 1 : 0) || (q[2] < v[2] ? -1 : q[2] > v[2] ? 1 : 0);
      } while (0 == b);
    }
    b = wh[a] = 0 <= b;
  }
  return b;
}
var yh = aa.document, zh = yh && mh ? ph() || ("CSS1Compat" == yh.compatMode ? parseInt(qh, 10) : 5) : void 0;
var Ah;
(Ah = !mh) || (Ah = mh && 9 <= zh);
var Bh = Ah, Ch = mh && !xh("9");
!oh || xh("528");
nh && xh("1.9b") || mh && xh("8") || lh && xh("9.5") || oh && xh("528");
nh && !xh("8") || mh && xh("9");
function Dh(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
}
Dh.prototype.Bb = !1;
Dh.prototype.defaultPrevented = !1;
Dh.prototype.stopPropagation = function() {
  this.Bb = !0;
};
Dh.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Eh(a) {
  Eh[" "](a);
  return a;
}
Eh[" "] = function() {
};
function Fh(a, b) {
  a && this.wb(a, b);
}
(function() {
  function a() {
  }
  a.prototype = Dh.prototype;
  Fh.Cc = Dh.prototype;
  Fh.prototype = new a;
  Fh.prototype.constructor = Fh;
})();
k = Fh.prototype;
k.target = null;
k.relatedTarget = null;
k.offsetX = 0;
k.offsetY = 0;
k.clientX = 0;
k.clientY = 0;
k.screenX = 0;
k.screenY = 0;
k.button = 0;
k.keyCode = 0;
k.charCode = 0;
k.ctrlKey = !1;
k.altKey = !1;
k.shiftKey = !1;
k.metaKey = !1;
k.Wa = null;
k.wb = function(a, b) {
  var c = this.type = a.type;
  Dh.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (nh) {
      var e;
      a: {
        try {
          Eh(d.nodeName);
          e = !0;
          break a;
        } catch (f) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = oh || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = oh || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.Wa = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Bb;
};
k.stopPropagation = function() {
  Fh.Cc.stopPropagation.call(this);
  this.Wa.stopPropagation ? this.Wa.stopPropagation() : this.Wa.cancelBubble = !0;
};
k.preventDefault = function() {
  Fh.Cc.preventDefault.call(this);
  var a = this.Wa;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Ch) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Gh, Hh, Ih;
function Jh(a, b, c) {
  if (a ? a.pb : a) {
    return a.pb(0, b, c);
  }
  var d;
  d = Jh[m(null == a ? null : a)];
  if (!d && (d = Jh._, !d)) {
    throw u("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function Kh(a) {
  if (a ? a.ob : a) {
    return a.ob();
  }
  var b;
  b = Kh[m(null == a ? null : a)];
  if (!b && (b = Kh._, !b)) {
    throw u("Channel.close!", a);
  }
  return b.call(null, a);
}
function Lh(a) {
  if (a ? a.sc : a) {
    return!0;
  }
  var b;
  b = Lh[m(null == a ? null : a)];
  if (!b && (b = Lh._, !b)) {
    throw u("Handler.active?", a);
  }
  return b.call(null, a);
}
function Mh(a) {
  if (a ? a.dc : a) {
    return a.dc();
  }
  var b;
  b = Mh[m(null == a ? null : a)];
  if (!b && (b = Mh._, !b)) {
    throw u("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function Nh(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Oh(a, b, c, d) {
  this.head = a;
  this.p = b;
  this.length = c;
  this.d = d;
}
Oh.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.d[this.p];
  this.d[this.p] = null;
  this.p = (this.p + 1) % this.d.length;
  this.length -= 1;
  return a;
};
Oh.prototype.unshift = function(a) {
  this.d[this.head] = a;
  this.head = (this.head + 1) % this.d.length;
  this.length += 1;
  return null;
};
function Ph(a, b) {
  a.length + 1 === a.d.length && a.resize();
  a.unshift(b);
}
Oh.prototype.resize = function() {
  var a = Array(2 * this.d.length);
  return this.p < this.head ? (Nh(this.d, this.p, a, 0, this.length), this.p = 0, this.head = this.length, this.d = a) : this.p > this.head ? (Nh(this.d, this.p, a, 0, this.d.length - this.p), Nh(this.d, 0, a, this.d.length - this.p, this.head), this.p = 0, this.head = this.length, this.d = a) : this.p === this.head ? (this.head = this.p = 0, this.d = a) : null;
};
function Qh(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.b ? b.b(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Rh(a) {
  if (!(0 < a)) {
    throw Error([w("Assert failed: "), w("Can't create a ring buffer of size 0"), w("\n"), w(Ke.e(J([Oc(new C(null, "\x3e", "\x3e", -1640531465, null), new C(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new Oh(0, 0, 0, Array(a));
}
function Sh(a, b) {
  this.X = a;
  this.bd = b;
  this.o = 0;
  this.f = 2;
}
Sh.prototype.N = function() {
  return this.X.length;
};
Sh.prototype.dc = function() {
  return this.X.length === this.bd;
};
Sh.prototype.Pc = function() {
  return this.X.pop();
};
function Th(a, b) {
  if (!va(Mh(a))) {
    throw Error([w("Assert failed: "), w("Can't add to a full buffer"), w("\n"), w(Ke.e(J([Oc(new C(null, "not", "not", -1640422260, null), Oc(new C("impl", "full?", "impl/full?", -1337857039, null), new C(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.X.unshift(b);
}
;var Uh = null, Vh = Rh(32), Wh = !1, Xh = !1;
function Yh() {
  Wh = !0;
  Xh = !1;
  for (var a = 0;;) {
    var b = Vh.pop();
    if (null != b && (b.l ? b.l() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Wh = !1;
  return 0 < Vh.length ? Zh.l ? Zh.l() : Zh.call(null) : null;
}
"undefined" !== typeof MessageChannel && (Uh = new MessageChannel, Uh.port1.onmessage = function() {
  return Yh();
});
function Zh() {
  var a = Xh;
  if (r(a ? Wh : a)) {
    return null;
  }
  Xh = !0;
  return "undefined" !== typeof MessageChannel ? Uh.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Yh) : t ? setTimeout(Yh, 0) : null;
}
function $h(a) {
  Ph(Vh, a);
  Zh();
}
;var ai, bi = Pe.b(0);
function ci(a, b) {
  b.qb = null;
  var c = ai;
  try {
    return ai = b, a.l ? a.l() : a.call(null);
  } finally {
    ai = c;
  }
}
function di(a) {
  var b = a.qb;
  a.qb = null;
  return b;
}
function ei(a) {
  var b = ai;
  if (null != b) {
    var c = b.qb;
    b.qb = cc.a(null == c ? Be : c, a);
  }
}
function fi(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.Ja = c;
  this.F = d;
  this.f = 2153938944;
  this.o = 114690;
}
k = fi.prototype;
k.u = function() {
  return ca(this);
};
k.lb = function(a, b, c) {
  var d = this;
  return Dc(function(a, f, h) {
    h.i ? h.i(f, d, b, c) : h.call(null, f, d, b, c);
    return null;
  }, null, this.F);
};
k.kb = function(a, b, c) {
  return this.F = Q.c(this.F, b, c);
};
k.mb = function(a, b) {
  return this.F = fc.a(this.F, b);
};
k.v = function(a, b, c) {
  A(b, "#\x3cAtom: ");
  Je(this.state, b, c);
  return A(b, "\x3e");
};
k.w = function() {
  return this.j;
};
k.Yb = function(a, b) {
  return Le(this, b.b ? b.b(this.state) : b.call(null, this.state));
};
k.Zb = function(a, b, c) {
  return Le(this, b.a ? b.a(this.state, c) : b.call(null, this.state, c));
};
k.$b = function(a, b, c, d) {
  return Le(this, b.c ? b.c(this.state, c, d) : b.call(null, this.state, c, d));
};
k.ac = function(a, b, c, d, e) {
  return Le(this, R.r(b, this.state, c, d, e));
};
k.Xb = function(a, b) {
  if (null != this.Ja && !r(this.Ja.b ? this.Ja.b(b) : this.Ja.call(null, b))) {
    throw Error([w("Assert failed: "), w("Validator rejected reference state"), w("\n"), w(Ke.e(J([Oc(new C(null, "validator", "validator", 1544652043, null), new C(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  var c = this.state;
  this.state = b;
  null != this.F && sb(this, c, b);
  return b;
};
k.ya = function() {
  ei(this);
  return this.state;
};
k.t = function(a, b) {
  return this === b;
};
var gi = function() {
  function a(a) {
    return new fi(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var g = null;
      1 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, g);
    }
    function b(a, c) {
      var d = S(c) ? R.a(X, c) : c, e = P.a(d, Oe), d = P.a(d, sa);
      return new fi(a, d, e, null);
    }
    a.k = 1;
    a.h = function(a) {
      var c = E(a);
      a = H(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
function hi(a) {
  if (a ? a.Ac : a) {
    return a.Ac();
  }
  var b;
  b = hi[m(null == a ? null : a)];
  if (!b && (b = hi._, !b)) {
    throw u("IDisposable.dispose!", a);
  }
  return b.call(null, a);
}
function ii(a) {
  if (a ? a.Bc : a) {
    return a.Bc();
  }
  var b;
  b = ii[m(null == a ? null : a)];
  if (!b && (b = ii._, !b)) {
    throw u("IRunnable.run", a);
  }
  return b.call(null, a);
}
function ji(a, b) {
  if (a ? a.hc : a) {
    return a.hc(0, b);
  }
  var c;
  c = ji[m(null == a ? null : a)];
  if (!c && (c = ji._, !c)) {
    throw u("IComputedImpl.-update-watching", a);
  }
  return c.call(null, a, b);
}
function ki(a, b, c, d) {
  if (a ? a.zc : a) {
    return a.zc(0, 0, c, d);
  }
  var e;
  e = ki[m(null == a ? null : a)];
  if (!e && (e = ki._, !e)) {
    throw u("IComputedImpl.-handle-change", a);
  }
  return e.call(null, a, b, c, d);
}
function li(a, b, c, d) {
  return Dc(function(b, f, h) {
    h.i ? h.i(f, a, c, d) : h.call(null, f, a, c, d);
    return null;
  }, null, b);
}
function mi(a, b, c, d, e, f, h, g, l) {
  this.L = a;
  this.state = b;
  this.Va = c;
  this.Ka = d;
  this.xa = e;
  this.F = f;
  this.cb = h;
  this.Ab = g;
  this.zb = l;
  this.f = 2153807872;
  this.o = 114690;
}
k = mi.prototype;
k.u = function() {
  return ca(this);
};
k.Yb = function(a, b) {
  return Le(this, b.b ? b.b(this.state) : b.call(null, this.state));
};
k.Zb = function(a, b, c) {
  return Le(this, b.a ? b.a(this.state, c) : b.call(null, this.state, c));
};
k.$b = function(a, b, c, d) {
  return Le(this, b.c ? b.c(this.state, c, d) : b.call(null, this.state, c, d));
};
k.ac = function(a, b, c, d, e) {
  return Le(this, R.r(b, this.state, c, d, e));
};
k.ya = function() {
  var a = this;
  if (va(function() {
    var b = a.cb;
    return r(b) ? b : ai;
  }())) {
    var b = new U(null, 2, 5, V, [a.cb, ai], null);
    null != console.log && console.log("" + w([w("dbg "), w("reagent.ratom"), w(":"), w(177), w(": "), w("[auto-run *ratom-context*]"), w(": "), w(Ke.e(J([b], 0)))].join("")));
  }
  if (!r(function() {
    var b = a.cb;
    return r(b) ? b : ai;
  }())) {
    throw Error([w("Assert failed: "), w("Reaction derefed outside auto-running context"), w("\n"), w(Ke.e(J([Oc(new C(null, "or", "or", -1640527972, null), new C(null, "auto-run", "auto-run", -202959066, null), new C(null, "*ratom-context*", "*ratom-context*", 1304741512, null))], 0)))].join(""));
  }
  ei(this);
  return r(a.Va) ? ii(this) : a.state;
};
k.v = function(a, b, c) {
  A(b, [w("#\x3cReaction "), w(Pb(this)), w(": ")].join(""));
  Je(this.state, b, c);
  return A(b, "\x3e");
};
k.zc = function(a, b, c, d) {
  var e = this;
  return r(function() {
    var a = e.Ka;
    return r(a) ? va(e.Va) && c !== d : a;
  }()) ? (e.Va = !0, function() {
    var a = e.cb;
    return r(a) ? a : ii;
  }().call(null, this)) : null;
};
k.hc = function(a, b) {
  for (var c = D(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.D(null, f);
      wc(this.xa, h) || tb(h, this, ki);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c, qc(d) ? (c = Bb(d), f = Cb(d), d = c, e = N(c), c = f) : (c = E(d), wc(this.xa, c) || tb(c, this, ki), c = I(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  c = D(this.xa);
  d = null;
  for (f = e = 0;;) {
    if (f < e) {
      h = d.D(null, f), wc(b, h) || ub(h, this), f += 1;
    } else {
      if (c = D(c)) {
        d = c, qc(d) ? (c = Bb(d), f = Cb(d), d = c, e = N(c), c = f) : (c = E(d), wc(b, c) || ub(c, this), c = I(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return this.xa = b;
};
k.lb = function(a, b, c) {
  r(this.Ab) && (this.Ab.a ? this.Ab.a(b, c) : this.Ab.call(null, b, c));
  return li(this, this.F, b, c);
};
k.kb = function(a, b, c) {
  return this.F = Q.c(this.F, b, c);
};
k.mb = function(a, b) {
  this.F = fc.a(this.F, b);
  return mc(this.F) ? hi(this) : null;
};
k.Ac = function() {
  for (var a = D(this.xa), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.D(null, d);
      ub(e, this);
      d += 1;
    } else {
      if (a = D(a)) {
        b = a, qc(b) ? (a = Bb(b), d = Cb(b), b = a, c = N(a), a = d) : (a = E(b), ub(a, this), a = I(b), b = null, c = 0), d = 0;
      } else {
        break;
      }
    }
  }
  this.xa = Be;
  this.state = null;
  this.Va = !0;
  r(this.Ka) && (r(!1) && Re.a(bi, Ec), this.Ka = !1);
  return r(this.zb) ? this.zb.l ? this.zb.l() : this.zb.call(null) : null;
};
k.t = function(a, b) {
  return this === b;
};
k.Bc = function() {
  var a = this.state, b = ci(this.L, this), c = di(this);
  jd.a(c, this.xa) && ji(this, c);
  r(this.Ka) || (r(!1) && Re.a(bi, Tb), this.Ka = !0);
  this.Va = !1;
  this.state = b;
  li(this, this.F, a, this.state);
  return b;
};
k.Xb = function(a, b) {
  var c = this.state;
  this.state = b;
  sb(this, c, b);
  return b;
};
var ni = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = S(b) ? R.a(X, b) : b, f = P.a(e, Kf), h = P.a(e, dg), g = P.a(e, Pg), e = P.a(e, yg), e = B.a(e, !0) ? ii : e, l = null != f, h = new mi(a, null, !l, l, null, W, e, g, h);
    null != f && (r(!1) && Re.a(bi, Tb), h.hc(0, f));
    return h;
  }
  a.k = 1;
  a.h = function(a) {
    var d = E(a);
    a = H(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
var oi = 0;
function pi() {
}
k = pi.prototype;
k.key = 0;
k.wa = !1;
k.fb = !1;
k.wb = function(a, b, c, d, e, f) {
  if ("function" == m(a)) {
    this.vc = !0;
  } else {
    if (a && a.handleEvent && "function" == m(a.handleEvent)) {
      this.vc = !1;
    } else {
      throw Error("Invalid listener argument");
    }
  }
  this.ra = a;
  this.yc = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Ga = f;
  this.fb = !1;
  this.key = ++oi;
  this.wa = !1;
};
k.handleEvent = function(a) {
  return this.vc ? this.ra.call(this.Ga || this.src, a) : this.ra.handleEvent.call(this.ra, a);
};
var qi = {}, fj = {}, gj = {}, hj = {};
function ij(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      ij(a, b[f], c, d, e);
    }
    return null;
  }
  a: {
    if (!b) {
      throw Error("Invalid event type");
    }
    d = !!d;
    var h = fj;
    b in h || (h[b] = {ka:0, ma:0});
    h = h[b];
    d in h || (h[d] = {ka:0, ma:0}, h.ka++);
    var h = h[d], f = ca(a), g;
    h.ma++;
    if (h[f]) {
      g = h[f];
      for (var l = 0;l < g.length;l++) {
        if (h = g[l], h.ra == c && h.Ga == e) {
          if (h.wa) {
            break;
          }
          g[l].fb = !1;
          a = g[l];
          break a;
        }
      }
    } else {
      g = h[f] = [], h.ka++;
    }
    l = jj();
    h = new pi;
    h.wb(c, l, a, b, d, e);
    h.fb = !1;
    l.src = a;
    l.ra = h;
    g.push(h);
    gj[f] || (gj[f] = []);
    gj[f].push(h);
    a.addEventListener ? a != aa && a.Sc || a.addEventListener(b, l, d) : a.attachEvent(b in hj ? hj[b] : hj[b] = "on" + b, l);
    a = h;
  }
  b = a.key;
  qi[b] = a;
  return b;
}
function jj() {
  var a = kj, b = Bh ? function(c) {
    return a.call(b.src, b.ra, c);
  } : function(c) {
    c = a.call(b.src, b.ra, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function lj(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      lj(a, b[f], c, d, e);
    }
    return null;
  }
  d = !!d;
  a: {
    f = fj;
    if (b in f && (f = f[b], d in f && (f = f[d], a = ca(a), f[a]))) {
      a = f[a];
      break a;
    }
    a = null;
  }
  if (!a) {
    return!1;
  }
  for (f = 0;f < a.length;f++) {
    if (a[f].ra == c && a[f].capture == d && a[f].Ga == e) {
      return mj(a[f].key);
    }
  }
  return!1;
}
function mj(a) {
  var b = qi[a];
  if (!b || b.wa) {
    return!1;
  }
  var c = b.src, d = b.type, e = b.yc, f = b.capture;
  c.removeEventListener ? c != aa && c.Sc || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in hj ? hj[d] : hj[d] = "on" + d, e);
  c = ca(c);
  if (gj[c]) {
    var e = gj[c], h = ga(e, b);
    0 <= h && fa.splice.call(e, h, 1);
    0 == e.length && delete gj[c];
  }
  b.wa = !0;
  if (b = fj[d][f][c]) {
    b.xc = !0, nj(d, f, c, b);
  }
  delete qi[a];
  return!0;
}
function nj(a, b, c, d) {
  if (!d.xb && d.xc) {
    for (var e = 0, f = 0;e < d.length;e++) {
      d[e].wa ? d[e].yc.src = null : (e != f && (d[f] = d[e]), f++);
    }
    d.length = f;
    d.xc = !1;
    0 == f && (delete fj[a][b][c], fj[a][b].ka--, 0 == fj[a][b].ka && (delete fj[a][b], fj[a].ka--), 0 == fj[a].ka && delete fj[a]);
  }
}
function oj(a, b, c, d, e) {
  var f = 1;
  b = ca(b);
  if (a[b]) {
    var h = --a.ma, g = a[b];
    g.xb ? g.xb++ : g.xb = 1;
    try {
      for (var l = g.length, n = 0;n < l;n++) {
        var q = g[n];
        q && !q.wa && (f &= !1 !== pj(q, e));
      }
    } finally {
      a.ma = Math.max(h, a.ma), g.xb--, nj(c, d, b, g);
    }
  }
  return Boolean(f);
}
function pj(a, b) {
  a.fb && mj(a.key);
  return a.handleEvent(b);
}
function kj(a, b) {
  if (a.wa) {
    return!0;
  }
  var c = a.type, d = fj;
  if (!(c in d)) {
    return!0;
  }
  var d = d[c], e, f;
  if (!Bh) {
    var h;
    if (!(h = b)) {
      a: {
        h = ["window", "event"];
        for (var g = aa;e = h.shift();) {
          if (null != g[e]) {
            g = g[e];
          } else {
            h = null;
            break a;
          }
        }
        h = g;
      }
    }
    e = h;
    h = !0 in d;
    g = !1 in d;
    if (h) {
      if (0 > e.keyCode || void 0 != e.returnValue) {
        return!0;
      }
      a: {
        var l = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (n) {
            l = !0;
          }
        }
        if (l || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
    }
    l = new Fh;
    l.wb(e, this);
    e = !0;
    try {
      if (h) {
        for (var q = [], v = l.currentTarget;v;v = v.parentNode) {
          q.push(v);
        }
        f = d[!0];
        f.ma = f.ka;
        for (var z = q.length - 1;!l.Bb && 0 <= z && f.ma;z--) {
          l.currentTarget = q[z], e &= oj(f, q[z], c, !0, l);
        }
        if (g) {
          for (f = d[!1], f.ma = f.ka, z = 0;!l.Bb && z < q.length && f.ma;z++) {
            l.currentTarget = q[z], e &= oj(f, q[z], c, !1, l);
          }
        }
      } else {
        e = pj(a, l);
      }
    } finally {
      q && (q.length = 0);
    }
    return e;
  }
  c = new Fh(b, this);
  return e = pj(a, c);
}
;var qj, sj = function rj(b) {
  "undefined" === typeof qj && (qj = function(b, d, e) {
    this.L = b;
    this.fc = d;
    this.Zc = e;
    this.o = 0;
    this.f = 393216;
  }, qj.va = !0, qj.ua = "cljs.core.async.impl.ioc-helpers/t13379", qj.Ba = function(b, d) {
    return A(d, "cljs.core.async.impl.ioc-helpers/t13379");
  }, qj.prototype.sc = function() {
    return!0;
  }, qj.prototype.w = function() {
    return this.Zc;
  }, qj.prototype.B = function(b, d) {
    return new qj(this.L, this.fc, d);
  });
  return new qj(b, rj, null);
};
function tj(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].ob(), b;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}
function uj(a, b, c) {
  c = c.Qc(sj(function(c) {
    a[2] = c;
    a[1] = b;
    return tj(a);
  }));
  return r(c) ? (a[2] = y(c), a[1] = b, $) : null;
}
function vj(a, b, c) {
  b = b.pb(0, c, sj(function(b) {
    a[2] = b;
    a[1] = 22;
    return tj(a);
  }));
  return r(b) ? (a[2] = y(b), a[1] = 22, $) : null;
}
function wj(a, b) {
  var c = a[6];
  null != b && c.pb(0, b, sj(function() {
    return null;
  }));
  c.ob();
  return c;
}
function xj(a) {
  for (;;) {
    var b = a[4], c = Ff.b(b), d = gg.b(b), e = a[5];
    if (r(function() {
      var a = e;
      return r(a) ? va(b) : a;
    }())) {
      throw e;
    }
    if (r(function() {
      var a = e;
      return r(a) ? (a = c, r(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = Q.e(b, Ff, null, J([gg, null], 0));
      break;
    }
    if (r(function() {
      var a = e;
      return r(a) ? va(c) && va(Bf.b(b)) : a;
    }())) {
      a[4] = rg.b(b);
    } else {
      if (r(function() {
        var a = e;
        return r(a) ? (a = va(c)) ? Bf.b(b) : a : a;
      }())) {
        a[1] = Bf.b(b);
        a[4] = Q.c(b, Bf, null);
        break;
      }
      if (r(function() {
        var a = va(e);
        return a ? Bf.b(b) : a;
      }())) {
        a[1] = Bf.b(b);
        a[4] = Q.c(b, Bf, null);
        break;
      }
      if (va(e) && va(Bf.b(b))) {
        a[1] = og.b(b);
        a[4] = rg.b(b);
        break;
      }
      if (t) {
        throw Error([w("Assert failed: "), w("No matching clause"), w("\n"), w(Ke.e(J([!1], 0)))].join(""));
      }
      break;
    }
  }
}
;var yj, Aj = function zj(b) {
  "undefined" === typeof yj && (yj = function(b, d, e) {
    this.M = b;
    this.Ec = d;
    this.Yc = e;
    this.o = 0;
    this.f = 425984;
  }, yj.va = !0, yj.ua = "cljs.core.async.impl.channels/t13368", yj.Ba = function(b, d) {
    return A(d, "cljs.core.async.impl.channels/t13368");
  }, yj.prototype.ya = function() {
    return this.M;
  }, yj.prototype.w = function() {
    return this.Yc;
  }, yj.prototype.B = function(b, d) {
    return new yj(this.M, this.Ec, d);
  });
  return new yj(b, zj, null);
};
function Bj(a, b) {
  this.Ga = a;
  this.M = b;
}
function Cj(a) {
  return Lh(a.Ga);
}
function Dj(a, b, c, d, e, f) {
  this.bb = a;
  this.tb = b;
  this.Cb = c;
  this.sb = d;
  this.X = e;
  this.closed = f;
}
Dj.prototype.ob = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.bb.pop();
      if (null != a) {
        $h(function(a) {
          return function() {
            return a.b ? a.b(null) : a.call(null, null);
          };
        }(a.L, a));
      } else {
        break;
      }
    }
  }
  return null;
};
Dj.prototype.Qc = function(a) {
  if (null != this.X && 0 < N(this.X)) {
    return a = a.L, Aj(this.X.Pc());
  }
  for (;;) {
    var b = this.Cb.pop();
    if (null != b) {
      var c = b.Ga, d = b.M, e = c.L;
      a = a.L;
      $h(function(a) {
        return function() {
          return a.b ? a.b(!0) : a.call(null, !0);
        };
      }(e, a, c, d, b));
      return Aj(d);
    }
    if (this.closed) {
      return a = a.L, Aj(null);
    }
    64 < this.tb ? (this.tb = 0, Qh(this.bb, Lh)) : this.tb += 1;
    if (!(1024 > this.bb.length)) {
      throw Error([w("Assert failed: "), w([w("No more than "), w(1024), w(" pending takes are allowed on a single channel.")].join("")), w("\n"), w(Ke.e(J([Oc(new C(null, "\x3c", "\x3c", -1640531467, null), Oc(new C(null, ".-length", ".-length", 1395928862, null), new C(null, "takes", "takes", -1530407291, null)), new C("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    Ph(this.bb, a);
    return null;
  }
};
Dj.prototype.pb = function(a, b, c) {
  if (null == b) {
    throw Error([w("Assert failed: "), w("Can't put nil in on a channel"), w("\n"), w(Ke.e(J([Oc(new C(null, "not", "not", -1640422260, null), Oc(new C(null, "nil?", "nil?", -1637150201, null), new C(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (a = this.closed) {
    return Aj(!a);
  }
  for (;;) {
    a = this.bb.pop();
    if (null != a) {
      c = c.L, $h(function(a) {
        return function() {
          return a.b ? a.b(b) : a.call(null, b);
        };
      }(a.L, c, a));
    } else {
      if (null == this.X || this.X.dc()) {
        64 < this.sb ? (this.sb = 0, Qh(this.Cb, Cj)) : this.sb += 1;
        if (!(1024 > this.Cb.length)) {
          throw Error([w("Assert failed: "), w([w("No more than "), w(1024), w(" pending puts are allowed on a single channel."), w(" Consider using a windowed buffer.")].join("")), w("\n"), w(Ke.e(J([Oc(new C(null, "\x3c", "\x3c", -1640531467, null), Oc(new C(null, ".-length", ".-length", 1395928862, null), new C(null, "puts", "puts", -1637078787, null)), new C("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Ph(this.Cb, new Bj(c, b));
        return null;
      }
      c = c.L;
      Th(this.X, b);
    }
    return Aj(!0);
  }
};
function Ej(a, b, c) {
  this.key = a;
  this.M = b;
  this.forward = c;
  this.o = 0;
  this.f = 2155872256;
}
Ej.prototype.v = function(a, b, c) {
  return Ce(b, Je, "[", " ", "]", c, this);
};
Ej.prototype.G = function() {
  return Ia(Ia(Sb, this.M), this.key);
};
(function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var h = 0;;) {
      if (h < c.length) {
        c[h] = null, h += 1;
      } else {
        break;
      }
    }
    return new Ej(a, b, c);
  }
  function b(a) {
    return c.c(null, null, a);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
})().b(0);
var Gj = function Fj(b) {
  "undefined" === typeof Gh && (Gh = function(b, d, e) {
    this.L = b;
    this.fc = d;
    this.Vc = e;
    this.o = 0;
    this.f = 393216;
  }, Gh.va = !0, Gh.ua = "cljs.core.async/t10677", Gh.Ba = function(b, d) {
    return A(d, "cljs.core.async/t10677");
  }, Gh.prototype.sc = function() {
    return!0;
  }, Gh.prototype.w = function() {
    return this.Vc;
  }, Gh.prototype.B = function(b, d) {
    return new Gh(this.L, this.fc, d);
  });
  return new Gh(b, Fj, null);
}, Hj = function() {
  function a(a) {
    a = B.a(a, 0) ? null : a;
    a = "number" === typeof a ? new Sh(Rh(a), a) : a;
    return new Dj(Rh(32), 0, Rh(32), 0, a, !1);
  }
  function b() {
    return c.b(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.b = a;
  return c;
}(), Ij = Gj(function() {
  return null;
}), Jj = function() {
  function a(a, b, c, d) {
    a = Jh(a, b, Gj(c));
    if (r(a)) {
      var l = y(a);
      r(d) ? c.b ? c.b(l) : c.call(null, l) : $h(function() {
        return c.b ? c.b(l) : c.call(null, l);
      });
      return l;
    }
    return!0;
  }
  function b(a, b, c) {
    return d.i(a, b, c, !0);
  }
  function c(a, b) {
    var c = Jh(a, b, Ij);
    return r(c) ? y(c) : !0;
  }
  var d = null, d = function(d, f, h, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.i = a;
  return d;
}();
function Kj(a) {
  if (a ? a.cc : a) {
    return a.cc(a);
  }
  var b;
  b = Kj[m(null == a ? null : a)];
  if (!b && (b = Kj._, !b)) {
    throw u("Mux.muxch*", a);
  }
  return b.call(null, a);
}
function Lj(a, b, c) {
  if (a ? a.pc : a) {
    return a.pc(a, b, c);
  }
  var d;
  d = Lj[m(null == a ? null : a)];
  if (!d && (d = Lj._, !d)) {
    throw u("Mult.tap*", a);
  }
  return d.call(null, a, b, c);
}
function Mj(a, b) {
  if (a ? a.nb : a) {
    return a.nb(a, b);
  }
  var c;
  c = Mj[m(null == a ? null : a)];
  if (!c && (c = Mj._, !c)) {
    throw u("Mult.untap*", a);
  }
  return c.call(null, a, b);
}
var Oj = function Nj(b) {
  var c = Pe.b(W), d = function() {
    "undefined" === typeof Hh && (Hh = function(b, c, d, e) {
      this.ec = b;
      this.ch = c;
      this.ad = d;
      this.Wc = e;
      this.o = 0;
      this.f = 393216;
    }, Hh.va = !0, Hh.ua = "cljs.core.async/t11699", Hh.Ba = function() {
      return function(b, c) {
        return A(c, "cljs.core.async/t11699");
      };
    }(c), Hh.prototype.pc = function() {
      return function(b, c, d) {
        Re.i(this.ec, Q, c, d);
        return null;
      };
    }(c), Hh.prototype.nb = function() {
      return function(b, c) {
        Re.c(this.ec, fc, c);
        return null;
      };
    }(c), Hh.prototype.cc = function() {
      return function() {
        return this.ch;
      };
    }(c), Hh.prototype.w = function() {
      return function() {
        return this.Wc;
      };
    }(c), Hh.prototype.B = function() {
      return function(b, c) {
        return new Hh(this.ec, this.ch, this.ad, c);
      };
    }(c));
    return new Hh(c, b, Nj, null);
  }(), e = Hj.b(1), f = Pe.b(null), h = function(b, c, d, e) {
    return function() {
      return 0 === Re.a(e, Ec) ? Jj.a(d, !0) : null;
    };
  }(c, d, e, f), g = Hj.b(1);
  $h(function() {
    var l = function() {
      return function(b) {
        return function() {
          function c(d) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var c = b(d);
                    if (!Rc(c, $)) {
                      return c;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return d[5] = e, xj(d), $;
                  }
                  if (t) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!Rc(e, $)) {
                return e;
              }
            }
          }
          function d() {
            var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
            b[0] = e;
            b[1] = 1;
            return b;
          }
          var e = null, e = function(b) {
            switch(arguments.length) {
              case 0:
                return d.call(this);
              case 1:
                return c.call(this, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          e.l = d;
          e.b = c;
          return e;
        }();
      }(function(g) {
        var l = g[1];
        if (32 === l) {
          var n = g[7], F = g[8], M = g[9], Y = g[10], na = g[2], za = Y, Na = M, cb = F, G;
          g[7] = n + 1;
          g[8] = cb;
          g[9] = Na;
          g[10] = za;
          g[11] = na;
          var Pc = G = g;
          Pc[2] = null;
          Pc[1] = 25;
          return $;
        }
        if (1 === l) {
          var ri = G = g;
          ri[2] = null;
          ri[1] = 2;
          return $;
        }
        if (33 === l) {
          var Ib = g[12], Qk = qc(Ib);
          G = g;
          G[1] = Qk ? 36 : 37;
          return $;
        }
        if (2 === l) {
          return G = g, uj(G, 4, b);
        }
        if (34 === l) {
          var si = G = g;
          si[2] = null;
          si[1] = 35;
          return $;
        }
        if (3 === l) {
          var Rk = g[2];
          G = g;
          return wj(G, Rk);
        }
        if (35 === l) {
          var Sk = g[2], ti = G = g;
          ti[2] = Sk;
          ti[1] = 29;
          return $;
        }
        if (4 === l) {
          var Ge = g[13], ui = g[2], Tk = null == ui;
          g[13] = ui;
          G = g;
          G[1] = r(Tk) ? 5 : 6;
          return $;
        }
        if (36 === l) {
          var Ib = g[12], vi = Bb(Ib), Uk = Cb(Ib), Vk = N(vi), Y = Uk, M = vi, F = Vk, n = 0;
          g[7] = n;
          g[8] = F;
          g[9] = M;
          g[10] = Y;
          var wi = G = g;
          wi[2] = null;
          wi[1] = 25;
          return $;
        }
        if (5 === l) {
          var Wk = y(c), Jb = D(Wk), Kb = null, Lb = 0, ib = 0;
          g[14] = Kb;
          g[15] = Jb;
          g[16] = ib;
          g[17] = Lb;
          var xi = G = g;
          xi[2] = null;
          xi[1] = 8;
          return $;
        }
        if (37 === l) {
          var Ge = g[13], yi = g[18], Ib = g[12], zi = E(Ib), Xk = Jj.c(zi, Ge, h);
          g[18] = zi;
          G = g;
          G[1] = r(Xk) ? 39 : 40;
          return $;
        }
        if (6 === l) {
          var Ai = g[19], Yk = y(c), jg = ve(Yk), Zk = N(jg), $k = Qe(f, Zk), Y = D(jg), M = null, n = F = 0;
          g[7] = n;
          g[19] = jg;
          g[8] = F;
          g[9] = M;
          g[20] = $k;
          g[10] = Y;
          var Bi = G = g;
          Bi[2] = null;
          Bi[1] = 25;
          return $;
        }
        if (38 === l) {
          var al = g[2], Ci = G = g;
          Ci[2] = al;
          Ci[1] = 35;
          return $;
        }
        if (7 === l) {
          var bl = g[2], Di = G = g;
          Di[2] = bl;
          Di[1] = 3;
          return $;
        }
        if (39 === l) {
          var Ei = G = g;
          Ei[2] = null;
          Ei[1] = 41;
          return $;
        }
        if (8 === l) {
          var ib = g[16], Lb = g[17], cl = ib < Lb;
          G = g;
          G[1] = r(cl) ? 10 : 11;
          return $;
        }
        if (40 === l) {
          var yi = g[18], dl = Re.a(f, Ec), el = d.nb(null, yi);
          g[21] = dl;
          var Fi = G = g;
          Fi[2] = el;
          Fi[1] = 41;
          return $;
        }
        if (9 === l) {
          var fl = g[2], Gi = G = g;
          Gi[2] = fl;
          Gi[1] = 7;
          return $;
        }
        if (41 === l) {
          var Ib = g[12], gl = g[2], Y = I(Ib), M = null, n = F = 0;
          g[7] = n;
          g[8] = F;
          g[9] = M;
          g[10] = Y;
          g[22] = gl;
          var Hi = G = g;
          Hi[2] = null;
          Hi[1] = 25;
          return $;
        }
        if (10 === l) {
          var Kb = g[14], ib = g[16], Ii = x.a(Kb, ib), kg = O.c(Ii, 0, null), hl = O.c(Ii, 1, null);
          g[23] = kg;
          G = g;
          G[1] = r(hl) ? 13 : 14;
          return $;
        }
        if (42 === l) {
          return G = g, uj(G, 45, e);
        }
        if (11 === l) {
          var Mb = g[24], Jb = g[15], Ji = D(Jb);
          g[24] = Ji;
          G = g;
          G[1] = Ji ? 16 : 17;
          return $;
        }
        if (43 === l) {
          var Ki = G = g;
          Ki[2] = null;
          Ki[1] = 44;
          return $;
        }
        if (12 === l) {
          var il = g[2], Li = G = g;
          Li[2] = il;
          Li[1] = 9;
          return $;
        }
        if (44 === l) {
          g[25] = g[2];
          var Mi = G = g;
          Mi[2] = null;
          Mi[1] = 2;
          return $;
        }
        if (13 === l) {
          var kg = g[23], jl = Kh(kg), Ni = G = g;
          Ni[2] = jl;
          Ni[1] = 15;
          return $;
        }
        if (45 === l) {
          var kl = g[2], Oi = G = g;
          Oi[2] = kl;
          Oi[1] = 44;
          return $;
        }
        if (14 === l) {
          var Pi = G = g;
          Pi[2] = null;
          Pi[1] = 15;
          return $;
        }
        if (15 === l) {
          var Kb = g[14], Jb = g[15], ib = g[16], Lb = g[17], ll = g[2], ml = Jb, nl = Lb, ol = ib + 1;
          g[14] = Kb;
          g[15] = ml;
          g[16] = ol;
          g[17] = nl;
          g[26] = ll;
          var Qi = G = g;
          Qi[2] = null;
          Qi[1] = 8;
          return $;
        }
        if (16 === l) {
          var Mb = g[24], pl = qc(Mb);
          G = g;
          G[1] = pl ? 19 : 20;
          return $;
        }
        if (17 === l) {
          var Ri = G = g;
          Ri[2] = null;
          Ri[1] = 18;
          return $;
        }
        if (18 === l) {
          var ql = g[2], Si = G = g;
          Si[2] = ql;
          Si[1] = 12;
          return $;
        }
        if (19 === l) {
          var Mb = g[24], Ti = Bb(Mb), rl = Cb(Mb), sl = N(Ti), Jb = rl, Kb = Ti, Lb = sl, ib = 0;
          g[14] = Kb;
          g[15] = Jb;
          g[16] = ib;
          g[17] = Lb;
          var Ui = G = g;
          Ui[2] = null;
          Ui[1] = 8;
          return $;
        }
        if (20 === l) {
          var Mb = g[24], Vi = E(Mb), lg = O.c(Vi, 0, null), tl = O.c(Vi, 1, null);
          g[27] = lg;
          G = g;
          G[1] = r(tl) ? 22 : 23;
          return $;
        }
        if (21 === l) {
          var ul = g[2], Wi = G = g;
          Wi[2] = ul;
          Wi[1] = 18;
          return $;
        }
        if (22 === l) {
          var lg = g[27], vl = Kh(lg), Xi = G = g;
          Xi[2] = vl;
          Xi[1] = 24;
          return $;
        }
        if (23 === l) {
          var Yi = G = g;
          Yi[2] = null;
          Yi[1] = 24;
          return $;
        }
        if (24 === l) {
          var Mb = g[24], wl = g[2], Jb = I(Mb), Kb = null, ib = Lb = 0;
          g[14] = Kb;
          g[15] = Jb;
          g[16] = ib;
          g[17] = Lb;
          g[28] = wl;
          var Zi = G = g;
          Zi[2] = null;
          Zi[1] = 8;
          return $;
        }
        if (25 === l) {
          var n = g[7], F = g[8], xl = n < F;
          G = g;
          G[1] = r(xl) ? 27 : 28;
          return $;
        }
        if (26 === l) {
          var Ai = g[19], yl = g[2], zl = D(Ai);
          g[29] = yl;
          G = g;
          G[1] = zl ? 42 : 43;
          return $;
        }
        if (27 === l) {
          var Ge = g[13], n = g[7], $i = g[30], M = g[9], aj = x.a(M, n), Al = Jj.c(aj, Ge, h);
          g[30] = aj;
          G = g;
          G[1] = r(Al) ? 30 : 31;
          return $;
        }
        if (28 === l) {
          var Y = g[10], Ib = g[12], bj = D(Y);
          g[12] = bj;
          G = g;
          G[1] = bj ? 33 : 34;
          return $;
        }
        if (29 === l) {
          var Bl = g[2], cj = G = g;
          cj[2] = Bl;
          cj[1] = 26;
          return $;
        }
        if (30 === l) {
          var dj = G = g;
          dj[2] = null;
          dj[1] = 32;
          return $;
        }
        if (31 === l) {
          var $i = g[30], Cl = Re.a(f, Ec), Dl = d.nb(null, $i);
          g[31] = Cl;
          var ej = G = g;
          ej[2] = Dl;
          ej[1] = 32;
          return $;
        }
        return null;
      });
    }(), n = function() {
      var b = l.l ? l.l() : l.call(null);
      b[6] = g;
      return b;
    }();
    return tj(n);
  });
  return d;
}, Pj = function() {
  function a(a, b, c) {
    Lj(a, b, c);
    return b;
  }
  function b(a, b) {
    return c.c(a, b, !0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Qj(a, b, c, d) {
  if (a ? a.qc : a) {
    return a.qc(a, b, c, d);
  }
  var e;
  e = Qj[m(null == a ? null : a)];
  if (!e && (e = Qj._, !e)) {
    throw u("Pub.sub*", a);
  }
  return e.call(null, a, b, c, d);
}
function Rj(a, b, c) {
  if (a ? a.rc : a) {
    return a.rc(a, b, c);
  }
  var d;
  d = Rj[m(null == a ? null : a)];
  if (!d && (d = Rj._, !d)) {
    throw u("Pub.unsub*", a);
  }
  return d.call(null, a, b, c);
}
var Sj = function() {
  function a(a, b, f) {
    var h = Pe.b(W), g = function(a) {
      return function(b) {
        var c = P.a(y(a), b);
        return r(c) ? c : P.a(Re.a(a, function() {
          return function(a) {
            return r(a.b ? a.b(b) : a.call(null, b)) ? a : Q.c(a, b, Oj(Hj.b(f.b ? f.b(b) : f.call(null, b))));
          };
        }(c, a)), b);
      };
    }(h), l = function() {
      "undefined" === typeof Ih && (Ih = function(a, b, c, d, e, g, f) {
        this.ub = a;
        this.wc = b;
        this.Fc = c;
        this.fd = d;
        this.ch = e;
        this.dd = g;
        this.Xc = f;
        this.o = 0;
        this.f = 393216;
      }, Ih.va = !0, Ih.ua = "cljs.core.async/t12375", Ih.Ba = function() {
        return function(a, b) {
          return A(b, "cljs.core.async/t12375");
        };
      }(h, g), Ih.prototype.qc = function() {
        return function(a, b, c, d) {
          a = this.ub.b ? this.ub.b(b) : this.ub.call(null, b);
          return Pj.c(a, c, d);
        };
      }(h, g), Ih.prototype.rc = function() {
        return function(a, b, c) {
          a = P.a(y(this.wc), b);
          return r(a) ? Mj(a, c) : null;
        };
      }(h, g), Ih.prototype.cc = function() {
        return function() {
          return this.ch;
        };
      }(h, g), Ih.prototype.w = function() {
        return function() {
          return this.Xc;
        };
      }(h, g), Ih.prototype.B = function() {
        return function(a, b) {
          return new Ih(this.ub, this.wc, this.Fc, this.fd, this.ch, this.dd, b);
        };
      }(h, g));
      return new Ih(g, h, f, b, a, c, null);
    }(), n = Hj.b(1);
    $h(function() {
      var c = function() {
        return function(a) {
          return function() {
            function b(c) {
              for (;;) {
                var d = function() {
                  try {
                    for (;;) {
                      var b = a(c);
                      if (!Rc(b, $)) {
                        return b;
                      }
                    }
                  } catch (d) {
                    if (d instanceof Object) {
                      return c[5] = d, xj(c), $;
                    }
                    if (t) {
                      throw d;
                    }
                    return null;
                  }
                }();
                if (!Rc(d, $)) {
                  return d;
                }
              }
            }
            function c() {
              var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
              a[0] = d;
              a[1] = 1;
              return a;
            }
            var d = null, d = function(a) {
              switch(arguments.length) {
                case 0:
                  return c.call(this);
                case 1:
                  return b.call(this, a);
              }
              throw Error("Invalid arity: " + arguments.length);
            };
            d.l = c;
            d.b = b;
            return d;
          }();
        }(function(c) {
          var g = c[1];
          if (1 === g) {
            return c[2] = null, c[1] = 2, $;
          }
          if (2 === g) {
            return uj(c, 4, a);
          }
          if (3 === g) {
            return g = c[2], wj(c, g);
          }
          if (4 === g) {
            return g = c[7], g = c[2], c[7] = g, c[1] = r(null == g) ? 5 : 6, $;
          }
          if (5 === g) {
            var g = y(h), g = xe(g), g = D(g), f, l, n;
            c[8] = null;
            c[9] = g;
            c[10] = 0;
            c[11] = 0;
            c[2] = null;
            c[1] = 8;
            return $;
          }
          if (6 === g) {
            return g = c[7], f = c[12], f = c[13], g = b.b ? b.b(g) : b.call(null, g), f = y(h), f = P.a(f, g), c[12] = f, c[13] = g, c[1] = r(f) ? 19 : 20, $;
          }
          if (7 === g) {
            return g = c[2], c[2] = g, c[1] = 3, $;
          }
          if (8 === g) {
            return n = c[10], l = c[11], c[1] = r(n < l) ? 10 : 11, $;
          }
          if (9 === g) {
            return g = c[2], c[2] = g, c[1] = 7, $;
          }
          if (10 === g) {
            f = c[8];
            g = c[9];
            n = c[10];
            l = c[11];
            var q = x.a(f, n), q = Kj(q), q = Kh(q);
            c[8] = f;
            c[9] = g;
            c[10] = n + 1;
            c[11] = l;
            c[14] = q;
            c[2] = null;
            c[1] = 8;
            return $;
          }
          return 11 === g ? (g = c[9], f = c[15], g = D(g), c[15] = g, c[1] = g ? 13 : 14, $) : 12 === g ? (g = c[2], c[2] = g, c[1] = 9, $) : 13 === g ? (f = c[15], g = qc(f), c[1] = g ? 16 : 17, $) : 14 === g ? (c[2] = null, c[1] = 15, $) : 15 === g ? (g = c[2], c[2] = g, c[1] = 12, $) : 16 === g ? (f = c[15], g = Bb(f), f = Cb(f), l = N(g), c[8] = g, c[9] = f, c[10] = 0, c[11] = l, c[2] = null, c[1] = 8, $) : 17 === g ? (f = c[15], g = E(f), g = Kj(g), l = Kh(g), g = I(f), c[8] = null, c[9] = 
          g, c[10] = 0, c[16] = l, c[11] = 0, c[2] = null, c[1] = 8, $) : 18 === g ? (g = c[2], c[2] = g, c[1] = 15, $) : 19 === g ? (g = c[7], f = c[12], f = Kj(f), vj(c, f, g)) : 20 === g ? (c[2] = null, c[1] = 21, $) : 21 === g ? (c[17] = c[2], c[2] = null, c[1] = 2, $) : 22 === g ? (g = c[2], c[1] = r(g) ? 23 : 24, $) : 23 === g ? (c[2] = null, c[1] = 25, $) : 24 === g ? (f = c[13], g = Re.c(h, fc, f), c[2] = g, c[1] = 25, $) : 25 === g ? (g = c[2], c[2] = g, c[1] = 21, $) : null;
        });
      }(), g = function() {
        var a = c.l ? c.l() : c.call(null);
        a[6] = n;
        return a;
      }();
      return tj(g);
    });
    return l;
  }
  function b(a, b) {
    return c.c(a, b, nd());
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Tj = function() {
  function a(a, d, e) {
    return b.i(a, d, e, !0);
  }
  var b = null, b = function(b, d, e, f) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, d, e);
      case 4:
        return Qj(b, d, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.c = a;
  b.i = function(a, b, e, f) {
    return Qj(a, b, e, f);
  };
  return b;
}();
function Uj(a) {
  return a.toUpperCase();
}
function Vj(a, b) {
  if (0 >= b || b >= 2 + N(a)) {
    return cc.a(Ld(L("", pd.a(w, D(a)))), "");
  }
  if (r(B.a ? B.a(1, b) : B.call(null, 1, b))) {
    return new U(null, 1, 5, V, [a], null);
  }
  if (r(B.a ? B.a(2, b) : B.call(null, 2, b))) {
    return new U(null, 2, 5, V, ["", a], null);
  }
  var c = b - 2;
  return cc.a(Ld(L("", Od.c(Ld(pd.a(w, D(a))), 0, c))), Ic.a(a, c));
}
var Wj = function() {
  function a(a, b, c) {
    if (B.a("" + w(b), "/(?:)/")) {
      b = Vj(a, c);
    } else {
      if (1 > c) {
        b = Ld(("" + w(a)).split(b));
      } else {
        a: {
          for (var h = c, g = Jd;;) {
            if (B.a(h, 1)) {
              b = cc.a(g, a);
              break a;
            }
            var l;
            l = b.exec(a);
            l = null == l ? null : 1 === N(l) ? E(l) : Ld(l);
            if (r(l)) {
              var n = l;
              l = a.indexOf(n);
              n = a.substring(l + N(n));
              h -= 1;
              g = cc.a(g, a.substring(0, l));
              a = n;
            } else {
              b = cc.a(g, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (B.a(0, c)) {
      a: {
        for (c = b;;) {
          if (B.a("", null == c ? null : Za(c))) {
            c = null == c ? null : $a(c);
          } else {
            break a;
          }
        }
        c = void 0;
      }
    } else {
      c = b;
    }
    return c;
  }
  function b(a, b) {
    return c.c(a, b, 0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
var Xj = React;
(function() {
});
var Yj = null != function() {
  try {
    return window.document;
  } catch (a) {
    if (a instanceof Object) {
      return null;
    }
    if (t) {
      throw a;
    }
    return null;
  }
}();
function Zj(a) {
  var b = Pe.b(W);
  return function(c) {
    var d = P.a(y(b), c);
    if (null != d) {
      return d;
    }
    d = a.b ? a.b(c) : a.call(null, c);
    Re.i(b, Q, c, d);
    return d;
  };
}
var ak = new ze(null, new p(null, 2, ["aria", null, "data", null], null), null);
function bk(a) {
  return 2 > N(a) ? Uj(a) : [w(Uj(Ic.c(a, 0, 1))), w(Ic.a(a, 1))].join("");
}
function ck(a) {
  if ("string" === typeof a) {
    return a;
  }
  a = Sc(a);
  var b = Wj.a(a, /-/), c = O.c(b, 0, null), b = Hc(b);
  return r(ak.b ? ak.b(c) : ak.call(null, c)) ? a : R.c(w, c, pd.a(bk, b));
}
function dk(a, b, c) {
  this.L = a;
  this.La = b;
  this.Ia = c;
  this.o = 0;
  this.f = 6291457;
}
k = dk.prototype;
k.u = function() {
  return Pb(new U(null, 2, 5, V, [this.L, this.La], null));
};
k.t = function(a, b) {
  return B.a(this.L, b.L) && B.a(this.La, b.La);
};
k.call = function() {
  function a(a, d) {
    a = this;
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    r(a.Ia) || (a.Ia = R.c(od, a.L, a.La));
    return R.a(a.Ia, b);
  }
  a.k = 1;
  a.h = function(a) {
    var d = E(a);
    a = H(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ya(b)));
};
k.a = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    r(self__.Ia) || (self__.Ia = R.c(od, self__.L, self__.La));
    return R.a(self__.Ia, a);
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ek(a) {
  var b = vc(a);
  return b ? b : a ? a.o & 256 || a.pd ? !0 : a.o ? !1 : s(nf, a) : s(nf, a);
}
var fk = {};
function gk(a, b) {
  return Rc(a, b) || (a instanceof C || wa(a) === dk) && B.a(a, b);
}
var ik = function hk(b, c) {
  var d = b === c;
  if (d) {
    return d;
  }
  if (d = oc(b)) {
    if (d = oc(c)) {
      return(d = N(b) === N(c)) ? Dc(function(b, d, h) {
        var g = P.c(c, d, fk);
        return r(function() {
          var b = h === g;
          return b || (b = gk(h, g)) ? b : (b = Rc(d, fg)) ? hk(h, g) : b;
        }()) ? b : new Ub(!1);
      }, !0, b) : d;
    }
  }
  return d;
};
function jk(a, b) {
  if (!pc(a)) {
    throw Error([w("Assert failed: "), w(Ke.e(J([Oc(new C(null, "vector?", "vector?", -1302740715, null), new C(null, "v1", "v1", -1640527820, null))], 0)))].join(""));
  }
  if (!pc(b)) {
    throw Error([w("Assert failed: "), w(Ke.e(J([Oc(new C(null, "vector?", "vector?", -1302740715, null), new C(null, "v2", "v2", -1640527819, null))], 0)))].join(""));
  }
  var c = a === b;
  return c ? c : (c = N(a) === N(b)) ? Dc(function(a, c, f) {
    var h = O.a(b, c);
    return r(function() {
      var a = f === h;
      return a || (a = gk(f, h)) ? a : (a = oc(f)) ? ik(f, h) : a;
    }()) ? a : new Ub(!1);
  }, !0, a) : c;
}
;function kk(a) {
  return setTimeout(a, 16);
}
var lk = va(Yj) ? kk : function() {
  var a = window, b = a.requestAnimationFrame;
  if (r(b)) {
    return b;
  }
  b = a.webkitRequestAnimationFrame;
  if (r(b)) {
    return b;
  }
  b = a.mozRequestAnimationFrame;
  if (r(b)) {
    return b;
  }
  a = a.msRequestAnimationFrame;
  return r(a) ? a : kk;
}();
function mk(a, b) {
  return a.props.cljsLevel - b.props.cljsLevel;
}
function nk() {
  var a = ok;
  if (r(a.ic)) {
    return null;
  }
  a.ic = !0;
  return lk.b ? lk.b(function() {
    return pk(a);
  }) : lk.call(null, function() {
    return pk(a);
  });
}
function pk(a) {
  var b = a.gc;
  a.gc = [];
  a.ic = !1;
  a: {
    b.sort(mk);
    a = b.length;
    for (var c = 0;;) {
      if (c < a) {
        var d = b[c];
        r(d.rb) && d.forceUpdate();
        c += 1;
      } else {
        b = null;
        break a;
      }
    }
    b = void 0;
  }
  return b;
}
var ok = new function() {
  this.gc = [];
  this.ic = !1;
};
function qk(a) {
  a.rb = !0;
  ok.gc.push(a);
  return nk();
}
function rk(a) {
  var b = null != a;
  return b ? (b = a.props, r(b) ? a.props.cljsArgv : b) : b;
}
function sk(a, b) {
  if (!r(rk(a))) {
    throw Error([w("Assert failed: "), w(Ke.e(J([Oc(new C(null, "is-reagent-component", "is-reagent-component", -461933192, null), new C(null, "C", "C", -1640531460, null))], 0)))].join(""));
  }
  a.rb = !1;
  var c = a.uc;
  if (null == c) {
    var c = ci(b, a), d = di(a);
    null != d && (a.uc = ni.e(b, J([yg, function() {
      return qk(a);
    }, Kf, d], 0)));
    return c;
  }
  return ii(c);
}
function tk(a) {
  var b = a.uc;
  null != b && hi(b);
  return a.rb = !1;
}
;var uk;
function vk(a) {
  var b = a.cljsState;
  return null != b ? b : a.cljsState = gi.b(null);
}
var xk = function wk(b) {
  var c = uk;
  try {
    uk = b;
    var d = b.cljsRender;
    if (!ek(d)) {
      throw Error([w("Assert failed: "), w(Ke.e(J([Oc(new C("util", "clj-ifn?", "util/clj-ifn?", -520791343, null), new C(null, "f", "f", -1640531425, null))], 0)))].join(""));
    }
    var e = b.props, f;
    if (null == b.componentFunction) {
      f = d.b ? d.b(b) : d.call(null, b);
    } else {
      var h = e.cljsArgv, g = N(h);
      f = B.a(5, g) ? d.i ? d.i(O.a(h, 1), O.a(h, 2), O.a(h, 3), O.a(h, 4)) : d.call(null, O.a(h, 1), O.a(h, 2), O.a(h, 3), O.a(h, 4)) : B.a(4, g) ? d.c ? d.c(O.a(h, 1), O.a(h, 2), O.a(h, 3)) : d.call(null, O.a(h, 1), O.a(h, 2), O.a(h, 3)) : B.a(3, g) ? d.a ? d.a(O.a(h, 1), O.a(h, 2)) : d.call(null, O.a(h, 1), O.a(h, 2)) : B.a(2, g) ? d.b ? d.b(O.a(h, 1)) : d.call(null, O.a(h, 1)) : B.a(1, g) ? d.l ? d.l() : d.call(null) : t ? R.a(d, Od.a(h, 1)) : null;
    }
    d = f;
    return pc(d) ? b.Dc(d, e.cljsLevel) : vc(d) ? (b.cljsRender = d, wk(b)) : d;
  } finally {
    uk = c;
  }
};
function yk(a, b) {
  if (B.a(eg, a)) {
    return function() {
      tk(this);
      return null == b ? null : b.b ? b.b(this) : b.call(null, this);
    };
  }
  if (B.a(wf, a) || B.a(tf, a)) {
    return function(a) {
      a = a.cljsArgv;
      return b.a ? b.a(this, a) : b.call(null, this, a);
    };
  }
  if (B.a(ah, a)) {
    return function(a) {
      var d = this.props.cljsArgv;
      a = a.cljsArgv;
      return null == b ? va(jk(d, a)) : b.c ? b.c(this, d, a) : b.call(null, this, d, a);
    };
  }
  if (B.a(If, a)) {
    return function(a) {
      return b.a ? b.a(this, a.cljsArgv) : b.call(null, this, a.cljsArgv);
    };
  }
  if (B.a(Og, a)) {
    return function() {
      var a = b.b ? b.b(this) : b.call(null, this);
      return Re.c(vk(this), ye, a);
    };
  }
  if (B.a(sf, a)) {
    throw Error([w("Assert failed: "), w("getDefaultProps not supported yet"), w("\n"), w(Ke.e(J([!1], 0)))].join(""));
  }
  return null;
}
function zk(a) {
  return vc(a) ? function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return R.c(a, this, b);
    }
    b.k = 0;
    b.h = function(a) {
      a = D(a);
      return c(a);
    };
    b.e = c;
    return b;
  }() : a;
}
var Ak = new ze(null, new p(null, 3, [xf, null, Cf, null, Ug, null], null), null);
function Bk(a) {
  vc(a) && (a.__reactDontBind = !0);
  return a;
}
function Ck(a, b, c) {
  if (r(Ak.b ? Ak.b(a) : Ak.call(null, a))) {
    return Bk(b);
  }
  var d = yk(a, b);
  if (r(r(d) ? b : d) && !vc(b)) {
    throw Error([w("Assert failed: "), w([w("Expected function in "), w(c), w(a), w(" but got "), w(b)].join("")), w("\n"), w(Ke.e(J([Oc(new C(null, "ifn?", "ifn?", -1637301977, null), new C(null, "f", "f", -1640531425, null))], 0)))].join(""));
  }
  return r(d) ? d : zk(b);
}
var Dk = new p(null, 2, [ah, null, eg, null], null), Ek = Zj(ck);
function Fk(a) {
  return Dc(function(a, c, d) {
    return Q.c(a, Tc.b(Ek.b ? Ek.b(c) : Ek.call(null, c)), d);
  }, W, a);
}
function Gk(a) {
  return ye.e(J([Dk, a], 0));
}
function Hk(a, b) {
  return Q.e(a, Cf, b, J([xf, r(Yj) ? function() {
    var a = this;
    return sk(a, function() {
      return xk(a);
    });
  } : function() {
    return xk(this);
  }], 0));
}
function Ik(a) {
  var b = function() {
    var b = Ug.b(a);
    return r(b) ? b : xf.b(a);
  }();
  if (!ek(b)) {
    throw Error([w("Assert failed: "), w([w("Render must be a function, not "), w(Ke.e(J([b], 0)))].join("")), w("\n"), w(Ke.e(J([Oc(new C("util", "clj-ifn?", "util/clj-ifn?", -520791343, null), new C(null, "render-fun", "render-fun", -447610239, null))], 0)))].join(""));
  }
  var c = function() {
    var c = xg.b(a);
    if (r(c)) {
      return c;
    }
    c = b.vd;
    return r(c) ? c : b.name;
  }(), d = mc(c) ? "" + w(Te.b("reagent")) : c, c = Hk(Q.c(a, xg, d), b);
  return Dc(function(a, b, c) {
    return Q.c(a, b, Ck(b, c, d));
  }, W, c);
}
function Jk(a) {
  return Dc(function(a, c, d) {
    a[Sc(c)] = d;
    return a;
  }, {}, a);
}
function Kk(a) {
  var b = Lk;
  if (!oc(a)) {
    throw Error([w("Assert failed: "), w(Ke.e(J([Oc(new C(null, "map?", "map?", -1637187556, null), new C(null, "body", "body", -1637502117, null))], 0)))].join(""));
  }
  var c = Jk(Ik(Gk(Fk(a)))), d = c.Dc = Bk(b);
  a = Xj.createClass(c);
  c = function(a, c, d) {
    return function() {
      function a(b) {
        var d = null;
        0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, d);
      }
      function c(a) {
        return b.b ? b.b(R.c(Md, d, a)) : b.call(null, R.c(Md, d, a));
      }
      a.k = 0;
      a.h = function(a) {
        a = D(a);
        return c(a);
      };
      a.e = c;
      return a;
    }();
  }(c, d, a);
  c.Ua = a;
  a.Ua = a;
  return c;
}
;var Mk = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, Nk = Xj.DOM, Ok = new p(null, 3, [Pf, "className", Qg, "htmlFor", Kg, "charSet"], null);
function Pk(a) {
  return a instanceof T || a instanceof C || "string" === typeof a;
}
function El(a) {
  return vc(a) ? a instanceof T ? Sc(a) : a instanceof C ? "" + w(a) : nc(a) ? Xe(a) : t ? function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return R.a(a, b);
    }
    b.k = 0;
    b.h = function(a) {
      a = D(a);
      return c(a);
    };
    b.e = c;
    return b;
  }() : null : a;
}
var Fl = Zj(function(a) {
  var b = Ok.b ? Ok.b(a) : Ok.call(null, a);
  return r(b) ? b : ck(a);
});
Zj(ck);
function Gl(a) {
  return oc(a) ? Dc(function(a, c, d) {
    a[Fl.b ? Fl.b(c) : Fl.call(null, c)] = El(d);
    return a;
  }, {}, a) : El(a);
}
function Hl(a, b) {
  var c = O.c(b, 0, null), d = O.c(b, 1, null), e = a.id;
  a.id = null != e ? e : c;
  null != d && (c = a.className, d = null != c ? [w(d), w(" "), w(c)].join("") : d, a.className = d);
}
function Il(a, b) {
  if (mc(a) && null == b) {
    return null;
  }
  if (wa(a) === Object) {
    return a;
  }
  if (t) {
    var c = Dc(function(a, b, c) {
      b = Fl.b ? Fl.b(b) : Fl.call(null, b);
      "key" !== b && (a[b] = Gl(c));
      return a;
    }, {}, a);
    null != b && Hl(c, b);
    return c;
  }
  return null;
}
function Jl(a, b) {
  var c = b.onChange, d = null == c ? null : b.value;
  a.Rc = d;
  if (null == d) {
    return null;
  }
  a.rb = !1;
  b.defaultValue = d;
  b.value = null;
  b.onChange = function(b) {
    b = c.b ? c.b(b) : c.call(null, b);
    qk(a);
    return b;
  };
  return b;
}
var Kl;
a: {
  var Ll = [Nk.input, Nk.textarea], Ml = Ll.length;
  if (Ml <= Zd) {
    for (var Nl = 0, Ol = vb(W);;) {
      if (Nl < Ml) {
        var Pl = Nl + 1, Ql = yb(Ol, Ll[Nl], null), Nl = Pl, Ol = Ql
      } else {
        Kl = new ze(null, xb(Ol), null);
        break a;
      }
    }
  } else {
    for (Nl = 0, Ol = vb(Be);;) {
      if (Nl < Ml) {
        var Rl = Nl + 1, Sl = wb(Ol, Ll[Nl]), Nl = Rl, Ol = Sl
      } else {
        Kl = xb(Ol);
        break a;
      }
    }
  }
  Kl = void 0;
}
function Tl(a) {
  a.componentDidUpdate = function() {
    var a;
    a = this.Rc;
    if (null == a) {
      a = null;
    } else {
      var c = this.getDOMNode();
      a = jd.a(a, c.value) ? c.value = a : null;
    }
    return a;
  };
  a.componentWillUnmount = function() {
    return tk(this);
  };
}
function Ul(a, b, c) {
  var d = Kl.b ? Kl.b(a) : Kl.call(null, a), e = r(d) ? Jl : null;
  c = {displayName:r(c) ? c : "ComponentWrapper", shouldComponentUpdate:function() {
    return function(a) {
      return va(jk(this.props.cljsArgv, a.cljsArgv));
    };
  }(d, e), render:function(c, d) {
    return function() {
      var c = this.props, e = c.cljsArgv, f = O.c(e, 1, null), q = null == f || oc(f), c = Vl.c ? Vl.c(e, q ? 2 : 1, c.cljsLevel + 1) : Vl.call(null, e, q ? 2 : 1, c.cljsLevel + 1), f = Il(q ? f : null, b);
      null != d && (d.a ? d.a(this, f) : d.call(null, this, f));
      c[0] = f;
      return a.apply(null, c);
    };
  }(d, e)};
  r(d) && Tl(c);
  return Xj.createClass(c);
}
var Wl = Zj(function(a) {
  var b, c;
  c = Sc(a);
  b = Mk.exec(c);
  c = B.a(E(b), c) ? 1 === N(b) ? E(b) : Ld(b) : null;
  var d = I(c);
  b = O.c(d, 0, null);
  c = O.c(d, 1, null);
  d = O.c(d, 2, null);
  b = Nk[b];
  if (r(d)) {
    var e = /\./;
    if ("string" === typeof e) {
      d = d.replace(RegExp(String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), " ");
    } else {
      if (r(e.hasOwnProperty("source"))) {
        d = d.replace(RegExp(e.source, "g"), " ");
      } else {
        if (t) {
          throw[w("Invalid match arg: "), w(e)].join("");
        }
        d = null;
      }
    }
  } else {
    d = null;
  }
  if (!r(b)) {
    throw Error([w("Assert failed: "), w([w("Unknown tag: '"), w(a), w("'")].join("")), w("\n"), w(Ke.e(J([new C(null, "comp", "comp", -1637472056, null)], 0)))].join(""));
  }
  b = new U(null, 2, 5, V, [b, r(r(c) ? c : d) ? new U(null, 2, 5, V, [c, d], null) : null], null);
  c = O.c(b, 0, null);
  b = O.c(b, 1, null);
  return Ul(c, b, "" + w(a));
});
function Xl(a) {
  return oc(a) ? P.a(a, Of) : null;
}
function Yl(a, b) {
  if (!(0 < N(a))) {
    throw Error([w("Assert failed: "), w("Hiccup form should not be empty"), w("\n"), w(Ke.e(J([Oc(new C(null, "pos?", "pos?", -1637084636, null), Oc(new C(null, "count", "count", -1545680184, null), new C(null, "v", "v", -1640531409, null)))], 0)))].join(""));
  }
  var c = O.a(a, 0);
  if (!Pk(c) && !ek(c)) {
    throw Error([w("Assert failed: "), w([w("Invalid Hiccup form: "), w(Ke.e(J([a], 0)))].join("")), w("\n"), w(Ke.e(J([Oc(new C(null, "valid-tag?", "valid-tag?", -1732125489, null), Oc(new C(null, "nth", "nth", -1640422117, null), new C(null, "v", "v", -1640531409, null), 0))], 0)))].join(""));
  }
  c = O.a(a, 0);
  if (Pk(c)) {
    c = Wl.b ? Wl.b(c) : Wl.call(null, c);
  } else {
    var d = c.Ua;
    null != d ? c = d : r(Xj.isValidClass(c)) ? c = c.Ua = Ul(c, null, null) : (d = jc(c), d = Q.c(d, Df, c), d = (Zl.b ? Zl.b(d) : Zl.call(null, d)).Ua, c = c.Ua = d);
  }
  d = {};
  d.cljsArgv = a;
  d.cljsLevel = b;
  var e = Xl(jc(a)), e = null == e ? Xl(O.c(a, 1, null)) : e;
  null != e && (d.key = e);
  return c.b ? c.b(d) : c.call(null, d);
}
var $l = {}, Lk = function() {
  function a(a, b) {
    if (pc(a)) {
      return Yl(a, b);
    }
    if (S(a)) {
      if (null != ai) {
        return am.a ? am.a(a, b) : am.call(null, a, b);
      }
      var c = ci(function() {
        return am.a ? am.a(a, b) : am.call(null, a, b);
      }, $l);
      r(di($l)) && (r($l.gd) || (null != console.log && console.log("Warning: Reactive deref not supported in seq in ", Ke.e(J([a], 0))), $l.gd = !0));
      return c;
    }
    return a;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Zl(a) {
  return Kk(a);
}
function am(a, b) {
  for (var c = Ba.b(a), d = b + 1, e = c.length, f = 0;;) {
    if (f < e) {
      c[f] = Lk.a(c[f], d), f += 1;
    } else {
      break;
    }
  }
  return c;
}
function Vl(a, b, c) {
  a = Ba.b(a);
  for (var d = a.length, e = 0;;) {
    if (e < d) {
      e >= b && (a[e] = Lk.a(a[e], c)), e += 1;
    } else {
      break;
    }
  }
  2 === b && a.shift();
  return a;
}
;var bm = function() {
  function a(a, b, c) {
    return Xj.renderComponent(Lk.b(a), b, c);
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), cm = function() {
  function a(a) {
    return gi.b(a);
  }
  var b = null, c = function() {
    function a(c, d) {
      var g = null;
      1 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, g);
    }
    function b(a, c) {
      return R.c(gi, a, c);
    }
    a.k = 1;
    a.h = function(a) {
      var c = E(a);
      a = H(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
var Z = function() {
  var a = Pe.b(W), b = Pe.b(W), c = Pe.b(W), d = Pe.b(W), e = P.c(W, cg, af());
  return new qf("resolve", function(a, b) {
    var c = Cg.b(b);
    return r(c) ? c : uf;
  }, Nb, e, a, b, c, d);
}();
rf(Z, uf, function(a, b) {
  return Z.a ? Z.a(a, P.a(a, b)) : Z.call(null, a, P.a(a, b));
});
rf(Z, Mf, function(a, b) {
  return b;
});
rf(Z, Rg, function(a, b) {
  var c = S(b) ? R.a(X, b) : b, d = P.a(c, ag), e = O.c(d, 0, null), d = O.c(d, 1, null), e = Z.a ? Z.a(a, e) : Z.call(null, a, e), d = Z.a ? Z.a(a, d) : Z.call(null, a, d);
  return r(r(e) ? d : e) ? Q.c(c, ag, new U(null, 2, 5, V, [e, d], null)) : null;
});
rf(Z, Dg, function(a, b) {
  var c = S(b) ? R.a(X, b) : b, d = P.a(c, Xf), e = P.a(c, Tg), e = Z.a ? Z.a(a, e) : Z.call(null, a, e), d = Z.a ? Z.a(a, d) : Z.call(null, a, d);
  return r(r(e) ? d : e) ? Q.e(c, Tg, e, J([Sf, bh.a(e, d)], 0)) : null;
});
rf(Z, $f, function(a, b) {
  var c = S(b) ? R.a(X, b) : b, d = P.a(c, zf), e = O.c(d, 0, null), d = O.c(d, 1, null), e = Z.a ? Z.a(a, e) : Z.call(null, a, e), d = Z.a ? Z.a(a, d) : Z.call(null, a, d);
  return r(r(e) ? d : e) ? Q.c(c, Yg, dh.a ? dh.a(e, d) : dh.call(null, e, d)) : null;
});
rf(Z, Mg, function(a, b) {
  var c = S(b) ? R.a(X, b) : b, d = P.a(c, xf), e = P.a(c, ig), c = P.a(c, $f), c = Z.a ? Z.a(a, c) : Z.call(null, a, c);
  return r(c) ? (e = P.a(Yg.b(c), e), r(e) ? Q.e(e, xf, d, J([tg, 2], 0)) : null) : null;
});
function dm(a, b) {
  return new p(null, 6, [Cg, Mf, xf, !0, Yf, !0, tg, 3, Qf, a, Nf, b], null);
}
;var em = new p(null, 4, [vf, 5, zg, "#525252", Hg, "#f8f8f8", Wg, 2], null), fm = new p(null, 2, [Hg, "#f8f8f8", Wg, 2], null), gm = new p(null, 3, [Hg, "#f8f8f8", Wg, 2, zg, "none"], null);
function hm(a, b) {
  return function(c) {
    return Jj.a(a, new p(null, 4, [Ef, Zf, Wf, b, Qf, c.offsetX, Nf, c.offsetY], null));
  };
}
function im(a, b) {
  return function() {
    lj(window, "mousemove", a);
    return lj(window, "mouseup", y(b));
  };
}
function jm(a, b, c, d) {
  var e = bh.i(a, b, c, d);
  a = (c - a) / e;
  b = (d - b) / e;
  return new U(null, 4, 5, V, [c + 1E4 * a, d + 1E4 * b, c + -1E4 * a, d + -1E4 * b], null);
}
function km(a) {
  a = a.getDOMNode().getBoundingClientRect();
  return new U(null, 2, 5, V, [a.left, a.top], null);
}
function lm(a, b) {
  var c = km(b), d = O.c(c, 0, null), c = O.c(c, 1, null);
  return new p(null, 2, [Qf, a.clientX - d, Nf, a.clientY - c], null);
}
var mm = function() {
  var a = Pe.b(W), b = Pe.b(W), c = Pe.b(W), d = Pe.b(W), e = P.c(W, cg, af());
  return new qf("shape", function(a) {
    return Cg.b(a);
  }, Nb, e, a, b, c, d);
}(), nm = function() {
  var a = Pe.b(W), b = Pe.b(W), c = Pe.b(W), d = Pe.b(W), e = P.c(W, cg, af());
  return new qf("on-mouse-down", function(a) {
    return Cg.b(a);
  }, Nb, e, a, b, c, d);
}();
rf(mm, Mf, function(a, b) {
  var c = S(a) ? R.a(X, a) : a;
  P.a(c, Wf);
  var d = P.a(c, Yf), e = P.a(c, Nf), f = P.a(c, Qf);
  return new U(null, 2, 5, V, [Dg, ye.e(J([em, new p(null, 3, [Sg, f, Lg, e, Rf, nm.a ? nm.a(c, b) : nm.call(null, c, b)], null), r(d) ? null : new p(null, 2, [zg, "black", Tf, "1"], null)], 0))], null);
});
rf(mm, Rg, function() {
  var a = cm.b(!1);
  return function(b, c) {
    var d = S(b) ? R.a(X, b) : b;
    P.a(d, Wf);
    var e = P.a(d, ag), f = O.c(e, 0, null), h = O.c(e, 1, null), e = S(f) ? R.a(X, f) : f, f = P.a(e, Qf), e = P.a(e, Nf), g = S(h) ? R.a(X, h) : h, h = P.a(g, Qf), g = P.a(g, Nf), g = jm(f, e, h, g), f = O.c(g, 0, null), e = O.c(g, 1, null), h = O.c(g, 2, null), g = O.c(g, 3, null);
    return new U(null, 4, 5, V, [hg, new p(null, 3, [Rf, nm.a ? nm.a(d, c) : nm.call(null, d, c), yf, function() {
      return Qe(a, !0);
    }, Jg, function() {
      return Qe(a, !1);
    }], null), new U(null, 2, 5, V, [Rg, new p(null, 6, [Wg, 7, Hg, r(y(a)) ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0)", Gg, f, wg, e, Eg, h, sg, g], null)], null), new U(null, 2, 5, V, [Rg, ye.e(J([fm, new p(null, 4, [Gg, f, wg, e, Eg, h, sg, g], null)], 0))], null)], null);
  };
});
rf(mm, Dg, function() {
  var a = cm.b(!1);
  return function(b, c) {
    var d = S(b) ? R.a(X, b) : b;
    P.a(d, Wf);
    var e = P.a(d, Tg), f = P.a(d, Sf), h = S(e) ? R.a(X, e) : e, e = P.a(h, Nf), h = P.a(h, Qf);
    return new U(null, 4, 5, V, [hg, new p(null, 3, [Rf, nm.a ? nm.a(d, c) : nm.call(null, d, c), yf, function() {
      return Qe(a, !0);
    }, Jg, function() {
      return Qe(a, !1);
    }], null), new U(null, 2, 5, V, [Dg, new p(null, 6, [Wg, 7, Hg, r(y(a)) ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0)", zg, "none", Sg, h, Lg, e, vf, f], null)], null), new U(null, 2, 5, V, [Dg, ye.e(J([gm, new p(null, 3, [Sg, h, Lg, e, vf, f], null)], 0))], null)], null);
  };
});
rf(nm, Mf, function(a, b) {
  return function(c) {
    c.stopPropagation();
    Jj.a(b, new p(null, 2, [Ef, Uf, vg, a], null));
    if (r(Yf.b(a))) {
      c = Wf.b(a);
      c = hm(b, c);
      var d = Pe.b(null), e = im(c, d);
      Qe(d, e);
      ij(window, "mousemove", c);
      c = ij(window, "mouseup", e);
    } else {
      c = null;
    }
    return c;
  };
});
rf(nm, Rg, function(a, b) {
  return function() {
    return Jj.a(b, new p(null, 2, [Ef, Ag, vg, a], null));
  };
});
rf(nm, Dg, function(a, b) {
  return function() {
    return Jj.a(b, new p(null, 2, [Ef, bg, vg, a], null));
  };
});
function om(a, b) {
  var c = uk;
  return new U(null, 3, 5, V, [qg, new p(null, 4, [Hf, "100%", Xg, "90%", Rf, function(a) {
    var e = km(c);
    O.c(e, 0, null);
    O.c(e, 1, null);
    return Jj.a(b, Q.c(lm(a, c), Ef, mg));
  }, fg, new p(null, 2, [Fg, "#0C1021", Vf, "6px"], null)], null), function() {
    var c = Ze(), e = Aa.c(function() {
      return function(a, b) {
        var c = O.c(b, 0, null), d = O.c(b, 1, null);
        return Q.c(a, c, Z.a ? Z.a(a, d) : Z.call(null, a, d));
      };
    }(c), a, a);
    return function h(a) {
      return new Uc(null, function() {
        for (var c = a;;) {
          if (c = D(c)) {
            if (qc(c)) {
              var d = Bb(c), e = N(d), v = new Wc(Array(e), 0);
              a: {
                for (var z = 0;;) {
                  if (z < e) {
                    var F = x.a(d, z), M = O.c(F, 0, null), F = O.c(F, 1, null);
                    r(xf.b(F)) && (M = ic(new U(null, 3, 5, V, [mm, ye.e(J([F, new p(null, 1, [Wf, M], null)], 0)), b], null), new p(null, 1, [Of, "" + w(M)], null)), v.add(M));
                    z += 1;
                  } else {
                    d = !0;
                    break a;
                  }
                }
                d = void 0;
              }
              return d ? $c(v.aa(), h(Cb(c))) : $c(v.aa(), null);
            }
            d = E(c);
            v = O.c(d, 0, null);
            d = O.c(d, 1, null);
            if (r(xf.b(d))) {
              return L(ic(new U(null, 3, 5, V, [mm, ye.e(J([d, new p(null, 1, [Wf, v], null)], 0)), b], null), new p(null, 1, [Of, "" + w(v)], null)), h(H(c)));
            }
            c = H(c);
          } else {
            return null;
          }
        }
      }, null, null);
    }(Bc.a(function() {
      return function(a) {
        O.c(a, 0, null);
        a = O.c(a, 1, null);
        return tg.b(a);
      };
    }(c, e), e));
  }()], null);
}
function pm(a, b) {
  return new U(null, 3, 5, V, [Jf, function() {
    return function d(a) {
      return new Uc(null, function() {
        for (;;) {
          var f = D(a);
          if (f) {
            var h = f;
            if (qc(h)) {
              var g = Bb(h), l = N(g), n = new Wc(Array(l), 0);
              return function() {
                for (var a = 0;;) {
                  if (a < l) {
                    var d = x.a(g, a), e = O.c(d, 0, null), q = O.c(d, 1, null), v = S(q) ? R.a(X, q) : q, z = P.a(v, Vg), F = P.a(v, Af), M = P.a(v, Ig);
                    ad(n, new U(null, 2, 5, V, [Af, ye.e(J([new p(null, 5, [pg, [w("img/"), w(F)].join(""), Hf, 32, Xg, 32, Zg, function(a, d, e) {
                      return function() {
                        return Jj.a(b, e);
                      };
                    }(a, d, e, q, v, z, F, M, g, l, n, h, f), fg, ye.e(J([r(z) ? new p(null, 1, [Fg, "#d8d8d8"], null) : new p(null, 1, [Fg, "white"], null), new p(null, 1, [Lf, "4px"], null)], 0))], null)], 0))], null));
                    a += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? $c(n.aa(), d(Cb(h))) : $c(n.aa(), null);
            }
            var q = E(h), v = O.c(q, 0, null), z = O.c(q, 1, null), F = S(z) ? R.a(X, z) : z, M = P.a(F, Vg), Y = P.a(F, Af), na = P.a(F, Ig);
            return L(new U(null, 2, 5, V, [Af, ye.e(J([new p(null, 5, [pg, [w("img/"), w(Y)].join(""), Hf, 32, Xg, 32, Zg, function(a, d) {
              return function() {
                return Jj.a(b, d);
              };
            }(q, v, z, F, M, Y, na, h, f), fg, ye.e(J([r(M) ? new p(null, 1, [Fg, "#d8d8d8"], null) : new p(null, 1, [Fg, "white"], null), new p(null, 1, [Lf, "4px"], null)], 0))], null)], 0))], null), d(H(h)));
          }
          return null;
        }
      }, null, null);
    }(a);
  }(), new U(null, 3, 5, V, [Ng, new p(null, 1, [fg, new p(null, 3, [Lf, 10, ug, "21px", Bg, "33%"], null)], null), function() {
    var b = ld(function(a) {
      return r(Vg.b(a)) ? Gf.b(a) : null;
    }, xe(a));
    return r(b) ? b : "Be Creative. Pick a tool";
  }()], null)], null);
}
;var qm = cm.b(new p(null, 6, ["move", new p(null, 5, [Wf, "move", Af, "move.svg", $g, new U(null, 1, 5, V, [Zf], null), Ig, Hj.b(128), Gf, "Move the points around"], null), "point", new p(null, 5, [Wf, "point", Af, "new_point.svg", $g, new U(null, 1, 5, V, [mg], null), Ig, Hj.l(), Gf, "Click on the canvas to create a new point"], null), "segment", new p(null, 5, [Wf, "segment", Af, "segment.svg", $g, new U(null, 2, 5, V, [Uf, mg], null), Ig, Hj.l(), Gf, "Click on two points to create a line"], null), 
"circle", new p(null, 5, [Wf, "circle", Af, "circle.svg", $g, new U(null, 2, 5, V, [Uf, mg], null), Ig, Hj.l(), Gf, "Click on two points to create a circle"], null), "intersection", new p(null, 5, [Wf, "intersection", Af, "intersection.svg", $g, new U(null, 2, 5, V, [Ag, bg], null), Ig, Hj.l(), Gf, "Click on two objects to find the intersecting points"], null), "hide", new p(null, 5, [Wf, "hide", Af, "hide.svg", $g, new U(null, 3, 5, V, [Uf, bg, Ag], null), Ig, Hj.l(), Gf, "Click on objects you want to hide"], 
null)], null));
function rm(a, b) {
  var c = S(a) ? R.a(X, a) : a, d = P.a(c, Ig), e = Hj.b(1);
  $h(function() {
    var a = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Rc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, xj(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Rc(d, $)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.b = b;
          return d;
        }();
      }(function(a) {
        var c = a[1];
        if (7 === c) {
          var e = a[2], c = P.a(e, Wf), f = P.a(e, Nf), e = P.a(e, Qf), c = Re.i(b, Q, c, dm(e, f));
          a[7] = c;
          a[2] = null;
          a[1] = 2;
          return $;
        }
        return 6 === c ? (c = a[8], a[2] = c, a[1] = 7, $) : 5 === c ? (c = a[8], c = R.a(X, c), a[2] = c, a[1] = 7, $) : 4 === c ? (c = a[2], f = S(c), a[8] = c, a[1] = f ? 5 : 6, $) : 3 === c ? (c = a[2], wj(a, c)) : 2 === c ? uj(a, 4, d) : 1 === c ? (a[2] = null, a[1] = 2, $) : null;
      });
    }(), c = function() {
      var b = a.l ? a.l() : a.call(null);
      b[6] = e;
      return b;
    }();
    return tj(c);
  });
}
function sm(a, b) {
  var c = S(a) ? R.a(X, a) : a, d = P.a(c, Ig), e = Hj.b(1);
  $h(function() {
    var a = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Rc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, xj(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Rc(d, $)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.b = b;
          return d;
        }();
      }(function(a) {
        var c = a[1];
        if (7 === c) {
          var e = a[2], c = P.a(e, Nf), e = P.a(e, Qf), f = Te.b("P"), c = Re.i(b, Q, f, dm(e, c));
          a[7] = c;
          a[2] = null;
          a[1] = 2;
          return $;
        }
        return 6 === c ? (c = a[8], a[2] = c, a[1] = 7, $) : 5 === c ? (c = a[8], c = R.a(X, c), a[2] = c, a[1] = 7, $) : 4 === c ? (c = a[2], e = S(c), a[8] = c, a[1] = e ? 5 : 6, $) : 3 === c ? (c = a[2], wj(a, c)) : 2 === c ? uj(a, 4, d) : 1 === c ? (a[2] = null, a[1] = 2, $) : null;
      });
    }(), c = function() {
      var b = a.l ? a.l() : a.call(null);
      b[6] = e;
      return b;
    }();
    return tj(c);
  });
}
function tm(a, b) {
  if (B.a(Ef.b(b), mg)) {
    var c = Te.b("P"), d = dm(Qf.b(b), Nf.b(b));
    Re.i(a, Q, c, d);
    return Q.c(d, Wf, c);
  }
  return vg.b(b);
}
function um(a, b) {
  var c = S(a) ? R.a(X, a) : a, d = P.a(c, Ig), e = Hj.b(1);
  $h(function() {
    var a = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Rc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, xj(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Rc(d, $)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.b = b;
          return d;
        }();
      }(function(a) {
        var c = a[1];
        if (5 === c) {
          var e = a[7], f = tm(b, a[2]), c = Te.b("s"), e = Wf.b(e), f = Wf.b(f), c = Re.i(b, Q, c, new p(null, 4, [Cg, Rg, xf, !0, tg, 1, ag, new U(null, 2, 5, V, [e, f], null)], null));
          a[8] = c;
          a[2] = null;
          a[1] = 2;
          return $;
        }
        return 4 === c ? (e = tm(b, a[2]), a[7] = e, uj(a, 5, d)) : 3 === c ? (c = a[2], wj(a, c)) : 2 === c ? uj(a, 4, d) : 1 === c ? (a[2] = null, a[1] = 2, $) : null;
      });
    }(), c = function() {
      var b = a.l ? a.l() : a.call(null);
      b[6] = e;
      return b;
    }();
    return tj(c);
  });
}
function vm(a, b) {
  var c = S(a) ? R.a(X, a) : a, d = P.a(c, Ig), e = Hj.b(1);
  $h(function() {
    var a = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Rc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, xj(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Rc(d, $)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.b = b;
          return d;
        }();
      }(function(a) {
        var c = a[1];
        if (5 === c) {
          var e = a[7], f = tm(b, a[2]), c = Te.b("s"), e = Wf.b(e), f = Wf.b(f), c = Re.i(b, Q, c, new p(null, 5, [Cg, Dg, xf, !0, tg, 1, Tg, e, Xf, f], null));
          a[8] = c;
          a[2] = null;
          a[1] = 2;
          return $;
        }
        return 4 === c ? (e = tm(b, a[2]), a[7] = e, uj(a, 5, d)) : 3 === c ? (c = a[2], wj(a, c)) : 2 === c ? uj(a, 4, d) : 1 === c ? (a[2] = null, a[1] = 2, $) : null;
      });
    }(), c = function() {
      var b = a.l ? a.l() : a.call(null);
      b[6] = e;
      return b;
    }();
    return tj(c);
  });
}
function wm(a, b) {
  var c = S(a) ? R.a(X, a) : a, d = P.a(c, Ig), e = Hj.b(1);
  $h(function() {
    var a = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Rc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, xj(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Rc(d, $)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.b = b;
          return d;
        }();
      }(function(a) {
        var c = a[1];
        if (8 === c) {
          return a[7] = a[2], a[2] = null, a[1] = 2, $;
        }
        if (7 === c) {
          var c = a[8], e = Te.b("ip"), c = Re.i(b, Q, e, new p(null, 5, [Cg, Mg, xf, !0, tg, 2, $f, c, ig, 1], null));
          a[2] = c;
          a[1] = 8;
          return $;
        }
        if (6 === c) {
          return a[2] = null, a[1] = 8, $;
        }
        if (5 === c) {
          var f = a[9], e = vg.b(a[2]), c = Te.b("i"), h = Wf.b(f), z = Wf.b(e), h = Re.i(b, Q, c, new p(null, 3, [Cg, $f, xf, !1, zf, new U(null, 2, 5, V, [h, z], null)], null)), z = Te.b("ip"), z = Re.i(b, Q, z, new p(null, 5, [Cg, Mg, xf, !0, tg, 2, $f, c, ig, 0], null)), f = Cg.b(f), f = B.a(f, Rg), e = Cg.b(e), e = B.a(e, Rg);
          a[10] = z;
          a[11] = h;
          a[8] = c;
          a[1] = r(f && e) ? 6 : 7;
          return $;
        }
        return 4 === c ? (f = vg.b(a[2]), a[9] = f, uj(a, 5, d)) : 3 === c ? (c = a[2], wj(a, c)) : 2 === c ? uj(a, 4, d) : 1 === c ? (a[2] = null, a[1] = 2, $) : null;
      });
    }(), c = function() {
      var b = a.l ? a.l() : a.call(null);
      b[6] = e;
      return b;
    }();
    return tj(c);
  });
}
function xm(a, b) {
  var c = S(a) ? R.a(X, a) : a, d = P.a(c, Ig), e = Hj.b(1);
  $h(function() {
    var a = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Rc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, xj(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Rc(d, $)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.b = b;
          return d;
        }();
      }(function(a) {
        var c = a[1];
        return 4 === c ? (c = vg.b(a[2]), c = [Wf.b(c), xf], c = Re.i(b, rd, new U(null, 2, 5, V, c, null), !1), a[7] = c, a[2] = null, a[1] = 2, $) : 3 === c ? (c = a[2], wj(a, c)) : 2 === c ? uj(a, 4, d) : 1 === c ? (a[2] = null, a[1] = 2, $) : null;
      });
    }(), c = function() {
      var b = a.l ? a.l() : a.call(null);
      b[6] = e;
      return b;
    }();
    return tj(c);
  });
}
function ym(a, b) {
  var c = Hj.b(1);
  $h(function() {
    var d = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!Rc(b, $)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, xj(c), $;
                  }
                  if (t) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!Rc(d, $)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.l = c;
          d.b = b;
          return d;
        }();
      }(function(c) {
        var d = c[1];
        if (7 === d) {
          var e = c[7], d = c[2];
          if (r(e)) {
            for (var l = S(e) ? R.a(X, e) : e, e = P.a(l, Ig), n = P.a(l, $g), l = P.a(l, Wf), n = D(n), q = null, v = 0, z = 0;;) {
              if (z < v) {
                var F = q.D(null, z);
                Rj(b, F, e);
                z += 1;
              } else {
                if (n = D(n)) {
                  q = n, qc(q) ? (n = Bb(q), z = Cb(q), q = n, v = N(n), n = z) : (n = E(q), Rj(b, n, e), n = I(q), q = null, v = 0), z = 0;
                } else {
                  break;
                }
              }
            }
            e = Re.i(qm, rd, new U(null, 2, 5, V, [l, Vg], null), !1);
          } else {
            e = null;
          }
          if (r(d)) {
            n = S(d) ? R.a(X, d) : d;
            l = P.a(n, Ig);
            q = P.a(n, $g);
            n = P.a(n, Wf);
            q = D(q);
            v = null;
            for (F = z = 0;;) {
              if (F < z) {
                var M = v.D(null, F);
                Tj.c(b, M, l);
                F += 1;
              } else {
                if (q = D(q)) {
                  v = q, qc(v) ? (q = Bb(v), F = Cb(v), v = q, z = N(q), q = F) : (q = E(v), Tj.c(b, q, l), q = I(v), v = null, z = 0), F = 0;
                } else {
                  break;
                }
              }
            }
            l = Re.i(qm, rd, new U(null, 2, 5, V, [n, Vg], null), !0);
          } else {
            l = null;
          }
          c[8] = l;
          c[9] = e;
          c[7] = d;
          c[2] = null;
          c[1] = 2;
          return $;
        }
        return 6 === d ? (d = c[10], e = y(qm), d = e.b ? e.b(d) : e.call(null, d), c[2] = d, c[1] = 7, $) : 5 === d ? (c[2] = null, c[1] = 7, $) : 4 === d ? (e = c[7], d = c[2], e = Wf.b(e), e = B.a(d, e), c[10] = d, c[1] = e ? 5 : 6, $) : 3 === d ? (d = c[2], wj(c, d)) : 2 === d ? uj(c, 4, a) : 1 === d ? (c[7] = null, c[2] = null, c[1] = 2, $) : null;
      });
    }(), e = function() {
      var a = d.l ? d.l() : d.call(null);
      a[6] = c;
      return a;
    }();
    return tj(e);
  });
}
;function zm(a, b, c) {
  return new U(null, 4, 5, V, [Jf, new p(null, 1, [fg, new p(null, 3, [Lf, "auto", ng, "auto", Hf, "90%"], null)], null), new U(null, 3, 5, V, [pm, y(qm), c], null), new U(null, 3, 5, V, [om, y(a), b], null)], null);
}
function Am() {
  var a = cm.b(W), b = Hj.l(), c = y(qm), d = Hj.b(32), e = Sj.a(d, Ef);
  ym(b, e);
  rm(c.b ? c.b("move") : c.call(null, "move"), a);
  sm(c.b ? c.b("point") : c.call(null, "point"), a);
  um(c.b ? c.b("segment") : c.call(null, "segment"), a);
  vm(c.b ? c.b("circle") : c.call(null, "circle"), a);
  wm(c.b ? c.b("intersection") : c.call(null, "intersection"), a);
  xm(c.b ? c.b("hide") : c.call(null, "hide"), a);
  return bm.a(new U(null, 4, 5, V, [zm, a, d, b], null), document.getElementById("root"));
}
var Bm = ["elements", "core", "start"], Cm = aa;
Bm[0] in Cm || !Cm.execScript || Cm.execScript("var " + Bm[0]);
for (var Dm;Bm.length && (Dm = Bm.shift());) {
  var Em;
  if (Em = !Bm.length) {
    Em = void 0 !== Am;
  }
  Em ? Cm[Dm] = Am : Cm = Cm[Dm] ? Cm[Dm] : Cm[Dm] = {};
}
;
})();
