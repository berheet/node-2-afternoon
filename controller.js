module.exports = {
    create(req, res) {
        const dbInstance = req.app.get('db');
        const {name, description, price, imageurl} = req.body;

        dbInstance.create_product([ name, description, price, imageurl ])
        .then( response => {
            res.status(200).json(response)
        })
        .catch(err => {
            err.status(500).json(err)
        })
    },

    getOne(){
        const dbInstance = req.app.get('db')
        const {params} = req

        dbInstance.read_product([params.id])
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            err.status(500).json(err)
        })
    },

    getAll(){
        const dbInstance = req.app.get('db')

        dbInstance.read_products()
        .then(response => {
            res.status(200).json(err)
        })
        .catch(err => {
            err.status(500).json(err)
        })
    },

    update(){
        const dbInstance = req.app.get('db')
        const {params, query}

        dbInstance.update_product([params.id, query.desc])
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            err.status(500).json(err)
        })
    },

    delete(){
        const dbInstance = req.app.get('db')
        const {params} = req;

        dbInstance.delete_product([params.id])
        .then(response => {
            res.status(200).json(200)
        })
        .catch(err => {
            err.status(500).json(err)
        })
    }
}