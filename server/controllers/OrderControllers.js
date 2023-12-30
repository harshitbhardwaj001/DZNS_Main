import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const addOrder = async (req, res, next) => {
  try {
    if (req.body.serviceId) {
      const { serviceId } = req.body;
      const prisma = new PrismaClient();
      const service = await prisma.services.findUnique({
        where: { id: parseInt(serviceId) },
      });

      const paymentIntent = await stripe.paymentIntents.create({
        amount: service?.price * 100,
        currency: "inr",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      await prisma.orders.create({
        data: {
          paymentIntent: paymentIntent.id,
          price: service?.price,
          buyer: { connect: { id: req.userId } },
          service: { connect: { id: parseInt(serviceId) } },
        },
      });

      return res
        .status(201)
        .json({ clientSecret: paymentIntent.client_secret });
    }

    return res.status(400).send("Service Id is required.");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error.");
  }
};
