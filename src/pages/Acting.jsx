import Headshot1 from '../assets/images/headshot-center.jpg'
import Reel from '../videos/theo-breaux-reel.mp4'
import MZALOGO from '../assets/images/mza-logo.png'
import ROBBLOGO from '../assets/images/robb-logo.png'
import PodcastLogo from '../assets/images/ynmtb-logo.png'
import {actorImages} from '../pages/index.js'
import {useNavigate} from 'react-router-dom'
import {filmActingRoles, televisionActingRoles, theaterActingRoles} from '../constants'
import CTA from '../components/CTA.jsx'
import ActingCredit from '../components/ActingCredit.jsx'
import {useSEO} from '../hooks/useSEO'

const Acting = () => {
  const navigate = useNavigate()

  useSEO({
    title: 'Acting',
    description:
      'Theo Breaux acting portfolio featuring television credits (Shameless, 9-1-1, Code Black), film roles (Purple Hearts, Criminales), and theater performances. View headshots, reel, and representation.',
    type: 'ProfilePage',
    structuredData: {
      about: {
        '@type': 'Person',
        jobTitle: 'Actor',
        knowsAbout: ['Television Acting', 'Film Acting', 'Theater Acting'],
      },
    },
  })

  const handleImageClick = (imageName) => {
    navigate(`/image/${imageName}`)
  }

  return (
    <section
      className="absolute top-20 sm:top-24 md:top-28 lg:top-32 xl:top-40 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-6xl overflow-x-hidden pb-8 sm:pb-12"
      aria-label="Acting page"
    >
      <img
        src={Headshot1}
        className="w-full h-auto max-w-full"
        alt="Theo Breaux professional headshot"
        loading="eager"
      />

      <section
        className="representation-container w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-4 mt-4 sm:mt-6"
        aria-label="Representation and podcast"
      >
        {/* Representative Info */}
        <div className="representative w-64 sm:w-56 xs:w-48 flex-shrink-0">
          <a
            href="https://www.mza.agency/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="representative-logo-wrapper">
              <img
                src={MZALOGO}
                alt="michael zanuck logo"
                className="representative-logo w-full h-auto max-h-24 object-contain"
              />
            </div>
          </a>
        </div>

        {/* Second Representative */}
        <div className="representative w-64 sm:w-56 xs:w-48 flex-shrink-0">
          <a
            href="http://therobbcompany.com/home.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="representative-logo-wrapper">
              <img
                src={ROBBLOGO}
                className="representative-logo w-full h-auto max-h-24 object-contain"
                alt="robb company logo"
              />
            </div>
          </a>
        </div>

        {/* Podcast Section */}
        <div className="representative w-64 sm:w-56 xs:w-48 flex-shrink-0">
          <a
            href="https://youtube.com/@yourenotmytypebro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={PodcastLogo}
              alt="Theo Breaux Podcast Logo"
              className="representative-logo w-full h-auto max-h-24 object-contain"
            />
          </a>

          <div className="flex flex-col items-center sm:items-start"></div>
        </div>
      </section>

      <section className="mt-4 sm:mt-5 flex flex-col" aria-label="Acting reel">
        <div className="flex flex-col items-center justify-center">
          <video
            controls
            autoPlay
            width="100%"
            className="video-reel-player rounded-lg shadow-lg max-w-full"
            src={Reel}
            aria-label="Theo Breaux acting reel"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="flex flex-wrap mt-4 sm:mt-5" aria-label="Headshot gallery">
        {Object.keys(actorImages).map((imageName) => (
          <div
            key={imageName}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-1 sm:p-2"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={actorImages[imageName]}
                className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                alt={`Theo Breaux ${imageName} headshot`}
                onClick={() => handleImageClick(imageName)}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col justify-center mt-6 sm:mt-8" aria-label="Acting credits">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left m-0 p-0 mb-3 sm:mb-4">
          Television <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h2>
        {televisionActingRoles.map((role, index) => (
          <ActingCredit key={`tv-${index}-${role.title}`} role={role} />
        ))}

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mt-6 sm:mt-8 mb-3 sm:mb-4">
          Film <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h2>
        {filmActingRoles.map((role, index) => (
          <ActingCredit key={`film-${index}-${role.title}`} role={role} />
        ))}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mt-6 sm:mt-8 mb-3 sm:mb-4">
          Theater <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h2>
        {theaterActingRoles.map((role, index) => (
          <ActingCredit key={`theater-${index}-${role.title}`} role={role} />
        ))}
      </section>
      <CTA />
    </section>
  )
}

export default Acting
