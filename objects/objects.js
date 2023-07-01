const player = {
    name: "Jarek",
    score: 0,

    addScore(newScore) {
        player.score += newScore;
    }
}

// console.log(player.name, player.score);
//
// player.addScore(21);
//
// console.log(player.score)

// Ten kod wyżej jest zły, ponieważ, żeby stworzyć nowy obiekt tego typu, trzeba zduplikowac caly kod

function player1(name, score) {
    return {
        name,
        score,
        addScore(newScore) {
            this.score += newScore;
        }
    }
}

const newPlayer = player1("jarek", 11)
// console.log(newPlayer);
// newPlayer.addScore(22);
// console.log(newPlayer);
//
const newPlayerSecond = player1("Eryk", 22);
// console.log(newPlayerSecond);
// newPlayerSecond.addScore(33);
// console.log(newPlayerSecond);

// funkcja addScore dla kazdego playera jest taka sama, ale nasz kod tworzy ja osobno dla kazdego gracza

function Player(name, score) {
    this.name = name;
    this.score = score;
}

Player.prototype.addScore = function(newScore) {
    this.score += newScore;
}

// const p1 = Player("Ahmed", 1);
// console.log(p1); // undefined, bo Player nie ma return oraz nie zostało użyte słowo kluczowe "new"

const p2 = new Player("Wacek", 1);
// console.log(p2);

p2.addScore(44);
// console.log(p2)

class PlayerC {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    addScore(newScore) {
        this.score += newScore;
    }
}

const p3 = new PlayerC("Adam", 1);
// console.log(p3);

p3.addScore(33);
// console.log(p3)

const o = {
    magic: 42,

    fn1: function(){},
    fn2: () => {},
    fn3(){}
}