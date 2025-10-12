"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Cake, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CakeCard from '@/components/CakeCard';

const featuredCakes = [
  { name: 'chocolate truffle', price1lb: 400, price2lb: 800 },
  { name: 'red velvet', price1lb: 400, price2lb: 800 },
  { name: 'black forest', price1lb: 350, price2lb: 750 },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-pink-50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Fresh Cakes,
                <span className="block text-orange-500">Sweet Memories</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
                Welcome to <strong>Flourish Bakery</strong>, the best bakery in Ranchi. We create made-to-order cakes
                for every special occasion - birthdays, weddings, anniversaries, and celebrations. From luxury chocolate
                cakes to affordable custom designs, we deliver fresh cakes across Ranchi and Jharkhand.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  <Link href="/menu">
                    Browse Our Menu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  <a
                    href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20a%20cake"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order cake via WhatsApp"
                  >
                    Order on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop&q=75"
                  alt="Fresh birthday cakes and wedding cakes at Flourish Bakery Ranchi - Best bakery in Ranchi"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Cake className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">Fresh Daily</h2>
              <p className="text-gray-600">All our cakes are baked fresh daily with premium ingredients for the best taste.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-lg border bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">Quick Delivery</h2>
              <p className="text-gray-600">Same-day cake delivery available across Ranchi. Order now via WhatsApp!</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg border bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Heart className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="mb-2 text-xl font-semibold">Custom Designs</h2>
              <p className="text-gray-600">Made-to-order cakes for birthdays, weddings, and all special occasions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Cakes in Ranchi
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our most popular cake flavors loved by customers across Ranchi and Jharkhand
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCakes.map((cake, index) => (
              <CakeCard
                key={cake.name}
                name={cake.name}
                price1lb={cake.price1lb}
                price2lb={cake.price2lb}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              <Link href="/menu">
                View Full Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to Order Your Perfect Cake?</h2>
              <p className="mt-4 text-lg text-white/90">
                Contact us on WhatsApp for instant orders and custom cake designs in Ranchi
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2">
                  <a
                    href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20a%20cake"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order cake via WhatsApp"
                  >
                    Order via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
