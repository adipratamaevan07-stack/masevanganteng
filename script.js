// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        // Hapus class active dari gambar saat ini
        slides[currentIndex].classList.remove('active');
        
        // Pindah ke index berikutnya (kembali ke 0 jika sudah di ujung)
        currentIndex = (currentIndex + 1) % slides.length;
        
        // Tambahkan class active ke gambar baru
        slides[currentIndex].classList.add('active');
    }

    // Jalankan fungsi setiap 3000ms (3 detik)
    setInterval(showNextSlide, 3000);
});