const Photos = require('APP/db/models/photos')
const photos = require('express').Router()



photos.get('/', (req, res, next) => {
  Photos.findAll()
  .then(function(allPhotos){
    res.json(allPhotos);
  })
  .catch(next)
});

module.exports = photos;
