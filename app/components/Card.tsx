'use client'
import React, { useState } from 'react'
import type { StaticImageData } from 'next/image'

interface CardProps {
  img: string | StaticImageData
  header: string
  description: string
  productId: string
}

const Card: React.FC<CardProps> = ({ img, header, description, productId }) => {
  const imageUrl = typeof img === 'string' ? img : img.src

  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleBookNow = () => {
    setShowForm(true)
  }

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert('Please enter your name and phone number.')
      return
    }

    const data = {
      productId,
      productName: header,
      name,
      phone,
      email,
    }

    localStorage.setItem('bookedProduct', JSON.stringify(data))

    try {
      const res = await fetch('http://localhost:5000/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        alert('We’ve received your request. We’ll contact you soon!')
        setShowForm(false)
        setName('')
        setPhone('')
        setEmail('')
      } else {
        alert('Something went wrong. Please try again later.')
      }
    } catch (err) {
      alert('Error connecting to server.')
    }
  }

  return (
    <div className="w-80 bg-white shadow-md rounded overflow-hidden relative">
      <img src={imageUrl} alt={header} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{header}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={handleBookNow}
          className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
        >
          Book Now
        </button>
      </div>

      {showForm && (
        <div className="absolute inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center p-4">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-2 p-2 border w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="mb-2 p-2 border w-full rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email (optional)"
            className="mb-2 p-2 border w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
