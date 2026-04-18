import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function FilmRollAnimation() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  const bars = [0.3, 0.7, 0.5, 1.0]

  return (
    <div className="flex items-end justify-center h-full gap-2 pb-4">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="w-6 md:w-8 rounded-sm bg-primary"
          animate={{ height: frame === i ? `${height * 100}px` : `${height * 60}px`, opacity: frame === i ? 1 : 0.4 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ minHeight: "20px" }}
        />
      ))}
    </div>
  )
}

function ColorGradeAnimation() {
  const [filter, setFilter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFilter((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const filters = [
    "saturate(1) hue-rotate(0deg) brightness(1)",
    "saturate(0.3) hue-rotate(200deg) brightness(0.8)",
    "saturate(1.5) hue-rotate(20deg) brightness(1.1)",
  ]
  const labels = ["Оригинал", "Холодная гамма", "Тёплый колор"]

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <motion.div
        className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-orange-400 via-rose-400 to-purple-500"
        animate={{ filter: filters[filter] }}
        transition={{ duration: 1 }}
      />
      <motion.span
        key={filter}
        className="text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {labels[filter]}
      </motion.span>
    </div>
  )
}

function TimelineAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const tracks = [
    { label: "Видео", color: "bg-primary", width: "80%" },
    { label: "Музыка", color: "bg-purple-400", width: "100%" },
    { label: "Звук", color: "bg-lime-400", width: "60%" },
  ]

  return (
    <div className="flex flex-col justify-center h-full gap-3 px-2">
      {tracks.map((track, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground w-10 flex-shrink-0">{track.label}</span>
          <div className="flex-1 h-3 bg-foreground/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${track.color} rounded-full`}
              style={{ width: track.width }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          </div>
        </div>
      ))}
      <div className="relative mt-1">
        <div className="w-full h-0.5 bg-foreground/10 rounded-full" />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
          animate={{ left: `${progress}%` }}
          transition={{ duration: 0 }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Что я делаю
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <FilmRollAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Видеосъёмка</h3>
              <p className="text-muted-foreground text-sm mt-1">Свадьбы, события, рекламные ролики и клипы — снимаю на профессиональное оборудование.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <ColorGradeAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Цветокоррекция</h3>
              <p className="text-muted-foreground text-sm mt-1">Профессиональный колоргрейдинг: от кинематографичного до живого и яркого — под любой стиль.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <TimelineAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Монтаж</h3>
              <p className="text-muted-foreground text-sm mt-1">Многодорожечный монтаж с музыкой, звуком и спецэффектами. Ритм, который чувствуется.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
