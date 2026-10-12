/*
 * Tema hitam-putih (Tailwind Play CDN). Muat SETELAH <script src="https://cdn.tailwindcss.com"></script>.
 *
 * Warna tidak ditulis langsung, tetapi lewat "token" yang nilainya berubah otomatis
 * saat mode gelap aktif (nilainya ada di assets/css/custom.css):
 *   page    latar halaman         surface  latar area kedua / hover
 *   card    latar kartu           fg       teks utama
 *   muted   teks sekunder         line     garis dan border
 *   inv     latar tombol utama    invfg    teks di atas inv
 * Contoh pemakaian: bg-page text-fg border-line bg-inv text-invfg
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: 'rgb(var(--c-page) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        inv: 'rgb(var(--c-inv) / <alpha-value>)',
        invfg: 'rgb(var(--c-invfg) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
