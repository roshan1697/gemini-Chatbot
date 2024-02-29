import { MutableRefObject, useRef, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "../store/atom/conversationstate"
import axios from "axios"

const QuestionBox = () => {
    const [inputValue , setInputValue] = useState('')
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>
    const [loading,setLoading] = useState(false)
    const setUserState = useSetRecoilState(userState)
    const UserState = useRecoilValue(userState)

    const chat  = async() =>{
        setUserState(
          
            [...UserState , {
                role:'user',
                parts:inputValue
            }]
        )
        try {
            const res = await axios.post('http://localhost:3000/chat',{question:inputValue})
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <div className="w-6 h-6 border-4 border-blue-300 rounded-full animate-spin border-t-white" />
            <div
                className="flex flex-row items-center w-full h-16 px-4 bg-white rounded-xl"
            >
                <div>
                    <button
                        className="flex items-center justify-center text-gray-400 hover:text-gray-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                    </button>
                </div>
                <div className="flex-grow ml-4">
                    <div className="relative w-full">
                        <input
                            ref={inputRef}
                            type="text"
                            className="flex w-full h-10 pl-4 border rounded-xl focus:outline-none focus:border-indigo-300"
                            placeholder="Message Gemini-pro"
                            onChange={(e)=>{
                                setInputValue(e.target.value)
                            }}
                        />
                        {!inputValue ? <></> : <button
                            className="absolute top-0 right-0 flex items-center justify-center w-12 h-full text-gray-400 hover:text-gray-600"
                            onClick={
                                ()=>{
                                    inputRef.current.value = ''
                                    setInputValue('')
                                }
                            }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button> }
                    </div>
                </div>
                <div className="ml-4">
                    <button
                        disabled={loading}
                        onClick={()=>{
                            chat()
                        }}
                        className="flex items-center justify-center flex-shrink-0 px-4 py-1 text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl disabled:opacity-15 disabled:cursor-not-allowed"
                    >
                        <span>Send</span>
                        <span className="ml-2">
                            <svg
                                className="w-4 h-4 -mt-px transform rotate-45"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default QuestionBox