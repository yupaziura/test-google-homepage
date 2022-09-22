// get all elements
const button = document.getElementById('button-ramdom');
const logoGoogle = document.getElementById('logo-google');
const logoMakiage = document.getElementById('logo-makiage');

// add event listener
button.addEventListener('click', ()=> {
    logoGoogle.classList.add('hidden');
    logoMakiage.classList.remove('hidden');
})
