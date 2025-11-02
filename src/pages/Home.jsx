import { NavLink } from 'react-router-dom'
import HeadShot from '../assets/images/hero-image.png'

const Home = () => {
  return (
    <section className="absolute top-10 left-0 right-0 px-4 sm:px-8 lg:px-20 mx-auto max-w-6xl">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center flex-col space-y-8">
        {/* Hero Section */}
        <div className="text-center max-w-2xl">
          <h1
            className="mt-0 mb-0 text-5xl sm:text-6xl font-bold text-black tracking-wider"
            style={{ fontFamily: "'Engagement', cursive" }}
          >
            Theo Breaux
          </h1>
          <p className="mt-2 text-lg text-black">Mobile Developer · Actor · Podcaster</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Building Apps, Telling Stories, Taking the Mic</p>
        </div>

        {/* Profile Image */}
        <img
          src={HeadShot}
          alt="Theo Breaux headshot – Mobile Developer, Actor, and Podcaster"
          className="w-[90%] sm:w-[65%] max-w-lg h-auto rounded-2xl shadow-xl object-cover"
        />

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4 pb-4">
          <NavLink
            to="/projects"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Home
