Vue.component('shutthebox-matchfield', {
    template:`
    <div>
        <button v-for="index in gridsize" :key="index" id="'unshut-' + (index + 1)" class="cell-flex cell font-light" @click="shut(index)">
            {{ index }}
        </button>
        <br>
        <br>
        <div class="matchfield-divider"></div>
        <br>
        <button v-for="index in gridsize" :key="index" id="'shut-' + (index + 1)" class="cell-flex hidden cell-shut font-light" disabled>
            {{ index }}
        </button>
    </div>
    `,
    props: {
    gridsize: Number
    },
    methods: {
        shut(i) {
          websocket.send(JSON.stringify({"index": i}));
          updateField();
          updateErrorMsg();
        }
    }
});

function updateField() {
    if (controller.field) {
        for (let i = 0; i < 12; i++) {
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
Vue.component('shutthebox-dice', {
    template:`
    <div>
        <br>
        <div id="err" class="alert alert-danger text-center" role="alert"></div>
        <div class="dice-container">
            <div id="die1" class="dice">
            </div>
            <div id="die2" class="dice">
            </div>
            <br>
            <br>
            <div class="dice-container">
                <button class="menu-button" onclick="rollDice()">WÜRFELN!</button>
                <br><br>
                <div class="row justify-content-center">
                    <button class="btn btn-outline-dark btn-lg" onclick="nextPlayer()">NÄCHSTER SPIELER</button>
                </div>
            </div>
        </div>
    </div>
    `,
    props: {
    gridsize: Number
    },
    methods: {
        shut(i) {
          websocket.send(JSON.stringify({"index": i}));
          updateField();
          updateErrorMsg();
        },
        updateField() {
            if (controller.field) {
                for (let i = 0; i < gridsize; i++) {
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
    }
});

$(document).ready(() => {
    connectWebSocket();
    new Vue({
        el: '#shutthebox-game'
    });
});