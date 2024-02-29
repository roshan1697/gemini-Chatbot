
import express from 'express'
import cors from 'cors'

import  userChat from './route/userchat'


const app = express()
app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173'
}))

app.use('/chat', userChat)




app.listen(3000,()=>{
    console.log('connected')
})