//User Logic
$(document).ready(function(){
  $("form#PingPong").submit(function(event){
    event.preventDefault();

    var myNumber = parseInt($("input#ping").val());
    var results = PingPong(myNumber);
    $("#result").append("<li>"+results+"<li>");

  });
});

//Business Logic
var PingPong = function(react){
  if ((react %3) ===0 && (react %5) ===0) {
    return "pingpong"
  }else if ((react %5)===0){
    return "pong"
  }
  else if ((react %3)===0){
    return "ping"
  }
  else{
    return react;
    }
  };
