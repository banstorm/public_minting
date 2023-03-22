const express = require('express')
const router = express.Router()
const db = require('../models')
const isEmpty = require('../util/util').isEmpty;



var HttpStatus = require('http-status-codes');
const { async } = require('crypto-random-string');

const Nft_Controller = require('../controller/nft.controller');

module.exports = (app) => {
    app.use('/', router)
}

/* router.get('/',  async (req, res,next) =>{
    res.render('view_set', { title: 'test sms' });
}) */

router.get('/',  async (req, res,next) =>{
    res.render('public_mint', { title: 'mint' });
})

router.post('/mint',Nft_Controller.post_mint_store)

router.post('/mint_meta',Nft_Controller.meta)




