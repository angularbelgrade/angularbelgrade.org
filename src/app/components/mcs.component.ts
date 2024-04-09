import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TeamMember } from '../models/team-member.model';

@Component({
  selector: 'bgd-mcs',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <h2 id="mcs" class="section-title">MCs</h2>

    <div class="mc-list">
      <div class="mc" *ngFor="let mc of mcs">
        <div class="mc-photo-container">
          <img
            class="mc-photo"
            [alt]="mc.name"
            [src]="mc.photoUrl"
            loading="lazy"
            height="220"
            width="220"
          />
        </div>

        <div class="mc-details">
          <h3 class="mc-name">{{ mc.name }}</h3>
          <p class="mc-headline" [innerHTML]="mc.headline"></p>

          <div class="social-media-links">
            <a
              *ngIf="mc.twitterUrl"
              [href]="mc.twitterUrl"
              target="_blank"
              title="Twitter"
            >
              <img
                src="/icons/twitter.svg"
                alt="Twitter"
                height="24"
                width="24"
              />
            </a>

            <a
              *ngIf="mc.linkedinUrl"
              [href]="mc.linkedinUrl"
              target="_blank"
              title="LinkedIn"
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                height="24"
                width="24"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border-color);
      }

      .mc-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
      }

      .mc {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      .mc-photo-container {
        position: relative;
      }

      .mc-photo {
        border-radius: 0.5rem;
      }

      .mc-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .mc-name {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .mc-headline {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
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
          margin: 0 auto 2rem auto;
        }

        .mc-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 340px));
          justify-content: center;
          gap: 2rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MCsComponent {
  readonly mcs: TeamMember[] = [
    {
      name: 'Luciano Murruni',
      headline: 'Lead Software Engineer at ConTe.it<br/>NG Rome Organizer',
      photoUrl: '/people/luciano-murruni.jpg',
      twitterUrl: 'https://twitter.com/MrMurruni/',
      linkedinUrl: 'https://www.linkedin.com/in/lucianomurruni/',
    },
    {
      name: 'Michael Egger-Zikes',
      headline: 'Trainer and Consultant at AngularArchitects',
      photoUrl: '/people/michael-egger-zikes.jpg',
      twitterUrl: 'https://twitter.com/MikeZks/',
      linkedinUrl: 'https://www.linkedin.com/in/michael-egger-zikes/',
    },
  ];
}
