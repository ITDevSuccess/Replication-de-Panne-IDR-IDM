(() => {
    var e = {
        27: (e, t, r) => {
            "use strict";
            r.d(t, {Z: () => n});
            var o = r(645), a = r.n(o)()((function (e) {
                return e[1]
            }));
            a.push([e.id, "#uploader{padding:1em;position:relative}#uploader #uploaderCont #dragandrophandler{flex-direction:column;background:#ebebeb;height:30vh;min-height:180px;border:1px solid #c8c8c8;display:flex;align-items:center;justify-content:center;transition:all 400ms}#uploader #uploaderCont #dragandrophandler>*{transition:all 400ms}#uploader #uploaderCont #dragandrophandler svg{width:100px;height:3.3em;opacity:0.12;margin-bottom:7px}#uploader #uploaderCont #dragandrophandler label{margin-left:5px;color:#007bff;cursor:pointer}#uploader #uploaderCont #dragandrophandler label:hover{text-decoration:underline}#uploader #uploaderCont #dragandrophandler.active{box-shadow:0 0 18px 2px inset #979797;background:#bbd3ff}#uploader #uploaderCont #dragandrophandler.active svg{transform:translateY(11px);height:3.8em;opacity:1;fill:#fff}#uploader #uploaderCont #dragandrophandler.active span{opacity:0}#uploader #uploaderCont .row.fileQueue{padding:1% 0;border-bottom:thin solid #e6e6e6;opacity:0}#uploader #uploaderCont .row.fileQueue>div{display:flex;align-items:center}#uploader #uploaderCont .row.fileQueue>div.name b{overflow:hidden;text-overflow:ellipsis}#uploader #uploaderCont .row.fileQueue>div.remove{justify-content:flex-end}#uploader #uploaderCont .row.queueSrc{display:none}#uploader #uploaderCont .row.ulProgress{display:none;height:16px;width:100%}#uploader #uploaderCont .row.ulProgress .col{position:absolute;top:28%;left:0}#uploader #uploaderCont .row.ulProgress .progress-bar{width:0}#uploader #uploaderCont .submit{display:none;margin-top:17px}\n", ""]);
            const n = a
        }, 645: e => {
            "use strict";
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var r = e(t);
                        return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r
                    })).join("")
                }, t.i = function (e, r, o) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var a = {};
                    if (o) for (var n = 0; n < this.length; n++) {
                        var i = this[n][0];
                        null != i && (a[i] = !0)
                    }
                    for (var s = 0; s < e.length; s++) {
                        var l = [].concat(e[s]);
                        o && a[l[0]] || (r && (l[2] ? l[2] = "".concat(r, " and ").concat(l[2]) : l[2] = r), t.push(l))
                    }
                }, t
            }
        }, 425: (e, t, r) => {
            r(55), e.exports = function (e) {
                return "" + '<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">\x3c!--h5.modal-title File Error--\x3e<button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"></div><div class="modal-footer"><button class="btn btn-primary" type="button" data-dismiss="modal">Close</button></div></div></div></div>'
            }
        }, 152: (e, t, r) => {
            var o = r(55);
            e.exports = function (e) {
                var t, r = "", a = e || {};
                return function (e, a) {
                    r += '<div class="container-fluid" id="uploaderCont"><div class="row ddHandler"><div class="col-12" id="dragandrophandler"><svg class="bi bi-upload" width="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8zM5 4.854a.5.5 0 00.707 0L8 2.56l2.293 2.293A.5.5 0 1011 4.146L8.354 1.5a.5.5 0 00-.708 0L5 4.146a.5.5 0 000 .708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 2a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 2z" clip-rule="evenodd"></path></svg><span>Drag files here or<label>browse for files<input value="browse" type="file" style="display: none;" multiple></label></span></div></div>\x3c!--.row.fileQueue--\x3e<div class="row queueSrc"><div class="col name"><b></b></div>', a && (r += '<div class="col desc"><input class="form-control form-control-sm" type="text" placeholder="Description of file" maxlength="100" ></div>'), e && (r += '<div class="col options"><select class="custom-select custom-select-sm"><option selected>Select this file type</option>', function () {
                        var a = e;
                        if ("number" == typeof a.length) for (var n = 0, i = a.length; n < i; n++) {
                            var s = a[n];
                            r = r + "<option" + o.attr("value", n, !0, !0) + ">" + o.escape(null == (t = s) ? "" : t) + "</option>"
                        } else for (var n in i = 0, a) i++, s = a[n], r = r + "<option" + o.attr("value", n, !0, !0) + ">" + o.escape(null == (t = s) ? "" : t) + "</option>"
                    }.call(this), r += "</select></div>"), r += '<div class="col-2 remove"><input class="btn btn-sm btn-outline-danger" type="button" value="Remove" data-name></div></div><div class="row ulProgress">\x3c!--.col.d-none--\x3e<div class="col">Uploading...<div class="progress"><div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100">0%</div></div></div></div><div class="row submit"><div class="col-12 text-right"><input class="btn btn-primary" type="button" value="Upload"></div></div></div>'
                }.call(this, "options" in a ? a.options : "undefined" != typeof options ? options : void 0, "showDesc" in a ? a.showDesc : "undefined" != typeof showDesc ? showDesc : void 0), r
            }
        }, 55: (e, t, r) => {
            "use strict";
            var o = Object.prototype.hasOwnProperty;

            function a(e, t) {
                return Array.isArray(e) ? function (e, t) {
                    for (var r, o = "", n = "", i = Array.isArray(t), s = 0; s < e.length; s++) (r = a(e[s])) && (i && t[s] && (r = l(r)), o = o + n + r, n = " ");
                    return o
                }(e, t) : e && "object" == typeof e ? function (e) {
                    var t = "", r = "";
                    for (var a in e) a && e[a] && o.call(e, a) && (t = t + r + a, r = " ");
                    return t
                }(e) : e || ""
            }

            function n(e) {
                if (!e) return "";
                if ("object" == typeof e) {
                    var t = "";
                    for (var r in e) o.call(e, r) && (t = t + r + ":" + e[r] + ";");
                    return t
                }
                return e + ""
            }

            function i(e, t, r, o) {
                if (!1 === t || null == t || !t && ("class" === e || "style" === e)) return "";
                if (!0 === t) return " " + (o ? e : e + '="' + e + '"');
                var a = typeof t;
                return "object" !== a && "function" !== a || "function" != typeof t.toJSON || (t = t.toJSON()), "string" == typeof t || (t = JSON.stringify(t), r || -1 === t.indexOf('"')) ? (r && (t = l(t)), " " + e + '="' + t + '"') : " " + e + "='" + t.replace(/'/g, "&#39;") + "'"
            }

            t.merge = function e(t, r) {
                if (1 === arguments.length) {
                    for (var o = t[0], a = 1; a < t.length; a++) o = e(o, t[a]);
                    return o
                }
                for (var i in r) if ("class" === i) {
                    var s = t[i] || [];
                    t[i] = (Array.isArray(s) ? s : [s]).concat(r[i] || [])
                } else if ("style" === i) {
                    s = (s = n(t[i])) && ";" !== s[s.length - 1] ? s + ";" : s;
                    var l = n(r[i]);
                    l = l && ";" !== l[l.length - 1] ? l + ";" : l, t[i] = s + l
                } else t[i] = r[i];
                return t
            }, t.classes = a, t.style = n, t.attr = i, t.attrs = function (e, t) {
                var r = "";
                for (var s in e) if (o.call(e, s)) {
                    var l = e[s];
                    if ("class" === s) {
                        r = i(s, l = a(l), !1, t) + r;
                        continue
                    }
                    "style" === s && (l = n(l)), r += i(s, l, !1, t)
                }
                return r
            };
            var s = /["&<>]/;

            function l(e) {
                var t = "" + e, r = s.exec(t);
                if (!r) return e;
                var o, a, n, i = "";
                for (o = r.index, a = 0; o < t.length; o++) {
                    switch (t.charCodeAt(o)) {
                        case 34:
                            n = "&quot;";
                            break;
                        case 38:
                            n = "&amp;";
                            break;
                        case 60:
                            n = "&lt;";
                            break;
                        case 62:
                            n = "&gt;";
                            break;
                        default:
                            continue
                    }
                    a !== o && (i += t.substring(a, o)), a = o + 1, i += n
                }
                return a !== o ? i + t.substring(a, o) : i
            }

            t.escape = l, t.rethrow = function e(t, o, a, n) {
                if (!(t instanceof Error)) throw t;
                if (!("undefined" == typeof window && o || n)) throw t.message += " on line " + a, t;
                var i, s, l, d;
                try {
                    n = n || r(993).readFileSync(o, {encoding: "utf8"}), i = 3, s = n.split("\n"), l = Math.max(a - i, 0), d = Math.min(s.length, a + i)
                } catch (r) {
                    return t.message += " - could not read from " + o + " (" + r.message + ")", void e(t, null, a)
                }
                i = s.slice(l, d).map((function (e, t) {
                    var r = t + l + 1;
                    return (r == a ? "  > " : "    ") + r + "| " + e
                })).join("\n"), t.path = o;
                try {
                    t.message = (o || "Pug") + ":" + a + "\n" + i + "\n\n" + t.message
                } catch (e) {
                }
                throw t
            }
        }, 379: e => {
            "use strict";
            var t = [];

            function r(e) {
                for (var r = -1, o = 0; o < t.length; o++) if (t[o].identifier === e) {
                    r = o;
                    break
                }
                return r
            }

            function o(e, o) {
                for (var n = {}, i = [], s = 0; s < e.length; s++) {
                    var l = e[s], d = o.base ? l[0] + o.base : l[0], c = n[d] || 0, u = "".concat(d, " ").concat(c);
                    n[d] = c + 1;
                    var p = r(u), f = {css: l[1], media: l[2], sourceMap: l[3]};
                    -1 !== p ? (t[p].references++, t[p].updater(f)) : t.push({
                        identifier: u,
                        updater: a(f, o),
                        references: 1
                    }), i.push(u)
                }
                return i
            }

            function a(e, t) {
                var r = t.domAPI(t);
                return r.update(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        r.update(e = t)
                    } else r.remove()
                }
            }

            e.exports = function (e, a) {
                var n = o(e = e || [], a = a || {});
                return function (e) {
                    e = e || [];
                    for (var i = 0; i < n.length; i++) {
                        var s = r(n[i]);
                        t[s].references--
                    }
                    for (var l = o(e, a), d = 0; d < n.length; d++) {
                        var c = r(n[d]);
                        0 === t[c].references && (t[c].updater(), t.splice(c, 1))
                    }
                    n = l
                }
            }
        }, 569: e => {
            "use strict";
            var t = {};
            e.exports = function (e, r) {
                var o = function (e) {
                    if (void 0 === t[e]) {
                        var r = document.querySelector(e);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                            r = r.contentDocument.head
                        } catch (e) {
                            r = null
                        }
                        t[e] = r
                    }
                    return t[e]
                }(e);
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(r)
            }
        }, 216: e => {
            "use strict";
            e.exports = function (e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t), t
            }
        }, 565: (e, t, r) => {
            "use strict";
            e.exports = function (e) {
                var t = r.nc;
                t && e.setAttribute("nonce", t)
            }
        }, 795: e => {
            "use strict";
            e.exports = function (e) {
                var t = e.insertStyleElement(e);
                return {
                    update: function (r) {
                        !function (e, t, r) {
                            var o = r.css, a = r.media, n = r.sourceMap;
                            a ? e.setAttribute("media", a) : e.removeAttribute("media"), n && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n)))), " */")), t.styleTagTransform(o, e)
                        }(t, e, r)
                    }, remove: function () {
                        !function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        }, 589: e => {
            "use strict";
            e.exports = function (e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        }, 993: () => {
        }
    }, t = {};

    function r(o) {
        if (t[o]) return t[o].exports;
        var a = t[o] = {id: o, exports: {}};
        return e[o](a, a.exports, r), a.exports
    }

    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {a: t}), t
    }, r.d = (e, t) => {
        for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, {enumerable: !0, get: t[o]})
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";
        var e = r(379), t = r.n(e), o = r(795), a = r.n(o), n = r(569), i = r.n(n), s = r(565), l = r.n(s), d = r(216),
            c = r.n(d), u = r(589), p = r.n(u), f = r(27), v = {};
        v.styleTagTransform = p(), v.setAttributes = l(), v.insert = i().bind(null, "head"), v.domAPI = a(), v.insertStyleElement = c(), t()(f.Z, v), f.Z && f.Z.locals && f.Z.locals, function () {
            const e = r(152), t = r(425);
            let o = [], a = null;

            function n(e) {
                if (o.length == a.fileLimit || a.fileLimit < o.length + e.length) {
                    const e = `The limit for number of file uploads is ${a.fileLimit}.`, t = $(".modal");
                    return t.find(".modal-body").html(e), void t.modal("show")
                }
                let t = $(".queueSrc").html();
                for (let r = 0; r < e.length; r++) {
                    if (e[r].size > 1048576 * a.sizeLimit) {
                        const t = `\n                    The size limit for individual files is ${a.sizeLimit} MB.\n                    <br><b>${e[r].name}</b> is ${(e[r].size / 1048576).toFixed(1)} MB.`,
                            o = $(".modal");
                        return o.find(".modal-body").html(t), void o.modal("show")
                    }
                    $("<div class='row fileQueue'></div>").html(t).find(".col.name b").text(e[r].name).end().find(".remove input").attr("data-name", e[r].name).end().insertAfter(".row.ddHandler").animate({opacity: 1}, 850), o.push(e[r])
                }
                $(".row.submit").css("display", "flex")
            }

            $.fn.initUploader = function (r) {
                let i = {
                    destination: null,
                    destinationParams: null,
                    sizeLimit: 1,
                    fileLimit: 5,
                    selectOpts: null,
                    showDescription: !1,
                    postFn: $.noop
                };
                a = $.extend({}, i, r);
                const s = {showDesc: a.showDescription, options: a.selectOpts}, l = e(s), d = t();
                this.html(l), $("body").append(d), a.destinationParams && (a.destination = `${a.destination}?${$.param(a.destinationParams)}`), this.on("click change", "input[value]", (e => {
                    "Remove" == e.currentTarget.attributes.value.nodeValue ? function (e) {
                        o = o.filter((t => t.name !== e.attributes["data-name"].value));
                        let t = $(e).closest(".row");
                        t.animate({opacity: 0}, 400, (() => t.remove())), $(".row.submit").css("display", (() => o.length ? "flex" : "none"))
                    }(e.currentTarget) : "Upload" == e.currentTarget.attributes.value.nodeValue ? function () {
                        let e = new FormData, t = 0;
                        const r = $(".row.ulProgress .progress-bar"), n = $(".row.fileQueue");
                        a.selectOpts && (File.prototype.fileType = "", o.map((e => (e.fileType = n.filter(`:has(input[data-name='${e.name}'])`).find(".col.desc input").val(), e)))), a.showDescription && (File.prototype.description = "", o.map((e => (e.description = n.filter(`:has(input[data-name='${e.name}'])`).find(".col.options select").val(), e)))), o.forEach((t => e.append("file", t))), n.animate({opacity: 0}, 400, (() => {
                            $(".row.ddHandler").css("opacity", 0), $(".row.submit").hide(), $(".row.ulProgress").show()
                        })), setTimeout((() => {
                            $.ajax({
                                xhr: () => {
                                    let e = $.ajaxSettings.xhr();
                                    return e.upload && e.upload.addEventListener("progress", (e => {
                                        let o = e.loaded || e.position;
                                        e.lengthComputable && (t = Math.ceil(o / e.total * 100), r.css("width", t + "%").text(t + "%"))
                                    }), !1), e
                                },
                                url: a.destination,
                                type: "POST",
                                contentType: !1,
                                processData: !1,
                                data: e,
                                success: (e, t, r) => {
                                    n.remove(), $(".row.ddHandler").css("opacity", 100), $(".row.ulProgress").hide(), o = [];
                                    const i = $(".modal");
                                    i.find(".modal-body").text(`File${1 == o.length ? "" : "s"} successfully uploaded`), setTimeout((() => i.modal("show")), 70), a.postFn.call()
                                },
                                error: (e, t, r) => {
                                    $(".row.ddHandler").css("opacity", 100), n.css("opacity", 100), $(".row.ulProgress").hide(), $(".row.submit").show();
                                    const a = $(".modal");
                                    let i = "There was an error uploading the file" + (1 == o.length ? "" : "s");
                                    i += r.length ? `<br><i>${r}</i>` : "", a.find(".modal-body").html(i), setTimeout((() => a.modal("show")), 70)
                                }
                            })
                        }), 450)
                    }() : "change" == e.type && n($(e.currentTarget).get(0).files)
                })).on("dragenter drop dragover dragleave", "#dragandrophandler", (e => {
                    switch (e.stopPropagation(), e.preventDefault(), e.type) {
                        case"dragenter":
                            e.target.classList.add("active");
                            break;
                        case"dragleave":
                            e.target.classList.remove("active");
                            break;
                        case"drop":
                            e.target.classList.remove("active"), n(e.originalEvent.dataTransfer.files)
                    }
                }))
            }
        }()
    })()
})();