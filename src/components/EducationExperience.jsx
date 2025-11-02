import { useState, useEffect } from 'react'

const EducationExperience = ({ education }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="mt-5">
      <h3 className="text-black text-xl font-semibold">{education.institution}</h3>
      <p className="text-black-500 font-medium font-base">{education.location}</p>
      <p className="text-black-500 font-medium font-base">{education.certification}</p>
      {education.points && (
        <p className=" text-slate-500 font-medium font-base">
          <span className="font-bold text-xl blue-gradient_text drop-shadow">Achievements: </span> {education.points}
        </p>
      )}
      <hr className="mt-5 shadow-lg" />
    </div>
  )
}

export default EducationExperience
