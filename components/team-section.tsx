import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FlaskConical, Languages, Palette, GraduationCap, Sparkles } from "lucide-react"
import Image from "next/image"

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

  const teachers = [
    {
      name: "Melek YERLİ",
      title: "Görsel Sanatlar Öğretmeni",
      degree: "Yüksek Lisans (Tezli)",
      field: "Fen ve Matematik Bilimleri",
      icon: FlaskConical,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
      photo: "/melek-yerli.jpg",
    },
    {
      name: "Murat ANIL",
      title: "Felsefe Öğretmeni",
      degree: "Yüksek Lisans (Tezli)",
      field: "Sosyal Bilimler ve Dil Bilimleri",
      icon: Languages,
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      photo: "/murat-anil.png",
    },
    {
      name: "Bilgiser TOSUN",
      title: "Rehberlik Öğretmeni",
      degree: "Lisans",
      field: "Sanat ve Tasarım ile Spor Bilimleri",
      icon: Palette,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      photo: "/bilgiser-tosun.jpg",
    },
    {
      name: "İsmail KARADİKEN",
      title: "Bilgisayar ve Öğretim Teknolojileri Öğretmeni",
      degree: "Yüksek Lisans (Tezsiz)",
      field: "Bilgisayar Bilimi",
      icon: BookOpen,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      photo: "/ismail-karadiken.jpg",
    },
  ]

  const teamMembers = [
    {
      role: "Proje Koordinatörü",
      count: 1,
      description: "Ekip liderliği ve proje yönetimi",
    },
    {
      role: "Araştırmacı Öğrenciler",
      count: 15,
      description: "Farklı disiplinlerden yetenekli öğrenciler",
    },
    {
      role: "Danışman Öğretmenler",
      count: 4,
      description: "Deneyimli eğitimciler ve mentorlar",
    },
  ]

  return (
    <section id="ekip" className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12 animate-float">
            <div className="relative w-40 h-40 md:w-52 md:h-52 hover-scale">
              <Image src="/nfk-2025-logo.png" alt="'25 NFK Harezmi" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              '25 NFK Hârezmi Ekibimiz
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4">
              Kütahya Necip Fazıl Kısakürek Anadolu Lisesi
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Farklı disiplinlerden gelen yetenekli öğrenciler ve deneyimli mentorlardan oluşan dinamik ekibimiz
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
              <GraduationCap className="h-9 w-9 text-accent" />
              Öğretmen Ekibimiz
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {teachers.map((teacher, index) => {
                const Icon = teacher.icon
                return (
                  <Card
                    key={index}
                    className="p-8 glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="relative w-28 h-28 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={teacher.photo || "/placeholder.svg"}
                          alt={teacher.name}
                          fill
                          className="object-cover rounded-2xl ring-4 ring-accent/20"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                          {teacher.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">{teacher.title}</p>
                        <div className="space-y-2">
                          <Badge variant="outline" className="text-xs font-semibold">
                            {teacher.degree}
                          </Badge>
                          <div className="flex items-center gap-3 mt-3">
                            <div
                              className={`p-2 rounded-xl ${teacher.color} group-hover:scale-110 transition-transform`}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <p className="text-xs text-muted-foreground font-medium">{teacher.field}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Ekibimiz Hakkında</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="p-10 text-center glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 group"
                >
                  <div className="text-6xl font-black text-gradient mb-4 group-hover:scale-110 transition-transform">
                    {member.count}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{member.role}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Temsil Edeceğimiz Disiplinler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {disciplines.map((discipline, index) => {
                const Icon = discipline.icon
                return (
                  <Card
                    key={index}
                    className="p-10 glass hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 group"
                  >
                    <div className="flex items-center space-x-6">
                      <div
                        className={`p-5 rounded-2xl ${discipline.color} flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <Icon className="h-10 w-10" />
                      </div>
                      <span className="text-lg font-bold text-balance leading-tight">{discipline.name}</span>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>

          <Card className="p-12 glass border-2 border-accent/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center space-y-6 relative z-10">
              <div className="flex justify-center mb-4">
                <Sparkles className="h-12 w-12 text-accent animate-pulse" />
              </div>
              <h3 className="text-4xl font-black text-gradient">Ekibimize Katılın</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-lg leading-relaxed">
                Bilime tutkulu, araştırmacı ve yenilikçi düşünceye sahip öğrencileri ekibimizde görmekten mutluluk
                duyarız. Birlikte öğrenelim, birlikte gelişelim!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
                <Badge variant="secondary" className="text-sm py-2 px-4 hover-scale cursor-pointer">
                  Disiplinler Arası Çalışma
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4 hover-scale cursor-pointer">
                  Proje Tabanlı Öğrenme
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4 hover-scale cursor-pointer">
                  Mentorluk Desteği
                </Badge>
                <Badge variant="secondary" className="text-sm py-2 px-4 hover-scale cursor-pointer">
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
