export function AboutHarezmi() {
  return (
    <section id="harezmi" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Hârezmî Kimdir?</h2>
            <div className="text-sm text-muted-foreground mb-4">
              <span className="font-semibold">Doğum:</span> Harezm, 780 |{" "}
              <span className="font-semibold">Ölüm tarihi ve yeri:</span> Bağdat, Irak, 850
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border-2 border-primary/20 shadow-lg">
                <img src="/harezmi-portrait.jpg" alt="Hârezmî Portresi" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground text-pretty">
                Hârizmi ya da tam künyesiyle Ebû Ca'fer Muhammed bin Mûsâ el-Hârizmi, matematik, gök bilim, coğrafya ve
                algoritma alanlarında çalışmış Fars bilim insanı. Hârizmi 780 yılında Harezm bölgesinin Hive şehrinde
                dünyaya gelmiştir. 850 yılında Bağdat'ta ölmüştür.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-lg bg-accent/10 border border-accent/20">
            <blockquote className="text-center">
              <p className="text-lg md:text-xl italic text-balance">
                "Hârezmî'nin çalışmaları, modern matematiğin ve bilimin temellerini atmıştır. Onun mirası, bugün hala
                bilim dünyasında yankılanmaktadır."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
