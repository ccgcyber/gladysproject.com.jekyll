var waitingFor = false;
var points = 0;
var duration = 400;
var buttonName;

function addpointsto(elementId){
    if(waitingFor){
        $(elementId).html($(elementId).html() + '.');
        points++;
        if(points >= 3)
            setTimeout(function(){ resetPoints(elementId); }, duration);
        else
            setTimeout(function(){ addpointsto(elementId); }, duration);
    }
}

function resetPoints (elementId){
    if(waitingFor){
        points = 0;
        $(elementId).html("Poster ");
        setTimeout(function(){ addpointsto(elementId); }, duration);
    }
}

function validateEmail(email){
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    return re.test(email);
}

$(function(){

    $("#btnContactUs").click(function(){
        waitingFor = true;
        buttonName = $("#btnContactUs").attr("value");
        resetPoints("#btnContactUs");

        var msg = {
            name: $('#name').val(),
            email: $('#email').val(),
            description: $('#message').val()
        };

        if(!validateEmail(msg.email)){
            waitingFor = false;
            resetPoints("#btnContactUs");
            sweetAlert("Oops...", 'Invalid email !', "error");
            return ;
        }

        $.ajax({
            url: 'https://qc8vn6t0nl.execute-api.eu-west-1.amazonaws.com/prod/contactPage',
            type: 'POST',
            data: JSON.stringify(msg),
            contentType: 'application/json'
        })
        .done(function(data){

                waitingFor = false;
                $("#btnContactUs").html(buttonName);
                    
                swal("Good job!", "Your message has been submitted !", "success");
                $('#message').val("");
                ga('send', 'event', 'button', 'contact', 'send-message');

        })
        .fail(function(){
            waitingFor = false;
            $("#btnContactUs").html(buttonName);
            sweetAlert("Oops...", data.error, "error");
            ga('send', 'event', 'button', 'contact', 'send-message-failed', data.error);
        });
        return false;
    });

});