const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const purchaseController = require('../controllers/purchase');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

router.get('/orders', shopController.getOrders);

router.get('/premium/premuiumMembership', purchaseController.purchasePremium);

router.post('/purchase/updatetransectionstatus',purchaseController.updatetransectionstatus);


module.exports = router;