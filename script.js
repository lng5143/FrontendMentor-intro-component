const form = document.querySelector("#form")
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const emailAddress = document.querySelector('#email-address')
const password = document.querySelector('#password')
const button = document.querySelector('#button')

const firstNameSection = document.querySelector('#first-name-section')
const lastNameSection = document.querySelector('#last-name-section')
const emailAddressSection = document.querySelector('#email-address-section')
const passwordSection = document.querySelector('#password-section')


form.addEventListener('submit', event => {
    event.preventDefault();
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailAddressValue = emailAddress.value;
    const passwordValue = password.value;

    firstNameSection.innerHTML = ''
    firstName.style.background = ''
    firstName.style.border = '1px solid #b9b6d3'

    lastNameSection.innerHTML = ''
    lastName.style.background = ''
    lastName.style.border = '1px solid #b9b6d3'

    passwordSection.innerHTML = ''
    password.style.background = ''
    password.style.border = '1px solid #b9b6d3'

    emailAddressSection.innerHTML = ''
    emailAddress.style.background = ''
    emailAddress.style.border = '1px solid #b9b6d3'

    lastNameSection.innerHTML = ''
    passwordSection.innerHTML = ''
    emailAddressSection.innerHTML = ''

    if (firstNameValue === '') {
        firstName.style.background = 'url(images/icon-error.svg) no-repeat';
        firstName.style.backgroundPosition = 'right 10px center';
        firstName.style.backgroundSize = '20px'
        firstName.style.border = '2px solid #ff7a7a'

        const firstNameAlert = document.createElement('p');
        firstNameAlert.innerHTML = 'First Name cannot be empty'
        firstNameAlert.style.color = '#ff7a7a'
        firstNameAlert.style.textAlign = 'right'
        firstNameSection.appendChild(firstNameAlert)

        firstName.setAttribute('placeholder', '')
    }

    if (lastNameValue === '' ) {
        lastName.style.background = 'url(images/icon-error.svg) no-repeat';
        lastName.style.backgroundPosition = 'right 10px center';
        lastName.style.backgroundSize = '20px'
        lastName.style.border = '2px solid #ff7a7a'

        const lastNameAlert = document.createElement('p');
        lastNameAlert.innerHTML = 'Last Name cannot be empty'
        lastNameAlert.style.color = '#ff7a7a'
        lastNameAlert.style.textAlign = 'right'
        lastNameSection.appendChild(lastNameAlert)

        lastName.setAttribute('placeholder', '')

    }

    if (passwordValue === '' ) {
        password.style.background = 'url(images/icon-error.svg) no-repeat';
        password.style.backgroundPosition = 'right 10px center';
        password.style.backgroundSize = '20px'
        password.style.border = '2px solid #ff7a7a'

        const passwordAlert = document.createElement('p');
        passwordAlert.innerHTML = 'Password cannot be empty'
        passwordAlert.style.color = '#ff7a7a'
        passwordAlert.style.textAlign = 'right'
        passwordSection.appendChild(passwordAlert)

        password.setAttribute('placeholder', '')

    }

    if (!validateEmail(emailAddressValue)) {
        emailAddress.style.background = 'url(images/icon-error.svg) no-repeat';
        emailAddress.style.backgroundPosition = 'right 10px center';
        emailAddress.style.backgroundSize = '20px'
        emailAddress.style.border = '2px solid #ff7a7a'

        emailAddressSection.innerHTML = ''
        const emailAddressAlert = document.createElement('p');
        emailAddressAlert.innerHTML = 'Looks like this is not an email'
        emailAddressAlert.style.color = '#ff7a7a'
        emailAddressAlert.style.textAlign = 'right'
        emailAddressSection.appendChild(emailAddressAlert)

        // emailAddress.style.color = '#ff7a7a'
    }
})

function validateEmail(emailInput) {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(emailInput)
}