var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb


router.get('/', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    
    const uri = 'mongodb+srv://Giangy:Gianluca@cluster0.mpo20.mongodb.net/test';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("SaggioTecn").collection("InsicurezzaWorld");
        // eseguo una find sulla collection
        collection.find().toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});
module.exports = router;