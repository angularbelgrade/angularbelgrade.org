import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from '../components/banner.component';
import { EventDetailsComponent } from '../components/event-details.component';
import { SpeakersComponent } from '../components/speakers.component';
import { SponsorsComponent } from '../components/sponsors.component';

@Component({
  selector: 'bgd-home',
  standalone: true,
  template: `
    <ng-container>
      <bgd-banner />
      <bgd-event-details />
      <bgd-speakers />
      <bgd-sponsors />
      <p class="under-construction">Under Construction</p>
    </ng-container>
  `,
  styles: [
    `
      .under-construction {
        text-align: center;
        font-size: 2rem;
        margin: 0;
        padding: 2rem 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BannerComponent,
    EventDetailsComponent,
    SpeakersComponent,
    SponsorsComponent,
  ],
})
export default class HomeComponent {}
