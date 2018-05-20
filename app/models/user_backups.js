var userSchema = require('./user');

// create the model for users and expose it to our app
module.exports = mongoose.model('UserBackups', userSchema);
