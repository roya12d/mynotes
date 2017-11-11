var strtypekeyboard="English" ;
function FKeyPress(myfield,e)
{
var key;
if (window.event)
 key = window.event.keyCode;
else if (e)
 key = e.which;
if (key>31 && strtypekeyboard == "Farsi")
if (key<128)
{
if (window.event)
 window.event.keyCode=' !"#$%،گ)(×+و-./0123456789:ک,=.؟@ِذ}ىُىلآ÷ـ،/’د×؛َءٍف‘{ًْإ~جژچ^_پشذزیثبلاهتنمئدخحضقسفعرصطغظ<|>ّ'.charCodeAt(key-32);
else if (e)
 e.which=' !"#$%،گ)(×+و-./0123456789:ک,=.؟@ِذ}ىُىلآ÷ـ،/’د×؛َءٍف‘{ًْإ~جژچ^_پشذزيثبلاهتنمئدخحضقسفعرصطغظ<|>ّ'.charCodeAt(key-32);
 }
 return true;
}

function FKeyDown(objtext1)
{
   if (window.event.keyCode==145)  
      if (strtypekeyboard == "Farsi")
          strtypekeyboard = "English" ;
        else
         strtypekeyboard = "Farsi"; 
    if (window.event.keyCode==145) {  window.event.keyCode=0; }
   return true;
}

function change(obj){
if (strtypekeyboard == "Farsi"){
strtypekeyboard = "English"
}else{
strtypekeyboard = "Farsi"
}
obj.focus();
}
