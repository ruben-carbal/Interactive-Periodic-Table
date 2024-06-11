const elementsRouter = require('express').Router();
const elementsInfo = require('../elementsInfo');

elementsRouter.get('/', async (request, response) => {
  response.json(elementsInfo);
});

module.exports = elementsRouter;
