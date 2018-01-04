$(document).ready(function () {
  var i = 0;
      $('#greeting').click(function(){
        var Name = $('#name').val();

        // $('tbody#weatherdel>tr').remove();
          // if(Name==''){
          //   $('#disname').show();
          //   document.getElementById("disname").innerHTML="Please enter the your name";
          // }

          var urlReq = 'https://us-central1-active-guild-191119.cloudfunctions.net/hello_World'
          $.ajax({
            url: urlReq,
            type: "POST",
             dataType: "text",
            data: {
              "message":Name

            },
        // dataType: "",
        // xhrFields: {
        //     withCredentials: !0
        // },
        success: function(d) {

            console.log(d);
        },

        error: function() {
            console.log("error");
        }
            });
          });




});
