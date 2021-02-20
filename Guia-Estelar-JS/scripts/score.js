function printScore(score) {
  let asString;

  if(score >= 90) {
    asString = 'A';
  }
  else if(score >= 80) {
    asString = 'B';
  }
  else if(score >= 70) {
    asString = 'C';
  }
  else if(score >= 60) {
    asString = 'D';
  }
  else {
    asString = 'F';
  }
  
  console.log(`A pontuação foi de ${score} e a nota foi ${asString}!`);
}

printScore(100);
printScore(45);
printScore(76);
printScore(98);
printScore(62);
printScore(70);