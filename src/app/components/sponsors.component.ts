import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-sponsors',
  template: `
    <h2 id="sponsors" class="section-title">Sponsors</h2>

    <h3>Silver</h3>

    <div class="sponsors-container" style="max-width: 950px; margin: 0 auto">
      <a
        href="https://hashbrown.dev/"
        target="_blank"
        style="width: 400px; max-width: 67vw"
      >
        <img alt="Hashbrown" src="/orgs/hashbrown.svg" />
      </a>

      <a
        href="https://ngrx.io/"
        target="_blank"
        style="width: 390px; max-width: 65vw"
      >
        <img alt="NgRx" src="/orgs/ngrx.svg" />
      </a>
    </div>

    <h3>Bronze</h3>

    <div class="sponsors-container">
      <a
        href="https://offering.solutions/"
        target="_blank"
        style="width: 300px; max-width: 52vw"
      >
        <img
          alt="Offering Solutions Software"
          src="/orgs/offering-solutions-software.svg"
        />
      </a>

      <a
        href="https://www.blinkops.com/"
        target="_blank"
        style="width: 330px; max-width: 57vw"
      >
        <img alt="BlinkOps" src="/orgs/blinkops.svg" />
      </a>
    </div>

    <h3>Media Partners</h3>

    <div class="partners-container">
      <a
        href="https://www.entrio.hr/"
        target="_blank"
        style="width: 200px; max-width: 35vw"
      >
        <img alt="Entrio" src="/orgs/entrio.png" />
      </a>

      <a
        href="https://www.youtube.com/@ng-news/"
        target="_blank"
        style="width: 110px; max-width: 19vw"
      >
        <img alt="ng-news" src="/orgs/ng-news.png" />
      </a>

      <a
        href="https://ekapija.com/"
        target="_blank"
        style="width: 225px; max-width: 39vw"
      >
        <img alt="eKapija" src="/orgs/ekapija.svg" />
      </a>

      <a
        href="https://startit.rs/"
        target="_blank"
        style="width: 225px; max-width: 39vw"
      >
        <img alt="Startit" src="/orgs/startit.png" />
      </a>
    </div>

    <div class="sponsors-actions">
      <p class="sponsors-text">Interested in sponsoring our conference?</p>
      <a
        class="sponsors-button"
        href="https://forms.gle/biMmYFgdjCXVQ96E7"
        target="_blank"
      >
        Become a Sponsor
      </a>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 3rem 0;
        background-color: var(--light-orange-color);
      }

      h3 {
        text-align: center;
        font-size: 1.75rem;
        font-weight: 600;
        margin: 3rem;
      }

      .sponsors-container,
      .partners-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .sponsors-container {
        gap: 3rem;
      }

      .partners-container {
        gap: 2rem;
      }

      img {
        width: 100%;
        height: auto;
      }

      .sponsors-actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        gap: 1rem;
      }

      .sponsors-text {
        margin: 0;
        font-weight: 600;
        text-align: center;
      }

      .sponsors-button {
        color: white;
        background: var(--angular-gradient);
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
      }

      .sponsors-button:hover {
        opacity: 0.9;
      }

      @media only screen and (min-width: 850px) {
        .sponsors-container,
        .partners-container {
          padding: 1rem 0;
        }

        .sponsors-container {
          gap: 6rem;
        }

        .partners-container {
          gap: 4rem;
        }

        .sponsors-text,
        .sponsors-button {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorsComponent {}
