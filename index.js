module.exports = function (len, each, callback) {
  len === 0 ? callback() : loop(0)
  function loop (i) {
    each(function next (error) {
      if (error) return callback(error)
      if (i + 1 === len) return callback()
      loop(i + 1)
    }, i)
  }
}
