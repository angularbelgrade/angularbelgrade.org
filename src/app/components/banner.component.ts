import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bgd-banner',
  imports: [RouterLink],
  template: `
    <h1 style="display: none">NG Belgrade Conf 2026</h1>

    <img
      alt="NG Belgrade Conf 2026"
      src="/ng-belgrade-conf.svg"
      class="banner-logo"
      fetchPriority="high"
      loading="eager"
    />

    <p class="banner-title">The Largest Angular Conference in the Balkans</p>

    <div class="banner-details">
      <p class="conference-day"><b>CONFERENCE DAY</b> : May 07, 2026</p>
      <p class="workshop-day"><b>WORKSHOP DAY</b> : May 08, 2026</p>
    </div>

    <a class="tickets-button" routerLink="/" fragment="tickets">
      Get Your Ticket
    </a>
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
        background-position: bottom;
        background-size: cover;
      }

      .banner-logo {
        width: 100%;
        height: auto;
        max-width: 505px;
      }

      .banner-title {
        color: var(--background-color);
        background: #830248b5;
        padding: 10px 20px;
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
        color: #ffffff;
        box-shadow: 10px 10px 0px -3px var(--gray-color);
        padding: 0.5rem 1.5rem;
      }

      .conference-day {
        background: var(--magenta-color);
      }

      .workshop-day {
        background: var(--orange-color);
      }

      .tickets-button {
        color: white;
        background: var(--purple-color);
        font-weight: 600;
        text-decoration: none;
        border-bottom: solid 4px var(--background-color);
        border-radius: 1.5rem;
        padding: 0.75rem 1.5rem;
      }

      .tickets-button:hover {
        color: var(--background-color);
        background: var(--dark-purple-color);
      }

      @media only screen and (min-width: 850px) {
        :host {
          padding: 4rem 0 9rem 0;
        }

        .banner-logo {
          max-width: 570px;
        }

        .banner-title {
          font-size: 1.7rem;
          font-weight: 700;
        }

        .banner-details,
        .tickets-button {
          font-size: 1.5rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {}
