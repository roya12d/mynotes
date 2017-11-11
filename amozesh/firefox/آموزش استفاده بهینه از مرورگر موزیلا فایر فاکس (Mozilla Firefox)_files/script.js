/*Script For ThemeDesign.ir
by Mohsen Shareh*/

jQuery("document").ready(function($){
	
	var nav = $('.nav-container');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 190) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});

});

function changeFontSize(size)
{
	switch(size)
	{
		case "normal":
			fsize = '12px';
			break;
		case "large":
			fsize = '15px';
			break;
		case "small":
			fsize = '10px';
			break;
	}
	document.body.style.fontSize = fsize;
}

function changeStatusSlide(path)
{
	var clsname = document.getElementById('HeaderSlideButton').className;
	if(clsname == 'SlideArrowUp')
	{
		document.getElementById('HeaderSlideButton').className = 'SlideArrowDwon';
		document.getElementById('HeaderSlideButton').href = "javascript:Slide('Headercontent',{onComplete:function(){changeStatusSlide();}}).down();";
		slider = 1;
		setCookie('HeaderSlide','1',1,path,'','');
	}
	else
	{
		document.getElementById('HeaderSlideButton').className = 'SlideArrowUp';
		document.getElementById('HeaderSlideButton').href = "javascript:Slide('Headercontent',{onComplete:function(){changeStatusSlide();}}).up();";
		slider = 0;
		setCookie('HeaderSlide','0',1,path,'','');
	}
}

function setCookie( name, value, expires, path, domain, secure ){
var today = new Date();
today.setTime( today.getTime() );
if ( expires ){
expires = expires * 1000 * 60 * 60 * 24;
}
var expires_date = new Date( today.getTime() + (expires) );
document.cookie = name + "=" +escape( value ) +
( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
( ( path ) ? ";path=" + path : "" ) +
( ( domain ) ? ";domain=" + domain : "" ) +
( ( secure ) ? ";secure" : "" );
}


function BlockStatChange(o)
{
	object = o.parentNode.parentNode.childNodes;
	for (i=0; i<object.length; i++)
	{
		if(object[i].className == 'Contents')
		{
			if(object[i].style.display == 'none')
			{
				object[i].style.display = 'block';
				o.className = 'CBSB CBSBMin';
			}else
			{
				object[i].style.display = 'none';
				o.className = 'CBSB CBSBPlus';
			}
		}
	}
}

function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}

function submitRate(id,score)
{
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	{
	  alert ("Your browser does not support AJAX!");
	  return;
	}
	var theUL = document.getElementById('unit_ul'+id);
	theUL.innerHTML = '<div class="loading"></div>';
	var url="ajax.php?req=SubmitNewsRate&score="+score+"&id="+id;
	xmlHttp.onreadystatechange=loadRate;
	xmlHttp.open('GET', url, true);
	xmlHttp.send(null);
}
function loadRate()
{
	if(xmlHttp.readyState==4)
      {
		var response = xmlHttp.responseText;
        var update = new Array();

        if(response.indexOf('|') != -1) {
            update = response.split('|');
			document.getElementById(update[0]).innerHTML = update[1];
        }
	  }
}


function submitRate2(id,score)
{
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	{
	  alert ("Your browser does not support AJAX!");
	  return;
	}
	var theUL = document.getElementById('unit_ul'+id);
	theUL.innerHTML = '<div class="loading"></div>';
	var url="ajax.php?req=SubmitNewsRate2&score="+score+"&id="+id;
	xmlHttp.onreadystatechange=loadRate2;
	xmlHttp.open('GET', url, true);
	xmlHttp.send(null);
}
function loadRate2()
{
	if(xmlHttp.readyState==4)
      {
		var response = xmlHttp.responseText;
        var update = new Array();

        if(response.indexOf('|') != -1) {
            update = response.split('|');
			document.getElementById(update[0]).innerHTML = update[1];
        }
	  }
}



function submitRate3(id,score)
{
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null)
	{
	  alert ("Your browser does not support AJAX!");
	  return;
	}
	var theUL = document.getElementById('unit_ul'+id);
	theUL.innerHTML = '<div class="loading"></div>';
	var url="ajax.php?req=SubmitNewsRate3&score="+score+"&id="+id;
	xmlHttp.onreadystatechange=loadRate3;
	xmlHttp.open('GET', url, true);
	xmlHttp.send(null);
}
function loadRate3()
{
	if(xmlHttp.readyState==4)
      {
		var response = xmlHttp.responseText;
        var update = new Array();

        if(response.indexOf('|') != -1) {
            update = response.split('|');
			document.getElementById(update[0]).innerHTML = update[1];
        }
	  }
}



function Ccb_selectAll(obj)
	{
		var arrInput = document.getElementsByTagName("input");
		for (i=0; i<arrInput.length; i++) {
			if (arrInput[i].type == 'checkbox') {
				arrInput[i].checked = obj.checked;
			}
		}
}
