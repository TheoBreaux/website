import { useState, useEffect } from 'react'

const WorkExperience = ({ experience }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`flex flex-col w-full p-2 ${isVisible ? 'fly-in-right' : ''}`}>
      <h3 className="text-black text-xl font-semibold">{experience.title}</h3>

      <p className="text-black-500 font-medium font-base">{experience.company_name}</p>
      <p className="text-black-500 font-medium font-base">{experience.date}</p>

      <ul className="my-5 list-disc ml-10 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black-500/50 font-normal pl-1 text-small"
          >
            {point}
          </li>
        ))}
      </ul>
      <hr className="mt-5 shadow-lg" />
    </div>
  )
}

export default WorkExperience
