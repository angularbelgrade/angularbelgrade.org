import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { getSpeakerById } from './speakers.resource';

const descriptions: Record<string, string> = {
  2023: 'Welcome to Angular Belgrade Day 2023, the first edition of the Angular conference in Belgrade, Serbia. Join us on November 4th to explore the latest trends and best practices in the Angular ecosystem. The event is free for all attendees!',
};

export function getRouteMetaByYear(year: number): RouteMeta {
  const title = `Angular Belgrade Day ${year}`;
  const description = descriptions[year];
  const image = `https://2023-edition.angularbelgrade.org/banners/angular-belgrade-day-${year}.jpg`;

  return {
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
}

export function getRouteMetaBySpeaker(): RouteMeta {
  function getTitle(route: ActivatedRouteSnapshot): string {
    const id = route.params['id'];
    const name = getSpeakerById(id)?.name;
    const year = id.split('-')[0];

    return `${name} | Angular Belgrade Day ${year}`;
  }

  return {
    title: getTitle,
    meta: (route) => {
      const id = route.params['id'];
      const year = id.split('-')[0];

      const title = getTitle(route);
      const description = descriptions[year];
      const image = `https://2023-edition.angularbelgrade.org/banners/angular-belgrade-day-${id}.jpg`;

      return [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:image:alt', content: title },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { name: 'twitter:image:alt', content: title },
      ];
    },
    canActivate: [
      (route) =>
        !!getSpeakerById(route.params['id']) ||
        inject(Router).createUrlTree(['/not-found']),
    ],
  };
}

export function getDescriptionByYear(year: number): string {
  return descriptions[year];
}
