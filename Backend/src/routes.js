const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const dislikesController = require('./controllers/dislikeController');
const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', dislikesController.store)
module.exports = routes;