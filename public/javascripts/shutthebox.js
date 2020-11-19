function loadJson() {
    $.ajax({
        method: "GET",
        url: "/json",
        dataType: "json",

        success: function (result) {
            //
        }
    })
}


$( document ).ready(function() {
    loadJson();
});