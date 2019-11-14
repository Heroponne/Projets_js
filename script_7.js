function acnebot() {
  let answer = prompt("Tu veux parler ?");
  let splittedAnswer = answer.split("")
  let upCaseNumber = 0;
  lowerCaseAnswer = answer.toLowerCase();
  splittedAnswer.forEach(character => {
    if (character == character.toUpperCase()) {
      upCaseNumber += 1;
    }
  })
  if (answer[answer.length - 1] === "?") {
    console.log("Ouais, ouais...");
  } else if (answer === "") {
    console.log("T'es en PLS ?");
  } else if (upCaseNumber === answer.length) {
    console.log("Pwa, calme toi...");
  } else if (lowerCaseAnswer.indexOf("fortnite") !== -1) {
    console.log("on s'fait une partie soum-soum ?");
  } else {
    console.log("balek");
  }
}

acnebot();
