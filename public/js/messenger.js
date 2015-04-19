    var socket = io();
    var myName =  top.opener.document.getElementById("first_name").value;

    $('form').submit(function(){
      document.getElementById('myMessage').focus();
        socket.emit('chat message',myName + " said: " + $('#myMessage').val());
        $('#myMessage').val('');
        return false;
    });


    socket.on('chat message', function(msg){
        if(msg != ''){
            $('#messages').append($('<li class="fadeInMessage">').text(msg));
            hour();
        }
    });

    function hour(){
        today=new Date();
        h=today.getHours();
        m=today.getMinutes();
        if(m < 10){
            m = "0" + today.getMinutes();
        }
        document.getElementById('hour').innerHTML= "Last message to: " + h + ":" + m;
    }

    function openChat(){
      window.open("/messenger.html");
    }
