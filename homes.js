exports.index = function(req,res) {
    res.send('index of homes')
    error();
}
exports.new = function(req,res) {
  res.send('form for new home')
}
exports.create = function(req,res) {
  res.send('handle form for new home')
}
exports.show = function(req, res) {
  res.send('show house ' +req.params.home)
}
exports.edit = function(req, res) {
  res.send('form to edit home '+req.params.home)
}
exports.update = function(req, res) {
  res.send('handle form to edit home '+req.params.home)
}
exports.destroy = function(req,res) {
  res.send('delete house ' +req.params.home)
}
