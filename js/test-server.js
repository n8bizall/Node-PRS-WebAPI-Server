$().ready(function(){
    var users;
    var user;

   function list(users){ 
    $.getJSON("http://localhost:5000/Users/List")     //get a ist off all users
        .done(function(res){
            users = res.data;
            RenderTable(users);                       // calls render function for users var
            console.log(res);

        })
        .fail(function(err){
            console.error(err);
        });}

      function get(Id){
        $.getJSON("http://localhost:5000/Users/Get/"+Id)    //get a single user by id using any 
        .done(function(res){
            user = res.data;
            RenderDetailTable(user)
            console.log(res);
        })
        .fail(function(err){
            console.error(err);
        });

      }

      //list();
     // get(3);
     function RenderTable(users){
        var tbody = $("tbody")                                    //stores the tbody into tbody variable- calls a reference
        for(var user of users){
            var tr = "<tr>";
            tr += "<td>"+ user.FirstName + " " + user.LastName + "</td>"; 
            tr += "<td>" + user.UserName + "</td>";
            tr += "<td>" + user.Email + "</td>";
            tr += "<td>" + user.IsAdmin + "</td>";
            tr += "</tr>";
            tbody.append(tr);
        }
     }
     $("#getId").click(function(){
         var id = $("#theId").val();
         get(id);

     });
     function RenderDetailTable(user){
        $("#name").text(user.FirstName + " " + user.LastName);
        $("#username").text(user.UserName);
        $("#email").text(user.Email);
        $("#admin").text(user.IsAdmin);
     }
});