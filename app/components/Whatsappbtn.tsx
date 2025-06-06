import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppButton = ({ phoneNumber = '+917975709648' }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 z-50 cursor-pointer">
        <FaWhatsapp size={24} />
      </div>
    </Link>
  );
};

export default WhatsAppButton;