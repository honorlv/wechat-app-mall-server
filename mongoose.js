var mongoose = require('mongoose')
// mongoose.connect('mongodb://admin:liangliang@127.0.0.1:27017/yogapu', { useNewUrlParser: true }) //服务器
mongoose.connect('mongodb://127.0.0.1:27017/honor', { useNewUrlParser: true,useUnifiedTopology: true }) //服务器
mongoose.Promise = global.Promise
module.exports = mongoose
