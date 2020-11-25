var controller = {}


function updateJson() {
    return $.ajax({
        method: "GET",
        url: "/json",
        dataType: "json",

        success: function (response) {
            controller = response;
        }
    });
}

function getRequest(url) {
    return $.ajax({
            method: "GET",
            url: url,
            dataType: "json",

            success: function (response) {
                controller = response;
            },
            error: function(response) {
                console.error(response);
            }
        });
}

function postRequest(method, url, data) {
     return $.ajax({
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
    updateJson();
    location.href = "/ingame"
}


function shut(i) {
    postRequest("POST", "/shut", {"index": i}).then(() => {
        updateJson().then(() => {
            controller.field.forEach(function(cell) {
                console.log(cell);
                if (cell === true) {
                    $('#unshut-' + i).css('opacity', '0');
                    $('#shut-' + i).css('opacity', '1');
                }
            });
        });

    });
}

function rollDice() {
    getRequest("/rollDice").then(() => {
        updateDice();
    });

}

function updateDice() {
    updateJson().then(() => {
        console.log(controller);
        $('#die1').html(JSON.stringify(controller.dice.die1));
        $('#die2').html(JSON.stringify(controller.dice.die2));
    });
}


$( document ).ready(function() {
    updateJson();
});