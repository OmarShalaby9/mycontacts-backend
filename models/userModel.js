const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require : [true,"Please add your user name"],
    },
    email:{
        type: String,
        require: [true,"Please add your email address"],
        unique: [true, "Email address is already taken"],
    },
    password:{
        type:String,
        require: [true,"Please add the user password"],
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);