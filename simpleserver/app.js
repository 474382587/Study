const fs = require('fs')
const os = require('os')

const yargs = require('yargs')
const _ = require('lodash')

const notes = require('./note.js')

console.log(process.argv)

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Add a new note', {
        title: titleOptions
    })
    .command('remove', 'Remove a new note', {
        title: titleOptions
    })
    .help().argv

var command = process.argv[2]
console.log(argv, ' yargs')
console.log(command, 'command')

switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body)
        note ? console.log('note added') : console.log('duplicate found!')
        break
    case 'list':
        notes.getAll()
        break
    case 'read':
        notes.readNote(argv.title)
        break
    case 'remove':
        console.log('remove note')
        notes.removeNote(argv.title)
            ? console.log('remove note fail')
            : console.log('remove note success')
        break
    default:
        console.log('command not defined')
        break
}

/**
 * debugging, add inspect before your cmd
 * node inspect app.js
 * n --> next step
 * c --> continue
 * repl --> read and evaluate  -- where you can use JS
 *
 */
