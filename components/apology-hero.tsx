import { Heart } from "lucide-react"

interface ApologyHeroProps {
  scrolled: boolean
}

export default function ApologyHero({ scrolled }: ApologyHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="text-center space-y-8 max-w-2xl relative z-10">
        <div className="flex justify-center mb-6">
          <Heart className="w-16 h-16 text-rose-400 fill-rose-400 animate-pulse" />
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 leading-tight">
          I'm <span className="text-rose-500">sorry</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
          I made a mistake, and I want to make it right. You mean everything to me, and I'm truly sorry.
        </p>

        <div className="flex justify-center gap-2 pt-4">
          <div className="w-2 h-2 rounded-full bg-rose-300 animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-rose-300 animate-bounce animation-delay-100" />
          <div className="w-2 h-2 rounded-full bg-rose-300 animate-bounce animation-delay-200" />
        </div>

        {!scrolled && <p className="text-gray-500 text-sm mt-8">Scroll to continue</p>}
      </div>
    </section>
  )
}

