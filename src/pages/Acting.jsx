import Headshot1 from '../assets/images/headshot-center.jpg'
import Reel from '../videos/theo-breaux-reel.mp4'
import MZALOGO from '../assets/images/mza-logo.png'
import ROBBLOGO from '../assets/images/robb-logo.png'
import PodcastLogo from '../assets/images/ynmtb-logo.png'
import { actorImages } from '../pages/index.js'
import { useNavigate } from 'react-router-dom'
import { filmActingRoles, televisionActingRoles, theaterActingRoles } from '../constants'
import CTA from '../components/CTA.jsx'
import ActingCredit from '../components/ActingCredit.jsx'

const Acting = () => {
  const navigate = useNavigate()

  const handleImageClick = (imageName) => {
    navigate(`/image/${imageName}`)
  }

  return (
    <section className="absolute top-40 left-0 right-0 px-4 sm:px-8 lg:px-20 mx-auto max-w-6xl overflow-x-hidden">
      <img
        src={Headshot1}
        className="w-screen h-auto"
        alt="Headshot 5"
      />

      <div className="representation-container w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-10 px-4">
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
      </div>

      <div className="mt-5 flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <video
            controls
            autoPlay
            width="100%"
            className="video-reel-player"
            src={Reel}
          ></video>
        </div>
      </div>

      <div className="flex">
        {Object.keys(actorImages).map((imageName) => (
          <div
            key={imageName}
            className="w-1/4 p-2" // Adjust width as needed
          >
            <div className="relative w-full h-50 overflow-hidden">
              <img
                src={actorImages[imageName]}
                className="w-full h-full object-cover cursor-pointer"
                alt={imageName}
                onClick={() => handleImageClick(imageName)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center mt-5">
        <h1 className="text-4xl font-bold text-left m-0 p-0">
          Television <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h1>
        {televisionActingRoles.map((role) => {
          return <ActingCredit role={role} />
        })}

        <h1 className="text-4xl font-bold text-left mt-4">
          Film <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h1>
        {filmActingRoles.map((role) => {
          return <ActingCredit role={role} />
        })}
        <h1 className="text-4xl font-bold text-left mt-4">
          Theater <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
        </h1>
        {theaterActingRoles.map((role) => {
          return <ActingCredit role={role} />
        })}
      </div>
      <CTA />
    </section>
  )
}

export default Acting
