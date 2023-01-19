function saveHighscore() {
  var name = nameEl.value.trim();
  if (name !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      name: name
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
  }
}


function checkForEnter(event) {
  if (event.key === "Enter") {
      saveHighscore();
  }
}


var scoresBtn = document.querySelector("#view-high-scores");

function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    
    highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.name + " - " + score.score;
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
}


  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  } document.getElementById("clear").onclick = clearHighscores;
  
printHighscores();