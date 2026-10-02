# Weather App

Aplikasi web sederhana untuk mencari dan menampilkan informasi cuaca terkini berdasarkan nama kota. Antarmuka tersedia dalam bahasa Indonesia, sementara label cuaca dan satuannya ditampilkan sesuai implementasi aplikasi.

## Fitur

- Mencari kota dan mengambil koordinatnya.
- Menampilkan temperatur, feels like, kelembapan, kecepatan angin, dan kondisi cuaca.
- Menampilkan ikon yang sesuai dengan kode kondisi cuaca.
- Menampilkan status loading dan pesan error.
- Menggunakan Open-Meteo tanpa API key.

## Teknologi

- HTML
- CSS
- JavaScript dengan ES modules dan `async`/`await`
- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- [Open-Meteo Weather Forecast API](https://open-meteo.com/en/docs)

## Menjalankan aplikasi

Karena aplikasi menggunakan JavaScript ES modules dan mengambil data dari API, jalankan melalui server lokal, bukan dengan membuka `index.html` langsung sebagai file.

### Visual Studio Code

1. Buka folder proyek di Visual Studio Code.
2. Pasang ekstensi **Live Server**, jika belum tersedia.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.
4. Masukkan nama kota dan tekan **Cari**.

### Python

Jika Python tersedia, buka terminal di folder proyek lalu jalankan:

```bash
python -m http.server 8000
```

Buka [http://localhost:8000](http://localhost:8000) di browser.

## Struktur proyek

```text
.
├── index.html
├── css/
│   └── style.css
└── js/
    ├── api.js
    ├── config.js
    ├── main.js
    ├── ui.js
    └── weatherCode.js
```

## Alur aplikasi

1. `main.js` membaca nama kota dari formulir.
2. `api.js` menggunakan Geocoding API untuk mencari koordinat kota.
3. Koordinat tersebut digunakan untuk meminta cuaca terkini dari Weather Forecast API.
4. `weatherCode.js` menerjemahkan kode cuaca menjadi deskripsi dan ikon.
5. `ui.js` menampilkan hasilnya pada halaman.

## Catatan

- Koneksi internet diperlukan untuk mengambil data cuaca.
- Data cuaca disediakan oleh Open-Meteo. Ketersediaan dan kelengkapan hasil pencarian kota bergantung pada respons API.
