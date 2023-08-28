import { RouteMeta } from '@analogjs/router';

const title = 'Angular Belgrade Day 2023';
const description =
  "Welcome to Angular Belgrade Day 2023! Join us for a day packed with insightful talks. Explore the latest trends, best practices, and real-world use cases of Angular. Whether you're a seasoned pro or just starting with Angular, this event is your chance to learn, connect, and get inspired.";
const image = 'https://angularbelgrade.com/banners/angular-belgrade-day-23.jpg';

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
