import { Link, NavLink } from 'react-router-dom'
import { projects } from '../constants'
import CTA from '../components/CTA'
import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'

const Projects = () => {
  return (
    <section className="absolute top-40 left-0 right-0 px-4 sm:px-8 lg:px-20 mx-auto max-w-6xl overflow-x-hidden">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className="mt-1 flex flex-col flex-wrap gap-3 text-slate-500">
        <p>
          Over the past few years, I have honed my skills in various technical disciplines. I am proficient in React.js, React Native, Redux, Node.js,
          PostgreSQL, and crafting efficient solutions through RESTful APIs. What truly sets me apart is my diverse background spanning multiple
          industries, which imbues me with a unique perspective to my work.
        </p>
      </div>
      <div className="flex flex-col my-20 gap-16">
        {projects.map((project) => (
          <div
            className="w-full lg:flex-1"
            key={project.name}
          >
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
            </div>
            <div className="mt-1 flex flex-col">
              <h4 className="text-2xl font-bold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>

              <div className="mt-1 flex items-center gap-2">
                <div className="flex">
                  <div className="flex items-center mr-2">
                    <Link
                      to={project.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      <FaGithub size={30} />
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      <FaLink size={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Projects
