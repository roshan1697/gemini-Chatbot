import { GoogleGenerativeAI } from "@google/generative-ai";
import { APIKEY } from "./config";

const genAI = new GoogleGenerativeAI(APIKEY)

const run = async() => {
    const model = genAI.getGenerativeModel({model:'gemini-pro'})
    const prompt = "Write a story about a magic backpack."
    const res = await model.generateContent(prompt)
    const content = await res.response
    console.log(content)
}
run()