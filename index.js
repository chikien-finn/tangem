document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bam').addEventListener('click', function() {
        alert('yes');
    });

    document.getElementById('bam1').addEventListener('mouseover', function() {
        const btnNo = document.getElementById('bam1');
        const container = document.querySelector('.box');
        const containerRect = container.getBoundingClientRect();
        const btnRect = btnNo.getBoundingClientRect();

        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;
    });
});
