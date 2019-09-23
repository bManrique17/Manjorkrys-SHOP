const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_V6QhvoUYa4JYCOxrq0H2uBT400ACBLmL5M');

router.get('/',(req,res) => {
  res.render('index');
});

router.post('/gtasa', async (req,res) => {
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
  res.render('gtasa');
});

router.post('/nfsmw', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '1500',
    currency: 'usd',
    customer: customer.id,
    description: 'NFS Most Wanted'
  });
  console.log(charge.id);
  res.render('nfsmw');
});

router.post('/fifa07', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '1900',
    currency: 'usd',
    customer: customer.id,
    description: 'FIFA 07'
  });
  console.log(charge.id);
  res.render('fifa07');
});

router.post('/cod', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '1400',
    currency: 'usd',
    customer: customer.id,
    description: 'COD'
  });
  console.log(charge.id);
  res.render('cod');
});

router.post('/re4', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '1600',
    currency: 'usd',
    customer: customer.id,
    description: 'RE4'
  });
  console.log(charge.id);
  res.render('re4');
});

router.post('/gh3', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '1800',
    currency: 'usd',
    customer: customer.id,
    description: 'GH3'
  });
  console.log(charge.id);
  res.render('gh3');
});

router.post('/dk', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '1100',
    currency: 'usd',
    customer: customer.id,
    description: 'DK'
  });
  console.log(charge.id);
  res.render('dk');
});

router.post('/aoe', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '1600',
    currency: 'usd',
    customer: customer.id,
    description: 'AOE'
  });
  console.log(charge.id);
  res.render('aoe');
});

router.post('/baldor', async (req,res) => {
  console.log(req.body);
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: '900',
    currency: 'usd',
    customer: customer.id,
    description: 'Baldor'
  });
  console.log(charge.id);
  res.render('baldor');
});

module.exports = router;
