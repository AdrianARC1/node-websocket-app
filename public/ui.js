const notesList = document.querySelector('#notes')

let savedId = ''

const noteUI = note => {

    const div = document.createElement('div')

    div.innerHTML += `
    <div class="card card-body rounded-0 mb-2">
        <h1>Title: ${note.title}</h1>
        <p>Description: ${note.description}</p>
        <div>
            <p class="">Id: ${note.id}</p>
            <div>
                <button class="btn btn-danger delete" data-id="${note.id}">Delete</button>
                <button class="btn btn-secondary update" data-id="${note.id}">Update</button>
            </div>  
        </div>

    </div>
    `
    const btnDelete = div.querySelector('.delete')
    const btnUpdate = div.querySelector('.update')

    btnDelete.addEventListener('click',()=>{
        // console.log(btnDelete.dataset.id)
        deleteNote(btnDelete.dataset.id)
    })

    btnUpdate.addEventListener('click',()=>{
        console.log(btnUpdate.dataset.id)
        getNote(btnUpdate.dataset.id)
    })

    return div
}

const renderNotes = notes => {
    notesList.innerHTML=''
    notes.forEach((note) => {notesList.append(noteUI(note))
    })
}

const appendNote = note => {notesList.append(noteUI(note))}