import {education} from '../constants'
import EducationExperience from '../components/EducationExperience'
import {useSEO} from '../hooks/useSEO'

const Education = () => {
  useSEO({
    title: 'Education',
    description:
      "Theo Breaux's educational background including Lake Forest College, Meta Front-End Developer Certification, Per Scholas React Developer Certification, and Google Data Analytics Specialization.",
    type: 'AboutPage',
    canonical: 'https://theobreaux.com/education',
    image: typeof window !== 'undefined' ? window.location.origin + '/src/assets/images/hero-image.png' : '',
    imageAlt: 'Theo Breaux education and certifications',
  })

  return (
    <section
      className="container"
      aria-label="Education section"
    >
      <header className="mb-4 sm:mb-6">
        <h2 className="subhead-text">
          My <span className="blue-gradient_text font-semibold drop-shadow">Education</span>
        </h2>
        <div className="flex flex-col gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base mt-2 sm:mt-3">
          <p>
            During the COVID-19 pandemic, I transitioned from the hospitality and entertainment industries into technology. I began my journey with
            the Google Data Analytics Professional Certificate on Coursera, where I discovered a passion for programming through R. That experience
            sparked a deeper interest in software development, leading me to learn JavaScript, HTML, and CSS and ultimately pursue a career as a
            software engineer.
          </p>
        </div>
      </header>

      <div
        className="py-2 sm:py-3"
        id="education"
      >
        <div className="flex flex-col justify-center mb-4 sm:mb-5">
          {education.map((edu) => (
            <EducationExperience
              key={edu.institution}
              education={edu}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
