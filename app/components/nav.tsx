import Link from 'next/link'
import { FaRegFolder } from "react-icons/fa6";
import { MdInfoOutline } from "react-icons/md";
import { GrHomeOption } from "react-icons/gr";
import { ReactElement } from 'react';
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Nav = () => {

    const Links: Array<{name: string, icon: ReactElement}> = [
        {name: "Home", icon: <GrHomeOption />},
        {name: "About", icon: <MdInfoOutline />},
        {name: "Projects", icon: <FaRegFolder />}
    ]
  return (
        // <div className='fixed bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] border border-[#e2e2e2] p-4 flex justify-around bg-white/20 backdrop-blur-xs shadow-md rounded-4xl z-[1000]'>
        //     { Links.map((link, index) => (
        //         <Link className='font-medium' key={index} href={link.href}>{link.name}</Link>
        //     ))}
        // </div>
         <div className='fixed bottom-1/2 left-12 translate-y-1/2 transform h-[140px] p-4 flex flex-col justify-around z-[1000]'>
            { Links.map((link) => (
                <Link className=' hover:translate-x-2 hover:scale-110 duration-200 ease-out font-medium flex items-center' key={link.name} href={`#${link.name}`}><TfiLayoutLineSolid className='mr-3' /> {link.name}</Link>
            ))}
        </div>
  )
}

export default Nav