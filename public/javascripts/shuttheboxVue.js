var controller = {}
var websocket = new WebSocket("ws://localhost:9000/websocket");

Vue.component('shutthebox-matchfield', {
    template:`
    <div>
        <button v-for="index in gridsize" :key="index" id="unshut-index + 1" class="cell-flex cell font-light" @click="shut(index)">
            {{ index }}
        </button>
        <br>
        <br>
        <div class="matchfield-divider"></div>
        <br>
        <button v-for="index in gridsize" :key="index" id="shut-index + 1" class="cell-flex hidden cell-shut font-light" disabled>
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