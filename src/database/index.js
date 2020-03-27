const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://nodeAPI:nodeAPI@cluster0-rt7c9.mongodb.net/nodeAPI?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;