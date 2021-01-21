const stripe = require('stripe')(process.env.STRIPE_SEC_KEY);


exports.createSourceTok=async(req, res) => {

    stripe.customers
      .createSource(req.body.customerId, { source: req.body.sourceToken })
      .then((card) => {
        res.status(200).json(card);
      })
      .catch((err) => {
        res.json(err);
      });
  };




