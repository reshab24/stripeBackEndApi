const stripe = require('stripe')(process.env.STRIPE_SEC_KEY);


exports.createCustomer=async (req, res) => {

  const {description,email,name}=req; 
  stripe.customers
    .create({
      description: description,
      email: email,
      name: name,
    })
    .then((customer) => {
      res.status(200).json({ cus: customer });
    })
    .catch((err) => {
      res.send(err);
    });
};


