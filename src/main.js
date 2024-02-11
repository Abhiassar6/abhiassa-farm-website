const toggleButton = document.getElementById('toggleButton');
const toggleMenu = document.getElementById('toggleMenu');

toggleButton.addEventListener('click', () => {
    toggleMenu.classList.toggle('hidden');
    toggleMenu.classList.add('flex');
})