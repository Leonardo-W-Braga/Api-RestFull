import tasks from "../models/Task.js";
import task from '../models/Task.js';
class taskController {
}
taskController.getTask = (req, res) => {
    task.find((err, task) => {
        res.set({ 'Access-Control-Allow-Origin': '*' });
        res.status(200).json(task);
    });
};
taskController.getTaskById = (req, res) => {
    const id = req.params.id;
    task.findById(id, (err, task) => {
        if (err) {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(404).send({ message: err.message });
        }
        else {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(200).send(task);
        }
    });
};
taskController.setTask = (req, res) => {
    let task = new tasks(req.body);
    task.save((err) => {
        if (err) {
            res.status(500).send({ message: `${err.message} - task register failed.` });
        }
        else {
            res.status(201).send(task.toJSON());
        }
    });
};
taskController.updateTask = (req, res) => {
    const id = req.params.id;
    task.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (err) {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(404).send({ message: err.message });
        }
        else {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(204).send({ message: 'task updated sucessfully' });
        }
    });
};
taskController.deleteTask = (req, res) => {
    const id = req.params.id;
    task.findByIdAndRemove(id, (err, task) => {
        if (err) {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(404).send({ message: err.message });
        }
        else {
            res.set({ 'Access-Control-Allow-Origin': '*' });
            res.status(204).send({ message: 'task deleted sucessfully' });
        }
    });
};
export default taskController;
//# sourceMappingURL=taskController.js.map