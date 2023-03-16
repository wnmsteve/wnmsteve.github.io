/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var Ver = "1.07";
function $(a) {
    return document.getElementById(a)
}
function toNegative(C) {
    return C <= 0 ? C : -C
}
function random(bh, Y) {
    return Math.floor(Math.random() * (Y - bh + 1) + bh)
}
function *randGenerator() {
    let bf = [];
    while (true) {
        if (bf.length === 0) {
            bf = [1, 2, 3, 4, 5, 6, 7];
            kShuffle(bf)
        }
        ;yield bf.pop()
    }
}
function kShuffle(W) {
    let Z, Y;
    for (let i = W.length - 1; i >= 0; i--) {
        Y = W[i];
        Z = random(0, i);
        W[i] = W[Z];
        W[Z] = Y
    }
}
function copyAtoB(g, G) {
    if (g.length === G.length) {
        let i = g.length;
        while (i--) {
            G[i][0] = g[i][0];
            G[i][1] = g[i][1]
        }
    }
}
function c4a() {
    return [[0, 0], [0, 0], [0, 0], [0, 0]]
}
function clone(F) {
    if (F === null || typeof F !== "object") {
        return F
    }
    ;if (Array.isArray(F)) {
        let E = [];
        for (let i = 0; i < F.length; i++) {
            E[i] = clone(F[i])
        }
        ;return E
    }
    ;if (typeof F === "object") {
        let E = {};
        for (let D in F) {
            if (F.hasOwnProperty(D)) {
                E[D] = clone(F[D])
            }
        }
        ;return E
    }
}
function getTopAndLow(W) {
    let X = W[0][0]
      , G = X;
    for (let i = 1; i < W.length; i++) {
        if (W[i][0] < X) {
            X = W[i][0]
        } else {
            if (W[i][0] > G) {
                G = W[i][0]
            }
        }
    }
    ;return [X, G]
}
function objCopy(k, be) {
    let bd = Object.keys(k);
    for (let q of bd) {
        be[q] = k[q]
    }
}
const clearSound = document.querySelector('#clear-sound');
const lockSound = document.querySelector('#lock-sound');
const offsound = document.querySelector('#off-sound');
const tetris = {
    1: [[3, 4], [3, 5], [4, 5], [4, 4]],
    2: [[4, 3], [4, 4], [4, 5], [4, 6]],
    3: [[4, 3], [4, 5], [3, 4], [4, 4]],
    4: [[3, 3], [3, 4], [4, 5], [4, 4]],
    5: [[3, 4], [3, 5], [4, 3], [4, 4]],
    6: [[4, 3], [4, 5], [3, 3], [4, 4]],
    7: [[4, 3], [4, 5], [3, 5], [4, 4]]
};
const tetrisColor = ["#1E1E1E", "#EEE685", "#B9D3EE", "#f54ff5", "#f56565", "#32CD32", "#4faaf5", "#ffa500", "#363636"];
const createColor = (b)=>{
    return tetrisColor[b]
}
;
const timeList = [1000, 850, 722, 613, 521, 442, 375, 318, 270, 229, 194, 164, 139, 118, 100, 85, 72, 61, 51, 43, 36, 30, 25, 21, 17, 14, 11, 9, 7];
const table = [];
for (let i = 0; i <= 24; i++) {
    table.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
}
;let moving, old, sMov = c4a();
let rtype = []
  , rlist = [];
let tetrisType, tetrisStage;
let gameState = 0
  , gameJustBegun = false;
const readyNum = 6;
const randList = randGenerator();
const rand = ()=>{
    return randList.next().value
}
;
const QS = (c)=>{
    return document.querySelector(c)
}
;
const QSA = (c)=>{
    return document.querySelectorAll(c)
}
;
const canvasBox = QS('#canvas-box');
const bgLayerEl = QS('#bg-layer');
const cubeShadowLayerEl = QS('#cube-shadow-layer');
const bgCanvas = bgLayerEl.getContext("2d");
const cuShCanvas = cubeShadowLayerEl.getContext("2d");
let isDrawBg = false;
let isNotDrawCS = false;
const hcanvas = QS('#saveCubeBox');
const hpix = hcanvas.getContext("2d");
const LineDisplay = QS("#panel-line");
const levalDisplay = QS("#panel-level");
const startAndPause = QS("#startPause");
const bg = QS('html');
const GameBorder = QS('#game-border');
const gameover = QS('#u-gameover');
let realWidth, realHeight, gap = 30, cs;
let scanvasWidth, scanvasHeight;
let amt_w;
const alphalist = [0.9, 0.5, 0.6, 1];
window.addEventListener('touchstart', (d)=>{
    if (gameState == 1) {
        var e = d.touches[0].clientX;
        var f = d.touches[0].clientY;
        e = Math.floor((e - canvasBox.offsetLeft) / cs);
        f = Math.floor((f - canvasBox.offsetTop) / cs);
        if (f > 16) {
            moveToDeep()
        } else {
            if (e < 3) {
                moveToLeftOrRight('left')
            } else {
                if (e > 6) {
                    moveToLeftOrRight('right')
                } else {
                    rotate('r')
                }
            }
        }
    }
}
, false);
var sHeight, sWidth;
function setMainCanvas() {
    sHeight = document.body.clientHeight;
    sWidth = document.body.clientWidth;
    cs = Math.floor((sHeight - gap) / 20);
    realHeight = cs * 20;
    realWidth = amt_w = cs * 10;
    hcanvas.width = cs * (9 + 7);
    hcanvas.height = cs;
    let bt, bs = 0;
    hpix.translate(cs / 2, cs / 2);
    for (let C, i = 1; i <= (7 + 1 + 7); i++) {
        if (i < 9) {
            bt = createColor(i)
        } else {
            !bs && (bs = 0.4);
            bt = createColor(i - 8)
        }
        ;hpix.fillStyle = bt;
        C = 4;
        while (C--) {
            hpix.globalAlpha = alphalist[C] - bs;
            hpix.beginPath();
            hpix.moveTo(0, 0);
            hpix.lineTo(-cs / 2, -cs / 2);
            hpix.lineTo(cs / 2, -cs / 2);
            hpix.fill();
            hpix.rotate(Math.PI * 0.5)
        }
        ;hpix.translate(cs, 0)
    }
    ;canvasBox.style.width = realWidth + 'px';
    canvasBox.style.height = realHeight + 'px';
    bgLayerEl.width = cubeShadowLayerEl.width = realWidth;
    bgLayerEl.height = cubeShadowLayerEl.height = realHeight;
    if (gameState == 0 && gameJustBegun) {
        drawBg();
        drawCS()
    }
    ;if (gameState == 1) {
        isDrawBg = true
    }
}
function drawBg() {
    bgCanvas.clearRect(0, 0, realWidth, realHeight);
    let l;
    for (let K = 5; K <= 24; K++) {
        for (let i = 0; i <= 9; i++) {
            l = Math.abs(table[K][i]);
            if (l !== 0) {
                drawCube(bgCanvas, i, K, l)
            }
        }
    }
}
let isDelay, isDelayColor;
function drawCS() {
    cuShCanvas.clearRect(0, 0, realWidth, realHeight);
    sMov.forEach((i)=>{
        drawCube(cuShCanvas, i[1], i[0], 8)
    }
    );
    old.forEach((i)=>{
        drawCube(cuShCanvas, i[1], i[0], isDelayColor ? tetrisType + 8 : tetrisType)
    }
    )
}
setMainCanvas();
function drawCube(N, O, P, M) {
    N.drawImage(hcanvas, cs * (M - 1), 0, cs, cs, O * cs, (P - 5) * cs, cs, cs)
}
const wallKick = {
    JLSTZ: {
        '0R': [[-1, 0], [-1, +1], [0, -2], [-1, -2]],
        'R0': [[+1, 0], [+1, -1], [0, +2], [+1, +2]],
        'R2': [[+1, 0], [+1, -1], [0, +2], [+1, +2]],
        '2R': [[-1, 0], [-1, +1], [0, -2], [-1, -2]],
        '2L': [[+1, 0], [+1, +1], [0, -2], [+1, -2]],
        'L2': [[-1, 0], [-1, -1], [0, +2], [-1, +2]],
        'L0': [[-1, 0], [-1, -1], [0, +2], [-1, +2]],
        '0L': [[+1, 0], [+1, +1], [0, -2], [+1, -2]]
    },
    I: {
        '0R': [[-2, 0], [+1, 0], [-2, -1], [+1, +2]],
        'R0': [[+2, 0], [-1, 0], [+2, +1], [-1, -2]],
        'R2': [[-1, 0], [+2, 0], [-1, +2], [+2, -1]],
        '2R': [[+1, 0], [-2, 0], [+1, -2], [-2, +1]],
        '2L': [[+2, 0], [-1, 0], [+2, +1], [-1, -2]],
        'L2': [[-2, 0], [+1, 0], [-2, -1], [+1, +2]],
        'L0': [[+1, 0], [-2, 0], [+1, -2], [-2, +1]],
        '0L': [[-1, 0], [+2, 0], [-1, +2], [+2, -1]]
    },
    parse: function(k, h) {
        let m, l, g = ['0', 'R', '2', 'L'], j = {
            '0': 0,
            'R': 1,
            '2': 2,
            'L': 3
        };
        if (h === 'r') {
            m = 1
        } else {
            if (h === 'l') {
                m = -1
            } else {
                if (h === 'o') {
                    m = 2
                }
            }
        }
        ;l = j[k] + m;
        if (l === 4) {
            l = 0
        } else {
            if (l === -1) {
                l = 3
            } else {
                if (l === 5) {
                    l = 1
                }
            }
        }
        ;return [k, g[l]]
    },
    get: function(p, k, h) {
        let n = this.parse(k, h).join('');
        return p === 2 ? this.I[n] : this.JLSTZ[n]
    }
};
wallKick.JLSTZ['02'] = wallKick.JLSTZ['R2'];
wallKick.JLSTZ['RL'] = wallKick.JLSTZ['2L'];
wallKick.JLSTZ['20'] = wallKick.JLSTZ['L0'];
wallKick.JLSTZ['LR'] = wallKick.JLSTZ['0R'];
wallKick.I['02'] = wallKick.I['R2'];
wallKick.I['RL'] = wallKick.I['2L'];
wallKick.I['20'] = wallKick.I['L0'];
wallKick.I['LR'] = wallKick.I['0R'];
function digtalNumber(C, J) {
    J.innerText = C
}
function createNewCube() {
    let I, H;
    while (rlist.length < readyNum + 1) {
        I = rand();
        rtype.push(I);
        rlist.push(tetris[I])
    }
    ;tetrisType = rtype.shift();
    H = rlist.shift();
    copyAtoB(H, moving);
    copyAtoB(H, old);
    shadow();
    isNotDrawCS = false;
    if (tetrisType === 2) {
        straightStage = 0
    }
    ;tetrisStage = '0'
}
function clearLock() {
    if (checkCanDown()) {
        isDelay = false;
        isDelayColor = false;
        clearTimeout(softlock)
    } else {
        if (isDelay) {
            clearTimeout(softlock)
        }
    }
}
function moveOneStep(bb, bc, X) {
    let ba = 4;
    X = X || 1;
    if (bb.length === 4) {
        if (bc === "left") {
            while (ba--) {
                bb[ba][1] -= X
            }
        } else {
            if (bc === "right") {
                while (ba--) {
                    bb[ba][1] += X
                }
            } else {
                if (bc === "down") {
                    while (ba--) {
                        bb[ba][0] += X
                    }
                } else {
                    if (bc === "up") {
                        while (ba--) {
                            bb[ba][0] -= X
                        }
                    }
                }
            }
        }
    }
}
let canMoveUsed = c4a();
function checkCanDown() {
    copyAtoB(moving, canMoveUsed);
    moveOneStep(canMoveUsed, "down");
    for (let i of canMoveUsed) {
        if (i[0] > 24 || table[i[0]][i[1]] < 0) {
            return false
        }
    }
    ;return true
}
function checkIsTouch() {
    for (let i of moving) {
        if (i[1] < 0 || i[1] > 9 || i[0] > 24 || table[i[0]][i[1]] < 0) {
            return true
        }
    }
    ;return false
}
function checkGetScore() {
    let z = [];
    let[B,A] = getTopAndLow(old);
    for (; A >= B; A--) {
        if (table[A].every(function(C) {
            return C !== 0
        })) {
            z.push(A)
        }
    }
    ;return z
}
function tetrisLock() {
    old.forEach(function(i) {
        table[i[0]][i[1]] = toNegative(tetrisType)
    })
}
function shadow() {
    copyAtoB(moving, sMov);
    for (let O = 4; O <= 24; O++) {
        for (let i of sMov) {
            if (i[0] === 24 || table[i[0] + 1][i[1]] < 0) {
                return
            }
        }
        ;moveOneStep(sMov, "down")
    }
}
const BT_start_color = '#fdfd22';
const BT_pause_color = '#ffa500';
function checkEnd() {
    if (table[4].some(function(i) {
        return (i < 0)
    })) {
        stopLoop();
        drawCS();
        gameState = 0;
        resetKeyStatus();
        gameover.style.display = "block";
        startAndPause.style.backgroundColor = BT_start_color;
        startAndPause.innerText = "Start";
        return true
    } else {
        return false
    }
}
let softlock;
function downLoop() {
    if (gameState != 1 || isDelay || !amt_done) {
        return
    }
    ;moveOneStep(moving, "down");
    if (checkCanDown()) {
        copyAtoB(moving, old)
    } else {
        if (checkIsTouch()) {
            copyAtoB(old, moving)
        } else {
            copyAtoB(moving, old)
        }
        ;checkOverLoop('down')
    }
}
function moveToDeep() {
    if (!amt_done) {
        return
    }
    ;for (let O = 0; O <= 24; O++) {
        for (let i of moving) {
            if (i[0] === 24 || table[i[0] + 1][i[1]] < 0) {
                if (isDelay) {
                    clearTimeout(softlock);
                    isDelay = isDelayColor = false
                }
                ;copyAtoB(moving, old);
                checkOverLoop('deep');
                return
            }
        }
        ;moveOneStep(moving, "down")
    }
}
function moveToLeftOrRight(bc) {
    if (!amt_done) {
        return
    }
    ;moveOneStep(moving, bc);
    if (checkIsTouch()) {
        copyAtoB(old, moving)
    } else {
        copyAtoB(moving, old);
        shadow();
        if (checkCanDown()) {
            if (isDelay) {
                isDelay = false;
                isDelayColor = false;
                clearTimeout(softlock)
            }
        } else {
            clearTimeout(softlock);
            checkOverLoop('down')
        }
    }
}
function overLoopAndCreate() {
    stopLoop();
    amt_list = checkGetScore();
    amt_line = amt_list.length;
    if (amt_line) {
        scoreCreate();
        soundPlay(clearSound)
    } else {
        normalCreate();
        soundPlay(lockSound)
    }
}
function checkOverLoop(p) {
    if (p === 'deep') {
        tetrisLock();
        overLoopAndCreate()
    } else {
        if (p === 'down') {
            if (tetrisType === 1) {
                isSquareBlink ? isSquareBlink = false : isDelayColor = true;
                isDelay = true
            } else {
                isDelay = isDelayColor = true
            }
            ;softlock = setTimeout(function() {
                if (!checkCanDown()) {
                    tetrisLock();
                    overLoopAndCreate()
                }
                ;isDelay = isDelayColor = false
            }, keyboard.lockRange)
        }
    }
}
function normalCreate() {
    isDrawBg = true;
    if (checkEnd()) {
        return
    }
    ;createNewCube();
    if (!downLock && gameState == 1) {
        startLoop(false)
    }
}
let gameScore = 0;
let amt_line, amt_list;
function scoreCreate() {
    clearTimeout(softlock);
    amt_done = false;
    amt_list.forEach(function(i) {
        table.splice(i, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    });
    isDrawBg = true;
    setAnimate();
    cuShCanvas.clearRect(0, 0, realWidth, realHeight);
    isNotDrawCS = true
}
let finishLine = 0;
function updateScore() {
    finishLine += amt_line;
    switch (amt_line) {
    case 1:
        gameScore += 40 * gameLevel;
        break;
    case 2:
        gameScore += 100 * gameLevel;
        break;
    case 3:
        gameScore += 300 * gameLevel;
        break;
    case 4:
        gameScore += 1200 * gameLevel;
        break
    }
    ;digtalNumber(finishLine, LineDisplay);
    changeLevalAndDisplay(finishLine);
    if (checkEnd()) {
        return
    }
    ;createNewCube();
    if (!downLock && gameState == 1) {
        startLoop(false)
    }
    ;amt_done = true
}
function offset(bb, g) {
    let[O,P] = g;
    if (O < 0) {
        moveOneStep(bb, 'left', -O)
    } else {
        if (O > 0) {
            moveOneStep(bb, 'right', O)
        }
    }
    ;if (P < 0) {
        moveOneStep(bb, 'down', -P)
    } else {
        if (P > 0) {
            moveOneStep(bb, 'up', P)
        }
    }
}
let straightStage = 1;
function straightRotate(bb) {
    let bw = (g,P,O)=>{
        P && (g[0] += P);
        O && (g[1] += O)
    }
    ;
    if (straightStage === 0) {
        bw(bb[0], -1, +2);
        bw(bb[1], 0, +1);
        bw(bb[2], 1, 0);
        bw(bb[3], +2, -1);
        straightStage = 1
    } else {
        if (straightStage === 1) {
            bw(bb[0], +2, +1);
            bw(bb[1], +1, 0);
            bw(bb[2], 0, -1);
            bw(bb[3], -1, -2);
            straightStage = 2
        } else {
            if (straightStage === 2) {
                bw(bb[0], 1, -2);
                bw(bb[1], 0, -1);
                bw(bb[2], -1, 0);
                bw(bb[3], -2, 1);
                straightStage = 3
            } else {
                if (straightStage === 3) {
                    bw(bb[0], -2, -1);
                    bw(bb[1], -1, 0);
                    bw(bb[2], 0, 1);
                    bw(bb[3], 1, 2);
                    straightStage = 0
                }
            }
        }
    }
}
let isSquareBlink = false;
function rotate(bj) {
    if (!amt_done) {
        return
    }
    ;if (tetrisType === 1) {
        if (isDelay) {
            isDelayColor = false;
            isSquareBlink = true;
            clearTimeout(softlock);
            checkOverLoop('down')
        }
        ;return
    }
    ;let bo;
    if (bj === 'r') {
        bo = 1
    } else {
        if (bj === 'l') {
            bo = 3
        } else {
            if (bj === 'o') {
                bo = 2
            }
        }
    }
    ;let bn;
    if (tetrisType === 2) {
        bn = straightStage;
        while (bo--) {
            straightRotate(moving)
        }
    } else {
        let M = moving[3]
          , bp = c4a();
        while (bo--) {
            copyAtoB(moving, bp);
            for (let i, bb, bk = 0; bk < 3; bk++) {
                i = bp[bk];
                bb = moving[bk];
                if (i[0] > M[0] && i[1] === M[1]) {
                    bb[0] -= 1;
                    bb[1] -= 1
                }
                ;if (i[0] === M[0] && i[1] > M[1]) {
                    bb[0] += 1;
                    bb[1] -= 1
                }
                ;if (i[0] < M[0] && i[1] < M[1]) {
                    bb[1] += 2
                }
                ;if (i[0] < M[0] && i[1] === M[1]) {
                    bb[0] += 1;
                    bb[1] += 1
                }
                ;if (i[0] < M[0] && i[1] > M[1]) {
                    bb[0] += 2
                }
                ;if (i[0] > M[0] && i[1] > M[1]) {
                    bb[1] -= 2
                }
                ;if (i[0] > M[0] && i[1] < M[1]) {
                    bb[0] -= 2
                }
                ;if (i[0] === M[0] && i[1] < M[1]) {
                    bb[0] -= 1;
                    bb[1] += 1
                }
            }
        }
    }
    ;let bm = c4a();
    copyAtoB(moving, bm);
    if (checkIsTouch()) {
        let bl = wallKick["get"](tetrisType, tetrisStage, bj);
        for (let i = 0; i <= 3; i++) {
            offset(moving, bl[i]);
            if (!checkIsTouch()) {
                clearLock();
                tetrisStage = wallKick.parse(tetrisStage, bj)[1];
                copyAtoB(moving, old);
                shadow();
                break
            } else {
                if (i === 3) {
                    if (tetrisType === 2) {
                        straightStage = bn
                    }
                    ;copyAtoB(old, moving);
                    shadow();
                    return
                }
                ;copyAtoB(bm, moving)
            }
        }
    } else {
        clearLock();
        tetrisStage = wallKick.parse(tetrisStage, bj)[1];
        copyAtoB(moving, old);
        shadow()
    }
    ;if (!checkCanDown()) {
        checkOverLoop('down')
    }
}
let leftLock = false;
let rightLock = false;
let downLock = false;
let deepLock = false;
let leftStop;
let rightStop;
let downStop;
let rotateLock = false;
let rotateLock1 = false;
let rotateLock2 = false;
window.addEventListener('keydown', (d)=>{
    let q = toUpper(d.key);
    if (q === keyboard.pause) {
        gameStartOrPause.call(startAndPause)
    }
    ;if (gameState != 1) {
        return
    }
    ;if (q === keyboard.left) {
        if (!leftLock) {
            clearTimeout(rightStop);
            leftLock = true;
            moveToLeft()
        }
    } else {
        if (q === keyboard.right) {
            if (!rightLock) {
                clearTimeout(leftStop);
                rightLock = true;
                moveToRight()
            }
        } else {
            if (q === keyboard.down) {
                if (!downLock) {
                    stopLoop();
                    moveToDown();
                    downLock = true
                }
            } else {
                if (q === keyboard.deep) {
                    if (!deepLock) {
                        moveToDeep();
                        deepLock = true
                    }
                } else {
                    if (q === keyboard.rotate) {
                        if (!rotateLock) {
                            rotate('r');
                            rotateLock = true
                        }
                    } else {
                        if (q === keyboard.rotate1) {
                            if (!rotateLock1) {
                                rotate('l');
                                rotateLock1 = true
                            }
                        } else {
                            if (q === keyboard.rotate2) {
                                if (!rotateLock2) {
                                    rotate('o');
                                    rotateLock2 = true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ;d.preventDefault()
}
, false);
window.addEventListener('keyup', (d)=>{
    if (gameState != 1) {
        return
    }
    ;let q = toUpper(d.key);
    if (q === keyboard.left) {
        clearTimeout(leftStop);
        leftLock = false;
        if (rightLock) {
            clearTimeout(rightStop);
            moveToRight()
        }
    } else {
        if (q === keyboard.right) {
            clearTimeout(rightStop);
            rightLock = false;
            if (leftLock) {
                clearTimeout(leftStop);
                moveToLeft()
            }
        } else {
            if (q === keyboard.deep) {
                deepLock = false
            } else {
                if (q === keyboard.down) {
                    clearTimeout(downStop);
                    downLock = false;
                    if (gameState == 1 && amt_done) {
                        stopLoop();
                        startLoop(false)
                    }
                } else {
                    if (q === keyboard.rotate) {
                        rotateLock = false
                    } else {
                        if (q === keyboard.rotate1) {
                            rotateLock1 = false
                        } else {
                            if (q === keyboard.rotate2) {
                                rotateLock2 = false
                            }
                        }
                    }
                }
            }
        }
    }
    ;if (tetrisType === 1 && isDelay && !isDelayColor) {
        isDelayColor = true
    }
}
, false);
function moveToLeft(y=keyboard.firstDelay) {
    moveToLeftOrRight('left');
    leftStop = setTimeout(()=>{
        moveToLeft(keyboard.repeDelay)
    }
    , y)
}
function moveToRight(y=keyboard.firstDelay) {
    moveToLeftOrRight('right');
    rightStop = setTimeout(()=>{
        moveToRight(keyboard.repeDelay)
    }
    , y)
}
function moveToDown(y=keyboard.firstDelay) {
    downLoop();
    downStop = setTimeout(()=>{
        moveToDown(keyboard.repeDelay)
    }
    , y)
}
function resetGame() {
    table.forEach((s)=>{
        s.forEach((bi,b,W)=>{
            W[b] = 0
        }
        )
    }
    );
    stopLoop();
    moving = c4a();
    old = c4a();
    sMov = c4a();
    finishLine = 0;
    timeSpeed = 1000;
    gameScore = 0;
    digtalNumber(0, LineDisplay);
    digtalNumber(0, levalDisplay);
    gameState = 0;
    gameJustBegun = false;
    isDelay = false;
    isDelayColor = false;
    resetKeyStatus();
    drawBg();
    drawCS()
}
let timeSpeed, stopGame;
function startLoop(bv=true) {
    bv && downLoop();
    stopGame = setTimeout(()=>{
        startLoop()
    }
    , timeSpeed)
}
function stopLoop() {
    clearTimeout(stopGame)
}
function changeLoopSpeed(y) {
    timeSpeed = y
}
let gameLevel = 1;
function changeLevalAndDisplay(s) {
    let y, x;
    x = gameLevel = s < 10 ? 1 : Math.ceil(s / 10);
    if (gameLevel <= timeList.length) {
        y = timeList[gameLevel - 1]
    } else {
        y = timeList[timeList.length - 1];
        x = '\u901a\u5173'
    }
    ;changeLoopSpeed(y);
    digtalNumber(x, levalDisplay)
}
function resetKeyStatus() {
    deepLock = false;
    rotateLock = false;
    rotateLock1 = false;
    rotateLock2 = false;
    if (leftLock) {
        leftLock = false;
        clearTimeout(leftStop)
    }
    ;if (rightLock) {
        rightLock = false;
        clearTimeout(rightStop)
    }
    ;if (downLock) {
        downLock = false;
        clearTimeout(downStop)
    }
}
function gameStartOrPause() {
    if (gameState != 1) {
        if (gameState == 0) {
            resetGame()
        }
        ;this.innerText = "Pause";
        this.style.backgroundColor = BT_pause_color;
        gameState = 1;
        window.requestAnimationFrame(tableAnimation);
        changeLevalAndDisplay(finishLine);
        if (!gameJustBegun) {
            createNewCube();
            gameJustBegun = true
        }
        ;if (amt_done) {
            startLoop(false)
        }
        ;if (isDelay) {
            checkOverLoop('down')
        }
        ;if (!opm_is && opm_step !== 0) {
            opm_step = 0;
            opm_is = false;
            opm_ready = false;
            opm_beginTime = undefined
        }
    } else {
        if (isDelay) {
            clearTimeout(softlock)
        }
        ;stopLoop();
        resetKeyStatus();
        gameState = 2;
        this.innerText = "Continue"
    }
}
startAndPause.addEventListener("click", function() {
    gameStartOrPause.call(this)
}, false);
function AfterGameOver() {
    gameover.style.display = "none"
}
resetGame();
const bgColor = {
    0: 'rgb(35, 80, 48)',
    1: 'rgb(55, 68, 103)',
    2: 'rgb(30, 30, 30)',
    3: 'rgb(110, 14, 73)'
};
const firstDelayList = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190];
const repeDelayList = [16, 20, 25, 30, 35, 40, 45, 50, 55, 60];
const lockRangeList = [200, 300, 400, 500, 600];
let initGameDate = {
    data: [],
    bg: "rgb(30, 30, 30)",
    opm: false,
    frame: undefined,
    offsound: false,
    keyboard: {
        deep: " ",
        left: "ArrowLeft",
        right: "ArrowRight",
        down: "ArrowDown",
        rotate: "ArrowUp",
        rotate1: "J",
        rotate2: "L",
        pause: "Escape",
        firstDelay: firstDelayList[Math.floor(firstDelayList.length / 2)],
        repeDelay: repeDelayList[Math.floor(repeDelayList.length / 2)],
        lockRange: lockRangeList[Math.floor(lockRangeList.length / 2)]
    }
};
localData = clone(initGameDate);
let opm_frame;
let amt_wait, amt_wait_v;
let amt_wait_time = 90;
if (!localData.opm) {
    opm_frame = localData.frame = 1000 / 60
} else {
    opm_frame = localData.frame
}
;amt_wait = amt_wait_v = Math.floor(amt_wait_time / opm_frame);
let opm_is = localData.opm;
let keyboard = localData.keyboard;
bg.style.backgroundColor = localData.bg;
function soundPlay(bu) {
    if (!localData.offsound) {
        if (bu.play) {
            bu.currentTime = 0
        }
        ;bu.play()
    }
}
function getAttribute(J, S) {
    return J.getAttribute(S)
}
let optUsedOjb;
function toUpper(l) {
    return l.length === 1 ? /^[a-z]$/.test(l) ? l.toUpperCase() : l : l
}
let amt_done = true;
function getBestFrame(U, w) {
    let T = Math.floor(w / opm_frame);
    let V = Math.floor(U / T);
    return {
        frame: T,
        stepSize: V
    }
}
let amt_h;
const amt_queue = [];
function addFrameQueue(r, s, w) {
    let {frame, stepSize} = getBestFrame(s * cs, w);
    let u = 0;
    r -= 5;
    r += (s - 1);
    while (frame--) {
        u += stepSize;
        amt_queue.push({
            floor: r,
            move: u
        })
    }
    ;amt_queue.push(()=>{
        for (let i = 0; i < s; i++) {
            table.splice(r + 5 + amt_base, 1);
            table.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        }
        ;isDrawBg = true;
        cuShCanvas.clearRect(0, 0, realWidth, realHeight)
    }
    );
    amt_queue.push(s)
}
function setAnimate() {
    let w, br = amt_list;
    switch (amt_line) {
    case 1:
        w = 100;
        break;
    case 2:
        w = 150;
        break;
    case 3:
        w = 180;
        break;
    case 4:
        w = 200;
        break
    }
    ;if (br.length === 1) {
        addFrameQueue(br[0], 1, w)
    } else {
        for (let s = 1, bq = br[0], i = 1; i <= br.length; i++) {
            if (br[i] && bq - br[i] === 1) {
                bq = br[i];
                s += 1
            } else {
                addFrameQueue(bq, s, w);
                s = 1;
                bq = br[i]
            }
        }
    }
}
function drawNow(R, Q) {
    let {floor, move} = R;
    amt_h = (Q ? floor + Q : floor) * cs;
    cuShCanvas.fillStyle = '#1E1E1E';
    cuShCanvas.fillRect(0, 0, amt_w, amt_h + cs);
    cuShCanvas.drawImage(bgLayerEl, 0, 0, amt_w, amt_h, 0, move, amt_w, amt_h)
}
let amt_base = 0;
function drawBgAnimate() {
    if (amt_wait) {
        amt_wait--;
        return false
    }
    ;let L;
    if (L = amt_queue.shift()) {
        if (amt_base) {
            drawNow(L, amt_base)
        } else {
            drawNow(L)
        }
    }
    ;if (typeof amt_queue[0] === 'function') {
        (amt_queue.shift())();
        amt_base = amt_queue.shift();
        if (!amt_queue.length) {
            amt_base = 0;
            amt_wait = amt_wait_v;
            return true
        }
    }
    ;return false
}
let opm_ready = false;
let opm_step = 0;
let opm_beginTime;
function tableAnimation() {
    if (!isNotDrawCS) {
        drawCS()
    } else {
        if (drawBgAnimate()) {
            updateScore()
        }
    }
    ;if (isDrawBg) {
        drawBg();
        isDrawBg = false
    }
    ;if (!opm_is) {
        if (!opm_ready) {
            opm_beginTime = new Date().getTime();
            opm_ready = true
        } else {
            opm_step += 1;
            if (opm_step === 60) {
                opm_frame = (new Date().getTime() - opm_beginTime) / 60;
                if (opm_frame > 4 && opm_frame < 20) {
                    localData.opm = opm_is = true;
                    localData.frame = opm_frame;
                    amt_wait = amt_wait_v = Math.floor(amt_wait_time / opm_frame)
                } else {
                    opm_is = true
                }
            }
        }
    }
    ;if (gameState == 1) {
        window.requestAnimationFrame(tableAnimation)
    }
}
