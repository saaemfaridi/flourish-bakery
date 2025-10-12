"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const whatsappMessage = `Hi! My name is ${name}. ${message}. Please contact me at ${phone}.`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch with the best bakery in Ranchi for your cake orders and inquiries
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="mt-1"
                      aria-describedby="name-help"
                    />
                    <p id="name-help" className="sr-only">Enter your full name</p>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="mt-1"
                      aria-describedby="phone-help"
                    />
                    <p id="phone-help" className="sr-only">Enter your phone number with country code</p>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your cake requirements..."
                      rows={5}
                      required
                      className="mt-1"
                      aria-describedby="message-help"
                    />
                    <p id="message-help" className="sr-only">Describe your cake requirements and any special requests</p>
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                    Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                    <MapPin className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Visit Our Bakery</h3>
                    <p className="mt-1 text-gray-600">
                      City Center, Ranchi<br />
                      Jharkhand, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                    <Phone className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <a
                      href="tel:+919876543210"
                      className="mt-1 block text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                    >
                      +91 98765 43210
                    </a>
                    <Button asChild className="mt-3 bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                      <a
                        href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20a%20cake"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact us via WhatsApp"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                    <Mail className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <a
                      href="mailto:info@flourishbakery.com"
                      className="mt-1 block text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                    >
                      info@flourishbakery.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                    <Clock className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
                    <div className="mt-1 space-y-1 text-gray-600">
                      <p>Monday - Sunday</p>
                      <p className="font-semibold">9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
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
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Find Us on the Map</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.4757891345895!2d85.31017931496847!3d23.34410698476089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5f5f1f%3A0x5f6c4e1e8a2e3e3e!2sCity%20Centre%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flourish Bakery Location - City Center, Ranchi, Jharkhand"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-lg bg-orange-50 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Cake Delivery Across Ranchi
          </h3>
          <p className="mt-2 text-gray-600">
            We deliver fresh cakes to all locations in Ranchi and nearby areas in Jharkhand.
            Order your favorite cakes online via WhatsApp for quick delivery.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-700">
            <span className="rounded-full bg-white px-4 py-2">Ranchi City Center</span>
            <span className="rounded-full bg-white px-4 py-2">HEC Colony</span>
            <span className="rounded-full bg-white px-4 py-2">Doranda</span>
            <span className="rounded-full bg-white px-4 py-2">Bariatu</span>
            <span className="rounded-full bg-white px-4 py-2">Kanke</span>
            <span className="rounded-full bg-white px-4 py-2">Harmu</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
