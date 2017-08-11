$(function(){
    // save
    $("#save").click(function () {
        localStorage["speed"] = $("#speed").val();
    });

    // show default value
    if (localStorage["speed"]) {
        document.getElementById('nowSpeed').innerHTML = localStorage["speed"];
    }
});