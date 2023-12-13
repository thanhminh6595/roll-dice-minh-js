`use strict`;
//Khoi tao hamm close - button
const btnCloseFunction = function () {
  console.log(`khoi tao ham close`);

  boxRule.classList.remove(`flex`);
  boxRule.classList.add(`hidden`);

  overlay.classList.add(`hidden`);
  btnClose.classList.add(`hidden`);
  iconClose.classList.add(`hidden`);
};

//Khoi tao ham rule
const btnRuleFunction = function () {
  console.log(`khoi tao ham rule`);

  boxRule.classList.add(`flex`);
  boxRule.classList.remove(`hidden`);

  overlay.classList.remove(`hidden`);
  btnClose.classList.remove(`hidden`);
  iconClose.classList.remove(`hidden`);
};

//Khoi tao ham switch hold
const holdSwitch = function () {
  if (left.classList.contains(`light`) && right.classList.contains(`dark`)) {
    left.classList.add(`dark`);
    left.classList.remove(`light`);
    right.classList.remove(`dark`);
    right.classList.add(`light`);

    i = 1;
    summaryPlayer1 = summaryPlayer1 + sumCurrentPlayer1;
    sumCurrentPlayer1 = 0;
    currentPoint[0].textContent = sumCurrentPlayer1;
    summaryPoint[0].textContent = summaryPlayer1 + sumCurrentPlayer1;
  } else if (
    left.classList.contains(`dark`) &&
    right.classList.contains(`light`)
  ) {
    left.classList.remove(`dark`);
    left.classList.add(`light`);
    right.classList.remove(`light`);
    right.classList.add(`dark`);

    i = 0;

    summaryPlayer2 = summaryPlayer2 + sumCurrentPlayer2;
    sumCurrentPlayer2 = 0;
    currentPoint[1].textContent = sumCurrentPlayer2;
    summaryPoint[1].textContent = summaryPlayer2 + sumCurrentPlayer2;
  }
  if (summaryPlayer1 >= win && summaryPlayer2 < win) {
    left.classList.add(`bg-winner`);
    left.classList.remove(`light`);
    left.classList.remove(`dark`);

    document.getElementById("button-dice").disabled = true;
    document.getElementById("button-hold").disabled = true;
    // document.getElementsByClassName(`btn-dice`).disable = true;
  } else if (summaryPlayer2 >= win && summaryPlayer1 < win) {
    right.classList.add(`bg-winner`);
    right.classList.remove(`light`);
    right.classList.remove(`dark`);

    document.getElementById("button-dice").disabled = true;
    document.getElementById("button-hold").disabled = true;
  }
};

//Khoi tao ham new game button
const btnNewGameFunction = function () {
  summaryPlayer1 = 0;
  summaryPlayer2 = 0;
  sumCurrentPlayer1 = 0;
  sumCurrentPlayer2 = 0;
  i = 0;

  currentPoint[0].textContent = sumCurrentPlayer1;
  summaryPoint[0].textContent = summaryPlayer1;
  currentPoint[1].textContent = sumCurrentPlayer2;
  summaryPoint[1].textContent = summaryPlayer2;

  left.classList.remove(`bg-winner`);
  left.classList.remove(`dark`);
  left.classList.add(`light`);
  right.classList.remove(`light`);
  right.classList.remove(`bg-winner`);
  right.classList.add(`dark`);

  random.classList.add(`hidden`);

  document.getElementById("button-dice").disabled = false;
  document.getElementById("button-hold").disabled = false;
};

//Click Rule button
btnRule.addEventListener(`click`, btnRuleFunction);

//Click Hold button
btnHold.addEventListener(`click`, holdSwitch);

//Click New game button
btnNewGame.addEventListener(`click`, btnNewGameFunction);

//Click Roll Dice button
btnRollDice.addEventListener("click", function () {
  let x = Math.trunc(Math.random() * 6 + 1);
  console.log(x);

  switch (i) {
    case 0:
      if (x === 1) {
        currentPoint[i].textContent = 0;
        left.classList.remove(`light`);
        left.classList.add(`dark`);
        right.classList.remove(`dark`);
        right.classList.add(`light`);

        sumCurrentPlayer1 = 0;
        summaryPoint[0].textContent = summaryPlayer1;
        i = 1;

        currentPoint[0].textContent = sumCurrentPlayer1;

        random.classList.remove(`hidden`);

        dot21.classList.add(`hidden`);
        dot22.classList.add(`hidden`);
        dot11.classList.remove(`hidden`);

        dot31.classList.add(`hidden`);
        dot32.classList.add(`hidden`);
        dot33.classList.add(`hidden`);

        dot41.classList.add(`hidden`);
        dot42.classList.add(`hidden`);
        dot43.classList.add(`hidden`);
        dot44.classList.add(`hidden`);

        dot51.classList.add(`hidden`);
        dot52.classList.add(`hidden`);
        dot53.classList.add(`hidden`);
        dot54.classList.add(`hidden`);
        dot55.classList.add(`hidden`);

        dot61.classList.add(`hidden`);
        dot62.classList.add(`hidden`);
        dot63.classList.add(`hidden`);
        dot64.classList.add(`hidden`);
        dot65.classList.add(`hidden`);
        dot66.classList.add(`hidden`);
      } else if (x !== 1) {
        if (x === 2) {
          random.classList.remove(`hidden`);

          dot21.classList.remove(`hidden`);
          dot22.classList.remove(`hidden`);
          dot11.classList.add(`hidden`);

          dot31.classList.add(`hidden`);
          dot32.classList.add(`hidden`);
          dot33.classList.add(`hidden`);

          dot41.classList.add(`hidden`);
          dot42.classList.add(`hidden`);
          dot43.classList.add(`hidden`);
          dot44.classList.add(`hidden`);

          dot51.classList.add(`hidden`);
          dot52.classList.add(`hidden`);
          dot53.classList.add(`hidden`);
          dot54.classList.add(`hidden`);
          dot55.classList.add(`hidden`);

          dot61.classList.add(`hidden`);
          dot62.classList.add(`hidden`);
          dot63.classList.add(`hidden`);
          dot64.classList.add(`hidden`);
          dot65.classList.add(`hidden`);
          dot66.classList.add(`hidden`);

          sumCurrentPlayer1 = sumCurrentPlayer1 + x;
          currentPoint[i].textContent = sumCurrentPlayer1;
        }
        if (x === 3) {
          random.classList.remove(`hidden`);

          dot11.classList.add(`hidden`);

          dot21.classList.add(`hidden`);
          dot22.classList.add(`hidden`);

          dot31.classList.remove(`hidden`);
          dot32.classList.remove(`hidden`);
          dot33.classList.remove(`hidden`);

          dot41.classList.add(`hidden`);
          dot42.classList.add(`hidden`);
          dot43.classList.add(`hidden`);
          dot44.classList.add(`hidden`);

          dot51.classList.add(`hidden`);
          dot52.classList.add(`hidden`);
          dot53.classList.add(`hidden`);
          dot54.classList.add(`hidden`);
          dot55.classList.add(`hidden`);

          dot61.classList.add(`hidden`);
          dot62.classList.add(`hidden`);
          dot63.classList.add(`hidden`);
          dot64.classList.add(`hidden`);
          dot65.classList.add(`hidden`);
          dot66.classList.add(`hidden`);

          sumCurrentPlayer1 = sumCurrentPlayer1 + x;
          currentPoint[i].textContent = sumCurrentPlayer1;
        }
        if (x === 4) {
          random.classList.remove(`hidden`);

          dot11.classList.add(`hidden`);

          dot21.classList.add(`hidden`);
          dot22.classList.add(`hidden`);

          dot31.classList.add(`hidden`);
          dot32.classList.add(`hidden`);
          dot33.classList.add(`hidden`);

          dot41.classList.remove(`hidden`);
          dot42.classList.remove(`hidden`);
          dot43.classList.remove(`hidden`);
          dot44.classList.remove(`hidden`);

          dot51.classList.add(`hidden`);
          dot52.classList.add(`hidden`);
          dot53.classList.add(`hidden`);
          dot54.classList.add(`hidden`);
          dot55.classList.add(`hidden`);

          dot61.classList.add(`hidden`);
          dot62.classList.add(`hidden`);
          dot63.classList.add(`hidden`);
          dot64.classList.add(`hidden`);
          dot65.classList.add(`hidden`);
          dot66.classList.add(`hidden`);

          sumCurrentPlayer1 = sumCurrentPlayer1 + x;
          currentPoint[i].textContent = sumCurrentPlayer1;
        }
        if (x === 5) {
          random.classList.remove(`hidden`);

          dot11.classList.add(`hidden`);

          dot21.classList.add(`hidden`);
          dot22.classList.add(`hidden`);

          dot31.classList.add(`hidden`);
          dot32.classList.add(`hidden`);
          dot33.classList.add(`hidden`);

          dot41.classList.add(`hidden`);
          dot42.classList.add(`hidden`);
          dot43.classList.add(`hidden`);
          dot44.classList.add(`hidden`);

          dot51.classList.remove(`hidden`);
          dot52.classList.remove(`hidden`);
          dot53.classList.remove(`hidden`);
          dot54.classList.remove(`hidden`);
          dot55.classList.remove(`hidden`);

          dot61.classList.add(`hidden`);
          dot62.classList.add(`hidden`);
          dot63.classList.add(`hidden`);
          dot64.classList.add(`hidden`);
          dot65.classList.add(`hidden`);
          dot66.classList.add(`hidden`);

          sumCurrentPlayer1 = sumCurrentPlayer1 + x;
          currentPoint[i].textContent = sumCurrentPlayer1;
        }
        if (x === 6) {
          random.classList.remove(`hidden`);

          dot11.classList.add(`hidden`);

          dot21.classList.add(`hidden`);
          dot22.classList.add(`hidden`);

          dot31.classList.add(`hidden`);
          dot32.classList.add(`hidden`);
          dot33.classList.add(`hidden`);

          dot41.classList.add(`hidden`);
          dot42.classList.add(`hidden`);
          dot43.classList.add(`hidden`);
          dot44.classList.add(`hidden`);

          dot51.classList.add(`hidden`);
          dot52.classList.add(`hidden`);
          dot53.classList.add(`hidden`);
          dot54.classList.add(`hidden`);
          dot55.classList.add(`hidden`);

          dot61.classList.remove(`hidden`);
          dot62.classList.remove(`hidden`);
          dot63.classList.remove(`hidden`);
          dot64.classList.remove(`hidden`);
          dot65.classList.remove(`hidden`);
          dot66.classList.remove(`hidden`);

          sumCurrentPlayer1 = sumCurrentPlayer1 + x;
          currentPoint[i].textContent = sumCurrentPlayer1;
        }
      }
      break;
    case 1:
      if (x === 1) {
        currentPoint[i].textContent = 0;
        right.classList.remove(`light`);
        right.classList.add(`dark`);
        left.classList.remove(`dark`);
        left.classList.add(`light`);

        summaryPoint[1].textContent = summaryPlayer2;
        sumCurrentPlayer2 = 0;
        i = 0;

        currentPoint[1].textContent = sumCurrentPlayer2;
        summaryPoint[1].textContent = summaryPlayer2 + sumCurrentPlayer2;

        random.classList.remove(`hidden`);

        dot21.classList.add(`hidden`);
        dot22.classList.add(`hidden`);
        dot11.classList.remove(`hidden`);

        dot31.classList.add(`hidden`);
        dot32.classList.add(`hidden`);
        dot33.classList.add(`hidden`);

        dot41.classList.add(`hidden`);
        dot42.classList.add(`hidden`);
        dot43.classList.add(`hidden`);
        dot44.classList.add(`hidden`);

        dot51.classList.add(`hidden`);
        dot52.classList.add(`hidden`);
        dot53.classList.add(`hidden`);
        dot54.classList.add(`hidden`);
        dot55.classList.add(`hidden`);

        dot61.classList.add(`hidden`);
        dot62.classList.add(`hidden`);
        dot63.classList.add(`hidden`);
        dot64.classList.add(`hidden`);
        dot65.classList.add(`hidden`);
        dot66.classList.add(`hidden`);
      } else if (x !== 1) {
        if (x === 2) {
          random.classList.remove(`hidden`);

          dot21.classList.remove(`hidden`);
          dot22.classList.remove(`hidden`);
          dot11.classList.add(`hidden`);

          dot31.classList.add(`hidden`);
          dot32.classList.add(`hidden`);
          dot33.classList.add(`hidden`);

          dot41.classList.add(`hidden`);
          dot42.classList.add(`hidden`);
          dot43.classList.add(`hidden`);
          dot44.classList.add(`hidden`);

          dot51.classList.add(`hidden`);
          dot52.classList.add(`hidden`);
          dot53.classList.add(`hidden`);
          dot54.classList.add(`hidden`);
          dot55.classList.add(`hidden`);

          dot61.classList.add(`hidden`);
          dot62.classList.add(`hidden`);
          dot63.classList.add(`hidden`);
          dot64.classList.add(`hidden`);
          dot65.classList.add(`hidden`);
          dot66.classList.add(`hidden`);

          sumCurrentPlayer2 = sumCurrentPlayer2 + x;
          currentPoint[i].textContent = sumCurrentPlayer2;
        }
        if (x === 3) {
          random.classList.remove(`hidden`);

          dot11.classList.add(`hidden`);

          dot21.classList.add(`hidden`);
          dot22.classList.add(`hidden`);

          dot31.classList.remove(`hidden`);
          dot32.classList.remove(`hidden`);
          dot33.classList.remove(`hidden`);

          dot41.classList.add(`hidden`);
          dot42.classList.add(`hidden`);
          dot43.classList.add(`hidden`);
          dot44.classList.add(`hidden`);

          dot51.classList.add(`hidden`);
          dot52.classList.add(`hidden`);
          dot53.classList.add(`hidden`);
          dot54.classList.add(`hidden`);
          dot55.classList.add(`hidden`);

          dot61.classList.add(`hidden`);
          dot62.classList.add(`hidden`);
          dot63.classList.add(`hidden`);
          dot64.classList.add(`hidden`);
          dot65.classList.add(`hidden`);
          dot66.classList.add(`hidden`);

          sumCurrentPlayer2 = sumCurrentPlayer2 + x;
          currentPoint[i].textContent = sumCurrentPlayer2;
        }
        if (x === 4) {
          random.classList.remove(`hidden`);

          dot11.classList.add(`hidden`);

          dot21.classList.add(`hidden`);
          dot22.classList.add(`hidden`);

          dot31.classList.add(`hidden`);
          dot32.classList.add(`hidden`);
          dot33.classList.add(`hidden`);

          dot41.classList.remove(`hidden`);
          dot42.classList.remove(`hidden`);
          dot43.classList.remove(`hidden`);
          dot44.classList.remove(`hidden`);

          dot51.classList.add(`hidden`);
          dot52.classList.add(`hidden`);
          dot53.classList.add(`hidden`);
          dot54.classList.add(`hidden`);
          dot55.classList.add(`hidden`);

          dot61.classList.add(`hidden`);
          dot62.classList.add(`hidden`);
          dot63.classList.add(`hidden`);
          dot64.classList.add(`hidden`);
          dot65.classList.add(`hidden`);
          dot66.classList.add(`hidden`);

          sumCurrentPlayer2 = sumCurrentPlayer2 + x;
          currentPoint[i].textContent = sumCurrentPlayer2;
        }
        if (x === 5) {
          random.classList.remove(`hidden`);

          dot11.classList.add(`hidden`);

          dot21.classList.add(`hidden`);
          dot22.classList.add(`hidden`);

          dot31.classList.add(`hidden`);
          dot32.classList.add(`hidden`);
          dot33.classList.add(`hidden`);

          dot41.classList.add(`hidden`);
          dot42.classList.add(`hidden`);
          dot43.classList.add(`hidden`);
          dot44.classList.add(`hidden`);

          dot51.classList.remove(`hidden`);
          dot52.classList.remove(`hidden`);
          dot53.classList.remove(`hidden`);
          dot54.classList.remove(`hidden`);
          dot55.classList.remove(`hidden`);

          dot61.classList.add(`hidden`);
          dot62.classList.add(`hidden`);
          dot63.classList.add(`hidden`);
          dot64.classList.add(`hidden`);
          dot65.classList.add(`hidden`);
          dot66.classList.add(`hidden`);

          sumCurrentPlayer2 = sumCurrentPlayer2 + x;
          currentPoint[i].textContent = sumCurrentPlayer2;
        }
        if (x === 6) {
          random.classList.remove(`hidden`);

          dot11.classList.add(`hidden`);

          dot21.classList.add(`hidden`);
          dot22.classList.add(`hidden`);

          dot31.classList.add(`hidden`);
          dot32.classList.add(`hidden`);
          dot33.classList.add(`hidden`);

          dot41.classList.add(`hidden`);
          dot42.classList.add(`hidden`);
          dot43.classList.add(`hidden`);
          dot44.classList.add(`hidden`);

          dot51.classList.add(`hidden`);
          dot52.classList.add(`hidden`);
          dot53.classList.add(`hidden`);
          dot54.classList.add(`hidden`);
          dot55.classList.add(`hidden`);

          dot61.classList.remove(`hidden`);
          dot62.classList.remove(`hidden`);
          dot63.classList.remove(`hidden`);
          dot64.classList.remove(`hidden`);
          dot65.classList.remove(`hidden`);
          dot66.classList.remove(`hidden`);

          sumCurrentPlayer2 = sumCurrentPlayer2 + x;
          currentPoint[i].textContent = sumCurrentPlayer2;
        }
        break;
      }
  }
});

//Click close - button
btnClose.addEventListener(`click`, btnCloseFunction);
overlay.addEventListener(`click`, btnCloseFunction);

document.addEventListener(`keydown`, function (e) {
  console.log(e.key);
  if (e.key === `Escape`) {
    btnCloseFunction();
  }
});
