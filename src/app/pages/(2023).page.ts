import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from '../components/banner.component';
import { EventDetailsComponent } from '../components/event-details.component';
import { SpeakersComponent } from '../components/speakers.component';
import { SponsorsComponent } from '../components/sponsors.component';
import { PartnersComponent } from '../components/partners.component';
import { AgendaComponent } from '../components/agenda.component';
import { getSpeakersByYear } from '../resources/speakers.resource';
import {
  getDescriptionByYear,
  getRouteMetaByYear,
} from '../resources/meta.resource';

export const routeMeta = getRouteMetaByYear(2023);

@Component({
  standalone: true,
  imports: [
    BannerComponent,
    EventDetailsComponent,
    SpeakersComponent,
    SponsorsComponent,
    PartnersComponent,
    AgendaComponent,
  ],
  template: `
    <bgd-banner [year]="2023" />

    <bgd-event-details
      [eventDescription]="eventDescription"
      [eventDate]="eventDate"
      [locationName]="locationName"
      [locationLink]="locationLink"
      [registrationLink]="registrationLink"
    />

    <bgd-speakers [speakers]="speakers" [showMore]="false" />

    <!--    <bgd-agenda />-->

    <bgd-sponsors>
      <a
        href="https://www.publicissapient.com/"
        title="Publicis Sapient"
        target="_blank"
      >
        <img
          class="sapient-logo"
          alt="Publicis Sapient"
          src="/orgs//sapient.svg"
          height="110"
          width="201"
          loading="lazy"
        />
      </a>

      <a
        href="https://webkraft.studio/"
        title="Webkraft Studio"
        target="_blank"
      >
        <img
          class="webkraft-logo"
          alt="Webkraft Studio"
          src="/orgs/webkraft.svg"
          height="60"
          width="251"
          loading="lazy"
        />
      </a>
    </bgd-sponsors>

    <bgd-partners>
      <a href="https://ngrx.io/" title="NgRx" target="_blank">
        <img
          alt="NgRx"
          src="/orgs/ngrx.svg"
          height="110"
          width="110"
          loading="lazy"
        />
      </a>

      <a
        href="https://www.angular.love/en/"
        title="Angular Love"
        target="_blank"
      >
        <img
          alt="Angular Love"
          src="/orgs/angular-love.svg"
          height="110"
          width="110"
          loading="lazy"
        />
      </a>

      <a
        href="https://www.meetup.com/angulartoronto/"
        title="Angular Toronto"
        target="_blank"
      >
        <img
          alt="Angular Toronto"
          src="/orgs/angular-toronto.svg"
          height="110"
          width="103"
          loading="lazy"
        />
      </a>

      <a href="https://ngrome.io/" title="Angular Rome" target="_blank">
        <img
          alt="Angular Rome"
          src="/orgs/angular-rome.svg"
          height="110"
          width="110"
          loading="lazy"
        />
      </a>

      <a
        href="https://www.meetup.com/angular-athens/"
        title="Angular Athens"
        target="_blank"
      >
        <img
          alt="Angular Athens"
          src="/orgs/angular-athens.svg"
          height="110"
          width="110"
          loading="lazy"
        />
      </a>

      <a href="https://analogjs.org/" title="AnalogJS" target="_blank">
        <img
          alt="AnalogJS"
          src="/orgs/analog.svg"
          height="90"
          width="127"
          loading="lazy"
        />
      </a>

      <a href="https://www.jetbrains.com/" title="JetBrains" target="_blank">
        <img
          alt="JetBrains"
          src="/orgs/jet-brains.svg"
          height="110"
          width="110"
          loading="lazy"
        />
      </a>

      <a href="https://cityjsconf.org/" title="CityJS" target="_blank">
        <img
          alt="CityJS"
          src="/orgs/city-js.svg"
          height="70"
          width="254"
          loading="lazy"
        />
      </a>

      <a
        href="https://www.packtpub.com/"
        title="Packt Publishing"
        target="_blank"
      >
        <img
          alt="Packt Publishing"
          src="/orgs/packt-publishing.svg"
          height="55"
          width="204"
          loading="lazy"
        />
      </a>
    </bgd-partners>
  `,
  styles: [
    `
      @media only screen and (min-width: 850px) {
        .sapient-logo {
          height: 150px;
          width: 275px;
        }

        .webkraft-logo {
          height: 90px;
          width: 376px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NgBgDay2023Page {
  readonly eventDescription = getDescriptionByYear(2023);
  readonly eventDate = new Date('2023-11-04');
  readonly locationName = 'Startit Centar';
  readonly locationLink = 'https://goo.gl/maps/4eCq4Yi5WQqHEZnV6';
  readonly registrationLink = 'https://forms.gle/ovKuPnRnBuKuQ8tKA';
  readonly speakers = getSpeakersByYear(2023);
}
