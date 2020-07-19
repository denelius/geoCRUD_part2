var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.get('/', product_controller.idx);

router.get('/mapjson/:name', product_controller.mapjson);

router.get('/maplayers', product_controller.maplayers);

router.get('/map', product_controller.map);

router.post('/create', product_controller.product_create);

router.get('/json/:name', product_controller.product_json);

router.get('/list', product_controller.product_list);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;