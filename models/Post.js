const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    qualification: {type: String, required:true},
    content: {type: String, required:true}
   
});

module.exports = mongoose.model('Post', PostSchema)