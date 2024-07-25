// Sticky Header

const header = document.querySelector('header');
const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

window.addEventListener ('scroll', function(){
    
    header.classList.toggle ('sticky', window.scrollY > 0);
})
// Toggle navigation menu on small screens
menuIcon.addEventListener('click', function() {
    navlist.classList.toggle('active');
});

// MouseOver MouseOut on skills icons

function showText(element){
    const img = element.querySelector('img');
    const text = element.querySelector('.skill-text');
    img.style.transform = 'scale(1.1)';
    img.style.cursor = 'pointer';
    text.style.display = 'block';
}

function hideText(element){
    const img = element.querySelector('img');
    const text = element.querySelector('.skill-text');
    img.style.transform = 'scale(1)';
    text.style.display = 'none';
}