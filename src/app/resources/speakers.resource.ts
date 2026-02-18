import { Speaker } from '../models/speaker.model';
import { shuffle } from '../utils/shuffle';

const speakerMap: Record<string, Speaker> = {
  'dmytro-mezhenskyi': {
    id: 'dmytro-mezhenskyi',
    name: 'Dmytro Mezhenskyi',
    headline: 'Author of Decoded Frontend<br/>Angular GDE • Microsoft MVP',
    bio: 'Dmytro Mezhenskyi is a Google Developer Expert in Angular and the founder of <a href="https://www.youtube.com/@DecodedFrontend" target="_blank">Decoded Frontend</a>. It is a source dedicated to providing advanced tutorials and courses in Angular and web development. With a strong focus on practical, in-depth learning, he creates educational content, shares insights on YouTube, and helps developers improve their skills. He is also a Microsoft MVP and actively contributes to the developer community through teaching and consulting.',
    talkTitle:
      'Zoneless Angular: The Hidden Cost of Zone.js and What Replaces It',
    talkDescription:
      'Zone.js has been a core part of Angular’s change detection for years. At the same time, it introduces real trade-offs: more challenging debugging, unpredictable performance, increased bundle size, and additional runtime overhead.<br/><br/>In this talk, we’ll start by examining the price we pay for using Zone.js and what practical benefits zoneless mode brings in return: improved performance characteristics, a clearer mental model, and an enhanced developer experience.<br/><br/>After that, we’ll take a short look under the hood of Angular’s zoneless mode. You’ll see how Angular triggers change detection without Zone.js, the role of the ChangeDetectionScheduler, and how the framework knows which exact parts of your application view need to update.<br/><br/>By the end of the talk, you’ll have a clear understanding of why zoneless exists, how it works at a high level, and what changes for you as an Angular developer.',
    photoUrl: '/people/dmytro-mezhenskyi.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/austria.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-dmytro-mezhenskyi.jpg',
    twitterUrl: 'https://x.com/DecodedFrontend/',
    linkedinUrl: 'https://linkedin.com/in/dmezhenskyi/',
    githubUrl: 'https://github.com/DMezhenskyi/',
  },
  'mike-ryan': {
    id: 'mike-ryan',
    name: 'Mike Ryan',
    headline: 'Hashbrown Tech Lead<br/>NgRx Co-Creator • Angular GDE',
    bio: 'Mike Ryan is a Principal Architect at LiveLoveApp, helping companies find joy in building products on the web. He is a Google Developer Expert in Web Technologies, co-creator of NgRx, and is currently working on generative UI with Hashbrown.',
    talkTitle: 'Building Agents in the Browser with Hashbrown',
    talkDescription:
      'Agentic frameworks like Mastra, LangGraph, and PydanticAI make it easy to compose LLMs that reason and act. But most of these systems are designed for long-running backend workflows. What if we treated agents as a browser-side UI capability instead?<br/><br/>In this talk, Mike Ryan, creator of Hashbrown, explores building agentic behavior directly into web applications. We’ll focus on developer ergonomics for ephemeral UI tasks like notification summarization, generative UI chat, natural language form inputs, and inline content transformations. Through concrete examples and real code, you’ll see how browser-native agents enable faster iteration, tighter UI feedback loops, and new interaction patterns that are difficult to express in traditional server-first agent architectures.',
    photoUrl: '/people/mike-ryan.jpg',
    photoBackground: 'dark',
    flagUrl: '/flags/united-states.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-mike-ryan.jpg',
    twitterUrl: 'https://twitter.com/MikeRyanDev/',
    linkedinUrl: 'https://linkedin.com/in/mikeryandesigns/',
    githubUrl: 'https://github.com/MikeRyanDev/',
  },
  'manfred-steyer': {
    id: 'manfred-steyer',
    name: 'Manfred Steyer',
    headline: 'Trainer and Consultant<br/>Angular GDE • Microsoft MVP',
    bio: "Trainer, consultant, and programming architect with a focus on Angular. Google Developer Expert (GDE) and Trusted Collaborator in the Angular team who writes for O'Reilly, the German Java Magazine, and windows.developer. Regularly speaks at conferences.",
    talkTitle: 'Beyond the Basics of the New Signal Forms',
    talkDescription:
      'Signal Forms are the next missing link Angular adds to its signals story.<br/><br/>The basics are easy to grasp, but the new forms API has much more to offer. In this session, we discuss advanced features such as large forms that are split into sub-forms, working with arrays, using metadata, conditional validations, dealing with null values and form models, and building custom controls. We also explore how Signal Forms can work together with Reactive Forms to support a step-by-step migration.<br/><br/>By the end, you will have a clear overview of the advanced capabilities of Signal Forms and know how to apply them effectively in your projects.',
    photoUrl: '/people/manfred-steyer.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/austria.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-manfred-steyer.jpg',
    twitterUrl: 'https://twitter.com/ManfredSteyer/',
    linkedinUrl: 'https://linkedin.com/in/manfred-steyer-84645821/',
    githubUrl: 'https://github.com/manfredsteyer/',
  },
  'pawel-kozlowski': {
    id: 'pawel-kozlowski',
    name: 'Pawel Kozlowski',
    headline: 'Staff Software Engineer at<br/>Angular Team, Google',
    bio: 'Pawel is a veteran of the web development community and a long-time contributor to the Angular ecosystem. Known for his deep dives into framework architecture, he has spent years shaping how we build modern, scalable applications. Currently, Pawel is focused on the paradigm shift brought about by AI, pioneering research into LLM-first API design and the transition from static components to intent-based interfaces. When he isn’t re-architecting the web, he’s likely in the mountains hiking or biking. And if you’re looking for a "secret" project, ask him about his recent obsession with traditional French stone masonry (pierre sèche)—because whether it’s code or limestone, Pawel believes in building things that are meant to last.',
    talkTitle: 'From Components to Intents: The Future of Web Interfaces',
    talkDescription:
      'For decades, our job as web developers has been to build "maps"-pre-defined paths, static menus, and rigid components that users must learn to navigate. But the rise of LLMs is fundamentally shifting the user\'s expectation from "finding a feature" to "executing an intent."<br/><br/>In this keynote, we will explore the transition toward a world where user interfaces are no longer hard-coded, but are instead fluid, on-demand, and constructed in real-time to match a user’s specific goal. We will discuss why the next generation of applications won\'t just "have AI features," but will be built on an entirely different architectural foundation. Crucially, we’ll look at how we must evolve our API and DSL designs today to ensure they are "LLM-first," acting as the bridge between raw model power and a seamless user experience. It\'s time to stop building static maps and start architecting for the era of intent.',
    photoUrl: '/people/pawel-kozlowski.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/france.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-pawel-kozlowski.jpg',
    twitterUrl: 'https://twitter.com/pkozlowski_os/',
    linkedinUrl: 'https://linkedin.com/in/pawel-kozlowski-7121a6/',
    githubUrl: 'https://github.com/pkozlowski-opensource/',
  },
  'brandon-roberts': {
    id: 'brandon-roberts',
    name: 'Brandon Roberts',
    headline: 'Creator of AnalogJS<br/>NgRx Maintainer • Angular GDE',
    bio: 'Brandon is an OSS Advocate, focused on community engagement, content creation, and collaboration. He enjoys learning new things, helping other developers be successful, speaking at conferences, and contributing to open source. He is a GDE, technical writer, maintainer of the NgRx project, and creator of the AnalogJS meta-framework.',
    talkTitle: 'Talk: AnalogJS (TBA)',
    talkDescription: '',
    photoUrl: '/people/brandon-roberts.jpg',
    photoBackground: 'dark',
    flagUrl: '/flags/united-states.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-brandon-roberts.jpg',
    twitterUrl: 'https://x.com/brandontroberts',
    linkedinUrl: 'https://linkedin.com/in/brandontroberts/',
    githubUrl: 'https://github.com/brandonroberts/',
  },
  'rainer-hahnekamp': {
    id: 'rainer-hahnekamp',
    name: 'Rainer Hahnekamp',
    headline: 'Trainer and Consultant<br/>NgRx Core Team • Angular GDE',
    bio: 'Rainer Hahnekamp is a Google Developer Expert (GDE) and a core member of NgRx. He is a trainer and consultant in the Angular Architects expert network and runs <a href="https://youtube.com/@ng-news" target="_blank">ng-news</a>, a weekly Angular newsletter. Beyond NgRx, he is deeply involved in open source, working on projects like <a href="https://testronaut.dev/" target="_blank">Testronaut</a> and <a href="https://sheriff.softarc.io/" target="_blank">Sheriff</a>.',
    talkTitle: 'Testronaut: The Evolution of Component Testing',
    talkDescription:
      'The change of guard in Angular testing happened swiftly. With Vitest, we didn\'t just get a modern runner, we got Full Browser Mode. This feature brought "auto-waiting" to the table. Say goodbye to detectChanges() or whenStable().<br/><br/>But is Vitest the final destination, or just a bridge?<br/><br/>Currently, Vitest achieves its browser capabilities by wrapping Playwright. But why do we need that additional layer of abstraction? Testronaut takes us to the next stage: native Playwright Component Testing.<br/><br/>This talk demonstrates the advantages of using Playwright directly for component tests. We will see how removing the proxy unlocks the full ecosystem, including the native VSCode extension, the complete Playwright API, and more.',
    photoUrl: '/people/rainer-hahnekamp.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/austria.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-rainer-hahnekamp.jpg',
    twitterUrl: 'https://twitter.com/rainerhahnekamp/',
    linkedinUrl: 'https://linkedin.com/in/rainerhahnekamp/',
    githubUrl: 'https://github.com/rainerhahnekamp/',
  },
  'fabian-gosebrink': {
    id: 'fabian-gosebrink',
    name: 'Fabian Gosebrink',
    headline: 'Pluralsight Author<br/>Angular GDE • Microsoft MVP',
    bio: 'Fabian is a software developer, book author, trainer, and speaker with a strong focus on modern web architectures using Angular, Nx, and state management. He is a Google Developer Expert (GDE), Microsoft MVP, and Nx Champion. As a Pluralsight author and book author, he shares practical, experience-driven knowledge on Angular, scalable frontend architectures, and sustainable state management. In his talks and workshops, Fabian combines real-world project experience with clear architectural principles, helping teams build applications that remain maintainable as they grow. His goal is to enable developers to make better technical decisions. Beyond hype and dogma.',
    talkTitle:
      'Advanced Signal Store: Structuring State for Real Angular Applications',
    talkDescription:
      "Modern Angular applications grow quickly, and with that growth come new questions about how to structure and share state effectively. Signals make local state simple and expressive, but as applications evolve, architectural decisions around state become increasingly important.<br/><br/>In this talk, we go beyond the basics of the NgRx Signal Store and explore how it can be used as an architectural building block in real Angular applications. We look at practical scenarios and discuss where state belongs, how to define clear boundaries between components, features, and application wide concerns, and how Signal Store fits into that picture.<br/><br/>We dive deeper into advanced Signal Store concepts such as store composition, derived state, effects, and integration with Angular's dependency injection system, always from an architectural point of view rather than focusing only on the API.<br/><br/>This session is driven by experience and clear opinions. It focuses on sharing patterns, heuristics, and mental models that help teams structure state with confidence. You will leave with concrete ideas for designing maintainable and scalable Angular applications using Signal Store, grounded in real world constraints and everyday development.",
    photoUrl: '/people/fabian-gosebrink.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/switzerland.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-fabian-gosebrink.jpg',
    twitterUrl: 'https://twitter.com/FabianGosebrink/',
    linkedinUrl: 'https://linkedin.com/in/fabian-gosebrink-71023a88/',
    githubUrl: 'https://github.com/FabianGosebrink/',
  },
  'matthieu-riegler': {
    id: 'matthieu-riegler',
    name: 'Matthieu Riegler',
    headline: 'Software Engineer at<br/>Angular Team, Google',
    bio: 'Matthieu is a Software Engineer from France, born and raised in the Alps, he is known for his community contributions over the years. Active as community speaker, he recently he joined the Angular team as a Google contractor and works on the devtools, documentation and of course the framework itself.',
    talkTitle:
      'You can do better than console.log : Debugging your apps effectively',
    talkDescription:
      "You can do better than console.log is not a judgment - it’s a promise 🙂<br/><br/>This talk is a practical (and slightly opinionated) tour of debugging Angular apps without turning your codebase into a crime scene of console.log('here'). We’ll start from the familiar comfort of logging everything… and then gently move on to tools that actually scale beyond “it works on my machine”.<br/><br/>We’ll explore the browser DevTools and the Angular DevTools to understand what’s really happening in your app:<ul><li>Navigating the Component Tree to inspect inputs, outputs, providers, and state in real time</li><li>Following navigation with Router Visualization instead of guessing why a route didn’t activate</li><li>Inspecting TransferState to debug SSR and hydration issues without superstition</li><li>Visualizing Signals and computed chains to see what updates, when, and why</li><li>Understanding Change Detection cycles and spotting unnecessary work before performance does</li></ul>Along the way, we’ll replace “let me log this real quick” with repeatable debugging strategies, better mental models, and tools that tell the truth even when your logs lie.<br/><br/>You’ll leave knowing when console.log is fine… and when Angular already gave you something much better.",
    photoUrl: '/people/matthieu-riegler.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/france.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-matthieu-riegler.jpg',
    twitterUrl: 'https://x.com/Jean__Meche/',
    linkedinUrl: 'https://linkedin.com/in/matthieuriegler/',
    githubUrl: 'https://github.com/jeanmeche/',
  },
  'ana-kljajic': {
    id: 'ana-kljajic',
    name: 'Ana Kljajić',
    headline: 'Senior Frontend Engineer',
    bio: 'Ana is a Senior Frontend Engineer with a Master of Science in Software Engineering from the University of Belgrade. She specializes in building scalable web architectures and solving complex engineering challenges through modern tooling. Outside of coding, Ana enjoys exploring challenging new destinations and playing table tennis.',
    talkTitle:
      'Get Busted by the Sheriff: The Nextgen TypeScript Linting Experience',
    talkDescription:
      'In this talk, we will explore how to eliminate configuration fatigue and bring order to the "Wild West" of your codebase. We will dive into Sheriff, an opinionated, nextgen ESLint setup that replaces dozens of plugins with a single, bulletproof standard. You’ll learn how getting "busted" by strict rules during development is the ultimate shortcut to shipping safer TypeScript and ending code review debates forever.',
    photoUrl: '/people/ana-kljajic.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/serbia.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-ana-kljajic.jpg',
    linkedinUrl: 'https://linkedin.com/in/kljajicana/',
  },
  'kiril-zafirov': {
    id: 'kiril-zafirov',
    name: 'Kiril Zafirov',
    headline: 'Senior Frontend Engineer<br/>Angular Macedonia Organizer',
    bio: 'Kiril Zafirov is a senior software engineer with over 10 years of experience building large-scale web and mobile applications. He specializes in Angular, performance optimization, and modern frontend architecture, with a strong focus on writing maintainable, production-ready code. He has worked with international teams and companies across fintech, healthcare, and SaaS, and is actively involved in the Angular community through talks, meetups, and mentoring. Kiril is particularly interested in performance, developer experience, and turning complex problems into simple, effective solutions.',
    talkTitle: 'NgOptimizedImage: The Easiest Performance Win You’re Not Using',
    talkDescription:
      'NgOptimizedImage delivers measurable performance gains with almost no code.<br/><br/>In this lightning talk, I’ll show a live before-and-after demo using Angular’s built-in image optimization to improve LCP, loading behavior, and real-world performance in minutes.',
    photoUrl: '/people/kiril-zafirov.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/macedonia.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-kiril-zafirov.jpg',
    linkedinUrl: 'https://linkedin.com/in/kiril-z/',
    githubUrl: 'https://github.com/KirilZafirov/',
  },
  'brygida-fiejdasz': {
    id: 'brygida-fiejdasz',
    name: 'Brygida Fiejdasz',
    headline: 'Frontend Lead at Avenga<br/>Angular GDE • Microsoft MVP',
    bio: "I'm an Angular GDE and Lead of the Frontend Competence Center at Avenga. Beyond that, I'm an Angular enthusiast who loves to code and enjoys sharing knowledge – on stage, at meetups, and on my YouTube channel “Speed Date with Angular”. In my free time, I'm an explorer and a proud cat mom.",
    talkTitle: 'Modern Data Fetching Techniques in Angular',
    talkDescription:
      'Angular now provides signal-based data fetching through two APIs: resource and httpResource, designed to simplify reactive data access.<br/><br/>In this lightning talk, we’ll take a focused look at how these APIs work under the hood and how they differ in real applications. You’ll see how resource is built on the browser’s native fetch, while httpResource leverages Angular’s HttpClient, enabling integration with interceptors, dependency injection, and existing HTTP infrastructure.<br/><br/>You’ll learn:<ul><li>How signal-based resources manage loading, error, and refresh states</li><li>The architectural differences between resource and httpResource</li><li>Practical guidelines for choosing the right API in Angular apps</li></ul>This session is ideal for developers who want a quick but technical introduction to modern Angular data fetching patterns without diving into full-scale examples.',
    photoUrl: '/people/brygida-fiejdasz.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/poland.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-brygida-fiejdasz.jpg',
    twitterUrl: 'https://x.com/brydziaf/',
    linkedinUrl: 'https://linkedin.com/in/brygidafiejdasz/',
  },
  'dhananjay-kumar': {
    id: 'dhananjay-kumar',
    name: 'Dhananjay Kumar',
    headline: 'Founder of NomadCoder<br/>ng-India Organizer',
    bio: 'Dhananjay Kumar is a trainer, consultant, developer evangelist, and the founder of NomadCoder, which organizes ng-India and AI-India — two of India’s largest developer communities and conferences. He focuses on building job-ready developers across modern web and AI technologies and is currently working on his second book on Angular.',
    talkTitle: 'Modern Data Fetching Techniques in Angular',
    talkDescription:
      'Angular now provides signal-based data fetching through two APIs: resource and httpResource, designed to simplify reactive data access.<br/><br/>In this lightning talk, we’ll take a focused look at how these APIs work under the hood and how they differ in real applications. You’ll see how resource is built on the browser’s native fetch, while httpResource leverages Angular’s HttpClient, enabling integration with interceptors, dependency injection, and existing HTTP infrastructure.<br/><br/>You’ll learn:<ul><li>How signal-based resources manage loading, error, and refresh states</li><li>The architectural differences between resource and httpResource</li><li>Practical guidelines for choosing the right API in Angular apps</li></ul>This session is ideal for developers who want a quick but technical introduction to modern Angular data fetching patterns without diving into full-scale examples.',
    photoUrl: '/people/dhananjay-kumar.jpg',
    photoBackground: 'light',
    flagUrl: '/flags/india.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-dhananjay-kumar.jpg',
    twitterUrl: 'https://x.com/debug_mode/',
    linkedinUrl: 'https://linkedin.com/in/dhananjaykumar07/',
  },
  'christian-liebel': {
    id: 'christian-liebel',
    name: 'Christian Liebel',
    headline: 'Member of W3C Technical<br/>Architecture Group • Angular GDE',
    bio: 'Christian Liebel is a developer with a passion for modern web technologies. He has been recognized as a Microsoft Most Valuable Professional (MVP) and a Google Developer Expert (GDE) and speaks at user groups and conferences worldwide. As a member of the W3C Technical Architecture Group (TAG), he helps push the boundaries of the web.',
    talkTitle: 'What’s New in Web? 2026 Edition',
    talkDescription:
      "Christian is a member of the World Wide Web’s architecture board, the Technical Architecture Group (TAG) of W3C. As such, he has insights into what’s going on in the web platform. In his session, you'll gain insights into the latest discussions among standards bodies, browser vendors, and web developers. And you have the opportunity to report your wishes back to the Web’s architecture board. Don't miss this opportunity to stay updated on the forefront of web technologies.",
    photoUrl: '/people/christian-liebel.jpg',
    photoBackground: 'dark',
    flagUrl: '/flags/germany.png',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2026-christian-liebel.jpg',
    twitterUrl: 'https://x.com/christianliebel/',
    linkedinUrl: 'https://linkedin.com/in/christianliebel/',
    githubUrl: 'https://github.com/christianliebel/',
  },
};

const speakers = Object.values(speakerMap);

const shuffledSpeakers = shuffle(speakers);

export const speakersResource = {
  getSpeakers: (shouldShuffle = false) =>
    shouldShuffle ? shuffledSpeakers : speakers,
  getSpeakerById: (id: string) => speakerMap[id],
  getSpeakerUrl: (id: string) => `https://angularbelgrade.org/speakers/${id}`,
} as const;
