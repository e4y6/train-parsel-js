const horses = ['Alfa', 'Beta', 'Gamma', 'Omega'];
let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-race-start-btn'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-result-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateProgressField('Race has been started! No placement of bets!');
  updateWinnerField('');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`${horse} won with time ${time / 100} s`);
    updateResultTable({ raceCounter, horse, time });
  });
}
function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => updateProgressField('Race is over. Please, place your bets!'));
}
function run(horse, raceCounter) {
  return new Promise(resolve => {
    const time = getRandomTime(1500, 2500);
    setTimeout(() => {
      resolve({ horse, time, raceCounter });
    }, time);
  });
}
function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function getRandomTime(min, max) {
  return Math.ceil(Math.random() * (max - min - 1) + min);
}
function updateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time / 100}s</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}
