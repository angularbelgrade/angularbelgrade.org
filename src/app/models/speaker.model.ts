export type Speaker = {
  id: string;
  name: string;
  headline: string;
  bio: string;
  talkTitle: string;
  talkDescription: string;
  photoUrl: string;
  photoBackground: 'light' | 'dark';
  flagUrl: string;
  bannerUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
};
