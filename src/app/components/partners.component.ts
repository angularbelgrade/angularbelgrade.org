import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-partners',
  standalone: true,
  template: `
    <h2 id="partners" class="section-title">Partners</h2>

    <div class="partners-container">
      <a href="https://angular.dev/" target="_blank">
        <img
          alt="Angular"
          src="/orgs/angular.png"
          loading="lazy"
          style="max-height: 120px"
        />
      </a>
    </div>

    <div class="partners-container">
      <a href="https://ngrx.io/" target="_blank">
        <img
          alt="NgRx"
          src="/orgs/ngrx.svg"
          loading="lazy"
          style="max-height: 110px"
        />
      </a>

      <a href="https://analogjs.org/" target="_blank">
        <img
          alt="Analog"
          src="/orgs/analog.svg"
          loading="lazy"
          style="max-height: 100px"
        />
      </a>

      <a href="https://ngrome.io/" target="_blank">
        <img
          alt="NG Rome"
          src="/orgs/ng-rome.svg"
          loading="lazy"
          style="max-height: 102px"
        />
      </a>

      <a href="https://www.meetup.com/angular-meetup-graz/" target="_blank">
        <img
          alt="Angular Graz"
          src="/orgs/angular-graz.svg"
          loading="lazy"
          style="max-height: 102px"
        />
      </a>

      <a href="https://www.meetup.com/angulartoronto/" target="_blank">
        <img
          alt="Angular Toronto"
          src="/orgs/angular-toronto.svg"
          loading="lazy"
          style="max-height: 102px"
        />
      </a>

      <a href="https://www.angular.love/en/" target="_blank">
        <img
          alt="Angular Love"
          src="/orgs/angular-love.svg"
          loading="lazy"
          style="max-height: 102px"
        />
      </a>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 0 1rem 2rem 1rem;
        border-bottom: 1px solid var(--border-color);
      }

      .partners-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }

      .partners-container + .partners-container {
        margin-top: 2rem;
      }

      img {
        width: 100%;
        height: auto;
      }

      @media only screen and (min-width: 850px) {
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent {}
