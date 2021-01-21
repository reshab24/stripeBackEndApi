// const usersRouter = require('./apis/users/router')
// const authRouter=require('./apis/auth/auth.router');
// const imageRouter=require('./apis/images/image.router');

const paymentRouter=require('./apis/payment/router');
const userRouter=require('./apis/users/router');
const sourceRouter=require('./apis/createSource/router');

const cors = require('cors')
const express = require('express')
const path = require('path');
const app = express()


app.use(cors())

app.use(express.json())

// app.use('/users', usersRouter)
// app.use('/auth',authRouter)
app.use('/createPayment',paymentRouter)

app.use('/createCustomer',userRouter)

app.use('/createSource',sourceRouter)


app.use('/',express.static(path.join(__dirname, 'angular')))

app.use('/', (_, res)=>{
    res.sendFile(path.join(__dirname,"angular","index.html"));
})


module.exports=app;