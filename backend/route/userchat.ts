import { GoogleGenerativeAI } from "@google/generative-ai";
import { APIKEY } from "../config";
import express from "express";

const genAI = new GoogleGenerativeAI(APIKEY)
const router = express.Router()



router.post('/',async (req , res )=>{
    try {
        
            const model = genAI.getGenerativeModel({
                model:'gemini-pro'
            })
            const chat = model.startChat(
                {
                    history:[]
                }
            )

        const result = await chat.sendMessage(req.body.question)
        const content = await result.response
        return res.status(200).send(content.text())
    } 
    catch {
        return res.status(404).send('error')
    }
})

export default router