'use client'

import { useState } from 'react';
import Image from 'next/image';
import necklace from "../../public/n2.webp";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';


export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1)
  const [giftCode, setGiftCode] = useState('')
  const price = 529.00

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  return (
    <div className="flex gap-8 p-8 max-w-7xl mx-auto">
      {/* Main cart section */}
      <div className="flex-grow">
        <h1 className="text-2xl italic mb-8">Your cart ({quantity} item)</h1>
        
        <div className="flex items-center gap-8">
          {/* Product image */}
          <div className="w-32 h-32 relative">
            <Image 
              src={necklace} 
              alt="Exuberant golden Necklace"
              className="w-full h-full object-contain bg-gray-50"
            />
          </div>
          
          {/* Product details */}
          <div className="flex-grow">
            <h2 className="text-lg">Exuberant golden Necklace</h2>
          </div>
          
          {/* Quantity controls */}
          <div className="flex items-center border bg-white border-gray-200">
            <button 
              onClick={decreaseQuantity}
              className="px-4 py-2 text-xl"
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button 
              onClick={increaseQuantity}
              className="px-4 py-2 text-xl"
            >
              +
            </button>
          </div>
          
          {/* Delete button */}
          <button className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Remove item</span>
            <MdDelete size={22} />
          </button>
        </div>
      </div>

      {/* Cart totals sidebar */}
      <div className="w-1/3">
        <div className="bg-white p-6 rounded">
          <h2 className="text-2xl italic mb-6">Cart totals</h2>
          
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>${(price * quantity).toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between mb-8 text-lg font-medium">
            <span>Total</span>
            <span className="text-orange-500">${(price * quantity).toFixed(2)}</span>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl italic mb-4">Have a Gift Card?</h3>
            <input
              type="text"
              value={giftCode}
              onChange={(e) => setGiftCode(e.target.value)}
              placeholder="Enter your code..."
              className="w-full p-3 border border-gray-200 mb-4"
            />
            <button className="w-full bg-black text-white p-3 mb-4">
              Apply
            </button>
          </div>
          
          <button className="w-full bg-black text-white p-3">
            <Link href={'/checkout'}>
            Proceed to checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}