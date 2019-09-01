jQuery( document ).ready(function() {
    // only allow one checkbox per group.
    jQuery('.library-form-group').each(function(i, elm) {
    	var children = jQuery(this).find('input:checkbox');
    	jQuery(children).click(function() {
      	jQuery(children).not(this).prop('checked', false);
      });
    });
});
