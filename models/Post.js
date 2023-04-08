const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    qualification: {type: string, required:true},
    content: {type: string, required:true}
   
});

module.exports = mongoose.model('Post', PostSchema)