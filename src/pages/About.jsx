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
import { experiences } from '../constants'

const About = () => {
  return (
    <section className="absolute top-40 left-0 right-0 px-4 sm:px-8 lg:px-20 mx-auto max-w-6xl overflow-x-hidden">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Theo</span>
      </h1>
      <div className="mt-0 flex flex-col gap-3 text-slate-500">
        <p>A Front-end Engineer based in Los Angeles, with a passion for crafting fun and creative user-friendly mobile and web applications.</p>
      </div>
      <div className="py-5 flex flex-col">
        <h1 className="subhead-text">
          My <span className="blue-gradient_text font-semibold drop-shadow">Skills</span>
        </h1>

        <div className="mt-10 flex flex-wrap gap-12">
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={JavaScriptIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={HtmlIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={CssIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={NodeIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={ReactIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={ReactNativeIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={GitHubIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={ReduxIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={PostgreSQLIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={KotlinIcon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={JetPackIcon}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="pb-0"
        id="experience"
      >
        <h1 className="subhead-text mt-5">
          Work <span className="blue-gradient_text font-semibold drop-shadow">Experience</span>
        </h1>
        <div className="flex flex-col gap-3 text-slate-500">
          <p>
            I bring a myriad of experience from multiple industries and a fresh perspective to front-end development. Please see how diverse my work
            experience lends it self to being a well-rounded developer.
          </p>
        </div>
        <div className="mt-5 flex flex-col mb-5">
          {experiences.map((experience) => (
            <WorkExperience
              key={experience.company_name}
              experience={experience}
            />
          ))}
        </div>
      </div>
      <Education />

      <CTA />
    </section>
  )
}

export default About
