const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

// io('http://localhost:3000')

noteForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Enviado');
    // console.log(title.value, description.value);

    if (savedId) {
        updateNotes(saveId, title.value, description.value)
    } else {
        saveNotes(title.value, description.value)
    }

    title.value = ""
    description.value = ""

})