import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {
 
    
    const textToSpeach=(text)=>{
        if('speechSynthesis' in window){
            const speech=new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech)
        }
        else{
            alert('Sorry, Your browser does not support text to speech')
        }
    }
    return mockInterviewQuestion&&(
    <div className='p-5 border rounded-lg my-10 bg-gray-900 text-white'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=>(
                <h2 className={`p-2 border rounded-full
                text-xs md:text-sm text-center cursor-pointer
                ${activeQuestionIndex==index ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>Question #{index+1}</h2>
            ))}
        </div>
        <h2 className='my-5 text-md md:text-lg text-gray-300'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <Volume2 className='cursor-pointer text-blue-400 hover:text-blue-300' onClick={()=>textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)} />
        
        <div className='border rounded-lg p-5 bg-gray-800 mt-20 '>
            <h2 className='flex gap-2 items-center text-yellow-400'> 
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className='text-sm text-gray-400 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
        </div>
    </div>
  )
}

export default QuestionsSection