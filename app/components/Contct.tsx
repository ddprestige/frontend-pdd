import React from 'react';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa'; 

const ContactButton = ({ phoneNumber = '+917975709648' }) => {
  const telLink = `tel:${phoneNumber}`;

  return (
    <Link href={telLink}>
      <div className="fixed bottom-6 left-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg p-3 z-50 cursor-pointer">
        <FaPhone size={24} />
      </div>
    </Link>
  );
};

export default ContactButton;