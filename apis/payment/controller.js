const stripe = require('stripe')(process.env.STRIPE_SEC_KEY);

exports.createPayment=async (req,res)=>{

    console.log( req.body,"body");

    try {
        const charge = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "inr",
            payment_method: req.body.cardId,
            off_session: true,
            confirm: true,
            customer: req.body.customerId,
            // source:"tok_1IC4VbEmO9ttiz2Y61F6rFrU",
            description: "description:",
            shipping: {
                name: "reshab",
                address: {
                line1: 'street',
                city: 'locality',
                postal_code: 'zipcode',
                state: 'statecode',
                country: 'IN'
                }
            }
          })
          console.log(charge);
          return res.status(200).json({charge});
    }
     catch (error) {
          console.log(error);
          return res.status(500).json(error);
    }
};

// exports.createPayment=async(req, res) => {
//     stripe.customers
//       .createSource("cus_InfmfaLsqGTa1C", { source: "tok_1IC5AIEmO9ttiz2YrhfZFjOc" })
//       .then((card) => {
//         res.status(200).json(card);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   };




