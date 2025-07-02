type Experiences = {
  title: string,
  experience: Array<Experience>
};

export type Experience = {
  role: string;
  companyName: string;
  duration: string;
  tasks: string
}

type About = {
    title: string,
    paragraph1 : string,
    paragraph2 : string,
    paragraph3 : string,
}

type Hero = {
    header: string,
    paragraph : string
}

type Project = {
    title: string,
    description: string,
    project: Array<{
        name: string,
        description: string,
        liveLink: string,
        githubLink: string
    }>
}

export type Data = {
  about: About,
  projects: Project,
  hero: Hero,
  experiences: Experiences;
};
