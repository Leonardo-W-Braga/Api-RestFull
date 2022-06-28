import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        id:{type:String},
        description:{type:String},
        date:{type:Date},//possibly change later
        user:{type: String,ref:'users',required:true}
    }

)

const tasks = mongoose.model('tasks',taskSchema);

export default tasks;