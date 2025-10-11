import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FlaskConical, Languages, Palette } from "lucide-react"

export function TeamSection() {
  const disciplines = [
    {
      icon: BookOpen,
      name: "Bilgisayar Bilimi",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      icon: FlaskConical,
      name: "Fen ve Matematik Bilimleri",
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      icon: Palette,
      name: "Sanat ve Tasarım ile Spor Bilimleri",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      icon: Languages,
      name: "Sosyal Bilimler ve Dil Bilimleri",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
  ]
  // </CHANGE>

  const teamMembers = [
    {
      role: "Proje Koordinatörü",
      count: 2,
      description: "Ekip liderliği ve proje yönetimi",
    },
    {
      role: "Araştırmacı Öğrenciler",
      count: 12,
      description: "Farklı disiplinlerden yetenekli öğrenciler",
    },
    {
      role: "Danışman Öğretmenler",
      count: 4,
      description: "Deneyimli eğitimciler ve mentorlar",
    },
  ]

  return (
    <section id="ekip" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">'25 NFK Hârezmi Ekibimiz</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Farklı disiplinlerden gelen yetenekli öğrenciler ve deneyimli mentorlardan oluşan dinamik ekibimiz
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Ekibimiz Hakkında</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center bg-card border-border">
                  <div className="text-3xl font-bold text-primary mb-2">{member.count}</div>
                  <h4 className="text-lg font-semibold mb-2">{member.role}</h4>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Temsil Edeceğimiz Disiplinler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {disciplines.map((discipline, index) => {
                const Icon = discipline.icon
                return (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 bg-card border-border"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-lg ${discipline.color} flex-shrink-0`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className="text-lg font-medium text-balance">{discipline.name}</span>
                    </div>
                  </Card>
                )
              })}
            </div>
            {/* </CHANGE> */}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold">Ekibimize Katılın</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Bilime tutkulu, araştırmacı ve yenilikçi düşünceye sahip öğrencileri ekibimizde görmekten mutluluk
                duyarız. Birlikte öğrenelim, birlikte gelişelim!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                <Badge variant="secondary" className="text-sm">
                  Disiplinler Arası Çalışma
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Proje Tabanlı Öğrenme
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Mentorluk Desteği
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Ulusal Yarışmalar
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
