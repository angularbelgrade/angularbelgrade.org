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
    bannerUrl: 'https://angularbelgrade.org/banners/ng-belgrade-conf-2026.jpg',
    twitterUrl: 'https://x.com/DecodedFrontend/',
    linkedinUrl: 'https://linkedin.com/in/dmezhenskyi/',
    githubUrl: 'https://github.com/DMezhenskyi/',
  },
  'mike-ryan': {
    id: 'mike-ryan',
    name: 'Mike Ryan',
    headline: 'Hashbrown Tech Lead<br/>NgRx Co-Creator • Angular GDE',
    bio: 'Mike Ryan is a Principal Architect at LiveLoveApp, helping companies find joy in building products on the web. He is a Google Developer Expert in Web Technologies, co-creator of NgRx, and is currently working on generative UI with Hashbrown.',
    talkTitle: 'Talk: TBA',
    talkDescription: '',
    photoUrl: '/people/mike-ryan.jpg',
    photoBackground: 'dark',
    bannerUrl: 'https://angularbelgrade.org/banners/ng-belgrade-conf-2026.jpg',
    twitterUrl: 'https://twitter.com/MikeRyanDev/',
    linkedinUrl: 'https://linkedin.com/in/mikeryandesigns/',
    githubUrl: 'https://github.com/MikeRyanDev/',
  },
  'manfred-steyer': {
    id: 'manfred-steyer',
    name: 'Manfred Steyer',
    headline: 'Trainer and Consultant<br/>Angular GDE • Microsoft MVP',
    bio: "Trainer, consultant, and programming architect with a focus on Angular. Google Developer Expert (GDE) and Trusted Collaborator in the Angular team who writes for O'Reilly, the German Java Magazine, and windows.developer. Regularly speaks at conferences.",
    talkTitle: 'Talk: TBA',
    talkDescription: '',
    photoBackground: 'light',
    photoUrl: '/people/manfred-steyer.jpg',
    bannerUrl: 'https://angularbelgrade.org/banners/ng-belgrade-conf-2026.jpg',
    twitterUrl: 'https://twitter.com/ManfredSteyer/',
    linkedinUrl: 'https://linkedin.com/in/manfred-steyer-84645821/',
    githubUrl: 'https://github.com/manfredsteyer/',
  },
};

const speakers = shuffle(Object.values(speakerMap));

export const speakersResource = {
  getSpeakers: () => speakers,
  getSpeakerById: (id: string) => speakerMap[id],
  getSpeakerUrl: (id: string) => `https://angularbelgrade.org/speakers/${id}`,
} as const;
