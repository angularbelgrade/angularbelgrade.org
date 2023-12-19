import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { metaResource } from '../resources/meta.resource';
import { BannerComponent } from '../components/banner.component';
import { EventDetailsComponent } from '../components/event-details.component';
import { SpeakersComponent } from '../components/speakers.component';
import { WorkshopComponent } from '../components/workshop.component';
import { TicketsComponent } from '../components/tickets.component';
import { SponsorsComponent } from '../components/sponsors.component';
import { PartnersComponent } from '../components/partners.component';
import { VenueComponent } from '../components/venue.component';

export const routeMeta: RouteMeta = {
  title: metaResource.title,
  meta: [
    { name: 'description', content: metaResource.description },
    { property: 'og:title', content: metaResource.title },
    { property: 'og:description', content: metaResource.description },
    { property: 'og:image', content: metaResource.banner },
    { property: 'og:image:alt', content: metaResource.title },
    { name: 'twitter:title', content: metaResource.title },
    { name: 'twitter:description', content: metaResource.description },
    { name: 'twitter:image', content: metaResource.banner },
    { name: 'twitter:image:alt', content: metaResource.title },
  ],
};

@Component({
  standalone: true,
  imports: [
    BannerComponent,
    EventDetailsComponent,
    SpeakersComponent,
    WorkshopComponent,
    TicketsComponent,
    SponsorsComponent,
    PartnersComponent,
    VenueComponent,
  ],
  template: `
    <bgd-banner />
    <bgd-event-details />
    <bgd-speakers />
    <bgd-workshop />
    <bgd-tickets />
    <bgd-sponsors />
    <bgd-partners />
    <bgd-venue />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IndexPage {}
