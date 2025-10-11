import { Navigation } from "@/components/navigation"
import { ProjectsTimeline } from "@/components/projects-timeline"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CalismalarmizPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Ana Sayfaya Dön
            </Button>
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Çalışmalarımız</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Harezmi Eğitim Modeli kapsamında gerçekleştirdiğimiz projeler ve çalışmalar
            </p>
          </div>

          <ProjectsTimeline />
        </div>
      </main>
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Harezmi Eğitim Modeli. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
