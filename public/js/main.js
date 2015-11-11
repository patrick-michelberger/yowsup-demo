 $(function() {
     $('.error').hide();

     $("#submit_btn").click(function() {
         $('.error').hide();
         var phone = $("input#phone").val();
         if (phone == "") {
             $("label#phone_error").show();
             $("input#phone").focus();
             return false;
         }
         var message = $("textarea#message").val();
         if (message == "") {
             $("label#message_error").show();
             $("textarea#message").focus();
             return false;
         }

         $.ajax({
             type: "POST",
             url: "api/message",
             contentType: 'application/json',
             data: JSON.stringify({
             	"phone" : phone,
             	"message": message
             }),
             dataType: 'json',
             success: function() {
                 $('#message_form').html("<div id='message'></div>");
                 $('#message').html("<h2>Message Submitted!</h2>");
             }

         });
         return false;
     });

 });
