import { RouteMeta } from '@analogjs/router';

const title = 'Angular Belgrade Day 2023';
const description =
  'Welcome to Angular Belgrade Day 2023! Join us on November 4 to explore the latest trends and best practices in the Angular ecosystem.';
const image = 'https://angularbelgrade.org/banners/angular-belgrade-day-23.jpg';

export const routeMeta: RouteMeta = {
  title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:image:alt', content: title },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:image:alt', content: title },
  ],
};
