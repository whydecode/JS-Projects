// Challenge 1: Your Age in Days
function ageInDays(){
    var birthYear = prompt('What year were you born...');
    var ageInDaysToday = (2020 - birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDaysToday + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
let age = document.getElementsByTagName('button');
console.log(age.length);