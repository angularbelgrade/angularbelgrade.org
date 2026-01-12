import { Speaker } from '../models/speaker.model';
import { shuffle } from '../utils/shuffle';

const speakerMap: Record<string, Speaker> = {
  'dmytro-mezhenskyi': {
    id: 'dmytro-mezhenskyi',
    name: 'Dmytro Mezhenskyi',
    headline: 'Author of Decoded Frontend<br/>Angular GDE • Microsoft MVP',
    bio: 'Dmytro Mezhenskyi is a Google Developer Expert in Angular and the founder of <a href="https://www.youtube.com/@DecodedFrontend" target="_blank">Decoded Frontend</a>. It is a source dedicated to providing advanced tutorials and courses in Angular and web development. With a strong focus on practical, in-depth learning, he creates educational content, shares insights on YouTube, and helps developers improve their skills. He is also a Microsoft MVP and actively contributes to the developer community through teaching and consulting.',
    talkTitle: 'Talk: TBA',
    talkDescription: '',
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
};

const speakers = Object.values(speakerMap);

const shuffledSpeakers = shuffle(speakers);

export const speakersResource = {
  getSpeakers: (shouldShuffle = false) =>
    shouldShuffle ? shuffledSpeakers : speakers,
  getSpeakerById: (id: string) => speakerMap[id],
  getSpeakerUrl: (id: string) => `https://angularbelgrade.org/speakers/${id}`,
} as const;
