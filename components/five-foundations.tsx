import { User, Brain, Code, Heart, Network } from "lucide-react"

export function FiveFoundations() {
  const foundations = [
    {
      title: "Bireysel Yapılandırma",
      description: "Bireyleri Anlamlandırma ve Öğrenme için Tasarlık ve Oyun Robotluğunun Tasarlanması",
      icon: User,
      color: "text-blue-500",
    },
    {
      title: "Bilgi İşlemsel Düşünce Becerileri",
      description:
        "Bilgi İşlemsel Düşünce Becerilerinin (Teknolojiyle veya Bilgisayar Kullanmadan) Problem Çözme Sürecinde Kullanımı",
      icon: Brain,
      color: "text-purple-500",
    },
    {
      title: "Programlama ve Araçların Kullanımı",
      description: "Programlama ve Araçların Öğretim Öğrenme Ortamlarında Etkin Kullanımı",
      icon: Code,
      color: "text-green-500",
    },
    {
      title: "Sosyal Bilimler ve Değerler",
      description: "Sosyal Bilimler, etik, ahlak ve değerlerin değerlendirilmesi",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Disiplinler Arası Yaklaşım",
      description: "Disiplinler arası Yaklaşımın Yenilenmiş Yorumlanarak Farklı Disiplinlerin Eşdeğerde Yer Alması",
      icon: Network,
      color: "text-primary",
    },
  ]

  return (
    <section id="bes-zemin" className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Harezmi Eğitim Modeli'nin <span className="text-gradient">Beş Zemini</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Eğitim modelimizin temelini oluşturan beş ana yapı taşı
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {foundations.map((foundation, index) => {
            const Icon = foundation.icon
            return (
              <div
                key={index}
                className="rounded-3xl border-2 border-border p-10 transition-all duration-500 hover:border-accent hover:shadow-2xl glass group hover:-translate-y-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div
                    className={`mb-6 ${foundation.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 inline-block`}
                  >
                    <Icon size={56} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black mb-5 leading-tight text-foreground group-hover:text-accent transition-colors">
                    {foundation.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{foundation.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
