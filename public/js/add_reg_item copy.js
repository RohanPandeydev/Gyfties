var existingJQueryProperties = Object.getOwnPropertyDescriptor(window, "$")
if (!existingJQueryProperties || existingJQueryProperties.writable) {
  !function (e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, (function (e, t) {
    function n(e) { var t = !!e && "length" in e && e.length, n = pe.type(e); return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) } function r(e, t, n) { if (pe.isFunction(t)) return pe.grep(e, (function (e, r) { return !!t.call(e, r, e) !== n })); if (t.nodeType) return pe.grep(e, (function (e) { return e === t !== n })); if ("string" == typeof t) { if (Ce.test(t)) return pe.filter(t, e, n); t = pe.filter(t, e) } return pe.grep(e, (function (e) { return pe.inArray(e, t) > -1 !== n })) } function i(e, t) { do { e = e[t] } while (e && 1 !== e.nodeType); return e } function o(e) { var t = {}; return pe.each(e.match(Le) || [], (function (e, n) { t[n] = !0 })), t } function a() { re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s)) } function s() { (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready()) } function u(e, t, n) { if (void 0 === n && 1 === e.nodeType) { var r = "data-" + t.replace(_e, "-$1").toLowerCase(); if ("string" == typeof (n = e.getAttribute(r))) { try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : qe.test(n) ? pe.parseJSON(n) : n) } catch (e) { } pe.data(e, t, n) } else n = void 0 } return n } function l(e) { var t; for (t in e) if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } function c(e, t, n, r) { if (He(e)) { var i, o, a = pe.expando, s = e.nodeType, u = s ? pe.cache : e, l = s ? e[a] : e[a] && a; if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), u[l] || (u[l] = s ? {} : { toJSON: pe.noop }), "object" != typeof t && "function" != typeof t || (r ? u[l] = pe.extend(u[l], t) : u[l].data = pe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[pe.camelCase(t)]) : i = o, i } } function d(e, t, n) { if (He(e)) { var r, i, o = e.nodeType, a = o ? pe.cache : e, s = o ? e[pe.expando] : pe.expando; if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : t = (t = pe.camelCase(t)) in r ? [t] : t.split(" "), i = t.length; for (; i--;)delete r[t[i]]; if (n ? !l(r) : !pe.isEmptyObject(r)) return } (n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0) } } } function f(e, t, n, r) { var i, o = 1, a = 20, s = r ? function () { return r.cur() } : function () { return pe.css(e, t, "") }, u = s(), l = n && n[3] || (pe.cssNumber[t] ? "" : "px"), c = (pe.cssNumber[t] || "px" !== l && +u) && Me.exec(pe.css(e, t)); if (c && c[3] !== l) { l = l || c[3], n = n || [], c = +u || 1; do { c /= o = o || ".5", pe.style(e, t, c + l) } while (o !== (o = s() / u) && 1 !== o && --a) } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } function p(e) { var t = ze.split("|"), n = e.createDocumentFragment(); if (n.createElement) for (; t.length;)n.createElement(t.pop()); return n } function h(e, t) { var n, r, i = 0, o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0; if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t)); return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o } function g(e, t) { for (var n, r = 0; null != (n = e[r]); r++)pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval")) } function m(e) { Be.test(e.type) && (e.defaultChecked = e.checked) } function v(e, t, n, r, i) { for (var o, a, s, u, l, c, d, f = e.length, v = p(t), y = [], x = 0; f > x; x++)if ((a = e[x]) || 0 === a) if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a); else if (Ue.test(a)) { for (u = u || v.appendChild(t.createElement("div")), l = (We.exec(a) || ["", ""])[1].toLowerCase(), d = Xe[l] || Xe._default, u.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2], o = d[0]; o--;)u = u.lastChild; if (!de.leadingWhitespace && $e.test(a) && y.push(t.createTextNode($e.exec(a)[0])), !de.tbody) for (o = (a = "table" !== l || Ve.test(a) ? "<table>" !== d[1] || Ve.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--;)pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c); for (pe.merge(y, u.childNodes), u.textContent = ""; u.firstChild;)u.removeChild(u.firstChild); u = v.lastChild } else y.push(t.createTextNode(a)); for (u && v.removeChild(u), de.appendChecked || pe.grep(h(y, "input"), m), x = 0; a = y[x++];)if (r && pe.inArray(a, r) > -1) i && i.push(a); else if (s = pe.contains(a.ownerDocument, a), u = h(v.appendChild(a), "script"), s && g(u), n) for (o = 0; a = u[o++];)Ie.test(a.type || "") && n.push(a); return u = null, v } function y() { return !0 } function x() { return !1 } function b() { try { return re.activeElement } catch (e) { } } function w(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) w(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = x; else if (!i) return e; return 1 === o && (a = i, i = function (e) { return pe().off(e), a.apply(this, arguments) }, i.guid = a.guid || (a.guid = pe.guid++)), e.each((function () { pe.event.add(this, t, i, r, n) })) } function T(e, t) { return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e } function C(e) { return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e } function E(e) { var t = it.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function N(e, t) { if (1 === t.nodeType && pe.hasData(e)) { var n, r, i, o = pe._data(e), a = pe._data(t, o), s = o.events; if (s) for (n in delete a.handle, a.events = {}, s) for (r = 0, i = s[n].length; i > r; r++)pe.event.add(t, n, s[n][r]); a.data && (a.data = pe.extend({}, a.data)) } } function k(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[pe.expando]) { for (r in (i = pe._data(t)).events) pe.removeEvent(t, r, i.handle); t.removeAttribute(pe.expando) } "script" === n && t.text !== e.text ? (C(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Be.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } } function S(e, t, n, r) { t = oe.apply([], t); var i, o, a, s, u, l, c = 0, d = e.length, f = d - 1, p = t[0], g = pe.isFunction(p); if (g || d > 1 && "string" == typeof p && !de.checkClone && rt.test(p)) return e.each((function (i) { var o = e.eq(i); g && (t[0] = p.call(this, i, o.html())), S(o, t, n, r) })); if (d && (i = (l = v(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === l.childNodes.length && (l = i), i || r)) { for (a = (s = pe.map(h(l, "script"), C)).length; d > c; c++)o = l, c !== f && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[c], o, c); if (a) for (u = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; a > c; c++)o = s[c], Ie.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(u, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, ""))); l = i = null } return e } function A(e, t, n) { for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r)); return e } function D(e, t) { var n = pe(t.createElement(e)).appendTo(t.body), r = pe.css(n[0], "display"); return n.detach(), r } function j(e) { var t = re, n = ut[e]; return n || ("none" !== (n = D(e, t)) && n || ((t = ((st = (st || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || st[0].contentDocument).document).write(), t.close(), n = D(e, t), st.detach()), ut[e] = n), n } function L(e, t) { return { get: function () { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } } function H(e) { if (e in Ct) return e; for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--;)if ((e = Tt[n] + t) in Ct) return e } function q(e, t) { for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)(r = e[a]).style && (o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (o[a] = pe._data(r, "olddisplay", j(r.nodeName)))) : (i = Re(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display")))); for (a = 0; s > a; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } function _(e, t, n) { var r = xt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function F(e, t, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += pe.css(e, n + Oe[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + Oe[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Oe[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Oe[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + Oe[o] + "Width", !0, i))); return a } function M(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = pt(e), a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if ((0 > (i = ht(e, t, o)) || null == i) && (i = e.style[t]), ct.test(i)) return i; r = a && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0 } return i + F(e, t, n || (a ? "border" : "content"), r, o) + "px" } function O(e, t, n, r, i) { return new O.prototype.init(e, t, n, r, i) } function R() { return e.setTimeout((function () { Et = void 0 })), Et = pe.now() } function P(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t)r["margin" + (n = Oe[i])] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } function B(e, t, n) { for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; a > o; o++)if (r = i[o].call(n, t, e)) return r } function W(e, t, n) { var r, i, o, a, s, u, l, c = this, d = {}, f = e.style, p = e.nodeType && Re(e), h = pe._data(e, "fxshow"); for (r in n.queue || (null == (s = pe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () { s.unqueued || u() }), s.unqueued++, c.always((function () { c.always((function () { s.unqueued--, pe.queue(e, "fx").length || s.empty.fire() })) }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (l = pe.css(e, "display")) ? pe._data(e, "olddisplay") || j(e.nodeName) : l) && "none" === pe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", de.shrinkWrapBlocks() || c.always((function () { f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2] }))), t) if (i = t[r], kt.exec(i)) { if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) { if ("show" !== i || !h || void 0 === h[r]) continue; p = !0 } d[r] = h && h[r] || pe.style(e, r) } else l = void 0; if (pe.isEmptyObject(d)) "inline" === ("none" === l ? j(e.nodeName) : l) && (f.display = l); else for (r in h ? "hidden" in h && (p = h.hidden) : h = pe._data(e, "fxshow", {}), o && (h.hidden = !p), p ? pe(e).show() : c.done((function () { pe(e).hide() })), c.done((function () { var t; for (t in pe._removeData(e, "fxshow"), d) pe.style(e, t, d[t]) })), d) a = B(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) } function I(e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = pe.camelCase(n)], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = pe.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i } function $(e, t, n) { var r, i, o = 0, a = $.prefilters.length, s = pe.Deferred().always((function () { delete u.elem })), u = function () { if (i) return !1; for (var t = Et || R(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; a > o; o++)l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), 1 > r && a ? n : (s.resolveWith(e, [l]), !1) }, l = s.promise({ elem: e, props: pe.extend({}, t), opts: pe.extend(!0, { specialEasing: {}, easing: pe.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Et || R(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++)l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }), c = l.props; for (I(c, l.opts.specialEasing); a > o; o++)if (r = $.prefilters[o].call(l, e, c, l.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)), r; return pe.map(c, B, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) } function z(e) { return pe.attr(e, "class") || "" } function X(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(Le) || []; if (pe.isFunction(n)) for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function U(e, t, n, r) { function i(s) { var u; return o[s] = !0, pe.each(e[s] || [], (function (e, s) { var l = s(t, n, r); return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1) })), u } var o = {}, a = e === Qt; return i(t.dataTypes[0]) || !o["*"] && i("*") } function V(e, t) { var n, r, i = pe.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]); return n && pe.extend(!0, e, n), e } function Y(e, t, n) { for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type")); if (i) for (a in s) if (s[a] && s[a].test(i)) { u.unshift(a); break } if (u[0] in n) o = u[0]; else { for (a in n) { if (!u[0] || e.converters[a + " " + u[0]]) { o = a; break } r || (r = a) } o = o || r } return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0 } function J(e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e.throws) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } } function G(e) { return e.style && e.style.display || pe.css(e, "display") } function Q(e) { if (!pe.contains(e.ownerDocument || re, e)) return !0; for (; e && 1 === e.nodeType;) { if ("none" === G(e) || "hidden" === e.type) return !0; e = e.parentNode } return !1 } function K(e, t, n, r) { var i; if (pe.isArray(t)) pe.each(t, (function (t, i) { n || nn.test(e) ? r(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) })); else if (n || "object" !== pe.type(t)) r(e, t); else for (i in t) K(e + "[" + i + "]", t[i], n, r) } function Z() { try { return new e.XMLHttpRequest } catch (e) { } } function ee() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (e) { } } function te(e) { return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) } var ne = [], re = e.document, ie = ne.slice, oe = ne.concat, ae = ne.push, se = ne.indexOf, ue = {}, le = ue.toString, ce = ue.hasOwnProperty, de = {}, fe = "1.12.4", pe = function (e, t) { return new pe.fn.init(e, t) }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, me = /-([\da-z])/gi, ve = function (e, t) { return t.toUpperCase() }; pe.fn = pe.prototype = { jquery: fe, constructor: pe, selector: "", length: 0, toArray: function () { return ie.call(this) }, get: function (e) { return null != e ? 0 > e ? this[e + this.length] : this[e] : ie.call(this) }, pushStack: function (e) { var t = pe.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e) { return pe.each(this, e) }, map: function (e) { return this.pushStack(pe.map(this, (function (t, n) { return e.call(t, n, t) }))) }, slice: function () { return this.pushStack(ie.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: ae, sort: ne.sort, splice: ne.splice }, pe.extend = pe.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)if (null != (i = arguments[s])) for (r in i) e = a[r], a !== (n = i[r]) && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(l, o, n)) : void 0 !== n && (a[r] = n)); return a }, pe.extend({ expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isFunction: function (e) { return "function" === pe.type(e) }, isArray: Array.isArray || function (e) { return "array" === pe.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { var t = e && e.toString(); return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0 }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, isPlainObject: function (e) { var t; if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1; try { if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 } if (!de.ownFirst) for (t in e) return ce.call(e, t); for (t in e); return void 0 === t || ce.call(e, t) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e }, globalEval: function (t) { t && pe.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(ge, "ms-").replace(me, ve) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t) { var r, i = 0; if (n(e)) for (r = e.length; r > i && !1 !== t.call(e[i], i, e[i]); i++); else for (i in e) if (!1 === t.call(e[i], i, e[i])) break; return e }, trim: function (e) { return null == e ? "" : (e + "").replace(he, "") }, makeArray: function (e, t) { var r = t || []; return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r }, inArray: function (e, t, n) { var r; if (t) { if (se) return se.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e) return n } return -1 }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; n > r;)e[i++] = t[r++]; if (n != n) for (; void 0 !== t[r];)e[i++] = t[r++]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; o > i; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, r) { var i, o, a = 0, s = []; if (n(e)) for (i = e.length; i > a; a++)null != (o = t(e[a], a, r)) && s.push(o); else for (a in e) null != (o = t(e[a], a, r)) && s.push(o); return oe.apply([], s) }, guid: 1, proxy: function (e, t) { var n, r, i; return "string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e) ? (n = ie.call(arguments, 2), r = function () { return e.apply(t || this, n.concat(ie.call(arguments))) }, r.guid = e.guid = e.guid || pe.guid++, r) : void 0 }, now: function () { return +new Date }, support: de }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) { ue["[object " + t + "]"] = t.toLowerCase() })); var ye = function (e) {
      function t(e, t, n, r) { var i, o, a, s, u, l, d, p, h = t && t.ownerDocument, g = t ? t.nodeType : 9; if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n; if (!r && ((t ? t.ownerDocument || t : B) !== H && L(t), t = t || H, _)) { if (11 !== g && (l = ve.exec(e))) if (i = l[1]) { if (9 === g) { if (!(a = t.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n } else { if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n; if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n } if (w.qsa && !X[e + " "] && (!F || !F.test(e))) { if (1 !== g) h = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) { for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = P), o = (d = N(e)).length, u = fe.test(s) ? "#" + s : "[id='" + s + "']"; o--;)d[o] = u + " " + f(d[o]); p = d.join(","), h = ye.test(e) && c(t.parentNode) || t } if (p) try { return K.apply(n, h.querySelectorAll(p)), n } catch (e) { } finally { s === P && t.removeAttribute("id") } } } return S(e.replace(se, "$1"), t, n, r) } function n() { function e(n, r) { return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r } var t = []; return e } function r(e) { return e[P] = !0, e } function i(e) { var t = H.createElement("div"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function o(e, t) { for (var n = e.split("|"), r = n.length; r--;)T.attrHandle[n[r]] = t } function a(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V); if (r) return r; if (n) for (; n = n.nextSibling;)if (n === t) return -1; return e ? 1 : -1 } function s(e) { return function (t) { return "input" === t.nodeName.toLowerCase() && t.type === e } } function u(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function l(e) { return r((function (t) { return t = +t, r((function (n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i])) })) })) } function c(e) { return e && void 0 !== e.getElementsByTagName && e } function d() { } function f(e) { for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value; return r } function p(e, t, n) { var r = t.dir, i = n && "parentNode" === r, o = I++; return t.first ? function (t, n, o) { for (; t = t[r];)if (1 === t.nodeType || i) return e(t, n, o) } : function (t, n, a) { var s, u, l, c = [W, o]; if (a) { for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a)) return !0 } else for (; t = t[r];)if (1 === t.nodeType || i) { if ((s = (u = (l = t[P] || (t[P] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[r]) && s[0] === W && s[1] === o) return c[2] = s[2]; if (u[r] = c, c[2] = e(t, n, a)) return !0 } } } function h(e) { return e.length > 1 ? function (t, n, r) { for (var i = e.length; i--;)if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function g(e, n, r) { for (var i = 0, o = n.length; o > i; i++)t(e, n[i], r); return r } function m(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function v(e, t, n, i, o, a) { return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r((function (r, a, s, u) { var l, c, d, f = [], p = [], h = a.length, v = r || g(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? v : m(v, f, e, s, u), x = n ? o || (r ? e : h || i) ? [] : a : y; if (n && n(y, x, s, u), i) for (l = m(x, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (x[p[c]] = !(y[p[c]] = d)); if (r) { if (o || e) { if (o) { for (l = [], c = x.length; c--;)(d = x[c]) && l.push(y[c] = d); o(null, x = [], l, u) } for (c = x.length; c--;)(d = x[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d)) } } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : K.apply(a, x) })) } function y(e) { for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p((function (e) { return e === t }), a, !0), l = p((function (e) { return ee(t, e) > -1 }), a, !0), c = [function (e, n, r) { var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r)); return t = null, i }]; i > s; s++)if (n = T.relative[e[s].type]) c = [p(h(c), n)]; else { if ((n = T.filter[e[s].type].apply(null, e[s].matches))[P]) { for (r = ++s; i > r && !T.relative[e[r].type]; r++); return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e)) } c.push(n) } return h(c) } function x(e, n) { var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) { var c, d, f, p = 0, h = "0", g = r && [], v = [], y = A, x = r || o && T.find.TAG("*", l), b = W += null == y ? 1 : Math.random() || .1, w = x.length; for (l && (A = a === H || a || l); h !== w && null != (c = x[h]); h++) { if (o && c) { for (d = 0, a || c.ownerDocument === H || (L(c), s = !_); f = e[d++];)if (f(c, a || H, s)) { u.push(c); break } l && (W = b) } i && ((c = !f && c) && p--, r && g.push(c)) } if (p += h, i && h !== p) { for (d = 0; f = n[d++];)f(g, v, a, s); if (r) { if (p > 0) for (; h--;)g[h] || v[h] || (v[h] = G.call(u)); v = m(v) } K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u) } return l && (W = b, A = y), g }; return i ? r(a) : a } var b, w, T, C, E, N, k, S, A, D, j, L, H, q, _, F, M, O, R, P = "sizzle" + 1 * new Date, B = e.document, W = 0, I = 0, $ = n(), z = n(), X = n(), U = function (e, t) { return e === t && (j = !0), 0 }, V = 1 << 31, Y = {}.hasOwnProperty, J = [], G = J.pop, Q = J.push, K = J.push, Z = J.slice, ee = function (e, t) { for (var n = 0, r = e.length; r > n; n++)if (e[n] === t) return n; return -1 }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(oe), fe = new RegExp("^" + re + "$"), pe = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re + "|[*])"), ATTR: new RegExp("^" + ie), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, xe = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }, Te = function () { L() }; try { K.apply(J = Z.call(B.childNodes), B.childNodes), J[B.childNodes.length].nodeType } catch (e) { K = { apply: J.length ? function (e, t) { Q.apply(e, Z.call(t)) } : function (e, t) { for (var n = e.length, r = 0; e[n++] = t[r++];); e.length = n - 1 } } } for (b in w = t.support = {}, E = t.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, L = t.setDocument = function (e) { var t, n, r = e ? e.ownerDocument || e : B; return r !== H && 9 === r.nodeType && r.documentElement ? (q = (H = r).documentElement, _ = !E(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i((function (e) { return e.className = "i", !e.getAttribute("className") })), w.getElementsByTagName = i((function (e) { return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length })), w.getElementsByClassName = me.test(H.getElementsByClassName), w.getById = i((function (e) { return q.appendChild(e).id = P, !H.getElementsByName || !H.getElementsByName(P).length })), w.getById ? (T.find.ID = function (e, t) { if (void 0 !== t.getElementById && _) { var n = t.getElementById(e); return n ? [n] : [] } }, T.filter.ID = function (e) { var t = e.replace(be, we); return function (e) { return e.getAttribute("id") === t } }) : (delete T.find.ID, T.filter.ID = function (e) { var t = e.replace(be, we); return function (e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }), T.find.TAG = w.getElementsByTagName ? function (e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { for (; n = o[i++];)1 === n.nodeType && r.push(n); return r } return o }, T.find.CLASS = w.getElementsByClassName && function (e, t) { return void 0 !== t.getElementsByClassName && _ ? t.getElementsByClassName(e) : void 0 }, M = [], F = [], (w.qsa = me.test(H.querySelectorAll)) && (i((function (e) { q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]") })), i((function (e) { var t = H.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:") }))), (w.matchesSelector = me.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i((function (e) { w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), M.push("!=", oe) })), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(q.compareDocumentPosition), R = t || me.test(q.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) for (; t = t.parentNode;)if (t === e) return !0; return !1 }, U = t ? function (e, t) { if (e === t) return j = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === B && R(B, e) ? -1 : t === H || t.ownerDocument === B && R(B, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return j = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t]; if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0; if (i === o) return a(e, t); for (n = e; n = n.parentNode;)s.unshift(n); for (n = t; n = n.parentNode;)u.unshift(n); for (; s[r] === u[r];)r++; return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0 }, H) : H }, t.matches = function (e, n) { return t(e, null, null, n) }, t.matchesSelector = function (e, n) { if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && _ && !X[n + " "] && (!M || !M.test(n)) && (!F || !F.test(n))) try { var r = O.call(e, n); if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) { } return t(n, H, null, [e]).length > 0 }, t.contains = function (e, t) { return (e.ownerDocument || e) !== H && L(e), R(e, t) }, t.attr = function (e, t) { (e.ownerDocument || e) !== H && L(e); var n = T.attrHandle[t.toLowerCase()], r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0; return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, t.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) { for (; t = e[i++];)t === e[i] && (r = n.push(i)); for (; r--;)e.splice(n[r], 1) } return D = null, e }, C = t.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += C(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r++];)n += C(t); return n }, T = t.selectors = {
        cacheLength: 50, createPseudo: r, match: pe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(be, we).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = $[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, (function (e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") })) }, ATTR: function (e, n, r) { return function (i) { var o = t.attr(i, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-")) } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1; if (m) { if (o) { for (; g;) { for (f = t; f = f[g];)if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && y) { for (x = (p = (l = (c = (d = (f = m)[P] || (f[P] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === W && l[1]) && l[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (x = p = 0) || h.pop();)if (1 === f.nodeType && ++x && f === t) { c[e] = [W, p, x]; break } } else if (y && (x = p = (l = (c = (d = (f = t)[P] || (f[P] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === W && l[1]), !1 === x) for (; (f = ++p && f && f[g] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++x || (y && ((c = (d = f[P] || (f[P] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [W, x]), f !== t));); return (x -= i) === r || x % r == 0 && x / r >= 0 } } }, PSEUDO: function (e, n) { var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r((function (e, t) { for (var r, i = o(e, n), a = i.length; a--;)e[r = ee(e, i[a])] = !(t[r] = i[a]) })) : function (e) { return o(e, 0, i) }) : o } }, pseudos: {
          not: r((function (e) {
            var t = [], n = [], i = k(e.replace(se, "$1"))
              ; return i[P] ? r((function (e, t, n, r) { for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) })) : function (e, r, o) { return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() }
          })), has: r((function (e) { return function (n) { return t(e, n).length > 0 } })), contains: r((function (e) { return e = e.replace(be, we), function (t) { return (t.textContent || t.innerText || C(t)).indexOf(e) > -1 } })), lang: r((function (e) { return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function (t) { var n; do { if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } })), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === q }, focus: function (e) { return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return !1 === e.disabled }, disabled: function (e) { return !0 === e.disabled }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !T.pseudos.empty(e) }, header: function (e) { return ge.test(e.nodeName) }, input: function (e) { return he.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: l((function () { return [0] })), last: l((function (e, t) { return [t - 1] })), eq: l((function (e, t, n) { return [0 > n ? n + t : n] })), even: l((function (e, t) { for (var n = 0; t > n; n += 2)e.push(n); return e })), odd: l((function (e, t) { for (var n = 1; t > n; n += 2)e.push(n); return e })), lt: l((function (e, t, n) { for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r); return e })), gt: l((function (e, t, n) { for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r); return e }))
        }
      }, T.pseudos.nth = T.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[b] = s(b); for (b in { submit: !0, reset: !0 }) T.pseudos[b] = u(b); return d.prototype = T.filters = T.pseudos, T.setFilters = new d, N = t.tokenize = function (e, n) { var r, i, o, a, s, u, l, c = z[e + " "]; if (c) return n ? 0 : c.slice(0); for (s = e, u = [], l = T.preFilter; s;) { for (a in r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(se, " ") }), s = s.slice(r.length)), T.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length)); if (!r) break } return n ? s.length : s ? t.error(e) : z(e, u).slice(0) }, k = t.compile = function (e, t) { var n, r = [], i = [], o = X[e + " "]; if (!o) { for (t || (t = N(e)), n = t.length; n--;)(o = y(t[n]))[P] ? r.push(o) : i.push(o); (o = X(e, x(i, r))).selector = e } return o }, S = t.select = function (e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, d = !r && N(e = l.selector || e); if (n = n || [], 1 === d.length) { if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) { if (!(t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, we), ye.test(o[0].type) && c(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && f(o))) return K.apply(n, r), n; break } } return (l || k(e, d))(r, t, !_, n, !t || ye.test(e) && c(t.parentNode) || t), n }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i((function (e) { return 1 & e.compareDocumentPosition(H.createElement("div")) })), i((function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") })) || o("type|href|height|width", (function (e, t, n) { return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) })), w.attributes && i((function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") })) || o("value", (function (e, t, n) { return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue })), i((function (e) { return null == e.getAttribute("disabled") })) || o(te, (function (e, t, n) { var r; return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null })), t
    }(e); pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains; var xe = function (e, t, n) { for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) { if (i && pe(e).is(n)) break; r.push(e) } return r }, be = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, we = pe.expr.match.needsContext, Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Ce = /^.[^:#\[\.,]*$/; pe.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, (function (e) { return 1 === e.nodeType }))) }, pe.fn.extend({ find: function (e) { var t, n = [], r = this, i = r.length; if ("string" != typeof e) return this.pushStack(pe(e).filter((function () { for (t = 0; i > t; t++)if (pe.contains(r[t], this)) return !0 }))); for (t = 0; i > t; t++)pe.find(e, r[t], n); return (n = this.pushStack(i > 1 ? pe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n }, filter: function (e) { return this.pushStack(r(this, e || [], !1)) }, not: function (e) { return this.pushStack(r(this, e || [], !0)) }, is: function (e) { return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length } }); var Ee, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ke = pe.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || Ee, "string" == typeof e) { if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ne.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Te.test(r[1]) && pe.isPlainObject(t)) for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } if ((i = re.getElementById(r[2])) && i.parentNode) { if (i.id !== r[2]) return Ee.find(e); this.length = 1, this[0] = i } return this.context = re, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this)) }; ke.prototype = pe.fn, Ee = pe(re); var Se = /^(?:parents|prev(?:Until|All))/, Ae = { children: !0, contents: !0, next: !0, prev: !0 }; pe.fn.extend({ has: function (e) { var t, n = pe(e, this), r = n.length; return this.filter((function () { for (t = 0; r > t; t++)if (pe.contains(this, n[t])) return !0 })) }, closest: function (e, t) { for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), pe.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return xe(e, "parentNode") }, parentsUntil: function (e, t, n) { return xe(e, "parentNode", n) }, next: function (e) { return i(e, "nextSibling") }, prev: function (e) { return i(e, "previousSibling") }, nextAll: function (e) { return xe(e, "nextSibling") }, prevAll: function (e) { return xe(e, "previousSibling") }, nextUntil: function (e, t, n) { return xe(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return xe(e, "previousSibling", n) }, siblings: function (e) { return be((e.parentNode || {}).firstChild, e) }, children: function (e) { return be(e.firstChild) }, contents: function (e) { return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes) } }, (function (e, t) { pe.fn[e] = function (n, r) { var i = pe.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), this.length > 1 && (Ae[e] || (i = pe.uniqueSort(i)), Se.test(e) && (i = i.reverse())), this.pushStack(i) } })); var De, je, Le = /\S+/g; for (je in pe.Callbacks = function (e) { e = "string" == typeof e ? o(e) : pe.extend({}, e); var t, n, r, i, a = [], s = [], u = -1, l = function () { for (i = e.once, r = t = !0; s.length; u = -1)for (n = s.shift(); ++u < a.length;)!1 === a[u].apply(n[0], n[1]) && e.stopOnFalse && (u = a.length, n = !1); e.memory || (n = !1), t = !1, i && (a = n ? [] : "") }, c = { add: function () { return a && (n && !t && (u = a.length - 1, s.push(n)), function t(n) { pe.each(n, (function (n, r) { pe.isFunction(r) ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== pe.type(r) && t(r) })) }(arguments), n && !t && l()), this }, remove: function () { return pe.each(arguments, (function (e, t) { for (var n; (n = pe.inArray(t, a, n)) > -1;)a.splice(n, 1), u >= n && u-- })), this }, has: function (e) { return e ? pe.inArray(e, a) > -1 : a.length > 0 }, empty: function () { return a && (a = []), this }, disable: function () { return i = s = [], a = n = "", this }, disabled: function () { return !a }, lock: function () { return i = !0, n || c.disable(), this }, locked: function () { return !!i }, fireWith: function (e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this }, fire: function () { return c.fireWith(this, arguments), this }, fired: function () { return !!r } }; return c }, pe.extend({ Deferred: function (e) { var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return pe.Deferred((function (n) { pe.each(t, (function (t, o) { var a = pe.isFunction(e[t]) && e[t]; i[o[1]]((function () { var e = a && a.apply(this, arguments); e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments) })) })), e = null })).promise() }, promise: function (e) { return null != e ? pe.extend(e, r) : r } }, i = {}; return r.pipe = r.then, pe.each(t, (function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add((function () { n = s }), t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith })), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t, n, r, i = 0, o = ie.call(arguments), a = o.length, s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0, u = 1 === s ? e : pe.Deferred(), l = function (e, n, r) { return function (i) { n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r) } }; if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s; return s || u.resolveWith(r, o), u.promise() } }), pe.fn.ready = function (e) { return pe.ready.promise().done(e), this }, pe.extend({ isReady: !1, readyWait: 1, holdReady: function (e) { e ? pe.readyWait++ : pe.ready(!0) }, ready: function (e) { (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (De.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready")))) } }), pe.ready.promise = function (t) { if (!De) if (De = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready); else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s); else { re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s); var n = !1; try { n = null == e.frameElement && re.documentElement } catch (e) { } n && n.doScroll && function t() { if (!pe.isReady) { try { n.doScroll("left") } catch (n) { return e.setTimeout(t, 50) } a(), pe.ready() } }() } return De.promise(t) }, pe.ready.promise(), pe(de)) break; de.ownFirst = "0" === je, de.inlineBlockNeedsLayout = !1, pe((function () { var e, t, n, r; (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), (r = re.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r)) })), function () { var e = re.createElement("div"); de.deleteExpando = !0; try { delete e.test } catch (e) { de.deleteExpando = !1 } e = null }(); var He = function (e) { var t = pe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1; return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t) }, qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _e = /([A-Z])/g; pe.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (e) { return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !l(e) }, data: function (e, t, n) { return c(e, t, n) }, removeData: function (e, t) { return d(e, t) }, _data: function (e, t, n) { return c(e, t, n, !0) }, _removeData: function (e, t) { return d(e, t, !0) } }), pe.fn.extend({ data: function (e, t) { var n, r, i, o = this[0], a = o && o.attributes; if (void 0 === e) { if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) { for (n = a.length; n--;)a[n] && (0 === (r = a[n].name).indexOf("data-") && u(o, r = pe.camelCase(r.slice(5)), i[r])); pe._data(o, "parsedAttrs", !0) } return i } return "object" == typeof e ? this.each((function () { pe.data(this, e) })) : arguments.length > 1 ? this.each((function () { pe.data(this, e, t) })) : o ? u(o, e, pe.data(o, e)) : void 0 }, removeData: function (e) { return this.each((function () { pe.removeData(this, e) })) } }), pe.extend({ queue: function (e, t, n) { var r; return e ? (t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []) : void 0 }, dequeue: function (e, t) { t = t || "fx"; var n = pe.queue(e, t), r = n.length, i = n.shift(), o = pe._queueHooks(e, t), a = function () { pe.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return pe._data(e, n) || pe._data(e, n, { empty: pe.Callbacks("once memory").add((function () { pe._removeData(e, t + "queue"), pe._removeData(e, n) })) }) } }), pe.fn.extend({ queue: function (e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each((function () { var n = pe.queue(this, e, t); pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e) })) }, dequeue: function (e) { return this.each((function () { pe.dequeue(this, e) })) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = pe.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = pe._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }), function () { var e; de.shrinkWrapBlocks = function () { return null != e ? e : (e = !1, (n = re.getElementsByTagName("body")[0]) && n.style ? (t = re.createElement("div"), (r = re.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0); var t, n, r } }(); var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Me = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"), Oe = ["Top", "Right", "Bottom", "Left"], Re = function (e, t) { return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e) }, Pe = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === pe.type(n)) for (s in i = !0, n) Pe(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(pe(e), n) })), t)) for (; u > s; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, Be = /^(?:checkbox|radio)$/i, We = /<([\w:-]+)/, Ie = /^$|\/(?:java|ecma)script/i, $e = /^\s+/, ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video"; !function () { var e = re.createElement("div"), t = re.createDocumentFragment(), n = re.createElement("input"); e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), (n = re.createElement("input")).setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, de.attributes = !e.getAttribute(pe.expando) }(); var Xe = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }; Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td; var Ue = /<|&#?\w+;/, Ve = /<tbody/i; !function () { var t, n, r = re.createElement("div"); for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (de[t] = n in e) || (r.setAttribute(n, "t"), de[t] = !1 === r.attributes[n].expando); r = null }(); var Ye = /^(?:input|select|textarea)$/i, Je = /^key/, Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Qe = /^(?:focusinfocus|focusoutblur)$/, Ke = /^([^.]*)(?:\.(.+)|)/; pe.event = { global: {}, add: function (e, t, n, r, i) { var o, a, s, u, l, c, d, f, p, h, g, m = pe._data(e); if (m) { for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = pe.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function (e) { return void 0 === pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments) }, c.elem = e), s = (t = (t || "").match(Le) || [""]).length; s--;)p = g = (o = Ke.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, d = pe.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && pe.expr.match.needsContext.test(i), namespace: h.join(".") }, u), (f = a[p]) || ((f = a[p] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), pe.event.global[p] = !0); e = null } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, d, f, p, h, g, m = pe.hasData(e) && pe._data(e); if (m && (c = m.events)) { for (l = (t = (t || "").match(Le) || [""]).length; l--;)if (p = g = (s = Ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) { for (d = pe.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a)); u && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || pe.removeEvent(e, p, m.handle), delete c[p]) } else for (p in c) pe.event.remove(e, p + t[l], n, r, !0); pe.isEmptyObject(c) && (delete m.handle, pe._removeData(e, "events")) } }, trigger: function (t, n, r, i) { var o, a, s, u, l, c, d, f = [r || re], p = ce.call(t, "type") ? t.type : t, h = ce.call(t, "namespace") ? t.namespace.split(".") : []; if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Qe.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, (t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(r, n))) { if (!i && !l.noBubble && !pe.isWindow(r)) { for (u = l.delegateType || p, Qe.test(u + p) || (s = s.parentNode); s; s = s.parentNode)f.push(s), c = s; c === (r.ownerDocument || re) && f.push(c.defaultView || c.parentWindow || e) } for (d = 0; (s = f[d++]) && !t.isPropagationStopped();)t.type = d > 1 ? u : l.bindType || p, (o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle")) && o.apply(s, n), (o = a && s[a]) && o.apply && He(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault()); if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(f.pop(), n)) && He(r) && a && r[p] && !pe.isWindow(r)) { (c = r[a]) && (r[a] = null), pe.event.triggered = p; try { r[p]() } catch (e) { } pe.event.triggered = void 0, c && (r[a] = c) } return t.result } }, dispatch: function (e) { e = pe.event.fix(e); var t, n, r, i, o, a = [], s = ie.call(arguments), u = (pe._data(this, "events") || {})[e.type] || [], l = pe.event.special[e.type] || {}; if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) { for (a = pe.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation())); return l.postDispatch && l.postDispatch.call(this, e), e.result } }, handlers: function (e, t) { var n, r, i, o, a = [], s = t.delegateCount, u = e.target; if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) { for (r = [], n = 0; s > n; n++)void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [u]).length), r[i] && r.push(o); r.length && a.push({ elem: u, handlers: r }) } return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a }, fix: function (e) { if (e[pe.expando]) return e; var t, n, r, i = e.type, o = e, a = this.fixHooks[i]; for (a || (this.fixHooks[i] = a = Ge.test(i) ? this.mouseHooks : Je.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;)e[n = r[t]] = o[n]; return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, t) { var n, r, i, o = t.button, a = t.fromElement; return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || re).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== b() && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === b() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function () { return pe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function (e) { return pe.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n) { var r = pe.extend(new pe.Event, n, { type: e, isSimulated: !0 }); pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault() } }, pe.removeEvent = re.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n)) }, pe.Event = function (e, t) { return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : x) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void (this[pe.expando] = !0)) : new pe.Event(e, t) }, pe.Event.prototype = { constructor: pe.Event, isDefaultPrevented: x, isPropagationStopped: x, isImmediatePropagationStopped: x, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, pe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, (function (e, t) { pe.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } })), de.submit || (pe.event.special.submit = { setup: function () { return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", (function (e) { var t = e.target, n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0; n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", (function (e) { e._submitBubble = !0 })), pe._data(n, "submit", !0)) })) }, postDispatch: function (e) { e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e)) }, teardown: function () { return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit") } }), de.change || (pe.event.special.change = { setup: function () { return Ye.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", (function (e) { "checked" === e.originalEvent.propertyName && (this._justChanged = !0) })), pe.event.add(this, "click._change", (function (e) { this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e) }))), !1) : void pe.event.add(this, "beforeactivate._change", (function (e) { var t = e.target; Ye.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", (function (e) { !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e) })), pe._data(t, "change", !0)) })) }, handle: function (e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { return pe.event.remove(this, "._change"), !Ye.test(this.nodeName) } }), de.focusin || pe.each({ focus: "focusin", blur: "focusout" }, (function (e, t) { var n = function (e) { pe.event.simulate(t, e.target, pe.event.fix(e)) }; pe.event.special[t] = { setup: function () { var r = this.ownerDocument || this, i = pe._data(r, t); i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1) }, teardown: function () { var r = this.ownerDocument || this, i = pe._data(r, t) - 1; i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t)) } } })), pe.fn.extend({ on: function (e, t, n, r) { return w(this, e, t, n, r) }, one: function (e, t, n, r) { return w(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), this.each((function () { pe.event.remove(this, e, n, t) })) }, trigger: function (e, t) { return this.each((function () { pe.event.trigger(e, t, this) })) }, triggerHandler: function (e, t) { var n = this[0]; return n ? pe.event.trigger(e, t, n, !0) : void 0 } }); var Ze = / jQuery\d+="(?:null|\d+)"/g, et = new RegExp("<(?:" + ze + ")[\\s/>]", "i"), tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, nt = /<script|<style|<link/i, rt = /checked\s*(?:[^=]|=\s*.checked.)/i, it = /^true\/(.*)/, ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, at = p(re).appendChild(re.createElement("div")); pe.extend({ htmlPrefilter: function (e) { return e.replace(tt, "<$1></$2>") }, clone: function (e, t, n) { var r, i, o, a, s, u = pe.contains(e.ownerDocument, e); if (de.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(o = at.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a)r[a] && k(i, r[a]); if (t) if (n) for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++)N(i, r[a]); else N(e, o); return (r = h(o, "script")).length > 0 && g(r, !u && h(e, "script")), r = s = i = null, o }, cleanData: function (e, t) { for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, l = de.attributes, c = pe.event.special; null != (n = e[a]); a++)if ((t || He(n)) && (o = (i = n[s]) && u[i])) { if (o.events) for (r in o.events) c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle); u[i] && (delete u[i], l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(i)) } } }), pe.fn.extend({ domManip: S, detach: function (e) { return A(this, e, !0) }, remove: function (e) { return A(this, e) }, text: function (e) { return Pe(this, (function (e) { return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e)) }), null, e, arguments.length) }, append: function () { return S(this, arguments, (function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, e).appendChild(e) })) }, prepend: function () { return S(this, arguments, (function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = T(this, e); t.insertBefore(e, t.firstChild) } })) }, before: function () { return S(this, arguments, (function (e) { this.parentNode && this.parentNode.insertBefore(e, this) })) }, after: function () { return S(this, arguments, (function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) })) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++) { for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;)e.removeChild(e.firstChild); e.options && pe.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map((function () { return pe.clone(this, e, t) })) }, html: function (e) { return Pe(this, (function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0; if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !$e.test(e)) && !Xe[(We.exec(e) || ["", ""])[1].toLowerCase()]) { e = pe.htmlPrefilter(e); try { for (; r > n; n++)1 === (t = this[n] || {}).nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }), null, e, arguments.length) }, replaceWith: function () { var e = []; return S(this, arguments, (function (t) { var n = this.parentNode; pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this)) }), e) } }), pe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, (function (e, t) { pe.fn[e] = function (e) { for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; a >= r; r++)n = r === a ? this : this.clone(!0), pe(o[r])[t](n), ae.apply(i, n.get()); return this.pushStack(i) } })); var st, ut = { HTML: "block", BODY: "block" }, lt = /^margin/, ct = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"), dt = function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i }, ft = re.documentElement; !function () {
      var t, n, r, i, o, a, s = re.createElement("div"), u = re.createElement("div"); if (u.style) {
        function l() {
          var l, c, d = re.documentElement; d.appendChild(s), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = r = a = !1, n = o = !0, e.getComputedStyle && (c = e.getComputedStyle(u), t = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || { width: "4px" }).width, u.style.marginRight = "50%", n = "4px" === (c || { marginRight: "4px" }).marginRight, (l = u.appendChild(re.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", u.style.width = "1px", o = !parseFloat((e.getComputedStyle(l) || {}).marginRight), u.removeChild(l)), u.style.display = "none", (i = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            u.childNodes[0].style.borderCollapse = "separate", (l = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (i = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", i = 0 === l[0].offsetHeight)), d.removeChild(s)
        } u.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === u.style.opacity, de.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === u.style.backgroundClip, (s = re.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", s.appendChild(u), de.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pe.extend(de, { reliableHiddenOffsets: function () { return null == t && l(), i }, boxSizingReliable: function () { return null == t && l(), r }, pixelMarginRight: function () { return null == t && l(), n }, pixelPosition: function () { return null == t && l(), t }, reliableMarginRight: function () { return null == t && l(), o }, reliableMarginLeft: function () { return null == t && l(), a } })
      }
    }(); var pt, ht, gt = /^(top|right|bottom|left)$/; e.getComputedStyle ? (pt = function (t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) }, ht = function (e, t, n) { var r, i, o, a, s = e.style; return "" !== (a = (n = n || pt(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !de.pixelMarginRight() && ct.test(a) && lt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + "" }) : ft.currentStyle && (pt = function (e) { return e.currentStyle }, ht = function (e, t, n) { var r, i, o, a, s = e.style; return null == (a = (n = n || pt(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), ct.test(a) && !gt.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto" }); var mt = /alpha\([^)]*\)/i, vt = /opacity\s*=\s*([^)]*)/i, yt = /^(none|table(?!-c[ea]).+)/, xt = new RegExp("^(" + Fe + ")(.*)$", "i"), bt = { position: "absolute", visibility: "hidden", display: "block" }, wt = { letterSpacing: "0", fontWeight: "400" }, Tt = ["Webkit", "O", "Moz", "ms"], Ct = re.createElement("div").style; pe.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = ht(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: de.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = pe.camelCase(t), u = e.style; if (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t]; if ("string" === (o = typeof n) && (i = Me.exec(n)) && i[1] && (n = f(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !a || !("set" in a) || void 0 !== (n = a.set(e, n, r)))) try { u[t] = n } catch (e) { } } }, css: function (e, t, n, r) { var i, o, a, s = pe.camelCase(t); return t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), (a = pe.cssHooks[t] || pe.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = ht(e, t, r)), "normal" === o && t in wt && (o = wt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o } }), pe.each(["height", "width"], (function (e, t) { pe.cssHooks[t] = { get: function (e, n, r) { return n ? yt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, bt, (function () { return M(e, t, r) })) : M(e, t, r) : void 0 }, set: function (e, n, r) { var i = r && pt(e); return _(e, n, r ? F(e, t, r, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0) } } })), de.opacity || (pe.cssHooks.opacity = { get: function (e, t) { return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = mt.test(o) ? o.replace(mt, i) : o + " " + i) } }), pe.cssHooks.marginRight = L(de.reliableMarginRight, (function (e, t) { return t ? dt(e, { display: "inline-block" }, ht, [e, "marginRight"]) : void 0 })), pe.cssHooks.marginLeft = L(de.reliableMarginLeft, (function (e, t) { return t ? (parseFloat(ht(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, { marginLeft: 0 }, (function () { return e.getBoundingClientRect().left })) : 0)) + "px" : void 0 })), pe.each({ margin: "", padding: "", border: "Width" }, (function (e, t) { pe.cssHooks[e + t] = { expand: function (n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, lt.test(e) || (pe.cssHooks[e + t].set = _) })), pe.fn.extend({ css: function (e, t) { return Pe(this, (function (e, t, n) { var r, i, o = {}, a = 0; if (pe.isArray(t)) { for (r = pt(e), i = t.length; i > a; a++)o[t[a]] = pe.css(e, t[a], !1, r); return o } return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t) }), e, t, arguments.length > 1) }, show: function () { return q(this, !0) }, hide: function () { return q(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () { Re(this) ? pe(this).show() : pe(this).hide() })) } }), pe.Tween = O, O.prototype = { constructor: O, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px") }, cur: function () { var e = O.propHooks[this.prop]; return e && e.get ? e.get(this) : O.propHooks._default.get(this) }, run: function (e) { var t, n = O.propHooks[this.prop]; return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this } }, O.prototype.init.prototype = O.prototype, O.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit) } } }, O.propHooks.scrollTop = O.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, pe.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, pe.fx = O.prototype.init, pe.fx.step = {}; var Et, Nt, kt = /^(?:toggle|show|hide)$/, St = /queueHooks$/; pe.Animation = pe.extend($, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return f(n.elem, e, Me.exec(t), n), n }] }, tweener: function (e, t) { pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le); for (var n, r = 0, i = e.length; i > r; r++)n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t) }, prefilters: [W], prefilter: function (e, t) { t ? $.prefilters.unshift(e) : $.prefilters.push(e) } }), pe.speed = function (e, t, n) { var r = e && "object" == typeof e ? pe.extend({}, e) : { complete: n || !n && t || pe.isFunction(e) && e, duration: e, easing: n && t || t && !pe.isFunction(t) && t }; return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue) }, r }, pe.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(Re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = pe.isEmptyObject(e), o = pe.speed(t, n, r), a = function () { var t = $(this, pe.extend({}, e), o); (i || pe._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, t, n) { var r = function (e) { var t = e.stop; delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function () { var t = !0, i = null != e && e + "queueHooks", o = pe.timers, a = pe._data(this); if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && St.test(i) && r(a[i]); for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); !t && n || pe.dequeue(this, e) })) }, finish: function (e) { return !1 !== e && (e = e || "fx"), this.each((function () { var t, n = pe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = pe.timers, a = r ? r.length : 0; for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this); delete n.finish })) } }), pe.each(["toggle", "show", "hide"], (function (e, t) { var n = pe.fn[t]; pe.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i) } })), pe.each({ slideDown: P("show"), slideUp: P("hide"), slideToggle: P("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, (function (e, t) { pe.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } })), pe.timers = [], pe.fx.tick = function () { var e, t = pe.timers, n = 0; for (Et = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1); t.length || pe.fx.stop(), Et = void 0 }, pe.fx.timer = function (e) { pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop() }, pe.fx.interval = 13, pe.fx.start = function () { Nt || (Nt = e.setInterval(pe.fx.tick, pe.fx.interval)) }, pe.fx.stop = function () { e.clearInterval(Nt), Nt = null }, pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, pe.fn.delay = function (t, n) { return t = pe.fx && pe.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function (n, r) { var i = e.setTimeout(n, t); r.stop = function () { e.clearTimeout(i) } })) }, function () { var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), i = r.appendChild(re.createElement("option")); (n = re.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = i.selected, de.enctype = !!re.createElement("form").enctype, r.disabled = !0, de.optDisabled = !i.disabled, (t = re.createElement("input")).setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value }(); var At = /\r/g, Dt = /[\x20\t\r\n\f]+/g; pe.fn.extend({ val: function (e) { var t, n, r, i = this[0]; return arguments.length ? (r = pe.isFunction(e), this.each((function (n) { var i; 1 === this.nodeType && (null == (i = r ? e.call(this, n, pe(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, (function (e) { return null == e ? "" : e + "" }))), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) }))) : i ? (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(At, "") : null == n ? "" : n : void 0 } }), pe.extend({ valHooks: { option: { get: function (e) { var t = pe.find.attr(e, "value"); return null != t ? t : pe.trim(pe.text(e)).replace(Dt, " ") } }, select: { get: function (e) { for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (((n = r[u]).selected || u === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) { if (t = pe(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;)if (r = i[a], pe.inArray(pe.valHooks.option.get(r), o) > -1) try { r.selected = n = !0 } catch (e) { r.scrollHeight } else r.selected = !1; return n || (e.selectedIndex = -1), i } } } }), pe.each(["radio", "checkbox"], (function () { pe.valHooks[this] = { set: function (e, t) { return pe.isArray(t) ? e.checked = pe.inArray(pe(e).val(), t) > -1 : void 0 } }, de.checkOn || (pe.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) })); var jt, Lt, Ht = pe.expr.attrHandle, qt = /^(?:checked|selected)$/i, _t = de.getSetAttribute, Ft = de.input; pe.fn.extend({ attr: function (e, t) { return Pe(this, pe.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each((function () { pe.removeAttr(this, e) })) } }), pe.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Lt : jt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = pe.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(Le); if (o && 1 === e.nodeType) for (; n = o[i++];)r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Ft && _t || !qt.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(_t ? n : r) } }), Lt = { set: function (e, t, n) { return !1 === t ? pe.removeAttr(e, n) : Ft && _t || !qt.test(n) ? e.setAttribute(!_t && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n } }, pe.each(pe.expr.match.bool.source.match(/\w+/g), (function (e, t) { var n = Ht[t] || pe.find.attr; Ft && _t || !qt.test(t) ? Ht[t] = function (e, t, r) { var i, o; return r || (o = Ht[t], Ht[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ht[t] = o), i } : Ht[t] = function (e, t, n) { return n ? void 0 : e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null } })), Ft && _t || (pe.attrHooks.value = { set: function (e, t, n) { return pe.nodeName(e, "input") ? void (e.defaultValue = t) : jt && jt.set(e, t, n) } }), _t || (jt = { set: function (e, t, n) { var r = e.getAttributeNode(n); return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, Ht.id = Ht.name = Ht.coords = function (e, t, n) { var r; return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null }, pe.valHooks.button = { get: function (e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : void 0 }, set: jt.set }, pe.attrHooks.contenteditable = { set: function (e, t, n) { jt.set(e, "" !== t && t, n) } }, pe.each(["width", "height"], (function (e, t) { pe.attrHooks[t] = { set: function (e, n) { return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } }))), de.style || (pe.attrHooks.style = { get: function (e) { return e.style.cssText || void 0 }, set: function (e, t) { return e.style.cssText = t + "" } }); var Mt = /^(?:input|select|textarea|button|object)$/i, Ot = /^(?:a|area)$/i; pe.fn.extend({ prop: function (e, t) { return Pe(this, pe.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = pe.propFix[e] || e, this.each((function () { try { this[e] = void 0, delete this[e] } catch (e) { } })) } }), pe.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = pe.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), de.hrefNormalized || pe.each(["href", "src"], (function (e, t) { pe.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } })), de.optSelected || (pe.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () { pe.propFix[this.toLowerCase()] = this })), de.enctype || (pe.propFix.enctype = "encoding"); var Rt = /[\t\r\n\f]/g; pe.fn.extend({ addClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (pe.isFunction(e)) return this.each((function (t) { pe(this).addClass(e.call(this, t, z(this))) })); if ("string" == typeof e && e) for (t = e.match(Le) || []; n = this[u++];)if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Rt, " ")) { for (a = 0; o = t[a++];)r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = pe.trim(r)) && pe.attr(n, "class", s) } return this }, removeClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (pe.isFunction(e)) return this.each((function (t) { pe(this).removeClass(e.call(this, t, z(this))) })); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof e && e) for (t = e.match(Le) || []; n = this[u++];)if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Rt, " ")) { for (a = 0; o = t[a++];)for (; r.indexOf(" " + o + " ") > -1;)r = r.replace(" " + o + " ", " "); i !== (s = pe.trim(r)) && pe.attr(n, "class", s) } return this }, toggleClass: function (e, t) { var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each((function (n) { pe(this).toggleClass(e.call(this, n, z(this), t), t) })) : this.each((function () { var t, r, i, o; if ("string" === n) for (r = 0, i = pe(this), o = e.match(Le) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = z(this)) && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || "")) })) }, hasClass: function (e) { var t, n, r = 0; for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + z(n) + " ").replace(Rt, " ").indexOf(t) > -1) return !0; return !1 } }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function (e, t) { pe.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } })), pe.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }); var Pt = e.location, Bt = pe.now(), Wt = /\?/, It = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; pe.parseJSON = function (t) { if (e.JSON && e.JSON.parse) return e.JSON.parse(t + ""); var n, r = null, i = pe.trim(t + ""); return i && !pe.trim(i.replace(It, (function (e, t, i, o) { return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "") }))) ? Function("return " + i)() : pe.error("Invalid JSON: " + t) }, pe.parseXML = function (t) { var n; if (!t || "string" != typeof t) return null; try { e.DOMParser ? n = (new e.DOMParser).parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t)) } catch (e) { n = void 0 } return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n }; var $t = /#.*$/, zt = /([?&])_=[^&]*/, Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Vt = /^(?:GET|HEAD)$/, Yt = /^\/\//, Jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Gt = {}, Qt = {}, Kt = "*/".concat("*"), Zt = Pt.href, en = Jt.exec(Zt.toLowerCase()) || []; pe.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Zt, type: "GET", isLocal: Ut.test(en[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": pe.parseJSON, "text xml": pe.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e) }, ajaxPrefilter: X(Gt), ajaxTransport: X(Qt), ajax: function (t, n) { function r(t, n, r, i) { var o, d, y, x, w, C = n; 2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, r && (x = Y(f, T, r)), x = J(f, x, T, o), o ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (pe.lastModified[a] = w), (w = T.getResponseHeader("etag")) && (pe.etag[a] = w)), 204 === t || "HEAD" === f.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, d = x.data, o = !(y = x.error))) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", o ? g.resolveWith(p, [d, C, T]) : g.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, f, o ? d : y]), m.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, f]), --pe.active || pe.event.trigger("ajaxStop"))) } "object" == typeof t && (n = t, t = void 0), n = n || {}; var i, o, a, s, u, l, c, d, f = pe.ajaxSetup({}, n), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event, g = pe.Deferred(), m = pe.Callbacks("once memory"), v = f.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === b) { if (!d) for (d = {}; t = Xt.exec(s);)d[t[1].toLowerCase()] = t[2]; t = d[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === b ? s : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return b || (e = x[n] = x[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return b || (f.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > b) for (t in e) v[t] = [v[t], e[t]]; else T.always(e[T.status]); return this }, abort: function (e) { var t = e || w; return c && c.abort(t), r(0, t), this } }; if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((t || f.url || Zt) + "").replace($t, "").replace(Yt, en[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = pe.trim(f.dataType || "*").toLowerCase().match(Le) || [""], null == f.crossDomain && (i = Jt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = pe.param(f.data, f.traditional)), U(Gt, f, n, T), 2 === b) return T; for (o in (l = pe.event && f.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Vt.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Wt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = zt.test(a) ? a.replace(zt, "$1_=" + Bt++) : a + (Wt.test(a) ? "&" : "?") + "_=" + Bt++)), f.ifModified && (pe.lastModified[a] && T.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && T.setRequestHeader("If-None-Match", pe.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : f.accepts["*"]), f.headers) T.setRequestHeader(o, f.headers[o]); if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === b)) return T.abort(); for (o in w = "abort", { success: 1, error: 1, complete: 1 }) T[o](f[o]); if (c = U(Qt, f, n, T)) { if (T.readyState = 1, l && h.trigger("ajaxSend", [T, f]), 2 === b) return T; f.async && f.timeout > 0 && (u = e.setTimeout((function () { T.abort("timeout") }), f.timeout)); try { b = 1, c.send(y, r) } catch (e) { if (!(2 > b)) throw e; r(-1, e) } } else r(-1, "No Transport"); return T }, getJSON: function (e, t, n) { return pe.get(e, t, n, "json") }, getScript: function (e, t) { return pe.get(e, void 0, t, "script") } }), pe.each(["get", "post"], (function (e, t) { pe[t] = function (e, n, r, i) { return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({ url: e, type: t, dataType: i, data: n, success: r }, pe.isPlainObject(e) && e)) } })), pe._evalUrl = function (e) { return pe.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, pe.fn.extend({ wrapAll: function (e) { if (pe.isFunction(e)) return this.each((function (t) { pe(this).wrapAll(e.call(this, t)) })); if (this[0]) { var t = pe(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map((function () { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild; return e })).append(this) } return this }, wrapInner: function (e) { return pe.isFunction(e) ? this.each((function (t) { pe(this).wrapInner(e.call(this, t)) })) : this.each((function () { var t = pe(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) })) }, wrap: function (e) { var t = pe.isFunction(e); return this.each((function (n) { pe(this).wrapAll(t ? e.call(this, n) : e) })) }, unwrap: function () { return this.parent().each((function () { pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes) })).end() } }), pe.expr.filters.hidden = function (e) { return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e) }, pe.expr.filters.visible = function (e) { return !pe.expr.filters.hidden(e) }; var tn = /%20/g, nn = /\[\]$/, rn = /\r?\n/g, on = /^(?:submit|button|image|reset|file)$/i, an = /^(?:input|select|textarea|keygen)/i; pe.param = function (e, t) { var n, r = [], i = function (e, t) { t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, (function () { i(this.name, this.value) })); else for (n in e) K(n, e[n], t, i); return r.join("&").replace(tn, "+") }, pe.fn.extend({ serialize: function () { return pe.param(this.serializeArray()) }, serializeArray: function () { return this.map((function () { var e = pe.prop(this, "elements"); return e ? pe.makeArray(e) : this })).filter((function () { var e = this.type; return this.name && !pe(this).is(":disabled") && an.test(this.nodeName) && !on.test(e) && (this.checked || !Be.test(e)) })).map((function (e, t) { var n = pe(this).val(); return null == n ? null : pe.isArray(n) ? pe.map(n, (function (e) { return { name: t.name, value: e.replace(rn, "\r\n") } })) : { name: t.name, value: n.replace(rn, "\r\n") } })).get() } }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () { return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee() } : Z; var sn = 0, un = {}, ln = pe.ajaxSettings.xhr(); e.attachEvent && e.attachEvent("onunload", (function () { for (var e in un) un[e](void 0, !0) })), de.cors = !!ln && "withCredentials" in ln, (ln = de.ajax = !!ln) && pe.ajaxTransport((function (t) { var n; if (!t.crossDomain || de.cors) return { send: function (r, i) { var o, a = t.xhr(), s = ++sn; if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o]; for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + ""); a.send(t.hasContent && t.data || null), n = function (e, r) { var o, u, l; if (n && (r || 4 === a.readyState)) if (delete un[s], n = void 0, a.onreadystatechange = pe.noop, r) 4 !== a.readyState && a.abort(); else { l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText); try { u = a.statusText } catch (e) { u = "" } o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404 } l && i(o, u, l, a.getAllResponseHeaders()) }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = un[s] = n : n() }, abort: function () { n && n(void 0, !0) } } })), pe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return pe.globalEval(e), e } } }), pe.ajaxPrefilter("script", (function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) })), pe.ajaxTransport("script", (function (e) { if (e.crossDomain) { var t, n = re.head || pe("head")[0] || re.documentElement; return { send: function (r, i) { (t = re.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function () { t && t.onload(void 0, !0) } } } })); var cn = [], dn = /(=)\?(?=&|$)|\?\?/; pe.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = cn.pop() || pe.expando + "_" + Bt++; return this[e] = !0, e } }), pe.ajaxPrefilter("json jsonp", (function (t, n, r) { var i, o, a, s = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data"); return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + i) : !1 !== t.jsonp && (t.url += (Wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () { return a || pe.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function () { a = arguments }, r.always((function () { void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, cn.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0 })), "script") : void 0 })), pe.parseHTML = function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || re; var r = Te.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = v([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes)) }; var fn = pe.fn.load; pe.fn.load = function (e, t, n) { if ("string" != typeof e && fn) return fn.apply(this, arguments); var r, i, o, a = this, s = e.indexOf(" "); return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done((function (e) { o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e) })).always(n && function (e, t) { a.each((function () { n.apply(this, o || [e.responseText, t, e]) })) }), this }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) { pe.fn[t] = function (e) { return this.on(t, e) } })), pe.expr.filters.animated = function (e) { return pe.grep(pe.timers, (function (t) { return e === t.elem })).length }, pe.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = pe.css(e, "position"), c = pe(e), d = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = pe.css(e, "top"), u = pe.css(e, "left"), ("absolute" === l || "fixed" === l) && pe.inArray("auto", [o, u]) > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : c.css(d) } }, pe.fn.extend({ offset: function (e) { if (arguments.length) return void 0 === e ? this : this.each((function (t) { pe.offset.setOffset(this, e, t) })); var t, n, r = { top: 0, left: 0 }, i = this[0], o = i && i.ownerDocument; return o ? (t = o.documentElement, pe.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), { top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : r) : void 0 }, position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - pe.css(r, "marginTop", !0), left: t.left - n.left - pe.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map((function () { for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");)e = e.offsetParent; return e || ft })) } }), pe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, (function (e, t) { var n = /Y/.test(t); pe.fn[e] = function (r) { return Pe(this, (function (e, r, i) { var o = te(e); return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i) }), e, r, arguments.length, null) } })), pe.each(["top", "left"], (function (e, t) { pe.cssHooks[t] = L(de.pixelPosition, (function (e, n) { return n ? (n = ht(e, t), ct.test(n) ? pe(e).position()[t] + "px" : n) : void 0 })) })), pe.each({ Height: "height", Width: "width" }, (function (e, t) { pe.each({ padding: "inner" + e, content: t, "": "outer" + e }, (function (n, r) { pe.fn[r] = function (r, i) { var o = arguments.length && (n || "boolean" != typeof r), a = n || (!0 === r || !0 === i ? "margin" : "border"); return Pe(this, (function (t, n, r) { var i; return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a) }), t, o ? r : void 0, o, null) } })) })), pe.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), pe.fn.size = function () { return this.length }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function () { return pe })); var pn = e.jQuery, hn = e.$; return pe.noConflict = function (t) { return e.$ === pe && (e.$ = hn), t && e.jQuery === pe && (e.jQuery = pn), pe }, t || (e.jQuery = e.$ = pe), pe
  }));
  var jq = $.noConflict(true);
} else {
  var jq = $;
}

function _isAMP() {
  return typeof AMP !== "undefined";
}

function isEmptyOrNull(val) {
  return (typeof val == 'string' && val.trim() == '') || val == null
}

function preparePageForScraping() {
  return Promise.resolve();
}

function getOfferPrice(product) {
  if (!product) {
    return null;
  }
  let price = null;
  if (Array.isArray(product.offers)) {
    for (offer of product.offers) {
      price = offer.price || offer.highPrice || offer.lowPrice;
      if (price) {
        break;
      }
    }
  }
  else if (product && product.hasOwnProperty('offers')) {
    price = product.offers.price || product.offers.highPrice || product.offers.lowPrice;
  }

  return price ? "$" + price : '';
}

function getProductData() {
  const data = jq('script[type="application/ld+json"]');

  if (data.length == 0 || !data) {
    return;
  }

  let product = null;
  let json = null;
  for (let i = 0; i < data.length; i++) {
    try {
      json = JSON.parse(data[i].innerText.replace(/(\r\n|\n|\r)/gm, ""));
    }
    catch (e) {
      continue;
    }

    if (!json) {
      return null;
    }

    if (json && Array.isArray(json)) {
      product = json.find(schema => schema["@type"] === "Product" && schema.hasOwnProperty("offers"));
    }
    else if (json && json["@type"] === "Product" && json.hasOwnProperty("offers")) {
      product = json;
    }
    else if (json && json.hasOwnProperty("@graph")) {
      if (Array.isArray(json["@graph"])) {
        product = json["@graph"].find(schema => schema["@type"] === "Product" && schema.hasOwnProperty("offers"));
      }
    }
    if (product) {
      break;
    }
  }
  return product;
}

function getProductDefaults() {
  /*
   * Sanity check for scraped datum.
   * If it's over this length, we're probably scraping incorrectly, so let's ignore.
   *
   * This and the storage mechanism would need to be changed if we want to scrape more.
   */
  _MAX_EXPECTED_SCRAPED_CHARACTERS = 255

  function _addQueryParamToUrl(url, key, value) {
    if (!key || !value) {
      return url;
    }

    value = encodeURIComponent(value);
    var hasQueryString = url.match(/\?/);
    var query_string = '';

    if (hasQueryString) {
      query_string = "&" + key + "=" + value;
    } else {
      query_string = "?" + key + "=" + value;
    }

    return url + query_string;
  }

  function _clean_price(priceStr) {
    priceStr = priceStr || ''; // saftey check in case we pass in null/undefined
    // See: http://stackoverflow.com/questions/5917082/regular-expression-to-match-numbers-with-or-without-commas-and-decimals-in-text
    var priceMatch = priceStr.match(/(?:^|\s|\${1})(\d*\.?\d+|\d{1,3}(?:,\d{3})*(?:\.\d+)?)(?!\S)/);
    if (priceMatch) {
      var price = priceMatch[0]
      if (!price.match(/^\$.*/)) {
        price = '$' + price;
      }
      return price;
    } else {
      return null;
    }
  }

  function _clean_scraped_data(scraped_data) {
    var validScrapedData = [];

    if (Array.isArray(scraped_data)) {
      // Find all valid objects and send them home
      for (var i = 0; i < scraped_data.length; i++) {
        if (_is_valid_scraped_data(scraped_data[i])) {
          validScrapedData.push(scraped_data[i])
        }
      }
    }

    return validScrapedData
  }

  function _clean_image_urls(imgs) {
    var validImgs = [];
    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i]) {
        if (imgs[i].indexOf('data:image/svg') == 0) {
          // don't add svgs
        } else if (imgs[i].indexOf('//') == 0) {
          validImgs.push('http:' + imgs[i]);
        } else {
          validImgs.push(imgs[i]);
        }
      }
    }
    return validImgs;
  }

  function _append_variants_to_title(title, variants) {
    if (title) {
      var newTitle = title;
      if (variants && variants.length != 0) {
        for (var i = 0; i < variants.length; i++) {
          var variantText = jq(variants[i]).text().trim();
          if (!variantText.match(/(choose|select)/i) && !title.match(new RegExp(escapeRegExInput(variantText), "i"))) {
            newTitle = newTitle + " - " + variantText;
          }
        }
      }
      return newTitle;
    }
    return "";
  }

  // if the scraper pulls an empty href (which happens when it's run
  // from the share extension) and we have a valid url passed into the scraper
  // return the url passed through when requesting the scraper.
  // function _default_url() {
  //   if (window.location.href == "about:blank" && window.location.href.length) {
  //     return window.location.href;
  //   } else {
  //     return window.location.href;
  //   }
  // }

  function unique(array) {
    var uniques = [];
    for (var i = 0; i < array.length; i++) {
      if (uniques.indexOf(array[i]) == -1) {
        uniques.push(array[i]);
      }
    }
    return uniques;
  }

  function escapeRegExInput(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Utility method to get objects that may or may not exist
  // Adapted from: https://davidwalsh.name/jquery-objects

  function pluck(name, context) {
    var keys = name.split(".");
    var result = context || window;
    for (var i = 1, k; result && (k = keys[i]); i++) {
      result = (k in result ? result[k] : undefined);
    }
    return result;
  };

  function _default_title() {
    const product = getProductData();

    var title = jq('head title').text();
    if (!title) {
      title = jq('title').first().text();
    }
    if (product && product.hasOwnProperty("name")) {
      return product.name;
    }
    return title;
  }

  // function _default_price() {
  //   // First, look for an og:price
  //   var ogPrice = jq('meta[property="og:price:amount"]').attr('content')
  //   if (ogPrice) {
  //     return ogPrice;
  //   }
  //   // Try alternate opengraph format
  //   var altOgPrice = jq('meta[property="product:price:amount"]').attr('content')
  //   if (altOgPrice) {
  //     return altOgPrice;
  //   }

  //   //Try looking at structured data
  //   const product = getProductData();
  //   const structPrice = getOfferPrice(product);
  //   if (structPrice) {
  //     return structPrice;
  //   }

  //   // Otherwise, scrape anything that looks like a price
  //   var patt = /[\d,]{1,5}\.\d{2}[^\d"']/g
  //   var price_matches = jq('body').text().match(patt) || []
  //   if (price_matches.length > 0) {
  //     for (var i = 0; i < price_matches.length; i++) {
  //       price_matches[i] = price_matches[i].substring(0, price_matches[i].length - 1) // remove last char
  //     }
  //   }
  //   if (price_matches.length > 1) {
  //     var price = price_matches[0]
  //     for (var i = 1; i < price_matches.length; i++) {
  //       if (price != price_matches[i]) {
  //         return '';
  //       }
  //     }
  //     return price;
  //   } else if (price_matches.length == 1) {
  //     return price_matches[0];
  //   }
  //   return '';
  // }

  /* Override to define an array of scraped data to send home
   *
   * @example
   *   function _default_scraped_data() {
   *      return [ _isbn13(_default_isbn13()),
   *               _gtin(_default_upc()) ]
   *   }
   *
   *  @return An array of objects defined by _scraped_datum
   */
  function _default_scraped_data() {
    return [];
  }

  function _getShadowRoot(containerIds) {
    var shadowRoot = null;
    if (!Array.isArray(containerIds)) {
      containerIds = [containerIds];
    }

    var i = 0;
    do {
      var container = document.getElementById(containerIds[i]);
      if (container && container.shadowRoot) {
        shadowRoot = container.shadowRoot;
      }
      i++;
    } while (!shadowRoot && i < containerIds.length)

    return shadowRoot;
  }

  function _getAmpDom(containerIds) {
    var shadowRoot = _getShadowRoot(containerIds)

    if (shadowRoot) {
      return jq(shadowRoot.innerHTML);
    }
    else {
      return jq(null);
    }
  }

  /**
   * Scraped data (or datum) is a way to wrap any data you wish to phone home.
   *
   * Don't use _scraped_datum directly. Instead, use _gtin(), _isbn13(), etc.
   *
   */
  function _scraped_datum(key, value) {
    // Sanity checks
    if (!key || !value || value.length > _MAX_EXPECTED_SCRAPED_CHARACTERS) {
      return _ignored_datum()
    }

    return { key: key, value: value }
  }

  function _ignored_datum() {
    return { key: 'ignore' }
  }

  function _gtin(gtin_string) {
    return _scraped_datum("gtin", gtin_string)
  }

  function _isbn13(isbn13_string) {
    return _scraped_datum("isbn13", isbn13_string)
  }

  function _asin(asin_string) {
    return _scraped_datum("asin", asin_string)
  }

  function _tcin(tcin_string) {
    return _scraped_datum("tcin", tcin_string)
  }

  function _categories(category_string) {
    return _scraped_datum("categories", category_string)
  }

  function _bbb_sku(sku_string) {
    return _scraped_datum("bbb_sku", sku_string)
  }

  function _pbk_sku(sku_string) {
    return _scraped_datum("pbk_sku", sku_string)
  }

  function _pbk_catalog(category_string) {
    return _scraped_datum("pbk_catalog", category_string)
  }

  function _walmart_sku(sku_string) {
    return _scraped_datum("walmart_sku", sku_string)
  }

  function _brand(brand_string) {
    return _scraped_datum("brand", brand_string)
  }

  function _color(color_string) {
    return _scraped_datum("color", color_string)
  }

  function _count(count_string) {
    return _scraped_datum("count", count_string)
  }

  function _num_options(num_options) {
    return _scraped_datum("num_options", (num_options || 0).toString())
  }

  function _scent(scent_string) {
    return _scraped_datum("scent", scent_string)
  }

  function _size(size_string) {
    return _scraped_datum("size", size_string)
  }

  function _book_format(book_format_string) {
    return _scraped_datum("book_format", book_format_string)
  }

  function _style(style_string) {
    return _scraped_datum("style", style_string)
  }

  function _is_price_hidden(is_hidden) {
    // only save when it is hidden
    return is_hidden ? _scraped_datum("is_price_hidden", is_hidden) : null
  }

  // Validate that we have all relevant pieces of information
  function _is_valid_scraped_data(scraped_datum) {
    return (scraped_datum && typeof (scraped_datum) == 'object' && scraped_datum.key && scraped_datum.value)
  }

  // Override to collect UPC/gtin information
  // function _default_upc() {
  //   // noop by default
  // }

  // Override to collect category information
  function _default_category_string() {
    // noop by default
  }

  function _default_images() {
    return jq('img:visible');
  }
  function _og_image_urls() {
    var urls = [];
    var ogImages = jq('meta[property="og:image"]');
    for (var i = ogImages.length - 1; i >= 0; i--) {
      var ogImageUrl = jq(ogImages[i]).attr('content');
      if (ogImageUrl && ogImageUrl.search(/^https?:\/\//) > -1) {
        urls.unshift(ogImageUrl);
      }
    }
    return urls;
  }
  function _exclude_small_images(images) {
    var urls = [];
    var MIN_IMAGE_SIZE = 125;
    var images = jq.unique(images);
    for (var i = 0; i < images.length; i++) {
      var src = images[i].src;
      if (src === undefined || src == null || /^data:image\/[a-z]+;base64/i.test(src)) {
        continue;
      }

      // Make sure images are at least MIN_IMAGE_SIZE

      // most modern browsers support naturalWidth/Height
      // will be undefined if not supported
      var width = images[i].naturalWidth;
      var height = images[i].naturalHeight;

      // fallback 1 in case naturalWidth/Height not supported
      if (!(width && height)) {
        var image = new Image();
        // NOTE: width and height are sometimes 0
        // HYPOTHESIS:
        //   width and height should be retrieved in an onload callback.
        //   otherwise there is a race condition where width/height are retrieved
        //   before the image has loaded.
        // not worth refactoring to support a callback for now...
        image.src = src;
        width = image.width;
        height = image.height;
      }

      // fallback 2 in case width and height are 0
      if (!(width && height)) {
        // NOTE: gets *rendered* dimensions, not natural image size
        // only works if image is shown on the page
        width = jq(images[i]).width();
        height = jq(images[i]).height();
      }

      if (width >= MIN_IMAGE_SIZE && height >= MIN_IMAGE_SIZE) {
        urls.push(src);
      }
    }
    return urls;
  }
  function _default_image_urls() {
    // First, look for og:images
    var largeImageUrls = _og_image_urls()

    // Then, add any image that meets our min size criteria
    largeImageUrls = largeImageUrls.concat(_exclude_small_images(_default_images()));

    return unique(largeImageUrls);
  }

  /*
   * Amazon keeps identifiers in tables like
   *
   * UPC: 12343...
   * or ASIN: 12312...
   * or Model Number: 123123....
   *
   * This is a generic function to grab those on the page
   *
   */
  function _find_identifier(identifier_string) {
    // Table version
    identifier = jq('td:contains(' + identifier_string + ')').next('td.value').text()

    // If not td, try th
    identifier = identifier || jq('th:contains(' + identifier_string + ')').next('td').text()

    // If not, try list version, will pull UPC: 123445656789
    identifier = identifier || jq('b:contains(' + identifier_string + ')').parent().text().replace(identifier_string + ': ', '')

    return identifier.trim();
  }

  function _default_asin() {
    var asin = _find_identifier('ASIN');
    if (!asin) {
      asin = jq('input#ASIN, #addToCart #ASIN, #addToCart #a').val();
    }
    return asin;
  }

  function _default_upc() {
    return _find_identifier('UPC')
  }

  function _default_url() {
    var asin = jq('input#ASIN, #addToCart #ASIN, #addToCart #a').val();
    if (asin) {
      var url = jq('link[rel=canonical]').attr('href');
      if (url) {
        var newUrl = url.replace(/\/\w{8,10}$/, "/" + asin);
        return newUrl;
      }
    }
    var url = window.location.href;
    if (url == 'about:blank') {
      url = top.location.href;
    }
    if (url.match(/amazon.+\/registry\//)) {
      var url_prefix = "http://www.amazon.com"
      var action = jq('#RegistryGlobalForm').attr('action').replace("/update", "");
      return url_prefix + action;
    }
    return url;
  }

  function _default_category_string() {
    var category_string = jq('#wayfinding-breadcrumbs_feature_div .a-list-item .a-link-normal').map(function (idx, item) { return jq(item).text().trim() }).toArray().join(" | ")

    // Don't record pages from search results pages, which change breadcrumbs to back to results
    if (category_string.match(/^Back to (search )?results/)) {
      category_string = ''
    }

    return category_string
  }

  function _default_isbn13() {
    var isbn_13 = jq('td:contains(ISBN-13)').next('td.value').text()

    // If not, check if it's in the plain text
    isbn_13 = isbn_13 || jq('b:contains(ISBN-13)').parent().text().replace('ISBN-13: ', '').replace('-', '')

    return isbn_13
  }

  function _default_brand() {
    return jq('#bylineInfo').text()
  }

  function _default_color() {
    let color = jq('#variation_color_name .selection').text() || jq('#dropdown_selected_color_name').text().trim() || jq('#shelf-label-color_name .shelf-label-variant-name').text().trim()
    return color.match(/select/i) ? null : color
  }

  function _default_count() {
    return null
  }

  function _default_scent() {
    let scent = jq('#variation_scent_name .selection').text() || jq('#dropdown_selected_scent_name').text().trim() || jq('#shelf-label-scent_name .shelf-label-variant-name').text().trim()
    return scent.match(/select/i) ? null : scent
  }

  function _default_size() {
    let size = jq('#variation_size_name .selection').text() || jq('#dropdown_selected_size_name').text().trim() || jq('#shelf-label-size_name .shelf-label-variant-name').text().trim()
    return size.match(/select/i) ? null : size
  }

  function _default_style() {
    let style = jq('#variation_style_name .selection').text() || jq('#dropdown_selected_style_name').text().trim() || jq('#shelf-label-style_name .shelf-label-variant-name').text().trim()
    return style.match(/select/i) ? null : style
  }

  function _default_scraped_data() {
    const data = []

    // Amazon sometimes list many GTINs/UPCs for a product, the string will be space delimited: "12347599120 12838123012 23..."
    // If so split them up and send them individually
    const gtin_string = _default_upc()
    const gtin_data = (gtin_string.split(" ") || []).map(function (gtin) { return _gtin(gtin) })

    var isbn13_data = []
    const isbn13_string = _default_isbn13()
    if (isbn13_string) {
      isbn13_data = [_isbn13(isbn13_string)]
    }

    var asin_data = []
    const asin_string = _default_asin()
    if (asin_string) {
      asin_data = [_asin(asin_string)]
    }

    var category_data = []
    var category_string = _default_category_string()
    if (category_string) {
      category_data = [_categories(category_string)]
    }

    let brand = _brand(_default_brand())
    let color = _color(_default_color())
    let count = _count(_default_count())
    let scent = _scent(_default_scent())
    let size = _size(_default_size())
    let style = _style(_default_style())

    return data.concat(isbn13_data, gtin_data, asin_data, category_data, brand, color, count, scent, size, style)
  }

  function _default_price() {
    var price = jq('#priceblock_ourprice').text();

    if (isEmptyOrNull(price)) {
      price = jq('.priceLarge').text();
    }
    if (isEmptyOrNull(price)) {
      price = jq('#priceblock_saleprice').text();
    }
    if (isEmptyOrNull(price)) {
      price = jq('#priceblock_dealprice').text();
    }
    if (isEmptyOrNull(price)) {
      price = jq('#buyNewSection .offer-price').text();
    }
    if (isEmptyOrNull(price)) {
      price = jq('span#product-price').text();
    }
    if (isEmptyOrNull(price)) {
      price = jq('#unqualifiedBuyBox .a-color-price').text();
    }
    if (isEmptyOrNull(price)) {
      price = jq('.apexPriceToPay span:first').text();
    }
    if (isEmptyOrNull(price)) {
      price = jq('#corePrice_feature_div .a-price .a-offscreen').first().text();
    }
    if (isEmptyOrNull(price)) {
      // Scraper is incorrectly snagging price from product recommendations when
      // there is no price and only buying options for the product
      var allBuyingOptionsButton = jq('#buybox-see-all-buying-choices')

      if (!allBuyingOptionsButton.length) {
        price = jq('.a-price .a-offscreen').first().text();
      }
    }

    return price;
  }

  function _default_title() {
    var title = jq.trim(jq('#btAsinTitle, #title').clone().children().remove().end().text());
    if (!title) {
      title = jq('#productTitle').text().trim() || jq('title').text().trim();
    }

    // Append the size and color to the title if available
    jq('span.selection, span#dropdown_selected_size_name, #twister-idd-button-size_name-announce #twister-idd-button-selection, #twister_feature_div .shelf-label-variant-name').each(function (index, element) {
      var selectionText = jq(element).text().trim();
      if (title.indexOf(selectionText) === -1 && selectionText != 'Select') {
        title = title + ' - ' + selectionText
      }
    })

    return title;
  }

  function _default_images() {
    return jq('img:visible')
      .not('#giveaway img')
      .not('[id^=sims-consolidated-] img')
      .not('[id^=sponsoredProducts] img')
  }

  function _default_image_urls() {
    var images = _default_images();
    images = images.filter(function (index) {
      return jq(this).attr('src') &&
        (jq(this).attr('src').indexOf('data') != 1) &&
        jq(this).width() >= 144 &&
        jq(this).height() >= 144
    })

    var imagesArray = []
    jq.each(images.slice(0, 9), function (idx, img) {
      imagesArray.push(jq(img).attr('src'));
    });

    var asin = jq('input#ASIN, #addToCart #ASIN').val();
    if (asin) {
      imagesArray.push("http://images.amazon.com/images/P/" + asin + ".01.LZZZZZZZ.jpg")
    }

    return imagesArray
  }


  var _object = {
    'u': _default_url(),
    'price': _clean_price(_default_price()),
    // fall back to no-image image if we don't have any scraped images
    'image_urls': _default_image_urls().length ? _clean_image_urls(_default_image_urls().slice(0, 10)) : ['https://images.babylist.com/image/upload/v1519149528/no-image_kbn727.png'],
    'title': _default_title(),
    'scraped_data': _clean_scraped_data(_default_scraped_data())
  }

  function _safety_check(param_name) {
    if (_object[param_name] === undefined || _object[param_name] == null) {
      _object[param_name] = '';
    }
    if (typeof _object[param_name] == "string") {
      _object[param_name] = _object[param_name].trim();
    }
  }

  if (window.Prototype) {
    delete Object.prototype.toJSON;
    delete Array.prototype.toJSON;
    delete Hash.prototype.toJSON;
    delete String.prototype.toJSON;
  }

  _safety_check('u');
  _safety_check('price');
  _safety_check('image_urls');
  _safety_check('title');
  return JSON.stringify(_object);
}


(function () {
  var BL_URL = 'http://localhost:5173/add_reg_item';

  // Gives us common iframe setup shared by this and add.js.erb
  var NO_JQUERY = {}; !function (e, t, a) { if (!("console" in e)) { var r = e.console = {}; r.log = r.warn = r.error = r.debug = function () { } } t === NO_JQUERY && (t = { fn: {}, extend: function () { for (var e = arguments[0], t = 1, a = arguments.length; t < a; t++) { var r = arguments[t]; for (var n in r) e[n] = r[n] } return e } }), t.fn.pm = function () { return console.log("usage: \nto send:    $.pm(options)\nto receive: $.pm.bind(type, fn, [origin])"), this }, t.pm = e.bufferpm = function (e) { n.send(e) }, t.pm.bind = e.bufferpm.bind = function (e, t, a, r) { n.bind(e, t, a, r) }, t.pm.unbind = e.bufferpm.unbind = function (e, t) { n.unbind(e, t) }, t.pm.origin = e.bufferpm.origin = null, t.pm.poll = e.bufferpm.poll = 200; var n = { send: function (e) { var a = t.extend({}, n.defaults, e), r = a.target; if (a.target) if (a.type) { var s = { data: a.data, type: a.type }; a.success && (s.callback = n._callback(a.success)), a.error && (s.errback = n._callback(a.error)), "postMessage" in r && !a.hash ? (n._bind(), r.postMessage(JSON.stringify(s), a.origin || "*")) : (n.hash._bind(), n.hash.send(a, s)) } else console.warn("postmessage type required"); else console.warn("postmessage target window required") }, bind: function (a, r, s, o) { "postMessage" in e && !o ? n._bind() : n.hash._bind(); var i = n.data("listeners.postmessage"); i || (i = {}, n.data("listeners.postmessage", i)); var u = i[a]; u || (u = [], i[a] = u), u.push({ fn: r, origin: s || t.pm.origin }) }, unbind: function (e, t) { var a = n.data("listeners.postmessage"); if (a) if (e) if (t) { var r = a[e]; if (r) { for (var s = [], o = 0, i = r.length; o < i; o++) { var u = r[o]; u.fn !== t && s.push(u) } a[e] = s } } else delete a[e]; else for (var o in a) delete a[o] }, data: function (e, t) { return t === a ? n._data[e] : (n._data[e] = t, t) }, _data: {}, _CHARS: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), _random: function () { for (var e = [], t = 0; t < 32; t++)e[t] = n._CHARS[0 | 32 * Math.random()]; return e.join("") }, _callback: function (e) { var t = n.data("callbacks.postmessage"); t || (t = {}, n.data("callbacks.postmessage", t)); var a = n._random(); return t[a] = e, a }, _bind: function () { n.data("listening.postmessage") || (e.addEventListener ? e.addEventListener("message", n._dispatch, !1) : e.attachEvent && e.attachEvent("onmessage", n._dispatch), n.data("listening.postmessage", 1)) }, _dispatch: function (e) { try { var t = {}; if ("object" == typeof e.data && null !== e.data) return; t = JSON.parse(e.data) } catch (e) { return void console.warn("postmessage data invalid json: ", e) } if (t.type) { var a = (n.data("callbacks.postmessage") || {})[t.type]; if (a) a(t.data); else for (var r = (n.data("listeners.postmessage") || {})[t.type] || [], s = 0, o = r.length; s < o; s++) { var i = r[s]; if (i.origin && e.origin !== i.origin) { if (console.warn("postmessage message origin mismatch", e.origin, i.origin), t.errback) { var u = { message: "postmessage origin mismatch", origin: [e.origin, i.origin] }; n.send({ target: e.source, data: u, type: t.errback }) } } else try { var c = i.fn(t.data); t.callback && n.send({ target: e.source, data: c, type: t.callback }) } catch (a) { t.errback && n.send({ target: e.source, data: a, type: t.errback }) } } } else console.warn("postmessage message type required") } }; n.hash = { send: function (t, a) { var r = t.target, s = t.url; if (s) { s = n.hash._url(s); var o, i = n.hash._url(e.location.href); if (e == r.parent) o = "parent"; else try { for (var u = 0, c = parent.frames.length; u < c; u++) { if (parent.frames[u] == e) { o = u; break } } } catch (t) { o = e.name } if (null != o) { var l = { "x-requested-with": "postmessage", source: { name: o, url: i }, postmessage: a }, f = "#x-postmessage-id=" + n._random(); r.location = s + f + encodeURIComponent(JSON.stringify(l)) } else console.warn("postmessage windows must be direct parent/child windows and the child must be available through the parent window.frames list") } else console.warn("postmessage target window url is required") }, _regex: /^\#x\-postmessage\-id\=(\w{32})/, _regex_len: 50, _bind: function () { n.data("polling.postmessage") || (setInterval((function () { var t = "" + e.location.hash, a = n.hash._regex.exec(t); if (a) { var r = a[1]; n.hash._last !== r && (n.hash._last = r, n.hash._dispatch(t.substring(n.hash._regex_len))) } }), t.pm.poll || 200), n.data("polling.postmessage", 1)) }, _dispatch: function (t) { if (t) { try { if (!("postmessage" === (t = JSON.parse(decodeURIComponent(t)))["x-requested-with"] && t.source && null != t.source.name && t.source.url && t.postmessage)) return } catch (e) { return } var a = t.postmessage, r = (n.data("callbacks.postmessage") || {})[a.type]; if (r) r(a.data); else { var s; s = "parent" === t.source.name ? e.parent : e.frames[t.source.name]; for (var o = (n.data("listeners.postmessage") || {})[a.type] || [], i = 0, u = o.length; i < u; i++) { var c = o[i]; if (c.origin) { var l = /https?\:\/\/[^\/]*/.exec(t.source.url)[0]; if (l !== c.origin) { if (console.warn("postmessage message origin mismatch", l, c.origin), a.errback) { var f = { message: "postmessage origin mismatch", origin: [l, c.origin] }; n.send({ target: s, data: f, type: a.errback, hash: !0, url: t.source.url }) } continue } } try { var p = c.fn(a.data); a.callback && n.send({ target: s, data: p, type: a.callback, hash: !0, url: t.source.url }) } catch (e) { a.errback && n.send({ target: s, data: e, type: a.errback, hash: !0, url: t.source.url }) } } } } }, _url: function (e) { return ("" + e).replace(/#.*$/, "") } }, t.extend(n, { defaults: { target: null, url: null, type: null, data: null, success: null, error: null, origin: "*", hash: !1 } }) }(this, "undefined" == typeof jQuery ? NO_JQUERY : jQuery), "JSON" in window && window.JSON || (JSON = {}), function () { function f(e) { return e < 10 ? "0" + e : e } function quote(e) { return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, (function (e) { var t = meta[e]; return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) })) + '"' : '"' + e + '"' } function str(e, t) { var a, r, n, s, o, i = gap, u = t[e]; switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)), "function" == typeof rep && (u = rep.call(t, e, u)), typeof u) { case "string": return quote(u); case "number": return isFinite(u) ? String(u) : "null"; case "boolean": case "null": return String(u); case "object": if (!u) return "null"; if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(u)) { for (s = u.length, a = 0; a < s; a += 1)o[a] = str(a, u) || "null"; return n = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + i + "]" : "[" + o.join(",") + "]", gap = i, n } if (rep && "object" == typeof rep) for (s = rep.length, a = 0; a < s; a += 1)"string" == typeof (r = rep[a]) && (n = str(r, u)) && o.push(quote(r) + (gap ? ": " : ":") + n); else for (r in u) Object.hasOwnProperty.call(u, r) && (n = str(r, u)) && o.push(quote(r) + (gap ? ": " : ":") + n); return n = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + i + "}" : "{" + o.join(",") + "}", gap = i, n } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf() }); var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, rep; "function" != typeof JSON.stringify && (JSON.stringify = function (e, t, a) { var r; if (gap = "", indent = "", "number" == typeof a) for (r = 0; r < a; r += 1)indent += " "; else "string" == typeof a && (indent = a); if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify"); return str("", { "": e }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { function walk(e, t) { var a, r, n = e[t]; if (n && "object" == typeof n) for (a in n) Object.hasOwnProperty.call(n, a) && (void 0 !== (r = walk(n, a)) ? n[a] = r : delete n[a]); return reviver.call(e, t, n) } var j; if (cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, (function (e) { return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) }))), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();

  var _presentBabylistFrame = function (queryString) {
    var _hostname = 'http://localhost:5173';
    var iframe = document.createElement('iframe')
    iframe.setAttribute('allowtransparency', 'true')
    iframe.setAttribute('src', _hostname + '/bookmark?' + queryString)
    iframe.setAttribute('name', 'babylist_iframe')
    iframe.setAttribute('id', 'babylist_iframe')
    iframe.setAttribute('scrolling', 'no')
    iframe.style.border = 'none';
    iframe.style.height = '100%';
    iframe.style.width = '100%';
    iframe.style.position = (document.doctype == null && navigator.appName.match('Microsoft')) ? 'absolute' : 'fixed';
    iframe.style.zIndex = '99999999999';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style['background-color'] = 'transparent';
    iframe.style.clip = 'auto';
    iframe.style.overflow = 'hidden';
    iframe.style.opacity = 1;
    iframe.style.setProperty('display', 'block', 'important');
    iframe.style.visibility = 'visible';

    // add it to the page
    document.body.appendChild(iframe)

    // bind a listener to remove iframe
    bufferpm.bind("buffermessage", function (data) {
      var iframe = document.getElementById("babylist_iframe");
      iframe.parentNode.removeChild(iframe);
      return false;
    });

    iframe.onload = function () {
      console.log(this.contentDocument.document);
      // this.contentWindow.document.body.style.background = "none";
    }
  }


  function fullFunc(opts) {
    preparePageForScraping().then(function () {
      opts.ready();
    });
  };

  const getCurrentScript = () => {
    if (document.currentScript) {
      return document.currentScript
    }

    return Array.from(document.querySelectorAll('script'))
      .filter(script => script.src.includes('babylist') && script.src.includes('add_reg_item'))
      .at(-1)
  }

  const getForceModalParam = () => {
    const currentScript = getCurrentScript()

    if (!currentScript) {
      return false
    }

    const searchParams = new URLSearchParams(currentScript.src)
    return searchParams.get('force_modal')
  }

  const buildQueryString = () => {
    const pro = getProductDefaults();
    console.log(pro)
    const source = encodeURIComponent('button');
    const {
      u,
      title,
      price,
      upc,
      category_string,
      image_urls,
      scraped_data,
    } = JSON.parse(pro)

    const searchParams = new URLSearchParams({
      u,
      title,
      price,
      upc,
      source,
      category_string,
    })

    image_urls.forEach((image_url) => {
      searchParams.append('imgs[]', image_url)
    })

    scraped_data.forEach((datum) => {
      searchParams.append('scraped_data[]', JSON.stringify(datum))
    })

    const force_modal = getForceModalParam()
    if (force_modal) {
      searchParams.append('force_modal', force_modal)
    }

    console.log(searchParams)

    return searchParams.toString()
  }

  function redirect() {
    window.location.href = BL_URL + '?u=' + encodeURIComponent(window.location) + '&t=' + encodeURIComponent(window.document.title);
  }

  // Attempt to handle CSP errors more gracefully by redirecting the user to the non-iframe
  // version of the "Add to Babylist" page.
  document.addEventListener("securitypolicyviolation", function (e) {
    if (e.disposition === "enforce") {
      redirect();
    }
  });

  window.bookmarklet = function (opts) { fullFunc(opts) };

  window.bookmarklet({
    ready: function () {
      try {
        _presentBabylistFrame(buildQueryString())
      } catch (e) {
        // catches Chrome cross-origin errors
        if (e instanceof DOMException) {
          redirect()
        } else {
          throw e;
        }
      }
    }
  })
}())