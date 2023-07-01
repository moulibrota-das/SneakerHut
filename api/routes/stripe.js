const router = require("express").Router();
KEY = process.env.STRIPE_PASS;
const stripe = require("stripe")(
  "sk_test_51LZBcCSERANqvKNjfHHenb77TaxLskz5S671cZDxWRz4PGznZi8mgxzZhMQpXh3hkpUhLnfFapTy6Slk9NmeFphN008B1jU2dg"
);

router.post("/payment", async (req, res) => {
  const session = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
    automatic_payment_methods: { enabled: true },
  });

  res.json({ session });
});

module.exports = router;
