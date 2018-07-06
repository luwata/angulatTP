var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

var books = [
  {
    id: 1,
    logo: "https://static.fnac-static.com/multimedia/Images/FR/NR/75/cb/9b/10210165/1507-1/tsp20180622090024/Comment-j-ai-appris-a-vivre-mieux.jpg",
    title: "Comment j'ai appris à vivre mieux",
    author: "Michael Philippoussis",
    dateRelease: 2018,
    availability: true,
    nbLoan: 0
  },
  {
    id: 2,
    logo: "https://static.fnac-static.com/multimedia/Images/FR/NR/ee/32/93/9646830/1507-1/tsp20180522080129/Dragon-Ball-Super.jpg",
    title: "Dragon Ball Super - Tome 4 : Dragon Ball Super",
    author: "Akira Toriyama",
    dateRelease: 2017,
    availability: true,
    nbLoan: 32
  },
  {
    id: 3,
    logo: "https://static.fnac-static.com/multimedia/Images/FR/NR/73/ae/87/8892019/1507-1/tsp20170821155320/Angular.jpg",
    title: "Apprendre Angular - Niveau Expert",
    author: "Michael Philippoussis",
    dateRelease: 2016,
    availability: false,
    nbLoan: 4
  },
  {
    id: 4,
    logo: "https://static.fnac-static.com/multimedia/images_produits/ZoomPE/5/6/7/9782253127765/tsp20130903073215/Une-vie.jpg",
    title: "Une vie",
    author: "Simone Veil",
    dateRelease: 2009,
    availability: false,
    nbLoan: 15
  },
  {
    id: 5,
    logo: "https://static.fnac-static.com/multimedia/Images/FR/NR/24/67/70/7366436/1507-1/tsp20150911102249/Love-DVD.jpg",
    title: "Love",
    author: "Gaspar Noé",
    dateRelease: 2015,
    availability: true,
    nbLoan: 60
  },
  {
    id: 6,
    logo: "https://static.fnac-static.com/multimedia/Images/FR/MDM/9a/a0/68/6856858/1505-1/tsp20180703182734/Starter-pack-Foot-Coupe-du-Monde-2018-Panini.jpg",
    title: "Starter pack Foot Coupe du Monde 2018 Panini ",
    author: "Michel Platini",
    dateRelease: 2018,
    availability: true,
    nbLoan: 100
  }
];



// Middlewares
app.use(bodyParser.json()); //Le body des requêtes sont parsées (json -> js)
app.use(express.static('public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// Routes
//get routes
// app.get('/books', (req, res) => res.json(students));

app.get('/books', (req, res) => {
  listBooks = [];
  	if(books){
  		for (let i = 0; i<books.length; i++){
			listBooks.push(books[i]);
		}
		return res.json(listBooks);
	} else {
		res.status(404).send("Il n'y a pas de livres référencés !");
	}
});

app.get('/authors', (req, res) => {
  listAuthors = [];
  	if(books){
  		for (let i = 0; i<books.length; i++){
			listAuthors.push(books[i].author);
		}
		return res.json(listAuthors);
	} else {
		res.status(404).send("Il n'y a pas d'auteurs !");
	}
});

app.get('/teams', (req, res) => res.json(teams));
app.get('/players', (req, res) => res.json(players));
app.get('/teams/:team/players', (req, res) => {
  var team = req.params.team;
  var playersFiltered = players.filter(player => player.current_team == team);
  return res.json(playersFiltered);
})

app.post('/teams', function(req, res) {
  var id = getLastId(teams);
  var team = {
    id: id + 1,
    logo: req.body.logo,
    name: req.body.name,
    country: req.body.country,
    stadium: req.body.stadium,
    coach: req.body.coach,
    founded: req.body.founded,
    nbCup: req.body.nbCup
  };
  teams.push(team);
  res.json(team);
})

// Helper functions
function getLastId(arr) {
  var maxId = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i].id > maxId) {
      maxId = array[i].id
    }
  }
  return maxId;
}

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
