import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { RouteMeta } from '@analogjs/router';
import { RouterLink } from '@angular/router';
import { metaResource } from '../resources/meta.resource';
import { TeamMember } from '../models/team-member.model';

export const routeMeta: RouteMeta = {
  title: `Team | ${metaResource.title}`,
};

@Component({
  standalone: true,
  template: `
    <h1 class="section-title">Team</h1>

    <div class="member-list">
      <div class="member" *ngFor="let member of members">
        <img
          class="member-photo"
          [alt]="member.name"
          [src]="member.photoUrl"
          loading="lazy"
          height="220"
          width="220"
        />

        <div class="member-details">
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-headline" [innerHTML]="member.headline"></p>

          <div class="social-media-links">
            <a
              *ngIf="member.twitterUrl"
              [href]="member.twitterUrl"
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
              *ngIf="member.linkedinUrl"
              [href]="member.linkedinUrl"
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

            <a
              *ngIf="member.githubUrl"
              [href]="member.githubUrl"
              target="_blank"
              title="GitHub"
            >
              <img
                src="/icons/github.svg"
                alt="GitHub"
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
        display: flex;
        flex-direction: column;
        margin: 0 1rem 2rem 1rem;
        align-items: center;
      }

      .member-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
      }

      .member {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      .member-photo {
        border-radius: 0.5rem;
      }

      .member-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .member-name {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
      }

      .member-headline {
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

        .member-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 340px));
          justify-content: center;
          gap: 2rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, RouterLink, NgIf],
})
export default class TeamPage {
  readonly members: TeamMember[] = [
    {
      name: 'Marko Stanimirović',
      headline:
        'Principal Frontend Engineer at SMG<br/>NgRx Core Team • GDE in Angular',
      photoUrl: '/people/marko-stanimirovic.jpg',
      twitterUrl: 'https://twitter.com/MarkoStDev/',
      linkedinUrl: 'https://linkedin.com/in/markostanimirovic/',
      githubUrl: 'https://github.com/markostanimirovic',
    },
    {
      name: 'Uroš Avramović',
      headline: 'Founder at Webkraft Studio',
      photoUrl: '/people/uros-avramovic.jpg',
      twitterUrl: 'https://twitter.com/avramovic_u/',
      linkedinUrl: 'https://linkedin.com/in/avramz',
    },
    {
      name: 'Miloš Rujević',
      headline: 'Technical PM at Publicis Sapient',
      photoUrl: '/people/milos-rujevic.jpg',
      twitterUrl: 'https://twitter.com/MikeTechnicalPM/',
      githubUrl: 'https://github.com/itmilos/',
    },
    {
      name: 'Duško Perić',
      headline: 'Senior Frontend Engineer at SMG',
      photoUrl: '/people/dusko-peric.jpg',
      linkedinUrl: 'https://linkedin.com/in/du%C5%A1ko-peri%C4%87-a90a9782/',
    },
    {
      name: 'Anđela Pejanović',
      headline: 'Senior Software Engineer',
      photoUrl: '/people/andjela-pejanovic.jpg',
      linkedinUrl: 'https://linkedin.com/in/andjelapejanovic/',
    },
    {
      name: 'Edis Šarda',
      headline: 'Senior Software Engineer at SAP',
      photoUrl: '/people/edis-sarda.jpg',
      linkedinUrl: 'https://linkedin.com/in/edissarda/',
    },
  ];
}
