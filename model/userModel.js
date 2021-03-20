import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name field is required!"] },
    email: { type: String, require: true, unique: true },
    availability: {type: Boolean, default:true},
    isAdmin: {type: Boolean, default: false},

}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User;