const express = require('express');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router.get('/', viewController.getOverview);
router.get('/overview', viewController.getOverview);
router.get('/overview/:cat', viewController.getCategory);
router.get('/cart', viewController.getCart);

module.exports = router;