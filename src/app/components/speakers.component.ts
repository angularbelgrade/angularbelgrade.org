import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Speaker } from '../models/speaker';

@Component({
  selector: 'bgd-speakers',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
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
          height="170"
          width="170"
        />

        <div class="speaker-info">
          <div class="speaker-details">
            <h3 class="speaker-name">{{ speaker.name }}</h3>
            <p class="speaker-headline" [innerHTML]="speaker.headline"></p>
          </div>

          <p class="speaker-talk-title">{{ speaker.talkTitle }}</p>
        </div>
      </a>
    </div>

    <p class="more-speakers" *ngIf="showMore">
      More speakers will be announced soon!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid #303b57;
      }

      .speaker-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin: 0 1rem;
      }

      .speaker {
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        border: 1px solid #303b57;
        border-radius: 0.5rem;
        width: 100%;
        text-decoration: none;
      }

      .speaker:hover {
        color: inherit;
        border-color: #d62f39;
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
      }

      .speaker-headline {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
      }

      .speaker-talk-title {
        font-size: 1.25rem;
        margin: 0;
        line-height: 1.4;
      }

      .more-speakers {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 600;
        margin-top: 2rem;
        margin-bottom: 0;
        padding: 0 2rem;
      }

      @media only screen and (min-width: 850px) {
        .speaker-list {
          max-width: 720px;
          margin: 0 auto;
        }

        .speaker {
          padding: 2rem;
          flex-direction: row;
          align-items: stretch;
        }

        .speaker-info {
          align-items: flex-start;
          justify-content: space-between;
          text-align: left;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersComponent {
  @Input() speakers: Speaker[] = [];
  @Input() showMore = false;

  trackById(_: number, speaker: Speaker): string {
    return speaker.id;
  }
}
