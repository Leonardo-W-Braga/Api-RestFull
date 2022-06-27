import { Request, Response } from "express";
import express from "express";
import users from "./userRoutes.js";
import tasks from "./taskRoutes.js";


const routes = (app:any) => {
    app.route('/').get((req:Request,res:Response)=>{
        res.status(200).send({title: "project - api rest"})
    })
    app.use(
        express.json(),
        users,
        tasks

    )
}

export default routes