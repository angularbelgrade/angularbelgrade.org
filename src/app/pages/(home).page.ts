import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from '../components/banner.component';
import { EventDetailsComponent } from '../components/event-details.component';
import { SpeakersComponent } from '../components/speakers.component';
import { Speaker } from '../models/speaker';
import { SponsorsComponent } from '../components/sponsors.component';
import { PartnersComponent } from '../components/partners.component';

@Component({
  selector: 'bgd-home',
  standalone: true,
  imports: [
    BannerComponent,
    EventDetailsComponent,
    SpeakersComponent,
    SponsorsComponent,
    PartnersComponent,
  ],
  template: `
    <bgd-banner [year]="2023" />

    <bgd-event-details
      [eventDate]="eventDate"
      [locationLink]="locationLink"
      [registrationLink]="registrationLink"
    />

    <bgd-speakers [speakers]="speakers" [showMore]="true" />

    <bgd-sponsors>
      <a
        href="https://www.publicissapient.com/"
        title="Publicis Sapient"
        target="_blank"
      >
        <img
          class="sapient-logo"
          alt="Publicis Sapient"
          src="/sapient.svg"
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
          src="/webkraft.svg"
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
          src="/ngrx.svg"
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
          src="/angular-love.svg"
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
          src="/angular-toronto.svg"
          height="110"
          width="103"
          loading="lazy"
        />
      </a>

      <a href="https://ngrome.io/" title="Angular Rome" target="_blank">
        <img
          alt="Angular Rome"
          src="/angular-rome.svg"
          height="110"
          width="110"
          loading="lazy"
        />
      </a>

      <a href="https://www.jetbrains.com/" title="JetBrains" target="_blank">
        <img
          alt="JetBrains"
          src="/jet-brains.svg"
          height="110"
          width="110"
          loading="lazy"
        />
      </a>

      <a href="https://cityjsconf.org/" title="CityJS" target="_blank">
        <img
          alt="CityJS"
          src="/city-js.svg"
          height="70"
          width="254"
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
export default class HomeComponent {
  readonly eventDate = new Date('2023-11-04');
  readonly locationLink = 'https://goo.gl/maps/4eCq4Yi5WQqHEZnV6';
  readonly registrationLink = 'https://forms.gle/ovKuPnRnBuKuQ8tKA';

  readonly speakers: Speaker[] = [
    {
      name: 'Manfred Steyer',
      headline: 'Trainer and Consultant<br/>GDE in Angular • Microsoft MVP',
      talkTitle: 'How will Signals influence your Architecture?',
      photoUrl: '/manfred.png',
    },
    {
      name: 'Mladen Jakovljević',
      headline: 'Senior Frontend Developer at goUrban<br/>RxJS Core Team',
      talkTitle: 'Infinite Scrolling Implemented Using RxJS',
      photoUrl: '/mladen.jpg',
    },
    {
      name: 'Marko Stanimirović',
      headline:
        'Principal Frontend Engineer at SMG<br/>NgRx Core Team • GDE in Angular',
      talkTitle: 'NgRx SignalStore -<br />Journey from Vision to First Release',
      photoUrl: '/marko.jpg',
    },
  ];
}
