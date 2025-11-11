"use client" // This component is interactive (onClick), so it must be a Client Component

import Image from "next/image"
import { useState } from "react"

// 1. DEFINE YOUR PHOTO DATA ARRAY
// This is the list that the .map() will loop over.
const photoData = [
  { 
    id: 1, 
    src: "/images/1.jpg", 
    title: "Our First Photo", 
    description: "Remember this day?" 
  },
  { 
    id: 2, 
    src: "/images/2.jpg", 
    title: "Sunny Day", 
    description: "Fun at the park." 
  },
  { 
    id: 3, 
    src: "/images/3.jpg", 
    title: "Peace!", 
    description: "Silly faces." 
  },
  // You can add more photos here later by copying the block above
]

// This is your component
export default function PhotoGallery() {
  // This line was in your code, it's for tracking which photo is clicked
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  
  // This assigns your array to the 'photos' variable that your .map() loop uses
  const photos = photoData 

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Memories</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="group cursor-pointer" onClick={() => setSelectedPhoto(photo.id.toString())}>
            
            {/* This 'relative' div is the container for your image */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-200 to-pink-200 aspect-square mb-4 shadow-lg hover:shadow-xl transition-shadow">
              
              {/* THIS IS THE IMPORTANT CHANGE:
                We are replacing the '📸' placeholder div with a real <Image> component.
              */}
              <Image
                src={photo.src} // Use the 'src' from your array
                alt={photo.title} // Use the 'title' from your array for alt text
                fill={true} // This makes the image fill the entire parent div
                className="object-cover" // This makes sure the image covers the space without stretching
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
            </div>

            {/* These lines were already correct and use the array data */}
            <h3 className="text-xl font-semibold text-gray-800">{photo.title}</h3>
            <p className="text-gray-600 mt-1 font-light">{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}