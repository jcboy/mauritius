const ActualitiesController = require('../http/Controllers/ActualitiesController');
const {index, update, delete: remove, read, store} = ActualitiesController;

const express = require('express');
const router = express.Router();
const prefix = '/actualities';

router.get('/', index);

router.post('/', store);

router.get('/', read);

router.put('/', update);

router.delete('/', remove);



module.exports = {router, prefix};