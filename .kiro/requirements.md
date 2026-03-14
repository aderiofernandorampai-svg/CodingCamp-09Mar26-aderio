# Requirements Document

## Introduction

Life Dashboard adalah aplikasi web satu halaman (single-page) yang membantu pengguna memantau dan mengelola berbagai aspek kehidupan sehari-hari — mulai dari tugas harian, kebiasaan, catatan, hingga kutipan motivasi. Aplikasi ini dibangun menggunakan HTML, CSS, dan Vanilla JavaScript murni, menyimpan semua data di browser melalui Local Storage, tanpa memerlukan server atau koneksi internet.

## Glossary

- **Dashboard**: Halaman utama yang menampilkan semua widget secara bersamaan.
- **Widget**: Komponen UI mandiri yang menampilkan satu kategori informasi (misalnya: Tugas, Kebiasaan, Catatan).
- **Task**: Item pekerjaan atau aktivitas yang perlu diselesaikan oleh pengguna.
- **Habit**: Kebiasaan harian yang ingin dilacak oleh pengguna (misalnya: olahraga, membaca).
- **Note**: Catatan teks bebas yang dibuat oleh pengguna.
- **Local_Storage**: Web API browser untuk menyimpan data secara persisten di sisi klien.
- **Dashboard_App**: Sistem keseluruhan aplikasi Life Dashboard.
- **Theme**: Tampilan visual aplikasi (terang/gelap).

---

## Requirements

### Requirement 1: Tampilan Dashboard Utama

**User Story:** Sebagai pengguna, saya ingin melihat semua informasi penting dalam satu halaman, agar saya dapat memantau kehidupan saya dengan cepat tanpa berpindah halaman.

#### Acceptance Criteria

1. THE Dashboard_App SHALL menampilkan semua widget dalam satu halaman tanpa navigasi antar halaman.
2. THE Dashboard_App SHALL menampilkan tanggal dan waktu saat ini secara real-time.
3. WHEN halaman pertama kali dimuat, THE Dashboard_App SHALL memuat semua data yang tersimpan dari Local_Storage dan menampilkannya di widget yang sesuai.
4. THE Dashboard_App SHALL merespons perubahan ukuran layar sehingga tampilan tetap dapat digunakan pada lebar layar minimal 320px hingga 1920px.

---

### Requirement 2: Manajemen Tugas (Task Manager)

**User Story:** Sebagai pengguna, saya ingin menambah, menyelesaikan, dan menghapus tugas harian, agar saya dapat melacak pekerjaan yang perlu diselesaikan.

#### Acceptance Criteria

1. WHEN pengguna memasukkan teks tugas dan menekan tombol tambah atau tombol Enter, THE Dashboard_App SHALL menambahkan tugas baru ke daftar tugas.
2. WHEN pengguna menandai sebuah tugas sebagai selesai, THE Dashboard_App SHALL menampilkan tugas tersebut dengan gaya visual yang berbeda (misalnya: teks dicoret).
3. WHEN pengguna menghapus sebuah tugas, THE Dashboard_App SHALL menghapus tugas tersebut dari daftar dan dari Local_Storage.
4. WHEN daftar tugas diperbarui, THE Dashboard_App SHALL menyimpan perubahan ke Local_Storage dalam waktu kurang dari 500ms.
5. IF pengguna mencoba menambahkan tugas dengan teks kosong, THEN THE Dashboard_App SHALL menolak penambahan dan tidak mengubah daftar tugas.
6. THE Dashboard_App SHALL menampilkan jumlah tugas yang belum selesai di header widget Tugas.

---

### Requirement 3: Pelacak Kebiasaan (Habit Tracker)

**User Story:** Sebagai pengguna, saya ingin melacak kebiasaan harian saya, agar saya dapat membangun rutinitas yang konsisten.

#### Acceptance Criteria

1. WHEN pengguna menambahkan kebiasaan baru, THE Dashboard_App SHALL menambahkan kebiasaan tersebut ke daftar pelacak kebiasaan.
2. WHEN pengguna menandai sebuah kebiasaan sebagai selesai untuk hari ini, THE Dashboard_App SHALL memperbarui status kebiasaan tersebut secara visual.
3. WHEN tanggal berubah ke hari berikutnya, THE Dashboard_App SHALL mereset status penyelesaian semua kebiasaan menjadi belum selesai.
4. WHEN pengguna menghapus sebuah kebiasaan, THE Dashboard_App SHALL menghapus kebiasaan tersebut beserta riwayatnya dari Local_Storage.
5. IF pengguna mencoba menambahkan kebiasaan dengan nama kosong, THEN THE Dashboard_App SHALL menolak penambahan tersebut.
6. THE Dashboard_App SHALL menampilkan persentase kebiasaan yang telah diselesaikan hari ini di header widget Kebiasaan.

---

### Requirement 4: Catatan Cepat (Quick Notes)

**User Story:** Sebagai pengguna, saya ingin menulis dan menyimpan catatan singkat, agar saya dapat mencatat ide atau pengingat penting dengan cepat.

#### Acceptance Criteria

1. WHEN pengguna mengetik di area catatan, THE Dashboard_App SHALL menyimpan konten catatan ke Local_Storage secara otomatis setelah pengguna berhenti mengetik selama 1 detik (debounce).
2. WHEN halaman dimuat ulang, THE Dashboard_App SHALL memuat kembali konten catatan terakhir dari Local_Storage.
3. THE Dashboard_App SHALL mendukung catatan dengan panjang hingga 5000 karakter.
4. IF konten catatan melebihi 5000 karakter, THEN THE Dashboard_App SHALL mencegah penambahan karakter lebih lanjut dan menampilkan pesan peringatan kepada pengguna.

---

### Requirement 5: Kutipan Motivasi (Motivational Quote)

**User Story:** Sebagai pengguna, saya ingin melihat kutipan motivasi setiap hari, agar saya mendapat inspirasi saat membuka dashboard.

#### Acceptance Criteria

1. WHEN halaman pertama kali dimuat pada hari tertentu, THE Dashboard_App SHALL menampilkan satu kutipan motivasi dari kumpulan kutipan yang tersimpan secara lokal.
2. THE Dashboard_App SHALL menyimpan minimal 10 kutipan motivasi secara statis di dalam kode aplikasi.
3. WHEN pengguna mengklik tombol "Kutipan Baru", THE Dashboard_App SHALL menampilkan kutipan yang berbeda dari kutipan yang sedang ditampilkan.
4. THE Dashboard_App SHALL menampilkan nama penulis kutipan bersama teks kutipan.

---

### Requirement 6: Ringkasan Harian (Daily Summary)

**User Story:** Sebagai pengguna, saya ingin melihat ringkasan progres harian saya, agar saya dapat mengevaluasi pencapaian hari ini dengan cepat.

#### Acceptance Criteria

1. THE Dashboard_App SHALL menampilkan jumlah total tugas, jumlah tugas selesai, dan jumlah tugas belum selesai.
2. THE Dashboard_App SHALL menampilkan jumlah kebiasaan yang telah diselesaikan hari ini dari total kebiasaan yang ada.
3. WHEN data tugas atau kebiasaan diperbarui, THE Dashboard_App SHALL memperbarui tampilan ringkasan harian secara otomatis tanpa perlu memuat ulang halaman.

---

### Requirement 7: Tema Terang/Gelap (Light/Dark Theme)

**User Story:** Sebagai pengguna, saya ingin dapat beralih antara tema terang dan gelap, agar tampilan dashboard nyaman digunakan di berbagai kondisi pencahayaan.

#### Acceptance Criteria

1. WHEN pengguna mengklik tombol toggle tema, THE Dashboard_App SHALL beralih antara tema terang dan tema gelap.
2. WHEN tema diubah, THE Dashboard_App SHALL menyimpan preferensi tema ke Local_Storage.
3. WHEN halaman dimuat, THE Dashboard_App SHALL menerapkan tema yang tersimpan di Local_Storage; IF tidak ada preferensi tersimpan, THEN THE Dashboard_App SHALL menerapkan tema terang sebagai default.

---

### Requirement 8: Persistensi Data

**User Story:** Sebagai pengguna, saya ingin data saya tetap tersimpan meskipun browser ditutup dan dibuka kembali, agar saya tidak kehilangan informasi yang telah saya masukkan.

#### Acceptance Criteria

1. THE Dashboard_App SHALL menyimpan semua data pengguna (tugas, kebiasaan, catatan, preferensi tema) ke Local_Storage.
2. WHEN halaman dimuat, THE Dashboard_App SHALL membaca semua data dari Local_Storage dan menginisialisasi state aplikasi sesuai data tersebut.
3. IF Local_Storage tidak tersedia di browser pengguna, THEN THE Dashboard_App SHALL menampilkan pesan peringatan dan tetap berfungsi dengan data sementara selama sesi berlangsung.
4. THE Dashboard_App SHALL menyimpan data dalam format JSON yang valid ke Local_Storage.
5. FOR ALL data yang disimpan ke Local_Storage, membaca kembali data tersebut dan mem-parse-nya SHALL menghasilkan objek yang setara dengan objek yang disimpan (round-trip property).
