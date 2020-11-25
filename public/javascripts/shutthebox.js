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
        updateField();
        updateErrorMsg();
    });
}

function rollDice() {
    getRequest("/rollDice").then(() => {
        updateDice();
        updateErrorMsg();
    });

}

function updateErrorMsg() {
    updateJson().then(() => {
        msg = controller.error;
        elem = $('#err');
        if (msg.length <= 1) {
            elem.html("ERROR");
            elem.css('visibility', 'hidden');
        } else {
            if (msg == "Dice roll not allowed!") {
                elem.html("Würfeln ist noch nicht erlaubt!");
            }
            else if (msg == "This shut is not allowed") {
                elem.html("Dieser Spielzug ist nicht erlaubt!");
            }
            else if (msg == "Please roll the dice first!") {
                elem.html("Bitte zuerst würfeln!");
            }

            elem.css('visibility', 'visible');
        }
    });
}

function nextPlayer() {
    getRequest("/nextPlayer").then(() => {
        updateJson().then(() => {
            if (controller.turn <= 1) {
                updateField();
                updateErrorMsg();
            } else {
                location.href = "/scoreboard";
            }
        });
    });
}

function updateField() {
    updateJson().then(() => {
        console.log(controller);
        for (let i = 0; i < controller.field.length; i++) {
            if (controller.field[i]) {
                $('#unshut-' + (i+1)).css('opacity', '0');
                $('#shut-' + (i+1)).css('opacity', '1');
            } else {
                $('#unshut-' + (i+1)).css('opacity', '1');
                $('#shut-' + (i+1)).css('opacity', '0');
            }
        }
    });
}

function updateDice() {
    updateJson().then(() => {
        console.log(controller);
        $('#die1').html(JSON.stringify(controller.dice.die1));
        $('#die2').html(JSON.stringify(controller.dice.die2));
    });
}

function undo() {
    console.log("undo");
    getRequest("/undo").then(() => {
        updateField();
        updateErrorMsg();
    });
}

function redo() {
    console.log("redo");
    getRequest("/redo").then(() => {
        updateField();
        updateErrorMsg();
    });
}


$( document ).ready(function() {
    updateJson();
});