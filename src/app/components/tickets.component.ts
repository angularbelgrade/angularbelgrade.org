import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-tickets',
  standalone: true,
  template: `
    <h2 id="tickets" class="section-title">Tickets</h2>

    <div class="tickets">
      <div class="ticket red-ticket">
        <span class="badge">until Feb 10</span>

        <div class="ticket-info">
          <h3 class="ticket-name">Early Bird Ticket</h3>
          <p class="ticket-price">
            <span class="regular-price">135€</span>
            100€
          </p>
        </div>

        <hr />

        <ul>
          <li>In-person access to the Conference Day on <b>May 24</b></li>
          <li>Early access to talk recordings</li>
          <li>Personalized badge</li>
          <li>Gift bag</li>
          <li>Coffee breaks with free drinks</li>
          <li>Lunch</li>
        </ul>

        <a class="buy-button" [href]="buyTicketsLink" target="_blank">
          Buy Now
        </a>
      </div>

      <div class="ticket purple-ticket">
        <span class="badge">30 seats available</span>

        <div class="ticket-info">
          <h3 class="ticket-name">Workshop Ticket *</h3>
          <p class="ticket-price">200€</p>
        </div>

        <hr />

        <ul>
          <li>In-person access to the Workshop Day on <b>May 23</b></li>
          <li>Early access to talk recordings</li>
          <li>Coffee breaks with free drinks</li>
          <li>Lunch</li>
        </ul>

        <a class="buy-button" [href]="buyTicketsLink" target="_blank">
          Buy Now
        </a>
      </div>
    </div>

    <p class="tickets-note">
      * Workshop Ticket does not include access to the Conference Day.
    </p>

    <p class="companies-note">
      <b>For companies:</b>
      We can issue an invoice for the desired number of tickets that can be paid
      directly to our account. Contact us at
      <a href="mailto:angularbelgrade@gmail.com">angularbelgrade@gmail.com</a>.
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--border-color);
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
        top: -1px;
        position: absolute;
        right: -1px;
        border-radius: 0 0.5rem;
        font-size: 0.79rem;
        font-weight: 600;
        white-space: nowrap;
        padding: 0.25rem 0.5rem;
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

      .regular-price {
        position: relative;
        font-size: 1.5rem;
        color: lightslategray;
      }

      .regular-price:before {
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
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
      }

      .buy-button:hover {
        color: inherit;
        opacity: 0.9;
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

      .tickets-note {
        margin: 1rem;
      }

      .companies-note {
        margin: 2rem 1rem 0 1rem;
      }

      @media only screen and (min-width: 850px) {
        .tickets {
          flex-direction: row;
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

        .tickets-note {
          text-align: center;
        }

        .companies-note {
          margin: 2rem auto 0 auto;
          text-align: center;
          max-width: 800px;
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
