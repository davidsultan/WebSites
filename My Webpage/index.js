const menu = document.querySelector('.navbarMenu');
const toggleButton = document.querySelector('.navbarToggle');

toggleButton.addEventListener('click', function(){
    console.log("mmmmmmhcık")
    toggleButton.classList.toggle('is-active');
    menu.classList.toggle('active');
});