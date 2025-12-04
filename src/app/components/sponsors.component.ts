import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-sponsors',
  template: `
    <h2 id="sponsors" class="section-title">Sponsors</h2>

    <h3>Platinum</h3>

    <div class="sponsors-container">
      <a
        href="https://swissmarketplace.group/"
        target="_blank"
        style="width: 600px; max-width: 90vw"
      >
        <img
          alt="Swiss Marketplace Group"
          src="/orgs/swiss-marketplace-group.svg"
          loading="lazy"
        />
      </a>
    </div>

    <h3>Gold</h3>

    <div class="sponsors-container">
      <a
        href="https://www.publicissapient.com/"
        target="_blank"
        style="width: 330px; max-width: 54vw"
      >
        <img
          alt="Publicis Sapient"
          src="/orgs/publicis-sapient.svg"
          loading="lazy"
        />
      </a>
    </div>

    <h3>Silver</h3>

    <div class="sponsors-container">
      <a
        href="https://qposoft.com/en"
        target="_blank"
        style="width: 300px; max-width: 50vw"
      >
        <img alt="QPO Soft" src="/orgs/qpo-soft.svg" loading="lazy" />
      </a>
    </div>

    <h3>Bronze</h3>

    <div class="sponsors-container">
      <a
        href="https://offering.solutions/"
        target="_blank"
        style="width: 300px; max-width: 50vw"
      >
        <img
          alt="Offering Solutions Software"
          src="/orgs/offering-solutions-software.svg"
          loading="lazy"
        />
      </a>

      <a
        href="https://globalitfactory.com/"
        target="_blank"
        style="width: 350px; max-width: 57vw"
      >
        <img alt="Global IT Factory" src="/orgs/gitf.svg" loading="lazy" />
      </a>
    </div>

    <div class="sponsors-actions">
      <a
        class="sponsors-button"
        href="https://forms.gle/LETukcGWLJ4HkJeS7"
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
        padding: 0 1rem 2rem 1rem;
        border-bottom: 1px solid var(--border-color);
      }

      h3 {
        text-align: center;
        font-size: 1.75rem;
        font-weight: 600;
        margin: 2rem;
      }

      .sponsors-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }

      img {
        width: 100%;
        height: auto;
      }

      .sponsors-actions {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 3rem;
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
        .sponsors-container {
          padding: 1rem 0;
          gap: 4rem;
        }

        .sponsors-button {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorsComponent {}
