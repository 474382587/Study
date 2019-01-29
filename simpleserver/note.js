const fs = require('fs')

var addNote = (title, body) => {
    console.log('title: ', title, '\n body: ', body)
    var notes = []
    var note = {
        title,
        body
    }
    try {
        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
    } catch (e) {
        // console.error(e)
    }
    var duplicateNotes = notes.filter(e => {
        return e.title === title
    })
    duplicateNotes.length === 0 ? notes.push(note) : ''

    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}
var getAll = () => {
    console.log('getting all notes')
}

var removeNote = title => {
    console.log('remove ', title)
}
var readNote = title => {
    console.log('read ', title)
}

module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote
}
