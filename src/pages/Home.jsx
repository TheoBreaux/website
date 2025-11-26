import {NavLink} from 'react-router-dom'
import {useEffect} from 'react'
import HeadShot from '../assets/images/hero-image.png'
import {useSEO} from '../hooks/useSEO'

const Home = () => {
  useSEO({
    title: 'Home',
    description:
      'Theo Breaux - Mobile Developer, Actor, and Podcaster. Building apps, telling stories, and taking the mic. View my portfolio, projects, and acting credits.',
    type: 'Person',
    structuredData: {
      image: window.location.origin + '/src/assets/images/hero-image.png',
      sameAs: [
        'https://www.instagram.com/theobreaux/',
        'https://www.facebook.com/BreauxTheo/',
        'https://youtube.com/@yourenotmytypebro',
      ],
    },
  })

  return (
    <section
      className="absolute top-10 sm:top-12 md:top-16 lg:top-20 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-6xl pb-8 sm:pb-12"
      aria-label="Home page"
    >
      <div className="absolute top-20 sm:top-24 md:top-28 lg:top-32 left-0 right-0 z-10 flex items-center justify-center flex-col space-y-6 sm:space-y-8">
        {/* Hero Section */}
        <header className="text-center max-w-2xl px-4">
          <h1
            className="mt-0 mb-0 text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-wider"
            style={{fontFamily: "'Engagement', cursive"}}
          >
            Theo Breaux
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-black">
            Mobile Developer · Actor · Podcaster
          </p>
          <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">
            Building Apps, Telling Stories, Taking the Mic
          </p>
        </header>

        {/* Profile Image */}
        <img
          src={HeadShot}
          alt="Theo Breaux headshot – Mobile Developer, Actor, and Podcaster"
          className="w-[90%] sm:w-[75%] md:w-[65%] max-w-lg h-auto rounded-2xl shadow-xl object-cover"
          loading="eager"
        />

        {/* Call-to-Action Buttons */}
        <nav
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-4 px-4 w-full sm:w-auto items-center"
          aria-label="Main navigation"
        >
          <NavLink
            to="/projects"
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto text-center"
            aria-label="View my projects"
          >
            View My Work
          </NavLink>
          <NavLink
            to="/contact"
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-800 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 w-full sm:w-auto text-center"
            aria-label="Contact me"
          >
            Contact Me
          </NavLink>
        </nav>
      </div>
    </section>
  )
}

export default Home
