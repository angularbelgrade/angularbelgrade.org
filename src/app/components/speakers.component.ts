import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { speakersResource } from '../resources/speakers.resource';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'bgd-speakers',
  imports: [RouterLink],
  template: `
    <h2 id="speakers" class="section-title">Speakers</h2>

    <div class="speaker-list">
      @for (speaker of speakers; track speaker.id) {
        <a class="speaker" routerLink="/speakers/{{ speaker.id }}">
          <div class="speaker-photo-container">
            <img
              class="open-link"
              src="/icons/open-link-{{
                speaker.photoBackground === 'dark' ? 'white' : 'black'
              }}.svg"
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
              <div class="speaker-top">
                <h3 class="speaker-name">{{ speaker.name }}</h3>
                <img
                  height="30"
                  width="30"
                  loading="lazy"
                  [src]="speaker.flagUrl"
                  alt="Flag"
                />
              </div>

              <p class="speaker-headline" [innerHTML]="speaker.headline"></p>
            </div>
          </div>
        </a>
      }
    </div>

    <p class="speakers-announcement-note">
      More speakers will be announced soon!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 3rem 0;
        background-color: var(--light-orange-color);
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
        gap: 1.5rem;
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
        box-shadow: 13px 13px 0px -3px var(--magenta-color);
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

      .speaker-top {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;
      }

      .speaker-name {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--magenta-color);
      }

      .speaker-headline {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
        opacity: 0.8;
      }

      .speakers-announcement-note {
        width: fit-content;
        margin: 2rem auto 0;
        padding: 0 1rem;
        text-align: center;
        font-weight: 600;
      }

      @media only screen and (min-width: 850px) {
        .speaker-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 290px));
          justify-content: center;
          gap: 3rem;
        }

        .speaker {
          align-items: flex-start;
        }

        .speaker-top {
          justify-content: flex-start;
        }

        .speaker-info {
          text-align: start;
        }

        .open-link {
          display: none;
        }

        .speakers-announcement-note {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersComponent {
  readonly #platformId = inject(PLATFORM_ID);
  readonly #isBrowser = isPlatformBrowser(this.#platformId);
  readonly speakers = speakersResource.getSpeakers(this.#isBrowser);
}
