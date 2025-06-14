let text = document.getElementById("text");
let _2 = document.getElementById("2");

let _6 = document.getElementById("6");
let _3 = document.getElementById("3");
let _4 = document.getElementById("4");


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    text.style.marginTop = value * 2.5 + 'px';

    _6.style.left = value * -1.5 + 'px';
    _2.style.top = value * 1 + 'px';
    _4.style.left = value * 1.5 + 'px';
    _3.style.left = value * -1.5 + 'px';

});
function handleGetFormData() {

return {

    name: document.getElementById('name').value,

    email: document.getElementById('email').value,

    city: document.getElementById('city').value,

    zipCode: document.getElementById('zip-code').value,

    status: document.getElementById('status').checked

};
}

function isNumber(string) {

return !isNaN(string);
}

function checkboxIsChecked() {

return document.getElementById('status').checked;
}

function validateFormData(formData) {

return formData !== null &&

       isNumber(formData.zipCode) &&

       checkboxIsChecked();
}

function submit() {

const data = handleGetFormData();

const warningDiv = document.getElementById('warning');



if (validateFormData(data) == false) {

    return warningDiv.textContent = 'Periksa form anda sekali lagi';

} else {

   return warningDiv.textContent = ' ';

}
}

document.getElementById('submit-form').addEventListener('click', (event) => {

event.preventDefault();

submit()
})
