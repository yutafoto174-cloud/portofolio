# Portofolio Yuta

Portofolio pribadi responsif dengan Tailwind CSS, tema hitam-putih, dan tombol mode gelap/terang.

Halaman: **Beranda**, **Tentang**, **Proyek**, **Tugas JavaScript** (Data Pemesanan Web).

## Menjalankan

1. Ekstrak folder, lalu buka `index.html` di browser. Butuh internet untuk memuat Tailwind (CDN) dan font Inter.
2. Disarankan memakai ekstensi **Live Server** di VS Code agar halaman memuat ulang otomatis.

## Struktur file

```
portofolio-yuta/
├── index.html        Beranda: hero + foto, tulisan (Blogspot), proyek pilihan, kontak
├── about.html        Tentang: foto, cerita, keahlian, perjalanan akademik
├── projects.html     Semua proyek
├── tugas-js.html     Tugas JavaScript: Data Pemesanan Web
└── assets/
    ├── css/custom.css            Warna hitam-putih (terang dan gelap) + efek kecil
    ├── img/
    │   ├── foto-yuta.jpg         <- FOTO ANDA (Anda yang menaruh)
    │   ├── foto-yuta-placeholder.svg
    │   └── projects/             <- GAMBAR PROYEK (Anda yang menaruh), plus .svg cadangan
    └── js/
        ├── site-data.js          FILE UTAMA YANG ANDA EDIT: profil, sosial media, proyek
        ├── tailwind-tema.js      Token warna dan font Tailwind
        ├── main.js               Mode gelap/terang, menu, ikon sosial, kartu proyek
        └── pesanan.js            Logika Data Pemesanan Web
```

## Wajib diganti di `assets/js/site-data.js`

1. **SOSMED**: ganti `url` tiap platform dengan profil Anda, misalnya `https://github.com/yuta`, dan ganti `handle` (teks yang tampil). Sekarang `url` masih alamat umum seperti `https://github.com/`.
2. **PROFIL.email** dan alamat `mailto:` pada Email di SOSMED.
3. **PROYEK**: ganti `url` tiap proyek dengan alamat websitenya (sekarang `https://example.com`). Seluruh kartu langsung membuka alamat ini di tab baru. Kosongkan (`''`) bila belum ada website, kartunya tampil "Segera hadir".
4. Periksa `deskripsi`, `kategori`, dan `tags` tiap proyek agar sesuai.

Menambah platform sosial media: salin satu blok di SOSMED. Ikon diambil dari Simple Icons (https://simpleicons.org), pakai nilai `d` dari path SVG-nya.

## Upload foto

1. Foto potret (rasio sekitar 4:5, misalnya 1000 x 1250 px), JPG, di bawah 500 KB.
2. Beri nama persis `foto-yuta.jpg`.
3. Taruh di `assets/img/`.
4. Tekan Ctrl + F5. Foto tampil di Beranda dan Tentang. Sebelum diunggah, tampil gambar abu-abu cadangan.

## Upload gambar proyek

1. Tangkapan layar tiap proyek (rasio sekitar 16:10, misalnya 1280 x 800 px), di bawah 300 KB.
2. Taruh di `assets/img/projects/` dengan nama sesuai field `gambar` di `site-data.js`:

| Proyek | Nama file |
|---|---|
| Data Pemesanan Web | `pemesanan-web.jpg` |
| SIAR Undiksha | `siar.jpg` |
| Galeym Terop | `galeym-terop.jpg` |
| Portofolio Fotografi & Desain | `portofolio-kreatif.jpg` |
| EcoGuard | `ecoguard.jpg` |
| EduTech Tryout | `edutech.jpg` |

3. Tekan Ctrl + F5. Jika memakai PNG, ubah akhiran `.jpg` pada field `gambar`.

Foto dan gambar proyek tampil hitam-putih dan berwarna saat kursor di atasnya. Untuk selalu berwarna, cari kata `grayscale` di `assets/js/main.js` (gambar proyek) serta `index.html` dan `about.html` (foto), lalu hapus kelas `grayscale`, `group-hover:grayscale-0`, dan `hover:grayscale-0`.

## Mode gelap dan terang

Tombol bulan/matahari di navbar. Pilihan tersimpan di browser dan berlaku di semua halaman. Bila belum memilih, mengikuti pengaturan perangkat.

Warna dikelola lewat token di `assets/css/custom.css` (`--c-page`, `--c-fg`, dst.), jadi mengubah palet cukup di satu tempat.

## Tugas JavaScript: Data Pemesanan Web

Fitur: tambah pesanan dengan validasi (nama, email atau WhatsApp, tenggat tidak boleh sebelum hari ini), estimasi harga per paket, ubah status (Baru, Dikerjakan, Selesai), cari, saring status, ringkasan jumlah dan nilai, hapus, simpan otomatis di localStorage, dan unduh CSV. Data awal adalah contoh. Harga paket ada di konstanta `HARGA` pada `pesanan.js`.

## Mengunggah ke internet

- **Vercel**: unggah folder ke repositori GitHub, impor di vercel.com sebagai proyek statis tanpa build.
- **GitHub Pages**: push ke repositori lalu aktifkan Pages di pengaturan repositori.

## Catatan

Tailwind Play CDN praktis untuk belajar dan tugas. Untuk situs produksi, gunakan Tailwind CLI agar CSS lebih kecil.
