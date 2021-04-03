class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.nomen = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            nomen: this.nomen,
            distance: this.distance,
            score:this.score
        });
    }


  updateN(){
    var playerIndex = "players" + this.index;
    database.ref(playerIndex).set({
      
    });
  }
    
    getScore(){
        var score1Ref = database.ref("players/player1/score")
        score1Ref.on("value", (data) => {
            score1 = data.val();
        })
        stroke(0);
        fill("white");
        textSize(20);

        var score2Ref = database.ref("players/player2/score")
        score2Ref.on("value", (data) => {
            score2 = data.val();
        })
    }

    getName(){
        var name1Ref = database.ref("players/player1/nomen");
        name1Ref.on("value", (data) => {
            nomen1 = data.val();
        })
        stroke(0);
        fill("black");
        textSize(20);

        var player2Ref = database.ref("players/player2/nomen");
        player2Ref.on("value", (data) => {
            nomen2 = data.val();
        })
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }   
}