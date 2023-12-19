import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Speaker } from '../models/speaker.model';
import { speakersResource } from '../resources/speakers.resource';

@Component({
  selector: 'bgd-speakers',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <h2 id="speakers" class="section-title">Speakers</h2>

    <div class="speaker-list">
      <a
        class="speaker"
        *ngFor="let speaker of speakers; trackBy: trackById"
        routerLink="/speakers/{{ speaker.id }}"
      >
        <img
          class="speaker-photo"
          [alt]="speaker.name"
          [src]="speaker.photoUrl"
          loading="lazy"
          height="220"
          width="220"
        />

        <div class="speaker-info">
          <div class="speaker-details">
            <h3 class="speaker-name">{{ speaker.name }}</h3>
            <p class="speaker-headline" [innerHTML]="speaker.headline"></p>
          </div>
        </div>
      </a>
    </div>

    <p class="cfp-info">
      Interested in speaking at NG Belgrade Conf?
      <a href="https://forms.gle/CtiYUbP3JfjyTFzt8" target="_blank">
        Submit your talk!
      </a>
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border-color);
      }

      .speaker-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
      }

      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        text-decoration: none;
      }

      .speaker:hover {
        color: inherit;
      }

      .speaker-photo {
        border-radius: 0.5rem;
      }

      .speaker-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 2rem;
      }

      .speaker-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .speaker-name {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .speaker-headline {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
      }

      .cfp-info {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 0;
        padding: 0 2rem;
        font-weight: 600;
      }

      @media only screen and (min-width: 850px) {
        .speaker-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 340px));
          justify-content: center;
          gap: 1rem;
        }

        .cfp-info {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersComponent {
  readonly speakers = speakersResource.getSpeakers();

  trackById(_: number, speaker: Speaker): string {
    return speaker.id;
  }
}
