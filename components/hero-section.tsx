"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("ekip")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-[3rem] p-12 md:p-20 shadow-2xl">
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-accent/20 mb-6">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-foreground/80">2025 NFK Harezmi</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-balance leading-[0.95] tracking-tight">
                  <span className="block text-foreground">Harezmi</span>
                  <span className="block text-gradient">Eğitim Modeli</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/60 font-medium mt-4">
                  Kütahya Necip Fazıl Kısakürek Anadolu Lisesi
                </p>
              </div>

              <div className="py-8 space-y-3">
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                  İNSAN İÇİN BİRLİKTE
                </p>
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent text-balance leading-tight">
                  DÜŞÜN, TASARLA, ÜRET
                </p>
              </div>

              <p className="text-xl md:text-2xl lg:text-3xl text-foreground/60 text-balance max-w-3xl mx-auto font-light">
                Bilimin öncüsü Harezmi'nin izinde, geleceğin bilim insanlarını yetiştiriyoruz
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 rounded-2xl bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={scrollToNext}
                >
                  Keşfet
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 rounded-2xl glass border-2 hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Başvuru Yap
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-foreground/40 hover:text-foreground/80 transition-all duration-300 hover:scale-110"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="h-8 w-8" />
          <span className="text-xs font-medium">Kaydır</span>
        </div>
      </button>
    </section>
  )
}
