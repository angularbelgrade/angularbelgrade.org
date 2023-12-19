import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-sponsors',
  standalone: true,
  template: `
    <h2 id="sponsors" class="section-title">Sponsors</h2>

    <h3>Silver</h3>

    <div class="sponsors-container">
      <a href="https://qposoft.com/en" target="_blank">
        <img
          alt="QPO Soft"
          src="/orgs/qpo-soft.svg"
          loading="lazy"
          style="max-width: 300px"
        />
      </a>
    </div>

    <h3>Bronze</h3>

    <div class="sponsors-container">
      <a href="https://offering.solutions/" target="_blank">
        <img
          alt="Offering Solutions Software"
          src="/orgs/offering-solutions-software.svg"
          loading="lazy"
          style="max-width: 300px"
        />
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
        background: var(--angular-gradient);
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
      }

      .sponsors-button:hover {
        color: inherit;
        opacity: 0.9;
      }

      @media only screen and (min-width: 850px) {
        .sponsors-button {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorsComponent {}
