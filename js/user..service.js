$().ready(function(){

    function get(id) {
        $.getJSON("http://localhost:5000/Users/Get/" + id)
        .done(function(res){
           display(res.data);
           console.log(res);
        })
        .fail(function(err){
            console.error(err);
        })
    }
    function display(user){
        $("#idx").val(user.Id);
        $("#firstname").val(user.FirstName);
        $("#lastname").val(user.LastName);
        $("#username").val(user.UserName);
        $("#password").val(user.Password);
        $("#phone").val(user.Phone);
        $("#email").val(user.Email);
        $("#reviewer").prop("checked", user.IsReviewer);
        $("#admin").prop("checked", user.IsAdmin);
    }
  $("#getId").click(function(){
      var id = $("#theId").val();
      get(id);
  })
   function change(user){ 
    $.post("http://localhost:5000/Users/Change", user)    // method to add a user to the table
        .done(function(res){
                                  
            console.log(res);

        })
        .fail(function(err){
            console.error(err);
        });
    }

     $("#chg").click(function(){
         var user = {
             Id:$("#idx").val(),
             FirstName: $("#firstname").val(),
             LastName: $("#lastname").val(),
             UserName: $("#username").val(),
             Password: $("#password").val(),
             Phone: $("#phone").val(),
             Email: $("#email").val(),
             IsReviewer: $("#isreviewer").prop("checked"),
             IsAdmin: $("#isadmin").prop("checked")
         };
         change(user);
     });
    
});