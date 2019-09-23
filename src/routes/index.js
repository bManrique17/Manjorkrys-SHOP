const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_V6QhvoUYa4JYCOxrq0H2uBT400ACBLmL5M');

router.get('/',(req,res) => {
  res.render('index');
});

router.post('/checkout', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '1700',
    currency: 'usd',
    customer: customer.id,
    description: 'GTA San Andreas'
  });
  console.log(charge.id);
  res.render('download');
});

router.post('/piscina', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '5000',
    currency: 'usd',
    customer: customer.id,
    description: 'Piscina'
  });
  console.log(charge.id);
  res.render('download');
});


module.exports = router;
