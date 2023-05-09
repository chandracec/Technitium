const mongoose = require('mongoose');

let userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: {type:Number},
    isDeleted:{type:Boolean,
    default:false}
}, { timestamps: true });

module.exports = mongoose.model('UserAuth', userSchema)
