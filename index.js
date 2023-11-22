const form = document.querySelector('form')
const formName = document.querySelector('#name')
const cost = document.querySelector('#cost')
const error = document.querySelector('#error')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (formName.value && cost.value) {

        const item = {
            name: formName.value,
            cost: parseInt(cost.value)
        }

        db.collection('Expenses').add(item).then(res => {
            formName.value = ''
            cost.value = ''
        })

    } else {
        error.textContent = 'Please enter values for all form fields before submitting'
    }
})