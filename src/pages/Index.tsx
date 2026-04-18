import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { ShowcaseSection } from "@/components/sections/showcase-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <ShowcaseSection />
      </main>
    </LenisProvider>
  )
}

export default Index