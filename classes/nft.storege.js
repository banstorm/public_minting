const { NFTStorage , File}   = require('nft.storage')
const fs = require('fs');

const api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM4NTQ5MjliNGY2NjY4NzBFNEYyYzc2OTBFNzYwQzkwNzBGMDAzZEMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3OTQ4NDUyNTU5OSwibmFtZSI6ImRlY2tpbGEifQ.gC87x4ks8AA10YjkGL0mpY-zKpArTx-TjgUuTUjwaI4";

const client = new NFTStorage({ token : api_key});

async function init_meta(callback){
    const metadata_1 = await client.store({
        name : 'deckila store india ownership NFT',
        description : 'deckila store india ownership NFT',
        image : new File([fs.readFileSync(__dirname+"/public/1.gif")], "1.gif", { type: "image/gif"})
    });

    console.log(metadata_1.url);

    const metadata_2 = await client.store({
        name : 'deckila store Indonesia ownership NFT',
        description : 'deckila store Indonesia ownership NFT',
        image : new File([fs.readFileSync(__dirname+"/public/2.gif")], "2.gif", { type: "image/gif"})
    });

    console.log(metadata_2.url);

    const metadata_3 = await client.store({
        name : 'deckila store Philippines ownership NFT',
        description : 'deckila store Philippines ownership NFT',
        image : new File([fs.readFileSync(__dirname+"/public/3.gif")], "3.gif", { type: "image/gif"})
    });

    console.log(metadata_3.url);

    const metadata_4 = await client.store({
        name : 'deckila store Vietnam ownership NFT',
        description : 'deckila store Vietnam ownership NFT',
        image : new File([fs.readFileSync(__dirname+"/public/4.gif")], "4.gif", { type: "image/gif"})
    });

    console.log(metadata_4.url);
}

module.exports = {
    init_meta:init_meta
}
