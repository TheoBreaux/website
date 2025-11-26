import JavaScriptIcon from '../assets/icons/javascript.svg'
import GitHubIcon from '../assets/icons/github.svg'
import HtmlIcon from '../assets/icons/html.svg'
import CssIcon from '../assets/icons/css.svg'
import NodeIcon from '../assets/icons/nodejs.svg'
import ReactIcon from '../assets/icons/react.svg'
import ReactNativeIcon from '../assets/icons/reactnative.svg'
import ReduxIcon from '../assets/icons/redux.svg'
import PostgreSQLIcon from '../assets/icons/postgresql.svg'
import KotlinIcon from '../assets/icons/kotlin.png'
import JetPackIcon from '../assets/icons/jetpack-compose.png'
import CTA from '../components/CTA'
import Education from './Education'
import WorkExperience from '../components/WorkExperience'
import {experiences} from '../constants'
import {useSEO} from '../hooks/useSEO'

const About = () => {
  useSEO({
    title: 'About',
    description:
      'Learn about Theo Breaux - a Front-end Engineer based in Los Angeles with experience in React, React Native, JavaScript, and more. View my skills, work experience, and education.',
    type: 'AboutPage',
  })

  const skills = [
    {name: 'JavaScript', icon: JavaScriptIcon, alt: 'JavaScript icon'},
    {name: 'HTML', icon: HtmlIcon, alt: 'HTML icon'},
    {name: 'CSS', icon: CssIcon, alt: 'CSS icon'},
    {name: 'Node.js', icon: NodeIcon, alt: 'Node.js icon'},
    {name: 'React', icon: ReactIcon, alt: 'React icon'},
    {name: 'React Native', icon: ReactNativeIcon, alt: 'React Native icon'},
    {name: 'GitHub', icon: GitHubIcon, alt: 'GitHub icon'},
    {name: 'Redux', icon: ReduxIcon, alt: 'Redux icon'},
    {name: 'PostgreSQL', icon: PostgreSQLIcon, alt: 'PostgreSQL icon'},
    {name: 'Kotlin', icon: KotlinIcon, alt: 'Kotlin icon'},
    {name: 'Jetpack Compose', icon: JetPackIcon, alt: 'Jetpack Compose icon'},
  ]

  return (
    <section
      className="absolute top-20 sm:top-24 md:top-28 lg:top-32 xl:top-40 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-6xl overflow-x-hidden pb-8 sm:pb-12"
      aria-label="About page"
    >
      <header className="mb-4 sm:mb-6">
        <h1 className="head-text">
          Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Theo</span>
        </h1>
        <div className="mt-2 sm:mt-3 flex flex-col gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base">
          <p>
            A Front-end Engineer based in Los Angeles, with a passion for crafting fun and creative user-friendly mobile and web applications.
          </p>
        </div>
      </header>

      <section className="py-4 sm:py-5 flex flex-col" aria-label="Skills section">
        <h2 className="subhead-text">
          My <span className="blue-gradient_text font-semibold drop-shadow">Skills</span>
        </h2>

        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-center sm:justify-start">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="block-container w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20"
              aria-label={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.icon}
                  alt={skill.alt}
                  className="w-1/2 h-1/2 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="pb-0"
        id="experience"
        aria-label="Work experience section"
      >
        <h2 className="subhead-text mt-4 sm:mt-5">
          Work <span className="blue-gradient_text font-semibold drop-shadow">Experience</span>
        </h2>
        <div className="flex flex-col gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base">
          <p>
            I bring a myriad of experience from multiple industries and a fresh perspective to front-end development. Please see how diverse my work
            experience lends it self to being a well-rounded developer.
          </p>
        </div>
        <div className="mt-4 sm:mt-5 flex flex-col mb-4 sm:mb-5">
          {experiences.map((experience) => (
            <WorkExperience
              key={experience.company_name}
              experience={experience}
            />
          ))}
        </div>
      </section>
      <Education />

      <CTA />
    </section>
  )
}

export default About
