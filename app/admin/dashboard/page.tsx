"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase, type Project } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogOut, Plus, Edit, Trash2, ArrowUp, ArrowDown } from "lucide-react"
import Image from "next/image"

export default function AdminDashboardPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [adminName, setAdminName] = useState("")
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    loadProjects()
  }, [])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push("/admin/login")
      return
    }

    const { data: admin } = await supabase
      .from("admins")
      .select("*")
      .eq("id", user.id)
      .maybeSingle()

    if (!admin) {
      await supabase.auth.signOut()
      router.push("/admin/login")
      return
    }

    setAdminName(admin.full_name)
  }

  const loadProjects = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("order_index", { ascending: true })

    if (error) {
      console.error("Error loading projects:", error)
    } else {
      setProjects(data || [])
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Bu projeyi silmek istediğinizden emin misiniz?")) return

    const { error } = await supabase.from("projects").delete().eq("id", id)

    if (error) {
      alert("Proje silinirken hata oluştu: " + error.message)
    } else {
      loadProjects()
    }
  }

  const handleMoveUp = async (project: Project, index: number) => {
    if (index === 0) return

    const prevProject = projects[index - 1]

    await supabase
      .from("projects")
      .update({ order_index: prevProject.order_index })
      .eq("id", project.id)

    await supabase
      .from("projects")
      .update({ order_index: project.order_index })
      .eq("id", prevProject.id)

    loadProjects()
  }

  const handleMoveDown = async (project: Project, index: number) => {
    if (index === projects.length - 1) return

    const nextProject = projects[index + 1]

    await supabase
      .from("projects")
      .update({ order_index: nextProject.order_index })
      .eq("id", project.id)

    await supabase
      .from("projects")
      .update({ order_index: project.order_index })
      .eq("id", nextProject.id)

    loadProjects()
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/nfk-harezmi-logo.png"
                alt="NFK Harezmi Logo"
                width={120}
                height={60}
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold">Yönetici Paneli</h1>
                <p className="text-sm text-muted-foreground">Hoş geldin, {adminName}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Çıkış Yap
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Projeler</h2>
          <Button onClick={() => router.push("/admin/dashboard/new")}>
            <Plus className="h-4 w-4 mr-2" />
            Yeni Proje Ekle
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Yükleniyor...</p>
          </div>
        ) : projects.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground mb-4">Henüz proje eklenmemiş</p>
            <Button onClick={() => router.push("/admin/dashboard/new")}>
              <Plus className="h-4 w-4 mr-2" />
              İlk Projeyi Ekle
            </Button>
          </Card>
        ) : (
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card key={project.id} className="p-6">
                <div className="flex gap-6">
                  {project.image_url && (
                    <div className="relative w-40 h-40 flex-shrink-0">
                      <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{project.date}</Badge>
                          <Badge>{project.status}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleMoveUp(project, index)}
                          disabled={index === 0}
                        >
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleMoveDown(project, index)}
                          disabled={index === projects.length - 1}
                        >
                          <ArrowDown className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => router.push(`/admin/dashboard/edit/${project.id}`)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleDelete(project.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
