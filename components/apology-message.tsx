import { Check, Heart } from "lucide-react"

export default function ApologyMessage() {
  const reasons = [
    "I realized what I did was wrong",
    "I hurt someone I deeply care about",
    "I didn't think about how you would feel",
    "You deserve much better than that",
  ]

  const promises = [
    "I will be more thoughtful going forward",
    "I will listen to you with all my heart",
    "I will make this right",
    "I will never take you for granted",
  ]

  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="space-y-16">
        {/* Why I'm Sorry */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center">Why I'm Sorry</h2>
          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex gap-4 items-start p-4 rounded-lg bg-rose-50 hover:bg-rose-100 transition-colors"
              >
                <Check className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Promise */}
        <div className="space-y-6 pt-8 border-t border-rose-200">
          <h2 className="text-4xl font-bold text-gray-800 text-center">My Promise To You</h2>
          <div className="grid gap-4">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="flex gap-4 items-start p-4 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors"
              >
                <Heart className="w-6 h-6 text-rose-400 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-700">{promise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Message */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-rose-100 to-pink-50 border border-rose-200">
          <p className="text-center text-gray-800 text-lg leading-relaxed font-light">
            "I know actions speak louder than words, and I'm committed to showing you through my actions how much you
            mean to me. You're my everything, and I'm so sorry for letting you down. Please give me a chance to make
            this right."
          </p>
          <p className="text-center text-gray-800 text-lg leading-relaxed font-light mt-6 pt-6 border-t border-rose-300">
            No matter what, know that I'm genuinely sorry and I mean it. 💕
          </p>
        </div>
      </div>
    </section>
  )
}

