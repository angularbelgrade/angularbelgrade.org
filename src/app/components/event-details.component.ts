import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-event-details',
  template: `
    <p class="event-description">
      <span class="highlighted-text">NG Belgrade Conf 2026</span> is the largest
      Angular conference in the Balkans. It takes place in <b>Belgrade</b>,
      Serbia, including a
      <span class="highlighted-text">Conference Day</span> on <b>May 7th</b> and
      a <span class="highlighted-text">Workshop Day</span> on <b>May 8th</b>.
      Join us to explore the latest trends and best practices in Angular!
    </p>

    <div class="event-stats">
      <div class="event-stats-item">
        <span class="highlighted-text">3.</span>
        <span class="event-stats-label">edition</span>
      </div>

      <div class="event-stats-item">
        <span class="highlighted-text">2</span>
        <span class="event-stats-label">days</span>
      </div>

      <div class="event-stats-item">
        <span class="highlighted-text">14+</span>
        <span class="event-stats-label">tech talks</span>
      </div>

      <div class="event-stats-item">
        <span class="highlighted-text">1</span>
        <span class="event-stats-label">workshop</span>
      </div>
    </div>

    <p class="event-organization">
      Organized with ❤️ by the community, for the community.
    </p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding: 2rem 1rem;
        border-bottom: 1px solid var(--border-color);
      }

      .event-description,
      .event-organization {
        line-height: 1.7;
        margin: 0;
      }

      .event-organization {
        text-align: center;
        margin-top: 1rem;
        font-weight: 600;
      }

      .event-stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        flex-direction: column;
        gap: 2rem;
      }

      .event-stats-item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .event-stats-item > .highlighted-text {
        font-size: 3rem;
      }

      @media only screen and (min-width: 850px) {
        .event-description,
        .event-organization {
          max-width: 940px;
          font-size: 1.25rem;
        }

        .event-stats {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          max-width: 1000px;
        }

        .event-stats-item > .highlighted-text {
          font-size: 4rem;
        }

        .event-stats-label {
          font-size: 1.25rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {}
