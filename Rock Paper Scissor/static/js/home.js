function rpsGame(yourChoice){

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToInt());
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results); // {'message': 'You Won!', 'color': 'green'}
    console.log(message);

    rpsFrontEnd(humanChoice, botChoice, message)
}

function randToInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    let rpsDataBase = {
        'rock': {'scissors': 1, 'rock':0.5, 'paper': 0},
        'scissors': {'scissors': 0.5, 'rock':0, 'paper': 1},
        'paper': {'scissors': 0, 'rock':1, 'paper': 0.5},        
    };
    let yourScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];
    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    }else if(yourScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'};
    }else if(yourScore === 1) {
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' style='box-shadow: 0 0px 40px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:50px; padding:30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' style='box-shadow: 0 0px 40px rgba(243, 38, 24, 1);'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}