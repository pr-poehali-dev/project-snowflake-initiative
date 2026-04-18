import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { FooterSection } from "@/components/sections/footer-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <ShowcaseSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index