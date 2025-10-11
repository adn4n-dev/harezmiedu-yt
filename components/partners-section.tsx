import Image from "next/image"

export function PartnersSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Kurumsal Ortaklarımız</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32 md:h-40 md:w-40">
              <Image src="/logo.jpg" alt="'25 NFK Hârezmî" fill className="object-contain" />
            </div>
            <p className="text-center text-sm text-muted-foreground">'25 NFK Hârezmî</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32 md:h-40 md:w-40">
              <Image
                src="/nfkal-logo.png"
                alt="Kütahya Necip Fazıl Kısakürek Anadolu Lisesi"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Kütahya Necip Fazıl Kısakürek
              <br />
              Anadolu Lisesi
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32 md:h-40 md:w-40">
              <Image src="/meb-logo.png" alt="T.C. Milli Eğitim Bakanlığı" fill className="object-contain" />
            </div>
            <p className="text-center text-sm text-muted-foreground">T.C. Milli Eğitim Bakanlığı</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32 md:h-40 md:w-40">
              <Image src="/dpu-logo.png" alt="Kütahya Dumlupınar Üniversitesi" fill className="object-contain" />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Kütahya Dumlupınar
              <br />
              Üniversitesi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
