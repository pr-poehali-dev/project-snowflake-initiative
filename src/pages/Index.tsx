import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { ProfileSection } from "@/components/sections/profile-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <ProfileSection />
        <ShowcaseSection />
      </main>
    </LenisProvider>
  )
}

export default Index