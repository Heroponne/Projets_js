function factorial() {
  let answer = prompt("De quel chiffre souhaites-tu le factoriel ?");
  let result = 1;
  for (let count = answer; count > 0; count--) {
    result = count * result;
  }
  console.log(`Le résultat est ${result}`);
}

factorial();
