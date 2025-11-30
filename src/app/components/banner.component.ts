import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bgd-banner',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1 style="display: none">NG Belgrade Conf 2024</h1>

    <img
      alt="NG Belgrade Conf 2024"
      src="/ng-belgrade-conf.svg"
      class="banner-logo"
      fetchPriority="high"
      loading="eager"
    />

    <p class="banner-title">The Largest Angular Conference in the Balkans</p>

    <div class="banner-details">
      <p class="conference-day"><b>CONFERENCE DAY</b> : May 24, 2024</p>
      <p><b>WORKSHOP DAY</b> : May 23, 2024</p>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 1rem;
        border-bottom: 1px solid var(--border-color);
        background-image: url(ng-belgrade-conf-cover.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      .banner-logo {
        width: 100%;
        height: auto;
        max-width: 505px;
      }

      .banner-title {
        margin: 2rem 0 4rem 0;
        font-weight: 600;
        font-size: 1.25rem;
        text-align: center;
      }

      .banner-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 4rem;
      }

      .banner-details > p {
        margin: 0;
        text-align: center;
        font-weight: 600;
      }

      .conference-day {
        padding: 0.5rem 1.5rem;
        background: white;
        color: var(--background-color);
        border-radius: 1.5rem 0;
      }

      @media only screen and (min-width: 850px) {
        :host {
          padding: 4rem 0;
        }

        .banner-logo {
          max-width: 670px;
        }

        .banner-title {
          font-size: 2rem;
        }

        .banner-details {
          font-size: 1.5rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {}
