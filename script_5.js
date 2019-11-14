const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que toues les livres ont été empruntés au moins une fois ?");
books.forEach(book => {
  let renting = 0;
  if (book.rented === 0) {
    renting += 1;
  }
  if (renting > 0) {
    console.log("Certains livres n'ont pas été empruntés.");
  }
  else
    console.log("Tous les livres ont été empruntés au moins une fois.");
})

console.log("Quel est le livre le plus emprunté ?");
sortedBooks = books.sort(function(a,b) {
  let rentedA = a.rented;
  let rentedB = b.rented;
  if (rentedA < rentedB) {
    return -1;
  }
  if (rentedA > rentedB) {
    return 1;
  }
  return 0;
})
console.log(sortedBooks[sortedBooks.length -1]);

console.log("Quel est le livre le moins emprunté ?");
console.log(sortedBooks[0]);

console.log("Trouve le livre avec l'ID 873495");
books.forEach(book => {
  if (book.id === 873495) {
    console.log(book)
  }
})

console.log("Supprime le livre avec l'ID 133712")
books.forEach(book => {
  if (book.id === 133712) {
    let index = books.indexOf(book)
    books.splice(index, 1)
    console.log("Le livre a bien été supprimé !")
  }
})
console.log(books)

console.log("Trie les livres par ordre alphabétique")
console.log(books.sort(function(a,b) {
  let titleA = a.title;
  let titleB = b.title;
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}))
