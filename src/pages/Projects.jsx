import {projects} from '../constants'
import CTA from '../components/CTA'
import ProjectCard from '../components/ProjectCard'
import {useSEO} from '../hooks/useSEO'

const Projects = () => {
  useSEO({
    title: 'Work',
    description:
      "View Theo Breaux's portfolio of mobile and web applications built with React, React Native, Node.js, and PostgreSQL. Including Go Dutch!, NutriGoalTracker, AthletesTogether, and more.",
    type: 'CollectionPage',
    canonical: 'https://www.theobreaux.com/work',
    image: typeof window !== 'undefined' ? window.location.origin + '/hero-image.png' : '',
    imageAlt: 'Theo Breaux portfolio projects - Mobile and web applications',
    structuredData: {
      about: {
        '@type': 'ItemList',
        itemListElement: projects.map((project, index) => ({
          '@type': 'SoftwareApplication',
          position: index + 1,
          name: project.name,
          description: project.description,
          url: project.link,
        })),
      },
    },
  })

  return (
    <section
      className="absolute top-24 sm:top-24 md:top-28 lg:top-32 xl:top-40 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-6xl overflow-x-hidden pb-8 sm:pb-12"
      aria-label="Work page"
    >
      <header className="mb-4 sm:mb-6">
        <h1 className="head-text">
          My <span className="blue-gradient_text font-semibold drop-shadow">Work</span>
        </h1>
        <div className="mt-2 sm:mt-3 flex flex-col flex-wrap gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base">
          <p>
            Over the past several years, I’ve developed expertise across a range of technologies, with hands-on experience in React, React Native,
            Redux, Node.js, PostgreSQL, and building scalable RESTful APIs. What sets me apart is my diverse professional background, which enables me
            to approach challenges from multiple perspectives, maintain a strong focus on the user experience, and deliver thoughtful, efficient
            solutions.
          </p>
        </div>
      </header>
      <div className="flex flex-col mt-2 mb-8 sm:mt-3 sm:mb-12 md:mt-4 md:mb-16 gap-8 sm:gap-10 md:gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects
