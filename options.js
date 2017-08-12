$(function(){
    // save
    $("#save").click(function () {
        localStorage["speed"] = $("#speed").val();
        location.reload();
    });

    // show default value
    if (localStorage["speed"]) {
        document.getElementById('nowSpeed').innerHTML = localStorage["speed"];
    }
});