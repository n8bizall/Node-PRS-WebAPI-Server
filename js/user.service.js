$().ready(function(){
  

   function add(user){ 
    $.getJSON("http://localhost:5000/Users/Create", user)    
        .done(function(res){
                                  
            console.log(res);

        })
        .fail(function(err){
            console.error(err);
        });}

     $("#add").click(function(){
         var user = {
             Id:0,
             FirstName: $("#firstname").val(),
             LastName: $("#lastname").val(),
             UserName: $("#username").val(),
             Password: $("#password").val(),
             Phone: $("#phone").val(),
             Email: $("#email").val(),
             IsReviewer: $("#isreviewer").prop("checked"),
             IsAdmin: $("#isadmin").prop("checked")
         };
         add(user);
     });
    
});