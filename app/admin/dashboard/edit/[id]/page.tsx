"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { supabase, type Project } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function EditProjectPage() {
  const [project, setProject] = useState<Project | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [status, setStatus] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  useEffect(() => {
    loadProject()
  }, [id])

  const loadProject = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .maybeSingle()

    if (error) {
      setError("Proje yüklenirken hata oluştu")
      setLoading(false)
      return
    }

    if (!data) {
      setError("Proje bulunamadı")
      setLoading(false)
      return
    }

    setProject(data)
    setTitle(data.title)
    setDescription(data.description)
    setDate(data.date)
    setStatus(data.status)
    setImageUrl(data.image_url || "")
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError("")

    try {
      const { error: updateError } = await supabase
        .from("projects")
        .update({
          title,
          description,
          date,
          status,
          image_url: imageUrl || null,
        })
        .eq("id", id)

      if (updateError) throw updateError

      router.push("/admin/dashboard")
    } catch (err: any) {
      setError(err.message || "Proje güncellenirken bir hata oluştu")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Yükleniyor...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.push("/admin/dashboard")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-4">
              <Image
                src="/nfk-harezmi-logo.png"
                alt="NFK Harezmi Logo"
                width={120}
                height={60}
                className="h-10 w-auto"
              />
              <h1 className="text-xl font-bold">Projeyi Düzenle</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Proje Başlığı *
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Örn: Müdürler Toplantısı"
                required
                disabled={saving}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Açıklama *
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all min-h-[120px]"
                placeholder="Proje hakkında detaylı açıklama..."
                required
                disabled={saving}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                Tarih *
              </label>
              <input
                id="date"
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Örn: Eylül 2024"
                required
                disabled={saving}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="status" className="text-sm font-medium">
                Durum *
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                required
                disabled={saving}
              >
                <option value="Devam Ediyor">Devam Ediyor</option>
                <option value="Tamamlandı">Tamamlandı</option>
                <option value="Planlanıyor">Planlanıyor</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="imageUrl" className="text-sm font-medium">
                Görsel URL
              </label>
              <input
                id="imageUrl"
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="https://example.com/image.jpg"
                disabled={saving}
              />
              <p className="text-xs text-muted-foreground">
                Görsel URL'si girebilir veya /public klasöründeki bir görseli kullanabilirsiniz (örn: /meeting.jpg)
              </p>
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/dashboard")}
                disabled={saving}
                className="flex-1"
              >
                İptal
              </Button>
              <Button type="submit" disabled={saving} className="flex-1">
                {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
