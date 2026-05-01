import React, { useState } from 'react';
import { FaStar, FaShoppingCart, FaBolt, FaHeart, FaShieldAlt, FaTruck, FaUndo } from 'react-icons/fa';

const product = {
  name: 'premium sneakers for men',
  poster: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200&auto=format&fit=crop',
  ],
  category: 'footwear',
  desc: 'Experience unmatched comfort, premium cushioning and sporty street-style with these high performance everyday sneakers built for modern movement.',
  price: 2499,
  mrp: 4999,
  discount: 50,
  rating: 4.8,
  review: 1387,
  stock: 12,
  brand: 'nike',
  productCode: 'NK-PRM-1023',
};

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(product.poster);

  return (
    <div className="min-h-screen bg-[#f6f6f6] px-4 sm:px-6 py-8 text-gray-900">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
          <div className="bg-white rounded-[28px] shadow-[0_10px_28px_rgba(0,0,0,0.05)] p-4 sticky top-20">
            <div className="rounded-[22px] overflow-hidden bg-gray-100">
              <img src={selectedImage} alt={product.name} className="w-full h-[430px] object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {product.images.map((img, index) => (
                <div key={index} onClick={() => setSelectedImage(img)} className={`cursor-pointer rounded-2xl overflow-hidden border ${selectedImage === img ? 'border-black' : 'border-gray-200'}`}>
                  <img src={img} alt="preview" className="w-full h-20 object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-[28px] shadow-[0_10px_28px_rgba(0,0,0,0.05)] p-6">
              <div className="flex items-center gap-3 flex-wrap mb-3 text-xs">
                <span className="bg-black text-white px-3 py-1 rounded-full">{product.discount}% OFF</span>
                <span className="text-gray-500 uppercase">{product.brand}</span>
                <span className="text-gray-500">SKU: {product.productCode}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold capitalize leading-snug max-w-xl">{product.name}</h1>

              <div className="flex items-center gap-3 mt-4 flex-wrap text-sm">
                <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full font-medium"><FaStar /> {product.rating}</div>
                <span className="text-gray-500">{product.review.toLocaleString()} Reviews</span>
                <span className="text-green-600 font-medium">Only {product.stock} left in stock</span>
              </div>

              <p className="text-gray-600 mt-4 leading-7 text-sm sm:text-base">{product.desc}</p>

              <div className="mt-5 flex items-end gap-3 flex-wrap">
                <span className="text-3xl font-bold">₹{product.price}</span>
                <span className="text-base text-gray-400 line-through">₹{product.mrp}</span>
                <span className="text-green-600 text-sm font-medium">Save ₹{product.mrp - product.price}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="bg-black text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg"><FaShoppingCart /> Add To Cart</button>
                <button className="border py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-50"><FaBolt /> Buy Now</button>
              </div>

              <button className="w-full mt-3 border py-3.5 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-50"><FaHeart /> Add To Wishlist</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-[24px] p-4 shadow-[0_8px_22px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center min-h-[110px]">
                <FaTruck className="text-lg mb-2" />
                <p className="text-sm font-medium">Fast Delivery</p>
              </div>
              <div className="bg-white rounded-[24px] p-4 shadow-[0_8px_22px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center min-h-[110px]">
                <FaShieldAlt className="text-lg mb-2" />
                <p className="text-sm font-medium">Secure Product</p>
              </div>
              <div className="bg-white rounded-[24px] p-4 shadow-[0_8px_22px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center min-h-[110px]">
                <FaUndo className="text-lg mb-2" />
                <p className="text-sm font-medium">7 Day Return</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[28px] shadow-[0_10px_28px_rgba(0,0,0,0.05)] p-6">
          <h2 className="text-xl font-bold mb-4">Product Information</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-gray-50 rounded-2xl p-4"><p className="text-gray-500">Brand</p><p className="font-medium capitalize mt-1">{product.brand}</p></div>
            <div className="bg-gray-50 rounded-2xl p-4"><p className="text-gray-500">Category</p><p className="font-medium capitalize mt-1">{product.category}</p></div>
            <div className="bg-gray-50 rounded-2xl p-4"><p className="text-gray-500">Product Code</p><p className="font-medium mt-1">{product.productCode}</p></div>
            <div className="bg-gray-50 rounded-2xl p-4"><p className="text-gray-500">Availability</p><p className="font-medium mt-1">{product.stock} Units</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}