import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-partners',
  standalone: true,
  template: `
    <h2 id="partners" class="section-title">Partners</h2>

    <div class="main-partners-container">
      <a href="https://angular.dev/" target="_blank">
        <img
          alt="Angular"
          src="/orgs/angular.png"
          loading="lazy"
          style="max-width: 123px"
        />
      </a>

      <a href="https://nx.dev/" target="_blank">
        <img
          alt="Nx"
          src="/orgs/nx.svg"
          loading="lazy"
          style="max-width: 153px"
        />
      </a>
    </div>

    <div class="partners-container">
      <a href="https://ngrx.io/" target="_blank">
        <img
          alt="NgRx"
          src="/orgs/ngrx.svg"
          loading="lazy"
          style="max-width: 96px"
        />
      </a>

      <a href="https://analogjs.org/" target="_blank">
        <img
          alt="Analog"
          src="/orgs/analog.svg"
          loading="lazy"
          style="max-width: 135px"
        />
      </a>

      <a href="https://ngrome.io/" target="_blank">
        <img
          alt="NG Rome"
          src="/orgs/ng-rome.svg"
          loading="lazy"
          style="max-width: 96px"
        />
      </a>

      <a href="https://www.meetup.com/angular-meetup-graz/" target="_blank">
        <img
          alt="Angular Graz"
          src="/orgs/angular-graz.svg"
          loading="lazy"
          style="max-width: 95px"
        />
      </a>

      <a href="https://www.meetup.com/angulartoronto/" target="_blank">
        <img
          alt="Angular Toronto"
          src="/orgs/angular-toronto.svg"
          loading="lazy"
          style="max-width: 96px"
        />
      </a>

      <a href="https://www.angular.love/en/" target="_blank">
        <img
          alt="Angular Love"
          src="/orgs/angular-love.svg"
          loading="lazy"
          style="max-width: 101px"
        />
      </a>

      <a href="https://www.meetup.com/angular-macedonia/" target="_blank">
        <img
          alt="Angular Macedonia"
          src="/orgs/angular-macedonia.svg"
          loading="lazy"
          style="max-width: 90px"
        />
      </a>

      <a href="https://ng-be.org/" target="_blank">
        <img
          alt="NG-BE"
          src="/orgs/ng-be.png"
          loading="lazy"
          style="max-width: 95px"
        />
      </a>

      <a href="https://www.meetup.com/angular-athens/" target="_blank">
        <img
          alt="Angular Athens"
          src="/orgs/angular-athens.svg"
          loading="lazy"
          style="max-width: 95px"
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

      .main-partners-container,
      .partners-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }

      .main-partners-container {
        flex-direction: column;
      }

      .partners-container {
        flex-direction: row;
        margin-top: 2rem;
      }

      img {
        width: 100%;
        height: auto;
      }

      @media only screen and (min-width: 850px) {
        .main-partners-container {
          flex-direction: row;
          gap: 4rem;
        }

        .partners-container {
          max-width: 700px;
          margin: 2rem auto 0 auto;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent {}
