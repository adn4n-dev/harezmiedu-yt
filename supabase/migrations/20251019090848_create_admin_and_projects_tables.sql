/*
  # Admin ve Projeler Tabloları Oluşturma

  ## Yeni Tablolar
  
  ### `admins` Tablosu
    - `id` (uuid, primary key) - Admin ID
    - `email` (text, unique, not null) - Admin email adresi
    - `full_name` (text, not null) - Admin adı soyadı
    - `created_at` (timestamptz) - Oluşturulma tarihi
  
  ### `projects` Tablosu
    - `id` (uuid, primary key) - Proje ID
    - `title` (text, not null) - Proje başlığı
    - `description` (text, not null) - Proje açıklaması
    - `date` (text, not null) - Proje tarihi (örn: "Eylül 2024")
    - `status` (text, not null) - Proje durumu (örn: "Tamamlandı", "Devam Ediyor")
    - `image_url` (text) - Proje görseli URL
    - `order_index` (integer, not null, default 0) - Sıralama için index
    - `created_at` (timestamptz) - Oluşturulma tarihi
    - `updated_at` (timestamptz) - Güncellenme tarihi

  ## Güvenlik
    - Her iki tablo için RLS aktif
    - Admins tablosu: Sadece kendi bilgilerini görebilir
    - Projects tablosu: Herkes okuyabilir, sadece adminler yazabilir

  ## Notlar
    - Adminler auth.users tablosunda saklanır
    - app_metadata içinde role: 'admin' bilgisi olacak
    - Projects herkes tarafından görüntülenebilir
*/

-- Admins tablosunu oluştur
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Projects tablosunu oluştur
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date text NOT NULL,
  status text NOT NULL DEFAULT 'Devam Ediyor',
  image_url text,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- RLS'i aktif et
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Admins tablosu için politikalar
CREATE POLICY "Admins can read own data"
  ON admins FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admins can update own data"
  ON admins FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Projects tablosu için politikalar
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only admins can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admins WHERE admins.id = auth.uid()
    )
  );

CREATE POLICY "Only admins can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins WHERE admins.id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admins WHERE admins.id = auth.uid()
    )
  );

CREATE POLICY "Only admins can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins WHERE admins.id = auth.uid()
    )
  );

-- Updated_at trigger fonksiyonu
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Projects tablosu için trigger
CREATE TRIGGER update_projects_updated_at 
  BEFORE UPDATE ON projects 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();