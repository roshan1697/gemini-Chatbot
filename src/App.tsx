
import Conversation from "./components/conversation"
import QuestionBox from "./components/questionbox"

const App = () => {


  return (
    <>
    <div className="w-4/6 h-screen mx-auto border-2">
      <div className="flex flex-col justify-end h-full bg-gray-100">
        
    <div className="flex flex-col justify-end w-11/12 h-full mx-auto ">
      <Conversation/>

</div>
    <div className="mb-1">
      
    <QuestionBox/>
    </div>
      </div>
    </div>
    </>
  )
}

export default App
