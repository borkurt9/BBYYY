"use client"

import { useState } from "react"

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  const photos = [
    {
      id: 1,
      title: "Our best memories",
      description: "Moments that mean the world to me",
    },
    {
      id: 2,
      title: "Times that matter",
      description: "Every second with you is precious",
    },
    {
      id: 3,
      title: "Our story",
      description: "I want many more chapters with you",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Memories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="group cursor-pointer" onClick={() => setSelectedPhoto(photo.id.toString())}>
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-200 to-pink-200 aspect-square mb-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📸</div>
                    <p className="text-gray-600 font-light">Add your photo</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{photo.title}</h3>
              <p className="text-gray-600 mt-1 font-light">{photo.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-12 font-light">
          💡 Tip: Replace the photo placeholders with your actual photos by editing the component
        </p>
      </div>
    </section>
  )
}


