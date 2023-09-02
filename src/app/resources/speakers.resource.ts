import { Speaker } from '../models/speaker';

const speakers: Record<string, Speaker> = {
  '2023-manfred': {
    id: '2023-manfred',
    name: 'Manfred Steyer',
    headline: 'Trainer and Consultant<br/>GDE in Angular • Microsoft MVP',
    bio: "Trainer, consultant, and programming architect with focus on Angular. Google Developer Expert (GDE) and Trusted Collaborator in the Angular team who writes for O'Reilly, the German Java Magazine, and windows.developer. Regularly speaks at conferences.",
    talkTitle: 'How will Signals influence your Architecture?',
    talkDescription:
      'One of the most popular new features of Angular is signals. As a lightweight, reactive building block, Signals allow fine-grained change detection and increase the data binding performance.<br/><br/>As is so often, the basics are quickly explained. But only then do the really interesting questions arise: How and where should I use Signals in my application? Do I need a store? What about the new NgRx SignalStore? Do I need to work with Immutables? When to go with Signals and when to prefer RxJS?<br/><br/>These questions are answered here with some examples! In the end, you know how to integrate Signals into your modern Angular architecture.',
    photoUrl: '/people/manfred.jpg',
    twitterUrl: 'https://twitter.com/ManfredSteyer/',
    linkedinUrl: 'https://linkedin.com/in/manfred-steyer-84645821/',
    githubUrl: 'https://github.com/manfredsteyer/',
  },
  '2023-mladen': {
    id: '2023-mladen',
    name: 'Mladen Jakovljević',
    headline: 'Senior Frontend Developer at goUrban<br/>RxJS Core Team',
    bio: 'Active Core Team member of the RxJS and an avid open source contributor with experience in contributing to RxJS, Angular and other popular JS libraries. A frontend web developer with more than 7 years of experience in writing both frontend and backend JavaScript applications. Ex mobile developer.',
    talkTitle: 'Infinite Scrolling Implemented Using RxJS',
    talkDescription:
      "RxJS is one of the most famous/popular JavaScript libraries for handling asynchronous JavaScript APIs. It's got a powerful mechanism for handling asynchronous APIs and managing resources when they become unused. In this talk, I will explain how to solve a simple problem of continuous data loading while scrolling the page by mainly using RxJS in Angular app.",
    photoUrl: '/people/mladen.jpg',
    twitterUrl: 'https://twitter.com/jakovljevicMla/',
    linkedinUrl: 'https://linkedin.com/in/jakovljevic-mladen/',
    githubUrl: 'https://github.com/jakovljevic-mladen/',
  },
  '2023-marko': {
    id: '2023-marko',
    name: 'Marko Stanimirović',
    headline:
      'Principal Frontend Engineer at SMG<br/>NgRx Core Team • GDE in Angular',
    bio: 'Marko is a core member of the NgRx and AnalogJS teams, a Google Developer Expert in Angular, and an organizer of the Angular Belgrade group. He actively contributes to open-source software, shares knowledge through technical articles and talks, and enjoys playing the guitar. Marko holds a Master of Science in Software Engineering from the University of Belgrade.',
    talkTitle: 'NgRx SignalStore - Journey from Vision to First Release',
    talkDescription:
      "NgRx SignalStore is a new state management solution in the Angular ecosystem that provides first-class support for Angular Signals. Join me in this talk to learn more about the journey of developing the `@ngrx/signals` library, from the initial idea to the first official release. We'll discuss the challenges, design considerations, and key decisions that shaped this state management library and explore its core features.",
    photoUrl: '/people/marko.jpg',
    twitterUrl: 'https://twitter.com/MarkoStDev/',
    linkedinUrl: 'https://linkedin.com/in/markostanimirovic/',
    githubUrl: 'https://github.com/markostanimirovic/',
  },
};

export function getSpeakersRoutes(): string[] {
  return Object.keys(speakers).map((speakerId) => `/speakers/${speakerId}`);
}

export function getSpeakersByYear(year: number): Speaker[] {
  return Object.values(speakers).filter((speaker) =>
    speaker.id.startsWith(`${year}`)
  );
}

export function getSpeakerById(speakerId: string): Speaker | undefined {
  return speakers[speakerId];
}
