const N = 4;

const outputElm= document.querySelector('.output');

const formElm = document.querySelector('.form');
formElm.addEventListener('submit', evt => {
  evt.preventDefault();

  const word1 = document.querySelector('.word-1').value.toLowerCase();
  const word2 = document.querySelector('.word-2').value.toLowerCase();

  let e = 0;
  let b = 0;

  for (let i = 0; i < N; i++) {
    e += word1[i] === word2[i];

    for (let j = 0; j < N; j++) {
      b += i !== j && word1[i] === word2[j];
    }
  }

  outputElm.innerText = `${word1.toUpperCase()}\n${word2.toUpperCase()}\nE: ${e}, B: ${b}`;
});
