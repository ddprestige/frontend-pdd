import React from 'react';
import Card from '../components/Card';
import sofaset from '../asset/hero1.png';
import livingroom from '../asset/hero2.png';
import sofacumbed from '../asset/sofacumbed.jpeg';

const products = [
  {
    img: sofaset,
    header: 'Modern Living Room Interior with Neutral Tones',
    description:
      'Discover a modern living room setup with a grey sectional sofa, stylish wall decor, and natural lighting. This interior promotes luxury and relaxation with neutral tones, lush indoor plants, and a soft area rug—perfect for premium home interiors.',
    productId: 'prod001',
  },
  {
    img: livingroom,
    header: 'Beige Sofa Set with Wooden Accents – Elegant Interior Inspiration',
    description:
      'Enhance your interior with this beige sofa set featuring smooth wooden legs and a minimalist ottoman. Designed for sophisticated homes, this setup is ideal for those seeking a blend of comfort, elegance, and modern aesthetics.',
    productId: 'prod002',
  },
  {
    img: sofacumbed,
    header: 'Blue Sofa Cum Bed – Multi-functional & Premium Furniture',
    description:
      'This luxurious blue sofa cum bed features leatherette material, deep cushioning, and smart space-saving design. Ideal for apartments and guest rooms, this convertible furniture combines comfort, utility, and modern style.',
    productId: 'prod003',
  },
];

const Content = () => {
  return (
    <div className="p-5">
      <div className="p-10 flex flex-wrap gap-6 justify-center">
        {products.map(({ img, header, description, productId }) => (
          <Card
            key={productId}
            img={img}
            header={header}
            description={description}
            productId={productId}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a href="/services">
          <button className="px-8 py-3 bg-emerald-500 text-white text-xl font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 mb-3">
            See More Designs
          </button>
        </a>
      </div>
    </div>
  );
};

export default Content;
