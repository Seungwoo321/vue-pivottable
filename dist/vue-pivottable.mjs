const wn = function(e, n, o) {
  const t = String(e).split(".");
  let i = t[0];
  const r = t.length > 1 ? o + t[1] : "", a = /(\d+)(\d{3})/;
  for (; a.test(i); )
    i = i.replace(a, `$1${n}$2`);
  return i + r;
}, Oe = function(e) {
  const o = Object.assign({}, {
    digitsAfterDecimal: 2,
    scaler: 1,
    thousandsSep: ",",
    decimalSep: ".",
    prefix: "",
    suffix: ""
  }, e);
  return function(t) {
    if (isNaN(t) || !isFinite(t))
      return "";
    const i = wn(
      (o.scaler * t).toFixed(o.digitsAfterDecimal),
      o.thousandsSep,
      o.decimalSep
    );
    return `${o.prefix}${i}${o.suffix}`;
  };
}, Je = /(\d+)|(\D+)/g, oe = /\d/, Qe = /^0/, Rt = (e, n) => {
  if (n !== null && e === null)
    return -1;
  if (e !== null && n === null)
    return 1;
  if (typeof e == "number" && isNaN(e))
    return -1;
  if (typeof n == "number" && isNaN(n))
    return 1;
  const o = Number(e), t = Number(n);
  if (o < t)
    return -1;
  if (o > t)
    return 1;
  if (typeof e == "number" && typeof n != "number")
    return -1;
  if (typeof n == "number" && typeof e != "number")
    return 1;
  if (typeof e == "number" && typeof n == "number")
    return 0;
  if (isNaN(t) && !isNaN(o))
    return -1;
  if (isNaN(o) && !isNaN(t))
    return 1;
  let i = String(e), r = String(n);
  if (i === r)
    return 0;
  if (!oe.test(i) || !oe.test(r))
    return i > r ? 1 : -1;
  for (i = i.match(Je), r = r.match(Je); i.length && r.length; ) {
    const a = i.shift(), s = r.shift();
    if (a !== s)
      return oe.test(a) && oe.test(s) ? a.replace(Qe, ".0") - s.replace(Qe, ".0") : a > s ? 1 : -1;
  }
  return i.length - r.length;
}, un = function(e) {
  const n = {}, o = {};
  for (const t in e) {
    const i = e[t];
    n[i] = t, typeof i == "string" && (o[i.toLowerCase()] = t);
  }
  return function(t, i) {
    return t in n && i in n ? n[t] - n[i] : t in n ? -1 : i in n ? 1 : t in o && i in o ? o[t] - o[i] : t in o ? -1 : i in o ? 1 : Rt(t, i);
  };
}, De = function(e, n) {
  if (e) {
    if (typeof e == "function") {
      const o = e(n);
      if (typeof o == "function")
        return o;
    } else if (n in e)
      return e[n];
  }
  return Rt;
}, K = Oe(), Ft = Oe({ digitsAfterDecimal: 0 }), vt = Oe({
  digitsAfterDecimal: 1,
  scaler: 100,
  suffix: "%"
}), Z = {
  count(e = Ft) {
    return () => function() {
      return {
        count: 0,
        push() {
          this.count++;
        },
        value() {
          return this.count;
        },
        format: e
      };
    };
  },
  uniques(e, n = Ft) {
    return function([o]) {
      return function() {
        return {
          uniq: [],
          push(t) {
            Array.from(this.uniq).includes(t[o]) || this.uniq.push(t[o]);
          },
          value() {
            return e(this.uniq);
          },
          format: n,
          numInputs: typeof o < "u" ? 0 : 1
        };
      };
    };
  },
  sum(e = K) {
    return function([n]) {
      return function() {
        return {
          sum: 0,
          push(o) {
            isNaN(parseFloat(o[n])) || (this.sum += parseFloat(o[n]));
          },
          value() {
            return this.sum;
          },
          format: e,
          numInputs: typeof n < "u" ? 0 : 1
        };
      };
    };
  },
  extremes(e, n = K) {
    return function([o]) {
      return function(t) {
        return {
          val: null,
          sorter: De(
            typeof t < "u" ? t.sorters : null,
            o
          ),
          push(i) {
            let r = i[o];
            ["min", "max"].includes(e) && (r = parseFloat(r), isNaN(r) || (this.val = Math[e](r, this.val !== null ? this.val : r))), e === "first" && this.sorter(r, this.val !== null ? this.val : r) <= 0 && (this.val = r), e === "last" && this.sorter(r, this.val !== null ? this.val : r) >= 0 && (this.val = r);
          },
          value() {
            return this.val;
          },
          format(i) {
            return isNaN(i) ? i : n(i);
          },
          numInputs: typeof o < "u" ? 0 : 1
        };
      };
    };
  },
  quantile(e, n = K) {
    return function([o]) {
      return function() {
        return {
          vals: [],
          push(t) {
            const i = parseFloat(t[o]);
            isNaN(i) || this.vals.push(i);
          },
          value() {
            if (this.vals.length === 0)
              return null;
            this.vals.sort((i, r) => i - r);
            const t = (this.vals.length - 1) * e;
            return (this.vals[Math.floor(t)] + this.vals[Math.ceil(t)]) / 2;
          },
          format: n,
          numInputs: typeof o < "u" ? 0 : 1
        };
      };
    };
  },
  runningStat(e = "mean", n = 1, o = K) {
    return function([t]) {
      return function() {
        return {
          n: 0,
          m: 0,
          s: 0,
          push(i) {
            const r = parseFloat(i[t]);
            if (isNaN(r))
              return;
            this.n += 1, this.n === 1 && (this.m = r);
            const a = this.m + (r - this.m) / this.n;
            this.s = this.s + (r - this.m) * (r - a), this.m = a;
          },
          value() {
            if (e === "mean")
              return this.n === 0 ? 0 / 0 : this.m;
            if (this.n <= n)
              return 0;
            switch (e) {
              case "var":
                return this.s / (this.n - n);
              case "stdev":
                return Math.sqrt(this.s / (this.n - n));
              default:
                throw new Error("unknown mode for runningStat");
            }
          },
          format: o,
          numInputs: typeof t < "u" ? 0 : 1
        };
      };
    };
  },
  sumOverSum(e = K) {
    return function([n, o]) {
      return function() {
        return {
          sumNum: 0,
          sumDenom: 0,
          push(t) {
            isNaN(parseFloat(t[n])) || (this.sumNum += parseFloat(t[n])), isNaN(parseFloat(t[o])) || (this.sumDenom += parseFloat(t[o]));
          },
          value() {
            return this.sumNum / this.sumDenom;
          },
          format: e,
          numInputs: typeof n < "u" && typeof o < "u" ? 0 : 2
        };
      };
    };
  },
  fractionOf(e, n = "total", o = vt) {
    return (...t) => function(i, r, a) {
      return {
        selector: { total: [[], []], row: [r, []], col: [[], a] }[n],
        inner: e(...Array.from(t || []))(i, r, a),
        push(s) {
          this.inner.push(s);
        },
        format: o,
        value() {
          return this.inner.value() / i.getAggregator(...Array.from(this.selector || [])).inner.value();
        },
        numInputs: e(...Array.from(t || []))().numInputs
      };
    };
  }
};
Z.countUnique = (e) => Z.uniques((n) => n.length, e);
Z.listUnique = (e) => Z.uniques((n) => n.join(e), (n) => n);
Z.max = (e) => Z.extremes("max", e);
Z.min = (e) => Z.extremes("min", e);
Z.first = (e) => Z.extremes("first", e);
Z.last = (e) => Z.extremes("last", e);
Z.median = (e) => Z.quantile(0.5, e);
Z.average = (e) => Z.runningStat("mean", 1, e);
Z.var = (e, n) => Z.runningStat("var", e, n);
Z.stdev = (e, n) => Z.runningStat("stdev", e, n);
const te = ((e) => ({
  Count: e.count(Ft),
  "Count Unique Values": e.countUnique(Ft),
  "List Unique Values": e.listUnique(", "),
  Sum: e.sum(K),
  "Integer Sum": e.sum(Ft),
  Average: e.average(K),
  Median: e.median(K),
  "Sample Variance": e.var(1, K),
  "Sample Standard Deviation": e.stdev(1, K),
  Minimum: e.min(K),
  Maximum: e.max(K),
  First: e.first(K),
  Last: e.last(K),
  "Sum over Sum": e.sumOverSum(K),
  "Sum as Fraction of Total": e.fractionOf(e.sum(), "total", vt),
  "Sum as Fraction of Rows": e.fractionOf(e.sum(), "row", vt),
  "Sum as Fraction of Columns": e.fractionOf(e.sum(), "col", vt),
  "Count as Fraction of Total": e.fractionOf(e.count(), "total", vt),
  "Count as Fraction of Rows": e.fractionOf(e.count(), "row", vt),
  "Count as Fraction of Columns": e.fractionOf(e.count(), "col", vt)
}))(Z), En = ((e) => ({
  Compte: e.count(Ft),
  "Compter les valeurs uniques": e.countUnique(Ft),
  "Liste des valeurs uniques": e.listUnique(", "),
  Somme: e.sum(K),
  "Somme de nombres entiers": e.sum(Ft),
  Moyenne: e.average(K),
  M\u00E9diane: e.median(K),
  "Variance de l'\xE9chantillon": e.var(1, K),
  "\xC9cart-type de l'\xE9chantillon": e.stdev(1, K),
  Minimum: e.min(K),
  Maximum: e.max(K),
  Premier: e.first(K),
  Dernier: e.last(K),
  "Somme Total": e.sumOverSum(K),
  "Somme en fraction du total": e.fractionOf(e.sum(), "total", vt),
  "Somme en tant que fraction de lignes": e.fractionOf(e.sum(), "row", vt),
  "Somme en tant que fraction de colonnes": e.fractionOf(e.sum(), "col", vt),
  "Comptage en tant que fraction du total": e.fractionOf(e.count(), "total", vt),
  "Comptage en tant que fraction de lignes": e.fractionOf(e.count(), "row", vt),
  "Comptage en tant que fraction de colonnes": e.fractionOf(e.count(), "col", vt)
}))(Z), cn = {
  en: {
    aggregators: te,
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
    frAggregators: En,
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
}, Cn = [
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
], Tn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], zt = (e) => `0${e}`.substr(-2, 2), An = {
  bin(e, n) {
    return (o) => o[e] - o[e] % n;
  },
  dateFormat(e, n, o = !1, t = Cn, i = Tn) {
    const r = o ? "UTC" : "";
    return function(a) {
      const s = new Date(Date.parse(a[e]));
      return isNaN(s) ? "" : n.replace(/%(.)/g, function(l, u) {
        switch (u) {
          case "y":
            return s[`get${r}FullYear`]();
          case "m":
            return zt(s[`get${r}Month`]() + 1);
          case "n":
            return t[s[`get${r}Month`]()];
          case "d":
            return zt(s[`get${r}Date`]());
          case "w":
            return i[s[`get${r}Day`]()];
          case "x":
            return s[`get${r}Day`]();
          case "H":
            return zt(s[`get${r}Hours`]());
          case "M":
            return zt(s[`get${r}Minutes`]());
          case "S":
            return zt(s[`get${r}Seconds`]());
          default:
            return `%${u}`;
        }
      });
    };
  }
};
class Ot {
  constructor(n = {}) {
    this.props = Object.assign({}, Ot.defaultProps, n), this.aggregator = this.props.aggregators[this.props.aggregatorName](
      this.props.vals
    ), this.tree = {}, this.rowKeys = [], this.colKeys = [], this.rowTotals = {}, this.colTotals = {}, this.allTotal = this.aggregator(this, [], []), this.sorted = !1, this.filteredData = [], Ot.forEachRecord(
      this.props.data,
      this.props.derivedAttributes,
      (o) => {
        this.filter(o) && (this.filteredData.push(o), this.processRecord(o));
      }
    );
  }
  filter(n) {
    const o = "*";
    for (const t in this.props.valueFilter)
      if (t !== o) {
        const i = this.props.valueFilter && this.props.valueFilter[t];
        if (n[t] in i) {
          if (i[n[t]] === !0)
            return !1;
        } else if (i[o] === !0)
          return !1;
      }
    return !0;
  }
  forEachMatchingRecord(n, o) {
    return Ot.forEachRecord(
      this.props.data,
      this.props.derivedAttributes,
      (t) => {
        if (!!this.filter(t)) {
          for (const i in n)
            if (n[i] !== (i in t ? t[i] : "null"))
              return;
          o(t);
        }
      }
    );
  }
  arrSort(n) {
    let o;
    const t = (() => {
      const i = [];
      for (o of Array.from(n))
        i.push(De(this.props.sorters, o));
      return i;
    })();
    return function(i, r) {
      for (const a of Object.keys(t || {})) {
        const s = t[a], l = s(i[a], r[a]);
        if (l !== 0)
          return l;
      }
      return 0;
    };
  }
  sortKeys() {
    if (!this.sorted) {
      this.sorted = !0;
      const n = (o, t) => this.getAggregator(o, t).value();
      switch (this.props.rowOrder) {
        case "value_a_to_z":
          this.rowKeys.sort((o, t) => Rt(n(o, []), n(t, [])));
          break;
        case "value_z_to_a":
          this.rowKeys.sort((o, t) => -Rt(n(o, []), n(t, [])));
          break;
        default:
          this.rowKeys.sort(this.arrSort(this.props.rows));
      }
      switch (this.props.colOrder) {
        case "value_a_to_z":
          this.colKeys.sort((o, t) => Rt(n([], o), n([], t)));
          break;
        case "value_z_to_a":
          this.colKeys.sort((o, t) => -Rt(n([], o), n([], t)));
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
  processRecord(n) {
    const o = [], t = [];
    for (const a of Array.from(this.props.cols))
      o.push(a in n ? n[a] : "null");
    for (const a of Array.from(this.props.rows))
      t.push(a in n ? n[a] : "null");
    const i = t.join(String.fromCharCode(0)), r = o.join(String.fromCharCode(0));
    this.allTotal.push(n), t.length !== 0 && (this.rowTotals[i] || (this.rowKeys.push(t), this.rowTotals[i] = this.aggregator(this, t, [])), this.rowTotals[i].push(n)), o.length !== 0 && (this.colTotals[r] || (this.colKeys.push(o), this.colTotals[r] = this.aggregator(this, [], o)), this.colTotals[r].push(n)), o.length !== 0 && t.length !== 0 && (this.tree[i] || (this.tree[i] = {}), this.tree[i][r] || (this.tree[i][r] = this.aggregator(
      this,
      t,
      o
    )), this.tree[i][r].push(n));
  }
  getAggregator(n, o) {
    let t;
    const i = n.join(String.fromCharCode(0)), r = o.join(String.fromCharCode(0));
    return n.length === 0 && o.length === 0 ? t = this.allTotal : n.length === 0 ? t = this.colTotals[r] : o.length === 0 ? t = this.rowTotals[i] : t = this.tree[i][r], t || {
      value() {
        return null;
      },
      format() {
        return "";
      }
    };
  }
}
Ot.forEachRecord = function(e, n, o) {
  let t, i;
  if (Object.getOwnPropertyNames(n).length === 0 ? t = o : t = function(r) {
    for (const a in n) {
      const s = n[a](r);
      s !== null && (r[a] = s);
    }
    return o(r);
  }, typeof e == "function")
    return e(t);
  if (Array.isArray(e))
    return Array.isArray(e[0]) ? (() => {
      const r = [];
      for (const a of Object.keys(e || {})) {
        const s = e[a];
        if (a > 0) {
          i = {};
          for (const l of Object.keys(e[0] || {})) {
            const u = e[0][l];
            i[u] = s[l];
          }
          r.push(t(i));
        }
      }
      return r;
    })() : (() => {
      const r = [];
      for (i of Array.from(e))
        r.push(t(i));
      return r;
    })();
  throw new Error("unknown input format");
};
Ot.defaultProps = {
  aggregators: te,
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
const we = {
  props: {
    data: {
      type: [Array, Object, Function],
      required: !0
    },
    aggregators: {
      type: Object,
      default: function() {
        return te;
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
        return cn;
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
      validator: function(e) {
        return ["key_a_to_z", "value_a_to_z", "value_z_to_a"].indexOf(e) !== -1;
      }
    },
    colOrder: {
      type: String,
      default: "key_a_to_z",
      validator: function(e) {
        return ["key_a_to_z", "value_a_to_z", "value_z_to_a"].indexOf(e) !== -1;
      }
    },
    tableMaxWidth: {
      type: Number,
      default: 0,
      validator: function(e) {
        return e >= 0;
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
    renderError(e) {
      return e("span", this.locales[this.locale].localeStrings.renderError || "An error occurred rendering the PivotTable results.");
    },
    computeError(e) {
      return e("span", this.locales[this.locale].localeStrings.computeError || "An error occurred computing the PivotTable results.");
    },
    uiRenderError(e) {
      return e("span", this.locales[this.locale].localeStrings.uiRenderError || "An error occurred rendering the PivotTable UI.");
    }
  }
};
function In(e) {
  const n = Math.min.apply(Math, e), o = Math.max.apply(Math, e);
  return (t) => {
    const i = 255 - Math.round(255 * (t - n) / (o - n));
    return { backgroundColor: `rgb(255,${i},${i})` };
  };
}
function ie(e = {}) {
  return {
    name: e.name,
    mixins: [
      we
    ],
    props: {
      heatmapMode: String,
      tableColorScaleGenerator: {
        type: Function,
        default: In
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
      spanSize(o, t, i) {
        let r;
        if (t !== 0) {
          let s, l, u = !0;
          for (r = 0, l = i, s = l >= 0; s ? r <= l : r >= l; s ? r++ : r--)
            o[t - 1][r] !== o[t][r] && (u = !1);
          if (u)
            return -1;
        }
        let a = 0;
        for (; t + a < o.length; ) {
          let s, l, u = !1;
          for (r = 0, l = i, s = l >= 0; s ? r <= l : r >= l; s ? r++ : r--)
            o[t][r] !== o[t + a][r] && (u = !0);
          if (u)
            break;
          a++;
        }
        return a;
      }
    },
    render(o) {
      let t = null;
      try {
        const g = Object.assign(
          {},
          this.$props,
          this.$attrs.props
        );
        t = new Ot(g);
      } catch (g) {
        if (console && console.error(g.stack))
          return this.computeError(o);
      }
      const i = t.props.cols, r = t.props.rows, a = t.getRowKeys(), s = t.getColKeys(), l = t.getAggregator([], []);
      let u = () => {
      }, c = () => {
      }, f = () => {
      };
      if (e.heatmapMode) {
        const g = this.tableColorScaleGenerator, h = s.map(
          (m) => t.getAggregator([], m).value()
        );
        c = g(h);
        const d = a.map(
          (m) => t.getAggregator(m, []).value()
        );
        if (f = g(d), e.heatmapMode === "full") {
          const m = [];
          a.map(
            (D) => s.map(
              (O) => m.push(t.getAggregator(D, O).value())
            )
          );
          const S = g(m);
          u = (D, O, C) => S(C);
        } else if (e.heatmapMode === "row") {
          const m = {};
          a.map((S) => {
            const D = s.map(
              (O) => t.getAggregator(S, O).value()
            );
            m[S] = g(D);
          }), u = (S, D, O) => m[S](O);
        } else if (e.heatmapMode === "col") {
          const m = {};
          s.map((S) => {
            const D = a.map(
              (O) => t.getAggregator(O, S).value()
            );
            m[S] = g(D);
          }), u = (S, D, O) => m[D](O);
        }
      }
      const p = (g, h, d) => {
        const m = this.tableOptions;
        if (m && m.clickCallback) {
          const S = {};
          let D = {};
          for (let O in i)
            !d.hasOwnProperty(O) || (D = i[O], d[O] !== null && (S[D] = d[O]));
          for (let O in r)
            !h.hasOwnProperty(O) || (D = r[O], h[O] !== null && (S[D] = h[O]));
          return (O) => m.clickCallback(O, g, S, t);
        }
      };
      return o("table", {
        staticClass: ["pvtTable"]
      }, [
        o(
          "thead",
          [
            i.map((g, h) => o(
              "tr",
              {
                attrs: {
                  key: `colAttrs${h}`
                }
              },
              [
                h === 0 && r.length !== 0 ? o("th", {
                  attrs: {
                    colSpan: r.length,
                    rowSpan: i.length
                  }
                }) : void 0,
                o("th", {
                  staticClass: ["pvtAxisLabel"]
                }, g),
                s.map((d, m) => {
                  const S = this.spanSize(s, m, h);
                  return S === -1 ? null : o("th", {
                    staticClass: ["pvtColLabel"],
                    attrs: {
                      key: `colKey${m}`,
                      colSpan: S,
                      rowSpan: h === i.length - 1 && r.length !== 0 ? 2 : 1
                    }
                  }, d[h]);
                }),
                h === 0 && this.rowTotal ? o("th", {
                  staticClass: ["pvtTotalLabel"],
                  attrs: {
                    rowSpan: i.length + (r.length === 0 ? 0 : 1)
                  }
                }, this.localeStrings.totals) : void 0
              ]
            )),
            r.length !== 0 ? o(
              "tr",
              [
                r.map((g, h) => o("th", {
                  staticClass: ["pvtAxisLabel"],
                  attrs: {
                    key: `rowAttr${h}`
                  }
                }, g)),
                this.rowTotal ? o("th", { staticClass: ["pvtTotalLabel"] }, i.length === 0 ? this.localeStrings.totals : null) : i.length === 0 ? void 0 : o("th", { staticClass: ["pvtTotalLabel"] }, null)
              ]
            ) : void 0
          ]
        ),
        o(
          "tbody",
          [
            a.map((g, h) => {
              const d = t.getAggregator(g, []);
              return o(
                "tr",
                {
                  attrs: {
                    key: `rowKeyRow${h}`
                  }
                },
                [
                  g.map((m, S) => {
                    const D = this.spanSize(a, h, S);
                    return D === -1 ? null : o("th", {
                      staticClass: ["pvtRowLabel"],
                      attrs: {
                        key: `rowKeyLabel${h}-${S}`,
                        rowSpan: D,
                        colSpan: S === r.length - 1 && i.length !== 0 ? 2 : 1
                      }
                    }, m);
                  }),
                  s.map((m, S) => {
                    const D = t.getAggregator(g, m);
                    return o("td", {
                      staticClass: ["pvVal"],
                      style: u(g, m, D.value()),
                      attrs: {
                        key: `pvtVal${h}-${S}`
                      },
                      on: this.tableOptions.clickCallback ? {
                        click: p(D.value(), g, m)
                      } : {}
                    }, D.format(D.value()));
                  }),
                  this.rowTotal ? o("td", {
                    staticClass: ["pvtTotal"],
                    style: f(d.value()),
                    on: this.tableOptions.clickCallback ? {
                      click: p(d.value(), g, [])
                    } : {}
                  }, d.format(d.value())) : void 0
                ]
              );
            }),
            o(
              "tr",
              [
                this.colTotal ? o("th", {
                  staticClass: ["pvtTotalLabel"],
                  attrs: {
                    colSpan: r.length + (i.length === 0 ? 0 : 1)
                  }
                }, this.localeStrings.totals) : void 0,
                this.colTotal ? s.map((g, h) => {
                  const d = t.getAggregator([], g);
                  return o("td", {
                    staticClass: ["pvtTotal"],
                    style: c(d.value()),
                    attrs: {
                      key: `total${h}`
                    },
                    on: this.tableOptions.clickCallback ? {
                      click: p(d.value(), [], g)
                    } : {}
                  }, d.format(d.value()));
                }) : void 0,
                this.colTotal && this.rowTotal ? o("td", {
                  staticClass: ["pvtGrandTotal"],
                  on: this.tableOptions.clickCallback ? {
                    click: p(l.value(), [], [])
                  } : {}
                }, l.format(l.value())) : void 0
              ]
            )
          ]
        )
      ]);
    },
    renderError(o, t) {
      return this.renderError(o);
    }
  };
}
const Fn = {
  name: "tsv-export-renderers",
  mixins: [we],
  render(e) {
    let n = null;
    try {
      const a = Object.assign(
        {},
        this.$props,
        this.$attrs.props
      );
      n = new Ot(a);
    } catch (a) {
      if (console && console.error(a.stack))
        return this.computeError(e);
    }
    const o = n.getRowKeys(), t = n.getColKeys();
    o.length === 0 && o.push([]), t.length === 0 && t.push([]);
    const i = n.props.rows.map((a) => a);
    t.length === 1 && t[0].length === 0 ? i.push(this.aggregatorName) : t.map((a) => i.push(a.join("-")));
    const r = o.map((a) => {
      const s = a.map((l) => l);
      return t.map((l) => {
        const u = n.getAggregator(a, l).value();
        s.push(u || "");
      }), s;
    });
    return r.unshift(i), e("textarea", {
      style: {
        width: "100%",
        height: `${window.innerHeight / 2}px`
      },
      attrs: {
        readOnly: !0
      },
      domProps: {
        value: r.map((a) => a.join("	")).join(`
`)
      }
    });
  },
  renderError(e, n) {
    return this.renderError(e);
  }
}, We = {
  Table: ie({ name: "vue-table" }),
  "Table Heatmap": ie({ heatmapMode: "full", name: "vue-table-heatmap" }),
  "Table Col Heatmap": ie({ heatmapMode: "col", name: "vue-table-col-heatmap" }),
  "Table Row Heatmap": ie({ heatmapMode: "row", name: "vue-table-col-heatmap" }),
  "Export Table TSV": Fn
}, Ke = {
  name: "vue-pivottable",
  mixins: [
    we
  ],
  computed: {
    rendererItems() {
      return this.renderers || Object.assign({}, We);
    }
  },
  methods: {
    createPivottable(e) {
      const n = this.$props;
      return e(this.rendererItems[this.rendererName], {
        props: Object.assign(
          n,
          { localeStrings: n.locales[n.locale].localeStrings }
        )
      });
    },
    createWrapperContainer(e) {
      return e("div", {
        style: {
          display: "block",
          width: "100%",
          "overflow-x": "auto",
          "max-width": this.tableMaxWidth ? `${this.tableMaxWidth}px` : void 0
        }
      }, [
        this.createPivottable(e)
      ]);
    }
  },
  render(e) {
    return this.createWrapperContainer(e);
  },
  renderError(e, n) {
    return this.renderError(e);
  }
}, Nn = {
  name: "draggable-attribute",
  props: {
    open: {
      type: Boolean,
      default: !1
    },
    sortable: {
      type: Boolean,
      default: !0
    },
    draggable: {
      type: Boolean,
      default: !0
    },
    name: {
      type: String,
      required: !0
    },
    attrValues: {
      type: Object,
      required: !1
    },
    valueFilter: {
      type: Object,
      default: function() {
        return {};
      }
    },
    sorter: {
      type: Function,
      required: !0
    },
    localeStrings: {
      type: Object,
      default: function() {
        return {
          selectAll: "Select All",
          selectNone: "Select None",
          tooMany: "(too many to list)",
          filterResults: "Filter values",
          only: "only"
        };
      }
    },
    menuLimit: Number,
    zIndex: Number,
    async: Boolean,
    unused: Boolean
  },
  data() {
    return {
      filterText: "",
      attribute: "",
      values: [],
      filter: {}
    };
  },
  computed: {
    disabled() {
      return !this.sortable && !this.draggable;
    },
    sortonly() {
      return this.sortable && !this.draggable;
    }
  },
  methods: {
    setValuesInFilter(e, n) {
      const o = n.reduce((t, i) => (t[i] = !0, t), {});
      this.$emit("update:filter", { attribute: e, valueFilter: o });
    },
    addValuesToFilter(e, n) {
      const o = n.reduce((t, i) => (t[i] = !0, t), Object.assign({}, this.valueFilter));
      this.$emit("update:filter", { attribute: e, valueFilter: o });
    },
    removeValuesFromFilter(e, n) {
      const o = n.reduce((t, i) => (t[i] && delete t[i], t), Object.assign({}, this.valueFilter));
      this.$emit("update:filter", { attribute: e, valueFilter: o });
    },
    moveFilterBoxToTop(e) {
      this.$emit("moveToTop:filterbox", { attribute: e });
    },
    toggleValue(e) {
      e in this.valueFilter ? this.removeValuesFromFilter(this.name, [e]) : this.addValuesToFilter(this.name, [e]);
    },
    matchesFilter(e) {
      return e.toLowerCase().trim().includes(this.filterText.toLowerCase().trim());
    },
    selectOnly(e, n) {
      e.stopPropagation(), this.value = n, this.setValuesInFilter(this.name, Object.keys(this.attrValues).filter((o) => o !== n));
    },
    getFilterBox(e) {
      const n = Object.keys(this.attrValues).length < this.menuLimit, t = Object.keys(this.attrValues).filter(this.matchesFilter.bind(this)).sort(this.sorter);
      return e(
        "div",
        {
          staticClass: ["pvtFilterBox"],
          style: {
            display: "block",
            cursor: "initial",
            zIndex: this.zIndex
          },
          on: {
            click: (i) => {
              i.stopPropagation(), this.moveFilterBoxToTop(this.name);
            }
          }
        },
        [
          e(
            "div",
            {
              staticClass: "pvtSearchContainer"
            },
            [
              n || e("p", this.localeStrings.tooMany),
              n && e("input", {
                staticClass: ["pvtSearch"],
                attrs: {
                  type: "text",
                  placeholder: this.localeStrings.filterResults
                },
                domProps: {
                  value: this.filterText
                },
                on: {
                  input: (i) => {
                    this.filterText = i.target.value, this.$emit("input", i.target.value);
                  }
                }
              }),
              e("a", {
                staticClass: ["pvtFilterTextClear"],
                on: {
                  click: () => {
                    this.filterText = "";
                  }
                }
              }),
              e("a", {
                staticClass: ["pvtButton"],
                attrs: {
                  role: "button"
                },
                on: {
                  click: () => this.removeValuesFromFilter(this.name, Object.keys(this.attrValues).filter(this.matchesFilter.bind(this)))
                }
              }, this.localeStrings.selectAll),
              e("a", {
                staticClass: ["pvtButton"],
                attrs: {
                  role: "button"
                },
                on: {
                  click: () => this.addValuesToFilter(this.name, Object.keys(this.attrValues).filter(this.matchesFilter.bind(this)))
                }
              }, this.localeStrings.selectNone)
            ]
          ),
          n && e(
            "div",
            {
              staticClass: ["pvtCheckContainer"]
            },
            t.map((i) => {
              const r = !(i in this.valueFilter);
              return e(
                "p",
                {
                  class: {
                    selected: r
                  },
                  attrs: {
                    key: i
                  },
                  on: {
                    click: () => this.toggleValue(i)
                  }
                },
                [
                  e("input", {
                    attrs: {
                      type: "checkbox"
                    },
                    domProps: {
                      checked: r
                    }
                  }),
                  i,
                  e("a", {
                    staticClass: ["pvtOnly"],
                    on: {
                      click: (a) => this.selectOnly(a, i)
                    }
                  }, this.localeStrings.only),
                  e("a", {
                    staticClass: ["pvtOnlySpacer"]
                  })
                ]
              );
            })
          )
        ]
      );
    },
    toggleFilterBox(e) {
      if (e.stopPropagation(), !this.attrValues) {
        this.$listeners["no:filterbox"] && this.$emit("no:filterbox");
        return;
      }
      this.openFilterBox(this.name, !this.open), this.moveFilterBoxToTop(this.name);
    },
    openFilterBox(e, n) {
      this.$emit("open:filterbox", { attribute: e, open: n });
    }
  },
  render(e) {
    const n = Object.keys(this.valueFilter).length !== 0 ? "pvtFilteredAttribute" : "", o = this.$scopedSlots.pvtAttr;
    return e(
      "li",
      {
        attrs: {
          "data-id": this.disabled ? void 0 : this.name
        }
      },
      [
        e(
          "span",
          {
            staticClass: ["pvtAttr " + n],
            class: {
              sortonly: this.sortonly,
              disabled: this.disabled
            }
          },
          [
            o ? o({ name: this.name }) : this.name,
            !this.disabled && (!this.async || !this.unused && this.async) ? e("span", {
              staticClass: ["pvtTriangle"],
              on: {
                click: this.toggleFilterBox.bind(this)
              }
            }, "  \u25BE") : void 0,
            this.open ? this.getFilterBox(e) : void 0
          ]
        )
      ]
    );
  }
}, Ce = {
  props: ["values", "value"],
  model: {
    prop: "value",
    event: "input"
  },
  created() {
    this.$emit("input", this.value || this.values[0]);
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    }
  },
  render(e) {
    return e(
      "select",
      {
        staticClass: ["pvtDropdown"],
        domProps: {
          value: this.value
        },
        on: {
          change: this.handleChange
        }
      },
      [
        this.values.map((n) => {
          const o = n;
          return e("option", {
            attrs: {
              value: n,
              selected: n === this.value ? "selected" : void 0
            }
          }, o);
        })
      ]
    );
  }
};
var Mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jn(e) {
  var n = e.default;
  if (typeof n == "function") {
    var o = function() {
      return n.apply(this, arguments);
    };
    o.prototype = n.prototype;
  } else
    o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
    var i = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(o, t, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), o;
}
var fn = { exports: {} };
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function fe(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fe = function(n) {
    return typeof n;
  } : fe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fe(e);
}
function Rn(e, n, o) {
  return n in e ? Object.defineProperty(e, n, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = o, e;
}
function bt() {
  return bt = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      for (var t in o)
        Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
    }
    return e;
  }, bt.apply(this, arguments);
}
function Nt(e) {
  for (var n = 1; n < arguments.length; n++) {
    var o = arguments[n] != null ? arguments[n] : {}, t = Object.keys(o);
    typeof Object.getOwnPropertySymbols == "function" && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    }))), t.forEach(function(i) {
      Rn(e, i, o[i]);
    });
  }
  return e;
}
function Ln(e, n) {
  if (e == null)
    return {};
  var o = {}, t = Object.keys(e), i, r;
  for (r = 0; r < t.length; r++)
    i = t[r], !(n.indexOf(i) >= 0) && (o[i] = e[i]);
  return o;
}
function $n(e, n) {
  if (e == null)
    return {};
  var o = Ln(e, n), t, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (i = 0; i < r.length; i++)
      t = r[i], !(n.indexOf(t) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, t) || (o[t] = e[t]));
  }
  return o;
}
function Bn(e) {
  return Vn(e) || Un(e) || zn();
}
function Vn(e) {
  if (Array.isArray(e)) {
    for (var n = 0, o = new Array(e.length); n < e.length; n++)
      o[n] = e[n];
    return o;
  }
}
function Un(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]")
    return Array.from(e);
}
function zn() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
var Gn = "1.10.2";
function Et(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Ct = Et(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ee = Et(/Edge/i), qe = Et(/firefox/i), Ve = Et(/safari/i) && !Et(/chrome/i) && !Et(/android/i), dn = Et(/iP(ad|od|hone)/i), Hn = Et(/chrome/i) && Et(/android/i), hn = {
  capture: !1,
  passive: !1
};
function $(e, n, o) {
  e.addEventListener(n, o, !Ct && hn);
}
function R(e, n, o) {
  e.removeEventListener(n, o, !Ct && hn);
}
function ve(e, n) {
  if (!!n) {
    if (n[0] === ">" && (n = n.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(n);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(n);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(n);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Wn(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function St(e, n, o, t) {
  if (e) {
    o = o || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === o && ve(e, n) : ve(e, n)) || t && e === o)
        return e;
      if (e === o)
        break;
    } while (e = Wn(e));
  }
  return null;
}
var _e = /\s+/g;
function k(e, n, o) {
  if (e && n)
    if (e.classList)
      e.classList[o ? "add" : "remove"](n);
    else {
      var t = (" " + e.className + " ").replace(_e, " ").replace(" " + n + " ", " ");
      e.className = (t + (o ? " " + n : "")).replace(_e, " ");
    }
}
function w(e, n, o) {
  var t = e && e.style;
  if (t) {
    if (o === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? o = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (o = e.currentStyle), n === void 0 ? o : o[n];
    !(n in t) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), t[n] = o + (typeof o == "string" ? "" : "px");
  }
}
function Lt(e, n) {
  var o = "";
  if (typeof e == "string")
    o = e;
  else
    do {
      var t = w(e, "transform");
      t && t !== "none" && (o = t + " " + o);
    } while (!n && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(o);
}
function pn(e, n, o) {
  if (e) {
    var t = e.getElementsByTagName(n), i = 0, r = t.length;
    if (o)
      for (; i < r; i++)
        o(t[i], i);
    return t;
  }
  return [];
}
function wt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function _(e, n, o, t, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var r, a, s, l, u, c, f;
    if (e !== window && e !== wt() ? (r = e.getBoundingClientRect(), a = r.top, s = r.left, l = r.bottom, u = r.right, c = r.height, f = r.width) : (a = 0, s = 0, l = window.innerHeight, u = window.innerWidth, c = window.innerHeight, f = window.innerWidth), (n || o) && e !== window && (i = i || e.parentNode, !Ct))
      do
        if (i && i.getBoundingClientRect && (w(i, "transform") !== "none" || o && w(i, "position") !== "static")) {
          var p = i.getBoundingClientRect();
          a -= p.top + parseInt(w(i, "border-top-width")), s -= p.left + parseInt(w(i, "border-left-width")), l = a + r.height, u = s + r.width;
          break;
        }
      while (i = i.parentNode);
    if (t && e !== window) {
      var g = Lt(i || e), h = g && g.a, d = g && g.d;
      g && (a /= d, s /= h, f /= h, c /= d, l = a + c, u = s + f);
    }
    return {
      top: a,
      left: s,
      bottom: l,
      right: u,
      width: f,
      height: c
    };
  }
}
function tn(e, n, o) {
  for (var t = It(e, !0), i = _(e)[n]; t; ) {
    var r = _(t)[o], a = void 0;
    if (o === "top" || o === "left" ? a = i >= r : a = i <= r, !a)
      return t;
    if (t === wt())
      break;
    t = It(t, !1);
  }
  return !1;
}
function me(e, n, o) {
  for (var t = 0, i = 0, r = e.children; i < r.length; ) {
    if (r[i].style.display !== "none" && r[i] !== T.ghost && r[i] !== T.dragged && St(r[i], o.draggable, e, !1)) {
      if (t === n)
        return r[i];
      t++;
    }
    i++;
  }
  return null;
}
function Xe(e, n) {
  for (var o = e.lastElementChild; o && (o === T.ghost || w(o, "display") === "none" || n && !ve(o, n)); )
    o = o.previousElementSibling;
  return o || null;
}
function q(e, n) {
  var o = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== T.clone && (!n || ve(e, n)) && o++;
  return o;
}
function en(e) {
  var n = 0, o = 0, t = wt();
  if (e)
    do {
      var i = Lt(e), r = i.a, a = i.d;
      n += e.scrollLeft * r, o += e.scrollTop * a;
    } while (e !== t && (e = e.parentNode));
  return [n, o];
}
function Kn(e, n) {
  for (var o in e)
    if (!!e.hasOwnProperty(o)) {
      for (var t in n)
        if (n.hasOwnProperty(t) && n[t] === e[o][t])
          return Number(o);
    }
  return -1;
}
function It(e, n) {
  if (!e || !e.getBoundingClientRect)
    return wt();
  var o = e, t = !1;
  do
    if (o.clientWidth < o.scrollWidth || o.clientHeight < o.scrollHeight) {
      var i = w(o);
      if (o.clientWidth < o.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || o.clientHeight < o.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!o.getBoundingClientRect || o === document.body)
          return wt();
        if (t || n)
          return o;
        t = !0;
      }
    }
  while (o = o.parentNode);
  return wt();
}
function Xn(e, n) {
  if (e && n)
    for (var o in n)
      n.hasOwnProperty(o) && (e[o] = n[o]);
  return e;
}
function Te(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Jt;
function gn(e, n) {
  return function() {
    if (!Jt) {
      var o = arguments, t = this;
      o.length === 1 ? e.call(t, o[0]) : e.apply(t, o), Jt = setTimeout(function() {
        Jt = void 0;
      }, n);
    }
  };
}
function Yn() {
  clearTimeout(Jt), Jt = void 0;
}
function vn(e, n, o) {
  e.scrollLeft += n, e.scrollTop += o;
}
function Ye(e) {
  var n = window.Polymer, o = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : o ? o(e).clone(!0)[0] : e.cloneNode(!0);
}
function nn(e, n) {
  w(e, "position", "absolute"), w(e, "top", n.top), w(e, "left", n.left), w(e, "width", n.width), w(e, "height", n.height);
}
function Ae(e) {
  w(e, "position", ""), w(e, "top", ""), w(e, "left", ""), w(e, "width", ""), w(e, "height", "");
}
var ut = "Sortable" + new Date().getTime();
function kn() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var t = [].slice.call(this.el.children);
        t.forEach(function(i) {
          if (!(w(i, "display") === "none" || i === T.ghost)) {
            e.push({
              target: i,
              rect: _(i)
            });
            var r = Nt({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = Lt(i, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(t) {
      e.push(t);
    },
    removeAnimationState: function(t) {
      e.splice(Kn(e, {
        target: t
      }), 1);
    },
    animateAll: function(t) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(n), typeof t == "function" && t();
        return;
      }
      var r = !1, a = 0;
      e.forEach(function(s) {
        var l = 0, u = s.target, c = u.fromRect, f = _(u), p = u.prevFromRect, g = u.prevToRect, h = s.rect, d = Lt(u, !0);
        d && (f.top -= d.f, f.left -= d.e), u.toRect = f, u.thisAnimationDuration && Te(p, f) && !Te(c, f) && (h.top - f.top) / (h.left - f.left) === (c.top - f.top) / (c.left - f.left) && (l = Jn(h, p, g, i.options)), Te(f, c) || (u.prevFromRect = c, u.prevToRect = f, l || (l = i.options.animation), i.animate(u, h, f, l)), l && (r = !0, a = Math.max(a, l), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, l), u.thisAnimationDuration = l);
      }), clearTimeout(n), r ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, a) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, i, r, a) {
      if (a) {
        w(t, "transition", ""), w(t, "transform", "");
        var s = Lt(this.el), l = s && s.a, u = s && s.d, c = (i.left - r.left) / (l || 1), f = (i.top - r.top) / (u || 1);
        t.animatingX = !!c, t.animatingY = !!f, w(t, "transform", "translate3d(" + c + "px," + f + "px,0)"), Zn(t), w(t, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), w(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          w(t, "transition", ""), w(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, a);
      }
    }
  };
}
function Zn(e) {
  return e.offsetWidth;
}
function Jn(e, n, o, t) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - o.top, 2) + Math.pow(n.left - o.left, 2)) * t.animation;
}
var Gt = [], Ie = {
  initializeByDefault: !0
}, ne = {
  mount: function(n) {
    for (var o in Ie)
      Ie.hasOwnProperty(o) && !(o in n) && (n[o] = Ie[o]);
    Gt.push(n);
  },
  pluginEvent: function(n, o, t) {
    var i = this;
    this.eventCanceled = !1, t.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = n + "Global";
    Gt.forEach(function(a) {
      !o[a.pluginName] || (o[a.pluginName][r] && o[a.pluginName][r](Nt({
        sortable: o
      }, t)), o.options[a.pluginName] && o[a.pluginName][n] && o[a.pluginName][n](Nt({
        sortable: o
      }, t)));
    });
  },
  initializePlugins: function(n, o, t, i) {
    Gt.forEach(function(s) {
      var l = s.pluginName;
      if (!(!n.options[l] && !s.initializeByDefault)) {
        var u = new s(n, o, n.options);
        u.sortable = n, u.options = n.options, n[l] = u, bt(t, u.defaults);
      }
    });
    for (var r in n.options)
      if (!!n.options.hasOwnProperty(r)) {
        var a = this.modifyOption(n, r, n.options[r]);
        typeof a < "u" && (n.options[r] = a);
      }
  },
  getEventProperties: function(n, o) {
    var t = {};
    return Gt.forEach(function(i) {
      typeof i.eventProperties == "function" && bt(t, i.eventProperties.call(o[i.pluginName], n));
    }), t;
  },
  modifyOption: function(n, o, t) {
    var i;
    return Gt.forEach(function(r) {
      !n[r.pluginName] || r.optionListeners && typeof r.optionListeners[o] == "function" && (i = r.optionListeners[o].call(n[r.pluginName], t));
    }), i;
  }
};
function Xt(e) {
  var n = e.sortable, o = e.rootEl, t = e.name, i = e.targetEl, r = e.cloneEl, a = e.toEl, s = e.fromEl, l = e.oldIndex, u = e.newIndex, c = e.oldDraggableIndex, f = e.newDraggableIndex, p = e.originalEvent, g = e.putSortable, h = e.extraEventProperties;
  if (n = n || o && o[ut], !!n) {
    var d, m = n.options, S = "on" + t.charAt(0).toUpperCase() + t.substr(1);
    window.CustomEvent && !Ct && !ee ? d = new CustomEvent(t, {
      bubbles: !0,
      cancelable: !0
    }) : (d = document.createEvent("Event"), d.initEvent(t, !0, !0)), d.to = a || o, d.from = s || o, d.item = i || o, d.clone = r, d.oldIndex = l, d.newIndex = u, d.oldDraggableIndex = c, d.newDraggableIndex = f, d.originalEvent = p, d.pullMode = g ? g.lastPutMode : void 0;
    var D = Nt({}, h, ne.getEventProperties(t, n));
    for (var O in D)
      d[O] = D[O];
    o && o.dispatchEvent(d), m[S] && m[S].call(n, d);
  }
}
var ft = function(n, o) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = t.evt, r = $n(t, ["evt"]);
  ne.pluginEvent.bind(T)(n, o, Nt({
    dragEl: x,
    parentEl: rt,
    ghostEl: M,
    rootEl: Y,
    nextEl: jt,
    lastDownEl: de,
    cloneEl: Q,
    cloneHidden: At,
    dragStarted: Yt,
    putSortable: at,
    activeSortable: T.active,
    originalEvent: i,
    oldIndex: Ut,
    oldDraggableIndex: Qt,
    newIndex: gt,
    newDraggableIndex: Tt,
    hideGhostForTarget: xn,
    unhideGhostForTarget: Sn,
    cloneNowHidden: function() {
      At = !0;
    },
    cloneNowShown: function() {
      At = !1;
    },
    dispatchSortableEvent: function(s) {
      ct({
        sortable: o,
        name: s,
        originalEvent: i
      });
    }
  }, r));
};
function ct(e) {
  Xt(Nt({
    putSortable: at,
    cloneEl: Q,
    targetEl: x,
    rootEl: Y,
    oldIndex: Ut,
    oldDraggableIndex: Qt,
    newIndex: gt,
    newDraggableIndex: Tt
  }, e));
}
var x, rt, M, Y, jt, de, Q, At, Ut, gt, Qt, Tt, ae, at, Vt = !1, be = !1, ye = [], Mt, yt, Fe, Ne, rn, on, Yt, $t, qt, _t = !1, se = !1, he, lt, Me = [], Ue = !1, xe = [], Ee = typeof document < "u", le = dn, an = ee || Ct ? "cssFloat" : "float", Qn = Ee && !Hn && !dn && "draggable" in document.createElement("div"), mn = function() {
  if (!!Ee) {
    if (Ct)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), bn = function(n, o) {
  var t = w(n), i = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), r = me(n, 0, o), a = me(n, 1, o), s = r && w(r), l = a && w(a), u = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + _(r).width, c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + _(a).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && s.float && s.float !== "none") {
    var f = s.float === "left" ? "left" : "right";
    return a && (l.clear === "both" || l.clear === f) ? "vertical" : "horizontal";
  }
  return r && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || u >= i && t[an] === "none" || a && t[an] === "none" && u + c > i) ? "vertical" : "horizontal";
}, qn = function(n, o, t) {
  var i = t ? n.left : n.top, r = t ? n.right : n.bottom, a = t ? n.width : n.height, s = t ? o.left : o.top, l = t ? o.right : o.bottom, u = t ? o.width : o.height;
  return i === s || r === l || i + a / 2 === s + u / 2;
}, _n = function(n, o) {
  var t;
  return ye.some(function(i) {
    if (!Xe(i)) {
      var r = _(i), a = i[ut].options.emptyInsertThreshold, s = n >= r.left - a && n <= r.right + a, l = o >= r.top - a && o <= r.bottom + a;
      if (a && s && l)
        return t = i;
    }
  }), t;
}, yn = function(n) {
  function o(r, a) {
    return function(s, l, u, c) {
      var f = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (r == null && (a || f))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return o(r(s, l, u, c), a)(s, l, u, c);
      var p = (a ? s : l).options.group.name;
      return r === !0 || typeof r == "string" && r === p || r.join && r.indexOf(p) > -1;
    };
  }
  var t = {}, i = n.group;
  (!i || fe(i) != "object") && (i = {
    name: i
  }), t.name = i.name, t.checkPull = o(i.pull, !0), t.checkPut = o(i.put), t.revertClone = i.revertClone, n.group = t;
}, xn = function() {
  !mn && M && w(M, "display", "none");
}, Sn = function() {
  !mn && M && w(M, "display", "");
};
Ee && document.addEventListener("click", function(e) {
  if (be)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), be = !1, !1;
}, !0);
var Pt = function(n) {
  if (x) {
    n = n.touches ? n.touches[0] : n;
    var o = _n(n.clientX, n.clientY);
    if (o) {
      var t = {};
      for (var i in n)
        n.hasOwnProperty(i) && (t[i] = n[i]);
      t.target = t.rootEl = o, t.preventDefault = void 0, t.stopPropagation = void 0, o[ut]._onDragOver(t);
    }
  }
}, tr = function(n) {
  x && x.parentNode[ut]._isOutsideThisEl(n.target);
};
function T(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = bt({}, n), e[ut] = this;
  var o = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return bn(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, s) {
      a.setData("Text", s.textContent);
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
    supportPointer: T.supportPointer !== !1 && "PointerEvent" in window,
    emptyInsertThreshold: 5
  };
  ne.initializePlugins(this, e, o);
  for (var t in o)
    !(t in n) && (n[t] = o[t]);
  yn(n);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : Qn, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? $(e, "pointerdown", this._onTapStart) : ($(e, "mousedown", this._onTapStart), $(e, "touchstart", this._onTapStart)), this.nativeDraggable && ($(e, "dragover", this), $(e, "dragenter", this)), ye.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), bt(this, kn());
}
T.prototype = {
  constructor: T,
  _isOutsideThisEl: function(n) {
    !this.el.contains(n) && n !== this.el && ($t = null);
  },
  _getDirection: function(n, o) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, n, o, x) : this.options.direction;
  },
  _onTapStart: function(n) {
    if (!!n.cancelable) {
      var o = this, t = this.el, i = this.options, r = i.preventOnFilter, a = n.type, s = n.touches && n.touches[0] || n.pointerType && n.pointerType === "touch" && n, l = (s || n).target, u = n.target.shadowRoot && (n.path && n.path[0] || n.composedPath && n.composedPath()[0]) || l, c = i.filter;
      if (sr(t), !x && !(/mousedown|pointerdown/.test(a) && n.button !== 0 || i.disabled) && !u.isContentEditable && (l = St(l, i.draggable, t, !1), !(l && l.animated) && de !== l)) {
        if (Ut = q(l), Qt = q(l, i.draggable), typeof c == "function") {
          if (c.call(this, n, l, this)) {
            ct({
              sortable: o,
              rootEl: u,
              name: "filter",
              targetEl: l,
              toEl: t,
              fromEl: t
            }), ft("filter", o, {
              evt: n
            }), r && n.cancelable && n.preventDefault();
            return;
          }
        } else if (c && (c = c.split(",").some(function(f) {
          if (f = St(u, f.trim(), t, !1), f)
            return ct({
              sortable: o,
              rootEl: f,
              name: "filter",
              targetEl: l,
              fromEl: t,
              toEl: t
            }), ft("filter", o, {
              evt: n
            }), !0;
        }), c)) {
          r && n.cancelable && n.preventDefault();
          return;
        }
        i.handle && !St(u, i.handle, t, !1) || this._prepareDragStart(n, s, l);
      }
    }
  },
  _prepareDragStart: function(n, o, t) {
    var i = this, r = i.el, a = i.options, s = r.ownerDocument, l;
    if (t && !x && t.parentNode === r) {
      var u = _(t);
      if (Y = r, x = t, rt = x.parentNode, jt = x.nextSibling, de = t, ae = a.group, T.dragged = x, Mt = {
        target: x,
        clientX: (o || n).clientX,
        clientY: (o || n).clientY
      }, rn = Mt.clientX - u.left, on = Mt.clientY - u.top, this._lastX = (o || n).clientX, this._lastY = (o || n).clientY, x.style["will-change"] = "all", l = function() {
        if (ft("delayEnded", i, {
          evt: n
        }), T.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !qe && i.nativeDraggable && (x.draggable = !0), i._triggerDragStart(n, o), ct({
          sortable: i,
          name: "choose",
          originalEvent: n
        }), k(x, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(c) {
        pn(x, c.trim(), je);
      }), $(s, "dragover", Pt), $(s, "mousemove", Pt), $(s, "touchmove", Pt), $(s, "mouseup", i._onDrop), $(s, "touchend", i._onDrop), $(s, "touchcancel", i._onDrop), qe && this.nativeDraggable && (this.options.touchStartThreshold = 4, x.draggable = !0), ft("delayStart", this, {
        evt: n
      }), a.delay && (!a.delayOnTouchOnly || o) && (!this.nativeDraggable || !(ee || Ct))) {
        if (T.eventCanceled) {
          this._onDrop();
          return;
        }
        $(s, "mouseup", i._disableDelayedDrag), $(s, "touchend", i._disableDelayedDrag), $(s, "touchcancel", i._disableDelayedDrag), $(s, "mousemove", i._delayedDragTouchMoveHandler), $(s, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && $(s, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, a.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(n) {
    var o = n.touches ? n.touches[0] : n;
    Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    x && je(x), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var n = this.el.ownerDocument;
    R(n, "mouseup", this._disableDelayedDrag), R(n, "touchend", this._disableDelayedDrag), R(n, "touchcancel", this._disableDelayedDrag), R(n, "mousemove", this._delayedDragTouchMoveHandler), R(n, "touchmove", this._delayedDragTouchMoveHandler), R(n, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(n, o) {
    o = o || n.pointerType == "touch" && n, !this.nativeDraggable || o ? this.options.supportPointer ? $(document, "pointermove", this._onTouchMove) : o ? $(document, "touchmove", this._onTouchMove) : $(document, "mousemove", this._onTouchMove) : ($(x, "dragend", this), $(Y, "dragstart", this._onDragStart));
    try {
      document.selection ? pe(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(n, o) {
    if (Vt = !1, Y && x) {
      ft("dragStarted", this, {
        evt: o
      }), this.nativeDraggable && $(document, "dragover", tr);
      var t = this.options;
      !n && k(x, t.dragClass, !1), k(x, t.ghostClass, !0), T.active = this, n && this._appendGhost(), ct({
        sortable: this,
        name: "start",
        originalEvent: o
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (yt) {
      this._lastX = yt.clientX, this._lastY = yt.clientY, xn();
      for (var n = document.elementFromPoint(yt.clientX, yt.clientY), o = n; n && n.shadowRoot && (n = n.shadowRoot.elementFromPoint(yt.clientX, yt.clientY), n !== o); )
        o = n;
      if (x.parentNode[ut]._isOutsideThisEl(n), o)
        do {
          if (o[ut]) {
            var t = void 0;
            if (t = o[ut]._onDragOver({
              clientX: yt.clientX,
              clientY: yt.clientY,
              target: n,
              rootEl: o
            }), t && !this.options.dragoverBubble)
              break;
          }
          n = o;
        } while (o = o.parentNode);
      Sn();
    }
  },
  _onTouchMove: function(n) {
    if (Mt) {
      var o = this.options, t = o.fallbackTolerance, i = o.fallbackOffset, r = n.touches ? n.touches[0] : n, a = M && Lt(M, !0), s = M && a && a.a, l = M && a && a.d, u = le && lt && en(lt), c = (r.clientX - Mt.clientX + i.x) / (s || 1) + (u ? u[0] - Me[0] : 0) / (s || 1), f = (r.clientY - Mt.clientY + i.y) / (l || 1) + (u ? u[1] - Me[1] : 0) / (l || 1);
      if (!T.active && !Vt) {
        if (t && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < t)
          return;
        this._onDragStart(n, !0);
      }
      if (M) {
        a ? (a.e += c - (Fe || 0), a.f += f - (Ne || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f
        };
        var p = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        w(M, "webkitTransform", p), w(M, "mozTransform", p), w(M, "msTransform", p), w(M, "transform", p), Fe = c, Ne = f, yt = r;
      }
      n.cancelable && n.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!M) {
      var n = this.options.fallbackOnBody ? document.body : Y, o = _(x, !0, le, !0, n), t = this.options;
      if (le) {
        for (lt = n; w(lt, "position") === "static" && w(lt, "transform") === "none" && lt !== document; )
          lt = lt.parentNode;
        lt !== document.body && lt !== document.documentElement ? (lt === document && (lt = wt()), o.top += lt.scrollTop, o.left += lt.scrollLeft) : lt = wt(), Me = en(lt);
      }
      M = x.cloneNode(!0), k(M, t.ghostClass, !1), k(M, t.fallbackClass, !0), k(M, t.dragClass, !0), w(M, "transition", ""), w(M, "transform", ""), w(M, "box-sizing", "border-box"), w(M, "margin", 0), w(M, "top", o.top), w(M, "left", o.left), w(M, "width", o.width), w(M, "height", o.height), w(M, "opacity", "0.8"), w(M, "position", le ? "absolute" : "fixed"), w(M, "zIndex", "100000"), w(M, "pointerEvents", "none"), T.ghost = M, n.appendChild(M), w(M, "transform-origin", rn / parseInt(M.style.width) * 100 + "% " + on / parseInt(M.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(n, o) {
    var t = this, i = n.dataTransfer, r = t.options;
    if (ft("dragStart", this, {
      evt: n
    }), T.eventCanceled) {
      this._onDrop();
      return;
    }
    ft("setupClone", this), T.eventCanceled || (Q = Ye(x), Q.draggable = !1, Q.style["will-change"] = "", this._hideClone(), k(Q, this.options.chosenClass, !1), T.clone = Q), t.cloneId = pe(function() {
      ft("clone", t), !T.eventCanceled && (t.options.removeCloneOnHide || Y.insertBefore(Q, x), t._hideClone(), ct({
        sortable: t,
        name: "clone"
      }));
    }), !o && k(x, r.dragClass, !0), o ? (be = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (R(document, "mouseup", t._onDrop), R(document, "touchend", t._onDrop), R(document, "touchcancel", t._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(t, i, x)), $(document, "drop", t), w(x, "transform", "translateZ(0)")), Vt = !0, t._dragStartId = pe(t._dragStarted.bind(t, o, n)), $(document, "selectstart", t), Yt = !0, Ve && w(document.body, "user-select", "none");
  },
  _onDragOver: function(n) {
    var o = this.el, t = n.target, i, r, a, s = this.options, l = s.group, u = T.active, c = ae === l, f = s.sort, p = at || u, g, h = this, d = !1;
    if (Ue)
      return;
    function m(X, dt) {
      ft(X, h, Nt({
        evt: n,
        isOwner: c,
        axis: g ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: r,
        canSort: f,
        fromSortable: p,
        target: t,
        completed: D,
        onMove: function(it, y) {
          return Pe(Y, o, x, i, it, _(it), n, y);
        },
        changed: O
      }, dt));
    }
    function S() {
      m("dragOverAnimationCapture"), h.captureAnimationState(), h !== p && p.captureAnimationState();
    }
    function D(X) {
      return m("dragOverCompleted", {
        insertion: X
      }), X && (c ? u._hideClone() : u._showClone(h), h !== p && (k(x, at ? at.options.ghostClass : u.options.ghostClass, !1), k(x, s.ghostClass, !0)), at !== h && h !== T.active ? at = h : h === T.active && at && (at = null), p === h && (h._ignoreWhileAnimating = t), h.animateAll(function() {
        m("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== p && (p.animateAll(), p._ignoreWhileAnimating = null)), (t === x && !x.animated || t === o && !t.animated) && ($t = null), !s.dragoverBubble && !n.rootEl && t !== document && (x.parentNode[ut]._isOutsideThisEl(n.target), !X && Pt(n)), !s.dragoverBubble && n.stopPropagation && n.stopPropagation(), d = !0;
    }
    function O() {
      gt = q(x), Tt = q(x, s.draggable), ct({
        sortable: h,
        name: "change",
        toEl: o,
        newIndex: gt,
        newDraggableIndex: Tt,
        originalEvent: n
      });
    }
    if (n.preventDefault !== void 0 && n.cancelable && n.preventDefault(), t = St(t, s.draggable, o, !0), m("dragOver"), T.eventCanceled)
      return d;
    if (x.contains(n.target) || t.animated && t.animatingX && t.animatingY || h._ignoreWhileAnimating === t)
      return D(!1);
    if (be = !1, u && !s.disabled && (c ? f || (a = !Y.contains(x)) : at === this || (this.lastPutMode = ae.checkPull(this, u, x, n)) && l.checkPut(this, u, x, n))) {
      if (g = this._getDirection(n, t) === "vertical", i = _(x), m("dragOverValid"), T.eventCanceled)
        return d;
      if (a)
        return rt = Y, S(), this._hideClone(), m("revert"), T.eventCanceled || (jt ? Y.insertBefore(x, jt) : Y.appendChild(x)), D(!0);
      var C = Xe(o, s.draggable);
      if (!C || rr(n, g, this) && !C.animated) {
        if (C === x)
          return D(!1);
        if (C && o === n.target && (t = C), t && (r = _(t)), Pe(Y, o, x, i, t, r, n, !!t) !== !1)
          return S(), o.appendChild(x), rt = o, O(), D(!0);
      } else if (t.parentNode === o) {
        r = _(t);
        var L = 0, V, U = x.parentNode !== o, I = !qn(x.animated && x.toRect || i, t.animated && t.toRect || r, g), N = g ? "top" : "left", A = tn(t, "top", "top") || tn(x, "top", "top"), B = A ? A.scrollTop : void 0;
        $t !== t && (V = r[N], _t = !1, se = !I && s.invertSwap || U), L = or(n, t, r, g, I ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, se, $t === t);
        var J;
        if (L !== 0) {
          var nt = q(x);
          do
            nt -= L, J = rt.children[nt];
          while (J && (w(J, "display") === "none" || J === M));
        }
        if (L === 0 || J === t)
          return D(!1);
        $t = t, qt = L;
        var tt = t.nextElementSibling, H = !1;
        H = L === 1;
        var z = Pe(Y, o, x, i, t, r, n, H);
        if (z !== !1)
          return (z === 1 || z === -1) && (H = z === 1), Ue = !0, setTimeout(nr, 30), S(), H && !tt ? o.appendChild(x) : t.parentNode.insertBefore(x, H ? tt : t), A && vn(A, 0, B - A.scrollTop), rt = x.parentNode, V !== void 0 && !se && (he = Math.abs(V - _(t)[N])), O(), D(!0);
      }
      if (o.contains(x))
        return D(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    R(document, "mousemove", this._onTouchMove), R(document, "touchmove", this._onTouchMove), R(document, "pointermove", this._onTouchMove), R(document, "dragover", Pt), R(document, "mousemove", Pt), R(document, "touchmove", Pt);
  },
  _offUpEvents: function() {
    var n = this.el.ownerDocument;
    R(n, "mouseup", this._onDrop), R(n, "touchend", this._onDrop), R(n, "pointerup", this._onDrop), R(n, "touchcancel", this._onDrop), R(document, "selectstart", this);
  },
  _onDrop: function(n) {
    var o = this.el, t = this.options;
    if (gt = q(x), Tt = q(x, t.draggable), ft("drop", this, {
      evt: n
    }), rt = x && x.parentNode, gt = q(x), Tt = q(x, t.draggable), T.eventCanceled) {
      this._nulling();
      return;
    }
    Vt = !1, se = !1, _t = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ze(this.cloneId), ze(this._dragStartId), this.nativeDraggable && (R(document, "drop", this), R(o, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ve && w(document.body, "user-select", ""), w(x, "transform", ""), n && (Yt && (n.cancelable && n.preventDefault(), !t.dropBubble && n.stopPropagation()), M && M.parentNode && M.parentNode.removeChild(M), (Y === rt || at && at.lastPutMode !== "clone") && Q && Q.parentNode && Q.parentNode.removeChild(Q), x && (this.nativeDraggable && R(x, "dragend", this), je(x), x.style["will-change"] = "", Yt && !Vt && k(x, at ? at.options.ghostClass : this.options.ghostClass, !1), k(x, this.options.chosenClass, !1), ct({
      sortable: this,
      name: "unchoose",
      toEl: rt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: n
    }), Y !== rt ? (gt >= 0 && (ct({
      rootEl: rt,
      name: "add",
      toEl: rt,
      fromEl: Y,
      originalEvent: n
    }), ct({
      sortable: this,
      name: "remove",
      toEl: rt,
      originalEvent: n
    }), ct({
      rootEl: rt,
      name: "sort",
      toEl: rt,
      fromEl: Y,
      originalEvent: n
    }), ct({
      sortable: this,
      name: "sort",
      toEl: rt,
      originalEvent: n
    })), at && at.save()) : gt !== Ut && gt >= 0 && (ct({
      sortable: this,
      name: "update",
      toEl: rt,
      originalEvent: n
    }), ct({
      sortable: this,
      name: "sort",
      toEl: rt,
      originalEvent: n
    })), T.active && ((gt == null || gt === -1) && (gt = Ut, Tt = Qt), ct({
      sortable: this,
      name: "end",
      toEl: rt,
      originalEvent: n
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ft("nulling", this), Y = x = rt = M = jt = Q = de = At = Mt = yt = Yt = gt = Tt = Ut = Qt = $t = qt = at = ae = T.dragged = T.ghost = T.clone = T.active = null, xe.forEach(function(n) {
      n.checked = !0;
    }), xe.length = Fe = Ne = 0;
  },
  handleEvent: function(n) {
    switch (n.type) {
      case "drop":
      case "dragend":
        this._onDrop(n);
        break;
      case "dragenter":
      case "dragover":
        x && (this._onDragOver(n), er(n));
        break;
      case "selectstart":
        n.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var n = [], o, t = this.el.children, i = 0, r = t.length, a = this.options; i < r; i++)
      o = t[i], St(o, a.draggable, this.el, !1) && n.push(o.getAttribute(a.dataIdAttr) || ar(o));
    return n;
  },
  sort: function(n) {
    var o = {}, t = this.el;
    this.toArray().forEach(function(i, r) {
      var a = t.children[r];
      St(a, this.options.draggable, t, !1) && (o[i] = a);
    }, this), n.forEach(function(i) {
      o[i] && (t.removeChild(o[i]), t.appendChild(o[i]));
    });
  },
  save: function() {
    var n = this.options.store;
    n && n.set && n.set(this);
  },
  closest: function(n, o) {
    return St(n, o || this.options.draggable, this.el, !1);
  },
  option: function(n, o) {
    var t = this.options;
    if (o === void 0)
      return t[n];
    var i = ne.modifyOption(this, n, o);
    typeof i < "u" ? t[n] = i : t[n] = o, n === "group" && yn(t);
  },
  destroy: function() {
    ft("destroy", this);
    var n = this.el;
    n[ut] = null, R(n, "mousedown", this._onTapStart), R(n, "touchstart", this._onTapStart), R(n, "pointerdown", this._onTapStart), this.nativeDraggable && (R(n, "dragover", this), R(n, "dragenter", this)), Array.prototype.forEach.call(n.querySelectorAll("[draggable]"), function(o) {
      o.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ye.splice(ye.indexOf(this.el), 1), this.el = n = null;
  },
  _hideClone: function() {
    if (!At) {
      if (ft("hideClone", this), T.eventCanceled)
        return;
      w(Q, "display", "none"), this.options.removeCloneOnHide && Q.parentNode && Q.parentNode.removeChild(Q), At = !0;
    }
  },
  _showClone: function(n) {
    if (n.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (At) {
      if (ft("showClone", this), T.eventCanceled)
        return;
      Y.contains(x) && !this.options.group.revertClone ? Y.insertBefore(Q, x) : jt ? Y.insertBefore(Q, jt) : Y.appendChild(Q), this.options.group.revertClone && this.animate(x, Q), w(Q, "display", ""), At = !1;
    }
  }
};
function er(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Pe(e, n, o, t, i, r, a, s) {
  var l, u = e[ut], c = u.options.onMove, f;
  return window.CustomEvent && !Ct && !ee ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = n, l.from = e, l.dragged = o, l.draggedRect = t, l.related = i || n, l.relatedRect = r || _(n), l.willInsertAfter = s, l.originalEvent = a, e.dispatchEvent(l), c && (f = c.call(u, l, a)), f;
}
function je(e) {
  e.draggable = !1;
}
function nr() {
  Ue = !1;
}
function rr(e, n, o) {
  var t = _(Xe(o.el, o.options.draggable)), i = 10;
  return n ? e.clientX > t.right + i || e.clientX <= t.right && e.clientY > t.bottom && e.clientX >= t.left : e.clientX > t.right && e.clientY > t.top || e.clientX <= t.right && e.clientY > t.bottom + i;
}
function or(e, n, o, t, i, r, a, s) {
  var l = t ? e.clientY : e.clientX, u = t ? o.height : o.width, c = t ? o.top : o.left, f = t ? o.bottom : o.right, p = !1;
  if (!a) {
    if (s && he < u * i) {
      if (!_t && (qt === 1 ? l > c + u * r / 2 : l < f - u * r / 2) && (_t = !0), _t)
        p = !0;
      else if (qt === 1 ? l < c + he : l > f - he)
        return -qt;
    } else if (l > c + u * (1 - i) / 2 && l < f - u * (1 - i) / 2)
      return ir(n);
  }
  return p = p || a, p && (l < c + u * r / 2 || l > f - u * r / 2) ? l > c + u / 2 ? 1 : -1 : 0;
}
function ir(e) {
  return q(x) < q(e) ? 1 : -1;
}
function ar(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, o = n.length, t = 0; o--; )
    t += n.charCodeAt(o);
  return t.toString(36);
}
function sr(e) {
  xe.length = 0;
  for (var n = e.getElementsByTagName("input"), o = n.length; o--; ) {
    var t = n[o];
    t.checked && xe.push(t);
  }
}
function pe(e) {
  return setTimeout(e, 0);
}
function ze(e) {
  return clearTimeout(e);
}
Ee && $(document, "touchmove", function(e) {
  (T.active || Vt) && e.cancelable && e.preventDefault();
});
T.utils = {
  on: $,
  off: R,
  css: w,
  find: pn,
  is: function(n, o) {
    return !!St(n, o, n, !1);
  },
  extend: Xn,
  throttle: gn,
  closest: St,
  toggleClass: k,
  clone: Ye,
  index: q,
  nextTick: pe,
  cancelNextTick: ze,
  detectDirection: bn,
  getChild: me
};
T.get = function(e) {
  return e[ut];
};
T.mount = function() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(t) {
    if (!t.prototype || !t.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
    t.utils && (T.utils = Nt({}, T.utils, t.utils)), ne.mount(t);
  });
};
T.create = function(e, n) {
  return new T(e, n);
};
T.version = Gn;
var ot = [], kt, Ge, He = !1, Re, Le, Se, Zt;
function lr() {
  function e() {
    this.defaults = {
      scroll: !0,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  }
  return e.prototype = {
    dragStarted: function(o) {
      var t = o.originalEvent;
      this.sortable.nativeDraggable ? $(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? $(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? $(document, "touchmove", this._handleFallbackAutoScroll) : $(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(o) {
      var t = o.originalEvent;
      !this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
    },
    drop: function() {
      this.sortable.nativeDraggable ? R(document, "dragover", this._handleAutoScroll) : (R(document, "pointermove", this._handleFallbackAutoScroll), R(document, "touchmove", this._handleFallbackAutoScroll), R(document, "mousemove", this._handleFallbackAutoScroll)), sn(), ge(), Yn();
    },
    nulling: function() {
      Se = Ge = kt = He = Zt = Re = Le = null, ot.length = 0;
    },
    _handleFallbackAutoScroll: function(o) {
      this._handleAutoScroll(o, !0);
    },
    _handleAutoScroll: function(o, t) {
      var i = this, r = (o.touches ? o.touches[0] : o).clientX, a = (o.touches ? o.touches[0] : o).clientY, s = document.elementFromPoint(r, a);
      if (Se = o, t || ee || Ct || Ve) {
        $e(o, this.options, s, t);
        var l = It(s, !0);
        He && (!Zt || r !== Re || a !== Le) && (Zt && sn(), Zt = setInterval(function() {
          var u = It(document.elementFromPoint(r, a), !0);
          u !== l && (l = u, ge()), $e(o, i.options, u, t);
        }, 10), Re = r, Le = a);
      } else {
        if (!this.options.bubbleScroll || It(s, !0) === wt()) {
          ge();
          return;
        }
        $e(o, this.options, It(s, !1), !1);
      }
    }
  }, bt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ge() {
  ot.forEach(function(e) {
    clearInterval(e.pid);
  }), ot = [];
}
function sn() {
  clearInterval(Zt);
}
var $e = gn(function(e, n, o, t) {
  if (!!n.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, a = n.scrollSensitivity, s = n.scrollSpeed, l = wt(), u = !1, c;
    Ge !== o && (Ge = o, ge(), kt = n.scroll, c = n.scrollFn, kt === !0 && (kt = It(o, !0)));
    var f = 0, p = kt;
    do {
      var g = p, h = _(g), d = h.top, m = h.bottom, S = h.left, D = h.right, O = h.width, C = h.height, L = void 0, V = void 0, U = g.scrollWidth, I = g.scrollHeight, N = w(g), A = g.scrollLeft, B = g.scrollTop;
      g === l ? (L = O < U && (N.overflowX === "auto" || N.overflowX === "scroll" || N.overflowX === "visible"), V = C < I && (N.overflowY === "auto" || N.overflowY === "scroll" || N.overflowY === "visible")) : (L = O < U && (N.overflowX === "auto" || N.overflowX === "scroll"), V = C < I && (N.overflowY === "auto" || N.overflowY === "scroll"));
      var J = L && (Math.abs(D - i) <= a && A + O < U) - (Math.abs(S - i) <= a && !!A), nt = V && (Math.abs(m - r) <= a && B + C < I) - (Math.abs(d - r) <= a && !!B);
      if (!ot[f])
        for (var tt = 0; tt <= f; tt++)
          ot[tt] || (ot[tt] = {});
      (ot[f].vx != J || ot[f].vy != nt || ot[f].el !== g) && (ot[f].el = g, ot[f].vx = J, ot[f].vy = nt, clearInterval(ot[f].pid), (J != 0 || nt != 0) && (u = !0, ot[f].pid = setInterval(function() {
        t && this.layer === 0 && T.active._onTouchMove(Se);
        var H = ot[this.layer].vy ? ot[this.layer].vy * s : 0, z = ot[this.layer].vx ? ot[this.layer].vx * s : 0;
        typeof c == "function" && c.call(T.dragged.parentNode[ut], z, H, e, Se, ot[this.layer].el) !== "continue" || vn(ot[this.layer].el, z, H);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (n.bubbleScroll && p !== l && (p = It(p, !1)));
    He = u;
  }
}, 30), On = function(n) {
  var o = n.originalEvent, t = n.putSortable, i = n.dragEl, r = n.activeSortable, a = n.dispatchSortableEvent, s = n.hideGhostForTarget, l = n.unhideGhostForTarget;
  if (!!o) {
    var u = t || r;
    s();
    var c = o.changedTouches && o.changedTouches.length ? o.changedTouches[0] : o, f = document.elementFromPoint(c.clientX, c.clientY);
    l(), u && !u.el.contains(f) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: t
    }));
  }
};
function ke() {
}
ke.prototype = {
  startIndex: null,
  dragStart: function(n) {
    var o = n.oldDraggableIndex;
    this.startIndex = o;
  },
  onSpill: function(n) {
    var o = n.dragEl, t = n.putSortable;
    this.sortable.captureAnimationState(), t && t.captureAnimationState();
    var i = me(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(o, i) : this.sortable.el.appendChild(o), this.sortable.animateAll(), t && t.animateAll();
  },
  drop: On
};
bt(ke, {
  pluginName: "revertOnSpill"
});
function Ze() {
}
Ze.prototype = {
  onSpill: function(n) {
    var o = n.dragEl, t = n.putSortable, i = t || this.sortable;
    i.captureAnimationState(), o.parentNode && o.parentNode.removeChild(o), i.animateAll();
  },
  drop: On
};
bt(Ze, {
  pluginName: "removeOnSpill"
});
var mt;
function ur() {
  function e() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return e.prototype = {
    dragStart: function(o) {
      var t = o.dragEl;
      mt = t;
    },
    dragOverValid: function(o) {
      var t = o.completed, i = o.target, r = o.onMove, a = o.activeSortable, s = o.changed, l = o.cancel;
      if (!!a.options.swap) {
        var u = this.sortable.el, c = this.options;
        if (i && i !== u) {
          var f = mt;
          r(i) !== !1 ? (k(i, c.swapClass, !0), mt = i) : mt = null, f && f !== mt && k(f, c.swapClass, !1);
        }
        s(), t(!0), l();
      }
    },
    drop: function(o) {
      var t = o.activeSortable, i = o.putSortable, r = o.dragEl, a = i || this.sortable, s = this.options;
      mt && k(mt, s.swapClass, !1), mt && (s.swap || i && i.options.swap) && r !== mt && (a.captureAnimationState(), a !== t && t.captureAnimationState(), cr(r, mt), a.animateAll(), a !== t && t.animateAll());
    },
    nulling: function() {
      mt = null;
    }
  }, bt(e, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: mt
      };
    }
  });
}
function cr(e, n) {
  var o = e.parentNode, t = n.parentNode, i, r;
  !o || !t || o.isEqualNode(n) || t.isEqualNode(e) || (i = q(e), r = q(n), o.isEqualNode(t) && i < r && r++, o.insertBefore(n, o.children[i]), t.insertBefore(e, t.children[r]));
}
var F = [], pt = [], Ht, xt, Wt = !1, ht = !1, Bt = !1, W, Kt, ue;
function fr() {
  function e(n) {
    for (var o in this)
      o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
    n.options.supportPointer ? $(document, "pointerup", this._deselectMultiDrag) : ($(document, "mouseup", this._deselectMultiDrag), $(document, "touchend", this._deselectMultiDrag)), $(document, "keydown", this._checkKeyDown), $(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(i, r) {
        var a = "";
        F.length && xt === n ? F.forEach(function(s, l) {
          a += (l ? ", " : "") + s.textContent;
        }) : a = r.textContent, i.setData("Text", a);
      }
    };
  }
  return e.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(o) {
      var t = o.dragEl;
      W = t;
    },
    delayEnded: function() {
      this.isMultiDrag = ~F.indexOf(W);
    },
    setupClone: function(o) {
      var t = o.sortable, i = o.cancel;
      if (!!this.isMultiDrag) {
        for (var r = 0; r < F.length; r++)
          pt.push(Ye(F[r])), pt[r].sortableIndex = F[r].sortableIndex, pt[r].draggable = !1, pt[r].style["will-change"] = "", k(pt[r], this.options.selectedClass, !1), F[r] === W && k(pt[r], this.options.chosenClass, !1);
        t._hideClone(), i();
      }
    },
    clone: function(o) {
      var t = o.sortable, i = o.rootEl, r = o.dispatchSortableEvent, a = o.cancel;
      !this.isMultiDrag || this.options.removeCloneOnHide || F.length && xt === t && (ln(!0, i), r("clone"), a());
    },
    showClone: function(o) {
      var t = o.cloneNowShown, i = o.rootEl, r = o.cancel;
      !this.isMultiDrag || (ln(!1, i), pt.forEach(function(a) {
        w(a, "display", "");
      }), t(), ue = !1, r());
    },
    hideClone: function(o) {
      var t = this;
      o.sortable;
      var i = o.cloneNowHidden, r = o.cancel;
      !this.isMultiDrag || (pt.forEach(function(a) {
        w(a, "display", "none"), t.options.removeCloneOnHide && a.parentNode && a.parentNode.removeChild(a);
      }), i(), ue = !0, r());
    },
    dragStartGlobal: function(o) {
      o.sortable, !this.isMultiDrag && xt && xt.multiDrag._deselectMultiDrag(), F.forEach(function(t) {
        t.sortableIndex = q(t);
      }), F = F.sort(function(t, i) {
        return t.sortableIndex - i.sortableIndex;
      }), Bt = !0;
    },
    dragStarted: function(o) {
      var t = this, i = o.sortable;
      if (!!this.isMultiDrag) {
        if (this.options.sort && (i.captureAnimationState(), this.options.animation)) {
          F.forEach(function(a) {
            a !== W && w(a, "position", "absolute");
          });
          var r = _(W, !1, !0, !0);
          F.forEach(function(a) {
            a !== W && nn(a, r);
          }), ht = !0, Wt = !0;
        }
        i.animateAll(function() {
          ht = !1, Wt = !1, t.options.animation && F.forEach(function(a) {
            Ae(a);
          }), t.options.sort && ce();
        });
      }
    },
    dragOver: function(o) {
      var t = o.target, i = o.completed, r = o.cancel;
      ht && ~F.indexOf(t) && (i(!1), r());
    },
    revert: function(o) {
      var t = o.fromSortable, i = o.rootEl, r = o.sortable, a = o.dragRect;
      F.length > 1 && (F.forEach(function(s) {
        r.addAnimationState({
          target: s,
          rect: ht ? _(s) : a
        }), Ae(s), s.fromRect = a, t.removeAnimationState(s);
      }), ht = !1, dr(!this.options.removeCloneOnHide, i));
    },
    dragOverCompleted: function(o) {
      var t = o.sortable, i = o.isOwner, r = o.insertion, a = o.activeSortable, s = o.parentEl, l = o.putSortable, u = this.options;
      if (r) {
        if (i && a._hideClone(), Wt = !1, u.animation && F.length > 1 && (ht || !i && !a.options.sort && !l)) {
          var c = _(W, !1, !0, !0);
          F.forEach(function(p) {
            p !== W && (nn(p, c), s.appendChild(p));
          }), ht = !0;
        }
        if (!i)
          if (ht || ce(), F.length > 1) {
            var f = ue;
            a._showClone(t), a.options.animation && !ue && f && pt.forEach(function(p) {
              a.addAnimationState({
                target: p,
                rect: Kt
              }), p.fromRect = Kt, p.thisAnimationDuration = null;
            });
          } else
            a._showClone(t);
      }
    },
    dragOverAnimationCapture: function(o) {
      var t = o.dragRect, i = o.isOwner, r = o.activeSortable;
      if (F.forEach(function(s) {
        s.thisAnimationDuration = null;
      }), r.options.animation && !i && r.multiDrag.isMultiDrag) {
        Kt = bt({}, t);
        var a = Lt(W, !0);
        Kt.top -= a.f, Kt.left -= a.e;
      }
    },
    dragOverAnimationComplete: function() {
      ht && (ht = !1, ce());
    },
    drop: function(o) {
      var t = o.originalEvent, i = o.rootEl, r = o.parentEl, a = o.sortable, s = o.dispatchSortableEvent, l = o.oldIndex, u = o.putSortable, c = u || this.sortable;
      if (!!t) {
        var f = this.options, p = r.children;
        if (!Bt)
          if (f.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), k(W, f.selectedClass, !~F.indexOf(W)), ~F.indexOf(W))
            F.splice(F.indexOf(W), 1), Ht = null, Xt({
              sortable: a,
              rootEl: i,
              name: "deselect",
              targetEl: W,
              originalEvt: t
            });
          else {
            if (F.push(W), Xt({
              sortable: a,
              rootEl: i,
              name: "select",
              targetEl: W,
              originalEvt: t
            }), t.shiftKey && Ht && a.el.contains(Ht)) {
              var g = q(Ht), h = q(W);
              if (~g && ~h && g !== h) {
                var d, m;
                for (h > g ? (m = g, d = h) : (m = h, d = g + 1); m < d; m++)
                  ~F.indexOf(p[m]) || (k(p[m], f.selectedClass, !0), F.push(p[m]), Xt({
                    sortable: a,
                    rootEl: i,
                    name: "select",
                    targetEl: p[m],
                    originalEvt: t
                  }));
              }
            } else
              Ht = W;
            xt = c;
          }
        if (Bt && this.isMultiDrag) {
          if ((r[ut].options.sort || r !== i) && F.length > 1) {
            var S = _(W), D = q(W, ":not(." + this.options.selectedClass + ")");
            if (!Wt && f.animation && (W.thisAnimationDuration = null), c.captureAnimationState(), !Wt && (f.animation && (W.fromRect = S, F.forEach(function(C) {
              if (C.thisAnimationDuration = null, C !== W) {
                var L = ht ? _(C) : S;
                C.fromRect = L, c.addAnimationState({
                  target: C,
                  rect: L
                });
              }
            })), ce(), F.forEach(function(C) {
              p[D] ? r.insertBefore(C, p[D]) : r.appendChild(C), D++;
            }), l === q(W))) {
              var O = !1;
              F.forEach(function(C) {
                if (C.sortableIndex !== q(C)) {
                  O = !0;
                  return;
                }
              }), O && s("update");
            }
            F.forEach(function(C) {
              Ae(C);
            }), c.animateAll();
          }
          xt = c;
        }
        (i === r || u && u.lastPutMode !== "clone") && pt.forEach(function(C) {
          C.parentNode && C.parentNode.removeChild(C);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = Bt = !1, pt.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), R(document, "pointerup", this._deselectMultiDrag), R(document, "mouseup", this._deselectMultiDrag), R(document, "touchend", this._deselectMultiDrag), R(document, "keydown", this._checkKeyDown), R(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(o) {
      if (!(typeof Bt < "u" && Bt) && xt === this.sortable && !(o && St(o.target, this.options.draggable, this.sortable.el, !1)) && !(o && o.button !== 0))
        for (; F.length; ) {
          var t = F[0];
          k(t, this.options.selectedClass, !1), F.shift(), Xt({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: t,
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
  }, bt(e, {
    pluginName: "multiDrag",
    utils: {
      select: function(o) {
        var t = o.parentNode[ut];
        !t || !t.options.multiDrag || ~F.indexOf(o) || (xt && xt !== t && (xt.multiDrag._deselectMultiDrag(), xt = t), k(o, t.options.selectedClass, !0), F.push(o));
      },
      deselect: function(o) {
        var t = o.parentNode[ut], i = F.indexOf(o);
        !t || !t.options.multiDrag || !~i || (k(o, t.options.selectedClass, !1), F.splice(i, 1));
      }
    },
    eventProperties: function() {
      var o = this, t = [], i = [];
      return F.forEach(function(r) {
        t.push({
          multiDragElement: r,
          index: r.sortableIndex
        });
        var a;
        ht && r !== W ? a = -1 : ht ? a = q(r, ":not(." + o.options.selectedClass + ")") : a = q(r), i.push({
          multiDragElement: r,
          index: a
        });
      }), {
        items: Bn(F),
        clones: [].concat(pt),
        oldIndicies: t,
        newIndicies: i
      };
    },
    optionListeners: {
      multiDragKey: function(o) {
        return o = o.toLowerCase(), o === "ctrl" ? o = "Control" : o.length > 1 && (o = o.charAt(0).toUpperCase() + o.substr(1)), o;
      }
    }
  });
}
function dr(e, n) {
  F.forEach(function(o, t) {
    var i = n.children[o.sortableIndex + (e ? Number(t) : 0)];
    i ? n.insertBefore(o, i) : n.appendChild(o);
  });
}
function ln(e, n) {
  pt.forEach(function(o, t) {
    var i = n.children[o.sortableIndex + (e ? Number(t) : 0)];
    i ? n.insertBefore(o, i) : n.appendChild(o);
  });
}
function ce() {
  F.forEach(function(e) {
    e !== W && e.parentNode && e.parentNode.removeChild(e);
  });
}
T.mount(new lr());
T.mount(Ze, ke);
const hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T,
  MultiDrag: fr,
  Sortable: T,
  Swap: ur
}, Symbol.toStringTag, { value: "Module" })), pr = /* @__PURE__ */ jn(hr);
(function(e, n) {
  (function(t, i) {
    e.exports = i(pr);
  })(typeof self < "u" ? self : Mn, function(o) {
    return function(t) {
      var i = {};
      function r(a) {
        if (i[a])
          return i[a].exports;
        var s = i[a] = {
          i: a,
          l: !1,
          exports: {}
        };
        return t[a].call(s.exports, s, s.exports, r), s.l = !0, s.exports;
      }
      return r.m = t, r.c = i, r.d = function(a, s, l) {
        r.o(a, s) || Object.defineProperty(a, s, { enumerable: !0, get: l });
      }, r.r = function(a) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
      }, r.t = function(a, s) {
        if (s & 1 && (a = r(a)), s & 8 || s & 4 && typeof a == "object" && a && a.__esModule)
          return a;
        var l = /* @__PURE__ */ Object.create(null);
        if (r.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: a }), s & 2 && typeof a != "string")
          for (var u in a)
            r.d(l, u, function(c) {
              return a[c];
            }.bind(null, u));
        return l;
      }, r.n = function(a) {
        var s = a && a.__esModule ? function() {
          return a.default;
        } : function() {
          return a;
        };
        return r.d(s, "a", s), s;
      }, r.o = function(a, s) {
        return Object.prototype.hasOwnProperty.call(a, s);
      }, r.p = "", r(r.s = "fb15");
    }({
      "01f9": function(t, i, r) {
        var a = r("2d00"), s = r("5ca1"), l = r("2aba"), u = r("32e9"), c = r("84f2"), f = r("41a0"), p = r("7f20"), g = r("38fd"), h = r("2b4c")("iterator"), d = !([].keys && "next" in [].keys()), m = "@@iterator", S = "keys", D = "values", O = function() {
          return this;
        };
        t.exports = function(C, L, V, U, I, N, A) {
          f(V, L, U);
          var B = function(b) {
            if (!d && b in H)
              return H[b];
            switch (b) {
              case S:
                return function() {
                  return new V(this, b);
                };
              case D:
                return function() {
                  return new V(this, b);
                };
            }
            return function() {
              return new V(this, b);
            };
          }, J = L + " Iterator", nt = I == D, tt = !1, H = C.prototype, z = H[h] || H[m] || I && H[I], X = z || B(I), dt = I ? nt ? B("entries") : X : void 0, st = L == "Array" && H.entries || z, it, y, v;
          if (st && (v = g(st.call(new C())), v !== Object.prototype && v.next && (p(v, J, !0), !a && typeof v[h] != "function" && u(v, h, O))), nt && z && z.name !== D && (tt = !0, X = function() {
            return z.call(this);
          }), (!a || A) && (d || tt || !H[h]) && u(H, h, X), c[L] = X, c[J] = O, I)
            if (it = {
              values: nt ? X : B(D),
              keys: N ? X : B(S),
              entries: dt
            }, A)
              for (y in it)
                y in H || l(H, y, it[y]);
            else
              s(s.P + s.F * (d || tt), L, it);
          return it;
        };
      },
      "02f4": function(t, i, r) {
        var a = r("4588"), s = r("be13");
        t.exports = function(l) {
          return function(u, c) {
            var f = String(s(u)), p = a(c), g = f.length, h, d;
            return p < 0 || p >= g ? l ? "" : void 0 : (h = f.charCodeAt(p), h < 55296 || h > 56319 || p + 1 === g || (d = f.charCodeAt(p + 1)) < 56320 || d > 57343 ? l ? f.charAt(p) : h : l ? f.slice(p, p + 2) : (h - 55296 << 10) + (d - 56320) + 65536);
          };
        };
      },
      "0390": function(t, i, r) {
        var a = r("02f4")(!0);
        t.exports = function(s, l, u) {
          return l + (u ? a(s, l).length : 1);
        };
      },
      "0bfb": function(t, i, r) {
        var a = r("cb7c");
        t.exports = function() {
          var s = a(this), l = "";
          return s.global && (l += "g"), s.ignoreCase && (l += "i"), s.multiline && (l += "m"), s.unicode && (l += "u"), s.sticky && (l += "y"), l;
        };
      },
      "0d58": function(t, i, r) {
        var a = r("ce10"), s = r("e11e");
        t.exports = Object.keys || function(u) {
          return a(u, s);
        };
      },
      1495: function(t, i, r) {
        var a = r("86cc"), s = r("cb7c"), l = r("0d58");
        t.exports = r("9e1e") ? Object.defineProperties : function(c, f) {
          s(c);
          for (var p = l(f), g = p.length, h = 0, d; g > h; )
            a.f(c, d = p[h++], f[d]);
          return c;
        };
      },
      "214f": function(t, i, r) {
        r("b0c5");
        var a = r("2aba"), s = r("32e9"), l = r("79e5"), u = r("be13"), c = r("2b4c"), f = r("520a"), p = c("species"), g = !l(function() {
          var d = /./;
          return d.exec = function() {
            var m = [];
            return m.groups = { a: "7" }, m;
          }, "".replace(d, "$<a>") !== "7";
        }), h = function() {
          var d = /(?:)/, m = d.exec;
          d.exec = function() {
            return m.apply(this, arguments);
          };
          var S = "ab".split(d);
          return S.length === 2 && S[0] === "a" && S[1] === "b";
        }();
        t.exports = function(d, m, S) {
          var D = c(d), O = !l(function() {
            var N = {};
            return N[D] = function() {
              return 7;
            }, ""[d](N) != 7;
          }), C = O ? !l(function() {
            var N = !1, A = /a/;
            return A.exec = function() {
              return N = !0, null;
            }, d === "split" && (A.constructor = {}, A.constructor[p] = function() {
              return A;
            }), A[D](""), !N;
          }) : void 0;
          if (!O || !C || d === "replace" && !g || d === "split" && !h) {
            var L = /./[D], V = S(
              u,
              D,
              ""[d],
              function(A, B, J, nt, tt) {
                return B.exec === f ? O && !tt ? { done: !0, value: L.call(B, J, nt) } : { done: !0, value: A.call(J, B, nt) } : { done: !1 };
              }
            ), U = V[0], I = V[1];
            a(String.prototype, d, U), s(
              RegExp.prototype,
              D,
              m == 2 ? function(N, A) {
                return I.call(N, this, A);
              } : function(N) {
                return I.call(N, this);
              }
            );
          }
        };
      },
      "230e": function(t, i, r) {
        var a = r("d3f4"), s = r("7726").document, l = a(s) && a(s.createElement);
        t.exports = function(u) {
          return l ? s.createElement(u) : {};
        };
      },
      "23c6": function(t, i, r) {
        var a = r("2d95"), s = r("2b4c")("toStringTag"), l = a(function() {
          return arguments;
        }()) == "Arguments", u = function(c, f) {
          try {
            return c[f];
          } catch {
          }
        };
        t.exports = function(c) {
          var f, p, g;
          return c === void 0 ? "Undefined" : c === null ? "Null" : typeof (p = u(f = Object(c), s)) == "string" ? p : l ? a(f) : (g = a(f)) == "Object" && typeof f.callee == "function" ? "Arguments" : g;
        };
      },
      2621: function(t, i) {
        i.f = Object.getOwnPropertySymbols;
      },
      "2aba": function(t, i, r) {
        var a = r("7726"), s = r("32e9"), l = r("69a8"), u = r("ca5a")("src"), c = r("fa5b"), f = "toString", p = ("" + c).split(f);
        r("8378").inspectSource = function(g) {
          return c.call(g);
        }, (t.exports = function(g, h, d, m) {
          var S = typeof d == "function";
          S && (l(d, "name") || s(d, "name", h)), g[h] !== d && (S && (l(d, u) || s(d, u, g[h] ? "" + g[h] : p.join(String(h)))), g === a ? g[h] = d : m ? g[h] ? g[h] = d : s(g, h, d) : (delete g[h], s(g, h, d)));
        })(Function.prototype, f, function() {
          return typeof this == "function" && this[u] || c.call(this);
        });
      },
      "2aeb": function(t, i, r) {
        var a = r("cb7c"), s = r("1495"), l = r("e11e"), u = r("613b")("IE_PROTO"), c = function() {
        }, f = "prototype", p = function() {
          var g = r("230e")("iframe"), h = l.length, d = "<", m = ">", S;
          for (g.style.display = "none", r("fab2").appendChild(g), g.src = "javascript:", S = g.contentWindow.document, S.open(), S.write(d + "script" + m + "document.F=Object" + d + "/script" + m), S.close(), p = S.F; h--; )
            delete p[f][l[h]];
          return p();
        };
        t.exports = Object.create || function(h, d) {
          var m;
          return h !== null ? (c[f] = a(h), m = new c(), c[f] = null, m[u] = h) : m = p(), d === void 0 ? m : s(m, d);
        };
      },
      "2b4c": function(t, i, r) {
        var a = r("5537")("wks"), s = r("ca5a"), l = r("7726").Symbol, u = typeof l == "function", c = t.exports = function(f) {
          return a[f] || (a[f] = u && l[f] || (u ? l : s)("Symbol." + f));
        };
        c.store = a;
      },
      "2d00": function(t, i) {
        t.exports = !1;
      },
      "2d95": function(t, i) {
        var r = {}.toString;
        t.exports = function(a) {
          return r.call(a).slice(8, -1);
        };
      },
      "2fdb": function(t, i, r) {
        var a = r("5ca1"), s = r("d2c8"), l = "includes";
        a(a.P + a.F * r("5147")(l), "String", {
          includes: function(c) {
            return !!~s(this, c, l).indexOf(c, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "32e9": function(t, i, r) {
        var a = r("86cc"), s = r("4630");
        t.exports = r("9e1e") ? function(l, u, c) {
          return a.f(l, u, s(1, c));
        } : function(l, u, c) {
          return l[u] = c, l;
        };
      },
      "38fd": function(t, i, r) {
        var a = r("69a8"), s = r("4bf8"), l = r("613b")("IE_PROTO"), u = Object.prototype;
        t.exports = Object.getPrototypeOf || function(c) {
          return c = s(c), a(c, l) ? c[l] : typeof c.constructor == "function" && c instanceof c.constructor ? c.constructor.prototype : c instanceof Object ? u : null;
        };
      },
      "41a0": function(t, i, r) {
        var a = r("2aeb"), s = r("4630"), l = r("7f20"), u = {};
        r("32e9")(u, r("2b4c")("iterator"), function() {
          return this;
        }), t.exports = function(c, f, p) {
          c.prototype = a(u, { next: s(1, p) }), l(c, f + " Iterator");
        };
      },
      "456d": function(t, i, r) {
        var a = r("4bf8"), s = r("0d58");
        r("5eda")("keys", function() {
          return function(u) {
            return s(a(u));
          };
        });
      },
      4588: function(t, i) {
        var r = Math.ceil, a = Math.floor;
        t.exports = function(s) {
          return isNaN(s = +s) ? 0 : (s > 0 ? a : r)(s);
        };
      },
      4630: function(t, i) {
        t.exports = function(r, a) {
          return {
            enumerable: !(r & 1),
            configurable: !(r & 2),
            writable: !(r & 4),
            value: a
          };
        };
      },
      "4bf8": function(t, i, r) {
        var a = r("be13");
        t.exports = function(s) {
          return Object(a(s));
        };
      },
      5147: function(t, i, r) {
        var a = r("2b4c")("match");
        t.exports = function(s) {
          var l = /./;
          try {
            "/./"[s](l);
          } catch {
            try {
              return l[a] = !1, !"/./"[s](l);
            } catch {
            }
          }
          return !0;
        };
      },
      "520a": function(t, i, r) {
        var a = r("0bfb"), s = RegExp.prototype.exec, l = String.prototype.replace, u = s, c = "lastIndex", f = function() {
          var h = /a/, d = /b*/g;
          return s.call(h, "a"), s.call(d, "a"), h[c] !== 0 || d[c] !== 0;
        }(), p = /()??/.exec("")[1] !== void 0, g = f || p;
        g && (u = function(d) {
          var m = this, S, D, O, C;
          return p && (D = new RegExp("^" + m.source + "$(?!\\s)", a.call(m))), f && (S = m[c]), O = s.call(m, d), f && O && (m[c] = m.global ? O.index + O[0].length : S), p && O && O.length > 1 && l.call(O[0], D, function() {
            for (C = 1; C < arguments.length - 2; C++)
              arguments[C] === void 0 && (O[C] = void 0);
          }), O;
        }), t.exports = u;
      },
      "52a7": function(t, i) {
        i.f = {}.propertyIsEnumerable;
      },
      5537: function(t, i, r) {
        var a = r("8378"), s = r("7726"), l = "__core-js_shared__", u = s[l] || (s[l] = {});
        (t.exports = function(c, f) {
          return u[c] || (u[c] = f !== void 0 ? f : {});
        })("versions", []).push({
          version: a.version,
          mode: r("2d00") ? "pure" : "global",
          copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
        });
      },
      "5ca1": function(t, i, r) {
        var a = r("7726"), s = r("8378"), l = r("32e9"), u = r("2aba"), c = r("9b43"), f = "prototype", p = function(g, h, d) {
          var m = g & p.F, S = g & p.G, D = g & p.S, O = g & p.P, C = g & p.B, L = S ? a : D ? a[h] || (a[h] = {}) : (a[h] || {})[f], V = S ? s : s[h] || (s[h] = {}), U = V[f] || (V[f] = {}), I, N, A, B;
          S && (d = h);
          for (I in d)
            N = !m && L && L[I] !== void 0, A = (N ? L : d)[I], B = C && N ? c(A, a) : O && typeof A == "function" ? c(Function.call, A) : A, L && u(L, I, A, g & p.U), V[I] != A && l(V, I, B), O && U[I] != A && (U[I] = A);
        };
        a.core = s, p.F = 1, p.G = 2, p.S = 4, p.P = 8, p.B = 16, p.W = 32, p.U = 64, p.R = 128, t.exports = p;
      },
      "5eda": function(t, i, r) {
        var a = r("5ca1"), s = r("8378"), l = r("79e5");
        t.exports = function(u, c) {
          var f = (s.Object || {})[u] || Object[u], p = {};
          p[u] = c(f), a(a.S + a.F * l(function() {
            f(1);
          }), "Object", p);
        };
      },
      "5f1b": function(t, i, r) {
        var a = r("23c6"), s = RegExp.prototype.exec;
        t.exports = function(l, u) {
          var c = l.exec;
          if (typeof c == "function") {
            var f = c.call(l, u);
            if (typeof f != "object")
              throw new TypeError("RegExp exec method returned something other than an Object or null");
            return f;
          }
          if (a(l) !== "RegExp")
            throw new TypeError("RegExp#exec called on incompatible receiver");
          return s.call(l, u);
        };
      },
      "613b": function(t, i, r) {
        var a = r("5537")("keys"), s = r("ca5a");
        t.exports = function(l) {
          return a[l] || (a[l] = s(l));
        };
      },
      "626a": function(t, i, r) {
        var a = r("2d95");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(s) {
          return a(s) == "String" ? s.split("") : Object(s);
        };
      },
      6762: function(t, i, r) {
        var a = r("5ca1"), s = r("c366")(!0);
        a(a.P, "Array", {
          includes: function(u) {
            return s(this, u, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), r("9c6c")("includes");
      },
      6821: function(t, i, r) {
        var a = r("626a"), s = r("be13");
        t.exports = function(l) {
          return a(s(l));
        };
      },
      "69a8": function(t, i) {
        var r = {}.hasOwnProperty;
        t.exports = function(a, s) {
          return r.call(a, s);
        };
      },
      "6a99": function(t, i, r) {
        var a = r("d3f4");
        t.exports = function(s, l) {
          if (!a(s))
            return s;
          var u, c;
          if (l && typeof (u = s.toString) == "function" && !a(c = u.call(s)) || typeof (u = s.valueOf) == "function" && !a(c = u.call(s)) || !l && typeof (u = s.toString) == "function" && !a(c = u.call(s)))
            return c;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      7333: function(t, i, r) {
        var a = r("0d58"), s = r("2621"), l = r("52a7"), u = r("4bf8"), c = r("626a"), f = Object.assign;
        t.exports = !f || r("79e5")(function() {
          var p = {}, g = {}, h = Symbol(), d = "abcdefghijklmnopqrst";
          return p[h] = 7, d.split("").forEach(function(m) {
            g[m] = m;
          }), f({}, p)[h] != 7 || Object.keys(f({}, g)).join("") != d;
        }) ? function(g, h) {
          for (var d = u(g), m = arguments.length, S = 1, D = s.f, O = l.f; m > S; )
            for (var C = c(arguments[S++]), L = D ? a(C).concat(D(C)) : a(C), V = L.length, U = 0, I; V > U; )
              O.call(C, I = L[U++]) && (d[I] = C[I]);
          return d;
        } : f;
      },
      7726: function(t, i) {
        var r = t.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
        typeof __g == "number" && (__g = r);
      },
      "77f1": function(t, i, r) {
        var a = r("4588"), s = Math.max, l = Math.min;
        t.exports = function(u, c) {
          return u = a(u), u < 0 ? s(u + c, 0) : l(u, c);
        };
      },
      "79e5": function(t, i) {
        t.exports = function(r) {
          try {
            return !!r();
          } catch {
            return !0;
          }
        };
      },
      "7f20": function(t, i, r) {
        var a = r("86cc").f, s = r("69a8"), l = r("2b4c")("toStringTag");
        t.exports = function(u, c, f) {
          u && !s(u = f ? u : u.prototype, l) && a(u, l, { configurable: !0, value: c });
        };
      },
      8378: function(t, i) {
        var r = t.exports = { version: "2.6.5" };
        typeof __e == "number" && (__e = r);
      },
      "84f2": function(t, i) {
        t.exports = {};
      },
      "86cc": function(t, i, r) {
        var a = r("cb7c"), s = r("c69a"), l = r("6a99"), u = Object.defineProperty;
        i.f = r("9e1e") ? Object.defineProperty : function(f, p, g) {
          if (a(f), p = l(p, !0), a(g), s)
            try {
              return u(f, p, g);
            } catch {
            }
          if ("get" in g || "set" in g)
            throw TypeError("Accessors not supported!");
          return "value" in g && (f[p] = g.value), f;
        };
      },
      "9b43": function(t, i, r) {
        var a = r("d8e8");
        t.exports = function(s, l, u) {
          if (a(s), l === void 0)
            return s;
          switch (u) {
            case 1:
              return function(c) {
                return s.call(l, c);
              };
            case 2:
              return function(c, f) {
                return s.call(l, c, f);
              };
            case 3:
              return function(c, f, p) {
                return s.call(l, c, f, p);
              };
          }
          return function() {
            return s.apply(l, arguments);
          };
        };
      },
      "9c6c": function(t, i, r) {
        var a = r("2b4c")("unscopables"), s = Array.prototype;
        s[a] == null && r("32e9")(s, a, {}), t.exports = function(l) {
          s[a][l] = !0;
        };
      },
      "9def": function(t, i, r) {
        var a = r("4588"), s = Math.min;
        t.exports = function(l) {
          return l > 0 ? s(a(l), 9007199254740991) : 0;
        };
      },
      "9e1e": function(t, i, r) {
        t.exports = !r("79e5")(function() {
          return Object.defineProperty({}, "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      },
      a352: function(t, i) {
        t.exports = o;
      },
      a481: function(t, i, r) {
        var a = r("cb7c"), s = r("4bf8"), l = r("9def"), u = r("4588"), c = r("0390"), f = r("5f1b"), p = Math.max, g = Math.min, h = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, m = /\$([$&`']|\d\d?)/g, S = function(D) {
          return D === void 0 ? D : String(D);
        };
        r("214f")("replace", 2, function(D, O, C, L) {
          return [
            function(I, N) {
              var A = D(this), B = I == null ? void 0 : I[O];
              return B !== void 0 ? B.call(I, A, N) : C.call(String(A), I, N);
            },
            function(U, I) {
              var N = L(C, U, this, I);
              if (N.done)
                return N.value;
              var A = a(U), B = String(this), J = typeof I == "function";
              J || (I = String(I));
              var nt = A.global;
              if (nt) {
                var tt = A.unicode;
                A.lastIndex = 0;
              }
              for (var H = []; ; ) {
                var z = f(A, B);
                if (z === null || (H.push(z), !nt))
                  break;
                var X = String(z[0]);
                X === "" && (A.lastIndex = c(B, l(A.lastIndex), tt));
              }
              for (var dt = "", st = 0, it = 0; it < H.length; it++) {
                z = H[it];
                for (var y = String(z[0]), v = p(g(u(z.index), B.length), 0), b = [], E = 1; E < z.length; E++)
                  b.push(S(z[E]));
                var P = z.groups;
                if (J) {
                  var j = [y].concat(b, v, B);
                  P !== void 0 && j.push(P);
                  var G = String(I.apply(void 0, j));
                } else
                  G = V(y, B, v, b, P, I);
                v >= st && (dt += B.slice(st, v) + G, st = v + y.length);
              }
              return dt + B.slice(st);
            }
          ];
          function V(U, I, N, A, B, J) {
            var nt = N + U.length, tt = A.length, H = m;
            return B !== void 0 && (B = s(B), H = d), C.call(J, H, function(z, X) {
              var dt;
              switch (X.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return U;
                case "`":
                  return I.slice(0, N);
                case "'":
                  return I.slice(nt);
                case "<":
                  dt = B[X.slice(1, -1)];
                  break;
                default:
                  var st = +X;
                  if (st === 0)
                    return z;
                  if (st > tt) {
                    var it = h(st / 10);
                    return it === 0 ? z : it <= tt ? A[it - 1] === void 0 ? X.charAt(1) : A[it - 1] + X.charAt(1) : z;
                  }
                  dt = A[st - 1];
              }
              return dt === void 0 ? "" : dt;
            });
          }
        });
      },
      aae3: function(t, i, r) {
        var a = r("d3f4"), s = r("2d95"), l = r("2b4c")("match");
        t.exports = function(u) {
          var c;
          return a(u) && ((c = u[l]) !== void 0 ? !!c : s(u) == "RegExp");
        };
      },
      ac6a: function(t, i, r) {
        for (var a = r("cadf"), s = r("0d58"), l = r("2aba"), u = r("7726"), c = r("32e9"), f = r("84f2"), p = r("2b4c"), g = p("iterator"), h = p("toStringTag"), d = f.Array, m = {
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
        }, S = s(m), D = 0; D < S.length; D++) {
          var O = S[D], C = m[O], L = u[O], V = L && L.prototype, U;
          if (V && (V[g] || c(V, g, d), V[h] || c(V, h, O), f[O] = d, C))
            for (U in a)
              V[U] || l(V, U, a[U], !0);
        }
      },
      b0c5: function(t, i, r) {
        var a = r("520a");
        r("5ca1")({
          target: "RegExp",
          proto: !0,
          forced: a !== /./.exec
        }, {
          exec: a
        });
      },
      be13: function(t, i) {
        t.exports = function(r) {
          if (r == null)
            throw TypeError("Can't call method on  " + r);
          return r;
        };
      },
      c366: function(t, i, r) {
        var a = r("6821"), s = r("9def"), l = r("77f1");
        t.exports = function(u) {
          return function(c, f, p) {
            var g = a(c), h = s(g.length), d = l(p, h), m;
            if (u && f != f) {
              for (; h > d; )
                if (m = g[d++], m != m)
                  return !0;
            } else
              for (; h > d; d++)
                if ((u || d in g) && g[d] === f)
                  return u || d || 0;
            return !u && -1;
          };
        };
      },
      c649: function(t, i, r) {
        (function(a) {
          r.d(i, "c", function() {
            return g;
          }), r.d(i, "a", function() {
            return f;
          }), r.d(i, "b", function() {
            return l;
          }), r.d(i, "d", function() {
            return p;
          }), r("a481");
          function s() {
            return typeof window < "u" ? window.console : a.console;
          }
          var l = s();
          function u(h) {
            var d = /* @__PURE__ */ Object.create(null);
            return function(S) {
              var D = d[S];
              return D || (d[S] = h(S));
            };
          }
          var c = /-(\w)/g, f = u(function(h) {
            return h.replace(c, function(d, m) {
              return m ? m.toUpperCase() : "";
            });
          });
          function p(h) {
            h.parentElement !== null && h.parentElement.removeChild(h);
          }
          function g(h, d, m) {
            var S = m === 0 ? h.children[0] : h.children[m - 1].nextSibling;
            h.insertBefore(d, S);
          }
        }).call(this, r("c8ba"));
      },
      c69a: function(t, i, r) {
        t.exports = !r("9e1e") && !r("79e5")(function() {
          return Object.defineProperty(r("230e")("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        });
      },
      c8ba: function(t, i) {
        var r;
        r = function() {
          return this;
        }();
        try {
          r = r || new Function("return this")();
        } catch {
          typeof window == "object" && (r = window);
        }
        t.exports = r;
      },
      ca5a: function(t, i) {
        var r = 0, a = Math.random();
        t.exports = function(s) {
          return "Symbol(".concat(s === void 0 ? "" : s, ")_", (++r + a).toString(36));
        };
      },
      cadf: function(t, i, r) {
        var a = r("9c6c"), s = r("d53b"), l = r("84f2"), u = r("6821");
        t.exports = r("01f9")(Array, "Array", function(c, f) {
          this._t = u(c), this._i = 0, this._k = f;
        }, function() {
          var c = this._t, f = this._k, p = this._i++;
          return !c || p >= c.length ? (this._t = void 0, s(1)) : f == "keys" ? s(0, p) : f == "values" ? s(0, c[p]) : s(0, [p, c[p]]);
        }, "values"), l.Arguments = l.Array, a("keys"), a("values"), a("entries");
      },
      cb7c: function(t, i, r) {
        var a = r("d3f4");
        t.exports = function(s) {
          if (!a(s))
            throw TypeError(s + " is not an object!");
          return s;
        };
      },
      ce10: function(t, i, r) {
        var a = r("69a8"), s = r("6821"), l = r("c366")(!1), u = r("613b")("IE_PROTO");
        t.exports = function(c, f) {
          var p = s(c), g = 0, h = [], d;
          for (d in p)
            d != u && a(p, d) && h.push(d);
          for (; f.length > g; )
            a(p, d = f[g++]) && (~l(h, d) || h.push(d));
          return h;
        };
      },
      d2c8: function(t, i, r) {
        var a = r("aae3"), s = r("be13");
        t.exports = function(l, u, c) {
          if (a(u))
            throw TypeError("String#" + c + " doesn't accept regex!");
          return String(s(l));
        };
      },
      d3f4: function(t, i) {
        t.exports = function(r) {
          return typeof r == "object" ? r !== null : typeof r == "function";
        };
      },
      d53b: function(t, i) {
        t.exports = function(r, a) {
          return { value: a, done: !!r };
        };
      },
      d8e8: function(t, i) {
        t.exports = function(r) {
          if (typeof r != "function")
            throw TypeError(r + " is not a function!");
          return r;
        };
      },
      e11e: function(t, i) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      f559: function(t, i, r) {
        var a = r("5ca1"), s = r("9def"), l = r("d2c8"), u = "startsWith", c = ""[u];
        a(a.P + a.F * r("5147")(u), "String", {
          startsWith: function(p) {
            var g = l(this, p, u), h = s(Math.min(arguments.length > 1 ? arguments[1] : void 0, g.length)), d = String(p);
            return c ? c.call(g, d, h) : g.slice(h, h + d.length) === d;
          }
        });
      },
      f6fd: function(t, i) {
        (function(r) {
          var a = "currentScript", s = r.getElementsByTagName("script");
          a in r || Object.defineProperty(r, a, {
            get: function() {
              try {
                throw new Error();
              } catch (c) {
                var l, u = (/.*at [^\(]*\((.*):.+:.+\)$/ig.exec(c.stack) || [!1])[1];
                for (l in s)
                  if (s[l].src == u || s[l].readyState == "interactive")
                    return s[l];
                return null;
              }
            }
          });
        })(document);
      },
      f751: function(t, i, r) {
        var a = r("5ca1");
        a(a.S + a.F, "Object", { assign: r("7333") });
      },
      fa5b: function(t, i, r) {
        t.exports = r("5537")("native-function-to-string", Function.toString);
      },
      fab2: function(t, i, r) {
        var a = r("7726").document;
        t.exports = a && a.documentElement;
      },
      fb15: function(t, i, r) {
        if (r.r(i), typeof window < "u") {
          r("f6fd");
          var a;
          (a = window.document.currentScript) && (a = a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)) && (r.p = a[1]);
        }
        r("f751"), r("f559"), r("ac6a"), r("cadf"), r("456d");
        function s(y) {
          if (Array.isArray(y))
            return y;
        }
        function l(y, v) {
          if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(y)))) {
            var b = [], E = !0, P = !1, j = void 0;
            try {
              for (var G = y[Symbol.iterator](), et; !(E = (et = G.next()).done) && (b.push(et.value), !(v && b.length === v)); E = !0)
                ;
            } catch (Dt) {
              P = !0, j = Dt;
            } finally {
              try {
                !E && G.return != null && G.return();
              } finally {
                if (P)
                  throw j;
              }
            }
            return b;
          }
        }
        function u(y, v) {
          (v == null || v > y.length) && (v = y.length);
          for (var b = 0, E = new Array(v); b < v; b++)
            E[b] = y[b];
          return E;
        }
        function c(y, v) {
          if (!!y) {
            if (typeof y == "string")
              return u(y, v);
            var b = Object.prototype.toString.call(y).slice(8, -1);
            if (b === "Object" && y.constructor && (b = y.constructor.name), b === "Map" || b === "Set")
              return Array.from(y);
            if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))
              return u(y, v);
          }
        }
        function f() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function p(y, v) {
          return s(y) || l(y, v) || c(y, v) || f();
        }
        r("6762"), r("2fdb");
        function g(y) {
          if (Array.isArray(y))
            return u(y);
        }
        function h(y) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(y))
            return Array.from(y);
        }
        function d() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function m(y) {
          return g(y) || h(y) || c(y) || d();
        }
        var S = r("a352"), D = /* @__PURE__ */ r.n(S), O = r("c649");
        function C(y, v, b) {
          return b === void 0 || (y = y || {}, y[v] = b), y;
        }
        function L(y, v) {
          return y.map(function(b) {
            return b.elm;
          }).indexOf(v);
        }
        function V(y, v, b, E) {
          if (!y)
            return [];
          var P = y.map(function(et) {
            return et.elm;
          }), j = v.length - E, G = m(v).map(function(et, Dt) {
            return Dt >= j ? P.length : P.indexOf(et);
          });
          return b ? G.filter(function(et) {
            return et !== -1;
          }) : G;
        }
        function U(y, v) {
          var b = this;
          this.$nextTick(function() {
            return b.$emit(y.toLowerCase(), v);
          });
        }
        function I(y) {
          var v = this;
          return function(b) {
            v.realList !== null && v["onDrag" + y](b), U.call(v, y, b);
          };
        }
        function N(y) {
          return ["transition-group", "TransitionGroup"].includes(y);
        }
        function A(y) {
          if (!y || y.length !== 1)
            return !1;
          var v = p(y, 1), b = v[0].componentOptions;
          return b ? N(b.tag) : !1;
        }
        function B(y, v, b) {
          return y[b] || (v[b] ? v[b]() : void 0);
        }
        function J(y, v, b) {
          var E = 0, P = 0, j = B(v, b, "header");
          j && (E = j.length, y = y ? [].concat(m(j), m(y)) : m(j));
          var G = B(v, b, "footer");
          return G && (P = G.length, y = y ? [].concat(m(y), m(G)) : m(G)), {
            children: y,
            headerOffset: E,
            footerOffset: P
          };
        }
        function nt(y, v) {
          var b = null, E = function(re, Dn) {
            b = C(b, re, Dn);
          }, P = Object.keys(y).filter(function(Dt) {
            return Dt === "id" || Dt.startsWith("data-");
          }).reduce(function(Dt, re) {
            return Dt[re] = y[re], Dt;
          }, {});
          if (E("attrs", P), !v)
            return b;
          var j = v.on, G = v.props, et = v.attrs;
          return E("on", j), E("props", G), Object.assign(b.attrs, et), b;
        }
        var tt = ["Start", "Add", "Remove", "Update", "End"], H = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], z = ["Move"].concat(tt, H).map(function(y) {
          return "on" + y;
        }), X = null, dt = {
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
            default: function(v) {
              return v;
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
        }, st = {
          name: "draggable",
          inheritAttrs: !1,
          props: dt,
          data: function() {
            return {
              transitionMode: !1,
              noneFunctionalComponentMode: !1
            };
          },
          render: function(v) {
            var b = this.$slots.default;
            this.transitionMode = A(b);
            var E = J(b, this.$slots, this.$scopedSlots), P = E.children, j = E.headerOffset, G = E.footerOffset;
            this.headerOffset = j, this.footerOffset = G;
            var et = nt(this.$attrs, this.componentData);
            return v(this.getTag(), et, P);
          },
          created: function() {
            this.list !== null && this.value !== null && O.b.error("Value and list props are mutually exclusive! Please set one or another."), this.element !== "div" && O.b.warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props"), this.options !== void 0 && O.b.warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
          },
          mounted: function() {
            var v = this;
            if (this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional(), this.noneFunctionalComponentMode && this.transitionMode)
              throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
            var b = {};
            tt.forEach(function(j) {
              b["on" + j] = I.call(v, j);
            }), H.forEach(function(j) {
              b["on" + j] = U.bind(v, j);
            });
            var E = Object.keys(this.$attrs).reduce(function(j, G) {
              return j[Object(O.a)(G)] = v.$attrs[G], j;
            }, {}), P = Object.assign({}, this.options, E, b, {
              onMove: function(G, et) {
                return v.onDragMove(G, et);
              }
            });
            !("draggable" in P) && (P.draggable = ">*"), this._sortable = new D.a(this.rootContainer, P), this.computeIndexes();
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
              handler: function(v) {
                this.updateOptions(v);
              },
              deep: !0
            },
            $attrs: {
              handler: function(v) {
                this.updateOptions(v);
              },
              deep: !0
            },
            realList: function() {
              this.computeIndexes();
            }
          },
          methods: {
            getIsFunctional: function() {
              var v = this._vnode.fnOptions;
              return v && v.functional;
            },
            getTag: function() {
              return this.tag || this.element;
            },
            updateOptions: function(v) {
              for (var b in v) {
                var E = Object(O.a)(b);
                z.indexOf(E) === -1 && this._sortable.option(E, v[b]);
              }
            },
            getChildrenNodes: function() {
              if (this.noneFunctionalComponentMode)
                return this.$children[0].$slots.default;
              var v = this.$slots.default;
              return this.transitionMode ? v[0].child.$slots.default : v;
            },
            computeIndexes: function() {
              var v = this;
              this.$nextTick(function() {
                v.visibleIndexes = V(v.getChildrenNodes(), v.rootContainer.children, v.transitionMode, v.footerOffset);
              });
            },
            getUnderlyingVm: function(v) {
              var b = L(this.getChildrenNodes() || [], v);
              if (b === -1)
                return null;
              var E = this.realList[b];
              return {
                index: b,
                element: E
              };
            },
            getUnderlyingPotencialDraggableComponent: function(v) {
              var b = v.__vue__;
              return !b || !b.$options || !N(b.$options._componentTag) ? !("realList" in b) && b.$children.length === 1 && "realList" in b.$children[0] ? b.$children[0] : b : b.$parent;
            },
            emitChanges: function(v) {
              var b = this;
              this.$nextTick(function() {
                b.$emit("change", v);
              });
            },
            alterList: function(v) {
              if (this.list) {
                v(this.list);
                return;
              }
              var b = m(this.value);
              v(b), this.$emit("input", b);
            },
            spliceList: function() {
              var v = arguments, b = function(P) {
                return P.splice.apply(P, m(v));
              };
              this.alterList(b);
            },
            updatePosition: function(v, b) {
              var E = function(j) {
                return j.splice(b, 0, j.splice(v, 1)[0]);
              };
              this.alterList(E);
            },
            getRelatedContextFromMoveEvent: function(v) {
              var b = v.to, E = v.related, P = this.getUnderlyingPotencialDraggableComponent(b);
              if (!P)
                return {
                  component: P
                };
              var j = P.realList, G = {
                list: j,
                component: P
              };
              if (b !== E && j && P.getUnderlyingVm) {
                var et = P.getUnderlyingVm(E);
                if (et)
                  return Object.assign(et, G);
              }
              return G;
            },
            getVmIndex: function(v) {
              var b = this.visibleIndexes, E = b.length;
              return v > E - 1 ? E : b[v];
            },
            getComponent: function() {
              return this.$slots.default[0].componentInstance;
            },
            resetTransitionData: function(v) {
              if (!(!this.noTransitionOnDrag || !this.transitionMode)) {
                var b = this.getChildrenNodes();
                b[v].data = null;
                var E = this.getComponent();
                E.children = [], E.kept = void 0;
              }
            },
            onDragStart: function(v) {
              this.context = this.getUnderlyingVm(v.item), v.item._underlying_vm_ = this.clone(this.context.element), X = v.item;
            },
            onDragAdd: function(v) {
              var b = v.item._underlying_vm_;
              if (b !== void 0) {
                Object(O.d)(v.item);
                var E = this.getVmIndex(v.newIndex);
                this.spliceList(E, 0, b), this.computeIndexes();
                var P = {
                  element: b,
                  newIndex: E
                };
                this.emitChanges({
                  added: P
                });
              }
            },
            onDragRemove: function(v) {
              if (Object(O.c)(this.rootContainer, v.item, v.oldIndex), v.pullMode === "clone") {
                Object(O.d)(v.clone);
                return;
              }
              var b = this.context.index;
              this.spliceList(b, 1);
              var E = {
                element: this.context.element,
                oldIndex: b
              };
              this.resetTransitionData(b), this.emitChanges({
                removed: E
              });
            },
            onDragUpdate: function(v) {
              Object(O.d)(v.item), Object(O.c)(v.from, v.item, v.oldIndex);
              var b = this.context.index, E = this.getVmIndex(v.newIndex);
              this.updatePosition(b, E);
              var P = {
                element: this.context.element,
                oldIndex: b,
                newIndex: E
              };
              this.emitChanges({
                moved: P
              });
            },
            updateProperty: function(v, b) {
              v.hasOwnProperty(b) && (v[b] += this.headerOffset);
            },
            computeFutureIndex: function(v, b) {
              if (!v.element)
                return 0;
              var E = m(b.to.children).filter(function(et) {
                return et.style.display !== "none";
              }), P = E.indexOf(b.related), j = v.component.getVmIndex(P), G = E.indexOf(X) !== -1;
              return G || !b.willInsertAfter ? j : j + 1;
            },
            onDragMove: function(v, b) {
              var E = this.move;
              if (!E || !this.realList)
                return !0;
              var P = this.getRelatedContextFromMoveEvent(v), j = this.context, G = this.computeFutureIndex(P, v);
              Object.assign(j, {
                futureIndex: G
              });
              var et = Object.assign({}, v, {
                relatedContext: P,
                draggedContext: j
              });
              return E(et, b);
            },
            onDragEnd: function() {
              this.computeIndexes(), X = null;
            }
          }
        };
        typeof window < "u" && "Vue" in window && window.Vue.component("draggable", st);
        var it = st;
        i.default = it;
      }
    }).default;
  });
})(fn);
const gr = /* @__PURE__ */ Pn(fn.exports), vr = {
  name: "vue-pivottable-ui",
  mixins: [
    we
  ],
  model: {
    prop: "config",
    event: "onRefresh"
  },
  props: {
    async: {
      type: Boolean,
      default: !1
    },
    hiddenAttributes: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hiddenFromAggregators: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hiddenFromDragDrop: {
      type: Array,
      default: function() {
        return [];
      }
    },
    sortonlyFromDragDrop: {
      type: Array,
      default: function() {
        return [];
      }
    },
    disabledFromDragDrop: {
      type: Array,
      default: function() {
        return [];
      }
    },
    menuLimit: {
      type: Number,
      default: 500
    },
    config: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    appliedFilter() {
      return this.propsData.valueFilter;
    },
    rendererItems() {
      return this.renderers || Object.assign({}, We);
    },
    aggregatorItems() {
      return this.aggregators || te;
    },
    numValsAllowed() {
      return this.aggregatorItems[this.propsData.aggregatorName]([])().numInputs || 0;
    },
    rowAttrs() {
      return this.propsData.rows.filter(
        (e) => !this.hiddenAttributes.includes(e) && !this.hiddenFromDragDrop.includes(e)
      );
    },
    colAttrs() {
      return this.propsData.cols.filter(
        (e) => !this.hiddenAttributes.includes(e) && !this.hiddenFromDragDrop.includes(e)
      );
    },
    unusedAttrs() {
      return this.propsData.attributes.filter(
        (e) => !this.propsData.rows.includes(e) && !this.propsData.cols.includes(e) && !this.hiddenAttributes.includes(e) && !this.hiddenFromDragDrop.includes(e)
      ).sort(un(this.unusedOrder));
    }
  },
  data() {
    return {
      propsData: {
        aggregatorName: "",
        rendererName: "",
        rowOrder: "key_a_to_z",
        colOrder: "key_a_to_z",
        vals: [],
        cols: [],
        rows: [],
        attributes: [],
        valueFilter: {},
        renderer: null
      },
      pivotData: [],
      openStatus: {},
      attrValues: {},
      unusedOrder: [],
      zIndices: {},
      maxZIndex: 1e3,
      openDropdown: !1,
      materializedInput: [],
      sortIcons: {
        key_a_to_z: {
          rowSymbol: "\u2195",
          colSymbol: "\u2194",
          next: "value_a_to_z"
        },
        value_a_to_z: {
          rowSymbol: "\u2193",
          colSymbol: "\u2192",
          next: "value_z_to_a"
        },
        value_z_to_a: {
          rowSymbol: "\u2191",
          colSymbol: "\u2190",
          next: "key_a_to_z"
        }
      }
    };
  },
  beforeUpdated(e) {
    this.materializeInput(e.data);
  },
  watch: {
    rowOrder: {
      handler(e) {
        this.propsData.rowOrder = e;
      }
    },
    colOrder: {
      handler(e) {
        this.propsData.colOrder = e;
      }
    },
    cols: {
      handler(e) {
        this.propsData.cols = e;
      }
    },
    rows: {
      handler(e) {
        this.propsData.rows = e;
      }
    },
    rendererName: {
      handler(e) {
        this.propsData.rendererName = e;
      }
    },
    appliedFilter: {
      handler(e, n) {
        this.$emit("update:valueFilter", e);
      },
      immediate: !0,
      deep: !0
    },
    valueFilter: {
      handler(e) {
        this.propsData.valueFilter = e;
      },
      immediate: !0,
      deep: !0
    },
    data: {
      handler(e) {
        this.init();
      },
      immediate: !0,
      deep: !0
    },
    attributes: {
      handler(e) {
        this.propsData.attributes = e.length > 0 ? e : Object.keys(this.attrValues);
      },
      deep: !0
    },
    propsData: {
      handler(e) {
        if (this.pivotData.length === 0)
          return;
        const n = {
          derivedAttributes: this.derivedAttributes,
          hiddenAttributes: this.hiddenAttributes,
          hiddenFromAggregators: this.hiddenFromAggregators,
          hiddenFromDragDrop: this.hiddenFromDragDrop,
          sortonlyFromDragDrop: this.sortonlyFromDragDrop,
          disabledFromDragDrop: this.disabledFromDragDrop,
          menuLimit: this.menuLimit,
          attributes: e.attributes,
          unusedAttrs: this.unusedAttrs,
          sorters: this.sorters,
          data: this.materializedInput,
          rowOrder: e.rowOrder,
          colOrder: e.colOrder,
          valueFilter: e.valueFilter,
          rows: e.rows,
          cols: e.cols,
          rendererName: e.rendererName,
          aggregatorName: e.aggregatorName,
          aggregators: this.aggregatorItems,
          vals: e.vals
        };
        this.$emit("onRefresh", n);
      },
      immediate: !1,
      deep: !0
    }
  },
  methods: {
    init() {
      this.materializeInput(this.data), this.propsData.vals = this.vals.slice(), this.propsData.rows = this.rows, this.propsData.cols = this.cols, this.propsData.rowOrder = this.rowOrder, this.propsData.colOrder = this.colOrder, this.propsData.rendererName = this.rendererName, this.propsData.aggregatorName = this.aggregatorName, this.propsData.attributes = this.attributes.length > 0 ? this.attributes : Object.keys(this.attrValues), this.unusedOrder = this.unusedAttrs;
      const e = "*";
      Object.entries(this.attrValues).forEach(([n, o]) => {
        let t = {};
        const i = this.valueFilter && this.valueFilter[n];
        i && Object.keys(i).length && (i[e] === !0 ? Object.keys(o).forEach((r) => {
          if (r !== e) {
            const a = i[r];
            (a === void 0 || a === !0) && (t[r] = !0);
          }
        }) : t = i), this.updateValueFilter({
          attribute: n,
          valueFilter: t
        });
      });
    },
    assignValue(e) {
      this.$set(this.propsData.valueFilter, e, {});
    },
    propUpdater(e) {
      return (n) => {
        this.propsData[e] = n;
      };
    },
    updateValueFilter({ attribute: e, valueFilter: n }) {
      this.$set(this.propsData.valueFilter, e, n);
    },
    moveFilterBoxToTop({ attribute: e }) {
      this.maxZIndex += 1, this.zIndices[e] = this.maxZIndex + 1;
    },
    openFilterBox({ attribute: e, open: n }) {
      this.$set(this.openStatus, e, n);
    },
    closeFilterBox(e) {
      this.openStatus = {};
    },
    materializeInput(e) {
      if (this.pivotData === e)
        return;
      this.pivotData = e;
      const n = {}, o = [];
      let t = 0;
      Ot.forEachRecord(this.pivotData, this.derivedAttributes, function(i) {
        o.push(i);
        for (const r of Object.keys(i))
          r in n || (n[r] = {}, t > 0 && (n[r].null = t));
        for (const r in n) {
          const a = r in i ? i[r] : "null";
          a in n[r] || (n[r][a] = 0), n[r][a]++;
        }
        t++;
      }), this.materializedInput = o, this.attrValues = n;
    },
    makeDnDCell(e, n, o, t) {
      const i = this.$scopedSlots.pvtAttr;
      return t(
        gr,
        {
          attrs: {
            draggable: "li[data-id]",
            group: "sharted",
            ghostClass: ".pvtPlaceholder",
            filter: ".pvtFilterBox",
            preventOnFilter: !1,
            tag: "td"
          },
          props: {
            value: e
          },
          staticClass: o,
          on: {
            sort: n.bind(this)
          }
        },
        [
          e.map((r) => t(Nn, {
            scopedSlots: i ? {
              pvtAttr: (a) => t("slot", i(a))
            } : void 0,
            props: {
              sortable: this.sortonlyFromDragDrop.includes(r) || !this.disabledFromDragDrop.includes(r),
              draggable: !this.sortonlyFromDragDrop.includes(r) && !this.disabledFromDragDrop.includes(r),
              name: r,
              key: r,
              attrValues: this.attrValues[r],
              sorter: De(this.sorters, r),
              menuLimit: this.menuLimit,
              zIndex: this.zIndices[r] || this.maxZIndex,
              valueFilter: this.propsData.valueFilter[r],
              open: this.openStatus[r],
              async: this.async,
              unused: this.unusedAttrs.includes(r),
              localeStrings: this.locales[this.locale].localeStrings
            },
            domProps: {},
            on: {
              "update:filter": this.updateValueFilter,
              "moveToTop:filterbox": this.moveFilterBoxToTop,
              "open:filterbox": this.openFilterBox,
              "no:filterbox": () => this.$emit("no:filterbox")
            }
          }))
        ]
      );
    },
    rendererCell(e, n) {
      return this.$slots.rendererCell ? n("td", {
        staticClass: ["pvtRenderers pvtVals pvtText"]
      }, this.$slots.rendererCell) : n(
        "td",
        {
          staticClass: ["pvtRenderers"]
        },
        [
          n(Ce, {
            props: {
              values: Object.keys(this.rendererItems),
              value: e
            },
            on: {
              input: (o) => {
                this.propUpdater("rendererName")(o), this.propUpdater("renderer", this.rendererItems[this.rendererName]);
              }
            }
          })
        ]
      );
    },
    aggregatorCell(e, n, o) {
      return this.$slots.aggregatorCell ? o("td", {
        staticClass: ["pvtVals pvtText"]
      }, this.$slots.aggregatorCell) : o(
        "td",
        {
          staticClass: ["pvtVals"]
        },
        [
          o(
            "div",
            [
              o(Ce, {
                props: {
                  values: Object.keys(this.aggregatorItems),
                  value: e
                },
                on: {
                  input: (t) => {
                    this.propUpdater("aggregatorName")(t);
                  }
                }
              }),
              o("a", {
                staticClass: ["pvtRowOrder"],
                attrs: {
                  role: "button"
                },
                on: {
                  click: () => {
                    this.propUpdater("rowOrder")(this.sortIcons[this.propsData.rowOrder].next);
                  }
                }
              }, this.sortIcons[this.propsData.rowOrder].rowSymbol),
              o("a", {
                staticClass: ["pvtColOrder"],
                attrs: {
                  role: "button"
                },
                on: {
                  click: () => {
                    this.propUpdater("colOrder")(this.sortIcons[this.propsData.colOrder].next);
                  }
                }
              }, this.sortIcons[this.propsData.colOrder].colSymbol)
            ]
          ),
          this.numValsAllowed > 0 ? new Array(this.numValsAllowed).fill().map((t, i) => [
            o(Ce, {
              props: {
                values: Object.keys(this.attrValues).filter((r) => !this.hiddenAttributes.includes(r) && !this.hiddenFromAggregators.includes(r)),
                value: n[i]
              },
              on: {
                input: (r) => {
                  this.propsData.vals.splice(i, 1, r);
                }
              }
            })
          ]) : void 0
        ]
      );
    },
    outputCell(e, n, o) {
      return o(
        "td",
        {
          staticClass: ["pvtOutput"]
        },
        [
          o(Ke, {
            props: Object.assign(
              e,
              { tableMaxWidth: this.tableMaxWidth }
            )
          })
        ]
      );
    }
  },
  render(e) {
    if (this.data.length < 1)
      return;
    const n = this.$scopedSlots.output, o = this.$slots.output, t = this.propsData.rendererName, i = this.propsData.aggregatorName, r = this.propsData.vals, a = this.makeDnDCell(
      this.unusedAttrs,
      (d) => {
        const m = d.item.getAttribute("data-id");
        this.sortonlyFromDragDrop.includes(m) && (!d.from.classList.contains("pvtUnused") || !d.to.classList.contains("pvtUnused")) || (d.from.classList.contains("pvtUnused") && (this.openFilterBox({ attribute: m, open: !1 }), this.unusedOrder.splice(d.oldIndex, 1), this.$emit("dragged:unused", m)), d.to.classList.contains("pvtUnused") && (this.openFilterBox({ attribute: m, open: !1 }), this.unusedOrder.splice(d.newIndex, 0, m), this.$emit("dropped:unused", m)));
      },
      "pvtAxisContainer pvtUnused pvtHorizList",
      e
    ), s = this.makeDnDCell(
      this.colAttrs,
      (d) => {
        const m = d.item.getAttribute("data-id");
        this.sortonlyFromDragDrop.includes(m) && (!d.from.classList.contains("pvtCols") || !d.to.classList.contains("pvtCols")) || (d.from.classList.contains("pvtCols") && (this.propsData.cols.splice(d.oldIndex, 1), this.$emit("dragged:cols", m)), d.to.classList.contains("pvtCols") && (this.propsData.cols.splice(d.newIndex, 0, m), this.$emit("dropped:cols", m)));
      },
      "pvtAxisContainer pvtHorizList pvtCols",
      e
    ), l = this.makeDnDCell(
      this.rowAttrs,
      (d) => {
        const m = d.item.getAttribute("data-id");
        this.sortonlyFromDragDrop.includes(m) && (!d.from.classList.contains("pvtRows") || !d.to.classList.contains("pvtRows")) || (d.from.classList.contains("pvtRows") && (this.propsData.rows.splice(d.oldIndex, 1), this.$emit("dragged:rows", m)), d.to.classList.contains("pvtRows") && (this.propsData.rows.splice(d.newIndex, 0, m), this.$emit("dropped:rows", m)));
      },
      "pvtAxisContainer pvtVertList pvtRows",
      e
    ), u = Object.assign({}, this.$props, {
      localeStrings: this.localeStrings,
      data: this.materializedInput,
      rowOrder: this.propsData.rowOrder,
      colOrder: this.propsData.colOrder,
      valueFilter: this.propsData.valueFilter,
      rows: this.propsData.rows,
      cols: this.propsData.cols,
      aggregators: this.aggregatorItems,
      rendererName: t,
      aggregatorName: i,
      vals: r
    });
    let c = null;
    try {
      c = new Ot(u);
    } catch (d) {
      if (console && console.error(d.stack))
        return this.computeError(e);
    }
    const f = this.rendererCell(t, e), p = this.aggregatorCell(i, r, e), g = this.outputCell(u, t.indexOf("Chart") > -1, e), h = this.$slots.colGroup;
    return e(
      "table",
      {
        staticClass: ["pvtUi"]
      },
      [
        h,
        e(
          "tbody",
          {
            on: {
              click: this.closeFilterBox
            }
          },
          [
            e(
              "tr",
              [
                f,
                a
              ]
            ),
            e(
              "tr",
              [
                p,
                s
              ]
            ),
            e(
              "tr",
              [
                l,
                o ? e("td", { staticClass: "pvtOutput" }, o) : void 0,
                n && !o ? e("td", { staticClass: "pvtOutput" }, n({ pivotData: c })) : void 0,
                !o && !n ? g : void 0
              ]
            )
          ]
        )
      ]
    );
  },
  renderError(e, n) {
    return this.uiRenderError(e);
  }
}, mr = {
  aggregatorTemplates: Z,
  aggregators: te,
  derivers: An,
  locales: cn,
  naturalSort: Rt,
  numberFormat: Oe,
  getSort: De,
  sortAs: un,
  PivotData: Ot
}, br = {
  TableRenderer: We
}, Be = {
  VuePivottable: Ke,
  VuePivottableUi: vr
};
typeof window < "u" && window.Vue && window.Vue.use(Ke);
const yr = (e) => {
  for (const n in Be)
    e.component(Be[n].name, Be[n]);
};
export {
  mr as PivotUtilities,
  br as Renderer,
  Ke as VuePivottable,
  vr as VuePivottableUi,
  yr as default
};
