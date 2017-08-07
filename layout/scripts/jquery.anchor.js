<script>
       $(function() {
           $(‘a[href=#cta]’).click(function() {
               $(‘html,body’).animate({
                 scrollTop:$(‘#cta’).offset().top
               }, “show”);
               return false;
           });
           $(‘a[href=#word]’).click(function() {
               $(‘html,body’).animate({
                 scrollTop:$(‘#word’).offset().top
               }, “show”);
               return false;
           });
 
       });    
   </script>