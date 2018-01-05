function mc(a) {
    ret = "";
    var b = "0123456789ABCDEF";
    if (a == ' '.charCodeAt()) {
        ret = "+"
    } else if ((a < '0'.charCodeAt() && a != '-'.charCodeAt() && a != '.'.charCodeAt()) || (a < 'A'.charCodeAt() && a > '9'.charCodeAt()) || (a > 'Z'.charCodeAt() && a < 'a'.charCodeAt() && a != '_'.charCodeAt()) || (a > 'z'.charCodeAt())) {
        ret = "%";
        ret += b.charAt(a >> 4);
        ret += b.charAt(a & 15)
    } else {
        ret = String.fromCharCode(a)
    };
    return ret
};

function m(a) {
    return (((a & 1) << 7) | ((a & (0x2)) << 5) | ((a & (0x4)) << 3) | ((a & (0x8)) << 1) | ((a & (0x10)) >> 1) | ((a & (0x20)) >> 3) | ((a & (0x40)) >> 5) | ((a & (0x80)) >> 7))
};

function md6(a) {
    var b = "";
    var c = 0xbb;
    for (i = 0; i < a.length; i++) {
        c = m(a.charCodeAt(i)) ^ (0x35 ^ (i & 0xff));
        var d = c.toString(16);
        b += mc(c)
    };
    return b
}