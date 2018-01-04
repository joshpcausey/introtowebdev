function rollDice() {
    return Math.ceil(Math.random() * (1 + 6 - 1));
}

var money = Number;
var moneyToStart = Number;
var Dice1 = Number;
var Dice2 = Number;
var rollAmmount = 0;
var maxMoney = 0;
var highestRollCount;

function playGame() {
    console.log(document.getElementById("startingbet").value);
    if(isNaN(document.getElementById("startingbet").value) || document.getElementById("startingbet").value <= 0) {
        document.getElementById("startingbet").value = "";
        alert("Please pick a number greater than zero.");
        return false;
    }
    else {
        money = document.getElementById("startingbet").value;
        moneyToStart = document.getElementById("startingbet").value;
        while(money > 0){
            Dice1 = rollDice();
            Dice2 = rollDice();
            rollAmmount += 1;
            if(Dice1 + Dice2 == 7){
                money += 4;
                console.log(money)
                if(money > maxMoney){
                    maxMoney = money;
                    highestRollCount = rollAmmount;
                }
            }
            else{
                money -= 1;
                console.log(money)
                if(money > maxMoney){
                    maxMoney = money;
                    highestRollCount = rollAmmount;
                }
            }
        }
    }
}