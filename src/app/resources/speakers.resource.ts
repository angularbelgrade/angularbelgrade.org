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
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2024-minko-gechev.jpg',
    twitterUrl: 'https://twitter.com/mgechev/',
    linkedinUrl: 'https://www.linkedin.com/in/mgechev/',
    githubUrl: 'https://github.com/mgechev/',
  },
  'alex-okrushko': {
    id: 'alex-okrushko',
    name: 'Alex Okrushko',
    headline:
      'Principal UI Architect at Cisco<br/>NgRx Core Team • GDE in Angular',
    bio: 'Alex is a Principal Architect at Cisco CX - Customer Experience. He is part of the NgRx team, GDE in Angular, Angular Toronto organizer and co-organizer of the official Angular Discord. In his free time, he loves to learn & share the knowledge, provides NgRx workshops and helps with <a href="https://ts.dev/style/" target="_blank">ts.dev/style</a> - the TypeScript style guide.',
    talkTitle: 'Custom Features of NgRx SignalStore',
    talkDescription:
      'The extensibility of the SignalStore is one of its biggest superpowers. In this talk, we will go over some of the extensions provided by NgRx and create a few from scratch.',
    photoUrl: '/people/alex-okrushko.jpg',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2024-alex-okrushko.jpg',
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
      "Dive deep into the inner workings of Angular signals with 'Angular Signals under the Hood'. This talk offers an in-depth exploration of Angular signals, uncovering the mechanics and nuances that power this advanced feature. We'll dissect the core concepts, architecture, and how signals enhance communication and performance in Angular applications. Ideal for developers seeking a thorough understanding of Angular signals, this presentation will provide you with the knowledge to leverage these tools effectively in your projects, ensuring optimized and future proof Angular applications.",
    photoUrl: '/people/fabian-gosebrink.jpg',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2024-fabian-gosebrink.jpg',
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
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2024-manfred-steyer.jpg',
    twitterUrl: 'https://twitter.com/ManfredSteyer/',
    linkedinUrl: 'https://linkedin.com/in/manfred-steyer-84645821/',
    githubUrl: 'https://github.com/manfredsteyer/',
  },
  'chau-tran': {
    id: 'chau-tran',
    name: 'Chau Tran',
    headline: 'Senior Engineer at Nx<br/>Google Developer Expert in Angular',
    bio: 'Chau works to bring the best engineering practices to web application production. He is currently with Nx as a Senior Engineer. Previously, he was with Swimlane, a Security Automation and Orchestration platform, and ArchitectNow, launching several successful projects.<br/><br/>He is the creator of <a href="https://github.com/nartc/mapper/" target="_blank">automapper</a> for TypeScript and <a href="https://github.com/angular-threejs/angular-three/" target="_blank">angular-three</a> for Angular. Also, he is one of Angular Vietnam’s founders. He blogs, lives stream, and maintains open-source projects. Chau is also an Angular Google Developer Experts (GDE).<br/><br/>Husband, father, learner.',
    talkTitle: 'Nx: Your Blissful Path to OSS Angular Library Management',
    talkDescription:
      "As an OSS maintainer, are you tired of the constant struggle to manage your Angular libraries? Nx is here to offer a path to blissful enlightenment. In this talk, you'll discover how Nx can help you create, maintain, and share your libraries with the world with ease and serenity.",
    photoUrl: '/people/chau-tran.jpg',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2024-chau-tran.jpg',
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
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2024-santosh-yadav.jpg',
    twitterUrl: 'https://twitter.com/SantoshYadavDev/',
    linkedinUrl: 'https://www.linkedin.com/in/santoshyadavdev/',
    githubUrl: 'https://github.com/santoshyadavdev/',
  },
};

export const speakersResource = {
  getSpeakers: () => Object.values(speakerMap),
  getSpeakerById: (id: string) => speakerMap[id],
  getSpeakerUrl: (id: string) => `https://angularbelgrade.org/speakers/${id}`,
} as const;
