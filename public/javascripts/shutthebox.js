var controller = {}


function loadJson() {
    $.ajax({
        method: "GET",
        url: "/json",
        dataType: "json",

        success: function (response) {
            controller = response;
        }
    });
}

function getRequest(url) {
    $.ajax({
            method: "GET",
            url: url,
            dataType: "json",

            success: function (response) {
                controller = response;
                console.log(response);
            },
            error: function(response) {
                console.error(response);
            }
        });
}

function postRequest(method, url, data) {
     $.ajax({
            method: method,
            url: url,
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json",

            success: function(response) {
                controller = response;
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
    postRequest("PUT", "/json",
        { "ai": checkBoxAI.checked, "bigMatchfield": checkBoxMatchfield.checked });
    location.href = "/ingame"
}

function shut(i) {
    loadJson();
    postRequest("POST", "/shut", {"index": i})
    controller.field.forEach(function(cell) {
        if (cell) {
            $('#unshut-' + i).css('opacity', '0');
            $('#shut-' + i).css('opacity', '1');
        }
    });
    loadJson();
}

function rollDice() {
    getRequest("/rollDice");
    $('#die1').html(JSON.stringify(controller.dice.die1));
    $('#die2').html(JSON.stringify(controller.dice.die2));
    loadJson();
}


$( document ).ready(function() {
    loadJson();
});