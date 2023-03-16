var arr = [];
function ArrNum() {
    let g = [];
    for (let i = 1, j = 0; i <= 9; i++,
    j++) {
        g[j] = i
    }
    ;return g
}
function scramble() {
    arrA = ArrNum();
    arrA.sort(function(E, F) {
        return 0.5 - Math.random()
    });
    return arrA
}
function init() {
    for (var j = 0; j < 9; j++) {
        arr[j] = new Array();
        for (var i = 0; i < 9; i++) {
            arr[j][i] = 0
        }
    }
    ;for (let D = 0; D < 3; D++) {
        let g = scramble(1, 9);
        let b = 0;
        for (let i = D * 3; i < D * 3 + 3; i++) {
            for (let j = D * 3; j < D * 3 + 3; j++) {
                arr[i][j] = g[b];
                b++
            }
        }
    }
}
function ok() {
    $("start").style.display = "none"
}
Array.prototype.remove = function(c) {
    var b = this.indexOf(c);
    if (b > -1) {
        this.splice(b, 1)
    }
}
;
function getArrB(C, z) {
    let m = ArrNum(1, 9);
    for (let j = 0; j < 9; j++) {
        if (arr[C][j] != 0) {
            m.remove(arr[C][j])
        }
    }
    ;for (let i = 0; i < 9; i++) {
        if (arr[i][z] != 0) {
            m.remove(arr[i][z])
        }
    }
    ;let A = Math.floor(C / 3) * 3;
    let B = Math.floor(z / 3) * 3;
    for (let i = A; i < A + 3; i++) {
        for (let j = B; j < B + 3; j++) {
            if (arr[i][j] != 0) {
                m.remove(arr[i][j])
            }
        }
    }
    ;return m
}
function rArrB(m) {
    let b = Math.floor(Math.random() * m.length);
    return b
}
function calc() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (arr[i][j] == 0) {
                let m = getArrB(i, j);
                if (m.length == 0) {
                    return false
                } else {
                    let b = rArrB(m);
                    arr[i][j] = m[b]
                }
            }
        }
    }
    ;return true
}
function dupArr(arr) {
    let y = [];
    for (let i = 0; i < 9; i++) {
        y[i] = [];
        for (let j = 0; j < 9; j++) {
            y[i][j] = arr[i][j]
        }
    }
    ;return y
}
function yield() {
    let y = dupArr(arr);
    while (!calc()) {
        arr = dupArr(y)
    }
}
var knum = localStorage.getItem("knum");
if (knum == null) {
    knum = init_num
}
;$("knum").value = knum;
function $(a) {
    return document.getElementById(a)
}
function blank() {
    knum = parseInt($("knum").value);
    if (knum > 81) {
        knum = 81
    }
    ;if (knum < 0) {
        knum = 0
    }
    ;$("knum").value = knum;
    localStorage.setItem("knum", knum);
    var l = 0;
    while (l < knum) {
        let k = Math.floor(9 * Math.random());
        let h = Math.floor(9 * Math.random());
        if (arr[k][h] != 0) {
            arr[k][h] = 0;
            l++
        }
    }
}
let cw = 54;
let cw2 = cw / 2;
let cw3 = cw * 2 / 3;
var wid = [4, 2, 2, 4, 2, 2, 4, 2, 2, 4];
var pos = [];
var temp = 0;
for (var i = 0; i < 10; i++) {
    temp += wid[i];
    pos[i] = temp;
    ;;temp += cw
}
;var arr2 = [];
function init2() {
    for (var j = 0; j < 9; j++) {
        arr2[j] = new Array();
        for (var i = 0; i < 9; i++) {
            arr2[j][i] = 0
        }
    }
}
let myA = document.getElementById("canA");
let myB = document.getElementById("canB");
let w = cw * 9 + 24;
myA.width = w + 4;
myA.height = w + 4;
myB.width = cw * 9;
myB.height = cw;
let penA = myA.getContext('2d');
let penB = myB.getContext('2d');
penA.lineWidth = 4;
penA.strokeStyle = "rgba(65, 105, 225, 0.7)";
penA.beginPath();
for (var i = 0; i < 4; i++) {
    var j = i * 3;
    var tpos = pos[j] - 2;
    penA.moveTo(2, tpos);
    penA.lineTo(w, tpos);
    penA.moveTo(tpos, 2);
    penA.lineTo(tpos, w)
}
;penA.closePath();
penA.stroke();
penA.lineWidth = 2;
penA.strokeStyle = "rgba(65, 105, 225, 0.3)";
penA.beginPath();
for (var i = 0; i < 9; i++) {
    if (i % 3 != 0) {
        var tpos = pos[i] - 1;
        penA.moveTo(1, tpos);
        penA.lineTo(w, tpos);
        penA.moveTo(tpos, 1);
        penA.lineTo(tpos, w)
    }
}
;penA.closePath();
penA.stroke();
penA.font = "34px Symbol";
penA.textAlign = "center";
penB.font = "34px Symbol";
penB.textAlign = "center";
function drawA() {
    var u = 0;
    var x = 2 * Math.PI;
    for (let j = 0; j < 9; j++) {
        for (let i = 0; i < 9; i++) {
            let f = arr[j][i];
            penA.fillStyle = "#f7f7f0";
            penA.fillRect(pos[i], pos[j], cw, cw);
            let v = carr[f] == 9;
            if (f != 0) {
                penA.fillStyle = arr2[j][i] == 1 ? "green" : v ? "orange" : "black";
                penA.fillText(arr[j][i].toString(), pos[i] + cw2, pos[j] + cw3);
                if (curnum == f) {
                    penA.beginPath();
                    penA.arc(pos[i] + cw2, pos[j] + cw2, 22, 0, x);
                    penA.strokeStyle = v ? "orange" : "blue";
                    penA.stroke()
                }
            } else {
                u++
            }
        }
    }
    ;if (u == 0) {
        $("gname").innerHTML = "\u6210\u529f";
        setTimeout(function() {
            $("start").style.display = "block"
        }, 200)
    }
    ;penB.fillStyle = "#f0f0f7";
    penB.fillRect(0, 0, myB.width, myB.height);
    tpos = 1;
    for (var i = 1; i < 10; i++) {
        let v = carr[i] == 9;
        penB.fillStyle = v ? "orange" : "black";
        penB.fillText(i.toString(), tpos + cw2, cw3);
        if (i == curnum) {
            penB.beginPath();
            penB.arc(tpos + cw2, cw2, 22, 0, x);
            penB.strokeStyle = v ? "orange" : "blue";
            penB.stroke()
        }
        ;tpos += cw
    }
}
let carr = [];
function precount() {
    for (let i = 0; i < 10; i++) {
        carr[i] = 0
    }
    ;for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            carr[arr[i][j]]++
        }
    }
    ;return true
}
var curnum = 1;
function start() {
    init();
    yield();
    blank();
    precount();
    curnum = 1;
    init2();
    drawA()
}
start();
function err(i, j) {
    penA.fillStyle = "red";
    penA.fillRect(pos[i], pos[j], cw, cw);
    penA.fillStyle = "black";
    penA.fillText(arr[j][i].toString(), pos[i] + cw2, pos[j] + cw3)
}
function Check(s, t) {
    var i;
    var r = 0;
    for (i = 0; i < 9; i++) {
        if (arr[t][i] == curnum) {
            err(i, t);
            r = 1
        }
    }
    ;for (i = 0; i < 9; i++) {
        if (arr[i][s] == curnum) {
            err(s, i);
            r = 1
        }
    }
    ;var p = Math.floor(s / 3) * 3;
    var q = Math.floor(t / 3) * 3;
    var n = p + 3;
    var o = q + 3;
    for (var j = q; j < o; j++) {
        for (i = p; i < n; i++) {
            if (arr[j][i] == curnum) {
                err(i, j);
                r = 1
            }
        }
    }
    ;return r
}
myA.onclick = function(d) {
    var d = event || window.event;
    for (var i = 0; i < 9; i++) {
        if (d.offsetX < pos[i]) {
            break
        }
    }
    ;for (var j = 0; j < 9; j++) {
        if (d.offsetY < pos[j]) {
            break
        }
    }
    ;i--;
    j--;
    var f = arr[j][i];
    if (f == 0) {
        if (0 == Check(i, j)) {
            arr[j][i] = curnum;
            arr2[j][i] = 1;
            carr[curnum]++;
            drawA()
        } else {
            setTimeout(drawA, 600)
        }
    } else {
        if (curnum != f) {
            curnum = f
        } else {
            if (arr2[j][i] == 1) {
                arr[j][i] = 0;
                arr2[j][i] = 0;
                carr[curnum]--
            }
        }
        ;drawA()
    }
}
;
myB.onclick = function(d) {
    var d = event || window.event;
    for (var i = 0; i < 9; i++) {
        if (d.offsetX < pos[i]) {
            break
        }
    }
    ;curnum = i;
    drawA()
}
