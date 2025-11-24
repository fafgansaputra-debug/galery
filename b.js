        // --- DATA FOTO ---
        // Masukkan data fotomu di sini
        const photoData = [
            { src: "../bahan/1.png", text: "may zira" },
            { src: "../bahan/2.png", text: "my tante" },
            { src: "../bahan/3.png", text: "masyaallah" },
            { src: "../bahan/4.png", text: "my kisah" },
            { src: "../bahan/5.png", text: "a-aanuuu" },
            { src: "../bahan/6.png", text: "ziraaaaaaaa" },
            { src: "../bahan/7.png", text: "tanteee" },
            { src: "../bahan/8.png", text: "sisterr zira" },
            { src: "../bahan/9.png", text: "kiw kiiwwww" },
            { src: "../bahan/10.png", text: "ini kah my...." },
            { src: "../bahan/11.png", text: "my istri" },
            { src: "../bahan/12.png", text: "my bini" },
        ];

        const itemsPerPage = 4; // Jumlah foto per halaman
        let currentPage = 1;

        // --- FUNGSI MENGACAK ARRAY (Fisher-Yates Shuffle) ---
        // Ini membuat urutan foto berubah setiap kali website di-refresh
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Acak foto saat pertama kali dimuat
        shuffleArray(photoData);

        function renderGallery() {
            const gallery = document.getElementById('gallery');
            const pageInfo = document.getElementById('page-info');
            const btnPrev = document.getElementById('btn-prev');
            const btnNext = document.getElementById('btn-next');

            gallery.innerHTML = "";

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pagePhotos = photoData.slice(startIndex, endIndex);

            pagePhotos.forEach((photo, index) => {
                const card = document.createElement('div');
                card.className = 'photo-card';
                
                // --- LOGIKA POSISI ACAK (ROTASI) ---
                // Menghasilkan angka acak antara -6 derajat sampai 6 derajat
                const randomRotation = Math.random() * 12 - 6; 
                
                // Terapkan rotasi langsung ke style element
                card.style.transform = `rotate(${randomRotation}deg)`;
                
                // Delay animasi agar muncul berurutan
                card.style.animationDelay = `${index * 0.15}s`;

                card.innerHTML = `
                    <img src="${photo.src}" alt="${photo.text}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
                    <div class="caption">${photo.text}</div>
                `;
                gallery.appendChild(card);
            });

            const totalPages = Math.ceil(photoData.length / itemsPerPage);
            pageInfo.innerText = `${currentPage} / ${totalPages}`;
            
            btnPrev.disabled = currentPage === 1;
            btnNext.disabled = currentPage === totalPages || totalPages === 0;
        }

        function changePage(direction) {
            currentPage += direction;
            renderGallery();
        }

        renderGallery();
        
        document.addEventListener("DOMContentLoaded", function() {
    // 1. Buat container overlay jika belum ada di HTML
    const container = document.createElement('div');
    container.classList.add('love-container');
    document.body.appendChild(container);

    // 2. Fungsi membuat hati
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Posisi horizontal acak (0% sampai 100% layar)
        heart.style.left = Math.random() * 100 + "vw";

        // Durasi animasi acak (antara 3 sampai 6 detik) biar natural
        const duration = Math.random() * 3 + 3;
        heart.style.animationDuration = duration + "s";

        // Ukuran acak (opsional, biar variatif)
        const size = Math.random() * 10 + 10; // 10px sampai 20px
        heart.style.width = size + "px";
        heart.style.height = size + "px";
        
        // Perbaikan pseudo-element size agar ikut berubah (opsional, simplenya diabaikan juga oke)
        // Tapi karena CSS shape pakai ::before/after fix, scaling lebih baik lewat CSS transform scale di atas.
        
        container.appendChild(heart);

        // Hapus elemen setelah animasi selesai agar browser tidak berat
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // 3. Jalankan interval (muncul setiap 300ms)
    setInterval(createHeart, 300); 
});