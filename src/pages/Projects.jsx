import {Link} from 'react-router-dom'
import {projects} from '../constants'
import CTA from '../components/CTA'
import {FaGithub} from 'react-icons/fa'
import {FaLink} from 'react-icons/fa'
import {useSEO} from '../hooks/useSEO'

const Projects = () => {
  useSEO({
    title: 'Projects',
    description:
      'View Theo Breaux\'s portfolio of mobile and web applications built with React, React Native, Node.js, and PostgreSQL. Including Go Dutch!, NutriGoalTracker, and more.',
    type: 'CollectionPage',
    structuredData: {
      about: {
        '@type': 'ItemList',
        itemListElement: projects.map((project, index) => ({
          '@type': 'SoftwareApplication',
          position: index + 1,
          name: project.name,
          description: project.description,
        })),
      },
    },
  })

  return (
    <section
      className="absolute top-20 sm:top-24 md:top-28 lg:top-32 xl:top-40 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-6xl overflow-x-hidden pb-8 sm:pb-12"
      aria-label="Projects page"
    >
      <header className="mb-4 sm:mb-6">
        <h1 className="head-text">
          My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h1>
        <div className="mt-2 sm:mt-3 flex flex-col flex-wrap gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base">
          <p>
            Over the past few years, I have honed my skills in various technical disciplines. I am proficient in React.js, React Native, Redux, Node.js,
            PostgreSQL, and crafting efficient solutions through RESTful APIs. What truly sets me apart is my diverse background spanning multiple
            industries, which imbues me with a unique perspective to my work.
          </p>
        </div>
      </header>
      <div className="flex flex-col my-12 sm:my-16 md:my-20 gap-10 sm:gap-12 md:gap-16">
        {projects.map((project) => (
          <article
            className="w-full lg:flex-1"
            key={project.name}
            itemScope
            itemType="https://schema.org/SoftwareApplication"
          >
            <div className="block-container w-10 h-10 sm:w-12 sm:h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
            </div>
            <div className="mt-2 sm:mt-3 flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold" itemProp="name">
                {project.name}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500" itemProp="description">
                {project.description}
              </p>

              <nav className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4" aria-label={`${project.name} links`}>
                {project.gitHubLink && (
                  <Link
                    to={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <FaGithub size={24} className="sm:w-7 sm:h-7" />
                  </Link>
                )}
                {project.link && (
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    aria-label={`Visit ${project.name} website`}
                  >
                    <FaLink size={24} className="sm:w-7 sm:h-7" />
                  </Link>
                )}
              </nav>
            </div>
          </article>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects
