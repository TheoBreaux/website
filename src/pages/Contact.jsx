import { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import InstagramIcon from '../assets/icons/instagram-icon.svg'
import FacebookIcon from '../assets/icons/facebook-icon.svg'
import Resume from '../assets/icons/file-solid.svg'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Theo Breaux',
          from_email: form.email,
          to_email: 'theobreaux@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log('Email sent:', result.text)
        setIsLoading(false)
        showAlert({
          show: true,
          text: 'Message sent successfully',
          type: 'success',
        })
        setTimeout(() => {
          hideAlert()
          setCurrentAnimation('idle')
          setForm({ name: '', email: '', message: '' })
        }, 3000)
      })
      .catch((error) => {
        console.error('Email error:', error)
        setIsLoading(false)
        setCurrentAnimation('idle')
        showAlert({
          show: true,
          text: 'I didnt send the message, try again later.',
          type: 'danger',
        })
      })
  }

  const handleFocus = () => {
    setCurrentAnimation('walk')
  }

  const handleBlur = () => {
    setCurrentAnimation('idle')
  }

  return (
    <section className="absolute top-40 left-0 right-0 px-4 sm:px-8 lg:px-20 mx-auto max-w-6xl overflow-x-hidden">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <div className="flex items-center space-x-2">
          <a
            href="https://www.instagram.com/theobreaux/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="insta-icon"
              src={InstagramIcon}
              alt="Instagram Icon"
            />
          </a>
          <a
            href="https://www.facebook.com/BreauxTheo/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="insta-icon"
              src={FacebookIcon}
              alt="facebook Icon"
            />
          </a>
          <a
            href="../../public/files/acting-resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="insta-icon"
              src={Resume}
              alt="file Icon"
            />
          </a>
        </div>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight
            intensity={2.5}
            position={[0, 0, 1]}
          />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
