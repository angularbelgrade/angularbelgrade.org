import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TeamMember } from '../models/team-member.model';

@Component({
  selector: 'bgd-mcs',
  template: `
    <h2 id="mcs" class="section-title">Masters of Ceremony</h2>

    <div class="mc-list">
      @for (mc of mcs; track mc.name) {
        <div class="mc">
          <div class="mc-photo-container">
            <img
              class="mc-photo"
              [alt]="mc.name"
              [src]="mc.photoUrl"
              height="220"
              width="220"
            />
          </div>

          <div class="mc-details">
            <div class="mc-top">
              <h3 class="mc-name">{{ mc.name }}</h3>
              <img
                height="30"
                width="30"
                loading="lazy"
                [src]="mc.flagUrl"
                alt="Flag"
              />
            </div>

            <p class="mc-headline" [innerHTML]="mc.headline"></p>

            <div class="social-media-links">
              @if (mc.twitterUrl) {
                <a [href]="mc.twitterUrl" target="_blank" title="Twitter">
                  <img
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    height="24"
                    width="24"
                  />
                </a>
              }

              @if (mc.linkedinUrl) {
                <a [href]="mc.linkedinUrl" target="_blank" title="LinkedIn">
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    height="24"
                    width="24"
                  />
                </a>
              }
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 3rem 0;
        background-color: var(--lighter-orange-color);
      }

      .mc-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 260px;
        margin: 0 auto;
      }

      .mc {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
      }

      .mc-photo-container {
        position: relative;
      }

      .mc-photo {
        box-shadow: 13px 13px 0px -3px var(--orange-color);
      }

      .mc-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .mc-top {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        align-items: center;
        justify-content: center;
      }

      .mc-name {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--orange-color);
      }

      .mc-headline {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
        opacity: 0.8;
      }

      .social-media-links {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin-top: 0.25rem;
      }

      .social-media-links > a {
        display: flex;
      }

      @media only screen and (min-width: 850px) {
        :host {
          margin: 0 auto;
        }

        .mc-list {
          width: auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 260px));
          justify-content: center;
          gap: 8rem;
          padding: 1rem;
        }

        .mc-details {
          align-items: flex-start;
          text-align: left;
        }

        .mc-photo-container {
          align-self: flex-start;
        }

        .mc-top {
          justify-content: flex-start;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MCsComponent {
  readonly mcs: TeamMember[] = [
    {
      name: 'Jelena Babić',
      headline: 'SAP Consultant at MSG Global Solutions',
      photoUrl: '/people/jelena-babic.jpg',
      flagUrl: '/flags/serbia.png',
      linkedinUrl: 'https://www.linkedin.com/in/jelena-ljubenovic-b08a68105/',
    },
    {
      name: 'Michael Egger-Zikes',
      headline: 'Trainer and Consultant at AngularArchitects',
      photoUrl: '/people/michael-egger-zikes.jpg',
      flagUrl: '/flags/austria.png',
      twitterUrl: 'https://twitter.com/MikeZks/',
      linkedinUrl: 'https://www.linkedin.com/in/michael-egger-zikes/',
    },
  ];
}
