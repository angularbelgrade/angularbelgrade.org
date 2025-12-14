import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ticketsResource } from '../resources/tickets.resource';

@Component({
  selector: 'bgd-tickets',
  template: `
    <h2 id="tickets" class="section-title">Tickets</h2>

    <div class="tickets">
      @for (ticket of tickets; track ticket.name) {
        <div class="ticket" [style]="ticket.styles.card">
          @if (ticket.note) {
            <span class="badge" [style]="ticket.styles.badge">
              {{ ticket.note }}
            </span>
          }

          @if (ticket.soldOut) {
            <div class="banner" [style]="ticket.styles.banner">
              <span class="banner-text">SOLD OUT</span>
            </div>
          }

          <div class="ticket-info">
            <h3 class="ticket-name">{{ ticket.name }}</h3>
            <p class="ticket-price">
              @if (ticket.basePrice) {
                <span class="base-price">{{ ticket.basePrice }}€</span>
              }
              {{ ticket.price }}€
            </p>
          </div>

          <hr />

          <ul>
            @for (benefit of ticket.benefits; track $index) {
              <li [innerHTML]="benefit"></li>
            }
          </ul>

          <a
            class="buy-button"
            [style]="ticket.styles.button"
            [href]="buyTicketsLink"
            target="_blank"
          >
            Buy Now
          </a>
        </div>
      }
    </div>

    <p class="companies-note">
      <b>For companies:</b>
      We can issue an invoice for the desired number of tickets that can be paid
      directly to our account. Contact us at
      <a href="mailto:angularbelgrade@gmail.com">
        angularbelgrade&#64;gmail.com
      </a>
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 3rem 0;
        background-color: var(--lighter-orange-color);
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
        justify-content: flex-start;
        gap: 1rem;
        padding: 2.25rem 1rem 2rem 1rem;
        border-radius: 0.5rem;
        min-height: 503px;
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
        margin-top: auto;
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

      .companies-note {
        margin: 2rem 1rem 0 1rem;
        line-height: 1.5;
      }

      @media only screen and (min-width: 850px) {
        .tickets {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 300px));
          justify-content: center;
          align-items: stretch;
          gap: 4rem;
        }

        .companies-note {
          margin: 2rem auto 0 auto;
          text-align: center;
          max-width: 810px;
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsComponent {
  readonly tickets = ticketsResource.tickets;
  readonly buyTicketsLink = ticketsResource.buyTicketsLink;
}
