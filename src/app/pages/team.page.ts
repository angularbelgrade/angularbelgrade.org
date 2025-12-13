import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { metaResource } from '../resources/meta.resource';
import { TeamMember } from '../models/team-member.model';

export const routeMeta: RouteMeta = {
  title: `Team | ${metaResource.title}`,
};

@Component({
  template: `
    <h1 class="section-title">Team</h1>

    <div class="member-list">
      @for (member of members; track member.name) {
        <div class="member">
          <div class="member-photo-container">
            <img
              class="member-photo"
              [alt]="member.name"
              [src]="member.photoUrl"
              loading="lazy"
              height="220"
              width="220"
            />
          </div>

          <div class="member-details">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-headline" [innerHTML]="member.headline"></p>

            <div class="social-media-links">
              @if (member.twitterUrl) {
                <a [href]="member.twitterUrl" target="_blank" title="Twitter">
                  <img
                    src="/icons/twitter.svg"
                    alt="Twitter"
                    height="24"
                    width="24"
                  />
                </a>
              }

              @if (member.linkedinUrl) {
                <a [href]="member.linkedinUrl" target="_blank" title="LinkedIn">
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    height="24"
                    width="24"
                  />
                </a>
              }

              @if (member.githubUrl) {
                <a [href]="member.githubUrl" target="_blank" title="GitHub">
                  <img
                    src="/icons/github.svg"
                    alt="GitHub"
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
        background-color: var(--light-orange-color);
        display: flex;
        flex-direction: column;
        padding: 3rem 0;
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

      .member-photo-container {
        position: relative;
      }

      .member-photo {
        box-shadow: 13px 13px 0px -3px var(--dark-purple-color);
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
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--dark-purple-color);
      }

      .member-headline {
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

        .member-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 290px));
          justify-content: center;
          column-gap: 7rem;
          row-gap: 3rem;
        }

        .member {
          align-items: flex-start;
        }

        .member-details {
          align-items: flex-start;
          text-align: left;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TeamPage {
  readonly members: TeamMember[] = [
    {
      name: 'Marko Stanimirović',
      headline:
        'Frontend Tech Lead at BlinkOps<br/>NgRx Co-Maintainer • Angular GDE',
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
      name: 'Duško Perić',
      headline: 'Senior Angular Developer at TwogNation',
      photoUrl: '/people/dusko-peric.jpg',
      linkedinUrl: 'https://linkedin.com/in/du%C5%A1ko-peri%C4%87-a90a9782/',
      githubUrl: 'https://github.com/DuskoPeric',
    },
    {
      name: 'Anđela Pejanović',
      headline: 'Senior Software Engineer',
      photoUrl: '/people/andjela-pejanovic.jpg',
      linkedinUrl: 'https://linkedin.com/in/andjelapejanovic/',
    },
    {
      name: 'Miloš Rujević',
      headline: 'Technical Product Manager',
      photoUrl: '/people/milos-rujevic.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/aitechpm/',
      githubUrl: 'https://github.com/itmilos/',
    },
    {
      name: 'Edis Šarda',
      headline: 'Senior Software Engineer at SAP',
      photoUrl: '/people/edis-sarda.jpg',
      linkedinUrl: 'https://linkedin.com/in/edissarda/',
    },
    {
      name: 'Milica Petrović',
      headline: 'Senior Frontend Engineer at BlinkOps',
      photoUrl: '/people/milica-petrovic.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/milica-petrovic-5235bbab/',
    },
    {
      name: 'Vesna Babić',
      headline: 'Frontend Engineer at JobCloud',
      photoUrl: '/people/vesna-babic.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/vesna-babi%C4%87-49337918b/',
    },
    {
      name: 'Jovan Mitrović',
      headline: 'Frontend Engineer at JobCloud',
      photoUrl: '/people/jovan-mitrovic.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/jovan-mitrovic-b682b41b9/',
    },
  ];
}
