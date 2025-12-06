import { Speaker } from '../models/speaker.model';

const speakerMap: Record<string, Speaker> = {};

export const speakersResource = {
  getSpeakers: () => Object.values(speakerMap),
  getSpeakerById: (id: string) => speakerMap[id],
  getSpeakerUrl: (id: string) => `https://angularbelgrade.org/speakers/${id}`,
} as const;
