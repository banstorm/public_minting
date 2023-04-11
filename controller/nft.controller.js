const 
Result = require('../classes/result.class'),
NftMeta = require('../classes/nft.storege'),
models = require('../models'),
Controller = require('./controller'),
nft_model = models.MintInfo

const isEmpty = require('../util/util').isEmpty;
var HttpStatus = require('http-status-codes')



const NftController = {

    post_mint_store(req, res){
        const
        _wallet_addr = req.body.walletAddress,
        _store_name = req.body.store_name,
        _store_id = req.body.res_store_id,
        _country_id = req.body.store_country,
        _blockHash = req.body.blockHash

        let rdata = {};
        let store_id;
        let contry_name;
        let num_country_id;

        console.log("월렛 --->",_wallet_addr)
        console.log("스토어 아이디  --->",_store_id)


      
        num_country_id = Number(_country_id)
        store_id = Number(_store_id)
        console.log(" 파라메터 --",num_country_id)
        if(num_country_id === 1){
           
            contry_name = "인디아";
        }else if(num_country_id === 2){
           
            contry_name = "인도네시아";
        }else if(num_country_id === 3){
          
            contry_name = "필리핀";
        }else if(num_country_id === 4){
          
            contry_name = "베트남";
        }

        console.log("체크된 스토어 아이디11 ---",store_id)

       
        let insert_data = {}
        insert_data.country_id = num_country_id
        insert_data.stor_id = store_id
        insert_data.country_name = contry_name
        insert_data.store_name = _store_name
        insert_data.owner_addr = _wallet_addr
        insert_data.transactionHash = _blockHash

        nft_model.create(insert_data)
        .then(function(result){
            console.log('mint data created',result)
            console.log('mint data created')
            Controller.response(res, {
                ...Result.OK,
                msg: "minting success",
                address: _wallet_addr
            })
        })
        .catch(function(err){
            console.log('db error: ' + err)           
        })
        
    },
    meta(req,res){
        console.log('meta');
        NftMeta.init_meta();
    }
}

module.exports = NftController