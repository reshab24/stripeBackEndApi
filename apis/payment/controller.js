const stripe = require('stripe')(process.env.STRIPE_SEC_KEY);

exports.createPayment=async (req,res)=>{
    try {
        const charge = await stripe.paymentIntents.create({
            amount: 1,
            currency: "eur",
            payment_method: "jd_1IBwLHJuI1cJo5hsdf",
            off_session: true,
            confirm: true,
            customer: "tshd",
            description: "description:",
            shipping: 5,
          })
          console.log(charge);
          return res.status(200).json({charge});
    } catch (error) {
          console.log(error);
          return res.status(500).json(error);
    }
    // .create({
    //   amount: req.body.amount,
    //   currency: req.body.currency,
    //   payment_method: req.body.token,
    //   off_session: true,
    //   confirm: true,
    //   customer: req.body.custId,
    //   description: "description:" + req.body.description,
    //   shipping: req.body.shipping,
    // })
}