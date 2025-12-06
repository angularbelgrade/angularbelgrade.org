import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-tickets',
  template: `
    <h2 id="tickets" class="section-title">Tickets</h2>

    <p class="ticket-sales-note">Ticket sales will start soon!</p>
    <p class="waiting-list-note">
      <a href="https://forms.gle/h1AFiJEUoAfM1mNTA" target="_blank">
        Join the waiting list
      </a>
      to receive the latest updates.
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        padding-top: 2rem;
        background-color: var(--light-orange-color);
      }

      .ticket-sales-note {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 600;
        background: var(--logo-orange-color);
        width: fit-content;
        margin: 0 auto 2rem;
        padding: 0.3rem 1rem;
        color: white;
      }

      .waiting-list-note {
        margin-top: 2rem;
        text-align: center;
      }

      .tickets {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
      }

      .ticket {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 2.25rem 1rem 2rem 1rem;
        border-radius: 0.5rem;
        max-width: 300px;
        position: relative;
      }

      .badge {
        position: absolute;
        top: -1px;
        right: -1px;
        border-radius: 0 0.5rem;
        font-size: 0.79rem;
        font-weight: 600;
        white-space: nowrap;
        padding: 0.25rem 0.5rem;
        color: white;
      }

      .ticket-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }

      .ticket-name {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
      }

      .ticket-price {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }

      .base-price {
        position: relative;
        font-size: 1.5rem;
        color: lightslategray;
      }

      .base-price:before {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        right: 0;
        border-top: 2px solid;
        border-color: inherit;
        transform: rotate(-5deg);
      }

      .ticket > hr {
        border: 1px solid var(--border-color);
        width: 100%;
        margin: 0;
      }

      .ticket > ul {
        padding: 0 0 0 1.25rem;
        margin: 0.5rem 0 1rem 0;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .buy-button {
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
      }

      .buy-button:hover {
        opacity: 0.9;
      }

      .banner {
        position: absolute;
        height: calc(100% + 29px);
        width: calc(100% + 29px);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        background: rgba(252, 239, 222, 0.6);
        z-index: 1;
        top: -15px;
        border-radius: 0.5rem;
      }

      .banner-text {
        transform: rotate(-40deg);
        padding: 1rem;
        border: 4px solid;
        border-radius: 0.5rem;
      }

      .red-ticket {
        border: 2px solid var(--red-color);
        box-shadow: 0 0 14px 0 var(--red-color);
      }

      .red-ticket > .badge {
        background-color: var(--red-color);
      }

      .red-ticket > .buy-button {
        background-color: var(--red-color);
      }

      .red-ticket .banner-text {
        color: var(--red-color);
        border-color: var(--red-color);
      }

      .accent-ticket {
        border: 2px solid var(--accent-color);
        box-shadow: 0 0 14px 0 var(--accent-color);
      }

      .accent-ticket > .badge {
        background-color: var(--accent-color);
      }

      .accent-ticket > .buy-button {
        background-color: var(--accent-color);
      }

      .accent-ticket .banner-text {
        color: var(--accent-color);
        border-color: var(--accent-color);
      }

      .blue-ticket {
        border: 2px solid var(--blue-color);
        box-shadow: 0 0 14px 0 var(--blue-color);
      }

      .blue-ticket > .badge {
        background-color: var(--blue-color);
      }

      .blue-ticket > .buy-button {
        background-color: var(--blue-color);
      }

      .blue-ticket .banner-text {
        color: var(--blue-color);
        border-color: var(--blue-color);
      }

      .green-ticket {
        border: 2px solid var(--green-color);
        box-shadow: 0 0 14px 0 var(--green-color);
      }

      .green-ticket > .badge {
        background-color: var(--green-color);
      }

      .green-ticket > .buy-button {
        background-color: var(--green-color);
      }

      .green-ticket .banner-text {
        color: var(--green-color);
        border-color: var(--green-color);
      }

      .purple-ticket {
        border: 2px solid var(--purple-color);
        box-shadow: 0 0 14px 0 var(--purple-color);
      }

      .purple-ticket > .badge {
        background-color: var(--purple-color);
      }

      .purple-ticket > .buy-button {
        background-color: var(--purple-color);
      }

      .purple-ticket .banner-text {
        color: var(--purple-color);
        border-color: var(--purple-color);
      }

      .companies-note {
        margin: 2rem 1rem 0 1rem;
        line-height: 1.5;
      }

      .waiting-list-button {
        background: var(--angular-gradient);
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
      }

      .waiting-list-button:hover {
        color: inherit;
        opacity: 0.9;
      }

      @media only screen and (min-width: 850px) {
        .ticket-sales-note {
          font-size: 1.5rem;
        }

        .waiting-list-note {
          font-size: 1.25rem;
        }

        .tickets {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 300px));
          justify-content: center;
          align-items: stretch;
          gap: 4rem;
        }

        .ticket {
          justify-content: start;
        }

        .buy-button {
          margin-top: auto;
        }

        .companies-note {
          margin: 2rem auto 0 auto;
          text-align: center;
          max-width: 810px;
          font-size: 1.25rem;
        }

        .waiting-list-button {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsComponent {
  readonly buyTicketsLink =
    'https://www.entrio.hr/en/event/ng-belgrade-conf-2024-16380';
}
