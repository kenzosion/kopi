

//  preloader event listener

window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display='none';
})

// toggle nav bar

document.querySelector('.navBtn').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('nav--show');
})