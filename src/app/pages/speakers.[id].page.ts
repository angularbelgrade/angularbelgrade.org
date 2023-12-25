import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Input as RouteInput,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';
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
    const banner =
      speakersResource.getSpeakerById(route.params['id']).photoUrl ||
      metaResource.banner;

    return [
      { name: 'description', content: metaResource.description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: metaResource.description },
      { property: 'og:image', content: banner },
      { property: 'og:image:alt', content: title },
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
  standalone: true,
  imports: [NgIf],
  template: `
    <h1 class="section-title">{{ speaker().name }}</h1>

    <img
      class="speaker-photo"
      [alt]="speaker().name"
      [src]="speaker().photoUrl"
      fetchPriority="high"
      loading="eager"
      height="250"
      width="250"
    />

    <p class="speaker-headline" [innerHTML]="speaker().headline"></p>

    <div class="social-media-links">
      <a
        *ngIf="speaker().twitterUrl"
        [href]="speaker().twitterUrl"
        target="_blank"
        title="Twitter"
      >
        <img src="/icons/twitter.svg" alt="Twitter" height="24" width="24" />
      </a>

      <a
        *ngIf="speaker().linkedinUrl"
        [href]="speaker().linkedinUrl"
        target="_blank"
        title="LinkedIn"
      >
        <img src="/icons/linkedin.svg" alt="LinkedIn" height="24" width="24" />
      </a>

      <a
        *ngIf="speaker().githubUrl"
        [href]="speaker().githubUrl"
        target="_blank"
        title="GitHub"
      >
        <img src="/icons/github.svg" alt="GitHub" height="24" width="24" />
      </a>
    </div>

    <p class="speaker-bio" [innerHTML]="speaker().bio"></p>

    <h2 class="talk-title">{{ speaker().talkTitle }}</h2>

    <p class="talk-description" [innerHTML]="speaker().talkDescription"></p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        margin: 0 1rem 2rem 1rem;
        align-items: center;
      }

      .speaker-photo {
        border-radius: 0.5rem;
        margin-bottom: 1rem;
      }

      .speaker-headline {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
        text-align: center;
      }

      .social-media-links {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin: 1rem 0 2rem 0;
      }

      .social-media-links > a {
        display: flex;
      }

      .speaker-bio,
      .talk-description {
        margin: 0;
        line-height: 1.5;
      }

      .talk-title {
        margin: 2rem 0;
        text-align: center;
        font-weight: 600;
      }

      @media only screen and (min-width: 850px) {
        :host {
          max-width: 900px;
          margin: 0 auto 2rem auto;
        }

        .speaker-bio {
          margin: 0 1rem;
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
