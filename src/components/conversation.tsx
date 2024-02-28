
const Conversation = () => {
    return (
        <>
            <div className="flex flex-row bg-indigo-100 shadow rounded-xl ">
                <div
                    className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-3 text-xs font-bold bg-indigo-500 rounded-full ml-7"
                >
                    B
                </div>
                <div
                    className="relative px-4 py-2 text-sm"
                >


                    <div>
                        <span className="text-xl font-semibold">You</span>
                        <div>Hey How are you today?</div>
                    </div>
                </div>
            </div>


           


            <div className="flex flex-row bg-white shadow rounded-xl ">
                <div
                    className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-3 text-xs font-bold bg-indigo-500 rounded-full ml-7"
                >
                    B
                </div>
                <div
                    className="relative px-4 py-2 text-sm"
                >


                    <div>
                        <span className="text-xl font-semibold">Gemini</span>
                        <div>Hey How are you today?</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conversation