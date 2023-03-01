const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

// io('http://localhost:3000')

noteForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Enviado');
    // console.log(title.value, description.value);

    saveNotes(title, description)


})