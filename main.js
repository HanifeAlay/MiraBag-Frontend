// İndex.html Scriptleri //

window.onload = function () {
  if (document.getElementById("ana-sayfa")) {
    let modalElement = document.getElementById("modal1");
    let hosgeldinModal = new bootstrap.Modal(modalElement);
    hosgeldinModal.show();
  }

  // Ürün Detay sayfası scripleri //
  if (document.getElementById("buyuk-resim-alani")) {

        const anaResimAlani = document.getElementById('buyuk-resim-alani');
        const anaResim = anaResimAlani.querySelector('img'); // Ana resim etiketini sadece bir kere seçiyoruz
        const kucukResimler = document.querySelectorAll('.urun-galerisi-kucuk-resim');
        
        // O an aktif olan büyüteç nesnesini saklamak için bir değişken
        let aktifBuyutec = null;

        // Büyüteci başlatan fonksiyon
        function buyuteciBaslat(gosterilecekResimSrc) {
            // 1. Önce, eğer varsa, eski büyüteci düzgünce yok et
            if (aktifBuyutec) {
                aktifBuyutec.destroy();
            }

            // 2. Yeni resim için ayarları yap
            const options = {
                img: gosterilecekResimSrc,
                offset: {vertical: 0, horizontal: 10},
                scale: 1.5 
            };

            // 3. Yeni büyüteci oluştur ve ileride yok edebilmek için sakla
            aktifBuyutec = new ImageZoom(anaResimAlani, options);
        }
        
        // Sayfa ilk yüklendiğinde, varsayılan ana resim için büyüteci başlat
        buyuteciBaslat(anaResim.src);

        // Her bir küçük resme tıklama olayı ekle
        kucukResimler.forEach(kucukResim => {
            kucukResim.addEventListener('click', function() {
                const yeniAnaResimSrc = kucukResim.src;
                
                // ÖNEMLİ: Sadece mevcut ana resmin adresini (src) değiştiriyoruz.
                // innerHTML ile her şeyi silip yeniden oluşturmuyoruz.
                anaResim.src = yeniAnaResimSrc;
                
                // Yeni resim için büyüteci yeniden başlatmamız gerekiyor.
                buyuteciBaslat(yeniAnaResimSrc);
            });
        });
    }
};
