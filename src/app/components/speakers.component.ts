import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { speakersResource } from '../resources/speakers.resource';

@Component({
  selector: 'bgd-speakers',
  imports: [RouterLink],
  template: `
    <h2 id="speakers" class="section-title">Speakers</h2>

    <div class="speaker-list" style="display: none">
      @for (speaker of speakers; track speaker.id) {
        <a class="speaker" routerLink="/speakers/{{ speaker.id }}">
          <div class="speaker-photo-container">
            <img
              class="open-link"
              src="/icons/open-link.svg"
              alt="Open Link Icon"
              loading="lazy"
              height="26"
              width="26"
            />

            <img
              class="speaker-photo"
              [alt]="speaker.name"
              [src]="speaker.photoUrl"
              height="220"
              width="220"
            />
          </div>

          <div class="speaker-info">
            <div class="speaker-details">
              <h3 class="speaker-name">{{ speaker.name }}</h3>
              <p class="speaker-headline" [innerHTML]="speaker.headline"></p>
            </div>
          </div>
        </a>
      }
    </div>

    <p class="speakers-announcement-note">Speakers will be announced soon!</p>

    <div class="cfp">
      <p class="cfp-note">
        Interested in speaking at NG Belgrade Conf?
        <i>Call for Papers closes on Jan 31, 2026.</i>
      </p>
      <a
        class="cfp-button"
        href="https://forms.gle/Q1eRDgKg94VM7Wpb9"
        target="_blank"
      >
        Submit Your Talk
      </a>
    </div>
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
        gap: 1rem;
        text-decoration: none;
      }

      .speaker:hover {
        color: inherit;
      }

      .speaker-photo-container {
        position: relative;
      }

      .open-link {
        position: absolute;
        top: 4px;
        right: 7px;
        z-index: 1;
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

      .speakers-announcement-note {
        margin: 0 0 2rem 0;
        padding: 0 1rem;
        text-align: center;
        font-weight: 600;
      }

      .cfp {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 0 1rem;
      }

      .cfp-note {
        margin: 0;
      }

      .cfp-button {
        color: white;
        background: var(--angular-gradient);
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
      }

      .cfp-button:hover {
        opacity: 0.9;
      }

      @media only screen and (min-width: 850px) {
        .speaker-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 340px));
          justify-content: center;
          gap: 2rem;
        }

        .open-link {
          display: none;
        }

        .cfp-note,
        .cfp-button,
        .speakers-announcement-note {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersComponent {
  readonly speakers = speakersResource.getSpeakers();
}
