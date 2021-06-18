player1 = localStorage.getItem("p1name");
player2 = localStorage.getItem("p2name");
p1score = 0;
p2score = 0;
document.getElementById("player1_name").innerHTML = player1;
document.getElementById("player2_name").innerHTML = player2;
document.getElementById("player1_score").innerHTML = p1score;
document.getElementById("player2_score").innerHTML = p2score;
document.getElementById("player_question").innerHTML = "question turn: " + player1;
document.getElementById("player_answer").innerHTML = "answer turn: " + player2;

function send(){
n1 = document.getElementById("number1").value;
n2 = document.getElementById("number2").value;
actualanswer = parseInt(n1) * parseInt(n2);
questionnumber = "<h4>" + n1 + "x" + n2 + "</h4>";
ibox = "<br>answer:<input type='text' id='checkbox'>";
cbutton = "<br><br><button class='btn btd-info' onclick='check()'>CHECK</button>";
row = questionnumber + ibox + cbutton;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}
qturn = "player1";
aturn = "player2";
function check(){
getanswer = document.getElementById("checkbox").value;
if(getanswer == actualanswer)
{
if(aturn == "player1")
{
p1score = p1score + 1;
document.getElementById("player1_score").innerHTML = p1score;
}
else{
    p2score = p2score + 1;
    document.getElementById("player2_score").innerHTML = p2score;
}
}
if(qturn == "player1")
{
qturn = "player2";
document.getElementById("player_question").innerHTML = player2
}
else{
    qturn = "player1";
document.getElementById("player_question").innerHTML = player1
}
if(aturn == "player1")
{
aturn = "player2";
document.getElementById("player_answer").innerHTML = player2
}
else{
    aturn = "player1";
document.getElementById("player_answer").innerHTML = player1
}
if(qturn == "player1")
{
qturn = "player2";
document.getElementById("player_question").innerHTML = player2
}
else{
    qturn = "player1";
document.getElementById("player_question").innerHTML = player1;
}
document.getElementById("output").innerHTML = "";

}