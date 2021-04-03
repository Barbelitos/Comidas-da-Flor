//Sidebar Menu
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

const services = document.getElementById('services_link');

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});

services.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});



//Background Slideshow
$(".slideshow > div:gt(0)").hide();

setInterval(function() {
    $('.slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.slideshow');
},  3000);



//Food Menus
const quentinhasModal = document.getElementById('quentinhas');
const quentinhas = document.getElementById('quent_link');
const salgadosModal = document.getElementById('salgados');
const salgados = document.getElementById('sal_link');
const confeitariaModal = document.getElementById('confeitaria');
const confeitaria = document.getElementById('conf_link');
const chefModal = document.getElementById('chef');
const chef = document.getElementById('chef_link');

const closeQuen = document.querySelector('.close-quen');
const closeSal = document.querySelector('.close-sal');
const closeConf = document.querySelector('.close-conf');
const closeChef = document.querySelector('.close-chef')

quentinhas.addEventListener('click', () => {
    quentinhasModal.classList.toggle('show-modal');
});
salgados.addEventListener('click', () => {
    salgadosModal.classList.toggle('show-modal');
});
confeitaria.addEventListener('click', () => {
    confeitariaModal.classList.toggle('show-modal');
});
chef.addEventListener('click', () => {
    chefModal.classList.toggle('show-modal');
});

closeQuen.addEventListener('click', () =>  {
    quentinhasModal.classList.toggle('show-modal');
});
closeSal.addEventListener('click', () =>  {
    salgadosModal.classList.toggle('show-modal');
});
closeConf.addEventListener('click', () =>  {
    confeitariaModal.classList.toggle('show-modal');
});
closeChef.addEventListener('click', () =>  {
    chefModal.classList.toggle('show-modal');
});

window.onclick = (event) => {
    if (event.target === quentinhasModal) {
        quentinhasModal.classList.toggle('show-modal');
    } else if (event.target === salgadosModal) {
        salgadosModal.classList.toggle('show-modal');
    } else if (event.target === confeitariaModal) {
        confeitariaModal.classList.toggle('show-modal');
    } else if (event.target === chefModal) {
        chefModal.classList.toggle('show-modal');
    }
};

window.addEventListener('touchstart', (event) => {
    if (event.target === quentinhasModal) {
        quentinhasModal.classList.toggle('show-modal');
    } else if (event.target === salgadosModal) {
        salgadosModal.classList.toggle('show-modal');
    } else if (event.target === confeitariaModal) {;
        confeitariaModal.classList.toggle('show-modal');
    } else if (event.target === chefModal) {
        chefModal.classList.toggle('show-modal');
    }
});



//Smooth scrolling cross-browser
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});