import {images} from './index.js'
import CTA from '../components/CTA.jsx'
import {useNavigate} from 'react-router-dom'
import KlaviyoNumbers from '../assets/images/omg-klaviyo-numbers.png'
import InstaFbNumbers from '../assets/images/omg-insta-fb-numbers.png'
import OMGMobile1 from '../assets/images/omg-mobile.png'
import OMGMobile2 from '../assets/images/omg-mobile-2.png'
import OMGMobile3 from '../assets/images/omg-mobile-3.png'
import Circuit1 from '../assets/images/circuit-mobile.png'
import Circuit2 from '../assets/images/circuit-mobile-2.png'
import OMGVideo from '../videos/omg-mobile-recording.mp4'
import DailyGiftyVideo from '../videos/daily-gifty-recording.mp4'
import {useSEO} from '../hooks/useSEO'

const Marketing = () => {
  const navigate = useNavigate()

  useSEO({
    title: 'Digital Marketing',
    description:
      'Theo Breaux\'s digital marketing portfolio featuring Klaviyo email campaigns, social media strategies, and marketing analytics for OMG Sportswear USA and Circuit Rave Gear.',
    type: 'PortfolioPage',
    structuredData: {
      about: {
        '@type': 'CreativeWork',
        creator: {
          '@type': 'Person',
          name: 'Theo Breaux',
        },
      },
    },
  })

  const handleImageClick = (imageName) => {
    navigate(`/image/${imageName}`)
  }

  return (
    <section
      className="absolute top-20 sm:top-24 md:top-28 lg:top-32 xl:top-40 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-6xl overflow-x-hidden pb-8 sm:pb-12"
      aria-label="Digital marketing portfolio"
    >
      <header className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl head-text">
          Digital <span className="blue-gradient_text font-semibold drop-shadow">Marketing Portfolio</span>
        </h1>
        <div className="mt-2 sm:mt-3 flex flex-col gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base">
          <p>
            Over the past few years, I have developed a strong proficiency in various technical and marketing areas, particularly using Klaviyo to
            manage email marketing campaigns for OMG Sportswear USA and Circuit Rave Gear. I excel at designing and implementing targeted email
            marketing campaigns that engage audiences and boost conversion rates. My skills include creating engaging content, strategically segmenting
            email lists, and analyzing campaign data to drive continuous improvement.
          </p>
        </div>
      </header>

      <div className="py-6 sm:py-8 md:py-10 flex flex-col">
        <h2 className="subhead-text mb-4 sm:mb-6">
          Social <span className="blue-gradient_text font-semibold drop-shadow">Media</span> Campaigns
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 p-4 sm:p-6 rounded-lg shadow-lg bg-white">
          <img
            src={InstaFbNumbers}
            alt="Social media campaign analytics for Instagram and Facebook"
            className="max-w-full h-auto rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick(InstaFbNumbers)}
            loading="lazy"
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              className="w-full sm:w-32 px-4 py-2 text-sm sm:text-base text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff] transition-colors"
              onClick={() => handleImageClick('InstaFbNumbers')}
              aria-label="View social media campaign analytics"
            >
              View
            </button>
            <a
              href="../assets/images/omg-insta-fb-numbers.png"
              target="_blank"
              download
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-32 px-4 py-2 text-sm sm:text-base text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff] transition-colors">
                Download
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center p-3 sm:p-5 gap-2 sm:gap-4">
          <div className="w-full sm:w-1/2 p-2 sm:p-5">
            <img
              src={Circuit2}
              className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              alt="Circuit Rave Gear mobile marketing campaign 2"
              loading="lazy"
            />
          </div>

          <div className="w-full sm:w-1/2 p-2 sm:p-5">
            <img
              src={Circuit1}
              className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              alt="Circuit Rave Gear mobile marketing campaign 1"
              loading="lazy"
            />
          </div>

          <div className="w-full sm:w-1/2 p-2 sm:p-5">
            <img
              src={OMGMobile1}
              className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              alt="OMG Sportswear mobile marketing campaign 1"
              loading="lazy"
            />
          </div>
          <div className="w-full sm:w-1/2 p-2 sm:p-5">
            <img
              src={OMGMobile2}
              className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              alt="OMG Sportswear mobile marketing campaign 2"
              loading="lazy"
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between gap-4 p-3 sm:p-5 rounded-lg shadow-lg bg-white">
            <div className="w-full sm:w-1/2">
              <video
                controls
                width="100%"
                className="video-reel-player cursor-pointer rounded-lg"
                src={OMGVideo}
                aria-label="OMG Sportswear marketing video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-full sm:w-1/2">
              <video
                controls
                width="100%"
                className="video-reel-player cursor-pointer rounded-lg"
                src={DailyGiftyVideo}
                aria-label="Daily Gifty marketing video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <h2 className="subhead-text mt-6 sm:mt-8 mb-4 sm:mb-6">
          Email <span className="blue-gradient_text font-semibold drop-shadow">Marketing</span> Campaigns
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 p-4 sm:p-6 rounded-lg shadow-lg bg-white">
          <img
            src={KlaviyoNumbers}
            alt="Klaviyo email marketing campaign analytics and performance metrics"
            className="max-w-full h-auto rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleImageClick('KlaviyoNumbers')}
            loading="lazy"
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              className="w-full sm:w-32 px-4 py-2 text-sm sm:text-base text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff] transition-colors"
              onClick={() => handleImageClick('KlaviyoNumbers')}
              aria-label="View Klaviyo email campaign analytics"
            >
              View
            </button>
            <a
              href="../assets/images/omg-klaviyo-numbers.png"
              target="_blank"
              download
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-32 px-4 py-2 text-sm sm:text-base text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff] transition-colors">
                Download
              </button>
            </a>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 flex flex-wrap rounded-lg shadow-lg bg-white gap-2 sm:gap-4">
          {Object.keys(images).map((imageName) => (
            <div
              key={imageName}
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <img
                src={images[imageName]}
                className="w-full h-auto object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                alt={`Email marketing campaign ${imageName}`}
                onClick={() => handleImageClick(imageName)}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default Marketing
