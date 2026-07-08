export const experiences = [
  {
    title: 'Mobile Application Developer',
    company_name: 'AthletesTogether',
    date: 'Jun 2024 - Present',
    points: [
      'Developed and maintained a cross-platform React Native application using Expo, contributing to 5+ production releases across iOS and Android while delivering new features and ongoing platform improvements.',
      'Developed animated mobile experiences using the React Native Animated API to enhance usability across key user workflows.',
      'Implemented audio and video playback using Expo AV and expo-video, including shared player logic and progress tracking.',
      'Collaborated cross-functionally with design and backend teams to integrate APIs and deliver features aligned with product requirements.',
      'Contributed to a multi-step Playbook feature with dynamic state transitions that streamlined complex user workflows.',
      'Implemented subscription billing using RevenueCat and integrated Apple and Google in-app purchase systems to support premium feature access across iOS and Android.',
    ],
  },
  {
    title: 'Founding Software Engineer (Independent Saas Project)',
    company_name: 'Go Dutch!',
    date: 'Jan 2023 - Present (Part-Time Founder Project)',
    points: [
      'Designed, built, launched, and maintained a production React Native application on the Apple App Store and Google Play Store, owning the full development lifecycle from architecture through deployment.',
      'Managed iOS and Android release pipelines, including certificates, provisioning profiles, App Store review requirements, Play Store releases, and production deployments.',
      'Implemented subscription billing using RevenueCat, enabling recurring revenue and premium feature access across iOS and Android.',
      'Designed and implemented shared payment workflows that simplified bill-splitting and item assignment for group dining experiences.',
      'Diagnosed and resolved production issues, improving app stability and user experience.',
    ],
  },
  {
    title: 'Software / Client Solutions Engineer',
    company_name: 'Blindsheep Digital',
    date: 'Jan 2024 - Jul 2025',
    points: [
      'Designed and maintained responsive websites using WordPress, leveraging themes and custom plugins to meet client requirements.',
      'Integrated custom HTML, CSS, and JavaScript into WordPress templates to enhance functionality and user engagement.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Aayats',
    date: 'Jan 2024 - Feb 2024',
    points: [
      'Developed mobile application features using the Flutter framework for iOS and Android.',
      'Collaborated with team members on feature design and implementation.',
    ],
  },
  {
    title: 'Executive Asst – Film & TV Distribution',
    company_name: 'Joe Patrick Consulting, LLC (TV/Film Distribution)',
    date: 'Jan 2024 - March 2025',
    points: [
      'Provided high-level administrative support to a senior executive in the film/TV distribution industry.',
      'Developed and maintain comprehensive databases to support strategic decisions, demonstrating strong organizational and analytical skills.',
      'Streamlined administrative processes, improving efficiency in distribution operations.',
      'Coordinated complex schedules and manage communications across global time zones.',
    ],
  },
  {
    title: 'Email Marketing Specialist',
    company_name: 'OMG Sportswear USA',
    date: 'Apr 2021 - Jan 2024',
    points: [
      'Developed, executed, and maintained targeted email and SMS campaigns using Klaviyo’s drag-and-drop editor and HTML/CSS, ensuring consistent brand messaging and design that enhanced brand recognition.',
      'Utilized advanced segmentation and personalization features to deliver customized email content, improving engagement and customer retention.',
      'Created and managed automated email workflows for customer lifecycle marketing, including welcome series, cart abandonment, and post-purchase follow-ups.',
      'Conducted A/B testing on automations to improve engagement and open rates for SMS and email campaigns, resulting in higher customer interaction.',
      'Managed and optimized Google Ads campaigns to drive targeted traffic and increase conversions, successfully integrating paid search strategies with email marketing efforts.',
    ],
  },
  {
    title: 'COO / Digital Marketing Specialist',
    company_name: 'Circuit Rave Gear',
    date: 'Dec 2018 - Dec 2021',
    points: [
      'Founded and managed two eCommerce sites, achieving over $700,000 in sales year-to-date.',
      'Executed, monitored, and analyzed email campaign performance, leading to improved open rates, click-through rates, conversion rates, and ROI.',
      'Developed engaging, targeted email and SMS campaigns using Klaviyo’s drag-and-drop editor and HTML/CSS, enhancing customer engagement and retention.',
      'Leveraged data insights to make informed recommendations for campaign improvements, resulting in more effective marketing strategies.',
    ],
  },
]

export const projects = [
  {
    theme: 'btn-back-orange',
    name: 'AthletesTogether',
    logo: '/screenshots/athletestogether-icon.png',
    type: 'Mobile App',
    description:
      'AthletesTogether is a cross-platform mobile app built with React Native and Expo. I contributed to core user flows and navigation, audio/video playback, animated UI (Animated API + Lottie), and RevenueCat subscription screens—delivering a smooth, high-quality experience across iOS and Android.',
    techStack: [
      'React Native',
      'Expo',
      'EAS',
      'React Navigation',
      'Redux',
      'Redux-Saga',
      'RevenueCat',
      'expo-video',
      'Lottie',
    ],
    highlights: [
      'Production application shipped to iOS and Android',
      'Contributed to 5+ production releases',
      'Audio & video playback with shared player logic',
      'Animated UI built with the React Native Animated API',
    ],
    screenshots: [
      '/screenshots/athletestogether-1.png',
      '/screenshots/athletestogether-2.png',
      '/screenshots/athletestogether-3.png',
      '/screenshots/athletestogether-4.png',
      '/screenshots/athletestogether-5.png',
      '/screenshots/athletestogether-6.png',
    ],
    link: 'https://athletestogether.com',
    appStore: 'https://apps.apple.com/us/app/athletestogether/id6751681272',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.athletestogether.ios4',
    gitHubLink: '',
  },
  {
    theme: 'btn-back-green',
    name: 'Go Dutch!',
    logo: '/screenshots/godutch-icon.png',
    type: 'Mobile App',
    description:
      'Go Dutch! is a collaborative mobile app that simplifies splitting restaurant bills among groups. It parses receipts, manages diners, and distributes costs with minimal effort—supporting shared items, birthday bill coverage, and automated payment notifications. It also includes a restaurant-partner side for managing listings, coupons, and messaging diners.',
    techStack: ['React Native', 'Expo', 'Redux Toolkit', 'RevenueCat', 'PostgreSQL', 'Node.js'],
    highlights: [
      'Published to both the App Store and Google Play',
      'Receipt scanning and parsing',
      'Group bill splitting and item assignment',
      'Subscription billing with RevenueCat',
      'Dual-sided app: consumer + restaurant partner portal',
    ],
    screenshots: [
      '/screenshots/godutch-1.png',
      '/screenshots/godutch-3.png',
      '/screenshots/godutch-2.png',
      '/screenshots/godutch-6.png',
      '/screenshots/godutch-4.png',
      '/screenshots/godutch-5.png',
    ],
    link: 'https://godutchmobile.com',
    appStore: 'https://apps.apple.com/us/app/go-dutch-restaurant-bills/id6756895910',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.theobreaux.godutch2025',
    gitHubLink: 'https://github.com/TheoBreaux/go-dutch-react-native',
  },
  {
    theme: 'btn-back-blue',
    name: 'Split Master',
    logo: '/screenshots/splitmaster-icon.png',
    type: 'Mobile Game',
    description:
      'Split Master is the bill-splitting game that’s actually fun. Tap falling food, add the prices, and match the exact total. Dodge gift cards and distractors, nail the target for a JACKPOT—and get sharper at mental math without the homework.',
    techStack: [
      'React Native',
      'Expo',
      'EAS',
      'React Navigation',
      'Supabase',
      'RevenueCat',
      'AdMob',
      'Lottie',
    ],
    highlights: [
      'Published mobile game on iOS & Android',
      'Real-time falling-item game loop with levels, combos & scoring',
      'In-app purchases via RevenueCat',
      'High score tracking with pause/resume state',
    ],
    screenshots: [
      '/screenshots/splitmaster-1.png',
      '/screenshots/splitmaster-2.png',
      '/screenshots/splitmaster-3.png',
      '/screenshots/splitmaster-4.png',
      '/screenshots/splitmaster-5.png',
      '/screenshots/splitmaster-6.png',
    ],
    link: 'https://godutchmobile.com/split-master',
    appStore: 'https://apps.apple.com/us/app/splitmaster-game/id6759226539',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.splitmaster.app',
    gitHubLink: '',
  },
  {
    theme: 'btn-back-red',
    name: 'By The Glass',
    logo: '/screenshots/bytheglass-icon.png',
    type: 'Web App',
    description:
      'By The Glass is a B2B SaaS web app for wine bars and restaurants. Guests scan a QR code, choose their taste preferences, and get instant personalized wine recommendations—no app download required. Venues customize their branding, upload their wine list, and generate a branded QR code, with an admin dashboard to manage it all.',
    techStack: [
      'React',
      'Vite',
      'React Router',
      'Recharts',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS S3',
    ],
    highlights: [
      'QR-code guest access with no app download',
      'Preference-based wine recommendation engine',
      'Per-venue custom branding & wine lists',
      'Multi-tenant SaaS: per-venue admin accounts & free trials',
    ],
    screenshots: [
      '/screenshots/bytheglass-1.png',
      '/screenshots/bytheglass-2.png',
      '/screenshots/bytheglass-3.png',
    ],
    link: 'https://bytheglass.app',
    appStore: '',
    googlePlay: '',
    gitHubLink: '',
  },
  {
    theme: 'btn-back-orange',
    name: 'NutriGoalTracker',
    type: 'Web App',
    description:
      'NutriGoalTracker turns a fitness goal into an actionable daily nutrition plan. It calculates personalized calorie and macronutrient targets, then lets users search a large third-party food API to log meals and watch their remaining daily allowance update in real time. I built the front end end-to-end — Redux Toolkit state management, client-side routing, and API integration — to keep the logging flow fast and frictionless.',
    techStack: ['React', 'Vite', 'Redux Toolkit', 'React Router', 'Axios'],
    highlights: [
      'Calorie and macronutrient calculator',
      'Extensive API-backed food database',
      'Real-time daily allowance tracking',
    ],
    screenshots: [
      '/screenshots/nutrigoaltracker-1.png',
      '/screenshots/nutrigoaltracker-2.png',
      '/screenshots/nutrigoaltracker-3.png',
    ],
    logo: '/screenshots/nutrigoaltracker-icon.png',
    link: 'https://nutri-goal-tracker.vercel.app',
    appStore: '',
    googlePlay: '',
    gitHubLink: 'https://github.com/TheoBreaux/nutri-goal-tracker',
  },
  {
    theme: 'btn-back-pink',
    name: 'Save the Universe! Game',
    type: 'Web Game',
    description:
      'Save the Universe! is a turn-based browser battle game where you command a starship and fend off an alien invasion one attack at a time. Built from scratch in vanilla JavaScript, it uses event-driven game logic and DOM manipulation to track hull health, randomize enemy strikes, and drive win/lose states — a playful project that shows off core JavaScript fundamentals with no framework in sight.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    highlights: [
      'Interactive browser-based game',
      'Vibrant, animated UI',
      'Deployed on Vercel',
    ],
    screenshots: [
      '/screenshots/savetheuniverse-1.png',
      '/screenshots/savetheuniverse-2.png',
      '/screenshots/savetheuniverse-3.png',
    ],
    logo: '/screenshots/savetheuniverse-icon.png',
    link: 'https://sba-308-h-save-the-universe.vercel.app',
    appStore: '',
    googlePlay: '',
    gitHubLink: 'https://github.com/TheoBreaux/SBA_308H_Save_the_Universe',
  },
]

export const education = [
  {
    institution: 'Lake Forest College ',
    location: 'Lake Forest, IL',
    certification: 'Bachelor of Arts in Marketing/Advertising',
    points: ['Honors Graduate'],
  },
  {
    institution: 'Calbright College ',
    location: 'Remote',
    certification: 'Certificate of Competency in Data Analytics',
  },
  {
    institution: 'Meta',
    location: 'Remote',
    certification: 'Front-End Developer Certification',
    points: [
      'Completed comprehensive job-ready training in front-end development, covering HTML, CSS, JavaScript, React, version control, and UI/UX design principles. Gained proficiency in creating responsive and interactive web applications, implementing modern frameworks, optimizing website performance, and adhering to best practices in web accessibility and cross-browser compatibility. Developed skills in problem-solving, debugging, and collaborating on software projects using industry-standard tools and workflows',
    ],
  },

  {
    institution: 'Per Scholas',
    location: 'Remote',
    certification: 'React Developer Certification',
    points: [],
  },
  {
    institution: 'Google/Coursera',
    location: 'Remote',
    certification: 'Google Data Analytics Specialization',
    points: [
      'Completed extensive job-ready training in data analytics encompassing data analysis, data cleaning, data visualization, R Programming, calculations and analysis in SQL and spreadsheets, allowing for data-driven decision making, and the interpretation and communicating of data analytics findings through effective presentations.',
    ],
  },
]

export const televisionActingRoles = [
  {
    title: 'NCIS: Origins',
    role: 'Co-Star',
    productionCompany: 'CBS',
    clipName: '',
  },
  {
    title: 'Shark Tank',
    role: 'Model',
    productionCompany: 'ABC',
    clipName: '',
  },
  {
    title: 'Shameless',
    role: 'Co-star',
    productionCompany: 'Showtime',
    clipName: '/shameless.mp4',
  },
  {
    title: '9-1-1',
    role: 'Co-star',
    productionCompany: 'FOX',
    clipName: '/nine-one-one.mp4',
  },
  {
    title: 'Euphoria',
    role: 'Co-star',
    productionCompany: 'HBO',
    clipName: '',
  },
  {
    title: 'Animal Kingdom',
    role: 'Co-star',
    productionCompany: 'TNT Network',
    clipName: '',
  },
  {
    title: 'Escape The Night',
    role: 'Guest Star',
    productionCompany: 'YouTube Red',
    clipName: '/escape-the-night.mp4',
  },
  {
    title: 'Unsolved: Murders of Tupac/B.I.G. ',
    role: 'Co-star',
    productionCompany: 'USA Network',
    clipName: '/tupac.mp4',
  },
  {
    title: 'Brooklyn Nine-Nine',
    role: 'Co-star',
    productionCompany: 'FOX',
    clipName: '',
  },
  {
    title: 'Code Black',
    role: 'Recurring',
    productionCompany: 'CBS',
    clipName: '/code-black.mp4',
  },
  {
    title: 'Days of Our Lives',
    role: 'Co-star',
    productionCompany: 'Corday Prod.',
    clipName: '/days-of-lives.mp4',
  },
  {
    title: 'Then What Happened?',
    role: 'Series Regular',
    productionCompany: 'TWH Prod.',
    clipName: '',
  },

  {
    title: "It's Always Sunny in Philadelphia",
    role: 'Co-Star',
    productionCompany: 'FX',
    clipName: '',
  },

  {
    title: 'Chelsea Lately',
    role: 'Co-Star / Model',
    productionCompany: 'E! Network',
    clipName: '',
  },
  {
    title: 'The Arsenio Hall Show',
    role: 'Co-Star',
    productionCompany: 'CBS',
    clipName: '',
  },
  {
    title: 'NCIS: Los Angeles',
    role: 'Co-Star',
    productionCompany: 'CBS',
    clipName: '',
  },
  {
    title: 'The Mentalist',
    role: 'Co-Star',
    productionCompany: 'CBS',
    clipName: '',
  },

  {
    title: 'Southland',
    role: 'Co-Star',
    productionCompany: 'NBC',
    clipName: '',
  },
  {
    title: 'The Wanda Sykes Show',
    role: 'Co-Star',
    productionCompany: 'FOX',
    clipName: '/wanda-sykes.mp4',
  },
  {
    title: 'Blood Relatives',
    role: 'Guest Star',
    productionCompany: 'ID Network',
    clipName: '',
  },
  {
    title: "America's Most Wanted",
    role: 'Co-Star',
    productionCompany: 'FOX',
    clipName: '',
  },
  {
    title: 'Last Life',
    role: 'Series Regular',
    productionCompany: 'Puma Squad Prod.',
    clipName: '/last-life.mp4',
  },
  {
    title: 'Boulevard',
    role: 'Series Regular',
    productionCompany: 'London Prod.',
    clipName: '/boulevard.mp4',
  },
]

export const filmActingRoles = [
  {
    title: 'Pop-Off',
    role: 'Lead',
    productionCompany: 'Rance Collins',
    clipName: '/pop-off-clip.mp4',
  },
  {
    title: 'Purple Hearts',
    role: 'Supporting',
    productionCompany: 'Netflix',
    clipName: '',
  },
  {
    title: 'Criminales',
    role: 'Lead',
    productionCompany: 'Good Son Pic.',
    clipName: '/criminales.mp4',
  },
  {
    title: 'The Takeover',
    role: 'Supporting',
    productionCompany: 'RayVen Choi Films',
    clipName: '',
  },
  {
    title: 'The Beat That Her Heart Skipped',
    role: 'Supporting ',
    productionCompany: 'Robb Ent.',
      clipName: '/beat-her-heart.mp4',
  },
  {
    title: 'Sammy-Gate',
    role: 'Supporting',
    productionCompany: 'Slamdance, Inc.',
    clipName: '',
  },
  {
    title: 'Virtually Heroes',
    role: 'Supporting',
    productionCompany: 'New Horizon Pic.',
    clipName: '/virtually-heroes.mp4',
  },
  {
    title: 'Date Night',
    role: 'Supporting',
    productionCompany: '20th Century Fox',
    clipName: '',
  },
  {
    title: 'After The Fall',
    role: 'supporting',
    productionCompany: 'Hallmark Channel',
    clipName: '',
  },
  {
    title: 'The Famous Joe Project',
    role: 'Supporting',
    productionCompany: 'Eli Rarey',
    clipName: '',
  },

  {
    title: 'Broken Hearts Club',
    role: 'Supporting',
    productionCompany: '319 Prod.',
    clipName: '',
  },
]

export const theaterActingRoles = [
  {
    title: 'Shock Therapy',
    role: 'Moses',
    productionCompany: 'Lillian Theater',
    clipName: '',
  },
  {
    title: 'Angels in America, Parts 1 & 2',
    role: 'Belize / Mr.Lies',
    productionCompany: 'NoHo Arts Center',
    clipName: '',
  },
  {
    title: 'Rough Sketch',
    role: 'Various Roles',
    productionCompany: 'Next Stage Theater',
    clipName: '',
  },
  {
    title: 'Titus Andronicus',
    role: 'Aaron',
    productionCompany: 'Quad C Theatre',
    clipName: '',
  },
  {
    title: "Who's Afraid of Virginia Woolf?",
    role: 'George',
    productionCompany: 'Allan Carr Theatre',
    clipName: '',
  },
  {
    title: 'Hair',
    role: 'Hud',
    productionCompany: 'The Attic Playhouse',
    clipName: '',
  },
  {
    title: 'The Colored Museum',
    role: 'Junie / Miss Roj',
    productionCompany: 'Lake Forest College',
    clipName: '',
  },
]
