const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app')

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db)
    it('should call the spy correctly', () => {
        var spy = expect.createSpy()
        spy('andrew', 25)
        expect(spy).toHaveBeenCalledWith('andrew', 25)
    })
    it('should call saveUser with user object', () => {
        var email = 'andrew@test.com'
        var password = '12343121'
        app.handleSignup(email, password)
        expect(db.saveUser).toHaveBeenCalledWith({ email, password })
    })
})
