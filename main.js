// İndex.html Scriptleri //

window.onload = function () {
  if (document.getElementById("ana-sayfa")) {
    let modalElement = document.getElementById("modal1");
    let hosgeldinModal = new bootstrap.Modal(modalElement);
    hosgeldinModal.show();
  }

  const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImage.src = thumb.src;
            });
        });
    }
};
