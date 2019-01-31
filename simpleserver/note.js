const fs = require('fs')

var fetchNotes = function() {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
        return notes
    } catch (e) {
        // console.error(e)
        return []
    }
}

var saveNotes = notes => {

    fs.writeFileSync('notes-data.json', JSON.stringify(notes))

}

var addNote = (title, body) => {
    console.log('title: ', title, '\nbody: ', body)
    var notes = fetchNotes()
    var note = {
        title,
        body
    }

    var duplicateNotes = notes.filter(e => {
        return e.title === title
    })
    duplicateNotes.length === 0 ? notes.push(note) : ''
    saveNotes(notes)
    return duplicateNotes.length === 0 ? note : ''
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
