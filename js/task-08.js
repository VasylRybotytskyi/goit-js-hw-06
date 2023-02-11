const loginForm = document.querySelector('.login-form')
const formData = {};

const submitDataForm = (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if(email.value === '' || password.value === ''){
        alert('Заповніть всі поля!')
    } else{
        formData.email = email.value;
        formData.password = password.value;
        console.log(formData)
    }
event.currentTarget.reset()
}

loginForm.addEventListener('submit', submitDataForm)