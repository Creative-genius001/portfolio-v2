import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { MagicCard } from "./ui/magicCard";


type Project = {
    name: string,
    description: string,
    liveLink: string,
    githubLink: string
}

const ProjectCard = (prop: {project: Project }) => {

    const {project} = prop;
    return (
        //border border-gray-200 rounded-2xl 
        <MagicCard gradientColor={"#D9D9D955"} className="project-card w-auto border border-gray-200 rounded-2xl lg:p-10 mb-8 hover:scale-103 duration-200 ease-out">
            <div className="">
                <h3 className="font-bold mb-2">{project.name}</h3>
                <p className="leading-6">{project.description}</p>

                <div className="flex w-[50px] justify-between mt-4">
                    <Link className="text-xl" href={project.liveLink}><MdOutlineArrowOutward /></Link>
                    <Link className="text-xl" href={project.githubLink}><FiGithub /></Link>
                </div>
            </div>`
        </MagicCard>
    )
}

export default ProjectCard