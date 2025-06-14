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
//bener
function handleGetFormData() {
    return {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        zipCode: document.getElementById('zip-code').value,
        status: document.getElementById('status').checked
    };
}
//bener
function isNumber(string) {
    return !isNaN(string);
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validateFullFormData(formData) {
    if (
        formData &&
        typeof formData.zipCode === 'string' &&
        isNumber(formData.zipCode) &&
        document.getElementById('status').checked === true
    ) {
        return true;
    }
    return false;
}

const warning = document.getElementById('warning');
const form = document.getElementById('form');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = handleGetFormData();

        if (!validateFullFormData(formData)) {
            warning.textContent = 'Periksa form anda sekali lagi';
            alert('Periksa form anda sekali lagi');
        } else {
            warning.textContent = '';
            console.log('Data form valid:', formData);
        }
    });
}
