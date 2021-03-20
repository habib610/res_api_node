import express from 'express'

const productRouter = express.Router()

productRouter.get('/', (req, res)=> {
    res.json({
       message: "Welcome everything works perfect" 
    })
})

productRouter.post('/', (req, res)=> {
    res.send({
        type: "POST",
        name: req.body.name,
        category: req.body.category
    })
})

export default productRouter;