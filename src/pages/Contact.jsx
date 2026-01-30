import {useState, useCallback, useMemo} from 'react'
import emailjs from '@emailjs/browser'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import {useSEO} from '../hooks/useSEO'

// Constants
const CONTACT_INFO = {
  name: 'Theo Breaux',
  email: 'theobreaux@gmail.com',
  title: 'Mobile Developer, Actor, Podcaster',
}

const ALERT_TIMEOUT = 3000
const INITIAL_FORM_STATE = {name: '', email: '', message: ''}

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE)
  const [isLoading, setIsLoading] = useState(false)
  const {alert, showAlert, hideAlert} = useAlert()

  // SEO optimization
  useSEO({
    title: 'Contact',
    description:
      'Get in touch with Theo Breaux - Mobile Developer, Actor, and Podcaster. Send a message for collaboration opportunities, acting inquiries, or podcast appearances.',
    type: 'ContactPage',
    structuredData: {
      mainEntity: {
        '@type': 'Person',
        name: CONTACT_INFO.name,
        jobTitle: CONTACT_INFO.title.split(', '),
        email: CONTACT_INFO.email,
        url: window.location.origin,
      },
    },
  })

  // Memoize handleChange to prevent unnecessary re-renders
  const handleChange = useCallback((e) => {
    const {name, value} = e.target
    setForm((prevForm) => ({...prevForm, [name]: value}))
  }, [])

  // Reset form helper
  const resetForm = useCallback(() => {
    setForm(INITIAL_FORM_STATE)
  }, [])

  // Memoize handleSubmit to prevent unnecessary re-renders
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setIsLoading(true)

      try {
        const result = await emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: CONTACT_INFO.name,
            from_email: form.email,
            to_email: CONTACT_INFO.email,
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )

        if (import.meta.env.DEV) {
          console.log('Email sent:', result.text)
        }
        showAlert({
          show: true,
          text: 'Message sent successfully',
          type: 'success',
        })

        setTimeout(() => {
          hideAlert()
          resetForm()
        }, ALERT_TIMEOUT)
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error('Email error:', error)
        }
        showAlert({
          show: true,
          text: "I didn't send the message, try again later.",
          type: 'danger',
        })
      } finally {
        setIsLoading(false)
      }
    },
    [form, showAlert, hideAlert, resetForm]
  )

  // Form fields configuration
  const formFields = useMemo(
    () => [
      {
        id: 'contact-name',
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'John',
        value: form.name,
        autoComplete: 'name',
        ariaLabel: 'Your name',
      },
      {
        id: 'contact-email',
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'John@gmail.com',
        value: form.email,
        autoComplete: 'email',
        ariaLabel: 'Your email address',
      },
      {
        id: 'contact-message',
        name: 'message',
        type: 'textarea',
        label: 'Your Message',
        placeholder: 'Let me know how I can help you!',
        value: form.message,
        rows: 4,
        ariaLabel: 'Your message',
      },
    ],
    [form]
  )

  return (
    <section
      className="absolute top-20 sm:top-24 md:top-28 lg:top-32 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-6xl overflow-x-hidden pb-8 sm:pb-12"
      aria-label="Contact form section"
    >
      {alert.show && <Alert {...alert} />}
      <article className="flex-1 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto flex flex-col">
        <header className="mb-4 sm:mb-6">
          <h1 className="head-text mb-2 sm:mb-3">Get In Touch</h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Have a project in mind, an acting opportunity, or want to collaborate? Send me a message and I'll get back to you as soon as possible.
          </p>
        </header>

        <form
          className="w-full flex flex-col gap-5 sm:gap-6 md:gap-7 mt-2 sm:mt-4"
          onSubmit={handleSubmit}
          aria-label="Contact form"
          noValidate
        >
          {formFields.map((field) => (
            <div
              key={field.id}
              className="form-group w-full"
            >
              <label
                htmlFor={field.id}
                className="text-black-500 font-semibold block text-sm sm:text-base mb-1 sm:mb-2"
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  className="textarea text-sm sm:text-base resize-y min-h-[100px] sm:min-h-[120px]"
                  placeholder={field.placeholder}
                  required
                  rows={field.rows}
                  value={field.value}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label={field.ariaLabel}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  className="input text-sm sm:text-base"
                  placeholder={field.placeholder}
                  required
                  value={field.value}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label={field.ariaLabel}
                  autoComplete={field.autoComplete}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="btn text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8 mt-2 sm:mt-4 transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={isLoading ? 'Sending message' : 'Submit contact form'}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </article>
    </section>
  )
}

export default Contact
