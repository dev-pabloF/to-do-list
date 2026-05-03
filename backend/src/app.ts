import 'dotenv/config'
import express from "express";
import { prisma } from "./lib/prisma";

const app = express();
app.use(express.json());

app.post("/tasks", async (req, res) => {
    const { description } = req.body;

    const task = await prisma.task.create({
        data: {
            description,
        },
    });


    return res.json(task)
});

const PORT = 3000; 
app.listen(PORT)