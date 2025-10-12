"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import WhatsAppButton from './WhatsAppButton';

interface CakeCardProps {
  name: string;
  price1lb: number;
  price2lb: number;
  image?: string;
  index?: number;
}

export default function CakeCard({ name, price1lb, price2lb, image, index = 0 }: CakeCardProps) {
  const formattedName = name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const placeholderImage = `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop&q=75`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
            <Image
              src={image || placeholderImage}
              alt={`${formattedName} cake - Fresh cakes in Ranchi from Flourish Bakery`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={index < 3 ? "eager" : "lazy"}
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="mb-3 text-xl">{formattedName}</CardTitle>
          <div className="flex gap-3">
            <Badge variant="secondary" className="text-sm">
              1lb: ₹{price1lb}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              2lb: ₹{price2lb}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 p-4 pt-0">
          <WhatsAppButton cakeName={formattedName} className="w-full" />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
