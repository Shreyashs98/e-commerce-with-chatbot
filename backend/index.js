const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');

const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users');
const authRouter = require('./routes/Auth');
const cartRouter = require('./routes/Cart');
const ordersRouter = require('./routes/Order');

//Routes
server.use(express.json());
server.get("/",(req,res) => {
  res.send("API is running...")
  console.log(PORT)
})

//middlewares
server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json());//to parse req.body
server.use('/products',productsRouter.router)
server.use('/categories',categoriesRouter.router)
server.use('/brands',brandsRouter.router)
server.use('/users',usersRouter.router)
server.use('/auth',authRouter.router)
server.use('/cart',cartRouter.router)
server.use('/orders',ordersRouter.router)

main().catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://s09082003:hsshreyas00@cluster0.umllk4h.mongodb.net/e-commerce-chatbot');
    console.log('database connected')
}

server.get('/',(req,res)=>{
    res.json({status:'success'})

})

server.post('/products',createProduct);

server.listen(8080,()=>{
    console.log('server started')
})