import { Speaker } from '../models/speaker.model';

const speakerMap: Record<string, Speaker> = {
  'minko-gechev': {
    id: 'minko-gechev',
    name: 'Minko Gechev',
    headline: 'Engineering Product Lead at Angular Team, Google',
    bio: "Minko leads the Angular product at Google where he works on what's next for web frameworks. Before joining Google, he was a co-founder and CTO at the EdTech startup, which in 2019 got acquired by Coursera.",
    talkTitle: 'Opening Keynote: The State of Angular',
    talkDescription:
      'In this presentation, we’ll look at the current state of Angular and its tooling infrastructure - from an inside perspective. Along the way, Minko Gechev, Engineering Product Lead on the Angular team at Google, will dive into the theory and motivation driving the direction of the framework. In the second part of the talk, Minko will focus on the roadmap of Angular and peek into the future of the framework.<br/><br/>What lies ahead for the popular framework, how is Angular going to change?',
    photoUrl: '/people/minko-gechev.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-minko-gechev.jpg',
    twitterUrl: 'https://twitter.com/mgechev/',
    linkedinUrl: 'https://www.linkedin.com/in/mgechev/',
    githubUrl: 'https://github.com/mgechev/',
  },
  'alex-okrushko': {
    id: 'alex-okrushko',
    name: 'Alex Okrushko',
    headline:
      'Senior Software Engineer at Snowflake<br/>NgRx Core Team • GDE in Angular',
    bio: 'Alex is a Senior Software Engineer II at Snowflake. He is part of the NgRx team, GDE in Angular, Angular Toronto organizer and co-organizer of the official Angular Discord. In his free time, he loves to learn & share the knowledge, provides NgRx workshops and helps with <a href="https://ts.dev/style/" target="_blank">ts.dev/style</a> - the TypeScript style guide.',
    talkTitle: 'Custom Features of NgRx SignalStore',
    talkDescription:
      'The extensibility of the SignalStore is one of its biggest superpowers. In this talk, we will go over some of the extensions provided by NgRx and create a few from scratch.',
    photoUrl: '/people/alex-okrushko.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-alex-okrushko.jpg',
    twitterUrl: 'https://twitter.com/AlexOkrushko/',
    linkedinUrl: 'https://linkedin.com/in/alex-okrushko-64262a33/',
    githubUrl: 'https://github.com/alex-okrushko/',
  },
  'fabian-gosebrink': {
    id: 'fabian-gosebrink',
    name: 'Fabian Gosebrink',
    headline: 'GDE in Angular • Microsoft MVP<br/>Pluralsight Author',
    bio: 'Fabian Gosebrink is Microsoft MVP, Google Developer Expert, Pluralsight author, Angular & ASP.NET Core web developer and international speaker. As a software engineer, consultant and trainer, he supports customers building web applications with more than 10 years of experience. Fabian is very active in the community such as leading the swiss angular community „SwissAngular“, the .NET user group in Zurich, leading the largest german speaking C#-Community (<a href="https://mycsharp.de/" target="_blank">mycsharp.de</a>), being an egghead and Pluralsight trainer as well as running his own company Offering Solutions Software with a course and learning platform <a href="https://developer-academy.ch" target="_blank">developer-academy.ch</a> and is speaking at local user groups and international conferences.',
    talkTitle: 'Angular Signals under the Hood',
    talkDescription:
      "Dive deep into the inner workings of Angular signals with 'Angular Signals under the Hood'. This talk offers an in-depth exploration of Angular signals, uncovering the mechanics and nuances that power this advanced feature. We'll dissect the core concepts, architecture, and how signals enhance communication and performance in Angular applications. Ideal for developers seeking a thorough understanding of Angular signals, this presentation will provide you with the knowledge to leverage these tools effectively in your projects, ensuring optimized and future-proof Angular applications.",
    photoUrl: '/people/fabian-gosebrink.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-fabian-gosebrink.jpg',
    twitterUrl: 'https://twitter.com/FabianGosebrink/',
    linkedinUrl: 'https://www.linkedin.com/in/fabian-gosebrink-71023a88/',
    githubUrl: 'https://github.com/FabianGosebrink/',
  },
  'manfred-steyer': {
    id: 'manfred-steyer',
    name: 'Manfred Steyer',
    headline: 'Trainer and Consultant<br/>GDE in Angular • Microsoft MVP',
    bio: "Trainer, consultant, and programming architect with focus on Angular. Google Developer Expert (GDE) and Trusted Collaborator in the Angular team who writes for O'Reilly, the German Java Magazine, and windows.developer. Regularly speaks at conferences.",
    talkTitle: 'Modern Angular Architectures with Nx and Lightweight Stores',
    talkDescription:
      'Lightweight Stores are easy to use and highly flexible. However, they also change several rules known from traditional Redux-based solutions. In this session, we shed some light on this.<br/><br/>We start with an Nx-based architecture and implement a use case with the new NGRX Signal Store. Thanks to the store’s fantastic extensibility mechanism, this is accomplished in just a few lines of code. Then, both worlds come together: We discuss several options, changed rules, and no-goes for using lightweight stores in such solutions.<br/><br/>By the end, you know how to leverage Nx and lightweight stores for your architecture and understand the differences to already known Redux-based solutions.',
    photoUrl: '/people/manfred-steyer.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-manfred-steyer.jpg',
    twitterUrl: 'https://twitter.com/ManfredSteyer/',
    linkedinUrl: 'https://linkedin.com/in/manfred-steyer-84645821/',
    githubUrl: 'https://github.com/manfredsteyer/',
  },
  'chau-tran': {
    id: 'chau-tran',
    name: 'Chau Tran',
    headline: 'Senior Engineer at Nx • GDE in Angular',
    bio: 'Chau works to bring the best engineering practices to web application production. He is currently with Nx as a Senior Engineer. Previously, he was with Swimlane, a Security Automation and Orchestration platform, and ArchitectNow, launching several successful projects.<br/><br/>He is the creator of <a href="https://github.com/nartc/mapper/" target="_blank">automapper</a> for TypeScript and <a href="https://github.com/angular-threejs/angular-three/" target="_blank">angular-three</a> for Angular. Also, he is one of Angular Vietnam’s founders. He blogs, lives stream, and maintains open-source projects. Chau is also an Angular Google Developer Experts (GDE).<br/><br/>Husband, father, learner.',
    talkTitle: 'Nx: Your Blissful Path to OSS Angular Library Management',
    talkDescription:
      "As an OSS maintainer, are you tired of the constant struggle to manage your Angular libraries? Nx is here to offer a path to blissful enlightenment. In this talk, you'll discover how Nx can help you create, maintain, and share your libraries with the world with ease and serenity.",
    photoUrl: '/people/chau-tran.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-chau-tran.jpg',
    twitterUrl: 'https://twitter.com/Nartc1410/',
    linkedinUrl: 'https://www.linkedin.com/in/chauntran/',
    githubUrl: 'https://github.com/nartc/',
  },
  'santosh-yadav': {
    id: 'santosh-yadav',
    name: 'Santosh Yadav',
    headline:
      'Senior Software Engineer at Celonis<br/>GDE in Angular • GitHub Star',
    bio: 'Santosh is a Senior Software Engineer at Celonis, a GDE for Angular, GitHub Star, Nx Champion and an Auth0 Ambassador. He loves contributing to Angular and its ecosystem. He is a co-founder of This is Learning. He is also the author of the Ngx-Builders package and part of the NestJsAddOns core Team. He is also running This is Tech Talks talk show, where he invites industry experts to discuss different technologies.',
    talkTitle: 'Planning Migration to Strict Mode for Your Angular Apps',
    talkDescription:
      "After working on many enterprise apps, one common thing is the challenge of using strict mode. Most apps start without strict mode or divert from strict mode at some point.<br/><br/>Once the code base becomes more extensive, it becomes hard to adopt strict mode. At Celonis, we have more than 26 apps and close to 100 libs, with more than 100k lines of code, and we had the same challenge.<br/><br/>Strict mode brings more type-checking to the code base, which means delivering apps with more confidence.<br/><br/>In this talk, I will share how we incrementally planned our migration so we don't block the entire team, only doing the strict mode migration and delivering once they have a resource.<br/><br/>So join me in this lightning talk and move your apps towards strict mode.",
    photoUrl: '/people/santosh-yadav.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-santosh-yadav.jpg',
    twitterUrl: 'https://twitter.com/SantoshYadavDev/',
    linkedinUrl: 'https://www.linkedin.com/in/santoshyadavdev/',
    githubUrl: 'https://github.com/santoshyadavdev/',
  },
  'mike-ryan': {
    id: 'mike-ryan',
    name: 'Mike Ryan',
    headline:
      'Principal Architect at LiveLoveApp<br/>NgRx Co-Creator • GDE in Angular',
    bio: 'Mike Ryan is a Principal Architect at LiveLoveApp, helping companies find absolute joy in shipping apps. He is a Google Developer Expert in Web Technologies and one of the co-creators of NgRx, an open-source collection of high-quality reactive extensions for Angular.',
    talkTitle:
      'Closing Keynote: Divining the Future of Angular State Management',
    talkDescription:
      'Dive into the arcane world of Angular state management with the advent of signals and signal-based state management libraries. What lessons can we learn from our state management past to help us architect better solutions for the future?',
    photoUrl: '/people/mike-ryan.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-mike-ryan.jpg',
    twitterUrl: 'https://twitter.com/MikeRyanDev/',
    linkedinUrl: 'https://linkedin.com/in/mikeryandesigns/',
    githubUrl: 'https://github.com/MikeRyanDev/',
  },
  'michael-hladky': {
    id: 'michael-hladky',
    name: 'Michael Hladky',
    headline: 'CEO at Push-Based<br/>GDE in Angular • Microsoft MVP',
    bio: 'Michael Hladky is a Google Developer Expert (GDE), Microsoft MVP, Nx champion, trainer, and consultant with a focus on Angular and RxJS. For years he has been helping companies and developers to set up scalable architectures and performant processes enabling teams to keep up with state-of-the-art development. A vibrant member of the tech community, he organizes multiple community events and workshops each year to give back.',
    talkTitle: 'Angular Performance and Core Web Vitals in 2024',
    talkDescription:
      'There are a couple of things that makes Angular faster. But what does faster even mean?<br/><br/>In this talk you will learn how to understand performance form a user centric perspective and what to do to impact CWV. We will not only apply and measure the latest features like defer blocks of the new control flow, but also a couple of tricks that might suprise you.<br/><br/>In the end you have a clear and practical understanding of what will and what will not get you a better performance score.',
    photoUrl: '/people/michael-hladky.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-michael-hladky.jpg',
    twitterUrl: 'https://twitter.com/Michael_Hladky/',
    linkedinUrl: 'https://www.linkedin.com/in/michael-hladky-519340148/',
    githubUrl: 'https://github.com/BioPhoton/',
  },
  'michael-egger-zikes': {
    id: 'michael-egger-zikes',
    name: 'Michael Egger-Zikes',
    headline: 'Trainer and Consultant at AngularArchitects',
    bio: 'Michael Egger-Zikes is an experienced software architect, trainer, and consultant with a focus on Angular in the field of business applications. As a member of the ANGULARarchitects expert network, he has supervised and implemented large enterprise-scale Angular projects in the public and private sectors. As an external (part-time) lecturer, he also teaches this topic at a university of applied sciences in Graz, Austria. The business informatics graduate has a lot of experience with software engineering and automating business processes.',
    talkTitle:
      'Mastering Angular’s Dependency Injection: Practical Insights to Level Up',
    talkDescription:
      "The Angular Framework features a built-in Dependency Injection mechanism that has been integral since its inception. This aspect is one of the core elements for which the JavaScript ecosystem lauds Angular. While many developers are adept at employing DI for services provisioned in the root scope, its utility extends well beyond this conventional application.<br/><br/>Through practical insights, this lightning talk will empower developers to unlock the full potential of Angular's DI system. From comprehending provider hierarchies to leveraging dependency inversion for cleaner code, participants will acquire knowledge to enhance their Angular applications.<br/><br/>Additionally, we will demystify the internals of the Injection tree, shedding light on the lifecycle of nodes and providing clarity on their utilization.<br/><br/>Join my talk as we uncover the features of Angular's Dependency Injection system, paving the way for more efficient and streamlined development workflows.",
    photoUrl: '/people/michael-egger-zikes.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-michael-egger-zikes.jpg',
    twitterUrl: 'https://twitter.com/MikeZks/',
    linkedinUrl: 'https://www.linkedin.com/in/michael-egger-zikes/',
  },
  'rainer-hahnekamp': {
    id: 'rainer-hahnekamp',
    name: 'Rainer Hahnekamp',
    headline: 'Trainer and Consultant • GDE in Angular',
    bio: 'Rainer Hahnekamp is a Google Developer Expert, working as a trainer and consultant in the expert network of Angular Architects. In addition, he offers a weekly brief overview of relevant events in the Angular ecosystem on YouTube through ng-news.',
    talkTitle: 'Testing in 2024',
    talkDescription:
      "As Angular accelerates, so does the testing realm. Karma steps aside for the Web Test Runner, while Jest gains official support, and Analog entices us with Vitest. Playwright claims the top spot in E2E before Cypress, leaving us to ponder the role of Jasmine.<br/><br/>Let's sort things out!<br/><br/>I'll provide a comprehensive overview of the testing landscape in 2024 — spotlighting the tools that are now at our disposal, forecasting future developments, and outlining what a contemporary testing strategy entails.<br/><br/>Stay ahead with sharp testing in Angular!",
    photoUrl: '/people/rainer-hahnekamp.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-rainer-hahnekamp.jpg',
    twitterUrl: 'https://twitter.com/rainerhahnekamp/',
    linkedinUrl: 'https://www.linkedin.com/in/rainerhahnekamp/',
    githubUrl: 'https://github.com/rainerhahnekamp/',
  },
  'soumaya-erradi': {
    id: 'soumaya-erradi',
    name: 'Soumaya Erradi',
    headline: 'Senior Software Developer at Atlantis',
    bio: "I'm an experienced web developer and a passionate IT and electronics instructor. I'm specialized in frontend applications and currently I'm a lead software developer in a blockchain app development team. I spend most of my time exploring what's new in the tech world and helping other developers improve their skills.",
    talkTitle: 'Solving Web3 Issues with Angular',
    talkDescription:
      'Developing a decentralized application with Angular can be challenging due to lack of community support. Otherwise it is possible to develop a performant application just using the right library and understanding how to communicate with Web3 tools. In this talk we’ll explore how to do it easily and make the latest tools performe the best!',
    photoUrl: '/people/soumaya-erradi.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-soumaya-erradi.jpg',
    twitterUrl: 'https://twitter.com/sumy92/',
    linkedinUrl: 'https://www.linkedin.com/in/soumaya-erradi/',
    githubUrl: 'https://github.com/soumayaerradi/',
  },
  'igor-ciric': {
    id: 'igor-ciric',
    name: 'Igor Ćirić',
    headline: 'Angular Developer at Bitovi',
    bio: 'Web developer with 10 years of experience building applications for professional and personal consumption. I developed a white-label online multiplayer game using Angular and PixiJS, created an OCR tool from scratch to extract data from the game, and won 1st place in Google Startup Weekend, Belgrade, Serbia.<br/><br/>I am a seasoned web developer specializing in Angular, with a proven track record of delivering high-quality solutions and training to clients worldwide. I began my journey as a developer when I was 18 by joining the Google Adsense program. My website at that time in 2008 was able to reach 1M+ visitors per month. While working with Google Adsense, I gained knowledge and experience of how SEO works in practice.<br/><br/>Throughout my career, I have demonstrated versatility and adaptability, working on a diverse range of projects from micro applications like quizzes and photo contests to groundbreaking startups. My early experience with marketing agencies honed my ability to rapidly ideate, code, and adapt to tight deadlines. This agility later translated into success on global projects, where I deepened my understanding of application scalability. A highlight of my career is my skill in delivering engaging and informative presentations for clients on Angular topics, such as “Using Arrow Functions for Communication Between Components,” “Angular Server-side Rendering (SSR) with Angular Universal,” and “NgSrc and Angular Image Optimization.” My ability to articulate complex technical concepts has made me a valuable asset in collaborative settings, often leading code pairing sessions with developers from client teams.My comprehensive approach to project development, encompassing everything from design mockups to backend development and DevOps management, stems from my responsibility for the entire development processes in various roles. This experience has not only refined my technical acumen but also my problem-solving skills and my ability to work independently. Outside of my professional life, I am happily married to my childhood sweetheart, and I passionately pursue adventures like hiking, scuba diving, traveling, and more.',
    talkTitle:
      'Breaking Boundaries: Unleashing the Potential of Micro Frontends with Angular and iframes',
    talkDescription:
      'Want to know how to build a simple microfrontend architecture without relying on additional libraries and tools? We can achieve this by using iFrame and Angular directive. The iFrame directive will manage window event communications between applications. This approach provides a significant advantage by enabling our applications to work as container-presenter patterns. By breaking down a large project into smaller ones, they can work together and share data seamlessly.',
    photoUrl: '/people/igor-ciric.jpeg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-igor-ciric.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/igor-ciric-8ab725168/',
  },
  'robin-goetz': {
    id: 'robin-goetz',
    name: 'Robin Goetz',
    headline: 'Full Stack Engineer at NeuroTrainer<br/>AnalogJS Core Team',
    bio: 'Developer working with Angular, Spring and AWS. AnalogJS core team & creator of spartan/ui.',
    talkTitle: 'AnalogJS - The Vite powered Angular meta-framework',
    talkDescription:
      "This talk introduces AnalogJS to the audience. It gives insight into how AnalogJS takes full-stack Angular development to the next level. It shows how it adds file-based routing and Nitro powered API routes. It introduces hybrid SSR/SSG support & zero (or minimal) config deploys to cloud providers. Finally, it goes lays out clearly the technology driving the framework, Vite, and shows, with the help of Single File Components (.analog), how incredibly powerful it is. It compares AnalogJS' embrace of going all in on Vite with Angular deciding to use Vite as a dev server, but ultimately keeping it an implementation detail of their CLI.",
    photoUrl: '/people/robin-goetz.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-robin-goetz.jpg',
    twitterUrl: 'https://twitter.com/goetzrobin/',
    linkedinUrl: 'https://www.linkedin.com/in/robingoetz/',
    githubUrl: 'https://github.com/goetzrobin/',
  },
  'nenad-drobac': {
    id: 'nenad-drobac',
    name: 'Nenad Drobac',
    headline: 'Engineering Manager at SMG',
    bio: "Nenad is an Engineering Manager at Swiss Marketplace Group with a proven track record in the tech industry. Previously, he honed his skills as a versatile Frontend developer proficient in all three major Javascript frameworks. Notably, during his tenure as a Frontend developer, his passion was dedicated to crafting and perfecting design systems. Beyond his professional life, Nenad's interests extend to the world of sports, where he's a passionate spectator and enthusiast. While he once harbored dreams of becoming a professional gamer, life took a different turn, and he transitioned to the world of software development. In addition to his technical prowess, Nenad possesses a keen interest in exploring the dynamic realms of business and marketing. With a deep appreciation for both the creative and analytical sides of these domains, he's continually broadening his horizons and embracing new challenges.",
    talkTitle: 'SEO for Two Websites on One Platform? Don’t Get Duped!',
    talkDescription:
      'This talk tackles the challenge of ranking websites built on the same platform. Learn how clear differentiation in target audience, content, and SEO strategy can help both websites thrive in search results.',
    photoUrl: '/people/nenad-drobac.jpg',
    bannerUrl:
      'https://2024.angularbelgrade.org/banners/ng-belgrade-conf-2024-nenad-drobac.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/nenaddrobac/',
  },
};

export const speakersResource = {
  getSpeakers: () => Object.values(speakerMap),
  getSpeakerById: (id: string) => speakerMap[id],
  getSpeakerUrl: (id: string) =>
    `https://2024.angularbelgrade.org/speakers/${id}`,
} as const;
