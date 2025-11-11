"use client"

import { Heart, MessageCircle } from "lucide-react"

export default function ActionButtons() {
  const handleCall = () => {
    alert("Ready to talk whenever you are. I'm listening with my whole heart ❤️")
  }

  const handleMessage = () => {
    alert("Type your message here. I want to hear everything you have to say.")
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={handleCall}
            className="flex flex-col items-center gap-4 p-8 rounded-xl bg-white border-2 border-rose-200 hover:border-rose-400 hover:shadow-lg transition-all group"
          >
            <Heart className="w-12 h-12 text-rose-500 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-gray-800">Call Me</span>
            <span className="text-sm text-gray-600">Talk right now</span>
          </button>

          <button
            onClick={handleMessage}
            className="flex flex-col items-center gap-4 p-8 rounded-xl bg-white border-2 border-rose-200 hover:border-rose-400 hover:shadow-lg transition-all group"
          >
            <MessageCircle className="w-12 h-12 text-rose-500 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-gray-800">Message</span>
            <span className="text-sm text-gray-600">Take your time</span>
          </button>
        </div>

        <div className="text-center pt-8">
          <p className="text-gray-600 font-light">No matter what, know that I'm genuinely sorry and I mean it. 💕</p>
        </div>
      </div>
    </section>
  )
}

