
        function Toggle(item, align) {
      obj=document.getElementById(item);
visible=(obj.style.display!="none")
   key=document.getElementById("x" + item);
   if (visible) {
     obj.style.display="none";
     key.innerHTML="<img src='images/CZModules/"+align+"/closed.gif' align='absmiddle' border='0'>";
   } else {
      obj.style.display="block";
     key.innerHTML="<img src='images/CZModules/"+align+"/open.gif' align='absmiddle' border='0'>";
   }
}
