var controller = {}
var websocket = new WebSocket("ws://localhost:9000/websocket");

function startGame() {
    let checkBoxMatchfield = document.getElementById("cb-matchfield");
    let checkBoxAI = document.getElementById("cb-ai");
    websocket.send(JSON.stringify({ "ai": checkBoxAI.checked, "bigMatchfield": checkBoxMatchfield.checked }));
    location.href = "/ingame"
}

function shut(i) {
    websocket.send(JSON.stringify({"index": i}));
    updateField();
    updateErrorMsg();
}

function rollDice() {
    websocket.send("rollDice");
    updateDice();
    updateErrorMsg();
}

function updateErrorMsg() {
    msg = controller.error;
    if (msg) {
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
    }
}

function resetErrorMsg() {
    elem = $('#err')
    elem.html("ERROR");
    elem.css('visibility', 'hidden');
}

function nextPlayer() {
    websocket.send("nextPlayer");
    if (controller.turn < 1) {
        updateField();
        resetErrorMsg();
    } else {
        location.href = "/scoreboard";
    }
}

function updateField() {
    if (controller.field) {
        for (let i = 0; i < controller.field.length; i++) {
            if (controller.field[i]) {
                $('#unshut-' + (i+1)).css('opacity', '0');
                $('#shut-' + (i+1)).css('opacity', '1');
            } else {
                $('#unshut-' + (i+1)).css('opacity', '1');
                $('#shut-' + (i+1)).css('opacity', '0');
            }
        }
    }
}

function updateDice() {
    if (controller.dice) {
        $('#die1').html(JSON.stringify(controller.dice.die1));
        $('#die2').html(JSON.stringify(controller.dice.die2));
    }
}

function undo() {
    websocket.send("undo");
    updateField();
    updateErrorMsg();
}

function redo() {
    websocket.send("redo");
    updateField();
    updateErrorMsg();
}

function connectWebSocket() {
    websocket.onopen = (event) => {
        console.log("Connected to Websocket");
    };

    websocket.onclose = () => {
        console.log("Connection with Websocket Closed!");
    };

    websocket.onerror = (error) => {
        console.log("Error in Websocket Occured: " + error);
    };

    websocket.onmessage = (e) => {
        if (typeof e.data === "string") {
        console.log("onmessage");
            controller = JSON.parse(e.data);
            console.log(controller)
            updateField();
            updateDice();
            updateErrorMsg();

            if (controller.turn > 1) {
                location.href = "/scoreboard";
            }
        }
    };
}


$( document ).ready(function() {
    connectWebSocket();
});