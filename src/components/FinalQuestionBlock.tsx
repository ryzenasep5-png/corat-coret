import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

export default function FinalQuestionBlock({
  prompt,
  noLabel,
  response,
}: {
  prompt: string
  noLabel: string
  response: string
}) {
  const [answered, setAnswered] = useState(false)

  return (
    <div className="final-question my-7 text-center">
      <p className="font-scribble text-3xl font-bold text-ink sm:text-4xl">{prompt}</p>
      <p className="mt-2 font-hand text-base text-inksoft">(jujur aja, nggak usah mikir lama-lama 😌)</p>
      <button
        type="button"
        onClick={() => setAnswered(true)}
        className="mt-5 rounded-full border-2 border-rose/50 bg-white/75 px-7 py-2 font-hand text-xl text-rose shadow-sm transition hover:-translate-y-0.5 hover:bg-blush/50"
      >
        {noLabel}
      </button>
      <AnimatePresence>
        {answered ? (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-5 max-w-sm rounded-xl border border-dashed border-rose/45 bg-blush/45 px-4 py-3 font-hand text-lg text-ink"
          >
            {response}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
