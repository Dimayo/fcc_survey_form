//Form send
(function formSend() {
    "use strict";

    let form = document.querySelector('#survey-form'),
        sendForm = document.querySelector('.form-send');


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        sendForm.style.display = 'flex';
    });
})();