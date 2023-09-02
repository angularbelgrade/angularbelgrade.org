import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input as RouteInput,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { getSpeakerById } from '../resources/speakers.resource';
import { getRouteMetaBySpeaker } from '../resources/meta.resource';

export const routeMeta = getRouteMetaBySpeaker();

@Component({
  standalone: true,
  imports: [NgIf],
  template: `
    <h2 class="speaker-title">{{ speaker().name }}</h2>

    <img
      class="speaker-photo"
      [alt]="speaker().name"
      [src]="speaker().photoUrl"
      fetchPriority="high"
      loading="eager"
      height="200"
      width="200"
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

    <p class="speaker-bio">{{ speaker().bio }}</p>

    <h2 class="talk-title">{{ speaker().talkTitle }}</h2>

    <p class="talk-description" [innerHTML]="speaker().talkDescription"></p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        margin: 2rem 1rem;
        align-items: center;
      }

      .speaker-title {
        margin: 0 0 2rem 0;
        font-size: 2rem;
        text-align: center;
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

      .speaker-bio {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
        text-align: justify;
      }

      .talk-title {
        margin: 2rem 0;
        text-align: center;
      }

      .talk-description {
        margin: 0;
        line-height: 1.4;
        text-align: justify;
      }

      @media only screen and (min-width: 850px) {
        :host {
          width: 750px;
          margin: 2rem auto;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeakerDetailsPage {
  readonly speakerId = signal<string>('');
  readonly speaker = computed(() => getSpeakerById(this.speakerId())!);

  @RouteInput() set id(id: string) {
    this.speakerId.set(id);
  }
}
