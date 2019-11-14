function arnTranscription(arn) {
  splittedArn = arn.split("");
  let splittedCodons = [];
  let codons = [];
  let protein = [];
  for (let count = arn1.length / 3; count > 0; count--) {
    splittedCodons.push(splittedArn.slice(0,3));
    splittedArn.splice(0,3);
  }
  splittedCodons.forEach(splittedCodon => {
    codons.push(splittedCodon.join(""));
  })
  codons.forEach(codon => {
	  switch (codon) {
	  	case "UCU":
	  	case "UCC":
	  	case "UCA": 
	  	case "UCG":
	  	case "AGU":
	  	case "AGC":
	      protein.push("Sérine");
	      break;
	    case "CCU":
	    case "CCC":
	    case "CCA": 
	    case "CCG":
	      protein.push("Proline");
	      break;
	    case "UUA":
	    case "UUG":
	      protein.push("Leucine");
	      break;
	    case "UUU":
	    case "UUC":
	      protein.push("Phénylalanine");
	      break;
	    case "CGU":
	    case "CGC":
	    case "CGA":
	    case "CGG":
	    case "AGA":
	    case "AGG":
	      protein.push("Arginine");
	      break;
	    case "UAU":
	    case "UAC":
	      protein.push("Tyrosine");
	      break;
	    default:
	      protein.push("codon erroné");
	      break;
	  }	
  })
  console.log(protein.join("-"));

}

console.log("Transcription de la suite d'ARN CCGUCGUUGCGCUACAGC");
let arn1 = "CCGUCGUUGCGCUACAGC";
let arn2 = "CCUCGCCGGUACUUCUCG";

arnTranscription(arn1);
arnTranscription(arn2);
