function pyramid() {
  let answer = prompt("Combien d'étages souhaites-tu à ta pyramide ?");
  let otherWord = "";
  for (let count = answer; count > 0; count--) {
    let word = "";
  	for (index = count - 1; index > 0; index--) {
      word += " ";
  	}
  	otherWord += "#";
    console.log(word + otherWord)
  }

}

pyramid();
