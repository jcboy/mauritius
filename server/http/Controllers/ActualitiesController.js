class ActualitiesController{
    index(req, res){
        res.send("ActualitiesPage");
    }
    create(req, res){
        res.send("Create");
    }
    read(req, res){
        res.send("Read");
    }
    update(req, res){
        res.send("Update");
    }
    delete(req, res){
        res.send("Delete");
    }
}

module.exports = new ActualitiesController();
