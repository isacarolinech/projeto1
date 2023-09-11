let currentImageIndex = 0;
    const images = ['/imagens/imagem1.jpg', '/imagens/imagem2.jpg', '/imagens/imagem3.jpg', '/imagens/imagem4.jpg', '/imagens/imagem5.jpg',
    '/imagens/imagem6.jpg','/imagens/imagem7.jpg','/imagens/imagem8.jpg', '/imagens/imagem9.jpg', '/imagens/imagem10.jpg'];

    function openModal(imageSrc) {
        const modal = document.getElementById('myModal');
        const modalImage = document.getElementById('modalImage');

        currentImageIndex = images.indexOf(imageSrc);

        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }

    function closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentImageIndex];
    }

    // Fecha o modal ao clicar fora da imagem
    const modal = document.getElementById('myModal');
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
