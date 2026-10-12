// Tugas JavaScript: Sistem pencatatan pemesanan web (data contoh).
// Konsep: state berupa array of object, render ulang dari state, event delegation,
// validasi form, localStorage, dan ekspor CSV.

const KUNCI = 'portofolio-yuta:pesanan';
const HARGA = { Basic: 1500000, Standar: 3500000, Premium: 7500000 }; // harga contoh
const STATUS = ['Baru', 'Dikerjakan', 'Selesai'];

// ---------- STATE ----------
let pesanan = muat();       // [{ id, nama, kontak, jenis, paket, harga, deadline, catatan, status }]
let filterStatus = 'semua'; // 'semua' | 'Baru' | 'Dikerjakan' | 'Selesai'
let kataCari = '';

// ---------- ELEMEN ----------
const $ = (id) => document.getElementById(id);
const form = $('form-pesanan');
const daftar = $('daftar-pesanan');
const kosong = $('kosong');
const pesanError = $('pesan-error');
const tombolFilter = document.querySelectorAll('.filter-btn');

// ---------- UTILITAS ----------
const rupiah = (n) => 'Rp ' + new Intl.NumberFormat('id-ID').format(n);

function tanggal(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function hariIni() {
  const d = new Date();
  const p = (x) => String(x).padStart(2, '0');
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
}

function terlambat(p) {
  return p.status !== 'Selesai' && p.deadline < hariIni();
}

// ---------- PENYIMPANAN ----------
function muat() {
  try {
    const data = JSON.parse(localStorage.getItem(KUNCI));
    if (Array.isArray(data)) return data;
  } catch (e) { /* data rusak atau storage terblokir */ }
  return [
    { id: 1, nama: 'Ayu Lestari', kontak: '081234560001', jenis: 'Toko Online', paket: 'Premium', harga: HARGA.Premium, deadline: '2026-11-20', catatan: 'Butuh integrasi pembayaran.', status: 'Dikerjakan' },
    { id: 2, nama: 'Made Wirawan', kontak: 'made@contoh.com', jenis: 'Company Profile', paket: 'Standar', harga: HARGA.Standar, deadline: '2026-10-30', catatan: 'Tema hijau, 5 halaman.', status: 'Baru' },
    { id: 3, nama: 'Rina Kusuma', kontak: '081234560003', jenis: 'Landing Page', paket: 'Basic', harga: HARGA.Basic, deadline: '2026-10-05', catatan: 'Promo akhir tahun.', status: 'Selesai' },
    { id: 4, nama: 'Doni Pratama', kontak: 'doni@contoh.com', jenis: 'Portofolio', paket: 'Basic', harga: HARGA.Basic, deadline: '2026-12-01', catatan: '', status: 'Baru' },
  ];
}

function simpan() {
  try { localStorage.setItem(KUNCI, JSON.stringify(pesanan)); } catch (e) { /* storage tidak tersedia */ }
}

// ---------- RENDER ----------
function tersaring() {
  const q = kataCari.toLowerCase();
  return pesanan
    .filter((p) => filterStatus === 'semua' || p.status === filterStatus)
    .filter((p) => !q || (p.nama + ' ' + p.jenis + ' ' + p.kontak).toLowerCase().includes(q));
}

// Status dibedakan lewat gaya (garis, abu-abu, hitam), bukan warna
const WARNA_STATUS = {
  Baru: 'bg-card text-fg ring-fg/30',
  Dikerjakan: 'bg-surface text-fg ring-fg/60',
  Selesai: 'bg-inv text-invfg ring-inv',
};

function el(tag, kelas, teks) {
  const e = document.createElement(tag);
  if (kelas) e.className = kelas;
  if (teks !== undefined) e.textContent = teks;
  return e;
}

function buatBaris(p) {
  const row = el('article', 'grid items-center gap-3 rounded-xl border border-line bg-card p-4 transition hover:border-fg/40 md:grid-cols-[1.6fr_1.3fr_1.2fr_9rem_auto] md:gap-4');
  row.dataset.id = p.id;

  const kol1 = el('div');
  kol1.append(el('p', 'font-semibold text-fg', p.nama), el('p', 'break-all text-sm text-muted', p.kontak));
  if (p.catatan) kol1.append(el('p', 'mt-1 text-xs text-muted', p.catatan));

  const kol2 = el('div');
  kol2.append(el('p', 'text-sm font-medium text-fg', p.jenis), el('p', 'text-sm text-muted', 'Paket ' + p.paket));

  const kol3 = el('div');
  kol3.append(el('p', 'text-sm font-semibold text-fg', rupiah(p.harga)));
  const dl = el('p', 'text-xs ' + (terlambat(p) ? 'font-semibold text-fg underline decoration-dotted underline-offset-2' : 'text-muted'), 'Tenggat ' + tanggal(p.deadline) + (terlambat(p) ? ' (terlambat)' : ''));
  kol3.append(dl);

  const pilih = el('select', 'w-full rounded-full px-3 py-1.5 text-sm font-medium ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-fg/60 ' + WARNA_STATUS[p.status]);
  pilih.dataset.aksi = 'status';
  pilih.setAttribute('aria-label', 'Status pesanan ' + p.nama);
  STATUS.forEach((s) => {
    const o = el('option', 'bg-card text-fg', s);
    o.value = s;
    o.selected = s === p.status;
    pilih.append(o);
  });

  const hapus = el('button', 'justify-self-start rounded-lg px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-surface hover:text-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-fg/60 md:justify-self-end', 'Hapus');
  hapus.type = 'button';
  hapus.dataset.aksi = 'hapus';

  row.append(kol1, kol2, kol3, pilih, hapus);
  return row;
}

function render() {
  const tampil = tersaring();
  daftar.replaceChildren(...tampil.map(buatBaris));

  if (tampil.length === 0) {
    kosong.classList.remove('hidden');
    kosong.textContent = pesanan.length === 0
      ? 'Belum ada pesanan. Tambahkan pesanan pertama lewat formulir.'
      : 'Tidak ada pesanan yang cocok dengan pencarian atau filter.';
  } else {
    kosong.classList.add('hidden');
  }

  // Ringkasan
  const hitung = (s) => pesanan.filter((p) => p.status === s).length;
  $('stat-total').textContent = pesanan.length;
  $('stat-baru').textContent = hitung('Baru');
  $('stat-kerja').textContent = hitung('Dikerjakan');
  $('stat-selesai').textContent = hitung('Selesai');
  $('stat-nilai').textContent = rupiah(pesanan.reduce((jml, p) => jml + p.harga, 0));
  $('stat-pendapatan').textContent = rupiah(pesanan.filter((p) => p.status === 'Selesai').reduce((jml, p) => jml + p.harga, 0));

  // Tombol filter
  tombolFilter.forEach((b) => {
    const aktif = b.dataset.filter === filterStatus;
    b.classList.toggle('bg-inv', aktif);
    b.classList.toggle('text-invfg', aktif);
    b.classList.toggle('bg-surface', !aktif);
    b.classList.toggle('text-fg', !aktif);
    b.setAttribute('aria-pressed', String(aktif));
  });
}

function tampilkanError(teks) {
  pesanError.textContent = teks;
  pesanError.classList.toggle('hidden', !teks);
}

function perbaruiEstimasi() {
  $('estimasi').textContent = rupiah(HARGA[$('f-paket').value] || 0);
}

// ---------- EVENT ----------
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = $('f-nama').value.trim();
  const kontak = $('f-kontak').value.trim();
  const jenis = $('f-jenis').value;
  const paket = $('f-paket').value;
  const deadline = $('f-deadline').value;
  const catatan = $('f-catatan').value.trim();

  if (!nama) return tampilkanError('Nama pemesan wajib diisi.');
  const email = /^\S+@\S+\.\S+$/.test(kontak);
  const telepon = /^[0-9+\-\s]{9,16}$/.test(kontak);
  if (!email && !telepon) return tampilkanError('Isi kontak dengan email atau nomor WhatsApp yang valid.');
  if (!deadline) return tampilkanError('Pilih tanggal tenggat.');
  if (deadline < hariIni()) return tampilkanError('Tenggat tidak boleh sebelum hari ini.');

  tampilkanError('');
  pesanan.unshift({ id: Date.now(), nama, kontak, jenis, paket, harga: HARGA[paket], deadline, catatan, status: 'Baru' });
  form.reset();
  perbaruiEstimasi();
  simpan();
  render();
});

// Event delegation: satu listener untuk semua select status dan tombol hapus
daftar.addEventListener('change', (e) => {
  if (e.target.dataset.aksi !== 'status') return;
  const id = Number(e.target.closest('article').dataset.id);
  pesanan = pesanan.map((p) => (p.id === id ? { ...p, status: e.target.value } : p));
  simpan();
  render();
});

daftar.addEventListener('click', (e) => {
  const tombol = e.target.closest('[data-aksi="hapus"]');
  if (!tombol) return;
  const id = Number(tombol.closest('article').dataset.id);
  const p = pesanan.find((x) => x.id === id);
  if (!window.confirm('Hapus pesanan atas nama ' + p.nama + '?')) return;
  pesanan = pesanan.filter((x) => x.id !== id);
  simpan();
  render();
});

$('f-paket').addEventListener('change', perbaruiEstimasi);
$('cari').addEventListener('input', (e) => { kataCari = e.target.value; render(); });
tombolFilter.forEach((b) => b.addEventListener('click', () => { filterStatus = b.dataset.filter; render(); }));

$('unduh-csv').addEventListener('click', () => {
  const kolom = ['Nama', 'Kontak', 'Jenis Web', 'Paket', 'Harga', 'Tenggat', 'Status', 'Catatan'];
  const esc = (v) => '"' + String(v).replace(/"/g, '""') + '"';
  const baris = pesanan.map((p) => [p.nama, p.kontak, p.jenis, p.paket, p.harga, p.deadline, p.status, p.catatan].map(esc).join(','));
  const isi = '﻿' + [kolom.map(esc).join(','), ...baris].join('\n');
  const url = URL.createObjectURL(new Blob([isi], { type: 'text/csv;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data-pemesanan-web.csv';
  a.click();
  URL.revokeObjectURL(url);
});

// ---------- MULAI ----------
$('f-deadline').min = hariIni();
perbaruiEstimasi();
render();
