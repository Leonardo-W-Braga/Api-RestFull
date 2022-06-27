import { Request, Response } from "express";
import tasks from "../models/Task.js";
import task from '../models/Task.js';

class taskController{

    static getTask = (req:Request, res:Response) =>{
        task.find((err:any,task) => {
            res.set({'Access-Control-Allow-Origin': '*'})
            res.status(200).json(task)
        })
    }

    static getTaskById = (req:Request,res:Response) =>{
        const id = req.params.id

        task.findById(id,(err:any,task:any) => {
            if(err){
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(404).send({message: err.message})
            }else{
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(200).send(task);
            }
        })
    }
    static setTask = (req:Request,res:Response) =>{
        let task = new tasks(req.body);

        task.save((err:any)=>{
            if(err){
                
                res.status(500).send({message: `${err.message} - task register failed.`})
            }else{
                res.status(201).send(task.toJSON())
            }
        })
    }
    static updateTask = (req:Request,res:Response) =>{
        const id = req.params.id

        task.findByIdAndUpdate(id,{$set:req.body},(err:any) => {
            if(err){
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(404).send({message: err.message})
            }else{
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(204).send({message: 'task updated sucessfully'});
            }
        })
    }
    static deleteTask = (req:Request,res:Response) =>{
        const id = req.params.id

        task.findByIdAndRemove(id,(err:any,task:any) => {
            if(err){
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(404).send({message: err.message})
            }else{
                res.set({'Access-Control-Allow-Origin': '*'})
                res.status(204).send({message: 'task deleted sucessfully'});
            }
        })
    }

}

export default taskController
 