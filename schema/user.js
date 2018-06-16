const { mongoose } = require('./mongoose')
var UserSchema = new mongoose.Schema(
    {
        name:String,
        firstname: String,
        lastname: String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String
        },
        photoUrl:String,
        dateofbirth:Date,
        gender:String,
        city:String,
        Country:String,
        isActive: {
            type: Boolean,
            default: true
        },
        isEmailVerified: {
            type: Boolean,
            default: false
        },
        passwordResetToken: String,
        emailVerificationToken: String,
        token: String,
        image:String,
        provider:String,
        uid:String

    },
    {
        timestamps: true
    }
);

let User = mongoose.model('User', UserSchema);

module.exports = { User }