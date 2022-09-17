(function ($) {
    $(document).ready(function() {    

        $('#product-tab li a:not(:first)').addClass('inactive');
        $('.product-content-area').hide();
        $('.product-content-area:first').show();
            
        $('#product-tab li a').click(function(){
            var t = $(this).attr('id');
          if($(this).hasClass('inactive')){ //this is the start of our condition 
            $('#product-tab li a').addClass('inactive');           
            $(this).removeClass('inactive');
            
            $('.product-content-area').hide();
            $('#'+ t + 'C').fadeIn('slow');
         }
        });
        
        });
        
  })(jQuery);
  