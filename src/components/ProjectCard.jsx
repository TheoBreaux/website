import {FaGlobe, FaApple, FaGooglePlay, FaGithub, FaCheck} from 'react-icons/fa'

const ProjectCard = ({project}) => {
  const links = [
    {href: project.appStore, label: 'App Store', icon: FaApple},
    {href: project.googlePlay, label: 'Google Play', icon: FaGooglePlay},
    {href: project.link, label: 'Website', icon: FaGlobe},
    {href: project.gitHubLink, label: 'GitHub', icon: FaGithub},
  ].filter((link) => link.href)

  return (
    <article
      className="rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className="flex flex-wrap items-center gap-3 p-5 sm:p-6 border-b border-slate-100">
        {project.logo ? (
          <img
            src={project.logo}
            alt={`${project.name} app icon`}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shadow-card"
            loading="lazy"
          />
        ) : (
          <div className="block-container w-10 h-10 sm:w-12 sm:h-12">
            <div className={`btn-back rounded-xl ${project.theme}`} />
            <div className="btn-front rounded-xl" />
          </div>
        )}
        <div className="flex flex-col">
          <h2 className="text-xl sm:text-2xl font-bold text-black" itemProp="name">
            {project.name}
          </h2>
          {project.type && (
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-600">
              {project.type}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-6">
        <p className="text-sm sm:text-base text-slate-500" itemProp="description">
          {project.description}
        </p>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-black mb-3">
            <span aria-hidden="true">📱</span> Screenshots
          </h3>
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
              {project.screenshots.map((src, index) => (
                <img
                  key={`${project.name}-shot-${index}`}
                  src={src}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="h-64 sm:h-80 w-auto rounded-xl border border-slate-200 object-cover snap-start shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={`${project.name}-placeholder-${i}`}
                  className="h-56 sm:h-72 w-32 sm:w-40 shrink-0 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-center px-2"
                >
                  <span className="text-xs text-slate-400">Screenshot coming soon</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.techStack && project.techStack.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-black mb-3">Tech Stack</h3>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={`${project.name}-${tech}`}
                    className="rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium px-3 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-black mb-3">Highlights</h3>
              <ul className="flex flex-col gap-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={`${project.name}-${highlight}`}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <FaCheck className="mt-1 shrink-0 text-green-500" size={12} aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {links.length > 0 && (
          <nav className="flex flex-wrap gap-3 pt-1" aria-label={`${project.name} links`}>
            {links.map(({href, label, icon: Icon}) => (
              <a
                key={`${project.name}-${label}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                aria-label={`${project.name} - ${label}`}
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
