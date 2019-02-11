const expect = require('expect')
const utils = require('./utils')

describe('Utils', () => {
    describe('- add', () => {
        it('This should add up 2 numbers', () => {
            var res = utils.add(1, 2)
            console.log(res)
            expect(res)
                .toBe(3)
                .toBeA('number')
        })
    })
    describe('- square', () => {
        it('Should return a square of a number', () => {
            var res = utils.square(2)
            expect(res)
                .toBe(4)
                .toBeA('number')
        })
    })

    describe('- object', () => {
        it('should retuan an object contains name', () => {
            var res = utils.setName('Joseph')
            expect(res)
                .toEqual({ name: 'Joseph' })
                .toBeA('object')
                .toInclude({ name: 'Joseph' })
        })
    })
    describe('- async add', () => {
        it('should return a + b', done => {
            utils.asyncAdd(4, 6, res => {
                expect(res).toBe(10)
                done()
            })
        })
    })
})
