function Kelidestan_Translation_Text_Show_Or_Hide(translation_text_show_or_not, translation_text_image_open_or_close) {
	// انتخاب تک عنصرها
	var image_open_or_close = document.getElementById(translation_text_image_open_or_close);
	var text_show_or_hide = document.getElementById(translation_text_show_or_not);
	if(text_show_or_hide.style.display == "block") {
		text_show_or_hide.style.display = "none";
		image_open_or_close.innerHTML = '<img src="../images/utility/translation_text_open.png" width="20px" height="20px" title="مشاهده متن اصلی">';
	}else{
		text_show_or_hide.style.display = "block";
		image_open_or_close.innerHTML = '<img src="../images/utility/translation_text_close.png" width="20px" height="20px"  title="بستن">';
	}
}

function Kelidestan_Translation_Text_Show_All() {
	// انتخاب همه عنصرهای کلاس
	var image_open_all = document.getElementsByClassName("translation_text_image_open_all_class");
	var text_show_or_hide_class = document.getElementsByClassName("translation_text_show_or_hide_class");
	var image_open_or_close = document.getElementsByClassName("translation_text_image_open_or_close_class");
	
	// نمایش همه
	for (var ii = 0; ii < text_show_or_hide_class.length; ii++) {
		text_show_or_hide_class[ii].style.display = "block";
	}
	// باید عکس همه دکمه ها به صورت بستن باشد
	for (var ii = 0; ii < image_open_or_close.length; ii++) {
		image_open_or_close[ii].innerHTML = '<img src="../images/utility/translation_text_close.png" width="20px" height="20px"  title="بستن">';
	}
	/*
	for (var ii = 0; ii < image_open_all.length; ii++) {
		image_open_all[ii].innerHTML = '<img src="../images/minus.png"  title="بستن">';
	}
	*/
}

function Kelidestan_Translation_Text_Hide_All() {
	// انتخاب همه عنصرهای کلاس
	var image_open_all = document.getElementsByClassName("translation_text_image_open_all_class");
	var text_show_or_hide_class = document.getElementsByClassName("translation_text_show_or_hide_class");
	var image_open_or_close = document.getElementsByClassName("translation_text_image_open_or_close_class");
	
	// نمایش همه
	for (var ii = 0; ii < text_show_or_hide_class.length; ii++) {
		text_show_or_hide_class[ii].style.display = "none";
	}
	// باید عکس همه دکمه ها به صورت باز کردن باشد
	for (var ii = 0; ii < image_open_or_close.length; ii++) {
		image_open_or_close[ii].innerHTML = '<img src="../images/utility/translation_text_open.png" width="20px" height="20px" title="مشاهده متن اصلی">';
	}
	/*
	for (var ii = 0; ii < image_open_all.length; ii++) {
		image_open_all[ii].innerHTML = '<img src="../images/minus.png"  title="بستن">';
	}
	*/
}