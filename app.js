var city = prompt('Enter your city name')
var firstchar = city.slice(0,1);
var otherChar= city.slice(1)
firstchar = firstchar.toUpperCase()
otherChar = otherChar.toLowerCase()

var city = firstchar + otherChar;
console.log(city)

// city = city.toLowerCase()
// var arr = ['Karachi','Islamabad','Quetta']
// for (var i=0; i<arr.length; i++){
//     for (var i=0; i>arr.length; i++){
//         if(arr[i] === city){
//             alert('city has found')
//         }else{alert('city not found')}
//     }
// }

var str = prompt("Enter some text");
 var numChars = str.length;
 for (var i = 0; i < numChars; i++) {
 if (str.slice(i, i + 2) === " ") {
 alert("Double spaces are found!");
 break;
 }
}
var text = 'The New Yorker magazine doesnt allow the phrase World War II  They say it should be the Second World War II '
var indxNum = text.indexOf('World war II');
var firstText = text.slice(0,indxNum)
var replacingText = 'The second World War';
var thirdText = text.slice(indxNum+12)
console.log(firstText + replacingText + thirdText)
var num = 1.5;
var round = Math.round(num)

var headsuser = prompt("enter heads username");
var tailsuser = prompt("enter tails username");

var toss = Math.random() *2;
var floor = Math.floor(toss)
if(floor === 0){
    alert("Heads" + headsuser + " win the toss")
}else{
    alert("Tails" + tailsuser + "win the toss")
}
var num = 10;
console.log(num.toString())


function ageclac(){
var dob = new Date(prompt("Enter your date off birth","Dec 26, 1911"))
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime()
var diff = todaymili - dobmili;
var accuage = Math.floor(diff/(1000*60*60*24*30*12))
document.write(accuage);
}
ageclac();

function greeting(){
   alert(greet)    
}
greeting("Hello sir");

var a = "Hanzala";

function foo(){
     a = "Hanzala"
}

foo();

console.log(a);






























