mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name must required"],
        trim:true,
        maxlength:[20,"Name Must Contains 20 characters"]
    },
    email:{
        type:String,
        require:[true,"Email Must be provided"],
        trim:true,
        unique:true,
        lowercase:true
    },
    dept:{
        type:String,
        require:true
    }
    

})

module.exports = mongoose.model('UserDetails',UserSchema);