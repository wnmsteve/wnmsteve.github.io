VER = "6.04";
function $(a) {
    return document.getElementById(a)
}
function gets(bd, bb, bc) {
    var be = new XMLHttpRequest();
    be.open(bb != null ? "POST" : "GET", bd, true);
    be.onreadystatechange = function() {
        if (be.readyState == 4 && (be.status == 200 || be.status == 304)) {
            bc(be.responseText)
        }
    }
    ;
    be.send(bb)
}
var d31 = [];
var X, Y, M;
var CX = [-1, -1, -1, 0, 0, 1, 1, 1, 0];
var CY = [-1, 0, 1, -1, 1, -1, 0, 1, 0];
var _gs;
function S98(h, j) {
    ctx.drawImage(gfb[0], h * 25, j * 25);
    setTimeout(function() {
        if (d31[j][h][0] == 0) {
            ctx.drawImage(gfs[0], h * 25, j * 25)
        }
    }, 120)
}
function c67(h, j) {
    var K = 0
      , L = 0;
    var q, s;
    var E;
    var u, A;
    for (E = 0; E < 8; E++) {
        s = j + CY[E];
        q = h + CX[E];
        if (s >= 0 && s < Y && q >= 0 && q < X) {
            u = d31[s][q];
            A = u[0];
            if (A == 2) {
                K++
            } else {
                if (A == 0) {
                    if (u[1] == 1) {
                        L = 1
                    }
                }
            }
        }
    }
    ;var t = d31[j][h];
    var N = K >= t[2];
    for (E = 0; E < 8; E++) {
        s = j + CY[E];
        q = h + CX[E];
        if (s >= 0 && s < Y && q >= 0 && q < X) {
            var u = d31[s][q];
            if (u[0] == 0) {
                if (N) {
                    if (L) {
                        if (u[1] == 1) {
                            ctx.drawImage(gfs[2], q * 25, s * 25);
                            u[0] = 1
                        }
                    } else {
                        o0o(q, s)
                    }
                } else {
                    S98(q, s)
                }
            }
        }
    }
    ;if (N && L) {
        f17()
    }
}
function f17() {
    _edn();
    $("face").src = gif[2];
    _gs = 3;
    var h, j;
    var t;
    for (j = 0; j < Y; j++) {
        for (h = 0; h < X; h++) {
            t = d31[j][h];
            if (t[0] == 0) {
                if (t[1] == 1) {
                    ctx.drawImage(gfs[3], h * 25, j * 25)
                }
            } else {
                if (t[0] == 2) {
                    if (t[1] == 0) {
                        h_f[f_n++] = setInterval(function(h, j) {
                            var ba = 0;
                            return function() {
                                ctx.drawImage(ba == 0 ? gfb[d31[j][h][2]] : gfs[1], h * 25, j * 25);
                                ba = !ba
                            }
                        }(h, j), 800)
                    }
                }
            }
        }
    }
}
var _ln;
function see() {
    _ln = [];
    var h, j, t;
    var bm = 0
      , bn = 0;
    for (j = 0; j < Y; j++) {
        for (h = 0; h < X; h++) {
            t = d31[j][h];
            if (t[0] == 2 && t[1] != 1) {
                return 1
            }
            ;if (t[0] == 0 && t[3] == 0) {
                if (t[1] == 1) {
                    bm++
                } else {
                    bn++
                }
                ;_ln.push([h, j])
            }
        }
    }
    ;if (bm != bn) {
        return 2
    }
    ;return 0
}
function gtm(h, j) {
    var w = 0;
    var q, s;
    for (var E = 0; E < 8; E++) {
        s = j + CY[E];
        q = h + CX[E];
        if (s >= 0 && s < Y && q >= 0 && q < X) {
            if (d31[s][q][1] == 1) {
                w++
            }
        }
    }
    ;return w
}
function rv() {
    var c, d, u;
    for (d = 0; d < _ln.length; d++) {
        c = _ln[d];
        u = d31[c[1]][c[0]];
        u[1] = (u[1] == 0 ? 1 : 0)
    }
}
function ck() {
    if (see() != 0) {
        return 1
    }
    ;rv();
    var h, j, t;
    var w;
    for (j = 0; j < Y; j++) {
        for (h = 0; h < X; h++) {
            t = d31[j][h];
            w = t[2];
            if (t[0] == 1 && w != 0) {
                if (gtm(h, j) != w) {
                    rv();
                    return 2
                }
            }
        }
    }
    ;for (j = 0; j < Y; j++) {
        for (h = 0; h < X; h++) {
            t = d31[j][h];
            if (t[0] != 1) {
                t[2] = gtm(h, j)
            }
        }
    }
    ;return 0
}
function ab(C, D) {
    var t, u;
    var s, q;
    var A;
    var B, w;
    var h, j;
    var E, c;
    for (c = 0; c < 9; c++) {
        j = D + CY[c];
        h = C + CX[c];
        if (j >= 0 && j < Y && h >= 0 && h < X) {
            t = d31[j][h];
            w = t[2];
            if (t[0] == 1 && w > 0) {
                B = 0;
                for (E = 0; E < 8; E++) {
                    s = j + CY[E];
                    q = h + CX[E];
                    if (s >= 0 && s < Y && q >= 0 && q < X) {
                        u = d31[s][q];
                        A = u[0];
                        if (A == 0) {
                            B++
                        } else {
                            if (A == 2) {
                                if (u[1] == 1) {
                                    w--
                                }
                            }
                        }
                    }
                }
                ;if (B > 0 && w == B) {
                    for (E = 0; E < 8; E++) {
                        s = j + CY[E];
                        q = h + CX[E];
                        if (s >= 0 && s < Y && q >= 0 && q < X) {
                            u = d31[s][q];
                            A = u[0];
                            if (A != 1) {
                                u[3] = 1
                            }
                            ;if (A == 0) {
                                if (_af == 1) {
                                    M5k(q, s)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function o0o(h, j) {
    var t = d31[j][h];
    if (t[1] == 1) {
        if (_gs == 1) {
            ck()
        }
        ;if (t[1] == 1) {
            ctx.drawImage(gfs[2], h * 25, j * 25);
            t[0] = 1;
            f17();
            return 1
        }
    }
    ;t[0] = 1;
    ctx.drawImage(gfb[t[2]], h * 25, j * 25);
    RB--;
    if (RB == 0) {
        scs()
    } else {
        if (t[2] == 0) {
            var E, s, q;
            for (E = 0; E < 8; E++) {
                s = j + CY[E];
                q = h + CX[E];
                if (s >= 0 && s < Y && q >= 0 && q < X) {
                    if (d31[s][q][0] == 0) {
                        o0o(q, s)
                    }
                }
            }
        }
    }
    ;ab(h, j);
    return 0
}
function scs() {
    _gs = 2;
    _edn();
    var h, j, t;
    for (j = 0; j < Y; j++) {
        for (h = 0; h < X; h++) {
            t = d31[j][h];
            if (t[0] == 0) {
                if (t[1] != 1) {
                    bug(1, h, j)
                } else {
                    M5k(h, j)
                }
            }
        }
    }
    ;if (RM != 0) {
        bug(2, h, j)
    }
    ;crm(M);
    $("face").src = gif[1];
    up()
}
var _v;
function up() {
    if (_v > 3 && _t0 < 10) {
        return
    }
    ;var bi = lid();
    if (bi == null) {
        guid();
        return
    }
    ;var I = _v + '\x1E' + bi + '\x1F' + _t0 + '.' + _af;
    if (_v > 3) {
        I += '\x1F' + X + '\x1F' + Y + '\x1F' + M
    }
    ;gets("up4.php", I, function(J) {})
}
function bug(H, h, j) {
    var I = VER + ':' + H;
    gets("bug.php", I, function(J) {})
}
function DS(O) {
    var P = $(O);
    var R = P.getContext("2d");
    var Q = 3;
    return function(T) {
        if (T < 10) {
            T = "00" + T
        } else {
            if (T < 100) {
                T = "0" + T
            } else {
                T = T.toString()
            }
        }
        ;var S = T.length;
        if (S != Q) {
            P.width = S * 13;
            Q = S
        }
        ;for (var d = 0; d < S; d++) {
            R.drawImage(gfd[parseInt(T.charAt(d))], d * 13, 0)
        }
    }
}
function kai(bg, bh) {
    var E;
    var j, h;
    var bf = RB;
    for (E = 8; E >= 0 && bf > 0; E--) {
        j = bh + CY[E];
        h = bg + CX[E];
        if (j >= 0 && j < Y && h >= 0 && h < X) {
            var Z = p32[j * X + h];
            if (d31[j][h][1] == 1) {
                var W = Math.floor(Math.random() * bf);
                mplus(Z, -1);
                mplus(W, 1);
                bf--;
                ex(W, bf)
            } else {
                bf--;
                ex(Z, bf)
            }
        }
    }
    ;_es()
}
var d32 = [];
var p32 = [];
function _gnt() {
    var h, j;
    var o;
    var p;
    for (j = 0; j < Y; j++) {
        d31[j] = [];
        for (h = 0; h < X; h++) {
            d31[j][h] = [0, 0, 0, 0]
        }
    }
    ;for (p = 0; p < XY; p++) {
        d32[p] = p;
        p32[p] = p
    }
    ;RB = XY;
    for (o = 0; o < M; o++) {
        p = Math.floor(Math.random() * RB);
        RB--;
        ex(p, RB)
    }
    ;for (p = RB; p < XY; p++) {
        mplus(p, 1)
    }
    ;RM = M;
    RB = XY - M
}
function ex(W, Z) {
    var U = d32[W];
    var V = d32[Z];
    d32[W] = V;
    d32[Z] = U;
    p32[U] = Z;
    p32[V] = W
}
function mplus(p, bj) {
    var bl, bk;
    var rv = d32[p];
    bl = Math.floor(rv / X);
    bk = rv % X;
    d31[bl][bk][1] += bj;
    for (z = 0; z < 8; z++) {
        cy = bl + CY[z];
        cx = bk + CX[z];
        if (cy >= 0 && cy < Y && cx >= 0 && cx < X) {
            d31[cy][cx][2] += bj
        }
    }
}
var h_f = [];
var f_n = 0;
function _45() {
    if (he > 0) {
        clearInterval(he);
        he = 0
    }
    ;for (var d = 0; d < f_n; d++) {
        clearInterval(h_f[d])
    }
    ;f_n = 0;
    _gnt();
    _d46();
    _x0 = -1;
    _y0 = -1;
    _gs = 0
}
var _mp1, _mp2;
var _x0;
var _y0;
function _65(e) {
    if (_tch || _gs > 1) {
        return
    }
    ;var f = paf.getBoundingClientRect();
    var h = Math.floor((e.clientX - f.left) / 25);
    var j = Math.floor((e.clientY - f.top) / 25);
    if (h < 0 || h == X || j < 0 || j == Y) {
        return
    }
    ;_x0 = h;
    _y0 = j;
    var g = d31[j][h][0];
    if (e.button == 2) {
        if (_mp2 != 1) {
            if (g == 1) {
                c67(h, j)
            } else {
                M5k(h, j)
            }
        }
    } else {
        if (_mp1 != 1) {
            if (g == 0) {
                if (_gs == 0) {
                    kai(h, j)
                }
                ;o0o(h, j)
            } else {
                if (g == 1) {
                    c67(h, j)
                } else {
                    M5k(h, j)
                }
            }
        }
    }
}
function _67(e) {
    if (_tch || _gs > 1) {
        return
    }
    ;var f = paf.getBoundingClientRect();
    var h = Math.floor((e.clientX - f.left) / 25);
    var j = Math.floor((e.clientY - f.top) / 25);
    if (h < 0 || h == X || j < 0 || j == Y) {
        return
    }
    ;var g = d31[j][h][0];
    if (e.button == 2) {
        if (_mp2 != null) {
            if (g == 1) {
                c67(h, j)
            } else {
                M5k(h, j)
            }
        }
    } else {
        if (_mp1 != null) {
            if (g == 0) {
                if (_gs == 0) {
                    kai(h, j)
                }
                ;o0o(h, j)
            } else {
                if (g == 1) {
                    c67(h, j)
                } else {
                    M5k(h, j)
                }
            }
        }
    }
}
function _77(e) {
    if (_gs > 1) {
        return
    }
    ;_tch = 1;
    var f = paf.getBoundingClientRect();
    var h = Math.floor((e.touches[0].clientX - f.left) / 25);
    var j = Math.floor((e.touches[0].clientY - f.top) / 25);
    if (h < 0 || h == X || j < 0 || j == Y) {
        return
    }
    ;if (d31[j][h][0] == 1) {
        c67(h, j)
    } else {
        _hl = setTimeout(function() {
            return lgt(h, j)
        }, 320)
    }
}
var _hl;
function lgt(h, j) {
    if (_opn == 1 && _tpn == null) {
        return
    }
    ;if (_gs == 0) {
        kai(h, j);
        o0o(h, j);
        return
    }
    ;_tch = 3;
    if (_tpn == null) {
        if (d31[j][h][0] == 2) {
            M5k(h, j)
        }
        ;if (d31[j][h][0] == 0) {
            o0o(h, j)
        }
    } else {
        M5k(h, j)
    }
}
var tc0 = 0;
function _75(e) {
    if (_tch == 1) {
        var f = paf.getBoundingClientRect();
        var h = Math.floor((e.changedTouches[0].clientX - f.left) / 25);
        var j = Math.floor((e.changedTouches[0].clientY - f.top) / 25);
        if (h < 0 || h == X || j < 0 || j == Y) {
            return
        }
        ;var g = d31[j][h][0];
        if (_gs == 0) {
            kai(h, j);
            o0o(h, j);
            return
        }
        ;if (_tpn == null) {
            if (g != 1) {
                var k = Date.now();
                var l;
                if (h == _x0 && j == _y0) {
                    l = k - tc0
                } else {
                    _x0 = h;
                    _y0 = j;
                    tc0 = Date.now();
                    l = 1000
                }
                ;if (_opn == 1 && l < 400 && g == 0) {
                    o0o(h, j)
                } else {
                    M5k(h, j)
                }
            }
        } else {
            if (g == 0) {
                o0o(h, j)
            } else {
                if (g == 2) {
                    M5k(h, j)
                }
            }
        }
        ;_tch = 4;
        clearTimeout(_hl);
        tc0 = k
    }
    ;if (e.preventDefault) {
        e.preventDefault()
    } else {
        window.event.returnValue = false
    }
}
function saf() {
    _af = $("af").checked ? 1 : 0;
    localStorage.setItem("af", _af);
    _45()
}
var _af;
function _d46() {
    _edn();
    he = 0;
    _tch = 0;
    _mp1 = localStorage.getItem("mp1");
    _mp2 = localStorage.getItem("mp2");
    _tpn = localStorage.getItem("tpn");
    _opn = localStorage.getItem("opn");
    _af = localStorage.getItem("af");
    if (_af == null) {
        _af = 0
    }
    ;var n = X * 25;
    $("p42").style.width = n + 4 + "px";
    paf.width = n;
    paf.height = Y * 25;
    $("face").src = gif[0];
    for (var d = 0; d < X; d++) {
        for (var m = 0; m < Y; m++) {
            ctx.drawImage(gfs[0], d * 25, m * 25)
        }
    }
    ;paf.onmousedown = function(e) {
        _65(e)
    }
    ;
    paf.onmouseup = function(e) {
        _67(e)
    }
    ;
    ;;paf.ontouchstart = function(e) {
        _77(e)
    }
    ;
    paf.ontouchmove = function() {
        _tch = 2;
        clearTimeout(_hl)
    }
    ;
    paf.ontouchend = function(e) {
        _75(e)
    }
    ;
    crm(RM);
    ces(0);
    $("af").checked = parseInt(_af)
}
function sopen() {
    var bq = 0;
    var br = -1
      , bs = -1;
    for (var d = 0; d < X; d++) {
        var bt = 0;
        for (var m = 0; m < Y; m++) {
            if (d31[m][d][2] == 0 && d31[m][d][1] == 0) {
                bt++
            } else {
                if (bt > bq) {
                    bq = bt;
                    br = d;
                    bs = m - 1
                }
                ;bt = 0
            }
        }
        ;if (bt > bq) {
            bq = bt;
            br = d;
            bs = m - 1
        }
    }
    ;if (br >= 0 && bs >= 0) {
        o0o(br, bs)
    }
}
function _edn() {
    if (he > 0) {
        clearInterval(he);
        he = 0;
        _t0 = Date.now() - _t0;
        ces(parseInt(_t0 / 1000));
        _t0 = Math.ceil(_t0 / 100)
    } else {
        _t0 = 0
    }
}
var he = 0;
var _t0;
var e33;
function _es() {
    _t0 = Date.now();
    e33 = 0;
    _gs = 1;
    he = setInterval(function() {
        ces(++e33)
    }, 1000)
}
var _tpn;
var _opn;
var _tch;
var RM;
var RB;
function M5k(h, j) {
    var t = d31[j][h];
    if (t[0] == 0) {
        if (RM > 0) {
            if (t[1] == 0) {
                ck()
            }
            ;ctx.drawImage(gfs[1], h * 25, j * 25);
            t[0] = 2;
            crm(--RM)
        }
    } else {
        if (t[0] == 2) {
            ctx.drawImage(gfs[0], h * 25, j * 25);
            t[0] = 0;
            crm(++RM)
        }
    }
}
var paf;
var ctx;
var crm;
var ces;
function start() {
    score = $("ss").href + "#";
    var bv = localStorage.getItem("df5");
    if (bv == null) {
        $("hm").value = 15;
        $("vm").value = 15;
        $("mm").value = 20
    } else {
        var bu = bv.split(";");
        $("hm").value = bu[0];
        $("vm").value = bu[1];
        $("mm").value = bu[2]
    }
    ;document.oncontextmenu = function() {
        return false
    }
    ;
    document.onselectstart = function() {
        return false
    }
    ;
    paf = $("paf");
    ctx = paf.getContext("2d");
    crm = DS("rm");
    ces = DS("es");
    _123(localStorage.getItem("ch7"));
    $("uid").innerHTML = lid();
    $("ver").innerHTML = VER;
    setTimeout(ad, 1200)
}
function lid() {
    var bi = localStorage.getItem("uid");
    if (bi != null) {
        if (isNaN(bi)) {
            bi = null
        }
    }
    ;return bi
}
function guid() {
    gets("uid2.php", null, function(J) {
        localStorage.setItem("uid", J);
        if (J.length > 1) {
            up();
            $("uid").innerHTML = J
        } else {
            alert("id fail")
        }
    })
}
var XY;
var SW, SH;
function _123(c) {
    _gs = 0;
    SW = document.body.clientWidth;
    SH = document.body.clientHeight;
    if (c == null) {
        c = SW < 560 ? 1 : 2
    }
    ;_v = c;
    $("custom").style.display = c == 5 ? "" : "none";
    if (c == 1) {
        X = 9;
        Y = 9;
        M = 10;
        XY = 81
    } else {
        if (c == 2) {
            X = 16;
            Y = 16;
            M = 40;
            XY = 256
        } else {
            if (c == 3) {
                M = 99;
                if (SW > SH) {
                    X = 30;
                    Y = 16
                } else {
                    X = 16;
                    Y = 30
                }
                ;XY = 480
            } else {
                if (c == 4) {
                    X = parseInt((SW - 18) / 25);
                    Y = parseInt((SH - 54) / 25);
                    XY = X * Y;
                    if (XY >= 480) {
                        M = XY * 0.20625
                    } else {
                        M = XY * XY / 5760 + XY / 8
                    }
                    ;M = parseInt(M)
                } else {
                    if (c == 5) {
                        X = parseInt($("hm").value);
                        Y = parseInt($("vm").value);
                        XY = X * Y;
                        M = parseInt($("mm").value);
                        if (M > XY) {
                            M = XY
                        }
                    } else {
                        return
                    }
                }
            }
        }
    }
    ;_45();
    localStorage.setItem("ch7", c);
    $("ss").href = score + _v
}
var score;
function udf() {
    _123(5);
    localStorage.setItem("df5", $("hm").value + ";" + $("vm").value + ";" + $("mm").value)
}
function sload(bo) {
    var rv = localStorage.getItem(bo);
    if (rv == null) {
        rv = 0
    }
    ;var bp = document.getElementsByName(bo);
    for (i = 0; i < bp.length; i++) {
        if (bp[i].value == rv) {
            bp[i].checked = true
        }
    }
    ;return rv
}
function ssave(bo, rv) {
    if (rv == 0) {
        localStorage.removeItem(bo);
        rv = null
    } else {
        localStorage.setItem(bo, rv)
    }
    ;eval("_" + bo + "=" + rv)
}
function smore(c) {
    if (c == 0) {
        $("topen").style.display = "block";
        $("thint").style.display = "none"
    } else {
        $("thint").style.display = "block";
        $("topen").style.display = "none"
    }
}
var mouse2 = function() {
    var b = 0;
    return function() {
        sload("mp1");
        sload("mp2");
        if (b == 0) {
            $("_mouse").style.display = "block";
            $("setm").innerText = "\u6536\u8d77";
            b = 1
        } else {
            $("_mouse").style.display = "none";
            $("setm").innerText = "\u8bbe\u7f6e";
            b = 0
        }
    }
}();
var touch2 = function() {
    var b = 0;
    return function() {
        var rv = sload("tpn");
        sload("opn");
        smore(rv);
        if (b == 0) {
            $("_touch").style.display = "block";
            $("sett").innerText = "\u6536\u8d77";
            b = 1
        } else {
            $("_touch").style.display = "none";
            $("sett").innerText = "\u8bbe\u7f6e";
            b = 0
        }
    }
}();
function bcolor() {
    var F = document.body.style;
    var G = document.getElementsByTagName("a");
    if ($("bcolor").checked) {
        localStorage.setItem("night", "1");
        F.backgroundColor = "black";
        F.color = "silver";
        for (var d = 0; d < G.length; d++) {
            G[d].style.color = 'silver'
        }
    } else {
        localStorage.removeItem("night");
        F.backgroundColor = "#f7f7f0";
        F.color = "";
        for (var d = 0; d < G.length; d++) {
            G[d].style.color = ''
        }
    }
}
function ifnight() {
    if (localStorage.getItem("night") != null) {
        $("bcolor").checked = true;
        bcolor()
    }
}
