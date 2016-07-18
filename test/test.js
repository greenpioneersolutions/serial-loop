var assert = require('chai').assert
var loop = require('../index.js')
describe('serial-loop', function () {
  before(function (done) {
    done()
  })
  describe('by number', function () {
    it('looping serially', function (done) {
      var i = 0

      loop(5, each, function (error) {
        assert.isNotOk(error)
        done()
      })

      function each (next, n) {
        assert.equal(i++, n)
        next()
      }
    })
    it('ending when it fails', function (done) {
      var i = 0

      loop(5, each, function (error) {
        assert.equal(error.message, 'hello world')
        done()
      })

      function each (next, n) {
        assert.equal(i++, n)
        assert.ok(i < 4)

        if (i === 3) return next(new Error('hello world'))

        next()
      }
    })
    it('throw error', function (done) {
      loop(0, each, done)

      function each () {
        throw new Error('fail')
      }
    })
    it('next error', function (done) {
      loop(1, each, function (error) {
        assert.equal(error.message, 'fail')
        done()
      })

      function each (next, n) {
        next({'message': 'fail'})
      }
    })
    it('zero length', function (done) {
      loop(2, each, function (error) {
        assert.isNotOk(error)
        done()
      })

      function each (next, n) {
        next(false)
      }
    })
  })
})
