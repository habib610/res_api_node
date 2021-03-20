import express from 'express'
import cors from 'cors'
import colors from 'colors'
import productRouter from './routes/productRoutes.js';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000;

connectDB()

app.use('/api/products', productRouter)
app.use('/api/user', userRoute)

// custom middleware 
app.use((err, req, res, next)=> {
    res.status(500).send({message: err.message})
})

app.get('/', (req, res)=> {
    res.send("SERVER is responding")
})

app.listen(PORT, ()=> {
    console.log(`listening to port ${PORT}`.underline.brightYellow.bold)
})