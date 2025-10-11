"use client"

import { Calendar, Users, Award, Lightbulb } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
                        className={`mt-6 grid gap-4 ${
                          item.images.length === 1
                            ? "grid-cols-1"
                            : item.images.length === 2
                              ? "grid-cols-1 md:grid-cols-2"
                              : "grid-cols-1 md:grid-cols-2"
                        }`}
                      >
                        {item.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all cursor-pointer group"
                            onClick={() => setSelectedImage(image)}
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${item.title} - ${imgIndex + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Büyütülmüş görsel"
              width={1200}
              height={900}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Empty state message */}
      <div className="mt-16 text-center p-8 border border-dashed border-border rounded-lg">
        <p className="text-muted-foreground">Daha fazla proje ve çalışma eklenecektir. Takipte kalın!</p>
      </div>
    </div>
  )
}
