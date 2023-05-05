function closeModal(){
    let modalElement = document.querySelector('.modal-wrapper');
    modalElement.classList.remove('active');

    let overlay = document.querySelector('.overlay');
    overlay.classList.remove('overlayActive');


    // let modalBox = document.querySelector('.modal-box');
    // modalBox.classList.remove('active');
}
function openModal(){
    let modalElement = document.querySelector('.modal-wrapper');
    modalElement.classList.add('active');

    let overlay = document.querySelector('.overlay');
    overlay.classList.add('overlayActive');


    // let modalBox = document.querySelector('.modal-box');
    // modalBox.classList.add('active');
}