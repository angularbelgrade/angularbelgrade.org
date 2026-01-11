import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { metaResource } from '../resources/meta.resource';
import { BannerComponent } from '../components/banner.component';
import { EventDetailsComponent } from '../components/event-details.component';
import { SpeakersComponent } from '../components/speakers.component';
import { MCsComponent } from '../components/mcs.component';
import { WorkshopComponent } from '../components/workshop.component';
import { TicketsComponent } from '../components/tickets.component';
import { SponsorsComponent } from '../components/sponsors.component';
import { LocationComponent } from '../components/location.component';

export const routeMeta: RouteMeta = {
  title: metaResource.title,
  meta: [
    { name: 'description', content: metaResource.description },
    { property: 'og:title', content: metaResource.title },
    { property: 'og:description', content: metaResource.description },
    { property: 'og:image', content: metaResource.bannerUrl },
    { property: 'og:image:alt', content: metaResource.title },
    { name: 'twitter:title', content: metaResource.title },
    { name: 'twitter:description', content: metaResource.description },
    { name: 'twitter:image', content: metaResource.bannerUrl },
    { name: 'twitter:image:alt', content: metaResource.title },
  ],
};

@Component({
  imports: [
    BannerComponent,
    EventDetailsComponent,
    SpeakersComponent,
    MCsComponent,
    WorkshopComponent,
    TicketsComponent,
    SponsorsComponent,
    LocationComponent,
  ],
  template: `
    <bgd-banner />
    <bgd-event-details />
    <bgd-speakers />
    <bgd-mcs />
    <bgd-workshop />
    <bgd-tickets />
    <bgd-sponsors />
    <bgd-location />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {}
