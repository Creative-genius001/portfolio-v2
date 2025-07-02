import { Data } from "../type"
import ExperienceCard from "./Card/experience";


const Experiences = (prop :{data: Data}) => {

    const { data } = prop;

    return (
        <div className='section lg:w-1/2  mx-auto flex flex-col py-4'>
            <h5 className='mb-8'>{data.experiences.title}</h5>
            <div>
                { data.experiences.experience.map((experience, index)=> (
                    <ExperienceCard key={index} experience={experience} />
                )) }
            </div>
        </div>
    )
}

export default Experiences