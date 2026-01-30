import { Link, NavLink } from 'react-router-dom'
import { projects } from '../constants'
import CTA from '../components/CTA'
import { FaLink } from 'react-icons/fa'

const Projects = () => {
  return (
    <section className="absolute top-40 left-0 right-0 px-4 sm:px-8 lg:px-20 mx-auto max-w-6xl overflow-x-hidden">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Work</span>
      </h1>
      <div className="mt-1 flex flex-col flex-wrap gap-3 text-slate-500">
        <p>
        Over the past several years, I’ve sharpened my skills across a range of technical disciplines, with hands-on experience in React, React Native, Redux, Node.js, PostgreSQL, and building scalable RESTful APIs. What sets me apart is a diverse background across multiple industries, which allows me to approach problems with a practical, user-focused perspective and deliver thoughtful, efficient solutions.
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
