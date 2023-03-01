const notesList = document.querySelector('#notes')

const noteUI = note => {

    const div = document.createElement('div')

    div.innerHTML += `
    <div class="card card-body rounded-0 mb-2">
        <p>${note.description}</p>
        <p>${note.id}</p>
        <div>
            <h1 class="h3 card-title">${note.title}</h1>
            <div>
                <button class="btn btn-danger delete" data-id="${note.id}">Delete</button>
                <button class="btn btn-secondary" data-id="${note.id}">Update</button>
            </div>  
        </div>

    </div>
    `
    const btnDelete = div.querySelector('.delete')
    console.log(btnDelete)

    return div
}

const renderNotes = notes => {
    notes.forEach((note) => {notesList.append(noteUI(note))
    })
}