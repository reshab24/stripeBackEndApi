// const usersRouter = require('./apis/users/router')
// const authRouter=require('./apis/auth/auth.router');
// const imageRouter=require('./apis/images/image.router');

const paymentRouter=require('./apis/payment/router');
const cors = require('cors')
const express = require('express')
const app = express()


app.use(cors())
// app.use(express.json())

// app.use('/users', usersRouter)
// app.use('/auth',authRouter)
app.use('/createPayment',paymentRouter)

module.exports=app;