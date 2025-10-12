import Link from 'next/link';
import { Cake, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <Cake className="h-6 w-6 text-orange-500" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900">Flourish</span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Fresh Cakes, Sweet Memories. The best bakery in Ranchi for all your special occasions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-sm text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded">
                  Deals & Promotions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-orange-500" aria-hidden="true" />
                <span className="text-sm text-gray-600">
                  City Center, Ranchi, Jharkhand
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-500" aria-hidden="true" />
                <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-500" aria-hidden="true" />
                <a href="mailto:info@flourishbakery.com" className="text-sm text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded">
                  info@flourishbakery.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Operating Hours:<br />
              Mon - Sun: 9:00 AM - 9:00 PM
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Flourish Bakery. All rights reserved. | Best Bakery in Ranchi, Jharkhand
          </p>
        </div>
      </div>
    </footer>
  );
}
