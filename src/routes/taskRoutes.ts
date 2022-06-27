import express, { Request, Response } from "express";
import taskController from "../controllers/taskController.js";

const router = express.Router();

router
.get("/api/v1/task",taskController.getTask)
.get("/api/v1/task/:id",taskController.getTaskById)
.post("/api/v1/task",taskController.setTask)
.put("/api/v1/task/:id",taskController.updateTask)
.delete("/api/v1/task/:id",taskController.deleteTask)
    
export default router;