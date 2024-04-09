import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-partners',
  standalone: true,
  template: `
    <h2 id="partners" class="section-title">Partners</h2>

    <div class="main-partners-container">
      <a href="https://angular.dev/" target="_blank" style="max-width: 20vw">
        <img
          alt="Angular"
          src="/orgs/angular.png"
          loading="lazy"
          style="max-width: 123px"
        />
      </a>

      <a href="https://nx.dev/" target="_blank" style="max-width: 25vw">
        <img
          alt="Nx"
          src="/orgs/nx.svg"
          loading="lazy"
          style="max-width: 153px"
        />
      </a>

      <a href="https://ngrx.io/" target="_blank" style="max-width: 20vw">
        <img
          alt="NgRx"
          src="/orgs/ngrx.svg"
          loading="lazy"
          style="max-width: 124px"
        />
      </a>

      <a
        href="https://en.fon.bg.ac.rs/"
        target="_blank"
        style="max-width: 45vw"
      >
        <img
          alt="Faculty of Organizational Sciences"
          src="/orgs/fon.svg"
          loading="lazy"
          style="max-width: 230px"
        />
      </a>
    </div>

    <div class="partners-container">
      <a href="https://analogjs.org/" target="_blank" style="max-width: 20vw">
        <img
          alt="Analog"
          src="/orgs/analog.svg"
          loading="lazy"
          style="max-width: 120px"
        />
      </a>

      <a href="https://ngrome.io/" target="_blank" style="max-width: 15vw">
        <img
          alt="NG Rome"
          src="/orgs/ng-rome.svg"
          loading="lazy"
          style="max-width: 96px"
        />
      </a>

      <a
        href="https://www.meetup.com/angular-meetup-graz/"
        target="_blank"
        style="max-width: 15vw"
      >
        <img
          alt="Angular Graz"
          src="/orgs/angular-graz.svg"
          loading="lazy"
          style="max-width: 95px"
        />
      </a>

      <a
        href="https://www.meetup.com/angulartoronto/"
        target="_blank"
        style="max-width: 15vw"
      >
        <img
          alt="Angular Toronto"
          src="/orgs/angular-toronto.svg"
          loading="lazy"
          style="max-width: 96px"
        />
      </a>

      <a
        href="https://www.angular.love/en/"
        target="_blank"
        style="max-width: 16vw"
      >
        <img
          alt="Angular Love"
          src="/orgs/angular-love.svg"
          loading="lazy"
          style="max-width: 101px"
        />
      </a>

      <a
        href="https://www.meetup.com/angular-macedonia/"
        target="_blank"
        style="max-width: 15vw"
      >
        <img
          alt="Angular Macedonia"
          src="/orgs/angular-macedonia.svg"
          loading="lazy"
          style="max-width: 90px"
        />
      </a>

      <a href="https://ng-be.org/" target="_blank" style="max-width: 17vw">
        <img
          alt="NG-BE"
          src="/orgs/ng-be.png"
          loading="lazy"
          style="max-width: 105px"
        />
      </a>

      <a
        href="https://www.meetup.com/angular-athens/"
        target="_blank"
        style="max-width: 15vw"
      >
        <img
          alt="Angular Athens"
          src="/orgs/angular-athens.svg"
          loading="lazy"
          style="max-width: 95px"
        />
      </a>

      <a
        href="https://www.meetup.com/angular-vienna/"
        target="_blank"
        style="max-width: 15vw"
      >
        <img
          alt="Angular Vienna"
          src="/orgs/angular-vienna.svg"
          loading="lazy"
          style="max-width: 95px"
        />
      </a>

      <a
        href="https://twitter.com/ngTurkiye/"
        target="_blank"
        style="max-width: 15vw"
      >
        <img
          alt="Angular Turkey"
          src="/orgs/angular-turkey.svg"
          loading="lazy"
          style="max-width: 95px"
        />
      </a>

      <a href="https://armada-js.com/" target="_blank" style="max-width: 14vw">
        <img
          alt="ArmadaJS"
          src="/orgs/armada-js.png"
          loading="lazy"
          style="max-width: 90px"
        />
      </a>

      <a
        href="https://greece.cityjsconf.org/"
        target="_blank"
        style="max-width: 22vw"
      >
        <img
          alt="CityJS Athens"
          src="/orgs/city-js-athens.svg"
          loading="lazy"
          style="max-width: 135px"
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
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }

      .partners-container {
        margin-top: 2rem;
      }

      img {
        width: 100%;
        height: auto;
      }

      @media only screen and (min-width: 850px) {
        .main-partners-container {
          gap: 4rem;
        }

        .partners-container {
          max-width: 800px;
          margin: 2rem auto 0 auto;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent {}
