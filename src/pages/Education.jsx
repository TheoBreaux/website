import { education } from '../constants';
import EducationExperience from '../components/EducationExperience';

const Education = () => {
  return (
    <section className="container">
      <h1 className="subhead-text">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Education
        </span>
      </h1>
      <div className="flex flex-col gap-3 text-slate-500">
        <p>
          During the COVID-19 pandemic, I transitioned from the hospitality and
          entertainment industries into the tech industry. I began with the Google
          Data Analytics Specialization on Coursera, where I discovered my
          passion for programming through the R Programming language. This
          interest propelled me into learning JavaScript, HTML, and CSS,
          deepening my commitment to software development.
        </p>
      </div>

      <div
        className="py-1"
        id="education"
      >
        <div className="flex flex-col justify-center mb-5">
          {education.map((education) => (
            <EducationExperience
              key={education.institution}
              education={education}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
