import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {

    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }
    
  return (
    <div className='border border-gray-700 shadow-md rounded-lg p-3 bg-black'>
        <h2 className='font-bold text-blue-400'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-300'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-500'>Created At:{interview.createdAt}</h2>
        <div className='flex justify-between mt-2 gap-5'>
            <Button size="sm" variant="outline" className="w-full border-white text-black hover:bg-gray-800"
            onClick={onFeedbackPress}
            >Feedback</Button>
            <Button size="sm" className="w-full bg-blue-500 text-white hover:bg-blue-600"
            onClick={onStart}
            >Start</Button>

        </div>
    </div>
  )
}

export default InterviewItemCard