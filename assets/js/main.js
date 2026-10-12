// Skrip bersama semua halaman: mode gelap/terang, menu mobile, tautan sosial media,
// kartu proyek (dari site-data.js), tahun footer, dan efek muncul saat scroll.

const IKON_PANAH =
  '<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const eksternal = (url) => /^https?:\/\//i.test(url);
const atributLink = (url) => (eksternal(url) ? ' target="_blank" rel="noopener noreferrer"' : '');

function svgIkon(path, kelas) {
  return '<svg class="' + kelas + '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + path + '"/></svg>';
}

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Mode gelap / terang ----------
  const root = document.documentElement;
  const tombolTema = document.getElementById('tema-toggle');
  const sinkronTema = () => tombolTema && tombolTema.setAttribute('aria-pressed', String(root.classList.contains('dark')));
  sinkronTema();
  if (tombolTema) {
    tombolTema.addEventListener('click', () => {
      root.classList.toggle('dark');
      try { localStorage.setItem('tema', root.classList.contains('dark') ? 'dark' : 'light'); } catch (e) { /* storage terblokir */ }
      sinkronTema();
    });
  }

  // ---------- Menu mobile ----------
  const tombol = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu-mobile');
  if (tombol && menu) {
    tombol.addEventListener('click', () => {
      const terbuka = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      tombol.setAttribute('aria-expanded', String(!terbuka));
    });
  }

  // ---------- Tahun footer ----------
  const tahun = document.getElementById('tahun');
  if (tahun) tahun.textContent = new Date().getFullYear();

  if (typeof SOSMED !== 'undefined') {
    // Baris ikon bulat (hero, halaman Tentang)
    document.querySelectorAll('[data-sosmed="ikon"]').forEach((w) => {
      w.innerHTML = SOSMED.map((s) =>
        '<a href="' + esc(s.url) + '"' + atributLink(s.url) + ' aria-label="' + esc(s.nama) + '" title="' + esc(s.nama) + '" class="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition hover:border-fg hover:bg-inv hover:text-invfg focus:outline-none focus-visible:ring-2 focus-visible:ring-fg/60">' +
        svgIkon(s.ikon, 'h-[18px] w-[18px]') + '</a>'
      ).join('');
    });

    // Kartu kontak besar (bagian Kontak)
    document.querySelectorAll('[data-sosmed="kartu"]').forEach((w) => {
      w.innerHTML = SOSMED.map((s) =>
        '<a href="' + esc(s.url) + '"' + atributLink(s.url) + ' class="group flex items-center gap-4 rounded-xl border border-line bg-card p-4 transition hover:border-fg/50 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-fg/60">' +
          '<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface text-fg transition group-hover:bg-inv group-hover:text-invfg">' + svgIkon(s.ikon, 'h-5 w-5') + '</span>' +
          '<span class="min-w-0 flex-1"><span class="block font-medium text-fg">' + esc(s.nama) + '</span><span class="block truncate text-sm text-muted">' + esc(s.handle) + '</span></span>' +
          '<span class="text-muted transition group-hover:text-fg">' + IKON_PANAH + '</span></a>'
      ).join('');
    });

    // Daftar teks (footer)
    document.querySelectorAll('[data-sosmed="daftar"]').forEach((w) => {
      w.innerHTML = SOSMED.map((s) =>
        '<li><a href="' + esc(s.url) + '"' + atributLink(s.url) + ' class="text-muted transition hover:text-fg">' + esc(s.nama) + '</a></li>'
      ).join('');
    });

    // Tombol atau tautan yang mengambil alamat dari data (misal Blogspot, Email)
    document.querySelectorAll('[data-link-sosmed]').forEach((a) => {
      const s = SOSMED.find((x) => x.nama === a.dataset.linkSosmed);
      if (!s) return;
      a.href = s.url;
      if (eksternal(s.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    });
  }

  // ---------- Kartu proyek: seluruh kartu adalah tautan ke website ----------
  const wadah = document.getElementById('daftar-proyek');
  if (wadah && typeof PROYEK !== 'undefined') {
    const batas = Number(wadah.dataset.batas) || PROYEK.length;
    wadah.innerHTML = PROYEK.slice(0, batas).map(kartuProyek).join('');
    wadah.querySelectorAll('img[data-cadangan]').forEach((img) => {
      img.addEventListener('error', () => {
        if (!img.src.endsWith(img.dataset.cadangan)) img.src = img.dataset.cadangan;
      });
    });
  }

  // ---------- Efek muncul saat scroll (gaya awal ada di custom.css) ----------
  const items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tampil');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    items.forEach((el) => observer.observe(el));
  } else {
    items.forEach((el) => el.classList.add('tampil'));
  }
});

function kartuProyek(p) {
  const tags = p.tags
    .map((t) => '<span class="rounded-md border border-line px-2.5 py-1 text-xs text-muted">' + esc(t) + '</span>')
    .join('');
  const aktif = Boolean(p.url);
  const buka = aktif ? '<a href="' + esc(p.url) + '"' + atributLink(p.url) + ' aria-label="' + esc(p.aksi + ': ' + p.judul) + '"' : '<div';
  const tutup = aktif ? '</a>' : '</div>';
  const aksi = aktif
    ? '<span class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg">' + esc(p.aksi) + ' <span class="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">' + IKON_PANAH + '</span></span>'
    : '<span class="mt-6 text-sm text-muted">Segera hadir</span>';
  return (
    buka + ' class="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition duration-300 hover:-translate-y-1 hover:border-fg/40 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-fg/60">' +
      '<div class="aspect-[16/10] overflow-hidden border-b border-line bg-surface">' +
        '<img src="' + esc(p.gambar) + '" alt="Tampilan proyek ' + esc(p.judul) + '" loading="lazy" data-cadangan="assets/img/projects/' + esc(p.id) + '.svg" class="h-full w-full object-cover transition duration-500 group-hover:scale-105 " />' +
      '</div>' +
      '<div class="flex flex-1 flex-col p-6">' +
        '<p class="text-xs font-medium uppercase tracking-wider text-muted">' + esc(p.kategori) + '</p>' +
        '<h3 class="mt-2 text-lg font-semibold leading-snug text-fg">' + esc(p.judul) + '</h3>' +
        '<p class="mt-2 flex-1 text-sm leading-relaxed text-muted">' + esc(p.deskripsi) + '</p>' +
        '<div class="mt-4 flex flex-wrap gap-2">' + tags + '</div>' +
        aksi +
      '</div>' +
    tutup
  );
}
