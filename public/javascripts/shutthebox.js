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

function request(method, url, data, dataType, contentType) {
     $.ajax({
            method: method,
            url: url,
            data: JSON.stringify(data),
            dataType: dataType,
            contentType: contentType,

            success: function(response) {
                console.log(response);
            },

            error: function(response) {
                console.error(response);
            }
        });
}

function startGame() {
    let checkBoxMatchfield = document.getElementById("cb-matchfield");
    let checkBoxAI = document.getElementById("cb-ai");
    request("PUT", "/json", { "ai": checkBoxAI.checked, "bigMatchfield": checkBoxMatchfield.checked }, "json", "application/json");
    location.href = "/ingame"
}

$( document ).ready(function() {
    loadJson();
});