var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('https://moviesdatabase.p.rapidapi.com/titles/random',
  {
    headers:{
      'X-RapidAPI-Key': '37b339b22bmshb189ca5abb62251p1471bfjsn757a1460df69',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    params:{
      list: "most_pop_movies",
      limit: 1
    }
  }).then(response => {
    let movie = response.data.results[0]
    console.log(movie);
    res.render('index', {
      image: movie.primaryImage.url,
      title: movie.titleText.text,
      year: movie.releaseYear.year? movie.releaseYear.year: '?'
    })
      
  })
});

module.exports = router;
