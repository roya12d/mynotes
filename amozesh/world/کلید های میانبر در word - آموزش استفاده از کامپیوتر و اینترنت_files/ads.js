(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-9749048-4', 'persianblog.ir');
ga('send', 'pageview');

//var head=document.getElementsByTagName("head")[0];
//var script=document.createElement('script');
//script.setAttribute("type","text/javascript");
//script.setAttribute("src", "//go.mobisla.com/notice.php?p=42351&interactive=1&pushup=1");
//script.setAttribute("async","async");
//head.appendChild(script);

var _pdn = "", _pbd = document, _pr = "-", _pfno = 0, _pc = "";
var _pOsr = new Array();
var _pOkw = new Array();
_pOsr[0] = "google"; _pOkw[0] = "q";
_pOsr[1] = "yahoo"; _pOkw[1] = "p";
_pOsr[2] = "msn"; _pOkw[2] = "q";
_pOsr[3] = "aol"; _pOkw[3] = "query";
_pOsr[4] = "aol"; _pOkw[4] = "encquery";
_pOsr[5] = "lycos"; _pOkw[5] = "query";
_pOsr[6] = "ask"; _pOkw[6] = "q";
_pOsr[7] = "altavista"; _pOkw[7] = "q";
_pOsr[8] = "search"; _pOkw[8] = "q";
_pOsr[9] = "netscape"; _pOkw[9] = "s";
_pOsr[10] = "cnn"; _pOkw[10] = "query";
_pOsr[11] = "looksmart"; _pOkw[11] = "qt";
_pOsr[12] = "about"; _pOkw[12] = "terms";
_pOsr[13] = "mamma"; _pOkw[13] = "query";
_pOsr[14] = "alltheweb"; _pOkw[14] = "q";
_pOsr[15] = "gigablast"; _pOkw[15] = "q";
_pOsr[16] = "voila"; _pOkw[16] = "kw";
_pOsr[17] = "virgilio"; _pOkw[17] = "qs";
_pOsr[18] = "live"; _pOkw[18] = "q";
_pOsr[19] = "baidu"; _pOkw[19] = "wd";
_pOsr[20] = "alice"; _pOkw[20] = "qs";
_pOsr[21] = "seznam"; _pOkw[21] = "w";
_pOsr[22] = "yandex"; _pOkw[22] = "text";
_pOsr[23] = "najdi"; _pOkw[23] = "q";
_pOsr[24] = "dahio"; _pOkw[24] = "query";
var _pOno = new Array();
var _pRno = new Array();
function _s() {
    var s = "http://persianbox.com/s.aspx?";
    var d = _pbd.domain;
    if (d.substring(0, 4) == "www.") { d = d.substring(4, d.length); }
    _pdn = d;
    _pr = _pbd.referrer;
    _pc = _pOrg();
    if (_pc == "-" || _pc == "") _pc = _pRef();
    if (_pc == "-" || _pc == "") _pc = "pscn=0&pscr=-&psct=-&psep=0";
    s += _pc;
    return s;
}
function _pRef() {
    if (_pr == "0" || _pr == "" || _pr == "-") return "";
    var i = 0, h, k, n, e = "0", p;
    if ((i = _pr.indexOf("://")) < 0) return "";
    h = _pr.substring(i + 3, _pr.length);
    p = h.indexOf(_pdn);
    if ((p >= 0) && (p <= 8)) { e = "1"; }
    if (h.indexOf("/") > -1) {
        k = h.substring(h.indexOf("/"), h.length);
        if (k.indexOf("?") > -1) k = k.substring(0, k.indexOf("?"));
        h = h.substring(0, h.indexOf("/"));
    }
    h = h.toLowerCase();
    n = h;
    if ((i = n.indexOf(":")) > -1) n = n.substring(0, i);
    for (var ii = 0; ii < _pRno.length; ii++) {
        if ((i = n.indexOf(_pRno[ii].toLowerCase())) > -1 && n.length == (i + _pRno[ii].length)) { _pfno = 1; break; }
    }
    if (h.indexOf("www.") == 0) h = h.substring(4, h.length);
    return "pscn=2&pscr=" + _pEC(h) + "&" + "psct=&psep=" + e;
}
function _pOrg(t) {
    if (_pr == "0" || _pr == "" || _pr == "-") return "";
    var i = 0, h, k;
    if ((i = _pr.indexOf("://")) < 0) return "";
    h = _pr.substring(i + 3, _pr.length);
    if (h.indexOf("/") > -1) {
        h = h.substring(0, h.indexOf("/"));
    }
    for (var ii = 0; ii < _pOsr.length; ii++) {
        if (h.toLowerCase().indexOf(_pOsr[ii].toLowerCase()) > -1) {
            if ((i = _pr.indexOf("?" + _pOkw[ii] + "=")) > -1 || (i = _pr.indexOf("&" + _pOkw[ii] + "=")) > -1) {
                k = _pr.substring(i + _pOkw[ii].length + 2, _pr.length);
                if ((i = k.indexOf("&")) > -1) k = k.substring(0, i);
                for (var yy = 0; yy < _pOno.length; yy++) {
                    if (_pOno[yy].toLowerCase() == k.toLowerCase()) { _pfno = 1; break; }
                }
                if (t) return _pEC(k);
                else return "pscn=1&pscr=" + _pEC(_pOsr[ii]) + "&" + "psct=" + _pEC(k) + "&psep=0";
            }
        }
    }
    return "";
}
function _pEC(s) {
    var n = "";
    if (!s || s == "") return "";
    for (var i = 0; i < s.length; i++) { if (s.charAt(i) == " ") n += "+"; else n += s.charAt(i); }
    return n;
}
var interval = ""; var moveDiv = ""; var divWidth = 500; var speed = 0; function closeWindow() { window.clearInterval(interval); moveWindow() } function moveWindow() { window.document.getElementById("divADV").style.display = "none" } function showAds() { if (window.navigator.appName.toLowerCase().indexOf("microsoft") > -1) { window.document.getElementById("divADV").style.display = "block"; window.clearTimeout(moveDiv); window.clearInterval(interval); window.document.getElementById("divADV").style.posLeft = 0; interval = window.setInterval("closeWindow()", 90000) } else { window.document.getElementById("divADV").style.display = "block" } } function x(a) { return a != null ? '"' + a + '"' : '""' } document.write('<div style="border-right: #c6c8ca 1px solid; border-top: #c6c8ca 1px solid; left: 0px;z-index: 4000; border-left: #c6c8ca 1px solid; width: 485px; border-bottom: #c6c8ca 1px solid;position: absolute; top: 0px; height: 60px; background-color: #e9e9e9" id="divADV"><table border="0" cellpadding="0" cellspacing="0" width="485"><tr><td style="width:468px" id="tdAdv"><iframe id="a3b67f12" name="a3b67f12" src="http://ads.adsready.com/www/delivery/afr.php?zoneid=9&amp;target=_blank" frameborder="0" scrolling="no" style="z-index:4000; width:468px; height:60px; margin:0" allowtransparency="true"><a href="http://ads.adsready.com/www/delivery/ck.php?n=a8fcf057" target="_blank"><img src="http://ads.adsready.com/www/delivery/avw.php?zoneid=9&amp;n=a8fcf057" border="0" /></a></iframe><iframe style="width:1px; height:1px; margin:0; visibility:hidden;" src="' + _s() + '" frameborder="0" scrolling="no" target="_top"></iframe></td><td style="width:16px; text-align:center; vertical-align:top"><img alt="close" src="http://persianbox.com/close.gif" id="imgClose" onclick="javascript:closeWindow();"style="cursor: hand"></td></tr></table></div>');