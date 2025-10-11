"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("harezmi")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/nfk-harezmi-logo.png"
              alt="'25 NFK Hârezmî Logo"
              width={300}
              height={150}
              className="h-32 w-auto md:h-48"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Harezmi <span className="text-primary">Eğitim Modeli</span>
            </h1>
            <div className="py-6">
              <p className="text-2xl md:text-4xl font-bold text-primary text-balance leading-tight">
                İNSAN İÇİN BİRLİKTE
              </p>
              <p className="text-2xl md:text-4xl font-bold text-primary text-balance leading-tight">
                DÜŞÜN, TASARLA, ÜRET
              </p>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              Bilimin öncüsü Harezmi'nin izinde, geleceğin bilim insanlarını yetiştiriyoruz
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base" onClick={scrollToNext}>
              Keşfet
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Başvuru Yap
            </Button>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}
