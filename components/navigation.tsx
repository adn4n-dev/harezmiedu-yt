"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "harezmi", label: "Harezmi Kimdir?" },
    { id: "model", label: "Eğitim Modeli" },
    { id: "bes-zemin", label: "Beş Zemin" },
    { id: "takvim", label: "Takvim" },
    { id: "ekip", label: "Ekibimiz" },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "w-[95%] max-w-6xl" : "w-[95%] max-w-7xl"
      }`}
    >
      <div
        className={`glass rounded-3xl shadow-2xl transition-all duration-500 ${
          isScrolled ? "shadow-xl" : "shadow-2xl"
        }`}
      >
        <div className="px-6">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/nfk-harezmi-logo.png"
                alt="'25 NFK Hârezmî Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
              <Image
                src="/nfkal-logo.png"
                alt="Necip Fazıl Kısakürek Anadolu Lisesi Logo"
                width={40}
                height={40}
                className="h-12 w-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              ))}
              <Link
                href="/calismalarmiz"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
              >
                Çalışmalarımız
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-2xl hover:scale-105 transition-transform"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  href="/calismalarmiz"
                  className="text-left text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Çalışmalarımız
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
