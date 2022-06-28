import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    id: { type: String },
    description: { type: String },
    date: { type: Date },
    user: { type: String, ref: 'users', required: true }
});
const tasks = mongoose.model('tasks', taskSchema);
export default tasks;
//# sourceMappingURL=Task.js.map