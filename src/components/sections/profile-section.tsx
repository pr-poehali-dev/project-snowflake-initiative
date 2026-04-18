import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function ProfileSection() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center py-16 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-24 h-24 rounded-full bg-muted border-2 border-border overflow-hidden flex items-center justify-center mb-5">
        <Icon name="User" size={40} className="text-muted-foreground" />
      </div>

      <h2 className="font-serif text-2xl text-foreground mb-1">Имя Фамилия</h2>
      <p className="text-sm text-muted-foreground mb-6">Видеограф и монтажёр</p>

      <a
        href="https://t.me/risecoree"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
      >
        <Icon name="Send" size={16} />
        @risecoree
      </a>
    </motion.section>
  )
}
