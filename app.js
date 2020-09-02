let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Búa';
  if (letter === 'p') return 'Bao';
  return 'Kéo';
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = 'người'.fontsize(3).sub();
  const smallCompWord = 'máy'.fontsize(3).sub();
  const userChoice = document.getElementById(user)
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} > ${convertToWord(computer)}${smallCompWord} . Bạn đã thắng!!! `;
  userChoice.classList.add('green-glow');
  setTimeout(function() {userChoice.classList.remove('green-glow')}, 300);

}
function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallUserWord = 'người'.fontsize(3).sub();
  const smallCompWord = 'máy'.fontsize(3).sub();
  const userChoice = document.getElementById(user)
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} < ${convertToWord(computer)}${smallCompWord} . Bạn thua mất rồi... `;
  userChoice.classList.add('red-glow');
  setTimeout(function() {userChoice.classList.remove('red-glow')}, 300);
}
function draw(user, computer) {
  const smallUserWord = 'người'.fontsize(3).sub();
  const smallCompWord = 'máy'.fontsize(3).sub();
  const userChoice = document.getElementById(user)
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} = ${convertToWord(computer)}${smallCompWord} . Hai bên hoà...`;
  userChoice.classList.add('yellow-glow');
  setTimeout(function() {userChoice.classList.remove('yellow-glow')}, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rp':
    case 'sr':
    case 'ps':
      lose(userChoice, computerChoice);
      break;
    case 'pr':
    case 'rs':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rr':
    case 'ss':
    case 'pp':
      draw(userChoice, computerChoice);
      break;

  }
}

function main() {
  rock_div.addEventListener('click', function(){
    game('r');
  })
  paper_div.addEventListener('click', function(){
    game('p');
  })
  scissors_div.addEventListener('click', function(){
    game('s');
  })
}

main();
