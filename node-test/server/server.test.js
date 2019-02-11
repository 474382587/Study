const request = require('supertest')
const expect = require('expect')

var app = require('./server').app

describe('Server', () => {
    it('should return Hello World!', done => {
        request(app)
            .get('/')
            .expect('Hello World!')
            .end(done)
    })
    it('should include Mike', done => {
        request(app)
            .get('/users')
            .expect(200)
            .expect(res => {
                expect(res.body).toInclude({ name: 'Mike' })
            })
            .end(done)
    })
})
