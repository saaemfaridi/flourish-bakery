"use client";

import { motion } from 'framer-motion';
import { Gift, Calendar, Sparkles, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function DealsPage() {
  const faqs = [
    {
      question: 'How do I order a custom cake from Flourish Bakery?',
      answer: 'Simply click on any "Order via WhatsApp" button on our menu page or contact us directly at +91 98765 43210. Share your cake requirements including size, flavor, design, and delivery date. Our team will confirm your order and provide a quote.',
    },
    {
      question: 'What are your cake delivery areas in Ranchi?',
      answer: 'We deliver fresh cakes across all areas of Ranchi and nearby locations in Jharkhand. Contact us to confirm delivery availability for your specific location.',
    },
    {
      question: 'Do you offer gluten-free or vegan cakes?',
      answer: 'Yes! We offer gluten-free cakes and vegan desserts in Ranchi. Please mention your dietary requirements when placing your order, and we will customize the cake accordingly.',
    },
    {
      question: 'How much advance notice do you need for custom cake orders?',
      answer: 'For custom birthday cakes and wedding cakes, we recommend ordering at least 2-3 days in advance. For elaborate designer cakes, please order 5-7 days ahead. However, we also accept same-day orders for our standard menu items subject to availability.',
    },
    {
      question: 'What occasions do you cater to?',
      answer: 'We create cakes for all occasions including birthdays, weddings, anniversaries, Christmas, Diwali, New Year, first birthday celebrations, engagement parties, and corporate events in Ranchi.',
    },
    {
      question: 'What makes Flourish Bakery the best bakery in Ranchi?',
      answer: 'We use premium ingredients, bake fresh daily, offer affordable luxury cakes, provide custom designs, and deliver across Ranchi. Our made-to-order approach ensures every cake is perfect for your special occasion.',
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Deals & Promotions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Special offers and seasonal promotions on cakes in Ranchi
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <Gift className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle>Christmas Cakes Special</CardTitle>
                <CardDescription>
                  Celebrate the festive season with our special Christmas cakes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Order our festive Christmas cakes in Ranchi with special holiday designs and flavors.
                  Perfect for your celebrations!
                </p>
                <Button asChild className="mt-4 w-full bg-orange-500 hover:bg-orange-600">
                  <a
                    href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20a%20Christmas%20cake"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Christmas Cake
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Sparkles className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Diwali Sweets & Cakes</CardTitle>
                <CardDescription>
                  Traditional sweets and special occasion cakes for Diwali
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Celebrate the festival of lights with our Diwali sweets and special occasion cakes in Ranchi.
                </p>
                <Button asChild className="mt-4 w-full bg-orange-500 hover:bg-orange-600">
                  <a
                    href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20Diwali%20sweets"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Diwali Treats
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Calendar className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>New Year Celebration Cakes</CardTitle>
                <CardDescription>
                  Ring in the new year with our special celebration cakes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Start the year sweet with our New Year cakes in Ranchi. Available in various designs and sizes.
                </p>
                <Button asChild className="mt-4 w-full bg-orange-500 hover:bg-orange-600">
                  <a
                    href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20a%20New%20Year%20cake"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order New Year Cake
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 p-8 text-center text-white sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Special Event Cakes</h2>
            <p className="mt-4 text-lg">
              Planning a wedding, first birthday, or party? We create stunning event cakes in Ranchi and Jharkhand.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                <a
                  href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20discuss%20an%20event%20cake"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan Your Event Cake
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center">
            <HelpCircle className="mx-auto h-12 w-12 text-orange-500" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              FAQs About Flourish Bakery Services
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Common questions about ordering cakes from the best bakery in Ranchi
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-lg bg-gray-50 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Looking for Affordable Luxury Cakes?
          </h3>
          <p className="mt-2 text-gray-600">
            We offer the most popular cakes in Ranchi at affordable prices without compromising on quality.
            From ₹280 to ₹1650, find the perfect cake for your budget.
          </p>
          <Button asChild className="mt-6 bg-orange-500 hover:bg-orange-600">
            <a href="/menu">
              View Our Affordable Cake Menu
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
