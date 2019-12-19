

// event Listeners
eventListeners();
function eventListeners() {
    const ui = new UI()
    // preloader
    window.addEventListener('load', function () {
        ui.hidePreloader();
    })
    // nav btn
    document.querySelector('.navBtn').addEventListener('click', function () {
        ui.showNav();
    })
}


//constructor function
function UI() {
}

// hide preloader
UI.prototype.hidePreloader = function () {
    document.querySelector('.preloader').style.display = "none";
}
// show Nav
UI.prototype.showNav = function () {
    document.querySelector('.nav').classList.toggle('nav--show')
}