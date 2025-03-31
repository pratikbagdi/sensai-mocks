"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-black opacity-95 text-white shadow-sm border-b-2 border-gray-200'>
        <Image src={'/logo.png'} width={100} height={60} alt='logo' />
        <ul className='hidden md:flex gap-6'>
          <Link href={"/dashboard"}>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard'&&'text-white font-bold'}
            `}
            
            >Mock Interviews</li>
            </Link>
            
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header