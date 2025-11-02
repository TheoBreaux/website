import { images } from './index.js'
import CTA from '../components/CTA.jsx'
import { useNavigate } from 'react-router-dom'
import KlaviyoNumbers from '../assets/images/omg-klaviyo-numbers.png'
import InstaFbNumbers from '../assets/images/omg-insta-fb-numbers.png'
import OMGMobile1 from '../assets/images/omg-mobile.png'
import OMGMobile2 from '../assets/images/omg-mobile-2.png'
import OMGMobile3 from '../assets/images/omg-mobile-3.png'
import Circuit1 from '../assets/images/circuit-mobile.png'
import Circuit2 from '../assets/images/circuit-mobile-2.png'
import OMGVideo from '../videos/omg-mobile-recording.mp4'
import DailyGiftyVideo from '../videos/daily-gifty-recording.mp4'

const Marketing = () => {
  const navigate = useNavigate()

  const handleImageClick = (imageName) => {
    navigate(`/image/${imageName}`)
  }

  return (
    <section className="absolute top-40 left-0 right-0 px-4 sm:px-8 lg:px-20 mx-auto max-w-6xl overflow-x-hidden">
      <h1 className="text-2xl">
        Digital <span className="blue-gradient_text font-semibold drop-shadow">Marketing Portfolio</span>
      </h1>
      <div className="mt-1 flex flex-col gap-3 text-slate-500">
        <p>
          Over the past few years, I have developed a strong proficiency in various technical and marketing areas, particularly using Klaviyo to
          manage email marketing campaigns for OMG Sportswear USA and Circuit Rave Gear. I excel at designing and implementing targeted email
          marketing campaigns that engage audiences and boost conversion rates. My skills include creating engaging content, strategically segmenting
          email lists, and analyzing campaign data to drive continuous improvement.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">
          Social <span className="blue-gradient_text font-semibold drop-shadow">Media</span> Campaigns
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4 p-6 rounded-lg shadow-lg bg-white">
          <img
            src={InstaFbNumbers}
            alt="Klaviyo campaign numbers"
            className="max-w-full h-auto rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick(InstaFbNumbers)}
          />
          <div className="flex gap-4">
            <button
              className="w-32 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"
              onClick={() => handleImageClick('InstaFbNumbers')}
            >
              View
            </button>
            <a
              href="../assets/images/omg-insta-fb-numbers.png"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              <button className="w-32 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff] ">
                Download
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center p-5">
          <div className="w-1/2 p-5">
            <img
              src={Circuit2}
              className="w-full h-auto object-cover rounded-lg cursor-pointer"
              alt="Circuit 2"
            />
          </div>

          <div className="w-1/2 p-5">
            <img
              src={Circuit1}
              className="w-full h-auto object-cover rounded-lg"
              alt="Circuit 1"
            />
          </div>

          <div className="w-1/2 p-5">
            <img
              src={OMGMobile1}
              className="w-full h-auto object-cover rounded-lg"
              alt="OMG Mobile 1"
            />
          </div>
          <div className="w-1/2 p-5">
            <img
              src={OMGMobile2}
              className="w-full h-auto object-cover rounded-lg"
              alt="OMG Mobile 2"
            />
          </div>
          <div className="w-full flex justify-between p-5 rounded-lg shadow-lg bg-white">
            <div>
              <video
                controls
                width="100%"
                className="video-reel-player cursor-pointer"
                src={OMGVideo}
              ></video>
            </div>
            <div>
              <video
                controls
                width="100%"
                className="video-reel-player cursor-pointer"
                src={DailyGiftyVideo}
              ></video>
            </div>
          </div>
        </div>

        <h3 className="subhead-text mt-5">
          Email <span className="blue-gradient_text font-semibold drop-shadow">Marketing</span> Campaigns
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4 p-6 rounded-lg shadow-lg bg-white">
          <img
            src={KlaviyoNumbers}
            alt="klaviyo campaign numbers"
            className="max-w-full h-auto rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleImageClick('KlaviyoNumbers')}
          />
          <div className="flex gap-4">
            <button
              className="w-32 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"
              onClick={() => handleImageClick('KlaviyoNumbers')}
            >
              View
            </button>
            <a
              href="../assets/images/omg-klaviyo-numbers.png"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              <button className="w-32 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 shadow-md bg-gradient-to-r from-[#00c6ff] to-[#0072ff] ">
                Download
              </button>
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap rounded-lg shadow-lg bg-white">
          {Object.keys(images).map((imageName) => (
            <div
              key={imageName}
              className="w-1/2 p-2"
            >
              <img
                src={images[imageName]}
                className="w-full h-auto object-cover rounded-lg cursor-pointer"
                alt={imageName}
                onClick={() => handleImageClick(imageName)}
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
