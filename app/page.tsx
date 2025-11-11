"use client"

import { useEffect, useState } from "react"
import ApologyHero from "@/components/apology-hero"
import ApologyMessage from "@/components/apology-message"
import PhotoGallery from "@/components/photo-gallery"
import ActionButtons from "@/components/action-buttons"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <ApologyHero scrolled={scrolled} />
      <ApologyMessage />
      <PhotoGallery />
      <ActionButtons />
    </main>
  )
}

