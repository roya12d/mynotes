var mobad = '0';
var eventpage = '511836057';
var hostofpage = 'kelidestan.com';
var nativead = 0;
var ismob = 0;
var activenative = 0;
function addtoq(pram, val){ if(val){clickyab_ad['ad_url'] += "&" + pram + "=" + val; };};
function addtoq2(pram, val){ if(val){clickyab_ad['ad_url_m'] += "&" + pram + "=" + val; };};
function encodeuri(b){ if(typeof encodeURIComponent == "function"){ return encodeURIComponent(b);}else{return escape(b);};};

var a = document;
if(typeof adcount === 'undefined') var adcount = 0;
if(typeof inner_loop === 'undefined') var inner_loop = [];
var fixmob = 0;

adcount++;

if(clickyab_ad['native']){ clickyab_ad['native'] = true }else{ clickyab_ad['native'] = false; };

if(clickyab_ad['width']=="320" && clickyab_ad['height']=="50"){

    clickyab_ad['ad_url_m'] = "http://a.clickyab.com/ads/?a="+clickyab_ad['id'];
    addtoq2("width",320);
    addtoq2("height",50);
    addtoq2("slot",clickyab_ad['slot']);
    addtoq2("adtype",clickyab_ad['ad_type']);
    addtoq2("domainname",clickyab_ad['domain']);
    addtoq2("logo",clickyab_ad['logo']);
    addtoq2("tracking",clickyab_ad['tracking']);
    addtoq2("loc",encodeuri(a.location));
    addtoq2("ref",encodeuri(a.referrer));
    a.write('<style>  .adhere iframe {  max-width:100%; display: block;margin: 0 auto; }</style><div class="adhere" style="position: fixed; width: 100%; z-index:99999999; left: 0; bottom: 0px; margin: 0; padding: 0; text-align: center;"><iframe name="clickyab_ads_frame_m" width=320 height=50 frameborder=0 src="' + clickyab_ad['ad_url_m'] +'" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">');
    a.write('</iframe></div>');
    fixmob = 1;

}else if(adcount <= 17){

    a.write('<style> .adhere iframe {  max-width:100%; display: block;margin: 0 auto; }</style><div class="adhere" id="spot_'+adcount+'"></div>');
    clickyab_ad['ad_url'] = "http://a.clickyab.com/ads/?a="+clickyab_ad['id'];
    addtoq("width",clickyab_ad['width']);
    addtoq("height",clickyab_ad['height']);
    addtoq("slot",clickyab_ad['slot']);
    addtoq("adtype",clickyab_ad['ad_type']);
    addtoq("domainname",clickyab_ad['domain']);
    addtoq("logo",clickyab_ad['logo']);
    addtoq("tracking",clickyab_ad['tracking']);
    addtoq("eventpage",eventpage);
    addtoq("loc",encodeuri(a.location));
    addtoq("ref",encodeuri(a.referrer));
    addtoq("adcount",adcount);
    var xadhtml = 'spot_' + adcount;

    inner_loop[adcount] =  '<iframe name="clickyab_frame" width='+clickyab_ad['width']+' height='+clickyab_ad['height']+' frameborder=0 src="' + clickyab_ad['ad_url'] +'" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no"></iframe>';

    document.getElementById(xadhtml).innerHTML = inner_loop[adcount];

	//function reloadad(){
	//    document.getElementById(xadhtml).innerHTML = inner_loop[adcount];
	//}
	//if(adcount == 1) var delay = 50;
	//if(adcount > 1) var delay = 500;
	//setTimeout(reloadad, adcount*delay);

};




