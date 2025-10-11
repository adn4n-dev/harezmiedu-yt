import { Card } from "@/components/ui/card"
import { Target, Lightbulb, Users, BookOpen, TrendingUp } from "lucide-react"
import Image from "next/image"

export function EducationModel() {
  const values = [
    {
      icon: Lightbulb,
      title: "Öğrenci merkezli eğitim",
      description: "Her öğrencinin bireysel ihtiyaçlarına odaklanan eğitim yaklaşımı",
    },
    {
      icon: BookOpen,
      title: "Araştırma ve sorgulama",
      description: "Merak ve keşif odaklı öğrenme deneyimi",
    },
    {
      icon: Users,
      title: "İşbirlikçi öğrenme",
      description: "Takım çalışması ve birlikte öğrenme kültürü",
    },
    {
      icon: Target,
      title: "Çok disiplinli yaklaşım",
      description: "Farklı disiplinleri bir araya getiren bütüncül eğitim",
    },
    {
      icon: TrendingUp,
      title: "Sürekli gelişim",
      description: "Devamlı öğrenme ve kendini geliştirme anlayışı",
    },
  ]

  return (
    <section id="model" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image src="/meb-logo-official.png" alt="T.C. Milli Eğitim Bakanlığı" fill className="object-contain" />
            </div>
            <div className="relative w-64 h-32 md:w-80 md:h-40">
              <Image
                src="/harezmi-model-logo-clean.png"
                alt="Harezmi Eğitim Modeli - İnsan için birlikte düşün, tasarla, üret"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Harezmi Eğitim Modeli</h2>

            <div className="max-w-4xl mx-auto mb-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/30">
              <h3 className="text-xl font-semibold mb-3 text-primary">Genel Amaç</h3>
              <p className="text-lg text-foreground text-pretty leading-relaxed">
                Harezmi eğitim modelinin öğrenciler açısından genel amacı; yaşam problemlerini tanımlayarak bunlara
                yenilikçi ve etkili çözümler üretmek üzere Ar-Ge yöntemlerini işbirlikçi olarak uygulamaları sürecinde
                <span className="font-semibold text-primary">
                  {" "}
                  algoritmik düşünme, bilişsel ve üst bilişsel, sosyal-duygusal ve pratik ve fiziksel becerilerini
                </span>{" "}
                geliştirmeleridir.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-3 text-primary">Misyonumuz</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                MEB'in belirlediği hedefler doğrultusunda, öğrencilerimizin 21. yüzyıl becerilerini kazanmalarını
                sağlayacak eğitim modelini hayata geçirmek.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Değerlerimiz</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-card border-border"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold">{value.title}</h4>
                        <p className="text-muted-foreground text-sm text-pretty">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
