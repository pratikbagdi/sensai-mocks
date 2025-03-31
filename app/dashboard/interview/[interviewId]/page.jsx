"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {

    const [interviewData,setInterviewData]=useState();
    const [webCamEnabled,setWebCamEnabled]=useState();
    useEffect(()=>{
        console.log(params.interviewId)
        GetInterviewDetails();
    },[])

    /**
     * Used to Get Interview Details by MockId/Interview Id
     */
    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        setInterviewData(result[0]);
    }
  return (
    <div className='my-10 bg-black text-white'>
        <h2 className='font-bold text-2xl text-green-400'>Let's Get Started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
       
            <div className='flex flex-col my-5 gap-5 '>
                <div className='flex flex-col p-5 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 gap-5'>
                    <h2 className='text-lg'><strong>Job Role/Job Position:</strong>{interviewData?.jobPosition} </h2>
                    <h2 className='text-lg'><strong>Job Description/Tech Stack:</strong>{interviewData?.jobDesc} </h2>
                    <h2 className='text-lg'><strong>Years of Experience:</strong>{interviewData?.jobExperience} </h2>
                </div>
                <div className='p-5 border rounded-lg border-yellow-500 bg-yellow-900/20'>
                   <h2 className='flex gap-2 items-center text-yellow-400'> <Lightbulb/><strong>Information</strong></h2>
                    <h2 className='mt-3 text-yellow-300'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                </div>
            </div>
            <div>
           {webCamEnabled? <Webcam
           onUserMedia={()=>setWebCamEnabled(true)}
           onUserMediaError={()=>setWebCamEnabled(false)}
           mirrored={true}
            style={{
                height:300,
                width:300
            }}
           />
           :
           <>
            <WebcamIcon className='h-72 w-full my-7 p-20 bg-gray-800 rounded-lg border border-gray-700 text-gray-400' />
            <Button variant="ghost" className="w-full" onClick={()=>setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
            </>
           }
            </div>

            
        </div>
        <div className='flex justify-end items-end mt-5'>
            <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
            <Button className="bg-green-600 hover:bg-green-500 border border-green-400 text-white">Start Interview</Button>
            </Link>
           </div>

           
    </div>
  )
}

export default Interview