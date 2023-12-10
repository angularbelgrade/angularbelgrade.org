import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { BannerComponent } from '../components/banner.component';
import { EventDetailsComponent } from '../components/event-details.component';
import { LocationComponent } from '../components/location.component';

const title = 'NG Belgrade Conf 2024';
const image = 'https://angularbelgrade.org/banners/ng-belgrade-conf-2024.jpg';

export const description =
  'NG Belgrade Conf 2024 is the largest Angular conference in the Balkans. It takes place in Belgrade, Serbia, including a Workshop Day on May 23rd and a Conference Day on May 24th. Join us to explore the latest trends and best practices in Angular!';

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

@Component({
  standalone: true,
  imports: [BannerComponent, EventDetailsComponent, LocationComponent],
  template: `
    <bgd-banner />
    <bgd-event-details />
    <bgd-location />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {}
