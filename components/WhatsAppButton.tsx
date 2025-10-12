import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  cakeName: string;
  size?: '1lb' | '2lb';
  className?: string;
}

export default function WhatsAppButton({ cakeName, size, className = '' }: WhatsAppButtonProps) {
  const phoneNumber = '919876543210';
  const sizeText = size ? ` (${size})` : '';
  const message = `Hi! I'd like to order a ${cakeName}${sizeText} cake from Flourish Bakery`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Button
      asChild
      className={`bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${className}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
        aria-label={`Order ${cakeName} cake via WhatsApp`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Order via WhatsApp
      </a>
    </Button>
  );
}
