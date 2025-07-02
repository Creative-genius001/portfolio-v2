import { Experience } from "@/app/type"

const ExperienceCard = (prop: {experience : Experience}) => {

    const { experience } =  prop;

    return (
        <div className="w-auto mb-8 duration-200 ease-out">
            <h3 className="font-bold mb-3 text-sm">{experience.duration}</h3>
            <span className="text-lg font-medium ">{experience.role} · {experience.companyName}</span>
            <p className="mt-3 text-justify">{experience.tasks}</p>   
        </div>
    )
}

export default ExperienceCard