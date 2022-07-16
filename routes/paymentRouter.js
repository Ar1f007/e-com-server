const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SK);

router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(resp);
      }
    }
  );
});
module.exports = router;
