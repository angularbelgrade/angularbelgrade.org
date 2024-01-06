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
    talkTitle: 'Talk: TBD',
    talkDescription: '',
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
    talkTitle: 'Talk: TBD',
    talkDescription: '',
    photoUrl: '/people/fabian-gosebrink.jpg',
    bannerUrl:
      'https://angularbelgrade.org/banners/ng-belgrade-conf-2024-fabian-gosebrink.jpg',
    twitterUrl: 'https://twitter.com/FabianGosebrink/',
    linkedinUrl: 'https://www.linkedin.com/in/fabian-gosebrink-71023a88/',
    githubUrl: 'https://github.com/FabianGosebrink/',
  },
};

export const speakersResource = {
  getSpeakers: () => Object.values(speakerMap),
  getSpeakerById: (id: string) => speakerMap[id],
  getSpeakerUrl: (id: string) => `https://angularbelgrade.org/speakers/${id}`,
} as const;
