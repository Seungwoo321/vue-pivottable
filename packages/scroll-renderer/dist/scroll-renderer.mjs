var xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ki = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(i, o) {
  (function() {
    var r, l = "4.17.21", s = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", d = "Invalid `variable` option passed into `_.template`", g = "__lodash_hash_undefined__", _ = 500, b = "__lodash_placeholder__", x = 1, A = 2, O = 4, T = 1, S = 2, L = 1, F = 2, k = 4, W = 8, dt = 16, lt = 32, ct = 64, rt = 128, it = 256, j = 512, Q = 30, vt = "...", Nt = 800, X = 16, q = 1, J = 2, U = 3, G = 1 / 0, Z = 9007199254740991, z = 17976931348623157e292, bt = 0 / 0, E = 4294967295, I = E - 1, N = E >>> 1, ot = [
      ["ary", rt],
      ["bind", L],
      ["bindKey", F],
      ["curry", W],
      ["curryRight", dt],
      ["flip", j],
      ["partial", lt],
      ["partialRight", ct],
      ["rearg", it]
    ], st = "[object Arguments]", Et = "[object Array]", Ct = "[object AsyncFunction]", ee = "[object Boolean]", Jt = "[object Date]", Fn = "[object DOMException]", Br = "[object Error]", kr = "[object Function]", Ga = "[object GeneratorFunction]", Ne = "[object Map]", nr = "[object Number]", qs = "[object Null]", Xe = "[object Object]", Ha = "[object Promise]", Ys = "[object Proxy]", rr = "[object RegExp]", Fe = "[object Set]", ir = "[object String]", $r = "[object Symbol]", zs = "[object Undefined]", or = "[object WeakMap]", Xs = "[object WeakSet]", ar = "[object ArrayBuffer]", Wn = "[object DataView]", Vi = "[object Float32Array]", Qi = "[object Float64Array]", to = "[object Int8Array]", eo = "[object Int16Array]", no = "[object Int32Array]", ro = "[object Uint8Array]", io = "[object Uint8ClampedArray]", oo = "[object Uint16Array]", ao = "[object Uint32Array]", Zs = /\b__p \+= '';/g, js = /\b(__p \+=) '' \+/g, Js = /(__e\(.*?\)|\b__t\)) \+\n'';/g, qa = /&(?:amp|lt|gt|quot|#39);/g, Ya = /[&<>"']/g, Vs = RegExp(qa.source), Qs = RegExp(Ya.source), tf = /<%-([\s\S]+?)%>/g, ef = /<%([\s\S]+?)%>/g, za = /<%=([\s\S]+?)%>/g, nf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rf = /^\w*$/, of = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uo = /[\\^$.*+?()[\]{}|]/g, af = RegExp(uo.source), lo = /^\s+/, uf = /\s/, lf = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, sf = /\{\n\/\* \[wrapped with (.+)\] \*/, ff = /,? & /, cf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, hf = /[()=,{}\[\]\/\s]/, pf = /\\(\\)?/g, df = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Xa = /\w*$/, gf = /^[-+]0x[0-9a-f]+$/i, vf = /^0b[01]+$/i, mf = /^\[object .+?Constructor\]$/, _f = /^0o[0-7]+$/i, bf = /^(?:0|[1-9]\d*)$/, yf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ur = /($^)/, wf = /['\n\r\u2028\u2029\\]/g, Kr = "\\ud800-\\udfff", xf = "\\u0300-\\u036f", Sf = "\\ufe20-\\ufe2f", Ef = "\\u20d0-\\u20ff", Za = xf + Sf + Ef, ja = "\\u2700-\\u27bf", Ja = "a-z\\xdf-\\xf6\\xf8-\\xff", Af = "\\xac\\xb1\\xd7\\xf7", Of = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Tf = "\\u2000-\\u206f", Cf = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Va = "A-Z\\xc0-\\xd6\\xd8-\\xde", Qa = "\\ufe0e\\ufe0f", tu = Af + Of + Tf + Cf, so = "['\u2019]", Df = "[" + Kr + "]", eu = "[" + tu + "]", Gr = "[" + Za + "]", nu = "\\d+", If = "[" + ja + "]", ru = "[" + Ja + "]", iu = "[^" + Kr + tu + nu + ja + Ja + Va + "]", fo = "\\ud83c[\\udffb-\\udfff]", Mf = "(?:" + Gr + "|" + fo + ")", ou = "[^" + Kr + "]", co = "(?:\\ud83c[\\udde6-\\uddff]){2}", ho = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bn = "[" + Va + "]", au = "\\u200d", uu = "(?:" + ru + "|" + iu + ")", Rf = "(?:" + Bn + "|" + iu + ")", lu = "(?:" + so + "(?:d|ll|m|re|s|t|ve))?", su = "(?:" + so + "(?:D|LL|M|RE|S|T|VE))?", fu = Mf + "?", cu = "[" + Qa + "]?", Lf = "(?:" + au + "(?:" + [ou, co, ho].join("|") + ")" + cu + fu + ")*", Pf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Nf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", hu = cu + fu + Lf, Ff = "(?:" + [If, co, ho].join("|") + ")" + hu, Wf = "(?:" + [ou + Gr + "?", Gr, co, ho, Df].join("|") + ")", Bf = RegExp(so, "g"), kf = RegExp(Gr, "g"), po = RegExp(fo + "(?=" + fo + ")|" + Wf + hu, "g"), $f = RegExp([
      Bn + "?" + ru + "+" + lu + "(?=" + [eu, Bn, "$"].join("|") + ")",
      Rf + "+" + su + "(?=" + [eu, Bn + uu, "$"].join("|") + ")",
      Bn + "?" + uu + "+" + lu,
      Bn + "+" + su,
      Nf,
      Pf,
      nu,
      Ff
    ].join("|"), "g"), Uf = RegExp("[" + au + Kr + Za + Qa + "]"), Kf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Gf = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Hf = -1, Rt = {};
    Rt[Vi] = Rt[Qi] = Rt[to] = Rt[eo] = Rt[no] = Rt[ro] = Rt[io] = Rt[oo] = Rt[ao] = !0, Rt[st] = Rt[Et] = Rt[ar] = Rt[ee] = Rt[Wn] = Rt[Jt] = Rt[Br] = Rt[kr] = Rt[Ne] = Rt[nr] = Rt[Xe] = Rt[rr] = Rt[Fe] = Rt[ir] = Rt[or] = !1;
    var It = {};
    It[st] = It[Et] = It[ar] = It[Wn] = It[ee] = It[Jt] = It[Vi] = It[Qi] = It[to] = It[eo] = It[no] = It[Ne] = It[nr] = It[Xe] = It[rr] = It[Fe] = It[ir] = It[$r] = It[ro] = It[io] = It[oo] = It[ao] = !0, It[Br] = It[kr] = It[or] = !1;
    var qf = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, Yf = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, zf = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Xf = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Zf = parseFloat, jf = parseInt, pu = typeof xr == "object" && xr && xr.Object === Object && xr, Jf = typeof self == "object" && self && self.Object === Object && self, Vt = pu || Jf || Function("return this")(), go = o && !o.nodeType && o, xn = go && !0 && i && !i.nodeType && i, du = xn && xn.exports === go, vo = du && pu.process, Ae = function() {
      try {
        var y = xn && xn.require && xn.require("util").types;
        return y || vo && vo.binding && vo.binding("util");
      } catch {
      }
    }(), gu = Ae && Ae.isArrayBuffer, vu = Ae && Ae.isDate, mu = Ae && Ae.isMap, _u = Ae && Ae.isRegExp, bu = Ae && Ae.isSet, yu = Ae && Ae.isTypedArray;
    function ge(y, D, C) {
      switch (C.length) {
        case 0:
          return y.call(D);
        case 1:
          return y.call(D, C[0]);
        case 2:
          return y.call(D, C[0], C[1]);
        case 3:
          return y.call(D, C[0], C[1], C[2]);
      }
      return y.apply(D, C);
    }
    function Vf(y, D, C, K) {
      for (var at = -1, At = y == null ? 0 : y.length; ++at < At; ) {
        var Xt = y[at];
        D(K, Xt, C(Xt), y);
      }
      return K;
    }
    function Oe(y, D) {
      for (var C = -1, K = y == null ? 0 : y.length; ++C < K && D(y[C], C, y) !== !1; )
        ;
      return y;
    }
    function Qf(y, D) {
      for (var C = y == null ? 0 : y.length; C-- && D(y[C], C, y) !== !1; )
        ;
      return y;
    }
    function wu(y, D) {
      for (var C = -1, K = y == null ? 0 : y.length; ++C < K; )
        if (!D(y[C], C, y))
          return !1;
      return !0;
    }
    function ln(y, D) {
      for (var C = -1, K = y == null ? 0 : y.length, at = 0, At = []; ++C < K; ) {
        var Xt = y[C];
        D(Xt, C, y) && (At[at++] = Xt);
      }
      return At;
    }
    function Hr(y, D) {
      var C = y == null ? 0 : y.length;
      return !!C && kn(y, D, 0) > -1;
    }
    function mo(y, D, C) {
      for (var K = -1, at = y == null ? 0 : y.length; ++K < at; )
        if (C(D, y[K]))
          return !0;
      return !1;
    }
    function Pt(y, D) {
      for (var C = -1, K = y == null ? 0 : y.length, at = Array(K); ++C < K; )
        at[C] = D(y[C], C, y);
      return at;
    }
    function sn(y, D) {
      for (var C = -1, K = D.length, at = y.length; ++C < K; )
        y[at + C] = D[C];
      return y;
    }
    function _o(y, D, C, K) {
      var at = -1, At = y == null ? 0 : y.length;
      for (K && At && (C = y[++at]); ++at < At; )
        C = D(C, y[at], at, y);
      return C;
    }
    function tc(y, D, C, K) {
      var at = y == null ? 0 : y.length;
      for (K && at && (C = y[--at]); at--; )
        C = D(C, y[at], at, y);
      return C;
    }
    function bo(y, D) {
      for (var C = -1, K = y == null ? 0 : y.length; ++C < K; )
        if (D(y[C], C, y))
          return !0;
      return !1;
    }
    var ec = yo("length");
    function nc(y) {
      return y.split("");
    }
    function rc(y) {
      return y.match(cf) || [];
    }
    function xu(y, D, C) {
      var K;
      return C(y, function(at, At, Xt) {
        if (D(at, At, Xt))
          return K = At, !1;
      }), K;
    }
    function qr(y, D, C, K) {
      for (var at = y.length, At = C + (K ? 1 : -1); K ? At-- : ++At < at; )
        if (D(y[At], At, y))
          return At;
      return -1;
    }
    function kn(y, D, C) {
      return D === D ? gc(y, D, C) : qr(y, Su, C);
    }
    function ic(y, D, C, K) {
      for (var at = C - 1, At = y.length; ++at < At; )
        if (K(y[at], D))
          return at;
      return -1;
    }
    function Su(y) {
      return y !== y;
    }
    function Eu(y, D) {
      var C = y == null ? 0 : y.length;
      return C ? xo(y, D) / C : bt;
    }
    function yo(y) {
      return function(D) {
        return D == null ? r : D[y];
      };
    }
    function wo(y) {
      return function(D) {
        return y == null ? r : y[D];
      };
    }
    function Au(y, D, C, K, at) {
      return at(y, function(At, Xt, Dt) {
        C = K ? (K = !1, At) : D(C, At, Xt, Dt);
      }), C;
    }
    function oc(y, D) {
      var C = y.length;
      for (y.sort(D); C--; )
        y[C] = y[C].value;
      return y;
    }
    function xo(y, D) {
      for (var C, K = -1, at = y.length; ++K < at; ) {
        var At = D(y[K]);
        At !== r && (C = C === r ? At : C + At);
      }
      return C;
    }
    function So(y, D) {
      for (var C = -1, K = Array(y); ++C < y; )
        K[C] = D(C);
      return K;
    }
    function ac(y, D) {
      return Pt(D, function(C) {
        return [C, y[C]];
      });
    }
    function Ou(y) {
      return y && y.slice(0, Iu(y) + 1).replace(lo, "");
    }
    function ve(y) {
      return function(D) {
        return y(D);
      };
    }
    function Eo(y, D) {
      return Pt(D, function(C) {
        return y[C];
      });
    }
    function ur(y, D) {
      return y.has(D);
    }
    function Tu(y, D) {
      for (var C = -1, K = y.length; ++C < K && kn(D, y[C], 0) > -1; )
        ;
      return C;
    }
    function Cu(y, D) {
      for (var C = y.length; C-- && kn(D, y[C], 0) > -1; )
        ;
      return C;
    }
    function uc(y, D) {
      for (var C = y.length, K = 0; C--; )
        y[C] === D && ++K;
      return K;
    }
    var lc = wo(qf), sc = wo(Yf);
    function fc(y) {
      return "\\" + Xf[y];
    }
    function cc(y, D) {
      return y == null ? r : y[D];
    }
    function $n(y) {
      return Uf.test(y);
    }
    function hc(y) {
      return Kf.test(y);
    }
    function pc(y) {
      for (var D, C = []; !(D = y.next()).done; )
        C.push(D.value);
      return C;
    }
    function Ao(y) {
      var D = -1, C = Array(y.size);
      return y.forEach(function(K, at) {
        C[++D] = [at, K];
      }), C;
    }
    function Du(y, D) {
      return function(C) {
        return y(D(C));
      };
    }
    function fn(y, D) {
      for (var C = -1, K = y.length, at = 0, At = []; ++C < K; ) {
        var Xt = y[C];
        (Xt === D || Xt === b) && (y[C] = b, At[at++] = C);
      }
      return At;
    }
    function Yr(y) {
      var D = -1, C = Array(y.size);
      return y.forEach(function(K) {
        C[++D] = K;
      }), C;
    }
    function dc(y) {
      var D = -1, C = Array(y.size);
      return y.forEach(function(K) {
        C[++D] = [K, K];
      }), C;
    }
    function gc(y, D, C) {
      for (var K = C - 1, at = y.length; ++K < at; )
        if (y[K] === D)
          return K;
      return -1;
    }
    function vc(y, D, C) {
      for (var K = C + 1; K--; )
        if (y[K] === D)
          return K;
      return K;
    }
    function Un(y) {
      return $n(y) ? _c(y) : ec(y);
    }
    function We(y) {
      return $n(y) ? bc(y) : nc(y);
    }
    function Iu(y) {
      for (var D = y.length; D-- && uf.test(y.charAt(D)); )
        ;
      return D;
    }
    var mc = wo(zf);
    function _c(y) {
      for (var D = po.lastIndex = 0; po.test(y); )
        ++D;
      return D;
    }
    function bc(y) {
      return y.match(po) || [];
    }
    function yc(y) {
      return y.match($f) || [];
    }
    var wc = function y(D) {
      D = D == null ? Vt : Kn.defaults(Vt.Object(), D, Kn.pick(Vt, Gf));
      var C = D.Array, K = D.Date, at = D.Error, At = D.Function, Xt = D.Math, Dt = D.Object, Oo = D.RegExp, xc = D.String, Te = D.TypeError, zr = C.prototype, Sc = At.prototype, Gn = Dt.prototype, Xr = D["__core-js_shared__"], Zr = Sc.toString, Tt = Gn.hasOwnProperty, Ec = 0, Mu = function() {
        var t = /[^.]+$/.exec(Xr && Xr.keys && Xr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), jr = Gn.toString, Ac = Zr.call(Dt), Oc = Vt._, Tc = Oo(
        "^" + Zr.call(Tt).replace(uo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Jr = du ? D.Buffer : r, cn = D.Symbol, Vr = D.Uint8Array, Ru = Jr ? Jr.allocUnsafe : r, Qr = Du(Dt.getPrototypeOf, Dt), Lu = Dt.create, Pu = Gn.propertyIsEnumerable, ti = zr.splice, Nu = cn ? cn.isConcatSpreadable : r, lr = cn ? cn.iterator : r, Sn = cn ? cn.toStringTag : r, ei = function() {
        try {
          var t = Cn(Dt, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Cc = D.clearTimeout !== Vt.clearTimeout && D.clearTimeout, Dc = K && K.now !== Vt.Date.now && K.now, Ic = D.setTimeout !== Vt.setTimeout && D.setTimeout, ni = Xt.ceil, ri = Xt.floor, To = Dt.getOwnPropertySymbols, Mc = Jr ? Jr.isBuffer : r, Fu = D.isFinite, Rc = zr.join, Lc = Du(Dt.keys, Dt), Zt = Xt.max, ne = Xt.min, Pc = K.now, Nc = D.parseInt, Wu = Xt.random, Fc = zr.reverse, Co = Cn(D, "DataView"), sr = Cn(D, "Map"), Do = Cn(D, "Promise"), Hn = Cn(D, "Set"), fr = Cn(D, "WeakMap"), cr = Cn(Dt, "create"), ii = fr && new fr(), qn = {}, Wc = Dn(Co), Bc = Dn(sr), kc = Dn(Do), $c = Dn(Hn), Uc = Dn(fr), oi = cn ? cn.prototype : r, hr = oi ? oi.valueOf : r, Bu = oi ? oi.toString : r;
      function h(t) {
        if ($t(t) && !ft(t) && !(t instanceof wt)) {
          if (t instanceof Ce)
            return t;
          if (Tt.call(t, "__wrapped__"))
            return kl(t);
        }
        return new Ce(t);
      }
      var Yn = function() {
        function t() {
        }
        return function(e) {
          if (!Ft(e))
            return {};
          if (Lu)
            return Lu(e);
          t.prototype = e;
          var n = new t();
          return t.prototype = r, n;
        };
      }();
      function ai() {
      }
      function Ce(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: tf,
        evaluate: ef,
        interpolate: za,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = ai.prototype, h.prototype.constructor = h, Ce.prototype = Yn(ai.prototype), Ce.prototype.constructor = Ce;
      function wt(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = E, this.__views__ = [];
      }
      function Kc() {
        var t = new wt(this.__wrapped__);
        return t.__actions__ = fe(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = fe(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = fe(this.__views__), t;
      }
      function Gc() {
        if (this.__filtered__) {
          var t = new wt(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function Hc() {
        var t = this.__wrapped__.value(), e = this.__dir__, n = ft(t), a = e < 0, f = n ? t.length : 0, p = np(0, f, this.__views__), v = p.start, m = p.end, w = m - v, M = a ? m : v - 1, R = this.__iteratees__, P = R.length, $ = 0, Y = ne(w, this.__takeCount__);
        if (!n || !a && f == w && Y == w)
          return ll(t, this.__actions__);
        var tt = [];
        t:
          for (; w-- && $ < Y; ) {
            M += e;
            for (var gt = -1, et = t[M]; ++gt < P; ) {
              var yt = R[gt], St = yt.iteratee, be = yt.type, le = St(et);
              if (be == J)
                et = le;
              else if (!le) {
                if (be == q)
                  continue t;
                break t;
              }
            }
            tt[$++] = et;
          }
        return tt;
      }
      wt.prototype = Yn(ai.prototype), wt.prototype.constructor = wt;
      function En(t) {
        var e = -1, n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var a = t[e];
          this.set(a[0], a[1]);
        }
      }
      function qc() {
        this.__data__ = cr ? cr(null) : {}, this.size = 0;
      }
      function Yc(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e;
      }
      function zc(t) {
        var e = this.__data__;
        if (cr) {
          var n = e[t];
          return n === g ? r : n;
        }
        return Tt.call(e, t) ? e[t] : r;
      }
      function Xc(t) {
        var e = this.__data__;
        return cr ? e[t] !== r : Tt.call(e, t);
      }
      function Zc(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = cr && e === r ? g : e, this;
      }
      En.prototype.clear = qc, En.prototype.delete = Yc, En.prototype.get = zc, En.prototype.has = Xc, En.prototype.set = Zc;
      function Ze(t) {
        var e = -1, n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var a = t[e];
          this.set(a[0], a[1]);
        }
      }
      function jc() {
        this.__data__ = [], this.size = 0;
      }
      function Jc(t) {
        var e = this.__data__, n = ui(e, t);
        if (n < 0)
          return !1;
        var a = e.length - 1;
        return n == a ? e.pop() : ti.call(e, n, 1), --this.size, !0;
      }
      function Vc(t) {
        var e = this.__data__, n = ui(e, t);
        return n < 0 ? r : e[n][1];
      }
      function Qc(t) {
        return ui(this.__data__, t) > -1;
      }
      function th(t, e) {
        var n = this.__data__, a = ui(n, t);
        return a < 0 ? (++this.size, n.push([t, e])) : n[a][1] = e, this;
      }
      Ze.prototype.clear = jc, Ze.prototype.delete = Jc, Ze.prototype.get = Vc, Ze.prototype.has = Qc, Ze.prototype.set = th;
      function je(t) {
        var e = -1, n = t == null ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var a = t[e];
          this.set(a[0], a[1]);
        }
      }
      function eh() {
        this.size = 0, this.__data__ = {
          hash: new En(),
          map: new (sr || Ze)(),
          string: new En()
        };
      }
      function nh(t) {
        var e = bi(this, t).delete(t);
        return this.size -= e ? 1 : 0, e;
      }
      function rh(t) {
        return bi(this, t).get(t);
      }
      function ih(t) {
        return bi(this, t).has(t);
      }
      function oh(t, e) {
        var n = bi(this, t), a = n.size;
        return n.set(t, e), this.size += n.size == a ? 0 : 1, this;
      }
      je.prototype.clear = eh, je.prototype.delete = nh, je.prototype.get = rh, je.prototype.has = ih, je.prototype.set = oh;
      function An(t) {
        var e = -1, n = t == null ? 0 : t.length;
        for (this.__data__ = new je(); ++e < n; )
          this.add(t[e]);
      }
      function ah(t) {
        return this.__data__.set(t, g), this;
      }
      function uh(t) {
        return this.__data__.has(t);
      }
      An.prototype.add = An.prototype.push = ah, An.prototype.has = uh;
      function Be(t) {
        var e = this.__data__ = new Ze(t);
        this.size = e.size;
      }
      function lh() {
        this.__data__ = new Ze(), this.size = 0;
      }
      function sh(t) {
        var e = this.__data__, n = e.delete(t);
        return this.size = e.size, n;
      }
      function fh(t) {
        return this.__data__.get(t);
      }
      function ch(t) {
        return this.__data__.has(t);
      }
      function hh(t, e) {
        var n = this.__data__;
        if (n instanceof Ze) {
          var a = n.__data__;
          if (!sr || a.length < s - 1)
            return a.push([t, e]), this.size = ++n.size, this;
          n = this.__data__ = new je(a);
        }
        return n.set(t, e), this.size = n.size, this;
      }
      Be.prototype.clear = lh, Be.prototype.delete = sh, Be.prototype.get = fh, Be.prototype.has = ch, Be.prototype.set = hh;
      function ku(t, e) {
        var n = ft(t), a = !n && In(t), f = !n && !a && vn(t), p = !n && !a && !f && jn(t), v = n || a || f || p, m = v ? So(t.length, xc) : [], w = m.length;
        for (var M in t)
          (e || Tt.call(t, M)) && !(v && (M == "length" || f && (M == "offset" || M == "parent") || p && (M == "buffer" || M == "byteLength" || M == "byteOffset") || tn(M, w))) && m.push(M);
        return m;
      }
      function $u(t) {
        var e = t.length;
        return e ? t[$o(0, e - 1)] : r;
      }
      function ph(t, e) {
        return yi(fe(t), On(e, 0, t.length));
      }
      function dh(t) {
        return yi(fe(t));
      }
      function Io(t, e, n) {
        (n !== r && !ke(t[e], n) || n === r && !(e in t)) && Je(t, e, n);
      }
      function pr(t, e, n) {
        var a = t[e];
        (!(Tt.call(t, e) && ke(a, n)) || n === r && !(e in t)) && Je(t, e, n);
      }
      function ui(t, e) {
        for (var n = t.length; n--; )
          if (ke(t[n][0], e))
            return n;
        return -1;
      }
      function gh(t, e, n, a) {
        return hn(t, function(f, p, v) {
          e(a, f, n(f), v);
        }), a;
      }
      function Uu(t, e) {
        return t && qe(e, jt(e), t);
      }
      function vh(t, e) {
        return t && qe(e, he(e), t);
      }
      function Je(t, e, n) {
        e == "__proto__" && ei ? ei(t, e, {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        }) : t[e] = n;
      }
      function Mo(t, e) {
        for (var n = -1, a = e.length, f = C(a), p = t == null; ++n < a; )
          f[n] = p ? r : ca(t, e[n]);
        return f;
      }
      function On(t, e, n) {
        return t === t && (n !== r && (t = t <= n ? t : n), e !== r && (t = t >= e ? t : e)), t;
      }
      function De(t, e, n, a, f, p) {
        var v, m = e & x, w = e & A, M = e & O;
        if (n && (v = f ? n(t, a, f, p) : n(t)), v !== r)
          return v;
        if (!Ft(t))
          return t;
        var R = ft(t);
        if (R) {
          if (v = ip(t), !m)
            return fe(t, v);
        } else {
          var P = re(t), $ = P == kr || P == Ga;
          if (vn(t))
            return cl(t, m);
          if (P == Xe || P == st || $ && !f) {
            if (v = w || $ ? {} : Il(t), !m)
              return w ? zh(t, vh(v, t)) : Yh(t, Uu(v, t));
          } else {
            if (!It[P])
              return f ? t : {};
            v = op(t, P, m);
          }
        }
        p || (p = new Be());
        var Y = p.get(t);
        if (Y)
          return Y;
        p.set(t, v), os(t) ? t.forEach(function(et) {
          v.add(De(et, e, n, et, t, p));
        }) : rs(t) && t.forEach(function(et, yt) {
          v.set(yt, De(et, e, n, yt, t, p));
        });
        var tt = M ? w ? Jo : jo : w ? he : jt, gt = R ? r : tt(t);
        return Oe(gt || t, function(et, yt) {
          gt && (yt = et, et = t[yt]), pr(v, yt, De(et, e, n, yt, t, p));
        }), v;
      }
      function mh(t) {
        var e = jt(t);
        return function(n) {
          return Ku(n, t, e);
        };
      }
      function Ku(t, e, n) {
        var a = n.length;
        if (t == null)
          return !a;
        for (t = Dt(t); a--; ) {
          var f = n[a], p = e[f], v = t[f];
          if (v === r && !(f in t) || !p(v))
            return !1;
        }
        return !0;
      }
      function Gu(t, e, n) {
        if (typeof t != "function")
          throw new Te(c);
        return yr(function() {
          t.apply(r, n);
        }, e);
      }
      function dr(t, e, n, a) {
        var f = -1, p = Hr, v = !0, m = t.length, w = [], M = e.length;
        if (!m)
          return w;
        n && (e = Pt(e, ve(n))), a ? (p = mo, v = !1) : e.length >= s && (p = ur, v = !1, e = new An(e));
        t:
          for (; ++f < m; ) {
            var R = t[f], P = n == null ? R : n(R);
            if (R = a || R !== 0 ? R : 0, v && P === P) {
              for (var $ = M; $--; )
                if (e[$] === P)
                  continue t;
              w.push(R);
            } else
              p(e, P, a) || w.push(R);
          }
        return w;
      }
      var hn = vl(He), Hu = vl(Lo, !0);
      function _h(t, e) {
        var n = !0;
        return hn(t, function(a, f, p) {
          return n = !!e(a, f, p), n;
        }), n;
      }
      function li(t, e, n) {
        for (var a = -1, f = t.length; ++a < f; ) {
          var p = t[a], v = e(p);
          if (v != null && (m === r ? v === v && !_e(v) : n(v, m)))
            var m = v, w = p;
        }
        return w;
      }
      function bh(t, e, n, a) {
        var f = t.length;
        for (n = pt(n), n < 0 && (n = -n > f ? 0 : f + n), a = a === r || a > f ? f : pt(a), a < 0 && (a += f), a = n > a ? 0 : us(a); n < a; )
          t[n++] = e;
        return t;
      }
      function qu(t, e) {
        var n = [];
        return hn(t, function(a, f, p) {
          e(a, f, p) && n.push(a);
        }), n;
      }
      function Qt(t, e, n, a, f) {
        var p = -1, v = t.length;
        for (n || (n = up), f || (f = []); ++p < v; ) {
          var m = t[p];
          e > 0 && n(m) ? e > 1 ? Qt(m, e - 1, n, a, f) : sn(f, m) : a || (f[f.length] = m);
        }
        return f;
      }
      var Ro = ml(), Yu = ml(!0);
      function He(t, e) {
        return t && Ro(t, e, jt);
      }
      function Lo(t, e) {
        return t && Yu(t, e, jt);
      }
      function si(t, e) {
        return ln(e, function(n) {
          return en(t[n]);
        });
      }
      function Tn(t, e) {
        e = dn(e, t);
        for (var n = 0, a = e.length; t != null && n < a; )
          t = t[Ye(e[n++])];
        return n && n == a ? t : r;
      }
      function zu(t, e, n) {
        var a = e(t);
        return ft(t) ? a : sn(a, n(t));
      }
      function ae(t) {
        return t == null ? t === r ? zs : qs : Sn && Sn in Dt(t) ? ep(t) : dp(t);
      }
      function Po(t, e) {
        return t > e;
      }
      function yh(t, e) {
        return t != null && Tt.call(t, e);
      }
      function wh(t, e) {
        return t != null && e in Dt(t);
      }
      function xh(t, e, n) {
        return t >= ne(e, n) && t < Zt(e, n);
      }
      function No(t, e, n) {
        for (var a = n ? mo : Hr, f = t[0].length, p = t.length, v = p, m = C(p), w = 1 / 0, M = []; v--; ) {
          var R = t[v];
          v && e && (R = Pt(R, ve(e))), w = ne(R.length, w), m[v] = !n && (e || f >= 120 && R.length >= 120) ? new An(v && R) : r;
        }
        R = t[0];
        var P = -1, $ = m[0];
        t:
          for (; ++P < f && M.length < w; ) {
            var Y = R[P], tt = e ? e(Y) : Y;
            if (Y = n || Y !== 0 ? Y : 0, !($ ? ur($, tt) : a(M, tt, n))) {
              for (v = p; --v; ) {
                var gt = m[v];
                if (!(gt ? ur(gt, tt) : a(t[v], tt, n)))
                  continue t;
              }
              $ && $.push(tt), M.push(Y);
            }
          }
        return M;
      }
      function Sh(t, e, n, a) {
        return He(t, function(f, p, v) {
          e(a, n(f), p, v);
        }), a;
      }
      function gr(t, e, n) {
        e = dn(e, t), t = Pl(t, e);
        var a = t == null ? t : t[Ye(Me(e))];
        return a == null ? r : ge(a, t, n);
      }
      function Xu(t) {
        return $t(t) && ae(t) == st;
      }
      function Eh(t) {
        return $t(t) && ae(t) == ar;
      }
      function Ah(t) {
        return $t(t) && ae(t) == Jt;
      }
      function vr(t, e, n, a, f) {
        return t === e ? !0 : t == null || e == null || !$t(t) && !$t(e) ? t !== t && e !== e : Oh(t, e, n, a, vr, f);
      }
      function Oh(t, e, n, a, f, p) {
        var v = ft(t), m = ft(e), w = v ? Et : re(t), M = m ? Et : re(e);
        w = w == st ? Xe : w, M = M == st ? Xe : M;
        var R = w == Xe, P = M == Xe, $ = w == M;
        if ($ && vn(t)) {
          if (!vn(e))
            return !1;
          v = !0, R = !1;
        }
        if ($ && !R)
          return p || (p = new Be()), v || jn(t) ? Tl(t, e, n, a, f, p) : Qh(t, e, w, n, a, f, p);
        if (!(n & T)) {
          var Y = R && Tt.call(t, "__wrapped__"), tt = P && Tt.call(e, "__wrapped__");
          if (Y || tt) {
            var gt = Y ? t.value() : t, et = tt ? e.value() : e;
            return p || (p = new Be()), f(gt, et, n, a, p);
          }
        }
        return $ ? (p || (p = new Be()), tp(t, e, n, a, f, p)) : !1;
      }
      function Th(t) {
        return $t(t) && re(t) == Ne;
      }
      function Fo(t, e, n, a) {
        var f = n.length, p = f, v = !a;
        if (t == null)
          return !p;
        for (t = Dt(t); f--; ) {
          var m = n[f];
          if (v && m[2] ? m[1] !== t[m[0]] : !(m[0] in t))
            return !1;
        }
        for (; ++f < p; ) {
          m = n[f];
          var w = m[0], M = t[w], R = m[1];
          if (v && m[2]) {
            if (M === r && !(w in t))
              return !1;
          } else {
            var P = new Be();
            if (a)
              var $ = a(M, R, w, t, e, P);
            if (!($ === r ? vr(R, M, T | S, a, P) : $))
              return !1;
          }
        }
        return !0;
      }
      function Zu(t) {
        if (!Ft(t) || sp(t))
          return !1;
        var e = en(t) ? Tc : mf;
        return e.test(Dn(t));
      }
      function Ch(t) {
        return $t(t) && ae(t) == rr;
      }
      function Dh(t) {
        return $t(t) && re(t) == Fe;
      }
      function Ih(t) {
        return $t(t) && Oi(t.length) && !!Rt[ae(t)];
      }
      function ju(t) {
        return typeof t == "function" ? t : t == null ? pe : typeof t == "object" ? ft(t) ? Qu(t[0], t[1]) : Vu(t) : _s(t);
      }
      function Wo(t) {
        if (!br(t))
          return Lc(t);
        var e = [];
        for (var n in Dt(t))
          Tt.call(t, n) && n != "constructor" && e.push(n);
        return e;
      }
      function Mh(t) {
        if (!Ft(t))
          return pp(t);
        var e = br(t), n = [];
        for (var a in t)
          a == "constructor" && (e || !Tt.call(t, a)) || n.push(a);
        return n;
      }
      function Bo(t, e) {
        return t < e;
      }
      function Ju(t, e) {
        var n = -1, a = ce(t) ? C(t.length) : [];
        return hn(t, function(f, p, v) {
          a[++n] = e(f, p, v);
        }), a;
      }
      function Vu(t) {
        var e = Qo(t);
        return e.length == 1 && e[0][2] ? Rl(e[0][0], e[0][1]) : function(n) {
          return n === t || Fo(n, t, e);
        };
      }
      function Qu(t, e) {
        return ea(t) && Ml(e) ? Rl(Ye(t), e) : function(n) {
          var a = ca(n, t);
          return a === r && a === e ? ha(n, t) : vr(e, a, T | S);
        };
      }
      function fi(t, e, n, a, f) {
        t !== e && Ro(e, function(p, v) {
          if (f || (f = new Be()), Ft(p))
            Rh(t, e, v, n, fi, a, f);
          else {
            var m = a ? a(ra(t, v), p, v + "", t, e, f) : r;
            m === r && (m = p), Io(t, v, m);
          }
        }, he);
      }
      function Rh(t, e, n, a, f, p, v) {
        var m = ra(t, n), w = ra(e, n), M = v.get(w);
        if (M) {
          Io(t, n, M);
          return;
        }
        var R = p ? p(m, w, n + "", t, e, v) : r, P = R === r;
        if (P) {
          var $ = ft(w), Y = !$ && vn(w), tt = !$ && !Y && jn(w);
          R = w, $ || Y || tt ? ft(m) ? R = m : Ht(m) ? R = fe(m) : Y ? (P = !1, R = cl(w, !0)) : tt ? (P = !1, R = hl(w, !0)) : R = [] : wr(w) || In(w) ? (R = m, In(m) ? R = ls(m) : (!Ft(m) || en(m)) && (R = Il(w))) : P = !1;
        }
        P && (v.set(w, R), f(R, w, a, p, v), v.delete(w)), Io(t, n, R);
      }
      function tl(t, e) {
        var n = t.length;
        if (!!n)
          return e += e < 0 ? n : 0, tn(e, n) ? t[e] : r;
      }
      function el(t, e, n) {
        e.length ? e = Pt(e, function(p) {
          return ft(p) ? function(v) {
            return Tn(v, p.length === 1 ? p[0] : p);
          } : p;
        }) : e = [pe];
        var a = -1;
        e = Pt(e, ve(V()));
        var f = Ju(t, function(p, v, m) {
          var w = Pt(e, function(M) {
            return M(p);
          });
          return { criteria: w, index: ++a, value: p };
        });
        return oc(f, function(p, v) {
          return qh(p, v, n);
        });
      }
      function Lh(t, e) {
        return nl(t, e, function(n, a) {
          return ha(t, a);
        });
      }
      function nl(t, e, n) {
        for (var a = -1, f = e.length, p = {}; ++a < f; ) {
          var v = e[a], m = Tn(t, v);
          n(m, v) && mr(p, dn(v, t), m);
        }
        return p;
      }
      function Ph(t) {
        return function(e) {
          return Tn(e, t);
        };
      }
      function ko(t, e, n, a) {
        var f = a ? ic : kn, p = -1, v = e.length, m = t;
        for (t === e && (e = fe(e)), n && (m = Pt(t, ve(n))); ++p < v; )
          for (var w = 0, M = e[p], R = n ? n(M) : M; (w = f(m, R, w, a)) > -1; )
            m !== t && ti.call(m, w, 1), ti.call(t, w, 1);
        return t;
      }
      function rl(t, e) {
        for (var n = t ? e.length : 0, a = n - 1; n--; ) {
          var f = e[n];
          if (n == a || f !== p) {
            var p = f;
            tn(f) ? ti.call(t, f, 1) : Go(t, f);
          }
        }
        return t;
      }
      function $o(t, e) {
        return t + ri(Wu() * (e - t + 1));
      }
      function Nh(t, e, n, a) {
        for (var f = -1, p = Zt(ni((e - t) / (n || 1)), 0), v = C(p); p--; )
          v[a ? p : ++f] = t, t += n;
        return v;
      }
      function Uo(t, e) {
        var n = "";
        if (!t || e < 1 || e > Z)
          return n;
        do
          e % 2 && (n += t), e = ri(e / 2), e && (t += t);
        while (e);
        return n;
      }
      function mt(t, e) {
        return ia(Ll(t, e, pe), t + "");
      }
      function Fh(t) {
        return $u(Jn(t));
      }
      function Wh(t, e) {
        var n = Jn(t);
        return yi(n, On(e, 0, n.length));
      }
      function mr(t, e, n, a) {
        if (!Ft(t))
          return t;
        e = dn(e, t);
        for (var f = -1, p = e.length, v = p - 1, m = t; m != null && ++f < p; ) {
          var w = Ye(e[f]), M = n;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return t;
          if (f != v) {
            var R = m[w];
            M = a ? a(R, w, m) : r, M === r && (M = Ft(R) ? R : tn(e[f + 1]) ? [] : {});
          }
          pr(m, w, M), m = m[w];
        }
        return t;
      }
      var il = ii ? function(t, e) {
        return ii.set(t, e), t;
      } : pe, Bh = ei ? function(t, e) {
        return ei(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: da(e),
          writable: !0
        });
      } : pe;
      function kh(t) {
        return yi(Jn(t));
      }
      function Ie(t, e, n) {
        var a = -1, f = t.length;
        e < 0 && (e = -e > f ? 0 : f + e), n = n > f ? f : n, n < 0 && (n += f), f = e > n ? 0 : n - e >>> 0, e >>>= 0;
        for (var p = C(f); ++a < f; )
          p[a] = t[a + e];
        return p;
      }
      function $h(t, e) {
        var n;
        return hn(t, function(a, f, p) {
          return n = e(a, f, p), !n;
        }), !!n;
      }
      function ci(t, e, n) {
        var a = 0, f = t == null ? a : t.length;
        if (typeof e == "number" && e === e && f <= N) {
          for (; a < f; ) {
            var p = a + f >>> 1, v = t[p];
            v !== null && !_e(v) && (n ? v <= e : v < e) ? a = p + 1 : f = p;
          }
          return f;
        }
        return Ko(t, e, pe, n);
      }
      function Ko(t, e, n, a) {
        var f = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        e = n(e);
        for (var v = e !== e, m = e === null, w = _e(e), M = e === r; f < p; ) {
          var R = ri((f + p) / 2), P = n(t[R]), $ = P !== r, Y = P === null, tt = P === P, gt = _e(P);
          if (v)
            var et = a || tt;
          else
            M ? et = tt && (a || $) : m ? et = tt && $ && (a || !Y) : w ? et = tt && $ && !Y && (a || !gt) : Y || gt ? et = !1 : et = a ? P <= e : P < e;
          et ? f = R + 1 : p = R;
        }
        return ne(p, I);
      }
      function ol(t, e) {
        for (var n = -1, a = t.length, f = 0, p = []; ++n < a; ) {
          var v = t[n], m = e ? e(v) : v;
          if (!n || !ke(m, w)) {
            var w = m;
            p[f++] = v === 0 ? 0 : v;
          }
        }
        return p;
      }
      function al(t) {
        return typeof t == "number" ? t : _e(t) ? bt : +t;
      }
      function me(t) {
        if (typeof t == "string")
          return t;
        if (ft(t))
          return Pt(t, me) + "";
        if (_e(t))
          return Bu ? Bu.call(t) : "";
        var e = t + "";
        return e == "0" && 1 / t == -G ? "-0" : e;
      }
      function pn(t, e, n) {
        var a = -1, f = Hr, p = t.length, v = !0, m = [], w = m;
        if (n)
          v = !1, f = mo;
        else if (p >= s) {
          var M = e ? null : Jh(t);
          if (M)
            return Yr(M);
          v = !1, f = ur, w = new An();
        } else
          w = e ? [] : m;
        t:
          for (; ++a < p; ) {
            var R = t[a], P = e ? e(R) : R;
            if (R = n || R !== 0 ? R : 0, v && P === P) {
              for (var $ = w.length; $--; )
                if (w[$] === P)
                  continue t;
              e && w.push(P), m.push(R);
            } else
              f(w, P, n) || (w !== m && w.push(P), m.push(R));
          }
        return m;
      }
      function Go(t, e) {
        return e = dn(e, t), t = Pl(t, e), t == null || delete t[Ye(Me(e))];
      }
      function ul(t, e, n, a) {
        return mr(t, e, n(Tn(t, e)), a);
      }
      function hi(t, e, n, a) {
        for (var f = t.length, p = a ? f : -1; (a ? p-- : ++p < f) && e(t[p], p, t); )
          ;
        return n ? Ie(t, a ? 0 : p, a ? p + 1 : f) : Ie(t, a ? p + 1 : 0, a ? f : p);
      }
      function ll(t, e) {
        var n = t;
        return n instanceof wt && (n = n.value()), _o(e, function(a, f) {
          return f.func.apply(f.thisArg, sn([a], f.args));
        }, n);
      }
      function Ho(t, e, n) {
        var a = t.length;
        if (a < 2)
          return a ? pn(t[0]) : [];
        for (var f = -1, p = C(a); ++f < a; )
          for (var v = t[f], m = -1; ++m < a; )
            m != f && (p[f] = dr(p[f] || v, t[m], e, n));
        return pn(Qt(p, 1), e, n);
      }
      function sl(t, e, n) {
        for (var a = -1, f = t.length, p = e.length, v = {}; ++a < f; ) {
          var m = a < p ? e[a] : r;
          n(v, t[a], m);
        }
        return v;
      }
      function qo(t) {
        return Ht(t) ? t : [];
      }
      function Yo(t) {
        return typeof t == "function" ? t : pe;
      }
      function dn(t, e) {
        return ft(t) ? t : ea(t, e) ? [t] : Bl(Ot(t));
      }
      var Uh = mt;
      function gn(t, e, n) {
        var a = t.length;
        return n = n === r ? a : n, !e && n >= a ? t : Ie(t, e, n);
      }
      var fl = Cc || function(t) {
        return Vt.clearTimeout(t);
      };
      function cl(t, e) {
        if (e)
          return t.slice();
        var n = t.length, a = Ru ? Ru(n) : new t.constructor(n);
        return t.copy(a), a;
      }
      function zo(t) {
        var e = new t.constructor(t.byteLength);
        return new Vr(e).set(new Vr(t)), e;
      }
      function Kh(t, e) {
        var n = e ? zo(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.byteLength);
      }
      function Gh(t) {
        var e = new t.constructor(t.source, Xa.exec(t));
        return e.lastIndex = t.lastIndex, e;
      }
      function Hh(t) {
        return hr ? Dt(hr.call(t)) : {};
      }
      function hl(t, e) {
        var n = e ? zo(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length);
      }
      function pl(t, e) {
        if (t !== e) {
          var n = t !== r, a = t === null, f = t === t, p = _e(t), v = e !== r, m = e === null, w = e === e, M = _e(e);
          if (!m && !M && !p && t > e || p && v && w && !m && !M || a && v && w || !n && w || !f)
            return 1;
          if (!a && !p && !M && t < e || M && n && f && !a && !p || m && n && f || !v && f || !w)
            return -1;
        }
        return 0;
      }
      function qh(t, e, n) {
        for (var a = -1, f = t.criteria, p = e.criteria, v = f.length, m = n.length; ++a < v; ) {
          var w = pl(f[a], p[a]);
          if (w) {
            if (a >= m)
              return w;
            var M = n[a];
            return w * (M == "desc" ? -1 : 1);
          }
        }
        return t.index - e.index;
      }
      function dl(t, e, n, a) {
        for (var f = -1, p = t.length, v = n.length, m = -1, w = e.length, M = Zt(p - v, 0), R = C(w + M), P = !a; ++m < w; )
          R[m] = e[m];
        for (; ++f < v; )
          (P || f < p) && (R[n[f]] = t[f]);
        for (; M--; )
          R[m++] = t[f++];
        return R;
      }
      function gl(t, e, n, a) {
        for (var f = -1, p = t.length, v = -1, m = n.length, w = -1, M = e.length, R = Zt(p - m, 0), P = C(R + M), $ = !a; ++f < R; )
          P[f] = t[f];
        for (var Y = f; ++w < M; )
          P[Y + w] = e[w];
        for (; ++v < m; )
          ($ || f < p) && (P[Y + n[v]] = t[f++]);
        return P;
      }
      function fe(t, e) {
        var n = -1, a = t.length;
        for (e || (e = C(a)); ++n < a; )
          e[n] = t[n];
        return e;
      }
      function qe(t, e, n, a) {
        var f = !n;
        n || (n = {});
        for (var p = -1, v = e.length; ++p < v; ) {
          var m = e[p], w = a ? a(n[m], t[m], m, n, t) : r;
          w === r && (w = t[m]), f ? Je(n, m, w) : pr(n, m, w);
        }
        return n;
      }
      function Yh(t, e) {
        return qe(t, ta(t), e);
      }
      function zh(t, e) {
        return qe(t, Cl(t), e);
      }
      function pi(t, e) {
        return function(n, a) {
          var f = ft(n) ? Vf : gh, p = e ? e() : {};
          return f(n, t, V(a, 2), p);
        };
      }
      function zn(t) {
        return mt(function(e, n) {
          var a = -1, f = n.length, p = f > 1 ? n[f - 1] : r, v = f > 2 ? n[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (f--, p) : r, v && ue(n[0], n[1], v) && (p = f < 3 ? r : p, f = 1), e = Dt(e); ++a < f; ) {
            var m = n[a];
            m && t(e, m, a, p);
          }
          return e;
        });
      }
      function vl(t, e) {
        return function(n, a) {
          if (n == null)
            return n;
          if (!ce(n))
            return t(n, a);
          for (var f = n.length, p = e ? f : -1, v = Dt(n); (e ? p-- : ++p < f) && a(v[p], p, v) !== !1; )
            ;
          return n;
        };
      }
      function ml(t) {
        return function(e, n, a) {
          for (var f = -1, p = Dt(e), v = a(e), m = v.length; m--; ) {
            var w = v[t ? m : ++f];
            if (n(p[w], w, p) === !1)
              break;
          }
          return e;
        };
      }
      function Xh(t, e, n) {
        var a = e & L, f = _r(t);
        function p() {
          var v = this && this !== Vt && this instanceof p ? f : t;
          return v.apply(a ? n : this, arguments);
        }
        return p;
      }
      function _l(t) {
        return function(e) {
          e = Ot(e);
          var n = $n(e) ? We(e) : r, a = n ? n[0] : e.charAt(0), f = n ? gn(n, 1).join("") : e.slice(1);
          return a[t]() + f;
        };
      }
      function Xn(t) {
        return function(e) {
          return _o(vs(gs(e).replace(Bf, "")), t, "");
        };
      }
      function _r(t) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new t();
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3]);
            case 5:
              return new t(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var n = Yn(t.prototype), a = t.apply(n, e);
          return Ft(a) ? a : n;
        };
      }
      function Zh(t, e, n) {
        var a = _r(t);
        function f() {
          for (var p = arguments.length, v = C(p), m = p, w = Zn(f); m--; )
            v[m] = arguments[m];
          var M = p < 3 && v[0] !== w && v[p - 1] !== w ? [] : fn(v, w);
          if (p -= M.length, p < n)
            return Sl(
              t,
              e,
              di,
              f.placeholder,
              r,
              v,
              M,
              r,
              r,
              n - p
            );
          var R = this && this !== Vt && this instanceof f ? a : t;
          return ge(R, this, v);
        }
        return f;
      }
      function bl(t) {
        return function(e, n, a) {
          var f = Dt(e);
          if (!ce(e)) {
            var p = V(n, 3);
            e = jt(e), n = function(m) {
              return p(f[m], m, f);
            };
          }
          var v = t(e, n, a);
          return v > -1 ? f[p ? e[v] : v] : r;
        };
      }
      function yl(t) {
        return Qe(function(e) {
          var n = e.length, a = n, f = Ce.prototype.thru;
          for (t && e.reverse(); a--; ) {
            var p = e[a];
            if (typeof p != "function")
              throw new Te(c);
            if (f && !v && _i(p) == "wrapper")
              var v = new Ce([], !0);
          }
          for (a = v ? a : n; ++a < n; ) {
            p = e[a];
            var m = _i(p), w = m == "wrapper" ? Vo(p) : r;
            w && na(w[0]) && w[1] == (rt | W | lt | it) && !w[4].length && w[9] == 1 ? v = v[_i(w[0])].apply(v, w[3]) : v = p.length == 1 && na(p) ? v[m]() : v.thru(p);
          }
          return function() {
            var M = arguments, R = M[0];
            if (v && M.length == 1 && ft(R))
              return v.plant(R).value();
            for (var P = 0, $ = n ? e[P].apply(this, M) : R; ++P < n; )
              $ = e[P].call(this, $);
            return $;
          };
        });
      }
      function di(t, e, n, a, f, p, v, m, w, M) {
        var R = e & rt, P = e & L, $ = e & F, Y = e & (W | dt), tt = e & j, gt = $ ? r : _r(t);
        function et() {
          for (var yt = arguments.length, St = C(yt), be = yt; be--; )
            St[be] = arguments[be];
          if (Y)
            var le = Zn(et), ye = uc(St, le);
          if (a && (St = dl(St, a, f, Y)), p && (St = gl(St, p, v, Y)), yt -= ye, Y && yt < M) {
            var qt = fn(St, le);
            return Sl(
              t,
              e,
              di,
              et.placeholder,
              n,
              St,
              qt,
              m,
              w,
              M - yt
            );
          }
          var $e = P ? n : this, rn = $ ? $e[t] : t;
          return yt = St.length, m ? St = gp(St, m) : tt && yt > 1 && St.reverse(), R && w < yt && (St.length = w), this && this !== Vt && this instanceof et && (rn = gt || _r(rn)), rn.apply($e, St);
        }
        return et;
      }
      function wl(t, e) {
        return function(n, a) {
          return Sh(n, t, e(a), {});
        };
      }
      function gi(t, e) {
        return function(n, a) {
          var f;
          if (n === r && a === r)
            return e;
          if (n !== r && (f = n), a !== r) {
            if (f === r)
              return a;
            typeof n == "string" || typeof a == "string" ? (n = me(n), a = me(a)) : (n = al(n), a = al(a)), f = t(n, a);
          }
          return f;
        };
      }
      function Xo(t) {
        return Qe(function(e) {
          return e = Pt(e, ve(V())), mt(function(n) {
            var a = this;
            return t(e, function(f) {
              return ge(f, a, n);
            });
          });
        });
      }
      function vi(t, e) {
        e = e === r ? " " : me(e);
        var n = e.length;
        if (n < 2)
          return n ? Uo(e, t) : e;
        var a = Uo(e, ni(t / Un(e)));
        return $n(e) ? gn(We(a), 0, t).join("") : a.slice(0, t);
      }
      function jh(t, e, n, a) {
        var f = e & L, p = _r(t);
        function v() {
          for (var m = -1, w = arguments.length, M = -1, R = a.length, P = C(R + w), $ = this && this !== Vt && this instanceof v ? p : t; ++M < R; )
            P[M] = a[M];
          for (; w--; )
            P[M++] = arguments[++m];
          return ge($, f ? n : this, P);
        }
        return v;
      }
      function xl(t) {
        return function(e, n, a) {
          return a && typeof a != "number" && ue(e, n, a) && (n = a = r), e = nn(e), n === r ? (n = e, e = 0) : n = nn(n), a = a === r ? e < n ? 1 : -1 : nn(a), Nh(e, n, a, t);
        };
      }
      function mi(t) {
        return function(e, n) {
          return typeof e == "string" && typeof n == "string" || (e = Re(e), n = Re(n)), t(e, n);
        };
      }
      function Sl(t, e, n, a, f, p, v, m, w, M) {
        var R = e & W, P = R ? v : r, $ = R ? r : v, Y = R ? p : r, tt = R ? r : p;
        e |= R ? lt : ct, e &= ~(R ? ct : lt), e & k || (e &= ~(L | F));
        var gt = [
          t,
          e,
          f,
          Y,
          P,
          tt,
          $,
          m,
          w,
          M
        ], et = n.apply(r, gt);
        return na(t) && Nl(et, gt), et.placeholder = a, Fl(et, t, e);
      }
      function Zo(t) {
        var e = Xt[t];
        return function(n, a) {
          if (n = Re(n), a = a == null ? 0 : ne(pt(a), 292), a && Fu(n)) {
            var f = (Ot(n) + "e").split("e"), p = e(f[0] + "e" + (+f[1] + a));
            return f = (Ot(p) + "e").split("e"), +(f[0] + "e" + (+f[1] - a));
          }
          return e(n);
        };
      }
      var Jh = Hn && 1 / Yr(new Hn([, -0]))[1] == G ? function(t) {
        return new Hn(t);
      } : ma;
      function El(t) {
        return function(e) {
          var n = re(e);
          return n == Ne ? Ao(e) : n == Fe ? dc(e) : ac(e, t(e));
        };
      }
      function Ve(t, e, n, a, f, p, v, m) {
        var w = e & F;
        if (!w && typeof t != "function")
          throw new Te(c);
        var M = a ? a.length : 0;
        if (M || (e &= ~(lt | ct), a = f = r), v = v === r ? v : Zt(pt(v), 0), m = m === r ? m : pt(m), M -= f ? f.length : 0, e & ct) {
          var R = a, P = f;
          a = f = r;
        }
        var $ = w ? r : Vo(t), Y = [
          t,
          e,
          n,
          a,
          f,
          R,
          P,
          p,
          v,
          m
        ];
        if ($ && hp(Y, $), t = Y[0], e = Y[1], n = Y[2], a = Y[3], f = Y[4], m = Y[9] = Y[9] === r ? w ? 0 : t.length : Zt(Y[9] - M, 0), !m && e & (W | dt) && (e &= ~(W | dt)), !e || e == L)
          var tt = Xh(t, e, n);
        else
          e == W || e == dt ? tt = Zh(t, e, m) : (e == lt || e == (L | lt)) && !f.length ? tt = jh(t, e, n, a) : tt = di.apply(r, Y);
        var gt = $ ? il : Nl;
        return Fl(gt(tt, Y), t, e);
      }
      function Al(t, e, n, a) {
        return t === r || ke(t, Gn[n]) && !Tt.call(a, n) ? e : t;
      }
      function Ol(t, e, n, a, f, p) {
        return Ft(t) && Ft(e) && (p.set(e, t), fi(t, e, r, Ol, p), p.delete(e)), t;
      }
      function Vh(t) {
        return wr(t) ? r : t;
      }
      function Tl(t, e, n, a, f, p) {
        var v = n & T, m = t.length, w = e.length;
        if (m != w && !(v && w > m))
          return !1;
        var M = p.get(t), R = p.get(e);
        if (M && R)
          return M == e && R == t;
        var P = -1, $ = !0, Y = n & S ? new An() : r;
        for (p.set(t, e), p.set(e, t); ++P < m; ) {
          var tt = t[P], gt = e[P];
          if (a)
            var et = v ? a(gt, tt, P, e, t, p) : a(tt, gt, P, t, e, p);
          if (et !== r) {
            if (et)
              continue;
            $ = !1;
            break;
          }
          if (Y) {
            if (!bo(e, function(yt, St) {
              if (!ur(Y, St) && (tt === yt || f(tt, yt, n, a, p)))
                return Y.push(St);
            })) {
              $ = !1;
              break;
            }
          } else if (!(tt === gt || f(tt, gt, n, a, p))) {
            $ = !1;
            break;
          }
        }
        return p.delete(t), p.delete(e), $;
      }
      function Qh(t, e, n, a, f, p, v) {
        switch (n) {
          case Wn:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            t = t.buffer, e = e.buffer;
          case ar:
            return !(t.byteLength != e.byteLength || !p(new Vr(t), new Vr(e)));
          case ee:
          case Jt:
          case nr:
            return ke(+t, +e);
          case Br:
            return t.name == e.name && t.message == e.message;
          case rr:
          case ir:
            return t == e + "";
          case Ne:
            var m = Ao;
          case Fe:
            var w = a & T;
            if (m || (m = Yr), t.size != e.size && !w)
              return !1;
            var M = v.get(t);
            if (M)
              return M == e;
            a |= S, v.set(t, e);
            var R = Tl(m(t), m(e), a, f, p, v);
            return v.delete(t), R;
          case $r:
            if (hr)
              return hr.call(t) == hr.call(e);
        }
        return !1;
      }
      function tp(t, e, n, a, f, p) {
        var v = n & T, m = jo(t), w = m.length, M = jo(e), R = M.length;
        if (w != R && !v)
          return !1;
        for (var P = w; P--; ) {
          var $ = m[P];
          if (!(v ? $ in e : Tt.call(e, $)))
            return !1;
        }
        var Y = p.get(t), tt = p.get(e);
        if (Y && tt)
          return Y == e && tt == t;
        var gt = !0;
        p.set(t, e), p.set(e, t);
        for (var et = v; ++P < w; ) {
          $ = m[P];
          var yt = t[$], St = e[$];
          if (a)
            var be = v ? a(St, yt, $, e, t, p) : a(yt, St, $, t, e, p);
          if (!(be === r ? yt === St || f(yt, St, n, a, p) : be)) {
            gt = !1;
            break;
          }
          et || (et = $ == "constructor");
        }
        if (gt && !et) {
          var le = t.constructor, ye = e.constructor;
          le != ye && "constructor" in t && "constructor" in e && !(typeof le == "function" && le instanceof le && typeof ye == "function" && ye instanceof ye) && (gt = !1);
        }
        return p.delete(t), p.delete(e), gt;
      }
      function Qe(t) {
        return ia(Ll(t, r, Kl), t + "");
      }
      function jo(t) {
        return zu(t, jt, ta);
      }
      function Jo(t) {
        return zu(t, he, Cl);
      }
      var Vo = ii ? function(t) {
        return ii.get(t);
      } : ma;
      function _i(t) {
        for (var e = t.name + "", n = qn[e], a = Tt.call(qn, e) ? n.length : 0; a--; ) {
          var f = n[a], p = f.func;
          if (p == null || p == t)
            return f.name;
        }
        return e;
      }
      function Zn(t) {
        var e = Tt.call(h, "placeholder") ? h : t;
        return e.placeholder;
      }
      function V() {
        var t = h.iteratee || ga;
        return t = t === ga ? ju : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function bi(t, e) {
        var n = t.__data__;
        return lp(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
      }
      function Qo(t) {
        for (var e = jt(t), n = e.length; n--; ) {
          var a = e[n], f = t[a];
          e[n] = [a, f, Ml(f)];
        }
        return e;
      }
      function Cn(t, e) {
        var n = cc(t, e);
        return Zu(n) ? n : r;
      }
      function ep(t) {
        var e = Tt.call(t, Sn), n = t[Sn];
        try {
          t[Sn] = r;
          var a = !0;
        } catch {
        }
        var f = jr.call(t);
        return a && (e ? t[Sn] = n : delete t[Sn]), f;
      }
      var ta = To ? function(t) {
        return t == null ? [] : (t = Dt(t), ln(To(t), function(e) {
          return Pu.call(t, e);
        }));
      } : _a, Cl = To ? function(t) {
        for (var e = []; t; )
          sn(e, ta(t)), t = Qr(t);
        return e;
      } : _a, re = ae;
      (Co && re(new Co(new ArrayBuffer(1))) != Wn || sr && re(new sr()) != Ne || Do && re(Do.resolve()) != Ha || Hn && re(new Hn()) != Fe || fr && re(new fr()) != or) && (re = function(t) {
        var e = ae(t), n = e == Xe ? t.constructor : r, a = n ? Dn(n) : "";
        if (a)
          switch (a) {
            case Wc:
              return Wn;
            case Bc:
              return Ne;
            case kc:
              return Ha;
            case $c:
              return Fe;
            case Uc:
              return or;
          }
        return e;
      });
      function np(t, e, n) {
        for (var a = -1, f = n.length; ++a < f; ) {
          var p = n[a], v = p.size;
          switch (p.type) {
            case "drop":
              t += v;
              break;
            case "dropRight":
              e -= v;
              break;
            case "take":
              e = ne(e, t + v);
              break;
            case "takeRight":
              t = Zt(t, e - v);
              break;
          }
        }
        return { start: t, end: e };
      }
      function rp(t) {
        var e = t.match(sf);
        return e ? e[1].split(ff) : [];
      }
      function Dl(t, e, n) {
        e = dn(e, t);
        for (var a = -1, f = e.length, p = !1; ++a < f; ) {
          var v = Ye(e[a]);
          if (!(p = t != null && n(t, v)))
            break;
          t = t[v];
        }
        return p || ++a != f ? p : (f = t == null ? 0 : t.length, !!f && Oi(f) && tn(v, f) && (ft(t) || In(t)));
      }
      function ip(t) {
        var e = t.length, n = new t.constructor(e);
        return e && typeof t[0] == "string" && Tt.call(t, "index") && (n.index = t.index, n.input = t.input), n;
      }
      function Il(t) {
        return typeof t.constructor == "function" && !br(t) ? Yn(Qr(t)) : {};
      }
      function op(t, e, n) {
        var a = t.constructor;
        switch (e) {
          case ar:
            return zo(t);
          case ee:
          case Jt:
            return new a(+t);
          case Wn:
            return Kh(t, n);
          case Vi:
          case Qi:
          case to:
          case eo:
          case no:
          case ro:
          case io:
          case oo:
          case ao:
            return hl(t, n);
          case Ne:
            return new a();
          case nr:
          case ir:
            return new a(t);
          case rr:
            return Gh(t);
          case Fe:
            return new a();
          case $r:
            return Hh(t);
        }
      }
      function ap(t, e) {
        var n = e.length;
        if (!n)
          return t;
        var a = n - 1;
        return e[a] = (n > 1 ? "& " : "") + e[a], e = e.join(n > 2 ? ", " : " "), t.replace(lf, `{
/* [wrapped with ` + e + `] */
`);
      }
      function up(t) {
        return ft(t) || In(t) || !!(Nu && t && t[Nu]);
      }
      function tn(t, e) {
        var n = typeof t;
        return e = e == null ? Z : e, !!e && (n == "number" || n != "symbol" && bf.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }
      function ue(t, e, n) {
        if (!Ft(n))
          return !1;
        var a = typeof e;
        return (a == "number" ? ce(n) && tn(e, n.length) : a == "string" && e in n) ? ke(n[e], t) : !1;
      }
      function ea(t, e) {
        if (ft(t))
          return !1;
        var n = typeof t;
        return n == "number" || n == "symbol" || n == "boolean" || t == null || _e(t) ? !0 : rf.test(t) || !nf.test(t) || e != null && t in Dt(e);
      }
      function lp(t) {
        var e = typeof t;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
      }
      function na(t) {
        var e = _i(t), n = h[e];
        if (typeof n != "function" || !(e in wt.prototype))
          return !1;
        if (t === n)
          return !0;
        var a = Vo(n);
        return !!a && t === a[0];
      }
      function sp(t) {
        return !!Mu && Mu in t;
      }
      var fp = Xr ? en : ba;
      function br(t) {
        var e = t && t.constructor, n = typeof e == "function" && e.prototype || Gn;
        return t === n;
      }
      function Ml(t) {
        return t === t && !Ft(t);
      }
      function Rl(t, e) {
        return function(n) {
          return n == null ? !1 : n[t] === e && (e !== r || t in Dt(n));
        };
      }
      function cp(t) {
        var e = Ei(t, function(a) {
          return n.size === _ && n.clear(), a;
        }), n = e.cache;
        return e;
      }
      function hp(t, e) {
        var n = t[1], a = e[1], f = n | a, p = f < (L | F | rt), v = a == rt && n == W || a == rt && n == it && t[7].length <= e[8] || a == (rt | it) && e[7].length <= e[8] && n == W;
        if (!(p || v))
          return t;
        a & L && (t[2] = e[2], f |= n & L ? 0 : k);
        var m = e[3];
        if (m) {
          var w = t[3];
          t[3] = w ? dl(w, m, e[4]) : m, t[4] = w ? fn(t[3], b) : e[4];
        }
        return m = e[5], m && (w = t[5], t[5] = w ? gl(w, m, e[6]) : m, t[6] = w ? fn(t[5], b) : e[6]), m = e[7], m && (t[7] = m), a & rt && (t[8] = t[8] == null ? e[8] : ne(t[8], e[8])), t[9] == null && (t[9] = e[9]), t[0] = e[0], t[1] = f, t;
      }
      function pp(t) {
        var e = [];
        if (t != null)
          for (var n in Dt(t))
            e.push(n);
        return e;
      }
      function dp(t) {
        return jr.call(t);
      }
      function Ll(t, e, n) {
        return e = Zt(e === r ? t.length - 1 : e, 0), function() {
          for (var a = arguments, f = -1, p = Zt(a.length - e, 0), v = C(p); ++f < p; )
            v[f] = a[e + f];
          f = -1;
          for (var m = C(e + 1); ++f < e; )
            m[f] = a[f];
          return m[e] = n(v), ge(t, this, m);
        };
      }
      function Pl(t, e) {
        return e.length < 2 ? t : Tn(t, Ie(e, 0, -1));
      }
      function gp(t, e) {
        for (var n = t.length, a = ne(e.length, n), f = fe(t); a--; ) {
          var p = e[a];
          t[a] = tn(p, n) ? f[p] : r;
        }
        return t;
      }
      function ra(t, e) {
        if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
          return t[e];
      }
      var Nl = Wl(il), yr = Ic || function(t, e) {
        return Vt.setTimeout(t, e);
      }, ia = Wl(Bh);
      function Fl(t, e, n) {
        var a = e + "";
        return ia(t, ap(a, vp(rp(a), n)));
      }
      function Wl(t) {
        var e = 0, n = 0;
        return function() {
          var a = Pc(), f = X - (a - n);
          if (n = a, f > 0) {
            if (++e >= Nt)
              return arguments[0];
          } else
            e = 0;
          return t.apply(r, arguments);
        };
      }
      function yi(t, e) {
        var n = -1, a = t.length, f = a - 1;
        for (e = e === r ? a : e; ++n < e; ) {
          var p = $o(n, f), v = t[p];
          t[p] = t[n], t[n] = v;
        }
        return t.length = e, t;
      }
      var Bl = cp(function(t) {
        var e = [];
        return t.charCodeAt(0) === 46 && e.push(""), t.replace(of, function(n, a, f, p) {
          e.push(f ? p.replace(pf, "$1") : a || n);
        }), e;
      });
      function Ye(t) {
        if (typeof t == "string" || _e(t))
          return t;
        var e = t + "";
        return e == "0" && 1 / t == -G ? "-0" : e;
      }
      function Dn(t) {
        if (t != null) {
          try {
            return Zr.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function vp(t, e) {
        return Oe(ot, function(n) {
          var a = "_." + n[0];
          e & n[1] && !Hr(t, a) && t.push(a);
        }), t.sort();
      }
      function kl(t) {
        if (t instanceof wt)
          return t.clone();
        var e = new Ce(t.__wrapped__, t.__chain__);
        return e.__actions__ = fe(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
      }
      function mp(t, e, n) {
        (n ? ue(t, e, n) : e === r) ? e = 1 : e = Zt(pt(e), 0);
        var a = t == null ? 0 : t.length;
        if (!a || e < 1)
          return [];
        for (var f = 0, p = 0, v = C(ni(a / e)); f < a; )
          v[p++] = Ie(t, f, f += e);
        return v;
      }
      function _p(t) {
        for (var e = -1, n = t == null ? 0 : t.length, a = 0, f = []; ++e < n; ) {
          var p = t[e];
          p && (f[a++] = p);
        }
        return f;
      }
      function bp() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var e = C(t - 1), n = arguments[0], a = t; a--; )
          e[a - 1] = arguments[a];
        return sn(ft(n) ? fe(n) : [n], Qt(e, 1));
      }
      var yp = mt(function(t, e) {
        return Ht(t) ? dr(t, Qt(e, 1, Ht, !0)) : [];
      }), wp = mt(function(t, e) {
        var n = Me(e);
        return Ht(n) && (n = r), Ht(t) ? dr(t, Qt(e, 1, Ht, !0), V(n, 2)) : [];
      }), xp = mt(function(t, e) {
        var n = Me(e);
        return Ht(n) && (n = r), Ht(t) ? dr(t, Qt(e, 1, Ht, !0), r, n) : [];
      });
      function Sp(t, e, n) {
        var a = t == null ? 0 : t.length;
        return a ? (e = n || e === r ? 1 : pt(e), Ie(t, e < 0 ? 0 : e, a)) : [];
      }
      function Ep(t, e, n) {
        var a = t == null ? 0 : t.length;
        return a ? (e = n || e === r ? 1 : pt(e), e = a - e, Ie(t, 0, e < 0 ? 0 : e)) : [];
      }
      function Ap(t, e) {
        return t && t.length ? hi(t, V(e, 3), !0, !0) : [];
      }
      function Op(t, e) {
        return t && t.length ? hi(t, V(e, 3), !0) : [];
      }
      function Tp(t, e, n, a) {
        var f = t == null ? 0 : t.length;
        return f ? (n && typeof n != "number" && ue(t, e, n) && (n = 0, a = f), bh(t, e, n, a)) : [];
      }
      function $l(t, e, n) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var f = n == null ? 0 : pt(n);
        return f < 0 && (f = Zt(a + f, 0)), qr(t, V(e, 3), f);
      }
      function Ul(t, e, n) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var f = a - 1;
        return n !== r && (f = pt(n), f = n < 0 ? Zt(a + f, 0) : ne(f, a - 1)), qr(t, V(e, 3), f, !0);
      }
      function Kl(t) {
        var e = t == null ? 0 : t.length;
        return e ? Qt(t, 1) : [];
      }
      function Cp(t) {
        var e = t == null ? 0 : t.length;
        return e ? Qt(t, G) : [];
      }
      function Dp(t, e) {
        var n = t == null ? 0 : t.length;
        return n ? (e = e === r ? 1 : pt(e), Qt(t, e)) : [];
      }
      function Ip(t) {
        for (var e = -1, n = t == null ? 0 : t.length, a = {}; ++e < n; ) {
          var f = t[e];
          a[f[0]] = f[1];
        }
        return a;
      }
      function Gl(t) {
        return t && t.length ? t[0] : r;
      }
      function Mp(t, e, n) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var f = n == null ? 0 : pt(n);
        return f < 0 && (f = Zt(a + f, 0)), kn(t, e, f);
      }
      function Rp(t) {
        var e = t == null ? 0 : t.length;
        return e ? Ie(t, 0, -1) : [];
      }
      var Lp = mt(function(t) {
        var e = Pt(t, qo);
        return e.length && e[0] === t[0] ? No(e) : [];
      }), Pp = mt(function(t) {
        var e = Me(t), n = Pt(t, qo);
        return e === Me(n) ? e = r : n.pop(), n.length && n[0] === t[0] ? No(n, V(e, 2)) : [];
      }), Np = mt(function(t) {
        var e = Me(t), n = Pt(t, qo);
        return e = typeof e == "function" ? e : r, e && n.pop(), n.length && n[0] === t[0] ? No(n, r, e) : [];
      });
      function Fp(t, e) {
        return t == null ? "" : Rc.call(t, e);
      }
      function Me(t) {
        var e = t == null ? 0 : t.length;
        return e ? t[e - 1] : r;
      }
      function Wp(t, e, n) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var f = a;
        return n !== r && (f = pt(n), f = f < 0 ? Zt(a + f, 0) : ne(f, a - 1)), e === e ? vc(t, e, f) : qr(t, Su, f, !0);
      }
      function Bp(t, e) {
        return t && t.length ? tl(t, pt(e)) : r;
      }
      var kp = mt(Hl);
      function Hl(t, e) {
        return t && t.length && e && e.length ? ko(t, e) : t;
      }
      function $p(t, e, n) {
        return t && t.length && e && e.length ? ko(t, e, V(n, 2)) : t;
      }
      function Up(t, e, n) {
        return t && t.length && e && e.length ? ko(t, e, r, n) : t;
      }
      var Kp = Qe(function(t, e) {
        var n = t == null ? 0 : t.length, a = Mo(t, e);
        return rl(t, Pt(e, function(f) {
          return tn(f, n) ? +f : f;
        }).sort(pl)), a;
      });
      function Gp(t, e) {
        var n = [];
        if (!(t && t.length))
          return n;
        var a = -1, f = [], p = t.length;
        for (e = V(e, 3); ++a < p; ) {
          var v = t[a];
          e(v, a, t) && (n.push(v), f.push(a));
        }
        return rl(t, f), n;
      }
      function oa(t) {
        return t == null ? t : Fc.call(t);
      }
      function Hp(t, e, n) {
        var a = t == null ? 0 : t.length;
        return a ? (n && typeof n != "number" && ue(t, e, n) ? (e = 0, n = a) : (e = e == null ? 0 : pt(e), n = n === r ? a : pt(n)), Ie(t, e, n)) : [];
      }
      function qp(t, e) {
        return ci(t, e);
      }
      function Yp(t, e, n) {
        return Ko(t, e, V(n, 2));
      }
      function zp(t, e) {
        var n = t == null ? 0 : t.length;
        if (n) {
          var a = ci(t, e);
          if (a < n && ke(t[a], e))
            return a;
        }
        return -1;
      }
      function Xp(t, e) {
        return ci(t, e, !0);
      }
      function Zp(t, e, n) {
        return Ko(t, e, V(n, 2), !0);
      }
      function jp(t, e) {
        var n = t == null ? 0 : t.length;
        if (n) {
          var a = ci(t, e, !0) - 1;
          if (ke(t[a], e))
            return a;
        }
        return -1;
      }
      function Jp(t) {
        return t && t.length ? ol(t) : [];
      }
      function Vp(t, e) {
        return t && t.length ? ol(t, V(e, 2)) : [];
      }
      function Qp(t) {
        var e = t == null ? 0 : t.length;
        return e ? Ie(t, 1, e) : [];
      }
      function td(t, e, n) {
        return t && t.length ? (e = n || e === r ? 1 : pt(e), Ie(t, 0, e < 0 ? 0 : e)) : [];
      }
      function ed(t, e, n) {
        var a = t == null ? 0 : t.length;
        return a ? (e = n || e === r ? 1 : pt(e), e = a - e, Ie(t, e < 0 ? 0 : e, a)) : [];
      }
      function nd(t, e) {
        return t && t.length ? hi(t, V(e, 3), !1, !0) : [];
      }
      function rd(t, e) {
        return t && t.length ? hi(t, V(e, 3)) : [];
      }
      var id = mt(function(t) {
        return pn(Qt(t, 1, Ht, !0));
      }), od = mt(function(t) {
        var e = Me(t);
        return Ht(e) && (e = r), pn(Qt(t, 1, Ht, !0), V(e, 2));
      }), ad = mt(function(t) {
        var e = Me(t);
        return e = typeof e == "function" ? e : r, pn(Qt(t, 1, Ht, !0), r, e);
      });
      function ud(t) {
        return t && t.length ? pn(t) : [];
      }
      function ld(t, e) {
        return t && t.length ? pn(t, V(e, 2)) : [];
      }
      function sd(t, e) {
        return e = typeof e == "function" ? e : r, t && t.length ? pn(t, r, e) : [];
      }
      function aa(t) {
        if (!(t && t.length))
          return [];
        var e = 0;
        return t = ln(t, function(n) {
          if (Ht(n))
            return e = Zt(n.length, e), !0;
        }), So(e, function(n) {
          return Pt(t, yo(n));
        });
      }
      function ql(t, e) {
        if (!(t && t.length))
          return [];
        var n = aa(t);
        return e == null ? n : Pt(n, function(a) {
          return ge(e, r, a);
        });
      }
      var fd = mt(function(t, e) {
        return Ht(t) ? dr(t, e) : [];
      }), cd = mt(function(t) {
        return Ho(ln(t, Ht));
      }), hd = mt(function(t) {
        var e = Me(t);
        return Ht(e) && (e = r), Ho(ln(t, Ht), V(e, 2));
      }), pd = mt(function(t) {
        var e = Me(t);
        return e = typeof e == "function" ? e : r, Ho(ln(t, Ht), r, e);
      }), dd = mt(aa);
      function gd(t, e) {
        return sl(t || [], e || [], pr);
      }
      function vd(t, e) {
        return sl(t || [], e || [], mr);
      }
      var md = mt(function(t) {
        var e = t.length, n = e > 1 ? t[e - 1] : r;
        return n = typeof n == "function" ? (t.pop(), n) : r, ql(t, n);
      });
      function Yl(t) {
        var e = h(t);
        return e.__chain__ = !0, e;
      }
      function _d(t, e) {
        return e(t), t;
      }
      function wi(t, e) {
        return e(t);
      }
      var bd = Qe(function(t) {
        var e = t.length, n = e ? t[0] : 0, a = this.__wrapped__, f = function(p) {
          return Mo(p, t);
        };
        return e > 1 || this.__actions__.length || !(a instanceof wt) || !tn(n) ? this.thru(f) : (a = a.slice(n, +n + (e ? 1 : 0)), a.__actions__.push({
          func: wi,
          args: [f],
          thisArg: r
        }), new Ce(a, this.__chain__).thru(function(p) {
          return e && !p.length && p.push(r), p;
        }));
      });
      function yd() {
        return Yl(this);
      }
      function wd() {
        return new Ce(this.value(), this.__chain__);
      }
      function xd() {
        this.__values__ === r && (this.__values__ = as(this.value()));
        var t = this.__index__ >= this.__values__.length, e = t ? r : this.__values__[this.__index__++];
        return { done: t, value: e };
      }
      function Sd() {
        return this;
      }
      function Ed(t) {
        for (var e, n = this; n instanceof ai; ) {
          var a = kl(n);
          a.__index__ = 0, a.__values__ = r, e ? f.__wrapped__ = a : e = a;
          var f = a;
          n = n.__wrapped__;
        }
        return f.__wrapped__ = t, e;
      }
      function Ad() {
        var t = this.__wrapped__;
        if (t instanceof wt) {
          var e = t;
          return this.__actions__.length && (e = new wt(this)), e = e.reverse(), e.__actions__.push({
            func: wi,
            args: [oa],
            thisArg: r
          }), new Ce(e, this.__chain__);
        }
        return this.thru(oa);
      }
      function Od() {
        return ll(this.__wrapped__, this.__actions__);
      }
      var Td = pi(function(t, e, n) {
        Tt.call(t, n) ? ++t[n] : Je(t, n, 1);
      });
      function Cd(t, e, n) {
        var a = ft(t) ? wu : _h;
        return n && ue(t, e, n) && (e = r), a(t, V(e, 3));
      }
      function Dd(t, e) {
        var n = ft(t) ? ln : qu;
        return n(t, V(e, 3));
      }
      var Id = bl($l), Md = bl(Ul);
      function Rd(t, e) {
        return Qt(xi(t, e), 1);
      }
      function Ld(t, e) {
        return Qt(xi(t, e), G);
      }
      function Pd(t, e, n) {
        return n = n === r ? 1 : pt(n), Qt(xi(t, e), n);
      }
      function zl(t, e) {
        var n = ft(t) ? Oe : hn;
        return n(t, V(e, 3));
      }
      function Xl(t, e) {
        var n = ft(t) ? Qf : Hu;
        return n(t, V(e, 3));
      }
      var Nd = pi(function(t, e, n) {
        Tt.call(t, n) ? t[n].push(e) : Je(t, n, [e]);
      });
      function Fd(t, e, n, a) {
        t = ce(t) ? t : Jn(t), n = n && !a ? pt(n) : 0;
        var f = t.length;
        return n < 0 && (n = Zt(f + n, 0)), Ti(t) ? n <= f && t.indexOf(e, n) > -1 : !!f && kn(t, e, n) > -1;
      }
      var Wd = mt(function(t, e, n) {
        var a = -1, f = typeof e == "function", p = ce(t) ? C(t.length) : [];
        return hn(t, function(v) {
          p[++a] = f ? ge(e, v, n) : gr(v, e, n);
        }), p;
      }), Bd = pi(function(t, e, n) {
        Je(t, n, e);
      });
      function xi(t, e) {
        var n = ft(t) ? Pt : Ju;
        return n(t, V(e, 3));
      }
      function kd(t, e, n, a) {
        return t == null ? [] : (ft(e) || (e = e == null ? [] : [e]), n = a ? r : n, ft(n) || (n = n == null ? [] : [n]), el(t, e, n));
      }
      var $d = pi(function(t, e, n) {
        t[n ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function Ud(t, e, n) {
        var a = ft(t) ? _o : Au, f = arguments.length < 3;
        return a(t, V(e, 4), n, f, hn);
      }
      function Kd(t, e, n) {
        var a = ft(t) ? tc : Au, f = arguments.length < 3;
        return a(t, V(e, 4), n, f, Hu);
      }
      function Gd(t, e) {
        var n = ft(t) ? ln : qu;
        return n(t, Ai(V(e, 3)));
      }
      function Hd(t) {
        var e = ft(t) ? $u : Fh;
        return e(t);
      }
      function qd(t, e, n) {
        (n ? ue(t, e, n) : e === r) ? e = 1 : e = pt(e);
        var a = ft(t) ? ph : Wh;
        return a(t, e);
      }
      function Yd(t) {
        var e = ft(t) ? dh : kh;
        return e(t);
      }
      function zd(t) {
        if (t == null)
          return 0;
        if (ce(t))
          return Ti(t) ? Un(t) : t.length;
        var e = re(t);
        return e == Ne || e == Fe ? t.size : Wo(t).length;
      }
      function Xd(t, e, n) {
        var a = ft(t) ? bo : $h;
        return n && ue(t, e, n) && (e = r), a(t, V(e, 3));
      }
      var Zd = mt(function(t, e) {
        if (t == null)
          return [];
        var n = e.length;
        return n > 1 && ue(t, e[0], e[1]) ? e = [] : n > 2 && ue(e[0], e[1], e[2]) && (e = [e[0]]), el(t, Qt(e, 1), []);
      }), Si = Dc || function() {
        return Vt.Date.now();
      };
      function jd(t, e) {
        if (typeof e != "function")
          throw new Te(c);
        return t = pt(t), function() {
          if (--t < 1)
            return e.apply(this, arguments);
        };
      }
      function Zl(t, e, n) {
        return e = n ? r : e, e = t && e == null ? t.length : e, Ve(t, rt, r, r, r, r, e);
      }
      function jl(t, e) {
        var n;
        if (typeof e != "function")
          throw new Te(c);
        return t = pt(t), function() {
          return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = r), n;
        };
      }
      var ua = mt(function(t, e, n) {
        var a = L;
        if (n.length) {
          var f = fn(n, Zn(ua));
          a |= lt;
        }
        return Ve(t, a, e, n, f);
      }), Jl = mt(function(t, e, n) {
        var a = L | F;
        if (n.length) {
          var f = fn(n, Zn(Jl));
          a |= lt;
        }
        return Ve(e, a, t, n, f);
      });
      function Vl(t, e, n) {
        e = n ? r : e;
        var a = Ve(t, W, r, r, r, r, r, e);
        return a.placeholder = Vl.placeholder, a;
      }
      function Ql(t, e, n) {
        e = n ? r : e;
        var a = Ve(t, dt, r, r, r, r, r, e);
        return a.placeholder = Ql.placeholder, a;
      }
      function ts(t, e, n) {
        var a, f, p, v, m, w, M = 0, R = !1, P = !1, $ = !0;
        if (typeof t != "function")
          throw new Te(c);
        e = Re(e) || 0, Ft(n) && (R = !!n.leading, P = "maxWait" in n, p = P ? Zt(Re(n.maxWait) || 0, e) : p, $ = "trailing" in n ? !!n.trailing : $);
        function Y(qt) {
          var $e = a, rn = f;
          return a = f = r, M = qt, v = t.apply(rn, $e), v;
        }
        function tt(qt) {
          return M = qt, m = yr(yt, e), R ? Y(qt) : v;
        }
        function gt(qt) {
          var $e = qt - w, rn = qt - M, bs = e - $e;
          return P ? ne(bs, p - rn) : bs;
        }
        function et(qt) {
          var $e = qt - w, rn = qt - M;
          return w === r || $e >= e || $e < 0 || P && rn >= p;
        }
        function yt() {
          var qt = Si();
          if (et(qt))
            return St(qt);
          m = yr(yt, gt(qt));
        }
        function St(qt) {
          return m = r, $ && a ? Y(qt) : (a = f = r, v);
        }
        function be() {
          m !== r && fl(m), M = 0, a = w = f = m = r;
        }
        function le() {
          return m === r ? v : St(Si());
        }
        function ye() {
          var qt = Si(), $e = et(qt);
          if (a = arguments, f = this, w = qt, $e) {
            if (m === r)
              return tt(w);
            if (P)
              return fl(m), m = yr(yt, e), Y(w);
          }
          return m === r && (m = yr(yt, e)), v;
        }
        return ye.cancel = be, ye.flush = le, ye;
      }
      var Jd = mt(function(t, e) {
        return Gu(t, 1, e);
      }), Vd = mt(function(t, e, n) {
        return Gu(t, Re(e) || 0, n);
      });
      function Qd(t) {
        return Ve(t, j);
      }
      function Ei(t, e) {
        if (typeof t != "function" || e != null && typeof e != "function")
          throw new Te(c);
        var n = function() {
          var a = arguments, f = e ? e.apply(this, a) : a[0], p = n.cache;
          if (p.has(f))
            return p.get(f);
          var v = t.apply(this, a);
          return n.cache = p.set(f, v) || p, v;
        };
        return n.cache = new (Ei.Cache || je)(), n;
      }
      Ei.Cache = je;
      function Ai(t) {
        if (typeof t != "function")
          throw new Te(c);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, e[0]);
            case 2:
              return !t.call(this, e[0], e[1]);
            case 3:
              return !t.call(this, e[0], e[1], e[2]);
          }
          return !t.apply(this, e);
        };
      }
      function tg(t) {
        return jl(2, t);
      }
      var eg = Uh(function(t, e) {
        e = e.length == 1 && ft(e[0]) ? Pt(e[0], ve(V())) : Pt(Qt(e, 1), ve(V()));
        var n = e.length;
        return mt(function(a) {
          for (var f = -1, p = ne(a.length, n); ++f < p; )
            a[f] = e[f].call(this, a[f]);
          return ge(t, this, a);
        });
      }), la = mt(function(t, e) {
        var n = fn(e, Zn(la));
        return Ve(t, lt, r, e, n);
      }), es = mt(function(t, e) {
        var n = fn(e, Zn(es));
        return Ve(t, ct, r, e, n);
      }), ng = Qe(function(t, e) {
        return Ve(t, it, r, r, r, e);
      });
      function rg(t, e) {
        if (typeof t != "function")
          throw new Te(c);
        return e = e === r ? e : pt(e), mt(t, e);
      }
      function ig(t, e) {
        if (typeof t != "function")
          throw new Te(c);
        return e = e == null ? 0 : Zt(pt(e), 0), mt(function(n) {
          var a = n[e], f = gn(n, 0, e);
          return a && sn(f, a), ge(t, this, f);
        });
      }
      function og(t, e, n) {
        var a = !0, f = !0;
        if (typeof t != "function")
          throw new Te(c);
        return Ft(n) && (a = "leading" in n ? !!n.leading : a, f = "trailing" in n ? !!n.trailing : f), ts(t, e, {
          leading: a,
          maxWait: e,
          trailing: f
        });
      }
      function ag(t) {
        return Zl(t, 1);
      }
      function ug(t, e) {
        return la(Yo(e), t);
      }
      function lg() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return ft(t) ? t : [t];
      }
      function sg(t) {
        return De(t, O);
      }
      function fg(t, e) {
        return e = typeof e == "function" ? e : r, De(t, O, e);
      }
      function cg(t) {
        return De(t, x | O);
      }
      function hg(t, e) {
        return e = typeof e == "function" ? e : r, De(t, x | O, e);
      }
      function pg(t, e) {
        return e == null || Ku(t, e, jt(e));
      }
      function ke(t, e) {
        return t === e || t !== t && e !== e;
      }
      var dg = mi(Po), gg = mi(function(t, e) {
        return t >= e;
      }), In = Xu(function() {
        return arguments;
      }()) ? Xu : function(t) {
        return $t(t) && Tt.call(t, "callee") && !Pu.call(t, "callee");
      }, ft = C.isArray, vg = gu ? ve(gu) : Eh;
      function ce(t) {
        return t != null && Oi(t.length) && !en(t);
      }
      function Ht(t) {
        return $t(t) && ce(t);
      }
      function mg(t) {
        return t === !0 || t === !1 || $t(t) && ae(t) == ee;
      }
      var vn = Mc || ba, _g = vu ? ve(vu) : Ah;
      function bg(t) {
        return $t(t) && t.nodeType === 1 && !wr(t);
      }
      function yg(t) {
        if (t == null)
          return !0;
        if (ce(t) && (ft(t) || typeof t == "string" || typeof t.splice == "function" || vn(t) || jn(t) || In(t)))
          return !t.length;
        var e = re(t);
        if (e == Ne || e == Fe)
          return !t.size;
        if (br(t))
          return !Wo(t).length;
        for (var n in t)
          if (Tt.call(t, n))
            return !1;
        return !0;
      }
      function wg(t, e) {
        return vr(t, e);
      }
      function xg(t, e, n) {
        n = typeof n == "function" ? n : r;
        var a = n ? n(t, e) : r;
        return a === r ? vr(t, e, r, n) : !!a;
      }
      function sa(t) {
        if (!$t(t))
          return !1;
        var e = ae(t);
        return e == Br || e == Fn || typeof t.message == "string" && typeof t.name == "string" && !wr(t);
      }
      function Sg(t) {
        return typeof t == "number" && Fu(t);
      }
      function en(t) {
        if (!Ft(t))
          return !1;
        var e = ae(t);
        return e == kr || e == Ga || e == Ct || e == Ys;
      }
      function ns(t) {
        return typeof t == "number" && t == pt(t);
      }
      function Oi(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Z;
      }
      function Ft(t) {
        var e = typeof t;
        return t != null && (e == "object" || e == "function");
      }
      function $t(t) {
        return t != null && typeof t == "object";
      }
      var rs = mu ? ve(mu) : Th;
      function Eg(t, e) {
        return t === e || Fo(t, e, Qo(e));
      }
      function Ag(t, e, n) {
        return n = typeof n == "function" ? n : r, Fo(t, e, Qo(e), n);
      }
      function Og(t) {
        return is(t) && t != +t;
      }
      function Tg(t) {
        if (fp(t))
          throw new at(u);
        return Zu(t);
      }
      function Cg(t) {
        return t === null;
      }
      function Dg(t) {
        return t == null;
      }
      function is(t) {
        return typeof t == "number" || $t(t) && ae(t) == nr;
      }
      function wr(t) {
        if (!$t(t) || ae(t) != Xe)
          return !1;
        var e = Qr(t);
        if (e === null)
          return !0;
        var n = Tt.call(e, "constructor") && e.constructor;
        return typeof n == "function" && n instanceof n && Zr.call(n) == Ac;
      }
      var fa = _u ? ve(_u) : Ch;
      function Ig(t) {
        return ns(t) && t >= -Z && t <= Z;
      }
      var os = bu ? ve(bu) : Dh;
      function Ti(t) {
        return typeof t == "string" || !ft(t) && $t(t) && ae(t) == ir;
      }
      function _e(t) {
        return typeof t == "symbol" || $t(t) && ae(t) == $r;
      }
      var jn = yu ? ve(yu) : Ih;
      function Mg(t) {
        return t === r;
      }
      function Rg(t) {
        return $t(t) && re(t) == or;
      }
      function Lg(t) {
        return $t(t) && ae(t) == Xs;
      }
      var Pg = mi(Bo), Ng = mi(function(t, e) {
        return t <= e;
      });
      function as(t) {
        if (!t)
          return [];
        if (ce(t))
          return Ti(t) ? We(t) : fe(t);
        if (lr && t[lr])
          return pc(t[lr]());
        var e = re(t), n = e == Ne ? Ao : e == Fe ? Yr : Jn;
        return n(t);
      }
      function nn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Re(t), t === G || t === -G) {
          var e = t < 0 ? -1 : 1;
          return e * z;
        }
        return t === t ? t : 0;
      }
      function pt(t) {
        var e = nn(t), n = e % 1;
        return e === e ? n ? e - n : e : 0;
      }
      function us(t) {
        return t ? On(pt(t), 0, E) : 0;
      }
      function Re(t) {
        if (typeof t == "number")
          return t;
        if (_e(t))
          return bt;
        if (Ft(t)) {
          var e = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ft(e) ? e + "" : e;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Ou(t);
        var n = vf.test(t);
        return n || _f.test(t) ? jf(t.slice(2), n ? 2 : 8) : gf.test(t) ? bt : +t;
      }
      function ls(t) {
        return qe(t, he(t));
      }
      function Fg(t) {
        return t ? On(pt(t), -Z, Z) : t === 0 ? t : 0;
      }
      function Ot(t) {
        return t == null ? "" : me(t);
      }
      var Wg = zn(function(t, e) {
        if (br(e) || ce(e)) {
          qe(e, jt(e), t);
          return;
        }
        for (var n in e)
          Tt.call(e, n) && pr(t, n, e[n]);
      }), ss = zn(function(t, e) {
        qe(e, he(e), t);
      }), Ci = zn(function(t, e, n, a) {
        qe(e, he(e), t, a);
      }), Bg = zn(function(t, e, n, a) {
        qe(e, jt(e), t, a);
      }), kg = Qe(Mo);
      function $g(t, e) {
        var n = Yn(t);
        return e == null ? n : Uu(n, e);
      }
      var Ug = mt(function(t, e) {
        t = Dt(t);
        var n = -1, a = e.length, f = a > 2 ? e[2] : r;
        for (f && ue(e[0], e[1], f) && (a = 1); ++n < a; )
          for (var p = e[n], v = he(p), m = -1, w = v.length; ++m < w; ) {
            var M = v[m], R = t[M];
            (R === r || ke(R, Gn[M]) && !Tt.call(t, M)) && (t[M] = p[M]);
          }
        return t;
      }), Kg = mt(function(t) {
        return t.push(r, Ol), ge(fs, r, t);
      });
      function Gg(t, e) {
        return xu(t, V(e, 3), He);
      }
      function Hg(t, e) {
        return xu(t, V(e, 3), Lo);
      }
      function qg(t, e) {
        return t == null ? t : Ro(t, V(e, 3), he);
      }
      function Yg(t, e) {
        return t == null ? t : Yu(t, V(e, 3), he);
      }
      function zg(t, e) {
        return t && He(t, V(e, 3));
      }
      function Xg(t, e) {
        return t && Lo(t, V(e, 3));
      }
      function Zg(t) {
        return t == null ? [] : si(t, jt(t));
      }
      function jg(t) {
        return t == null ? [] : si(t, he(t));
      }
      function ca(t, e, n) {
        var a = t == null ? r : Tn(t, e);
        return a === r ? n : a;
      }
      function Jg(t, e) {
        return t != null && Dl(t, e, yh);
      }
      function ha(t, e) {
        return t != null && Dl(t, e, wh);
      }
      var Vg = wl(function(t, e, n) {
        e != null && typeof e.toString != "function" && (e = jr.call(e)), t[e] = n;
      }, da(pe)), Qg = wl(function(t, e, n) {
        e != null && typeof e.toString != "function" && (e = jr.call(e)), Tt.call(t, e) ? t[e].push(n) : t[e] = [n];
      }, V), tv = mt(gr);
      function jt(t) {
        return ce(t) ? ku(t) : Wo(t);
      }
      function he(t) {
        return ce(t) ? ku(t, !0) : Mh(t);
      }
      function ev(t, e) {
        var n = {};
        return e = V(e, 3), He(t, function(a, f, p) {
          Je(n, e(a, f, p), a);
        }), n;
      }
      function nv(t, e) {
        var n = {};
        return e = V(e, 3), He(t, function(a, f, p) {
          Je(n, f, e(a, f, p));
        }), n;
      }
      var rv = zn(function(t, e, n) {
        fi(t, e, n);
      }), fs = zn(function(t, e, n, a) {
        fi(t, e, n, a);
      }), iv = Qe(function(t, e) {
        var n = {};
        if (t == null)
          return n;
        var a = !1;
        e = Pt(e, function(p) {
          return p = dn(p, t), a || (a = p.length > 1), p;
        }), qe(t, Jo(t), n), a && (n = De(n, x | A | O, Vh));
        for (var f = e.length; f--; )
          Go(n, e[f]);
        return n;
      });
      function ov(t, e) {
        return cs(t, Ai(V(e)));
      }
      var av = Qe(function(t, e) {
        return t == null ? {} : Lh(t, e);
      });
      function cs(t, e) {
        if (t == null)
          return {};
        var n = Pt(Jo(t), function(a) {
          return [a];
        });
        return e = V(e), nl(t, n, function(a, f) {
          return e(a, f[0]);
        });
      }
      function uv(t, e, n) {
        e = dn(e, t);
        var a = -1, f = e.length;
        for (f || (f = 1, t = r); ++a < f; ) {
          var p = t == null ? r : t[Ye(e[a])];
          p === r && (a = f, p = n), t = en(p) ? p.call(t) : p;
        }
        return t;
      }
      function lv(t, e, n) {
        return t == null ? t : mr(t, e, n);
      }
      function sv(t, e, n, a) {
        return a = typeof a == "function" ? a : r, t == null ? t : mr(t, e, n, a);
      }
      var hs = El(jt), ps = El(he);
      function fv(t, e, n) {
        var a = ft(t), f = a || vn(t) || jn(t);
        if (e = V(e, 4), n == null) {
          var p = t && t.constructor;
          f ? n = a ? new p() : [] : Ft(t) ? n = en(p) ? Yn(Qr(t)) : {} : n = {};
        }
        return (f ? Oe : He)(t, function(v, m, w) {
          return e(n, v, m, w);
        }), n;
      }
      function cv(t, e) {
        return t == null ? !0 : Go(t, e);
      }
      function hv(t, e, n) {
        return t == null ? t : ul(t, e, Yo(n));
      }
      function pv(t, e, n, a) {
        return a = typeof a == "function" ? a : r, t == null ? t : ul(t, e, Yo(n), a);
      }
      function Jn(t) {
        return t == null ? [] : Eo(t, jt(t));
      }
      function dv(t) {
        return t == null ? [] : Eo(t, he(t));
      }
      function gv(t, e, n) {
        return n === r && (n = e, e = r), n !== r && (n = Re(n), n = n === n ? n : 0), e !== r && (e = Re(e), e = e === e ? e : 0), On(Re(t), e, n);
      }
      function vv(t, e, n) {
        return e = nn(e), n === r ? (n = e, e = 0) : n = nn(n), t = Re(t), xh(t, e, n);
      }
      function mv(t, e, n) {
        if (n && typeof n != "boolean" && ue(t, e, n) && (e = n = r), n === r && (typeof e == "boolean" ? (n = e, e = r) : typeof t == "boolean" && (n = t, t = r)), t === r && e === r ? (t = 0, e = 1) : (t = nn(t), e === r ? (e = t, t = 0) : e = nn(e)), t > e) {
          var a = t;
          t = e, e = a;
        }
        if (n || t % 1 || e % 1) {
          var f = Wu();
          return ne(t + f * (e - t + Zf("1e-" + ((f + "").length - 1))), e);
        }
        return $o(t, e);
      }
      var _v = Xn(function(t, e, n) {
        return e = e.toLowerCase(), t + (n ? ds(e) : e);
      });
      function ds(t) {
        return pa(Ot(t).toLowerCase());
      }
      function gs(t) {
        return t = Ot(t), t && t.replace(yf, lc).replace(kf, "");
      }
      function bv(t, e, n) {
        t = Ot(t), e = me(e);
        var a = t.length;
        n = n === r ? a : On(pt(n), 0, a);
        var f = n;
        return n -= e.length, n >= 0 && t.slice(n, f) == e;
      }
      function yv(t) {
        return t = Ot(t), t && Qs.test(t) ? t.replace(Ya, sc) : t;
      }
      function wv(t) {
        return t = Ot(t), t && af.test(t) ? t.replace(uo, "\\$&") : t;
      }
      var xv = Xn(function(t, e, n) {
        return t + (n ? "-" : "") + e.toLowerCase();
      }), Sv = Xn(function(t, e, n) {
        return t + (n ? " " : "") + e.toLowerCase();
      }), Ev = _l("toLowerCase");
      function Av(t, e, n) {
        t = Ot(t), e = pt(e);
        var a = e ? Un(t) : 0;
        if (!e || a >= e)
          return t;
        var f = (e - a) / 2;
        return vi(ri(f), n) + t + vi(ni(f), n);
      }
      function Ov(t, e, n) {
        t = Ot(t), e = pt(e);
        var a = e ? Un(t) : 0;
        return e && a < e ? t + vi(e - a, n) : t;
      }
      function Tv(t, e, n) {
        t = Ot(t), e = pt(e);
        var a = e ? Un(t) : 0;
        return e && a < e ? vi(e - a, n) + t : t;
      }
      function Cv(t, e, n) {
        return n || e == null ? e = 0 : e && (e = +e), Nc(Ot(t).replace(lo, ""), e || 0);
      }
      function Dv(t, e, n) {
        return (n ? ue(t, e, n) : e === r) ? e = 1 : e = pt(e), Uo(Ot(t), e);
      }
      function Iv() {
        var t = arguments, e = Ot(t[0]);
        return t.length < 3 ? e : e.replace(t[1], t[2]);
      }
      var Mv = Xn(function(t, e, n) {
        return t + (n ? "_" : "") + e.toLowerCase();
      });
      function Rv(t, e, n) {
        return n && typeof n != "number" && ue(t, e, n) && (e = n = r), n = n === r ? E : n >>> 0, n ? (t = Ot(t), t && (typeof e == "string" || e != null && !fa(e)) && (e = me(e), !e && $n(t)) ? gn(We(t), 0, n) : t.split(e, n)) : [];
      }
      var Lv = Xn(function(t, e, n) {
        return t + (n ? " " : "") + pa(e);
      });
      function Pv(t, e, n) {
        return t = Ot(t), n = n == null ? 0 : On(pt(n), 0, t.length), e = me(e), t.slice(n, n + e.length) == e;
      }
      function Nv(t, e, n) {
        var a = h.templateSettings;
        n && ue(t, e, n) && (e = r), t = Ot(t), e = Ci({}, e, a, Al);
        var f = Ci({}, e.imports, a.imports, Al), p = jt(f), v = Eo(f, p), m, w, M = 0, R = e.interpolate || Ur, P = "__p += '", $ = Oo(
          (e.escape || Ur).source + "|" + R.source + "|" + (R === za ? df : Ur).source + "|" + (e.evaluate || Ur).source + "|$",
          "g"
        ), Y = "//# sourceURL=" + (Tt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Hf + "]") + `
`;
        t.replace($, function(et, yt, St, be, le, ye) {
          return St || (St = be), P += t.slice(M, ye).replace(wf, fc), yt && (m = !0, P += `' +
__e(` + yt + `) +
'`), le && (w = !0, P += `';
` + le + `;
__p += '`), St && (P += `' +
((__t = (` + St + `)) == null ? '' : __t) +
'`), M = ye + et.length, et;
        }), P += `';
`;
        var tt = Tt.call(e, "variable") && e.variable;
        if (!tt)
          P = `with (obj) {
` + P + `
}
`;
        else if (hf.test(tt))
          throw new at(d);
        P = (w ? P.replace(Zs, "") : P).replace(js, "$1").replace(Js, "$1;"), P = "function(" + (tt || "obj") + `) {
` + (tt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (m ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
        var gt = ms(function() {
          return At(p, Y + "return " + P).apply(r, v);
        });
        if (gt.source = P, sa(gt))
          throw gt;
        return gt;
      }
      function Fv(t) {
        return Ot(t).toLowerCase();
      }
      function Wv(t) {
        return Ot(t).toUpperCase();
      }
      function Bv(t, e, n) {
        if (t = Ot(t), t && (n || e === r))
          return Ou(t);
        if (!t || !(e = me(e)))
          return t;
        var a = We(t), f = We(e), p = Tu(a, f), v = Cu(a, f) + 1;
        return gn(a, p, v).join("");
      }
      function kv(t, e, n) {
        if (t = Ot(t), t && (n || e === r))
          return t.slice(0, Iu(t) + 1);
        if (!t || !(e = me(e)))
          return t;
        var a = We(t), f = Cu(a, We(e)) + 1;
        return gn(a, 0, f).join("");
      }
      function $v(t, e, n) {
        if (t = Ot(t), t && (n || e === r))
          return t.replace(lo, "");
        if (!t || !(e = me(e)))
          return t;
        var a = We(t), f = Tu(a, We(e));
        return gn(a, f).join("");
      }
      function Uv(t, e) {
        var n = Q, a = vt;
        if (Ft(e)) {
          var f = "separator" in e ? e.separator : f;
          n = "length" in e ? pt(e.length) : n, a = "omission" in e ? me(e.omission) : a;
        }
        t = Ot(t);
        var p = t.length;
        if ($n(t)) {
          var v = We(t);
          p = v.length;
        }
        if (n >= p)
          return t;
        var m = n - Un(a);
        if (m < 1)
          return a;
        var w = v ? gn(v, 0, m).join("") : t.slice(0, m);
        if (f === r)
          return w + a;
        if (v && (m += w.length - m), fa(f)) {
          if (t.slice(m).search(f)) {
            var M, R = w;
            for (f.global || (f = Oo(f.source, Ot(Xa.exec(f)) + "g")), f.lastIndex = 0; M = f.exec(R); )
              var P = M.index;
            w = w.slice(0, P === r ? m : P);
          }
        } else if (t.indexOf(me(f), m) != m) {
          var $ = w.lastIndexOf(f);
          $ > -1 && (w = w.slice(0, $));
        }
        return w + a;
      }
      function Kv(t) {
        return t = Ot(t), t && Vs.test(t) ? t.replace(qa, mc) : t;
      }
      var Gv = Xn(function(t, e, n) {
        return t + (n ? " " : "") + e.toUpperCase();
      }), pa = _l("toUpperCase");
      function vs(t, e, n) {
        return t = Ot(t), e = n ? r : e, e === r ? hc(t) ? yc(t) : rc(t) : t.match(e) || [];
      }
      var ms = mt(function(t, e) {
        try {
          return ge(t, r, e);
        } catch (n) {
          return sa(n) ? n : new at(n);
        }
      }), Hv = Qe(function(t, e) {
        return Oe(e, function(n) {
          n = Ye(n), Je(t, n, ua(t[n], t));
        }), t;
      });
      function qv(t) {
        var e = t == null ? 0 : t.length, n = V();
        return t = e ? Pt(t, function(a) {
          if (typeof a[1] != "function")
            throw new Te(c);
          return [n(a[0]), a[1]];
        }) : [], mt(function(a) {
          for (var f = -1; ++f < e; ) {
            var p = t[f];
            if (ge(p[0], this, a))
              return ge(p[1], this, a);
          }
        });
      }
      function Yv(t) {
        return mh(De(t, x));
      }
      function da(t) {
        return function() {
          return t;
        };
      }
      function zv(t, e) {
        return t == null || t !== t ? e : t;
      }
      var Xv = yl(), Zv = yl(!0);
      function pe(t) {
        return t;
      }
      function ga(t) {
        return ju(typeof t == "function" ? t : De(t, x));
      }
      function jv(t) {
        return Vu(De(t, x));
      }
      function Jv(t, e) {
        return Qu(t, De(e, x));
      }
      var Vv = mt(function(t, e) {
        return function(n) {
          return gr(n, t, e);
        };
      }), Qv = mt(function(t, e) {
        return function(n) {
          return gr(t, n, e);
        };
      });
      function va(t, e, n) {
        var a = jt(e), f = si(e, a);
        n == null && !(Ft(e) && (f.length || !a.length)) && (n = e, e = t, t = this, f = si(e, jt(e)));
        var p = !(Ft(n) && "chain" in n) || !!n.chain, v = en(t);
        return Oe(f, function(m) {
          var w = e[m];
          t[m] = w, v && (t.prototype[m] = function() {
            var M = this.__chain__;
            if (p || M) {
              var R = t(this.__wrapped__), P = R.__actions__ = fe(this.__actions__);
              return P.push({ func: w, args: arguments, thisArg: t }), R.__chain__ = M, R;
            }
            return w.apply(t, sn([this.value()], arguments));
          });
        }), t;
      }
      function tm() {
        return Vt._ === this && (Vt._ = Oc), this;
      }
      function ma() {
      }
      function em(t) {
        return t = pt(t), mt(function(e) {
          return tl(e, t);
        });
      }
      var nm = Xo(Pt), rm = Xo(wu), im = Xo(bo);
      function _s(t) {
        return ea(t) ? yo(Ye(t)) : Ph(t);
      }
      function om(t) {
        return function(e) {
          return t == null ? r : Tn(t, e);
        };
      }
      var am = xl(), um = xl(!0);
      function _a() {
        return [];
      }
      function ba() {
        return !1;
      }
      function lm() {
        return {};
      }
      function sm() {
        return "";
      }
      function fm() {
        return !0;
      }
      function cm(t, e) {
        if (t = pt(t), t < 1 || t > Z)
          return [];
        var n = E, a = ne(t, E);
        e = V(e), t -= E;
        for (var f = So(a, e); ++n < t; )
          e(n);
        return f;
      }
      function hm(t) {
        return ft(t) ? Pt(t, Ye) : _e(t) ? [t] : fe(Bl(Ot(t)));
      }
      function pm(t) {
        var e = ++Ec;
        return Ot(t) + e;
      }
      var dm = gi(function(t, e) {
        return t + e;
      }, 0), gm = Zo("ceil"), vm = gi(function(t, e) {
        return t / e;
      }, 1), mm = Zo("floor");
      function _m(t) {
        return t && t.length ? li(t, pe, Po) : r;
      }
      function bm(t, e) {
        return t && t.length ? li(t, V(e, 2), Po) : r;
      }
      function ym(t) {
        return Eu(t, pe);
      }
      function wm(t, e) {
        return Eu(t, V(e, 2));
      }
      function xm(t) {
        return t && t.length ? li(t, pe, Bo) : r;
      }
      function Sm(t, e) {
        return t && t.length ? li(t, V(e, 2), Bo) : r;
      }
      var Em = gi(function(t, e) {
        return t * e;
      }, 1), Am = Zo("round"), Om = gi(function(t, e) {
        return t - e;
      }, 0);
      function Tm(t) {
        return t && t.length ? xo(t, pe) : 0;
      }
      function Cm(t, e) {
        return t && t.length ? xo(t, V(e, 2)) : 0;
      }
      return h.after = jd, h.ary = Zl, h.assign = Wg, h.assignIn = ss, h.assignInWith = Ci, h.assignWith = Bg, h.at = kg, h.before = jl, h.bind = ua, h.bindAll = Hv, h.bindKey = Jl, h.castArray = lg, h.chain = Yl, h.chunk = mp, h.compact = _p, h.concat = bp, h.cond = qv, h.conforms = Yv, h.constant = da, h.countBy = Td, h.create = $g, h.curry = Vl, h.curryRight = Ql, h.debounce = ts, h.defaults = Ug, h.defaultsDeep = Kg, h.defer = Jd, h.delay = Vd, h.difference = yp, h.differenceBy = wp, h.differenceWith = xp, h.drop = Sp, h.dropRight = Ep, h.dropRightWhile = Ap, h.dropWhile = Op, h.fill = Tp, h.filter = Dd, h.flatMap = Rd, h.flatMapDeep = Ld, h.flatMapDepth = Pd, h.flatten = Kl, h.flattenDeep = Cp, h.flattenDepth = Dp, h.flip = Qd, h.flow = Xv, h.flowRight = Zv, h.fromPairs = Ip, h.functions = Zg, h.functionsIn = jg, h.groupBy = Nd, h.initial = Rp, h.intersection = Lp, h.intersectionBy = Pp, h.intersectionWith = Np, h.invert = Vg, h.invertBy = Qg, h.invokeMap = Wd, h.iteratee = ga, h.keyBy = Bd, h.keys = jt, h.keysIn = he, h.map = xi, h.mapKeys = ev, h.mapValues = nv, h.matches = jv, h.matchesProperty = Jv, h.memoize = Ei, h.merge = rv, h.mergeWith = fs, h.method = Vv, h.methodOf = Qv, h.mixin = va, h.negate = Ai, h.nthArg = em, h.omit = iv, h.omitBy = ov, h.once = tg, h.orderBy = kd, h.over = nm, h.overArgs = eg, h.overEvery = rm, h.overSome = im, h.partial = la, h.partialRight = es, h.partition = $d, h.pick = av, h.pickBy = cs, h.property = _s, h.propertyOf = om, h.pull = kp, h.pullAll = Hl, h.pullAllBy = $p, h.pullAllWith = Up, h.pullAt = Kp, h.range = am, h.rangeRight = um, h.rearg = ng, h.reject = Gd, h.remove = Gp, h.rest = rg, h.reverse = oa, h.sampleSize = qd, h.set = lv, h.setWith = sv, h.shuffle = Yd, h.slice = Hp, h.sortBy = Zd, h.sortedUniq = Jp, h.sortedUniqBy = Vp, h.split = Rv, h.spread = ig, h.tail = Qp, h.take = td, h.takeRight = ed, h.takeRightWhile = nd, h.takeWhile = rd, h.tap = _d, h.throttle = og, h.thru = wi, h.toArray = as, h.toPairs = hs, h.toPairsIn = ps, h.toPath = hm, h.toPlainObject = ls, h.transform = fv, h.unary = ag, h.union = id, h.unionBy = od, h.unionWith = ad, h.uniq = ud, h.uniqBy = ld, h.uniqWith = sd, h.unset = cv, h.unzip = aa, h.unzipWith = ql, h.update = hv, h.updateWith = pv, h.values = Jn, h.valuesIn = dv, h.without = fd, h.words = vs, h.wrap = ug, h.xor = cd, h.xorBy = hd, h.xorWith = pd, h.zip = dd, h.zipObject = gd, h.zipObjectDeep = vd, h.zipWith = md, h.entries = hs, h.entriesIn = ps, h.extend = ss, h.extendWith = Ci, va(h, h), h.add = dm, h.attempt = ms, h.camelCase = _v, h.capitalize = ds, h.ceil = gm, h.clamp = gv, h.clone = sg, h.cloneDeep = cg, h.cloneDeepWith = hg, h.cloneWith = fg, h.conformsTo = pg, h.deburr = gs, h.defaultTo = zv, h.divide = vm, h.endsWith = bv, h.eq = ke, h.escape = yv, h.escapeRegExp = wv, h.every = Cd, h.find = Id, h.findIndex = $l, h.findKey = Gg, h.findLast = Md, h.findLastIndex = Ul, h.findLastKey = Hg, h.floor = mm, h.forEach = zl, h.forEachRight = Xl, h.forIn = qg, h.forInRight = Yg, h.forOwn = zg, h.forOwnRight = Xg, h.get = ca, h.gt = dg, h.gte = gg, h.has = Jg, h.hasIn = ha, h.head = Gl, h.identity = pe, h.includes = Fd, h.indexOf = Mp, h.inRange = vv, h.invoke = tv, h.isArguments = In, h.isArray = ft, h.isArrayBuffer = vg, h.isArrayLike = ce, h.isArrayLikeObject = Ht, h.isBoolean = mg, h.isBuffer = vn, h.isDate = _g, h.isElement = bg, h.isEmpty = yg, h.isEqual = wg, h.isEqualWith = xg, h.isError = sa, h.isFinite = Sg, h.isFunction = en, h.isInteger = ns, h.isLength = Oi, h.isMap = rs, h.isMatch = Eg, h.isMatchWith = Ag, h.isNaN = Og, h.isNative = Tg, h.isNil = Dg, h.isNull = Cg, h.isNumber = is, h.isObject = Ft, h.isObjectLike = $t, h.isPlainObject = wr, h.isRegExp = fa, h.isSafeInteger = Ig, h.isSet = os, h.isString = Ti, h.isSymbol = _e, h.isTypedArray = jn, h.isUndefined = Mg, h.isWeakMap = Rg, h.isWeakSet = Lg, h.join = Fp, h.kebabCase = xv, h.last = Me, h.lastIndexOf = Wp, h.lowerCase = Sv, h.lowerFirst = Ev, h.lt = Pg, h.lte = Ng, h.max = _m, h.maxBy = bm, h.mean = ym, h.meanBy = wm, h.min = xm, h.minBy = Sm, h.stubArray = _a, h.stubFalse = ba, h.stubObject = lm, h.stubString = sm, h.stubTrue = fm, h.multiply = Em, h.nth = Bp, h.noConflict = tm, h.noop = ma, h.now = Si, h.pad = Av, h.padEnd = Ov, h.padStart = Tv, h.parseInt = Cv, h.random = mv, h.reduce = Ud, h.reduceRight = Kd, h.repeat = Dv, h.replace = Iv, h.result = uv, h.round = Am, h.runInContext = y, h.sample = Hd, h.size = zd, h.snakeCase = Mv, h.some = Xd, h.sortedIndex = qp, h.sortedIndexBy = Yp, h.sortedIndexOf = zp, h.sortedLastIndex = Xp, h.sortedLastIndexBy = Zp, h.sortedLastIndexOf = jp, h.startCase = Lv, h.startsWith = Pv, h.subtract = Om, h.sum = Tm, h.sumBy = Cm, h.template = Nv, h.times = cm, h.toFinite = nn, h.toInteger = pt, h.toLength = us, h.toLower = Fv, h.toNumber = Re, h.toSafeInteger = Fg, h.toString = Ot, h.toUpper = Wv, h.trim = Bv, h.trimEnd = kv, h.trimStart = $v, h.truncate = Uv, h.unescape = Kv, h.uniqueId = pm, h.upperCase = Gv, h.upperFirst = pa, h.each = zl, h.eachRight = Xl, h.first = Gl, va(h, function() {
        var t = {};
        return He(h, function(e, n) {
          Tt.call(h.prototype, n) || (t[n] = e);
        }), t;
      }(), { chain: !1 }), h.VERSION = l, Oe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Oe(["drop", "take"], function(t, e) {
        wt.prototype[t] = function(n) {
          n = n === r ? 1 : Zt(pt(n), 0);
          var a = this.__filtered__ && !e ? new wt(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = ne(n, a.__takeCount__) : a.__views__.push({
            size: ne(n, E),
            type: t + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, wt.prototype[t + "Right"] = function(n) {
          return this.reverse()[t](n).reverse();
        };
      }), Oe(["filter", "map", "takeWhile"], function(t, e) {
        var n = e + 1, a = n == q || n == U;
        wt.prototype[t] = function(f) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: V(f, 3),
            type: n
          }), p.__filtered__ = p.__filtered__ || a, p;
        };
      }), Oe(["head", "last"], function(t, e) {
        var n = "take" + (e ? "Right" : "");
        wt.prototype[t] = function() {
          return this[n](1).value()[0];
        };
      }), Oe(["initial", "tail"], function(t, e) {
        var n = "drop" + (e ? "" : "Right");
        wt.prototype[t] = function() {
          return this.__filtered__ ? new wt(this) : this[n](1);
        };
      }), wt.prototype.compact = function() {
        return this.filter(pe);
      }, wt.prototype.find = function(t) {
        return this.filter(t).head();
      }, wt.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, wt.prototype.invokeMap = mt(function(t, e) {
        return typeof t == "function" ? new wt(this) : this.map(function(n) {
          return gr(n, t, e);
        });
      }), wt.prototype.reject = function(t) {
        return this.filter(Ai(V(t)));
      }, wt.prototype.slice = function(t, e) {
        t = pt(t);
        var n = this;
        return n.__filtered__ && (t > 0 || e < 0) ? new wt(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== r && (e = pt(e), n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n);
      }, wt.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, wt.prototype.toArray = function() {
        return this.take(E);
      }, He(wt.prototype, function(t, e) {
        var n = /^(?:filter|find|map|reject)|While$/.test(e), a = /^(?:head|last)$/.test(e), f = h[a ? "take" + (e == "last" ? "Right" : "") : e], p = a || /^find/.test(e);
        !f || (h.prototype[e] = function() {
          var v = this.__wrapped__, m = a ? [1] : arguments, w = v instanceof wt, M = m[0], R = w || ft(v), P = function(yt) {
            var St = f.apply(h, sn([yt], m));
            return a && $ ? St[0] : St;
          };
          R && n && typeof M == "function" && M.length != 1 && (w = R = !1);
          var $ = this.__chain__, Y = !!this.__actions__.length, tt = p && !$, gt = w && !Y;
          if (!p && R) {
            v = gt ? v : new wt(this);
            var et = t.apply(v, m);
            return et.__actions__.push({ func: wi, args: [P], thisArg: r }), new Ce(et, $);
          }
          return tt && gt ? t.apply(this, m) : (et = this.thru(P), tt ? a ? et.value()[0] : et.value() : et);
        });
      }), Oe(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var e = zr[t], n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var f = arguments;
          if (a && !this.__chain__) {
            var p = this.value();
            return e.apply(ft(p) ? p : [], f);
          }
          return this[n](function(v) {
            return e.apply(ft(v) ? v : [], f);
          });
        };
      }), He(wt.prototype, function(t, e) {
        var n = h[e];
        if (n) {
          var a = n.name + "";
          Tt.call(qn, a) || (qn[a] = []), qn[a].push({ name: e, func: n });
        }
      }), qn[di(r, F).name] = [{
        name: "wrapper",
        func: r
      }], wt.prototype.clone = Kc, wt.prototype.reverse = Gc, wt.prototype.value = Hc, h.prototype.at = bd, h.prototype.chain = yd, h.prototype.commit = wd, h.prototype.next = xd, h.prototype.plant = Ed, h.prototype.reverse = Ad, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Od, h.prototype.first = h.prototype.head, lr && (h.prototype[lr] = Sd), h;
    }, Kn = wc();
    xn ? ((xn.exports = Kn)._ = Kn, go._ = Kn) : Vt._ = Kn;
  }).call(xr);
})(Ki, Ki.exports);
const Dm = function(i, o, r) {
  const l = String(i).split(".");
  let s = l[0];
  const u = l.length > 1 ? r + l[1] : "", c = /(\d+)(\d{3})/;
  for (; c.test(s); )
    s = s.replace(c, `$1${o}$2`);
  return s + u;
}, Zi = function(i) {
  const o = Object.assign({}, {
    digitsAfterDecimal: 2,
    scaler: 1,
    thousandsSep: ",",
    decimalSep: ".",
    prefix: "",
    suffix: ""
  }, i);
  return function(r) {
    if (isNaN(r) || !isFinite(r))
      return "";
    const l = Dm(
      (o.scaler * r).toFixed(o.digitsAfterDecimal),
      o.thousandsSep,
      o.decimalSep
    );
    return `${o.prefix}${l}${o.suffix}`;
  };
}, ys = /(\d+)|(\D+)/g, Di = /\d/, ws = /^0/, Pn = (i, o) => {
  if (o !== null && i === null)
    return -1;
  if (i !== null && o === null)
    return 1;
  if (typeof i == "number" && isNaN(i))
    return -1;
  if (typeof o == "number" && isNaN(o))
    return 1;
  const r = Number(i), l = Number(o);
  if (r < l)
    return -1;
  if (r > l)
    return 1;
  if (typeof i == "number" && typeof o != "number")
    return -1;
  if (typeof o == "number" && typeof i != "number")
    return 1;
  if (typeof i == "number" && typeof o == "number")
    return 0;
  if (isNaN(l) && !isNaN(r))
    return -1;
  if (isNaN(r) && !isNaN(l))
    return 1;
  let s = String(i), u = String(o);
  if (s === u)
    return 0;
  if (!Di.test(s) || !Di.test(u))
    return s > u ? 1 : -1;
  for (s = s.match(ys), u = u.match(ys); s.length && u.length; ) {
    const c = s.shift(), d = u.shift();
    if (c !== d)
      return Di.test(c) && Di.test(d) ? c.replace(ws, ".0") - d.replace(ws, ".0") : c > d ? 1 : -1;
  }
  return s.length - u.length;
}, Im = function(i) {
  const o = {}, r = {};
  for (const l in i) {
    const s = i[l];
    o[s] = l, typeof s == "string" && (r[s.toLowerCase()] = l);
  }
  return function(l, s) {
    return l in o && s in o ? o[l] - o[s] : l in o ? -1 : s in o ? 1 : l in r && s in r ? r[l] - r[s] : l in r ? -1 : s in r ? 1 : Pn(l, s);
  };
}, Wa = function(i, o) {
  if (i) {
    if (typeof i == "function") {
      const r = i(o);
      if (typeof r == "function")
        return r;
    } else if (o in i)
      return i[o];
  }
  return Pn;
}, Lt = Zi(), yn = Zi({ digitsAfterDecimal: 0 }), Ee = Zi({
  digitsAfterDecimal: 1,
  scaler: 100,
  suffix: "%"
}), kt = {
  count(i = yn) {
    return () => function() {
      return {
        count: 0,
        push() {
          this.count++;
        },
        value() {
          return this.count;
        },
        format: i
      };
    };
  },
  uniques(i, o = yn) {
    return function([r]) {
      return function() {
        return {
          uniq: [],
          push(l) {
            Array.from(this.uniq).includes(l[r]) || this.uniq.push(l[r]);
          },
          value() {
            return i(this.uniq);
          },
          format: o,
          numInputs: typeof r < "u" ? 0 : 1
        };
      };
    };
  },
  sum(i = Lt) {
    return function([o]) {
      return function() {
        return {
          sum: 0,
          push(r) {
            isNaN(parseFloat(r[o])) || (this.sum += parseFloat(r[o]));
          },
          value() {
            return this.sum;
          },
          format: i,
          numInputs: typeof o < "u" ? 0 : 1
        };
      };
    };
  },
  extremes(i, o = Lt) {
    return function([r]) {
      return function(l) {
        return {
          val: null,
          sorter: Wa(
            typeof l < "u" ? l.sorters : null,
            r
          ),
          push(s) {
            let u = s[r];
            ["min", "max"].includes(i) && (u = parseFloat(u), isNaN(u) || (this.val = Math[i](u, this.val !== null ? this.val : u))), i === "first" && this.sorter(u, this.val !== null ? this.val : u) <= 0 && (this.val = u), i === "last" && this.sorter(u, this.val !== null ? this.val : u) >= 0 && (this.val = u);
          },
          value() {
            return this.val;
          },
          format(s) {
            return isNaN(s) ? s : o(s);
          },
          numInputs: typeof r < "u" ? 0 : 1
        };
      };
    };
  },
  quantile(i, o = Lt) {
    return function([r]) {
      return function() {
        return {
          vals: [],
          push(l) {
            const s = parseFloat(l[r]);
            isNaN(s) || this.vals.push(s);
          },
          value() {
            if (this.vals.length === 0)
              return null;
            this.vals.sort((s, u) => s - u);
            const l = (this.vals.length - 1) * i;
            return (this.vals[Math.floor(l)] + this.vals[Math.ceil(l)]) / 2;
          },
          format: o,
          numInputs: typeof r < "u" ? 0 : 1
        };
      };
    };
  },
  runningStat(i = "mean", o = 1, r = Lt) {
    return function([l]) {
      return function() {
        return {
          n: 0,
          m: 0,
          s: 0,
          push(s) {
            const u = parseFloat(s[l]);
            if (isNaN(u))
              return;
            this.n += 1, this.n === 1 && (this.m = u);
            const c = this.m + (u - this.m) / this.n;
            this.s = this.s + (u - this.m) * (u - c), this.m = c;
          },
          value() {
            if (i === "mean")
              return this.n === 0 ? 0 / 0 : this.m;
            if (this.n <= o)
              return 0;
            switch (i) {
              case "var":
                return this.s / (this.n - o);
              case "stdev":
                return Math.sqrt(this.s / (this.n - o));
              default:
                throw new Error("unknown mode for runningStat");
            }
          },
          format: r,
          numInputs: typeof l < "u" ? 0 : 1
        };
      };
    };
  },
  sumOverSum(i = Lt) {
    return function([o, r]) {
      return function() {
        return {
          sumNum: 0,
          sumDenom: 0,
          push(l) {
            isNaN(parseFloat(l[o])) || (this.sumNum += parseFloat(l[o])), isNaN(parseFloat(l[r])) || (this.sumDenom += parseFloat(l[r]));
          },
          value() {
            return this.sumNum / this.sumDenom;
          },
          format: i,
          numInputs: typeof o < "u" && typeof r < "u" ? 0 : 2
        };
      };
    };
  },
  fractionOf(i, o = "total", r = Ee) {
    return (...l) => function(s, u, c) {
      return {
        selector: { total: [[], []], row: [u, []], col: [[], c] }[o],
        inner: i(...Array.from(l || []))(s, u, c),
        push(d) {
          this.inner.push(d);
        },
        format: r,
        value() {
          return this.inner.value() / s.getAggregator(...Array.from(this.selector || [])).inner.value();
        },
        numInputs: i(...Array.from(l || []))().numInputs
      };
    };
  }
};
kt.countUnique = (i) => kt.uniques((o) => o.length, i);
kt.listUnique = (i) => kt.uniques((o) => o.join(i), (o) => o);
kt.max = (i) => kt.extremes("max", i);
kt.min = (i) => kt.extremes("min", i);
kt.first = (i) => kt.extremes("first", i);
kt.last = (i) => kt.extremes("last", i);
kt.median = (i) => kt.quantile(0.5, i);
kt.average = (i) => kt.runningStat("mean", 1, i);
kt.var = (i, o) => kt.runningStat("var", i, o);
kt.stdev = (i, o) => kt.runningStat("stdev", i, o);
const ji = ((i) => ({
  Count: i.count(yn),
  "Count Unique Values": i.countUnique(yn),
  "List Unique Values": i.listUnique(", "),
  Sum: i.sum(Lt),
  "Integer Sum": i.sum(yn),
  Average: i.average(Lt),
  Median: i.median(Lt),
  "Sample Variance": i.var(1, Lt),
  "Sample Standard Deviation": i.stdev(1, Lt),
  Minimum: i.min(Lt),
  Maximum: i.max(Lt),
  First: i.first(Lt),
  Last: i.last(Lt),
  "Sum over Sum": i.sumOverSum(Lt),
  "Sum as Fraction of Total": i.fractionOf(i.sum(), "total", Ee),
  "Sum as Fraction of Rows": i.fractionOf(i.sum(), "row", Ee),
  "Sum as Fraction of Columns": i.fractionOf(i.sum(), "col", Ee),
  "Count as Fraction of Total": i.fractionOf(i.count(), "total", Ee),
  "Count as Fraction of Rows": i.fractionOf(i.count(), "row", Ee),
  "Count as Fraction of Columns": i.fractionOf(i.count(), "col", Ee)
}))(kt), Mm = ((i) => ({
  Compte: i.count(yn),
  "Compter les valeurs uniques": i.countUnique(yn),
  "Liste des valeurs uniques": i.listUnique(", "),
  Somme: i.sum(Lt),
  "Somme de nombres entiers": i.sum(yn),
  Moyenne: i.average(Lt),
  M\u00E9diane: i.median(Lt),
  "Variance de l'\xE9chantillon": i.var(1, Lt),
  "\xC9cart-type de l'\xE9chantillon": i.stdev(1, Lt),
  Minimum: i.min(Lt),
  Maximum: i.max(Lt),
  Premier: i.first(Lt),
  Dernier: i.last(Lt),
  "Somme Total": i.sumOverSum(Lt),
  "Somme en fraction du total": i.fractionOf(i.sum(), "total", Ee),
  "Somme en tant que fraction de lignes": i.fractionOf(i.sum(), "row", Ee),
  "Somme en tant que fraction de colonnes": i.fractionOf(i.sum(), "col", Ee),
  "Comptage en tant que fraction du total": i.fractionOf(i.count(), "total", Ee),
  "Comptage en tant que fraction de lignes": i.fractionOf(i.count(), "row", Ee),
  "Comptage en tant que fraction de colonnes": i.fractionOf(i.count(), "col", Ee)
}))(kt), Rs = {
  en: {
    aggregators: ji,
    localeStrings: {
      renderError: "An error occurred rendering the PivotTable results.",
      computeError: "An error occurred computing the PivotTable results.",
      uiRenderError: "An error occurred rendering the PivotTable UI.",
      selectAll: "Select All",
      selectNone: "Select None",
      tooMany: "(too many to list)",
      filterResults: "Filter values",
      totals: "Totals",
      vs: "vs",
      by: "by",
      cancel: "Cancel",
      only: "only"
    }
  },
  fr: {
    frAggregators: Mm,
    localeStrings: {
      renderError: "Une erreur est survenue en dessinant le tableau crois\xE9.",
      computeError: "Une erreur est survenue en calculant le tableau crois\xE9.",
      uiRenderError: "Une erreur est survenue en dessinant l'interface du tableau crois\xE9 dynamique.",
      selectAll: "S\xE9lectionner tout",
      selectNone: "Ne rien s\xE9lectionner",
      tooMany: "(trop de valeurs \xE0 afficher)",
      filterResults: "Filtrer les valeurs",
      totals: "Totaux",
      vs: "sur",
      by: "par",
      apply: "Appliquer",
      cancel: "Annuler",
      only: "seul"
    }
  }
}, Rm = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Lm = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Sr = (i) => `0${i}`.substr(-2, 2), Pm = {
  bin(i, o) {
    return (r) => r[i] - r[i] % o;
  },
  dateFormat(i, o, r = !1, l = Rm, s = Lm) {
    const u = r ? "UTC" : "";
    return function(c) {
      const d = new Date(Date.parse(c[i]));
      return isNaN(d) ? "" : o.replace(/%(.)/g, function(g, _) {
        switch (_) {
          case "y":
            return d[`get${u}FullYear`]();
          case "m":
            return Sr(d[`get${u}Month`]() + 1);
          case "n":
            return l[d[`get${u}Month`]()];
          case "d":
            return Sr(d[`get${u}Date`]());
          case "w":
            return s[d[`get${u}Day`]()];
          case "x":
            return d[`get${u}Day`]();
          case "H":
            return Sr(d[`get${u}Hours`]());
          case "M":
            return Sr(d[`get${u}Minutes`]());
          case "S":
            return Sr(d[`get${u}Seconds`]());
          default:
            return `%${_}`;
        }
      });
    };
  }
};
class on {
  constructor(o = {}) {
    this.props = Object.assign({}, on.defaultProps, o), this.aggregator = this.props.aggregators[this.props.aggregatorName](
      this.props.vals
    ), this.tree = {}, this.rowKeys = [], this.colKeys = [], this.rowTotals = {}, this.colTotals = {}, this.allTotal = this.aggregator(this, [], []), this.sorted = !1, this.filteredData = [], on.forEachRecord(
      this.props.data,
      this.props.derivedAttributes,
      (r) => {
        this.filter(r) && (this.filteredData.push(r), this.processRecord(r));
      }
    );
  }
  filter(o) {
    for (const r in this.props.valueFilter)
      if (o[r] in this.props.valueFilter[r])
        return !1;
    return !0;
  }
  forEachMatchingRecord(o, r) {
    return on.forEachRecord(
      this.props.data,
      this.props.derivedAttributes,
      (l) => {
        if (this.filter(l)) {
          for (const s in o)
            if (o[s] !== (s in l ? l[s] : "null"))
              return;
          r(l);
        }
      }
    );
  }
  arrSort(o) {
    let r;
    const l = (() => {
      const s = [];
      for (r of Array.from(o))
        s.push(Wa(this.props.sorters, r));
      return s;
    })();
    return function(s, u) {
      for (const c of Object.keys(l || {})) {
        const d = l[c], g = d(s[c], u[c]);
        if (g !== 0)
          return g;
      }
      return 0;
    };
  }
  sortKeys() {
    if (!this.sorted) {
      this.sorted = !0;
      const o = (r, l) => this.getAggregator(r, l).value();
      switch (this.props.rowOrder) {
        case "value_a_to_z":
          this.rowKeys.sort((r, l) => Pn(o(r, []), o(l, [])));
          break;
        case "value_z_to_a":
          this.rowKeys.sort((r, l) => -Pn(o(r, []), o(l, [])));
          break;
        default:
          this.rowKeys.sort(this.arrSort(this.props.rows));
      }
      switch (this.props.colOrder) {
        case "value_a_to_z":
          this.colKeys.sort((r, l) => Pn(o([], r), o([], l)));
          break;
        case "value_z_to_a":
          this.colKeys.sort((r, l) => -Pn(o([], r), o([], l)));
          break;
        default:
          this.colKeys.sort(this.arrSort(this.props.cols));
      }
    }
  }
  getFilteredData() {
    return this.filteredData;
  }
  getColKeys() {
    return this.sortKeys(), this.colKeys;
  }
  getRowKeys() {
    return this.sortKeys(), this.rowKeys;
  }
  processRecord(o) {
    const r = [], l = [];
    for (const c of Array.from(this.props.cols))
      r.push(c in o ? o[c] : "null");
    for (const c of Array.from(this.props.rows))
      l.push(c in o ? o[c] : "null");
    const s = l.join(String.fromCharCode(0)), u = r.join(String.fromCharCode(0));
    this.allTotal.push(o), l.length !== 0 && (this.rowTotals[s] || (this.rowKeys.push(l), this.rowTotals[s] = this.aggregator(this, l, [])), this.rowTotals[s].push(o)), r.length !== 0 && (this.colTotals[u] || (this.colKeys.push(r), this.colTotals[u] = this.aggregator(this, [], r)), this.colTotals[u].push(o)), r.length !== 0 && l.length !== 0 && (this.tree[s] || (this.tree[s] = {}), this.tree[s][u] || (this.tree[s][u] = this.aggregator(
      this,
      l,
      r
    )), this.tree[s][u].push(o));
  }
  getAggregator(o, r) {
    let l;
    const s = o.join(String.fromCharCode(0)), u = r.join(String.fromCharCode(0));
    return o.length === 0 && r.length === 0 ? l = this.allTotal : o.length === 0 ? l = this.colTotals[u] : r.length === 0 ? l = this.rowTotals[s] : l = this.tree[s][u], l || {
      value() {
        return null;
      },
      format() {
        return "";
      }
    };
  }
}
on.forEachRecord = function(i, o, r) {
  let l, s;
  if (Object.getOwnPropertyNames(o).length === 0 ? l = r : l = function(u) {
    for (const c in o) {
      const d = o[c](u);
      d !== null && (u[c] = d);
    }
    return r(u);
  }, typeof i == "function")
    return i(l);
  if (Array.isArray(i))
    return Array.isArray(i[0]) ? (() => {
      const u = [];
      for (const c of Object.keys(i || {})) {
        const d = i[c];
        if (c > 0) {
          s = {};
          for (const g of Object.keys(i[0] || {})) {
            const _ = i[0][g];
            s[_] = d[g];
          }
          u.push(l(s));
        }
      }
      return u;
    })() : (() => {
      const u = [];
      for (s of Array.from(i))
        u.push(l(s));
      return u;
    })();
  throw new Error("unknown input format");
};
on.defaultProps = {
  aggregators: ji,
  cols: [],
  rows: [],
  vals: [],
  aggregatorName: "Count",
  sorters: {},
  valueFilter: {},
  rowOrder: "key_a_to_z",
  colOrder: "key_a_to_z",
  derivedAttributes: {}
};
const Ba = {
  props: {
    data: {
      type: [Array, Object, Function],
      required: !0
    },
    aggregators: {
      type: Object,
      default: function() {
        return ji;
      }
    },
    aggregatorName: {
      type: String,
      default: "Count"
    },
    heatmapMode: String,
    tableColorScaleGenerator: {
      type: Function
    },
    tableOptions: {
      type: Object,
      default: function() {
        return {};
      }
    },
    renderers: Object,
    rendererName: {
      type: String,
      default: "Table"
    },
    locale: {
      type: String,
      default: "en"
    },
    locales: {
      type: Object,
      default: function() {
        return Rs;
      }
    },
    rowTotal: {
      type: Boolean,
      default: !0
    },
    colTotal: {
      type: Boolean,
      default: !0
    },
    cols: {
      type: Array,
      default: function() {
        return [];
      }
    },
    rows: {
      type: Array,
      default: function() {
        return [];
      }
    },
    vals: {
      type: Array,
      default: function() {
        return [];
      }
    },
    attributes: {
      type: Array,
      default: function() {
        return [];
      }
    },
    valueFilter: {
      type: Object,
      default: function() {
        return {};
      }
    },
    sorters: {
      type: [Function, Object],
      default: function() {
        return {};
      }
    },
    derivedAttributes: {
      type: [Function, Object],
      default: function() {
        return {};
      }
    },
    rowOrder: {
      type: String,
      default: "key_a_to_z",
      validator: function(i) {
        return ["key_a_to_z", "value_a_to_z", "value_z_to_a"].indexOf(i) !== -1;
      }
    },
    colOrder: {
      type: String,
      default: "key_a_to_z",
      validator: function(i) {
        return ["key_a_to_z", "value_a_to_z", "value_z_to_a"].indexOf(i) !== -1;
      }
    },
    tableMaxWidth: {
      type: Number,
      default: 0,
      validator: function(i) {
        return i >= 0;
      }
    }
  },
  methods: {
    renderError(i) {
      return i("span", this.locales[this.locale].localeStrings.renderError || "An error occurred rendering the PivotTable results.");
    },
    computeError(i) {
      return i("span", this.locales[this.locale].localeStrings.computeError || "An error occurred computing the PivotTable results.");
    },
    uiRenderError(i) {
      return i("span", this.locales[this.locale].localeStrings.uiRenderError || "An error occurred rendering the PivotTable UI.");
    }
  }
};
function Nm(i) {
  const o = Math.min.apply(Math, i), r = Math.max.apply(Math, i);
  return (l) => {
    const s = 255 - Math.round(255 * (l - o) / (r - o));
    return { backgroundColor: `rgb(255,${s},${s})` };
  };
}
function Ii(i = {}) {
  return {
    name: i.name,
    mixins: [
      Ba
    ],
    props: {
      heatmapMode: String,
      tableColorScaleGenerator: {
        type: Function,
        default: Nm
      },
      tableOptions: {
        type: Object,
        default: function() {
          return {
            clickCallback: null
          };
        }
      },
      localeStrings: {
        type: Object,
        default: function() {
          return {
            totals: "Totals"
          };
        }
      }
    },
    methods: {
      spanSize(o, r, l) {
        let s;
        if (r !== 0) {
          let c, d, g = !0;
          for (s = 0, d = l, c = d >= 0; c ? s <= d : s >= d; c ? s++ : s--)
            o[r - 1][s] !== o[r][s] && (g = !1);
          if (g)
            return -1;
        }
        let u = 0;
        for (; r + u < o.length; ) {
          let c, d, g = !1;
          for (s = 0, d = l, c = d >= 0; c ? s <= d : s >= d; c ? s++ : s--)
            o[r][s] !== o[r + u][s] && (g = !0);
          if (g)
            break;
          u++;
        }
        return u;
      }
    },
    render(o) {
      let r = null;
      try {
        const A = Object.assign(
          {},
          this.$props,
          this.$attrs.props
        );
        r = new on(A);
      } catch (A) {
        if (console && console.error(A.stack))
          return this.computeError(o);
      }
      const l = r.props.cols, s = r.props.rows, u = r.getRowKeys(), c = r.getColKeys(), d = r.getAggregator([], []);
      let g = () => {
      }, _ = () => {
      }, b = () => {
      };
      if (i.heatmapMode) {
        const A = this.tableColorScaleGenerator, O = c.map(
          (S) => r.getAggregator([], S).value()
        );
        _ = A(O);
        const T = u.map(
          (S) => r.getAggregator(S, []).value()
        );
        if (b = A(T), i.heatmapMode === "full") {
          const S = [];
          u.map(
            (F) => c.map(
              (k) => S.push(r.getAggregator(F, k).value())
            )
          );
          const L = A(S);
          g = (F, k, W) => L(W);
        } else if (i.heatmapMode === "row") {
          const S = {};
          u.map((L) => {
            const F = c.map(
              (k) => r.getAggregator(L, k).value()
            );
            S[L] = A(F);
          }), g = (L, F, k) => S[L](k);
        } else if (i.heatmapMode === "col") {
          const S = {};
          c.map((L) => {
            const F = u.map(
              (k) => r.getAggregator(k, L).value()
            );
            S[L] = A(F);
          }), g = (L, F, k) => S[F](k);
        }
      }
      const x = (A, O, T) => {
        const S = this.tableOptions;
        if (S && S.clickCallback) {
          const L = {};
          let F = {};
          for (let k in l)
            !T.hasOwnProperty(k) || (F = l[k], T[k] !== null && (L[F] = T[k]));
          for (let k in s)
            !O.hasOwnProperty(k) || (F = s[k], O[k] !== null && (L[F] = O[k]));
          return (k) => S.clickCallback(k, A, L, r);
        }
      };
      return o("table", {
        staticClass: ["pvtTable"]
      }, [
        o(
          "thead",
          [
            l.map((A, O) => o(
              "tr",
              {
                attrs: {
                  key: `colAttrs${O}`
                }
              },
              [
                O === 0 && s.length !== 0 ? o("th", {
                  attrs: {
                    colSpan: s.length,
                    rowSpan: l.length
                  }
                }) : void 0,
                o("th", {
                  staticClass: ["pvtAxisLabel"]
                }, A),
                c.map((T, S) => {
                  const L = this.spanSize(c, S, O);
                  return L === -1 ? null : o("th", {
                    staticClass: ["pvtColLabel"],
                    attrs: {
                      key: `colKey${S}`,
                      colSpan: L,
                      rowSpan: O === l.length - 1 && s.length !== 0 ? 2 : 1
                    }
                  }, T[O]);
                }),
                O === 0 && this.rowTotal ? o("th", {
                  staticClass: ["pvtTotalLabel"],
                  attrs: {
                    rowSpan: l.length + (s.length === 0 ? 0 : 1)
                  }
                }, this.localeStrings.totals) : void 0
              ]
            )),
            s.length !== 0 ? o(
              "tr",
              [
                s.map((A, O) => o("th", {
                  staticClass: ["pvtAxisLabel"],
                  attrs: {
                    key: `rowAttr${O}`
                  }
                }, A)),
                this.rowTotal ? o("th", { staticClass: ["pvtTotalLabel"] }, l.length === 0 ? this.localeStrings.totals : null) : l.length === 0 ? void 0 : o("th", { staticClass: ["pvtTotalLabel"] }, null)
              ]
            ) : void 0
          ]
        ),
        o(
          "tbody",
          [
            u.map((A, O) => {
              const T = r.getAggregator(A, []);
              return o(
                "tr",
                {
                  attrs: {
                    key: `rowKeyRow${O}`
                  }
                },
                [
                  A.map((S, L) => {
                    const F = this.spanSize(u, O, L);
                    return F === -1 ? null : o("th", {
                      staticClass: ["pvtRowLabel"],
                      attrs: {
                        key: `rowKeyLabel${O}-${L}`,
                        rowSpan: F,
                        colSpan: L === s.length - 1 && l.length !== 0 ? 2 : 1
                      }
                    }, S);
                  }),
                  c.map((S, L) => {
                    const F = r.getAggregator(A, S);
                    return o("td", {
                      staticClass: ["pvVal"],
                      style: g(A, S, F.value()),
                      attrs: {
                        key: `pvtVal${O}-${L}`
                      },
                      on: this.tableOptions.clickCallback ? {
                        click: x(F.value(), A, S)
                      } : {}
                    }, F.format(F.value()));
                  }),
                  this.rowTotal ? o("td", {
                    staticClass: ["pvtTotal"],
                    style: b(T.value()),
                    on: this.tableOptions.clickCallback ? {
                      click: x(T.value(), A, [])
                    } : {}
                  }, T.format(T.value())) : void 0
                ]
              );
            }),
            o(
              "tr",
              [
                this.colTotal ? o("th", {
                  staticClass: ["pvtTotalLabel"],
                  attrs: {
                    colSpan: s.length + (l.length === 0 ? 0 : 1)
                  }
                }, this.localeStrings.totals) : void 0,
                this.colTotal ? c.map((A, O) => {
                  const T = r.getAggregator([], A);
                  return o("td", {
                    staticClass: ["pvtTotal"],
                    style: _(T.value()),
                    attrs: {
                      key: `total${O}`
                    },
                    on: this.tableOptions.clickCallback ? {
                      click: x(T.value(), [], A)
                    } : {}
                  }, T.format(T.value()));
                }) : void 0,
                this.colTotal && this.rowTotal ? o("td", {
                  staticClass: ["pvtGrandTotal"],
                  on: this.tableOptions.clickCallback ? {
                    click: x(d.value(), [], [])
                  } : {}
                }, d.format(d.value())) : void 0
              ]
            )
          ]
        )
      ]);
    },
    renderError(o, r) {
      return this.renderError(o);
    }
  };
}
const Fm = {
  name: "tsv-export-renderers",
  mixins: [Ba],
  render(i) {
    const o = new on(this.$props), r = o.getRowKeys(), l = o.getColKeys();
    r.length === 0 && r.push([]), l.length === 0 && l.push([]);
    const s = o.props.rows.map((c) => c);
    l.length === 1 && l[0].length === 0 ? s.push(this.aggregatorName) : l.map((c) => s.push(c.join("-")));
    const u = r.map((c) => {
      const d = c.map((g) => g);
      return l.map((g) => {
        const _ = o.getAggregator(c, g).value();
        d.push(_ || "");
      }), d;
    });
    return u.unshift(s), i("textarea", {
      style: {
        width: "100%",
        height: `${window.innerHeight / 2}px`
      },
      attrs: {
        readOnly: !0
      },
      domProps: {
        value: u.map((c) => c.join("	")).join(`
`)
      }
    });
  },
  renderError(i, o) {
    return this.renderError(i);
  }
}, Wm = {
  Table: Ii({ name: "vue-table" }),
  "Table Heatmap": Ii({ heatmapMode: "full", name: "vue-table-heatmap" }),
  "Table Col Heatmap": Ii({ heatmapMode: "col", name: "vue-table-col-heatmap" }),
  "Table Row Heatmap": Ii({ heatmapMode: "row", name: "vue-table-col-heatmap" }),
  "Export Table TSV": Fm
}, Bm = {
  name: "vue-pivottable",
  mixins: [
    Ba
  ],
  computed: {
    rendererItems() {
      return this.renderers || Object.assign({}, Wm);
    }
  },
  methods: {
    createPivottable(i) {
      const o = this.$props;
      return i(this.rendererItems[this.rendererName], {
        props: Object.assign(
          o,
          { localeStrings: o.locales[o.locale].localeStrings }
        )
      });
    },
    createWrapperContainer(i) {
      return i("div", {
        style: {
          display: "block",
          width: "100%",
          "overflow-x": "auto",
          "max-width": this.tableMaxWidth ? `${this.tableMaxWidth}px` : void 0
        }
      }, [
        this.createPivottable(i)
      ]);
    }
  },
  render(i) {
    return this.createWrapperContainer(i);
  },
  renderError(i, o) {
    return this.renderError(i);
  }
};
var km = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $m(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Um(i) {
  var o = i.default;
  if (typeof o == "function") {
    var r = function() {
      return o.apply(this, arguments);
    };
    r.prototype = o.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(i).forEach(function(l) {
    var s = Object.getOwnPropertyDescriptor(i, l);
    Object.defineProperty(r, l, s.get ? s : {
      enumerable: !0,
      get: function() {
        return i[l];
      }
    });
  }), r;
}
var Ls = { exports: {} };
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Wi(i) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wi = function(o) {
    return typeof o;
  } : Wi = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Wi(i);
}
function Km(i, o, r) {
  return o in i ? Object.defineProperty(i, o, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[o] = r, i;
}
function Pe() {
  return Pe = Object.assign || function(i) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (i[l] = r[l]);
    }
    return i;
  }, Pe.apply(this, arguments);
}
function wn(i) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {}, l = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" && (l = l.concat(Object.getOwnPropertySymbols(r).filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    }))), l.forEach(function(s) {
      Km(i, s, r[s]);
    });
  }
  return i;
}
function Gm(i, o) {
  if (i == null)
    return {};
  var r = {}, l = Object.keys(i), s, u;
  for (u = 0; u < l.length; u++)
    s = l[u], !(o.indexOf(s) >= 0) && (r[s] = i[s]);
  return r;
}
function Hm(i, o) {
  if (i == null)
    return {};
  var r = Gm(i, o), l, s;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(i);
    for (s = 0; s < u.length; s++)
      l = u[s], !(o.indexOf(l) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, l) || (r[l] = i[l]));
  }
  return r;
}
function qm(i) {
  return Ym(i) || zm(i) || Xm();
}
function Ym(i) {
  if (Array.isArray(i)) {
    for (var o = 0, r = new Array(i.length); o < i.length; o++)
      r[o] = i[o];
    return r;
  }
}
function zm(i) {
  if (Symbol.iterator in Object(i) || Object.prototype.toString.call(i) === "[object Arguments]")
    return Array.from(i);
}
function Xm() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
var Zm = "1.10.2";
function an(i) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(i);
}
var un = an(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Fr = an(/Edge/i), xs = an(/firefox/i), Ma = an(/safari/i) && !an(/chrome/i) && !an(/android/i), Ps = an(/iP(ad|od|hone)/i), jm = an(/chrome/i) && an(/android/i), Ns = {
  capture: !1,
  passive: !1
};
function xt(i, o, r) {
  i.addEventListener(o, r, !un && Ns);
}
function _t(i, o, r) {
  i.removeEventListener(o, r, !un && Ns);
}
function Gi(i, o) {
  if (o) {
    if (o[0] === ">" && (o = o.substring(1)), i)
      try {
        if (i.matches)
          return i.matches(o);
        if (i.msMatchesSelector)
          return i.msMatchesSelector(o);
        if (i.webkitMatchesSelector)
          return i.webkitMatchesSelector(o);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Jm(i) {
  return i.host && i !== document && i.host.nodeType ? i.host : i.parentNode;
}
function Ge(i, o, r, l) {
  if (i) {
    r = r || document;
    do {
      if (o != null && (o[0] === ">" ? i.parentNode === r && Gi(i, o) : Gi(i, o)) || l && i === r)
        return i;
      if (i === r)
        break;
    } while (i = Jm(i));
  }
  return null;
}
var Ss = /\s+/g;
function Bt(i, o, r) {
  if (i && o)
    if (i.classList)
      i.classList[r ? "add" : "remove"](o);
    else {
      var l = (" " + i.className + " ").replace(Ss, " ").replace(" " + o + " ", " ");
      i.className = (l + (r ? " " + o : "")).replace(Ss, " ");
    }
}
function H(i, o, r) {
  var l = i && i.style;
  if (l) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(i, "") : i.currentStyle && (r = i.currentStyle), o === void 0 ? r : r[o];
    !(o in l) && o.indexOf("webkit") === -1 && (o = "-webkit-" + o), l[o] = r + (typeof r == "string" ? "" : "px");
  }
}
function Nn(i, o) {
  var r = "";
  if (typeof i == "string")
    r = i;
  else
    do {
      var l = H(i, "transform");
      l && l !== "none" && (r = l + " " + r);
    } while (!o && (i = i.parentNode));
  var s = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return s && new s(r);
}
function Fs(i, o, r) {
  if (i) {
    var l = i.getElementsByTagName(o), s = 0, u = l.length;
    if (r)
      for (; s < u; s++)
        r(l[s], s);
    return l;
  }
  return [];
}
function ze() {
  var i = document.scrollingElement;
  return i || document.documentElement;
}
function Gt(i, o, r, l, s) {
  if (!(!i.getBoundingClientRect && i !== window)) {
    var u, c, d, g, _, b, x;
    if (i !== window && i !== ze() ? (u = i.getBoundingClientRect(), c = u.top, d = u.left, g = u.bottom, _ = u.right, b = u.height, x = u.width) : (c = 0, d = 0, g = window.innerHeight, _ = window.innerWidth, b = window.innerHeight, x = window.innerWidth), (o || r) && i !== window && (s = s || i.parentNode, !un))
      do
        if (s && s.getBoundingClientRect && (H(s, "transform") !== "none" || r && H(s, "position") !== "static")) {
          var A = s.getBoundingClientRect();
          c -= A.top + parseInt(H(s, "border-top-width")), d -= A.left + parseInt(H(s, "border-left-width")), g = c + u.height, _ = d + u.width;
          break;
        }
      while (s = s.parentNode);
    if (l && i !== window) {
      var O = Nn(s || i), T = O && O.a, S = O && O.d;
      O && (c /= S, d /= T, x /= T, b /= S, g = c + b, _ = d + x);
    }
    return {
      top: c,
      left: d,
      bottom: g,
      right: _,
      width: x,
      height: b
    };
  }
}
function Es(i, o, r) {
  for (var l = bn(i, !0), s = Gt(i)[o]; l; ) {
    var u = Gt(l)[r], c = void 0;
    if (r === "top" || r === "left" ? c = s >= u : c = s <= u, !c)
      return l;
    if (l === ze())
      break;
    l = bn(l, !1);
  }
  return !1;
}
function Hi(i, o, r) {
  for (var l = 0, s = 0, u = i.children; s < u.length; ) {
    if (u[s].style.display !== "none" && u[s] !== nt.ghost && u[s] !== nt.dragged && Ge(u[s], r.draggable, i, !1)) {
      if (l === o)
        return u[s];
      l++;
    }
    s++;
  }
  return null;
}
function ka(i, o) {
  for (var r = i.lastElementChild; r && (r === nt.ghost || H(r, "display") === "none" || o && !Gi(r, o)); )
    r = r.previousElementSibling;
  return r || null;
}
function Kt(i, o) {
  var r = 0;
  if (!i || !i.parentNode)
    return -1;
  for (; i = i.previousElementSibling; )
    i.nodeName.toUpperCase() !== "TEMPLATE" && i !== nt.clone && (!o || Gi(i, o)) && r++;
  return r;
}
function As(i) {
  var o = 0, r = 0, l = ze();
  if (i)
    do {
      var s = Nn(i), u = s.a, c = s.d;
      o += i.scrollLeft * u, r += i.scrollTop * c;
    } while (i !== l && (i = i.parentNode));
  return [o, r];
}
function Vm(i, o) {
  for (var r in i)
    if (i.hasOwnProperty(r)) {
      for (var l in o)
        if (o.hasOwnProperty(l) && o[l] === i[r][l])
          return Number(r);
    }
  return -1;
}
function bn(i, o) {
  if (!i || !i.getBoundingClientRect)
    return ze();
  var r = i, l = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var s = H(r);
      if (r.clientWidth < r.scrollWidth && (s.overflowX == "auto" || s.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (s.overflowY == "auto" || s.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body)
          return ze();
        if (l || o)
          return r;
        l = !0;
      }
    }
  while (r = r.parentNode);
  return ze();
}
function Qm(i, o) {
  if (i && o)
    for (var r in o)
      o.hasOwnProperty(r) && (i[r] = o[r]);
  return i;
}
function ya(i, o) {
  return Math.round(i.top) === Math.round(o.top) && Math.round(i.left) === Math.round(o.left) && Math.round(i.height) === Math.round(o.height) && Math.round(i.width) === Math.round(o.width);
}
var Rr;
function Ws(i, o) {
  return function() {
    if (!Rr) {
      var r = arguments, l = this;
      r.length === 1 ? i.call(l, r[0]) : i.apply(l, r), Rr = setTimeout(function() {
        Rr = void 0;
      }, o);
    }
  };
}
function t0() {
  clearTimeout(Rr), Rr = void 0;
}
function Bs(i, o, r) {
  i.scrollLeft += o, i.scrollTop += r;
}
function $a(i) {
  var o = window.Polymer, r = window.jQuery || window.Zepto;
  return o && o.dom ? o.dom(i).cloneNode(!0) : r ? r(i).clone(!0)[0] : i.cloneNode(!0);
}
function Os(i, o) {
  H(i, "position", "absolute"), H(i, "top", o.top), H(i, "left", o.left), H(i, "width", o.width), H(i, "height", o.height);
}
function wa(i) {
  H(i, "position", ""), H(i, "top", ""), H(i, "left", ""), H(i, "width", ""), H(i, "height", "");
}
var oe = "Sortable" + new Date().getTime();
function e0() {
  var i = [], o;
  return {
    captureAnimationState: function() {
      if (i = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(l) {
          if (!(H(l, "display") === "none" || l === nt.ghost)) {
            i.push({
              target: l,
              rect: Gt(l)
            });
            var s = wn({}, i[i.length - 1].rect);
            if (l.thisAnimationDuration) {
              var u = Nn(l, !0);
              u && (s.top -= u.f, s.left -= u.e);
            }
            l.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(r) {
      i.push(r);
    },
    removeAnimationState: function(r) {
      i.splice(Vm(i, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var l = this;
      if (!this.options.animation) {
        clearTimeout(o), typeof r == "function" && r();
        return;
      }
      var s = !1, u = 0;
      i.forEach(function(c) {
        var d = 0, g = c.target, _ = g.fromRect, b = Gt(g), x = g.prevFromRect, A = g.prevToRect, O = c.rect, T = Nn(g, !0);
        T && (b.top -= T.f, b.left -= T.e), g.toRect = b, g.thisAnimationDuration && ya(x, b) && !ya(_, b) && (O.top - b.top) / (O.left - b.left) === (_.top - b.top) / (_.left - b.left) && (d = r0(O, x, A, l.options)), ya(b, _) || (g.prevFromRect = _, g.prevToRect = b, d || (d = l.options.animation), l.animate(g, O, b, d)), d && (s = !0, u = Math.max(u, d), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, d), g.thisAnimationDuration = d);
      }), clearTimeout(o), s ? o = setTimeout(function() {
        typeof r == "function" && r();
      }, u) : typeof r == "function" && r(), i = [];
    },
    animate: function(r, l, s, u) {
      if (u) {
        H(r, "transition", ""), H(r, "transform", "");
        var c = Nn(this.el), d = c && c.a, g = c && c.d, _ = (l.left - s.left) / (d || 1), b = (l.top - s.top) / (g || 1);
        r.animatingX = !!_, r.animatingY = !!b, H(r, "transform", "translate3d(" + _ + "px," + b + "px,0)"), n0(r), H(r, "transition", "transform " + u + "ms" + (this.options.easing ? " " + this.options.easing : "")), H(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          H(r, "transition", ""), H(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, u);
      }
    }
  };
}
function n0(i) {
  return i.offsetWidth;
}
function r0(i, o, r, l) {
  return Math.sqrt(Math.pow(o.top - i.top, 2) + Math.pow(o.left - i.left, 2)) / Math.sqrt(Math.pow(o.top - r.top, 2) + Math.pow(o.left - r.left, 2)) * l.animation;
}
var Er = [], xa = {
  initializeByDefault: !0
}, Wr = {
  mount: function(i) {
    for (var o in xa)
      xa.hasOwnProperty(o) && !(o in i) && (i[o] = xa[o]);
    Er.push(i);
  },
  pluginEvent: function(i, o, r) {
    var l = this;
    this.eventCanceled = !1, r.cancel = function() {
      l.eventCanceled = !0;
    };
    var s = i + "Global";
    Er.forEach(function(u) {
      !o[u.pluginName] || (o[u.pluginName][s] && o[u.pluginName][s](wn({
        sortable: o
      }, r)), o.options[u.pluginName] && o[u.pluginName][i] && o[u.pluginName][i](wn({
        sortable: o
      }, r)));
    });
  },
  initializePlugins: function(i, o, r, l) {
    Er.forEach(function(c) {
      var d = c.pluginName;
      if (!(!i.options[d] && !c.initializeByDefault)) {
        var g = new c(i, o, i.options);
        g.sortable = i, g.options = i.options, i[d] = g, Pe(r, g.defaults);
      }
    });
    for (var s in i.options)
      if (i.options.hasOwnProperty(s)) {
        var u = this.modifyOption(i, s, i.options[s]);
        typeof u < "u" && (i.options[s] = u);
      }
  },
  getEventProperties: function(i, o) {
    var r = {};
    return Er.forEach(function(l) {
      typeof l.eventProperties == "function" && Pe(r, l.eventProperties.call(o[l.pluginName], i));
    }), r;
  },
  modifyOption: function(i, o, r) {
    var l;
    return Er.forEach(function(s) {
      !i[s.pluginName] || s.optionListeners && typeof s.optionListeners[o] == "function" && (l = s.optionListeners[o].call(i[s.pluginName], r));
    }), l;
  }
};
function Cr(i) {
  var o = i.sortable, r = i.rootEl, l = i.name, s = i.targetEl, u = i.cloneEl, c = i.toEl, d = i.fromEl, g = i.oldIndex, _ = i.newIndex, b = i.oldDraggableIndex, x = i.newDraggableIndex, A = i.originalEvent, O = i.putSortable, T = i.extraEventProperties;
  if (o = o || r && r[oe], !!o) {
    var S, L = o.options, F = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !un && !Fr ? S = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(l, !0, !0)), S.to = c || r, S.from = d || r, S.item = s || r, S.clone = u, S.oldIndex = g, S.newIndex = _, S.oldDraggableIndex = b, S.newDraggableIndex = x, S.originalEvent = A, S.pullMode = O ? O.lastPutMode : void 0;
    var k = wn({}, T, Wr.getEventProperties(l, o));
    for (var W in k)
      S[W] = k[W];
    r && r.dispatchEvent(S), L[F] && L[F].call(o, S);
  }
}
var de = function(i, o) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = r.evt, s = Hm(r, ["evt"]);
  Wr.pluginEvent.bind(nt)(i, o, wn({
    dragEl: B,
    parentEl: Yt,
    ghostEl: ht,
    rootEl: Wt,
    nextEl: Ln,
    lastDownEl: Bi,
    cloneEl: Ut,
    cloneHidden: _n,
    dragStarted: Dr,
    putSortable: te,
    activeSortable: nt.active,
    originalEvent: l,
    oldIndex: er,
    oldDraggableIndex: Lr,
    newIndex: Se,
    newDraggableIndex: mn,
    hideGhostForTarget: Ks,
    unhideGhostForTarget: Gs,
    cloneNowHidden: function() {
      _n = !0;
    },
    cloneNowShown: function() {
      _n = !1;
    },
    dispatchSortableEvent: function(u) {
      se({
        sortable: o,
        name: u,
        originalEvent: l
      });
    }
  }, s));
};
function se(i) {
  Cr(wn({
    putSortable: te,
    cloneEl: Ut,
    targetEl: B,
    rootEl: Wt,
    oldIndex: er,
    oldDraggableIndex: Lr,
    newIndex: Se,
    newDraggableIndex: mn
  }, i));
}
var B, Yt, ht, Wt, Ln, Bi, Ut, _n, er, Se, Lr, mn, Mi, te, tr = !1, qi = !1, Yi = [], Mn, Ue, Sa, Ea, Ts, Cs, Dr, Vn, Pr, Nr = !1, Ri = !1, ki, ie, Aa = [], Ra = !1, zi = [], Ji = typeof document < "u", Li = Ps, Ds = Fr || un ? "cssFloat" : "float", i0 = Ji && !jm && !Ps && "draggable" in document.createElement("div"), ks = function() {
  if (Ji) {
    if (un)
      return !1;
    var i = document.createElement("x");
    return i.style.cssText = "pointer-events:auto", i.style.pointerEvents === "auto";
  }
}(), $s = function(i, o) {
  var r = H(i), l = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), s = Hi(i, 0, o), u = Hi(i, 1, o), c = s && H(s), d = u && H(u), g = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + Gt(s).width, _ = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + Gt(u).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && c.float && c.float !== "none") {
    var b = c.float === "left" ? "left" : "right";
    return u && (d.clear === "both" || d.clear === b) ? "vertical" : "horizontal";
  }
  return s && (c.display === "block" || c.display === "flex" || c.display === "table" || c.display === "grid" || g >= l && r[Ds] === "none" || u && r[Ds] === "none" && g + _ > l) ? "vertical" : "horizontal";
}, o0 = function(i, o, r) {
  var l = r ? i.left : i.top, s = r ? i.right : i.bottom, u = r ? i.width : i.height, c = r ? o.left : o.top, d = r ? o.right : o.bottom, g = r ? o.width : o.height;
  return l === c || s === d || l + u / 2 === c + g / 2;
}, a0 = function(i, o) {
  var r;
  return Yi.some(function(l) {
    if (!ka(l)) {
      var s = Gt(l), u = l[oe].options.emptyInsertThreshold, c = i >= s.left - u && i <= s.right + u, d = o >= s.top - u && o <= s.bottom + u;
      if (u && c && d)
        return r = l;
    }
  }), r;
}, Us = function(i) {
  function o(s, u) {
    return function(c, d, g, _) {
      var b = c.options.group.name && d.options.group.name && c.options.group.name === d.options.group.name;
      if (s == null && (u || b))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (u && s === "clone")
        return s;
      if (typeof s == "function")
        return o(s(c, d, g, _), u)(c, d, g, _);
      var x = (u ? c : d).options.group.name;
      return s === !0 || typeof s == "string" && s === x || s.join && s.indexOf(x) > -1;
    };
  }
  var r = {}, l = i.group;
  (!l || Wi(l) != "object") && (l = {
    name: l
  }), r.name = l.name, r.checkPull = o(l.pull, !0), r.checkPut = o(l.put), r.revertClone = l.revertClone, i.group = r;
}, Ks = function() {
  !ks && ht && H(ht, "display", "none");
}, Gs = function() {
  !ks && ht && H(ht, "display", "");
};
Ji && document.addEventListener("click", function(i) {
  if (qi)
    return i.preventDefault(), i.stopPropagation && i.stopPropagation(), i.stopImmediatePropagation && i.stopImmediatePropagation(), qi = !1, !1;
}, !0);
var Rn = function(i) {
  if (B) {
    i = i.touches ? i.touches[0] : i;
    var o = a0(i.clientX, i.clientY);
    if (o) {
      var r = {};
      for (var l in i)
        i.hasOwnProperty(l) && (r[l] = i[l]);
      r.target = r.rootEl = o, r.preventDefault = void 0, r.stopPropagation = void 0, o[oe]._onDragOver(r);
    }
  }
}, u0 = function(i) {
  B && B.parentNode[oe]._isOutsideThisEl(i.target);
};
function nt(i, o) {
  if (!(i && i.nodeType && i.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(i));
  this.el = i, this.options = o = Pe({}, o), i[oe] = this;
  var r = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(i.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return $s(i, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(u, c) {
      u.setData("Text", c.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: nt.supportPointer !== !1 && "PointerEvent" in window,
    emptyInsertThreshold: 5
  };
  Wr.initializePlugins(this, i, r);
  for (var l in r)
    !(l in o) && (o[l] = r[l]);
  Us(o);
  for (var s in this)
    s.charAt(0) === "_" && typeof this[s] == "function" && (this[s] = this[s].bind(this));
  this.nativeDraggable = o.forceFallback ? !1 : i0, this.nativeDraggable && (this.options.touchStartThreshold = 1), o.supportPointer ? xt(i, "pointerdown", this._onTapStart) : (xt(i, "mousedown", this._onTapStart), xt(i, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(i, "dragover", this), xt(i, "dragenter", this)), Yi.push(this.el), o.store && o.store.get && this.sort(o.store.get(this) || []), Pe(this, e0());
}
nt.prototype = {
  constructor: nt,
  _isOutsideThisEl: function(i) {
    !this.el.contains(i) && i !== this.el && (Vn = null);
  },
  _getDirection: function(i, o) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, i, o, B) : this.options.direction;
  },
  _onTapStart: function(i) {
    if (i.cancelable) {
      var o = this, r = this.el, l = this.options, s = l.preventOnFilter, u = i.type, c = i.touches && i.touches[0] || i.pointerType && i.pointerType === "touch" && i, d = (c || i).target, g = i.target.shadowRoot && (i.path && i.path[0] || i.composedPath && i.composedPath()[0]) || d, _ = l.filter;
      if (d0(r), !B && !(/mousedown|pointerdown/.test(u) && i.button !== 0 || l.disabled) && !g.isContentEditable && (d = Ge(d, l.draggable, r, !1), !(d && d.animated) && Bi !== d)) {
        if (er = Kt(d), Lr = Kt(d, l.draggable), typeof _ == "function") {
          if (_.call(this, i, d, this)) {
            se({
              sortable: o,
              rootEl: g,
              name: "filter",
              targetEl: d,
              toEl: r,
              fromEl: r
            }), de("filter", o, {
              evt: i
            }), s && i.cancelable && i.preventDefault();
            return;
          }
        } else if (_ && (_ = _.split(",").some(function(b) {
          if (b = Ge(g, b.trim(), r, !1), b)
            return se({
              sortable: o,
              rootEl: b,
              name: "filter",
              targetEl: d,
              fromEl: r,
              toEl: r
            }), de("filter", o, {
              evt: i
            }), !0;
        }), _)) {
          s && i.cancelable && i.preventDefault();
          return;
        }
        l.handle && !Ge(g, l.handle, r, !1) || this._prepareDragStart(i, c, d);
      }
    }
  },
  _prepareDragStart: function(i, o, r) {
    var l = this, s = l.el, u = l.options, c = s.ownerDocument, d;
    if (r && !B && r.parentNode === s) {
      var g = Gt(r);
      if (Wt = s, B = r, Yt = B.parentNode, Ln = B.nextSibling, Bi = r, Mi = u.group, nt.dragged = B, Mn = {
        target: B,
        clientX: (o || i).clientX,
        clientY: (o || i).clientY
      }, Ts = Mn.clientX - g.left, Cs = Mn.clientY - g.top, this._lastX = (o || i).clientX, this._lastY = (o || i).clientY, B.style["will-change"] = "all", d = function() {
        if (de("delayEnded", l, {
          evt: i
        }), nt.eventCanceled) {
          l._onDrop();
          return;
        }
        l._disableDelayedDragEvents(), !xs && l.nativeDraggable && (B.draggable = !0), l._triggerDragStart(i, o), se({
          sortable: l,
          name: "choose",
          originalEvent: i
        }), Bt(B, u.chosenClass, !0);
      }, u.ignore.split(",").forEach(function(_) {
        Fs(B, _.trim(), Ta);
      }), xt(c, "dragover", Rn), xt(c, "mousemove", Rn), xt(c, "touchmove", Rn), xt(c, "mouseup", l._onDrop), xt(c, "touchend", l._onDrop), xt(c, "touchcancel", l._onDrop), xs && this.nativeDraggable && (this.options.touchStartThreshold = 4, B.draggable = !0), de("delayStart", this, {
        evt: i
      }), u.delay && (!u.delayOnTouchOnly || o) && (!this.nativeDraggable || !(Fr || un))) {
        if (nt.eventCanceled) {
          this._onDrop();
          return;
        }
        xt(c, "mouseup", l._disableDelayedDrag), xt(c, "touchend", l._disableDelayedDrag), xt(c, "touchcancel", l._disableDelayedDrag), xt(c, "mousemove", l._delayedDragTouchMoveHandler), xt(c, "touchmove", l._delayedDragTouchMoveHandler), u.supportPointer && xt(c, "pointermove", l._delayedDragTouchMoveHandler), l._dragStartTimer = setTimeout(d, u.delay);
      } else
        d();
    }
  },
  _delayedDragTouchMoveHandler: function(i) {
    var o = i.touches ? i.touches[0] : i;
    Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    B && Ta(B), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var i = this.el.ownerDocument;
    _t(i, "mouseup", this._disableDelayedDrag), _t(i, "touchend", this._disableDelayedDrag), _t(i, "touchcancel", this._disableDelayedDrag), _t(i, "mousemove", this._delayedDragTouchMoveHandler), _t(i, "touchmove", this._delayedDragTouchMoveHandler), _t(i, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(i, o) {
    o = o || i.pointerType == "touch" && i, !this.nativeDraggable || o ? this.options.supportPointer ? xt(document, "pointermove", this._onTouchMove) : o ? xt(document, "touchmove", this._onTouchMove) : xt(document, "mousemove", this._onTouchMove) : (xt(B, "dragend", this), xt(Wt, "dragstart", this._onDragStart));
    try {
      document.selection ? $i(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(i, o) {
    if (tr = !1, Wt && B) {
      de("dragStarted", this, {
        evt: o
      }), this.nativeDraggable && xt(document, "dragover", u0);
      var r = this.options;
      !i && Bt(B, r.dragClass, !1), Bt(B, r.ghostClass, !0), nt.active = this, i && this._appendGhost(), se({
        sortable: this,
        name: "start",
        originalEvent: o
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Ue) {
      this._lastX = Ue.clientX, this._lastY = Ue.clientY, Ks();
      for (var i = document.elementFromPoint(Ue.clientX, Ue.clientY), o = i; i && i.shadowRoot && (i = i.shadowRoot.elementFromPoint(Ue.clientX, Ue.clientY), i !== o); )
        o = i;
      if (B.parentNode[oe]._isOutsideThisEl(i), o)
        do {
          if (o[oe]) {
            var r = void 0;
            if (r = o[oe]._onDragOver({
              clientX: Ue.clientX,
              clientY: Ue.clientY,
              target: i,
              rootEl: o
            }), r && !this.options.dragoverBubble)
              break;
          }
          i = o;
        } while (o = o.parentNode);
      Gs();
    }
  },
  _onTouchMove: function(i) {
    if (Mn) {
      var o = this.options, r = o.fallbackTolerance, l = o.fallbackOffset, s = i.touches ? i.touches[0] : i, u = ht && Nn(ht, !0), c = ht && u && u.a, d = ht && u && u.d, g = Li && ie && As(ie), _ = (s.clientX - Mn.clientX + l.x) / (c || 1) + (g ? g[0] - Aa[0] : 0) / (c || 1), b = (s.clientY - Mn.clientY + l.y) / (d || 1) + (g ? g[1] - Aa[1] : 0) / (d || 1);
      if (!nt.active && !tr) {
        if (r && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < r)
          return;
        this._onDragStart(i, !0);
      }
      if (ht) {
        u ? (u.e += _ - (Sa || 0), u.f += b - (Ea || 0)) : u = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: _,
          f: b
        };
        var x = "matrix(".concat(u.a, ",").concat(u.b, ",").concat(u.c, ",").concat(u.d, ",").concat(u.e, ",").concat(u.f, ")");
        H(ht, "webkitTransform", x), H(ht, "mozTransform", x), H(ht, "msTransform", x), H(ht, "transform", x), Sa = _, Ea = b, Ue = s;
      }
      i.cancelable && i.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ht) {
      var i = this.options.fallbackOnBody ? document.body : Wt, o = Gt(B, !0, Li, !0, i), r = this.options;
      if (Li) {
        for (ie = i; H(ie, "position") === "static" && H(ie, "transform") === "none" && ie !== document; )
          ie = ie.parentNode;
        ie !== document.body && ie !== document.documentElement ? (ie === document && (ie = ze()), o.top += ie.scrollTop, o.left += ie.scrollLeft) : ie = ze(), Aa = As(ie);
      }
      ht = B.cloneNode(!0), Bt(ht, r.ghostClass, !1), Bt(ht, r.fallbackClass, !0), Bt(ht, r.dragClass, !0), H(ht, "transition", ""), H(ht, "transform", ""), H(ht, "box-sizing", "border-box"), H(ht, "margin", 0), H(ht, "top", o.top), H(ht, "left", o.left), H(ht, "width", o.width), H(ht, "height", o.height), H(ht, "opacity", "0.8"), H(ht, "position", Li ? "absolute" : "fixed"), H(ht, "zIndex", "100000"), H(ht, "pointerEvents", "none"), nt.ghost = ht, i.appendChild(ht), H(ht, "transform-origin", Ts / parseInt(ht.style.width) * 100 + "% " + Cs / parseInt(ht.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(i, o) {
    var r = this, l = i.dataTransfer, s = r.options;
    if (de("dragStart", this, {
      evt: i
    }), nt.eventCanceled) {
      this._onDrop();
      return;
    }
    de("setupClone", this), nt.eventCanceled || (Ut = $a(B), Ut.draggable = !1, Ut.style["will-change"] = "", this._hideClone(), Bt(Ut, this.options.chosenClass, !1), nt.clone = Ut), r.cloneId = $i(function() {
      de("clone", r), !nt.eventCanceled && (r.options.removeCloneOnHide || Wt.insertBefore(Ut, B), r._hideClone(), se({
        sortable: r,
        name: "clone"
      }));
    }), !o && Bt(B, s.dragClass, !0), o ? (qi = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (_t(document, "mouseup", r._onDrop), _t(document, "touchend", r._onDrop), _t(document, "touchcancel", r._onDrop), l && (l.effectAllowed = "move", s.setData && s.setData.call(r, l, B)), xt(document, "drop", r), H(B, "transform", "translateZ(0)")), tr = !0, r._dragStartId = $i(r._dragStarted.bind(r, o, i)), xt(document, "selectstart", r), Dr = !0, Ma && H(document.body, "user-select", "none");
  },
  _onDragOver: function(i) {
    var o = this.el, r = i.target, l, s, u, c = this.options, d = c.group, g = nt.active, _ = Mi === d, b = c.sort, x = te || g, A, O = this, T = !1;
    if (Ra)
      return;
    function S(U, G) {
      de(U, O, wn({
        evt: i,
        isOwner: _,
        axis: A ? "vertical" : "horizontal",
        revert: u,
        dragRect: l,
        targetRect: s,
        canSort: b,
        fromSortable: x,
        target: r,
        completed: F,
        onMove: function(Z, z) {
          return Oa(Wt, o, B, l, Z, Gt(Z), i, z);
        },
        changed: k
      }, G));
    }
    function L() {
      S("dragOverAnimationCapture"), O.captureAnimationState(), O !== x && x.captureAnimationState();
    }
    function F(U) {
      return S("dragOverCompleted", {
        insertion: U
      }), U && (_ ? g._hideClone() : g._showClone(O), O !== x && (Bt(B, te ? te.options.ghostClass : g.options.ghostClass, !1), Bt(B, c.ghostClass, !0)), te !== O && O !== nt.active ? te = O : O === nt.active && te && (te = null), x === O && (O._ignoreWhileAnimating = r), O.animateAll(function() {
        S("dragOverAnimationComplete"), O._ignoreWhileAnimating = null;
      }), O !== x && (x.animateAll(), x._ignoreWhileAnimating = null)), (r === B && !B.animated || r === o && !r.animated) && (Vn = null), !c.dragoverBubble && !i.rootEl && r !== document && (B.parentNode[oe]._isOutsideThisEl(i.target), !U && Rn(i)), !c.dragoverBubble && i.stopPropagation && i.stopPropagation(), T = !0;
    }
    function k() {
      Se = Kt(B), mn = Kt(B, c.draggable), se({
        sortable: O,
        name: "change",
        toEl: o,
        newIndex: Se,
        newDraggableIndex: mn,
        originalEvent: i
      });
    }
    if (i.preventDefault !== void 0 && i.cancelable && i.preventDefault(), r = Ge(r, c.draggable, o, !0), S("dragOver"), nt.eventCanceled)
      return T;
    if (B.contains(i.target) || r.animated && r.animatingX && r.animatingY || O._ignoreWhileAnimating === r)
      return F(!1);
    if (qi = !1, g && !c.disabled && (_ ? b || (u = !Wt.contains(B)) : te === this || (this.lastPutMode = Mi.checkPull(this, g, B, i)) && d.checkPut(this, g, B, i))) {
      if (A = this._getDirection(i, r) === "vertical", l = Gt(B), S("dragOverValid"), nt.eventCanceled)
        return T;
      if (u)
        return Yt = Wt, L(), this._hideClone(), S("revert"), nt.eventCanceled || (Ln ? Wt.insertBefore(B, Ln) : Wt.appendChild(B)), F(!0);
      var W = ka(o, c.draggable);
      if (!W || f0(i, A, this) && !W.animated) {
        if (W === B)
          return F(!1);
        if (W && o === i.target && (r = W), r && (s = Gt(r)), Oa(Wt, o, B, l, r, s, i, !!r) !== !1)
          return L(), o.appendChild(B), Yt = o, k(), F(!0);
      } else if (r.parentNode === o) {
        s = Gt(r);
        var dt = 0, lt, ct = B.parentNode !== o, rt = !o0(B.animated && B.toRect || l, r.animated && r.toRect || s, A), it = A ? "top" : "left", j = Es(r, "top", "top") || Es(B, "top", "top"), Q = j ? j.scrollTop : void 0;
        Vn !== r && (lt = s[it], Nr = !1, Ri = !rt && c.invertSwap || ct), dt = c0(i, r, s, A, rt ? 1 : c.swapThreshold, c.invertedSwapThreshold == null ? c.swapThreshold : c.invertedSwapThreshold, Ri, Vn === r);
        var vt;
        if (dt !== 0) {
          var Nt = Kt(B);
          do
            Nt -= dt, vt = Yt.children[Nt];
          while (vt && (H(vt, "display") === "none" || vt === ht));
        }
        if (dt === 0 || vt === r)
          return F(!1);
        Vn = r, Pr = dt;
        var X = r.nextElementSibling, q = !1;
        q = dt === 1;
        var J = Oa(Wt, o, B, l, r, s, i, q);
        if (J !== !1)
          return (J === 1 || J === -1) && (q = J === 1), Ra = !0, setTimeout(s0, 30), L(), q && !X ? o.appendChild(B) : r.parentNode.insertBefore(B, q ? X : r), j && Bs(j, 0, Q - j.scrollTop), Yt = B.parentNode, lt !== void 0 && !Ri && (ki = Math.abs(lt - Gt(r)[it])), k(), F(!0);
      }
      if (o.contains(B))
        return F(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    _t(document, "mousemove", this._onTouchMove), _t(document, "touchmove", this._onTouchMove), _t(document, "pointermove", this._onTouchMove), _t(document, "dragover", Rn), _t(document, "mousemove", Rn), _t(document, "touchmove", Rn);
  },
  _offUpEvents: function() {
    var i = this.el.ownerDocument;
    _t(i, "mouseup", this._onDrop), _t(i, "touchend", this._onDrop), _t(i, "pointerup", this._onDrop), _t(i, "touchcancel", this._onDrop), _t(document, "selectstart", this);
  },
  _onDrop: function(i) {
    var o = this.el, r = this.options;
    if (Se = Kt(B), mn = Kt(B, r.draggable), de("drop", this, {
      evt: i
    }), Yt = B && B.parentNode, Se = Kt(B), mn = Kt(B, r.draggable), nt.eventCanceled) {
      this._nulling();
      return;
    }
    tr = !1, Ri = !1, Nr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), La(this.cloneId), La(this._dragStartId), this.nativeDraggable && (_t(document, "drop", this), _t(o, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ma && H(document.body, "user-select", ""), H(B, "transform", ""), i && (Dr && (i.cancelable && i.preventDefault(), !r.dropBubble && i.stopPropagation()), ht && ht.parentNode && ht.parentNode.removeChild(ht), (Wt === Yt || te && te.lastPutMode !== "clone") && Ut && Ut.parentNode && Ut.parentNode.removeChild(Ut), B && (this.nativeDraggable && _t(B, "dragend", this), Ta(B), B.style["will-change"] = "", Dr && !tr && Bt(B, te ? te.options.ghostClass : this.options.ghostClass, !1), Bt(B, this.options.chosenClass, !1), se({
      sortable: this,
      name: "unchoose",
      toEl: Yt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: i
    }), Wt !== Yt ? (Se >= 0 && (se({
      rootEl: Yt,
      name: "add",
      toEl: Yt,
      fromEl: Wt,
      originalEvent: i
    }), se({
      sortable: this,
      name: "remove",
      toEl: Yt,
      originalEvent: i
    }), se({
      rootEl: Yt,
      name: "sort",
      toEl: Yt,
      fromEl: Wt,
      originalEvent: i
    }), se({
      sortable: this,
      name: "sort",
      toEl: Yt,
      originalEvent: i
    })), te && te.save()) : Se !== er && Se >= 0 && (se({
      sortable: this,
      name: "update",
      toEl: Yt,
      originalEvent: i
    }), se({
      sortable: this,
      name: "sort",
      toEl: Yt,
      originalEvent: i
    })), nt.active && ((Se == null || Se === -1) && (Se = er, mn = Lr), se({
      sortable: this,
      name: "end",
      toEl: Yt,
      originalEvent: i
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    de("nulling", this), Wt = B = Yt = ht = Ln = Ut = Bi = _n = Mn = Ue = Dr = Se = mn = er = Lr = Vn = Pr = te = Mi = nt.dragged = nt.ghost = nt.clone = nt.active = null, zi.forEach(function(i) {
      i.checked = !0;
    }), zi.length = Sa = Ea = 0;
  },
  handleEvent: function(i) {
    switch (i.type) {
      case "drop":
      case "dragend":
        this._onDrop(i);
        break;
      case "dragenter":
      case "dragover":
        B && (this._onDragOver(i), l0(i));
        break;
      case "selectstart":
        i.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var i = [], o, r = this.el.children, l = 0, s = r.length, u = this.options; l < s; l++)
      o = r[l], Ge(o, u.draggable, this.el, !1) && i.push(o.getAttribute(u.dataIdAttr) || p0(o));
    return i;
  },
  sort: function(i) {
    var o = {}, r = this.el;
    this.toArray().forEach(function(l, s) {
      var u = r.children[s];
      Ge(u, this.options.draggable, r, !1) && (o[l] = u);
    }, this), i.forEach(function(l) {
      o[l] && (r.removeChild(o[l]), r.appendChild(o[l]));
    });
  },
  save: function() {
    var i = this.options.store;
    i && i.set && i.set(this);
  },
  closest: function(i, o) {
    return Ge(i, o || this.options.draggable, this.el, !1);
  },
  option: function(i, o) {
    var r = this.options;
    if (o === void 0)
      return r[i];
    var l = Wr.modifyOption(this, i, o);
    typeof l < "u" ? r[i] = l : r[i] = o, i === "group" && Us(r);
  },
  destroy: function() {
    de("destroy", this);
    var i = this.el;
    i[oe] = null, _t(i, "mousedown", this._onTapStart), _t(i, "touchstart", this._onTapStart), _t(i, "pointerdown", this._onTapStart), this.nativeDraggable && (_t(i, "dragover", this), _t(i, "dragenter", this)), Array.prototype.forEach.call(i.querySelectorAll("[draggable]"), function(o) {
      o.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Yi.splice(Yi.indexOf(this.el), 1), this.el = i = null;
  },
  _hideClone: function() {
    if (!_n) {
      if (de("hideClone", this), nt.eventCanceled)
        return;
      H(Ut, "display", "none"), this.options.removeCloneOnHide && Ut.parentNode && Ut.parentNode.removeChild(Ut), _n = !0;
    }
  },
  _showClone: function(i) {
    if (i.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (_n) {
      if (de("showClone", this), nt.eventCanceled)
        return;
      Wt.contains(B) && !this.options.group.revertClone ? Wt.insertBefore(Ut, B) : Ln ? Wt.insertBefore(Ut, Ln) : Wt.appendChild(Ut), this.options.group.revertClone && this.animate(B, Ut), H(Ut, "display", ""), _n = !1;
    }
  }
};
function l0(i) {
  i.dataTransfer && (i.dataTransfer.dropEffect = "move"), i.cancelable && i.preventDefault();
}
function Oa(i, o, r, l, s, u, c, d) {
  var g, _ = i[oe], b = _.options.onMove, x;
  return window.CustomEvent && !un && !Fr ? g = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (g = document.createEvent("Event"), g.initEvent("move", !0, !0)), g.to = o, g.from = i, g.dragged = r, g.draggedRect = l, g.related = s || o, g.relatedRect = u || Gt(o), g.willInsertAfter = d, g.originalEvent = c, i.dispatchEvent(g), b && (x = b.call(_, g, c)), x;
}
function Ta(i) {
  i.draggable = !1;
}
function s0() {
  Ra = !1;
}
function f0(i, o, r) {
  var l = Gt(ka(r.el, r.options.draggable)), s = 10;
  return o ? i.clientX > l.right + s || i.clientX <= l.right && i.clientY > l.bottom && i.clientX >= l.left : i.clientX > l.right && i.clientY > l.top || i.clientX <= l.right && i.clientY > l.bottom + s;
}
function c0(i, o, r, l, s, u, c, d) {
  var g = l ? i.clientY : i.clientX, _ = l ? r.height : r.width, b = l ? r.top : r.left, x = l ? r.bottom : r.right, A = !1;
  if (!c) {
    if (d && ki < _ * s) {
      if (!Nr && (Pr === 1 ? g > b + _ * u / 2 : g < x - _ * u / 2) && (Nr = !0), Nr)
        A = !0;
      else if (Pr === 1 ? g < b + ki : g > x - ki)
        return -Pr;
    } else if (g > b + _ * (1 - s) / 2 && g < x - _ * (1 - s) / 2)
      return h0(o);
  }
  return A = A || c, A && (g < b + _ * u / 2 || g > x - _ * u / 2) ? g > b + _ / 2 ? 1 : -1 : 0;
}
function h0(i) {
  return Kt(B) < Kt(i) ? 1 : -1;
}
function p0(i) {
  for (var o = i.tagName + i.className + i.src + i.href + i.textContent, r = o.length, l = 0; r--; )
    l += o.charCodeAt(r);
  return l.toString(36);
}
function d0(i) {
  zi.length = 0;
  for (var o = i.getElementsByTagName("input"), r = o.length; r--; ) {
    var l = o[r];
    l.checked && zi.push(l);
  }
}
function $i(i) {
  return setTimeout(i, 0);
}
function La(i) {
  return clearTimeout(i);
}
Ji && xt(document, "touchmove", function(i) {
  (nt.active || tr) && i.cancelable && i.preventDefault();
});
nt.utils = {
  on: xt,
  off: _t,
  css: H,
  find: Fs,
  is: function(i, o) {
    return !!Ge(i, o, i, !1);
  },
  extend: Qm,
  throttle: Ws,
  closest: Ge,
  toggleClass: Bt,
  clone: $a,
  index: Kt,
  nextTick: $i,
  cancelNextTick: La,
  detectDirection: $s,
  getChild: Hi
};
nt.get = function(i) {
  return i[oe];
};
nt.mount = function() {
  for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
    o[r] = arguments[r];
  o[0].constructor === Array && (o = o[0]), o.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (nt.utils = wn({}, nt.utils, l.utils)), Wr.mount(l);
  });
};
nt.create = function(i, o) {
  return new nt(i, o);
};
nt.version = Zm;
var zt = [], Ir, Pa, Na = !1, Ca, Da, Xi, Mr;
function g0() {
  function i() {
    this.defaults = {
      scroll: !0,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var o in this)
      o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  }
  return i.prototype = {
    dragStarted: function(o) {
      var r = o.originalEvent;
      this.sortable.nativeDraggable ? xt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? xt(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? xt(document, "touchmove", this._handleFallbackAutoScroll) : xt(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(o) {
      var r = o.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? _t(document, "dragover", this._handleAutoScroll) : (_t(document, "pointermove", this._handleFallbackAutoScroll), _t(document, "touchmove", this._handleFallbackAutoScroll), _t(document, "mousemove", this._handleFallbackAutoScroll)), Is(), Ui(), t0();
    },
    nulling: function() {
      Xi = Pa = Ir = Na = Mr = Ca = Da = null, zt.length = 0;
    },
    _handleFallbackAutoScroll: function(o) {
      this._handleAutoScroll(o, !0);
    },
    _handleAutoScroll: function(o, r) {
      var l = this, s = (o.touches ? o.touches[0] : o).clientX, u = (o.touches ? o.touches[0] : o).clientY, c = document.elementFromPoint(s, u);
      if (Xi = o, r || Fr || un || Ma) {
        Ia(o, this.options, c, r);
        var d = bn(c, !0);
        Na && (!Mr || s !== Ca || u !== Da) && (Mr && Is(), Mr = setInterval(function() {
          var g = bn(document.elementFromPoint(s, u), !0);
          g !== d && (d = g, Ui()), Ia(o, l.options, g, r);
        }, 10), Ca = s, Da = u);
      } else {
        if (!this.options.bubbleScroll || bn(c, !0) === ze()) {
          Ui();
          return;
        }
        Ia(o, this.options, bn(c, !1), !1);
      }
    }
  }, Pe(i, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ui() {
  zt.forEach(function(i) {
    clearInterval(i.pid);
  }), zt = [];
}
function Is() {
  clearInterval(Mr);
}
var Ia = Ws(function(i, o, r, l) {
  if (o.scroll) {
    var s = (i.touches ? i.touches[0] : i).clientX, u = (i.touches ? i.touches[0] : i).clientY, c = o.scrollSensitivity, d = o.scrollSpeed, g = ze(), _ = !1, b;
    Pa !== r && (Pa = r, Ui(), Ir = o.scroll, b = o.scrollFn, Ir === !0 && (Ir = bn(r, !0)));
    var x = 0, A = Ir;
    do {
      var O = A, T = Gt(O), S = T.top, L = T.bottom, F = T.left, k = T.right, W = T.width, dt = T.height, lt = void 0, ct = void 0, rt = O.scrollWidth, it = O.scrollHeight, j = H(O), Q = O.scrollLeft, vt = O.scrollTop;
      O === g ? (lt = W < rt && (j.overflowX === "auto" || j.overflowX === "scroll" || j.overflowX === "visible"), ct = dt < it && (j.overflowY === "auto" || j.overflowY === "scroll" || j.overflowY === "visible")) : (lt = W < rt && (j.overflowX === "auto" || j.overflowX === "scroll"), ct = dt < it && (j.overflowY === "auto" || j.overflowY === "scroll"));
      var Nt = lt && (Math.abs(k - s) <= c && Q + W < rt) - (Math.abs(F - s) <= c && !!Q), X = ct && (Math.abs(L - u) <= c && vt + dt < it) - (Math.abs(S - u) <= c && !!vt);
      if (!zt[x])
        for (var q = 0; q <= x; q++)
          zt[q] || (zt[q] = {});
      (zt[x].vx != Nt || zt[x].vy != X || zt[x].el !== O) && (zt[x].el = O, zt[x].vx = Nt, zt[x].vy = X, clearInterval(zt[x].pid), (Nt != 0 || X != 0) && (_ = !0, zt[x].pid = setInterval(function() {
        l && this.layer === 0 && nt.active._onTouchMove(Xi);
        var J = zt[this.layer].vy ? zt[this.layer].vy * d : 0, U = zt[this.layer].vx ? zt[this.layer].vx * d : 0;
        typeof b == "function" && b.call(nt.dragged.parentNode[oe], U, J, i, Xi, zt[this.layer].el) !== "continue" || Bs(zt[this.layer].el, U, J);
      }.bind({
        layer: x
      }), 24))), x++;
    } while (o.bubbleScroll && A !== g && (A = bn(A, !1)));
    Na = _;
  }
}, 30), Hs = function(i) {
  var o = i.originalEvent, r = i.putSortable, l = i.dragEl, s = i.activeSortable, u = i.dispatchSortableEvent, c = i.hideGhostForTarget, d = i.unhideGhostForTarget;
  if (o) {
    var g = r || s;
    c();
    var _ = o.changedTouches && o.changedTouches.length ? o.changedTouches[0] : o, b = document.elementFromPoint(_.clientX, _.clientY);
    d(), g && !g.el.contains(b) && (u("spill"), this.onSpill({
      dragEl: l,
      putSortable: r
    }));
  }
};
function Ua() {
}
Ua.prototype = {
  startIndex: null,
  dragStart: function(i) {
    var o = i.oldDraggableIndex;
    this.startIndex = o;
  },
  onSpill: function(i) {
    var o = i.dragEl, r = i.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var l = Hi(this.sortable.el, this.startIndex, this.options);
    l ? this.sortable.el.insertBefore(o, l) : this.sortable.el.appendChild(o), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Hs
};
Pe(Ua, {
  pluginName: "revertOnSpill"
});
function Ka() {
}
Ka.prototype = {
  onSpill: function(i) {
    var o = i.dragEl, r = i.putSortable, l = r || this.sortable;
    l.captureAnimationState(), o.parentNode && o.parentNode.removeChild(o), l.animateAll();
  },
  drop: Hs
};
Pe(Ka, {
  pluginName: "removeOnSpill"
});
var Le;
function v0() {
  function i() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return i.prototype = {
    dragStart: function(o) {
      var r = o.dragEl;
      Le = r;
    },
    dragOverValid: function(o) {
      var r = o.completed, l = o.target, s = o.onMove, u = o.activeSortable, c = o.changed, d = o.cancel;
      if (u.options.swap) {
        var g = this.sortable.el, _ = this.options;
        if (l && l !== g) {
          var b = Le;
          s(l) !== !1 ? (Bt(l, _.swapClass, !0), Le = l) : Le = null, b && b !== Le && Bt(b, _.swapClass, !1);
        }
        c(), r(!0), d();
      }
    },
    drop: function(o) {
      var r = o.activeSortable, l = o.putSortable, s = o.dragEl, u = l || this.sortable, c = this.options;
      Le && Bt(Le, c.swapClass, !1), Le && (c.swap || l && l.options.swap) && s !== Le && (u.captureAnimationState(), u !== r && r.captureAnimationState(), m0(s, Le), u.animateAll(), u !== r && r.animateAll());
    },
    nulling: function() {
      Le = null;
    }
  }, Pe(i, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: Le
      };
    }
  });
}
function m0(i, o) {
  var r = i.parentNode, l = o.parentNode, s, u;
  !r || !l || r.isEqualNode(o) || l.isEqualNode(i) || (s = Kt(i), u = Kt(o), r.isEqualNode(l) && s < u && u++, r.insertBefore(o, r.children[s]), l.insertBefore(i, l.children[u]));
}
var ut = [], xe = [], Ar, Ke, Or = !1, we = !1, Qn = !1, Mt, Tr, Pi;
function _0() {
  function i(o) {
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
    o.options.supportPointer ? xt(document, "pointerup", this._deselectMultiDrag) : (xt(document, "mouseup", this._deselectMultiDrag), xt(document, "touchend", this._deselectMultiDrag)), xt(document, "keydown", this._checkKeyDown), xt(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(l, s) {
        var u = "";
        ut.length && Ke === o ? ut.forEach(function(c, d) {
          u += (d ? ", " : "") + c.textContent;
        }) : u = s.textContent, l.setData("Text", u);
      }
    };
  }
  return i.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(o) {
      var r = o.dragEl;
      Mt = r;
    },
    delayEnded: function() {
      this.isMultiDrag = ~ut.indexOf(Mt);
    },
    setupClone: function(o) {
      var r = o.sortable, l = o.cancel;
      if (this.isMultiDrag) {
        for (var s = 0; s < ut.length; s++)
          xe.push($a(ut[s])), xe[s].sortableIndex = ut[s].sortableIndex, xe[s].draggable = !1, xe[s].style["will-change"] = "", Bt(xe[s], this.options.selectedClass, !1), ut[s] === Mt && Bt(xe[s], this.options.chosenClass, !1);
        r._hideClone(), l();
      }
    },
    clone: function(o) {
      var r = o.sortable, l = o.rootEl, s = o.dispatchSortableEvent, u = o.cancel;
      !this.isMultiDrag || this.options.removeCloneOnHide || ut.length && Ke === r && (Ms(!0, l), s("clone"), u());
    },
    showClone: function(o) {
      var r = o.cloneNowShown, l = o.rootEl, s = o.cancel;
      !this.isMultiDrag || (Ms(!1, l), xe.forEach(function(u) {
        H(u, "display", "");
      }), r(), Pi = !1, s());
    },
    hideClone: function(o) {
      var r = this;
      o.sortable;
      var l = o.cloneNowHidden, s = o.cancel;
      !this.isMultiDrag || (xe.forEach(function(u) {
        H(u, "display", "none"), r.options.removeCloneOnHide && u.parentNode && u.parentNode.removeChild(u);
      }), l(), Pi = !0, s());
    },
    dragStartGlobal: function(o) {
      o.sortable, !this.isMultiDrag && Ke && Ke.multiDrag._deselectMultiDrag(), ut.forEach(function(r) {
        r.sortableIndex = Kt(r);
      }), ut = ut.sort(function(r, l) {
        return r.sortableIndex - l.sortableIndex;
      }), Qn = !0;
    },
    dragStarted: function(o) {
      var r = this, l = o.sortable;
      if (this.isMultiDrag) {
        if (this.options.sort && (l.captureAnimationState(), this.options.animation)) {
          ut.forEach(function(u) {
            u !== Mt && H(u, "position", "absolute");
          });
          var s = Gt(Mt, !1, !0, !0);
          ut.forEach(function(u) {
            u !== Mt && Os(u, s);
          }), we = !0, Or = !0;
        }
        l.animateAll(function() {
          we = !1, Or = !1, r.options.animation && ut.forEach(function(u) {
            wa(u);
          }), r.options.sort && Ni();
        });
      }
    },
    dragOver: function(o) {
      var r = o.target, l = o.completed, s = o.cancel;
      we && ~ut.indexOf(r) && (l(!1), s());
    },
    revert: function(o) {
      var r = o.fromSortable, l = o.rootEl, s = o.sortable, u = o.dragRect;
      ut.length > 1 && (ut.forEach(function(c) {
        s.addAnimationState({
          target: c,
          rect: we ? Gt(c) : u
        }), wa(c), c.fromRect = u, r.removeAnimationState(c);
      }), we = !1, b0(!this.options.removeCloneOnHide, l));
    },
    dragOverCompleted: function(o) {
      var r = o.sortable, l = o.isOwner, s = o.insertion, u = o.activeSortable, c = o.parentEl, d = o.putSortable, g = this.options;
      if (s) {
        if (l && u._hideClone(), Or = !1, g.animation && ut.length > 1 && (we || !l && !u.options.sort && !d)) {
          var _ = Gt(Mt, !1, !0, !0);
          ut.forEach(function(x) {
            x !== Mt && (Os(x, _), c.appendChild(x));
          }), we = !0;
        }
        if (!l)
          if (we || Ni(), ut.length > 1) {
            var b = Pi;
            u._showClone(r), u.options.animation && !Pi && b && xe.forEach(function(x) {
              u.addAnimationState({
                target: x,
                rect: Tr
              }), x.fromRect = Tr, x.thisAnimationDuration = null;
            });
          } else
            u._showClone(r);
      }
    },
    dragOverAnimationCapture: function(o) {
      var r = o.dragRect, l = o.isOwner, s = o.activeSortable;
      if (ut.forEach(function(c) {
        c.thisAnimationDuration = null;
      }), s.options.animation && !l && s.multiDrag.isMultiDrag) {
        Tr = Pe({}, r);
        var u = Nn(Mt, !0);
        Tr.top -= u.f, Tr.left -= u.e;
      }
    },
    dragOverAnimationComplete: function() {
      we && (we = !1, Ni());
    },
    drop: function(o) {
      var r = o.originalEvent, l = o.rootEl, s = o.parentEl, u = o.sortable, c = o.dispatchSortableEvent, d = o.oldIndex, g = o.putSortable, _ = g || this.sortable;
      if (r) {
        var b = this.options, x = s.children;
        if (!Qn)
          if (b.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), Bt(Mt, b.selectedClass, !~ut.indexOf(Mt)), ~ut.indexOf(Mt))
            ut.splice(ut.indexOf(Mt), 1), Ar = null, Cr({
              sortable: u,
              rootEl: l,
              name: "deselect",
              targetEl: Mt,
              originalEvt: r
            });
          else {
            if (ut.push(Mt), Cr({
              sortable: u,
              rootEl: l,
              name: "select",
              targetEl: Mt,
              originalEvt: r
            }), r.shiftKey && Ar && u.el.contains(Ar)) {
              var A = Kt(Ar), O = Kt(Mt);
              if (~A && ~O && A !== O) {
                var T, S;
                for (O > A ? (S = A, T = O) : (S = O, T = A + 1); S < T; S++)
                  ~ut.indexOf(x[S]) || (Bt(x[S], b.selectedClass, !0), ut.push(x[S]), Cr({
                    sortable: u,
                    rootEl: l,
                    name: "select",
                    targetEl: x[S],
                    originalEvt: r
                  }));
              }
            } else
              Ar = Mt;
            Ke = _;
          }
        if (Qn && this.isMultiDrag) {
          if ((s[oe].options.sort || s !== l) && ut.length > 1) {
            var L = Gt(Mt), F = Kt(Mt, ":not(." + this.options.selectedClass + ")");
            if (!Or && b.animation && (Mt.thisAnimationDuration = null), _.captureAnimationState(), !Or && (b.animation && (Mt.fromRect = L, ut.forEach(function(W) {
              if (W.thisAnimationDuration = null, W !== Mt) {
                var dt = we ? Gt(W) : L;
                W.fromRect = dt, _.addAnimationState({
                  target: W,
                  rect: dt
                });
              }
            })), Ni(), ut.forEach(function(W) {
              x[F] ? s.insertBefore(W, x[F]) : s.appendChild(W), F++;
            }), d === Kt(Mt))) {
              var k = !1;
              ut.forEach(function(W) {
                if (W.sortableIndex !== Kt(W)) {
                  k = !0;
                  return;
                }
              }), k && c("update");
            }
            ut.forEach(function(W) {
              wa(W);
            }), _.animateAll();
          }
          Ke = _;
        }
        (l === s || g && g.lastPutMode !== "clone") && xe.forEach(function(W) {
          W.parentNode && W.parentNode.removeChild(W);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = Qn = !1, xe.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), _t(document, "pointerup", this._deselectMultiDrag), _t(document, "mouseup", this._deselectMultiDrag), _t(document, "touchend", this._deselectMultiDrag), _t(document, "keydown", this._checkKeyDown), _t(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(o) {
      if (!(typeof Qn < "u" && Qn) && Ke === this.sortable && !(o && Ge(o.target, this.options.draggable, this.sortable.el, !1)) && !(o && o.button !== 0))
        for (; ut.length; ) {
          var r = ut[0];
          Bt(r, this.options.selectedClass, !1), ut.shift(), Cr({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: r,
            originalEvt: o
          });
        }
    },
    _checkKeyDown: function(o) {
      o.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
    },
    _checkKeyUp: function(o) {
      o.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
    }
  }, Pe(i, {
    pluginName: "multiDrag",
    utils: {
      select: function(o) {
        var r = o.parentNode[oe];
        !r || !r.options.multiDrag || ~ut.indexOf(o) || (Ke && Ke !== r && (Ke.multiDrag._deselectMultiDrag(), Ke = r), Bt(o, r.options.selectedClass, !0), ut.push(o));
      },
      deselect: function(o) {
        var r = o.parentNode[oe], l = ut.indexOf(o);
        !r || !r.options.multiDrag || !~l || (Bt(o, r.options.selectedClass, !1), ut.splice(l, 1));
      }
    },
    eventProperties: function() {
      var o = this, r = [], l = [];
      return ut.forEach(function(s) {
        r.push({
          multiDragElement: s,
          index: s.sortableIndex
        });
        var u;
        we && s !== Mt ? u = -1 : we ? u = Kt(s, ":not(." + o.options.selectedClass + ")") : u = Kt(s), l.push({
          multiDragElement: s,
          index: u
        });
      }), {
        items: qm(ut),
        clones: [].concat(xe),
        oldIndicies: r,
        newIndicies: l
      };
    },
    optionListeners: {
      multiDragKey: function(o) {
        return o = o.toLowerCase(), o === "ctrl" ? o = "Control" : o.length > 1 && (o = o.charAt(0).toUpperCase() + o.substr(1)), o;
      }
    }
  });
}
function b0(i, o) {
  ut.forEach(function(r, l) {
    var s = o.children[r.sortableIndex + (i ? Number(l) : 0)];
    s ? o.insertBefore(r, s) : o.appendChild(r);
  });
}
function Ms(i, o) {
  xe.forEach(function(r, l) {
    var s = o.children[r.sortableIndex + (i ? Number(l) : 0)];
    s ? o.insertBefore(r, s) : o.appendChild(r);
  });
}
function Ni() {
  ut.forEach(function(i) {
    i !== Mt && i.parentNode && i.parentNode.removeChild(i);
  });
}
nt.mount(new g0());
nt.mount(Ka, Ua);
const y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt,
  MultiDrag: _0,
  Sortable: nt,
  Swap: v0
}, Symbol.toStringTag, { value: "Module" })), w0 = /* @__PURE__ */ Um(y0);
(function(i, o) {
  (function(r, l) {
    i.exports = l(w0);
  })(typeof self < "u" ? self : km, function(r) {
    return function(l) {
      var s = {};
      function u(c) {
        if (s[c])
          return s[c].exports;
        var d = s[c] = {
          i: c,
          l: !1,
          exports: {}
        };
        return l[c].call(d.exports, d, d.exports, u), d.l = !0, d.exports;
      }
      return u.m = l, u.c = s, u.d = function(c, d, g) {
        u.o(c, d) || Object.defineProperty(c, d, { enumerable: !0, get: g });
      }, u.r = function(c) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(c, "__esModule", { value: !0 });
      }, u.t = function(c, d) {
        if (d & 1 && (c = u(c)), d & 8 || d & 4 && typeof c == "object" && c && c.__esModule)
          return c;
        var g = /* @__PURE__ */ Object.create(null);
        if (u.r(g), Object.defineProperty(g, "default", { enumerable: !0, value: c }), d & 2 && typeof c != "string")
          for (var _ in c)
            u.d(g, _, function(b) {
              return c[b];
            }.bind(null, _));
        return g;
      }, u.n = function(c) {
        var d = c && c.__esModule ? function() {
          return c.default;
        } : function() {
          return c;
        };
        return u.d(d, "a", d), d;
      }, u.o = function(c, d) {
        return Object.prototype.hasOwnProperty.call(c, d);
      }, u.p = "", u(u.s = "fb15");
    }({
      "01f9": function(l, s, u) {
        var c = u("2d00"), d = u("5ca1"), g = u("2aba"), _ = u("32e9"), b = u("84f2"), x = u("41a0"), A = u("7f20"), O = u("38fd"), T = u("2b4c")("iterator"), S = !([].keys && "next" in [].keys()), L = "@@iterator", F = "keys", k = "values", W = function() {
          return this;
        };
        l.exports = function(dt, lt, ct, rt, it, j, Q) {
          x(ct, lt, rt);
          var vt = function(N) {
            if (!S && N in J)
              return J[N];
            switch (N) {
              case F:
                return function() {
                  return new ct(this, N);
                };
              case k:
                return function() {
                  return new ct(this, N);
                };
            }
            return function() {
              return new ct(this, N);
            };
          }, Nt = lt + " Iterator", X = it == k, q = !1, J = dt.prototype, U = J[T] || J[L] || it && J[it], G = U || vt(it), Z = it ? X ? vt("entries") : G : void 0, z = lt == "Array" && J.entries || U, bt, E, I;
          if (z && (I = O(z.call(new dt())), I !== Object.prototype && I.next && (A(I, Nt, !0), !c && typeof I[T] != "function" && _(I, T, W))), X && U && U.name !== k && (q = !0, G = function() {
            return U.call(this);
          }), (!c || Q) && (S || q || !J[T]) && _(J, T, G), b[lt] = G, b[Nt] = W, it)
            if (bt = {
              values: X ? G : vt(k),
              keys: j ? G : vt(F),
              entries: Z
            }, Q)
              for (E in bt)
                E in J || g(J, E, bt[E]);
            else
              d(d.P + d.F * (S || q), lt, bt);
          return bt;
        };
      },
      "02f4": function(l, s, u) {
        var c = u("4588"), d = u("be13");
        l.exports = function(g) {
          return function(_, b) {
            var x = String(d(_)), A = c(b), O = x.length, T, S;
            return A < 0 || A >= O ? g ? "" : void 0 : (T = x.charCodeAt(A), T < 55296 || T > 56319 || A + 1 === O || (S = x.charCodeAt(A + 1)) < 56320 || S > 57343 ? g ? x.charAt(A) : T : g ? x.slice(A, A + 2) : (T - 55296 << 10) + (S - 56320) + 65536);
          };
        };
      },
      "0390": function(l, s, u) {
        var c = u("02f4")(!0);
        l.exports = function(d, g, _) {
          return g + (_ ? c(d, g).length : 1);
        };
      },
      "0bfb": function(l, s, u) {
        var c = u("cb7c");
        l.exports = function() {
          var d = c(this), g = "";
          return d.global && (g += "g"), d.ignoreCase && (g += "i"), d.multiline && (g += "m"), d.unicode && (g += "u"), d.sticky && (g += "y"), g;
        };
      },
      "0d58": function(l, s, u) {
        var c = u("ce10"), d = u("e11e");
        l.exports = Object.keys || function(g) {
          return c(g, d);
        };
      },
      1495: function(l, s, u) {
        var c = u("86cc"), d = u("cb7c"), g = u("0d58");
        l.exports = u("9e1e") ? Object.defineProperties : function(_, b) {
          d(_);
          for (var x = g(b), A = x.length, O = 0, T; A > O; )
            c.f(_, T = x[O++], b[T]);
          return _;
        };
      },
      "214f": function(l, s, u) {
        u("b0c5");
        var c = u("2aba"), d = u("32e9"), g = u("79e5"), _ = u("be13"), b = u("2b4c"), x = u("520a"), A = b("species"), O = !g(function() {
          var S = /./;
          return S.exec = function() {
            var L = [];
            return L.groups = { a: "7" }, L;
          }, "".replace(S, "$<a>") !== "7";
        }), T = function() {
          var S = /(?:)/, L = S.exec;
          S.exec = function() {
            return L.apply(this, arguments);
          };
          var F = "ab".split(S);
          return F.length === 2 && F[0] === "a" && F[1] === "b";
        }();
        l.exports = function(S, L, F) {
          var k = b(S), W = !g(function() {
            var j = {};
            return j[k] = function() {
              return 7;
            }, ""[S](j) != 7;
          }), dt = W ? !g(function() {
            var j = !1, Q = /a/;
            return Q.exec = function() {
              return j = !0, null;
            }, S === "split" && (Q.constructor = {}, Q.constructor[A] = function() {
              return Q;
            }), Q[k](""), !j;
          }) : void 0;
          if (!W || !dt || S === "replace" && !O || S === "split" && !T) {
            var lt = /./[k], ct = F(
              _,
              k,
              ""[S],
              function(j, Q, vt, Nt, X) {
                return Q.exec === x ? W && !X ? { done: !0, value: lt.call(Q, vt, Nt) } : { done: !0, value: j.call(vt, Q, Nt) } : { done: !1 };
              }
            ), rt = ct[0], it = ct[1];
            c(String.prototype, S, rt), d(
              RegExp.prototype,
              k,
              L == 2 ? function(j, Q) {
                return it.call(j, this, Q);
              } : function(j) {
                return it.call(j, this);
              }
            );
          }
        };
      },
      "230e": function(l, s, u) {
        var c = u("d3f4"), d = u("7726").document, g = c(d) && c(d.createElement);
        l.exports = function(_) {
          return g ? d.createElement(_) : {};
        };
      },
      "23c6": function(l, s, u) {
        var c = u("2d95"), d = u("2b4c")("toStringTag"), g = c(function() {
          return arguments;
        }()) == "Arguments", _ = function(b, x) {
          try {
            return b[x];
          } catch {
          }
        };
        l.exports = function(b) {
          var x, A, O;
          return b === void 0 ? "Undefined" : b === null ? "Null" : typeof (A = _(x = Object(b), d)) == "string" ? A : g ? c(x) : (O = c(x)) == "Object" && typeof x.callee == "function" ? "Arguments" : O;
        };
      },
      2621: function(l, s) {
        s.f = Object.getOwnPropertySymbols;
      },
      "2aba": function(l, s, u) {
        var c = u("7726"), d = u("32e9"), g = u("69a8"), _ = u("ca5a")("src"), b = u("fa5b"), x = "toString", A = ("" + b).split(x);
        u("8378").inspectSource = function(O) {
          return b.call(O);
        }, (l.exports = function(O, T, S, L) {
          var F = typeof S == "function";
          F && (g(S, "name") || d(S, "name", T)), O[T] !== S && (F && (g(S, _) || d(S, _, O[T] ? "" + O[T] : A.join(String(T)))), O === c ? O[T] = S : L ? O[T] ? O[T] = S : d(O, T, S) : (delete O[T], d(O, T, S)));
        })(Function.prototype, x, function() {
          return typeof this == "function" && this[_] || b.call(this);
        });
      },
      "2aeb": function(l, s, u) {
        var c = u("cb7c"), d = u("1495"), g = u("e11e"), _ = u("613b")("IE_PROTO"), b = function() {
        }, x = "prototype", A = function() {
          var O = u("230e")("iframe"), T = g.length, S = "<", L = ">", F;
          for (O.style.display = "none", u("fab2").appendChild(O), O.src = "javascript:", F = O.contentWindow.document, F.open(), F.write(S + "script" + L + "document.F=Object" + S + "/script" + L), F.close(), A = F.F; T--; )
            delete A[x][g[T]];
          return A();
        };
        l.exports = Object.create || function(O, T) {
          var S;
          return O !== null ? (b[x] = c(O), S = new b(), b[x] = null, S[_] = O) : S = A(), T === void 0 ? S : d(S, T);
        };
      },
      "2b4c": function(l, s, u) {
        var c = u("5537")("wks"), d = u("ca5a"), g = u("7726").Symbol, _ = typeof g == "function", b = l.exports = function(x) {
          return c[x] || (c[x] = _ && g[x] || (_ ? g : d)("Symbol." + x));
        };
        b.store = c;
      },
      "2d00": function(l, s) {
        l.exports = !1;
      },
      "2d95": function(l, s) {
        var u = {}.toString;
        l.exports = function(c) {
          return u.call(c).slice(8, -1);
        };
      },
      "2fdb": function(l, s, u) {
        var c = u("5ca1"), d = u("d2c8"), g = "includes";
        c(c.P + c.F * u("5147")(g), "String", {
          includes: function(_) {
            return !!~d(this, _, g).indexOf(_, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "32e9": function(l, s, u) {
        var c = u("86cc"), d = u("4630");
        l.exports = u("9e1e") ? function(g, _, b) {
          return c.f(g, _, d(1, b));
        } : function(g, _, b) {
          return g[_] = b, g;
        };
      },
      "38fd": function(l, s, u) {
        var c = u("69a8"), d = u("4bf8"), g = u("613b")("IE_PROTO"), _ = Object.prototype;
        l.exports = Object.getPrototypeOf || function(b) {
          return b = d(b), c(b, g) ? b[g] : typeof b.constructor == "function" && b instanceof b.constructor ? b.constructor.prototype : b instanceof Object ? _ : null;
        };
      },
      "41a0": function(l, s, u) {
        var c = u("2aeb"), d = u("4630"), g = u("7f20"), _ = {};
        u("32e9")(_, u("2b4c")("iterator"), function() {
          return this;
        }), l.exports = function(b, x, A) {
          b.prototype = c(_, { next: d(1, A) }), g(b, x + " Iterator");
        };
      },
      "456d": function(l, s, u) {
        var c = u("4bf8"), d = u("0d58");
        u("5eda")("keys", function() {
          return function(g) {
            return d(c(g));
          };
        });
      },
      4588: function(l, s) {
        var u = Math.ceil, c = Math.floor;
        l.exports = function(d) {
          return isNaN(d = +d) ? 0 : (d > 0 ? c : u)(d);
        };
      },
      4630: function(l, s) {
        l.exports = function(u, c) {
          return {
            enumerable: !(u & 1),
            configurable: !(u & 2),
            writable: !(u & 4),
            value: c
          };
        };
      },
      "4bf8": function(l, s, u) {
        var c = u("be13");
        l.exports = function(d) {
          return Object(c(d));
        };
      },
      5147: function(l, s, u) {
        var c = u("2b4c")("match");
        l.exports = function(d) {
          var g = /./;
          try {
            "/./"[d](g);
          } catch {
            try {
              return g[c] = !1, !"/./"[d](g);
            } catch {
            }
          }
          return !0;
        };
      },
      "520a": function(l, s, u) {
        var c = u("0bfb"), d = RegExp.prototype.exec, g = String.prototype.replace, _ = d, b = "lastIndex", x = function() {
          var T = /a/, S = /b*/g;
          return d.call(T, "a"), d.call(S, "a"), T[b] !== 0 || S[b] !== 0;
        }(), A = /()??/.exec("")[1] !== void 0, O = x || A;
        O && (_ = function(T) {
          var S = this, L, F, k, W;
          return A && (F = new RegExp("^" + S.source + "$(?!\\s)", c.call(S))), x && (L = S[b]), k = d.call(S, T), x && k && (S[b] = S.global ? k.index + k[0].length : L), A && k && k.length > 1 && g.call(k[0], F, function() {
            for (W = 1; W < arguments.length - 2; W++)
              arguments[W] === void 0 && (k[W] = void 0);
          }), k;
        }), l.exports = _;
      },
      "52a7": function(l, s) {
        s.f = {}.propertyIsEnumerable;
      },
      5537: function(l, s, u) {
        var c = u("8378"), d = u("7726"), g = "__core-js_shared__", _ = d[g] || (d[g] = {});
        (l.exports = function(b, x) {
          return _[b] || (_[b] = x !== void 0 ? x : {});
        })("versions", []).push({
          version: c.version,
          mode: u("2d00") ? "pure" : "global",
          copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
        });
      },
      "5ca1": function(l, s, u) {
        var c = u("7726"), d = u("8378"), g = u("32e9"), _ = u("2aba"), b = u("9b43"), x = "prototype", A = function(O, T, S) {
          var L = O & A.F, F = O & A.G, k = O & A.S, W = O & A.P, dt = O & A.B, lt = F ? c : k ? c[T] || (c[T] = {}) : (c[T] || {})[x], ct = F ? d : d[T] || (d[T] = {}), rt = ct[x] || (ct[x] = {}), it, j, Q, vt;
          F && (S = T);
          for (it in S)
            j = !L && lt && lt[it] !== void 0, Q = (j ? lt : S)[it], vt = dt && j ? b(Q, c) : W && typeof Q == "function" ? b(Function.call, Q) : Q, lt && _(lt, it, Q, O & A.U), ct[it] != Q && g(ct, it, vt), W && rt[it] != Q && (rt[it] = Q);
        };
        c.core = d, A.F = 1, A.G = 2, A.S = 4, A.P = 8, A.B = 16, A.W = 32, A.U = 64, A.R = 128, l.exports = A;
      },
      "5eda": function(l, s, u) {
        var c = u("5ca1"), d = u("8378"), g = u("79e5");
        l.exports = function(_, b) {
          var x = (d.Object || {})[_] || Object[_], A = {};
          A[_] = b(x), c(c.S + c.F * g(function() {
            x(1);
          }), "Object", A);
        };
      },
      "5f1b": function(l, s, u) {
        var c = u("23c6"), d = RegExp.prototype.exec;
        l.exports = function(g, _) {
          var b = g.exec;
          if (typeof b == "function") {
            var x = b.call(g, _);
            if (typeof x != "object")
              throw new TypeError("RegExp exec method returned something other than an Object or null");
            return x;
          }
          if (c(g) !== "RegExp")
            throw new TypeError("RegExp#exec called on incompatible receiver");
          return d.call(g, _);
        };
      },
      "613b": function(l, s, u) {
        var c = u("5537")("keys"), d = u("ca5a");
        l.exports = function(g) {
          return c[g] || (c[g] = d(g));
        };
      },
      "626a": function(l, s, u) {
        var c = u("2d95");
        l.exports = Object("z").propertyIsEnumerable(0) ? Object : function(d) {
          return c(d) == "String" ? d.split("") : Object(d);
        };
      },
      6762: function(l, s, u) {
        var c = u("5ca1"), d = u("c366")(!0);
        c(c.P, "Array", {
          includes: function(g) {
            return d(this, g, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), u("9c6c")("includes");
      },
      6821: function(l, s, u) {
        var c = u("626a"), d = u("be13");
        l.exports = function(g) {
          return c(d(g));
        };
      },
      "69a8": function(l, s) {
        var u = {}.hasOwnProperty;
        l.exports = function(c, d) {
          return u.call(c, d);
        };
      },
      "6a99": function(l, s, u) {
        var c = u("d3f4");
        l.exports = function(d, g) {
          if (!c(d))
            return d;
          var _, b;
          if (g && typeof (_ = d.toString) == "function" && !c(b = _.call(d)) || typeof (_ = d.valueOf) == "function" && !c(b = _.call(d)) || !g && typeof (_ = d.toString) == "function" && !c(b = _.call(d)))
            return b;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      7333: function(l, s, u) {
        var c = u("0d58"), d = u("2621"), g = u("52a7"), _ = u("4bf8"), b = u("626a"), x = Object.assign;
        l.exports = !x || u("79e5")(function() {
          var A = {}, O = {}, T = Symbol(), S = "abcdefghijklmnopqrst";
          return A[T] = 7, S.split("").forEach(function(L) {
            O[L] = L;
          }), x({}, A)[T] != 7 || Object.keys(x({}, O)).join("") != S;
        }) ? function(A, O) {
          for (var T = _(A), S = arguments.length, L = 1, F = d.f, k = g.f; S > L; )
            for (var W = b(arguments[L++]), dt = F ? c(W).concat(F(W)) : c(W), lt = dt.length, ct = 0, rt; lt > ct; )
              k.call(W, rt = dt[ct++]) && (T[rt] = W[rt]);
          return T;
        } : x;
      },
      7726: function(l, s) {
        var u = l.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
        typeof __g == "number" && (__g = u);
      },
      "77f1": function(l, s, u) {
        var c = u("4588"), d = Math.max, g = Math.min;
        l.exports = function(_, b) {
          return _ = c(_), _ < 0 ? d(_ + b, 0) : g(_, b);
        };
      },
      "79e5": function(l, s) {
        l.exports = function(u) {
          try {
            return !!u();
          } catch {
            return !0;
          }
        };
      },
      "7f20": function(l, s, u) {
        var c = u("86cc").f, d = u("69a8"), g = u("2b4c")("toStringTag");
        l.exports = function(_, b, x) {
          _ && !d(_ = x ? _ : _.prototype, g) && c(_, g, { configurable: !0, value: b });
        };
      },
      8378: function(l, s) {
        var u = l.exports = { version: "2.6.5" };
        typeof __e == "number" && (__e = u);
      },
      "84f2": function(l, s) {
        l.exports = {};
      },
      "86cc": function(l, s, u) {
        var c = u("cb7c"), d = u("c69a"), g = u("6a99"), _ = Object.defineProperty;
        s.f = u("9e1e") ? Object.defineProperty : function(b, x, A) {
          if (c(b), x = g(x, !0), c(A), d)
            try {
              return _(b, x, A);
            } catch {
            }
          if ("get" in A || "set" in A)
            throw TypeError("Accessors not supported!");
          return "value" in A && (b[x] = A.value), b;
        };
      },
      "9b43": function(l, s, u) {
        var c = u("d8e8");
        l.exports = function(d, g, _) {
          if (c(d), g === void 0)
            return d;
          switch (_) {
            case 1:
              return function(b) {
                return d.call(g, b);
              };
            case 2:
              return function(b, x) {
                return d.call(g, b, x);
              };
            case 3:
              return function(b, x, A) {
                return d.call(g, b, x, A);
              };
          }
          return function() {
            return d.apply(g, arguments);
          };
        };
      },
      "9c6c": function(l, s, u) {
        var c = u("2b4c")("unscopables"), d = Array.prototype;
        d[c] == null && u("32e9")(d, c, {}), l.exports = function(g) {
          d[c][g] = !0;
        };
      },
      "9def": function(l, s, u) {
        var c = u("4588"), d = Math.min;
        l.exports = function(g) {
          return g > 0 ? d(c(g), 9007199254740991) : 0;
        };
      },
      "9e1e": function(l, s, u) {
        l.exports = !u("79e5")(function() {
          return Object.defineProperty({}, "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      },
      a352: function(l, s) {
        l.exports = r;
      },
      a481: function(l, s, u) {
        var c = u("cb7c"), d = u("4bf8"), g = u("9def"), _ = u("4588"), b = u("0390"), x = u("5f1b"), A = Math.max, O = Math.min, T = Math.floor, S = /\$([$&`']|\d\d?|<[^>]*>)/g, L = /\$([$&`']|\d\d?)/g, F = function(k) {
          return k === void 0 ? k : String(k);
        };
        u("214f")("replace", 2, function(k, W, dt, lt) {
          return [
            function(rt, it) {
              var j = k(this), Q = rt == null ? void 0 : rt[W];
              return Q !== void 0 ? Q.call(rt, j, it) : dt.call(String(j), rt, it);
            },
            function(rt, it) {
              var j = lt(dt, rt, this, it);
              if (j.done)
                return j.value;
              var Q = c(rt), vt = String(this), Nt = typeof it == "function";
              Nt || (it = String(it));
              var X = Q.global;
              if (X) {
                var q = Q.unicode;
                Q.lastIndex = 0;
              }
              for (var J = []; ; ) {
                var U = x(Q, vt);
                if (U === null || (J.push(U), !X))
                  break;
                var G = String(U[0]);
                G === "" && (Q.lastIndex = b(vt, g(Q.lastIndex), q));
              }
              for (var Z = "", z = 0, bt = 0; bt < J.length; bt++) {
                U = J[bt];
                for (var E = String(U[0]), I = A(O(_(U.index), vt.length), 0), N = [], ot = 1; ot < U.length; ot++)
                  N.push(F(U[ot]));
                var st = U.groups;
                if (Nt) {
                  var Et = [E].concat(N, I, vt);
                  st !== void 0 && Et.push(st);
                  var Ct = String(it.apply(void 0, Et));
                } else
                  Ct = ct(E, vt, I, N, st, it);
                I >= z && (Z += vt.slice(z, I) + Ct, z = I + E.length);
              }
              return Z + vt.slice(z);
            }
          ];
          function ct(rt, it, j, Q, vt, Nt) {
            var X = j + rt.length, q = Q.length, J = L;
            return vt !== void 0 && (vt = d(vt), J = S), dt.call(Nt, J, function(U, G) {
              var Z;
              switch (G.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return rt;
                case "`":
                  return it.slice(0, j);
                case "'":
                  return it.slice(X);
                case "<":
                  Z = vt[G.slice(1, -1)];
                  break;
                default:
                  var z = +G;
                  if (z === 0)
                    return U;
                  if (z > q) {
                    var bt = T(z / 10);
                    return bt === 0 ? U : bt <= q ? Q[bt - 1] === void 0 ? G.charAt(1) : Q[bt - 1] + G.charAt(1) : U;
                  }
                  Z = Q[z - 1];
              }
              return Z === void 0 ? "" : Z;
            });
          }
        });
      },
      aae3: function(l, s, u) {
        var c = u("d3f4"), d = u("2d95"), g = u("2b4c")("match");
        l.exports = function(_) {
          var b;
          return c(_) && ((b = _[g]) !== void 0 ? !!b : d(_) == "RegExp");
        };
      },
      ac6a: function(l, s, u) {
        for (var c = u("cadf"), d = u("0d58"), g = u("2aba"), _ = u("7726"), b = u("32e9"), x = u("84f2"), A = u("2b4c"), O = A("iterator"), T = A("toStringTag"), S = x.Array, L = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1
        }, F = d(L), k = 0; k < F.length; k++) {
          var W = F[k], dt = L[W], lt = _[W], ct = lt && lt.prototype, rt;
          if (ct && (ct[O] || b(ct, O, S), ct[T] || b(ct, T, W), x[W] = S, dt))
            for (rt in c)
              ct[rt] || g(ct, rt, c[rt], !0);
        }
      },
      b0c5: function(l, s, u) {
        var c = u("520a");
        u("5ca1")({
          target: "RegExp",
          proto: !0,
          forced: c !== /./.exec
        }, {
          exec: c
        });
      },
      be13: function(l, s) {
        l.exports = function(u) {
          if (u == null)
            throw TypeError("Can't call method on  " + u);
          return u;
        };
      },
      c366: function(l, s, u) {
        var c = u("6821"), d = u("9def"), g = u("77f1");
        l.exports = function(_) {
          return function(b, x, A) {
            var O = c(b), T = d(O.length), S = g(A, T), L;
            if (_ && x != x) {
              for (; T > S; )
                if (L = O[S++], L != L)
                  return !0;
            } else
              for (; T > S; S++)
                if ((_ || S in O) && O[S] === x)
                  return _ || S || 0;
            return !_ && -1;
          };
        };
      },
      c649: function(l, s, u) {
        (function(c) {
          u.d(s, "c", function() {
            return O;
          }), u.d(s, "a", function() {
            return x;
          }), u.d(s, "b", function() {
            return g;
          }), u.d(s, "d", function() {
            return A;
          }), u("a481");
          function d() {
            return typeof window < "u" ? window.console : c.console;
          }
          var g = d();
          function _(T) {
            var S = /* @__PURE__ */ Object.create(null);
            return function(L) {
              var F = S[L];
              return F || (S[L] = T(L));
            };
          }
          var b = /-(\w)/g, x = _(function(T) {
            return T.replace(b, function(S, L) {
              return L ? L.toUpperCase() : "";
            });
          });
          function A(T) {
            T.parentElement !== null && T.parentElement.removeChild(T);
          }
          function O(T, S, L) {
            var F = L === 0 ? T.children[0] : T.children[L - 1].nextSibling;
            T.insertBefore(S, F);
          }
        }).call(this, u("c8ba"));
      },
      c69a: function(l, s, u) {
        l.exports = !u("9e1e") && !u("79e5")(function() {
          return Object.defineProperty(u("230e")("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      },
      c8ba: function(l, s) {
        var u;
        u = function() {
          return this;
        }();
        try {
          u = u || new Function("return this")();
        } catch {
          typeof window == "object" && (u = window);
        }
        l.exports = u;
      },
      ca5a: function(l, s) {
        var u = 0, c = Math.random();
        l.exports = function(d) {
          return "Symbol(".concat(d === void 0 ? "" : d, ")_", (++u + c).toString(36));
        };
      },
      cadf: function(l, s, u) {
        var c = u("9c6c"), d = u("d53b"), g = u("84f2"), _ = u("6821");
        l.exports = u("01f9")(Array, "Array", function(b, x) {
          this._t = _(b), this._i = 0, this._k = x;
        }, function() {
          var b = this._t, x = this._k, A = this._i++;
          return !b || A >= b.length ? (this._t = void 0, d(1)) : x == "keys" ? d(0, A) : x == "values" ? d(0, b[A]) : d(0, [A, b[A]]);
        }, "values"), g.Arguments = g.Array, c("keys"), c("values"), c("entries");
      },
      cb7c: function(l, s, u) {
        var c = u("d3f4");
        l.exports = function(d) {
          if (!c(d))
            throw TypeError(d + " is not an object!");
          return d;
        };
      },
      ce10: function(l, s, u) {
        var c = u("69a8"), d = u("6821"), g = u("c366")(!1), _ = u("613b")("IE_PROTO");
        l.exports = function(b, x) {
          var A = d(b), O = 0, T = [], S;
          for (S in A)
            S != _ && c(A, S) && T.push(S);
          for (; x.length > O; )
            c(A, S = x[O++]) && (~g(T, S) || T.push(S));
          return T;
        };
      },
      d2c8: function(l, s, u) {
        var c = u("aae3"), d = u("be13");
        l.exports = function(g, _, b) {
          if (c(_))
            throw TypeError("String#" + b + " doesn't accept regex!");
          return String(d(g));
        };
      },
      d3f4: function(l, s) {
        l.exports = function(u) {
          return typeof u == "object" ? u !== null : typeof u == "function";
        };
      },
      d53b: function(l, s) {
        l.exports = function(u, c) {
          return { value: c, done: !!u };
        };
      },
      d8e8: function(l, s) {
        l.exports = function(u) {
          if (typeof u != "function")
            throw TypeError(u + " is not a function!");
          return u;
        };
      },
      e11e: function(l, s) {
        l.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      f559: function(l, s, u) {
        var c = u("5ca1"), d = u("9def"), g = u("d2c8"), _ = "startsWith", b = ""[_];
        c(c.P + c.F * u("5147")(_), "String", {
          startsWith: function(x) {
            var A = g(this, x, _), O = d(Math.min(arguments.length > 1 ? arguments[1] : void 0, A.length)), T = String(x);
            return b ? b.call(A, T, O) : A.slice(O, O + T.length) === T;
          }
        });
      },
      f6fd: function(l, s) {
        (function(u) {
          var c = "currentScript", d = u.getElementsByTagName("script");
          c in u || Object.defineProperty(u, c, {
            get: function() {
              try {
                throw new Error();
              } catch (b) {
                var g, _ = (/.*at [^\(]*\((.*):.+:.+\)$/ig.exec(b.stack) || [!1])[1];
                for (g in d)
                  if (d[g].src == _ || d[g].readyState == "interactive")
                    return d[g];
                return null;
              }
            }
          });
        })(document);
      },
      f751: function(l, s, u) {
        var c = u("5ca1");
        c(c.S + c.F, "Object", { assign: u("7333") });
      },
      fa5b: function(l, s, u) {
        l.exports = u("5537")("native-function-to-string", Function.toString);
      },
      fab2: function(l, s, u) {
        var c = u("7726").document;
        l.exports = c && c.documentElement;
      },
      fb15: function(l, s, u) {
        if (u.r(s), typeof window < "u") {
          u("f6fd");
          var c;
          (c = window.document.currentScript) && (c = c.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)) && (u.p = c[1]);
        }
        u("f751"), u("f559"), u("ac6a"), u("cadf"), u("456d");
        function d(E) {
          if (Array.isArray(E))
            return E;
        }
        function g(E, I) {
          if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(E)))) {
            var N = [], ot = !0, st = !1, Et = void 0;
            try {
              for (var Ct = E[Symbol.iterator](), ee; !(ot = (ee = Ct.next()).done) && (N.push(ee.value), !(I && N.length === I)); ot = !0)
                ;
            } catch (Jt) {
              st = !0, Et = Jt;
            } finally {
              try {
                !ot && Ct.return != null && Ct.return();
              } finally {
                if (st)
                  throw Et;
              }
            }
            return N;
          }
        }
        function _(E, I) {
          (I == null || I > E.length) && (I = E.length);
          for (var N = 0, ot = new Array(I); N < I; N++)
            ot[N] = E[N];
          return ot;
        }
        function b(E, I) {
          if (E) {
            if (typeof E == "string")
              return _(E, I);
            var N = Object.prototype.toString.call(E).slice(8, -1);
            if (N === "Object" && E.constructor && (N = E.constructor.name), N === "Map" || N === "Set")
              return Array.from(E);
            if (N === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))
              return _(E, I);
          }
        }
        function x() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function A(E, I) {
          return d(E) || g(E, I) || b(E, I) || x();
        }
        u("6762"), u("2fdb");
        function O(E) {
          if (Array.isArray(E))
            return _(E);
        }
        function T(E) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(E))
            return Array.from(E);
        }
        function S() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function L(E) {
          return O(E) || T(E) || b(E) || S();
        }
        var F = u("a352"), k = /* @__PURE__ */ u.n(F), W = u("c649");
        function dt(E, I, N) {
          return N === void 0 || (E = E || {}, E[I] = N), E;
        }
        function lt(E, I) {
          return E.map(function(N) {
            return N.elm;
          }).indexOf(I);
        }
        function ct(E, I, N, ot) {
          if (!E)
            return [];
          var st = E.map(function(ee) {
            return ee.elm;
          }), Et = I.length - ot, Ct = L(I).map(function(ee, Jt) {
            return Jt >= Et ? st.length : st.indexOf(ee);
          });
          return N ? Ct.filter(function(ee) {
            return ee !== -1;
          }) : Ct;
        }
        function rt(E, I) {
          var N = this;
          this.$nextTick(function() {
            return N.$emit(E.toLowerCase(), I);
          });
        }
        function it(E) {
          var I = this;
          return function(N) {
            I.realList !== null && I["onDrag" + E](N), rt.call(I, E, N);
          };
        }
        function j(E) {
          return ["transition-group", "TransitionGroup"].includes(E);
        }
        function Q(E) {
          if (!E || E.length !== 1)
            return !1;
          var I = A(E, 1), N = I[0].componentOptions;
          return N ? j(N.tag) : !1;
        }
        function vt(E, I, N) {
          return E[N] || (I[N] ? I[N]() : void 0);
        }
        function Nt(E, I, N) {
          var ot = 0, st = 0, Et = vt(I, N, "header");
          Et && (ot = Et.length, E = E ? [].concat(L(Et), L(E)) : L(Et));
          var Ct = vt(I, N, "footer");
          return Ct && (st = Ct.length, E = E ? [].concat(L(E), L(Ct)) : L(Ct)), {
            children: E,
            headerOffset: ot,
            footerOffset: st
          };
        }
        function X(E, I) {
          var N = null, ot = function(Jt, Fn) {
            N = dt(N, Jt, Fn);
          }, st = Object.keys(E).filter(function(Jt) {
            return Jt === "id" || Jt.startsWith("data-");
          }).reduce(function(Jt, Fn) {
            return Jt[Fn] = E[Fn], Jt;
          }, {});
          if (ot("attrs", st), !I)
            return N;
          var Et = I.on, Ct = I.props, ee = I.attrs;
          return ot("on", Et), ot("props", Ct), Object.assign(N.attrs, ee), N;
        }
        var q = ["Start", "Add", "Remove", "Update", "End"], J = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], U = ["Move"].concat(q, J).map(function(E) {
          return "on" + E;
        }), G = null, Z = {
          options: Object,
          list: {
            type: Array,
            required: !1,
            default: null
          },
          value: {
            type: Array,
            required: !1,
            default: null
          },
          noTransitionOnDrag: {
            type: Boolean,
            default: !1
          },
          clone: {
            type: Function,
            default: function(E) {
              return E;
            }
          },
          element: {
            type: String,
            default: "div"
          },
          tag: {
            type: String,
            default: null
          },
          move: {
            type: Function,
            default: null
          },
          componentData: {
            type: Object,
            required: !1,
            default: null
          }
        }, z = {
          name: "draggable",
          inheritAttrs: !1,
          props: Z,
          data: function() {
            return {
              transitionMode: !1,
              noneFunctionalComponentMode: !1
            };
          },
          render: function(E) {
            var I = this.$slots.default;
            this.transitionMode = Q(I);
            var N = Nt(I, this.$slots, this.$scopedSlots), ot = N.children, st = N.headerOffset, Et = N.footerOffset;
            this.headerOffset = st, this.footerOffset = Et;
            var Ct = X(this.$attrs, this.componentData);
            return E(this.getTag(), Ct, ot);
          },
          created: function() {
            this.list !== null && this.value !== null && W.b.error("Value and list props are mutually exclusive! Please set one or another."), this.element !== "div" && W.b.warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props"), this.options !== void 0 && W.b.warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
          },
          mounted: function() {
            var E = this;
            if (this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional(), this.noneFunctionalComponentMode && this.transitionMode)
              throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
            var I = {};
            q.forEach(function(st) {
              I["on" + st] = it.call(E, st);
            }), J.forEach(function(st) {
              I["on" + st] = rt.bind(E, st);
            });
            var N = Object.keys(this.$attrs).reduce(function(st, Et) {
              return st[Object(W.a)(Et)] = E.$attrs[Et], st;
            }, {}), ot = Object.assign({}, this.options, N, I, {
              onMove: function(st, Et) {
                return E.onDragMove(st, Et);
              }
            });
            !("draggable" in ot) && (ot.draggable = ">*"), this._sortable = new k.a(this.rootContainer, ot), this.computeIndexes();
          },
          beforeDestroy: function() {
            this._sortable !== void 0 && this._sortable.destroy();
          },
          computed: {
            rootContainer: function() {
              return this.transitionMode ? this.$el.children[0] : this.$el;
            },
            realList: function() {
              return this.list ? this.list : this.value;
            }
          },
          watch: {
            options: {
              handler: function(E) {
                this.updateOptions(E);
              },
              deep: !0
            },
            $attrs: {
              handler: function(E) {
                this.updateOptions(E);
              },
              deep: !0
            },
            realList: function() {
              this.computeIndexes();
            }
          },
          methods: {
            getIsFunctional: function() {
              var E = this._vnode.fnOptions;
              return E && E.functional;
            },
            getTag: function() {
              return this.tag || this.element;
            },
            updateOptions: function(E) {
              for (var I in E) {
                var N = Object(W.a)(I);
                U.indexOf(N) === -1 && this._sortable.option(N, E[I]);
              }
            },
            getChildrenNodes: function() {
              if (this.noneFunctionalComponentMode)
                return this.$children[0].$slots.default;
              var E = this.$slots.default;
              return this.transitionMode ? E[0].child.$slots.default : E;
            },
            computeIndexes: function() {
              var E = this;
              this.$nextTick(function() {
                E.visibleIndexes = ct(E.getChildrenNodes(), E.rootContainer.children, E.transitionMode, E.footerOffset);
              });
            },
            getUnderlyingVm: function(E) {
              var I = lt(this.getChildrenNodes() || [], E);
              if (I === -1)
                return null;
              var N = this.realList[I];
              return {
                index: I,
                element: N
              };
            },
            getUnderlyingPotencialDraggableComponent: function(E) {
              var I = E.__vue__;
              return !I || !I.$options || !j(I.$options._componentTag) ? !("realList" in I) && I.$children.length === 1 && "realList" in I.$children[0] ? I.$children[0] : I : I.$parent;
            },
            emitChanges: function(E) {
              var I = this;
              this.$nextTick(function() {
                I.$emit("change", E);
              });
            },
            alterList: function(E) {
              if (this.list) {
                E(this.list);
                return;
              }
              var I = L(this.value);
              E(I), this.$emit("input", I);
            },
            spliceList: function() {
              var E = arguments, I = function(N) {
                return N.splice.apply(N, L(E));
              };
              this.alterList(I);
            },
            updatePosition: function(E, I) {
              var N = function(ot) {
                return ot.splice(I, 0, ot.splice(E, 1)[0]);
              };
              this.alterList(N);
            },
            getRelatedContextFromMoveEvent: function(E) {
              var I = E.to, N = E.related, ot = this.getUnderlyingPotencialDraggableComponent(I);
              if (!ot)
                return {
                  component: ot
                };
              var st = ot.realList, Et = {
                list: st,
                component: ot
              };
              if (I !== N && st && ot.getUnderlyingVm) {
                var Ct = ot.getUnderlyingVm(N);
                if (Ct)
                  return Object.assign(Ct, Et);
              }
              return Et;
            },
            getVmIndex: function(E) {
              var I = this.visibleIndexes, N = I.length;
              return E > N - 1 ? N : I[E];
            },
            getComponent: function() {
              return this.$slots.default[0].componentInstance;
            },
            resetTransitionData: function(E) {
              if (!(!this.noTransitionOnDrag || !this.transitionMode)) {
                var I = this.getChildrenNodes();
                I[E].data = null;
                var N = this.getComponent();
                N.children = [], N.kept = void 0;
              }
            },
            onDragStart: function(E) {
              this.context = this.getUnderlyingVm(E.item), E.item._underlying_vm_ = this.clone(this.context.element), G = E.item;
            },
            onDragAdd: function(E) {
              var I = E.item._underlying_vm_;
              if (I !== void 0) {
                Object(W.d)(E.item);
                var N = this.getVmIndex(E.newIndex);
                this.spliceList(N, 0, I), this.computeIndexes();
                var ot = {
                  element: I,
                  newIndex: N
                };
                this.emitChanges({
                  added: ot
                });
              }
            },
            onDragRemove: function(E) {
              if (Object(W.c)(this.rootContainer, E.item, E.oldIndex), E.pullMode === "clone") {
                Object(W.d)(E.clone);
                return;
              }
              var I = this.context.index;
              this.spliceList(I, 1);
              var N = {
                element: this.context.element,
                oldIndex: I
              };
              this.resetTransitionData(I), this.emitChanges({
                removed: N
              });
            },
            onDragUpdate: function(E) {
              Object(W.d)(E.item), Object(W.c)(E.from, E.item, E.oldIndex);
              var I = this.context.index, N = this.getVmIndex(E.newIndex);
              this.updatePosition(I, N);
              var ot = {
                element: this.context.element,
                oldIndex: I,
                newIndex: N
              };
              this.emitChanges({
                moved: ot
              });
            },
            updateProperty: function(E, I) {
              E.hasOwnProperty(I) && (E[I] += this.headerOffset);
            },
            computeFutureIndex: function(E, I) {
              if (!E.element)
                return 0;
              var N = L(I.to.children).filter(function(Ct) {
                return Ct.style.display !== "none";
              }), ot = N.indexOf(I.related), st = E.component.getVmIndex(ot), Et = N.indexOf(G) !== -1;
              return Et || !I.willInsertAfter ? st : st + 1;
            },
            onDragMove: function(E, I) {
              var N = this.move;
              if (!N || !this.realList)
                return !0;
              var ot = this.getRelatedContextFromMoveEvent(E), st = this.context, Et = this.computeFutureIndex(ot, E);
              Object.assign(st, {
                futureIndex: Et
              });
              var Ct = Object.assign({}, E, {
                relatedContext: ot,
                draggedContext: st
              });
              return N(Ct, I);
            },
            onDragEnd: function() {
              this.computeIndexes(), G = null;
            }
          }
        };
        typeof window < "u" && "Vue" in window && window.Vue.component("draggable", z);
        var bt = z;
        s.default = bt;
      }
    }).default;
  });
})(Ls);
Ls.exports;
const Fa = {
  aggregatorTemplates: kt,
  aggregators: ji,
  derivers: Pm,
  locales: Rs,
  naturalSort: Pn,
  numberFormat: Zi,
  getSort: Wa,
  sortAs: Im,
  PivotData: on
};
typeof window < "u" && window.Vue && window.Vue.use(Bm);
const x0 = {
  props: {
    data: {
      type: [Array, Object, Function],
      required: !0
    },
    aggregators: {
      type: Object,
      default: function() {
        return Fa.aggregators;
      }
    },
    aggregatorName: {
      type: String,
      default: "Count"
    },
    heatmapMode: String,
    tableColorScaleGenerator: {
      type: Function
    },
    tableOptions: {
      type: Object,
      default: function() {
        return {};
      }
    },
    renderers: Object,
    rendererName: {
      type: String,
      default: "Table"
    },
    locale: {
      type: String,
      default: "en"
    },
    locales: {
      type: Object,
      default: function() {
        return Fa.locales;
      }
    },
    rowTotal: {
      type: Boolean,
      default: !0
    },
    colTotal: {
      type: Boolean,
      default: !0
    },
    cols: {
      type: Array,
      default: function() {
        return [];
      }
    },
    rows: {
      type: Array,
      default: function() {
        return [];
      }
    },
    vals: {
      type: Array,
      default: function() {
        return [];
      }
    },
    attributes: {
      type: Array,
      default: function() {
        return [];
      }
    },
    valueFilter: {
      type: Object,
      default: function() {
        return {};
      }
    },
    sorters: {
      type: [Function, Object],
      default: function() {
        return {};
      }
    },
    derivedAttributes: {
      type: [Function, Object],
      default: function() {
        return {};
      }
    },
    rowOrder: {
      type: String,
      default: "key_a_to_z",
      validator: function(i) {
        return ["key_a_to_z", "value_a_to_z", "value_z_to_a"].indexOf(i) !== -1;
      }
    },
    colOrder: {
      type: String,
      default: "key_a_to_z",
      validator: function(i) {
        return ["key_a_to_z", "value_a_to_z", "value_z_to_a"].indexOf(i) !== -1;
      }
    },
    colLimit: {
      type: Number,
      default: 100
    },
    rowLimit: {
      type: Number,
      default: 100
    }
  },
  methods: {
    renderError(i) {
      return i("span", this.locales[this.locale].localeStrings.renderError || "An error occurred rendering the PivotTable results.");
    },
    computeError(i) {
      return i("span", this.locales[this.locale].localeStrings.computeError || "An error occurred computing the PivotTable results.");
    },
    uiRenderError(i) {
      return i("span", this.locales[this.locale].localeStrings.uiRenderError || "An error occurred rendering the PivotTable UI.");
    }
  }
};
function S0(i) {
  const o = Math.min.apply(Math, i), r = Math.max.apply(Math, i);
  return (l) => {
    const s = 255 - Math.round(255 * (l - o) / (r - o));
    return { backgroundColor: `rgb(255,${s},${s})` };
  };
}
function Fi(i = {}) {
  return {
    name: i.name,
    mixins: [x0],
    props: {
      colLimit: {
        type: Number,
        default: 100
      },
      rowLimit: {
        type: Number,
        default: 100
      },
      heatmapMode: String,
      tableColorScaleGenerator: {
        type: Function,
        default: S0
      },
      tableOptions: {
        type: Object,
        default: function() {
          return {
            clickCallback: null
          };
        }
      },
      localeStrings: {
        type: Object,
        default: function() {
          return {
            totals: "Totals"
          };
        }
      }
    },
    data() {
      return {
        scrollEvent: null,
        colStart: 0,
        rowStart: 0,
        colEnd: 100,
        rowEnd: 100
      };
    },
    created() {
      this.colEnd = this.colLimit, this.rowEnd = this.rowLimit;
    },
    computed: {
      pivotData() {
        const r = { ...this.$props, ...this.$attrs.props };
        return new Fa.PivotData(r);
      },
      maxRows() {
        return this.pivotData.getRowKeys().length - 1;
      },
      maxCols() {
        return this.pivotData.getColKeys().length - 1;
      },
      loaded() {
        return this.rowEnd >= this.maxRows && this.colEnd >= this.maxCols;
      }
    },
    methods: {
      isOverlap(r, l, s) {
        if (s === 0 || r[s].length - 1 === l)
          return -1;
        if (l === 0)
          return r[s][l] === r[s - 1][l] ? 1 : -1;
        for (; l > 0; )
          if (r[s][l] === r[s - 1][l] && r[s][l - 1] === r[s - 1][l - 1])
            l--;
          else
            return -1;
      },
      handleKeydownendEvent(r) {
        r.code === "PageDown" && this.handleScrollRender(), r.code === "end" && this.handleScrollRender(), r.ecode === "ArrowDown" && this.handleScrollRender();
      },
      handleScrollRender() {
        this.rowEnd <= this.maxRows && (this.rowEnd += this.rowLimit), this.colEnd <= this.maxCols && (this.colEnd += this.colLimit);
      }
    },
    mounted() {
      window.addEventListener("scroll", Ki.exports.debounce(this.handleScrollRender.bind(this), 1e3)), window.addEventListener("keydown", Ki.exports.debounce(this.handleKeydownendEvent.bind(this), 1e3));
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScrollRender), window.removeEventListener("keydown", this.handleKeydownendEvent);
    },
    render(r) {
      if (!this.pivotData)
        return this.computeError(r);
      const { rowStart: l, rowEnd: s, colStart: u, colEnd: c, isOverlap: d, pivotData: g, rowTotal: _, colTotal: b, localeStrings: x } = this, { cols: A, rows: O } = g.props, T = g.getRowKeys(), S = g.getColKeys();
      let L = () => {
      }, F = () => {
      }, k = () => {
      };
      if (i.heatmapMode) {
        const X = this.tableColorScaleGenerator, q = S.map(
          (U) => g.getAggregator([], U).value()
        );
        F = X(q);
        const J = T.map(
          (U) => g.getAggregator(U, []).value()
        );
        if (k = X(J), i.heatmapMode === "full") {
          const U = [];
          T.map(
            (Z) => S.map(
              (z) => U.push(g.getAggregator(Z, z).value())
            )
          );
          const G = X(U);
          L = (Z, z, bt) => G(bt);
        } else if (i.heatmapMode === "row") {
          const U = {};
          T.map((G) => {
            const Z = S.map(
              (z) => g.getAggregator(G, z).value()
            );
            U[G] = X(Z);
          }), L = (G, Z, z) => U[G](z);
        } else if (i.heatmapMode === "col") {
          const U = {};
          S.map((G) => {
            const Z = T.map(
              (z) => g.getAggregator(z, G).value()
            );
            U[G] = X(Z);
          }), L = (G, Z, z) => U[Z](z);
        }
      }
      const W = (X, q, J) => {
        const U = this.tableOptions;
        if (U && U.clickCallback) {
          const G = {};
          let Z = {};
          for (let z in A)
            !J.hasOwnProperty(z) || (Z = A[z], J[z] !== null && (G[Z] = J[z]));
          for (let z in O)
            !q.hasOwnProperty(z) || (Z = O[z], q[z] !== null && (G[Z] = q[z]));
          return (z) => U.clickCallback(z, X, G, g);
        }
      }, dt = (X, q, J) => {
        const U = [], [G, Z] = J;
        for (let z = G; z < Z; z++) {
          if (!S.hasOwnProperty(z))
            continue;
          const bt = d(S, q, z);
          U.push(
            X("th", {
              class: {
                pvtColLabel: !0
              },
              style: {
                "border-right": "none",
                "border-left": bt !== -1 ? "none" : null
              },
              attrs: {
                rowspan: q === A.length - 1 && O.length ? 2 : null
              }
            }, bt === -1 ? S[z][q] : null)
          );
        }
        return _ && q === 0 && U.push(
          X("th", {
            className: {
              pvtTotalLabel: !0,
              pvtRowTotalLabel: !0
            },
            attrs: {
              rowspan: A.length + (O.length === 0 ? 0 : 1)
            }
          }, x.totals)
        ), U;
      }, lt = (X) => O.length !== 0 ? X(
        "tr",
        [
          O.map((q, J) => X("th", {
            class: {
              pvtAxisLabel: !0
            },
            attrs: {
              key: `rowAttr${J}`
            }
          }, q)),
          _ || A.length ? X("th", {
            class: {
              pvtTotalLabel: !0
            }
          }, "") : null
        ]
      ) : null, ct = (X, q, J) => {
        const U = [], [G, Z] = J;
        for (let z = G; z < Z; z++)
          !T.hasOwnProperty(z) || U.push(
            X(
              "tr",
              [
                rt(X, z),
                it(X, z, q)
              ]
            )
          );
        return U;
      }, rt = (X, q) => {
        const J = [], U = T[q];
        for (let G = 0; G < U.length; G++) {
          if (!U.hasOwnProperty(G))
            continue;
          const Z = d(T, G, q);
          J.push(
            X("th", {
              className: {
                pvtRowLabel: !0
              },
              style: {
                "border-bottom": "none",
                "border-top": Z !== -1 ? "none" : null
              },
              attrs: {
                key: `rowKeyLabel${q}-${G}`,
                colspan: A.length && G === U.length - 1 ? 2 : null
              }
            }, Z === -1 ? U[G] : null)
          );
        }
        return J;
      }, it = (X, q, J) => {
        const U = [], G = T[q], [Z, z] = J;
        for (let bt = Z; bt < z; bt++) {
          if (!S.hasOwnProperty(bt))
            continue;
          const E = S[bt], I = g.getAggregator(G, E), N = I.value();
          U.push(
            X("td", {
              class: {
                pvVal: !0
              },
              style: L(G, E, N),
              attrs: {
                key: `pvtVal${q}-${bt}`
              },
              on: this.tableOptions.clickCallback ? {
                click: W(N, G, E)
              } : {}
            }, I.format(N))
          );
        }
        return _ && U.push(j(X, q)), U;
      }, j = (X, q) => {
        const J = T[q], U = g.getAggregator(J, []);
        return X("td", {
          class: {
            pvtTotal: !0
          },
          style: k(U.value()),
          on: this.tableOptions.clickCallback ? {
            click: W(U.value(), J, [])
          } : {}
        }, U.format(U.value()));
      }, Q = (X) => b ? X("th", {
        class: {
          pvtTotalLabel: !0
        },
        attrs: {
          colspan: O.length + (A.length === 0 ? 0 : 1)
        }
      }, x.totals) : null, vt = (X, q) => {
        const [J, U] = q, G = [];
        for (let Z = J; Z < U; Z++) {
          if (!S.hasOwnProperty(Z))
            continue;
          const z = S[Z], bt = g.getAggregator([], z);
          G.push(X("td", {
            staticClass: ["pvtTotal"],
            style: F(bt.value()),
            attrs: {
              key: `total${Z}`
            },
            on: this.tableOptions.clickCallback ? {
              click: W(bt.value(), [], z)
            } : {}
          }, bt.format(bt.value())));
        }
        return G;
      }, Nt = (X) => {
        const q = g.getAggregator([], []);
        return b && _ ? X("td", {
          staticClass: ["pvtGrandTotal"],
          on: this.tableOptions.clickCallback ? {
            click: W(q.value(), [], [])
          } : {}
        }, q.format(q.value())) : void 0;
      };
      return r("table", {
        ref: "pvtOutput",
        staticClass: ["pvtTable"]
      }, [
        r(
          "thead",
          [
            A.map((X, q) => r(
              "tr",
              {
                attrs: {
                  key: `colAttrs${q}`
                }
              },
              [
                q === 0 && O.length !== 0 ? r("th", {
                  attrs: {
                    colspan: O.length,
                    rowspan: A.length
                  }
                }) : null,
                r("th", {
                  class: {
                    pvtAxisLabel: !0
                  }
                }, X),
                dt(r, q, [u, c])
              ]
            )),
            lt(r)
          ]
        ),
        r(
          "tbody",
          [
            ct(r, [u, c], [l, s]),
            !this.loaded && s < this.maxRows ? r("tr", [
              r("td", {
                style: {
                  "text-align": "center"
                },
                attrs: {
                  colspan: O.length + c + 1
                }
              }, "loading...")
            ]) : null,
            r("tr", [
              Q(r),
              vt(r, [u, c]),
              Nt(r)
            ])
          ]
        )
      ]);
    },
    renderError(r, l) {
      return this.computeError(r);
    }
  };
}
const E0 = {
  Table: Fi({ name: "vue-table" }),
  "Table Heatmap": Fi({ heatmapMode: "full", name: "vue-table-heatmap" }),
  "Table Col Heatmap": Fi({ heatmapMode: "col", name: "vue-table-col-heatmap" }),
  "Table Row Heatmap": Fi({ heatmapMode: "row", name: "vue-table-col-heatmap" })
};
export {
  E0 as default
};
