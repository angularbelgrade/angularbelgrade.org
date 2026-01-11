import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Input as RouteInput,
  signal,
} from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { metaResource } from '../resources/meta.resource';
import { speakersResource } from '../resources/speakers.resource';

function getTitle(route: ActivatedRouteSnapshot): string {
  const id = route.params['id'];
  const name = speakersResource.getSpeakerById(id).name;
  return `${name} | ${metaResource.title}`;
}

export const routeMeta: RouteMeta = {
  title: getTitle,
  meta: (route) => {
    const title = getTitle(route);
    const speaker = speakersResource.getSpeakerById(route.params['id']);
    const banner = speaker.bannerUrl || metaResource.bannerUrl;

    return [
      { name: 'description', content: metaResource.description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: metaResource.description },
      { property: 'og:image', content: banner },
      { property: 'og:image:alt', content: title },
      {
        property: 'og:url',
        content: speakersResource.getSpeakerUrl(route.params['id']),
      },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: metaResource.description },
      { name: 'twitter:image', content: banner },
      { name: 'twitter:image:alt', content: title },
    ];
  },
  canActivate: [
    (route) =>
      !!speakersResource.getSpeakerById(route.params['id']) ||
      inject(Router).createUrlTree(['/not-found']),
  ],
};

@Component({
  template: `
    <div class="speaker">
      <div class="speaker-info">
        <img
          class="speaker-photo"
          [alt]="speaker().name"
          [src]="speaker().photoUrl"
          fetchPriority="high"
          loading="eager"
          height="250"
          width="250"
        />
      </div>
      <div class="member-details">
        <h1 class="section-title">{{ speaker().name }}</h1>
        <p class="speaker-headline" [innerHTML]="speaker().headline"></p>
        <div class="social-media-links">
          @if (speaker().twitterUrl) {
            <a [href]="speaker().twitterUrl" target="_blank" title="Twitter">
              <img
                src="/icons/twitter.svg"
                alt="Twitter"
                height="24"
                width="24"
              />
            </a>
          }

          @if (speaker().linkedinUrl) {
            <a [href]="speaker().linkedinUrl" target="_blank" title="LinkedIn">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                height="24"
                width="24"
              />
            </a>
          }

          @if (speaker().githubUrl) {
            <a [href]="speaker().githubUrl" target="_blank" title="GitHub">
              <img
                src="/icons/github.svg"
                alt="GitHub"
                height="24"
                width="24"
              />
            </a>
          }
        </div>
        <p class="speaker-bio" [innerHTML]="speaker().bio"></p>
      </div>
    </div>
    <h2 class="talk-title tba-text">{{ speaker().talkTitle }}</h2>

    <p class="talk-description" [innerHTML]="speaker().talkDescription"></p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        margin: 2rem 1rem;
        align-items: center;
        padding: 0;
      }

      .speaker {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .speaker-photo {
        margin-bottom: 1rem;
        box-shadow: 13px 13px 0px -3px var(--magenta-color);
      }

      .speaker-headline {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
        text-align: center;
        opacity: 0.8;
      }

      .member-details {
        align-items: flex-start;
        text-align: left;
      }

      .section-title {
        margin: 0 0 0.5rem 0;
        font-weight: 700;
        color: var(--magenta-color);
        text-align: center;
      }

      .social-media-links {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin: 0.5rem 0 1.5rem 0;
      }

      .social-media-links > a {
        display: flex;
      }

      .speaker-bio,
      .talk-description {
        font-size: 1rem;
        margin: 0;
        line-height: 1.5;
      }

      .talk-title {
        margin: 2rem 0;
        text-align: center;
        font-weight: 600;
      }

      .tba-text {
        background-color: var(--magenta-color);
        color: white;
        padding: 5px 10px;
      }

      @media only screen and (min-width: 850px) {
        :host {
          max-width: 900px;
          margin: 4rem auto;
          padding: 0 15px;
        }
        .speaker {
          flex-direction: row;
          align-items: flex-start;
          gap: 3rem;
        }
        .section-title {
          text-align: left;
        }
        .speaker-headline {
          text-align: left;
        }
        .social-media-links {
          justify-content: flex-start;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeakerDetailsPage {
  readonly speakerId = signal<string>('');
  readonly speaker = computed(() =>
    speakersResource.getSpeakerById(this.speakerId())
  );

  @RouteInput() set id(id: string) {
    this.speakerId.set(id);
  }
}
