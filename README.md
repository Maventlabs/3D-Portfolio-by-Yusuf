# Yusuf's Portfolio - 3D Creator & Designer

Website portofolio interaktif, modern, dan memukau yang dirancang khusus untuk memamerkan karya kreatif 3D, branding, dan desain web.

---

## 🛡️ Badges

Di bawah ini adalah beberapa teknologi utama yang digunakan untuk membangun proyek ini:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=FF69B4)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

---

## 🌟 Tentang Proyek

Proyek ini adalah website portofolio interaktif milik **Yusuf**, seorang **3D Creator** yang berfokus pada penciptaan karya visual yang mencolok dan tak terlupakan. Website ini menggabungkan performa kilat dari **Vite & React** dengan keindahan animasi transisi serta kontrol interaktif yang canggih menggunakan **Framer Motion**.

---

## 🚀 Fitur Utama

- **Hero Section:** Dilengkapi dengan judul besar yang dinamis, animasi masuk yang halus, serta efek *magnetic interaction* (menggunakan magnetik kustom) pada potret 3D Yusuf.
- **Marquee Section:** Running text (teks berjalan) estetik yang memberikan nuansa modern dan hidup pada website.
- **About Me Section:** Deskripsi profesional Yusuf, dilengkapi dengan elemen dekoratif 3D mengambang di sekeliling halaman yang interaktif.
- **Services (Layanan):** Menyajikan penawaran layanan unggulan secara rapi dengan desain minimalis:
  - **3D Modeling** (Pembuatan objek/karakter kustom)
  - **Rendering** (Visualisasi fotorealistik dengan pencahayaan dinamis)
  - **Motion Design** (Animasi grafis dinamis untuk produk & brand)
  - **Branding** (Sistem identitas visual yang kohesif)
  - **Web Design** (Desain web modern berfokus pada UX)
- **Projects Section (Stack Cards):** Galeri proyek interaktif dengan teknik *card stacking* (kartu yang bertumpuk saat digulir) yang responsif dan sangat mulus memanfaatkan kekuatan Scroll Scroll Timeline dari Framer Motion.

---

## 🛠️ Struktur Folder Proyek

```bash
E:\Random\project
├── src/
│   ├── components/            # Komponen UI modular
│   │   ├── AboutSection.tsx   # Bagian "Tentang Saya"
│   │   ├── AnimatedText.tsx   # Animasi teks interaktif per baris/karakter
│   │   ├── ContactButton.tsx  # Tombol kontak interaktif
│   │   ├── FadeIn.tsx         # Pembungkus animasi masuk (fade in)
│   │   ├── HeroSection.tsx    # Bagian utama di atas lipatan (hero)
│   │   ├── LiveProjectButton.tsx
│   │   ├── Magnet.tsx         # Utilitas efek magnetik kustom
│   │   ├── MarqueeSection.tsx # Teks berjalan estetik
│   │   ├── ProjectsSection.tsx# Galeri proyek dengan kartu menumpuk (stack)
│   │   └── ServicesSection.tsx# Daftar layanan dengan transisi halus
│   ├── index.css              # Styling global & Tailwind CSS
│   ├── main.tsx               # Titik masuk React (Entrypoint)
│   └── vite-env.d.ts          # Definisi tipe untuk Vite
├── index.html                 # Template HTML Utama
├── package.json               # Dependensi & skrip proyek
├── tailwind.config.js         # Konfigurasi Tailwind CSS
└── vite.config.ts             # Konfigurasi bundler Vite
```

---

## 🏁 Memulai (Getting Started)

Ikuti instruksi berikut untuk menjalankan salinan proyek ini di komputer lokal Anda untuk tujuan pengembangan dan pengujian.

### Prasyarat

Pastikan Anda telah menginstal **Node.js** (versi 18.x atau yang lebih baru) serta pengelola paket seperti **npm** (atau yarn / pnpm).

### Langkah Instalasi

1. **Klon Repositori:**
   ```bash
   git clone <URL-REPOSITORI-ANDA>
   cd <NAMA-DIREKTORI>
   ```

2. **Instal Dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi dalam Mode Pengembangan:**
   ```bash
   npm run dev
   ```
   Buka peramban (browser) Anda dan akses `http://localhost:5173`.

4. **Build untuk Produksi:**
   ```bash
   npm run build
   ```
   Proses ini akan mengoptimalkan aset dan kode aplikasi, lalu meletakkannya di folder `/dist` untuk siap di-deploy ke hosting Anda.

---

## 📁 Skrip yang Tersedia

Di dalam direktori proyek, Anda dapat menjalankan skrip-skrip berikut:

- **`npm run dev`**: Menjalankan server pengembangan lokal.
- **`npm run build`**: Mengompilasi TypeScript dan mem-build aplikasi untuk produksi.
- **`npm run lint`**: Membantu memvalidasi kualitas kode Anda menggunakan ESLint.
- **`npm run preview`**: Memulai server lokal untuk melihat preview hasil build produksi.
- **`npm run typecheck`**: Menjalankan pemeriksa tipe TypeScript secara mandiri tanpa menghasilkan file output.

---

Dibuat dengan penuh dedikasi oleh Yusuf. 🚀
