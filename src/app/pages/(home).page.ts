import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from '../components/banner.component';
import { EventDetailsComponent } from '../components/event-details.component';
import { SpeakersComponent } from '../components/speakers.component';
import { Speaker } from '../models/speaker';
import { SponsorsComponent } from '../components/sponsors.component';

@Component({
  selector: 'bgd-home',
  standalone: true,
  imports: [
    BannerComponent,
    EventDetailsComponent,
    SpeakersComponent,
    SponsorsComponent,
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
      <img
        alt="Publicis Sapient"
        src="/sapient.svg"
        height="150"
        width="274.63"
        loading="lazy"
      />
      <img
        alt="Webkraft Studio"
        src="/webkraft.svg"
        height="90"
        width="376.2"
        loading="lazy"
      />
    </bgd-sponsors>

    <h2 id="community-partners" class="section-title">Community Partners</h2>
    <div style="height: 700px"></div>
  `,
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
