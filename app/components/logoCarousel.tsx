import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoCarousel = () => {
  return (
    <div className="w-full mx-auto mt-16">
        <Marquee
            pauseOnHover={true} 
        >
            <Image width={10} height={10} src="/assets/react.png" alt="react" className="h-10 w-10 mx-8" />
            <Image width={10} height={10} src="/assets/typescript.svg" alt="typescript" className="h-10 w-10 mx-12" />
            <Image width={10} height={10} src="/assets/go.png" alt="golang" className="h-15 w-15 mx-12" />
            <Image width={10} height={10} src="/assets/docker.svg" alt="docker" className="h-10 w-10 mx-12" />
            <Image width={10} height={10} src="/assets/next.svg" alt="next" className="h-10 w-10 mx-12" />
            <Image width={10} height={10} src="/assets/angular.png" alt="angular" className="h-10 w-10 mx-12" />
            <Image width={10} height={10} src="/assets/postgres.svg" alt="psotgres" className="h-10 w-10 mx-12" />
        </Marquee>
    </div>
  )
}

export default LogoCarousel