var elements = document.querySelectorAll('.player-opt div > img');
var playerOpt = '';

function inimigoPlay() {
  let range = Math.floor(Math.random() * 3);
  const enemyOpt = document.querySelectorAll('.enemy-opt div > img');

  for (var i = 0; i < enemyOpt.length; i++) {
    if (i === range) {
      enemyOpt[i].style.opacity = 1;
    } else {
      enemyOpt[i].style.opacity = 0.3;
    }
  }
}

function reset() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0.3;
  }
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function(t) {
    reset();
    t.target.style.opacity = 1;
    playerOpt = t.target.getAttribute('opt');
    inimigoPlay();
  });
}
