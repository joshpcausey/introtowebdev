function rollDice() {
    return Math.ceil(Math.random() * (1 + 6 - 1));
}

function playGame() {
    var money = 0;
    var moneyToStart = Number;
    var Dice1 = Number;
    var Dice2 = Number;
    var rollAmmount = 0;
    var maxMoney = 0;
    var highestRollCount;
    if(isNaN(document.getElementById("startingbet").value) || document.getElementById("startingbet").value <= 0) {
        document.getElementById("startingbet").value = "";
        alert("Please pick a number greater than zero.");
        return false;
    }
    else {
        money = Number(document.getElementById("startingbet").value);
        moneyToStart = Number(document.getElementById("startingbet").value);
        while(money > 0){
            Dice1 = rollDice();
            Dice2 = rollDice();
            rollAmmount += 1;
            if(Dice1 + Dice2 == 7){
                money += 4;
                if(money > maxMoney){
                    maxMoney = money;
                    highestRollCount = rollAmmount;
                }
            }
            else{
                money -= 1;
                if(money > maxMoney){
                    maxMoney = money;
                    highestRollCount = rollAmmount;
                }
            }
        }
    }
    document.getElementById("startingBetTable").innerHTML = "$" + moneyToStart;
    document.getElementById("totalRolls").innerHTML = rollAmmount;
    document.getElementById("highestAmmount").innerHTML = "$" + maxMoney;
    document.getElementById("highestAmmountRoll").innerHTML = highestRollCount;
    document.getElementById("playButton").value = "Play Again";
}