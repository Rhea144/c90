game_login.js
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}

function send() {
    number1=documentgetElementById("number1").value;
    number2=documentgetElementbyId("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
}

