"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import CakeCard from '@/components/CakeCard';

const cakes = [
  { name: 'vanilla', price1lb: 280, price2lb: 550 },
  { name: 'pineapple', price1lb: 300, price2lb: 650 },
  { name: 'strawberry', price1lb: 300, price2lb: 650 },
  { name: 'mango', price1lb: 300, price2lb: 650 },
  { name: 'black forest', price1lb: 350, price2lb: 750 },
  { name: 'chocolate truffle', price1lb: 400, price2lb: 800 },
  { name: 'butter scotch', price1lb: 300, price2lb: 650 },
  { name: 'blue berry', price1lb: 350, price2lb: 750 },
  { name: 'white forest', price1lb: 400, price2lb: 800 },
  { name: 'kasatta', price1lb: 350, price2lb: 750 },
  { name: 'ferrero rocher', price1lb: 400, price2lb: 800 },
  { name: 'cheese cake', price1lb: 500, price2lb: 1000 },
  { name: 'kit kat cake', price1lb: 350, price2lb: 750 },
  { name: 'red velvet', price1lb: 400, price2lb: 800 },
  { name: 'coffee nut cake', price1lb: 350, price2lb: 750 },
  { name: 'ginger lemon cake', price1lb: 350, price2lb: 750 },
  { name: 'pinata cake', price1lb: 850, price2lb: 1650 },
  { name: 'chocochips cake', price1lb: 400, price2lb: 800 },
];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // useMemo to prevent re-filtering on every render
  const filteredCakes = useMemo(() => {
    return cakes.filter(cake =>
      cake.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Cake Menu
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our delicious collection of fresh cakes in Ranchi. From classic vanilla to luxury chocolate truffle cakes,
            we have the perfect cake for every occasion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-md"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true" />
            <Input
              type="text"
              placeholder="Search for cakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label="Search for cakes"
            />
          </div>
        </motion.div>

        <div className="mt-12">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Birthday Cakes & Wedding Cakes in Ranchi
          </h2>
          {filteredCakes.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCakes.map((cake, index) => (
                <CakeCard
                  key={cake.name}
                  name={cake.name}
                  price1lb={cake.price1lb}
                  price2lb={cake.price2lb}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-gray-600">No cakes found matching your search.</p>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-lg bg-orange-50 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Looking for Custom Cake Designs?
          </h3>
          <p className="mt-2 text-gray-600">
            We specialize in made-to-order cakes for weddings, birthdays, and special occasions in Ranchi.
            Contact us on WhatsApp for custom designs and flavors.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20a%20custom%20cake"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Contact us for custom cake orders"
          >
            Contact Us for Custom Orders
          </a>
        </motion.div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Cake Categories We Offer in Ranchi
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-semibold text-gray-900">Chocolate Cakes</h3>
              <p className="mt-1 text-sm text-gray-600">
                Chocolate truffle, chocochips, and more
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-semibold text-gray-900">Fruit Cakes</h3>
              <p className="mt-1 text-sm text-gray-600">
                Strawberry, pineapple, mango, blueberry
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-semibold text-gray-900">Designer Cakes</h3>
              <p className="mt-1 text-sm text-gray-600">
                Red velvet, ferrero rocher, pinata
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-semibold text-gray-900">Classic Cakes</h3>
              <p className="mt-1 text-sm text-gray-600">
                Black forest, white forest, vanilla
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
