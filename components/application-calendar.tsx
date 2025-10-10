import { Card } from "@/components/ui/card"
import { Calendar, FileCheck, Users, Presentation, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ApplicationCalendar() {
  const timeline = [
    {
      icon: FileCheck,
      month: "EYLÜL",
      title: "Başvuru ve ekip oluşturma",
      description: "Sistemde hazır form ile başvuru süreci",
    },
    {
      icon: Users,
      month: "EKİM",
      title: "Öğrenci beklenti formları",
      description: "Öğrencilerin hedef ve beklentilerinin belirlenmesi",
    },
    {
      icon: Calendar,
      month: "KASIM-MART",
      title: "Proje Uygulama Süreci",
      description: "Aktif proje çalışmaları ve uygulama dönemi",
    },
    {
      icon: Presentation,
      month: "NİSAN",
      title: "Bilimsel çalışma sunumları",
      description: "Projelerin sunumu ve değerlendirmesi",
    },
    {
      icon: Award,
      month: "MAYIS-HAZİRAN",
      title: "Değerlendirme ve sertifikasyon",
      description: "Final değerlendirmeleri ve sertifika töreni",
    },
  ]

  return (
    <section id="takvim" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Uygulama Takvimi</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Yıllık program akışı ve önemli aşamalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 bg-card border-border"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="text-sm font-bold text-accent uppercase">{item.month}</div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Başvurmaya Hazır mısınız?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Harezmi Eğitim Modeli'ne katılmak ve bilimsel yolculuğunuza başlamak için hemen başvurun. Sorularınız
                için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg">Başvuru Formu</Button>
                <Button size="lg" variant="outline">
                  İletişim
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
