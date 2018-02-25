var scoreSaved = false;

function addScore(nameInput, scoreInput) {
  if (!scoreSaved) {
    scoreSaved = true;
    fetch('/submarine_add',{
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        name: nameInput,
        score: scoreInput
      })
    });
  }
};

function loadLeaderboard() {
  fetch('/submarine_load')
    .then(response => response.json())
    .then(json =>{
      var json = json.sort(function(a,b){
        return b.score - a.score
      });
      while (json.length < 10) {
        json.push({name:'-', score:'-'})
      }
      var columnOne = document.getElementById('column_one')
      for (i=0; i<5; i++) {
        var playerDiv = document.createElement('div');
        playerDiv.innerHTML = json[i].name;
        columnOne.appendChild(playerDiv)
      }
      var columnTwo = document.getElementById('column_two')
      for (i=0; i<5; i++) {
        var playerDiv = document.createElement('div');
        playerDiv.innerHTML = json[i].score;
        columnTwo.appendChild(playerDiv)
      }
      var columnThree = document.getElementById('column_three')
      for (i=5; i<10; i++) {
        var playerDiv = document.createElement('div');
        playerDiv.innerHTML = json[i].name;
        columnThree.appendChild(playerDiv)
      }
      var columnFour = document.getElementById('column_four')
      for (i=5; i<10; i++) {
        var playerDiv = document.createElement('div');
        playerDiv.innerHTML = json[i].score;
        columnFour.appendChild(playerDiv)
      }
    })
}

loadLeaderboard()
