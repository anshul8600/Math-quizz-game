function addUser(){
    p1 = document.getElementById("player1_name_input").value;
    p2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("p1name", p1);
    localStorage.setItem("p2name", p2);
    window.location = "game.html";
    
}