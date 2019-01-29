const fs = require('fs')
const os = require('os')

const yargs = require('yargs')
const _ = require('lodash')

const notes = require('./note.js')

console.log(process.argv)

const argv = yargs.argv

var command = process.argv[2]
console.log(argv, ' yargs')
console.log(command, 'command')

switch (command) {
    case 'add':
        notes.addNote(argv.title, argv.body)
        break
    case 'list':
        notes.getAll()
        break
    case 'read':
        notes.readNote(argv.title)
        break
    case 'remove':
        notes.removeNote(argv.title)
        console.log('remove note')
        break
    default:
        console.log('command not defined')
        break
}
