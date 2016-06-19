'use strict';

$("#logButton").on("click", function (){
    $("#logButton").css("background-color", "rgb(128,128,128)");
    $("#login").css("display", "inline");
    $("#signup").css("display", "none");
    $("#signButton").css("background-color", "white");
    $('#container').css("height", "40%")
});

$("#signButton").on("click", function(){
    $("#signButton").css("background-color", "rgb(128,128,128)");
    $("#login").css("display", "none");
    $("#signup").css("display", "inline");
    $("#logButton").css("background-color", "white");
    $('#container').css("height", "70%");
});