import { motion } from "framer-motion"

export default function OrbBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <motion.div
        animate={{
          x: [0, 200, -200, 0],
          y: [0, -200, 200, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[500px] w-[500px] rounded-full bg-purple-500 opacity-40 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -200, 200, 0],
          y: [0, 200, -200, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-pink-500 opacity-40 blur-[150px]"
      />
    </div>
  )
}