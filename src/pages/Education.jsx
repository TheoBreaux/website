import {education} from '../constants'
import EducationExperience from '../components/EducationExperience'
import {useSEO} from '../hooks/useSEO'

const Education = () => {
  useSEO({
    title: 'Education',
    description:
      'Theo Breaux\'s educational background including Lake Forest College, Meta Front-End Developer Certification, Per Scholas React Developer Certification, and Google Data Analytics Specialization.',
    type: 'AboutPage',
    structuredData: {
      about: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
      },
    },
  })

  return (
    <section className="container" aria-label="Education section">
      <header className="mb-4 sm:mb-6">
        <h2 className="subhead-text">
          My{' '}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Education
          </span>
        </h2>
        <div className="flex flex-col gap-2 sm:gap-3 text-slate-500 text-sm sm:text-base mt-2 sm:mt-3">
          <p>
            During the COVID-19 pandemic, I transitioned from the hospitality and
            entertainment industries into the tech industry. I began with the Google
            Data Analytics Specialization on Coursera, where I discovered my
            passion for programming through the R Programming language. This
            interest propelled me into learning JavaScript, HTML, and CSS,
            deepening my commitment to software development.
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

export default Education;
