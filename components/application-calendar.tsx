import { Card } from "@/components/ui/card"
import { Calendar, FileCheck, Users, Presentation, Award, ArrowRight } from "lucide-react"
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
    <section id="takvim" className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">Uygulama Takvimi</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Yıllık program akışı ve önemli aşamalar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="p-8 glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-accent/50 group relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-7xl font-black text-accent/5 group-hover:text-accent/10 transition-colors">
                    {index + 1}
                  </div>
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <div className="text-sm font-black text-accent uppercase tracking-wider">{item.month}</div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Card className="p-12 md:p-16 glass border-2 border-accent/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center space-y-6 relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-gradient">Başvurmaya Hazır mısınız?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-lg leading-relaxed">
                Harezmi Eğitim Modeli'ne katılmak ve bilimsel yolculuğunuza başlamak için hemen başvurun. Sorularınız
                için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <Button size="lg" className="text-lg px-8 py-6 rounded-2xl hover-scale group/btn">
                  Başvuru Formu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-2xl hover-scale glass bg-transparent"
                >
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
