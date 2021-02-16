let sendForm = document.querySelector('#send-form');
let form = document.querySelector('form');

sendForm.onclick = function (e) {
   e.preventDefault();
   console.log(serialize(form));
   document.querySelector('.out').innerHTML += serialize(form);
}

