"use client"

import { Calendar, Users, Award, Lightbulb } from "lucide-react"
import Image from "next/image"

interface TimelineItem {
  date: string
  title: string
  description: string
  category: "proje" | "etkinlik" | "basari" | "arastirma"
  images?: string[]
}

const timelineItems: TimelineItem[] = [
  {
    date: "Eylül 2025",
    title: "İlk Toplantımızdan Kareler",
    description:
      "Eylül ayı içinde Harezmi Eğitim Modeli için başvurumuzu yaptık. Başvuru öncesi öğretmen ekibimizle toplandık.",
    category: "etkinlik",
    images: ["/teacher-meeting-1.jpg", "/teacher-meeting-2.jpg", "/teacher-meeting-3.jpg"],
  },
  {
    date: "Eylül 2025",
    title: "Okul Müdürümüz Fazlı KARABULUT ile Bilgilendirme Toplantısı",
    description:
      "Başvurudan sonra Okul Müdürümüz Fazlı KARABULUT ile bilgilendirme toplantısı gerçekleştirdik. Harezmi Eğitim Modeli hakkında detaylı bilgilendirme yapıldı ve süreç planlandı.",
    category: "etkinlik",
    images: ["/principal-meeting-1.jpg", "/principal-meeting-2.jpg"],
  },
]

const categoryConfig = {
  proje: {
    icon: Lightbulb,
    color: "text-primary",
    bgColor: "bg-primary/10",
    label: "Proje",
  },
  etkinlik: {
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    label: "Etkinlik",
  },
  basari: {
    icon: Award,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    label: "Başarı",
  },
  arastirma: {
    icon: Calendar,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    label: "Araştırma",
  },
}

export function ProjectsTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineItems.map((item, index) => {
            const config = categoryConfig[item.category]
            const Icon = config.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-background ${config.bgColor}`} />
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-20 md:ml-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-2 rounded-lg ${config.bgColor}`}>
                        <Icon className={`h-5 w-5 ${config.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${config.bgColor} ${config.color}`}>
                            {config.label}
                          </span>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {item.images && item.images.length > 0 && (
                      <div
                        className={`mt-4 grid gap-3 ${
                          item.images.length === 1
                            ? "grid-cols-1"
                            : item.images.length === 2
                              ? "grid-cols-2"
                              : "grid-cols-2 md:grid-cols-3"
                        }`}
                      >
                        {item.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="rounded-lg overflow-hidden border border-border">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${item.title} - ${imgIndex + 1}`}
                              width={400}
                              height={300}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block flex-1" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Empty state message */}
      <div className="mt-16 text-center p-8 border border-dashed border-border rounded-lg">
        <p className="text-muted-foreground">Daha fazla proje ve çalışma eklenecektir. Takipte kalın!</p>
      </div>
    </div>
  )
}
