import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Icon from "@/components/ui/icon"

const showcaseItems = [
  {
    title: "Perm Auto Weekend",
    category: "Клип",
    thumbnail: "https://drive.google.com/thumbnail?id=1Pb5cSDqXJHlsmDjlO6LP3PLg5KA07yhD&sz=w1280",
    videoUrl: "https://drive.google.com/file/d/1Pb5cSDqXJHlsmDjlO6LP3PLg5KA07yhD/preview",
  },
  {
    title: "Профессии. Механик",
    category: "Реклама",
    thumbnail: "https://drive.google.com/thumbnail?id=1IaYiavUWRF5qWkv4ZoR1-3WzfdsLZA5p&sz=w1280",
    videoUrl: "https://drive.google.com/file/d/1IaYiavUWRF5qWkv4ZoR1-3WzfdsLZA5p/preview",
  },
  {
    title: "Неизвестное об известном",
    category: "Свадьба",
    thumbnail: "https://drive.google.com/thumbnail?id=1aMbOGw-bCyQtROYx7Itd_AgQ7a6MOBwo&sz=w1280",
    videoUrl: "https://drive.google.com/file/d/1aMbOGw-bCyQtROYx7Itd_AgQ7a6MOBwo/preview",
  },
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const yValues = [y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 pt-4 pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Работы
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group cursor-pointer"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveVideo(i)}
              data-clickable
            >
              <motion.img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon name="Play" size={24} className="text-white ml-1" />
                </motion.div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-xl text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {activeVideo !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={showcaseItems[activeVideo].videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <Icon name="X" size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}