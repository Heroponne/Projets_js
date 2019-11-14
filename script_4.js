const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Entrepreneurs des années 70 :");
entrepreneurs.forEach(entrepreneur => {
	if (entrepreneur.year < 1980 && entrepreneur.year > 1969) {
      console.log(entrepreneur);
	}
});

console.log("Noms et prénoms des entrepreneurs dans un array :");
let nomPrenomArray = []
entrepreneurs.forEach(entrepreneur => {
  let nomPrenomHash = {first: entrepreneur.first, last: entrepreneur.last};
  nomPrenomArray.push(nomPrenomHash);
})
console.log(nomPrenomArray);

console.log("Âge de chaque entrepreneur en 2019 :");
entrepreneurs.forEach(entrepreneur => {
  console.log(`${entrepreneur.first} ${entrepreneur.last} devrait avoir ${2019 - entrepreneur.year}ans en 2019.`)
})

console.log("Array trié par ordre alphabétique du nom de famille :")
console.log(entrepreneurs.sort(function(a,b) {
  let lastA = a.last;
  let lastB = b.last;
  if (lastA < lastB) {
  	return -1;
  }
  if (lastA > lastB) {
  	return 1;
  }
  return 0;
}))
