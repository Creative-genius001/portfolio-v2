import Link from 'next/link'
import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='w-1/2 py-8 mx-auto flex flex-col items-center justify-center mt-4'>
        <p className='text-center'> &copy; {new Date().getFullYear()} Ovie Ighosuakpo. All rights reserved.</p>
        <div className="flex w-[100px] justify-between mt-3 text-xl">
                <Link className="icon transition-all duration-300" href="https://github.com/Creative-genius001"><BsGithub /></Link>
                <Link className="icon transition-all duration-300" href="https://www.linkedin.com/in/ovie-ighosuakpo/"><AiFillLinkedin /></Link>
                <Link className="icon transition-all duration-300" href="https://x.com/kingovie_007"><FaXTwitter /></Link>
        </div>
    </div>
  )
}

export default Footer