// Sticky Header

const header = document.querySelector('header');

window.addEventListener ('scroll', function(){
    
    header.classList.toggle ('sticky', window.scrollY > 0);
})


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