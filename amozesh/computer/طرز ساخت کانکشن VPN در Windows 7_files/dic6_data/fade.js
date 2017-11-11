$(document).ready(function() { 
    $('#myForm').ajaxForm({
        beforeSubmit: function(a,f,o) {
			$('#main-right').html('<img src="images/loading.gif" />').fadeIn('slow');
        },
        success: function(data) {
            var $out = $('#main-right');
            $out.html('');
            if (typeof data == 'object' && data.nodeType)
                data = elementToString(data.documentElement, true);
            else if (typeof data == 'object')
                data = objToString(data);
            $out.append(''+ data +'');
        }
    });
	    });