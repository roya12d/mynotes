// پنهان کردن لیست دسته بندی ها
function Kelidestan_Hide_Category_List(subject_id) {
	var display = $("#Kelidestan_Category_List_For_Subject_Id_"+subject_id).css("display");
	// alert(display);
	if(display == 'none'){
		// نمایش
		$("#Kelidestan_Category_List_For_Subject_Id_"+subject_id).css("display", "block");
	}else{
		// پنهان کردن
		$("#Kelidestan_Category_List_For_Subject_Id_"+subject_id).css("display", "none");
		$("#Kelidestan_Category_List_For_Subject_Id_"+subject_id).hide();
	}
}

//------------------------------------------------------------------------------------------------
// نمایش محتوای کلید به صورت تمام صفحه
function Kelidestan_Show_Center_Column_In_Full_Width() {
	var display2 = $("#sidebar2").css("display");
	var display1 = $("#sidebar1").css("display");
	// alert(display2);
	if(display2=='none' || display1=='none'){ // برخی موضوعات تنها دارای ستون سمت راست یا چپ می باشند
		// نمایش ستون سمت راست
		$("#sidebar2").css("display", "block");
		// نمایش ستون سمت چپ
		$("#sidebar1").css("display", "block");
		// کوچک کردن ستون وسط
		var d = document.getElementById("content");
		// d.className += " s12 m8 l6";
		d.className = "w3-col w3-container s12 m8 l6 w3-Silver";
	}else{
		// پنهان کردن ستون سمت راست
		$("#sidebar2").css("display", "none");
		$("#sidebar2").hide();
		// پنهان کردن ستون سمت چپ
		$("#sidebar1").css("display", "none");
		$("#sidebar1").hide();
		// افزودن کلاس به ستون وسط برای اینکه کل عرض صفحه را بپوشاند
		var d = document.getElementById("content");
		d.className += " s12 m12 l12";
	}
}

//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------


