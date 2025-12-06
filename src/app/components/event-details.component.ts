import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-event-details',
  template: `
  <div class="section-container">
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
        <span class="event-stats-label">edition</span>
        <span class="highlighted-text">3.</span>

      </div>

      <div class="event-stats-item">
        <span class="event-stats-label">days</span>
        <span class="highlighted-text">2</span>
      </div>

      <div class="event-stats-item">
        <span class="event-stats-label">tech talks</span>
        <span class="highlighted-text">14+</span>
      </div>

      <div class="event-stats-item">
        <span class="event-stats-label">workshop</span>
        <span class="highlighted-text">1</span>
      </div>
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
        padding: 3rem 1rem;
        background-color: var(--lighter-orange-color);
      }

      .section-container{
        display :flex;
        justify-content:center;
        flex-direction: column;
        align-items: center;
        gap:2rem;
      }

      .event-description,
      .event-organization {
        max-width: 100%;
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
        grid-template-rows: repeat(2, 1fr);
        row-gap: 2rem;
        column-gap: 2rem;
        max-width: 310px;
      }

      .event-stats-item {
        display: flex;
        flex-direction: column;
        align-items: left;
        background-color: var(--light-orange-color);
        text-transform: uppercase;
        padding: 1rem 1.5rem 0.5rem;
        border-radius: 0.5rem;
        max-width: 180px;
        border-right: 6px solid var(--logo-orange-color);
      }

      .event-stats-label{
        font-size: 0.7rem;
      }

      .event-stats-item > .highlighted-text {
        margin-top: 0.5rem;
        font-size: 2rem;
      }

      @media only screen and (min-width: 850px) {
        .section-container{
          max-width: 1000px;
          flex-direction: row;
          align-items: baseline;
          gap:4rem;
        }

        .event-description{
          max-width: 510px;
          font-size: 1.35rem;
        }

        .event-organization {
          max-width: 940px;
          font-size: 1.25rem;
        }

        .event-stats {
          max-width: 1000px;
        }

        .event-stats-item {
          font-size: 1rem;
        }

        .event-stats-item > .highlighted-text {
          font-size: 3rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {}
