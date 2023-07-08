var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/movie', function(req, res, next) {
  axios.get(process.env.DATA_URL,
    {
        headers:{
          'X-RapidAPI-Key': process.env.API_TOKEN,
          'X-RapidAPI-Host': process.env.API_HOST,
          'Content-Type': 'application/json'
        },
        params:{
        list: "most_pop_movies",
        limit: 1
        }
    }).then(async function (response){
      
        let movie = response.data.results[0]
        let image = movie.primaryImage ? movie.primaryImage.url : ''
        let title = movie.originalTitleText ? movie.originalTitleText.text : ''
        let year = movie.releaseYear ? movie.releaseYear.year : ''
        title = [title, year].filter(el => {return el}).join(', ')
        res.json({image: image, title: title})
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
