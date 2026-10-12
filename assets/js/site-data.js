/*
 * DATA SITUS: file utama yang Anda edit untuk mengganti isi portofolio.
 *
 *  1. PROFIL : nama, lokasi, email
 *  2. SOSMED : tautan sosial media (muncul di hero, halaman Tentang, Kontak, dan footer)
 *  3. PROYEK : daftar proyek. Seluruh kartu proyek langsung membuka alamat di field "url"
 *
 * ===== YANG WAJIB ANDA GANTI =====
 *  - Semua "url" di SOSMED (sekarang masih alamat umum, misal https://github.com/)
 *    Ganti dengan alamat profil Anda, misal https://github.com/yuta
 *  - "handle" di SOSMED (tulisan yang tampil di kartu kontak)
 *  - Semua "url" di PROYEK (sekarang https://example.com sebagai contoh)
 */

const PROFIL = {
  nama: 'Yuta',
  lokasi: 'Singaraja, Bali, Indonesia',
  email: 'emailkamu@example.com', // GANTI
};

// Ikon: path SVG dari Simple Icons (CC0). Untuk menambah platform, salin satu blok dan ganti isinya.
const SOSMED = [
  { nama: "Instagram", handle: "@yuthaantus", url: "https://www.instagram.com/yuthaantus?xtok=MXdrbnU1NGptbHp2eg==",
    ikon: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" },
  { nama: "GitHub", handle: "github.com/ yutafoto174-cloud", url: "https://github.com/yutafoto174-cloud",
    ikon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
  { nama: "Blogspot", handle: "ruciramarcapada.blogspot.com", url: "https://ruciramarcapda.blogspot.com/",
    ikon: "M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z" },
  { nama: "X", handle: "@tayus0805", url: "https://x.com/",
    ikon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
  { nama: "LinkedIn", handle: "linkedin.com/in/Kristina Yutasia Antus", url: "https://www.linkedin.com/in/kristina-yutasia-antus-55bb15432",
    ikon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { nama: "WhatsApp", handle: "+62 851 1945 9700", url: "https://wa.me/",
    ikon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" },
  { nama: "Email", handle: "yutafoto174@gmail.com", url: "mailto:yutafoto174@gmail.com",
    ikon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }
];

/*
 * Field PROYEK:
 *   id        nama unik tanpa spasi (juga nama gambar cadangan assets/img/projects/<id>.svg)
 *   judul     judul proyek
 *   kategori  label kecil di atas judul
 *   deskripsi 1 sampai 2 kalimat
 *   tags      teknologi yang dipakai
 *   gambar    file tangkapan layar di assets/img/projects/ (bila belum ada, tampil gambar abu-abu)
 *   url       ALAMAT WEBSITE proyek. Klik kartu langsung menuju ke sini. Kosongkan ('') bila belum ada
 *   aksi      tulisan tombol
 * Tiga proyek pertama tampil di Beranda, semuanya tampil di halaman Proyek.
 */
const PROYEK = [
  
  {
    id: 'siar',
    judul: 'SIAR Undiksha',
    kategori: 'Sistem Informasi',
    deskripsi: 'Sistem informasi asrama dengan login berbasis peran, dirancang lewat riset Design Thinking dan usability testing.',
    tags: ['HTML', 'PHP', 'MySQL'],
    gambar: 'assets/img/projects/siar.jpg',
    url: 'file:///C:/Users/kreogkierg/Downloads/asrama_2-2_2.html', // GANTI dengan link website
    aksi: 'Kunjungi Website',
  },
  {
    id: 'galeym-terop',
    judul: 'Galeym Terop',
    kategori: 'Web Development',
    deskripsi: 'Website usaha penyewaan tenda di Cancar, Flores dengan tampilan gelap yang elegan.',
    tags: ['Python', 'Streamlit'],
    gambar: 'assets/img/projects/galeym-terop.jpg',
    url: 'https://galeymterop1-z67fkmmuzjknpestswkvfu.streamlit.app/', // GANTI dengan link website
    aksi: 'Kunjungi Website',
  },
  {
    id: 'portofolio-kreatif',
    judul: 'Portofolio Fotografi & Desain',
    kategori: 'Web Development',
    deskripsi: 'Website portofolio fotografi dan desain grafis bergaya Neo-Brutalism, dipublikasikan lewat GitHub Pages.',
    tags: ['fotografi', 'videografi', 'design'],
    gambar: 'assets/img/projects/portofolio-kreatif.jpg',
    url: 'https://l.instagram.com/?u=https%3A%2F%2Fyutafoto174-cloud.github.io%2Fportofolio-yuta%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAae5zMvMiwdeE76yEw9I_-MCW_zPoxYY0iZoygIEsyW80YXE9e9jJlfWuhMvGg_aem_2ISRaW2eU8iMIrKJLqkApQ&e=AUDLATLHUI1iZ8O9bhkbuKVxuh27VYaK5ZXyqSZq8SlJohc5TE317m5Ceg85ZofukFhoB5VKfPKU5mZpPL_1h_uglgulO22ErfAlN1Zo5EGGTVl5EW3YZSEsjBFWDqITkHxNgtw', // GANTI dengan link website
    aksi: 'Kunjungi Website',
  },
  {
    id: 'kossinga',
    judul: 'KosSinga',
    kategori: 'Dashboard',
    deskripsi: 'Dasbor pencarian kos di singarja, Bali, Lengkap dengan filter, peta, dan detail kos. Dibuat dengan react.js dan Tailwind CSS.',
    tags: ['HTML', 'JavaScript'],
    gambar: 'assets/img/projects/kossinga.jpg',
    url: 'https://yutafoto174-cloud.github.io/project-react-tek-web/', // GANTI dengan link website
    aksi: 'Kunjungi Website',
  },
  {
    id: 'ecoguard',
    judul: 'EcoGuard',
    kategori: 'Dashboard',
    deskripsi: 'Dasbor pemantauan emisi industri minyak, gas, dan penangkapan karbon lengkap dengan simulasi kondisi darurat.',
    tags: ['HTML', 'JavaScript'],
    gambar: 'assets/img/projects/ecoguard.jpg',
    url: 'https://example.com', // GANTI dengan link website
    aksi: 'Kunjungi Website',
  },
  {
    id: 'edutech',
    judul: 'EduTech Tryout',
    kategori: 'Web Application',
    deskripsi: 'Platform tryout online: spesifikasi kebutuhan (SRS) dan kerangka aplikasi Laravel.',
    tags: ['Laravel', 'PHP'],
    gambar: 'assets/img/projects/edutech.jpg',
    url: 'file:///C:/Users/kreogkierg/Downloads/edutech_landing_page.html', // GANTI dengan link website
    aksi: 'Kunjungi Website',
  },
];
