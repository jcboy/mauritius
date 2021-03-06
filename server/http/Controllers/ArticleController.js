const {actuality} = require ('../../models/Actualities');

class ArticleController {
    index(req, res){
        const query = actuality.find(); // recuperation de donnée
        query.select('title description shortDescription mainImage createdAt'); // séléction des attributs a recuperé

        // const reqQueryOrder = req.query.OrderBy;

        if (req.query.sortBy === 'createdAt' && req.query.OrderBy==='desc') {
            query.sort({createdAt: 'desc', test: -1})
        }

        const limiting = req.query.limit;
        if (limiting!==undefined) {
            query.limit(parseInt(limiting));
        }

        query.exec((err, actualities) => {  // execution de query construit dans la premiere etape
            res.send(actualities)
        })
    }

    show(req, res){
        const id = req.params.id;
        actuality.findById(id, (err, actuality)=>{
            if(!!err){
                res.status(404).send({message: 'Content not found found'});
            }
            res.send(actuality);
        })
    }

    store(req, res){
        const actuality = new actuality(req.body); // assigné un model a la requete du body
        actuality.save().then(() => {
            res.status(201).send({message : 'Content recorded correctly'})
        }).catch(() => {
            res.status(400).send({message: 'une erreur est survenu'})
        })
    }

    update(req, res){
        const id = req.params.id;
        actuality.findByIdAndUpdate(id, req.body, {}, (err, actuality) => {
            if(!!err){
                res.status(404).send({message: 'Content not found found'});
            }
            res.send({message: 'Content updated sucessfully yeah man !!', actuality});
        })
    }

    remove(req, res){
        const id = req.params.id;
        actuality.findByIdAndDelete(id, (err, actuality) => {
            if(!!err) {
                return res.status(404).send({message: 'Content not found'})
            }
            return res.status(201).send({message: 'Content deleted', actuality})
        })
    }
}

module.exports = new ArticleController();