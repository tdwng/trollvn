function time() {
    function e(e) {
        return 10 > e && (e = "0" + e), e
    }
    var t = new Date,
        o = new Array(7);
    o[0] = "Chá»§ nháº­t", o[1] = "Thá»© hai", o[2] = "Thá»© ba", o[3] = "Thá»© tÆ°", o[4] = "Thá»© nÄƒm", o[5] = "Thá»© sĂ¡u", o[6] = "Thá»© báº£y";
    var n = o[t.getDay()],
        r = t.getDate(),
        l = t.getMonth() + 1,
        u = t.getFullYear(),
        c = t.getHours(),
        d = t.getMinutes(),
        i = t.getSeconds();
    d = e(d), i = e(i), nowTime = c + ":" + d + ":" + i, 10 > r && (r = "0" + r), 10 > l && (l = "0" + l), t = n + ", " + r + "/" + l + "/" + u, tmp = '<span class="date">' + t + " | " + nowTime + "</span>", document.getElementById("clock").innerHTML = tmp, clocktime = setTimeout("time()", "1000", "JavaScript")
}
