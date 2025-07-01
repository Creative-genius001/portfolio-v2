import { Data } from "../type"
import ProjectCard from "./Card/projectCard";


const Projects = (prop : {data: Data}) => {
    
    const {data} = prop;
  
    return (
        <div className='section lg:w-1/2  mx-auto flex flex-col sm:mt-[20px] lg:mt-[80px] py-10'>
            <h5 className='mb-5'>{data.projects.title}</h5>

            <div>
                { data.projects.project.map((project, index)=> (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects