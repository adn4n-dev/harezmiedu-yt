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
      title: "Bilgi İşlemsel Düşünme Becerileri",
      description:
        "Bilgi İşlemsel Düşünme Becerilerinin (Teknolojiyle veya Bilgisayar Kullanmadan) Problem Çözme Sürecinde Kullanımı",
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
    <section id="bes-zemin" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Harezmi Eğitim Modeli'nin <span className="text-primary">Beş Zemini</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Eğitim modelimizin temelini oluşturan beş ana yapı taşı
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {foundations.map((foundation, index) => {
            const Icon = foundation.icon
            return (
              <div
                key={index}
                className="rounded-2xl border-2 border-border p-8 transition-all duration-300 hover:border-primary hover:shadow-lg bg-card"
              >
                <div className={`mb-4 ${foundation.color}`}>
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight text-foreground">{foundation.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{foundation.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
