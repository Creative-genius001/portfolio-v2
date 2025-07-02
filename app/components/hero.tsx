'use client'


import Link from "next/link";
import { Data } from "../type";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import SplashCursor from "./splashCursor";
import LogoCarousel from "./logoCarousel";
import { SiReaddotcv } from "react-icons/si";

const Hero = (prop: {data: Data}) => {
    const { data } = prop

    return (
        <div className='section mx-auto lg:w-1/2 flex flex-col justify-center items-start h-screen'>
            {/* <SplashCursor /> */}
            <span className="bg-[#E1F9DC] rounded-md px-4 py-2 text-xs font-semibold text-[#3fa12b] mb-3 border-2 border-[#baeab0]">Available for hire</span>
            <h1 className='sm: text-4xl md:text-6xl font-semibold mb-5'>{data.hero.header}</h1>
            <p className="text-lg">{data.hero.paragraph}</p>

            <div className="flex items-center mt-5">
                <div className="flex w-[100px] justify-between text-2xl">
                    <Link className="icon transition-all duration-300" href="https://github.com/Creative-genius001"><BsGithub /></Link>
                    <Link className="icon transition-all duration-300" href="https://www.linkedin.com/in/ovie-ighosuakpo/"><AiFillLinkedin /></Link>
                    <Link className="icon transition-all duration-300" href="https://x.com/kingovie_007"><FaXTwitter /></Link>
                </div>
                <span className="resume ml-20 text-md font-medium bg-[#f8f9dc] rounded-md px-4 py-2 text-[#be9f17] mb-3 border-2 border-[#c2be70]">
                    <a className="flex items-center" href="/Ovie Ighosuakpo cv.pdf" download>
                        My Resume <SiReaddotcv className="ml-4 text-xl" />
                    </a>
                </span>
            </div>

            <LogoCarousel />
        </div>
    )
}

export default Hero